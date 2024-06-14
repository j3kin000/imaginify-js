"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src={"/assets/images/logo-text.svg"}
          alt="logo"
          width={180}
          height={28}
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger>
              <Image
                src={"/assets/icons/menu.svg"}
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src={"/assets/images/logo-text.svg"}
                  alt="logo"
                  width={152}
                  height={23}
                />

                <nav className="sidebar-nav">
                  <SignedIn>
                    <ul className="sidebar-nav_elements">
                      {navLinks.map((navLink) => {
                        const isActive = navLink.route === pathname;
                        return (
                          <li
                            key={navLink.route}
                            className={` ${
                              isActive && "gradient-text"
                            } p-18 flex whitespace-nowrap text-dark-700`}
                          >
                            <Link
                              className="sidebar-link cursor-pointer"
                              href={navLink.route}
                            >
                              <Image
                                src={navLink.icon}
                                alt="logo"
                                width={24}
                                height={24}
                              />
                              {navLink.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </SignedIn>
                </nav>
              </>
            </SheetContent>
          </Sheet>
          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </SignedOut>
        </SignedIn>
      </nav>
    </header>
  );
};

export default MobileNav;
