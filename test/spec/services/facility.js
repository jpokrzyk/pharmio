'use strict';

describe('Service: facility', function () {

  // load the service's module
  beforeEach(module('pharmioApp'));

  // instantiate service
  var facility;
  beforeEach(inject(function (_facility_) {
    facility = _facility_;
  }));

  it('should do something', function () {
    expect(!!facility).toBe(true);
  });

});
