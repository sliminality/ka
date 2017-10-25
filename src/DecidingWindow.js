// @flow
import React, {Component} from 'react';
import Window from './Window';

const MESSAGES = [
  '5 minutes',
  '1 sec',
  '20 minutes',
  '30 seconds',
  '4 weeks',
  '6 minutes',
  '2 days',
];

class DecidingWindow extends Component {
  props: {
    zIndex: number,
    bumpZIndex: () => void,
    offerAccepted: bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentStatus: 0,
    };
  }

  componentDidMount() {
    const {offerAccepted} = this.props;
    if (!offerAccepted) {
      this.interval = setInterval(this.updateStatus, 2500);
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  updateStatus = () => {
    const {currentStatus} = this.state;
    this.setState({
      currentStatus: (currentStatus + 1) % MESSAGES.length,
    });
  };

  render() {
    const {offerAccepted} = this.props;
    const {currentStatus} = this.state;
    const status = offerAccepted
      ? '0!!!!!!!!!! \n(so, 1)'
      : MESSAGES[currentStatus];
    const title = offerAccepted
      ? "Slim's decision process"
      : "Slim's decision process (Not Responding)";

    return <Window
      title={title}
      defaultPosition={{x: 270, y: 170}}
      {...this.props}
    >
      <div style={{
        ...styles.contents,
        ...offerAccepted && styles.defaultCursor,
      }}>
        Estimated time left: {status}
        <div className="inset" style={styles.loadingBar}>
          <div style={{
            ...styles.loadingBarInner,
            ...offerAccepted && styles.loadingBarFull,
          }} />
        </div>
      </div>
    </Window>;
  }
}

const styles = {
  contents: {
    width: 500,
    height: 100,
    cursor: 'var(--cursor-wait)',
    padding: '20px 10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  defaultCursor: {
    cursor: 'var(--cursor-default)',
  },
  loadingBar: {
    width: '100%',
    height: 25,
    padding: 2,
  },
  loadingBarInner: {
    width: '30%',
    height: '100%',
    backgroundColor: 'var(--navy)',
  },
  loadingBarFull: {
    width: '100%',
  },
};

export default DecidingWindow;
