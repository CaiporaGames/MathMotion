module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/features/derivative-explorer/components/DerivativeExplorer.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "axis": "DerivativeExplorer-module-scss-module__mwx3PG__axis",
  "controls": "DerivativeExplorer-module-scss-module__mwx3PG__controls",
  "curve": "DerivativeExplorer-module-scss-module__mwx3PG__curve",
  "explorer": "DerivativeExplorer-module-scss-module__mwx3PG__explorer",
  "graph": "DerivativeExplorer-module-scss-module__mwx3PG__graph",
  "gridLine": "DerivativeExplorer-module-scss-module__mwx3PG__gridLine",
  "header": "DerivativeExplorer-module-scss-module__mwx3PG__header",
  "pointP": "DerivativeExplorer-module-scss-module__mwx3PG__pointP",
  "pointQ": "DerivativeExplorer-module-scss-module__mwx3PG__pointQ",
  "secant": "DerivativeExplorer-module-scss-module__mwx3PG__secant",
  "tangent": "DerivativeExplorer-module-scss-module__mwx3PG__tangent",
  "valueCard": "DerivativeExplorer-module-scss-module__mwx3PG__valueCard",
  "values": "DerivativeExplorer-module-scss-module__mwx3PG__values",
});
}),
"[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DerivativeExplorer",
    ()=>DerivativeExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/derivative-explorer/components/DerivativeExplorer.module.scss [app-ssr] (css module)");
