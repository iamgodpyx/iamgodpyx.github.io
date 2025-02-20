"use strict";
(self['webpackChunkthrift_to_ts_online'] = self['webpackChunkthrift_to_ts_online'] || []).push([["page"], {
"./src/routes/globals.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1740020081923
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
"./src/lib/thriftNew/@creditkarma/thrift-parser/debugger.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createDebugger: () => (createDebugger),
  noopReporter: () => (noopReporter)
});
/* ESM import */var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/types.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

function noopReporter(err) {
    throw new Error("".concat(err.type, ": Line: ").concat(err.loc.start.line, ": ").concat(err.message));
}
function padLeft(num, str) {
    while(str.length < num){
        str = ' ' + str;
    }
    return str;
}
function indicatorForLocaction(loc) {
    var indicator = padLeft(loc.start.column, '^');
    return indicator;
}
function padStart(length, str) {
    var paddedStr = str;
    while(length--){
        paddedStr = ' ' + paddedStr;
    }
    return paddedStr;
}
function errorType(type) {
    switch(type){
        case _types__WEBPACK_IMPORTED_MODULE_0__.ErrorType.ParseError:
            return 'Parse Error:';
        case _types__WEBPACK_IMPORTED_MODULE_0__.ErrorType.ScanError:
            return 'Scan Error:';
    }
}
function createDebugger(source) {
    // const sourceLines: Array<string> = source.split(os.EOL)
    var sourceLines = source.split('\n');
    var formattedErrors = [];
    var rawErrors = [];
    function getSourceLine(lineNumber) {
        return sourceLines[lineNumber - 1];
    }
    function formatError(err) {
        return {
            sourceLine: getSourceLine(err.loc.start.line),
            locIndicator: indicatorForLocaction(err.loc),
            line: err.loc.start.line,
            column: err.loc.start.column,
            message: err.message,
            type: err.type
        };
    }
    return {
        hasError () {
            return formattedErrors.length > 0;
        },
        getErrors () {
            return rawErrors;
        },
        getFormattedErrors () {
            return formattedErrors;
        },
        report (err) {
            var formattedError = formatError(err);
            formattedErrors.push(formattedError);
            rawErrors.push(err);
        },
        print () {
            console.log("Parse Failure: ".concat(formattedErrors.length, " errors found:"));
            console.log();
            formattedErrors.forEach((err)=>{
                var prefix = "".concat(err.line, " | ");
                console.log();
                console.log("".concat(errorType(err.type), "\n"));
                console.log("Message: ".concat(err.message));
                console.log();
                console.log("".concat(prefix).concat(err.sourceLine));
                console.log(padStart(prefix.length, err.locIndicator));
                console.log();
            });
        }
    };
}

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
"./src/lib/thriftNew/@creditkarma/thrift-parser/factory.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  creataePropertyAssignment: () => (creataePropertyAssignment),
  createBooleanLiteral: () => (createBooleanLiteral),
  createConstList: () => (createConstList),
  createConstMap: () => (createConstMap),
  createDoubleConstant: () => (createDoubleConstant),
  createExponentialLiteral: () => (createExponentialLiteral),
  createFieldDefinition: () => (createFieldDefinition),
  createFieldID: () => (createFieldID),
  createFloatLiteral: () => (createFloatLiteral),
  createHexLiteral: () => (createHexLiteral),
  createIdentifier: () => (createIdentifier),
  createIntConstant: () => (createIntConstant),
  createIntegerLiteral: () => (createIntegerLiteral),
  createKeywordFieldType: () => (createKeywordFieldType),
  createListFieldType: () => (createListFieldType),
  createMapFieldType: () => (createMapFieldType),
  createParseError: () => (createParseError),
  createScanError: () => (createScanError),
  createSetFieldType: () => (createSetFieldType),
  createStringLiteral: () => (createStringLiteral),
  createStructDefinition: () => (createStructDefinition),
  createTextLocation: () => (createTextLocation),
  createTextPosition: () => (createTextPosition),
  createToken: () => (createToken)
});
/* ESM import */var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/types.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

function createParseError(message, loc) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.ErrorType.ParseError,
        message,
        loc
    };
}
function createScanError(message, loc) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.ErrorType.ScanError,
        message,
        loc
    };
}
function createTextLocation(start, end) {
    return {
        start,
        end
    };
}
function createTextPosition(line, column, index) {
    return {
        line,
        column,
        index
    };
}
function createToken(type, text, loc) {
    return {
        type,
        text,
        loc
    };
}
function createIdentifier(value, loc, annotations) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier,
        value,
        loc,
        annotations
    };
}
function creataePropertyAssignment(name, initializer, loc) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.PropertyAssignment,
        name,
        initializer,
        loc
    };
}
function createFieldDefinition(name, fieldID, requiredness, fieldType, loc) {
    var defaultValue = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, annotations = arguments.length > 6 ? arguments[6] : void 0, comments = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [];
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.FieldDefinition,
        name,
        fieldID,
        requiredness,
        fieldType,
        defaultValue,
        annotations,
        comments,
        loc
    };
}
function createFieldID(value, loc) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.FieldID,
        value,
        loc
    };
}
function createStructDefinition(name, fields, loc) {
    var comments = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StructDefinition,
        name,
        fields,
        comments,
        loc
    };
}
function createStringLiteral(value, loc) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StringLiteral,
        value,
        loc
    };
}
function createIntegerLiteral(value, loc) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.IntegerLiteral,
        value,
        loc
    };
}
function createHexLiteral(value, loc) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.HexLiteral,
        value,
        loc
    };
}
function createFloatLiteral(value, loc) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.FloatLiteral,
        value,
        loc
    };
}
function createExponentialLiteral(value, loc) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ExponentialLiteral,
        value,
        loc
    };
}
function createIntConstant(value, loc) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.IntConstant,
        value,
        loc
    };
}
function createDoubleConstant(value, loc) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.DoubleConstant,
        value,
        loc
    };
}
function createBooleanLiteral(value, loc) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.BooleanLiteral,
        value,
        loc
    };
}
function createKeywordFieldType(type, loc, annotations) {
    return {
        type,
        loc,
        annotations
    };
}
function createMapFieldType(keyType, valueType, loc, annotations) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.MapType,
        keyType,
        valueType,
        loc,
        annotations
    };
}
function createSetFieldType(valueType, loc, annotations) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.SetType,
        valueType,
        loc,
        annotations
    };
}
function createListFieldType(valueType, loc, annotations) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ListType,
        valueType,
        loc,
        annotations
    };
}
function createConstMap(properties, loc) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ConstMap,
        properties,
        loc
    };
}
function createConstList(elements, loc) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ConstList,
        elements,
        loc
    };
}

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
"./src/lib/thriftNew/@creditkarma/thrift-parser/index.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ErrorType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.ErrorType),
  SyntaxType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.SyntaxType),
  creataePropertyAssignment: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.creataePropertyAssignment),
  createBooleanLiteral: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createBooleanLiteral),
  createConstList: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createConstList),
  createConstMap: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createConstMap),
  createDoubleConstant: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createDoubleConstant),
  createExponentialLiteral: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createExponentialLiteral),
  createFieldDefinition: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createFieldDefinition),
  createFieldID: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createFieldID),
  createFloatLiteral: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createFloatLiteral),
  createHexLiteral: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createHexLiteral),
  createIdentifier: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createIdentifier),
  createIntConstant: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createIntConstant),
  createIntegerLiteral: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createIntegerLiteral),
  createKeywordFieldType: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createKeywordFieldType),
  createListFieldType: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createListFieldType),
  createMapFieldType: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createMapFieldType),
  createParseError: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createParseError),
  createParser: () => (/* reexport safe */ _parser__WEBPACK_IMPORTED_MODULE_2__.createParser),
  createScanError: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createScanError),
  createScanner: () => (/* reexport safe */ _scanner__WEBPACK_IMPORTED_MODULE_3__.createScanner),
  createSetFieldType: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createSetFieldType),
  createStringLiteral: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createStringLiteral),
  createStructDefinition: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createStructDefinition),
  createTextLocation: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createTextLocation),
  createTextPosition: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createTextPosition),
  createToken: () => (/* reexport safe */ _factory__WEBPACK_IMPORTED_MODULE_5__.createToken),
  defaultOptions: () => (defaultOptions),
  parse: () => (parse)
});
/* ESM import */var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_object_spread.js");
/* ESM import */var _debugger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/debugger.ts");
/* ESM import */var _organizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/organizer.ts");
/* ESM import */var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/parser.ts");
/* ESM import */var _scanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/scanner.ts");
/* ESM import */var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/types.ts");
/* ESM import */var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/factory.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
// import * as fs from "node:fs";
// import * as path from "path";










var defaultOptions = {
    fastFail: false,
    rootDir: ".",
    outDir: ".",
    files: [],
    organize: true,
    reservedWord: "error"
};
// export function parseFiles(
//   options: Partial<ParseOptions> = {}
// ): Array<ThriftDocument | ThriftErrors> {
//   const mergedOptions: ParseOptions = { ...defaultOptions, ...options };
//   return mergedOptions.files.map(
//     (file: string): ThriftDocument | ThriftErrors => {
//       const filePath: string = path.resolve(
//         process.cwd(),
//         mergedOptions.rootDir,
//         file
//       );
//       const content: string = fs.readFileSync(filePath, "utf-8");
//       return parse(content, mergedOptions);
//     }
//   );
// }
function parse(source) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    // HACK: 末尾加上一个不存在的const来获取末尾的注释
    source += "\nconst i32 liuqi=1995";
    var mergedOptions = (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_6__._)({}, defaultOptions, options);
    var debug = (0,_debugger__WEBPACK_IMPORTED_MODULE_0__.createDebugger)(source);
    var scanner = (0,_scanner__WEBPACK_IMPORTED_MODULE_3__.createScanner)(source, handleError);
    var tokens = scanner.scan();
    var parser = (0,_parser__WEBPACK_IMPORTED_MODULE_2__.createParser)(tokens, handleError, {
        reservedWord: options.reservedWord
    });
    var intermediate = parser.parse();
    var thrift = mergedOptions.organize ? (0,_organizer__WEBPACK_IMPORTED_MODULE_1__.organize)(intermediate) : intermediate;
    /**
   * This is a safe handler for errors that allows the parser and scanner to recover to a
   * reasonable state after an error and continue with the parse. If an error occurs we will
   * not return any output, but using this allows us to catch more errors and report them to
   * the user at once instead of the work flow of find error -> fix error, find error -> fix error.
   *
   * @param err
   */ function handleError(err) {
        debug.report(err);
        if (mergedOptions.fastFail) {
            debug.print();
            throw new Error(err.message);
        } else {
            switch(err.type){
                case _types__WEBPACK_IMPORTED_MODULE_4__.ErrorType.ParseError:
                    parser.synchronize();
                    break;
                case _types__WEBPACK_IMPORTED_MODULE_4__.ErrorType.ScanError:
                    scanner.syncronize();
                    break;
            }
        }
    }
    if (debug.hasError()) {
        debug.print();
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_4__.SyntaxType.ThriftErrors,
            errors: debug.getErrors()
        };
    } else {
        return thrift;
    }
}

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
"./src/lib/thriftNew/@creditkarma/thrift-parser/keywords.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  KEYWORDS: () => (KEYWORDS),
  RESERVEDWORDS: () => (RESERVEDWORDS)
});
/* ESM import */var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/types.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var KEYWORDS = {
    namespace: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.NamespaceKeyword,
    include: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.IncludeKeyword,
    cpp_include: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CppIncludeKeyword,
    const: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ConstKeyword,
    struct: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StructKeyword,
    service: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ServiceKeyword,
    extends: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ExtendsKeyword,
    throws: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ThrowsKeyword,
    typedef: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.TypedefKeyword,
    union: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.UnionKeyword,
    enum: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EnumKeyword,
    senum: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.SenumKeyword,
    list: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ListKeyword,
    set: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.SetKeyword,
    map: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.MapKeyword,
    double: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.DoubleKeyword,
    i8: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I8Keyword,
    i16: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I16Keyword,
    i32: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I32Keyword,
    i64: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I64Keyword,
    exception: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ExceptionKeyword,
    binary: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.BinaryKeyword,
    bool: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.BoolKeyword,
    byte: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ByteKeyword,
    required: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.RequiredKeyword,
    optional: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.OptionalKeyword,
    string: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StringKeyword,
    true: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.TrueKeyword,
    false: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.FalseKeyword,
    void: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.VoidKeyword,
    oneway: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.OnewayKeyword
};
var RESERVEDWORDS = [
    'break',
    'case',
    'catch',
    'class',
    'const',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'else',
    'enum',
    'export',
    'extends',
    'false',
    'finally',
    'for',
    'function',
    'if',
    'import',
    'in',
    'instanceof',
    'new',
    'null',
    'return',
    'super',
    'switch',
    'this',
    'throw',
    'true',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'with'
];

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
"./src/lib/thriftNew/@creditkarma/thrift-parser/organizer.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  organize: () => (organize)
});
/* ESM import */var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/types.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

