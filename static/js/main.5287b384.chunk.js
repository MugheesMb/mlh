(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{161:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n(0),a=n(39),r=n.n(a),s=n(32),o=n(19),l=(n(160),n(10)),d=n(180),j=(n(161),n(188)),A=n(185),u=n(138),h=n(183),b=n(187),O=n(184),m=n.p+"static/media/culture.db9545f2.jpg",p={filter:"brightness(30%)"},x={position:"absolute",bottom:"5%",left:"5%",width:"100%",height:"auto",color:"white"},g=function(e){var t=e.event;return Object(i.jsxs)(A.a.Group,{children:[Object(i.jsxs)(A.a,{basic:!0,attached:"top",style:{padding:"0"},children:[Object(i.jsx)(u.a,{src:m,fluid:!0,style:p}),Object(i.jsx)(A.a,{basic:!0,style:x,children:Object(i.jsx)(h.a.Group,{children:Object(i.jsx)(h.a,{children:Object(i.jsxs)(h.a.Content,{children:[Object(i.jsx)(b.a,{size:"huge",content:t.title,style:{color:"white"}}),Object(i.jsx)("p",{children:t.date}),Object(i.jsxs)("p",{children:["Hosted by ",Object(i.jsx)("strong",{children:t.hostedBy})]})]})})})})]}),Object(i.jsx)(A.a,{attached:"bottom",clearing:!0,children:Object(i.jsx)(O.a,{as:o.b,to:"/manage/".concat(t.id),color:"orange",floated:"right",children:"Manage Event"})})]})},v=n(80),y=function(e){var t=e.event;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(A.a.Group,{children:[Object(i.jsx)(A.a,{attached:"top",children:Object(i.jsxs)(j.a,{children:[Object(i.jsx)(j.a.Column,{width:1,children:Object(i.jsx)(v.a,{size:"large",color:"teal",name:"info"})}),Object(i.jsx)(j.a.Column,{width:15,children:Object(i.jsxs)("p",{children:[t.description," "]})})]})}),Object(i.jsx)(A.a,{attached:!0,children:Object(i.jsxs)(j.a,{verticalAlign:"middle",children:[Object(i.jsx)(j.a.Column,{width:1,children:Object(i.jsx)(v.a,{name:"calendar",size:"large",color:"teal"})}),Object(i.jsx)(j.a.Column,{width:15,children:Object(i.jsx)("span",{children:t.date})})]})}),Object(i.jsx)(A.a,{attached:!0,children:Object(i.jsxs)(j.a,{verticalAlign:"middle",children:[Object(i.jsx)(j.a.Column,{width:1,children:Object(i.jsx)(v.a,{name:"marker",size:"large",color:"teal"})}),Object(i.jsx)(j.a.Column,{width:11,children:Object(i.jsx)("span",{children:t.venue})})]})})]})})},C=function(e){var t=e.event;e.attendee;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(A.a,{textAlign:"center",style:{border:"none"},attached:"top",secondary:!0,inverted:!0,color:"teal",children:"Hosted By"}),Object(i.jsx)(A.a,{attached:!0,children:Object(i.jsx)(h.a.Group,{relaxed:!0,divided:!0,children:Object(i.jsx)(h.a,{style:{position:"relative"},children:Object(i.jsx)(h.a.Content,{verticalAlign:"middle",children:Object(i.jsx)(h.a.Header,{as:"h3",floated:"center",children:Object(i.jsx)("span",{children:t.hostedBy})})})})})})]})},R=function(e){var t=e.match,n=Object(s.c)((function(e){return e.event.events.find((function(e){return e.id===t.params.id}))}));return Object(i.jsxs)(j.a,{children:[Object(i.jsxs)(j.a.Column,{width:10,children:[Object(i.jsx)(g,{event:n}),Object(i.jsx)(y,{event:n})]}),Object(i.jsx)(j.a.Column,{width:6,children:Object(i.jsx)(C,{attendee:n.attendees,event:n})})]})},D=n(103),I=n(23),J=n(139),E=n(136),f=n.n(E),L=n(181),M="CREATE_EVENT",w="UPDATE_EVENT",F="DELETE_EVENT";var G=function(e){var t=e.match,n=e.history,a=Object(s.b)(),r=Object(s.c)((function(e){return e.event.events.find((function(e){return e.id===t.params.id}))})),l=null!==r&&void 0!==r?r:{title:"",category:"",description:"",city:"",venue:"",date:""},d=Object(c.useState)(l),j=Object(J.a)(d,2),u=j[0],h=j[1];var m=function(e){var t=e.target,n=t.name,i=t.value;h(Object(I.a)(Object(I.a)({},u),{},Object(D.a)({},n,i)))};return Object(i.jsxs)(A.a,{clearing:!0,children:[Object(i.jsx)(b.a,{content:r?"Edit the event":"Create new event"}),Object(i.jsxs)(L.a,{onSubmit:function(){var e;a(r?(e=Object(I.a)(Object(I.a)({},r),u),{type:w,payload:e}):function(e){return{type:M,payload:e}}(Object(I.a)(Object(I.a)({},u),{},{id:f()(),hostedBy:"Bob",attendees:[],hostPhotoURL:"/assets/user.png"}))),n.push("/events")},children:[Object(i.jsx)(L.a.Field,{children:Object(i.jsx)("input",{type:"text",placeholder:"Event title",name:"title",value:u.title,onChange:function(e){return m(e)}})}),Object(i.jsx)(L.a.Field,{children:Object(i.jsx)("input",{type:"text",placeholder:"Category",name:"category",value:u.category,onChange:function(e){return m(e)}})}),Object(i.jsx)(L.a.Field,{children:Object(i.jsx)("input",{type:"text",placeholder:"Description",name:"description",value:u.description,onChange:function(e){return m(e)}})}),Object(i.jsx)(L.a.Field,{children:Object(i.jsx)("input",{type:"text",placeholder:"city",name:"city",value:u.city,onChange:function(e){return m(e)}})}),Object(i.jsx)(L.a.Field,{children:Object(i.jsx)("input",{type:"text",placeholder:"Venue",name:"venue",value:u.venue,onChange:function(e){return m(e)}})}),Object(i.jsx)(L.a.Field,{children:Object(i.jsx)("input",{type:"date",placeholder:"Date",name:"date",value:u.date,onChange:function(e){return m(e)}})}),Object(i.jsx)(O.a,{type:"submit",floated:"right",positive:!0,content:"Submit"}),Object(i.jsx)(O.a,{as:o.b,to:"/events",type:"submit",floated:"right",content:"Cancel"})]})]})},T=function(e){var t=e.event,n=Object(s.b)();return Object(i.jsxs)(A.a.Group,{children:[Object(i.jsx)(A.a,{children:Object(i.jsx)(h.a.Group,{children:Object(i.jsxs)(h.a,{children:[Object(i.jsx)(h.a.Image,{size:"tiny",circular:!0,src:"https://randomuser.me/api/portraits/men/".concat(t.id,".jpg")}),Object(i.jsxs)(h.a.Content,{children:[Object(i.jsx)(h.a.Header,{content:t.title}),Object(i.jsxs)(h.a.Description,{children:["Hosted by ",t.hostedBy]})]})]})})}),Object(i.jsx)(A.a,{children:Object(i.jsxs)("span",{children:[Object(i.jsx)(v.a,{name:"clock"})," ",t.date,Object(i.jsx)(v.a,{name:"marker"})," ",t.venue]})}),Object(i.jsxs)(A.a,{clearing:!0,children:[Object(i.jsx)("div",{children:t.description}),Object(i.jsx)(O.a,{onClick:function(){return n((e=t.id,{type:F,payload:e}));var e},color:"red",floated:"right",content:"Delete"}),Object(i.jsx)(O.a,{as:o.b,to:"/events/".concat(t.id),color:"teal",floated:"right",content:"View"})]})]})},Z=function(e){var t=e.events;return Object(i.jsx)(i.Fragment,{children:t.map((function(e){return Object(i.jsx)(T,{event:e},e.id)}))})},P=function(){var e=Object(s.c)((function(e){return e.event})).events;return Object(i.jsx)(j.a,{children:Object(i.jsx)(j.a.Column,{width:14,children:Object(i.jsx)(Z,{events:e})})})};n(167);function K(e){var t=e.history;return Object(i.jsx)(A.a,{inverted:!0,textAlign:"center",vertical:!0,className:"masthead",children:Object(i.jsxs)(d.a,{children:[Object(i.jsxs)(b.a,{as:"h1",inverted:!0,children:[Object(i.jsx)(u.a,{size:"massive",src:"data:image/png;base64,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",style:{marginBottom:12}}),"Re-vents"]}),Object(i.jsxs)(O.a,{onClick:function(){return t.push("/events")},size:"huge",inverted:!0,children:["Get started",Object(i.jsx)(v.a,{name:"right arrow",inverted:!0})]})]})})}var U=n(182),k=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(U.a,{inverted:!0,fixed:"top",children:Object(i.jsxs)(d.a,{children:[Object(i.jsxs)(U.a.Item,{as:o.b,to:"/",header:!0,children:[Object(i.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",style:{marginRight:15}}),"Re-vents"]}),Object(i.jsx)(U.a.Item,{as:o.c,to:"/events",name:"Events"}),Object(i.jsx)(U.a.Item,{as:o.c,to:"/createEvent",position:"right",children:Object(i.jsx)(O.a,{positive:!0,inverted:!0,content:"Create Event"})})]})})})};var q=function(){var e=Object(l.e)().key;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l.a,{exact:!0,path:"/",component:K}),Object(i.jsx)(l.a,{path:"/(.+)",render:function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(k,{}),Object(i.jsxs)(d.a,{className:"main",children:[Object(i.jsx)(l.a,{exact:!0,path:"/events",component:P}),Object(i.jsx)(l.a,{path:"/events/:id",component:R}),Object(i.jsx)(l.a,{path:["/createEvent","/manage/:id"],component:G},e)]})]})}})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,189)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))},Y=function(){var e=Object(l.e)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},N=n(55),B=n(137),V=n(114),Q={events:[{id:"1",title:"Trip to Empire State building",date:"2018-03-21",category:"culture",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",city:"NY, USA",venue:"Empire State Building, 5th Avenue, New York, NY, USA",hostedBy:"Bob",hostPhotoURL:"https://randomuser.me/api/portraits/men/20.jpg",attendees:[{id:"a",name:"Bob",photoURL:"https://randomuser.me/api/portraits/men/20.jpg"},{id:"b",name:"Tom",photoURL:"https://randomuser.me/api/portraits/men/22.jpg"}]},{id:"2",title:"Trip to Punch and Judy Pub",date:"2018-03-18",category:"drinks",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",city:"London, UK",venue:"Punch & Judy, Henrietta Street, London, UK",hostedBy:"Tom",hostPhotoURL:"https://randomuser.me/api/portraits/men/22.jpg",attendees:[{id:"a",name:"Bob",photoURL:"https://randomuser.me/api/portraits/men/20.jpg"},{id:"b",name:"Tom",photoURL:"https://randomuser.me/api/portraits/men/22.jpg"}]},{id:"3",title:"Trip to turkey",date:"2019-03-18",category:"drinks",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",city:"London, UK",venue:"Punch & Judy, Henrietta Street, London, UK",hostedBy:"Tom",hostPhotoURL:"https://randomuser.me/api/portraits/men/22.jpg",attendees:[{id:"a",name:"Bob",photoURL:"https://randomuser.me/api/portraits/men/20.jpg"},{id:"b",name:"Tom",photoURL:"https://randomuser.me/api/portraits/men/22.jpg"}]},{id:"4",title:"Trip to america",date:"2022-03-18",category:"drinks",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",city:"London, UK",venue:"Punch & Judy, Henrietta Street, London, UK",hostedBy:"Tom",hostPhotoURL:"https://randomuser.me/api/portraits/men/22.jpg",attendees:[{id:"a",name:"Bob",photoURL:"https://randomuser.me/api/portraits/men/20.jpg"},{id:"b",name:"Tom",photoURL:"https://randomuser.me/api/portraits/men/22.jpg"}]}]};var X=Object(N.combineReducers)({event:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,n=t.type,i=t.payload;switch(n){case M:return Object(I.a)(Object(I.a)({},e),{},{events:[].concat(Object(V.a)(e.events),[i])});case w:return Object(I.a)(Object(I.a)({},e),{},{events:[].concat(Object(V.a)(e.events.filter((function(e){return e.id!==i.id}))),[i])});case F:return Object(I.a)(Object(I.a)({},e),{},{events:Object(V.a)(e.events.filter((function(e){return e.id!==i})))});default:return e}}});var z=Object(N.createStore)(X,Object(B.devToolsEnhancer)()),H=document.getElementById("root");r.a.render(Object(i.jsx)(s.a,{store:z,children:Object(i.jsxs)(o.a,{children:[Object(i.jsx)(Y,{}),Object(i.jsx)(q,{})]})}),H),S()}},[[168,1,2]]]);
//# sourceMappingURL=main.5287b384.chunk.js.map