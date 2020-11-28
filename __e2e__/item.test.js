const { listingPage, itemPage } = require('./locators')

Feature('Item page')

Before(({ I }) => {
  I.amOnPage('/')
  I.injectScript()
  I.seeNumberOfElements(listingPage.ignoredJobs, 0)
  I.click(locate(listingPage.firstJobInlist).find('a.js-job-link'))
  I.switchToNextTab()
  I.injectScript()
})

Scenario('Render button', ({ I }) => {
  I.seeElement(itemPage.itemButton)
})

Scenario('Ignore job', ({ I }) => {
  I.click(itemPage.itemButton)
  I.seeElement(itemPage['itemButton-ignored'])
  I.switchToNextTab(-1)
  I.seeNumberOfElements(listingPage.ignoredJobs, 1)
})