function organize(raw) {
    var namespaces = [];
    var includes = [];
    var constants = [];
    var enums = [];
    var typedefs = [];
    var structs = [];
    var unions = [];
    var exceptions = [];
    var services = [];
    for (var next of raw.body){
        switch(next.type){
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.NamespaceDefinition:
                namespaces.push(next);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.IncludeDefinition:
                includes.push(next);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CppIncludeDefinition:
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ConstDefinition:
                constants.push(next);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EnumDefinition:
                enums.push(next);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StructDefinition:
                structs.push(next);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.UnionDefinition:
                unions.push(next);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ExceptionDefinition:
                exceptions.push(next);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.TypedefDefinition:
                typedefs.push(next);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ServiceDefinition:
                services.push(next);
                break;
            default:
                var msg = next;
                throw new Error("Unexpected statement type found: ".concat(msg));
        }
    }
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ThriftDocument,
        body: [
            ...namespaces,
            ...includes,
            ...enums,
            ...typedefs,
            ...constants,
            ...structs,
            ...unions,
            ...exceptions,
            ...services
        ],
        tokens: raw.tokens
    };
}

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
"./src/lib/thriftNew/@creditkarma/thrift-parser/parser.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createParser: () => (createParser)
});
/* ESM import */var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/types.ts");
/* ESM import */var _factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/factory.ts");
/* ESM import */var _debugger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/debugger.ts");
/* ESM import */var _keywords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/keywords.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
/* eslint-disable */ 



