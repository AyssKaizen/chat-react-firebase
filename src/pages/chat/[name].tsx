'use client';
import React, {useEffect, useState, useRef} from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
// types
import {MessageType} from "@/utils/types";
import DisplayMessages from "@/components/DisplayMessages";

// firebase
import databaseTest from '../../fireBaseApp'
import {ref, set, onValue} from 'firebase/database'

export default function Chat() {
    const messageRef = useRef(null);
    const router = useRouter();
    const name : string = router.query.name;
    const [currentMessage, setCurrentMessage] = useState("");
    const [allMessages, setAllMessages] = useState([])

    useEffect(() => {
        readMessageData();
        messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }, [allMessages])

    const readMessageData = () => {
        onValue(ref(databaseTest, 'messages'), (snapshot) => {
            const data = snapshot.val()
            if(data && allMessages.length !== Object.values(data).length){
                setAllMessages(Object.values(data));
            }
        });
    }
    const writeMessageData = (message: MessageType) => {
        set(ref(databaseTest, `messages/${message.id}`), {
            ...message
        });
    }


    const getDate = () => {
        const minutes = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
        const date = new Date().getHours()  + "h" + minutes;
        return date.toLocaleString();
    }
    const sendMessage = (e) => {
        e.preventDefault();
        const message: MessageType = {
            id: `message-${Date.now()}`,
            pseudo: name,
            message: currentMessage,
            dateTime: getDate()
        }
        writeMessageData(message);
        setAllMessages([...allMessages, message]);
        setCurrentMessage("");
    }
    return(
    <Layout>
        <div style={{width: "100%"}}>
            <div className="flex flex-col" style={{width: '100%'}}>
                <div className="flex self-center px-4" style={{width: 600, height: 300, overflowY: 'scroll'}} ref={messageRef}>
                    {allMessages && <DisplayMessages allMessages={allMessages} myPseudo={name}/>}
                </div>
                <div className="flex justify-center mt-4">
                    <form>
                        <div style={{width: 600}}>
                            <TextArea value={currentMessage} setValue={setCurrentMessage} sendMessage={sendMessage}/>
                            <div className='flex justify-center'>
                                <Button title='Envoyer le message' onclick={sendMessage} disabled={currentMessage === ""}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Layout>)
}
