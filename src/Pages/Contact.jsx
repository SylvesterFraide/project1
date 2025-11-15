import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-[90vh] w-full bg-gray-100 gap-20 flex-col sm:flex-row">
      <div className="">
        <h3 className="text-2xl font-bold">Get in Touch</h3>
        <p className="text-gray-600 text-md my-4">
          If you have any questions, feel free to reach out to us!
        </p>
        <div className="p-4 text-gray-600">
          <div className="flex flex-col sm:flex-row gap-6 space-y-8">
            <EmailIcon />
            <p>example@example.com</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 space-y-8">
            <PhoneIcon />
            <p>(254) 000-0000</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 space-y-8">
            <PlaceIcon />
            <p>254 Main St, Anytown, Nairobi</p>
          </div>
        </div>
      </div>

      <form
        action=""
        className="flex flex-col w-1/2 space-y-2 bg-white p-6 rounded-2xl shadow-xl"
      >
        <label htmlFor="fullName" className="font-semibold mb-[-1px]">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="bg-gray-100 bg-gray-100 shadow-sm rounded"
          required
        />
        <label htmlFor="email" className="font-semibold mb-[-1px]">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-gray-100 shadow-sm rounded border text-green-200"
          required
        />
        <label htmlFor="message" className="font-semibold mb-[-1px]">Message</label>
        <textarea id="message" name="message" className="bg-gray-100 shadow-sm rounded" required />
        <button className="border">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
