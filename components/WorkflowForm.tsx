
import React, { useState, useRef } from 'react';

interface WorkflowFormProps {
  onSubmit: (formData: FormData) => void;
  onAnalysisNeeded: (text: string, criteria: string) => void;
  isSubmitting: boolean;
}

const WorkflowForm: React.FC<WorkflowFormProps> = ({ onSubmit, onAnalysisNeeded, isSubmitting }) => {
  const [criteria, setCriteria] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      
      // Basic text extraction simulation for the preview analysis
      const simulatedText = `Extracted text from ${file.name}: Experienced Senior Software Engineer with 8 years in React, TypeScript, and Node.js. Proven track record of leading teams and delivering scalable web applications. Strong background in AWS and CI/CD pipelines.`;
      
      if (criteria.length > 5) {
        onAnalysisNeeded(simulatedText, criteria);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const file = fileInputRef.current?.files?.[0];
    if (!file || !criteria) return;

    const formData = new FormData();
    formData.append('What are you looking for', criteria);
    formData.append('CV', file);
    
    onSubmit(formData);
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Setup Your Search</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-800 mb-2">
            1. What are you looking for?
          </label>
          <div className="relative group">
            <textarea
              required
              value={criteria}
              onChange={(e) => setCriteria(e.target.value)}
              placeholder="e.g. Senior Frontend Engineer, Remote globally, Salary min $120k, focusing on AI-driven startups..."
              className="w-full h-32 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all outline-none resize-none text-slate-900 font-medium placeholder-slate-400 bg-slate-50/50 focus:bg-white"
            />
          </div>
          <p className="mt-2 text-xs text-slate-500 font-medium italic">Describe your ideal role, location, and salary expectations.</p>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-800 mb-2">
            2. Upload Your Resume (PDF)
          </label>
          <div 
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all ${fileName ? 'border-indigo-500 bg-indigo-50/50 shadow-inner shadow-indigo-100/50' : 'border-slate-300 hover:border-indigo-400 bg-slate-50 hover:bg-slate-100/50'}`}
          >
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="hidden" 
            />
            
            {fileName ? (
              <div className="flex items-center gap-3 animate-in fade-in zoom-in duration-300">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900">{fileName}</p>
                  <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wider">File uploaded • Click to change</p>
                </div>
              </div>
            ) : (
              <>
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-slate-800">Drag and drop or click to upload</p>
                <p className="text-xs text-slate-500 mt-1 font-medium">Professional PDF, DOCX or TXT files only</p>
              </>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !fileName || !criteria}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-2 group ${
            isSubmitting || !fileName || !criteria 
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none border border-slate-200' 
            : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200 hover:-translate-y-0.5 active:translate-y-0'
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Starting Your Agents...
            </>
          ) : (
            <>
              Launch Matchmaking
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default WorkflowForm;
