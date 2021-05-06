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
                <div className="history-wrapper">
                    <div>
                        <p className="title-description"
                            style={{
                                fontSize: '20px',
                                display: 'inline',
                            }}> Analysis History</p>
                        <p style={{
                            marginLeft: "15px",
                            color: "rgb(80, 80, 80)"
                        }}>Your previous code and analysis history.</p>

                    </div>
                    {this.props.history_list.map((history_item_data, idx) =>
                        <HistoryItem onDelete={this.props.onDelete} itemData={history_item_data} itemIdx={idx} />
                    )}

                </div>
            </div >
        )
    }
}
export default HistoryEditor;