function isStatementBeginning(token) {
    switch(token.type){
        case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.NamespaceKeyword:
        case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.IncludeKeyword:
        case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ConstKeyword:
        case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StructKeyword:
        case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.UnionKeyword:
        case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ExceptionKeyword:
        case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ServiceKeyword:
        case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.TypedefKeyword:
        case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EnumKeyword:
            return true;
        default:
            return false;
    }
}
class ParseError extends Error {
    constructor(msg, loc){
        super(msg);
        this.message = msg;
        this.loc = loc;
    }
}
function createParser(tokens) {
    var report = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _debugger__WEBPACK_IMPORTED_MODULE_2__.noopReporter, options = arguments.length > 2 ? arguments[2] : void 0;
    var comments = [];
    var currentIndex = 0;
    // PUBLIC
    function parse() {
        var thrift = {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ThriftDocument,
            body: []
        };
        while(!isAtEnd()){
            try {
                var statement = parseStatement();
                if (statement !== null) {
                    thrift.body.push(statement);
                }
            } catch (e) {
                report((0,_factory__WEBPACK_IMPORTED_MODULE_1__.createParseError)(e.message, e.loc));
            }
        }
        return thrift;
    }
    // Finds the beginning of the next statement so we can continue parse after error.
    function synchronize() {
        while(!isAtEnd() && !isStatementBeginning(currentToken())){
            advance();
        }
    }
    function parseStatement() {
        var next = currentToken();
        // All Thrift statements must start with one of these types
        switch(next.type){
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.NamespaceKeyword:
                return parseNamespace();
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.IncludeKeyword:
                return parseInclude();
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ConstKeyword:
                return parseConst();
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StructKeyword:
                return parseStruct();
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.UnionKeyword:
                return parseUnion();
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ExceptionKeyword:
                return parseException();
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ServiceKeyword:
                return parseService();
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.TypedefKeyword:
                return parseTypedef();
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EnumKeyword:
                return parseEnum();
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentBlock:
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentLine:
                consumeComments();
                return null;
            default:
                throw reportError("Invalid start to Thrift statement ".concat(next.text));
        }
    }
    // IncludeDefinition → 'include' StringLiteral
    function parseInclude() {
        var _keywordToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.IncludeKeyword);
        var keywordToken = requireValue(_keywordToken, "'indcluded' keyword expected");
        var _pathToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StringLiteral);
        var pathToken = requireValue(_pathToken, "Include statement must include a path as string literal");
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.IncludeDefinition,
            path: (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createStringLiteral)(pathToken.text, pathToken.loc),
            comments: getComments(),
            loc: (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createTextLocation)(keywordToken.loc.start, pathToken.loc.end)
        };
    }
    // ServiceDefinition → 'service' Identifier ( 'extends' Identifier )? '{' Function* '} Annotations?'
    function parseService() {
        var leadingComments = getComments();
        var _keywordToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ServiceKeyword);
        var keywordToken = requireValue(_keywordToken, "Unable to find service keyword for service");
        var _nameToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier);
        var nameToken = requireValue(_nameToken, "Unable to find identifier for service");
        var extendsId = parseExtends();
        var _openBrace = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.LeftBraceToken);
        var openBrace = requireValue(_openBrace, "Expected opening curly brace");
        var functions = parseFunctions();
        var _closeBrace = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.RightBraceToken);
        var closeBrace = requireValue(_closeBrace, "Expected closing curly brace");
        var annotations = parseAnnotations();
        var location = (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createTextLocation)(keywordToken.loc.start, closeBrace.loc.end);
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ServiceDefinition,
            name: (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIdentifier)(nameToken.text, nameToken.loc),
            extends: extendsId,
            functions,
            annotations,
            comments: leadingComments,
            loc: location
        };
    }
    function parseExtends() {
        if (checkText("extends")) {
            var _keywordToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ExtendsKeyword);
            var keywordToken = requireValue(_keywordToken, "'extends keyword expected");
            var _nameToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier);
            var nameToken = requireValue(_nameToken, "Identifier expected after 'extends' keyword");
            return (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIdentifier)(nameToken.text, (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createTextLocation)(keywordToken.loc.start, nameToken.loc.end));
        } else {
            return null;
        }
    }
    function parseFunctions() {
        var functions = [];
        while(!check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.RightBraceToken)){
            if (check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentBlock, _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentLine)) {
                advance();
            } else {
                functions.push(parseFunction());
                if (isStatementBeginning(currentToken())) {
                    throw reportError("Closing curly brace expected, but new statement found");
                } else if (check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EOF)) {
                    throw reportError("Closing curly brace expected but reached end of file");
                }
            }
        }
        return functions;
    }
    // Function → 'oneway'? FunctionType Identifier '(' Field* ')' Throws? Annotations? ListSeparator?
    function parseFunction() {
        var leadingComments = getComments();
        var onewayToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.OnewayKeyword);
        var returnType = parseFunctionType();
        var _nameToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier);
        var nameToken = requireValue(_nameToken, "Unable to find function identifier");
        var params = parseParameterFields();
        var throws = parseThrows();
        var annotations = parseAnnotations();
        var listSeparator = readListSeparator();
        var endLoc = listSeparator !== null ? listSeparator.loc : throws !== null ? throws.loc : params.loc;
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.FunctionDefinition,
            name: (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIdentifier)(nameToken.text, nameToken.loc),
            returnType,
            fields: params.fields,
            throws: throws !== null ? throws.fields : [],
            annotations,
            comments: leadingComments,
            oneway: onewayToken !== null,
            modifiers: onewayToken !== null ? [
                onewayToken
            ] : [],
            loc: {
                start: returnType.loc.start,
                end: endLoc.end
            }
        };
    }
    function parseParameterFields() {
        var fields = [];
        var _openParen = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.LeftParenToken);
        var openParen = requireValue(_openParen, "Opening paren expected to start list of fields");
        while(!check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.RightParenToken)){
            readListSeparator();
            fields.push(parseField());
            if (isStatementBeginning(currentToken())) {
                throw reportError("Closing paren ')' expected, but new statement found");
            } else if (check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EOF)) {
                throw reportError("Closing paren ')' expected but reached end of file");
            }
        }
        var _closeParen = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.RightParenToken);
        var closeParen = requireValue(_closeParen, "Closing paren expected to end list of fields");
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ParametersDefinition,
            fields,
            loc: {
                start: openParen.loc.start,
                end: closeParen.loc.end
            }
        };
    }
    // Throws → 'throws' '(' Field* ')'
    function parseThrows() {
        if (check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ThrowsKeyword)) {
            var _keywordToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ThrowsKeyword);
            var keywordToken = requireValue(_keywordToken, "'throws' keyword expected");
            var params = parseParameterFields();
            return {
                type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ThrowsDefinition,
                fields: params.fields,
                loc: {
                    start: keywordToken.loc.start,
                    end: params.loc.end
                }
            };
        }
        return null;
    }
    // Namespace → 'namespace' ( NamespaceScope Identifier )
    function parseNamespace() {
        var _keywordToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.NamespaceKeyword);
        var keywordToken = requireValue(_keywordToken, "'namespace' keyword expected");
        var _scopeToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier);
        var scopeToken = requireValue(_scopeToken, "Unable to find scope identifier for namespace");
        var _nameToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier);
        if (_nameToken && (options === null || options === void 0 ? void 0 : options.reservedWord) === "escape") {
            var nameTokenText = escapeReservedWordForIdentifier(_nameToken.text);
            _nameToken.text = nameTokenText;
        }
        var nameToken = requireValue(_nameToken, "Unable to find name identifier for namespace");
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.NamespaceDefinition,
            scope: (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIdentifier)(scopeToken.text, scopeToken.loc),
            name: (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIdentifier)(nameToken.text, nameToken.loc),
            comments: getComments(),
            loc: (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createTextLocation)(keywordToken.loc.start, nameToken.loc.end)
        };
    }
    // ConstDefinition → 'const' FieldType Identifier '=' ConstValue Annotations? ListSeparator?
    function parseConst() {
        var leadingComments = getComments();
        var _keywordToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ConstKeyword);
        var keywordToken = requireValue(_keywordToken, "'const' keyword expected");
        var fieldType = parseFieldType();
        var _nameToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier);
        var nameToken = requireValue(_nameToken, "Const definition must have a name");
        var _initializer = parseValueAssignment();
        var initializer = requireValue(_initializer, "Const must be initialized to a value");
        var annotations = parseAnnotations();
        readListSeparator();
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ConstDefinition,
            name: (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIdentifier)(nameToken.text, nameToken.loc),
            fieldType,
            initializer,
            annotations,
            comments: leadingComments,
            loc: {
                start: keywordToken.loc.start,
                end: initializer.loc.end
            }
        };
    }
    function parseValueAssignment() {
        if (check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EqualToken)) {
            advance();
            return parseValue();
        }
        return null;
    }
    // Annotations → '(' Annotation* ')'
    function parseAnnotations() {
        if (check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.LeftParenToken)) {
            var annotations = [];
            var startToken = advance();
            while(!check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.RightParenToken)){
                annotations.push(parseAnnotation());
            }
            var endToken = advance();
            return {
                annotations,
                type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Annotations,
                loc: (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createTextLocation)(startToken.loc.start, endToken.loc.end)
            };
        }
        return undefined;
    }
    // Annotation → Identifier ('=' StringLiteral)? ListSeparator?
    function parseAnnotation() {
        var nameToken = requireValue(consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier), "Annotation must have a name");
        var valueToken;
        if (check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EqualToken)) {
            advance();
            valueToken = requireValue(consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StringLiteral), "Annotation must have a value");
        }
        readListSeparator();
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Annotation,
            name: (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIdentifier)(nameToken.text, nameToken.loc),
            value: valueToken ? (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createStringLiteral)(valueToken.text, valueToken.loc) : undefined,
            loc: (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createTextLocation)(nameToken.loc.start, (valueToken || nameToken).loc.end)
        };
    }
    // TypedefDefinition → 'typedef' FieldType Identifier
    function parseTypedef() {
        var _keywordToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.TypedefKeyword);
        var keywordToken = requireValue(_keywordToken, "'typedef' keyword expected");
        var type = parseFieldType();
        var _nameToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier);
        var nameToken = requireValue(_nameToken, "Typedef is expected to have name and none found");
        var leadingComments = getComments();
        var annotations = parseAnnotations();
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.TypedefDefinition,
            name: (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIdentifier)(nameToken.text, nameToken.loc),
            definitionType: type,
            annotations,
            comments: leadingComments,
            loc: {
                start: keywordToken.loc.start,
                end: nameToken.loc.end
            }
        };
    }
    // EnumDefinition → 'enum' Identifier '{' EnumMember* '} Annotations?'
    function parseEnum() {
        var leadingComments = getComments();
        var _keywordToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EnumKeyword);
        var keywordToken = requireValue(_keywordToken, "'enum' keyword expected");
        var _nameToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier);
        var nameToken = requireValue(_nameToken, "Expected identifier for enum definition");
        var openBrace = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.LeftBraceToken);
        requireValue(openBrace, "Expected opening brace");
        var members = parseEnumMembers();
        var _closeBrace = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.RightBraceToken);
        var closeBrace = requireValue(_closeBrace, "Expected closing brace");
        var annotations = parseAnnotations();
        var loc = {
            start: keywordToken.loc.start,
            end: closeBrace.loc.end
        };
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EnumDefinition,
            name: (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIdentifier)(nameToken.text, nameToken.loc),
            members,
            annotations,
            comments: leadingComments,
            loc
        };
    }
    function parseEnumMembers() {
        var members = [];
        while(!check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.RightBraceToken)){
            if (check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentBlock, _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentLine)) {
                advance();
            } else {
                members.push(parseEnumMember());
                // consume list separator if there is one
                readListSeparator();
                if (isStatementBeginning(currentToken())) {
                    throw reportError("Closing curly brace expected, but new statement found");
                } else if (check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EOF)) {
                    throw reportError("Closing curly brace expected but reached end of file");
                }
            }
        }
        return members;
    }
    // EnumMember → (Identifier ('=' IntConstant)? Annotations? ListSeparator?)*
    function parseEnumMember() {
        var _nameToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier);
        var nameToken = requireValue(_nameToken, "EnumMember must have identifier");
        var loc = null;
        var initializer = null;
        if (consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EqualToken) !== null) {
            var _numToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.IntegerLiteral, _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.HexLiteral);
            var numToken = requireValue(_numToken, 'Equals token "=" must be followed by an Integer');
            initializer = parseIntValue(numToken);
            loc = (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createTextLocation)(nameToken.loc.start, initializer.loc.end);
        } else {
            loc = (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createTextLocation)(nameToken.loc.start, nameToken.loc.end);
        }
        var annotations = parseAnnotations();
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EnumMember,
            name: (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIdentifier)(nameToken.text, nameToken.loc),
            initializer,
            annotations,
            comments: getComments(),
            loc
        };
    }
    // StructLike → ('struct' | 'union' | 'exception') Identifier 'xsd_all'? '{' Field* '} Annotations?'
    function parseStructLikeInterface() {
        var leadingComments = getComments();
        var _keywordToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StructKeyword, _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.UnionKeyword, _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ExceptionKeyword);
        var keywordToken = requireValue(_keywordToken, "'struct | union | exception' expected");
        var _nameToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier);
        var nameToken = requireValue(_nameToken, "Struct-like must have an identifier");
        var openBrace = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.LeftBraceToken);
        requireValue(openBrace, "Struct-like body must begin with opening curly brace '{'");
        var fields = parseFields();
        var _closeBrace = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.RightBraceToken);
        var closeBrace = requireValue(_closeBrace, "Struct-like body must end with a closing curly brace '}'");
        var annotations = parseAnnotations();
        return {
            name: (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIdentifier)(nameToken.text, nameToken.loc),
            fields,
            annotations,
            comments: leadingComments,
            loc: {
                start: keywordToken.loc.start,
                end: closeBrace.loc.end
            }
        };
    }
    // StructDefinition → 'struct' Identifier 'xsd_all'? '{' Field* '} Annotations?'
    function parseStruct() {
        var parsedData = parseStructLikeInterface();
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StructDefinition,
            name: parsedData.name,
            fields: parsedData.fields,
            annotations: parsedData.annotations,
            comments: parsedData.comments,
            loc: parsedData.loc
        };
    }
    // UnioinDefinition → 'union' Identifier 'xsd_all'? '{' Field* '} Annotations?'
    function parseUnion() {
        var parsedData = parseStructLikeInterface();
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.UnionDefinition,
            name: parsedData.name,
            fields: parsedData.fields.map((next)=>{
                // As per the Thrift spec, all union fields are optional
                next.requiredness = "optional";
                return next;
            }),
            annotations: parsedData.annotations,
            comments: parsedData.comments,
            loc: parsedData.loc
        };
    }
    // ExceptionDefinition → 'exception' Identifier '{' Field* '} Annotations?'
    function parseException() {
        var parsedData = parseStructLikeInterface();
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ExceptionDefinition,
            name: parsedData.name,
            fields: parsedData.fields,
            annotations: parsedData.annotations,
            comments: parsedData.comments,
            loc: parsedData.loc
        };
    }
    function parseFields() {
        var fields = [];
        while(!check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.RightBraceToken)){
            if (check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentBlock, _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentLine)) {
                advance();
            } else {
                fields.push(parseField());
                if (isStatementBeginning(currentToken())) {
                    throw reportError("Closing curly brace expected, but new statement found");
                } else if (check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EOF)) {
                    throw reportError("Closing curly brace expected but reached end of file");
                }
            }
        }
        return fields;
    }
    // Field → FieldID? FieldReq? FieldType Identifier ('= ConstValue)? XsdFieldOptions Annotations? ListSeparator?
    function parseField() {
        var startLoc = currentToken().loc;
        var fieldID = parseFieldId();
        var fieldRequired = parserequireValuedness();
        var fieldType = parseFieldType();
        // 在scanner处理的时候，把list直接识别成SyntaxType.ListKeyword，但是根据idl来看这样是合法的
        // 实际应该集合parse的上下文进行修正
        var _nameToken = parseValidIdentifier();
        var nameToken = requireValue(_nameToken, "Unable to find identifier for field");
        var defaultValue = parseValueAssignment();
        var annotations = parseAnnotations();
        var listSeparator = readListSeparator();
        var endLoc = listSeparator !== null ? listSeparator.loc : defaultValue !== null ? defaultValue.loc : nameToken.loc;
        var location = (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createTextLocation)(startLoc.start, endLoc.end);
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.FieldDefinition,
            name: (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIdentifier)(nameToken.text, nameToken.loc),
            fieldID,
            fieldType,
            requiredness: fieldRequired,
            defaultValue,
            comments: getComments(),
            annotations,
            loc: location
        };
    }
    // ListSeparator → ',' | ';'
    function readListSeparator() {
        if (check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommaToken, _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.SemicolonToken)) {
            return advance();
        }
        return null;
    }
    // FieldRequired → 'required' | 'optional'
    function parserequireValuedness() {
        var current = currentToken();
        if (current.text === "required" || current.text === "optional") {
            advance();
            return current.text;
        }
        return null;
    }
    // FieldID → IntConstant ':'
    function parseFieldId() {
        if (currentToken().type === _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.IntegerLiteral && peek().type === _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ColonToken) {
            var fieldIDToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.IntegerLiteral);
            var colonToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ColonToken);
            // return value of number token
            return (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createFieldID)(parseInt(fieldIDToken.text, 10), (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createTextLocation)(fieldIDToken.loc.start, colonToken.loc.end));
        } else {
            return null;
        }
    }
    // ConstValue → Literal | ConstMap | ConstList
    function parseValue() {
        var next = advance();
        switch(next.type){
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier:
                return (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIdentifier)(next.text, next.loc);
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StringLiteral:
                return (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createStringLiteral)(next.text, next.loc);
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.IntegerLiteral:
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.HexLiteral:
                return parseIntValue(next);
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.FloatLiteral:
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ExponentialLiteral:
                return parseDoubleValue(next);
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.TrueKeyword:
                return (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createBooleanLiteral)(true, next.loc);
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.FalseKeyword:
                return (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createBooleanLiteral)(false, next.loc);
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.LeftBraceToken:
                return parseMapValue();
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.LeftBracketToken:
                return parseListValue();
            default:
                return null;
        }
    }
    function parseIntValue(token) {
        switch(token.type){
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.IntegerLiteral:
                return (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIntConstant)((0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIntegerLiteral)(token.text, token.loc), token.loc);
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.HexLiteral:
                return (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIntConstant)((0,_factory__WEBPACK_IMPORTED_MODULE_1__.createHexLiteral)(token.text, token.loc), token.loc);
            default:
                throw reportError("IntConstant expected but found: ".concat(token.type));
        }
    }
    function parseDoubleValue(token) {
        switch(token.type){
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.FloatLiteral:
                return (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createDoubleConstant)((0,_factory__WEBPACK_IMPORTED_MODULE_1__.createFloatLiteral)(token.text, token.loc), token.loc);
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ExponentialLiteral:
                return (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createDoubleConstant)((0,_factory__WEBPACK_IMPORTED_MODULE_1__.createExponentialLiteral)(token.text, token.loc), token.loc);
            default:
                throw reportError("DoubleConstant expected but found: ".concat(token.type));
        }
    }
    // ConstMap → '{' (ConstValue ':' ConstValue ListSeparator?)* '}'
    function parseMapValue() {
        // The parseValue method has already advanced the cursor
        var startLoc = currentToken().loc;
        var properties = check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.RightBraceToken) ? [] : readMapValues();
        var _closeBrace = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.RightBraceToken);
        var closeBrace = requireValue(_closeBrace, "Closing brace missing from map definition");
        var endLoc = closeBrace.loc;
        var location = {
            start: startLoc.start,
            end: endLoc.end
        };
        return (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createConstMap)(properties, location);
    }
    // ConstList → '[' (ConstValue ListSeparator?)* ']'
    function parseListValue() {
        // The parseValue method has already advanced the cursor
        var startLoc = currentToken().loc;
        var elements = check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.RightBracketToken) ? [] : readListValues();
        var _closeBrace = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.RightBracketToken);
        var closeBrace = requireValue(_closeBrace, "Closing square-bracket missing from list definition");
        var endLoc = closeBrace.loc;
        return (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createConstList)(elements, {
            start: startLoc.start,
            end: endLoc.end
        });
    }
    function readMapValues() {
        var properties = [];
        while(true){
            var _key = parseValue();
            var key = requireValue(_key, "Key expected for map value");
            var semicolon = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ColonToken);
            requireValue(semicolon, "Semicolon expected after key in map property assignment");
            var _value = parseValue();
            var value = requireValue(_value, "");
            properties.push((0,_factory__WEBPACK_IMPORTED_MODULE_1__.creataePropertyAssignment)(key, value, {
                start: key.loc.start,
                end: value.loc.end
            }));
            if (check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommaToken)) {
                advance();
                // trailing comma
                if (check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.RightBraceToken)) {
                    break;
                }
            } else {
                break;
            }
        }
        return properties;
    }
    function readListValues() {
        var elements = [];
        while(true){
            var value = parseValue();
            if (value !== null) {
                elements.push(value);
            }
            if (check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommaToken, _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.SemicolonToken)) {
                advance();
                // trailing comma
                if (check(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.RightBracketToken)) {
                    break;
                }
            } else {
                break;
            }
        }
        return elements;
    }
    // FunctionType → FieldType | 'void'
    function parseFunctionType() {
        var typeToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.VoidKeyword);
        if (typeToken !== null) {
            return {
                type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.VoidKeyword,
                loc: typeToken.loc
            };
        } else {
            return parseFieldType();
        }
    }
    var IdentifierRegExp = /^[_a-zA-Z][-._a-zA-Z0-9]*$/;
    function parseValidIdentifier() {
        var token = advance();
        // 参看 scanner 的 identifier 的判断
        if (IdentifierRegExp.test(token.text)) {
            token.type = _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier;
            return token;
        }
        return null;
    }
    // FieldType → Identifier | BaseType | ContainerType
    function parseFieldType() {
        var typeToken = advance();
        switch(typeToken.type){
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier:
                var text = typeToken.text;
                if ((options === null || options === void 0 ? void 0 : options.reservedWord) === "escape") {
                    text = escapeReservedWordForIdentifier(typeToken.text);
                }
                return (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createIdentifier)(text, typeToken.loc, parseAnnotations());
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.MapKeyword:
                return parseMapType();
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ListKeyword:
                return parseListType();
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.SetKeyword:
                return parseSetType();
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.BinaryKeyword:
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.BoolKeyword:
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ByteKeyword:
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StringKeyword:
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I8Keyword:
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I16Keyword:
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I32Keyword:
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I64Keyword:
            case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.DoubleKeyword:
                return (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createKeywordFieldType)(typeToken.type, typeToken.loc, parseAnnotations());
            default:
                throw reportError("FieldType expected but found: ".concat(typeToken.type));
        }
    }
    // MapType → 'map' CppType? '<' FieldType ',' FieldType '>'
    function parseMapType() {
        var _openBracket = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.LessThanToken);
        var openBracket = requireValue(_openBracket, "Map needs to defined contained types");
        var keyType = parseFieldType();
        var _commaToken = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommaToken);
        var commaToken = requireValue(_commaToken, "Comma expected to separate map types <key, value>");
        var valueType = parseFieldType();
        var _closeBracket = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.GreaterThanToken);
        var closeBracket = requireValue(_closeBracket, "Map needs to defined contained types");
        var location = {
            start: openBracket.loc.start,
            end: closeBracket.loc.end
        };
        return (0,_factory__WEBPACK_IMPORTED_MODULE_1__.createMapFieldType)(keyType, valueType, location, parseAnnotations());
    }
    // SetType → 'set' CppType? '<' FieldType '>'
    function parseSetType() {
        var _openBracket = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.LessThanToken);
        var openBracket = requireValue(_openBracket, "Map needs to defined contained types");
        var valueType = parseFieldType();
        var _closeBracket = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.GreaterThanToken);
        var closeBracket = requireValue(_closeBracket, "Map needs to defined contained types");
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.SetType,
            valueType,
            loc: {
                start: openBracket.loc.start,
                end: closeBracket.loc.end
            },
            annotations: parseAnnotations()
        };
    }
    // ListType → 'list' '<' FieldType '>' CppType?
    function parseListType() {
        var _openBracket = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.LessThanToken);
        var openBracket = requireValue(_openBracket, "Map needs to defined contained types");
        var valueType = parseFieldType();
        var _closeBracket = consume(_types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.GreaterThanToken);
        var closeBracket = requireValue(_closeBracket, "Map needs to defined contained types");
        return {
            type: _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ListType,
            valueType,
            loc: {
                start: openBracket.loc.start,
                end: closeBracket.loc.end
            },
            annotations: parseAnnotations()
        };
    }
    var ReservedWordsForIdentifierRegExp = new RegExp("(?<=\\.|^)(?:".concat(_keywords__WEBPACK_IMPORTED_MODULE_3__.RESERVEDWORDS.map((v)=>"(".concat(v, ")")).join("|"), ")(?=\\.|$)"), "g");
    function escapeReservedWordForIdentifier(text) {
        var originText = text;
        var replaceCount = 0;
        var replacedText = originText.replace(ReservedWordsForIdentifierRegExp, (value)=>{
            replaceCount++;
            return "".concat(value[0].toUpperCase()).concat(value.substring(1));
        });
        if (replaceCount) {
            return replacedText;
        }
        return originText;
    }
    function consumeComments() {
        while(true){
            var next = tokens[currentIndex];
            switch(next.type){
                case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentBlock:
                    comments.push({
                        type: next.type,
                        value: next.text.split("\n"),
                        loc: next.loc
                    });
                    currentIndex++;
                    break;
                case _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentLine:
                    comments.push({
                        type: next.type,
                        value: next.text,
                        loc: next.loc
                    });
                    currentIndex++;
                    break;
                default:
                    return;
            }
        }
    }
    function currentToken() {
        consumeComments();
        return tokens[currentIndex];
    }
    function previousToken() {
        return tokens[currentIndex - 1];
    }
    function peek() {
        return tokens[currentIndex + 1];
    }
    // Does the current token match the given type
    function check() {
        for(var _len = arguments.length, types = new Array(_len), _key = 0; _key < _len; _key++){
            types[_key] = arguments[_key];
        }
        for (var type of types){
            if (type === currentToken().type) {
                return true;
            }
        }
        return false;
    }
    // Does the current token match the given text
    function checkText() {
        for(var _len = arguments.length, strs = new Array(_len), _key = 0; _key < _len; _key++){
            strs[_key] = arguments[_key];
        }
        for (var str of strs){
            if (str === currentToken().text) {
                return true;
            }
        }
        return false;
    }
    // requireToken the current token to match given type and advance, otherwise return null
    function consume() {
        for(var _len = arguments.length, types = new Array(_len), _key = 0; _key < _len; _key++){
            types[_key] = arguments[_key];
        }
        for (var type of types){
            if (check(type)) {
                return advance();
            }
        }
        return null;
    }
    // Move the cursor forward and return the previous token
    function advance() {
        if (!isAtEnd()) {
            currentIndex += 1;
        }
        return previousToken();
    }
    function isAtEnd() {
        return currentIndex >= tokens.length || currentToken().type === _types__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EOF;
    }
    function getComments() {
        var current = comments;
        comments = [];
        return current;
    }
    function reportError(msg) {
        return new ParseError(msg, previousToken().loc);
    }
    // Throw if the given value doesn't exist.
    function requireValue(val, msg) {
        if (val === null || val === undefined) {
            throw reportError(msg);
        } else {
            return val;
        }
    }
    return {
        parse,
        synchronize
    };
}

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
"./src/lib/thriftNew/@creditkarma/thrift-parser/scanner.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createScanner: () => (createScanner)
});
/* ESM import */var _debugger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/debugger.ts");
/* ESM import */var _factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/factory.ts");
/* ESM import */var _keywords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/keywords.ts");
/* ESM import */var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/types.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
/* eslint-disable */ 



