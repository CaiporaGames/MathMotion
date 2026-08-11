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
"[project]/src/features/catalog/controllers/CatalogPageController.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogPageController",
    ()=>CatalogPageController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$catalog$2f$catalogItems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/catalog/catalogItems.ts [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../components/'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CatalogPage, {
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

//# sourceMappingURL=_0zwqz2c._.js.map