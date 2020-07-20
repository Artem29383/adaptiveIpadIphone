import React, { useEffect, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import imagesArray from './utils/images';
import classes from './styles/ScreenDevice.module.scss';
import Screen from './ScreenContainer';
import SlideButton from './SlideButton';
import { createArrayWithRandomIcons } from './utils/createArrayWithRandomIcons';
import { ALL_ICONS_AND_SCREENS, MAIN_ICONS_STORAGE } from './utils/constants';
import { chunks } from './utils/chunks';
import { checkLocalStorage } from './utils/checkLocalStorage';

const ScreenDevice = () => {
  console.log('render device');
  const screenRef = useRef(null);
  const [width, setWidth] = useState(null);
  const [shift, setShift] = useState(0);
  const [screenActive, setScreenActive] = useState(0);
  const [mainIcons, setMainICons] = useState([]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [screenWidth, setScreenWidth] = useState(null);
  const [isDrag, setIsDrag] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [screens, setScreens] = useState([]);

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

  useEffect(() => {
    setTimeout(() => {
      setIsDragOver(false);
    }, 1500);
  }, [screenActive]);

  const handleDebounceResize = debounce(() => {
    setWindowSize(window.innerWidth);
  }, 1500);

  useEffect(() => {
    checkLocalStorage(
      MAIN_ICONS_STORAGE,
      setMainICons,
      imagesArray.images,
      createArrayWithRandomIcons,
      4
    );
    checkLocalStorage(
      ALL_ICONS_AND_SCREENS,
      setScreens,
      imagesArray.images,
      chunks,
      20
    );
    window.addEventListener('resize', handleDebounceResize);
    return () => window.removeEventListener('resize', handleDebounceResize);
  }, []);

  useEffect(() => {
    if (screenRef.current) {
      setWidth(screenRef.current.offsetWidth);
      setShift(0);
      setScreenActive(0);
    }
  }, [screenRef.current, screenWidth]);

  const onSortEnd = (icons, index) => {
    console.log('render dragend');
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
  };

  return (
    <div className={classes.screenDevice}>
      <div
        className={classes.slider}
        style={{
          transform: `translateX(${shift}px)`,
          gridTemplateColumns: `repeat(${screens.length}, ${screenWidth}px)`,
        }}
      >
        {screens.map((screen, i) => (
          <Screen
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
      <div className={classes.buttonsSlider}>
        {screens.map((_, index) => (
          <SlideButton
            key={index}
            index={index}
            setScreenActive={setScreenActive}
            width={width}
            setShift={setShift}
            screenActive={screenActive}
          />
        ))}
      </div>
      <div className={classes.mainIcons}>
        {mainIcons.map(icon => (
          <div key={icon.id} className={classes.iconItem}>
            <img src={icon.path} alt="" />
            <p>{icon.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScreenDevice;
