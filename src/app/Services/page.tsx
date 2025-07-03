import React from 'react'

function page() {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#F8F8F8]">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#003366]">Our Comprehensive Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Service Card 1: Business Registration & Licensing */}
                <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out border-t-4 border-[#007B7B]">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#007B7B] text-white mb-6 mx-auto">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m8-16v16m-13-2h1m-1-4h1m-1-4h1m10-12h2m-2 0h-5m-9 0H3m2 0h5"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center text-[#003366]">Business Registration & Licensing</h3>
                    <p className="text-center opacity-80">
                        Expert assistance with company formation, trade license acquisition, and all necessary registrations in UAE free zones and mainland.
                    </p>
                </div>

                {/* Service Card 2: Visa & Immigration Services */}
                <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out border-t-4 border-[#007B7B]">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#007B7B] text-white mb-6 mx-auto">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 112 0v1m-4 0h4m-4 0h-5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center text-[#003366]">Visa & Immigration Services</h3>
                    <p className="text-center opacity-80">
                        Streamlined processing of investor, employment, and family visas, ensuring a smooth relocation for you and your team.
                    </p>
                </div>

                {/* Service Card 3: Office Space Solutions */}
                <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out border-t-4 border-[#007B7B]">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#007B7B] text-white mb-6 mx-auto">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center text-[#003366]">Office Space Solutions</h3>
                    <p className="text-center opacity-80">
                        Assistance in finding the ideal office space, from virtual offices to co-working spaces and private offices.
                    </p>
                </div>

                {/* Service Card 4: Legal & Compliance Support */}
                <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out border-t-4 border-[#007B7B]">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#007B7B] text-white mb-6 mx-auto">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.004 12.004 0 002.928 12c.08.708.243 1.393.488 2.043 1.068 2.89 3.193 5.028 5.617 6.089a11.955 11.955 0 011.895.426M12 20.056a11.955 11.955 0 01-1.895-.426M12 20.056c-2.424-1.061-4.549-3.199-5.617-6.089a12.004 12.004 0 01-.488-2.043m.488-2.043A11.955 11.955 0 0112 2.944m0 0a11.955 11.955 0 018.618 3.04A12.004 12.004 0 0021.072 12c-.08.708-.243 1.393-.488 2.043"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center text-[#003366]">Legal & Compliance Support</h3>
                    <p className="text-center opacity-80">
                        Guidance on UAE legal frameworks, compliance requirements, and corporate governance to ensure smooth operations.
                    </p>
                </div>

                {/* Service Card 5: Bank Account Opening */}
                <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out border-t-4 border-[#007B7B]">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#007B7B] text-white mb-6 mx-auto">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center text-[#003366]">Bank Account Opening</h3>
                    <p className="text-center opacity-80">
                        Facilitating the opening of corporate bank accounts with leading local and international banks in the UAE.
                    </p>
                </div>

                {/* Service Card 6: PRO Services */}
                <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out border-t-4 border-[#007B7B]">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#007B7B] text-white mb-6 mx-auto">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M10 14v4m0 0h4m-4 0h-3.242M14 14v4m0 0h4m-4 0h3.242M12 18V6"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center text-[#003366]">PRO Services</h3>
                    <p className="text-center opacity-80">
                        Comprehensive Public Relations Officer (PRO) services to handle all government liaison and document clearing.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default page