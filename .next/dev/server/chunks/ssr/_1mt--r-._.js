module.exports = [
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>create,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)");
;
;
const identity = (arg)=>arg;
function useStore(api, selector = identity) {
    const slice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore(api.subscribe, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>selector(api.getState()), [
        api,
        selector
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>selector(api.getInitialState()), [
        api,
        selector
    ]));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createImpl = (createState)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStore = (selector)=>useStore(api, selector);
    Object.assign(useBoundStore, api);
    return useBoundStore;
};
const create = (createState)=>createState ? createImpl(createState) : createImpl;
;
}),
"[project]/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/features/balance/components/BalanceControls.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttons": "BalanceControls-module-scss-module__hrkplW__buttons",
  "controls": "BalanceControls-module-scss-module__hrkplW__controls",
  "operationGroup": "BalanceControls-module-scss-module__hrkplW__operationGroup",
  "side": "BalanceControls-module-scss-module__hrkplW__side",
  "sideHeader": "BalanceControls-module-scss-module__hrkplW__sideHeader",
});
}),
"[project]/src/features/balance/components/BalanceControls.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BalanceControls",
    ()=>BalanceControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/balance/components/BalanceControls.module.scss [app-ssr] (css module)");
;
;
function BalanceControls({ left, right, onAddBox, onRemoveBox, onChangeWeight }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controls,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SideControls, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SideControls, {
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
function SideControls({ title, sideId, state, onAddBox, onRemoveBox, onChangeWeight }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].side,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].operationGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Caixas"
                    }, void 0, false, {
                        fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                        lineNumber: 136,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttons,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onRemoveBox(sideId),
                                children: "− caixa"
                            }, void 0, false, {
                                fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                                lineNumber: 145,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].operationGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Peso conhecido"
                    }, void 0, false, {
                        fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                        lineNumber: 176,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttons,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onChangeWeight(sideId, -2),
                                children: "− 2 kg"
                            }, void 0, false, {
                                fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                                lineNumber: 186,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onChangeWeight(sideId, -1),
                                children: "− 1 kg"
                            }, void 0, false, {
                                fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                                lineNumber: 198,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onChangeWeight(sideId, 1),
                                children: "+ 1 kg"
                            }, void 0, false, {
                                fileName: "[project]/src/features/balance/components/BalanceControls.tsx",
                                lineNumber: 210,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/features/balance/components/BalanceLabPage.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "balanced": "BalanceLabPage-module-scss-module__8ePGea__balanced",
  "container": "BalanceLabPage-module-scss-module__8ePGea__container",
  "equation": "BalanceLabPage-module-scss-module__8ePGea__equation",
  "experiment": "BalanceLabPage-module-scss-module__8ePGea__experiment",
  "eyebrow": "BalanceLabPage-module-scss-module__8ePGea__eyebrow",
  "header": "BalanceLabPage-module-scss-module__8ePGea__header",
  "left-heavy": "BalanceLabPage-module-scss-module__8ePGea__left-heavy",
  "question": "BalanceLabPage-module-scss-module__8ePGea__question",
  "resetButton": "BalanceLabPage-module-scss-module__8ePGea__resetButton",
  "right-heavy": "BalanceLabPage-module-scss-module__8ePGea__right-heavy",
  "scaleCard": "BalanceLabPage-module-scss-module__8ePGea__scaleCard",
  "status": "BalanceLabPage-module-scss-module__8ePGea__status",
  "statusDot": "BalanceLabPage-module-scss-module__8ePGea__statusDot",
  "workspace": "BalanceLabPage-module-scss-module__8ePGea__workspace",
});
}),
"[project]/src/features/balance/components/BalanceLabPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BalanceLabPage",
    ()=>BalanceLabPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/balance/components/BalanceScale.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/balance/components/BalanceControls.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceLabPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/balance/components/BalanceLabPage.module.scss [app-ssr] (css module)");
