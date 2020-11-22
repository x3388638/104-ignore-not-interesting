import Button from '../components/ItemButton'
import {
  isJobIgnored,
  addIgnoredJob,
  removeIgnoredJob
} from '../storage/ignoredJobs'

const $target = document.querySelector('.job-header__btn')
if ($target) {
  const $job = document.querySelector('.job-header__cont')
  const jobName = $job
    .querySelector('.job-header__title h1')
    .getAttribute('title')
  const jobNo = $job.querySelector('form.apply-button').elements.cookie_names
    .value
  const custName = $job
    .querySelector('.job-header__title > div > a[data-gtm-head="公司名稱"]')
    .getAttribute('title')
  let isIgnored = isJobIgnored({ jobName, jobNo, custName })

  const Btn = new Button({
    target: $target,
    props: {
      isIgnored,
      onClick: () => toggleIgnoreJob()
    }
  })

  const toggleIgnoreJob = () => {
    const jobId = window.location.href.match(/www\.104\.com\.tw\/job\/(\w+)/)[1]
    isIgnored = !isIgnored
    Btn.$$set({ isIgnored })
    if (isIgnored) {
      addIgnoredJob({ jobName, jobNo, jobId, custName })
    } else {
      removeIgnoredJob({ jobName, jobNo, jobId, custName })
    }
  }
}
