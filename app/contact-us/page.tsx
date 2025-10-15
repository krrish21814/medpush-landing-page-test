import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import ContactSection from '@/components/home/ContactSection';

const ContactPage = () => {
    const offices = [
        {
            city: 'DUBAI',
            address: 'Jumeirah Lake Towers, Cluster N,',
            address2: 'JBC4 Office 2205 and 2203',
            address3: 'Dubai, UAE',
            email: 'info@medpushmena.com',
            phone: '+971441614432',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0956537845364!2d55.140089!3d25.073611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA0JzI1LjAiTiA1NcKwMDgnMjQuMyJF!5e0!3m2!1sen!2sae!4v1234567890'
        },
        {
            city: 'RIYADH',
            address: 'Al Yasmin - Anas Bin Malik Street - Alesaaha Building',
            address2: '2nd floor - Office 20',
            address3: '',
            email: 'info@medpushmena.com',
            phone: '+966555787003',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.825867473!2d46.685974!3d24.713633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjEiTiA0NsKwNDEnMDkuNSJF!5e0!3m2!1sen!2ssa!4v1234567890'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[160px] md:h-[200px] overflow-hidden mt-16 md:mt-24">
                <Image
                    src="/images/contact-hero.png"
                    alt="Contact Us"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Centered Text */}
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center">Contact Us</h1>
                </div>
            </section>

            {/* Our Offices Section */}
            <section className="relative w-full bg-white py-8 md:py-12 lg:py-16">
                <div className="max-w-[1300px] mx-auto px-4 md:px-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12 lg:mb-16">
                        Our Offices
                    </h2>

                    {/* Offices Grid */}
                    <div className="space-y-10 md:space-y-14 lg:space-y-16">
                        {offices.map((office, index) => (
                            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-start">
                                {/* Left - Office Details */}
                                <div className="space-y-4 md:space-y-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#C11E2B] mb-4 md:mb-6 lg:mb-8">
                                        {office.city}
                                    </h3>

                                    <div className="space-y-1">
                                        <p className="text-gray-700 text-sm md:text-base">{office.address}</p>
                                        <p className="text-gray-700 text-sm md:text-base">{office.address2}</p>
                                        {office.address3 && <p className="text-gray-700 text-sm md:text-base">{office.address3}</p>}
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-3 md:pt-4">
                                        <div className="flex items-center gap-2 md:gap-3">
                                            <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#C11E2B] flex-shrink-0" />
                                            <a href={`mailto:${office.email}`} className="text-gray-700 text-sm md:text-base hover:text-[#C11E2B] break-all">
                                                {office.email}
                                            </a>
                                        </div>

                                        <div className="flex items-center gap-2 md:gap-3">
                                            <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#C11E2B] flex-shrink-0" />
                                            <a href={`tel:${office.phone}`} className="text-gray-700 text-sm md:text-base hover:text-[#C11E2B]">
                                                {office.phone}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Right - Map */}
                                <div className="w-full h-[220px] md:h-[250px] rounded-lg overflow-hidden shadow-md">
                                    <iframe
                                        src={office.mapUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section - Imported Component */}
            <ContactSection />
        </div>
    );
};

export default ContactPage;
