(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
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
]})(),
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
]);

//# sourceMappingURL=src_1kgtzystz5_u1._.js.map