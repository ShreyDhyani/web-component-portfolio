class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener("click", (event) => {
      if (!confirm("Do you want to leave the current page?")) {
        event.preventDefault();
      }
    });
  }
}

customElements.define("reuse-confirm-link", ConfirmLink, { extends: "a" });
