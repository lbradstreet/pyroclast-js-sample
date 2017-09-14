const pyroclast = require('pyroclast');

var topicClient = new pyroclast.PyroclastTopicClient({
    writeApiKey: "f2d3beef-825d-45bb-bb8e-bc2059c313cc",
    topicId: "topic-ad78c664-1bf7-45d4-8ed5-39581b5b5796",
    endpoint: "https://api.us-west-2.pyroclast.io",
    format: "json"
});

var cb = function(result) {
  console.log(result);
}

// Send a single event.
topicClient
    .sendEvent({type: "page-visit", page: "/home", timestamp: 1495072835000})
    .then((result) => {
	    console.log(result);
        // ...
    });

// Send a batch of events.
topicClient
    .sendEvents([
        {type: "page-visit", page: "/home", timestamp: 1495072835000},
        {type: "page-visit", page: "/home", timestamp: 1495072836000},
        {type: "page-visit", page: "/home", timestamp: 1495072837000}
    ])
    .then((results) => {
	    console.log(results);
        // ...
    });

