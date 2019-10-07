import React from 'react';

import './TextField.scss';

interface IProps {
  value: string;
  label: string;
  onChange: Function;
}

const TextField = (props: IProps) => (
  <label className="text-field">
    <span
      className={`text-field__label ${
        !(props.value.length > 0) ? 'text-field__label--big' : ''
      }`}
    >
      {props.label}
    </span>
    <input
      value={props.value}
      name={props.label.toLowerCase()}
      onChange={e => props.onChange(e)}
      className="text-field__input"
    />
  </label>
);

TextField.defaultProps = {
  onChange: () => null
};

export default TextField;
