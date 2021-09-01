import React from "react";
import style from "./style.module.css";

function ChatMesaggeBox({ item }) {
  return (
    <div
      className={`${style.chatMessageBox} ${item.fromMe ? style.right : ""}`}
    >
      {item.message}
    </div>
  );
}

export default ChatMesaggeBox;
