const listingPage = {
  firstJobInlist: {
    css: '#js-job-content article:first-child'
  },
  firstButtonInList: {
    css:
      '#js-job-content article:first-child  .b-block__right button[class*=svelte]'
  },
  jobList: {
    css: '#main-content > aside .JobList'
  },
  ignoredJobs: {
    css: '#main-content > aside .JobList li.JobItem'
  }
}

const itemPage = {
  itemButton: {
    css: '.job-header .job-header__btn button[class*=svelte]'
  },
  'itemButton-ignored': {
    css: '.job-header .job-header__btn button[class*=svelte].btn-secondary'
  }
}

module.exports = {
  listingPage,
  itemPage
}
