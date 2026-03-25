import './JobCard.css';
import { Button } from './Button';
import { useState } from 'react';

export function JobCard({ job, onSave, onDelete, isSaved, isExpanded, onToggleDetails }) {
  const [showDetails, setShowDetails] = useState(false);

  // Truncate title to uniform length
  const truncatedTitle = job.title.length > 50 ? job.title.substring(0, 50) + '...' : job.title;
  const truncatedCompany = job.companyName.length > 30 ? job.companyName.substring(0, 30) + '...' : job.companyName;

  return (
    <div className={`job-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="job-header">
        <div className="logo-wrapper">
          <img src={job.companyLogo} alt={`${job.companyName} logo`} className="company-logo" />
          <div>
            <h3 className="job-title">{truncatedTitle}</h3>
          </div>
        </div>

        {isSaved && <span className="saved-badge">💾 Saved</span>}
      </div>

      {/* Show Details button below title */}
      <div className="show-details-container">
        <button onClick={() => onToggleDetails(job.id)} className="show-details-link">
          {isExpanded ? 'Hide Details' : 'Show Details'}
        </button>
      </div>

      {/* Details shown on click */}
      {isExpanded && (
        <div className="job-details">
          <p className="company-name">{truncatedCompany}</p>
          <p className="job-excerpt">{job.description ? `${job.description.substring(0, 140)}...` : job.excerpt}</p>

          <div className="job-meta">
            <span className="location">📍 {job.locationRestrictions?.join(', ') || 'Global'}</span>
            <span className="type">🕒 {job.employmentType}</span>
          </div>

          <div className="job-meta">
            <span className="seniority">🎯 {job.seniority?.join(', ') || 'N/A'}</span>
            <span className="categories">🏷️ {job.categories?.join(', ')}</span>
          </div>

          <div className="job-meta">
            <span className="salary">💵 {job.currency} {job.minSalary ? job.minSalary.toLocaleString() : 'N/A'} - {job.currency} {job.maxSalary ? job.maxSalary.toLocaleString() : 'N/A'}</span>
            <span className="published">📅 {job.pubDate ? new Date(job.pubDate * 1000).toLocaleDateString() : 'Unknown'}</span>
          </div>
        </div>
      )}

      {/* Always visible elements at bottom */}
      <div className="job-always-visible">
        <div className="job-actions">
          <div className="action-row">
            {job.applicationLink && (
              <a href={job.applicationLink} target="_blank" rel="noopener noreferrer" className="apply-link">
                Apply Now
              </a>
            )}

            {!isSaved ? (
              <Button onClick={() => onSave(job)} variant="success">
                Save Job
              </Button>
            ) : (
              <Button onClick={() => onDelete(job.id || job.guid)} variant="danger">
                Delete
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
