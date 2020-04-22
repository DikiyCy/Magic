'use strict';


window.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger'),
    mobile = document.querySelector('.mobile'),
    humbLink = document.querySelector('.hamburger__link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger_active');
        humbLink.classList.toggle('hamburger_active');
        mobile.classList.toggle('mobile_active');
    });

    humbLink.addEventListener('click', function() {
        humbLink.classList.toggle('hamburger_active');
        mobile.classList.toggle('mobile_active');
        hamburger.classList.toggle('hamburger_active');
    });

});
