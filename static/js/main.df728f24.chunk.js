(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{413:function(e,t,s){},418:function(e,t,s){},419:function(e,t,s){},420:function(e,t,s){},421:function(e,t,s){},422:function(e,t,s){},423:function(e,t,s){"use strict";s.r(t);var i=s(4),c=s.n(i),a=s(76),n=s.n(a),l=s(19),r=(s(88),s(89),s(77)),o=s(78),j=s.n(o),h=s(2);function m(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(r.a)(e.current,{showCursor:!0,backDelay:1500,strings:["Developer","Creator"]})}),[]),Object(h.jsxs)("div",{className:"intro",id:"intro",children:[Object(h.jsx)("div",{className:"left",children:Object(h.jsx)(j.a,{className:"particles",params:{particles:{number:{value:50},size:{value:5}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}})}),Object(h.jsx)("div",{className:"right",children:Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("h2",{children:"Hi there, i'm"}),Object(h.jsx)("h1",{children:"Michael Haines"}),Object(h.jsxs)("h3",{children:["Web ",Object(h.jsx)("span",{ref:e})]}),Object(h.jsx)("div",{className:"downarrow",children:Object(h.jsx)("a",{href:"#aboutme",children:Object(h.jsx)("img",{src:"./assets/down-arrow.png"})})})]})})]})}s(413);var b=s(436),d=s(437);function u(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(h.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsx)("a",{href:"#intro",className:"logo",children:"MH"}),Object(h.jsxs)("div",{className:"itemContainer",children:[Object(h.jsx)(b.a,{className:"icon"}),Object(h.jsx)("span",{children:"0491684657"})]}),Object(h.jsxs)("div",{className:"itemContainer",children:[Object(h.jsx)(d.a,{className:"icon"}),Object(h.jsx)("span",{children:"michaelhaines@gmail.com"})]})]}),Object(h.jsx)("div",{className:"right",children:Object(h.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(h.jsx)("span",{className:"line1"}),Object(h.jsx)("span",{className:"line2"}),Object(h.jsx)("span",{className:"line3"})]})})]})})}s(418),s(419);function p(e){var t=e.title,s=e.active,i=e.setselected,c=e.id;return Object(h.jsx)("li",{className:s?"portfolioList active":"portfolioList",onClick:function(){return i(c)},children:t})}var O=[{id:1,title:"Battleships",img:"./assets/battleships.png",link:"https://github.com/michaelhaines01/Battle-ships.git",live:"https://michaelhaines01.github.io/Battle-ships/"}],g=[{id:2,title:"Etch o sketch",img:"./assets/Etch-a-sketch.png",link:"https://github.com/michaelhaines01/Etch-A-Sketch.git",live:"https://michaelhaines01.github.io/Etch-A-Sketch/Etch-A-Sketch.html"}],x=[{id:3,title:"Calculator",img:"./assets/Calculator.png",link:"https://github.com/michaelhaines01/Calculator/tree/master/calculator",live:"https://michaelhaines01.github.io/Calculator/calculator/calculator.html"}],v=[{id:4,title:"Memory game",img:"./assets/memorygame.png",link:"https://github.com/michaelhaines01/Memory-game.git",live:"https://michaelhaines01.github.io/Memory-game"}],f=[{id:5,title:"Weather App",img:"./assets/weather.png",link:"https://github.com/michaelhaines01/Weather-app.git",live:"https://michaelhaines01.github.io/Weather-app/weather.html"}],N=[{id:6,title:"Tic tac toe",img:"./assets/tictactoe.png",link:"https://github.com/michaelhaines01/Tic-tac-toe.git",live:"https://michaelhaines01.github.io/Tic-tac-toe/tictactoe.html"}],k=[{id:7,title:"Shopping cart",img:"./assets/Shopping-cart.png",link:"https://github.com/michaelhaines01/Shopping-cart.git",live:"http://michaelhaines01.github.io/Shopping-cart"}];function y(){var e=Object(i.useState)(1),t=Object(l.a)(e,2),s=t[0],c=t[1],a=Object(i.useState)([]),n=Object(l.a)(a,2),r=n[0],o=n[1];Object(i.useEffect)((function(){switch(s){case 1:o(O);break;case 2:o(k);break;case 3:o(v);break;case 4:o(f);break;case 5:o(x);break;case 6:o(g);break;case 7:o(N);break;default:o(O)}}),[s]);return Object(h.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(h.jsx)("h1",{children:"Portfolio"}),Object(h.jsx)("ul",{children:[{id:1,title:"Battleships"},{id:2,title:"Shopping cart"},{id:3,title:"Memory game"},{id:4,title:"Weather App"},{id:5,title:"Calculator"},{id:6,title:"Etch o sketch"},{id:7,title:"Tic tac toe"}].map((function(e){return Object(h.jsx)(p,{title:e.title,active:s===e.id,setselected:c,id:e.id})}))}),Object(h.jsx)("div",{className:"container",children:r.map((function(e){return Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("img",{src:e.img}),Object(h.jsxs)("div",{className:"button-container",children:[Object(h.jsx)("button",{onClick:function(){window.open(e.link)},children:"Code"}),Object(h.jsx)("button",{onClick:function(){window.open(e.live)},children:"Demo"})]})]})}))})]})}s(420);function w(){return Object(h.jsxs)("div",{className:"aboutme",id:"aboutme",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsxs)("div",{className:"about-container",children:[Object(h.jsx)("h1",{children:"About me"}),Object(h.jsx)("p",{children:"A former electrician and telecommunication technician, I left that field in search of something I am passionate about and that challenges me. 6 years of travelling and starting surfboard over 40 countries later, I arrived back in Australia in March 2020 and set out on my quest to learn computer science. I quickly fell in love with programming. A perfect mix of tech, logical problem solving and creativity. That is why more than a year later, I am still on my learning journey, and I now feel, I am ready to share my skills with world! I enjoy spending the rest of my time enjoying life on the Peninsula, surfing, scuba diving and riding my motorbike."})]}),Object(h.jsxs)("div",{className:"skills-container",children:[Object(h.jsx)("h3",{children:"Skills"}),Object(h.jsx)("img",{src:"./assets/css350.png",alt:"CSS"}),Object(h.jsx)("img",{src:"./assets/django50.png",alt:""}),Object(h.jsx)("img",{src:"./assets/git50.png",alt:""}),Object(h.jsx)("img",{src:"./assets/html50.png",alt:""}),Object(h.jsx)("img",{src:"./assets/javascriptlogo50.png",alt:""}),Object(h.jsx)("img",{src:"/assets/python50.png",alt:""}),Object(h.jsx)("img",{src:"./assets/reactnative50.png",alt:""}),Object(h.jsx)("img",{src:"./assets/sass50.png",alt:""})]})]}),Object(h.jsx)("div",{className:"right",children:Object(h.jsx)("div",{className:"image-container",children:Object(h.jsx)("img",{src:"./assets/surf-image.jpeg",alt:""})})})]})}s(421);var C=s(80);function S(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),s=t[0],c=t[1];return Object(h.jsxs)("div",{className:"contact",id:"contact",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsxs)("div",{className:"contact-container",children:[Object(h.jsx)("h1",{children:"You can contact me on"}),Object(h.jsx)("div",{className:"section-line"})]}),Object(h.jsxs)("div",{className:"types-container",children:[Object(h.jsxs)("div",{className:"email",children:[Object(h.jsx)("img",{src:"./assets/email-64.png",alt:""}),Object(h.jsx)("h3",{children:" michaelhaines01@gmail.com"})]}),Object(h.jsxs)("div",{className:"phone",children:[Object(h.jsx)("img",{src:"./assets/phone60.png",alt:""}),Object(h.jsx)("h3",{children:"0491684657"})]}),Object(h.jsxs)("div",{className:"github",children:[Object(h.jsx)("a",{onClick:function(){window.open("https://github.com/michaelhaines01")},children:Object(h.jsx)("img",{src:"./assets/github60.png",alt:""})}),Object(h.jsx)("h3",{children:"Github"})]}),Object(h.jsxs)("div",{className:"resume",children:[Object(h.jsx)("a",{onClick:function(){window.open("./assets/documents/Michael_Haines_Resume.PDF")},children:Object(h.jsx)("img",{src:"./assets/cv-64.png",alt:""})}),Object(h.jsx)("h3",{children:"Resume"})]})]})]}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsx)("h1",{children:"Leave a message"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0),C.a.sendForm("service_2ms3kvj","template_lvf25n5",e.target,"user_cFzYbE09xtS8g31CTIIxF").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:[Object(h.jsx)("input",{type:"text ",placeholder:"Name",name:"name"}),Object(h.jsx)("input",{type:"text ",placeholder:"Email",name:"email"}),Object(h.jsx)("textarea",{placeholder:"Message",name:"message"}),Object(h.jsx)("button",{type:"submit",children:"Sent"}),s&&Object(h.jsx)("span",{children:"Thanks, I'll reply ASAP :)"})]})]})]})}s(422);function M(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(h.jsx)("div",{className:"menu "+(t&&"active"),children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{onClick:function(){return s(!1)},children:Object(h.jsx)("a",{href:"#intro",children:"Intro"})}),Object(h.jsx)("li",{onClick:function(){return s(!1)},children:Object(h.jsx)("a",{href:"#aboutme",children:"About me"})})," ",Object(h.jsx)("li",{onClick:function(){return s(!1)},children:Object(h.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(h.jsx)("li",{onClick:function(){return s(!1)},children:Object(h.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var I=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),s=t[0],c=t[1];return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(u,{menuOpen:s,setMenuOpen:c}),Object(h.jsx)(M,{menuOpen:s,setMenuOpen:c}),Object(h.jsxs)("div",{className:"sections",children:[Object(h.jsx)(m,{}),Object(h.jsx)(w,{}),Object(h.jsx)(y,{}),Object(h.jsx)(S,{})]})]})};n.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root"))},88:function(e,t,s){},89:function(e,t,s){}},[[423,1,2]]]);
//# sourceMappingURL=main.df728f24.chunk.js.map