import DeviceSelector from '../../dist/device.selector.class';

describe('DeviceSelector class', () => {
  it('DeviceSelector is Object', () => {
    let deviceSelector = new DeviceSelector();
    expect(typeof deviceSelector).toBe('object');
  });

  it('DeviceSelector get deviceType is function', () => {
    let deviceSelector = new DeviceSelector();
    expect(typeof deviceSelector.deviceType).toBe('function');
  });

  it('DeviceSelector get displayType is function', () => {
    let deviceSelector = new DeviceSelector();
    expect(typeof deviceSelector.displayType).toBe('function');
  });
});
