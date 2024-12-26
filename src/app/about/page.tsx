// import UserData from "../components/UserData"

// export default function AboutPage(){
//     return(
//         <div>
//             {/* <UserData /> */}
//             <h1>About</h1>
//             <p> This is the about page</p>
//         </div>
//     )
// }

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const AboutPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center py-8">
      
      <div className="bg-blue-500 w-full py-6 shadow-md text-white text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 mt-10 text-center">
        <p className="text-lg mb-6">
          Welcome to our multi-functional web application! Our platform offers two unique features:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">
              Google Notes Clone
            </h2>
            <p>
              Capture your ideas, tasks, and thoughts with our note-taking app.
              It’s simple, intuitive, and perfect for staying organized.
            </p>
            <button
              onClick={() => router.push('/posts')}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Go to Notes
            </button>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-green-500 mb-4">
              Product Showcase
            </h2>
            <p>
              Explore a curated list of products with details like images, prices, and descriptions.
              A great way to showcase items visually.
            </p>
            <button
              onClick={() => router.push('/products')}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
