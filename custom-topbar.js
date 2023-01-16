class CustomTopbar extends HTMLElement {
  constructor () {
    super();

    this.attachShadow({mode: "open"});

    this.shadowRoot.innerHTML = `
    <div style={}>
      <label>
      ONE
      </label>
      <label>
      TWO
      </label>
    </div>
    
    `
  }
}

window.customElements.define("custom-topbar", CustomTopbar);

