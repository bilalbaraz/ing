import {LitElement, html, css} from 'lit';

export class ActionMenu extends LitElement {
  static get styles() {
    return css`
      .nav {
        display: flex;
        flex-direction: row;
        list-style-type: none;
      }
      .nav-item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      a.nav-link {
        width: 100%;
        text-align: center;
        color: #000;
        font-weight: 500;
        font-size: 30px;
        padding: 10px;
      }
    `;
  }

  render() {
    return html`
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="/">Employee List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/add">Add New Employee</a>
        </li>
      </ul>
    `;
  }
}

window.customElements.define('action-menu', ActionMenu);
