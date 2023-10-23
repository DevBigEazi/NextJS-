import "./about.scss";
import about from "./about.module.scss";

export const metadata = {
  title: "About Page",
  description: "This is an about page"
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className={`main ${about.main}`}>
        <nav style={{ backgroundColor: about.primaryColor }}>About Navbar</nav>
        {children}
      </main>
    </>
  );
}
