import List from '../components/JobList'
import {
  getIgnoredJobs,
  parseIgnoredJobKey,
  removeIgnoredJob
} from '../storage/ignoredJobs'

const $target = document.querySelector('.l-content--2col--sub > section')
const sortJobsByTimestamp = (jobs) => {
  return Object.entries(jobs)
    .sort((a, b) => a[1] - b[1])
    .map(([key]) => parseIgnoredJobKey(key))
}

if ($target) {
  const jobs = getIgnoredJobs()
  const sortedJobs = sortJobsByTimestamp(jobs)
  const IgnoredJobList = new List({
    target: $target,
    props: {
      jobList: sortedJobs,
      onRemove: ({ jobName, jobNo, jobId, custName }) => {
        removeIgnoredJob({ jobName, jobNo, jobId, custName })
      }
    }
  })

  window.addEventListener('ignoredJobListChange', ({ detail }) => {
    IgnoredJobList.$$set({ jobList: sortJobsByTimestamp(detail) })
  })
}
