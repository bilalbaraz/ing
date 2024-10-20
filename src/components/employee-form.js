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
      employeeData.id = this.generateUniqueId();
      store.dispatch(addEmployee(employeeData));
      alert('Çalışan eklendi.');
    }

    Router.go('/');
  }

  onBeforeEnter(location, commands, router) {
    this.employeeId = location.params.id || null;

    if (this.employeeId) {
      this.isEdit = true;
      this.loadEmployeeData(this.employeeId);
    } else {
      this.isEdit = false;
      this.employee = {};
    }
  }

  loadEmployeeData(id) {
    this.employee = store.getState().employees.find(emp => emp.id === id);
    this.requestUpdate();
  }

  generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
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
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              .value="${this.employee.phoneNumber || ''}"
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
