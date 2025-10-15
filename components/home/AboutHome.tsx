import Image from 'next/image';
import { Check } from 'lucide-react';

const AboutHome = () => {
    const features = [
        { text: 'Verified Global Database' },
        { text: 'Data-Driven Performance' },
        { text: 'Niche-Specific Creator' },
        { text: 'AI-Powered Discovery Tools' }
    ];

    const points = [
        {
            text: 'We provide tailor-made programs and workshops that transform your knowledge into unparalleled communication planning and buying skills with focus on digital.'
        },
        {
            text: 'We Utilize AI-driven analytics to deliver precise media strategy and campaign optimization.'
        },
        {
            text: 'We provide practical solutions to maximize effectiveness across the entire media value chain while working closely with all relevant stakeholders.'
        }
    ];

    return (
        <>
            {/* First Section - Connecting Brands */}
            <section className="relative w-full bg-[#F8F8F8] py-8 md:py-20 overflow-hidden">
                {/* Decorative Stars - Single Image with all 3 stars */}
                <div className="absolute top-10 left-0 right-0 hidden md:block">
                    <Image
                        src="/images/stars.svg"
                        alt=""
                        width={1400}
                        height={100}
                        className="w-full h-auto scale-75"
                    />
                </div>

                <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-4 md:pt-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-center">
                        {/* Left Side - Image with Decorative Elements */}
                        <div className="relative flex justify-center items-center h-[280px] md:h-[500px] order-2 lg:order-1">
                            {/* Background Shadow */}
                            <div className="absolute inset-0 flex justify-center items-center">
                                <Image
                                    src="/images/bg-shadow.svg"
                                    alt=""
                                    width={400}
                                    height={600}
                                    className="w-[280px] md:w-[540px] h-auto"
                                />
                            </div>

                            {/* Dotted Circle - Behind the image */}
                            <div className="absolute inset-0 flex justify-center items-center z-0">
                                <Image
                                    src="/images/dotted-circle.svg"
                                    alt=""
                                    width={550}
                                    height={550}
                                    className="w-[220px] md:w-[370px] h-auto"
                                />
                            </div>

                            {/* Main Circular Image (about-image.png) - On top */}
                            <div className="relative z-10 w-[200px] h-[200px] md:w-[330px] md:h-[330px]">
                                <Image
                                    src="/images/about-image.png"
                                    alt="Business Growth"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                <span className="text-[#C11E2B]">Connecting brands with smarter</span>{' '}
                                <span className="text-gray-900">media solutions</span>
                            </h2>

                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                We specialize in helping businesses maximize their advertising by using advanced AI-driven strategies. Our team works as an extension of your marketing arm, ensuring every campaign is placed in the right spot, at the right time, to drive measurable impact.
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C11E2B] flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-900 font-medium text-sm md:text-base">
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section - Mission Statement */}
            <section className="relative w-full bg-[#F8F8F8] py-8 md:py-10">
                <div className="max-w-[1350px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-16 items-center">
                        {/* Left Side - Content */}
                        <div className="lg:col-span-7 space-y-4 md:space-y-8">
                            <h2 className="text-xl md:text-2xl font-bold leading-tight">
                                <span className="text-gray-900">Our mission is to deliver </span>
                                <span className="text-[#C11E2B]">maximum effectiveness</span>
                                <span className="text-gray-900"> and help </span>
                                <span className="text-[#C11E2B]">improve the standards</span>
                                <span className="text-gray-900"> of the industry.</span>
                            </h2>

                            {/* Points List */}
                            <div className="space-y-4 md:space-y-6 pt-2 md:pt-4">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-start gap-3 md:gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#C11E2B] flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={3} />
                                        </div>
                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                            {point.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="lg:col-span-5 relative flex justify-center items-center">
                            <div className="relative w-full h-[250px] md:h-[480px]">
                                <Image
                                    src="/images/about-image-2.png"
                                    alt="Success Target"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutHome;
