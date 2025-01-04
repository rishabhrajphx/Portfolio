import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';

const JobApplicationPortal = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [coverLetterAnswers, setCoverLetterAnswers] = useState({
    achievements: '',
    motivation: '',
  });

  const [equalOpportunityData, setEqualOpportunityData] = useState({
    gender: '',
    ethnicity: '',
    veteranStatus: '',
  });

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setResumeFile(file);
      // Placeholder for resume parsing logic
      console.log('File uploaded:', file.name);
    }
  };

  // Handle input change for form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle cover letter questions
  const handleCoverLetterChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCoverLetterAnswers((prev) => ({ ...prev, [name]: value }));
  };

  // Handle equal opportunity questions
  const handleEqualOpportunityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEqualOpportunityData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white min-h-screen">
      <Navigation />
      <h1 className="text-4xl font-medium text-gray-900 mb-8 mt-8">
         Job Application
      </h1>

      {/* Resume Upload Section */}
      <div className="mb-12 bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-200">
        <label className="text-lg text-gray-700 mb-4 block">Resume Upload</label>
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
          <input
            type="file"
            accept=".pdf,.docx"
            onChange={handleFileUpload}
            className="hidden"
            id="resume-upload"
          />
          <label 
            htmlFor="resume-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span className="text-gray-600">Drop your resume here or click to browse</span>
            <span className="text-sm text-gray-500 mt-2">Supports PDF, DOCX</span>
          </label>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="space-y-8 mb-12">
        <h2 className="text-2xl font-medium text-gray-900">Personal Information</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
              placeholder="(123) 456-7890"
            />
          </div>
        </div>
      </div>

      {/* Cover Letter Section */}
      <div className="space-y-8 mb-12">
        <h2 className="text-2xl font-medium text-gray-900">Professional Background</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Key Achievements</label>
            <textarea
              name="achievements"
              value={coverLetterAnswers.achievements}
              onChange={handleCoverLetterChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none min-h-[120px]"
              placeholder="Share your most significant professional achievements..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Motivation</label>
            <textarea
              name="motivation"
              value={coverLetterAnswers.motivation}
              onChange={handleCoverLetterChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none min-h-[120px]"
              placeholder="What drives you to apply for this position?"
            />
          </div>
        </div>
      </div>

      {/* Equal Opportunity Section */}
      <div className="space-y-8 mb-12">
        <h2 className="text-2xl font-medium text-gray-900">Equal Opportunity</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
            <select
              name="gender"
              value={equalOpportunityData.gender}
              onChange={handleEqualOpportunityChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none appearance-none bg-white"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="nonBinary">Non-Binary</option>
              <option value="preferNotToSay">Prefer not to say</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Veteran Status</label>
            <select
              name="veteranStatus"
              value={equalOpportunityData.veteranStatus}
              onChange={handleEqualOpportunityChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none appearance-none bg-white"
            >
              <option value="">Select status</option>
              <option value="veteran">Veteran</option>
              <option value="nonVeteran">Non-Veteran</option>
              <option value="preferNotToSay">Prefer not to say</option>
            </select>
          </div>
        </div>
      </div>

      <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium text-lg">
        Submit Application
      </button>
    </div>
  );
};

export default JobApplicationPortal;


