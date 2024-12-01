import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center py-12">
        <div className="flex-1 px-2">
          <Image
            src="/contact_form.png.webp"
            height={500}
            width={600}
            alt="contact"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 w-full md:w-auto">
          <h1 className="text-3xl font-bold text-white mb-4 text-center">
            ---Contact Us
          </h1>
          <h2 className="text-xl text-orange-600 mb-6 text-center">
            Feel free to reach out to us
          </h2>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Name :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Email :
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Message :
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
