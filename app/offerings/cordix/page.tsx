import Image from 'next/image';
import OfferingCard from '@/components/offerings/OfferingCard';

const CordixPage = () => {
    const offerings = [
        {
            image: '/images/cordix/cordix-1.png',
            title: 'Real Time Campaign Review',
            logo: '/images/cordix/preemptive-logo.png',
            bulletPoints: [
                'Scrutiny of strategy and plans for all media including influencers',
                'Secure best possible results'
            ]
        },
        {
            image: '/images/cordix/cordix-2.png',
            title: 'Media Audit (Post Campaign)',
            logo: '/images/cordix/captive-logo.png',
            bulletPoints: [
                'Monthly or yearly',
                'Planning effectiveness & Buying efficiency',
                'Compliance and transparency'
            ]
        },
        {
            image: '/images/cordix/cordix-3.png',
            title: 'Pitch Process Management',
            logo: '/images/cordix/path-logo.png',
            bulletPoints: [
                'Technical and Commercial parts',
                'Briefing, process, and templates',
                'Front or back seat role'
            ]
        },
        {
            image: '/images/cordix/cordix-4.png',
            title: 'Agency Performance Evaluation',
            logo: '/images/cordix/flame-logo.png',
            bulletPoints: [
                'A 360-degree model',
                'Advertiser-Agency evaluation',
                'Covering all aspects'
            ]
        },
        {
            image: '/images/cordix/cordix-5.png',
            title: 'Invoices Review',
            logo: '/images/cordix/assure-logo.png',
            bulletPoints: [
                'Monthly validation',
                'Track ROI, billing, payment, etc.',
                'Ads appearance and proofs'
            ]
        },
        {
            image: '/images/cordix/cordix-6.png',
            title: 'Marketing Mix Modelling',
            logo: '/images/cordix/spire-logo.png',
            bulletPoints: [
                'Across all touch points',
                'Uncover sales drivers',
                'Predictive Analytics'
            ]
        },
        {
            image: '/images/cordix/cordix-7.png',
            title: 'Orientation and Coaching',
            logo: '/images/cordix/strive-logo.png',
            bulletPoints: [
                'Communication process',
                'Planning and buying techniques',
                'Practical exercise'
            ]
        },
        {
            image: '/images/cordix/cordix-8.png',
            title: 'SM Community Management Review',
            logo: '/images/cordix/foster-logo.png',
            bulletPoints: [
                'KPIs vs. business objectives',
                'Posting and performance',
                'Commercial and compliance'
            ]
        },
        {
            image: '/images/cordix/cordix-9.png',
            title: 'Real Time Campaign Review',
            logo: '/images/cordix/energize-logo.png',
            bulletPoints: [
                'Business restructuring',
                'Protocols and frameworks',
                'Performance enhancement'
            ]
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[200px] md:h-[300px] overflow-hidden mt-16 md:mt-24">
                <Image
                    src="/images/cordix-hero.png"
                    alt="Cordix Division"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center">
                        Cordix division offerings
                    </h1>
                </div>
            </section>

            {/* Offerings Grid */}
            <section className="relative w-full bg-white py-12 md:py-16 lg:py-20">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        {offerings.map((offering, index) => (
                            <OfferingCard
                                key={index}
                                image={offering.image}
                                title={offering.title}
                                logo={offering.logo}
                                bulletPoints={offering.bulletPoints}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CordixPage;
