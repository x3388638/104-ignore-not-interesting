import Button from './../components/ListingButton'
import {
  isJobIgnored,
  addIgnoredJob,
  IGNORED_JOB_LIST_CHANGE
} from '../storage/ignoredJobs'

const listingPageRegex = /^https:\/\/www\.104\.com\.tw\/jobs\/search/
const jobUrlRegex = /www\.104\.com\.tw\/job\/(\w+)/

// check each job if it should be hidden and append the hide-button
const iterateJobs = (checkAll = false) => {
  const $jobList = document.querySelector('#js-job-content')
  if (!$jobList) {
    return
  }

  ;[...$jobList.querySelectorAll('article')].reverse().every(($job, i) => {
    const { jobName, jobNo, custName, isLast } = $job.dataset
    const jobId = $job
      .querySelector('a.js-job-link')
      .getAttribute('href')
      .match(jobUrlRegex)[1]

    if (isLast && !checkAll) {
      return false
    }

    if (isJobIgnored({ jobName, jobNo, jobId, custName })) {
      hideJob($job)
    } else {
      showJob($job)
      const isButtonExist = !!$job.querySelector('button[class*=svelte]')
      if (!isButtonExist) {
        new Button({
          target: $job.querySelector('.b-block__right'),
          props: {
            onClick: () => ignoreJob({ jobName, jobNo, custName, jobId, $job })
          }
        })
      }
    }

    if (i === 0) {
      $job.dataset.isLast = true
    }

    return true
  })
}

const ignoreJob = ({ jobName, jobNo, jobId, custName }) => {
  addIgnoredJob({ jobName, jobNo, jobId, custName })
}

const hideJob = ($job) => {
  if (!$job.className.endsWith(' hide')) {
    $job.className += ' hide'
  }
}

const showJob = ($job) => {
  if ($job.className.endsWith(' hide')) {
    $job.className = $job.className.split(' hide')[0]
  }
}

const bindEvent = () => {
  // handle infinite scroll & pagination
  const replaceState = window.history.replaceState.bind(window.history)
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

  // re-iterate while storage updated
  window.addEventListener(IGNORED_JOB_LIST_CHANGE, () => {
    iterateJobs(true)
  })
}

const setup = () => {
  if (document.querySelector('#js-job-content')) {
    bindEvent()
    iterateJobs()
  }
}

setup()
