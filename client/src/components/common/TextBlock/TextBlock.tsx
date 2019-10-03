import React from 'react';

import style from './TextBlock.module.scss';

interface IProps {
  children: string;
  role: 'primary' | 'secondary';
}

const TextBlock = (props: IProps) => {
  return (
    <p
      className={
        props.role === 'primary'
          ? style.author_text
          : props.role === 'secondary'
          ? style.author_text_secondary
          : ''
      }
    >
      {props.children}
    </p>
  );
};

TextBlock.defaultProps = {
  role: 'primary'
};

export default TextBlock;
