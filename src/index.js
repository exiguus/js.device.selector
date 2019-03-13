// app
import DeviceSelector from './js/device.selector.class';
const deviceSelector = new DeviceSelector();

console.log(deviceSelector._options); // eslint-disable-line no-console
console.log(deviceSelector._defaults); // eslint-disable-line no-console
console.log(deviceSelector._settings); // eslint-disable-line no-console
console.log(deviceSelector._items); // eslint-disable-line no-console
console.log(deviceSelector.deviceType()); // eslint-disable-line no-console
console.log(deviceSelector.displayType()); // eslint-disable-line no-console, max-len

console.log(typeof deviceSelector); // eslint-disable-line no-console
console.log(typeof deviceSelector._options); // eslint-disable-line no-console
console.log(typeof deviceSelector._defaults); // eslint-disable-line no-console
console.log(typeof deviceSelector._settings); // eslint-disable-line no-console
console.log(typeof deviceSelector._items); // eslint-disable-line no-console
console.log(typeof deviceSelector.deviceType); // eslint-disable-line no-console, max-len
console.log(typeof deviceSelector.displayType); // eslint-disable-line no-console, max-len

document.querySelector('#deviceType').innerHTML = deviceSelector.deviceType();
document.querySelector('#displayType').innerHTML = deviceSelector.displayType();
document.querySelector('#windowInnerWidth').innerHTML = window.innerWidth;
console.log(typeof deviceSelector.deviceType() === 'undefined');
if (deviceSelector.deviceType()) document.querySelector('.logo svg.' + deviceSelector.deviceType())
  .style.opacity = 1;
