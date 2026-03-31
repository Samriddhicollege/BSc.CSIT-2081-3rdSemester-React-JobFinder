## Project Title

> *Job Finder Web Application using React + Vite*

---

## Student Information

* **Name:** Karun Acharya  
* **Roll Number:** 12 section A 
* **Course / Program:** BSc CSIT  
* **Semester / Year:** 3rd Semester / 2081

---

## Instructor Information

* **Instructor Name:** Dipak Shrestha
* **Course Title:** React Development  
* **College Name:** Samriddhi College  

---

## Project Overview

> This project is a modern Job Finder web application developed using React and Vite.  
> It allows users to browse job listings and save their favorite jobs for future reference.  
> The system includes features like pagination, local storage persistence, and responsive UI design.  
> Users can easily manage saved jobs with full CRUD operations.  
> The main goal of this project is to simulate a real-world job portal and strengthen frontend development skills.

---

## Objectives

* Build a modern React-based web application  
* Implement real-world features like job browsing and bookmarking  
* Understand component-based architecture  
* Apply responsive UI/UX design principles  
* Work with APIs and local storage  

---

## Technologies Used

### Frontend

* React.js  
* Vite  
* HTML, CSS, JavaScript  

### Backend (if applicable)

* Not applicable (uses external API)

### Database

* Browser localStorage  

### Other Tools

* Git & GitHub  
* Axios  
* React Router  

---

## Key Features

* Job Listing from API  
* Save & Delete Jobs  
* Persistent Storage using localStorage  
* Pagination System  
* Loading & Error Handling  
* Responsive UI Design  
* Custom Hook (`useLocalStorage`)  
* CRUD Operations  


---

## Screens / Modules

* Home Page (Browse Jobs)  
* Saved Jobs Page  
* Pagination Controls  
* Loader & Error Display  

---

## Installation & Setup

```bash
# Clone repository
git clone https://github.com/Samriddhicollege/BSc.CSIT-2081-3rdSemester-React-JobFinder.git

# Go to project folder
cd jobfinder

# Install dependencies
npm install

# Run project
npm run dev
```

---

## Project Structure

```
/project-root
src/
├── components/              # Reusable UI components
│   ├── Button.jsx           # Reusable button component
│   ├── Button.css           # Button styles
│   ├── JobCard.jsx          # Individual job listing card
│   ├── JobCard.css          # Job card styles
│   ├── SearchBar.jsx        # Search input with validation
│   ├── SearchBar.css        # Search bar styles
│   ├── Loader.jsx           # Loading spinner
│   └── Loader.css           # Loader styles
│
├── pages/                   # Page components
│   ├── Home.jsx             # Main job browsing page
│   ├── SavedJobs.jsx        # Saved jobs management page
│   └── Pages.css            # Page-specific styles
│
├── utils/                   # Utility functions
│   ├── api.js               # API integration (axios)
│   └── storage.js           # localStorage operations
│
├── hooks/                   # Custom React hooks
│   └── useLocalStorage.js   # Reusable localStorage hook
│
├── App.jsx                  # Main App component with routing
├── App.css                  # App-level styles
├── main.jsx                 # React entry point
└── index.css                # Global styles
│
│── public/
│── README.md
```

---

## GitHub & Live Demo

* **GitHub Repository:** BSc.CSIT-2081-3rdSemester-React-JobFinder.git

* **Live URL (if deployed):** https://jobfindervercelcom.vercel.app/~ 

---

## Testing

* Tested responsiveness on mobile, tablet, and desktop  
* Verified API data fetching and pagination  
* Checked localStorage persistence  
* Tested saving and deleting jobs  

---

## Challenges Faced

* Managing state across multiple components  
* Handling API loading and error states  
* Ensuring localStorage synchronization  

---

## Future Enhancements

* Add authentication system (Login/Register)  
* Integrate real job APIs  
* Add job application feature  
* Improve UI with animations  
* Add backend with database  

---

## Acknowledgement

> I would like to thank my instructor for their guidance and support throughout this project.

---

## Declaration

> I hereby declare that this project is my original work and has been completed as part of my academic submission.