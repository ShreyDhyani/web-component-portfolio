//Thisis an example of Autonomous Custom Elements

class FirstElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    
    <h1>${this.getAttribute("label")}</h1>
    <p>This is The FIRST Element</p>
    
    `;

    
  }
}

window.customElements.define("first-element", FirstElement);
