module.exports = [
(()=>{"use strict";return[
"[project]/src/components/decimals/DecimalExplorer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecimalExplorer",
    ()=>DecimalExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/decimals/DecimalExplorer.module.scss [app-ssr] (css module)");
;
;
;
function DecimalExplorer({ examples, selected, onSelect, model, denominator, nines, onNinesChange }) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].explorer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "eyebrow",
                children: "LABORATÓRIO DOS DECIMAIS"
            }, void 0, false, {
                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "O segredo está no resto."
            }, void 0, false, {
                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Escolhe uma fração. Segue os restos até aparecer zero ou regressarmos a um resto anterior."
            }, void 0, false, {
                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].choices,
                "aria-label": "Fração para explorar",
                children: examples.map((example, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-pressed": selected === i,
                        onClick: ()=>onSelect(i),
                        children: example.label
                    }, example.label, false, {
                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                        lineNumber: 16,
                        columnNumber: 37
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].result,
                "aria-live": "polite",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: [
                            model.negative ? '−' : '',
                            model.integer,
                            (model.prefix || model.period) && ',',
                            model.prefix,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].period,
                                children: model.period
                            }, void 0, false, {
                                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                lineNumber: 20,
                                columnNumber: 110
                            }, this),
                            model.period && '…'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                        lineNumber: 20,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: model.period ? `O bloco ${model.period} repete-se sem fim. A barra marca o período.` : 'O resto chegou a zero. Esta expansão termina.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                        lineNumber: 21,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].details,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        children: "Ver a divisão: onde começa o ciclo?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                        lineNumber: 24,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Dividimos o valor absoluto. Em cada linha, multiplicamos o resto por 10 e dividimos por ",
                            denominator,
                            ". O sinal negativo, quando existe, aplica-se ao resultado todo."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                        lineNumber: 25,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableWrap,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                                    children: "Divisão decimal por restos"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                    lineNumber: 26,
                                    columnNumber: 43
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Passo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 99
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Resto × 10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 113
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Algarismo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 132
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Novo resto"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 150
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                        lineNumber: 26,
                                        columnNumber: 95
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                    lineNumber: 26,
                                    columnNumber: 88
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: model.rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: model.repeatAt === i ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cycle : undefined,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        i + 1,
                                                        model.repeatAt === i && ' · início do período'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        row.before,
                                                        " × 10"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 75
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: row.digit
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 101
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: row.after
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 121
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                            lineNumber: 27,
                                            columnNumber: 44
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                            lineNumber: 26,
                            columnNumber: 36
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                        lineNumber: 26,
                        columnNumber: 7
                    }, this),
                    model.repeatAt !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "O último resto é igual ao resto de entrada do passo ",
                            model.repeatAt + 1,
                            ". A partir daqui, repetem-se os mesmos passos."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                        lineNumber: 30,
                        columnNumber: 35
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nines,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Quantos noves cabem antes de 1?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                        lineNumber: 33,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: id,
                        children: [
                            "Número finito de noves: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: nines.n
                            }, void 0, false, {
                                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                lineNumber: 34,
                                columnNumber: 51
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                        lineNumber: 34,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: id,
                        type: "range",
                        min: "1",
                        max: "10",
                        step: "1",
                        value: nines.n,
                        onChange: (event)=>onNinesChange(Number(event.target.value))
                    }, void 0, false, {
                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                        lineNumber: 35,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 600 130",
                        role: "img",
                        "aria-label": `Em dez posições, ${nines.n} contêm noves. Cada posição acrescentada divide por dez a distância até um.`,
                        children: Array.from({
                            length: 10
                        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: i * 59 + 5,
                                        y: "12",
                                        width: "51",
                                        height: "62",
                                        rx: "12",
                                        fill: i < nines.n ? '#254a3b' : '#e6e1f2'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                        lineNumber: 39,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: i * 59 + 30.5,
                                        y: "54",
                                        textAnchor: "middle",
                                        fontSize: "28",
                                        fill: i < nines.n ? '#fff' : '#685e7e',
                                        children: i < nines.n ? '9' : '·'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                        lineNumber: 40,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: i * 59 + 30.5,
                                        y: "102",
                                        textAnchor: "middle",
                                        fontSize: "14",
                                        fill: "#435849",
                                        children: [
                                            i + 1,
                                            ".ª"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                        lineNumber: 41,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                lineNumber: 38,
                                columnNumber: 47
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                        lineNumber: 37,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].values,
                        "aria-live": "polite",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Aproximação finita"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                        lineNumber: 44,
                                        columnNumber: 57
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: nines.decimal
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                        lineNumber: 44,
                                        columnNumber: 90
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                lineNumber: 44,
                                columnNumber: 52
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Distância exata até 1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                        lineNumber: 44,
                                        columnNumber: 133
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: nines.gap
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                        lineNumber: 44,
                                        columnNumber: 169
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                lineNumber: 44,
                                columnNumber: 128
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                        lineNumber: 44,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Falta 10",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                children: [
                                    "−",
                                    nines.n
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                lineNumber: 45,
                                columnNumber: 18
                            }, this),
                            ". Os cartões mostram posições decimais, não uma escala de distâncias. Cada novo nove divide a distância por 10."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                        lineNumber: 45,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].note,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "O infinito não é a última posição do slider."
                            }, void 0, false, {
                                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                lineNumber: 46,
                                columnNumber: 29
                            }, this),
                            " Todas estas aproximações são menores do que 1. A escrita infinita 0,999… representa o limite e é exatamente igual a 1."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                        lineNumber: 46,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                lineNumber: 32,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/explorers/Diagram.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Diagram",
    ()=>Diagram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Diagram$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/explorers/Diagram.module.scss [app-ssr] (css module)");
;
;
;
function Diagram({ shapes, description }) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, '');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Diagram$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].diagram,
        viewBox: "0 0 600 340",
        role: "img",
        "aria-label": description,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                        id: `grid${id}`,
                        width: "22",
                        height: "22",
                        patternUnits: "userSpaceOnUse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "1",
                            cy: "1",
                            r: ".8",
                            fill: "#dde5d9"
                        }, void 0, false, {
                            fileName: "[project]/src/components/explorers/Diagram.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/explorers/Diagram.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: `plot${id}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "170",
                            y: "40",
                            width: "260",
                            height: "260"
                        }, void 0, false, {
                            fileName: "[project]/src/components/explorers/Diagram.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/explorers/Diagram.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/explorers/Diagram.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "600",
                height: "340",
                fill: `url(#grid${id})`
            }, void 0, false, {
                fileName: "[project]/src/components/explorers/Diagram.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            shapes.map((shape, i)=>{
                switch(shape.type){
                    case 'rect':
                        {
                            const { type, ...p } = shape;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                ...p,
                                strokeWidth: "2"
                            }, i, false, {
                                fileName: "[project]/src/components/explorers/Diagram.tsx",
                                lineNumber: 21,
                                columnNumber: 20
                            }, this);
                        }
                    case 'circle':
                        {
                            const { type, ...p } = shape;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                ...p,
                                strokeWidth: "2"
                            }, i, false, {
                                fileName: "[project]/src/components/explorers/Diagram.tsx",
                                lineNumber: 25,
                                columnNumber: 20
                            }, this);
                        }
                    case 'line':
                        {
                            const { type, dash, ...p } = shape;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                ...p,
                                strokeWidth: "2",
                                strokeDasharray: dash
                            }, i, false, {
                                fileName: "[project]/src/components/explorers/Diagram.tsx",
                                lineNumber: 29,
                                columnNumber: 20
                            }, this);
                        }
                    case 'path':
                        {
                            const { type, clip, ...p } = shape;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                ...p,
                                strokeWidth: "2.5",
                                strokeLinejoin: "round",
                                clipPath: clip ? `url(#plot${id})` : undefined
                            }, i, false, {
                                fileName: "[project]/src/components/explorers/Diagram.tsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, this);
                        }
                    case 'text':
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: shape.x,
                            y: shape.y,
                            textAnchor: "middle",
                            fontSize: shape.size || 16,
                            fontWeight: "600",
                            fill: shape.fill || '#234735',
                            children: shape.text
                        }, i, false, {
                            fileName: "[project]/src/components/explorers/Diagram.tsx",
                            lineNumber: 45,
                            columnNumber: 15
                        }, this);
                }
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/explorers/Diagram.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/explorers/Explorer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Explorer",
    ()=>Explorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-ssr] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dices.js [app-ssr] (ecmascript) <export default as Dices>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Diagram$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/explorers/Diagram.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Math.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/explorers/Explorer.module.scss [app-ssr] (css module)");
