import {LitElement, html, css} from 'lit';
import { Router } from '@vaadin/router';

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
        display: flex;
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
        align-items: center;
        text-align: right;
      }
      div.employee-record-action-edit > a {
        color: #0000ff;
      }
      div.employee-record-action-delete {
        flex: 1;
        align-items: center;
        text-align: right;
      }
      div.employee-record-action-delete > a {
        color: #ff0000;
      }
      div.employee-record-content-personal {
        flex: 2;
      }
      div.employee-record-content-company-department {
        flex: 1;
      }
      div.employee-record-content-company-date-of-employment {
        flex: 1;
      }
      div.employee-record-content-personal-full-name {
        font-weight: 700;
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

  onEdit() {
    Router.go(`/edit/${this.employee.id}`);
  }

  onDelete() {
    if (confirm('Silmek üzeresiniz. Emin misiniz?')) {
      alert('Silindi');
    }
  }

  render() {
    return html`
      <div class="employee-record">
        <div class="employee-record-content">
          <div class="employee-record-content-personal">
            <div class="employee-record-content-personal-full-name">${this.employee.firstName + ' ' + this.employee.lastName}</div>
            <div class="employee-record-content-personal-email">${this.employee.emailAddress}</div>
            <div class="employee-record-content-personal-phone-number">${this.employee.phoneNumber}</div>
            <div class="employee-record-content-personal-date-of-birth">${this.employee.dateOfBirth}</div>
          </div>
          <div class="employee-record-content-company-department"><b>Department:</b><br>${this.employee.department}</div>
          <div class="employee-record-content-company-date-of-employment"><b>Date of Employment:</b><br>${this.employee.dateOfEmployment}</div>
        </div>
        <div class="employee-record-actions">
          <div class="employee-record-action-edit">
            <a href="#" @click="${this.onEdit}">Edit</a>
          </div>
          <div class="employee-record-action-delete">
            <a href="#" @click="${this.onDelete}">Delete</a>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('employee-record', EmployeeRecord);
