const IGNORED_JOBS = '@104IgnoreNotInteresting:ignoredJobs'
const separator = '\u200b'

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

/**
 * Add a job to ignored list
 * @param {Object} jobInfo
 * @param {String} jobInfo.jobName
 * @param {String} jobInfo.jobNo
 * @param {String} jobInfo.jobId
 * @param {String} jobInfo.custName
 */
export const addIgnoredJob = ({ jobName, jobNo, jobId, custName }) => {
  ignoredJobs[
    getIgnoredJobKey({ jobName, jobNo, jobId, custName })
  ] = Date.now()
}

/**
 * Add a ignored job from list
 * @param {Object} jobInfo
 * @param {String} jobInfo.jobName
 * @param {String} jobInfo.jobNo
 * @param {String} jobInfo.jobId
 * @param {String} jobInfo.custName
 */
export const removeIgnoredJob = ({ jobName, jobNo, jobId, custName }) => {
  delete ignoredJobs[getIgnoredJobKey({ jobName, jobNo, jobId, custName })]
}

export const isJobIgnored = (jobInfo) => {
  return !!ignoredJobs[getIgnoredJobKey(jobInfo)]
}

export const getIgnoredJobKey = ({ jobName, jobNo, jobId, custName }) => {
  return [jobName, jobNo, jobId, custName].join(separator)
}
