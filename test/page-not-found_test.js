import {PageNotFound} from '../src/components/page-not-found.js';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('not-found', () => {
  test('is defined', () => {
    const el = document.createElement('page-not-found');
    assert.instanceOf(el, PageNotFound);
  });
  test('renders', async () => {
    const el = await fixture(html`<page-not-found></page-not-found>`);
    assert.shadowDom.equal(
      el,
      `
      <h2>Page Not Found</h2>
      <p>Page not found you are looking for.</p>
      <a href="/">Back to Home</a>
      `
    );
  });
});
