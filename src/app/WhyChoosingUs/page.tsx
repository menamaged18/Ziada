import React from 'react'

function page() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-[#003366] text-white w-full min-h-161">
        <div className="container mx-auto px-0 md:px-6 lg:px-12 xl:px-24 max-w-full">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">Why Choose Ziada?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Benefit Card 1 */}
                <div className="bg-white text-[#333333] rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FFD700] text-[#003366] mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Unmatched Expertise</h3>
                    <p className="opacity-80">
                        Years of experience navigating the complexities of UAE business regulations.
                    </p>
                </div>

                {/* Benefit Card 2 */}
                <div className="bg-white text-[#333333] rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FFD700] text-[#003366] mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Fast & Efficient Process</h3>
                    <p className="opacity-80">
                        Streamlined procedures to get your business up and running quickly.
                    </p>
                </div>

                {/* Benefit Card 3 */}
                <div className="bg-white text-[#333333] rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FFD700] text-[#003366] mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
                    <p className="opacity-80">
                        Clear, upfront costs with no hidden fees, ensuring complete transparency.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default page