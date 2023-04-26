let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

//appends a complete URL to a string
function functionalURLS(elements) {
    return elements.map(element => "httpes://example.com/" + urlify(element));
}

console.log(functionalURLS (states));

// Daktoas: find Dakats using inlcude method
function dakotaInclude(elements) {
    return elements.filter(element => element.toLowerCase().includes("dakota"));
  }

console.log(dakotaInclude(states));

// Dakotas: find Dakats using reges
function dakotaLength(elements) {
    return elements.filter(element => element.split(/\s+/).length ===2);
  }

  console.log(dakotaLength(states));
