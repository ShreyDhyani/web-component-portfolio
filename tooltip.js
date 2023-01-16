class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = "This is default tooltip text";
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          background-color : #ccc;
          border : 2px solid blue;
          padding : 5px 10px;
        }

        :host(.important) {
          background-color : #900;
          color: white
        }

        :host(#second) {
          background-color: #dab;
        }

        :host-context(p) {
          color: blue;
        }

        div {
          background-color : black;
          color : white;
          position : absolute;
          padding : 5px;
          opacity : 0.7;
          border-radius : 5px;
          z-index : 10;
        }

        ::slotted(.highlight) {
          border-bottom : 2px dotted red; 
        }

        .icon {
          background-color: #222;
          border-radius: 50%;
          padding: 2px 8px;
          color: white;
        }

      </style>
      <slot>Default Content</slot> 
      <span class="icon">?</span>
    `;
  }

  connectedCallback() {
    //Assign value to _tooltipText when it is attched to DOM
    // this._tooltipText = this.getAttribute('text') || "This is default tooltip text";
    if (this.hasAttribute("text")) {
      this._tooltipText = this.getAttribute("text");
    }

    //Create and attach tooltipIcon to Custom element
    // const tooltipIcon = document.createElement("span");
    // tooltipIcon.textContent = " (?)";
    const tooltipIcon = this.shadowRoot.querySelector("span");
    tooltipIcon.addEventListener("mouseenter", this._showToolTip.bind(this));
    tooltipIcon.addEventListener("mouseleave", this._hideToolTip.bind(this));
    this.shadowRoot.appendChild(tooltipIcon);
    this.style.position = "relative";
  }

  _showToolTip() {
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.textContent = this._tooltipText;

    //Tooltip cntainer styles
    // this._tooltipContainer.style.position = "absolute";
    // this._tooltipContainer.style.backgroundColor = "black";
    // this._tooltipContainer.style.color = "white";
    // this._tooltipContainer.style.padding = "5px 5px 5px 5px";
    // this._tooltipContainer.style.borderRadius = "5px";
    // this._tooltipContainer.style.opacity = "0.6";
    // this._tooltipContainer.style.zIndex = "10";
    // this._tooltipContainer.style.border = "3px solid red"

    this.shadowRoot.appendChild(this._tooltipContainer);
  }

  _hideToolTip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}

window.customElements.define("reuse-tooltip", Tooltip);
