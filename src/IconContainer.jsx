import React, { memo, useCallback } from 'react';
import imagesArray from './utils/images';
import { MAIN_ICONS_STORAGE } from './utils/constants';
import Icon from './Icon';

const IconContainer = ({ id, path, text, setMainICons, mainIcons }) => {
  const onChooseIconClick = useCallback(() => {
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

  return <Icon onClick={onChooseIconClick} path={path} text={text} />;
};

export default memo(IconContainer);
