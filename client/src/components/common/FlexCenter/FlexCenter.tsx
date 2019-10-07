import React from 'react';

interface IProps {
  children: React.ReactChild;
}

const FlexCenter = (props: IProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {props.children}
    </div>
  );
};

export default FlexCenter;
