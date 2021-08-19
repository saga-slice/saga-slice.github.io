(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(92)),i={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},c={unversionedId:"helpers/getting-started",id:"helpers/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Saga slice helpers are an abstraction on top of saga slice that facilitate the management of state, CRUD routes for standard REST apis, and more.",source:"@site/docs/helpers/getting-started.md",permalink:"/docs/helpers/getting-started",editUrl:"https://github.com/saga-slice/saga-slice.github.io/edit/master/website/docs/helpers/getting-started.md",sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"Types",permalink:"/docs/api/types"},next:{title:"Axios Wrapper",permalink:"/docs/helpers/create-apis"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Saga slice helpers are an abstraction on top of saga slice that facilitate the management of state, CRUD routes for standard REST apis, and more."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"npm i -S saga-slice-helpers axios\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"components/pies/saga-slice.js")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { crudSlice } from 'saga-slice-helpers';\n\nconst sagaSlice = crudSlice({\n    name: 'pies'\n});\n\nexport const { actions } = sagaSlice;\nexport default sagaSlice;\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"components/pies/Form.jsx")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { actions } from './saga-slice';\n\nexport default connect(\n    null,\n    actions\n)((props) => {\n\n    const onSubmit = (values) => props.create(values)\n\n    return (\n        <Form onSubmit={ onSubmit }>\n            ...\n        </Form>\n    );\n})\n")))}p.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);