function isDigit(value) {
    return value >= "0" && value <= "9";
}
function isAlpha(value) {
    return value >= "a" && value <= "z" || value >= "A" && value <= "Z";
}
// The first character of an Identifier can be a letter or underscore
function isAlphaOrUnderscore(value) {
    return isAlpha(value) || value === "_";
}
function isValidIdentifier(value) {
    return isAlphaOrUnderscore(value) || isDigit(value) || value === "." || value === "-";
}
function isHexDigit(value) {
    return value >= "0" && value <= "9" || value >= "A" && value <= "F" || value >= "a" && value <= "f";
}
function isWhiteSpace(char) {
    switch(char){
        case " ":
        case "\r":
        case "\t":
        case "\n":
            return true;
        default:
            return false;
    }
}
class ScanError extends Error {
    constructor(msg, loc){
        super(msg);
        this.message = msg;
        this.loc = loc;
    }
}
function createScanner(src) {
    var report = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _debugger__WEBPACK_IMPORTED_MODULE_0__.noopReporter;
    var source = src;
    var tokens = [];
    var line = 1;
    var column = 1;
    var startLine = 1;
    var startColumn = 1;
    var startIndex = 0;
    var currentIndex = 0;
    function scan() {
        while(!isAtEnd()){
            try {
                startIndex = currentIndex;
                startLine = line;
                startColumn = column;
                scanToken();
            } catch (e) {
                report((0,_factory__WEBPACK_IMPORTED_MODULE_1__.createScanError)(e.message, e.loc));
            }
        }
        startIndex = currentIndex;
        addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.EOF);
        return tokens;
    }
    // Find the beginning of the next word to restart parse after error
    function syncronize() {
        while(!isAtEnd() && !isWhiteSpace(current())){
            advance();
        }
    }
    function scanToken() {
        var next = advance();
        switch(next){
            case " ":
            case "\r":
            case "\t":
                break;
            case "\n":
                nextLine();
                break;
            case "&":
                break;
            case "=":
                addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.EqualToken);
                break;
            case "(":
                addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.LeftParenToken);
                break;
            case ")":
                addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.RightParenToken);
                break;
            case "{":
                addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.LeftBraceToken);
                break;
            case "}":
                addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.RightBraceToken);
                break;
            case "[":
                addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.LeftBracketToken);
                break;
            case "]":
                addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.RightBracketToken);
                break;
            case ";":
                addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.SemicolonToken);
                break;
            case ",":
                addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.CommaToken);
                break;
            // Strings can use single or double quotes
            case '"':
            case "'":
                string(next);
                break;
            case ":":
                addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.ColonToken);
                break;
            case "#":
                singleLineComment();
                break;
            case "/":
                if (peek() === "/") {
                    singleLineComment();
                } else if (peek() === "*") {
                    multilineComment();
                } else {
                    reportError("Unexpected token: ".concat(next));
                }
                break;
            case "<":
                addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.LessThanToken);
                break;
            case ">":
                addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.GreaterThanToken);
                break;
            case "-":
                if (isDigit(peek())) {
                    number();
                } else {
                    addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.MinusToken);
                }
                break;
            default:
                if (isDigit(next)) {
                    number();
                } else if (isAlphaOrUnderscore(next)) {
                    identifier();
                } else if (isValidIdentifier(next)) {
                    reportError("Invalid identifier '".concat(next, "': Identifiers must begin with a letter or underscore"));
                } else {
                    reportError("Unexpected token: ".concat(next));
                }
        }
    }
    function identifier() {
        while(!isAtEnd() && peek() !== "\n" && isValidIdentifier(peek())){
            advance();
        }
        var literal = source.substring(startIndex, currentIndex);
        var isKeyword = Object.keys(_keywords__WEBPACK_IMPORTED_MODULE_2__.KEYWORDS).includes(literal);
        if (!isKeyword) {
            addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.Identifier, literal);
        } else {
            var type = _keywords__WEBPACK_IMPORTED_MODULE_2__.KEYWORDS[literal];
            addToken(type, literal);
        }
    }
    function number() {
        if (current() === "0" && (consume("x") || consume("X"))) {
            hexadecimal();
        } else {
            integer();
            if (peek() === "e" || peek() === "E") {
                enotation();
            } else if (peek() === "." && isDigit(peekNext())) {
                float();
            } else {
                commitToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.IntegerLiteral);
            }
        }
    }
    function hexadecimal() {
        while(!isAtEnd() && peek() !== "\n" && isHexDigit(peek())){
            advance();
        }
        commitToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.HexLiteral);
    }
    function enotation() {
        consume("e") || consume("E");
        consume("-") || consume("+");
        if (isDigit(peek())) {
            integer();
            commitToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.ExponentialLiteral);
        } else {
            reportError("Invalid use of e-notation");
        }
    }
    function float() {
        consume(".");
        integer();
        if (peek() === "e" || peek() === "E") {
            enotation();
        } else {
            commitToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.FloatLiteral);
        }
    }
    function integer() {
        while(!isAtEnd() && peek() !== "\n" && isDigit(peek())){
            advance();
        }
    }
    function singleLineComment() {
        var comment = "";
        while(true){
            if (current() === "\n" || isAtEnd() || current() !== "/" && current() !== "#" && current() !== " ") {
                break;
            } else {
                advance();
            }
        }
        if (current() !== "\n") {
            // A comment goes until the end of the line.
            while(peek() !== "\n" && !isAtEnd()){
                comment += current();
                advance();
            }
            comment += current();
        }
        addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.CommentLine, comment.trim());
    }
    // TODO: optimize the logic
    function multilineComment() {
        var comment = "";
        var cursor = 0;
        while(true){
            if (current() === "\n" || isAtEnd() || current() !== "/" && current() !== "*" || current() === "*" && peek() === "*" && peekNext() === "/") {
                break;
            } else {
                advance();
            }
        }
        while(true){
            if (current() === "\n") {
                nextLine();
            }
            // A comment goes until we find a comment terminator (*/).
            if (peek() === "*" && peekNext() === "/" || isAtEnd()) {
                advance();
                advance();
                break;
            }
            if (comment.charAt(cursor - 1) === "\n" && (peek() === " " || peek() === "*")) {
            /**
         * We ignore stars and spaces after a new line to normalize comment formatting.
         * We're only keeping the text of the comment without the extranious formatting.
         */ } else {
                comment += current();
                cursor += 1;
            }
            advance();
            // A comment goes until we find a comment terminator (*/).
            if (peek() === "*" && peekNext() === "/" || isAtEnd()) {
                advance();
                advance();
                break;
            }
        }
        addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.CommentBlock, comment.trim());
    }
    function string(terminator) {
        while(!isAtEnd() && peek() !== terminator){
            if (peek() === "\n") {
                nextLine();
            }
            if (peek() === "\\") {
                advance();
            }
            advance();
        }
        if (isAtEnd() && previous() !== terminator) {
            reportError("String must be terminated with ".concat(terminator));
        } else {
            // advance past closing "
            advance();
            // We use "+ 1" and "- 1" to remove the quote markes from the string and unsescape escaped terminators
            var literal = source.substring(startIndex + 1, currentIndex - 1).replace(/\\(\"|\')/g, "$1");
            addToken(_types__WEBPACK_IMPORTED_MODULE_3__.SyntaxType.StringLiteral, literal);
        }
    }
    function consume(text) {
        if (peek() === text) {
            advance();
            return true;
        }
        return false;
    }
    function advance() {
        currentIndex++;
        column++;
        return source.charAt(currentIndex - 1);
    }
    function previous() {
        return source.charAt(currentIndex - 2);
    }
    function current() {
        return source.charAt(currentIndex - 1);
    }
    function peek() {
        return source.charAt(currentIndex);
    }
    function peekNext() {
        return source.charAt(currentIndex + 1);
    }
    function nextLine() {
        line++;
        column = 1;
    }
    function commitToken(type) {
        var literal = source.substring(startIndex, currentIndex);
        addToken(type, literal);
    }
    function currentLocation() {
        return {
            start: {
                line: startLine,
                column: startColumn,
                index: startIndex
            },
            end: {
                line,
                column,
                index: currentIndex
            }
        };
    }
    function addToken(type) {
        var value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        var loc = currentLocation();
        tokens.push((0,_factory__WEBPACK_IMPORTED_MODULE_1__.createToken)(type, value, loc));
    }
    function isAtEnd() {
        return currentIndex >= source.length;
    }
    function reportError(msg) {
        throw new ScanError(msg, currentLocation());
    }
    return {
        scan,
        syncronize
    };
}

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
"./src/lib/thriftNew/@creditkarma/thrift-parser/types.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ErrorType: () => (ErrorType),
  SyntaxType: () => (SyntaxType)
});
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var ErrorType = /*#__PURE__*/ function(ErrorType) {
    ErrorType["ParseError"] = "ParseError";
    ErrorType["ScanError"] = "ScanError";
    return ErrorType;
}({});
var SyntaxType = /*#__PURE__*/ function(SyntaxType) {
    SyntaxType["ThriftDocument"] = "ThriftDocument";
    SyntaxType["ThriftErrors"] = "ThriftErrors";
    SyntaxType["Identifier"] = "Identifier";
    SyntaxType["FieldID"] = "FieldID";
    // Statements
    SyntaxType["NamespaceDefinition"] = "NamespaceDefinition";
    SyntaxType["IncludeDefinition"] = "IncludeDefinition";
    SyntaxType["CppIncludeDefinition"] = "CppIncludeDefinition";
    SyntaxType["ConstDefinition"] = "ConstDefinition";
    SyntaxType["StructDefinition"] = "StructDefinition";
    SyntaxType["EnumDefinition"] = "EnumDefinition";
    SyntaxType["ServiceDefinition"] = "ServiceDefinition";
    SyntaxType["ExceptionDefinition"] = "ExceptionDefinition";
    SyntaxType["TypedefDefinition"] = "TypedefDefinition";
    SyntaxType["UnionDefinition"] = "UnionDefinition";
    // Fields
    SyntaxType["FieldDefinition"] = "FieldDefinition";
    SyntaxType["FunctionDefinition"] = "FunctionDefinition";
    SyntaxType["ParametersDefinition"] = "ParametersDefinition";
    SyntaxType["ThrowsDefinition"] = "ThrowsDefinition";
    // Type Annotations
    SyntaxType["FieldType"] = "FieldType";
    SyntaxType["BaseType"] = "BaseType";
    SyntaxType["SetType"] = "SetType";
    SyntaxType["MapType"] = "MapType";
    SyntaxType["ListType"] = "ListType";
    // Values
    SyntaxType["ConstValue"] = "ConstValue";
    SyntaxType["IntConstant"] = "IntConstant";
    SyntaxType["DoubleConstant"] = "DoubleConstant";
    SyntaxType["ConstList"] = "ConstList";
    SyntaxType["ConstMap"] = "ConstMap";
    SyntaxType["EnumMember"] = "EnumMember";
    // Literals
    SyntaxType["CommentLine"] = "CommentLine";
    SyntaxType["CommentBlock"] = "CommentBlock";
    SyntaxType["StringLiteral"] = "StringLiteral";
    SyntaxType["IntegerLiteral"] = "IntegerLiteral";
    SyntaxType["FloatLiteral"] = "FloatLiteral";
    SyntaxType["HexLiteral"] = "HexLiteral";
    SyntaxType["ExponentialLiteral"] = "ExponentialLiteral";
    SyntaxType["BooleanLiteral"] = "BooleanLiteral";
    SyntaxType["PropertyAssignment"] = "PropertyAssignment";
    // Tokens
    SyntaxType["LeftParenToken"] = "LeftParenToken";
    SyntaxType["RightParenToken"] = "RightParenToken";
    SyntaxType["LeftBraceToken"] = "LeftBraceToken";
    SyntaxType["RightBraceToken"] = "RightBraceToken";
    SyntaxType["LeftBracketToken"] = "LeftBracketToken";
    SyntaxType["RightBracketToken"] = "RightBracketToken";
    SyntaxType["CommaToken"] = "CommaToken";
    SyntaxType["DotToken"] = "DotToken";
    SyntaxType["MinusToken"] = "MinusToken";
    SyntaxType["SemicolonToken"] = "SemicolonToken";
    SyntaxType["ColonToken"] = "ColonToken";
    SyntaxType["StarToken"] = "StarToken";
    SyntaxType["EqualToken"] = "EqualToken";
    SyntaxType["LessThanToken"] = "LessThanToken";
    SyntaxType["GreaterThanToken"] = "GreaterThanToken";
    // Keywords
    SyntaxType["NamespaceKeyword"] = "NamespaceKeyword";
    SyntaxType["IncludeKeyword"] = "IncludeKeyword";
    SyntaxType["CppIncludeKeyword"] = "CppIncludeKeyword";
    SyntaxType["ExceptionKeyword"] = "ExceptionKeyword";
    SyntaxType["ServiceKeyword"] = "ServiceKeyword";
    SyntaxType["ExtendsKeyword"] = "ExtendsKeyword";
    SyntaxType["RequiredKeyword"] = "RequiredKeyword";
    SyntaxType["OptionalKeyword"] = "OptionalKeyword";
    SyntaxType["FalseKeyword"] = "FalseKeyword";
    SyntaxType["TrueKeyword"] = "TrueKeyword";
    SyntaxType["ConstKeyword"] = "ConstKeyword";
    SyntaxType["DoubleKeyword"] = "DoubleKeyword";
    SyntaxType["StructKeyword"] = "StructKeyword";
    SyntaxType["TypedefKeyword"] = "TypedefKeyword";
    SyntaxType["UnionKeyword"] = "UnionKeyword";
    SyntaxType["StringKeyword"] = "StringKeyword";
    SyntaxType["BinaryKeyword"] = "BinaryKeyword";
    SyntaxType["BoolKeyword"] = "BoolKeyword";
    SyntaxType["ByteKeyword"] = "ByteKeyword";
    SyntaxType["EnumKeyword"] = "EnumKeyword";
    SyntaxType["SenumKeyword"] = "SenumKeyword";
    SyntaxType["ListKeyword"] = "ListKeyword";
    SyntaxType["SetKeyword"] = "SetKeyword";
    SyntaxType["MapKeyword"] = "MapKeyword";
    SyntaxType["I8Keyword"] = "I8Keyword";
    SyntaxType["I16Keyword"] = "I16Keyword";
    SyntaxType["I32Keyword"] = "I32Keyword";
    SyntaxType["I64Keyword"] = "I64Keyword";
    SyntaxType["ThrowsKeyword"] = "ThrowsKeyword";
    SyntaxType["VoidKeyword"] = "VoidKeyword";
    SyntaxType["OnewayKeyword"] = "OnewayKeyword";
    // Other
    SyntaxType["Annotation"] = "Annotation";
    SyntaxType["Annotations"] = "Annotations";
    SyntaxType["EOF"] = "EOF";
    return SyntaxType;
}({});

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
"./src/lib/thriftNew/handleComments.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  collectCommentsAndPrimarySyntax: () => (collectCommentsAndPrimarySyntax),
  handleComments: () => (handleComments)
});
/* ESM import */var _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/index.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var collectCommentsAndPrimarySyntax = (ast)=>{
    var comments = [];
    var primarySyntaxNodes = [];
    // 从这些内容里面获取comment用于重构
    var primarySyntaxType = [
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.IncludeDefinition,
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ServiceDefinition,
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.FunctionDefinition,
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.NamespaceDefinition,
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ConstDefinition,
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.TypedefDefinition,
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EnumDefinition,
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EnumMember,
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StructDefinition,
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.UnionDefinition,
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ExceptionDefinition,
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.FieldDefinition
    ];
    var hasChildrenType = [
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ServiceDefinition,
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EnumDefinition,
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StructDefinition,
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.UnionDefinition,
        _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ExceptionDefinition
    ];
    // 从单个元素中收集comments
    var collectSingleComments = (item)=>{
        if (item.comments.length) {
            comments.push(...item.comments);
        }
    };
    ast.body.forEach((thriftStatement)=>{
        var type = thriftStatement.type;
        primarySyntaxNodes.push(thriftStatement);
        if (primarySyntaxType.includes(type)) {
            if (hasChildrenType.includes(type)) {
                switch(type){
                    case _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ServiceDefinition:
                        thriftStatement.functions.forEach((item)=>{
                            // TODO: 考虑FunctionDefinition中包含的FieldDefinition的注释。。
                            /**
               * 例如：
               * service CollectService {
               *     Collection Collect(
               *         1:i32 req // 奇怪的注释，感觉不想允许它的存在
               *     )  (method = 'GET',  uri = '/api/collect'),
               * }
               */ collectSingleComments(item);
                            primarySyntaxNodes.push(item);
                        });
                        break;
                    case _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EnumDefinition:
                        thriftStatement.members.forEach((item)=>{
                            collectSingleComments(item);
                            primarySyntaxNodes.push(item);
                        });
                        break;
                    case _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StructDefinition:
                    case _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.UnionDefinition:
                    case _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ExceptionDefinition:
                        thriftStatement.fields.forEach((item)=>{
                            collectSingleComments(item);
                            primarySyntaxNodes.push(item);
                        });
                        break;
                }
            }
            collectSingleComments(thriftStatement);
        }
    });
    return {
        comments: comments.sort((a, b)=>a.loc.start.index - b.loc.start.index),
        // 有序之后做二分查找
        primarySyntaxNodes: primarySyntaxNodes.sort((a, b)=>a.loc.start.index - b.loc.start.index)
    };
};
var handleComments = (ast)=>{
    var { comments, primarySyntaxNodes } = collectCommentsAndPrimarySyntax(ast);
    // 先把所有的primarySyntaxNodes初始化
    primarySyntaxNodes.forEach((node)=>{
        node.commentsBefore = [];
        node.commentsAfter = [];
    });
    // 配对O(n2) TODO: 优化到O(nlogn)，如果没有性能问题就不管了
    // 规则：
    // - line相同，比较index，comment.index > PrimarySyntax.index，
    //    认为是PrimarySyntax的commentsBefore，comment.index < PrimarySyntax.index，认为是PrimarySyntax的commentsAfter
    // - 多个line相同的取先出现的，即index小的
    // - 没有line相同的，取comment.index > PrimarySyntax.index且argmin( PrimarySyntax.index)，
    //    即最接近且在comment之后的PrimarySyntax，认为是PrimarySyntax的commentsBefore
    comments.forEach((commemt)=>{
        var targetNode;
        var commentEndIndex = commemt.loc.end.index;
        targetNode = primarySyntaxNodes.find((pNode)=>pNode.loc.end.line === commemt.loc.end.line);
        if (targetNode) {
            if (targetNode.loc.start.index > commentEndIndex) {
                targetNode.commentsBefore.push(commemt);
            } else {
                targetNode.commentsAfter.push(commemt);
            }
            return;
        }
        var i;
        for(i = 0; i < primarySyntaxNodes.length; i++){
            var nodeStartIndex = primarySyntaxNodes[i].loc.start.index;
            if (i === 0 && nodeStartIndex > commentEndIndex) {
                targetNode = primarySyntaxNodes[0];
                break;
            }
            // TODO: 处理位于idl末尾的comment
            if (nodeStartIndex > commentEndIndex && primarySyntaxNodes[i - 1].loc.start.index < nodeStartIndex) {
                targetNode = primarySyntaxNodes[i];
                break;
            }
        }
        if (targetNode) {
            targetNode.commentsBefore.push(commemt);
        }
    });
    // 上面用的是浅拷贝直接修改原数据
    return ast;
};

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
"./src/lib/thriftNew/index.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parser: () => (parser),
  readCode: () => (readCode),
  transformAst: () => (transformAst)
});
/* ESM import */var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_async_to_generator.js");
/* ESM import */var _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/index.ts");
/* ESM import */var _handleComments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/lib/thriftNew/handleComments.ts");
/* ESM import */var _tools_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/lib/tools/utils.ts");
/* ESM import */var chalk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/.pnpm/chalk@5.4.1/node_modules/chalk/source/index.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
/* eslint-disable */ 


