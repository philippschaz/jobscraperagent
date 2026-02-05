
import React from 'react';
import { AppView } from '../types';

interface HeaderProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onViewChange(AppView.SEARCH)}
        >
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">J</div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            JobQuest AI
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onViewChange(AppView.SEARCH)}
            className={`text-sm font-semibold transition ${currentView === AppView.SEARCH ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'}`}
          >
            Job Finder
          </button>
          <button 
            onClick={() => onViewChange(AppView.HOW_IT_WORKS)}
            className={`text-sm font-semibold transition ${currentView === AppView.HOW_IT_WORKS ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'}`}
          >
            How it Works
          </button>
          <a 
            href="https://docs.google.com/spreadsheets/d/1rRq7qWl2l_ly_vJIKUXCHIriwhJM2JHPKGj0q196K5s/edit#gid=0" 
            target="_blank"
            className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition flex items-center gap-1"
          >
            Results Sheet
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </nav>

        <button 
          onClick={() => onViewChange(AppView.SEARCH)}
          className="bg-indigo-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition shadow-md shadow-indigo-100"
        >
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
