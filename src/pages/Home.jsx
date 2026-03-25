import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { JobCard } from '../components/JobCard';
import { Loader } from '../components/Loader';
import { Button } from '../components/Button';
import { fetchJobs } from '../utils/api';
import {
  saveJob,
  getSavedJobs,
  deleteJob,
  isJobSaved
} from '../utils/storage';

import './Pages.css';

export function Home({ setIsLoggedIn }) {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedJobId, setExpandedJobId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    loadJobs(1);
    setSavedJobs(getSavedJobs());
  }, []);

  const loadJobs = async (page) => {
    setIsLoading(true);
    setError(null);

    const result = await fetchJobs(page);

    if (result.status === 'success') {
      setJobs(result.data);
    } else {
      setError('Failed to load jobs. Please try again later.');
    }

    setIsLoading(false);
  };

  const handleSaveJob = (job) => {
    const success = saveJob(job);
    if (success) {
      setSavedJobs(getSavedJobs());
    }
  };

  const handleDeleteJob = (jobId) => {
    if (confirm('Are you sure you want to delete this job?')) {
      deleteJob(jobId);
      setSavedJobs(getSavedJobs());
    }
  };

  const handleToggleDetails = (jobId) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Job Finder</h1>
        <p>Discover and save your next opportunity</p>
      </div>

      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}

      {isLoading ? (
        <Loader />
      ) : jobs.length === 0 && !error ? (
        <div className="no-jobs">
          <p>No jobs found. Try loading more jobs.</p>
          <Button
            onClick={() => {
              setCurrentPage(1);
              loadJobs(1);
            }}
            variant="primary"
          >
            Load Jobs
          </Button>
        </div>
      ) : (
        <>
          <div className={`jobs-list ${expandedJobId ? 'has-expanded' : ''}`}>
            {jobs
              .filter(job => expandedJobId === null || (job.id || job.guid) === expandedJobId)
              .map((job) => (
                <JobCard
                  key={job.id || job.guid}
                  job={job}
                  onSave={handleSaveJob}
                  onDelete={handleDeleteJob}
                  isSaved={isJobSaved(job.id || job.guid)}
                  isExpanded={(job.id || job.guid) === expandedJobId}
                  onToggleDetails={handleToggleDetails}
                />
              ))}
          </div>

          <div className="pagination-controls">
            <Button
              onClick={() => {
                const newPage = Math.max(1, currentPage - 1);
                setCurrentPage(newPage);
                loadJobs(newPage);
              }}
              disabled={currentPage === 1}
              variant="secondary"
            >
              Previous
            </Button>

            <span className="page-number">
              Page {currentPage}
            </span>

            <Button
              onClick={() => {
                const newPage = currentPage + 1;
                setCurrentPage(newPage);
                loadJobs(newPage);
              }}
              variant="secondary"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
