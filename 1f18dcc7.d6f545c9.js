(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{61:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(2),r=(a(0),a(92));const c={id:"reducers",title:"Reducer Helpers",sidebar_label:"Reducers"},l={unversionedId:"helpers/reducers",id:"helpers/reducers",isDocsHomePage:!1,title:"Reducer Helpers",description:"The following helpers are available for use with your saga slices. When used in combination with the other helpers, it makes development of new sagas much quicker.",source:"@site/docs/helpers/reducers.md",permalink:"/docs/helpers/reducers",editUrl:"https://github.com/saga-slice/saga-slice.github.io/edit/master/website/docs/helpers/reducers.md",sidebar_label:"Reducers",sidebar:"docs",previous:{title:"Axios Wrapper",permalink:"/docs/helpers/create-apis"},next:{title:"CRUD Saga Helper",permalink:"/docs/helpers/crud-saga"}},i=[{value:"<code>readAllSuccess(state, payload)</code>",id:"readallsuccessstate-payload",children:[]},{value:"<code>readOneSuccess(state, payload)</code>",id:"readonesuccessstate-payload",children:[]},{value:"<code>createSuccess(state, payload)</code>",id:"createsuccessstate-payload",children:[]},{value:"<code>updateSuccess(state, payload)</code>",id:"updatesuccessstate-payload",children:[]},{value:"<code>deleteSuccess(state, payload)</code>",id:"deletesuccessstate-payload",children:[]},{value:"<code>failReducer(state, payload)</code>",id:"failreducerstate-payload",children:[]},{value:"<code>loadingReducer(state, payload)</code>",id:"loadingreducerstate-payload",children:[]},{value:"<code>notLoadingReducer(state, payload)</code>",id:"notloadingreducerstate-payload",children:[]},{value:"<code>setCurrent(state, payload)</code>",id:"setcurrentstate-payload",children:[]},{value:"<code>resetCurrent(state, payload)</code>",id:"resetcurrentstate-payload",children:[]},{value:"<code>crudInitialState(extendState)</code>",id:"crudinitialstateextendstate",children:[]},{value:"<code>crudReducers(extend, doneReducers) =&gt; CrudReducerInstance</code>",id:"crudreducersextend-donereducers--crudreducerinstance",children:[]},{value:"<code>lifecycleReducers(name, reducers)</code>",id:"lifecyclereducersname-reducers",children:[]},{value:"<code>noop()</code>",id:"noop",children:[]}],d={rightToc:i};function o({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The following helpers are available for use with your saga slices. When used in combination with the other helpers, it makes development of new sagas much quicker."),Object(r.b)("h3",{id:"readallsuccessstate-payload"},Object(r.b)("inlineCode",{parentName:"h3"},"readAllSuccess(state, payload)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Sets the ",Object(r.b)("inlineCode",{parentName:"li"},"isFetching")," state to ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},"Maps the response payload into an object formatted like ",Object(r.b)("inlineCode",{parentName:"li"},"{ [item.id]: item }"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"state.data = Object.values(payload || {}).reduce(\n    (a, c) => ({\n        ...a,\n        [c.id]: c,\n    }),\n    {}\n);\n")),Object(r.b)("h3",{id:"readonesuccessstate-payload"},Object(r.b)("inlineCode",{parentName:"h3"},"readOneSuccess(state, payload)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Sets the ",Object(r.b)("inlineCode",{parentName:"li"},"isFetching")," state to ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},"Maps response to data by id")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"state.data[payload.id] = {\n    ...(state.data[payload.id] || {}),\n    ...payload,\n};\n")),Object(r.b)("h3",{id:"createsuccessstate-payload"},Object(r.b)("inlineCode",{parentName:"h3"},"createSuccess(state, payload)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Sets the ",Object(r.b)("inlineCode",{parentName:"li"},"isFetching")," state to ",Object(r.b)("inlineCode",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Maps response to data by id")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"state.data[payload.id] = payload;\n")),Object(r.b)("h3",{id:"updatesuccessstate-payload"},Object(r.b)("inlineCode",{parentName:"h3"},"updateSuccess(state, payload)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Sets the ",Object(r.b)("inlineCode",{parentName:"li"},"isFetching")," state to ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},"Maps response to data by id")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"state.data[payload.id] = {\n    ...(state.data[payload.id] || {}),\n    ...payload,\n};\n")),Object(r.b)("h3",{id:"deletesuccessstate-payload"},Object(r.b)("inlineCode",{parentName:"h3"},"deleteSuccess(state, payload)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Sets the ",Object(r.b)("inlineCode",{parentName:"li"},"isFetching")," state to ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},"Deletes item from ",Object(r.b)("inlineCode",{parentName:"li"},"data"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"delete state.data[payload.id];\n")),Object(r.b)("h3",{id:"failreducerstate-payload"},Object(r.b)("inlineCode",{parentName:"h3"},"failReducer(state, payload)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Sets the ",Object(r.b)("inlineCode",{parentName:"li"},"isFetching")," state to ",Object(r.b)("inlineCode",{parentName:"li"},"false"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"state.isFetching = false;\nstate.error = payload;\n")),Object(r.b)("h3",{id:"loadingreducerstate-payload"},Object(r.b)("inlineCode",{parentName:"h3"},"loadingReducer(state, payload)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Sets the ",Object(r.b)("inlineCode",{parentName:"li"},"isFetching")," state to ",Object(r.b)("inlineCode",{parentName:"li"},"true"),".")),Object(r.b)("h3",{id:"notloadingreducerstate-payload"},Object(r.b)("inlineCode",{parentName:"h3"},"notLoadingReducer(state, payload)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Sets the ",Object(r.b)("inlineCode",{parentName:"li"},"isFetching")," state to false.")),Object(r.b)("h3",{id:"setcurrentstate-payload"},Object(r.b)("inlineCode",{parentName:"h3"},"setCurrent(state, payload)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If passed a number or string, sets ",Object(r.b)("inlineCode",{parentName:"li"},"state.current")," to an item in ",Object(r.b)("inlineCode",{parentName:"li"},"state.data")),Object(r.b)("li",{parentName:"ul"},"If passed an object, sets ",Object(r.b)("inlineCode",{parentName:"li"},"state.current")," to ",Object(r.b)("inlineCode",{parentName:"li"},"payload"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"if (payload.constructor === Object) {\n    state.current = payload;\n}\n\nif (payload.constructor === Number || payload.constructor === String) {\n    state.current = state.data[payload];\n}\n")),Object(r.b)("h3",{id:"resetcurrentstate-payload"},Object(r.b)("inlineCode",{parentName:"h3"},"resetCurrent(state, payload)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Sets ",Object(r.b)("inlineCode",{parentName:"li"},"state.current")," to ",Object(r.b)("inlineCode",{parentName:"li"},"null"))),Object(r.b)("h3",{id:"crudinitialstateextendstate"},Object(r.b)("inlineCode",{parentName:"h3"},"crudInitialState(extendState)")),Object(r.b)("p",null,"Returns a state object structured to work with other helper functions. You can extend or overwrite the current state elements by passing an extended state. This function returns:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const initialState = {\n    isFetching: false,\n    current: null,\n    data: {},\n    error: null,\n    ...(extendState || {}),\n};\n")),Object(r.b)("h3",{id:"crudreducersextend-donereducers--crudreducerinstance"},Object(r.b)("inlineCode",{parentName:"h3"},"crudReducers(extend, doneReducers) => CrudReducerInstance")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Generates a map of reducers for CRUD use"),Object(r.b)("li",{parentName:"ul"},"Can be extended or overwritten by passing ",Object(r.b)("inlineCode",{parentName:"li"},"extend")," option"),Object(r.b)("li",{parentName:"ul"},"Done reducers are created if ",Object(r.b)("inlineCode",{parentName:"li"},"doneRecuders")," is set to true")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const actions = crudReducers({\n    // ... more reducers\n}, true) // <-- creates `done` actions\n\nconst {\n    setCurrent,\n    resetCurrent,\n    readAll, // loadingReducer\n    readOne, // loadingReducer\n    create, // loadingReducer\n    update, // loadingReducer\n    patch, // loadingReducer\n    delete, // loadingReducer\n    readAllSuccess,\n    readOneSuccess,\n    createSuccess,\n    updateSuccess,\n    patchSuccess\n    deleteSuccess,\n    readAllFail, // failReducer\n    readOneFail, // failReducer\n    createFail, // failReducer\n    updateFail, // failReducer\n    patchFail, // failReducer\n    deleteFail, // failReducer\n    readAllDone, // only if doneReducers is true, noop\n    readOneDone, // only if doneReducers is true, noop\n    createDone, // only if doneReducers is true, noop\n    updateDone, // only if doneReducers is true, noop\n    deleteDone, // only if doneReducers is true, noop\n} = actions;\n")),Object(r.b)("h3",{id:"lifecyclereducersname-reducers"},Object(r.b)("inlineCode",{parentName:"h3"},"lifecycleReducers(name, reducers)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Creates a map of reducers specific to an ajax request lifecycle similar to what you see in ",Object(r.b)("inlineCode",{parentName:"li"},"crudReducers"),", but only for 1 method call."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"reducers")," is an optional parameter. If the reducers are not specified, it will be provided a default. The reducers are overwritten using ",Object(r.b)("inlineCode",{parentName:"li"},"main")," for the main action, ",Object(r.b)("inlineCode",{parentName:"li"},"success")," for success action, ",Object(r.b)("inlineCode",{parentName:"li"},"fail")," for fail action, and ",Object(r.b)("inlineCode",{parentName:"li"},"done")," can be a boolean or a function.")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Param"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"name of action"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"n/a")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"reducers"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"no"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"object of reducers"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"empty object")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"reducers.main"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"function")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"no"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"main reducer created from name argument as ",Object(r.b)("inlineCode",{parentName:"td"},"name")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"loadingReducer"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"reducers.success"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"function")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"no"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"success reducer created from name argument as ",Object(r.b)("inlineCode",{parentName:"td"},"nameSuccess")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"notLoadingReducer"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"reducers.fail"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"function")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"no"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fail reducer created from name argument as ",Object(r.b)("inlineCode",{parentName:"td"},"nameFail")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"failReducer"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"reducers.done"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"function")," ","|"," ",Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"no"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"optional done reducer is boolean or reducer function create as ",Object(r.b)("inlineCode",{parentName:"td"},"nameDone")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"false")," or ",Object(r.b)("inlineCode",{parentName:"td"},"noop"))))),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'const { getTodo, getTodoSuccess, getTodoFail, getTodoDone } = lifecycleReducers(\n    "getTodo",\n    {\n        success: (state, payload) => (state.data = payload),\n        done: true,\n    }\n);\n')),Object(r.b)("h3",{id:"noop"},Object(r.b)("inlineCode",{parentName:"h3"},"noop()")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Does nothing. Used for declaring reducers.")))}o.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),s=b(a),p=n,j=s["".concat(l,".").concat(p)]||s[p]||u[p]||c;return a?r.a.createElement(j,i(i({ref:t},o),{},{components:a})):r.a.createElement(j,i({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<c;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);