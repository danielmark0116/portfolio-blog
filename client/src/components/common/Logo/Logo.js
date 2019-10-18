import React, { Fragment } from 'react';

import LogoPic from '../../../assets/dg_logo.png';

import './Logo.scss';

const Logo = ({ links, location }) => (
  <Fragment>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={LogoPic} style={{ height: 60 }} alt="" />
      <h1 className="logo" style={{ paddingTop: 10 }}>
        blog
      </h1>
    </div>
  </Fragment>
);

export default Logo;
