import Link from "next/link";

const Home = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1>Todo</h1>
        <Link
          href="/new"
          className="border border-slate-50 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-600 outline-none"
        >
          New
        </Link>
      </header>
      <ul></ul>
    </>
  );
};

export default Home;
