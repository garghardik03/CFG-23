import React, { useState } from 'react'
import TableHead from './TableHead'
import TableRow from './TableRow'
import { Table } from 'flowbite-react'

const TabView = (props) => {



      const fields = props.tabHead

     const data =  [
        {name:"Mohan",contact:"8765432109",address:"Rohini,Delhi",programme:"skill development",age:"22",progress:"beginner"},
        {name:"Kush",contact:"8734276669",address:"Jaipur,Rajasthan",programme:"skill development",age:"21",progress:"beginner"},
        {name:"Akshita",contact:"8835434569",address:"Jodhpur, Rajasthan",programme:"skill development",age:"22",progress:"intermediate"},
        {name:"Rani",contact:"8765434532",address:"Mumbai,Maharashtra",programme:"women empowerment",age:"20",progress:"beginner"},
        {name:"Soham",contact:"876545632",address:"Pune,Maharashtra",programme:"skill development",age:"23",progress:"beginner"},
        {name:"Vedanti",contact:"876236789",address:"Mumbai,Maharashtra",programme:"women empowerment",age:"23",progress:"advance"},
        {name:"Palak",contact:"8765345109",address:"Thane,Maharashtra",programme:"women empowerment",age:"22",progress:"intermediate"},
        {name:"Joy",contact:"8765238109",address:"Pune,Maharashtra",programme:"skill development",age:"21",progress:"beginner"}
    ]

  
    const rendered = data.map((d,k)=>{
      const list = [d.name,d.contact,d.address,d.programme,d.age,d.progress]
      
      return (
  <TableRow rowContent={list} key={k} />
  
  
      )
    })
  return (
    <div className='w-4/5 m-auto'>

    <Table hoverable>
<TableHead heads = {fields}/>
<Table.Body className="divide-y">
{rendered}



</Table.Body>
  </Table>
  </div>

  )
}

export default TabView