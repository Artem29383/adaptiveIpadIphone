import React, { memo } from 'react';
import classes from './styles/Screen.module.scss';
import GroupIcons from './GroupIcons';

const Screen = ({
  screenRef,
  onPrevScreenOver,
  onNextScreenOver,
  mainIcons,
  onSortEnd,
  setMainICons,
  screenImages,
  screenIndex,
}) => {
  return (
    <div ref={screenRef} className={classes.screen}>
      <button onDragOver={onPrevScreenOver} className={classes.prevScreen} />
      <GroupIcons
        screenIndex={screenIndex}
        screenImages={screenImages}
        setMainICons={setMainICons}
        mainIcons={mainIcons}
        onSortEnd={onSortEnd}
      />
      <button onDragOver={onNextScreenOver} className={classes.nextScreen} />
    </div>
  );
};

export default memo(Screen);
