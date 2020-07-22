import React, { memo, useCallback } from 'react';

const DragOverButton = ({
  onChangeScreenOver,
  classStyle,
  side,
  screenIndex,
}) => {
  const handleChangeScreen = useCallback(() => {
    onChangeScreenOver(side, screenIndex);
  }, [screenIndex, side, onChangeScreenOver]);
  return <button onDragOver={handleChangeScreen} className={classStyle} />;
};

export default memo(DragOverButton);
