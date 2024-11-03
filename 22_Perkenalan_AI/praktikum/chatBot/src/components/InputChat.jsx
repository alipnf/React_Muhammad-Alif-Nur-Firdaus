export default function InputChat({ handleSendMessage, setInput }) {
  return (
    <div className="bottom-0 mt-4 flex">
      <input
        type="text"
        // value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here"
        className="input input-bordered mr-2 w-full"
      />
      <button onClick={handleSendMessage} className="btn btn-primary">
        Send
      </button>
    </div>
  );
}
