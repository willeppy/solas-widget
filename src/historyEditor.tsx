import React, { Component } from 'react';
import HistoryItem from './historyItem'

interface historyEditorProps {
    history_list: any[],
    onDelete: Function
}

class HistoryEditor extends Component<historyEditorProps, any> {

    constructor(props: any) {
        super(props);

        // var items = this.generateHistoryItems();
        // this.state = {items: items}
    }

    render() {
        return (
            <div>
                {/* <h2 className="light-text">History Editor</h2> */}
                <div className="history-wrapper">
                    {this.props.history_list.map((history_item_data, idx) =>
                        <HistoryItem onDelete={this.props.onDelete} itemData={history_item_data} itemIdx={idx} />
                    )}

                </div>
            </div >
        )
    }
}
export default HistoryEditor;