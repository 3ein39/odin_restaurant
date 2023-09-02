let body = document.querySelector('body');

// create header and append it to body
let header = document.createElement('header');
let h1 = document.createElement('h1');
h1.innerText = 'Welcome to Restaurant Page';
header.appendChild(h1);

let p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?';
header.appendChild(p);

body.appendChild(header);
// end of header

// create the content div
let contentDiv = document.createElement('div');


// append img to content div
let img = document.createElement('img');
img.src = null;
img.alt = 'restaurant';
contentDiv.appendChild(img);

// section 1
let section1 = document.createElement('section');
let h2 = document.createElement('h2');
h2.innerText = 'About Us';
section1.appendChild(h2);

let p1 = document.createElement('p');
p1.innerText = "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?";
section1.appendChild(p1);

contentDiv.appendChild(section1);

// section 2
let section2 = document.createElement('section');
let h22 = document.createElement('h2');
h22.innerText = 'Our Menu';
section2.appendChild(h22);

let p2 = document.createElement('p');
p2.innerText = "explore our delectable menu offerings that will surely satisfy your cravings";
section2.appendChild(p2);

contentDiv.appendChild(section2);

body.appendChild(contentDiv);

// append footer to body
let footer = document.createElement('footer');
let p3 = document.createElement('p');
p3.innerText = '&copy; 2023 Restaurant Page. All rights reserved.';
footer.appendChild(p3);

body.appendChild(footer);

