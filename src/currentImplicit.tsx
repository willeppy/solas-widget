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
import ChartGalleryComponent from './chartGallery';

interface currentVisProps {
    recs: any[],
    onChange: Function
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

            return (
                <ChartGalleryComponent
                    // this exists to prevent chart gallery from refreshing while changing tabs
                    // This is an anti-pattern for React, but is necessary here because our chartgallery is very expensive to initialize
                    key={'no refresh'}
                    // ref={this.state.cgRef}
                    title={this.props.recs[0].action}
                    description={this.props.recs[0].description}
                    multiple={true}
                    maxSelectable={10}
                    onChange={this.onItemSelect.bind(this)}
                    graphSpec={this.props.recs[0].vspec}
                    currentVisShow={false}
                />

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