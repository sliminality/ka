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

	measureWindowSize() {
    this.windowSize = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
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
    return (
      <Desktop>
				{offerAccepted && this.renderConfetti()}
        <TaskManager
          zIndex={zIndices[0] || 0}
          bumpZIndex={this.bumpZIndex(0)}
          acceptOffer={this.acceptOffer}
          offerAccepted={offerAccepted}
        />
        <DecidingWindow
          zIndex={zIndices[1] || 0}
          bumpZIndex={this.bumpZIndex(1)}
          offerAccepted={offerAccepted}
        />
        {offerAccepted && <AcceptingWindow
          zIndex={zIndices[2] || 999999}
          bumpZIndex={this.bumpZIndex(2)}
        />}
        {!offerAccepted && <Clippy/>}
      </Desktop>
    );
  }
}

const styles = {
};

export default App;
