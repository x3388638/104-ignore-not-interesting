import Button from '../components/ItemButton'
import {
  isJobIgnored,
  addIgnoredJob,
  removeIgnoredJob,
  IGNORED_JOB_LIST_CHANGE
} from '../storage/ignoredJobs'

const getJobInfo = ($job) => {
  const jobId = window.location.href.match(/www\.104\.com\.tw\/job\/(\w+)/)[1]
  const jobName = $job
    .querySelector('.job-header__title h1')
    .getAttribute('title')
  const jobNo = $job.querySelector('form.apply-button').elements.cookie_names
    .value
  const custName = $job
    .querySelector('.job-header__title > div > a[data-gtm-head="公司名稱"]')
    .getAttribute('title')

  return {
    jobId,
    jobName,
    jobNo,
    custName
  }
}

const setup = () => {
  const $target = document.querySelector('.job-header__btn')
  if (!$target) {
    return
  }

  const $job = document.querySelector('.job-header__cont')
  const { jobId, jobName, jobNo, custName } = getJobInfo($job)
  let isIgnored = isJobIgnored({ jobName, jobNo, jobId, custName })

  const Btn = new Button({
    target: $target,
    props: {
      isIgnored,
      onClick: () => toggleIgnoreJob()
    }
  })

  const toggleIgnoreJob = () => {
    if (isIgnored) {
      removeIgnoredJob({ jobName, jobNo, jobId, custName })
    } else {
      addIgnoredJob({ jobName, jobNo, jobId, custName })
    }
  }

  window.addEventListener(IGNORED_JOB_LIST_CHANGE, () => {
    isIgnored = isJobIgnored({ jobName, jobNo, jobId, custName })
    Btn.$set({ isIgnored })
  })
}

// item page is CSR
setTimeout(setup, 449)
