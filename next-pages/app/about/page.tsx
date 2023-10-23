import Link from "next/link";

const About = () => {
    // throw new Error("Hey there!");
  return (
    <>
      <h1>About</h1>
      <Link href="/">Go to homepage</Link>
      <br />
      <Link href="/about/call">Call</Link>
    </>
  );
};

export default About;
