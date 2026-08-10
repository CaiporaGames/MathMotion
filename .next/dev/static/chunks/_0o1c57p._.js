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
"[project]/src/features/balance/components/BalanceControls.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttons": "BalanceControls-module-scss-module__hrkplW__buttons",
  "controls": "BalanceControls-module-scss-module__hrkplW__controls",
  "operationGroup": "BalanceControls-module-scss-module__hrkplW__operationGroup",
  "side": "BalanceControls-module-scss-module__hrkplW__side",
  "sideHeader": "BalanceControls-module-scss-module__hrkplW__sideHeader",
});
}),
"[project]/src/features/balance/components/BalanceControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BalanceControls",
    ()=>BalanceControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/balance/components/BalanceControls.module.scss [app-client] (css module)");
;
;
function BalanceControls({ left, right, onAddBox, onRemoveBox, onChangeWeight }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controls,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SideControls, {
                title: "Prato esquerdo",
                sideId: "left",
                state: left,
                onAddBox: onAddBox,
                onRemoveBox: onRemoveBox,
                onChangeWeight: onChangeWeight
            }, void 0, false, {
                fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SideControls, {
                title: "Prato direito",
                sideId: "right",
                state: right,
                onAddBox: onAddBox,
                onRemoveBox: onRemoveBox,
                onChangeWeight: onChangeWeight
            }, void 0, false, {
                fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_c = BalanceControls;
function SideControls({ title, sideId, state, onAddBox, onRemoveBox, onChangeWeight }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].side,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sideHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            state.boxCount,
                            " ",
                            state.boxCount === 1 ? "caixa" : "caixas",
                            " · ",
                            state.knownWeight,
                            " kg"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                lineNumber: 106,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].operationGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Caixas"
                    }, void 0, false, {
                        fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                        lineNumber: 136,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttons,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onRemoveBox(sideId),
                                children: "− caixa"
                            }, void 0, false, {
                                fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                                lineNumber: 145,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onAddBox(sideId),
                                children: "+ caixa"
                            }, void 0, false, {
                                fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                                lineNumber: 156,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                lineNumber: 130,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].operationGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Peso conhecido"
                    }, void 0, false, {
                        fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                        lineNumber: 176,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttons,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onChangeWeight(sideId, -2),
                                children: "− 2 kg"
                            }, void 0, false, {
                                fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                                lineNumber: 186,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onChangeWeight(sideId, -1),
                                children: "− 1 kg"
                            }, void 0, false, {
                                fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                                lineNumber: 198,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onChangeWeight(sideId, 1),
                                children: "+ 1 kg"
                            }, void 0, false, {
                                fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                                lineNumber: 210,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onChangeWeight(sideId, 2),
                                children: "+ 2 kg"
                            }, void 0, false, {
                                fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                                lineNumber: 222,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                        lineNumber: 180,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                lineNumber: 170,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
        lineNumber: 102,
        columnNumber: 9
    }, this);
}
_c1 = SideControls;
var _c, _c1;
__turbopack_context__.k.register(_c, "BalanceControls");
__turbopack_context__.k.register(_c1, "SideControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/balance/components/BalanceScale.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "beam": "BalanceScale-module-scss-module__rTFo5q__beam",
  "box": "BalanceScale-module-scss-module__rTFo5q__box",
  "boxText": "BalanceScale-module-scss-module__rTFo5q__boxText",
  "ground": "BalanceScale-module-scss-module__rTFo5q__ground",
  "pan": "BalanceScale-module-scss-module__rTFo5q__pan",
  "pivot": "BalanceScale-module-scss-module__rTFo5q__pivot",
  "rope": "BalanceScale-module-scss-module__rTFo5q__rope",
  "scale": "BalanceScale-module-scss-module__rTFo5q__scale",
  "support": "BalanceScale-module-scss-module__rTFo5q__support",
  "weight": "BalanceScale-module-scss-module__rTFo5q__weight",
  "weightNumber": "BalanceScale-module-scss-module__rTFo5q__weightNumber",
  "weightUnit": "BalanceScale-module-scss-module__rTFo5q__weightUnit",
  "wrapper": "BalanceScale-module-scss-module__rTFo5q__wrapper",
});
}),
"[project]/src/features/balance/components/BalanceScale.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BalanceScale",
    ()=>BalanceScale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/balance/components/BalanceScale.module.scss [app-client] (css module)");
