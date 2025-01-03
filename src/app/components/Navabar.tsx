'use client';

import Link from 'next/link';
import React from 'react';
import { useCart } from '../../context/CartContext';

function Navabar() {
  const { cart } = useCart();

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Homepage</Link>
              </li>
              <li>
                <Link href="/posts">All Posts</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/welcome">Welcome</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Post App</a>
        </div>
        <div className="navbar-end">
          <Link href="/cart">
            <button className="ml-4 btn btn-primary">
              View Cart
              {cart.length > 0 && (
                <span className="ml-2 badge badge-accent">{cart.length}</span>
              )}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navabar;
