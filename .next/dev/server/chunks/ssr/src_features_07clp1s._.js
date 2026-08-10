module.exports = [
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
"[project]/src/features/balance/services/balance.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/features/geometry/components/RiverCrossingBoard.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bank": "RiverCrossingBoard-module-scss-module__R9Nsoq__bank",
  "board": "RiverCrossingBoard-module-scss-module__R9Nsoq__board",
  "corner": "RiverCrossingBoard-module-scss-module__R9Nsoq__corner",
  "cornerText": "RiverCrossingBoard-module-scss-module__R9Nsoq__cornerText",
  "land": "RiverCrossingBoard-module-scss-module__R9Nsoq__land",
  "measure": "RiverCrossingBoard-module-scss-module__R9Nsoq__measure",
  "measureText": "RiverCrossingBoard-module-scss-module__R9Nsoq__measureText",
  "plank": "RiverCrossingBoard-module-scss-module__R9Nsoq__plank",
  "plankText": "RiverCrossingBoard-module-scss-module__R9Nsoq__plankText",
  "selectedPlank": "RiverCrossingBoard-module-scss-module__R9Nsoq__selectedPlank",
  "water": "RiverCrossingBoard-module-scss-module__R9Nsoq__water",
  "wrapper": "RiverCrossingBoard-module-scss-module__R9Nsoq__wrapper",
});
}),
"[project]/src/features/geometry/components/RiverCrossingBoard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RiverCrossingBoard",
    ()=>RiverCrossingBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/geometry/components/RiverCrossingBoard.module.scss [app-ssr] (css module)");
