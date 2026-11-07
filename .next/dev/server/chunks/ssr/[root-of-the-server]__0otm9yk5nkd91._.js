module.exports = [
(()=>{"use strict";return[
"[project]/src/app/descobertas/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$discovery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/discovery.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/discoveries/DiscoveryArticle.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$descobertas$2f5b$slug$5d2f$page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/descobertas/[slug]/page.module.scss [app-rsc] (css module)");
;
;
;
;
;
function generateStaticParams() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$discovery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDiscoveries"])().map((article)=>({
            slug: article.slug
        }));
}
async function generateMetadata({ params }) {
    const article = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$discovery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDiscovery"])((await params).slug);
    return {
        title: article ? `${article.title}: ${article.subtitle}` : 'Descoberta',
        description: article?.description
    };
}
async function Page({ params }) {
    const article = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$discovery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDiscovery"])((await params).slug);
    if (!article) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$descobertas$2f5b$slug$5d2f$page$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].page}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DiscoveryArticle"], {
            article: article
        }, void 0, false, {
            fileName: "[project]/src/app/descobertas/[slug]/page.tsx",
            lineNumber: 13,
            columnNumber: 49
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/descobertas/[slug]/page.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/discoveries/ArticleText.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleText",
    ()=>ArticleText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Math.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$ArticleText$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/discoveries/ArticleText.module.scss [app-rsc] (css module)");
;
;
;
;
// Deliberately small editorial dialect, with no raw HTML or executable Markdown.
function inline(text) {
    const parts = text.split(/(\\\([\s\S]*?\\\)|\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return parts.map((part, i)=>{
        if (part.startsWith('\\(') && part.endsWith('\\)')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MathFormula"], {
            value: part.slice(2, -2),
            display: false
        }, i, false, {
            fileName: "[project]/src/components/discoveries/ArticleText.tsx",
            lineNumber: 8,
            columnNumber: 64
        }, this);
        if (part.startsWith('**') && part.endsWith('**')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: inline(part.slice(2, -2))
        }, i, false, {
            fileName: "[project]/src/components/discoveries/ArticleText.tsx",
            lineNumber: 9,
            columnNumber: 62
        }, this);
        if (part.startsWith('*') && part.endsWith('*')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
            children: inline(part.slice(1, -1))
        }, i, false, {
            fileName: "[project]/src/components/discoveries/ArticleText.tsx",
            lineNumber: 10,
            columnNumber: 60
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: part
        }, i, false, {
            fileName: "[project]/src/components/discoveries/ArticleText.tsx",
            lineNumber: 11,
            columnNumber: 12
        }, this);
    });
}
function prose(text) {
    return text.trim().split(/\n\s*\n/).filter(Boolean).map((block, i)=>{
        const lines = block.trim().split('\n');
        if (lines.every((line)=>line.startsWith('>'))) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
            children: prose(lines.map((line)=>line.replace(/^>\s?/, '')).join('\n'))
        }, i, false, {
            fileName: "[project]/src/components/discoveries/ArticleText.tsx",
            lineNumber: 17,
            columnNumber: 59
        }, this);
        if (lines.every((line)=>/^- /.test(line))) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            children: lines.map((line, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: inline(line.slice(2))
                }, j, false, {
                    fileName: "[project]/src/components/discoveries/ArticleText.tsx",
                    lineNumber: 18,
                    columnNumber: 91
                }, this))
        }, i, false, {
            fileName: "[project]/src/components/discoveries/ArticleText.tsx",
            lineNumber: 18,
            columnNumber: 55
        }, this);
        if (lines.every((line)=>/^\d+\. /.test(line))) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            children: lines.map((line, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: inline(line.replace(/^\d+\. /, ''))
                }, j, false, {
                    fileName: "[project]/src/components/discoveries/ArticleText.tsx",
                    lineNumber: 19,
                    columnNumber: 95
                }, this))
        }, i, false, {
            fileName: "[project]/src/components/discoveries/ArticleText.tsx",
            lineNumber: 19,
            columnNumber: 59
        }, this);
        if (/^###? /.test(block)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            children: inline(block.replace(/^###? /, ''))
        }, i, false, {
            fileName: "[project]/src/components/discoveries/ArticleText.tsx",
            lineNumber: 20,
            columnNumber: 38
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: lines.map((line, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        j > 0 && (lines[j - 1].endsWith('  ') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/discoveries/ArticleText.tsx",
                            lineNumber: 21,
                            columnNumber: 106
                        }, this) : ' '),
                        inline(line.trim())
                    ]
                }, j, true, {
                    fileName: "[project]/src/components/discoveries/ArticleText.tsx",
                    lineNumber: 21,
                    columnNumber: 47
                }, this))
        }, i, false, {
            fileName: "[project]/src/components/discoveries/ArticleText.tsx",
            lineNumber: 21,
            columnNumber: 12
        }, this);
    });
}
function ArticleText({ text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$ArticleText$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].text,
        children: text.split(/(\\\[[\s\S]*?\\\])/g).map((part, i)=>part.startsWith('\\[') && part.endsWith('\\]') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$ArticleText$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].formula,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Math$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MathFormula"], {
                    value: part.slice(2, -2).trim()
                }, void 0, false, {
                    fileName: "[project]/src/components/discoveries/ArticleText.tsx",
                    lineNumber: 26,
                    columnNumber: 42
                }, this)
            }, i, false, {
                fileName: "[project]/src/components/discoveries/ArticleText.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: prose(part)
            }, i, false, {
                fileName: "[project]/src/components/discoveries/ArticleText.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/discoveries/ArticleText.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/discoveries/DiscoveryArticle.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiscoveryArticle",
    ()=>DiscoveryArticle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$ArticleText$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/discoveries/ArticleText.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$DiscoverySectionController$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/controllers/DiscoverySectionController.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/discoveries/DiscoveryArticle.module.scss [app-rsc] (css module)");
;
;
;
;
;
function DiscoveryArticle({ article }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].article,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].hero,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/descobertas/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].back,
                        children: "← Todas as descobertas"
                    }, void 0, false, {
                        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                        lineNumber: 9,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "CADERNO DE INVESTIGAÇÃO · COMBINATÓRIA"
                    }, void 0, false, {
                        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                        lineNumber: 10,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: [
                            article.title,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: article.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                lineNumber: 11,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                        lineNumber: 11,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].opening,
                        children: article.opening
                    }, void 0, false, {
                        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                        lineNumber: 12,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].byline,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Por ",
                                    article.author
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                lineNumber: 13,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "9 experiências · ao teu ritmo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                lineNumber: 13,
                                columnNumber: 66
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                        lineNumber: 13,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].heroGrid,
                        "aria-hidden": "true",
                        children: Array.from({
                            length: 12
                        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "(",
                                    [
                                        'a',
                                        'b',
                                        'c'
                                    ][Math.floor(i / 4)],
                                    ", ",
                                    i % 4 + 1,
                                    ")"
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                lineNumber: 14,
                                columnNumber: 92
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                        lineNumber: 14,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                lineNumber: 8,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].layout,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].contents,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "Percurso da investigação",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "O PERCURSO"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                    lineNumber: 17,
                                    columnNumber: 80
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    children: article.sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `#${section.id}`,
                                                children: section.nav
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                                lineNumber: 17,
                                                columnNumber: 161
                                            }, this)
                                        }, section.id, false, {
                                            fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                            lineNumber: 17,
                                            columnNumber: 140
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                    lineNumber: 17,
                                    columnNumber: 103
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#proximas-investigacoes",
                                    children: "Para onde continuaremos? ↗"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                    lineNumber: 17,
                                    columnNumber: 217
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                            lineNumber: 17,
                            columnNumber: 37
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                        lineNumber: 17,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].body,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].intro,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "A pergunta que iniciou tudo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                        lineNumber: 19,
                                        columnNumber: 38
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$ArticleText$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleText"], {
                                        text: article.intro
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                        lineNumber: 19,
                                        columnNumber: 74
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].instruction,
                                        children: "Lê a situação, mexe na experiência e arrisca uma explicação. Só depois abre a descoberta. Podes voltar às tabelas sempre que quiseres; não há cronómetro nem pontuação."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                        lineNumber: 19,
                                        columnNumber: 110
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                                        children: "Ativa o JavaScript para usar as experiências e abrir as conclusões."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                        lineNumber: 19,
                                        columnNumber: 310
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                lineNumber: 19,
                                columnNumber: 9
                            }, this),
                            article.sections.map((section, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: section.id,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].section,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].chapter,
                                            children: [
                                                String(i + 1).padStart(2, '0'),
                                                " / INVESTIGAÇÃO"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                            lineNumber: 21,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: section.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                            lineNumber: 22,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$ArticleText$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleText"], {
                                            text: section.before
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                            lineNumber: 23,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].question,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "ANTES DE CONCLUIR"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                                    lineNumber: 24,
                                                    columnNumber: 39
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: section.question
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                                    lineNumber: 24,
                                                    columnNumber: 69
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                            lineNumber: 24,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$DiscoverySectionController$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DiscoverySectionController"], {
                                            lab: section.lab,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$ArticleText$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleText"], {
                                                text: section.conclusion
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                                lineNumber: 25,
                                                columnNumber: 57
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                            lineNumber: 25,
                                            columnNumber: 11
                                        }, this),
                                        i < article.sections.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].next,
                                            href: `#${article.sections[i + 1].id}`,
                                            children: [
                                                "A próxima pergunta: ",
                                                article.sections[i + 1].nav,
                                                " →"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                            lineNumber: 26,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, section.id, true, {
                                    fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                    lineNumber: 20,
                                    columnNumber: 47
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "proximas-investigacoes",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].future,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: "O CADERNO CONTINUA ABERTO"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                        lineNumber: 28,
                                        columnNumber: 67
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Para onde continuaremos?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                        lineNumber: 28,
                                        columnNumber: 125
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$ArticleText$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleText"], {
                                        text: article.future
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                        lineNumber: 28,
                                        columnNumber: 158
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        className: "textLink",
                                        href: "/laboratorio/",
                                        children: "Continuar a experimentar no laboratório →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                        lineNumber: 28,
                                        columnNumber: 195
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                lineNumber: 28,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$discoveries$2f$DiscoveryArticle$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].editorial,
                                children: "Texto reconstruído a partir da investigação guiada de Timóteo. As hesitações de cálculo foram condensadas; a ordem das descobertas e as distinções matemáticas foram preservadas."
                            }, void 0, false, {
                                fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                                lineNumber: 29,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                        lineNumber: 18,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
                lineNumber: 16,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/discoveries/DiscoveryArticle.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ui/Math.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MathFormula",
    ()=>MathFormula
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$katex$2f$dist$2f$katex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/katex/dist/katex.mjs [app-rsc] (ecmascript)");
;
;
function MathFormula({ value, display = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        dangerouslySetInnerHTML: {
            __html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$katex$2f$dist$2f$katex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].renderToString(value, {
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
"[project]/src/controllers/DiscoverySectionController.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiscoverySectionController",
    ()=>DiscoverySectionController
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DiscoverySectionController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DiscoverySectionController() from the server but DiscoverySectionController is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/controllers/DiscoverySectionController.tsx", "DiscoverySectionController");
}),
"[project]/src/controllers/DiscoverySectionController.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$DiscoverySectionController$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/controllers/DiscoverySectionController.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controllers$2f$DiscoverySectionController$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/services/discovery.service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDiscoveries",
    ()=>getDiscoveries,
    "getDiscovery",
    ()=>getDiscovery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$discoveries$2f$reconstruindo$2d$a$2d$combinatoria$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/discoveries/reconstruindo-a-combinatoria.json.[json].cjs [app-rsc] (ecmascript)");
;
// Local editorial content: add future articles here, independently of lessons.json.
const articles = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$discoveries$2f$reconstruindo$2d$a$2d$combinatoria$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
];
function getDiscoveries() {
    return articles;
}
function getDiscovery(slug) {
    return articles.find((article)=>article.slug === slug);
}
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/descobertas/[slug]/page.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "page": "page-module-scss-module__4pfe9a__page",
});
}),
"[project]/src/app/descobertas/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/descobertas/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/discoveries/ArticleText.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "formula": "ArticleText-module-scss-module__fquLBG__formula",
  "text": "ArticleText-module-scss-module__fquLBG__text",
});
}),
"[project]/src/components/discoveries/DiscoveryArticle.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "article": "DiscoveryArticle-module-scss-module__TC2IUW__article",
  "back": "DiscoveryArticle-module-scss-module__TC2IUW__back",
  "body": "DiscoveryArticle-module-scss-module__TC2IUW__body",
  "byline": "DiscoveryArticle-module-scss-module__TC2IUW__byline",
  "chapter": "DiscoveryArticle-module-scss-module__TC2IUW__chapter",
  "conclusion": "DiscoveryArticle-module-scss-module__TC2IUW__conclusion",
  "contents": "DiscoveryArticle-module-scss-module__TC2IUW__contents",
  "editorial": "DiscoveryArticle-module-scss-module__TC2IUW__editorial",
  "future": "DiscoveryArticle-module-scss-module__TC2IUW__future",
  "hero": "DiscoveryArticle-module-scss-module__TC2IUW__hero",
  "heroGrid": "DiscoveryArticle-module-scss-module__TC2IUW__heroGrid",
  "instruction": "DiscoveryArticle-module-scss-module__TC2IUW__instruction",
  "intro": "DiscoveryArticle-module-scss-module__TC2IUW__intro",
  "layout": "DiscoveryArticle-module-scss-module__TC2IUW__layout",
  "next": "DiscoveryArticle-module-scss-module__TC2IUW__next",
  "opening": "DiscoveryArticle-module-scss-module__TC2IUW__opening",
  "question": "DiscoveryArticle-module-scss-module__TC2IUW__question",
  "reveal": "DiscoveryArticle-module-scss-module__TC2IUW__reveal",
  "section": "DiscoveryArticle-module-scss-module__TC2IUW__section",
});
}),
"[project]/src/data/discoveries/reconstruindo-a-combinatoria.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"slug\":\"reconstruindo-a-combinatoria\",\"title\":\"Reconstruindo a Combinatória\",\"subtitle\":\"De uma tabela de pares ao triângulo de Pascal\",\"author\":\"Timóteo\",\"description\":\"Uma investigação interativa sobre escolhas, restrições, simetrias e representações: nove experiências para descobrir a Combinatória antes das fórmulas.\",\"opening\":\"E se as fórmulas de Combinatória fossem consequências de uma única pergunta: que objetos estamos realmente a contar? Comecei com uma tabela de pares ordenados. Ao impor condições, apareceram a soma, a simetria, a divisão por representações equivalentes e, por fim, o triângulo de Pascal. Esta é a reconstrução desse caminho.\",\"intro\":\"**Investigador:** «O Princípio Multiplicativo costuma aparecer com dois conjuntos. Nas fórmulas de Combinatória parece que trabalhamos no mesmo conjunto. Estamos sempre a formar pares ou sequências como num produto cartesiano? E por que nalguns problemas temos de somar?»\\n\\nNão comecemos por uma lista de fórmulas. Comecemos por objetos que podemos ver e contar.\",\"sections\":[{\"id\":\"descoberta-1\",\"title\":\"Dois conjuntos distintos e nenhuma restrição\",\"nav\":\"Uma tabela de pares\",\"lab\":1,\"before\":\"Tomemos\\n\\n\\\\[\\nA=\\\\{a,b,c\\\\},\\\\qquad B=\\\\{1,2,3,4\\\\}.\\n\\\\]\\n\\nO produto cartesiano \\\\(A\\\\times B\\\\) é o conjunto de todos os pares ordenados \\\\((x,y)\\\\) com \\\\(x\\\\in A\\\\) e \\\\(y\\\\in B\\\\). Construímos uma tabela: as três linhas são os elementos de \\\\(A\\\\) e as quatro colunas, os de \\\\(B\\\\). Cada célula é exatamente um par.\",\"question\":\"Escolhe uma linha. Quantos pares ficam fixados? Que operação reúne todas as linhas?\",\"conclusion\":\"**Pergunta:** por que há \\\\(3\\\\cdot4\\\\) células?  \\n**Resposta do investigador:** «Basta contar as escolhas da primeira entrada e multiplicar pelas escolhas da segunda.»\\n\\nA tabela permite agora enunciar o princípio:\\n\\n> **Princípio Multiplicativo (versão inicial).** Se a primeira escolha pode ser feita de \\\\(m\\\\) maneiras e, para cada primeira escolha, a segunda pode ser feita de \\\\(n\\\\) maneiras, existem \\\\(mn\\\\) pares de escolhas.\\n>\\n> Para conjuntos finitos, \\\\(|A\\\\times B|=|A|\\\\,|B|\\\\).\\n\\n\\n\\n### Pergunta nova\\n\\n**Investigador:** «E se mantivermos os dois conjuntos diferentes, mas impusermos restrições? A soma também pode surgir antes de trabalharmos com conjuntos iguais?»\"},{\"id\":\"descoberta-2\",\"title\":\"Uma restrição produz casos diferentes\",\"nav\":\"Quando surge a soma\",\"lab\":2,\"before\":\"Mantemos \\\\(A\\\\) e \\\\(B\\\\), mas só aceitamos \\\\((x,y)\\\\) quando:\\n\\n- \\\\(x=a\\\\) ou \\\\(x=b\\\\): \\\\(y\\\\) é par;\\n- \\\\(x=c\\\\): \\\\(y>1\\\\).\\n\\nChamemos \\\\(R\\\\) ao conjunto dos pares aceites. A condição é examinada **nos elementos de \\\\(A\\\\times B\\\\)**; \\\\(R\\\\subseteq A\\\\times B\\\\) é o resultado dessa seleção, não «um par».\",\"question\":\"Ativa a condição e compara as três linhas. Podemos continuar a multiplicar três por quatro?\",\"conclusion\":\"A tabela mostra duas linhas com duas células válidas e uma linha com três. Descobrimos que podemos separar o conjunto:\\n\\n\\\\[\\nR_1=\\\\{a,b\\\\}\\\\times\\\\{2,4\\\\},\\\\qquad\\nR_2=\\\\{c\\\\}\\\\times\\\\{2,3,4\\\\}.\\n\\\\]\\n\\nEstes subconjuntos são disjuntos. Contando cada parte por multiplicação:\\n\\n\\\\[\\n|R|=|R_1|+|R_2|=2\\\\cdot2+1\\\\cdot3=7.\\n\\\\]\\n\\n**Pergunta:** por que somar agora, em vez de multiplicar 3 por 4?  \\n**Resposta do investigador:** «Podemos dividir o conjunto em dois, aplicar o princípio dentro de cada parte e depois somar; ou contar tudo e subtrair o que não interessa.»\\n\\nSurge então, motivado pela experiência:\\n\\n> **Princípio Aditivo.** Se \\\\(R=R_1\\\\cup R_2\\\\), com \\\\(R_1\\\\cap R_2=\\\\varnothing\\\\), então \\\\(|R|=|R_1|+|R_2|\\\\).\\n\\nA multiplicação conta escolhas sucessivas; a soma reúne **casos disjuntos**. Também podemos contar todo o produto e subtrair os pares proibidos.\"},{\"id\":\"descoberta-3\",\"title\":\"E se os dois conjuntos forem iguais?\",\"nav\":\"Restrição ou identificação?\",\"lab\":3,\"before\":\"Agora \\\\(A=B=\\\\{1,2,3\\\\}\\\\). As coordenadas continuam a ocupar posições diferentes. Vamos comparar duas decisões: proibir entradas iguais e deixar de distinguir a ordem.\",\"question\":\"Compara os quatro modos e seleciona pares espelhados. Retirar uma diagonal é o mesmo que ignorar a ordem?\",\"conclusion\":\"Na tabela \\\\(3\\\\times3\\\\), os pares \\\\((1,1),(2,2),(3,3)\\\\) formam a **diagonal**. Podemos contar todos e subtrair três: \\\\(9-3=6\\\\). Ou escolher a primeira entrada de três maneiras e a segunda de duas: \\\\(3\\\\cdot2=6\\\\).\\n\\n**Investigador:** «Há duas maneiras: retirar do total o que não interessa ou dividir em partes que sabemos contar e somar.»\\n\\nAgora vamos alterar não os elementos permitidos, mas a noção de **mesmo objeto**: \\\\((1,2)\\\\) e \\\\((2,1)\\\\) são dois pares ordenados distintos; se a ordem não importa, ambos representam a mesma escolha \\\\(\\\\{1,2\\\\}\\\\).\\n\\n**Pergunta:** podemos dividir por 2?  \\n**Resposta do investigador:** «Temos de dividir por 2.»\\n\\nSim **neste caso**, porque cada escolha de dois elementos distintos possui exatamente duas representações ordenadas. Assim, \\\\(6/2=3\\\\).\\n\\nRegistemos a distinção, nascida do exemplo:\\n\\n- **Restrição:** descarta pares (por exemplo, \\\\(x=y\\\\)).\\n- **Identificação:** considera que pares diferentes representam o mesmo objeto (por exemplo, \\\\((x,y)\\\\sim(y,x)\\\\)).\\n- **Subtração:** retira elementos proibidos ou representações excedentes devidamente identificadas.\\n- **Divisão:** é legítima quando **cada** objeto tem exatamente o mesmo número de representações.\\n\\n**Uma distinção importante.** Um conjunto já não contém elementos idênticos repetidos. Dividir agrupa *representações distintas* em classes do mesmo tamanho; subtrair remove um conjunto conhecido de elementos ou representações. Os dois procedimentos podem produzir a mesma contagem em situações particulares.\\n\\nAo permitir entradas iguais e ignorar a ordem, as três diagonais representam escolhas sozinhas; os seis pares fora da diagonal agrupam-se dois a dois. Obtemos \\\\(3+6/2=6\\\\), não \\\\(9/2\\\\). Quando admitimos repetição, falamos de escolhas com repetição (ou multiconjuntos): a escolha de dois elementos iguais não é um subconjunto com dois elementos.\"},{\"id\":\"descoberta-4\",\"title\":\"A interseção e a simetria parcial\",\"nav\":\"Uma simetria parcial\",\"lab\":4,\"before\":\"Antes de generalizar, investiguemos dois conjuntos **diferentes, mas com interseção**:\\n\\n\\\\[\\nA=\\\\{1,2,3\\\\},\\\\qquad B=\\\\{2,3,4\\\\}.\\n\\\\]\",\"question\":\"Experimenta também «Inverso ausente». Podemos eliminar todo o par cuja primeira entrada é maior?\",\"conclusion\":\"Contando as células, encontramos \\\\(|A\\\\times B|=9\\\\). Se ignoramos a ordem, o par \\\\((2,3)\\\\) e o seu inverso \\\\((3,2)\\\\) representam uma só escolha. Mas \\\\((1,2)\\\\) não tem inverso na mesma tabela, e \\\\((2,2)\\\\) coincide consigo próprio.\\n\\n**Investigador:** «É interessante olhar para a tabela porque revela simetrias em torno da diagonal.»\\n\\nA simetria surge apenas na região formada pelos elementos comuns. Seja \\\\(S=A\\\\cap B\\\\), com \\\\(|S|=k\\\\). Entre os pares fora da diagonal em \\\\(S\\\\times S\\\\), há \\\\(k(k-1)\\\\) pares ordenados. Cada par não ordenado aparece duas vezes. O número de **representações excedentes** é\\n\\n\\\\[\\n\\\\frac{k(k-1)}2.\\n\\\\]\\n\\nSe \\\\(|A|=n\\\\) e \\\\(|B|=m\\\\), a contagem de escolhas sem ordem, **permitindo dois elementos iguais**, torna-se\\n\\n\\\\[\\n\\\\boxed{nm-\\\\frac{k(k-1)}2}.\\n\\\\]\\n\\nSe também proibimos elementos iguais, removemos ainda os \\\\(k\\\\) pares diagonais:\\n\\n\\\\[\\n\\\\boxed{nm-k-\\\\frac{k(k-1)}2}.\\n\\\\]\\n\\n**Pergunta:** por que não podemos retirar todos os pares abaixo da diagonal?  \\n**Resposta reconstruída da discussão:** só os que têm inverso **dentro do mesmo produto** são excedentes. Por exemplo, \\\\((3,2)\\\\) pode estar presente sem que \\\\((2,3)\\\\) esteja, dependendo dos conjuntos.\\n\\n**Experiência de controlo:** para \\\\(A=\\\\{1,2,3,4\\\\}\\\\), \\\\(B=\\\\{2,3,4,5\\\\}\\\\), temos \\\\(n=m=4\\\\), \\\\(k=3\\\\). Há 16 pares ordenados, três inversões excedentes, e três pares diagonais. Resultado: 13 escolhas sem ordem, permitindo iguais; 10, proibindo iguais.\\n\\nAo voltar ao caso \\\\(A=B\\\\), \\\\(n=m=k\\\\), surgem:\\n\\n\\\\[\\n\\\\text{dois distintos, sem ordem: }\\\\frac{n(n-1)}2,\\n\\\\qquad\\n\\\\text{dois, permitindo iguais: }\\\\frac{n(n+1)}2.\\n\\\\]\\n\\n**Outra descoberta:** ao contar metade de uma tabela, incluindo ou excluindo a diagonal, encontramos\\n\\n\\\\[\\n1+2+\\\\cdots+n=\\\\frac{n(n+1)}2.\\n\\\\]\\n\\nDuas maneiras de contar o mesmo conjunto — por linhas ou por simetria — produzem uma identidade.\\n\\nA «diagonal» é a condição \\\\(x=y\\\\), não necessariamente a diagonal visual do retângulo: os rótulos das linhas e colunas podem começar em valores diferentes. Nos conjuntos disjuntos, nenhum par tem inverso no mesmo produto, pelo que ignorar a ordem não reduz a contagem.\"},{\"id\":\"descoberta-5\",\"title\":\"Primeiro três conjuntos diferentes: as camadas\",\"nav\":\"O que muda entre camadas\",\"lab\":5,\"before\":\"Antes de tomar conjuntos iguais, avancemos de duas para três escolhas:\\n\\n\\\\[\\nA=\\\\{a,b\\\\},\\\\ B=\\\\{1,2,3\\\\},\\\\ C=\\\\{u,v,w\\\\}.\\n\\\\]\\n\\nDepois, muda para \\\\(A=\\\\{1,2\\\\}, B=\\\\{1,2,3\\\\}, C=\\\\{1,3\\\\}\\\\), exigindo três coordenadas distintas. Fixa a terceira entrada e procura todos os triplos aceites.\",\"question\":\"Começa sem condição; depois exige três entradas distintas. Todas as camadas continuam com a mesma quantidade?\",\"conclusion\":\"O produto \\\\(A\\\\times B\\\\times C\\\\) pode ser visto como **três tabelas \\\\(2\\\\times3\\\\) empilhadas**: uma para cada valor de \\\\(z\\\\in C\\\\). Cada camada possui seis triplos; logo existem \\\\(3\\\\cdot6=18\\\\).\\n\\n**Investigador:** «Podíamos fazer o caso da primeira camada como um par ordenado e multiplicar pela quantidade de camadas.»\\n\\nAssim, o princípio de três fatores surge do princípio de dois fatores **mais a decomposição em camadas**:\\n\\n\\\\[\\n|A\\\\times B\\\\times C|=|A\\\\times B|\\\\,|C|.\\n\\\\]\\n\\nAgora imponhamos uma restrição com conjuntos diferentes que se intersectam:\\n\\n\\\\[\\nA=\\\\{1,2\\\\},\\\\quad B=\\\\{1,2,3\\\\},\\\\quad C=\\\\{1,3\\\\},\\n\\\\]\\n\\nexigindo \\\\(x,y,z\\\\) todos distintos.\\n\\nNa camada \\\\(z=1\\\\), resta apenas \\\\((2,3,1)\\\\): **uma** possibilidade. Na camada \\\\(z=3\\\\), restam \\\\((1,2,3)\\\\) e \\\\((2,1,3)\\\\): **duas** possibilidades.\\n\\n**Pergunta:** são camadas iguais em quantidade?  \\n**Investigador:** «Não são iguais. Temos que usar a adição dos conjuntos.»\\n\\nEsta experiência sugere uma generalização de grande alcance. Se \\\\(R\\\\subseteq A\\\\times B\\\\times C\\\\), e \\\\(R_z\\\\) é o conjunto de pares que formam triplos válidos com a terceira coordenada \\\\(z\\\\), então\\n\\n\\\\[\\n\\\\boxed{|R|=\\\\sum_{z\\\\in C}|R_z|}.\\n\\\\]\\n\\nQuando todas as camadas têm o mesmo tamanho, a soma reduz-se a uma multiplicação.\"},{\"id\":\"descoberta-6\",\"title\":\"Só agora três cópias do mesmo conjunto\",\"nav\":\"Três cópias de A\",\"lab\":6,\"before\":\"Voltamos a \\\\(A=\\\\{1,2,3\\\\}\\\\), agora ocupando três posições. Cada camada fixa a terceira coordenada; as linhas e colunas escolhem as outras duas. O que resta se as três entradas tiverem de ser diferentes?\",\"question\":\"Percorre as três camadas, primeiro sem restrições e depois sem repetir entradas. Porque diminuem as escolhas?\",\"conclusion\":\"Se \\\\(A=\\\\{1,2,3\\\\}\\\\), todos os triplos formam \\\\(A^3\\\\), com \\\\(3^3=27\\\\) elementos. Sem repetições, a tabela de cada camada tem apenas dois triplos válidos. São três camadas, logo seis triplos.\\n\\nEscolhendo diretamente coordenadas distintas, obtemos \\\\(3\\\\cdot2\\\\cdot1\\\\). Com \\\\(n\\\\) elementos, para triplos:\\n\\n\\\\[\\nn(n-1)(n-2).\\n\\\\]\\n\\nA tabela permitiu descobrir **por que** diminuem as escolhas; o produto permite contar sem desenhar todas as células.\\n\\n**Pergunta:** isto é realmente «linha × coluna × profundidade»?  \\n**Resposta à dúvida do investigador:** sim. A restrição apenas altera a quantidade de escolhas disponíveis depois das anteriores; já não estamos a multiplicar sempre \\\\(n\\\\) por \\\\(n\\\\) por \\\\(n\\\\).\"},{\"id\":\"descoberta-7\",\"title\":\"De três posições a r posições: os fatoriais surgem depois\",\"nav\":\"Mais posições, menos escolhas\",\"lab\":7,\"before\":\"Já observámos três posições. E se pudermos escolher quantas posições preencher? Dispomos de \\\\(n\\\\) elementos distintos e queremos preencher \\\\(r\\\\) posições, sem repetir elementos. Antes de abreviar qualquer produto, contemos as escolhas disponíveis em cada posição.\",\"question\":\"Experimenta cinco elementos e três posições; depois muda r. Quantas sequências representam uma mesma escolha?\",\"conclusion\":\"Com \\\\(n\\\\) elementos diferentes disponíveis e \\\\(r\\\\) posições, \\\\(0\\\\le r\\\\le n\\\\), sem repetição:\\n\\n\\\\[\\nn(n-1)(n-2)\\\\cdots(n-r+1).\\n\\\\]\\n\\n**Investigador:** «Entendo o produto, mas por que deixámos de fazer linha × coluna × profundidade?»  \\n**Resposta:** não deixámos; estamos a contar exatamente esse produto de escolhas, agora condicionado pelo que já ocupou as posições anteriores.\\n\\nSomente após experimentar casos como \\\\(5\\\\cdot4\\\\cdot3\\\\) e compará-los com \\\\(5!\\\\) se torna natural a abreviação:\\n\\n\\\\[\\n\\\\boxed{\\\\frac{n!}{(n-r)!}}.\\n\\\\]\\n\\nEssa quantidade conta **sequências ordenadas** de \\\\(r\\\\) elementos distintos.\\n\\nE se a ordem não importar? Cada escolha de \\\\(r\\\\) elementos distintos tem \\\\(r!\\\\) sequências ordenadas (por exemplo, \\\\(\\\\{1,2,3\\\\}\\\\) possui seis ordenações). Portanto o número de escolhas distintas é\\n\\n\\\\[\\n\\\\boxed{\\\\frac{n!}{r!(n-r)!}}.\\n\\\\]\\n\\nSó agora podemos dar os nomes usuais: **arranjos sem repetição** para as sequências ordenadas e **combinações** para as escolhas sem ordem. Permutação de todos os \\\\(n\\\\) elementos é o caso \\\\(r=n\\\\), com \\\\(n!\\\\) ordenações.\\n\\n**Aviso conceitual surgido das experiências:** não subtrair fatoriais para «retirar fatores»; divisão cancela fatores de um produto. E dividir por \\\\(r!\\\\) só funciona porque cada conjunto de \\\\(r\\\\) elementos distintos tem exatamente \\\\(r!\\\\) representações ordenadas.\\n\\nO caso \\\\(r=0\\\\) também conta: existe uma única sequência vazia e uma única escolha vazia. O produto sem fatores vale 1; a convenção \\\\(0!=1\\\\) mantém a mesma expressão válida.\"},{\"id\":\"descoberta-8\",\"title\":\"Uma representação nova: subconjuntos como sequências de zeros e uns\",\"nav\":\"Outra representação\",\"lab\":8,\"before\":\"**Investigador:** «Para contar subconjuntos de \\\\(A=\\\\{a,b,c\\\\}\\\\), podemos começar pelos triplos de \\\\(A^3\\\\), identificar como iguais as sequências que usam os mesmos elementos e acrescentar o vazio depois.»\\n\\nComecemos por essa ideia. Fixa a terceira entrada e compara os subconjuntos representados pelas células. Depois procura uma escrita em que cada elemento tenha uma posição fixa: incluir ou excluir.\",\"question\":\"Explora primeiro os triplos e as novidades de cada camada. Depois muda para os cartões binários: o que ganhamos com uma posição fixa para cada elemento?\",\"conclusion\":\"Essa foi uma primeira representação possível. Ao fixar a terceira coordenada em \\\\(a\\\\), os triplos dessa camada representam quatro subconjuntos distintos: \\\\(\\\\{a\\\\},\\\\{a,b\\\\},\\\\{a,c\\\\},\\\\{a,b,c\\\\}\\\\). As camadas seguintes têm a **mesma quantidade** de subconjuntos internos, mas também introduzem subconjuntos novos que não estavam na primeira. Contando apenas as novidades, obtemos \\\\(4+2+1=7\\\\), e com o vazio chegamos a 8.\\n\\n**Pergunta:** será possível incluir o subconjunto vazio diretamente?  \\n**Resposta do investigador:** «Poderíamos acrescentar o vazio às escolhas para as coordenadas.»  \\nSim, se usarmos um símbolo para «posição desocupada», sem o confundir com um elemento do conjunto. Aqui \\\\(\\\\varnothing\\\\) é apenas essa convenção de escrita. Mas exemplos como \\\\((a,b,\\\\varnothing)\\\\) e \\\\((a,a,b)\\\\) passam a representar o mesmo subconjunto. Isso motiva procurar uma representação com **uma única sequência por subconjunto**, evitando identificar equivalências depois da contagem.\\n\\n**Investigador:** «Talvez possamos usar 0 e 1 como uma representação mais geral dos conjuntos.»\\n\\nHá duas ideias que precisam de ser distinguidas:\\n\\n1. **Codificar elementos** de um conjunto arbitrário por palavras binárias: por exemplo, \\\\(a\\\\mapsto00,\\\\ b\\\\mapsto01,\\\\ c\\\\mapsto10\\\\). Assim, \\\\(A\\\\times A\\\\) pode ser codificado por pares de blocos binários; serão nove códigos válidos dentro de um universo de dezasseis códigos possíveis.\\n2. **Indicar pertença a um subconjunto:** para \\\\(A=\\\\{a,b,c\\\\}\\\\), o triplo binário \\\\((1,0,1)\\\\) representa \\\\(\\\\{a,c\\\\}\\\\). Cada elemento de \\\\(A\\\\) tem uma posição fixa. Esta representação estabelece correspondência **um a um** entre os subconjuntos de \\\\(A\\\\) e \\\\(\\\\{0,1\\\\}^3\\\\).\\n\\nO primeiro método codifica elementos de produtos cartesianos; o segundo resolve diretamente o problema dos subconjuntos, sem múltiplas representações.\\n\\n**Pergunta:** quantas opções existem para cada elemento: pertencer ou não pertencer?  \\n**Resposta da experiência:** duas escolhas independentes por posição. Para \\\\(n\\\\) elementos, o Princípio Multiplicativo dá\\n\\n\\\\[\\n\\\\boxed{2^n\\\\text{ subconjuntos}}.\\n\\\\]\"},{\"id\":\"descoberta-9\",\"title\":\"Quantos subconjuntos têm exatamente r elementos?\",\"nav\":\"Das camadas a Pascal\",\"lab\":9,\"before\":\"**Pergunta:** como contar só os subconjuntos com exatamente \\\\(r\\\\) elementos?  \\nNa representação binária, isso significa contar os vetores de comprimento \\\\(n\\\\) cuja soma das coordenadas é \\\\(r\\\\). Chamemos essa quantidade \\\\(T(n,r)\\\\).\\n\\n**Investigador:** «Usaria os de 1 e 0.» E, ao examinar quatro posições, observou que fixar a primeira coordenada gera duas camadas.\",\"question\":\"Experimenta n=3 e n=4, fixando a quantidade de uns. Que duas contagens devemos reunir?\",\"conclusion\":\"Se a primeira coordenada vale zero, precisamos de \\\\(r\\\\) uns nas \\\\(n-1\\\\) restantes. Se vale um, precisamos de \\\\(r-1\\\\) uns nas restantes. As duas situações são disjuntas:\\n\\n\\\\[\\n\\\\boxed{T(n,r)=T(n-1,r)+T(n-1,r-1)}.\\n\\\\]\\n\\nCondições iniciais: \\\\(T(n,0)=T(n,n)=1\\\\); fora de \\\\(0\\\\le r\\\\le n\\\\), \\\\(T(n,r)=0\\\\).\\n\\n**Pergunta:** como obter \\\\(T(4,1)\\\\) usando apenas camadas?  \\n**Investigador:** «Não sei só olhando para nossa ideia.»  \\n**Descoberta guiada:** \\\\(T(4,1)=T(3,1)+T(3,0)=3+1=4\\\\). Outra interpretação: escolher a posição do único 1.\\n\\n**Investigador:** «Fazendo a tabela percebo que forma o triângulo de Pascal; aqui ele aparece naturalmente a partir da tabela, e não como fórmula dada antes.»\\n\\nOrganizando \\\\(T(n,r)\\\\) por \\\\(n\\\\), surgem as linhas\\n\\n\\\\[\\n1;\\\\quad 1,1;\\\\quad1,2,1;\\\\quad1,3,3,1;\\\\quad1,4,6,4,1;\\\\ldots\\n\\\\]\\n\\nComo cada vetor binário tem um número definido de uns, as classes para \\\\(r=0,1,\\\\ldots,n\\\\) dividem \\\\(\\\\{0,1\\\\}^n\\\\) em partes disjuntas. Por isso:\\n\\n\\\\[\\n\\\\boxed{\\\\sum_{r=0}^{n}T(n,r)=2^n}.\\n\\\\]\\n\\nNa origem, \\\\(T(0,0)=1\\\\): a única palavra de comprimento zero é a palavra vazia. Cada vetor de pertença corresponde a um subconjunto; portanto \\\\(T(n,r)\\\\) coincide com a contagem de escolhas sem ordem de \\\\(r\\\\) elementos que encontrámos anteriormente. Chegámos ao mesmo objeto por outra representação.\"}],\"future\":\"Esta investigação deixa-nos maneiras de olhar, e novas perguntas para experimentar. Os temas seguintes ainda não foram resolvidos neste percurso.\\n\\n- **Matrículas com condições.** Nove algarismos, exatamente um zero e soma par dos dois últimos: como separar os casos? O que muda quando o zero inicial é permitido ou proibido?\\n- **Técnicas de palitos.** Como representar distribuições por estrelas e barras? Por que escolher posições resolve a contagem, e o que muda quando há restrições?\\n- **Contagem de subconjuntos.** Como contar os de tamanho prescrito, os que contêm determinados elementos ou os que evitam certas configurações? E o que muda quando passamos a escolhas com repetição?\\n- **Funções geradoras.** Poderemos representar escolhas por fatores como \\\\((1+x+\\\\cdots)\\\\)? Por que somam os expoentes e o que contam os coeficientes?\\n\\nInclusão-exclusão, bijeções e ações de permutações ficam como caminhos possíveis. Entrarão na investigação quando um problema nos fizer precisar delas.\"}");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0otm9yk5nkd91._.js.map