;
;
function DerivativeExplorer({ config, x, h, analysis, onXChange, onHChange, onReset }) {
    const width = 900;
    const height = 500;
    const perturbationSymbol = config.perturbationSymbol ?? "h";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].explorer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Exploração gráfica"
                            }, void 0, false, {
                                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Derivada e perturbação"
                            }, void 0, false, {
                                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Compare o ponto x com o ponto x + ",
                                    perturbationSymbol,
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                                lineNumber: 82,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onReset,
                        children: "Reiniciar"
                    }, void 0, false, {
                        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].graph,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: `0 0 ${width} ${height}`,
                    role: "img",
                    "aria-label": "Gráfico mostrando ponto, secante e tangente",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Grid, {
                            viewport: config.viewport,
                            width: width,
                            height: height
                        }, void 0, false, {
                            fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Axes, {
                            viewport: config.viewport,
                            width: width,
                            height: height
                        }, void 0, false, {
                            fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                            lineNumber: 130,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Curve, {
                            points: analysis.curve,
                            viewport: config.viewport,
                            width: width,
                            height: height
                        }, void 0, false, {
                            fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                            lineNumber: 140,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MathematicalLine, {
                            point: analysis.pointP,
                            slope: analysis.tangentSlope,
                            viewport: config.viewport,
                            width: width,
                            height: height,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tangent
                        }, void 0, false, {
                            fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                            lineNumber: 154,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MathematicalLine, {
                            point: analysis.pointP,
                            slope: analysis.secantSlope,
                            viewport: config.viewport,
                            width: width,
                            height: height,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secant
                        }, void 0, false, {
                            fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                            lineNumber: 177,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GraphPoint, {
                            point: analysis.pointP,
                            label: "P",
                            viewport: config.viewport,
                            width: width,
                            height: height,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pointP
                        }, void 0, false, {
                            fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                            lineNumber: 200,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GraphPoint, {
                            point: analysis.pointQ,
                            label: "Q",
                            viewport: config.viewport,
                            width: width,
                            height: height,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pointQ
                        }, void 0, false, {
                            fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                            lineNumber: 220,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                    lineNumber: 108,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controls,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "x"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                                        lineNumber: 252,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: x.toFixed(2)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                                        lineNumber: 256,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                                lineNumber: 251,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: config.xRange.min,
                                max: config.xRange.max,
                                step: config.xRange.step,
                                value: x,
                                onChange: (event)=>onXChange(Number(event.target.value))
                            }, void 0, false, {
                                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                                lineNumber: 265,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                        lineNumber: 250,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: perturbationSymbol
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                                        lineNumber: 303,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: h.toFixed(2)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                                        lineNumber: 309,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                                lineNumber: 302,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: config.hRange.min,
                                max: config.hRange.max,
                                step: config.hRange.step,
                                value: h,
                                onChange: (event)=>onHChange(Number(event.target.value))
                            }, void 0, false, {
                                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                                lineNumber: 318,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                        lineNumber: 301,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                lineNumber: 244,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].values,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValueCard, {
                        label: "f(x)",
                        value: formatNumber(analysis.pointP.y)
                    }, void 0, false, {
                        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                        lineNumber: 362,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValueCard, {
                        label: `f(x + ${perturbationSymbol})`,
                        value: formatNumber(analysis.pointQ.y)
                    }, void 0, false, {
                        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                        lineNumber: 374,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValueCard, {
                        label: "Inclinação secante",
                        value: formatNumber(analysis.secantSlope)
                    }, void 0, false, {
                        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                        lineNumber: 388,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValueCard, {
                        label: "Inclinação tangente",
                        value: formatNumber(analysis.tangentSlope)
                    }, void 0, false, {
                        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                        lineNumber: 399,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                lineNumber: 356,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
}
function ValueCard({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].valueCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                lineNumber: 432,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: value
            }, void 0, false, {
                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                lineNumber: 436,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
        lineNumber: 427,
        columnNumber: 9
    }, this);
}
function Grid({ viewport, width, height }) {
    const lines = [];
    for(let x = Math.ceil(viewport.minX); x <= viewport.maxX; x++){
        const screenX = toScreenX(x, width, viewport);
        lines.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: screenX,
            y1: "0",
            x2: screenX,
            y2: height,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gridLine
        }, `gx-${x}`, false, {
            fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
            lineNumber: 483,
            columnNumber: 13
        }, this));
    }
    for(let y = Math.ceil(viewport.minY); y <= viewport.maxY; y += 5){
        const screenY = toScreenY(y, height, viewport);
        lines.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "0",
            y1: screenY,
            x2: width,
            y2: screenY,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gridLine
        }, `gy-${y}`, false, {
            fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
            lineNumber: 529,
            columnNumber: 13
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: lines
    }, void 0, false, {
        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
        lineNumber: 556,
        columnNumber: 9
    }, this);
}
function Axes({ viewport, width, height }) {
    const axisX = toScreenX(0, width, viewport);
    const axisY = toScreenY(0, height, viewport);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            viewport.minX <= 0 && viewport.maxX >= 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: axisX,
                y1: "0",
                x2: axisX,
                y2: height,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].axis
            }, void 0, false, {
                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                lineNumber: 590,
                columnNumber: 21
            }, this),
            viewport.minY <= 0 && viewport.maxY >= 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "0",
                y1: axisY,
                x2: width,
                y2: axisY,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].axis
            }, void 0, false, {
                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                lineNumber: 610,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
        lineNumber: 583,
        columnNumber: 9
    }, this);
}
function Curve({ points, viewport, width, height }) {
    let path = "";
    let started = false;
    for (const point of points){
        if (!Number.isFinite(point.y)) {
            started = false;
            continue;
        }
        const screenX = toScreenX(point.x, width, viewport);
        const screenY = toScreenY(point.y, height, viewport);
        if (!started) {
            path += `M ${screenX} ${screenY} `;
            started = true;
            continue;
        }
        path += `L ${screenX} ${screenY} `;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: path,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].curve
    }, void 0, false, {
        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
        lineNumber: 691,
        columnNumber: 9
    }, this);
}
function MathematicalLine({ point, slope, viewport, width, height, className }) {
    if (!Number.isFinite(slope)) {
        return null;
    }
    const x1 = viewport.minX;
    const x2 = viewport.maxX;
    const y1 = point.y + slope * (x1 - point.x);
    const y2 = point.y + slope * (x2 - point.x);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
        x1: toScreenX(x1, width, viewport),
        y1: toScreenY(y1, height, viewport),
        x2: toScreenX(x2, width, viewport),
        y2: toScreenY(y2, height, viewport),
        className: className
    }, void 0, false, {
        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
        lineNumber: 754,
        columnNumber: 9
    }, this);
}
function GraphPoint({ point, label, viewport, width, height, className }) {
    const x = toScreenX(point.x, width, viewport);
    const y = toScreenY(point.y, height, viewport);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: x,
                cy: y,
                r: "8"
            }, void 0, false, {
                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                lineNumber: 837,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: x + 13,
                y: y - 13,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
                lineNumber: 843,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx",
        lineNumber: 831,
        columnNumber: 9
    }, this);
}
function toScreenX(x, width, viewport) {
    return (x - viewport.minX) / (viewport.maxX - viewport.minX) * width;
}
function toScreenY(y, height, viewport) {
    return height - (y - viewport.minY) / (viewport.maxY - viewport.minY) * height;
}
function formatNumber(value) {
    if (!Number.isFinite(value)) {
        return "—";
    }
    return value.toFixed(3).replace(/\.?0+$/, "");
}
}),
"[project]/src/features/derivative-explorer/controllers/DerivativeExplorerController.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DerivativeExplorerController",
    ()=>DerivativeExplorerController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/derivative-explorer/components/DerivativeExplorer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$services$2f$derivativeExplorer$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/derivative-explorer/services/derivativeExplorer.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$store$2f$derivativeExplorer$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/derivative-explorer/store/derivativeExplorer.store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DerivativeExplorerController({ id, config }) {
    const instance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$store$2f$derivativeExplorer$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDerivativeExplorerStore"])((state)=>state.instances[id]);
    const setInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$store$2f$derivativeExplorer$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDerivativeExplorerStore"])((state)=>state.setInstance);
    const x = instance?.x ?? config.initialX;
    const h = instance?.h ?? config.initialH;
    const analysis = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$services$2f$derivativeExplorer$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DerivativeExplorerService"].analyze(config, x, h);
    function setX(newX) {
        setInstance(id, {
            x: newX,
            h
        });
    }
    function setH(newH) {
        setInstance(id, {
            x,
            h: newH
        });
    }
    function reset() {
        setInstance(id, {
            x: config.initialX,
            h: config.initialH
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$derivative$2d$explorer$2f$components$2f$DerivativeExplorer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DerivativeExplorer"], {
        config: config,
        x: x,
        h: h,
        analysis: analysis,
        onXChange: setX,
        onHChange: setH,
        onReset: reset
    }, void 0, false, {
        fileName: "[project]/src/features/derivative-explorer/controllers/DerivativeExplorerController.tsx",
        lineNumber: 108,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/features/derivative-explorer/services/derivativeExplorer.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DerivativeExplorerService",
    ()=>DerivativeExplorerService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mathjs$2f$lib$2f$esm$2f$entry$2f$impureFunctionsAny$2e$generated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/mathjs/lib/esm/entry/impureFunctionsAny.generated.js [app-ssr] (ecmascript) <locals>");
;
class DerivativeExplorerService {
    static cache = new Map();
    static analyze(config, x, h) {
        const prepared = this.prepare(config.expression, config.variable);
        const evaluate = (variableValue)=>{
            const scope = {
                ...config.parameters ?? {},
                [config.variable]: variableValue
            };
            return this.toNumber(prepared.evaluate(scope));
        };
        const evaluateDerivative = (variableValue)=>{
            const scope = {
                ...config.parameters ?? {},
                [config.variable]: variableValue
            };
            return this.toNumber(prepared.evaluateDerivative(scope));
        };
        const pointP = {
            x,
            y: evaluate(x)
        };
        const pointQ = {
            x: x + h,
            y: evaluate(x + h)
        };
        const secantSlope = Math.abs(h) < 1e-10 ? Number.NaN : (pointQ.y - pointP.y) / h;
        const tangentSlope = evaluateDerivative(x);
        const curve = this.sampleCurve(config, evaluate);
        return {
            curve,
            pointP,
            pointQ,
            secantSlope,
            tangentSlope,
            derivativeExpression: prepared.derivativeExpression
        };
    }
    static prepare(expression, variable) {
        const cacheKey = `${variable}:${expression}`;
        const cached = this.cache.get(cacheKey);
        if (cached) {
            return cached;
        }
        const compiledExpression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mathjs$2f$lib$2f$esm$2f$entry$2f$impureFunctionsAny$2e$generated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["compile"])(expression);
        const derivativeNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mathjs$2f$lib$2f$esm$2f$entry$2f$impureFunctionsAny$2e$generated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["derivative"])(expression, variable);
        const compiledDerivative = derivativeNode.compile();
        const prepared = {
            evaluate: (scope)=>compiledExpression.evaluate(scope),
            evaluateDerivative: (scope)=>compiledDerivative.evaluate(scope),
            derivativeExpression: derivativeNode.toString()
        };
        this.cache.set(cacheKey, prepared);
        return prepared;
    }
    static sampleCurve(config, evaluate) {
        const points = [];
        const samples = 700;
        const width = config.viewport.maxX - config.viewport.minX;
        const step = width / samples;
        for(let x = config.viewport.minX; x <= config.viewport.maxX; x += step){
            const y = evaluate(x);
            points.push({
                x,
                y
            });
        }
        return points;
    }
    static toNumber(value) {
        if (typeof value !== "number") {
            return Number.NaN;
        }
        if (!Number.isFinite(value)) {
            return Number.NaN;
        }
        return value;
    }
}
}),
"[project]/src/features/derivative-explorer/store/derivativeExplorer.store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDerivativeExplorerStore",
    ()=>useDerivativeExplorerStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useDerivativeExplorerStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((set)=>({
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

//# sourceMappingURL=%5Broot-of-the-server%5D__10m7x_c._.js.map