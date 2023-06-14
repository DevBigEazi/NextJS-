import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href="/about">Check About Page</Link>
    </>
  );
};

export default Home;
