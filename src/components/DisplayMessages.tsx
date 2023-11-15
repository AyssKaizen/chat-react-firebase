import React from 'react';
import {MessageType} from "@/utils/types";
import UserMessage from "@/components/userMessage";
import MyMessage from "@/components/mymessage";

type DisplayMessagesProps = {
    allMessages: Array<MessageType>;
    myPseudo: string;
}

const DisplayMessages = ({allMessages, myPseudo} : DisplayMessagesProps) => {
    return (
        <div className="flex flex-col w-full">
            {allMessages && allMessages.map((message) => (
                myPseudo === message.pseudo ? <MyMessage key={message.id} message={message}/> : <UserMessage key={message.id} message={message}/>
            ))}
        </div>
    );
};

export default DisplayMessages;
