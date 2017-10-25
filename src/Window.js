// @flow
import React, { Component } from 'react';
import Draggable from 'react-draggable';

type Props = {
  title: string,
  showMenuBar?: boolean,
  styles?: Object,
  zIndex: number,
  defaultPosition: {
    x: number,
    y: number,
  },
  isMobile: bool,
};

const TitleButton = ({icon, text}) => <button
  className="outset bg-chrome button"
  style={{
    ...styles.titleButton,
    backgroundImage: `url(${process.env.PUBLIC_URL}/icons/${icon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  }}
>
  {text}
</button>;

class Window extends Component {
  props: Props;

  renderTitleBar(title: string, icon?: string) {
    return (
      <header style={styles.titleBar}>
        {icon && <div style={{
          background: `url(${process.env.PUBLIC_URL}/icons/${icon}) no-repeat center center`,
          minWidth: 20,
        }} />}
        <div style={styles.title}>{title}</div>
        <div style={styles.titleButtons}>
          <TitleButton icon="minimize.png" />
          <TitleButton icon="maximize.png" />
          <TitleButton icon="close.png" />
        </div>
      </header>
    );
  }

  renderMenuBar() {
    const items = ['File', 'Options', 'View', 'Windows', 'Help'];
    return (
      <ul style={styles.windowMenu}>
        {items.map((item, i) => <ul
          key={i}
          style={styles.menuItem}
        >
          {item}
        </ul>)}
      </ul>
    );
  }

  render() {
    const {
      title, showMenuBar, zIndex, bumpZIndex,
      defaultPosition, isMobile,
      style: customStyles,
    } = this.props;

    return (
      <Draggable
        onMouseDown={bumpZIndex}
        defaultPosition={defaultPosition}
        bounds="body"
      >
        <div
          className="outset bg-chrome"
          style={{
            ...styles.window,
            ...isMobile && styles.mobileWindow,
            ...customStyles,
            zIndex,
          }}
        >
          {this.renderTitleBar(title, 'network-computer-16.png')}
          {showMenuBar && this.renderMenuBar()}
          {this.props.children}
      </div>
    </Draggable>
    );
  }
}

const styles = {
  window: {
    display: 'flex',
    flexDirection: 'column',
    padding: 2,
    color: 'black',
    maxWidth: 500,
    borderTop: 'var(--border-grey)',
    borderLeft: 'var(--border-grey)',

    // For z-index switching to work
    position: 'absolute',
  },
  mobileWindow: {
    maxWidth: 350,
  },
  titleBar: {
    width: '100%',
    color: 'white',
    // background: #0c193a;
    // background: -moz-linear-gradient(left, #0c193a 0%, #4084c9 100%);
    // background: -webkit-linear-gradient(left, #0c193a 0%,#4084c9 100%);
    background: 'linear-gradient(to right, #0c193a 0%,#4084c9 100%)',
    padding: 4,
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 10,
    margin: 0,
    marginLeft: 2,
    fontWeight: 'normal',

    // Grow to fill middle of title bar.
    flex: 1,
  },
  titleButtons: {
    display: 'flex',
  },
  titleButton: {
    width: 20,
    height: 20,
    marginLeft: 1,
  },
  windowMenu: {
    display: 'flex',
    listStyle: 'none',
    padding: '2px 10px',
    margin: 0,
    borderBottom: '1px solid gray',
    boxShadow: '0px 1px 0px 0px rgba(255,255,255,1)',
    '-webkit-box-shadow': '0px 1px 0px 0px rgba(255,255,255,1)',
    '-moz-box-shadow': '0px 1px 0px 0px rgba(255,255,255,1)',
  },
  menuItem: {
    marginRight: 10,
    padding: 0,
  },
};

export default Window;
