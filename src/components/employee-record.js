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
      div.employee-record-actions {
        display: flex;
      }
      div.employee-record-action-edit {
        flex: 1;
        justify-content: center;
        align-items: center;
      }
      div.employee-record-action-edit > a {
        color: #0000ff;
      }
      div.employee-record-action-delete {
        flex: 1;
        justify-content: center;
        align-items: center;
      }
      div.employee-record-action-delete > a {
        color: #ff0000;
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
        <div class="employee-record-actions">
          <div class="employee-record-action-edit">
            <a href="">Edit</a>
          </div>
          <div class="employee-record-action-delete">
            <a href="">Delete</a>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('employee-record', EmployeeRecord);
