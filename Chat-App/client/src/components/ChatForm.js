import { useState } from "react";
import style from "./style.module.css";
import { sendMessage } from "../socketApi";
import { useChat } from "../context/ChatContext";

function ChatForm() {
  const [message, setMessage] = useState("");
  const { setMessages } = useChat();

  const Submit = (e) => {
    e.preventDefault();

    console.log(message);
    setMessages((prevState) => [...prevState, { message, fromMe: true }]);
    sendMessage(message);

    setMessage("");
  };
  return (
    <div>
      <form onSubmit={Submit}>
        <input
          className={style.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
}

export default ChatForm;
