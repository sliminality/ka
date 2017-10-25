// @flow
import React, { Component } from 'react';
import Window from './Window';

class TaskManager extends Component {
  props: {
    zIndex: number,
    bumpZIndex: () => void,
    acceptOffer: () => void,
    offerAccepted: bool,
    defaultPosition: {
      x: number,
      y: number,
    },
    isMobile: bool,
  };

  renderTableHead() {
    return (
      <thead>
        <tr>
          <th className="outset bg-chrome" style={styles.headingCell}>
            Task
          </th>
          <th
            className="outset bg-chrome"
            style={{ ...styles.headingCell, ...styles.statusCol }}
          >
            Status
          </th>
        </tr>
      </thead>
    );
  }

  renderTableBody() {
    const {offerAccepted} = this.props;
    const taskName = offerAccepted
      ? 'The Verdict'
      : "Slim's decision process";
    const status = offerAccepted
      ? 'Running'
      : 'Not Responding';
    return (
      <tbody>
        <tr>
          <td style={styles.taskCol}>
            <div style={styles.taskIcon} />
            <span style={styles.selectedTask}>
              {taskName}
            </span>
          </td>
          <td className="status-col">
            {status}
          </td>
        </tr>
      </tbody>
    );
  }

  renderButtons() {
    const {acceptOffer} = this.props;
    const buttons = [
      'Switch To',
      'New Task...',
    ];
    return (
      <div style={styles.buttons}>
        <div style={styles.buttonActiveWrapper}>
          <button
            className="button outset"
            style={{
              ...styles.button,
              marginLeft: 0,
            }}
            onClick={acceptOffer}
          >
            End Task
          </button>
        </div>
        {buttons.map((text, i) => <button
          key={i}
          className="button outset"
          style={styles.button}
        >
          {text}
        </button>)}
      </div>
    );
  }

  renderFooter() {
    const {isMobile} = this.props;
    const items = [
      'Processes: 1',
      'CPU Usage: 99%',
      ...!isMobile && ['Mem Usage: 55556K / 47245K'],
    ];

    return (
      <footer style={styles.footer}>
        {items.map((text, i) => <div
          key={i}
          className="inset"
          style={{
            ...styles.footerDiv,
            ...(i === 2) && styles.footerDivWide,
          }}
        >
          {text}
        </div>)}
      </footer>
    );
  }

  render() {
    const {defaultPosition, isMobile} = this.props;
    return (
      <Window
        title="Windows Task Manager"
        showMenuBar={true}
        defaultPosition={defaultPosition}
        {...this.props}
      >
        <div
          style={{
            ...styles.contents,
            ...isMobile && styles.mobileContents,
          }}
        >
          <div
            className="bg-white inset"
            style={styles.taskList}
          >
            <table>
              {this.renderTableHead()}
              {this.renderTableBody()}
            </table>
          </div>
          {this.renderButtons()}
          {this.renderFooter()}
        </div>
      </Window>
    );
  }
}

const styles = {
  contents: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 250,
  },
  mobileContents: {
    minHeight: 200,
    fontSize: 9,
  },
  taskList: {
    margin: 10,
    flex: 1,
  },
  headingCell: {
    width: '100%',
    textAlign: 'left',
    paddingLeft: 5,
  },
  taskCol: {
    display: 'flex',
    alignItems: 'center',
  },
  statusCol: {
    minWidth: 120,
  },

  selectedTask: {
    backgroundColor: 'var(--navy)',
    color: 'white',
    padding: '2px 5px',
  },
  taskIcon: {
    display: 'inline-block',
    height: 20,
    width: 20,
    background: `url("${process.env.PUBLIC_URL}/icons/default-application.png") no-repeat`,
    backgroundSize: 18,
  },

  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 10,
    marginTop: 0,
  },
  buttonActiveWrapper: {
    border: 'var(--border-black)'
  },
  button: {
    width: 100,
    marginLeft: 6,
    padding: 0,
  },

  footer: {
    display: 'flex',
  },
  footerDiv: {
    padding: 2,
    flex: 1,
  },
  footerDivWide: {
    flex: 2,
  },
};

export default TaskManager;
