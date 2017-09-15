const pyroclast = require('pyroclast');

var topicClient = new pyroclast.PyroclastTopicClient({
    writeApiKey: "f2d3beef-825d-45bb-bb8e-bc2059c313cc",
    topicId: "topic-ad78c664-1bf7-45d4-8ed5-39581b5b5796",
    region: "us-west-2",
    format: "json"
});

var cb = function(result) {
  console.log(result);
}

// Send a single event.
topicClient
    .sendEvent({value: {type: "page-visit", page: "/home", timestamp: 1495072835000}})
    .catch((error) => {
	    console.log(error);
        // ...
    }).then((result) => {
	    console.log(result);
        // ...
    });

// // Send a batch of events.
// topicClient
//     .sendEvents([
//         {type: "page-visit", page: "/home", timestamp: 1495072835000},
//         {type: "page-visit", page: "/home", timestamp: 1495072836000},
//         {type: "page-visit", page: "/home", timestamp: 1495072837000}
//     ])
//     .then((results) => {
// 	    console.log(results);
//         // ...
//     });



var client = new pyroclast.PyroclastTopicClient({
    readApiKey: "919637cd-844e-4a07-8190-eb759d9988bf",
    topicId: "topic-ad78c664-1bf7-45d4-8ed5-39581b5b5796",
    region: "us-west-2"
});

const subscriptionName = "my-example-subscription";

client
    .subscribe(subscriptionName)
    .then((result) => { });

client
    .poll("my-example-subscription")
    .then((result) => { console.log(result); });

client
    .commit("my-example-subscription")
    .then((result) => {  });

var depClient = new pyroclast.PyroclastDeploymentClient({
    readApiKey: "2e6f8d4a-f0ba-45ed-a71e-92ff13e6ed94",
    deploymentId: "59baec87-f7ff-44ac-83d4-2ec88943628e",
    region: "us-west-2"
});

depClient
    .readAggregates()
	.catch((error) => {
	    console.log(error);
        // ...
    })
    .then((result) => { console.log(result); });
