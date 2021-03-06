﻿import React from 'react';

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateMethodMode = () => {
        console.log(this)
        this.setState({
            editMode: true
        })
    }
    deactivateMethodMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            })
        
    }

    render(){
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateMethodMode}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateMethodMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
};

export default Status;
