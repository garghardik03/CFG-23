import ActCard from '@/components/ActCard'
import React from 'react'
import { useRouter } from 'next/router'
import { useContext,useEffect } from 'react'
import { AuthContext } from '@/context/AuthProvider'
const Activists = () => {



  const router = useRouter()
  const {user,isLoggedIn,logout} = useContext(AuthContext)
  useEffect(()=>{
      // if(!isLoggedIn){
      //     router.push("/login")
      // }


  },[user,isLoggedIn])

  return (
    <div className='m-auto flex-1 flex flex-wrap p-8 w-4/5'>
      <ActCard head = "Add A benificiary" desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." btn="Add Benificiary"/>
      <ActCard head ="Add Donor Details" desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      btn="Add Donor"/>
      <ActCard head = "Add Corporate" desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      btn="Add Corporate"/>


      {/* change button to modal in actcard comp and add form to modals */}

    </div>
  )
}

export default Activists