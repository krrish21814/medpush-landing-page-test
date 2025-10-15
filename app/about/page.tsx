import Image from 'next/image';
import { Play, Check } from 'lucide-react';

const AboutPage = () => {
    const benefits = [
        'Drive higher compliance, transparency and accountability across the entire media value chain',
        'Review the current media practices leading to better performance by the media agency while they are remunerated fairly',
        'Improve ROI year-on-year',
        'Ensure that the data, particularly in digital, is properly used and leveraged',
        'Have peace of mind across the entire media value chain'
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section with Background Image */}
            <section className="relative w-full h-[180px] md:h-[240px] overflow-hidden mt-16 md:mt-24">
                <Image
                    src="/images/about-page-hero.png"
                    alt="About Us"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Centered Text */}
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center">About Us</h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="relative w-full bg-white py-10 md:py-16 lg:py-0">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        {/* Left Side - Content */}
                        <div className="space-y-4 md:space-y-6 order-1">
                            <div className="inline-block">
                                <span className="text-[#C11E2B] text-xs md:text-sm font-semibold uppercase tracking-wider">
                                    ABOUT US
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                We are the leading regional media consultancy company in the MENA region.
                            </h2>

                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                We partner with advertisers and act as an extended arm of their marketing team to maximise effectiveness and secure higher return on their media investment
                            </p>

                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                We started operating in Q4 2016 with Dubai being the main hub for the region.
                            </p>

                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                In Q1 2022, we launched our offices in Riyadh to be close to the local Saudi clients and create even a bigger hub.
                            </p>
                        </div>

                        {/* Right Side - Image with Decorative Elements */}
                        <div className="relative flex justify-center items-center h-[350px] md:h-[500px] lg:h-[600px] order-2">
                            {/* Background Shadow */}
                            <div className="absolute inset-0 flex justify-center items-center">
                                <Image
                                    src="/images/bg-shadow.svg"
                                    alt=""
                                    width={600}
                                    height={600}
                                    className="w-[400px] md:w-[550px] lg:w-[650px] h-auto"
                                />
                            </div>

                            {/* Dotted Circle - Behind the image */}
                            <div className="absolute inset-0 flex justify-center items-center z-0">
                                <Image
                                    src="/images/dotted-circle.svg"
                                    alt=""
                                    width={550}
                                    height={550}
                                    className="w-[300px] md:w-[400px] lg:w-[480px] h-auto"
                                />
                            </div>

                            {/* Main Circular Image (about-us-page.png) - On top */}
                            <div className="relative z-10 w-[260px] h-[260px] md:w-[350px] md:h-[350px] lg:w-[430px] lg:h-[430px]">
                                <Image
                                    src="/images/about-us-page.png"
                                    alt="About Us Team"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                {/* Background Image Placeholder */}
                <Image
                    src="/images/about-page-hero.png"
                    alt="Video Background"
                    fill
                    className="object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Video Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    {/* Play Button */}
                    <button className="w-16 h-16 md:w-20 md:h-20 bg-[#C11E2B] hover:bg-[#a01822] rounded-full flex items-center justify-center transition-all duration-300 mb-4 md:mb-6 shadow-2xl">
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
                    </button>

                    {/* Text */}
                    <h2 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold text-center tracking-wider">
                        MEDPUSH MENA
                    </h2>
                </div>
            </section>

            {/* Why Our Services Section */}
            <section className="relative w-full bg-white py-10 md:py-16 lg:py-20">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        {/* Left Side - Image Collage */}
                        <div className="relative order-2 lg:order-1">
                            <Image
                                src="/images/about-us-collage.png"
                                alt="Our Services"
                                width={600}
                                height={500}
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                Why our services are needed by advertisers?
                            </h2>

                            {/* Benefits List */}
                            <div className="space-y-4 md:space-y-6">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3 md:gap-4">
                                        <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#C11E2B] flex items-center justify-center mt-1">
                                            <Check className="w-3 h-3 md:w-4 md:h-4 text-white" strokeWidth={3} />
                                        </div>
                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                            {benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