;
;
;
;
function BalanceLabPage({ left, right, status, tiltAngle, statusText, equationText, onAddBox, onRemoveBox, onChangeWeight, onReset }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceLabPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceLabPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceLabPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eyebrow,
                                children: "Laboratório"
                            }, void 0, false, {
                                fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Balança"
                            }, void 0, false, {
                                fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                                lineNumber: 87,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Experimente retirar ou acrescentar caixas e pesos. Observe o que acontece com o equilíbrio."
                            }, void 0, false, {
                                fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceLabPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resetButton,
                        onClick: onReset,
                        children: "Reiniciar"
                    }, void 0, false, {
                        fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceLabPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].workspace,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceLabPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scaleCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceLabPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].equation,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Situação atual"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                                        lineNumber: 128,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: equationText
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                                        lineNumber: 132,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                                lineNumber: 123,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BalanceScale"], {
                                left: left,
                                right: right,
                                status: status,
                                tiltAngle: tiltAngle
                            }, void 0, false, {
                                fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                                lineNumber: 137,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceLabPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].status} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceLabPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][status]}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceLabPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusDot
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                                        lineNumber: 153,
                                        columnNumber: 25
                                    }, this),
                                    statusText
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                                lineNumber: 146,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceLabPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].experiment,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceLabPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].question,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Investigue"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                                        lineNumber: 176,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "O que precisamos fazer para manter a balança equilibrada?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                                        lineNumber: 180,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Experimente fazer uma operação num único prato e observe o resultado."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                                        lineNumber: 186,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                                lineNumber: 170,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BalanceControls"], {
                                left: left,
                                right: right,
                                onAddBox: onAddBox,
                                onRemoveBox: onRemoveBox,
                                onChangeWeight: onChangeWeight
                            }, void 0, false, {
                                fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                                lineNumber: 195,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                        lineNumber: 164,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/balance/components/BalanceLabPage.tsx",
        lineNumber: 66,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/features/balance/components/BalanceScale.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/src/features/balance/components/BalanceScale.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BalanceScale",
    ()=>BalanceScale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/balance/components/BalanceScale.module.scss [app-ssr] (css module)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scale,
            viewBox: "0 0 900 520",
            role: "img",
            "aria-label": getAccessibilityText(status),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "310",
                    y1: "475",
                    x2: "590",
                    y2: "475",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ground
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 78,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "\r\n\n                        M 450 185\r\n\n                        L 450 430\r\n\n                        L 365 475\r\n\n                        L 535 475\r\n\n                        Z\r\n\n                    ",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].support
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: pivotX,
                    cy: pivotY,
                    r: "23",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pivot
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 103,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: leftX,
                    y1: leftY,
                    x2: rightX,
                    y2: rightY,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].beam
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 113,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: leftX,
                    y1: leftY,
                    x2: leftX - 90,
                    y2: leftPanY,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rope
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 124,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: leftX,
                    y1: leftY,
                    x2: leftX + 90,
                    y2: leftPanY,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rope
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 134,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `
                        M ${leftX - 125} ${leftPanY}
                        Q ${leftX} ${leftPanY + 45}
                          ${leftX + 125} ${leftPanY}
                    `,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pan
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 145,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: rightX,
                    y1: rightY,
                    x2: rightX - 90,
                    y2: rightPanY,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rope
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 157,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: rightX,
                    y1: rightY,
                    x2: rightX + 90,
                    y2: rightPanY,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rope
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 167,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `
                        M ${rightX - 125} ${rightPanY}
                        Q ${rightX} ${rightPanY + 45}
                          ${rightX + 125} ${rightPanY}
                    `,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pan
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 178,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BalanceItems, {
                    side: left,
                    centerX: leftX,
                    panY: leftPanY
                }, void 0, false, {
                    fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                    lineNumber: 189,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BalanceItems, {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: items.map((item, index)=>{
            const x = startX + index * (itemWidth + gap);
            const y = panY - 61;
            if (item.kind === "box") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: x,
                            y: y,
                            width: "56",
                            height: "52",
                            rx: "7",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].box
                        }, void 0, false, {
                            fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                            lineNumber: 297,
                            columnNumber: 33
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: x + 28,
                            y: y + 32,
                            textAnchor: "middle",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].boxText,
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: x,
                        y: y,
                        width: "56",
                        height: "52",
                        rx: "10",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].weight
                    }, void 0, false, {
                        fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                        lineNumber: 336,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: x + 28,
                        y: y + 24,
                        textAnchor: "middle",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].weightNumber,
                        children: side.knownWeight
                    }, void 0, false, {
                        fileName: "[project]/src/features/balance/components/BalanceScale.tsx",
                        lineNumber: 347,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: x + 28,
                        y: y + 40,
                        textAnchor: "middle",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].weightUnit,
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
}),
"[project]/src/features/balance/config/balanceLab.config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "balanceLabScenario",
    ()=>balanceLabScenario
]);
const balanceLabScenario = {
    left: {
        boxCount: 2,
        knownWeight: 2
    },
    right: {
        boxCount: 0,
        knownWeight: 10
    },
    /*
     * Informação escondida do aluno.
     *
     * Serve apenas para a simulação
     * saber quando existe equilíbrio.
     */ hiddenBoxWeight: 4
};
}),
"[project]/src/features/balance/controllers/BalancePageController.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BalancePageController",
    ()=>BalancePageController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceLabPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/balance/components/BalanceLabPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$controllers$2f$useBalanceController$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/balance/controllers/useBalanceController.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function BalancePageController() {
    const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$controllers$2f$useBalanceController$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBalanceController"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceLabPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BalanceLabPage"], {
        left: controller.left,
        right: controller.right,
        status: controller.status,
        tiltAngle: controller.tiltAngle,
        statusText: controller.statusText,
        equationText: controller.equationText,
        onAddBox: controller.onAddBox,
        onRemoveBox: controller.onRemoveBox,
        onChangeWeight: controller.onChangeWeight,
        onReset: controller.onReset
    }, void 0, false, {
        fileName: "[project]/src/features/balance/controllers/BalancePageController.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/features/balance/controllers/useBalanceController.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBalanceController",
    ()=>useBalanceController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$config$2f$balanceLab$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/balance/config/balanceLab.config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/balance/services/balance.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$store$2f$balance$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/balance/store/balance.store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function useBalanceController() {
    const left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$store$2f$balance$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBalanceStore"])((state)=>state.left);
    const right = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$store$2f$balance$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBalanceStore"])((state)=>state.right);
    const setLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$store$2f$balance$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBalanceStore"])((state)=>state.setLeft);
    const setRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$store$2f$balance$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBalanceStore"])((state)=>state.setRight);
    const status = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BalanceService"].getStatus(left, right, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$config$2f$balanceLab$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["balanceLabScenario"].hiddenBoxWeight);
    const tiltAngle = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BalanceService"].calculateTiltAngle(left, right, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$config$2f$balanceLab$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["balanceLabScenario"].hiddenBoxWeight);
    function updateSide(sideId, side) {
        if (sideId === "left") {
            setLeft(side);
            return;
        }
        setRight(side);
    }
    function getSide(sideId) {
        if (sideId === "left") {
            return left;
        }
        return right;
    }
    function changeWeight(sideId, delta) {
        const currentSide = getSide(sideId);
        const newSide = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BalanceService"].changeKnownWeight(currentSide, delta);
        updateSide(sideId, newSide);
    }
    function changeBoxes(sideId, delta) {
        const currentSide = getSide(sideId);
        const newSide = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BalanceService"].changeBoxCount(currentSide, delta);
        updateSide(sideId, newSide);
    }
    function reset() {
        setLeft({
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$config$2f$balanceLab$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["balanceLabScenario"].left
        });
        setRight({
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$config$2f$balanceLab$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["balanceLabScenario"].right
        });
    }
    return {
        left,
        right,
        status,
        tiltAngle,
        statusText: getStatusText(status),
        equationText: `${formatSide(left)} = ${formatSide(right)}`,
        onAddBox: (side)=>changeBoxes(side, 1),
        onRemoveBox: (side)=>changeBoxes(side, -1),
        onChangeWeight: changeWeight,
        onReset: reset
    };
}
function getStatusText(status) {
    switch(status){
        case "balanced":
            return "A balança está equilibrada.";
        case "left-heavy":
            return "O prato esquerdo está mais pesado.";
        case "right-heavy":
            return "O prato direito está mais pesado.";
    }
}
function formatSide(side) {
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
}),
"[project]/src/features/balance/services/balance.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BalanceService",
    ()=>BalanceService
]);
class BalanceService {
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
}),
"[project]/src/features/balance/store/balance.store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBalanceStore",
    ()=>useBalanceStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$config$2f$balanceLab$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/balance/config/balanceLab.config.ts [app-ssr] (ecmascript)");
;
;
const useBalanceStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((set)=>({
        left: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$config$2f$balanceLab$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["balanceLabScenario"].left
        },
        right: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$config$2f$balanceLab$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["balanceLabScenario"].right
        },
        setLeft: (left)=>set({
                left
            }),
        setRight: (right)=>set({
                right
            })
    }));
}),
];

//# sourceMappingURL=_1mt--r-._.js.map