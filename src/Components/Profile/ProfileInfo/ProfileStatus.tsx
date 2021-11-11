import React, {ChangeEvent} from 'react';
import {UserStatusResponseType} from "../../../api/api";

type PropsType = {
    status: string
    updateStatusForProfileRender: (newStatusText: string) => void
}

class ProfileStatusContainer extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode:true
        })
    }

    deaActivateEditMode = () => {
        this.setState({
            editMode:false
        })
        this.props.updateStatusForProfileRender(this.state.status)
    }

    onStatusChange = (e:ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span
                            onDoubleClick={()=>this.activateEditMode()}
                        >{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            autoFocus={true}
                            value={this.state.status}
                            onBlur={() => this.deaActivateEditMode()}
                            onChange={this.onStatusChange}
                        ></input>
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatusContainer