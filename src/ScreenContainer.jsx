import React, { memo, useCallback } from 'react';
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
  const onChangeScreenOver = useCallback(
    side => {
      if (screenIndex !== screenActive) return;
      if (!isDragOver) {
        const shift = -width * (screenActive + side);
        setShift(shift);
        setScreenActive(screenActive + side);
        setIsDragOver(true);
      }
    },
    [width, screenActive, isDragOver, screenIndex]
  );

  return (
    <Screen
      screenRef={screenRef}
      onChangeScreenOver={onChangeScreenOver}
      onSortEnd={onSortEnd}
      mainIcons={mainIcons}
      screenImages={screenImages}
      setMainICons={setMainICons}
      screenIndex={screenIndex}
    />
  );
};

export default memo(ScreenContainer);
