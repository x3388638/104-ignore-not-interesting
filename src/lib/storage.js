const IGNORED_JOBS = '@104IgnoreNotInteresting:ignoredJobs'

// init localStorage
const { localStorage } = window
localStorage[IGNORED_JOBS] = localStorage[IGNORED_JOBS] || '{}'

try {
  JSON.parse(localStorage[IGNORED_JOBS])
} catch {
  // stored data is invalid JSON, reset it
  localStorage[IGNORED_JOBS] = '{}'
}

const setStorage = (obj) => {
  localStorage[IGNORED_JOBS] = JSON.stringify(obj)
}

export const ignoredJobs = new Proxy(JSON.parse(localStorage[IGNORED_JOBS]), {
  set: (target, prop, val) => {
    target[prop] = val
    setStorage(target)
    return true
  },
  deleteProperty: (target, prop) => {
    delete target[prop]
    setStorage(target)
    return true
  }
})

export const isJobIgnored = (jobInfo) => {
  return !!ignoredJobs[getIgnoredJobKey(jobInfo)]
}

export const getIgnoredJobKey = ({ jobName, jobNo, custName }) => {
  return `${jobNo}-${custName}-${jobName}`
}
