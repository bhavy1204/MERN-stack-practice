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
