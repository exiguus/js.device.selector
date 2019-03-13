/**
 * @fileOverview device selector
  Get the current Display and Device Type of a Browser
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 1.0.1
 */
export default class DeviceSelector {
  /* eslint-disable max-len */
  /**
   * Get the current Display and Device Type of a Browser.
   * @class DeviceSelector
   * @classdesc Class to get current Display and Device Type.
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
  constructor(options) {
    /* eslint-enable max-len */
    this._defaults = {
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
    };
    this._options = options || {};
    this._settings = Object.assign({}, this._defaults, this._options);
    this._items = document.querySelectorAll(
      this._settings.selector.parent.name + ' ' +
      this._settings.selector.name + ' ' +
      this._settings.selector.items.name
    );
    this._displayType = (
      item = (this._items && this._items.length > 0) ?
        Array.prototype.slice.call(this._items)
          .filter((item) =>
            (item.offsetWidth > 0 || item.offsetHeight > 0) &&
            item.hasAttribute(this._settings.display.selector.name)
          ) :
      null
    ) => (item && item.length > 0) ?
      '' + item[0].getAttribute(this._settings.display.selector.name) :
      undefined;
    this._deviceType = (
      item = (this._items && this._items.length > 0) ?
        Array.prototype.slice.call(this._items)
          .filter((item) =>
            (item.offsetWidth > 0 || item.offsetHeight > 0) &&
            item.hasAttribute(this._settings.device.selector.name)
          ) :
      null
    ) => (item && item.length > 0) ?
      '' + item[0].getAttribute(this._settings.device.selector.name) :
      undefined;
  }
  /**
   * Get the current Device Type; //  Device Type.
   * @function DeviceSelector.deviceType
   * @param {string} string The current Device Type.
   * @return {string | undefined} The current Device Type Name.
   */
  get deviceType() {
    return this._deviceType;
  }
  /**
   * Get the current Display Type.
   * @function DeviceSelector.displayType
   * @param {string} string The current Display Type.
   * @return {string | undefined} The current Display Type Name.
   */
  get displayType() {
    return this._displayType;
  }
}
