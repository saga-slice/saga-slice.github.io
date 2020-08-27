(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(92));const c={id:"types",title:"Types",sidebar_label:"Types"},i={unversionedId:"api/types",id:"api/types",isDocsHomePage:!1,title:"Types",description:"SagaObject",source:"@site/docs/api/types.md",permalink:"/docs/api/types",editUrl:"https://github.com/saga-slice/saga-slice.github.io/edit/master/website/docs/api/types.md",sidebar_label:"Types",sidebar:"docs",previous:{title:"rootReducer and rootSaga API",permalink:"/docs/api/redux-wiring"},next:{title:"Getting Started",permalink:"/docs/helpers/getting-started"}},o=[],p={rightToc:o};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"SagaObject")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"interface SagaObject {\n    (...args: any): void;\n    saga: void;\n    taker?: any;\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"ModuleOpts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"interface ModuleOpts {\n\n    name: string;\n    initialState: {\n        [key: string]: any;\n    };\n    reducers: {\n        [key: string]: () => any;\n    };\n    sagas?: (actions: object) => {\n        [type: string]: SagaObject;\n    };\n    takers?: {\n        [type: string]: void;\n    };\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"SagaSlice")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"interface SagaSlice {\n    name: string;\n    actions: {\n        [key: string]: () => any;\n    };\n    reducer: (state: any, action: ReduxAction) => any;\n    sagas: Iterable<any>[];\n}\n")))}s.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),y=r,d=u["".concat(i,".").concat(y)]||u[y]||b[y]||c;return n?a.a.createElement(d,o(o({ref:t},s),{},{components:n})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);