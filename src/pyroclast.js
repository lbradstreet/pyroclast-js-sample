const pyroclast = require('pyroclast');

var client = new pyroclast.PyroclastDeploymentClient({
    readApiKey: "6101895b-6d18-40fa-b58c-b5eda438caf7",
    region: "us-west-2",
    deploymentId: "59bad48b-d466-499c-bd9b-12a441a8c8bd"
});

client
    .readAggregates()
    .then((result) => { console.log(result); });
