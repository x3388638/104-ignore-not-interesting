const assert = require('assert')
const { listingPage, itemPage } = require('./locators')

Feature('Listing page')

Before(({ I }) => {
  I.amOnPage('/')
  I.injectScript()
})

Scenario('Render buttons and ignored job list', ({ I }) => {
  I.see('不感興趣', listingPage.firstButtonInList)
  I.see('已過濾職缺', listingPage.jobList)
})

Scenario('Ignore job', async ({ I }) => {
  I.seeNumberOfElements(listingPage.ignoredJobs, 0)
  const jobName = await I.grabAttributeFrom(
    listingPage.firstJobInlist,
    'data-job-name'
  )
  const custName = await I.grabAttributeFrom(
    listingPage.firstJobInlist,
    'data-cust-name'
  )
  const link = await I.grabAttributeFrom(
    locate(listingPage.firstJobInlist.css).find('.js-job-link'),
    'href'
  )

  I.click(listingPage.firstButtonInList)
  I.dontSeeElement(listingPage.firstJobInlist)
  I.seeNumberOfElements(listingPage.ignoredJobs, 1)
  const ignoredJobName = await I.grabTextFrom(
    locate(listingPage.ignoredJobs.css).first().find('.JobItem__text').at(1)
  )
  const ignoredCustName = await I.grabTextFrom(
    locate(listingPage.ignoredJobs.css).first().find('.JobItem__text').at(2)
  )

  assert.strictEqual(ignoredJobName, jobName)
  assert.strictEqual(ignoredCustName, custName)

  I.amOnPage(link)
  I.injectScript()
  I.seeElement(itemPage['itemButton-ignored'])
})
