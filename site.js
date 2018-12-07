var html = document.querySelector('html');
html.classList.remove('nojs');
html.classList.add('js');

// Ultimately, we want to insert this HTML before
// the unordered list in the `<nav>` element:
// <h2><a href="#navigation">Menu</a></h2>

// GOAL:
// <nav class="menu">
//  <h2><a href="#navigation">Menu</a></h2>
//  <ul>
//    <li><a href="index.html">Home</a></li>

var navigation = document.querySelector('.menu');
var nav_list = document.querySelector('.nav-list');

// Build the outer heading element
// <h2></h2>
var nav_heading = document.createElement('h2');

// Build the inner anchor/link element
// <a href="#null", id="menu-button", tabindex=1>Menu</a>
var menu_link = document.createElement('a');
menu_link.textContent = 'Menu';
menu_link.setAttribute('id','menu-button');
menu_link.setAttribute('href','#null');
menu_link.setAttribute('tabindex', '1');

// Append the menu_link to the heading element
// <h2> <a href="#null", id="menu-button", tabindex=1>Menu</a> </h2>
nav_heading.append(menu_link);

// Finally, append the nav_heading to #navigation
// <nav class="menu">
//  <h2><a href="#navigation">Menu</a></h2>
//  <ul>
//    <li><a href="index.html">Home</a></li>
navigation.insertBefore(nav_heading,nav_list);

// Listen for clicks on #menu-button and toggle the
// visible class
var menu_button = document.querySelector('#menu-button');
menu_button.addEventListener('click', function(e) {
  nav_list.classList.toggle('visible');
  e.preventDefault();
});
