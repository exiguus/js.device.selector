/* globals
  casper
  phantom
  printTestInfo
  getTestCaptureName
*/

/* eslint-disable no-var, no-invalid-this */
var config = {
  'count': 22,
  'url': {
    'origin': 'http://localhost:7357',
    'path': '/src/index.jquery.html',
  },
  'path': 'tests/casper/',
  'title': 'Test Device Selector',
  'viewport': {
    'width': 360,
    'height': 480,
  },
  'breakpoints': {
    'largedesktop': {
      'width': 1600,
    },
    'desktop': {
      'width': 1200,
    },
    'tablet': {
      'width': 960,
    },
    'mobile': {
      'width': 768,
    },
  },
  'capture': {
    'enable': false,
    'wait': 50,
    'path': 'tests/screenshots/',
    'fileEnding': '.png',
  },
  'debug': false,
};
// inject helper
phantom.injectJs(config.path + 'casper.helper.js');
// cli
if (casper.cli.options.path !== undefined) {
  config.url.path = casper.cli.options.path;
}

if (casper.cli.options.origin !== undefined) {
  config.url.origin = casper.cli.options.origin;
}

if (casper.cli.options.capture !== undefined) {
  config.capture.enable = true;
}
// tests
printTestInfo(
  'Run ' + config.title + ' tests:'
);

Object.keys(config.breakpoints).forEach(function(key) {
  // begin test
  casper.test.begin(
    config.title,
    2,
    function suite(test) {
      printTestInfo(
        'Url:       ' + config.url.origin + config.url.path
      );
      printTestInfo(
        'Breakpoint: ' + key
      );
      // start test
      casper.start(config.url.origin, function() {
        this.viewport(
          config.breakpoints[key].width || config.viewport.width,
          config.breakpoints[key].height || config.viewport.height
        );
      });
      // open path
      casper.thenOpen(config.url.origin + config.url.path, function() {
        if (config.debug === true) console.info(this.getCurrentUrl()); // eslint-disable-line no-console, max-len
        // casper.evaluate(function() {
        //   // make screen retina
        //   document.body.style.webkitTransform = 'scale(2)';
        //   document.body.style.webkitTransformOrigin = '0% 0%';
        //   document.body.style.width = '50%';
        // });
        if (config.capture.enable === true) {
          casper.evaluate(function() {
            // phantomjs do not really support svg,
            // so we hide it with body.capture svg ...
            document.body.classList.add('capture');
          });
        }
      });
      // check elements

      casper.then(function() {
        var element = '#deviceType';
        var content =
          this.getHTML(element).replace(/-/g, '');
        if (config.debug === true) {
          console.info( // eslint-disable-line no-console
            key,
            element,
            config.breakpoints[key].width || config.viewport.width,
            config.breakpoints[key].height || config.viewport.height
          );
        }
        printTestInfo(
          'Content: ' + content
        );
        // check element exist
        test.assertExists(element, element + ' element exist');
        // check element equal
        test.assertEquals(
          (content === key),
          true,
          element + ' content is equal ' + key
        );
      });

      // capture test
      if (config.capture.enable === true) {
        casper.then(function() {
          this.wait(
            config.capture.wait,
            function() {
              this.capture(
                getTestCaptureName(key),
                {
                  top: 0,
                  left: 0,
                  width: config.breakpoints[key].width ||
                    config.viewport.width,
                  height: config.breakpoints[key].height ||
                    config.viewport.height,
                }
              );
            }
          );
        });
      }
      // end test
      casper.run(function() {
        test.done();
      });
    }
  );
});
