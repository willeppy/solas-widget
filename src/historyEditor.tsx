import React, { Component } from 'react';
import HistoryItem from './historyItem'

interface historyEditorProps {
    history_list: any[],
    onDelete: Function,
    onChange: Function,
    selectedIdx: number
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
                        <HistoryItem
                            key={idx}
                            itemIdx={idx}
                            onDelete={this.props.onDelete}
                            onClick={(e) => {this.props.onChange(idx)}}
                            selected={(this.props.selectedIdx === idx)}
                            itemData={history_item_data}
                        />
                    )}

                </div>
            </div >
        )
    }
}
export default HistoryEditor;