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
    return {
      employees: { type: Array },
    };
  }

  constructor() {
    super();
    this.employees = [
      {name: 'Bilal'},
      {name: 'Burhan'},
    ];
  }

  render() {
    return html`
      <h1>Employee Record List</h1>
      ${this.employees.map(
        employee => html`
          <employee-record .employee="${employee}"></employee-record>
        `
      )}
    `;
  }
}

window.customElements.define('employee-record-list', EmployeeRecordList);
