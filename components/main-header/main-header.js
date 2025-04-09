"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import OtherHeaderBackground from "./other-header-background"; // 내부 페이지용 배경 컴포넌트
import logoImg from "@/assets/coffee-icon2.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
  const pathname = usePathname();
  // 홈(/) 페이지이면 메인 배경, 그 외에는 내부 페이지용 배경
  const isMainPage = pathname === "/";

  return (
      <>
        {isMainPage ? <MainHeaderBackground /> : <OtherHeaderBackground />}
        <header className={classes.header}>
          <Link className={classes.logo} href="/">
            <Image src={logoImg} alt="Café Conclave" priority />
            Café Conclave
          </Link>

          <nav className={classes.nav}>
            <ul>
              <li>
                <NavLink href="/cafes">Browse Cafes</NavLink>
              </li>
              <li>
                <NavLink href="/community">Coffee Community</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </>
  );
}