;
;
;
;
;
;
function Explorer({ model: m, onChange, onReset, onSolve, onRoll, rollText, compact = false }) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].explorer} ${compact ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].compact : ''}`,
        "aria-label": m.title,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/explorers/Explorer.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    " EXPLORA A IDEIA"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/explorers/Explorer.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: m.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/explorers/Explorer.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: m.prompt
                            }, void 0, false, {
                                fileName: "[project]/src/components/explorers/Explorer.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/explorers/Explorer.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reset,
                        onClick: onReset,
                        "aria-label": "Repor valores iniciais",
                        title: "Repor valores",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/explorers/Explorer.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/explorers/Explorer.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/explorers/Explorer.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].body,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].visual,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Diagram$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Diagram"], {
                                shapes: m.shapes,
                                description: m.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/explorers/Explorer.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metrics,
                                children: m.metrics.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: x.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/explorers/Explorer.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: x.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/explorers/Explorer.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, x.label, true, {
                                        fileName: "[project]/src/components/explorers/Explorer.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/explorers/Explorer.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/explorers/Explorer.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controls,
                        children: [
                            m.controls.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].control,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: `${id}-${c.key}`,
                                            children: [
                                                c.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("output", {
                                                    children: [
                                                        Number(m.values[c.key].toFixed(3)).toLocaleString('pt-PT'),
                                                        " ",
                                                        c.unit
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/explorers/Explorer.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/explorers/Explorer.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: `${id}-${c.key}`,
                                            type: "range",
                                            min: c.min,
                                            max: c.max,
                                            step: c.step,
                                            value: m.values[c.key],
                                            onChange: (e)=>onChange(c.key, Number(e.target.value))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/explorers/Explorer.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].range,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        c.min,
                                                        " ",
                                                        c.unit
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/explorers/Explorer.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        c.max,
                                                        " ",
                                                        c.unit
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/explorers/Explorer.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/explorers/Explorer.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, c.key, true, {
                                    fileName: "[project]/src/components/explorers/Explorer.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)),
                            onSolve && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "button secondary small",
                                type: "button",
                                onClick: onSolve,
                                children: "Mostrar solução"
                            }, void 0, false, {
                                fileName: "[project]/src/components/explorers/Explorer.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            onRoll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "button secondary small",
                                type: "button",
                                onClick: onRoll,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__["Dices"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/explorers/Explorer.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    " Lançar os dados"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/explorers/Explorer.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            rollText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                role: "status",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].roll,
                                children: rollText
                            }, void 0, false, {
                                fileName: "[project]/src/components/explorers/Explorer.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/explorers/Explorer.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/explorers/Explorer.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formula,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathFormula"], {
                    value: m.formula
                }, void 0, false, {
                    fileName: "[project]/src/components/explorers/Explorer.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/explorers/Explorer.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].insight,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/explorers/Explorer.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: m.insight
                    }, void 0, false, {
                        fileName: "[project]/src/components/explorers/Explorer.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/explorers/Explorer.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/explorers/Explorer.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/forms/SubmissionForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubmissionForm",
    ()=>SubmissionForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-keyhole.js [app-ssr] (ecmascript) <export default as LockKeyhole>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/forms/SubmissionForm.module.scss [app-ssr] (css module)");
;
;
;
;
function SubmissionForm({ kind, draft: d, errors: e, busy, message, success, available, lessonTitle, step, onStepChange, onChange, onSubmit, onReset }) {
    const prefix = kind === 'question' ? 'question' : 'contact';
    const question = kind === 'question';
    const field = (key, label, type = 'text', max = 120, required = false)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: `${prefix}-${key}`,
                    children: [
                        label,
                        required ? ' *' : ''
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                    lineNumber: 46,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: `${prefix}-${key}`,
                    type: type,
                    value: d[key],
                    required: required,
                    maxLength: max,
                    autoComplete: key === 'name' ? 'name' : key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'off',
                    "aria-invalid": !!e[key],
                    "aria-describedby": e[key] ? `${prefix}-${key}-error` : undefined,
                    onChange: (event)=>onChange(key, event.target.value)
                }, void 0, false, {
                    fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                    lineNumber: 50,
                    columnNumber: 7
                }, this),
                e[key] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    id: `${prefix}-${key}-error`,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error,
                    children: e[key]
                }, void 0, false, {
                    fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/forms/SubmissionForm.tsx",
            lineNumber: 45,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "eyebrow",
                children: question ? 'UMA DÚVIDA TAMBÉM É UM COMEÇO' : 'VAMOS CONVERSAR'
            }, void 0, false, {
                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: question ? 'Onde ficaste com dúvidas?' : 'Conta-me do que precisas.'
            }, void 0, false, {
                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: question ? 'A tua pergunta é privada. Deixa o email se quiseres receber uma resposta.' : 'Este pedido não faz uma marcação nem tem pagamento. Combinamos os detalhes depois de conversar.'
            }, void 0, false, {
                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            lessonTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].context,
                children: [
                    lessonTitle,
                    step ? ` · passo ${step}` : '',
                    step && onStepChange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onStepChange(''),
                        children: "Remover passo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this),
            !available && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "notice",
                children: "O formulário ainda não está disponível. Podes continuar a explorar todas as aulas e experiências."
            }, void 0, false, {
                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this),
            success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sent,
                role: "status",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        size: 35
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Mensagem recebida."
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: d.email ? 'O Timóteo poderá responder através do email que indicaste.' : 'A tua pergunta ficou guardada. Como não indicaste email, não será possível enviar uma resposta direta.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "button secondary",
                        onClick: onReset,
                        children: "Enviar outra mensagem"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: onSubmit,
                noValidate: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                        disabled: busy || !available,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                className: "srOnly",
                                children: question ? 'Enviar uma dúvida' : 'Pedir uma explicação'
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                                children: [
                                    field('name', question ? 'Nome (opcional)' : 'Nome', 'text', 80, !question),
                                    field('email', question ? 'Email para resposta (opcional)' : 'Email de contacto', 'email', 160, !question),
                                    !question && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            field('phone', 'Telefone (opcional)', 'tel', 30),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "contact-year",
                                                        children: "Nível de estudo *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "contact-year",
                                                        value: d.year,
                                                        onChange: (e)=>onChange('year', e.target.value),
                                                        "aria-invalid": !!e.year,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Selecionar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 23
                                                            }, this),
                                                            Array.from({
                                                                length: 12
                                                            }, (_, i)=>i + 1).map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: `${y}`,
                                                                    children: [
                                                                        y,
                                                                        ".º ano"
                                                                    ]
                                                                }, y, true, {
                                                                    fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 25
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "adult",
                                                                children: "Adulto / preparação de acesso"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "other",
                                                                children: "Outro"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 21
                                                    }, this),
                                                    e.year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error,
                                                        children: e.year
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, this),
                                            field('topic', 'Tema ou dificuldade', 'text', 120, true),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "contact-mode",
                                                        children: "Modalidade"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "contact-mode",
                                                        value: d.mode,
                                                        onChange: (e)=>onChange('mode', e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "online",
                                                                children: "Online"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "coimbra",
                                                                children: "Presencial em Coimbra"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "either",
                                                                children: "Sem preferência"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "contact-role",
                                                        children: "Estou a contactar como"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "contact-role",
                                                        value: d.contactRole,
                                                        onChange: (e)=>onChange('contactRole', e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "student",
                                                                children: "Aluno adulto"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "guardian",
                                                                children: "Responsável pelo aluno"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this),
                                            field('availability', 'Dias e horários disponíveis', 'text', 300, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: `${prefix}-message`,
                                        children: [
                                            question ? 'A tua pergunta' : 'O que gostarias de trabalhar?',
                                            " *"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: `${prefix}-message`,
                                        rows: 5,
                                        maxLength: 2000,
                                        value: d.message,
                                        "aria-invalid": !!e.message,
                                        "aria-describedby": `${prefix}-message-help`,
                                        onChange: (e)=>onChange('message', e.target.value),
                                        placeholder: question ? 'Por exemplo: não percebi por que o outro lado é 10 − a…' : 'Conta-me o que estás a estudar e onde costumas ficar com dúvidas.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        id: `${prefix}-message-help`,
                                        className: e.message ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].help,
                                        children: e.message || `${d.message.length}/2000 caracteres · não incluas documentos ou dados sensíveis.`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].trap,
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Website",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            tabIndex: -1,
                                            autoComplete: "off",
                                            value: d.website,
                                            onChange: (e)=>onChange('website', e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].consent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: d.consent,
                                        onChange: (e)=>onChange('consent', e.target.checked)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Li a",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/privacidade/",
                                                target: "_blank",
                                                children: "informação de privacidade"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this),
                                            ' ',
                                            "e autorizo o uso destes dados para tratar esta mensagem."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this),
                            e.consent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error,
                                children: e.consent
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                lineNumber: 224,
                                columnNumber: 27
                            }, this),
                            !question && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].help,
                                children: "Se o aluno for menor, o pedido deve ser enviado pelo responsável, com os seus próprios contactos."
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                lineNumber: 226,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button",
                                        type: "submit",
                                        children: [
                                            busy ? 'A enviar…' : question ? 'Enviar pergunta' : 'Pedir uma explicação',
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                size: 17
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                lineNumber: 237,
                                                columnNumber: 17
                                            }, this),
                                            " Só o professor pode ler"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "notice error",
                        role: "alert",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                        lineNumber: 242,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/lessons/LessonView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LessonView",
    ()=>LessonView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-ssr] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Math.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/lessons/LessonView.module.scss [app-ssr] (css module)");
;
;
;
;
;
function LessonView({ lesson: l, completed, onComplete, onQuestion, explorer, form, relatedLessons = [] }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].back,
                href: "/aulas/",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    " Todas as aulas"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/lessons/LessonView.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tags,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tag",
                                        children: l.topic
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            Math.min(...l.years),
                                            ".º–",
                                            Math.max(...l.years),
                                            ".º ano · ",
                                            l.minutes,
                                            " min"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: l.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: l.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "button",
                                href: "#problema",
                                children: [
                                    "Começar pelo problema ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 40,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: l.image,
                        alt: l.imageAlt,
                        width: "800",
                        height: "440"
                    }, void 0, false, {
                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/lessons/LessonView.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].layout,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].aside,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "O TEU PERCURSO"
                            }, void 0, false, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": "Secções da aula",
                                children: [
                                    [
                                        'problema',
                                        '01',
                                        'O problema'
                                    ],
                                    [
                                        'explorar',
                                        '02',
                                        'Experimenta'
                                    ],
                                    [
                                        'resolucao',
                                        '03',
                                        'Passo a passo'
                                    ],
                                    [
                                        'guardar',
                                        '04',
                                        'Ideias para guardar'
                                    ],
                                    [
                                        'praticar',
                                        '05',
                                        'Agora tenta tu'
                                    ]
                                ].map(([id, n, title])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `#${id}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: n
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this),
                                            title
                                        ]
                                    }, id, true, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onComplete,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].complete,
                                children: [
                                    completed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 63,
                                        columnNumber: 26
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 63,
                                        columnNumber: 55
                                    }, this),
                                    ' ',
                                    completed ? 'Aula concluída' : 'Marcar como concluída'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Progresso guardado só neste dispositivo."
                            }, void 0, false, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].article,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "problema",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].block,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "01 · O PROBLEMA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            "Antes da fórmula,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this),
                                            "uma pergunta."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].problem,
                                        children: l.problem
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].challenge,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: l.question
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Precisas de uma pista?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    l.hints.map((hint, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].details,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                    children: [
                                                        "Pista ",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: hint
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, hint, true, {
                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "explorar",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].block,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "02 · EXPERIMENTA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    explorer
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "resolucao",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].block,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "03 · PASSO A PASSO"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Vamos construir a resposta."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    l.steps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].step,
                                            id: `passo-${i + 1}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepNumber,
                                                    children: i + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: step.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: step.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 19
                                                        }, this),
                                                        step.formula && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formula,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathFormula"], {
                                                                value: step.formula
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].questionButton,
                                                            onClick: ()=>onQuestion(String(i + 1)),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                                    lineNumber: 108,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " Tenho uma dúvida neste passo"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, step.title, true, {
                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "guardar",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].block} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].takeaways}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "04 · IDEIAS PARA GUARDAR"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Leva estas ideias contigo."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: l.takeaways.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, t, true, {
                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "praticar",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].block,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "05 · AGORA TENTA TU"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            "Uma pequena mudança.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this),
                                            "Um novo problema."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    l.exercises.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].exercise,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "tag",
                                                    children: [
                                                        "DESAFIO ",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: e.question
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].details,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                            children: "Uma pista"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: e.hint
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].details,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                            children: "Ver resposta e explicação"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: e.answer
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: e.explanation
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, e.question, true, {
                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button",
                                        onClick: onComplete,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 17
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            completed ? 'Concluída · marcar por fazer' : 'Concluir esta aula'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            !!relatedLessons.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].block,
                                "aria-label": "Aulas relacionadas",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "CONTINUA A DESCOBERTA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Da área ao volume."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    relatedLessons.map((related)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "button",
                                                href: `/aulas/${related.slug}/`,
                                                children: [
                                                    related.title,
                                                    " →"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                lineNumber: 158,
                                                columnNumber: 39
                                            }, this)
                                        }, related.slug, false, {
                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "pergunta",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].block,
                                children: form
                            }, void 0, false, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/lessons/LessonView.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lessons/LessonView.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/partitions/PartitionExplorer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PartitionExplorer",
    ()=>PartitionExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Math.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$partition$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/partition.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$partitions$2f$PartitionExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/partitions/PartitionExplorer.module.scss [app-ssr] (css module)");
;
;
;
;
;
function PartitionExplorer({ kind, state, model, onChange, onReset }) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    function slider(key, label, min, max, step = 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$partitions$2f$PartitionExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].control,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: `${id}-${key}`,
                    children: [
                        label,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: state[key]
                        }, void 0, false, {
                            fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                            lineNumber: 8,
                            columnNumber: 182
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                    lineNumber: 8,
                    columnNumber: 142
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: `${id}-${key}`,
                    type: "range",
                    min: min,
                    max: max,
                    step: step,
                    value: state[key],
                    onChange: (e)=>onChange({
                            [key]: Number(e.target.value)
                        })
                }, void 0, false, {
                    fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                    lineNumber: 8,
                    columnNumber: 219
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
            lineNumber: 8,
            columnNumber: 115
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$partitions$2f$PartitionExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].explorer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "RECONSTRÓI A FÓRMULA"
                    }, void 0, false, {
                        fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                        lineNumber: 10,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onReset,
                        children: "Recomeçar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                        lineNumber: 10,
                        columnNumber: 66
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                lineNumber: 10,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: model.title
            }, void 0, false, {
                fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$partitions$2f$PartitionExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabs,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-pressed": !state.general,
                        onClick: ()=>onChange({
                                general: false
                            }),
                        children: kind === 'square' ? 'Quadrado dividido' : 'Cubo dividido'
                    }, void 0, false, {
                        fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                        lineNumber: 12,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-pressed": state.general,
                        onClick: ()=>onChange({
                                general: true
                            }),
                        children: kind === 'square' ? 'Triângulo geral' : 'Pirâmide independente'
                    }, void 0, false, {
                        fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                        lineNumber: 12,
                        columnNumber: 183
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$partitions$2f$PartitionExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].body,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 420 350",
                            role: "img",
                            "aria-label": `${model.title}. ${model.metrics.map((x)=>x.label + ': ' + x.value).join('. ')}`,
                            children: [
                                model.polygons.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                        points: p.points,
                                        fill: p.fill,
                                        fillOpacity: p.opacity,
                                        stroke: "#34483e",
                                        strokeWidth: "1",
                                        strokeOpacity: "0.55"
                                    }, i, false, {
                                        fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                                        lineNumber: 15,
                                        columnNumber: 36
                                    }, this)),
                                model.segments.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: l.from[0],
                                        y1: l.from[1],
                                        x2: l.to[0],
                                        y2: l.to[1],
                                        stroke: "#172f25",
                                        strokeWidth: "2",
                                        strokeDasharray: l.dashed ? '5 4' : undefined
                                    }, i, false, {
                                        fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                                        lineNumber: 16,
                                        columnNumber: 36
                                    }, this)),
                                model.labels.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: l.point[0],
                                        y: l.point[1],
                                        textAnchor: "middle",
                                        fontSize: "12",
                                        fill: "#172f25",
                                        stroke: "white",
                                        strokeWidth: "3",
                                        paintOrder: "stroke",
                                        children: l.text
                                    }, i, false, {
                                        fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                                        lineNumber: 17,
                                        columnNumber: 34
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                            lineNumber: 14,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                        lineNumber: 13,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            slider('size', kind === 'square' ? 'Base / lado (cm)' : 'Lado da base (cm)', 2, 12),
                            state.general ? slider('height', 'Altura perpendicular (cm)', 1, 12) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Altura vinculada ao centro: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            "h = a/2 = ",
                                            state.size / 2,
                                            " cm"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                                        lineNumber: 21,
                                        columnNumber: 105
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                                lineNumber: 21,
                                columnNumber: 74
                            }, this),
                            kind === 'square' && state.general && slider('offset', 'Posição lateral do vértice (%)', -30, 130, 5),
                            kind === 'cube' && slider('angle', 'Rodar vista (graus)', 0, 360, 5),
                            kind === 'cube' && !state.general && slider('spread', 'Separar peças', 0, 1, 0.05),
                            !state.general && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$partitions$2f$PartitionExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pieces,
                                "aria-label": "Selecionar uma peça",
                                children: Array.from({
                                    length: kind === 'square' ? 4 : 6
                                }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-pressed": state.selected % (kind === 'square' ? 4 : 6) === i,
                                        onClick: ()=>onChange({
                                                selected: i
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$partition$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partitionColors"][i]
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                                                lineNumber: 25,
                                                columnNumber: 254
                                            }, this),
                                            i + 1
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                                        lineNumber: 25,
                                        columnNumber: 131
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                                lineNumber: 25,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$partitions$2f$PartitionExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metrics,
                "aria-live": "polite",
                children: model.metrics.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                children: x.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                                lineNumber: 27,
                                columnNumber: 91
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                children: x.value
                            }, void 0, false, {
                                fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                                lineNumber: 27,
                                columnNumber: 109
                            }, this)
                        ]
                    }, x.label, true, {
                        fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                        lineNumber: 27,
                        columnNumber: 72
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$partitions$2f$PartitionExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formula,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathFormula"], {
                    value: model.formula
                }, void 0, false, {
                    fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                    lineNumber: 28,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$partitions$2f$PartitionExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].note,
                children: model.note
            }, void 0, false, {
                fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
                lineNumber: 28,
                columnNumber: 74
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/partitions/PartitionExplorer.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/sequences/SquareSequenceExplorer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SquareSequenceExplorer",
    ()=>SquareSequenceExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Math.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/sequences/SquareSequenceExplorer.module.scss [app-ssr] (css module)");
;
;
;
;
function SquareSequenceExplorer({ model, onOrderChange, onTargetChange, onReset }) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(), { current: c } = model;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].explorer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: "DESCOBRE A REGULARIDADE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 12,
                                columnNumber: 39
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Duas cores. Um total fixo."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 12,
                                columnNumber: 95
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 12,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onReset,
                        children: "Recomeçar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 12,
                        columnNumber: 136
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Avança uma figura de cada vez. Compara a posição da figura com a quantidade de quadrados de cada cor."
            }, void 0, false, {
                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].body,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].figure,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 320 320",
                                role: "img",
                                "aria-label": `${c.order}.º termo: ${c.gray} quadrados cinzentos e ${c.white} brancos.`,
                                children: model.cells.map((gray, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: 10 + i % 10 * 30,
                                        y: 10 + Math.floor(i / 10) * 30,
                                        width: "30",
                                        height: "30",
                                        fill: gray ? '#83878c' : '#fff',
                                        stroke: "#34443b",
                                        strokeWidth: "1"
                                    }, i, false, {
                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                        lineNumber: 17,
                                        columnNumber: 41
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 16,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                children: [
                                    c.order,
                                    ".º termo · 100 quadrados"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 20,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 15,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controls,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `${id}-order`,
                                children: [
                                    "Ordem do termo ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: c.order
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                        lineNumber: 23,
                                        columnNumber: 55
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 23,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: `${id}-order`,
                                type: "range",
                                min: "1",
                                max: "51",
                                step: "1",
                                value: c.order,
                                onChange: (e)=>onOrderChange(Number(e.target.value))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 24,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttons,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: c.order === 1,
                                        onClick: ()=>onOrderChange(c.order - 1),
                                        children: "← Anterior"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                        lineNumber: 25,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: c.order === 51,
                                        onClick: ()=>onOrderChange(c.order + 1),
                                        children: "Seguinte →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                        lineNumber: 25,
                                        columnNumber: 145
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 25,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metrics,
                                "aria-live": "polite",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                children: "Brancos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 59
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                children: c.white
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 75
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                        lineNumber: 26,
                                        columnNumber: 54
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                children: "Cinzentos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 104
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                children: c.gray
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 122
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                        lineNumber: 26,
                                        columnNumber: 99
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                children: "Total"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 150
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                children: "100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 164
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                        lineNumber: 26,
                                        columnNumber: 145
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 26,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sum,
                                children: [
                                    c.white,
                                    " brancos + ",
                                    c.gray,
                                    " cinzentos = 100"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 27,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `${id}-target`,
                                children: [
                                    "Desafio: procura uma figura com ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            model.targetWhite,
                                            " brancos"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                        lineNumber: 28,
                                        columnNumber: 73
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 28,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: `${id}-target`,
                                type: "range",
                                min: "0",
                                max: "100",
                                step: "1",
                                value: model.targetWhite,
                                onChange: (e)=>onTargetChange(Number(e.target.value))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 29,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: model.matches ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].success : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].prompt,
                                "aria-live": "polite",
                                children: model.matches ? `Encontraste: ${c.order}.º termo! Explica como chegarias aqui sem percorrer todas as figuras.` : `A figura atual tem ${c.white} brancos. Consegues encontrar ${model.targetWhite}? Nem todos os desafios têm solução.`
                            }, void 0, false, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 30,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 22,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].details,
                open: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        children: "Os primeiros dez termos: procura o padrão"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 34,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Cada coluna é uma figura. Clica numa ordem para a observar. As reticências continuam a regra até ao limite da grelha."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 35,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableWrap,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                                    children: "Ordem e quantidades: grandezas diferentes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                    lineNumber: 36,
                                    columnNumber: 43
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                children: "Ordem"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                lineNumber: 36,
                                                columnNumber: 114
                                            }, this),
                                            model.firstTen.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    scope: "col",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        "aria-label": `Mostrar o ${t.order}.º termo`,
                                                        "aria-pressed": t.order === c.order,
                                                        onClick: ()=>onOrderChange(t.order),
                                                        children: [
                                                            t.order,
                                                            ".º"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 195
                                                    }, this)
                                                }, t.order, false, {
                                                    fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 165
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                children: "…"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                lineNumber: 36,
                                                columnNumber: 362
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                        lineNumber: 36,
                                        columnNumber: 110
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                    lineNumber: 36,
                                    columnNumber: 103
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    scope: "row",
                                                    children: "Brancos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 13
                                                }, this),
                                                model.firstTen.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: t.white
                                                    }, t.order, false, {
                                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 66
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "…"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 100
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                            lineNumber: 37,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    scope: "row",
                                                    children: "Cinzentos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 13
                                                }, this),
                                                model.firstTen.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: t.gray
                                                    }, t.order, false, {
                                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 68
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "…"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 101
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                            lineNumber: 38,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    scope: "row",
                                                    children: "Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 13
                                                }, this),
                                                model.firstTen.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "100"
                                                    }, t.order, false, {
                                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                        lineNumber: 39,
                                                        columnNumber: 64
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "…"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 92
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                            lineNumber: 39,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                    lineNumber: 36,
                                    columnNumber: 397
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                            lineNumber: 36,
                            columnNumber: 36
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 36,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                lineNumber: 33,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].details,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        children: "Quantidade, contador ou ordem?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 43,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "No termo atual, a ordem é ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: c.order
                            }, void 0, false, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 44,
                                columnNumber: 36
                            }, this),
                            " e a quantidade de cinzentos é ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: c.gray
                            }, void 0, false, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 44,
                                columnNumber: 93
                            }, this),
                            ". A partir do primeiro termo fizemos ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: c.changes
                            }, void 0, false, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 44,
                                columnNumber: 155
                            }, this),
                            " aumentos."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 44,
                        columnNumber: 7
                    }, this),
                    c.counter === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "O contador k da expressão 2k + 2 começa no segundo termo, com k = 0. O primeiro termo fica fora desta contagem a partir de zero."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 45,
                        columnNumber: 29
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Começando no segundo termo, fizemos k = ",
                                    c.counter,
                                    " aumentos. Por isso:"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 46,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathFormula"], {
                                value: `${c.gray}=2\\cdot ${c.counter}+2\\qquad m=${c.counter}+2=${c.order}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 47,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 45,
                        columnNumber: 167
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                lineNumber: 42,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].details,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        children: "Conferir o desafio e ligar à PA"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 51,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Precisamos de 100 − ",
                            model.targetWhite,
                            " = ",
                            model.targetGray,
                            " quadrados cinzentos."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 52,
                        columnNumber: 7
                    }, this),
                    model.targetOrder === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Não existe esse termo: ",
                            model.targetGray,
                            " é ímpar e a sequência dos cinzentos só contém números pares. Uma ordem fracionária não identifica uma figura da sequência."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "São ",
                            model.targetGray / 2,
                            " aumentos a partir do primeiro termo. A ordem é ",
                            model.targetGray / 2,
                            " + 1 = ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: model.targetOrder
                            }, void 0, false, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 55,
                                columnNumber: 117
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathFormula"], {
                        value: "c_m=0+2(m-1)\\qquad b_m=100-2(m-1)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 56,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Na PA dos cinzentos, o primeiro termo é 0 e a razão é 2. O termo de ordem 51 enche a grelha. O 52.º exigiria 102 quadrados cinzentos e já não representa uma figura válida."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 57,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                lineNumber: 50,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ui/Math.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MathFormula",
    ()=>MathFormula
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$katex$2f$dist$2f$katex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/katex/dist/katex.mjs [app-ssr] (ecmascript)");
;
;
function MathFormula({ value, display = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        dangerouslySetInnerHTML: {
            __html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$katex$2f$dist$2f$katex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].renderToString(value, {
                displayMode: display,
                throwOnError: false,
                trust: false,
                output: 'htmlAndMathml'
            })
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Math.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/controllers/DecimalExplorerController.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecimalExplorerController",
    ()=>DecimalExplorerController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/decimals/DecimalExplorer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$decimal$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/decimal.service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const examples = [
    {
        label: '1/3',
        numerator: 1,
        denominator: 3
    },
    {
        label: '1/6',
        numerator: 1,
        denominator: 6
    },
    {
        label: '1/8',
        numerator: 1,
        denominator: 8
    },
    {
        label: '−7/51 · opção A',
        numerator: -7,
        denominator: 51
    }
];
function DecimalExplorerController({ initialExample = 0, initialNines = 2 }) {
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Math.max(0, Math.min(3, Math.round(initialExample) || 0)));
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Math.max(1, Math.min(10, Math.round(initialNines) || 1)));
    const example = examples[selected];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DecimalExplorer"], {
        examples: examples,
        selected: selected,
        onSelect: setSelected,
        model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$decimal$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["divideExactly"])(example.numerator, example.denominator),
        denominator: example.denominator,
        nines: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$decimal$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ninesModel"])(count),
        onNinesChange: setCount
    }, void 0, false, {
        fileName: "[project]/src/controllers/DecimalExplorerController.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/controllers/ExplorerController.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExplorerController",
    ()=>ExplorerController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$explorer$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/explorer.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/explorers/Explorer.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ExplorerController({ kind, config = {}, compact = false }) {
    const [values, setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$explorer$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialValues"])(kind, config));
    const [roll, setRoll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const model = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$explorer$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExplorerModel"])(kind, values, config);
    function change(key, value) {
        setValues((v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$explorer$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeValues"])(kind, {
                ...v,
                [key]: value
            }, config));
        if (key === 'sum') setRoll(null);
    }
    function reset() {
        setValues((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$explorer$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialValues"])(kind, config));
        setRoll(null);
    }
    function rollDice() {
        const a = 1 + Math.floor(Math.random() * 6), b = 1 + Math.floor(Math.random() * 6);
        setRoll((r)=>({
                a,
                b,
                total: (r?.total || 0) + 1,
                hits: (r?.hits || 0) + Number(a + b === model.values.sum)
            }));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Explorer"], {
        compact: compact,
        model: model,
        onChange: change,
        onReset: reset,
        onSolve: kind === 'equation' ? ()=>setValues((v)=>({
                    ...v,
                    x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$explorer$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equationSolution"])(model.values.a, model.values.b, model.values.c)
                })) : undefined,
        onRoll: kind === 'probability' ? rollDice : undefined,
        rollText: roll ? `${roll.a} + ${roll.b} = ${roll.a + roll.b}. ${roll.hits} acertos em ${roll.total} lançamentos. Uma experiência curta pode diferir da probabilidade teórica.` : undefined
    }, void 0, false, {
        fileName: "[project]/src/controllers/ExplorerController.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/controllers/LessonController.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LessonController",
    ()=>LessonController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$learning$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/learning.store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lessons/LessonView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$ExplorerController$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/controllers/ExplorerController.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$SubmissionController$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/controllers/SubmissionController.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$DecimalExplorerController$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/controllers/DecimalExplorerController.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/content.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$PartitionController$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/controllers/PartitionController.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$SquareSequenceController$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/controllers/SquareSequenceController.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function LessonController({ lesson }) {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const completed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$learning$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLearningStore"])((s)=>s.completed.includes(lesson.slug)), toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$learning$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLearningStore"])((s)=>s.toggle);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        void __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$learning$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLearningStore"].persist.rehydrate();
    }, []);
    function ask(value) {
        setStep(value);
        document.getElementById('pergunta')?.scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(()=>document.getElementById('question-message')?.focus({
                preventScroll: true
            }), 250);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LessonView"], {
        lesson: lesson,
        relatedLessons: (lesson.relatedLessons ?? []).flatMap((slug)=>{
            const related = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLesson"])(slug);
            return related ? [
                {
                    slug: related.slug,
                    title: related.title
                }
            ] : [];
        }),
        completed: completed,
        onComplete: ()=>toggle(lesson.slug),
        onQuestion: ask,
        explorer: lesson.partitionExplorer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$PartitionController$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PartitionController"], {
            kind: lesson.partitionExplorer
        }, lesson.partitionExplorer, false, {
            fileName: "[project]/src/controllers/LessonController.tsx",
            lineNumber: 38,
            columnNumber: 11
        }, this) : lesson.sequenceExplorer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$SquareSequenceController$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SquareSequenceController"], {}, void 0, false, {
            fileName: "[project]/src/controllers/LessonController.tsx",
            lineNumber: 40,
            columnNumber: 11
        }, this) : lesson.decimalExplorer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$DecimalExplorerController$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DecimalExplorerController"], {}, void 0, false, {
            fileName: "[project]/src/controllers/LessonController.tsx",
            lineNumber: 42,
            columnNumber: 11
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$ExplorerController$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExplorerController"], {
            kind: lesson.tool,
            config: lesson.toolConfig
        }, void 0, false, {
            fileName: "[project]/src/controllers/LessonController.tsx",
            lineNumber: 43,
            columnNumber: 11
        }, this),
        form: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$SubmissionController$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubmissionController"], {
            kind: "question",
            lessonSlug: lesson.slug,
            lessonTitle: lesson.title,
            step: step,
            onStepChange: setStep
        }, void 0, false, {
            fileName: "[project]/src/controllers/LessonController.tsx",
            lineNumber: 45,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/controllers/LessonController.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/controllers/PartitionController.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PartitionController",
    ()=>PartitionController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$partitions$2f$PartitionExplorer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/partitions/PartitionExplorer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$partition$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/partition.service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function PartitionController({ kind, initialSize }) {
    const start = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$partition$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizePartition"])({
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$partition$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partitionDefaults"],
            size: initialSize ?? (kind === 'cube' ? 6 : 8)
        });
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(start);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$partitions$2f$PartitionExplorer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PartitionExplorer"], {
        kind: kind,
        state: state,
        model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$partition$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partitionModel"])(kind, state),
        onChange: (patch)=>setState((old)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$partition$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizePartition"])({
                    ...old,
                    ...patch
                })),
        onReset: ()=>setState(start())
    }, void 0, false, {
        fileName: "[project]/src/controllers/PartitionController.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/controllers/SquareSequenceController.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SquareSequenceController",
    ()=>SquareSequenceController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sequences/SquareSequenceExplorer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$square$2d$sequence$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/square-sequence.service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function SquareSequenceController({ initialOrder = 1, initialTargetWhite = 26 }) {
    const [order, setOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$square$2d$sequence$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["squareTerm"])(initialOrder).order);
    const [targetWhite, setTargetWhite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$square$2d$sequence$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["squareSequenceModel"])(1, initialTargetWhite).targetWhite);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SquareSequenceExplorer"], {
        model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$square$2d$sequence$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["squareSequenceModel"])(order, targetWhite),
        onOrderChange: (value)=>setOrder((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$square$2d$sequence$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["squareTerm"])(value).order),
        onTargetChange: setTargetWhite,
        onReset: ()=>{
            setOrder((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$square$2d$sequence$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["squareTerm"])(initialOrder).order);
            setTargetWhite((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$square$2d$sequence$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["squareSequenceModel"])(1, initialTargetWhite).targetWhite);
        }
    }, void 0, false, {
        fileName: "[project]/src/controllers/SquareSequenceController.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/controllers/SubmissionController.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubmissionController",
    ()=>SubmissionController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/forms/SubmissionForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase-config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$submission$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/submission.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$validation$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/validation.service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function SubmissionController({ kind, lessonSlug = '', lessonTitle = '', step = '', onStepChange }) {
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$submission$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyDraft"]
    }), [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({}), [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false), [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(''), [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const lock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    function change(key, value) {
        setDraft((d)=>({
                ...d,
                [key]: value
            }));
        setErrors((e)=>({
                ...e,
                [key]: undefined
            }));
    }
    async function submit(event) {
        event.preventDefault();
        if (lock.current || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firebaseConfigured"]) return;
        setMessage('');
        const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$validation$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSubmission"])(draft, kind);
        setErrors(errors);
        if (Object.keys(errors).length) {
            const first = Object.keys(errors)[0];
            document.getElementById(`${kind === 'question' ? 'question' : 'contact'}-${first}`)?.focus();
            return;
        }
        lock.current = true;
        setBusy(true);
        try {
            const { submitMessage } = await __turbopack_context__.A("[project]/src/services/submission.service.ts [app-ssr] (ecmascript, async loader)");
            await submitMessage(draft, {
                kind,
                lessonSlug,
                lessonTitle,
                step
            });
            setSuccess(true);
        } catch (error) {
            setMessage((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$validation$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeError"])(error));
        } finally{
            lock.current = false;
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubmissionForm"], {
        kind: kind,
        draft: draft,
        errors: errors,
        busy: busy,
        message: message,
        success: success,
        available: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firebaseConfigured"],
        lessonTitle: lessonTitle,
        step: step,
        onStepChange: onStepChange,
        onChange: change,
        onSubmit: submit,
        onReset: ()=>{
            setDraft({
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$submission$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyDraft"]
            });
            setSuccess(false);
            setMessage('');
            setErrors({});
        }
    }, void 0, false, {
        fileName: "[project]/src/controllers/SubmissionController.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/firebase-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "firebaseConfig",
    ()=>firebaseConfig,
    "firebaseConfigured",
    ()=>firebaseConfigured
]);
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyDgwjcpdXM_rPxfw2Ef06Bq6vW8_cpUdQI"),
    authDomain: ("TURBOPACK compile-time value", "mathmotion-860ce.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "mathmotion-860ce"),
    appId: ("TURBOPACK compile-time value", "1:259144667451:web:2db8e6a236b9fd056de71e")
};
const firebaseConfigured = Object.values(firebaseConfig).every(Boolean);
}),
"[project]/src/services/content.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterLessons",
    ()=>filterLessons,
    "filterTools",
    ()=>filterTools,
    "getLesson",
    ()=>getLesson,
    "getLessons",
    ()=>getLessons,
    "getTool",
    ()=>getTool,
    "lessons",
    ()=>lessons,
    "tools",
    ()=>tools
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$lessons$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/lessons.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$lessons$2f$dizimas$2d$e$2d$irracionais$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/lessons/dizimas-e-irracionais.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$lessons$2f$sequencia$2d$quadrados$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/lessons/sequencia-quadrados.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$lessons$2f$produto$2d$nulo$2d$balanca$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/lessons/produto-nulo-balanca.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$lessons$2f$area$2d$triangulo$2d$quadrado$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/lessons/area-triangulo-quadrado.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$lessons$2f$volume$2d$piramide$2d$cubo$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/lessons/volume-piramide-cubo.json.[json].cjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
const lessons = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$lessons$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$lessons$2f$dizimas$2d$e$2d$irracionais$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$lessons$2f$sequencia$2d$quadrados$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$lessons$2f$produto$2d$nulo$2d$balanca$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$lessons$2f$area$2d$triangulo$2d$quadrado$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$lessons$2f$volume$2d$piramide$2d$cubo$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
];
function getLessons() {
    return [
        ...lessons
    ].sort((a, b)=>b.date.localeCompare(a.date));
}
function getLesson(slug) {
    return lessons.find((lesson)=>lesson.slug === slug);
}
function filterLessons(items, query, topic, year) {
    const clean = (v)=>v.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    return items.filter((x)=>(!query || clean(x.title + ' ' + x.subtitle + ' ' + x.topic).includes(clean(query))) && (topic === 'Todos' || x.topic === topic) && (year === 'Todos' || x.years.includes(Number(year))));
}
const tools = [
    {
        kind: 'area',
        title: 'Área & perímetro',
        description: 'O contorno fica. O espaço muda.',
        subject: 'Geometria',
        years: [
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
        ],
        color: 'green',
        icon: 'Square'
    },
    {
        kind: 'volume',
        title: 'Dentro da caixa',
        description: 'Três medidas, uma nova dimensão.',
        subject: 'Geometria',
        years: [
            5,
            6,
            7,
            8,
            9
        ],
        color: 'purple',
        icon: 'Box'
    },
    {
        kind: 'fractions',
        title: 'Partes de um todo',
        description: 'Vê uma fração ganhar forma.',
        subject: 'Números',
        years: [
            3,
            4,
            5,
            6
        ],
        color: 'orange',
        icon: 'PieChart'
    },
    {
        kind: 'ratio',
        title: 'Mistura à medida',
        description: 'Escala a receita, mantém a razão.',
        subject: 'Números',
        years: [
            5,
            6,
            7,
            8
        ],
        color: 'blue',
        icon: 'FlaskConical'
    },
    {
        kind: 'percent',
        title: 'O preço muda',
        description: 'Aumentos e descontos em cadeia.',
        subject: 'Números',
        years: [
            6,
            7,
            8,
            9
        ],
        color: 'purple',
        icon: 'Percent'
    },
    {
        kind: 'equation',
        title: 'Encontra o equilíbrio',
        description: 'Uma incógnita. Dois lados iguais.',
        subject: 'Álgebra',
        years: [
            6,
            7,
            8,
            9
        ],
        color: 'green',
        icon: 'Scale'
    },
    {
        kind: 'function',
        title: 'Uma reta em movimento',
        description: 'Inclinação, posição e coordenadas.',
        subject: 'Funções',
        years: [
            8,
            9,
            10
        ],
        color: 'blue',
        icon: 'ChartNoAxesCombined'
    },
    {
        kind: 'probability',
        title: 'Dois dados, muitas hipóteses',
        description: 'Contar antes de adivinhar.',
        subject: 'Probabilidade',
        years: [
            6,
            7,
            8,
            9,
            10,
            11,
            12
        ],
        color: 'orange',
        icon: 'Dices'
    },
    {
        kind: 'pythagoras',
        title: 'O lado que falta',
        description: 'Explora um triângulo retângulo.',
        subject: 'Geometria',
        years: [
            8,
            9,
            10
        ],
        color: 'purple',
        icon: 'Triangle'
    },
    {
        kind: 'motion',
        title: 'Distância em movimento',
        description: 'Liga matemática e ciências.',
        subject: 'Ciências',
        years: [
            7,
            8,
            9,
            10
        ],
        color: 'blue',
        icon: 'MoveRight'
    },
    {
        kind: 'numberline',
        title: 'Salta pela reta',
        description: 'Somar e subtrair ganha uma direção.',
        subject: 'Números',
        years: [
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ],
        color: 'green',
        icon: 'MoveRight'
    },
    {
        kind: 'trigonometry',
        title: 'Uma volta, duas coordenadas',
        description: 'Seno e cosseno no círculo unitário.',
        subject: 'Trigonometria',
        years: [
            10,
            11,
            12
        ],
        color: 'purple',
        icon: 'PieChart'
    },
    {
        kind: 'derivative',
        title: 'Da secante à tangente',
        description: 'Uma pequena variação, uma grande ideia.',
        subject: 'Funções',
        years: [
            11,
            12
        ],
        color: 'blue',
        icon: 'ChartNoAxesCombined'
    }
];
function getTool(kind) {
    return tools.find((t)=>t.kind === kind);
}
function filterTools(items, query, topic, year) {
    const clean = (v)=>v.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    return items.filter((t)=>(topic === 'Todos' || t.subject === topic) && (year === 'Todos' || t.years.includes(Number(year))) && clean(t.title + ' ' + t.description).includes(clean(query)));
}
}),
"[project]/src/services/decimal.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "divideExactly",
    ()=>divideExactly,
    "ninesModel",
    ()=>ninesModel
]);
function divideExactly(numerator, denominator) {
    if (!Number.isSafeInteger(numerator) || !Number.isSafeInteger(denominator) || Math.abs(numerator) > 10000 || denominator < 1 || denominator > 200) {
        throw new Error('Usa inteiros: numerador entre −10000 e 10000 e denominador entre 1 e 200.');
    }
    const n = Math.abs(numerator), rows = [], seen = new Map();
    let remainder = n % denominator;
    while(remainder !== 0 && !seen.has(remainder)){
        seen.set(remainder, rows.length);
        const before = remainder, digit = Math.floor(before * 10 / denominator);
        remainder = before * 10 % denominator;
        rows.push({
            before,
            digit,
            after: remainder
        });
    }
    const repeatAt = remainder === 0 ? null : seen.get(remainder);
    const digits = rows.map((row)=>row.digit).join('');
    return {
        integer: Math.floor(n / denominator),
        negative: numerator < 0,
        prefix: repeatAt === null ? digits : digits.slice(0, repeatAt),
        period: repeatAt === null ? '' : digits.slice(repeatAt),
        rows,
        repeatAt
    };
}
function ninesModel(count) {
    const n = Math.min(10, Math.max(1, Math.round(count)));
    return {
        n,
        decimal: '0,' + '9'.repeat(n),
        gap: '0,' + '0'.repeat(n - 1) + '1'
    };
}
}),
"[project]/src/services/explorer.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compoundPrice",
    ()=>compoundPrice,
    "diceOutcomes",
    ()=>diceOutcomes,
    "equationSolution",
    ()=>equationSolution,
    "fmt",
    ()=>fmt,
    "getControls",
    ()=>getControls,
    "getExplorerModel",
    ()=>getExplorerModel,
    "initialValues",
    ()=>initialValues,
    "normalizeValues",
    ()=>normalizeValues
]);
const green = '#3a7c54', lime = '#d4eaa3', purple = '#b4a0df', ink = '#234735', muted = '#778779';
const fmt = (n, digits = 2)=>new Intl.NumberFormat('pt-PT', {
        maximumFractionDigits: digits
    }).format(n);
