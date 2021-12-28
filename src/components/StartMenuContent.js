import '../App.css';
import '../PlaceholderWhite.css';
import React, { useState,useEffect } from 'react';
import search from '../assets/search.png';
import arrow from '../assets/arrow.png';
import AppIcon from './AppIcon';

import { useSelector, useDispatch } from 'react-redux'
import { addApp } from '../redux/controller'

function StartMenuContent() {
    const apps = useSelector(state => state.app.apps)
    const dispatch = useDispatch()
    console.log(apps)

    function renderPinnedApp(){
        for(let i = 0; i < apps.length; i ++){
            return (
                <AppIcon 
                    data={apps[i]}
                ></AppIcon>
            )
        }
    }


    return (
        <>
            <div className='SearchBar'>
                <div className='SearchIcon'>
                    <img src={search}>
                    </img>
                </div>
                <input className='SearchInput' placeholder='Type here to search' type="text" name="name" />
            </div>
            <div className='RecommendationApp'>
                <div className='title'>
                    <div className='title-left'>
                        Pinned
                    </div>
                    <div className='title-right'>
                        <div className='title-right-font'>
                            All apps
                        </div>
                        <div className='ArrowIcon'>
                            <img src={arrow}>
                            </img>
                        </div>
                    </div>
                </div>
                <div className='PinnedApp'>
                    {renderPinnedApp()}
                </div>
            </div>
        </>
    );
}

export default StartMenuContent;
