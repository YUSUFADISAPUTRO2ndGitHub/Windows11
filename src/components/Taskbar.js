import '../App.css';
import Button from './Button'
import React, { useState,useEffect } from 'react';
import windowsIcon from '../assets/windows-icon.png';
import StartMenuContent from './StartMenuContent';
import WindowExplorer from './WindowExplorer';

import account from '../assets/account.png';
import power from '../assets/power.png';

function Taskbar() {
    const [startMenu, setstartMenu] = useState(false);
    const [windowsButton, setWindowsButtton] = useState({
        callback : callbackResponseWindowsButton,
        image : {windowsIcon},
        startMenu: startMenu
    });
    // const [WindowExplorerToggle, setWindowExplorerToggle] = useState(false);
    const [WindowExplorerData, setWindowExplorerData] = useState({
        toggle: false,
        data: null,
        callback: {
            callbackResponse1 : callbackResponseWindowExplorer,
            callbackResponse2 : callbackResponseSearchWindowExplorer
        },
    });

    useEffect(()=>{
        console.log(startMenu)
        setWindowsButtton({
            callback : callbackResponseWindowsButton,
            image : {windowsIcon},
            startMenu: startMenu
        })
    },[startMenu])

    function callbackResponseWindowsButton(childData){
        setstartMenu(childData)
    }

    function accountClicked(){
        setstartMenu(false)
        setWindowExplorerData({
            toggle: true,
            data: "Account",
            callback: WindowExplorerData.callback,
        })
    }

    function callbackResponseWindowExplorer(childData){
        setWindowExplorerData({
            toggle: childData,
            data: WindowExplorerData.data,
            callback: WindowExplorerData.callback,
        })
    }

    function callbackResponseSearchWindowExplorer(childData){
        setstartMenu(childData)
    }

    return (
        <>
            <div className="Taskbar">
                {
                    <Button
                        data = {windowsButton}
                    ></Button>
                }
            </div>
            <div className={startMenu? "StartMenu Show" : "StartMenu Hide"}>
                <StartMenuContent>

                </StartMenuContent>
                <div className='AccountStartMenuBar'>
                    <div className='AccountLeftSection' onClick={accountClicked}>
                        <span className='AccountLogin'>
                            <img src={account}>
                            </img>
                        </span>
                    </div>
                    <div className='AccountMiddleSection' onClick={accountClicked}>
                        Account
                    </div>
                    <div className='AccountRightSection'>
                        <span className='AccountPower'>
                            <img src={power}>
                            </img>
                        </span>
                    </div>
                </div>
            </div>
            {
                WindowExplorerData.toggle?
                <WindowExplorer
                    data = {WindowExplorerData}
                >

                </WindowExplorer>
                :
                <></>
            }
        </>
    );
}

export default Taskbar;
