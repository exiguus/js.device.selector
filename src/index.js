// app
import DeviceSelector from './js/device.selector.class';
const deviceSelector = new DeviceSelector();

console.log(deviceSelector.settings); // eslint-disable-line no-console
console.log(deviceSelector.deviceType()); // eslint-disable-line no-console
console.log(deviceSelector.displayType()); // eslint-disable-line no-console

document.querySelector('#deviceType').innerHTML = deviceSelector.deviceType();
document.querySelector('#displayType').innerHTML = deviceSelector.displayType();