// import * as fs from "fs-extra";


var error = chalk__WEBPACK_IMPORTED_MODULE_3__["default"].bgRed.white.bold;
function readCode(filefullname, options, includeMap) {
    return _readCode.apply(this, arguments);
}
function _readCode() {
    _readCode = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__._)(function*(filefullname, options, includeMap) {
        // const source = await fs.readFile(filefullname);
        var source = "";
        return parser(filefullname, source.toString(), options, includeMap);
    });
    return _readCode.apply(this, arguments);
}
function parser(filefullname, source, options, includeMap) {
    var ast = (0,_creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.parse)(source, {
        reservedWord: (options === null || options === void 0 ? void 0 : options.reservedWord) || "error"
    });
    if (!isThritDocument(ast)) {
        alert("thrift格式不正确");
        throw new Error("thrift parser error:" + filefullname);
    }
    (0,_handleComments__WEBPACK_IMPORTED_MODULE_1__.handleComments)(ast);
    //   if (options && options.annotationConfigPath) {
    //     if (fs.existsSync(options.annotationConfigPath)) {
    //       try {
    //         options.annotationConfig = JSON.parse(
    //           fs.readFileSync(options.annotationConfigPath, "utf8")
    //         );
    //       } catch (e) {
    //         console.error(e);
    //       }
    //     }
    //   }
    var rtn = {
        ns: "",
        fileName: filefullname,
        includes: [],
        interfaces: [],
        enums: [],
        typeDefs: [],
        services: [],
        consts: []
    };
    var namespaces = {};
    ast.body.forEach((ts)=>{
        // namespace
        if (ts.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.NamespaceDefinition) {
            // namespace 的处理逻辑，抓一个就来了
            // TODO 优先考虑js的namespace，之后是go，再之后随便抓一个
            namespaces[ts.scope.value] = ts.name.value;
        }
        // includes
        if (ts.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.IncludeDefinition) {
            rtn.includes.push(ts.path.value);
        }
        // struct like: struct exception union --> interfaces
        if (ts.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StructDefinition || ts.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.UnionDefinition || ts.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ExceptionDefinition) {
            var name = ts.name.value;
            var aInterface = {
                name,
                properties: {},
                loc: ts.loc,
                comments: ts.comments,
                commentsAfter: ts.commentsAfter,
                commentsBefore: ts.commentsBefore
            };
            // 添加属性
            ts.fields.forEach((field)=>{
                var { entity: temp, name } = handleField(field, options, ts.name.value);
                aInterface.properties[name] = temp;
            });
            rtn.interfaces.push(aInterface);
        }
        // typedef
        if (ts.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.TypedefDefinition) {
            var aTypeDef = {
                type: "",
                alias: "",
                comments: ts.comments,
                commentsAfter: ts.commentsAfter,
                commentsBefore: ts.commentsBefore,
                loc: ts.loc
            };
            aTypeDef.alias = ts.name.value;
            aTypeDef.type = getFieldTypeString(ts.definitionType, options, ts);
            rtn.typeDefs.push(aTypeDef);
        }
        // service
        if (ts.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ServiceDefinition) {
            var aService = {
                name: ts.name.value,
                interfaces: {},
                comments: ts.comments,
                commentsAfter: ts.commentsAfter,
                commentsBefore: ts.commentsBefore,
                loc: ts.loc
            };
            ts.functions.forEach((func)=>{
                aService.interfaces[func.name.value] = handleFunction(func, options);
            });
            rtn.services.push(aService);
        }
        // enum
        if (ts.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.EnumDefinition) {
            rtn.enums.push(handleEnum(ts));
        }
        // const 考虑支持
        if (ts.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ConstDefinition) {
            var temp = handleConst(ts);
            if (temp !== false) {
                rtn.consts.push(temp);
            }
        }
    });
    var namespacesValues = Object.values(namespaces);
    rtn.ns = namespaces.js || namespaces.go;
    if (!rtn.ns && namespacesValues.length) {
        rtn.ns = namespacesValues[0];
    }
    /* istanbul ignore if */ if (includeMap) {
        includeMap[rtn.fileName] = rtn;
    }
    return rtn;
}
function isThritDocument(ast) {
    return ast.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ThriftDocument;
}
/**
 *
 * @param {ThriftDocument} ast thrift-parser输出的ast
 * @returns {RpcEntity} 返回rpc
 */ function transformAst(ast) {
    return {};
}
function getFieldTypeString(fieldType) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, field = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var i64Type = "Int64";
    var { mapType = "Record" } = options;
    var ThriftType2JavascriptType = {
        [_creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.BoolKeyword]: "boolean",
        [_creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ByteKeyword]: "number",
        [_creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I8Keyword]: "number",
        [_creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I16Keyword]: "number",
        [_creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I32Keyword]: "number",
        [_creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I64Keyword]: i64Type,
        [_creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.DoubleKeyword]: "number",
        [_creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StringKeyword]: "string",
        [_creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.BinaryKeyword]: "any",
        [_creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ListKeyword]: "Array",
        [_creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.MapKeyword]: "Map",
        [_creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.SetKeyword]: "Set",
        // UPDATE 添加void
        [_creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.VoidKeyword]: "void"
    };
    if (options) {
        if (fieldType.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier) {
            return fieldType.value;
        }
    }
    if (fieldType.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.SetType) {
        return "Set<".concat(getFieldTypeString(fieldType.valueType, options, fieldType), ">");
    }
    if (fieldType.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ListType) {
        return "".concat(getFieldTypeString(fieldType.valueType, options, fieldType), "[]");
    }
    if (fieldType.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.MapType) {
        if (mapType === "Record") {
            return "".concat(mapType, "<string, ").concat(getFieldTypeString(fieldType.valueType, options, fieldType), ">");
        }
        return "".concat(mapType, "<").concat(getFieldTypeString(fieldType.keyType, options, fieldType), ", ").concat(getFieldTypeString(fieldType.valueType, options, fieldType), ">");
    }
    if (fieldType.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I64Keyword) {
        var _field_name;
        console.log(error("WARN: 存在i64类型字段: ".concat(field === null || field === void 0 ? void 0 : (_field_name = field.name) === null || _field_name === void 0 ? void 0 : _field_name.value, "，该类型定义可能错误")));
    }
    return ThriftType2JavascriptType[fieldType.type];
}
function handleField(field) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, structName = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    var name = field.name.value;
    var commentsBefore = field.commentsBefore || [];
    // 需要处理typedef
    var type = getFieldTypeString(field.fieldType, options, field);
    var index = field.fieldID ? field.fieldID.value : 0;
    // 考虑多种type数据的default value StringLiteral | IntConstant | DoubleConstant | BooleanLiteral | ConstMap | ConstList | Identifier
    var defaultValue;
    if (field.defaultValue !== null) {
        switch(field.defaultValue.type){
            case _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StringLiteral:
                defaultValue = field.defaultValue.value;
                break;
            case _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.IntConstant:
                defaultValue = field.defaultValue.value.value;
                break;
            case _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.DoubleConstant:
                defaultValue = field.defaultValue.value.value;
                break;
            case _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.BooleanLiteral:
                defaultValue = String(field.defaultValue.value);
                break;
            case _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ConstMap:
                // 简单的处理
                defaultValue = "Map";
                break;
            case _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ConstList:
                // 简单的处理2
                defaultValue = "List";
                break;
            case _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.Identifier:
                defaultValue = field.defaultValue.value;
                break;
        }
    }
    if (options.useTag) {
        var annotations = field.annotations;
        var tagValueReg = /json:"([\w_\d]+).*"/;
        var tagNameReg = /(\w+).tag/;
        if (annotations) {
            var nameTag = annotations.annotations.find((annotation)=>{
                var match;
                if (match = tagNameReg.exec(annotation.name.value)) {
                    return match[1] === options.useTag;
                }
                return false;
            });
            if (nameTag) {
                var match = tagValueReg.exec(nameTag.value ? nameTag.value.value : "");
                if (match) {
                    name = match[1];
                }
            }
        }
    }
    // annotation config 优先级高于useTag
    if (options && options.annotationConfig) {
        var { fieldComment, fieldKey } = options.annotationConfig;
        if (field.annotations && Array.isArray(field.annotations.annotations) && (Array.isArray(fieldComment) || fieldKey)) {
            var comment = "";
            field.annotations.annotations.forEach((annotation)=>{
                if (Array.isArray(fieldComment)) {
                    if (fieldComment.indexOf(annotation.name.value) > -1) {
                        comment += "@".concat(annotation.name.value, ":").concat(annotation.value.value, "    ");
                    }
                }
                var fieldKeyArr;
                // 支持fieldKey是个数组
                if (Array.isArray(fieldKey)) {
                    fieldKeyArr = fieldKey;
                } else {
                    fieldKeyArr = [
                        fieldKey || "___some_error_value___"
                    ];
                }
                // 如果存在多个annotation命中，后面的覆盖前面的
                if (fieldKeyArr.length) {
                    if (fieldKeyArr.indexOf(annotation.name.value) > -1) {
                        name = annotation.value.value;
                    }
                }
            });
            commentsBefore.push({
                type: _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentLine,
                value: comment,
                loc: field.loc
            });
        }
    }
    var optional = false;
    if (field.requiredness === "required") {
        optional = false;
    } else if (field.requiredness === "optional") {
        optional = true;
    } else {
        var isRes = /response/i.test(structName);
        var isReq = /request/i.test(structName);
        var useStrict = options.useStrictMode;
        var useStrictReq = options.strictReq;
        var hasDefault = !(0,_tools_utils__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(defaultValue);
        if (useStrict) {
            optional = true;
        }
        if (isReq && useStrictReq) {
            optional = true;
        }
        if (isReq && hasDefault) {
            optional = true;
        }
        if (!isRes && !isReq && hasDefault) {
            optional = true;
        }
    }
    if (!(0,_tools_utils__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(defaultValue)) {
        var value = defaultValue;
        if (defaultValue === "") {
            value = '""';
        }
        commentsBefore.push({
            type: _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentLine,
            value: "@default: ".concat(value),
            loc: field.loc
        });
    } else {
        defaultValue = "";
    }
    return {
        entity: {
            type,
            index,
            optional,
            defaultValue,
            comments: field.comments,
            commentsBefore,
            commentsAfter: field.commentsAfter,
            loc: field.loc
        },
        name
    };
}
/*
  returnType: string;
  inputParams: Array<{
    type: string;
    index: number;
    name: string;
  }>;
  comment: string;
 */ function handleFunction(func, options) {
    var returnType = getFieldTypeString(func.returnType, options, func);
    var inputParams = func.fields.map((field)=>{
        var { entity: temp, name } = handleField(field, options);
        return {
            type: temp.type,
            index: temp.index,
            name
        };
    });
    var comment = "";
    if (options && options.annotationConfig) {
        // 根据annotation生成config
        var { functionMethod, functionUri } = options.annotationConfig;
        if (functionMethod || functionUri) {
            if (func.annotations && Array.isArray(func.annotations.annotations)) {
                func.annotations.annotations.forEach((annotation)=>{
                    if (functionMethod) {
                        if (annotation.name.value === functionMethod) {
                            comment += "@method: ".concat(annotation.value.value, "    ");
                        }
                    }
                    if (functionUri) {
                        if (annotation.name.value === functionUri) {
                            comment += "@uri: ".concat(annotation.value.value, "    ");
                        }
                    }
                });
            }
        }
        var { fieldComment } = options.annotationConfig;
        if (func.annotations && Array.isArray(func.annotations.annotations) && Array.isArray(fieldComment)) {
            func.annotations.annotations.forEach((annotation)=>{
                if (Array.isArray(fieldComment)) {
                    if (fieldComment.indexOf(annotation.name.value) > -1) {
                        comment += "@".concat(annotation.name.value, ": ").concat(annotation.value.value, "    ");
                    }
                }
            });
        }
    }
    var commentsBefore = func.commentsBefore || [];
    if (comment) {
        commentsBefore.push({
            loc: func.loc,
            value: comment,
            type: _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentLine
        });
    }
    return {
        returnType,
        inputParams,
        comments: [],
        loc: func.loc,
        commentsBefore,
        commentsAfter: func.commentsAfter
    };
}
function handleConst(c, options) {
    var cType;
    var value;
    var constType = c.fieldType.type;
    if (c.name.value === "liuqi" && c.initializer.value.value === "1995") {
        return false;
    }
    if (constType === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.DoubleKeyword || constType === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I8Keyword || constType === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I16Keyword || constType === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I32Keyword || constType === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I64Keyword || constType === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ByteKeyword) {
        cType = constType;
        value = c.initializer.value.value;
    } else if (constType === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StringKeyword) {
        cType = constType;
        value = c.initializer.value;
    } else {
        return false;
    }
    var typeString = getFieldTypeString(c.fieldType, options, c);
    if (typeString === "Int64") {
        typeString = "string";
    }
    var name = c.name.value;
    return {
        type: cType,
        value,
        name,
        comments: c.comments,
        loc: c.loc,
        typeString
    };
}
function handleEnum(e, options) {
    var name = e.name.value;
    var properties = {};
    var currentValue = 0;
    e.members.forEach((member)=>{
        /**
     * https://wiki.apache.org/thrift/Tutorial
     * You can define enums, which are just 32 bit integers. Values are optional
     * and start at 1 if not supplied, C style again.
     *              ^ ThriftIDL page says "If no constant value is supplied,
     *   the value is either 0 for the first element, or one greater than the
     *   preceding value for any subsequent element" so I'm guessing that's a bug.
     *   PS: http://enel.ucalgary.ca/People/Norman/enel315_winter1997/enum_types/ states that if values are not supplied, they start at 0 and not 1.
     */ var value;
        if (member.initializer) {
            value = parseInt(member.initializer.value.value, 10);
        } else {
            value = currentValue++;
        }
        properties[member.name.value] = {
            value,
            loc: member.loc,
            comments: member.comments,
            commentsBefore: member.commentsBefore,
            commentsAfter: member.commentsAfter
        };
    });
    return {
        name,
        properties,
        loc: e.loc,
        comments: e.comments,
        commentsBefore: e.commentsBefore,
        commentsAfter: e.commentsAfter
    };
}

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
"./src/lib/thriftNew/print.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  print: () => (print),
  printCommentBlock: () => (printCommentBlock),
  printCommentLine: () => (printCommentLine),
  printComments: () => (printComments),
  printConsts: () => (printConsts),
  printEnums: () => (printEnums),
  printEnumsObject: () => (printEnumsObject),
  printInterfaces: () => (printInterfaces),
  printServices: () => (printServices),
  printTypeDefs: () => (printTypeDefs)
});
/* ESM import */var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_async_to_generator.js");
/* ESM import */var _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/lib/thriftNew/@creditkarma/thrift-parser/index.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
/* eslint-disable */ 

