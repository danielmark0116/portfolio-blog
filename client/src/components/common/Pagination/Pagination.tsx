import React, { Component } from 'react';

import style from './Pagination.module.scss';

interface IProps {
  pages: number;
  initialPage: number;
  onPageChange: Function;
  activePage: number;
}

interface IState {
  presentPage: number;
}

export default class Pagination extends Component<IProps, IState> {
  static defaultProps = {
    initialPage: 1,
    activePage: 1
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      presentPage: this.props.initialPage
    };
  }

  changePage = (newPage: number) => {
    const { onPageChange } = this.props;
    this.setState({
      presentPage: newPage
    });

    onPageChange(newPage);
  };

  render() {
    const { pages, activePage } = this.props;
    const { changePage } = this;

    return (
      <div className={style.pagination}>
        <ul className={style.pagination__list}>
          {activePage > 1 && (
            <li
              className={style.pagination__list__item}
              onClick={() => {
                changePage(activePage - 1);
              }}
            >
              {'<'}
            </li>
          )}
          {[...Array(pages)].map((el, page) => (
            <li
              key={++page}
              onClick={() => {
                changePage(page);
              }}
              className={`${style.pagination__list__item} ${
                page === activePage ? style.pagination__list__item_active : ''
              }`}
            >
              {page}
            </li>
          ))}
          {activePage < pages && (
            <li
              className={style.pagination__list__item}
              onClick={() => {
                changePage(activePage + 1);
              }}
            >
              {'>'}
            </li>
          )}
        </ul>
      </div>
    );
  }
}
