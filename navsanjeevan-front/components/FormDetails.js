import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const FormDetails = () => {
  const [name,setName] = useState("")
  const [number,setNumber] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  function handleSubmit(){
    const data = {
      name:name,
      email:email,
      number:number,
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
  
    const notify = () => toast.success("success");
  
    notify()
  
    
  
    setEmail("")
    setName("")
    setNumber("")
    setMessage("")
  

}))

  


  }
  return (

              <div className="flex max-w-md flex-col gap-4 mx-auto mt-5">
        <div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Name" />
            </div>
            <TextInput id="name" sizing="md" required type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Mobile No." />
            </div>
            <TextInput id="mobile" sizing="md" required pattern="[0-9]{10}" value={number} onChange={(e)=>setNumber(e.target.value)}/>
          </div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="email" />
          </div>
          <TextInput
            id="email1"
            placeholder="xyz@gmail.com"
            required
            type="email"
            value={email} onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="large" value="Message" />
          </div>
          <TextInput value={message} onChange={(e)=>setMessage(e.target.value)} id="message" sizing="lg" type="text" />
        </div>
        <Button  onClick = {handleSubmit}>Submit</Button>
        <ToastContainer/>
      
    </div>
  )
}

export default FormDetails