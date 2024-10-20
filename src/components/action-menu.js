import {LitElement, html, css} from 'lit';

export class ActionMenu extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <h1>Action Menu</h1>
    `;
  }
}

window.customElements.define('action-menu', ActionMenu);
