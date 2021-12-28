import '../App.css';
import '../PlaceholderWhite.css';
import React, { useState,useEffect } from 'react';

function AppIcon(data) {
    console.log(data.data)

    return (
        <>
            <div className='AppIconBox'>
                <div className='AppIconSpace'>
                    <img src={data.data.image}></img>
                    <div className='AppIconName'>{data.data.name}</div>
                </div>
            </div>
        </>
    );
}

export default AppIcon;
