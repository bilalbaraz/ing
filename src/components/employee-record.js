import {LitElement, html, css} from 'lit';

export class EmployeeRecord extends LitElement {
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
    return {
      employee: { type: Object },
    };
  }

  constructor() {
    super();
    this.employee = {};
  }

  render() {
    return html`
      <h1>${this.employee.name}</h1>
    `;
  }
}

window.customElements.define('employee-record', EmployeeRecord);
