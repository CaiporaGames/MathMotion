module.exports = [
"[project]/src/content/catalog/catalogItems.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/features/catalog/components/CatalogItemCard.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrow": "CatalogItemCard-module-scss-module__5RQgXa__arrow",
  "card": "CatalogItemCard-module-scss-module__5RQgXa__card",
  "category": "CatalogItemCard-module-scss-module__5RQgXa__category",
  "content": "CatalogItemCard-module-scss-module__5RQgXa__content",
  "date": "CatalogItemCard-module-scss-module__5RQgXa__date",
  "meta": "CatalogItemCard-module-scss-module__5RQgXa__meta",
  "tags": "CatalogItemCard-module-scss-module__5RQgXa__tags",
});
}),
"[project]/src/features/catalog/components/CatalogItemCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogItemCard",
    ()=>CatalogItemCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogItemCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/catalog/components/CatalogItemCard.module.scss [app-ssr] (css module)");
;
;
;
function CatalogItemCard({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: item.href,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogItemCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogItemCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogItemCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].meta,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogItemCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].category,
                                children: item.category
                            }, void 0, false, {
                                fileName: "[project]/src/features/catalog/components/CatalogItemCard.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogItemCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].date,
                                children: item.dateLabel
                            }, void 0, false, {
                                fileName: "[project]/src/features/catalog/components/CatalogItemCard.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/catalog/components/CatalogItemCard.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/src/features/catalog/components/CatalogItemCard.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: item.description
                    }, void 0, false, {
                        fileName: "[project]/src/features/catalog/components/CatalogItemCard.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this),
                    item.tags && item.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogItemCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tags,
                        children: item.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/src/features/catalog/components/CatalogItemCard.tsx",
                                lineNumber: 90,
                                columnNumber: 41
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/catalog/components/CatalogItemCard.tsx",
                        lineNumber: 80,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/catalog/components/CatalogItemCard.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogItemCard$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].arrow,
                children: "→"
            }, void 0, false, {
                fileName: "[project]/src/features/catalog/components/CatalogItemCard.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/catalog/components/CatalogItemCard.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/features/catalog/components/CatalogPage.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "catalog": "CatalogPage-module-scss-module__l_91WW__catalog",
  "eyebrow": "CatalogPage-module-scss-module__l_91WW__eyebrow",
  "header": "CatalogPage-module-scss-module__l_91WW__header",
  "list": "CatalogPage-module-scss-module__l_91WW__list",
  "toolbar": "CatalogPage-module-scss-module__l_91WW__toolbar",
});
}),
"[project]/src/features/catalog/components/CatalogPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogPage",
    ()=>CatalogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogItemCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/components/CatalogItemCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogPagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/components/CatalogPagination.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/catalog/components/CatalogPage.module.scss [app-ssr] (css module)");
;
;
;
;
function CatalogPage({ eyebrow, title, description, items, sort, page, totalPages, totalItems, hasPreviousPage, hasNextPage, onSortChange, onPageChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].catalog,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eyebrow,
                            children: eyebrow
                        }, void 0, false, {
                            fileName: "[project]/src/features/catalog/components/CatalogPage.tsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/features/catalog/components/CatalogPage.tsx",
                            lineNumber: 100,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/src/features/catalog/components/CatalogPage.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/catalog/components/CatalogPage.tsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/catalog/components/CatalogPage.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toolbar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            totalItems,
                            " ",
                            totalItems === 1 ? "item" : "itens"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/catalog/components/CatalogPage.tsx",
                        lineNumber: 120,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Ordenar por"
                            }, void 0, false, {
                                fileName: "[project]/src/features/catalog/components/CatalogPage.tsx",
                                lineNumber: 132,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: sort,
                                onChange: (event)=>onSortChange(event.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "newest",
                                        children: "Mais recentes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/catalog/components/CatalogPage.tsx",
                                        lineNumber: 140,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "oldest",
                                        children: "Mais antigos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/catalog/components/CatalogPage.tsx",
                                        lineNumber: 146,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/catalog/components/CatalogPage.tsx",
                                lineNumber: 136,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/catalog/components/CatalogPage.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/catalog/components/CatalogPage.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogItemCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CatalogItemCard"], {
                        item: item
                    }, item.id, false, {
                        fileName: "[project]/src/features/catalog/components/CatalogPage.tsx",
                        lineNumber: 167,
                        columnNumber: 29
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/catalog/components/CatalogPage.tsx",
                lineNumber: 157,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogPagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CatalogPagination"], {
                page: page,
                totalPages: totalPages,
                hasPreviousPage: hasPreviousPage,
                hasNextPage: hasNextPage,
                onPageChange: onPageChange
            }, void 0, false, {
                fileName: "[project]/src/features/catalog/components/CatalogPage.tsx",
                lineNumber: 183,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/catalog/components/CatalogPage.tsx",
        lineNumber: 78,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/features/catalog/components/CatalogPagination.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "CatalogPagination-module-scss-module__juHXQa__active",
  "pagination": "CatalogPagination-module-scss-module__juHXQa__pagination",
});
}),
"[project]/src/features/catalog/components/CatalogPagination.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogPagination",
    ()=>CatalogPagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogPagination$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/catalog/components/CatalogPagination.module.scss [app-ssr] (css module)");
