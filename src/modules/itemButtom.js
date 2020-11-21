import Button from '../components/ItemButton'
import { ignoredJobs, isJobIgnored, getIgnoredJobKey } from '../lib/storage'

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
    isIgnored = !isIgnored
    Btn.$$set({ isIgnored })
    if (isIgnored) {
      ignoredJobs[
        getIgnoredJobKey({ jobName, jobNo, custName })
      ] = window.location.href.match(/www\.104\.com\.tw\/job\/(\w+)/)[1]
    } else {
      delete ignoredJobs[getIgnoredJobKey({ jobName, jobNo, custName })]
    }
  }
}
