function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}
function uniLen(s) {
    return [...s].length
}
if (function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        var n = [],
            i = n.slice,
            o = n.concat,
            r = n.push,
            s = n.indexOf,
            a = {},
            l = a.toString,
            c = a.hasOwnProperty,
            u = {},
            d = "1.11.2",
            h = function(t, e) {
                return new h.fn.init(t, e)
            },
            f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            p = /^-ms-/,
            g = /-([\da-z])/gi,
            m = function(t, e) {
                return e.toUpperCase()
            };

        function v(t) {
            var e = t.length,
                n = h.type(t);
            return "function" !== n && !h.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }
        h.fn = h.prototype = {
            jquery: d,
            constructor: h,
            selector: "",
            length: 0,
            toArray: function() {
                return i.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : i.call(this)
            },
            pushStack: function(t) {
                var e = h.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return h.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(h.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(i.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: r,
            sort: n.sort,
            splice: n.splice
        }, h.extend = h.fn.extend = function() {
            var t, e, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || h.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (o = arguments[a]))
                    for (i in o) t = s[i], s !== (n = o[i]) && (c && n && (h.isPlainObject(n) || (e = h.isArray(n))) ? (e ? (e = !1, r = t && h.isArray(t) ? t : []) : r = t && h.isPlainObject(t) ? t : {}, s[i] = h.extend(c, r, n)) : void 0 !== n && (s[i] = n));
            return s
        }, h.extend({
            expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === h.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === h.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !h.isArray(t) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== h.type(t) || t.nodeType || h.isWindow(t)) return !1;
                try {
                    if (t.constructor && !c.call(t, "constructor") && !c.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (t) {
                    return !1
                }
                if (u.ownLast)
                    for (e in t) return c.call(t, e);
                for (e in t);
                return void 0 === e || c.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? a[l.call(t)] || "object" : typeof t
            },
            globalEval: function(e) {
                e && h.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(p, "ms-").replace(g, m)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, n) {
                var i = 0,
                    o = t.length,
                    r = v(t);
                if (n) {
                    if (r)
                        for (; o > i && !1 !== e.apply(t[i], n); i++);
                    else
                        for (i in t)
                            if (!1 === e.apply(t[i], n)) break
                } else if (r)
                    for (; o > i && !1 !== e.call(t[i], i, t[i]); i++);
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(f, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (v(Object(t)) ? h.merge(n, "string" == typeof t ? [t] : t) : r.call(n, t)), n
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (s) return s.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; n > i;) t[o++] = e[i++];
                if (n != n)
                    for (; void 0 !== e[i];) t[o++] = e[i++];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i = [], o = 0, r = t.length, s = !n; r > o; o++) !e(t[o], o) !== s && i.push(t[o]);
                return i
            },
            map: function(t, e, n) {
                var i, r = 0,
                    s = t.length,
                    a = [];
                if (v(t))
                    for (; s > r; r++) null != (i = e(t[r], r, n)) && a.push(i);
                else
                    for (r in t) null != (i = e(t[r], r, n)) && a.push(i);
                return o.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, o, r;
                return "string" == typeof e && (r = t[e], e = t, t = r), h.isFunction(t) ? (n = i.call(arguments, 2), (o = function() {
                    return t.apply(e || this, n.concat(i.call(arguments)))
                }).guid = t.guid = t.guid || h.guid++, o) : void 0
            },
            now: function() {
                return +new Date
            },
            support: u
        }), h.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            a["[object " + e + "]"] = e.toLowerCase()
        });
        var y = function(t) {
            var e, n, i, o, r, s, a, l, c, u, d, h, f, p, g, m, v, y, w, b = "sizzle" + 1 * new Date,
                _ = t.document,
                x = 0,
                C = 0,
                S = st(),
                T = st(),
                E = st(),
                k = function(t, e) {
                    return t === e && (d = !0), 0
                },
                D = 1 << 31,
                I = {}.hasOwnProperty,
                A = [],
                N = A.pop,
                O = A.push,
                M = A.push,
                L = A.slice,
                P = function(t, e) {
                    for (var n = 0, i = t.length; i > n; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                B = "[\\x20\\t\\r\\n\\f]",
                H = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                W = H.replace("w", "w#"),
                z = "\\[" + B + "*(" + H + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + B + "*\\]",
                R = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
                $ = new RegExp(B + "+", "g"),
                q = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
                F = new RegExp("^" + B + "*," + B + "*"),
                X = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
                U = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
                Y = new RegExp(R),
                Q = new RegExp("^" + W + "$"),
                V = {
                    ID: new RegExp("^#(" + H + ")"),
                    CLASS: new RegExp("^\\.(" + H + ")"),
                    TAG: new RegExp("^(" + H.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + z),
                    PSEUDO: new RegExp("^" + R),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + j + ")$", "i"),
                    needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
                },
                K = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                Z = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                tt = /[+~]/,
                et = /'|\\/g,
                nt = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
                it = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i != i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                ot = function() {
                    h()
                };
            try {
                M.apply(A = L.call(_.childNodes), _.childNodes), A[_.childNodes.length].nodeType
            } catch (t) {
                M = {
                    apply: A.length ? function(t, e) {
                        O.apply(t, L.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }

            function rt(t, e, i, o) {
                var r, a, c, u, d, p, v, y, x, C;
                if ((e ? e.ownerDocument || e : _) !== f && h(e), i = i || [], u = (e = e || f).nodeType, "string" != typeof t || !t || 1 !== u && 9 !== u && 11 !== u) return i;
                if (!o && g) {
                    if (11 !== u && (r = J.exec(t)))
                        if (c = r[1]) {
                            if (9 === u) {
                                if (!(a = e.getElementById(c)) || !a.parentNode) return i;
                                if (a.id === c) return i.push(a), i
                            } else if (e.ownerDocument && (a = e.ownerDocument.getElementById(c)) && w(e, a) && a.id === c) return i.push(a), i
                        } else {
                            if (r[2]) return M.apply(i, e.getElementsByTagName(t)), i;
                            if ((c = r[3]) && n.getElementsByClassName) return M.apply(i, e.getElementsByClassName(c)), i
                        }
                    if (n.qsa && (!m || !m.test(t))) {
                        if (y = v = b, x = e, C = 1 !== u && t, 1 === u && "object" !== e.nodeName.toLowerCase()) {
                            for (p = s(t), (v = e.getAttribute("id")) ? y = v.replace(et, "\\$&") : e.setAttribute("id", y), y = "[id='" + y + "'] ", d = p.length; d--;) p[d] = y + mt(p[d]);
                            x = tt.test(t) && pt(e.parentNode) || e, C = p.join(",")
                        }
                        if (C) try {
                            return M.apply(i, x.querySelectorAll(C)), i
                        } catch (t) {} finally {
                            v || e.removeAttribute("id")
                        }
                    }
                }
                return l(t.replace(q, "$1"), e, i, o)
            }

            function st() {
                var t = [];
                return function e(n, o) {
                    return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o
                }
            }

            function at(t) {
                return t[b] = !0, t
            }

            function lt(t) {
                var e = f.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function ct(t, e) {
                for (var n = t.split("|"), o = t.length; o--;) i.attrHandle[n[o]] = e
            }

            function ut(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || D) - (~t.sourceIndex || D);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function dt(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function ht(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function ft(t) {
                return at(function(e) {
                    return e = +e, at(function(n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function pt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (e in n = rt.support = {}, r = rt.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, h = rt.setDocument = function(t) {
                    var e, o, s = t ? t.ownerDocument || t : _;
                    return s !== f && 9 === s.nodeType && s.documentElement ? (f = s, p = s.documentElement, (o = s.defaultView) && o !== o.top && (o.addEventListener ? o.addEventListener("unload", ot, !1) : o.attachEvent && o.attachEvent("onunload", ot)), g = !r(s), n.attributes = lt(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), n.getElementsByTagName = lt(function(t) {
                        return t.appendChild(s.createComment("")), !t.getElementsByTagName("*").length
                    }), n.getElementsByClassName = Z.test(s.getElementsByClassName), n.getById = lt(function(t) {
                        return p.appendChild(t).id = b, !s.getElementsByName || !s.getElementsByName(b).length
                    }), n.getById ? (i.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var n = e.getElementById(t);
                            return n && n.parentNode ? [n] : []
                        }
                    }, i.filter.ID = function(t) {
                        var e = t.replace(nt, it);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete i.find.ID, i.filter.ID = function(t) {
                        var e = t.replace(nt, it);
                        return function(t) {
                            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), i.find.TAG = n.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var n, i = [],
                            o = 0,
                            r = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    }, i.find.CLASS = n.getElementsByClassName && function(t, e) {
                        return g ? e.getElementsByClassName(t) : void 0
                    }, v = [], m = [], (n.qsa = Z.test(s.querySelectorAll)) && (lt(function(t) {
                        p.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + B + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + B + "*(?:value|" + j + ")"), t.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
                    }), lt(function(t) {
                        var e = s.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + B + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                    })), (n.matchesSelector = Z.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt(function(t) {
                        n.disconnectedMatch = y.call(t, "div"), y.call(t, "[s!='']:x"), v.push("!=", R)
                    }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = Z.test(p.compareDocumentPosition), w = e || Z.test(p.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, k = e ? function(t, e) {
                        if (t === e) return d = !0, 0;
                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === s || t.ownerDocument === _ && w(_, t) ? -1 : e === s || e.ownerDocument === _ && w(_, e) ? 1 : u ? P(u, t) - P(u, e) : 0 : 4 & i ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return d = !0, 0;
                        var n, i = 0,
                            o = t.parentNode,
                            r = e.parentNode,
                            a = [t],
                            l = [e];
                        if (!o || !r) return t === s ? -1 : e === s ? 1 : o ? -1 : r ? 1 : u ? P(u, t) - P(u, e) : 0;
                        if (o === r) return ut(t, e);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (n = e; n = n.parentNode;) l.unshift(n);
                        for (; a[i] === l[i];) i++;
                        return i ? ut(a[i], l[i]) : a[i] === _ ? -1 : l[i] === _ ? 1 : 0
                    }, s) : f
                }, rt.matches = function(t, e) {
                    return rt(t, null, null, e)
                }, rt.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== f && h(t), e = e.replace(U, "='$1']"), !(!n.matchesSelector || !g || v && v.test(e) || m && m.test(e))) try {
                        var i = y.call(t, e);
                        if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {}
                    return rt(e, f, null, [t]).length > 0
                }, rt.contains = function(t, e) {
                    return (t.ownerDocument || t) !== f && h(t), w(t, e)
                }, rt.attr = function(t, e) {
                    (t.ownerDocument || t) !== f && h(t);
                    var o = i.attrHandle[e.toLowerCase()],
                        r = o && I.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
                    return void 0 !== r ? r : n.attributes || !g ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }, rt.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, rt.uniqueSort = function(t) {
                    var e, i = [],
                        o = 0,
                        r = 0;
                    if (d = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(k), d) {
                        for (; e = t[r++];) e === t[r] && (o = i.push(r));
                        for (; o--;) t.splice(i[o], 1)
                    }
                    return u = null, t
                }, o = rt.getText = function(t) {
                    var e, n = "",
                        i = 0,
                        r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                        } else if (3 === r || 4 === r) return t.nodeValue
                    } else
                        for (; e = t[i++];) n += o(e);
                    return n
                }, (i = rt.selectors = {
                    cacheLength: 50,
                    createPseudo: at,
                    match: V,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(nt, it), t[3] = (t[3] || t[4] || t[5] || "").replace(nt, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && Y.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(nt, it).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = S[t + " "];
                            return e || (e = new RegExp("(^|" + B + ")" + t + "(" + B + "|$)")) && S(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, e, n) {
                            return function(i) {
                                var o = rt.attr(i, t);
                                return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace($, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(t, e, n, i, o) {
                            var r = "nth" !== t.slice(0, 3),
                                s = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === i && 0 === o ? function(t) {
                                return !!t.parentNode
                            } : function(e, n, l) {
                                var c, u, d, h, f, p, g = r !== s ? "nextSibling" : "previousSibling",
                                    m = e.parentNode,
                                    v = a && e.nodeName.toLowerCase(),
                                    y = !l && !a;
                                if (m) {
                                    if (r) {
                                        for (; g;) {
                                            for (d = e; d = d[g];)
                                                if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            p = g = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                        for (f = (c = (u = m[b] || (m[b] = {}))[t] || [])[0] === x && c[1], h = c[0] === x && c[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (h = f = 0) || p.pop();)
                                            if (1 === d.nodeType && ++h && d === e) {
                                                u[t] = [x, f, h];
                                                break
                                            }
                                    } else if (y && (c = (e[b] || (e[b] = {}))[t]) && c[0] === x) h = c[1];
                                    else
                                        for (;
                                            (d = ++f && d && d[g] || (h = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[b] || (d[b] = {}))[t] = [x, h]), d !== e)););
                                    return (h -= o) === i || h % i == 0 && h / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, e) {
                            var n, o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
                            return o[b] ? o(e) : o.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, n) {
                                for (var i, r = o(t, e), s = r.length; s--;) t[i = P(t, r[s])] = !(n[i] = r[s])
                            }) : function(t) {
                                return o(t, 0, n)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: at(function(t) {
                            var e = [],
                                n = [],
                                i = a(t.replace(q, "$1"));
                            return i[b] ? at(function(t, e, n, o) {
                                for (var r, s = i(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                            }) : function(t, o, r) {
                                return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop()
                            }
                        }),
                        has: at(function(t) {
                            return function(e) {
                                return rt(t, e).length > 0
                            }
                        }),
                        contains: at(function(t) {
                            return t = t.replace(nt, it),
                                function(e) {
                                    return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                                }
                        }),
                        lang: at(function(t) {
                            return Q.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(nt, it).toLowerCase(),
                                function(e) {
                                    var n;
                                    do {
                                        if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === p
                        },
                        focus: function(t) {
                            return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return !1 === t.disabled
                        },
                        disabled: function(t) {
                            return !0 === t.disabled
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !i.pseudos.empty(t)
                        },
                        header: function(t) {
                            return G.test(t.nodeName)
                        },
                        input: function(t) {
                            return K.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: ft(function() {
                            return [0]
                        }),
                        last: ft(function(t, e) {
                            return [e - 1]
                        }),
                        eq: ft(function(t, e, n) {
                            return [0 > n ? n + e : n]
                        }),
                        even: ft(function(t, e) {
                            for (var n = 0; e > n; n += 2) t.push(n);
                            return t
                        }),
                        odd: ft(function(t, e) {
                            for (var n = 1; e > n; n += 2) t.push(n);
                            return t
                        }),
                        lt: ft(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                            return t
                        }),
                        gt: ft(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                }).pseudos.nth = i.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[e] = dt(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[e] = ht(e);

            function gt() {}

            function mt(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function vt(t, e, n) {
                var i = e.dir,
                    o = n && "parentNode" === i,
                    r = C++;
                return e.first ? function(e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) return t(e, n, r)
                } : function(e, n, s) {
                    var a, l, c = [x, r];
                    if (s) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || o) && t(e, n, s)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || o) {
                                if ((a = (l = e[b] || (e[b] = {}))[i]) && a[0] === x && a[1] === r) return c[2] = a[2];
                                if (l[i] = c, c[2] = t(e, n, s)) return !0
                            }
                }
            }

            function yt(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function wt(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (!n || n(r, i, o)) && (s.push(r), c && e.push(a));
                return s
            }

            function bt(t, e, n, i, o, r) {
                return i && !i[b] && (i = bt(i)), o && !o[b] && (o = bt(o, r)), at(function(r, s, a, l) {
                    var c, u, d, h = [],
                        f = [],
                        p = s.length,
                        g = r || function(t, e, n) {
                            for (var i = 0, o = e.length; o > i; i++) rt(t, e[i], n);
                            return n
                        }(e || "*", a.nodeType ? [a] : a, []),
                        m = !t || !r && e ? g : wt(g, h, t, a, l),
                        v = n ? o || (r ? t : p || i) ? [] : s : m;
                    if (n && n(m, v, a, l), i)
                        for (c = wt(v, f), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[f[u]] = !(m[f[u]] = d));
                    if (r) {
                        if (o || t) {
                            if (o) {
                                for (c = [], u = v.length; u--;)(d = v[u]) && c.push(m[u] = d);
                                o(null, v = [], c, l)
                            }
                            for (u = v.length; u--;)(d = v[u]) && (c = o ? P(r, d) : h[u]) > -1 && (r[c] = !(s[c] = d))
                        }
                    } else v = wt(v === s ? v.splice(p, v.length) : v), o ? o(null, s, v, l) : M.apply(s, v)
                })
            }

            function _t(t) {
                for (var e, n, o, r = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = vt(function(t) {
                        return t === e
                    }, a, !0), d = vt(function(t) {
                        return P(e, t) > -1
                    }, a, !0), h = [function(t, n, i) {
                        var o = !s && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : d(t, n, i));
                        return e = null, o
                    }]; r > l; l++)
                    if (n = i.relative[t[l].type]) h = [vt(yt(h), n)];
                    else {
                        if ((n = i.filter[t[l].type].apply(null, t[l].matches))[b]) {
                            for (o = ++l; r > o && !i.relative[t[o].type]; o++);
                            return bt(l > 1 && yt(h), l > 1 && mt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(q, "$1"), n, o > l && _t(t.slice(l, o)), r > o && _t(t = t.slice(o)), r > o && mt(t))
                        }
                        h.push(n)
                    }
                return yt(h)
            }

            function xt(t, e) {
                var n = e.length > 0,
                    o = t.length > 0,
                    r = function(r, s, a, l, u) {
                        var d, h, p, g = 0,
                            m = "0",
                            v = r && [],
                            y = [],
                            w = c,
                            b = r || o && i.find.TAG("*", u),
                            _ = x += null == w ? 1 : Math.random() || .1,
                            C = b.length;
                        for (u && (c = s !== f && s); m !== C && null != (d = b[m]); m++) {
                            if (o && d) {
                                for (h = 0; p = t[h++];)
                                    if (p(d, s, a)) {
                                        l.push(d);
                                        break
                                    }
                                u && (x = _)
                            }
                            n && ((d = !p && d) && g--, r && v.push(d))
                        }
                        if (g += m, n && m !== g) {
                            for (h = 0; p = e[h++];) p(v, y, s, a);
                            if (r) {
                                if (g > 0)
                                    for (; m--;) v[m] || y[m] || (y[m] = N.call(l));
                                y = wt(y)
                            }
                            M.apply(l, y), u && !r && y.length > 0 && g + e.length > 1 && rt.uniqueSort(l)
                        }
                        return u && (x = _, c = w), v
                    };
                return n ? at(r) : r
            }
            return gt.prototype = i.filters = i.pseudos, i.setFilters = new gt, s = rt.tokenize = function(t, e) {
                var n, o, r, s, a, l, c, u = T[t + " "];
                if (u) return e ? 0 : u.slice(0);
                for (a = t, l = [], c = i.preFilter; a;) {
                    for (s in (!n || (o = F.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = X.exec(a)) && (n = o.shift(), r.push({
                            value: n,
                            type: o[0].replace(q, " ")
                        }), a = a.slice(n.length)), i.filter) !(o = V[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                        value: n,
                        type: s,
                        matches: o
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return e ? a.length : a ? rt.error(t) : T(t, l).slice(0)
            }, a = rt.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    r = E[t + " "];
                if (!r) {
                    for (e || (e = s(t)), n = e.length; n--;)(r = _t(e[n]))[b] ? i.push(r) : o.push(r);
                    (r = E(t, xt(o, i))).selector = t
                }
                return r
            }, l = rt.select = function(t, e, o, r) {
                var l, c, u, d, h, f = "function" == typeof t && t,
                    p = !r && s(t = f.selector || t);
                if (o = o || [], 1 === p.length) {
                    if ((c = p[0] = p[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && n.getById && 9 === e.nodeType && g && i.relative[c[1].type]) {
                        if (!(e = (i.find.ID(u.matches[0].replace(nt, it), e) || [])[0])) return o;
                        f && (e = e.parentNode), t = t.slice(c.shift().value.length)
                    }
                    for (l = V.needsContext.test(t) ? 0 : c.length; l-- && (u = c[l], !i.relative[d = u.type]);)
                        if ((h = i.find[d]) && (r = h(u.matches[0].replace(nt, it), tt.test(c[0].type) && pt(e.parentNode) || e))) {
                            if (c.splice(l, 1), !(t = r.length && mt(c))) return M.apply(o, r), o;
                            break
                        }
                }
                return (f || a(t, p))(r, e, !g, o, tt.test(t) && pt(e.parentNode) || e), o
            }, n.sortStable = b.split("").sort(k).join("") === b, n.detectDuplicates = !!d, h(), n.sortDetached = lt(function(t) {
                return 1 & t.compareDocumentPosition(f.createElement("div"))
            }), lt(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || ct("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), n.attributes && lt(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || ct("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), lt(function(t) {
                return null == t.getAttribute("disabled")
            }) || ct(j, function(t, e, n) {
                var i;
                return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), rt
        }(t);
        h.find = y, h.expr = y.selectors, h.expr[":"] = h.expr.pseudos, h.unique = y.uniqueSort, h.text = y.getText, h.isXMLDoc = y.isXML, h.contains = y.contains;
        var w = h.expr.match.needsContext,
            b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            _ = /^.[^:#\[\.,]*$/;

        function x(t, e, n) {
            if (h.isFunction(e)) return h.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return h.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (_.test(e)) return h.filter(e, t, n);
                e = h.filter(e, t)
            }
            return h.grep(t, function(t) {
                return h.inArray(t, e) >= 0 !== n
            })
        }
        h.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? h.find.matchesSelector(i, t) ? [i] : [] : h.find.matches(t, h.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, h.fn.extend({
            find: function(t) {
                var e, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof t) return this.pushStack(h(t).filter(function() {
                    for (e = 0; o > e; e++)
                        if (h.contains(i[e], this)) return !0
                }));
                for (e = 0; o > e; e++) h.find(t, i[e], n);
                return (n = this.pushStack(o > 1 ? h.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(x(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(x(this, t || [], !0))
            },
            is: function(t) {
                return !!x(this, "string" == typeof t && w.test(t) ? h(t) : t || [], !1).length
            }
        });
        var C, S = t.document,
            T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (h.fn.init = function(t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (!(n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : T.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || C).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof h ? e[0] : e, h.merge(this, h.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : S, !0)), b.test(n[1]) && h.isPlainObject(e))
                        for (n in e) h.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if ((i = S.getElementById(n[2])) && i.parentNode) {
                    if (i.id !== n[2]) return C.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = S, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : h.isFunction(t) ? void 0 !== C.ready ? C.ready(t) : t(h) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), h.makeArray(t, this))
        }).prototype = h.fn, C = h(S);
        var E = /^(?:parents|prev(?:Until|All))/,
            k = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function D(t, e) {
            do {
                t = t[e]
            } while (t && 1 !== t.nodeType);
            return t
        }
        h.extend({
            dir: function(t, e, n) {
                for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !h(o).is(n));) 1 === o.nodeType && i.push(o), o = o[e];
                return i
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), h.fn.extend({
            has: function(t) {
                var e, n = h(t, this),
                    i = n.length;
                return this.filter(function() {
                    for (e = 0; i > e; e++)
                        if (h.contains(this, n[e])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, o = this.length, r = [], s = w.test(t) || "string" != typeof t ? h(t, e || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && h.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? h.unique(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? h.inArray(this[0], h(t)) : h.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(h.unique(h.merge(this.get(), h(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), h.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return h.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return h.dir(t, "parentNode", n)
            },
            next: function(t) {
                return D(t, "nextSibling")
            },
            prev: function(t) {
                return D(t, "previousSibling")
            },
            nextAll: function(t) {
                return h.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return h.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return h.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return h.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return h.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return h.sibling(t.firstChild)
            },
            contents: function(t) {
                return h.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : h.merge([], t.childNodes)
            }
        }, function(t, e) {
            h.fn[t] = function(n, i) {
                var o = h.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = h.filter(i, o)), this.length > 1 && (k[t] || (o = h.unique(o)), E.test(t) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var I, A = /\S+/g,
            N = {};

        function O() {
            S.addEventListener ? (S.removeEventListener("DOMContentLoaded", M, !1), t.removeEventListener("load", M, !1)) : (S.detachEvent("onreadystatechange", M), t.detachEvent("onload", M))
        }

        function M() {
            (S.addEventListener || "load" === event.type || "complete" === S.readyState) && (O(), h.ready())
        }
        h.Callbacks = function(t) {
            t = "string" == typeof t ? N[t] || function(t) {
                var e = N[t] = {};
                return h.each(t.match(A) || [], function(t, n) {
                    e[n] = !0
                }), e
            }(t) : h.extend({}, t);
            var e, n, i, o, r, s, a = [],
                l = !t.once && [],
                c = function(d) {
                    for (n = t.memory && d, i = !0, r = s || 0, s = 0, o = a.length, e = !0; a && o > r; r++)
                        if (!1 === a[r].apply(d[0], d[1]) && t.stopOnFalse) {
                            n = !1;
                            break
                        }
                    e = !1, a && (l ? l.length && c(l.shift()) : n ? a = [] : u.disable())
                },
                u = {
                    add: function() {
                        if (a) {
                            var i = a.length;
                            ! function e(n) {
                                h.each(n, function(n, i) {
                                    var o = h.type(i);
                                    "function" === o ? t.unique && u.has(i) || a.push(i) : i && i.length && "string" !== o && e(i)
                                })
                            }(arguments), e ? o = a.length : n && (s = i, c(n))
                        }
                        return this
                    },
                    remove: function() {
                        return a && h.each(arguments, function(t, n) {
                            for (var i;
                                (i = h.inArray(n, a, i)) > -1;) a.splice(i, 1), e && (o >= i && o--, r >= i && r--)
                        }), this
                    },
                    has: function(t) {
                        return t ? h.inArray(t, a) > -1 : !(!a || !a.length)
                    },
                    empty: function() {
                        return a = [], o = 0, this
                    },
                    disable: function() {
                        return a = l = n = void 0, this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return l = void 0, n || u.disable(), this
                    },
                    locked: function() {
                        return !l
                    },
                    fireWith: function(t, n) {
                        return !a || i && !l || (n = [t, (n = n || []).slice ? n.slice() : n], e ? l.push(n) : c(n)), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, h.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", h.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", h.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", h.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return h.Deferred(function(n) {
                                h.each(e, function(e, r) {
                                    var s = h.isFunction(t[e]) && t[e];
                                    o[r[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && h.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? h.extend(t, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, h.each(e, function(t, r) {
                    var s = r[2],
                        a = r[3];
                    i[r[1]] = s.add, a && s.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, n, o, r = 0,
                    s = i.call(arguments),
                    a = s.length,
                    l = 1 !== a || t && h.isFunction(t.promise) ? a : 0,
                    c = 1 === l ? t : h.Deferred(),
                    u = function(t, n, o) {
                        return function(r) {
                            n[t] = this, o[t] = arguments.length > 1 ? i.call(arguments) : r, o === e ? c.notifyWith(n, o) : --l || c.resolveWith(n, o)
                        }
                    };
                if (a > 1)
                    for (e = new Array(a), n = new Array(a), o = new Array(a); a > r; r++) s[r] && h.isFunction(s[r].promise) ? s[r].promise().done(u(r, o, s)).fail(c.reject).progress(u(r, n, e)) : --l;
                return l || c.resolveWith(o, s), c.promise()
            }
        }), h.fn.ready = function(t) {
            return h.ready.promise().done(t), this
        }, h.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? h.readyWait++ : h.ready(!0)
            },
            ready: function(t) {
                if (!0 === t ? !--h.readyWait : !h.isReady) {
                    if (!S.body) return setTimeout(h.ready);
                    h.isReady = !0, !0 !== t && --h.readyWait > 0 || (I.resolveWith(S, [h]), h.fn.triggerHandler && (h(S).triggerHandler("ready"), h(S).off("ready")))
                }
            }
        }), h.ready.promise = function(e) {
            if (!I)
                if (I = h.Deferred(), "complete" === S.readyState) setTimeout(h.ready);
                else if (S.addEventListener) S.addEventListener("DOMContentLoaded", M, !1), t.addEventListener("load", M, !1);
            else {
                S.attachEvent("onreadystatechange", M), t.attachEvent("onload", M);
                var n = !1;
                try {
                    n = null == t.frameElement && S.documentElement
                } catch (t) {}
                n && n.doScroll && function t() {
                    if (!h.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(t, 50)
                        }
                        O(), h.ready()
                    }
                }()
            }
            return I.promise(e)
        };
        var L, P = "undefined";
        for (L in h(u)) break;
        u.ownLast = "0" !== L, u.inlineBlockNeedsLayout = !1, h(function() {
                var t, e, n, i;
                (n = S.getElementsByTagName("body")[0]) && n.style && (e = S.createElement("div"), (i = S.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== P && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", u.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var t = S.createElement("div");
                if (null == u.deleteExpando) {
                    u.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (t) {
                        u.deleteExpando = !1
                    }
                }
                t = null
            }(), h.acceptData = function(t) {
                var e = h.noData[(t.nodeName + " ").toLowerCase()],
                    n = +t.nodeType || 1;
                return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
            };
        var j = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            B = /([A-Z])/g;

        function H(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(B, "-$1").toLowerCase();
                if ("string" == typeof(n = t.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : j.test(n) ? h.parseJSON(n) : n)
                    } catch (t) {}
                    h.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function W(t) {
            var e;
            for (e in t)
                if (("data" !== e || !h.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function z(t, e, i, o) {
            if (h.acceptData(t)) {
                var r, s, a = h.expando,
                    l = t.nodeType,
                    c = l ? h.cache : t,
                    u = l ? t[a] : t[a] && a;
                if (u && c[u] && (o || c[u].data) || void 0 !== i || "string" != typeof e) return u || (u = l ? t[a] = n.pop() || h.guid++ : a), c[u] || (c[u] = l ? {} : {
                    toJSON: h.noop
                }), ("object" == typeof e || "function" == typeof e) && (o ? c[u] = h.extend(c[u], e) : c[u].data = h.extend(c[u].data, e)), s = c[u], o || (s.data || (s.data = {}), s = s.data), void 0 !== i && (s[h.camelCase(e)] = i), "string" == typeof e ? null == (r = s[e]) && (r = s[h.camelCase(e)]) : r = s, r
            }
        }

        function R(t, e, n) {
            if (h.acceptData(t)) {
                var i, o, r = t.nodeType,
                    s = r ? h.cache : t,
                    a = r ? t[h.expando] : h.expando;
                if (s[a]) {
                    if (e && (i = n ? s[a] : s[a].data)) {
                        h.isArray(e) ? e = e.concat(h.map(e, h.camelCase)) : e in i ? e = [e] : e = (e = h.camelCase(e)) in i ? [e] : e.split(" "), o = e.length;
                        for (; o--;) delete i[e[o]];
                        if (n ? !W(i) : !h.isEmptyObject(i)) return
                    }(n || (delete s[a].data, W(s[a]))) && (r ? h.cleanData([t], !0) : u.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
                }
            }
        }
        h.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return !!(t = t.nodeType ? h.cache[t[h.expando]] : t[h.expando]) && !W(t)
            },
            data: function(t, e, n) {
                return z(t, e, n)
            },
            removeData: function(t, e) {
                return R(t, e)
            },
            _data: function(t, e, n) {
                return z(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return R(t, e, !0)
            }
        }), h.fn.extend({
            data: function(t, e) {
                var n, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = h.data(r), 1 === r.nodeType && !h._data(r, "parsedAttrs"))) {
                        for (n = s.length; n--;) s[n] && (0 === (i = s[n].name).indexOf("data-") && H(r, i = h.camelCase(i.slice(5)), o[i]));
                        h._data(r, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    h.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    h.data(this, t, e)
                }) : r ? H(r, t, h.data(r, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    h.removeData(this, t)
                })
            }
        }), h.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = h._data(t, e), n && (!i || h.isArray(n) ? i = h._data(t, e, h.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = h.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = h._queueHooks(t, e);
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function() {
                    h.dequeue(t, e)
                }, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return h._data(t, n) || h._data(t, n, {
                    empty: h.Callbacks("once memory").add(function() {
                        h._removeData(t, e + "queue"), h._removeData(t, n)
                    })
                })
            }
        }), h.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? h.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = h.queue(this, t, e);
                    h._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && h.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    h.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    o = h.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = h._data(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            q = ["Top", "Right", "Bottom", "Left"],
            F = function(t, e) {
                return t = e || t, "none" === h.css(t, "display") || !h.contains(t.ownerDocument, t)
            },
            X = h.access = function(t, e, n, i, o, r, s) {
                var a = 0,
                    l = t.length,
                    c = null == n;
                if ("object" === h.type(n))
                    for (a in o = !0, n) h.access(t, e, a, n[a], !0, r, s);
                else if (void 0 !== i && (o = !0, h.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                        return c.call(h(t), n)
                    })), e))
                    for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
            },
            U = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = S.createElement("input"),
                e = S.createElement("div"),
                n = S.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", u.leadingWhitespace = 3 === e.firstChild.nodeType, u.tbody = !e.getElementsByTagName("tbody").length, u.htmlSerialize = !!e.getElementsByTagName("link").length, u.html5Clone = "<:nav></:nav>" !== S.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), u.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", u.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, u.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                    u.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == u.deleteExpando) {
                u.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    u.deleteExpando = !1
                }
            }
        }(),
        function() {
            var e, n, i = S.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + e, (u[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), u[e + "Bubbles"] = !1 === i.attributes[n].expando);
            i = null
        }();
        var Y = /^(?:input|select|textarea)$/i,
            Q = /^key/,
            V = /^(?:mouse|pointer|contextmenu)|click/,
            K = /^(?:focusinfocus|focusoutblur)$/,
            G = /^([^.]*)(?:\.(.+)|)$/;

        function Z() {
            return !0
        }

        function J() {
            return !1
        }

        function tt() {
            try {
                return S.activeElement
            } catch (t) {}
        }

        function et(t) {
            var e = nt.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }
        h.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, s, a, l, c, u, d, f, p, g, m, v = h._data(t);
                if (v) {
                    for (n.handler && (n = (l = n).handler, o = l.selector), n.guid || (n.guid = h.guid++), (s = v.events) || (s = v.events = {}), (u = v.handle) || ((u = v.handle = function(t) {
                            return typeof h === P || t && h.event.triggered === t.type ? void 0 : h.event.dispatch.apply(u.elem, arguments)
                        }).elem = t), a = (e = (e || "").match(A) || [""]).length; a--;) p = m = (r = G.exec(e[a]) || [])[1], g = (r[2] || "").split(".").sort(), p && (c = h.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = h.event.special[p] || {}, d = h.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && h.expr.match.needsContext.test(o),
                        namespace: g.join(".")
                    }, l), (f = s[p]) || ((f = s[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, g, u) || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), h.event.global[p] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, o) {
                var r, s, a, l, c, u, d, f, p, g, m, v = h.hasData(t) && h._data(t);
                if (v && (u = v.events)) {
                    for (c = (e = (e || "").match(A) || [""]).length; c--;)
                        if (p = m = (a = G.exec(e[c]) || [])[1], g = (a[2] || "").split(".").sort(), p) {
                            for (d = h.event.special[p] || {}, f = u[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = f.length; r--;) s = f[r], !o && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (f.splice(r, 1), s.selector && f.delegateCount--, d.remove && d.remove.call(t, s));
                            l && !f.length && (d.teardown && !1 !== d.teardown.call(t, g, v.handle) || h.removeEvent(t, p, v.handle), delete u[p])
                        } else
                            for (p in u) h.event.remove(t, p + e[c], n, i, !0);
                    h.isEmptyObject(u) && (delete v.handle, h._removeData(t, "events"))
                }
            },
            trigger: function(e, n, i, o) {
                var r, s, a, l, u, d, f, p = [i || S],
                    g = c.call(e, "type") ? e.type : e,
                    m = c.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = d = i = i || S, 3 !== i.nodeType && 8 !== i.nodeType && !K.test(g + h.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), s = g.indexOf(":") < 0 && "on" + g, (e = e[h.expando] ? e : new h.Event(g, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = m.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : h.makeArray(n, [e]), u = h.event.special[g] || {}, o || !u.trigger || !1 !== u.trigger.apply(i, n))) {
                    if (!o && !u.noBubble && !h.isWindow(i)) {
                        for (l = u.delegateType || g, K.test(l + g) || (a = a.parentNode); a; a = a.parentNode) p.push(a), d = a;
                        d === (i.ownerDocument || S) && p.push(d.defaultView || d.parentWindow || t)
                    }
                    for (f = 0;
                        (a = p[f++]) && !e.isPropagationStopped();) e.type = f > 1 ? l : u.bindType || g, (r = (h._data(a, "events") || {})[e.type] && h._data(a, "handle")) && r.apply(a, n), (r = s && a[s]) && r.apply && h.acceptData(a) && (e.result = r.apply(a, n), !1 === e.result && e.preventDefault());
                    if (e.type = g, !o && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(p.pop(), n)) && h.acceptData(i) && s && i[g] && !h.isWindow(i)) {
                        (d = i[s]) && (i[s] = null), h.event.triggered = g;
                        try {
                            i[g]()
                        } catch (t) {}
                        h.event.triggered = void 0, d && (i[s] = d)
                    }
                    return e.result
                }
            },
            dispatch: function(t) {
                t = h.event.fix(t);
                var e, n, o, r, s, a = [],
                    l = i.call(arguments),
                    c = (h._data(this, "events") || {})[t.type] || [],
                    u = h.event.special[t.type] || {};
                if (l[0] = t, t.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                    for (a = h.event.handlers.call(this, t, c), e = 0;
                        (r = a[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, s = 0;
                            (o = r.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, void 0 !== (n = ((h.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                            for (o = [], r = 0; a > r; r++) void 0 === o[n = (i = e[r]).selector + " "] && (o[n] = i.needsContext ? h(n, this).index(l) >= 0 : h.find(n, this, null, [l]).length), o[n] && o.push(i);
                            o.length && s.push({
                                elem: l,
                                handlers: o
                            })
                        }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            fix: function(t) {
                if (t[h.expando]) return t;
                var e, n, i, o = t.type,
                    r = t,
                    s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = V.test(o) ? this.mouseHooks : Q.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new h.Event(r), e = i.length; e--;) t[n = i[e]] = r[n];
                return t.target || (t.target = r.srcElement || S), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, o, r = e.button,
                        s = e.fromElement;
                    return null == t.pageX && null != e.clientX && (o = (i = t.target.ownerDocument || S).documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== tt() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === tt() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return h.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return h.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var o = h.extend(new h.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? h.event.trigger(o, null, e) : h.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, h.removeEvent = S.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === P && (t[i] = null), t.detachEvent(i, n))
        }, h.Event = function(t, e) {
            return this instanceof h.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Z : J) : this.type = t, e && h.extend(this, e), this.timeStamp = t && t.timeStamp || h.now(), void(this[h.expando] = !0)) : new h.Event(t, e)
        }, h.Event.prototype = {
            isDefaultPrevented: J,
            isPropagationStopped: J,
            isImmediatePropagationStopped: J,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = Z, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = Z, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = Z, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, h.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            h.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = t.relatedTarget,
                        o = t.handleObj;
                    return (!i || i !== this && !h.contains(this, i)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), u.submitBubbles || (h.event.special.submit = {
            setup: function() {
                return !h.nodeName(this, "form") && void h.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target,
                        n = h.nodeName(e, "input") || h.nodeName(e, "button") ? e.form : void 0;
                    n && !h._data(n, "submitBubbles") && (h.event.add(n, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), h._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && h.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return !h.nodeName(this, "form") && void h.event.remove(this, "._submit")
            }
        }), u.changeBubbles || (h.event.special.change = {
            setup: function() {
                return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (h.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), h.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), h.event.simulate("change", this, t, !0)
                })), !1) : void h.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Y.test(e.nodeName) && !h._data(e, "changeBubbles") && (h.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || h.event.simulate("change", this.parentNode, t, !0)
                    }), h._data(e, "changeBubbles", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return h.event.remove(this, "._change"), !Y.test(this.nodeName)
            }
        }), u.focusinBubbles || h.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                h.event.simulate(e, t.target, h.event.fix(t), !0)
            };
            h.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = h._data(i, e);
                    o || i.addEventListener(t, n, !0), h._data(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = h._data(i, e) - 1;
                    o ? h._data(i, e, o) : (i.removeEventListener(t, n, !0), h._removeData(i, e))
                }
            }
        }), h.fn.extend({
            on: function(t, e, n, i, o) {
                var r, s;
                if ("object" == typeof t) {
                    for (r in "string" != typeof e && (n = n || e, e = void 0), t) this.on(r, e, n, t[r], o);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), !1 === i) i = J;
                else if (!i) return this;
                return 1 === o && (s = i, (i = function(t) {
                    return h().off(t), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = h.guid++)), this.each(function() {
                    h.event.add(this, t, i, n, e)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, h(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return (!1 === e || "function" == typeof e) && (n = e, e = void 0), !1 === n && (n = J), this.each(function() {
                    h.event.remove(this, t, n, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    h.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? h.event.trigger(t, e, n, !0) : void 0
            }
        });
        var nt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            it = / jQuery\d+="(?:null|\d+)"/g,
            ot = new RegExp("<(?:" + nt + ")[\\s/>]", "i"),
            rt = /^\s+/,
            st = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            at = /<([\w:]+)/,
            lt = /<tbody/i,
            ct = /<|&#?\w+;/,
            ut = /<(?:script|style|link)/i,
            dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ht = /^$|\/(?:java|ecma)script/i,
            ft = /^true\/(.*)/,
            pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            gt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: u.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            mt = et(S).appendChild(S.createElement("div"));

        function vt(t, e) {
            var n, i, o = 0,
                r = typeof t.getElementsByTagName !== P ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== P ? t.querySelectorAll(e || "*") : void 0;
            if (!r)
                for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || h.nodeName(i, e) ? r.push(i) : h.merge(r, vt(i, e));
            return void 0 === e || e && h.nodeName(t, e) ? h.merge([t], r) : r
        }

        function yt(t) {
            U.test(t.type) && (t.defaultChecked = t.checked)
        }

        function wt(t, e) {
            return h.nodeName(t, "table") && h.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function bt(t) {
            return t.type = (null !== h.find.attr(t, "type")) + "/" + t.type, t
        }

        function _t(t) {
            var e = ft.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function xt(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) h._data(n, "globalEval", !e || h._data(e[i], "globalEval"))
        }

        function Ct(t, e) {
            if (1 === e.nodeType && h.hasData(t)) {
                var n, i, o, r = h._data(t),
                    s = h._data(e, r),
                    a = r.events;
                if (a)
                    for (n in delete s.handle, s.events = {}, a)
                        for (i = 0, o = a[n].length; o > i; i++) h.event.add(e, n, a[n][i]);
                s.data && (s.data = h.extend({}, s.data))
            }
        }

        function St(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !u.noCloneEvent && e[h.expando]) {
                    for (i in (o = h._data(e)).events) h.removeEvent(e, i, o.handle);
                    e.removeAttribute(h.expando)
                }
                "script" === n && e.text !== t.text ? (bt(e).text = t.text, _t(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), u.html5Clone && t.innerHTML && !h.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && U.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }
        gt.optgroup = gt.option, gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td, h.extend({
            clone: function(t, e, n) {
                var i, o, r, s, a, l = h.contains(t.ownerDocument, t);
                if (u.html5Clone || h.isXMLDoc(t) || !ot.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (mt.innerHTML = t.outerHTML, mt.removeChild(r = mt.firstChild)), !(u.noCloneEvent && u.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || h.isXMLDoc(t)))
                    for (i = vt(r), a = vt(t), s = 0; null != (o = a[s]); ++s) i[s] && St(o, i[s]);
                if (e)
                    if (n)
                        for (a = a || vt(t), i = i || vt(r), s = 0; null != (o = a[s]); s++) Ct(o, i[s]);
                    else Ct(t, r);
                return (i = vt(r, "script")).length > 0 && xt(i, !l && vt(t, "script")), i = a = o = null, r
            },
            buildFragment: function(t, e, n, i) {
                for (var o, r, s, a, l, c, d, f = t.length, p = et(e), g = [], m = 0; f > m; m++)
                    if ((r = t[m]) || 0 === r)
                        if ("object" === h.type(r)) h.merge(g, r.nodeType ? [r] : r);
                        else if (ct.test(r)) {
                    for (a = a || p.appendChild(e.createElement("div")), l = (at.exec(r) || ["", ""])[1].toLowerCase(), d = gt[l] || gt._default, a.innerHTML = d[1] + r.replace(st, "<$1></$2>") + d[2], o = d[0]; o--;) a = a.lastChild;
                    if (!u.leadingWhitespace && rt.test(r) && g.push(e.createTextNode(rt.exec(r)[0])), !u.tbody)
                        for (o = (r = "table" !== l || lt.test(r) ? "<table>" !== d[1] || lt.test(r) ? 0 : a : a.firstChild) && r.childNodes.length; o--;) h.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                    for (h.merge(g, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = p.lastChild
                } else g.push(e.createTextNode(r));
                for (a && p.removeChild(a), u.appendChecked || h.grep(vt(g, "input"), yt), m = 0; r = g[m++];)
                    if ((!i || -1 === h.inArray(r, i)) && (s = h.contains(r.ownerDocument, r), a = vt(p.appendChild(r), "script"), s && xt(a), n))
                        for (o = 0; r = a[o++];) ht.test(r.type || "") && n.push(r);
                return a = null, p
            },
            cleanData: function(t, e) {
                for (var i, o, r, s, a = 0, l = h.expando, c = h.cache, d = u.deleteExpando, f = h.event.special; null != (i = t[a]); a++)
                    if ((e || h.acceptData(i)) && (s = (r = i[l]) && c[r])) {
                        if (s.events)
                            for (o in s.events) f[o] ? h.event.remove(i, o) : h.removeEvent(i, o, s.handle);
                        c[r] && (delete c[r], d ? delete i[l] : typeof i.removeAttribute !== P ? i.removeAttribute(l) : i[l] = null, n.push(r))
                    }
            }
        }), h.fn.extend({
            text: function(t) {
                return X(this, function(t) {
                    return void 0 === t ? h.text(this) : this.empty().append((this[0] && this[0].ownerDocument || S).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || wt(this, t).appendChild(t)
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = wt(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = t ? h.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || h.cleanData(vt(n)), n.parentNode && (e && h.contains(n.ownerDocument, n) && xt(vt(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && h.cleanData(vt(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && h.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return h.clone(this, t, e)
                })
            },
            html: function(t) {
                return X(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(it, "") : void 0;
                    if (!("string" != typeof t || ut.test(t) || !u.htmlSerialize && ot.test(t) || !u.leadingWhitespace && rt.test(t) || gt[(at.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(st, "<$1></$2>");
                        try {
                            for (; i > n; n++) 1 === (e = this[n] || {}).nodeType && (h.cleanData(vt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, h.cleanData(vt(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = o.apply([], t);
                var n, i, r, s, a, l, c = 0,
                    d = this.length,
                    f = this,
                    p = d - 1,
                    g = t[0],
                    m = h.isFunction(g);
                if (m || d > 1 && "string" == typeof g && !u.checkClone && dt.test(g)) return this.each(function(n) {
                    var i = f.eq(n);
                    m && (t[0] = g.call(this, n, i.html())), i.domManip(t, e)
                });
                if (d && (n = (l = h.buildFragment(t, this[0].ownerDocument, !1, this)).firstChild, 1 === l.childNodes.length && (l = n), n)) {
                    for (r = (s = h.map(vt(l, "script"), bt)).length; d > c; c++) i = l, c !== p && (i = h.clone(i, !0, !0), r && h.merge(s, vt(i, "script"))), e.call(this[c], i, c);
                    if (r)
                        for (a = s[s.length - 1].ownerDocument, h.map(s, _t), c = 0; r > c; c++) i = s[c], ht.test(i.type || "") && !h._data(i, "globalEval") && h.contains(a, i) && (i.src ? h._evalUrl && h._evalUrl(i.src) : h.globalEval((i.text || i.textContent || i.innerHTML || "").replace(pt, "")));
                    l = n = null
                }
                return this
            }
        }), h.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            h.fn[t] = function(t) {
                for (var n, i = 0, o = [], s = h(t), a = s.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), h(s[i])[e](n), r.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var Tt, Et = {};

        function kt(e, n) {
            var i, o = h(n.createElement(e)).appendTo(n.body),
                r = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : h.css(o[0], "display");
            return o.detach(), r
        }

        function Dt(t) {
            var e = S,
                n = Et[t];
            return n || ("none" !== (n = kt(t, e)) && n || ((e = ((Tt = (Tt || h("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || Tt[0].contentDocument).document).write(), e.close(), n = kt(t, e), Tt.detach()), Et[t] = n), n
        }! function() {
            var t;
            u.shrinkWrapBlocks = function() {
                return null != t ? t : (t = !1, (n = S.getElementsByTagName("body")[0]) && n.style ? (e = S.createElement("div"), (i = S.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== P && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(S.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0);
                var e, n, i
            }
        }();
        var It, At, Nt = /^margin/,
            Ot = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
            Mt = /^(top|right|bottom|left)$/;

        function Lt(t, e) {
            return {
                get: function() {
                    var n = t();
                    if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }
        t.getComputedStyle ? (It = function(e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
            }, At = function(t, e, n) {
                var i, o, r, s, a = t.style;
                return s = (n = n || It(t)) ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || h.contains(t.ownerDocument, t) || (s = h.style(t, e)), Ot.test(s) && Nt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 === s ? s : s + ""
            }) : S.documentElement.currentStyle && (It = function(t) {
                return t.currentStyle
            }, At = function(t, e, n) {
                var i, o, r, s, a = t.style;
                return null == (s = (n = n || It(t)) ? n[e] : void 0) && a && a[e] && (s = a[e]), Ot.test(s) && !Mt.test(e) && (i = a.left, (r = (o = t.runtimeStyle) && o.left) && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
            }),
            function() {
                var e, n, i, o, r, s, a;
                if ((e = S.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = (i = e.getElementsByTagName("a")[0]) && i.style) {
                    function l() {
                        var e, n, i, l;
                        (n = S.getElementsByTagName("body")[0]) && n.style && (e = S.createElement("div"), (i = S.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = r = !1, a = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, r = "4px" === (t.getComputedStyle(e, null) || {
                            width: "4px"
                        }).width, (l = e.appendChild(S.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", l.style.marginRight = l.style.width = "0", e.style.width = "1px", a = !parseFloat((t.getComputedStyle(l, null) || {}).marginRight), e.removeChild(l)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (l = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (s = 0 === l[0].offsetHeight) && (l[0].style.display = "", l[1].style.display = "none", s = 0 === l[0].offsetHeight), n.removeChild(i))
                    }
                    n.cssText = "float:left;opacity:.5", u.opacity = "0.5" === n.opacity, u.cssFloat = !!n.cssFloat, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === e.style.backgroundClip, u.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, h.extend(u, {
                        reliableHiddenOffsets: function() {
                            return null == s && l(), s
                        },
                        boxSizingReliable: function() {
                            return null == r && l(), r
                        },
                        pixelPosition: function() {
                            return null == o && l(), o
                        },
                        reliableMarginRight: function() {
                            return null == a && l(), a
                        }
                    })
                }
            }(), h.swap = function(t, e, n, i) {
                var o, r, s = {};
                for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                for (r in o = n.apply(t, i || []), e) t.style[r] = s[r];
                return o
            };
        var Pt = /alpha\([^)]*\)/i,
            jt = /opacity\s*=\s*([^)]*)/,
            Bt = /^(none|table(?!-c[ea]).+)/,
            Ht = new RegExp("^(" + $ + ")(.*)$", "i"),
            Wt = new RegExp("^([+-])=(" + $ + ")", "i"),
            zt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Rt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            $t = ["Webkit", "O", "Moz", "ms"];

        function qt(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = $t.length; o--;)
                if ((e = $t[o] + n) in t) return e;
            return i
        }

        function Ft(t, e) {
            for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++)(i = t[s]).style && (r[s] = h._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && F(i) && (r[s] = h._data(i, "olddisplay", Dt(i.nodeName)))) : (o = F(i), (n && "none" !== n || !o) && h._data(i, "olddisplay", o ? n : h.css(i, "display"))));
            for (s = 0; a > s; s++)(i = t[s]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function Xt(t, e, n) {
            var i = Ht.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function Ut(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += h.css(t, n + q[r], !0, o)), i ? ("content" === n && (s -= h.css(t, "padding" + q[r], !0, o)), "margin" !== n && (s -= h.css(t, "border" + q[r] + "Width", !0, o))) : (s += h.css(t, "padding" + q[r], !0, o), "padding" !== n && (s += h.css(t, "border" + q[r] + "Width", !0, o)));
            return s
        }

        function Yt(t, e, n) {
            var i = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = It(t),
                s = u.boxSizing && "border-box" === h.css(t, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if ((0 > (o = At(t, e, r)) || null == o) && (o = t.style[e]), Ot.test(o)) return o;
                i = s && (u.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + Ut(t, e, n || (s ? "border" : "content"), i, r) + "px"
        }

        function Qt(t, e, n, i, o) {
            return new Qt.prototype.init(t, e, n, i, o)
        }
        h.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = At(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: u.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = h.camelCase(e),
                        l = t.style;
                    if (e = h.cssProps[a] || (h.cssProps[a] = qt(l, a)), s = h.cssHooks[e] || h.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e];
                    if ("string" === (r = typeof n) && (o = Wt.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(h.css(t, e)), r = "number"), null != n && n == n && ("number" !== r || h.cssNumber[a] || (n += "px"), u.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                        l[e] = n
                    } catch (t) {}
                }
            },
            css: function(t, e, n, i) {
                var o, r, s, a = h.camelCase(e);
                return e = h.cssProps[a] || (h.cssProps[a] = qt(t.style, a)), (s = h.cssHooks[e] || h.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = At(t, e, i)), "normal" === r && e in Rt && (r = Rt[e]), "" === n || n ? (o = parseFloat(r), !0 === n || h.isNumeric(o) ? o || 0 : r) : r
            }
        }), h.each(["height", "width"], function(t, e) {
            h.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? Bt.test(h.css(t, "display")) && 0 === t.offsetWidth ? h.swap(t, zt, function() {
                        return Yt(t, e, i)
                    }) : Yt(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var o = i && It(t);
                    return Xt(0, n, i ? Ut(t, e, i, u.boxSizing && "border-box" === h.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), u.opacity || (h.cssHooks.opacity = {
            get: function(t, e) {
                return jt.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    o = h.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === h.trim(r.replace(Pt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = Pt.test(r) ? r.replace(Pt, o) : r + " " + o)
            }
        }), h.cssHooks.marginRight = Lt(u.reliableMarginRight, function(t, e) {
            return e ? h.swap(t, {
                display: "inline-block"
            }, At, [t, "marginRight"]) : void 0
        }), h.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            h.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + q[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, Nt.test(t) || (h.cssHooks[t + e].set = Xt)
        }), h.fn.extend({
            css: function(t, e) {
                return X(this, function(t, e, n) {
                    var i, o, r = {},
                        s = 0;
                    if (h.isArray(e)) {
                        for (i = It(t), o = e.length; o > s; s++) r[e[s]] = h.css(t, e[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? h.style(t, e, n) : h.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return Ft(this, !0)
            },
            hide: function() {
                return Ft(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    F(this) ? h(this).show() : h(this).hide()
                })
            }
        }), h.Tween = Qt, Qt.prototype = {
            constructor: Qt,
            init: function(t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (h.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = Qt.propHooks[this.prop];
                return t && t.get ? t.get(this) : Qt.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = Qt.propHooks[this.prop];
                return this.pos = e = this.options.duration ? h.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Qt.propHooks._default.set(this), this
            }
        }, Qt.prototype.init.prototype = Qt.prototype, Qt.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = h.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
                },
                set: function(t) {
                    h.fx.step[t.prop] ? h.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[h.cssProps[t.prop]] || h.cssHooks[t.prop]) ? h.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, Qt.propHooks.scrollTop = Qt.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, h.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, h.fx = Qt.prototype.init, h.fx.step = {};
        var Vt, Kt, Gt = /^(?:toggle|show|hide)$/,
            Zt = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
            Jt = /queueHooks$/,
            te = [function(t, e, n) {
                var i, o, r, s, a, l, c, d = this,
                    f = {},
                    p = t.style,
                    g = t.nodeType && F(t),
                    m = h._data(t, "fxshow");
                for (i in n.queue || (null == (a = h._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || l()
                    }), a.unqueued++, d.always(function() {
                        d.always(function() {
                            a.unqueued--, h.queue(t, "fx").length || a.empty.fire()
                        })
                    })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = h.css(t, "display"), "inline" === ("none" === c ? h._data(t, "olddisplay") || Dt(t.nodeName) : c) && "none" === h.css(t, "float") && (u.inlineBlockNeedsLayout && "inline" !== Dt(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", u.shrinkWrapBlocks() || d.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), e)
                    if (o = e[i], Gt.exec(o)) {
                        if (delete e[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                            if ("show" !== o || !m || void 0 === m[i]) continue;
                            g = !0
                        }
                        f[i] = m && m[i] || h.style(t, i)
                    } else c = void 0;
                if (h.isEmptyObject(f)) "inline" === ("none" === c ? Dt(t.nodeName) : c) && (p.display = c);
                else
                    for (i in m ? "hidden" in m && (g = m.hidden) : m = h._data(t, "fxshow", {}), r && (m.hidden = !g), g ? h(t).show() : d.done(function() {
                            h(t).hide()
                        }), d.done(function() {
                            var e;
                            for (e in h._removeData(t, "fxshow"), f) h.style(t, e, f[e])
                        }), f) s = oe(g ? m[i] : 0, i, d), i in m || (m[i] = s.start, g && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }],
            ee = {
                "*": [function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        o = Zt.exec(e),
                        r = o && o[3] || (h.cssNumber[t] ? "" : "px"),
                        s = (h.cssNumber[t] || "px" !== r && +i) && Zt.exec(h.css(n.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== r) {
                        r = r || s[3], o = o || [], s = +i || 1;
                        do {
                            s /= a = a || ".5", h.style(n.elem, t, s + r)
                        } while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };

        function ne() {
            return setTimeout(function() {
                Vt = void 0
            }), Vt = h.now()
        }

        function ie(t, e) {
            var n, i = {
                    height: t
                },
                o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e) i["margin" + (n = q[o])] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function oe(t, e, n) {
            for (var i, o = (ee[e] || []).concat(ee["*"]), r = 0, s = o.length; s > r; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function re(t, e, n) {
            var i, o, r = 0,
                s = te.length,
                a = h.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = Vt || ne(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; s > r; r++) c.tweens[r].run(i);
                    return a.notifyWith(t, [c, i, n]), 1 > i && s ? n : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: h.extend({}, e),
                    opts: h.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Vt || ne(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = h.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) c.tweens[n].run(1);
                        return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (function(t, e) {
                    var n, i, o, r, s;
                    for (n in t)
                        if (o = e[i = h.camelCase(n)], r = t[n], h.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = h.cssHooks[i]) && "expand" in s)
                            for (n in r = s.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = o);
                        else e[i] = o
                }(u, c.opts.specialEasing); s > r; r++)
                if (i = te[r].call(c, t, u, c.opts)) return i;
            return h.map(u, oe, c), h.isFunction(c.opts.start) && c.opts.start.call(t, c), h.fx.timer(h.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }
        h.Animation = h.extend(re, {
                tweener: function(t, e) {
                    h.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var n, i = 0, o = t.length; o > i; i++) n = t[i], ee[n] = ee[n] || [], ee[n].unshift(e)
                },
                prefilter: function(t, e) {
                    e ? te.unshift(t) : te.push(t)
                }
            }), h.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? h.extend({}, t) : {
                    complete: n || !n && e || h.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !h.isFunction(e) && e
                };
                return i.duration = h.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in h.fx.speeds ? h.fx.speeds[i.duration] : h.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    h.isFunction(i.old) && i.old.call(this), i.queue && h.dequeue(this, i.queue)
                }, i
            }, h.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(F).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = h.isEmptyObject(t),
                        r = h.speed(e, n, i),
                        s = function() {
                            var e = re(this, h.extend({}, t), r);
                            (o || h._data(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = h.timers,
                            s = h._data(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && Jt.test(o) && i(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                        (e || !n) && h.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, n = h._data(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            r = h.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, h.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), h.each(["toggle", "show", "hide"], function(t, e) {
                var n = h.fn[e];
                h.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ie(e, !0), t, i, o)
                }
            }), h.each({
                slideDown: ie("show"),
                slideUp: ie("hide"),
                slideToggle: ie("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                h.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), h.timers = [], h.fx.tick = function() {
                var t, e = h.timers,
                    n = 0;
                for (Vt = h.now(); n < e.length; n++)(t = e[n])() || e[n] !== t || e.splice(n--, 1);
                e.length || h.fx.stop(), Vt = void 0
            }, h.fx.timer = function(t) {
                h.timers.push(t), t() ? h.fx.start() : h.timers.pop()
            }, h.fx.interval = 13, h.fx.start = function() {
                Kt || (Kt = setInterval(h.fx.tick, h.fx.interval))
            }, h.fx.stop = function() {
                clearInterval(Kt), Kt = null
            }, h.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, h.fn.delay = function(t, e) {
                return t = h.fx && h.fx.speeds[t] || t, e = e || "fx", this.queue(e, function(e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var t, e, n, i, o;
                (e = S.createElement("div")).setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], o = (n = S.createElement("select")).appendChild(S.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", u.getSetAttribute = "t" !== e.className, u.style = /top/.test(i.getAttribute("style")), u.hrefNormalized = "/a" === i.getAttribute("href"), u.checkOn = !!t.value, u.optSelected = o.selected, u.enctype = !!S.createElement("form").enctype, n.disabled = !0, u.optDisabled = !o.disabled, (t = S.createElement("input")).setAttribute("value", ""), u.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), u.radioValue = "t" === t.value
            }();
        var se = /\r/g;
        h.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = h.isFunction(t), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? t.call(this, n, h(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : h.isArray(o) && (o = h.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), (e = h.valHooks[this.type] || h.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = h.valHooks[o.type] || h.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(se, "") : null == n ? "" : n : void 0
            }
        }), h.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = h.find.attr(t, "value");
                        return null != e ? e : h.trim(h.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                            if (!(!(n = i[l]).selected && l !== o || (u.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && h.nodeName(n.parentNode, "optgroup"))) {
                                if (e = h(n).val(), r) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, r = h.makeArray(e), s = o.length; s--;)
                            if (i = o[s], h.inArray(h.valHooks.option.get(i), r) >= 0) try {
                                i.selected = n = !0
                            } catch (t) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), h.each(["radio", "checkbox"], function() {
            h.valHooks[this] = {
                set: function(t, e) {
                    return h.isArray(e) ? t.checked = h.inArray(h(t).val(), e) >= 0 : void 0
                }
            }, u.checkOn || (h.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var ae, le, ce = h.expr.attrHandle,
            ue = /^(?:checked|selected)$/i,
            de = u.getSetAttribute,
            he = u.input;
        h.fn.extend({
            attr: function(t, e) {
                return X(this, h.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    h.removeAttr(this, t)
                })
            }
        }), h.extend({
            attr: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === P ? h.prop(t, e, n) : (1 === r && h.isXMLDoc(t) || (e = e.toLowerCase(), i = h.attrHooks[e] || (h.expr.match.bool.test(e) ? le : ae)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : null == (o = h.find.attr(t, e)) ? void 0 : o : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void h.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var n, i, o = 0,
                    r = e && e.match(A);
                if (r && 1 === t.nodeType)
                    for (; n = r[o++];) i = h.propFix[n] || n, h.expr.match.bool.test(n) ? he && de || !ue.test(n) ? t[i] = !1 : t[h.camelCase("default-" + n)] = t[i] = !1 : h.attr(t, n, ""), t.removeAttribute(de ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!u.radioValue && "radio" === e && h.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), le = {
            set: function(t, e, n) {
                return !1 === e ? h.removeAttr(t, n) : he && de || !ue.test(n) ? t.setAttribute(!de && h.propFix[n] || n, n) : t[h.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, h.each(h.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = ce[e] || h.find.attr;
            ce[e] = he && de || !ue.test(e) ? function(t, e, i) {
                var o, r;
                return i || (r = ce[e], ce[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, ce[e] = r), o
            } : function(t, e, n) {
                return n ? void 0 : t[h.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), he && de || (h.attrHooks.value = {
            set: function(t, e, n) {
                return h.nodeName(t, "input") ? void(t.defaultValue = e) : ae && ae.set(t, e, n)
            }
        }), de || (ae = {
            set: function(t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        }, ce.id = ce.name = ce.coords = function(t, e, n) {
            var i;
            return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, h.valHooks.button = {
            get: function(t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : void 0
            },
            set: ae.set
        }, h.attrHooks.contenteditable = {
            set: function(t, e, n) {
                ae.set(t, "" !== e && e, n)
            }
        }, h.each(["width", "height"], function(t, e) {
            h.attrHooks[e] = {
                set: function(t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), u.style || (h.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var fe = /^(?:input|select|textarea|button|object)$/i,
            pe = /^(?:a|area)$/i;
        h.fn.extend({
            prop: function(t, e) {
                return X(this, h.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = h.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (t) {}
                })
            }
        }), h.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r) return (1 !== r || !h.isXMLDoc(t)) && (e = h.propFix[e] || e, o = h.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = h.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : fe.test(t.nodeName) || pe.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), u.hrefNormalized || h.each(["href", "src"], function(t, e) {
            h.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), u.optSelected || (h.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), h.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            h.propFix[this.toLowerCase()] = this
        }), u.enctype || (h.propFix.enctype = "encoding");
        var ge = /[\t\r\n\f]/g;
        h.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, s, a = 0,
                    l = this.length,
                    c = "string" == typeof t && t;
                if (h.isFunction(t)) return this.each(function(e) {
                    h(this).addClass(t.call(this, e, this.className))
                });
                if (c)
                    for (e = (t || "").match(A) || []; l > a; a++)
                        if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(ge, " ") : " ")) {
                            for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            s = h.trim(i), n.className !== s && (n.className = s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, s, a = 0,
                    l = this.length,
                    c = 0 === arguments.length || "string" == typeof t && t;
                if (h.isFunction(t)) return this.each(function(e) {
                    h(this).removeClass(t.call(this, e, this.className))
                });
                if (c)
                    for (e = (t || "").match(A) || []; l > a; a++)
                        if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(ge, " ") : "")) {
                            for (r = 0; o = e[r++];)
                                for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                            s = t ? h.trim(i) : "", n.className !== s && (n.className = s)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(h.isFunction(t) ? function(n) {
                    h(this).toggleClass(t.call(this, n, this.className, e), e)
                } : function() {
                    if ("string" === n)
                        for (var e, i = 0, o = h(this), r = t.match(A) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else(n === P || "boolean" === n) && (this.className && h._data(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : h._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ge, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        }), h.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            h.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), h.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var me = h.now(),
            ve = /\?/,
            ye = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        h.parseJSON = function(e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var n, i = null,
                o = h.trim(e + "");
            return o && !h.trim(o.replace(ye, function(t, e, o, r) {
                return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !r - !o, "")
            })) ? Function("return " + o)() : h.error("Invalid JSON: " + e)
        }, h.parseXML = function(e) {
            var n;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? n = (new DOMParser).parseFromString(e, "text/xml") : ((n = new ActiveXObject("Microsoft.XMLDOM")).async = "false", n.loadXML(e))
            } catch (t) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || h.error("Invalid XML: " + e), n
        };
        var we, be, _e = /#.*$/,
            xe = /([?&])_=[^&]*/,
            Ce = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Se = /^(?:GET|HEAD)$/,
            Te = /^\/\//,
            Ee = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            ke = {},
            De = {},
            Ie = "*/".concat("*");
        try {
            be = location.href
        } catch (t) {
            (be = S.createElement("a")).href = "", be = be.href
        }

        function Ae(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(A) || [];
                if (h.isFunction(n))
                    for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function Ne(t, e, n, i) {
            var o = {},
                r = t === De;

            function s(a) {
                var l;
                return o[a] = !0, h.each(t[a] || [], function(t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
                }), l
            }
            return s(e.dataTypes[0]) || !o["*"] && s("*")
        }

        function Oe(t, e) {
            var n, i, o = h.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && h.extend(!0, t, n), t
        }
        we = Ee.exec(be.toLowerCase()) || [], h.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: be,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(we[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ie,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": h.parseJSON,
                    "text xml": h.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? Oe(Oe(t, h.ajaxSettings), e) : Oe(h.ajaxSettings, t)
            },
            ajaxPrefilter: Ae(ke),
            ajaxTransport: Ae(De),
            ajax: function(t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, i, o, r, s, a, l, c, u = h.ajaxSetup({}, e),
                    d = u.context || u,
                    f = u.context && (d.nodeType || d.jquery) ? h(d) : h.event,
                    p = h.Deferred(),
                    g = h.Callbacks("once memory"),
                    m = u.statusCode || {},
                    v = {},
                    y = {},
                    w = 0,
                    b = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === w) {
                                if (!c)
                                    for (c = {}; e = Ce.exec(r);) c[e[1].toLowerCase()] = e[2];
                                e = c[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? r : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return w || (t = y[n] = y[n] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return w || (u.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > w)
                                    for (e in t) m[e] = [m[e], t[e]];
                                else _.always(t[_.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || b;
                            return l && l.abort(e), x(0, e), this
                        }
                    };
                if (p.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, u.url = ((t || u.url || be) + "").replace(_e, "").replace(Te, we[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = h.trim(u.dataType || "*").toLowerCase().match(A) || [""], null == u.crossDomain && (n = Ee.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === we[1] && n[2] === we[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (we[3] || ("http:" === we[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = h.param(u.data, u.traditional)), Ne(ke, u, e, _), 2 === w) return _;
                for (i in (a = h.event && u.global) && 0 == h.active++ && h.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Se.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (ve.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = xe.test(o) ? o.replace(xe, "$1_=" + me++) : o + (ve.test(o) ? "&" : "?") + "_=" + me++)), u.ifModified && (h.lastModified[o] && _.setRequestHeader("If-Modified-Since", h.lastModified[o]), h.etag[o] && _.setRequestHeader("If-None-Match", h.etag[o])), (u.data && u.hasContent && !1 !== u.contentType || e.contentType) && _.setRequestHeader("Content-Type", u.contentType), _.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Ie + "; q=0.01" : "") : u.accepts["*"]), u.headers) _.setRequestHeader(i, u.headers[i]);
                if (u.beforeSend && (!1 === u.beforeSend.call(d, _, u) || 2 === w)) return _.abort();
                for (i in b = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) _[i](u[i]);
                if (l = Ne(De, u, e, _)) {
                    _.readyState = 1, a && f.trigger("ajaxSend", [_, u]), u.async && u.timeout > 0 && (s = setTimeout(function() {
                        _.abort("timeout")
                    }, u.timeout));
                    try {
                        w = 1, l.send(v, x)
                    } catch (t) {
                        if (!(2 > w)) throw t;
                        x(-1, t)
                    }
                } else x(-1, "No Transport");

                function x(t, e, n, i) {
                    var c, v, y, b, x, C = e;
                    2 !== w && (w = 2, s && clearTimeout(s), l = void 0, r = i || "", _.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, n && (b = function(t, e, n) {
                        for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (o)
                            for (s in a)
                                if (a[s] && a[s].test(o)) {
                                    l.unshift(s);
                                    break
                                }
                        if (l[0] in n) r = l[0];
                        else {
                            for (s in n) {
                                if (!l[0] || t.converters[s + " " + l[0]]) {
                                    r = s;
                                    break
                                }
                                i || (i = s)
                            }
                            r = r || i
                        }
                        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
                    }(u, _, n)), b = function(t, e, n, i) {
                        var o, r, s, a, l, c = {},
                            u = t.dataTypes.slice();
                        if (u[1])
                            for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                        for (r = u.shift(); r;)
                            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                                if ("*" === r) r = l;
                                else if ("*" !== l && l !== r) {
                            if (!(s = c[l + " " + r] || c["* " + r]))
                                for (o in c)
                                    if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                        !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                        break
                                    }
                            if (!0 !== s)
                                if (s && t.throws) e = s(e);
                                else try {
                                    e = s(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: s ? t : "No conversion from " + l + " to " + r
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(u, b, _, c), c ? (u.ifModified && ((x = _.getResponseHeader("Last-Modified")) && (h.lastModified[o] = x), (x = _.getResponseHeader("etag")) && (h.etag[o] = x)), 204 === t || "HEAD" === u.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, v = b.data, c = !(y = b.error))) : (y = C, (t || !C) && (C = "error", 0 > t && (t = 0))), _.status = t, _.statusText = (e || C) + "", c ? p.resolveWith(d, [v, C, _]) : p.rejectWith(d, [_, C, y]), _.statusCode(m), m = void 0, a && f.trigger(c ? "ajaxSuccess" : "ajaxError", [_, u, c ? v : y]), g.fireWith(d, [_, C]), a && (f.trigger("ajaxComplete", [_, u]), --h.active || h.event.trigger("ajaxStop")))
                }
                return _
            },
            getJSON: function(t, e, n) {
                return h.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return h.get(t, void 0, e, "script")
            }
        }), h.each(["get", "post"], function(t, e) {
            h[e] = function(t, n, i, o) {
                return h.isFunction(n) && (o = o || i, i = n, n = void 0), h.ajax({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), h._evalUrl = function(t) {
            return h.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, h.fn.extend({
            wrapAll: function(t) {
                if (h.isFunction(t)) return this.each(function(e) {
                    h(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = h(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return this.each(h.isFunction(t) ? function(e) {
                    h(this).wrapInner(t.call(this, e))
                } : function() {
                    var e = h(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = h.isFunction(t);
                return this.each(function(n) {
                    h(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    h.nodeName(this, "body") || h(this).replaceWith(this.childNodes)
                }).end()
            }
        }), h.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !u.reliableHiddenOffsets() && "none" === (t.style && t.style.display || h.css(t, "display"))
        }, h.expr.filters.visible = function(t) {
            return !h.expr.filters.hidden(t)
        };
        var Me = /%20/g,
            Le = /\[\]$/,
            Pe = /\r?\n/g,
            je = /^(?:submit|button|image|reset|file)$/i,
            Be = /^(?:input|select|textarea|keygen)/i;

        function He(t, e, n, i) {
            var o;
            if (h.isArray(e)) h.each(e, function(e, o) {
                n || Le.test(t) ? i(t, o) : He(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== h.type(e)) i(t, e);
            else
                for (o in e) He(t + "[" + o + "]", e[o], n, i)
        }
        h.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    e = h.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = h.ajaxSettings && h.ajaxSettings.traditional), h.isArray(t) || t.jquery && !h.isPlainObject(t)) h.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) He(n, t[n], e, o);
            return i.join("&").replace(Me, "+")
        }, h.fn.extend({
            serialize: function() {
                return h.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = h.prop(this, "elements");
                    return t ? h.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !h(this).is(":disabled") && Be.test(this.nodeName) && !je.test(t) && (this.checked || !U.test(t))
                }).map(function(t, e) {
                    var n = h(this).val();
                    return null == n ? null : h.isArray(n) ? h.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Pe, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Pe, "\r\n")
                    }
                }).get()
            }
        }), h.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $e() || function() {
                try {
                    return new t.ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
            }()
        } : $e;
        var We = 0,
            ze = {},
            Re = h.ajaxSettings.xhr();

        function $e() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        }
        t.attachEvent && t.attachEvent("onunload", function() {
            for (var t in ze) ze[t](void 0, !0)
        }), u.cors = !!Re && "withCredentials" in Re, (Re = u.ajax = !!Re) && h.ajaxTransport(function(t) {
            var e;
            if (!t.crossDomain || u.cors) return {
                send: function(n, i) {
                    var o, r = t.xhr(),
                        s = ++We;
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) r[o] = t.xhrFields[o];
                    for (o in t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                    r.send(t.hasContent && t.data || null), e = function(n, o) {
                        var a, l, c;
                        if (e && (o || 4 === r.readyState))
                            if (delete ze[s], e = void 0, r.onreadystatechange = h.noop, o) 4 !== r.readyState && r.abort();
                            else {
                                c = {}, a = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (t) {
                                    l = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                            }
                        c && i(a, l, c, r.getAllResponseHeaders())
                    }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = ze[s] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }), h.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return h.globalEval(t), t
                }
            }
        }), h.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), h.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n = S.head || h("head")[0] || S.documentElement;
                return {
                    send: function(i, o) {
                        (e = S.createElement("script")).async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    },
                    abort: function() {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var qe = [],
            Fe = /(=)\?(?=&|$)|\?\?/;
        h.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = qe.pop() || h.expando + "_" + me++;
                return this[t] = !0, t
            }
        }), h.ajaxPrefilter("json jsonp", function(e, n, i) {
            var o, r, s, a = !1 !== e.jsonp && (Fe.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Fe.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = h.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Fe, "$1" + o) : !1 !== e.jsonp && (e.url += (ve.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return s || h.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
                s = arguments
            }, i.always(function() {
                t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, qe.push(o)), s && h.isFunction(r) && r(s[0]), s = r = void 0
            }), "script") : void 0
        }), h.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || S;
            var i = b.exec(t),
                o = !n && [];
            return i ? [e.createElement(i[1])] : (i = h.buildFragment([t], e, o), o && o.length && h(o).remove(), h.merge([], i.childNodes))
        };
        var Xe = h.fn.load;
        h.fn.load = function(t, e, n) {
            if ("string" != typeof t && Xe) return Xe.apply(this, arguments);
            var i, o, r, s = this,
                a = t.indexOf(" ");
            return a >= 0 && (i = h.trim(t.slice(a, t.length)), t = t.slice(0, a)), h.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && h.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, s.html(i ? h("<div>").append(h.parseHTML(t)).find(i) : t)
            }).complete(n && function(t, e) {
                s.each(n, o || [t.responseText, e, t])
            }), this
        }, h.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            h.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), h.expr.filters.animated = function(t) {
            return h.grep(h.timers, function(e) {
                return t === e.elem
            }).length
        };
        var Ue = t.document.documentElement;

        function Ye(t) {
            return h.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        h.offset = {
            setOffset: function(t, e, n) {
                var i, o, r, s, a, l, c = h.css(t, "position"),
                    u = h(t),
                    d = {};
                "static" === c && (t.style.position = "relative"), a = u.offset(), r = h.css(t, "top"), l = h.css(t, "left"), ("absolute" === c || "fixed" === c) && h.inArray("auto", [r, l]) > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), h.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : u.css(d)
            }
        }, h.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    h.offset.setOffset(this, t, e)
                });
                var e, n, i = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    r = o && o.ownerDocument;
                return r ? (e = r.documentElement, h.contains(e, o) ? (typeof o.getBoundingClientRect !== P && (i = o.getBoundingClientRect()), n = Ye(r), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === h.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), h.nodeName(t[0], "html") || (n = t.offset()), n.top += h.css(t[0], "borderTopWidth", !0), n.left += h.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - h.css(i, "marginTop", !0),
                        left: e.left - n.left - h.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || Ue; t && !h.nodeName(t, "html") && "static" === h.css(t, "position");) t = t.offsetParent;
                    return t || Ue
                })
            }
        }), h.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = /Y/.test(e);
            h.fn[t] = function(i) {
                return X(this, function(t, i, o) {
                    var r = Ye(t);
                    return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void(r ? r.scrollTo(n ? h(r).scrollLeft() : o, n ? o : h(r).scrollTop()) : t[i] = o)
                }, t, i, arguments.length, null)
            }
        }), h.each(["top", "left"], function(t, e) {
            h.cssHooks[e] = Lt(u.pixelPosition, function(t, n) {
                return n ? (n = At(t, e), Ot.test(n) ? h(t).position()[e] + "px" : n) : void 0
            })
        }), h.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            h.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                h.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return X(this, function(e, n, i) {
                        var o;
                        return h.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? h.css(e, n, s) : h.style(e, n, i, s)
                    }, e, r ? i : void 0, r, null)
                }
            })
        }), h.fn.size = function() {
            return this.length
        }, h.fn.andSelf = h.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return h
        });
        var Qe = t.jQuery,
            Ve = t.$;
        return h.noConflict = function(e) {
            return t.$ === h && (t.$ = Ve), e && t.jQuery === h && (t.jQuery = Qe), h
        }, typeof e === P && (t.jQuery = t.$ = h), h
    }), function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
    }(this, function(t, e, n) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t) {
            var e = t.getBoundingClientRect(),
                n = {};
            for (var i in e) n[i] = e[i];
            if (t.ownerDocument !== document) {
                var r = t.ownerDocument.defaultView.frameElement;
                if (r) {
                    var s = o(r);
                    n.top += s.top, n.bottom += s.top, n.left += s.left, n.right += s.left
                }
            }
            return n
        }

        function r(t) {
            var e = (getComputedStyle(t) || {}).position,
                n = [];
            if ("fixed" === e) return [t];
            for (var i = t;
                (i = i.parentNode) && i && 1 === i.nodeType;) {
                var o = void 0;
                try {
                    o = getComputedStyle(i)
                } catch (t) {}
                if (null == o) return n.push(i), n;
                var r = o,
                    s = r.overflow,
                    a = r.overflowX,
                    l = r.overflowY;
                /(auto|scroll)/.test(s + l + a) && ("absolute" !== e || ["relative", "absolute", "fixed"].indexOf(o.position) >= 0) && n.push(i)
            }
            return n.push(t.ownerDocument.body), t.ownerDocument !== document && n.push(t.ownerDocument.defaultView), n
        }

        function s() {
            S && document.body.removeChild(S), S = null
        }

        function a(t) {
            var e = void 0;
            t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
            var n = e.documentElement,
                i = o(t),
                r = k();
            return i.top -= r.top, i.left -= r.left, void 0 === i.width && (i.width = document.body.scrollWidth - i.left - i.right), void 0 === i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - n.clientTop, i.left = i.left - n.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i
        }

        function l(t) {
            return t.offsetParent || document.documentElement
        }

        function c() {
            var t = document.createElement("div");
            t.style.width = "100%", t.style.height = "200px";
            var e = document.createElement("div");
            u(e.style, {
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            }), e.appendChild(t), document.body.appendChild(e);
            var n = t.offsetWidth;
            e.style.overflow = "scroll";
            var i = t.offsetWidth;
            n === i && (i = e.clientWidth), document.body.removeChild(e);
            var o = n - i;
            return {
                width: o,
                height: o
            }
        }

        function u() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = [];
            return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function(e) {
                if (e)
                    for (var n in e)({}).hasOwnProperty.call(e, n) && (t[n] = e[n])
            }), t
        }

        function d(t, e) {
            if (void 0 !== t.classList) e.split(" ").forEach(function(e) {
                e.trim() && t.classList.remove(e)
            });
            else {
                var n = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
                    i = p(t).replace(n, " ");
                g(t, i)
            }
        }

        function h(t, e) {
            if (void 0 !== t.classList) e.split(" ").forEach(function(e) {
                e.trim() && t.classList.add(e)
            });
            else {
                d(t, e);
                var n = p(t) + " " + e;
                g(t, n)
            }
        }

        function f(t, e) {
            if (void 0 !== t.classList) return t.classList.contains(e);
            var n = p(t);
            return new RegExp("(^| )" + e + "( |$)", "gi").test(n)
        }

        function p(t) {
            return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
        }

        function g(t, e) {
            t.setAttribute("class", e)
        }

        function m(t, e, n) {
            n.forEach(function(n) {
                -1 === e.indexOf(n) && f(t, n) && d(t, n)
            }), e.forEach(function(e) {
                f(t, e) || h(t, e)
            })
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function v(t, e) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
            return t + n >= e && e >= t - n
        }

        function y() {
            return "undefined" != typeof performance && void 0 !== performance.now ? performance.now() : +new Date
        }

        function w() {
            for (var t = {
                    top: 0,
                    left: 0
                }, e = arguments.length, n = Array(e), i = 0; e > i; i++) n[i] = arguments[i];
            return n.forEach(function(e) {
                var n = e.top,
                    i = e.left;
                "string" == typeof n && (n = parseFloat(n, 10)), "string" == typeof i && (i = parseFloat(i, 10)), t.top += n, t.left += i
            }), t
        }

        function b(t, e) {
            return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
        }

        function _(t, e) {
            return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), void 0 !== e.nodeType && function() {
                var t = e,
                    n = a(e),
                    i = n,
                    o = getComputedStyle(e);
                if (e = [i.left, i.top, n.width + i.left, n.height + i.top], t.ownerDocument !== document) {
                    var r = t.ownerDocument.defaultView;
                    e[0] += r.pageXOffset, e[1] += r.pageYOffset, e[2] += r.pageXOffset, e[3] += r.pageYOffset
                }
                X.forEach(function(t, n) {
                    "Top" === (t = t[0].toUpperCase() + t.substr(1)) || "Left" === t ? e[n] += parseFloat(o["border" + t + "Width"]) : e[n] -= parseFloat(o["border" + t + "Width"])
                })
            }(), e
        }
        var x = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            C = void 0;
        void 0 === C && (C = {
            modules: []
        });
        var S = null,
            T = function() {
                var t = 0;
                return function() {
                    return ++t
                }
            }(),
            E = {},
            k = function() {
                var t = S;
                t || ((t = document.createElement("div")).setAttribute("data-tether-id", T()), u(t.style, {
                    top: 0,
                    left: 0,
                    position: "absolute"
                }), document.body.appendChild(t), S = t);
                var e = t.getAttribute("data-tether-id");
                return void 0 === E[e] && (E[e] = o(t), I(function() {
                    delete E[e]
                })), E[e]
            },
            D = [],
            I = function(t) {
                D.push(t)
            },
            A = function() {
                for (var t = void 0; t = D.pop();) t()
            },
            N = function() {
                function t() {
                    i(this, t)
                }
                return x(t, [{
                    key: "on",
                    value: function(t, e, n) {
                        var i = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                        void 0 === this.bindings && (this.bindings = {}), void 0 === this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
                            handler: e,
                            ctx: n,
                            once: i
                        })
                    }
                }, {
                    key: "once",
                    value: function(t, e, n) {
                        this.on(t, e, n, !0)
                    }
                }, {
                    key: "off",
                    value: function(t, e) {
                        if (void 0 !== this.bindings && void 0 !== this.bindings[t])
                            if (void 0 === e) delete this.bindings[t];
                            else
                                for (var n = 0; n < this.bindings[t].length;) this.bindings[t][n].handler === e ? this.bindings[t].splice(n, 1) : ++n
                    }
                }, {
                    key: "trigger",
                    value: function(t) {
                        if (void 0 !== this.bindings && this.bindings[t]) {
                            for (var e = 0, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; n > o; o++) i[o - 1] = arguments[o];
                            for (; e < this.bindings[t].length;) {
                                var r = this.bindings[t][e],
                                    s = r.handler,
                                    a = r.ctx,
                                    l = r.once,
                                    c = a;
                                void 0 === c && (c = this), s.apply(c, i), l ? this.bindings[t].splice(e, 1) : ++e
                            }
                        }
                    }
                }]), t
            }();
        C.Utils = {
            getActualBoundingClientRect: o,
            getScrollParents: r,
            getBounds: a,
            getOffsetParent: l,
            extend: u,
            addClass: h,
            removeClass: d,
            hasClass: f,
            updateClasses: m,
            defer: I,
            flush: A,
            uniqueId: T,
            Evented: N,
            getScrollBarSize: c,
            removeUtilElements: s
        };
        var O = function() {
                return function(t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return function(t, e) {
                        var n = [],
                            i = !0,
                            o = !1,
                            r = void 0;
                        try {
                            for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
                        } catch (t) {
                            o = !0, r = t
                        } finally {
                            try {
                                !i && a.return && a.return()
                            } finally {
                                if (o) throw r
                            }
                        }
                        return n
                    }(t, e);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            M = (x = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(), function(t, e, n) {
                for (var i = !0; i;) {
                    var o = t,
                        r = e,
                        s = n;
                    i = !1, null === o && (o = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(o, r);
                    if (void 0 !== a) {
                        if ("value" in a) return a.value;
                        var l = a.get;
                        if (void 0 === l) return;
                        return l.call(s)
                    }
                    var c = Object.getPrototypeOf(o);
                    if (null === c) return;
                    t = c, e = r, n = s, i = !0, a = c = void 0
                }
            });
        if (void 0 === C) throw new Error("You must include the utils.js file before tether.js");
        var r = (U = C.Utils).getScrollParents,
            l = (a = U.getBounds, U.getOffsetParent),
            h = (u = U.extend, U.addClass),
            d = U.removeClass,
            c = (m = U.updateClasses, I = U.defer, A = U.flush, U.getScrollBarSize),
            s = U.removeUtilElements,
            L = function() {
                if ("undefined" == typeof document) return "";
                for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], n = 0; n < e.length; ++n) {
                    var i = e[n];
                    if (void 0 !== t.style[i]) return i
                }
            }(),
            P = [],
            j = function() {
                P.forEach(function(t) {
                    t.position(!1)
                }), A()
            };
        ! function() {
            var t = null,
                e = null,
                n = null,
                i = function i() {
                    return void 0 !== e && e > 16 ? (e = Math.min(e - 16, 250), void(n = setTimeout(i, 250))) : void(void 0 !== t && y() - t < 10 || (null != n && (clearTimeout(n), n = null), t = y(), j(), e = y() - t))
                };
            "undefined" != typeof window && void 0 !== window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(t) {
                window.addEventListener(t, i)
            })
        }();
        var B = {
                center: "center",
                left: "right",
                right: "left"
            },
            H = {
                middle: "middle",
                top: "bottom",
                bottom: "top"
            },
            W = {
                top: 0,
                left: 0,
                middle: "50%",
                center: "50%",
                bottom: "100%",
                right: "100%"
            },
            z = function(t) {
                var e = t.left,
                    n = t.top;
                return void 0 !== W[t.left] && (e = W[t.left]), void 0 !== W[t.top] && (n = W[t.top]), {
                    left: e,
                    top: n
                }
            },
            R = function(t) {
                var e = t.split(" "),
                    n = O(e, 2);
                return {
                    top: n[0],
                    left: n[1]
                }
            },
            $ = R,
            q = function(t) {
                function e(t) {
                    var n = this;
                    i(this, e), M(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), P.push(this), this.history = [], this.setOptions(t, !1), C.modules.forEach(function(t) {
                        void 0 !== t.initialize && t.initialize.call(n)
                    }), this.position()
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, N), x(e, [{
                    key: "getClass",
                    value: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                            e = this.options.classes;
                        return void 0 !== e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
                    }
                }, {
                    key: "setOptions",
                    value: function(t) {
                        var e = this,
                            n = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
                        this.options = u({
                            offset: "0 0",
                            targetOffset: "0 0",
                            targetAttachment: "auto auto",
                            classPrefix: "tether"
                        }, t);
                        var i = this.options,
                            o = i.element,
                            s = i.target,
                            a = i.targetModifier;
                        if (this.element = o, this.target = s, this.targetModifier = a, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(t) {
                                if (void 0 === e[t]) throw new Error("Tether Error: Both element and target must be defined");
                                void 0 !== e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                            }), h(this.element, this.getClass("element")), !1 !== this.options.addTargetClasses && h(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                        this.targetAttachment = $(this.options.targetAttachment), this.attachment = $(this.options.attachment), this.offset = R(this.options.offset), this.targetOffset = R(this.options.targetOffset), void 0 !== this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target), !1 !== this.options.enabled && this.enable(n)
                    }
                }, {
                    key: "getTargetBounds",
                    value: function() {
                        if (void 0 === this.targetModifier) return a(this.target);
                        if ("visible" === this.targetModifier) return this.target === document.body ? {
                            top: pageYOffset,
                            left: pageXOffset,
                            height: innerHeight,
                            width: innerWidth
                        } : ((r = {
                            height: (t = a(this.target)).height,
                            width: t.width,
                            top: t.top,
                            left: t.left
                        }).height = Math.min(r.height, t.height - (pageYOffset - t.top)), r.height = Math.min(r.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), r.height = Math.min(innerHeight, r.height), r.height -= 2, r.width = Math.min(r.width, t.width - (pageXOffset - t.left)), r.width = Math.min(r.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), r.width = Math.min(innerWidth, r.width), r.width -= 2, r.top < pageYOffset && (r.top = pageYOffset), r.left < pageXOffset && (r.left = pageXOffset), r);
                        if ("scroll-handle" === this.targetModifier) {
                            var t = void 0,
                                e = this.target;
                            e === document.body ? (e = document.documentElement, t = {
                                left: pageXOffset,
                                top: pageYOffset,
                                height: innerHeight,
                                width: innerWidth
                            }) : t = a(e);
                            var n = getComputedStyle(e),
                                i = 0;
                            (e.scrollWidth > e.clientWidth || [n.overflow, n.overflowX].indexOf("scroll") >= 0 || this.target !== document.body) && (i = 15);
                            var o = t.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - i,
                                r = {
                                    width: 15,
                                    height: .975 * o * (o / e.scrollHeight),
                                    left: t.left + t.width - parseFloat(n.borderLeftWidth) - 15
                                },
                                s = 0;
                            408 > o && this.target === document.body && (s = -11e-5 * Math.pow(o, 2) - .00727 * o + 22.58), this.target !== document.body && (r.height = Math.max(r.height, 24));
                            var l = this.target.scrollTop / (e.scrollHeight - o);
                            return r.top = l * (o - r.height - s) + t.top + parseFloat(n.borderTopWidth), this.target === document.body && (r.height = Math.max(r.height, 24)), r
                        }
                    }
                }, {
                    key: "clearCache",
                    value: function() {
                        this._cache = {}
                    }
                }, {
                    key: "cache",
                    value: function(t, e) {
                        return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
                    }
                }, {
                    key: "enable",
                    value: function() {
                        var t = this,
                            e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        !1 !== this.options.addTargetClasses && h(this.target, this.getClass("enabled")), h(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function(e) {
                            e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
                        }), e && this.position()
                    }
                }, {
                    key: "disable",
                    value: function() {
                        var t = this;
                        d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !1, void 0 !== this.scrollParents && this.scrollParents.forEach(function(e) {
                            e.removeEventListener("scroll", t.position)
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t = this;
                        this.disable(), P.forEach(function(e, n) {
                            e === t && P.splice(n, 1)
                        }), 0 === P.length && s()
                    }
                }, {
                    key: "updateAttachClasses",
                    value: function(t, e) {
                        var n = this;
                        t = t || this.attachment, e = e || this.targetAttachment;
                        void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), void 0 === this._addAttachClasses && (this._addAttachClasses = []);
                        var i = this._addAttachClasses;
                        t.top && i.push(this.getClass("element-attached") + "-" + t.top), t.left && i.push(this.getClass("element-attached") + "-" + t.left), e.top && i.push(this.getClass("target-attached") + "-" + e.top), e.left && i.push(this.getClass("target-attached") + "-" + e.left);
                        var o = [];
                        ["left", "top", "bottom", "right", "middle", "center"].forEach(function(t) {
                            o.push(n.getClass("element-attached") + "-" + t), o.push(n.getClass("target-attached") + "-" + t)
                        }), I(function() {
                            void 0 !== n._addAttachClasses && (m(n.element, n._addAttachClasses, o), !1 !== n.options.addTargetClasses && m(n.target, n._addAttachClasses, o), delete n._addAttachClasses)
                        })
                    }
                }, {
                    key: "position",
                    value: function() {
                        var t = this,
                            e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        if (this.enabled) {
                            this.clearCache();
                            var n = function(t, e) {
                                var n = t.left,
                                    i = t.top;
                                return "auto" === n && (n = B[e.left]), "auto" === i && (i = H[e.top]), {
                                    left: n,
                                    top: i
                                }
                            }(this.targetAttachment, this.attachment);
                            this.updateAttachClasses(this.attachment, n);
                            var i = this.cache("element-bounds", function() {
                                    return a(t.element)
                                }),
                                o = i.width,
                                r = i.height;
                            if (0 === o && 0 === r && void 0 !== this.lastSize) {
                                var s = this.lastSize;
                                o = s.width, r = s.height
                            } else this.lastSize = {
                                width: o,
                                height: r
                            };
                            var u = this.cache("target-bounds", function() {
                                    return t.getTargetBounds()
                                }),
                                d = u,
                                h = b(z(this.attachment), {
                                    width: o,
                                    height: r
                                }),
                                f = b(z(n), d),
                                p = b(this.offset, {
                                    width: o,
                                    height: r
                                }),
                                g = b(this.targetOffset, d);
                            h = w(h, p), f = w(f, g);
                            for (var m = u.left + f.left - h.left, v = u.top + f.top - h.top, y = 0; y < C.modules.length; ++y) {
                                var _ = C.modules[y].position.call(this, {
                                    left: m,
                                    top: v,
                                    targetAttachment: n,
                                    targetPos: u,
                                    elementPos: i,
                                    offset: h,
                                    targetOffset: f,
                                    manualOffset: p,
                                    manualTargetOffset: g,
                                    scrollbarSize: E,
                                    attachment: this.attachment
                                });
                                if (!1 === _) return !1;
                                void 0 !== _ && "object" == typeof _ && (v = _.top, m = _.left)
                            }
                            var x = {
                                    page: {
                                        top: v,
                                        left: m
                                    },
                                    viewport: {
                                        top: v - pageYOffset,
                                        bottom: pageYOffset - v - r + innerHeight,
                                        left: m - pageXOffset,
                                        right: pageXOffset - m - o + innerWidth
                                    }
                                },
                                S = this.target.ownerDocument,
                                T = S.defaultView,
                                E = void 0;
                            return S.body.scrollWidth > T.innerWidth && (E = this.cache("scrollbar-size", c), x.viewport.bottom -= E.height), S.body.scrollHeight > T.innerHeight && (E = this.cache("scrollbar-size", c), x.viewport.right -= E.width), (-1 === ["", "static"].indexOf(S.body.style.position) || -1 === ["", "static"].indexOf(S.body.parentElement.style.position)) && (x.page.bottom = S.body.scrollHeight - v - r, x.page.right = S.body.scrollWidth - m - o), void 0 !== this.options.optimizations && !1 !== this.options.optimizations.moveElement && void 0 === this.targetModifier && function() {
                                var e = t.cache("target-offsetparent", function() {
                                        return l(t.target)
                                    }),
                                    n = t.cache("target-offsetparent-bounds", function() {
                                        return a(e)
                                    }),
                                    i = getComputedStyle(e),
                                    o = n,
                                    r = {};
                                if (["Top", "Left", "Bottom", "Right"].forEach(function(t) {
                                        r[t.toLowerCase()] = parseFloat(i["border" + t + "Width"])
                                    }), n.right = S.body.scrollWidth - n.left - o.width + r.right, n.bottom = S.body.scrollHeight - n.top - o.height + r.bottom, x.page.top >= n.top + r.top && x.page.bottom >= n.bottom && x.page.left >= n.left + r.left && x.page.right >= n.right) {
                                    var s = e.scrollTop,
                                        c = e.scrollLeft;
                                    x.offset = {
                                        top: x.page.top - n.top + s - r.top,
                                        left: x.page.left - n.left + c - r.left
                                    }
                                }
                            }(), this.move(x), this.history.unshift(x), this.history.length > 3 && this.history.pop(), e && A(), !0
                        }
                    }
                }, {
                    key: "move",
                    value: function(t) {
                        var e = this;
                        if (void 0 !== this.element.parentNode) {
                            var n = {};
                            for (var i in t)
                                for (var o in n[i] = {}, t[i]) {
                                    for (var r = !1, s = 0; s < this.history.length; ++s) {
                                        var a = this.history[s];
                                        if (void 0 !== a[i] && !v(a[i][o], t[i][o])) {
                                            r = !0;
                                            break
                                        }
                                    }
                                    r || (n[i][o] = !0)
                                }
                            var c = {
                                    top: "",
                                    left: "",
                                    right: "",
                                    bottom: ""
                                },
                                d = function(t, n) {
                                    if (!1 !== (void 0 !== e.options.optimizations ? e.options.optimizations.gpu : null)) {
                                        var i = void 0,
                                            o = void 0;
                                        t.top ? (c.top = 0, i = n.top) : (c.bottom = 0, i = -n.bottom), t.left ? (c.left = 0, o = n.left) : (c.right = 0, o = -n.right), c[L] = "translateX(" + Math.round(o) + "px) translateY(" + Math.round(i) + "px)", "msTransform" !== L && (c[L] += " translateZ(0)")
                                    } else t.top ? c.top = n.top + "px" : c.bottom = n.bottom + "px", t.left ? c.left = n.left + "px" : c.right = n.right + "px"
                                },
                                h = !1;
                            if ((n.page.top || n.page.bottom) && (n.page.left || n.page.right) ? (c.position = "absolute", d(n.page, t.page)) : (n.viewport.top || n.viewport.bottom) && (n.viewport.left || n.viewport.right) ? (c.position = "fixed", d(n.viewport, t.viewport)) : void 0 !== n.offset && n.offset.top && n.offset.left ? function() {
                                    c.position = "absolute";
                                    var i = e.cache("target-offsetparent", function() {
                                        return l(e.target)
                                    });
                                    l(e.element) !== i && I(function() {
                                        e.element.parentNode.removeChild(e.element), i.appendChild(e.element)
                                    }), d(n.offset, t.offset), h = !0
                                }() : (c.position = "absolute", d({
                                    top: !0,
                                    left: !0
                                }, t.page)), !h) {
                                for (var f = !0, p = this.element.parentNode; p && 1 === p.nodeType && "BODY" !== p.tagName;) {
                                    if ("static" !== getComputedStyle(p).position) {
                                        f = !1;
                                        break
                                    }
                                    p = p.parentNode
                                }
                                f || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                            }
                            var g = {},
                                m = !1;
                            for (var o in c) {
                                var y = c[o];
                                this.element.style[o] !== y && (m = !0, g[o] = y)
                            }
                            m && I(function() {
                                u(e.element.style, g)
                            })
                        }
                    }
                }]), e
            }();
        q.modules = [], C.position = j;
        var F = u(q, C),
            u = (O = function() {
                return function(t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return function(t, e) {
                        var n = [],
                            i = !0,
                            o = !1,
                            r = void 0;
                        try {
                            for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
                        } catch (t) {
                            o = !0, r = t
                        } finally {
                            try {
                                !i && a.return && a.return()
                            } finally {
                                if (o) throw r
                            }
                        }
                        return n
                    }(t, e);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(), a = (U = C.Utils).getBounds, U.extend),
            X = (m = U.updateClasses, I = U.defer, ["left", "top", "right", "bottom"]);
        C.modules.push({
            position: function(t) {
                var e = this,
                    n = t.top,
                    i = t.left,
                    o = t.targetAttachment;
                if (!this.options.constraints) return !0;
                var r = this.cache("element-bounds", function() {
                        return a(e.element)
                    }),
                    s = r.height,
                    l = r.width;
                if (0 === l && 0 === s && void 0 !== this.lastSize) {
                    var c = this.lastSize;
                    l = c.width, s = c.height
                }
                var d = this.cache("target-bounds", function() {
                        return e.getTargetBounds()
                    }),
                    h = d.height,
                    f = d.width,
                    p = [this.getClass("pinned"), this.getClass("out-of-bounds")];
                this.options.constraints.forEach(function(t) {
                    var e = t.outOfBoundsClass,
                        n = t.pinnedClass;
                    e && p.push(e), n && p.push(n)
                }), p.forEach(function(t) {
                    ["left", "top", "right", "bottom"].forEach(function(e) {
                        p.push(t + "-" + e)
                    })
                });
                var g = [],
                    v = u({}, o),
                    y = u({}, this.attachment);
                return this.options.constraints.forEach(function(t) {
                    var r = t.to,
                        a = t.attachment,
                        c = t.pin;
                    void 0 === a && (a = "");
                    var u = void 0,
                        d = void 0;
                    if (a.indexOf(" ") >= 0) {
                        var p = a.split(" "),
                            m = O(p, 2);
                        d = m[0], u = m[1]
                    } else u = d = a;
                    var w = _(e, r);
                    ("target" === d || "both" === d) && (n < w[1] && "top" === v.top && (n += h, v.top = "bottom"), n + s > w[3] && "bottom" === v.top && (n -= h, v.top = "top")), "together" === d && ("top" === v.top && ("bottom" === y.top && n < w[1] ? (n += h, v.top = "bottom", n += s, y.top = "top") : "top" === y.top && n + s > w[3] && n - (s - h) >= w[1] && (n -= s - h, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && n + s > w[3] ? (n -= h, v.top = "top", n -= s, y.top = "bottom") : "bottom" === y.top && n < w[1] && n + (2 * s - h) <= w[3] && (n += s - h, v.top = "top", y.top = "top")), "middle" === v.top && (n + s > w[3] && "top" === y.top ? (n -= s, y.top = "bottom") : n < w[1] && "bottom" === y.top && (n += s, y.top = "top"))), ("target" === u || "both" === u) && (i < w[0] && "left" === v.left && (i += f, v.left = "right"), i + l > w[2] && "right" === v.left && (i -= f, v.left = "left")), "together" === u && (i < w[0] && "left" === v.left ? "right" === y.left ? (i += f, v.left = "right", i += l, y.left = "left") : "left" === y.left && (i += f, v.left = "right", i -= l, y.left = "right") : i + l > w[2] && "right" === v.left ? "left" === y.left ? (i -= f, v.left = "left", i -= l, y.left = "right") : "right" === y.left && (i -= f, v.left = "left", i += l, y.left = "left") : "center" === v.left && (i + l > w[2] && "left" === y.left ? (i -= l, y.left = "right") : i < w[0] && "right" === y.left && (i += l, y.left = "left"))), ("element" === d || "both" === d) && (n < w[1] && "bottom" === y.top && (n += s, y.top = "top"), n + s > w[3] && "top" === y.top && (n -= s, y.top = "bottom")), ("element" === u || "both" === u) && (i < w[0] && ("right" === y.left ? (i += l, y.left = "left") : "center" === y.left && (i += l / 2, y.left = "left")), i + l > w[2] && ("left" === y.left ? (i -= l, y.left = "right") : "center" === y.left && (i -= l / 2, y.left = "right"))), "string" == typeof c ? c = c.split(",").map(function(t) {
                        return t.trim()
                    }) : !0 === c && (c = ["top", "left", "right", "bottom"]), c = c || [];
                    var b = [],
                        x = [];
                    n < w[1] && (c.indexOf("top") >= 0 ? (n = w[1], b.push("top")) : x.push("top")), n + s > w[3] && (c.indexOf("bottom") >= 0 ? (n = w[3] - s, b.push("bottom")) : x.push("bottom")), i < w[0] && (c.indexOf("left") >= 0 ? (i = w[0], b.push("left")) : x.push("left")), i + l > w[2] && (c.indexOf("right") >= 0 ? (i = w[2] - l, b.push("right")) : x.push("right")), b.length && function() {
                        var t;
                        t = void 0 !== e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), g.push(t), b.forEach(function(e) {
                            g.push(t + "-" + e)
                        })
                    }(), x.length && function() {
                        var t;
                        t = void 0 !== e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), g.push(t), x.forEach(function(e) {
                            g.push(t + "-" + e)
                        })
                    }(), (b.indexOf("left") >= 0 || b.indexOf("right") >= 0) && (y.left = v.left = !1), (b.indexOf("top") >= 0 || b.indexOf("bottom") >= 0) && (y.top = v.top = !1), (v.top !== o.top || v.left !== o.left || y.top !== e.attachment.top || y.left !== e.attachment.left) && (e.updateAttachClasses(y, v), e.trigger("update", {
                        attachment: y,
                        targetAttachment: v
                    }))
                }), I(function() {
                    !1 !== e.options.addTargetClasses && m(e.target, g, p), m(e.element, g, p)
                }), {
                    top: n,
                    left: i
                }
            }
        });
        var U, a = (U = C.Utils).getBounds,
            m = U.updateClasses;
        I = U.defer;
        C.modules.push({
            position: function(t) {
                var e = this,
                    n = t.top,
                    i = t.left,
                    o = this.cache("element-bounds", function() {
                        return a(e.element)
                    }),
                    r = o.height,
                    s = o.width,
                    l = this.getTargetBounds(),
                    c = n + r,
                    u = i + s,
                    d = [];
                n <= l.bottom && c >= l.top && ["left", "right"].forEach(function(t) {
                    var e = l[t];
                    (e === i || e === u) && d.push(t)
                }), i <= l.right && u >= l.left && ["top", "bottom"].forEach(function(t) {
                    var e = l[t];
                    (e === n || e === c) && d.push(t)
                });
                var h = [],
                    f = [];
                return h.push(this.getClass("abutted")), ["left", "top", "right", "bottom"].forEach(function(t) {
                    h.push(e.getClass("abutted") + "-" + t)
                }), d.length && f.push(this.getClass("abutted")), d.forEach(function(t) {
                    f.push(e.getClass("abutted") + "-" + t)
                }), I(function() {
                    !1 !== e.options.addTargetClasses && m(e.target, f, h), m(e.element, f, h)
                }), !0
            }
        });
        O = function() {
            return function(t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function(t, e) {
                    var n = [],
                        i = !0,
                        o = !1,
                        r = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
                    } catch (t) {
                        o = !0, r = t
                    } finally {
                        try {
                            !i && a.return && a.return()
                        } finally {
                            if (o) throw r
                        }
                    }
                    return n
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        return C.modules.push({
            position: function(t) {
                var e = t.top,
                    n = t.left;
                if (this.options.shift) {
                    var i = this.options.shift;
                    "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
                        top: e,
                        left: n
                    }));
                    var o = void 0,
                        r = void 0;
                    if ("string" == typeof i) {
                        (i = i.split(" "))[1] = i[1] || i[0];
                        var s = O(i, 2);
                        o = s[0], r = s[1], o = parseFloat(o, 10), r = parseFloat(r, 10)
                    } else o = i.top, r = i.left;
                    return {
                        top: e += o,
                        left: n += r
                    }
                }
            }
        }), F
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");

function close_notify() {
	$("body > .notify").fadeOut(1000, function() { $(this).remove(); });
}
! function(t) {
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(),
function() {
    function t(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        n = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        i = function(t) {
            function e(t) {
                return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }

            function n(t) {
                return (t[0] || t).nodeType
            }

            function i(e) {
                var n = this,
                    i = !1;
                return t(this).one(s.TRANSITION_END, function() {
                    i = !0
                }), setTimeout(function() {
                    i || s.triggerTransitionEnd(n)
                }, e), this
            }
            var o = !1,
                r = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                s = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(t) {
                        do {
                            t += ~~(1e6 * Math.random())
                        } while (document.getElementById(t));
                        return t
                    },
                    getSelectorFromElement: function(t) {
                        var e = t.getAttribute("data-target");
                        return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e
                    },
                    reflow: function(t) {
                        return t.offsetHeight
                    },
                    triggerTransitionEnd: function(e) {
                        t(e).trigger(o.end)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(o)
                    },
                    typeCheckConfig: function(t, i, o) {
                        for (var r in o)
                            if (o.hasOwnProperty(r)) {
                                var s = o[r],
                                    a = i[r],
                                    l = a && n(a) ? "element" : e(a);
                                if (!new RegExp(s).test(l)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + s + '".')
                            }
                    }
                };
            return o = function() {
                if (window.QUnit) return !1;
                var t = document.createElement("bootstrap");
                for (var e in r)
                    if (void 0 !== t.style[e]) return {
                        end: r[e]
                    };
                return !1
            }(), t.fn.emulateTransitionEnd = i, s.supportsTransitionEnd() && (t.event.special[s.TRANSITION_END] = {
                bindType: o.end,
                delegateType: o.end,
                handle: function(e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            }), s
        }(jQuery),
        o = (function(e) {
            var o = "alert",
                r = "bs.alert",
                s = "." + r,
                a = e.fn[o],
                l = {
                    CLOSE: "close" + s,
                    CLOSED: "closed" + s,
                    CLICK_DATA_API: "click" + s + ".data-api"
                },
                c = "alert",
                u = "fade",
                d = "show",
                h = function() {
                    function o(e) {
                        t(this, o), this._element = e
                    }
                    return o.prototype.close = function(t) {
                        t = t || this._element;
                        var e = this._getRootElement(t);
                        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                    }, o.prototype.dispose = function() {
                        e.removeData(this._element, r), this._element = null
                    }, o.prototype._getRootElement = function(t) {
                        var n = i.getSelectorFromElement(t),
                            o = !1;
                        return n && (o = e(n)[0]), o || (o = e(t).closest("." + c)[0]), o
                    }, o.prototype._triggerCloseEvent = function(t) {
                        var n = e.Event(l.CLOSE);
                        return e(t).trigger(n), n
                    }, o.prototype._removeElement = function(t) {
                        var n = this;
                        return e(t).removeClass(d), i.supportsTransitionEnd() && e(t).hasClass(u) ? void e(t).one(i.TRANSITION_END, function(e) {
                            return n._destroyElement(t, e)
                        }).emulateTransitionEnd(150) : void this._destroyElement(t)
                    }, o.prototype._destroyElement = function(t) {
                        e(t).detach().trigger(l.CLOSED).remove()
                    }, o._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this),
                                i = n.data(r);
                            i || (i = new o(this), n.data(r, i)), "close" === t && i[t](this)
                        })
                    }, o._handleDismiss = function(t) {
                        return function(e) {
                            e && e.preventDefault(), t.close(this)
                        }
                    }, n(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }]), o
                }();
            e(document).on(l.CLICK_DATA_API, '[data-dismiss="alert"]', h._handleDismiss(new h)), e.fn[o] = h._jQueryInterface, e.fn[o].Constructor = h, e.fn[o].noConflict = function() {
                return e.fn[o] = a, h._jQueryInterface
            }
        }(jQuery), function(e) {
            var i = "button",
                o = "bs.button",
                r = "." + o,
                s = ".data-api",
                a = e.fn[i],
                l = "active",
                c = "btn",
                u = "focus",
                d = '[data-toggle^="button"]',
                h = '[data-toggle="buttons"]',
                f = "input",
                p = ".active",
                g = ".btn",
                m = {
                    CLICK_DATA_API: "click" + r + s,
                    FOCUS_BLUR_DATA_API: "focus" + r + s + " blur" + r + s
                },
                v = function() {
                    function i(e) {
                        t(this, i), this._element = e
                    }
                    return i.prototype.toggle = function() {
                        var t = !0,
                            n = e(this._element).closest(h)[0];
                        if (n) {
                            var i = e(this._element).find(f)[0];
                            if (i) {
                                if ("radio" === i.type)
                                    if (i.checked && e(this._element).hasClass(l)) t = !1;
                                    else {
                                        var o = e(n).find(p)[0];
                                        o && e(o).removeClass(l)
                                    }
                                t && (i.checked = !e(this._element).hasClass(l), e(i).trigger("change")), i.focus()
                            }
                        }
                        this._element.setAttribute("aria-pressed", !e(this._element).hasClass(l)), t && e(this._element).toggleClass(l)
                    }, i.prototype.dispose = function() {
                        e.removeData(this._element, o), this._element = null
                    }, i._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data(o);
                            n || (n = new i(this), e(this).data(o, n)), "toggle" === t && n[t]()
                        })
                    }, n(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }]), i
                }();
            e(document).on(m.CLICK_DATA_API, d, function(t) {
                t.preventDefault();
                var n = t.target;
                e(n).hasClass(c) || (n = e(n).closest(g)), v._jQueryInterface.call(e(n), "toggle")
            }).on(m.FOCUS_BLUR_DATA_API, d, function(t) {
                var n = e(t.target).closest(g)[0];
                e(n).toggleClass(u, /^focus(in)?$/.test(t.type))
            }), e.fn[i] = v._jQueryInterface, e.fn[i].Constructor = v, e.fn[i].noConflict = function() {
                return e.fn[i] = a, v._jQueryInterface
            }
        }(jQuery), function(o) {
            var r = "carousel",
                s = "bs.carousel",
                a = "." + s,
                l = ".data-api",
                c = o.fn[r],
                u = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                d = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                h = {
                    NEXT: "next",
                    PREV: "prev",
                    LEFT: "left",
                    RIGHT: "right"
                },
                f = {
                    SLIDE: "slide" + a,
                    SLID: "slid" + a,
                    KEYDOWN: "keydown" + a,
                    MOUSEENTER: "mouseenter" + a,
                    MOUSELEAVE: "mouseleave" + a,
                    LOAD_DATA_API: "load" + a + l,
                    CLICK_DATA_API: "click" + a + l
                },
                p = "carousel",
                g = "active",
                m = "slide",
                v = "carousel-item-right",
                y = "carousel-item-left",
                w = "carousel-item-next",
                b = "carousel-item-prev",
                _ = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                x = function() {
                    function l(e, n) {
                        t(this, l), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(n), this._element = o(e)[0], this._indicatorsElement = o(this._element).find(_.INDICATORS)[0], this._addEventListeners()
                    }
                    return l.prototype.next = function() {
                        if (this._isSliding) throw new Error("Carousel is sliding");
                        this._slide(h.NEXT)
                    }, l.prototype.nextWhenVisible = function() {
                        document.hidden || this.next()
                    }, l.prototype.prev = function() {
                        if (this._isSliding) throw new Error("Carousel is sliding");
                        this._slide(h.PREVIOUS)
                    }, l.prototype.pause = function(t) {
                        t || (this._isPaused = !0), o(this._element).find(_.NEXT_PREV)[0] && i.supportsTransitionEnd() && (i.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, l.prototype.cycle = function(t) {
                        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, l.prototype.to = function(t) {
                        var e = this;
                        this._activeElement = o(this._element).find(_.ACTIVE_ITEM)[0];
                        var n = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0)) {
                            if (this._isSliding) return void o(this._element).one(f.SLID, function() {
                                return e.to(t)
                            });
                            if (n === t) return this.pause(), void this.cycle();
                            var i = t > n ? h.NEXT : h.PREVIOUS;
                            this._slide(i, this._items[t])
                        }
                    }, l.prototype.dispose = function() {
                        o(this._element).off(a), o.removeData(this._element, s), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, l.prototype._getConfig = function(t) {
                        return t = o.extend({}, u, t), i.typeCheckConfig(r, t, d), t
                    }, l.prototype._addEventListeners = function() {
                        var t = this;
                        this._config.keyboard && o(this._element).on(f.KEYDOWN, function(e) {
                            return t._keydown(e)
                        }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || o(this._element).on(f.MOUSEENTER, function(e) {
                            return t.pause(e)
                        }).on(f.MOUSELEAVE, function(e) {
                            return t.cycle(e)
                        })
                    }, l.prototype._keydown = function(t) {
                        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next();
                                break;
                            default:
                                return
                        }
                    }, l.prototype._getItemIndex = function(t) {
                        return this._items = o.makeArray(o(t).parent().find(_.ITEM)), this._items.indexOf(t)
                    }, l.prototype._getItemByDirection = function(t, e) {
                        var n = t === h.NEXT,
                            i = t === h.PREVIOUS,
                            o = this._getItemIndex(e),
                            r = this._items.length - 1;
                        if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                        var s = (o + (t === h.PREVIOUS ? -1 : 1)) % this._items.length;
                        return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                    }, l.prototype._triggerSlideEvent = function(t, e) {
                        var n = o.Event(f.SLIDE, {
                            relatedTarget: t,
                            direction: e
                        });
                        return o(this._element).trigger(n), n
                    }, l.prototype._setActiveIndicatorElement = function(t) {
                        if (this._indicatorsElement) {
                            o(this._indicatorsElement).find(_.ACTIVE).removeClass(g);
                            var e = this._indicatorsElement.children[this._getItemIndex(t)];
                            e && o(e).addClass(g)
                        }
                    }, l.prototype._slide = function(t, e) {
                        var n = this,
                            r = o(this._element).find(_.ACTIVE_ITEM)[0],
                            s = e || r && this._getItemByDirection(t, r),
                            a = Boolean(this._interval),
                            l = void 0,
                            c = void 0,
                            u = void 0;
                        if (t === h.NEXT ? (l = y, c = w, u = h.LEFT) : (l = v, c = b, u = h.RIGHT), s && o(s).hasClass(g)) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(s, u).isDefaultPrevented() && r && s) {
                            this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s);
                            var d = o.Event(f.SLID, {
                                relatedTarget: s,
                                direction: u
                            });
                            i.supportsTransitionEnd() && o(this._element).hasClass(m) ? (o(s).addClass(c), i.reflow(s), o(r).addClass(l), o(s).addClass(l), o(r).one(i.TRANSITION_END, function() {
                                o(s).removeClass(l + " " + c).addClass(g), o(r).removeClass(g + " " + c + " " + l), n._isSliding = !1, setTimeout(function() {
                                    return o(n._element).trigger(d)
                                }, 0)
                            }).emulateTransitionEnd(600)) : (o(r).removeClass(g), o(s).addClass(g), this._isSliding = !1, o(this._element).trigger(d)), a && this.cycle()
                        }
                    }, l._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = o(this).data(s),
                                i = o.extend({}, u, o(this).data());
                            "object" === (void 0 === t ? "undefined" : e(t)) && o.extend(i, t);
                            var r = "string" == typeof t ? t : i.slide;
                            if (n || (n = new l(this, i), o(this).data(s, n)), "number" == typeof t) n.to(t);
                            else if ("string" == typeof r) {
                                if (void 0 === n[r]) throw new Error('No method named "' + r + '"');
                                n[r]()
                            } else i.interval && (n.pause(), n.cycle())
                        })
                    }, l._dataApiClickHandler = function(t) {
                        var e = i.getSelectorFromElement(this);
                        if (e) {
                            var n = o(e)[0];
                            if (n && o(n).hasClass(p)) {
                                var r = o.extend({}, o(n).data(), o(this).data()),
                                    a = this.getAttribute("data-slide-to");
                                a && (r.interval = !1), l._jQueryInterface.call(o(n), r), a && o(n).data(s).to(a), t.preventDefault()
                            }
                        }
                    }, n(l, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return u
                        }
                    }]), l
                }();
            o(document).on(f.CLICK_DATA_API, _.DATA_SLIDE, x._dataApiClickHandler), o(window).on(f.LOAD_DATA_API, function() {
                o(_.DATA_RIDE).each(function() {
                    var t = o(this);
                    x._jQueryInterface.call(t, t.data())
                })
            }), o.fn[r] = x._jQueryInterface, o.fn[r].Constructor = x, o.fn[r].noConflict = function() {
                return o.fn[r] = c, x._jQueryInterface
            }
        }(jQuery), function(o) {
            var r = "collapse",
                s = "bs.collapse",
                a = "." + s,
                l = o.fn[r],
                c = {
                    toggle: !0,
                    parent: ""
                },
                u = {
                    toggle: "boolean",
                    parent: "string"
                },
                d = {
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    CLICK_DATA_API: "click" + a + ".data-api"
                },
                h = "show",
                f = "collapse",
                p = "collapsing",
                g = "collapsed",
                m = "width",
                v = "height",
                y = ".card > .show, .card > .collapsing",
                w = '[data-toggle="collapse"]',
                b = function() {
                    function a(e, n) {
                        t(this, a), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = o.makeArray(o('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    return a.prototype.toggle = function() {
                        o(this._element).hasClass(h) ? this.hide() : this.show()
                    }, a.prototype.show = function() {
                        var t = this;
                        if (this._isTransitioning) throw new Error("Collapse is transitioning");
                        if (!o(this._element).hasClass(h)) {
                            var e = void 0,
                                n = void 0;
                            if (this._parent && ((e = o.makeArray(o(this._parent).find(y))).length || (e = null)), !(e && (n = o(e).data(s), n && n._isTransitioning))) {
                                var r = o.Event(d.SHOW);
                                if (o(this._element).trigger(r), !r.isDefaultPrevented()) {
                                    e && (a._jQueryInterface.call(o(e), "hide"), n || o(e).data(s, null));
                                    var l = this._getDimension();
                                    o(this._element).removeClass(f).addClass(p), this._element.style[l] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && o(this._triggerArray).removeClass(g).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var c = function() {
                                        o(t._element).removeClass(p).addClass(f).addClass(h), t._element.style[l] = "", t.setTransitioning(!1), o(t._element).trigger(d.SHOWN)
                                    };
                                    if (!i.supportsTransitionEnd()) return void c();
                                    var u = "scroll" + (l[0].toUpperCase() + l.slice(1));
                                    o(this._element).one(i.TRANSITION_END, c).emulateTransitionEnd(600), this._element.style[l] = this._element[u] + "px"
                                }
                            }
                        }
                    }, a.prototype.hide = function() {
                        var t = this;
                        if (this._isTransitioning) throw new Error("Collapse is transitioning");
                        if (o(this._element).hasClass(h)) {
                            var e = o.Event(d.HIDE);
                            if (o(this._element).trigger(e), !e.isDefaultPrevented()) {
                                var n = this._getDimension(),
                                    r = n === m ? "offsetWidth" : "offsetHeight";
                                this._element.style[n] = this._element[r] + "px", i.reflow(this._element), o(this._element).addClass(p).removeClass(f).removeClass(h), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && o(this._triggerArray).addClass(g).attr("aria-expanded", !1), this.setTransitioning(!0);
                                var s = function() {
                                    t.setTransitioning(!1), o(t._element).removeClass(p).addClass(f).trigger(d.HIDDEN)
                                };
                                return this._element.style[n] = "", i.supportsTransitionEnd() ? void o(this._element).one(i.TRANSITION_END, s).emulateTransitionEnd(600) : void s()
                            }
                        }
                    }, a.prototype.setTransitioning = function(t) {
                        this._isTransitioning = t
                    }, a.prototype.dispose = function() {
                        o.removeData(this._element, s), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, a.prototype._getConfig = function(t) {
                        return (t = o.extend({}, c, t)).toggle = Boolean(t.toggle), i.typeCheckConfig(r, t, u), t
                    }, a.prototype._getDimension = function() {
                        return o(this._element).hasClass(m) ? m : v
                    }, a.prototype._getParent = function() {
                        var t = this,
                            e = o(this._config.parent)[0],
                            n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return o(e).find(n).each(function(e, n) {
                            t._addAriaAndCollapsedClass(a._getTargetFromElement(n), [n])
                        }), e
                    }, a.prototype._addAriaAndCollapsedClass = function(t, e) {
                        if (t) {
                            var n = o(t).hasClass(h);
                            t.setAttribute("aria-expanded", n), e.length && o(e).toggleClass(g, !n).attr("aria-expanded", n)
                        }
                    }, a._getTargetFromElement = function(t) {
                        var e = i.getSelectorFromElement(t);
                        return e ? o(e)[0] : null
                    }, a._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = o(this),
                                i = n.data(s),
                                r = o.extend({}, c, n.data(), "object" === (void 0 === t ? "undefined" : e(t)) && t);
                            if (!i && r.toggle && /show|hide/.test(t) && (r.toggle = !1), i || (i = new a(this, r), n.data(s, i)), "string" == typeof t) {
                                if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, n(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return c
                        }
                    }]), a
                }();
            o(document).on(d.CLICK_DATA_API, w, function(t) {
                t.preventDefault();
                var e = b._getTargetFromElement(this),
                    n = o(e).data(s) ? "toggle" : o(this).data();
                b._jQueryInterface.call(o(e), n)
            }), o.fn[r] = b._jQueryInterface, o.fn[r].Constructor = b, o.fn[r].noConflict = function() {
                return o.fn[r] = l, b._jQueryInterface
            }
        }(jQuery), function(e) {
            var o = "dropdown",
                r = "bs.dropdown",
                s = "." + r,
                a = ".data-api",
                l = e.fn[o],
                c = {
                    HIDE: "hide" + s,
                    HIDDEN: "hidden" + s,
                    SHOW: "show" + s,
                    SHOWN: "shown" + s,
                    CLICK: "click" + s,
                    CLICK_DATA_API: "click" + s + a,
                    FOCUSIN_DATA_API: "focusin" + s + a,
                    KEYDOWN_DATA_API: "keydown" + s + a
                },
                u = "dropdown-backdrop",
                d = "disabled",
                h = "show",
                f = ".dropdown-backdrop",
                p = '[data-toggle="dropdown"]',
                g = ".dropdown form",
                m = '[role="menu"]',
                v = '[role="listbox"]',
                y = ".navbar-nav",
                w = '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a',
                b = function() {
                    function o(e) {
                        t(this, o), this._element = e, this._addEventListeners()
                    }
                    return o.prototype.toggle = function() {
                        if (this.disabled || e(this).hasClass(d)) return !1;
                        var t = o._getParentFromElement(this),
                            n = e(t).hasClass(h);
                        if (o._clearMenus(), n) return !1;
                        if ("ontouchstart" in document.documentElement && !e(t).closest(y).length) {
                            var i = document.createElement("div");
                            i.className = u, e(i).insertBefore(this), e(i).on("click", o._clearMenus)
                        }
                        var r = {
                                relatedTarget: this
                            },
                            s = e.Event(c.SHOW, r);
                        return e(t).trigger(s), !s.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", !0), e(t).toggleClass(h), e(t).trigger(e.Event(c.SHOWN, r)), !1)
                    }, o.prototype.dispose = function() {
                        e.removeData(this._element, r), e(this._element).off(s), this._element = null
                    }, o.prototype._addEventListeners = function() {
                        e(this._element).on(c.CLICK, this.toggle)
                    }, o._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data(r);
                            if (n || (n = new o(this), e(this).data(r, n)), "string" == typeof t) {
                                if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                n[t].call(this)
                            }
                        })
                    }, o._clearMenus = function(t) {
                        if (!t || 3 !== t.which) {
                            var n = e(f)[0];
                            n && n.parentNode.removeChild(n);
                            for (var i = e.makeArray(e(p)), r = 0; r < i.length; r++) {
                                var s = o._getParentFromElement(i[r]),
                                    a = {
                                        relatedTarget: i[r]
                                    };
                                if (e(s).hasClass(h) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "focusin" === t.type) && e.contains(s, t.target))) {
                                    var l = e.Event(c.HIDE, a);
                                    e(s).trigger(l), l.isDefaultPrevented() || (i[r].setAttribute("aria-expanded", "false"), e(s).removeClass(h).trigger(e.Event(c.HIDDEN, a)))
                                }
                            }
                        }
                    }, o._getParentFromElement = function(t) {
                        var n = void 0,
                            o = i.getSelectorFromElement(t);
                        return o && (n = e(o)[0]), n || t.parentNode
                    }, o._dataApiKeydownHandler = function(t) {
                        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(d))) {
                            var n = o._getParentFromElement(this),
                                i = e(n).hasClass(h);
                            if (!i && 27 !== t.which || i && 27 === t.which) {
                                if (27 === t.which) {
                                    var r = e(n).find(p)[0];
                                    e(r).trigger("focus")
                                }
                                return void e(this).trigger("click")
                            }
                            var s = e(n).find(w).get();
                            if (s.length) {
                                var a = s.indexOf(t.target);
                                38 === t.which && a > 0 && a--, 40 === t.which && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus()
                            }
                        }
                    }, n(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }]), o
                }();
            e(document).on(c.KEYDOWN_DATA_API, p, b._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, m, b._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, v, b._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.FOCUSIN_DATA_API, b._clearMenus).on(c.CLICK_DATA_API, p, b.prototype.toggle).on(c.CLICK_DATA_API, g, function(t) {
                t.stopPropagation()
            }), e.fn[o] = b._jQueryInterface, e.fn[o].Constructor = b, e.fn[o].noConflict = function() {
                return e.fn[o] = l, b._jQueryInterface
            }
        }(jQuery), function(o) {
            var r = "modal",
                s = "bs.modal",
                a = "." + s,
                l = o.fn[r],
                c = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                u = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                d = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    FOCUSIN: "focusin" + a,
                    RESIZE: "resize" + a,
                    CLICK_DISMISS: "click.dismiss" + a,
                    KEYDOWN_DISMISS: "keydown.dismiss" + a,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + a,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + a,
                    CLICK_DATA_API: "click" + a + ".data-api"
                },
                h = "modal-scrollbar-measure",
                f = "modal-backdrop",
                p = "modal-open",
                g = "fade",
                m = "show",
                v = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                },
                y = function() {
                    function l(e, n) {
                        t(this, l), this._config = this._getConfig(n), this._element = e, this._dialog = o(e).find(v.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    return l.prototype.toggle = function(t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }, l.prototype.show = function(t) {
                        var e = this;
                        if (this._isTransitioning) throw new Error("Modal is transitioning");
                        i.supportsTransitionEnd() && o(this._element).hasClass(g) && (this._isTransitioning = !0);
                        var n = o.Event(d.SHOW, {
                            relatedTarget: t
                        });
                        o(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), o(document.body).addClass(p), this._setEscapeEvent(), this._setResizeEvent(), o(this._element).on(d.CLICK_DISMISS, v.DATA_DISMISS, function(t) {
                            return e.hide(t)
                        }), o(this._dialog).on(d.MOUSEDOWN_DISMISS, function() {
                            o(e._element).one(d.MOUSEUP_DISMISS, function(t) {
                                o(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function() {
                            return e._showElement(t)
                        }))
                    }, l.prototype.hide = function(t) {
                        var e = this;
                        if (t && t.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");
                        var n = i.supportsTransitionEnd() && o(this._element).hasClass(g);
                        n && (this._isTransitioning = !0);
                        var r = o.Event(d.HIDE);
                        o(this._element).trigger(r), this._isShown && !r.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), o(document).off(d.FOCUSIN), o(this._element).removeClass(m), o(this._element).off(d.CLICK_DISMISS), o(this._dialog).off(d.MOUSEDOWN_DISMISS), n ? o(this._element).one(i.TRANSITION_END, function(t) {
                            return e._hideModal(t)
                        }).emulateTransitionEnd(300) : this._hideModal())
                    }, l.prototype.dispose = function() {
                        o.removeData(this._element, s), o(window, document, this._element, this._backdrop).off(a), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                    }, l.prototype._getConfig = function(t) {
                        return t = o.extend({}, c, t), i.typeCheckConfig(r, t, u), t
                    }, l.prototype._showElement = function(t) {
                        var e = this,
                            n = i.supportsTransitionEnd() && o(this._element).hasClass(g);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && i.reflow(this._element), o(this._element).addClass(m), this._config.focus && this._enforceFocus();
                        var r = o.Event(d.SHOWN, {
                                relatedTarget: t
                            }),
                            s = function() {
                                e._config.focus && e._element.focus(), e._isTransitioning = !1, o(e._element).trigger(r)
                            };
                        n ? o(this._dialog).one(i.TRANSITION_END, s).emulateTransitionEnd(300) : s()
                    }, l.prototype._enforceFocus = function() {
                        var t = this;
                        o(document).off(d.FOCUSIN).on(d.FOCUSIN, function(e) {
                            document === e.target || t._element === e.target || o(t._element).has(e.target).length || t._element.focus()
                        })
                    }, l.prototype._setEscapeEvent = function() {
                        var t = this;
                        this._isShown && this._config.keyboard ? o(this._element).on(d.KEYDOWN_DISMISS, function(e) {
                            27 === e.which && t.hide()
                        }) : this._isShown || o(this._element).off(d.KEYDOWN_DISMISS)
                    }, l.prototype._setResizeEvent = function() {
                        var t = this;
                        this._isShown ? o(window).on(d.RESIZE, function(e) {
                            return t._handleUpdate(e)
                        }) : o(window).off(d.RESIZE)
                    }, l.prototype._hideModal = function() {
                        var t = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function() {
                            o(document.body).removeClass(p), t._resetAdjustments(), t._resetScrollbar(), o(t._element).trigger(d.HIDDEN)
                        })
                    }, l.prototype._removeBackdrop = function() {
                        this._backdrop && (o(this._backdrop).remove(), this._backdrop = null)
                    }, l.prototype._showBackdrop = function(t) {
                        var e = this,
                            n = o(this._element).hasClass(g) ? g : "";
                        if (this._isShown && this._config.backdrop) {
                            var r = i.supportsTransitionEnd() && n;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = f, n && o(this._backdrop).addClass(n), o(this._backdrop).appendTo(document.body), o(this._element).on(d.CLICK_DISMISS, function(t) {
                                    return e._ignoreBackdropClick ? void(e._ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide()))
                                }), r && i.reflow(this._backdrop), o(this._backdrop).addClass(m), !t) return;
                            if (!r) return void t();
                            o(this._backdrop).one(i.TRANSITION_END, t).emulateTransitionEnd(150)
                        } else if (!this._isShown && this._backdrop) {
                            o(this._backdrop).removeClass(m);
                            var s = function() {
                                e._removeBackdrop(), t && t()
                            };
                            i.supportsTransitionEnd() && o(this._element).hasClass(g) ? o(this._backdrop).one(i.TRANSITION_END, s).emulateTransitionEnd(150) : s()
                        } else t && t()
                    }, l.prototype._handleUpdate = function() {
                        this._adjustDialog()
                    }, l.prototype._adjustDialog = function() {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, l.prototype._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, l.prototype._checkScrollbar = function() {
                        this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, l.prototype._setScrollbar = function() {
                        var t = parseInt(o(v.FIXED_CONTENT).css("padding-right") || 0, 10);
                        this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = t + this._scrollbarWidth + "px")
                    }, l.prototype._resetScrollbar = function() {
                        document.body.style.paddingRight = this._originalBodyPadding
                    }, l.prototype._getScrollbarWidth = function() {
                        var t = document.createElement("div");
                        t.className = h, document.body.appendChild(t);
                        var e = t.offsetWidth - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, l._jQueryInterface = function(t, n) {
                        return this.each(function() {
                            var i = o(this).data(s),
                                r = o.extend({}, l.Default, o(this).data(), "object" === (void 0 === t ? "undefined" : e(t)) && t);
                            if (i || (i = new l(this, r), o(this).data(s, i)), "string" == typeof t) {
                                if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                i[t](n)
                            } else r.show && i.show(n)
                        })
                    }, n(l, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return c
                        }
                    }]), l
                }();
            o(document).on(d.CLICK_DATA_API, v.DATA_TOGGLE, function(t) {
                var e = this,
                    n = void 0,
                    r = i.getSelectorFromElement(this);
                r && (n = o(r)[0]);
                var a = o(n).data(s) ? "toggle" : o.extend({}, o(n).data(), o(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
                var l = o(n).one(d.SHOW, function(t) {
                    t.isDefaultPrevented() || l.one(d.HIDDEN, function() {
                        o(e).is(":visible") && e.focus()
                    })
                });
                y._jQueryInterface.call(o(n), a, this)
            }), o.fn[r] = y._jQueryInterface, o.fn[r].Constructor = y, o.fn[r].noConflict = function() {
                return o.fn[r] = l, y._jQueryInterface
            }
        }(jQuery), function(o) {
            var r = "scrollspy",
                s = "bs.scrollspy",
                a = "." + s,
                l = o.fn[r],
                c = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                u = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                d = {
                    ACTIVATE: "activate" + a,
                    SCROLL: "scroll" + a,
                    LOAD_DATA_API: "load" + a + ".data-api"
                },
                h = "dropdown-item",
                f = "active",
                p = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    LIST_ITEM: ".list-item",
                    LI: "li",
                    LI_DROPDOWN: "li.dropdown",
                    NAV_LINKS: ".nav-link",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                g = "offset",
                m = "position",
                v = function() {
                    function l(e, n) {
                        var i = this;
                        t(this, l), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + p.NAV_LINKS + "," + this._config.target + " " + p.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, o(this._scrollElement).on(d.SCROLL, function(t) {
                            return i._process(t)
                        }), this.refresh(), this._process()
                    }
                    return l.prototype.refresh = function() {
                        var t = this,
                            e = this._scrollElement !== this._scrollElement.window ? m : g,
                            n = "auto" === this._config.method ? e : this._config.method,
                            r = n === m ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), o.makeArray(o(this._selector)).map(function(t) {
                            var e = void 0,
                                s = i.getSelectorFromElement(t);
                            return s && (e = o(s)[0]), e && (e.offsetWidth || e.offsetHeight) ? [o(e)[n]().top + r, s] : null
                        }).filter(function(t) {
                            return t
                        }).sort(function(t, e) {
                            return t[0] - e[0]
                        }).forEach(function(e) {
                            t._offsets.push(e[0]), t._targets.push(e[1])
                        })
                    }, l.prototype.dispose = function() {
                        o.removeData(this._element, s), o(this._scrollElement).off(a), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, l.prototype._getConfig = function(t) {
                        if ("string" != typeof(t = o.extend({}, c, t)).target) {
                            var e = o(t.target).attr("id");
                            e || (e = i.getUID(r), o(t.target).attr("id", e)), t.target = "#" + e
                        }
                        return i.typeCheckConfig(r, t, u), t
                    }, l.prototype._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, l.prototype._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, l.prototype._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight
                    }, l.prototype._process = function() {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            n = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= n) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var o = this._offsets.length; o--;) {
                                this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                            }
                        }
                    }, l.prototype._activate = function(t) {
                        this._activeTarget = t, this._clear();
                        var e = this._selector.split(",");
                        e = e.map(function(e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                        });
                        var n = o(e.join(","));
                        n.hasClass(h) ? (n.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(f), n.addClass(f)) : n.parents(p.LI).find("> " + p.NAV_LINKS).addClass(f), o(this._scrollElement).trigger(d.ACTIVATE, {
                            relatedTarget: t
                        })
                    }, l.prototype._clear = function() {
                        o(this._selector).filter(p.ACTIVE).removeClass(f)
                    }, l._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = o(this).data(s),
                                i = "object" === (void 0 === t ? "undefined" : e(t)) && t;
                            if (n || (n = new l(this, i), o(this).data(s, n)), "string" == typeof t) {
                                if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, n(l, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return c
                        }
                    }]), l
                }();
            o(window).on(d.LOAD_DATA_API, function() {
                for (var t = o.makeArray(o(p.DATA_SPY)), e = t.length; e--;) {
                    var n = o(t[e]);
                    v._jQueryInterface.call(n, n.data())
                }
            }), o.fn[r] = v._jQueryInterface, o.fn[r].Constructor = v, o.fn[r].noConflict = function() {
                return o.fn[r] = l, v._jQueryInterface
            }
        }(jQuery), function(e) {
            var o = "tab",
                r = "bs.tab",
                s = "." + r,
                a = e.fn[o],
                l = {
                    HIDE: "hide" + s,
                    HIDDEN: "hidden" + s,
                    SHOW: "show" + s,
                    SHOWN: "shown" + s,
                    CLICK_DATA_API: "click" + s + ".data-api"
                },
                c = "dropdown-menu",
                u = "active",
                d = "disabled",
                h = "fade",
                f = "show",
                p = ".dropdown",
                g = "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",
                m = "> .nav-item .fade, > .fade",
                v = ".active",
                y = "> .nav-item > .active, > .active",
                w = '[data-toggle="tab"], [data-toggle="pill"]',
                b = ".dropdown-toggle",
                _ = "> .dropdown-menu .active",
                x = function() {
                    function o(e) {
                        t(this, o), this._element = e
                    }
                    return o.prototype.show = function() {
                        var t = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(u) || e(this._element).hasClass(d))) {
                            var n = void 0,
                                o = void 0,
                                r = e(this._element).closest(g)[0],
                                s = i.getSelectorFromElement(this._element);
                            r && (o = (o = e.makeArray(e(r).find(v)))[o.length - 1]);
                            var a = e.Event(l.HIDE, {
                                    relatedTarget: this._element
                                }),
                                c = e.Event(l.SHOW, {
                                    relatedTarget: o
                                });
                            if (o && e(o).trigger(a), e(this._element).trigger(c), !c.isDefaultPrevented() && !a.isDefaultPrevented()) {
                                s && (n = e(s)[0]), this._activate(this._element, r);
                                var h = function() {
                                    var n = e.Event(l.HIDDEN, {
                                            relatedTarget: t._element
                                        }),
                                        i = e.Event(l.SHOWN, {
                                            relatedTarget: o
                                        });
                                    e(o).trigger(n), e(t._element).trigger(i)
                                };
                                n ? this._activate(n, n.parentNode, h) : h()
                            }
                        }
                    }, o.prototype.dispose = function() {
                        e.removeClass(this._element, r), this._element = null
                    }, o.prototype._activate = function(t, n, o) {
                        var r = this,
                            s = e(n).find(y)[0],
                            a = o && i.supportsTransitionEnd() && (s && e(s).hasClass(h) || Boolean(e(n).find(m)[0])),
                            l = function() {
                                return r._transitionComplete(t, s, a, o)
                            };
                        s && a ? e(s).one(i.TRANSITION_END, l).emulateTransitionEnd(150) : l(), s && e(s).removeClass(f)
                    }, o.prototype._transitionComplete = function(t, n, o, r) {
                        if (n) {
                            e(n).removeClass(u);
                            var s = e(n.parentNode).find(_)[0];
                            s && e(s).removeClass(u), n.setAttribute("aria-expanded", !1)
                        }
                        if (e(t).addClass(u), t.setAttribute("aria-expanded", !0), o ? (i.reflow(t), e(t).addClass(f)) : e(t).removeClass(h), t.parentNode && e(t.parentNode).hasClass(c)) {
                            var a = e(t).closest(p)[0];
                            a && e(a).find(b).addClass(u), t.setAttribute("aria-expanded", !0)
                        }
                        r && r()
                    }, o._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this),
                                i = n.data(r);
                            if (i || (i = new o(this), n.data(r, i)), "string" == typeof t) {
                                if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, n(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }]), o
                }();
            e(document).on(l.CLICK_DATA_API, w, function(t) {
                t.preventDefault(), x._jQueryInterface.call(e(this), "show")
            }), e.fn[o] = x._jQueryInterface, e.fn[o].Constructor = x, e.fn[o].noConflict = function() {
                return e.fn[o] = a, x._jQueryInterface
            }
        }(jQuery), function(o) {
            if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
            var r = "tooltip",
                s = "bs.tooltip",
                a = "." + s,
                l = o.fn[r],
                c = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: "0 0",
                    constraints: [],
                    container: !1
                },
                u = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "string",
                    constraints: "array",
                    container: "(string|element|boolean)"
                },
                d = {
                    TOP: "bottom center",
                    RIGHT: "middle left",
                    BOTTOM: "top center",
                    LEFT: "middle right"
                },
                h = "show",
                f = "out",
                p = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    INSERTED: "inserted" + a,
                    CLICK: "click" + a,
                    FOCUSIN: "focusin" + a,
                    FOCUSOUT: "focusout" + a,
                    MOUSEENTER: "mouseenter" + a,
                    MOUSELEAVE: "mouseleave" + a
                },
                g = "fade",
                m = "show",
                v = ".tooltip-inner",
                y = {
                    element: !1,
                    enabled: !1
                },
                w = "hover",
                b = "focus",
                _ = "click",
                x = "manual",
                C = function() {
                    function l(e, n) {
                        t(this, l), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = e, this.config = this._getConfig(n), this.tip = null, this._setListeners()
                    }
                    return l.prototype.enable = function() {
                        this._isEnabled = !0
                    }, l.prototype.disable = function() {
                        this._isEnabled = !1
                    }, l.prototype.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, l.prototype.toggle = function(t) {
                        if (t) {
                            var e = this.constructor.DATA_KEY,
                                n = o(t.currentTarget).data(e);
                            n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), o(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                        } else {
                            if (o(this.getTipElement()).hasClass(m)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                    }, l.prototype.dispose = function() {
                        clearTimeout(this._timeout), this.cleanupTether(), o.removeData(this.element, this.constructor.DATA_KEY), o(this.element).off(this.constructor.EVENT_KEY), o(this.element).closest(".modal").off("hide.bs.modal"), this.tip && o(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                    }, l.prototype.show = function() {
                        var t = this;
                        if ("none" === o(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var e = o.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                            o(this.element).trigger(e);
                            var n = o.contains(this.element.ownerDocument.documentElement, this.element);
                            if (e.isDefaultPrevented() || !n) return;
                            var r = this.getTipElement(),
                                s = i.getUID(this.constructor.NAME);
                            r.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && o(r).addClass(g);
                            var a = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                                c = this._getAttachment(a),
                                u = !1 === this.config.container ? document.body : o(this.config.container);
                            o(r).data(this.constructor.DATA_KEY, this).appendTo(u), o(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                attachment: c,
                                element: r,
                                target: this.element,
                                classes: y,
                                classPrefix: "bs-tether",
                                offset: this.config.offset,
                                constraints: this.config.constraints,
                                addTargetClasses: !1
                            }), i.reflow(r), this._tether.position(), o(r).addClass(m);
                            var d = function() {
                                var e = t._hoverState;
                                t._hoverState = null, t._isTransitioning = !1, o(t.element).trigger(t.constructor.Event.SHOWN), e === f && t._leave(null, t)
                            };
                            if (i.supportsTransitionEnd() && o(this.tip).hasClass(g)) return this._isTransitioning = !0, void o(this.tip).one(i.TRANSITION_END, d).emulateTransitionEnd(l._TRANSITION_DURATION);
                            d()
                        }
                    }, l.prototype.hide = function(t) {
                        var e = this,
                            n = this.getTipElement(),
                            r = o.Event(this.constructor.Event.HIDE);
                        if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                        var s = function() {
                            e._hoverState !== h && n.parentNode && n.parentNode.removeChild(n), e.element.removeAttribute("aria-describedby"), o(e.element).trigger(e.constructor.Event.HIDDEN), e._isTransitioning = !1, e.cleanupTether(), t && t()
                        };
                        o(this.element).trigger(r), r.isDefaultPrevented() || (o(n).removeClass(m), this._activeTrigger[_] = !1, this._activeTrigger[b] = !1, this._activeTrigger[w] = !1, i.supportsTransitionEnd() && o(this.tip).hasClass(g) ? (this._isTransitioning = !0, o(n).one(i.TRANSITION_END, s).emulateTransitionEnd(150)) : s(), this._hoverState = "")
                    }, l.prototype.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, l.prototype.getTipElement = function() {
                        return this.tip = this.tip || o(this.config.template)[0]
                    }, l.prototype.setContent = function() {
                        var t = o(this.getTipElement());
                        this.setElementContent(t.find(v), this.getTitle()), t.removeClass(g + " " + m), this.cleanupTether()
                    }, l.prototype.setElementContent = function(t, n) {
                        var i = this.config.html;
                        "object" === (void 0 === n ? "undefined" : e(n)) && (n.nodeType || n.jquery) ? i ? o(n).parent().is(t) || t.empty().append(n) : t.text(o(n).text()): t[i ? "html" : "text"](n)
                    }, l.prototype.getTitle = function() {
                        var t = this.element.getAttribute("data-original-title");
                        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                    }, l.prototype.cleanupTether = function() {
                        this._tether && this._tether.destroy()
                    }, l.prototype._getAttachment = function(t) {
                        return d[t.toUpperCase()]
                    }, l.prototype._setListeners = function() {
                        var t = this;
                        this.config.trigger.split(" ").forEach(function(e) {
                            if ("click" === e) o(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                                return t.toggle(e)
                            });
                            else if (e !== x) {
                                var n = e === w ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                    i = e === w ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                o(t.element).on(n, t.config.selector, function(e) {
                                    return t._enter(e)
                                }).on(i, t.config.selector, function(e) {
                                    return t._leave(e)
                                })
                            }
                            o(t.element).closest(".modal").on("hide.bs.modal", function() {
                                return t.hide()
                            })
                        }), this.config.selector ? this.config = o.extend({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, l.prototype._fixTitle = function() {
                        var t = e(this.element.getAttribute("data-original-title"));
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, l.prototype._enter = function(t, e) {
                        var n = this.constructor.DATA_KEY;
                        return (e = e || o(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), o(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? b : w] = !0), o(e.getTipElement()).hasClass(m) || e._hoverState === h ? void(e._hoverState = h) : (clearTimeout(e._timeout), e._hoverState = h, e.config.delay && e.config.delay.show ? void(e._timeout = setTimeout(function() {
                            e._hoverState === h && e.show()
                        }, e.config.delay.show)) : void e.show())
                    }, l.prototype._leave = function(t, e) {
                        var n = this.constructor.DATA_KEY;
                        if ((e = e || o(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), o(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? b : w] = !1), !e._isWithActiveTrigger()) return clearTimeout(e._timeout), e._hoverState = f, e.config.delay && e.config.delay.hide ? void(e._timeout = setTimeout(function() {
                            e._hoverState === f && e.hide()
                        }, e.config.delay.hide)) : void e.hide()
                    }, l.prototype._isWithActiveTrigger = function() {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }, l.prototype._getConfig = function(t) {
                        return (t = o.extend({}, this.constructor.Default, o(this.element).data(), t)).delay && "number" == typeof t.delay && (t.delay = {
                            show: t.delay,
                            hide: t.delay
                        }), i.typeCheckConfig(r, t, this.constructor.DefaultType), t
                    }, l.prototype._getDelegateConfig = function() {
                        var t = {};
                        if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, l._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = o(this).data(s),
                                i = "object" === (void 0 === t ? "undefined" : e(t)) && t;
                            if ((n || !/dispose|hide/.test(t)) && (n || (n = new l(this, i), o(this).data(s, n)), "string" == typeof t)) {
                                if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, n(l, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return c
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return r
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return p
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return a
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return u
                        }
                    }]), l
                }();
            return o.fn[r] = C._jQueryInterface, o.fn[r].Constructor = C, o.fn[r].noConflict = function() {
                return o.fn[r] = l, C._jQueryInterface
            }, C
        }(jQuery));
    ! function(i) {
        var r = "popover",
            s = "bs.popover",
            a = "." + s,
            l = i.fn[r],
            c = i.extend({}, o.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            u = i.extend({}, o.DefaultType, {
                content: "(string|element|function)"
            }),
            d = "fade",
            h = "show",
            f = ".popover-title",
            p = ".popover-content",
            g = {
                HIDE: "hide" + a,
                HIDDEN: "hidden" + a,
                SHOW: "show" + a,
                SHOWN: "shown" + a,
                INSERTED: "inserted" + a,
                CLICK: "click" + a,
                FOCUSIN: "focusin" + a,
                FOCUSOUT: "focusout" + a,
                MOUSEENTER: "mouseenter" + a,
                MOUSELEAVE: "mouseleave" + a
            },
            m = function(o) {
                function l() {
                    return t(this, l),
                        function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, o.apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(l, o), l.prototype.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                }, l.prototype.getTipElement = function() {
                    return this.tip = this.tip || i(this.config.template)[0]
                }, l.prototype.setContent = function() {
                    var t = i(this.getTipElement());
                    this.setElementContent(t.find(f), this.getTitle()), this.setElementContent(t.find(p), this._getContent()), t.removeClass(d + " " + h), this.cleanupTether()
                }, l.prototype._getContent = function() {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                }, l._jQueryInterface = function(t) {
                    return this.each(function() {
                        var n = i(this).data(s),
                            o = "object" === (void 0 === t ? "undefined" : e(t)) ? t : null;
                        if ((n || !/destroy|hide/.test(t)) && (n || (n = new l(this, o), i(this).data(s, n)), "string" == typeof t)) {
                            if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }, n(l, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return c
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return r
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return s
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return g
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return a
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return u
                    }
                }]), l
            }(o);
        i.fn[r] = m._jQueryInterface, i.fn[r].Constructor = m, i.fn[r].noConflict = function() {
            return i.fn[r] = l, m._jQueryInterface
        }
    }(jQuery)
}(),
function() {
    var t = [].indexOf || function(t) {
            for (var e = 0, n = this.length; e < n; e++)
                if (e in this && this[e] === t) return e;
            return -1
        },
        e = [].slice;
    ! function(t, e) {
        "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(n) {
            return e(n, t)
        }) : e(t.jQuery, t)
    }(this, function(n, i) {
        var o, r, s, a, l, c, u, d, h, f, p, g, m, v, y, w;
        return o = n(i), d = t.call(i, "ontouchstart") >= 0, a = {
            horizontal: {},
            vertical: {}
        }, l = 1, u = {}, c = "waypoints-context-id", p = "resize.waypoints", g = "scroll.waypoints", m = 1, v = "waypoints-waypoint-ids", y = "waypoint", w = "waypoints", r = function() {
            function t(t) {
                var e = this;
                this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                }, this.waypoints = {
                    horizontal: {},
                    vertical: {}
                }, this.element[c] = this.id, u[this.id] = this, t.bind(g, function() {
                    var t;
                    if (!e.didScroll && !d) return e.didScroll = !0, t = function() {
                        return e.doScroll(), e.didScroll = !1
                    }, i.setTimeout(t, n[w].settings.scrollThrottle)
                }), t.bind(p, function() {
                    var t;
                    if (!e.didResize) return e.didResize = !0, t = function() {
                        return n[w]("refresh"), e.didResize = !1
                    }, i.setTimeout(t, n[w].settings.resizeThrottle)
                })
            }
            return t.prototype.doScroll = function() {
                var t, e = this;
                return t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !d || t.vertical.oldScroll && t.vertical.newScroll || n[w]("refresh"), n.each(t, function(t, i) {
                    var o, r, s;
                    return s = [], r = i.newScroll > i.oldScroll, o = r ? i.forward : i.backward, n.each(e.waypoints[t], function(t, e) {
                        var n, o;
                        return i.oldScroll < (n = e.offset) && n <= i.newScroll ? s.push(e) : i.newScroll < (o = e.offset) && o <= i.oldScroll ? s.push(e) : void 0
                    }), s.sort(function(t, e) {
                        return t.offset - e.offset
                    }), r || s.reverse(), n.each(s, function(t, e) {
                        if (e.options.continuous || t === s.length - 1) return e.trigger([o])
                    })
                }), this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            }, t.prototype.refresh = function() {
                var t, e, i, o = this;
                return i = n.isWindow(this.element), e = this.$element.offset(), this.doScroll(), t = {
                    horizontal: {
                        contextOffset: i ? 0 : e.left,
                        contextScroll: i ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: i ? 0 : e.top,
                        contextScroll: i ? 0 : this.oldScroll.y,
                        contextDimension: i ? n[w]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, n.each(t, function(t, e) {
                    return n.each(o.waypoints[t], function(t, i) {
                        var o, r, s, a, l;
                        if (o = i.options.offset, s = i.offset, r = n.isWindow(i.element) ? 0 : i.$element.offset()[e.offsetProp], n.isFunction(o) ? o = o.apply(i.element) : "string" == typeof o && (o = parseFloat(o), i.options.offset.indexOf("%") > -1 && (o = Math.ceil(e.contextDimension * o / 100))), i.offset = r - e.contextOffset + e.contextScroll - o, (!i.options.onlyOnScroll || null == s) && i.enabled) return null !== s && s < (a = e.oldScroll) && a <= i.offset ? i.trigger([e.backward]) : null !== s && s > (l = e.oldScroll) && l >= i.offset ? i.trigger([e.forward]) : null === s && e.oldScroll >= i.offset ? i.trigger([e.forward]) : void 0
                    })
                })
            }, t.prototype.checkEmpty = function() {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([p, g].join(" ")), delete u[this.id]
            }, t
        }(), s = function() {
            function t(t, e, i) {
                var o, r;
                "bottom-in-view" === (i = n.extend({}, n.fn[y].defaults, i)).offset && (i.offset = function() {
                    var t;
                    return t = n[w]("viewportHeight"), n.isWindow(e.element) || (t = e.$element.height()), t - n(this).outerHeight()
                }), this.$element = t, this.element = t[0], this.axis = i.horizontal ? "horizontal" : "vertical", this.callback = i.handler, this.context = e, this.enabled = i.enabled, this.id = "waypoints" + m++, this.offset = null, this.options = i, e.waypoints[this.axis][this.id] = this, a[this.axis][this.id] = this, (o = null != (r = this.element[v]) ? r : []).push(this.id), this.element[v] = o
            }
            return t.prototype.trigger = function(t) {
                if (this.enabled) return null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0
            }, t.prototype.disable = function() {
                return this.enabled = !1
            }, t.prototype.enable = function() {
                return this.context.refresh(), this.enabled = !0
            }, t.prototype.destroy = function() {
                return delete a[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, t.getWaypointsByElement = function(t) {
                var e, i;
                return (i = t[v]) ? (e = n.extend({}, a.horizontal, a.vertical), n.map(i, function(t) {
                    return e[t]
                })) : []
            }, t
        }(), f = {
            init: function(t, e) {
                return null == e && (e = {}), null == e.handler && (e.handler = t), this.each(function() {
                    var t, i, o, a;
                    return t = n(this), o = null != (a = e.context) ? a : n.fn[y].defaults.context, n.isWindow(o) || (o = t.closest(o)), o = n(o), (i = u[o[0][c]]) || (i = new r(o)), new s(t, i, e)
                }), n[w]("refresh"), this
            },
            disable: function() {
                return f._invoke.call(this, "disable")
            },
            enable: function() {
                return f._invoke.call(this, "enable")
            },
            destroy: function() {
                return f._invoke.call(this, "destroy")
            },
            prev: function(t, e) {
                return f._traverse.call(this, t, e, function(t, e, n) {
                    if (e > 0) return t.push(n[e - 1])
                })
            },
            next: function(t, e) {
                return f._traverse.call(this, t, e, function(t, e, n) {
                    if (e < n.length - 1) return t.push(n[e + 1])
                })
            },
            _traverse: function(t, e, o) {
                var r, s;
                return null == t && (t = "vertical"), null == e && (e = i), s = h.aggregate(e), r = [], this.each(function() {
                    var e;
                    return e = n.inArray(this, s[t]), o(r, e, s[t])
                }), this.pushStack(r)
            },
            _invoke: function(t) {
                return this.each(function() {
                    var e;
                    return e = s.getWaypointsByElement(this), n.each(e, function(e, n) {
                        return n[t](), !0
                    })
                }), this
            }
        }, n.fn[y] = function() {
            var t, i;
            return i = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], f[i] ? f[i].apply(this, t) : n.isFunction(i) ? f.init.apply(this, arguments) : n.isPlainObject(i) ? f.init.apply(this, [null, i]) : i ? n.error("The " + i + " method does not exist in jQuery Waypoints.") : n.error("jQuery Waypoints needs a callback function or handler option.")
        }, n.fn[y].defaults = {
            context: i,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        }, h = {
            refresh: function() {
                return n.each(u, function(t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function() {
                var t;
                return null != (t = i.innerHeight) ? t : o.height()
            },
            aggregate: function(t) {
                var e, i, o;
                return e = a, t && (e = null != (o = u[n(t)[0][c]]) ? o.waypoints : void 0), e ? (i = {
                    horizontal: [],
                    vertical: []
                }, n.each(i, function(t, o) {
                    return n.each(e[t], function(t, e) {
                        return o.push(e)
                    }), o.sort(function(t, e) {
                        return t.offset - e.offset
                    }), i[t] = n.map(o, function(t) {
                        return t.element
                    }), i[t] = n.unique(i[t])
                }), i) : []
            },
            above: function(t) {
                return null == t && (t = i), h._filter(t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function(t) {
                return null == t && (t = i), h._filter(t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function(t) {
                return null == t && (t = i), h._filter(t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function(t) {
                return null == t && (t = i), h._filter(t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function() {
                return h._invoke("enable")
            },
            disable: function() {
                return h._invoke("disable")
            },
            destroy: function() {
                return h._invoke("destroy")
            },
            extendFn: function(t, e) {
                return f[t] = e
            },
            _invoke: function(t) {
                var e;
                return e = n.extend({}, a.vertical, a.horizontal), n.each(e, function(e, n) {
                    return n[t](), !0
                })
            },
            _filter: function(t, e, i) {
                var o, r;
                return (o = u[n(t)[0][c]]) ? (r = [], n.each(o.waypoints[e], function(t, e) {
                    if (i(o, e)) return r.push(e)
                }), r.sort(function(t, e) {
                    return t.offset - e.offset
                }), n.map(r, function(t) {
                    return t.element
                })) : []
            }
        }, n[w] = function() {
            var t, n;
            return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], h[n] ? h[n].apply(null, t) : h.aggregate.call(null, n)
        }, n[w].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        }, o.load(function() {
            return n[w]("refresh")
        })
    })
}.call(this), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        // swing: function(t, e, n, i, o) {
        //     return jQuery.easing[jQuery.easing.def](t, e, n, i, o)
        // },
        easeInQuad: function(t, e, n, i, o) {
            return i * (e /= o) * e + n
        },
        easeOutQuad: function(t, e, n, i, o) {
            return -i * (e /= o) * (e - 2) + n
        },
        easeInOutQuad: function(t, e, n, i, o) {
            return (e /= o / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
        },
        easeInCubic: function(t, e, n, i, o) {
            return i * (e /= o) * e * e + n
        },
        easeOutCubic: function(t, e, n, i, o) {
            return i * ((e = e / o - 1) * e * e + 1) + n
        },
        easeInOutCubic: function(t, e, n, i, o) {
            return (e /= o / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
        },
        easeInQuart: function(t, e, n, i, o) {
            return i * (e /= o) * e * e * e + n
        },
        easeOutQuart: function(t, e, n, i, o) {
            return -i * ((e = e / o - 1) * e * e * e - 1) + n
        },
        easeInOutQuart: function(t, e, n, i, o) {
            return (e /= o / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
        },
        easeInQuint: function(t, e, n, i, o) {
            return i * (e /= o) * e * e * e * e + n
        },
        easeOutQuint: function(t, e, n, i, o) {
            return i * ((e = e / o - 1) * e * e * e * e + 1) + n
        },
        easeInOutQuint: function(t, e, n, i, o) {
            return (e /= o / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
        },
        easeInSine: function(t, e, n, i, o) {
            return -i * Math.cos(e / o * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(t, e, n, i, o) {
            return i * Math.sin(e / o * (Math.PI / 2)) + n
        },
        easeInOutSine: function(t, e, n, i, o) {
            return -i / 2 * (Math.cos(Math.PI * e / o) - 1) + n
        },
        easeInExpo: function(t, e, n, i, o) {
            return 0 == e ? n : i * Math.pow(2, 10 * (e / o - 1)) + n
        },
        easeOutExpo: function(t, e, n, i, o) {
            return e == o ? n + i : i * (1 - Math.pow(2, -10 * e / o)) + n
        },
        easeInOutExpo: function(t, e, n, i, o) {
            return 0 == e ? n : e == o ? n + i : (e /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --e)) + n
        },
        easeInCirc: function(t, e, n, i, o) {
            return -i * (Math.sqrt(1 - (e /= o) * e) - 1) + n
        },
        easeOutCirc: function(t, e, n, i, o) {
            return i * Math.sqrt(1 - (e = e / o - 1) * e) + n
        },
        easeInOutCirc: function(t, e, n, i, o) {
            return (e /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
        },
        easeInElastic: function(t, e, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == e) return n;
            if (1 == (e /= o)) return n + i;
            if (s || (s = .3 * o), a < Math.abs(i)) {
                a = i;
                r = s / 4
            } else r = s / (2 * Math.PI) * Math.asin(i / a);
            return -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s) + n
        },
        easeOutElastic: function(t, e, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == e) return n;
            if (1 == (e /= o)) return n + i;
            if (s || (s = .3 * o), a < Math.abs(i)) {
                a = i;
                r = s / 4
            } else r = s / (2 * Math.PI) * Math.asin(i / a);
            return a * Math.pow(2, -10 * e) * Math.sin((e * o - r) * (2 * Math.PI) / s) + i + n
        },
        easeInOutElastic: function(t, e, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == e) return n;
            if (2 == (e /= o / 2)) return n + i;
            if (s || (s = o * (.3 * 1.5)), a < Math.abs(i)) {
                a = i;
                r = s / 4
            } else r = s / (2 * Math.PI) * Math.asin(i / a);
            return e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s) * -.5 + n : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s) * .5 + i + n
        },
        easeInBack: function(t, e, n, i, o, r) {
            return null == r && (r = 1.70158), i * (e /= o) * e * ((r + 1) * e - r) + n
        },
        easeOutBack: function(t, e, n, i, o, r) {
            return null == r && (r = 1.70158), i * ((e = e / o - 1) * e * ((r + 1) * e + r) + 1) + n
        },
        easeInOutBack: function(t, e, n, i, o, r) {
            return null == r && (r = 1.70158), (e /= o / 2) < 1 ? i / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + n : i / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + n
        },
        easeInBounce: function(t, e, n, i, o) {
            return i - jQuery.easing.easeOutBounce(t, o - e, 0, i, o) + n
        },
        easeOutBounce: function(t, e, n, i, o) {
            return (e /= o) < 1 / 2.75 ? i * (7.5625 * e * e) + n : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
        },
        easeInOutBounce: function(t, e, n, i, o) {
            return e < o / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, o) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, i, o) + .5 * i + n
        }
    }),
    function(t) {
        var e = {
            url: !1,
            callback: !1,
            target: !1,
            duration: 120,
            on: "mouseover",
            touch: !0,
            onZoomIn: !1,
            onZoomOut: !1,
            magnify: 1
        };
        t.zoom = function(e, n, i, o) {
            var r, s, a, l, c, u, d, h = t(e),
                f = h.css("position"),
                p = t(n);
            return e.style.position = /(absolute|fixed)/.test(f) ? f : "relative", e.style.overflow = "hidden", i.style.width = i.style.height = "", t(i).addClass("zoomImg").css({
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 0,
                width: i.width * o,
                height: i.height * o,
                border: "none",
                maxWidth: "none",
                maxHeight: "none"
            }).appendTo(e), {
                init: function() {
                    s = h.outerWidth(), r = h.outerHeight(), n === e ? (l = s, a = r) : (l = p.outerWidth(), a = p.outerHeight()), c = (i.width - s) / l, u = (i.height - r) / a, d = p.offset()
                },
                move: function(t) {
                    var e = t.pageX - d.left,
                        n = t.pageY - d.top;
                    n = Math.max(Math.min(n, a), 0), e = Math.max(Math.min(e, l), 0), i.style.left = e * -c + "px", i.style.top = n * -u + "px"
                }
            }
        }, t.fn.zoom = function(n) {
            return this.each(function() {
                var i = t.extend({}, e, n || {}),
                    o = i.target && t(i.target)[0] || this,
                    r = this,
                    s = t(r),
                    a = document.createElement("img"),
                    l = t(a),
                    c = "mousemove.zoom",
                    u = !1,
                    d = !1;
                if (!i.url) {
                    var h = r.querySelector("img");
                    if (h && (i.url = h.getAttribute("data-src") || h.currentSrc || h.src), !i.url) return
                }
                s.one("zoom.destroy", function(t, e) {
                    s.off(".zoom"), o.style.position = t, o.style.overflow = e, a.onload = null, l.remove()
                }.bind(this, o.style.position, o.style.overflow)), a.onload = function() {
                    function e(e) {
                        h.init(), h.move(e), l.stop().fadeTo(t.support.opacity ? i.duration : 0, 1, !!t.isFunction(i.onZoomIn) && i.onZoomIn.call(a))
                    }

                    function n() {
                        l.stop().fadeTo(i.duration, 0, !!t.isFunction(i.onZoomOut) && i.onZoomOut.call(a))
                    }
                    var h = t.zoom(o, r, a, i.magnify);
                    "grab" === i.on ? s.on("mousedown.zoom", function(i) {
                        1 === i.which && (t(document).one("mouseup.zoom", function() {
                            n(), t(document).off(c, h.move)
                        }), e(i), t(document).on(c, h.move), i.preventDefault())
                    }) : "click" === i.on ? s.on("click.zoom", function(i) {
                        return u ? void 0 : (u = !0, e(i), t(document).on(c, h.move), t(document).one("click.zoom", function() {
                            n(), u = !1, t(document).off(c, h.move)
                        }), !1)
                    }) : "toggle" === i.on ? s.on("click.zoom", function(t) {
                        u ? n() : e(t), u = !u
                    }) : "mouseover" === i.on && (h.init(), s.on("mouseenter.zoom", e).on("mouseleave.zoom", n).on(c, h.move)), i.touch && s.on("touchstart.zoom", function(t) {
                        t.preventDefault(), d ? (d = !1, n()) : (d = !0, e(t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]))
                    }).on("touchmove.zoom", function(t) {
                        t.preventDefault(), h.move(t.originalEvent.touches[0] || t.originalEvent.changedTouches[0])
                    }).on("touchend.zoom", function(t) {
                        t.preventDefault(), d && (d = !1, n())
                    }), t.isFunction(i.callback) && i.callback.call(a)
                }, a.setAttribute("role", "presentation"), a.src = i.url
            })
        }, t.fn.zoom.defaults = e
    }(window.jQuery),
    function(t) {
        var e = !0;
        t.flexslider = function(n, i) {
            var o = t(n);
            o.vars = t.extend({}, t.flexslider.defaults, i);
            var r, s = o.vars.namespace,
                a = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                l = ("ontouchstart" in window || a || window.DocumentTouch && document instanceof DocumentTouch) && o.vars.touch,
                c = "click touchend MSPointerUp keyup",
                u = "",
                d = "vertical" === o.vars.direction,
                h = o.vars.reverse,
                f = o.vars.itemWidth > 0,
                p = "fade" === o.vars.animation,
                g = "" !== o.vars.asNavFor,
                m = {};
            t.data(n, "flexslider", o), m = {
                init: function() {
                    o.animating = !1, o.currentSlide = parseInt(o.vars.startAt ? o.vars.startAt : 0, 10), isNaN(o.currentSlide) && (o.currentSlide = 0), o.animatingTo = o.currentSlide, o.atEnd = 0 === o.currentSlide || o.currentSlide === o.last, o.containerSelector = o.vars.selector.substr(0, o.vars.selector.search(" ")), o.slides = t(o.vars.selector, o), o.container = t(o.containerSelector, o), o.count = o.slides.length, o.syncExists = t(o.vars.sync).length > 0, "slide" === o.vars.animation && (o.vars.animation = "swing"), o.prop = d ? "top" : "marginLeft", o.args = {}, o.manualPause = !1, o.stopped = !1, o.started = !1, o.startTimeout = null, o.transitions = !o.vars.video && !p && o.vars.useCSS && function() {
                        var t = document.createElement("div"),
                            e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var n in e)
                            if (void 0 !== t.style[e[n]]) return o.pfx = e[n].replace("Perspective", "").toLowerCase(), o.prop = "-" + o.pfx + "-transform", !0;
                        return !1
                    }(), o.ensureAnimationEnd = "", "" !== o.vars.controlsContainer && (o.controlsContainer = t(o.vars.controlsContainer).length > 0 && t(o.vars.controlsContainer)), "" !== o.vars.manualControls && (o.manualControls = t(o.vars.manualControls).length > 0 && t(o.vars.manualControls)), "" !== o.vars.customDirectionNav && (o.customDirectionNav = 2 === t(o.vars.customDirectionNav).length && t(o.vars.customDirectionNav)), o.vars.randomize && (o.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    }), o.container.empty().append(o.slides)), o.doMath(), o.setup("init"), o.vars.controlNav && m.controlNav.setup(), o.vars.directionNav && m.directionNav.setup(), o.vars.keyboard && (1 === t(o.containerSelector).length || o.vars.multipleKeyboard) && t(document).bind("keyup", function(t) {
                        var e = t.keyCode;
                        if (!o.animating && (39 === e || 37 === e)) {
                            var n = 39 === e ? o.getTarget("next") : 37 === e && o.getTarget("prev");
                            o.flexAnimate(n, o.vars.pauseOnAction)
                        }
                    }), o.vars.mousewheel && o.bind("mousewheel", function(t, e, n, i) {
                        t.preventDefault();
                        var r = 0 > e ? o.getTarget("next") : o.getTarget("prev");
                        o.flexAnimate(r, o.vars.pauseOnAction)
                    }), o.vars.pausePlay && m.pausePlay.setup(), o.vars.slideshow && o.vars.pauseInvisible && m.pauseInvisible.init(), o.vars.slideshow && (o.vars.pauseOnHover && o.hover(function() {
                        o.manualPlay || o.manualPause || o.pause()
                    }, function() {
                        o.manualPause || o.manualPlay || o.stopped || o.play()
                    }), o.vars.pauseInvisible && m.pauseInvisible.isHidden() || (o.vars.initDelay > 0 ? o.startTimeout = setTimeout(o.play, o.vars.initDelay) : o.play())), g && m.asNav.setup(), l && o.vars.touch && m.touch(), (!p || p && o.vars.smoothHeight) && t(window).bind("resize orientationchange focus", m.resize), o.find("img").attr("draggable", "false"), setTimeout(function() {
                        o.vars.start(o)
                    }, 200)
                },
                asNav: {
                    setup: function() {
                        o.asNav = !0, o.animatingTo = Math.floor(o.currentSlide / o.move), o.currentItem = o.currentSlide, o.slides.removeClass(s + "active-slide").eq(o.currentItem).addClass(s + "active-slide"), a ? (n._slider = o, o.slides.each(function() {
                            var e = this;
                            e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function(t) {
                                t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                            }, !1), e.addEventListener("MSGestureTap", function(e) {
                                e.preventDefault();
                                var n = t(this),
                                    i = n.index();
                                t(o.vars.asNavFor).data("flexslider").animating || n.hasClass("active") || (o.direction = o.currentItem < i ? "next" : "prev", o.flexAnimate(i, o.vars.pauseOnAction, !1, !0, !0))
                            })
                        })) : o.slides.on(c, function(e) {
                            e.preventDefault();
                            var n = t(this),
                                i = n.index();
                            0 >= n.offset().left - t(o).scrollLeft() && n.hasClass(s + "active-slide") ? o.flexAnimate(o.getTarget("prev"), !0) : t(o.vars.asNavFor).data("flexslider").animating || n.hasClass(s + "active-slide") || (o.direction = o.currentItem < i ? "next" : "prev", o.flexAnimate(i, o.vars.pauseOnAction, !1, !0, !0))
                        })
                    }
                },
                controlNav: {
                    setup: function() {
                        o.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
                    },
                    setupPaging: function() {
                        var e, n, i = "thumbnails" === o.vars.controlNav ? "control-thumbs" : "control-paging",
                            r = 1;
                        if (o.controlNavScaffold = t('<ol class="' + s + "control-nav " + s + i + '"></ol>'), o.pagingCount > 1)
                            for (var a = 0; a < o.pagingCount; a++) {
                                void 0 === (n = o.slides.eq(a)).attr("data-thumb-alt") && n.attr("data-thumb-alt", "");
                                var l = "" !== n.attr("data-thumb-alt") ? l = ' alt="' + n.attr("data-thumb-alt") + '"' : "";
                                if (e = "thumbnails" === o.vars.controlNav ? '<img src="' + n.attr("data-thumb") + '"' + l + "/>" : '<a href="#">' + r + "</a>", "thumbnails" === o.vars.controlNav && !0 === o.vars.thumbCaptions) {
                                    var d = n.attr("data-thumbcaption");
                                    "" !== d && void 0 !== d && (e += '<span class="' + s + 'caption">' + d + "</span>")
                                }
                                o.controlNavScaffold.append("<li>" + e + "</li>"), r++
                            }
                        o.controlsContainer ? t(o.controlsContainer).append(o.controlNavScaffold) : o.append(o.controlNavScaffold), m.controlNav.set(), m.controlNav.active(), o.controlNavScaffold.delegate("a, img", c, function(e) {
                            if (e.preventDefault(), "" === u || u === e.type) {
                                var n = t(this),
                                    i = o.controlNav.index(n);
                                n.hasClass(s + "active") || (o.direction = i > o.currentSlide ? "next" : "prev", o.flexAnimate(i, o.vars.pauseOnAction))
                            }
                            "" === u && (u = e.type), m.setToClearWatchedEvent()
                        })
                    },
                    setupManual: function() {
                        o.controlNav = o.manualControls, m.controlNav.active(), o.controlNav.bind(c, function(e) {
                            if (e.preventDefault(), "" === u || u === e.type) {
                                var n = t(this),
                                    i = o.controlNav.index(n);
                                n.hasClass(s + "active") || (i > o.currentSlide ? o.direction = "next" : o.direction = "prev", o.flexAnimate(i, o.vars.pauseOnAction))
                            }
                            "" === u && (u = e.type), m.setToClearWatchedEvent()
                        })
                    },
                    set: function() {
                        var e = "thumbnails" === o.vars.controlNav ? "img" : "a";
                        o.controlNav = t("." + s + "control-nav li " + e, o.controlsContainer ? o.controlsContainer : o)
                    },
                    active: function() {
                        o.controlNav.removeClass(s + "active").eq(o.animatingTo).addClass(s + "active")
                    },
                    update: function(e, n) {
                        o.pagingCount > 1 && "add" === e ? o.controlNavScaffold.append(t('<li><a href="#">' + o.count + "</a></li>")) : 1 === o.pagingCount ? o.controlNavScaffold.find("li").remove() : o.controlNav.eq(n).closest("li").remove(), m.controlNav.set(), o.pagingCount > 1 && o.pagingCount !== o.controlNav.length ? o.update(n, e) : m.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function() {
                        var e = t('<ul class="' + s + 'direction-nav"><li class="' + s + 'nav-prev"><a class="' + s + 'prev" href="#">' + o.vars.prevText + '</a></li><li class="' + s + 'nav-next"><a class="' + s + 'next" href="#">' + o.vars.nextText + "</a></li></ul>");
                        o.customDirectionNav ? o.directionNav = o.customDirectionNav : o.controlsContainer ? (t(o.controlsContainer).append(e), o.directionNav = t("." + s + "direction-nav li a", o.controlsContainer)) : (o.append(e), o.directionNav = t("." + s + "direction-nav li a", o)), m.directionNav.update(), o.directionNav.bind(c, function(e) {
                            var n;
                            e.preventDefault(), "" !== u && u !== e.type || (n = t(this).hasClass(s + "next") ? o.getTarget("next") : o.getTarget("prev"), o.flexAnimate(n, o.vars.pauseOnAction)), "" === u && (u = e.type), m.setToClearWatchedEvent()
                        })
                    },
                    update: function() {
                        var t = s + "disabled";
                        1 === o.pagingCount ? o.directionNav.addClass(t).attr("tabindex", "-1") : o.vars.animationLoop ? o.directionNav.removeClass(t).removeAttr("tabindex") : 0 === o.animatingTo ? o.directionNav.removeClass(t).filter("." + s + "prev").addClass(t).attr("tabindex", "-1") : o.animatingTo === o.last ? o.directionNav.removeClass(t).filter("." + s + "next").addClass(t).attr("tabindex", "-1") : o.directionNav.removeClass(t).removeAttr("tabindex")
                    }
                },
                pausePlay: {
                    setup: function() {
                        var e = t('<div class="' + s + 'pauseplay"><a href="#"></a></div>');
                        o.controlsContainer ? (o.controlsContainer.append(e), o.pausePlay = t("." + s + "pauseplay a", o.controlsContainer)) : (o.append(e), o.pausePlay = t("." + s + "pauseplay a", o)), m.pausePlay.update(o.vars.slideshow ? s + "pause" : s + "play"), o.pausePlay.bind(c, function(e) {
                            e.preventDefault(), "" !== u && u !== e.type || (t(this).hasClass(s + "pause") ? (o.manualPause = !0, o.manualPlay = !1, o.pause()) : (o.manualPause = !1, o.manualPlay = !0, o.play())), "" === u && (u = e.type), m.setToClearWatchedEvent()
                        })
                    },
                    update: function(t) {
                        "play" === t ? o.pausePlay.removeClass(s + "pause").addClass(s + "play").html(o.vars.playText) : o.pausePlay.removeClass(s + "play").addClass(s + "pause").html(o.vars.pauseText)
                    }
                },
                touch: function() {
                    var t, e, i, r, s, l, c, u, g, m = !1,
                        v = 0,
                        y = 0,
                        w = 0;
                    a ? (n.style.msTouchAction = "none", n._gesture = new MSGesture, n._gesture.target = n, n.addEventListener("MSPointerDown", function(t) {
                        t.stopPropagation(), o.animating ? t.preventDefault() : (o.pause(), n._gesture.addPointer(t.pointerId), w = 0, r = d ? o.h : o.w, l = Number(new Date), i = f && h && o.animatingTo === o.last ? 0 : f && h ? o.limit - (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo : f && o.currentSlide === o.last ? o.limit : f ? (o.itemW + o.vars.itemMargin) * o.move * o.currentSlide : h ? (o.last - o.currentSlide + o.cloneOffset) * r : (o.currentSlide + o.cloneOffset) * r)
                    }, !1), n._slider = o, n.addEventListener("MSGestureChange", function(t) {
                        t.stopPropagation();
                        var e = t.target._slider;
                        if (e) {
                            var o = -t.translationX,
                                a = -t.translationY;
                            return s = w += d ? a : o, m = d ? Math.abs(w) < Math.abs(-o) : Math.abs(w) < Math.abs(-a), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                                n._gesture.stop()
                            }) : void((!m || Number(new Date) - l > 500) && (t.preventDefault(), !p && e.transitions && (e.vars.animationLoop || (s = w / (0 === e.currentSlide && 0 > w || e.currentSlide === e.last && w > 0 ? Math.abs(w) / r + 2 : 1)), e.setProps(i + s, "setTouch"))))
                        }
                    }, !1), n.addEventListener("MSGestureEnd", function(n) {
                        n.stopPropagation();
                        var o = n.target._slider;
                        if (o) {
                            if (o.animatingTo === o.currentSlide && !m && null !== s) {
                                var a = h ? -s : s,
                                    c = a > 0 ? o.getTarget("next") : o.getTarget("prev");
                                o.canAdvance(c) && (Number(new Date) - l < 550 && Math.abs(a) > 50 || Math.abs(a) > r / 2) ? o.flexAnimate(c, o.vars.pauseOnAction) : p || o.flexAnimate(o.currentSlide, o.vars.pauseOnAction, !0)
                            }
                            t = null, e = null, s = null, i = null, w = 0
                        }
                    }, !1)) : (c = function(s) {
                        o.animating ? s.preventDefault() : (window.navigator.msPointerEnabled || 1 === s.touches.length) && (o.pause(), r = d ? o.h : o.w, l = Number(new Date), v = s.touches[0].pageX, y = s.touches[0].pageY, i = f && h && o.animatingTo === o.last ? 0 : f && h ? o.limit - (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo : f && o.currentSlide === o.last ? o.limit : f ? (o.itemW + o.vars.itemMargin) * o.move * o.currentSlide : h ? (o.last - o.currentSlide + o.cloneOffset) * r : (o.currentSlide + o.cloneOffset) * r, t = d ? y : v, e = d ? v : y, n.addEventListener("touchmove", u, !1), n.addEventListener("touchend", g, !1))
                    }, u = function(n) {
                        v = n.touches[0].pageX, y = n.touches[0].pageY, s = d ? t - y : t - v;
                        (!(m = d ? Math.abs(s) < Math.abs(v - e) : Math.abs(s) < Math.abs(y - e)) || Number(new Date) - l > 500) && (n.preventDefault(), !p && o.transitions && (o.vars.animationLoop || (s /= 0 === o.currentSlide && 0 > s || o.currentSlide === o.last && s > 0 ? Math.abs(s) / r + 2 : 1), o.setProps(i + s, "setTouch")))
                    }, g = function(a) {
                        if (n.removeEventListener("touchmove", u, !1), o.animatingTo === o.currentSlide && !m && null !== s) {
                            var c = h ? -s : s,
                                d = c > 0 ? o.getTarget("next") : o.getTarget("prev");
                            o.canAdvance(d) && (Number(new Date) - l < 550 && Math.abs(c) > 50 || Math.abs(c) > r / 2) ? o.flexAnimate(d, o.vars.pauseOnAction) : p || o.flexAnimate(o.currentSlide, o.vars.pauseOnAction, !0)
                        }
                        n.removeEventListener("touchend", g, !1), t = null, e = null, s = null, i = null
                    }, n.addEventListener("touchstart", c, !1))
                },
                resize: function() {
                    !o.animating && o.is(":visible") && (f || o.doMath(), p ? m.smoothHeight() : f ? (o.slides.width(o.computedW), o.update(o.pagingCount), o.setProps()) : d ? (o.viewport.height(o.h), o.setProps(o.h, "setTotal")) : (o.vars.smoothHeight && m.smoothHeight(), o.newSlides.width(o.computedW), o.setProps(o.computedW, "setTotal")))
                },
                smoothHeight: function(t) {
                    if (!d || p) {
                        var e = p ? o : o.viewport;
                        t ? e.animate({
                            height: o.slides.eq(o.animatingTo).innerHeight()
                        }, t) : e.innerHeight(o.slides.eq(o.animatingTo).innerHeight())
                    }
                },
                sync: function(e) {
                    var n = t(o.vars.sync).data("flexslider"),
                        i = o.animatingTo;
                    switch (e) {
                        case "animate":
                            n.flexAnimate(i, o.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            n.playing || n.asNav || n.play();
                            break;
                        case "pause":
                            n.pause()
                    }
                },
                uniqueID: function(e) {
                    return e.filter("[id]").add(e.find("[id]")).each(function() {
                        var e = t(this);
                        e.attr("id", e.attr("id") + "_clone")
                    }), e
                },
                pauseInvisible: {
                    visProp: null,
                    init: function() {
                        var t = m.pauseInvisible.getHiddenProp();
                        if (t) {
                            var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                            document.addEventListener(e, function() {
                                m.pauseInvisible.isHidden() ? o.startTimeout ? clearTimeout(o.startTimeout) : o.pause() : o.started ? o.play() : o.vars.initDelay > 0 ? setTimeout(o.play, o.vars.initDelay) : o.play()
                            })
                        }
                    },
                    isHidden: function() {
                        var t = m.pauseInvisible.getHiddenProp();
                        return !!t && document[t]
                    },
                    getHiddenProp: function() {
                        var t = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var e = 0; e < t.length; e++)
                            if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                        return null
                    }
                },
                setToClearWatchedEvent: function() {
                    clearTimeout(r), r = setTimeout(function() {
                        u = ""
                    }, 3e3)
                }
            }, o.flexAnimate = function(e, n, i, r, a) {
                if (o.vars.animationLoop || e === o.currentSlide || (o.direction = e > o.currentSlide ? "next" : "prev"), g && 1 === o.pagingCount && (o.direction = o.currentItem < e ? "next" : "prev"), !o.animating && (o.canAdvance(e, a) || i) && o.is(":visible")) {
                    if (g && r) {
                        var c = t(o.vars.asNavFor).data("flexslider");
                        if (o.atEnd = 0 === e || e === o.count - 1, c.flexAnimate(e, !0, !1, !0, a), o.direction = o.currentItem < e ? "next" : "prev", c.direction = o.direction, Math.ceil((e + 1) / o.visible) - 1 === o.currentSlide || 0 === e) return o.currentItem = e, o.slides.removeClass(s + "active-slide").eq(e).addClass(s + "active-slide"), !1;
                        o.currentItem = e, o.slides.removeClass(s + "active-slide").eq(e).addClass(s + "active-slide"), e = Math.floor(e / o.visible)
                    }
                    if (o.animating = !0, o.animatingTo = e, n && o.pause(), o.vars.before(o), o.syncExists && !a && m.sync("animate"), o.vars.controlNav && m.controlNav.active(), f || o.slides.removeClass(s + "active-slide").eq(e).addClass(s + "active-slide"), o.atEnd = 0 === e || e === o.last, o.vars.directionNav && m.directionNav.update(), e === o.last && (o.vars.end(o), o.vars.animationLoop || o.pause()), p) l ? (o.slides.eq(o.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), o.slides.eq(e).css({
                        opacity: 1,
                        zIndex: 2
                    }), o.wrapup(w)) : (o.slides.eq(o.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, o.vars.animationSpeed, o.vars.easing), o.slides.eq(e).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, o.vars.animationSpeed, o.vars.easing, o.wrapup));
                    else {
                        var u, v, y, w = d ? o.slides.filter(":first").height() : o.computedW;
                        f ? (u = o.vars.itemMargin, v = (y = (o.itemW + u) * o.move * o.animatingTo) > o.limit && 1 !== o.visible ? o.limit : y) : v = 0 === o.currentSlide && e === o.count - 1 && o.vars.animationLoop && "next" !== o.direction ? h ? (o.count + o.cloneOffset) * w : 0 : o.currentSlide === o.last && 0 === e && o.vars.animationLoop && "prev" !== o.direction ? h ? 0 : (o.count + 1) * w : h ? (o.count - 1 - e + o.cloneOffset) * w : (e + o.cloneOffset) * w, o.setProps(v, "", o.vars.animationSpeed), o.transitions ? (o.vars.animationLoop && o.atEnd || (o.animating = !1, o.currentSlide = o.animatingTo), o.container.unbind("webkitTransitionEnd transitionend"), o.container.bind("webkitTransitionEnd transitionend", function() {
                            clearTimeout(o.ensureAnimationEnd), o.wrapup(w)
                        }), clearTimeout(o.ensureAnimationEnd), o.ensureAnimationEnd = setTimeout(function() {
                            o.wrapup(w)
                        }, o.vars.animationSpeed + 100)) : o.container.animate(o.args, o.vars.animationSpeed, o.vars.easing, function() {
                            o.wrapup(w)
                        })
                    }
                    o.vars.smoothHeight && m.smoothHeight(o.vars.animationSpeed)
                }
            }, o.wrapup = function(t) {
                p || f || (0 === o.currentSlide && o.animatingTo === o.last && o.vars.animationLoop ? o.setProps(t, "jumpEnd") : o.currentSlide === o.last && 0 === o.animatingTo && o.vars.animationLoop && o.setProps(t, "jumpStart")), o.animating = !1, o.currentSlide = o.animatingTo, o.vars.after(o)
            }, o.animateSlides = function() {
                !o.animating && e && o.flexAnimate(o.getTarget("next"))
            }, o.pause = function() {
                clearInterval(o.animatedSlides), o.animatedSlides = null, o.playing = !1, o.vars.pausePlay && m.pausePlay.update("play"), o.syncExists && m.sync("pause")
            }, o.play = function() {
                o.playing && clearInterval(o.animatedSlides), o.animatedSlides = o.animatedSlides || setInterval(o.animateSlides, o.vars.slideshowSpeed), o.started = o.playing = !0, o.vars.pausePlay && m.pausePlay.update("pause"), o.syncExists && m.sync("play")
            }, o.stop = function() {
                o.pause(), o.stopped = !0
            }, o.canAdvance = function(t, e) {
                var n = g ? o.pagingCount - 1 : o.last;
                return !!e || (!(!g || o.currentItem !== o.count - 1 || 0 !== t || "prev" !== o.direction) || (!g || 0 !== o.currentItem || t !== o.pagingCount - 1 || "next" === o.direction) && (!(t === o.currentSlide && !g) && (!!o.vars.animationLoop || (!o.atEnd || 0 !== o.currentSlide || t !== n || "next" === o.direction) && (!o.atEnd || o.currentSlide !== n || 0 !== t || "next" !== o.direction))))
            }, o.getTarget = function(t) {
                return o.direction = t, "next" === t ? o.currentSlide === o.last ? 0 : o.currentSlide + 1 : 0 === o.currentSlide ? o.last : o.currentSlide - 1
            }, o.setProps = function(t, e, n) {
                var i = function() {
                    var n = t || (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo;
                    return -1 * function() {
                        if (f) return "setTouch" === e ? t : h && o.animatingTo === o.last ? 0 : h ? o.limit - (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo : o.animatingTo === o.last ? o.limit : n;
                        switch (e) {
                            case "setTotal":
                                return h ? (o.count - 1 - o.currentSlide + o.cloneOffset) * t : (o.currentSlide + o.cloneOffset) * t;
                            case "setTouch":
                                return t;
                            case "jumpEnd":
                                return h ? t : o.count * t;
                            case "jumpStart":
                                return h ? o.count * t : t;
                            default:
                                return t
                        }
                    }() + "px"
                }();
                o.transitions && (i = d ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", o.container.css("-" + o.pfx + "-transition-duration", n), o.container.css("transition-duration", n)), o.args[o.prop] = i, (o.transitions || void 0 === n) && o.container.css(o.args), o.container.css("transform", i)
            }, o.setup = function(e) {
                var n, i;
                p ? (o.slides.css({
                    width: "100%",
                    float: "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === e && (l ? o.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + o.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(o.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : 0 == o.vars.fadeFirstSlide ? o.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(o.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : o.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(o.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, o.vars.animationSpeed, o.vars.easing)), o.vars.smoothHeight && m.smoothHeight()) : ("init" === e && (o.viewport = t('<div class="' + s + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(o).append(o.container), o.cloneCount = 0, o.cloneOffset = 0, h && (i = t.makeArray(o.slides).reverse(), o.slides = t(i), o.container.empty().append(o.slides))), o.vars.animationLoop && !f && (o.cloneCount = 2, o.cloneOffset = 1, "init" !== e && o.container.find(".clone").remove(), o.container.append(m.uniqueID(o.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(o.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), o.newSlides = t(o.vars.selector, o), n = h ? o.count - 1 - o.currentSlide + o.cloneOffset : o.currentSlide + o.cloneOffset, d && !f ? (o.container.height(200 * (o.count + o.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    o.newSlides.css({
                        display: "block"
                    }), o.doMath(), o.viewport.height(o.h), o.setProps(n * o.h, "init")
                }, "init" === e ? 100 : 0)) : (o.container.width(200 * (o.count + o.cloneCount) + "%"), o.setProps(n * o.computedW, "init"), setTimeout(function() {
                    o.doMath(), o.newSlides.css({
                        width: o.computedW,
                        marginRight: o.computedM,
                        float: "left",
                        display: "block"
                    }), o.vars.smoothHeight && m.smoothHeight()
                }, "init" === e ? 100 : 0)));
                f || o.slides.removeClass(s + "active-slide").eq(o.currentSlide).addClass(s + "active-slide"), o.vars.init(o)
            }, o.doMath = function() {
                var t = o.slides.first(),
                    e = o.vars.itemMargin,
                    n = o.vars.minItems,
                    i = o.vars.maxItems;
                o.w = void 0 === o.viewport ? o.width() : o.viewport.width(), o.h = t.height(), o.boxPadding = t.outerWidth() - t.width(), f ? (o.itemT = o.vars.itemWidth + e, o.itemM = e, o.minW = n ? n * o.itemT : o.w, o.maxW = i ? i * o.itemT - e : o.w, o.itemW = o.minW > o.w ? (o.w - e * (n - 1)) / n : o.maxW < o.w ? (o.w - e * (i - 1)) / i : o.vars.itemWidth > o.w ? o.w : o.vars.itemWidth, o.visible = Math.floor(o.w / o.itemW), o.move = o.vars.move > 0 && o.vars.move < o.visible ? o.vars.move : o.visible, o.pagingCount = Math.ceil((o.count - o.visible) / o.move + 1), o.last = o.pagingCount - 1, o.limit = 1 === o.pagingCount ? 0 : o.vars.itemWidth > o.w ? o.itemW * (o.count - 1) + e * (o.count - 1) : (o.itemW + e) * o.count - o.w - e) : (o.itemW = o.w, o.itemM = e, o.pagingCount = o.count, o.last = o.count - 1), o.computedW = o.itemW - o.boxPadding, o.computedM = o.itemM
            }, o.update = function(t, e) {
                o.doMath(), f || (t < o.currentSlide ? o.currentSlide += 1 : t <= o.currentSlide && 0 !== t && (o.currentSlide -= 1), o.animatingTo = o.currentSlide), o.vars.controlNav && !o.manualControls && ("add" === e && !f || o.pagingCount > o.controlNav.length ? m.controlNav.update("add") : ("remove" === e && !f || o.pagingCount < o.controlNav.length) && (f && o.currentSlide > o.last && (o.currentSlide -= 1, o.animatingTo -= 1), m.controlNav.update("remove", o.last))), o.vars.directionNav && m.directionNav.update()
            }, o.addSlide = function(e, n) {
                var i = t(e);
                o.count += 1, o.last = o.count - 1, d && h ? void 0 !== n ? o.slides.eq(o.count - n).after(i) : o.container.prepend(i) : void 0 !== n ? o.slides.eq(n).before(i) : o.container.append(i), o.update(n, "add"), o.slides = t(o.vars.selector + ":not(.clone)", o), o.setup(), o.vars.added(o)
            }, o.removeSlide = function(e) {
                var n = isNaN(e) ? o.slides.index(t(e)) : e;
                o.count -= 1, o.last = o.count - 1, isNaN(e) ? t(e, o.slides).remove() : d && h ? o.slides.eq(o.last).remove() : o.slides.eq(e).remove(), o.doMath(), o.update(n, "remove"), o.slides = t(o.vars.selector + ":not(.clone)", o), o.setup(), o.vars.removed(o)
            }, m.init()
        }, t(window).blur(function(t) {
            e = !1
        }).focus(function(t) {
            e = !0
        }), t.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            fadeFirstSlide: !0,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            customDirectionNav: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            start: function() {},
            before: function() {},
            after: function() {},
            end: function() {},
            added: function() {},
            removed: function() {},
            init: function() {}
        }, t.fn.flexslider = function(e) {
            if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
                var n = t(this),
                    i = e.selector ? e.selector : ".slides > li",
                    o = n.find(i);
                1 === o.length && !1 === e.allowOneSlide || 0 === o.length ? (o.fadeIn(400), e.start && e.start(n)) : void 0 === n.data("flexslider") && new t.flexslider(this, e)
            });
            var n = t(this).data("flexslider");
            switch (e) {
                case "play":
                    n.play();
                    break;
                case "pause":
                    n.pause();
                    break;
                case "stop":
                    n.stop();
                    break;
                case "next":
                    n.flexAnimate(n.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    n.flexAnimate(n.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof e && n.flexAnimate(e, !0)
            }
        }
    }(jQuery),
    function(t, e, n, i) {
        var o, r, s;

        function a(e, n) {
            this.settings = null, this.options = t.extend({}, a.Defaults, n), this.$element = t(e), this.drag = t.extend({}, o), this.state = t.extend({}, r), this.e = t.extend({}, s), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(a.Plugins, t.proxy(function(t, e) {
                this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
            }, this)), t.each(a.Pipe, t.proxy(function(e, n) {
                this._pipe.push({
                    filter: n.filter,
                    run: t.proxy(n.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }

        function l(t) {
            if (t.touches !== i) return {
                x: t.touches[0].pageX,
                y: t.touches[0].pageY
            };
            if (t.touches === i) {
                if (t.pageX !== i) return {
                    x: t.pageX,
                    y: t.pageY
                };
                if (t.pageX === i) return {
                    x: t.clientX,
                    y: t.clientY
                }
            }
        }

        function c(t) {
            var e, i, o = n.createElement("div"),
                r = t;
            for (e in r)
                if (i = r[e], void 0 !== o.style[i]) return o = null, [i, e];
            return [!1]
        }
        o = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            offsetX: 0,
            offsetY: 0,
            distance: null,
            startTime: 0,
            endTime: 0,
            updatedX: 0,
            targetEl: null
        }, r = {
            isTouch: !1,
            isScrolling: !1,
            isSwiping: !1,
            direction: !1,
            inMotion: !1
        }, s = {
            _onDragStart: null,
            _onDragMove: null,
            _onDragEnd: null,
            _transitionEnd: null,
            _resizer: null,
            _responsiveCall: null,
            _goToLoop: null,
            _checkVisibile: null
        }, a.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            responsiveClass: !1,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            themeClass: "owl-theme",
            baseClass: "owl-carousel",
            itemClass: "owl-item",
            centerClass: "center",
            activeClass: "active"
        }, a.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, a.Plugins = {}, a.Pipe = [{
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var t = this._clones;
                (this.$stage.children(".cloned").length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var t, e, n = this._clones,
                    i = this._items,
                    o = this.settings.loop ? n.length - Math.max(2 * this.settings.items, 4) : 0;
                // for (t = 0, e = Math.abs(o / 2); t < e; t++) o > 0 ? (this.$stage.children().eq(i.length + n.length - 1).remove(), n.pop(), this.$stage.children().eq(0).remove(), n.pop()) : (n.push(n.length / 2), this.$stage.append(i[n[n.length - 1]].clone().addClass("cloned")), n.push(i.length - 1 - (n.length - 1) / 2), this.$stage.prepend(i[n[n.length - 1]].clone().addClass("cloned")))
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t, e, n, i = this.settings.rtl ? 1 : -1,
                    o = (this.width() / this.settings.items).toFixed(3),
                    r = 0;
                for (this._coordinates = [], e = 0, n = this._clones.length + this._items.length; e < n; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, r += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : o * t) * i, this._coordinates.push(r)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var e, n, i = (this.width() / this.settings.items).toFixed(3),
                    o = {
                        width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                        "padding-left": this.settings.stagePadding || "",
                        "padding-right": this.settings.stagePadding || ""
                    };
                if (this.$stage.css(o), (o = {
                        width: this.settings.autoWidth ? "auto" : i - this.settings.margin
                    })[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) {
                        return t > 1
                    }).length > 0)
                    for (e = 0, n = this._coordinates.length; e < n; e++) o.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(o);
                else this.$stage.children().css(o)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current && this.reset(this.$stage.children().index(t.current))
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, n, i, o = this.settings.rtl ? 1 : -1,
                    r = 2 * this.settings.stagePadding,
                    s = this.coordinates(this.current()) + r,
                    a = s + this.width() * o,
                    l = [];
                for (n = 0, i = this._coordinates.length; n < i; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + r * o, (this.op(t, "<=", s) && this.op(t, ">", a) || this.op(e, "<", s) && this.op(e, ">", a)) && l.push(n);
                this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
            }
        }], a.prototype.initialize = function() {
            var e, n, o;
            if ((this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && !0 !== this.state.imagesLoaded) && (e = this.$element.find("img"), n = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, o = this.$element.children(n).width(), e.length && o <= 0)) return this.preloadAutoWidthImages(e), !1;
            this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
        }, a.prototype.setup = function() {
            var e = this.viewport(),
                n = this.options.responsive,
                i = -1,
                o = null;
            n ? (t.each(n, function(t) {
                t <= e && t > i && (i = Number(t))
            }), delete(o = t.extend({}, this.options, n[i])).responsive, o.responsiveClass && this.$element.attr("class", function(t, e) {
                return e.replace(/\b owl-responsive-\S+/g, "")
            }).addClass("owl-responsive-" + i)) : o = t.extend({}, this.options), null !== this.settings && this._breakpoint === i || (this.trigger("change", {
                property: {
                    name: "settings",
                    value: o
                }
            }), this._breakpoint = i, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            }))
        }, a.prototype.optionsLogic = function() {
            this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, a.prototype.prepare = function(e) {
            var n = this.trigger("prepare", {
                content: e
            });
            return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
                content: n.data
            }), n.data
        }, a.prototype.update = function() {
            for (var e = 0, n = this._pipe.length, i = t.proxy(function(t) {
                    return this[t]
                }, this._invalidated), o = {}; e < n;)(this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(o), e++;
            this._invalidated = {}
        }, a.prototype.width = function(t) {
            switch (t = t || a.Width.Default) {
                case a.Width.Inner:
                case a.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, a.prototype.refresh = function() {
            if (0 === this._items.length) return !1;
            (new Date).getTime();
            this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed")
        }, a.prototype.eventsCall = function() {
            this.e._onDragStart = t.proxy(function(t) {
                this.onDragStart(t)
            }, this), this.e._onDragMove = t.proxy(function(t) {
                this.onDragMove(t)
            }, this), this.e._onDragEnd = t.proxy(function(t) {
                this.onDragEnd(t)
            }, this), this.e._onResize = t.proxy(function(t) {
                this.onResize(t)
            }, this), this.e._transitionEnd = t.proxy(function(t) {
                this.transitionEnd(t)
            }, this), this.e._preventClick = t.proxy(function(t) {
                this.preventClick(t)
            }, this)
        }, a.prototype.onThrottledResize = function() {
            e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
        }, a.prototype.onResize = function() {
            return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized"))))
        }, a.prototype.eventsRouter = function(t) {
            var e = t.type;
            "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
        }, a.prototype.internalEvents = function() {
            "ontouchstart" in e || navigator.msMaxTouchPoints;
            var n = e.navigator.msPointerEnabled;
            this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) {
                this.eventsRouter(t)
            }, this)), this.$stage.on("dragstart", function() {
                return !1
            }), this.$stage.get(0).onselectstart = function() {
                return !1
            }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !n && this.$stage.on("touchstart touchcancel", t.proxy(function(t) {
                this.eventsRouter(t)
            }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), !1 !== this.settings.responsive && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
        }, a.prototype.onDragStart = function(i) {
            var o, r, s, a;
            if (3 === (o = i.originalEvent || i || e.event).which || this.state.isTouch) return !1;
            if ("mousedown" === o.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = l(o).x, s = l(o).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) a = this.getTransformProperty(), this.drag.offsetX = a, this.animate(a), this.state.inMotion = !0;
            else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
            this.drag.startX = r - this.drag.offsetX, this.drag.startY = s - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = o.target || o.srcElement, this.drag.updatedX = this.drag.start, "IMG" !== this.drag.targetEl.tagName && "A" !== this.drag.targetEl.tagName || (this.drag.targetEl.draggable = !1), t(n).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) {
                this.eventsRouter(t)
            }, this))
        }, a.prototype.onDragMove = function(t) {
            var n, o, r, s, a, c;
            this.state.isTouch && (this.state.isScrolling || (o = l(n = t.originalEvent || t || e.event).x, r = l(n).y, this.drag.currentX = o - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (s = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), a = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), c = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, s + c), a + c)), (this.drag.distance > 8 || this.drag.distance < -8) && (n.preventDefault !== i ? n.preventDefault() : n.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && !1 === this.state.isSwiping && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
        }, a.prototype.onDragEnd = function(e) {
            var i, o;
            if (this.state.isTouch) {
                if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && !0 !== this.state.inMotion) return this.state.inMotion = !1, !1;
                this.drag.endTime = (new Date).getTime(), i = this.drag.endTime - this.drag.startTime, (Math.abs(this.drag.distance) > 3 || i > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(n).off(".owl.dragEvents")
            }
        }, a.prototype.removeClick = function(n) {
            this.drag.targetEl = n, t(n).on("click.preventClick", this.e._preventClick), e.setTimeout(function() {
                t(n).off("click.preventClick")
            }, 300)
        }, a.prototype.preventClick = function(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
        }, a.prototype.getTransformProperty = function() {
            var t;
            return !0 !== (16 === (t = (t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform")).replace(/matrix(3d)?\(|\)/g, "").split(",")).length) ? t[4] : t[12]
        }, a.prototype.closest = function(e) {
            var n = -1,
                i = this.width(),
                o = this.coordinates();
            return this.settings.freeDrag || t.each(o, t.proxy(function(t, r) {
                return e > r - 30 && e < r + 30 ? n = t : this.op(e, "<", r) && this.op(e, ">", o[t + 1] || r - i) && (n = "left" === this.state.direction ? t + 1 : t), -1 === n
            }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (n = e = this.maximum())), n
        }, a.prototype.animate = function(e) {
            this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px, 0px)",
                transition: this.speed() / 500 + "s"
            }) : this.state.isTouch ? this.$stage.css({
                left: e + "px"
            }) : this.$stage.animate({
                left: e
            }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() {
                this.state.inMotion && this.transitionEnd()
            }, this))
        }, a.prototype.current = function(t) {
            if (t === i) return this._current;
            if (0 === this._items.length) return i;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== i && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, a.prototype.invalidate = function(t) {
            this._invalidated[t] = !0
        }, a.prototype.reset = function(t) {
            (t = this.normalize(t)) !== i && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, a.prototype.normalize = function(e, n) {
            var o = n ? this._items.length : this._items.length + this._clones.length;
            return !t.isNumeric(e) || o < 1 ? i : e = this._clones.length ? (e % o + o) % o : Math.max(this.minimum(n), Math.min(this.maximum(n), e))
        }, a.prototype.relative = function(t) {
            return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
        }, a.prototype.maximum = function(t) {
            var e, n, i, o = 0,
                r = this.settings;
            if (t) return this._items.length - 1;
            if (!r.loop && r.center) e = this._items.length - 1;
            else if (r.loop || r.center)
                if (r.loop || r.center) e = this._items.length + r.items;
                else {
                    if (!r.autoWidth && !r.merge) throw "Can not detect maximum absolute position.";
                    for (revert = r.rtl ? 1 : -1, n = this.$stage.width() - this.$element.width();
                        (i = this.coordinates(o)) && !(i * revert >= n);) e = ++o
                } else e = this._items.length - r.items;
            return e
        }, a.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2
        }, a.prototype.items = function(t) {
            return t === i ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, a.prototype.mergers = function(t) {
            return t === i ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, a.prototype.clones = function(e) {
            var n = this._clones.length / 2,
                o = n + this._items.length,
                r = function(t) {
                    return t % 2 == 0 ? o + t / 2 : n - (t + 1) / 2
                };
            return e === i ? t.map(this._clones, function(t, e) {
                return r(e)
            }) : t.map(this._clones, function(t, n) {
                return t === e ? r(n) : null
            })
        }, a.prototype.speed = function(t) {
            return t !== i && (this._speed = t), this._speed
        }, a.prototype.coordinates = function(e) {
            var n = null;
            return e === i ? t.map(this._coordinates, t.proxy(function(t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (n = this._coordinates[e], n += (this.width() - n + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : n = this._coordinates[e - 1] || 0, n)
        }, a.prototype.duration = function(t, e, n) {
            return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
        }, a.prototype.to = function(n, i) {
            if (this.settings.loop) {
                var o = n - this.relative(this.current()),
                    r = this.current(),
                    s = this.current(),
                    a = this.current() + o,
                    l = s - a < 0,
                    c = this._clones.length + this._items.length;
                a < this.settings.items && !1 === l ? (r = s + this._items.length, this.reset(r)) : a >= c - this.settings.items && !0 === l && (r = s - this._items.length, this.reset(r)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() {
                    this.speed(this.duration(this.current(), r + o, i)), this.current(r + o), this.update()
                }, this), 30)
            } else this.speed(this.duration(this.current(), n, i)), this.current(n), this.update()
        }, a.prototype.next = function(t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, a.prototype.prev = function(t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, a.prototype.transitionEnd = function(t) {
            if (t !== i && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
            this.state.inMotion = !1, this.trigger("translated")
        }, a.prototype.viewport = function() {
            var i;
            if (this.options.responsiveBaseElement !== e) i = t(this.options.responsiveBaseElement).width();
            else if (e.innerWidth) i = e.innerWidth;
            else {
                if (!n.documentElement || !n.documentElement.clientWidth) throw "Can not detect viewport width.";
                i = n.documentElement.clientWidth
            }
            return i
        }, a.prototype.replace = function(e) {
            this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
                return 1 === this.nodeType
            }).each(t.proxy(function(t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, a.prototype.add = function(t, e) {
            e = e === i ? this._items.length : this.normalize(e, !0), this.trigger("add", {
                content: t,
                position: e
            }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
                content: t,
                position: e
            })
        }, a.prototype.remove = function(t) {
            (t = this.normalize(t, !0)) !== i && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, a.prototype.addTriggerableEvents = function() {
            var e = t.proxy(function(e, n) {
                return t.proxy(function(t) {
                    t.relatedTarget !== this && (this.suppress([n]), e.apply(this, [].slice.call(arguments, 1)), this.release([n]))
                }, this)
            }, this);
            t.each({
                next: this.next,
                prev: this.prev,
                to: this.to,
                destroy: this.destroy,
                refresh: this.refresh,
                replace: this.replace,
                add: this.add,
                remove: this.remove
            }, t.proxy(function(t, n) {
                this.$element.on(t + ".owl.carousel", e(n, t + ".owl.carousel"))
            }, this))
        }, a.prototype.watchVisibility = function() {
            function n(t) {
                return t.offsetWidth > 0 && t.offsetHeight > 0
            }
            n(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(function() {
                n(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
            }, this), 500))
        }, a.prototype.preloadAutoWidthImages = function(e) {
            var n, i, o, r;
            n = 0, i = this, e.each(function(s, a) {
                o = t(a), (r = new Image).onload = function() {
                    n++, o.attr("src", r.src), o.css("opacity", 1), n >= e.length && (i.state.imagesLoaded = !0, i.initialize())
                }, r.src = o.attr("src") || o.attr("data-src") || o.attr("data-src-retina")
            })
        }, a.prototype.destroy = function() {
            for (var i in this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), !1 !== this.settings.responsive && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd), this._plugins) this._plugins[i].destroy();
            (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(n).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
                return !1
            })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
        }, a.prototype.op = function(t, e, n) {
            var i = this.settings.rtl;
            switch (e) {
                case "<":
                    return i ? t > n : t < n;
                case ">":
                    return i ? t < n : t > n;
                case ">=":
                    return i ? t <= n : t >= n;
                case "<=":
                    return i ? t >= n : t <= n
            }
        }, a.prototype.on = function(t, e, n, i) {
            t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
        }, a.prototype.off = function(t, e, n, i) {
            t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
        }, a.prototype.trigger = function(e, n, i) {
            var o = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                r = t.camelCase(t.grep(["on", e, i], function(t) {
                    return t
                }).join("-").toLowerCase()),
                s = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({
                    relatedTarget: this
                }, o, n));
            return this._supress[e] || (t.each(this._plugins, function(t, e) {
                e.onTrigger && e.onTrigger(s)
            }), this.$element.trigger(s), this.settings && "function" == typeof this.settings[r] && this.settings[r].apply(this, s)), s
        }, a.prototype.suppress = function(e) {
            t.each(e, t.proxy(function(t, e) {
                this._supress[e] = !0
            }, this))
        }, a.prototype.release = function(e) {
            t.each(e, t.proxy(function(t, e) {
                delete this._supress[e]
            }, this))
        }, a.prototype.browserSupport = function() {
            if (this.support3d = c(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0], this.support3d) {
                this.transformVendor = c(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0];
                this.transitionEndVendor = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"][c(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
            }
            this.state.orientation = e.orientation
        }, t.fn.owlCarousel = function(e) {
            return this.each(function() {
                t(this).data("owlCarousel") || t(this).data("owlCarousel", new a(this, e))
            })
        }, t.fn.owlCarousel.Constructor = a
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var o = function(e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var n = this._core.settings, i = n.center && Math.ceil(n.items / 2) || n.items, o = n.center && -1 * i || 0, r = (e.property && e.property.value || this._core.current()) + o, s = this._core.clones().length, a = t.proxy(function(t, e) {
                                this.load(e)
                            }, this); o++ < i;) this.load(s / 2 + this._core.relative(r)), s && t.each(this._core.clones(this._core.relative(r++)), a)
                }, this)
            }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        o.Defaults = {
            lazyLoad: !1
        }, o.prototype.load = function(n) {
            var i = this._core.$stage.children().eq(n),
                o = i && i.find(".owl-lazy");
            !o || t.inArray(i.get(0), this._loaded) > -1 || (o.each(t.proxy(function(n, i) {
                var o, r = t(i),
                    s = e.devicePixelRatio > 1 && r.attr("data-src-retina") || r.attr("data-src");
                this._core.trigger("load", {
                    element: r,
                    url: s
                }, "lazy"), r.is("img") ? r.one("load.owl.lazy", t.proxy(function() {
                    r.css("opacity", 1), this._core.trigger("loaded", {
                        element: r,
                        url: s
                    }, "lazy")
                }, this)).attr("src", s) : ((o = new Image).onload = t.proxy(function() {
                    r.css({
                        "background-image": "url(" + s + ")",
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: r,
                        url: s
                    }, "lazy")
                }, this), o.src = s)
            }, this)), this._loaded.push(i.get(0)))
        }, o.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Lazy = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var o = function(e) {
            this._core = e, this._handlers = {
                "initialized.owl.carousel": t.proxy(function() {
                    this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    this._core.settings.autoHeight && "position" == t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": t.proxy(function(t) {
                    this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
                }, this)
            }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        o.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, o.prototype.update = function() {
            this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
        }, o.prototype.destroy = function() {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var o = function(e) {
            this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
                "resize.owl.carousel": t.proxy(function(t) {
                    this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
                }, this),
                "refresh.owl.carousel changed.owl.carousel": t.proxy(function(t) {
                    this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    var n = t(e.content).find(".owl-video");
                    n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
                }, this)
            }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
                this.play(t)
            }, this))
        };
        o.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, o.prototype.fetch = function(t, e) {
            var n = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
                i = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
                o = t.attr("data-width") || this._core.settings.videoWidth,
                r = t.attr("data-height") || this._core.settings.videoHeight,
                s = t.attr("href");
            if (!s) throw new Error("Missing video URL.");
            if ((i = s.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) n = "youtube";
            else {
                if (!(i[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
                n = "vimeo"
            }
            i = i[6], this._videos[s] = {
                type: n,
                id: i,
                width: o,
                height: r
            }, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
        }, o.prototype.thumbnail = function(e, n) {
            var i, o, r = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"' : "",
                s = e.find("img"),
                a = "src",
                l = "",
                c = this._core.settings,
                u = function(t) {
                    '<div class="owl-video-play-icon"></div>', i = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + a + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(i), e.after('<div class="owl-video-play-icon"></div>')
                };
            if (e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), s.length) return u(s.attr(a)), s.remove(), !1;
            "youtube" === n.type ? (o = "http://img.youtube.com/vi/" + n.id + "/hqdefault.jpg", u(o)) : "vimeo" === n.type && t.ajax({
                type: "GET",
                url: "http://vimeo.com/api/v2/video/" + n.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    o = t[0].thumbnail_large, u(o)
                }
            })
        }, o.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
        }, o.prototype.play = function(e) {
            this._core.trigger("play", null, "video"), this._playing && this.stop();
            var n, i, o = t(e.target || e.srcElement),
                r = o.closest("." + this._core.settings.itemClass),
                s = this._videos[r.attr("data-video")],
                a = s.width || "100%",
                l = s.height || this._core.$stage.height();
            "youtube" === s.type ? n = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + s.id + "?autoplay=1&v=" + s.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === s.type && (n = '<iframe src="http://player.vimeo.com/video/' + s.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), r.addClass("owl-video-playing"), this._playing = r, i = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + n + "</div>"), o.after(i)
        }, o.prototype.isInFullScreen = function() {
            var i = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
            return i && t(i).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(i && this._fullscreen && this._playing) && (this._fullscreen ? (this._fullscreen = !1, !1) : !this._playing || this._core.state.orientation === e.orientation || (this._core.state.orientation = e.orientation, !1))
        }, o.prototype.destroy = function() {
            var t, e;
            for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Video = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var o = function(e) {
            this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
                "change.owl.carousel": t.proxy(function(t) {
                    "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                    this.swapping = "translated" == t.type
                }, this),
                "translate.owl.carousel": t.proxy(function(t) {
                    this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        o.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, o.prototype.swap = function() {
            if (1 === this.core.settings.items && this.core.support3d) {
                this.core.speed(0);
                var e, n = t.proxy(this.clear, this),
                    i = this.core.$stage.children().eq(this.previous),
                    o = this.core.$stage.children().eq(this.next),
                    r = this.core.settings.animateIn,
                    s = this.core.settings.animateOut;
                this.core.current() !== this.previous && (s && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.css({
                    left: e + "px"
                }).addClass("animated owl-animated-out").addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", n)), r && o.addClass("animated owl-animated-in").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", n))
            }
        }, o.prototype.clear = function(e) {
            t(e.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
        }, o.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var o = function(e) {
            this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.handlers = {
                "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
                    this.autoplay()
                }, this),
                "play.owl.autoplay": t.proxy(function(t, e, n) {
                    this.play(e, n)
                }, this),
                "stop.owl.autoplay": t.proxy(function() {
                    this.stop()
                }, this),
                "mouseover.owl.autoplay": t.proxy(function() {
                    this.core.settings.autoplayHoverPause && this.pause()
                }, this),
                "mouseleave.owl.autoplay": t.proxy(function() {
                    this.core.settings.autoplayHoverPause && this.autoplay()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        o.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, o.prototype.autoplay = function() {
            this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() {
                this.play()
            }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
        }, o.prototype.play = function(t, i) {
            !0 !== n.hidden && (this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion || (!1 !== this.core.settings.autoplay ? this.core.next(this.core.settings.autoplaySpeed) : e.clearInterval(this.interval)))
        }, o.prototype.stop = function() {
            e.clearInterval(this.interval)
        }, o.prototype.pause = function() {
            e.clearInterval(this.interval)
        }, o.prototype.destroy = function() {
            var t, n;
            for (t in e.clearInterval(this.interval), this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.autoplay = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        "use strict";
        var o = function(e) {
            this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": t.proxy(function(e) {
                    this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
                }, this),
                "add.owl.carousel": t.proxy(function(e) {
                    this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
                }, this),
                "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) {
                    this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "change.owl.carousel": t.proxy(function(t) {
                    if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var e = this._core.current(),
                            n = this._core.maximum(),
                            i = this._core.minimum();
                        t.data = t.property.value > n ? e >= n ? i : n : t.property.value < i ? n : t.property.value
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    "position" == t.property.name && this.draw()
                }, this),
                "refreshed.owl.carousel": t.proxy(function() {
                    this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
                }, this)
            }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        o.Defaults = {
            nav: !1,
            navRewind: !0,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
            controlsClass: "owl-controls"
        }, o.prototype.initialize = function() {
            var e, n, i = this._core.settings;
            for (n in i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), i.navContainer && i.dotsContainer || (this._controls.$container = t("<div>").addClass(i.controlsClass).appendTo(this.$element)), this._controls.$indicators = i.dotsContainer ? t(i.dotsContainer) : t("<div>").hide().addClass(i.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
                    var n = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
                    e.preventDefault(), this.to(n, i.dotsSpeed)
                }, this)), e = i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + i.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(i.navClass[0]).html(i.navText[0]).hide().prependTo(e).on("click", t.proxy(function(t) {
                    this.prev(i.navSpeed)
                }, this)), this._controls.$next.addClass(i.navClass[1]).html(i.navText[1]).hide().appendTo(e).on("click", t.proxy(function(t) {
                    this.next(i.navSpeed)
                }, this)), this._overrides) this._core[n] = t.proxy(this[n], this)
        }, o.prototype.destroy = function() {
            var t, e, n, i;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (i in this.overides) this._core[i] = this._overrides[i];
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, o.prototype.update = function() {
            var t, e, n = this._core.settings,
                i = this._core.clones().length / 2,
                o = i + this._core.items().length,
                r = n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items;
            if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || "page" == n.slideBy)
                for (this._pages = [], t = i, e = 0, 0; t < o; t++)(e >= r || 0 === e) && (this._pages.push({
                    start: t - i,
                    end: t - i + r - 1
                }), e = 0, 0), e += this._core.mergers(this._core.relative(t))
        }, o.prototype.draw = function() {
            var e, n, i = "",
                o = this._core.settings,
                r = (this._core.$stage.children(), this._core.relative(this._core.current()));
            if (!o.nav || o.loop || o.navRewind || (this._controls.$previous.toggleClass("disabled", r <= 0), this._controls.$next.toggleClass("disabled", r >= this._core.maximum())), this._controls.$previous.toggle(o.nav), this._controls.$next.toggle(o.nav), o.dots) {
                if (e = this._pages.length - this._controls.$indicators.children().length, o.dotData && 0 !== e) {
                    for (n = 0; n < this._controls.$indicators.children().length; n++) i += this._templates[this._core.relative(n)];
                    this._controls.$indicators.html(i)
                } else e > 0 ? (i = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(i)) : e < 0 && this._controls.$indicators.children().slice(e).remove();
                this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
            }
            this._controls.$indicators.toggle(o.dots)
        }, o.prototype.onTrigger = function(e) {
            var n = this._core.settings;
            e.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: n && (n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items)
            }
        }, o.prototype.current = function() {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, function(t) {
                return t.start <= e && t.end >= e
            }).pop()
        }, o.prototype.getPosition = function(e) {
            var n, i, o = this._core.settings;
            return "page" == o.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += o.slideBy : n -= o.slideBy), n
        }, o.prototype.next = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
        }, o.prototype.prev = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
        }, o.prototype.to = function(e, n, i) {
            var o;
            i ? t.proxy(this._overrides.to, this._core)(e, n) : (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, n))
        }, t.fn.owlCarousel.Constructor.Plugins.Navigation = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        "use strict";
        var o = function(n) {
            this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function() {
                    "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    var n = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                    this._hashes[n] = e.content
                }, this)
            }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
                var t = e.location.hash.substring(1),
                    n = this._core.$stage.children(),
                    i = this._hashes[t] && n.index(this._hashes[t]) || 0;
                if (!t) return !1;
                this._core.to(i, !1, !0)
            }, this))
        };
        o.Defaults = {
            URLhashListener: !1
        }, o.prototype.destroy = function() {
            var n, i;
            for (n in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(n, this._handlers[n]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Hash = o
    }(window.Zepto || window.jQuery, window, document),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function(t) {
        function e(e) {
            var s = e || window.event,
                a = l.call(arguments, 1),
                c = 0,
                d = 0,
                h = 0,
                f = 0,
                p = 0,
                g = 0;
            if ((e = t.event.fix(s)).type = "mousewheel", "detail" in s && (h = -1 * s.detail), "wheelDelta" in s && (h = s.wheelDelta), "wheelDeltaY" in s && (h = s.wheelDeltaY), "wheelDeltaX" in s && (d = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (d = -1 * h, h = 0), c = 0 === h ? d : h, "deltaY" in s && (c = h = -1 * s.deltaY), "deltaX" in s && (d = s.deltaX, 0 === h && (c = -1 * d)), 0 !== h || 0 !== d) {
                if (1 === s.deltaMode) {
                    var m = t.data(this, "mousewheel-line-height");
                    c *= m, h *= m, d *= m
                } else if (2 === s.deltaMode) {
                    var v = t.data(this, "mousewheel-page-height");
                    c *= v, h *= v, d *= v
                }
                if (f = Math.max(Math.abs(h), Math.abs(d)), (!r || r > f) && (r = f, i(s, f) && (r /= 40)), i(s, f) && (c /= 40, d /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / r), d = Math[d >= 1 ? "floor" : "ceil"](d / r), h = Math[h >= 1 ? "floor" : "ceil"](h / r), u.settings.normalizeOffset && this.getBoundingClientRect) {
                    var y = this.getBoundingClientRect();
                    p = e.clientX - y.left, g = e.clientY - y.top
                }
                return e.deltaX = d, e.deltaY = h, e.deltaFactor = r, e.offsetX = p, e.offsetY = g, e.deltaMode = 0, a.unshift(e, c, d, h), o && clearTimeout(o), o = setTimeout(n, 200), (t.event.dispatch || t.event.handle).apply(this, a)
            }
        }

        function n() {
            r = null
        }

        function i(t, e) {
            return u.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
        }
        var o, r, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (t.event.fixHooks)
            for (var c = s.length; c;) t.event.fixHooks[s[--c]] = t.event.mouseHooks;
        var u = t.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var n = a.length; n;) this.addEventListener(a[--n], e, !1);
                else this.onmousewheel = e;
                t.data(this, "mousewheel-line-height", u.getLineHeight(this)), t.data(this, "mousewheel-page-height", u.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var n = a.length; n;) this.removeEventListener(a[--n], e, !1);
                else this.onmousewheel = null;
                t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(e) {
                var n = t(e),
                    i = n["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                return i.length || (i = t("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
            },
            getPageHeight: function(e) {
                return t(e).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        t.fn.extend({
            mousewheel: function(t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function(t) {
                return this.unbind("mousewheel", t)
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function(t) {
        function e(e) {
            var s = e || window.event,
                a = l.call(arguments, 1),
                c = 0,
                d = 0,
                h = 0,
                f = 0,
                p = 0,
                g = 0;
            if ((e = t.event.fix(s)).type = "mousewheel", "detail" in s && (h = -1 * s.detail), "wheelDelta" in s && (h = s.wheelDelta), "wheelDeltaY" in s && (h = s.wheelDeltaY), "wheelDeltaX" in s && (d = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (d = -1 * h, h = 0), c = 0 === h ? d : h, "deltaY" in s && (c = h = -1 * s.deltaY), "deltaX" in s && (d = s.deltaX, 0 === h && (c = -1 * d)), 0 !== h || 0 !== d) {
                if (1 === s.deltaMode) {
                    var m = t.data(this, "mousewheel-line-height");
                    c *= m, h *= m, d *= m
                } else if (2 === s.deltaMode) {
                    var v = t.data(this, "mousewheel-page-height");
                    c *= v, h *= v, d *= v
                }
                if (f = Math.max(Math.abs(h), Math.abs(d)), (!r || r > f) && (r = f, i(s, f) && (r /= 40)), i(s, f) && (c /= 40, d /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / r), d = Math[d >= 1 ? "floor" : "ceil"](d / r), h = Math[h >= 1 ? "floor" : "ceil"](h / r), u.settings.normalizeOffset && this.getBoundingClientRect) {
                    var y = this.getBoundingClientRect();
                    p = e.clientX - y.left, g = e.clientY - y.top
                }
                return e.deltaX = d, e.deltaY = h, e.deltaFactor = r, e.offsetX = p, e.offsetY = g, e.deltaMode = 0, a.unshift(e, c, d, h), o && clearTimeout(o), o = setTimeout(n, 200), (t.event.dispatch || t.event.handle).apply(this, a)
            }
        }

        function n() {
            r = null
        }

        function i(t, e) {
            return u.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
        }
        var o, r, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (t.event.fixHooks)
            for (var c = s.length; c;) t.event.fixHooks[s[--c]] = t.event.mouseHooks;
        var u = t.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var n = a.length; n;) this.addEventListener(a[--n], e, !1);
                else this.onmousewheel = e;
                t.data(this, "mousewheel-line-height", u.getLineHeight(this)), t.data(this, "mousewheel-page-height", u.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var n = a.length; n;) this.removeEventListener(a[--n], e, !1);
                else this.onmousewheel = null;
                t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(e) {
                var n = t(e),
                    i = n["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                return i.length || (i = t("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
            },
            getPageHeight: function(e) {
                return t(e).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        t.fn.extend({
            mousewheel: function(t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function(t) {
                return this.unbind("mousewheel", t)
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t : t(jQuery, window, document)
    }(function(t) {
        var e, n, i;
        e = "function" == typeof define && define.amd, n = "undefined" != typeof module && module.exports, i = "https:" == document.location.protocol ? "https:" : "http:", e || (n ? require("jquery-mousewheel")(t) : t.event.special.mousewheel || t("head").append(decodeURI("%3Cscript src=" + i + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),
            function() {
                var e, n = "mCustomScrollbar",
                    i = "mCS",
                    o = ".mCustomScrollbar",
                    r = {
                        setTop: 0,
                        setLeft: 0,
                        axis: "y",
                        scrollbarPosition: "inside",
                        scrollInertia: 950,
                        autoDraggerLength: !0,
                        alwaysShowScrollbar: 0,
                        snapOffset: 0,
                        mouseWheel: {
                            enable: !0,
                            scrollAmount: "auto",
                            axis: "y",
                            deltaFactor: "auto",
                            disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                        },
                        scrollButtons: {
                            scrollType: "stepless",
                            scrollAmount: "auto"
                        },
                        keyboard: {
                            enable: !0,
                            scrollType: "stepless",
                            scrollAmount: "auto"
                        },
                        contentTouchScroll: 25,
                        documentTouchScroll: !0,
                        advanced: {
                            autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                            updateOnContentResize: !0,
                            updateOnImageLoad: "auto",
                            autoUpdateTimeout: 60
                        },
                        theme: "light",
                        callbacks: {
                            onTotalScrollOffset: 0,
                            onTotalScrollBackOffset: 0,
                            alwaysTriggerOffsets: !0
                        }
                    },
                    s = 0,
                    a = {},
                    l = window.attachEvent && !window.addEventListener ? 1 : 0,
                    c = !1,
                    u = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
                    d = {
                        init: function(e) {
                            var e = t.extend(!0, {}, r, e),
                                n = h.call(this);
                            if (e.live) {
                                var l = e.liveSelector || this.selector || o,
                                    c = t(l);
                                if ("off" === e.live) return void p(l);
                                a[l] = setTimeout(function() {
                                    c.mCustomScrollbar(e), "once" === e.live && c.length && p(l)
                                }, 500)
                            } else p(l);
                            return e.setWidth = e.set_width ? e.set_width : e.setWidth, e.setHeight = e.set_height ? e.set_height : e.setHeight, e.axis = e.horizontalScroll ? "x" : g(e.axis), e.scrollInertia = e.scrollInertia > 0 && e.scrollInertia < 17 ? 17 : e.scrollInertia, "object" != typeof e.mouseWheel && 1 == e.mouseWheel && (e.mouseWheel = {
                                enable: !0,
                                scrollAmount: "auto",
                                axis: "y",
                                preventDefault: !1,
                                deltaFactor: "auto",
                                normalizeDelta: !1,
                                invert: !1
                            }), e.mouseWheel.scrollAmount = e.mouseWheelPixels ? e.mouseWheelPixels : e.mouseWheel.scrollAmount, e.mouseWheel.normalizeDelta = e.advanced.normalizeMouseWheelDelta ? e.advanced.normalizeMouseWheelDelta : e.mouseWheel.normalizeDelta, e.scrollButtons.scrollType = m(e.scrollButtons.scrollType), f(e), t(n).each(function() {
                                var n = t(this);
                                if (!n.data(i)) {
                                    n.data(i, {
                                        idx: ++s,
                                        opt: e,
                                        scrollRatio: {
                                            y: null,
                                            x: null
                                        },
                                        overflowed: null,
                                        contentReset: {
                                            y: null,
                                            x: null
                                        },
                                        bindEvents: !1,
                                        tweenRunning: !1,
                                        sequential: {},
                                        langDir: n.css("direction"),
                                        cbOffsets: null,
                                        trigger: null,
                                        poll: {
                                            size: {
                                                o: 0,
                                                n: 0
                                            },
                                            img: {
                                                o: 0,
                                                n: 0
                                            },
                                            change: {
                                                o: 0,
                                                n: 0
                                            }
                                        }
                                    });
                                    var o = n.data(i),
                                        r = o.opt,
                                        a = n.data("mcs-axis"),
                                        l = n.data("mcs-scrollbar-position"),
                                        c = n.data("mcs-theme");
                                    a && (r.axis = a), l && (r.scrollbarPosition = l), c && (r.theme = c, f(r)), v.call(this), o && r.callbacks.onCreate && "function" == typeof r.callbacks.onCreate && r.callbacks.onCreate.call(this), t("#mCSB_" + o.idx + "_container img:not(." + u[2] + ")").addClass(u[2]), d.update.call(null, n)
                                }
                            })
                        },
                        update: function(e, n) {
                            var o = e || h.call(this);
                            return t(o).each(function() {
                                var e = t(this);
                                if (e.data(i)) {
                                    var o = e.data(i),
                                        r = o.opt,
                                        s = t("#mCSB_" + o.idx + "_container"),
                                        a = t("#mCSB_" + o.idx),
                                        l = [t("#mCSB_" + o.idx + "_dragger_vertical"), t("#mCSB_" + o.idx + "_dragger_horizontal")];
                                    if (!s.length) return;
                                    o.tweenRunning && Y(e), n && o && r.callbacks.onBeforeUpdate && "function" == typeof r.callbacks.onBeforeUpdate && r.callbacks.onBeforeUpdate.call(this), e.hasClass(u[3]) && e.removeClass(u[3]), e.hasClass(u[4]) && e.removeClass(u[4]), a.css("max-height", "none"), a.height() !== e.height() && a.css("max-height", e.height()), w.call(this), "y" === r.axis || r.advanced.autoExpandHorizontalScroll || s.css("width", y(s)), o.overflowed = S.call(this), D.call(this), r.autoDraggerLength && _.call(this), x.call(this), E.call(this);
                                    var c = [Math.abs(s[0].offsetTop), Math.abs(s[0].offsetLeft)];
                                    "x" !== r.axis && (o.overflowed[0] ? l[0].height() > l[0].parent().height() ? T.call(this) : (Q(e, c[0].toString(), {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    }), o.contentReset.y = null) : (T.call(this), "y" === r.axis ? k.call(this) : "yx" === r.axis && o.overflowed[1] && Q(e, c[1].toString(), {
                                        dir: "x",
                                        dur: 0,
                                        overwrite: "none"
                                    }))), "y" !== r.axis && (o.overflowed[1] ? l[1].width() > l[1].parent().width() ? T.call(this) : (Q(e, c[1].toString(), {
                                        dir: "x",
                                        dur: 0,
                                        overwrite: "none"
                                    }), o.contentReset.x = null) : (T.call(this), "x" === r.axis ? k.call(this) : "yx" === r.axis && o.overflowed[0] && Q(e, c[0].toString(), {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    }))), n && o && (2 === n && r.callbacks.onImageLoad && "function" == typeof r.callbacks.onImageLoad ? r.callbacks.onImageLoad.call(this) : 3 === n && r.callbacks.onSelectorChange && "function" == typeof r.callbacks.onSelectorChange ? r.callbacks.onSelectorChange.call(this) : r.callbacks.onUpdate && "function" == typeof r.callbacks.onUpdate && r.callbacks.onUpdate.call(this)), U.call(this)
                                }
                            })
                        },
                        scrollTo: function(e, n) {
                            if (void 0 !== e && null != e) {
                                var o = h.call(this);
                                return t(o).each(function() {
                                    var o = t(this);
                                    if (o.data(i)) {
                                        var r = o.data(i),
                                            s = r.opt,
                                            a = {
                                                trigger: "external",
                                                scrollInertia: s.scrollInertia,
                                                scrollEasing: "mcsEaseInOut",
                                                moveDragger: !1,
                                                timeout: 60,
                                                callbacks: !0,
                                                onStart: !0,
                                                onUpdate: !0,
                                                onComplete: !0
                                            },
                                            l = t.extend(!0, {}, a, n),
                                            c = F.call(this, e),
                                            u = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                                        c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), l.moveDragger && (c[0] *= r.scrollRatio.y, c[1] *= r.scrollRatio.x), l.dur = it() ? 0 : u, setTimeout(function() {
                                            null !== c[0] && void 0 !== c[0] && "x" !== s.axis && r.overflowed[0] && (l.dir = "y", l.overwrite = "all", Q(o, c[0].toString(), l)), null !== c[1] && void 0 !== c[1] && "y" !== s.axis && r.overflowed[1] && (l.dir = "x", l.overwrite = "none", Q(o, c[1].toString(), l))
                                        }, l.timeout)
                                    }
                                })
                            }
                        },
                        stop: function() {
                            var e = h.call(this);
                            return t(e).each(function() {
                                var e = t(this);
                                e.data(i) && Y(e)
                            })
                        },
                        disable: function(e) {
                            var n = h.call(this);
                            return t(n).each(function() {
                                var n = t(this);
                                n.data(i) && (n.data(i), U.call(this, "remove"), k.call(this), e && T.call(this), D.call(this, !0), n.addClass(u[3]))
                            })
                        },
                        destroy: function() {
                            var e = h.call(this);
                            return t(e).each(function() {
                                var o = t(this);
                                if (o.data(i)) {
                                    var r = o.data(i),
                                        s = r.opt,
                                        a = t("#mCSB_" + r.idx),
                                        l = t("#mCSB_" + r.idx + "_container"),
                                        c = t(".mCSB_" + r.idx + "_scrollbar");
                                    s.live && p(s.liveSelector || t(e).selector), U.call(this, "remove"), k.call(this), T.call(this), o.removeData(i), Z(this, "mcs"), c.remove(), l.find("img." + u[2]).removeClass(u[2]), a.replaceWith(l.contents()), o.removeClass(n + " _" + i + "_" + r.idx + " " + u[6] + " " + u[7] + " " + u[5] + " " + u[3]).addClass(u[4])
                                }
                            })
                        }
                    },
                    h = function() {
                        return "object" != typeof t(this) || t(this).length < 1 ? o : this
                    },
                    f = function(e) {
                        e.autoDraggerLength = !(t.inArray(e.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) > -1) && e.autoDraggerLength, e.autoExpandScrollbar = !(t.inArray(e.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]) > -1) && e.autoExpandScrollbar, e.scrollButtons.enable = !(t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1) && e.scrollButtons.enable, e.autoHideScrollbar = t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1 || e.autoHideScrollbar, e.scrollbarPosition = t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1 ? "outside" : e.scrollbarPosition
                    },
                    p = function(t) {
                        a[t] && (clearTimeout(a[t]), Z(a, t))
                    },
                    g = function(t) {
                        return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
                    },
                    m = function(t) {
                        return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
                    },
                    v = function() {
                        var e = t(this),
                            o = e.data(i),
                            r = o.opt,
                            s = r.autoExpandScrollbar ? " " + u[1] + "_expand" : "",
                            a = ["<div id='mCSB_" + o.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_vertical" + s + "'><div class='" + u[12] + "'><div id='mCSB_" + o.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + o.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_horizontal" + s + "'><div class='" + u[12] + "'><div id='mCSB_" + o.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                            l = "yx" === r.axis ? "mCSB_vertical_horizontal" : "x" === r.axis ? "mCSB_horizontal" : "mCSB_vertical",
                            c = "yx" === r.axis ? a[0] + a[1] : "x" === r.axis ? a[1] : a[0],
                            d = "yx" === r.axis ? "<div id='mCSB_" + o.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                            h = r.autoHideScrollbar ? " " + u[6] : "",
                            f = "x" !== r.axis && "rtl" === o.langDir ? " " + u[7] : "";
                        r.setWidth && e.css("width", r.setWidth), r.setHeight && e.css("height", r.setHeight), r.setLeft = "y" !== r.axis && "rtl" === o.langDir ? "989999px" : r.setLeft, e.addClass(n + " _" + i + "_" + o.idx + h + f).wrapInner("<div id='mCSB_" + o.idx + "' class='mCustomScrollBox mCS-" + r.theme + " " + l + "'><div id='mCSB_" + o.idx + "_container' class='mCSB_container' style='position:relative; top:" + r.setTop + "; left:" + r.setLeft + ";' dir='" + o.langDir + "' /></div>");
                        var p = t("#mCSB_" + o.idx),
                            g = t("#mCSB_" + o.idx + "_container");
                        "y" === r.axis || r.advanced.autoExpandHorizontalScroll || g.css("width", y(g)), "outside" === r.scrollbarPosition ? ("static" === e.css("position") && e.css("position", "relative"), e.css("overflow", "visible"), p.addClass("mCSB_outside").after(c)) : (p.addClass("mCSB_inside").append(c), g.wrap(d)), b.call(this);
                        var m = [t("#mCSB_" + o.idx + "_dragger_vertical"), t("#mCSB_" + o.idx + "_dragger_horizontal")];
                        m[0].css("min-height", m[0].height()), m[1].css("min-width", m[1].width())
                    },
                    y = function(e) {
                        var n = [e[0].scrollWidth, Math.max.apply(Math, e.children().map(function() {
                                return t(this).outerWidth(!0)
                            }).get())],
                            i = e.parent().width();
                        return n[0] > i ? n[0] : n[1] > i ? n[1] : "100%"
                    },
                    w = function() {
                        var e = t(this),
                            n = e.data(i),
                            o = n.opt,
                            r = t("#mCSB_" + n.idx + "_container");
                        if (o.advanced.autoExpandHorizontalScroll && "y" !== o.axis) {
                            r.css({
                                width: "auto",
                                "min-width": 0,
                                "overflow-x": "scroll"
                            });
                            var s = Math.ceil(r[0].scrollWidth);
                            3 === o.advanced.autoExpandHorizontalScroll || 2 !== o.advanced.autoExpandHorizontalScroll && s > r.parent().width() ? r.css({
                                width: s,
                                "min-width": "100%",
                                "overflow-x": "inherit"
                            }) : r.css({
                                "overflow-x": "inherit",
                                position: "absolute"
                            }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                width: Math.ceil(r[0].getBoundingClientRect().right + .4) - Math.floor(r[0].getBoundingClientRect().left),
                                "min-width": "100%",
                                position: "relative"
                            }).unwrap()
                        }
                    },
                    b = function() {
                        var e = t(this),
                            n = e.data(i),
                            o = n.opt,
                            r = t(".mCSB_" + n.idx + "_scrollbar:first"),
                            s = et(o.scrollButtons.tabindex) ? "tabindex='" + o.scrollButtons.tabindex + "'" : "",
                            a = ["<a href='#' class='" + u[13] + "' " + s + " />", "<a href='#' class='" + u[14] + "' " + s + " />", "<a href='#' class='" + u[15] + "' " + s + " />", "<a href='#' class='" + u[16] + "' " + s + " />"],
                            l = ["x" === o.axis ? a[2] : a[0], "x" === o.axis ? a[3] : a[1], a[2], a[3]];
                        o.scrollButtons.enable && r.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
                    },
                    _ = function() {
                        var e = t(this),
                            n = e.data(i),
                            o = t("#mCSB_" + n.idx),
                            r = t("#mCSB_" + n.idx + "_container"),
                            s = [t("#mCSB_" + n.idx + "_dragger_vertical"), t("#mCSB_" + n.idx + "_dragger_horizontal")],
                            a = [o.height() / r.outerHeight(!1), o.width() / r.outerWidth(!1)],
                            c = [parseInt(s[0].css("min-height")), Math.round(a[0] * s[0].parent().height()), parseInt(s[1].css("min-width")), Math.round(a[1] * s[1].parent().width())],
                            u = l && c[1] < c[0] ? c[0] : c[1],
                            d = l && c[3] < c[2] ? c[2] : c[3];
                        s[0].css({
                            height: u,
                            "max-height": s[0].parent().height() - 10
                        }).find(".mCSB_dragger_bar").css({
                            "line-height": c[0] + "px"
                        }), s[1].css({
                            width: d,
                            "max-width": s[1].parent().width() - 10
                        })
                    },
                    x = function() {
                        var e = t(this),
                            n = e.data(i),
                            o = t("#mCSB_" + n.idx),
                            r = t("#mCSB_" + n.idx + "_container"),
                            s = [t("#mCSB_" + n.idx + "_dragger_vertical"), t("#mCSB_" + n.idx + "_dragger_horizontal")],
                            a = [r.outerHeight(!1) - o.height(), r.outerWidth(!1) - o.width()],
                            l = [a[0] / (s[0].parent().height() - s[0].height()), a[1] / (s[1].parent().width() - s[1].width())];
                        n.scrollRatio = {
                            y: l[0],
                            x: l[1]
                        }
                    },
                    C = function(t, e, n) {
                        var i = n ? u[0] + "_expanded" : "",
                            o = t.closest(".mCSB_scrollTools");
                        "active" === e ? (t.toggleClass(u[0] + " " + i), o.toggleClass(u[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(u[0]), o.removeClass(u[1])) : (t.addClass(u[0]), o.addClass(u[1])))
                    },
                    S = function() {
                        var e = t(this),
                            n = e.data(i),
                            o = t("#mCSB_" + n.idx),
                            r = t("#mCSB_" + n.idx + "_container"),
                            s = null == n.overflowed ? r.height() : r.outerHeight(!1),
                            a = null == n.overflowed ? r.width() : r.outerWidth(!1),
                            l = r[0].scrollHeight,
                            c = r[0].scrollWidth;
                        return l > s && (s = l), c > a && (a = c), [s > o.height(), a > o.width()]
                    },
                    T = function() {
                        var e = t(this),
                            n = e.data(i),
                            o = n.opt,
                            r = t("#mCSB_" + n.idx),
                            s = t("#mCSB_" + n.idx + "_container"),
                            a = [t("#mCSB_" + n.idx + "_dragger_vertical"), t("#mCSB_" + n.idx + "_dragger_horizontal")];
                        if (Y(e), ("x" !== o.axis && !n.overflowed[0] || "y" === o.axis && n.overflowed[0]) && (a[0].add(s).css("top", 0), Q(e, "_resetY")), "y" !== o.axis && !n.overflowed[1] || "x" === o.axis && n.overflowed[1]) {
                            var l = dx = 0;
                            "rtl" === n.langDir && (l = r.width() - s.outerWidth(!1), dx = Math.abs(l / n.scrollRatio.x)), s.css("left", l), a[1].css("left", dx), Q(e, "_resetX")
                        }
                    },
                    E = function() {
                        var e, n = t(this),
                            o = n.data(i),
                            r = o.opt;
                        o.bindEvents || (A.call(this), r.contentTouchScroll && N.call(this), O.call(this), r.mouseWheel.enable && function i() {
                            e = setTimeout(function() {
                                t.event.special.mousewheel ? (clearTimeout(e), M.call(n[0])) : i()
                            }, 100)
                        }(), H.call(this), z.call(this), r.advanced.autoScrollOnFocus && W.call(this), r.scrollButtons.enable && R.call(this), r.keyboard.enable && $.call(this), o.bindEvents = !0)
                    },
                    k = function() {
                        var e = t(this),
                            n = e.data(i),
                            o = n.opt,
                            r = i + "_" + n.idx,
                            s = ".mCSB_" + n.idx + "_scrollbar",
                            a = t("#mCSB_" + n.idx + ",#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper," + s + " ." + u[12] + ",#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal," + s + ">a"),
                            l = t("#mCSB_" + n.idx + "_container");
                        o.advanced.releaseDraggableSelectors && a.add(t(o.advanced.releaseDraggableSelectors)), o.advanced.extraDraggableSelectors && a.add(t(o.advanced.extraDraggableSelectors)), n.bindEvents && (t(document).add(t(!P() || top.document)).unbind("." + r), a.each(function() {
                            t(this).unbind("." + r)
                        }), clearTimeout(e[0]._focusTimeout), Z(e[0], "_focusTimeout"), clearTimeout(n.sequential.step), Z(n.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), Z(l[0], "onCompleteTimeout"), n.bindEvents = !1)
                    },
                    D = function(e) {
                        var n = t(this),
                            o = n.data(i),
                            r = o.opt,
                            s = t("#mCSB_" + o.idx + "_container_wrapper"),
                            a = s.length ? s : t("#mCSB_" + o.idx + "_container"),
                            l = [t("#mCSB_" + o.idx + "_scrollbar_vertical"), t("#mCSB_" + o.idx + "_scrollbar_horizontal")],
                            c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                        "x" !== r.axis && (o.overflowed[0] && !e ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), a.removeClass(u[8] + " " + u[10])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[0].css("display", "none"), a.removeClass(u[10])) : (l[0].css("display", "none"), a.addClass(u[10])), a.addClass(u[8]))), "y" !== r.axis && (o.overflowed[1] && !e ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), a.removeClass(u[9] + " " + u[11])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[1].css("display", "none"), a.removeClass(u[11])) : (l[1].css("display", "none"), a.addClass(u[11])), a.addClass(u[9]))), o.overflowed[0] || o.overflowed[1] ? n.removeClass(u[5]) : n.addClass(u[5])
                    },
                    I = function(e) {
                        var n = e.type,
                            i = e.target.ownerDocument !== document && null !== frameElement ? [t(frameElement).offset().top, t(frameElement).offset().left] : null,
                            o = P() && e.target.ownerDocument !== top.document && null !== frameElement ? [t(e.view.frameElement).offset().top, t(e.view.frameElement).offset().left] : [0, 0];
                        switch (n) {
                            case "pointerdown":
                            case "MSPointerDown":
                            case "pointermove":
                            case "MSPointerMove":
                            case "pointerup":
                            case "MSPointerUp":
                                return i ? [e.originalEvent.pageY - i[0] + o[0], e.originalEvent.pageX - i[1] + o[1], !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                            case "touchstart":
                            case "touchmove":
                            case "touchend":
                                var r = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                                    s = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                                return e.target.ownerDocument !== document ? [r.screenY, r.screenX, s > 1] : [r.pageY, r.pageX, s > 1];
                            default:
                                return i ? [e.pageY - i[0] + o[0], e.pageX - i[1] + o[1], !1] : [e.pageY, e.pageX, !1]
                        }
                    },
                    A = function() {
                        function e(t, e, i, o) {
                            if (f[0].idleTimer = u.scrollInertia < 233 ? 250 : 0, n.attr("id") === h[1]) var r = "x",
                                l = (n[0].offsetLeft - e + o) * a.scrollRatio.x;
                            else var r = "y",
                                l = (n[0].offsetTop - t + i) * a.scrollRatio.y;
                            Q(s, l.toString(), {
                                dir: r,
                                drag: !0
                            })
                        }
                        var n, o, r, s = t(this),
                            a = s.data(i),
                            u = a.opt,
                            d = i + "_" + a.idx,
                            h = ["mCSB_" + a.idx + "_dragger_vertical", "mCSB_" + a.idx + "_dragger_horizontal"],
                            f = t("#mCSB_" + a.idx + "_container"),
                            p = t("#" + h[0] + ",#" + h[1]),
                            g = u.advanced.releaseDraggableSelectors ? p.add(t(u.advanced.releaseDraggableSelectors)) : p,
                            m = u.advanced.extraDraggableSelectors ? t(!P() || top.document).add(t(u.advanced.extraDraggableSelectors)) : t(!P() || top.document);
                        p.bind("contextmenu." + d, function(t) {
                            t.preventDefault()
                        }).bind("mousedown." + d + " touchstart." + d + " pointerdown." + d + " MSPointerDown." + d, function(e) {
                            if (e.stopImmediatePropagation(), e.preventDefault(), J(e)) {
                                c = !0, l && (document.onselectstart = function() {
                                    return !1
                                }), j.call(f, !1), Y(s);
                                var i = (n = t(this)).offset(),
                                    a = I(e)[0] - i.top,
                                    d = I(e)[1] - i.left,
                                    h = n.height() + i.top,
                                    p = n.width() + i.left;
                                h > a && a > 0 && p > d && d > 0 && (o = a, r = d), C(n, "active", u.autoExpandScrollbar)
                            }
                        }).bind("touchmove." + d, function(t) {
                            t.stopImmediatePropagation(), t.preventDefault();
                            var i = n.offset(),
                                s = I(t)[0] - i.top,
                                a = I(t)[1] - i.left;
                            e(o, r, s, a)
                        }), t(document).add(m).bind("mousemove." + d + " pointermove." + d + " MSPointerMove." + d, function(t) {
                            if (n) {
                                var i = n.offset(),
                                    s = I(t)[0] - i.top,
                                    a = I(t)[1] - i.left;
                                if (o === s && r === a) return;
                                e(o, r, s, a)
                            }
                        }).add(g).bind("mouseup." + d + " touchend." + d + " pointerup." + d + " MSPointerUp." + d, function() {
                            n && (C(n, "active", u.autoExpandScrollbar), n = null), c = !1, l && (document.onselectstart = null), j.call(f, !0)
                        })
                    },
                    N = function() {
                        function n(t) {
                            if (!tt(t) || c || I(t)[2]) e = 0;
                            else {
                                e = 1, x = 0, C = 0, u = 1, S.removeClass("mCS_touch_action");
                                var n = A.offset();
                                d = I(t)[0] - n.top, h = I(t)[1] - n.left, B = [I(t)[0], I(t)[1]]
                            }
                        }

                        function o(t) {
                            if (tt(t) && !c && !I(t)[2] && (E.documentTouchScroll || t.preventDefault(), t.stopImmediatePropagation(), (!C || x) && u)) {
                                m = K();
                                var e = D.offset(),
                                    n = I(t)[0] - e.top,
                                    i = I(t)[1] - e.left,
                                    o = "mcsLinearOut";
                                if (O.push(n), M.push(i), B[2] = Math.abs(I(t)[0] - B[0]), B[3] = Math.abs(I(t)[1] - B[1]), T.overflowed[0]) var r = N[0].parent().height() - N[0].height(),
                                    s = d - n > 0 && n - d > -r * T.scrollRatio.y && (2 * B[3] < B[2] || "yx" === E.axis);
                                if (T.overflowed[1]) var a = N[1].parent().width() - N[1].width(),
                                    f = h - i > 0 && i - h > -a * T.scrollRatio.x && (2 * B[2] < B[3] || "yx" === E.axis);
                                s || f ? (z || t.preventDefault(), x = 1) : (C = 1, S.addClass("mCS_touch_action")), z && t.preventDefault(), b = "yx" === E.axis ? [d - n, h - i] : "x" === E.axis ? [null, h - i] : [d - n, null], A[0].idleTimer = 250, T.overflowed[0] && l(b[0], L, o, "y", "all", !0), T.overflowed[1] && l(b[1], L, o, "x", j, !0)
                            }
                        }

                        function r(t) {
                            if (!tt(t) || c || I(t)[2]) e = 0;
                            else {
                                e = 1, t.stopImmediatePropagation(), Y(S), g = K();
                                var n = D.offset();
                                f = I(t)[0] - n.top, p = I(t)[1] - n.left, O = [], M = []
                            }
                        }

                        function s(t) {
                            if (tt(t) && !c && !I(t)[2]) {
                                u = 0, t.stopImmediatePropagation(), x = 0, C = 0, v = K();
                                var e = D.offset(),
                                    n = I(t)[0] - e.top,
                                    i = I(t)[1] - e.left;
                                if (!(v - m > 30)) {
                                    var o = "mcsEaseOut",
                                        r = 2.5 > (w = 1e3 / (v - g)),
                                        s = r ? [O[O.length - 2], M[M.length - 2]] : [0, 0];
                                    y = r ? [n - s[0], i - s[1]] : [n - f, i - p];
                                    var d = [Math.abs(y[0]), Math.abs(y[1])];
                                    w = r ? [Math.abs(y[0] / 4), Math.abs(y[1] / 4)] : [w, w];
                                    var h = [Math.abs(A[0].offsetTop) - y[0] * a(d[0] / w[0], w[0]), Math.abs(A[0].offsetLeft) - y[1] * a(d[1] / w[1], w[1])];
                                    b = "yx" === E.axis ? [h[0], h[1]] : "x" === E.axis ? [null, h[1]] : [h[0], null], _ = [4 * d[0] + E.scrollInertia, 4 * d[1] + E.scrollInertia];
                                    var S = parseInt(E.contentTouchScroll) || 0;
                                    b[0] = d[0] > S ? b[0] : 0, b[1] = d[1] > S ? b[1] : 0, T.overflowed[0] && l(b[0], _[0], o, "y", j, !1), T.overflowed[1] && l(b[1], _[1], o, "x", j, !1)
                                }
                            }
                        }

                        function a(t, e) {
                            var n = [1.5 * e, 2 * e, e / 1.5, e / 2];
                            return t > 90 ? e > 4 ? n[0] : n[3] : t > 60 ? e > 3 ? n[3] : n[2] : t > 30 ? e > 8 ? n[1] : e > 6 ? n[0] : e > 4 ? e : n[2] : e > 8 ? e : n[3]
                        }

                        function l(t, e, n, i, o, r) {
                            t && Q(S, t.toString(), {
                                dur: e,
                                scrollEasing: n,
                                dir: i,
                                overwrite: o,
                                drag: r
                            })
                        }
                        var u, d, h, f, p, g, m, v, y, w, b, _, x, C, S = t(this),
                            T = S.data(i),
                            E = T.opt,
                            k = i + "_" + T.idx,
                            D = t("#mCSB_" + T.idx),
                            A = t("#mCSB_" + T.idx + "_container"),
                            N = [t("#mCSB_" + T.idx + "_dragger_vertical"), t("#mCSB_" + T.idx + "_dragger_horizontal")],
                            O = [],
                            M = [],
                            L = 0,
                            j = "yx" === E.axis ? "none" : "all",
                            B = [],
                            H = A.find("iframe"),
                            W = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k],
                            z = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                        A.bind(W[0], function(t) {
                            n(t)
                        }).bind(W[1], function(t) {
                            o(t)
                        }), D.bind(W[0], function(t) {
                            r(t)
                        }).bind(W[2], function(t) {
                            s(t)
                        }), H.length && H.each(function() {
                            t(this).bind("load", function() {
                                P(this) && t(this.contentDocument || this.contentWindow.document).bind(W[0], function(t) {
                                    n(t), r(t)
                                }).bind(W[1], function(t) {
                                    o(t)
                                }).bind(W[2], function(t) {
                                    s(t)
                                })
                            })
                        })
                    },
                    O = function() {
                        function n(t, e, n) {
                            l.type = n && o ? "stepped" : "stepless", l.scrollAmount = 10, q(r, t, e, "mcsLinearOut", n ? 60 : null)
                        }
                        var o, r = t(this),
                            s = r.data(i),
                            a = s.opt,
                            l = s.sequential,
                            u = i + "_" + s.idx,
                            d = t("#mCSB_" + s.idx + "_container"),
                            h = d.parent();
                        d.bind("mousedown." + u, function() {
                            e || o || (o = 1, c = !0)
                        }).add(document).bind("mousemove." + u, function(t) {
                            if (!e && o && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text)) {
                                var i = d.offset(),
                                    r = I(t)[0] - i.top + d[0].offsetTop,
                                    c = I(t)[1] - i.left + d[0].offsetLeft;
                                r > 0 && r < h.height() && c > 0 && c < h.width() ? l.step && n("off", null, "stepped") : ("x" !== a.axis && s.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== a.axis && s.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)))
                            }
                        }).bind("mouseup." + u + " dragend." + u, function() {
                            e || (o && (o = 0, n("off", null)), c = !1)
                        })
                    },
                    M = function() {
                        function e(e, i) {
                            if (Y(n), !B(n, e.target)) {
                                var s = "auto" !== r.mouseWheel.deltaFactor ? parseInt(r.mouseWheel.deltaFactor) : l && e.deltaFactor < 100 ? 100 : e.deltaFactor || 100,
                                    u = r.scrollInertia;
                                if ("x" === r.axis || "x" === r.mouseWheel.axis) var d = "x",
                                    h = [Math.round(s * o.scrollRatio.x), parseInt(r.mouseWheel.scrollAmount)],
                                    f = "auto" !== r.mouseWheel.scrollAmount ? h[1] : h[0] >= a.width() ? .9 * a.width() : h[0],
                                    p = Math.abs(t("#mCSB_" + o.idx + "_container")[0].offsetLeft),
                                    g = c[1][0].offsetLeft,
                                    m = c[1].parent().width() - c[1].width(),
                                    v = "y" === r.mouseWheel.axis ? e.deltaY || i : e.deltaX;
                                else var d = "y",
                                    h = [Math.round(s * o.scrollRatio.y), parseInt(r.mouseWheel.scrollAmount)],
                                    f = "auto" !== r.mouseWheel.scrollAmount ? h[1] : h[0] >= a.height() ? .9 * a.height() : h[0],
                                    p = Math.abs(t("#mCSB_" + o.idx + "_container")[0].offsetTop),
                                    g = c[0][0].offsetTop,
                                    m = c[0].parent().height() - c[0].height(),
                                    v = e.deltaY || i;
                                "y" === d && !o.overflowed[0] || "x" === d && !o.overflowed[1] || ((r.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) && (v = -v), r.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== g || 0 > v && g !== m || r.mouseWheel.preventDefault) && (e.stopImmediatePropagation(), e.preventDefault()), e.deltaFactor < 5 && !r.mouseWheel.normalizeDelta && (f = e.deltaFactor, u = 17), Q(n, (p - v * f).toString(), {
                                    dir: d,
                                    dur: u
                                }))
                            }
                        }
                        if (t(this).data(i)) {
                            var n = t(this),
                                o = n.data(i),
                                r = o.opt,
                                s = i + "_" + o.idx,
                                a = t("#mCSB_" + o.idx),
                                c = [t("#mCSB_" + o.idx + "_dragger_vertical"), t("#mCSB_" + o.idx + "_dragger_horizontal")],
                                u = t("#mCSB_" + o.idx + "_container").find("iframe");
                            u.length && u.each(function() {
                                t(this).bind("load", function() {
                                    P(this) && t(this.contentDocument || this.contentWindow.document).bind("mousewheel." + s, function(t, n) {
                                        e(t, n)
                                    })
                                })
                            }), a.bind("mousewheel." + s, function(t, n) {
                                e(t, n)
                            })
                        }
                    },
                    L = new Object,
                    P = function(e) {
                        var n = !1,
                            i = !1,
                            o = null;
                        if (void 0 === e ? i = "#empty" : void 0 !== t(e).attr("id") && (i = t(e).attr("id")), !1 !== i && void 0 !== L[i]) return L[i];
                        if (e) {
                            try {
                                var r = e.contentDocument || e.contentWindow.document;
                                o = r.body.innerHTML
                            } catch (t) {}
                            n = null !== o
                        } else {
                            try {
                                var r = top.document;
                                o = r.body.innerHTML
                            } catch (t) {}
                            n = null !== o
                        }
                        return !1 !== i && (L[i] = n), n
                    },
                    j = function(t) {
                        var e = this.find("iframe");
                        if (e.length) {
                            var n = t ? "auto" : "none";
                            e.css("pointer-events", n)
                        }
                    },
                    B = function(e, n) {
                        var o = n.nodeName.toLowerCase(),
                            r = e.data(i).opt.mouseWheel.disableOver;
                        return t.inArray(o, r) > -1 && !(t.inArray(o, ["select", "textarea"]) > -1 && !t(n).is(":focus"))
                    },
                    H = function() {
                        var e, n = t(this),
                            o = n.data(i),
                            r = i + "_" + o.idx,
                            s = t("#mCSB_" + o.idx + "_container"),
                            a = s.parent(),
                            l = t(".mCSB_" + o.idx + "_scrollbar ." + u[12]);
                        l.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r, function(n) {
                            c = !0, t(n.target).hasClass("mCSB_dragger") || (e = 1)
                        }).bind("touchend." + r + " pointerup." + r + " MSPointerUp." + r, function() {
                            c = !1
                        }).bind("click." + r, function(i) {
                            if (e && (e = 0, t(i.target).hasClass(u[12]) || t(i.target).hasClass("mCSB_draggerRail"))) {
                                Y(n);
                                var r = t(this),
                                    l = r.find(".mCSB_dragger");
                                if (r.parent(".mCSB_scrollTools_horizontal").length > 0) {
                                    if (!o.overflowed[1]) return;
                                    var c = "x",
                                        d = i.pageX > l.offset().left ? -1 : 1,
                                        h = Math.abs(s[0].offsetLeft) - d * (.9 * a.width())
                                } else {
                                    if (!o.overflowed[0]) return;
                                    var c = "y",
                                        d = i.pageY > l.offset().top ? -1 : 1,
                                        h = Math.abs(s[0].offsetTop) - d * (.9 * a.height())
                                }
                                Q(n, h.toString(), {
                                    dir: c,
                                    scrollEasing: "mcsEaseInOut"
                                })
                            }
                        })
                    },
                    W = function() {
                        var e = t(this),
                            n = e.data(i),
                            o = n.opt,
                            r = i + "_" + n.idx,
                            s = t("#mCSB_" + n.idx + "_container"),
                            a = s.parent();
                        s.bind("focusin." + r, function() {
                            var n = t(document.activeElement),
                                i = s.find(".mCustomScrollBox").length;
                            n.is(o.advanced.autoScrollOnFocus) && (Y(e), clearTimeout(e[0]._focusTimeout), e[0]._focusTimer = i ? 17 * i : 0, e[0]._focusTimeout = setTimeout(function() {
                                var t = [nt(n)[0], nt(n)[1]],
                                    i = [s[0].offsetTop, s[0].offsetLeft],
                                    r = [i[0] + t[0] >= 0 && i[0] + t[0] < a.height() - n.outerHeight(!1), i[1] + t[1] >= 0 && i[0] + t[1] < a.width() - n.outerWidth(!1)],
                                    l = "yx" !== o.axis || r[0] || r[1] ? "all" : "none";
                                "x" === o.axis || r[0] || Q(e, t[0].toString(), {
                                    dir: "y",
                                    scrollEasing: "mcsEaseInOut",
                                    overwrite: l,
                                    dur: 0
                                }), "y" === o.axis || r[1] || Q(e, t[1].toString(), {
                                    dir: "x",
                                    scrollEasing: "mcsEaseInOut",
                                    overwrite: l,
                                    dur: 0
                                })
                            }, e[0]._focusTimer))
                        })
                    },
                    z = function() {
                        var e = t(this),
                            n = e.data(i),
                            o = i + "_" + n.idx,
                            r = t("#mCSB_" + n.idx + "_container").parent();
                        r.bind("scroll." + o, function() {
                            0 === r.scrollTop() && 0 === r.scrollLeft() || t(".mCSB_" + n.idx + "_scrollbar").css("visibility", "hidden")
                        })
                    },
                    R = function() {
                        var e = t(this),
                            n = e.data(i),
                            o = n.opt,
                            r = n.sequential,
                            s = i + "_" + n.idx,
                            a = ".mCSB_" + n.idx + "_scrollbar",
                            l = t(a + ">a");
                        l.bind("contextmenu." + s, function(t) {
                            t.preventDefault()
                        }).bind("mousedown." + s + " touchstart." + s + " pointerdown." + s + " MSPointerDown." + s + " mouseup." + s + " touchend." + s + " pointerup." + s + " MSPointerUp." + s + " mouseout." + s + " pointerout." + s + " MSPointerOut." + s + " click." + s, function(i) {
                            function s(t, n) {
                                r.scrollAmount = o.scrollButtons.scrollAmount, q(e, t, n)
                            }
                            if (i.preventDefault(), J(i)) {
                                var a = t(this).attr("class");
                                switch (r.type = o.scrollButtons.scrollType, i.type) {
                                    case "mousedown":
                                    case "touchstart":
                                    case "pointerdown":
                                    case "MSPointerDown":
                                        if ("stepped" === r.type) return;
                                        c = !0, n.tweenRunning = !1, s("on", a);
                                        break;
                                    case "mouseup":
                                    case "touchend":
                                    case "pointerup":
                                    case "MSPointerUp":
                                    case "mouseout":
                                    case "pointerout":
                                    case "MSPointerOut":
                                        if ("stepped" === r.type) return;
                                        c = !1, r.dir && s("off", a);
                                        break;
                                    case "click":
                                        if ("stepped" !== r.type || n.tweenRunning) return;
                                        s("on", a)
                                }
                            }
                        })
                    },
                    $ = function() {
                        function e(e) {
                            function i(t, e) {
                                s.type = r.keyboard.scrollType, s.scrollAmount = r.keyboard.scrollAmount, "stepped" === s.type && o.tweenRunning || q(n, t, e)
                            }
                            switch (e.type) {
                                case "blur":
                                    o.tweenRunning && s.dir && i("off", null);
                                    break;
                                case "keydown":
                                case "keyup":
                                    var a = e.keyCode ? e.keyCode : e.which,
                                        l = "on";
                                    if ("x" !== r.axis && (38 === a || 40 === a) || "y" !== r.axis && (37 === a || 39 === a)) {
                                        if ((38 === a || 40 === a) && !o.overflowed[0] || (37 === a || 39 === a) && !o.overflowed[1]) return;
                                        "keyup" === e.type && (l = "off"), t(document.activeElement).is(d) || (e.preventDefault(), e.stopImmediatePropagation(), i(l, a))
                                    } else if (33 === a || 34 === a) {
                                        if ((o.overflowed[0] || o.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type) {
                                            Y(n);
                                            var h = 34 === a ? -1 : 1;
                                            if ("x" === r.axis || "yx" === r.axis && o.overflowed[1] && !o.overflowed[0]) var f = "x",
                                                p = Math.abs(c[0].offsetLeft) - h * (.9 * u.width());
                                            else var f = "y",
                                                p = Math.abs(c[0].offsetTop) - h * (.9 * u.height());
                                            Q(n, p.toString(), {
                                                dir: f,
                                                scrollEasing: "mcsEaseInOut"
                                            })
                                        }
                                    } else if ((35 === a || 36 === a) && !t(document.activeElement).is(d) && ((o.overflowed[0] || o.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type)) {
                                        if ("x" === r.axis || "yx" === r.axis && o.overflowed[1] && !o.overflowed[0]) var f = "x",
                                            p = 35 === a ? Math.abs(u.width() - c.outerWidth(!1)) : 0;
                                        else var f = "y",
                                            p = 35 === a ? Math.abs(u.height() - c.outerHeight(!1)) : 0;
                                        Q(n, p.toString(), {
                                            dir: f,
                                            scrollEasing: "mcsEaseInOut"
                                        })
                                    }
                            }
                        }
                        var n = t(this),
                            o = n.data(i),
                            r = o.opt,
                            s = o.sequential,
                            a = i + "_" + o.idx,
                            l = t("#mCSB_" + o.idx),
                            c = t("#mCSB_" + o.idx + "_container"),
                            u = c.parent(),
                            d = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                            h = c.find("iframe"),
                            f = ["blur." + a + " keydown." + a + " keyup." + a];
                        h.length && h.each(function() {
                            t(this).bind("load", function() {
                                P(this) && t(this.contentDocument || this.contentWindow.document).bind(f[0], function(t) {
                                    e(t)
                                })
                            })
                        }), l.attr("tabindex", "0").bind(f[0], function(t) {
                            e(t)
                        })
                    },
                    q = function(e, n, o, r, s) {
                        function a(t) {
                            c.snapAmount && (d.scrollAmount = c.snapAmount instanceof Array ? "x" === d.dir[0] ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount);
                            var n = "stepped" !== d.type,
                                i = s || (t ? n ? p / 1.5 : g : 1e3 / 60),
                                o = t ? n ? 7.5 : 40 : 2.5,
                                u = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
                                f = [l.scrollRatio.y > 10 ? 10 : l.scrollRatio.y, l.scrollRatio.x > 10 ? 10 : l.scrollRatio.x],
                                m = "x" === d.dir[0] ? u[1] + d.dir[1] * (f[1] * o) : u[0] + d.dir[1] * (f[0] * o),
                                v = "x" === d.dir[0] ? u[1] + d.dir[1] * parseInt(d.scrollAmount) : u[0] + d.dir[1] * parseInt(d.scrollAmount),
                                y = "auto" !== d.scrollAmount ? v : m,
                                w = r || (t ? n ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
                                b = !!t;
                            return t && 17 > i && (y = "x" === d.dir[0] ? u[1] : u[0]), Q(e, y.toString(), {
                                dir: d.dir[0],
                                scrollEasing: w,
                                dur: i,
                                onComplete: b
                            }), t ? void(d.dir = !1) : (clearTimeout(d.step), void(d.step = setTimeout(function() {
                                a()
                            }, i)))
                        }
                        var l = e.data(i),
                            c = l.opt,
                            d = l.sequential,
                            h = t("#mCSB_" + l.idx + "_container"),
                            f = "stepped" === d.type,
                            p = c.scrollInertia < 26 ? 26 : c.scrollInertia,
                            g = c.scrollInertia < 1 ? 17 : c.scrollInertia;
                        switch (n) {
                            case "on":
                                if (d.dir = [o === u[16] || o === u[15] || 39 === o || 37 === o ? "x" : "y", o === u[13] || o === u[15] || 38 === o || 37 === o ? -1 : 1], Y(e), et(o) && "stepped" === d.type) return;
                                a(f);
                                break;
                            case "off":
                                clearTimeout(d.step), Z(d, "step"), Y(e), (f || l.tweenRunning && d.dir) && a(!0)
                        }
                    },
                    F = function(e) {
                        var n = t(this).data(i).opt,
                            o = [];
                        return "function" == typeof e && (e = e()), e instanceof Array ? o = e.length > 1 ? [e[0], e[1]] : "x" === n.axis ? [null, e[0]] : [e[0], null] : (o[0] = e.y ? e.y : e.x || "x" === n.axis ? null : e, o[1] = e.x ? e.x : e.y || "y" === n.axis ? null : e), "function" == typeof o[0] && (o[0] = o[0]()), "function" == typeof o[1] && (o[1] = o[1]()), o
                    },
                    X = function(e, n) {
                        if (null != e && void 0 !== e) {
                            var o = t(this),
                                r = o.data(i),
                                s = r.opt,
                                a = t("#mCSB_" + r.idx + "_container"),
                                l = a.parent(),
                                c = typeof e;
                            n || (n = "x" === s.axis ? "x" : "y");
                            var u = "x" === n ? a.outerWidth(!1) - l.width() : a.outerHeight(!1) - l.height(),
                                h = "x" === n ? a[0].offsetLeft : a[0].offsetTop,
                                f = "x" === n ? "left" : "top";
                            switch (c) {
                                case "function":
                                    return e();
                                case "object":
                                    var p = e.jquery ? e : t(e);
                                    if (!p.length) return;
                                    return "x" === n ? nt(p)[1] : nt(p)[0];
                                case "string":
                                case "number":
                                    if (et(e)) return Math.abs(e);
                                    if (-1 !== e.indexOf("%")) return Math.abs(u * parseInt(e) / 100);
                                    if (-1 !== e.indexOf("-=")) return Math.abs(h - parseInt(e.split("-=")[1]));
                                    if (-1 !== e.indexOf("+=")) {
                                        var g = h + parseInt(e.split("+=")[1]);
                                        return g >= 0 ? 0 : Math.abs(g)
                                    }
                                    if (-1 !== e.indexOf("px") && et(e.split("px")[0])) return Math.abs(e.split("px")[0]);
                                    if ("top" === e || "left" === e) return 0;
                                    if ("bottom" === e) return Math.abs(l.height() - a.outerHeight(!1));
                                    if ("right" === e) return Math.abs(l.width() - a.outerWidth(!1));
                                    if ("first" === e || "last" === e) {
                                        var p = a.find(":" + e);
                                        return "x" === n ? nt(p)[1] : nt(p)[0]
                                    }
                                    return t(e).length ? "x" === n ? nt(t(e))[1] : nt(t(e))[0] : (a.css(f, e), void d.update.call(null, o[0]))
                            }
                        }
                    },
                    U = function(e) {
                        function n(t) {
                            clearTimeout(a[0].autoUpdate), d.update.call(null, o[0], t)
                        }
                        var o = t(this),
                            r = o.data(i),
                            s = r.opt,
                            a = t("#mCSB_" + r.idx + "_container");
                        return e ? (clearTimeout(a[0].autoUpdate), void Z(a[0], "autoUpdate")) : void
                        function e() {
                            return clearTimeout(a[0].autoUpdate), 0 === o.parents("html").length ? void(o = null) : void(a[0].autoUpdate = setTimeout(function() {
                                return s.advanced.updateOnSelectorChange && (r.poll.change.n = function() {
                                    !0 === s.advanced.updateOnSelectorChange && (s.advanced.updateOnSelectorChange = "*");
                                    var t = 0,
                                        e = a.find(s.advanced.updateOnSelectorChange);
                                    return s.advanced.updateOnSelectorChange && e.length > 0 && e.each(function() {
                                        t += this.offsetHeight + this.offsetWidth
                                    }), t
                                }(), r.poll.change.n !== r.poll.change.o) ? (r.poll.change.o = r.poll.change.n, void n(3)) : s.advanced.updateOnContentResize && (r.poll.size.n = o[0].scrollHeight + o[0].scrollWidth + a[0].offsetHeight + o[0].offsetHeight + o[0].offsetWidth, r.poll.size.n !== r.poll.size.o) ? (r.poll.size.o = r.poll.size.n, void n(1)) : !s.advanced.updateOnImageLoad || "auto" === s.advanced.updateOnImageLoad && "y" === s.axis || (r.poll.img.n = a.find("img").length, r.poll.img.n === r.poll.img.o) ? void((s.advanced.updateOnSelectorChange || s.advanced.updateOnContentResize || s.advanced.updateOnImageLoad) && e()) : (r.poll.img.o = r.poll.img.n, void a.find("img").each(function() {
                                    ! function(e) {
                                        if (t(e).hasClass(u[2])) n();
                                        else {
                                            var i = new Image;
                                            i.onload = function(t, e) {
                                                return function() {
                                                    return e.apply(t, arguments)
                                                }
                                            }(i, function() {
                                                this.onload = null, t(e).addClass(u[2]), n(2)
                                            }), i.src = e.src
                                        }
                                    }(this)
                                }))
                            }, s.advanced.autoUpdateTimeout))
                        }()
                    },
                    Y = function(e) {
                        var n = e.data(i),
                            o = t("#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper,#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal");
                        o.each(function() {
                            G.call(this)
                        })
                    },
                    Q = function(e, n, o) {
                        function r(t) {
                            return a && l.callbacks[t] && "function" == typeof l.callbacks[t]
                        }

                        function s() {
                            var t = [h[0].offsetTop, h[0].offsetLeft],
                                n = [v[0].offsetTop, v[0].offsetLeft],
                                i = [h.outerHeight(!1), h.outerWidth(!1)],
                                r = [d.height(), d.width()];
                            e[0].mcs = {
                                content: h,
                                top: t[0],
                                left: t[1],
                                draggerTop: n[0],
                                draggerLeft: n[1],
                                topPct: Math.round(100 * Math.abs(t[0]) / (Math.abs(i[0]) - r[0])),
                                leftPct: Math.round(100 * Math.abs(t[1]) / (Math.abs(i[1]) - r[1])),
                                direction: o.dir
                            }
                        }
                        var a = e.data(i),
                            l = a.opt,
                            c = {
                                trigger: "internal",
                                dir: "y",
                                scrollEasing: "mcsEaseOut",
                                drag: !1,
                                dur: l.scrollInertia,
                                overwrite: "all",
                                callbacks: !0,
                                onStart: !0,
                                onUpdate: !0,
                                onComplete: !0
                            },
                            o = t.extend(c, o),
                            u = [o.dur, o.drag ? 0 : o.dur],
                            d = t("#mCSB_" + a.idx),
                            h = t("#mCSB_" + a.idx + "_container"),
                            f = h.parent(),
                            p = l.callbacks.onTotalScrollOffset ? F.call(e, l.callbacks.onTotalScrollOffset) : [0, 0],
                            g = l.callbacks.onTotalScrollBackOffset ? F.call(e, l.callbacks.onTotalScrollBackOffset) : [0, 0];
                        if (a.trigger = o.trigger, 0 === f.scrollTop() && 0 === f.scrollLeft() || (t(".mCSB_" + a.idx + "_scrollbar").css("visibility", "visible"), f.scrollTop(0).scrollLeft(0)), "_resetY" !== n || a.contentReset.y || (r("onOverflowYNone") && l.callbacks.onOverflowYNone.call(e[0]), a.contentReset.y = 1), "_resetX" !== n || a.contentReset.x || (r("onOverflowXNone") && l.callbacks.onOverflowXNone.call(e[0]), a.contentReset.x = 1), "_resetY" !== n && "_resetX" !== n) {
                            if (!a.contentReset.y && e[0].mcs || !a.overflowed[0] || (r("onOverflowY") && l.callbacks.onOverflowY.call(e[0]), a.contentReset.x = null), !a.contentReset.x && e[0].mcs || !a.overflowed[1] || (r("onOverflowX") && l.callbacks.onOverflowX.call(e[0]), a.contentReset.x = null), l.snapAmount) {
                                var m = l.snapAmount instanceof Array ? "x" === o.dir ? l.snapAmount[1] : l.snapAmount[0] : l.snapAmount;
                                n = function(t, e, n) {
                                    return Math.round(t / e) * e - n
                                }(n, m, l.snapOffset)
                            }
                            switch (o.dir) {
                                case "x":
                                    var v = t("#mCSB_" + a.idx + "_dragger_horizontal"),
                                        y = "left",
                                        w = h[0].offsetLeft,
                                        b = [d.width() - h.outerWidth(!1), v.parent().width() - v.width()],
                                        _ = [n, 0 === n ? 0 : n / a.scrollRatio.x],
                                        x = p[1],
                                        S = g[1],
                                        T = x > 0 ? x / a.scrollRatio.x : 0,
                                        E = S > 0 ? S / a.scrollRatio.x : 0;
                                    break;
                                case "y":
                                    var v = t("#mCSB_" + a.idx + "_dragger_vertical"),
                                        y = "top",
                                        w = h[0].offsetTop,
                                        b = [d.height() - h.outerHeight(!1), v.parent().height() - v.height()],
                                        _ = [n, 0 === n ? 0 : n / a.scrollRatio.y],
                                        x = p[0],
                                        S = g[0],
                                        T = x > 0 ? x / a.scrollRatio.y : 0,
                                        E = S > 0 ? S / a.scrollRatio.y : 0
                            }
                            _[1] < 0 || 0 === _[0] && 0 === _[1] ? _ = [0, 0] : _[1] >= b[1] ? _ = [b[0], b[1]] : _[0] = -_[0], e[0].mcs || (s(), r("onInit") && l.callbacks.onInit.call(e[0])), clearTimeout(h[0].onCompleteTimeout), V(v[0], y, Math.round(_[1]), u[1], o.scrollEasing), !a.tweenRunning && (0 === w && _[0] >= 0 || w === b[0] && _[0] <= b[0]) || V(h[0], y, Math.round(_[0]), u[0], o.scrollEasing, o.overwrite, {
                                onStart: function() {
                                    o.callbacks && o.onStart && !a.tweenRunning && (r("onScrollStart") && (s(), l.callbacks.onScrollStart.call(e[0])), a.tweenRunning = !0, C(v), a.cbOffsets = [l.callbacks.alwaysTriggerOffsets || w >= b[0] + x, l.callbacks.alwaysTriggerOffsets || -S >= w])
                                },
                                onUpdate: function() {
                                    o.callbacks && o.onUpdate && r("whileScrolling") && (s(), l.callbacks.whileScrolling.call(e[0]))
                                },
                                onComplete: function() {
                                    if (o.callbacks && o.onComplete) {
                                        "yx" === l.axis && clearTimeout(h[0].onCompleteTimeout);
                                        var t = h[0].idleTimer || 0;
                                        h[0].onCompleteTimeout = setTimeout(function() {
                                            r("onScroll") && (s(), l.callbacks.onScroll.call(e[0])), r("onTotalScroll") && _[1] >= b[1] - T && a.cbOffsets[0] && (s(), l.callbacks.onTotalScroll.call(e[0])), r("onTotalScrollBack") && _[1] <= E && a.cbOffsets[1] && (s(), l.callbacks.onTotalScrollBack.call(e[0])), a.tweenRunning = !1, h[0].idleTimer = 0, C(v, "hide")
                                        }, t)
                                    }
                                }
                            })
                        }
                    },
                    V = function(t, e, n, i, o, r, s) {
                        function a() {
                            y.stop || (g || d.call(), g = K() - p, l(), g >= y.time && (y.time = g > y.time ? g + c - (g - y.time) : g + c - 1, y.time < g + 1 && (y.time = g + 1)), y.time < i ? y.id = u(a) : f.call())
                        }

                        function l() {
                            i > 0 ? (y.currVal = function(t, e, n, i, o) {
                                switch (o) {
                                    case "linear":
                                    case "mcsLinear":
                                        return n * t / i + e;
                                    case "mcsLinearOut":
                                        return t /= i, t--, n * Math.sqrt(1 - t * t) + e;
                                    case "easeInOutSmooth":
                                        return 1 > (t /= i / 2) ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e;
                                    case "easeInOutStrong":
                                        return 1 > (t /= i / 2) ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, n / 2 * (2 - Math.pow(2, -10 * t)) + e);
                                    case "easeInOut":
                                    case "mcsEaseInOut":
                                        return 1 > (t /= i / 2) ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e;
                                    case "easeOutSmooth":
                                        return t /= i, -n * (--t * t * t * t - 1) + e;
                                    case "easeOutStrong":
                                        return n * (1 - Math.pow(2, -10 * t / i)) + e;
                                    case "easeOut":
                                    case "mcsEaseOut":
                                    default:
                                        var r = (t /= i) * t,
                                            s = r * t;
                                        return e + n * (.499999999999997 * s * r + -2.5 * r * r + 5.5 * s + -6.5 * r + 4 * t)
                                }
                            }(y.time, m, w, i, o), v[e] = Math.round(y.currVal) + "px") : v[e] = n + "px", h.call()
                        }
                        t._mTween || (t._mTween = {
                            top: {},
                            left: {}
                        });
                        var c, u, s = s || {},
                            d = s.onStart || function() {},
                            h = s.onUpdate || function() {},
                            f = s.onComplete || function() {},
                            p = K(),
                            g = 0,
                            m = t.offsetTop,
                            v = t.style,
                            y = t._mTween[e];
                        "left" === e && (m = t.offsetLeft);
                        var w = n - m;
                        y.stop = 0, "none" !== r && null != y.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(y.id) : clearTimeout(y.id), y.id = null), c = 1e3 / 60, y.time = g + c, u = window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
                            return l(), setTimeout(t, .01)
                        }, y.id = u(a)
                    },
                    K = function() {
                        return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
                    },
                    G = function() {
                        var t = this;
                        t._mTween || (t._mTween = {
                            top: {},
                            left: {}
                        });
                        for (var e = ["top", "left"], n = 0; n < e.length; n++) {
                            var i = e[n];
                            t._mTween[i].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[i].id) : clearTimeout(t._mTween[i].id), t._mTween[i].id = null, t._mTween[i].stop = 1)
                        }
                    },
                    Z = function(t, e) {
                        try {
                            delete t[e]
                        } catch (n) {
                            t[e] = null
                        }
                    },
                    J = function(t) {
                        return !(t.which && 1 !== t.which)
                    },
                    tt = function(t) {
                        var e = t.originalEvent.pointerType;
                        return !(e && "touch" !== e && 2 !== e)
                    },
                    et = function(t) {
                        return !isNaN(parseFloat(t)) && isFinite(t)
                    },
                    nt = function(t) {
                        var e = t.parents(".mCSB_container");
                        return [t.offset().top - e.offset().top, t.offset().left - e.offset().left]
                    },
                    it = function() {
                        var t = function() {
                            var t = ["webkit", "moz", "ms", "o"];
                            if ("hidden" in document) return "hidden";
                            for (var e = 0; e < t.length; e++)
                                if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                            return null
                        }();
                        return !!t && document[t]
                    };
                t.fn[n] = function(e) {
                    return d[e] ? d[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : d.init.apply(this, arguments)
                }, t[n] = function(e) {
                    return d[e] ? d[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : d.init.apply(this, arguments)
                }, t[n].defaults = r, window[n] = !0, t(window).bind("load", function() {
                    t(o)[n](), t.extend(t.expr[":"], {
                        mcsInView: t.expr[":"].mcsInView || function(e) {
                            var n, i, o = t(e),
                                r = o.parents(".mCSB_container");
                            if (r.length) return n = r.parent(), (i = [r[0].offsetTop, r[0].offsetLeft])[0] + nt(o)[0] >= 0 && i[0] + nt(o)[0] < n.height() - o.outerHeight(!1) && i[1] + nt(o)[1] >= 0 && i[1] + nt(o)[1] < n.width() - o.outerWidth(!1)
                        },
                        mcsInSight: t.expr[":"].mcsInSight || function(e, n, i) {
                            var o, r, s, a, l = t(e),
                                c = l.parents(".mCSB_container"),
                                u = "exact" === i[3] ? [
                                    [1, 0],
                                    [1, 0]
                                ] : [
                                    [.9, .1],
                                    [.6, .4]
                                ];
                            if (c.length) return o = [l.outerHeight(!1), l.outerWidth(!1)], s = [c[0].offsetTop + nt(l)[0], c[0].offsetLeft + nt(l)[1]], r = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], s[0] - r[0] * (a = [o[0] < r[0] ? u[0] : u[1], o[1] < r[1] ? u[0] : u[1]])[0][0] < 0 && s[0] + o[0] - r[0] * a[0][1] >= 0 && s[1] - r[1] * a[1][0] < 0 && s[1] + o[1] - r[1] * a[1][1] >= 0
                        },
                        mcsOverflow: t.expr[":"].mcsOverflow || function(e) {
                            var n = t(e).data(i);
                            if (n) return n.overflowed[0] || n.overflowed[1]
                        }
                    })
                })
            }()
    }),
    function(t, e) {
        function n(t) {
            return "object" == typeof t
        }

        function i(t) {
            return "string" == typeof t
        }

        function o(t) {
            return "number" == typeof t
        }

        function r(t) {
            return t === e
        }

        // function s(t, e) {
        //     return r(t) ? "gmap3_" + (e ? N + 1 : ++N) : t
        // }

        function a(e, n, i, o, r) {
            function s(n, o) {
                n && t.each(n, function(t, n) {
                    var s = e,
                        a = n;
                    M(n) && (s = n[0], a = n[1]), o(i, t, function(t) {
                        a.apply(s, [r || i, t, l])
                    })
                })
            }
            var a = n.td || {},
                l = {
                    id: o,
                    data: a.data,
                    tag: a.tag
                };
            s(a.events, A.event.addListener), s(a.onces, A.event.addListenerOnce)
        }

        function l(t) {
            var e, n = [];
            for (e in t) t.hasOwnProperty(e) && n.push(e);
            return n
        }

        function c(t, e) {
            var n, i = arguments;
            for (n = 2; n < i.length; n++)
                if (e in i[n] && i[n].hasOwnProperty(e)) return void(t[e] = i[n][e])
        }

        function u(e, n) {
            var i, o, r = ["data", "tag", "id", "events", "onces"],
                s = {};
            if (e.td)
                for (i in e.td) e.td.hasOwnProperty(i) && "options" !== i && "values" !== i && (s[i] = e.td[i]);
            for (o = 0; o < r.length; o++) c(s, r[o], n, e.td);
            return s.options = t.extend({}, e.opts || {}, n.options || {}), s
        }

        function d() {
            if (I.verbose) {
                var t, e = [];
                if (window.console && O(console.error)) {
                    for (t = 0; t < arguments.length; t++) e.push(arguments[t]);
                    console.error.apply(console, e)
                } else {
                    for (e = "", t = 0; t < arguments.length; t++) e += arguments[t].toString() + " ";
                    alert(e)
                }
            }
        }

        function h(t) {
            return (o(t) || i(t)) && "" !== t && !isNaN(t)
        }

        function f(t) {
            var e, i = [];
            if (!r(t))
                if (n(t))
                    if (o(t.length)) i = t;
                    else
                        for (e in t) i.push(t[e]);
            else i.push(t);
            return i
        }

        function p(e) {
            return e ? O(e) ? e : (e = f(e), function(i) {
                var o;
                if (r(i)) return !1;
                if (n(i)) {
                    for (o = 0; o < i.length; o++)
                        if (t.inArray(i[o], e) >= 0) return !0;
                    return !1
                }
                return t.inArray(i, e) >= 0
            }) : void 0
        }

        function g(t, e, n) {
            var o = e ? t : null;
            return !t || i(t) ? o : t.latLng ? g(t.latLng) : t instanceof A.LatLng ? t : h(t.lat) ? new A.LatLng(t.lat, t.lng) : !n && M(t) && h(t[0]) && h(t[1]) ? new A.LatLng(t[0], t[1]) : o
        }

        function m(t) {
            var e, n;
            return !t || t instanceof A.LatLngBounds ? t || null : (M(t) ? 2 === t.length ? (e = g(t[0]), n = g(t[1])) : 4 === t.length && (e = g([t[0], t[1]]), n = g([t[2], t[3]])) : "ne" in t && "sw" in t ? (e = g(t.ne), n = g(t.sw)) : "n" in t && "e" in t && "s" in t && "w" in t && (e = g([t.n, t.e]), n = g([t.s, t.w])), e && n ? new A.LatLngBounds(n, e) : null)
        }

        function v(t, e, n, o, r) {
            var s = !!n && g(o.td, !1, !0),
                a = s ? {
                    latLng: s
                } : !!o.td.address && (i(o.td.address) ? {
                    address: o.td.address
                } : o.td.address),
                l = !!a && P.get(a),
                c = this;
            a ? (r = r || 0, l ? (o.latLng = l.results[0].geometry.location, o.results = l.results, o.status = l.status, e.apply(t, [o])) : (a.location && (a.location = g(a.location)), a.bounds && (a.bounds = m(a.bounds)), (L.geocoder || (L.geocoder = new A.Geocoder), L.geocoder).geocode(a, function(i, s) {
                s === A.GeocoderStatus.OK ? (P.store(a, {
                    results: i,
                    status: s
                }), o.latLng = i[0].geometry.location, o.results = i, o.status = s, e.apply(t, [o])) : s === A.GeocoderStatus.OVER_QUERY_LIMIT && r < I.queryLimit.attempt ? setTimeout(function() {
                    v.apply(c, [t, e, n, o, r + 1])
                }, I.queryLimit.delay + Math.floor(Math.random() * I.queryLimit.random)) : (d("geocode failed", s, a), o.latLng = o.results = !1, o.status = s, e.apply(t, [o]))
            }))) : (o.latLng = g(o.td, !1, !0), e.apply(t, [o]))
        }

        function y(e, n, i, o) {
            var r = this,
                s = -1;
            ! function a() {
                do {
                    s++
                } while (s < e.length && !("address" in e[s]));
                return s >= e.length ? void i.apply(n, [o]) : void v(r, function(n) {
                    delete n.td, t.extend(e[s], n), a.apply(r, [])
                }, !0, {
                    td: e[s]
                })
            }()
        }

        function w(t, e, n) {
            var i = !1;
            navigator && navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(o) {
                i || (i = !0, n.latLng = new A.LatLng(o.coords.latitude, o.coords.longitude), e.apply(t, [n]))
            }, function() {
                i || (i = !0, n.latLng = !1, e.apply(t, [n]))
            }, n.opts.getCurrentPosition) : (n.latLng = !1, e.apply(t, [n]))
        }

        function b(t) {
            var e, i = !1;
            if (n(t) && t.hasOwnProperty("get")) {
                for (e in t)
                    if ("get" !== e) return !1;
                i = !t.get.hasOwnProperty("callback")
            }
            return i
        }

        function _() {
            var t = [],
                e = this;
            e.empty = function() {
                return !t.length
            }, e.add = function(e) {
                t.push(e)
            }, e.get = function() {
                return !!t.length && t[0]
            }, e.ack = function() {
                t.shift()
            }
        }

        function x() {
            function e(t) {
                return {
                    id: t.id,
                    name: t.name,
                    object: t.obj,
                    tag: t.tag,
                    data: t.data
                }
            }

            function n(t) {
                O(t.setMap) && t.setMap(null), O(t.remove) && t.remove(), O(t.free) && t.free(), t = null
            }
            var i = {},
                o = {},
                a = this;
            a.add = function(t, e, n, r) {
                var l = t.td || {},
                    c = s(l.id);
                return i[e] || (i[e] = []), c in o && a.clearById(c), o[c] = {
                    obj: n,
                    sub: r,
                    name: e,
                    id: c,
                    tag: l.tag,
                    data: l.data
                }, i[e].push(c), c
            }, a.getById = function(t, n, i) {
                var r = !1;
                return t in o && (r = n ? o[t].sub : i ? e(o[t]) : o[t].obj), r
            }, a.get = function(t, n, r, s) {
                var a, l, c = p(r);
                if (!i[t] || !i[t].length) return null;
                for (a = i[t].length; a;)
                    if (a--, (l = i[t][n ? a : i[t].length - a - 1]) && o[l]) {
                        if (c && !c(o[l].tag)) continue;
                        return s ? e(o[l]) : o[l].obj
                    }
                return null
            }, a.all = function(t, n, s) {
                var a = [],
                    l = p(n),
                    c = function(t) {
                        var n, r;
                        for (n = 0; n < i[t].length; n++)
                            if ((r = i[t][n]) && o[r]) {
                                if (l && !l(o[r].tag)) continue;
                                a.push(s ? e(o[r]) : o[r].obj)
                            }
                    };
                if (t in i) c(t);
                else if (r(t))
                    for (t in i) c(t);
                return a
            }, a.rm = function(t, e, n) {
                var r, s;
                if (!i[t]) return !1;
                if (e)
                    if (n)
                        for (r = i[t].length - 1; r >= 0 && (s = i[t][r], !e(o[s].tag)); r--);
                    else
                        for (r = 0; r < i[t].length && (s = i[t][r], !e(o[s].tag)); r++);
                else r = n ? i[t].length - 1 : 0;
                return r in i[t] && a.clearById(i[t][r], r)
            }, a.clearById = function(t, e) {
                if (t in o) {
                    var s, a = o[t].name;
                    for (s = 0; r(e) && s < i[a].length; s++) t === i[a][s] && (e = s);
                    return n(o[t].obj), o[t].sub && n(o[t].sub), delete o[t], i[a].splice(e, 1), !0
                }
                return !1
            }, a.objGetById = function(t) {
                var e, n;
                if (i.clusterer)
                    for (n in i.clusterer)
                        if (!1 !== (e = o[i.clusterer[n]].obj.getById(t))) return e;
                return !1
            }, a.objClearById = function(t) {
                var e;
                if (i.clusterer)
                    for (e in i.clusterer)
                        if (o[i.clusterer[e]].obj.clearById(t)) return !0;
                return null
            }, a.clear = function(t, e, n, o) {
                var r, s, l, c = p(o);
                if (t && t.length) t = f(t);
                else
                    for (r in t = [], i) t.push(r);
                for (s = 0; s < t.length; s++)
                    if (l = t[s], e) a.rm(l, c, !0);
                    else if (n) a.rm(l, c, !1);
                else
                    for (; a.rm(l, c, !1););
            }, a.objClear = function(e, n, r, s) {
                var a;
                if (i.clusterer && (t.inArray("marker", e) >= 0 || !e.length))
                    for (a in i.clusterer) o[i.clusterer[a]].obj.clear(n, r, s)
            }
        }

        function C(e, n, o) {
            function r() {
                var t;
                for (t in o)
                    if (o.hasOwnProperty(t) && !a.hasOwnProperty(t)) return t
            }
            var s, a = {},
                l = this,
                c = {
                    latLng: {
                        map: !1,
                        marker: !1,
                        infowindow: !1,
                        circle: !1,
                        overlay: !1,
                        getlatlng: !1,
                        getmaxzoom: !1,
                        getelevation: !1,
                        streetviewpanorama: !1,
                        getaddress: !0
                    },
                    geoloc: {
                        getgeoloc: !0
                    }
                };
            i(o) && (o = function(t) {
                var e = {};
                return e[t] = {}, e
            }(o)), l.run = function() {
                for (var i, l; i = r();) {
                    if (O(e[i])) return s = i, l = t.extend(!0, {}, I[i] || {}, o[i].options || {}), void(i in c.latLng ? o[i].values ? y(o[i].values, e, e[i], {
                        td: o[i],
                        opts: l,
                        session: a
                    }) : v(e, e[i], c.latLng[i], {
                        td: o[i],
                        opts: l,
                        session: a
                    }) : i in c.geoloc ? w(e, e[i], {
                        td: o[i],
                        opts: l,
                        session: a
                    }) : e[i].apply(e, [{
                        td: o[i],
                        opts: l,
                        session: a
                    }]));
                    a[i] = null
                }
                n.apply(e, [o, a])
            }, l.ack = function(t) {
                a[s] = t, l.run.apply(l, [])
            }
        }

        function S() {
            return L.es || (L.es = new A.ElevationService), L.es
        }

        function T(e, i, o) {
            function r(t) {
                D[t] || (delete N[t].options.map, D[t] = new I.classes.Marker(N[t].options), a(e, {
                    td: N[t]
                }, D[t], N[t].id))
            }

            function l(t) {
                n(T[t]) ? (O(T[t].obj.setMap) && T[t].obj.setMap(null), O(T[t].obj.remove) && T[t].obj.remove(), O(T[t].shadow.remove) && T[t].obj.remove(), O(T[t].shadow.setMap) && T[t].shadow.setMap(null), delete T[t].obj, delete T[t].shadow) : D[t] && D[t].setMap(null), delete T[t]
            }

            function c() {
                var t = function() {
                    var t, e, n, i, o, r, s, a, l = Math.cos,
                        c = Math.sin,
                        u = arguments;
                    return u[0] instanceof A.LatLng ? (t = u[0].lat(), n = u[0].lng(), u[1] instanceof A.LatLng ? (e = u[1].lat(), i = u[1].lng()) : (e = u[1], i = u[2])) : (t = u[0], n = u[1], u[2] instanceof A.LatLng ? (e = u[2].lat(), i = u[2].lng()) : (e = u[2], i = u[3])), o = Math.PI * t / 180, r = Math.PI * n / 180, s = Math.PI * e / 180, a = Math.PI * i / 180, 6371e3 * Math.acos(Math.min(l(o) * l(s) * l(r) * l(a) + l(o) * c(r) * l(s) * c(a) + c(o) * c(s), 1))
                }(i.getCenter(), i.getBounds().getNorthEast());
                return new A.Circle({
                    center: i.getCenter(),
                    radius: 1.25 * t
                }).getBounds()
            }

            function u() {
                clearTimeout(f), f = setTimeout(h, 25)
            }

            function d(t) {
                var e = g.fromLatLngToDivPixel(t),
                    n = g.fromDivPixelToLatLng(new A.Point(e.x + o.radius, e.y - o.radius)),
                    i = g.fromDivPixelToLatLng(new A.Point(e.x - o.radius, e.y + o.radius));
                return new A.LatLngBounds(i, n)
            }

            function h() {
                if (!y && !b && _) {
                    var e, n, r, s, a, u, h, f, p, g, C, S = !1,
                        E = [],
                        k = {},
                        D = i.getZoom(),
                        I = "maxZoom" in o && D > o.maxZoom,
                        O = function() {
                            var t, e = {};
                            for (t in T) e[t] = !0;
                            return e
                        }();
                    for (w = !1, D > 3 && (S = (a = c()).getSouthWest().lng() < a.getNorthEast().lng()), e = 0; e < N.length; e++) !N[e] || S && !a.contains(N[e].options.position) || m && !m(M[e]) || E.push(e);
                    for (;;) {
                        for (e = 0; k[e] && e < E.length;) e++;
                        if (e === E.length) break;
                        if (s = [], x && !I) {
                            C = 10;
                            do {
                                for (f = s, s = [], C--, h = f.length ? a.getCenter() : N[E[e]].options.position, a = d(h), n = e; n < E.length; n++) k[n] || a.contains(N[E[n]].options.position) && s.push(n)
                            } while (f.length < s.length && s.length > 1 && C)
                        } else
                            for (n = e; n < E.length; n++)
                                if (!k[n]) {
                                    s.push(n);
                                    break
                                } for (u = {
                                indexes: [],
                                ref: []
                            }, p = g = 0, r = 0; r < s.length; r++) k[s[r]] = !0, u.indexes.push(E[s[r]]), u.ref.push(E[s[r]]), p += N[E[s[r]]].options.position.lat(), g += N[E[s[r]]].options.position.lng();
                        p /= s.length, g /= s.length, u.latLng = new A.LatLng(p, g), u.ref = u.ref.join("-"), u.ref in O ? delete O[u.ref] : (1 === s.length && (T[u.ref] = !0), v(u))
                    }
                    t.each(O, function(t) {
                        l(t)
                    }), b = !1
                }
            }
            var f, g, m, v, y = !1,
                w = !1,
                b = !1,
                _ = !1,
                x = !0,
                C = this,
                S = [],
                T = {},
                E = {},
                k = {},
                D = [],
                N = [],
                M = [],
                L = function(t) {
                    function e() {
                        var t = this;
                        return t.onAdd = function() {}, t.onRemove = function() {}, t.draw = function() {}, I.classes.OverlayView.apply(t, [])
                    }
                    e.prototype = I.classes.OverlayView.prototype;
                    var n = new e;
                    return n.setMap(t), n
                }(i, o.radius);
            (function t() {
                return (g = L.getProjection()) ? (_ = !0, S.push(A.event.addListener(i, "zoom_changed", u)), S.push(A.event.addListener(i, "bounds_changed", u)), void h()) : void setTimeout(function() {
                    t.apply(C, [])
                }, 25)
            })(), C.getById = function(t) {
                return t in E && (r(E[t]), D[E[t]])
            }, C.rm = function(t) {
                var e = E[t];
                D[e] && D[e].setMap(null), delete D[e], D[e] = !1, delete N[e], N[e] = !1, delete M[e], M[e] = !1, delete E[t], delete k[e], w = !0
            }, C.clearById = function(t) {
                return t in E ? (C.rm(t), !0) : void 0
            }, C.clear = function(t, e, n) {
                var i, o, r, s, a, l = [],
                    c = p(n);
                for (t ? (i = N.length - 1, o = -1, r = -1) : (i = 0, o = N.length, r = 1), s = i; s !== o && (!N[s] || c && !c(N[s].tag) || (l.push(k[s]), !e && !t)); s += r);
                for (a = 0; a < l.length; a++) C.rm(l[a])
            }, C.add = function(t, e) {
                t.id = s(t.id), C.clearById(t.id), E[t.id] = D.length, k[D.length] = t.id, D.push(null), N.push(t), M.push(e), w = !0
            }, C.addMarker = function(t, n) {
                (n = n || {}).id = s(n.id), C.clearById(n.id), n.options || (n.options = {}), n.options.position = t.getPosition(), a(e, {
                    td: n
                }, t, n.id), E[n.id] = D.length, k[D.length] = n.id, D.push(t), N.push(n), M.push(n.data || {}), w = !0
            }, C.td = function(t) {
                return N[t]
            }, C.value = function(t) {
                return M[t]
            }, C.marker = function(t) {
                return t in D && (r(t), D[t])
            }, C.markerIsSet = function(t) {
                return Boolean(D[t])
            }, C.setMarker = function(t, e) {
                D[t] = e
            }, C.store = function(t, e, n) {
                T[t.ref] = {
                    obj: e,
                    shadow: n
                }
            }, C.free = function() {
                var e;
                for (e = 0; e < S.length; e++) A.event.removeListener(S[e]);
                S = [], t.each(T, function(t) {
                    l(t)
                }), T = {}, t.each(N, function(t) {
                    N[t] = null
                }), N = [], t.each(D, function(t) {
                    D[t] && (D[t].setMap(null), delete D[t])
                }), D = [], t.each(M, function(t) {
                    delete M[t]
                }), M = [], E = {}, k = {}
            }, C.filter = function(t) {
                m = t, h()
            }, C.enable = function(t) {
                x !== t && (x = t, h())
            }, C.display = function(t) {
                v = t
            }, C.error = function(t) {
                t
            }, C.beginUpdate = function() {
                y = !0
            }, C.endUpdate = function() {
                y = !1, w && h()
            }, C.autofit = function(t) {
                var e;
                for (e = 0; e < N.length; e++) N[e] && t.extend(N[e].options.position)
            }
        }

        function E(t, e) {
            var n = this;
            n.id = function() {
                return t
            }, n.filter = function(t) {
                e.filter(t)
            }, n.enable = function() {
                e.enable(!0)
            }, n.disable = function() {
                e.enable(!1)
            }, n.add = function(t, n, i) {
                i || e.beginUpdate(), e.addMarker(t, n), i || e.endUpdate()
            }, n.getById = function(t) {
                return e.getById(t)
            }, n.clearById = function(t, n) {
                var i;
                return n || e.beginUpdate(), i = e.clearById(t), n || e.endUpdate(), i
            }, n.clear = function(t, n, i, o) {
                o || e.beginUpdate(), e.clear(t, n, i), o || e.endUpdate()
            }
        }

        function k(e, n, i, o) {
            var r = this,
                s = [];
            I.classes.OverlayView.call(r), r.setMap(e), r.onAdd = function() {
                var e = r.getPanes();
                n.pane in e && t(e[n.pane]).append(o), t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "), function(e, n) {
                    s.push(A.event.addDomListener(o[0], n, function(e) {
                        t.Event(e).stopPropagation(), A.event.trigger(r, n, [e]), r.draw()
                    }))
                }), s.push(A.event.addDomListener(o[0], "contextmenu", function(e) {
                    t.Event(e).stopPropagation(), A.event.trigger(r, "rightclick", [e]), r.draw()
                }))
            }, r.getPosition = function() {
                return i
            }, r.setPosition = function(t) {
                i = t, r.draw()
            }, r.draw = function() {
                var t = r.getProjection().fromLatLngToDivPixel(i);
                o.css("left", t.x + n.offset.x + "px").css("top", t.y + n.offset.y + "px")
            }, r.onRemove = function() {
                var t;
                for (t = 0; t < s.length; t++) A.event.removeListener(s[t]);
                o.remove()
            }, r.hide = function() {
                o.hide()
            }, r.show = function() {
                o.show()
            }, r.toggle = function() {
                o && (o.is(":visible") ? r.show() : r.hide())
            }, r.toggleDOM = function() {
                r.setMap(r.getMap() ? null : e)
            }, r.getDOMElement = function() {
                return o[0]
            }
        }

        function D(o) {
            function l() {
                !b && (b = N.get()) && b.run()
            }

            function c() {
                b = null, N.ack(), l.call(D)
            }

            function h(t) {
                var e, n = t.td.callback;
                n && (e = Array.prototype.slice.call(arguments, 1), O(n) ? n.apply(o, e) : M(n) && O(n[1]) && n[1].apply(n[0], e))
            }

            function p(t, e, n) {
                n && a(o, t, e, n), h(t, e), b.ack(e)
            }

            function v(e, n) {
                var i = (n = n || {}).td && n.td.options ? n.td.options : 0;
                j ? i && (i.center && (i.center = g(i.center)), j.setOptions(i)) : ((i = n.opts || t.extend(!0, {}, I.map, i || {})).center = e || g(i.center), j = new I.classes.Map(o.get(0), i))
            }

            function y(n) {
                var i, r, s = new T(o, j, n),
                    l = {},
                    c = {},
                    u = [],
                    h = /^[0-9]+$/;
                for (r in n) h.test(r) ? (u.push(1 * r), c[r] = n[r], c[r].width = c[r].width || 0, c[r].height = c[r].height || 0) : l[r] = n[r];
                return u.sort(function(t, e) {
                    return t > e
                }), i = l.calculator ? function(e) {
                    var n = [];
                    return t.each(e, function(t, e) {
                        n.push(s.value(e))
                    }), l.calculator.apply(o, [n])
                } : function(t) {
                    return t.length
                }, s.error(function() {
                    d.apply(D, arguments)
                }), s.display(function(r) {
                    var d, h, f, p, m, v, y = i(r.indexes);
                    if (n.force || y > 1)
                        for (d = 0; d < u.length; d++) u[d] <= y && (h = c[u[d]]);
                    h ? (m = h.offset || [-h.width / 2, -h.height / 2], (f = t.extend({}, l)).options = t.extend({
                        pane: "overlayLayer",
                        content: h.content ? h.content.replace("CLUSTER_COUNT", y) : "",
                        offset: {
                            x: ("x" in m ? m.x : m[0]) || 0,
                            y: ("y" in m ? m.y : m[1]) || 0
                        }
                    }, l.options || {}), p = D.overlay({
                        td: f,
                        opts: f.options,
                        latLng: g(r)
                    }, !0), f.options.pane = "floatShadow", f.options.content = t(document.createElement("div")).width(h.width + "px").height(h.height + "px").css({
                        cursor: "pointer"
                    }), v = D.overlay({
                        td: f,
                        opts: f.options,
                        latLng: g(r)
                    }, !0), l.data = {
                        latLng: g(r),
                        markers: []
                    }, t.each(r.indexes, function(t, e) {
                        l.data.markers.push(s.value(e)), s.markerIsSet(e) && s.marker(e).setMap(null)
                    }), a(o, {
                        td: l
                    }, v, e, {
                        main: p,
                        shadow: v
                    }), s.store(r, p, v)) : t.each(r.indexes, function(t, e) {
                        s.marker(e).setMap(j)
                    })
                }), s
            }

            function w(e, n, i) {
                var r = [],
                    s = "values" in e.td;
                return s || (e.td.values = [{
                    options: e.opts
                }]), e.td.values.length ? (v(), t.each(e.td.values, function(t, s) {
                    var l, c, d, h, f = u(e, s);
                    if (f.options[i])
                        if (f.options[i][0][0] && M(f.options[i][0][0]))
                            for (c = 0; c < f.options[i].length; c++)
                                for (d = 0; d < f.options[i][c].length; d++) f.options[i][c][d] = g(f.options[i][c][d]);
                        else
                            for (c = 0; c < f.options[i].length; c++) f.options[i][c] = g(f.options[i][c]);
                    f.options.map = j, h = new A[n](f.options), r.push(h), l = P.add({
                        td: f
                    }, n.toLowerCase(), h), a(o, {
                        td: f
                    }, h, l)
                }), void p(e, s ? r : r[0])) : void p(e, !1)
            }
            var b, D = this,
                N = new _,
                P = new x,
                j = null;
            D._plan = function(t) {
                var e;
                for (e = 0; e < t.length; e++) N.add(new C(D, c, t[e]));
                l()
            }, D.map = function(t) {
                v(t.latLng, t), a(o, t, j), p(t, j)
            }, D.destroy = function(t) {
                P.clear(), o.empty(), j && (j = null), p(t, !0)
            }, D.overlay = function(e, n) {
                var i = [],
                    r = "values" in e.td;
                return r || (e.td.values = [{
                    latLng: e.latLng,
                    options: e.opts
                }]), e.td.values.length ? (k.__initialised || (k.prototype = new I.classes.OverlayView, k.__initialised = !0), t.each(e.td.values, function(r, s) {
                    var l, c, d = u(e, s),
                        h = t(document.createElement("div")).css({
                            border: "none",
                            borderWidth: 0,
                            position: "absolute"
                        });
                    h.append(d.options.content), c = new k(j, d.options, g(d) || g(s), h), i.push(c), h = null, n || (l = P.add(e, "overlay", c), a(o, {
                        td: d
                    }, c, l))
                }), n ? i[0] : void p(e, r ? i : i[0])) : void p(e, !1)
            }, D.marker = function(e) {
                var n, i, r, l = "values" in e.td,
                    c = !j;
                return l || (e.opts.position = e.latLng || g(e.opts.position), e.td.values = [{
                    options: e.opts
                }]), e.td.values.length ? (c && v(), e.td.cluster && !j.getBounds() ? void A.event.addListenerOnce(j, "bounds_changed", function() {
                    D.marker.apply(D, [e])
                }) : void(e.td.cluster ? (e.td.cluster instanceof E ? (i = e.td.cluster, r = P.getById(i.id(), !0)) : (r = y(e.td.cluster), i = new E(s(e.td.id, !0), r), P.add(e, "clusterer", i, r)), r.beginUpdate(), t.each(e.td.values, function(t, n) {
                    var i = u(e, n);
                    i.options.position = g(i.options.position ? i.options.position : n), i.options.position && (i.options.map = j, c && (j.setCenter(i.options.position), c = !1), r.add(i, n))
                }), r.endUpdate(), p(e, i)) : (n = [], t.each(e.td.values, function(t, i) {
                    var r, s, l = u(e, i);
                    l.options.position = g(l.options.position ? l.options.position : i), l.options.position && (l.options.map = j, c && (j.setCenter(l.options.position), c = !1), s = new I.classes.Marker(l.options), n.push(s), r = P.add({
                        td: l
                    }, "marker", s), a(o, {
                        td: l
                    }, s, r))
                }), p(e, l ? n : n[0])))) : void p(e, !1)
            }, D.getroute = function(t) {
                t.opts.origin = g(t.opts.origin, !0), t.opts.destination = g(t.opts.destination, !0), (L.ds || (L.ds = new A.DirectionsService), L.ds).route(t.opts, function(e, n) {
                    h(t, n === A.DirectionsStatus.OK && e, n), b.ack()
                })
            }, D.getdistance = function(t) {
                var e;
                for (t.opts.origins = f(t.opts.origins), e = 0; e < t.opts.origins.length; e++) t.opts.origins[e] = g(t.opts.origins[e], !0);
                for (t.opts.destinations = f(t.opts.destinations), e = 0; e < t.opts.destinations.length; e++) t.opts.destinations[e] = g(t.opts.destinations[e], !0);
                (L.dms || (L.dms = new A.DistanceMatrixService), L.dms).getDistanceMatrix(t.opts, function(e, n) {
                    h(t, n === A.DistanceMatrixStatus.OK && e, n), b.ack()
                })
            }, D.infowindow = function(n) {
                var i = [],
                    s = "values" in n.td;
                s || (n.latLng && (n.opts.position = n.latLng), n.td.values = [{
                    options: n.opts
                }]), t.each(n.td.values, function(t, l) {
                    var c, d, h = u(n, l);
                    h.options.position = g(h.options.position ? h.options.position : l.latLng), j || v(h.options.position), (d = new I.classes.InfoWindow(h.options)) && (r(h.open) || h.open) && (s ? d.open(j, h.anchor || e) : d.open(j, h.anchor || (n.latLng ? e : n.session.marker ? n.session.marker : e))), i.push(d), c = P.add({
                        td: h
                    }, "infowindow", d), a(o, {
                        td: h
                    }, d, c)
                }), p(n, s ? i : i[0])
            }, D.circle = function(e) {
                var n = [],
                    i = "values" in e.td;
                return i || (e.opts.center = e.latLng || g(e.opts.center), e.td.values = [{
                    options: e.opts
                }]), e.td.values.length ? (t.each(e.td.values, function(t, i) {
                    var r, s, l = u(e, i);
                    l.options.center = g(l.options.center ? l.options.center : i), j || v(l.options.center), l.options.map = j, s = new I.classes.Circle(l.options), n.push(s), r = P.add({
                        td: l
                    }, "circle", s), a(o, {
                        td: l
                    }, s, r)
                }), void p(e, i ? n : n[0])) : void p(e, !1)
            }, D.getaddress = function(t) {
                h(t, t.results, t.status), b.ack()
            }, D.getlatlng = function(t) {
                h(t, t.results, t.status), b.ack()
            }, D.getmaxzoom = function(t) {
                (L.mzs || (L.mzs = new A.MaxZoomService), L.mzs).getMaxZoomAtLatLng(t.latLng, function(e) {
                    h(t, e.status === A.MaxZoomStatus.OK && e.zoom, status), b.ack()
                })
            }, D.getelevation = function(t) {
                var e, n = [],
                    i = function(e, n) {
                        h(t, n === A.ElevationStatus.OK && e, n), b.ack()
                    };
                if (t.latLng) n.push(t.latLng);
                else
                    for (n = f(t.td.locations || []), e = 0; e < n.length; e++) n[e] = g(n[e]);
                if (n.length) S().getElevationForLocations({
                    locations: n
                }, i);
                else {
                    if (t.td.path && t.td.path.length)
                        for (e = 0; e < t.td.path.length; e++) n.push(g(t.td.path[e]));
                    n.length ? S().getElevationAlongPath({
                        path: n,
                        samples: t.td.samples
                    }, i) : b.ack()
                }
            }, D.defaults = function(e) {
                t.each(e.td, function(e, i) {
                    I[e] = n(I[e]) ? t.extend({}, I[e], i) : i
                }), b.ack(!0)
            }, D.rectangle = function(e) {
                var n = [],
                    i = "values" in e.td;
                return i || (e.td.values = [{
                    options: e.opts
                }]), e.td.values.length ? (t.each(e.td.values, function(t, i) {
                    var r, s, l = u(e, i);
                    l.options.bounds = m(l.options.bounds ? l.options.bounds : i), j || v(l.options.bounds.getCenter()), l.options.map = j, s = new I.classes.Rectangle(l.options), n.push(s), r = P.add({
                        td: l
                    }, "rectangle", s), a(o, {
                        td: l
                    }, s, r)
                }), void p(e, i ? n : n[0])) : void p(e, !1)
            }, D.polyline = function(t) {
                w(t, "Polyline", "path")
            }, D.polygon = function(t) {
                w(t, "Polygon", "paths")
            }, D.trafficlayer = function(t) {
                v();
                var e = P.get("trafficlayer");
                e || ((e = new I.classes.TrafficLayer).setMap(j), P.add(t, "trafficlayer", e)), p(t, e)
            }, D.bicyclinglayer = function(t) {
                v();
                var e = P.get("bicyclinglayer");
                e || ((e = new I.classes.BicyclingLayer).setMap(j), P.add(t, "bicyclinglayer", e)), p(t, e)
            }, D.groundoverlay = function(t) {
                t.opts.bounds = m(t.opts.bounds), t.opts.bounds && v(t.opts.bounds.getCenter());
                var e = new I.classes.GroundOverlay(t.opts.url, t.opts.bounds, t.opts.opts);
                e.setMap(j), p(t, e, P.add(t, "groundoverlay", e))
            }, D.streetviewpanorama = function(e) {
                e.opts.opts || (e.opts.opts = {}), e.latLng ? e.opts.opts.position = e.latLng : e.opts.opts.position && (e.opts.opts.position = g(e.opts.opts.position)), e.td.divId ? e.opts.container = document.getElementById(e.td.divId) : e.opts.container && (e.opts.container = t(e.opts.container).get(0));
                var n = new I.classes.StreetViewPanorama(e.opts.container, e.opts.opts);
                n && j.setStreetView(n), p(e, n, P.add(e, "streetviewpanorama", n))
            }, D.kmllayer = function(e) {
                var n = [],
                    i = "values" in e.td;
                return i || (e.td.values = [{
                    options: e.opts
                }]), e.td.values.length ? (t.each(e.td.values, function(t, i) {
                    var r, s, l, c = u(e, i);
                    j || v(), l = c.options, c.options.opts && (l = c.options.opts, c.options.url && (l.url = c.options.url)), l.map = j, s = function(t) {
                        var e, n = A.version.split(".");
                        for (t = t.split("."), e = 0; e < n.length; e++) n[e] = parseInt(n[e], 10);
                        for (e = 0; e < t.length; e++) {
                            if (t[e] = parseInt(t[e], 10), !n.hasOwnProperty(e)) return !1;
                            if (n[e] < t[e]) return !1
                        }
                        return !0
                    }("3.10") ? new I.classes.KmlLayer(l) : new I.classes.KmlLayer(l.url, l), n.push(s), r = P.add({
                        td: c
                    }, "kmllayer", s), a(o, {
                        td: c
                    }, s, r)
                }), void p(e, i ? n : n[0])) : void p(e, !1)
            }, D.panel = function(e) {
                v();
                var n, i = 0,
                    s = 0,
                    a = t(document.createElement("div"));
                a.css({
                    position: "absolute",
                    zIndex: 1e3,
                    visibility: "hidden"
                }), e.opts.content && (n = t(e.opts.content), a.append(n), o.first().prepend(a), r(e.opts.left) ? r(e.opts.right) ? e.opts.center && (i = (o.width() - n.width()) / 2) : i = o.width() - n.width() - e.opts.right : i = e.opts.left, r(e.opts.top) ? r(e.opts.bottom) ? e.opts.middle && (s = (o.height() - n.height()) / 2) : s = o.height() - n.height() - e.opts.bottom : s = e.opts.top, a.css({
                    top: s,
                    left: i,
                    visibility: "visible"
                })), p(e, a, P.add(e, "panel", a)), a = null
            }, D.directionsrenderer = function(e) {
                e.opts.map = j;
                var n = new A.DirectionsRenderer(e.opts);
                e.td.divId ? n.setPanel(document.getElementById(e.td.divId)) : e.td.container && n.setPanel(t(e.td.container).get(0)), p(e, n, P.add(e, "directionsrenderer", n))
            }, D.getgeoloc = function(t) {
                p(t, t.latLng)
            }, D.styledmaptype = function(t) {
                v();
                var e = new I.classes.StyledMapType(t.td.styles, t.opts);
                j.mapTypes.set(t.td.id, e), p(t, e)
            }, D.imagemaptype = function(t) {
                v();
                var e = new I.classes.ImageMapType(t.opts);
                j.mapTypes.set(t.td.id, e), p(t, e)
            }, D.autofit = function(e) {
                var n = new A.LatLngBounds;
                t.each(P.all(), function(t, e) {
                    e.getPosition ? n.extend(e.getPosition()) : e.getBounds ? (n.extend(e.getBounds().getNorthEast()), n.extend(e.getBounds().getSouthWest())) : e.getPaths ? e.getPaths().forEach(function(t) {
                        t.forEach(function(t) {
                            n.extend(t)
                        })
                    }) : e.getPath ? e.getPath().forEach(function(t) {
                        n.extend(t)
                    }) : e.getCenter ? n.extend(e.getCenter()) : e instanceof E && ((e = P.getById(e.id(), !0)) && e.autofit(n))
                }), n.isEmpty() || j.getBounds() && j.getBounds().equals(n) || ("maxZoom" in e.td && A.event.addListenerOnce(j, "bounds_changed", function() {
                    this.getZoom() > e.td.maxZoom && this.setZoom(e.td.maxZoom)
                }), j.fitBounds(n)), p(e, !0)
            }, D.clear = function(e) {
                if (i(e.td)) {
                    if (P.clearById(e.td) || P.objClearById(e.td)) return void p(e, !0);
                    e.td = {
                        name: e.td
                    }
                }
                e.td.id ? t.each(f(e.td.id), function(t, e) {
                    P.clearById(e) || P.objClearById(e)
                }) : (P.clear(f(e.td.name), e.td.last, e.td.first, e.td.tag), P.objClear(f(e.td.name), e.td.last, e.td.first, e.td.tag)), p(e, !0)
            }, D.get = function(n, o, r) {
                var s, a, l = o ? n : n.td;
                return o || (r = l.full), i(l) ? !1 === (a = P.getById(l, !1, r) || P.objGetById(l)) && (s = l, l = {}) : s = l.name, "map" === s && (a = j), a || (a = [], l.id ? (t.each(f(l.id), function(t, e) {
                    a.push(P.getById(e, !1, r) || P.objGetById(e))
                }), M(l.id) || (a = a[0])) : (t.each(s ? f(s) : [e], function(e, n) {
                    var i;
                    l.first ? (i = P.get(n, !1, l.tag, r)) && a.push(i) : l.all ? t.each(P.all(n, l.tag, r), function(t, e) {
                        a.push(e)
                    }) : (i = P.get(n, !0, l.tag, r)) && a.push(i)
                }), l.all || M(s) || (a = a[0]))), a = M(a) || !l.all ? a : [a], o ? a : void p(n, a)
            }, D.exec = function(e) {
                t.each(f(e.td.func), function(n, i) {
                    t.each(D.get(e.td, !0, !e.td.hasOwnProperty("full") || e.td.full), function(t, e) {
                        i.call(o, e)
                    })
                }), p(e, !0)
            }, D.trigger = function(e) {
                if (i(e.td)) A.event.trigger(j, e.td);
                else {
                    var n = [j, e.td.eventName];
                    e.td.var_args && t.each(e.td.var_args, function(t, e) {
                        n.push(e)
                    }), A.event.trigger.apply(A.event, n)
                }
                h(e), b.ack()
            }
        }
        var I, A, N = 0,
            O = t.isFunction,
            M = t.isArray,
            L = {},
            P = new function() {
                var t = [];
                this.get = function(e) {
                    if (t.length) {
                        var i, o, r, s, a, c = l(e);
                        for (i = 0; i < t.length; i++) {
                            for (s = t[i], a = c.length === s.keys.length, o = 0; o < c.length && a; o++)(a = (r = c[o]) in s.request) && (a = n(e[r]) && "equals" in e[r] && O(e[r]) ? e[r].equals(s.request[r]) : e[r] === s.request[r]);
                            if (a) return s.results
                        }
                    }
                }, this.store = function(e, n) {
                    t.push({
                        request: e,
                        keys: l(e),
                        results: n
                    })
                }
            };
        // t.fn.gmap3 = function() {
        //     var e, n = [],
        //         i = [];
        //     for (function() {
        //             var e;
        //             A = google.maps, I || (I = {
        //                 verbose: !1,
        //                 queryLimit: {
        //                     attempt: 5,
        //                     delay: 250,
        //                     random: 250
        //                 },
        //                 classes: (e = {}, t.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "), function(t, n) {
        //                     e[n] = A[n]
        //                 }), e),
        //                 map: {
        //                     mapTypeId: A.MapTypeId.ROADMAP,
        //                     center: [46.578498, 2.457275],
        //                     zoom: 2
        //                 },
        //                 overlay: {
        //                     pane: "floatPane",
        //                     content: "",
        //                     offset: {
        //                         x: 0,
        //                         y: 0
        //                     }
        //                 },
        //                 geoloc: {
        //                     getCurrentPosition: {
        //                         maximumAge: 6e4,
        //                         timeout: 5e3
        //                     }
        //                 }
        //             })
        //         }(), e = 0; e < arguments.length; e++) arguments[e] && n.push(arguments[e]);
        //     return n.length || n.push("map"), t.each(this, function() {
        //         var e = t(this),
        //             o = e.data("gmap3");
        //         !1, o || (o = new D(e), e.data("gmap3", o)), 1 !== n.length || "get" !== n[0] && !b(n[0]) ? o._plan(n) : i.push("get" === n[0] ? o.get("map", !0) : o.get(n[0].get, !0, n[0].get.full))
        //     }), i.length ? 1 === i.length ? i[0] : i : this
        // }
    }(jQuery),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function() {
            return e.apply(t)
        }) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t)
    }
		("object" == typeof global ? global : this, function() {
        "use strict";

        function t(t) {
            var e = typeof t;
            return "function" === e || "object" === e && !!t
        }

        function e(e) {
            var n = l.call(e);
            return "[object String]" === n ? a(e) : t(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(n) && e.hasOwnProperty("length") ? e : function(e) {
                return t(e) && e.nodeType > 0
            }(e) ? [e] : []
        }

        function n(t) {
            var e, n, i = {
                    top: 0,
                    left: 0
                },
                o = t && t.ownerDocument;
            return e = o.documentElement, void 0 !== t.getBoundingClientRect && (i = t.getBoundingClientRect()), n = function(t) {
                return function(t) {
                    return null !== t && t === t.window
                }(t) ? t : 9 === t.nodeType && t.defaultView
            }(o), {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }
        }

        function i(t) {
            var e = "";
            for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
            return e
        }

        function o(t, e, n) {
            if (n) {
                n.classList.remove("waves-rippling");
                var o = n.getAttribute("data-x"),
                    r = n.getAttribute("data-y"),
                    s = n.getAttribute("data-scale"),
                    a = n.getAttribute("data-translate"),
                    l = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
                0 > l && (l = 0), "mousemove" === t.type && (l = 150);
                var c = "mousemove" === t.type ? 2500 : u.duration;
                setTimeout(function() {
                    var t = {
                        top: r + "px",
                        left: o + "px",
                        opacity: "0",
                        "-webkit-transition-duration": c + "ms",
                        "-moz-transition-duration": c + "ms",
                        "-o-transition-duration": c + "ms",
                        "transition-duration": c + "ms",
                        "-webkit-transform": s + " " + a,
                        "-moz-transform": s + " " + a,
                        "-ms-transform": s + " " + a,
                        "-o-transform": s + " " + a,
                        transform: s + " " + a
                    };
                    n.setAttribute("style", i(t)), setTimeout(function() {
                        try {
                            e.removeChild(n)
                        } catch (t) {
                            return !1
                        }
                    }, c)
                }, l)
            }
        }

        function r(t) {
            var e = function(t) {
                if (!1 === h.allowEvent(t)) return null;
                for (var e = null, n = t.target || t.srcElement; null !== n.parentElement;) {
                    if (n.classList.contains("waves-effect") && !(n instanceof SVGElement)) {
                        e = n;
                        break
                    }
                    n = n.parentElement
                }
                return e
            }(t);
            if (null !== e) {
                if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled")) return;
                if (h.registerEvent(t), "touchstart" === t.type && u.delay) {
                    var n = !1,
                        i = setTimeout(function() {
                            i = null, u.show(t, e)
                        }, u.delay),
                        o = function(o) {
                            i && (clearTimeout(i), i = null, u.show(t, e)), n || (n = !0, u.hide(o, e))
                        };
                    e.addEventListener("touchmove", function(t) {
                        i && (clearTimeout(i), i = null), o(t)
                    }, !1), e.addEventListener("touchend", o, !1), e.addEventListener("touchcancel", o, !1)
                } else u.show(t, e), c && (e.addEventListener("touchend", u.hide, !1), e.addEventListener("touchcancel", u.hide, !1)), e.addEventListener("mouseup", u.hide, !1), e.addEventListener("mouseleave", u.hide, !1)
            }
        }
        var s = s || {},
            a = document.querySelectorAll.bind(document),
            l = Object.prototype.toString,
            c = "ontouchstart" in window,
            u = {
                duration: 750,
                delay: 200,
                show: function(t, e, o) {
                    if (2 === t.button) return !1;
                    e = e || this;
                    var r = document.createElement("div");
                    r.className = "waves-ripple waves-rippling", e.appendChild(r);
                    var s = n(e),
                        a = 0,
                        l = 0;
                    "touches" in t && t.touches.length ? (a = t.touches[0].pageY - s.top, l = t.touches[0].pageX - s.left) : (a = t.pageY - s.top, l = t.pageX - s.left), l = l >= 0 ? l : 0, a = a >= 0 ? a : 0;
                    var c = "scale(" + e.clientWidth / 100 * 3 + ")",
                        d = "translate(0,0)";
                    o && (d = "translate(" + o.x + "px, " + o.y + "px)"), r.setAttribute("data-hold", Date.now()), r.setAttribute("data-x", l), r.setAttribute("data-y", a), r.setAttribute("data-scale", c), r.setAttribute("data-translate", d);
                    var h = {
                        top: a + "px",
                        left: l + "px"
                    };
                    r.classList.add("waves-notransition"), r.setAttribute("style", i(h)), r.classList.remove("waves-notransition"), h["-webkit-transform"] = c + " " + d, h["-moz-transform"] = c + " " + d, h["-ms-transform"] = c + " " + d, h["-o-transform"] = c + " " + d, h.transform = c + " " + d, h.opacity = "1";
                    var f = "mousemove" === t.type ? 2500 : u.duration;
                    h["-webkit-transition-duration"] = f + "ms", h["-moz-transition-duration"] = f + "ms", h["-o-transition-duration"] = f + "ms", h["transition-duration"] = f + "ms", r.setAttribute("style", i(h))
                },
                hide: function(t, e) {
                    for (var n = (e = e || this).getElementsByClassName("waves-rippling"), i = 0, r = n.length; r > i; i++) o(t, e, n[i])
                }
            },
            d = {
                input: function(t) {
                    var e = t.parentNode;
                    if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                        var n = document.createElement("i");
                        n.className = t.className + " waves-input-wrapper", t.className = "waves-button-input", e.replaceChild(n, t), n.appendChild(t);
                        var i = window.getComputedStyle(t, null),
                            o = i.color,
                            r = i.backgroundColor;
                        n.setAttribute("style", "color:" + o + ";background:" + r), t.setAttribute("style", "background-color:rgba(0,0,0,0);")
                    }
                },
                img: function(t) {
                    var e = t.parentNode;
                    if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                        var n = document.createElement("i");
                        e.replaceChild(n, t), n.appendChild(t)
                    }
                }
            },
            h = {
                touches: 0,
                allowEvent: function(t) {
                    var e = !0;
                    return /^(mousedown|mousemove)$/.test(t.type) && h.touches && (e = !1), e
                },
                registerEvent: function(t) {
                    var e = t.type;
                    "touchstart" === e ? h.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function() {
                        h.touches && (h.touches -= 1)
                    }, 500)
                }
            };
        return s.init = function(t) {
            var e = document.body;
            "duration" in (t = t || {}) && (u.duration = t.duration), "delay" in t && (u.delay = t.delay), c && (e.addEventListener("touchstart", r, !1), e.addEventListener("touchcancel", h.registerEvent, !1), e.addEventListener("touchend", h.registerEvent, !1)), e.addEventListener("mousedown", r, !1)
        }, s.attach = function(t, n) {
            t = e(t), "[object Array]" === l.call(n) && (n = n.join(" ")), n = n ? " " + n : "";
            for (var i, o, r = 0, s = t.length; s > r; r++) o = (i = t[r]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o) && (d[o](i), i = i.parentElement), -1 === i.className.indexOf("waves-effect") && (i.className += " waves-effect" + n)
        }, s.ripple = function(t, i) {
            var o = (t = e(t)).length;
            if ((i = i || {}).wait = i.wait || 0, i.position = i.position || null, o)
                for (var r, s, a, l = {}, c = 0, d = {
                        type: "mousedown",
                        button: 1
                    }, h = function(t, e) {
                        return function() {
                            u.hide(t, e)
                        }
                    }; o > c; c++)
                    if (r = t[c], s = i.position || {
                            x: r.clientWidth / 2,
                            y: r.clientHeight / 2
                        }, a = n(r), l.x = a.left + s.x, l.y = a.top + s.y, d.pageX = l.x, d.pageY = l.y, u.show(d, r), i.wait >= 0 && null !== i.wait) {
                        setTimeout(h({
                            type: "mouseup",
                            button: 1
                        }, r), i.wait)
                    }
        }, s.calm = function(t) {
            for (var n = {
                    type: "mouseup",
                    button: 1
                }, i = 0, o = (t = e(t)).length; o > i; i++) u.hide(n, t[i])
        }, s.displayEffect = function(t) {
            s.init(t)
        }, s
    }),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = [],
            n = [],
            i = {
                precision: 100,
                elapse: !1,
                defer: !1
            };
        n.push(/^[0-9]*$/.source), n.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), n.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), n = new RegExp(n.join("|"));
        var o = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            d: "daysToWeek",
            w: "weeks",
            W: "weeksToMonth",
            H: "hours",
            M: "minutes",
            S: "seconds",
            D: "totalDays",
            I: "totalHours",
            N: "totalMinutes",
            T: "totalSeconds"
        };

        function r(t, e) {
            var n = "s",
                i = "";
            return t && (1 === (t = t.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? n = t[0] : (i = t[0], n = t[1])), Math.abs(e) > 1 ? n : i
        }
        var s = function(n, o, r) {
            this.el = n, this.$el = t(n), this.interval = null, this.offset = {}, this.options = t.extend({}, i), this.instanceNumber = e.length, e.push(this), this.$el.data("countdown-instance", this.instanceNumber), r && ("function" == typeof r ? (this.$el.on("update.countdown", r), this.$el.on("stoped.countdown", r), this.$el.on("finish.countdown", r)) : this.options = t.extend({}, i, r)), this.setFinalDate(o), !1 === this.options.defer && this.start()
        };
        t.extend(s.prototype, {
            start: function() {
                null !== this.interval && clearInterval(this.interval);
                var t = this;
                this.update(), this.interval = setInterval(function() {
                    t.update.call(t)
                }, this.options.precision)
            },
            stop: function() {
                clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
            },
            toggle: function() {
                this.interval ? this.stop() : this.start()
            },
            pause: function() {
                this.stop()
            },
            resume: function() {
                this.start()
            },
            remove: function() {
                this.stop.call(this), e[this.instanceNumber] = null, delete this.$el.data().countdownInstance
            },
            setFinalDate: function(t) {
                this.finalDate = function(t) {
                    if (t instanceof Date) return t;
                    if (String(t).match(n)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
                    throw new Error("Couldn't cast `" + t + "` to a date object.")
                }(t)
            },
            update: function() {
                if (0 !== this.$el.closest("html").length) {
                    var e, n = void 0 !== t._data(this.el, "events"),
                        i = new Date;
                    e = this.finalDate.getTime() - i.getTime(), e = Math.ceil(e / 1e3), e = !this.options.elapse && e < 0 ? 0 : Math.abs(e), this.totalSecsLeft !== e && n && (this.totalSecsLeft = e, this.elapsed = i >= this.finalDate, this.offset = {
                        seconds: this.totalSecsLeft % 60,
                        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                        weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                        weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                        months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                        years: Math.abs(this.finalDate.getFullYear() - i.getFullYear()),
                        totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                        totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                        totalMinutes: Math.floor(this.totalSecsLeft / 60),
                        totalSeconds: this.totalSecsLeft
                    }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
                } else this.remove()
            },
            dispatchEvent: function(e) {
                var n, i = t.Event(e + ".countdown");
                i.finalDate = this.finalDate, i.elapsed = this.elapsed, i.offset = t.extend({}, this.offset), i.strftime = (n = this.offset, function(t) {
                    var e, i, s = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                    if (s)
                        for (var a = 0, l = s.length; a < l; ++a) {
                            var c = s[a].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                                u = (e = c[0], i = void 0, i = e.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), new RegExp(i)),
                                d = c[1] || "",
                                h = c[3] || "",
                                f = null;
                            c = c[2], o.hasOwnProperty(c) && (f = o[c], f = Number(n[f])), null !== f && ("!" === d && (f = r(h, f)), "" === d && f < 10 && (f = "0" + f.toString()), t = t.replace(u, f.toString()))
                        }
                    return t = t.replace(/%%/, "%")
                }), this.$el.trigger(i)
            }
        }), t.fn.countdown = function() {
            var n = Array.prototype.slice.call(arguments, 0);
            return this.each(function() {
                var i = t(this).data("countdown-instance");
                if (void 0 !== i) {
                    var o = e[i],
                        r = n[0];
                    s.prototype.hasOwnProperty(r) ? o[r].apply(o, n.slice(1)) : null === String(r).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (o.setFinalDate.call(o, r), o.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, r))
                } else new s(this, n[0], n[1])
            })
        }
    }),
    function(t) {
        "use strict";
        t(function() {
            var e, n, i, o, r, s;
            e = "desktop", t(window).on("load resize", function() {
                    var n = "desktop";
                    if (matchMedia("only screen and (max-width: 991px)").matches && (n = "mobile"), n !== e)
                        if (e = n, "mobile" === n) {
                            var i = t("#mainnav").attr("id", "mainnav-mobi").hide(),
                                o = t("#mainnav-mobi").find("li:has(ul)"),
                                r = t("#mainnav-mobi").find("li:has(div.submenu)");
                            t("#header").after(i), o.children("ul").hide(), o.children("a").after('<span class="btn-submenu"></span>'), r.children("div.submenu").hide(), t("ul.submenu-child").hide(), r.find("h3").append('<span class="btn-submenu-child"></span>'), t(".btn-menu").removeClass("active")
                        } else {
                            var s = t("#mainnav-mobi").attr("id", "mainnav").removeAttr("style");
                            s.find(".submenu").removeAttr("style"), t("#header").find(".nav-wrap").append(s), t(".btn-submenu").remove(), t("ul.submenu-child").show(), t("h3").children("span").removeClass("btn-submenu-child")
                        }
                }), t(".btn-menu").on("click", function() {
                    return t("#mainnav-mobi").slideToggle(300), t(this).toggleClass("active"), !1
                }), t(document).on("click", "#mainnav-mobi li.has-mega-menu .row .btn-submenu-child", function(e) {
                    return t(this).toggleClass("active").parent("h3.cat-title").next(".submenu-child").slideToggle(400), e.stopImmediatePropagation(), !1
                }), t(document).on("click", "#mainnav-mobi li .btn-submenu", function(e) {
                    return t(this).toggleClass("active").next(".submenu").slideToggle(400), e.stopImmediatePropagation(), !1
                }),
                function() {
                    var e = "desktop";
                    t(window).on("load resize", function() {
                        var n = "desktop";
                        if (matchMedia("only screen and (max-width: 991px)").matches && (n = "mobile"), n !== e && (e = n, t("body").hasClass("grid")))
                            if ("mobile" === n) {
                                var i = t("#mega-menu").attr("id", "mega-mobile").hide(),
                                    o = t(".header-bottom").find(".grid-right"),
                                    r = t(".drop-menu").children(".one-third");
                                t(".btn-mega").hide(), t("#header").after(i), o.append('<div class="btn-menu-mega"><span></span></div>'), t(".drop-menu").hide(), i.find(".dropdown").append('<span class="btn-dropdown"></span>'), r.children("ul").hide(), t(".drop-menu").find(".cat-title").append('<span class="btn-dropdown-child"></span>')
                            } else {
                                var s = t("#mega-mobile").attr("id", "mega-menu").removeAttr("style");
                                s.find(".drop-menu").removeAttr("style"), t(".header-bottom.style1").find(".grid-left").append(s)
                            }
                    }), t(document).on("click", "#mega-mobile ul.menu li a .btn-dropdown", function(e) {
                        return t(this).toggleClass("active").closest("li").children(".drop-menu").slideToggle(400), e.stopImmediatePropagation(), !1
                    }), t(document).on("click", "#mega-mobile .btn-dropdown-child", function(e) {
                        return t(this).toggleClass("active").closest(".one-third").children("ul").slideToggle(400), e.stopImmediatePropagation(), !1
                    })
                }(),
                function() {
                    var e = "desktop";
                    t(window).on("load resize", function() {
                        var n = "desktop";
                        if (matchMedia("only screen and (max-width: 991px)").matches && (n = "mobile"), n !== e)
                            if (e = n, "mobile" === n) {
                                var i = t("#mega-menu").attr("id", "mega-mobile").hide(),
                                    o = t(".header-bottom").find(".col-2"),
                                    r = t(".drop-menu").children(".one-third");
                                t(".btn-mega").hide(), t("#header").after(i), o.append('<div class="btn-menu-mega"><span></span></div>'), t(".drop-menu").hide(), i.find(".dropdown").append('<span class="btn-dropdown"></span>'), r.children("ul").hide(), t(".drop-menu").find(".cat-title").append('<span class="btn-dropdown-child"></span>')
                            } else {
                                var s = t("#mega-mobile").attr("id", "mega-menu").removeAttr("style");
                                t(".btn-mega").show(), s.find(".drop-menu").removeAttr("style"), t(".header-bottom").find(".col-2").append(s), t(".btn-menu-mega").remove(), t(".btn-dropdown-child").remove(), t(".drop-menu").children(".one-third").children("ul").show()
                            }
                    }), t(document).on("click", ".btn-menu-mega", function() {
                        return t("#mega-mobile").slideToggle(300), t(this).toggleClass("active"), !1
                    }), t(document).on("click", "#mega-mobile ul.menu li a .btn-dropdown", function(e) {
                        return t(this).toggleClass("active").closest("li").children(".drop-menu").slideToggle(400), e.stopImmediatePropagation(), !1
                    }), t(document).on("click", "#mega-mobile .btn-dropdown-child", function(e) {
                        return t(this).toggleClass("active").closest(".one-third").children("ul").slideToggle(400), e.stopImmediatePropagation(), !1
                    })
                }(), (n = t(".show-search button")).on("click", function() {
                    t(".show-search").parent("div").children(".top-search.style1").toggleClass("active"), n.toggleClass("active")
                }), t(".filter").on("click", function() {
                    t(".box-filter").toggleClass("active")
                }), Waves.attach(".button", ["waves-button", "waves-float"]), Waves.init(), t(".owl-carousel").owlCarousel({
                    autoplay: !0,
                    nav: !1,
                    responsive: !0,
                    margin: 0,
                    loop: !0,
                    items: 1
                }), t(".owl-carousel-11").owlCarousel({
                    autoplay: !0,
                    nav: !1,
                    dots: !0,
                    responsive: !0,
                    margin: 20,
                    loop: !0,
                    items: 1
                }), t(".owl-carousel-1").owlCarousel({
                    autoplay: !1,
                    nav: !0,
                    dots: !1,
                    responsive: !0,
                    margin: 0,
                    loop: !0,
                    items: 1
                }), t(".owl-carousel-2").owlCarousel({
                    autoplay: !0,
                    nav: !0,
                    dots: !1,
                    responsive: !0,
                    margin: 0,
                    loop: !0,
                    items: 1
                }), t(".owl-carousel-3").owlCarousel({
                    autoplay: !0,
                    nav: !0,
                    dots: !0,
                    responsive: !0,
                    margin: 30,
                    loop: !0,
                    items: 5,
                    responsive: {
                        0: {
                            items: 2,
                            dots: !1,
                            margin: 10
                        },
                        479: {
                            items: 2,
                            dots: !1
                        },
                        600: {
                            items: 3,
                            dots: !1
                        },
                        768: {
                            items: 4,
                            margin: 20
                        },
                        991: {
                            items: 4
                        },
                        1200: {
                            items: 5
                        }
                    }
                }), t(".owl-carousel-4").owlCarousel({
                    autoplay: !0,
                    nav: !1,
                    dots: !0,
                    responsive: !0,
                    margin: 20,
                    loop: !0,
                    items: 4,
                    responsive: {
                        0: {
                            items: 1,
                            dots: !1,
                            nav: !0
                        },
                        479: {
                            items: 3
                        },
                        768: {
                            items: 3
                        },
                        991: {
                            items: 3
                        },
                        1200: {
                            items: 4
                        }
                    }
                }), t(".owl-carousel-6").owlCarousel({
                    autoplay: !0,
                    nav: !0,
                    dots: !0,
                    responsive: !0,
                    margin: 25,
                    loop: !0,
                    items: 7,
                    responsive: {
                        0: {
                            items: 1,
                            dots: !1
                        },
                        479: {
                            items: 2,
                            dots: !1
                        },
                        768: {
                            items: 4,
                            dots: !1
                        },
                        991: {
                            items: 4
                        },
                        1200: {
                            items: 5
                        },
                        1900: {
                            items: 7
                        }
                    }
                }), t(".owl-carousel-13").owlCarousel({
                    autoplay: !0,
                    nav: !0,
                    dots: !1,
                    responsive: !0,
                    margin: 5,
                    loop: !0,
                    items: 5,
                    responsive: {
                        0: {
                            items: 1,
                            dots: !1
                        },
                        479: {
                            items: 2,
                            dots: !1
                        },
                        599: {
                            items: 3,
                            dots: !1
                        },
                        768: {
                            items: 3,
                            dots: !1
                        },
                        991: {
                            items: 4
                        },
                        1200: {
                            items: 5
                        }
                    }
                }), t(".owl-carousel-5").owlCarousel({
                    autoplay: !0,
                    nav: !1,
                    dots: !1,
                    responsive: !0,
                    margin: 20,
                    loop: !0,
                    items: 5,
                    responsive: {
                        0: {
                            items: 2
                        },
                        479: {
                            items: 4
                        },
                        768: {
                            items: 4
                        },
                        991: {
                            items: 5
                        },
                        1200: {
                            items: 5
                        }
                    }
                }), t(".owl-carousel-7").owlCarousel({
                    autoplay: !0,
                    nav: !0,
                    dots: !1,
                    responsive: !0,
                    margin: 0,
                    loop: !0,
                    items: 1
                }), t(".owl-carousel-8").owlCarousel({
                    autoplay: !0,
                    nav: !1,
                    dots: !0,
                    responsive: !0,
                    margin: 30,
                    loop: !0,
                    items: 4,
                    responsive: {
                        0: {
                            items: 1,
                            dots: !1,
                            nav: !0
                        },
                        479: {
                            items: 2
                        },
                        599: {
                            items: 2
                        },
                        768: {
                            items: 3
                        },
                        991: {
                            items: 4
                        },
                        1200: {
                            items: 4
                        }
                    }
                }), t(".owl-carousel-9").owlCarousel({
                    autoplay: !0,
                    nav: !1,
                    dots: !0,
                    responsive: !0,
                    margin: 30,
                    loop: !0,
                    items: 6,
                    responsive: {
                        0: {
                            items: 1,
                            dots: !1,
                            nav: !0
                        },
                        479: {
                            items: 2,
                            dots: !1,
                            nav: !0
                        },
                        599: {
                            items: 3,
                            dots: !1,
                            nav: !0
                        },
                        768: {
                            items: 4
                        },
                        991: {
                            items: 5
                        },
                        1200: {
                            items: 6
                        }
                    }
                }), t(".owl-carousel-10").owlCarousel({
                    autoplay: !1,
                    nav: !1,
                    dots: !0,
                    responsive: !0,
                    margin: 30,
                    loop: !0,
                    items: 3,
                    responsive: {
                        0: {
                            items: 1,
                            dots: !1
                        },
                        479: {
                            items: 1,
                            dots: !1
                        },
                        599: {
                            items: 1,
                            dots: !1
                        },
                        768: {
                            items: 2,
                            dots: !1
                        },
                        991: {
                            items: 3
                        },
                        1200: {
                            items: 3
                        }
                    }
                }), t(".owl-carousel-12").owlCarousel({
                    autoplay: !0,
                    nav: !0,
                    dots: !1,
                    responsive: !0,
                    margin: 20,
                    loop: !0,
                    items: 1
                }), t(".owl-carousel-14").owlCarousel({
                    autoplay: !0,
                    nav: !0,
                    dots: !1,
                    responsive: !0,
                    margin: 20,
                    loop: !0,
                    items: 1
                }), t(".owl-carousel-15").owlCarousel({
                    autoplay: !0,
                    nav: !0,
                    dots: !0,
                    responsive: !0,
                    margin: 20,
                    loop: !0,
                    items: 1
                }), t(".owl-carousel-16").owlCarousel({
                    autoplay: !0,
                    nav: !1,
                    dots: !0,
                    responsive: !0,
                    margin: 0,
                    loop: !0,
                    items: 1
                }), t(".owl-carousel-18").owlCarousel({
                    autoplay: !0,
                    nav: !1,
                    responsive: !0,
                    margin: 0,
                    loop: !0,
                    items: 1
                }), t(".owl-carousel-19").owlCarousel({
                    autoplay: !0,
                    nav: !1,
                    dots: !0,
                    responsive: !0,
                    margin: 30,
                    loop: !0,
                    items: 3,
                    responsive: {
                        0: {
                            items: 1,
                            dots: !1
                        },
                        479: {
                            items: 1,
                            dots: !1
                        },
                        599: {
                            items: 1,
                            dots: !1
                        },
                        768: {
                            items: 2,
                            dots: !1
                        },
                        991: {
                            items: 3
                        },
                        1200: {
                            items: 4
                        }
                    }
                }), t(".owl-carousel-17").owlCarousel({
                    autoplay: !0,
                    nav: !1,
                    responsive: !0,
                    margin: 0,
                    loop: !0,
                    items: 1
                }), i = '<div class="square"><div class="numb">', t().countdown && t(".count-down").countdown("2020/12/20", function(e) {
                    t(this).html(e.strftime(i + '%D</div><div class="text">DAYS</div></div>' + i + '%H</div><div class="text">HOURS</div></div>' + i + '%M</div><div class="text">MINS</div></div>' + i + '%S</div><div class="text">SECS</div>'))
                }),
                function() {
                    var e = '<div class="square"><div class="numb">';
                    t().countdown && t(".counter.style1.v1 .counter-content .count-down").countdown("2020/12/20", function(n) {
                        t(this).html(n.strftime(e + '%D</div><div class="text">DAYS</div></div>' + e + '%H</div><div class="text">HOURS</div></div>' + e + '%S</div><div class="text">SECS</div>'))
                    })
                }(),
								t(".flat-imagebox").each(function() {
                    t(this).find(".tab-list").children().first().addClass("active"),
										t(this).find(".box-product").children(".row").first().show().siblings().hide(),
										t(this).find(".tab-list").children("li").on("click", function(e) {
												var n = t(this).index();
                        t(this).addClass("active").siblings().removeClass("active"),
												t(this).addClass("active").closest(".flat-imagebox").find(".box-product").children(".row").eq(n).fadeIn(1e3).show().siblings().hide(),
												e.preventDefault()
                    })
                }),
								t(".flat-imagebox").each(function() {
                    t(this).find(".tab-list").children().first().addClass("active"),
										t(this).find(".tab-item").children(".row").first().show().siblings().hide(),
										t(this).find(".tab-list").children("li").on("click", function(e) {
                        var n = t(this).index();
                        t(this).addClass("active").siblings().removeClass("active"),
												t(this).addClass("active").closest(".flat-imagebox").find(".tab-item").children(".row").eq(n).fadeIn(1e3).show().siblings().hide(),
												e.preventDefault()
                    })
                }), t(".flat-product-content").each(function() {
                    t(this).find("ul.product-detail-bar").children().first().addClass("active"), t(this).find(".container").children(".row").first().show().siblings().hide(), t(this).find("ul.product-detail-bar").children("li").on("click", function(e) {
                        var n = t(this).index();
                        t(this).addClass("active").siblings().removeClass("active"), t(this).closest(".flat-product-content").find(".container").children(".row").eq(n).fadeIn(1e3).show().siblings().hide(), e.preventDefault()
                    })
                }), t(".flat-product-content.style2").each(function() {
                    t(this).find("ul.product-detail-bar").children().first().addClass("active"), t(this).find(".col-md-12").children("div.row").first().show().siblings().hide(), t(this).find("ul.product-detail-bar").children("li").on("click", function(e) {
                        var n = t(this).index();
                        t(this).addClass("active").siblings().removeClass("active"), t(this).closest(".flat-product-content.style2").find(".col-md-12").children("div.row").eq(n).fadeIn(1e3).show().siblings().hide(), e.preventDefault()
                    })
                }), t(".flat-tab").each(function() {
                    t(this).find("ul.tab-list").children().first().addClass("active"), t(this).find(".tab-content").children(".tab-item").first().show().siblings().hide(), t(this).find("ul.tab-list").children("li").on("click", function(e) {
                        var n = t(this).index();
                        t(this).addClass("active").siblings().removeClass("active"), t(this).closest(".flat-tab").find(".tab-content").children(".tab-item").eq(n).fadeIn(1e3).show().siblings().hide(), e.preventDefault()
                    })
                }), t(".wrap-imagebox").each(function() {
                    t(this).find("ul.icons").children("li").first().addClass("active"), t(this).find(".tab-product").children(".sort-box").first().show().siblings().hide(), t(this).find("ul.icons").children("li").on("click", function(e) {
                        var n = t(this).index();
                        t(this).addClass("active").siblings().removeClass("active"), t(this).closest(".wrap-imagebox").find(".tab-product").children(".sort-box").eq(n).fadeIn(1e3).show().siblings().hide(), e.preventDefault()
                    })
                }), (o = t("ul.menu li")).on("mouseover", function() {
                    t(this).closest(".boxed").children(".overlay").css({
                        opacity: "1",
                        display: "block"
                    })
										// $(".box-search").children(".search-suggestions").css({
										// 		opacity: "0",
										// 		visibility: "hidden",
										// 		top: "100px"
										// })
                }), o.on("mouseleave", function() {
                    t(this).closest(".boxed").children(".overlay").css({
                        opacity: "0",
                        display: "none"
                    })
                }), t().slider && t(function() {
                    t("#slider-range").slider({
                        range: !0,
                        min: 18,
                        max: 1e3,
                        values: [18, 500],
                        slide: function(e, n) {
                            t("#amount").val(n.values[0] + "$ - " + n.values[1] + "$")
                        }
                    }), t("#amount").val(t("#slider-range").slider("values", 0) + "$ - " + t("#slider-range").slider("values", 1) + "$")
                }), t(".widget .widget-title h3 span").on("click", function() {
                    t(this).toggleClass("active"), t(this).closest(".widget").children(".widget-content").slideToggle(300)
                }), t(".cat-list.style1").each(function() {
                    t(this).children("li").children("ul.cat-child").hide(), t(".cat-list.style1 li span").on("click", function() {
                        t(this).parent("li").toggleClass("active"), t(this).toggleClass("active"), t(this).parent("li").children("ul.cat-child").slideToggle(300)
                    })
                }), t(".form-box .form-box-content .dropdown-title").on("click", function() {
                    t(this).toggleClass("active"), t(this).parent(".form-box-content").children("ul").slideToggle(300)
                }), t(".location .location-content .select-location select").on("click", function() {
                    t(this).toggleClass("active"), t(this).closest(".location-content").children("ul.location-list").slideToggle(300)
                }), t(".top-search form.form-search .box-search").each(function() {
                    t("form.form-search .box-search input").on("focus", function() {
                        t(this).closest(".boxed").children(".overlay").css({
                            opacity: "1",
                            display: "block"
                        }), t(this).parent(".box-search").children(".search-suggestions").css({
                            opacity: "1",
                            visibility: "visible",
                            top: "77px"
                        })
                    }), t("form.form-search .box-search input").on("blur", function() {
                        t(this).closest(".boxed").children(".overlay").css({
                            opacity: "0",
                            display: "none"
                        }), t(this).parent(".box-search").children(".search-suggestions").css({
                            opacity: "0",
                            visibility: "hidden",
                            top: "100px"
                        })
                    })
                }), t(".top-search.style1 form.form-search .box-search").each(function() {
                    t("form.form-search .box-search input").on("focus", function() {
                        t(this).closest(".boxed").children(".overlay").css({
                            opacity: "1",
                            display: "block"
                        }), t(this).parent(".box-search").children(".search-suggestions").css({
                            opacity: "1",
                            visibility: "visible",
                            top: "50px"
                        })
                    })
                }), t(".cat-wrap").each(function() {
                    t(this).on("click", function() {
                        t(this).children(".all-categories").toggleClass("show")
                    })
                }), r = {
                    duration: 400
                }, t(".toggle-content").hide(), t(".accordion-toggle .toggle-title.active").siblings(".toggle-content").show(), t(".accordion").find(".toggle-title").on("click", function() {
                    t(this).toggleClass("active"), t(this).next().slideToggle(r), t(".toggle-content").not(t(this).next()).slideUp(r), t(this).is(".active") && (t(this).closest(".accordion").find(".toggle-title.active").toggleClass("active"), t(this).toggleClass("active"))
                }), t(".flexslider").flexslider({
                    animation: "slide",
                    controlNav: "thumbnails"
                }), t(".progress-item").waypoint(function() {
                    t(".progress-bar").each(function() {
                        var e = t(this).data("percent");
                        t(this).find(".progress-animate").animate({
                            width: e + "%"
                        }, 2e3), t(this).parent(".progress-item").find(".perc").addClass("show").animate({
                            width: e + "%"
                        }, 2e3)
                    })
                }, {
                    offset: "100%"
                }), t('[data-waypoint-active="yes"]').waypoint(function() {
                    t(this).trigger("on-appear")
                }, {
                    offset: "100%",
                    triggerOnce: !0
                }), t(window).on("load", function() {
                    setTimeout(function() {
                        t.waypoints("refresh")
                    }, 100)
                }), t(".progress-circle").waypoint(function() {
                    t(".demo").percentcircle({
                        coverBg: "#e1e1e4",
                        bgColor: "#e1e1e4",
                        fillColor: "#f28b00"
                    }), t(".demo").children("div:not(:first-child)").css({
                        display: "none"
                    })
                }, {
                    offset: "100%"
                }),
                function() {
                    if (t().isotope) {
                        var e = t(".brands-list");
                        t(this).attr("data-filter"), e.imagesLoaded(function() {
                            e.isotope({
                                itemSelector: ".ipsotope",
                                transitionDuration: "1s"
                            }), e.isotope({
                                filter: "*"
                            })
                        }), t(".brands-tablist li").on("click", function() {
                            var n = t(this).attr("data-filter");
                            return t(".brands-tablist li").removeClass("active"), t(this).addClass("active"), e.isotope({
                                filter: n
                            }), !1
                        })
                    }
                }(),
								t().mCustomScrollbar && t(".box-checkbox").mCustomScrollbar({
                    scrollInertia: 400,
                    theme: "light-3"
                }), t().mCustomScrollbar && t(".location .location-content .scroll").mCustomScrollbar({
                    scrollInertia: 400
                }), t(".table-cart").mCustomScrollbar({
                    axis: "x",
                    advanced: {
                        autoExpandHorizontalScroll: !0
                    },
                    scrollInertia: 400
                }), t(".wishlist-content").mCustomScrollbar({
                    axis: "x",
                    theme: "light-3",
                    advanced: {
                        autoExpandHorizontalScroll: !0
                    },
                    scrollInertia: 400
                }), t().mCustomScrollbar && t(".all-categories").mCustomScrollbar({
                    scrollInertia: 400,
                    theme: "light-3"
                }), t().mCustomScrollbar && t(".search-suggestions .box-cat").mCustomScrollbar({
                    scrollInertia: 400,
                    theme: "light-3"
                }),
								// t().gmap3 && t(".map").gmap3({
                    // map: {
                    //     options: {
                    //         center: [32.301023, -90.193353],
                    //         zoom: 6,
                    //         mapTypeId: "themesflat_style",
                    //         mapTypeControlOptions: {
                    //             mapTypeIds: ["themesflat_style", google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                    //         },
                    //         scrollwheel: !1,
                    //         navigationControl: !0,
                    //         streetViewControl: !0
                    //     }
                    // },
                    // getlatlng: {
                    //     address: t(".flat-maps").data("address"),
                    //     callback: function(e) {
                    //         e && (t(this).gmap3("get").setCenter(new google.maps.LatLng(e[0].geometry.location.lat(), e[0].geometry.location.lng())), t(this).gmap3({
                    //             marker: {
                    //                 latLng: e[0].geometry.location,
                    //                 options: {
                    //                     icon: t(".flat-maps").data("images")
                    //                 }
                    //             }
                    //         }))
                    //     }
                    // },
                    // styledmaptype: {
                    //     id: "themesflat_style",
                    //     options: {
                    //         name: "Themesflat Map"
                    //     },
                    //     styles: [{
                    //         featureType: "water",
                    //         elementType: "all",
                    //         stylers: [{
                    //             color: "#a3ccff"
                    //         }, {
                    //             visibility: "on"
                    //         }]
                    //     }]
                    // }
                // })
								// , t(".map").css("height", t(".flat-maps").data("height")), s = JSON.parse('[{"address":"Quận Bradford, Florida","content":"","status":"live"},{"address":"Quận Bibb, Georgia","content":""},{"address":"Wateree Swamp, Nam Carolina","content":""}]'), t(".map-2").gmap3({
                    // map: {
                    //     options: {
                    //         center: [33.720972, -78.884506],
                    //         mapTypeId: "themesflat_style",
                    //         mapTypeControlOptions: {
                    //             mapTypeIds: ["themesflat_style", google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                    //         },
                    //         zoom: 6
                    //     },
                    //     navigationControl: !0,
                    //     scrollwheel: !1,
                    //     streetViewControl: !0
                    // }
                // }), t.each(s, function(e, n) {
                    // t(".map-2").gmap3({
                    //     marker: {
                    //         values: [{
                    //             address: n.address,
                    //             options: {
                    //                 icon: "images/icons/map.png"
                    //             }
                    //         }]
                    //     },
                    //     styledmaptype: {
                    //         id: "themesflat_style",
                    //         options: {
                    //             name: "Themesflat Map"
                    //         },
                    //         styles: []
                    //     }
                    // })
                // }),
								t(".btn-scroll").on("click", function() {
                    return t("html, body").animate({
                        scrollTop: 0
                    }, 800, "easeInOutExpo"), !1
                }), t(".popup-newsletter").each(function() {
                    t(this).closest(".boxed").children(".overlay").css({
                        opacity: "1",
                        display: "block",
                        zIndex: "89999"
                    }), t(".popup span").on("click", function() {
                        t(this).closest(".popup-newsletter").hide(400), t(this).closest(".boxed").children(".overlay").css({
                            opacity: "0",
                            display: "none",
                            zIndex: "909"
                        })
                    })
                }), t(document).ready(function() {
                    t("#zoom").zoom(), t("#zoom1").zoom(), t("#zoom2").zoom(), t("#zoom3").zoom(), t("#zoom4").zoom()
                }), t(window).on("load", function() {
                    setTimeout(function() {
											// $("head").append('<link rel="shortcut icon" href="/new/images/logo-icon.png">');
                        t(".preloader").hide()
                    }, 300)
                })
        })
    }(jQuery),

		function isValid(p) {
			var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
			var digits = p.replace(/\D/g, "");
			return phoneRe.test(digits);
		}
		function get_search_suggestions(search,cat){
			$(".box-search").children(".search-suggestions").css({
					opacity: "1",
					visibility: "visible",
					top: "50px"
			});
			$(".boxed").children(".overlay").css({
					opacity: "1",
					display: "block"
			});
			$.ajax({
					type : "GET",
					url : "/get-similar-products",
					dataType : "html",
					data:{"search":search,"sub_id":cat},
					success:function(data){
						var array_return =  $.parseJSON(data);
						var your_html = "";
						if ($(".flat-unstyled > li:eq(1)").data("diff")) {var diff = $(".flat-unstyled > li:eq(1)").data("diff");}else{var diff = 1;}
						$.each(array_return, function(index, value) {
							if (value['discount'] > 0) {
								var new_price = "<span class='sale'>" + number_format((value['price'] - value['discount'])/diff,2) + "</span>";
								var old_price = "<span class='regular'>" + number_format(value['price']/diff,2) + "</span>";
							}else{
								var new_price = "<span class='sale'>" + number_format(value['price']/diff,2) + "</span>";
								var old_price = "";
							}
							your_html += "<li><div class='image'><img src='/uploads/proph/small/"+value['image']+"' alt='"+value['productname']+"'></div><div class='info-product'><div class='name'><a href='/product-details/"+value['slug']+"' title='"+value['productname']+"'>"+value['productname']+"</a></div><div class='price'>"+new_price + old_price+"</div></div></li>";
						});
						$("#pros").html(your_html);
					},
					// error:function(data){console.log(data);},
					complete:function(){$(".lding").remove();}
			});
		}
		$("#getsearchtag").on("input", function() {
				get_search_suggestions($("#getsearchtag").val(),$("#searcat").val());
    });
		$("#sr-list").on("click",function(){
			$(".box-search").children(".search-suggestions").css({
					opacity: "0",
					visibility: "hidden",
					top: "100px"
			});
			$(".boxed").children(".overlay").css({
					opacity: "0",
					display: "none"
			})
		});
		$("#sr-list > .all-categories > .cat-list-search > ul > li").on('click',function(){
			get_search_suggestions($("#getsearchtag").val(),$(this).attr("data"));
		});
		$(".cat-list-search > div > b").on("click",function(){
			get_search_suggestions($("#getsearchtag").val(),0);
		});
		$(document).ready(function() {
				 get_warning_mob();
				 function get_warning_mob(){
					 if ($("#mysetting_title").data("wrn")) {
						 if ($(".warning-container").length == 0) {
							 $('.title').after('<div class="warning-container"><p>'+$("#mysetting_title").data("wrn")+'</p></div>');
						 }
						 $("#mobile").css("border","2px solid red")
					 }else{
						 $("#mobile").removeAttr("style");
						 $(".warning-container").remove();
					 }
				 }
				 if ($("#mobile").val()) {
					 if ($("#mobile").val() !== "+994 (__) ___-__-__") {
  					 var mob = $("#mobile").val();
  					 var res = mob.substring(0,4) + " (" + mob.substring(4,6)+ ") " + mob.substring(6,9) + "-" + mob.substring(9,11) + "-" + mob.substring(11,13);
  					 $("#mobile").val(res)
  				 }
				 }
         $("#update-user-data > div > button").click(function(t) {
					 if ($("#mobile").val() !== "+994 (__) ___-__-__") {
					 	var pho = "+" + $("#mobile").val().replace(/[^A-Z0-9]/ig, "");
						}else{var pho = "";}
            $(".title > h3").append('<img class="lding" src="/css/giphy.gif">'), close_notify(), t.preventDefault(), $.ajaxSetup({headers: {"X-CSRF-TOKEN": $('meta[name="_token"]').attr("content")}}),
						$.ajax({
                url: "/update/user-information",
                method: "POST",
                data: {name: $("#name").val(),dob: $("#dob").val(),surname: $("#surname").val(),mobile: pho},
                error: function(t) {$("body").append('<div class="notify notify-error"><span>' + t.error + '</span><i class="fa fa-times"></i></div>')},
                success: function(t) {$("body").append('<div class="notify notify-success"><span>' + t.success + '</span><i class="fa fa-times" onclick="close_notify()"></i></div>');get_warning_mob();},
                complete: function(t) {$(".lding").remove()}
            });
        });
    }), setInterval(function() {
        close_notify()
    }, 7e3),
		$(".your-rating > i").hover(function(){
			$(this).css('cursor', 'pointer');
			$(".pro-com-sec > #rating").val($(this).index());
			$(".news-commenting > #rating").val($(this).index());
			for (var i = 0; i < $(this).index(); i++) {
				$(".your-rating > i:eq("+i+")").attr('class', 'fa fa-star');
			}
			for (var j = 0; j < (5 - $(this).index()); j++) {
				$(".your-rating > i:eq("+(j + $(this).index())+")").attr('class', 'fa fa-star-o');
			}
		});

		function numberToEnglish( n ) {
				var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words, and = '';
				string = string.replace(/[, ]/g,"");
				if( parseInt( string ) === 0 ) {return 'zero';}
				units = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
				tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
				scales = [ '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion' ];
				start = string.length;
				chunks = [];
				while( start > 0 ) {
					end = start;
					chunks.push( string.slice( ( start = Math.max( 0, start - 3 ) ), end ) );
				}
				chunksLen = chunks.length;
				if( chunksLen > scales.length ) {
					return '';
				}
				words = [];
				for( i = 0; i < chunksLen; i++ ) {
					chunk = parseInt( chunks[i] );
					if( chunk ) {
						ints = chunks[i].split( '' ).reverse().map( parseFloat );
						if( ints[1] === 1 ) {
							ints[0] += 10;
						}
						if( ( word = scales[i] ) ) {
							words.push( word );
						}
						if( ( word = units[ ints[0] ] ) ) {
							words.push( word );
						}
						if( ( word = tens[ ints[1] ] ) ) {
							words.push( word );
						}
						if( ints[0] || ints[1] ) {
							if( ints[2] || ! i && chunksLen ) {
								words.push( and );
							}
						}
						if( ( word = units[ ints[2] ] ) ) {
							words.push( word + ' hundred' );
						}
					}
				}
				return words.reverse().join( ' ' );
			}

$(document).ready(function(){
	if (window.location.href.indexOf("product-details") > -1) {
		for (var i = 0; i < 5; i++) {
		$(".queue-box > li:eq("+i+")").addClass(numberToEnglish($(".queue-box > li:eq("+i+")").data("number"))+"-star");}
		ref_star_leng();
		let a = 1;
		var crr = $(".quantity > input").val();
		var price = $(".product-detail > .content-detail > .price > .sale").text().replace('AZN', '').replace('USD', '').replace('EURO', '');
		var reg_price = $(".product-detail > .content-detail > .price > .regular").text().replace('AZN', '').replace('USD', '').replace('EURO', '');
		var price_place = $(".product-detail > .content-detail > .price > .sale").text();
		var reg_price_place = $(".product-detail > .content-detail > .price > .regular").text();


		$(".quantity > input").val(a);
		$("#w-list").on('click','.btn-up',function(){
			if (a < 50) {a += 1;}
				$($(this).siblings("input")).val(a);
				var n_price = price_place.replace(price.trim(),number_format(price*a,2));
				var r_n_price = reg_price_place.replace(reg_price.trim(),number_format(reg_price*a,2));
				$(".product-detail > .content-detail > .price > .sale").html(n_price);
				$(".product-detail > .content-detail > .price > .regular").html(r_n_price);
				var ws_id = $(this).parent().data("id");
				var ws_price_place = $("#pric" + ws_id + "> span").text();
				var ws_price = ws_price_place.replace('AZN', '').replace('USD', '').replace('EURO', '').trim();
				var w_n_price = ws_price_place.replace(ws_price.trim(),number_format(ws_price*a,2));
				$("#sum" + ws_id).html(w_n_price.trim());
		});
		$("#w-list").on('click','.btn-down',function(){
				if (a > 1) {a -= 1;}
				$($(this).siblings("input")).val(a);
				var n_price = price_place.replace(price.trim(),number_format(price*a,2));
				var r_n_price = reg_price_place.replace(reg_price.trim(),number_format(reg_price*a,2));
				$(".product-detail > .content-detail > .price > .sale").html(n_price);
				$(".product-detail > .content-detail > .price > .regular").html(r_n_price);
				var ws_id = $(this).parent().data("id");
				var ws_price_place = $("#pric" + ws_id + "> span").text();
				var ws_price = ws_price_place.replace('AZN', '').replace('USD', '').replace('EURO', '').trim();
				var w_n_price = ws_price_place.replace(ws_price.trim(),number_format(ws_price*a,2));
				$("#sum" + ws_id).html(w_n_price.trim());
		});



		var j = 0;
		// window.onresize = function(event) {
			if (window.matchMedia('(max-width: 992px)').matches) {
				var active_up = "fa-chevron-left";
				var active_down = "fa-chevron-right";
				var dispNumb = 3;
			}else{
				var active_up = "fa-chevron-up";
				var active_down = "fa-chevron-down";
				var dispNumb = 4;
			}
		// };
		img_thumbs(j);
		$(".flex-control-thumbs > li:not(.img-other):first-child").before("<li class='img-other'><i class='fa "+active_up+"'></i></li>");
		$(".flex-control-thumbs > li:not(.img-other):last-child").after("<li class='img-other'><i class='fa "+active_down+"'></i></li>");
		$(".flex-control-thumbs > li.img-other:first-child").addClass("disabled");
		if ($(".flex-control-thumbs > li:not(.img-other)").length <= dispNumb) {$(".flex-control-thumbs > li.img-other:last-child").addClass("disabled");}

		$(document.body).on("click",".flex-control-thumbs > li.img-other:eq(0)",function(){
			if ($(".flex-control-thumbs > li:not(.img-other):first-child").hasClass("showed")) {
				$(".flex-control-thumbs > li.img-other:last-child").addClass("disabled");
			}else{
				if (j > 0) {j -= 1;}else{
					$(".flex-control-thumbs > li.img-other:first-child").addClass("disabled");
				}img_thumbs(j);
				$(".flex-control-thumbs > li.img-other:last-child").removeClass("disabled");
			}
		});
		$(document.body).on("click",".flex-control-thumbs > li.img-other:eq(1)",function(){
			if ($(".flex-control-thumbs > li:not(.img-other):last-child").hasClass("showed")) {
				$(".flex-control-thumbs > li.img-other:first-child").addClass("disabled");
			}else{
				if(j <= ($(".flex-control-thumbs > li:not(.img-other)").length - 5)){j += 1;}else{
					$(".flex-control-thumbs > li.img-other:last-child").addClass("disabled");
				} img_thumbs(j);
				$(".flex-control-thumbs > li.img-other:first-child").removeClass("disabled");
			}
		});

		function img_thumbs(j){
			for (var i = 0; i < $(".flex-control-thumbs > li:not(.img-other)").length; i++) {
				if (i < (dispNumb + j) && i >= j) {
					$(".flex-control-thumbs > li:not(.img-other):eq("+i+")").addClass("showed").css("display","");
				}else{
					$(".flex-control-thumbs > li:not(.img-other):eq("+i+")").removeClass("showed").css("display","none");
				}
			}
		}





	}
});

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
function number_format (number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}
function get_head_wishlist(){
	$.ajax({
			type : "GET",
			url : "/get-header-wishlist",
			dataType : "html",
			success:function(data){
				var array_return =  $.parseJSON(data);
				var your_html = "";
				var tot_sum = 0;
				if ($(".flat-unstyled > li:eq(1)").data("diff")) {var diff = $(".flat-unstyled > li:eq(1)").data("diff");}else{var diff = 1;}
				$.each(array_return, function(index, value) {
					your_html += "<li><div class='img-product'><img src='/uploads/proph/small/"+value['image']+"' alt='"+value['productname']+"'/></div><div class='info-product'><div class='name'><a href='/product-details/"+value['slug']+"'>"+value['productname']+"</a></div><div class='price'><span>"+value['quantity']+" x </span><span>"+number_format((value['price'] - value['discount'])/diff,2)+ " " + $(".flat-unstyled > li:eq(1) > a").text() +"</span></div></div><div class='clearfix'></div><span class='delete delete-btn' data-id='"+value['id']+"'>x</span></li>";
					tot_sum += +(value['price'] - value['discount']);
				});
				if (array_return.length != 0) {
					$(".wishlist-count").html(array_return.length); $(".wishlist-count").css("display","");
				}else{$(".wishlist-count").css("display","none");}
				$(".w-tot-price").html(number_format(tot_sum/diff,2) + " " + $(".flat-unstyled > li:eq(1) > a").text());
				$(".dropdown-box > .drop-wishlist").html(your_html);
			},
			complete:function(){$(".lding").remove();}
	});
}

$(document.body).on("click",".wishlist-btn",function(t) {
		if (document.getElementById("w-list")) {var quantity = $("#w-list > input").val();}else{var quantity = 0;}
		close_notify(), t.preventDefault(),
		$.ajaxSetup({headers: {"X-CSRF-TOKEN": $('meta[name="_token"]').attr("content")}}),
		$.ajax({
				url: "/add-to-wishlist",
				method: "POST",
				data: {"pro": $(this).attr("data"),"qty":quantity},
				error: function(t) {$("body").append('<div class="notify notify-error"><span>' + t.error + '</span><i class="fa fa-times" onclick="close_notify()"></i></div>')},
				success: function(t) {$("body").append('<div class="notify notify-success"><span>' + t.success + '</span><i class="fa fa-times" onclick="close_notify()"></i></div>');get_head_wishlist();}
		});
});


$("#sr-list > .all-categories > .cat-list-search > ul > li").on('click',function(){
	$("#searcat").html("<option hidden value='"+$(this).attr("data")+"'>"+$(this).text()+"</option>");
});
$(".cat-list-search > div > b").on("click",function(){
	$("#searcat").html("<option hidden value='0'>"+$(this).text()+"</option>");
});
$(document).ready(function(){
	var price = $("#wishlistbody > table > tbody > tr > .p-s").text();
	var sum = total_arr(price.split("AZN"));
	var ws_price_place = $("table > tbody > tr > td > .price > span.p-s").text();
	$(".td-price").html(sum);
});

function total_arr(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += +arr[i];
	}
  return sum;
};
$("#form-contact > div > button").on("click",function(t){
	if ($("#name").val() != "" && isEmail($("#email").val()) && $("#surname").val() != "" && $("#subject").val() != "" && $("#message").val() != "") {
		$(".form-contact-header > h3").append('<img class="lding" src="/css/giphy.gif">'),
		close_notify(),
		t.preventDefault(),
		$.ajaxSetup({headers: {"X-CSRF-TOKEN": $('meta[name="_token"]').attr("content")}}),
		$.ajax({
				url: "/get-contact",method: "POST",
				data: {name: $("#name").val(),surname: $("#surname").val(),email: $("#email").val(),subject: $("#subject").val(),message: $("#message").val()},
				error: function(t) {$("body").append('<div class="notify notify-error"><span>' + t.error + '</span><i class="fa fa-times"></i></div>')},
				success: function(t) {
						check_null_data();
						if ($(".flat-unstyled > .account > ul > li:eq(0) > a").attr('href') === "/login") {
							$("#name,#surname,#email").val("").css("border","2px solid #e5e5e5");
						}
						$("#subject,#message,#pro-com-body").val("").css("border","2px solid #e5e5e5");
						$("body").append('<div class="notify notify-success"><span>' + t.success + '</span><i class="fa fa-times" onclick="close_notify()"></i></div>')
				},
				complete: function(t) {$(".lding").remove()}
		});
	}else{
		check_null_data();
	}
});
function check_null_data(){
	if (isEmpty($("#name").val())) {$("#name").css("border","2px solid rgba(255, 0, 0, 0.64)");}else{$("#name").css("border","2px solid #e5e5e5");}
	if (isEmpty($("#surname").val())) {$("#surname").css("border","2px solid rgba(255, 0, 0, 0.64)");}else{$("#surname").css("border","2px solid #e5e5e5");}
	if (isEmpty($("#email").val()) && isEmail($("#email").val())) {$("#email").css("border","2px solid rgba(255, 0, 0, 0.64)");}else{$("#email").css("border","2px solid #e5e5e5");}
	if (isEmpty($("#subject").val())) {$("#subject").css("border","2px solid rgba(255, 0, 0, 0.64)");}else{$("#subject").css("border","2px solid #e5e5e5");}
	if (isEmpty($("#message").val())) {$("#message").css("border","2px solid rgba(255, 0, 0, 0.64)");}else{$("#message").css("border","2px solid #e5e5e5");}
}
function getval(data){
	$("#s-value").val(data);
	$("#s-val").submit();
}
function setCookie(c_name,value,exdays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}
function eraseCookieFromAllPaths(name) {
    var pathBits = location.pathname.split('/');
    var pathCurrent = ' path=';
    document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';

    for (var i = 0; i < pathBits.length; i++) {
        pathCurrent += ((pathCurrent.substr(-1) != '/') ? '/' : '') + pathBits[i];
        document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';';
    }
}
 // setCookie("username",username,365); getCookie("username");
function getCookie(c_name){
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++){
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name){
	    return unescape(y);
    }
  }
}
$(document).ready(function(){
	$(".news_section > .rows > div > .owl-controls > .owl-controls > .owl-dots").remove();

	// let a = 12;
	// $(".search-result > center > .mybtn").on("click",function(t){
	// 	a = a + 12;
	// 	var s = $("#search").val();
	// 	$(".form-contact-header > h3").append('<img class="lding" src="/css/giphy.gif">'),
	// 	close_notify(),
	// 	t.preventDefault(),
	// 	$.ajaxSetup({headers: {"X-CSRF-TOKEN": $('meta[name="_token"]').attr("content")}}),
	// 	$.ajax({
	// 			url: "/search-result/search=" + s,
	// 			method: "GET",
	// 			data: {
	// 					search: s,
	// 					sub_id: $("#sub_id").val(),
	// 					numb: a
	// 			},
	// 			error: function(t) {
	// 					$("body").append('<div class="notify notify-error"><span>' + t.error + '</span><i class="fa fa-times"></i></div>')
	// 			},
	// 			success: function(t) {
	// 					console.log(t.pros)
	// 					$("body").append('<div class="notify notify-success"><span>' + t.success + '</span><i class="fa fa-times" onclick="close_notify()"></i></div>')
	// 			},
	// 			complete: function(t) {$(".lding").remove()}
	// 	});
	// });

	$(".brand-search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".brand-list li:not(:first-child)").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
	if (getCookie("p_res") !== "undefined") {
		$("#p_res").html(getCookie("p_res"));
		$(".widget-price > .widget-content > .price-range").val(getCookie("p_res"));
	}
	$(".widget-price > .widget-content > .price-range").on("input",function(){
		var res = $(this).val();
		setCookie("p_res",res,365)
		$("#p_res").html(res);
	});
	$(".open-button").on("click",function(){
		close_notify();
		$(this).css("display","none");
		$("#callme_body").css("display","block");
		// $(".overlay").css("display","block").css("opacity","1");
	});
	$("#callme_body > form > .cancel").on("click",function(){
		$("#callme_body").css("display","none");
		$(".open-button").css("display","");
		// $(".overlay").css("display","none").css("opacity","0");
	});
	$(".open-button").delay(1500).css('opacity',0).animate({'opacity': 0.8}, 200);
	function checkinvoice() {
    var e = document.getElementById("invoice_id").value,
        t = document.getElementById("phone_number").value;
    if ("" == e ? $("#invoice_id").css("border", "1px solid red") : $("#invoice_id").css("border", "1px solid #ccc"), "" == t ? $("#phone_number").css("border", "1px solid red") : $("#phone_number").css("border", ""), "" != e && "" != t) {
        const n = new XMLHttpRequest,
            c = "/check-invoice/" + e + "/" + t;
        n.open("GET", c), n.send(), n.onreadystatechange = (e => {
            document.getElementById("result").innerHTML = n.responseText
        })
    }
	}
	$("input[type='email']").on("input",function(){
		if (!isEmail($(this).val()) && $(this).val() != "") {
			$(this).css("border","2px solid #ff0000a3");
		}else{
			$(this).css("border","2px solid #e5e5e5");
			$(".error").remove();
		}
	});
	$("input[type='email']").focusout(function(){
		if (!isEmail($(this).val())) {
			if (document.querySelector(".error") === null) {
				$(this).after('<span class="error">'+$(this).data("error")+'</span>');
			}else{
				$(".error").remove();
			}
		}else{
			$(".error").remove();
		}
	});
	$("#callme_body > form > input").on("input",function(){
		if ($("#callme_name").val() == "" || !isEmail($("#callme_email").val()) || $("#callme_surname").val() == "" || $("#callme_phone_number").val() == "") {
			$('#callme_body > form > .cbtn').prop('disabled', true);
		}else{
			$('#callme_body > form > .cbtn').prop('disabled', false);
			$("#callme_body > form > .cbtn").click(function(e) {
					close_notify();
					var success = $("#callme_body").data("success");
					var error = $("#callme_body").data("error");
					e.preventDefault(),
					$.ajaxSetup({headers: {"X-CSRF-TOKEN": $('meta[name="_token"]').attr("content")}}),
					$.ajax({
							url: "/call-me",
							method: "POST",
							data: {
									name: $("#callme_name").val(),
									email: $("#callme_email").val(),
									surname: $("#callme_surname").val(),
									phone_number: $("#callme_phone_number").val()
							},
							error: function(e) {
									$("body").append('<div class="notify notify-error"><span>' + error + '</span><i class="fa fa-times" onclick="close_notify()"></i></div>');
									$("#callme_body").css("display","none");
									$(".open-button").css("display","");
							},
							success: function(e) {
								$("body").append('<div class="notify notify-success"><span>' + success + '</span><i class="fa fa-times" onclick="close_notify()"></i></div>');
								$("#callme_body").css("display","none");
								$(".open-button").css("display","");
								$("#callme_body > form").find("input, textarea").val("");
								$('#callme_body > form > .cbtn').prop('disabled', true);
							}
					})
			});
		}
	});
	var allbrands = [];
	$(".check-box:not(:first-child)").on("click",function(){
		if ($(this).hasClass("selected-checkbox")) {
			$(this).removeClass("selected-checkbox");
			for(var i = allbrands.length - 1; i >= 0; i--) {
					if(allbrands[i] === $(this).text().replace(/ *\([^)]*\) */g, "").trim()) {
						 allbrands.splice(i, 1);
					}
			}
			if ($(".check-box:first-child").hasClass("selected-checkbox")) {
					$(".check-box:first-child > label > b:eq(0)").css("display","");
					$(".check-box:first-child > label > b:eq(1)").css("display","none");
					$(".check-box:first-child").removeClass("selected-checkbox");
			}
		}else{
			$(this).addClass("selected-checkbox");
			if ($.inArray($(this).text().replace(/ *\([^)]*\) */g, "").trim(), allbrands)) {
				for(var i = allbrands.length - 1; i >= 0; i--) {
				    if(allbrands[i] === $(this).text().replace(/ *\([^)]*\) */g, "").trim()) {
				       allbrands.splice(i, 1);
				    }
				}
				allbrands.push($(this).text().replace(/ *\([^)]*\) */g, "").trim());
			}
		}
		if (allbrands.length > 0) {
			$("#brand_list").attr("name","brands[]");
			$("#brand_list").val(allbrands);
		}else{
			$("#brand_list").attr("name","");
		}
		// console.log(allbrands);
	});
	// $(".form-register > form > div > input").on("input",function(){
	// 	if($("#name").val() == "" || $("#surname").val() == "" || !isEmail($(".form-register > form > div > #email").val()) || $("#mobile").val() == "" || $("#password").val() == "" || uniLen($("#password").val()) <= 5 || uniLen($("#confirm-password").val()) <=5 || $("#confirm-password").val() == ""){
	// 		if (document.querySelector("button[type='submit']") !== null) {
	// 			$(".form-register > form > div > button").css("display","none");
	// 		}
	// 	}else{
	// 		$(".form-register > form > div > button").css("display","");
	// 	}
	// });
	$(".check-box:first-child").on("click",function(){
		if ($(".check-box:first-child").hasClass("selected-checkbox")) {
				$(".check-box:first-child > label > b:eq(0)").css("display","");
				$(".check-box:first-child > label > b:eq(1)").css("display","none");
				$(".check-box").removeClass("selected-checkbox");
				allbrands.length = 0;
		}else{
			$(".check-box:first-child > label > b:eq(0)").css("display","none");
			$(".check-box:first-child > label > b:eq(1)").css("display","");
			$(".check-box").addClass("selected-checkbox");
			$('.check-box:not(:first-child)').each(function(){
					allbrands.push($(this).text().replace(/ *\([^)]*\) */g, "").trim());
    	});
		}
		if (allbrands.length > 0) {
			$("#brand_list").attr("name","brands[]");
			$("#brand_list").val(allbrands);
		}else{
			$("#brand_list").attr("name","");
		}
	});
});

if (window.location.href.indexOf("search-result") > -1 || window.location.href.indexOf("subcategory") > - 1 || window.location.href.indexOf("category") > -1) {
	$(document).ready(function() {
			var crr = $("#currency").val();
			if ($("#max_price").is("[value]")) {
				var mmax = $("#max_price").val();
			}else{var mmax = 500;}
			if ($("#min_price").is("[value]")) {
				var mmin = $("#min_price").val();
			}else{var mmin = 0;}
			// console.log(mmax);
			$("#min_price").val(mmin);
			$("#max_price").val(mmax);
	    $( "#slider-range" ).slider({
	      range: true,
	      min: 0,
	      max: 1000,
	      values: [ mmin, mmax ],
	      slide: function( event, prices ) {
	        $( "#amount" ).val(prices.values[0] + " " + crr + " - " + prices.values[1] + " " + crr);
					$("#min_price").val(prices.values[0]);
					$("#max_price").val(prices.values[1]);
	      }
	    });
	    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) + " " + crr + " - " + $( "#slider-range" ).slider( "values", 1 ) + " " + crr );
	});
}
window.onload = function() {
   MaskedInput({
      elm: document.getElementById('callme_phone_number'),
      format: '+994 (__) ___-__-__',
      separator: '+994 ()-'
   });
	 MaskedInput({
      elm: document.getElementById('phone_number'),
      format: '+994 (__) ___-__-__',
      separator: '+994 ()-'
   });
	 MaskedInput({
      elm: document.getElementById('mobile'),
      format: '+994 (__) ___-__-__',
      separator: '+994 ()-'
   });
};
// function getint(data){
// 	var suffix = data.id.match(/\d+/);
// 	return suffix;
// }
if (window.location.href.indexOf("account") > -1 && window.location.href.indexOf("settings") <= -1) {
	$(document).ready(function () {
		$('#dtMaterialDesignExample').DataTable();
		$('#dtMaterialDesignExample_wrapper').find('label').each(function () {
			$(this).parent().append($(this).children());
		});
		$('#dtMaterialDesignExample_wrapper .dataTables_filter').find('input').each(function () {
			$('input').attr("placeholder", "Search");
			$('input').removeClass('form-control-sm');
		});
		$('#dtMaterialDesignExample_wrapper .dataTables_length').addClass('d-flex flex-row');
		$('#dtMaterialDesignExample_wrapper .dataTables_filter').addClass('md-form');
		$('#dtMaterialDesignExample_wrapper select').removeClass('custom-select custom-select-sm form-control form-control-sm');
		$('#dtMaterialDesignExample_wrapper select').addClass('mdb-select');
		// $('#dtMaterialDesignExample_wrapper .mdb-select').materialSelect();
		$('#dtMaterialDesignExample_wrapper .dataTables_filter').find('label').remove();
		trans_page_next();
		$("#dtMaterialDesignExample > thead > tr > th").on("click",function(){trans_page_next();});
		$("#dtMaterialDesignExample > thead > tr > th").hover(function(){if (document.querySelector(".fa-sort") === null) {$(this).append('<i class="fa fa-sort"></i>');}},function(){$(".fa-sort").remove();});
		$("#dtMaterialDesignExample_length").remove();
		$("#dtMaterialDesignExample_filter > input[type='search']").on("input",function(){trans_page_next();});
		$(".dataTables_paginate").on("click",function(){trans_page_next();});
		function trans_page_next(){
			$("#dtMaterialDesignExample_filter > input[type='search']").attr("placeholder", $("input[name='table-list']").val().split(',')[2].replace(/\'/g,"") + "...");
			$(".dataTables_empty").text($("input[name='table-list']").val().split(',')[3].replace(/\'/g,""));
			$("#dtMaterialDesignExample_paginate > .previous").text($("input[name='table-list']").val().split(',')[0].replace(/\'/g,""));
			$("#dtMaterialDesignExample_paginate > .next").text($("input[name='table-list']").val().split(',')[1].replace(/\'/g,""));
		}
	});
}
$(document).ready(function(){
	$(".product-detail-bar > li").on("click",function(){window.location.hash = $(this).data("url");});
	$("a[href='#reviews']").on("click",function(){
		location.href = "#reviews";
		setCookie("pro_det_li",2,365);
		get_prod_list_urls(2);
	});
	$(document.body).on("click","a[href='#description']",function(){
		location.href = "#description";
		setCookie("pro_det_li",0,365);
		get_prod_list_urls(0);
	});
	if (window.location.hash == "#features") {setCookie("pro_det_li",1,365);
	}else if(window.location.hash == "#reviews"){setCookie("pro_det_li",2,365);
	}else{setCookie("pro_det_li",0,365);}
	if (getCookie("pro_det_li")) {get_prod_list_urls(getCookie("pro_det_li"));}
	function get_prod_list_urls(nm){
		$(".product-detail-bar > li:eq("+nm+")").addClass("active");
		$(".product-detail-bar > li:not(:eq("+nm+"))").removeClass("active");
		$(".flat-product-content > .container > div.row:eq("+nm+")").css("display","flex");
		$(".flat-product-content > .container > div.row:not(:eq("+nm+"))").css("display","none");
	}
	if(window.location.href.indexOf("news") > -1){
		var pc_n = 10;
		$("#ncomm_load").on("click",function(){pc_n += 10;get_news_comments(pc_n);});
		$(".news-commenting > .btn-submit > button").on("click",function(t){
			if ($("#news_name").val() != "" && $("#news_surname").val() != "" && isEmail($("#news_email").val()) && $("#news_body").val() != "" && $("#news_id").val() != "" && $("#rating").val() != "") {
				$(".comment-reply-title > .title").append('<img class="lding" src="/css/giphy.gif">'), close_notify(), t.preventDefault(),
				$.ajaxSetup({headers: {"X-CSRF-TOKEN": $('meta[name="_token"]').attr("content")}}),
				$.ajax({
						url: "/add-new-comment",
						method: "POST",
						data: {name: $("#news_name").val(),surname: $("#news_surname").val(),email: $("#news_email").val(),message: $("#news_body").val(),news_id: $("#news_id").val(),rating: $("#rating").val()},
						error: function(t) {$("body").append('<div class="notify notify-error"><span>' + t.error + '</span><i class="fa fa-times"></i></div>')},
						success: function(t) {
								get_news_comments(pc_n);
								$("#news_body").css("border","2px solid #e5e5e5").val(""),
								$("#pro-com-body").val(""), $("body").append('<div class="notify notify-success"><span>' + t.success + '</span><i class="fa fa-times" onclick="close_notify()"></i></div>')
						},
						complete: function(t) {$(".lding").remove()}
				});
			}else{
				if($("#news_name").val() == ""){$("#news_name").css("border","2px solid rgba(255, 0, 0, 0.64)");}else{$("#news_name").css("border","2px solid #e5e5e5");}
				if($("#news_surname").val() == ""){$("#news_surname").css("border","2px solid rgba(255, 0, 0, 0.64)");}else{$("#news_surname").css("border","2px solid #e5e5e5");}
				if(!isEmail($("#news_email").val())){$("#news_email").css("border","2px solid rgba(255, 0, 0, 0.64)");}else{$("#news_email").css("border","2px solid #e5e5e5");}
				if($("#news_body").val() == ""){$("#news_body").css("border","2px solid rgba(255, 0, 0, 0.64)");}else{$("#news_body").css("border","2px solid #e5e5e5");}
			}
		});
		get_news_comments();
		function get_news_comments(nm){
			$.ajax({
					type : "GET",
					url : "/get-news-comments",
					dataType : "html",
					data: {"numb":nm,"news":$("#news-comments").data("news")},
					success:function(data){
						var array_return =  $.parseJSON(data);
						var your_html = "";
						if (array_return.length == 0) {your_html = "<center>"+$("#news-comments").data("empty")+"</center>";}else{
							$.each(array_return, function(index, value) {
								var stars = "";
								for (var i = 0; i < 5; i++) {
									var fastar = "";
									if (value['rating'] > i) {
										fastar = 'class="fa fa-star"';
									}else{
										fastar = 'class="fa fa-star-o"';
									}
									stars += '<i '+fastar+' aria-hidden="true"></i>';
								}
								if (nm != 6 && nm > array_return.length) {
									$("#ncomm_load").remove();
								}
								your_html += "<li class='comment'><div class='comment-author'><img src='/uploads/av/default-mini.png' alt="+value['name']+value['surname']+"></div><div class='comment-text'><div class='comment-metadata'><div class='name'>"+value['name']+value['surname']+": <span>"+formatDate(new Date(value['created_at']))+"</span></div><div class='queue'>"+stars+"</div></div><div class='comment-content'><p>"+get_tags(value['message'])+"</p></div><div class='clearfix'></div></div></li>";
							});
						}
						$("#news-comments").html(your_html);
					},
				});
		}
	}
	if (window.location.href.indexOf("category") > -1 || window.location.href.indexOf("subcategory") > -1) {
		if (window.location.href.indexOf("subcategory") > -1) {var get_url = "/get-pro-list";}else{var get_url = "/get-pro-list-for-category";}
		var new_num = 6;
		$(".btn-load").on("click",function(){
			$(this).after('<img class="lding" src="/css/giphy.gif">');
			new_num += 6;get_pro_list(new_num);
		});
		$(".sort-product > div > .showed").on("change",function(){
			$(this).before('<img class="lding" src="/css/giphy.gif">');
			get_pro_list($(".sort-product > div > .showed option:selected").val());
		});
		$("#filter-btn").on("click",function(){get_pro_list(new_num,$("#max_price").val(), $("#min_price").val(),$("#brand_list").val().split(","));});
		function get_pro_list(nm,max,min,brands){
			if (nm == "") {var numb = 6;}else{var numb = nm;}
			$.ajax({
					type : "GET", url : get_url, dataType : "html",
					data: {"numb": numb,"slug":$(".trail-end").data("slug"),"max":max,"min":min,"brands":brands},
					success:function(data){
						var array_return =  $.parseJSON(data); var your_html = "";
						if ($(".flat-unstyled > li:eq(1)").data("diff")) {var diff = $(".flat-unstyled > li:eq(1)").data("diff");}else{var diff = 1;}
						$.each(array_return, function(index, value) {
							if (value['discount'] > 0) {var disc_amt = "<span class='regular'>"+number_format(value['price']/diff,2)+" "+$(".flat-unstyled > li:eq(1) > a").text()+"</span>";var disc = "<span class='item-sale' title='Discount'>"+Math.round(100 - ((value['price'] - value['discount'])/value['price'])*100) + "% </span>";}else{var disc_amt = "";var disc="";}
							if ($("#my-prod-list").data("translate")) {
								var wishlist = "<div class='box-bottom'><div class='btn-add-cart'><a class='wishlist-btn' data='"+value['id']+"'>"+$("#my-prod-list").data("translate")+"</a></div></div>";
							}else{var wishlist = ""};
							your_html += "<div class='col-lg-4 col-sm-6'><div class='product-box'><div class='imagebox'>"+disc+"<span class='view-count'><i class='fa fa-eye'></i> "+value['view']+"</span><div class='box-image owl-carousel-1'><a href='/product-details/"+value['slug']+"' title='"+value['productname']+"'><img class='m-img' src='/uploads/proph/small/"+value['image']+"' alt='"+value['productname']+"'/></a></div><div class='box-content'><div class='cat-name'><a href='/subcategory/"+value['sb_slug']+"' title='"+value['name']+"'>"+value['name']+"</a></div><div class='product-name'><a href='/product-details/"+value['slug']+"' title='"+value['productname']+"'>"+value['productname']+"</a></div><div class='price'><span class='sale'>"+number_format(((value['price'] - value['discount'])/diff),2)+" "+$(".flat-unstyled > li:eq(1) > a").text()+"</span>"+disc_amt+"</div></div>"+wishlist+"</div></div></div>"
						});
						if (nm != 6 && nm > array_return.length) {$(".blog-pagination").remove();}
						$("#my-prod-list").html(your_html);
					},
					complete:function(){$(".lding").remove();$(".big-lding").remove();}
			});
		}
		get_pro_list(new_num);
	}
if (window.location.href.indexOf("my-wishlist") > -1) {
	var ws_n = 10;
	$(".get-wishlist").on("click",function(){
		ws_n += 10;
		get_wishlist(ws_n);
	});
	get_wishlist(ws_n);

	function update_ws(id,a,t){
		t.preventDefault(),
		$.ajaxSetup({headers: {"X-CSRF-TOKEN": $('meta[name="_token"]').attr("content")}}),
		$.ajax({url: "/update-wishlist",method: "POST",data: {"id": id,"qt": a}});
	}
		$("#w-list").on('click','.quantity > .btn-up',function(t){
			var a = parseInt($(this).siblings("input").val());
			if (a < 50) {a += 1;}
			var id = $(this).parent().data("id");
			$("div[data-id="+id+"]").children("input").val(a);
			var re_price_with_crr = $("#pric" + id + " > .p-s > .regular").text();
			var price_with_crr = $("#pric" + id).text().replace(re_price_with_crr,"");
			var re_price = re_price_with_crr.replace(/[^0-9.]/g,'');
			var price = price_with_crr.replace(/[^0-9.]/g,'');
			var crr = price_with_crr.replace(price,"").trim();
			// console.log(re_price_with_crr);
			$("#sum" + $(this).parent().data("id")).html(number_format(price*a,2)+crr);
			update_ws(id,a,t);
			get_my_wishlist_sum();
		});
		$("#w-list").on('click','.quantity > .btn-down',function(t){
			var a = parseInt($(this).siblings("input").val());
			if (a > 1) {a -= 1;}
			var id = $(this).parent().data("id");
			$("div[data-id="+id+"]").children("input").val(a);
			var re_price_with_crr = $("#pric" + id + " > .p-s > .regular").text();
			var price_with_crr = $("#pric" + id).text().replace(re_price_with_crr,"");
			var re_price = re_price_with_crr.replace(/[^0-9.]/g,'');
			var price = price_with_crr.replace(/[^0-9.]/g,'');
			var crr = price_with_crr.replace(price,"").trim();
			$("#sum" + $(this).parent().data("id")).html(number_format(price*a,2)+crr);
			update_ws(id,a,t);
			get_my_wishlist_sum();
		});
}
$(document.body).on("click",".delete-btn",function(){
    var id = $(this).data("id");
    var token = $("meta[name='_token']").attr("content");
    $.ajax({
        url: "/delete-wishlist/"+id,type: 'DELETE',data: {"id": id,"_token": token,},
        success: function (t){
					get_wishlist(ws_n);get_head_wishlist();get_my_wishlist_sum();
					$("body").append('<div class="notify notify-success"><span>' + t.success + '</span><i class="fa fa-times" onclick="close_notify()"></i></div>');},
				error: function(t) {$("body").append('<div class="notify notify-error"><span>' + t.error + '</span><i class="fa fa-times"></i></div>')},
    });
});
function get_wishlist(nm){
	$.ajax({
			type : "GET",url : "/get-wishlist",
			dataType : "html",data:{"numb":nm},
			success:function(data){
				var array_return =  $.parseJSON(data);
				var your_html = "";
				if ($(".flat-unstyled > li:eq(1)").data("diff")) {var diff = $(".flat-unstyled > li:eq(1)").data("diff");}else{var diff = 1;}
				$(".delivary-section").html($(".delivary-section").data("pr"));
				$.each(array_return, function(index, value) {
					if ((value['price'] - value['discount']) > 20) {$(".delivary-section").html($(".delivary-section").data("cost"));}
					if (value['discount'] > 0) {
						var price = number_format((value['price'] - value['discount'])/diff,2) + $(".flat-unstyled > li:eq(1) > a").text().trim() + "<div class='regular'>"+number_format(value['price']/diff,2) + $(".flat-unstyled > li:eq(1) > a").text().trim()+"</div>";
						var p = ((value['price'] - value['discount'])/diff)*value['quantity'];
					}else{var price = number_format(value['price']/diff,2) + $(".flat-unstyled > li:eq(1) > a").text().trim();var p = (value['price']/diff)*value['quantity'];}
					your_html += "<tr><td><div class='img-product'><img src='/uploads/proph/small/"+value['image']+"' alt='"+value['productname']+"'/></div><div class='name-product'><a href='/product-details/"+value['slug']+"'>"+value['productname']+"</a></div><div class='price' id='pric"+value['id']+"'><span class='p-s'> "+price+"</div><div class='clearfix'></div></td><td><div class='quantity' data-id='"+value['id']+"'><span class='btn-down'></span><input type='number' name='number' value='"+value['quantity']+"' min='1' max='100' placeholder='quantity'><span class='btn-up'></span></div></td><td><div class='p-s total' id='sum"+value['id']+"'>" + number_format(p,2) + $(".flat-unstyled > li:eq(1) > a").text().trim()+"</div></td><td><a class='delete-btn' title='"+$("#w-list").data("words")+"' data-id='"+value['id']+"'><i class='fa fa-trash'></i></a></td></tr>";
				});
				if (nm != 4 && nm > array_return.length) {$(".get-wishlist").remove();}
				$("#w-list").html(your_html);
			},
			complete:function(){$(".lding").remove();$(".loader-gif").remove();}
	});
}
if (window.location.href.indexOf("search-result") > -1) {
		var cat_for_s = $("#searcat").val();
		var search_val = $("#getsearchtag").val();
		$(".cat-list-search:eq(1) > ul > li,.cat-list-search:eq(0) > div").on("click",function(){cat_for_s = $(this).attr("data");});
		var new_num = 6;
		$(".btn-load").on("click",function(){
			$(this).after('<img class="lding" src="/css/giphy.gif">');
			new_num += 6;
			get_seached_prod_list(new_num);
		});
		$(".sort-product > div > .showed").on("change",function(){
			$(this).before('<img class="lding" src="/css/giphy.gif">');
			get_seached_prod_list($(".sort-product > div > .showed option:selected").val());
		});
		get_seached_prod_list();
		$("#filter-btn").on("click",function(){
			get_seached_prod_list(new_num,$("#max_price").val(), $("#min_price").val(),$("#brand_list").val().split(","));
		});
		function get_seached_prod_list(nm,max,min,brands){
			$.ajax({
					type : "GET",
					url : "/get-searched-prod-list",
					dataType : "html",
					data:{"search":search_val,"sub_id":cat_for_s,"numb":nm,"max":max,"min":min,"brands":brands},
					success:function(data){
						var array_return =  $.parseJSON(data);
						var your_html = "";
						if ($(".flat-unstyled > li:eq(1)").data("diff")) {var diff = $(".flat-unstyled > li:eq(1)").data("diff");}else{var diff = 1;}
						$.each(array_return, function(index, value) {
							if (value['discount'] > 0) {var disc_amt = "<span class='regular'>"+number_format(value['price']/diff,2)+" "+$(".flat-unstyled > li:eq(1) > a").text()+"</span>";var disc = "<span class='item-sale' title='Discount'>"+Math.round(100 - ((value['price'] - value['discount'])/value['price'])*100) + "% </span>";}else{var disc_amt = "";var disc="";}
							if ($("#product_list").data("translate")) {
								var wishlist = "<div class='box-bottom'><div class='btn-add-cart'><a class='wishlist-btn' data='"+value['id']+"'>"+$("#product_list").data("translate")+"</a></div></div>";
							}else{var wishlist = ""};
							your_html += "<div class='col-lg-4 col-sm-6'><div class='product-box'><div class='imagebox'>"+disc+"<span class='view-count'><i class='fa fa-eye'></i> "+value['view']+"</span><div class='box-image owl-carousel-1'><a href='/product-details/"+value['slug']+"' title='"+value['productname']+"'><img class='m-img' src='/uploads/proph/small/"+value['image']+"' alt='"+value['productname']+"'/></a></div><div class='box-content'><div class='cat-name'><a href='/subcategory/"+value['sb_slug']+"' title='"+value['name']+"'>"+value['name']+"</a></div><div class='product-name'><a href='/product-details/"+value['slug']+"' title='"+value['productname']+"'>"+value['productname']+"</a></div><div class='price'><span class='sale'>"+number_format(((value['price'] - value['discount'])/diff),2)+" "+$(".flat-unstyled > li:eq(1) > a").text()+"</span>"+disc_amt+"</div></div>"+wishlist+"</div></div></div>";
						});
						if (nm != 6 && nm > array_return.length) {$(".blog-pagination").remove();}
						// console.log(data);
						$("#product_list").html(your_html);
					},
					// error:function(data){console.log(data);},
					complete:function(){$(".lding").remove();}
			});
		}
	}
	if ($(".flat-unstyled > .account > ul > li:eq(0) > a").attr('href') !== "/login") {get_head_wishlist();get_my_wishlist_sum();}
});
function get_my_wishlist_sum(){
	$.ajax({url: "/get-total-wishlist-price",method: "GET",success:function(data){$("#total_wishlist_sum").html(data);}});
}
$(document).ready(function(){
	if (window.location.href.indexOf("tags") > -1) {
		var pc_n = 10;
		$("#comm_load").on("click",function(){
			pc_n += 10;
			get_similar_comments(pc_n);
		});
		get_similar_comments();
		function get_similar_comments(nm){
			$.ajax({
					type : "GET",
					url : "/get-similar-comments",
					dataType : "html",
					data: {"numb":nm,"tag":$("#comments").data("tag")},
					success:function(data){
						var array_return =  $.parseJSON(data);
						var your_html = "";
						if (array_return.length == 0) {your_html = "<center>"+$("#comments").data("empty")+"</center>";}else{
							$.each(array_return, function(index, value) {
								var stars = "";
								for (var i = 0; i < 5; i++) {
									var fastar = "";
									if (value['rating'] > i) {fastar = 'class="fa fa-star"';}else{fastar = 'class="fa fa-star-o"';}
									stars += '<i '+fastar+' aria-hidden="true"></i>';
								}
								if (nm != 6 && nm > array_return.length) {$("#comm_load").remove();}
								// console.log(data);
								your_html += "<li class='comment'><div class='comment-author'><img src='/uploads/av/default-mini.png' alt="+value['name']+value['surname']+"></div><div class='comment-text'><div class='comment-metadata'><div class='name'>"+value['name']+value['surname']+": <span>"+formatDate(new Date(value['created_at']))+"</span></div><div class='queue'>"+stars+"</div></div><div class='comment-content'><p>"+get_tags(value['message'])+"</p></div><div class='clearfix'></div></div></li>";
							});
						}
						$("#comments").html(your_html);
					},
				});
		}
	}

	if (window.location.href.indexOf("product-details") > -1) {
		$(".pro-com-sec > div > button").click(function(t) {
			if ($("#pro-com-name").val() != "" && $("#pro-com-surname").val() != "" && isEmail($("#pro-com-email").val()) && $("#pro-com-body").val() != "" && $("#product_id").val() != "" && $("#rating").val() != "") {
				$(".form-review > .title").append('<img class="lding" src="/css/giphy.gif">'), close_notify(), t.preventDefault(), $.ajaxSetup({headers: {"X-CSRF-TOKEN": $('meta[name="_token"]').attr("content")}}),
				$.ajax({
						url: "/add-new-comment",
						method: "POST",
						data: {name: $("#pro-com-name").val(),surname: $("#pro-com-surname").val(),email: $("#pro-com-email").val(),message: $("#pro-com-body").val(),product_id: $("#product_id").val(),rating: $("#rating").val()},
						error: function(t) {$("body").append('<div class="notify notify-error"><span>' + t.error + '</span><i class="fa fa-times"></i></div>')},
						success: function(t) {
							$("#pro-stars").load(location.href+" #pro-stars>*","");
							get_prod_comments();ref_star_leng();
							if ($(".flat-unstyled > .account > ul > li:eq(0) > a").attr('href') === "/login") {
								$("#pro-com-name, #pro-com-surname, #pro-com-email").val("").css("border","2px solid #e5e5e5");}
							$("#pro-com-body").val("").css("border","2px solid #e5e5e5");
							$("body").append('<div class="notify notify-success"><span>' + t.success + '</span><i class="fa fa-times" onclick="close_notify()"></i></div>')
						},
						complete: function(t) {$(".lding").remove()}
				});
			}else{
				if(isEmpty($("#pro-com-name").val())){$("#pro-com-name").css("border","2px solid rgba(255, 0, 0, 0.64)")}else{$("#pro-com-name").css("border","2px solid #e5e5e5")}
				if(isEmpty($("#pro-com-surname").val())){$("#pro-com-surname").css("border","2px solid rgba(255, 0, 0, 0.64)")}else{$("#pro-com-surname").css("border","2px solid #e5e5e5")}
				if(!isEmail($("#pro-com-email").val())){$("#pro-com-email").css("border","2px solid rgba(255, 0, 0, 0.64)")}else{$("#pro-com-email").css("border","2px solid #e5e5e5")}
				if(isEmpty($("#pro-com-body").val())){$("#pro-com-body").css("border","2px solid rgba(255, 0, 0, 0.64)")}else{$("#pro-com-body").css("border","2px solid #e5e5e5")}
			}
		});
		get_prod_comments();
		var pc_n = 10;
		$("#pcomm_load").on("click",function(){
			pc_n += 10;
			get_prod_comments(pc_n);
		});
		function get_prod_comments(nm){
			$.ajax({
					type : "GET",
					url : "/get-prod-comments",
					dataType : "html",
					data: {"numb":nm,"prod":$("#pro-comment-list").data("prod")},
					success:function(data){
						var array_return =  $.parseJSON(data);
						var your_html = "";
						if (array_return.length == 0) {your_html = "<center>"+$("#pro-comment-list").data("empty")+"</center>";}else{
							$.each(array_return, function(index, value) {
								var stars = "";
								for (var i = 0; i < 5; i++) {
									var fastar = "";
									if (value['rating'] > i) {fastar = 'class="fa fa-star"';}else{fastar = 'class="fa fa-star-o"';}
									stars += '<i '+fastar+' aria-hidden="true"></i>';
								}
								if (nm != 6 && nm > array_return.length) {$("#pcomm_load").remove();}
								your_html += '<li><div class="review-metadata"><div class="name">'+value['name'] + ' ' + value['surname']+'</b>: <span>'+formatDate(new Date(value['created_at']))+'</span></div><div class="queue">'+stars+'</div></div><div class="review-content"><p>'+get_tags(value['message'])+'</p></div></li>';
							});
						}
						$("#pro-comment-list").html(your_html);
					},
				});
		}
	}
});

function formatDate(date) {
  var monthNames = $("footer").data("months").split(',');
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}
function ref_star_leng(){
	var stars_style = "";
	for (var i = 0; i < $(".numb-star").length; i++) {
		var tot = $(".queue-box > li:eq("+i+")").data("total");
		if (number_format(($(".numb-star:eq("+i+")").text()/tot)*100,2) >= 90) {
			var perc = "90";
		}else{var perc = number_format(($(".numb-star:eq("+i+")").text()/tot)*100,2);}
		stars_style += "li:nth-child("+(i + 1)+") .numb-star:after{width:"+perc+"% !important;}";
	}
	if ($("head > style").length) {
		$("head > style").html(stars_style);
	}else{
		$('head').append("<style>"+stars_style+"</style>");
	}
}
$(".tracking-content > form > .check-btn > button").click(function(){
	$.ajax({
			type : "GET",
			url : "/check-invoice",
			dataType : "html",
			data: {"invoice_id":$("#invoice_id").val(),"phone_number":$("#phone_number").val().replace("+994","").replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '')},
			success:function(data){$("#result").html(data);}
		});
});
$(document).ready(function(){for (var i = 0; i < $("img").length; i++) {$("img:eq("+i+")").attr("src",$("img:eq("+i+")").data("src"));}});
function get_tags(text){
	var text = text.replace(/#(\w+)/g, '<a href="/tags/$1">#$1</a>').replace(":)","&#128522;").replace("(y)","&#128077;").replace(":D","&#128515;").replace(":o","&#128558;");
	return text;
}
var emojis = [ "&#8986;", "&#8986;"]
// console.log(emojis[1])
$("#rememberme").on("click",function(){if ($(this).attr("checked") !== undefined) {$(this).removeAttr('checked');}else{$(this).attr('checked');}});
// $("body > .notify").fadeOut(300, function() { $(this).remove(); });
$('#getsearchtag').focus( function() {$(".open-button").css("display","none");});
$('#getsearchtag').blur( function() {$(".open-button").css("display","");});

$(document).ready(function(){
	window.onresize = function(event) {
		if (window.matchMedia('(max-width: 992px)').matches) {
			for (var i = 0; i < $(".box-image").length; i++) {
					for (var j = 1; j < $(".box-image:eq("+i+") > .owl-stage-outer > .owl-stage > .owl-item").length; j++) {
						console.log($(".box-image:eq("+i+") > .owl-stage-outer > .owl-stage > .owl-item:eq("+j+")").length);
						$(".box-image:eq("+i+") > .owl-stage-outer > .owl-stage > .owl-item:eq("+j+")").css("display","none");
					}
			}
			$(".owl-controls").css("display","none");
		}
	};
	// $(".flat-unstyled").prepend("<li style='float:left'>"+$(".phone > a").text()+"</li>")
});
$(".more-btn").on("click",function(){
	var id = $(this).data("id");
	var words = $("#mysales").data("words").split(',');
	$.ajax({
			type : "GET",
			url : "/getdetails",
			dataType : "html",data:{id:id},
			success:function(data){
				var val =  $.parseJSON(data);
				var ccry = $(".flat-unstyled > li:eq(1) > a").text().trim();
				if ($(".flat-unstyled > li:eq(1)").data("diff")) {var diff = $(".flat-unstyled > li:eq(1)").data("diff");}else{var diff = 1;}
				if (val['pro_name'] === null) {
					var pro = "---";
				}else{var pro = "<a href='/product-details/"+val['pro_slug']+"' target='_blanked'>"+val['pro_name']+"</a>"}
				var html = "<div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h4 class='modal-title'>"+words[0]+"</h4><button type='button' class='close' data-dismiss='modal'>&times;</button></div><div class='modal-body'><div class='my-sl-list'><div><b>"+words[1]+":</b> <i>"+val['sale_id']+"</i></div><div><b>"+words['2']+":</b> <i>"+val['product_id']+"</i></div><div><b>"+words[3]+":</b> <i>"+pro+"</i></div><div><b>"+words[4]+":</b> <i>"+val['date']+"</i></div><div><b>"+words[5]+":</b> <i>"+val['price'] + ccry +"</i></div><div><b>"+words[6]+":</b> <i>"+(val['price'] - val['discount']) + ccry +"</i></div><div><b>"+words[7]+":</b><i>"+val['quantity']+"</i></div><div><b>"+words[8]+":</b> <i>"+(val['quantity'] * (val['price'] - val['discount'])) + ccry+"</i></div><div><b>"+words[9]+":</b> <i>"+val['ss_point']+"</i></div></div></div><div class='modal-footer'><a class='mybtn-red' data-dismiss='modal'>"+words[10]+"</a></div></div></div>";
				$("#mysales").html(html);
			},
			// error:function(data){console.log(data);},
	});
});
$("#sub_now > button").on("click",function(t){
	if (isEmail($("#sub_now > input").val())) {
		close_notify(), t.preventDefault(),
		$.ajaxSetup({headers: {"X-CSRF-TOKEN": $('meta[name="_token"]').attr("content")}}),
		$.ajax({
				url: "/subscibe-now",
				method: "POST",
				data: {email: $("#sub_now > input").val(),},
				error: function(data) {$("body").append('<div class="notify notify-error"><span>' + data.error + '</span><i class="fa fa-times"></i></div>')},
				success: function(data) {$("body").append('<div class="notify notify-success"><span>' + data.success + '</span><i class="fa fa-times" onclick="close_notify()"></i></div>');$("#sub_now > input").removeAttr("style").val("");},
		});
	}else{
		if (isEmpty($("#sub_now > input").val()) || !isEmail($("#sub_now > input").val())) {$("#sub_now > input").css("border","2px solid rgba(255, 0, 0, 0.64)");}
	}
});
$(".lang-select").append('<a href="#" title="'+$(".lang-select > ul > li > a.active").text()+'">'+$(".lang-select > ul > li > a.active").text()+'<i class="fa fa-angle-down" aria-hidden="true"></i></a>');
(function(a){a.MaskedInput=function(f){if(!f||!f.elm||!f.format){return null}if(!(this instanceof a.MaskedInput)){return new a.MaskedInput(f)}var o=this,d=f.elm,s=f.format,i=f.allowed||"0123456789",h=f.allowedfx||function(){return true},p=f.separator||"/:-",n=f.typeon||"_YMDhms",c=f.onbadkey||function(){},q=f.onfilled||function(){},w=f.badkeywait||0,A=f.hasOwnProperty("preserve")?!!f.preserve:true,l=true,y=false,t=s,j=(function(){if(window.addEventListener){return function(E,C,D,B){E.addEventListener(C,D,(B===undefined)?false:B)}}if(window.attachEvent){return function(D,B,C){D.attachEvent("on"+B,C)}}return function(D,B,C){D["on"+B]=C}}()),u=function(){for(var B=d.value.length-1;B>=0;B--){for(var D=0,C=n.length;D<C;D++){if(d.value[B]===n[D]){return false}}}return true},x=function(C){try{C.focus();if(C.selectionStart>=0){return C.selectionStart}if(document.selection){var B=document.selection.createRange();return -B.moveStart("character",-C.value.length)}return -1}catch(D){return -1}},b=function(C,E){try{if(C.selectionStart){C.focus();C.setSelectionRange(E,E)}else{if(C.createTextRange){var B=C.createTextRange();B.move("character",E);B.select()}}}catch(D){return false}return true},m=function(D){D=D||window.event;var C="",E=D.which,B=D.type;if(E===undefined||E===null){E=D.keyCode}if(E===undefined||E===null){return""}switch(E){case 8:C="bksp";break;case 46:C=(B==="keydown")?"del":".";break;case 16:C="shift";break;case 0:case 9:case 13:C="etc";break;case 37:case 38:case 39:case 40:C=(!D.shiftKey&&(D.charCode!==39&&D.charCode!==undefined))?"etc":String.fromCharCode(E);break;default:C=String.fromCharCode(E);break}return C},v=function(B,C){if(B.preventDefault){B.preventDefault()}B.returnValue=C||false},k=function(B){var D=x(d),F=d.value,E="",C=true;switch(C){case (i.indexOf(B)!==-1):D=D+1;if(D>s.length){return false}while(p.indexOf(F.charAt(D-1))!==-1&&D<=s.length){D=D+1}if(!h(B,D)){c(B);return false}E=F.substr(0,D-1)+B+F.substr(D);if(i.indexOf(F.charAt(D))===-1&&n.indexOf(F.charAt(D))===-1){D=D+1}break;case (B==="bksp"):D=D-1;if(D<0){return false}while(i.indexOf(F.charAt(D))===-1&&n.indexOf(F.charAt(D))===-1&&D>1){D=D-1}E=F.substr(0,D)+s.substr(D,1)+F.substr(D+1);break;case (B==="del"):if(D>=F.length){return false}while(p.indexOf(F.charAt(D))!==-1&&F.charAt(D)!==""){D=D+1}E=F.substr(0,D)+s.substr(D,1)+F.substr(D+1);D=D+1;break;case (B==="etc"):return true;default:return false}d.value="";d.value=E;b(d,D);return false},g=function(B){if(i.indexOf(B)===-1&&B!=="bksp"&&B!=="del"&&B!=="etc"){var C=x(d);y=true;c(B);setTimeout(function(){y=false;b(d,C)},w);return false}return true},z=function(C){if(!l){return true}C=C||event;if(y){v(C);return false}var B=m(C);if((C.metaKey||C.ctrlKey)&&(B==="X"||B==="V")){v(C);return false}if(C.metaKey||C.ctrlKey){return true}if(d.value===""){d.value=s;b(d,0)}if(B==="bksp"||B==="del"){k(B);v(C);return false}return true},e=function(C){if(!l){return true}C=C||event;if(y){v(C);return false}var B=m(C);if(B==="etc"||C.metaKey||C.ctrlKey||C.altKey){return true}if(B!=="bksp"&&B!=="del"&&B!=="shift"){if(!g(B)){v(C);return false}if(k(B)){if(u()){q()}v(C,true);return true}if(u()){q()}v(C);return false}return false},r=function(){if(!d.tagName||(d.tagName.toUpperCase()!=="INPUT"&&d.tagName.toUpperCase()!=="TEXTAREA")){return null}if(!A||d.value===""){d.value=s}j(d,"keydown",function(B){z(B)});j(d,"keypress",function(B){e(B)});j(d,"focus",function(){t=d.value});j(d,"blur",function(){if(d.value!==t&&d.onchange){d.onchange()}});return o};o.resetField=function(){d.value=s};o.setAllowed=function(B){i=B;o.resetField()};o.setFormat=function(B){s=B;o.resetField()};o.setSeparator=function(B){p=B;o.resetField()};o.setTypeon=function(B){n=B;o.resetField()};o.setEnabled=function(B){l=B};return r()}}(window));