const control = (key, label, min, max, step = 1, unit = '')=>({
        key,
        label,
        min,
        max,
        step,
        unit
    });
const defaults = {
    numberline: {
        start: 2,
        jump: 3
    },
    trigonometry: {
        angle: 45
    },
    derivative: {
        x: 1,
        h: 1
    },
    area: {
        a: 3
    },
    volume: {
        width: 4,
        depth: 3,
        height: 5
    },
    fractions: {
        n: 3,
        d: 8
    },
    ratio: {
        a: 2,
        b: 3,
        k: 2
    },
    percent: {
        price: 50,
        up: 20,
        down: 20
    },
    equation: {
        a: 2,
        b: 4,
        c: 12,
        x: 2
    },
    function: {
        m: 1,
        b: 1,
        x: 2
    },
    probability: {
        sum: 7
    },
    pythagoras: {
        a: 3,
        b: 4
    },
    motion: {
        v: 3,
        t: 5
    }
};
function initialValues(kind, config = {}) {
    return {
        ...defaults[kind],
        ...config.initial
    };
}
function getControls(kind, v, config = {}) {
    switch(kind){
        case 'numberline':
            return [
                control('start', 'Ponto de partida', -10, 10),
                control('jump', 'Quanto somar', -10, 10)
            ];
        case 'trigonometry':
            return [
                control('angle', 'Ângulo', 0, 360, 15, '°')
            ];
        case 'derivative':
            return [
                control('x', 'Ponto x', -3, 3, 0.5),
                control('h', 'Variação h', 0.05, 1, 0.05)
            ];
        case 'area':
            {
                const half = Math.max(2, config.perimeter || 20) / 2;
                return [
                    control('a', 'Comprimento', 0.1, half - 0.1, 0.1, 'm')
                ];
            }
        case 'volume':
            return [
                control('width', 'Comprimento', 1, 10, 1, 'cm'),
                control('depth', 'Largura', 1, 10, 1, 'cm'),
                control('height', 'Altura', 1, 10, 1, 'cm')
            ];
        case 'fractions':
            return [
                control('d', 'Partes iguais', 1, 12),
                control('n', 'Partes pintadas', 0, Math.min(12, Math.max(1, v.d)))
            ];
        case 'ratio':
            return [
                control('a', 'Partes de concentrado', 1, 6),
                control('b', 'Partes de água', 1, 6),
                control('k', 'Multiplicar a receita', 1, 5)
            ];
        case 'percent':
            return [
                control('price', 'Preço inicial', 10, 200, 5, '€'),
                control('up', 'Aumento', 0, 100, 1, '%'),
                control('down', 'Desconto', 0, 100, 1, '%')
            ];
        case 'equation':
            return [
                control('a', 'Coeficiente a', 1, 6),
                control('b', 'Termo b', -10, 10),
                control('c', 'Segundo membro c', -12, 24),
                control('x', 'Experimenta x', -34, 34, 0.1)
            ];
        case 'function':
            return [
                control('m', 'Declive m', -3, 3, 0.5),
                control('b', 'Ordenada na origem b', -6, 6),
                control('x', 'Ponto x', -5, 5, 0.5)
            ];
        case 'probability':
            return [
                control('sum', 'Soma procurada', 2, 12)
            ];
        case 'pythagoras':
            return [
                control('a', 'Cateto a', 1, 10, 1, 'cm'),
                control('b', 'Cateto b', 1, 10, 1, 'cm')
            ];
        case 'motion':
            return [
                control('v', 'Velocidade constante', 0, 10, 0.5, 'm/s'),
                control('t', 'Tempo', 0, 10, 0.5, 's')
            ];
    }
}
function normalizeValues(kind, values, config = {}) {
    const result = {
        ...initialValues(kind, config),
        ...values
    };
    for (const c of getControls(kind, result, config)){
        const value = Number(result[c.key]);
        result[c.key] = Number.isFinite(value) ? Math.min(c.max, Math.max(c.min, value)) : c.min;
    }
    return result;
}
function equationSolution(a, b, c) {
    return (c - b) / a;
}
function diceOutcomes(sum) {
    return Array.from({
        length: 36
    }, (_, i)=>({
            a: Math.floor(i / 6) + 1,
            b: i % 6 + 1
        })).filter((x)=>x.a + x.b === sum);
}
function compoundPrice(price, up, down) {
    const afterIncrease = price * (1 + up / 100);
    return {
        afterIncrease,
        final: afterIncrease * (1 - down / 100)
    };
}
function getExplorerModel(kind, raw, config = {}) {
    const v = normalizeValues(kind, raw, config), shapes = [], metrics = [];
    const text = (x, y, t, size = 16, fill = ink)=>shapes.push({
            type: 'text',
            x,
            y,
            text: t,
            size,
            fill
        });
    const rect = (x, y, w, h, fill, stroke)=>shapes.push({
            type: 'rect',
            x,
            y,
            width: w,
            height: h,
            fill,
            stroke,
            rx: 3
        });
    const line = (x1, y1, x2, y2, stroke = ink, dash)=>shapes.push({
            type: 'line',
            x1,
            y1,
            x2,
            y2,
            stroke,
            dash
        });
    const path = (d, fill, stroke, clip = false)=>shapes.push({
            type: 'path',
            d,
            fill,
            stroke,
            clip
        });
    const metric = (label, value)=>metrics.push({
            label,
            value
        });
    let title = '', prompt = '', formula = '', insight = '';
    switch(kind){
        case 'numberline':
            {
                const { start, jump } = v, end = start + jump, px = (x)=>300 + x * 11;
                title = 'Salta pela reta';
                prompt = 'Escolhe um ponto e soma um número. Nos primeiros anos, começa só com números positivos.';
                line(65, 215, 535, 215);
                for(let i = -20; i <= 20; i++){
                    line(px(i), 210, px(i), 220, muted);
                    if (i % 5 === 0) text(px(i), 246, String(i), 13);
                }
                shapes.push({
                    type: 'circle',
                    cx: px(start),
                    cy: 215,
                    r: 6,
                    fill: purple
                });
                if (jump !== 0) {
                    path(`M${px(start)},205 Q${px((start + end) / 2)},90 ${px(end)},195`, 'none', green);
                    const sign = Math.sign(jump);
                    path(`M${px(end) - sign * 9},181 L${px(end)},195 L${px(end) - sign * 15},195`, 'none', green);
                }
                shapes.push({
                    type: 'circle',
                    cx: px(end),
                    cy: 215,
                    r: 6,
                    fill: green
                });
                text(300, 70, `${start} + (${jump}) = ${end}`, 27);
                metric('Partida', String(start));
                metric('Variação', String(jump));
                metric('Chegada', String(end));
                formula = `${start}+(${jump})=${end}`;
                insight = jump > 0 ? 'Somar um número positivo leva-te para a direita.' : jump < 0 ? 'Somar um número negativo leva-te para a esquerda.' : 'Somar zero mantém a posição.';
                break;
            }
        case 'trigonometry':
            {
                const angle = v.angle, rad = angle * Math.PI / 180, cos = Math.cos(rad), sin = Math.sin(rad), x = 300 + 110 * cos, y = 170 - 110 * sin;
                title = 'Uma volta, duas coordenadas';
                prompt = 'O círculo tem raio 1. Observa as projeções horizontal e vertical do ponto.';
                shapes.push({
                    type: 'circle',
                    cx: 300,
                    cy: 170,
                    r: 110,
                    fill: '#f0ecf8',
                    stroke: '#cabade'
                });
                line(160, 170, 440, 170, muted);
                line(300, 310, 300, 30, muted);
                line(300, 170, x, y, ink);
                line(300, 170, x, 170, green);
                line(x, 170, x, y, '#9b7ac4');
                shapes.push({
                    type: 'circle',
                    cx: x,
                    cy: y,
                    r: 7,
                    fill: green
                });
                text(454, 176, 'x');
                text(300, 22, 'y');
                text(418, 192, '1', 12);
                text(319, 65, '1', 12);
                text(300, 330, `Ângulo: ${angle}° · raio: 1`, 13);
                const clean = (n)=>Math.abs(n) < 1e-10 ? 0 : n;
                metric('cos θ', fmt(clean(cos), 3));
                metric('sin θ', fmt(clean(sin), 3));
                metric('Raio', '1');
                formula = `\\cos^2\\theta+\\sin^2\\theta=1`;
                insight = 'O cosseno é a coordenada horizontal; o seno é a coordenada vertical. Os valores apresentados são arredondados.';
                break;
            }
        case 'derivative':
            {
                const { x, h } = v, slope = 2 * x + h, derivative = 2 * x, px = (z)=>300 + 30 * z, py = (z)=>290 - 15 * z;
                title = 'Da secante à tangente';
                prompt = 'Para f(x) = x², aproxima o segundo ponto reduzindo h. O que acontece ao declive?';
                for(let i = -4; i <= 4; i++){
                    line(px(i), 50, px(i), 290, '#e2e8de');
                    text(px(i), 310, String(i), 12);
                }
                line(170, 290, 440, 290, ink);
                line(300, 300, 300, 35, ink);
                text(450, 294, 'x', 13);
                text(315, 38, 'y', 13);
                let curve = '';
                for(let t = -4; t <= 4.001; t += 0.1)curve += `${curve ? ' L' : 'M'}${px(t)},${py(t * t)}`;
                path(curve, 'none', green);
                path(`M${px(-4)},${py(x * x + slope * (-4 - x))} L${px(4)},${py(x * x + slope * (4 - x))}`, 'none', '#9b7ac4', true);
                path(`M${px(-4)},${py(x * x + derivative * (-4 - x))} L${px(4)},${py(x * x + derivative * (4 - x))}`, 'none', '#b1904a', true);
                for (const t of [
                    x,
                    x + h
                ])shapes.push({
                    type: 'circle',
                    cx: px(t),
                    cy: py(t * t),
                    r: 6,
                    fill: green
                });
                metric('Declive secante', fmt(slope));
                metric('Derivada em x', fmt(derivative));
                metric('Diferença', fmt(h));
                formula = `m_h=\\frac{(x+h)^2-x^2}{h}=2x+h`;
                insight = 'Roxo: secante. Dourado: tangente. Quando h tende a zero, o declive 2x + h tende a 2x. O slider aproxima, mas nunca divide por zero.';
                break;
            }
        case 'area':
            {
                const p = Math.max(2, config.perimeter || 20), a = v.a, b = p / 2 - a, scale = 250 / (p / 2), w = a * scale, h = b * scale;
                title = 'O mesmo contorno. Mais espaço?';
                prompt = 'Move um lado. O outro ajusta-se para manter o perímetro.';
                rect(300 - w / 2, 165 - h / 2, w, h, lime, green);
                text(300, 165 - h / 2 - 15, `${fmt(a)} m`);
                text(300 + w / 2 + 40, 170, `${fmt(b)} m`);
                text(300, 305, `A vedação mantém ${fmt(p)} metros`, 13, muted);
                metric('Área', `${fmt(a * b)} m²`);
                metric('Perímetro', `${fmt(p)} m`);
                metric('Outro lado', `${fmt(b)} m`);
                formula = `A=${fmt(a)}\\times ${fmt(b)}=${fmt(a * b)}\\;\\mathrm{m}^2`;
                insight = Math.abs(a - b) < 0.01 ? 'Encontraste o quadrado! Para este perímetro, a área é máxima.' : 'Experimenta aproximar as duas medidas. A área aumenta ou diminui?';
                break;
            }
        case 'volume':
            {
                const { width: w, depth: d, height: h } = v, ox = 280, oy = 280;
                const pt = (x, y, z)=>`${ox + x * 15 - y * 12},${oy - x * 5 - y * 7 - z * 16}`;
                path(`M${pt(0, 0, 0)} L${pt(w, 0, 0)} L${pt(w, 0, h)} L${pt(0, 0, h)} Z`, lime, green);
                path(`M${pt(w, 0, 0)} L${pt(w, d, 0)} L${pt(w, d, h)} L${pt(w, 0, h)} Z`, green, ink);
                path(`M${pt(0, 0, h)} L${pt(w, 0, h)} L${pt(w, d, h)} L${pt(0, d, h)} Z`, '#e8f3cb', green);
                text(110, 100, `${fmt(h)} cm de altura`);
                text(300, 320, `${w} × ${d} × ${h} cm`);
                title = 'Dentro da caixa';
                prompt = 'O que acontece ao volume quando duplicas apenas uma medida?';
                metric('Volume', `${w * d * h} cm³`);
                metric('Área da base', `${w * d} cm²`);
                metric('Altura', `${h} cm`);
                formula = `V=${w}\\times${d}\\times${h}=${w * d * h}\\;\\mathrm{cm}^3`;
                insight = 'Cada camada tem a área da base. A altura diz quantas camadas de 1 cm cabem.';
                break;
            }
        case 'fractions':
            {
                const { n, d } = v, cx = 300, cy = 160, r = 110;
                for(let i = 0; i < d; i++){
                    const a = -Math.PI / 2 + i * 2 * Math.PI / d, b = a + 2 * Math.PI / d;
                    if (d === 1) shapes.push({
                        type: 'circle',
                        cx,
                        cy,
                        r,
                        fill: n ? '#b4a0df' : '#eee9f7',
                        stroke: '#fff'
                    });
                    else path(`M${cx},${cy} L${cx + r * Math.cos(a)},${cy + r * Math.sin(a)} A${r},${r} 0 ${d === 1 ? 1 : 0} 1 ${cx + r * Math.cos(b)},${cy + r * Math.sin(b)} Z`, i < n ? purple : '#eee9f7', '#fff');
                }
                title = 'Partes de um todo';
                prompt = 'Muda o número de partes iguais e escolhe quantas pintar.';
                text(300, 305, `${n} de ${d} partes iguais`);
                metric('Fração', `${n}/${d}`);
                metric('Decimal', fmt(n / d, 3));
                metric('Percentagem', `${fmt(n / d * 100)}%`);
                formula = `\\frac{${n}}{${d}}=${fmt(n / d, 3)}`;
                if (n / d !== Number((n / d).toFixed(3))) formula = `\\frac{${n}}{${d}}\\approx ${fmt(n / d, 3)}`;
                insight = 'O denominador conta todas as partes iguais; o numerador conta as partes escolhidas.';
                break;
            }
        case 'ratio':
            {
                const { a, b, k } = v;
                title = 'Mistura à medida';
                prompt = 'Uma unidade representa 100 mL. Multiplica a receita e observa a proporção.';
                [
                    a * k,
                    b * k
                ].forEach((count, j)=>{
                    for(let i = 0; i < count; i++)rect(115 + j * 250 + i % 5 * 27, 260 - Math.floor(i / 5) * 30, 22, 25, j ? '#a4cadc' : purple);
                    text(180 + j * 250, 300, j ? 'Água' : 'Concentrado');
                });
                metric('Razão', `${a} : ${b}`);
                metric('Concentrado', `${a * k * 100} mL`);
                metric('Água', `${b * k * 100} mL`);
                formula = `\\frac{${a}}{${b}}=\\frac{${a * k}}{${b * k}}`;
                insight = `A mistura tem ${fmt(a / (a + b) * 100)}% de concentrado. Mudar só o multiplicador não altera esta percentagem.`;
                break;
            }
        case 'percent':
            {
                const { price, up, down } = v, { afterIncrease, final } = compoundPrice(price, up, down), values = [
                    price,
                    afterIncrease,
                    final
                ], max = Math.max(...values, 1);
                values.forEach((value, i)=>{
                    const h = value / max * 190;
                    rect(105 + i * 145, 260 - h, 90, h, [
                        lime,
                        purple,
                        '#a4cadc'
                    ][i]);
                    text(150 + i * 145, 245 - h, `${fmt(value)} €`, 18);
                    text(150 + i * 145, 293, [
                        'Inicial',
                        'Após aumento',
                        'Após desconto'
                    ][i], 13);
                });
                title = 'O preço muda';
                prompt = 'Aplica um aumento e depois um desconto. A base de cálculo continua igual?';
                metric('Inicial', `${fmt(price)} €`);
                metric('Final', `${fmt(final)} €`);
                metric('Variação', `${fmt((final / price - 1) * 100)}%`);
                formula = `${price}\\times(1+\\frac{${up}}{100})\\times(1-\\frac{${down}}{100})=${fmt(final)}`;
                insight = Math.abs(final - price) < 0.0001 ? 'O produto dos dois fatores é 1: o preço voltou ao início.' : 'O desconto atua sobre o preço aumentado. As percentagens não se somam simplesmente.';
                break;
            }
        case 'equation':
            {
                const { a, b, c, x } = v, left = a * x + b, diff = left - c, tilt = Math.max(-35, Math.min(35, diff * 3));
                path('M280,280 L300,180 L320,280 Z', '#dce6dc', green);
                line(150, 170 + tilt, 450, 170 - tilt, green);
                shapes.push({
                    type: 'circle',
                    cx: 300,
                    cy: 170,
                    r: 7,
                    fill: ink
                });
                line(150, 170 + tilt, 150, 215 + tilt);
                line(450, 170 - tilt, 450, 215 - tilt);
                rect(95, 215 + tilt, 110, 12, lime, green);
                rect(395, 215 - tilt, 110, 12, purple, green);
                text(150, 95, `${a}x ${b < 0 ? '−' : '+'} ${Math.abs(b)}`, 22);
                text(450, 95, `${c}`, 22);
                text(300, 318, 'Balança esquemática: compara os valores dos membros', 12, muted);
                title = 'Encontra o equilíbrio';
                prompt = 'Experimenta valores de x até os dois membros terem o mesmo valor.';
                metric('Esquerda', fmt(left));
                metric('Direita', fmt(c));
                metric('Diferença', fmt(diff));
                formula = `${a}x${b < 0 ? '' : '+'}${b}=${c}`;
                insight = Math.abs(diff) < 1e-8 ? 'Equilíbrio! Este valor de x é uma solução.' : 'O desenho compara valores, não pesos físicos. Usa “Mostrar solução” se precisares de uma pista.';
                break;
            }
        case 'function':
            {
                const { m, b, x } = v;
                title = 'Uma reta em movimento';
                prompt = 'Muda o declive e a ordenada na origem. O que cada um faz à reta?';
                for(let i = -10; i <= 10; i++){
                    line(300 + i * 13, 40, 300 + i * 13, 300, '#dfe7df');
                    line(170, 170 + i * 13, 430, 170 + i * 13, '#dfe7df');
                }
                line(170, 170, 440, 170, ink);
                line(300, 305, 300, 30, ink);
                text(450, 175, 'x');
                text(300, 22, 'y');
                text(286, 190, '0', 12);
                text(365, 190, '5', 12);
                text(286, 110, '5', 12);
                path(`M170,${170 - (m * -10 + b) * 13} L430,${170 - (m * 10 + b) * 13}`, 'none', green, true);
                const y = m * x + b;
                if (y >= -10 && y <= 10) shapes.push({
                    type: 'circle',
                    cx: 300 + x * 13,
                    cy: 170 - y * 13,
                    r: 7,
                    fill: '#b4a0df',
                    stroke: ink
                });
                metric('Declive', fmt(m));
                metric('Ponto x', fmt(x));
                metric('f(x)', fmt(y));
                formula = `f(x)=${fmt(m)}x${b < 0 ? '' : '+'}${b}`;
                insight = y > 10 || y < -10 ? 'O ponto está fora da janela visível (−10 a 10). O valor continua indicado acima.' : `Quando x aumenta 1, y varia ${fmt(m)}. A reta cruza o eixo vertical em ${b}.`;
                break;
            }
        case 'probability':
            {
                const { sum } = v;
                title = 'Dois dados, muitas hipóteses';
                prompt = 'Cada quadrado é um resultado ordenado de dois dados justos e independentes.';
                for(let a = 1; a <= 6; a++){
                    text(150, 53 + a * 35, String(a), 12);
                    text(160 + a * 40, 38, String(a), 12);
                    for(let b = 1; b <= 6; b++){
                        rect(142 + b * 40, 38 + a * 35, 36, 30, a + b === sum ? green : '#e9eee5');
                        text(160 + b * 40, 59 + a * 35, String(a + b), 12, a + b === sum ? '#fff' : muted);
                    }
                }
                const count = diceOutcomes(sum).length;
                metric('Favoráveis', String(count));
                metric('Possíveis', '36');
                metric('Probabilidade', `${fmt(count / 36 * 100)}%`);
                formula = `P(S=${sum})=\\frac{${count}}{36}`;
                insight = 'As somas não são igualmente prováveis. Conta os resultados ordenados, não apenas as somas.';
                text(300, 302, 'Linhas: dado 1 · colunas: dado 2', 12, muted);
                break;
            }
        case 'pythagoras':
            {
                const { a, b } = v, c = Math.hypot(a, b), scale = 21, x = 180, y = 280;
                title = 'O lado que falta';
                prompt = 'Altera os catetos de um triângulo retângulo e observa a hipotenusa.';
                path(`M${x},${y} L${x + a * scale},${y} L${x},${y - b * scale} Z`, '#e9e3fa', green);
                path(`M${x + 15},${y} L${x + 15},${y - 15} L${x},${y - 15}`, 'none', ink);
                text(x + a * scale / 2, y + 30, `a = ${a}`);
                text(x - 45, y - b * scale / 2, `b = ${b}`);
                text(x + a * scale / 2 + 45, y - b * scale / 2 - 12, `c ≈ ${fmt(c)}`);
                metric('a²', `${a * a} cm²`);
                metric('b²', `${b * b} cm²`);
                metric('Hipotenusa', `${fmt(c)} cm`);
                formula = `c=\\sqrt{${a}^2+${b}^2}=\\sqrt{${a * a + b * b}}`;
                insight = 'Esta relação exige um ângulo reto: o quadrado da hipotenusa é a soma dos quadrados dos catetos.';
                break;
            }
        case 'motion':
            {
                const { v: speed, t } = v, d = speed * t;
                title = 'Distância em movimento';
                prompt = 'Um movimento retilíneo com velocidade constante e posição inicial zero.';
                line(80, 230, 520, 230, muted);
                for(let i = 0; i <= 10; i++){
                    line(80 + i * 44, 225, 80 + i * 44, 235, muted);
                    text(80 + i * 44, 260, String(i * 10), 12);
                }
                shapes.push({
                    type: 'circle',
                    cx: 80 + d * 4.4,
                    cy: 208,
                    r: 16,
                    fill: green
                });
                text(300, 100, `${fmt(d)} metros percorridos`, 24);
                text(300, 300, 'Posição (m)', 13, muted);
                metric('Velocidade', `${fmt(speed)} m/s`);
                metric('Tempo', `${fmt(t)} s`);
                metric('Distância', `${fmt(d)} m`);
                formula = `d=v\\,t=${fmt(speed)}\\times ${fmt(t)}=${fmt(d)}\\;\\mathrm{m}`;
                insight = 'Com velocidade constante, duplicar o tempo duplica a distância. O modelo não inclui aceleração.';
                break;
            }
    }
    return {
        kind,
        title: config.title || title,
        prompt: config.prompt || prompt,
        controls: getControls(kind, v, config),
        values: v,
        metrics,
        formula,
        insight,
        shapes,
        description: metrics.map((m)=>`${m.label}: ${m.value}`).join('. ')
    };
}
}),
"[project]/src/services/partition.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizePartition",
    ()=>normalizePartition,
    "partitionColors",
    ()=>partitionColors,
    "partitionDefaults",
    ()=>partitionDefaults,
    "partitionModel",
    ()=>partitionModel
]);
const partitionColors = [
    '#40916c',
    '#9c79ca',
    '#e9a34a',
    '#438bb6',
    '#d66a86',
    '#8c9150'
];
const partitionDefaults = {
    size: 8,
    height: 4,
    offset: 50,
    angle: 35,
    spread: 0,
    selected: 0,
    general: false
};
function normalizePartition(state) {
    const clamp = (v, lo, hi, fallback)=>Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : fallback;
    return {
        ...state,
        size: clamp(state.size, 2, 12, 8),
        height: clamp(state.height, 1, 12, 4),
        offset: clamp(state.offset, -30, 130, 50),
        angle: clamp(state.angle, 0, 360, 35),
        spread: clamp(state.spread, 0, 1, 0),
        selected: Math.round(clamp(state.selected, 0, 5, 0))
    };
}
function partitionModel(kind, input) {
    const v = normalizePartition(input), a = v.size, h = v.general ? v.height : a / 2;
    const fmt = (n)=>n.toLocaleString('pt-PT', {
            maximumFractionDigits: 3
        });
    const m = {
        title: '',
        description: '',
        polygons: [],
        segments: [],
        labels: [],
        metrics: [],
        formula: '',
        note: ''
    };
    const polygon = (points, fill, opacity = 1)=>m.polygons.push({
            points: points.map((p)=>p.join(',')).join(' '),
            fill,
            opacity
        });
    if (kind === 'square') {
        m.title = v.general ? 'A mesma base. Outra altura.' : 'Quatro triângulos num quadrado';
        m.description = 'A altura é perpendicular à reta da base.';
        if (!v.general) {
            const length = a * 18, left = 210 - length / 2, top = 150 - length / 2;
            const corners = [
                [
                    left,
                    top
                ],
                [
                    left + length,
                    top
                ],
                [
                    left + length,
                    top + length
                ],
                [
                    left,
                    top + length
                ]
            ];
            const center = [
                210,
                150
            ];
            for(let i = 0; i < 4; i++)polygon([
                corners[i],
                corners[(i + 1) % 4],
                center
            ], partitionColors[i], i === v.selected % 4 ? 0.9 : 0.24);
            m.segments.push({
                from: center,
                to: [
                    210,
                    top + length
                ],
                dashed: true
            });
            m.labels.push({
                point: [
                    220,
                    150 + length / 4
                ],
                text: `h = ${fmt(h)} cm`
            }, {
                point: [
                    210,
                    top + length + 25
                ],
                text: `a = ${fmt(a)} cm`
            });
        } else {
            const scale = 16, baseY = 270, left = 100, right = left + a * scale, x = left + a * scale * v.offset / 100;
            polygon([
                [
                    left,
                    baseY
                ],
                [
                    right,
                    baseY
                ],
                [
                    x,
                    baseY - h * scale
                ]
            ], partitionColors[0], 0.65);
            m.segments.push({
                from: [
                    Math.min(left, x) - 12,
                    baseY
                ],
                to: [
                    Math.max(right, x) + 12,
                    baseY
                ],
                dashed: true
            }, {
                from: [
                    x,
                    baseY - h * scale
                ],
                to: [
                    x,
                    baseY
                ],
                dashed: true
            });
            m.labels.push({
                point: [
                    (left + right) / 2,
                    baseY + 25
                ],
                text: `b = ${fmt(a)} cm`
            }, {
                point: [
                    x + 12,
                    baseY - h * scale / 2
                ],
                text: `h = ${fmt(h)} cm`
            });
        }
        m.metrics = [
            {
                label: 'Base',
                value: `${fmt(a)} cm`
            },
            {
                label: 'Altura',
                value: `${fmt(h)} cm`
            },
            {
                label: 'Área do triângulo',
                value: `${fmt(a * h / 2)} cm²`
            }
        ];
        m.formula = v.general ? `A=\\frac{bh}{2}=\\frac{${a}\\cdot ${h}}2` : `A=\\frac{a^2}{4}=\\frac{a(a/2)}2=\\frac{${a * a}}4`;
        m.note = v.general ? 'Desloca o vértice: a área mantém-se se a base e a altura não mudarem. Fora da base, a altura encontra o seu prolongamento.' : `Área do quadrado: ${fmt(a * a)} cm². Cada região ocupa um quarto. Aqui h = a/2; muda de modo para tornar a altura independente.`;
    } else {
        const theta = v.angle * Math.PI / 180;
        const project = (p)=>{
            const x = p[0] * Math.cos(theta) - p[1] * Math.sin(theta), depth = p[0] * Math.sin(theta) + p[1] * Math.cos(theta);
            return [
                210 + 54 * x,
                170 + 26 * depth - 54 * p[2]
            ];
        };
        const depth = (p)=>p[0] * Math.sin(theta) + p[1] * Math.cos(theta) + p[2] * 0.2;
        const bases = [
            [
                [
                    1,
                    -1,
                    -1
                ],
                [
                    1,
                    1,
                    -1
                ],
                [
                    1,
                    1,
                    1
                ],
                [
                    1,
                    -1,
                    1
                ]
            ],
            [
                [
                    -1,
                    1,
                    -1
                ],
                [
                    -1,
                    -1,
                    -1
                ],
                [
                    -1,
                    -1,
                    1
                ],
                [
                    -1,
                    1,
                    1
                ]
            ],
            [
                [
                    -1,
                    1,
                    -1
                ],
                [
                    1,
                    1,
                    -1
                ],
                [
                    1,
                    1,
                    1
                ],
                [
                    -1,
                    1,
                    1
                ]
            ],
            [
                [
                    1,
                    -1,
                    -1
                ],
                [
                    -1,
                    -1,
                    -1
                ],
                [
                    -1,
                    -1,
                    1
                ],
                [
                    1,
                    -1,
                    1
                ]
            ],
            [
                [
                    -1,
                    -1,
                    1
                ],
                [
                    1,
                    -1,
                    1
                ],
                [
                    1,
                    1,
                    1
                ],
                [
                    -1,
                    1,
                    1
                ]
            ],
            [
                [
                    -1,
                    1,
                    -1
                ],
                [
                    1,
                    1,
                    -1
                ],
                [
                    1,
                    -1,
                    -1
                ],
                [
                    -1,
                    -1,
                    -1
                ]
            ]
        ];
        const normals = [
            [
                1,
                0,
                0
            ],
            [
                -1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ],
            [
                0,
                -1,
                0
            ],
            [
                0,
                0,
                1
            ],
            [
                0,
                0,
                -1
            ]
        ];
        if (v.general) {
            const s = a / 8, base = [
                [
                    -s,
                    -s,
                    -1.2
                ],
                [
                    s,
                    -s,
                    -1.2
                ],
                [
                    s,
                    s,
                    -1.2
                ],
                [
                    -s,
                    s,
                    -1.2
                ]
            ], apex = [
                0,
                0,
                -1.2 + h / 4
            ];
            polygon(base.map(project), partitionColors[1], 0.22);
            for(let i = 0; i < 4; i++)polygon([
                base[i],
                base[(i + 1) % 4],
                apex
            ].map(project), partitionColors[1], 0.25);
            m.segments.push({
                from: project(apex),
                to: project([
                    0,
                    0,
                    -1.2
                ]),
                dashed: true
            });
            m.labels.push({
                point: [
                    310,
                    70
                ],
                text: `h = ${fmt(h)} cm`
            }, {
                point: [
                    210,
                    310
                ],
                text: `base quadrada: lado ${fmt(a)} cm`
            });
        } else {
            // Each piece is translated rigidly; separation does not change its volume.
            const indices = [
                0,
                1,
                2,
                3,
                4,
                5
            ].sort((i, j)=>depth(normals[i]) - depth(normals[j]));
            for (const i of indices){
                const shift = normals[i].map((n)=>n * v.spread * 1.2);
                const move = (p)=>[
                        p[0] + shift[0],
                        p[1] + shift[1],
                        p[2] + shift[2]
                    ];
                const base = bases[i].map(move), apex = move([
                    0,
                    0,
                    0
                ]);
                polygon(base.map(project), partitionColors[i], i === v.selected ? 0.55 : 0.08);
                for(let k = 0; k < 4; k++)polygon([
                    base[k],
                    base[(k + 1) % 4],
                    apex
                ].map(project), partitionColors[i], i === v.selected ? 0.25 : 0.035);
                if (i === v.selected) {
                    m.segments.push({
                        from: project(apex),
                        to: project(move(normals[i])),
                        dashed: true
                    });
                }
            }
            m.labels.push({
                point: [
                    210,
                    25
                ],
                text: `Pirâmide ${v.selected + 1}: h = a/2 = ${fmt(h)} cm`
            }, {
                point: [
                    210,
                    325
                ],
                text: `Cubo de aresta ${fmt(a)} cm · esquema reescalado`
            });
        }
        m.title = v.general ? 'Uma pirâmide com altura independente' : 'Seis pirâmides. Um cubo.';
        m.description = 'Roda a vista e separa as peças para observar as bases e o vértice comum.';
        m.metrics = [
            {
                label: 'Área da base',
                value: `${fmt(a * a)} cm²`
            },
            {
                label: 'Altura',
                value: `${fmt(h)} cm`
            },
            {
                label: 'Volume de uma pirâmide',
                value: `${fmt(a * a * h / 3)} cm³`
            }
        ];
        m.formula = v.general ? `V=\\frac{A_bh}{3}=\\frac{${a * a}\\cdot ${h}}3` : `V=\\frac{a^3}{6}=\\frac{a^2(a/2)}3=\\frac{${a * a * a}}6`;
        m.note = v.general ? 'A base continua quadrada. Para outras formas de base, substitui a² pela área A_b. Valores decimais apresentados podem estar arredondados.' : `Volume do cubo: ${fmt(a * a * a)} cm³. São seis peças congruentes. A separação é apenas visual; aproxima as peças para recuperar o cubo. A linha tracejada marca a altura da peça selecionada.`;
    }
    return m;
}
}),
"[project]/src/services/square-sequence.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "squareSequenceModel",
    ()=>squareSequenceModel,
    "squareTerm",
    ()=>squareTerm
]);
function boundedInteger(value, min, max, fallback) {
    return Number.isFinite(value) ? Math.max(min, Math.min(max, Math.round(value))) : fallback;
}
function squareTerm(order) {
    const m = boundedInteger(order, 1, 51, 1), gray = 2 * (m - 1);
    return {
        order: m,
        gray,
        white: 100 - gray,
        changes: m - 1,
        counter: m >= 2 ? m - 2 : null
    };
}
function squareSequenceModel(order, targetWhite = 26) {
    const current = squareTerm(order), target = boundedInteger(targetWhite, 0, 100, 26);
    const targetGray = 100 - target;
    return {
        current,
        targetWhite: target,
        targetGray,
        targetOrder: targetGray % 2 === 0 ? targetGray / 2 + 1 : null,
        firstTen: Array.from({
            length: 10
        }, (_, i)=>squareTerm(i + 1)),
        cells: Array.from({
            length: 100
        }, (_, i)=>i >= 100 - current.gray),
        matches: current.white === target
    };
}
}),
"[project]/src/services/validation.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "safeError",
    ()=>safeError,
    "validateSubmission",
    ()=>validateSubmission
]);
function validateSubmission(d, kind) {
    const e = {};
    if (d.name.trim().length > 80) e.name = 'Usa até 80 caracteres.';
    if (kind === 'lesson' && d.name.trim().length < 2) e.name = 'Indica o teu nome.';
    if ((kind === 'lesson' || d.email.trim()) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) e.email = 'Indica um email válido.';
    if (d.email.trim().length > 160) e.email = 'O email é demasiado longo.';
    if (d.phone.trim().length > 30) e.phone = 'Usa até 30 caracteres.';
    if (d.message.trim().length < 10) e.message = 'Escreve pelo menos 10 caracteres para percebermos a tua dúvida.';
    if (d.message.trim().length > 2000) e.message = 'Usa até 2000 caracteres.';
    if (!d.consent) e.consent = 'Confirma que leste a informação de privacidade.';
    if (kind === 'lesson') {
        if (!d.year) e.year = 'Escolhe o nível de estudo.';
        if (d.topic.trim().length < 2) e.topic = 'Indica o assunto em que precisas de ajuda.';
        if (d.topic.trim().length > 120) e.topic = 'Usa até 120 caracteres.';
        if (d.availability.trim().length < 3) e.availability = 'Indica a tua disponibilidade habitual.';
        if (d.availability.trim().length > 300) e.availability = 'Usa até 300 caracteres.';
    }
    return e;
}
function safeError(error) {
    const code = error?.code || '';
    if (code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found') return 'Não foi possível entrar. Verifica o email e a palavra-passe.';
    if (code === 'auth/too-many-requests') return 'Demasiadas tentativas. Aguarda um pouco antes de tentar novamente.';
    if (code === 'permission-denied') return 'O envio ou acesso foi recusado. Aguarda um minuto e tenta novamente. Se persistir, contacta o responsável pelo site.';
    if (code === 'unavailable' || code === 'auth/network-request-failed') return 'Não conseguimos ligar ao serviço. Verifica a tua ligação e tenta novamente.';
    if (code === 'auth/operation-not-allowed') return 'O formulário ainda não está disponível. O responsável precisa de concluir a configuração.';
    if (error instanceof Error && error.message === 'cooldown') return 'Aguarda um minuto entre envios.';
    return 'Não foi possível concluir a operação. Tenta novamente mais tarde.';
}
}),
"[project]/src/stores/learning.store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLearningStore",
    ()=>useLearningStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const useLearningStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        completed: [],
        toggle: (slug)=>set((s)=>({
                    completed: s.completed.includes(slug) ? s.completed.filter((x)=>x !== slug) : [
                        ...s.completed,
                        slug
                    ]
                }))
    }), {
    name: 'mathmotion-progress-v1',
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage),
    skipHydration: true
}));
}),
"[project]/src/types/submission.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emptyDraft",
    ()=>emptyDraft
]);
const emptyDraft = {
    name: '',
    email: '',
    phone: '',
    year: '',
    topic: '',
    mode: 'online',
    availability: '',
    message: '',
    contactRole: 'student',
    consent: false,
    website: ''
};
}),
]})(),
"[project]/src/components/decimals/DecimalExplorer.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "choices": "DecimalExplorer-module-scss-module__tVw5pa__choices",
  "cycle": "DecimalExplorer-module-scss-module__tVw5pa__cycle",
  "details": "DecimalExplorer-module-scss-module__tVw5pa__details",
  "explorer": "DecimalExplorer-module-scss-module__tVw5pa__explorer",
  "nines": "DecimalExplorer-module-scss-module__tVw5pa__nines",
  "note": "DecimalExplorer-module-scss-module__tVw5pa__note",
  "period": "DecimalExplorer-module-scss-module__tVw5pa__period",
  "result": "DecimalExplorer-module-scss-module__tVw5pa__result",
  "tableWrap": "DecimalExplorer-module-scss-module__tVw5pa__tableWrap",
  "values": "DecimalExplorer-module-scss-module__tVw5pa__values",
});
}),
"[project]/src/components/explorers/Diagram.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "diagram": "Diagram-module-scss-module__RHlT3a__diagram",
});
}),
"[project]/src/components/explorers/Explorer.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "Explorer-module-scss-module__bIPC7q__body",
  "compact": "Explorer-module-scss-module__bIPC7q__compact",
  "control": "Explorer-module-scss-module__bIPC7q__control",
  "controls": "Explorer-module-scss-module__bIPC7q__controls",
  "explorer": "Explorer-module-scss-module__bIPC7q__explorer",
  "formula": "Explorer-module-scss-module__bIPC7q__formula",
  "header": "Explorer-module-scss-module__bIPC7q__header",
  "insight": "Explorer-module-scss-module__bIPC7q__insight",
  "label": "Explorer-module-scss-module__bIPC7q__label",
  "metrics": "Explorer-module-scss-module__bIPC7q__metrics",
  "range": "Explorer-module-scss-module__bIPC7q__range",
  "reset": "Explorer-module-scss-module__bIPC7q__reset",
  "roll": "Explorer-module-scss-module__bIPC7q__roll",
  "visual": "Explorer-module-scss-module__bIPC7q__visual",
});
}),
"[project]/src/components/forms/SubmissionForm.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "SubmissionForm-module-scss-module__AiZGVa__actions",
  "card": "SubmissionForm-module-scss-module__AiZGVa__card",
  "consent": "SubmissionForm-module-scss-module__AiZGVa__consent",
  "context": "SubmissionForm-module-scss-module__AiZGVa__context",
  "error": "SubmissionForm-module-scss-module__AiZGVa__error",
  "field": "SubmissionForm-module-scss-module__AiZGVa__field",
  "grid": "SubmissionForm-module-scss-module__AiZGVa__grid",
  "help": "SubmissionForm-module-scss-module__AiZGVa__help",
  "sent": "SubmissionForm-module-scss-module__AiZGVa__sent",
  "trap": "SubmissionForm-module-scss-module__AiZGVa__trap",
});
}),
"[project]/src/components/lessons/LessonView.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "article": "LessonView-module-scss-module__DbezGW__article",
  "aside": "LessonView-module-scss-module__DbezGW__aside",
  "back": "LessonView-module-scss-module__DbezGW__back",
  "block": "LessonView-module-scss-module__DbezGW__block",
  "challenge": "LessonView-module-scss-module__DbezGW__challenge",
  "complete": "LessonView-module-scss-module__DbezGW__complete",
  "details": "LessonView-module-scss-module__DbezGW__details",
  "exercise": "LessonView-module-scss-module__DbezGW__exercise",
  "formula": "LessonView-module-scss-module__DbezGW__formula",
  "hero": "LessonView-module-scss-module__DbezGW__hero",
  "layout": "LessonView-module-scss-module__DbezGW__layout",
  "page": "LessonView-module-scss-module__DbezGW__page",
  "problem": "LessonView-module-scss-module__DbezGW__problem",
  "questionButton": "LessonView-module-scss-module__DbezGW__questionButton",
  "step": "LessonView-module-scss-module__DbezGW__step",
  "stepNumber": "LessonView-module-scss-module__DbezGW__stepNumber",
  "tags": "LessonView-module-scss-module__DbezGW__tags",
  "takeaways": "LessonView-module-scss-module__DbezGW__takeaways",
});
}),
"[project]/src/components/partitions/PartitionExplorer.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "PartitionExplorer-module-scss-module__7iXWdW__body",
  "control": "PartitionExplorer-module-scss-module__7iXWdW__control",
  "explorer": "PartitionExplorer-module-scss-module__7iXWdW__explorer",
  "formula": "PartitionExplorer-module-scss-module__7iXWdW__formula",
  "metrics": "PartitionExplorer-module-scss-module__7iXWdW__metrics",
  "note": "PartitionExplorer-module-scss-module__7iXWdW__note",
  "pieces": "PartitionExplorer-module-scss-module__7iXWdW__pieces",
  "tabs": "PartitionExplorer-module-scss-module__7iXWdW__tabs",
});
}),
"[project]/src/components/sequences/SquareSequenceExplorer.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "SquareSequenceExplorer-module-scss-module__6uwdcW__body",
  "buttons": "SquareSequenceExplorer-module-scss-module__6uwdcW__buttons",
  "controls": "SquareSequenceExplorer-module-scss-module__6uwdcW__controls",
  "details": "SquareSequenceExplorer-module-scss-module__6uwdcW__details",
  "explorer": "SquareSequenceExplorer-module-scss-module__6uwdcW__explorer",
  "figure": "SquareSequenceExplorer-module-scss-module__6uwdcW__figure",
  "header": "SquareSequenceExplorer-module-scss-module__6uwdcW__header",
  "metrics": "SquareSequenceExplorer-module-scss-module__6uwdcW__metrics",
  "prompt": "SquareSequenceExplorer-module-scss-module__6uwdcW__prompt",
  "success": "SquareSequenceExplorer-module-scss-module__6uwdcW__success",
  "sum": "SquareSequenceExplorer-module-scss-module__6uwdcW__sum",
  "tableWrap": "SquareSequenceExplorer-module-scss-module__6uwdcW__tableWrap",
});
}),
"[project]/src/data/lessons.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "slug": "retangulo-maior-area",
        "title": "O mesmo contorno. Mais espaço?",
        "subtitle": "Descobre por que razão o quadrado ganha esta corrida.",
        "topic": "Geometria",
        "years": [
            7,
            8,
            9,
            10
        ],
        "minutes": 18,
        "image": "/images/garden.svg",
        "imageAlt": "Ilustração de um jardim retangular com vedação e plantas.",
        "accent": "green",
        "date": "2026-10-30",
        "problem": "Tens 20 metros de vedação para construir um jardim retangular. Que dimensões dão a maior área? Considera quatro lados vedados e nenhuma abertura.",
        "question": "Um jardim muito comprido consegue ter mais espaço do que um jardim quase quadrado?",
        "hints": [
            "O perímetro é a soma dos quatro lados: 2a + 2b = 20.",
            "Se a + b = 10, então conhecer a permite calcular b = 10 − a.",
            "Compara 4 × 6, 5 × 5 e 6 × 4. O que acontece à mesma distância do centro?"
        ],
        "tool": "area",
        "toolConfig": {
            "perimeter": 20,
            "initial": {
                "a": 3
            },
            "title": "O teu jardim, as tuas medidas",
            "prompt": "Mantém os 20 m de vedação. Arrasta o controlo e procura a maior área."
        },
        "steps": [
            {
                "title": "O que fica fixo?",
                "text": "O perímetro é 20 m. Cada par de lados opostos tem o mesmo comprimento. Dividimos o perímetro por dois e obtemos a soma de dois lados vizinhos.",
                "formula": "2a+2b=20\\quad\\Rightarrow\\quad a+b=10"
            },
            {
                "title": "Uma medida determina a outra",
                "text": "Se um lado medir 3 m, o outro mede 7 m. Para um lado a, o outro será 10 − a. A área é o produto dos lados.",
                "formula": "A(a)=a(10-a),\\qquad 0<a<10"
            },
            {
                "title": "Experimentar dá uma conjectura",
                "text": "Os pares (3, 7), (4, 6) e (5, 5) dão 21, 24 e 25 m². Parece que os lados iguais ganham. A tabela sugere uma resposta; ainda precisamos de a justificar."
            },
            {
                "title": "Porque nenhum outro retângulo ganha",
                "text": "Escrevemos a = 5 + d e b = 5 − d. Como d² nunca é negativo, a área nunca ultrapassa 25 m². A igualdade acontece apenas quando d = 0.",
                "formula": "A=(5+d)(5-d)=25-d^2\\leq25"
            },
            {
                "title": "A resposta, com unidades",
                "text": "O jardim com área máxima é um quadrado de lado 5 m, com área de 25 m². Se permitirmos um lado nulo, obtemos um caso degenerado com área zero."
            }
        ],
        "takeaways": [
            "Perímetro mede contorno; área mede superfície.",
            "Casos simétricos podem revelar uma estrutura.",
            "Uma conjectura nasce de experiências; uma demonstração explica todos os casos."
        ],
        "exercises": [
            {
                "question": "Com 24 m de vedação, que retângulo tem a maior área?",
                "hint": "A soma de dois lados vizinhos passa a ser 12.",
                "answer": "6 m × 6 m; área máxima de 36 m².",
                "explanation": "A área é (6 + d)(6 − d) = 36 − d²."
            },
            {
                "question": "Com 20 m de vedação, um lado mede 2 m. Qual é a área?",
                "hint": "Não uses 20 − 2 para o outro lado: conta os quatro lados.",
                "answer": "16 m².",
                "explanation": "O outro lado mede 8 m, pois 2 + 8 = 10. A área é 2 × 8."
            }
        ]
    },
    {
        "slug": "desconto-que-nao-volta",
        "title": "Sobe 20%. Desce 20%. Voltou?",
        "subtitle": "O pequeno detalhe que muda a tua conta.",
        "topic": "Números",
        "years": [
            6,
            7,
            8,
            9
        ],
        "minutes": 15,
        "image": "/images/prices.svg",
        "imageAlt": "Ilustração de etiquetas de preço com setas de aumento e desconto.",
        "accent": "purple",
        "date": "2026-10-29",
        "problem": "Uma mochila custa 50 €. O preço aumenta 20% e depois recebe um desconto de 20%. O preço final volta aos 50 €?",
        "question": "Antes de calcular: achas que acaba mais cara, mais barata ou igual?",
        "hints": [
            "20% de 50 € são 10 €. Qual é o preço depois do aumento?",
            "O desconto é calculado sobre o novo preço, não sobre os 50 € iniciais.",
            "Um aumento de 20% multiplica por 1,20. Um desconto de 20% multiplica por 0,80."
        ],
        "tool": "percent",
        "toolConfig": {
            "initial": {
                "price": 50,
                "up": 20,
                "down": 20
            },
            "title": "Segue o preço",
            "prompt": "Muda o aumento e o desconto. Repara no valor sobre o qual cada percentagem atua."
        },
        "steps": [
            {
                "title": "Transformar percentagens em valores",
                "text": "Uma percentagem é uma razão por cem. Para calcular 20% de 50 €, multiplicamos 50 por 0,20.",
                "formula": "50\\times\\frac{20}{100}=10"
            },
            {
                "title": "Aplicar o aumento",
                "text": "Somamos os 10 € ao preço inicial. Também podemos fazer tudo numa multiplicação.",
                "formula": "50(1+0{,}20)=60"
            },
            {
                "title": "A base de cálculo mudou",
                "text": "Agora retiramos 20% de 60 €, ou seja, 12 €. O resultado é 48 €, dois euros abaixo do preço inicial.",
                "formula": "60(1-0{,}20)=48"
            },
            {
                "title": "Uma regra para qualquer preço",
                "text": "Com a mesma taxa r, em forma decimal, o fator total é 1 − r². Para r entre 0 e 1, o preço final não ultrapassa o inicial.",
                "formula": "P(1+r)(1-r)=P(1-r^2)"
            },
            {
                "title": "Que desconto desfaz o aumento?",
                "text": "Para regressar de 60 € a 50 €, retiramos 10 € de uma base de 60 €. O desconto necessário é aproximadamente 16,67%, não 20%.",
                "formula": "\\frac{60-50}{60}\\times100\\%\\approx16{,}67\\%"
            }
        ],
        "takeaways": [
            "Pergunta sempre: percentagem de que valor?",
            "Variações sucessivas multiplicam fatores.",
            "Percentagens iguais podem representar quantias diferentes."
        ],
        "exercises": [
            {
                "question": "Um artigo de 80 € sobe 25% e depois desce 20%. Qual é o preço final?",
                "hint": "Calcula 80 × 1,25 × 0,80.",
                "answer": "80 €: neste caso volta ao preço inicial.",
                "explanation": "Os fatores 1,25 e 0,80 têm produto 1."
            },
            {
                "question": "100 € sobem 10% e depois descem 10%. Quanto fica?",
                "hint": "O desconto incide sobre 110 €.",
                "answer": "99 €.",
                "explanation": "100 × 1,10 × 0,90 = 99. A redução total é de 1%."
            }
        ]
    }
];
}),
"[project]/src/data/lessons/area-triangulo-quadrado.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "area-triangulo-quadrado",
    "title": "Uma fórmula escondida no quadrado",
    "subtitle": "Divide, observa a altura e reconstrói a área do triângulo.",
    "topic": "Geometria",
    "years": [
        7,
        8,
        9,
        10
    ],
    "minutes": 30,
    "image": "/images/square-partition.svg",
    "imageAlt": "Diagrama geométrico da decomposição em partes congruentes.",
    "accent": "green",
    "date": "2026-11-01",
    "problem": "Um quadrado tem lado 8 cm. Traça as duas diagonais e considera um dos quatro triângulos que elas formam. Sem começar pela fórmula da área do triângulo, descobre a área dessa região. Depois tenta reconstruir a fórmula usando a base e a altura.",
    "question": "Por que podemos dividir a área por quatro? Onde está a altura de um destes triângulos: na diagonal ou na distância perpendicular do centro a um lado?",
    "hints": [
        "A área do quadrado de lado a é a². As diagonais dividem-no em quatro triângulos congruentes.",
        "Cada triângulo tem como base um lado inteiro do quadrado. A distância perpendicular do centro a essa base é a/2.",
        "Escreve a²/4 como a(a/2)/2. Que medida podes substituir por h?"
    ],
    "tool": "area",
    "partitionExplorer": "square",
    "relatedLessons": [
        "volume-piramide-cubo"
    ],
    "steps": [
        {
            "title": "O que já sabemos calcular?",
            "text": "Começamos por uma área conhecida: a do quadrado. Um lado mede a, por isso a área é a vezes a. Com a = 8 cm, obtemos 64 cm².",
            "formula": "A_{\\text{quadrado}}=a^2\\qquad 8^2=64\\ \\mathrm{cm}^2"
        },
        {
            "title": "Quatro partes iguais: precisamos de justificar",
            "text": "Traça as duas diagonais. Elas encontram-se no centro e formam quatro triângulos, cada um com um lado do quadrado como base. Uma rotação de 90° em torno do centro leva cada triângulo ao seguinte: são congruentes, portanto têm áreas iguais. Cobrem o quadrado sem sobreposições interiores.",
            "formula": "4A_{\\triangle}=A_{\\text{quadrado}}=a^2"
        },
        {
            "title": "Dividir a área conhecida",
            "text": "Como as quatro regiões têm a mesma área, cada uma ocupa um quarto do quadrado. Dividir ambos os membros por quatro dá a área de um triângulo. No nosso exemplo, cada um mede 16 cm².",
            "formula": "A_{\\triangle}=\\frac{a^2}{4}=\\frac{64}{4}=16\\ \\mathrm{cm}^2"
        },
        {
            "title": "A altura não é o lado inclinado",
            "text": "Escolhe o lado inferior como base. A altura é o comprimento do segmento perpendicular que vai do centro a essa base; neste caso, h = a/2. O centro é um ponto e não tem comprimento: é a distância do centro ao lado que mede a/2. Não confundas esta distância com metade da diagonal.",
            "formula": "b=a,\\qquad h=\\frac a2"
        },
        {
            "title": "Reorganizar sem mudar o valor",
            "text": "Separamos o denominador 4 como 2 × 2 e agrupamos um dos fatores a com um dos fatores 2. Assim aparece a altura. A fração é a²/(2 × 2), não uma sequência ambígua de multiplicações e divisões.",
            "formula": "\\frac{a^2}{4}=\\frac{a\\cdot a}{2\\cdot2}=\\frac{a\\left(\\frac a2\\right)}2=\\frac{ah}{2}=\\frac{bh}{2}"
        },
        {
            "title": "O que demonstrámos até aqui?",
            "text": "Provámos a fórmula para estes quatro triângulos especiais, com base a e altura a/2. A expressão a²/4 depende dessa relação. Um triângulo com base 8 cm e altura 3 cm não tem área 16 cm²: a sua área é 12 cm². Para afirmar que bh/2 vale para qualquer triângulo, falta justificar a generalização."
        },
        {
            "title": "Duas cópias fazem um paralelogramo",
            "text": "Toma um triângulo qualquer e faz uma cópia rodada 180° em torno do ponto médio de um dos seus lados. As duas cópias formam um paralelogramo com base b e a mesma altura perpendicular h. Um paralelogramo pode ser recortado e reorganizado num retângulo de base b e altura h, cuja área é bh. Como temos duas cópias congruentes, cada uma tem metade dessa área.",
            "formula": "2A_{\\triangle}=bh\\quad\\Longrightarrow\\quad\\boxed{A_{\\triangle}=\\frac{bh}{2}}"
        },
        {
            "title": "A altura pode cair fora do triângulo",
            "text": "Num triângulo obtusângulo, o pé da perpendicular pode ficar no prolongamento da base. A altura continua a ser a distância perpendicular do vértice à reta que contém a base. Na ferramenta, muda para “Triângulo geral” e desloca o vértice lateralmente: com base e altura fixas, a área não muda."
        },
        {
            "title": "Resolver e preparar a próxima descoberta",
            "text": "No quadrado de lado 8 cm, cada triângulo tem base 8 cm e altura 4 cm: área 16 cm². As unidades são quadradas porque multiplicámos dois comprimentos. Na próxima aula vamos usar o mesmo ponto de partida — uma figura conhecida dividida em partes iguais — para investigar o volume de uma pirâmide.",
            "formula": "A=\\frac{8\\cdot4}{2}=16\\ \\mathrm{cm}^2"
        }
    ],
    "takeaways": [
        "As diagonais do quadrado criam quatro triângulos congruentes; por isso podemos dividir a área por quatro.",
        "a²/4 vale para os triângulos desta construção: base a e altura a/2.",
        "A fórmula geral é bh/2; base e altura têm de corresponder à mesma escolha de base.",
        "A altura é perpendicular à reta da base e pode ficar fora do triângulo.",
        "Descobrir uma fórmula num caso especial não basta para demonstrar todos os casos. Duas cópias do triângulo justificam a generalização."
    ],
    "exercises": [
        {
            "question": "O quadrado tem lado 12 cm. Qual é a área de cada um dos quatro triângulos?",
            "hint": "Começa pela área do quadrado.",
            "answer": "36 cm².",
            "explanation": "144/4 = 36. Também temos base 12 e altura 6: 12 × 6/2 = 36."
        },
        {
            "question": "Um triângulo tem base 12 cm e altura 5 cm. Podemos usar 12²/4?",
            "hint": "Verifica se a altura é metade da base.",
            "answer": "Não. A área é 30 cm².",
            "explanation": "A relação especial h = a/2 não se verifica. Usamos 12 × 5/2 = 30."
        },
        {
            "question": "Deslocamos o vértice lateralmente, mantendo base 8 e altura 3. A área muda?",
            "hint": "Quais são as medidas que entram na fórmula?",
            "answer": "Não: continua a ser 12 unidades quadradas.",
            "explanation": "A inclinação dos lados muda, mas a base e a altura perpendicular mantêm-se."
        },
        {
            "question": "A área é 24 cm² e a base mede 8 cm. Quanto mede a altura?",
            "hint": "Multiplica a igualdade por 2 e depois divide por 8.",
            "answer": "6 cm.",
            "explanation": "24 = 8h/2, logo 48 = 8h e h = 6."
        },
        {
            "question": "Num quadrado, escolhemos um ponto que não é o centro e ligamo-lo aos quatro vértices. As quatro áreas continuam iguais?",
            "hint": "Pensa num ponto muito próximo de um lado.",
            "answer": "Em geral, não.",
            "explanation": "As quatro regiões continuam a cobrir o quadrado, mas as distâncias do ponto aos lados não são todas iguais. Não podemos simplesmente dividir por quatro."
        }
    ]
};
}),
"[project]/src/data/lessons/dizimas-e-irracionais.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "dizimas-e-irracionais",
    "title": "Infinitos algarismos. Um padrão?",
    "subtitle": "De 1/3 a 0,999…: descobre o que distingue uma dízima periódica de um irracional.",
    "topic": "Números",
    "years": [
        8,
        9,
        10
    ],
    "minutes": 40,
    "image": "/images/decimals.svg",
    "imageAlt": "Três representações de um mesmo número: um terço, a divisão por três e a dízima com o algarismo três repetido.",
    "accent": "purple",
    "date": "2026-10-31",
    "problem": "Assinala a opção que apresenta um número que pode ser representado por uma dízima infinita periódica. A: −√49/51 (o sinal menos está fora da raiz e apenas 49 está dentro da raiz). B: 2π. C: √30 + √6. D: √8.",
    "question": "Escolhe uma opção antes de fazer contas. Ter uma raiz no símbolo torna um número necessariamente irracional? Guarda a tua hipótese e procura uma justificação.",
    "hints": [
        "Uma razão compara valores por divisão. Um número racional pode escrever-se como quociente de dois inteiros, com denominador diferente de zero.",
        "Simplifica √49 e √8. Uma raiz pode esconder um inteiro ou um fator quadrado perfeito.",
        "Na opção C há uma SOMA. Fatorizar √6 dá √6(√5 + 1), mas chamar irracionais aos dois fatores ainda não prova nada sobre o produto."
    ],
    "tool": "fractions",
    "decimalExplorer": true,
    "steps": [
        {
            "title": "Uma razão, duas escritas",
            "text": "A razão 1 para 3 escreve-se como 1/3. Dividir 1 por 3 dá 0,333…: o bloco 3 repete-se sem fim. É uma igualdade exata, não uma aproximação. Atenção à linguagem: uma razão pode comparar grandezas irracionais; para definir um número racional exigimos numerador e denominador inteiros.",
            "formula": "\\frac13=0{,}\\overline3\\qquad\\frac13\\approx0{,}333"
        },
        {
            "title": "A surpresa: multiplicar por três",
            "text": "Multiplica os dois membros da igualdade por 3. Obtemos duas escritas para o mesmo número. Os três pontos representam uma repetição infinita: não existe um último nove, nem um pequeno espaço positivo que fique por preencher.",
            "formula": "3\\cdot\\frac13=3\\cdot0{,}\\overline3\\quad\\Longrightarrow\\quad1=0{,}\\overline9"
        },
        {
            "title": "Uma aproximação finita não é o infinito",
            "text": "Com um nove falta 0,1; com dois faltam 0,01; com n noves falta 10 elevado a −n. Cada aproximação finita é menor do que 1. A escrita infinita designa o limite destas aproximações, que é exatamente 1. O slider mostra apenas casos finitos; nunca chega a um suposto último passo do infinito.",
            "formula": "s_n=\\sum_{k=1}^{n}\\frac9{10^k}=1-10^{-n}\\qquad\\lim_{n\\to\\infty}s_n=1"
        },
        {
            "title": "Por que uma divisão repete?",
            "text": "Na divisão por um inteiro positivo b, os restos possíveis são 0, 1, …, b − 1. Se aparece zero, a divisão termina. Se nunca aparece zero, algum resto tem de reaparecer, porque há apenas um número finito de restos. O mesmo resto produz o mesmo algarismo e o mesmo resto seguinte: começa um ciclo. Experimenta 1/3, 1/6, 1/8 e 7/51 na ferramenta."
        },
        {
            "title": "E uma dízima pode voltar a ser uma fração?",
            "text": "Sim. Se x = 0,333…, então 10x = 3,333…. Subtrair as duas igualdades cancela a parte periódica. Para períodos com mais algarismos, multiplicamos pela potência de 10 que desloca um bloco inteiro. Se houver uma parte não periódica inicial, deslocamo-la primeiro.",
            "formula": "x=0{,}\\overline3\\quad\\Rightarrow\\quad10x-x=3\\quad\\Rightarrow\\quad x=\\frac39=\\frac13"
        },
        {
            "title": "A: a raiz desaparece, o período fica",
            "text": "A raiz quadrada principal de 49 é 7. Assim, A é −7/51. A fração já é irredutível e 51 = 3 × 17: o denominador contém fatores diferentes de 2 e 5. A expansão decimal não termina e é periódica. O sinal negativo não altera o período. Encontrámos a opção correta: A.",
            "formula": "-\\frac{\\sqrt{49}}{51}=-\\frac7{51}=-0{,}\\overline{1372549019607843}"
        },
        {
            "title": "B: por que 2π continua irracional?",
            "text": "Sabemos que π é irracional. Se 2π fosse racional, dividir esse número racional por 2 tornaria π racional: uma contradição. O argumento vale para qualquer fator racional diferente de zero. Com zero já não podemos dividir, e 0 × π = 0 é racional.",
            "formula": "r\\in\\mathbb Q\\setminus\\{0\\},\\ x\\notin\\mathbb Q\\quad\\Longrightarrow\\quad rx\\notin\\mathbb Q"
        },
        {
            "title": "D: extrair o quadrado perfeito",
            "text": "Dentro de √8, escreve 8 = 4 × 2. Para radicandos não negativos, a raiz de um produto é o produto das raízes. Como √2 é irracional e 2 é racional não nulo, √8 é irracional. Nem toda a raiz é irracional: √49 é um exemplo racional. Já a raiz quadrada real de um irracional positivo é irracional, pois o quadrado de um racional seria racional.",
            "formula": "\\sqrt8=\\sqrt{4\\cdot2}=2\\sqrt2"
        },
        {
            "title": "Uma pausa: dois irracionais podem dar um racional?",
            "text": "Antes de abrir as próximas ideias, compara √2 × √8 e √2 × √3. No primeiro caso o produto dentro da raiz é 16, um quadrado perfeito; o resultado é 4. No segundo é 6, que não é quadrado perfeito, e √6 é irracional. Portanto, “os dois fatores são irracionais” não decide o resultado. Para um inteiro positivo N, √N é racional exatamente quando N é um quadrado perfeito.",
            "formula": "\\sqrt2\\sqrt8=\\sqrt{16}=4\\qquad\\sqrt2\\sqrt3=\\sqrt6"
        },
        {
            "title": "C: fatorizar ajuda, mas ainda não prova",
            "text": "Podemos escrever √30 = √6 × √5 e pôr √6 em evidência. Contudo, obter um produto de irracionais não basta para classificar o resultado: acabámos de construir um contraexemplo. Precisamos de um argumento adicional. Também não basta dizer que uma soma de irracionais é irracional: √2 + (−√2) = 0.",
            "formula": "\\sqrt{30}+\\sqrt6=\\sqrt6(\\sqrt5+1)"
        },
        {
            "title": "C: o quadrado revela a contradição",
            "text": "Chama s à soma e calcula o seu quadrado, sem esquecer o dobro do produto. Como √180 = 6√5, obtemos s² = 36 + 12√5. Se s fosse racional, s² também seria racional e a igualdade tornaria √5 racional, o que é falso. Portanto C é irracional. Não precisamos de casas decimais para o provar.",
            "formula": "s^2=(\\sqrt{30}+\\sqrt6)^2=36+12\\sqrt5\\qquad\\sqrt5=\\frac{s^2-36}{12}"
        },
        {
            "title": "Responder e guardar a diferença",
            "text": "A é a resposta. B, C e D são irracionais e, por isso, não têm expansões decimais periódicas. Aqui A tem uma expansão genuinamente não terminante. Há uma subtileza: os decimais terminantes também admitem uma escrita alternativa com noves, como 0,5 = 0,4999…. Isso não muda a resposta desta questão.",
            "formula": "\\boxed{\\text{Opção A}}"
        }
    ],
    "takeaways": [
        "Um racional é um quociente de inteiros com denominador não nulo; a sua expansão decimal termina ou acaba por repetir um bloco.",
        "Um irracional tem expansão decimal infinita não periódica. Uma calculadora mostra apenas uma aproximação.",
        "0,999… = 1 exatamente. Uma escrita com apenas um número finito de noves é menor do que 1.",
        "Racional não nulo × irracional é irracional. O fator zero é a exceção.",
        "Irracional + irracional e irracional × irracional podem dar resultados racionais ou irracionais: é preciso analisar a expressão.",
        "Numa fração irredutível, o decimal termina se o denominador só tiver fatores primos 2 e/ou 5 (ou for 1). Outros fatores dão uma expansão não terminante periódica."
    ],
    "exercises": [
        {
            "question": "0,999 e 0,999… são ambos iguais a 1?",
            "hint": "Conta quantos noves cada escrita representa.",
            "answer": "Não: 0,999 < 1, mas 0,999… = 1.",
            "explanation": "No primeiro caso falta 0,001. No segundo, falamos do limite, não de uma aproximação com um último algarismo."
        },
        {
            "question": "Sem dividir: quais terminam, 3/40, 7/12 e 6/15?",
            "hint": "Reduz primeiro cada fração e fatoriza o denominador.",
            "answer": "3/40 e 6/15 terminam; 7/12 não termina e é periódica.",
            "explanation": "40 = 2³ × 5; 6/15 = 2/5; 12 = 2² × 3 e 7/12 já está reduzida."
        },
        {
            "question": "Transforma 0,121212… numa fração.",
            "hint": "Chama x ao número e compara 100x com x.",
            "answer": "4/33.",
            "explanation": "100x − x = 12, logo x = 12/99 = 4/33."
        },
        {
            "question": "Classifica √3 × √12 e √3 × √10.",
            "hint": "Multiplica os radicandos e procura quadrados perfeitos.",
            "answer": "6 é racional; √30 é irracional.",
            "explanation": "36 é quadrado perfeito; 30 não é. Não basta classificar cada fator separadamente."
        },
        {
            "question": "A soma de dois irracionais é sempre irracional?",
            "hint": "Compara √2 + √2 com √2 + (−√2).",
            "answer": "Não. Pode ser racional ou irracional.",
            "explanation": "A primeira soma é 2√2, irracional. A segunda é zero, racional."
        },
        {
            "question": "Qual é a falha em “qualquer racional vezes π é irracional”?",
            "hint": "Procura um racional que impeça a divisão usada na prova.",
            "answer": "O racional zero é uma exceção.",
            "explanation": "0π = 0. Para qualquer racional não nulo, o argumento por divisão funciona."
        },
        {
            "question": "Desafio: √3 + √2 é racional ou irracional?",
            "hint": "Supõe que a soma é racional e eleva-a ao quadrado.",
            "answer": "É irracional.",
            "explanation": "O quadrado é 5 + 2√6. Se fosse racional, √6 também seria racional: contradição."
        }
    ]
};
}),
"[project]/src/data/lessons/produto-nulo-balanca.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "produto-nulo-balanca",
    "title": "Duas soluções. Nenhuma magia.",
    "subtitle": "Da distributividade à balança: resolve 2x² − 5x = 0 sem perder uma solução.",
    "topic": "Álgebra",
    "years": [
        8,
        9,
        10
    ],
    "minutes": 30,
    "image": "/images/zero-product.svg",
    "imageAlt": "A equação 2x² − 5x = 0 é fatorizada em x(2x − 5) = 0, dando os dois casos x = 0 ou 2x − 5 = 0.",
    "accent": "purple",
    "date": "2026-10-31",
    "problem": "Assinala a opção que apresenta o conjunto solução da equação 2x² − 5x = 0. A: {5/2}. B: {0, 5/2}. C: {−5/2}. D: {−5/2, 0}.",
    "question": "Antes de usar qualquer fórmula, experimenta x = 0. Depois pergunta: que fator aparece nos dois termos do primeiro membro?",
    "hints": [
        "A distributividade funciona nos dois sentidos: ab + ac = a(b + c). Que fator comum existe em 2x² e −5x?",
        "Se um produto de dois números reais é zero, pelo menos um dos fatores tem de ser zero.",
        "Trata primeiro x = 0. Só no caso x ≠ 0 podes dividir ambos os membros por x. Para resolver 2x − 5 = 0, soma 5 aos dois membros e depois divide ambos por 2."
    ],
    "tool": "equation",
    "toolConfig": {
        "initial": {
            "a": 2,
            "b": -5,
            "c": 0,
            "x": 1
        },
        "title": "A balança do segundo caso",
        "prompt": "Esta ferramenta representa apenas 2x − 5 = 0, depois de separarmos x = 0. Mantém a = 2, b = −5 e c = 0 e experimenta x. Para simular somar 5 aos dois membros, muda b para 0 e c para 5. A balança é esquemática: compara valores, incluindo negativos."
    },
    "steps": [
        {
            "title": "Experimentar antes de transformar",
            "text": "Ao substituir x por zero, os dois termos desaparecem e a igualdade fica verdadeira. Portanto, zero já é uma solução. Guarda-a antes de fazer qualquer divisão. Ainda não sabemos se existe outra.",
            "formula": "2\\cdot0^2-5\\cdot0=0"
        },
        {
            "title": "A distributividade ao contrário",
            "text": "Lembra a propriedade a(b + c) = ab + ac. Aqui, 2x² = x · 2x e −5x = x · (−5). Podemos colocar o fator comum x em evidência. Não dividimos a equação por x: apenas escrevemos a mesma expressão de outra forma, válida também para x = 0.",
            "formula": "2x^2-5x=x\\cdot2x+x\\cdot(-5)=x(2x-5)"
        },
        {
            "title": "O que significa o produto ser zero?",
            "text": "Agora temos dois fatores: x e 2x − 5. Um produto de números reais só é zero se pelo menos um dos fatores for zero. Porquê? Se o primeiro fator não for zero, podemos dividir a igualdade por ele e concluir que o segundo é zero. Não é necessário que os dois sejam zero ao mesmo tempo.",
            "formula": "ab=0\\quad\\Longleftrightarrow\\quad a=0\\ \\text{ou}\\ b=0"
        },
        {
            "title": "Primeiro caso: x = 0",
            "text": "O primeiro fator é zero, por isso o produto é zero. O segundo fator vale −5, o que não é um problema: zero vezes −5 continua a ser zero. Esta observação também mostra por que não devemos exigir que os dois fatores se anulem simultaneamente.",
            "formula": "0(2\\cdot0-5)=0\\cdot(-5)=0"
        },
        {
            "title": "Segundo caso: x é diferente de zero",
            "text": "Agora podemos dividir os dois membros por x, pois neste caso sabemos que não é zero. O fator x cancela-se no primeiro membro e 0/x é zero. Ficamos com uma equação linear. São dois casos que cobrem todos os números reais: x = 0 ou x ≠ 0.",
            "formula": "x\\ne0:\\quad\\frac{x(2x-5)}{x}=\\frac0x\\quad\\Longrightarrow\\quad2x-5=0"
        },
        {
            "title": "A balança: somar dos dois lados",
            "text": "Em vez de dizer apenas que o −5 passa para o outro lado como +5, mostramos a operação: somamos 5 aos dois membros. No primeiro, −5 + 5 = 0; no segundo, 0 + 5 = 5. A mesma operação foi aplicada aos dois lados da igualdade.",
            "formula": "\\begin{aligned}2x-5&=0\\\\2x-5+5&=0+5\\\\2x&=5\\end{aligned}"
        },
        {
            "title": "A balança: dividir dos dois lados",
            "text": "O coeficiente de x é 2. Para isolar x, dividimos ambos os membros por 2, que é diferente de zero. Encontramos 5/2, ou 2,5. Este valor respeita a condição x ≠ 0 do segundo caso.",
            "formula": "\\frac{2x}{2}=\\frac52\\quad\\Longrightarrow\\quad x=\\frac52"
        },
        {
            "title": "Explorar as operações na ferramenta",
            "text": "A balança acima começa em 2x − 5 = 0 e representa apenas o segundo caso, não a equação quadrática original. Experimenta x = 2,5. Depois muda b de −5 para 0 e c de 0 para 5: passaste a representar 2x = 5, e o mesmo x continua a equilibrar os dois membros. Como os controlos mudam separadamente, a posição intermédia não representa ainda a transformação completa. A divisão por 2 é mostrada nas contas do passo anterior; o controlo c desta ferramenta usa apenas inteiros."
        },
        {
            "title": "Juntar os casos e escolher a opção",
            "text": "O primeiro caso deu x = 0 e o segundo deu x = 5/2. O conjunto solução inclui os dois valores. A opção A tem apenas uma solução e está incompleta. C e D incluem −5/2, que não é solução. A resposta é B.",
            "formula": "S=\\left\\{0,\\frac52\\right\\}\\qquad\\boxed{\\text{Opção B}}"
        },
        {
            "title": "Verificar na equação original",
            "text": "Substituir os valores na equação original confirma as contas. Para x = 5/2, os dois termos têm o mesmo valor e cancelam-se. Já x = −5/2 produz 25, não zero. O zero foi verificado no início.",
            "formula": "\\begin{aligned}2\\left(\\frac52\\right)^2-5\\left(\\frac52\\right)&=\\frac{25}{2}-\\frac{25}{2}=0\\\\2\\left(-\\frac52\\right)^2-5\\left(-\\frac52\\right)&=\\frac{25}{2}+\\frac{25}{2}=25\\ne0\\end{aligned}"
        },
        {
            "title": "O erro que apaga uma solução",
            "text": "Se dividíssemos logo a equação original por x, estaríamos a assumir x ≠ 0 sem o dizer. A equação linear obtida teria apenas a solução 5/2, e a solução zero seria perdida. Não é errado dividir no caso x ≠ 0; é errado esquecer o caso x = 0. Também não podemos aplicar a lei do produto nulo a uma soma ou a um produto igual a um número diferente de zero."
        },
        {
            "title": "Uma regra que nasce deste exemplo",
            "text": "Para ax² + bx = 0, com a ≠ 0, a mesma fatorização dá x(ax + b) = 0. Obtemos x = 0 ou x = −b/a. Aqui a = 2 e b = −5, logo −b/a = 5/2. Se b = 0, os dois casos dão o mesmo valor: o conjunto solução contém apenas zero.",
            "formula": "ax^2+bx=x(ax+b)=0\\quad\\Longrightarrow\\quad x=0\\ \\text{ou}\\ x=-\\frac ba\\qquad(a\\ne0)"
        }
    ],
    "takeaways": [
        "A distributividade permite desenvolver ou fatorizar uma expressão sem mudar o seu valor.",
        "Em números reais, um produto é zero se, e só se, pelo menos um fator é zero. É “ou”, não “e”.",
        "Somar ou subtrair o mesmo número aos dois membros conserva a igualdade e o conjunto solução.",
        "Multiplicar ou dividir ambos os membros por um mesmo número não nulo conserva o conjunto solução. Dividir por zero não está definido.",
        "Dividir por uma expressão com x exige separar os casos em que essa expressão é zero.",
        "Passar um termo para o outro membro é uma abreviação de uma operação aplicada aos dois membros.",
        "Uma solução verificada não garante que encontrámos todas. Aqui, a separação em dois casos garante a resposta completa."
    ],
    "exercises": [
        {
            "question": "Resolve 3x² − 12x = 0 sem usar a fórmula resolvente.",
            "hint": "Coloca x em evidência e separa os casos.",
            "answer": "S = {0, 4}.",
            "explanation": "x(3x − 12) = 0. No segundo caso, soma 12 aos dois membros e divide ambos por 3."
        },
        {
            "question": "Resolve 2x² + 5x = 0. O segundo valor continua positivo?",
            "hint": "Depois de fatorizar, resolve 2x + 5 = 0.",
            "answer": "S = {0, −5/2}.",
            "explanation": "Subtrair 5 aos dois membros dá 2x = −5; dividir ambos por 2 dá −5/2. O sinal mudou porque a equação mudou."
        },
        {
            "question": "Um aluno divide 2x² − 5x = 0 por x e responde S = {5/2}. O que falta?",
            "hint": "Que valor foi excluído quando dividiu por x?",
            "answer": "Falta a solução x = 0.",
            "explanation": "A divisão pressupõe x ≠ 0. É preciso estudar separadamente x = 0 e juntar as soluções dos dois casos."
        },
        {
            "question": "Em x(x − 3) = 0, os dois fatores têm de ser zero ao mesmo tempo?",
            "hint": "Experimenta x = 0 e depois x = 3.",
            "answer": "Não. Basta pelo menos um fator ser zero; S = {0, 3}.",
            "explanation": "Para x = 0, o segundo fator vale −3. Para x = 3, o primeiro vale 3. Em ambos os casos, o produto é zero."
        },
        {
            "question": "Resolve 5x − 7 = 8, indicando cada operação nos dois membros.",
            "hint": "Começa por somar 7 dos dois lados.",
            "answer": "x = 3.",
            "explanation": "5x − 7 + 7 = 8 + 7 dá 5x = 15. Dividindo ambos os membros por 5, obtemos x = 3."
        },
        {
            "question": "Podemos concluir x = 0 ou x = 3 a partir de x(x − 3) = 4?",
            "hint": "A lei usada na aula exige que o produto seja igual a quê?",
            "answer": "Não. Essas duas substituições dão produto zero, não 4.",
            "explanation": "A lei do produto nulo exige um produto igual a zero. Neste caso, passar tudo para o primeiro membro e fatorizar dá (x − 4)(x + 1) = 0: as soluções são 4 e −1."
        },
        {
            "question": "Resolve 2x² = 0. Existem duas soluções diferentes?",
            "hint": "Fatoriza como x · 2x = 0.",
            "answer": "S = {0}.",
            "explanation": "Os dois fatores anulam-se apenas quando x = 0. Um conjunto não repete o mesmo elemento."
        }
    ]
};
}),
"[project]/src/data/lessons/sequencia-quadrados.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "sequencia-quadrados",
    "title": "74 quadrados. Mas em que termo?",
    "subtitle": "Descobre a regra antes da fórmula e separa quantidade, contador e posição.",
    "topic": "Sequências",
    "years": [
        7,
        8,
        9,
        10
    ],
    "minutes": 35,
    "image": "/images/square-sequence.svg",
    "imageAlt": "Os três primeiros termos em grelhas de 100 quadrados: zero, dois e quatro quadrados cinzentos.",
    "accent": "green",
    "date": "2026-10-31",
    "problem": "Cada figura é um quadrado dividido em 100 quadrados iguais. O primeiro termo tem apenas quadrados brancos. O segundo tem 2 quadrados cinzentos e cada termo seguinte tem mais 2 cinzentos do que o anterior. Existe um termo com exatamente 26 quadrados brancos. Qual é a ordem desse termo? Mostra como chegaste à resposta.",
    "question": "O enunciado pede o número de quadrados cinzentos ou a posição da figura na sequência? Antes de calcular, explica a diferença com o segundo termo.",
    "hints": [
        "Escreve duas sequências lado a lado: brancos e cinzentos. Em cada figura, quantos quadrados há ao todo?",
        "Se há 26 brancos, resolve 26 + x = 100. O valor de x já responde à pergunta sobre a ordem?",
        "Na sequência 2, 4, 6, 8, …, experimenta escrever cada valor como 2 × k + 2, começando com k = 0. Repara que o valor 2 pertence ao segundo termo da sequência original."
    ],
    "tool": "equation",
    "sequenceExplorer": true,
    "steps": [
        {
            "title": "Começar pelas figuras, não pela fórmula",
            "text": "No primeiro termo há 100 brancos e nenhum cinzento. No segundo, 98 brancos e 2 cinzentos. No terceiro, 96 brancos e 4 cinzentos. Continua até ao décimo termo e tenta descrever, por palavras, o que muda e o que fica igual."
        },
        {
            "title": "Duas sequências que se completam",
            "text": "Por ordem, do primeiro ao décimo termo: os brancos são 100, 98, 96, 94, 92, 90, 88, 86, 84, 82; os cinzentos são 0, 2, 4, 6, 8, 10, 12, 14, 16, 18. As reticências significam que continuamos a regra enquanto houver espaço na grelha. Os valores de cada coluna somam sempre 100.",
            "formula": "\\begin{array}{c|rrrrrrrrrr}m&1&2&3&4&5&6&7&8&9&10\\\\\\hline B&100&98&96&94&92&90&88&86&84&82\\\\C&0&2&4&6&8&10&12&14&16&18\\end{array}"
        },
        {
            "title": "Uma equação para a quantidade",
            "text": "Se x é o número de cinzentos na figura procurada, os 26 brancos completam com x os 100 quadrados. Subtraímos 26 aos dois membros. Encontrámos a quantidade de cinzentos; ainda falta descobrir em que posição ela aparece.",
            "formula": "26+x=100\\quad\\Longrightarrow\\quad x=100-26=74"
        },
        {
            "title": "Construir uma regra por experiências",
            "text": "Vamos começar pelo valor 2, que pertence ao segundo termo. Escrevemos os valores como o dobro de um contador, mais 2. O contador k vale 0, 1, 2, 3, … . Isto descreve quantos aumentos de 2 fizemos depois do segundo termo.",
            "formula": "\\begin{aligned}2&=2\\cdot0+2\\\\4&=2\\cdot1+2\\\\6&=2\\cdot2+2\\\\8&=2\\cdot3+2\\\\10&=2\\cdot4+2\\end{aligned}"
        },
        {
            "title": "Onde entra o valor 74?",
            "text": "Aplicamos a regra que acabámos de construir. Primeiro retiramos 2; depois dividimos por 2. O resultado 36 é o contador de aumentos a partir do segundo termo. Não é ainda a ordem da figura.",
            "formula": "74=2k+2\\quad\\Longrightarrow\\quad72=2k\\quad\\Longrightarrow\\quad k=36"
        },
        {
            "title": "O deslocamento que decide a resposta",
            "text": "Compara o contador com a ordem original: para 2 cinzentos, k = 0 e a ordem é 2; para 4, k = 1 e a ordem é 3; para 6, k = 2 e a ordem é 4. Em todos estes casos, somamos 2 ao contador. Chamamos m à ordem para não a confundir com k.",
            "formula": "\\begin{array}{c|rrrr}C&2&4&6&74\\\\k&0&1&2&36\\\\m=k+2&2&3&4&38\\end{array}"
        },
        {
            "title": "Responder ao que foi perguntado",
            "text": "Como k = 36, a ordem é 36 + 2 = 38. Logo, o 38.º termo tem exatamente 26 quadrados brancos. Não somamos k + k: o deslocamento é sempre 2, porque escolhemos o segundo termo como ponto de partida.",
            "formula": "m=k+2=36+2=\\boxed{38}"
        },
        {
            "title": "Conferir com os vizinhos",
            "text": "Uma resposta fica mais convincente quando a verificamos. O 37.º termo tem 72 cinzentos e 28 brancos; o 38.º tem 74 e 26; o 39.º tem 76 e 24. A mudança de dois em dois mantém-se, e o valor procurado fica exatamente no meio.",
            "formula": "\\begin{array}{c|rrr}m&37&38&39\\\\C&72&74&76\\\\B&28&26&24\\end{array}"
        },
        {
            "title": "Outra intuição: partir do primeiro termo",
            "text": "Podíamos ter começado nos zero cinzentos do primeiro termo. Para chegar a 74, são necessários 74 ÷ 2 = 37 aumentos. Como o primeiro termo já existe antes de qualquer aumento, a ordem é 37 + 1 = 38. Os contadores diferem porque escolhemos pontos de partida diferentes.",
            "formula": "\\text{37 aumentos a partir do termo 1}\\quad\\Rightarrow\\quad m=1+37=38"
        },
        {
            "title": "Agora sim: reconhecer a PA",
            "text": "Uma progressão aritmética é uma sequência numérica em que a diferença entre termos consecutivos é constante. A sequência dos cinzentos tem primeiro termo c₁ = 0 e razão r = 2. Para chegar à ordem m, fazemos m − 1 aumentos. A fórmula apenas resume esse raciocínio.",
            "formula": "c_m=c_1+(m-1)r=0+2(m-1)"
        },
        {
            "title": "Resolver com a fórmula",
            "text": "Procuramos cₘ = 74. Dividimos por 2 e somamos 1. É a mesma resposta do método intuitivo. Também podíamos trabalhar diretamente com os brancos: primeiro termo 100 e razão −2.",
            "formula": "\\begin{aligned}74&=2(m-1)&\\Rightarrow\\quad m&=38\\\\26&=100-2(m-1)&\\Rightarrow\\quad m&=38\\end{aligned}"
        },
        {
            "title": "Até onde pode continuar a figura?",
            "text": "O 51.º termo tem 100 cinzentos e zero brancos. A regra numérica permite calcular um 52.º valor, mas ele seria 102 cinzentos: já não cabe numa grelha de 100. Também nunca obtemos 25 brancos, pois começamos em 100 e retiramos sempre 2: todas as quantidades de brancos são pares.",
            "formula": "0\\leq 2(m-1)\\leq100\\quad\\Longrightarrow\\quad1\\leq m\\leq51\\quad(m\\in\\mathbb N)"
        }
    ],
    "takeaways": [
        "Em cada figura, brancos + cinzentos = 100.",
        "O número 74 conta quadrados cinzentos; 38 indica a ordem do termo.",
        "O contador k em 2k + 2 começa em zero no segundo termo. Por isso a ordem é m = k + 2, e não k nem k + 1.",
        "Partindo do primeiro termo, há m − 1 mudanças até chegar ao termo de ordem m.",
        "A fórmula da PA organiza a mesma regularidade que encontrámos ao experimentar.",
        "Uma regra deve respeitar o contexto: nesta grelha não podemos ter menos de zero nem mais de 100 quadrados cinzentos."
    ],
    "exercises": [
        {
            "question": "Qual é a ordem do termo que tem 60 quadrados brancos?",
            "hint": "Primeiro descobre quantos cinzentos tem.",
            "answer": "21.º termo.",
            "explanation": "Há 40 cinzentos. A partir do primeiro termo são 20 aumentos, logo a ordem é 20 + 1 = 21. Pelo outro contador: 40 = 2k + 2 dá k = 19 e m = 19 + 2 = 21."
        },
        {
            "question": "Quantos quadrados brancos tem o 10.º termo?",
            "hint": "Do primeiro ao décimo termo, quantas mudanças acontecem?",
            "answer": "82 brancos.",
            "explanation": "São 9 mudanças de 2: 18 cinzentos e 100 − 18 = 82 brancos. Não são 10 mudanças."
        },
        {
            "question": "Um aluno obteve k = 36 e respondeu “36.º termo”. O que falta?",
            "hint": "Que ordem corresponde a k = 0 na regra 2k + 2?",
            "answer": "Falta converter o contador na ordem: m = k + 2 = 38.",
            "explanation": "k conta aumentos depois do segundo termo; a ordem conta a posição na sequência original."
        },
        {
            "question": "Existe um termo com exatamente 25 quadrados brancos?",
            "hint": "Observa a paridade dos valores da sequência branca.",
            "answer": "Não.",
            "explanation": "As quantidades brancas são sempre pares. A equação daria m = 38,5, que não é uma ordem válida: os termos têm ordens inteiras."
        },
        {
            "question": "Qual é o último termo que cabe na grelha de 100 quadrados?",
            "hint": "Põe a quantidade de cinzentos igual a 100.",
            "answer": "51.º termo.",
            "explanation": "100 = 2(m − 1) dá m = 51. O seguinte exigiria 102 quadrados cinzentos."
        },
        {
            "question": "Se a grelha tivesse 64 quadrados e a regra continuasse a acrescentar 2 cinzentos, em que termo haveria 26 brancos?",
            "hint": "O total mudou, mas o primeiro termo continua todo branco.",
            "answer": "20.º termo.",
            "explanation": "64 − 26 = 38 cinzentos; 38 ÷ 2 = 19 aumentos a partir do primeiro termo; ordem 20."
        },
        {
            "question": "Agora o primeiro termo tem 4 cinzentos e cada seguinte ganha 3. Em que termo há 26 brancos numa grelha de 100?",
            "hint": "Procura 74 cinzentos e conta aumentos a partir dos 4 iniciais.",
            "answer": "Não existe tal termo.",
            "explanation": "Seria preciso fazer (74 − 4)/3 = 70/3 aumentos, que não é inteiro. Os termos de ordens 24 e 25 têm 73 e 76 cinzentos, logo 27 e 24 brancos."
        }
    ]
};
}),
"[project]/src/data/lessons/volume-piramide-cubo.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "slug": "volume-piramide-cubo",
    "title": "Seis pirâmides dentro de um cubo",
    "subtitle": "Reconstrói o fator 1/3 a partir de um sólido cujo volume já conheces.",
    "topic": "Geometria",
    "years": [
        7,
        8,
        9,
        10
    ],
    "minutes": 30,
    "image": "/images/cube-partition.svg",
    "imageAlt": "Diagrama geométrico da decomposição em partes congruentes.",
    "accent": "purple",
    "date": "2026-11-01",
    "problem": "Um cubo tem aresta 6 cm. Liga o centro aos oito vértices e considera as seis pirâmides que têm vértice no centro e bases nas seis faces do cubo. Qual é o volume de cada uma? Usa esta construção para investigar a fórmula do volume de uma pirâmide.",
    "question": "Há oito segmentos até aos vértices, mas seis pirâmides. O que determina a quantidade de pirâmides: os vértices do cubo ou as suas faces?",
    "hints": [
        "O cubo tem seis faces. Cada face é a base de uma pirâmide com vértice comum no centro.",
        "As seis pirâmides são congruentes e preenchem o cubo. A altura perpendicular de cada uma é a/2.",
        "Escreve a³/6 como a²(a/2)/3. O que representa a²?"
    ],
    "tool": "volume",
    "partitionExplorer": "cube",
    "relatedLessons": [
        "area-triangulo-quadrado"
    ],
    "steps": [
        {
            "title": "Primeiro, acertar as grandezas",
            "text": "Um triângulo é uma figura plana: calculamos a sua área. Aqui o sólido é uma pirâmide de base quadrada: calculamos o seu volume. Usaremos A_b para a área da base e V para o volume. Num cubo de aresta a, o volume é a³.",
            "formula": "V_{\\text{cubo}}=a^3\\qquad 6^3=216\\ \\mathrm{cm}^3"
        },
        {
            "title": "Oito segmentos, seis pirâmides",
            "text": "Liga o centro aos oito vértices. Cada face quadrada, juntamente com o centro, determina uma pirâmide. Há seis faces e, por isso, seis pirâmides. Os oito segmentos são arestas partilhadas. Para visualizar as separações, imagina também as faces triangulares que unem o centro a cada aresta do cubo: os segmentos, sozinhos, não são superfícies de corte."
        },
        {
            "title": "Por que os volumes são iguais?",
            "text": "As simetrias do cubo levam qualquer face a qualquer outra, mantendo o centro fixo. Assim, as seis pirâmides são congruentes e têm volumes iguais. Preenchem o cubo sem sobreposições interiores: partilham apenas fronteiras. Logo, o volume de uma é um sexto do volume total.",
            "formula": "6V_{\\text{pirâmide}}=a^3\\quad\\Longrightarrow\\quad V_{\\text{pirâmide}}=\\frac{a^3}{6}"
        },
        {
            "title": "Encontrar a altura certa",
            "text": "A base de cada pirâmide é uma face do cubo, com área a². A altura é a distância perpendicular do centro ao plano dessa face: a/2. Não é o segmento inclinado até a um vértice, nem a apótema de uma face lateral.",
            "formula": "A_b=a^2,\\qquad h=\\frac a2"
        },
        {
            "title": "Reorganizar e reconhecer a fórmula",
            "text": "Decompomos 6 em 2 × 3. Agrupamos a/2, que é a altura, e a², que é a área da base. O fator um terço aparece ao reescrever o volume obtido por decomposição.",
            "formula": "V=\\frac{a^3}{6}=\\frac{a^2\\left(\\frac a2\\right)}3=\\frac{A_bh}{3}"
        },
        {
            "title": "Aplicar ao cubo de 6 cm",
            "text": "A área da base é 36 cm² e a altura de cada pirâmide é 3 cm. Cada volume é 36 cm³. Multiplicar por seis devolve os 216 cm³ do cubo. As unidades são cúbicas, pois multiplicamos uma área por um comprimento.",
            "formula": "V=\\frac{216}{6}=\\frac{36\\cdot3}{3}=36\\ \\mathrm{cm}^3"
        },
        {
            "title": "O cuidado com a generalização",
            "text": "A expressão a³/6 só foi provada para as pirâmides desta divisão do cubo, em que h = a/2. A expressão ha²/3 usa uma base quadrada de lado a. Para uma base qualquer, devemos escrever A_bh/3. Observar o formato da expressão sugere a regra geral, mas não é, por si só, uma prova para todas as pirâmides."
        },
        {
            "title": "Primeira extensão: outra altura com base quadrada",
            "text": "Podemos esticar ou comprimir uma destas pirâmides na direção perpendicular à base, mantendo a base fixa. Se a altura é multiplicada por um fator t, o volume também é multiplicado por t, tal como acontece com camadas de igual área cuja espessura é multiplicada por t. Assim, V = A_bh/3 continua a valer para uma pirâmide reta de base quadrada com qualquer altura positiva."
        },
        {
            "title": "Por que também vale para outras bases?",
            "text": "Uma justificação usa o princípio de Cavalieri: sólidos com a mesma altura e a mesma área de secção a cada nível têm o mesmo volume. Numa pirâmide, uma secção paralela à base, à distância z do vértice, é semelhante à base com fator linear z/h; a sua área é A_b(z/h)². Duas pirâmides com a mesma área de base e altura têm, portanto, secções de áreas iguais em todos os níveis, mesmo que as bases tenham formas diferentes ou o vértice esteja deslocado lateralmente.",
            "formula": "A(z)=A_b\\left(\\frac zh\\right)^2,\\qquad 0\\leq z\\leq h"
        },
        {
            "title": "A fórmula geral, com a justificação completa",
            "text": "Compara a pirâmide pretendida com uma pirâmide de base quadrada de igual área de base e igual altura. A primeira extensão deu o volume da pirâmide quadrada; Cavalieri mostra que os volumes são iguais. Concluímos a fórmula para pirâmides com base poligonal plana e vértice fora do seu plano. O princípio de Cavalieri é um resultado geométrico adicional que estamos a usar, não algo demonstrado apenas pelo desenho do cubo.",
            "formula": "\\boxed{V_{\\text{pirâmide}}=\\frac{A_bh}{3}}"
        },
        {
            "title": "O fator um terço não muda quando a altura muda",
            "text": "Na ferramenta, passa de “Cubo dividido” a “Pirâmide independente”. Mantém a base e altera apenas a altura. A relação h = a/2 deixa de ser obrigatória; a³/6 deixa de calcular o volume. Continua a valer A_bh/3. Para uma base quadrada de lado 6 cm e altura 9 cm, por exemplo, o volume é 108 cm³.",
            "formula": "V=\\frac{6^2\\cdot9}{3}=108\\ \\mathrm{cm}^3"
        }
    ],
    "takeaways": [
        "Um triângulo tem área; uma pirâmide tem volume.",
        "O centro e as seis faces do cubo definem seis pirâmides congruentes.",
        "A altura é a distância perpendicular do vértice ao plano da base.",
        "a³/6 depende da divisão do cubo; a²h/3 serve para base quadrada de lado a.",
        "A fórmula geral é A_bh/3: primeiro calcula a área da base.",
        "Para estender o resultado a todas as pirâmides, usamos um argumento adicional, como secções semelhantes e Cavalieri."
    ],
    "exercises": [
        {
            "question": "Um cubo tem aresta 10 cm. Qual é o volume de cada pirâmide central?",
            "hint": "Divide o volume do cubo por seis.",
            "answer": "500/3 cm³, aproximadamente 166,67 cm³.",
            "explanation": "1000/6 = 500/3. A base tem área 100 e a altura é 5, logo 100 × 5/3."
        },
        {
            "question": "Uma pirâmide tem base quadrada de lado 10 cm e altura 9 cm. Podemos usar 10³/6?",
            "hint": "Compara 9 com metade da aresta 10.",
            "answer": "Não. O volume é 300 cm³.",
            "explanation": "A altura não é 5 cm. Usamos 10² × 9/3 = 300."
        },
        {
            "question": "A base é um retângulo de lados 4 cm e 7 cm; a altura da pirâmide é 6 cm. Qual é o volume?",
            "hint": "Calcula primeiro a área da base.",
            "answer": "56 cm³.",
            "explanation": "A_b = 4 × 7 = 28 cm². V = 28 × 6/3 = 56 cm³."
        },
        {
            "question": "Uma pirâmide tem base triangular de base 6 cm e altura 4 cm. A altura da pirâmide é 9 cm. Qual é o volume?",
            "hint": "Há duas alturas diferentes: uma do triângulo da base e outra do sólido.",
            "answer": "36 cm³.",
            "explanation": "A base tem área 6 × 4/2 = 12 cm². O volume é 12 × 9/3 = 36 cm³."
        },
        {
            "question": "Se duplicarmos só a altura de uma pirâmide, o volume duplica ou fica oito vezes maior?",
            "hint": "A área da base mantém-se.",
            "answer": "Duplica.",
            "explanation": "Só um fator foi duplicado: V = A_bh/3. O volume seria oito vezes maior se todas as dimensões lineares duplicassem."
        },
        {
            "question": "Escolher um ponto fora do centro, mas dentro do cubo, ainda dá seis volumes iguais?",
            "hint": "As distâncias do ponto aos planos das faces continuam todas iguais?",
            "answer": "Em geral, não.",
            "explanation": "As seis pirâmides continuam a preencher o cubo, mas as alturas variam. Por isso não podemos dividir o volume por seis para calcular cada uma."
        }
    ]
};
}),
];

//# sourceMappingURL=src_1tyy1fvyh6k6q._.js.map