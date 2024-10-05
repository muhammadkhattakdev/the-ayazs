import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React  from "react";


export default function ChatWidget () {


    return (
        <>
            <div className="chat-widget-wrapper">
                <div className="chat-widget">
                    
                </div>
                <div className="chat-open-close-btn">
                    <FontAwesomeIcon icon={faMessage} />
                </div>
            </div>
        </>
    )
}