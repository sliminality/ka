// @flow
import React, {Component} from 'react';
import Draggable from 'react-draggable';

const Clippy = () => <Draggable
  defaultPosition={{x: 650, y: 500}}
>
  <div style={styles.clippyWrapper}>
    <div style={styles.clippy}>
    <div style={styles.speechBubble}>
      <p>It looks like this decision has been going on for awhile now!</p>
      <p>Have you tried killing the process?</p>
      <div style={styles.caret} />
    </div>
  </div>
  </div>
</Draggable>;

const CLIPPY_SIZE = 125;

const styles = {
  clippy: {
    background: `url("${process.env.PUBLIC_URL}/icons/clippy.png") no-repeat`,
    backgroundSize: CLIPPY_SIZE,
    height: CLIPPY_SIZE,
    width: CLIPPY_SIZE,
    position: 'relative',
    zIndex: 99,
  },
  speechBubble: {
    position: 'absolute',
    top: '-130%',
    left: '-60%',
    maxWidth: 150,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'hsl(60, 100%, 89%)',
    border: 'var(--border-black)',
    borderRadius: 4,
  },
  caret: {
    position: 'absolute',
    bottom: 0,
    height: 0,
    width: 0,
    border: '15px solid hsl(60, 100%, 89%)',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    transform:
      'translate(90%, 50%) rotate(45deg) scaleY(-1)',
  },
};

export default Clippy;
