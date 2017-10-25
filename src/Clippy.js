// @flow
import React from 'react';
import Draggable from 'react-draggable';

const Clippy = ({defaultPosition, isMobile, zIndex, bumpZIndex}) => <div
  style={{
    ...styles.clippy,
    ...isMobile && styles.mobileClippy,
    zIndex,
  }}
  onClick={bumpZIndex}
>
  <div style={styles.speechBubble}>
    <p>It looks like this decision has been going on for awhile now!</p>
    <p>Have you tried killing the process?</p>
    <div style={styles.caret} />
  </div>
</div>;

const CLIPPY_SIZE = 125;
const MOBILE_CLIPPY_SIZE = 80;

const styles = {
  clippy: {
    background: `url("${process.env.PUBLIC_URL}/icons/clippy.png") no-repeat`,
    backgroundSize: CLIPPY_SIZE,
    height: CLIPPY_SIZE,
    width: CLIPPY_SIZE,
    position: 'absolute',
    bottom: 60,
    right: 40,
  },
  mobileClippy: {
    backgroundSize: MOBILE_CLIPPY_SIZE,
    height: MOBILE_CLIPPY_SIZE,
    width: MOBILE_CLIPPY_SIZE,
  },
  speechBubble: {
    position: 'absolute',
    bottom: '110%',
    right: '50%',
    width: 150,
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
