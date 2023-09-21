# all routes are with respect to react frontend

from flask import Flask, request, flash, url_for, redirect, render_template, session, g
from flask_pymongo import PyMongo
from flask_cors import CORS
import razorpay
import json
from flask import jsonify
import hashlib
from bson.objectid import ObjectId

api_key="rzp_test_nPK5C2HFxCGUFy"
secret_api_key="uzvGZ5mkzCr6H0quMoJ1gssp"
salt = 'owui4ht3uhtl2thloKSFB'
app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] ='mongodb://localhost:27017/Navsanjeevan'
mongo = PyMongo(app)




def string_hash(text): 
    return hashlib.sha256(salt.encode() + text.encode()).hexdigest() + ':' + salt 


def check_auth_login(usr_eml, usr_pwd):

    auth_users_col = mongo.db.authenticate_user 
    hashed_pwd = string_hash(usr_pwd)
    search_data = {'usr_eml': usr_eml, 'usr_pwd': hashed_pwd}

    res = auth_users_col.count_documents(search_data)
    is_activated = auth_users_col.find_one(search_data) # Checking if user is activated or not

    if is_activated is None:
        return False
    is_activated = True

    if res == 1 and is_activated == True:
        # User verification successful
        return True
    else:
        # User verification failed
        return False

@app.route('/login', methods=['GET', 'POST'])
def login():
    remember = request.form.get('remember')
    if g.user:  # if user is already logged in
        return jsonify({'message': 'Already logged in'})
    else:
        if request.method == 'GET':
            return jsonify({'message': 'Please log in'})
        elif request.method == 'POST':
            if check_auth_login(request.form['usr_eml'], request.form['usr_pwd']):
                session['user'] = request.form['usr_eml']
                g.user = session['user']
                if remember:
                    session.permanent = True
                else:
                    session.permanent = False
                return jsonify({'status':True,'message': 'Logged in successfully','role':request.form['role']})
            else:
                return jsonify({'status':False,'message': 'Incorrect username/password'})


# donation routes

@app.route('/payment', methods=['GET', 'POST'])  
def payment():
    if request.method == 'POST':
        email = request.form['email'] 
        name = request.form['name']  
        amount = int(request.form['amount']) * 100
        message = request.form['message'] 
        mobile = request.form['mobile_number']
        
        mongo.db.Pay.insert_one({
            'email': email,
            'name': name,
            'amount': amount,
            'message': message, 
            'mobile_number': mobile
        })
        client = razorpay.Client(auth=(api_key, secret_api_key))
        payment = client.order.create({
            'amount': amount,
            'currency': 'INR',
            'payment_capture': '1'
        })
        user={'email':email,'name':name,'amount':amount,'message':message,'mobile_number':mobile}
        return jsonify(payment, user)
    


#routes for future donations and it will have data from a form and will be stored in database and will be used in future so just a message will be displayed

@app.route('/donate',methods=['GET','POST'])
def donate():
    if request.method=='POST':
        name=request.form['name']
        email=request.form['email']
        amount=request.form['amount']
        purpose=request.form['purpose']
        mongo.db.Donate.insert_one({'name':name,'email':email,'amount':amount,'purpose':purpose})
        return jsonify({'status':True,'id':name})
    return jsonify({'status':False})



#route for activist registration form and it will have data from a form and will be stored in database
@app.route('/activist', methods=['POST'])
def create_activist():
    if request.method == 'POST':
        data = request.get_json() # Getting data from request body
        print(data)
        name = data['name']
        mobile_number = data['number']
        email = data['email']
        message = data['message']
        mongo.db.activists.insert_one({'name': name, 'mobile_number': mobile_number, 'email': email, 'message': message})# Inserting data into database and .inserted_id returns the id of the inserted document
        return jsonify({'status':True}) # Returning the id of the inserted document
    return jsonify({'status':False})


#route for feedback form which has form for donors which will give the feedback and it will be stored in database
#the feedback will be whether their donations are used right or now
@app.route('/feedback', methods=['POST'])
def create_feedback():
    if request.method == 'POST':
        data = request.get_json()
        name = data['name']
        email = data['email']
        message = data['message']
        mongo.db.feedback.insert_one({'name':name,'email':email,'message':message})
        return jsonify({'status':True})
    return jsonify({'status':False})


#route to get data of a corporate entered in the form and it will be stored in database
@app.route('/corporate', methods=['POST'])
def create_corporate():
    if request.method == 'POST':
        data = request.get_json()
        name = data['name']
        email = data['email']
        message = data['message']
        mobile=data['mobile_number']
        location=data['location']
        mongo.db.corporate.insert_one({'name':name,'email':email,'message':message,'mobile_number':mobile,'location':location})
        return jsonify({'status':True})
    return jsonify({'status':False})





#route for a recommendation form which will be filled by ones who want to recommend someone who can be benifitted and can be a beneficiary of the NGO along with the programs he/she can be benifitted from and it will be stored in database
@app.route('/recommendation', methods=['POST'])
def create_recommendation():
    if request.method == 'POST':
        data = request.get_json()
        name = data['name']
        email = data['email']
        message = data['message']
        mobile=data['mobile_number']
        programme=data['programmme']
        city=data['city']
        mongo.db.recommendation.insert_one({'name':name,'email':email,'message':message,'mobile_number':mobile,'programme':programme,'city':city})
        return jsonify({'status':True})
    return jsonify({'status':False})



#if an activist logs in then he/she can have routes either to fill a form with details of beneficiaries or to see the details of beneficiaries with a id which will be given to them when they fill the form or update the program details of the beneficiaries with the id given to them when they fill the form and the details will be stored in database
@app.route('/xyz',methods=['GET','POST'])
def activist():
    if request.method=='POST':
        data=request.get_json()
        name=data['name']
        email=data['email']
        mobile_number=data['number']
        message=data['message']
        mongo.db.beneficiaries.insert_one({'name':name,'email':email,'mobile_number':mobile_number,'message':message})
        return jsonify({'status':True})
    return jsonify({'status':False})

#route for a activist to see data of a particular beneficiary with the id given to them when they fill the form and update the program details of the beneficiaries with the id given to them when they fill the form
@app.route('/activist/<beneficiary_id>',methods=['GET','POST'])
def activist_beneficiary(beneficiary_id):
    if request.method=='GET':
        oid=ObjectId(beneficiary_id)
        user=mongo.db.beneficiaries.find_one({'_id':oid})
        return jsonify(user)
    return jsonify({'status':False})


#route for admin to filter to get data of all feedbacks
@app.route('/admin/feedback',methods=['GET'])
def admin_feedback():
    if request.method=='GET':
        user=mongo.db.feedback.find()
        return jsonify(user)
    return jsonify({'status':False})




#route for admin to filter and get data of all recommendations 
@app.route('/admin/recommendation',methods=['GET'])
def admin_recommendation():
    if request.method=='GET':
        user=mongo.db.recommendation.find()
        return jsonify(user)
    return jsonify({'status':False})






#route to get data of all activists
@app.route('/admin/activist',methods=['GET'])
def admin_activist():
    if request.method=='GET':
        user=mongo.db.activists.find()
        return jsonify(user)
    return jsonify({'status':False})




#route to get data of all beneficiaries
@app.route('/admin/beneficiary',methods=['GET'])
def admin_beneficiary():
    if request.method=='GET':
        user=mongo.db.beneficiaries.find()
        return jsonify(user)
    return jsonify({'status':False})






if __name__=='__main__':
    app.run(debug=True,port=5000)