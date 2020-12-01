import List from '../components/JobList'
import {
  getIgnoredJobs,
  parseIgnoredJobKey,
  removeIgnoredJob,
  IGNORED_JOB_LIST_CHANGE
} from '../storage/ignoredJobs'

const sortJobsByTimestamp = (jobs) => {
  return Object.entries(jobs)
    .sort((a, b) => a[1] - b[1])
    .map(([key]) => parseIgnoredJobKey(key))
}

const setup = () => {
  const $target = document.querySelector('.l-content--2col--sub > section')
  if (!$target) {
    return
  }

  const jobs = getIgnoredJobs()
  const sortedJobs = sortJobsByTimestamp(jobs)
  const IgnoredJobList = new List({
    target: $target,
    props: {
      jobList: sortedJobs,
      onRemove: ({ jobName, jobNo, jobId, custName }) =>
        removeIgnoredJob({ jobName, jobNo, jobId, custName })
    }
  })

  window.addEventListener(IGNORED_JOB_LIST_CHANGE, ({ detail }) => {
    IgnoredJobList.$set({ jobList: sortJobsByTimestamp(detail) })
  })
}

setup()
