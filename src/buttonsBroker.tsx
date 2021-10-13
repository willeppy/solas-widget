import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';


export interface ButtonProps {
  buttonsEnabled: boolean,
  tabItems: object[],
  deleteSelection: () => void,
  exportSelection: () => void,
  setIntent: () => void,
  closeExportInfo: () => void,
  showAlert: boolean,
  intentEnabled: boolean,
  historyClick: Function,
  infoClick: Function,
  warningClick: Function,
}

class ButtonsBroker extends Component<ButtonProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    let deleteBtn;
    let exportBtn;
    let intentBtn;
    let alertBox;

    if (this.props.tabItems.length > 0) {

      if (this.props.buttonsEnabled) {
        deleteBtn = <i id="deleteBtn"
          className="fa fa-trash sideButton"
          title='Delete selected visualizations'
          onClick={() => this.props.deleteSelection()} />

        exportBtn = <i id="exportBtn"
          className='fa fa-upload sideButton'
          title='Export selected visualizations into variable'
          onClick={(e) => this.props.exportSelection()} />

        if (this.props.intentEnabled) {
          intentBtn = <i id="intentBtn"
            className="fa fa-search sideButton"
            title='Set selected visualization as intent'
            onClick={() => this.props.setIntent()} />
        } else {
          intentBtn = <i id="intentBtn"
            className="fa fa-search sideButton"
            style={{ opacity: 0.2, cursor: 'not-allowed' }}
            title='Select no more than one visualization to set as intent' />
        }

      } else {
        deleteBtn = <i id="deleteBtn"
          className="fa fa-trash sideButton"
          style={{ opacity: 0.2, cursor: 'not-allowed' }}
          title='Select one or more visualizations to delete' />
        exportBtn = <i id="exportBtn"
          className='fa fa-upload sideButton'
          style={{ opacity: 0.2, cursor: 'not-allowed' }}
          title='Select one or more visualizations to export into variable' />
      }

    }

    if (this.props.showAlert) {
      alertBox = <Alert id="alertBox"
        key="infoAlert"
        variant="info"
        onClose={() => this.props.closeExportInfo()}
        dismissible>
        Access exported visualizations via the property `exported` (<a href="https://solas-api.readthedocs.io/en/latest/source/guide/export.html" target="_blank">More details</a>)
      </Alert>
    }

    let historyBtn = <i id="editHistoryBtn"
      className='fa fa-edit sideButton'
      title="Edit history"
      onClick={() => this.props.historyClick()} />

    let infoBtn = <i id="infoBtn"
      className='fa fa-info-circle sideButton'
      onClick={() => this.props.infoClick()} />

    let warningBtn = <i id="warnBtn"
      className='fa fa-exclamation-triangle sideButton'
      onClick={() => this.props.warningClick()} />

    return (
      <div className="buttons">
        {intentBtn}
        {exportBtn}
        {deleteBtn}
        {infoBtn}
        {historyBtn}
        {alertBox}
        {warningBtn}
      </div>
    );
  }
}
export default ButtonsBroker;
