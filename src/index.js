import Button from './components/Button'
import { ignoredJobs, isJobIgnored, getIgnoredJobKey } from './lib/storage'

// let checkedJobCount = 0
const $jobList = document.querySelector('#js-job-content')

// check each job if it should be hidden and append the hide-button
const iterateJobs = (startIndex = 0) => {
  ;[...$jobList.querySelectorAll('article')]
    .slice(startIndex)
    .forEach(($job) => {
      // checkedJobCount = startIndex + i + 1
      const { jobName, jobNo, custName } = $job.dataset
      if (isJobIgnored({ jobName, jobNo, custName })) {
        hideJob($job)
      } else {
        new Button({
          target: $job.querySelector('.b-block__right'),
          props: {
            onClick: () => ignoreJob({ jobName, jobNo, custName, $job })
          }
        })
      }
    })
}

const ignoreJob = ({ jobName, jobNo, custName, $job }) => {
  ignoredJobs[getIgnoredJobKey({ jobName, jobNo, custName })] = 1
  hideJob($job)
}

const hideJob = ($job) => {
  $job.className += ' hide'
}

// start
iterateJobs()