"use client";
;
;
;
function RiverCrossingBoard({ scenario, planks, selectedPlankId, onPlankPointerDown, onPointerMove, onPointerUp, onSelectPlank }) {
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const outer = scenario.margin;
    const inner = scenario.margin + scenario.riverWidth;
    /*
     * O polígono forma um rio em L:
     *
     *   ~~~~~~~~~~~~~
     *   ~~~~~~~~~~~~~
     *   ~~~
     *   ~~~
     *   ~~~
     *
     * A distância entre outer e inner
     * representa os 4 metros.
     */ const waterPath = `
        M ${outer} ${scenario.height}
        L ${outer} ${outer}
        L ${scenario.width} ${outer}
        L ${scenario.width} ${inner}
        L ${inner} ${inner}
        L ${inner} ${scenario.height}
        Z
    `;
    function toWorldPoint(clientX, clientY) {
        const svg = svgRef.current;
        if (!svg) {
            return {
                x: 0,
                y: 0
            };
        }
        const screenPoint = svg.createSVGPoint();
        screenPoint.x = clientX;
        screenPoint.y = clientY;
        const matrix = svg.getScreenCTM()?.inverse();
        if (!matrix) {
            return {
                x: 0,
                y: 0
            };
        }
        const result = screenPoint.matrixTransform(matrix);
        return {
            x: result.x,
            y: result.y
        };
    }
    function handlePointerMove(event) {
        onPointerMove(toWorldPoint(event.clientX, event.clientY));
    }
    function handlePointerUp() {
        onPointerUp();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ref: svgRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].board,
            viewBox: `0 0 ${scenario.width} ${scenario.height}`,
            role: "img",
            "aria-label": "Rio em forma de L com duas tábuas móveis",
            onPointerMove: handlePointerMove,
            onPointerUp: handlePointerUp,
            onPointerCancel: handlePointerUp,
            onPointerLeave: handlePointerUp,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "0",
                    y: "0",
                    width: scenario.width,
                    height: scenario.height,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].land
                }, void 0, false, {
                    fileName: "[project]/src/features/geometry/components/RiverCrossingBoard.tsx",
                    lineNumber: 208,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: waterPath,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].water
                }, void 0, false, {
                    fileName: "[project]/src/features/geometry/components/RiverCrossingBoard.tsx",
                    lineNumber: 223,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `
                        M ${outer} ${scenario.height}
                        L ${outer} ${outer}
                        L ${scenario.width} ${outer}
                    `,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bank
                }, void 0, false, {
                    fileName: "[project]/src/features/geometry/components/RiverCrossingBoard.tsx",
                    lineNumber: 231,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `
                        M ${inner} ${scenario.height}
                        L ${inner} ${inner}
                        L ${scenario.width} ${inner}
                    `,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bank
                }, void 0, false, {
                    fileName: "[project]/src/features/geometry/components/RiverCrossingBoard.tsx",
                    lineNumber: 243,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: outer,
                    y1: scenario.height - 0.65,
                    x2: inner,
                    y2: scenario.height - 0.65,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].measure
                }, void 0, false, {
                    fileName: "[project]/src/features/geometry/components/RiverCrossingBoard.tsx",
                    lineNumber: 255,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: outer,
                    y1: scenario.height - 0.85,
                    x2: outer,
                    y2: scenario.height - 0.45,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].measure
                }, void 0, false, {
                    fileName: "[project]/src/features/geometry/components/RiverCrossingBoard.tsx",
                    lineNumber: 265,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: inner,
                    y1: scenario.height - 0.85,
                    x2: inner,
                    y2: scenario.height - 0.45,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].measure
                }, void 0, false, {
                    fileName: "[project]/src/features/geometry/components/RiverCrossingBoard.tsx",
                    lineNumber: 275,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: (outer + inner) / 2,
                    y: scenario.height - 0.85,
                    textAnchor: "middle",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].measureText,
                    children: "4 m"
                }, void 0, false, {
                    fileName: "[project]/src/features/geometry/components/RiverCrossingBoard.tsx",
                    lineNumber: 285,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: inner,
                    cy: inner,
                    r: "0.12",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].corner
                }, void 0, false, {
                    fileName: "[project]/src/features/geometry/components/RiverCrossingBoard.tsx",
                    lineNumber: 305,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: inner + 0.25,
                    y: inner - 0.25,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cornerText,
                    children: "canto"
                }, void 0, false, {
                    fileName: "[project]/src/features/geometry/components/RiverCrossingBoard.tsx",
                    lineNumber: 314,
                    columnNumber: 17
                }, this),
                planks.map((plank)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Plank, {
                        plank: plank,
                        selected: selectedPlankId === plank.id,
                        onPointerDown: (event)=>{
                            event.stopPropagation();
                            const svg = svgRef.current;
                            svg?.setPointerCapture(event.pointerId);
                            onSelectPlank(plank.id);
                            onPlankPointerDown(plank.id, toWorldPoint(event.clientX, event.clientY));
                        }
                    }, plank.id, false, {
                        fileName: "[project]/src/features/geometry/components/RiverCrossingBoard.tsx",
                        lineNumber: 328,
                        columnNumber: 29
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/geometry/components/RiverCrossingBoard.tsx",
            lineNumber: 169,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/geometry/components/RiverCrossingBoard.tsx",
        lineNumber: 163,
        columnNumber: 9
    }, this);
}
function Plank({ plank, selected, onPointerDown }) {
    const thickness = 0.32;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        transform: `
                translate(
                    ${plank.center.x}
                    ${plank.center.y}
                )
                rotate(${plank.angle})
            `,
        className: selected ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectedPlank : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].plank,
        onPointerDown: onPointerDown,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: -plank.length / 2,
                y: -thickness / 2,
                width: plank.length,
                height: thickness,
                rx: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/features/geometry/components/RiverCrossingBoard.tsx",
                lineNumber: 430,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "0",
                y: "-0.28",
                textAnchor: "middle",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].plankText,
                children: plank.label
            }, void 0, false, {
                fileName: "[project]/src/features/geometry/components/RiverCrossingBoard.tsx",
                lineNumber: 446,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/geometry/components/RiverCrossingBoard.tsx",
        lineNumber: 409,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/features/geometry/services/geometry.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeometryService",
    ()=>GeometryService
]);
class GeometryService {
    static movePlank(plank, center, boardWidth, boardHeight) {
        return {
            ...plank,
            center: {
                x: this.clamp(center.x, 0, boardWidth),
                y: this.clamp(center.y, 0, boardHeight)
            }
        };
    }
    static rotatePlank(plank, deltaAngle) {
        return {
            ...plank,
            angle: this.normalizeAngle(plank.angle + deltaAngle)
        };
    }
    static getPlankEndpoints(plank) {
        const radians = plank.angle * Math.PI / 180;
        const halfLength = plank.length / 2;
        const dx = Math.cos(radians) * halfLength;
        const dy = Math.sin(radians) * halfLength;
        return {
            start: {
                x: plank.center.x - dx,
                y: plank.center.y - dy
            },
            end: {
                x: plank.center.x + dx,
                y: plank.center.y + dy
            }
        };
    }
    static distance(a, b) {
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    static normalizeAngle(angle) {
        let result = angle % 360;
        if (result < 0) {
            result += 360;
        }
        return result;
    }
    static clamp(value, minimum, maximum) {
        return Math.max(minimum, Math.min(maximum, value));
    }
}
}),
"[project]/src/features/geometry/store/geometry.store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGeometryStore",
    ()=>useGeometryStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useGeometryStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((set)=>({
        instances: {},
        setInstance: (blockId, instance)=>set((state)=>({
                    instances: {
                        ...state.instances,
                        [blockId]: instance
                    }
                }))
    }));
}),
"[project]/src/features/problems/components/blocks/DiscoveryBlock.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "discovery": "DiscoveryBlock-module-scss-module__kVwvFa__discovery",
  "hidden": "DiscoveryBlock-module-scss-module__kVwvFa__hidden",
});
}),
"[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiscoveryBlock",
    ()=>DiscoveryBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$DiscoveryBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/problems/components/blocks/DiscoveryBlock.module.scss [app-ssr] (css module)");
