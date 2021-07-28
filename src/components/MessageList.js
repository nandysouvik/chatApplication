import React, { useContext } from "react";
import { MessageContext } from "../contexts/MessageContext";
import Message from "./Message";

const MessageList = () => {
  const { new_messages } = useContext(MessageContext);

  return (
    <div>
      {new_messages.length ? (
        <ul className="list">
          {new_messages.map(task => {
            return <Message task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Messages</div>
      )}
    </div>
  );
};

export default MessageList;
