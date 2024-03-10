"use client";

import HomeIcon from "./icons/home";
import SearchIcon from "./icons/search";
import CreatePostIcon from "./icons/create-post";
import NotificationIcon from "./icons/notification";
import PersonIcon from "./icons/person";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarComponent = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  return (
    <div className="bottom-0 absolute right-0 left-0">
      <div className="max-w-[500px] mx-auto px-6 py-4 border-t border-slate-300 bg-white">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/">
              <HomeIcon variants={isActive("/") ? "full" : "outline"} />
            </Link>
          </li>
          <li>
            <Link href="/search">
              <SearchIcon variants={isActive("/search") ? "full" : "outline"} />
            </Link>
          </li>
          <li>
            <Link href="/post/create">
              <CreatePostIcon
                variants={isActive("/post/create") ? "full" : "outline"}
              />
            </Link>
          </li>
          <li>
            <Link href="/notification">
              <NotificationIcon
                variants={isActive("/notification") ? "full" : "outline"}
              />
            </Link>
          </li>
          <li>
            <Link href="/person">
              <PersonIcon variants={isActive("/person") ? "full" : "outline"} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarComponent;
