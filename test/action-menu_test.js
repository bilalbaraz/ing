import {ActionMenu} from '../src/components/action-menu.js';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('action-menu', () => {
  test('is defined', () => {
    const el = document.createElement('action-menu');
    assert.instanceOf(el, ActionMenu);
  });

  test('renders', async () => {
    const el = await fixture(html`<action-menu></action-menu>`);
    assert.shadowDom.equal(
      el,
      `
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="/">Employee List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/add">Add New Employee</a>
        </li>
      </ul>
    `
    );
  });
});
