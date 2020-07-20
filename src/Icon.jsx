import React, { memo, useCallback } from 'react';
import classes from './styles/GroupIcons.module.scss';
import imagesArray from './utils/images';
import { MAIN_ICONS_STORAGE } from './utils/constants';

const Icon = ({ id, path, text, setMainICons, mainIcons }) => {
  console.log('render icon');
  const handleIconChooseClick = useCallback(() => {
    let copyArr = [...mainIcons];
    const isContains = mainIcons.find(icon => icon.id === id);
    if (isContains) {
      const iconIndex = mainIcons.indexOf(isContains);
      copyArr.splice(iconIndex, 1);
      copyArr = [isContains, ...copyArr];
    } else {
      copyArr.pop();
      const newIcon = imagesArray.images.find(icon => icon.id === id);
      copyArr = [newIcon, ...copyArr];
    }
    setMainICons(copyArr);
    localStorage.setItem(MAIN_ICONS_STORAGE, JSON.stringify(copyArr));
  }, [mainIcons]);

  return (
    <div onClick={handleIconChooseClick} className={classes.iconItem}>
      <img src={path} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default memo(Icon);
