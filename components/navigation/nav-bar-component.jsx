import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import NAV_BAR_DATA from './nav-bar.data';
import { fullName } from '../../shared/constants';

// Custom Logo component
const Logo = () => {
  const router = useRouter();
  return (
    <Link href="/">
      <div className="logo-container">
        {router.pathname === '/contact' ? (
          <img src="/images/logoOnContact.svg" alt={`${fullName}'s logo.`} />
        ) : (
          <img src="/images/logo-light-bg.svg" alt={`${fullName}'s logo.`} />
        )}
      </div>
    </Link>
  );
};

const NavigationLinks = ({ navBarData }) => {
  const router = useRouter();
  return (
    <ul className={`${router.pathname !== '/' && 'lighten-nav'}`}>
      {navBarData.map(({ id, href, displayName }) => {
        const updatedClassName = router.pathname === href && 'selected';
        return (
          <li key={id}>
            <Link href={href} className={updatedClassName}>
              {displayName}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

// Main NavBar component
export default function NavBar() {
  const [navBarData] = useState(NAV_BAR_DATA);

  return (
    <nav className="header-nav nav-wrapper">
      <Logo />
      <NavigationLinks navBarData={navBarData} />
    </nav>
  );
}
