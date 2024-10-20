import {LitElement, html, css} from 'lit';

export class EmployeeForm extends LitElement {
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
      <h1>Employee Form</h1>
    `;
  }
}

window.customElements.define('employee-form', EmployeeForm);
