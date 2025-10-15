import Image from 'next/image';

const partners = [
  'agthiya.png',
  'aldar-education.png',
  'al-futtain.png',
  'alsafi.png',
  'alyasra.png',
  'americana.png',
  'ardara.png',
  'aujan.png',
  'badel.png',
  'dubai-holding-ent.png',
  'byd.png',
  'california-garden.png',
  'chalhoub.png',
  'dept-culture-tourism.png',
  'diriyan-company.png',
  'dubai-holding-real-estate.png',
  'du.png',
  'expo-city.png',
  'goody.png',
  'infiniti.png',
  'jumeirah.png',
  'mbc.png',
  'meraas.png',
  'dubai-holding-asset-management.png',
  'nahdi.png',
  'nakheel.png',
  'dubai-holding.png',
  'nissan.png',
  'puig.png',
  'savola.png',
  'sta.png',
  'tamam.png',
  'yaqoot.png',
  'zain.png',
];

const PartnersPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background Image */}
            <section className="relative w-full h-[180px] md:h-[240px] overflow-hidden mt-16 md:mt-24">
                <Image
                    src="/images/partners-page-hero.png"
                    alt="Partners"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Centered Text */}
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center">Partners</h1>
                </div>
            </section>

            {/* Partners Gallery Section */}
            <section className="relative w-full bg-white py-12 md:py-16 lg:py-20">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    {/* Section Title */}
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#C11E2B]">
                            Main clients list that can be published
                        </h2>
                    </div>

                    {/* Partners Logo Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
                        {partners.map((partner) => (
                            <div 
                                key={partner}
                                className="relative flex items-center justify-center aspect-square p-4"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={`/images/partners/${partner}`}
                                        alt={partner.replace('.png', '')}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartnersPage;
