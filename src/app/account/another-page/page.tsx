import NoItems from "@/components/NoItems";
import React from "react";

function page() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Another Page</h1>
      </div>
      <NoItems />
    </>
  );
}

export default page;
