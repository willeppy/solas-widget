import React, { Component } from 'react';

interface BottomMessageProps {
  infoMessage: string,
  openInfo: boolean,
  warningMessage: string,
  openWarning: boolean
}

class BottomMessage extends Component<BottomMessageProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    let infoMsg;
    let warningMsg;

    if (this.props.infoMessage != "") {
      infoMsg = <div className="info-footer" style={{ display: (this.props.openInfo) ? 'flex' : 'none' }} >
        <p className="infoMsgText" dangerouslySetInnerHTML={{ __html: this.props.infoMessage }}></p>
      </div>;
    }

    if (this.props.warningMessage != "") {
      warningMsg = <div className="warning-footer" style={{ display: (this.props.openWarning) ? 'flex' : 'none' }} >
        <p className="warnMsgText" dangerouslySetInnerHTML={{ __html: this.props.warningMessage }}></p>
      </div>
    }

    return (
      <div>
        {infoMsg}
        {warningMsg}
      </div>
    )
  }


}
export default BottomMessage;
