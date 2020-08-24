// preloader

$(window).on('load', function () {
  if ($('#preloader').length) {
    $('#preloader').delay(500).fadeOut('slow', function () {
      $(this).remove();
    });
  }
});


// scroll Button
  window.onscroll = function() {scrollFunction()};
  
var mybutton = document.getElementById("myBtn");

  function scrollFunction() {
 
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }

  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Navbar @media

  $(document).ready(function(){
    $('.btm').click(function(){
      $('.items').toggleClass("show");
      $('ul li').toggleClass("hide");
    });
  });
 //nav sticky
 const nav = document.querySelector('nav');
 window.addEventListener('scroll', fixNav);
 function fixNav(){
   if(window.scrollY > nav.offsetHeight+150){
       nav.classList.add('black');
   }
   else{
       nav.classList.remove('black');
   }
 }

// home typewriter

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 300;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}


//home mobile type writer
// Init On DOM Load
document.addEventListener('DOMContentLoaded', init1);

// Init App
function init1() {
  const txtElement1 = document.querySelector('.txt-type1');
  const words1 = JSON.parse(txtElement1.getAttribute('data-words'));
  const wait1 = txtElement1.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement1, words1, wait1);
}