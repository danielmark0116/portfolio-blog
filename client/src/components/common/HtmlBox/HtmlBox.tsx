import React from 'react';
// import ReactHtmlParser from 'react-html-parser';

interface IProps {
  children: string;
}

const HtmlBox = (props: IProps) => (
  <p className="html-box">{/* {ReactHtmlParser(children)} */}</p>
);

export default HtmlBox;
