const template = document.createElement('template');
template.innerHTML = `
  <div>
    <button id="inc">+</button>
    <button id="dec">-</button>
 </div>
`;

class CounterWebcomponent extends HTMLElement {
    result = 0;
    constructor() {
        super();
        const rootEl = this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        rootEl.querySelector('#inc').addEventListener('click', () => {
            this.common(1);
        }
        );
        rootEl.querySelector('#dec').addEventListener('click', () => {
            this.common(-1);
        }
        );
    }
    common = (num) => {
        this.result += num;
        console.log(this.result)
        const addEvent = new CustomEvent("counter", { bubbles: true, cancelable: true, composed: true, detail: { total: this.result } });
        this.dispatchEvent(addEvent);
    }
}
window.customElements.define('inc-dec-counter-btn', CounterWebcomponent);
