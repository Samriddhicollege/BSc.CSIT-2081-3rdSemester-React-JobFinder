import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { JobCard } from '../components/JobCard';
import { Button } from '../components/Button';
import { getSavedJobs, deleteJob } from '../utils/storage';
import './Pages.css';

export function SavedJobs({ setIsLoggedIn }) {
  const [savedJobs, setSavedJobs] = useState([]);
  const [expandedJobId, setExpandedJobId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadSavedJobs();
  }, []);

  const loadSavedJobs = () => {
    setSavedJobs(getSavedJobs());
  };

  const handleDeleteJob = (jobId) => {
    if (confirm('Are you sure you want to delete this saved job?')) {
      deleteJob(jobId);
      loadSavedJobs();
    }
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to delete all saved jobs?')) {
      localStorage.removeItem('savedJobs');
      setSavedJobs([]);
      setExpandedJobId(null);
    }
  };

  const handleToggleDetails = (jobId) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>💾 Saved Jobs</h1>
        <p>Your collection of saved job opportunities</p>
        <Button onClick={handleLogout} variant="secondary">
          Logout
        </Button>
      </div>

      {savedJobs.length === 0 ? (
        <div className="no-jobs">
          <p>No saved jobs yet. Go back and save some jobs!</p>
          <p style={{ fontSize: '14px', color: '#999' }}>
            Click the "Save Job" button on any job listing to add it to your collection.
          </p>
        </div>
      ) : (
        <>
          <div className="saved-jobs-header">
            <p className="saved-count">
              Total Saved: <strong>{savedJobs.length}</strong> jobs
            </p>
            <Button onClick={handleClearAll} variant="danger">
              Clear All
            </Button>
          </div>

          <div className={`jobs-list ${expandedJobId ? 'has-expanded' : ''}`}>
            {savedJobs
              .filter(job => expandedJobId === null || (job.id || job.guid) === expandedJobId)
              .map(job => (
                <JobCard
                  key={job.id || job.guid}
                  job={job}
                  onDelete={handleDeleteJob}
                  isSaved={true}
                  isExpanded={(job.id || job.guid) === expandedJobId}
                  onToggleDetails={handleToggleDetails}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
}
