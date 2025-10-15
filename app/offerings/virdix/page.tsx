import Image from 'next/image';
import OfferingCard from '@/components/offerings/OfferingCard';

const VerdixPage = () => {
    const offerings = [
        {
            image: '/images/virdix/virdix-1.png',
            title: 'Become AI ready in Marketing',
            logo: '/images/virdix/readyai-logo.png',
            bulletPoints: [
                'Utilise AI tools across your marketing strategy',
                'Hyper-personalise your UX & Content',
                'Maximise advertising performance & Ad bidding'
            ]
        },
        {
            image: '/images/virdix/virdix-2.png',
            title: 'Content Relevance Scoring',
            logo: '/images/virdix/align-logo.png',
            bulletPoints: [
                'Measure content relevance in real-time',
                'Identify trending topics in any vertical',
                'Reduce content cost & increase engagement'
            ]
        },
        {
            image: '/images/virdix/virdix-3.png',
            title: 'Digital Transformation',
            logo: '/images/virdix/catalyst-logo.png',
            bulletPoints: [
                'Full audit of your digital ecosystem',
                'Identify & bridge key strategic gaps',
                'Build end-to-end attribution model'
            ]
        },
        {
            image: '/images/virdix/virdix-4.png',
            title: 'Brand Health Audit',
            logo: '/images/virdix/converse-logo.png',
            bulletPoints: [
                'Audit brand health through sentiment',
                'Produce actionable SWOT analysis',
                'Compare against competitive benchmarks'
            ]
        },
        {
            image: '/images/virdix/virdix-5.png',
            title: 'Search Intent Modeling',
            logo: '/images/virdix/intentful-logo.png',
            bulletPoints: [
                'Go beyond targeting keywords to targeting intent',
                'Maximise relevance & conversion across every touchpoint',
                'Drive product innovation & shape product offering'
            ]
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[200px] md:h-[300px] overflow-hidden mt-16 md:mt-24">
                <Image
                    src="/images/virdix/virdix-hero.png"
                    alt="Verdix Division"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center">
                        Verdix division offerings
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
                                showLearnMore={true}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VerdixPage;
