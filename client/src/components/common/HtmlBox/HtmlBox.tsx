import React from 'react';
import ReactHtmlParser from 'react-html-parser';

interface IProps {
  children: string;
}

const HtmlBox = (props: IProps) => (
  <div className="html-box">{ReactHtmlParser(props.children)}</div>
);

export default HtmlBox;
