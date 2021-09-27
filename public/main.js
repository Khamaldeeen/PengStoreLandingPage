const menuItems = document.getElementById('menuItems');
const mybutton = document.getElementById('myBtn');

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
