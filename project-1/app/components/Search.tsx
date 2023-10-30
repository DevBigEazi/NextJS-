"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };
  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="text-xl rounded-xl bg-white p-2"
        placeholder="Search"
      />
      <button className="bg-yellow-600  ml-5 p-3 rounded-full font-bold">
        🚀
      </button>
    </form>
  );
};

export default Search;
