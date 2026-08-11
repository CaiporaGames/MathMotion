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
"[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "circle": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__circle",
  "comparison": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__comparison",
  "cubeBack": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__cubeBack",
  "cubeEdge": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__cubeEdge",
  "cubeFront": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__cubeFront",
  "dimension": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__dimension",
  "explorer": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__explorer",
  "exponent": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__exponent",
  "growth": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__growth",
  "growthCard": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__growthCard",
  "header": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__header",
  "measureLine": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__measureLine",
  "metricFactor": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__metricFactor",
  "metricName": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__metricName",
  "metricRow": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__metricRow",
  "metrics": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__metrics",
  "objectPanel": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__objectPanel",
  "objectTitle": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__objectTitle",
  "preview": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__preview",
  "slider": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__slider",
  "sliders": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__sliders",
  "sphere": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__sphere",
  "sphereGuide": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__sphereGuide",
  "square": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__square",
  "versus": "MeasurementGrowthExplorer-module-scss-module__j1-e2q__versus",
});
}),
"[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeasurementGrowthExplorer",
    ()=>MeasurementGrowthExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.module.scss [app-ssr] (css module)");
;
;
function MeasurementGrowthExplorer({ config, sizeA, sizeB, analysis, onSizeAChange, onSizeBChange, onReset }) {
    const largestSize = Math.max(sizeA, sizeB);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].explorer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Exploração de escala"
                            }, void 0, false, {
                                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Comprimento, área e volume"
                            }, void 0, false, {
                                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                                lineNumber: 72,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Altere uma medida e observe como as outras grandezas crescem."
                            }, void 0, false, {
                                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onReset,
                        children: "Reiniciar"
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].comparison,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ObjectPanel, {
                        label: config.labelA,
                        shape: config.shape,
                        size: sizeA,
                        largestSize: largestSize,
                        unit: config.unit,
                        price: config.priceA,
                        currency: config.currency,
                        metrics: analysis.metricsA
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 101,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].versus,
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 136,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ObjectPanel, {
                        label: config.labelB,
                        shape: config.shape,
                        size: sizeB,
                        largestSize: largestSize,
                        unit: config.unit,
                        price: config.priceB,
                        currency: config.currency,
                        metrics: analysis.metricsB
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 144,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sliders,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SizeSlider, {
                        label: config.labelA,
                        value: sizeA,
                        config: config,
                        onChange: onSizeAChange
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 187,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SizeSlider, {
                        label: config.labelB,
                        value: sizeB,
                        config: config,
                        onChange: onSizeBChange
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 205,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GrowthComparison, {
                analysis: analysis
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 225,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricsComparison, {
                config: config,
                analysis: analysis
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 231,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
}
function ObjectPanel({ label, shape, size, largestSize, unit, price, currency }) {
    /*
     * O maior objeto ocupa aproximadamente
     * 75% da área de visualização.
     *
     * O menor mantém a proporção real.
     */ const visualSize = largestSize <= 0 ? 100 : size / largestSize * 165;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].objectPanel,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].objectTitle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 310,
                        columnNumber: 17
                    }, this),
                    price !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            currency ?? "€",
                            formatNumber(price)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 317,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 304,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].preview,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShapePreview, {
                    shape: shape,
                    visualSize: visualSize
                }, void 0, false, {
                    fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                    lineNumber: 339,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 333,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dimension,
                children: [
                    getSizeLabel(shape),
                    ":",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: [
                            formatNumber(size),
                            " ",
                            unit
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 363,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 351,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
        lineNumber: 298,
        columnNumber: 9
    }, this);
}
function ShapePreview({ shape, visualSize }) {
    const center = 110;
    switch(shape){
        case "circle":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 220 220",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: center,
                        cy: center,
                        r: visualSize / 2,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].circle
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 404,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: center - visualSize / 2,
                        y1: center,
                        x2: center + visualSize / 2,
                        y2: center,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].measureLine
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 416,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 401,
                columnNumber: 17
            }, this);
        case "square":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 220 220",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: center - visualSize / 2,
                        y: center - visualSize / 2,
                        width: visualSize,
                        height: visualSize,
                        rx: "4",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].square
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 442,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                    lineNumber: 439,
                    columnNumber: 17
                }, this);
            }
        case "cube":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CubePreview, {
                size: visualSize
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 471,
                columnNumber: 17
            }, this);
        case "sphere":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 220 220",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: center,
                        cy: center,
                        r: visualSize / 2,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sphere
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 484,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: center,
                        cy: center,
                        rx: visualSize / 6,
                        ry: visualSize / 2,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sphereGuide
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 496,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: center,
                        cy: center,
                        rx: visualSize / 2,
                        ry: visualSize / 6,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sphereGuide
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 512,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 481,
                columnNumber: 17
            }, this);
    }
}
function CubePreview({ size }) {
    const side = size * 0.7;
    const offset = Math.min(30, size * 0.18);
    const x = 110 - side / 2;
    const y = 110 - side / 2 + offset / 2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 220 220",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: x + offset,
                y: y - offset,
                width: side,
                height: side,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cubeBack
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 562,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: x,
                y: y,
                width: side,
                height: side,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cubeFront
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 577,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: x,
                y1: y,
                x2: x + offset,
                y2: y - offset,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cubeEdge
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 587,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: x + side,
                y1: y,
                x2: x + side + offset,
                y2: y - offset,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cubeEdge
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 601,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: x,
                y1: y + side,
                x2: x + offset,
                y2: y + side - offset,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cubeEdge
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 620,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: x + side,
                y1: y + side,
                x2: x + side + offset,
                y2: y + side - offset,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cubeEdge
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 638,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
        lineNumber: 557,
        columnNumber: 9
    }, this);
}
function SizeSlider({ label, value, config, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slider,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 695,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: [
                            formatNumber(value),
                            " ",
                            config.unit
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 699,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 694,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: config.range.min,
                max: config.range.max,
                step: config.range.step,
                value: value,
                onChange: (event)=>onChange(Number(event.target.value))
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 710,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
        lineNumber: 688,
        columnNumber: 9
    }, this);
}
function GrowthComparison({ analysis }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].growth,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GrowthCard, {
                exponent: "1",
                title: "Escala linear",
                formula: "k",
                value: analysis.linearFactor
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 759,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GrowthCard, {
                exponent: "2",
                title: "Crescimento quadrático",
                formula: "k²",
                value: analysis.quadraticFactor
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 772,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GrowthCard, {
                exponent: "3",
                title: "Crescimento cúbico",
                formula: "k³",
                value: analysis.cubicFactor
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 785,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
        lineNumber: 753,
        columnNumber: 9
    }, this);
}
function GrowthCard({ exponent, title, formula, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].growthCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].exponent,
                children: [
                    "dimensão",
                    " ",
                    exponent
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 830,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 840,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    formula,
                    " = ",
                    formatFactor(value)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 844,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
        lineNumber: 824,
        columnNumber: 9
    }, this);
}
function MetricsComparison({ config, analysis }) {
    const { metricsA, metricsB } = analysis;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metrics,
        children: [
            metricsA.perimeter !== undefined && metricsB.perimeter !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricRow, {
                name: getPerimeterLabel(config.shape),
                valueA: metricsA.perimeter,
                valueB: metricsB.perimeter,
                unit: config.unit
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 889,
                columnNumber: 21
            }, this),
            metricsA.area !== undefined && metricsB.area !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricRow, {
                name: "Área",
                valueA: metricsA.area,
                valueB: metricsB.area,
                unit: `${config.unit}²`
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 919,
                columnNumber: 21
            }, this),
            metricsA.surfaceArea !== undefined && metricsB.surfaceArea !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricRow, {
                name: "Área da superfície",
                valueA: metricsA.surfaceArea,
                valueB: metricsB.surfaceArea,
                unit: `${config.unit}²`
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 945,
                columnNumber: 21
            }, this),
            metricsA.volume !== undefined && metricsB.volume !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricRow, {
                name: "Volume",
                valueA: metricsA.volume,
                valueB: metricsB.volume,
                unit: `${config.unit}³`
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 971,
                columnNumber: 21
            }, this),
            analysis.pricePerAreaA !== undefined && analysis.pricePerAreaB !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricRow, {
                name: "Preço por área",
                valueA: analysis.pricePerAreaA,
                valueB: analysis.pricePerAreaB,
                unit: `${config.currency ?? "€"}/${config.unit}²`
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 997,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
        lineNumber: 875,
        columnNumber: 9
    }, this);
}
function MetricRow({ name, valueA, valueB, unit }) {
    const factor = valueA === 0 ? Number.NaN : valueB / valueA;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricRow,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricName,
                children: name
            }, void 0, false, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 1059,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: formatNumber(valueA)
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 1068,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: unit
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 1076,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 1067,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricFactor,
                children: [
                    "×",
                    formatFactor(factor)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 1081,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: formatNumber(valueB)
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 1095,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: unit
                    }, void 0, false, {
                        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                        lineNumber: 1103,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
                lineNumber: 1094,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx",
        lineNumber: 1053,
        columnNumber: 9
    }, this);
}
function getSizeLabel(shape) {
    switch(shape){
        case "circle":
        case "sphere":
            return "Diâmetro";
        case "square":
            return "Lado";
        case "cube":
            return "Aresta";
    }
}
function getPerimeterLabel(shape) {
    if (shape === "circle") {
        return "Circunferência";
    }
    return "Perímetro";
}
function formatNumber(value) {
    return value.toFixed(2).replace(/\.00$/, "");
}
function formatFactor(value) {
    if (!Number.isFinite(value)) {
        return "—";
    }
    return value.toFixed(3).replace(/\.?0+$/, "");
}
}),
"[project]/src/features/measurement-growth/controllers/MeasurementGrowthExplorerController.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeasurementGrowthExplorerController",
    ()=>MeasurementGrowthExplorerController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/measurement-growth/components/MeasurementGrowthExplorer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$services$2f$measurementGrowth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/measurement-growth/services/measurementGrowth.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$store$2f$measurementGrowth$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/measurement-growth/store/measurementGrowth.store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function MeasurementGrowthExplorerController({ id, config }) {
    const instance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$store$2f$measurementGrowth$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMeasurementGrowthStore"])((state)=>state.instances[id]);
    const setInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$store$2f$measurementGrowth$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMeasurementGrowthStore"])((state)=>state.setInstance);
    const sizeA = instance?.sizeA ?? config.initialA;
    const sizeB = instance?.sizeB ?? config.initialB;
    const analysis = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$services$2f$measurementGrowth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeasurementGrowthService"].analyze(config, sizeA, sizeB);
    function setSizeA(value) {
        setInstance(id, {
            sizeA: value,
            sizeB
        });
    }
    function setSizeB(value) {
        setInstance(id, {
            sizeA,
            sizeB: value
        });
    }
    function reset() {
        setInstance(id, {
            sizeA: config.initialA,
            sizeB: config.initialB
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$measurement$2d$growth$2f$components$2f$MeasurementGrowthExplorer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeasurementGrowthExplorer"], {
        config: config,
        sizeA: sizeA,
        sizeB: sizeB,
        analysis: analysis,
        onSizeAChange: setSizeA,
        onSizeBChange: setSizeB,
        onReset: reset
    }, void 0, false, {
        fileName: "[project]/src/features/measurement-growth/controllers/MeasurementGrowthExplorerController.tsx",
        lineNumber: 104,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/features/measurement-growth/services/measurementGrowth.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeasurementGrowthService",
    ()=>MeasurementGrowthService
]);
class MeasurementGrowthService {
    static analyze(config, sizeA, sizeB) {
        const metricsA = this.calculateMetrics(config.shape, sizeA);
        const metricsB = this.calculateMetrics(config.shape, sizeB);
        const scaleFactor = sizeA === 0 ? Number.NaN : sizeB / sizeA;
        const analysis = {
            metricsA,
            metricsB,
            scaleFactor,
            linearFactor: scaleFactor,
            quadraticFactor: scaleFactor ** 2,
            cubicFactor: scaleFactor ** 3
        };
        /*
         * Se o objeto possui área
         * e recebemos preços,
         * podemos calcular custo por área.
         */ if (metricsA.area && config.priceA !== undefined) {
            analysis.pricePerAreaA = config.priceA / metricsA.area;
        }
        if (metricsB.area && config.priceB !== undefined) {
            analysis.pricePerAreaB = config.priceB / metricsB.area;
        }
        return analysis;
    }
    static calculateMetrics(shape, size) {
        switch(shape){
            /*
             * Para círculo e esfera,
             * size representa o DIÂMETRO.
             */ case "circle":
                {
                    const radius = size / 2;
                    return {
                        size,
                        perimeter: Math.PI * size,
                        area: Math.PI * radius * radius
                    };
                }
            /*
             * Para quadrado:
             * size representa o lado.
             */ case "square":
                return {
                    size,
                    perimeter: 4 * size,
                    area: size ** 2
                };
            /*
             * Para cubo:
             * size representa a aresta.
             */ case "cube":
                return {
                    size,
                    surfaceArea: 6 * size ** 2,
                    volume: size ** 3
                };
            /*
             * Para esfera:
             * size representa o diâmetro.
             */ case "sphere":
                {
                    const radius = size / 2;
                    return {
                        size,
                        surfaceArea: 4 * Math.PI * radius ** 2,
                        volume: 4 / 3 * Math.PI * radius ** 3
                    };
                }
        }
    }
}
}),
"[project]/src/features/measurement-growth/store/measurementGrowth.store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMeasurementGrowthStore",
    ()=>useMeasurementGrowthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useMeasurementGrowthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((set)=>({
        instances: {},
        setInstance: (id, instance)=>set((state)=>({
                    instances: {
                        ...state.instances,
                        [id]: instance
                    }
                }))
    }));
}),
];

//# sourceMappingURL=_0snkv-d._.js.map