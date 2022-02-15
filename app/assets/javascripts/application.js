// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

window.onload= function() {
  ScrollReveal().reveal('.catch-1', {
    duration: 2000,
    delay: 100,
    origin: 'left',
    distance: '50px',
    viewFactor: 0.1,
    reset: false
  });

  ScrollReveal().reveal('.catch-2', {
    duration: 2000,
    delay: 100,
    origin: 'left',
    distance: '50px',
    viewFactor: 0.2,
    reset: false
  });

  ScrollReveal().reveal('.catch-3', {
    duration: 3000,
    delay: 200,
    viewFactor: 0.3,
    reset: false
  });

  ScrollReveal().reveal('.catch-pc', {
    duration: 4000,
    delay: 400,
    viewFactor: 0.5,
    reset: false
  });

  ScrollReveal().reveal('.steptext-01', {
    duration: 2000,
    delay: 100,
    origin: 'left',
    distance: '100px',
    viewFactor: 0.1,
    reset: false
  });

  ScrollReveal().reveal('.steptext-02', {
    duration: 2000,
    delay: 100,
    origin: 'right',
    distance: '100px',
    viewFactor: 0.1,
    reset: false
  });

  ScrollReveal().reveal('.steptext-03', {
    duration: 2000,
    delay: 100,
    origin: 'left',
    distance: '100px',
    viewFactor: 0.1,
    reset: false
  });
}
