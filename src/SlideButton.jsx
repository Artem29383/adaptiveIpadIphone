import React, { memo, useCallback } from 'react';
import classnames from 'classnames';
import classes from './styles/SlideButton.module.scss';

const SlideButton = ({
  setScreenActive,
  index,
  width,
  setShift,
  screenActive,
}) => {
  const handleSliderChange = useCallback(() => {
    setScreenActive(index);
    setShift(-width * index);
  }, [screenActive, width]);

  return (
    <button
      className={classnames(
        classes.buttonSlider,
        +screenActive === index && classes.active
      )}
      onClick={handleSliderChange}
    />
  );
};

export default memo(SlideButton);