;
;
function BalanceScale({ left, right, status, tiltAngle }) {
    const pivotX = 450;
    const pivotY = 180;
    const halfBeam = 280;
    const angleRadians = tiltAngle * Math.PI / 180;
    const leftX = pivotX - halfBeam * Math.cos(angleRadians);
    const leftY = pivotY - halfBeam * Math.sin(angleRadians);
    const rightX = pivotX + halfBeam * Math.cos(angleRadians);
    const rightY = pivotY + halfBeam * Math.sin(angleRadians);
    const leftPanY = leftY + 105;
    const rightPanY = rightY + 105;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scale,
            viewBox: "0 0 900 520",
            role: "img",
            "aria-label": getAccessibilityText(status),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "310",
                    y1: "475",
                    x2: "590",
                    y2: "475",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ground
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 78,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "\r\n\n                        M 450 185\r\n\n                        L 450 430\r\n\n                        L 365 475\r\n\n                        L 535 475\r\n\n                        Z\r\n\n                    ",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].support
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: pivotX,
                    cy: pivotY,
                    r: "23",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pivot
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 103,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: leftX,
                    y1: leftY,
                    x2: rightX,
                    y2: rightY,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].beam
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 113,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: leftX,
                    y1: leftY,
                    x2: leftX - 90,
                    y2: leftPanY,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rope
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 124,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: leftX,
                    y1: leftY,
                    x2: leftX + 90,
                    y2: leftPanY,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rope
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 134,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `
                        M ${leftX - 125} ${leftPanY}
                        Q ${leftX} ${leftPanY + 45}
                          ${leftX + 125} ${leftPanY}
                    `,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pan
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 145,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: rightX,
                    y1: rightY,
                    x2: rightX - 90,
                    y2: rightPanY,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rope
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 157,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: rightX,
                    y1: rightY,
                    x2: rightX + 90,
                    y2: rightPanY,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rope
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 167,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `
                        M ${rightX - 125} ${rightPanY}
                        Q ${rightX} ${rightPanY + 45}
                          ${rightX + 125} ${rightPanY}
                    `,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pan
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 178,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BalanceItems, {
                    side: left,
                    centerX: leftX,
                    panY: leftPanY
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 189,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BalanceItems, {
                    side: right,
                    centerX: rightX,
                    panY: rightPanY
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 195,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
            lineNumber: 66,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
        lineNumber: 64,
        columnNumber: 9
    }, this);
}
_c = BalanceScale;
function BalanceItems({ side, centerX, panY }) {
    const items = [];
    for(let index = 0; index < side.boxCount; index++){
        items.push({
            kind: "box",
            id: `box-${index}`
        });
    }
    if (side.knownWeight > 0) {
        items.push({
            kind: "weight",
            id: "weight"
        });
    }
    const itemWidth = 56;
    const gap = 10;
    const totalWidth = items.length * itemWidth + Math.max(0, items.length - 1) * gap;
    const startX = centerX - totalWidth / 2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: items.map((item, index)=>{
            const x = startX + index * (itemWidth + gap);
            const y = panY - 61;
            if (item.kind === "box") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: x,
                            y: y,
                            width: "56",
                            height: "52",
                            rx: "7",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].box
                        }, void 0, false, {
                            fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                            lineNumber: 297,
                            columnNumber: 33
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: x + 28,
                            y: y + 32,
                            textAnchor: "middle",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].boxText,
                            children: "?"
                        }, void 0, false, {
                            fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                            lineNumber: 308,
                            columnNumber: 33
                        }, this)
                    ]
                }, item.id, true, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 291,
                    columnNumber: 29
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: x,
                        y: y,
                        width: "56",
                        height: "52",
                        rx: "10",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].weight
                    }, void 0, false, {
                        fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                        lineNumber: 336,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: x + 28,
                        y: y + 24,
                        textAnchor: "middle",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].weightNumber,
                        children: side.knownWeight
                    }, void 0, false, {
                        fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                        lineNumber: 347,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: x + 28,
                        y: y + 40,
                        textAnchor: "middle",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].weightUnit,
                        children: "kg"
                    }, void 0, false, {
                        fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                        lineNumber: 366,
                        columnNumber: 29
                    }, this)
                ]
            }, item.id, true, {
                fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                lineNumber: 330,
                columnNumber: 25
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
        lineNumber: 268,
        columnNumber: 9
    }, this);
}
_c1 = BalanceItems;
function getAccessibilityText(status) {
    switch(status){
        case "balanced":
            return "Balança equilibrada.";
        case "left-heavy":
            return "Prato esquerdo mais pesado.";
        case "right-heavy":
            return "Prato direito mais pesado.";
    }
}
var _c, _c1;
__turbopack_context__.k.register(_c, "BalanceScale");
__turbopack_context__.k.register(_c1, "BalanceItems");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/balance/services/balance.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BalanceService",
    ()=>BalanceService
]);
class BalanceService {
    static formatSide(side) {
        const parts = [];
        if (side.boxCount === 1) {
            parts.push("□");
        }
        if (side.boxCount > 1) {
            parts.push(`${side.boxCount}□`);
        }
        if (side.knownWeight > 0) {
            parts.push(`${side.knownWeight} kg`);
        }
        if (parts.length === 0) {
            return "0";
        }
        return parts.join(" + ");
    }
    static calculateTotalWeight(side, hiddenBoxWeight) {
        return side.boxCount * hiddenBoxWeight + side.knownWeight;
    }
    static getStatus(left, right, hiddenBoxWeight) {
        const leftWeight = this.calculateTotalWeight(left, hiddenBoxWeight);
        const rightWeight = this.calculateTotalWeight(right, hiddenBoxWeight);
        const difference = leftWeight - rightWeight;
        if (Math.abs(difference) < 0.0001) {
            return "balanced";
        }
        if (difference > 0) {
            return "left-heavy";
        }
        return "right-heavy";
    }
    static calculateTiltAngle(left, right, hiddenBoxWeight) {
        const leftWeight = this.calculateTotalWeight(left, hiddenBoxWeight);
        const rightWeight = this.calculateTotalWeight(right, hiddenBoxWeight);
        const difference = leftWeight - rightWeight;
        /*
         * Limitamos visualmente a inclinação
         * para a balança não girar demais.
         */ const rawAngle = -difference * 1.5;
        return Math.max(-8, Math.min(8, rawAngle));
    }
    static changeKnownWeight(side, delta) {
        return {
            ...side,
            knownWeight: Math.max(0, side.knownWeight + delta)
        };
    }
    static changeBoxCount(side, delta) {
        return {
            ...side,
            boxCount: Math.max(0, Math.min(3, side.boxCount + delta))
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/problems/components/blocks/DiscoveryBlock.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "discovery": "DiscoveryBlock-module-scss-module__kVwvFa__discovery",
  "hidden": "DiscoveryBlock-module-scss-module__kVwvFa__hidden",
});
}),
"[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiscoveryBlock",
    ()=>DiscoveryBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$DiscoveryBlock$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/problems/components/blocks/DiscoveryBlock.module.scss [app-client] (css module)");
