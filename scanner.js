const scanner = require("sonarqube-scanner");
scanner({
serverUrl : 'http://192.168.1.102:9000/',
token : "40a380b4245bc8708d0c9c226ecc499c43cae983",
options: {
"sonar.projectKey": "sonarqube-practice",
"sonar.sources": "/home/neosoft/sonarqube-practice"
},
},
() => {
// callback is required
}
);
