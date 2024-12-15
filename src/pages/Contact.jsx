import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_iydpwks",
        "template_arnlnoi",
        form.current,
        { publicKey: "_QyRNM0sa7FBWK5yB" }
      );
      toast.success("Email Send Success");
    } catch (error) {
      toast.error("Something is wrong");
    }
  };

  return (
    <div className="pt-3 px-3">
      <div className="flex justify-between items-center">
        <h2 className="flex justify-between items-center text-[#666666] font-semibold text-[20px]">
          {" "}
          <span className="text-gray-400 me-2">
            <GoDotFill />
          </span>{" "}
          Hire Me
        </h2>
        <Link
          to="#"
          className="flex justify-between items-center text-[#0F9C5C] text-[13px] font-semibold bg-[#DFF7EC] p-1 md:px-3 rounded-full"
        >
          <span>
            <GoDotFill />
          </span>{" "}
          <span className="hidden md:block">AVAILABLE FOR WORK</span>
        </Link>
      </div>
      <div className="pt-5">
        <h2 className="text-4xl text-[#373737] font-semibold py-3">
          Contact Me
        </h2>
        <div className="">
          <p className="text-[#666] pt-2">
            {" "}
            <span className="font-semibold">Whats App:</span> +8801701737771
          </p>
          <p className="text-[#666] pt-2">
            <span className="font-semibold">Email:</span>{" "}
            asadullahahmed01@gmail.com
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="pt-4">
          <div className="grid grid-cols-2 gap-3">
            <input
              className="border outline-none p-2 rounded-md bg-gray-100 text-[#666666]"
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
            />
            <input
              className="border outline-none p-2 rounded-md bg-gray-100 text-[#666666]"
              type="email"
              placeholder="Your Email"
              name="user_email"
              required
            />
          </div>
          <textarea
            className="border outline-none p-2 rounded-md bg-gray-100 text-[#666666] mt-3 w-full resize-none"
            rows={10}
            placeholder="Message"
            name="message"
            required
          ></textarea>
          <button className="w-full bg-[#141414] text-white font-semibold text-[16px] rounded-md p-3 mt-2">
            Submit
          </button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Contact;
