// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmean@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function i(i){var n;if(!t(i))throw new TypeError(r("0e88T",i));return n=e(i),function(t){if(0===arguments.length)return n();return n(s(t))}}export{i as default};
//# sourceMappingURL=index.mjs.map
