(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/booking-landing/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/booking-landing/src/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Tabs(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/booking-landing/src/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/booking-landing/src/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/booking-landing/src/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/booking-landing/src/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/booking-landing/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/booking-landing/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlanCard",
    ()=>PlanCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/src/components/ui/button.tsx [app-client] (ecmascript)");
;
;
const PlanCard = (param)=>{
    let { plan, onExpand, isExpanded = false, isHidden = false } = param;
    const isGreen = plan.bgColor === "#c9ff83";
    const isPurple = plan.bgColor === "#8B6BB1" || plan.title.includes("Оплата за продажу");
    const textColor = isGreen ? "text-black" : "text-white";
    const buttonTextColor = plan.buttonColor === "#c9ff83" ? "text-black" : "text-white";
    const handleDetailsClick = ()=>{
        if (onExpand) {
            onExpand(plan.id);
        }
    };
    if (isHidden) {
        return null;
    }
    // Контент для "Як це працює" для фиолетовой карточки
    const purpleCardContent = [
        {
            number: "01",
            title: "Оберіть товари",
            description: "З готового каталогу відмічаєте потрібний асортимент, вказуєте ціну та кількість (можна додати знижку чи розпродаж). Опис і фото вже є — ви економите час та одразу виходите на продажі."
        },
        {
            number: "02",
            title: "Отримайте замовлення",
            description: "Клієнт бронює товар → ви підтверджуєте чи відхиляєте замовлення на основі наявності. Клієнт приходить у магазин і навіть номер бронювання. У вашому кабінеті відображається вся інформація про замовлення."
        },
        {
            number: "03",
            title: "Отримайте прибуток і платіть лише 3% з факту",
            description: "Ви отримуєте гроші від клієнта як завжди, а сервіс знімає лише невеликий відсоток (3%). Жодних додаткових витрат — ви платіть тільки з реальних грошей, що уже у вас в касі!"
        }
    ];
    if (isExpanded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-[16px] lg:rounded-[32px] shadow-lg w-full transition-all duration-300 ease-in-out",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-[8px] lg:px-[12px] pt-[8px] lg:pt-[12px] pb-[16px] lg:pb-[24px] rounded-[16px] lg:rounded-[24px]",
                    style: {
                        boxShadow: ' 0 5px 11px 0 rgba(134, 131, 131, 0.1), 0 20px 20px 0 rgba(134, 131, 131, 0.09), 0 46px 27px 0 rgba(134, 131, 131, 0.05), 0 81px 32px 0 rgba(134, 131, 131, 0.01), 0 127px 35px 0 rgba(134, 131, 131, 0);'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[16px] lg:rounded-[24px] p-4 lg:p-6 relative",
                        style: {
                            backgroundColor: plan.bgColor
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg lg:text-[24px] font-medium ".concat(textColor, " mb-3 lg:mb-4"),
                                style: {
                                    fontFamily: "'Geologica', sans-serif"
                                },
                                children: plan.title
                            }, void 0, false, {
                                fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl lg:text-5xl font-bold ".concat(textColor),
                                                style: {
                                                    fontFamily: "'Geologica', sans-serif"
                                                },
                                                children: plan.percentage
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "".concat(textColor, " text-xs lg:text-sm"),
                                                style: {
                                                    fontFamily: "'Wix Madefor Display', sans-serif"
                                                },
                                                children: plan.priceNote
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "hover:opacity-90 ".concat(buttonTextColor, " rounded-full cursor-pointer px-4 lg:px-8 py-2 font-[500] h-[40px] lg:h-[52px] w-[120px] lg:w-[170px] text-xs lg:text-base"),
                                        style: {
                                            backgroundColor: plan.buttonColor,
                                            fontFamily: "'Wix Madefor Text', sans-serif"
                                        },
                                        children: plan.buttonText
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onExpand && onExpand(0),
                                        className: "absolute top-3 right-3 lg:top-4 lg:right-4 w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer text-base lg:text-[20px] font-normal leading-none",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 lg:px-6 py-4 lg:py-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-4 lg:gap-6",
                        children: plan.features.filter((_, index)=>index % 2 === 0).map((feature, index)=>{
                            const descriptionIndex = index * 2 + 1;
                            const description = plan.features[descriptionIndex];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 lg:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            className: "lg:w-6 lg:h-6",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z",
                                                fill: "#344054"
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                                lineNumber: 94,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                            lineNumber: 93,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                        lineNumber: 92,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-gray-700 font-semibold text-sm lg:text-base mb-1",
                                                style: {
                                                    fontFamily: "'Wix Madefor Display', sans-serif"
                                                },
                                                children: feature
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                                lineNumber: 98,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 text-xs lg:text-base",
                                                style: {
                                                    fontFamily: "'Wix Madefor Display', sans-serif"
                                                },
                                                children: description
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                                lineNumber: 102,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                lineNumber: 91,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 lg:px-9 pb-8 lg:pb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl lg:text-[36px] font-bold text-center text-[#344054] mb-4 lg:mb-6",
                            style: {
                                fontFamily: "'Geologica', sans-serif"
                            },
                            children: "Як це працює"
                        }, void 0, false, {
                            fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-4 lg:gap-6",
                            children: (isPurple ? purpleCardContent : [
                                {
                                    number: "01",
                                    title: "Оберіть товари",
                                    description: "З готового каталогу відмічаєте потрібний асортимент, вказуєте ціну та кількість (можна додати знижку чи розпродаж). Опис і фото вже є — ви економите час та одразу виходите на продажі."
                                },
                                {
                                    number: "02",
                                    title: "Отримайте бронювання",
                                    description: "Клієнт бронює товар → ви одразу отримуєте повідомлення з його даними. Можете підтвердити або відхилити бронь (повністю чи частково) залежно від наявності. Жодних ризиків: ви самі контролюєте, що віддати клієнту."
                                },
                                {
                                    number: "03",
                                    title: "Зустріч із клієнтом",
                                    description: "Покупець приходить у магазин за товаром. Ви продаєте йому броньований товар і маєте шанс додати супутні покупки. Якщо клієнт не прийшов - ви можете позначити його як ненадійного."
                                }
                            ]).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-[16px] lg:rounded-[32px] p-4 lg:p-6",
                                    style: {
                                        boxShadow: '3px 6px 14px 0 rgba(0, 0, 0, 0.1), 10px 23px 25px 0 rgba(0, 0, 0, 0.09), 23px 51px 33px 0 rgba(0, 0, 0, 0.05), 40px 91px 40px 0 rgba(0, 0, 0, 0.01), 63px 142px 43px 0 rgba(0, 0, 0, 0)',
                                        animationDelay: "".concat(400 + index * 150, "ms")
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center mb-2 lg:mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl lg:text-[36px] font-extrabold text-[#60478b]",
                                                style: {
                                                    fontFamily: "'Wix Madefor Display', sans-serif"
                                                },
                                                children: item.number
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg lg:text-[24px] font-bold text-[#344054] mb-2 lg:mb-3",
                                            style: {
                                                fontFamily: "'Geologica', sans-serif"
                                            },
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#667085] text-sm lg:text-base leading-relaxed",
                                            style: {
                                                fontFamily: "'Wix Madefor Display', sans-serif"
                                            },
                                            children: item.description
                                        }, void 0, false, {
                                            fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-[16px] lg:rounded-[32px] shadow-lg lg:shadow-none lg:hover:shadow-xl relative overflow-hidden max-w-[604px] w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-[8px] lg:px-[12px] pt-[8px] lg:pt-[12px] pb-[16px] lg:pb-[24px] rounded-[16px] lg:rounded-[24px]",
                style: {
                    boxShadow: ' 0 5px 11px 0 rgba(134, 131, 131, 0.1), 0 20px 20px 0 rgba(134, 131, 131, 0.09), 0 46px 27px 0 rgba(134, 131, 131, 0.05), 0 81px 32px 0 rgba(134, 131, 131, 0.01), 0 127px 35px 0 rgba(134, 131, 131, 0);'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[16px] lg:rounded-[24px] p-4 lg:p-6 relative",
                    style: {
                        backgroundColor: plan.bgColor
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg lg:text-[24px] font-medium ".concat(textColor, " mb-3 lg:mb-4"),
                            style: {
                                fontFamily: "'Geologica', sans-serif"
                            },
                            children: plan.title
                        }, void 0, false, {
                            fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-baseline gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl lg:text-5xl font-bold ".concat(textColor),
                                            style: {
                                                fontFamily: "'Geologica', sans-serif"
                                            },
                                            children: plan.percentage
                                        }, void 0, false, {
                                            fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "".concat(textColor, " text-xs lg:text-sm"),
                                            style: {
                                                fontFamily: "'Wix Madefor Display', sans-serif"
                                            },
                                            children: plan.priceNote
                                        }, void 0, false, {
                                            fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleDetailsClick,
                                    className: "hover:opacity-90 ".concat(buttonTextColor, " rounded-full px-4 lg:px-8 py-2 font-[500] h-[40px] lg:h-[52px] w-[120px] lg:w-[170px] text-xs lg:text-base"),
                                    style: {
                                        backgroundColor: plan.buttonColor,
                                        fontFamily: "'Wix Madefor Text', sans-serif"
                                    },
                                    children: plan.buttonText
                                }, void 0, false, {
                                    fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-[24px] lg:px-[36px] pt-[16px] lg:pt-[24px] pb-[32px] lg:pb-[48px]",
                children: plan.features.map((feature, index)=>{
                    const isTitle = index % 2 === 0;
                    if (isTitle) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 lg:gap-3 ".concat(index > 0 ? 'mt-4 lg:mt-6' : ''),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "20",
                                        height: "20",
                                        className: "lg:w-6 lg:h-6",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z",
                                            fill: "#344054"
                                        }, void 0, false, {
                                            fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                            lineNumber: 201,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                        lineNumber: 200,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                    lineNumber: 199,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-700 font-semibold text-sm lg:text-[16px]",
                                    style: {
                                        fontFamily: "'Wix Madefor Display', sans-serif"
                                    },
                                    children: feature
                                }, void 0, false, {
                                    fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                    lineNumber: 204,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                            lineNumber: 198,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    } else {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-6 lg:ml-9 mt-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600 text-xs lg:text-[16px]",
                                style: {
                                    fontFamily: "'Wix Madefor Display', sans-serif"
                                },
                                children: feature
                            }, void 0, false, {
                                fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                                lineNumber: 212,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, index, false, {
                            fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                            lineNumber: 211,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    }
                })
            }, void 0, false, {
                fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PlanCard;
var _c;
__turbopack_context__.k.register(_c, "PlanCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/booking-landing/src/features/collaboration/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLLABORATION_DATA",
    ()=>COLLABORATION_DATA
]);
const COLLABORATION_DATA = {
    title: "Формат сотрудничества",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
    plans: [
        {
            id: 1,
            title: "\"Оплата за бронь\"",
            percentage: "0.5%",
            priceNote: "від продажу",
            description: "Тут треба розписати про цю форму співпраці",
            buttonText: "Детальніше",
            features: [
                "Низька комісія",
                "Всього 0,5% від вартості товару за заявку з контактами покупця.",
                "Оплата тільки за результат",
                "Жодних підписок чи передоплат — ви платите лише за реального клієнта, який забронював товар.",
                "Мінімальний відсоток відмов",
                "Покупець уже порівняв магазини й обрав саме вас — тому ймовірність відмови значно нижча, ніж у класичному інтернет-магазині."
            ],
            bgColor: "#c9ff83",
            buttonColor: "#9270cb"
        },
        {
            id: 2,
            title: "\"Оплата за продажу\"",
            percentage: "3%",
            priceNote: "від продажу",
            description: "Тут треба розписати про цю форму співпраці",
            buttonText: "Детальніше",
            features: [
                "Оплата лише після отримання грошей",
                "Жодних підписок чи передоплат — ви платите лише за реального клієнта, який забронював товар.",
                "Додаткові продажі",
                "Ви можете продавати супутні товари (іграшки, ласощі, вітаміни) без комісії.",
                "Клієнтська база",
                "Тепер у вас буде можливість робити розсилки по клієнтам та повертати їх знову."
            ],
            bgColor: "#9270cb",
            buttonColor: "#c9ff83"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/booking-landing/src/features/collaboration/CollaborationSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollaborationSection",
    ()=>CollaborationSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$collaboration$2f$components$2f$PlanCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/src/features/collaboration/components/PlanCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$collaboration$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/src/features/collaboration/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CollaborationSection() {
    _s();
    const [expandedPlanId, setExpandedPlanId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handlePlanExpand = (planId)=>{
        setExpandedPlanId(planId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-8 lg:py-16 bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8 lg:mb-16 max-w-[602px] mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-[#344054] mb-2 text-2xl lg:text-[48px] leading-tight lg:leading-[130%]",
                            style: {
                                fontFamily: "'Geologica', sans-serif"
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$collaboration$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLABORATION_DATA"].title
                        }, void 0, false, {
                            fileName: "[project]/booking-landing/src/features/collaboration/CollaborationSection.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#667085] text-base lg:text-[20px] leading-normal lg:leading-[150%]",
                            style: {
                                fontFamily: "'Wix Madefor Display', sans-serif",
                                fontWeight: '500'
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$collaboration$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLABORATION_DATA"].subtitle
                        }, void 0, false, {
                            fileName: "[project]/booking-landing/src/features/collaboration/CollaborationSection.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/booking-landing/src/features/collaboration/CollaborationSection.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                expandedPlanId === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-6 lg:gap-8 justify-center items-center lg:flex-row lg:items-start",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$collaboration$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLABORATION_DATA"].plans.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$collaboration$2f$components$2f$PlanCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlanCard"], {
                            plan: plan,
                            onExpand: handlePlanExpand,
                            isExpanded: false,
                            isHidden: false
                        }, plan.id, false, {
                            fileName: "[project]/booking-landing/src/features/collaboration/CollaborationSection.tsx",
                            lineNumber: 30,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/booking-landing/src/features/collaboration/CollaborationSection.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$collaboration$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLABORATION_DATA"].plans.filter((plan)=>plan.id === expandedPlanId).map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$collaboration$2f$components$2f$PlanCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlanCard"], {
                            plan: plan,
                            onExpand: handlePlanExpand,
                            isExpanded: true,
                            isHidden: false
                        }, plan.id, false, {
                            fileName: "[project]/booking-landing/src/features/collaboration/CollaborationSection.tsx",
                            lineNumber: 44,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/booking-landing/src/features/collaboration/CollaborationSection.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/booking-landing/src/features/collaboration/CollaborationSection.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/booking-landing/src/features/collaboration/CollaborationSection.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(CollaborationSection, "Nx7DwFbhEIfPN/XnFVxq+oXq65k=");
_c = CollaborationSection;
var _c;
__turbopack_context__.k.register(_c, "CollaborationSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/booking-landing/src/features/how-it-works/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HOW_IT_WORKS_DATA",
    ()=>HOW_IT_WORKS_DATA
]);
const HOW_IT_WORKS_DATA = {
    title: "Как это работает",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
    steps: [
        {
            id: 1,
            title: "Воспользуйтесь поиском",
            description: "Найдите подходящего специалиста в вашем районе через удобный поиск",
            imageSrc: "/images/landing/mobile.png"
        },
        {
            id: 2,
            title: "Вивчіть все про товар",
            description: "Переглядайте детальну інформацію про товари, порівнюйте ціни та характеристики. Обирайте вагу, колір та інші параметри відповідно до потреб вашого улюбленця",
            imageSrc: "/images/landing/mobile-tab2.png",
            imageSrc2: "/images/landing/mobile2-tab2.png",
            imageSrcMobile: "/images/landing/mobile-tab2-small.png",
            imageSrc2Mobile: "/images/landing/mobile2-tab2-small.png"
        },
        {
            id: 3,
            title: "Забронируйте услугу",
            description: "Забронируйте удобное время и дату для оказания услуги",
            imageSrc: "/images/landing/mobile-tab3.png"
        },
        {
            id: 4,
            title: "Получите услугу",
            description: "Специалист приедет в назначенное время и окажет качественную услугу",
            imageSrc: "/images/landing/mobile-tab4.png"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/booking-landing/src/features/how-it-works/components/StepNumbers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepNumbers",
    ()=>StepNumbers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const StepNumbers = (param)=>{
    let { currentStep, totalSteps, onStepClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center mb-[75px] lg:mb-16 relative z-20",
        children: Array.from({
            length: totalSteps
        }, (_, index)=>{
            const stepNumber = index + 1;
            const isActive = stepNumber === currentStep;
            const isCompleted = stepNumber < currentStep;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onStepClick(stepNumber),
                        className: "text-[30px] lg:text-5xl font-extrabold transition-colors duration-200 cursor-pointer hover:opacity-80 relative z-30 ".concat(isActive ? 'text-[#344054]' : 'text-white'),
                        children: stepNumber.toString().padStart(2, '0')
                    }, void 0, false, {
                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepNumbers.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    stepNumber < totalSteps && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-1 lg:mx-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/landing/dots-separator.svg",
                            alt: "",
                            className: "w-13 lg:w-26 h-1 lg:h-2"
                        }, void 0, false, {
                            fileName: "[project]/booking-landing/src/features/how-it-works/components/StepNumbers.tsx",
                            lineNumber: 28,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepNumbers.tsx",
                        lineNumber: 27,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, stepNumber, true, {
                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepNumbers.tsx",
                lineNumber: 16,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepNumbers.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StepNumbers;
var _c;
__turbopack_context__.k.register(_c, "StepNumbers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepContent",
    ()=>StepContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/image.js [app-client] (ecmascript)");
;
;
const StepContent = (param)=>{
    let { step } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center mx-auto ".concat(step.id === 2 ? 'pb-10 lg:pb-0' : ''),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex justify-center",
            children: step.id === 2 && step.imageSrc && step.imageSrc2 ? // Special layout for step 2 with two images
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-[12px] lg:gap-[23px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-[145px] h-[280px] lg:w-[390px] lg:h-[500px] b-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: step.imageSrcMobile || step.imageSrc,
                                        alt: "".concat(step.title, " - left"),
                                        className: "w-full h-full object-contain lg:hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 17,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: step.imageSrc,
                                        alt: "".concat(step.title, " - left"),
                                        className: "w-full h-full object-contain hidden lg:block"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 22,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                lineNumber: 16,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-[145px] h-[280px] lg:w-[390px] lg:h-[500px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: step.imageSrc2Mobile || step.imageSrc2,
                                        alt: "".concat(step.title, " - right"),
                                        className: "w-full h-full object-contain lg:hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 29,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: step.imageSrc2,
                                        alt: "".concat(step.title, " - right"),
                                        className: "w-full h-full object-contain hidden lg:block"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 34,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                        lineNumber: 15,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[45px] -left-[45px] lg:top-[90px] lg:-left-[118px] w-[172px] h-[22px] lg:w-[460px] lg:h-[156px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/landing/tab2-mob1.png",
                                alt: "",
                                className: "w-full h-full object-contain"
                            }, void 0, false, {
                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-[80px] left-[30px] lg:-top-[70px] lg:-left-[60px] text-[#344054] text-[12px] lg:text-[24px] font-[500] font-geologica",
                                style: {
                                    fontFamily: "'Geologica', sans-serif"
                                },
                                children: [
                                    "Вивчає все ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 47,
                                        columnNumber: 28
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " про товар"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[80px] right-[-25px] lg:bottom-[100px] lg:right-[-150px] w-[129px] h-[82px] lg:w-[441px] lg:h-[108px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/landing/tab2-mob2.png",
                                alt: "",
                                className: "w-full h-full object-contain sm:hidden"
                            }, void 0, false, {
                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                lineNumber: 54,
                                columnNumber: 16
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-[151px] right-[2px] lg:-top-[203px] lg:right-[25px] text-[#344054] text-[12px] lg:text-[24px] font-[500] text-right w-[125px] lg:w-[250px] font-geologica",
                                style: {
                                    fontFamily: "'Geologica', sans-serif"
                                },
                                children: [
                                    "Обирає вагу,",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "hidden sm:block"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 56,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " колір та інші",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "hidden sm:block"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 56,
                                        columnNumber: 76
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " параметри"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                lineNumber: 14,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : // Default layout for other steps
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[244px] h-[300px] lg:w-[487px] lg:h-[600px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        children: step.imageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: step.imageSrc,
                            alt: step.title,
                            fill: true,
                            className: "object-contain w-[244px] h-[250px] lg:w-[487px] lg:h-[500px]"
                        }, void 0, false, {
                            fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                            lineNumber: 65,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    step.id === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[80px] -left-[24px] lg:top-[160px] lg:-left-[88px] w-[186px] h-[60px] lg:w-[460px] lg:h-[156px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/landing/tab1-mob.png",
                                        alt: "",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 77,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-[100px] -left-[25px] lg:-top-[40px] lg:-left-[110px] text-[#344054] text-[12px] lg:text-[24px] font-[500] font-geologica",
                                        style: {
                                            fontFamily: "'Geologica', sans-serif"
                                        },
                                        children: [
                                            "Скористуйтесь ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                                lineNumber: 80,
                                                columnNumber: 35
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " пошуком"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 79,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                lineNumber: 76,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[50px] left-[130px] lg:bottom-[100px] lg:left-[200px] w-[166px] h-[40px] lg:w-[441px] lg:h-[108px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/landing/tab1-mob2.png",
                                        alt: "",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 85,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-[116px] -right-[12px] lg:bottom-[73px] lg:-right-[145px] text-[#344054] text-[12px] lg:text-[24px] font-[500] text-right w-[96px] lg:w-[192px] font-geologica",
                                        style: {
                                            fontFamily: "'Geologica', sans-serif"
                                        },
                                        children: "або оберіть категорію"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 86,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                lineNumber: 84,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    step.id === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[10px] right-[95px] lg:top-[20px] lg:right-[190px] w-[230px] h-[78px] lg:w-[460px] lg:h-[156px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/landing/tab3-mob1.png",
                                        alt: "",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 96,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-[35px] right-[95px] lg:-top-[40px] lg:right-[350px] text-[#344054] text-[12px] lg:text-[24px] font-[500] text-right font-geologica text-nowrap",
                                        style: {
                                            fontFamily: "'Geologica', sans-serif"
                                        },
                                        children: "Порівняй ціни"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 98,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                lineNumber: 95,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[35px] left-[110px] lg:bottom-[220px] lg:left-[280px] w-[180px] h-[130px] lg:w-[441px] lg:h-[108px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/landing/tab3-mob2.png",
                                        alt: "",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 104,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute flex flex-col -top-[166px] -right-[12px] lg:bottom-[73px] lg:-right-[105px] text-[#344054] text-[12px] lg:text-[24px] font-[500]  font-geologica text-right justify-end items-end",
                                        style: {
                                            fontFamily: "'Geologica', sans-serif"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Швидко знаходить "
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                                lineNumber: 106,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "магазин на мапі"
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 105,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                lineNumber: 103,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    step.id === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[135px] -left-[45px] lg:bottom-[290px] lg:-left-[150px] w-[188px] h-[50px] lg:w-[406px] lg:h-[108px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/landing/tab4-mob1.png",
                                        alt: "",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 116,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-[150px] -left-[15px] lg:bottom-[90px] lg:-left-[170px] text-[#344054] text-[12px] lg:text-[24px] font-[500] font-geologica",
                                        style: {
                                            fontFamily: "'Geologica', sans-serif"
                                        },
                                        children: [
                                            "Керуй товарами з",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "lg:hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                                lineNumber: 119,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " зручної",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "hidden lg:block"
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                                lineNumber: 119,
                                                columnNumber: 72
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " адмін панелі"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                lineNumber: 115,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[15px] -right-[100px] lg:bottom-[100px] lg:-right-[200px] w-[182px] h-[219px] lg:w-[353px] lg:h-[424px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/landing/tab4-mob2.png",
                                        alt: "",
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 124,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute flex flex-col -top-[100px] right-[72px] lg:-top-[45px] lg:-right-[145px] text-[#344054] text-[12px] lg:text-[24px] font-[500] text-right w-[96px] lg:w-[192px] font-geologica justify-end items-end",
                                        style: {
                                            fontFamily: "'Geologica', sans-serif"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-nowrap",
                                                children: "легко редагуй ціни"
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "та знижки"
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                                lineNumber: 127,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                                lineNumber: 123,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
                lineNumber: 62,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StepContent;
var _c;
__turbopack_context__.k.register(_c, "StepContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HowItWorksSection",
    ()=>HowItWorksSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$how$2d$it$2d$works$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/src/features/how-it-works/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$how$2d$it$2d$works$2f$components$2f$StepNumbers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/src/features/how-it-works/components/StepNumbers.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$how$2d$it$2d$works$2f$components$2f$StepContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/src/features/how-it-works/components/StepContent.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const HowItWorksSection = ()=>{
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const handleStepClick = (step)=>{
        setCurrentStep(step);
    };
    const currentStepData = __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$how$2d$it$2d$works$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOW_IT_WORKS_DATA"].steps.find((step)=>step.id === currentStep) || __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$how$2d$it$2d$works$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOW_IT_WORKS_DATA"].steps[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt-12 lg:pt-20 relative bg-[#f0f0f0] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-[100px] -right-[0] w-[239px] h-[447px] z-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "239",
                            height: "447",
                            viewBox: "0 0 239 447",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "w-full h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    filter: "url(#filter0_f_7325_246913)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "223",
                                        cy: "223.436",
                                        r: "91",
                                        fill: "#D5BDFF"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                        id: "filter0_f_7325_246913",
                                        x: "0.115936",
                                        y: "0.551483",
                                        width: "445.768",
                                        height: "445.768",
                                        filterUnits: "userSpaceOnUse",
                                        colorInterpolationFilters: "sRGB",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                                floodOpacity: "0",
                                                result: "BackgroundImageFix"
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                                                lineNumber: 29,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                                mode: "normal",
                                                in: "SourceGraphic",
                                                in2: "BackgroundImageFix",
                                                result: "shape"
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                stdDeviation: "65.942",
                                                result: "effect1_foregroundBlur_7325_246913"
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                                                lineNumber: 31,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-[350px] left-0 w-[312px] h-[750px] z-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "312",
                            height: "750",
                            viewBox: "0 0 312 750",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "w-full h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    filter: "url(#filter0_f_7325_246912)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                        cx: "9",
                                        cy: "374.936",
                                        rx: "123",
                                        ry: "194.5",
                                        fill: "#DFFFB5"
                                    }, void 0, false, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                        id: "filter0_f_7325_246912",
                                        x: "-293.917",
                                        y: "0.519043",
                                        width: "605.833",
                                        height: "748.833",
                                        filterUnits: "userSpaceOnUse",
                                        colorInterpolationFilters: "sRGB",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                                floodOpacity: "0",
                                                result: "BackgroundImageFix"
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                                mode: "normal",
                                                in: "SourceGraphic",
                                                in2: "BackgroundImageFix",
                                                result: "shape"
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                stdDeviation: "89.9583",
                                                result: "effect1_foregroundBlur_7325_246912"
                                            }, void 0, false, {
                                                fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 hidden lg:block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-0 w-1/2 h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/landing/bg/how-work-green.svg",
                            alt: "",
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 top-0 w-1/2 h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/landing/bg/how-work-purple.svg",
                            alt: "",
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8 lg:mb-16 max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl lg:text-5xl font-bold text-[#344054] mb-2 lg:mb-4",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$how$2d$it$2d$works$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOW_IT_WORKS_DATA"].title
                            }, void 0, false, {
                                fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base lg:text-xl text-[#667085] leading-relaxed",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$how$2d$it$2d$works$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOW_IT_WORKS_DATA"].subtitle
                            }, void 0, false, {
                                fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$how$2d$it$2d$works$2f$components$2f$StepNumbers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepNumbers"], {
                        currentStep: currentStep,
                        totalSteps: __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$how$2d$it$2d$works$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOW_IT_WORKS_DATA"].steps.length,
                        onStepClick: handleStepClick
                    }, void 0, false, {
                        fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$features$2f$how$2d$it$2d$works$2f$components$2f$StepContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepContent"], {
                        step: currentStepData
                    }, void 0, false, {
                        fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/booking-landing/src/features/how-it-works/components/HowItWorksSection.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HowItWorksSection, "Zx2FzPyJq3Um4yZ93PecHmkcsLU=");
_c = HowItWorksSection;
var _c;
__turbopack_context__.k.register(_c, "HowItWorksSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/booking-landing/src/components/ui/accordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Accordion(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "accordion",
        ...props
    }, void 0, false, {
        fileName: "[project]/booking-landing/src/components/ui/accordion.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Accordion;
function AccordionItem(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "accordion-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/booking-landing/src/components/ui/accordion.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = AccordionItem;
function AccordionTrigger(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "accordion-trigger",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/booking-landing/src/components/ui/accordion.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/booking-landing/src/components/ui/accordion.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/booking-landing/src/components/ui/accordion.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = AccordionTrigger;
function AccordionContent(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "accordion-content",
        className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pt-0 pb-4", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/booking-landing/src/components/ui/accordion.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/booking-landing/src/components/ui/accordion.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c3 = AccordionContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Accordion");
__turbopack_context__.k.register(_c1, "AccordionItem");
__turbopack_context__.k.register(_c2, "AccordionTrigger");
__turbopack_context__.k.register(_c3, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/booking-landing/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = (param, ref)=>{
    let { className, type, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/booking-landing/src/components/ui/input.tsx",
        lineNumber: 9,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/booking-landing/src/components/footer/envelopes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Envelopes() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "48",
        height: "49",
        viewBox: "0 0 48 49",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_149_5111)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M38.4818 7.49753C38.4232 7.30712 38.2906 7.14812 38.1148 7.05587C37.9398 6.96428 37.7333 6.9445 37.5435 7.00319L30.3804 9.22525C29.9842 9.34825 29.763 9.76797 29.8861 10.1635L31.2191 14.4614C31.2777 14.6518 31.4103 14.8108 31.5861 14.903C31.6944 14.9601 31.8146 14.9895 31.9355 14.9895C32.0102 14.9895 32.0849 14.9785 32.1574 14.9558L39.3204 12.7337C39.7167 12.6107 39.9379 12.1909 39.8148 11.7954L38.4818 7.49753ZM32.4297 13.3012L31.5406 10.436L37.2711 8.65769L38.1602 11.5229L32.4297 13.3012Z",
                        fill: "#9270CB"
                    }, void 0, false, {
                        fileName: "[project]/booking-landing/src/components/footer/envelopes.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0.092082 45.0425C0.10802 45.093 0.128645 45.1384 0.154332 45.1837C0.166707 45.2057 0.169332 45.2305 0.184238 45.2515C0.194457 45.2661 0.211426 45.2711 0.222488 45.2847C0.274613 45.3492 0.336207 45.4006 0.406707 45.4449C0.432207 45.4608 0.453019 45.4816 0.48002 45.4943C0.577145 45.5401 0.682707 45.5702 0.79727 45.5702H41.2973C41.4118 45.5702 41.5175 45.5402 41.6146 45.4943C41.6416 45.4816 41.6623 45.4609 41.6877 45.445C41.7583 45.4007 41.82 45.3492 41.8721 45.2847C41.8831 45.2711 41.9001 45.2661 41.9103 45.2515C41.9251 45.2305 41.9277 45.2058 41.9401 45.1838C41.9659 45.1385 41.9865 45.0928 42.0025 45.0422C42.0179 44.9934 42.0269 44.9459 42.032 44.8957C42.0347 44.8696 42.0473 44.8469 42.0473 44.8201V30.7338L47.5192 29.0365C47.7096 28.978 47.8686 28.8454 47.9608 28.6696C48.0538 28.4938 48.0722 28.288 48.0135 28.0983L40.4579 3.74307C40.3356 3.34679 39.9174 3.12789 39.5197 3.24873L0.838238 15.2487C0.441957 15.3717 0.220801 15.7914 0.343895 16.187L1.08321 18.5702H0.79727C0.783863 18.5702 0.772707 18.5771 0.759488 18.5779C0.708676 18.5805 0.661426 18.5948 0.61202 18.6076C0.565238 18.6198 0.518645 18.6283 0.475895 18.6489C0.437176 18.6673 0.404926 18.6954 0.369395 18.7207C0.324863 18.7524 0.281176 18.7823 0.244613 18.8228C0.235988 18.8322 0.223988 18.8364 0.215738 18.8464C0.194082 18.873 0.187332 18.9053 0.169895 18.9338C0.142332 18.9785 0.115332 19.0212 0.0975195 19.0715C0.0798945 19.1214 0.0738008 19.1711 0.066957 19.2228C0.062457 19.2561 0.0473633 19.2857 0.0473633 19.3203V44.8203C0.0473633 44.8471 0.059832 44.8697 0.0626445 44.8959C0.0676133 44.946 0.076707 44.9935 0.092082 45.0425ZM30.9657 27.7387C31.1144 27.9204 31.3298 28.0148 31.548 28.0148C31.7142 28.0148 31.882 27.9598 32.0212 27.8463L40.5473 20.8989V43.3758L25.7452 32.9599L29.0212 30.2905C29.342 30.029 29.3904 29.5566 29.1288 29.235C28.8673 28.9157 28.3957 28.8652 28.0734 29.1274L21.0473 34.8527L2.90533 20.0702H39.1893L31.0735 26.6832C30.7526 26.9447 30.7043 27.4171 30.9657 27.7387ZM20.5735 36.4017C20.7112 36.5138 20.8796 36.5702 21.0474 36.5702C21.2151 36.5702 21.3836 36.5138 21.5213 36.4017L24.538 33.9435L38.9289 44.0702H3.16577L17.5567 33.9436L20.5735 36.4017ZM16.3494 32.9599L1.54727 43.3758V20.8989L16.3494 32.9599ZM1.99849 16.4593L39.2472 4.90314L46.359 27.8258L42.0473 29.1634V19.3202C42.0473 19.2856 42.0321 19.256 42.0276 19.2226C42.0208 19.171 42.0148 19.1213 41.9971 19.0715C41.9792 19.021 41.9522 18.9782 41.9246 18.9334C41.9071 18.905 41.9004 18.8728 41.8788 18.8463C41.8706 18.8363 41.8585 18.8321 41.8498 18.8226C41.8137 18.7825 41.7705 18.7531 41.7266 18.7215C41.6905 18.6958 41.6577 18.6673 41.6184 18.6486C41.5762 18.6283 41.5301 18.6199 41.4839 18.6077C41.4341 18.5947 41.3865 18.5803 41.3352 18.5777C41.3219 18.577 41.3107 18.57 41.2973 18.57H2.65343L1.99849 16.4593Z",
                        fill: "#9270CB"
                    }, void 0, false, {
                        fileName: "[project]/booking-landing/src/components/footer/envelopes.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/booking-landing/src/components/footer/envelopes.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_149_5111",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "48",
                        height: "48",
                        fill: "white",
                        transform: "translate(0 0.570312)"
                    }, void 0, false, {
                        fileName: "[project]/booking-landing/src/components/footer/envelopes.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/booking-landing/src/components/footer/envelopes.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/booking-landing/src/components/footer/envelopes.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/booking-landing/src/components/footer/envelopes.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Envelopes;
const __TURBOPACK__default__export__ = Envelopes;
var _c;
__turbopack_context__.k.register(_c, "Envelopes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/booking-landing/src/components/footer/footer-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$components$2f$footer$2f$envelopes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/src/components/footer/envelopes.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FooterForm() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!email) return;
        setIsSubmitting(true);
        try {
            console.log("Отправка данных:", {
                email
            });
            await new Promise((resolve)=>setTimeout(resolve, 1000));
            alert("Спасибо за подписку!");
            setEmail("");
        } catch (error) {
            console.error("Ошибка при отправке:", error);
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex max-w-[486px] flex-col gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold flex items-center gap-4 text-lg leading-tight text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$components$2f$footer$2f$envelopes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/booking-landing/src/components/footer/footer-form.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    "Підпишіться, щоб отримувати найкращі пропозиції першим"
                ]
            }, void 0, true, {
                fileName: "[project]/booking-landing/src/components/footer/footer-form.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        type: "email",
                        placeholder: "Email",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        className: "rounded-full !bg-white flex-1",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/booking-landing/src/components/footer/footer-form.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: isSubmitting,
                        className: "bg-purple-500 hover:bg-purple-600 text-white w-[200px] rounded-full",
                        children: isSubmitting ? "Підписка..." : "Підписатись"
                    }, void 0, false, {
                        fileName: "[project]/booking-landing/src/components/footer/footer-form.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/booking-landing/src/components/footer/footer-form.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/booking-landing/src/components/footer/footer-form.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(FooterForm, "Pz9uA3A7wRZx1TdThW56fVKPLxQ=");
_c = FooterForm;
const __TURBOPACK__default__export__ = FooterForm;
var _c;
__turbopack_context__.k.register(_c, "FooterForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/booking-landing/src/components/footer/footer-menu-list.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FooterMenuList",
    ()=>FooterMenuList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/booking-landing/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function FooterMenuList(param) {
    let { title, items, className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-white font-medium min-w-[176px]", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-sm mb-4 font-semibold",
                children: title
            }, void 0, false, {
                fileName: "[project]/booking-landing/src/components/footer/footer-menu-list.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid gap-2",
                children: items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.url,
                                className: "flex items-center gap-2 text-base hover:underline hover:text-purple-300 transition-colors",
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/booking-landing/src/components/footer/footer-menu-list.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$booking$2d$landing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs bg-purple-500 text-white px-2 py-1 rounded-full capitalize",
                                children: item.badge
                            }, void 0, false, {
                                fileName: "[project]/booking-landing/src/components/footer/footer-menu-list.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/booking-landing/src/components/footer/footer-menu-list.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/booking-landing/src/components/footer/footer-menu-list.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/booking-landing/src/components/footer/footer-menu-list.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = FooterMenuList;
var _c;
__turbopack_context__.k.register(_c, "FooterMenuList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=booking-landing_src_f47e50b4._.js.map