;
;
function DiscoveryBlock({ block, revealed, onReveal }) {
    if (!revealed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$DiscoveryBlock$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hidden,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Descoberta"
                }, void 0, false, {
                    fileName: "[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Antes de continuar..."
                }, void 0, false, {
                    fileName: "[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Tente explicar com as suas próprias palavras o que observou."
                }, void 0, false, {
                    fileName: "[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onReveal,
                    children: "Revelar descoberta"
                }, void 0, false, {
                    fileName: "[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx",
            lineNumber: 28,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$DiscoveryBlock$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].discovery,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Descoberta"
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: block.title
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: block.text
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, this);
}
_c = DiscoveryBlock;
var _c;
__turbopack_context__.k.register(_c, "DiscoveryBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/problems/components/blocks/ProblemBalanceBlock.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "block": "ProblemBalanceBlock-module-scss-module__6DUWkW__block",
  "equation": "ProblemBalanceBlock-module-scss-module__6DUWkW__equation",
  "header": "ProblemBalanceBlock-module-scss-module__6DUWkW__header",
});
}),
"[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProblemBalanceBlock",
    ()=>ProblemBalanceBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/balance/components/BalanceScale.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/balance/components/BalanceControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemBalanceBlock$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/problems/components/blocks/ProblemBalanceBlock.module.scss [app-client] (css module)");
