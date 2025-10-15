'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface TeamMember {
    image: string;
    name: string;
    role: string;
    about: string;
    workExperience: string;
    specialties: string[];
    mainClientsExperience: string[];
}

interface TeamMemberModalProps {
    member: TeamMember;
    isOpen: boolean;
    onClose: () => void;
}

const TeamMemberModal = ({ member, isOpen, onClose }: TeamMemberModalProps) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Extract filename from the team-images path and use it for team-details
    const getDetailImagePath = (imagePath: string) => {
        const filename = imagePath.split('/').pop();
        return `/images/team/team-details/${filename}`;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] min-h-[600px] overflow-hidden animate-fadeIn">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#C11E2B] hover:bg-[#a01822] text-white rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label="Close modal"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Content Container */}
                <div className="flex flex-col md:flex-row h-full min-h-[600px] max-h-[90vh]">
                    {/* Left Side - Fixed Image with Padding */}
                    <div className="md:w-5/12 flex-shrink-0 p-4 md:p-6 flex flex-col">
                        <div className="relative w-full flex-1 rounded-2xl overflow-hidden">
                            <Image
                                src={getDetailImagePath(member.image)}
                                alt={member.name}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Side - Scrollable Content */}
                    <div className="md:w-7/12 overflow-y-auto p-6 md:p-8 lg:p-6">
                        {/* About Section */}
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-[#C11E2B] mb-3">About</h3>
                            <p className="text-gray-700 leading-relaxed">{member.about}</p>
                        </div>

                        {/* Work Experience */}
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-[#C11E2B] mb-3">Work Experience</h3>
                            <p className="text-gray-700 leading-relaxed">{member.workExperience}</p>
                        </div>

                        {/* Specialties */}
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-[#C11E2B] mb-3">Specialties</h3>
                            <ul className="space-y-2">
                                {member.specialties.map((specialty, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-[#C11E2B] mr-2">•</span>
                                        <span className="text-gray-700">{specialty}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Main Clients Experience */}
                        <div>
                            <h3 className="text-xl font-bold text-[#C11E2B] mb-3">
                                Main Clients Experience:
                            </h3>
                            <ul className="space-y-2">
                                {member.mainClientsExperience.map((client, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-[#C11E2B] mr-2">•</span>
                                        <span className="text-gray-700">{client}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
            `}</style>
        </div>
    );
};

export default TeamMemberModal;
