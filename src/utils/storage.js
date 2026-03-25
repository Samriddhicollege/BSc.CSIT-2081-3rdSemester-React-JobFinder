const SAVED_JOBS_KEY = 'savedJobs';

export const getSavedJobs = () => {
  try {
    const savedJobs = localStorage.getItem(SAVED_JOBS_KEY);
    const jobs = savedJobs ? JSON.parse(savedJobs) : [];
    // Ensure all jobs have IDs for backward compatibility
    return jobs.map(job => ({
      ...job,
      id: job.id || job.guid
    }));
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
};

export const saveJob = (job) => {
  try {
    const savedJobs = getSavedJobs();
    const jobId = job.id || job.guid; // Use id if available, otherwise use guid
    if (!savedJobs.find(j => (j.id || j.guid) === jobId)) {
      const jobToSave = { ...job, id: jobId }; // Ensure the job has an id
      savedJobs.push(jobToSave);
      localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(savedJobs));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

export const deleteJob = (jobId) => {
  try {
    const savedJobs = getSavedJobs();
    const filtered = savedJobs.filter(job => (job.id || job.guid) !== jobId);
    localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Error deleting from localStorage:', error);
    return false;
  }
};

export const isJobSaved = (jobId) => {
  const savedJobs = getSavedJobs();
  return savedJobs.some(job => (job.id || job.guid) === jobId);
};