;
;
;
;
function ProblemBalanceBlock({ block, left, right, status, tiltAngle, equationText, onAddBox, onRemoveBox, onChangeWeight, onReset }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemBalanceBlock$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].block,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemBalanceBlock$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Experimente"
                            }, void 0, false, {
                                fileName: "[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx",
                                lineNumber: 94,
                                columnNumber: 21
                            }, this),
                            block.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: block.title
                            }, void 0, false, {
                                fileName: "[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx",
                                lineNumber: 101,
                                columnNumber: 29
                            }, this),
                            block.instruction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: block.instruction
                            }, void 0, false, {
                                fileName: "[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx",
                                lineNumber: 114,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onReset,
                        children: "Reiniciar"
                    }, void 0, false, {
                        fileName: "[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            block.showEquation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemBalanceBlock$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].equation,
                children: equationText
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx",
                lineNumber: 138,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BalanceScale"], {
                left: left,
                right: right,
                status: status,
                tiltAngle: tiltAngle
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx",
                lineNumber: 151,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BalanceControls"], {
                left: left,
                right: right,
                onAddBox: onAddBox,
                onRemoveBox: onRemoveBox,
                onChangeWeight: onChangeWeight
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx",
                lineNumber: 160,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx",
        lineNumber: 81,
        columnNumber: 9
    }, this);
}
_c = ProblemBalanceBlock;
var _c;
__turbopack_context__.k.register(_c, "ProblemBalanceBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/problems/components/blocks/QuestionBlock.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "answerRow": "QuestionBlock-module-scss-module__yGgBvG__answerRow",
  "checkButton": "QuestionBlock-module-scss-module__yGgBvG__checkButton",
  "correct": "QuestionBlock-module-scss-module__yGgBvG__correct",
  "incorrect": "QuestionBlock-module-scss-module__yGgBvG__incorrect",
  "label": "QuestionBlock-module-scss-module__yGgBvG__label",
  "options": "QuestionBlock-module-scss-module__yGgBvG__options",
  "question": "QuestionBlock-module-scss-module__yGgBvG__question",
  "selected": "QuestionBlock-module-scss-module__yGgBvG__selected",
});
}),
"[project]/src/features/problems/components/blocks/QuestionBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestionBlock",
    ()=>QuestionBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/problems/components/blocks/QuestionBlock.module.scss [app-client] (css module)");
;
;
function QuestionBlock({ block, answer, result, onAnswerChange, onCheck }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].question,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                children: "Sua vez"
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/QuestionBlock.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: block.prompt
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/QuestionBlock.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            block.inputType === "number" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answerRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        inputMode: "decimal",
                        value: answer,
                        placeholder: "?",
                        onChange: (event)=>onAnswerChange(event.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/features/problems/components/blocks/QuestionBlock.tsx",
                        lineNumber: 62,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCheck,
                        children: "Verificar"
                    }, void 0, false, {
                        fileName: "[project]/src/features/problems/components/blocks/QuestionBlock.tsx",
                        lineNumber: 77,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/problems/components/blocks/QuestionBlock.tsx",
                lineNumber: 57,
                columnNumber: 17
            }, this),
            block.inputType === "multiple-choice" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].options,
                children: [
                    block.options?.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: answer === option.value ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selected : "",
                            onClick: ()=>onAnswerChange(option.value),
                            children: option.label
                        }, option.id, false, {
                            fileName: "[project]/src/features/problems/components/blocks/QuestionBlock.tsx",
                            lineNumber: 101,
                            columnNumber: 33
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkButton,
                        onClick: onCheck,
                        children: "Verificar"
                    }, void 0, false, {
                        fileName: "[project]/src/features/problems/components/blocks/QuestionBlock.tsx",
                        lineNumber: 131,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/problems/components/blocks/QuestionBlock.tsx",
                lineNumber: 91,
                columnNumber: 17
            }, this),
            result === true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].correct,
                children: block.successMessage ?? "Correto!"
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/QuestionBlock.tsx",
                lineNumber: 147,
                columnNumber: 17
            }, this),
            result === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].incorrect,
                children: block.errorMessage ?? "Ainda não. Experimente outra ideia."
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/QuestionBlock.tsx",
                lineNumber: 161,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/problems/components/blocks/QuestionBlock.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
