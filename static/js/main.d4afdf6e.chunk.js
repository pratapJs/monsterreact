(this.webpackJsonpcard=this.webpackJsonpcard||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),s=n.n(c),o=(n(12),n(3)),i=n(4),l=n(6),u=n(5),h=(n(13),n(14),function(e){return r.a.createElement("div",{className:"card-container"},e.monster.name,r.a.createElement("img",{alt:"monster",width:"180",height:"180",src:"https://robohash.org/".concat(e.monster.id,"?set=set2")}))}),m=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(h,{key:e.id,monster:e})})))},d=(n(15),n(16),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n}))}),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={monsters:[],searchField:" "},e.handleChange=function(t){e.setState({searchField:t.target.value})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https:jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement(d,{placeholder:"search monsters",handleChange:this.handleChange}),r.a.createElement(m,{monsters:a}))}}]),n}(a.Component);s.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.d4afdf6e.chunk.js.map