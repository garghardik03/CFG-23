"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


export default function GetInvolved(props) {
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

     fetch(`http://localhost:5000/activist`,{
      'method':'POST',
       headers : {
      'Content-Type':'application/json'
},
body:JSON.stringify(data)

}).then(res=>{

  res.json()

}).then((json=>{
  
    const notify = () => toast.success("successfully added");
  
    notify()
  
    
  
    setEmail("")
    setName("")
    setNumber("")
    setMessage("")
  

}))


  


  }
  return (
    <div className="m-4">
      <section
        style={{ "--image-url": `url(${props.url})` }}
        className="bg-cover bg-center bg-no-repeat bg-[image:var(--image-url)] bg-gray-700 bg-blend-multiply"
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            {props.title}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            {props.desc}
          </p>
        </div>
      </section>
      <div className="flex max-w-md flex-col gap-4 mx-auto mt-5">
        <div>
          <h3 className="text-3xl font-bold dark:text-white mx-auto">
            Get in Touch!
          </h3>
          <p className="mt-2 mb-2">
            Submit your details and we will get back to you.
          </p>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Name" />
            </div>
            <TextInput id="name" sizing="md" required type="text" value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Mobile No." />
            </div>
            <TextInput id="mobile" sizing="md" required pattern="[0-9]{10}"  value={number} onChange={(e)=>setNumber(e.target.value)} />
          </div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" />
          </div>
          <TextInput
            id="email1"
            value={email}
            placeholder="xyz@gmail.com"
            required
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="large" value="Message" />
          </div>
          <TextInput id="message"  value={message} onChange={(e)=>setMessage(e.target.value)} sizing="lg" type="text" />
        </div>
        <Button  onClick = {handleSubmit}>Submit</Button>
      </div>
      <ToastContainer />

    </div>
  );
}
