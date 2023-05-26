import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SendEmail({ data }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      company: data["Meta Data"]["2. Symbol"],
      date: date,
      data: data["Time Series (Daily)"][date],
    };

    toast.promise(
      fetch("http://localhost:3001/api/mail/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }),
      {
        pending: "Sending...",
        success: "Email sent!",
        error: "Error sending email",
      }
    );
  };

  return (
    <div>
      <label htmlFor="my-modal" className="btn">
        Send Email
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex flex-col items-center">
          <label
            htmlFor="my-modal"
            className="modal-close p-2 rounded-md hover:bg-neutral hover:text-white mb-5 border border-neutral"
          >
            Close
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs mb-2"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs mb-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="date"
            className="p-2 m-2 rounded-sm bg-base-100"
            onChange={(e) => setDate(e.target.value)}
          />
          <div className="modal-action flex justify-center">
            <button
              className="btn btn-neutral"
              onClick={(e) => handleSubmit(e)}
            >
              Send
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendEmail;