;
;
function DiscoveryBlock({ block, revealed, onReveal }) {
    if (!revealed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$DiscoveryBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hidden,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Descoberta"
                }, void 0, false, {
                    fileName: "[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Antes de continuar..."
                }, void 0, false, {
                    fileName: "[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Tente explicar com as suas próprias palavras o que observou."
                }, void 0, false, {
                    fileName: "[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$DiscoveryBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].discovery,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Descoberta"
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: block.title
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/src/features/problems/components/blocks/ProblemBalanceBlock.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "block": "ProblemBalanceBlock-module-scss-module__6DUWkW__block",
  "equation": "ProblemBalanceBlock-module-scss-module__6DUWkW__equation",
  "header": "ProblemBalanceBlock-module-scss-module__6DUWkW__header",
});
}),
"[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProblemBalanceBlock",
    ()=>ProblemBalanceBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/balance/components/BalanceScale.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/balance/components/BalanceControls.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemBalanceBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/problems/components/blocks/ProblemBalanceBlock.module.scss [app-ssr] (css module)");
;
;
;
;
function ProblemBalanceBlock({ block, left, right, status, tiltAngle, equationText, onAddBox, onRemoveBox, onChangeWeight, onReset }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemBalanceBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].block,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemBalanceBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Experimente"
                            }, void 0, false, {
                                fileName: "[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx",
                                lineNumber: 94,
                                columnNumber: 21
                            }, this),
                            block.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: block.title
                            }, void 0, false, {
                                fileName: "[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx",
                                lineNumber: 101,
                                columnNumber: 29
                            }, this),
                            block.instruction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            block.showEquation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemBalanceBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].equation,
                children: equationText
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx",
                lineNumber: 138,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceScale$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BalanceScale"], {
                left: left,
                right: right,
                status: status,
                tiltAngle: tiltAngle
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx",
                lineNumber: 151,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$components$2f$BalanceControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BalanceControls"], {
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
}),
"[project]/src/features/problems/components/blocks/ProblemGeometryBlock.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "block": "ProblemGeometryBlock-module-scss-module__YgGpQG__block",
  "controls": "ProblemGeometryBlock-module-scss-module__YgGpQG__controls",
  "header": "ProblemGeometryBlock-module-scss-module__YgGpQG__header",
  "plankControl": "ProblemGeometryBlock-module-scss-module__YgGpQG__plankControl",
  "selectedControl": "ProblemGeometryBlock-module-scss-module__YgGpQG__selectedControl",
  "tip": "ProblemGeometryBlock-module-scss-module__YgGpQG__tip",
});
}),
"[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProblemGeometryBlock",
    ()=>ProblemGeometryBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/geometry/components/RiverCrossingBoard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemGeometryBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/problems/components/blocks/ProblemGeometryBlock.module.scss [app-ssr] (css module)");
