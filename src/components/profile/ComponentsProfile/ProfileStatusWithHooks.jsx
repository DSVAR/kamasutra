import React, {useEffect, useState} from 'react';


const ProfileStatusWithHooks = (props) => {

    let [editMode,setEditMode]= useState(false);
    let [status,setStatus]= useState(props.status);
    
    
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])
    
    const activateMethodMode=()=>{
        setEditMode(true);
    }
    const deActivateMethodMode=()=>{
        setEditMode(false);
       props.updateStatus(status);
        }
   const onStatusChange = (e) => {
       setStatus( e.currentTarget.value)
    }
    
    return (
        <div>
            {!editMode ?
                <div>
                    <span onDoubleClick={activateMethodMode}>{props.status + ' you'}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateMethodMode}
                          value={status} />
                </div>
            }
        </div>
    );
}


export default ProfileStatusWithHooks;
