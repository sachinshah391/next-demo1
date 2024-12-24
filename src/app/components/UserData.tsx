import React from 'react'

interface User{
    id: number,
    title: string,
    
}

async function UserData () {

    const res = await fetch('https://fakestoreapi.com/products');
    const user: User[]  = await res.json();
    // const userDatas : User[] =  user.products;
    console.log(user);

  return (
    <>
    {
        user.map((item) => {
            return (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    {/* <p>{item.body}</p> */}
                </div>
            )
        })  
    }
    </>
  )
}

export default UserData