const menuItems = document.getElementById('menuItems');
const mybutton = document.getElementById('myBtn');
// Modal variables
const modal = document.getElementById('myModal');
const closemodal = document.getElementsByClassName('close')[0];
const btnModal = document.getElementById('openModal');

//User clicks on "Return policy" and invokes the modal page
btnModal.onclick = () => {
  modal.style.display = 'block';
};

// User action on clicking on the close button on modal
closemodal.onclick = () => {
  modal.style.display = 'none';
};

//User action on clicking anywhere outside of the modal page 
window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}



menuItems.style.maxHeight = '0px';

window.onload = function () {
  scrollFunction();
};

const menuToggle = () => {
  if (menuItems.style.maxHeight == '0px') {
    menuItems.style.maxHeight = '200px';
  } else {
    menuItems.style.maxHeight = '0px';
  }
};

window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
};

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
