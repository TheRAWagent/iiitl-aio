import React, { useState } from "react";
import { auth, db } from "../firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message fixed bottom-0 left-0 w-screen flex justify-between">
      <label htmlFor="messageInput" hidden className="p-3 bg-blue-950">
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input p-3 w-full bg-blue-950 text-white"
        placeholder="Type Message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {/* <Button className="p-3 w-40 ">Send</Button> */}
      <button type="submit" className="p-3 w-40 border-gray-800 border-2 mx-2 rounded">Send</button>
    </form>
  );
};

export default SendMessage;
