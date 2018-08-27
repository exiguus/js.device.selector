[![tests][tests]][tests-url]
[![coverage][coverage]][coverage-url]
[![maintainability][maintainability]][maintainability-url]

# js.device.selector
ES6 class and jQuery Plugin which get the current Device Type and Display Type of a Browser while making CSS Breakpoints available in JavaScript.

This solution make it possible to define your breakpoints only once (in CSS) and pass them automatically into JavaScript.

## npm
[![npm][npm]][npm-url]
```
npm install --save js.device.selector
```

## Example

### jQuery plugin

Style for hidden Markup that make CSS Breakpoints available in JavaScript via Media-Queries and visibility.

```html
<style>

  [data-device-selector-item] {
    display: none;
  }
  @media
  only screen and (max-width: 768px) {
    [data-device-selector-devicetype="mobile"] {
      display: block !important;
    }
  }
  @media
  only screen and (min-width: 769px) and (max-width: 960px) {
    [data-device-selector-devicetype="tablet"] {
      display: block !important;
    }
  }
  @media
  only screen and (min-width: 961px) and (max-width: 1200px) {
    [data-device-selector-devicetype="desktop"] {
      display: block !important;
    }
  }
  @media
  only screen and (min-width: 1201px) {
    [data-device-selector-devicetype="large-desktop"] {
      display: block !important;
    }
  }
  @media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (   min--moz-device-pixel-ratio: 2),
  only screen and (     -o-min-device-pixel-ratio: 2/1),
  only screen and (        min-device-pixel-ratio: 2),
  only screen and (                min-resolution: 192dpi),
  only screen and (                min-resolution: 2dppx) {
    [data-device-selector-displaytype="retina"] {
      display: block !important;
    }
  }
</style>
```

 Markup which make the visibility of Breakpoints available in JavaScript. The Markup should be added right before the closing body tag.

```html
<div data-device-selector>
  <div data-device-selector-item data-device-selector-devicetype="mobile"></div>
  <div data-device-selector-item data-device-selector-devicetype="tablet"></div>
  <div data-device-selector-item data-device-selector-devicetype="desktop"></div>
  <div data-device-selector-item data-device-selector-devicetype="large-desktop"></div>
  <div data-device-selector-item data-device-selector-displaytype="retina"></div>
</div>
```

Initialise the jQuery Plugin and sample usage.
```html
<script src="../node_modules/jquery/dist/jquery.min.js"></script>
<script src="../node_modules/js.device.selector/jquery.device.selector.min.js"></script>
<script>
  $.fn.deviceSelector();
  console.log($.fn.deviceSelector.getDeviceType()); // return mobile || tablet || desktop || large-desktop
  $('#deviceType').text($.fn.deviceSelector.getDeviceType());
  $('#displayType').text($.fn.deviceSelector.getDisplayType());
</script>
```

### jQuery Plugin Custom

Use your own flavored Markup and pass your own settings to the Device Selector.

```html
<style>

  .namespace__m-device-selector__item {
    display: none;
  }
  @media
  only screen and (max-width: 768px) {
    [data-ds-devicetype="m"] {
      display: block !important;
    }
  }
  @media
  only screen and (min-width: 769px) and (max-width: 960px) {
    [data-ds-devicetype="t"] {
      display: block !important;
    }
  }
  @media
  only screen and (min-width: 961px) and (max-width: 1200px) {
    [data-ds-devicetype="md"] {
      display: block !important;
    }
  }
  @media
  only screen and (min-width: 1201px) {
    [data-ds-devicetype="ld"] {
      display: block !important;
    }
  }
  @media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (   min--moz-device-pixel-ratio: 2),
  only screen and (     -o-min-device-pixel-ratio: 2/1),
  only screen and (        min-device-pixel-ratio: 2),
  only screen and (                min-resolution: 192dpi),
  only screen and (                min-resolution: 2dppx) {
    [data-ds-displaytype="rt"] {
      display: block !important;
    }
  }
</style>
<div class="namespace">
  <div class="namespace__m-device-selector">
    <div class="namespace__m-device-selector__item" data-ds-devicetype="m"></div>
    <div class="namespace__m-device-selector__item" data-ds-devicetype="t"></div>
    <div class="namespace__m-device-selector__item" data-ds-devicetype="md"></div>
    <div class="namespace__m-device-selector__item" data-ds-devicetype="lg"></div>
    <div class="namespace__m-device-selector__item" data-ds-displaytype="rt"></div>
  </div>
</div>
<script>
  $.fn.deviceSelector({
    'selector': {
      'name': '.namespace__m-device-selector',
      'parent': {
        'name': 'body',
      },
      'items': {
        'name': '.namespace__m-device-selector__item',
      },
    },
    'device': {
      'selector': {
        'name': 'data-ds-devicetype',
      },
    },
    'display': {
      'selector': {
        'name': 'data-ds-displaytype',
      },
    },
  });
  console.log($.fn.deviceSelector.getDeviceType()); // return m || t || md || lg
  $('#deviceType').text($.fn.deviceSelector.getDeviceType());
  $('#displayType').text($.fn.deviceSelector.getDisplayType());
</script>
```

### ES6 class

Style for hidden Markup that make CSS Breakpoints available in JavaScript via Media-Queries and visibility.

