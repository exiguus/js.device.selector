import 'babel-polyfill';
import DeviceSelector from '../../dist/device.selector.class';

describe('DeviceSelector class', () => {
  let markup;

  beforeEach(function() {
    markup = '<div id="customParent">' +
      '<div data-device-selector>' +
        '<div data-device-selector-item ' +
          'data-device-selector-devicetype="mobile"></div>' +
        '<div data-device-selector-item ' +
          'data-device-selector-devicetype="tablet"></div>' +
        '<div data-device-selector-item ' +
          'data-device-selector-devicetype="desktop"></div>' +
        '<div data-device-selector-item ' +
          'data-device-selector-devicetype="large-desktop"></div>' +
        '<div data-device-selector-item ' +
          'data-device-selector-displaytype="retina"></div>' +
      '</div>' +
    '</div>';
    document.body.innerHTML = markup;
  });

  afterEach(function() {
   document.body.innerHTML = null;
   markup = null;
  });

  it('DeviceSelector is Object', () => {
    let deviceSelector = new DeviceSelector();
    expect(typeof deviceSelector).toBe('object');
  });

  it('DeviceSelector options is Object', () => {
    let deviceSelector = new DeviceSelector();
    expect(typeof deviceSelector._options).toBe('object');
  });

  it('DeviceSelector options is eq Object', () => {
    let deviceSelector = new DeviceSelector();
    expect(deviceSelector._options).toEqual({});
  });

  it('DeviceSelector defaults is Object', () => {
    let deviceSelector = new DeviceSelector();
    expect(typeof deviceSelector._defaults).toBe('object');
  });

  it('DeviceSelector defaults is eq Object', () => {
    let deviceSelector = new DeviceSelector();
    expect(deviceSelector._defaults).toEqual({
      selector: {
        name: '[data-device-selector]',
        items: {
          name: '[data-device-selector-item]',
        },
        parent: {
          name: 'body',
        },
      },
      device: {
        selector: {
          name: 'data-device-selector-devicetype',
        },
      },
      display: {
        selector: {
          name: 'data-device-selector-displaytype',
        },
      },
    });
  });

  it('DeviceSelector settings is eq Object', () => {
    let deviceSelector = new DeviceSelector();
    expect(deviceSelector._settings).toEqual({
      selector: {
        name: '[data-device-selector]',
        items: {
          name: '[data-device-selector-item]',
        },
        parent: {
          name: 'body',
        },
      },
      device: {
        selector: {
          name: 'data-device-selector-devicetype',
        },
      },
      display: {
        selector: {
          name: 'data-device-selector-displaytype',
        },
      },
    });
  });

  it('DeviceSelector settings is Object', () => {
    let deviceSelector = new DeviceSelector();
    expect(typeof deviceSelector._settings).toBe('object');
  });

  it('DeviceSelector get deviceType is function', () => {
    let deviceSelector = new DeviceSelector();
    expect(typeof deviceSelector.deviceType).toBe('function');
  });

  it('DeviceSelector get deviceType return string', () => {
    let deviceSelector = new DeviceSelector();
    expect(typeof deviceSelector.deviceType()).toBe('string');
  });

  it('DeviceSelector get displayType is function', () => {
    let deviceSelector = new DeviceSelector();
    expect(typeof deviceSelector.displayType).toBe('function');
  });

  it('DeviceSelector get displayType return string', () => {
    let deviceSelector = new DeviceSelector();
    expect(typeof deviceSelector.displayType()).toBe('string');
  });
});

describe('DeviceSelector class fail', () => {
  it('DeviceSelector get deviceType return undefined', () => {
    let deviceSelector = new DeviceSelector();
    expect(typeof deviceSelector.deviceType()).toBe('undefined');
  });

  it('DeviceSelector get deviceType return undefined value', () => {
    let deviceSelector = new DeviceSelector();
    expect(deviceSelector.deviceType()).toBeUndefined();
  });

  it('DeviceSelector get displayType return undefined', () => {
    let deviceSelector = new DeviceSelector();
    expect(typeof deviceSelector.displayType()).toBe('undefined');
  });

  it('DeviceSelector get displayType return undefined value', () => {
    let deviceSelector = new DeviceSelector();
    expect(deviceSelector.displayType()).toBeUndefined();
  });
});

describe('DeviceSelector class options', () => {
  let markup;

  beforeEach(function() {
    markup = '<div class="namespace">' +
    '<div class="namespace__m-device-selector">' +
      '<div class="namespace__m-device-selector__item" ' +
          'data-ds-devicetype="m"></div>' +
        '<div class="namespace__m-device-selector__item" ' +
          'data-ds-devicetype="t"></div>' +
        '<div class="namespace__m-device-selector__item" ' +
            'data-ds-devicetype="md"></div>' +
        '<div class="namespace__m-device-selector__item" ' +
            'data-ds-devicetype="lg"></div>' +
        '<div class="namespace__m-device-selector__item" ' +
            'data-ds-displaytype="rt"></div>' +
      '</div>' +
    '</div>';
    document.body.innerHTML = markup;
  });

  afterEach(function() {
   document.body.innerHTML = null;
   markup = null;
  });

  it('DeviceSelector is Object', () => {
    let deviceSelector = new DeviceSelector({
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
    expect(typeof deviceSelector).toBe('object');
  });

  it('DeviceSelector options is Object', () => {
    let deviceSelector = new DeviceSelector({
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
    expect(typeof deviceSelector._options).toBe('object');
  });

  it('DeviceSelector options is eq Object', () => {
    let deviceSelector = new DeviceSelector({
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
    expect(deviceSelector._options).toEqual({
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
  });

  it('DeviceSelector defaults is Object', () => {
    let deviceSelector = new DeviceSelector({
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
    expect(typeof deviceSelector._defaults).toBe('object');
  });

  it('DeviceSelector defaults is eq Object', () => {
    let deviceSelector = new DeviceSelector({
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
    expect(deviceSelector._defaults).toEqual({
      selector: {
        name: '[data-device-selector]',
        items: {
          name: '[data-device-selector-item]',
        },
        parent: {
          name: 'body',
        },
      },
      device: {
        selector: {
          name: 'data-device-selector-devicetype',
        },
      },
      display: {
        selector: {
          name: 'data-device-selector-displaytype',
        },
      },
    });
  });


  it('DeviceSelector settings is Object', () => {
    let deviceSelector = new DeviceSelector({
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
    expect(typeof deviceSelector._settings).toBe('object');
  });

  it('DeviceSelector settings is eq Object', () => {
    let deviceSelector = new DeviceSelector({
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
    expect(deviceSelector._settings).toEqual({
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
  });

  it('DeviceSelector get deviceType is function', () => {
    let deviceSelector = new DeviceSelector({
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
    expect(typeof deviceSelector.deviceType).toBe('function');
  });

  it('DeviceSelector get deviceType return string', () => {
    let deviceSelector = new DeviceSelector({
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
    expect(typeof deviceSelector.deviceType()).toBe('string');
  });

  it('DeviceSelector get displayType is function', () => {
    let deviceSelector = new DeviceSelector({
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
    expect(typeof deviceSelector.displayType).toBe('function');
  });

  it('DeviceSelector get displayType return string', () => {
    let deviceSelector = new DeviceSelector({
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
    expect(typeof deviceSelector.displayType()).toBe('string');
  });
});
