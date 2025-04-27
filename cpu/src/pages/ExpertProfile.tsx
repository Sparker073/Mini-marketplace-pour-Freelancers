import React from 'react';
import { ArrowLeft, Mail, Star, Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const ExpertProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { experts } = useStore();
  
  const expert = experts.find(e => e.name.toLowerCase().replace(/\s+/g, '-') === id);

  if (!expert) {
    return (
      <div className="min-h-screen bg-[#091837] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/experts" className="inline-flex items-center text-[#74DBFD] hover:text-white mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Experts
          </Link>
          <div className="text-white text-center">Expert not found.</div>
        </div>
      </div>
    );
  }

  // Additional expert details
  const expertDetails = {
    rating: 5,
    reviews: 47,
    hourlyRate: "$150",
    availability: "Available",
    completedProjects: 89,
    joinedDate: "March 2022",
    about: `Experienced ${expert.role} with a proven track record in developing and deploying scalable solutions. Previously worked at ${expert.company} on various high-impact projects.`,
    skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker"],
    education: "M.S. in Computer Science, Stanford University",
    languages: ["English", "Spanish"],
  };

  return (
    <div className="min-h-screen bg-[#091837] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/experts" className="inline-flex items-center text-[#74DBFD] hover:text-white mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Experts
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="backdrop-blur-lg bg-[#1E2C37]/30 p-6 rounded-2xl border border-[#74DBFD]/10 h-fit">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#1B78B1] to-[#74DBFD] rounded-full mb-4 flex items-center justify-center text-white text-4xl font-semibold">
                {expert.name.charAt(0)}
              </div>
              
              <h1 className="text-2xl font-bold text-white mb-2">{expert.name}</h1>
              <p className="text-[#74DBFD] flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                {expert.expertise}
              </p>
              <p className="text-white/80 mt-1">{expert.role}</p>
              <p className="text-[#74DBFD]/70 text-sm">Previously at {expert.company}</p>

              <div className="flex items-center mt-4 gap-1">
                {[...Array(expertDetails.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#74DBFD] fill-[#74DBFD]" />
                ))}
                <span className="text-white/80 ml-2">({expertDetails.reviews} reviews)</span>
              </div>

              <button className="w-full mt-6 py-3 px-6 rounded-lg bg-gradient-to-r from-[#1B78B1] to-[#74DBFD] text-white font-medium hover:from-[#74DBFD] hover:to-[#1B78B1] transition-all duration-500 shadow-lg hover:shadow-[#74DBFD]/20 transform hover:-translate-y-1">
                <Mail className="h-4 w-4 inline-block mr-2" />
                Contact Expert
              </button>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#74DBFD]/80">Hourly Rate</span>
                <span className="text-white font-semibold">{expertDetails.hourlyRate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#74DBFD]/80">Availability</span>
                <span className="text-green-400">{expertDetails.availability}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#74DBFD]/80">Projects</span>
                <span className="text-white">{expertDetails.completedProjects}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#74DBFD]/80">Member Since</span>
                <span className="text-white">{expertDetails.joinedDate}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="backdrop-blur-lg bg-[#1E2C37]/30 p-6 rounded-2xl border border-[#74DBFD]/10">
              <h2 className="text-xl font-semibold text-white mb-4">About</h2>
              <p className="text-white/80">{expertDetails.about}</p>
            </div>

            {/* Skills */}
            <div className="backdrop-blur-lg bg-[#1E2C37]/30 p-6 rounded-2xl border border-[#74DBFD]/10">
              <h2 className="text-xl font-semibold text-white mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {expertDetails.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-[#091837]/50 text-[#74DBFD] text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education & Languages */}
            <div className="backdrop-blur-lg bg-[#1E2C37]/30 p-6 rounded-2xl border border-[#74DBFD]/10">
              <h2 className="text-xl font-semibold text-white mb-4">Education & Languages</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-[#74DBFD] mt-1" />
                  <div>
                    <p className="text-white">{expertDetails.education}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-[#74DBFD] mt-1" />
                  <div>
                    <p className="text-white">Languages: {expertDetails.languages.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;