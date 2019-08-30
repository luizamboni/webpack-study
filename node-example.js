const ApiClient = require('./dist/node/api-client');


const client = new ApiClient();
client.getObjects().then(resp => {
  console.log(
    JSON.stringify(resp.data, null, 2)
  )
})