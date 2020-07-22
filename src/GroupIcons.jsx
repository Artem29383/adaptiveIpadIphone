import React, { memo } from 'react';
import { ReactSortable } from 'react-sortablejs';
import classes from './styles/GroupIcons.module.scss';
import IconContainer from './IconContainer';

const GroupIcons = ({
  screenImages,
  setMainICons,
  mainIcons,
  screenIndex,
  onSortEnd,
}) => {
  const icons = screenImages.map((icon, index) => (
    <IconContainer
      index={index}
      key={icon.id}
      id={icon.id}
      text={icon.text}
      path={icon.path}
      mainIcons={mainIcons}
      setMainICons={setMainICons}
    />
  ));

  return (
    <ReactSortable
      swap
      group="sortableGroup"
      className={classes.groupIcons}
      list={screenImages}
      animation={200}
      setList={props => onSortEnd(props, screenIndex)}
    >
      {icons}
    </ReactSortable>
  );
};

export default memo(GroupIcons);
