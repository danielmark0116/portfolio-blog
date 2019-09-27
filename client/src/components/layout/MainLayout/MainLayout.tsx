import React from 'react';
import NavBar from '../../features/NavBar/NavBar';

interface IProps {
  children: React.ReactChild;
}

const MainLayout = (props: IProps) => {
  return (
    <div>
      <NavBar></NavBar>
      {props.children}
    </div>
  );
};

export default MainLayout;
