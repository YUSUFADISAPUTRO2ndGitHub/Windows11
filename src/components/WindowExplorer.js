import '../App.css';
import React, { useState,useEffect } from 'react';


import expand from '../assets/expand.png';
import close from '../assets/close.png';

import Account from './Account';

function WindowExplorer(data) {
    function dragElement() {
        let elmnt = document.getElementById("WindowMenu");
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) >= 0 && (elmnt.offsetTop - pos2 + elmnt.offsetHeight) <= window.innerHeight? (elmnt.offsetTop - pos2) + "px" : elmnt.offsetTop + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) >= 0 && (elmnt.offsetLeft - pos1 + elmnt.offsetWidth) <= window.innerWidth? (elmnt.offsetLeft - pos1) + "px" : elmnt.offsetLeft + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    const [expandWindowToggle, setexpandWindowToggle] = useState(false);

    function CloseWindowExplorerAndSearch(){
        CloseWindowExplorer()
        data.data.callback.callbackResponse2(true)
        
    }

    function CloseWindowExplorer(){
        data.data.callback.callbackResponse1(false)
    }

    function ExpandWindowExplorer(){
        if(expandWindowToggle){
            setexpandWindowToggle(false)
        }else{
            setexpandWindowToggle(true)
        }
    }

    return (
        <>
            <div className={expandWindowToggle? 'ExpandWindow' : ''} id="WindowMenu" onClick={dragElement}>
                <div id="WindowMenuHeader">
                    <div className='WindowTitle'>{data.data.data}</div>
                    <div className='SearchTitle'>
                        <input className='SearchInput' placeholder='Type here to search' type="text" name="name" onClick={CloseWindowExplorerAndSearch} />
                    </div>
                    <div className='ToggleArea'>
                        <div className="ExpandButton" onClick={ExpandWindowExplorer}>
                            <img src={expand}>
                            </img>
                        </div>
                        <div className="CloseButton" onClick={CloseWindowExplorer}>
                            <img src={close}>
                            </img>
                        </div>
                    </div>
                </div>
                {
                    data.data.data === 'Account'?
                    <>
                        <Account></Account>
                    </>
                    :
                    <></>
                }
            </div>
        </>
    );
}

export default WindowExplorer;
