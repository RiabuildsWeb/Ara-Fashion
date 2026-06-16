import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { toast } from "react-toastify";

const ContactSection = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "0606e480-6b16-433d-bbba-b2e888d284a3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("");
      toast.success("Form submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error",data)
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <section className=" py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 bg-white overflow-hidden shadow-sm">
          {/* Left */}
          <div className="p-10 border-r border-[#EFEAE2] bg-[#F5F0E8]">
            <h3 className="text-2xl font-serif mb-10">Get In Touch</h3>

            <div className="space-y-8">
              <div>
                <div className="flex gap-4">
                  <MapPin className="w-7 h-7 text-[#c89b4a] " />
                  <h4 className="font-medium">Visit Us</h4>
                </div>
                <div className="mx-11">
                  <p className="text-gray-500 ">Lagos , Nigeria</p>
                </div>
              </div>

              <div>
                <div className="flex gap-4">
                  <Phone className="w-7 h-7 text-[#c89b4a]" />
                  <h4 className="font-medium">Call Us</h4>
                </div>
                <div className="mx-11">
                  <p className="text-gray-500">+234123456789</p>
                </div>
              </div>

              <div>
                <div className="flex gap-4">
                  <Mail className="w-7 h-7 text-[#c89b4a]" />
                  <h4 className="font-medium">Email Us</h4>
                </div>
                <div className="mx-11">
                  <p className="text-gray-500">ara@gmail.com</p>
                </div>
                <div className="mt-4">
                  <hr className=" border-t opacity-30 " />
                  <h3 className="text-2xl font-serif mt-3">Connect With Us</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-[#C89b4a] flex items-center justify-center mb-4 mt-4">
                      <FaInstagram className="text-[#C8A97E] text-sm" />
                    </div>
                    <span>Instagram</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full border border-[#C89b4a] flex items-center justify-center">
                      <FaLinkedinIn className="text-[#C8A97E] text-sm" />
                    </div>
                    <span>Linkedin</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-[#C8A97E] flex items-center justify-center">
                      <FaFacebookF className="text-[#C89b4a] text-sm" />
                    </div>
                    <span>Facebook</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}

          <div className="lg:col-span-2 p-10 ">
            <h3 className="text-2xl font-serif mb-8">Send Us A Message</h3>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 text-left">
                  Your Name
                  <input
                    className="w-full border border-gray-300 rounded py-3 px-4 mt-2 "
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 text-left  md:pl-4">
                  Your Email
                  <input
                    className="w-full border border-gray-300 rounded py-3 px-4 mt-2 "
                    type="email"
                    name="Email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="my-6 text-left">
                Message
                <textarea
                  className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
                  name="Message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button className="bg-black  text-white py-2 px-12 mb-10 rounded">
                { result ? result :"Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
