(this["webpackJsonpmy-app-1"]=this["webpackJsonpmy-app-1"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(2),s=t.n(r),i=t(6),c=t(3),o=t(4),m=t(7),u=t(5),d=t(8),p=function(e){var a=e.surname,t=e.gender,n=e.region,r=e.email,s=e.age;return l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,a)),l.a.createElement("li",null,"Email: ",r),l.a.createElement("li",null,"Age: ",s),l.a.createElement("li",null,"Gender: ",t),l.a.createElement("li",null,"Country of origin: ",n))},E=function(e){var a=e.photo;return l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{className:"avatar",src:a,alt:""}))},g=function(e){var a=e.name,t=e.displayDetails,n=e.user,r=e.index,s=e.remove;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"names",onClick:function(){t(n,r)}},a,l.a.createElement("button",{className:"remove",onClick:function(){s(r)}},"remove")))},v=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={allUser:[],selectedUser:[],error:!1,loading:!1,displayBox:!1},t.getData=function(){t.setState({loading:!0}),fetch("http://uinames.com/api/?ext&amount=5").then((function(e){return e.json()})).then((function(e){return t.setState({allUser:e,loading:!1})})).catch((function(e){t.setState({error:!0,loading:!1})}))},t.displayDetails=function(e,a){t.setState({selectedUser:e,displayBox:!0})},t.remove=function(e){var a=Object(i.a)(t.state.allUser);a.splice(e,1),t.setState({allUser:a})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.loading,n=a.error,r=a.allUser,s=a.selectedUser,i=s.photo,c=s.surname,o=s.region,m=s.gender,u=s.email,d=s.age,v=a.displayBox;return t?l.a.createElement("div",{className:"loading"},"Loading..."):n?l.a.createElement("div",{className:"error"},"Oops something went wrong"):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"navbar"},l.a.createElement("button",{onClick:this.getData},"Get Users")),l.a.createElement("div",{className:"parent"},0===this.state.allUser.length?l.a.createElement("div",{className:"no-data"},"there is no data ..."):"",l.a.createElement("div",{className:"details"},v>!1?l.a.createElement("div",{className:"details-child"},l.a.createElement(E,{photo:i}),l.a.createElement(p,{surname:c,region:o,gender:m,email:u,age:d})):null),l.a.createElement("div",{className:"users"},r.map((function(a,t){return l.a.createElement("div",{key:t},l.a.createElement(g,{name:a.name,user:a,index:t,displayDetails:e.displayDetails,remove:e.remove}))})))))}}]),a}(n.Component);t(14);s.a.render(l.a.createElement(v,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.6227be14.chunk.js.map