exports.config = {
  tests: './__e2e__/*.test.js',
  output: './__e2e__/output',
  helpers: {
    Puppeteer: {
      url: 'https://www.104.com.tw/jobs/search/',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: '104-ignore-not-interesting',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
