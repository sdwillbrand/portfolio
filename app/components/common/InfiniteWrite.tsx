"use client";
import { HTMLProps, useEffect, useState } from "react";

interface Props extends HTMLProps<HTMLSpanElement> {
  messages: string[];
}

enum WriteState {
  INCREMENT,
  DECREMENT,
}

const InfiniteWrite = ({ messages, className }: Props) => {
  const [counter, setCounter] = useState(0);
  const [writeState, setWriteState] = useState(WriteState.INCREMENT);
  const [msg, setMsg] = useState("");
  const [bufferMsg, setBufferMsg] = useState(messages[counter]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (writeState === WriteState.DECREMENT && !bufferMsg && !msg) {
        setCounter((prev) => {
          const next = (prev + 1) % messages.length;
          setBufferMsg(messages[next]);
          setWriteState(WriteState.INCREMENT);
          return next;
        });
      }
      if (writeState === WriteState.INCREMENT && bufferMsg) {
        const c = bufferMsg.slice(0, 1);
        setMsg((prev) => `${prev}${c}`);
        setBufferMsg((prev) => prev.slice(1));
      }
      if (!bufferMsg) {
        setWriteState(WriteState.DECREMENT);
      }
      if (writeState === WriteState.DECREMENT) {
        setMsg((prev) => prev.slice(undefined, -1));
      }
    }, 150);
    return () => clearInterval(interval);
  }, [bufferMsg, counter, messages, msg, writeState]);

  return <span className={`${className} text-gray-700`}>{msg}</span>;
};

export default InfiniteWrite;
