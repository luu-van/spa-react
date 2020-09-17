import React from 'react';

const Navbar = (props) => (
    <nav>
        <h2 class="logo"><a class="logo-link" href="#">{props.name}</a></h2>
        <ul class="nav-menu">
          <li><a class="nav-menu__link" href="#">{props.name}</a></li>
          <li><a class="nav-menu__link" href="#">Best Actors</a></li>
          <li><a class="nav-menu__link" href="#">Best Actress</a></li>
          <li><a class="nav-menu__link" href="#">Best Films</a></li>
        </ul>
      </nav>
);

export default Navbar;