```html
<style>

  [data-device-selector-item] {
    display: none;
  }
  @media
  only screen and (max-width: 768px) {
    [data-device-selector-devicetype="mobile"] {
      display: block !important;
    }
  }
  @media
  only screen and (min-width: 769px) and (max-width: 960px) {
    [data-device-selector-devicetype="tablet"] {
      display: block !important;
    }
  }
  @media
  only screen and (min-width: 961px) and (max-width: 1200px) {
    [data-device-selector-devicetype="desktop"] {
      display: block !important;
    }
  }
  @media
  only screen and (min-width: 1201px) {
    [data-device-selector-devicetype="large-desktop"] {
      display: block !important;
    }
  }
  @media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (   min--moz-device-pixel-ratio: 2),
  only screen and (     -o-min-device-pixel-ratio: 2/1),
  only screen and (        min-device-pixel-ratio: 2),
  only screen and (                min-resolution: 192dpi),
  only screen and (                min-resolution: 2dppx) {
    [data-device-selector-displaytype="retina"] {
      display: block !important;
    }
  }
</style>
```

 Markup which make the visibility of Breakpoints available in JavaScript. The Markup should be added right before the closing body tag.

```html
<div data-device-selector>
  <div data-device-selector-item data-device-selector-devicetype="mobile"></div>
  <div data-device-selector-item data-device-selector-devicetype="tablet"></div>
  <div data-device-selector-item data-device-selector-devicetype="desktop"></div>
  <div data-device-selector-item data-device-selector-devicetype="large-desktop"></div>
  <div data-device-selector-item data-device-selector-displaytype="retina"></div>
</div>
```

Import the ES6 Class and sample usage.

```js
import DeviceSelector from './js/device.selector.class';
const deviceSelector = new DeviceSelector();

console.log($.fn.deviceSelector.getDeviceType()); // return m || t || md || lg
document.querySelector('#deviceType').innerHTML = deviceSelector.deviceType();
document.querySelector('#displayType').innerHTML = deviceSelector.displayType();
</script>
```

### ES6 Class Custom

```html
<style>

  .namespace__m-device-selector__item {
    display: none;
  }
  @media
  only screen and (max-width: 768px) {
    [data-ds-devicetype="m"] {
      display: block !important;
    }
  }
  @media
  only screen and (min-width: 769px) and (max-width: 960px) {
    [data-ds-devicetype="t"] {
      display: block !important;
    }
  }
  @media
  only screen and (min-width: 961px) and (max-width: 1200px) {
    [data-ds-devicetype="md"] {
      display: block !important;
    }
  }
  @media
  only screen and (min-width: 1201px) {
    [data-ds-devicetype="ld"] {
      display: block !important;
    }
  }
  @media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (   min--moz-device-pixel-ratio: 2),
  only screen and (     -o-min-device-pixel-ratio: 2/1),
  only screen and (        min-device-pixel-ratio: 2),
  only screen and (                min-resolution: 192dpi),
  only screen and (                min-resolution: 2dppx) {
    [data-ds-displaytype="rt"] {
      display: block !important;
    }
  }
</style>
<div class="namespace">
  <div class="namespace__m-device-selector">
    <div class="namespace__m-device-selector__item" data-ds-devicetype="m"></div>
    <div class="namespace__m-device-selector__item" data-ds-devicetype="t"></div>
    <div class="namespace__m-device-selector__item" data-ds-devicetype="md"></div>
    <div class="namespace__m-device-selector__item" data-ds-devicetype="lg"></div>
    <div class="namespace__m-device-selector__item" data-ds-displaytype="rt"></div>
  </div>
</div>
```

```js
import DeviceSelector from './js/device.selector.class';
const deviceSelector = new DeviceSelector({
  'selector': {
    'name': '.namespace__m-device-selector',
    'parent': {
      'name': 'body',
    },
    'items': {
      'name': '.namespace__m-device-selector__item',
    },
  },
  'device': {
    'selector': {
      'name': 'data-ds-devicetype',
    },
  },
  'display': {
    'selector': {
      'name': 'data-ds-displaytype',
    },
  },
});

console.log($.fn.deviceSelector.getDeviceType()); // return m || t || md || lg
document.querySelector('#deviceType').innerHTML = deviceSelector.deviceType();
document.querySelector('#displayType').innerHTML = deviceSelector.displayType();

```

## Documentation
* [Example](https://exiguus.github.io/js.device.selector/)
* [jsDoc](https://exiguus.github.io/js.device.selector/jsdoc/)
* [Coverage ES6](https://exiguus.github.io/js.device.selector/jsdoc/coverage/es6/)
* [Coverage jQuery](https://exiguus.github.io/js.device.selector/jsdoc/coverage/jquery/)

[tests]: https://img.shields.io/travis/exiguus/js.device.selector/master.svg
[tests-url]: https://travis-ci.org/exiguus/js.device.selector

[maintainability]:
https://api.codeclimate.com/v1/badges/587cd2b7452371bbd8a6/maintainability
[maintainability-url]:
https://codeclimate.com/github/exiguus/js.device.selector/maintainability

[coverage]:
https://api.codeclimate.com/v1/badges/587cd2b7452371bbd8a6/test_coverage
[coverage-url]:
https://codeclimate.com/github/exiguus/js.device.selector/test_coverage

[npm]: https://img.shields.io/npm/v/js.device.selector.svg
[npm-url]: https://npmjs.com/package/js.device.selector

[licenses-url]: https://img.shields.io/npm/l/js.device.selector.svg
[licenses]: https://github.com/exiguus/js.device.selector
