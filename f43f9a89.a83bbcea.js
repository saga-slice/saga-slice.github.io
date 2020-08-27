(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=(a(0),a(92));const c={id:"crud-slice",title:"CRUD Slice Helper",sidebar_label:"CRUD Slice"},i={unversionedId:"helpers/crud-slice",id:"helpers/crud-slice",isDocsHomePage:!1,title:"CRUD Slice Helper",description:"crudSlice(options) \u21d2 SagaSlice",source:"@site/docs/helpers/crud-slice.md",permalink:"/docs/helpers/crud-slice",editUrl:"https://github.com/saga-slice/saga-slice.github.io/edit/master/website/docs/helpers/crud-slice.md",sidebar_label:"CRUD Slice",sidebar:"docs",previous:{title:"CRUD Saga Helper",permalink:"/docs/helpers/crud-saga"},next:{title:"Types",permalink:"/docs/helpers/types"}},l=[{value:"crudSlice(options) \u21d2 <code>SagaSlice</code>",id:"crudsliceoptions-\u21d2-sagaslice",children:[]}],o={rightToc:l};function s({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"crudsliceoptions-\u21d2-sagaslice"},"crudSlice(options) \u21d2 ",Object(r.b)("inlineCode",{parentName:"h2"},"SagaSlice")),Object(r.b)("p",null,"This helper implements all the CRUD helpers in this library and instantiates them into a saga slice. Almost identical to the example you saw in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/helpers/crud-saga#extended-example"}),Object(r.b)("inlineCode",{parentName:"a"},"crudSaga")),", this brings all of these helpers into 1 master helper. The reason for splitting up the helpers and giving access to them is because sometimes you don't want an entire CRUD, or, sometimes you're not following REST standard and want to have more flexibility. That's OK, so we split it up. In the cases where you're following REST and want a quick CRUD saga workflow, you use ",Object(r.b)("inlineCode",{parentName:"p"},"crudSlice")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": ",Object(r.b)("inlineCode",{parentName:"p"},"SagaSlice")," - A saga slice module"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Param"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"options"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Options to pass to saga helper")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"options.name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Required. Slice name")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"options.sagaApi"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Required. Saga API instance")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"options.initialState"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Extra initial state values")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"options.reducers"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Extra reducers")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"options.sagas"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"function")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Extra sagas")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const { crudSlice } from 'saga-slice-helpers';\nconst { sagaApi } from './myApiFile';\n\n\nexport default crudSlice({\n    name: 'todos',\n    sagaApi,\n    initialState: { done: [], incomplete: [] },\n    takers: {\n        readAll: takeLatest\n    },\n    // OR\n    takers: 'takeLatest' // Will apply takeLatest to all sagas\n    reducers: {\n        setByStatus: (state, todos) => {\n            state.done = todos.filter(t => t.status === 'done');\n            state.incomplete = todos.filter(t => t.status === 'incomplete');\n        }\n    },\n    sagas: (A) => {\n        [A.readAllDone]: {\n            saga* ({ payload: { data } }) {\n                if (data) {\n                    yield put(A.setByStatus(Object.values(data)));\n                }\n            }\n        }\n    }\n});\n")))}s.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||c;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);