"use strict";
(self['webpackChunkthrift_to_ts_online'] = self['webpackChunkthrift_to_ts_online'] || []).push([["page"], {
"./src/routes/globals.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1742576746299
        var cssReload = (__webpack_require__("./node_modules/.pnpm/@rspack+core@1.2.3_@swc+helpers@0.5.15/node_modules/@rspack/core/dist/cssExtractHmr.js")/* .cssReload */.cssReload)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

}),
"./src/routes/page.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Home)
});
/* ESM import */var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_async_to_generator.js");
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var react_codemirror2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/.pnpm/react-codemirror2@8.0.1_codemirror@5.65.18_react@18.3.1/node_modules/react-codemirror2/index.js");
/* ESM import */var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/.pnpm/codemirror@5.65.18/node_modules/codemirror/lib/codemirror.css");
/* ESM import */var codemirror_theme_dracula_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/.pnpm/codemirror@5.65.18/node_modules/codemirror/theme/dracula.css");
/* ESM import */var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/.pnpm/codemirror@5.65.18/node_modules/codemirror/mode/javascript/javascript.js");
/* ESM import */var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_5__);
/* ESM import */var _lib_thriftNew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/lib/thriftNew/index.ts");
/* ESM import */var _lib_thriftNew_print__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/lib/thriftNew/print.ts");
/* ESM import */var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/.pnpm/@mui+material@6.4.8_@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1__@emotion+styled_y5vsc26lldyyteghro2uwoy5n4/node_modules/@mui/material/Tabs/Tabs.js");
/* ESM import */var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/.pnpm/@mui+material@6.4.8_@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1__@emotion+styled_y5vsc26lldyyteghro2uwoy5n4/node_modules/@mui/material/Tab/Tab.js");
/* ESM import */var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/.pnpm/@mui+material@6.4.8_@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1__@emotion+styled_y5vsc26lldyyteghro2uwoy5n4/node_modules/@mui/material/Button/Button.js");
/* ESM import */var _globals_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/routes/globals.css");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


var _s = $RefreshSig$();



 // 使用 Dracula 主题
 // 引入 JavaScript 语法高亮






