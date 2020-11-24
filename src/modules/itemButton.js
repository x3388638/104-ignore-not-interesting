import Button from '../components/ItemButton'
import {
  isJobIgnored,
  addIgnoredJob,
  removeIgnoredJob
} from '../storage/ignoredJobs'

const setup = () => {
  const $target = document.querySelector('.job-header__btn')
  if ($target) {
    const $job = document.querySelector('.job-header__cont')
    const jobId = window.location.href.match(/www\.104\.com\.tw\/job\/(\w+)/)[1]
    const jobName = $job
      .querySelector('.job-header__title h1')
      .getAttribute('title')
    const jobNo = $job.querySelector('form.apply-button').elements.cookie_names
      .value
    const custName = $job
      .querySelector('.job-header__title > div > a[data-gtm-head="公司名稱"]')
      .getAttribute('title')
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

    window.addEventListener('ignoredJobListChange', () => {
      isIgnored = isJobIgnored({ jobName, jobNo, jobId, custName })
      Btn.$$set({ isIgnored })
    })
  }
}

// item page is CSR
setTimeout(setup, 449)
