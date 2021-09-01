import style from "./style.module.css";
import { useChat } from "../context/ChatContext";
import ChatMesaggeBox from "./ChatMesaggeBox";
import ScrollableFeed from "react-scrollable-feed";

function ChatList() {
  const { messages } = useChat();
  return (
    <div className={style.chatlist}>
      <ScrollableFeed forceScroll={true}>
        {messages.map((item, key) => (
          <ChatMesaggeBox key={key} item={item} />
        ))}
      </ScrollableFeed>
    </div>
  );
}

export default ChatList;
