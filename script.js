$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css('scrollBehavior', 'auto');
  });

  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css('scrollBehavior', 'smooth');
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // typing text animation script
  var typed = new Typed('.typing', {
    strings: ['Developer', 'Blogger', 'Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed('.typing-2', {
    strings: ['Developer', 'Blogger', 'Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// Send Button script
// $(document).ready(function () {
//   $('#button').click(function () {
//     $('#fr1').attr(
//       'action',
//       'mailto:ahmadchand420@gmail.com?name=' +
//         $('#tb1').val() +
//         '&email=' +
//         $('#tb2').val() +
//         '&subject=' +
//         $('#tb3').val() +
//         '&body=' +
//         $('#tb4').val()
//     );
//     $('#fr1').submit();
//   });
// });

// <!------------------>
// window.addEventListener('DOMContentLoaded', function () {
//   // get the form elements defined in your form HTML above

//   var form = document.querySelector('.my-form');
//   // var button = document.getElementById("my-form-button");
//   var status = document.getElementById('status');

//   // Success and Error functions for after the form is submitted

//   function success() {
//     form.reset();
//     status.classList.add('success');
//     status.innerHTML = 'Thanks!';
//   }

//   function error() {
//     status.classList.add('error');
//     status.innerHTML = 'Oops! There was a problem.';
//   }

//   // handle the form submission event

//   form.addEventListener('submit', function (ev) {
//     ev.preventDefault();
//     var data = new FormData(form);
//     ajax(form.method, form.action, data, success, error);
//   });
// });

// // helper function for sending an AJAX request

// function ajax(method, url, data, success, error) {
//   var xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader('Accept', 'application/json');
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState !== XMLHttpRequest.DONE) return;
//     if (xhr.status === 200) {
//       success(xhr.response, xhr.responseType);
//     } else {
//       error(xhr.status, xhr.response, xhr.responseType);
//     }
//   };
//   xhr.send(data);
// }

//Send Email Info

// app.post('/contact', function (req, res) {
//   var api_key = '56801dee503e6a4dbf1554c2263faecb-cb3791c4-72e292c9';
//   var domain = 'sandboxfa505509c6d9403487d7c99ceb4fb4fc.mailgun.org  ';
//   var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

//   var data = {
//     from:
//       'Potfolio Visitior <postmaster@sandboxfa505509c6d9403487d7c99ceb4fb4fc.mailgun.org>',
//     to: 'xqlsinyiophlmtlfcg@avxrja.com' + ' Sends you a message',
//     subject: req.body.subject,
//     html: "<br style='color:green'>Message: </br>" + req.body.message,
//   };

//   mailgun.messages().send(data, function (error, body) {
//     console.log(body);
//     if (error) res.send('Mail sent');
//     else res.send('Mail not sent');
//   });
// });

// function send(event) {
//   event.preventDefault();
//   Email.send({
//     // SecureToken: 'f5c20bfd-dac7-466a-83a3-8ee394b4515c',
//     Host: 'smtp.gmail.com',
//     Username: 'ahmadchand420@gmail.com',
//     Password: 'Ahmad1908',
//     To: 'mac244623@gmail.com',
//     name: document.getElementById('name').value,
//     From: document.getElementById('email').value,
//     Subject: document.getElementById('subject').value,
//     Body: document.getElementById('message').value,
//   }).then(function (response) {
//     if (response == 'OK') {
//       alert('Mail sent success');
//     } else {
//       throw new Error('Error: ' + response.statusText);
//     }
//   });
// }

window.addEventListener('DOMContentLoaded', function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById('my-form');
  // var button = document.getElementById('my-form-button');
  var status = document.getElementById('status');

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    // button.style = 'display: none ';
    status.classList.add('success');
    status.innerHTML = 'Thanks!';
  }

  function error() {
    status.classList.add('error');
    status.innerHTML = 'Oops! There was a problem.';
  }

  // handle the form submission event

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
