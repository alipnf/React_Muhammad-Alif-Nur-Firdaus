export default function InputChat({ handleSendMessage, setInput }) {
  return (
    <div className=" mt-4 flex w-full">
      <input
        type="text"
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
