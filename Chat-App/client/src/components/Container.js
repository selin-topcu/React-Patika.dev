import { useEffect } from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";
import style from "./style.module.css";
import { init, subscribeChat, subscribeInitialMessages } from "../socketApi";
import { useChat } from "../context/ChatContext";
function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();
    subscribeInitialMessages((messages) => setMessages(messages));
    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });
  }, []);
  return (
    <div className={style.container}>
      <ChatList />
      <ChatForm />
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}

export default Container;