/* istanbul ignore next */ function print(// export function print(
entity) {
    return _print.apply(this, arguments);
}
function _print() {
    _print = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__._)(function*(entity) {
        // ): string {
        if (!entity || !entity.ns) {
            // 过滤掉没有 namespace 的
            return "";
        }
        // const ns = options.autoNamespace
        //   ? printNamespace(entity, options.root)
        //   : entity.ns;
        var now = new Date();
        var timeString = "".concat(now.getFullYear(), "-").concat(now.getMonth() + 1, "-").concat(now.getDate(), " ").concat(now.getHours(), ":").concat(now.getMinutes(), ":").concat(now.getSeconds());
        var content = "// generate".concat(" at ".concat(timeString), "\n\n/**\n* @deprecated 该类型可能损失精度，请检查类型是否应该为string\n*/\ntype Int64 = string\n\n").concat(printConsts(entity), "\n").concat(printEnums(entity), "\n").concat(printInterfaces(entity), "\n").concat(printTypeDefs(entity), "\n").concat(printServices(entity), "\n");
        return content;
    // const relativePath: path.ParsedPath = path.parse(
    //   path.relative(options.root, entity.fileName)
    // );
    // const target = path.resolve(
    //   options.tsRoot,
    //   relativePath.dir,
    //   `${relativePath.name}.ts`
    // );
    // await fs.ensureFile(target);
    // return fs.writeFile(
    //   target,
    //   fixIncludeNamespace(content, entity, includeMap),
    //   "utf8"
    // );
    });
    return _print.apply(this, arguments);
}
/**
 * 根据到 root 的相对路径生成 namespace
 *
 * @param {RpcEntity} entity
 * @param {string} root
 * @returns {string} namespace
 */ // function printNamespace(entity: RpcEntity, root: string): string {
