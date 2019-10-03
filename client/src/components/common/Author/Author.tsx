import React from 'react';

import style from './Author.module.scss';

interface IProps {
  children: string;
}

const Author = (props: IProps) => {
  return <p className={style.author_text}>By: {props.children}</p>;
};

export default Author;
