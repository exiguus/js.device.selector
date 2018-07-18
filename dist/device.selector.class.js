/**
 * @fileOverview device selector
  Get the current Display and Device Type of a Browser
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 1.0.0
 */
export default class DeviceSelector {
  /**
   * Get the current Display and Device Type of a Browser.
   * @class DeviceSelector
   * @classdesc Class to get current Display and Device Type.
   */
  constructor() {
    // Object.assign({}, param, this.settings);
    this.settings = {
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
    this._items = document.querySelectorAll(
      this.settings.selector.parent.name + ' ' +
      this.settings.selector.name + ' ' +
      this.settings.selector.items.name
    );
    this._displayTypeName = () =>
      '' + Array.prototype.slice.call(this._items).filter((item) =>
        (item.offsetWidth > 0 || item.offsetHeight > 0) &&
        item.getAttribute(this.settings.display.selector.name)
      )[0].getAttribute(this.settings.display.selector.name) || undefined;
    this._deviceTypeName = () =>
      '' + Array.prototype.slice.call(this._items).filter((item) =>
        (item.offsetWidth > 0 || item.offsetHeight > 0) &&
        item.getAttribute(this.settings.device.selector.name)
      )[0].getAttribute(this.settings.device.selector.name) || undefined;
  }
  /**
   * Get the current Device Type.
   * @function DeviceSelector.deviceType
   * @param {string} string The current Device Type.
   * @return {string} The current Device Type Name.
   */
  get deviceType() {
    return this._deviceTypeName;
  }
  /**
   * Get the current Display Type.
   * @function DeviceSelector.displayType
   * @param {string} string The current Display Type.
   * @return {string} The current Display Type Name.
   */
  get displayType() {
    return this._displayTypeName;
  }
}
