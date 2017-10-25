// @flow
import React, { Component } from 'react';

class Taskbar extends Component {
  renderStartButton() {
    return (
      <button
        className="button bg-chrome"
        style={styles.startButton}
      >
        Start
      </button>
    );
  }

  renderClock() {
    return (
      <div
        className="bg-chrome inset"
        style={styles.clock}
      >
        {(new Date()).toLocaleTimeString()}
      </div>
    );
  }

  render() {
    return (
      <div
        className="bg-chrome outset"
        style={styles.taskbar}
      >
        {this.renderStartButton()}
        {this.renderClock()}
      </div>
    );
  }
}

const WINDOWS_ICON_WIDTH = 24;

const styles = {
  taskbar: {
    position: 'absolute',
    bottom: 0,
    height: 36,
    width: '100%',
    padding: 4,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 99999,
    borderTop: 'var(--border-grey)',
  },
  startButton: {
    background: `url("${process.env.PUBLIC_URL}/icons/windows-classic.png") no-repeat left/${WINDOWS_ICON_WIDTH}px`,
    fontWeight: 'bold',
    paddingLeft: WINDOWS_ICON_WIDTH + 4,
    height: 30,
  },
  clock: {
    padding: 5,
    paddingLeft: 20,
  },
};

export default Taskbar;
