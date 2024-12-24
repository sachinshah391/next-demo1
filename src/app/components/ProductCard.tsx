import Link from 'next/link';
import React from 'react';

interface ProductDataProps {
  id:number,
  title: string;
  body: string;
}

const ProductCard: React.FC<ProductDataProps> = ({ id,title, body }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
        <Link href={`/posts/${id}`} className="btn btn-primary">
           Explore More
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
