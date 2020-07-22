import React, { memo } from 'react';
import classes from './styles/Icon.module.scss';

const Icon = ({ onClick, path, text }) => (
  <div onClick={onClick} className={classes.iconItem}>
    <img src={path} alt="" />
    <p>{text}</p>
  </div>
);

export default memo(Icon);