;
;
;
function ProblemGeometryBlock({ block, planks, selectedPlankId, onSelectPlank, onPlankPointerDown, onPointerMove, onPointerUp, onRotate, onReset }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemGeometryBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].block,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemGeometryBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Explore"
                            }, void 0, false, {
                                fileName: "[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx",
                                lineNumber: 83,
                                columnNumber: 21
                            }, this),
                            block.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: block.title
                            }, void 0, false, {
                                fileName: "[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx",
                                lineNumber: 90,
                                columnNumber: 29
                            }, this),
                            block.instruction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: block.instruction
                            }, void 0, false, {
                                fileName: "[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx",
                                lineNumber: 103,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onReset,
                        children: "Reiniciar"
                    }, void 0, false, {
                        fileName: "[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx",
                        lineNumber: 113,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$components$2f$RiverCrossingBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiverCrossingBoard"], {
                scenario: block.scenario,
                planks: planks,
                selectedPlankId: selectedPlankId,
                onSelectPlank: onSelectPlank,
                onPlankPointerDown: onPlankPointerDown,
                onPointerMove: onPointerMove,
                onPointerUp: onPointerUp
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx",
                lineNumber: 124,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemGeometryBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controls,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Rodar tábua:"
                    }, void 0, false, {
                        fileName: "[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx",
                        lineNumber: 160,
                        columnNumber: 17
                    }, this),
                    planks.map((plank)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: selectedPlankId === plank.id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemGeometryBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectedControl : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemGeometryBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].plankControl,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: plank.label
                                }, void 0, false, {
                                    fileName: "[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx",
                                    lineNumber: 182,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onRotate(plank.id, -5),
                                    children: "↺ 5°"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx",
                                    lineNumber: 188,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        Math.round(plank.angle),
                                        "°"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx",
                                    lineNumber: 201,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onRotate(plank.id, 5),
                                    children: "5° ↻"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx",
                                    lineNumber: 210,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, plank.id, true, {
                            fileName: "[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx",
                            lineNumber: 168,
                            columnNumber: 29
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx",
                lineNumber: 154,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemGeometryBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tip,
                children: "Arraste as tábuas pelo desenho e use os botões para rodá-las."
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx",
                lineNumber: 231,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx",
        lineNumber: 70,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/features/problems/components/blocks/QuestionBlock.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/src/features/problems/components/blocks/QuestionBlock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestionBlock",
    ()=>QuestionBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/problems/components/blocks/QuestionBlock.module.scss [app-ssr] (css module)");
;
;
function QuestionBlock({ block, answer, result, onAnswerChange, onCheck }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].question,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                children: "Sua vez"
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/QuestionBlock.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: block.prompt
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/QuestionBlock.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            block.inputType === "number" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].answerRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            block.inputType === "multiple-choice" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].options,
                children: [
                    block.options?.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: answer === option.value ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selected : "",
                            onClick: ()=>onAnswerChange(option.value),
                            children: option.label
                        }, option.id, false, {
                            fileName: "[project]/src/features/problems/components/blocks/QuestionBlock.tsx",
                            lineNumber: 101,
                            columnNumber: 33
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkButton,
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
            result === true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].correct,
                children: block.successMessage ?? "Correto!"
            }, void 0, false, {
                fileName: "[project]/src/features/problems/components/blocks/QuestionBlock.tsx",
                lineNumber: 147,
                columnNumber: 17
            }, this),
            result === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].incorrect,
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
}),
"[project]/src/features/problems/controllers/blocks/DiscoveryBlockController.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiscoveryBlockController",
    ()=>DiscoveryBlockController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$DiscoveryBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/problems/components/blocks/DiscoveryBlock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/problems/store/problemProgress.store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function DiscoveryBlockController({ block }) {
    const revealed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProblemProgressStore"])((state)=>state.revealedBlocks[block.id] ?? false);
    const revealBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProblemProgressStore"])((state)=>state.revealBlock);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$DiscoveryBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiscoveryBlock"], {
        block: block,
        revealed: revealed,
        onReveal: ()=>revealBlock(block.id)
    }, void 0, false, {
        fileName: "[project]/src/features/problems/controllers/blocks/DiscoveryBlockController.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/features/problems/controllers/blocks/ProblemBalanceBlockController.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProblemBalanceBlockController",
    ()=>ProblemBalanceBlockController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/balance/services/balance.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemBalanceBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/problems/components/blocks/ProblemBalanceBlock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemBalance$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/problems/store/problemBalance.store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ProblemBalanceBlockController({ block }) {
    const instance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemBalance$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProblemBalanceStore"])((state)=>state.instances[block.id]);
    const setInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemBalance$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProblemBalanceStore"])((state)=>state.setInstance);
    /*
     * Se ainda não existe estado salvo
     * para esta balança, usamos o cenário
     * inicial do problema.
     */ const left = instance?.left ?? block.scenario.left;
    const right = instance?.right ?? block.scenario.right;
    const status = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BalanceService"].getStatus(left, right, block.scenario.hiddenBoxWeight);
    const tiltAngle = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BalanceService"].calculateTiltAngle(left, right, block.scenario.hiddenBoxWeight);
    function updateSide(sideId, newSide) {
        setInstance(block.id, {
            left: sideId === "left" ? newSide : left,
            right: sideId === "right" ? newSide : right
        });
    }
    function changeWeight(sideId, delta) {
        const side = sideId === "left" ? left : right;
        const newSide = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BalanceService"].changeKnownWeight(side, delta);
        updateSide(sideId, newSide);
    }
    function changeBoxes(sideId, delta) {
        const side = sideId === "left" ? left : right;
        const newSide = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BalanceService"].changeBoxCount(side, delta);
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
    const equationText = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BalanceService"].formatSide(left)} = ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$balance$2f$services$2f$balance$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BalanceService"].formatSide(right)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemBalanceBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProblemBalanceBlock"], {
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
}),
"[project]/src/features/problems/controllers/blocks/ProblemGeometryBlockController.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProblemGeometryBlockController",
    ()=>ProblemGeometryBlockController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$services$2f$geometry$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/geometry/services/geometry.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$store$2f$geometry$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/geometry/store/geometry.store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemGeometryBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/problems/components/blocks/ProblemGeometryBlock.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ProblemGeometryBlockController({ block }) {
    const instance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$store$2f$geometry$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGeometryStore"])((state)=>state.instances[block.id]);
    const setInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$store$2f$geometry$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGeometryStore"])((state)=>state.setInstance);
    const planks = instance?.planks ?? block.scenario.planks;
    const selectedPlankId = instance?.selectedPlankId ?? null;
    const drag = instance?.drag ?? null;
    function save(newPlanks, newSelectedPlankId = selectedPlankId, newDrag = drag) {
        setInstance(block.id, {
            planks: newPlanks,
            selectedPlankId: newSelectedPlankId,
            drag: newDrag
        });
    }
    function selectPlank(plankId) {
        save(planks, plankId, null);
    }
    function startDrag(plankId, point) {
        const plank = planks.find((current)=>current.id === plankId);
        if (!plank) {
            return;
        }
        save(planks, plankId, {
            plankId,
            offset: {
                x: plank.center.x - point.x,
                y: plank.center.y - point.y
            }
        });
    }
    function dragTo(point) {
        if (!drag) {
            return;
        }
        const newPlanks = planks.map((plank)=>{
            if (plank.id !== drag.plankId) {
                return plank;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$services$2f$geometry$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeometryService"].movePlank(plank, {
                x: point.x + drag.offset.x,
                y: point.y + drag.offset.y
            }, block.scenario.width, block.scenario.height);
        });
        save(newPlanks, drag.plankId, drag);
    }
    function endDrag() {
        if (!drag) {
            return;
        }
        save(planks, selectedPlankId, null);
    }
    function rotate(plankId, deltaAngle) {
        const newPlanks = planks.map((plank)=>{
            if (plank.id !== plankId) {
                return plank;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geometry$2f$services$2f$geometry$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeometryService"].rotatePlank(plank, deltaAngle);
        });
        save(newPlanks, plankId, null);
    }
    function reset() {
        setInstance(block.id, {
            planks: block.scenario.planks.map((plank)=>({
                    ...plank,
                    center: {
                        ...plank.center
                    }
                })),
            selectedPlankId: null,
            drag: null
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$ProblemGeometryBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProblemGeometryBlock"], {
        block: block,
        planks: planks,
        selectedPlankId: selectedPlankId,
        onSelectPlank: selectPlank,
        onPlankPointerDown: startDrag,
        onPointerMove: dragTo,
        onPointerUp: endDrag,
        onRotate: rotate,
        onReset: reset
    }, void 0, false, {
        fileName: "[project]/src/features/problems/controllers/blocks/ProblemGeometryBlockController.tsx",
        lineNumber: 258,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/features/problems/controllers/blocks/QuestionBlockController.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestionBlockController",
    ()=>QuestionBlockController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/problems/components/blocks/QuestionBlock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$services$2f$problem$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/problems/services/problem.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/problems/store/problemProgress.store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function QuestionBlockController({ block }) {
    const answer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProblemProgressStore"])((state)=>state.answers[block.id] ?? "");
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProblemProgressStore"])((state)=>state.results[block.id] ?? null);
    const setAnswer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProblemProgressStore"])((state)=>state.setAnswer);
    const setResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$store$2f$problemProgress$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProblemProgressStore"])((state)=>state.setResult);
    function handleAnswerChange(value) {
        setAnswer(block.id, value);
        setResult(block.id, null);
    }
    function handleCheck() {
        const isCorrect = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$services$2f$problem$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProblemService"].checkAnswer(block, answer);
        setResult(block.id, isCorrect);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$problems$2f$components$2f$blocks$2f$QuestionBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuestionBlock"], {
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
}),
"[project]/src/features/problems/services/problem.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/features/problems/store/problemBalance.store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProblemBalanceStore",
    ()=>useProblemBalanceStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useProblemBalanceStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((set)=>({
        instances: {},
        setInstance: (id, instance)=>set((state)=>({
                    instances: {
                        ...state.instances,
                        [id]: instance
                    }
                }))
    }));
}),
"[project]/src/features/problems/store/problemProgress.store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProblemProgressStore",
    ()=>useProblemProgressStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useProblemProgressStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((set)=>({
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
}),
];

//# sourceMappingURL=src_features_07clp1s._.js.map