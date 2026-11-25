import { Link } from "react-router";
import Logo from "../../assets/Logo";

const links: TLink[] = [
  {
    label: "HOME",
    slug: "/",
  },
  {
    label: "SHOP",
    slug: "/shop",
  },
  {
    label: "CATEGORIES",
    slug: "/categories",
  },
  {
    label: "BEST SELLERS",
    slug: "/best-sellers",
  },
  {
    label: "ABOUT US",
    slug: "/about",
  },
];

export default function Navbar() {
  return (
    <header className="bg-primary/25 backdrop-blur-lg body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={"/"} className="flex items-center text-white mb-4 md:mb-0">
          <Logo />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base font-medium justify-center">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.slug}
              className="mr-5 text-gray-300 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link to={"/contact"}>
          <button className="btn">CONTACT US</button>
        </Link>
      </div>
    </header>
  );
}
