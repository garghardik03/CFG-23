
'use client';

import { Button, Card } from 'flowbite-react';
import React from 'react'
import ModalForm from './ModalForm';
import FormDetails from './FormDetails';
const ActCard = (props) => {
  return (
    <div className='m-8'>
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        
          {props.head}
        
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        
          {props.desc}
        
      </p>
      {/* <Button onClick = {props.function}>
        <p>
        {props.btn}
        </p>
        
      </Button> */}
      <ModalForm btn = {props.btn} body = {<FormDetails/>}/> 
      {/* add form in body */}
    </Card>
    </div>
  )
}

export default ActCard






