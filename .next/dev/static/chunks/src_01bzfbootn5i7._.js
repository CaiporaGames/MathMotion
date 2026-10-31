(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/src/components/decimals/DecimalExplorer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecimalExplorer",
    ()=>DecimalExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/decimals/DecimalExplorer.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
function DecimalExplorer({ examples, selected, onSelect, model, denominator, nines, onNinesChange }) {
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].explorer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "eyebrow",
                children: "LABORATÓRIO DOS DECIMAIS"
            }, void 0, false, {
                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "O segredo está no resto."
            }, void 0, false, {
                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Escolhe uma fração. Segue os restos até aparecer zero ou regressarmos a um resto anterior."
            }, void 0, false, {
                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].choices,
                "aria-label": "Fração para explorar",
                children: examples.map((example, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].result,
                "aria-live": "polite",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: [
                            model.negative ? '−' : '',
                            model.integer,
                            (model.prefix || model.period) && ',',
                            model.prefix,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].period,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].details,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        children: "Ver a divisão: onde começa o ciclo?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                        lineNumber: 24,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableWrap,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                                    children: "Divisão decimal por restos"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                    lineNumber: 26,
                                    columnNumber: 43
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Passo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 99
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Resto × 10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 113
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Algarismo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 132
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: model.rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: model.repeatAt === i ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cycle : undefined,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        i + 1,
                                                        model.repeatAt === i && ' · início do período'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        row.before,
                                                        " × 10"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 75
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: row.digit
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 101
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                    model.repeatAt !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nines,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Quantos noves cabem antes de 1?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                        lineNumber: 33,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: id,
                        children: [
                            "Número finito de noves: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 600 130",
                        role: "img",
                        "aria-label": `Em dez posições, ${nines.n} contêm noves. Cada posição acrescentada divide por dez a distância até um.`,
                        children: Array.from({
                            length: 10
                        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].values,
                        "aria-live": "polite",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Aproximação finita"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                        lineNumber: 44,
                                        columnNumber: 57
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Distância exata até 1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/decimals/DecimalExplorer.tsx",
                                        lineNumber: 44,
                                        columnNumber: 133
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Falta 10",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].note,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
_s(DecimalExplorer, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = DecimalExplorer;
var _c;
__turbopack_context__.k.register(_c, "DecimalExplorer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/explorers/Diagram.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Diagram",
    ()=>Diagram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Diagram$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/explorers/Diagram.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
function Diagram({ shapes, description }) {
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, '');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Diagram$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].diagram,
        viewBox: "0 0 600 340",
        role: "img",
        "aria-label": description,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                        id: `grid${id}`,
                        width: "22",
                        height: "22",
                        patternUnits: "userSpaceOnUse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: `plot${id}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
_s(Diagram, "xfMyHNFebGjSN1/YPqrD8z5EdLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = Diagram;
var _c;
__turbopack_context__.k.register(_c, "Diagram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/explorers/Explorer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Explorer",
    ()=>Explorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dices.js [app-client] (ecmascript) <export default as Dices>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Diagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/explorers/Diagram.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Math.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/explorers/Explorer.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function Explorer({ model: m, onChange, onReset, onSolve, onRoll, rollText, compact = false }) {
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].explorer} ${compact ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].compact : ''}`,
        "aria-label": m.title,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: m.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/explorers/Explorer.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reset,
                        onClick: onReset,
                        "aria-label": "Repor valores iniciais",
                        title: "Repor valores",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visual,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Diagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Diagram"], {
                                shapes: m.shapes,
                                description: m.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/explorers/Explorer.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metrics,
                                children: m.metrics.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: x.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/explorers/Explorer.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controls,
                        children: [
                            m.controls.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].control,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: `${id}-${c.key}`,
                                            children: [
                                                c.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("output", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].range,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            onSolve && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "button secondary small",
                                type: "button",
                                onClick: onSolve,
                                children: "Mostrar solução"
                            }, void 0, false, {
                                fileName: "[project]/src/components/explorers/Explorer.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            onRoll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "button secondary small",
                                type: "button",
                                onClick: onRoll,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__["Dices"], {
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
                            rollText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                role: "status",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roll,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formula,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathFormula"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].insight,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/explorers/Explorer.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(Explorer, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = Explorer;
var _c;
__turbopack_context__.k.register(_c, "Explorer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/forms/SubmissionForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubmissionForm",
    ()=>SubmissionForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-keyhole.js [app-client] (ecmascript) <export default as LockKeyhole>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/forms/SubmissionForm.module.scss [app-client] (css module)");
;
;
;
;
function SubmissionForm({ kind, draft: d, errors: e, busy, message, success, available, lessonTitle, step, onStepChange, onChange, onSubmit, onReset }) {
    const prefix = kind === 'question' ? 'question' : 'contact';
    const question = kind === 'question';
    const field = (key, label, type = 'text', max = 120, required = false)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                e[key] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    id: `${prefix}-${key}-error`,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "eyebrow",
                children: question ? 'UMA DÚVIDA TAMBÉM É UM COMEÇO' : 'VAMOS CONVERSAR'
            }, void 0, false, {
                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: question ? 'Onde ficaste com dúvidas?' : 'Conta-me do que precisas.'
            }, void 0, false, {
                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: question ? 'A tua pergunta é privada. Deixa o email se quiseres receber uma resposta.' : 'Este pedido não faz uma marcação nem tem pagamento. Combinamos os detalhes depois de conversar.'
            }, void 0, false, {
                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            lessonTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].context,
                children: [
                    lessonTitle,
                    step ? ` · passo ${step}` : '',
                    step && onStepChange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            !available && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "notice",
                children: "O formulário ainda não está disponível. Podes continuar a explorar todas as aulas e experiências."
            }, void 0, false, {
                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this),
            success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sent,
                role: "status",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        size: 35
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Mensagem recebida."
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: d.email ? 'O Timóteo poderá responder através do email que indicaste.' : 'A tua pergunta ficou guardada. Como não indicaste email, não será possível enviar uma resposta direta.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: onSubmit,
                noValidate: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                        disabled: busy || !available,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                className: "srOnly",
                                children: question ? 'Enviar uma dúvida' : 'Pedir uma explicação'
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                                children: [
                                    field('name', question ? 'Nome (opcional)' : 'Nome', 'text', 80, !question),
                                    field('email', question ? 'Email para resposta (opcional)' : 'Email de contacto', 'email', 160, !question),
                                    !question && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            field('phone', 'Telefone (opcional)', 'tel', 30),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "contact-year",
                                                        children: "Nível de estudo *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "contact-year",
                                                        value: d.year,
                                                        onChange: (e)=>onChange('year', e.target.value),
                                                        "aria-invalid": !!e.year,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Selecionar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 23
                                                            }, this),
                                                            Array.from({
                                                                length: 12
                                                            }, (_, i)=>i + 1).map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "adult",
                                                                children: "Adulto / preparação de acesso"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                                    e.year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "contact-mode",
                                                        children: "Modalidade"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "contact-mode",
                                                        value: d.mode,
                                                        onChange: (e)=>onChange('mode', e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "online",
                                                                children: "Online"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "coimbra",
                                                                children: "Presencial em Coimbra"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "contact-role",
                                                        children: "Estou a contactar como"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "contact-role",
                                                        value: d.contactRole,
                                                        onChange: (e)=>onChange('contactRole', e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "student",
                                                                children: "Aluno adulto"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        id: `${prefix}-message-help`,
                                        className: e.message ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].help,
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trap,
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Website",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].consent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: d.consent,
                                        onChange: (e)=>onChange('consent', e.target.checked)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Li a",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            e.consent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                children: e.consent
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                lineNumber: 224,
                                columnNumber: 27
                            }, this),
                            !question && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].help,
                                children: "Se o aluno for menor, o pedido deve ser enviado pelo responsável, com os seus próprios contactos."
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/SubmissionForm.tsx",
                                lineNumber: 226,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button",
                                        type: "submit",
                                        children: [
                                            busy ? 'A enviar…' : question ? 'Enviar pergunta' : 'Pedir uma explicação',
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"], {
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
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c = SubmissionForm;
var _c;
__turbopack_context__.k.register(_c, "SubmissionForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/lessons/LessonView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LessonView",
    ()=>LessonView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Math.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/lessons/LessonView.module.scss [app-client] (css module)");
;
;
;
;
;
function LessonView({ lesson: l, completed, onComplete, onQuestion, explorer, form }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].back,
                href: "/aulas/",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    " Todas as aulas"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/lessons/LessonView.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tags,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tag",
                                        children: l.topic
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: l.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: l.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "button",
                                href: "#problema",
                                children: [
                                    "Começar pelo problema ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 38,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: l.image,
                        alt: l.imageAlt,
                        width: "800",
                        height: "440"
                    }, void 0, false, {
                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/lessons/LessonView.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layout,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aside,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "O TEU PERCURSO"
                            }, void 0, false, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
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
                                ].map(([id, n, title])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `#${id}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: n
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this),
                                            title
                                        ]
                                    }, id, true, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onComplete,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].complete,
                                children: [
                                    completed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 61,
                                        columnNumber: 26
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 61,
                                        columnNumber: 55
                                    }, this),
                                    ' ',
                                    completed ? 'Aula concluída' : 'Marcar como concluída'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Progresso guardado só neste dispositivo."
                            }, void 0, false, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].article,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "problema",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].block,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "01 · O PROBLEMA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            "Antes da fórmula,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this),
                                            "uma pergunta."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].problem,
                                        children: l.problem
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].challenge,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: l.question
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Precisas de uma pista?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    l.hints.map((hint, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].details,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                    children: [
                                                        "Pista ",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: hint
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, hint, true, {
                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "explorar",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].block,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "02 · EXPERIMENTA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    explorer
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "resolucao",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].block,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "03 · PASSO A PASSO"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Vamos construir a resposta."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    l.steps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].step,
                                            id: `passo-${i + 1}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepNumber,
                                                    children: i + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: step.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: step.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 19
                                                        }, this),
                                                        step.formula && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formula,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathFormula"], {
                                                                value: step.formula
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].questionButton,
                                                            onClick: ()=>onQuestion(String(i + 1)),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                                    lineNumber: 106,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " Tenho uma dúvida neste passo"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, step.title, true, {
                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "guardar",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].block} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].takeaways}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "04 · IDEIAS PARA GUARDAR"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Leva estas ideias contigo."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: l.takeaways.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, t, true, {
                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "praticar",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].block,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "05 · AGORA TENTA TU"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            "Uma pequena mudança.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                lineNumber: 128,
                                                columnNumber: 15
                                            }, this),
                                            "Um novo problema."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    l.exercises.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].exercise,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "tag",
                                                    children: [
                                                        "DESAFIO ",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: e.question
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].details,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                            children: "Uma pista"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: e.hint
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].details,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                            children: "Ver resposta e explicação"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: e.answer
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: e.explanation
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, e.question, true, {
                                            fileName: "[project]/src/components/lessons/LessonView.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button",
                                        onClick: onComplete,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 17
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this),
                                            completed ? 'Concluída · marcar por fazer' : 'Concluir esta aula'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "pergunta",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].block,
                                children: form
                            }, void 0, false, {
                                fileName: "[project]/src/components/lessons/LessonView.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/lessons/LessonView.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/lessons/LessonView.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/lessons/LessonView.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = LessonView;
var _c;
__turbopack_context__.k.register(_c, "LessonView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sequences/SquareSequenceExplorer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SquareSequenceExplorer",
    ()=>SquareSequenceExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Math.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/sequences/SquareSequenceExplorer.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function SquareSequenceExplorer({ model, onOrderChange, onTargetChange, onReset }) {
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { current: c } = model;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].explorer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: "DESCOBRE A REGULARIDADE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 12,
                                columnNumber: 39
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Avança uma figura de cada vez. Compara a posição da figura com a quantidade de quadrados de cada cor."
            }, void 0, false, {
                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].figure,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 320 320",
                                role: "img",
                                "aria-label": `${c.order}.º termo: ${c.gray} quadrados cinzentos e ${c.white} brancos.`,
                                children: model.cells.map((gray, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controls,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `${id}-order`,
                                children: [
                                    "Ordem do termo ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttons,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: c.order === 1,
                                        onClick: ()=>onOrderChange(c.order - 1),
                                        children: "← Anterior"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                        lineNumber: 25,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metrics,
                                "aria-live": "polite",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                children: "Brancos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 59
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                children: "Cinzentos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 104
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                children: "Total"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 150
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sum,
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `${id}-target`,
                                children: [
                                    "Desafio: procura uma figura com ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: model.matches ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].success : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].prompt,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].details,
                open: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        children: "Os primeiros dez termos: procura o padrão"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 34,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Cada coluna é uma figura. Clica numa ordem para a observar. As reticências continuam a regra até ao limite da grelha."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 35,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableWrap,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                                    children: "Ordem e quantidades: grandezas diferentes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                    lineNumber: 36,
                                    columnNumber: 43
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                children: "Ordem"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                lineNumber: 36,
                                                columnNumber: 114
                                            }, this),
                                            model.firstTen.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    scope: "col",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    scope: "row",
                                                    children: "Brancos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 13
                                                }, this),
                                                model.firstTen.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: t.white
                                                    }, t.order, false, {
                                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 66
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    scope: "row",
                                                    children: "Cinzentos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 13
                                                }, this),
                                                model.firstTen.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: t.gray
                                                    }, t.order, false, {
                                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 68
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    scope: "row",
                                                    children: "Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 13
                                                }, this),
                                                model.firstTen.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "100"
                                                    }, t.order, false, {
                                                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                                        lineNumber: 39,
                                                        columnNumber: 64
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].details,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        children: "Quantidade, contador ou ordem?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 43,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "No termo atual, a ordem é ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: c.order
                            }, void 0, false, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 44,
                                columnNumber: 36
                            }, this),
                            " e a quantidade de cinzentos é ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: c.gray
                            }, void 0, false, {
                                fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                                lineNumber: 44,
                                columnNumber: 93
                            }, this),
                            ". A partir do primeiro termo fizemos ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                    c.counter === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "O contador k da expressão 2k + 2 começa no segundo termo, com k = 0. O primeiro termo fica fora desta contagem a partir de zero."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 45,
                        columnNumber: 29
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathFormula"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].details,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        children: "Conferir o desafio e ligar à PA"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 51,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    model.targetOrder === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Não existe esse termo: ",
                            model.targetGray,
                            " é ímpar e a sequência dos cinzentos só contém números pares. Uma ordem fracionária não identifica uma figura da sequência."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "São ",
                            model.targetGray / 2,
                            " aumentos a partir do primeiro termo. A ordem é ",
                            model.targetGray / 2,
                            " + 1 = ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathFormula"], {
                        value: "c_m=0+2(m-1)\\qquad b_m=100-2(m-1)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sequences/SquareSequenceExplorer.tsx",
                        lineNumber: 56,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(SquareSequenceExplorer, "m+8mipZO+xSN990774VBYQBjZtc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = SquareSequenceExplorer;
var _c;
__turbopack_context__.k.register(_c, "SquareSequenceExplorer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Math.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MathFormula",
    ()=>MathFormula
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$katex$2f$dist$2f$katex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/katex/dist/katex.mjs [app-client] (ecmascript)");
;
;
function MathFormula({ value, display = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        dangerouslySetInnerHTML: {
            __html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$katex$2f$dist$2f$katex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].renderToString(value, {
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
_c = MathFormula;
var _c;
__turbopack_context__.k.register(_c, "MathFormula");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/controllers/DecimalExplorerController.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecimalExplorerController",
    ()=>DecimalExplorerController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/decimals/DecimalExplorer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$decimal$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/decimal.service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Math.max(0, Math.min(3, Math.round(initialExample) || 0)));
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Math.max(1, Math.min(10, Math.round(initialNines) || 1)));
    const example = examples[selected];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$decimals$2f$DecimalExplorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecimalExplorer"], {
        examples: examples,
        selected: selected,
        onSelect: setSelected,
        model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$decimal$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["divideExactly"])(example.numerator, example.denominator),
        denominator: example.denominator,
        nines: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$decimal$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ninesModel"])(count),
        onNinesChange: setCount
    }, void 0, false, {
        fileName: "[project]/src/controllers/DecimalExplorerController.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_s(DecimalExplorerController, "NWzjA9aN4pwIP3Lndr2o+gmnj2U=");
_c = DecimalExplorerController;
var _c;
__turbopack_context__.k.register(_c, "DecimalExplorerController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/controllers/ExplorerController.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExplorerController",
    ()=>ExplorerController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$explorer$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/explorer.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/explorers/Explorer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ExplorerController({ kind, config = {}, compact = false }) {
    _s();
    const [values, setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ExplorerController.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$explorer$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialValues"])(kind, config)
    }["ExplorerController.useState"]);
    const [roll, setRoll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const model = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$explorer$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExplorerModel"])(kind, values, config);
    function change(key, value) {
        setValues((v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$explorer$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeValues"])(kind, {
                ...v,
                [key]: value
            }, config));
        if (key === 'sum') setRoll(null);
    }
    function reset() {
        setValues((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$explorer$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialValues"])(kind, config));
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$explorers$2f$Explorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Explorer"], {
        compact: compact,
        model: model,
        onChange: change,
        onReset: reset,
        onSolve: kind === 'equation' ? ()=>setValues((v)=>({
                    ...v,
                    x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$explorer$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equationSolution"])(model.values.a, model.values.b, model.values.c)
                })) : undefined,
        onRoll: kind === 'probability' ? rollDice : undefined,
        rollText: roll ? `${roll.a} + ${roll.b} = ${roll.a + roll.b}. ${roll.hits} acertos em ${roll.total} lançamentos. Uma experiência curta pode diferir da probabilidade teórica.` : undefined
    }, void 0, false, {
        fileName: "[project]/src/controllers/ExplorerController.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(ExplorerController, "Zi5G9tTNrgMWWow7WapA+k8pVc4=");
_c = ExplorerController;
var _c;
__turbopack_context__.k.register(_c, "ExplorerController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/controllers/LessonController.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LessonController",
    ()=>LessonController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$learning$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/learning.store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lessons/LessonView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$ExplorerController$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/controllers/ExplorerController.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$SubmissionController$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/controllers/SubmissionController.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$DecimalExplorerController$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/controllers/DecimalExplorerController.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$SquareSequenceController$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/controllers/SquareSequenceController.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function LessonController({ lesson }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const completed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$learning$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLearningStore"])({
        "LessonController.useLearningStore[completed]": (s)=>s.completed.includes(lesson.slug)
    }["LessonController.useLearningStore[completed]"]), toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$learning$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLearningStore"])({
        "LessonController.useLearningStore[toggle]": (s)=>s.toggle
    }["LessonController.useLearningStore[toggle]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LessonController.useEffect": ()=>{
            void __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$learning$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLearningStore"].persist.rehydrate();
        }
    }["LessonController.useEffect"], []);
    function ask(value) {
        setStep(value);
        document.getElementById('pergunta')?.scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(()=>document.getElementById('question-message')?.focus({
                preventScroll: true
            }), 250);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lessons$2f$LessonView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LessonView"], {
        lesson: lesson,
        completed: completed,
        onComplete: ()=>toggle(lesson.slug),
        onQuestion: ask,
        explorer: lesson.sequenceExplorer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$SquareSequenceController$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SquareSequenceController"], {}, void 0, false, {
            fileName: "[project]/src/controllers/LessonController.tsx",
            lineNumber: 32,
            columnNumber: 11
        }, this) : lesson.decimalExplorer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$DecimalExplorerController$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecimalExplorerController"], {}, void 0, false, {
            fileName: "[project]/src/controllers/LessonController.tsx",
            lineNumber: 34,
            columnNumber: 11
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$ExplorerController$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExplorerController"], {
            kind: lesson.tool,
            config: lesson.toolConfig
        }, void 0, false, {
            fileName: "[project]/src/controllers/LessonController.tsx",
            lineNumber: 35,
            columnNumber: 11
        }, this),
        form: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$SubmissionController$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmissionController"], {
            kind: "question",
            lessonSlug: lesson.slug,
            lessonTitle: lesson.title,
            step: step,
            onStepChange: setStep
        }, void 0, false, {
            fileName: "[project]/src/controllers/LessonController.tsx",
            lineNumber: 37,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/controllers/LessonController.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(LessonController, "eYdB+LoGVx2rJ9tT1uzMumhvhdw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$learning$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLearningStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$learning$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLearningStore"]
    ];
});
_c = LessonController;
var _c;
__turbopack_context__.k.register(_c, "LessonController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/controllers/SquareSequenceController.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SquareSequenceController",
    ()=>SquareSequenceController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sequences/SquareSequenceExplorer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$square$2d$sequence$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/square-sequence.service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SquareSequenceController({ initialOrder = 1, initialTargetWhite = 26 }) {
    _s();
    const [order, setOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SquareSequenceController.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$square$2d$sequence$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squareTerm"])(initialOrder).order
    }["SquareSequenceController.useState"]);
    const [targetWhite, setTargetWhite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SquareSequenceController.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$square$2d$sequence$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squareSequenceModel"])(1, initialTargetWhite).targetWhite
    }["SquareSequenceController.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sequences$2f$SquareSequenceExplorer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SquareSequenceExplorer"], {
        model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$square$2d$sequence$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squareSequenceModel"])(order, targetWhite),
        onOrderChange: (value)=>setOrder((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$square$2d$sequence$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squareTerm"])(value).order),
        onTargetChange: setTargetWhite,
        onReset: ()=>{
            setOrder((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$square$2d$sequence$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squareTerm"])(initialOrder).order);
            setTargetWhite((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$square$2d$sequence$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squareSequenceModel"])(1, initialTargetWhite).targetWhite);
        }
    }, void 0, false, {
        fileName: "[project]/src/controllers/SquareSequenceController.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_s(SquareSequenceController, "sB2f437SwyTVkKc69SHgQXrJII0=");
_c = SquareSequenceController;
var _c;
__turbopack_context__.k.register(_c, "SquareSequenceController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/controllers/SubmissionController.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubmissionController",
    ()=>SubmissionController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/forms/SubmissionForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$submission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/submission.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$validation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/validation.service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function SubmissionController({ kind, lessonSlug = '', lessonTitle = '', step = '', onStepChange }) {
    _s();
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$submission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyDraft"]
    }), [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}), [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
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
        if (lock.current || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firebaseConfigured"]) return;
        setMessage('');
        const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$validation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSubmission"])(draft, kind);
        setErrors(errors);
        if (Object.keys(errors).length) {
            const first = Object.keys(errors)[0];
            document.getElementById(`${kind === 'question' ? 'question' : 'contact'}-${first}`)?.focus();
            return;
        }
        lock.current = true;
        setBusy(true);
        try {
            const { submitMessage } = await __turbopack_context__.A("[project]/src/services/submission.service.ts [app-client] (ecmascript, async loader)");
            await submitMessage(draft, {
                kind,
                lessonSlug,
                lessonTitle,
                step
            });
            setSuccess(true);
        } catch (error) {
            setMessage((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$validation$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeError"])(error));
        } finally{
            lock.current = false;
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$SubmissionForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmissionForm"], {
        kind: kind,
        draft: draft,
        errors: errors,
        busy: busy,
        message: message,
        success: success,
        available: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firebaseConfigured"],
        lessonTitle: lessonTitle,
        step: step,
        onStepChange: onStepChange,
        onChange: change,
        onSubmit: submit,
        onReset: ()=>{
            setDraft({
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$submission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyDraft"]
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
_s(SubmissionController, "4cPO+zopfJuMIAVRodz9uQJhNfA=");
_c = SubmissionController;
var _c;
__turbopack_context__.k.register(_c, "SubmissionController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/firebase-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "firebaseConfig",
    ()=>firebaseConfig,
    "firebaseConfigured",
    ()=>firebaseConfigured
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyDgwjcpdXM_rPxfw2Ef06Bq6vW8_cpUdQI"),
    authDomain: ("TURBOPACK compile-time value", "mathmotion-860ce.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "mathmotion-860ce"),
    appId: ("TURBOPACK compile-time value", "1:259144667451:web:2db8e6a236b9fd056de71e")
};
const firebaseConfigured = Object.values(firebaseConfig).every(Boolean);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/decimal.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/explorer.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/square-sequence.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/validation.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/stores/learning.store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLearningStore",
    ()=>useLearningStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useLearningStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        completed: [],
        toggle: (slug)=>set((s)=>({
                    completed: s.completed.includes(slug) ? s.completed.filter((x)=>x !== slug) : [
                        ...s.completed,
                        slug
                    ]
                }))
    }), {
    name: 'mathmotion-progress-v1',
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage),
    skipHydration: true
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/types/submission.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/src/components/decimals/DecimalExplorer.module.scss [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/explorers/Diagram.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "diagram": "Diagram-module-scss-module__RHlT3a__diagram",
});
}),
"[project]/src/components/explorers/Explorer.module.scss [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/forms/SubmissionForm.module.scss [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/lessons/LessonView.module.scss [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/sequences/SquareSequenceExplorer.module.scss [app-client] (css module)", ((__turbopack_context__) => {

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
]);

//# sourceMappingURL=src_01bzfbootn5i7._.js.map