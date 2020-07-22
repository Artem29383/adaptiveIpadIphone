import React, { memo, useEffect, useState } from 'react';
import classes from './styles/Time.module.scss';
import { getTime } from './utils/getTime';

const Time = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    getTime(setTime);
  }, []);

  return <div className={classes.time}>{time}</div>;
};

export default memo(Time);
