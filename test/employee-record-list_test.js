import {EmployeeRecordList} from '../src/components/employee-record-list.js';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('employee-form', () => {
  test('is defined', () => {
    const el = document.createElement('employee-record-list');
    assert.instanceOf(el, EmployeeRecordList);
  });
});
