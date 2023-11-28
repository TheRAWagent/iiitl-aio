import React from "react";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  return (
    <div className={`w-full m-3 ${message.uid === user.uid ? "justify-end" : "justify-start"} flex flex-row items-center`}>
      <img
        className="h-20 w-20 rounded-full"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="w-1/4 m-2 flex justify-center content-center flex-col">
        <p className="user-name text-blue-700	hover:text-blue-900">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
