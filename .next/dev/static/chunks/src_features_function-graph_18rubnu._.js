(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/function-graph/components/FunctionControls.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "drawButton": "FunctionControls-module-scss-module__qMqk6G__drawButton",
  "error": "FunctionControls-module-scss-module__qMqk6G__error",
  "inputGroup": "FunctionControls-module-scss-module__qMqk6G__inputGroup",
  "label": "FunctionControls-module-scss-module__qMqk6G__label",
  "panel": "FunctionControls-module-scss-module__qMqk6G__panel",
  "prefix": "FunctionControls-module-scss-module__qMqk6G__prefix",
  "title": "FunctionControls-module-scss-module__qMqk6G__title",
});
}),
"[project]/src/features/function-graph/components/FunctionControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionControls",
    ()=>FunctionControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionControls$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/function-graph/components/FunctionControls.module.scss [app-client] (css module)");
;
;
function FunctionControls({ expression, error, onExpressionChange, onDraw }) {
    function handleSubmit(event) {
        event.preventDefault();
        onDraw();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionControls$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionControls$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Função"
                    }, void 0, false, {
                        fileName: "[project]/src/features/function-graph/components/FunctionControls.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "O que quer desenhar?"
                    }, void 0, false, {
                        fileName: "[project]/src/features/function-graph/components/FunctionControls.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/function-graph/components/FunctionControls.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionControls$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                htmlFor: "function-expression",
                children: "Expressão"
            }, void 0, false, {
                fileName: "[project]/src/features/function-graph/components/FunctionControls.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionControls$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionControls$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].prefix,
                        children: "f(x) ="
                    }, void 0, false, {
                        fileName: "[project]/src/features/function-graph/components/FunctionControls.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "function-expression",
                        type: "text",
                        value: expression,
                        placeholder: "x^2",
                        autoComplete: "off",
                        spellCheck: false,
                        onChange: (event)=>onExpressionChange(event.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/features/function-graph/components/FunctionControls.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/function-graph/components/FunctionControls.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionControls$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/features/function-graph/components/FunctionControls.tsx",
                lineNumber: 82,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionControls$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].drawButton,
                type: "submit",
                children: "Desenhar função"
            }, void 0, false, {
                fileName: "[project]/src/features/function-graph/components/FunctionControls.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/function-graph/components/FunctionControls.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
_c = FunctionControls;
var _c;
__turbopack_context__.k.register(_c, "FunctionControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/function-graph/components/FunctionGraphPage.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "canvasContainer": "FunctionGraphPage-module-scss-module__7ElEwW__canvasContainer",
  "container": "FunctionGraphPage-module-scss-module__7ElEwW__container",
  "eyebrow": "FunctionGraphPage-module-scss-module__7ElEwW__eyebrow",
  "graphArea": "FunctionGraphPage-module-scss-module__7ElEwW__graphArea",
  "graphHeader": "FunctionGraphPage-module-scss-module__7ElEwW__graphHeader",
  "header": "FunctionGraphPage-module-scss-module__7ElEwW__header",
  "helpCard": "FunctionGraphPage-module-scss-module__7ElEwW__helpCard",
  "sidebar": "FunctionGraphPage-module-scss-module__7ElEwW__sidebar",
  "status": "FunctionGraphPage-module-scss-module__7ElEwW__status",
  "viewportInfo": "FunctionGraphPage-module-scss-module__7ElEwW__viewportInfo",
  "workspace": "FunctionGraphPage-module-scss-module__7ElEwW__workspace",
});
}),
"[project]/src/features/function-graph/components/FunctionGraphPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionGraphPage",
    ()=>FunctionGraphPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/function-graph/components/FunctionControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$GraphCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/function-graph/components/GraphCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionGraphPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/function-graph/components/FunctionGraphPage.module.scss [app-client] (css module)");
