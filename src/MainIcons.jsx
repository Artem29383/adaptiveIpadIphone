import React, { memo } from 'react';
import classes from './styles/MainIcons.module.scss';

const MainIcons = ({ mainIcons }) => (
  <div className={classes.mainIcons}>
    {mainIcons.map(icon => (
      <div key={icon.id} className={classes.iconItem}>
        <img src={icon.path} alt="" />
        <p>{icon.text}</p>
      </div>
    ))}
  </div>
);

export default memo(MainIcons);
