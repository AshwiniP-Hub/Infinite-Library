import React from "react";

const HelpCenter = () => {

  return (
   <>
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Help Center
        </h1>

        {/* FAQ Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">FAQs</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-700">
                Q: How can I reset my password?
              </h3>
              <p className="text-gray-600">
                A: Click on "Forgot Password" on the login page and follow the instructions.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">
                Q: Where can I find my order history?
              </h3>
              <p className="text-gray-600">
                A: Log in to your account and navigate to the "Orders" section.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">
                Q: How do I contact customer support?
              </h3>
              <p className="text-gray-600">
                A: You can contact us via the form below or email us at support@infinitelibrary.com.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm outline-none sm:text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 outline-none rounded-md shadow-sm sm:text-sm"
                placeholder="Your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border outline-none border-gray-300 rounded-md shadow-sm sm:text-sm"
                placeholder="Feel free to ask your questions without any hesitation. We will get in touch with you shortly."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-xl font-medium py-2 px-4 rounded-md hover:bg-pink-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
   </>
  )
}

export default HelpCenter
