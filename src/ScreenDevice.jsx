import React, { useEffect, useState } from 'react';
import imagesArray from './utils/images';
import jsonImages from './images.json';
import classes from './styles/ScreenDevice.module.scss';
import SlideButton from './SlideButton';
import { createArrayWithRandomIcons } from './utils/createArrayWithRandomIcons';
import {
  ALL_ICONS_AND_SCREENS,
  COUNTS_IMAGES,
  MAIN_ICONS_STORAGE,
} from './utils/constants';
import { chunks } from './utils/chunks';
import { checkLocalStorage } from './utils/checkLocalStorage';
import Time from './Time';
import MainIcons from './MainIcons';
import Slider from './Slider';

const ScreenDevice = () => {
  const [width, setWidth] = useState(null);
  const [shift, setShift] = useState(0);
  const [screenActive, setScreenActive] = useState(0);
  const [mainIcons, setMainICons] = useState([]);
  const [screens, setScreens] = useState([]);
  const [imagesOnScreen, setImagesOnScreen] = useState(
    jsonImages.imagesOnScreen
  );

  useEffect(() => {
    if (!localStorage.getItem(COUNTS_IMAGES)) {
      setImagesOnScreen(jsonImages.imagesOnScreen);
      localStorage.setItem(
        COUNTS_IMAGES,
        JSON.stringify(jsonImages.imagesOnScreen)
      );
    } else {
      const localCounts = JSON.parse(localStorage.getItem(COUNTS_IMAGES));
      if (localCounts !== jsonImages.imagesOnScreen) {
        setImagesOnScreen(jsonImages.imagesOnScreen);
        localStorage.setItem(
          COUNTS_IMAGES,
          JSON.stringify(jsonImages.imagesOnScreen)
        );
        localStorage.removeItem(ALL_ICONS_AND_SCREENS);
      } else {
        setImagesOnScreen(localCounts);
      }
    }
  }, []);

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
      imagesOnScreen
    );
  }, [imagesOnScreen]);

  return (
    <div className={classes.screenDevice}>
      <Time />
      <Slider
        setWidth={setWidth}
        shift={shift}
        screenActive={screenActive}
        setShift={setShift}
        screens={screens}
        setScreenActive={setScreenActive}
        setScreens={setScreens}
        width={width}
        setMainICons={setMainICons}
        mainIcons={mainIcons}
      />
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
      <MainIcons mainIcons={mainIcons} />
    </div>
  );
};

export default ScreenDevice;
