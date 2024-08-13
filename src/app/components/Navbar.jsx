// image
import Image from "next/image";
import Logo from "./dojo-logo.png";
import Link from "next/link";

function Navbar() {
  return (
    <div className="mx-auto max-w-5xl">
      <ul className="flex items-center gap-5">
        <li className="flex items-center gap-3">
          <Image src={Logo} width={80} height={80} />
          <Link href="/" className="text-primary font-bold">
            Dojo Helpdesk
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="font-normal text-slate-400 hover:text-black"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="font-normal text-slate-400 hover:text-black"
          >
            Tickets
          </Link>
        </li>
        <li>
          <Link
            href="/createTikket"
            className="font-normal text-slate-400 hover:text-black"
          >
            Create Tickets
          </Link>
        </li>
      </ul>
      <div className="w-full h-[1px] bg-slate-400 mt-5"></div>
    </div>
  );
}

export default Navbar;
