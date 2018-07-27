var CONSOLE_LOG = false; // eslint-disable-line no-var
QUnit.module('Test Device Selector jQuery Plugin', function(hooks) {
  hooks.before(function(assert) {
    $('#qunit-fixture').html('');
    assert.ok(true, 'before called');
  });
  QUnit.test('call hooks', function(assert) {
    assert.expect(1);
  });
  QUnit.moduleStart(function(details) {
    if (CONSOLE_LOG) {
      console.info( // eslint-disable-line no-console
        'Now running: ',
        details.name
      );
    }
  });
  QUnit.test('$.fn.deviceSelector', function(assert) {
    $.fn.deviceSelector();
    assert.equal(
      typeof $.fn.deviceSelector === 'function',
      true,
      '$.fn.deviceSelector is function'
    );
    assert.equal(
      typeof $.fn.deviceSelector.getDeviceType === 'function',
      true,
      '$.fn.deviceSelector.getDeviceType is function'
    );
    assert.equal(
      typeof $.fn.deviceSelector.getDisplayType === 'function',
      true,
      '$.fn.deviceSelector.getDisplayType is function'
    );
    assert.equal(
      $.fn.deviceSelector.getDeviceType() === undefined,
      true,
      'getDeviceType() is undefined'
    );
    assert.equal(
      $.fn.deviceSelector.getDisplayType() === undefined,
      true,
      'getDisplayType() is undefined'
    );
    assert.equal(
      typeof $.fn.deviceSelector.defaults === 'object',
      true,
      'defaults is object'
    );
    assert.deepEqual(
      $.fn.deviceSelector.defaults,
      {
        'selector': {
          'name': '[data-device-selector]',
          'parent': {
            'name': 'body',
          },
          'items': {
            'name': '[data-device-selector-item]',
          },
        },
        'device': {
          'selector': {
            'name': 'data-device-selector-devicetype',
          },
        },
        'display': {
          'selector': {
            'name': 'data-device-selector-displaytype',
          },
        },
      },
      'defaults is eq object'
    );
  });

  QUnit.test('$.fn.deviceSelector fail', function(assert) {
    var element = // eslint-disable-line no-var
      '<div data-device-selector>' +
        '<div data-device-selector-item></div>' +
      '</div>';
    $('#qunit-fixture').html(element);
    $.fn.deviceSelector();
    assert.equal(
      $.fn.deviceSelector.getDeviceType() === undefined,
      true,
      'getDeviceType() is String'
    );
    assert.equal(
      $.fn.deviceSelector.getDisplayType() === undefined,
      true,
      'getDisplayType() is String'
    );
  });

  QUnit.test('$.fn.deviceSelector defaults', function(assert) {
    var element = // eslint-disable-line no-var
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
      '</div>';
    $('#qunit-fixture').html(element);
    $.fn.deviceSelector();
    assert.equal(
      typeof $.fn.deviceSelector.getDeviceType() === 'string' ||
      typeof $.fn.deviceSelector.getDeviceType() === 'undefined',
      true,
      'getDeviceType() is String'
    );
    assert.equal(
      typeof $.fn.deviceSelector.getDisplayType() === 'string' ||
      typeof $.fn.deviceSelector.getDisplayType() === 'undefined',
      true,
      'getDisplayType() is String'
    );
  });

  QUnit.test('$.fn.deviceSelector parent', function(assert) {
    var element = // eslint-disable-line no-var
      '<div id="customParent">' +
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
    $('#qunit-fixture').html(element);
    var customParent = $('#customParent'); // eslint-disable-line no-var
    customParent.deviceSelector();
    assert.equal(
      typeof customParent.deviceSelector.getDeviceType() === 'string' ||
      typeof customParent.deviceSelector.getDeviceType() === 'undefined',
      true,
      'getDeviceType() is String'
    );
    assert.equal(
      typeof customParent.deviceSelector.getDisplayType() === 'string' ||
      typeof customParent.deviceSelector.getDisplayType() === 'undefined',
      true,
      'getDisplayType() is String'
    );
  });

  QUnit.test('$.fn.deviceSelector custom', function(assert) {
    var element = // eslint-disable-line no-var
      '<div class="namespace">' +
        '<div class="namespace__m-device-selector">' +
          '<div class="namespace__m-device-selector__item"' +
            'data-ds-devicetype="mobile"></div>' +
          '<div class="namespace__m-device-selector__item" ' +
            'data-ds-devicetype="tablet"></div>' +
          '<div class="namespace__m-device-selector__item" ' +
            'data-ds-devicetype="desktop"></div>' +
          '<div class="namespace__m-device-selector__item" ' +
            'data-ds-devicetype="large-desktop"></div>' +
          '<div class="namespace__m-device-selector__item" ' +
            'data-ds-displaytype="retina"></div>' +
        '</div>' +
      '</div>';
    $('#qunit-fixture').html(element);
    $.fn.deviceSelector({
      'selector': {
        'name': '.namespace__m-device-selector',
        'parent': {
          'name': '.namespace',
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
    assert.equal(
      typeof $.fn.deviceSelector.getDeviceType() === 'string' ||
      typeof $.fn.deviceSelector.getDeviceType() === 'undefined',
      true,
      'getDeviceType() is String'
    );
    assert.equal(
      typeof $.fn.deviceSelector.getDisplayType() === 'string' ||
      typeof $.fn.deviceSelector.getDisplayType() === 'undefined',
      true,
      'getDisplayType() is String'
    );
  });

  QUnit.moduleDone(function(details) {
    $('#qunit-fixture').html('');
    if (CONSOLE_LOG) {
      console.info( // eslint-disable-line no-console
        'Finished running: ',
          details.name,
        'Failed/total: ',
          details.failed,
          details.total
      );
    }
  });
});
