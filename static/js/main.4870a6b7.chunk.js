(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(2),r=a.n(o),i=a(3),s=a(4),l=a(7),m=a(5),d=a(8),u=function(e){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar sticky-top navbar-light bg-light"},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Clicky Game"),c.a.createElement("span",{className:"nav justify-content-center"},"Click an image to begin!"),c.a.createElement("span",{className:"nav justify-content-end"},"Score: ",e.score," | Top Score: ",e.topScore," "))))},h=function(){return c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container text-center"},c.a.createElement("h1",{className:"display-4"},"Clicky Game!"),c.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any more than once!")))},k=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-8"},c.a.createElement("div",{className:"row"},e.children))))},p=function(e){return c.a.createElement("div",{className:"col-4 text-center my-2"},c.a.createElement("img",{src:e.url,alt:e.name,onClick:function(){return e.handleClick(e.name,e.characterData)}}))},g=a(6),v=function(){return c.a.createElement("footer",{className:"footer py-4"},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"text-muted"},"This is the footer!")))},b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={characters:g,clicked:[],score:0,topScore:0},a.handleClick=function(e,t){console.log(e),a.state.clicked.indexOf(t)<0?(a.state.clicked.push(t),a.setState({score:a.state.score+1},function(){a.state.score>a.state.topScore&&a.setState({topScore:a.state.topScore+1})}),a.setState({characters:a.state.characters.sort(function(e,t){return.5-Math.random()})}),console.log(a.state.clicked)):(a.setState({clicked:[]}),a.setState({score:0}),a.setState({characters:a.state.characters.sort(function(e,t){return.5-Math.random()})}),console.log(a.state.clicked))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(u,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement(h,null),c.a.createElement(k,null,this.state.characters.map(function(t){return c.a.createElement(p,{handleClick:e.handleClick,id:t.id,key:t.id,url:t.url,name:t.name,characterData:t})})),c.a.createElement(v,null))}}]),t}(c.a.Component);r.a.render(c.a.createElement(b,null),document.getElementById("root"))},6:function(e){e.exports=[{id:1,name:"All Might",url:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/0/0a/All_Might_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619041830"},{id:2,name:"Deku",url:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/2/25/Izuku_Midoriya_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619050117"},{id:3,name:"Bakugo",url:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/c/cd/Katsuki_Bakugo_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619050033"},{id:4,name:"Uraraka",url:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/78/Ochaco_Uraraka_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619044306"},{id:5,name:"Iida",url:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/7d/Tenya_Iida_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619044125"},{id:6,name:"Shoto",url:"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/7f/Shoto_Todoroki_Portrait.png/revision/latest/scale-to-width-down/135?cb=20160619045658"}]},9:function(e,t,a){e.exports=a(15)}},[[9,2,1]]]);
//# sourceMappingURL=main.4870a6b7.chunk.js.map