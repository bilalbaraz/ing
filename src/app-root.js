import {LitElement, html, css} from 'lit';
import { Router } from '@vaadin/router';
import './components/action-menu.js';
import './components/not-found.js';
import './components/employee-record-list.js';
import './components/employee-form.js';

export class AppRoot extends LitElement {
  firstUpdated() {
    const router = new Router(this.shadowRoot.querySelector('#app'));
    router.setRoutes([
      { path: '/', component: 'employee-record-list' },
      { path: '/add', component: 'employee-form' },
      { path: '/edit/:id', component: 'employee-form' },
      { path: '(.*)', component: 'page-not-found' },
    ]);
  }

  render() {
    return html`
      <action-menu></action-menu>
      <div id="app"></div>
    `;
  }
}

window.customElements.define('app-root', AppRoot);