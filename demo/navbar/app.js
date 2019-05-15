class AppNavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        console.log(this.getAttribute("theme"));
        const template = document.querySelector("template");
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }


    static get observedAttributes() {
        return ["theme"];
      }

    attributeChangedCallback(name, oldVal, newVal) {
        console.table({ name, oldVal, newVal });
    }

    connectedCallback() {
        console.log("conn")
    }

    disconnectedCallback() {
        console.log("disconn")
    }
}
window.customElements.define("app-navbar", AppNavbar);
