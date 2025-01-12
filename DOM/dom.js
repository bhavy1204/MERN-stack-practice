// let a=prompt("ENter Name ");
// let b=window.document.getElementById("meow");
// b.innerText=a;

//-------------------------------------------------------------------
// let sm = document.getElementsByClassName("oldImg");
// for (let i = 0; i < sm.length; i++) {
//   setTimeout(() => {
//     sm[i].src = "spiderman_img.png";
//   }, 5000);
// }
//-------------------------------------------------------------------

//WE selct elemsts by querySelector and querySelectorAll to select elemts like CSS. We can select by tagname, class or id in it. querySelector selects the first occurence of that elemt in the page like first "p" paragrapgh whereas querySelectorAll selects all the occureence of that elemt like all p tags in the HTML document, QuerySelectorAll givess us a node list and then from that we have to select the elemts by index like arrys:-

// document.queryselctor('p').innerText="Meow";
// document.queryselctorAll('p')[0].innerText="Meow";

//--------------------------------------------------------------------------------

//In similar manner we have selectElementById, selctElementByTagName, selectElementByClassName and we use the id, tag and class name in them to select the desired elemnt but as discused earlie we will use query selector the most. So no biggie.

//-----------------------------------------------------------------------------
//DOM manipulation
//COMMON PROPERTIES WE WILL USE FRQUENTLY------
//TEXT AND CONTENT BASED PROP.
//1. InnerText : text on screen,it understand everything as text cant use yags

//2. InnerHTML : html text/markupp 'a','b'...etc. can use tags in maipulation . Can use back ticks to just maipulate the tags only and j=keeping the text content as it is.

//3. InnerCONTENT : full content with all hidden like '\n','hidden contens/display:none'..etc or (jesa markup me text tha without tags).

//-----------------------------------------------------------------------------------

//Next we did the mainpulation of text content like textContent,InnerHTML,Innertext etc.

//We did it by :-
// let p=document.querySelector("p");
// p.innerText="VaL";
// p.innerHTML="VaL";
// p.TextContent=`<b>${p.innerText}</b>;

//------------------------------------------------------------------------------

//Manipulating Attributes

//TO get value
//obj.getAttribut(attr);

//To change value
//obj.setAttrivute(attr,val);

// like Id, class, style , src in imgaes etc
// let i= document.querySelector('img');
// undefined
// i
// <img src=​"spiderman_img.png" id=​"mainImg">​
// i.getAttribute('id')
// 'mainImg'
// i.setAttribute('id',"MEOW");

// let i=document.querySelector("img");

// undefined

// i.setAttribute('src','creation_1.png');

//--------------------------------------------------------------------------------

//MANIPULATING STYLE
// let i=document.querySelector("img");

// undefined
// console.dir(i);

// undefined
// i.style

// CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

// i.style.border='10px solid black';
// '10px solid black'

// i.style.borderRadius='10px';
// '10px'

// i.style.margin="auto"
// 'auto'

// i.style.margin="center"
// 'center'

// i.style.margin="100px"
// '100px'

// let heading = document.querySelectorAll("h1");
// undefined
// heading.style.color="red";
// VM1613:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:20
// (anonymous) @ VM1613:1Understand this errorAI
// let heading = document.querySelector("h1");
// undefined
// heading.style.colo
// undefined
// heading.style.color="neon"
// 'neon'
// heading.style.color="red";
// 'red'
// heading.style.backgroundColor="yellow";
// 'yellow'
// heading.style.marginLeft="auto"
// 'auto'
// heading.style.marginLeft="100px"
// '100px'
// heading.style.marginRight="auto"
// 'auto'
// heading.style.marginRight="200px"
// '200px'

// let abc = document.querySelectorAll(".box a");

// for (let i = 0; i < abc.length; i++) {
//     abc[i].style.color = "red";
// }

// for(a of abc){
//     a.style.color="purple";
// }

//This style is only useful for accessing the inline css... We could not access the ccontent in the CSS file from this style manipulation.

//Now to solve this ISSUE we use class LIST.

//----------------------------------------------------------------------------

//CLASS LIST MANIPULATION

// a.classList.add("Myclass");
// undefined
// a.classList.re
// undefined
//         a.classList.remove("Myclass");
// undefined
//         a.classList.toggle("Myclass");
// true
//         a.classList.toggle("Myclass");
// false
//         a.classList.toggle("Myclass");
// true
//         a.classList.contains("Myclass");
// true
//         a.classList.toggle("Myclass");
// false
//         a.classList.contains("Myclass");
// false
// let img = document.querySelector('img')
// undefined
// img.classList


//---------------------------------------------------------------------

//NAVIGATION

//to go from one eelmet to other with one element
//Major 3 types:-

//1.parentElemet(single)

//2. children(multiple)

//3. previousElementSibling / nextElementSibling

// let p = document.querySelector('p');
// undefined

// p.children
// HTMLCollection(6) [b, a, b, b, a, a]0:

// p.nextSibling
// #textassignedSlot: 

// p.previousElementSibling
// <h2>​About​</h2>​

// p.nextElementSibling
// <div class=​"box" id=​"meow">​…​</div>
// ​
// p.parentElement
// <body>​…​</body>​

//-----------------------------------------------------------------

//ADDING AND DELETING ELEMENTS 

//Document.createElement('element');

//to add or delete elemnt from page we have:-
//1. appendChild(element);

//2. append(element); 
// 3. prepend(element);
// 4. insertAdjacent(where,element);
//   4.1. 

// let p = document.createElement('p');
// undefined

// p.innerText="<<< HELLO I AM A PURPLE CAT :) >>>";
// '<<< HELLO I AM A PURPLE CAT :) >>>'

// console.dir('p');
// undefined

// let body= document.querySelector('body');
// undefined

// body.append(p);
// undefined

// body.prepend(p);
// undefined

// body.appendChild(p)
// <p>​<<< HELLO I AM A PURPLE CAT :) >>>​</p>​

// let para = document.querySelector('p');
// undefined

// para.appendChild(p);
// <p>​<<< HELLO I AM A PURPLE CAT :) >>>​</p>​

// para.insertAdjacentElement('beforebegin',p);
// <p>​<<< HELLO I AM A PURPLE CAT :) >>>​</p>​

// para.insertAdjacentElement('afterbegin',p);
// <p>​<<< HELLO I AM A PURPLE CAT :) >>>​</p>​

// para.insertAdjacentElement('beforebegin',p);
// <p>​<<< HELLO I AM A PURPLE CAT :) >>>​</p>​

// para.insertAdjacentElement('afterbegin',p);
// <p>​<<< HELLO I AM A PURPLE CAT :) >>>​</p>
// ​
// para.insertAdjacentElement('afterend',p);
// <p>​<<< HELLO I AM A PURPLE CAT :) >>>​</p>​

// para.insertAdjacentElement('beforeend',p);
// <p>​<<< HELLO I AM A PURPLE CAT :) >>>​</p>​

// body.removeChild(p);
// <p>​…​</p>​

// let a = document.querySelector('img');
// undefined

// a.remove();