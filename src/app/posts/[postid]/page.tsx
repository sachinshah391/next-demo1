'use client'; // Ensure this is a Client Component if you're using React hooks

import React, { useEffect, useState } from 'react';
import { getPostById } from '../../api/posts'; 
import Navabar from '@/app/components/Navabar';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostByIdProps {
  params: Promise<{ postid: number }>; 
}

function PostById({ params }: PostByIdProps) {

  const [post, setPost] = useState<Post | null>(null); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  // Unwrap the params Promise and fetch the post data
  // useEffect(() => {
  //   const fetchParams = async () => {
  //     try {
  //       const resolvedParams = await params; // Wait for params to resolve
  //       setPostid(resolvedParams.postid);
  //       console.log(resolvedParams.postid)
  //     } catch (err) {
  //       setError('Failed to load params');
  //     }
  //   };

  //   fetchParams(); // Fetch params on mount
  // }, [params]); // Run once when component mounts

  // Fetch post data when postid is available
  useEffect(() => {

    
    const fetchPost = async () => {
      const resolvedParams = await params;
      try {
        setLoading(true);
        console.log("id",typeof(resolvedParams.postid))
        const postData = await getPostById(parseInt(resolvedParams.postid)); // Fetch the post using postid
        console.log(postData);
        setPost(postData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load post');
        setLoading(false);
      }
    };

    fetchPost(); // Call the fetch function when postid changes
  }, []); // Re-run when postid changes

  // Display loading, error, or post content
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div>

      <Navabar />

      {/* <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p><strong>Author:</strong> Author</p>
      <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p> */}


      <div className="flex justify-center items-center mt-8 p-2">
  <div className="card md:card-side bg-base-60 shadow-xl w-full max-w-md">
    <figure>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5XlLt7_SJQfNoa17Z4GwRGQ80Ft-g83e9mVOZl3LDsD4C1KQPg3TPKYlo1wAHhq2Xzk&usqp=CAU"
        alt="Album"
        className="w-full h-auto" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{post.title}</h2>
      <p>{post.body}</p>
      <p><strong>Author:</strong> Author</p>
      <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
  </div>
</div>

    </div>

    

  );
}

export default PostById;
