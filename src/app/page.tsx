'use client';
import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Image from 'next/image'
import {useRouter} from "next/navigation";


export default function Home() {
    const [name, setName] = useState("");
    const router = useRouter();
    const navigateToChat = () => {
        router.push(`/chat/${name}`);
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/hakka.png"
          alt="hakka Logo"
          width={190}
          height={87}
          priority
        />
      </div>
        <div>
            <div className="flex w-full justify-center">
                <div style={{marginRight: '0.5rem'}}>
                    <Input name='input-name' value={name} setValue={setName} />
                </div>
                <Button onclick={navigateToChat} title="Login" disabled={name === ""}/>
            </div>
        </div>
    </main>
  )
}
