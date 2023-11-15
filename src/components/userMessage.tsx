import React from 'react';
import {MessageType} from "@/utils/types";

function stringToColor(str){
    var hash = 0;
    for(var i=0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 3) - hash);
    }
    var color = Math.abs(hash).toString(16).substring(0, 6);

    return "#" + '000000'.substring(0, 6 - color.length) + color;
}

const UserMessage = ({message} : {message: MessageType}) => {
    return (
        <div className="my-2">
            <div className="rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] pl-2 py-1 pr-1" style={{maxWidth: '45%', float: 'left'}}>
                <p style={{color: stringToColor(message.pseudo)}} className="text-xs text-teal">
                    {message.pseudo}
                </p>
                <p className="text-sm mt-1">
                    {message.message}
                </p>
                <p style={{color: '#7e7e7e'}} className="text-right text-xs text-grey-dark">
                    {message.dateTime}
                </p>
            </div>
        </div>
    );
};

export default UserMessage;