;
;
;
;
function FunctionGraphPage({ expression, points, viewport, error, onExpressionChange, onDraw }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionGraphPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionGraphPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionGraphPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                children: "Laboratório"
                            }, void 0, false, {
                                fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Funções"
                            }, void 0, false, {
                                fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Escreva uma função, visualize o seu comportamento e explore como os seus valores se relacionam."
                            }, void 0, false, {
                                fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionGraphPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Plano cartesiano"
                            }, void 0, false, {
                                fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: points.length > 0 ? `${points.length} pontos` : "Aguardando função"
                            }, void 0, false, {
                                fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionGraphPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].workspace,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionGraphPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionControls"], {
                                expression: expression,
                                error: error,
                                onExpressionChange: onExpressionChange,
                                onDraw: onDraw
                            }, void 0, false, {
                                fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                lineNumber: 76,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionGraphPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].helpCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Experimente"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                        lineNumber: 86,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: "x^2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                        lineNumber: 90,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: "sin(x)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                        lineNumber: 91,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: "2*x + 1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                        lineNumber: 92,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: "sqrt(x)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                        lineNumber: 93,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: "1/x"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                        lineNumber: 94,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                lineNumber: 85,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionGraphPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].graphArea,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionGraphPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].graphHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Gráfico"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                                lineNumber: 103,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    "f(x) = ",
                                                    expression
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                                lineNumber: 107,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                        lineNumber: 102,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionGraphPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewportInfo,
                                        children: [
                                            "x: ",
                                            viewport.minX,
                                            " até",
                                            " ",
                                            viewport.maxX
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                        lineNumber: 112,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionGraphPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].canvasContainer,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$GraphCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GraphCanvas"], {
                                    points: points,
                                    viewport: viewport
                                }, void 0, false, {
                                    fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                    lineNumber: 124,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                                lineNumber: 122,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/function-graph/components/FunctionGraphPage.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_c = FunctionGraphPage;
var _c;
__turbopack_context__.k.register(_c, "FunctionGraphPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/function-graph/components/GraphCanvas.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "canvas": "GraphCanvas-module-scss-module__9Z1b3W__canvas",
  "empty": "GraphCanvas-module-scss-module__9Z1b3W__empty",
  "wrapper": "GraphCanvas-module-scss-module__9Z1b3W__wrapper",
});
}),
"[project]/src/features/function-graph/components/GraphCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraphCanvas",
    ()=>GraphCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$GraphCanvas$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/function-graph/components/GraphCanvas.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function GraphCanvas({ points, viewport }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GraphCanvas.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) {
                return;
            }
            const container = canvas.parentElement;
            if (!container) {
                return;
            }
            function render() {
                if (!canvas) {
                    return;
                }
                const width = container?.clientWidth;
                const height = container?.clientHeight;
                const dpr = window.devicePixelRatio || 1;
                canvas.width = Math.floor(width * dpr);
                canvas.height = Math.floor(height * dpr);
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;
                const context = canvas.getContext("2d");
                if (!context) {
                    return;
                }
                /*
             * Trabalhamos em pixels CSS,
             * independentemente da densidade
             * física da tela.
             */ context.setTransform(dpr, 0, 0, dpr, 0, 0);
                context.clearRect(0, 0, width, height);
                drawBackground(context, width, height);
                drawGrid(context, width, height, viewport);
                drawAxes(context, width, height, viewport);
                drawFunction(context, width, height, viewport, points);
            }
            render();
            /*
         * Se o utilizador alterar o tamanho
         * da janela, redesenhamos o gráfico.
         */ const resizeObserver = new ResizeObserver(render);
            resizeObserver.observe(container);
            return ({
                "GraphCanvas.useEffect": ()=>{
                    resizeObserver.disconnect();
                }
            })["GraphCanvas.useEffect"];
        }
    }["GraphCanvas.useEffect"], [
        points,
        viewport
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$GraphCanvas$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$GraphCanvas$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].canvas,
                role: "img",
                "aria-label": "Gráfico da função"
            }, void 0, false, {
                fileName: "[project]/src/features/function-graph/components/GraphCanvas.tsx",
                lineNumber: 157,
                columnNumber: 13
            }, this),
            points.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$GraphCanvas$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Escreva uma função"
                    }, void 0, false, {
                        fileName: "[project]/src/features/function-graph/components/GraphCanvas.tsx",
                        lineNumber: 168,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "e clique em Desenhar função"
                    }, void 0, false, {
                        fileName: "[project]/src/features/function-graph/components/GraphCanvas.tsx",
                        lineNumber: 172,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/function-graph/components/GraphCanvas.tsx",
                lineNumber: 165,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/function-graph/components/GraphCanvas.tsx",
        lineNumber: 155,
        columnNumber: 9
    }, this);
}
_s(GraphCanvas, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = GraphCanvas;
function drawBackground(context, width, height) {
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);
}
function drawGrid(context, width, height, viewport) {
    context.save();
    context.strokeStyle = "#e2e8f0";
    context.lineWidth = 1;
    /*
     * Neste MVP:
     * uma linha a cada unidade matemática.
     */ const firstX = Math.ceil(viewport.minX);
    const lastX = Math.floor(viewport.maxX);
    for(let x = firstX; x <= lastX; x++){
        const screenX = toScreenX(x, width, viewport);
        context.beginPath();
        context.moveTo(screenX, 0);
        context.lineTo(screenX, height);
        context.stroke();
    }
    const firstY = Math.ceil(viewport.minY);
    const lastY = Math.floor(viewport.maxY);
    for(let y = firstY; y <= lastY; y++){
        const screenY = toScreenY(y, height, viewport);
        context.beginPath();
        context.moveTo(0, screenY);
        context.lineTo(width, screenY);
        context.stroke();
    }
    context.restore();
}
function drawAxes(context, width, height, viewport) {
    context.save();
    context.strokeStyle = "#64748b";
    context.lineWidth = 1.5;
    /*
     * Eixo Y, onde x = 0.
     */ if (viewport.minX <= 0 && viewport.maxX >= 0) {
        const axisX = toScreenX(0, width, viewport);
        context.beginPath();
        context.moveTo(axisX, 0);
        context.lineTo(axisX, height);
        context.stroke();
    }
    /*
     * Eixo X, onde y = 0.
     */ if (viewport.minY <= 0 && viewport.maxY >= 0) {
        const axisY = toScreenY(0, height, viewport);
        context.beginPath();
        context.moveTo(0, axisY);
        context.lineTo(width, axisY);
        context.stroke();
    }
    drawAxisNumbers(context, width, height, viewport);
    context.restore();
}
function drawAxisNumbers(context, width, height, viewport) {
    context.fillStyle = "#94a3b8";
    context.font = "11px sans-serif";
    const zeroY = toScreenY(0, height, viewport);
    const zeroX = toScreenX(0, width, viewport);
    /*
     * Para não poluir demais,
     * mostramos números de 2 em 2.
     */ for(let x = Math.ceil(viewport.minX); x <= viewport.maxX; x++){
        if (x === 0 || x % 2 !== 0) {
            continue;
        }
        const screenX = toScreenX(x, width, viewport);
        context.fillText(x.toString(), screenX + 4, Math.min(Math.max(zeroY + 15, 15), height - 5));
    }
    for(let y = Math.ceil(viewport.minY); y <= viewport.maxY; y++){
        if (y === 0 || y % 2 !== 0) {
            continue;
        }
        const screenY = toScreenY(y, height, viewport);
        context.fillText(y.toString(), Math.min(Math.max(zeroX + 6, 5), width - 25), screenY - 5);
    }
}
function drawFunction(context, width, height, viewport, points) {
    if (points.length < 2) {
        return;
    }
    context.save();
    context.strokeStyle = "#4f46e5";
    context.lineWidth = 2.5;
    context.lineJoin = "round";
    context.lineCap = "round";
    context.beginPath();
    let hasPreviousPoint = false;
    let previousY = 0;
    const visibleHeight = viewport.maxY - viewport.minY;
    for (const point of points){
        if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) {
            hasPreviousPoint = false;
            continue;
        }
        /*
         * Evita ligar visualmente duas regiões
         * separadas por uma assíntota,
         * como acontece em 1/x.
         */ if (hasPreviousPoint && Math.abs(point.y - previousY) > visibleHeight) {
            hasPreviousPoint = false;
        }
        const screenX = toScreenX(point.x, width, viewport);
        const screenY = toScreenY(point.y, height, viewport);
        if (!hasPreviousPoint) {
            context.moveTo(screenX, screenY);
            hasPreviousPoint = true;
        } else {
            context.lineTo(screenX, screenY);
        }
        previousY = point.y;
    }
    context.stroke();
    context.restore();
}
function toScreenX(x, width, viewport) {
    const mathematicalWidth = viewport.maxX - viewport.minX;
    return (x - viewport.minX) / mathematicalWidth * width;
}
function toScreenY(y, height, viewport) {
    const mathematicalHeight = viewport.maxY - viewport.minY;
    /*
     * Canvas cresce para baixo.
     *
     * Por isso invertemos Y.
     */ return height - (y - viewport.minY) / mathematicalHeight * height;
}
var _c;
__turbopack_context__.k.register(_c, "GraphCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/function-graph/controllers/FunctionGraphPageController.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionGraphPageController",
    ()=>FunctionGraphPageController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionGraphPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/function-graph/components/FunctionGraphPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$controllers$2f$useFunctionGraphController$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/function-graph/controllers/useFunctionGraphController.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FunctionGraphPageController() {
    _s();
    const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$controllers$2f$useFunctionGraphController$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionGraphController"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$components$2f$FunctionGraphPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionGraphPage"], {
        expression: controller.expression,
        points: controller.points,
        viewport: controller.viewport,
        error: controller.error,
        onExpressionChange: controller.onExpressionChange,
        onDraw: controller.onDraw
    }, void 0, false, {
        fileName: "[project]/src/features/function-graph/controllers/FunctionGraphPageController.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_s(FunctionGraphPageController, "bUi3xWN9YlfDS5qyT8PauRINOjk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$controllers$2f$useFunctionGraphController$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionGraphController"]
    ];
});
_c = FunctionGraphPageController;
var _c;
__turbopack_context__.k.register(_c, "FunctionGraphPageController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/function-graph/controllers/useFunctionGraphController.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFunctionGraphController",
    ()=>useFunctionGraphController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$store$2f$functionGraph$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/function-graph/store/functionGraph.store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$services$2f$functionGraph$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/function-graph/services/functionGraph.service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useFunctionGraphController() {
    _s();
    const expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$store$2f$functionGraph$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionGraphStore"])({
        "useFunctionGraphController.useFunctionGraphStore[expression]": (state)=>state.expression
    }["useFunctionGraphController.useFunctionGraphStore[expression]"]);
    const points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$store$2f$functionGraph$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionGraphStore"])({
        "useFunctionGraphController.useFunctionGraphStore[points]": (state)=>state.points
    }["useFunctionGraphController.useFunctionGraphStore[points]"]);
    const viewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$store$2f$functionGraph$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionGraphStore"])({
        "useFunctionGraphController.useFunctionGraphStore[viewport]": (state)=>state.viewport
    }["useFunctionGraphController.useFunctionGraphStore[viewport]"]);
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$store$2f$functionGraph$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionGraphStore"])({
        "useFunctionGraphController.useFunctionGraphStore[error]": (state)=>state.error
    }["useFunctionGraphController.useFunctionGraphStore[error]"]);
    const setExpression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$store$2f$functionGraph$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionGraphStore"])({
        "useFunctionGraphController.useFunctionGraphStore[setExpression]": (state)=>state.setExpression
    }["useFunctionGraphController.useFunctionGraphStore[setExpression]"]);
    const setPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$store$2f$functionGraph$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionGraphStore"])({
        "useFunctionGraphController.useFunctionGraphStore[setPoints]": (state)=>state.setPoints
    }["useFunctionGraphController.useFunctionGraphStore[setPoints]"]);
    const setError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$store$2f$functionGraph$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionGraphStore"])({
        "useFunctionGraphController.useFunctionGraphStore[setError]": (state)=>state.setError
    }["useFunctionGraphController.useFunctionGraphStore[setError]"]);
    function draw() {
        try {
            const newPoints = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$services$2f$functionGraph$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionGraphService"].sample(expression, viewport);
            setPoints(newPoints);
            setError(null);
        } catch (error) {
            console.error("Function graph error:", error);
            setPoints([]);
            setError("Não conseguimos interpretar essa expressão.");
        }
    }
    return {
        expression,
        points,
        viewport,
        error,
        onExpressionChange: setExpression,
        onDraw: draw
    };
}
_s(useFunctionGraphController, "4WVfi5+FfrmzBcpeSoFmFr/94wc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$store$2f$functionGraph$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionGraphStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$store$2f$functionGraph$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionGraphStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$store$2f$functionGraph$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionGraphStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$store$2f$functionGraph$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionGraphStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$store$2f$functionGraph$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionGraphStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$store$2f$functionGraph$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionGraphStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$function$2d$graph$2f$store$2f$functionGraph$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFunctionGraphStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/function-graph/services/functionGraph.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionGraphService",
    ()=>FunctionGraphService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mathjs$2f$lib$2f$esm$2f$entry$2f$impureFunctionsAny$2e$generated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/mathjs/lib/esm/entry/impureFunctionsAny.generated.js [app-client] (ecmascript) <locals>");
;
class FunctionGraphService {
    static sample(expression, viewport, samples = 1000) {
        const compiledExpression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mathjs$2f$lib$2f$esm$2f$entry$2f$impureFunctionsAny$2e$generated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["compile"])(expression);
        const points = [];
        const width = viewport.maxX - viewport.minX;
        const step = width / samples;
        for(let x = viewport.minX; x <= viewport.maxX; x += step){
            try {
                const result = compiledExpression.evaluate({
                    x
                });
                if (typeof result !== "number" || !Number.isFinite(result)) {
                    points.push({
                        x,
                        y: Number.NaN
                    });
                    continue;
                }
                points.push({
                    x,
                    y: result
                });
            } catch  {
                points.push({
                    x,
                    y: Number.NaN
                });
            }
        }
        return points;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/function-graph/store/functionGraph.store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFunctionGraphStore",
    ()=>useFunctionGraphStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useFunctionGraphStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((set)=>({
        expression: "x^2",
        points: [],
        viewport: {
            minX: -10,
            maxX: 10,
            minY: -10,
            maxY: 10
        },
        error: null,
        setExpression: (expression)=>set({
                expression
            }),
        setPoints: (points)=>set({
                points
            }),
        setError: (error)=>set({
                error
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_features_function-graph_18rubnu._.js.map