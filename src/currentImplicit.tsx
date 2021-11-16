//  Copyright 2019-2020 The Solas Authors.
// 
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.

import React, { Component } from 'react';
import _ from 'lodash';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from '@material-ui/core/Checkbox';


import ChartGalleryComponent from './chartGallery';

import '../style/base.css'

interface currentVisProps {
    recs: any[],
    onChange: Function,
    numRecommendations: number,
    op_name: string
}

class CurrentImplicitComponent extends Component<currentVisProps, any> {
    constructor(props: any) {
        super(props);
        var initialState = {
            selected: -1,
            // cgRef: React.createRef<ChartGalleryComponent>()
            filterView: true,
        };
        this.state = initialState;
    }
    // onItemSelected() {
    //     if (this.state.selected == 0) {
    //         this.setState({
    //             selected: -1
    //         });
    //         this.props.onChange(-2);
    //     } else {
    //         this.setState({
    //             selected: 0
    //         });
    //         this.props.onChange(-1);
    //     }
    // }

    onItemSelect(idx) {
        console.log("on item select in implicit: " + idx)
    }

    switchFilterView() {
        this.setState({
            filterView: !this.state.filterView
        });
        if (this.state.filterView) {
            // filter chart
            this.props.recs[0].vspec[0]["transform"] = [{ "filter": { "field": "In filter?", "equal": true } }];
            for (var i = 1; i < this.props.recs[0].vspec.length; i++) {
                this.props.recs[0].vspec[i]["transform"] = [{ "filter": { "field": "filt_mask", "equal": true } }];
            }
        } else {
            for (var i = 0; i < this.props.recs[0].vspec.length; i++) {
                delete this.props.recs[0].vspec[i]["transform"];
                // delete the legend here
                // this.props.recs[0].vspec[i]["config"] = Object.assign(this.props.recs[0].vspec[i]["config"] || {}, { "legend": { "disable": true } })
            }
        }
        console.log("Change filter view to " + this.state.filterView)
        console.log(this.props.recs)
    }
    render() {
        if (!_.isEmpty(this.props.recs)) {

            const styles = {
                tooltip: {
                    width: "100px",
                    fontSize: "13px",
                    marginTop: "10px",
                    textAlign: 'center' as const
                }
            };
            const CustomTooltip = withStyles(styles)(Tooltip);

            let mStyle = {}
            let wrapperSpacingStyle = { marginTop: "25px" }

            if (this.props.numRecommendations !== 0) {
                mStyle = {
                    borderBottom: "0"
                }
            } 

            var vspec = this.props.recs[0].vspec
            for (var i = 0; i < vspec.length; i++) {
                if ("encoding" in vspec[i]) {
                    console.log("tranform " + JSON.stringify(vspec[i]["encoding"]));
                } else {
                    console.log("encoding does not exist");
                }
            }
            var filterSwitchEnabled = (vspec.length > 0
                && "encoding" in vspec[0]
                && "y" in vspec[0]["encoding"]
                && "title" in vspec[0]["encoding"]["y"]
                && JSON.stringify(
                    vspec[0]["encoding"]["y"]["title"]).substring(1, JSON.stringify(vspec[0]["encoding"]["y"]["title"]).length - 1) == "Filtered Data Count")

            // the variable op_name is not a perfect indicator of when there will be a filter chart.
            // the comman characteristic is that the first implicit vis should be a chart about filter count
            console.log("filterSwitchEnabled: " + filterSwitchEnabled)
            let filterSwitchUI;
            let legendUI;

            if (filterSwitchEnabled) {

                wrapperSpacingStyle = { marginTop: "0px" }

                filterSwitchUI = <label className="implicitHeaderItem"> Show unfiltered?
                    <Checkbox
                        checked={this.state.filterView}
                        onChange={this.switchFilterView.bind(this)}
                        color="default"
                        size="small" />
                </label>

                if (this.state.filterView) {
                    legendUI = <div className="implicitHeaderItem">
                        <div style={{ display: "inline-block" }}>
                            Current data <div className="filtLegendItem" style={{ backgroundColor: "#4C78A8" }} />
                        </div>
                        <div style={{ display: "inline-block", marginLeft: "10px" }}>
                            Unfiltered data <div className="filtLegendItem" style={{ backgroundColor: "#ededed" }} />
                        </div>
                    </div>
                }
            }
            return (
                <div id="mainVizContainer" style={mStyle}>
                    <div>
                        <p className="implicitHeaderItem"
                            style={{
                                // padding: '10px 0px 10px 0px',
                                display: "block",
                                fontWeight: 500
                            }}>Visualizations based off your&nbsp;
                            <CustomTooltip title={this.props.op_name} arrow>
                                <Button
                                    style={{
                                        fontSize: "13px",
                                        minWidth: "0px",
                                        padding: "2px",
                                        background: "#0f996066",
                                        textTransform: "none",
                                    }}>recent analysis.</Button>
                            </CustomTooltip>
                        </p>
                        {filterSwitchUI}
                        {legendUI}
                    </div>
                    <div id="" style={wrapperSpacingStyle}>
                        <ChartGalleryComponent
                            // this exists to prevent chart gallery from refreshing while changing tabs
                            // This is an anti-pattern for React, but is necessary here because our chartgallery is very expensive to initialize
                            key={'no refresh'}
                            // ref={this.state.cgRef}
                            title={"implicit"}
                            description={""}
                            multiple={true}
                            maxSelectable={10}
                            onChange={this.onItemSelect.bind(this)}
                            graphSpec={vspec}
                            currentVisShow={false}
                        />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="placeHolderVizContainer">
                </div>
            )
        }

    }
}
export default CurrentImplicitComponent;