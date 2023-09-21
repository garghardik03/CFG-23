'use client';

import { Tabs } from 'flowbite-react';


export default function DefaultTabs(props) {
  const tabs = props.tabs
  const tabComponents = props.tabC
  const rendered = tabs.map((tab,k)=>{
    return(
      <Tabs.Item
      key={k}
      
      
      
      title={tab}
    >
    

      {tabComponents[k]}
      
    </Tabs.Item>
    )
  })

  return (
    <Tabs.Group
      aria-label="Default tabs"
      style="underline"
      className='m-auto border-none'
    >

      {rendered}
      
    </Tabs.Group>
  )
}


