import React from 'react';
import {MessageType} from "@/utils/types";

const Mymessage = ({message} : {message: MessageType}) => {
    return (
            <div className="my-2">
                <div className="rounded-md border border-violet-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] pl-2 py-1 pr-1" style={{maxWidth: '45%', float: 'right'}}>
                    <p className="text-sm text-violet-400 mb-1">
                        {message.message}
                    </p>
                    <p style={{color: '#7e7e7e'}} className="text-right text-xs text-grey-dark ml-3">
                        {message.dateTime}
                    </p>
                </div>
        </div>
    );
};

export default Mymessage;
