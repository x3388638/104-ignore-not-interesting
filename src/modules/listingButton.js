import Button from './../components/ListingButton'
import { isJobIgnored, addIgnoredJob } from '../storage/ignoredJobs'

const listingPageRegex = /^https:\/\/www\.104\.com\.tw\/jobs\/search/
const jobUrlRegex = /www\.104\.com\.tw\/job\/(\w+)/

// check each job if it should be hidden and append the hide-button
const iterateJobs = () => {
  const $jobList = document.querySelector('#js-job-content')
  if (!$jobList) {
    return
  }

  ;[...$jobList.querySelectorAll('article')].reverse().every(($job, i) => {
    const { jobName, jobNo, custName, isLast } = $job.dataset
    if (isLast) {
      return false
    }

    if (isJobIgnored({ jobName, jobNo, custName })) {
      hideJob($job)
    } else {
      new Button({
        target: $job.querySelector('.b-block__right'),
        props: {
          onClick: (jobUrl) =>
            ignoreJob({ jobName, jobNo, custName, jobUrl, $job })
        }
      })
    }

    if (i === 0) {
      $job.dataset.isLast = true
    }

    return true
  })
}

const ignoreJob = ({ jobName, jobNo, custName, jobUrl, $job }) => {
  const jobId = jobUrl.match(jobUrlRegex)[1]
  addIgnoredJob({ jobName, jobNo, jobId, custName })
  hideJob($job)
}

const hideJob = ($job) => {
  $job.className += ' hide'
}

const replaceState = window.history.replaceState
window.history.replaceState = (...args) => {
  window.dispatchEvent(new CustomEvent('urlchange'))
  replaceState(...args)
}

window.addEventListener('urlchange', () => {
  if (listingPageRegex.test(window.location.href)) {
    setTimeout(() => {
      iterateJobs()
    }, 449)
  }
})

iterateJobs()
