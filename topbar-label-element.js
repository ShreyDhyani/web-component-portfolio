const template = document.createElement("template");
template.innerHTML = /*html*/ `
  <style>
  label {
    color: blue;
  }
  </style>

  <label>HELLO</label>


`;

class TopbarLabelElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector("label").innerText =
      this.getAttribute("labelText");
    this.shadowRoot.querySelector("label").title = "Hello";
  }
}

window.customElements.define("topbar-label-element", TopbarLabelElement);
