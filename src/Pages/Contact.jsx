import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-[90vh] gap-6 md:gap-20 bg-gray-100">
      <div>
        <h3 className="text-2xl font-bold">Get in Touch</h3>
        <p className="text-gray-600 text-md my-4">
          If you have any questions, feel free to reach out to us!
        </p>
        <div className="p-4 flex flex-col gap-5 text-gray-600">
          <div className="flex gap-5">
            <EmailIcon />
            <p>example@example.com</p>
          </div>
          <div className="flex gap-5">
            <PhoneIcon />
            <p>(254) 000-0000</p>
          </div>
          <div className="flex gap-5">
            <PlaceIcon />
            <p>254 Main St, Anytown, Nairobi</p>
          </div>
        </div>
      </div>

      <form action="" className="flex flex-col gap-2 md:w-1/4 w-full text-gray-600 bg-gray-100 p-2 shadow-2xl">
        <label htmlFor="fullName" className="font-semibold">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          className="border rounded outline-none shadow-lg"
        />
        <label htmlFor="email" className="font-semibold">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border rounded outline-none shadow-lg"
        />
        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea id="message" name="message" required className="border rounded outline-none shadow-lg" />
        <button className="bg-sky-600 text-white cursor-pointer p-2 rounded">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
