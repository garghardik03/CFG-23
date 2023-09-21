import React from 'react'
import { useEffect,useContext,useState } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from '@/context/AuthProvider'
import DefaultTabs from '@/components/DefaultTabs'
import AllBenificiary from '@/components/AllBenificiary'
import { Button } from 'flowbite-react'
import TabView from '@/components/TabView'
const Admin = () => {

    const router = useRouter()
    const {user,isLoggedIn,logout} = useContext(AuthContext)
    useEffect(()=>{
        // if(!isLoggedIn){
        //     router.push("/login")
        // }


    },[user,isLoggedIn])


    const benificiary = ["name","contact","address","programme","age","Progress"]


  return (
    <div className='mx-auto mt-8 min-h-screen'>
         <Button className='mx-auto mt-8' onClick = {()=>router.push("/Progress")}>Progress Tracker</Button> 

        <DefaultTabs tabs={["All Benificiary","Donors","Our Events","Benificiary Recomendations","Proposed Donors","Volunteer Proposals","Corporates"]} tabC={[<TabView tabHead = {benificiary}/>]}/>
    </div>
  )
}

export default Admin