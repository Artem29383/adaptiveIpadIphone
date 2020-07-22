import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import classes from './styles/ScreenDevice.module.scss';
import ScreenContainer from './ScreenContainer';
import { ALL_ICONS_AND_SCREENS } from './utils/constants';

const Slider = ({
  setWidth,
  shift,
  screenActive,
  setScreens,
  screens,
  setShift,
  setScreenActive,
  setMainICons,
  mainIcons,
  width,
}) => {
  const screenRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [screenWidth, setScreenWidth] = useState(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isDrag, setIsDrag] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsDragOver(false);
    }, 1500);
  }, [screenActive]);

  useEffect(() => {
    if (windowSize <= 768) {
      setScreenWidth(480);
    }
    if (windowSize <= 568) {
      setScreenWidth(231);
    }
    if (windowSize > 768) {
      setScreenWidth(800);
    }
  }, [windowSize]);

  const handleDebounceResize = debounce(() => {
    setWindowSize(window.innerWidth);
  }, 1500);

  useEffect(() => {
    window.addEventListener('resize', handleDebounceResize);
    return () => window.removeEventListener('resize', handleDebounceResize);
  }, []);

  const onSortEnd = useCallback(
    (icons, index) => {
      if (!isDrag) {
        setTimeout(() => {
          setIsDrag(true);
        }, 100);
        return;
      }
      const copyScreens = [...screens];
      copyScreens[index].icons = [...icons];
      setScreens(copyScreens);
      localStorage.setItem(ALL_ICONS_AND_SCREENS, JSON.stringify(copyScreens));
      setIsDragOver(false);
    },
    [isDrag, isDragOver, screens]
  );

  useEffect(() => {
    if (screenRef.current) {
      setWidth(screenRef.current.offsetWidth);
      setShift(0);
      setScreenActive(0);
    }
  }, [screenRef.current, screenWidth]);

  return (
    <div
      className={classes.slider}
      style={{
        transform: `translateX(${shift}px)`,
        gridTemplateColumns: `repeat(${screens.length}, ${screenWidth}px)`,
      }}
    >
      {screens.map((screen, i) => (
        <ScreenContainer
          key={i}
          width={width}
          screenIndex={i}
          screenRef={screenRef}
          screenImages={screen.icons}
          setMainICons={setMainICons}
          mainIcons={mainIcons}
          screenActive={screenActive}
          setScreenActive={setScreenActive}
          setShift={setShift}
          isDragOver={isDragOver}
          setIsDragOver={setIsDragOver}
          onSortEnd={onSortEnd}
        />
      ))}
    </div>
  );
};

export default memo(Slider);
