import {EmployeeRecord} from '../src/components/employee-record.js';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('employee-record', () => {
  test('is defined', () => {
    const el = document.createElement('employee-record');
    assert.instanceOf(el, EmployeeRecord);
  });
});