;
;
function CatalogPagination({ page, totalPages, hasPreviousPage, hasNextPage, onPageChange }) {
    if (totalPages <= 1) {
        return null;
    }
    const pages = createPages(page, totalPages);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogPagination$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pagination,
        "aria-label": "Paginação",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                disabled: !hasPreviousPage,
                onClick: ()=>onPageChange(page - 1),
                children: "←"
            }, void 0, false, {
                fileName: "[project]/src/features/catalog/components/CatalogPagination.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            pages.map((pageNumber)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: pageNumber === page ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogPagination$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : "",
                    onClick: ()=>onPageChange(pageNumber),
                    children: pageNumber
                }, pageNumber, false, {
                    fileName: "[project]/src/features/catalog/components/CatalogPagination.tsx",
                    lineNumber: 75,
                    columnNumber: 25
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                disabled: !hasNextPage,
                onClick: ()=>onPageChange(page + 1),
                children: "→"
            }, void 0, false, {
                fileName: "[project]/src/features/catalog/components/CatalogPagination.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/catalog/components/CatalogPagination.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
function createPages(current, total) {
    const maximumVisible = 5;
    if (total <= maximumVisible) {
        return Array.from({
            length: total
        }, (_, index)=>index + 1);
    }
    const start = Math.max(1, Math.min(current - 2, total - maximumVisible + 1));
    return Array.from({
        length: maximumVisible
    }, (_, index)=>start + index);
}
}),
"[project]/src/features/catalog/controllers/CatalogPageController.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogPageController",
    ()=>CatalogPageController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$catalog$2f$catalogItems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/catalog/catalogItems.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/components/CatalogPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$services$2f$catalog$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/services/catalog.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$store$2f$catalog$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/catalog/store/catalog.store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const PAGE_SIZE = 6;
function CatalogPageController({ kind }) {
    const settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$store$2f$catalog$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCatalogStore"])((state)=>state.settings[kind]);
    const setPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$store$2f$catalog$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCatalogStore"])((state)=>state.setPage);
    const setSort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$store$2f$catalog$2e$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCatalogStore"])((state)=>state.setSort);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$services$2f$catalog$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CatalogService"].getPage(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$catalog$2f$catalogItems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catalogItems"], {
        kind,
        sort: settings.sort,
        page: settings.page,
        pageSize: PAGE_SIZE
    });
    const items = result.items.map((item)=>({
            ...item,
            dateLabel: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$services$2f$catalog$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CatalogService"].formatDate(item.publishedAt)
        }));
    const pageConfig = getPageConfig(kind);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$catalog$2f$components$2f$CatalogPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CatalogPage"], {
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
}),
"[project]/src/features/catalog/services/catalog.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/features/catalog/store/catalog.store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCatalogStore",
    ()=>useCatalogStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useCatalogStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((set)=>({
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
}),
];

//# sourceMappingURL=src_1gvpk21._.js.map