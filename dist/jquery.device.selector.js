/**
 * @fileOverview device selector
  Get the current Display and Device Type of a Browser
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 1.0.0
 */

/**
 * @external "jQuery.fn"
 * @see {@link http://docs.jquery.com/Plugins/Authoring The jQuery Plugin Guide}
 */

(function($) {
  'use strict';
  /**
   * jQuery Methods to get the current Display and Device Type of a Browser
   * @function external:"jQuery.fn".deviceSelector
   * @external "jQuery.fn.deviceSelector"
   */

  $.fn.deviceSelector = function(options) {
      $.fn.deviceSelector.deviceType = undefined;
      $.fn.deviceSelector.displayType = undefined;

      var settings = // eslint-disable-line no-var
        $.extend(true, $.fn.deviceSelector.defaults, options);

      var parent = // eslint-disable-line no-var
        (this.length > 0) ? this :
        $(settings.selector.parent.name);

        // console.log(parent.find(settings.selector.item.name))

      $.each(parent, function() {
        var _this = $(this); // eslint-disable-line no-var, no-invalid-this
        var selector = // eslint-disable-line no-var
          _this.find(settings.selector.name);
        var visibleSelectorItems = // eslint-disable-line no-var
          selector.find(settings.selector.item.name + ':visible');

        $.each(visibleSelectorItems, function() {
          var _this = $(this); // eslint-disable-line no-var, no-invalid-this
          if (_this.attr(settings.device.selector.name)) {
            $.fn.deviceSelector.deviceType = '' +
              _this.attr(settings.device.selector.name);
          }
          if (_this.attr(settings.display.selector.name)) {
            $.fn.deviceSelector.displayType = ''
              + _this.attr(settings.display.selector.name);
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
    return $.fn.deviceSelector.deviceType;
  };

  /**
   * Method to get current Display Type.
   * @function external:"jQuery.fn.deviceSelector".getDisplayType
   * @return {string} The current Display Type.
   */

  $.fn.deviceSelector.getDisplayType = function() {
    return $.fn.deviceSelector.displayType;
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
        'item': {
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
