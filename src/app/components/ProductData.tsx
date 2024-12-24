import React from 'react'
import ProductCard from './ProductCard';
import {getAllPosts}from '../api/posts'

interface Product {
    id: number;
    title: string;
    body : string
}


async function ProductData () {

    const res = getAllPosts();
    // const res = await fetch("/api/posts?action=GETAll");
    if (!res) {
       throw new Error(`Failed to fetch posts: ${res}`);
    }

    const productList: Product[]  = res;

    console.log(productList);

  return (
    <>
    <div className="flex flex-wrap p-3 mt-3">
    {
        productList.map((item) => {
            return (
                    <> 
                     
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2" key={item.id}>
          <ProductCard      
                            id={item.id}               
                            title={item.title}
                            body= {item.body}
                        />
                        </div>
        
                       

                    </>
            )
        })  
    }
    </div>
    </>
  )
}

export default ProductData