import React, { Component } from 'react';

interface historyBtnProps {
  onClick: Function
}

class HistoryBtn extends Component<historyBtnProps> {
  constructor(props: any) {
    super(props);
  }

  render() {

    return (
      <i id="editHistoryBtn"
        className='fa fa-edit'
        title="Edit history"
        onClick={() => this.props.onClick()} />
    )
  }


}
export default HistoryBtn;
