import React from 'react'

function page() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F8F8F8] text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-[#003366]">Get in Touch</h2>
            <div className="max-w-3xl mx-auto bg-white text-[#333333] rounded-lg shadow-lg p-8 md:p-12">
                <p className="text-lg mb-8 opacity-90">
                    Ready to start your business in the UAE? Contact us today for a free consultation.
                </p>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#007B7B] focus:border-[#007B7B] sm:text-base" placeholder="Your Name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#007B7B] focus:border-[#007B7B] sm:text-base" placeholder="your.email@example.com" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-left text-sm font-medium text-gray-700">Phone (Optional)</label>
                        <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#007B7B] focus:border-[#007B7B] sm:text-base" placeholder="+971 50 123 4567" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#007B7B] focus:border-[#007B7B] sm:text-base" placeholder="Tell us about your business setup needs..."></textarea>
                    </div>
                    <button type="submit" className="w-full btn-primary bg-[#003366] hover:bg-[#001A33] text-white">Send Message</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default page