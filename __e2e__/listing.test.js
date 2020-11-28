const assert = require('assert')

Feature('Listing page')

const locators = {
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
  },
  itemButton: {
    css: '.job-header .job-header__btn button[class*=svelte]'
  },
  'itemButton-ignored': {
    css: '.job-header .job-header__btn button[class*=svelte].btn-secondary'
  }
}

Before(({ I }) => {
  I.amOnPage('/')
  I.injectScript()
})

Scenario('Render buttons and ignored job list', ({ I }) => {
  I.see('不感興趣', locators.firstButtonInList)
  I.see('已過濾職缺', locators.jobList)
})

Scenario('Ignore job', async ({ I }) => {
  I.seeElement(locators.firstJobInlist)
  I.seeNumberOfElements(locators.ignoredJobs, 0)
  const jobName = await I.grabAttributeFrom(
    locators.firstJobInlist,
    'data-job-name'
  )
  const custName = await I.grabAttributeFrom(
    locators.firstJobInlist,
    'data-cust-name'
  )
  const link = await I.grabAttributeFrom(
    locate(locators.firstJobInlist.css).find('.js-job-link'),
    'href'
  )

  I.click(locators.firstButtonInList)
  I.dontSeeElement(locators.firstJobInlist)
  I.seeNumberOfElements(locators.ignoredJobs, 1)
  const ignoredJobName = await I.grabTextFrom(
    locate(locators.ignoredJobs.css).first().find('.JobItem__text').at(1)
  )
  const ignoredCustName = await I.grabTextFrom(
    locate(locators.ignoredJobs.css).first().find('.JobItem__text').at(2)
  )

  assert.strictEqual(ignoredJobName, jobName)
  assert.strictEqual(ignoredCustName, custName)

  I.amOnPage(link)
  I.wait(5)
  I.injectScript()
  I.seeElement(locators['itemButton-ignored'])
})
