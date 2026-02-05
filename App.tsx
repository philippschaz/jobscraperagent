
import React, { useState } from 'react';
import { AppStatus, AnalysisResult, AppView } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkflowForm from './components/WorkflowForm';
import AIAnalysisPreview from './components/AIAnalysisPreview';
import StatusIndicator from './components/StatusIndicator';
import HowItWorks from './components/HowItWorks';
import { analyzeResumeContent } from './services/geminiService';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.SEARCH);
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleStartAnalysis = async (resumeText: string, searchCriteria: string) => {
    setStatus(AppStatus.ANALYZING);
    try {
      const result = await analyzeResumeContent(resumeText, searchCriteria);
      setAnalysis(result);
      setStatus(AppStatus.IDLE);
    } catch (error) {
      console.error("Analysis failed", error);
      setStatus(AppStatus.IDLE);
    }
  };

  const handleFinalSubmit = async (formData: FormData) => {
    setStatus(AppStatus.SUBMITTING);
    setErrorMessage(null);

    // n8n Form Trigger webhook URL
    const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL ||
      'https://zmegend.app.n8n.cloud/form/a3358df3-4ed7-4e11-ab3d-c1123cc5f510';

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setStatus(AppStatus.SUCCESS);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      setErrorMessage(`The workflow could not be triggered: ${errorMsg}. Please check your n8n configuration.`);
      setStatus(AppStatus.ERROR);
    }
  };

  const resetForm = () => {
    setStatus(AppStatus.IDLE);
    setAnalysis(null);
    setErrorMessage(null);
    setView(AppView.SEARCH);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Header currentView={view} onViewChange={setView} />
      
      <main className="container mx-auto px-4 mt-8 max-w-5xl">
        {view === AppView.HOW_IT_WORKS ? (
          <HowItWorks onBack={() => setView(AppView.SEARCH)} />
        ) : status === AppStatus.SUCCESS ? (
          <div className="bg-white p-12 rounded-2xl shadow-xl border border-green-100 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Workflow Successfully Triggered!</h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto text-lg">
              Our AI agents are now scanning LinkedIn and matching jobs against your profile. 
              Matches with a score over 70% will appear in your Google Sheet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://docs.google.com/spreadsheets/d/1rRq7qWl2l_ly_vJIKUXCHIriwhJM2JHPKGj0q196K5s/edit#gid=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
              >
                Open Google Sheet
              </a>
              <button 
                onClick={resetForm}
                className="px-8 py-4 border border-slate-300 rounded-xl font-bold hover:bg-slate-50 transition"
              >
                Search Again
              </button>
            </div>
          </div>
        ) : (
          <>
            <Hero />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <WorkflowForm 
                  onSubmit={handleFinalSubmit} 
                  onAnalysisNeeded={handleStartAnalysis}
                  isSubmitting={status === AppStatus.SUBMITTING}
                />
                
                {status === AppStatus.ERROR && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-100 text-red-700 rounded-lg text-sm">
                    {errorMessage}
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 space-y-6">
                <StatusIndicator status={status} />
                <AIAnalysisPreview analysis={analysis} isLoading={status === AppStatus.ANALYZING} />
                
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Quick Start
                  </h3>
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600">
                      Upload your CV to see a live preview of how our AI perceives your candidate profile before triggering the deep search.
                    </p>
                    <button 
                      onClick={() => setView(AppView.HOW_IT_WORKS)}
                      className="text-indigo-600 text-sm font-bold hover:underline"
                    >
                      See the full architecture →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default App;
