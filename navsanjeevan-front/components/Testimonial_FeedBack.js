import React, { useState } from 'react'
import { Button, Textarea, Label, TextInput } from 'flowbite-react';
import { ToastContainer, toast } from 'react-toastify';
const Testimonial_FeedBack = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")


    function handleSubmit(){
        const data = {
          name:name,
          email:email,
          message:message
  }
         console.log(JSON.stringify(data))
    
         fetch(`http://localhost:5000/activist/benificiary`,{
          'method':'POST',
           headers : {
          'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
    
    }).then(res=>{
    
      res.json()
    
    }).then((json=>{
      
        const notify = () => toast.success("Successfully Added Feedback");
      
        notify()
      
        
      
        setEmail("")
        setName("")
        // setNumber("")
        setMessage("")
      
    
    }))
    
      
    
    
      }


   
 
    return (


        <div className="flex justify-evenly flex-wrap">

            <div className='flex items-center flex-wrap ' >
                <img className="h-[30em] blur-sm " src="https://bhumi.ngo/wp-content/uploads/2022/08/HOME-FELLO-CHILDREN.webp" alt="" 
                
                />
            </div>

            <form className="flex max-w-md flex-col gap-3 w-screen ">
                {/* Name */}

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Full Name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        required
                        placeholder="Enter your name..."
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>

                {/* Email */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Email ID"
                        />
                    </div>
                    <TextInput
                        id="email"
                        required
                        type="email"
                        placeholder="Enter your Email Id..."
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>


                {/* message */}
                <div
                    className="max-w-md"
                    id="textarea"
                >
                    <div className="mb-2 block">
                        <Label
                            htmlFor="message"
                            value="Your message"
                        />
                    </div>
                    <Textarea
                        id="message"
                        placeholder="Leave a FeedBack..."
                        required
                        rows={3}
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                    />
                </div>
                <Button onClick = {handleSubmit}>
                    Submit
                </Button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Testimonial_FeedBack