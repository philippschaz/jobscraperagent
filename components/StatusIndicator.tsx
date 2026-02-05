
import React from 'react';
import { AppStatus } from '../types';

interface StatusIndicatorProps {
  status: AppStatus;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  if (status === AppStatus.IDLE) return null;

  const messages = {
    [AppStatus.ANALYZING]: {
      title: "Analyzing Resume",
      desc: "Gemini is building your candidate profile...",
      color: "blue"
    },
    [AppStatus.SUBMITTING]: {
      title: "Triggering n8n Workflow",
      desc: "Apify agents are warming up for scraping...",
      color: "indigo"
    },
    [AppStatus.ERROR]: {
      title: "Workflow Interrupted",
      desc: "Check logs and try again.",
      color: "red"
    },
    [AppStatus.SUCCESS]: {
      title: "Success",
      desc: "Data sent to Google Sheets.",
      color: "green"
    }
  };

  const current = messages[status as keyof typeof messages];
  if (!current) return null;

  return (
    <div className={`p-4 rounded-xl border flex items-start gap-3 bg-${current.color}-50 border-${current.color}-100`}>
      <div className={`w-2 h-2 rounded-full bg-${current.color}-500 mt-2 animate-pulse`}></div>
      <div>
        <h4 className={`text-sm font-bold text-${current.color}-900`}>{current.title}</h4>
        <p className={`text-xs text-${current.color}-700 opacity-80`}>{current.desc}</p>
      </div>
    </div>
  );
};

export default StatusIndicator;
