import { render } from 'preact';
import { html } from 'htm/preact';

let maybeBig = Math.random() > .5 ? 'big' : 'small';


let vdom = html`<p class=${maybeBig}> hello ${40 + 2}!</p>`;

render(vdom, document.body);