import { useRef, useEffect } from "react";

export default function InputChat({ handleSendMessage, setInput, input }) {
  const inputChat = useRef();
  useEffect(() => {
    inputChat.current.focus();
  }, []);

  return (
    <div className="sticky mt-4 flex w-full">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here"
        className="input input-bordered mr-2 w-full"
        ref={inputChat}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage();
            setInput("");
          }
        }}
      />
      <button onClick={handleSendMessage} className="btn btn-primary">
        Send
      </button>
    </div>
  );
}
