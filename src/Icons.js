// @flow
import React from 'react';

const Icon = ({text, icon, size}) =>
  ({top, left, bottom, right}) =>
    <div style={{
      ...styles.iconWrapper,
      top,
      left,
      bottom,
      right,
    }}>
      <div style={{
        ...styles.iconImage,
        background:
        `url("${process.env.PUBLIC_URL}/icons/${icon}") center/${size || 48 }px no-repeat`,
      }} />
      {text}
    </div>;

const ICON_SIZE = 64;

const styles = {
  iconWrapper: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    padding: 5,
  },
  iconImage: {
    minHeight: ICON_SIZE,
    width: ICON_SIZE,
  },
};

const RecycleBin = Icon({
  text: 'Recycle Bin',
  icon: 'recycle-bin.png',
});

const MyComputer = Icon({
  text: 'My Computer',
  icon: 'my-computer.png',
});

const MyDocuments = Icon({
  text: 'My Documents',
  icon: 'my-documents.png',
  size: 64,
});

export {
  RecycleBin,
  MyComputer,
  MyDocuments,
};
