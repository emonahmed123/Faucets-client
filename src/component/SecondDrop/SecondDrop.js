import React, { useState } from 'react'

const SecondDrop = (props) => {
  const {openSecond,setOpend}=props;
   
  const [datas,setData]= useState('')
   console.log(datas)
   

  return (
    <div>
       <ul className='DropProfile' >
        <li onClick={()=>setData('emon')} >emon</li>
        <li>Sumon</li>
        <li>Ailf</li>
        <li>ee</li>
     
       </ul>
    </div>
  )
}

export default SecondDrop
