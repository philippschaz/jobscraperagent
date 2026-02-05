# JobQuest AI

**Tailored job search by agents you choose.**

An open source, agentic workflow that turns your CV and preferences into **ranked job opportunities** and **application drafts**, with a human in the loop.

---

## What it does

The Job Seeker Agent automates the most time-consuming parts of the job search while keeping full control with the user.

---

## Agent Workflow

### 1. Getting to know you
- Upload your **CV**
- Extract:
  - Professional experience
  - Skills and seniority
- Define job preferences, for example:
  - Role: *Freelance Data Scientist*
  - Location: *Remote globally* or *Hybrid Germany*
  - Remote share: *≥ 80%*

---

### 2. Searcher
- Scrapes job listings from the web
- Uses **Apify**
- Produces structured job data as **JSON**

---

### 3. Evaluator
- Ranks jobs based on fit
- Produces an output file in **Google Drive**
- Scoring dimensions:
  - **Preference fit**
  - **Skill fit**

---

### 4. Application Assistant
- Generates:
  - **Draft 1:** Application letter
  - **Draft 2:** First phone interview Q&A
- Designed for **human review and approval**

---

## Tech Stack
- n8n for agent orchestration
- Apify for job scraping
- Google Drive for outputs
- LLMs for evaluation and drafting

---

## Extensions (planned)
- Auto-apply with human approval
- Continuous job monitoring
- Multiple agent configurations
- Recruiter and platform versions

---

## Authors
- Marc Klose  
- Markus Einer  
- Philipp Schaz  
