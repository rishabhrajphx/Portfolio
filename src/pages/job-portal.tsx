import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as pdfjs from 'pdfjs-dist';
import mammoth from 'mammoth';
import { extractDocxText, extractPdfText } from '@/utils/resumeParser';
import { parseResumeText } from '@/utils/resumeParser';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  achievements: string;
  motivation: string;
  demographics: {
    veteran: boolean;
    disability: boolean;
    gender: string;
    ethnicity: string;
  };
}

export const JobPortal = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    achievements: '',
    motivation: '',
    demographics: {
      veteran: false,
      disability: false,
      gender: '',
      ethnicity: '',
    },
  });

  const updateFormData = (extractedData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...extractedData }));
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    
    try {
      if (file.type === 'application/pdf') {
        const text = await extractPdfText(file);
        const extractedData = parseResumeText(text);
        updateFormData(extractedData);
      } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        const text = await extractDocxText(file);
        const extractedData = parseResumeText(text);
        updateFormData(extractedData);
      }
    } catch (error) {
      console.error('Error processing file:', error);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Job Application Portal</h1>
      
      {/* Resume Upload Section */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 mb-6 text-center
          ${isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300'}`}
      >
        <input {...getInputProps()} />
        <p>Drag and drop your resume here, or click to select file</p>
        <p className="text-sm text-gray-500 mt-2">Supported formats: PDF, DOCX</p>
      </div>

      {/* Personal Information Form */}
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            placeholder="First Name"
            className="input-field"
          />
          {/* Add other personal information fields */}
        </div>

        {/* Cover Letter Questions */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Professional Background</h2>
          <textarea
            value={formData.achievements}
            onChange={(e) => setFormData({ ...formData, achievements: e.target.value })}
            placeholder="What are your key achievements in your career so far?"
            className="input-field h-32"
          />
          <textarea
            value={formData.motivation}
            onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
            placeholder="Why are you interested in this position?"
            className="input-field h-32"
          />
        </div>

        {/* Equal Opportunity Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Equal Opportunity Information</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.demographics.veteran}
                onChange={(e) => setFormData({
                  ...formData,
                  demographics: { ...formData.demographics, veteran: e.target.checked }
                })}
              />
              <span>Are you a veteran?</span>
            </label>
            {/* Add other demographic questions */}
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};


