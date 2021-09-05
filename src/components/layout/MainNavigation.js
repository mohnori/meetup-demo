import { Link } from "react-router-dom";

import calsses from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={calsses.header}>
      <div className={calsses.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/Favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
