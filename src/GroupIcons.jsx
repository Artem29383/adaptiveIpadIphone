import React, { memo } from 'react';
import { ReactSortable } from 'react-sortablejs';
import classes from './styles/GroupIcons.module.scss';
import Icon from './Icon';

const GroupIcons = ({
  screenImages,
  setMainICons,
  mainIcons,
  screenIndex,
  onSortEnd,
}) => {
  console.log('render groupIcons');
  const icons = screenImages.map((icon, index) => (
    <Icon
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
