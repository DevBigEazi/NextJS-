import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="flex flex-col bg-yellow-800 justify-between top-0 sticky drop-shadow-xl p-4 md:flex-row">
      <h1 className="text-white font-bold text-3xl grid place-content-center mb-2 md:mb-0">
        <Link href="/">WikiRockets!</Link>
      </h1>
      <Search />
    </nav>
  );
};

export default Navbar;
