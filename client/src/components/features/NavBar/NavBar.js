import React from 'react';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layout/MainMenu/MainMenu';

import style from './NavBar.module.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { path: '/home', title: 'Home' },
        // { path: '/post/random', title: 'Random post' },
        // { path: '/posts/new', title: 'Add post' },
        { path: '/posts', title: 'Posts' }
        // { path: '/contact', title: 'Contact' }
      ]
    };
  }

  render() {
    const { links } = this.state;

    return (
      <nav className={style.navbar}>
        <Logo links="" location=""></Logo>
        <MainMenu links={links}></MainMenu>
      </nav>
    );
  }
}

export default NavBar;
