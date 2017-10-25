import React, { Component } from 'react';
import Taskbar from './Taskbar';
import {RecycleBin, MyComputer, MyDocuments} from './Icons';

class Desktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxZIndex: this.props.children.length,
    };
  }

  render() {
    return (
      <div style={styles.desktop}>
        <MyComputer top={10} left={10} />
        <MyDocuments top={100} left={10} />
        <RecycleBin bottom={60} right={10} />
        {this.props.children}
        <Taskbar />
      </div>
    );
  }
}

const styles = {
  desktop: {
    width: '100%',
    backgroundColor: 'var(--teal)',
  },
};

export default Desktop;
