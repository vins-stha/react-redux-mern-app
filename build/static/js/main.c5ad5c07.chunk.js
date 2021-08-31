(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,t,c){},33:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},68:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(16),o=c.n(a),r=(c(42),c.p,c(43),c(3)),l=c(10),i=c.n(l),j=c(2),d=(c(31),c(1));function u(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=(t[0],t[1]),s=Object(n.useState)(""),a=Object(r.a)(s,2),o=a[0],l=a[1],u=Object(n.useState)(""),b=Object(r.a)(u,2),h=b[0],O=b[1];Object(j.e)();return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"projectTitle",children:"First MERN project"}),Object(d.jsx)("h3",{children:"Add new users"}),Object(d.jsxs)("div",{className:"userInputs",children:[Object(d.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Name",value:o,onChange:function(e){l(e.target.value)}}),Object(d.jsx)("input",{type:"text",name:"city",className:"form-control",placeholder:"city",value:h,onChange:function(e){O(e.target.value)}}),Object(d.jsx)("input",{type:"button",className:"btn btn-success",onClick:function(e){var t={name:o,city:h};c(t),i.a.post("http://localhost:1000/users/addName",t).then((function(e){console.log("res=>",e.data),window.location="/users"})).catch((function(e){console.log("errour=>",e)}))},value:"Add user"})]})]})}var b=c(13);function h(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),o=Object(r.a)(a,2),l=(o[0],o[1],Object(n.useState)()),u=Object(r.a)(l,2);u[0],u[1];Object(n.useEffect)((function(){i.a.get("http://localhost:1000/users").then((function(e){console.log("res=>",e.data);var t={name:e.data.name,city:e.data.city};console.log("resp =>",t.name,t.city),console.log("actual response =>",e.data),s(e.data)})).catch((function(e){console.log("errour=>",e)}))}),[]);j.e;var h=c.length>0?c.map((function(e,t){return Object(d.jsxs)("tr",{style:{border:"1px solid black",margin:"10px"},className:"tableData",children:[Object(d.jsx)("td",{scope:"row",children:e.name}),Object(d.jsxs)("td",{scope:"row",children:[e.city," "]}),Object(d.jsxs)("td",{scope:"row",children:[Object(d.jsx)(b.b,{to:"/editUser/".concat(e._id),children:Object(d.jsx)("button",{name:"edit",className:"btn btn-primary",value:"edit",children:"edit"})}),Object(d.jsx)("button",{name:"edit",value:"edit",className:"btn btn-danger",onClick:function(t){!function(e){console.log("ID =",e),i.a.post("http://localhost:1000/users/delete",{id:e}).then((function(e){alert("Deleted!!"),window.location="/users"})).catch((function(e){e&&console.log("Error",e)}))}(e._id)},children:"Delete"})]})]},e._id)})):"[]";return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"projectTitle",children:" MERN project"}),Object(d.jsx)("h3",{children:"Users"}),Object(d.jsxs)("table",{className:"table table-hover",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"Username"}),Object(d.jsx)("th",{scope:"col",children:"City"}),Object(d.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(d.jsx)("tbody",{children:h})]})]})}function O(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=(t[0],t[1]),s=Object(n.useState)(""),a=Object(r.a)(s,2),o=a[0],l=a[1],u=Object(n.useState)(""),b=Object(r.a)(u,2),h=b[0],O=b[1],p=Object(j.f)(),m=Object(j.e)();return Object(n.useEffect)((function(){console.log("params::",p);p.id;i.a.post("http://localhost:1000/users/findUser",{user_id:p.id}).then((function(e){console.log("Edit response=>",e.data[0].name),l(e.data[0].name),O(e.data[0].city)})).catch((function(e){console.log("errour=>",e)}))}),[]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"projectTitle",children:"First MERN project"}),Object(d.jsx)("h3",{children:"Edit"}),Object(d.jsxs)("div",{className:"userInputs",children:[Object(d.jsx)("span",{className:"pre",children:Object(d.jsxs)("pre",{children:["Previously: ",o]})}),Object(d.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Name",value:o,onChange:function(e){l(e.target.value)}}),Object(d.jsx)("span",{className:"pre",children:Object(d.jsxs)("pre",{children:["Previously: ",h]})}),Object(d.jsx)("input",{type:"text",name:"city",className:"form-control",placeholder:"city",value:h,onChange:function(e){O(e.target.value)}}),Object(d.jsx)("input",{type:"button",className:"btn btn-success",onClick:function(e){var t={name:o,city:h,id:p.id};c(t),i.a.post("http://localhost:1000/users/updateUser",t).then((function(e){console.log("res=>",e.data),m.go(-1)})).catch((function(e){console.log("errour=>",e)}))},value:"Update"})]})]})}c(68);function p(){var e=Object(n.useState)(["toDo","Contact","Products","Genre","Popularity","Popularity","AddUser","Users"]),t=Object(r.a)(e,2),c=t[0],s=(t[1],c.map((function(e,t){return Object(d.jsx)("a",{className:"navItems",href:"/".concat(e),children:e},e.id)})));return Object(d.jsx)("div",{className:"row justify-content-center",children:Object(d.jsx)("div",{className:"nav",children:s})})}var m=c(37),x=c(36),f=c(12),v={tasks:[]};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return Object(f.a)(Object(f.a)({},e),{},{tasks:[].concat(Object(x.a)(e.tasks),[t.payload])});case"DELETE_TASK":return Object(f.a)(Object(f.a)({},e),{},{tasks:e.tasks.filter((function(e){return e!=t.payload}))});case"UPDATE_TASK":return Object(f.a)(Object(f.a)({},e),{},{tasks:e.tasks.map((function(e){return e==t.payload.old&&(e=t.payload.updated),e}))})}return e},N=c(9);c(33);function g(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(N.b)(),o=Object(N.c)((function(e){return e}));return Object(d.jsxs)("div",{className:"addTask row justify-content-center",children:[Object(d.jsx)("h2",{children:"Add new task"}),Object(d.jsxs)("div",{className:"add-controls",children:[Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Task",value:c,onChange:function(e){s(e.target.value)}}),Object(d.jsx)("button",{className:"btn btn-primary Add",onClick:function(){a({type:"ADD_TASK",payload:c}),console.log(o.tasks)},children:"Add"})]})]})}function k(){var e=Object(N.c)((function(e){return e})),t=Object(N.b)(),c=e.tasks,s=Object(n.useState)("none"),a=Object(r.a)(s,2),o=a[0],l=a[1],i=Object(n.useState)(""),j=Object(r.a)(i,2),u=j[0],b=j[1];var h=c.map((function(e,c){return Object(d.jsxs)("div",{className:"item_container",children:[Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("h5",{className:"taskname",children:e}),Object(d.jsx)("input",{type:"text",className:"form-control editBox",style:{display:o},onChange:function(e){b(e.target.value)}}),Object(d.jsx)("button",{className:"btn btn-primary updateButton",style:{display:o},onClick:function(c){!function(e){l("none"),console.log("old = ",e,"new",u),t({type:"UPDATE_TASK",payload:{old:e,updated:u}})}(e)},children:"Update"})]}),Object(d.jsxs)("div",{className:"item_controller",children:[Object(d.jsx)("button",{className:"btn btn-danger",style:{marginRight:"0.5rem"},onClick:function(n){!function(e,c){console.log("delete=>",e,c),t({type:"DELETE_TASK",payload:e})}(e,c)},children:"Delete"}),Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(e){l("inline")},children:"Edit"})]})]})}));return Object(d.jsx)("div",{className:"taskList_container",children:h})}c(73);function S(){var e=Object(N.c)((function(e){return e}));return Object(d.jsxs)("div",{className:"contents",children:[Object(d.jsx)("h2",{children:"Project : React-Redux Todo List"}),Object(d.jsx)("div",{className:"todListCount",children:Object(d.jsxs)("h2",{children:["Number of tasks in the lists : ",e.tasks.length," "]})})]})}function C(){var e=Object(m.a)(y);return Object(d.jsxs)(N.a,{store:e,children:[Object(d.jsx)(S,{}),Object(d.jsx)(g,{}),Object(d.jsx)(k,{})]})}var A=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{}),Object(d.jsxs)(b.a,{children:[Object(d.jsx)(j.a,{path:"/addUser",component:u,exact:!0}),Object(d.jsx)(j.a,{path:"/editUser/:id",component:O,exact:!0}),Object(d.jsx)(j.a,{path:"/users",component:h,exact:!0}),Object(d.jsx)(j.a,{path:"/toDo",component:C,exact:!0})]})]})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),E()}},[[74,1,2]]]);
//# sourceMappingURL=main.c5ad5c07.chunk.js.map