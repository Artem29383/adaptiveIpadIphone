import React, { memo } from 'react';
import classnames from 'classnames';
import classes from './styles/Screen.module.scss';
import GroupIcons from './GroupIcons';
import DragOverButton from './DragOverButton';

const Screen = ({
  screenRef,
  onChangeScreenOver,
  mainIcons,
  onSortEnd,
  setMainICons,
  screenImages,
  screenIndex,
}) => (
  <div ref={screenRef} className={classes.screen}>
    <DragOverButton
      classStyle={classnames(classes.prevScreen)}
      onChangeScreenOver={onChangeScreenOver}
      side={-1}
      screenIndex={screenIndex}
    />
    <GroupIcons
      screenIndex={screenIndex}
      screenImages={screenImages}
      setMainICons={setMainICons}
      mainIcons={mainIcons}
      onSortEnd={onSortEnd}
    />
    <DragOverButton
      classStyle={classnames(classes.nextScreen)}
      onChangeScreenOver={onChangeScreenOver}
      side={1}
      screenIndex={screenIndex}
    />
  </div>
);

export default memo(Screen);
