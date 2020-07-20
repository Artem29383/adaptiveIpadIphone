import React, { memo } from 'react';
import Screen from './Screen';

const ScreenContainer = ({
  width,
  screenRef,
  screenImages,
  setMainICons,
  mainIcons,
  screenActive,
  setScreenActive,
  setShift,
  isDragOver,
  setIsDragOver,
  screenIndex,
  onSortEnd,
}) => {
  const onNextScreenOver = () => {
    if (!isDragOver) {
      const shift = -width * (screenActive + 1);
      setShift(shift);
      setScreenActive(screenActive + 1);
      setIsDragOver(true);
    }
  };

  const onPrevScreenOver = () => {
    if (!isDragOver) {
      const shift = -width * (screenActive - 1);
      setShift(shift);
      setScreenActive(screenActive - 1);
      setIsDragOver(true);
    }
  };

  return (
    <Screen
      screenRef={screenRef}
      onPrevScreenOver={onPrevScreenOver}
      onNextScreenOver={onNextScreenOver}
      onSortEnd={onSortEnd}
      mainIcons={mainIcons}
      screenImages={screenImages}
      setMainICons={setMainICons}
      screenIndex={screenIndex}
    />
  );
};

export default memo(ScreenContainer);