_c = QuestionBlock;
var _c;
__turbopack_context__.k.register(_c, "QuestionBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/problems/controllers/blocks/DiscoveryBlockController.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiscoveryBlockController",
    ()=>DiscoveryBlockController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$DiscoveryBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/problems/store/problemProgress.store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DiscoveryBlockController({ block }) {
    _s();
    const revealed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblemProgressStore"])({
        "DiscoveryBlockController.useProblemProgressStore[revealed]": (state)=>state.revealedBlocks[block.id] ?? false
    }["DiscoveryBlockController.useProblemProgressStore[revealed]"]);
    const revealBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblemProgressStore"])({
        "DiscoveryBlockController.useProblemProgressStore[revealBlock]": (state)=>state.revealBlock
    }["DiscoveryBlockController.useProblemProgressStore[revealBlock]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$DiscoveryBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiscoveryBlock"], {
        block: block,
        revealed: revealed,
        onReveal: ()=>revealBlock(block.id)
    }, void 0, false, {
        fileName: "[project]/src/features/problems/controllers/blocks/DiscoveryBlockController.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_s(DiscoveryBlockController, "c8E2RB4p3wiIpqfjniPR0EJNkp0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblemProgressStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblemProgressStore"]
    ];
});
_c = DiscoveryBlockController;
var _c;
__turbopack_context__.k.register(_c, "DiscoveryBlockController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/problems/controllers/blocks/ProblemBalanceBlockController.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProblemBalanceBlockController",
    ()=>ProblemBalanceBlockController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/balance/services/balance.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemBalanceBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemBalance$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/problems/store/problemBalance.store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ProblemBalanceBlockController({ block }) {
    _s();
    const instance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemBalance$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblemBalanceStore"])({
        "ProblemBalanceBlockController.useProblemBalanceStore[instance]": (state)=>state.instances[block.id]
    }["ProblemBalanceBlockController.useProblemBalanceStore[instance]"]);
    const setInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemBalance$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblemBalanceStore"])({
        "ProblemBalanceBlockController.useProblemBalanceStore[setInstance]": (state)=>state.setInstance
    }["ProblemBalanceBlockController.useProblemBalanceStore[setInstance]"]);
    /*
     * Se ainda não existe estado salvo
     * para esta balança, usamos o cenário
     * inicial do problema.
     */ const left = instance?.left ?? block.scenario.left;
    const right = instance?.right ?? block.scenario.right;
    const status = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BalanceService"].getStatus(left, right, block.scenario.hiddenBoxWeight);
    const tiltAngle = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BalanceService"].calculateTiltAngle(left, right, block.scenario.hiddenBoxWeight);
    function updateSide(sideId, newSide) {
        setInstance(block.id, {
            left: sideId === "left" ? newSide : left,
            right: sideId === "right" ? newSide : right
        });
    }
    function changeWeight(sideId, delta) {
        const side = sideId === "left" ? left : right;
        const newSide = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BalanceService"].changeKnownWeight(side, delta);
        updateSide(sideId, newSide);
    }
    function changeBoxes(sideId, delta) {
        const side = sideId === "left" ? left : right;
        const newSide = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BalanceService"].changeBoxCount(side, delta);
        updateSide(sideId, newSide);
    }
    function reset() {
        setInstance(block.id, {
            left: {
                ...block.scenario.left
            },
            right: {
                ...block.scenario.right
            }
        });
    }
    const equationText = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BalanceService"].formatSide(left)} = ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BalanceService"].formatSide(right)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemBalanceBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProblemBalanceBlock"], {
        block: block,
        left: left,
        right: right,
        status: status,
        tiltAngle: tiltAngle,
        equationText: equationText,
        onAddBox: (side)=>changeBoxes(side, 1),
        onRemoveBox: (side)=>changeBoxes(side, -1),
        onChangeWeight: changeWeight,
        onReset: reset
    }, void 0, false, {
        fileName: "[project]/src/features/problems/controllers/blocks/ProblemBalanceBlockController.tsx",
        lineNumber: 193,
        columnNumber: 9
    }, this);
}
_s(ProblemBalanceBlockController, "/Q/LcT99LU3ogLlWl9wNDQURFSI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemBalance$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblemBalanceStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemBalance$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblemBalanceStore"]
    ];
});
_c = ProblemBalanceBlockController;
var _c;
__turbopack_context__.k.register(_c, "ProblemBalanceBlockController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/problems/controllers/blocks/QuestionBlockController.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestionBlockController",
    ()=>QuestionBlockController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/problems/components/blocks/QuestionBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$services$2f$problem$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/problems/services/problem.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/problems/store/problemProgress.store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function QuestionBlockController({ block }) {
    _s();
    const answer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblemProgressStore"])({
        "QuestionBlockController.useProblemProgressStore[answer]": (state)=>state.answers[block.id] ?? ""
    }["QuestionBlockController.useProblemProgressStore[answer]"]);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblemProgressStore"])({
        "QuestionBlockController.useProblemProgressStore[result]": (state)=>state.results[block.id] ?? null
    }["QuestionBlockController.useProblemProgressStore[result]"]);
    const setAnswer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblemProgressStore"])({
        "QuestionBlockController.useProblemProgressStore[setAnswer]": (state)=>state.setAnswer
    }["QuestionBlockController.useProblemProgressStore[setAnswer]"]);
    const setResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblemProgressStore"])({
        "QuestionBlockController.useProblemProgressStore[setResult]": (state)=>state.setResult
    }["QuestionBlockController.useProblemProgressStore[setResult]"]);
    function handleAnswerChange(value) {
        setAnswer(block.id, value);
        setResult(block.id, null);
    }
    function handleCheck() {
        const isCorrect = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$services$2f$problem$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProblemService"].checkAnswer(block, answer);
        setResult(block.id, isCorrect);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuestionBlock"], {
        block: block,
        answer: answer,
        result: result,
        onAnswerChange: handleAnswerChange,
        onCheck: handleCheck
    }, void 0, false, {
        fileName: "[project]/src/features/problems/controllers/blocks/QuestionBlockController.tsx",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
_s(QuestionBlockController, "KFuN25PYJFWHpSh0MW0oOoW4FMA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblemProgressStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblemProgressStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblemProgressStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProblemProgressStore"]
    ];
});
_c = QuestionBlockController;
var _c;
__turbopack_context__.k.register(_c, "QuestionBlockController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/problems/services/problem.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProblemService",
    ()=>ProblemService
]);
class ProblemService {
    static checkAnswer(question, answer) {
        if (question.inputType === "number") {
            return this.checkNumberAnswer(question, answer);
        }
        return answer === String(question.correctAnswer);
    }
    static checkNumberAnswer(question, answer) {
        /*
         * Aceitamos tanto:
         *
         * 4.5
         *
         * quanto:
         *
         * 4,5
         */ const normalized = answer.replace(",", ".");
        const numericAnswer = Number(normalized);
        if (!Number.isFinite(numericAnswer)) {
            return false;
        }
        const correctAnswer = Number(question.correctAnswer);
        const tolerance = question.tolerance ?? 0.0001;
        return Math.abs(numericAnswer - correctAnswer) <= tolerance;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/problems/store/problemBalance.store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProblemBalanceStore",
    ()=>useProblemBalanceStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useProblemBalanceStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((set)=>({
        instances: {},
        setInstance: (id, instance)=>set((state)=>({
                    instances: {
                        ...state.instances,
                        [id]: instance
                    }
                }))
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/problems/store/problemProgress.store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProblemProgressStore",
    ()=>useProblemProgressStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useProblemProgressStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((set)=>({
        answers: {},
        results: {},
        revealedBlocks: {},
        setAnswer: (blockId, answer)=>set((state)=>({
                    answers: {
                        ...state.answers,
                        [blockId]: answer
                    }
                })),
        setResult: (blockId, result)=>set((state)=>({
                    results: {
                        ...state.results,
                        [blockId]: result
                    }
                })),
        revealBlock: (blockId)=>set((state)=>({
                    revealedBlocks: {
                        ...state.revealedBlocks,
                        [blockId]: true
                    }
                }))
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0o1c57p._.js.map