
export interface JobMatch {
  joburl: string;
  location: string;
  title: string;
  evaluation: string;
  preferenceScore: number;
  skillsScore: number;
  published: string;
  company?: string;
}

export interface AnalysisResult {
  summary: string;
  topSkills: string[];
  suggestedTitles: string[];
  refinement: string;
}

export enum AppStatus {
  IDLE = 'IDLE',
  ANALYZING = 'ANALYZING',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export enum AppView {
  SEARCH = 'SEARCH',
  HOW_IT_WORKS = 'HOW_IT_WORKS'
}
