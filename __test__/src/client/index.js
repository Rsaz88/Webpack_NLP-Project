// imports, exports, etc,..
// js files
import { checkForURL } from './js/urlChecker';
import { handleSubmit } from './js/formHandler';

// sass files
import './style/reset.scss';
import './style/_variables.scss';
import './style/base.scss';
import './style/header.scss';
import './style/_entry-results.scss';
import './style/entry.scss';
import './style/results.scss';
import './style/footer.scss';


window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const form = document.getElementById('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        handleSubmit()
    })
});

export { checkForURL, handleSubmit };
