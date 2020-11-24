const IGNORED_JOBS = '@104IgnoreNotInteresting:ignoredJobs'
const separator = '\u200b'
export const IGNORED_JOB_LIST_CHANGE = 'IGNORED_JOB_LIST_CHANGE'

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

const createIgnoredJobsProxy = (initialData = {}) => {
  return new Proxy(initialData, {
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
}

let ignoredJobs = createIgnoredJobsProxy(JSON.parse(localStorage[IGNORED_JOBS]))

export const getIgnoredJobs = () => ({ ...ignoredJobs })

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
  dispatchChangeEvent()
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
  dispatchChangeEvent()
}

/**
 * Return if job is ignored
 * @param {Object} jobInfo
 * @param {String} jobInfo.jobName
 * @param {String} jobInfo.jobNo
 * @param {String} jobInfo.jobId
 * @param {String} jobInfo.custName
 * @returns {Boolean}
 */
export const isJobIgnored = (jobInfo) => {
  return !!ignoredJobs[getIgnoredJobKey(jobInfo)]
}

/**
 * Gen object key for each job to access in ignored job object
 * @param {Object} jobInfo
 * @param {String} jobInfo.jobName
 * @param {String} jobInfo.jobNo
 * @param {String} jobInfo.jobId
 * @param {String} jobInfo.custName
 * @returns {String}
 */
export const getIgnoredJobKey = ({ jobName, jobNo, jobId, custName }) => {
  return [jobName, jobNo, jobId, custName].join(separator)
}

export const parseIgnoredJobKey = (key) => {
  const [jobName, jobNo, jobId, custName] = key.split(separator)
  return { jobName, jobNo, jobId, custName }
}

const dispatchChangeEvent = () => {
  window.dispatchEvent(
    new CustomEvent(IGNORED_JOB_LIST_CHANGE, {
      detail: { ...ignoredJobs }
    })
  )
}

// localStorage changed in other tab
window.addEventListener('storage', ({ key, newValue }) => {
  if (key === IGNORED_JOBS) {
    try {
      const newObj = JSON.parse(newValue)
      ignoredJobs = createIgnoredJobsProxy(newObj)
      dispatchChangeEvent()
    } catch {
      // no-op
    }
  }
})
