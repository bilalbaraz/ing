import {LitElement, html} from 'lit';

export class NotFound extends LitElement {
  render() {
    return html`
      <h2>Page Not Found</h2>
      <p>Page not found you are looking for.</p>
      <a href="/">Back to Home</a>
    `;
  }
}

window.customElements.define('page-not-found', NotFound);