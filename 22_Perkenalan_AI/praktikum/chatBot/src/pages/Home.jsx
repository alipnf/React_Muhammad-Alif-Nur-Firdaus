import { useState } from "react";
import ChatBubble from "../components/ChatBubble";
import InputChat from "../components/InputChat";

export default function Home() {
  const [messages, setMessages] = useState([
    {
      position: "chat-start",
      text: "It's over Anakin,\nI have the high ground.",
    },
    { position: "chat-end", text: "You underestimate my power!" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { position: "chat-end", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="container mx-auto h-screen">
      <ChatBubble messages={messages} setMessages={setMessages} />
      <InputChat handleSendMessage={handleSendMessage} setInput={setInput} />
    </div>
  );
}
