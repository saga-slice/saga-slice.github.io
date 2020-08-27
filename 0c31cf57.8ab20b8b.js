(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{57:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return l}));var a=t(2),r=(t(0),t(92));const s={id:"types",title:"Types",sidebar_label:"Types"},c={unversionedId:"helpers/types",id:"helpers/types",isDocsHomePage:!1,title:"Types",description:"createApis",source:"@site/docs/helpers/types.md",permalink:"/docs/helpers/types",editUrl:"https://github.com/saga-slice/saga-slice.github.io/edit/master/website/docs/helpers/types.md",sidebar_label:"Types",sidebar:"docs",previous:{title:"CRUD Slice Helper",permalink:"/docs/helpers/crud-slice"}},o=[{value:"<strong>createApis</strong>",id:"createapis",children:[]},{value:"<strong>refetch</strong>",id:"refetch",children:[]},{value:"<strong>crudSaga</strong>",id:"crudsaga",children:[]},{value:"<strong>crudInitialState</strong>",id:"crudinitialstate",children:[]},{value:"<strong>crudReducers</strong>",id:"crudreducers",children:[]},{value:"<strong>crudSlice</strong>",id:"crudslice",children:[]}],i={rightToc:o};function l({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"createapis"},Object(r.b)("strong",{parentName:"h2"},"createApis")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Cancellable request caller."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/redux-saga/redux-saga/issues/651#issuecomment-262375964"}),"https://github.com/redux-saga/redux-saga/issues/651","#","issuecomment-262375964"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/**\n * @arg {string} path Request URL path\n * @arg {*} payload Request payload. Omit if method is GET.\n * @arg {object} options Axios options\n *\n * @returns {Promise<AxiosResponse>}\n */\ninterface makeRequest {\n    (path: string, ...rest: any[]): Promise<AxiosResponse>;\n}\n\ninterface AxiosWrapperInstance {\n    get: makeRequest;\n    put: makeRequest;\n    patch: makeRequest;\n    post: makeRequest;\n    delete: makeRequest;\n    addAuthorization: {\n        (authorization: string): void;\n    };\n    removeAuthorization: {\n        (): void;\n    };\n    addHeader: {\n        (name: string, value: string): void;\n    };\n    removeHeader: {\n        (name: string): void;\n    };\n    instance: AxiosInstance;\n}\n\n\n/**\n * @arg {string} path URL Path\n * @arg {any} payload Request payload. Skip if GET.\n * @arg {function} success Success action\n * @arg {function} fail Fail action\n * @arg {function} done? Done action\n */\ninterface makeCall {\n    (path: string, ...rest: any[]): Promise<AxiosResponse>;\n}\n\ninterface SagaApiInstance {\n    get: makeCall;\n    post: makeCall;\n    put: makeCall;\n    patch: makeCall;\n    delete: makeCall;\n}\n\n/**\n * @param {AxiosRequestConfig} options Axios configuration\n */\ndeclare const createApis: (options: AxiosRequestConfig) => {\n    api: AxiosWrapperInstance;\n    sagaApi: SagaApiInstance;\n};\n")),Object(r.b)("h2",{id:"refetch"},Object(r.b)("strong",{parentName:"h2"},"refetch")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fetch whatever is in ",Object(r.b)("inlineCode",{parentName:"li"},"state.current")," again in order to refresh a resource after an association or other out of context action.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/**\n * @param {object} A Actions object\n * @param {string} name Name of state scope to grab current\n * @param {number} delay Debounce time\n *\n * @returns {object} An object to add to a saga slice\n */\ndeclare const refetch: (A: any, name: string, delay: number) => SagaObject;\n")),Object(r.b)("h2",{id:"crudsaga"},Object(r.b)("strong",{parentName:"h2"},"crudSaga")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Creates crud saga boilerplate clojure for sagas slice")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"interface SagaApiOpts extends Pick<ModuleOpts, 'name' | 'takers' | 'sagas'> {\n    sagaApi: any;\n}\n\ninterface ExtendSagasFn {\n    (actions: any): {\n        [type: string]: SagaObject;\n    };\n}\n\n/**\n * @arg {object} options Options to pass to saga helper\n * @param {string} options.name REST resource name\n * @param {string} options.takers Optional object of takers (defaults to `takeEvery`). Can be string `takeLatest`.\n * @param {string} options.sagaApi A `sagaApi` instance\n * @arg {function} extend A function to pass actions and add extra sagas\n *\n * @return {function} Function that accepts redux actions object\n */\n\ndeclare const crudSaga: (opts: SagaApiOpts, extend: ExtendSagasFn) => {\n    (actions: any): {\n        [type: string]: SagaObject;\n    };\n};\n")),Object(r.b)("h2",{id:"crudinitialstate"},Object(r.b)("strong",{parentName:"h2"},"crudInitialState")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Creates an opinionated initial state for handling common CRUD operates")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/**\n * @param {object} extend Extra state parameters\n * @returns {object} Initial state object\n */\ndeclare const crudInitialState: {\n    (extend: anyObject): typeof extend & {\n        isFetching: boolean;\n        current: any;\n        data: anyObject;\n        error: any;\n    };\n};\n")),Object(r.b)("h2",{id:"crudreducers"},Object(r.b)("strong",{parentName:"h2"},"crudReducers")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Creates an opinionated reducer object for handling common CRUD operations")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"interface CrudReducersInstance {\n    readAll: any;\n    readOne: any;\n    create: any;\n    update: any;\n    patch: any;\n    delete: any;\n    readAllSuccess: any;\n    readOneSuccess: any;\n    createSuccess: any;\n    updateSuccess: any;\n    patchSuccess: any;\n    deleteSuccess: any;\n    setCurrent: any;\n    resetCurrent: any;\n    readAllFail: any;\n    readOneFail: any;\n    createFail: any;\n    updateFail: any;\n    patchFail: any;\n    deleteFail: any;\n    readAllDone?: any;\n    readOneDone?: any;\n    createDone?: any;\n    updateDone?: any;\n    patchDone?: any;\n    deleteDone?: any;\n}\n\n/**\n * @param {object} extend Extra state parameters\n * @param {boolean} done Flag to create `done` actions / reducers\n * @returns {CrudReducersInstance} Reducer object for saga slice\n */\n\ndeclare const crudReducers: (extend: anyObject, done?: boolean) => typeof extend & CrudReducersInstance;\n")),Object(r.b)("h2",{id:"crudslice"},Object(r.b)("strong",{parentName:"h2"},"crudSlice")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Creates a saga slice with opinionated CRUD functionality")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/**\n * @arg {object} options Options to pass to saga helper\n * @param {string} options.name Required. Slice name\n * @param {string} options.singular Required. Singular resource name\n * @param {string} options.plural Required. Plural resource name\n * @param {object} options.sagaApi Required. Saga API instance\n * @param {object} options.initialState Extra initial state values or overrides\n * @param {object} options.reducers Extra reducers or overrides\n * @param {function} options.sagas Extra sagas or overrides\n *\n * @return {SagaSlice} A saga slice module\n */\ndeclare const crudSlice: (opts: SagaApiOpts & ModuleOpts) => SagaSlice;\n")))}l.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,g=u["".concat(c,".").concat(b)]||u[b]||d[b]||s;return t?r.a.createElement(g,o(o({ref:n},l),{},{components:t})):r.a.createElement(g,o({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,c=new Array(s);c[0]=b;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<s;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);