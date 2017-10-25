// @flow
import React from 'react';
import Window from './Window';

class AcceptingWindow extends React.Component {
  props: {
    zIndex: number,
    bumpZIndex: () => void,
  };

  redirect() {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }

  render() {
    return (
      <Window
        title="The Verdict"
        defaultPosition={{x: 300, y: 300}}
        style={{
          width: 350,
        }}
        {...this.props}
      >
        <div style={styles.contents}>
          <div style={styles.mainContent}>
            <div style={styles.icon} />
            Looks like Khan Academy is stuck with me for the long haul
          </div>
          <div style={styles.confirmButtonWrapper}>
            <button
              className="button"
              style={styles.confirmButton}
              onClick={this.redirect}
            >
              🔥🔥🔥
            </button>
          </div>
        </div>
      </Window>
    );
  }
}

const ICON_SIZE = 50;

const styles = {
  contents: {
    width: '100%',
    padding: '15px 25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    minWidth: ICON_SIZE,
    minHeight: ICON_SIZE,
    background: `url("${process.env.PUBLIC_URL}/icons/info.png") right top no-repeat`,
    backgroundSize: ICON_SIZE,
    marginRight: 20,
  },
  mainContent: {
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    minHeight: ICON_SIZE,
  },
  confirmButtonWrapper: {
    marginTop: 30,
    border: 'var(--border-black)',
  },
  confirmButton: {
    width: 150,
  },
};

export default AcceptingWindow;
