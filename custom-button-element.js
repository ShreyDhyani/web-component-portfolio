// This is an inherited button component
// As can be seen, instead of inheriting from HTMLcustom elements, this component inherits from HTMLButtonElement
// This it will already have all the properties of button element and we can furthur customise this button to
// behave as we want.
// This can be usefull if we want to create elemnents which need to perform a certain predefined tasks.
// For Eg, Buttons to Copy some content, of buttons to initiate api calls etc,

class CustomButtonElement extends HTMLButtonElement {
  constructor() {
    super();
    this.style.backgroundColor = "blue";
    this.style.color = "white";
    this.addEventListener("click", () => {
      alert("Hello World");
    });
  }
}

window.customElements.define(
  "custom-button-element",
  CustomButtonElement,
  {
    extends: "button",
  }
);
