import React, { Component } from 'react';
import Desktop from './Desktop';
import TaskManager from './TaskManager';
import DecidingWindow from './DecidingWindow';
import AcceptingWindow from './AcceptingWindow';
import Confetti from 'react-confetti';
import Clippy from './Clippy';

import './styles/base.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxZIndex: 0,
      zIndices: {},
      offerAccepted: false,
    };
  }

  componentDidMount() {
    this.measureWindowSize();
  }

	measureWindowSize() {
    this.windowSize = {
      height: window.outerHeight,
      width: window.outerWidth,
    };
  }

  isMobileIsh() {
    if (!this.windowSize) {
      this.measureWindowSize();
    }
    const {height, width} = this.windowSize;
    return (width < 500 || height < 600);
  }

  bumpZIndex = (id) => () => {
    const {maxZIndex, zIndices} = this.state;
    this.setState({
      maxZIndex: maxZIndex + 1,
      zIndices: {
        ...zIndices,
        [id]: maxZIndex + 1,
      },
    });
  };

  acceptOffer = () => {
    this.setState({
      offerAccepted: true,
    });
    console.log('woo');
  };

  renderConfetti() {
    if (!this.windowSize) {
      this.measureWindowSize();
    }
    return <Confetti
      {...this.windowSize}
      colors={[
        'hsl(300, 100%, 51%)',
        'hsl(180, 100%, 50%)',
        'hsl(237, 100%, 50%)',
        'hsl(120, 100%, 51%)',
        'hsl(60, 100%, 51%)',
        'hsl(359, 100%, 50%)',
      ]}
    />;
  }

  render() {
    const {zIndices, offerAccepted} = this.state;
    const positionsForDesktop = {
      taskManager: {x: 120, y: 20},
      decidingWindow: {x: 40, y: 370},
      acceptingWindow: {x: 300, y: 300},
      clippy: {x: 650, y: 500},
    };
    const positionsForMobile = {
      taskManager: {x: 20, y: 20},
      decidingWindow: {x: 5, y: 300},
      acceptingWindow: {x: 15, y: 200},
      clippy: {x: 200, y: 500},
    };
    const isMobile = this.isMobileIsh();
    const positions = isMobile
      ? positionsForMobile
      : positionsForDesktop;
    return (
      <Desktop>
				{offerAccepted && this.renderConfetti()}
        <TaskManager
          zIndex={zIndices[0] || 0}
          bumpZIndex={this.bumpZIndex(0)}
          acceptOffer={this.acceptOffer}
          offerAccepted={offerAccepted}
          defaultPosition={positions.taskManager}
          isMobile={isMobile}
          style={isMobile && {width: 300}}
        />
        <DecidingWindow
          zIndex={zIndices[1] || 0}
          bumpZIndex={this.bumpZIndex(1)}
          offerAccepted={offerAccepted}
          defaultPosition={positions.decidingWindow}
          isMobile={isMobile}
        />
        {offerAccepted && <AcceptingWindow
          zIndex={zIndices[2] || 999999}
          bumpZIndex={this.bumpZIndex(2)}
          defaultPosition={positions.acceptingWindow}
          isMobile={isMobile}
        />}
        {!offerAccepted && <Clippy
          zIndex={zIndices[3] || 0}
          bumpZIndex={this.bumpZIndex(3)}
          defaultPosition={positions.clippy}
          isMobile={isMobile}
        />}
      </Desktop>
    );
  }
}

export default App;
