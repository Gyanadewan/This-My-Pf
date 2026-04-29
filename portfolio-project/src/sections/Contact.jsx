import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    // ✅ Validation
    if (!name || !email || !message) {
      alert("Please fill all fields ⚠️");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_gggay91",
        "template_9hd6pug",
        form.current,
        {
          publicKey: "KtyDf98IddMCFEF_j",
        }
      )
      .then(() => {
        alert("Message sent successfully ✅");
        form.current.reset(); // clear form
      })
      .catch((error) => {
        alert("Failed ❌");
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-32 container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 max-w-md"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your name"
          required
          className="p-3 rounded bg-gray-900 border border-gray-700"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your email"
          required
          className="p-3 rounded bg-gray-900 border border-gray-700"
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          className="p-3 rounded bg-gray-900 border border-gray-700"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 py-3 rounded font-semibold hover:scale-105 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;