import React, { Component } from 'react';

interface historyItemProps {
    itemData: object,
    itemIdx: number,
    onDelete: Function,
    onClick: (any) => void,
    selected: boolean
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

    // border for selected card: 3px solid #0f9960
    render() {
        let dClass = "card history-card"

        if (this.props.selected) {
            dClass += " selectedHistoryCard"
        }

        console.log("Item data: ", this.props.itemData)

        return (
            <div className={dClass} onClick={this.props.onClick}>
                <div className="card-header">
                    <h3 className="ma2">
                        <span className="light-text">History Item: </span>
                        <span className="emph-text">{this.props.itemData["op_name"]}</span>
                    </h3>
                    <div className="ma2 card-delete">
                        <i className="fa fa-trash deleteIcon"
                            title='Delete this history item'
                            onClick={() => this.handleClick()} />
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-section-header">In cell: </p>
                    <code className="history-code">[{this.props.itemData["ex_count"]}]</code>
                    <br />
                    {this.props.itemData["ret_new_df"] ?
                        <p>This operation returned a new dataframe.</p>
                        : <p>This operation occured on this dataframe.</p>}
                    <br />
                    <p className="card-section-header">Columns: </p>
                    {this.props.itemData["cols"].join(", ")}
                    <br />
                </div>
            </div>
        )
    }
}

export default HistoryItem;