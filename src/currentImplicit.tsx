//  Copyright 2019-2020 The Lux Authors.
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

import ChartGalleryComponent from './chartGallery';

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

            const mainStyles = {
                maxWidth: "45%",
                minWidth: "22%",
                borderRight: "0"
            }

            let mStyle = {}

            if (this.props.numRecommendations !== 0) {
                mStyle = mainStyles;
            } else {
                mStyle = {
                    width: "100%"
                }
            }

            return (
                <div id="mainVizContainer" style={mStyle}>
                    <div>
                        <div>
                            <p className="title-description"
                                style={{
                                    position: 'absolute',
                                    fontSize: '20px',
                                    height: '25px',
                                    display: 'inline',
                                    top: '10px',
                                }}>Implicit Visualization</p>

                            <p className="text-description"
                                style={{
                                    top: '40px',
                                    position: 'absolute'
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
                        </div>

                    </div>
                    <div id="mainVizInnerContainer">
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
                            graphSpec={this.props.recs[0].vspec}
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