import React from 'react';
import classes from './styles/App.module.scss';
import ScreenDevice from './ScreenDevice';

const App = () => {
  return (
    <div className={classes.wrapperDevice}>
      <div className={classes.device}>
        <div className={classes.shellDevice}>
          <div className={classes.headerDevice}>
            <div className={classes.cameraDevice}>
              <div className={classes.miniCameraDevice} />
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
