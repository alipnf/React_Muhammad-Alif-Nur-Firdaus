import { useState } from "react";
import ChatBubble from "../components/ChatBubble";
import InputChat from "../components/InputChat";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useRef } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    {
      position: "chat-start",
      text: "Halo! Apa yang ingin kamu tanyakan atau bicarakan? ",
    },
  ]);
  const [input, setInput] = useState("");
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [{ text: "Halo! Apa yang ingin kamu tanyakan atau bicarakan?" }],
      },
    ],
  });

  const handleSendMessage = async () => {
    if (input.trim()) {
      setMessages([...messages, { position: "chat-end", text: input }]);
      const result = await chat.sendMessage(input);

      setInput("");
      setMessages((prevMessages) => [
        ...prevMessages,
        { position: "chat-start", text: result.response.text() },
      ]);
    }
  };

  return (
    <>
      <div className="container mx-auto mb-9 mt-9 flex flex-col gap-5">
        <ChatBubble messages={messages} setMessages={setMessages} />
        <InputChat
          handleSendMessage={handleSendMessage}
          setInput={setInput}
          input={input}
        />
      </div>
    </>
  );
}
