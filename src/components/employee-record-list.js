import {LitElement, html, css} from 'lit';
import './employee-record.js';

export class EmployeeRecordList extends LitElement {
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
      <h1>Employee Record List</h1>
      <employee-record></employee-record>
    `;
  }
}

window.customElements.define('employee-record-list', EmployeeRecordList);
