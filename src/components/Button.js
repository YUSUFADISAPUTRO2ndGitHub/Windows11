import '../App.css';
import React, { useState } from 'react';

function Button(parentData) {

    function response(){
        if(parentData.data.startMenu){
            parentData.data.callback(false)
        }else{
            parentData.data.callback(true)
        }
        // parentData.data.callback(!parentData.data.startMenu)
    }
    return (
        <div className={parentData.data.startMenu? "Button Pressed" : "Button"} onClick={response}>
            <img src={parentData.data.image.windowsIcon}></img>
        </div>
    );
}

export default Button;
