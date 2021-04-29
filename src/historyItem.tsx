import React, { Component } from 'react';

interface historyItemProps {
    itemData: object,
    itemIdx: number,
    onDelete: Function
}

class HistoryItem extends Component<historyItemProps, any> {

    constructor(props: any) {
        super(props);
        // this.state = {}
    }

    handleClick() {
        this.props.onDelete(this.props.itemIdx)
    }

    handleFeedback(fb_type) {
        console.log(fb_type + " on idx " + this.props.itemIdx)
    }


    render() {
        return (
            <div className="card history-card" style={{ display: 'inline-block' }}>
                <div className="card-header">
                    <h3 className="ma2">
                        <span className="light-text">History Item: </span>
                        <span className="emph-text">{this.props.itemData["op_name"]}</span>
                    </h3>
                    <div className="ma2">
                        <i className="fa fa-trash deleteIcon"
                            title='Delete this history item'
                            onClick={() => this.handleClick()} />
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-section-header">In cell: </p>
                    <code className="history-code">[{this.props.itemData["ex_count"]}]</code>
                    <br/>
                    <br/>
                    <p className="card-section-header">Columns: </p>
                    {this.props.itemData["cols"].join(", ")}
                    <br/>
                </div>
            </div>
        )
    }
}

export default HistoryItem;