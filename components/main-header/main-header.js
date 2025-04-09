import Link from 'next/link';
import Image from 'next/image';

import MainHeaderBackground from './main-header-background';
import logoImg from '@/assets/coffee-icon2.png';
import classes from './main-header.module.css';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
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
