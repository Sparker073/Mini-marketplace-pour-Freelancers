import React, { useState } from 'react';
import { ArrowLeft, Upload, Linkedin, Sparkles, BrainCircuit, Building2, Trophy } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const AddService = () => {
  const navigate = useNavigate();
  const { addExpert } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    role: '',
    company: '',
    linkedIn: '',
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newExpert = {
      name: formData.name,
      expertise: `Verified Expert in ${formData.category}`,
      role: formData.role,
      company: formData.company,
      featured: false,
      category: formData.category
    };

    addExpert(newExpert);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#091837] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1B78B1]/20 rounded-full filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#74DBFD]/10 rounded-full filter blur-[120px] animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1E2C37]/20 rounded-full filter blur-[150px] animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-[#74DBFD] hover:text-white mb-8 group">
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>

        <div className="backdrop-blur-xl bg-[#1E2C37]/30 p-8 rounded-3xl border border-[#74DBFD]/20 shadow-2xl shadow-[#74DBFD]/10">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-[#74DBFD] text-transparent bg-clip-text">
              Join Our Expert Network
            </h1>
            <Sparkles className="h-6 w-6 text-[#74DBFD] animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="backdrop-blur-md bg-[#091837]/30 p-4 rounded-xl border border-[#74DBFD]/10 flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-[#1B78B1] to-[#74DBFD]">
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium">Top Talent</h3>
                <p className="text-[#74DBFD]/70 text-sm">Join elite experts</p>
              </div>
            </div>
            <div className="backdrop-blur-md bg-[#091837]/30 p-4 rounded-xl border border-[#74DBFD]/10 flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-[#1B78B1] to-[#74DBFD]">
                <BrainCircuit className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium">AI Matching</h3>
                <p className="text-[#74DBFD]/70 text-sm">Smart client pairing</p>
              </div>
            </div>
            <div className="backdrop-blur-md bg-[#091837]/30 p-4 rounded-xl border border-[#74DBFD]/10 flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-[#1B78B1] to-[#74DBFD]">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium">Global Reach</h3>
                <p className="text-[#74DBFD]/70 text-sm">Worldwide opportunities</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-[#74DBFD] text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#091837]/50 border border-[#1B78B1]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#74DBFD] transition-all duration-300 placeholder-[#74DBFD]/30"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[#74DBFD] text-sm font-medium">
                  Service Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#091837]/50 border border-[#1B78B1]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#74DBFD] transition-all duration-300"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Business">Business</option>
                  <option value="Data Science">Data Science</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[#74DBFD] text-sm font-medium">
                  Role Title
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#091837]/50 border border-[#1B78B1]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#74DBFD] transition-all duration-300 placeholder-[#74DBFD]/30"
                  placeholder="e.g., Full Stack Developer"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[#74DBFD] text-sm font-medium">
                  Current/Previous Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#091837]/50 border border-[#1B78B1]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#74DBFD] transition-all duration-300 placeholder-[#74DBFD]/30"
                  placeholder="e.g., Google"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[#74DBFD] text-sm font-medium">
                LinkedIn Profile
              </label>
              <div className="relative">
                <Linkedin className="absolute left-3 top-2.5 h-5 w-5 text-[#1B78B1]" />
                <input
                  type="url"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleInputChange}
                  className="w-full pl-10 px-4 py-2 rounded-lg bg-[#091837]/50 border border-[#1B78B1]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#74DBFD] transition-all duration-300 placeholder-[#74DBFD]/30"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[#74DBFD] text-sm font-medium">
                Upload CV (Optional)
              </label>
              <div className="relative group">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="cv-upload"
                />
                <label
                  htmlFor="cv-upload"
                  className="flex items-center justify-center w-full px-4 py-3 rounded-lg bg-[#091837]/50 border border-dashed border-[#1B78B1]/30 text-[#74DBFD] hover:bg-[#1B78B1]/20 transition-all duration-300 cursor-pointer group-hover:border-[#74DBFD]"
                >
                  <Upload className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  {cvFile ? cvFile.name : "Choose a file"}
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#1B78B1] to-[#74DBFD] text-white font-medium transition-all duration-500 shadow-lg hover:shadow-[#74DBFD]/20 transform hover:-translate-y-1 flex items-center justify-center space-x-2 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-[#74DBFD] hover:to-[#1B78B1]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  <span>Join as Expert</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;