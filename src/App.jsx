import React from 'react';
import classnames from 'classnames';
import classes from './styles/App.module.scss';
import ScreenDevice from './ScreenDevice';

const App = () => {
  return (
    <div className={classes.wrapperDevice}>
      <div className={classes.device}>
        <div className={classes.buttons}>
          <div className={classnames(classes.button, classes.buttonLarge)} />
          <div className={classnames(classes.button)} />
          <div className={classnames(classes.button)} />
        </div>
        <div className={classnames(classes.button, classes.superLarge)} />
        <div className={classes.shellDevice}>
          <div className={classes.headerDevice}>
            <div className={classes.cameraDevice}>
              <div className={classes.miniCameraDevice} />
            </div>
            <div className={classes.noises}>
              <div className={classes.line} />
              <div className={classes.point} />
            </div>
          </div>
          <ScreenDevice />
          <div className={classes.bottomDevice}>
            <div className={classes.buttonDevice}>
              <div className={classes.figureButtonDevice} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
