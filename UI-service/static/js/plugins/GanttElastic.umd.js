(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("vue"));
    else if (typeof define === 'function' && define.amd)
        define(["vue"], factory);
    else if (typeof exports === 'object')
        exports["GanttElastic"] = factory(require("vue"));
    else
        root["GanttElastic"] = factory(root["vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_vue__) {
    return /******/ (function(modules) { // webpackBootstrap
            /******/ // The module cache
            /******/
            var installedModules = {};
            /******/
            /******/ // The require function
            /******/
            function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/
                if (installedModules[moduleId]) {
                    /******/
                    return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/
                var module = installedModules[moduleId] = {
                    /******/
                    i: moduleId,
                    /******/
                    l: false,
                    /******/
                    exports: {}
                    /******/
                };
                /******/
                /******/ // Execute the module function
                /******/
                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/
                module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/
                return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/
            __webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/
            __webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/
            __webpack_require__.d = function(exports, name, getter) {
                /******/
                if (!__webpack_require__.o(exports, name)) {
                    /******/
                    Object.defineProperty(exports, name, { enumerable: true, get: getter });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // define __esModule on exports
            /******/
            __webpack_require__.r = function(exports) {
                /******/
                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/
                    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/
                }
                /******/
                Object.defineProperty(exports, '__esModule', { value: true });
                /******/
            };
            /******/
            /******/ // create a fake namespace object
            /******/ // mode & 1: value is a module id, require it
            /******/ // mode & 2: merge all properties of value into the ns
            /******/ // mode & 4: return value when already ns object
            /******/ // mode & 8|1: behave like require
            /******/
            __webpack_require__.t = function(value, mode) {
                /******/
                if (mode & 1) value = __webpack_require__(value);
                /******/
                if (mode & 8) return value;
                /******/
                if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
                /******/
                var ns = Object.create(null);
                /******/
                __webpack_require__.r(ns);
                /******/
                Object.defineProperty(ns, 'default', { enumerable: true, value: value });
                /******/
                if (mode & 2 && typeof value != 'string')
                    for (var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
                /******/
                return ns;
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/
            __webpack_require__.n = function(module) {
                /******/
                var getter = module && module.__esModule ?
                    /******/
                    function getDefault() { return module['default']; } :
                    /******/
                    function getModuleExports() { return module; };
                /******/
                __webpack_require__.d(getter, 'a', getter);
                /******/
                return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/
            __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
            /******/
            /******/ // __webpack_public_path__
            /******/
            __webpack_require__.p = "";
            /******/
            /******/
            /******/ // Load entry module and return exports
            /******/
            return __webpack_require__(__webpack_require__.s = "./src/GanttElastic.vue");
            /******/
        })
        /************************************************************************/
        /******/
        ({

            /***/
            "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=style&index=0&lang=css&":
            /*!****************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=style&index=0&lang=css& ***!
              \****************************************************************************************************************************************************************************************************/
            /*! no static exports found */
            /***/
                (function(module, exports, __webpack_require__) {

                exports = module.exports = __webpack_require__( /*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
                // imports


                // module
                exports.push([module.i, "\n[class^='gantt-elastic'],\r\n[class*=' gantt-elastic'] {\r\n  box-sizing: border-box;\n}\n.gantt-elastic__main-view svg {\r\n  display: block;\n}\n.gantt-elastic__grid-horizontal-line,\r\n.gantt-elastic__grid-vertical-line {\r\n  stroke: #a0a0a0;\r\n  stroke-width: 1;\n}\nforeignObject > * {\r\n  margin: 0px;\n}\n.gantt-elastic .p-2 {\r\n  padding: 10rem;\n}\n.gantt-elastic__main-view-main-container,\r\n.gantt-elastic__main-view-container {\r\n  overflow: hidden;\r\n  max-width: 100%;\n}\n.gantt-elastic__task-list-header-column:last-of-type {\r\n  border-right: 1px solid #00000050;\n}\n.gantt-elastic__task-list-item:last-of-type {\r\n  border-bottom: 1px solid #00000050;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover {\r\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value-container {\r\n  position: relative;\r\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value {\r\n  position: absolute;\n}\r\n", ""]);

                // exports


                /***/
            }),

            /***/
            "./node_modules/css-loader/lib/css-base.js":
            /*!*************************************************!*\
              !*** ./node_modules/css-loader/lib/css-base.js ***!
              \*************************************************/
            /*! no static exports found */
            /***/
                (function(module, exports) {

                /*
                	MIT License http://www.opensource.org/licenses/mit-license.php
                	Author Tobias Koppers @sokra
                */
                // css base code, injected by the css-loader
                module.exports = function(useSourceMap) {
                    var list = [];

                    // return the list of modules as css string
                    list.toString = function toString() {
                        return this.map(function(item) {
                            var content = cssWithMappingToString(item, useSourceMap);
                            if (item[2]) {
                                return "@media " + item[2] + "{" + content + "}";
                            } else {
                                return content;
                            }
                        }).join("");
                    };

                    // import a list of modules into the list
                    list.i = function(modules, mediaQuery) {
                        if (typeof modules === "string")
                            modules = [
                                [null, modules, ""]
                            ];
                        var alreadyImportedModules = {};
                        for (var i = 0; i < this.length; i++) {
                            var id = this[i][0];
                            if (typeof id === "number")
                                alreadyImportedModules[id] = true;
                        }
                        for (i = 0; i < modules.length; i++) {
                            var item = modules[i];
                            // skip already imported module
                            // this implementation is not 100% perfect for weird media query combinations
                            //  when a module is imported multiple times with different media queries.
                            //  I hope this will never occur (Hey this way we have smaller bundles)
                            if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                                if (mediaQuery && !item[2]) {
                                    item[2] = mediaQuery;
                                } else if (mediaQuery) {
                                    item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                                }
                                list.push(item);
                            }
                        }
                    };
                    return list;
                };

                function cssWithMappingToString(item, useSourceMap) {
                    var content = item[1] || '';
                    var cssMapping = item[3];
                    if (!cssMapping) {
                        return content;
                    }

                    if (useSourceMap && typeof btoa === 'function') {
                        var sourceMapping = toComment(cssMapping);
                        var sourceURLs = cssMapping.sources.map(function(source) {
                            return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
                        });

                        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
                    }

                    return [content].join('\n');
                }

                // Adapted from convert-source-map (MIT)
                function toComment(sourceMap) {
                    // eslint-disable-next-line no-undef
                    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
                    var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

                    return '/*# ' + data + ' */';
                }


                /***/
            }),

            /***/
            "./node_modules/dayjs/dayjs.min.js":
            /*!*****************************************!*\
              !*** ./node_modules/dayjs/dayjs.min.js ***!
              \*****************************************/
            /*! no static exports found */
            /***/
                (function(module, exports, __webpack_require__) {

                ! function(t, n) { true ? module.exports = n() : undefined }(this, function() {
                    "use strict";
                    var t = "millisecond",
                        n = "second",
                        e = "minute",
                        r = "hour",
                        i = "day",
                        s = "week",
                        u = "month",
                        o = "quarter",
                        a = "year",
                        h = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
                        f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                        c = function(t, n, e) { var r = String(t); return !r || r.length >= n ? t : "" + Array(n + 1 - r.length).join(e) + t },
                        d = {
                            s: c,
                            z: function(t) {
                                var n = -t.utcOffset(),
                                    e = Math.abs(n),
                                    r = Math.floor(e / 60),
                                    i = e % 60;
                                return (n <= 0 ? "+" : "-") + c(r, 2, "0") + ":" + c(i, 2, "0")
                            },
                            m: function(t, n) {
                                var e = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                                    r = t.clone().add(e, u),
                                    i = n - r < 0,
                                    s = t.clone().add(e + (i ? -1 : 1), u);
                                return Number(-(e + (n - r) / (i ? r - s : s - r)) || 0)
                            },
                            a: function(t) { return t < 0 ? Math.ceil(t) || 0 : Math.floor(t) },
                            p: function(h) { return { M: u, y: a, w: s, d: i, h: r, m: e, s: n, ms: t, Q: o }[h] || String(h || "").toLowerCase().replace(/s$/, "") },
                            u: function(t) { return void 0 === t }
                        },
                        $ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") },
                        l = "en",
                        m = {};
                    m[l] = $;
                    var y = function(t) { return t instanceof v },
                        M = function(t, n, e) {
                            var r;
                            if (!t) return l;
                            if ("string" == typeof t) m[t] && (r = t), n && (m[t] = n, r = t);
                            else {
                                var i = t.name;
                                m[i] = t, r = i
                            }
                            return e || (l = r), r
                        },
                        g = function(t, n, e) { if (y(t)) return t.clone(); var r = n ? "string" == typeof n ? { format: n, pl: e } : n : {}; return r.date = t, new v(r) },
                        D = d;
                    D.l = M, D.i = y, D.w = function(t, n) { return g(t, { locale: n.$L, utc: n.$u }) };
                    var v = function() {
                        function c(t) { this.$L = this.$L || M(t.locale, null, !0), this.parse(t) }
                        var d = c.prototype;
                        return d.parse = function(t) {
                            this.$d = function(t) {
                                var n = t.date,
                                    e = t.utc;
                                if (null === n) return new Date(NaN);
                                if (D.u(n)) return new Date;
                                if (n instanceof Date) return new Date(n);
                                if ("string" == typeof n && !/Z$/i.test(n)) { var r = n.match(h); if (r) return e ? new Date(Date.UTC(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0)) : new Date(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0) }
                                return new Date(n)
                            }(t), this.init()
                        }, d.init = function() {
                            var t = this.$d;
                            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                        }, d.$utils = function() { return D }, d.isValid = function() { return !("Invalid Date" === this.$d.toString()) }, d.isSame = function(t, n) { var e = g(t); return this.startOf(n) <= e && e <= this.endOf(n) }, d.isAfter = function(t, n) { return g(t) < this.startOf(n) }, d.isBefore = function(t, n) { return this.endOf(n) < g(t) }, d.$g = function(t, n, e) { return D.u(t) ? this[n] : this.set(e, t) }, d.year = function(t) { return this.$g(t, "$y", a) }, d.month = function(t) { return this.$g(t, "$M", u) }, d.day = function(t) { return this.$g(t, "$W", i) }, d.date = function(t) { return this.$g(t, "$D", "date") }, d.hour = function(t) { return this.$g(t, "$H", r) }, d.minute = function(t) { return this.$g(t, "$m", e) }, d.second = function(t) { return this.$g(t, "$s", n) }, d.millisecond = function(n) { return this.$g(n, "$ms", t) }, d.unix = function() { return Math.floor(this.valueOf() / 1e3) }, d.valueOf = function() { return this.$d.getTime() }, d.startOf = function(t, o) {
                            var h = this,
                                f = !!D.u(o) || o,
                                c = D.p(t),
                                d = function(t, n) { var e = D.w(h.$u ? Date.UTC(h.$y, n, t) : new Date(h.$y, n, t), h); return f ? e : e.endOf(i) },
                                $ = function(t, n) { return D.w(h.toDate()[t].apply(h.toDate(), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n)), h) },
                                l = this.$W,
                                m = this.$M,
                                y = this.$D,
                                M = "set" + (this.$u ? "UTC" : "");
                            switch (c) {
                                case a:
                                    return f ? d(1, 0) : d(31, 11);
                                case u:
                                    return f ? d(1, m) : d(0, m + 1);
                                case s:
                                    var g = this.$locale().weekStart || 0,
                                        v = (l < g ? l + 7 : l) - g;
                                    return d(f ? y - v : y + (6 - v), m);
                                case i:
                                case "date":
                                    return $(M + "Hours", 0);
                                case r:
                                    return $(M + "Minutes", 1);
                                case e:
                                    return $(M + "Seconds", 2);
                                case n:
                                    return $(M + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, d.endOf = function(t) { return this.startOf(t, !1) }, d.$set = function(s, o) {
                            var h, f = D.p(s),
                                c = "set" + (this.$u ? "UTC" : ""),
                                d = (h = {}, h[i] = c + "Date", h.date = c + "Date", h[u] = c + "Month", h[a] = c + "FullYear", h[r] = c + "Hours", h[e] = c + "Minutes", h[n] = c + "Seconds", h[t] = c + "Milliseconds", h)[f],
                                $ = f === i ? this.$D + (o - this.$W) : o;
                            if (f === u || f === a) {
                                var l = this.clone().set("date", 1);
                                l.$d[d]($), l.init(), this.$d = l.set("date", Math.min(this.$D, l.daysInMonth())).toDate()
                            } else d && this.$d[d]($);
                            return this.init(), this
                        }, d.set = function(t, n) { return this.clone().$set(t, n) }, d.get = function(t) { return this[D.p(t)]() }, d.add = function(t, o) {
                            var h, f = this;
                            t = Number(t);
                            var c = D.p(o),
                                d = function(n) { var e = g(f); return D.w(e.date(e.date() + Math.round(n * t)), f) };
                            if (c === u) return this.set(u, this.$M + t);
                            if (c === a) return this.set(a, this.$y + t);
                            if (c === i) return d(1);
                            if (c === s) return d(7);
                            var $ = (h = {}, h[e] = 6e4, h[r] = 36e5, h[n] = 1e3, h)[c] || 1,
                                l = this.valueOf() + t * $;
                            return D.w(l, this)
                        }, d.subtract = function(t, n) { return this.add(-1 * t, n) }, d.format = function(t) {
                            var n = this;
                            if (!this.isValid()) return "Invalid Date";
                            var e = t || "YYYY-MM-DDTHH:mm:ssZ",
                                r = D.z(this),
                                i = this.$locale(),
                                s = this.$H,
                                u = this.$m,
                                o = this.$M,
                                a = i.weekdays,
                                h = i.months,
                                c = function(t, r, i, s) { return t && (t[r] || t(n, e)) || i[r].substr(0, s) },
                                d = function(t) { return D.s(s % 12 || 12, t, "0") },
                                $ = i.meridiem || function(t, n, e) { var r = t < 12 ? "AM" : "PM"; return e ? r.toLowerCase() : r },
                                l = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: o + 1, MM: D.s(o + 1, 2, "0"), MMM: c(i.monthsShort, o, h, 3), MMMM: h[o] || h(this, e), D: this.$D, DD: D.s(this.$D, 2, "0"), d: String(this.$W), dd: c(i.weekdaysMin, this.$W, a, 2), ddd: c(i.weekdaysShort, this.$W, a, 3), dddd: a[this.$W], H: String(s), HH: D.s(s, 2, "0"), h: d(1), hh: d(2), a: $(s, u, !0), A: $(s, u, !1), m: String(u), mm: D.s(u, 2, "0"), s: String(this.$s), ss: D.s(this.$s, 2, "0"), SSS: D.s(this.$ms, 3, "0"), Z: r };
                            return e.replace(f, function(t, n) { return n || l[t] || r.replace(":", "") })
                        }, d.utcOffset = function() { return 15 * -Math.round(this.$d.getTimezoneOffset() / 15) }, d.diff = function(t, h, f) {
                            var c, d = D.p(h),
                                $ = g(t),
                                l = 6e4 * ($.utcOffset() - this.utcOffset()),
                                m = this - $,
                                y = D.m(this, $);
                            return y = (c = {}, c[a] = y / 12, c[u] = y, c[o] = y / 3, c[s] = (m - l) / 6048e5, c[i] = (m - l) / 864e5, c[r] = m / 36e5, c[e] = m / 6e4, c[n] = m / 1e3, c)[d] || m, f ? y : D.a(y)
                        }, d.daysInMonth = function() { return this.endOf(u).$D }, d.$locale = function() { return m[this.$L] }, d.locale = function(t, n) { if (!t) return this.$L; var e = this.clone(); return e.$L = M(t, n, !0), e }, d.clone = function() { return D.w(this.toDate(), this) }, d.toDate = function() { return new Date(this.$d) }, d.toJSON = function() { return this.toISOString() }, d.toISOString = function() { return this.$d.toISOString() }, d.toString = function() { return this.$d.toUTCString() }, c
                    }();
                    return g.prototype = v.prototype, g.extend = function(t, n) { return t(n, v, g), g }, g.locale = M, g.isDayjs = y, g.unix = function(t) { return g(1e3 * t) }, g.en = m[l], g.Ls = m, g
                });


                /***/
            }),

            /***/
            "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
            /*!*************************************************************************!*\
              !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
              \*************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* WEBPACK VAR INJECTION */
                (function(global) {
                    /**
                     * A collection of shims that provide minimal functionality of the ES6 collections.
                     *
                     * These implementations are not meant to be used outside of the ResizeObserver
                     * modules as they cover only a limited range of use cases.
                     */
                    /* eslint-disable require-jsdoc, valid-jsdoc */
                    var MapShim = (function() {
                        if (typeof Map !== 'undefined') {
                            return Map;
                        }
                        /**
                         * Returns index in provided array that matches the specified key.
                         *
                         * @param {Array<Array>} arr
                         * @param {*} key
                         * @returns {number}
                         */
                        function getIndex(arr, key) {
                            var result = -1;
                            arr.some(function(entry, index) {
                                if (entry[0] === key) {
                                    result = index;
                                    return true;
                                }
                                return false;
                            });
                            return result;
                        }
                        return /** @class */ (function() {
                            function class_1() {
                                this.__entries__ = [];
                            }
                            Object.defineProperty(class_1.prototype, "size", {
                                /**
                                 * @returns {boolean}
                                 */
                                get: function() {
                                    return this.__entries__.length;
                                },
                                enumerable: true,
                                configurable: true
                            });
                            /**
                             * @param {*} key
                             * @returns {*}
                             */
                            class_1.prototype.get = function(key) {
                                var index = getIndex(this.__entries__, key);
                                var entry = this.__entries__[index];
                                return entry && entry[1];
                            };
                            /**
                             * @param {*} key
                             * @param {*} value
                             * @returns {void}
                             */
                            class_1.prototype.set = function(key, value) {
                                var index = getIndex(this.__entries__, key);
                                if (~index) {
                                    this.__entries__[index][1] = value;
                                } else {
                                    this.__entries__.push([key, value]);
                                }
                            };
                            /**
                             * @param {*} key
                             * @returns {void}
                             */
                            class_1.prototype.delete = function(key) {
                                var entries = this.__entries__;
                                var index = getIndex(entries, key);
                                if (~index) {
                                    entries.splice(index, 1);
                                }
                            };
                            /**
                             * @param {*} key
                             * @returns {void}
                             */
                            class_1.prototype.has = function(key) {
                                return !!~getIndex(this.__entries__, key);
                            };
                            /**
                             * @returns {void}
                             */
                            class_1.prototype.clear = function() {
                                this.__entries__.splice(0);
                            };
                            /**
                             * @param {Function} callback
                             * @param {*} [ctx=null]
                             * @returns {void}
                             */
                            class_1.prototype.forEach = function(callback, ctx) {
                                if (ctx === void 0) { ctx = null; }
                                for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                                    var entry = _a[_i];
                                    callback.call(ctx, entry[1], entry[0]);
                                }
                            };
                            return class_1;
                        }());
                    })();

                    /**
                     * Detects whether window and document objects are available in current environment.
                     */
                    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

                    // Returns global object of a current environment.
                    var global$1 = (function() {
                        if (typeof global !== 'undefined' && global.Math === Math) {
                            return global;
                        }
                        if (typeof self !== 'undefined' && self.Math === Math) {
                            return self;
                        }
                        if (typeof window !== 'undefined' && window.Math === Math) {
                            return window;
                        }
                        // eslint-disable-next-line no-new-func
                        return Function('return this')();
                    })();

                    /**
                     * A shim for the requestAnimationFrame which falls back to the setTimeout if
                     * first one is not supported.
                     *
                     * @returns {number} Requests' identifier.
                     */
                    var requestAnimationFrame$1 = (function() {
                        if (typeof requestAnimationFrame === 'function') {
                            // It's required to use a bounded function because IE sometimes throws
                            // an "Invalid calling object" error if rAF is invoked without the global
                            // object on the left hand side.
                            return requestAnimationFrame.bind(global$1);
                        }
                        return function(callback) { return setTimeout(function() { return callback(Date.now()); }, 1000 / 60); };
                    })();

                    // Defines minimum timeout before adding a trailing call.
                    var trailingTimeout = 2;
                    /**
                     * Creates a wrapper function which ensures that provided callback will be
                     * invoked only once during the specified delay period.
                     *
                     * @param {Function} callback - Function to be invoked after the delay period.
                     * @param {number} delay - Delay after which to invoke callback.
                     * @returns {Function}
                     */
                    function throttle(callback, delay) {
                        var leadingCall = false,
                            trailingCall = false,
                            lastCallTime = 0;
                        /**
                         * Invokes the original callback function and schedules new invocation if
                         * the "proxy" was called during current request.
                         *
                         * @returns {void}
                         */
                        function resolvePending() {
                            if (leadingCall) {
                                leadingCall = false;
                                callback();
                            }
                            if (trailingCall) {
                                proxy();
                            }
                        }
                        /**
                         * Callback invoked after the specified delay. It will further postpone
                         * invocation of the original function delegating it to the
                         * requestAnimationFrame.
                         *
                         * @returns {void}
                         */
                        function timeoutCallback() {
                            requestAnimationFrame$1(resolvePending);
                        }
                        /**
                         * Schedules invocation of the original function.
                         *
                         * @returns {void}
                         */
                        function proxy() {
                            var timeStamp = Date.now();
                            if (leadingCall) {
                                // Reject immediately following calls.
                                if (timeStamp - lastCallTime < trailingTimeout) {
                                    return;
                                }
                                // Schedule new call to be in invoked when the pending one is resolved.
                                // This is important for "transitions" which never actually start
                                // immediately so there is a chance that we might miss one if change
                                // happens amids the pending invocation.
                                trailingCall = true;
                            } else {
                                leadingCall = true;
                                trailingCall = false;
                                setTimeout(timeoutCallback, delay);
                            }
                            lastCallTime = timeStamp;
                        }
                        return proxy;
                    }

                    // Minimum delay before invoking the update of observers.
                    var REFRESH_DELAY = 20;
                    // A list of substrings of CSS properties used to find transition events that
                    // might affect dimensions of observed elements.
                    var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
                    // Check if MutationObserver is available.
                    var mutationObserverSupported = typeof MutationObserver !== 'undefined';
                    /**
                     * Singleton controller class which handles updates of ResizeObserver instances.
                     */
                    var ResizeObserverController = /** @class */ (function() {
                        /**
                         * Creates a new instance of ResizeObserverController.
                         *
                         * @private
                         */
                        function ResizeObserverController() {
                            /**
                             * Indicates whether DOM listeners have been added.
                             *
                             * @private {boolean}
                             */
                            this.connected_ = false;
                            /**
                             * Tells that controller has subscribed for Mutation Events.
                             *
                             * @private {boolean}
                             */
                            this.mutationEventsAdded_ = false;
                            /**
                             * Keeps reference to the instance of MutationObserver.
                             *
                             * @private {MutationObserver}
                             */
                            this.mutationsObserver_ = null;
                            /**
                             * A list of connected observers.
                             *
                             * @private {Array<ResizeObserverSPI>}
                             */
                            this.observers_ = [];
                            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
                            this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
                        }
                        /**
                         * Adds observer to observers list.
                         *
                         * @param {ResizeObserverSPI} observer - Observer to be added.
                         * @returns {void}
                         */
                        ResizeObserverController.prototype.addObserver = function(observer) {
                            if (!~this.observers_.indexOf(observer)) {
                                this.observers_.push(observer);
                            }
                            // Add listeners if they haven't been added yet.
                            if (!this.connected_) {
                                this.connect_();
                            }
                        };
                        /**
                         * Removes observer from observers list.
                         *
                         * @param {ResizeObserverSPI} observer - Observer to be removed.
                         * @returns {void}
                         */
                        ResizeObserverController.prototype.removeObserver = function(observer) {
                            var observers = this.observers_;
                            var index = observers.indexOf(observer);
                            // Remove observer if it's present in registry.
                            if (~index) {
                                observers.splice(index, 1);
                            }
                            // Remove listeners if controller has no connected observers.
                            if (!observers.length && this.connected_) {
                                this.disconnect_();
                            }
                        };
                        /**
                         * Invokes the update of observers. It will continue running updates insofar
                         * it detects changes.
                         *
                         * @returns {void}
                         */
                        ResizeObserverController.prototype.refresh = function() {
                            var changesDetected = this.updateObservers_();
                            // Continue running updates if changes have been detected as there might
                            // be future ones caused by CSS transitions.
                            if (changesDetected) {
                                this.refresh();
                            }
                        };
                        /**
                         * Updates every observer from observers list and notifies them of queued
                         * entries.
                         *
                         * @private
                         * @returns {boolean} Returns "true" if any observer has detected changes in
                         *      dimensions of it's elements.
                         */
                        ResizeObserverController.prototype.updateObservers_ = function() {
                            // Collect observers that have active observations.
                            var activeObservers = this.observers_.filter(function(observer) {
                                return observer.gatherActive(), observer.hasActive();
                            });
                            // Deliver notifications in a separate cycle in order to avoid any
                            // collisions between observers, e.g. when multiple instances of
                            // ResizeObserver are tracking the same element and the callback of one
                            // of them changes content dimensions of the observed target. Sometimes
                            // this may result in notifications being blocked for the rest of observers.
                            activeObservers.forEach(function(observer) { return observer.broadcastActive(); });
                            return activeObservers.length > 0;
                        };
                        /**
                         * Initializes DOM listeners.
                         *
                         * @private
                         * @returns {void}
                         */
                        ResizeObserverController.prototype.connect_ = function() {
                            // Do nothing if running in a non-browser environment or if listeners
                            // have been already added.
                            if (!isBrowser || this.connected_) {
                                return;
                            }
                            // Subscription to the "Transitionend" event is used as a workaround for
                            // delayed transitions. This way it's possible to capture at least the
                            // final state of an element.
                            document.addEventListener('transitionend', this.onTransitionEnd_);
                            window.addEventListener('resize', this.refresh);
                            if (mutationObserverSupported) {
                                this.mutationsObserver_ = new MutationObserver(this.refresh);
                                this.mutationsObserver_.observe(document, {
                                    attributes: true,
                                    childList: true,
                                    characterData: true,
                                    subtree: true
                                });
                            } else {
                                document.addEventListener('DOMSubtreeModified', this.refresh);
                                this.mutationEventsAdded_ = true;
                            }
                            this.connected_ = true;
                        };
                        /**
                         * Removes DOM listeners.
                         *
                         * @private
                         * @returns {void}
                         */
                        ResizeObserverController.prototype.disconnect_ = function() {
                            // Do nothing if running in a non-browser environment or if listeners
                            // have been already removed.
                            if (!isBrowser || !this.connected_) {
                                return;
                            }
                            document.removeEventListener('transitionend', this.onTransitionEnd_);
                            window.removeEventListener('resize', this.refresh);
                            if (this.mutationsObserver_) {
                                this.mutationsObserver_.disconnect();
                            }
                            if (this.mutationEventsAdded_) {
                                document.removeEventListener('DOMSubtreeModified', this.refresh);
                            }
                            this.mutationsObserver_ = null;
                            this.mutationEventsAdded_ = false;
                            this.connected_ = false;
                        };
                        /**
                         * "Transitionend" event handler.
                         *
                         * @private
                         * @param {TransitionEvent} event
                         * @returns {void}
                         */
                        ResizeObserverController.prototype.onTransitionEnd_ = function(_a) {
                            var _b = _a.propertyName,
                                propertyName = _b === void 0 ? '' : _b;
                            // Detect whether transition may affect dimensions of an element.
                            var isReflowProperty = transitionKeys.some(function(key) {
                                return !!~propertyName.indexOf(key);
                            });
                            if (isReflowProperty) {
                                this.refresh();
                            }
                        };
                        /**
                         * Returns instance of the ResizeObserverController.
                         *
                         * @returns {ResizeObserverController}
                         */
                        ResizeObserverController.getInstance = function() {
                            if (!this.instance_) {
                                this.instance_ = new ResizeObserverController();
                            }
                            return this.instance_;
                        };
                        /**
                         * Holds reference to the controller's instance.
                         *
                         * @private {ResizeObserverController}
                         */
                        ResizeObserverController.instance_ = null;
                        return ResizeObserverController;
                    }());

                    /**
                     * Defines non-writable/enumerable properties of the provided target object.
                     *
                     * @param {Object} target - Object for which to define properties.
                     * @param {Object} props - Properties to be defined.
                     * @returns {Object} Target object.
                     */
                    var defineConfigurable = (function(target, props) {
                        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
                            var key = _a[_i];
                            Object.defineProperty(target, key, {
                                value: props[key],
                                enumerable: false,
                                writable: false,
                                configurable: true
                            });
                        }
                        return target;
                    });

                    /**
                     * Returns the global object associated with provided element.
                     *
                     * @param {Object} target
                     * @returns {Object}
                     */
                    var getWindowOf = (function(target) {
                        // Assume that the element is an instance of Node, which means that it
                        // has the "ownerDocument" property from which we can retrieve a
                        // corresponding global object.
                        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
                        // Return the local global object if it's not possible extract one from
                        // provided element.
                        return ownerGlobal || global$1;
                    });

                    // Placeholder of an empty content rectangle.
                    var emptyRect = createRectInit(0, 0, 0, 0);
                    /**
                     * Converts provided string to a number.
                     *
                     * @param {number|string} value
                     * @returns {number}
                     */
                    function toFloat(value) {
                        return parseFloat(value) || 0;
                    }
                    /**
                     * Extracts borders size from provided styles.
                     *
                     * @param {CSSStyleDeclaration} styles
                     * @param {...string} positions - Borders positions (top, right, ...)
                     * @returns {number}
                     */
                    function getBordersSize(styles) {
                        var positions = [];
                        for (var _i = 1; _i < arguments.length; _i++) {
                            positions[_i - 1] = arguments[_i];
                        }
                        return positions.reduce(function(size, position) {
                            var value = styles['border-' + position + '-width'];
                            return size + toFloat(value);
                        }, 0);
                    }
                    /**
                     * Extracts paddings sizes from provided styles.
                     *
                     * @param {CSSStyleDeclaration} styles
                     * @returns {Object} Paddings box.
                     */
                    function getPaddings(styles) {
                        var positions = ['top', 'right', 'bottom', 'left'];
                        var paddings = {};
                        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
                            var position = positions_1[_i];
                            var value = styles['padding-' + position];
                            paddings[position] = toFloat(value);
                        }
                        return paddings;
                    }
                    /**
                     * Calculates content rectangle of provided SVG element.
                     *
                     * @param {SVGGraphicsElement} target - Element content rectangle of which needs
                     *      to be calculated.
                     * @returns {DOMRectInit}
                     */
                    function getSVGContentRect(target) {
                        var bbox = target.getBBox();
                        return createRectInit(0, 0, bbox.width, bbox.height);
                    }
                    /**
                     * Calculates content rectangle of provided HTMLElement.
                     *
                     * @param {HTMLElement} target - Element for which to calculate the content rectangle.
                     * @returns {DOMRectInit}
                     */
                    function getHTMLElementContentRect(target) {
                        // Client width & height properties can't be
                        // used exclusively as they provide rounded values.
                        var clientWidth = target.clientWidth,
                            clientHeight = target.clientHeight;
                        // By this condition we can catch all non-replaced inline, hidden and
                        // detached elements. Though elements with width & height properties less
                        // than 0.5 will be discarded as well.
                        //
                        // Without it we would need to implement separate methods for each of
                        // those cases and it's not possible to perform a precise and performance
                        // effective test for hidden elements. E.g. even jQuery's ':visible' filter
                        // gives wrong results for elements with width & height less than 0.5.
                        if (!clientWidth && !clientHeight) {
                            return emptyRect;
                        }
                        var styles = getWindowOf(target).getComputedStyle(target);
                        var paddings = getPaddings(styles);
                        var horizPad = paddings.left + paddings.right;
                        var vertPad = paddings.top + paddings.bottom;
                        // Computed styles of width & height are being used because they are the
                        // only dimensions available to JS that contain non-rounded values. It could
                        // be possible to utilize the getBoundingClientRect if only it's data wasn't
                        // affected by CSS transformations let alone paddings, borders and scroll bars.
                        var width = toFloat(styles.width),
                            height = toFloat(styles.height);
                        // Width & height include paddings and borders when the 'border-box' box
                        // model is applied (except for IE).
                        if (styles.boxSizing === 'border-box') {
                            // Following conditions are required to handle Internet Explorer which
                            // doesn't include paddings and borders to computed CSS dimensions.
                            //
                            // We can say that if CSS dimensions + paddings are equal to the "client"
                            // properties then it's either IE, and thus we don't need to subtract
                            // anything, or an element merely doesn't have paddings/borders styles.
                            if (Math.round(width + horizPad) !== clientWidth) {
                                width -= getBordersSize(styles, 'left', 'right') + horizPad;
                            }
                            if (Math.round(height + vertPad) !== clientHeight) {
                                height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
                            }
                        }
                        // Following steps can't be applied to the document's root element as its
                        // client[Width/Height] properties represent viewport area of the window.
                        // Besides, it's as well not necessary as the <html> itself neither has
                        // rendered scroll bars nor it can be clipped.
                        if (!isDocumentElement(target)) {
                            // In some browsers (only in Firefox, actually) CSS width & height
                            // include scroll bars size which can be removed at this step as scroll
                            // bars are the only difference between rounded dimensions + paddings
                            // and "client" properties, though that is not always true in Chrome.
                            var vertScrollbar = Math.round(width + horizPad) - clientWidth;
                            var horizScrollbar = Math.round(height + vertPad) - clientHeight;
                            // Chrome has a rather weird rounding of "client" properties.
                            // E.g. for an element with content width of 314.2px it sometimes gives
                            // the client width of 315px and for the width of 314.7px it may give
                            // 314px. And it doesn't happen all the time. So just ignore this delta
                            // as a non-relevant.
                            if (Math.abs(vertScrollbar) !== 1) {
                                width -= vertScrollbar;
                            }
                            if (Math.abs(horizScrollbar) !== 1) {
                                height -= horizScrollbar;
                            }
                        }
                        return createRectInit(paddings.left, paddings.top, width, height);
                    }
                    /**
                     * Checks whether provided element is an instance of the SVGGraphicsElement.
                     *
                     * @param {Element} target - Element to be checked.
                     * @returns {boolean}
                     */
                    var isSVGGraphicsElement = (function() {
                        // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
                        // interface.
                        if (typeof SVGGraphicsElement !== 'undefined') {
                            return function(target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
                        }
                        // If it's so, then check that element is at least an instance of the
                        // SVGElement and that it has the "getBBox" method.
                        // eslint-disable-next-line no-extra-parens
                        return function(target) {
                            return (target instanceof getWindowOf(target).SVGElement &&
                                typeof target.getBBox === 'function');
                        };
                    })();
                    /**
                     * Checks whether provided element is a document element (<html>).
                     *
                     * @param {Element} target - Element to be checked.
                     * @returns {boolean}
                     */
                    function isDocumentElement(target) {
                        return target === getWindowOf(target).document.documentElement;
                    }
                    /**
                     * Calculates an appropriate content rectangle for provided html or svg element.
                     *
                     * @param {Element} target - Element content rectangle of which needs to be calculated.
                     * @returns {DOMRectInit}
                     */
                    function getContentRect(target) {
                        if (!isBrowser) {
                            return emptyRect;
                        }
                        if (isSVGGraphicsElement(target)) {
                            return getSVGContentRect(target);
                        }
                        return getHTMLElementContentRect(target);
                    }
                    /**
                     * Creates rectangle with an interface of the DOMRectReadOnly.
                     * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
                     *
                     * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
                     * @returns {DOMRectReadOnly}
                     */
                    function createReadOnlyRect(_a) {
                        var x = _a.x,
                            y = _a.y,
                            width = _a.width,
                            height = _a.height;
                        // If DOMRectReadOnly is available use it as a prototype for the rectangle.
                        var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
                        var rect = Object.create(Constr.prototype);
                        // Rectangle's properties are not writable and non-enumerable.
                        defineConfigurable(rect, {
                            x: x,
                            y: y,
                            width: width,
                            height: height,
                            top: y,
                            right: x + width,
                            bottom: height + y,
                            left: x
                        });
                        return rect;
                    }
                    /**
                     * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
                     * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
                     *
                     * @param {number} x - X coordinate.
                     * @param {number} y - Y coordinate.
                     * @param {number} width - Rectangle's width.
                     * @param {number} height - Rectangle's height.
                     * @returns {DOMRectInit}
                     */
                    function createRectInit(x, y, width, height) {
                        return { x: x, y: y, width: width, height: height };
                    }

                    /**
                     * Class that is responsible for computations of the content rectangle of
                     * provided DOM element and for keeping track of it's changes.
                     */
                    var ResizeObservation = /** @class */ (function() {
                        /**
                         * Creates an instance of ResizeObservation.
                         *
                         * @param {Element} target - Element to be observed.
                         */
                        function ResizeObservation(target) {
                            /**
                             * Broadcasted width of content rectangle.
                             *
                             * @type {number}
                             */
                            this.broadcastWidth = 0;
                            /**
                             * Broadcasted height of content rectangle.
                             *
                             * @type {number}
                             */
                            this.broadcastHeight = 0;
                            /**
                             * Reference to the last observed content rectangle.
                             *
                             * @private {DOMRectInit}
                             */
                            this.contentRect_ = createRectInit(0, 0, 0, 0);
                            this.target = target;
                        }
                        /**
                         * Updates content rectangle and tells whether it's width or height properties
                         * have changed since the last broadcast.
                         *
                         * @returns {boolean}
                         */
                        ResizeObservation.prototype.isActive = function() {
                            var rect = getContentRect(this.target);
                            this.contentRect_ = rect;
                            return (rect.width !== this.broadcastWidth ||
                                rect.height !== this.broadcastHeight);
                        };
                        /**
                         * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
                         * from the corresponding properties of the last observed content rectangle.
                         *
                         * @returns {DOMRectInit} Last observed content rectangle.
                         */
                        ResizeObservation.prototype.broadcastRect = function() {
                            var rect = this.contentRect_;
                            this.broadcastWidth = rect.width;
                            this.broadcastHeight = rect.height;
                            return rect;
                        };
                        return ResizeObservation;
                    }());

                    var ResizeObserverEntry = /** @class */ (function() {
                        /**
                         * Creates an instance of ResizeObserverEntry.
                         *
                         * @param {Element} target - Element that is being observed.
                         * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
                         */
                        function ResizeObserverEntry(target, rectInit) {
                            var contentRect = createReadOnlyRect(rectInit);
                            // According to the specification following properties are not writable
                            // and are also not enumerable in the native implementation.
                            //
                            // Property accessors are not being used as they'd require to define a
                            // private WeakMap storage which may cause memory leaks in browsers that
                            // don't support this type of collections.
                            defineConfigurable(this, { target: target, contentRect: contentRect });
                        }
                        return ResizeObserverEntry;
                    }());

                    var ResizeObserverSPI = /** @class */ (function() {
                        /**
                         * Creates a new instance of ResizeObserver.
                         *
                         * @param {ResizeObserverCallback} callback - Callback function that is invoked
                         *      when one of the observed elements changes it's content dimensions.
                         * @param {ResizeObserverController} controller - Controller instance which
                         *      is responsible for the updates of observer.
                         * @param {ResizeObserver} callbackCtx - Reference to the public
                         *      ResizeObserver instance which will be passed to callback function.
                         */
                        function ResizeObserverSPI(callback, controller, callbackCtx) {
                            /**
                             * Collection of resize observations that have detected changes in dimensions
                             * of elements.
                             *
                             * @private {Array<ResizeObservation>}
                             */
                            this.activeObservations_ = [];
                            /**
                             * Registry of the ResizeObservation instances.
                             *
                             * @private {Map<Element, ResizeObservation>}
                             */
                            this.observations_ = new MapShim();
                            if (typeof callback !== 'function') {
                                throw new TypeError('The callback provided as parameter 1 is not a function.');
                            }
                            this.callback_ = callback;
                            this.controller_ = controller;
                            this.callbackCtx_ = callbackCtx;
                        }
                        /**
                         * Starts observing provided element.
                         *
                         * @param {Element} target - Element to be observed.
                         * @returns {void}
                         */
                        ResizeObserverSPI.prototype.observe = function(target) {
                            if (!arguments.length) {
                                throw new TypeError('1 argument required, but only 0 present.');
                            }
                            // Do nothing if current environment doesn't have the Element interface.
                            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
                                return;
                            }
                            if (!(target instanceof getWindowOf(target).Element)) {
                                throw new TypeError('parameter 1 is not of type "Element".');
                            }
                            var observations = this.observations_;
                            // Do nothing if element is already being observed.
                            if (observations.has(target)) {
                                return;
                            }
                            observations.set(target, new ResizeObservation(target));
                            this.controller_.addObserver(this);
                            // Force the update of observations.
                            this.controller_.refresh();
                        };
                        /**
                         * Stops observing provided element.
                         *
                         * @param {Element} target - Element to stop observing.
                         * @returns {void}
                         */
                        ResizeObserverSPI.prototype.unobserve = function(target) {
                            if (!arguments.length) {
                                throw new TypeError('1 argument required, but only 0 present.');
                            }
                            // Do nothing if current environment doesn't have the Element interface.
                            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
                                return;
                            }
                            if (!(target instanceof getWindowOf(target).Element)) {
                                throw new TypeError('parameter 1 is not of type "Element".');
                            }
                            var observations = this.observations_;
                            // Do nothing if element is not being observed.
                            if (!observations.has(target)) {
                                return;
                            }
                            observations.delete(target);
                            if (!observations.size) {
                                this.controller_.removeObserver(this);
                            }
                        };
                        /**
                         * Stops observing all elements.
                         *
                         * @returns {void}
                         */
                        ResizeObserverSPI.prototype.disconnect = function() {
                            this.clearActive();
                            this.observations_.clear();
                            this.controller_.removeObserver(this);
                        };
                        /**
                         * Collects observation instances the associated element of which has changed
                         * it's content rectangle.
                         *
                         * @returns {void}
                         */
                        ResizeObserverSPI.prototype.gatherActive = function() {
                            var _this = this;
                            this.clearActive();
                            this.observations_.forEach(function(observation) {
                                if (observation.isActive()) {
                                    _this.activeObservations_.push(observation);
                                }
                            });
                        };
                        /**
                         * Invokes initial callback function with a list of ResizeObserverEntry
                         * instances collected from active resize observations.
                         *
                         * @returns {void}
                         */
                        ResizeObserverSPI.prototype.broadcastActive = function() {
                            // Do nothing if observer doesn't have active observations.
                            if (!this.hasActive()) {
                                return;
                            }
                            var ctx = this.callbackCtx_;
                            // Create ResizeObserverEntry instance for every active observation.
                            var entries = this.activeObservations_.map(function(observation) {
                                return new ResizeObserverEntry(observation.target, observation.broadcastRect());
                            });
                            this.callback_.call(ctx, entries, ctx);
                            this.clearActive();
                        };
                        /**
                         * Clears the collection of active observations.
                         *
                         * @returns {void}
                         */
                        ResizeObserverSPI.prototype.clearActive = function() {
                            this.activeObservations_.splice(0);
                        };
                        /**
                         * Tells whether observer has active observations.
                         *
                         * @returns {boolean}
                         */
                        ResizeObserverSPI.prototype.hasActive = function() {
                            return this.activeObservations_.length > 0;
                        };
                        return ResizeObserverSPI;
                    }());

                    // Registry of internal observers. If WeakMap is not available use current shim
                    // for the Map collection as it has all required methods and because WeakMap
                    // can't be fully polyfilled anyway.
                    var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
                    /**
                     * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
                     * exposing only those methods and properties that are defined in the spec.
                     */
                    var ResizeObserver = /** @class */ (function() {
                        /**
                         * Creates a new instance of ResizeObserver.
                         *
                         * @param {ResizeObserverCallback} callback - Callback that is invoked when
                         *      dimensions of the observed elements change.
                         */
                        function ResizeObserver(callback) {
                            if (!(this instanceof ResizeObserver)) {
                                throw new TypeError('Cannot call a class as a function.');
                            }
                            if (!arguments.length) {
                                throw new TypeError('1 argument required, but only 0 present.');
                            }
                            var controller = ResizeObserverController.getInstance();
                            var observer = new ResizeObserverSPI(callback, controller, this);
                            observers.set(this, observer);
                        }
                        return ResizeObserver;
                    }());
                    // Expose public methods of ResizeObserver.
                    [
                        'observe',
                        'unobserve',
                        'disconnect'
                    ].forEach(function(method) {
                        ResizeObserver.prototype[method] = function() {
                            var _a;
                            return (_a = observers.get(this))[method].apply(_a, arguments);
                        };
                    });

                    var index = (function() {
                        // Export existing implementation if available.
                        if (typeof global$1.ResizeObserver !== 'undefined') {
                            return global$1.ResizeObserver;
                        }
                        return ResizeObserver;
                    })();

                    /* harmony default export */
                    __webpack_exports__["default"] = (index);

                    /* WEBPACK VAR INJECTION */
                }.call(this, __webpack_require__( /*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=script&lang=js&":
            /*!*********************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=script&lang=js& ***!
              \*********************************************************************************************************/
            /*! exports provided: mergeDeep, mergeDeepReactive, notEqualDeep, default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "mergeDeepReactive", function() { return mergeDeepReactive; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "notEqualDeep", function() { return notEqualDeep; });
                /* harmony import */
                var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! vue */ "vue");
                /* harmony import */
                var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */
                var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
                /* harmony import */
                var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */
                var _components_MainView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./components/MainView.vue */ "./src/components/MainView.vue");
                /* harmony import */
                var _style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./style.js */ "./src/style.js");
                /* harmony import */
                var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //







                const ctx = document.createElement('canvas').getContext('2d');
                let VueInst = vue__WEBPACK_IMPORTED_MODULE_0___default.a;

                function initVue() {
                    if (typeof Vue !== 'undefined' && typeof VueInst === 'undefined') {
                        VueInst = Vue;
                    }
                }
                initVue();

                let hourWidthCache = null;

                /**
                 * Helper function to fill out empty options in user settings
                 *
                 * @param {object} userOptions - initial user options that will merge with those below
                 * @returns {object} merged options
                 */
                function getOptions(userOptions) {
                    let localeName = 'en';
                    if (typeof userOptions.locale !== 'undefined' && typeof userOptions.locale.name !== 'undefined') {
                        localeName = userOptions.locale.name;
                    }
                    return {
                        slots: {
                            header: {}
                        },
                        taskMapping: {
                            //*
                            id: 'id',
                            start: 'start',
                            label: 'label',
                            duration: 'duration',
                            progress: 'progress',
                            type: 'type',
                            style: 'style',
                            collapsed: 'collapsed'
                        },
                        width: 0,
                        height: 0,
                        clientWidth: 0,
                        outerHeight: 0,
                        rowsHeight: 0,
                        allVisibleTasksHeight: 0,
                        scroll: {
                            scrolling: false,
                            dragXMoveMultiplier: 3, //*
                            dragYMoveMultiplier: 2, //*
                            top: 0,
                            taskList: {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            },
                            chart: {
                                left: 0,
                                right: 0,
                                percent: 0,
                                timePercent: 0,
                                top: 0,
                                bottom: 0,
                                time: 0,
                                timeCenter: 0,
                                dateTime: {
                                    left: '',
                                    right: ''
                                }
                            }
                        },
                        scope: {
                            //*
                            before: 1,
                            after: 1
                        },
                        times: {
                            timeScale: 60 * 1000,
                            timeZoom: 17, //*
                            timePerPixel: 0,
                            firstTime: null,
                            lastTime: null,
                            firstTaskTime: 0,
                            lastTaskTime: 0,
                            totalViewDurationMs: 0,
                            totalViewDurationPx: 0,
                            stepDuration: 'day',
                            steps: []
                        },
                        row: {
                            height: 24 //*
                        },
                        maxRows: 20, //*
                        maxHeight: 0, //*
                        chart: {
                            grid: {
                                horizontal: {
                                    gap: 6 //*
                                }
                            },
                            progress: {
                                width: 20, //*
                                height: 6, //*
                                pattern: true,
                                bar: false
                            },
                            text: {
                                offset: 4, //*
                                xPadding: 10, //*
                                display: true //*
                            },
                            expander: {
                                type: 'chart',
                                display: false, //*
                                displayIfTaskListHidden: true, //*
                                offset: 4, //*
                                size: 18
                            }
                        },
                        taskList: {
                            display: true, //*
                            resizeAfterThreshold: true, //*
                            widthThreshold: 75, //*
                            columns: [
                                //*
                                {
                                    id: 0,
                                    label: 'ID',
                                    value: 'id',
                                    width: 40
                                }
                            ],
                            percent: 100, //*
                            width: 0,
                            finalWidth: 0,
                            widthFromPercentage: 0,
                            minWidth: 18,
                            expander: {
                                type: 'task-list',
                                size: 16,
                                columnWidth: 24,
                                padding: 16,
                                margin: 10,
                                straight: false
                            }
                        },
                        calendar: {
                            workingDays: [1, 2, 3, 4, 5], //*
                            gap: 6, //*
                            height: 0,
                            strokeWidth: 1,
                            hour: {
                                height: 20, //*
                                display: true, //*
                                widths: [],
                                maxWidths: { short: 0, medium: 0, long: 0 },
                                formatted: {
                                    long: [],
                                    medium: [],
                                    short: []
                                },
                                format: {
                                    //*
                                    long(date) {
                                        return date.format('HH:mm');
                                    },
                                    medium(date) {
                                        return date.format('HH:mm');
                                    },
                                    short(date) {
                                        return date.format('HH');
                                    }
                                }
                            },
                            day: {
                                height: 20, //*
                                display: true, //*
                                widths: [],
                                maxWidths: { short: 0, medium: 0, long: 0 },
                                format: {
                                    long(date) {
                                        return date.format('DD dddd');
                                    },
                                    medium(date) {
                                        return date.format('DD ddd');
                                    },
                                    short(date) {
                                        return date.format('DD');
                                    }
                                }
                            },
                            month: {
                                height: 20, //*
                                display: true, //*
                                widths: [],
                                maxWidths: { short: 0, medium: 0, long: 0 },
                                format: {
                                    //*
                                    short(date) {
                                        return date.format('MM');
                                    },
                                    medium(date) {
                                        return date.format("MMM 'YY");
                                    },
                                    long(date) {
                                        return date.format('MMMM YYYY');
                                    }
                                }
                            }
                        },
                        locale: {
                            //*
                            name: 'en',
                            weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                            weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
                            weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
                            months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
                            monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
                            weekStart: 1,
                            relativeTime: {
                                future: 'in %s',
                                past: '%s ago',
                                s: 'a few seconds',
                                m: 'a minute',
                                mm: '%d minutes',
                                h: 'an hour',
                                hh: '%d hours',
                                d: 'a day',
                                dd: '%d days',
                                M: 'a month',
                                MM: '%d months',
                                y: 'a year',
                                yy: '%d years'
                            },
                            formats: {
                                LT: 'HH:mm',
                                LTS: 'HH:mm:ss',
                                L: 'DD/MM/YYYY',
                                LL: 'D MMMM YYYY',
                                LLL: 'D MMMM YYYY HH:mm',
                                LLLL: 'dddd, D MMMM YYYY HH:mm'
                            },
                            ordinal: n => {
                                const s = ['th', 'st', 'nd', 'rd'];
                                const v = n % 100;
                                return `[${n}${s[(v - 20) % 10] || s[v] || s[0]}]`;
                            }
                        }
                    };
                }

                /**
                 * Prepare style
                 *
                 * @returns {object}
                 */
                function prepareStyle(userStyle) {
                    let fontSize = '12px';
                    let fontFamily = window
                        .getComputedStyle(document.body)
                        .getPropertyValue('font-family')
                        .toString();
                    if (typeof userStyle !== 'undefined') {
                        if (typeof userStyle.fontSize !== 'undefined') {
                            fontSize = userOptions.fontSize;
                        }
                        if (typeof userStyle.fontFamily !== 'undefined') {
                            fontFamily = userStyle.fontFamily;
                        }
                    }
                    return Object(_style_js__WEBPACK_IMPORTED_MODULE_3__["default"])(fontSize, fontFamily);
                }

                /**
                 * Helper function to determine if specified variable is an object
                 *
                 * @param {any} item
                 *
                 * @returns {boolean}
                 */
                function isObject(item) {
                    return (
                        item &&
                        typeof item === 'object' &&
                        !Array.isArray(item) &&
                        !(item instanceof HTMLElement) &&
                        !(item instanceof CanvasRenderingContext2D) &&
                        typeof item !== 'function'
                    );
                }

                /**
                 * Helper function which will merge objects recursively - creating brand new one - like clone
                 *
                 * @param {object} target
                 * @params {object} sources
                 *
                 * @returns {object}
                 */
                function mergeDeep(target, ...sources) {
                    if (!sources.length) {
                        return target;
                    }
                    const source = sources.shift();
                    if (isObject(target) && isObject(source)) {
                        for (const key in source) {
                            if (isObject(source[key])) {
                                if (typeof target[key] === 'undefined') {
                                    target[key] = {};
                                }
                                target[key] = mergeDeep(target[key], source[key]);
                            } else if (Array.isArray(source[key])) {
                                target[key] = [];
                                for (let item of source[key]) {
                                    if (isObject(item)) {
                                        target[key].push(mergeDeep({}, item));
                                        continue;
                                    }
                                    target[key].push(item);
                                }
                            } else {
                                target[key] = source[key];
                            }
                        }
                    }
                    return mergeDeep(target, ...sources);
                }

                /**
                 * Detect if object or array is observable
                 *
                 * @param {object|array} obj
                 *
                 * @returns {boolean}
                 */
                function isObservable(obj) {
                    return typeof obj === 'object' && obj.hasOwnProperty('__ob__');
                }

                /**
                 * Same as above but with reactivity in mind
                 *
                 * @param {object} target
                 * @params {object} sources
                 *
                 * @returns {object}
                 */
                function mergeDeepReactive(component, target, ...sources) {
                    if (!sources.length) {
                        return target;
                    }
                    const source = sources.shift();
                    if (isObject(target) && isObject(source)) {
                        for (const key in source) {
                            if (isObject(source[key])) {
                                if (typeof target[key] === 'undefined') {
                                    component.$set(target, key, {});
                                }
                                mergeDeepReactive(component, target[key], source[key]);
                            } else if (Array.isArray(source[key])) {
                                component.$set(target, key, source[key]);
                            } else if (typeof source[key] === 'function') {
                                if (source[key].toString().indexOf('[native code]') === -1) {
                                    target[key] = source[key];
                                }
                            } else {
                                component.$set(target, key, source[key]);
                            }
                        }
                    }
                    return mergeDeepReactive(component, target, ...sources);
                }
                /**
                 * Check if objects or arrays are equal by comparing nested values
                 *
                 * @param {object|array} left
                 * @param {object|array} right
                 *
                 * @returns {boolean}
                 */
                function notEqualDeep(left, right, cache = [], path = '') {
                    if (typeof right !== typeof left) {
                        return { left, right, what: path + '.typeof' };
                    } else if (Array.isArray(left) && !Array.isArray(right)) {
                        return { left, right, what: path + '.isArray' };
                    } else if (Array.isArray(right) && !Array.isArray(left)) {
                        return { left, right, what: path + '.isArray' };
                    } else if (Array.isArray(left) && Array.isArray(right)) {
                        if (left.length !== right.length) {
                            return { left, right, what: path + '.length' };
                        }
                        let what;
                        for (let index = 0, len = left.length; index < len; index++) {
                            if ((what = notEqualDeep(left[index], right[index], cache, path + '.' + index))) {
                                return what;
                            }
                        }
                    } else if (isObject(left) && !isObject(right)) {
                        return { left, right, what: path + '.isObject' };
                    } else if (isObject(right) && !isObject(left)) {
                        return { left, right, what: path + '.isObject' };
                    } else if (isObject(left) && isObject(right)) {
                        for (let key in left) {
                            if (!left.hasOwnProperty(key) || !left.propertyIsEnumerable(key)) {
                                continue;
                            }
                            if (!right.hasOwnProperty(key)) {
                                return { left, right, what: path + '.' + key };
                            }
                            let what;
                            if ((what = notEqualDeep(left[key], right[key], cache, path + '.' + key))) {
                                return what;
                            }
                        }
                    } else if (left !== right) {
                        return { left, right, what: path + '. !==' };
                    }
                    return false;
                }

                /**
                 * GanttElastic
                 * Main vue component
                 */
                const GanttElastic = {
                    name: 'GanttElastic',
                    components: {
                        MainView: _components_MainView_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
                    },
                    props: ['tasks', 'options', 'dynamicStyle'],
                    provide() {
                        const provider = {};
                        const self = this;
                        Object.defineProperty(provider, 'root', {
                            enumerable: true,
                            get: () => self
                        });
                        return provider;
                    },
                    data() {
                        return {
                            state: {
                                tasks: [],
                                options: {
                                    scrollBarHeight: 0,
                                    allVisibleTasksHeight: 0,
                                    outerHeight: 0,
                                    scroll: {
                                        left: 0,
                                        top: 0
                                    }
                                },
                                dynamicStyle: {},
                                refs: {},
                                tasksById: {},
                                taskTree: {},
                                ctx,
                                emitTasksChanges: true, // some operations may pause emitting changes to parent component
                                emitOptionsChanges: true, // some operations may pause emitting changes to parent component
                                resizeObserver: null,
                                unwatchTasks: null,
                                unwatchOptions: null,
                                unwatchStyle: null,
                                unwatchOutputTasks: null,
                                unwatchOutputOptions: null,
                                unwatchOutputStyle: null
                            }
                        };
                    },
                    methods: {
                        mergeDeep,
                        mergeDeepReactive,

                        /**
                         * Calculate height of scrollbar in current browser
                         *
                         * @returns {number}
                         */
                        getScrollBarHeight() {
                            const outer = document.createElement('div');
                            outer.style.visibility = 'hidden';
                            outer.style.height = '100px';
                            outer.style.msOverflowStyle = 'scrollbar';
                            document.body.appendChild(outer);
                            var noScroll = outer.offsetHeight;
                            outer.style.overflow = 'scroll';
                            var inner = document.createElement('div');
                            inner.style.height = '100%';
                            outer.appendChild(inner);
                            var withScroll = inner.offsetHeight;
                            outer.parentNode.removeChild(outer);
                            const height = noScroll - withScroll;
                            this.style['chart-scroll-container--vertical']['margin-left'] = `-${height}px`;
                            return (this.state.options.scrollBarHeight = height);
                        },

                        /**
                         * Fill out empty task properties and make it reactive
                         *
                         * @param {array} tasks
                         */
                        fillTasks(tasks) {
                            for (let task of tasks) {
                                if (typeof task.x === 'undefined') {
                                    task.x = 0;
                                }
                                if (typeof task.y === 'undefined') {
                                    task.y = 0;
                                }
                                if (typeof task.width === 'undefined') {
                                    task.width = 0;
                                }
                                if (typeof task.height === 'undefined') {
                                    task.height = 0;
                                }
                                if (typeof task.mouseOver === 'undefined') {
                                    task.mouseOver = false;
                                }
                                if (typeof task.collapsed === 'undefined') {
                                    task.collapsed = false;
                                }
                                if (typeof task.dependentOn === 'undefined') {
                                    task.dependentOn = [];
                                }
                                if (typeof task.parentId === 'undefined') {
                                    task.parentId = null;
                                }
                                if (typeof task.style === 'undefined') {
                                    task.style = {};
                                }
                                if (typeof task.children === 'undefined') {
                                    task.children = [];
                                }
                                if (typeof task.allChildren === 'undefined') {
                                    task.allChildren = [];
                                }
                                if (typeof task.parents === 'undefined') {
                                    task.parents = [];
                                }
                                if (typeof task.parent === 'undefined') {
                                    task.parent = null;
                                }
                                if (typeof task.startTime === 'undefined') {
                                    task.startTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(task.start).valueOf();
                                }
                                if (typeof task.endTime === 'undefined' && task.hasOwnProperty('end')) {
                                    task.endTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(task.end).valueOf();
                                } else if (typeof task.endTime === 'undefined' && task.hasOwnProperty('duration')) {
                                    task.endTime = task.startTime + task.duration;
                                }
                                if (typeof task.duration === 'undefined' && task.hasOwnProperty('endTime')) {
                                    task.duration = task.endTime - task.startTime;
                                }
                            }
                            return tasks;
                        },

                        /**
                         * Map tasks
                         *
                         * @param {Array} tasks
                         * @param {Object} options
                         */
                        mapTasks(tasks, options) {
                            for (let [index, task] of tasks.entries()) {
                                tasks[index] = {
                                    ...task,
                                    id: task[options.taskMapping.id],
                                    start: task[options.taskMapping.start],
                                    label: task[options.taskMapping.label],
                                    duration: task[options.taskMapping.duration],
                                    progress: task[options.taskMapping.progress],
                                    type: task[options.taskMapping.type],
                                    style: task[options.taskMapping.style],
                                    collapsed: task[options.taskMapping.collapsed]
                                };
                            }
                            return tasks;
                        },

                        /**
                         * Initialize component
                         */
                        initialize(itsUpdate = '') {
                            let options = mergeDeep({}, this.state.options, getOptions(this.options), this.options);
                            let tasks = this.mapTasks(this.tasks, options);
                            if (Object.keys(this.state.dynamicStyle).length === 0) {
                                this.initializeStyle();
                            }
                            dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale(options.locale, null, true);
                            dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale(options.locale.name);
                            if (typeof options.taskList === 'undefined') {
                                options.taskList = {};
                            }
                            options.taskList.columns = options.taskList.columns.map((column, index) => {
                                column.thresholdPercent = 100;
                                column.widthFromPercentage = 0;
                                column.finalWidth = 0;
                                if (typeof column.height === 'undefined') {
                                    column.height = 0;
                                }
                                if (typeof column.style === 'undefined') {
                                    column.style = {};
                                }
                                column._id = `${index}-${column.label}`;
                                return column;
                            });
                            this.state.options = options;
                            tasks = this.fillTasks(tasks);
                            this.state.tasksById = this.resetTaskTree(tasks);
                            this.state.taskTree = this.makeTaskTree(this.state.rootTask, tasks);
                            this.state.tasks = this.state.taskTree.allChildren.map(childId => this.getTask(childId));
                            this.calculateTaskListColumnsDimensions();
                            this.state.options.scrollBarHeight = this.getScrollBarHeight();
                            this.state.options.outerHeight = this.state.options.height + this.state.options.scrollBarHeight;
                            this.globalOnResize();
                        },

                        /**
                         * Initialize style
                         */
                        initializeStyle() {
                            this.state.dynamicStyle = mergeDeep({}, prepareStyle(this.dynamicStyle), this.dynamicStyle);
                        },

                        /**
                         * Get calendar rows outer height
                         *
                         * @returns {int}
                         */
                        getCalendarHeight() {
                            return this.state.options.calendar.height + this.state.options.calendar.strokeWidth;
                        },

                        /**
                         * Get maximal level of nested task children
                         *
                         * @returns {int}
                         */
                        getMaximalLevel() {
                            let maximalLevel = 0;
                            this.state.tasks.forEach(task => {
                                if (task.parents.length > maximalLevel) {
                                    maximalLevel = task.parents.length;
                                }
                            });
                            return maximalLevel - 1;
                        },

                        /**
                         * Get maximal expander width - to calculate straight task list text
                         *
                         * @returns {int}
                         */
                        getMaximalExpanderWidth() {
                            return (
                                this.getMaximalLevel() * this.state.options.taskList.expander.padding +
                                this.state.options.taskList.expander.margin
                            );
                        },

                        /**
                         * Synchronize scrollTop property when row height is changed
                         */
                        syncScrollTop() {
                            if (
                                this.state.refs.taskListItems &&
                                this.state.refs.chartGraph.scrollTop !== this.state.refs.taskListItems.scrollTop
                            ) {
                                this.state.options.scroll.top = this.state.refs.taskListItems.scrollTop = this.state.refs.chartScrollContainerVertical.scrollTop = this.state.refs.chartGraph.scrollTop;
                            }
                        },

                        /**
                         * Calculate task list columns dimensions
                         */
                        calculateTaskListColumnsDimensions() {
                            let final = 0;
                            let percentage = 0;
                            for (let column of this.state.options.taskList.columns) {
                                if (column.expander) {
                                    column.widthFromPercentage =
                                        ((this.getMaximalExpanderWidth() + column.width) / 100) * this.state.options.taskList.percent;
                                } else {
                                    column.widthFromPercentage = (column.width / 100) * this.state.options.taskList.percent;
                                }
                                percentage += column.widthFromPercentage;
                                column.finalWidth = (column.thresholdPercent * column.widthFromPercentage) / 100;
                                final += column.finalWidth;
                                column.height = this.getTaskHeight() - this.style['grid-line-horizontal']['stroke-width'];
                            }
                            this.state.options.taskList.widthFromPercentage = percentage;
                            this.state.options.taskList.finalWidth = final;
                        },

                        /**
                         * Reset task tree - which is used to create tree like structure inside task list
                         */
                        resetTaskTree(tasks) {
                            this.$set(this.state, 'rootTask', {
                                id: null,
                                label: 'root',
                                children: [],
                                allChildren: [],
                                parents: [],
                                parent: null,
                                __root: true
                            });
                            const tasksById = {};
                            for (let i = 0, len = tasks.length; i < len; i++) {
                                let current = tasks[i];
                                current.children = [];
                                current.allChildren = [];
                                current.parent = null;
                                current.parents = [];
                                tasksById[current.id] = current;
                            }
                            return tasksById;
                        },

                        /**
                         * Make task tree, after reset - look above
                         *
                         * @param {object} task
                         * @returns {object} tasks with children and parents
                         */
                        makeTaskTree(task, tasks) {
                            for (let i = 0, len = tasks.length; i < len; i++) {
                                let current = tasks[i];
                                if (current.parentId === task.id) {
                                    if (task.parents.length) {
                                        task.parents.forEach(parent => current.parents.push(parent));
                                    }
                                    if (!task.propertyIsEnumerable('__root')) {
                                        current.parents.push(task.id);
                                        current.parent = task.id;
                                    } else {
                                        current.parents = [];
                                        current.parent = null;
                                    }
                                    current = this.makeTaskTree(current, tasks);
                                    task.allChildren.push(current.id);
                                    task.children.push(current.id);
                                    current.allChildren.forEach(childId => task.allChildren.push(childId));
                                }
                            }
                            return task;
                        },

                        /**
                         * Get task by id
                         *
                         * @param {any} taskId
                         * @returns {object|null} task
                         */
                        getTask(taskId) {
                            if (typeof this.state.tasksById[taskId] !== 'undefined') {
                                return this.state.tasksById[taskId];
                            }
                            return null;
                        },

                        /**
                         * Get children tasks for specified taskId
                         *
                         * @param {any} taskId
                         * @returns {array} children
                         */
                        getChildren(taskId) {
                            return this.state.tasks.filter(task => task.parent === taskId);
                        },

                        /**
                         * Is task visible
                         *
                         * @param {Number|String|Task} task
                         */
                        isTaskVisible(task) {
                            if (typeof task === 'number' || typeof task === 'string') {
                                task = this.getTask(task);
                            }
                            for (let i = 0, len = task.parents.length; i < len; i++) {
                                if (this.getTask(task.parents[i]).collapsed) {
                                    return false;
                                }
                            }
                            return true;
                        },

                        /**
                         * Get svg
                         *
                         * @returns {string} html svg image of gantt
                         */
                        getSVG() {
                            return this.state.options.mainView.outerHTML;
                        },

                        /**
                         * Get image
                         *
                         * @param {string} type image format
                         * @returns {Promise} when resolved returns base64 image string of gantt
                         */
                        getImage(type = 'image/png') {
                            return new Promise(resolve => {
                                const img = new Image();
                                img.onload = () => {
                                    const canvas = document.createElement('canvas');
                                    canvas.width = this.state.options.mainView.clientWidth;
                                    canvas.height = this.state.options.rowsHeight;
                                    canvas.getContext('2d').drawImage(img, 0, 0);
                                    resolve(canvas.toDataURL(type));
                                };
                                img.src = 'data:image/svg+xml,' + encodeURIComponent(this.getSVG());
                            });
                        },

                        /**
                         * Get gantt total height
                         *
                         * @returns {number}
                         */
                        getHeight(visibleTasks, outer = false) {
                            let height =
                                visibleTasks.length * (this.state.options.row.height + this.state.options.chart.grid.horizontal.gap * 2) +
                                this.state.options.calendar.height +
                                this.state.options.calendar.strokeWidth +
                                this.state.options.calendar.gap;
                            if (outer) {
                                height += this.state.options.scrollBarHeight;
                            }
                            return height;
                        },

                        /**
                         * Get one task height
                         *
                         * @returns {number}
                         */
                        getTaskHeight(withStroke = false) {
                            if (withStroke) {
                                return (
                                    this.state.options.row.height +
                                    this.state.options.chart.grid.horizontal.gap * 2 +
                                    this.style['grid-line-horizontal']['stroke-width']
                                );
                            }
                            return this.state.options.row.height + this.state.options.chart.grid.horizontal.gap * 2;
                        },

                        /**
                         * Get specified tasks height
                         *
                         * @returns {number}
                         */
                        getTasksHeight(visibleTasks) {
                            return visibleTasks.length * this.getTaskHeight();
                        },

                        /**
                         * Convert time (in milliseconds) to pixel offset inside chart
                         *
                         * @param {int} ms
                         * @returns {number}
                         */
                        timeToPixelOffsetX(ms) {
                            let x = ms - this.state.options.times.firstTime;
                            if (x) {
                                x = x / this.state.options.times.timePerPixel;
                            }
                            return x;
                        },

                        /**
                         * Convert pixel offset inside chart to corresponding time offset in milliseconds
                         *
                         * @param {number} pixelOffsetX
                         * @returns {int} milliseconds
                         */
                        pixelOffsetXToTime(pixelOffsetX) {
                            let offset = pixelOffsetX + this.style['grid-line-vertical']['stroke-width'] / 2;
                            return offset * this.state.options.times.timePerPixel + this.state.options.times.firstTime;
                        },

                        /**
                         * Determine if element is inside current view port
                         *
                         * @param {number} x - element placement
                         * @param {number} width - element width
                         * @param {int} buffer - or threshold, if element is outside viewport but offset from view port is below this value return true
                         * @returns {boolean}
                         */
                        isInsideViewPort(x, width, buffer = 5000) {
                            return (
                                (x + width + buffer >= this.state.options.scroll.chart.left &&
                                    x - buffer <= this.state.options.scroll.chart.right) ||
                                (x - buffer <= this.state.options.scroll.chart.left &&
                                    x + width + buffer >= this.state.options.scroll.chart.right)
                            );
                        },

                        /**
                         * Chart scroll event handler
                         *
                         * @param {event} ev
                         */
                        onScrollChart(ev) {
                            this._onScrollChart(
                                this.state.refs.chartScrollContainerHorizontal.scrollLeft,
                                this.state.refs.chartScrollContainerVertical.scrollTop
                            );
                        },

                        /**
                         * After same as above but with different arguments - normalized
                         *
                         * @param {number} left
                         * @param {number} top
                         */
                        _onScrollChart(left, top) {
                            if (this.state.options.scroll.chart.left === left && this.state.options.scroll.chart.top === top) {
                                return;
                            }
                            const chartContainerWidth = this.state.refs.chartContainer.clientWidth;
                            this.state.options.scroll.chart.left = left;
                            this.state.options.scroll.chart.right = left + chartContainerWidth;
                            this.state.options.scroll.chart.percent = (left / this.state.options.times.totalViewDurationPx) * 100;
                            this.state.options.scroll.chart.top = top;
                            this.state.options.scroll.chart.time = this.pixelOffsetXToTime(left);
                            this.state.options.scroll.chart.timeCenter = this.pixelOffsetXToTime(left + chartContainerWidth / 2);
                            this.state.options.scroll.chart.dateTime.left = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.scroll.chart.time).valueOf();
                            this.state.options.scroll.chart.dateTime.right = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(
                                this.pixelOffsetXToTime(left + this.state.refs.chart.clientWidth)
                            ).valueOf();
                            this.scrollTo(left, top);
                        },

                        /**
                         * Scroll current chart to specified time (in milliseconds)
                         *
                         * @param {int} time
                         */
                        scrollToTime(time) {
                            let pos = this.timeToPixelOffsetX(time);
                            const chartContainerWidth = this.state.refs.chartContainer.clientWidth;
                            pos = pos - chartContainerWidth / 2;
                            if (pos > this.state.options.width) {
                                pos = this.state.options.width - chartContainerWidth;
                            }
                            this.scrollTo(pos);
                        },

                        /**
                         * Scroll chart or task list to specified pixel values
                         *
                         * @param {number|null} left
                         * @param {number|null} top
                         */
                        scrollTo(left = null, top = null) {
                            if (left !== null) {
                                this.state.refs.chartCalendarContainer.scrollLeft = left;
                                this.state.refs.chartGraphContainer.scrollLeft = left;
                                this.state.refs.chartScrollContainerHorizontal.scrollLeft = left;
                                this.state.options.scroll.left = left;
                            }
                            if (top !== null) {
                                this.state.refs.chartScrollContainerVertical.scrollTop = top;
                                this.state.refs.chartGraph.scrollTop = top;
                                this.state.refs.taskListItems.scrollTop = top;
                                this.state.options.scroll.top = top;
                                this.syncScrollTop();
                            }
                        },

                        /**
                         * After some actions like time zoom change we need to recompensate scroll position
                         * so as a result everything will be in same place
                         */
                        fixScrollPos() {
                            this.scrollToTime(this.state.options.scroll.chart.timeCenter);
                        },

                        /**
                         * Mouse wheel event handler
                         */
                        onWheelChart(ev) {
                            if (!ev.shiftKey && ev.deltaX === 0) {
                                let top = this.state.options.scroll.top + ev.deltaY;
                                const chartClientHeight = this.state.options.rowsHeight;
                                const scrollHeight = this.state.refs.chartGraph.scrollHeight - chartClientHeight;
                                if (top < 0) {
                                    top = 0;
                                } else if (top > scrollHeight) {
                                    top = scrollHeight;
                                }
                                this.scrollTo(null, top);
                            } else if (ev.shiftKey && ev.deltaX === 0) {
                                let left = this.state.options.scroll.left + ev.deltaY;
                                const chartClientWidth = this.state.refs.chartScrollContainerHorizontal.clientWidth;
                                const scrollWidth = this.state.refs.chartScrollContainerHorizontal.scrollWidth - chartClientWidth;
                                if (left < 0) {
                                    left = 0;
                                } else if (left > scrollWidth) {
                                    left = scrollWidth;
                                }
                                this.scrollTo(left);
                            } else {
                                let left = this.state.options.scroll.left + ev.deltaX;
                                const chartClientWidth = this.state.refs.chartScrollContainerHorizontal.clientWidth;
                                const scrollWidth = this.state.refs.chartScrollContainerHorizontal.scrollWidth - chartClientWidth;
                                if (left < 0) {
                                    left = 0;
                                } else if (left > scrollWidth) {
                                    left = scrollWidth;
                                }
                                this.scrollTo(left);
                            }
                        },

                        /**
                         * Time zoom change event handler
                         */
                        onTimeZoomChange(timeZoom) {
                            this.state.options.times.timeZoom = timeZoom;
                            this.recalculateTimes();
                            this.calculateSteps();
                            this.fixScrollPos();
                        },

                        /**
                         * Row height change event handler
                         */
                        onRowHeightChange(height) {
                            this.state.options.row.height = height;
                            this.calculateTaskListColumnsDimensions();
                            this.syncScrollTop();
                        },

                        /**
                         * Scope change event handler
                         */
                        onScopeChange(value) {
                            this.state.options.scope.before = value;
                            this.state.options.scope.after = value;
                            this.initTimes();
                            this.calculateSteps();
                            this.computeCalendarWidths();
                            this.fixScrollPos();
                        },

                        /**
                         * Task list width change event handler
                         */
                        onTaskListWidthChange(value) {
                            this.state.options.taskList.percent = value;
                            this.calculateTaskListColumnsDimensions();
                            this.fixScrollPos();
                        },

                        /**
                         * Task list column width change event handler
                         */
                        onTaskListColumnWidthChange() {
                            this.calculateTaskListColumnsDimensions();
                            this.fixScrollPos();
                        },

                        /**
                         * Listen to specified event names
                         */
                        initializeEvents() {
                            this.$on('chart-scroll-horizontal', this.onScrollChart);
                            this.$on('chart-scroll-vertical', this.onScrollChart);
                            this.$on('chart-wheel', this.onWheelChart);
                            this.$on('times-timeZoom-change', this.onTimeZoomChange);
                            this.$on('row-height-change', this.onRowHeightChange);
                            this.$on('scope-change', this.onScopeChange);
                            this.$on('taskList-width-change', this.onTaskListWidthChange);
                            this.$on('taskList-column-width-change', this.onTaskListColumnWidthChange);
                        },

                        /**
                         * When some action was performed (scale change for example) - recalculate time variables
                         */
                        recalculateTimes() {
                            let max = this.state.options.times.timeScale * 60;
                            let min = this.state.options.times.timeScale;
                            let steps = max / min;
                            let percent = this.state.options.times.timeZoom / 100;
                            this.state.options.times.timePerPixel =
                                this.state.options.times.timeScale * steps * percent + Math.pow(2, this.state.options.times.timeZoom);
                            this.state.options.times.totalViewDurationMs = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.lastTime).diff(
                                this.state.options.times.firstTime,
                                'milliseconds'
                            );
                            this.state.options.times.totalViewDurationPx =
                                this.state.options.times.totalViewDurationMs / this.state.options.times.timePerPixel;
                            this.state.options.width =
                                this.state.options.times.totalViewDurationPx + this.style['grid-line-vertical']['stroke-width'];
                        },

                        /**
                         * Initialize time variables
                         */
                        initTimes() {
                            this.state.options.times.firstTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.firstTaskTime)
                                .locale(this.state.options.locale.name)
                                .startOf('day')
                                .subtract(this.state.options.scope.before, 'days')
                                .startOf('day')
                                .valueOf();
                            this.state.options.times.lastTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.lastTaskTime)
                                .locale(this.state.options.locale.name)
                                .endOf('day')
                                .add(this.state.options.scope.after, 'days')
                                .endOf('day')
                                .valueOf();
                            this.recalculateTimes();
                        },

                        /**
                         * Calculate steps
                         * Steps are days by default
                         * Each step contain information about time offset and pixel offset of this time inside gantt chart
                         */
                        calculateSteps() {
                            const steps = [];
                            const lastMs = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.lastTime).valueOf();
                            const currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.firstTime);
                            steps.push({
                                time: currentDate.valueOf(),
                                offset: {
                                    ms: 0,
                                    px: 0
                                }
                            });
                            for (
                                let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.firstTime)
                                    .add(1, this.state.options.times.stepDuration)
                                    .startOf('day'); currentDate.valueOf() <= lastMs; currentDate = currentDate.add(1, this.state.options.times.stepDuration).startOf('day')
                            ) {
                                const offsetMs = currentDate.diff(this.state.options.times.firstTime, 'milliseconds');
                                const offsetPx = offsetMs / this.state.options.times.timePerPixel;
                                const step = {
                                    time: currentDate.valueOf(),
                                    offset: {
                                        ms: offsetMs,
                                        px: offsetPx
                                    }
                                };
                                const previousStep = steps[steps.length - 1];
                                previousStep.width = {
                                    ms: offsetMs - previousStep.offset.ms,
                                    px: offsetPx - previousStep.offset.px
                                };
                                steps.push(step);
                            }
                            const lastStep = steps[steps.length - 1];
                            lastStep.width = {
                                ms: this.state.options.times.totalViewDurationMs - lastStep.offset.ms,
                                px: this.state.options.times.totalViewDurationPx - lastStep.offset.px
                            };
                            this.state.options.times.steps = steps;
                        },

                        /**
                         * Calculate calendar widths - when scale was changed for example
                         */
                        computeCalendarWidths() {
                            this.computeDayWidths();
                            this.computeHourWidths();
                            this.computeMonthWidths();
                        },

                        /**
                         * Compute width of calendar hours column widths basing on text widths
                         */
                        computeHourWidths() {
                            const style = {...this.style['calendar-row-text'], ...this.style['calendar-row-text--hour'] };
                            this.state.ctx.font = style['font-size'] + ' ' + style['font-family'];
                            const localeName = this.state.options.locale.name;
                            let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()('2018-01-01T00:00:00').locale(localeName); // any date will be good for hours
                            let maxWidths = this.state.options.calendar.hour.maxWidths;
                            if (maxWidths.length) {
                                return;
                            }
                            for (let formatName in this.state.options.calendar.hour.format) {
                                maxWidths[formatName] = 0;
                            }
                            for (let hour = 0; hour < 24; hour++) {
                                let widths = { hour };
                                for (let formatName in this.state.options.calendar.hour.format) {
                                    const hourFormatted = this.state.options.calendar.hour.format[formatName](currentDate);
                                    this.state.options.calendar.hour.formatted[formatName].push(hourFormatted);
                                    widths[formatName] = this.state.ctx.measureText(hourFormatted).width;
                                }
                                this.state.options.calendar.hour.widths.push(widths);
                                for (let formatName in this.state.options.calendar.hour.format) {
                                    if (widths[formatName] > maxWidths[formatName]) {
                                        maxWidths[formatName] = widths[formatName];
                                    }
                                }
                                currentDate = currentDate.add(1, 'hour');
                            }
                        },

                        /**
                         * Compute calendar days column widths basing on text widths
                         */
                        computeDayWidths() {
                            const style = {...this.style['calendar-row-text'], ...this.style['calendar-row-text--day'] };
                            this.state.ctx.font = style['font-size'] + ' ' + style['font-family'];
                            const localeName = this.state.options.locale.name;
                            let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.steps[0].time).locale(localeName);
                            let maxWidths = this.state.options.calendar.day.maxWidths;
                            this.state.options.calendar.day.widths = [];
                            Object.keys(this.state.options.calendar.day.format).forEach(formatName => {
                                maxWidths[formatName] = 0;
                            });
                            for (let day = 0, daysLen = this.state.options.times.steps.length; day < daysLen; day++) {
                                const widths = {
                                    day
                                };
                                Object.keys(this.state.options.calendar.day.format).forEach(formatName => {
                                    widths[formatName] = this.state.ctx.measureText(
                                        this.state.options.calendar.day.format[formatName](currentDate)
                                    ).width;
                                });
                                this.state.options.calendar.day.widths.push(widths);
                                Object.keys(this.state.options.calendar.day.format).forEach(formatName => {
                                    if (widths[formatName] > maxWidths[formatName]) {
                                        maxWidths[formatName] = widths[formatName];
                                    }
                                });
                                currentDate = currentDate.add(1, 'day');
                            }
                        },

                        /**
                         * Months count
                         *
                         * @description Returns number of different months in specified time range
                         *
                         * @param {number} fromTime - date in ms
                         * @param {number} toTime - date in ms
                         *
                         * @returns {number} different months count
                         */
                        monthsCount(fromTime, toTime) {
                            if (fromTime > toTime) {
                                return 0;
                            }
                            let currentMonth = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(fromTime);
                            let previousMonth = currentMonth.clone();
                            let monthsCount = 1;
                            while (currentMonth.valueOf() <= toTime) {
                                currentMonth = currentMonth.add(1, 'day');
                                if (previousMonth.month() !== currentMonth.month()) {
                                    monthsCount++;
                                }
                                previousMonth = currentMonth.clone();
                            }
                            return monthsCount;
                        },

                        /**
                         * Compute month calendar columns widths basing on text widths
                         */
                        computeMonthWidths() {
                            const style = {...this.style['calendar-row-text'], ...this.style['calendar-row-text--month'] };
                            this.state.ctx.font = style['font-size'] + ' ' + style['font-family'];
                            let maxWidths = this.state.options.calendar.month.maxWidths;
                            this.state.options.calendar.month.widths = [];
                            Object.keys(this.state.options.calendar.month.format).forEach(formatName => {
                                maxWidths[formatName] = 0;
                            });
                            const localeName = this.state.options.locale.name;
                            let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.firstTime).locale(localeName);
                            const monthsCount = this.monthsCount(this.state.options.times.firstTime, this.state.options.times.lastTime);
                            for (let month = 0; month < monthsCount; month++) {
                                const widths = {
                                    month
                                };
                                Object.keys(this.state.options.calendar.month.format).forEach(formatName => {
                                    widths[formatName] = this.state.ctx.measureText(
                                        this.state.options.calendar.month.format[formatName](currentDate)
                                    ).width;
                                });
                                this.state.options.calendar.month.widths.push(widths);
                                Object.keys(this.state.options.calendar.month.format).forEach(formatName => {
                                    if (widths[formatName] > maxWidths[formatName]) {
                                        maxWidths[formatName] = widths[formatName];
                                    }
                                });
                                currentDate = currentDate.add(1, 'month');
                            }
                        },

                        /**
                         * Prepare time and date variables for gantt
                         */
                        prepareDates() {
                            let firstTaskTime = Number.MAX_SAFE_INTEGER;
                            let lastTaskTime = 0;
                            for (let index = 0, len = this.state.tasks.length; index < len; index++) {
                                let task = this.state.tasks[index];
                                if (task.startTime < firstTaskTime) {
                                    firstTaskTime = task.startTime;
                                }
                                if (task.startTime + task.duration > lastTaskTime) {
                                    lastTaskTime = task.startTime + task.duration;
                                }
                            }
                            this.state.options.times.firstTaskTime = firstTaskTime;
                            this.state.options.times.lastTaskTime = lastTaskTime;
                            this.state.options.times.firstTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(firstTaskTime)
                                .locale(this.state.options.locale.name)
                                .startOf('day')
                                .subtract(this.state.options.scope.before, 'days')
                                .startOf('day')
                                .valueOf();
                            this.state.options.times.lastTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(lastTaskTime)
                                .locale(this.state.options.locale.name)
                                .endOf('day')
                                .add(this.state.options.scope.after, 'days')
                                .endOf('day')
                                .valueOf();
                        },

                        /**
                         * Setup and calculate everything
                         */
                        setup(itsUpdate = '') {
                            this.initialize(itsUpdate);
                            this.prepareDates();
                            this.initTimes();
                            this.calculateSteps();
                            this.computeCalendarWidths();
                            this.state.options.taskList.width = this.state.options.taskList.columns.reduce(
                                (prev, current) => {
                                    return { width: prev.width + current.width };
                                }, { width: 0 }
                            ).width;
                        },

                        /**
                         * Global resize event (from window.addEventListener)
                         */
                        globalOnResize() {
                            if (typeof this.$el === 'undefined' || !this.$el) {
                                return;
                            }
                            this.state.options.clientWidth = this.$el.clientWidth;
                            if (
                                this.state.options.taskList.widthFromPercentage >
                                (this.state.options.clientWidth / 100) * this.state.options.taskList.widthThreshold
                            ) {
                                const diff =
                                    this.state.options.taskList.widthFromPercentage -
                                    (this.state.options.clientWidth / 100) * this.state.options.taskList.widthThreshold;
                                let diffPercent = 100 - (diff / this.state.options.taskList.widthFromPercentage) * 100;
                                if (diffPercent < 0) {
                                    diffPercent = 0;
                                }
                                this.state.options.taskList.columns.forEach(column => {
                                    column.thresholdPercent = diffPercent;
                                });
                            } else {
                                this.state.options.taskList.columns.forEach(column => {
                                    column.thresholdPercent = 100;
                                });
                            }
                            this.calculateTaskListColumnsDimensions();
                            this.$emit('calendar-recalculate');
                            this.syncScrollTop();
                        }
                    },

                    computed: {
                        /**
                         * Get visible tasks
                         * Very important method which will bring us only those tasks that are visible inside gantt chart
                         * For example when task is collapsed - children of this task are not visible - we should not render them
                         */
                        visibleTasks() {
                            const visibleTasks = this.state.tasks.filter(task => this.isTaskVisible(task));
                            const maxRows = visibleTasks.slice(0, this.state.options.maxRows);
                            this.state.options.rowsHeight = this.getTasksHeight(maxRows);
                            let heightCompensation = 0;
                            if (this.state.options.maxHeight && this.state.options.rowsHeight > this.state.options.maxHeight) {
                                heightCompensation = this.state.options.rowsHeight - this.state.options.maxHeight;
                                this.state.options.rowsHeight = this.state.options.maxHeight;
                            }
                            this.state.options.height = this.getHeight(maxRows) - heightCompensation;
                            this.state.options.allVisibleTasksHeight = this.getTasksHeight(visibleTasks);
                            this.state.options.outerHeight = this.getHeight(maxRows, true) - heightCompensation;
                            let len = visibleTasks.length;
                            for (let index = 0; index < len; index++) {
                                let task = visibleTasks[index];
                                task.width =
                                    task.duration / this.state.options.times.timePerPixel - this.style['grid-line-vertical']['stroke-width'];
                                if (task.width < 0) {
                                    task.width = 0;
                                }
                                task.height = this.state.options.row.height;
                                task.x = this.timeToPixelOffsetX(task.startTime);
                                task.y =
                                    (this.state.options.row.height + this.state.options.chart.grid.horizontal.gap * 2) * index +
                                    this.state.options.chart.grid.horizontal.gap;
                            }
                            return visibleTasks;
                        },

                        /**
                         * Style shortcut
                         */
                        style() {
                            return this.state.dynamicStyle;
                        },

                        /**
                         * Get columns and compute dimensions on the fly
                         */
                        getTaskListColumns() {
                            this.calculateTaskListColumnsDimensions();
                            return this.state.options.taskList.columns;
                        },

                        /**
                         * Tasks used for communicate with parent component
                         */
                        outputTasks() {
                            return this.state.tasks;
                        },

                        /**
                         * Options used to communicate with parent component
                         */
                        outputOptions() {
                            return this.state.options;
                        }
                    },

                    /**
                     * Watch tasks after gantt instance is created and react when we have new kids on the block
                     */
                    created() {
                        this.initializeEvents();
                        this.setup();
                        this.state.unwatchTasks = this.$watch(
                            'tasks',
                            tasks => {
                                const notEqual = notEqualDeep(tasks, this.outputTasks);
                                if (notEqual) {
                                    this.setup('tasks');
                                }
                            }, { deep: true }
                        );
                        this.state.unwatchOptions = this.$watch(
                            'options',
                            opts => {
                                const notEqual = notEqualDeep(opts, this.outputOptions);
                                if (notEqual) {
                                    this.setup('options');
                                }
                            }, { deep: true }
                        );
                        this.state.unwatchStyle = this.$watch(
                            'dynamicStyle',
                            style => {
                                const notEqual = notEqualDeep(style, this.dynamicStyle);
                                if (notEqual) {
                                    this.initializeStyle();
                                }
                            }, { deep: true, immediate: true }
                        );

                        this.state.unwatchOutputTasks = this.$watch(
                            'outputTasks',
                            tasks => {
                                this.$emit('tasks-changed', tasks.map(task => task));
                            }, { deep: true }
                        );
                        this.state.unwatchOutputOptions = this.$watch(
                            'outputOptions',
                            options => {
                                this.$emit('options-changed', mergeDeep({}, options));
                            }, { deep: true }
                        );
                        this.state.unwatchOutputStyle = this.$watch(
                            'style',
                            style => {
                                this.$emit('dynamic-style-changed', mergeDeep({}, style));
                            }, { deep: true }
                        );

                        this.$root.$emit('gantt-elastic-created', this);
                        this.$emit('created', this);
                    },

                    /**
                     * Emit before-mount event
                     */
                    beforeMount() {
                        this.$emit('before-mount', this);
                    },

                    /**
                     * Emit ready/mounted events and deliver this gantt instance to outside world when needed
                     */
                    mounted() {
                        this.state.options.clientWidth = this.$el.clientWidth;
                        this.state.resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__["default"]((entries, observer) => {
                            this.globalOnResize();
                        });
                        this.state.resizeObserver.observe(this.$el.parentNode);
                        this.globalOnResize();
                        this.$emit('ready', this);
                        this.$root.$emit('gantt-elastic-mounted', this);
                        this.$emit('mounted', this);
                        this.$root.$emit('gantt-elastic-ready', this);
                    },

                    /**
                     * Emit event when data was changed and before update (you can cleanup dom events here for example)
                     */
                    beforeUpdate() {
                        this.$emit('before-update');
                    },

                    /**
                     * Emit event when gantt-elastic view was updated
                     */
                    updated() {
                        this.$nextTick(() => {
                            this.$emit('updated');
                        });
                    },

                    /**
                     * Before destroy event - clean up
                     */
                    beforeDestroy() {
                        this.state.resizeObserver.unobserve(this.$el.parentNode);
                        this.state.unwatchTasks();
                        this.state.unwatchOptions();
                        this.state.unwatchStyle();
                        this.state.unwatchOutputTasks();
                        this.state.unwatchOutputOptions();
                        this.state.unwatchOutputStyle();
                        this.$emit('before-destroy');
                    },

                    /**
                     * Emit event after gantt-elastic was destroyed
                     */
                    destroyed() {
                        this.$emit('destroyed');
                    }
                };
                /* harmony default export */
                __webpack_exports__["default"] = (GanttElastic);


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/Calendar.vue?vue&type=script&lang=js&":
            /*!*************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/Calendar.vue?vue&type=script&lang=js& ***!
              \*************************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
                /* harmony import */
                var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */
                var _CalendarRow_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./CalendarRow.vue */ "./src/components/Calendar/CalendarRow.vue");
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //




                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'Calendar',
                    components: {
                        CalendarRow: _CalendarRow_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
                    },
                    inject: ['root'],
                    data() {
                        return {};
                    },

                    methods: {
                        /**
                         * How many hours will fit?
                         *
                         * @returns {object}
                         */
                        howManyHoursFit(dayIndex) {
                            const stroke = 1;
                            const additionalSpace = stroke + 2;
                            let fullCellWidth = this.root.state.options.times.steps[dayIndex].width.px;
                            let formatNames = Object.keys(this.root.state.options.calendar.hour.format);
                            for (let hours = 24; hours > 1; hours = Math.ceil(hours / 2)) {
                                for (let formatName of formatNames) {
                                    if (
                                        (this.root.state.options.calendar.hour.maxWidths[formatName] + additionalSpace) * hours <= fullCellWidth &&
                                        hours > 1
                                    ) {
                                        return {
                                            count: hours,
                                            type: formatName
                                        };
                                    }
                                }
                            }
                            return {
                                count: 0,
                                type: ''
                            };
                        },

                        /**
                         * How many days will fit?
                         *
                         * @returns {object}
                         */
                        howManyDaysFit() {
                            const stroke = 1;
                            const additionalSpace = stroke + 2;
                            let fullWidth = this.root.state.options.width;
                            let formatNames = Object.keys(this.root.state.options.calendar.day.format);
                            for (let days = this.root.state.options.times.steps.length; days > 1; days = Math.ceil(days / 2)) {
                                for (let formatName of formatNames) {
                                    if (
                                        (this.root.state.options.calendar.day.maxWidths[formatName] + additionalSpace) * days <= fullWidth &&
                                        days > 1
                                    ) {
                                        return {
                                            count: days,
                                            type: formatName
                                        };
                                    }
                                }
                            }
                            return {
                                count: 0,
                                type: ''
                            };
                        },

                        /**
                         * How many months will fit?
                         *
                         * @returns {object}
                         */
                        howManyMonthsFit() {
                            const stroke = 1;
                            const additionalSpace = stroke + 2;
                            let fullWidth = this.root.state.options.width;
                            let formatNames = Object.keys(this.root.state.options.calendar.month.format);
                            let currentMonth = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.firstTime);
                            let previousMonth = currentMonth.clone();
                            const lastTime = this.root.state.options.times.lastTime;
                            let monthsCount = this.root.monthsCount(
                                this.root.state.options.times.firstTime,
                                this.root.state.options.times.lastTime
                            );
                            if (monthsCount === 1) {
                                for (let formatName of formatNames) {
                                    if (this.root.state.options.calendar.month.maxWidths[formatName] + additionalSpace <= fullWidth) {
                                        return {
                                            count: 1,
                                            type: formatName
                                        };
                                    }
                                }
                            }
                            for (let months = monthsCount; months > 1; months = Math.ceil(months / 2)) {
                                for (let formatName of formatNames) {
                                    if (
                                        (this.root.state.options.calendar.month.maxWidths[formatName] + additionalSpace) * months <= fullWidth &&
                                        months > 1
                                    ) {
                                        return {
                                            count: months,
                                            type: formatName
                                        };
                                    }
                                }
                            }
                            return {
                                count: 0,
                                type: formatNames[0]
                            };
                        },

                        /**
                         * Generate hours
                         *
                         * @returns {array}
                         */
                        generateHours() {
                            let allHours = [];
                            if (!this.root.state.options.calendar.hour.display) {
                                return allHours;
                            }
                            const steps = this.root.state.options.times.steps;
                            const localeName = this.root.state.options.locale.name;
                            for (let hourIndex = 0, len = steps.length; hourIndex < len; hourIndex++) {
                                const hoursCount = this.howManyHoursFit(hourIndex);
                                if (hoursCount.count === 0) {
                                    continue;
                                }
                                const hours = { key: hourIndex + 'step', children: [] };
                                const hourStep = 24 / hoursCount.count;
                                const hourWidthPx = steps[hourIndex].width.px / hoursCount.count;
                                for (let i = 0, len = hoursCount.count; i < len; i++) {
                                    const hour = i * hourStep;
                                    let index = hourIndex;
                                    if (hourIndex > 0) {
                                        index = hourIndex - Math.floor(hourIndex / 24) * 24;
                                    }
                                    let textWidth = 0;
                                    if (typeof this.root.state.options.calendar.hour.widths[index] !== 'undefined') {
                                        textWidth = this.root.state.options.calendar.hour.widths[index][hoursCount.type];
                                    }
                                    let x = steps[hourIndex].offset.px + hourWidthPx * i;
                                    hours.children.push({
                                        index: hourIndex,
                                        key: 'h' + i,
                                        x,
                                        y: this.root.state.options.calendar.day.height + this.root.state.options.calendar.month.height,
                                        width: hourWidthPx,
                                        textWidth,
                                        height: this.root.state.options.calendar.hour.height,
                                        label: this.root.state.options.calendar.hour.formatted[hoursCount.type][hour]
                                    });
                                }
                                allHours.push(hours);
                            }
                            return allHours;
                        },

                        /**
                         * Generate days
                         *
                         * @returns {array}
                         */
                        generateDays() {
                            let days = [];
                            if (!this.root.state.options.calendar.day.display) {
                                return days;
                            }
                            const daysCount = this.howManyDaysFit();
                            if (daysCount.count === 0) {
                                return days;
                            }
                            const steps = this.root.state.options.times.steps;
                            const localeName = this.root.state.options.locale.name;
                            const dayStep = Math.ceil(steps.length / daysCount.count);
                            for (let dayIndex = 0, len = steps.length; dayIndex < len; dayIndex += dayStep) {
                                let dayWidthPx = 0;
                                // day could be shorter (daylight saving time) so join widths and divide
                                for (let currentStep = 0; currentStep < dayStep; currentStep++) {
                                    if (typeof steps[dayIndex + currentStep] !== 'undefined') {
                                        dayWidthPx += steps[dayIndex + currentStep].width.px;
                                    }
                                }
                                const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(steps[dayIndex].time);
                                let textWidth = 0;
                                if (typeof this.root.state.options.calendar.day.widths[dayIndex] !== 'undefined') {
                                    textWidth = this.root.state.options.calendar.day.widths[dayIndex][daysCount.type];
                                }
                                let x = steps[dayIndex].offset.px;
                                days.push({
                                    index: dayIndex,
                                    key: steps[dayIndex].time + 'd',
                                    x,
                                    y: this.root.state.options.calendar.month.height,
                                    width: dayWidthPx,
                                    textWidth,
                                    height: this.root.state.options.calendar.day.height,
                                    label: this.root.state.options.calendar.day.format[daysCount.type](date.locale(localeName))
                                });
                            }
                            return days.map(item => ({
                                key: item.key,
                                children: [item]
                            }));
                        },

                        /**
                         * Generate months
                         *
                         * @returns {array}
                         */
                        generateMonths() {
                            let months = [];
                            if (!this.root.state.options.calendar.month.display) {
                                return months;
                            }
                            const monthsCount = this.howManyMonthsFit();
                            if (monthsCount.count === 0) {
                                return months;
                            }
                            const steps = this.root.state.options.times.steps;
                            const localeName = this.root.state.options.locale.name;
                            let formatNames = Object.keys(this.root.state.options.calendar.month.format);
                            let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.firstTime);
                            for (let monthIndex = 0; monthIndex < monthsCount.count; monthIndex++) {
                                let monthWidth = 0;
                                let monthOffset = Number.MAX_SAFE_INTEGER;
                                let finalDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(currentDate)
                                    .add(1, 'month')
                                    .startOf('month');
                                if (finalDate.valueOf() > this.root.state.options.times.lastTime) {
                                    finalDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.lastTime);
                                }
                                // we must find first and last step to get the offsets / widths
                                for (let step = 0, len = this.root.state.options.times.steps.length; step < len; step++) {
                                    let currentStep = this.root.state.options.times.steps[step];
                                    if (currentStep.time >= currentDate.valueOf() && currentStep.time < finalDate.valueOf()) {
                                        monthWidth += currentStep.width.px;
                                        if (currentStep.offset.px < monthOffset) {
                                            monthOffset = currentStep.offset.px;
                                        }
                                    }
                                }
                                let label = '';
                                let choosenFormatName;
                                for (let formatName of formatNames) {
                                    if (this.root.state.options.calendar.month.maxWidths[formatName] + 2 <= monthWidth) {
                                        label = this.root.state.options.calendar.month.format[formatName](currentDate.locale(localeName));
                                        choosenFormatName = formatName;
                                    }
                                }
                                let textWidth = 0;
                                if (typeof this.root.state.options.calendar.month.widths[monthIndex] !== 'undefined') {
                                    textWidth = this.root.state.options.calendar.month.widths[monthIndex][choosenFormatName];
                                }
                                let x = monthOffset;
                                months.push({
                                    index: monthIndex,
                                    key: monthIndex + 'm',
                                    x,
                                    y: 0,
                                    width: monthWidth,
                                    textWidth,
                                    choosenFormatName,
                                    height: this.root.state.options.calendar.month.height,
                                    label
                                });
                                currentDate = currentDate.add(1, 'month').startOf('month');
                                if (currentDate.valueOf() > this.root.state.options.times.lastTime) {
                                    currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.lastTime);
                                }
                            }
                            return months.map(item => ({
                                key: item.key,
                                children: [item]
                            }));
                        },

                        /**
                         * Sum all calendar rows height and return result
                         *
                         * @returns {int}
                         */
                        calculateCalendarDimensions({ hours, days, months }) {
                            let height = 0;
                            if (this.root.state.options.calendar.hour.display && hours.length > 0) {
                                height += this.root.state.options.calendar.hour.height;
                            }
                            if (this.root.state.options.calendar.day.display && days.length > 0) {
                                height += this.root.state.options.calendar.day.height;
                            }
                            if (this.root.state.options.calendar.month.display && months.length > 0) {
                                height += this.root.state.options.calendar.month.height;
                            }
                            this.root.state.options.calendar.height = height;
                        }
                    },

                    computed: {
                        dates() {
                            const hours = this.generateHours();
                            const days = this.generateDays();
                            const months = this.generateMonths();
                            const allDates = { hours, days, months };
                            this.calculateCalendarDimensions(allDates);
                            return allDates;
                        }
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js&":
            /*!****************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js& ***!
              \****************************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //

                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'CalendarRow',
                    inject: ['root'],
                    props: ['items', 'which'],
                    data() {
                        return {};
                    },
                    methods: {
                        /**
                         * Get x position
                         *
                         * @returns {number}
                         */
                        getTextX(item) {
                            let x = item.x + item.width / 2 - item.textWidth / 2;
                            if (this.which === 'month' && this.root.isInsideViewPort(item.x, item.width, 0)) {
                                let scrollWidth = this.root.state.options.scroll.chart.right - this.root.state.options.scroll.chart.left;
                                x = this.root.state.options.scroll.chart.left + scrollWidth / 2 - item.textWidth / 2 + 2;
                                if (x + item.textWidth + 2 > item.x + item.width) {
                                    x = item.x + item.width - item.textWidth - 2;
                                } else if (x < item.x) {
                                    x = item.x + 2;
                                }
                            }
                            return x - item.x;
                        }
                    },
                    computed: {
                        rowStyle() {
                            return {...this.root.style['calendar-row'], ...this.root.style['calendar-row--' + this.which] };
                        },
                        rectStyle() {
                            return {...this.root.style['calendar-row-rect'], ...this.root.style['calendar-row-rect--' + this.which] };
                        },
                        rectChildStyle() {
                            const basicStyle = {
                                ...this.root.style['calendar-row-rect-child'],
                                ...this.root.style['calendar-row-rect-child--' + this.which]
                            };
                            const style = [];
                            for (let item of this.items) {
                                const childrenStyle = [];
                                for (let child of item.children) {
                                    childrenStyle.push({
                                        ...basicStyle,
                                        width: child.width + 'px',
                                        height: child.height + 'px'
                                    });
                                }
                                style.push(childrenStyle);
                            }
                            return style;
                        },
                        textStyle() {
                            const basicStyle = {
                                ...this.root.style['calendar-row-text'],
                                ...this.root.style['calendar-row-text--' + this.which]
                            };
                            return child => {
                                const style = {...basicStyle };
                                if (this.which === 'month') {
                                    style.left = this.getTextX(child) + 'px';
                                }
                                return style;
                            };
                        }
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Chart.vue?vue&type=script&lang=js&":
            /*!*******************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Chart.vue?vue&type=script&lang=js& ***!
              \*******************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _Grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Grid.vue */ "./src/components/Chart/Grid.vue");
                /* harmony import */
                var _DaysHighlight_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./DaysHighlight.vue */ "./src/components/Chart/DaysHighlight.vue");
                /* harmony import */
                var _Calendar_Calendar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../Calendar/Calendar.vue */ "./src/components/Calendar/Calendar.vue");
                /* harmony import */
                var _DependencyLines_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./DependencyLines.vue */ "./src/components/Chart/DependencyLines.vue");
                /* harmony import */
                var _Row_Task_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./Row/Task.vue */ "./src/components/Chart/Row/Task.vue");
                /* harmony import */
                var _Row_Milestone_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./Row/Milestone.vue */ "./src/components/Chart/Row/Milestone.vue");
                /* harmony import */
                var _Row_Project_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./Row/Project.vue */ "./src/components/Chart/Row/Project.vue");
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //








                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'Chart',
                    components: {
                        Grid: _Grid_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
                        DependencyLines: _DependencyLines_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                        Calendar: _Calendar_Calendar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
                        Task: _Row_Task_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
                        Milestone: _Row_Milestone_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
                        Project: _Row_Project_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
                        DaysHighlight: _DaysHighlight_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
                    },
                    inject: ['root'],
                    data() {
                        return {
                            moving: false
                        };
                    },
                    /**
                     * Mounted
                     */
                    mounted() {
                        this.root.state.refs.chart = this.$refs.chart;
                        this.root.state.refs.chartCalendarContainer = this.$refs.chartCalendarContainer;
                        this.root.state.refs.chartGraphContainer = this.$refs.chartGraphContainer;
                        this.root.state.refs.chartGraph = this.$refs.chartGraph;
                        this.root.state.refs.chartGraphSvg = this.$refs.chartGraphSvg;
                    },

                    computed: {
                        /**
                         * Get view box
                         *
                         * @returns {string}
                         */
                        getViewBox() {
                            return `0 0 ${this.root.state.options.width} ${this.root.state.options.allVisibleTasksHeight}`;
                        }
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js&":
            /*!***************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js& ***!
              \***************************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
                /* harmony import */
                var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //


                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'DaysHighlight',
                    inject: ['root'],
                    data() {
                        return {};
                    },
                    methods: {
                        /**
                         * Get key
                         *
                         * @param {object} day
                         * @returns {string} key ideintifier for loop
                         */
                        getKey(day) {
                            return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(day.time).format('YYYY-MM-DD');
                        }
                    },
                    computed: {
                        /**
                         * Get working days
                         *
                         * @returns {array}
                         */
                        workingDays() {
                            return this.root.state.options.times.steps.filter(step => {
                                return this.root.state.options.calendar.workingDays.indexOf(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(step.time).day()) === -1;
                            });
                        },

                        /**
                         * Show working days?
                         *
                         * @returns {bool}
                         */
                        showWorkingDays() {
                            const calendar = this.root.state.options.calendar;
                            if (
                                typeof calendar.workingDays !== 'undefined' &&
                                Array.isArray(calendar.workingDays) &&
                                calendar.workingDays.length
                            ) {
                                return true;
                            }
                            return false;
                        }
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js&":
            /*!*****************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js& ***!
              \*****************************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //

                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'DependencyLines',
                    inject: ['root'],
                    props: ['tasks'],
                    data() {
                        return {};
                    },
                    methods: {
                        /**
                         * Get path points
                         *
                         * @param {any} fromTaskId
                         * @param {any} toTaskId
                         * @returns {string}
                         */
                        getPoints(fromTaskId, toTaskId) {
                            const fromTask = this.root.getTask(fromTaskId);
                            const toTask = this.root.getTask(toTaskId);
                            if (
                                fromTask === null ||
                                toTask === null ||
                                !this.root.isTaskVisible(toTask) ||
                                !this.root.isTaskVisible(fromTask)
                            ) {
                                return null;
                            }
                            const startX = fromTask.x + fromTask.width;
                            const startY = fromTask.y + fromTask.height / 2;
                            const stopX = toTask.x;
                            const stopY = toTask.y + toTask.height / 2;
                            const distanceX = stopX - startX;
                            let distanceY;
                            let yMultiplier = 1;
                            if (stopY >= startY) {
                                distanceY = stopY - startY;
                            } else {
                                distanceY = startY - stopY;
                                yMultiplier = -1;
                            }
                            const offset = 10;
                            const roundness = 4;
                            const isBefore = distanceX <= offset + roundness;
                            let points = `M ${startX} ${startY}
          L ${startX + offset},${startY} `;
                            if (isBefore) {
                                points += `Q ${startX + offset + roundness},${startY} ${startX + offset + roundness},${startY +
          roundness * yMultiplier}
            L ${startX + offset + roundness},${startY + (distanceY * yMultiplier) / 2 - roundness * yMultiplier}
            Q ${startX + offset + roundness},${startY + (distanceY * yMultiplier) / 2} ${startX + offset},${startY +
          (distanceY * yMultiplier) / 2}
            L ${startX - offset + distanceX},${startY + (distanceY * yMultiplier) / 2}
            Q ${startX - offset + distanceX - roundness},${startY + (distanceY * yMultiplier) / 2} ${startX -
          offset +
          distanceX -
          roundness},${startY + (distanceY * yMultiplier) / 2 + roundness * yMultiplier}
            L ${startX - offset + distanceX - roundness},${stopY - roundness * yMultiplier}
            Q ${startX - offset + distanceX - roundness},${stopY} ${startX - offset + distanceX},${stopY}
            L ${stopX},${stopY}`;
                            } else {
                                points += `L ${startX + distanceX / 2 - roundness},${startY}
            Q ${startX + distanceX / 2},${startY} ${startX + distanceX / 2},${startY + roundness * yMultiplier}
            L ${startX + distanceX / 2},${stopY - roundness * yMultiplier}
            Q ${startX + distanceX / 2},${stopY} ${startX + distanceX / 2 + roundness},${stopY}
            L ${stopX},${stopY}`;
                            }
                            return points;
                        }
                    },
                    computed: {
                        /**
                         * Get tasks which are dependent on other tasks
                         *
                         * @returns {array}
                         */
                        dependencyTasks() {
                            return this.tasks
                                .filter(task => typeof task.dependentOn !== 'undefined')
                                .map(task => {
                                    task.dependencyLines = task.dependentOn.map(id => {
                                        return { points: this.getPoints(id, task.id) };
                                    });
                                    return task;
                                })
                                .filter(task => task.dependencyLines.points !== null);
                        }
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Grid.vue?vue&type=script&lang=js&":
            /*!******************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Grid.vue?vue&type=script&lang=js& ***!
              \******************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //

                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'Grid',
                    inject: ['root'],
                    data() {
                        return {};
                    },
                    /**
                     * Created
                     */
                    created() {
                        this.root.$on('recenterPosition', this.recenterPosition);
                    },

                    /**
                     * Mounted
                     */
                    mounted() {
                        this.$nextTick(() => {
                            this.$nextTick(() => {
                                // because of stupid slider :/
                                this.root.scrollToTime(this.timeLinePosition.time);
                            });
                        });
                    },

                    methods: {
                        /**
                         * Recenter position - go to current time line
                         */
                        recenterPosition() {
                            this.root.scrollToTime(this.timeLinePosition.time);
                        }
                    },

                    computed: {
                        /**
                         * Generate vertical lines of the grid
                         *
                         * @returns {array}
                         */
                        verticalLines() {
                            let lines = [];
                            const state = this.root.state;
                            state.options.times.steps.forEach(step => {
                                if (this.root.isInsideViewPort(step.offset.px, 1)) {
                                    lines.push({
                                        key: step.time,
                                        x1: step.offset.px,
                                        y1: 0,
                                        x2: step.offset.px,
                                        y2: state.tasks.length * (state.options.row.height + state.options.chart.grid.horizontal.gap * 2) +
                                            this.root.style['grid-line-vertical']['stroke-width']
                                    });
                                }
                            });
                            return lines;
                        },

                        /**
                         * Generate horizontal lines of the grid
                         *
                         * @returns {array}
                         */
                        horizontalLines() {
                            let lines = [];
                            const state = this.root.state.options;
                            let tasks = this.root.visibleTasks;
                            for (let index = 0, len = tasks.length; index <= len; index++) {
                                const y =
                                    index * (state.row.height + state.chart.grid.horizontal.gap * 2) +
                                    this.root.style['grid-line-vertical']['stroke-width'] / 2;
                                lines.push({
                                    key: 'hl' + index,
                                    x1: 0,
                                    y1: y,
                                    x2: '100%',
                                    y2: y
                                });
                            }
                            return lines;
                        },

                        /**
                         * Check if specified line is inside viewport (visible)
                         *
                         * @returns {function}
                         */
                        inViewPort() {
                            return line => {
                                const state = this.root.state.options;
                                return line.x1 >= state.scroll.chart.left && line.x1 <= state.scroll.chart.right;
                            };
                        },

                        /**
                         * Get current time line position
                         *
                         * @returns {object}
                         */
                        timeLinePosition() {
                            const d = new Date();
                            const current = d.getTime();
                            const currentOffset = this.root.timeToPixelOffsetX(current);
                            const timeLine = {
                                x: 0,
                                y1: 0,
                                y2: '100%',
                                dateTime: '',
                                time: current
                            };
                            timeLine.x = currentOffset;
                            timeLine.dateTime = d.toLocaleDateString();
                            return timeLine;
                        }
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js&":
            /*!*************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js& ***!
              \*************************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //

                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'ProgressBar',
                    inject: ['root'],
                    props: ['task'],
                    data() {
                        return {};
                    },

                    computed: {
                        /**
                         * Get progress width
                         *
                         * @returns {string}
                         */
                        getProgressWidth() {
                            return this.task.progress + '%';
                        },

                        /**
                         * Get line points
                         *
                         * @returns {string}
                         */
                        getLinePoints() {
                            const start = (this.task.width / 100) * this.task.progress;
                            return `M ${start} 0 L ${start} ${this.task.height}`;
                        },

                        /**
                         * Get solid style
                         *
                         * @returns {object}
                         */
                        getSolidStyle() {
                            return Object.assign({}, this.root.state.options.chart.progress.styles.bar.solid, this.task.progressBarStyle.bar);
                        },

                        /**
                         * Get line style
                         *
                         * @returns {object}
                         */
                        getLineStyle() {
                            return Object.assign({}, {
                                    stroke: this.root.state.options.row.styles.bar.stroke + 'a0',
                                    'stroke-width': this.root.state.options.row.styles.bar['stroke-width'] / 2
                                },
                                this.task.style
                            );
                        }
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js&":
            /*!***************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js& ***!
              \***************************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _Text_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../Text.vue */ "./src/components/Chart/Text.vue");
                /* harmony import */
                var _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../ProgressBar.vue */ "./src/components/Chart/ProgressBar.vue");
                /* harmony import */
                var _Expander_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../Expander.vue */ "./src/components/Expander.vue");
                /* harmony import */
                var _Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./Task.mixin.js */ "./src/components/Chart/Row/Task.mixin.js");
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //





                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'Milestone',
                    components: {
                        ChartText: _Text_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
                        ProgressBar: _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
                        Expander: _Expander_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
                    },
                    inject: ['root'],
                    props: ['task'],
                    mixins: [_Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__["default"]],
                    data() {
                        return {};
                    },
                    computed: {
                        /**
                         * Get clip path id
                         *
                         * @returns {string}
                         */
                        clipPathId() {
                            return 'gantt-elastic__milestone-clip-path-' + this.task.id;
                        },

                        /**
                         * Get points
                         *
                         * @returns {string}
                         */
                        getPoints() {
                            const task = this.task;
                            const fifty = task.height / 2;
                            let offset = fifty;
                            if (task.width / 2 - offset < 0) {
                                offset = task.width / 2;
                            }
                            return `0,${fifty}
        ${offset},0
        ${task.width - offset},0
        ${task.width},${fifty}
        ${task.width - offset},${task.height}
        ${offset},${task.height}`;
                        }
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Project.vue?vue&type=script&lang=js&":
            /*!*************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Project.vue?vue&type=script&lang=js& ***!
              \*************************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _Text_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../Text.vue */ "./src/components/Chart/Text.vue");
                /* harmony import */
                var _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../ProgressBar.vue */ "./src/components/Chart/ProgressBar.vue");
                /* harmony import */
                var _Expander_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../Expander.vue */ "./src/components/Expander.vue");
                /* harmony import */
                var _Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./Task.mixin.js */ "./src/components/Chart/Row/Task.mixin.js");
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //





                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'Project',
                    components: {
                        ChartText: _Text_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
                        ProgressBar: _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
                        Expander: _Expander_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
                    },
                    inject: ['root'],
                    props: ['task'],
                    mixins: [_Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__["default"]],
                    data() {
                        return {};
                    },
                    computed: {
                        /**
                         * Get clip path id
                         *
                         * @returns {string}
                         */
                        clipPathId() {
                            return 'gantt-elastic__project-clip-path-' + this.task.id;
                        },

                        /**
                         * Get points
                         *
                         * @returns {string}
                         */
                        getPoints() {
                            const task = this.task;
                            const bottom = task.height - task.height / 4;
                            const corner = task.height / 6;
                            const smallCorner = task.height / 8;
                            return `M ${smallCorner},0
                L ${task.width - smallCorner} 0
                L ${task.width} ${smallCorner}
                L ${task.width} ${bottom}
                L ${task.width - corner} ${task.height}
                L ${task.width - corner * 2} ${bottom}
                L ${corner * 2} ${bottom}
                L ${corner} ${task.height}
                L 0 ${bottom}
                L 0 ${smallCorner}
                Z
        `;
                        },

                        /**
                         * Should we display expander?
                         *
                         * @returns {boolean}
                         */
                        displayExpander() {
                            const expander = this.root.state.options.chart.expander;
                            return expander.display || (expander.displayIfTaskListHidden && !this.root.state.options.taskList.display);
                        }
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Task.vue?vue&type=script&lang=js&":
            /*!**********************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Task.vue?vue&type=script&lang=js& ***!
              \**********************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _Text_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../Text.vue */ "./src/components/Chart/Text.vue");
                /* harmony import */
                var _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../ProgressBar.vue */ "./src/components/Chart/ProgressBar.vue");
                /* harmony import */
                var _Expander_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../Expander.vue */ "./src/components/Expander.vue");
                /* harmony import */
                var _Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./Task.mixin.js */ "./src/components/Chart/Row/Task.mixin.js");
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //





                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'Task',
                    components: {
                        ChartText: _Text_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
                        ProgressBar: _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
                        Expander: _Expander_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
                    },
                    inject: ['root'],
                    props: ['task'],
                    mixins: [_Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__["default"]],
                    data() {
                        return {};
                    },
                    computed: {
                        /**
                         * Get clip path id
                         *
                         * @returns {string}
                         */
                        clipPathId() {
                            return 'gantt-elastic__task-clip-path-' + this.task.id;
                        },

                        /**
                         * Get points
                         *
                         * @returns {string}
                         */
                        getPoints() {
                            const task = this.task;
                            return `0,0 ${task.width},0 ${task.width},${task.height} 0,${task.height}`;
                        }
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Text.vue?vue&type=script&lang=js&":
            /*!******************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Text.vue?vue&type=script&lang=js& ***!
              \******************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //

                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'ChartText',
                    inject: ['root'],
                    props: ['task'],
                    data() {
                        return {};
                    },
                    computed: {
                        /**
                         * Get width
                         *
                         * @returns {number}
                         */
                        getWidth() {
                            const textStyle = this.root.style['chart-row-text'];
                            this.root.state.ctx.font = `${textStyle['font-weight']} ${textStyle['font-size']} ${textStyle['font-family']}`;
                            const textWidth = this.root.state.ctx.measureText(this.task.label).width;
                            return textWidth + this.root.state.options.chart.text.xPadding * 2;
                        },

                        /**
                         * Get height
                         *
                         * @returns {number}
                         */
                        getHeight() {
                            return this.task.height + this.root.state.options.chart.grid.horizontal.gap * 2;
                        },

                        /**
                         * Get content style
                         *
                         * @returns {object}
                         */
                        contentStyle() {
                            return { height: '100%', 'line-height': this.getHeight + 'px' };
                        },

                        /**
                         * Should we render text as html?
                         *
                         * @returns {boolean}
                         */
                        html() {
                            const cols = this.root.state.options.taskList.columns;
                            for (let i = 0, len = cols.length; i < len; i++) {
                                const col = cols[i];
                                if (col.value === 'label' && typeof col.html !== 'undefined' && col.html) {
                                    return true;
                                }
                            }
                            return false;
                        }
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/Expander.vue?vue&type=script&lang=js&":
            /*!****************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Expander.vue?vue&type=script&lang=js& ***!
              \****************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //

                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'Expander',
                    inject: ['root'],
                    props: ['tasks', 'options', 'type'],
                    data() {
                        const border = 0.5;
                        return {
                            border,
                            borderStyle: {
                                'stroke-width': border
                            },
                            lineOffset: 5
                        };
                    },
                    computed: {
                        style() {
                            if (this.type !== 'taskList') {
                                return {};
                            }
                            const margin = this.root.state.options.taskList.expander.margin;
                            const padding = this.tasks[0].parents.length * this.root.state.options.taskList.expander.padding;
                            return {
                                'padding-left': padding + margin + 'px',
                                margin: 'auto 0'
                            };
                        },
                        /**
                         * Get all tasks
                         *
                         * @returns {array}
                         */
                        allChildren() {
                            const children = [];
                            this.tasks.forEach(task => {
                                task.allChildren.forEach(childId => {
                                    children.push(childId);
                                });
                            });
                            return children;
                        },
                        /**
                         * Is current expander collapsed?
                         *
                         * @returns {boolean}
                         */
                        collapsed() {
                            if (this.tasks.length === 0) {
                                return false;
                            }
                            let collapsed = 0;
                            for (let i = 0, len = this.tasks.length; i < len; i++) {
                                if (this.tasks[i].collapsed) {
                                    collapsed++;
                                }
                            }
                            return collapsed === this.tasks.length;
                        }
                    },
                    methods: {
                        /**
                         * Get specific class prefix
                         *
                         * @returns {string}
                         */
                        getClassPrefix(full = true) {
                            return `${full ? 'gantt-elastic__' : ''}${this.options.type}-expander`;
                        },
                        /**
                         * Toggle expander
                         */
                        toggle() {
                            if (this.tasks.length === 0) {
                                return;
                            }
                            const collapsed = !this.collapsed;
                            this.tasks.forEach(task => {
                                task.collapsed = collapsed;
                            });
                        }
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=script&lang=js&":
            /*!****************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainView.vue?vue&type=script&lang=js& ***!
              \****************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _TaskList_TaskList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./TaskList/TaskList.vue */ "./src/components/TaskList/TaskList.vue");
                /* harmony import */
                var _Chart_Chart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./Chart/Chart.vue */ "./src/components/Chart/Chart.vue");
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //




                let ignoreScrollEvents = false;

                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'MainView',
                    components: {
                        TaskList: _TaskList_TaskList_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
                        Chart: _Chart_Chart_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
                    },
                    inject: ['root'],
                    data() {
                        return {
                            defs: '',
                            mousePos: {
                                x: 0,
                                y: 0,
                                movementX: 0,
                                movementY: 0,
                                lastX: 0,
                                lastY: 0,
                                positiveX: 0,
                                positiveY: 0,
                                currentX: 0,
                                currentY: 0
                            }
                        };
                    },
                    /**
                     * Mounted
                     */
                    mounted() {
                        this.viewBoxWidth = this.$el.clientWidth;
                        this.root.state.refs.mainView = this.$refs.mainView;
                        this.root.state.refs.chartContainer = this.$refs.chartContainer;
                        this.root.state.refs.taskList = this.$refs.taskList;
                        this.root.state.refs.chartScrollContainerHorizontal = this.$refs.chartScrollContainerHorizontal;
                        this.root.state.refs.chartScrollContainerVertical = this.$refs.chartScrollContainerVertical;
                        document.addEventListener('mouseup', this.chartMouseUp.bind(this));
                        document.addEventListener('mousemove', this.chartMouseMove.bind(this));
                        document.addEventListener('touchmove', this.chartMouseMove.bind(this));
                        document.addEventListener('touchend', this.chartMouseUp.bind(this));
                    },
                    computed: {
                        /**
                         * Get margin left
                         *
                         * @returns {string}
                         */
                        getMarginLeft() {
                            if (!this.root.state.options.taskList.display) {
                                return '0px';
                            }
                            return this.root.state.options.taskList.finalWidth + 'px';
                        },

                        /**
                         * Get vertical style
                         *
                         * @returns {object}
                         */
                        verticalStyle() {
                            return {
                                width: this.root.state.options.scrollBarHeight + 'px',
                                height: this.root.state.options.rowsHeight + 'px',
                                'margin-top': this.root.state.options.calendar.height + this.root.state.options.calendar.gap + 'px'
                            };
                        },

                        /**
                         * Get view box
                         *
                         * @returns {string}
                         */
                        getViewBox() {
                            if (this.root.state.options.clientWidth) {
                                return `0 0 ${this.root.state.options.clientWidth - this.root.state.options.scrollBarHeight} ${
          this.root.state.options.height
        }`;
                            }
                            return `0 0 0 ${this.root.state.options.height}`;
                        }
                    },
                    methods: {
                        /**
                         * Emit event when mouse is moving inside main view
                         */
                        mouseMove(event) {
                            this.root.$emit('main-view-mousemove', event);
                        },

                        /**
                         * Emit mouseup event inside main view
                         */
                        mouseUp(event) {
                            this.root.$emit('main-view-mouseup', event);
                        },

                        /**
                         * Horizontal scroll event handler
                         */
                        onHorizontalScroll(ev) {
                            this.root.$emit('chart-scroll-horizontal', ev);
                        },

                        /**
                         * Vertical scroll event handler
                         */
                        onVerticalScroll(ev) {
                            this.root.$emit('chart-scroll-vertical', ev);
                        },

                        /**
                         * Mouse wheel event handler
                         */
                        chartWheel(ev) {
                            this.root.$emit('chart-wheel', ev);
                        },

                        /**
                         * Chart mousedown event handler
                         * Initiates drag scrolling mode
                         */
                        chartMouseDown(ev) {
                            if (typeof ev.touches !== 'undefined') {
                                this.mousePos.x = this.mousePos.lastX = ev.touches[0].screenX;
                                this.mousePos.y = this.mousePos.lastY = ev.touches[0].screenY;
                                this.mousePos.movementX = 0;
                                this.mousePos.movementY = 0;
                                this.mousePos.currentX = this.$refs.chartScrollContainerHorizontal.scrollLeft;
                                this.mousePos.currentY = this.$refs.chartScrollContainerVertical.scrollTop;
                            }
                            this.root.state.options.scroll.scrolling = true;
                        },

                        /**
                         * Chart mouseup event handler
                         * Deactivates drag scrolling mode
                         */
                        chartMouseUp(ev) {
                            this.root.state.options.scroll.scrolling = false;
                        },

                        /**
                         * Chart mousemove event handler
                         * When in drag scrolling mode this method calculate scroll movement
                         */
                        chartMouseMove(ev) {
                            if (this.root.state.options.scroll.scrolling) {
                                ev.preventDefault();
                                ev.stopImmediatePropagation();
                                ev.stopPropagation();
                                const touch = typeof ev.touches !== 'undefined';
                                let movementX, movementY;
                                if (touch) {
                                    const screenX = ev.touches[0].screenX;
                                    const screenY = ev.touches[0].screenY;
                                    movementX = this.mousePos.x - screenX;
                                    movementY = this.mousePos.y - screenY;
                                    this.mousePos.lastX = screenX;
                                    this.mousePos.lastY = screenY;
                                } else {
                                    movementX = ev.movementX;
                                    movementY = ev.movementY;
                                }
                                const horizontal = this.$refs.chartScrollContainerHorizontal;
                                const vertical = this.$refs.chartScrollContainerVertical;
                                let x = 0,
                                    y = 0;
                                if (touch) {
                                    x = this.mousePos.currentX + movementX * this.root.state.options.scroll.dragXMoveMultiplier;
                                } else {
                                    x = horizontal.scrollLeft - movementX * this.root.state.options.scroll.dragXMoveMultiplier;
                                }
                                horizontal.scrollLeft = x;
                                if (touch) {
                                    y = this.mousePos.currentY + movementY * this.root.state.options.scroll.dragYMoveMultiplier;
                                } else {
                                    y = vertical.scrollTop - movementY * this.root.state.options.scroll.dragYMoveMultiplier;
                                }
                                vertical.scrollTop = y;
                            }
                        }
                    },

                    /**
                     * Before destroy event - clean up
                     */
                    beforeDestroy() {
                        document.removeEventListener('mouseup', this.chartMouseUp);
                        document.removeEventListener('mousemove', this.chartMouseMove);
                        document.removeEventListener('touchmove', this.chartMouseMove);
                        document.removeEventListener('touchend', this.chartMouseUp);
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js&":
            /*!***************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js& ***!
              \***************************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //

                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'ItemColumn',
                    inject: ['root'],
                    props: ['column', 'task'],
                    data() {
                        return {};
                    },
                    methods: {
                        /**
                         * Emit event
                         *
                         * @param {String} eventName
                         * @param {Event} event
                         */
                        emitEvent(eventName, event) {
                            if (typeof this.column.events !== 'undefined' && typeof this.column.events[eventName] === 'function') {
                                this.column.events[eventName]({ event, data: this.task, column: this.column });
                            }
                            this.root.$emit(`taskList-${this.task.type}-${eventName}`, { event, data: this.task, column: this.column });
                        }
                    },
                    computed: {
                        /**
                         * Should we display html or just text?
                         *
                         * @returns {boolean}
                         */
                        html() {
                            if (typeof this.column.html !== 'undefined' && this.column.html === true) {
                                return true;
                            }
                            return false;
                        },

                        /**
                         * Get column value
                         *
                         * @returns {any|string}
                         */
                        value() {
                            if (typeof this.column.value === 'function') {
                                return this.column.value(this.task);
                            }
                            return this.task[this.column.value];
                        },

                        itemColumnStyle() {
                            return {
                                ...this.root.style['task-list-item-column'],
                                ...this.column.style['task-list-item-column'],
                                width: this.column.finalWidth + 'px',
                                height: this.column.height + 'px'
                            };
                        },

                        wrapperStyle() {
                            return {
                                ...this.root.style['task-list-item-value-wrapper'],
                                ...this.column.style['task-list-item-value-wrapper']
                            };
                        },

                        containerStyle() {
                            return {
                                ...this.root.style['task-list-item-value-container'],
                                ...this.column.style['task-list-item-value-container']
                            };
                        },

                        valueStyle() {
                            return {...this.root.style['task-list-item-value'], ...this.column.style['task-list-item-value'] };
                        }
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskList.vue?vue&type=script&lang=js&":
            /*!*************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskList.vue?vue&type=script&lang=js& ***!
              \*************************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _TaskListHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./TaskListHeader.vue */ "./src/components/TaskList/TaskListHeader.vue");
                /* harmony import */
                var _TaskListItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./TaskListItem.vue */ "./src/components/TaskList/TaskListItem.vue");
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //



                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'TaskList',
                    components: {
                        TaskListHeader: _TaskListHeader_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
                        TaskListItem: _TaskListItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
                    },
                    inject: ['root'],
                    data() {
                        return {};
                    },

                    /**
                     * Mounted
                     */
                    mounted() {
                        this.root.state.refs.taskListWrapper = this.$refs.taskListWrapper;
                        this.root.state.refs.taskList = this.$refs.taskList;
                        this.root.state.refs.taskListItems = this.$refs.taskListItems;
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js&":
            /*!*******************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js& ***!
              \*******************************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _Expander_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../Expander.vue */ "./src/components/Expander.vue");
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //


                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'TaskListHeader',
                    components: {
                        TaskListExpander: _Expander_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
                    },

                    inject: ['root'],

                    data() {
                        return {
                            resizer: {
                                moving: false,
                                x: 0
                            }
                        };
                    },

                    computed: {
                        /**
                         * Is this row collapsible?
                         *
                         * @returns {bool}
                         */
                        collapsible() {
                            return this.root.state.tasks.filter(task => task.allChildren.length > 0);
                        }
                    },

                    methods: {
                        /**
                         * Get style
                         *
                         * @returns {object}
                         */
                        getStyle(column) {
                            return {
                                width: column.finalWidth + 'px'
                            };
                        },
                        /**
                         * Resizer mouse down event handler
                         */
                        resizerMouseDown(event, column) {
                            if (!this.resizer.moving) {
                                this.resizer.moving = column;
                                this.resizer.x = event.clientX;
                                this.resizer.initialWidth = column.width;
                                this.root.$emit('taskList-column-width-change-start', this.resizer.moving);
                            }
                        },

                        /**
                         * Resizer mouse move event handler
                         */
                        resizerMouseMove(event) {
                            if (this.resizer.moving) {
                                const lastWidth = this.resizer.moving.width;
                                this.resizer.moving.width = this.resizer.initialWidth + event.clientX - this.resizer.x;
                                if (this.resizer.moving.width < this.root.state.options.taskList.minWidth) {
                                    this.resizer.moving.width = this.root.state.options.taskList.minWidth;
                                }
                                if (lastWidth !== this.resizer.moving.width) {
                                    this.root.$emit('taskList-column-width-change', this.resizer.moving);
                                }
                            }
                        },

                        /**
                         * Resizer mouse up event handler
                         */
                        resizerMouseUp(event) {
                            if (this.resizer.moving) {
                                this.root.$emit('taskList-column-width-change-stop', this.resizer.moving);
                                this.resizer.moving = false;
                            }
                        }
                    },

                    /**
                     * Created
                     */
                    created() {
                        this.mouseUpListener = document.addEventListener('mouseup', this.resizerMouseUp.bind(this));
                        this.mouseMoveListener = document.addEventListener('mousemove', this.resizerMouseMove.bind(this));
                        this.root.$on('main-view-mousemove', this.resizerMouseMove);
                        this.root.$on('main-view-mouseup', this.resizerMouseUp);
                    },

                    /**
                     * Before destroy event - clear all event listeners
                     */
                    beforeDestroy() {
                        document.removeEventListener('mouseup', this.resizerMouseUp);
                        document.removeEventListener('mousemove', this.resizerMouseMove);
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js&":
            /*!*****************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js& ***!
              \*****************************************************************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _Expander_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../Expander.vue */ "./src/components/Expander.vue");
                /* harmony import */
                var _ItemColumn_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./ItemColumn.vue */ "./src/components/TaskList/ItemColumn.vue");
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //




                /* harmony default export */
                __webpack_exports__["default"] = ({
                    name: 'TaskListItem',
                    components: {
                        TaskListExpander: _Expander_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
                        ItemColumn: _ItemColumn_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
                    },
                    inject: ['root'],
                    props: ['task'],
                    data() {
                        return {};
                    },
                    computed: {
                        columns() {
                            return this.root.state.options.taskList.columns;
                        }
                    }
                });


                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=template&id=02c6304c&":
            /*!*******************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=template&id=02c6304c& ***!
              \*******************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "div", { staticClass: "gantt-elastic", staticStyle: { width: "100%" } }, [
                            _vm._t("header"),
                            _vm._v(" "),
                            _c("main-view", { ref: "mainView" }),
                            _vm._v(" "),
                            _vm._t("footer")
                        ],
                        2
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2&":
            /*!***********************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2& ***!
              \***********************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "div", {
                            staticClass: "gantt-elastic__calendar-wrapper",
                            style: Object.assign({}, _vm.root.style["calendar-wrapper"], {
                                width: _vm.root.state.options.width + "px"
                            })
                        }, [
                            _c(
                                "div", {
                                    staticClass: "gantt-elastic__calendar",
                                    style: Object.assign({}, _vm.root.style["calendar"], {
                                        width: _vm.root.state.options.width + "px"
                                    })
                                }, [
                                    _vm.root.state.options.calendar.month.display ?
                                    _c("calendar-row", {
                                        attrs: { items: _vm.dates.months, which: "month" }
                                    }) :
                                    _vm._e(),
                                    _vm._v(" "),
                                    _vm.root.state.options.calendar.day.display ?
                                    _c("calendar-row", {
                                        attrs: { items: _vm.dates.days, which: "day" }
                                    }) :
                                    _vm._e(),
                                    _vm._v(" "),
                                    _vm.root.state.options.calendar.hour.display ?
                                    _c("calendar-row", {
                                        attrs: { items: _vm.dates.hours, which: "hour" }
                                    }) :
                                    _vm._e()
                                ],
                                1
                            )
                        ]
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb&":
            /*!**************************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb& ***!
              \**************************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "div", {
                            class: "gantt-elastic__calendar-row gantt-elastic__calendar-row--" + _vm.which,
                            style: _vm.rowStyle
                        },
                        _vm._l(_vm.items, function(item, itemIndex) {
                            return _c(
                                "div", {
                                    key: item.key,
                                    class: "gantt-elastic__calendar-row-rect gantt-elastic__calendar-row-rect--" +
                                        _vm.which,
                                    style: _vm.rectStyle
                                },
                                _vm._l(item.children, function(child, childIndex) {
                                    return _c(
                                        "div", {
                                            key: child.key,
                                            class: "gantt-elastic__calendar-row-rect-child gantt-elastic__calendar-row-rect-child--" +
                                                _vm.which,
                                            style: _vm.rectChildStyle[itemIndex][childIndex]
                                        }, [
                                            _c(
                                                "div", {
                                                    class: "gantt-elastic__calendar-row-text gantt-elastic__calendar-row-text--" +
                                                        _vm.which,
                                                    style: _vm.textStyle(child)
                                                }, [_vm._v("\n        " + _vm._s(child.label) + "\n      ")]
                                            )
                                        ]
                                    )
                                }),
                                0
                            )
                        }),
                        0
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd&":
            /*!*****************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd& ***!
              \*****************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "div", {
                            ref: "chart",
                            staticClass: "gantt-elastic__chart",
                            style: Object.assign({}, _vm.root.style["chart"])
                        }, [
                            _c(
                                "div", {
                                    ref: "chartCalendarContainer",
                                    staticClass: "gantt-elastic__chart-calendar-container",
                                    style: Object.assign({}, _vm.root.style["chart-calendar-container"], {
                                        height: _vm.root.state.options.calendar.height + "px",
                                        "margin-bottom": _vm.root.state.options.calendar.gap + "px"
                                    })
                                }, [_c("calendar")],
                                1
                            ),
                            _vm._v(" "),
                            _c(
                                "div", {
                                    ref: "chartGraphContainer",
                                    staticClass: "gantt-elastic__chart-graph-container",
                                    style: Object.assign({}, _vm.root.style["chart-graph-container"], {
                                        height: _vm.root.state.options.height -
                                            _vm.root.state.options.calendar.height +
                                            "px"
                                    })
                                }, [
                                    _c(
                                        "div", {
                                            style: Object.assign({}, _vm.root.style["chart-area"], {
                                                width: _vm.root.state.options.width + "px",
                                                height: _vm.root.state.options.rowsHeight + "px"
                                            })
                                        }, [
                                            _c(
                                                "div", {
                                                    ref: "chartGraph",
                                                    staticClass: "gantt-elastic__chart-graph",
                                                    style: Object.assign({}, _vm.root.style["chart-graph"], {
                                                        height: "100%"
                                                    })
                                                }, [
                                                    _c(
                                                        "svg", {
                                                            ref: "chartGraphSvg",
                                                            staticClass: "gantt-elastic__chart-graph-svg",
                                                            style: Object.assign({},
                                                                _vm.root.style["chart-graph-svg"]
                                                            ),
                                                            attrs: {
                                                                x: "0",
                                                                y: "0",
                                                                width: _vm.root.state.options.width + "px",
                                                                height: _vm.root.state.options.allVisibleTasksHeight + "px",
                                                                xmlns: "http://www.w3.org/2000/svg"
                                                            }
                                                        }, [
                                                            _c("days-highlight"),
                                                            _vm._v(" "),
                                                            _c("grid"),
                                                            _vm._v(" "),
                                                            _c("dependency-lines", {
                                                                attrs: { tasks: _vm.root.visibleTasks }
                                                            }),
                                                            _vm._v(" "),
                                                            _vm._l(_vm.root.visibleTasks, function(task) {
                                                                return _c(
                                                                    "g", {
                                                                        key: task.id,
                                                                        staticClass: "gantt-elastic__chart-row-wrapper",
                                                                        style: Object.assign({},
                                                                            _vm.root.style["chart-row-wrapper"]
                                                                        ),
                                                                        attrs: { task: task }
                                                                    }, [
                                                                        _c(task.type, {
                                                                            tag: "component",
                                                                            attrs: { task: task }
                                                                        })
                                                                    ],
                                                                    1
                                                                )
                                                            })
                                                        ],
                                                        2
                                                    )
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8&":
            /*!*************************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8& ***!
              \*************************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _vm.showWorkingDays ?
                        _c(
                            "g", {
                                staticClass: "gantt-elastic__chart-days-highlight-container",
                                style: Object.assign({},
                                    _vm.root.style["chart-days-highlight-container"]
                                )
                            },
                            _vm._l(_vm.workingDays, function(day) {
                                return _c("rect", {
                                    key: _vm.getKey(day),
                                    staticClass: "gantt-elastic__chart-days-highlight-rect",
                                    style: Object.assign({},
                                        _vm.root.style["chart-days-highlight-rect"]
                                    ),
                                    attrs: {
                                        x: day.offset.px,
                                        y: "0",
                                        width: day.width.px,
                                        height: "100%"
                                    }
                                })
                            }),
                            0
                        ) :
                        _vm._e()
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba&":
            /*!***************************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba& ***!
              \***************************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "svg", {
                            staticClass: "gantt-elastic__chart-dependency-lines-container",
                            style: Object.assign({},
                                _vm.root.style["chart-dependency-lines-container"]
                            ),
                            attrs: { x: "0", y: "0", width: "100%", height: "100%" }
                        },
                        _vm._l(_vm.dependencyTasks, function(task) {
                            return _c(
                                "g", { key: task.id, attrs: { task: task } },
                                _vm._l(task.dependencyLines, function(dependencyLine) {
                                    return _c("path", {
                                        key: dependencyLine.id,
                                        staticClass: "gantt-elastic__chart-dependency-lines-path",
                                        style: Object.assign({},
                                            _vm.root.style["chart-dependency-lines-path"],
                                            task.style["chart-dependency-lines-path"]
                                        ),
                                        attrs: { task: task, d: dependencyLine.points }
                                    })
                                }),
                                0
                            )
                        }),
                        0
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7&":
            /*!****************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7& ***!
              \****************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "svg", {
                            ref: "chart",
                            staticClass: "gantt-elastic__grid-lines-wrapper",
                            style: Object.assign({}, _vm.root.style["grid-lines-wrapper"]),
                            attrs: {
                                x: "0",
                                y: "0",
                                width: _vm.root.state.options.width,
                                height: _vm.root.state.options.allVisibleTasksHeight,
                                xmlns: "http://www.w3.org/2000/svg"
                            }
                        }, [
                            _c(
                                "g", {
                                    staticClass: "gantt-elastic__grid-lines",
                                    style: Object.assign({}, _vm.root.style["grid-lines"])
                                }, [
                                    _vm._l(_vm.horizontalLines, function(line) {
                                        return _c("line", {
                                            key: line.key,
                                            staticClass: "gantt-elastic__grid-line-horizontal",
                                            style: Object.assign({}, _vm.root.style["grid-line-horizontal"]),
                                            attrs: { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 }
                                        })
                                    }),
                                    _vm._v(" "),
                                    _vm._l(_vm.verticalLines, function(line) {
                                        return _c("line", {
                                            key: line.key,
                                            staticClass: "gantt-elastic__grid-line-vertical",
                                            style: Object.assign({}, _vm.root.style["grid-line-vertical"]),
                                            attrs: { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 }
                                        })
                                    }),
                                    _vm._v(" "),
                                    _c("line", {
                                        staticClass: "gantt-elastic__grid-line-time specialLine",
                                        style: Object.assign({}, _vm.root.style["grid-line-time"]),
                                        attrs: {
                                            x1: _vm.timeLinePosition.x,
                                            y1: _vm.timeLinePosition.y1,
                                            x2: _vm.timeLinePosition.x,
                                            y2: _vm.timeLinePosition.y2
                                        }
                                    })
                                ],
                                2
                            )
                        ]
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355&":
            /*!***********************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355& ***!
              \***********************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "g", {
                            staticClass: "gantt-elastic__chart-row-progress-bar-wrapper",
                            style: Object.assign({},
                                _vm.root.style["chart-row-progress-bar-wrapper"],
                                _vm.task.style["chart-row-progress-bar-wrapper"]
                            )
                        }, [
                            _c("defs", [
                                _c(
                                    "pattern", {
                                        attrs: {
                                            id: "diagonalHatch",
                                            width: _vm.root.state.options.chart.progress.width,
                                            height: _vm.root.state.options.chart.progress.width,
                                            patternTransform: "rotate(45 0 0)",
                                            patternUnits: "userSpaceOnUse"
                                        }
                                    }, [
                                        _c("line", {
                                            staticClass: "chart-row-progress-bar-line",
                                            style: Object.assign({},
                                                _vm.root.style["chart-row-progress-bar-line"],
                                                _vm.task.style["chart-row-progress-bar-line"]
                                            ),
                                            attrs: {
                                                x1: "0",
                                                y1: "0",
                                                x2: "0",
                                                y2: _vm.root.state.options.chart.progress.width
                                            }
                                        })
                                    ]
                                )
                            ]),
                            _vm._v(" "),
                            _vm.root.state.options.chart.progress.bar ?
                            _c("rect", {
                                staticClass: "gantt-elastic__chart-row-progress-bar-solid",
                                style: Object.assign({},
                                    _vm.root.style["chart-row-progress-bar-solid"],
                                    _vm.task.style["chart-row-progress-bar-solid"]
                                ),
                                attrs: { x: "0", y: "0", width: _vm.getProgressWidth }
                            }) :
                            _vm._e(),
                            _vm._v(" "),
                            _vm.root.state.options.chart.progress.pattern ?
                            _c("g", [
                                _c("rect", {
                                    staticClass: "gantt-elastic__chart-row-progress-bar-pattern",
                                    style: Object.assign({},
                                        _vm.root.style["chart-row-progress-bar-pattern"],
                                        _vm.task.style["chart-row-progress-bar-pattern"]
                                    ),
                                    attrs: {
                                        x: _vm.getProgressWidth,
                                        y: "0",
                                        width: 100 - _vm.task.progress + "%",
                                        height: "100%"
                                    }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                    staticClass: "gantt-elastic__chart-row-progress-bar-outline",
                                    style: Object.assign({},
                                        _vm.root.style["chart-row-progress-bar-outline"],
                                        _vm.task.style["base"],
                                        _vm.task.style["chart-row-progress-bar-outline"]
                                    ),
                                    attrs: { d: _vm.getLinePoints }
                                })
                            ]) :
                            _vm._e()
                        ]
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c&":
            /*!*************************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c& ***!
              \*************************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "g", {
                            staticClass: "gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-milestone-wrapper",
                            style: Object.assign({},
                                _vm.root.style["chart-row-bar-wrapper"],
                                _vm.root.style["chart-row-milestone-wrapper"],
                                _vm.task.style["chart-row-bar-wrapper"]
                            )
                        }, [
                            _vm.displayExpander ?
                            _c(
                                "foreignObject", {
                                    staticClass: "gantt-elastic__chart-expander gantt-elastic__chart-expander--milestone",
                                    style: Object.assign({},
                                        _vm.root.style["chart-expander"],
                                        _vm.root.style["chart-expander--milestone"],
                                        _vm.task.style["chart-expander"]
                                    ),
                                    attrs: {
                                        x: _vm.task.x -
                                            _vm.root.state.options.chart.expander.offset -
                                            _vm.root.state.options.chart.expander.size,
                                        y: _vm.task.y +
                                            (_vm.root.state.options.row.height -
                                                _vm.root.state.options.chart.expander.size) /
                                            2,
                                        width: _vm.root.state.options.chart.expander.size,
                                        height: _vm.root.state.options.chart.expander.size
                                    }
                                }, [
                                    _c("expander", {
                                        attrs: {
                                            tasks: [_vm.task],
                                            options: _vm.root.state.options.chart.expander,
                                            type: "chart"
                                        }
                                    })
                                ],
                                1
                            ) :
                            _vm._e(),
                            _vm._v(" "),
                            _c(
                                "svg", {
                                    staticClass: "gantt-elastic__chart-row-bar gantt-elastic__chart-row-milestone",
                                    style: Object.assign({},
                                        _vm.root.style["chart-row-bar"],
                                        _vm.root.style["chart-row-milestone"],
                                        _vm.task.style["chart-row-bar"]
                                    ),
                                    attrs: {
                                        x: _vm.task.x,
                                        y: _vm.task.y,
                                        width: _vm.task.width,
                                        height: _vm.task.height,
                                        viewBox: "0 0 " + _vm.task.width + " " + _vm.task.height,
                                        xmlns: "http://www.w3.org/2000/svg"
                                    },
                                    on: {
                                        click: function($event) {
                                            return _vm.emitEvent("click", $event)
                                        },
                                        mouseenter: function($event) {
                                            return _vm.emitEvent("mouseenter", $event)
                                        },
                                        mouseover: function($event) {
                                            return _vm.emitEvent("mouseover", $event)
                                        },
                                        mouseout: function($event) {
                                            return _vm.emitEvent("mouseout", $event)
                                        },
                                        mousemove: function($event) {
                                            return _vm.emitEvent("mousemove", $event)
                                        },
                                        mousedown: function($event) {
                                            return _vm.emitEvent("mousedown", $event)
                                        },
                                        mouseup: function($event) {
                                            return _vm.emitEvent("mouseup", $event)
                                        },
                                        mousewheel: function($event) {
                                            return _vm.emitEvent("mousewheel", $event)
                                        },
                                        touchstart: function($event) {
                                            return _vm.emitEvent("touchstart", $event)
                                        },
                                        touchmove: function($event) {
                                            return _vm.emitEvent("touchmove", $event)
                                        },
                                        touchend: function($event) {
                                            return _vm.emitEvent("touchend", $event)
                                        }
                                    }
                                }, [
                                    _c("defs", [
                                        _c("clipPath", { attrs: { id: _vm.clipPathId } }, [
                                            _c("polygon", { attrs: { points: _vm.getPoints } })
                                        ])
                                    ]),
                                    _vm._v(" "),
                                    _c("polygon", {
                                        staticClass: "gantt-elastic__chart-row-bar-polygon gantt-elastic__chart-row-milestone-polygon",
                                        style: Object.assign({},
                                            _vm.root.style["chart-row-bar-polygon"],
                                            _vm.root.style["chart-row-milestone-polygon"],
                                            _vm.task.style["base"],
                                            _vm.task.style["chart-row-bar-polygon"]
                                        ),
                                        attrs: { points: _vm.getPoints }
                                    }),
                                    _vm._v(" "),
                                    _c("progress-bar", {
                                        attrs: {
                                            task: _vm.task,
                                            "clip-path": "url(#" + _vm.clipPathId + ")"
                                        }
                                    })
                                ],
                                1
                            ),
                            _vm._v(" "),
                            _vm.root.state.options.chart.text.display ?
                            _c("chart-text", { attrs: { task: _vm.task } }) :
                            _vm._e()
                        ],
                        1
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73&":
            /*!***********************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73& ***!
              \***********************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "g", {
                            staticClass: "gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-project-wrapper",
                            style: Object.assign({},
                                _vm.root.style["chart-row-bar-wrapper"],
                                _vm.root.style["chart-row-project-wrapper"],
                                _vm.task.style["chart-row-bar-wrapper"]
                            )
                        }, [
                            _vm.displayExpander ?
                            _c(
                                "foreignObject", {
                                    staticClass: "gantt-elastic__chart-expander gantt-elastic__chart-expander--project",
                                    style: Object.assign({},
                                        _vm.root.style["chart-expander"],
                                        _vm.root.style["chart-expander--project"],
                                        _vm.task.style["chart-expander"]
                                    ),
                                    attrs: {
                                        x: _vm.task.x -
                                            _vm.root.state.options.chart.expander.offset -
                                            _vm.root.state.options.chart.expander.size,
                                        y: _vm.task.y +
                                            (_vm.root.state.options.row.height -
                                                _vm.root.state.options.chart.expander.size) /
                                            2,
                                        width: _vm.root.state.options.chart.expander.size,
                                        height: _vm.root.state.options.chart.expander.size
                                    }
                                }, [
                                    _c("expander", {
                                        attrs: {
                                            tasks: [_vm.task],
                                            options: _vm.root.state.options.chart.expander,
                                            type: "chart"
                                        }
                                    })
                                ],
                                1
                            ) :
                            _vm._e(),
                            _vm._v(" "),
                            _c(
                                "svg", {
                                    staticClass: "gantt-elastic__chart-row-bar gantt-elastic__chart-row-project",
                                    style: Object.assign({},
                                        _vm.root.style["chart-row-bar"],
                                        _vm.root.style["chart-row-project"],
                                        _vm.task.style["chart-row-bar"]
                                    ),
                                    attrs: {
                                        x: _vm.task.x,
                                        y: _vm.task.y,
                                        width: _vm.task.width,
                                        height: _vm.task.height,
                                        viewBox: "0 0 " + _vm.task.width + " " + _vm.task.height,
                                        xmlns: "http://www.w3.org/2000/svg"
                                    },
                                    on: {
                                        click: function($event) {
                                            return _vm.emitEvent("click", $event)
                                        },
                                        mouseenter: function($event) {
                                            return _vm.emitEvent("mouseenter", $event)
                                        },
                                        mouseover: function($event) {
                                            return _vm.emitEvent("mouseover", $event)
                                        },
                                        mouseout: function($event) {
                                            return _vm.emitEvent("mouseout", $event)
                                        },
                                        mousemove: function($event) {
                                            return _vm.emitEvent("mousemove", $event)
                                        },
                                        mousedown: function($event) {
                                            return _vm.emitEvent("mousedown", $event)
                                        },
                                        mouseup: function($event) {
                                            return _vm.emitEvent("mouseup", $event)
                                        },
                                        mousewheel: function($event) {
                                            return _vm.emitEvent("mousewheel", $event)
                                        },
                                        touchstart: function($event) {
                                            return _vm.emitEvent("touchstart", $event)
                                        },
                                        touchmove: function($event) {
                                            return _vm.emitEvent("touchmove", $event)
                                        },
                                        touchend: function($event) {
                                            return _vm.emitEvent("touchend", $event)
                                        }
                                    }
                                }, [
                                    _c("defs", [
                                        _c("clipPath", { attrs: { id: _vm.clipPathId } }, [
                                            _c("path", { attrs: { d: _vm.getPoints } })
                                        ])
                                    ]),
                                    _vm._v(" "),
                                    _c("path", {
                                        staticClass: "gantt-elastic__chart-row-bar-polygon gantt-elastic__chart-row-project-polygon",
                                        style: Object.assign({},
                                            _vm.root.style["chart-row-bar-polygon"],
                                            _vm.root.style["chart-row-project-polygon"],
                                            _vm.task.style["base"],
                                            _vm.task.style["chart-row-bar-polygon"]
                                        ),
                                        attrs: { d: _vm.getPoints }
                                    }),
                                    _vm._v(" "),
                                    _c("progress-bar", {
                                        attrs: {
                                            task: _vm.task,
                                            "clip-path": "url(#" + _vm.clipPathId + ")"
                                        }
                                    })
                                ],
                                1
                            ),
                            _vm._v(" "),
                            _vm.root.state.options.chart.text.display ?
                            _c("chart-text", { attrs: { task: _vm.task } }) :
                            _vm._e()
                        ],
                        1
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca&":
            /*!********************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca& ***!
              \********************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "g", {
                            staticClass: "gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-task-wrapper",
                            style: Object.assign({},
                                _vm.root.style["chart-row-bar-wrapper"],
                                _vm.root.style["chart-row-task-wrapper"],
                                _vm.task.style["chart-row-bar-wrapper"]
                            )
                        }, [
                            _vm.displayExpander ?
                            _c(
                                "foreignObject", {
                                    staticClass: "gantt-elastic__chart-expander gantt-elastic__chart-expander--task",
                                    style: Object.assign({},
                                        _vm.root.style["chart-expander"],
                                        _vm.root.style["chart-expander--task"],
                                        _vm.task.style["chart-expander"]
                                    ),
                                    attrs: {
                                        x: _vm.task.x -
                                            _vm.root.state.options.chart.expander.offset -
                                            _vm.root.state.options.chart.expander.size,
                                        y: _vm.task.y +
                                            (_vm.root.state.options.row.height -
                                                _vm.root.state.options.chart.expander.size) /
                                            2,
                                        width: _vm.root.state.options.chart.expander.size,
                                        height: _vm.root.state.options.chart.expander.size
                                    }
                                }, [
                                    _c("expander", {
                                        attrs: {
                                            tasks: [_vm.task],
                                            options: _vm.root.state.options.chart.expander,
                                            type: "chart"
                                        }
                                    })
                                ],
                                1
                            ) :
                            _vm._e(),
                            _vm._v(" "),
                            _c(
                                "svg", {
                                    staticClass: "gantt-elastic__chart-row-bar gantt-elastic__chart-row-task",
                                    style: Object.assign({},
                                        _vm.root.style["chart-row-bar"],
                                        _vm.root.style["chart-row-task"],
                                        _vm.task.style["chart-row-bar"]
                                    ),
                                    attrs: {
                                        x: _vm.task.x,
                                        y: _vm.task.y,
                                        width: _vm.task.width,
                                        height: _vm.task.height,
                                        viewBox: "0 0 " + _vm.task.width + " " + _vm.task.height,
                                        xmlns: "http://www.w3.org/2000/svg"
                                    },
                                    on: {
                                        click: function($event) {
                                            return _vm.emitEvent("click", $event)
                                        },
                                        mouseenter: function($event) {
                                            return _vm.emitEvent("mouseenter", $event)
                                        },
                                        mouseover: function($event) {
                                            return _vm.emitEvent("mouseover", $event)
                                        },
                                        mouseout: function($event) {
                                            return _vm.emitEvent("mouseout", $event)
                                        },
                                        mousemove: function($event) {
                                            return _vm.emitEvent("mousemove", $event)
                                        },
                                        mousedown: function($event) {
                                            return _vm.emitEvent("mousedown", $event)
                                        },
                                        mouseup: function($event) {
                                            return _vm.emitEvent("mouseup", $event)
                                        },
                                        mousewheel: function($event) {
                                            return _vm.emitEvent("mousewheel", $event)
                                        },
                                        touchstart: function($event) {
                                            return _vm.emitEvent("touchstart", $event)
                                        },
                                        touchmove: function($event) {
                                            return _vm.emitEvent("touchmove", $event)
                                        },
                                        touchend: function($event) {
                                            return _vm.emitEvent("touchend", $event)
                                        }
                                    }
                                }, [
                                    _c("defs", [
                                        _c("clipPath", { attrs: { id: _vm.clipPathId } }, [
                                            _c("polygon", { attrs: { points: _vm.getPoints } })
                                        ])
                                    ]),
                                    _vm._v(" "),
                                    _c("polygon", {
                                        staticClass: "gantt-elastic__chart-row-bar-polygon gantt-elastic__chart-row-task-polygon",
                                        style: Object.assign({},
                                            _vm.root.style["chart-row-bar-polygon"],
                                            _vm.root.style["chart-row-task-polygon"],
                                            _vm.task.style["base"],
                                            _vm.task.style["chart-row-bar-polygon"]
                                        ),
                                        attrs: { points: _vm.getPoints }
                                    }),
                                    _vm._v(" "),
                                    _c("progress-bar", {
                                        attrs: {
                                            task: _vm.task,
                                            "clip-path": "url(#" + _vm.clipPathId + ")"
                                        }
                                    })
                                ],
                                1
                            ),
                            _vm._v(" "),
                            _vm.root.state.options.chart.text.display ?
                            _c("chart-text", { attrs: { task: _vm.task } }) :
                            _vm._e()
                        ],
                        1
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4&":
            /*!****************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4& ***!
              \****************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "svg", {
                            staticClass: "gantt-elastic__chart-row-text-wrapper",
                            style: Object.assign({}, _vm.root.style["chart-row-text-wrapper"]),
                            attrs: {
                                x: _vm.task.x +
                                    _vm.task.width +
                                    _vm.root.state.options.chart.text.offset,
                                y: _vm.task.y - _vm.root.state.options.chart.grid.horizontal.gap,
                                width: _vm.getWidth,
                                height: _vm.getHeight
                            }
                        }, [
                            _c(
                                "foreignObject", { attrs: { x: "0", y: "0", width: "100%", height: _vm.getHeight } }, [
                                    _c(
                                        "div", {
                                            staticClass: "gantt-elastic__chart-row-text",
                                            style: Object.assign({}, _vm.root.style["chart-row-text"]),
                                            attrs: { xmlns: "http://www.w3.org/1999/xhtml" }
                                        }, [!_vm.html ?
                                            _c(
                                                "div", {
                                                    staticClass: "gantt-elastic__chart-row-text-content gantt-elastic__chart-row-text-content--text",
                                                    style: Object.assign({},
                                                        _vm.root.style["chart-row-text-content"],
                                                        _vm.root.style["chart-row-text-content--text"],
                                                        _vm.contentStyle
                                                    )
                                                }, [_c("div", [_vm._v(_vm._s(_vm.task.label))])]
                                            ) :
                                            _vm._e(),
                                            _vm._v(" "),
                                            _vm.html ?
                                            _c("div", {
                                                staticClass: "gantt-elastic__chart-row-text-content gantt-elastic__chart-row-text-content--html",
                                                style: Object.assign({},
                                                    _vm.root.style["chart-row-text-content"],
                                                    _vm.root.style["chart-row-text-content--html"],
                                                    _vm.contentStyle
                                                ),
                                                domProps: { innerHTML: _vm._s(_vm.task.label) }
                                            }) :
                                            _vm._e()
                                        ]
                                    )
                                ]
                            )
                        ],
                        1
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Expander.vue?vue&type=template&id=09a21177&":
            /*!**************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Expander.vue?vue&type=template&id=09a21177& ***!
              \**************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "div", {
                            class: _vm.getClassPrefix() + "-wrapper",
                            style: Object.assign({},
                                _vm.root.style[_vm.getClassPrefix(false) + "-wrapper"],
                                _vm.style
                            )
                        }, [
                            _vm.allChildren.length ?
                            _c(
                                "svg", {
                                    class: _vm.getClassPrefix() + "-content",
                                    style: Object.assign({},
                                        _vm.root.style[_vm.getClassPrefix(false) + "-content"]
                                    ),
                                    attrs: { width: _vm.options.size, height: _vm.options.size },
                                    on: { click: _vm.toggle }
                                }, [
                                    _c("rect", {
                                        class: _vm.getClassPrefix() + "-border",
                                        style: Object.assign({},
                                            _vm.root.style[_vm.getClassPrefix(false) + "-border"],
                                            _vm.borderStyle
                                        ),
                                        attrs: {
                                            x: _vm.border,
                                            y: _vm.border,
                                            width: _vm.options.size - _vm.border * 2,
                                            height: _vm.options.size - _vm.border * 2,
                                            rx: "2",
                                            ry: "2"
                                        }
                                    }),
                                    _vm._v(" "),
                                    _vm.allChildren.length ?
                                    _c("line", {
                                        class: _vm.getClassPrefix() + "-line",
                                        style: Object.assign({},
                                            _vm.root.style[_vm.getClassPrefix(false) + "-line"]
                                        ),
                                        attrs: {
                                            x1: _vm.lineOffset,
                                            y1: _vm.options.size / 2,
                                            x2: _vm.options.size - _vm.lineOffset,
                                            y2: _vm.options.size / 2
                                        }
                                    }) :
                                    _vm._e(),
                                    _vm._v(" "),
                                    _vm.collapsed ?
                                    _c("line", {
                                        class: _vm.getClassPrefix() + "-line",
                                        style: Object.assign({},
                                            _vm.root.style[_vm.getClassPrefix(false) + "-line"]
                                        ),
                                        attrs: {
                                            x1: _vm.options.size / 2,
                                            y1: _vm.lineOffset,
                                            x2: _vm.options.size / 2,
                                            y2: _vm.options.size - _vm.lineOffset
                                        }
                                    }) :
                                    _vm._e()
                                ]
                            ) :
                            _vm._e()
                        ]
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=template&id=0bc4212e&":
            /*!**************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainView.vue?vue&type=template&id=0bc4212e& ***!
              \**************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "div", {
                            staticClass: "gantt-elastic__main-view",
                            style: Object.assign({}, _vm.root.style["main-view"])
                        }, [
                            _c(
                                "div", {
                                    staticClass: "gantt-elastic__main-container-wrapper",
                                    style: Object.assign({}, _vm.root.style["main-container-wrapper"], {
                                        height: _vm.root.state.options.height + "px"
                                    })
                                }, [
                                    _c(
                                        "div", {
                                            ref: "mainView",
                                            staticClass: "gantt-elastic__main-container",
                                            style: Object.assign({}, _vm.root.style["main-container"], {
                                                width: _vm.root.state.options.clientWidth + "px",
                                                height: _vm.root.state.options.height + "px"
                                            })
                                        }, [
                                            _c(
                                                "div", {
                                                    staticClass: "gantt-elastic__container",
                                                    style: Object.assign({}, _vm.root.style["container"]),
                                                    on: { mousemove: _vm.mouseMove, mouseup: _vm.mouseUp }
                                                }, [
                                                    _c(
                                                        "div", {
                                                            directives: [{
                                                                name: "show",
                                                                rawName: "v-show",
                                                                value: _vm.root.state.options.taskList.display,
                                                                expression: "root.state.options.taskList.display"
                                                            }],
                                                            ref: "taskList",
                                                            staticClass: "gantt-elastic__task-list-container",
                                                            style: Object.assign({},
                                                                _vm.root.style["task-list-container"], {
                                                                    width: _vm.root.state.options.taskList.finalWidth + "px",
                                                                    height: _vm.root.state.options.height + "px"
                                                                }
                                                            )
                                                        }, [_c("task-list")],
                                                        1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                        "div", {
                                                            ref: "chartContainer",
                                                            staticClass: "gantt-elastic__main-view-container",
                                                            style: Object.assign({},
                                                                _vm.root.style["main-view-container"]
                                                            ),
                                                            on: {
                                                                mousedown: _vm.chartMouseDown,
                                                                touchstart: _vm.chartMouseDown,
                                                                mouseup: _vm.chartMouseUp,
                                                                touchend: _vm.chartMouseUp,
                                                                mousemove: function($event) {
                                                                    $event.preventDefault()
                                                                    return _vm.chartMouseMove($event)
                                                                },
                                                                touchmove: function($event) {
                                                                    $event.preventDefault()
                                                                    return _vm.chartMouseMove($event)
                                                                },
                                                                wheel: function($event) {
                                                                    $event.preventDefault()
                                                                    return _vm.chartWheel($event)
                                                                }
                                                            }
                                                        }, [_c("chart")],
                                                        1
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                        "div", {
                                            ref: "chartScrollContainerVertical",
                                            staticClass: "gantt-elastic__chart-scroll-container gantt-elastic__chart-scroll-container--vertical",
                                            style: Object.assign({},
                                                _vm.root.style["chart-scroll-container"],
                                                _vm.root.style["chart-scroll-container--vertical"],
                                                _vm.verticalStyle
                                            ),
                                            on: { scroll: _vm.onVerticalScroll }
                                        }, [
                                            _c("div", {
                                                staticClass: "gantt-elastic__chart-scroll--vertical",
                                                style: {
                                                    width: "1px",
                                                    height: _vm.root.state.options.allVisibleTasksHeight + "px"
                                                }
                                            })
                                        ]
                                    )
                                ]
                            ),
                            _vm._v(" "),
                            _c(
                                "div", {
                                    ref: "chartScrollContainerHorizontal",
                                    staticClass: "gantt-elastic__chart-scroll-container gantt-elastic__chart-scroll-container--horizontal",
                                    style: Object.assign({},
                                        _vm.root.style["chart-scroll-container"],
                                        _vm.root.style["chart-scroll-container--horizontal"], { marginLeft: _vm.getMarginLeft }
                                    ),
                                    on: { scroll: _vm.onHorizontalScroll }
                                }, [
                                    _c("div", {
                                        staticClass: "gantt-elastic__chart-scroll--horizontal",
                                        style: { height: "1px", width: _vm.root.state.options.width + "px" }
                                    })
                                ]
                            )
                        ]
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96&":
            /*!*************************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96& ***!
              \*************************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "div", {
                            staticClass: "gantt-elastic__task-list-item-column",
                            style: _vm.itemColumnStyle
                        }, [
                            _c(
                                "div", {
                                    staticClass: "gantt-elastic__task-list-item-value-wrapper",
                                    style: _vm.wrapperStyle
                                }, [
                                    _vm._t("default"),
                                    _vm._v(" "),
                                    _c(
                                        "div", {
                                            staticClass: "gantt-elastic__task-list-item-value-container",
                                            style: _vm.containerStyle
                                        }, [!_vm.html ?
                                            _c(
                                                "div", {
                                                    staticClass: "gantt-elastic__task-list-item-value",
                                                    style: _vm.valueStyle,
                                                    on: {
                                                        click: function($event) {
                                                            return _vm.emitEvent("click", $event)
                                                        },
                                                        mouseenter: function($event) {
                                                            return _vm.emitEvent("mouseenter", $event)
                                                        },
                                                        mouseover: function($event) {
                                                            return _vm.emitEvent("mouseover", $event)
                                                        },
                                                        mouseout: function($event) {
                                                            return _vm.emitEvent("mouseout", $event)
                                                        },
                                                        mousemove: function($event) {
                                                            return _vm.emitEvent("mousemove", $event)
                                                        },
                                                        mousedown: function($event) {
                                                            return _vm.emitEvent("mousedown", $event)
                                                        },
                                                        mouseup: function($event) {
                                                            return _vm.emitEvent("mouseup", $event)
                                                        },
                                                        mousewheel: function($event) {
                                                            return _vm.emitEvent("mousewheel", $event)
                                                        },
                                                        touchstart: function($event) {
                                                            return _vm.emitEvent("touchstart", $event)
                                                        },
                                                        touchmove: function($event) {
                                                            return _vm.emitEvent("touchmove", $event)
                                                        },
                                                        touchend: function($event) {
                                                            return _vm.emitEvent("touchend", $event)
                                                        }
                                                    }
                                                }, [_vm._v("\n        " + _vm._s(_vm.value) + "\n      ")]
                                            ) :
                                            _c("div", {
                                                staticClass: "gantt-elastic__task-list-item-value",
                                                style: _vm.valueStyle,
                                                domProps: { innerHTML: _vm._s(_vm.value) },
                                                on: {
                                                    click: function($event) {
                                                        return _vm.emitEvent("click", $event)
                                                    },
                                                    mouseenter: function($event) {
                                                        return _vm.emitEvent("mouseenter", $event)
                                                    },
                                                    mouseover: function($event) {
                                                        return _vm.emitEvent("mouseover", $event)
                                                    },
                                                    mouseout: function($event) {
                                                        return _vm.emitEvent("mouseout", $event)
                                                    },
                                                    mousemove: function($event) {
                                                        return _vm.emitEvent("mousemove", $event)
                                                    },
                                                    mousedown: function($event) {
                                                        return _vm.emitEvent("mousedown", $event)
                                                    },
                                                    mouseup: function($event) {
                                                        return _vm.emitEvent("mouseup", $event)
                                                    },
                                                    mousewheel: function($event) {
                                                        return _vm.emitEvent("mousewheel", $event)
                                                    },
                                                    touchstart: function($event) {
                                                        return _vm.emitEvent("touchstart", $event)
                                                    },
                                                    touchmove: function($event) {
                                                        return _vm.emitEvent("touchmove", $event)
                                                    },
                                                    touchend: function($event) {
                                                        return _vm.emitEvent("touchend", $event)
                                                    }
                                                }
                                            })
                                        ]
                                    )
                                ],
                                2
                            )
                        ]
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f&":
            /*!***********************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f& ***!
              \***********************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: _vm.root.state.options.taskList.display,
                                expression: "root.state.options.taskList.display"
                            }],
                            ref: "taskListWrapper",
                            staticClass: "gantt-elastic__task-list-wrapper",
                            style: Object.assign({}, _vm.root.style["task-list-wrapper"], {
                                width: "100%",
                                height: "100%"
                            })
                        }, [
                            _c(
                                "div", {
                                    ref: "taskList",
                                    staticClass: "gantt-elastic__task-list",
                                    style: Object.assign({}, _vm.root.style["task-list"])
                                }, [
                                    _c("task-list-header"),
                                    _vm._v(" "),
                                    _c(
                                        "div", {
                                            ref: "taskListItems",
                                            staticClass: "gantt-elastic__task-list-items",
                                            style: Object.assign({}, _vm.root.style["task-list-items"], {
                                                height: _vm.root.state.options.rowsHeight + "px"
                                            })
                                        },
                                        _vm._l(_vm.root.visibleTasks, function(task) {
                                            return _c("task-list-item", {
                                                key: task.id,
                                                attrs: { task: task }
                                            })
                                        }),
                                        1
                                    )
                                ],
                                1
                            )
                        ]
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8&":
            /*!*****************************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8& ***!
              \*****************************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "div", {
                            staticClass: "gantt-elastic__task-list-header",
                            style: Object.assign({}, _vm.root.style["task-list-header"], {
                                height: _vm.root.state.options.calendar.height + "px",
                                "margin-bottom": _vm.root.state.options.calendar.gap + "px"
                            })
                        },
                        _vm._l(_vm.root.getTaskListColumns, function(column) {
                            return _c(
                                "div", {
                                    key: column._id,
                                    staticClass: "gantt-elastic__task-list-header-column",
                                    style: Object.assign({},
                                        _vm.root.style["task-list-header-column"],
                                        column.style["task-list-header-column"],
                                        _vm.getStyle(column)
                                    )
                                }, [
                                    column.expander ?
                                    _c("task-list-expander", {
                                        attrs: {
                                            tasks: _vm.collapsible,
                                            options: _vm.root.state.options.taskList.expander
                                        }
                                    }) :
                                    _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                        "div", {
                                            staticClass: "gantt-elastic__task-list-header-label",
                                            style: Object.assign({},
                                                _vm.root.style["task-list-header-label"],
                                                column.style["task-list-header-label"]
                                            ),
                                            attrs: { column: column },
                                            on: { mouseup: _vm.resizerMouseUp }
                                        }, [_vm._v("\n      " + _vm._s(column.label) + "\n    ")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                        "div", {
                                            staticClass: "gantt-elastic__task-list-header-resizer-wrapper",
                                            style: Object.assign({},
                                                _vm.root.style["task-list-header-resizer-wrapper"],
                                                column.style["task-list-header-resizer-wrapper"]
                                            ),
                                            attrs: { column: column },
                                            on: {
                                                mousedown: function($event) {
                                                    return _vm.resizerMouseDown($event, column)
                                                }
                                            }
                                        }, [
                                            _c(
                                                "div", {
                                                    staticClass: "gantt-elastic__task-list-header-resizer",
                                                    style: Object.assign({},
                                                        _vm.root.style["task-list-header-resizer"],
                                                        column.style["task-list-header-resizer"]
                                                    )
                                                }, [
                                                    _c("div", {
                                                        staticClass: "gantt-elastic__task-list-header-resizer-dot",
                                                        style: Object.assign({},
                                                            _vm.root.style["task-list-header-resizer-dot"],
                                                            column.style["task-list-header-resizer-dot"]
                                                        )
                                                    }),
                                                    _vm._v(" "),
                                                    _c("div", {
                                                        staticClass: "gantt-elastic__task-list-header-resizer-dot",
                                                        style: Object.assign({},
                                                            _vm.root.style["task-list-header-resizer-dot"],
                                                            column.style["task-list-header-resizer-dot"]
                                                        )
                                                    }),
                                                    _vm._v(" "),
                                                    _c("div", {
                                                        staticClass: "gantt-elastic__task-list-header-resizer-dot",
                                                        style: Object.assign({},
                                                            _vm.root.style["task-list-header-resizer-dot"],
                                                            column.style["task-list-header-resizer-dot"]
                                                        )
                                                    })
                                                ]
                                            )
                                        ]
                                    )
                                ],
                                1
                            )
                        }),
                        0
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c&":
            /*!***************************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c& ***!
              \***************************************************************************************************************************************************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
                var render = function() {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                        "div", {
                            staticClass: "gantt-elastic__task-list-item",
                            style: Object.assign({}, _vm.root.style["task-list-item"])
                        },
                        _vm._l(_vm.columns, function(column) {
                            return _c(
                                "item-column", { key: column._id, attrs: { column: column, task: _vm.task } }, [
                                    column.expander ?
                                    _c("task-list-expander", {
                                        attrs: {
                                            tasks: [_vm.task],
                                            options: _vm.root.state.options.taskList.expander,
                                            type: "taskList"
                                        }
                                    }) :
                                    _vm._e()
                                ],
                                1
                            )
                        }),
                        1
                    )
                }
                var staticRenderFns = []
                render._withStripped = true



                /***/
            }),

            /***/
            "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
            /*!********************************************************************!*\
              !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
              \********************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
                /* globals __VUE_SSR_CONTEXT__ */

                // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
                // This module is a runtime utility for cleaner component module output and will
                // be included in the final webpack user bundle.

                function normalizeComponent(
                    scriptExports,
                    render,
                    staticRenderFns,
                    functionalTemplate,
                    injectStyles,
                    scopeId,
                    moduleIdentifier, /* server only */
                    shadowMode /* vue-cli only */
                ) {
                    // Vue.extend constructor export interop
                    var options = typeof scriptExports === 'function' ?
                        scriptExports.options :
                        scriptExports

                    // render functions
                    if (render) {
                        options.render = render
                        options.staticRenderFns = staticRenderFns
                        options._compiled = true
                    }

                    // functional template
                    if (functionalTemplate) {
                        options.functional = true
                    }

                    // scopedId
                    if (scopeId) {
                        options._scopeId = 'data-v-' + scopeId
                    }

                    var hook
                    if (moduleIdentifier) { // server build
                        hook = function(context) {
                                // 2.3 injection
                                context =
                                    context || // cached call
                                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
                                    // 2.2 with runInNewContext: true
                                if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                                    context = __VUE_SSR_CONTEXT__
                                }
                                // inject component styles
                                if (injectStyles) {
                                    injectStyles.call(this, context)
                                }
                                // register component module identifier for async chunk inferrence
                                if (context && context._registeredComponents) {
                                    context._registeredComponents.add(moduleIdentifier)
                                }
                            }
                            // used by ssr in case component is cached and beforeCreate
                            // never gets called
                        options._ssrRegister = hook
                    } else if (injectStyles) {
                        hook = shadowMode ?

                            function() { injectStyles.call(this, this.$root.$options.shadowRoot) } :
                            injectStyles
                    }

                    if (hook) {
                        if (options.functional) {
                            // for template-only hot-reload because in that case the render fn doesn't
                            // go through the normalizer
                            options._injectStyles = hook
                                // register for functioal component in vue file
                            var originalRender = options.render
                            options.render = function renderWithStyleInjection(h, context) {
                                hook.call(context)
                                return originalRender(h, context)
                            }
                        } else {
                            // inject component registration as beforeCreate hook
                            var existing = options.beforeCreate
                            options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
                        }
                    }

                    return {
                        exports: scriptExports,
                        options: options
                    }
                }


                /***/
            }),

            /***/
            "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=style&index=0&lang=css&":
            /*!************************************************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=style&index=0&lang=css& ***!
              \************************************************************************************************************************************************************************************************************************************/
            /*! no static exports found */
            /***/
                (function(module, exports, __webpack_require__) {

                // style-loader: Adds some css to the DOM by adding a <style> tag

                // load the styles
                var content = __webpack_require__( /*! !../node_modules/css-loader!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./GanttElastic.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=style&index=0&lang=css&");
                if (typeof content === 'string') content = [
                    [module.i, content, '']
                ];
                if (content.locals) module.exports = content.locals;
                // add the styles to the DOM
                var add = __webpack_require__( /*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
                var update = add("c3e5085c", content, false, {});
                // Hot Module Replacement
                if (false) {}

                /***/
            }),

            /***/
            "./node_modules/vue-style-loader/lib/addStylesClient.js":
            /*!**************************************************************!*\
              !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
              \**************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
                /* harmony import */
                var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
                /*
                  MIT License http://www.opensource.org/licenses/mit-license.php
                  Author Tobias Koppers @sokra
                  Modified by Evan You @yyx990803
                */



                var hasDocument = typeof document !== 'undefined'

                if (typeof DEBUG !== 'undefined' && DEBUG) {
                    if (!hasDocument) {
                        throw new Error(
                            'vue-style-loader cannot be used in a non-browser environment. ' +
                            "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
                        )
                    }
                }

                /*
                type StyleObject = {
                  id: number;
                  parts: Array<StyleObjectPart>
                }

                type StyleObjectPart = {
                  css: string;
                  media: string;
                  sourceMap: ?string
                }
                */

                var stylesInDom = {
                    /*
                      [id: number]: {
                        id: number,
                        refs: number,
                        parts: Array<(obj?: StyleObjectPart) => void>
                      }
                    */
                }

                var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
                var singletonElement = null
                var singletonCounter = 0
                var isProduction = false
                var noop = function() {}
                var options = null
                var ssrIdKey = 'data-vue-ssr-id'

                // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
                // tags it will allow on a page
                var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

                function addStylesClient(parentId, list, _isProduction, _options) {
                    isProduction = _isProduction

                    options = _options || {}

                    var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
                    addStylesToDom(styles)

                    return function update(newList) {
                        var mayRemove = []
                        for (var i = 0; i < styles.length; i++) {
                            var item = styles[i]
                            var domStyle = stylesInDom[item.id]
                            domStyle.refs--
                                mayRemove.push(domStyle)
                        }
                        if (newList) {
                            styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
                            addStylesToDom(styles)
                        } else {
                            styles = []
                        }
                        for (var i = 0; i < mayRemove.length; i++) {
                            var domStyle = mayRemove[i]
                            if (domStyle.refs === 0) {
                                for (var j = 0; j < domStyle.parts.length; j++) {
                                    domStyle.parts[j]()
                                }
                                delete stylesInDom[domStyle.id]
                            }
                        }
                    }
                }

                function addStylesToDom(styles /* Array<StyleObject> */ ) {
                    for (var i = 0; i < styles.length; i++) {
                        var item = styles[i]
                        var domStyle = stylesInDom[item.id]
                        if (domStyle) {
                            domStyle.refs++
                                for (var j = 0; j < domStyle.parts.length; j++) {
                                    domStyle.parts[j](item.parts[j])
                                }
                            for (; j < item.parts.length; j++) {
                                domStyle.parts.push(addStyle(item.parts[j]))
                            }
                            if (domStyle.parts.length > item.parts.length) {
                                domStyle.parts.length = item.parts.length
                            }
                        } else {
                            var parts = []
                            for (var j = 0; j < item.parts.length; j++) {
                                parts.push(addStyle(item.parts[j]))
                            }
                            stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
                        }
                    }
                }

                function createStyleElement() {
                    var styleElement = document.createElement('style')
                    styleElement.type = 'text/css'
                    head.appendChild(styleElement)
                    return styleElement
                }

                function addStyle(obj /* StyleObjectPart */ ) {
                    var update, remove
                    var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

                    if (styleElement) {
                        if (isProduction) {
                            // has SSR styles and in production mode.
                            // simply do nothing.
                            return noop
                        } else {
                            // has SSR styles but in dev mode.
                            // for some reason Chrome can't handle source map in server-rendered
                            // style tags - source maps in <style> only works if the style tag is
                            // created and inserted dynamically. So we remove the server rendered
                            // styles and inject new ones.
                            styleElement.parentNode.removeChild(styleElement)
                        }
                    }

                    if (isOldIE) {
                        // use singleton mode for IE9.
                        var styleIndex = singletonCounter++
                            styleElement = singletonElement || (singletonElement = createStyleElement())
                        update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
                        remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
                    } else {
                        // use multi-style-tag mode in all other cases
                        styleElement = createStyleElement()
                        update = applyToTag.bind(null, styleElement)
                        remove = function() {
                            styleElement.parentNode.removeChild(styleElement)
                        }
                    }

                    update(obj)

                    return function updateStyle(newObj /* StyleObjectPart */ ) {
                        if (newObj) {
                            if (newObj.css === obj.css &&
                                newObj.media === obj.media &&
                                newObj.sourceMap === obj.sourceMap) {
                                return
                            }
                            update(obj = newObj)
                        } else {
                            remove()
                        }
                    }
                }

                var replaceText = (function() {
                    var textStore = []

                    return function(index, replacement) {
                        textStore[index] = replacement
                        return textStore.filter(Boolean).join('\n')
                    }
                })()

                function applyToSingletonTag(styleElement, index, remove, obj) {
                    var css = remove ? '' : obj.css

                    if (styleElement.styleSheet) {
                        styleElement.styleSheet.cssText = replaceText(index, css)
                    } else {
                        var cssNode = document.createTextNode(css)
                        var childNodes = styleElement.childNodes
                        if (childNodes[index]) styleElement.removeChild(childNodes[index])
                        if (childNodes.length) {
                            styleElement.insertBefore(cssNode, childNodes[index])
                        } else {
                            styleElement.appendChild(cssNode)
                        }
                    }
                }

                function applyToTag(styleElement, obj) {
                    var css = obj.css
                    var media = obj.media
                    var sourceMap = obj.sourceMap

                    if (media) {
                        styleElement.setAttribute('media', media)
                    }
                    if (options.ssrId) {
                        styleElement.setAttribute(ssrIdKey, obj.id)
                    }

                    if (sourceMap) {
                        // https://developer.chrome.com/devtools/docs/javascript-debugging
                        // this makes source maps inside style tags work properly in Chrome
                        css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
                            // http://stackoverflow.com/a/26603875
                        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
                    }

                    if (styleElement.styleSheet) {
                        styleElement.styleSheet.cssText = css
                    } else {
                        while (styleElement.firstChild) {
                            styleElement.removeChild(styleElement.firstChild)
                        }
                        styleElement.appendChild(document.createTextNode(css))
                    }
                }


                /***/
            }),

            /***/
            "./node_modules/vue-style-loader/lib/listToStyles.js":
            /*!***********************************************************!*\
              !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
              \***********************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
                /**
                 * Translates the list format produced by css-loader into something
                 * easier to manipulate.
                 */
                function listToStyles(parentId, list) {
                    var styles = []
                    var newStyles = {}
                    for (var i = 0; i < list.length; i++) {
                        var item = list[i]
                        var id = item[0]
                        var css = item[1]
                        var media = item[2]
                        var sourceMap = item[3]
                        var part = {
                            id: parentId + ':' + i,
                            css: css,
                            media: media,
                            sourceMap: sourceMap
                        }
                        if (!newStyles[id]) {
                            styles.push(newStyles[id] = { id: id, parts: [part] })
                        } else {
                            newStyles[id].parts.push(part)
                        }
                    }
                    return styles
                }


                /***/
            }),

            /***/
            "./node_modules/webpack/buildin/global.js":
            /*!***********************************!*\
              !*** (webpack)/buildin/global.js ***!
              \***********************************/
            /*! no static exports found */
            /***/
                (function(module, exports) {

                var g;

                // This works in non-strict mode
                g = (function() {
                    return this;
                })();

                try {
                    // This works if eval is allowed (see CSP)
                    g = g || new Function("return this")();
                } catch (e) {
                    // This works if the window reference is available
                    if (typeof window === "object") g = window;
                }

                // g can still be undefined, but nothing to do about it...
                // We return undefined, instead of nothing here, so it's
                // easier to handle this case. if(!global) { ...}

                module.exports = g;


                /***/
            }),

            /***/
            "./src/GanttElastic.vue":
            /*!******************************!*\
              !*** ./src/GanttElastic.vue ***!
              \******************************/
            /*! exports provided: default, mergeDeep, mergeDeepReactive, notEqualDeep */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./GanttElastic.vue?vue&type=template&id=02c6304c& */ "./src/GanttElastic.vue?vue&type=template&id=02c6304c&");
                /* harmony import */
                var _GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./GanttElastic.vue?vue&type=script&lang=js& */ "./src/GanttElastic.vue?vue&type=script&lang=js&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return _GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["mergeDeep"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "mergeDeepReactive", function() { return _GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["mergeDeepReactive"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "notEqualDeep", function() { return _GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["notEqualDeep"]; });

                /* harmony import */
                var _GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./GanttElastic.vue?vue&type=style&index=0&lang=css& */ "./src/GanttElastic.vue?vue&type=style&index=0&lang=css&");
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
                    _GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/GanttElastic.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/GanttElastic.vue?vue&type=script&lang=js&":
            /*!*******************************************************!*\
              !*** ./src/GanttElastic.vue?vue&type=script&lang=js& ***!
              \*******************************************************/
            /*! exports provided: default, mergeDeep, mergeDeepReactive, notEqualDeep */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../node_modules/vue-loader/lib??vue-loader-options!./GanttElastic.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=script&lang=js&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["mergeDeep"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "mergeDeepReactive", function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["mergeDeepReactive"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "notEqualDeep", function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["notEqualDeep"]; });

                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/GanttElastic.vue?vue&type=style&index=0&lang=css&":
            /*!***************************************************************!*\
              !*** ./src/GanttElastic.vue?vue&type=style&index=0&lang=css& ***!
              \***************************************************************/
            /*! no static exports found */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../node_modules/vue-style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./GanttElastic.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=style&index=0&lang=css&");
                /* harmony import */
                var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
                /* harmony reexport (unknown) */
                for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__)
                    if (__WEBPACK_IMPORT_KEY__ !== 'default')(function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
                    /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a);

                /***/
            }),

            /***/
            "./src/GanttElastic.vue?vue&type=template&id=02c6304c&":
            /*!*************************************************************!*\
              !*** ./src/GanttElastic.vue?vue&type=template&id=02c6304c& ***!
              \*************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./GanttElastic.vue?vue&type=template&id=02c6304c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=template&id=02c6304c&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/Calendar/Calendar.vue":
            /*!**********************************************!*\
              !*** ./src/components/Calendar/Calendar.vue ***!
              \**********************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Calendar.vue?vue&type=template&id=dee108e2& */ "./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2&");
                /* harmony import */
                var _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./Calendar.vue?vue&type=script&lang=js& */ "./src/components/Calendar/Calendar.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/Calendar/Calendar.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/Calendar/Calendar.vue?vue&type=script&lang=js&":
            /*!***********************************************************************!*\
              !*** ./src/components/Calendar/Calendar.vue?vue&type=script&lang=js& ***!
              \***********************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/Calendar.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2&":
            /*!*****************************************************************************!*\
              !*** ./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2& ***!
              \*****************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=template&id=dee108e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/Calendar/CalendarRow.vue":
            /*!*************************************************!*\
              !*** ./src/components/Calendar/CalendarRow.vue ***!
              \*************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./CalendarRow.vue?vue&type=template&id=0daf06fb& */ "./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb&");
                /* harmony import */
                var _CalendarRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./CalendarRow.vue?vue&type=script&lang=js& */ "./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _CalendarRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/Calendar/CalendarRow.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js&":
            /*!**************************************************************************!*\
              !*** ./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js& ***!
              \**************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarRow.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb&":
            /*!********************************************************************************!*\
              !*** ./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb& ***!
              \********************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarRow.vue?vue&type=template&id=0daf06fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/Chart/Chart.vue":
            /*!****************************************!*\
              !*** ./src/components/Chart/Chart.vue ***!
              \****************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Chart.vue?vue&type=template&id=67c3f5cd& */ "./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd&");
                /* harmony import */
                var _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./Chart.vue?vue&type=script&lang=js& */ "./src/components/Chart/Chart.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/Chart/Chart.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/Chart/Chart.vue?vue&type=script&lang=js&":
            /*!*****************************************************************!*\
              !*** ./src/components/Chart/Chart.vue?vue&type=script&lang=js& ***!
              \*****************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Chart.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd&":
            /*!***********************************************************************!*\
              !*** ./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd& ***!
              \***********************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=template&id=67c3f5cd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/Chart/DaysHighlight.vue":
            /*!************************************************!*\
              !*** ./src/components/Chart/DaysHighlight.vue ***!
              \************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./DaysHighlight.vue?vue&type=template&id=1bfe64e8& */ "./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8&");
                /* harmony import */
                var _DaysHighlight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./DaysHighlight.vue?vue&type=script&lang=js& */ "./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _DaysHighlight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/Chart/DaysHighlight.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js&":
            /*!*************************************************************************!*\
              !*** ./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js& ***!
              \*************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./DaysHighlight.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8&":
            /*!*******************************************************************************!*\
              !*** ./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8& ***!
              \*******************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DaysHighlight.vue?vue&type=template&id=1bfe64e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/Chart/DependencyLines.vue":
            /*!**************************************************!*\
              !*** ./src/components/Chart/DependencyLines.vue ***!
              \**************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./DependencyLines.vue?vue&type=template&id=f1cbf6ba& */ "./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba&");
                /* harmony import */
                var _DependencyLines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./DependencyLines.vue?vue&type=script&lang=js& */ "./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _DependencyLines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/Chart/DependencyLines.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js&":
            /*!***************************************************************************!*\
              !*** ./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js& ***!
              \***************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./DependencyLines.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba&":
            /*!*********************************************************************************!*\
              !*** ./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba& ***!
              \*********************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DependencyLines.vue?vue&type=template&id=f1cbf6ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/Chart/Grid.vue":
            /*!***************************************!*\
              !*** ./src/components/Chart/Grid.vue ***!
              \***************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Grid.vue?vue&type=template&id=2bf979a7& */ "./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7&");
                /* harmony import */
                var _Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./Grid.vue?vue&type=script&lang=js& */ "./src/components/Chart/Grid.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/Chart/Grid.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/Chart/Grid.vue?vue&type=script&lang=js&":
            /*!****************************************************************!*\
              !*** ./src/components/Chart/Grid.vue?vue&type=script&lang=js& ***!
              \****************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Grid.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Grid.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7&":
            /*!**********************************************************************!*\
              !*** ./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7& ***!
              \**********************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Grid.vue?vue&type=template&id=2bf979a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/Chart/ProgressBar.vue":
            /*!**********************************************!*\
              !*** ./src/components/Chart/ProgressBar.vue ***!
              \**********************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _ProgressBar_vue_vue_type_template_id_4bc39355___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./ProgressBar.vue?vue&type=template&id=4bc39355& */ "./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355&");
                /* harmony import */
                var _ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./ProgressBar.vue?vue&type=script&lang=js& */ "./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _ProgressBar_vue_vue_type_template_id_4bc39355___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _ProgressBar_vue_vue_type_template_id_4bc39355___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/Chart/ProgressBar.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js&":
            /*!***********************************************************************!*\
              !*** ./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js& ***!
              \***********************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355&":
            /*!*****************************************************************************!*\
              !*** ./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355& ***!
              \*****************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_4bc39355___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=template&id=4bc39355& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_4bc39355___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_4bc39355___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/Chart/Row/Milestone.vue":
            /*!************************************************!*\
              !*** ./src/components/Chart/Row/Milestone.vue ***!
              \************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _Milestone_vue_vue_type_template_id_3013006c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Milestone.vue?vue&type=template&id=3013006c& */ "./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c&");
                /* harmony import */
                var _Milestone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./Milestone.vue?vue&type=script&lang=js& */ "./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _Milestone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _Milestone_vue_vue_type_template_id_3013006c___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _Milestone_vue_vue_type_template_id_3013006c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/Chart/Row/Milestone.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js&":
            /*!*************************************************************************!*\
              !*** ./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js& ***!
              \*************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_Milestone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Milestone.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Milestone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c&":
            /*!*******************************************************************************!*\
              !*** ./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c& ***!
              \*******************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Milestone_vue_vue_type_template_id_3013006c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Milestone.vue?vue&type=template&id=3013006c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Milestone_vue_vue_type_template_id_3013006c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Milestone_vue_vue_type_template_id_3013006c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/Chart/Row/Project.vue":
            /*!**********************************************!*\
              !*** ./src/components/Chart/Row/Project.vue ***!
              \**********************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _Project_vue_vue_type_template_id_077bbd73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Project.vue?vue&type=template&id=077bbd73& */ "./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73&");
                /* harmony import */
                var _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./Project.vue?vue&type=script&lang=js& */ "./src/components/Chart/Row/Project.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _Project_vue_vue_type_template_id_077bbd73___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _Project_vue_vue_type_template_id_077bbd73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/Chart/Row/Project.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/Chart/Row/Project.vue?vue&type=script&lang=js&":
            /*!***********************************************************************!*\
              !*** ./src/components/Chart/Row/Project.vue?vue&type=script&lang=js& ***!
              \***********************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Project.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73&":
            /*!*****************************************************************************!*\
              !*** ./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73& ***!
              \*****************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_077bbd73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=template&id=077bbd73& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_077bbd73___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_077bbd73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/Chart/Row/Task.mixin.js":
            /*!************************************************!*\
              !*** ./src/components/Chart/Row/Task.mixin.js ***!
              \************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /**
                 * @fileoverview Task mixin
                 * @license MIT
                 * @author Rafal Pospiech <neuronet.io@gmail.com>
                 * @package GanttElastic
                 */

                /* harmony default export */
                __webpack_exports__["default"] = ({
                    computed: {
                        /**
                         * Get view box
                         *
                         * @returns {string}
                         */
                        getViewBox() {
                            const task = this.task;
                            return `0 0 ${task.width} ${task.height}`;
                        },

                        /**
                         * Get group transform
                         *
                         * @returns {string}
                         */
                        getGroupTransform() {
                            return `translate(${this.task.x} ${this.task.y})`;
                        },

                        /**
                         * Should we display expander?
                         *
                         * @returns {boolean}
                         */
                        displayExpander() {
                            const expander = this.root.state.options.chart.expander;
                            return expander.display || (expander.displayIfTaskListHidden && !this.root.state.options.taskList.display);
                        }
                    },
                    methods: {
                        /**
                         * Emit event
                         *
                         * @param {string} eventName
                         * @param {Event} event
                         */
                        emitEvent(eventName, event) {
                            if (!this.root.state.options.scroll.scrolling) {
                                this.root.$emit(`chart-${this.task.type}-${eventName}`, { event, data: this.task });
                            }
                        }
                    }
                });


                /***/
            }),

            /***/
            "./src/components/Chart/Row/Task.vue":
            /*!*******************************************!*\
              !*** ./src/components/Chart/Row/Task.vue ***!
              \*******************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Task.vue?vue&type=template&id=e9c23eca& */ "./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca&");
                /* harmony import */
                var _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./Task.vue?vue&type=script&lang=js& */ "./src/components/Chart/Row/Task.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/Chart/Row/Task.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/Chart/Row/Task.vue?vue&type=script&lang=js&":
            /*!********************************************************************!*\
              !*** ./src/components/Chart/Row/Task.vue?vue&type=script&lang=js& ***!
              \********************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Task.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Task.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca&":
            /*!**************************************************************************!*\
              !*** ./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca& ***!
              \**************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Task.vue?vue&type=template&id=e9c23eca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/Chart/Text.vue":
            /*!***************************************!*\
              !*** ./src/components/Chart/Text.vue ***!
              \***************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _Text_vue_vue_type_template_id_459c2fe4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Text.vue?vue&type=template&id=459c2fe4& */ "./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4&");
                /* harmony import */
                var _Text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./Text.vue?vue&type=script&lang=js& */ "./src/components/Chart/Text.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _Text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _Text_vue_vue_type_template_id_459c2fe4___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _Text_vue_vue_type_template_id_459c2fe4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/Chart/Text.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/Chart/Text.vue?vue&type=script&lang=js&":
            /*!****************************************************************!*\
              !*** ./src/components/Chart/Text.vue?vue&type=script&lang=js& ***!
              \****************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Text.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Text.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4&":
            /*!**********************************************************************!*\
              !*** ./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4& ***!
              \**********************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_template_id_459c2fe4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Text.vue?vue&type=template&id=459c2fe4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_template_id_459c2fe4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_template_id_459c2fe4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/Expander.vue":
            /*!*************************************!*\
              !*** ./src/components/Expander.vue ***!
              \*************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Expander.vue?vue&type=template&id=09a21177& */ "./src/components/Expander.vue?vue&type=template&id=09a21177&");
                /* harmony import */
                var _Expander_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./Expander.vue?vue&type=script&lang=js& */ "./src/components/Expander.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _Expander_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/Expander.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/Expander.vue?vue&type=script&lang=js&":
            /*!**************************************************************!*\
              !*** ./src/components/Expander.vue?vue&type=script&lang=js& ***!
              \**************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../node_modules/vue-loader/lib??vue-loader-options!./Expander.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Expander.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/Expander.vue?vue&type=template&id=09a21177&":
            /*!********************************************************************!*\
              !*** ./src/components/Expander.vue?vue&type=template&id=09a21177& ***!
              \********************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Expander.vue?vue&type=template&id=09a21177& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Expander.vue?vue&type=template&id=09a21177&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/MainView.vue":
            /*!*************************************!*\
              !*** ./src/components/MainView.vue ***!
              \*************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./MainView.vue?vue&type=template&id=0bc4212e& */ "./src/components/MainView.vue?vue&type=template&id=0bc4212e&");
                /* harmony import */
                var _MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./MainView.vue?vue&type=script&lang=js& */ "./src/components/MainView.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/MainView.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/MainView.vue?vue&type=script&lang=js&":
            /*!**************************************************************!*\
              !*** ./src/components/MainView.vue?vue&type=script&lang=js& ***!
              \**************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../node_modules/vue-loader/lib??vue-loader-options!./MainView.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/MainView.vue?vue&type=template&id=0bc4212e&":
            /*!********************************************************************!*\
              !*** ./src/components/MainView.vue?vue&type=template&id=0bc4212e& ***!
              \********************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./MainView.vue?vue&type=template&id=0bc4212e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=template&id=0bc4212e&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/TaskList/ItemColumn.vue":
            /*!************************************************!*\
              !*** ./src/components/TaskList/ItemColumn.vue ***!
              \************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./ItemColumn.vue?vue&type=template&id=cb5a6c96& */ "./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96&");
                /* harmony import */
                var _ItemColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./ItemColumn.vue?vue&type=script&lang=js& */ "./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _ItemColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/TaskList/ItemColumn.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js&":
            /*!*************************************************************************!*\
              !*** ./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js& ***!
              \*************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemColumn.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96&":
            /*!*******************************************************************************!*\
              !*** ./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96& ***!
              \*******************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemColumn.vue?vue&type=template&id=cb5a6c96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/TaskList/TaskList.vue":
            /*!**********************************************!*\
              !*** ./src/components/TaskList/TaskList.vue ***!
              \**********************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./TaskList.vue?vue&type=template&id=6e11f12f& */ "./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f&");
                /* harmony import */
                var _TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./TaskList.vue?vue&type=script&lang=js& */ "./src/components/TaskList/TaskList.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/TaskList/TaskList.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/TaskList/TaskList.vue?vue&type=script&lang=js&":
            /*!***********************************************************************!*\
              !*** ./src/components/TaskList/TaskList.vue?vue&type=script&lang=js& ***!
              \***********************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskList.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskList.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f&":
            /*!*****************************************************************************!*\
              !*** ./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f& ***!
              \*****************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskList.vue?vue&type=template&id=6e11f12f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/TaskList/TaskListHeader.vue":
            /*!****************************************************!*\
              !*** ./src/components/TaskList/TaskListHeader.vue ***!
              \****************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./TaskListHeader.vue?vue&type=template&id=aefdd7c8& */ "./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8&");
                /* harmony import */
                var _TaskListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./TaskListHeader.vue?vue&type=script&lang=js& */ "./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _TaskListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/TaskList/TaskListHeader.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js&":
            /*!*****************************************************************************!*\
              !*** ./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js& ***!
              \*****************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListHeader.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8&":
            /*!***********************************************************************************!*\
              !*** ./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8& ***!
              \***********************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListHeader.vue?vue&type=template&id=aefdd7c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/components/TaskList/TaskListItem.vue":
            /*!**************************************************!*\
              !*** ./src/components/TaskList/TaskListItem.vue ***!
              \**************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./TaskListItem.vue?vue&type=template&id=9716293c& */ "./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c&");
                /* harmony import */
                var _TaskListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./TaskListItem.vue?vue&type=script&lang=js& */ "./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony import */
                var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





                /* normalize component */

                var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _TaskListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__["render"],
                    _TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
                    false,
                    null,
                    null,
                    null

                )

                /* hot reload */
                if (false) { var api; }
                component.options.__file = "src/components/TaskList/TaskListItem.vue"
                    /* harmony default export */
                __webpack_exports__["default"] = (component.exports);

                /***/
            }),

            /***/
            "./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js&":
            /*!***************************************************************************!*\
              !*** ./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js& ***!
              \***************************************************************************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListItem.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js&");
                /* empty/unused harmony star reexport */
                /* harmony default export */
                __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/
            }),

            /***/
            "./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c&":
            /*!*********************************************************************************!*\
              !*** ./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c& ***!
              \*********************************************************************************/
            /*! exports provided: render, staticRenderFns */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListItem.vue?vue&type=template&id=9716293c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c&");
                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

                /* harmony reexport (safe) */
                __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



                /***/
            }),

            /***/
            "./src/style.js":
            /*!**********************!*\
              !*** ./src/style.js ***!
              \**********************/
            /*! exports provided: default */
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "default", function() { return getStyle; });
                /**
                 * @fileoverview Styles for gantt-elastic
                 * @license MIT
                 * @author Rafal Pospiech <neuronet.io@gmail.com>
                 * @package GanttElastic
                 */

                function getStyle(fontSize = '12px', fontFamily = 'Arial, sans-serif') {
                    return {
                        fontSize,
                        fontFamily,
                        'main-view': {
                            background: '#FFFFFF'
                        },
                        'main-container-wrapper': {
                            overflow: 'hidden',
                            'border-top': '1px solid #eee',
                            'border-bottom': '1px solid #eee'
                        },
                        'main-container': {
                            float: 'left',
                            'max-width': '100%'
                        },
                        'main-view-container': {},
                        container: {
                            display: 'flex',
                            'max-width': '100%',
                            height: '100%'
                        },
                        'calendar-wrapper': {
                            'user-select': 'none'
                        },
                        calendar: {
                            width: '100%',
                            background: '#f3f5f7',
                            display: 'block'
                        },
                        'calendar-row': {
                            display: 'flex',
                            'justify-content': 'space-evenly'
                        },
                        'calendar-row--month': {},
                        'calendar-row--day': {},
                        'calendar-row--hour': {
                            'border-bottom': '1px solid #eee'
                        },
                        'calendar-row-rect': {
                            background: 'transparent',
                            display: 'flex'
                        },
                        'calendar-row-rect--month': {},
                        'calendar-row-rect--day': {},
                        'calendar-row-rect--hour': {},
                        'calendar-row-rect-child': {
                            display: 'block',
                            'border-right-width': '1px', // Calendar
                            'border-right-color': '#dadada',
                            'border-right-style': 'solid',
                            position: 'relative'
                        },
                        'calendar-row-rect-child--month': {},
                        'calendar-row-rect-child--day': { 'text-align': 'center' },
                        'calendar-row-rect-child--hour': { 'text-align': 'center' },
                        'calendar-row-text': {
                            'font-family': fontFamily, // GanttElastic
                            'font-size': fontSize, //GanttElastic
                            color: '#606060',
                            display: 'inline-block',
                            position: 'relative'
                        },
                        'calendar-row-text--month': {},
                        'calendar-row-text--day': {},
                        'calendar-row-text--hour': {},
                        'task-list-wrapper': {},
                        'task-list': { background: 'transparent', 'border-color': '#eee' },
                        'task-list-header': {
                            display: 'flex',
                            'user-select': 'none',
                            'vertical-align': 'middle',
                            'border-bottom': '1px solid #eee',
                            'border-left': '1px solid #eee'
                        },
                        'task-list-header-column': {
                            'border-left': '1px solid #00000050',
                            'box-sizing': 'border-box',
                            display: 'flex',
                            background: '#f3f5f7',
                            'border-color': 'transparent'
                        },
                        'task-list-expander-wrapper': {
                            display: 'inline-flex',
                            'flex-shrink': '0',
                            'box-sizing': 'border-box',
                            margin: '0 0 0 10px'
                        },
                        'task-list-expander-content': {
                            display: 'inline-flex',
                            cursor: 'pointer',
                            margin: 'auto 0px',
                            'box-sizing': 'border-box',
                            'user-select': 'none'
                        },
                        'task-list-expander-line': {
                            fill: 'transparent',
                            stroke: '#000000',
                            'stroke-width': '1',
                            'stroke-linecap': 'round'
                        },
                        'task-list-expander-border': {
                            fill: '#ffffffa0',
                            stroke: '#000000A0'
                        },
                        'chart-expander-wrapper': {
                            display: 'block',
                            'line-height': '1',
                            'box-sizing': 'border-box',
                            margin: '0'
                        },
                        'chart-expander-content': {
                            display: 'inline-flex',
                            cursor: 'pointer',
                            margin: 'auto 0px',
                            'box-sizing': 'border-box',
                            'user-select': 'none'
                        },
                        'chart-expander-line': {
                            fill: 'transparent',
                            stroke: '#000000',
                            'stroke-width': '1',
                            'stroke-linecap': 'round'
                        },
                        'chart-expander-border': {
                            fill: '#ffffffa0',
                            stroke: '#000000A0'
                        },
                        'task-list-container': {},
                        'task-list-header-label': {
                            overflow: 'hidden',
                            'text-overflow': 'ellipsis',
                            'font-family': fontFamily,
                            'font-size': fontSize,
                            'box-sizing': 'border-box',
                            margin: 'auto 6px',
                            'flex-grow': '1',
                            'vertical-align': 'middle'
                        },
                        'task-list-header-resizer-wrapper': {
                            background: 'transparent',
                            height: '100%',
                            width: '6px',
                            cursor: 'col-resize',
                            display: 'inline-flex',
                            'vertical-align': 'center'
                        },
                        'task-list-header-resizer': { margin: 'auto 0px' },
                        'task-list-header-resizer-dot': {
                            width: '3px',
                            height: '3px',
                            background: '#ddd',
                            'border-radius': '100%',
                            margin: '4px 0px'
                        },
                        'task-list-items': {
                            overflow: 'hidden'
                        },
                        'task-list-item': {
                            'border-top': '1px solid #eee',
                            'border-right': '1px solid #eee',
                            'box-sizing': 'border-box',
                            display: 'flex',
                            background: 'transparent'
                        },
                        'task-list-item-column': {
                            display: 'inline-flex',
                            'flex-shrink': '0',
                            'border-left': '1px solid #00000050',
                            'box-sizing': 'border-box',
                            'border-color': '#eee'
                        },
                        'task-list-item-value-wrapper': {
                            overflow: 'hidden',
                            display: 'flex',
                            width: '100%'
                        },
                        'task-list-item-value-container': {
                            margin: 'auto 0px',
                            overflow: 'hidden'
                        },
                        'task-list-item-value': {
                            display: 'block',
                            'flex-shrink': '100',
                            'font-family': fontFamily,
                            'font-size': fontSize,
                            'margin-top': 'auto',
                            'margin-bottom': 'auto',
                            'margin-left': '6px', // TaskList
                            'margin-right': '6px',
                            overflow: 'hidden',
                            'text-overflow': 'ellipsis',
                            'line-height': '1.5em',
                            'word-break': 'keep-all',
                            'white-space': 'nowrap',
                            color: '#606060',
                            background: '#FFFFFF'
                        },
                        'grid-lines': {},
                        'grid-line-horizontal': {
                            stroke: '#00000010',
                            'stroke-width': 1
                        },
                        'grid-line-vertical': {
                            stroke: '#00000010',
                            'stroke-width': 1
                        },
                        'grid-line-time': {
                            stroke: '#FF000080',
                            'stroke-width': 1
                        },
                        chart: {
                            'user-select': 'none',
                            overflow: 'hidden'
                        },
                        'chart-calendar-container': {
                            'user-select': 'none',
                            overflow: 'hidden',
                            'max-width': '100%',
                            'border-right': '1px solid #eee'
                        },
                        'chart-graph-container': {
                            'user-select': 'none',
                            overflow: 'hidden',
                            'max-width': '100%',
                            'border-right': '1px solid #eee'
                        },
                        'chart-area': {},
                        'chart-graph': {
                            overflow: 'hidden'
                        },
                        'chart-row-text-wrapper': {},
                        'chart-row-text': {
                            background: '#ffffffa0',
                            'border-radius': '10px',
                            'font-family': fontFamily,
                            'font-size': fontSize,
                            'font-weight': 'normal',
                            color: '#000000a0',
                            height: '100%',
                            display: 'inline-block'
                        },
                        'chart-row-text-content': {
                            padding: '0px 6px'
                        },
                        'chart-row-text-content--text': {},
                        'chart-row-text-content--html': {},
                        'chart-row-wrapper': {},
                        'chart-row-bar-wrapper': {},
                        'chart-row-bar': {},
                        'chart-row-bar-polygon': {
                            stroke: '#000',
                            'stroke-width': 1,
                            fill: '#000'
                        },
                        'chart-row-project-wrapper': {},
                        'chart-row-project': {},
                        'chart-row-project-polygon': {},
                        'chart-row-milestone-wrapper': {},
                        'chart-row-milestone': {},
                        'chart-row-milestone-polygon': {},
                        'chart-row-task-wrapper': {},
                        'chart-row-task': {},
                        'chart-row-task-polygon': {},
                        'chart-row-progress-bar-wrapper': {},
                        'chart-row-progress-bar': {},
                        'chart-row-progress-bar-line': {
                            stroke: '#ffffff25',
                            'stroke-width': 20
                        },
                        'chart-row-progress-bar-solid': {
                            fill: '#0EAC51',
                            height: '20%'
                        },
                        'chart-row-progress-bar-pattern': {
                            fill: 'url(#diagonalHatch)',
                            transform: 'translateY(0.1) scaleY(0.8)'
                        },
                        'chart-row-progress-bar-outline': {
                            stroke: '#E74C3C',
                            'stroke-width': 1
                        },
                        'chart-dependency-lines-wrapper': {},
                        'chart-dependency-lines-path': {
                            fill: 'transparent',
                            stroke: '#FFa00090',
                            'stroke-width': 2
                        },
                        'chart-scroll-container': {},
                        'chart-scroll-container--horizontal': {
                            overflow: 'auto',
                            'max-width': '100%'
                        },
                        'chart-scroll-container--vertical': {
                            'overflow-y': 'auto',
                            'overflow-x': 'hidden',
                            'max-height': '100%',
                            float: 'right'
                        },
                        'chart-days-highlight-rect': {
                            fill: '#000'
                        },
                        'slot-header-beforeOptions': {
                            display: 'inline-block'
                        }
                    };
                }


                /***/
            }),

            /***/
            "vue":
            /*!**********************!*\
              !*** external "vue" ***!
              \**********************/
            /*! no static exports found */
            /***/
                (function(module, exports) {

                module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;

                /***/
            })

            /******/
        })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvR2FudHRFbGFzdGljLnZ1ZT83ZjFmIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL25vZGVfbW9kdWxlcy9yZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwvZGlzdC9SZXNpemVPYnNlcnZlci5lcy5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL0dhbnR0RWxhc3RpYy52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9DaGFydC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RheXNIaWdobGlnaHQudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9HcmlkLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2hhcnQvUHJvZ3Jlc3NCYXIudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvTWlsZXN0b25lLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Byb2plY3QudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvVGFzay52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL0NoYXJ0L1RleHQudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9FeHBhbmRlci52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL01haW5WaWV3LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvSXRlbUNvbHVtbi52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RIZWFkZXIudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEl0ZW0udnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9HYW50dEVsYXN0aWMudnVlPzBkZjkiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXIudnVlP2JjMDgiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlPzExMzgiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvQ2hhcnQudnVlPzI4ODEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvRGF5c0hpZ2hsaWdodC52dWU/NDU2ZiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlPzdlZTIiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvR3JpZC52dWU/NTliNyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Qcm9ncmVzc0Jhci52dWU/NGFjMyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvTWlsZXN0b25lLnZ1ZT9kN2RjIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9Qcm9qZWN0LnZ1ZT85MGRkIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9UYXNrLnZ1ZT82N2JhIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1RleHQudnVlP2NhYzQiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvRXhwYW5kZXIudnVlPzcwZWMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvTWFpblZpZXcudnVlPzRhZGIiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvSXRlbUNvbHVtbi52dWU/OTY5YiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdC52dWU/MWU5YiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEhlYWRlci52dWU/ODgwOCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEl0ZW0udnVlP2NiY2IiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvR2FudHRFbGFzdGljLnZ1ZT8zMGM1Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9HYW50dEVsYXN0aWMudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9HYW50dEVsYXN0aWMudnVlP2NhMmEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL0dhbnR0RWxhc3RpYy52dWU/NWEyMCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvR2FudHRFbGFzdGljLnZ1ZT82NTE2Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhci52dWU/NDBkNSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhci52dWU/YTAyOSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhclJvdy52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlPzI1NWIiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlP2FjMWEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvQ2hhcnQudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0NoYXJ0LnZ1ZT83ZjljIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0NoYXJ0LnZ1ZT80ZTNkIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RheXNIaWdobGlnaHQudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RheXNIaWdobGlnaHQudnVlPzdlMzMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvRGF5c0hpZ2hsaWdodC52dWU/N2VkMiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RlcGVuZGVuY3lMaW5lcy52dWU/NzE2NCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlPzNkZTMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvR3JpZC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvR3JpZC52dWU/Nzc2MSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9HcmlkLnZ1ZT80ZmEwIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Byb2dyZXNzQmFyLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Qcm9ncmVzc0Jhci52dWU/OWFhYiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Qcm9ncmVzc0Jhci52dWU/MTgwNCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvTWlsZXN0b25lLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvTWlsZXN0b25lLnZ1ZT85MjM5Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9NaWxlc3RvbmUudnVlPzJmM2MiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Byb2plY3QudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9Qcm9qZWN0LnZ1ZT81NGM5Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9Qcm9qZWN0LnZ1ZT82NWVmIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9UYXNrLm1peGluLmpzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9UYXNrLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvVGFzay52dWU/ODY4NyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvVGFzay52dWU/NGExOCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9UZXh0LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9UZXh0LnZ1ZT8xN2IxIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1RleHQudnVlP2YyN2EiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvRXhwYW5kZXIudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0V4cGFuZGVyLnZ1ZT8wODk4Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0V4cGFuZGVyLnZ1ZT84ZGYzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL01haW5WaWV3LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9NYWluVmlldy52dWU/ZjViMyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9NYWluVmlldy52dWU/ZWQ4NyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9JdGVtQ29sdW1uLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9JdGVtQ29sdW1uLnZ1ZT84ODE0Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L0l0ZW1Db2x1bW4udnVlPzE0YWMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3QudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0LnZ1ZT83MzU0Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0LnZ1ZT9kOWRlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0SGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEhlYWRlci52dWU/NjM1MyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEhlYWRlci52dWU/YmM3MiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEl0ZW0udnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0SXRlbS52dWU/NjRmOCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEl0ZW0udnVlPzg3YmEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL3N0eWxlLmpzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9leHRlcm5hbCBcInZ1ZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtR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O0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVCQUF1QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjLG9FQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzk0QlM7QUFDSjtBQUN1QjtBQUNmO0FBQ29COztBQUV0RDtBQUNBLGNBQWMsMENBQVc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMseURBQVE7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNENBQUs7QUFDaEM7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0Q0FBSztBQUNYLE1BQU0sNENBQUs7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCw0Q0FBSztBQUMzRCx1REFBdUQsNENBQUs7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCw0Q0FBSztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDRDQUFLO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsNENBQUs7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNENBQUs7QUFDMUIsMEJBQTBCLDRDQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNENBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRDQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDRDQUFLO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsNENBQUs7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnRUFBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSwyRUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqaURGO0FBQ2tCOztBQUU3QjtBQUNmO0FBQ0E7QUFDQSxJQUFJLHFFQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRDQUFLO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRDQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNENBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9TYTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QjRCO0FBQ2tCO0FBQ0E7QUFDSTtBQUNsQjtBQUNVO0FBQ0o7QUFDekI7QUFDZjtBQUNBO0FBQ0EsSUFBSSx1REFBSTtBQUNSLElBQUksNkVBQWU7QUFDbkIsSUFBSSx3RUFBUTtBQUNaLElBQUksMkRBQUk7QUFDUixJQUFJLHFFQUFTO0FBQ2IsSUFBSSxpRUFBTztBQUNYLElBQUkseUVBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZ3QjtBQUNYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDRDQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLDRDQUFLO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRWE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRGE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkM2QztBQUNUOztBQUV0Qzs7QUFFZTtBQUNmO0FBQ0E7QUFDQSxJQUFJLHdFQUFRO0FBQ1osSUFBSSwrREFBSztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6T2E7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR2dEO0FBQ0o7QUFDL0I7QUFDZjtBQUNBO0FBQ0EsSUFBSSwyRUFBYztBQUNsQixJQUFJLHVFQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDc0I2QztBQUNoQztBQUNmO0FBQ0E7QUFDQSxJQUFJLHVFQUFnQjtBQUNwQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTZCO0FBQzdCLHFDQUFxQztBQUNyQyxnQ0FBZ0M7QUFDaEMsd0JBQXdCO0FBQ3hCLGdDQUFnQztBQUNoQyx3Q0FBd0M7QUFDeEMsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDelRBLGlEIiwiZmlsZSI6IkdhbnR0RWxhc3RpYy51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJ2dWVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1widnVlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkdhbnR0RWxhc3RpY1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInZ1ZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiR2FudHRFbGFzdGljXCJdID0gZmFjdG9yeShyb290W1widnVlXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV92dWVfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0dhbnR0RWxhc3RpYy52dWVcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbltjbGFzc149J2dhbnR0LWVsYXN0aWMnXSxcXHJcXG5bY2xhc3MqPScgZ2FudHQtZWxhc3RpYyddIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5nYW50dC1lbGFzdGljX19tYWluLXZpZXcgc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uZ2FudHQtZWxhc3RpY19fZ3JpZC1ob3Jpem9udGFsLWxpbmUsXFxyXFxuLmdhbnR0LWVsYXN0aWNfX2dyaWQtdmVydGljYWwtbGluZSB7XFxyXFxuICBzdHJva2U6ICNhMGEwYTA7XFxyXFxuICBzdHJva2Utd2lkdGg6IDE7XFxufVxcbmZvcmVpZ25PYmplY3QgPiAqIHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG4uZ2FudHQtZWxhc3RpYyAucC0yIHtcXHJcXG4gIHBhZGRpbmc6IDEwcmVtO1xcbn1cXG4uZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3LW1haW4tY29udGFpbmVyLFxcclxcbi5nYW50dC1lbGFzdGljX19tYWluLXZpZXctY29udGFpbmVyIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLWNvbHVtbjpsYXN0LW9mLXR5cGUge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDAwMDUwO1xcbn1cXG4uZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW06bGFzdC1vZi10eXBlIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwNTA7XFxufVxcbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyOmhvdmVyIHtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxufVxcbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyOmhvdmVyID4gLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xcbn1cXG4uZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUtd3JhcHBlcjpob3ZlciA+IC5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIiFmdW5jdGlvbih0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4oKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOnQuZGF5anM9bigpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJtaWxsaXNlY29uZFwiLG49XCJzZWNvbmRcIixlPVwibWludXRlXCIscj1cImhvdXJcIixpPVwiZGF5XCIscz1cIndlZWtcIix1PVwibW9udGhcIixvPVwicXVhcnRlclwiLGE9XCJ5ZWFyXCIsaD0vXihcXGR7NH0pLT8oXFxkezEsMn0pLT8oXFxkezAsMn0pW14wLTldKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT8uPyhcXGR7MSwzfSk/JC8sZj0vXFxbKFteXFxdXSspXXxZezIsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csYz1mdW5jdGlvbih0LG4sZSl7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49bj90OlwiXCIrQXJyYXkobisxLXIubGVuZ3RoKS5qb2luKGUpK3R9LGQ9e3M6Yyx6OmZ1bmN0aW9uKHQpe3ZhciBuPS10LnV0Y09mZnNldCgpLGU9TWF0aC5hYnMobikscj1NYXRoLmZsb29yKGUvNjApLGk9ZSU2MDtyZXR1cm4objw9MD9cIitcIjpcIi1cIikrYyhyLDIsXCIwXCIpK1wiOlwiK2MoaSwyLFwiMFwiKX0sbTpmdW5jdGlvbih0LG4pe3ZhciBlPTEyKihuLnllYXIoKS10LnllYXIoKSkrKG4ubW9udGgoKS10Lm1vbnRoKCkpLHI9dC5jbG9uZSgpLmFkZChlLHUpLGk9bi1yPDAscz10LmNsb25lKCkuYWRkKGUrKGk/LTE6MSksdSk7cmV0dXJuIE51bWJlcigtKGUrKG4tcikvKGk/ci1zOnMtcikpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKGgpe3JldHVybntNOnUseTphLHc6cyxkOmksaDpyLG06ZSxzOm4sbXM6dCxROm99W2hdfHxTdHJpbmcoaHx8XCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sXCJcIil9LHU6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXR9fSwkPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIil9LGw9XCJlblwiLG09e307bVtsXT0kO3ZhciB5PWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2Ygdn0sTT1mdW5jdGlvbih0LG4sZSl7dmFyIHI7aWYoIXQpcmV0dXJuIGw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpbVt0XSYmKHI9dCksbiYmKG1bdF09bixyPXQpO2Vsc2V7dmFyIGk9dC5uYW1lO21baV09dCxyPWl9cmV0dXJuIGV8fChsPXIpLHJ9LGc9ZnVuY3Rpb24odCxuLGUpe2lmKHkodCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgcj1uP1wic3RyaW5nXCI9PXR5cGVvZiBuP3tmb3JtYXQ6bixwbDplfTpuOnt9O3JldHVybiByLmRhdGU9dCxuZXcgdihyKX0sRD1kO0QubD1NLEQuaT15LEQudz1mdW5jdGlvbih0LG4pe3JldHVybiBnKHQse2xvY2FsZTpuLiRMLHV0YzpuLiR1fSl9O3ZhciB2PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYyh0KXt0aGlzLiRMPXRoaXMuJEx8fE0odC5sb2NhbGUsbnVsbCwhMCksdGhpcy5wYXJzZSh0KX12YXIgZD1jLnByb3RvdHlwZTtyZXR1cm4gZC5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBuPXQuZGF0ZSxlPXQudXRjO2lmKG51bGw9PT1uKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKEQudShuKSlyZXR1cm4gbmV3IERhdGU7aWYobiBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKG4pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuJiYhL1okL2kudGVzdChuKSl7dmFyIHI9bi5tYXRjaChoKTtpZihyKXJldHVybiBlP25ldyBEYXRlKERhdGUuVVRDKHJbMV0sclsyXS0xLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscls3XXx8MCkpOm5ldyBEYXRlKHJbMV0sclsyXS0xLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscls3XXx8MCl9cmV0dXJuIG5ldyBEYXRlKG4pfSh0KSx0aGlzLmluaXQoKX0sZC5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sZC4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gRH0sZC5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuIShcIkludmFsaWQgRGF0ZVwiPT09dGhpcy4kZC50b1N0cmluZygpKX0sZC5pc1NhbWU9ZnVuY3Rpb24odCxuKXt2YXIgZT1nKHQpO3JldHVybiB0aGlzLnN0YXJ0T2Yobik8PWUmJmU8PXRoaXMuZW5kT2Yobil9LGQuaXNBZnRlcj1mdW5jdGlvbih0LG4pe3JldHVybiBnKHQpPHRoaXMuc3RhcnRPZihuKX0sZC5pc0JlZm9yZT1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLmVuZE9mKG4pPGcodCl9LGQuJGc9ZnVuY3Rpb24odCxuLGUpe3JldHVybiBELnUodCk/dGhpc1tuXTp0aGlzLnNldChlLHQpfSxkLnllYXI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiR5XCIsYSl9LGQubW9udGg9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiRNXCIsdSl9LGQuZGF5PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkV1wiLGkpfSxkLmRhdGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiREXCIsXCJkYXRlXCIpfSxkLmhvdXI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiRIXCIscil9LGQubWludXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkbVwiLGUpfSxkLnNlY29uZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kZyh0LFwiJHNcIixuKX0sZC5taWxsaXNlY29uZD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy4kZyhuLFwiJG1zXCIsdCl9LGQudW5peD1mdW5jdGlvbigpe3JldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpLzFlMyl9LGQudmFsdWVPZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLmdldFRpbWUoKX0sZC5zdGFydE9mPWZ1bmN0aW9uKHQsbyl7dmFyIGg9dGhpcyxmPSEhRC51KG8pfHxvLGM9RC5wKHQpLGQ9ZnVuY3Rpb24odCxuKXt2YXIgZT1ELncoaC4kdT9EYXRlLlVUQyhoLiR5LG4sdCk6bmV3IERhdGUoaC4keSxuLHQpLGgpO3JldHVybiBmP2U6ZS5lbmRPZihpKX0sJD1mdW5jdGlvbih0LG4pe3JldHVybiBELncoaC50b0RhdGUoKVt0XS5hcHBseShoLnRvRGF0ZSgpLChmP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UobikpLGgpfSxsPXRoaXMuJFcsbT10aGlzLiRNLHk9dGhpcy4kRCxNPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goYyl7Y2FzZSBhOnJldHVybiBmP2QoMSwwKTpkKDMxLDExKTtjYXNlIHU6cmV0dXJuIGY/ZCgxLG0pOmQoMCxtKzEpO2Nhc2Ugczp2YXIgZz10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsdj0obDxnP2wrNzpsKS1nO3JldHVybiBkKGY/eS12OnkrKDYtdiksbSk7Y2FzZSBpOmNhc2VcImRhdGVcIjpyZXR1cm4gJChNK1wiSG91cnNcIiwwKTtjYXNlIHI6cmV0dXJuICQoTStcIk1pbnV0ZXNcIiwxKTtjYXNlIGU6cmV0dXJuICQoTStcIlNlY29uZHNcIiwyKTtjYXNlIG46cmV0dXJuICQoTStcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LGQuZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sZC4kc2V0PWZ1bmN0aW9uKHMsbyl7dmFyIGgsZj1ELnAocyksYz1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksZD0oaD17fSxoW2ldPWMrXCJEYXRlXCIsaC5kYXRlPWMrXCJEYXRlXCIsaFt1XT1jK1wiTW9udGhcIixoW2FdPWMrXCJGdWxsWWVhclwiLGhbcl09YytcIkhvdXJzXCIsaFtlXT1jK1wiTWludXRlc1wiLGhbbl09YytcIlNlY29uZHNcIixoW3RdPWMrXCJNaWxsaXNlY29uZHNcIixoKVtmXSwkPWY9PT1pP3RoaXMuJEQrKG8tdGhpcy4kVyk6bztpZihmPT09dXx8Zj09PWEpe3ZhciBsPXRoaXMuY2xvbmUoKS5zZXQoXCJkYXRlXCIsMSk7bC4kZFtkXSgkKSxsLmluaXQoKSx0aGlzLiRkPWwuc2V0KFwiZGF0ZVwiLE1hdGgubWluKHRoaXMuJEQsbC5kYXlzSW5Nb250aCgpKSkudG9EYXRlKCl9ZWxzZSBkJiZ0aGlzLiRkW2RdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxkLnNldD1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LG4pfSxkLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tELnAodCldKCl9LGQuYWRkPWZ1bmN0aW9uKHQsbyl7dmFyIGgsZj10aGlzO3Q9TnVtYmVyKHQpO3ZhciBjPUQucChvKSxkPWZ1bmN0aW9uKG4pe3ZhciBlPWcoZik7cmV0dXJuIEQudyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZChuKnQpKSxmKX07aWYoYz09PXUpcmV0dXJuIHRoaXMuc2V0KHUsdGhpcy4kTSt0KTtpZihjPT09YSlyZXR1cm4gdGhpcy5zZXQoYSx0aGlzLiR5K3QpO2lmKGM9PT1pKXJldHVybiBkKDEpO2lmKGM9PT1zKXJldHVybiBkKDcpO3ZhciAkPShoPXt9LGhbZV09NmU0LGhbcl09MzZlNSxoW25dPTFlMyxoKVtjXXx8MSxsPXRoaXMudmFsdWVPZigpK3QqJDtyZXR1cm4gRC53KGwsdGhpcyl9LGQuc3VidHJhY3Q9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdGhpcy5hZGQoLTEqdCxuKX0sZC5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIG49dGhpcztpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuXCJJbnZhbGlkIERhdGVcIjt2YXIgZT10fHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIscj1ELnoodGhpcyksaT10aGlzLiRsb2NhbGUoKSxzPXRoaXMuJEgsdT10aGlzLiRtLG89dGhpcy4kTSxhPWkud2Vla2RheXMsaD1pLm1vbnRocyxjPWZ1bmN0aW9uKHQscixpLHMpe3JldHVybiB0JiYodFtyXXx8dChuLGUpKXx8aVtyXS5zdWJzdHIoMCxzKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gRC5zKHMlMTJ8fDEyLHQsXCIwXCIpfSwkPWkubWVyaWRpZW18fGZ1bmN0aW9uKHQsbixlKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIGU/ci50b0xvd2VyQ2FzZSgpOnJ9LGw9e1lZOlN0cmluZyh0aGlzLiR5KS5zbGljZSgtMiksWVlZWTp0aGlzLiR5LE06bysxLE1NOkQucyhvKzEsMixcIjBcIiksTU1NOmMoaS5tb250aHNTaG9ydCxvLGgsMyksTU1NTTpoW29dfHxoKHRoaXMsZSksRDp0aGlzLiRELEREOkQucyh0aGlzLiRELDIsXCIwXCIpLGQ6U3RyaW5nKHRoaXMuJFcpLGRkOmMoaS53ZWVrZGF5c01pbix0aGlzLiRXLGEsMiksZGRkOmMoaS53ZWVrZGF5c1Nob3J0LHRoaXMuJFcsYSwzKSxkZGRkOmFbdGhpcy4kV10sSDpTdHJpbmcocyksSEg6RC5zKHMsMixcIjBcIiksaDpkKDEpLGhoOmQoMiksYTokKHMsdSwhMCksQTokKHMsdSwhMSksbTpTdHJpbmcodSksbW06RC5zKHUsMixcIjBcIiksczpTdHJpbmcodGhpcy4kcyksc3M6RC5zKHRoaXMuJHMsMixcIjBcIiksU1NTOkQucyh0aGlzLiRtcywzLFwiMFwiKSxaOnJ9O3JldHVybiBlLnJlcGxhY2UoZixmdW5jdGlvbih0LG4pe3JldHVybiBufHxsW3RdfHxyLnJlcGxhY2UoXCI6XCIsXCJcIil9KX0sZC51dGNPZmZzZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gMTUqLU1hdGgucm91bmQodGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpLzE1KX0sZC5kaWZmPWZ1bmN0aW9uKHQsaCxmKXt2YXIgYyxkPUQucChoKSwkPWcodCksbD02ZTQqKCQudXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSksbT10aGlzLSQseT1ELm0odGhpcywkKTtyZXR1cm4geT0oYz17fSxjW2FdPXkvMTIsY1t1XT15LGNbb109eS8zLGNbc109KG0tbCkvNjA0OGU1LGNbaV09KG0tbCkvODY0ZTUsY1tyXT1tLzM2ZTUsY1tlXT1tLzZlNCxjW25dPW0vMWUzLGMpW2RdfHxtLGY/eTpELmEoeSl9LGQuZGF5c0luTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbmRPZih1KS4kRH0sZC4kbG9jYWxlPWZ1bmN0aW9uKCl7cmV0dXJuIG1bdGhpcy4kTF19LGQubG9jYWxlPWZ1bmN0aW9uKHQsbil7aWYoIXQpcmV0dXJuIHRoaXMuJEw7dmFyIGU9dGhpcy5jbG9uZSgpO3JldHVybiBlLiRMPU0odCxuLCEwKSxlfSxkLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIEQudyh0aGlzLnRvRGF0ZSgpLHRoaXMpfSxkLnRvRGF0ZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRGF0ZSh0aGlzLiRkKX0sZC50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50b0lTT1N0cmluZygpfSxkLnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9JU09TdHJpbmcoKX0sZC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvVVRDU3RyaW5nKCl9LGN9KCk7cmV0dXJuIGcucHJvdG90eXBlPXYucHJvdG90eXBlLGcuZXh0ZW5kPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQobix2LGcpLGd9LGcubG9jYWxlPU0sZy5pc0RheWpzPXksZy51bml4PWZ1bmN0aW9uKHQpe3JldHVybiBnKDFlMyp0KX0sZy5lbj1tW2xdLGcuTHM9bSxnfSk7XG4iLCIvKipcclxuICogQSBjb2xsZWN0aW9uIG9mIHNoaW1zIHRoYXQgcHJvdmlkZSBtaW5pbWFsIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIEVTNiBjb2xsZWN0aW9ucy5cclxuICpcclxuICogVGhlc2UgaW1wbGVtZW50YXRpb25zIGFyZSBub3QgbWVhbnQgdG8gYmUgdXNlZCBvdXRzaWRlIG9mIHRoZSBSZXNpemVPYnNlcnZlclxyXG4gKiBtb2R1bGVzIGFzIHRoZXkgY292ZXIgb25seSBhIGxpbWl0ZWQgcmFuZ2Ugb2YgdXNlIGNhc2VzLlxyXG4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYywgdmFsaWQtanNkb2MgKi9cclxudmFyIE1hcFNoaW0gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hcDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBpbmRleCBpbiBwcm92aWRlZCBhcnJheSB0aGF0IG1hdGNoZXMgdGhlIHNwZWNpZmllZCBrZXkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxBcnJheT59IGFyclxyXG4gICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldEluZGV4KGFyciwga2V5KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IC0xO1xyXG4gICAgICAgIGFyci5zb21lKGZ1bmN0aW9uIChlbnRyeSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5WzBdID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcInNpemVcIiwge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZW50cmllc19fLmxlbmd0aDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX19lbnRyaWVzX19baW5kZXhdO1xyXG4gICAgICAgICAgICByZXR1cm4gZW50cnkgJiYgZW50cnlbMV07XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fZW50cmllc19fW2luZGV4XVsxXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXy5wdXNoKFtrZXksIHZhbHVlXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgZW50cmllcyA9IHRoaXMuX19lbnRyaWVzX187XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KGVudHJpZXMsIGtleSk7XHJcbiAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGVudHJpZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIX5nZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18uc3BsaWNlKDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtjdHg9bnVsbF1cclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjdHgpIHtcclxuICAgICAgICAgICAgaWYgKGN0eCA9PT0gdm9pZCAwKSB7IGN0eCA9IG51bGw7IH1cclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX19lbnRyaWVzX187IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGN0eCwgZW50cnlbMV0sIGVudHJ5WzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzXzE7XHJcbiAgICB9KCkpO1xyXG59KSgpO1xuXG4vKipcclxuICogRGV0ZWN0cyB3aGV0aGVyIHdpbmRvdyBhbmQgZG9jdW1lbnQgb2JqZWN0cyBhcmUgYXZhaWxhYmxlIGluIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbiAqL1xyXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgPT09IGRvY3VtZW50O1xuXG4vLyBSZXR1cm5zIGdsb2JhbCBvYmplY3Qgb2YgYSBjdXJyZW50IGVudmlyb25tZW50LlxyXG52YXIgZ2xvYmFsJDEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93O1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXHJcbiAgICByZXR1cm4gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcclxufSkoKTtcblxuLyoqXHJcbiAqIEEgc2hpbSBmb3IgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB3aGljaCBmYWxscyBiYWNrIHRvIHRoZSBzZXRUaW1lb3V0IGlmXHJcbiAqIGZpcnN0IG9uZSBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXF1ZXN0cycgaWRlbnRpZmllci5cclxuICovXHJcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vIEl0J3MgcmVxdWlyZWQgdG8gdXNlIGEgYm91bmRlZCBmdW5jdGlvbiBiZWNhdXNlIElFIHNvbWV0aW1lcyB0aHJvd3NcclxuICAgICAgICAvLyBhbiBcIkludmFsaWQgY2FsbGluZyBvYmplY3RcIiBlcnJvciBpZiByQUYgaXMgaW52b2tlZCB3aXRob3V0IHRoZSBnbG9iYWxcclxuICAgICAgICAvLyBvYmplY3Qgb24gdGhlIGxlZnQgaGFuZCBzaWRlLlxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChnbG9iYWwkMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrKERhdGUubm93KCkpOyB9LCAxMDAwIC8gNjApOyB9O1xyXG59KSgpO1xuXG4vLyBEZWZpbmVzIG1pbmltdW0gdGltZW91dCBiZWZvcmUgYWRkaW5nIGEgdHJhaWxpbmcgY2FsbC5cclxudmFyIHRyYWlsaW5nVGltZW91dCA9IDI7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBlbnN1cmVzIHRoYXQgcHJvdmlkZWQgY2FsbGJhY2sgd2lsbCBiZVxyXG4gKiBpbnZva2VkIG9ubHkgb25jZSBkdXJpbmcgdGhlIHNwZWNpZmllZCBkZWxheSBwZXJpb2QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgZGVsYXkgcGVyaW9kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgLSBEZWxheSBhZnRlciB3aGljaCB0byBpbnZva2UgY2FsbGJhY2suXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICovXHJcbmZ1bmN0aW9uIHRocm90dGxlIChjYWxsYmFjaywgZGVsYXkpIHtcclxuICAgIHZhciBsZWFkaW5nQ2FsbCA9IGZhbHNlLCB0cmFpbGluZ0NhbGwgPSBmYWxzZSwgbGFzdENhbGxUaW1lID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgZnVuY3Rpb24gYW5kIHNjaGVkdWxlcyBuZXcgaW52b2NhdGlvbiBpZlxyXG4gICAgICogdGhlIFwicHJveHlcIiB3YXMgY2FsbGVkIGR1cmluZyBjdXJyZW50IHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlc29sdmVQZW5kaW5nKCkge1xyXG4gICAgICAgIGlmIChsZWFkaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICBsZWFkaW5nQ2FsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhaWxpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgIHByb3h5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXkuIEl0IHdpbGwgZnVydGhlciBwb3N0cG9uZVxyXG4gICAgICogaW52b2NhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZGVsZWdhdGluZyBpdCB0byB0aGVcclxuICAgICAqIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdGltZW91dENhbGxiYWNrKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxKHJlc29sdmVQZW5kaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2NoZWR1bGVzIGludm9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBwcm94eSgpIHtcclxuICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBpZiAobGVhZGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgLy8gUmVqZWN0IGltbWVkaWF0ZWx5IGZvbGxvd2luZyBjYWxscy5cclxuICAgICAgICAgICAgaWYgKHRpbWVTdGFtcCAtIGxhc3RDYWxsVGltZSA8IHRyYWlsaW5nVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFNjaGVkdWxlIG5ldyBjYWxsIHRvIGJlIGluIGludm9rZWQgd2hlbiB0aGUgcGVuZGluZyBvbmUgaXMgcmVzb2x2ZWQuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgaW1wb3J0YW50IGZvciBcInRyYW5zaXRpb25zXCIgd2hpY2ggbmV2ZXIgYWN0dWFsbHkgc3RhcnRcclxuICAgICAgICAgICAgLy8gaW1tZWRpYXRlbHkgc28gdGhlcmUgaXMgYSBjaGFuY2UgdGhhdCB3ZSBtaWdodCBtaXNzIG9uZSBpZiBjaGFuZ2VcclxuICAgICAgICAgICAgLy8gaGFwcGVucyBhbWlkcyB0aGUgcGVuZGluZyBpbnZvY2F0aW9uLlxyXG4gICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGVhZGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aW1lb3V0Q2FsbGJhY2ssIGRlbGF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdENhbGxUaW1lID0gdGltZVN0YW1wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3h5O1xyXG59XG5cbi8vIE1pbmltdW0gZGVsYXkgYmVmb3JlIGludm9raW5nIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2ZXJzLlxyXG52YXIgUkVGUkVTSF9ERUxBWSA9IDIwO1xyXG4vLyBBIGxpc3Qgb2Ygc3Vic3RyaW5ncyBvZiBDU1MgcHJvcGVydGllcyB1c2VkIHRvIGZpbmQgdHJhbnNpdGlvbiBldmVudHMgdGhhdFxyXG4vLyBtaWdodCBhZmZlY3QgZGltZW5zaW9ucyBvZiBvYnNlcnZlZCBlbGVtZW50cy5cclxudmFyIHRyYW5zaXRpb25LZXlzID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ3NpemUnLCAnd2VpZ2h0J107XHJcbi8vIENoZWNrIGlmIE11dGF0aW9uT2JzZXJ2ZXIgaXMgYXZhaWxhYmxlLlxyXG52YXIgbXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCA9IHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcclxuLyoqXHJcbiAqIFNpbmdsZXRvbiBjb250cm9sbGVyIGNsYXNzIHdoaWNoIGhhbmRsZXMgdXBkYXRlcyBvZiBSZXNpemVPYnNlcnZlciBpbnN0YW5jZXMuXHJcbiAqL1xyXG52YXIgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgRE9NIGxpc3RlbmVycyBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUZWxscyB0aGF0IGNvbnRyb2xsZXIgaGFzIHN1YnNjcmliZWQgZm9yIE11dGF0aW9uIEV2ZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBLZWVwcyByZWZlcmVuY2UgdG8gdGhlIGluc3RhbmNlIG9mIE11dGF0aW9uT2JzZXJ2ZXIuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7TXV0YXRpb25PYnNlcnZlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBsaXN0IG9mIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7QXJyYXk8UmVzaXplT2JzZXJ2ZXJTUEk+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzXyA9IFtdO1xyXG4gICAgICAgIHRoaXMub25UcmFuc2l0aW9uRW5kXyA9IHRoaXMub25UcmFuc2l0aW9uRW5kXy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCA9IHRocm90dGxlKHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLCBSRUZSRVNIX0RFTEFZKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBvYnNlcnZlciB0byBvYnNlcnZlcnMgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyU1BJfSBvYnNlcnZlciAtIE9ic2VydmVyIHRvIGJlIGFkZGVkLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICBpZiAoIX50aGlzLm9ic2VydmVyc18uaW5kZXhPZihvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnNfLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgbGlzdGVuZXJzIGlmIHRoZXkgaGF2ZW4ndCBiZWVuIGFkZGVkIHlldC5cclxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBvYnNlcnZlciBmcm9tIG9ic2VydmVycyBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJTUEl9IG9ic2VydmVyIC0gT2JzZXJ2ZXIgdG8gYmUgcmVtb3ZlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXztcclxuICAgICAgICB2YXIgaW5kZXggPSBvYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgLy8gUmVtb3ZlIG9ic2VydmVyIGlmIGl0J3MgcHJlc2VudCBpbiByZWdpc3RyeS5cclxuICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgbGlzdGVuZXJzIGlmIGNvbnRyb2xsZXIgaGFzIG5vIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgaWYgKCFvYnNlcnZlcnMubGVuZ3RoICYmIHRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyB0aGUgdXBkYXRlIG9mIG9ic2VydmVycy4gSXQgd2lsbCBjb250aW51ZSBydW5uaW5nIHVwZGF0ZXMgaW5zb2ZhclxyXG4gICAgICogaXQgZGV0ZWN0cyBjaGFuZ2VzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNoYW5nZXNEZXRlY3RlZCA9IHRoaXMudXBkYXRlT2JzZXJ2ZXJzXygpO1xyXG4gICAgICAgIC8vIENvbnRpbnVlIHJ1bm5pbmcgdXBkYXRlcyBpZiBjaGFuZ2VzIGhhdmUgYmVlbiBkZXRlY3RlZCBhcyB0aGVyZSBtaWdodFxyXG4gICAgICAgIC8vIGJlIGZ1dHVyZSBvbmVzIGNhdXNlZCBieSBDU1MgdHJhbnNpdGlvbnMuXHJcbiAgICAgICAgaWYgKGNoYW5nZXNEZXRlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGV2ZXJ5IG9ic2VydmVyIGZyb20gb2JzZXJ2ZXJzIGxpc3QgYW5kIG5vdGlmaWVzIHRoZW0gb2YgcXVldWVkXHJcbiAgICAgKiBlbnRyaWVzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBcInRydWVcIiBpZiBhbnkgb2JzZXJ2ZXIgaGFzIGRldGVjdGVkIGNoYW5nZXMgaW5cclxuICAgICAqICAgICAgZGltZW5zaW9ucyBvZiBpdCdzIGVsZW1lbnRzLlxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnVwZGF0ZU9ic2VydmVyc18gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gQ29sbGVjdCBvYnNlcnZlcnMgdGhhdCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgdmFyIGFjdGl2ZU9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXy5maWx0ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5nYXRoZXJBY3RpdmUoKSwgb2JzZXJ2ZXIuaGFzQWN0aXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gRGVsaXZlciBub3RpZmljYXRpb25zIGluIGEgc2VwYXJhdGUgY3ljbGUgaW4gb3JkZXIgdG8gYXZvaWQgYW55XHJcbiAgICAgICAgLy8gY29sbGlzaW9ucyBiZXR3ZWVuIG9ic2VydmVycywgZS5nLiB3aGVuIG11bHRpcGxlIGluc3RhbmNlcyBvZlxyXG4gICAgICAgIC8vIFJlc2l6ZU9ic2VydmVyIGFyZSB0cmFja2luZyB0aGUgc2FtZSBlbGVtZW50IGFuZCB0aGUgY2FsbGJhY2sgb2Ygb25lXHJcbiAgICAgICAgLy8gb2YgdGhlbSBjaGFuZ2VzIGNvbnRlbnQgZGltZW5zaW9ucyBvZiB0aGUgb2JzZXJ2ZWQgdGFyZ2V0LiBTb21ldGltZXNcclxuICAgICAgICAvLyB0aGlzIG1heSByZXN1bHQgaW4gbm90aWZpY2F0aW9ucyBiZWluZyBibG9ja2VkIGZvciB0aGUgcmVzdCBvZiBvYnNlcnZlcnMuXHJcbiAgICAgICAgYWN0aXZlT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7IHJldHVybiBvYnNlcnZlci5icm9hZGNhc3RBY3RpdmUoKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZU9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgRE9NIGxpc3RlbmVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuY29ubmVjdF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBydW5uaW5nIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQgb3IgaWYgbGlzdGVuZXJzXHJcbiAgICAgICAgLy8gaGF2ZSBiZWVuIGFscmVhZHkgYWRkZWQuXHJcbiAgICAgICAgaWYgKCFpc0Jyb3dzZXIgfHwgdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3Vic2NyaXB0aW9uIHRvIHRoZSBcIlRyYW5zaXRpb25lbmRcIiBldmVudCBpcyB1c2VkIGFzIGEgd29ya2Fyb3VuZCBmb3JcclxuICAgICAgICAvLyBkZWxheWVkIHRyYW5zaXRpb25zLiBUaGlzIHdheSBpdCdzIHBvc3NpYmxlIHRvIGNhcHR1cmUgYXQgbGVhc3QgdGhlXHJcbiAgICAgICAgLy8gZmluYWwgc3RhdGUgb2YgYW4gZWxlbWVudC5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICBpZiAobXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfLm9ic2VydmUoZG9jdW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBET00gbGlzdGVuZXJzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5kaXNjb25uZWN0XyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIHJ1bm5pbmcgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudCBvciBpZiBsaXN0ZW5lcnNcclxuICAgICAgICAvLyBoYXZlIGJlZW4gYWxyZWFkeSByZW1vdmVkLlxyXG4gICAgICAgIGlmICghaXNCcm93c2VyIHx8ICF0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8pIHtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogXCJUcmFuc2l0aW9uZW5kXCIgZXZlbnQgaGFuZGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtUcmFuc2l0aW9uRXZlbnR9IGV2ZW50XHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmRfID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIF9iID0gX2EucHJvcGVydHlOYW1lLCBwcm9wZXJ0eU5hbWUgPSBfYiA9PT0gdm9pZCAwID8gJycgOiBfYjtcclxuICAgICAgICAvLyBEZXRlY3Qgd2hldGhlciB0cmFuc2l0aW9uIG1heSBhZmZlY3QgZGltZW5zaW9ucyBvZiBhbiBlbGVtZW50LlxyXG4gICAgICAgIHZhciBpc1JlZmxvd1Byb3BlcnR5ID0gdHJhbnNpdGlvbktleXMuc29tZShmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIX5wcm9wZXJ0eU5hbWUuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpc1JlZmxvd1Byb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgaW5zdGFuY2Ugb2YgdGhlIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlXykge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlXyA9IG5ldyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VfO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSG9sZHMgcmVmZXJlbmNlIHRvIHRoZSBjb250cm9sbGVyJ3MgaW5zdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGUge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmluc3RhbmNlXyA9IG51bGw7XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyO1xyXG59KCkpO1xuXG4vKipcclxuICogRGVmaW5lcyBub24td3JpdGFibGUvZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIHRoZSBwcm92aWRlZCB0YXJnZXQgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gT2JqZWN0IGZvciB3aGljaCB0byBkZWZpbmUgcHJvcGVydGllcy5cclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gUHJvcGVydGllcyB0byBiZSBkZWZpbmVkLlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUYXJnZXQgb2JqZWN0LlxyXG4gKi9cclxudmFyIGRlZmluZUNvbmZpZ3VyYWJsZSA9IChmdW5jdGlvbiAodGFyZ2V0LCBwcm9wcykge1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKHByb3BzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIga2V5ID0gX2FbX2ldO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHNba2V5XSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59KTtcblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGdsb2JhbCBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcclxuICogQHJldHVybnMge09iamVjdH1cclxuICovXHJcbnZhciBnZXRXaW5kb3dPZiA9IChmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAvLyBBc3N1bWUgdGhhdCB0aGUgZWxlbWVudCBpcyBhbiBpbnN0YW5jZSBvZiBOb2RlLCB3aGljaCBtZWFucyB0aGF0IGl0XHJcbiAgICAvLyBoYXMgdGhlIFwib3duZXJEb2N1bWVudFwiIHByb3BlcnR5IGZyb20gd2hpY2ggd2UgY2FuIHJldHJpZXZlIGFcclxuICAgIC8vIGNvcnJlc3BvbmRpbmcgZ2xvYmFsIG9iamVjdC5cclxuICAgIHZhciBvd25lckdsb2JhbCA9IHRhcmdldCAmJiB0YXJnZXQub3duZXJEb2N1bWVudCAmJiB0YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgIC8vIFJldHVybiB0aGUgbG9jYWwgZ2xvYmFsIG9iamVjdCBpZiBpdCdzIG5vdCBwb3NzaWJsZSBleHRyYWN0IG9uZSBmcm9tXHJcbiAgICAvLyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgcmV0dXJuIG93bmVyR2xvYmFsIHx8IGdsb2JhbCQxO1xyXG59KTtcblxuLy8gUGxhY2Vob2xkZXIgb2YgYW4gZW1wdHkgY29udGVudCByZWN0YW5nbGUuXHJcbnZhciBlbXB0eVJlY3QgPSBjcmVhdGVSZWN0SW5pdCgwLCAwLCAwLCAwKTtcclxuLyoqXHJcbiAqIENvbnZlcnRzIHByb3ZpZGVkIHN0cmluZyB0byBhIG51bWJlci5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIHx8IDA7XHJcbn1cclxuLyoqXHJcbiAqIEV4dHJhY3RzIGJvcmRlcnMgc2l6ZSBmcm9tIHByb3ZpZGVkIHN0eWxlcy5cclxuICpcclxuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcclxuICogQHBhcmFtIHsuLi5zdHJpbmd9IHBvc2l0aW9ucyAtIEJvcmRlcnMgcG9zaXRpb25zICh0b3AsIHJpZ2h0LCAuLi4pXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRCb3JkZXJzU2l6ZShzdHlsZXMpIHtcclxuICAgIHZhciBwb3NpdGlvbnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgcG9zaXRpb25zW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvc2l0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHNpemUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzWydib3JkZXItJyArIHBvc2l0aW9uICsgJy13aWR0aCddO1xyXG4gICAgICAgIHJldHVybiBzaXplICsgdG9GbG9hdCh2YWx1ZSk7XHJcbiAgICB9LCAwKTtcclxufVxyXG4vKipcclxuICogRXh0cmFjdHMgcGFkZGluZ3Mgc2l6ZXMgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFBhZGRpbmdzIGJveC5cclxuICovXHJcbmZ1bmN0aW9uIGdldFBhZGRpbmdzKHN0eWxlcykge1xyXG4gICAgdmFyIHBvc2l0aW9ucyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XHJcbiAgICB2YXIgcGFkZGluZ3MgPSB7fTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgcG9zaXRpb25zXzEgPSBwb3NpdGlvbnM7IF9pIDwgcG9zaXRpb25zXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gcG9zaXRpb25zXzFbX2ldO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1sncGFkZGluZy0nICsgcG9zaXRpb25dO1xyXG4gICAgICAgIHBhZGRpbmdzW3Bvc2l0aW9uXSA9IHRvRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhZGRpbmdzO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHByb3ZpZGVkIFNWRyBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NWR0dyYXBoaWNzRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkc1xyXG4gKiAgICAgIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFNWR0NvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgdmFyIGJib3ggPSB0YXJnZXQuZ2V0QkJveCgpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KDAsIDAsIGJib3gud2lkdGgsIGJib3guaGVpZ2h0KTtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBjb250ZW50IHJlY3RhbmdsZSBvZiBwcm92aWRlZCBIVE1MRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBmb3Igd2hpY2ggdG8gY2FsY3VsYXRlIHRoZSBjb250ZW50IHJlY3RhbmdsZS5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgIC8vIENsaWVudCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGNhbid0IGJlXHJcbiAgICAvLyB1c2VkIGV4Y2x1c2l2ZWx5IGFzIHRoZXkgcHJvdmlkZSByb3VuZGVkIHZhbHVlcy5cclxuICAgIHZhciBjbGllbnRXaWR0aCA9IHRhcmdldC5jbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0ID0gdGFyZ2V0LmNsaWVudEhlaWdodDtcclxuICAgIC8vIEJ5IHRoaXMgY29uZGl0aW9uIHdlIGNhbiBjYXRjaCBhbGwgbm9uLXJlcGxhY2VkIGlubGluZSwgaGlkZGVuIGFuZFxyXG4gICAgLy8gZGV0YWNoZWQgZWxlbWVudHMuIFRob3VnaCBlbGVtZW50cyB3aXRoIHdpZHRoICYgaGVpZ2h0IHByb3BlcnRpZXMgbGVzc1xyXG4gICAgLy8gdGhhbiAwLjUgd2lsbCBiZSBkaXNjYXJkZWQgYXMgd2VsbC5cclxuICAgIC8vXHJcbiAgICAvLyBXaXRob3V0IGl0IHdlIHdvdWxkIG5lZWQgdG8gaW1wbGVtZW50IHNlcGFyYXRlIG1ldGhvZHMgZm9yIGVhY2ggb2ZcclxuICAgIC8vIHRob3NlIGNhc2VzIGFuZCBpdCdzIG5vdCBwb3NzaWJsZSB0byBwZXJmb3JtIGEgcHJlY2lzZSBhbmQgcGVyZm9ybWFuY2VcclxuICAgIC8vIGVmZmVjdGl2ZSB0ZXN0IGZvciBoaWRkZW4gZWxlbWVudHMuIEUuZy4gZXZlbiBqUXVlcnkncyAnOnZpc2libGUnIGZpbHRlclxyXG4gICAgLy8gZ2l2ZXMgd3JvbmcgcmVzdWx0cyBmb3IgZWxlbWVudHMgd2l0aCB3aWR0aCAmIGhlaWdodCBsZXNzIHRoYW4gMC41LlxyXG4gICAgaWYgKCFjbGllbnRXaWR0aCAmJiAhY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcclxuICAgIH1cclxuICAgIHZhciBzdHlsZXMgPSBnZXRXaW5kb3dPZih0YXJnZXQpLmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcclxuICAgIHZhciBwYWRkaW5ncyA9IGdldFBhZGRpbmdzKHN0eWxlcyk7XHJcbiAgICB2YXIgaG9yaXpQYWQgPSBwYWRkaW5ncy5sZWZ0ICsgcGFkZGluZ3MucmlnaHQ7XHJcbiAgICB2YXIgdmVydFBhZCA9IHBhZGRpbmdzLnRvcCArIHBhZGRpbmdzLmJvdHRvbTtcclxuICAgIC8vIENvbXB1dGVkIHN0eWxlcyBvZiB3aWR0aCAmIGhlaWdodCBhcmUgYmVpbmcgdXNlZCBiZWNhdXNlIHRoZXkgYXJlIHRoZVxyXG4gICAgLy8gb25seSBkaW1lbnNpb25zIGF2YWlsYWJsZSB0byBKUyB0aGF0IGNvbnRhaW4gbm9uLXJvdW5kZWQgdmFsdWVzLiBJdCBjb3VsZFxyXG4gICAgLy8gYmUgcG9zc2libGUgdG8gdXRpbGl6ZSB0aGUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlmIG9ubHkgaXQncyBkYXRhIHdhc24ndFxyXG4gICAgLy8gYWZmZWN0ZWQgYnkgQ1NTIHRyYW5zZm9ybWF0aW9ucyBsZXQgYWxvbmUgcGFkZGluZ3MsIGJvcmRlcnMgYW5kIHNjcm9sbCBiYXJzLlxyXG4gICAgdmFyIHdpZHRoID0gdG9GbG9hdChzdHlsZXMud2lkdGgpLCBoZWlnaHQgPSB0b0Zsb2F0KHN0eWxlcy5oZWlnaHQpO1xyXG4gICAgLy8gV2lkdGggJiBoZWlnaHQgaW5jbHVkZSBwYWRkaW5ncyBhbmQgYm9yZGVycyB3aGVuIHRoZSAnYm9yZGVyLWJveCcgYm94XHJcbiAgICAvLyBtb2RlbCBpcyBhcHBsaWVkIChleGNlcHQgZm9yIElFKS5cclxuICAgIGlmIChzdHlsZXMuYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcclxuICAgICAgICAvLyBGb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgcmVxdWlyZWQgdG8gaGFuZGxlIEludGVybmV0IEV4cGxvcmVyIHdoaWNoXHJcbiAgICAgICAgLy8gZG9lc24ndCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHRvIGNvbXB1dGVkIENTUyBkaW1lbnNpb25zLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gV2UgY2FuIHNheSB0aGF0IGlmIENTUyBkaW1lbnNpb25zICsgcGFkZGluZ3MgYXJlIGVxdWFsIHRvIHRoZSBcImNsaWVudFwiXHJcbiAgICAgICAgLy8gcHJvcGVydGllcyB0aGVuIGl0J3MgZWl0aGVyIElFLCBhbmQgdGh1cyB3ZSBkb24ndCBuZWVkIHRvIHN1YnRyYWN0XHJcbiAgICAgICAgLy8gYW55dGhpbmcsIG9yIGFuIGVsZW1lbnQgbWVyZWx5IGRvZXNuJ3QgaGF2ZSBwYWRkaW5ncy9ib3JkZXJzIHN0eWxlcy5cclxuICAgICAgICBpZiAoTWF0aC5yb3VuZCh3aWR0aCArIGhvcml6UGFkKSAhPT0gY2xpZW50V2lkdGgpIHtcclxuICAgICAgICAgICAgd2lkdGggLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAnbGVmdCcsICdyaWdodCcpICsgaG9yaXpQYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpICE9PSBjbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3RvcCcsICdib3R0b20nKSArIHZlcnRQYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRm9sbG93aW5nIHN0ZXBzIGNhbid0IGJlIGFwcGxpZWQgdG8gdGhlIGRvY3VtZW50J3Mgcm9vdCBlbGVtZW50IGFzIGl0c1xyXG4gICAgLy8gY2xpZW50W1dpZHRoL0hlaWdodF0gcHJvcGVydGllcyByZXByZXNlbnQgdmlld3BvcnQgYXJlYSBvZiB0aGUgd2luZG93LlxyXG4gICAgLy8gQmVzaWRlcywgaXQncyBhcyB3ZWxsIG5vdCBuZWNlc3NhcnkgYXMgdGhlIDxodG1sPiBpdHNlbGYgbmVpdGhlciBoYXNcclxuICAgIC8vIHJlbmRlcmVkIHNjcm9sbCBiYXJzIG5vciBpdCBjYW4gYmUgY2xpcHBlZC5cclxuICAgIGlmICghaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgIC8vIEluIHNvbWUgYnJvd3NlcnMgKG9ubHkgaW4gRmlyZWZveCwgYWN0dWFsbHkpIENTUyB3aWR0aCAmIGhlaWdodFxyXG4gICAgICAgIC8vIGluY2x1ZGUgc2Nyb2xsIGJhcnMgc2l6ZSB3aGljaCBjYW4gYmUgcmVtb3ZlZCBhdCB0aGlzIHN0ZXAgYXMgc2Nyb2xsXHJcbiAgICAgICAgLy8gYmFycyBhcmUgdGhlIG9ubHkgZGlmZmVyZW5jZSBiZXR3ZWVuIHJvdW5kZWQgZGltZW5zaW9ucyArIHBhZGRpbmdzXHJcbiAgICAgICAgLy8gYW5kIFwiY2xpZW50XCIgcHJvcGVydGllcywgdGhvdWdoIHRoYXQgaXMgbm90IGFsd2F5cyB0cnVlIGluIENocm9tZS5cclxuICAgICAgICB2YXIgdmVydFNjcm9sbGJhciA9IE1hdGgucm91bmQod2lkdGggKyBob3JpelBhZCkgLSBjbGllbnRXaWR0aDtcclxuICAgICAgICB2YXIgaG9yaXpTY3JvbGxiYXIgPSBNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpIC0gY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIC8vIENocm9tZSBoYXMgYSByYXRoZXIgd2VpcmQgcm91bmRpbmcgb2YgXCJjbGllbnRcIiBwcm9wZXJ0aWVzLlxyXG4gICAgICAgIC8vIEUuZy4gZm9yIGFuIGVsZW1lbnQgd2l0aCBjb250ZW50IHdpZHRoIG9mIDMxNC4ycHggaXQgc29tZXRpbWVzIGdpdmVzXHJcbiAgICAgICAgLy8gdGhlIGNsaWVudCB3aWR0aCBvZiAzMTVweCBhbmQgZm9yIHRoZSB3aWR0aCBvZiAzMTQuN3B4IGl0IG1heSBnaXZlXHJcbiAgICAgICAgLy8gMzE0cHguIEFuZCBpdCBkb2Vzbid0IGhhcHBlbiBhbGwgdGhlIHRpbWUuIFNvIGp1c3QgaWdub3JlIHRoaXMgZGVsdGFcclxuICAgICAgICAvLyBhcyBhIG5vbi1yZWxldmFudC5cclxuICAgICAgICBpZiAoTWF0aC5hYnModmVydFNjcm9sbGJhcikgIT09IDEpIHtcclxuICAgICAgICAgICAgd2lkdGggLT0gdmVydFNjcm9sbGJhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGhvcml6U2Nyb2xsYmFyKSAhPT0gMSkge1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gaG9yaXpTY3JvbGxiYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KHBhZGRpbmdzLmxlZnQsIHBhZGRpbmdzLnRvcCwgd2lkdGgsIGhlaWdodCk7XHJcbn1cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIHByb3ZpZGVkIGVsZW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIFNWR0dyYXBoaWNzRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxudmFyIGlzU1ZHR3JhcGhpY3NFbGVtZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFNvbWUgYnJvd3NlcnMsIG5hbWVseSBJRSBhbmQgRWRnZSwgZG9uJ3QgaGF2ZSB0aGUgU1ZHR3JhcGhpY3NFbGVtZW50XHJcbiAgICAvLyBpbnRlcmZhY2UuXHJcbiAgICBpZiAodHlwZW9mIFNWR0dyYXBoaWNzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5TVkdHcmFwaGljc0VsZW1lbnQ7IH07XHJcbiAgICB9XHJcbiAgICAvLyBJZiBpdCdzIHNvLCB0aGVuIGNoZWNrIHRoYXQgZWxlbWVudCBpcyBhdCBsZWFzdCBhbiBpbnN0YW5jZSBvZiB0aGVcclxuICAgIC8vIFNWR0VsZW1lbnQgYW5kIHRoYXQgaXQgaGFzIHRoZSBcImdldEJCb3hcIiBtZXRob2QuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0cmEtcGFyZW5zXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuU1ZHRWxlbWVudCAmJlxyXG4gICAgICAgIHR5cGVvZiB0YXJnZXQuZ2V0QkJveCA9PT0gJ2Z1bmN0aW9uJyk7IH07XHJcbn0pKCk7XHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBlbGVtZW50IGlzIGEgZG9jdW1lbnQgZWxlbWVudCAoPGh0bWw+KS5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSB7XHJcbiAgICByZXR1cm4gdGFyZ2V0ID09PSBnZXRXaW5kb3dPZih0YXJnZXQpLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBhbiBhcHByb3ByaWF0ZSBjb250ZW50IHJlY3RhbmdsZSBmb3IgcHJvdmlkZWQgaHRtbCBvciBzdmcgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHdoaWNoIG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldENvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4gZW1wdHlSZWN0O1xyXG4gICAgfVxyXG4gICAgaWYgKGlzU1ZHR3JhcGhpY3NFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U1ZHQ29udGVudFJlY3QodGFyZ2V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudENvbnRlbnRSZWN0KHRhcmdldCk7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZXMgcmVjdGFuZ2xlIHdpdGggYW4gaW50ZXJmYWNlIG9mIHRoZSBET01SZWN0UmVhZE9ubHkuXHJcbiAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkb21yZWN0cmVhZG9ubHlcclxuICpcclxuICogQHBhcmFtIHtET01SZWN0SW5pdH0gcmVjdEluaXQgLSBPYmplY3Qgd2l0aCByZWN0YW5nbGUncyB4L3kgY29vcmRpbmF0ZXMgYW5kIGRpbWVuc2lvbnMuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0UmVhZE9ubHl9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVSZWFkT25seVJlY3QoX2EpIHtcclxuICAgIHZhciB4ID0gX2EueCwgeSA9IF9hLnksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcclxuICAgIC8vIElmIERPTVJlY3RSZWFkT25seSBpcyBhdmFpbGFibGUgdXNlIGl0IGFzIGEgcHJvdG90eXBlIGZvciB0aGUgcmVjdGFuZ2xlLlxyXG4gICAgdmFyIENvbnN0ciA9IHR5cGVvZiBET01SZWN0UmVhZE9ubHkgIT09ICd1bmRlZmluZWQnID8gRE9NUmVjdFJlYWRPbmx5IDogT2JqZWN0O1xyXG4gICAgdmFyIHJlY3QgPSBPYmplY3QuY3JlYXRlKENvbnN0ci5wcm90b3R5cGUpO1xyXG4gICAgLy8gUmVjdGFuZ2xlJ3MgcHJvcGVydGllcyBhcmUgbm90IHdyaXRhYmxlIGFuZCBub24tZW51bWVyYWJsZS5cclxuICAgIGRlZmluZUNvbmZpZ3VyYWJsZShyZWN0LCB7XHJcbiAgICAgICAgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICB0b3A6IHksXHJcbiAgICAgICAgcmlnaHQ6IHggKyB3aWR0aCxcclxuICAgICAgICBib3R0b206IGhlaWdodCArIHksXHJcbiAgICAgICAgbGVmdDogeFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVjdDtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBET01SZWN0SW5pdCBvYmplY3QgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGRpbWVuc2lvbnMgYW5kIHRoZSB4L3kgY29vcmRpbmF0ZXMuXHJcbiAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkaWN0ZGVmLWRvbXJlY3Rpbml0XHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gWCBjb29yZGluYXRlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geSAtIFkgY29vcmRpbmF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gUmVjdGFuZ2xlJ3Mgd2lkdGguXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBSZWN0YW5nbGUncyBoZWlnaHQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlY3RJbml0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcclxufVxuXG4vKipcclxuICogQ2xhc3MgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgY29tcHV0YXRpb25zIG9mIHRoZSBjb250ZW50IHJlY3RhbmdsZSBvZlxyXG4gKiBwcm92aWRlZCBET00gZWxlbWVudCBhbmQgZm9yIGtlZXBpbmcgdHJhY2sgb2YgaXQncyBjaGFuZ2VzLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnJvYWRjYXN0ZWQgd2lkdGggb2YgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0V2lkdGggPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJyb2FkY2FzdGVkIGhlaWdodCBvZiBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtET01SZWN0SW5pdH1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IGNyZWF0ZVJlY3RJbml0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIGFuZCB0ZWxscyB3aGV0aGVyIGl0J3Mgd2lkdGggb3IgaGVpZ2h0IHByb3BlcnRpZXNcclxuICAgICAqIGhhdmUgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCBicm9hZGNhc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IGdldENvbnRlbnRSZWN0KHRoaXMudGFyZ2V0KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IHJlY3Q7XHJcbiAgICAgICAgcmV0dXJuIChyZWN0LndpZHRoICE9PSB0aGlzLmJyb2FkY2FzdFdpZHRoIHx8XHJcbiAgICAgICAgICAgIHJlY3QuaGVpZ2h0ICE9PSB0aGlzLmJyb2FkY2FzdEhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzICdicm9hZGNhc3RXaWR0aCcgYW5kICdicm9hZGNhc3RIZWlnaHQnIHByb3BlcnRpZXMgd2l0aCBhIGRhdGFcclxuICAgICAqIGZyb20gdGhlIGNvcnJlc3BvbmRpbmcgcHJvcGVydGllcyBvZiB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9IExhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5icm9hZGNhc3RSZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5jb250ZW50UmVjdF87XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RXaWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgICAgICByZXR1cm4gcmVjdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2YXRpb247XHJcbn0oKSk7XG5cbnZhciBSZXNpemVPYnNlcnZlckVudHJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyRW50cnkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRoYXQgaXMgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgKiBAcGFyYW0ge0RPTVJlY3RJbml0fSByZWN0SW5pdCAtIERhdGEgb2YgdGhlIGVsZW1lbnQncyBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJFbnRyeSh0YXJnZXQsIHJlY3RJbml0KSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRSZWN0ID0gY3JlYXRlUmVhZE9ubHlSZWN0KHJlY3RJbml0KTtcclxuICAgICAgICAvLyBBY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIG5vdCB3cml0YWJsZVxyXG4gICAgICAgIC8vIGFuZCBhcmUgYWxzbyBub3QgZW51bWVyYWJsZSBpbiB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUHJvcGVydHkgYWNjZXNzb3JzIGFyZSBub3QgYmVpbmcgdXNlZCBhcyB0aGV5J2QgcmVxdWlyZSB0byBkZWZpbmUgYVxyXG4gICAgICAgIC8vIHByaXZhdGUgV2Vha01hcCBzdG9yYWdlIHdoaWNoIG1heSBjYXVzZSBtZW1vcnkgbGVha3MgaW4gYnJvd3NlcnMgdGhhdFxyXG4gICAgICAgIC8vIGRvbid0IHN1cHBvcnQgdGhpcyB0eXBlIG9mIGNvbGxlY3Rpb25zLlxyXG4gICAgICAgIGRlZmluZUNvbmZpZ3VyYWJsZSh0aGlzLCB7IHRhcmdldDogdGFyZ2V0LCBjb250ZW50UmVjdDogY29udGVudFJlY3QgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJFbnRyeTtcclxufSgpKTtcblxudmFyIFJlc2l6ZU9ic2VydmVyU1BJID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWRcclxuICAgICAqICAgICAgd2hlbiBvbmUgb2YgdGhlIG9ic2VydmVkIGVsZW1lbnRzIGNoYW5nZXMgaXQncyBjb250ZW50IGRpbWVuc2lvbnMuXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn0gY29udHJvbGxlciAtIENvbnRyb2xsZXIgaW5zdGFuY2Ugd2hpY2hcclxuICAgICAqICAgICAgaXMgcmVzcG9uc2libGUgZm9yIHRoZSB1cGRhdGVzIG9mIG9ic2VydmVyLlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlcn0gY2FsbGJhY2tDdHggLSBSZWZlcmVuY2UgdG8gdGhlIHB1YmxpY1xyXG4gICAgICogICAgICBSZXNpemVPYnNlcnZlciBpbnN0YW5jZSB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJTUEkoY2FsbGJhY2ssIGNvbnRyb2xsZXIsIGNhbGxiYWNrQ3R4KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29sbGVjdGlvbiBvZiByZXNpemUgb2JzZXJ2YXRpb25zIHRoYXQgaGF2ZSBkZXRlY3RlZCBjaGFuZ2VzIGluIGRpbWVuc2lvbnNcclxuICAgICAgICAgKiBvZiBlbGVtZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtBcnJheTxSZXNpemVPYnNlcnZhdGlvbj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVnaXN0cnkgb2YgdGhlIFJlc2l6ZU9ic2VydmF0aW9uIGluc3RhbmNlcy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtNYXA8RWxlbWVudCwgUmVzaXplT2JzZXJ2YXRpb24+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXyA9IG5ldyBNYXBTaGltKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2FsbGJhY2sgcHJvdmlkZWQgYXMgcGFyYW1ldGVyIDEgaXMgbm90IGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXyA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja0N0eF8gPSBjYWxsYmFja0N0eDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIG9ic2VydmluZyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgIGlmIChvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZhdGlvbnMuc2V0KHRhcmdldCwgbmV3IFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCkpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8uYWRkT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgLy8gRm9yY2UgdGhlIHVwZGF0ZSBvZiBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBvYnNlcnZpbmcgcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gc3RvcCBvYnNlcnZpbmcuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBub3QgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZhdGlvbnMuZGVsZXRlKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIG9ic2VydmluZyBhbGwgZWxlbWVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18uY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ29sbGVjdHMgb2JzZXJ2YXRpb24gaW5zdGFuY2VzIHRoZSBhc3NvY2lhdGVkIGVsZW1lbnQgb2Ygd2hpY2ggaGFzIGNoYW5nZWRcclxuICAgICAqIGl0J3MgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5nYXRoZXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZhdGlvbi5pc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnB1c2gob2JzZXJ2YXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VzIGluaXRpYWwgY2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhIGxpc3Qgb2YgUmVzaXplT2JzZXJ2ZXJFbnRyeVxyXG4gICAgICogaW5zdGFuY2VzIGNvbGxlY3RlZCBmcm9tIGFjdGl2ZSByZXNpemUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuYnJvYWRjYXN0QWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgb2JzZXJ2ZXIgZG9lc24ndCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuY2FsbGJhY2tDdHhfO1xyXG4gICAgICAgIC8vIENyZWF0ZSBSZXNpemVPYnNlcnZlckVudHJ5IGluc3RhbmNlIGZvciBldmVyeSBhY3RpdmUgb2JzZXJ2YXRpb24uXHJcbiAgICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubWFwKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob2JzZXJ2YXRpb24udGFyZ2V0LCBvYnNlcnZhdGlvbi5icm9hZGNhc3RSZWN0KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfLmNhbGwoY3R4LCBlbnRyaWVzLCBjdHgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENsZWFycyB0aGUgY29sbGVjdGlvbiBvZiBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuY2xlYXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnNwbGljZSgwKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRlbGxzIHdoZXRoZXIgb2JzZXJ2ZXIgaGFzIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5oYXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlclNQSTtcclxufSgpKTtcblxuLy8gUmVnaXN0cnkgb2YgaW50ZXJuYWwgb2JzZXJ2ZXJzLiBJZiBXZWFrTWFwIGlzIG5vdCBhdmFpbGFibGUgdXNlIGN1cnJlbnQgc2hpbVxyXG4vLyBmb3IgdGhlIE1hcCBjb2xsZWN0aW9uIGFzIGl0IGhhcyBhbGwgcmVxdWlyZWQgbWV0aG9kcyBhbmQgYmVjYXVzZSBXZWFrTWFwXHJcbi8vIGNhbid0IGJlIGZ1bGx5IHBvbHlmaWxsZWQgYW55d2F5LlxyXG52YXIgb2JzZXJ2ZXJzID0gdHlwZW9mIFdlYWtNYXAgIT09ICd1bmRlZmluZWQnID8gbmV3IFdlYWtNYXAoKSA6IG5ldyBNYXBTaGltKCk7XHJcbi8qKlxyXG4gKiBSZXNpemVPYnNlcnZlciBBUEkuIEVuY2Fwc3VsYXRlcyB0aGUgUmVzaXplT2JzZXJ2ZXIgU1BJIGltcGxlbWVudGF0aW9uXHJcbiAqIGV4cG9zaW5nIG9ubHkgdGhvc2UgbWV0aG9kcyBhbmQgcHJvcGVydGllcyB0aGF0IGFyZSBkZWZpbmVkIGluIHRoZSBzcGVjLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlblxyXG4gICAgICogICAgICBkaW1lbnNpb25zIG9mIHRoZSBvYnNlcnZlZCBlbGVtZW50cyBjaGFuZ2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc2l6ZU9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb250cm9sbGVyID0gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyU1BJKGNhbGxiYWNrLCBjb250cm9sbGVyLCB0aGlzKTtcclxuICAgICAgICBvYnNlcnZlcnMuc2V0KHRoaXMsIG9ic2VydmVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcclxufSgpKTtcclxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG5bXHJcbiAgICAnb2JzZXJ2ZScsXHJcbiAgICAndW5vYnNlcnZlJyxcclxuICAgICdkaXNjb25uZWN0J1xyXG5dLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xyXG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiAoX2EgPSBvYnNlcnZlcnMuZ2V0KHRoaXMpKVttZXRob2RdLmFwcGx5KF9hLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufSk7XG5cbnZhciBpbmRleCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBFeHBvcnQgZXhpc3RpbmcgaW1wbGVtZW50YXRpb24gaWYgYXZhaWxhYmxlLlxyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwkMS5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsJDEuUmVzaXplT2JzZXJ2ZXI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XHJcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiPCEtLVxyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBHYW50dEVsYXN0aWMgY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY1wiIHN0eWxlPVwid2lkdGg6MTAwJVwiPlxyXG4gICAgPHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD5cclxuICAgIDxtYWluLXZpZXcgcmVmPVwibWFpblZpZXdcIj48L21haW4tdmlldz5cclxuICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIj48L3Nsb3Q+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgVnVlSW5zdGFuY2UgZnJvbSAndnVlJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IE1haW5WaWV3IGZyb20gJy4vY29tcG9uZW50cy9NYWluVmlldy52dWUnO1xyXG5pbXBvcnQgZ2V0U3R5bGUgZnJvbSAnLi9zdHlsZS5qcyc7XHJcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnO1xyXG5cclxuY29uc3QgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcclxubGV0IFZ1ZUluc3QgPSBWdWVJbnN0YW5jZTtcclxuZnVuY3Rpb24gaW5pdFZ1ZSgpIHtcclxuICBpZiAodHlwZW9mIFZ1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFZ1ZUluc3QgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBWdWVJbnN0ID0gVnVlO1xyXG4gIH1cclxufVxyXG5pbml0VnVlKCk7XHJcblxyXG5sZXQgaG91cldpZHRoQ2FjaGUgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBmaWxsIG91dCBlbXB0eSBvcHRpb25zIGluIHVzZXIgc2V0dGluZ3NcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHVzZXJPcHRpb25zIC0gaW5pdGlhbCB1c2VyIG9wdGlvbnMgdGhhdCB3aWxsIG1lcmdlIHdpdGggdGhvc2UgYmVsb3dcclxuICogQHJldHVybnMge29iamVjdH0gbWVyZ2VkIG9wdGlvbnNcclxuICovXHJcbmZ1bmN0aW9uIGdldE9wdGlvbnModXNlck9wdGlvbnMpIHtcclxuICBsZXQgbG9jYWxlTmFtZSA9ICdlbic7XHJcbiAgaWYgKHR5cGVvZiB1c2VyT3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB1c2VyT3B0aW9ucy5sb2NhbGUubmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGxvY2FsZU5hbWUgPSB1c2VyT3B0aW9ucy5sb2NhbGUubmFtZTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHNsb3RzOiB7XHJcbiAgICAgIGhlYWRlcjoge31cclxuICAgIH0sXHJcbiAgICB0YXNrTWFwcGluZzoge1xyXG4gICAgICAvLypcclxuICAgICAgaWQ6ICdpZCcsXHJcbiAgICAgIHN0YXJ0OiAnc3RhcnQnLFxyXG4gICAgICBsYWJlbDogJ2xhYmVsJyxcclxuICAgICAgZHVyYXRpb246ICdkdXJhdGlvbicsXHJcbiAgICAgIHByb2dyZXNzOiAncHJvZ3Jlc3MnLFxyXG4gICAgICB0eXBlOiAndHlwZScsXHJcbiAgICAgIHN0eWxlOiAnc3R5bGUnLFxyXG4gICAgICBjb2xsYXBzZWQ6ICdjb2xsYXBzZWQnXHJcbiAgICB9LFxyXG4gICAgd2lkdGg6IDAsXHJcbiAgICBoZWlnaHQ6IDAsXHJcbiAgICBjbGllbnRXaWR0aDogMCxcclxuICAgIG91dGVySGVpZ2h0OiAwLFxyXG4gICAgcm93c0hlaWdodDogMCxcclxuICAgIGFsbFZpc2libGVUYXNrc0hlaWdodDogMCxcclxuICAgIHNjcm9sbDoge1xyXG4gICAgICBzY3JvbGxpbmc6IGZhbHNlLFxyXG4gICAgICBkcmFnWE1vdmVNdWx0aXBsaWVyOiAzLCAvLypcclxuICAgICAgZHJhZ1lNb3ZlTXVsdGlwbGllcjogMiwgLy8qXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgdGFza0xpc3Q6IHtcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBib3R0b206IDBcclxuICAgICAgfSxcclxuICAgICAgY2hhcnQ6IHtcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHBlcmNlbnQ6IDAsXHJcbiAgICAgICAgdGltZVBlcmNlbnQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICB0aW1lOiAwLFxyXG4gICAgICAgIHRpbWVDZW50ZXI6IDAsXHJcbiAgICAgICAgZGF0ZVRpbWU6IHtcclxuICAgICAgICAgIGxlZnQ6ICcnLFxyXG4gICAgICAgICAgcmlnaHQ6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2NvcGU6IHtcclxuICAgICAgLy8qXHJcbiAgICAgIGJlZm9yZTogMSxcclxuICAgICAgYWZ0ZXI6IDFcclxuICAgIH0sXHJcbiAgICB0aW1lczoge1xyXG4gICAgICB0aW1lU2NhbGU6IDYwICogMTAwMCxcclxuICAgICAgdGltZVpvb206IDE3LCAvLypcclxuICAgICAgdGltZVBlclBpeGVsOiAwLFxyXG4gICAgICBmaXJzdFRpbWU6IG51bGwsXHJcbiAgICAgIGxhc3RUaW1lOiBudWxsLFxyXG4gICAgICBmaXJzdFRhc2tUaW1lOiAwLFxyXG4gICAgICBsYXN0VGFza1RpbWU6IDAsXHJcbiAgICAgIHRvdGFsVmlld0R1cmF0aW9uTXM6IDAsXHJcbiAgICAgIHRvdGFsVmlld0R1cmF0aW9uUHg6IDAsXHJcbiAgICAgIHN0ZXBEdXJhdGlvbjogJ2RheScsXHJcbiAgICAgIHN0ZXBzOiBbXVxyXG4gICAgfSxcclxuICAgIHJvdzoge1xyXG4gICAgICBoZWlnaHQ6IDI0IC8vKlxyXG4gICAgfSxcclxuICAgIG1heFJvd3M6IDIwLCAvLypcclxuICAgIG1heEhlaWdodDogMCwgLy8qXHJcbiAgICBjaGFydDoge1xyXG4gICAgICBncmlkOiB7XHJcbiAgICAgICAgaG9yaXpvbnRhbDoge1xyXG4gICAgICAgICAgZ2FwOiA2IC8vKlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcHJvZ3Jlc3M6IHtcclxuICAgICAgICB3aWR0aDogMjAsIC8vKlxyXG4gICAgICAgIGhlaWdodDogNiwgLy8qXHJcbiAgICAgICAgcGF0dGVybjogdHJ1ZSxcclxuICAgICAgICBiYXI6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHRleHQ6IHtcclxuICAgICAgICBvZmZzZXQ6IDQsIC8vKlxyXG4gICAgICAgIHhQYWRkaW5nOiAxMCwgLy8qXHJcbiAgICAgICAgZGlzcGxheTogdHJ1ZSAvLypcclxuICAgICAgfSxcclxuICAgICAgZXhwYW5kZXI6IHtcclxuICAgICAgICB0eXBlOiAnY2hhcnQnLFxyXG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLCAvLypcclxuICAgICAgICBkaXNwbGF5SWZUYXNrTGlzdEhpZGRlbjogdHJ1ZSwgLy8qXHJcbiAgICAgICAgb2Zmc2V0OiA0LCAvLypcclxuICAgICAgICBzaXplOiAxOFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGFza0xpc3Q6IHtcclxuICAgICAgZGlzcGxheTogdHJ1ZSwgLy8qXHJcbiAgICAgIHJlc2l6ZUFmdGVyVGhyZXNob2xkOiB0cnVlLCAvLypcclxuICAgICAgd2lkdGhUaHJlc2hvbGQ6IDc1LCAvLypcclxuICAgICAgY29sdW1uczogW1xyXG4gICAgICAgIC8vKlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgbGFiZWw6ICdJRCcsXHJcbiAgICAgICAgICB2YWx1ZTogJ2lkJyxcclxuICAgICAgICAgIHdpZHRoOiA0MFxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgcGVyY2VudDogMTAwLCAvLypcclxuICAgICAgd2lkdGg6IDAsXHJcbiAgICAgIGZpbmFsV2lkdGg6IDAsXHJcbiAgICAgIHdpZHRoRnJvbVBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgIG1pbldpZHRoOiAxOCxcclxuICAgICAgZXhwYW5kZXI6IHtcclxuICAgICAgICB0eXBlOiAndGFzay1saXN0JyxcclxuICAgICAgICBzaXplOiAxNixcclxuICAgICAgICBjb2x1bW5XaWR0aDogMjQsXHJcbiAgICAgICAgcGFkZGluZzogMTYsXHJcbiAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICBzdHJhaWdodDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNhbGVuZGFyOiB7XHJcbiAgICAgIHdvcmtpbmdEYXlzOiBbMSwgMiwgMywgNCwgNV0sIC8vKlxyXG4gICAgICBnYXA6IDYsIC8vKlxyXG4gICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgIHN0cm9rZVdpZHRoOiAxLFxyXG4gICAgICBob3VyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCwgLy8qXHJcbiAgICAgICAgZGlzcGxheTogdHJ1ZSwgLy8qXHJcbiAgICAgICAgd2lkdGhzOiBbXSxcclxuICAgICAgICBtYXhXaWR0aHM6IHsgc2hvcnQ6IDAsIG1lZGl1bTogMCwgbG9uZzogMCB9LFxyXG4gICAgICAgIGZvcm1hdHRlZDoge1xyXG4gICAgICAgICAgbG9uZzogW10sXHJcbiAgICAgICAgICBtZWRpdW06IFtdLFxyXG4gICAgICAgICAgc2hvcnQ6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb3JtYXQ6IHtcclxuICAgICAgICAgIC8vKlxyXG4gICAgICAgICAgbG9uZyhkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdCgnSEg6bW0nKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZWRpdW0oZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoJ0hIOm1tJyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2hvcnQoZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoJ0hIJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBkYXk6IHtcclxuICAgICAgICBoZWlnaHQ6IDIwLCAvLypcclxuICAgICAgICBkaXNwbGF5OiB0cnVlLCAvLypcclxuICAgICAgICB3aWR0aHM6IFtdLFxyXG4gICAgICAgIG1heFdpZHRoczogeyBzaG9ydDogMCwgbWVkaXVtOiAwLCBsb25nOiAwIH0sXHJcbiAgICAgICAgZm9ybWF0OiB7XHJcbiAgICAgICAgICBsb25nKGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KCdERCBkZGRkJyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWVkaXVtKGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KCdERCBkZGQnKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzaG9ydChkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdCgnREQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vbnRoOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCwgLy8qXHJcbiAgICAgICAgZGlzcGxheTogdHJ1ZSwgLy8qXHJcbiAgICAgICAgd2lkdGhzOiBbXSxcclxuICAgICAgICBtYXhXaWR0aHM6IHsgc2hvcnQ6IDAsIG1lZGl1bTogMCwgbG9uZzogMCB9LFxyXG4gICAgICAgIGZvcm1hdDoge1xyXG4gICAgICAgICAgLy8qXHJcbiAgICAgICAgICBzaG9ydChkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdCgnTU0nKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZWRpdW0oZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoXCJNTU0gJ1lZXCIpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxvbmcoZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoJ01NTU0gWVlZWScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxvY2FsZToge1xyXG4gICAgICAvLypcclxuICAgICAgbmFtZTogJ2VuJyxcclxuICAgICAgd2Vla2RheXM6ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoJ18nKSxcclxuICAgICAgd2Vla2RheXNTaG9ydDogJ1N1bl9Nb25fVHVlX1dlZF9UaHVfRnJpX1NhdCcuc3BsaXQoJ18nKSxcclxuICAgICAgd2Vla2RheXNNaW46ICdTdV9Nb19UdV9XZV9UaF9Gcl9TYScuc3BsaXQoJ18nKSxcclxuICAgICAgbW9udGhzOiAnSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoJ18nKSxcclxuICAgICAgbW9udGhzU2hvcnQ6ICdKYW5fRmViX01hcl9BcHJfTWF5X0p1bl9KdWxfQXVnX1NlcF9PY3RfTm92X0RlYycuc3BsaXQoJ18nKSxcclxuICAgICAgd2Vla1N0YXJ0OiAxLFxyXG4gICAgICByZWxhdGl2ZVRpbWU6IHtcclxuICAgICAgICBmdXR1cmU6ICdpbiAlcycsXHJcbiAgICAgICAgcGFzdDogJyVzIGFnbycsXHJcbiAgICAgICAgczogJ2EgZmV3IHNlY29uZHMnLFxyXG4gICAgICAgIG06ICdhIG1pbnV0ZScsXHJcbiAgICAgICAgbW06ICclZCBtaW51dGVzJyxcclxuICAgICAgICBoOiAnYW4gaG91cicsXHJcbiAgICAgICAgaGg6ICclZCBob3VycycsXHJcbiAgICAgICAgZDogJ2EgZGF5JyxcclxuICAgICAgICBkZDogJyVkIGRheXMnLFxyXG4gICAgICAgIE06ICdhIG1vbnRoJyxcclxuICAgICAgICBNTTogJyVkIG1vbnRocycsXHJcbiAgICAgICAgeTogJ2EgeWVhcicsXHJcbiAgICAgICAgeXk6ICclZCB5ZWFycydcclxuICAgICAgfSxcclxuICAgICAgZm9ybWF0czoge1xyXG4gICAgICAgIExUOiAnSEg6bW0nLFxyXG4gICAgICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgICAgICBMOiAnREQvTU0vWVlZWScsXHJcbiAgICAgICAgTEw6ICdEIE1NTU0gWVlZWScsXHJcbiAgICAgICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxyXG4gICAgICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcclxuICAgICAgfSxcclxuICAgICAgb3JkaW5hbDogbiA9PiB7XHJcbiAgICAgICAgY29uc3QgcyA9IFsndGgnLCAnc3QnLCAnbmQnLCAncmQnXTtcclxuICAgICAgICBjb25zdCB2ID0gbiAlIDEwMDtcclxuICAgICAgICByZXR1cm4gYFske259JHtzWyh2IC0gMjApICUgMTBdIHx8IHNbdl0gfHwgc1swXX1dYDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcmVwYXJlIHN0eWxlXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9XHJcbiAqL1xyXG5mdW5jdGlvbiBwcmVwYXJlU3R5bGUodXNlclN0eWxlKSB7XHJcbiAgbGV0IGZvbnRTaXplID0gJzEycHgnO1xyXG4gIGxldCBmb250RmFtaWx5ID0gd2luZG93XHJcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KVxyXG4gICAgLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtZmFtaWx5JylcclxuICAgIC50b1N0cmluZygpO1xyXG4gIGlmICh0eXBlb2YgdXNlclN0eWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgaWYgKHR5cGVvZiB1c2VyU3R5bGUuZm9udFNpemUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGZvbnRTaXplID0gdXNlck9wdGlvbnMuZm9udFNpemU7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHVzZXJTdHlsZS5mb250RmFtaWx5ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBmb250RmFtaWx5ID0gdXNlclN0eWxlLmZvbnRGYW1pbHk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBnZXRTdHlsZShmb250U2l6ZSwgZm9udEZhbWlseSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHNwZWNpZmllZCB2YXJpYWJsZSBpcyBhbiBvYmplY3RcclxuICpcclxuICogQHBhcmFtIHthbnl9IGl0ZW1cclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc09iamVjdChpdGVtKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIGl0ZW0gJiZcclxuICAgIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJlxyXG4gICAgIUFycmF5LmlzQXJyYXkoaXRlbSkgJiZcclxuICAgICEoaXRlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSAmJlxyXG4gICAgIShpdGVtIGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSAmJlxyXG4gICAgdHlwZW9mIGl0ZW0gIT09ICdmdW5jdGlvbidcclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHdoaWNoIHdpbGwgbWVyZ2Ugb2JqZWN0cyByZWN1cnNpdmVseSAtIGNyZWF0aW5nIGJyYW5kIG5ldyBvbmUgLSBsaWtlIGNsb25lXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcclxuICogQHBhcmFtcyB7b2JqZWN0fSBzb3VyY2VzXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcykge1xyXG4gIGlmICghc291cmNlcy5sZW5ndGgpIHtcclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfVxyXG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcclxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YXJnZXRba2V5XSA9IG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xyXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlW2tleV0pKSB7XHJcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHNvdXJjZVtrZXldKSB7XHJcbiAgICAgICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0ucHVzaChtZXJnZURlZXAoe30sIGl0ZW0pKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YXJnZXRba2V5XS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVjdCBpZiBvYmplY3Qgb3IgYXJyYXkgaXMgb2JzZXJ2YWJsZVxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdHxhcnJheX0gb2JqXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNPYnNlcnZhYmxlKG9iaikge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouaGFzT3duUHJvcGVydHkoJ19fb2JfXycpO1xyXG59XHJcblxyXG4vKipcclxuICogU2FtZSBhcyBhYm92ZSBidXQgd2l0aCByZWFjdGl2aXR5IGluIG1pbmRcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxyXG4gKiBAcGFyYW1zIHtvYmplY3R9IHNvdXJjZXNcclxuICpcclxuICogQHJldHVybnMge29iamVjdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXBSZWFjdGl2ZShjb21wb25lbnQsIHRhcmdldCwgLi4uc291cmNlcykge1xyXG4gIGlmICghc291cmNlcy5sZW5ndGgpIHtcclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfVxyXG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcclxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICBjb21wb25lbnQuJHNldCh0YXJnZXQsIGtleSwge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXJnZURlZXBSZWFjdGl2ZShjb21wb25lbnQsIHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2Vba2V5XSkpIHtcclxuICAgICAgICBjb21wb25lbnQuJHNldCh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzb3VyY2Vba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGlmIChzb3VyY2Vba2V5XS50b1N0cmluZygpLmluZGV4T2YoJ1tuYXRpdmUgY29kZV0nKSA9PT0gLTEpIHtcclxuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbXBvbmVudC4kc2V0KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG1lcmdlRGVlcFJlYWN0aXZlKGNvbXBvbmVudCwgdGFyZ2V0LCAuLi5zb3VyY2VzKTtcclxufVxyXG4vKipcclxuICogQ2hlY2sgaWYgb2JqZWN0cyBvciBhcnJheXMgYXJlIGVxdWFsIGJ5IGNvbXBhcmluZyBuZXN0ZWQgdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSBsZWZ0XHJcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSByaWdodFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RFcXVhbERlZXAobGVmdCwgcmlnaHQsIGNhY2hlID0gW10sIHBhdGggPSAnJykge1xyXG4gIGlmICh0eXBlb2YgcmlnaHQgIT09IHR5cGVvZiBsZWZ0KSB7XHJcbiAgICByZXR1cm4geyBsZWZ0LCByaWdodCwgd2hhdDogcGF0aCArICcudHlwZW9mJyB9O1xyXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShsZWZ0KSAmJiAhQXJyYXkuaXNBcnJheShyaWdodCkpIHtcclxuICAgIHJldHVybiB7IGxlZnQsIHJpZ2h0LCB3aGF0OiBwYXRoICsgJy5pc0FycmF5JyB9O1xyXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyaWdodCkgJiYgIUFycmF5LmlzQXJyYXkobGVmdCkpIHtcclxuICAgIHJldHVybiB7IGxlZnQsIHJpZ2h0LCB3aGF0OiBwYXRoICsgJy5pc0FycmF5JyB9O1xyXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShsZWZ0KSAmJiBBcnJheS5pc0FycmF5KHJpZ2h0KSkge1xyXG4gICAgaWYgKGxlZnQubGVuZ3RoICE9PSByaWdodC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6IHBhdGggKyAnLmxlbmd0aCcgfTtcclxuICAgIH1cclxuICAgIGxldCB3aGF0O1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwLCBsZW4gPSBsZWZ0Lmxlbmd0aDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcclxuICAgICAgaWYgKCh3aGF0ID0gbm90RXF1YWxEZWVwKGxlZnRbaW5kZXhdLCByaWdodFtpbmRleF0sIGNhY2hlLCBwYXRoICsgJy4nICsgaW5kZXgpKSkge1xyXG4gICAgICAgIHJldHVybiB3aGF0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChpc09iamVjdChsZWZ0KSAmJiAhaXNPYmplY3QocmlnaHQpKSB7XHJcbiAgICByZXR1cm4geyBsZWZ0LCByaWdodCwgd2hhdDogcGF0aCArICcuaXNPYmplY3QnIH07XHJcbiAgfSBlbHNlIGlmIChpc09iamVjdChyaWdodCkgJiYgIWlzT2JqZWN0KGxlZnQpKSB7XHJcbiAgICByZXR1cm4geyBsZWZ0LCByaWdodCwgd2hhdDogcGF0aCArICcuaXNPYmplY3QnIH07XHJcbiAgfSBlbHNlIGlmIChpc09iamVjdChsZWZ0KSAmJiBpc09iamVjdChyaWdodCkpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiBsZWZ0KSB7XHJcbiAgICAgIGlmICghbGVmdC5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8ICFsZWZ0LnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXJpZ2h0Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICByZXR1cm4geyBsZWZ0LCByaWdodCwgd2hhdDogcGF0aCArICcuJyArIGtleSB9O1xyXG4gICAgICB9XHJcbiAgICAgIGxldCB3aGF0O1xyXG4gICAgICBpZiAoKHdoYXQgPSBub3RFcXVhbERlZXAobGVmdFtrZXldLCByaWdodFtrZXldLCBjYWNoZSwgcGF0aCArICcuJyArIGtleSkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHdoYXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGxlZnQgIT09IHJpZ2h0KSB7XHJcbiAgICByZXR1cm4geyBsZWZ0LCByaWdodCwgd2hhdDogcGF0aCArICcuICE9PScgfTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogR2FudHRFbGFzdGljXHJcbiAqIE1haW4gdnVlIGNvbXBvbmVudFxyXG4gKi9cclxuY29uc3QgR2FudHRFbGFzdGljID0ge1xyXG4gIG5hbWU6ICdHYW50dEVsYXN0aWMnLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIE1haW5WaWV3XHJcbiAgfSxcclxuICBwcm9wczogWyd0YXNrcycsICdvcHRpb25zJywgJ2R5bmFtaWNTdHlsZSddLFxyXG4gIHByb3ZpZGUoKSB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IHt9O1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdmlkZXIsICdyb290Jywge1xyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICBnZXQ6ICgpID0+IHNlbGZcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHByb3ZpZGVyO1xyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXRlOiB7XHJcbiAgICAgICAgdGFza3M6IFtdLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIHNjcm9sbEJhckhlaWdodDogMCxcclxuICAgICAgICAgIGFsbFZpc2libGVUYXNrc0hlaWdodDogMCxcclxuICAgICAgICAgIG91dGVySGVpZ2h0OiAwLFxyXG4gICAgICAgICAgc2Nyb2xsOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHRvcDogMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHluYW1pY1N0eWxlOiB7fSxcclxuICAgICAgICByZWZzOiB7fSxcclxuICAgICAgICB0YXNrc0J5SWQ6IHt9LFxyXG4gICAgICAgIHRhc2tUcmVlOiB7fSxcclxuICAgICAgICBjdHgsXHJcbiAgICAgICAgZW1pdFRhc2tzQ2hhbmdlczogdHJ1ZSwgLy8gc29tZSBvcGVyYXRpb25zIG1heSBwYXVzZSBlbWl0dGluZyBjaGFuZ2VzIHRvIHBhcmVudCBjb21wb25lbnRcclxuICAgICAgICBlbWl0T3B0aW9uc0NoYW5nZXM6IHRydWUsIC8vIHNvbWUgb3BlcmF0aW9ucyBtYXkgcGF1c2UgZW1pdHRpbmcgY2hhbmdlcyB0byBwYXJlbnQgY29tcG9uZW50XHJcbiAgICAgICAgcmVzaXplT2JzZXJ2ZXI6IG51bGwsXHJcbiAgICAgICAgdW53YXRjaFRhc2tzOiBudWxsLFxyXG4gICAgICAgIHVud2F0Y2hPcHRpb25zOiBudWxsLFxyXG4gICAgICAgIHVud2F0Y2hTdHlsZTogbnVsbCxcclxuICAgICAgICB1bndhdGNoT3V0cHV0VGFza3M6IG51bGwsXHJcbiAgICAgICAgdW53YXRjaE91dHB1dE9wdGlvbnM6IG51bGwsXHJcbiAgICAgICAgdW53YXRjaE91dHB1dFN0eWxlOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBtZXJnZURlZXAsXHJcbiAgICBtZXJnZURlZXBSZWFjdGl2ZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSBoZWlnaHQgb2Ygc2Nyb2xsYmFyIGluIGN1cnJlbnQgYnJvd3NlclxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGdldFNjcm9sbEJhckhlaWdodCgpIHtcclxuICAgICAgY29uc3Qgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgb3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICBvdXRlci5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xyXG4gICAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSAnc2Nyb2xsYmFyJztcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XHJcbiAgICAgIHZhciBub1Njcm9sbCA9IG91dGVyLm9mZnNldEhlaWdodDtcclxuICAgICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcclxuICAgICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGlubmVyLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xyXG4gICAgICB2YXIgd2l0aFNjcm9sbCA9IGlubmVyLm9mZnNldEhlaWdodDtcclxuICAgICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IG5vU2Nyb2xsIC0gd2l0aFNjcm9sbDtcclxuICAgICAgdGhpcy5zdHlsZVsnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0tdmVydGljYWwnXVsnbWFyZ2luLWxlZnQnXSA9IGAtJHtoZWlnaHR9cHhgO1xyXG4gICAgICByZXR1cm4gKHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGxCYXJIZWlnaHQgPSBoZWlnaHQpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbGwgb3V0IGVtcHR5IHRhc2sgcHJvcGVydGllcyBhbmQgbWFrZSBpdCByZWFjdGl2ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHRhc2tzXHJcbiAgICAgKi9cclxuICAgIGZpbGxUYXNrcyh0YXNrcykge1xyXG4gICAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLnggPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICB0YXNrLnggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRhc2sueSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHRhc2sueSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGFzay53aWR0aCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHRhc2sud2lkdGggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRhc2suaGVpZ2h0ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGFzay5oZWlnaHQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRhc2subW91c2VPdmVyID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGFzay5tb3VzZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLmNvbGxhcHNlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHRhc2suY29sbGFwc2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5kZXBlbmRlbnRPbiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHRhc2suZGVwZW5kZW50T24gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLnBhcmVudElkID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGFzay5wYXJlbnRJZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5zdHlsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHRhc2suc3R5bGUgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLmNoaWxkcmVuID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGFzay5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRhc2suYWxsQ2hpbGRyZW4gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICB0YXNrLmFsbENoaWxkcmVuID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5wYXJlbnRzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGFzay5wYXJlbnRzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5wYXJlbnQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICB0YXNrLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5zdGFydFRpbWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICB0YXNrLnN0YXJ0VGltZSA9IGRheWpzKHRhc2suc3RhcnQpLnZhbHVlT2YoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLmVuZFRpbWUgPT09ICd1bmRlZmluZWQnICYmIHRhc2suaGFzT3duUHJvcGVydHkoJ2VuZCcpKSB7XHJcbiAgICAgICAgICB0YXNrLmVuZFRpbWUgPSBkYXlqcyh0YXNrLmVuZCkudmFsdWVPZigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRhc2suZW5kVGltZSA9PT0gJ3VuZGVmaW5lZCcgJiYgdGFzay5oYXNPd25Qcm9wZXJ0eSgnZHVyYXRpb24nKSkge1xyXG4gICAgICAgICAgdGFzay5lbmRUaW1lID0gdGFzay5zdGFydFRpbWUgKyB0YXNrLmR1cmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRhc2suZHVyYXRpb24gPT09ICd1bmRlZmluZWQnICYmIHRhc2suaGFzT3duUHJvcGVydHkoJ2VuZFRpbWUnKSkge1xyXG4gICAgICAgICAgdGFzay5kdXJhdGlvbiA9IHRhc2suZW5kVGltZSAtIHRhc2suc3RhcnRUaW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGFza3M7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwIHRhc2tzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gdGFza3NcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIG1hcFRhc2tzKHRhc2tzLCBvcHRpb25zKSB7XHJcbiAgICAgIGZvciAobGV0IFtpbmRleCwgdGFza10gb2YgdGFza3MuZW50cmllcygpKSB7XHJcbiAgICAgICAgdGFza3NbaW5kZXhdID0ge1xyXG4gICAgICAgICAgLi4udGFzayxcclxuICAgICAgICAgIGlkOiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcuaWRdLFxyXG4gICAgICAgICAgc3RhcnQ6IHRhc2tbb3B0aW9ucy50YXNrTWFwcGluZy5zdGFydF0sXHJcbiAgICAgICAgICBsYWJlbDogdGFza1tvcHRpb25zLnRhc2tNYXBwaW5nLmxhYmVsXSxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcuZHVyYXRpb25dLFxyXG4gICAgICAgICAgcHJvZ3Jlc3M6IHRhc2tbb3B0aW9ucy50YXNrTWFwcGluZy5wcm9ncmVzc10sXHJcbiAgICAgICAgICB0eXBlOiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcudHlwZV0sXHJcbiAgICAgICAgICBzdHlsZTogdGFza1tvcHRpb25zLnRhc2tNYXBwaW5nLnN0eWxlXSxcclxuICAgICAgICAgIGNvbGxhcHNlZDogdGFza1tvcHRpb25zLnRhc2tNYXBwaW5nLmNvbGxhcHNlZF1cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0YXNrcztcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBpbml0aWFsaXplKGl0c1VwZGF0ZSA9ICcnKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0gbWVyZ2VEZWVwKHt9LCB0aGlzLnN0YXRlLm9wdGlvbnMsIGdldE9wdGlvbnModGhpcy5vcHRpb25zKSwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgbGV0IHRhc2tzID0gdGhpcy5tYXBUYXNrcyh0aGlzLnRhc2tzLCBvcHRpb25zKTtcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZHluYW1pY1N0eWxlKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVTdHlsZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGRheWpzLmxvY2FsZShvcHRpb25zLmxvY2FsZSwgbnVsbCwgdHJ1ZSk7XHJcbiAgICAgIGRheWpzLmxvY2FsZShvcHRpb25zLmxvY2FsZS5uYW1lKTtcclxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRhc2tMaXN0ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIG9wdGlvbnMudGFza0xpc3QgPSB7fTtcclxuICAgICAgfVxyXG4gICAgICBvcHRpb25zLnRhc2tMaXN0LmNvbHVtbnMgPSBvcHRpb25zLnRhc2tMaXN0LmNvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29sdW1uLnRocmVzaG9sZFBlcmNlbnQgPSAxMDA7XHJcbiAgICAgICAgY29sdW1uLndpZHRoRnJvbVBlcmNlbnRhZ2UgPSAwO1xyXG4gICAgICAgIGNvbHVtbi5maW5hbFdpZHRoID0gMDtcclxuICAgICAgICBpZiAodHlwZW9mIGNvbHVtbi5oZWlnaHQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICBjb2x1bW4uaGVpZ2h0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb2x1bW4uc3R5bGUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICBjb2x1bW4uc3R5bGUgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29sdW1uLl9pZCA9IGAke2luZGV4fS0ke2NvbHVtbi5sYWJlbH1gO1xyXG4gICAgICAgIHJldHVybiBjb2x1bW47XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICB0YXNrcyA9IHRoaXMuZmlsbFRhc2tzKHRhc2tzKTtcclxuICAgICAgdGhpcy5zdGF0ZS50YXNrc0J5SWQgPSB0aGlzLnJlc2V0VGFza1RyZWUodGFza3MpO1xyXG4gICAgICB0aGlzLnN0YXRlLnRhc2tUcmVlID0gdGhpcy5tYWtlVGFza1RyZWUodGhpcy5zdGF0ZS5yb290VGFzaywgdGFza3MpO1xyXG4gICAgICB0aGlzLnN0YXRlLnRhc2tzID0gdGhpcy5zdGF0ZS50YXNrVHJlZS5hbGxDaGlsZHJlbi5tYXAoY2hpbGRJZCA9PiB0aGlzLmdldFRhc2soY2hpbGRJZCkpO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVRhc2tMaXN0Q29sdW1uc0RpbWVuc2lvbnMoKTtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbEJhckhlaWdodCA9IHRoaXMuZ2V0U2Nyb2xsQmFySGVpZ2h0KCk7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5vdXRlckhlaWdodCA9IHRoaXMuc3RhdGUub3B0aW9ucy5oZWlnaHQgKyB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsQmFySGVpZ2h0O1xyXG4gICAgICB0aGlzLmdsb2JhbE9uUmVzaXplKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSBzdHlsZVxyXG4gICAgICovXHJcbiAgICBpbml0aWFsaXplU3R5bGUoKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuZHluYW1pY1N0eWxlID0gbWVyZ2VEZWVwKHt9LCBwcmVwYXJlU3R5bGUodGhpcy5keW5hbWljU3R5bGUpLCB0aGlzLmR5bmFtaWNTdHlsZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNhbGVuZGFyIHJvd3Mgb3V0ZXIgaGVpZ2h0XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2ludH1cclxuICAgICAqL1xyXG4gICAgZ2V0Q2FsZW5kYXJIZWlnaHQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaGVpZ2h0ICsgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLnN0cm9rZVdpZHRoO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBtYXhpbWFsIGxldmVsIG9mIG5lc3RlZCB0YXNrIGNoaWxkcmVuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2ludH1cclxuICAgICAqL1xyXG4gICAgZ2V0TWF4aW1hbExldmVsKCkge1xyXG4gICAgICBsZXQgbWF4aW1hbExldmVsID0gMDtcclxuICAgICAgdGhpcy5zdGF0ZS50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIGlmICh0YXNrLnBhcmVudHMubGVuZ3RoID4gbWF4aW1hbExldmVsKSB7XHJcbiAgICAgICAgICBtYXhpbWFsTGV2ZWwgPSB0YXNrLnBhcmVudHMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBtYXhpbWFsTGV2ZWwgLSAxO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBtYXhpbWFsIGV4cGFuZGVyIHdpZHRoIC0gdG8gY2FsY3VsYXRlIHN0cmFpZ2h0IHRhc2sgbGlzdCB0ZXh0XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2ludH1cclxuICAgICAqL1xyXG4gICAgZ2V0TWF4aW1hbEV4cGFuZGVyV2lkdGgoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgdGhpcy5nZXRNYXhpbWFsTGV2ZWwoKSAqIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlci5wYWRkaW5nICtcclxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZXhwYW5kZXIubWFyZ2luXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3luY2hyb25pemUgc2Nyb2xsVG9wIHByb3BlcnR5IHdoZW4gcm93IGhlaWdodCBpcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIHN5bmNTY3JvbGxUb3AoKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLnN0YXRlLnJlZnMudGFza0xpc3RJdGVtcyAmJlxyXG4gICAgICAgIHRoaXMuc3RhdGUucmVmcy5jaGFydEdyYXBoLnNjcm9sbFRvcCAhPT0gdGhpcy5zdGF0ZS5yZWZzLnRhc2tMaXN0SXRlbXMuc2Nyb2xsVG9wXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwudG9wID0gdGhpcy5zdGF0ZS5yZWZzLnRhc2tMaXN0SXRlbXMuc2Nyb2xsVG9wID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVyVmVydGljYWwuc2Nyb2xsVG9wID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0R3JhcGguc2Nyb2xsVG9wO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlIHRhc2sgbGlzdCBjb2x1bW5zIGRpbWVuc2lvbnNcclxuICAgICAqL1xyXG4gICAgY2FsY3VsYXRlVGFza0xpc3RDb2x1bW5zRGltZW5zaW9ucygpIHtcclxuICAgICAgbGV0IGZpbmFsID0gMDtcclxuICAgICAgbGV0IHBlcmNlbnRhZ2UgPSAwO1xyXG4gICAgICBmb3IgKGxldCBjb2x1bW4gb2YgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmNvbHVtbnMpIHtcclxuICAgICAgICBpZiAoY29sdW1uLmV4cGFuZGVyKSB7XHJcbiAgICAgICAgICBjb2x1bW4ud2lkdGhGcm9tUGVyY2VudGFnZSA9XHJcbiAgICAgICAgICAgICgodGhpcy5nZXRNYXhpbWFsRXhwYW5kZXJXaWR0aCgpICsgY29sdW1uLndpZHRoKSAvIDEwMCkgKiB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QucGVyY2VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29sdW1uLndpZHRoRnJvbVBlcmNlbnRhZ2UgPSAoY29sdW1uLndpZHRoIC8gMTAwKSAqIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5wZXJjZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwZXJjZW50YWdlICs9IGNvbHVtbi53aWR0aEZyb21QZXJjZW50YWdlO1xyXG4gICAgICAgIGNvbHVtbi5maW5hbFdpZHRoID0gKGNvbHVtbi50aHJlc2hvbGRQZXJjZW50ICogY29sdW1uLndpZHRoRnJvbVBlcmNlbnRhZ2UpIC8gMTAwO1xyXG4gICAgICAgIGZpbmFsICs9IGNvbHVtbi5maW5hbFdpZHRoO1xyXG4gICAgICAgIGNvbHVtbi5oZWlnaHQgPSB0aGlzLmdldFRhc2tIZWlnaHQoKSAtIHRoaXMuc3R5bGVbJ2dyaWQtbGluZS1ob3Jpem9udGFsJ11bJ3N0cm9rZS13aWR0aCddO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC53aWR0aEZyb21QZXJjZW50YWdlID0gcGVyY2VudGFnZTtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmZpbmFsV2lkdGggPSBmaW5hbDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB0YXNrIHRyZWUgLSB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSB0cmVlIGxpa2Ugc3RydWN0dXJlIGluc2lkZSB0YXNrIGxpc3RcclxuICAgICAqL1xyXG4gICAgcmVzZXRUYXNrVHJlZSh0YXNrcykge1xyXG4gICAgICB0aGlzLiRzZXQodGhpcy5zdGF0ZSwgJ3Jvb3RUYXNrJywge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIGxhYmVsOiAncm9vdCcsXHJcbiAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIGFsbENoaWxkcmVuOiBbXSxcclxuICAgICAgICBwYXJlbnRzOiBbXSxcclxuICAgICAgICBwYXJlbnQ6IG51bGwsXHJcbiAgICAgICAgX19yb290OiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB0YXNrc0J5SWQgPSB7fTtcclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRhc2tzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0YXNrc1tpXTtcclxuICAgICAgICBjdXJyZW50LmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgY3VycmVudC5hbGxDaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIGN1cnJlbnQucGFyZW50ID0gbnVsbDtcclxuICAgICAgICBjdXJyZW50LnBhcmVudHMgPSBbXTtcclxuICAgICAgICB0YXNrc0J5SWRbY3VycmVudC5pZF0gPSBjdXJyZW50O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0YXNrc0J5SWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFrZSB0YXNrIHRyZWUsIGFmdGVyIHJlc2V0IC0gbG9vayBhYm92ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXNrXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSB0YXNrcyB3aXRoIGNoaWxkcmVuIGFuZCBwYXJlbnRzXHJcbiAgICAgKi9cclxuICAgIG1ha2VUYXNrVHJlZSh0YXNrLCB0YXNrcykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGFza3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBsZXQgY3VycmVudCA9IHRhc2tzW2ldO1xyXG4gICAgICAgIGlmIChjdXJyZW50LnBhcmVudElkID09PSB0YXNrLmlkKSB7XHJcbiAgICAgICAgICBpZiAodGFzay5wYXJlbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0YXNrLnBhcmVudHMuZm9yRWFjaChwYXJlbnQgPT4gY3VycmVudC5wYXJlbnRzLnB1c2gocGFyZW50KSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIXRhc2sucHJvcGVydHlJc0VudW1lcmFibGUoJ19fcm9vdCcpKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQucGFyZW50cy5wdXNoKHRhc2suaWQpO1xyXG4gICAgICAgICAgICBjdXJyZW50LnBhcmVudCA9IHRhc2suaWQ7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdXJyZW50LnBhcmVudHMgPSBbXTtcclxuICAgICAgICAgICAgY3VycmVudC5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY3VycmVudCA9IHRoaXMubWFrZVRhc2tUcmVlKGN1cnJlbnQsIHRhc2tzKTtcclxuICAgICAgICAgIHRhc2suYWxsQ2hpbGRyZW4ucHVzaChjdXJyZW50LmlkKTtcclxuICAgICAgICAgIHRhc2suY2hpbGRyZW4ucHVzaChjdXJyZW50LmlkKTtcclxuICAgICAgICAgIGN1cnJlbnQuYWxsQ2hpbGRyZW4uZm9yRWFjaChjaGlsZElkID0+IHRhc2suYWxsQ2hpbGRyZW4ucHVzaChjaGlsZElkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0YXNrO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0YXNrIGJ5IGlkXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHthbnl9IHRhc2tJZFxyXG4gICAgICogQHJldHVybnMge29iamVjdHxudWxsfSB0YXNrXHJcbiAgICAgKi9cclxuICAgIGdldFRhc2sodGFza0lkKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZS50YXNrc0J5SWRbdGFza0lkXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS50YXNrc0J5SWRbdGFza0lkXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY2hpbGRyZW4gdGFza3MgZm9yIHNwZWNpZmllZCB0YXNrSWRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gdGFza0lkXHJcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9IGNoaWxkcmVuXHJcbiAgICAgKi9cclxuICAgIGdldENoaWxkcmVuKHRhc2tJZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnBhcmVudCA9PT0gdGFza0lkKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0YXNrIHZpc2libGVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8VGFza30gdGFza1xyXG4gICAgICovXHJcbiAgICBpc1Rhc2tWaXNpYmxlKHRhc2spIHtcclxuICAgICAgaWYgKHR5cGVvZiB0YXNrID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdGFzayA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0YXNrID0gdGhpcy5nZXRUYXNrKHRhc2spO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0YXNrLnBhcmVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRUYXNrKHRhc2sucGFyZW50c1tpXSkuY29sbGFwc2VkKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBzdmdcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBodG1sIHN2ZyBpbWFnZSBvZiBnYW50dFxyXG4gICAgICovXHJcbiAgICBnZXRTVkcoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLm9wdGlvbnMubWFpblZpZXcub3V0ZXJIVE1MO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBpbWFnZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIGltYWdlIGZvcm1hdFxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9IHdoZW4gcmVzb2x2ZWQgcmV0dXJucyBiYXNlNjQgaW1hZ2Ugc3RyaW5nIG9mIGdhbnR0XHJcbiAgICAgKi9cclxuICAgIGdldEltYWdlKHR5cGUgPSAnaW1hZ2UvcG5nJykge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5zdGF0ZS5vcHRpb25zLm1haW5WaWV3LmNsaWVudFdpZHRoO1xyXG4gICAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuc3RhdGUub3B0aW9ucy5yb3dzSGVpZ2h0O1xyXG4gICAgICAgICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKGltZywgMCwgMCk7XHJcbiAgICAgICAgICByZXNvbHZlKGNhbnZhcy50b0RhdGFVUkwodHlwZSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW1nLnNyYyA9ICdkYXRhOmltYWdlL3N2Zyt4bWwsJyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmdldFNWRygpKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGdhbnR0IHRvdGFsIGhlaWdodFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGdldEhlaWdodCh2aXNpYmxlVGFza3MsIG91dGVyID0gZmFsc2UpIHtcclxuICAgICAgbGV0IGhlaWdodCA9XHJcbiAgICAgICAgdmlzaWJsZVRhc2tzLmxlbmd0aCAqICh0aGlzLnN0YXRlLm9wdGlvbnMucm93LmhlaWdodCArIHRoaXMuc3RhdGUub3B0aW9ucy5jaGFydC5ncmlkLmhvcml6b250YWwuZ2FwICogMikgK1xyXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHQgK1xyXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5zdHJva2VXaWR0aCArXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmdhcDtcclxuICAgICAgaWYgKG91dGVyKSB7XHJcbiAgICAgICAgaGVpZ2h0ICs9IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGxCYXJIZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhlaWdodDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgb25lIHRhc2sgaGVpZ2h0XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0VGFza0hlaWdodCh3aXRoU3Ryb2tlID0gZmFsc2UpIHtcclxuICAgICAgaWYgKHdpdGhTdHJva2UpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgK1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNoYXJ0LmdyaWQuaG9yaXpvbnRhbC5nYXAgKiAyICtcclxuICAgICAgICAgIHRoaXMuc3R5bGVbJ2dyaWQtbGluZS1ob3Jpem9udGFsJ11bJ3N0cm9rZS13aWR0aCddXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgKyB0aGlzLnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDI7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHNwZWNpZmllZCB0YXNrcyBoZWlnaHRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXRUYXNrc0hlaWdodCh2aXNpYmxlVGFza3MpIHtcclxuICAgICAgcmV0dXJuIHZpc2libGVUYXNrcy5sZW5ndGggKiB0aGlzLmdldFRhc2tIZWlnaHQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRpbWUgKGluIG1pbGxpc2Vjb25kcykgdG8gcGl4ZWwgb2Zmc2V0IGluc2lkZSBjaGFydFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7aW50fSBtc1xyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGltZVRvUGl4ZWxPZmZzZXRYKG1zKSB7XHJcbiAgICAgIGxldCB4ID0gbXMgLSB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lO1xyXG4gICAgICBpZiAoeCkge1xyXG4gICAgICAgIHggPSB4IC8gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVQZXJQaXhlbDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHBpeGVsIG9mZnNldCBpbnNpZGUgY2hhcnQgdG8gY29ycmVzcG9uZGluZyB0aW1lIG9mZnNldCBpbiBtaWxsaXNlY29uZHNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxPZmZzZXRYXHJcbiAgICAgKiBAcmV0dXJucyB7aW50fSBtaWxsaXNlY29uZHNcclxuICAgICAqL1xyXG4gICAgcGl4ZWxPZmZzZXRYVG9UaW1lKHBpeGVsT2Zmc2V0WCkge1xyXG4gICAgICBsZXQgb2Zmc2V0ID0gcGl4ZWxPZmZzZXRYICsgdGhpcy5zdHlsZVsnZ3JpZC1saW5lLXZlcnRpY2FsJ11bJ3N0cm9rZS13aWR0aCddIC8gMjtcclxuICAgICAgcmV0dXJuIG9mZnNldCAqIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50aW1lUGVyUGl4ZWwgKyB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZSBpZiBlbGVtZW50IGlzIGluc2lkZSBjdXJyZW50IHZpZXcgcG9ydFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gZWxlbWVudCBwbGFjZW1lbnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIGVsZW1lbnQgd2lkdGhcclxuICAgICAqIEBwYXJhbSB7aW50fSBidWZmZXIgLSBvciB0aHJlc2hvbGQsIGlmIGVsZW1lbnQgaXMgb3V0c2lkZSB2aWV3cG9ydCBidXQgb2Zmc2V0IGZyb20gdmlldyBwb3J0IGlzIGJlbG93IHRoaXMgdmFsdWUgcmV0dXJuIHRydWVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBpc0luc2lkZVZpZXdQb3J0KHgsIHdpZHRoLCBidWZmZXIgPSA1MDAwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgKHggKyB3aWR0aCArIGJ1ZmZlciA+PSB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LmxlZnQgJiZcclxuICAgICAgICAgIHggLSBidWZmZXIgPD0gdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC5yaWdodCkgfHxcclxuICAgICAgICAoeCAtIGJ1ZmZlciA8PSB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LmxlZnQgJiZcclxuICAgICAgICAgIHggKyB3aWR0aCArIGJ1ZmZlciA+PSB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnJpZ2h0KVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYXJ0IHNjcm9sbCBldmVudCBoYW5kbGVyXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtldmVudH0gZXZcclxuICAgICAqL1xyXG4gICAgb25TY3JvbGxDaGFydChldikge1xyXG4gICAgICB0aGlzLl9vblNjcm9sbENoYXJ0KFxyXG4gICAgICAgIHRoaXMuc3RhdGUucmVmcy5jaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWwuc2Nyb2xsTGVmdCxcclxuICAgICAgICB0aGlzLnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJWZXJ0aWNhbC5zY3JvbGxUb3BcclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBzYW1lIGFzIGFib3ZlIGJ1dCB3aXRoIGRpZmZlcmVudCBhcmd1bWVudHMgLSBub3JtYWxpemVkXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlZnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0b3BcclxuICAgICAqL1xyXG4gICAgX29uU2Nyb2xsQ2hhcnQobGVmdCwgdG9wKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LmxlZnQgPT09IGxlZnQgJiYgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC50b3AgPT09IHRvcCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBjaGFydENvbnRhaW5lcldpZHRoID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0Q29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LmxlZnQgPSBsZWZ0O1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnJpZ2h0ID0gbGVmdCArIGNoYXJ0Q29udGFpbmVyV2lkdGg7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQucGVyY2VudCA9IChsZWZ0IC8gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRvdGFsVmlld0R1cmF0aW9uUHgpICogMTAwO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnRvcCA9IHRvcDtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC50aW1lID0gdGhpcy5waXhlbE9mZnNldFhUb1RpbWUobGVmdCk7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQudGltZUNlbnRlciA9IHRoaXMucGl4ZWxPZmZzZXRYVG9UaW1lKGxlZnQgKyBjaGFydENvbnRhaW5lcldpZHRoIC8gMik7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQuZGF0ZVRpbWUubGVmdCA9IGRheWpzKHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQudGltZSkudmFsdWVPZigpO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LmRhdGVUaW1lLnJpZ2h0ID0gZGF5anMoXHJcbiAgICAgICAgdGhpcy5waXhlbE9mZnNldFhUb1RpbWUobGVmdCArIHRoaXMuc3RhdGUucmVmcy5jaGFydC5jbGllbnRXaWR0aClcclxuICAgICAgKS52YWx1ZU9mKCk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG8obGVmdCwgdG9wKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTY3JvbGwgY3VycmVudCBjaGFydCB0byBzcGVjaWZpZWQgdGltZSAoaW4gbWlsbGlzZWNvbmRzKVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7aW50fSB0aW1lXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbFRvVGltZSh0aW1lKSB7XHJcbiAgICAgIGxldCBwb3MgPSB0aGlzLnRpbWVUb1BpeGVsT2Zmc2V0WCh0aW1lKTtcclxuICAgICAgY29uc3QgY2hhcnRDb250YWluZXJXaWR0aCA9IHRoaXMuc3RhdGUucmVmcy5jaGFydENvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuICAgICAgcG9zID0gcG9zIC0gY2hhcnRDb250YWluZXJXaWR0aCAvIDI7XHJcbiAgICAgIGlmIChwb3MgPiB0aGlzLnN0YXRlLm9wdGlvbnMud2lkdGgpIHtcclxuICAgICAgICBwb3MgPSB0aGlzLnN0YXRlLm9wdGlvbnMud2lkdGggLSBjaGFydENvbnRhaW5lcldpZHRoO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG8ocG9zKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTY3JvbGwgY2hhcnQgb3IgdGFzayBsaXN0IHRvIHNwZWNpZmllZCBwaXhlbCB2YWx1ZXNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcnxudWxsfSBsZWZ0XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcnxudWxsfSB0b3BcclxuICAgICAqL1xyXG4gICAgc2Nyb2xsVG8obGVmdCA9IG51bGwsIHRvcCA9IG51bGwpIHtcclxuICAgICAgaWYgKGxlZnQgIT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnJlZnMuY2hhcnRDYWxlbmRhckNvbnRhaW5lci5zY3JvbGxMZWZ0ID0gbGVmdDtcclxuICAgICAgICB0aGlzLnN0YXRlLnJlZnMuY2hhcnRHcmFwaENvbnRhaW5lci5zY3JvbGxMZWZ0ID0gbGVmdDtcclxuICAgICAgICB0aGlzLnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsLnNjcm9sbExlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwubGVmdCA9IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRvcCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUucmVmcy5jaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsLnNjcm9sbFRvcCA9IHRvcDtcclxuICAgICAgICB0aGlzLnN0YXRlLnJlZnMuY2hhcnRHcmFwaC5zY3JvbGxUb3AgPSB0b3A7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWZzLnRhc2tMaXN0SXRlbXMuc2Nyb2xsVG9wID0gdG9wO1xyXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwudG9wID0gdG9wO1xyXG4gICAgICAgIHRoaXMuc3luY1Njcm9sbFRvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgc29tZSBhY3Rpb25zIGxpa2UgdGltZSB6b29tIGNoYW5nZSB3ZSBuZWVkIHRvIHJlY29tcGVuc2F0ZSBzY3JvbGwgcG9zaXRpb25cclxuICAgICAqIHNvIGFzIGEgcmVzdWx0IGV2ZXJ5dGhpbmcgd2lsbCBiZSBpbiBzYW1lIHBsYWNlXHJcbiAgICAgKi9cclxuICAgIGZpeFNjcm9sbFBvcygpIHtcclxuICAgICAgdGhpcy5zY3JvbGxUb1RpbWUodGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC50aW1lQ2VudGVyKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNb3VzZSB3aGVlbCBldmVudCBoYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIG9uV2hlZWxDaGFydChldikge1xyXG4gICAgICBpZiAoIWV2LnNoaWZ0S2V5ICYmIGV2LmRlbHRhWCA9PT0gMCkge1xyXG4gICAgICAgIGxldCB0b3AgPSB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLnRvcCArIGV2LmRlbHRhWTtcclxuICAgICAgICBjb25zdCBjaGFydENsaWVudEhlaWdodCA9IHRoaXMuc3RhdGUub3B0aW9ucy5yb3dzSGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHRoaXMuc3RhdGUucmVmcy5jaGFydEdyYXBoLnNjcm9sbEhlaWdodCAtIGNoYXJ0Q2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGlmICh0b3AgPCAwKSB7XHJcbiAgICAgICAgICB0b3AgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodG9wID4gc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICB0b3AgPSBzY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8obnVsbCwgdG9wKTtcclxuICAgICAgfSBlbHNlIGlmIChldi5zaGlmdEtleSAmJiBldi5kZWx0YVggPT09IDApIHtcclxuICAgICAgICBsZXQgbGVmdCA9IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwubGVmdCArIGV2LmRlbHRhWTtcclxuICAgICAgICBjb25zdCBjaGFydENsaWVudFdpZHRoID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbC5jbGllbnRXaWR0aDtcclxuICAgICAgICBjb25zdCBzY3JvbGxXaWR0aCA9IHRoaXMuc3RhdGUucmVmcy5jaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWwuc2Nyb2xsV2lkdGggLSBjaGFydENsaWVudFdpZHRoO1xyXG4gICAgICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICAgICAgbGVmdCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsZWZ0ID4gc2Nyb2xsV2lkdGgpIHtcclxuICAgICAgICAgIGxlZnQgPSBzY3JvbGxXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUbyhsZWZ0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgbGVmdCA9IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwubGVmdCArIGV2LmRlbHRhWDtcclxuICAgICAgICBjb25zdCBjaGFydENsaWVudFdpZHRoID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbC5jbGllbnRXaWR0aDtcclxuICAgICAgICBjb25zdCBzY3JvbGxXaWR0aCA9IHRoaXMuc3RhdGUucmVmcy5jaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWwuc2Nyb2xsV2lkdGggLSBjaGFydENsaWVudFdpZHRoO1xyXG4gICAgICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICAgICAgbGVmdCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsZWZ0ID4gc2Nyb2xsV2lkdGgpIHtcclxuICAgICAgICAgIGxlZnQgPSBzY3JvbGxXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUbyhsZWZ0KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRpbWUgem9vbSBjaGFuZ2UgZXZlbnQgaGFuZGxlclxyXG4gICAgICovXHJcbiAgICBvblRpbWVab29tQ2hhbmdlKHRpbWVab29tKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50aW1lWm9vbSA9IHRpbWVab29tO1xyXG4gICAgICB0aGlzLnJlY2FsY3VsYXRlVGltZXMoKTtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVTdGVwcygpO1xyXG4gICAgICB0aGlzLmZpeFNjcm9sbFBvcygpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJvdyBoZWlnaHQgY2hhbmdlIGV2ZW50IGhhbmRsZXJcclxuICAgICAqL1xyXG4gICAgb25Sb3dIZWlnaHRDaGFuZ2UoaGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVRhc2tMaXN0Q29sdW1uc0RpbWVuc2lvbnMoKTtcclxuICAgICAgdGhpcy5zeW5jU2Nyb2xsVG9wKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2NvcGUgY2hhbmdlIGV2ZW50IGhhbmRsZXJcclxuICAgICAqL1xyXG4gICAgb25TY29wZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2NvcGUuYmVmb3JlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY29wZS5hZnRlciA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmluaXRUaW1lcygpO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVN0ZXBzKCk7XHJcbiAgICAgIHRoaXMuY29tcHV0ZUNhbGVuZGFyV2lkdGhzKCk7XHJcbiAgICAgIHRoaXMuZml4U2Nyb2xsUG9zKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGFzayBsaXN0IHdpZHRoIGNoYW5nZSBldmVudCBoYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIG9uVGFza0xpc3RXaWR0aENoYW5nZSh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QucGVyY2VudCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVRhc2tMaXN0Q29sdW1uc0RpbWVuc2lvbnMoKTtcclxuICAgICAgdGhpcy5maXhTY3JvbGxQb3MoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUYXNrIGxpc3QgY29sdW1uIHdpZHRoIGNoYW5nZSBldmVudCBoYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIG9uVGFza0xpc3RDb2x1bW5XaWR0aENoYW5nZSgpIHtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCk7XHJcbiAgICAgIHRoaXMuZml4U2Nyb2xsUG9zKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIHRvIHNwZWNpZmllZCBldmVudCBuYW1lc1xyXG4gICAgICovXHJcbiAgICBpbml0aWFsaXplRXZlbnRzKCkge1xyXG4gICAgICB0aGlzLiRvbignY2hhcnQtc2Nyb2xsLWhvcml6b250YWwnLCB0aGlzLm9uU2Nyb2xsQ2hhcnQpO1xyXG4gICAgICB0aGlzLiRvbignY2hhcnQtc2Nyb2xsLXZlcnRpY2FsJywgdGhpcy5vblNjcm9sbENoYXJ0KTtcclxuICAgICAgdGhpcy4kb24oJ2NoYXJ0LXdoZWVsJywgdGhpcy5vbldoZWVsQ2hhcnQpO1xyXG4gICAgICB0aGlzLiRvbigndGltZXMtdGltZVpvb20tY2hhbmdlJywgdGhpcy5vblRpbWVab29tQ2hhbmdlKTtcclxuICAgICAgdGhpcy4kb24oJ3Jvdy1oZWlnaHQtY2hhbmdlJywgdGhpcy5vblJvd0hlaWdodENoYW5nZSk7XHJcbiAgICAgIHRoaXMuJG9uKCdzY29wZS1jaGFuZ2UnLCB0aGlzLm9uU2NvcGVDaGFuZ2UpO1xyXG4gICAgICB0aGlzLiRvbigndGFza0xpc3Qtd2lkdGgtY2hhbmdlJywgdGhpcy5vblRhc2tMaXN0V2lkdGhDaGFuZ2UpO1xyXG4gICAgICB0aGlzLiRvbigndGFza0xpc3QtY29sdW1uLXdpZHRoLWNoYW5nZScsIHRoaXMub25UYXNrTGlzdENvbHVtbldpZHRoQ2hhbmdlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHNvbWUgYWN0aW9uIHdhcyBwZXJmb3JtZWQgKHNjYWxlIGNoYW5nZSBmb3IgZXhhbXBsZSkgLSByZWNhbGN1bGF0ZSB0aW1lIHZhcmlhYmxlc1xyXG4gICAgICovXHJcbiAgICByZWNhbGN1bGF0ZVRpbWVzKCkge1xyXG4gICAgICBsZXQgbWF4ID0gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVTY2FsZSAqIDYwO1xyXG4gICAgICBsZXQgbWluID0gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVTY2FsZTtcclxuICAgICAgbGV0IHN0ZXBzID0gbWF4IC8gbWluO1xyXG4gICAgICBsZXQgcGVyY2VudCA9IHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50aW1lWm9vbSAvIDEwMDtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVQZXJQaXhlbCA9XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVTY2FsZSAqIHN0ZXBzICogcGVyY2VudCArIE1hdGgucG93KDIsIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50aW1lWm9vbSk7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50b3RhbFZpZXdEdXJhdGlvbk1zID0gZGF5anModGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUaW1lKS5kaWZmKFxyXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUsXHJcbiAgICAgICAgJ21pbGxpc2Vjb25kcydcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRvdGFsVmlld0R1cmF0aW9uUHggPVxyXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50b3RhbFZpZXdEdXJhdGlvbk1zIC8gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVQZXJQaXhlbDtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLndpZHRoID1cclxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudG90YWxWaWV3RHVyYXRpb25QeCArIHRoaXMuc3R5bGVbJ2dyaWQtbGluZS12ZXJ0aWNhbCddWydzdHJva2Utd2lkdGgnXTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHRpbWUgdmFyaWFibGVzXHJcbiAgICAgKi9cclxuICAgIGluaXRUaW1lcygpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSA9IGRheWpzKHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRhc2tUaW1lKVxyXG4gICAgICAgIC5sb2NhbGUodGhpcy5zdGF0ZS5vcHRpb25zLmxvY2FsZS5uYW1lKVxyXG4gICAgICAgIC5zdGFydE9mKCdkYXknKVxyXG4gICAgICAgIC5zdWJ0cmFjdCh0aGlzLnN0YXRlLm9wdGlvbnMuc2NvcGUuYmVmb3JlLCAnZGF5cycpXHJcbiAgICAgICAgLnN0YXJ0T2YoJ2RheScpXHJcbiAgICAgICAgLnZhbHVlT2YoKTtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUaW1lID0gZGF5anModGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUYXNrVGltZSlcclxuICAgICAgICAubG9jYWxlKHRoaXMuc3RhdGUub3B0aW9ucy5sb2NhbGUubmFtZSlcclxuICAgICAgICAuZW5kT2YoJ2RheScpXHJcbiAgICAgICAgLmFkZCh0aGlzLnN0YXRlLm9wdGlvbnMuc2NvcGUuYWZ0ZXIsICdkYXlzJylcclxuICAgICAgICAuZW5kT2YoJ2RheScpXHJcbiAgICAgICAgLnZhbHVlT2YoKTtcclxuICAgICAgdGhpcy5yZWNhbGN1bGF0ZVRpbWVzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlIHN0ZXBzXHJcbiAgICAgKiBTdGVwcyBhcmUgZGF5cyBieSBkZWZhdWx0XHJcbiAgICAgKiBFYWNoIHN0ZXAgY29udGFpbiBpbmZvcm1hdGlvbiBhYm91dCB0aW1lIG9mZnNldCBhbmQgcGl4ZWwgb2Zmc2V0IG9mIHRoaXMgdGltZSBpbnNpZGUgZ2FudHQgY2hhcnRcclxuICAgICAqL1xyXG4gICAgY2FsY3VsYXRlU3RlcHMoKSB7XHJcbiAgICAgIGNvbnN0IHN0ZXBzID0gW107XHJcbiAgICAgIGNvbnN0IGxhc3RNcyA9IGRheWpzKHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZSkudmFsdWVPZigpO1xyXG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IGRheWpzKHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUpO1xyXG4gICAgICBzdGVwcy5wdXNoKHtcclxuICAgICAgICB0aW1lOiBjdXJyZW50RGF0ZS52YWx1ZU9mKCksXHJcbiAgICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgICBtczogMCxcclxuICAgICAgICAgIHB4OiAwXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZm9yIChcclxuICAgICAgICBsZXQgY3VycmVudERhdGUgPSBkYXlqcyh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lKVxyXG4gICAgICAgICAgLmFkZCgxLCB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcER1cmF0aW9uKVxyXG4gICAgICAgICAgLnN0YXJ0T2YoJ2RheScpO1xyXG4gICAgICAgIGN1cnJlbnREYXRlLnZhbHVlT2YoKSA8PSBsYXN0TXM7XHJcbiAgICAgICAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZS5hZGQoMSwgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBEdXJhdGlvbikuc3RhcnRPZignZGF5JylcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0TXMgPSBjdXJyZW50RGF0ZS5kaWZmKHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUsICdtaWxsaXNlY29uZHMnKTtcclxuICAgICAgICBjb25zdCBvZmZzZXRQeCA9IG9mZnNldE1zIC8gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVQZXJQaXhlbDtcclxuICAgICAgICBjb25zdCBzdGVwID0ge1xyXG4gICAgICAgICAgdGltZTogY3VycmVudERhdGUudmFsdWVPZigpLFxyXG4gICAgICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgICAgIG1zOiBvZmZzZXRNcyxcclxuICAgICAgICAgICAgcHg6IG9mZnNldFB4XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBwcmV2aW91c1N0ZXAgPSBzdGVwc1tzdGVwcy5sZW5ndGggLSAxXTtcclxuICAgICAgICBwcmV2aW91c1N0ZXAud2lkdGggPSB7XHJcbiAgICAgICAgICBtczogb2Zmc2V0TXMgLSBwcmV2aW91c1N0ZXAub2Zmc2V0Lm1zLFxyXG4gICAgICAgICAgcHg6IG9mZnNldFB4IC0gcHJldmlvdXNTdGVwLm9mZnNldC5weFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3RlcHMucHVzaChzdGVwKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBsYXN0U3RlcCA9IHN0ZXBzW3N0ZXBzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsYXN0U3RlcC53aWR0aCA9IHtcclxuICAgICAgICBtczogdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRvdGFsVmlld0R1cmF0aW9uTXMgLSBsYXN0U3RlcC5vZmZzZXQubXMsXHJcbiAgICAgICAgcHg6IHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50b3RhbFZpZXdEdXJhdGlvblB4IC0gbGFzdFN0ZXAub2Zmc2V0LnB4XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwcyA9IHN0ZXBzO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSBjYWxlbmRhciB3aWR0aHMgLSB3aGVuIHNjYWxlIHdhcyBjaGFuZ2VkIGZvciBleGFtcGxlXHJcbiAgICAgKi9cclxuICAgIGNvbXB1dGVDYWxlbmRhcldpZHRocygpIHtcclxuICAgICAgdGhpcy5jb21wdXRlRGF5V2lkdGhzKCk7XHJcbiAgICAgIHRoaXMuY29tcHV0ZUhvdXJXaWR0aHMoKTtcclxuICAgICAgdGhpcy5jb21wdXRlTW9udGhXaWR0aHMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21wdXRlIHdpZHRoIG9mIGNhbGVuZGFyIGhvdXJzIGNvbHVtbiB3aWR0aHMgYmFzaW5nIG9uIHRleHQgd2lkdGhzXHJcbiAgICAgKi9cclxuICAgIGNvbXB1dGVIb3VyV2lkdGhzKCkge1xyXG4gICAgICBjb25zdCBzdHlsZSA9IHsgLi4udGhpcy5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQnXSwgLi4udGhpcy5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQtLWhvdXInXSB9O1xyXG4gICAgICB0aGlzLnN0YXRlLmN0eC5mb250ID0gc3R5bGVbJ2ZvbnQtc2l6ZSddICsgJyAnICsgc3R5bGVbJ2ZvbnQtZmFtaWx5J107XHJcbiAgICAgIGNvbnN0IGxvY2FsZU5hbWUgPSB0aGlzLnN0YXRlLm9wdGlvbnMubG9jYWxlLm5hbWU7XHJcbiAgICAgIGxldCBjdXJyZW50RGF0ZSA9IGRheWpzKCcyMDE4LTAxLTAxVDAwOjAwOjAwJykubG9jYWxlKGxvY2FsZU5hbWUpOyAvLyBhbnkgZGF0ZSB3aWxsIGJlIGdvb2QgZm9yIGhvdXJzXHJcbiAgICAgIGxldCBtYXhXaWR0aHMgPSB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5tYXhXaWR0aHM7XHJcbiAgICAgIGlmIChtYXhXaWR0aHMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGZvcm1hdE5hbWUgaW4gdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZm9ybWF0KSB7XHJcbiAgICAgICAgbWF4V2lkdGhzW2Zvcm1hdE5hbWVdID0gMDtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBob3VyID0gMDsgaG91ciA8IDI0OyBob3VyKyspIHtcclxuICAgICAgICBsZXQgd2lkdGhzID0geyBob3VyIH07XHJcbiAgICAgICAgZm9yIChsZXQgZm9ybWF0TmFtZSBpbiB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5mb3JtYXQpIHtcclxuICAgICAgICAgIGNvbnN0IGhvdXJGb3JtYXR0ZWQgPSB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5mb3JtYXRbZm9ybWF0TmFtZV0oY3VycmVudERhdGUpO1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZm9ybWF0dGVkW2Zvcm1hdE5hbWVdLnB1c2goaG91ckZvcm1hdHRlZCk7XHJcbiAgICAgICAgICB3aWR0aHNbZm9ybWF0TmFtZV0gPSB0aGlzLnN0YXRlLmN0eC5tZWFzdXJlVGV4dChob3VyRm9ybWF0dGVkKS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIud2lkdGhzLnB1c2god2lkdGhzKTtcclxuICAgICAgICBmb3IgKGxldCBmb3JtYXROYW1lIGluIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmZvcm1hdCkge1xyXG4gICAgICAgICAgaWYgKHdpZHRoc1tmb3JtYXROYW1lXSA+IG1heFdpZHRoc1tmb3JtYXROYW1lXSkge1xyXG4gICAgICAgICAgICBtYXhXaWR0aHNbZm9ybWF0TmFtZV0gPSB3aWR0aHNbZm9ybWF0TmFtZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnREYXRlID0gY3VycmVudERhdGUuYWRkKDEsICdob3VyJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21wdXRlIGNhbGVuZGFyIGRheXMgY29sdW1uIHdpZHRocyBiYXNpbmcgb24gdGV4dCB3aWR0aHNcclxuICAgICAqL1xyXG4gICAgY29tcHV0ZURheVdpZHRocygpIHtcclxuICAgICAgY29uc3Qgc3R5bGUgPSB7IC4uLnRoaXMuc3R5bGVbJ2NhbGVuZGFyLXJvdy10ZXh0J10sIC4uLnRoaXMuc3R5bGVbJ2NhbGVuZGFyLXJvdy10ZXh0LS1kYXknXSB9O1xyXG4gICAgICB0aGlzLnN0YXRlLmN0eC5mb250ID0gc3R5bGVbJ2ZvbnQtc2l6ZSddICsgJyAnICsgc3R5bGVbJ2ZvbnQtZmFtaWx5J107XHJcbiAgICAgIGNvbnN0IGxvY2FsZU5hbWUgPSB0aGlzLnN0YXRlLm9wdGlvbnMubG9jYWxlLm5hbWU7XHJcbiAgICAgIGxldCBjdXJyZW50RGF0ZSA9IGRheWpzKHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwc1swXS50aW1lKS5sb2NhbGUobG9jYWxlTmFtZSk7XHJcbiAgICAgIGxldCBtYXhXaWR0aHMgPSB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5Lm1heFdpZHRocztcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS53aWR0aHMgPSBbXTtcclxuICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5mb3JtYXQpLmZvckVhY2goZm9ybWF0TmFtZSA9PiB7XHJcbiAgICAgICAgbWF4V2lkdGhzW2Zvcm1hdE5hbWVdID0gMDtcclxuICAgICAgfSk7XHJcbiAgICAgIGZvciAobGV0IGRheSA9IDAsIGRheXNMZW4gPSB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHMubGVuZ3RoOyBkYXkgPCBkYXlzTGVuOyBkYXkrKykge1xyXG4gICAgICAgIGNvbnN0IHdpZHRocyA9IHtcclxuICAgICAgICAgIGRheVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5mb3JtYXQpLmZvckVhY2goZm9ybWF0TmFtZSA9PiB7XHJcbiAgICAgICAgICB3aWR0aHNbZm9ybWF0TmFtZV0gPSB0aGlzLnN0YXRlLmN0eC5tZWFzdXJlVGV4dChcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5mb3JtYXRbZm9ybWF0TmFtZV0oY3VycmVudERhdGUpXHJcbiAgICAgICAgICApLndpZHRoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkud2lkdGhzLnB1c2god2lkdGhzKTtcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmZvcm1hdCkuZm9yRWFjaChmb3JtYXROYW1lID0+IHtcclxuICAgICAgICAgIGlmICh3aWR0aHNbZm9ybWF0TmFtZV0gPiBtYXhXaWR0aHNbZm9ybWF0TmFtZV0pIHtcclxuICAgICAgICAgICAgbWF4V2lkdGhzW2Zvcm1hdE5hbWVdID0gd2lkdGhzW2Zvcm1hdE5hbWVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGN1cnJlbnREYXRlID0gY3VycmVudERhdGUuYWRkKDEsICdkYXknKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1vbnRocyBjb3VudFxyXG4gICAgICpcclxuICAgICAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIG51bWJlciBvZiBkaWZmZXJlbnQgbW9udGhzIGluIHNwZWNpZmllZCB0aW1lIHJhbmdlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZyb21UaW1lIC0gZGF0ZSBpbiBtc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRvVGltZSAtIGRhdGUgaW4gbXNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBkaWZmZXJlbnQgbW9udGhzIGNvdW50XHJcbiAgICAgKi9cclxuICAgIG1vbnRoc0NvdW50KGZyb21UaW1lLCB0b1RpbWUpIHtcclxuICAgICAgaWYgKGZyb21UaW1lID4gdG9UaW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGN1cnJlbnRNb250aCA9IGRheWpzKGZyb21UaW1lKTtcclxuICAgICAgbGV0IHByZXZpb3VzTW9udGggPSBjdXJyZW50TW9udGguY2xvbmUoKTtcclxuICAgICAgbGV0IG1vbnRoc0NvdW50ID0gMTtcclxuICAgICAgd2hpbGUgKGN1cnJlbnRNb250aC52YWx1ZU9mKCkgPD0gdG9UaW1lKSB7XHJcbiAgICAgICAgY3VycmVudE1vbnRoID0gY3VycmVudE1vbnRoLmFkZCgxLCAnZGF5Jyk7XHJcbiAgICAgICAgaWYgKHByZXZpb3VzTW9udGgubW9udGgoKSAhPT0gY3VycmVudE1vbnRoLm1vbnRoKCkpIHtcclxuICAgICAgICAgIG1vbnRoc0NvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZpb3VzTW9udGggPSBjdXJyZW50TW9udGguY2xvbmUoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbW9udGhzQ291bnQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tcHV0ZSBtb250aCBjYWxlbmRhciBjb2x1bW5zIHdpZHRocyBiYXNpbmcgb24gdGV4dCB3aWR0aHNcclxuICAgICAqL1xyXG4gICAgY29tcHV0ZU1vbnRoV2lkdGhzKCkge1xyXG4gICAgICBjb25zdCBzdHlsZSA9IHsgLi4udGhpcy5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQnXSwgLi4udGhpcy5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQtLW1vbnRoJ10gfTtcclxuICAgICAgdGhpcy5zdGF0ZS5jdHguZm9udCA9IHN0eWxlWydmb250LXNpemUnXSArICcgJyArIHN0eWxlWydmb250LWZhbWlseSddO1xyXG4gICAgICBsZXQgbWF4V2lkdGhzID0gdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLm1heFdpZHRocztcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLndpZHRocyA9IFtdO1xyXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZm9ybWF0KS5mb3JFYWNoKGZvcm1hdE5hbWUgPT4ge1xyXG4gICAgICAgIG1heFdpZHRoc1tmb3JtYXROYW1lXSA9IDA7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBsb2NhbGVOYW1lID0gdGhpcy5zdGF0ZS5vcHRpb25zLmxvY2FsZS5uYW1lO1xyXG4gICAgICBsZXQgY3VycmVudERhdGUgPSBkYXlqcyh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lKS5sb2NhbGUobG9jYWxlTmFtZSk7XHJcbiAgICAgIGNvbnN0IG1vbnRoc0NvdW50ID0gdGhpcy5tb250aHNDb3VudCh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lLCB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWUpO1xyXG4gICAgICBmb3IgKGxldCBtb250aCA9IDA7IG1vbnRoIDwgbW9udGhzQ291bnQ7IG1vbnRoKyspIHtcclxuICAgICAgICBjb25zdCB3aWR0aHMgPSB7XHJcbiAgICAgICAgICBtb250aFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmZvcm1hdCkuZm9yRWFjaChmb3JtYXROYW1lID0+IHtcclxuICAgICAgICAgIHdpZHRoc1tmb3JtYXROYW1lXSA9IHRoaXMuc3RhdGUuY3R4Lm1lYXN1cmVUZXh0KFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZm9ybWF0W2Zvcm1hdE5hbWVdKGN1cnJlbnREYXRlKVxyXG4gICAgICAgICAgKS53aWR0aDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGgud2lkdGhzLnB1c2god2lkdGhzKTtcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZm9ybWF0KS5mb3JFYWNoKGZvcm1hdE5hbWUgPT4ge1xyXG4gICAgICAgICAgaWYgKHdpZHRoc1tmb3JtYXROYW1lXSA+IG1heFdpZHRoc1tmb3JtYXROYW1lXSkge1xyXG4gICAgICAgICAgICBtYXhXaWR0aHNbZm9ybWF0TmFtZV0gPSB3aWR0aHNbZm9ybWF0TmFtZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZS5hZGQoMSwgJ21vbnRoJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcmVwYXJlIHRpbWUgYW5kIGRhdGUgdmFyaWFibGVzIGZvciBnYW50dFxyXG4gICAgICovXHJcbiAgICBwcmVwYXJlRGF0ZXMoKSB7XHJcbiAgICAgIGxldCBmaXJzdFRhc2tUaW1lID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgICAgIGxldCBsYXN0VGFza1RpbWUgPSAwO1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDAsIGxlbiA9IHRoaXMuc3RhdGUudGFza3MubGVuZ3RoOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xyXG4gICAgICAgIGxldCB0YXNrID0gdGhpcy5zdGF0ZS50YXNrc1tpbmRleF07XHJcbiAgICAgICAgaWYgKHRhc2suc3RhcnRUaW1lIDwgZmlyc3RUYXNrVGltZSkge1xyXG4gICAgICAgICAgZmlyc3RUYXNrVGltZSA9IHRhc2suc3RhcnRUaW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFzay5zdGFydFRpbWUgKyB0YXNrLmR1cmF0aW9uID4gbGFzdFRhc2tUaW1lKSB7XHJcbiAgICAgICAgICBsYXN0VGFza1RpbWUgPSB0YXNrLnN0YXJ0VGltZSArIHRhc2suZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRhc2tUaW1lID0gZmlyc3RUYXNrVGltZTtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUYXNrVGltZSA9IGxhc3RUYXNrVGltZTtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSA9IGRheWpzKGZpcnN0VGFza1RpbWUpXHJcbiAgICAgICAgLmxvY2FsZSh0aGlzLnN0YXRlLm9wdGlvbnMubG9jYWxlLm5hbWUpXHJcbiAgICAgICAgLnN0YXJ0T2YoJ2RheScpXHJcbiAgICAgICAgLnN1YnRyYWN0KHRoaXMuc3RhdGUub3B0aW9ucy5zY29wZS5iZWZvcmUsICdkYXlzJylcclxuICAgICAgICAuc3RhcnRPZignZGF5JylcclxuICAgICAgICAudmFsdWVPZigpO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWUgPSBkYXlqcyhsYXN0VGFza1RpbWUpXHJcbiAgICAgICAgLmxvY2FsZSh0aGlzLnN0YXRlLm9wdGlvbnMubG9jYWxlLm5hbWUpXHJcbiAgICAgICAgLmVuZE9mKCdkYXknKVxyXG4gICAgICAgIC5hZGQodGhpcy5zdGF0ZS5vcHRpb25zLnNjb3BlLmFmdGVyLCAnZGF5cycpXHJcbiAgICAgICAgLmVuZE9mKCdkYXknKVxyXG4gICAgICAgIC52YWx1ZU9mKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dXAgYW5kIGNhbGN1bGF0ZSBldmVyeXRoaW5nXHJcbiAgICAgKi9cclxuICAgIHNldHVwKGl0c1VwZGF0ZSA9ICcnKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZShpdHNVcGRhdGUpO1xyXG4gICAgICB0aGlzLnByZXBhcmVEYXRlcygpO1xyXG4gICAgICB0aGlzLmluaXRUaW1lcygpO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVN0ZXBzKCk7XHJcbiAgICAgIHRoaXMuY29tcHV0ZUNhbGVuZGFyV2lkdGhzKCk7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC53aWR0aCA9IHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5jb2x1bW5zLnJlZHVjZShcclxuICAgICAgICAocHJldiwgY3VycmVudCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IHByZXYud2lkdGggKyBjdXJyZW50LndpZHRoIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHdpZHRoOiAwIH1cclxuICAgICAgKS53aWR0aDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHbG9iYWwgcmVzaXplIGV2ZW50IChmcm9tIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKVxyXG4gICAgICovXHJcbiAgICBnbG9iYWxPblJlc2l6ZSgpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLiRlbCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXRoaXMuJGVsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jbGllbnRXaWR0aCA9IHRoaXMuJGVsLmNsaWVudFdpZHRoO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LndpZHRoRnJvbVBlcmNlbnRhZ2UgPlxyXG4gICAgICAgICh0aGlzLnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggLyAxMDApICogdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LndpZHRoVGhyZXNob2xkXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IGRpZmYgPVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LndpZHRoRnJvbVBlcmNlbnRhZ2UgLVxyXG4gICAgICAgICAgKHRoaXMuc3RhdGUub3B0aW9ucy5jbGllbnRXaWR0aCAvIDEwMCkgKiB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3Qud2lkdGhUaHJlc2hvbGQ7XHJcbiAgICAgICAgbGV0IGRpZmZQZXJjZW50ID0gMTAwIC0gKGRpZmYgLyB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3Qud2lkdGhGcm9tUGVyY2VudGFnZSkgKiAxMDA7XHJcbiAgICAgICAgaWYgKGRpZmZQZXJjZW50IDwgMCkge1xyXG4gICAgICAgICAgZGlmZlBlcmNlbnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgICBjb2x1bW4udGhyZXNob2xkUGVyY2VudCA9IGRpZmZQZXJjZW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5jb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgICAgIGNvbHVtbi50aHJlc2hvbGRQZXJjZW50ID0gMTAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlVGFza0xpc3RDb2x1bW5zRGltZW5zaW9ucygpO1xyXG4gICAgICB0aGlzLiRlbWl0KCdjYWxlbmRhci1yZWNhbGN1bGF0ZScpO1xyXG4gICAgICB0aGlzLnN5bmNTY3JvbGxUb3AoKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjb21wdXRlZDoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdmlzaWJsZSB0YXNrc1xyXG4gICAgICogVmVyeSBpbXBvcnRhbnQgbWV0aG9kIHdoaWNoIHdpbGwgYnJpbmcgdXMgb25seSB0aG9zZSB0YXNrcyB0aGF0IGFyZSB2aXNpYmxlIGluc2lkZSBnYW50dCBjaGFydFxyXG4gICAgICogRm9yIGV4YW1wbGUgd2hlbiB0YXNrIGlzIGNvbGxhcHNlZCAtIGNoaWxkcmVuIG9mIHRoaXMgdGFzayBhcmUgbm90IHZpc2libGUgLSB3ZSBzaG91bGQgbm90IHJlbmRlciB0aGVtXHJcbiAgICAgKi9cclxuICAgIHZpc2libGVUYXNrcygpIHtcclxuICAgICAgY29uc3QgdmlzaWJsZVRhc2tzID0gdGhpcy5zdGF0ZS50YXNrcy5maWx0ZXIodGFzayA9PiB0aGlzLmlzVGFza1Zpc2libGUodGFzaykpO1xyXG4gICAgICBjb25zdCBtYXhSb3dzID0gdmlzaWJsZVRhc2tzLnNsaWNlKDAsIHRoaXMuc3RhdGUub3B0aW9ucy5tYXhSb3dzKTtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQgPSB0aGlzLmdldFRhc2tzSGVpZ2h0KG1heFJvd3MpO1xyXG4gICAgICBsZXQgaGVpZ2h0Q29tcGVuc2F0aW9uID0gMDtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUub3B0aW9ucy5tYXhIZWlnaHQgJiYgdGhpcy5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQgPiB0aGlzLnN0YXRlLm9wdGlvbnMubWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgaGVpZ2h0Q29tcGVuc2F0aW9uID0gdGhpcy5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQgLSB0aGlzLnN0YXRlLm9wdGlvbnMubWF4SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5yb3dzSGVpZ2h0ID0gdGhpcy5zdGF0ZS5vcHRpb25zLm1heEhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQobWF4Um93cykgLSBoZWlnaHRDb21wZW5zYXRpb247XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHQgPSB0aGlzLmdldFRhc2tzSGVpZ2h0KHZpc2libGVUYXNrcyk7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5vdXRlckhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KG1heFJvd3MsIHRydWUpIC0gaGVpZ2h0Q29tcGVuc2F0aW9uO1xyXG4gICAgICBsZXQgbGVuID0gdmlzaWJsZVRhc2tzLmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xyXG4gICAgICAgIGxldCB0YXNrID0gdmlzaWJsZVRhc2tzW2luZGV4XTtcclxuICAgICAgICB0YXNrLndpZHRoID1cclxuICAgICAgICAgIHRhc2suZHVyYXRpb24gLyB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVBlclBpeGVsIC0gdGhpcy5zdHlsZVsnZ3JpZC1saW5lLXZlcnRpY2FsJ11bJ3N0cm9rZS13aWR0aCddO1xyXG4gICAgICAgIGlmICh0YXNrLndpZHRoIDwgMCkge1xyXG4gICAgICAgICAgdGFzay53aWR0aCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhc2suaGVpZ2h0ID0gdGhpcy5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQ7XHJcbiAgICAgICAgdGFzay54ID0gdGhpcy50aW1lVG9QaXhlbE9mZnNldFgodGFzay5zdGFydFRpbWUpO1xyXG4gICAgICAgIHRhc2sueSA9XHJcbiAgICAgICAgICAodGhpcy5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgKyB0aGlzLnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDIpICogaW5kZXggK1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNoYXJ0LmdyaWQuaG9yaXpvbnRhbC5nYXA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHZpc2libGVUYXNrcztcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdHlsZSBzaG9ydGN1dFxyXG4gICAgICovXHJcbiAgICBzdHlsZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZHluYW1pY1N0eWxlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBjb2x1bW5zIGFuZCBjb21wdXRlIGRpbWVuc2lvbnMgb24gdGhlIGZseVxyXG4gICAgICovXHJcbiAgICBnZXRUYXNrTGlzdENvbHVtbnMoKSB7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlVGFza0xpc3RDb2x1bW5zRGltZW5zaW9ucygpO1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmNvbHVtbnM7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGFza3MgdXNlZCBmb3IgY29tbXVuaWNhdGUgd2l0aCBwYXJlbnQgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIG91dHB1dFRhc2tzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS50YXNrcztcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcHRpb25zIHVzZWQgdG8gY29tbXVuaWNhdGUgd2l0aCBwYXJlbnQgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIG91dHB1dE9wdGlvbnMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLm9wdGlvbnM7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogV2F0Y2ggdGFza3MgYWZ0ZXIgZ2FudHQgaW5zdGFuY2UgaXMgY3JlYXRlZCBhbmQgcmVhY3Qgd2hlbiB3ZSBoYXZlIG5ldyBraWRzIG9uIHRoZSBibG9ja1xyXG4gICAqL1xyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVFdmVudHMoKTtcclxuICAgIHRoaXMuc2V0dXAoKTtcclxuICAgIHRoaXMuc3RhdGUudW53YXRjaFRhc2tzID0gdGhpcy4kd2F0Y2goXHJcbiAgICAgICd0YXNrcycsXHJcbiAgICAgIHRhc2tzID0+IHtcclxuICAgICAgICBjb25zdCBub3RFcXVhbCA9IG5vdEVxdWFsRGVlcCh0YXNrcywgdGhpcy5vdXRwdXRUYXNrcyk7XHJcbiAgICAgICAgaWYgKG5vdEVxdWFsKSB7XHJcbiAgICAgICAgICB0aGlzLnNldHVwKCd0YXNrcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgeyBkZWVwOiB0cnVlIH1cclxuICAgICk7XHJcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hPcHRpb25zID0gdGhpcy4kd2F0Y2goXHJcbiAgICAgICdvcHRpb25zJyxcclxuICAgICAgb3B0cyA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm90RXF1YWwgPSBub3RFcXVhbERlZXAob3B0cywgdGhpcy5vdXRwdXRPcHRpb25zKTtcclxuICAgICAgICBpZiAobm90RXF1YWwpIHtcclxuICAgICAgICAgIHRoaXMuc2V0dXAoJ29wdGlvbnMnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgZGVlcDogdHJ1ZSB9XHJcbiAgICApO1xyXG4gICAgdGhpcy5zdGF0ZS51bndhdGNoU3R5bGUgPSB0aGlzLiR3YXRjaChcclxuICAgICAgJ2R5bmFtaWNTdHlsZScsXHJcbiAgICAgIHN0eWxlID0+IHtcclxuICAgICAgICBjb25zdCBub3RFcXVhbCA9IG5vdEVxdWFsRGVlcChzdHlsZSwgdGhpcy5keW5hbWljU3R5bGUpO1xyXG4gICAgICAgIGlmIChub3RFcXVhbCkge1xyXG4gICAgICAgICAgdGhpcy5pbml0aWFsaXplU3R5bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgZGVlcDogdHJ1ZSwgaW1tZWRpYXRlOiB0cnVlIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZS51bndhdGNoT3V0cHV0VGFza3MgPSB0aGlzLiR3YXRjaChcclxuICAgICAgJ291dHB1dFRhc2tzJyxcclxuICAgICAgdGFza3MgPT4ge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ3Rhc2tzLWNoYW5nZWQnLCB0YXNrcy5tYXAodGFzayA9PiB0YXNrKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgZGVlcDogdHJ1ZSB9XHJcbiAgICApO1xyXG4gICAgdGhpcy5zdGF0ZS51bndhdGNoT3V0cHV0T3B0aW9ucyA9IHRoaXMuJHdhdGNoKFxyXG4gICAgICAnb3V0cHV0T3B0aW9ucycsXHJcbiAgICAgIG9wdGlvbnMgPT4ge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ29wdGlvbnMtY2hhbmdlZCcsIG1lcmdlRGVlcCh7fSwgb3B0aW9ucykpO1xyXG4gICAgICB9LFxyXG4gICAgICB7IGRlZXA6IHRydWUgfVxyXG4gICAgKTtcclxuICAgIHRoaXMuc3RhdGUudW53YXRjaE91dHB1dFN0eWxlID0gdGhpcy4kd2F0Y2goXHJcbiAgICAgICdzdHlsZScsXHJcbiAgICAgIHN0eWxlID0+IHtcclxuICAgICAgICB0aGlzLiRlbWl0KCdkeW5hbWljLXN0eWxlLWNoYW5nZWQnLCBtZXJnZURlZXAoe30sIHN0eWxlKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgZGVlcDogdHJ1ZSB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2dhbnR0LWVsYXN0aWMtY3JlYXRlZCcsIHRoaXMpO1xyXG4gICAgdGhpcy4kZW1pdCgnY3JlYXRlZCcsIHRoaXMpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgYmVmb3JlLW1vdW50IGV2ZW50XHJcbiAgICovXHJcbiAgYmVmb3JlTW91bnQoKSB7XHJcbiAgICB0aGlzLiRlbWl0KCdiZWZvcmUtbW91bnQnLCB0aGlzKTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBFbWl0IHJlYWR5L21vdW50ZWQgZXZlbnRzIGFuZCBkZWxpdmVyIHRoaXMgZ2FudHQgaW5zdGFuY2UgdG8gb3V0c2lkZSB3b3JsZCB3aGVuIG5lZWRlZFxyXG4gICAqL1xyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggPSB0aGlzLiRlbC5jbGllbnRXaWR0aDtcclxuICAgIHRoaXMuc3RhdGUucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XHJcbiAgICAgIHRoaXMuZ2xvYmFsT25SZXNpemUoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGF0ZS5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuJGVsLnBhcmVudE5vZGUpO1xyXG4gICAgdGhpcy5nbG9iYWxPblJlc2l6ZSgpO1xyXG4gICAgdGhpcy4kZW1pdCgncmVhZHknLCB0aGlzKTtcclxuICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2dhbnR0LWVsYXN0aWMtbW91bnRlZCcsIHRoaXMpO1xyXG4gICAgdGhpcy4kZW1pdCgnbW91bnRlZCcsIHRoaXMpO1xyXG4gICAgdGhpcy4kcm9vdC4kZW1pdCgnZ2FudHQtZWxhc3RpYy1yZWFkeScsIHRoaXMpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgZXZlbnQgd2hlbiBkYXRhIHdhcyBjaGFuZ2VkIGFuZCBiZWZvcmUgdXBkYXRlICh5b3UgY2FuIGNsZWFudXAgZG9tIGV2ZW50cyBoZXJlIGZvciBleGFtcGxlKVxyXG4gICAqL1xyXG4gIGJlZm9yZVVwZGF0ZSgpIHtcclxuICAgIHRoaXMuJGVtaXQoJ2JlZm9yZS11cGRhdGUnKTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBFbWl0IGV2ZW50IHdoZW4gZ2FudHQtZWxhc3RpYyB2aWV3IHdhcyB1cGRhdGVkXHJcbiAgICovXHJcbiAgdXBkYXRlZCgpIHtcclxuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgdGhpcy4kZW1pdCgndXBkYXRlZCcpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQmVmb3JlIGRlc3Ryb3kgZXZlbnQgLSBjbGVhbiB1cFxyXG4gICAqL1xyXG4gIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN0YXRlLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLiRlbC5wYXJlbnROb2RlKTtcclxuICAgIHRoaXMuc3RhdGUudW53YXRjaFRhc2tzKCk7XHJcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hPcHRpb25zKCk7XHJcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hTdHlsZSgpO1xyXG4gICAgdGhpcy5zdGF0ZS51bndhdGNoT3V0cHV0VGFza3MoKTtcclxuICAgIHRoaXMuc3RhdGUudW53YXRjaE91dHB1dE9wdGlvbnMoKTtcclxuICAgIHRoaXMuc3RhdGUudW53YXRjaE91dHB1dFN0eWxlKCk7XHJcbiAgICB0aGlzLiRlbWl0KCdiZWZvcmUtZGVzdHJveScpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgZXZlbnQgYWZ0ZXIgZ2FudHQtZWxhc3RpYyB3YXMgZGVzdHJveWVkXHJcbiAgICovXHJcbiAgZGVzdHJveWVkKCkge1xyXG4gICAgdGhpcy4kZW1pdCgnZGVzdHJveWVkJyk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBHYW50dEVsYXN0aWM7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5bY2xhc3NePSdnYW50dC1lbGFzdGljJ10sXHJcbltjbGFzcyo9JyBnYW50dC1lbGFzdGljJ10ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmdhbnR0LWVsYXN0aWNfX21haW4tdmlldyBzdmcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5nYW50dC1lbGFzdGljX19ncmlkLWhvcml6b250YWwtbGluZSxcclxuLmdhbnR0LWVsYXN0aWNfX2dyaWQtdmVydGljYWwtbGluZSB7XHJcbiAgc3Ryb2tlOiAjYTBhMGEwO1xyXG4gIHN0cm9rZS13aWR0aDogMTtcclxufVxyXG5mb3JlaWduT2JqZWN0ID4gKiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmdhbnR0LWVsYXN0aWMgLnAtMiB7XHJcbiAgcGFkZGluZzogMTByZW07XHJcbn1cclxuLmdhbnR0LWVsYXN0aWNfX21haW4tdmlldy1tYWluLWNvbnRhaW5lcixcclxuLmdhbnR0LWVsYXN0aWNfX21haW4tdmlldy1jb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLWNvbHVtbjpsYXN0LW9mLXR5cGUge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDA1MDtcclxufVxyXG4uZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW06bGFzdC1vZi10eXBlIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDUwO1xyXG59XHJcbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyOmhvdmVyIHtcclxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyOmhvdmVyID4gLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXI6aG92ZXIgPiAuZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8IS0tXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IENhbGVuZGFyIGNvbXBvbmVudFxyXG4gKiBAbGljZW5zZSBNSVRcclxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxyXG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcclxuICovXHJcbi0tPlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jYWxlbmRhci13cmFwcGVyXCJcclxuICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2FsZW5kYXItd3JhcHBlciddLCB3aWR0aDogcm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoICsgJ3B4JyB9XCJcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXJcIiA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NhbGVuZGFyJ10sIHdpZHRoOiByb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyAncHgnIH1cIj5cclxuICAgICAgPGNhbGVuZGFyLXJvdyA6aXRlbXM9XCJkYXRlcy5tb250aHNcIiB3aGljaD1cIm1vbnRoXCIgdi1pZj1cInJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5kaXNwbGF5XCI+PC9jYWxlbmRhci1yb3c+XHJcbiAgICAgIDxjYWxlbmRhci1yb3cgOml0ZW1zPVwiZGF0ZXMuZGF5c1wiIHdoaWNoPVwiZGF5XCIgdi1pZj1cInJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuZGlzcGxheVwiPjwvY2FsZW5kYXItcm93PlxyXG4gICAgICA8Y2FsZW5kYXItcm93IDppdGVtcz1cImRhdGVzLmhvdXJzXCIgd2hpY2g9XCJob3VyXCIgdi1pZj1cInJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmRpc3BsYXlcIj48L2NhbGVuZGFyLXJvdz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IENhbGVuZGFyUm93IGZyb20gJy4vQ2FsZW5kYXJSb3cudnVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnQ2FsZW5kYXInLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIENhbGVuZGFyUm93XHJcbiAgfSxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSBob3VycyB3aWxsIGZpdD9cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBob3dNYW55SG91cnNGaXQoZGF5SW5kZXgpIHtcclxuICAgICAgY29uc3Qgc3Ryb2tlID0gMTtcclxuICAgICAgY29uc3QgYWRkaXRpb25hbFNwYWNlID0gc3Ryb2tlICsgMjtcclxuICAgICAgbGV0IGZ1bGxDZWxsV2lkdGggPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwc1tkYXlJbmRleF0ud2lkdGgucHg7XHJcbiAgICAgIGxldCBmb3JtYXROYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZm9ybWF0KTtcclxuICAgICAgZm9yIChsZXQgaG91cnMgPSAyNDsgaG91cnMgPiAxOyBob3VycyA9IE1hdGguY2VpbChob3VycyAvIDIpKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZm9ybWF0TmFtZSBvZiBmb3JtYXROYW1lcykge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAodGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5tYXhXaWR0aHNbZm9ybWF0TmFtZV0gKyBhZGRpdGlvbmFsU3BhY2UpICogaG91cnMgPD0gZnVsbENlbGxXaWR0aCAmJlxyXG4gICAgICAgICAgICBob3VycyA+IDFcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGNvdW50OiBob3VycyxcclxuICAgICAgICAgICAgICB0eXBlOiBmb3JtYXROYW1lXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgdHlwZTogJydcclxuICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSBkYXlzIHdpbGwgZml0P1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGhvd01hbnlEYXlzRml0KCkge1xyXG4gICAgICBjb25zdCBzdHJva2UgPSAxO1xyXG4gICAgICBjb25zdCBhZGRpdGlvbmFsU3BhY2UgPSBzdHJva2UgKyAyO1xyXG4gICAgICBsZXQgZnVsbFdpZHRoID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMud2lkdGg7XHJcbiAgICAgIGxldCBmb3JtYXROYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5mb3JtYXQpO1xyXG4gICAgICBmb3IgKGxldCBkYXlzID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHMubGVuZ3RoOyBkYXlzID4gMTsgZGF5cyA9IE1hdGguY2VpbChkYXlzIC8gMikpIHtcclxuICAgICAgICBmb3IgKGxldCBmb3JtYXROYW1lIG9mIGZvcm1hdE5hbWVzKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkubWF4V2lkdGhzW2Zvcm1hdE5hbWVdICsgYWRkaXRpb25hbFNwYWNlKSAqIGRheXMgPD0gZnVsbFdpZHRoICYmXHJcbiAgICAgICAgICAgIGRheXMgPiAxXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBjb3VudDogZGF5cyxcclxuICAgICAgICAgICAgICB0eXBlOiBmb3JtYXROYW1lXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgdHlwZTogJydcclxuICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSBtb250aHMgd2lsbCBmaXQ/XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge29iamVjdH1cclxuICAgICAqL1xyXG4gICAgaG93TWFueU1vbnRoc0ZpdCgpIHtcclxuICAgICAgY29uc3Qgc3Ryb2tlID0gMTtcclxuICAgICAgY29uc3QgYWRkaXRpb25hbFNwYWNlID0gc3Ryb2tlICsgMjtcclxuICAgICAgbGV0IGZ1bGxXaWR0aCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoO1xyXG4gICAgICBsZXQgZm9ybWF0TmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5mb3JtYXQpO1xyXG4gICAgICBsZXQgY3VycmVudE1vbnRoID0gZGF5anModGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lKTtcclxuICAgICAgbGV0IHByZXZpb3VzTW9udGggPSBjdXJyZW50TW9udGguY2xvbmUoKTtcclxuICAgICAgY29uc3QgbGFzdFRpbWUgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZTtcclxuICAgICAgbGV0IG1vbnRoc0NvdW50ID0gdGhpcy5yb290Lm1vbnRoc0NvdW50KFxyXG4gICAgICAgIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSxcclxuICAgICAgICB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZVxyXG4gICAgICApO1xyXG4gICAgICBpZiAobW9udGhzQ291bnQgPT09IDEpIHtcclxuICAgICAgICBmb3IgKGxldCBmb3JtYXROYW1lIG9mIGZvcm1hdE5hbWVzKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGgubWF4V2lkdGhzW2Zvcm1hdE5hbWVdICsgYWRkaXRpb25hbFNwYWNlIDw9IGZ1bGxXaWR0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgICAgICAgIHR5cGU6IGZvcm1hdE5hbWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgbW9udGhzID0gbW9udGhzQ291bnQ7IG1vbnRocyA+IDE7IG1vbnRocyA9IE1hdGguY2VpbChtb250aHMgLyAyKSkge1xyXG4gICAgICAgIGZvciAobGV0IGZvcm1hdE5hbWUgb2YgZm9ybWF0TmFtZXMpIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLm1heFdpZHRoc1tmb3JtYXROYW1lXSArIGFkZGl0aW9uYWxTcGFjZSkgKiBtb250aHMgPD0gZnVsbFdpZHRoICYmXHJcbiAgICAgICAgICAgIG1vbnRocyA+IDFcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGNvdW50OiBtb250aHMsXHJcbiAgICAgICAgICAgICAgdHlwZTogZm9ybWF0TmFtZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvdW50OiAwLFxyXG4gICAgICAgIHR5cGU6IGZvcm1hdE5hbWVzWzBdXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgaG91cnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlSG91cnMoKSB7XHJcbiAgICAgIGxldCBhbGxIb3VycyA9IFtdO1xyXG4gICAgICBpZiAoIXRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZGlzcGxheSkge1xyXG4gICAgICAgIHJldHVybiBhbGxIb3VycztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzdGVwcyA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzO1xyXG4gICAgICBjb25zdCBsb2NhbGVOYW1lID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMubG9jYWxlLm5hbWU7XHJcbiAgICAgIGZvciAobGV0IGhvdXJJbmRleCA9IDAsIGxlbiA9IHN0ZXBzLmxlbmd0aDsgaG91ckluZGV4IDwgbGVuOyBob3VySW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IGhvdXJzQ291bnQgPSB0aGlzLmhvd01hbnlIb3Vyc0ZpdChob3VySW5kZXgpO1xyXG4gICAgICAgIGlmIChob3Vyc0NvdW50LmNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaG91cnMgPSB7IGtleTogaG91ckluZGV4ICsgJ3N0ZXAnLCBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICBjb25zdCBob3VyU3RlcCA9IDI0IC8gaG91cnNDb3VudC5jb3VudDtcclxuICAgICAgICBjb25zdCBob3VyV2lkdGhQeCA9IHN0ZXBzW2hvdXJJbmRleF0ud2lkdGgucHggLyBob3Vyc0NvdW50LmNvdW50O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBob3Vyc0NvdW50LmNvdW50OyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IGhvdXIgPSBpICogaG91clN0ZXA7XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSBob3VySW5kZXg7XHJcbiAgICAgICAgICBpZiAoaG91ckluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICBpbmRleCA9IGhvdXJJbmRleCAtIE1hdGguZmxvb3IoaG91ckluZGV4IC8gMjQpICogMjQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgdGV4dFdpZHRoID0gMDtcclxuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci53aWR0aHNbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0ZXh0V2lkdGggPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLndpZHRoc1tpbmRleF1baG91cnNDb3VudC50eXBlXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCB4ID0gc3RlcHNbaG91ckluZGV4XS5vZmZzZXQucHggKyBob3VyV2lkdGhQeCAqIGk7XHJcbiAgICAgICAgICBob3Vycy5jaGlsZHJlbi5wdXNoKHtcclxuICAgICAgICAgICAgaW5kZXg6IGhvdXJJbmRleCxcclxuICAgICAgICAgICAga2V5OiAnaCcgKyBpLFxyXG4gICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICB5OiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuaGVpZ2h0ICsgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguaGVpZ2h0LFxyXG4gICAgICAgICAgICB3aWR0aDogaG91cldpZHRoUHgsXHJcbiAgICAgICAgICAgIHRleHRXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmhlaWdodCxcclxuICAgICAgICAgICAgbGFiZWw6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZm9ybWF0dGVkW2hvdXJzQ291bnQudHlwZV1baG91cl1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbGxIb3Vycy5wdXNoKGhvdXJzKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYWxsSG91cnM7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgZGF5c1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHthcnJheX1cclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVEYXlzKCkge1xyXG4gICAgICBsZXQgZGF5cyA9IFtdO1xyXG4gICAgICBpZiAoIXRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5kaXNwbGF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGRheXM7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF5c0NvdW50ID0gdGhpcy5ob3dNYW55RGF5c0ZpdCgpO1xyXG4gICAgICBpZiAoZGF5c0NvdW50LmNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGRheXM7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc3RlcHMgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwcztcclxuICAgICAgY29uc3QgbG9jYWxlTmFtZSA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmxvY2FsZS5uYW1lO1xyXG4gICAgICBjb25zdCBkYXlTdGVwID0gTWF0aC5jZWlsKHN0ZXBzLmxlbmd0aCAvIGRheXNDb3VudC5jb3VudCk7XHJcbiAgICAgIGZvciAobGV0IGRheUluZGV4ID0gMCwgbGVuID0gc3RlcHMubGVuZ3RoOyBkYXlJbmRleCA8IGxlbjsgZGF5SW5kZXggKz0gZGF5U3RlcCkge1xyXG4gICAgICAgIGxldCBkYXlXaWR0aFB4ID0gMDtcclxuICAgICAgICAvLyBkYXkgY291bGQgYmUgc2hvcnRlciAoZGF5bGlnaHQgc2F2aW5nIHRpbWUpIHNvIGpvaW4gd2lkdGhzIGFuZCBkaXZpZGVcclxuICAgICAgICBmb3IgKGxldCBjdXJyZW50U3RlcCA9IDA7IGN1cnJlbnRTdGVwIDwgZGF5U3RlcDsgY3VycmVudFN0ZXArKykge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBzdGVwc1tkYXlJbmRleCArIGN1cnJlbnRTdGVwXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgZGF5V2lkdGhQeCArPSBzdGVwc1tkYXlJbmRleCArIGN1cnJlbnRTdGVwXS53aWR0aC5weDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRheWpzKHN0ZXBzW2RheUluZGV4XS50aW1lKTtcclxuICAgICAgICBsZXQgdGV4dFdpZHRoID0gMDtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS53aWR0aHNbZGF5SW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGV4dFdpZHRoID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LndpZHRoc1tkYXlJbmRleF1bZGF5c0NvdW50LnR5cGVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgeCA9IHN0ZXBzW2RheUluZGV4XS5vZmZzZXQucHg7XHJcbiAgICAgICAgZGF5cy5wdXNoKHtcclxuICAgICAgICAgIGluZGV4OiBkYXlJbmRleCxcclxuICAgICAgICAgIGtleTogc3RlcHNbZGF5SW5kZXhdLnRpbWUgKyAnZCcsXHJcbiAgICAgICAgICB4LFxyXG4gICAgICAgICAgeTogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguaGVpZ2h0LFxyXG4gICAgICAgICAgd2lkdGg6IGRheVdpZHRoUHgsXHJcbiAgICAgICAgICB0ZXh0V2lkdGgsXHJcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5oZWlnaHQsXHJcbiAgICAgICAgICBsYWJlbDogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmZvcm1hdFtkYXlzQ291bnQudHlwZV0oZGF0ZS5sb2NhbGUobG9jYWxlTmFtZSkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGRheXMubWFwKGl0ZW0gPT4gKHtcclxuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxyXG4gICAgICAgIGNoaWxkcmVuOiBbaXRlbV1cclxuICAgICAgfSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIG1vbnRoc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHthcnJheX1cclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVNb250aHMoKSB7XHJcbiAgICAgIGxldCBtb250aHMgPSBbXTtcclxuICAgICAgaWYgKCF0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5kaXNwbGF5KSB7XHJcbiAgICAgICAgcmV0dXJuIG1vbnRocztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtb250aHNDb3VudCA9IHRoaXMuaG93TWFueU1vbnRoc0ZpdCgpO1xyXG4gICAgICBpZiAobW9udGhzQ291bnQuY291bnQgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbW9udGhzO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHN0ZXBzID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHM7XHJcbiAgICAgIGNvbnN0IGxvY2FsZU5hbWUgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5sb2NhbGUubmFtZTtcclxuICAgICAgbGV0IGZvcm1hdE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZm9ybWF0KTtcclxuICAgICAgbGV0IGN1cnJlbnREYXRlID0gZGF5anModGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lKTtcclxuICAgICAgZm9yIChsZXQgbW9udGhJbmRleCA9IDA7IG1vbnRoSW5kZXggPCBtb250aHNDb3VudC5jb3VudDsgbW9udGhJbmRleCsrKSB7XHJcbiAgICAgICAgbGV0IG1vbnRoV2lkdGggPSAwO1xyXG4gICAgICAgIGxldCBtb250aE9mZnNldCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIGxldCBmaW5hbERhdGUgPSBkYXlqcyhjdXJyZW50RGF0ZSlcclxuICAgICAgICAgIC5hZGQoMSwgJ21vbnRoJylcclxuICAgICAgICAgIC5zdGFydE9mKCdtb250aCcpO1xyXG4gICAgICAgIGlmIChmaW5hbERhdGUudmFsdWVPZigpID4gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWUpIHtcclxuICAgICAgICAgIGZpbmFsRGF0ZSA9IGRheWpzKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2UgbXVzdCBmaW5kIGZpcnN0IGFuZCBsYXN0IHN0ZXAgdG8gZ2V0IHRoZSBvZmZzZXRzIC8gd2lkdGhzXHJcbiAgICAgICAgZm9yIChsZXQgc3RlcCA9IDAsIGxlbiA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzLmxlbmd0aDsgc3RlcCA8IGxlbjsgc3RlcCsrKSB7XHJcbiAgICAgICAgICBsZXQgY3VycmVudFN0ZXAgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwc1tzdGVwXTtcclxuICAgICAgICAgIGlmIChjdXJyZW50U3RlcC50aW1lID49IGN1cnJlbnREYXRlLnZhbHVlT2YoKSAmJiBjdXJyZW50U3RlcC50aW1lIDwgZmluYWxEYXRlLnZhbHVlT2YoKSkge1xyXG4gICAgICAgICAgICBtb250aFdpZHRoICs9IGN1cnJlbnRTdGVwLndpZHRoLnB4O1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFN0ZXAub2Zmc2V0LnB4IDwgbW9udGhPZmZzZXQpIHtcclxuICAgICAgICAgICAgICBtb250aE9mZnNldCA9IGN1cnJlbnRTdGVwLm9mZnNldC5weDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGFiZWwgPSAnJztcclxuICAgICAgICBsZXQgY2hvb3NlbkZvcm1hdE5hbWU7XHJcbiAgICAgICAgZm9yIChsZXQgZm9ybWF0TmFtZSBvZiBmb3JtYXROYW1lcykge1xyXG4gICAgICAgICAgaWYgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLm1heFdpZHRoc1tmb3JtYXROYW1lXSArIDIgPD0gbW9udGhXaWR0aCkge1xyXG4gICAgICAgICAgICBsYWJlbCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmZvcm1hdFtmb3JtYXROYW1lXShjdXJyZW50RGF0ZS5sb2NhbGUobG9jYWxlTmFtZSkpO1xyXG4gICAgICAgICAgICBjaG9vc2VuRm9ybWF0TmFtZSA9IGZvcm1hdE5hbWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0ZXh0V2lkdGggPSAwO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGgud2lkdGhzW21vbnRoSW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGV4dFdpZHRoID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGgud2lkdGhzW21vbnRoSW5kZXhdW2Nob29zZW5Gb3JtYXROYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHggPSBtb250aE9mZnNldDtcclxuICAgICAgICBtb250aHMucHVzaCh7XHJcbiAgICAgICAgICBpbmRleDogbW9udGhJbmRleCxcclxuICAgICAgICAgIGtleTogbW9udGhJbmRleCArICdtJyxcclxuICAgICAgICAgIHgsXHJcbiAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgd2lkdGg6IG1vbnRoV2lkdGgsXHJcbiAgICAgICAgICB0ZXh0V2lkdGgsXHJcbiAgICAgICAgICBjaG9vc2VuRm9ybWF0TmFtZSxcclxuICAgICAgICAgIGhlaWdodDogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguaGVpZ2h0LFxyXG4gICAgICAgICAgbGFiZWxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlLmFkZCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpO1xyXG4gICAgICAgIGlmIChjdXJyZW50RGF0ZS52YWx1ZU9mKCkgPiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZSkge1xyXG4gICAgICAgICAgY3VycmVudERhdGUgPSBkYXlqcyh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtb250aHMubWFwKGl0ZW0gPT4gKHtcclxuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxyXG4gICAgICAgIGNoaWxkcmVuOiBbaXRlbV1cclxuICAgICAgfSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1bSBhbGwgY2FsZW5kYXIgcm93cyBoZWlnaHQgYW5kIHJldHVybiByZXN1bHRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7aW50fVxyXG4gICAgICovXHJcbiAgICBjYWxjdWxhdGVDYWxlbmRhckRpbWVuc2lvbnMoeyBob3VycywgZGF5cywgbW9udGhzIH0pIHtcclxuICAgICAgbGV0IGhlaWdodCA9IDA7XHJcbiAgICAgIGlmICh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmRpc3BsYXkgJiYgaG91cnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGhlaWdodCArPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmRpc3BsYXkgJiYgZGF5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaGVpZ2h0ICs9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmRpc3BsYXkgJiYgbW9udGhzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBoZWlnaHQgKz0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjb21wdXRlZDoge1xyXG4gICAgZGF0ZXMoKSB7XHJcbiAgICAgIGNvbnN0IGhvdXJzID0gdGhpcy5nZW5lcmF0ZUhvdXJzKCk7XHJcbiAgICAgIGNvbnN0IGRheXMgPSB0aGlzLmdlbmVyYXRlRGF5cygpO1xyXG4gICAgICBjb25zdCBtb250aHMgPSB0aGlzLmdlbmVyYXRlTW9udGhzKCk7XHJcbiAgICAgIGNvbnN0IGFsbERhdGVzID0geyBob3VycywgZGF5cywgbW9udGhzIH07XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlQ2FsZW5kYXJEaW1lbnNpb25zKGFsbERhdGVzKTtcclxuICAgICAgcmV0dXJuIGFsbERhdGVzO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsIjwhLS1cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgQ2FsZW5kYXJSb3cgY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IDpjbGFzcz1cIidnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3cgZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LS0nICsgd2hpY2hcIiA6c3R5bGU9XCJyb3dTdHlsZVwiPlxyXG4gICAgPGRpdlxyXG4gICAgICB2LWZvcj1cIihpdGVtLCBpdGVtSW5kZXgpIGluIGl0ZW1zXCJcclxuICAgICAgOmtleT1cIml0ZW0ua2V5XCJcclxuICAgICAgOmNsYXNzPVwiJ2dhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0IGdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0LS0nICsgd2hpY2hcIlxyXG4gICAgICA6c3R5bGU9XCJyZWN0U3R5bGVcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgOmNsYXNzPVwiJ2dhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0LWNoaWxkIGdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0LWNoaWxkLS0nICsgd2hpY2hcIlxyXG4gICAgICAgIHYtZm9yPVwiKGNoaWxkLCBjaGlsZEluZGV4KSBpbiBpdGVtLmNoaWxkcmVuXCJcclxuICAgICAgICA6a2V5PVwiY2hpbGQua2V5XCJcclxuICAgICAgICA6c3R5bGU9XCJyZWN0Q2hpbGRTdHlsZVtpdGVtSW5kZXhdW2NoaWxkSW5kZXhdXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIDpjbGFzcz1cIidnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctdGV4dCBnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctdGV4dC0tJyArIHdoaWNoXCJcclxuICAgICAgICAgIDpzdHlsZT1cInRleHRTdHlsZShjaGlsZClcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IGNoaWxkLmxhYmVsIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0NhbGVuZGFyUm93JyxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIHByb3BzOiBbJ2l0ZW1zJywgJ3doaWNoJ10sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHggcG9zaXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXRUZXh0WChpdGVtKSB7XHJcbiAgICAgIGxldCB4ID0gaXRlbS54ICsgaXRlbS53aWR0aCAvIDIgLSBpdGVtLnRleHRXaWR0aCAvIDI7XHJcbiAgICAgIGlmICh0aGlzLndoaWNoID09PSAnbW9udGgnICYmIHRoaXMucm9vdC5pc0luc2lkZVZpZXdQb3J0KGl0ZW0ueCwgaXRlbS53aWR0aCwgMCkpIHtcclxuICAgICAgICBsZXQgc2Nyb2xsV2lkdGggPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQucmlnaHQgLSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQubGVmdDtcclxuICAgICAgICB4ID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LmxlZnQgKyBzY3JvbGxXaWR0aCAvIDIgLSBpdGVtLnRleHRXaWR0aCAvIDIgKyAyO1xyXG4gICAgICAgIGlmICh4ICsgaXRlbS50ZXh0V2lkdGggKyAyID4gaXRlbS54ICsgaXRlbS53aWR0aCkge1xyXG4gICAgICAgICAgeCA9IGl0ZW0ueCArIGl0ZW0ud2lkdGggLSBpdGVtLnRleHRXaWR0aCAtIDI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh4IDwgaXRlbS54KSB7XHJcbiAgICAgICAgICB4ID0gaXRlbS54ICsgMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHggLSBpdGVtLng7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgcm93U3R5bGUoKSB7XHJcbiAgICAgIHJldHVybiB7IC4uLnRoaXMucm9vdC5zdHlsZVsnY2FsZW5kYXItcm93J10sIC4uLnRoaXMucm9vdC5zdHlsZVsnY2FsZW5kYXItcm93LS0nICsgdGhpcy53aGljaF0gfTtcclxuICAgIH0sXHJcbiAgICByZWN0U3R5bGUoKSB7XHJcbiAgICAgIHJldHVybiB7IC4uLnRoaXMucm9vdC5zdHlsZVsnY2FsZW5kYXItcm93LXJlY3QnXSwgLi4udGhpcy5yb290LnN0eWxlWydjYWxlbmRhci1yb3ctcmVjdC0tJyArIHRoaXMud2hpY2hdIH07XHJcbiAgICB9LFxyXG4gICAgcmVjdENoaWxkU3R5bGUoKSB7XHJcbiAgICAgIGNvbnN0IGJhc2ljU3R5bGUgPSB7XHJcbiAgICAgICAgLi4udGhpcy5yb290LnN0eWxlWydjYWxlbmRhci1yb3ctcmVjdC1jaGlsZCddLFxyXG4gICAgICAgIC4uLnRoaXMucm9vdC5zdHlsZVsnY2FsZW5kYXItcm93LXJlY3QtY2hpbGQtLScgKyB0aGlzLndoaWNoXVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBzdHlsZSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlblN0eWxlID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgY2hpbGRyZW5TdHlsZS5wdXNoKHtcclxuICAgICAgICAgICAgLi4uYmFzaWNTdHlsZSxcclxuICAgICAgICAgICAgd2lkdGg6IGNoaWxkLndpZHRoICsgJ3B4JyxcclxuICAgICAgICAgICAgaGVpZ2h0OiBjaGlsZC5oZWlnaHQgKyAncHgnXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3R5bGUucHVzaChjaGlsZHJlblN0eWxlKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9LFxyXG4gICAgdGV4dFN0eWxlKCkge1xyXG4gICAgICBjb25zdCBiYXNpY1N0eWxlID0ge1xyXG4gICAgICAgIC4uLnRoaXMucm9vdC5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQnXSxcclxuICAgICAgICAuLi50aGlzLnJvb3Quc3R5bGVbJ2NhbGVuZGFyLXJvdy10ZXh0LS0nICsgdGhpcy53aGljaF1cclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIGNoaWxkID0+IHtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IHsgLi4uYmFzaWNTdHlsZSB9O1xyXG4gICAgICAgIGlmICh0aGlzLndoaWNoID09PSAnbW9udGgnKSB7XHJcbiAgICAgICAgICBzdHlsZS5sZWZ0ID0gdGhpcy5nZXRUZXh0WChjaGlsZCkgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPCEtLVxyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBDaGFydCBjb21wb25lbnRcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cclxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXHJcbiAqL1xyXG4tLT5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydFwiIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQnXSB9XCIgcmVmPVwiY2hhcnRcIj5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1jYWxlbmRhci1jb250YWluZXJcIlxyXG4gICAgICByZWY9XCJjaGFydENhbGVuZGFyQ29udGFpbmVyXCJcclxuICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWNhbGVuZGFyLWNvbnRhaW5lciddLFxyXG4gICAgICAgIGhlaWdodDogcm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArICdweCcsXHJcbiAgICAgICAgJ21hcmdpbi1ib3R0b20nOiByb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZ2FwICsgJ3B4J1xyXG4gICAgICB9XCJcclxuICAgID5cclxuICAgICAgPGNhbGVuZGFyPjwvY2FsZW5kYXI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1ncmFwaC1jb250YWluZXJcIlxyXG4gICAgICByZWY9XCJjaGFydEdyYXBoQ29udGFpbmVyXCJcclxuICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWdyYXBoLWNvbnRhaW5lciddLFxyXG4gICAgICAgIGhlaWdodDogcm9vdC5zdGF0ZS5vcHRpb25zLmhlaWdodCAtIHJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHQgKyAncHgnXHJcbiAgICAgIH1cIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtYXJlYSddLFxyXG4gICAgICAgICAgd2lkdGg6IHJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArICdweCcsXHJcbiAgICAgICAgICBoZWlnaHQ6IHJvb3Quc3RhdGUub3B0aW9ucy5yb3dzSGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgIH1cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1ncmFwaFwiXHJcbiAgICAgICAgICByZWY9XCJjaGFydEdyYXBoXCJcclxuICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZ3JhcGgnXSwgaGVpZ2h0OiAnMTAwJScgfVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWdyYXBoLXN2Z1wiXHJcbiAgICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZ3JhcGgtc3ZnJ10gfVwiXHJcbiAgICAgICAgICAgIHJlZj1cImNoYXJ0R3JhcGhTdmdcIlxyXG4gICAgICAgICAgICB4PVwiMFwiXHJcbiAgICAgICAgICAgIHk9XCIwXCJcclxuICAgICAgICAgICAgOndpZHRoPVwicm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoICsgJ3B4J1wiXHJcbiAgICAgICAgICAgIDpoZWlnaHQ9XCJyb290LnN0YXRlLm9wdGlvbnMuYWxsVmlzaWJsZVRhc2tzSGVpZ2h0ICsgJ3B4J1wiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGF5cy1oaWdobGlnaHQ+PC9kYXlzLWhpZ2hsaWdodD5cclxuICAgICAgICAgICAgPGdyaWQ+PC9ncmlkPlxyXG4gICAgICAgICAgICA8ZGVwZW5kZW5jeS1saW5lcyA6dGFza3M9XCJyb290LnZpc2libGVUYXNrc1wiPjwvZGVwZW5kZW5jeS1saW5lcz5cclxuICAgICAgICAgICAgPGdcclxuICAgICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy13cmFwcGVyXCJcclxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy13cmFwcGVyJ10gfVwiXHJcbiAgICAgICAgICAgICAgdi1mb3I9XCJ0YXNrIGluIHJvb3QudmlzaWJsZVRhc2tzXCJcclxuICAgICAgICAgICAgICA6dGFzaz1cInRhc2tcIlxyXG4gICAgICAgICAgICAgIDprZXk9XCJ0YXNrLmlkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxjb21wb25lbnQgOnRhc2s9XCJ0YXNrXCIgOmlzPVwidGFzay50eXBlXCI+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEdyaWQgZnJvbSAnLi9HcmlkLnZ1ZSc7XHJcbmltcG9ydCBEYXlzSGlnaGxpZ2h0IGZyb20gJy4vRGF5c0hpZ2hsaWdodC52dWUnO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi4vQ2FsZW5kYXIvQ2FsZW5kYXIudnVlJztcclxuaW1wb3J0IERlcGVuZGVuY3lMaW5lcyBmcm9tICcuL0RlcGVuZGVuY3lMaW5lcy52dWUnO1xyXG5pbXBvcnQgVGFzayBmcm9tICcuL1Jvdy9UYXNrLnZ1ZSc7XHJcbmltcG9ydCBNaWxlc3RvbmUgZnJvbSAnLi9Sb3cvTWlsZXN0b25lLnZ1ZSc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUm93L1Byb2plY3QudnVlJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdDaGFydCcsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgR3JpZCxcclxuICAgIERlcGVuZGVuY3lMaW5lcyxcclxuICAgIENhbGVuZGFyLFxyXG4gICAgVGFzayxcclxuICAgIE1pbGVzdG9uZSxcclxuICAgIFByb2plY3QsXHJcbiAgICBEYXlzSGlnaGxpZ2h0XHJcbiAgfSxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtb3Zpbmc6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogTW91bnRlZFxyXG4gICAqL1xyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy5jaGFydCA9IHRoaXMuJHJlZnMuY2hhcnQ7XHJcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy5jaGFydENhbGVuZGFyQ29udGFpbmVyID0gdGhpcy4kcmVmcy5jaGFydENhbGVuZGFyQ29udGFpbmVyO1xyXG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMuY2hhcnRHcmFwaENvbnRhaW5lciA9IHRoaXMuJHJlZnMuY2hhcnRHcmFwaENvbnRhaW5lcjtcclxuICAgIHRoaXMucm9vdC5zdGF0ZS5yZWZzLmNoYXJ0R3JhcGggPSB0aGlzLiRyZWZzLmNoYXJ0R3JhcGg7XHJcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy5jaGFydEdyYXBoU3ZnID0gdGhpcy4kcmVmcy5jaGFydEdyYXBoU3ZnO1xyXG4gIH0sXHJcblxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCB2aWV3IGJveFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGdldFZpZXdCb3goKSB7XHJcbiAgICAgIHJldHVybiBgMCAwICR7dGhpcy5yb290LnN0YXRlLm9wdGlvbnMud2lkdGh9ICR7dGhpcy5yb290LnN0YXRlLm9wdGlvbnMuYWxsVmlzaWJsZVRhc2tzSGVpZ2h0fWA7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPCEtLVxyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBEYXlzIGhpZ2hsaWdodCBjb21wb25lbnRcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cclxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXHJcbiAqL1xyXG4tLT5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8Z1xyXG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1kYXlzLWhpZ2hsaWdodC1jb250YWluZXJcIlxyXG4gICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1kYXlzLWhpZ2hsaWdodC1jb250YWluZXInXSB9XCJcclxuICAgIHYtaWY9XCJzaG93V29ya2luZ0RheXNcIlxyXG4gID5cclxuICAgIDxyZWN0XHJcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZGF5cy1oaWdobGlnaHQtcmVjdFwiXHJcbiAgICAgIHYtZm9yPVwiZGF5IGluIHdvcmtpbmdEYXlzXCJcclxuICAgICAgOmtleT1cImdldEtleShkYXkpXCJcclxuICAgICAgOng9XCJkYXkub2Zmc2V0LnB4XCJcclxuICAgICAgeT1cIjBcIlxyXG4gICAgICA6d2lkdGg9XCJkYXkud2lkdGgucHhcIlxyXG4gICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1kYXlzLWhpZ2hsaWdodC1yZWN0J10gfVwiXHJcbiAgICA+PC9yZWN0PlxyXG4gIDwvZz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnRGF5c0hpZ2hsaWdodCcsXHJcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQga2V5XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRheVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30ga2V5IGlkZWludGlmaWVyIGZvciBsb29wXHJcbiAgICAgKi9cclxuICAgIGdldEtleShkYXkpIHtcclxuICAgICAgcmV0dXJuIGRheWpzKGRheS50aW1lKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCB3b3JraW5nIGRheXNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XHJcbiAgICAgKi9cclxuICAgIHdvcmtpbmdEYXlzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHMuZmlsdGVyKHN0ZXAgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci53b3JraW5nRGF5cy5pbmRleE9mKGRheWpzKHN0ZXAudGltZSkuZGF5KCkpID09PSAtMTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdyB3b3JraW5nIGRheXM/XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2x9XHJcbiAgICAgKi9cclxuICAgIHNob3dXb3JraW5nRGF5cygpIHtcclxuICAgICAgY29uc3QgY2FsZW5kYXIgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhcjtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHR5cGVvZiBjYWxlbmRhci53b3JraW5nRGF5cyAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICBBcnJheS5pc0FycmF5KGNhbGVuZGFyLndvcmtpbmdEYXlzKSAmJlxyXG4gICAgICAgIGNhbGVuZGFyLndvcmtpbmdEYXlzLmxlbmd0aFxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPCEtLVxyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBEZXBlbmRlbmN5TGluZXMgY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8c3ZnXHJcbiAgICB4PVwiMFwiXHJcbiAgICB5PVwiMFwiXHJcbiAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWRlcGVuZGVuY3ktbGluZXMtY29udGFpbmVyXCJcclxuICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1jb250YWluZXInXSB9XCJcclxuICA+XHJcbiAgICA8ZyB2LWZvcj1cInRhc2sgaW4gZGVwZW5kZW5jeVRhc2tzXCIgOmtleT1cInRhc2suaWRcIiA6dGFzaz1cInRhc2tcIj5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWRlcGVuZGVuY3ktbGluZXMtcGF0aFwiXHJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1kZXBlbmRlbmN5LWxpbmVzLXBhdGgnXSwgLi4udGFzay5zdHlsZVsnY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoJ10gfVwiXHJcbiAgICAgICAgdi1mb3I9XCJkZXBlbmRlbmN5TGluZSBpbiB0YXNrLmRlcGVuZGVuY3lMaW5lc1wiXHJcbiAgICAgICAgOmtleT1cImRlcGVuZGVuY3lMaW5lLmlkXCJcclxuICAgICAgICA6dGFzaz1cInRhc2tcIlxyXG4gICAgICAgIDpkPVwiZGVwZW5kZW5jeUxpbmUucG9pbnRzXCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgIDwvZz5cclxuICA8L3N2Zz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnRGVwZW5kZW5jeUxpbmVzJyxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIHByb3BzOiBbJ3Rhc2tzJ10sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHBhdGggcG9pbnRzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHthbnl9IGZyb21UYXNrSWRcclxuICAgICAqIEBwYXJhbSB7YW55fSB0b1Rhc2tJZFxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0UG9pbnRzKGZyb21UYXNrSWQsIHRvVGFza0lkKSB7XHJcbiAgICAgIGNvbnN0IGZyb21UYXNrID0gdGhpcy5yb290LmdldFRhc2soZnJvbVRhc2tJZCk7XHJcbiAgICAgIGNvbnN0IHRvVGFzayA9IHRoaXMucm9vdC5nZXRUYXNrKHRvVGFza0lkKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGZyb21UYXNrID09PSBudWxsIHx8XHJcbiAgICAgICAgdG9UYXNrID09PSBudWxsIHx8XHJcbiAgICAgICAgIXRoaXMucm9vdC5pc1Rhc2tWaXNpYmxlKHRvVGFzaykgfHxcclxuICAgICAgICAhdGhpcy5yb290LmlzVGFza1Zpc2libGUoZnJvbVRhc2spXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHN0YXJ0WCA9IGZyb21UYXNrLnggKyBmcm9tVGFzay53aWR0aDtcclxuICAgICAgY29uc3Qgc3RhcnRZID0gZnJvbVRhc2sueSArIGZyb21UYXNrLmhlaWdodCAvIDI7XHJcbiAgICAgIGNvbnN0IHN0b3BYID0gdG9UYXNrLng7XHJcbiAgICAgIGNvbnN0IHN0b3BZID0gdG9UYXNrLnkgKyB0b1Rhc2suaGVpZ2h0IC8gMjtcclxuICAgICAgY29uc3QgZGlzdGFuY2VYID0gc3RvcFggLSBzdGFydFg7XHJcbiAgICAgIGxldCBkaXN0YW5jZVk7XHJcbiAgICAgIGxldCB5TXVsdGlwbGllciA9IDE7XHJcbiAgICAgIGlmIChzdG9wWSA+PSBzdGFydFkpIHtcclxuICAgICAgICBkaXN0YW5jZVkgPSBzdG9wWSAtIHN0YXJ0WTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXN0YW5jZVkgPSBzdGFydFkgLSBzdG9wWTtcclxuICAgICAgICB5TXVsdGlwbGllciA9IC0xO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG9mZnNldCA9IDEwO1xyXG4gICAgICBjb25zdCByb3VuZG5lc3MgPSA0O1xyXG4gICAgICBjb25zdCBpc0JlZm9yZSA9IGRpc3RhbmNlWCA8PSBvZmZzZXQgKyByb3VuZG5lc3M7XHJcbiAgICAgIGxldCBwb2ludHMgPSBgTSAke3N0YXJ0WH0gJHtzdGFydFl9XHJcbiAgICAgICAgICBMICR7c3RhcnRYICsgb2Zmc2V0fSwke3N0YXJ0WX0gYDtcclxuICAgICAgaWYgKGlzQmVmb3JlKSB7XHJcbiAgICAgICAgcG9pbnRzICs9IGBRICR7c3RhcnRYICsgb2Zmc2V0ICsgcm91bmRuZXNzfSwke3N0YXJ0WX0gJHtzdGFydFggKyBvZmZzZXQgKyByb3VuZG5lc3N9LCR7c3RhcnRZICtcclxuICAgICAgICAgIHJvdW5kbmVzcyAqIHlNdWx0aXBsaWVyfVxyXG4gICAgICAgICAgICBMICR7c3RhcnRYICsgb2Zmc2V0ICsgcm91bmRuZXNzfSwke3N0YXJ0WSArIChkaXN0YW5jZVkgKiB5TXVsdGlwbGllcikgLyAyIC0gcm91bmRuZXNzICogeU11bHRpcGxpZXJ9XHJcbiAgICAgICAgICAgIFEgJHtzdGFydFggKyBvZmZzZXQgKyByb3VuZG5lc3N9LCR7c3RhcnRZICsgKGRpc3RhbmNlWSAqIHlNdWx0aXBsaWVyKSAvIDJ9ICR7c3RhcnRYICsgb2Zmc2V0fSwke3N0YXJ0WSArXHJcbiAgICAgICAgICAoZGlzdGFuY2VZICogeU11bHRpcGxpZXIpIC8gMn1cclxuICAgICAgICAgICAgTCAke3N0YXJ0WCAtIG9mZnNldCArIGRpc3RhbmNlWH0sJHtzdGFydFkgKyAoZGlzdGFuY2VZICogeU11bHRpcGxpZXIpIC8gMn1cclxuICAgICAgICAgICAgUSAke3N0YXJ0WCAtIG9mZnNldCArIGRpc3RhbmNlWCAtIHJvdW5kbmVzc30sJHtzdGFydFkgKyAoZGlzdGFuY2VZICogeU11bHRpcGxpZXIpIC8gMn0gJHtzdGFydFggLVxyXG4gICAgICAgICAgb2Zmc2V0ICtcclxuICAgICAgICAgIGRpc3RhbmNlWCAtXHJcbiAgICAgICAgICByb3VuZG5lc3N9LCR7c3RhcnRZICsgKGRpc3RhbmNlWSAqIHlNdWx0aXBsaWVyKSAvIDIgKyByb3VuZG5lc3MgKiB5TXVsdGlwbGllcn1cclxuICAgICAgICAgICAgTCAke3N0YXJ0WCAtIG9mZnNldCArIGRpc3RhbmNlWCAtIHJvdW5kbmVzc30sJHtzdG9wWSAtIHJvdW5kbmVzcyAqIHlNdWx0aXBsaWVyfVxyXG4gICAgICAgICAgICBRICR7c3RhcnRYIC0gb2Zmc2V0ICsgZGlzdGFuY2VYIC0gcm91bmRuZXNzfSwke3N0b3BZfSAke3N0YXJ0WCAtIG9mZnNldCArIGRpc3RhbmNlWH0sJHtzdG9wWX1cclxuICAgICAgICAgICAgTCAke3N0b3BYfSwke3N0b3BZfWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9pbnRzICs9IGBMICR7c3RhcnRYICsgZGlzdGFuY2VYIC8gMiAtIHJvdW5kbmVzc30sJHtzdGFydFl9XHJcbiAgICAgICAgICAgIFEgJHtzdGFydFggKyBkaXN0YW5jZVggLyAyfSwke3N0YXJ0WX0gJHtzdGFydFggKyBkaXN0YW5jZVggLyAyfSwke3N0YXJ0WSArIHJvdW5kbmVzcyAqIHlNdWx0aXBsaWVyfVxyXG4gICAgICAgICAgICBMICR7c3RhcnRYICsgZGlzdGFuY2VYIC8gMn0sJHtzdG9wWSAtIHJvdW5kbmVzcyAqIHlNdWx0aXBsaWVyfVxyXG4gICAgICAgICAgICBRICR7c3RhcnRYICsgZGlzdGFuY2VYIC8gMn0sJHtzdG9wWX0gJHtzdGFydFggKyBkaXN0YW5jZVggLyAyICsgcm91bmRuZXNzfSwke3N0b3BZfVxyXG4gICAgICAgICAgICBMICR7c3RvcFh9LCR7c3RvcFl9YDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9pbnRzO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRhc2tzIHdoaWNoIGFyZSBkZXBlbmRlbnQgb24gb3RoZXIgdGFza3NcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XHJcbiAgICAgKi9cclxuICAgIGRlcGVuZGVuY3lUYXNrcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFza3NcclxuICAgICAgICAuZmlsdGVyKHRhc2sgPT4gdHlwZW9mIHRhc2suZGVwZW5kZW50T24gIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgIC5tYXAodGFzayA9PiB7XHJcbiAgICAgICAgICB0YXNrLmRlcGVuZGVuY3lMaW5lcyA9IHRhc2suZGVwZW5kZW50T24ubWFwKGlkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgcG9pbnRzOiB0aGlzLmdldFBvaW50cyhpZCwgdGFzay5pZCkgfTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHRhc2s7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKHRhc2sgPT4gdGFzay5kZXBlbmRlbmN5TGluZXMucG9pbnRzICE9PSBudWxsKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCI8IS0tXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IEdyaWQgY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8c3ZnXHJcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZXMtd3JhcHBlclwiXHJcbiAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2dyaWQtbGluZXMtd3JhcHBlciddIH1cIlxyXG4gICAgcmVmPVwiY2hhcnRcIlxyXG4gICAgeD1cIjBcIlxyXG4gICAgeT1cIjBcIlxyXG4gICAgOndpZHRoPVwicm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoXCJcclxuICAgIDpoZWlnaHQ9XCJyb290LnN0YXRlLm9wdGlvbnMuYWxsVmlzaWJsZVRhc2tzSGVpZ2h0XCJcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gID5cclxuICAgIDxnIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fZ3JpZC1saW5lc1wiIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnZ3JpZC1saW5lcyddIH1cIj5cclxuICAgICAgPGxpbmVcclxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZS1ob3Jpem9udGFsXCJcclxuICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2dyaWQtbGluZS1ob3Jpem9udGFsJ10gfVwiXHJcbiAgICAgICAgdi1mb3I9XCJsaW5lIGluIGhvcml6b250YWxMaW5lc1wiXHJcbiAgICAgICAgOmtleT1cImxpbmUua2V5XCJcclxuICAgICAgICA6eDE9XCJsaW5lLngxXCJcclxuICAgICAgICA6eTE9XCJsaW5lLnkxXCJcclxuICAgICAgICA6eDI9XCJsaW5lLngyXCJcclxuICAgICAgICA6eTI9XCJsaW5lLnkyXCJcclxuICAgICAgPjwvbGluZT5cclxuICAgICAgPGxpbmVcclxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZS12ZXJ0aWNhbFwiXHJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydncmlkLWxpbmUtdmVydGljYWwnXSB9XCJcclxuICAgICAgICB2LWZvcj1cImxpbmUgaW4gdmVydGljYWxMaW5lc1wiXHJcbiAgICAgICAgOmtleT1cImxpbmUua2V5XCJcclxuICAgICAgICA6eDE9XCJsaW5lLngxXCJcclxuICAgICAgICA6eTE9XCJsaW5lLnkxXCJcclxuICAgICAgICA6eDI9XCJsaW5lLngyXCJcclxuICAgICAgICA6eTI9XCJsaW5lLnkyXCJcclxuICAgICAgPjwvbGluZT5cclxuICAgICAgPGxpbmVcclxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZS10aW1lXCJcclxuICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2dyaWQtbGluZS10aW1lJ10gfVwiXHJcbiAgICAgICAgOngxPVwidGltZUxpbmVQb3NpdGlvbi54XCJcclxuICAgICAgICA6eTE9XCJ0aW1lTGluZVBvc2l0aW9uLnkxXCJcclxuICAgICAgICA6eDI9XCJ0aW1lTGluZVBvc2l0aW9uLnhcIlxyXG4gICAgICAgIDp5Mj1cInRpbWVMaW5lUG9zaXRpb24ueTJcIlxyXG4gICAgICA+PC9saW5lPlxyXG4gICAgPC9nPlxyXG4gIDwvc3ZnPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdHcmlkJyxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDcmVhdGVkXHJcbiAgICovXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMucm9vdC4kb24oJ3JlY2VudGVyUG9zaXRpb24nLCB0aGlzLnJlY2VudGVyUG9zaXRpb24pO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIE1vdW50ZWRcclxuICAgKi9cclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgLy8gYmVjYXVzZSBvZiBzdHVwaWQgc2xpZGVyIDovXHJcbiAgICAgICAgdGhpcy5yb290LnNjcm9sbFRvVGltZSh0aGlzLnRpbWVMaW5lUG9zaXRpb24udGltZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWNlbnRlciBwb3NpdGlvbiAtIGdvIHRvIGN1cnJlbnQgdGltZSBsaW5lXHJcbiAgICAgKi9cclxuICAgIHJlY2VudGVyUG9zaXRpb24oKSB7XHJcbiAgICAgIHRoaXMucm9vdC5zY3JvbGxUb1RpbWUodGhpcy50aW1lTGluZVBvc2l0aW9uLnRpbWUpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIHZlcnRpY2FsIGxpbmVzIG9mIHRoZSBncmlkXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2FycmF5fVxyXG4gICAgICovXHJcbiAgICB2ZXJ0aWNhbExpbmVzKCkge1xyXG4gICAgICBsZXQgbGluZXMgPSBbXTtcclxuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnJvb3Quc3RhdGU7XHJcbiAgICAgIHN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICBpZiAodGhpcy5yb290LmlzSW5zaWRlVmlld1BvcnQoc3RlcC5vZmZzZXQucHgsIDEpKSB7XHJcbiAgICAgICAgICBsaW5lcy5wdXNoKHtcclxuICAgICAgICAgICAga2V5OiBzdGVwLnRpbWUsXHJcbiAgICAgICAgICAgIHgxOiBzdGVwLm9mZnNldC5weCxcclxuICAgICAgICAgICAgeTE6IDAsXHJcbiAgICAgICAgICAgIHgyOiBzdGVwLm9mZnNldC5weCxcclxuICAgICAgICAgICAgeTI6XHJcbiAgICAgICAgICAgICAgc3RhdGUudGFza3MubGVuZ3RoICogKHN0YXRlLm9wdGlvbnMucm93LmhlaWdodCArIHN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDIpICtcclxuICAgICAgICAgICAgICB0aGlzLnJvb3Quc3R5bGVbJ2dyaWQtbGluZS12ZXJ0aWNhbCddWydzdHJva2Utd2lkdGgnXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGxpbmVzO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIGhvcml6b250YWwgbGluZXMgb2YgdGhlIGdyaWRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XHJcbiAgICAgKi9cclxuICAgIGhvcml6b250YWxMaW5lcygpIHtcclxuICAgICAgbGV0IGxpbmVzID0gW107XHJcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnM7XHJcbiAgICAgIGxldCB0YXNrcyA9IHRoaXMucm9vdC52aXNpYmxlVGFza3M7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMCwgbGVuID0gdGFza3MubGVuZ3RoOyBpbmRleCA8PSBsZW47IGluZGV4KyspIHtcclxuICAgICAgICBjb25zdCB5ID1cclxuICAgICAgICAgIGluZGV4ICogKHN0YXRlLnJvdy5oZWlnaHQgKyBzdGF0ZS5jaGFydC5ncmlkLmhvcml6b250YWwuZ2FwICogMikgK1xyXG4gICAgICAgICAgdGhpcy5yb290LnN0eWxlWydncmlkLWxpbmUtdmVydGljYWwnXVsnc3Ryb2tlLXdpZHRoJ10gLyAyO1xyXG4gICAgICAgIGxpbmVzLnB1c2goe1xyXG4gICAgICAgICAga2V5OiAnaGwnICsgaW5kZXgsXHJcbiAgICAgICAgICB4MTogMCxcclxuICAgICAgICAgIHkxOiB5LFxyXG4gICAgICAgICAgeDI6ICcxMDAlJyxcclxuICAgICAgICAgIHkyOiB5XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxpbmVzO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHNwZWNpZmllZCBsaW5lIGlzIGluc2lkZSB2aWV3cG9ydCAodmlzaWJsZSlcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XHJcbiAgICAgKi9cclxuICAgIGluVmlld1BvcnQoKSB7XHJcbiAgICAgIHJldHVybiBsaW5lID0+IHtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zO1xyXG4gICAgICAgIHJldHVybiBsaW5lLngxID49IHN0YXRlLnNjcm9sbC5jaGFydC5sZWZ0ICYmIGxpbmUueDEgPD0gc3RhdGUuc2Nyb2xsLmNoYXJ0LnJpZ2h0O1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBjdXJyZW50IHRpbWUgbGluZSBwb3NpdGlvblxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XHJcbiAgICAgKi9cclxuICAgIHRpbWVMaW5lUG9zaXRpb24oKSB7XHJcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gZC5nZXRUaW1lKCk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRPZmZzZXQgPSB0aGlzLnJvb3QudGltZVRvUGl4ZWxPZmZzZXRYKGN1cnJlbnQpO1xyXG4gICAgICBjb25zdCB0aW1lTGluZSA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHkxOiAwLFxyXG4gICAgICAgIHkyOiAnMTAwJScsXHJcbiAgICAgICAgZGF0ZVRpbWU6ICcnLFxyXG4gICAgICAgIHRpbWU6IGN1cnJlbnRcclxuICAgICAgfTtcclxuICAgICAgdGltZUxpbmUueCA9IGN1cnJlbnRPZmZzZXQ7XHJcbiAgICAgIHRpbWVMaW5lLmRhdGVUaW1lID0gZC50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuICAgICAgcmV0dXJuIHRpbWVMaW5lO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsIjwhLS1cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgUHJvZ3Jlc3NCYXIgY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8Z1xyXG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXdyYXBwZXJcIlxyXG4gICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXdyYXBwZXInXSwgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci13cmFwcGVyJ10gfVwiXHJcbiAgPlxyXG4gICAgPGRlZnM+XHJcbiAgICAgIDxwYXR0ZXJuXHJcbiAgICAgICAgaWQ9XCJkaWFnb25hbEhhdGNoXCJcclxuICAgICAgICA6d2lkdGg9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQucHJvZ3Jlc3Mud2lkdGhcIlxyXG4gICAgICAgIDpoZWlnaHQ9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQucHJvZ3Jlc3Mud2lkdGhcIlxyXG4gICAgICAgIHBhdHRlcm5UcmFuc2Zvcm09XCJyb3RhdGUoNDUgMCAwKVwiXHJcbiAgICAgICAgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGxpbmVcclxuICAgICAgICAgIGNsYXNzPVwiY2hhcnQtcm93LXByb2dyZXNzLWJhci1saW5lXCJcclxuICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci1saW5lJ10sIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItbGluZSddIH1cIlxyXG4gICAgICAgICAgeDE9XCIwXCJcclxuICAgICAgICAgIHkxPVwiMFwiXHJcbiAgICAgICAgICB4Mj1cIjBcIlxyXG4gICAgICAgICAgOnkyPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnByb2dyZXNzLndpZHRoXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3BhdHRlcm4+XHJcbiAgICA8L2RlZnM+XHJcbiAgICA8cmVjdFxyXG4gICAgICB2LWlmPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnByb2dyZXNzLmJhclwiXHJcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXByb2dyZXNzLWJhci1zb2xpZFwiXHJcbiAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci1zb2xpZCddLCAuLi50YXNrLnN0eWxlWydjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXNvbGlkJ10gfVwiXHJcbiAgICAgIHg9XCIwXCJcclxuICAgICAgeT1cIjBcIlxyXG4gICAgICA6d2lkdGg9XCJnZXRQcm9ncmVzc1dpZHRoXCJcclxuICAgID48L3JlY3Q+XHJcbiAgICA8ZyB2LWlmPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnByb2dyZXNzLnBhdHRlcm5cIj5cclxuICAgICAgPHJlY3RcclxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItcGF0dGVyblwiXHJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXBhdHRlcm4nXSwgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci1wYXR0ZXJuJ10gfVwiXHJcbiAgICAgICAgOng9XCJnZXRQcm9ncmVzc1dpZHRoXCJcclxuICAgICAgICB5PVwiMFwiXHJcbiAgICAgICAgOndpZHRoPVwiMTAwIC0gdGFzay5wcm9ncmVzcyArICclJ1wiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgID48L3JlY3Q+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLW91dGxpbmVcIlxyXG4gICAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItb3V0bGluZSddLFxyXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnYmFzZSddLFxyXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci1vdXRsaW5lJ11cclxuICAgICAgICB9XCJcclxuICAgICAgICA6ZD1cImdldExpbmVQb2ludHNcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgPC9nPlxyXG4gIDwvZz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnUHJvZ3Jlc3NCYXInLFxyXG4gIGluamVjdDogWydyb290J10sXHJcbiAgcHJvcHM6IFsndGFzayddLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHByb2dyZXNzIHdpZHRoXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0UHJvZ3Jlc3NXaWR0aCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFzay5wcm9ncmVzcyArICclJztcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgbGluZSBwb2ludHNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRMaW5lUG9pbnRzKCkge1xyXG4gICAgICBjb25zdCBzdGFydCA9ICh0aGlzLnRhc2sud2lkdGggLyAxMDApICogdGhpcy50YXNrLnByb2dyZXNzO1xyXG4gICAgICByZXR1cm4gYE0gJHtzdGFydH0gMCBMICR7c3RhcnR9ICR7dGhpcy50YXNrLmhlaWdodH1gO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBzb2xpZCBzdHlsZVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGdldFNvbGlkU3R5bGUoKSB7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5wcm9ncmVzcy5zdHlsZXMuYmFyLnNvbGlkLCB0aGlzLnRhc2sucHJvZ3Jlc3NCYXJTdHlsZS5iYXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBsaW5lIHN0eWxlXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge29iamVjdH1cclxuICAgICAqL1xyXG4gICAgZ2V0TGluZVN0eWxlKCkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzdHJva2U6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnJvdy5zdHlsZXMuYmFyLnN0cm9rZSArICdhMCcsXHJcbiAgICAgICAgICAnc3Ryb2tlLXdpZHRoJzogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMucm93LnN0eWxlcy5iYXJbJ3N0cm9rZS13aWR0aCddIC8gMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpcy50YXNrLnN0eWxlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPCEtLVxyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBNaWxlc3RvbmUgY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8Z1xyXG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXdyYXBwZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LW1pbGVzdG9uZS13cmFwcGVyXCJcclxuICAgIDpzdHlsZT1cIntcclxuICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LWJhci13cmFwcGVyJ10sXHJcbiAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1taWxlc3RvbmUtd3JhcHBlciddLFxyXG4gICAgICAuLi50YXNrLnN0eWxlWydjaGFydC1yb3ctYmFyLXdyYXBwZXInXVxyXG4gICAgfVwiXHJcbiAgPlxyXG4gICAgPGZvcmVpZ25PYmplY3RcclxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlciBnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlci0tbWlsZXN0b25lXCJcclxuICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWV4cGFuZGVyJ10sXHJcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZXhwYW5kZXItLW1pbGVzdG9uZSddLFxyXG4gICAgICAgIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LWV4cGFuZGVyJ11cclxuICAgICAgfVwiXHJcbiAgICAgIDp4PVwidGFzay54IC0gcm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLm9mZnNldCAtIHJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXCJcclxuICAgICAgOnk9XCJ0YXNrLnkgKyAocm9vdC5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgLSByb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSkgLyAyXCJcclxuICAgICAgOndpZHRoPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcIlxyXG4gICAgICA6aGVpZ2h0PVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcIlxyXG4gICAgICB2LWlmPVwiZGlzcGxheUV4cGFuZGVyXCJcclxuICAgID5cclxuICAgICAgPGV4cGFuZGVyIDp0YXNrcz1cIlt0YXNrXVwiIDpvcHRpb25zPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyXCIgdHlwZT1cImNoYXJ0XCI+PC9leHBhbmRlcj5cclxuICAgIDwvZm9yZWlnbk9iamVjdD5cclxuICAgIDxzdmdcclxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1taWxlc3RvbmVcIlxyXG4gICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1iYXInXSwgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LW1pbGVzdG9uZSddLCAuLi50YXNrLnN0eWxlWydjaGFydC1yb3ctYmFyJ10gfVwiXHJcbiAgICAgIDp4PVwidGFzay54XCJcclxuICAgICAgOnk9XCJ0YXNrLnlcIlxyXG4gICAgICA6d2lkdGg9XCJ0YXNrLndpZHRoXCJcclxuICAgICAgOmhlaWdodD1cInRhc2suaGVpZ2h0XCJcclxuICAgICAgOnZpZXdCb3g9XCJgMCAwICR7dGFzay53aWR0aH0gJHt0YXNrLmhlaWdodH1gXCJcclxuICAgICAgQGNsaWNrPVwiZW1pdEV2ZW50KCdjbGljaycsICRldmVudClcIlxyXG4gICAgICBAbW91c2VlbnRlcj1cImVtaXRFdmVudCgnbW91c2VlbnRlcicsICRldmVudClcIlxyXG4gICAgICBAbW91c2VvdmVyPVwiZW1pdEV2ZW50KCdtb3VzZW92ZXInLCAkZXZlbnQpXCJcclxuICAgICAgQG1vdXNlb3V0PVwiZW1pdEV2ZW50KCdtb3VzZW91dCcsICRldmVudClcIlxyXG4gICAgICBAbW91c2Vtb3ZlPVwiZW1pdEV2ZW50KCdtb3VzZW1vdmUnLCAkZXZlbnQpXCJcclxuICAgICAgQG1vdXNlZG93bj1cImVtaXRFdmVudCgnbW91c2Vkb3duJywgJGV2ZW50KVwiXHJcbiAgICAgIEBtb3VzZXVwPVwiZW1pdEV2ZW50KCdtb3VzZXVwJywgJGV2ZW50KVwiXHJcbiAgICAgIEBtb3VzZXdoZWVsPVwiZW1pdEV2ZW50KCdtb3VzZXdoZWVsJywgJGV2ZW50KVwiXHJcbiAgICAgIEB0b3VjaHN0YXJ0PVwiZW1pdEV2ZW50KCd0b3VjaHN0YXJ0JywgJGV2ZW50KVwiXHJcbiAgICAgIEB0b3VjaG1vdmU9XCJlbWl0RXZlbnQoJ3RvdWNobW92ZScsICRldmVudClcIlxyXG4gICAgICBAdG91Y2hlbmQ9XCJlbWl0RXZlbnQoJ3RvdWNoZW5kJywgJGV2ZW50KVwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8Y2xpcFBhdGggOmlkPVwiY2xpcFBhdGhJZFwiPlxyXG4gICAgICAgICAgPHBvbHlnb24gOnBvaW50cz1cImdldFBvaW50c1wiPjwvcG9seWdvbj5cclxuICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICAgIDxwb2x5Z29uXHJcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXBvbHlnb24gZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LW1pbGVzdG9uZS1wb2x5Z29uXCJcclxuICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctYmFyLXBvbHlnb24nXSxcclxuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1taWxlc3RvbmUtcG9seWdvbiddLFxyXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnYmFzZSddLFxyXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LWJhci1wb2x5Z29uJ11cclxuICAgICAgICB9XCJcclxuICAgICAgICA6cG9pbnRzPVwiZ2V0UG9pbnRzXCJcclxuICAgICAgPjwvcG9seWdvbj5cclxuICAgICAgPHByb2dyZXNzLWJhciA6dGFzaz1cInRhc2tcIiA6Y2xpcC1wYXRoPVwiJ3VybCgjJyArIGNsaXBQYXRoSWQgKyAnKSdcIj48L3Byb2dyZXNzLWJhcj5cclxuICAgIDwvc3ZnPlxyXG4gICAgPGNoYXJ0LXRleHQgOnRhc2s9XCJ0YXNrXCIgdi1pZj1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC50ZXh0LmRpc3BsYXlcIj48L2NoYXJ0LXRleHQ+XHJcbiAgPC9nPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IENoYXJ0VGV4dCBmcm9tICcuLi9UZXh0LnZ1ZSc7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi9Qcm9ncmVzc0Jhci52dWUnO1xyXG5pbXBvcnQgRXhwYW5kZXIgZnJvbSAnLi4vLi4vRXhwYW5kZXIudnVlJztcclxuaW1wb3J0IHRhc2tNaXhpbiBmcm9tICcuL1Rhc2subWl4aW4uanMnO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ01pbGVzdG9uZScsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgQ2hhcnRUZXh0LFxyXG4gICAgUHJvZ3Jlc3NCYXIsXHJcbiAgICBFeHBhbmRlclxyXG4gIH0sXHJcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcclxuICBwcm9wczogWyd0YXNrJ10sXHJcbiAgbWl4aW5zOiBbdGFza01peGluXSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNsaXAgcGF0aCBpZFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGNsaXBQYXRoSWQoKSB7XHJcbiAgICAgIHJldHVybiAnZ2FudHQtZWxhc3RpY19fbWlsZXN0b25lLWNsaXAtcGF0aC0nICsgdGhpcy50YXNrLmlkO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBwb2ludHNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRQb2ludHMoKSB7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnRhc2s7XHJcbiAgICAgIGNvbnN0IGZpZnR5ID0gdGFzay5oZWlnaHQgLyAyO1xyXG4gICAgICBsZXQgb2Zmc2V0ID0gZmlmdHk7XHJcbiAgICAgIGlmICh0YXNrLndpZHRoIC8gMiAtIG9mZnNldCA8IDApIHtcclxuICAgICAgICBvZmZzZXQgPSB0YXNrLndpZHRoIC8gMjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYDAsJHtmaWZ0eX1cclxuICAgICAgICAke29mZnNldH0sMFxyXG4gICAgICAgICR7dGFzay53aWR0aCAtIG9mZnNldH0sMFxyXG4gICAgICAgICR7dGFzay53aWR0aH0sJHtmaWZ0eX1cclxuICAgICAgICAke3Rhc2sud2lkdGggLSBvZmZzZXR9LCR7dGFzay5oZWlnaHR9XHJcbiAgICAgICAgJHtvZmZzZXR9LCR7dGFzay5oZWlnaHR9YDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCI8IS0tXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IFByb2plY3QgY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8Z1xyXG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXdyYXBwZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXByb2plY3Qtd3JhcHBlclwiXHJcbiAgICA6c3R5bGU9XCJ7XHJcbiAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1iYXItd3JhcHBlciddLFxyXG4gICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctcHJvamVjdC13cmFwcGVyJ10sXHJcbiAgICAgIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1iYXItd3JhcHBlciddXHJcbiAgICB9XCJcclxuICA+XHJcbiAgICA8Zm9yZWlnbk9iamVjdFxyXG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWV4cGFuZGVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LWV4cGFuZGVyLS1wcm9qZWN0XCJcclxuICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWV4cGFuZGVyJ10sXHJcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZXhwYW5kZXItLXByb2plY3QnXSxcclxuICAgICAgICAuLi50YXNrLnN0eWxlWydjaGFydC1leHBhbmRlciddXHJcbiAgICAgIH1cIlxyXG4gICAgICA6eD1cInRhc2sueCAtIHJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5vZmZzZXQgLSByb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZVwiXHJcbiAgICAgIDp5PVwidGFzay55ICsgKHJvb3Quc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0IC0gcm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemUpIC8gMlwiXHJcbiAgICAgIDp3aWR0aD1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXCJcclxuICAgICAgOmhlaWdodD1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXCJcclxuICAgICAgdi1pZj1cImRpc3BsYXlFeHBhbmRlclwiXHJcbiAgICA+XHJcbiAgICAgIDxleHBhbmRlciA6dGFza3M9XCJbdGFza11cIiA6b3B0aW9ucz1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlclwiIHR5cGU9XCJjaGFydFwiPjwvZXhwYW5kZXI+XHJcbiAgICA8L2ZvcmVpZ25PYmplY3Q+XHJcbiAgICA8c3ZnXHJcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvamVjdFwiXHJcbiAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LWJhciddLCAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctcHJvamVjdCddLCAuLi50YXNrLnN0eWxlWydjaGFydC1yb3ctYmFyJ10gfVwiXHJcbiAgICAgIDp4PVwidGFzay54XCJcclxuICAgICAgOnk9XCJ0YXNrLnlcIlxyXG4gICAgICA6d2lkdGg9XCJ0YXNrLndpZHRoXCJcclxuICAgICAgOmhlaWdodD1cInRhc2suaGVpZ2h0XCJcclxuICAgICAgOnZpZXdCb3g9XCJgMCAwICR7dGFzay53aWR0aH0gJHt0YXNrLmhlaWdodH1gXCJcclxuICAgICAgQGNsaWNrPVwiZW1pdEV2ZW50KCdjbGljaycsICRldmVudClcIlxyXG4gICAgICBAbW91c2VlbnRlcj1cImVtaXRFdmVudCgnbW91c2VlbnRlcicsICRldmVudClcIlxyXG4gICAgICBAbW91c2VvdmVyPVwiZW1pdEV2ZW50KCdtb3VzZW92ZXInLCAkZXZlbnQpXCJcclxuICAgICAgQG1vdXNlb3V0PVwiZW1pdEV2ZW50KCdtb3VzZW91dCcsICRldmVudClcIlxyXG4gICAgICBAbW91c2Vtb3ZlPVwiZW1pdEV2ZW50KCdtb3VzZW1vdmUnLCAkZXZlbnQpXCJcclxuICAgICAgQG1vdXNlZG93bj1cImVtaXRFdmVudCgnbW91c2Vkb3duJywgJGV2ZW50KVwiXHJcbiAgICAgIEBtb3VzZXVwPVwiZW1pdEV2ZW50KCdtb3VzZXVwJywgJGV2ZW50KVwiXHJcbiAgICAgIEBtb3VzZXdoZWVsPVwiZW1pdEV2ZW50KCdtb3VzZXdoZWVsJywgJGV2ZW50KVwiXHJcbiAgICAgIEB0b3VjaHN0YXJ0PVwiZW1pdEV2ZW50KCd0b3VjaHN0YXJ0JywgJGV2ZW50KVwiXHJcbiAgICAgIEB0b3VjaG1vdmU9XCJlbWl0RXZlbnQoJ3RvdWNobW92ZScsICRldmVudClcIlxyXG4gICAgICBAdG91Y2hlbmQ9XCJlbWl0RXZlbnQoJ3RvdWNoZW5kJywgJGV2ZW50KVwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8Y2xpcFBhdGggOmlkPVwiY2xpcFBhdGhJZFwiPlxyXG4gICAgICAgICAgPHBhdGggOmQ9XCJnZXRQb2ludHNcIj48L3BhdGg+XHJcbiAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhci1wb2x5Z29uIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9qZWN0LXBvbHlnb25cIlxyXG4gICAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1iYXItcG9seWdvbiddLFxyXG4gICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXByb2plY3QtcG9seWdvbiddLFxyXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnYmFzZSddLFxyXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LWJhci1wb2x5Z29uJ11cclxuICAgICAgICB9XCJcclxuICAgICAgICA6ZD1cImdldFBvaW50c1wiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwcm9ncmVzcy1iYXIgOnRhc2s9XCJ0YXNrXCIgOmNsaXAtcGF0aD1cIid1cmwoIycgKyBjbGlwUGF0aElkICsgJyknXCI+PC9wcm9ncmVzcy1iYXI+XHJcbiAgICA8L3N2Zz5cclxuICAgIDxjaGFydC10ZXh0IDp0YXNrPVwidGFza1wiIHYtaWY9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC5kaXNwbGF5XCI+PC9jaGFydC10ZXh0PlxyXG4gIDwvZz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBDaGFydFRleHQgZnJvbSAnLi4vVGV4dC52dWUnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vUHJvZ3Jlc3NCYXIudnVlJztcclxuaW1wb3J0IEV4cGFuZGVyIGZyb20gJy4uLy4uL0V4cGFuZGVyLnZ1ZSc7XHJcbmltcG9ydCB0YXNrTWl4aW4gZnJvbSAnLi9UYXNrLm1peGluLmpzJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdQcm9qZWN0JyxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBDaGFydFRleHQsXHJcbiAgICBQcm9ncmVzc0JhcixcclxuICAgIEV4cGFuZGVyXHJcbiAgfSxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIHByb3BzOiBbJ3Rhc2snXSxcclxuICBtaXhpbnM6IFt0YXNrTWl4aW5dLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY2xpcCBwYXRoIGlkXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgY2xpcFBhdGhJZCgpIHtcclxuICAgICAgcmV0dXJuICdnYW50dC1lbGFzdGljX19wcm9qZWN0LWNsaXAtcGF0aC0nICsgdGhpcy50YXNrLmlkO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBwb2ludHNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRQb2ludHMoKSB7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnRhc2s7XHJcbiAgICAgIGNvbnN0IGJvdHRvbSA9IHRhc2suaGVpZ2h0IC0gdGFzay5oZWlnaHQgLyA0O1xyXG4gICAgICBjb25zdCBjb3JuZXIgPSB0YXNrLmhlaWdodCAvIDY7XHJcbiAgICAgIGNvbnN0IHNtYWxsQ29ybmVyID0gdGFzay5oZWlnaHQgLyA4O1xyXG4gICAgICByZXR1cm4gYE0gJHtzbWFsbENvcm5lcn0sMFxyXG4gICAgICAgICAgICAgICAgTCAke3Rhc2sud2lkdGggLSBzbWFsbENvcm5lcn0gMFxyXG4gICAgICAgICAgICAgICAgTCAke3Rhc2sud2lkdGh9ICR7c21hbGxDb3JuZXJ9XHJcbiAgICAgICAgICAgICAgICBMICR7dGFzay53aWR0aH0gJHtib3R0b219XHJcbiAgICAgICAgICAgICAgICBMICR7dGFzay53aWR0aCAtIGNvcm5lcn0gJHt0YXNrLmhlaWdodH1cclxuICAgICAgICAgICAgICAgIEwgJHt0YXNrLndpZHRoIC0gY29ybmVyICogMn0gJHtib3R0b219XHJcbiAgICAgICAgICAgICAgICBMICR7Y29ybmVyICogMn0gJHtib3R0b219XHJcbiAgICAgICAgICAgICAgICBMICR7Y29ybmVyfSAke3Rhc2suaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgTCAwICR7Ym90dG9tfVxyXG4gICAgICAgICAgICAgICAgTCAwICR7c21hbGxDb3JuZXJ9XHJcbiAgICAgICAgICAgICAgICBaXHJcbiAgICAgICAgYDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG91bGQgd2UgZGlzcGxheSBleHBhbmRlcj9cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgZGlzcGxheUV4cGFuZGVyKCkge1xyXG4gICAgICBjb25zdCBleHBhbmRlciA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyO1xyXG4gICAgICByZXR1cm4gZXhwYW5kZXIuZGlzcGxheSB8fCAoZXhwYW5kZXIuZGlzcGxheUlmVGFza0xpc3RIaWRkZW4gJiYgIXRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXkpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsIjwhLS1cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgVGFzayBjb21wb25lbnRcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cclxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXHJcbiAqL1xyXG4tLT5cclxuPHRlbXBsYXRlPlxyXG4gIDxnXHJcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItd3JhcHBlciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGFzay13cmFwcGVyXCJcclxuICAgIDpzdHlsZT1cIntcclxuICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LWJhci13cmFwcGVyJ10sXHJcbiAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10YXNrLXdyYXBwZXInXSxcclxuICAgICAgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LWJhci13cmFwcGVyJ11cclxuICAgIH1cIlxyXG4gID5cclxuICAgIDxmb3JlaWduT2JqZWN0XHJcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZXhwYW5kZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtZXhwYW5kZXItLXRhc2tcIlxyXG4gICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZXhwYW5kZXInXSxcclxuICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1leHBhbmRlci0tdGFzayddLFxyXG4gICAgICAgIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LWV4cGFuZGVyJ11cclxuICAgICAgfVwiXHJcbiAgICAgIDp4PVwidGFzay54IC0gcm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLm9mZnNldCAtIHJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXCJcclxuICAgICAgOnk9XCJ0YXNrLnkgKyAocm9vdC5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgLSByb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSkgLyAyXCJcclxuICAgICAgOndpZHRoPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcIlxyXG4gICAgICA6aGVpZ2h0PVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcIlxyXG4gICAgICB2LWlmPVwiZGlzcGxheUV4cGFuZGVyXCJcclxuICAgID5cclxuICAgICAgPGV4cGFuZGVyIDp0YXNrcz1cIlt0YXNrXVwiIDpvcHRpb25zPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyXCIgdHlwZT1cImNoYXJ0XCI+PC9leHBhbmRlcj5cclxuICAgIDwvZm9yZWlnbk9iamVjdD5cclxuICAgIDxzdmdcclxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10YXNrXCJcclxuICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctYmFyJ10sIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10YXNrJ10sIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1iYXInXSB9XCJcclxuICAgICAgOng9XCJ0YXNrLnhcIlxyXG4gICAgICA6eT1cInRhc2sueVwiXHJcbiAgICAgIDp3aWR0aD1cInRhc2sud2lkdGhcIlxyXG4gICAgICA6aGVpZ2h0PVwidGFzay5oZWlnaHRcIlxyXG4gICAgICA6dmlld0JveD1cImAwIDAgJHt0YXNrLndpZHRofSAke3Rhc2suaGVpZ2h0fWBcIlxyXG4gICAgICBAY2xpY2s9XCJlbWl0RXZlbnQoJ2NsaWNrJywgJGV2ZW50KVwiXHJcbiAgICAgIEBtb3VzZWVudGVyPVwiZW1pdEV2ZW50KCdtb3VzZWVudGVyJywgJGV2ZW50KVwiXHJcbiAgICAgIEBtb3VzZW92ZXI9XCJlbWl0RXZlbnQoJ21vdXNlb3ZlcicsICRldmVudClcIlxyXG4gICAgICBAbW91c2VvdXQ9XCJlbWl0RXZlbnQoJ21vdXNlb3V0JywgJGV2ZW50KVwiXHJcbiAgICAgIEBtb3VzZW1vdmU9XCJlbWl0RXZlbnQoJ21vdXNlbW92ZScsICRldmVudClcIlxyXG4gICAgICBAbW91c2Vkb3duPVwiZW1pdEV2ZW50KCdtb3VzZWRvd24nLCAkZXZlbnQpXCJcclxuICAgICAgQG1vdXNldXA9XCJlbWl0RXZlbnQoJ21vdXNldXAnLCAkZXZlbnQpXCJcclxuICAgICAgQG1vdXNld2hlZWw9XCJlbWl0RXZlbnQoJ21vdXNld2hlZWwnLCAkZXZlbnQpXCJcclxuICAgICAgQHRvdWNoc3RhcnQ9XCJlbWl0RXZlbnQoJ3RvdWNoc3RhcnQnLCAkZXZlbnQpXCJcclxuICAgICAgQHRvdWNobW92ZT1cImVtaXRFdmVudCgndG91Y2htb3ZlJywgJGV2ZW50KVwiXHJcbiAgICAgIEB0b3VjaGVuZD1cImVtaXRFdmVudCgndG91Y2hlbmQnLCAkZXZlbnQpXCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICA+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxjbGlwUGF0aCA6aWQ9XCJjbGlwUGF0aElkXCI+XHJcbiAgICAgICAgICA8cG9seWdvbiA6cG9pbnRzPVwiZ2V0UG9pbnRzXCI+PC9wb2x5Z29uPlxyXG4gICAgICAgIDwvY2xpcFBhdGg+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgICAgPHBvbHlnb25cclxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItcG9seWdvbiBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGFzay1wb2x5Z29uXCJcclxuICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctYmFyLXBvbHlnb24nXSxcclxuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10YXNrLXBvbHlnb24nXSxcclxuICAgICAgICAgIC4uLnRhc2suc3R5bGVbJ2Jhc2UnXSxcclxuICAgICAgICAgIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1iYXItcG9seWdvbiddXHJcbiAgICAgICAgfVwiXHJcbiAgICAgICAgOnBvaW50cz1cImdldFBvaW50c1wiXHJcbiAgICAgID48L3BvbHlnb24+XHJcbiAgICAgIDxwcm9ncmVzcy1iYXIgOnRhc2s9XCJ0YXNrXCIgOmNsaXAtcGF0aD1cIid1cmwoIycgKyBjbGlwUGF0aElkICsgJyknXCI+PC9wcm9ncmVzcy1iYXI+XHJcbiAgICA8L3N2Zz5cclxuICAgIDxjaGFydC10ZXh0IDp0YXNrPVwidGFza1wiIHYtaWY9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC5kaXNwbGF5XCI+PC9jaGFydC10ZXh0PlxyXG4gIDwvZz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBDaGFydFRleHQgZnJvbSAnLi4vVGV4dC52dWUnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vUHJvZ3Jlc3NCYXIudnVlJztcclxuaW1wb3J0IEV4cGFuZGVyIGZyb20gJy4uLy4uL0V4cGFuZGVyLnZ1ZSc7XHJcbmltcG9ydCB0YXNrTWl4aW4gZnJvbSAnLi9UYXNrLm1peGluLmpzJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdUYXNrJyxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBDaGFydFRleHQsXHJcbiAgICBQcm9ncmVzc0JhcixcclxuICAgIEV4cGFuZGVyXHJcbiAgfSxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIHByb3BzOiBbJ3Rhc2snXSxcclxuICBtaXhpbnM6IFt0YXNrTWl4aW5dLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY2xpcCBwYXRoIGlkXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgY2xpcFBhdGhJZCgpIHtcclxuICAgICAgcmV0dXJuICdnYW50dC1lbGFzdGljX190YXNrLWNsaXAtcGF0aC0nICsgdGhpcy50YXNrLmlkO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBwb2ludHNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRQb2ludHMoKSB7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnRhc2s7XHJcbiAgICAgIHJldHVybiBgMCwwICR7dGFzay53aWR0aH0sMCAke3Rhc2sud2lkdGh9LCR7dGFzay5oZWlnaHR9IDAsJHt0YXNrLmhlaWdodH1gO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsIjwhLS1cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgVGV4dCBjb21wb25lbnRcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cclxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXHJcbiAqL1xyXG4tLT5cclxuPHRlbXBsYXRlPlxyXG4gIDxzdmdcclxuICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtd3JhcHBlclwiXHJcbiAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10ZXh0LXdyYXBwZXInXSB9XCJcclxuICAgIDp4PVwidGFzay54ICsgdGFzay53aWR0aCArIHJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC50ZXh0Lm9mZnNldFwiXHJcbiAgICA6eT1cInRhc2sueSAtIHJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5ncmlkLmhvcml6b250YWwuZ2FwXCJcclxuICAgIDp3aWR0aD1cImdldFdpZHRoXCJcclxuICAgIDpoZWlnaHQ9XCJnZXRIZWlnaHRcIlxyXG4gID5cclxuICAgIDxmb3JlaWduT2JqZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjEwMCVcIiA6aGVpZ2h0PVwiZ2V0SGVpZ2h0XCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIlxyXG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHRcIlxyXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXRleHQnXSB9XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtY29udGVudCBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dC1jb250ZW50LS10ZXh0XCJcclxuICAgICAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXRleHQtY29udGVudCddLFxyXG4gICAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctdGV4dC1jb250ZW50LS10ZXh0J10sXHJcbiAgICAgICAgICAgIC4uLmNvbnRlbnRTdHlsZVxyXG4gICAgICAgICAgfVwiXHJcbiAgICAgICAgICB2LWlmPVwiIWh0bWxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXY+e3sgdGFzay5sYWJlbCB9fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtY29udGVudCBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dC1jb250ZW50LS1odG1sXCJcclxuICAgICAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXRleHQtY29udGVudCddLFxyXG4gICAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctdGV4dC1jb250ZW50LS1odG1sJ10sXHJcbiAgICAgICAgICAgIC4uLmNvbnRlbnRTdHlsZVxyXG4gICAgICAgICAgfVwiXHJcbiAgICAgICAgICB2LWlmPVwiaHRtbFwiXHJcbiAgICAgICAgICB2LWh0bWw9XCJ0YXNrLmxhYmVsXCJcclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JlaWduT2JqZWN0PlxyXG4gIDwvc3ZnPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdDaGFydFRleHQnLFxyXG4gIGluamVjdDogWydyb290J10sXHJcbiAgcHJvcHM6IFsndGFzayddLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgd2lkdGhcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXRXaWR0aCgpIHtcclxuICAgICAgY29uc3QgdGV4dFN0eWxlID0gdGhpcy5yb290LnN0eWxlWydjaGFydC1yb3ctdGV4dCddO1xyXG4gICAgICB0aGlzLnJvb3Quc3RhdGUuY3R4LmZvbnQgPSBgJHt0ZXh0U3R5bGVbJ2ZvbnQtd2VpZ2h0J119ICR7dGV4dFN0eWxlWydmb250LXNpemUnXX0gJHt0ZXh0U3R5bGVbJ2ZvbnQtZmFtaWx5J119YDtcclxuICAgICAgY29uc3QgdGV4dFdpZHRoID0gdGhpcy5yb290LnN0YXRlLmN0eC5tZWFzdXJlVGV4dCh0aGlzLnRhc2subGFiZWwpLndpZHRoO1xyXG4gICAgICByZXR1cm4gdGV4dFdpZHRoICsgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC54UGFkZGluZyAqIDI7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGhlaWdodFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGdldEhlaWdodCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFzay5oZWlnaHQgKyB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5ncmlkLmhvcml6b250YWwuZ2FwICogMjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29udGVudCBzdHlsZVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGNvbnRlbnRTdHlsZSgpIHtcclxuICAgICAgcmV0dXJuIHsgaGVpZ2h0OiAnMTAwJScsICdsaW5lLWhlaWdodCc6IHRoaXMuZ2V0SGVpZ2h0ICsgJ3B4JyB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3VsZCB3ZSByZW5kZXIgdGV4dCBhcyBodG1sP1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBodG1sKCkge1xyXG4gICAgICBjb25zdCBjb2xzID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucztcclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNvbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjb2wgPSBjb2xzW2ldO1xyXG4gICAgICAgIGlmIChjb2wudmFsdWUgPT09ICdsYWJlbCcgJiYgdHlwZW9mIGNvbC5odG1sICE9PSAndW5kZWZpbmVkJyAmJiBjb2wuaHRtbCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCI8IS0tXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IEV4cGFuZGVyIGNvbXBvbmVudFxyXG4gKiBAbGljZW5zZSBNSVRcclxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxyXG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcclxuICovXHJcbi0tPlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiA6Y2xhc3M9XCJnZXRDbGFzc1ByZWZpeCgpICsgJy13cmFwcGVyJ1wiIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVtnZXRDbGFzc1ByZWZpeChmYWxzZSkgKyAnLXdyYXBwZXInXSwgLi4uc3R5bGUgfVwiPlxyXG4gICAgPHN2Z1xyXG4gICAgICA6Y2xhc3M9XCJnZXRDbGFzc1ByZWZpeCgpICsgJy1jb250ZW50J1wiXHJcbiAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVtnZXRDbGFzc1ByZWZpeChmYWxzZSkgKyAnLWNvbnRlbnQnXSB9XCJcclxuICAgICAgOndpZHRoPVwib3B0aW9ucy5zaXplXCJcclxuICAgICAgOmhlaWdodD1cIm9wdGlvbnMuc2l6ZVwiXHJcbiAgICAgIHYtaWY9XCJhbGxDaGlsZHJlbi5sZW5ndGhcIlxyXG4gICAgICBAY2xpY2s9XCJ0b2dnbGVcIlxyXG4gICAgPlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIDpjbGFzcz1cImdldENsYXNzUHJlZml4KCkgKyAnLWJvcmRlcidcIlxyXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVtnZXRDbGFzc1ByZWZpeChmYWxzZSkgKyAnLWJvcmRlciddLCAuLi5ib3JkZXJTdHlsZSB9XCJcclxuICAgICAgICA6eD1cImJvcmRlclwiXHJcbiAgICAgICAgOnk9XCJib3JkZXJcIlxyXG4gICAgICAgIDp3aWR0aD1cIm9wdGlvbnMuc2l6ZSAtIGJvcmRlciAqIDJcIlxyXG4gICAgICAgIDpoZWlnaHQ9XCJvcHRpb25zLnNpemUgLSBib3JkZXIgKiAyXCJcclxuICAgICAgICByeD1cIjJcIlxyXG4gICAgICAgIHJ5PVwiMlwiXHJcbiAgICAgID48L3JlY3Q+XHJcbiAgICAgIDxsaW5lXHJcbiAgICAgICAgOmNsYXNzPVwiZ2V0Q2xhc3NQcmVmaXgoKSArICctbGluZSdcIlxyXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVtnZXRDbGFzc1ByZWZpeChmYWxzZSkgKyAnLWxpbmUnXSB9XCJcclxuICAgICAgICB2LWlmPVwiYWxsQ2hpbGRyZW4ubGVuZ3RoXCJcclxuICAgICAgICA6eDE9XCJsaW5lT2Zmc2V0XCJcclxuICAgICAgICA6eTE9XCJvcHRpb25zLnNpemUgLyAyXCJcclxuICAgICAgICA6eDI9XCJvcHRpb25zLnNpemUgLSBsaW5lT2Zmc2V0XCJcclxuICAgICAgICA6eTI9XCJvcHRpb25zLnNpemUgLyAyXCJcclxuICAgICAgPjwvbGluZT5cclxuICAgICAgPGxpbmVcclxuICAgICAgICA6Y2xhc3M9XCJnZXRDbGFzc1ByZWZpeCgpICsgJy1saW5lJ1wiXHJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlW2dldENsYXNzUHJlZml4KGZhbHNlKSArICctbGluZSddIH1cIlxyXG4gICAgICAgIHYtaWY9XCJjb2xsYXBzZWRcIlxyXG4gICAgICAgIDp4MT1cIm9wdGlvbnMuc2l6ZSAvIDJcIlxyXG4gICAgICAgIDp5MT1cImxpbmVPZmZzZXRcIlxyXG4gICAgICAgIDp4Mj1cIm9wdGlvbnMuc2l6ZSAvIDJcIlxyXG4gICAgICAgIDp5Mj1cIm9wdGlvbnMuc2l6ZSAtIGxpbmVPZmZzZXRcIlxyXG4gICAgICA+PC9saW5lPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0V4cGFuZGVyJyxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIHByb3BzOiBbJ3Rhc2tzJywgJ29wdGlvbnMnLCAndHlwZSddLFxyXG4gIGRhdGEoKSB7XHJcbiAgICBjb25zdCBib3JkZXIgPSAwLjU7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBib3JkZXIsXHJcbiAgICAgIGJvcmRlclN0eWxlOiB7XHJcbiAgICAgICAgJ3N0cm9rZS13aWR0aCc6IGJvcmRlclxyXG4gICAgICB9LFxyXG4gICAgICBsaW5lT2Zmc2V0OiA1XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHN0eWxlKCkge1xyXG4gICAgICBpZiAodGhpcy50eXBlICE9PSAndGFza0xpc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1hcmdpbiA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmV4cGFuZGVyLm1hcmdpbjtcclxuICAgICAgY29uc3QgcGFkZGluZyA9IHRoaXMudGFza3NbMF0ucGFyZW50cy5sZW5ndGggKiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlci5wYWRkaW5nO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICdwYWRkaW5nLWxlZnQnOiBwYWRkaW5nICsgbWFyZ2luICsgJ3B4JyxcclxuICAgICAgICBtYXJnaW46ICdhdXRvIDAnXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIHRhc2tzXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2FycmF5fVxyXG4gICAgICovXHJcbiAgICBhbGxDaGlsZHJlbigpIHtcclxuICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcclxuICAgICAgdGhpcy50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIHRhc2suYWxsQ2hpbGRyZW4uZm9yRWFjaChjaGlsZElkID0+IHtcclxuICAgICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGRJZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyBjdXJyZW50IGV4cGFuZGVyIGNvbGxhcHNlZD9cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgY29sbGFwc2VkKCkge1xyXG4gICAgICBpZiAodGhpcy50YXNrcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGNvbGxhcHNlZCA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLnRhc2tzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFza3NbaV0uY29sbGFwc2VkKSB7XHJcbiAgICAgICAgICBjb2xsYXBzZWQrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbGxhcHNlZCA9PT0gdGhpcy50YXNrcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCBzcGVjaWZpYyBjbGFzcyBwcmVmaXhcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRDbGFzc1ByZWZpeChmdWxsID0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm4gYCR7ZnVsbCA/ICdnYW50dC1lbGFzdGljX18nIDogJyd9JHt0aGlzLm9wdGlvbnMudHlwZX0tZXhwYW5kZXJgO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogVG9nZ2xlIGV4cGFuZGVyXHJcbiAgICAgKi9cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgaWYgKHRoaXMudGFza3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcclxuICAgICAgdGhpcy50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIHRhc2suY29sbGFwc2VkID0gY29sbGFwc2VkO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCI8IS0tXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IE1haW5WaWV3IGNvbXBvbmVudFxyXG4gKiBAbGljZW5zZSBNSVRcclxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxyXG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcclxuICovXHJcbi0tPlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX21haW4tdmlld1wiIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnbWFpbi12aWV3J10gfVwiPlxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX21haW4tY29udGFpbmVyLXdyYXBwZXJcIlxyXG4gICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ21haW4tY29udGFpbmVyLXdyYXBwZXInXSwgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0ICsgJ3B4JyB9XCJcclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fbWFpbi1jb250YWluZXJcIlxyXG4gICAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ21haW4tY29udGFpbmVyJ10sXHJcbiAgICAgICAgICB3aWR0aDogcm9vdC5zdGF0ZS5vcHRpb25zLmNsaWVudFdpZHRoICsgJ3B4JyxcclxuICAgICAgICAgIGhlaWdodDogcm9vdC5zdGF0ZS5vcHRpb25zLmhlaWdodCArICdweCdcclxuICAgICAgICB9XCJcclxuICAgICAgICByZWY9XCJtYWluVmlld1wiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NvbnRhaW5lclwiXHJcbiAgICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NvbnRhaW5lciddIH1cIlxyXG4gICAgICAgICAgQG1vdXNlbW92ZT1cIm1vdXNlTW92ZVwiXHJcbiAgICAgICAgICBAbW91c2V1cD1cIm1vdXNlVXBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcmVmPVwidGFza0xpc3RcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1jb250YWluZXJcIlxyXG4gICAgICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAgICAgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWNvbnRhaW5lciddLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiByb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZmluYWxXaWR0aCArICdweCcsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgdi1zaG93PVwicm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGFzay1saXN0PjwvdGFzay1saXN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3LWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnbWFpbi12aWV3LWNvbnRhaW5lciddIH1cIlxyXG4gICAgICAgICAgICByZWY9XCJjaGFydENvbnRhaW5lclwiXHJcbiAgICAgICAgICAgIEBtb3VzZWRvd249XCJjaGFydE1vdXNlRG93blwiXHJcbiAgICAgICAgICAgIEB0b3VjaHN0YXJ0PVwiY2hhcnRNb3VzZURvd25cIlxyXG4gICAgICAgICAgICBAbW91c2V1cD1cImNoYXJ0TW91c2VVcFwiXHJcbiAgICAgICAgICAgIEB0b3VjaGVuZD1cImNoYXJ0TW91c2VVcFwiXHJcbiAgICAgICAgICAgIEBtb3VzZW1vdmUucHJldmVudD1cImNoYXJ0TW91c2VNb3ZlXCJcclxuICAgICAgICAgICAgQHRvdWNobW92ZS5wcmV2ZW50PVwiY2hhcnRNb3VzZU1vdmVcIlxyXG4gICAgICAgICAgICBAd2hlZWwucHJldmVudD1cImNoYXJ0V2hlZWxcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Y2hhcnQ+PC9jaGFydD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLWNvbnRhaW5lciBnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtY29udGFpbmVyLS12ZXJ0aWNhbFwiXHJcbiAgICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lciddLFxyXG4gICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0tdmVydGljYWwnXSxcclxuICAgICAgICAgIC4uLnZlcnRpY2FsU3R5bGVcclxuICAgICAgICB9XCJcclxuICAgICAgICByZWY9XCJjaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsXCJcclxuICAgICAgICBAc2Nyb2xsPVwib25WZXJ0aWNhbFNjcm9sbFwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC0tdmVydGljYWxcIlxyXG4gICAgICAgICAgOnN0eWxlPVwieyB3aWR0aDogJzFweCcsIGhlaWdodDogcm9vdC5zdGF0ZS5vcHRpb25zLmFsbFZpc2libGVUYXNrc0hlaWdodCArICdweCcgfVwiXHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC1jb250YWluZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0taG9yaXpvbnRhbFwiXHJcbiAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1zY3JvbGwtY29udGFpbmVyJ10sXHJcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0taG9yaXpvbnRhbCddLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IGdldE1hcmdpbkxlZnRcclxuICAgICAgfVwiXHJcbiAgICAgIEBzY3JvbGw9XCJvbkhvcml6b250YWxTY3JvbGxcIlxyXG4gICAgICByZWY9XCJjaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWxcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtLWhvcml6b250YWxcIlxyXG4gICAgICAgIDpzdHlsZT1cInsgaGVpZ2h0OiAnMXB4Jywgd2lkdGg6IHJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArICdweCcgfVwiXHJcbiAgICAgID48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFRhc2tMaXN0IGZyb20gJy4vVGFza0xpc3QvVGFza0xpc3QudnVlJztcclxuaW1wb3J0IENoYXJ0IGZyb20gJy4vQ2hhcnQvQ2hhcnQudnVlJztcclxuXHJcbmxldCBpZ25vcmVTY3JvbGxFdmVudHMgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnTWFpblZpZXcnLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFRhc2tMaXN0LFxyXG4gICAgQ2hhcnRcclxuICB9LFxyXG4gIGluamVjdDogWydyb290J10sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRlZnM6ICcnLFxyXG4gICAgICBtb3VzZVBvczoge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICBtb3ZlbWVudFg6IDAsXHJcbiAgICAgICAgbW92ZW1lbnRZOiAwLFxyXG4gICAgICAgIGxhc3RYOiAwLFxyXG4gICAgICAgIGxhc3RZOiAwLFxyXG4gICAgICAgIHBvc2l0aXZlWDogMCxcclxuICAgICAgICBwb3NpdGl2ZVk6IDAsXHJcbiAgICAgICAgY3VycmVudFg6IDAsXHJcbiAgICAgICAgY3VycmVudFk6IDBcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIE1vdW50ZWRcclxuICAgKi9cclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy52aWV3Qm94V2lkdGggPSB0aGlzLiRlbC5jbGllbnRXaWR0aDtcclxuICAgIHRoaXMucm9vdC5zdGF0ZS5yZWZzLm1haW5WaWV3ID0gdGhpcy4kcmVmcy5tYWluVmlldztcclxuICAgIHRoaXMucm9vdC5zdGF0ZS5yZWZzLmNoYXJ0Q29udGFpbmVyID0gdGhpcy4kcmVmcy5jaGFydENvbnRhaW5lcjtcclxuICAgIHRoaXMucm9vdC5zdGF0ZS5yZWZzLnRhc2tMaXN0ID0gdGhpcy4kcmVmcy50YXNrTGlzdDtcclxuICAgIHRoaXMucm9vdC5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbCA9IHRoaXMuJHJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsO1xyXG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJWZXJ0aWNhbCA9IHRoaXMuJHJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJWZXJ0aWNhbDtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmNoYXJ0TW91c2VVcC5iaW5kKHRoaXMpKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuY2hhcnRNb3VzZU1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmNoYXJ0TW91c2VNb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmNoYXJ0TW91c2VVcC5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCBtYXJnaW4gbGVmdFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGdldE1hcmdpbkxlZnQoKSB7XHJcbiAgICAgIGlmICghdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheSkge1xyXG4gICAgICAgIHJldHVybiAnMHB4JztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZmluYWxXaWR0aCArICdweCc7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHZlcnRpY2FsIHN0eWxlXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge29iamVjdH1cclxuICAgICAqL1xyXG4gICAgdmVydGljYWxTdHlsZSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsQmFySGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgICBoZWlnaHQ6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQgKyAncHgnLFxyXG4gICAgICAgICdtYXJnaW4tdG9wJzogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaGVpZ2h0ICsgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZ2FwICsgJ3B4J1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB2aWV3IGJveFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGdldFZpZXdCb3goKSB7XHJcbiAgICAgIGlmICh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jbGllbnRXaWR0aCkge1xyXG4gICAgICAgIHJldHVybiBgMCAwICR7dGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggLSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGxCYXJIZWlnaHR9ICR7XHJcbiAgICAgICAgICB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5oZWlnaHRcclxuICAgICAgICB9YDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYDAgMCAwICR7dGhpcy5yb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0fWA7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvKipcclxuICAgICAqIEVtaXQgZXZlbnQgd2hlbiBtb3VzZSBpcyBtb3ZpbmcgaW5zaWRlIG1haW4gdmlld1xyXG4gICAgICovXHJcbiAgICBtb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgICAgdGhpcy5yb290LiRlbWl0KCdtYWluLXZpZXctbW91c2Vtb3ZlJywgZXZlbnQpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVtaXQgbW91c2V1cCBldmVudCBpbnNpZGUgbWFpbiB2aWV3XHJcbiAgICAgKi9cclxuICAgIG1vdXNlVXAoZXZlbnQpIHtcclxuICAgICAgdGhpcy5yb290LiRlbWl0KCdtYWluLXZpZXctbW91c2V1cCcsIGV2ZW50KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3Jpem9udGFsIHNjcm9sbCBldmVudCBoYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIG9uSG9yaXpvbnRhbFNjcm9sbChldikge1xyXG4gICAgICB0aGlzLnJvb3QuJGVtaXQoJ2NoYXJ0LXNjcm9sbC1ob3Jpem9udGFsJywgZXYpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFZlcnRpY2FsIHNjcm9sbCBldmVudCBoYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIG9uVmVydGljYWxTY3JvbGwoZXYpIHtcclxuICAgICAgdGhpcy5yb290LiRlbWl0KCdjaGFydC1zY3JvbGwtdmVydGljYWwnLCBldik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTW91c2Ugd2hlZWwgZXZlbnQgaGFuZGxlclxyXG4gICAgICovXHJcbiAgICBjaGFydFdoZWVsKGV2KSB7XHJcbiAgICAgIHRoaXMucm9vdC4kZW1pdCgnY2hhcnQtd2hlZWwnLCBldik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhcnQgbW91c2Vkb3duIGV2ZW50IGhhbmRsZXJcclxuICAgICAqIEluaXRpYXRlcyBkcmFnIHNjcm9sbGluZyBtb2RlXHJcbiAgICAgKi9cclxuICAgIGNoYXJ0TW91c2VEb3duKGV2KSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZXYudG91Y2hlcyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aGlzLm1vdXNlUG9zLnggPSB0aGlzLm1vdXNlUG9zLmxhc3RYID0gZXYudG91Y2hlc1swXS5zY3JlZW5YO1xyXG4gICAgICAgIHRoaXMubW91c2VQb3MueSA9IHRoaXMubW91c2VQb3MubGFzdFkgPSBldi50b3VjaGVzWzBdLnNjcmVlblk7XHJcbiAgICAgICAgdGhpcy5tb3VzZVBvcy5tb3ZlbWVudFggPSAwO1xyXG4gICAgICAgIHRoaXMubW91c2VQb3MubW92ZW1lbnRZID0gMDtcclxuICAgICAgICB0aGlzLm1vdXNlUG9zLmN1cnJlbnRYID0gdGhpcy4kcmVmcy5jaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWwuc2Nyb2xsTGVmdDtcclxuICAgICAgICB0aGlzLm1vdXNlUG9zLmN1cnJlbnRZID0gdGhpcy4kcmVmcy5jaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsLnNjcm9sbFRvcDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuc2Nyb2xsaW5nID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFydCBtb3VzZXVwIGV2ZW50IGhhbmRsZXJcclxuICAgICAqIERlYWN0aXZhdGVzIGRyYWcgc2Nyb2xsaW5nIG1vZGVcclxuICAgICAqL1xyXG4gICAgY2hhcnRNb3VzZVVwKGV2KSB7XHJcbiAgICAgIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbC5zY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFydCBtb3VzZW1vdmUgZXZlbnQgaGFuZGxlclxyXG4gICAgICogV2hlbiBpbiBkcmFnIHNjcm9sbGluZyBtb2RlIHRoaXMgbWV0aG9kIGNhbGN1bGF0ZSBzY3JvbGwgbW92ZW1lbnRcclxuICAgICAqL1xyXG4gICAgY2hhcnRNb3VzZU1vdmUoZXYpIHtcclxuICAgICAgaWYgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbC5zY3JvbGxpbmcpIHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHRvdWNoID0gdHlwZW9mIGV2LnRvdWNoZXMgIT09ICd1bmRlZmluZWQnO1xyXG4gICAgICAgIGxldCBtb3ZlbWVudFgsIG1vdmVtZW50WTtcclxuICAgICAgICBpZiAodG91Y2gpIHtcclxuICAgICAgICAgIGNvbnN0IHNjcmVlblggPSBldi50b3VjaGVzWzBdLnNjcmVlblg7XHJcbiAgICAgICAgICBjb25zdCBzY3JlZW5ZID0gZXYudG91Y2hlc1swXS5zY3JlZW5ZO1xyXG4gICAgICAgICAgbW92ZW1lbnRYID0gdGhpcy5tb3VzZVBvcy54IC0gc2NyZWVuWDtcclxuICAgICAgICAgIG1vdmVtZW50WSA9IHRoaXMubW91c2VQb3MueSAtIHNjcmVlblk7XHJcbiAgICAgICAgICB0aGlzLm1vdXNlUG9zLmxhc3RYID0gc2NyZWVuWDtcclxuICAgICAgICAgIHRoaXMubW91c2VQb3MubGFzdFkgPSBzY3JlZW5ZO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtb3ZlbWVudFggPSBldi5tb3ZlbWVudFg7XHJcbiAgICAgICAgICBtb3ZlbWVudFkgPSBldi5tb3ZlbWVudFk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGhvcml6b250YWwgPSB0aGlzLiRyZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbDtcclxuICAgICAgICBjb25zdCB2ZXJ0aWNhbCA9IHRoaXMuJHJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJWZXJ0aWNhbDtcclxuICAgICAgICBsZXQgeCA9IDAsXHJcbiAgICAgICAgICB5ID0gMDtcclxuICAgICAgICBpZiAodG91Y2gpIHtcclxuICAgICAgICAgIHggPSB0aGlzLm1vdXNlUG9zLmN1cnJlbnRYICsgbW92ZW1lbnRYICogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmRyYWdYTW92ZU11bHRpcGxpZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHggPSBob3Jpem9udGFsLnNjcm9sbExlZnQgLSBtb3ZlbWVudFggKiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuZHJhZ1hNb3ZlTXVsdGlwbGllcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaG9yaXpvbnRhbC5zY3JvbGxMZWZ0ID0geDtcclxuICAgICAgICBpZiAodG91Y2gpIHtcclxuICAgICAgICAgIHkgPSB0aGlzLm1vdXNlUG9zLmN1cnJlbnRZICsgbW92ZW1lbnRZICogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmRyYWdZTW92ZU11bHRpcGxpZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHkgPSB2ZXJ0aWNhbC5zY3JvbGxUb3AgLSBtb3ZlbWVudFkgKiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuZHJhZ1lNb3ZlTXVsdGlwbGllcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmVydGljYWwuc2Nyb2xsVG9wID0geTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEJlZm9yZSBkZXN0cm95IGV2ZW50IC0gY2xlYW4gdXBcclxuICAgKi9cclxuICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuY2hhcnRNb3VzZVVwKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuY2hhcnRNb3VzZU1vdmUpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5jaGFydE1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuY2hhcnRNb3VzZVVwKTtcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCI8IS0tXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IEl0ZW1Db2x1bW4gY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tY29sdW1uXCIgOnN0eWxlPVwiaXRlbUNvbHVtblN0eWxlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUtd3JhcHBlclwiIDpzdHlsZT1cIndyYXBwZXJTdHlsZVwiPlxyXG4gICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS1jb250YWluZXJcIiA6c3R5bGU9XCJjb250YWluZXJTdHlsZVwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHYtaWY9XCIhaHRtbFwiXHJcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlXCJcclxuICAgICAgICAgIDpzdHlsZT1cInZhbHVlU3R5bGVcIlxyXG4gICAgICAgICAgQGNsaWNrPVwiZW1pdEV2ZW50KCdjbGljaycsICRldmVudClcIlxyXG4gICAgICAgICAgQG1vdXNlZW50ZXI9XCJlbWl0RXZlbnQoJ21vdXNlZW50ZXInLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEBtb3VzZW92ZXI9XCJlbWl0RXZlbnQoJ21vdXNlb3ZlcicsICRldmVudClcIlxyXG4gICAgICAgICAgQG1vdXNlb3V0PVwiZW1pdEV2ZW50KCdtb3VzZW91dCcsICRldmVudClcIlxyXG4gICAgICAgICAgQG1vdXNlbW92ZT1cImVtaXRFdmVudCgnbW91c2Vtb3ZlJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICBAbW91c2Vkb3duPVwiZW1pdEV2ZW50KCdtb3VzZWRvd24nLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEBtb3VzZXVwPVwiZW1pdEV2ZW50KCdtb3VzZXVwJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICBAbW91c2V3aGVlbD1cImVtaXRFdmVudCgnbW91c2V3aGVlbCcsICRldmVudClcIlxyXG4gICAgICAgICAgQHRvdWNoc3RhcnQ9XCJlbWl0RXZlbnQoJ3RvdWNoc3RhcnQnLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEB0b3VjaG1vdmU9XCJlbWl0RXZlbnQoJ3RvdWNobW92ZScsICRldmVudClcIlxyXG4gICAgICAgICAgQHRvdWNoZW5kPVwiZW1pdEV2ZW50KCd0b3VjaGVuZCcsICRldmVudClcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IHZhbHVlIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgdi1lbHNlXHJcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlXCJcclxuICAgICAgICAgIDpzdHlsZT1cInZhbHVlU3R5bGVcIlxyXG4gICAgICAgICAgQGNsaWNrPVwiZW1pdEV2ZW50KCdjbGljaycsICRldmVudClcIlxyXG4gICAgICAgICAgQG1vdXNlZW50ZXI9XCJlbWl0RXZlbnQoJ21vdXNlZW50ZXInLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEBtb3VzZW92ZXI9XCJlbWl0RXZlbnQoJ21vdXNlb3ZlcicsICRldmVudClcIlxyXG4gICAgICAgICAgQG1vdXNlb3V0PVwiZW1pdEV2ZW50KCdtb3VzZW91dCcsICRldmVudClcIlxyXG4gICAgICAgICAgQG1vdXNlbW92ZT1cImVtaXRFdmVudCgnbW91c2Vtb3ZlJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICBAbW91c2Vkb3duPVwiZW1pdEV2ZW50KCdtb3VzZWRvd24nLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEBtb3VzZXVwPVwiZW1pdEV2ZW50KCdtb3VzZXVwJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICBAbW91c2V3aGVlbD1cImVtaXRFdmVudCgnbW91c2V3aGVlbCcsICRldmVudClcIlxyXG4gICAgICAgICAgQHRvdWNoc3RhcnQ9XCJlbWl0RXZlbnQoJ3RvdWNoc3RhcnQnLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEB0b3VjaG1vdmU9XCJlbWl0RXZlbnQoJ3RvdWNobW92ZScsICRldmVudClcIlxyXG4gICAgICAgICAgQHRvdWNoZW5kPVwiZW1pdEV2ZW50KCd0b3VjaGVuZCcsICRldmVudClcIlxyXG4gICAgICAgICAgdi1odG1sPVwidmFsdWVcIlxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnSXRlbUNvbHVtbicsXHJcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcclxuICBwcm9wczogWydjb2x1bW4nLCAndGFzayddLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvKipcclxuICAgICAqIEVtaXQgZXZlbnRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXHJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyXG4gICAgICovXHJcbiAgICBlbWl0RXZlbnQoZXZlbnROYW1lLCBldmVudCkge1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29sdW1uLmV2ZW50cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuY29sdW1uLmV2ZW50c1tldmVudE5hbWVdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW4uZXZlbnRzW2V2ZW50TmFtZV0oeyBldmVudCwgZGF0YTogdGhpcy50YXNrLCBjb2x1bW46IHRoaXMuY29sdW1uIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucm9vdC4kZW1pdChgdGFza0xpc3QtJHt0aGlzLnRhc2sudHlwZX0tJHtldmVudE5hbWV9YCwgeyBldmVudCwgZGF0YTogdGhpcy50YXNrLCBjb2x1bW46IHRoaXMuY29sdW1uIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC8qKlxyXG4gICAgICogU2hvdWxkIHdlIGRpc3BsYXkgaHRtbCBvciBqdXN0IHRleHQ/XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGh0bWwoKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb2x1bW4uaHRtbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5jb2x1bW4uaHRtbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29sdW1uIHZhbHVlXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2FueXxzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHZhbHVlKCkge1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29sdW1uLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLnZhbHVlKHRoaXMudGFzayk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMudGFza1t0aGlzLmNvbHVtbi52YWx1ZV07XHJcbiAgICB9LFxyXG5cclxuICAgIGl0ZW1Db2x1bW5TdHlsZSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi50aGlzLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLWNvbHVtbiddLFxyXG4gICAgICAgIC4uLnRoaXMuY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaXRlbS1jb2x1bW4nXSxcclxuICAgICAgICB3aWR0aDogdGhpcy5jb2x1bW4uZmluYWxXaWR0aCArICdweCcsXHJcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbHVtbi5oZWlnaHQgKyAncHgnXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIHdyYXBwZXJTdHlsZSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi50aGlzLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXInXSxcclxuICAgICAgICAuLi50aGlzLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWl0ZW0tdmFsdWUtd3JhcHBlciddXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbnRhaW5lclN0eWxlKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnRoaXMucm9vdC5zdHlsZVsndGFzay1saXN0LWl0ZW0tdmFsdWUtY29udGFpbmVyJ10sXHJcbiAgICAgICAgLi4udGhpcy5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lciddXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIHZhbHVlU3R5bGUoKSB7XHJcbiAgICAgIHJldHVybiB7IC4uLnRoaXMucm9vdC5zdHlsZVsndGFzay1saXN0LWl0ZW0tdmFsdWUnXSwgLi4udGhpcy5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLXZhbHVlJ10gfTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCI8IS0tXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IFRhc2tMaXN0IGNvbXBvbmVudFxyXG4gKiBAbGljZW5zZSBNSVRcclxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxyXG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcclxuICovXHJcbi0tPlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3Qtd3JhcHBlclwiXHJcbiAgICByZWY9XCJ0YXNrTGlzdFdyYXBwZXJcIlxyXG4gICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3Qtd3JhcHBlciddLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9XCJcclxuICAgIHYtc2hvdz1cInJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5kaXNwbGF5XCJcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0XCIgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QnXSB9XCIgcmVmPVwidGFza0xpc3RcIj5cclxuICAgICAgPHRhc2stbGlzdC1oZWFkZXI+PC90YXNrLWxpc3QtaGVhZGVyPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbXNcIlxyXG4gICAgICAgIHJlZj1cInRhc2tMaXN0SXRlbXNcIlxyXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWl0ZW1zJ10sIGhlaWdodDogcm9vdC5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQgKyAncHgnIH1cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHRhc2stbGlzdC1pdGVtIHYtZm9yPVwidGFzayBpbiByb290LnZpc2libGVUYXNrc1wiIDprZXk9XCJ0YXNrLmlkXCIgOnRhc2s9XCJ0YXNrXCI+PC90YXNrLWxpc3QtaXRlbT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBUYXNrTGlzdEhlYWRlciBmcm9tICcuL1Rhc2tMaXN0SGVhZGVyLnZ1ZSc7XHJcbmltcG9ydCBUYXNrTGlzdEl0ZW0gZnJvbSAnLi9UYXNrTGlzdEl0ZW0udnVlJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdUYXNrTGlzdCcsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgVGFza0xpc3RIZWFkZXIsXHJcbiAgICBUYXNrTGlzdEl0ZW1cclxuICB9LFxyXG4gIGluamVjdDogWydyb290J10sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBNb3VudGVkXHJcbiAgICovXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMucm9vdC5zdGF0ZS5yZWZzLnRhc2tMaXN0V3JhcHBlciA9IHRoaXMuJHJlZnMudGFza0xpc3RXcmFwcGVyO1xyXG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMudGFza0xpc3QgPSB0aGlzLiRyZWZzLnRhc2tMaXN0O1xyXG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMudGFza0xpc3RJdGVtcyA9IHRoaXMuJHJlZnMudGFza0xpc3RJdGVtcztcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCI8IS0tXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IFRhc2tMaXN0SGVhZGVyIGNvbXBvbmVudFxyXG4gKiBAbGljZW5zZSBNSVRcclxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxyXG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcclxuICovXHJcbi0tPlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyXCJcclxuICAgIDpzdHlsZT1cIntcclxuICAgICAgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlciddLFxyXG4gICAgICBoZWlnaHQ6IGAke3Jvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHR9cHhgLFxyXG4gICAgICAnbWFyZ2luLWJvdHRvbSc6IGAke3Jvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5nYXB9cHhgXHJcbiAgICB9XCJcclxuICA+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1jb2x1bW5cIlxyXG4gICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1jb2x1bW4nXSxcclxuICAgICAgICAuLi5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItY29sdW1uJ10sXHJcbiAgICAgICAgLi4uZ2V0U3R5bGUoY29sdW1uKVxyXG4gICAgICB9XCJcclxuICAgICAgdi1mb3I9XCJjb2x1bW4gaW4gcm9vdC5nZXRUYXNrTGlzdENvbHVtbnNcIlxyXG4gICAgICA6a2V5PVwiY29sdW1uLl9pZFwiXHJcbiAgICA+XHJcbiAgICAgIDx0YXNrLWxpc3QtZXhwYW5kZXJcclxuICAgICAgICB2LWlmPVwiY29sdW1uLmV4cGFuZGVyXCJcclxuICAgICAgICA6dGFza3M9XCJjb2xsYXBzaWJsZVwiXHJcbiAgICAgICAgOm9wdGlvbnM9XCJyb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZXhwYW5kZXJcIlxyXG4gICAgICA+PC90YXNrLWxpc3QtZXhwYW5kZXI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItbGFiZWxcIlxyXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1sYWJlbCddLCAuLi5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItbGFiZWwnXSB9XCJcclxuICAgICAgICA6Y29sdW1uPVwiY29sdW1uXCJcclxuICAgICAgICBAbW91c2V1cD1cInJlc2l6ZXJNb3VzZVVwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IGNvbHVtbi5sYWJlbCB9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1yZXNpemVyLXdyYXBwZXJcIlxyXG4gICAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci13cmFwcGVyJ10sXHJcbiAgICAgICAgICAuLi5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci13cmFwcGVyJ11cclxuICAgICAgICB9XCJcclxuICAgICAgICA6Y29sdW1uPVwiY29sdW1uXCJcclxuICAgICAgICBAbW91c2Vkb3duPVwicmVzaXplck1vdXNlRG93bigkZXZlbnQsIGNvbHVtbilcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXJcIlxyXG4gICAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXInXSwgLi4uY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXInXSB9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiXHJcbiAgICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdCddLCAuLi5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3QnXSB9XCJcclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCJcclxuICAgICAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90J10sIC4uLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdCddIH1cIlxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIlxyXG4gICAgICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3QnXSwgLi4uY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90J10gfVwiXHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgVGFza0xpc3RFeHBhbmRlciBmcm9tICcuLi9FeHBhbmRlci52dWUnO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ1Rhc2tMaXN0SGVhZGVyJyxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBUYXNrTGlzdEV4cGFuZGVyXHJcbiAgfSxcclxuXHJcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcclxuXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2l6ZXI6IHtcclxuICAgICAgICBtb3Zpbmc6IGZhbHNlLFxyXG4gICAgICAgIHg6IDBcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICBjb21wdXRlZDoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGlzIHJvdyBjb2xsYXBzaWJsZT9cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbH1cclxuICAgICAqL1xyXG4gICAgY29sbGFwc2libGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Quc3RhdGUudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5hbGxDaGlsZHJlbi5sZW5ndGggPiAwKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCBzdHlsZVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGdldFN0eWxlKGNvbHVtbikge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoOiBjb2x1bW4uZmluYWxXaWR0aCArICdweCdcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIFJlc2l6ZXIgbW91c2UgZG93biBldmVudCBoYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIHJlc2l6ZXJNb3VzZURvd24oZXZlbnQsIGNvbHVtbikge1xyXG4gICAgICBpZiAoIXRoaXMucmVzaXplci5tb3ZpbmcpIHtcclxuICAgICAgICB0aGlzLnJlc2l6ZXIubW92aW5nID0gY29sdW1uO1xyXG4gICAgICAgIHRoaXMucmVzaXplci54ID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgICB0aGlzLnJlc2l6ZXIuaW5pdGlhbFdpZHRoID0gY29sdW1uLndpZHRoO1xyXG4gICAgICAgIHRoaXMucm9vdC4kZW1pdCgndGFza0xpc3QtY29sdW1uLXdpZHRoLWNoYW5nZS1zdGFydCcsIHRoaXMucmVzaXplci5tb3ZpbmcpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzaXplciBtb3VzZSBtb3ZlIGV2ZW50IGhhbmRsZXJcclxuICAgICAqL1xyXG4gICAgcmVzaXplck1vdXNlTW92ZShldmVudCkge1xyXG4gICAgICBpZiAodGhpcy5yZXNpemVyLm1vdmluZykge1xyXG4gICAgICAgIGNvbnN0IGxhc3RXaWR0aCA9IHRoaXMucmVzaXplci5tb3Zpbmcud2lkdGg7XHJcbiAgICAgICAgdGhpcy5yZXNpemVyLm1vdmluZy53aWR0aCA9IHRoaXMucmVzaXplci5pbml0aWFsV2lkdGggKyBldmVudC5jbGllbnRYIC0gdGhpcy5yZXNpemVyLng7XHJcbiAgICAgICAgaWYgKHRoaXMucmVzaXplci5tb3Zpbmcud2lkdGggPCB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5taW5XaWR0aCkge1xyXG4gICAgICAgICAgdGhpcy5yZXNpemVyLm1vdmluZy53aWR0aCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0Lm1pbldpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGFzdFdpZHRoICE9PSB0aGlzLnJlc2l6ZXIubW92aW5nLndpZHRoKSB7XHJcbiAgICAgICAgICB0aGlzLnJvb3QuJGVtaXQoJ3Rhc2tMaXN0LWNvbHVtbi13aWR0aC1jaGFuZ2UnLCB0aGlzLnJlc2l6ZXIubW92aW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNpemVyIG1vdXNlIHVwIGV2ZW50IGhhbmRsZXJcclxuICAgICAqL1xyXG4gICAgcmVzaXplck1vdXNlVXAoZXZlbnQpIHtcclxuICAgICAgaWYgKHRoaXMucmVzaXplci5tb3ZpbmcpIHtcclxuICAgICAgICB0aGlzLnJvb3QuJGVtaXQoJ3Rhc2tMaXN0LWNvbHVtbi13aWR0aC1jaGFuZ2Utc3RvcCcsIHRoaXMucmVzaXplci5tb3ZpbmcpO1xyXG4gICAgICAgIHRoaXMucmVzaXplci5tb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZWRcclxuICAgKi9cclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5tb3VzZVVwTGlzdGVuZXIgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5yZXNpemVyTW91c2VVcC5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMubW91c2VNb3ZlTGlzdGVuZXIgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLnJlc2l6ZXJNb3VzZU1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLnJvb3QuJG9uKCdtYWluLXZpZXctbW91c2Vtb3ZlJywgdGhpcy5yZXNpemVyTW91c2VNb3ZlKTtcclxuICAgIHRoaXMucm9vdC4kb24oJ21haW4tdmlldy1tb3VzZXVwJywgdGhpcy5yZXNpemVyTW91c2VVcCk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQmVmb3JlIGRlc3Ryb3kgZXZlbnQgLSBjbGVhciBhbGwgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICovXHJcbiAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLnJlc2l6ZXJNb3VzZVVwKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMucmVzaXplck1vdXNlTW92ZSk7XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPCEtLVxyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBUYXNrTGlzdEl0ZW0gY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW1cIiA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtJ10gfVwiPlxyXG4gICAgPGl0ZW0tY29sdW1uIHYtZm9yPVwiY29sdW1uIGluIGNvbHVtbnNcIiA6a2V5PVwiY29sdW1uLl9pZFwiIDpjb2x1bW49XCJjb2x1bW5cIiA6dGFzaz1cInRhc2tcIj5cclxuICAgICAgPHRhc2stbGlzdC1leHBhbmRlclxyXG4gICAgICAgIHYtaWY9XCJjb2x1bW4uZXhwYW5kZXJcIlxyXG4gICAgICAgIDp0YXNrcz1cIlt0YXNrXVwiXHJcbiAgICAgICAgOm9wdGlvbnM9XCJyb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZXhwYW5kZXJcIlxyXG4gICAgICAgIHR5cGU9XCJ0YXNrTGlzdFwiXHJcbiAgICAgID48L3Rhc2stbGlzdC1leHBhbmRlcj5cclxuICAgIDwvaXRlbS1jb2x1bW4+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBUYXNrTGlzdEV4cGFuZGVyIGZyb20gJy4uL0V4cGFuZGVyLnZ1ZSc7XHJcbmltcG9ydCBJdGVtQ29sdW1uIGZyb20gJy4vSXRlbUNvbHVtbi52dWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdUYXNrTGlzdEl0ZW0nLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFRhc2tMaXN0RXhwYW5kZXIsXHJcbiAgICBJdGVtQ29sdW1uXHJcbiAgfSxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIHByb3BzOiBbJ3Rhc2snXSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGNvbHVtbnMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5jb2x1bW5zO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNcIiwgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTAwJVwiIH0gfSxcbiAgICBbXG4gICAgICBfdm0uX3QoXCJoZWFkZXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJtYWluLXZpZXdcIiwgeyByZWY6IFwibWFpblZpZXdcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXCJmb290ZXJcIilcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jYWxlbmRhci13cmFwcGVyXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjYWxlbmRhci13cmFwcGVyXCJdLCB7XG4gICAgICAgIHdpZHRoOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoICsgXCJweFwiXG4gICAgICB9KVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jYWxlbmRhclwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcImNhbGVuZGFyXCJdLCB7XG4gICAgICAgICAgICB3aWR0aDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArIFwicHhcIlxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmRpc3BsYXlcbiAgICAgICAgICAgID8gX2MoXCJjYWxlbmRhci1yb3dcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uZGF0ZXMubW9udGhzLCB3aGljaDogXCJtb250aFwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5kaXNwbGF5XG4gICAgICAgICAgICA/IF9jKFwiY2FsZW5kYXItcm93XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLmRhdGVzLmRheXMsIHdoaWNoOiBcImRheVwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZGlzcGxheVxuICAgICAgICAgICAgPyBfYyhcImNhbGVuZGFyLXJvd1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5kYXRlcy5ob3Vycywgd2hpY2g6IFwiaG91clwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBjbGFzczpcbiAgICAgICAgXCJnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3cgZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LS1cIiArIF92bS53aGljaCxcbiAgICAgIHN0eWxlOiBfdm0ucm93U3R5bGVcbiAgICB9LFxuICAgIF92bS5fbChfdm0uaXRlbXMsIGZ1bmN0aW9uKGl0ZW0sIGl0ZW1JbmRleCkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBpdGVtLmtleSxcbiAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LXJlY3QgZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LXJlY3QtLVwiICtcbiAgICAgICAgICAgIF92bS53aGljaCxcbiAgICAgICAgICBzdHlsZTogX3ZtLnJlY3RTdHlsZVxuICAgICAgICB9LFxuICAgICAgICBfdm0uX2woaXRlbS5jaGlsZHJlbiwgZnVuY3Rpb24oY2hpbGQsIGNoaWxkSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGNoaWxkLmtleSxcbiAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctcmVjdC1jaGlsZCBnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctcmVjdC1jaGlsZC0tXCIgK1xuICAgICAgICAgICAgICAgIF92bS53aGljaCxcbiAgICAgICAgICAgICAgc3R5bGU6IF92bS5yZWN0Q2hpbGRTdHlsZVtpdGVtSW5kZXhdW2NoaWxkSW5kZXhdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy10ZXh0IGdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy10ZXh0LS1cIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS53aGljaCxcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0udGV4dFN0eWxlKGNoaWxkKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoY2hpbGQubGFiZWwpICsgXCJcXG4gICAgICBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHJlZjogXCJjaGFydFwiLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnRcIixcbiAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0XCJdKVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwiY2hhcnRDYWxlbmRhckNvbnRhaW5lclwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWNhbGVuZGFyLWNvbnRhaW5lclwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LWNhbGVuZGFyLWNvbnRhaW5lclwiXSwge1xuICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArIFwicHhcIixcbiAgICAgICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmdhcCArIFwicHhcIlxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImNhbGVuZGFyXCIpXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJjaGFydEdyYXBoQ29udGFpbmVyXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZ3JhcGgtY29udGFpbmVyXCIsXG4gICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZ3JhcGgtY29udGFpbmVyXCJdLCB7XG4gICAgICAgICAgICBoZWlnaHQ6XG4gICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0IC1cbiAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHQgK1xuICAgICAgICAgICAgICBcInB4XCJcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1hcmVhXCJdLCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQgKyBcInB4XCJcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcImNoYXJ0R3JhcGhcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWdyYXBoXCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1ncmFwaFwiXSwge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY2hhcnRHcmFwaFN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWdyYXBoLXN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LWdyYXBoLXN2Z1wiXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArIFwicHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHQgKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkYXlzLWhpZ2hsaWdodFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZ3JpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGVwZW5kZW5jeS1saW5lc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0YXNrczogX3ZtLnJvb3QudmlzaWJsZVRhc2tzIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucm9vdC52aXNpYmxlVGFza3MsIGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHRhc2suaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctd3JhcHBlclwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGFzazogdGFzayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyh0YXNrLnR5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhc2s6IHRhc2sgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uc2hvd1dvcmtpbmdEYXlzXG4gICAgPyBfYyhcbiAgICAgICAgXCJnXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1kYXlzLWhpZ2hsaWdodC1jb250YWluZXJcIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1kYXlzLWhpZ2hsaWdodC1jb250YWluZXJcIl1cbiAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIF92bS5fbChfdm0ud29ya2luZ0RheXMsIGZ1bmN0aW9uKGRheSkge1xuICAgICAgICAgIHJldHVybiBfYyhcInJlY3RcIiwge1xuICAgICAgICAgICAga2V5OiBfdm0uZ2V0S2V5KGRheSksXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1kYXlzLWhpZ2hsaWdodC1yZWN0XCIsXG4gICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZGF5cy1oaWdobGlnaHQtcmVjdFwiXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHg6IGRheS5vZmZzZXQucHgsXG4gICAgICAgICAgICAgIHk6IFwiMFwiLFxuICAgICAgICAgICAgICB3aWR0aDogZGF5LndpZHRoLnB4LFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInN2Z1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWRlcGVuZGVuY3ktbGluZXMtY29udGFpbmVyXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1jb250YWluZXJcIl1cbiAgICAgICksXG4gICAgICBhdHRyczogeyB4OiBcIjBcIiwgeTogXCIwXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9XG4gICAgfSxcbiAgICBfdm0uX2woX3ZtLmRlcGVuZGVuY3lUYXNrcywgZnVuY3Rpb24odGFzaykge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImdcIixcbiAgICAgICAgeyBrZXk6IHRhc2suaWQsIGF0dHJzOiB7IHRhc2s6IHRhc2sgfSB9LFxuICAgICAgICBfdm0uX2wodGFzay5kZXBlbmRlbmN5TGluZXMsIGZ1bmN0aW9uKGRlcGVuZGVuY3lMaW5lKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICBrZXk6IGRlcGVuZGVuY3lMaW5lLmlkLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoXCIsXG4gICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoXCJdLFxuICAgICAgICAgICAgICB0YXNrLnN0eWxlW1wiY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoXCJdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGFzazogdGFzaywgZDogZGVwZW5kZW5jeUxpbmUucG9pbnRzIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzdmdcIixcbiAgICB7XG4gICAgICByZWY6IFwiY2hhcnRcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZXMtd3JhcHBlclwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wiZ3JpZC1saW5lcy13cmFwcGVyXCJdKSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHg6IFwiMFwiLFxuICAgICAgICB5OiBcIjBcIixcbiAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMud2lkdGgsXG4gICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHQsXG4gICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImdcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZXNcIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJncmlkLWxpbmVzXCJdKVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS5ob3Jpem9udGFsTGluZXMsIGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImxpbmVcIiwge1xuICAgICAgICAgICAgICBrZXk6IGxpbmUua2V5LFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19ncmlkLWxpbmUtaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJncmlkLWxpbmUtaG9yaXpvbnRhbFwiXSksXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHgxOiBsaW5lLngxLCB5MTogbGluZS55MSwgeDI6IGxpbmUueDIsIHkyOiBsaW5lLnkyIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLnZlcnRpY2FsTGluZXMsIGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImxpbmVcIiwge1xuICAgICAgICAgICAgICBrZXk6IGxpbmUua2V5LFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19ncmlkLWxpbmUtdmVydGljYWxcIixcbiAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wiZ3JpZC1saW5lLXZlcnRpY2FsXCJdKSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgeDE6IGxpbmUueDEsIHkxOiBsaW5lLnkxLCB4MjogbGluZS54MiwgeTI6IGxpbmUueTIgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGluZVwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19ncmlkLWxpbmUtdGltZVwiLFxuICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wiZ3JpZC1saW5lLXRpbWVcIl0pLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgeDE6IF92bS50aW1lTGluZVBvc2l0aW9uLngsXG4gICAgICAgICAgICAgIHkxOiBfdm0udGltZUxpbmVQb3NpdGlvbi55MSxcbiAgICAgICAgICAgICAgeDI6IF92bS50aW1lTGluZVBvc2l0aW9uLngsXG4gICAgICAgICAgICAgIHkyOiBfdm0udGltZUxpbmVQb3NpdGlvbi55MlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZ1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItd3JhcHBlclwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1wcm9ncmVzcy1iYXItd3JhcHBlclwiXSxcbiAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXdyYXBwZXJcIl1cbiAgICAgIClcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGVmc1wiLCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwicGF0dGVyblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBcImRpYWdvbmFsSGF0Y2hcIixcbiAgICAgICAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQucHJvZ3Jlc3Mud2lkdGgsXG4gICAgICAgICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5wcm9ncmVzcy53aWR0aCxcbiAgICAgICAgICAgICAgcGF0dGVyblRyYW5zZm9ybTogXCJyb3RhdGUoNDUgMCAwKVwiLFxuICAgICAgICAgICAgICBwYXR0ZXJuVW5pdHM6IFwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJsaW5lXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hhcnQtcm93LXByb2dyZXNzLWJhci1saW5lXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXByb2dyZXNzLWJhci1saW5lXCJdLFxuICAgICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LXByb2dyZXNzLWJhci1saW5lXCJdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgeDE6IFwiMFwiLFxuICAgICAgICAgICAgICAgIHkxOiBcIjBcIixcbiAgICAgICAgICAgICAgICB4MjogXCIwXCIsXG4gICAgICAgICAgICAgICAgeTI6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQucHJvZ3Jlc3Mud2lkdGhcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQucHJvZ3Jlc3MuYmFyXG4gICAgICAgID8gX2MoXCJyZWN0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItc29saWRcIixcbiAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXNvbGlkXCJdLFxuICAgICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1wcm9ncmVzcy1iYXItc29saWRcIl1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBhdHRyczogeyB4OiBcIjBcIiwgeTogXCIwXCIsIHdpZHRoOiBfdm0uZ2V0UHJvZ3Jlc3NXaWR0aCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnByb2dyZXNzLnBhdHRlcm5cbiAgICAgICAgPyBfYyhcImdcIiwgW1xuICAgICAgICAgICAgX2MoXCJyZWN0XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXByb2dyZXNzLWJhci1wYXR0ZXJuXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXByb2dyZXNzLWJhci1wYXR0ZXJuXCJdLFxuICAgICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LXByb2dyZXNzLWJhci1wYXR0ZXJuXCJdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgeDogX3ZtLmdldFByb2dyZXNzV2lkdGgsXG4gICAgICAgICAgICAgICAgeTogXCIwXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCAtIF92bS50YXNrLnByb2dyZXNzICsgXCIlXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLW91dGxpbmVcIixcbiAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLW91dGxpbmVcIl0sXG4gICAgICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJiYXNlXCJdLFxuICAgICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LXByb2dyZXNzLWJhci1vdXRsaW5lXCJdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGQ6IF92bS5nZXRMaW5lUG9pbnRzIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJnXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhci13cmFwcGVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1taWxlc3RvbmUtd3JhcHBlclwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXItd3JhcHBlclwiXSxcbiAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctbWlsZXN0b25lLXdyYXBwZXJcIl0sXG4gICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LWJhci13cmFwcGVyXCJdXG4gICAgICApXG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0uZGlzcGxheUV4cGFuZGVyXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImZvcmVpZ25PYmplY3RcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlciBnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlci0tbWlsZXN0b25lXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZXhwYW5kZXJcIl0sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1leHBhbmRlci0tbWlsZXN0b25lXCJdLFxuICAgICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtZXhwYW5kZXJcIl1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB4OlxuICAgICAgICAgICAgICAgICAgX3ZtLnRhc2sueCAtXG4gICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLm9mZnNldCAtXG4gICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemUsXG4gICAgICAgICAgICAgICAgeTpcbiAgICAgICAgICAgICAgICAgIF92bS50YXNrLnkgK1xuICAgICAgICAgICAgICAgICAgKF92bS5yb290LnN0YXRlLm9wdGlvbnMucm93LmhlaWdodCAtXG4gICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSkgL1xuICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemUsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJleHBhbmRlclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRhc2tzOiBbX3ZtLnRhc2tdLFxuICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlcixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hhcnRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInN2Z1wiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LW1pbGVzdG9uZVwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXJcIl0sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1taWxlc3RvbmVcIl0sXG4gICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1iYXJcIl1cbiAgICAgICAgICApLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB4OiBfdm0udGFzay54LFxuICAgICAgICAgICAgeTogX3ZtLnRhc2sueSxcbiAgICAgICAgICAgIHdpZHRoOiBfdm0udGFzay53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogX3ZtLnRhc2suaGVpZ2h0LFxuICAgICAgICAgICAgdmlld0JveDogXCIwIDAgXCIgKyBfdm0udGFzay53aWR0aCArIFwiIFwiICsgX3ZtLnRhc2suaGVpZ2h0LFxuICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJjbGlja1wiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VlbnRlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VvdmVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW92ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlb3V0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW91dFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2Vtb3ZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vkb3duXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXVwXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZXdoZWVsOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXdoZWVsXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaHN0YXJ0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaHN0YXJ0XCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaG1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNobW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hlbmQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoZW5kXCIsICRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRlZnNcIiwgW1xuICAgICAgICAgICAgX2MoXCJjbGlwUGF0aFwiLCB7IGF0dHJzOiB7IGlkOiBfdm0uY2xpcFBhdGhJZCB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJwb2x5Z29uXCIsIHsgYXR0cnM6IHsgcG9pbnRzOiBfdm0uZ2V0UG9pbnRzIH0gfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBvbHlnb25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhci1wb2x5Z29uIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1taWxlc3RvbmUtcG9seWdvblwiLFxuICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXItcG9seWdvblwiXSxcbiAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctbWlsZXN0b25lLXBvbHlnb25cIl0sXG4gICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiYmFzZVwiXSxcbiAgICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctYmFyLXBvbHlnb25cIl1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBhdHRyczogeyBwb2ludHM6IF92bS5nZXRQb2ludHMgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwcm9ncmVzcy1iYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdGFzazogX3ZtLnRhc2ssXG4gICAgICAgICAgICAgIFwiY2xpcC1wYXRoXCI6IFwidXJsKCNcIiArIF92bS5jbGlwUGF0aElkICsgXCIpXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC5kaXNwbGF5XG4gICAgICAgID8gX2MoXCJjaGFydC10ZXh0XCIsIHsgYXR0cnM6IHsgdGFzazogX3ZtLnRhc2sgfSB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZ1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItd3JhcHBlciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvamVjdC13cmFwcGVyXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LWJhci13cmFwcGVyXCJdLFxuICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1wcm9qZWN0LXdyYXBwZXJcIl0sXG4gICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LWJhci13cmFwcGVyXCJdXG4gICAgICApXG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0uZGlzcGxheUV4cGFuZGVyXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImZvcmVpZ25PYmplY3RcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlciBnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlci0tcHJvamVjdFwiLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LWV4cGFuZGVyXCJdLFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZXhwYW5kZXItLXByb2plY3RcIl0sXG4gICAgICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1leHBhbmRlclwiXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgICBfdm0udGFzay54IC1cbiAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIub2Zmc2V0IC1cbiAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSxcbiAgICAgICAgICAgICAgICB5OlxuICAgICAgICAgICAgICAgICAgX3ZtLnRhc2sueSArXG4gICAgICAgICAgICAgICAgICAoX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0IC1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplKSAvXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImV4cGFuZGVyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGFza3M6IFtfdm0udGFza10sXG4gICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJjaGFydFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic3ZnXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvamVjdFwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXJcIl0sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1wcm9qZWN0XCJdLFxuICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctYmFyXCJdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgeDogX3ZtLnRhc2sueCxcbiAgICAgICAgICAgIHk6IF92bS50YXNrLnksXG4gICAgICAgICAgICB3aWR0aDogX3ZtLnRhc2sud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IF92bS50YXNrLmhlaWdodCxcbiAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIFwiICsgX3ZtLnRhc2sud2lkdGggKyBcIiBcIiArIF92bS50YXNrLmhlaWdodCxcbiAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwiY2xpY2tcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlZW50ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlb3ZlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VvdmVyXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZW91dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VvdXRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlbW92ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vtb3ZlXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlZG93blwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2V1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2V1cFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2V3aGVlbDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2V3aGVlbFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hzdGFydDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2hzdGFydFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2htb3ZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaG1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoZW5kOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaGVuZFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkZWZzXCIsIFtcbiAgICAgICAgICAgIF9jKFwiY2xpcFBhdGhcIiwgeyBhdHRyczogeyBpZDogX3ZtLmNsaXBQYXRoSWQgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7IGF0dHJzOiB7IGQ6IF92bS5nZXRQb2ludHMgfSB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXBvbHlnb24gZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXByb2plY3QtcG9seWdvblwiLFxuICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXItcG9seWdvblwiXSxcbiAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctcHJvamVjdC1wb2x5Z29uXCJdLFxuICAgICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImJhc2VcIl0sXG4gICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LWJhci1wb2x5Z29uXCJdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgYXR0cnM6IHsgZDogX3ZtLmdldFBvaW50cyB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInByb2dyZXNzLWJhclwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0YXNrOiBfdm0udGFzayxcbiAgICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogXCJ1cmwoI1wiICsgX3ZtLmNsaXBQYXRoSWQgKyBcIilcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC50ZXh0LmRpc3BsYXlcbiAgICAgICAgPyBfYyhcImNoYXJ0LXRleHRcIiwgeyBhdHRyczogeyB0YXNrOiBfdm0udGFzayB9IH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJnXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhci13cmFwcGVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10YXNrLXdyYXBwZXJcIixcbiAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctYmFyLXdyYXBwZXJcIl0sXG4gICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRhc2std3JhcHBlclwiXSxcbiAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctYmFyLXdyYXBwZXJcIl1cbiAgICAgIClcbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5kaXNwbGF5RXhwYW5kZXJcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWV4cGFuZGVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LWV4cGFuZGVyLS10YXNrXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZXhwYW5kZXJcIl0sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1leHBhbmRlci0tdGFza1wiXSxcbiAgICAgICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImNoYXJ0LWV4cGFuZGVyXCJdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgeDpcbiAgICAgICAgICAgICAgICAgIF92bS50YXNrLnggLVxuICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5vZmZzZXQgLVxuICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplLFxuICAgICAgICAgICAgICAgIHk6XG4gICAgICAgICAgICAgICAgICBfdm0udGFzay55ICtcbiAgICAgICAgICAgICAgICAgIChfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgLVxuICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemUpIC9cbiAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICB3aWR0aDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplLFxuICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZXhwYW5kZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0YXNrczogW192bS50YXNrXSxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImNoYXJ0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzdmdcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10YXNrXCIsXG4gICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LWJhclwiXSxcbiAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRhc2tcIl0sXG4gICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1iYXJcIl1cbiAgICAgICAgICApLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB4OiBfdm0udGFzay54LFxuICAgICAgICAgICAgeTogX3ZtLnRhc2sueSxcbiAgICAgICAgICAgIHdpZHRoOiBfdm0udGFzay53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogX3ZtLnRhc2suaGVpZ2h0LFxuICAgICAgICAgICAgdmlld0JveDogXCIwIDAgXCIgKyBfdm0udGFzay53aWR0aCArIFwiIFwiICsgX3ZtLnRhc2suaGVpZ2h0LFxuICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJjbGlja1wiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VlbnRlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VvdmVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW92ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlb3V0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW91dFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2Vtb3ZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vkb3duXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXVwXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZXdoZWVsOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXdoZWVsXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaHN0YXJ0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaHN0YXJ0XCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaG1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNobW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hlbmQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoZW5kXCIsICRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRlZnNcIiwgW1xuICAgICAgICAgICAgX2MoXCJjbGlwUGF0aFwiLCB7IGF0dHJzOiB7IGlkOiBfdm0uY2xpcFBhdGhJZCB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJwb2x5Z29uXCIsIHsgYXR0cnM6IHsgcG9pbnRzOiBfdm0uZ2V0UG9pbnRzIH0gfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBvbHlnb25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhci1wb2x5Z29uIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10YXNrLXBvbHlnb25cIixcbiAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctYmFyLXBvbHlnb25cIl0sXG4gICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRhc2stcG9seWdvblwiXSxcbiAgICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJiYXNlXCJdLFxuICAgICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1iYXItcG9seWdvblwiXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHBvaW50czogX3ZtLmdldFBvaW50cyB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInByb2dyZXNzLWJhclwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0YXNrOiBfdm0udGFzayxcbiAgICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogXCJ1cmwoI1wiICsgX3ZtLmNsaXBQYXRoSWQgKyBcIilcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC50ZXh0LmRpc3BsYXlcbiAgICAgICAgPyBfYyhcImNoYXJ0LXRleHRcIiwgeyBhdHRyczogeyB0YXNrOiBfdm0udGFzayB9IH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzdmdcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dC13cmFwcGVyXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctdGV4dC13cmFwcGVyXCJdKSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHg6XG4gICAgICAgICAgX3ZtLnRhc2sueCArXG4gICAgICAgICAgX3ZtLnRhc2sud2lkdGggK1xuICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC5vZmZzZXQsXG4gICAgICAgIHk6IF92bS50YXNrLnkgLSBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmdyaWQuaG9yaXpvbnRhbC5nYXAsXG4gICAgICAgIHdpZHRoOiBfdm0uZ2V0V2lkdGgsXG4gICAgICAgIGhlaWdodDogX3ZtLmdldEhlaWdodFxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHg6IFwiMFwiLCB5OiBcIjBcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IF92bS5nZXRIZWlnaHQgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dFwiLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctdGV4dFwiXSksXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLmh0bWxcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10ZXh0LWNvbnRlbnQgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtY29udGVudC0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy10ZXh0LWNvbnRlbnRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy10ZXh0LWNvbnRlbnQtLXRleHRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29udGVudFN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3MoX3ZtLnRhc2subGFiZWwpKV0pXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5odG1sXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtY29udGVudCBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dC1jb250ZW50LS1odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRleHQtY29udGVudFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy10ZXh0LWNvbnRlbnQtLWh0bWxcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbnRlbnRTdHlsZVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0udGFzay5sYWJlbCkgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3M6IF92bS5nZXRDbGFzc1ByZWZpeCgpICsgXCItd3JhcHBlclwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBfdm0ucm9vdC5zdHlsZVtfdm0uZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgXCItd3JhcHBlclwiXSxcbiAgICAgICAgX3ZtLnN0eWxlXG4gICAgICApXG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0uYWxsQ2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzUHJlZml4KCkgKyBcIi1jb250ZW50XCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW192bS5nZXRDbGFzc1ByZWZpeChmYWxzZSkgKyBcIi1jb250ZW50XCJdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiBfdm0ub3B0aW9ucy5zaXplLCBoZWlnaHQ6IF92bS5vcHRpb25zLnNpemUgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJyZWN0XCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzUHJlZml4KCkgKyBcIi1ib3JkZXJcIixcbiAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbX3ZtLmdldENsYXNzUHJlZml4KGZhbHNlKSArIFwiLWJvcmRlclwiXSxcbiAgICAgICAgICAgICAgICAgIF92bS5ib3JkZXJTdHlsZVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHg6IF92bS5ib3JkZXIsXG4gICAgICAgICAgICAgICAgICB5OiBfdm0uYm9yZGVyLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IF92bS5vcHRpb25zLnNpemUgLSBfdm0uYm9yZGVyICogMixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLm9wdGlvbnMuc2l6ZSAtIF92bS5ib3JkZXIgKiAyLFxuICAgICAgICAgICAgICAgICAgcng6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgcnk6IFwiMlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmFsbENoaWxkcmVuLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gX2MoXCJsaW5lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzc1ByZWZpeCgpICsgXCItbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtfdm0uZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgXCItbGluZVwiXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHgxOiBfdm0ubGluZU9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICB5MTogX3ZtLm9wdGlvbnMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgeDI6IF92bS5vcHRpb25zLnNpemUgLSBfdm0ubGluZU9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICB5MjogX3ZtLm9wdGlvbnMuc2l6ZSAvIDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uY29sbGFwc2VkXG4gICAgICAgICAgICAgICAgPyBfYyhcImxpbmVcIiwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzUHJlZml4KCkgKyBcIi1saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW192bS5nZXRDbGFzc1ByZWZpeChmYWxzZSkgKyBcIi1saW5lXCJdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgeDE6IF92bS5vcHRpb25zLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgIHkxOiBfdm0ubGluZU9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICB4MjogX3ZtLm9wdGlvbnMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgeTI6IF92bS5vcHRpb25zLnNpemUgLSBfdm0ubGluZU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3XCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJtYWluLXZpZXdcIl0pXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX21haW4tY29udGFpbmVyLXdyYXBwZXJcIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJtYWluLWNvbnRhaW5lci13cmFwcGVyXCJdLCB7XG4gICAgICAgICAgICBoZWlnaHQ6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0ICsgXCJweFwiXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcIm1haW5WaWV3XCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX21haW4tY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcIm1haW4tY29udGFpbmVyXCJdLCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmhlaWdodCArIFwicHhcIlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcImNvbnRhaW5lclwiXSksXG4gICAgICAgICAgICAgICAgICBvbjogeyBtb3VzZW1vdmU6IF92bS5tb3VzZU1vdmUsIG1vdXNldXA6IF92bS5tb3VzZVVwIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwidGFza0xpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1widGFzay1saXN0LWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5maW5hbFdpZHRoICsgXCJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0ICsgXCJweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ0YXNrLWxpc3RcIildLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImNoYXJ0Q29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcIm1haW4tdmlldy1jb250YWluZXJcIl1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IF92bS5jaGFydE1vdXNlRG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoc3RhcnQ6IF92bS5jaGFydE1vdXNlRG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNldXA6IF92bS5jaGFydE1vdXNlVXAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVuZDogX3ZtLmNoYXJ0TW91c2VVcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbW92ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhcnRNb3VzZU1vdmUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNobW92ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhcnRNb3VzZU1vdmUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZWVsOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFydFdoZWVsKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImNoYXJ0XCIpXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJjaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLWNvbnRhaW5lciBnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtY29udGFpbmVyLS12ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXNjcm9sbC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1zY3JvbGwtY29udGFpbmVyLS12ZXJ0aWNhbFwiXSxcbiAgICAgICAgICAgICAgICBfdm0udmVydGljYWxTdHlsZVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBvbjogeyBzY3JvbGw6IF92bS5vblZlcnRpY2FsU2Nyb2xsIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtLXZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjFweFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmFsbFZpc2libGVUYXNrc0hlaWdodCArIFwicHhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwiY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC1jb250YWluZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0taG9yaXpvbnRhbFwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXNjcm9sbC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXNjcm9sbC1jb250YWluZXItLWhvcml6b250YWxcIl0sXG4gICAgICAgICAgICB7IG1hcmdpbkxlZnQ6IF92bS5nZXRNYXJnaW5MZWZ0IH1cbiAgICAgICAgICApLFxuICAgICAgICAgIG9uOiB7IHNjcm9sbDogX3ZtLm9uSG9yaXpvbnRhbFNjcm9sbCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtLWhvcml6b250YWxcIixcbiAgICAgICAgICAgIHN0eWxlOiB7IGhlaWdodDogXCIxcHhcIiwgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyBcInB4XCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tY29sdW1uXCIsXG4gICAgICBzdHlsZTogX3ZtLml0ZW1Db2x1bW5TdHlsZVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyXCIsXG4gICAgICAgICAgc3R5bGU6IF92bS53cmFwcGVyU3R5bGVcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdChcImRlZmF1bHRcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICBzdHlsZTogX3ZtLmNvbnRhaW5lclN0eWxlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLmh0bWxcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogX3ZtLnZhbHVlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJjbGlja1wiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VlbnRlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VvdmVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW92ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlb3V0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW91dFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2Vtb3ZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vkb3duXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXVwXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZXdoZWVsOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXdoZWVsXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaHN0YXJ0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaHN0YXJ0XCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaG1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNobW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hlbmQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoZW5kXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS52YWx1ZSkgKyBcIlxcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IF92bS52YWx1ZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0udmFsdWUpIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJjbGlja1wiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VlbnRlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZW92ZXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW92ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW91c2VvdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW91dFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZW1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vkb3duXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vdXNldXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXVwXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vdXNld2hlZWw6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXdoZWVsXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRvdWNoc3RhcnQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaHN0YXJ0XCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRvdWNobW92ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNobW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVuZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoZW5kXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgdmFsdWU6IF92bS5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5kaXNwbGF5XCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHJlZjogXCJ0YXNrTGlzdFdyYXBwZXJcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC13cmFwcGVyXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3Qtd3JhcHBlclwiXSwge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICAgIH0pXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJ0YXNrTGlzdFwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdFwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdFwiXSlcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidGFzay1saXN0LWhlYWRlclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcInRhc2tMaXN0SXRlbXNcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW1zXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1pdGVtc1wiXSwge1xuICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5yb3dzSGVpZ2h0ICsgXCJweFwiXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5yb290LnZpc2libGVUYXNrcywgZnVuY3Rpb24odGFzaykge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0YXNrLWxpc3QtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiB0YXNrLmlkLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhc2s6IHRhc2sgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXJcIixcbiAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXJcIl0sIHtcbiAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArIFwicHhcIixcbiAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZ2FwICsgXCJweFwiXG4gICAgICB9KVxuICAgIH0sXG4gICAgX3ZtLl9sKF92bS5yb290LmdldFRhc2tMaXN0Q29sdW1ucywgZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IGNvbHVtbi5faWQsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1jb2x1bW5cIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLWNvbHVtblwiXSxcbiAgICAgICAgICAgIGNvbHVtbi5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItY29sdW1uXCJdLFxuICAgICAgICAgICAgX3ZtLmdldFN0eWxlKGNvbHVtbilcbiAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBjb2x1bW4uZXhwYW5kZXJcbiAgICAgICAgICAgID8gX2MoXCJ0YXNrLWxpc3QtZXhwYW5kZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0YXNrczogX3ZtLmNvbGxhcHNpYmxlLFxuICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItbGFiZWxcIixcbiAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLWxhYmVsXCJdLFxuICAgICAgICAgICAgICAgIGNvbHVtbi5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItbGFiZWxcIl1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uOiBjb2x1bW4gfSxcbiAgICAgICAgICAgICAgb246IHsgbW91c2V1cDogX3ZtLnJlc2l6ZXJNb3VzZVVwIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoY29sdW1uLmxhYmVsKSArIFwiXFxuICAgIFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItd3JhcHBlclwiLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplci13cmFwcGVyXCJdLFxuICAgICAgICAgICAgICAgIGNvbHVtbi5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplci13cmFwcGVyXCJdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbjogY29sdW1uIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVzaXplck1vdXNlRG93bigkZXZlbnQsIGNvbHVtbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1yZXNpemVyXCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyXCJdLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4uc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXJcIl1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uLnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIl1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4uc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCJdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaXRlbVwiXSlcbiAgICB9LFxuICAgIF92bS5fbChfdm0uY29sdW1ucywgZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwiaXRlbS1jb2x1bW5cIixcbiAgICAgICAgeyBrZXk6IGNvbHVtbi5faWQsIGF0dHJzOiB7IGNvbHVtbjogY29sdW1uLCB0YXNrOiBfdm0udGFzayB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBjb2x1bW4uZXhwYW5kZXJcbiAgICAgICAgICAgID8gX2MoXCJ0YXNrLWxpc3QtZXhwYW5kZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0YXNrczogW192bS50YXNrXSxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZXhwYW5kZXIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRhc2tMaXN0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICB9KSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYzNlNTA4NWNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmM2MzA0YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcdGVtcGxhdGVcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwMmM2MzA0YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMmM2MzA0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMmM2MzA0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmM2MzA0YyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwMmM2MzA0YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL0dhbnR0RWxhc3RpYy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmM2MzA0YyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRlZTEwOGUyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx0ZW1wbGF0ZVxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2RlZTEwOGUyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2RlZTEwOGUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2RlZTEwOGUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGVlMTA4ZTImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZGVlMTA4ZTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRlZTEwOGUyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DYWxlbmRhclJvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRhZjA2ZmImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2FsZW5kYXJSb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DYWxlbmRhclJvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHRlbXBsYXRlXFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGRhZjA2ZmInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGRhZjA2ZmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGRhZjA2ZmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhbGVuZGFyUm93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGFmMDZmYiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZGFmMDZmYicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhbGVuZGFyUm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhbGVuZGFyUm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYWxlbmRhclJvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRhZjA2ZmImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NoYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02N2MzZjVjZCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcdGVtcGxhdGVcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2N2MzZjVjZCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2N2MzZjVjZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2N2MzZjVjZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2hhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3YzNmNWNkJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3YzNmNWNkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9DaGFydC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NoYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02N2MzZjVjZCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGF5c0hpZ2hsaWdodC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWJmZTY0ZTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRGF5c0hpZ2hsaWdodC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0RheXNIaWdobGlnaHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx0ZW1wbGF0ZVxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFiZmU2NGU4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFiZmU2NGU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFiZmU2NGU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EYXlzSGlnaGxpZ2h0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYmZlNjRlOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYmZlNjRlOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2hhcnQvRGF5c0hpZ2hsaWdodC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGF5c0hpZ2hsaWdodC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXlzSGlnaGxpZ2h0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXlzSGlnaGxpZ2h0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYmZlNjRlOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGVwZW5kZW5jeUxpbmVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMWNiZjZiYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EZXBlbmRlbmN5TGluZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EZXBlbmRlbmN5TGluZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx0ZW1wbGF0ZVxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2YxY2JmNmJhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2YxY2JmNmJhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2YxY2JmNmJhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EZXBlbmRlbmN5TGluZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYxY2JmNmJhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2YxY2JmNmJhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RlcGVuZGVuY3lMaW5lcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EZXBlbmRlbmN5TGluZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RlcGVuZGVuY3lMaW5lcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjFjYmY2YmEmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyaWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZjk3OWE3JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyaWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcdGVtcGxhdGVcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyYmY5NzlhNycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyYmY5NzlhNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyYmY5NzlhNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR3JpZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmJmOTc5YTcmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmJmOTc5YTcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0NoYXJ0L0dyaWQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyaWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JpZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JpZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmJmOTc5YTcmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YmMzOTM1NSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcdGVtcGxhdGVcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0YmMzOTM1NScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YmMzOTM1NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YmMzOTM1NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRiYzM5MzU1JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRiYzM5MzU1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9Qcm9ncmVzc0Jhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YmMzOTM1NSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWlsZXN0b25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMDEzMDA2YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NaWxlc3RvbmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NaWxlc3RvbmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx0ZW1wbGF0ZVxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMwMTMwMDZjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMwMTMwMDZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMwMTMwMDZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NaWxlc3RvbmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwMTMwMDZjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMwMTMwMDZjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvTWlsZXN0b25lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NaWxlc3RvbmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWlsZXN0b25lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NaWxlc3RvbmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwMTMwMDZjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Qcm9qZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzdiYmQ3MyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qcm9qZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvamVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHRlbXBsYXRlXFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDc3YmJkNzMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDc3YmJkNzMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDc3YmJkNzMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Byb2plY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3N2JiZDczJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA3N2JiZDczJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvUHJvamVjdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvamVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9qZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9qZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzdiYmQ3MyZcIiIsIi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IFRhc2sgbWl4aW5cclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cclxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCB2aWV3IGJveFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGdldFZpZXdCb3goKSB7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnRhc2s7XHJcbiAgICAgIHJldHVybiBgMCAwICR7dGFzay53aWR0aH0gJHt0YXNrLmhlaWdodH1gO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBncm91cCB0cmFuc2Zvcm1cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRHcm91cFRyYW5zZm9ybSgpIHtcclxuICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt0aGlzLnRhc2sueH0gJHt0aGlzLnRhc2sueX0pYDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG91bGQgd2UgZGlzcGxheSBleHBhbmRlcj9cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgZGlzcGxheUV4cGFuZGVyKCkge1xyXG4gICAgICBjb25zdCBleHBhbmRlciA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyO1xyXG4gICAgICByZXR1cm4gZXhwYW5kZXIuZGlzcGxheSB8fCAoZXhwYW5kZXIuZGlzcGxheUlmVGFza0xpc3RIaWRkZW4gJiYgIXRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXkpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbWl0IGV2ZW50XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgZW1pdEV2ZW50KGV2ZW50TmFtZSwgZXZlbnQpIHtcclxuICAgICAgaWYgKCF0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yb290LiRlbWl0KGBjaGFydC0ke3RoaXMudGFzay50eXBlfS0ke2V2ZW50TmFtZX1gLCB7IGV2ZW50LCBkYXRhOiB0aGlzLnRhc2sgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGFzay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTljMjNlY2EmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGFzay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Rhc2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx0ZW1wbGF0ZVxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2U5YzIzZWNhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2U5YzIzZWNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2U5YzIzZWNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UYXNrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lOWMyM2VjYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlOWMyM2VjYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Rhc2sudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFzay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFzay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTljMjNlY2EmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RleHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1OWMyZmU0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcdGVtcGxhdGVcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NTljMmZlNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NTljMmZlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NTljMmZlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGV4dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDU5YzJmZTQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDU5YzJmZTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0NoYXJ0L1RleHQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGV4dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDU5YzJmZTQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0V4cGFuZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOWEyMTE3NyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FeHBhbmRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0V4cGFuZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcdGVtcGxhdGVcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwOWEyMTE3NycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwOWEyMTE3NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwOWEyMTE3NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5YTIxMTc3JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA5YTIxMTc3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9FeHBhbmRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V4cGFuZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOWEyMTE3NyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFpblZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiYzQyMTJlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01haW5WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWFpblZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx0ZW1wbGF0ZVxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBiYzQyMTJlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBiYzQyMTJlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBiYzQyMTJlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYWluVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGJjNDIxMmUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGJjNDIxMmUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL01haW5WaWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpblZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiYzQyMTJlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JdGVtQ29sdW1uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYjVhNmM5NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JdGVtQ29sdW1uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHRlbXBsYXRlXFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnY2I1YTZjOTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnY2I1YTZjOTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnY2I1YTZjOTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0l0ZW1Db2x1bW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNiNWE2Yzk2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2NiNWE2Yzk2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9UYXNrTGlzdC9JdGVtQ29sdW1uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtQ29sdW1uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1Db2x1bW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1Db2x1bW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNiNWE2Yzk2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UYXNrTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmUxMWYxMmYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UYXNrTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHRlbXBsYXRlXFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmUxMWYxMmYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmUxMWYxMmYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmUxMWYxMmYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZTExZjEyZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2ZTExZjEyZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmUxMWYxMmYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZWZkZDdjOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYXNrTGlzdEhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcdGVtcGxhdGVcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhZWZkZDdjOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhZWZkZDdjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhZWZkZDdjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGFza0xpc3RIZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFlZmRkN2M4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2FlZmRkN2M4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEhlYWRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3RIZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3RIZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZWZkZDdjOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NzE2MjkzYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYXNrTGlzdEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UYXNrTGlzdEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx0ZW1wbGF0ZVxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzk3MTYyOTNjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzk3MTYyOTNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzk3MTYyOTNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UYXNrTGlzdEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk3MTYyOTNjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzk3MTYyOTNjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0SXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0SXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTcxNjI5M2MmXCIiLCIvKipcclxuICogQGZpbGVvdmVydmlldyBTdHlsZXMgZm9yIGdhbnR0LWVsYXN0aWNcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cclxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3R5bGUoZm9udFNpemUgPSAnMTJweCcsIGZvbnRGYW1pbHkgPSAnQXJpYWwsIHNhbnMtc2VyaWYnKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZvbnRTaXplLFxyXG4gICAgZm9udEZhbWlseSxcclxuICAgICdtYWluLXZpZXcnOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJ1xyXG4gICAgfSxcclxuICAgICdtYWluLWNvbnRhaW5lci13cmFwcGVyJzoge1xyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICdib3JkZXItdG9wJzogJzFweCBzb2xpZCAjZWVlJyxcclxuICAgICAgJ2JvcmRlci1ib3R0b20nOiAnMXB4IHNvbGlkICNlZWUnXHJcbiAgICB9LFxyXG4gICAgJ21haW4tY29udGFpbmVyJzoge1xyXG4gICAgICBmbG9hdDogJ2xlZnQnLFxyXG4gICAgICAnbWF4LXdpZHRoJzogJzEwMCUnXHJcbiAgICB9LFxyXG4gICAgJ21haW4tdmlldy1jb250YWluZXInOiB7fSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICdtYXgtd2lkdGgnOiAnMTAwJScsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnXHJcbiAgICB9LFxyXG4gICAgJ2NhbGVuZGFyLXdyYXBwZXInOiB7XHJcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJ1xyXG4gICAgfSxcclxuICAgIGNhbGVuZGFyOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjZjNmNWY3JyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xyXG4gICAgfSxcclxuICAgICdjYWxlbmRhci1yb3cnOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdzcGFjZS1ldmVubHknXHJcbiAgICB9LFxyXG4gICAgJ2NhbGVuZGFyLXJvdy0tbW9udGgnOiB7fSxcclxuICAgICdjYWxlbmRhci1yb3ctLWRheSc6IHt9LFxyXG4gICAgJ2NhbGVuZGFyLXJvdy0taG91cic6IHtcclxuICAgICAgJ2JvcmRlci1ib3R0b20nOiAnMXB4IHNvbGlkICNlZWUnXHJcbiAgICB9LFxyXG4gICAgJ2NhbGVuZGFyLXJvdy1yZWN0Jzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCdcclxuICAgIH0sXHJcbiAgICAnY2FsZW5kYXItcm93LXJlY3QtLW1vbnRoJzoge30sXHJcbiAgICAnY2FsZW5kYXItcm93LXJlY3QtLWRheSc6IHt9LFxyXG4gICAgJ2NhbGVuZGFyLXJvdy1yZWN0LS1ob3VyJzoge30sXHJcbiAgICAnY2FsZW5kYXItcm93LXJlY3QtY2hpbGQnOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICdib3JkZXItcmlnaHQtd2lkdGgnOiAnMXB4JywgLy8gQ2FsZW5kYXJcclxuICAgICAgJ2JvcmRlci1yaWdodC1jb2xvcic6ICcjZGFkYWRhJyxcclxuICAgICAgJ2JvcmRlci1yaWdodC1zdHlsZSc6ICdzb2xpZCcsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXHJcbiAgICB9LFxyXG4gICAgJ2NhbGVuZGFyLXJvdy1yZWN0LWNoaWxkLS1tb250aCc6IHt9LFxyXG4gICAgJ2NhbGVuZGFyLXJvdy1yZWN0LWNoaWxkLS1kYXknOiB7ICd0ZXh0LWFsaWduJzogJ2NlbnRlcicgfSxcclxuICAgICdjYWxlbmRhci1yb3ctcmVjdC1jaGlsZC0taG91cic6IHsgJ3RleHQtYWxpZ24nOiAnY2VudGVyJyB9LFxyXG4gICAgJ2NhbGVuZGFyLXJvdy10ZXh0Jzoge1xyXG4gICAgICAnZm9udC1mYW1pbHknOiBmb250RmFtaWx5LCAvLyBHYW50dEVsYXN0aWNcclxuICAgICAgJ2ZvbnQtc2l6ZSc6IGZvbnRTaXplLCAvL0dhbnR0RWxhc3RpY1xyXG4gICAgICBjb2xvcjogJyM2MDYwNjAnLFxyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICAgIH0sXHJcbiAgICAnY2FsZW5kYXItcm93LXRleHQtLW1vbnRoJzoge30sXHJcbiAgICAnY2FsZW5kYXItcm93LXRleHQtLWRheSc6IHt9LFxyXG4gICAgJ2NhbGVuZGFyLXJvdy10ZXh0LS1ob3VyJzoge30sXHJcbiAgICAndGFzay1saXN0LXdyYXBwZXInOiB7fSxcclxuICAgICd0YXNrLWxpc3QnOiB7IGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsICdib3JkZXItY29sb3InOiAnI2VlZScgfSxcclxuICAgICd0YXNrLWxpc3QtaGVhZGVyJzoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJyxcclxuICAgICAgJ3ZlcnRpY2FsLWFsaWduJzogJ21pZGRsZScsXHJcbiAgICAgICdib3JkZXItYm90dG9tJzogJzFweCBzb2xpZCAjZWVlJyxcclxuICAgICAgJ2JvcmRlci1sZWZ0JzogJzFweCBzb2xpZCAjZWVlJ1xyXG4gICAgfSxcclxuICAgICd0YXNrLWxpc3QtaGVhZGVyLWNvbHVtbic6IHtcclxuICAgICAgJ2JvcmRlci1sZWZ0JzogJzFweCBzb2xpZCAjMDAwMDAwNTAnLFxyXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI2YzZjVmNycsXHJcbiAgICAgICdib3JkZXItY29sb3InOiAndHJhbnNwYXJlbnQnXHJcbiAgICB9LFxyXG4gICAgJ3Rhc2stbGlzdC1leHBhbmRlci13cmFwcGVyJzoge1xyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICAnZmxleC1zaHJpbmsnOiAnMCcsXHJcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICBtYXJnaW46ICcwIDAgMCAxMHB4J1xyXG4gICAgfSxcclxuICAgICd0YXNrLWxpc3QtZXhwYW5kZXItY29udGVudCc6IHtcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIG1hcmdpbjogJ2F1dG8gMHB4JyxcclxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJ1xyXG4gICAgfSxcclxuICAgICd0YXNrLWxpc3QtZXhwYW5kZXItbGluZSc6IHtcclxuICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgc3Ryb2tlOiAnIzAwMDAwMCcsXHJcbiAgICAgICdzdHJva2Utd2lkdGgnOiAnMScsXHJcbiAgICAgICdzdHJva2UtbGluZWNhcCc6ICdyb3VuZCdcclxuICAgIH0sXHJcbiAgICAndGFzay1saXN0LWV4cGFuZGVyLWJvcmRlcic6IHtcclxuICAgICAgZmlsbDogJyNmZmZmZmZhMCcsXHJcbiAgICAgIHN0cm9rZTogJyMwMDAwMDBBMCdcclxuICAgIH0sXHJcbiAgICAnY2hhcnQtZXhwYW5kZXItd3JhcHBlcic6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgJ2xpbmUtaGVpZ2h0JzogJzEnLFxyXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcclxuICAgICAgbWFyZ2luOiAnMCdcclxuICAgIH0sXHJcbiAgICAnY2hhcnQtZXhwYW5kZXItY29udGVudCc6IHtcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIG1hcmdpbjogJ2F1dG8gMHB4JyxcclxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJ1xyXG4gICAgfSxcclxuICAgICdjaGFydC1leHBhbmRlci1saW5lJzoge1xyXG4gICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBzdHJva2U6ICcjMDAwMDAwJyxcclxuICAgICAgJ3N0cm9rZS13aWR0aCc6ICcxJyxcclxuICAgICAgJ3N0cm9rZS1saW5lY2FwJzogJ3JvdW5kJ1xyXG4gICAgfSxcclxuICAgICdjaGFydC1leHBhbmRlci1ib3JkZXInOiB7XHJcbiAgICAgIGZpbGw6ICcjZmZmZmZmYTAnLFxyXG4gICAgICBzdHJva2U6ICcjMDAwMDAwQTAnXHJcbiAgICB9LFxyXG4gICAgJ3Rhc2stbGlzdC1jb250YWluZXInOiB7fSxcclxuICAgICd0YXNrLWxpc3QtaGVhZGVyLWxhYmVsJzoge1xyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICd0ZXh0LW92ZXJmbG93JzogJ2VsbGlwc2lzJyxcclxuICAgICAgJ2ZvbnQtZmFtaWx5JzogZm9udEZhbWlseSxcclxuICAgICAgJ2ZvbnQtc2l6ZSc6IGZvbnRTaXplLFxyXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcclxuICAgICAgbWFyZ2luOiAnYXV0byA2cHgnLFxyXG4gICAgICAnZmxleC1ncm93JzogJzEnLFxyXG4gICAgICAndmVydGljYWwtYWxpZ24nOiAnbWlkZGxlJ1xyXG4gICAgfSxcclxuICAgICd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItd3JhcHBlcic6IHtcclxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIHdpZHRoOiAnNnB4JyxcclxuICAgICAgY3Vyc29yOiAnY29sLXJlc2l6ZScsXHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICAgICd2ZXJ0aWNhbC1hbGlnbic6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplcic6IHsgbWFyZ2luOiAnYXV0byAwcHgnIH0sXHJcbiAgICAndGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdCc6IHtcclxuICAgICAgd2lkdGg6ICczcHgnLFxyXG4gICAgICBoZWlnaHQ6ICczcHgnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI2RkZCcsXHJcbiAgICAgICdib3JkZXItcmFkaXVzJzogJzEwMCUnLFxyXG4gICAgICBtYXJnaW46ICc0cHggMHB4J1xyXG4gICAgfSxcclxuICAgICd0YXNrLWxpc3QtaXRlbXMnOiB7XHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgICd0YXNrLWxpc3QtaXRlbSc6IHtcclxuICAgICAgJ2JvcmRlci10b3AnOiAnMXB4IHNvbGlkICNlZWUnLFxyXG4gICAgICAnYm9yZGVyLXJpZ2h0JzogJzFweCBzb2xpZCAjZWVlJyxcclxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xyXG4gICAgfSxcclxuICAgICd0YXNrLWxpc3QtaXRlbS1jb2x1bW4nOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICAgICdmbGV4LXNocmluayc6ICcwJyxcclxuICAgICAgJ2JvcmRlci1sZWZ0JzogJzFweCBzb2xpZCAjMDAwMDAwNTAnLFxyXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcclxuICAgICAgJ2JvcmRlci1jb2xvcic6ICcjZWVlJ1xyXG4gICAgfSxcclxuICAgICd0YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyJzoge1xyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgICd0YXNrLWxpc3QtaXRlbS12YWx1ZS1jb250YWluZXInOiB7XHJcbiAgICAgIG1hcmdpbjogJ2F1dG8gMHB4JyxcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgICB9LFxyXG4gICAgJ3Rhc2stbGlzdC1pdGVtLXZhbHVlJzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAnZmxleC1zaHJpbmsnOiAnMTAwJyxcclxuICAgICAgJ2ZvbnQtZmFtaWx5JzogZm9udEZhbWlseSxcclxuICAgICAgJ2ZvbnQtc2l6ZSc6IGZvbnRTaXplLFxyXG4gICAgICAnbWFyZ2luLXRvcCc6ICdhdXRvJyxcclxuICAgICAgJ21hcmdpbi1ib3R0b20nOiAnYXV0bycsXHJcbiAgICAgICdtYXJnaW4tbGVmdCc6ICc2cHgnLCAvLyBUYXNrTGlzdFxyXG4gICAgICAnbWFyZ2luLXJpZ2h0JzogJzZweCcsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgJ3RleHQtb3ZlcmZsb3cnOiAnZWxsaXBzaXMnLFxyXG4gICAgICAnbGluZS1oZWlnaHQnOiAnMS41ZW0nLFxyXG4gICAgICAnd29yZC1icmVhayc6ICdrZWVwLWFsbCcsXHJcbiAgICAgICd3aGl0ZS1zcGFjZSc6ICdub3dyYXAnLFxyXG4gICAgICBjb2xvcjogJyM2MDYwNjAnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRidcclxuICAgIH0sXHJcbiAgICAnZ3JpZC1saW5lcyc6IHt9LFxyXG4gICAgJ2dyaWQtbGluZS1ob3Jpem9udGFsJzoge1xyXG4gICAgICBzdHJva2U6ICcjMDAwMDAwMTAnLFxyXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogMVxyXG4gICAgfSxcclxuICAgICdncmlkLWxpbmUtdmVydGljYWwnOiB7XHJcbiAgICAgIHN0cm9rZTogJyMwMDAwMDAxMCcsXHJcbiAgICAgICdzdHJva2Utd2lkdGgnOiAxXHJcbiAgICB9LFxyXG4gICAgJ2dyaWQtbGluZS10aW1lJzoge1xyXG4gICAgICBzdHJva2U6ICcjRkYwMDAwODAnLFxyXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogMVxyXG4gICAgfSxcclxuICAgIGNoYXJ0OiB7XHJcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJyxcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgICB9LFxyXG4gICAgJ2NoYXJ0LWNhbGVuZGFyLWNvbnRhaW5lcic6IHtcclxuICAgICAgJ3VzZXItc2VsZWN0JzogJ25vbmUnLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICdtYXgtd2lkdGgnOiAnMTAwJScsXHJcbiAgICAgICdib3JkZXItcmlnaHQnOiAnMXB4IHNvbGlkICNlZWUnXHJcbiAgICB9LFxyXG4gICAgJ2NoYXJ0LWdyYXBoLWNvbnRhaW5lcic6IHtcclxuICAgICAgJ3VzZXItc2VsZWN0JzogJ25vbmUnLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICdtYXgtd2lkdGgnOiAnMTAwJScsXHJcbiAgICAgICdib3JkZXItcmlnaHQnOiAnMXB4IHNvbGlkICNlZWUnXHJcbiAgICB9LFxyXG4gICAgJ2NoYXJ0LWFyZWEnOiB7fSxcclxuICAgICdjaGFydC1ncmFwaCc6IHtcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXHJcbiAgICB9LFxyXG4gICAgJ2NoYXJ0LXJvdy10ZXh0LXdyYXBwZXInOiB7fSxcclxuICAgICdjaGFydC1yb3ctdGV4dCc6IHtcclxuICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmZhMCcsXHJcbiAgICAgICdib3JkZXItcmFkaXVzJzogJzEwcHgnLFxyXG4gICAgICAnZm9udC1mYW1pbHknOiBmb250RmFtaWx5LFxyXG4gICAgICAnZm9udC1zaXplJzogZm9udFNpemUsXHJcbiAgICAgICdmb250LXdlaWdodCc6ICdub3JtYWwnLFxyXG4gICAgICBjb2xvcjogJyMwMDAwMDBhMCcsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xyXG4gICAgfSxcclxuICAgICdjaGFydC1yb3ctdGV4dC1jb250ZW50Jzoge1xyXG4gICAgICBwYWRkaW5nOiAnMHB4IDZweCdcclxuICAgIH0sXHJcbiAgICAnY2hhcnQtcm93LXRleHQtY29udGVudC0tdGV4dCc6IHt9LFxyXG4gICAgJ2NoYXJ0LXJvdy10ZXh0LWNvbnRlbnQtLWh0bWwnOiB7fSxcclxuICAgICdjaGFydC1yb3ctd3JhcHBlcic6IHt9LFxyXG4gICAgJ2NoYXJ0LXJvdy1iYXItd3JhcHBlcic6IHt9LFxyXG4gICAgJ2NoYXJ0LXJvdy1iYXInOiB7fSxcclxuICAgICdjaGFydC1yb3ctYmFyLXBvbHlnb24nOiB7XHJcbiAgICAgIHN0cm9rZTogJyNFNzRDM0MnLFxyXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogMSxcclxuICAgICAgZmlsbDogJyNGNzVDNEMnXHJcbiAgICB9LFxyXG4gICAgJ2NoYXJ0LXJvdy1wcm9qZWN0LXdyYXBwZXInOiB7fSxcclxuICAgICdjaGFydC1yb3ctcHJvamVjdCc6IHt9LFxyXG4gICAgJ2NoYXJ0LXJvdy1wcm9qZWN0LXBvbHlnb24nOiB7fSxcclxuICAgICdjaGFydC1yb3ctbWlsZXN0b25lLXdyYXBwZXInOiB7fSxcclxuICAgICdjaGFydC1yb3ctbWlsZXN0b25lJzoge30sXHJcbiAgICAnY2hhcnQtcm93LW1pbGVzdG9uZS1wb2x5Z29uJzoge30sXHJcbiAgICAnY2hhcnQtcm93LXRhc2std3JhcHBlcic6IHt9LFxyXG4gICAgJ2NoYXJ0LXJvdy10YXNrJzoge30sXHJcbiAgICAnY2hhcnQtcm93LXRhc2stcG9seWdvbic6IHt9LFxyXG4gICAgJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItd3JhcHBlcic6IHt9LFxyXG4gICAgJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXInOiB7fSxcclxuICAgICdjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLWxpbmUnOiB7XHJcbiAgICAgIHN0cm9rZTogJyNmZmZmZmYyNScsXHJcbiAgICAgICdzdHJva2Utd2lkdGgnOiAyMFxyXG4gICAgfSxcclxuICAgICdjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXNvbGlkJzoge1xyXG4gICAgICBmaWxsOiAnIzBFQUM1MScsXHJcbiAgICAgIGhlaWdodDogJzIwJSdcclxuICAgIH0sXHJcbiAgICAnY2hhcnQtcm93LXByb2dyZXNzLWJhci1wYXR0ZXJuJzoge1xyXG4gICAgICBmaWxsOiAndXJsKCNkaWFnb25hbEhhdGNoKScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMC4xKSBzY2FsZVkoMC44KSdcclxuICAgIH0sXHJcbiAgICAnY2hhcnQtcm93LXByb2dyZXNzLWJhci1vdXRsaW5lJzoge1xyXG4gICAgICBzdHJva2U6ICcjRTc0QzNDJyxcclxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDFcclxuICAgIH0sXHJcbiAgICAnY2hhcnQtZGVwZW5kZW5jeS1saW5lcy13cmFwcGVyJzoge30sXHJcbiAgICAnY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoJzoge1xyXG4gICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBzdHJva2U6ICcjRkZhMDAwOTAnLFxyXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogMlxyXG4gICAgfSxcclxuICAgICdjaGFydC1zY3JvbGwtY29udGFpbmVyJzoge30sXHJcbiAgICAnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0taG9yaXpvbnRhbCc6IHtcclxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgJ21heC13aWR0aCc6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgICdjaGFydC1zY3JvbGwtY29udGFpbmVyLS12ZXJ0aWNhbCc6IHtcclxuICAgICAgJ292ZXJmbG93LXknOiAnYXV0bycsXHJcbiAgICAgICdvdmVyZmxvdy14JzogJ2hpZGRlbicsXHJcbiAgICAgICdtYXgtaGVpZ2h0JzogJzEwMCUnLFxyXG4gICAgICBmbG9hdDogJ3JpZ2h0J1xyXG4gICAgfSxcclxuICAgICdjaGFydC1kYXlzLWhpZ2hsaWdodC1yZWN0Jzoge1xyXG4gICAgICBmaWxsOiAnI2YzZjVmNzgwJ1xyXG4gICAgfSxcclxuICAgICdzbG90LWhlYWRlci1iZWZvcmVPcHRpb25zJzoge1xyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Z1ZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=