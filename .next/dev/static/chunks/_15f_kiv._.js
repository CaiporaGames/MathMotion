(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>create,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)");
;
;
const identity = (arg)=>arg;
function useStore(api, selector = identity) {
    const slice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore(api.subscribe, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useStore.useSyncExternalStore[slice]": ()=>selector(api.getState())
    }["useStore.useSyncExternalStore[slice]"], [
        api,
        selector
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useStore.useSyncExternalStore[slice]": ()=>selector(api.getInitialState())
    }["useStore.useSyncExternalStore[slice]"], [
        api,
        selector
    ]));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createImpl = (createState)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStore = (selector)=>useStore(api, selector);
    Object.assign(useBoundStore, api);
    return useBoundStore;
};
const create = (createState)=>createState ? createImpl(createState) : createImpl;
;
}),
"[project]/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>createStore
]);
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
;
}),
"[project]/src/content/catalog/catalogItems.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "catalogItems",
    ()=>catalogItems
]);
const catalogItems = [
    /*
     * LABORATÓRIO
     */ {
        id: "function-graph",
        kind: "tool",
        title: "Funções",
        description: "Escreva funções e visualize os seus gráficos no plano cartesiano.",
        href: "/laboratorio/funcoes",
        category: "Funções",
        tags: [
            "Gráficos",
            "Funções"
        ],
        publishedAt: "2026-08-08"
    },
    {
        id: "balance-lab",
        kind: "tool",
        title: "Balança",
        description: "Explore igualdade e equações manipulando uma balança virtual.",
        href: "/laboratorio/balanca",
        category: "Álgebra",
        tags: [
            "Equações",
            "Igualdade"
        ],
        publishedAt: "2026-08-09"
    },
    {
        id: "measurement-growth",
        kind: "tool",
        title: "Escala e crescimento",
        description: "Compare como comprimentos, áreas e volumes mudam quando uma medida é alterada.",
        href: "/laboratorio/escala",
        category: "Geometria",
        tags: [
            "Área",
            "Volume",
            "Potências"
        ],
        publishedAt: "2026-08-11"
    },
    /*
     * INVESTIGAÇÕES
     */ {
        id: "balance-mystery",
        kind: "investigation",
        title: "A balança misteriosa",
        description: "Descubra naturalmente a ideia de equação através do equilíbrio de uma balança.",
        href: "/investigacoes/balanca-misteriosa",
        category: "Álgebra",
        tags: [
            "Equações",
            "2.º ciclo",
            "3.º ciclo"
        ],
        publishedAt: "2026-08-09"
    },
    {
        id: "cross-river",
        kind: "investigation",
        title: "Como atravessar o rio?",
        description: "Experimente com duas tábuas e descubra por que precisamos do Teorema de Pitágoras.",
        href: "/investigacoes/como-atravessar-o-rio",
        category: "Geometria",
        tags: [
            "Pitágoras",
            "Distâncias"
        ],
        publishedAt: "2026-08-10"
    },
    /*
     * TÓPICOS
     */ {
        id: "fermat-maximum",
        kind: "topic",
        title: "O problema de Fermat",
        description: "Veja como a procura de máximos conduz das ideias de Fermat à derivada moderna.",
        href: "/topicos/calculo/problema-de-fermat",
        category: "Cálculo",
        tags: [
            "Derivada",
            "Máximos",
            "Fermat"
        ],
        publishedAt: "2026-08-11"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/catalog/components/CatalogPage.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var e = new Error("Could not parse module '[project]/src/features/catalog/components/CatalogPage.tsx'\n\nExpected '</', got 'as'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/features/catalog/controllers/CatalogPageController.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogPageController",
    ()=>CatalogPageController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$catalog$2f$catalogItems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/catalog/catalogItems.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/components/CatalogPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$services$2f$catalog$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/services/catalog.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$store$2f$catalog$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/store/catalog.store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const PAGE_SIZE = 6;
function CatalogPageController({ kind }) {
    _s();
    const settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$store$2f$catalog$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalogStore"])({
        "CatalogPageController.useCatalogStore[settings]": (state)=>state.settings[kind]
    }["CatalogPageController.useCatalogStore[settings]"]);
    const setPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$store$2f$catalog$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalogStore"])({
        "CatalogPageController.useCatalogStore[setPage]": (state)=>state.setPage
    }["CatalogPageController.useCatalogStore[setPage]"]);
    const setSort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$store$2f$catalog$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalogStore"])({
        "CatalogPageController.useCatalogStore[setSort]": (state)=>state.setSort
    }["CatalogPageController.useCatalogStore[setSort]"]);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$services$2f$catalog$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatalogService"].getPage(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$catalog$2f$catalogItems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["catalogItems"], {
        kind,
        sort: settings.sort,
        page: settings.page,
        pageSize: PAGE_SIZE
    });
    const items = result.items.map((item)=>({
            ...item,
            dateLabel: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$services$2f$catalog$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatalogService"].formatDate(item.publishedAt)
        }));
    const pageConfig = getPageConfig(kind);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatalogPage"], {
        title: pageConfig.title,
        eyebrow: pageConfig.eyebrow,
        description: pageConfig.description,
        items: items,
        sort: settings.sort,
        page: result.page,
        totalPages: result.totalPages,
        totalItems: result.totalItems,
        hasPreviousPage: result.hasPreviousPage,
        hasNextPage: result.hasNextPage,
        onSortChange: (sort)=>setSort(kind, sort),
        onPageChange: (page)=>setPage(kind, page)
    }, void 0, false, {
        fileName: "[project]/src/features/catalog/controllers/CatalogPageController.tsx",
        lineNumber: 89,
        columnNumber: 9
    }, this);
}
_s(CatalogPageController, "MvgOgqjV6QbKYAG0wI+W+KL9+jY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$store$2f$catalog$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalogStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$store$2f$catalog$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalogStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$store$2f$catalog$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalogStore"]
    ];
});
_c = CatalogPageController;
function getPageConfig(kind) {
    switch(kind){
        case "tool":
            return {
                eyebrow: "Explore",
                title: "Laboratório",
                description: "Ferramentas matemáticas para experimentar ideias livremente."
            };
        case "investigation":
            return {
                eyebrow: "Descubra",
                title: "Investigações",
                description: "Problemas construídos para começar pela pergunta, experimentar e descobrir a matemática."
            };
        case "topic":
            return {
                eyebrow: "Estude",
                title: "Tópicos",
                description: "Capítulos de matemática com texto, fórmulas e ferramentas interativas."
            };
    }
}
var _c;
__turbopack_context__.k.register(_c, "CatalogPageController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/catalog/services/catalog.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogService",
    ()=>CatalogService
]);
class CatalogService {
    static getPage(allItems, options) {
        const filteredItems = allItems.filter((item)=>item.kind === options.kind);
        const sortedItems = this.sort(filteredItems, options.sort);
        const totalItems = sortedItems.length;
        const totalPages = Math.max(1, Math.ceil(totalItems / options.pageSize));
        const safePage = Math.max(1, Math.min(options.page, totalPages));
        const start = (safePage - 1) * options.pageSize;
        const end = start + options.pageSize;
        const pageItems = sortedItems.slice(start, end);
        return {
            items: pageItems,
            page: safePage,
            pageSize: options.pageSize,
            totalItems,
            totalPages,
            hasPreviousPage: safePage > 1,
            hasNextPage: safePage < totalPages
        };
    }
    static formatDate(date) {
        const parsedDate = new Date(`${date}T12:00:00`);
        return new Intl.DateTimeFormat("pt-PT", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }).format(parsedDate);
    }
    static sort(items, sort) {
        return [
            ...items
        ].sort((first, second)=>{
            const firstDate = new Date(first.publishedAt).getTime();
            const secondDate = new Date(second.publishedAt).getTime();
            if (sort === "oldest") {
                return firstDate - secondDate;
            }
            return secondDate - firstDate;
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/catalog/store/catalog.store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCatalogStore",
    ()=>useCatalogStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useCatalogStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((set)=>({
        settings: {
            tool: {
                page: 1,
                sort: "newest"
            },
            investigation: {
                page: 1,
                sort: "newest"
            },
            topic: {
                page: 1,
                sort: "newest"
            }
        },
        setPage: (kind, page)=>set((state)=>({
                    settings: {
                        ...state.settings,
                        [kind]: {
                            ...state.settings[kind],
                            page
                        }
                    }
                })),
        setSort: (kind, sort)=>set((state)=>({
                    settings: {
                        ...state.settings,
                        [kind]: {
                            ...state.settings[kind],
                            /*
                                     * Quando mudamos
                                     * a ordenação,
                                     * voltamos à
                                     * primeira página.
                                     */ page: 1,
                            sort
                        }
                    }
                }))
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_15f_kiv._.js.map