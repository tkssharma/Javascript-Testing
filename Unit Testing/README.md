# Mocha Chai Istanbul NYC

If you think writing test cases will slow down your development process, then you may or may not be right. You are right when you are implementing a one page application or a simple prototype project; also, you may be wrong in these cases because testing is simple and saves your time. Really!!!!!!!!

For sure, the time for testing a simple page will force you to retype the inputs ten times or hundreds to find the bug and fix it. Dear developer your time is constant to you and your boss. Just write your input data once and you can run your Node several times to uncover the hidden bugs and kill them easily.

To uncover the bugs, you need a simple success case and a code coverage report. Then, write some tests to assure the branches of your code are covered.

### Mocha

Mocha is a JavaScript test framework running on Node.js and in the browser, to run the testing scripts written in JS. Mocha tests run test cases serially for flexibility and to make testing report more accurate. Hence, Mocha is just a test runner and does not include assertion. Chai is aTest-driven development “TDD” assertion library for Node and the browser that can be delightfully paired with any JavaScript testing framework. The Chai expect style is like expect API in Jasmine to make life easier to who know Jasmine.

### Istanbul

Istanbul is a JavaScript tool to generate the coverage report. It is another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. You do not need to write any code to run the coverage report. You just need the command line to generate an HTML report for all your JS code and you can include or exclude whatever in the package.json file easily. NYC is the Istanbul command line interface.


#installation

```
sudo npm i -g mocha istanbul nyc --save-dev
npm i mocha chai chai-http express body-parser --save-dev
```

#add test, nyc elements to package.json

```
 "scripts": {
    "start": "node server.js",
    "test": "mocha ./test/test.js --timeout 10000 --exit",
    "_comment": "Note: --exit in the test element is to force the test program to exit after finishing in case we use done()",
    "coverage": "nyc --reporter=lcov --reporter=text-lcov npm test"
},
  "nyc": {
    "_comment": "Purpose of this part: to do code coverage within Mocha/Chai using Istanbul",
    "register": "babel-register",
    "include": [
      "**/*.js",
      "./*.js"
    ],
    "exclude": [
      "**/node_modules/**",
      "**/test/**",
      "**/coverage/**"
    ],
    "all": true
  },
 ``` 
 
### run a test case

```
npm test
```
  
  
###  run a test case with Istanbul code coverage
```
npm run coverage
```

### view the report:
```
nyc report
```

### view the report:
```
coverage/lcov-report/index.html
```

  
