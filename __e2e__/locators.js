const listingPage = {
  firstJobInlist: {
    css: '#js-job-content article:first-child'
  },
  firstButtonInList: {
    css: '#js-job-content article:first-child  .b-block__right .ListingButton'
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
    css: '.job-header .job-header__btn .ItemButton'
  },
  'itemButton-ignored': {
    css: '.job-header .job-header__btn .ItemButton.btn-secondary'
  }
}

module.exports = {
  listingPage,
  itemPage
}
