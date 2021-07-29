(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{22:function(e,c,t){},23:function(e,c,t){},44:function(e,c,t){"use strict";t.r(c);var s=t(2),a=t.n(s),n=t(14),r=t.n(n),i=(t(22),t(23),t(17)),j=t(3),d=t(5),l=t.n(d),o=t(15),b=t(16),O=t.n(b).a.create({baseURL:"https://covid-api.mmediagroup.fr/v1"}),m=function(e){var c=e.toLowerCase(),t=c.charAt(0).toUpperCase()+c.slice(1);return console.log(t),t},x=t(0),u=function(e){return(new Intl.NumberFormat).format(e)},h=function(e){var c,t=e.people_vaccinated,s=e.people_partially_vaccinated,a=e.population,n=e.country,r=e.updated;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"row mt-5",children:[Object(x.jsx)("div",{className:"col-md-4"}),Object(x.jsx)("div",{className:"col-md-4",children:Object(x.jsxs)("table",{className:"table centrado",children:[Object(x.jsx)("thead",{className:"table-head",children:Object(x.jsx)("tr",{children:Object(x.jsxs)("td",{colSpan:2,children:[" ",n," "]})})}),Object(x.jsxs)("tbody",{className:"table-dark",children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Population"}),Object(x.jsx)("td",{children:u(a)})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Vaccinated"}),Object(x.jsx)("td",{children:u(t)})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Partially vaccinated"}),Object(x.jsx)("td",{children:u(s)})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Updated"}),Object(x.jsx)("td",{children:(c=r,c.split(" ")[0])})]})]})]})}),Object(x.jsx)("div",{className:"col-md-4"})]})})},v=function(e){var c=e.state;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-4"}),Object(x.jsx)("div",{className:"col-md-4",children:c?Object(x.jsxs)("div",{className:"alert alert-info mt-5",children:[Object(x.jsx)("div",{children:Object(x.jsx)("strong",{children:"Processing..."})}),Object(x.jsx)("div",{className:"spinner"})]}):Object(x.jsx)("div",{children:" "})}),Object(x.jsx)("div",{className:"col-md-4"})]})})},p=function(e){var c=e.result,t=e.processing;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"row mt-5",children:[Object(x.jsx)("div",{className:"col-md-4"}),Object(x.jsx)("div",{className:"col-md-4",children:c&&!t?Object(x.jsx)("div",{className:"alert alert-danger",children:" Not found. "}):Object(x.jsx)("div",{})}),Object(x.jsx)("div",{className:"col-md-4"})]})})},N=function(){var e=function(){var e=Object(s.useState)(),c=Object(j.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(!1),r=Object(j.a)(n,2),i=r[0],d=r[1],b=Object(s.useState)(!1),x=Object(j.a)(b,2),u=x[0],h=x[1];return{dataCountry:t,getVaccines:function(){var e=Object(o.a)(l.a.mark((function e(c){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m(c),d(!0),e.next=4,O.get("/vaccines",{params:{country:t}});case 4:(s=e.sent).data?h(!0):h(!1),a(s.data.All),d(!1);case 8:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}(),processing:i,result:u}}(),c=e.dataCountry,t=e.getVaccines,a=e.processing,n=e.result,r=Object(s.useState)(""),d=Object(j.a)(r,2),b=d[0],u=d[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-4"}),Object(x.jsx)("div",{className:"col-md-4",children:Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(x.jsx)("input",{className:"form-control",name:"country",placeholder:"Country",type:"text",onChange:function(e){u(e.target.value)}}),Object(x.jsx)("div",{className:"d-grid gap-2",children:Object(x.jsx)("button",{onClick:function(){t(b)},className:"btn btn-primary mt-3",children:"Search"})})]})}),Object(x.jsx)("div",{className:"col-md-4"})]}),Object(x.jsx)(v,{state:a}),Object(x.jsx)("div",{children:c&&!a?Object(x.jsx)(h,Object(i.a)({},c)):Object(x.jsx)(p,{result:n,processing:a})})]})})};var f=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsx)("div",{className:"container centrado",children:Object(x.jsx)("h3",{className:"mt-5 mb-5",children:"Covid Vaccines by Country"})}),Object(x.jsx)(N,{})]})})};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(f,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.d609dfa9.chunk.js.map