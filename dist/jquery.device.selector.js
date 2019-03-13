/**
 * @fileOverview device selector
  Get the current Display and Device Type of a Browser
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 1.0.1
 */

/**
 * @external "jQuery.fn"
 * @see {@link http://docs.jquery.com/Plugins/Authoring The jQuery Plugin Guide}
 */

(function($) {
  'use strict';
  /* eslint-disable max-len */
  /**
   * jQuery Methods to get the current Display and Device Type of a Browser
   * @function external:"jQuery.fn".deviceSelector
   * @external "jQuery.fn"
   * @external "jQuery.fn.deviceSelector"
   * @param {object} options The DeviceSelector options.
   * @param {string} options.selector The DeviceSelector selector options.
   * @param {string} options.selector.name The DeviceSelector selector name for initialisation.
   * @param {string} options.selector.items The DeviceSelector selector items for initialisation.
   * @param {string} options.selector.items.name The DeviceSelector selector items name for initialisation.
   * @param {string} options.selector.parent The DeviceSelector selector parent for initialisation.
   * @param {string} options.selector.parent.name The DeviceSelector selector parent name for initialisation.
   * @param {string} options.device The DeviceSelector device type options.
   * @param {string} options.device.selector The DeviceSelector device type selector for initialisation.
   * @param {string} options.device.selector.name The DeviceSelector device type selector name for initialisation.
   * @param {string} options.display The DeviceSelector display type options.
   * @param {string} options.display.selector The DeviceSelector display type selector for initialisation.
   * @param {string} options.display.selector.name The DeviceSelector display type selector name for initialisation.
   */
  /* eslint-enable max-len */
  $.fn.deviceSelector = function(options) {
      $.fn.deviceSelector._deviceType = undefined;
      $.fn.deviceSelector._displayType = undefined;

      var _settings = // eslint-disable-line no-var
        $.extend(true, $.fn.deviceSelector.defaults, options);

      var _parent = // eslint-disable-line no-var
        (this.length > 0) ? this :
        $(_settings.selector.parent.name);

        // console.log(parent.find(_settings.selector.item.name))

      $.each(_parent, function() {
        var _this = $(this); // eslint-disable-line no-var, no-invalid-this
        var selector = // eslint-disable-line no-var
          _this.find(_settings.selector.name);
        var visibleSelectorItems = // eslint-disable-line no-var
          selector.find(_settings.selector.items.name + ':visible');

        $.each(visibleSelectorItems, function() {
          var _this = $(this); // eslint-disable-line no-var, no-invalid-this
          if (_this.attr(_settings.device.selector.name)) {
            $.fn.deviceSelector._deviceType = '' +
              _this.attr(_settings.device.selector.name);
          }
          if (_this.attr(_settings.display.selector.name)) {
            $.fn.deviceSelector._displayType = ''
              + _this.attr(_settings.display.selector.name);
          }
        });
      });
  };

  /**
   * Method to get current Device Type.
   * @function external:"jQuery.fn.deviceSelector".getDeviceType
   * @return {string} The current Device Type.
   */

  $.fn.deviceSelector.getDeviceType = function() {
    return $.fn.deviceSelector._deviceType;
  };

  /**
   * Method to get current Display Type.
   * @function external:"jQuery.fn.deviceSelector".getDisplayType
   * @return {string} The current Display Type.
   */

  $.fn.deviceSelector.getDisplayType = function() {
    return $.fn.deviceSelector._displayType;
  };

  $.fn.deviceSelector.defaults = {}; // eslint-disable-line no-var
  $.extend(
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
    }
  );
}(jQuery));
