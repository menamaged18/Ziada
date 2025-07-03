import Image from 'next/image';
import Link from 'next/link';

function FirstPage() {
  return (
        <section id="home" className="relative bg-[#003366] text-white py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10 relative">
                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                        Your Gateway to <span className="text-[#FFD700]">Business Success</span> in the UAE
                    </h1>
                    <p className="text-lg md:text-xl mb-8 opacity-90">
                        Seamlessly establish your company in the United Arab Emirates with our expert guidance and comprehensive solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link href="/Contact" className="px-8 py-3 rounded-full font-semibold transition duration-300 ease-in-out bg-[#007B7B] text-white hover:bg-[#005F5F]">Get a Free Consultation</Link>
                        <Link href="/Services" className="px-8 py-3 rounded-full font-semibold transition duration-300 ease-in-out border-2 border-[#FFD700] text-[#FFD700] bg-transparent hover:bg-[#FFD700] hover:text-[#003366]">Explore Our Services</Link>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    {/* Placeholder image for visual appeal */}
                    <Image src="/UAESkyLine.png" width={600} height={500} alt="UAE Skyline" className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out" />
                    {/* UAESkyLine */}
                </div> 
            </div>

            {/* Background pattern/shapes for visual interest */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="white" strokeWidth="0.1"></path>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
        </section>
  )
}

export default FirstPage