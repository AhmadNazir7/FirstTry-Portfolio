document.querySelector('.cross').style.display='none';
document.querySelector('.menucancel').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarHide');
    if(document.querySelector('.sidebar').classList.contains('sidebarHide'))
    {
        document.querySelector('.menu').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else
    {
        document.querySelector('.menu').style.display='none'
        setTimeout(() =>{
        document.querySelector('.cross').style.display='inline'
        },200);
    }
})

// COPY PASTE
/* Scroll Back To Top Button CSS */
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