//   const relativePath: path.ParsedPath = path.parse(
//     path.relative(root, entity.fileName)
//   );
//   const ns = relativePath.dir.replace(new RegExp(`\\${path.sep}`, "g"), ".");
//   /* istanbul ignore if */
//   if (ns.indexOf(".") === 0) {
//     throw new Error("ns error");
//   }
//   return ns;
// }
/**
 * 输出 enums
 *
 * @export
 * @param {RpcEntity} entity thrift entity
 * @returns {string}
 */ function printEnums(entity) {
    /* istanbul ignore if */ if (!entity.enums || entity.enums.length === 0) {
        return "";
    }
    var rtn = "";
    entity.enums.forEach((datum, _i)=>{
        rtn += printComments(datum.commentsBefore);
        rtn += "export const enum ".concat(datum.name, " {\n    ").concat(Object.keys(datum.properties).map((key, i, arr)=>{
            var property = datum.properties[key];
            var cb = printComments(property.commentsBefore); // comments before
            var ca = printComments(property.commentsAfter, property.loc); // comments after
            var temp = "".concat(cb).concat(key, " = ").concat(property.value).concat(arr.length - 1 === i ? "" : ",");
            return attachCommentAfterToAbovePosition(temp, ca);
        }).join("\n    "), "\n}    ").concat(printComments(datum.commentsAfter, datum.loc), "\n\n");
    });
    return rtn;
}
/**
 * 输出 consts
 *
 * @export
 * @param {RpcEntity} entity thrift entity
 * @returns {string}
 */ function printConsts(entity) {
    /* istanbul ignore if */ if (!entity.consts || entity.consts.length === 0) {
        return "";
    }
    var rtn = "";
    entity.consts.forEach((datum, _i)=>{
        rtn += printComments(datum.commentsBefore);
        if (datum.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I64Keyword || datum.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.StringKeyword) {
            rtn += "export const ".concat(datum.name, " = '").concat(datum.value, "'\n");
        } else {
            rtn += "export const ".concat(datum.name, " = ").concat(datum.value, "\n");
        }
    });
    return rtn;
}
/**
 * 输出 interfaces
 *
 * @export
 * @param {Pick<RpcEntity, 'interfaces'>} entity thrift entity
 * @returns {string}
 */ function printInterfaces(entity) {
    if (!entity.interfaces || entity.interfaces.length === 0) {
        return "";
    }
    var rtn = "";
    entity.interfaces.forEach((datum, _i)=>{
        rtn += printComments(datum.commentsBefore);
        rtn += "export interface ".concat(datum.name, " {\n    ").concat(Object.keys(datum.properties).map((key, i, arr)=>{
            var property = datum.properties[key];
            var cb = printComments(property.commentsBefore); // comments before
            var ca = printComments(property.commentsAfter, property.loc); // comments after
            var temp = "".concat(key).concat(property.optional ? "?" : "", ": ").concat(property.type, ";");
            if (ca) {
                temp = attachCommentAfterToAbovePosition(temp, ca);
            }
            if (cb) {
                temp = cb.trim() + "\n" + temp.trim();
            }
            return temp;
        }).join("\n    "), "\n}    ").concat(printComments(datum.commentsAfter, datum.loc), "\n\n");
    });
    // return prettier(rtn);
    return rtn;
}
/**
 * 输出 typedef
 *
 * @export
 * @param {RpcEntity} entity
 * @returns {string}
 */ function printTypeDefs(entity) {
    if (entity.typeDefs.length === 0) {
        return "";
    }
    var rtn = "";
    entity.typeDefs.forEach((datum)=>{
        rtn += printComments(datum.commentsBefore);
        rtn += "  export type ".concat(datum.alias, " = ").concat(datum.type, ";").concat(printComments(datum.commentsAfter, datum.loc), "\n");
    });
    return rtn + "\n";
}
/**
 * 以 12 个半角字符宽度对齐行注释
 *
 * @param {string} str
 * @param {string} comment
 * @returns {string}
 */ function attachComment(str, comment) {
    var c = comment;
    if (!c) {
        return str;
    }
    var len = str.length + 1;
    var len2 = Math.ceil(len / 12) * 12;
    return "".concat(str.padEnd(len2, " "), " ").concat(c);
}
function attachCommentAfterToAbovePosition(str, comment) {
    return comment.trim() + "\n    " + str;
}
/**
 * 这个函数用来修复类型是通过 import 导入的名称
 *
 * @export
 * @param {string} content
 * @param {Pick<RpcEntity, 'fileName' | 'includes'>} entity
 * @param {{ [absolutFilepath: string]: RpcEntity }} includeMap
 * @returns {string}
 */ // export function fixIncludeNamespace(
