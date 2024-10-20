import {LitElement, html, css} from 'lit';

export class EmployeeRecord extends LitElement {
  static get styles() {
    return css`
      div.employee-record {
        border: solid 1px gray;
        padding: 6px;
        display: flex;
        flex-direction: row;
      }
      div.employee-record-content {
        flex: 3;
      }
      div.employee-record-actions {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
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
      <div class="employee-record">
        <div class="employee-record-content"><h1>${this.employee.name}</h1></div>
        <div class="employee-record-actions">Actions</div>
      </div>
    `;
  }
}

window.customElements.define('employee-record', EmployeeRecord);
