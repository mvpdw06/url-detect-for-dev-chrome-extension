// let envData;

const loadSettings = () => {
  console.log('json', chrome.runtime.getURL('env.json'))
  fetch(chrome.runtime.getURL('env.json'))
  .then(response => response.json())
  .then(data => {
    envData = data.properties
    console.log('data', data.properties)
    detectUrl(data.properties);
  })
}

const detectUrl = (envData) => {
  console.log('envData', envData.production.urls)
  var currentUrl = window.location.host;
  if (envData.production.urls.indexOf(currentUrl) !== -1) {
    action('production')
  }
  else if(envData.test.urls.indexOf(currentUrl) !== -1) {
    action('test')
  }
  else if(envData.dev.urls.indexOf(currentUrl) !== -1) {
    action('dev')
  }
}

const action = (env) => {
  alert(`this is ${env}.`)
  console.log(`this is ${env}.`)
}

loadSettings();
// detectUrl();