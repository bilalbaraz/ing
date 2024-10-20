import {LitElement, html, css} from 'lit';
import { store } from '../state/store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import './employee-record.js';

export class EmployeeRecordList extends connect(store)(LitElement) {
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
      employees: { type: Array },
    };
  }

  constructor() {
    super();
    this.employees = [];
    /*this.employees = [
      {id: 1, firstName: 'Bilal', lastName: 'Baraz', phoneNumber: '+905557543342', emailAddress: 'bilalbaraz@windowslive.com', dateOfBirth: '24/08/1993', dateOfEmployment: '24/08/2024', department: 'Tech'},
      {id: 2, firstName: 'Burhan', lastName: 'Baraz', phoneNumber: '+905557543341', emailAddress: 'burhanbaraz@email.com', dateOfBirth: '24/08/1984', dateOfEmployment: '23/08/2024', department: 'Analytics'},
    ];*/
  }

  stateChanged(state) {
    this.employees = state.employees || [];
  }

  render() {
    return html`
      <h1>Employee Record List (${this.employees.length})</h1>
      ${this.employees.map(
        employee => html`
          <employee-record .employee="${employee}"></employee-record>
        `
      )}
    `;
  }
}

window.customElements.define('employee-record-list', EmployeeRecordList);
