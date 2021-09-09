import Typed from 'typed.js';

const loadDynamicBannerText = () => {
    new Typed('#banner-typed-text', {
        strings: ["Change your life", "Learn to code", "Hello from Istanbul"],
        typeSpeed: 50,
        loop: true
    });
}

export { loadDynamicBannerText };