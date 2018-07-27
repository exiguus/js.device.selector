# CasperJS
[CasperJS](http://casperjs.org/) testing with [PhantomJS](http://phantomjs.org/)

## Run test
Running the test from project root:

```
node_modules/casperjs/bin/casperjs test ./tests/casper/init.js --path=/src/index.jquery.test.html
```

## Integration test
![test-integration][test-integration]

[~40 User-Agent Strings](https://github.com/exiguus/js.device.detector/blob/master/tests/casper/browser.config.js) against the [device.detector](https://github.com/exiguus/js.device.detector/tree/master/dist) to make sure different User-Agent Strings are correctly matched.


[test-integration]: https://exiguus.github.io/js.device.detector/static/device.detector.test.casperjs.gif
