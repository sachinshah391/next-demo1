import React from "react";
import Navabar from "./components/Navabar";

import AddPost from "./addpost/page";

export default function Home() {
  return (
    <>
    <div className="bg-gray-50">
      <Navabar />
      <AddPost />
      {/* <ProductData /> */}
      </div>
    </>
  );
}