//   content: string,
//   entity: Partial<RpcEntity> & Pick<RpcEntity, "fileName" | "includes">,
//   includeMap: {
//     [absolutFilepath: string]: Partial<RpcEntity> & Pick<RpcEntity, "ns">;
//   }
// ): string {
//   let result = content;
//   const currentFile = path.parse(entity.fileName);
//   entity.includes.forEach((include) => {
//     // 获取所有 include 语句所对应的 entity
//     const includeKey = path.resolve(currentFile.dir, include);
//     const includeEntity = includeMap[includeKey];
//     if (!includeEntity) {
//       return;
//     }
//     const shouldBeNS = includeEntity.ns; // 需要替换成的 namespace
//     const shouldReplaceNS = path.parse(include).name; // 如果文件中有用到 filename 作为 namespace
//     result = result.replace(
//       new RegExp(
//         `([^\\w\\.])((?<!__SEGMENT__.*)${shouldReplaceNS}\\.|${shouldReplaceNS}(?!.*__SEGMENT__)\\.)`,
//         "g"
//       ),
//       `__SEGMENT__$1${shouldBeNS}__SEGMENT__.`
//     );
//   });
//   // return result.replace(new RegExp(`__SEGMENT__`, 'g'), '');
//   return (
//     "// prettier-ignore\n" +
//     prettier(result.replace(new RegExp("__SEGMENT__", "g"), ""))
//   );
// }
/**
 * 打印 service
 *
 * @export
 * @param {RpcEntity} entity
 * @param {boolean} [isGenerateRPC=false] 如果是用来生成 RPC 的打印，需要加上 namespace
 * @returns
 */ function printServices(entity) {
    var isGenerateRPC = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var serviceEntity = entity.services;
    var keyInNs = [
        ...entity.enums.map((d)=>d.name),
        ...entity.typeDefs.map((d)=>d.alias),
        ...entity.interfaces.map((d)=>d.name)
    ];
    return serviceEntity.reduce((rtn, cur)=>{
        rtn += printComments(cur.commentsBefore);
        rtn += "export interface ".concat(cur.name, " {\n").concat(Object.keys(cur.interfaces).map((key)=>{
            var i = cur.interfaces[key];
            var sortTmp = [];
            i.inputParams.forEach((d)=>sortTmp[d.index] = d);
            sortTmp = sortTmp.filter((d)=>!!d);
            var inputParamsStr = sortTmp.map((d)=>{
                var type = isGenerateRPC && keyInNs.indexOf(d.type) !== -1 ? "".concat(entity.ns, ".").concat(d.type) : d.type;
                return "".concat(d.name, ": ").concat(type);
            }).join(", ");
            var returnType = isGenerateRPC && keyInNs.indexOf(i.returnType) !== -1 ? "".concat(entity.ns, ".").concat(i.returnType) : i.returnType;
            var cb = printComments(i.commentsBefore); // comments before
            var ca = printComments(i.commentsAfter, i.loc); // comments after
            var _$rtn = "";
            if (cb.trim()) {
                _$rtn += "    ".concat(cb.trim(), "\n");
            }
            if (ca.trim()) {
                _$rtn += "    ".concat(ca.trim(), "\n");
            }
            _$rtn += "    ".concat(key, "(").concat(inputParamsStr, "): Promise<").concat(returnType, ">;");
            return _$rtn;
        }).join("\n"), "\n}\n\n");
        return rtn;
    }, "");
}
// export function printCollectionRpc(
//   entity: RpcEntity,
//   includeMap: {
//     [absolutFilepath: string]: Partial<RpcEntity> & Pick<RpcEntity, "ns">;
//   }
// ): string | null {
//   if (!entity.services.length) {
//     return null;
//   }
//   const servicesCodes = printServices(entity, true);
//   const rtn = fixIncludeNamespace(servicesCodes, entity, includeMap);
//   return rtn;
// }
function printCommentLine(comment) {
    if (!comment.value) {
        return "";
    }
    return "/** ".concat(comment.value.replace(/\*\/+/g, ""), " */");
}
function printCommentBlock(comment) {
    if (!comment.value.length) {
        return "";
    }
    return "/*\n* ".concat(comment.value.join("\n* "), "\n*/");
}
/**
 * @description 打印注释，如果是PrimarySyntax之前的注释，直接换行打印，如果是之后的注释
 *                传入PrimarySyntax的loc，判断是否打印在同一行
 *
 * @param comments 需要打印的comments
 * @param loc comments所属的PrimarySyntax的位置
 */ function printComments() {
    var comments = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], loc = arguments.length > 1 ? arguments[1] : void 0;
    var res = "";
    comments.forEach((comment, idx)=>{
        var sameLine = loc && comment.loc.start.line === comment.loc.end.line && comment.loc.start.line === loc.end.line;
        var lastOne = idx === comments.length - 1;
        if (sameLine) {
            if (comment.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentLine) {
                res = printCommentLine(comment) + "\n" + res;
                if (!lastOne) {
                    res += "    ";
                }
            }
            if (comment.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentBlock) {
                res += printCommentBlock(comment);
                if (!lastOne) {
                    res += "    ";
                }
            }
        } else {
            if (comment.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentLine) {
                res = printCommentLine(comment) + "\n" + res;
            // 注释下面不要换行
            // res += '\n'
            }
            if (comment.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.CommentBlock) {
                res += printCommentBlock(comment);
            // 注释下面不要换行
            // res += '\n'
            }
        }
    });
    return res;
}
/**
 * @description 获取includeMap中的enum值
 */ function printEnumsObject(includeMap) {
    var res = {};
    Object.keys(includeMap).forEach((key)=>{
        var rtn = includeMap[key];
        if (rtn.ns) {
            var namespace = rtn.ns;
            var enums = rtn.enums;
            // 在非--new的模式下，const为undefined
            var consts = rtn.consts || [];
            enums.forEach((e)=>{
                Object.keys(e.properties).forEach((eKey)=>{
                    res["".concat(namespace, ".").concat(e.name, ".").concat(eKey)] = e.properties[eKey].value;
                });
            });
            consts.forEach((c)=>{
                var parsedValue;
                if (c.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.ByteKeyword || c.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I8Keyword || c.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I16Keyword || c.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.I32Keyword) {
                    parsedValue = parseInt(c.value);
                } else if (c.type === _creditkarma_thrift_parser__WEBPACK_IMPORTED_MODULE_0__.SyntaxType.DoubleKeyword) {
                    parsedValue = parseFloat(c.value);
                } else {
                    parsedValue = c.value;
                }
                res["".concat(namespace, ".").concat(c.name)] = parsedValue;
            });
        }
    });
    var sortedRes = Object.keys(res).sort().reduce((pre, cur)=>{
        pre[cur] = res[cur];
        return pre;
    }, {});
    return sortedRes;
}

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
"./src/lib/tools/utils.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isUndefined: () => (isUndefined)
});
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
/* eslint-disable */ // import * as fs from "fs-extra";
function isUndefined(v) {
    return typeof v === "undefined";
} // export function replaceTsHelperInt64(filePath: string) {
 //   const strToReplace = `declare var Int64: {
 //     prototype: Int64;
 //     new (): Int64;
 // };
 // interface Int64 {
 //     toString(): string;
 // }
 // declare type ReqNumber = number | string | Int64;
 // declare type RespNumber = Int64;
 // declare type WrapperReqNumber<T> = Int64 extends T ? ReqNumber : T extends number[] ? ReqNumber[] : T;
 // declare type WrapperRespNumber<T> = T extends number ? RespNumber : T extends number[] ? RespNumber[] : T;`;
 //   const newStr = `declare type Int64 = string;
 // declare type ReqNumber = number | string | Int64;
 // declare type RespNumber = Int64;
 // declare type WrapperReqNumber<T> = T;
 // declare type WrapperRespNumber<T> = T;`;
 //   fs.writeFileSync(
 //     filePath,
 //     fs.readFileSync(filePath).toString().replace(strToReplace, newStr)
 //   );
 // }

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
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "text-[24px] font-600 mb-[10px]",
                children: "Thrift 转换 Typescript"
            }, void 0, false, {
                fileName: "/Users/didi/Desktop/github/thrift-to-ts-online/src/routes/page.tsx",
                lineNumber: 180,
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
                            showCursorWhenSelecting: true
                        },
                        onBeforeChange: handleChange
                    }, void 0, false, {
                        fileName: "/Users/didi/Desktop/github/thrift-to-ts-online/src/routes/page.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "mx-[10px] flex",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                            className: "h-[30px] w-[50px] rounded-[10%] border border-solid m-auto cursor-pointer",
                            onClick: handleClick,
                            children: "转换"
                        }, void 0, false, {
                            fileName: "/Users/didi/Desktop/github/thrift-to-ts-online/src/routes/page.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/didi/Desktop/github/thrift-to-ts-online/src/routes/page.tsx",
                        lineNumber: 197,
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
                            readOnly: true
                        }
                    }, void 0, false, {
                        fileName: "/Users/didi/Desktop/github/thrift-to-ts-online/src/routes/page.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/didi/Desktop/github/thrift-to-ts-online/src/routes/page.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/didi/Desktop/github/thrift-to-ts-online/src/routes/page.tsx",
        lineNumber: 179,
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