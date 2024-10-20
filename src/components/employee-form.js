import {LitElement, html, css} from 'lit';

export class EmployeeForm extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
      }
    `;
  }

  static get properties() {
    return {
      employeeId: { type: String },
    };
  }

  constructor() {
    super();
    this.employeeId = null;
  }

  render() {
    return html`
      <h1>Employee Form ${this.employeeId}</h1>
    `;
  }
}

window.customElements.define('employee-form', EmployeeForm);
