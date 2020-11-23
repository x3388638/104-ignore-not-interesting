import List from '../components/JobList'
import { ignoredJobs, parseIgnoredJobKey } from '../storage/ignoredJobs'

const $target = document.querySelector('.l-content--2col--sub > section')
if ($target) {
  const jobs = { ...ignoredJobs }
  const sortedJobs = Object.entries(jobs)
    .sort((a, b) => a[1] - b[1])
    .map(([key]) => parseIgnoredJobKey(key))
  new List({
    target: $target,
    props: {
      jobList: sortedJobs
    }
  })
}
