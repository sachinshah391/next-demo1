'use client';

import React, { useState, useEffect } from 'react';
import { createPost, getAllPosts } from '../api/posts'; 
import ProductCard from './ProductCard';

interface Product {
  id: number;
  title: string;
  body: string;
}

const PostList: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [formData, setFormData] = useState({ id: 0, title: '', body: '' });

  // Fetch all posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getAllPosts(); // Assuming this function fetches posts from an API
        setProductList(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPost: Product = {
      id: productList.length + 1,
      title: formData.title,
      body: formData.body,
    };

    try {
      const returnPost = await createPost(newPost);
      //setProductList((prevPosts) => [...prevPosts, returnPost]); // Add the new post to the list
      console.log(returnPost);

      // Clear the form
      setFormData({ id: 0, title: '', body: '' });
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>

      {/* Display List of Posts */}
      <div className="flex flex-wrap p-3 mt-3">

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="grow"
          />
        </label>

        <textarea
          name="body"
          className="textarea textarea-bordered"
          placeholder="Body"
          value={formData.body}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="btn btn-primary">
          Add Post
        </button>
      </form>
        {
        productList.map((item,index) => {
            return (
                    
                     
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2" key={item.id || index}>
          <ProductCard
                            id={item.id}
                            title={item.title}
                            body= {item.body}
                        />
                        </div>               

                    
            )
        })  
    }
      
      </div>
    </div>
  );
};

export default PostList;