var START_THRIFT = "namespace java com.example.thrift\nnamespace py example.thrift\n\nconst string test = 'test'\n\n// 定义一个枚举类型，表示用户的状态\nenum UserStatus {\n    ACTIVE = 0,  // 用户活跃\n    INACTIVE = 1,  // 用户不活跃\n    SUSPENDED = 2,  // 用户被暂停\n    DELETED = 3  // 用户已删除\n}\n\n// 定义一个枚举类型，表示订单的状态\nenum OrderStatus {\n    PENDING = 0,  // 待处理\n    SHIPPED = 1,  // 已发货\n    DELIVERED = 2,  // 已送达\n    CANCELED = 3  // 已取消\n}\n\n// 定义一个复杂数据结构 - 用户\nstruct User {\n    1: required i32 user_id;  // 必选的用户ID\n    2: required string name;  // 必选的用户名\n    3: optional string email;  // 可选的电子邮件\n    4: required UserStatus status;  // 必选的用户状态\n    5: optional string phone_number;  // 可选的电话号码\n    6: required i64 created_at;  // 必选的创建时间\n    7: optional i64 last_login;  // 可选的最后登录时间\n    8: optional map<string, string> preferences;  // 可选的用户偏好设置\n    9: optional list<i32> friend_ids;  // 可选的朋友ID列表\n}\n\n// 定义一个复杂数据结构 - 地址\nstruct Address {\n    1: required string street;  // 必选的街道\n    2: required string city;  // 必选的城市\n    3: required string state;  // 必选的州\n    4: required string country;  // 必选的国家\n    5: required string zip_code;  // 必选的邮政编码\n    6: optional string phone_number;  // 可选的地址关联电话号码\n}\n\n// 定义一个复杂数据结构 - 订单\nstruct Order {\n    1: required i32 order_id;  // 必选的订单ID\n    2: required i32 user_id;  // 必选的用户ID（订单关联的用户）\n    3: required list<i32> product_ids;  // 必选的产品ID列表\n    4: required double total_amount;  // 必选的订单总金额\n    5: required OrderStatus status;  // 必选的订单状态\n    6: required i64 created_at;  // 必选的创建时间\n    7: optional string shipping_address;  // 可选的配送地址\n    8: optional Address billing_address;  // 可选的账单地址\n    9: optional i64 shipping_time;  // 可选的发货时间\n    10: optional list<string> order_notes;  // 可选的订单备注\n    11: optional map<string, string> order_metadata;  // 可选的订单元数据\n}\n\n// 定义一个复杂的数据结构 - 商品\nstruct Product {\n    1: required i32 product_id;  // 必选的商品ID\n    2: required string name;  // 必选的商品名称\n    3: required double price;  // 必选的商品价格\n    4: required string description;  // 必选的商品描述\n    5: optional string image_url;  // 可选的商品图片URL\n    6: optional bool in_stock;  // 可选的库存状态\n}\n\n// 定义一个复杂的数据结构 - 购物车\nstruct Cart {\n    1: required i32 cart_id;  // 必选的购物车ID\n    2: required i32 user_id;  // 必选的用户ID\n    3: required list<Product> products;  // 必选的商品列表\n    4: required double total_price;  // 必选的购物车总价格\n    5: optional i64 created_at;  // 可选的购物车创建时间\n    6: optional bool is_active;  // 可选的购物车是否有效\n}\n\n// 定义一个复杂的数据结构 - 支付信息\nstruct PaymentInfo {\n    1: required string payment_method;  // 必选的支付方式\n    2: required double amount;  // 必选的支付金额\n    3: required i64 payment_time;  // 必选的支付时间\n    4: optional string transaction_id;  // 可选的交易ID\n    5: optional string payment_status;  // 可选的支付状态\n}\n\n// 定义一个包含多个复杂结构的复杂数据结构\nstruct UserProfile {\n    1: required i32 user_id;  // 必选的用户ID\n    2: required string username;  // 必选的用户名\n    3: optional string avatar_url;  // 可选的头像URL\n    4: required string bio;  // 必选的个人简介\n    5: optional list<Address> addresses;  // 可选的地址列表\n    6: required list<Order> orders;  // 必选的订单列表\n    7: optional Cart cart;  // 可选的购物车\n    8: optional list<PaymentInfo> payment_history;  // 可选的支付历史\n}\n\nstruct MyStruct {\n	1: optional string test\n}\n\nservice MyService {\n	void ping()\n}\n\n// 服务接口，定义用户相关操作\nservice UserService {\n    // 创建新用户\n    void createUser(1: required string name, 2: required string email);\n\n    // 获取用户资料\n    UserProfile getUserProfile(1: required i32 user_id);\n\n    // 更新用户资料\n    void updateUserProfile(1: required i32 user_id, 2: required UserProfile user_profile);\n\n    // 获取用户的所有订单\n    list<Order> getUserOrders(1: required i32 user_id);\n\n    // 创建一个新的订单\n    void createOrder(1: required i32 user_id, 2: required list<i32> product_ids, 3: required double total_amount);\n\n    // 获取订单详情\n    Order getOrderDetails(1: required i32 order_id);\n}\n\n// 服务接口，定义订单相关操作\nservice OrderService {\n    // 创建新订单\n    void createOrder(1: required i32 user_id, 2: required list<i32> product_ids, 3: required double total_amount);\n\n    // 获取订单信息\n    Order getOrder(1: required i32 order_id);\n\n    // 更新订单状态\n    void updateOrderStatus(1: required i32 order_id, 2: required OrderStatus status);\n}\n\n// 服务接口，定义商品相关操作\nservice ProductService {\n    // 获取商品列表\n    list<Product> getProducts(1: required i32 page, 2: required i32 page_size);\n\n    // 获取单个商品详情\n    Product getProductDetails(1: required i32 product_id);\n}\n";
function Home() {
    _s();
    var [thrift, setThrift] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(START_THRIFT);
    var [tsCode, setTsCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var handleChange = (editor, data, value)=>{
        setThrift(value);
    };
    var handleClick = /*#__PURE__*/ function() {
        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_9__._)(function*() {
            var ast = (0,_lib_thriftNew__WEBPACK_IMPORTED_MODULE_6__.parser)("", thrift);
            var tsCode = yield (0,_lib_thriftNew_print__WEBPACK_IMPORTED_MODULE_7__.print)(ast);
            // const result = await prettier(tsCode);
            setTsCode(tsCode);
        });
        return function handleClick() {
            return _ref.apply(this, arguments);
        };
    }();
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "App flex px-[15px] py-[15px] flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_10__["default"], {
                value: 0,
                indicatorColor: "secondary",
                textColor: "inherit",
                "aria-label": "full width tabs example",
                sx: {
                    ".MuiTab-root": {
                        textTransform: "none"
                    }
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        label: "Thrift 转换 Typescript",
                        value: 0
                    }, void 0, false, {
                        fileName: "/Users/didi/Desktop/github/thrift-to-ts-online/src/routes/page.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        value: 1,
                        disabled: true
                    }, void 0, false, {
                        fileName: "/Users/didi/Desktop/github/thrift-to-ts-online/src/routes/page.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/didi/Desktop/github/thrift-to-ts-online/src/routes/page.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_codemirror2__WEBPACK_IMPORTED_MODULE_2__.Controlled, {
                        value: thrift,
                        options: {
                            mode: "javascript",
                            theme: "dracula",
                            lineNumbers: true,
                            indentUnit: 2,
                            tabSize: 2,
                            autoCloseBrackets: true,
                            matchBrackets: true,
                            showCursorWhenSelecting: true,
                            lineWrapping: true
                        },
                        onBeforeChange: handleChange
                    }, void 0, false, {
                        fileName: "/Users/didi/Desktop/github/thrift-to-ts-online/src/routes/page.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "mx-[10px] flex",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
                            style: {
                                margin: "auto"
                            },
                            className: "h-[30px]",
                            variant: "contained",
                            onClick: handleClick,
                            children: "转换"
                        }, void 0, false, {
                            fileName: "/Users/didi/Desktop/github/thrift-to-ts-online/src/routes/page.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/didi/Desktop/github/thrift-to-ts-online/src/routes/page.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_codemirror2__WEBPACK_IMPORTED_MODULE_2__.UnControlled, {
                        value: tsCode,
                        options: {
                            mode: "javascript",
                            theme: "dracula",
                            lineNumbers: true,
                            indentUnit: 2,
                            tabSize: 2,
                            autoCloseBrackets: true,
                            matchBrackets: true,
                            showCursorWhenSelecting: true,
                            readOnly: true,
                            lineWrapping: true
                        }
                    }, void 0, false, {
                        fileName: "/Users/didi/Desktop/github/thrift-to-ts-online/src/routes/page.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/didi/Desktop/github/thrift-to-ts-online/src/routes/page.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/didi/Desktop/github/thrift-to-ts-online/src/routes/page.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
_s(Home, "mgws+dB7nAv9ASOZEFmCOz7PIAg=");
_c = Home;
var _c;
$RefreshReg$(_c, "Home");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),

}]);
//# sourceMappingURL=page.js.map