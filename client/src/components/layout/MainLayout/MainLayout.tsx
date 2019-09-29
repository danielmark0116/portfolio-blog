import React, { Fragment } from 'react';
import NavBar from '../../features/NavBar/NavBar';
import PageContainer from '../PageContainer/PageContainer';

interface IProps {
  children: React.ReactChild;
}

const MainLayout = (props: IProps) => {
  return (
    <Fragment>
      <PageContainer>
        <NavBar></NavBar>
        {props.children}
      </PageContainer>
    </Fragment>
  );
};

export default MainLayout;
