import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    // Reset form
    setFormData({
      username: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-us mt-10 rounded-lg p-6 shadow-md">
      <h2 className="mb-6 text-center text-3xl font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input input-bordered w-full rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </label>
        </div>
        <div>
          <label className="label">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </label>
        </div>
        <div>
          <label className="label">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered w-full rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
              required
            ></textarea>
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full rounded-md bg-blue-600 p-3 text-white transition duration-300 hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-6 rounded-md border p-4 shadow-sm">
          <h3 className="text-2xl font-bold">Submitted Data:</h3>
          <p>
            <strong>Username:</strong> {submittedData.username}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Message:</strong> {submittedData.message}
          </p>
        </div>
      )}
    </div>
  );
}
