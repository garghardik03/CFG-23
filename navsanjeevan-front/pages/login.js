'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { AuthContext } from '@/context/AuthProvider'
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router';


const Login = () => {
    const router = useRouter()
    const {login,loginInProcess,isLoggedIn} = useContext(AuthContext)
    const [userid,setUserid] = useState("") 
    const [password,setPassword] = useState(null)

    function handleSubmit(){
        try{
            login(userid,password)
            if(isLoggedIn){
                router.push("/admin")
            }

        }catch{
            (err)=>console.log(err)
        }
        



    }

  return (
    <div className="flex max-w-md flex-col gap-4 mx-auto mt-20 min-h-screen ">
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="userid"
          value="User Id"
        />
      </div>
      <TextInput
        id="userid"
        placeholder="name@gmail.com"
        required
        type="email"
      />
    </div>
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="password1"
          value="Your password"
        />
      </div>
      <TextInput
        id="password1"
        required
        type="password"
      />
    </div>

    {loginInProcess?<Button isProcessing disabled> Loading</Button>: <Button onClick = {handleSubmit} >
      Submit
    </Button>}
  </div>
    
    
  )
}




export default Login