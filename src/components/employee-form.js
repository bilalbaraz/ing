import {LitElement, html, css} from 'lit';
import { Router } from '@vaadin/router';
import { addEmployee, updateEmployee } from '../state/actions.js';
import { store } from '../state/store.js';

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
      isEdit: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.employeeId = null;
    this.isEdit = false;
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const employeeData = Object.fromEntries(formData.entries());

    if (this.isEdit) {
      store.dispatch(updateEmployee({ ...this.employee, ...employeeData }));
      alert('Çalışan güncellendi.');
    } else {
      store.dispatch(addEmployee(employeeData));
      alert('Çalışan eklendi.');
    }

    Router.go('/');
  }

  onBeforeEnter(location, commands, router) {
    this.employeeId = location.params.id || null;

    if (this.employeeId) {
      this.isEdit = true;
      this.employee = {};
    } else {
      this.isEdit = false;
      this.employee = {};
    }
  }

  render() {
    return html`
      <h1>${this.isEdit ? 'Çalışanı Düzenle' : 'Yeni Çalışan Ekle'}</h1>
      <form @submit="${this.handleSubmit}">
        <div>
          <label>
          First Name:
          <input
            type="text"
            name="firstName"
            .value="${this.employee.firstName || ''}"
            required
          />
          </label>
        </div>
        <div>
          <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            .value="${this.employee.lastName || ''}"
            required
          />
          </label>
        </div>
        <div>
          <label>
          E-mail Address:
          <input
            type="email"
            name="emailAddress"
            .value="${this.employee.emailAddress || ''}"
            required
          />
          </label>
        </div>
        <button type="submit">
          ${this.isEdit ? 'Güncelle' : 'Ekle'}
        </button>
      </form>
    `;
  }
}

window.customElements.define('employee-form', EmployeeForm);
