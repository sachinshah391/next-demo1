import React from 'react'

async function page({params}) {
    const data = await params;
    console.log(data)
  return (
    <>
    <div>{data.data[0]}</div>
    <div>{data.data[1]}</div>
    <div>{data.data[2]}</div>
    <div>{data.data[3]}</div>
    
    
    </>
  )
}

export default page