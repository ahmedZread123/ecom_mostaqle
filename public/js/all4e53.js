if (function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , i = e.document
      , o = Object.getPrototypeOf
      , r = n.slice
      , s = n.concat
      , a = n.push
      , l = n.indexOf
      , c = {}
      , u = c.toString
      , d = c.hasOwnProperty
      , f = d.toString
      , p = f.call(Object)
      , h = {};
    function g(e, t) {
        var n = (t = t || i).createElement("script");
        n.text = e,
        t.head.appendChild(n).parentNode.removeChild(n)
    }
    var m = "3.2.1"
      , v = function(e, t) {
        return new v.fn.init(e,t)
    }
      , y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , b = /^-ms-/
      , w = /-([a-z])/g
      , _ = function(e, t) {
        return t.toUpperCase()
    };
    function x(e) {
        var t = !!e && "length"in e && e.length
          , n = v.type(e);
        return "function" !== n && !v.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    v.fn = v.prototype = {
        jquery: m,
        constructor: v,
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = v.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return v.each(this, e)
        },
        map: function(e) {
            return this.pushStack(v.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    },
    v.extend = v.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || v.isFunction(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = s[t],
                    s !== (i = e[t]) && (c && i && (v.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1,
                    r = n && Array.isArray(n) ? n : []) : r = n && v.isPlainObject(n) ? n : {},
                    s[t] = v.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }
    ,
    v.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === v.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = v.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = o(e)) && (n = d.call(t, "constructor") && t.constructor,
            "function" != typeof n || f.call(n) !== p))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            g(e)
        },
        camelCase: function(e) {
            return e.replace(b, "ms-").replace(w, _)
        },
        each: function(e, t) {
            var n, i = 0;
            if (x(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(y, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (x(Object(e)) ? v.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                e[o++] = t[i];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
                !t(e[o], o) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, r = 0, a = [];
            if (x(e))
                for (i = e.length; r < i; r++)
                    null != (o = t(e[r], r, n)) && a.push(o);
            else
                for (r in e)
                    null != (o = t(e[r], r, n)) && a.push(o);
            return s.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            v.isFunction(e))
                return i = r.call(arguments, 2),
                (o = function() {
                    return e.apply(t || this, i.concat(r.call(arguments)))
                }
                ).guid = e.guid = e.guid || v.guid++,
                o
        },
        now: Date.now,
        support: h
    }),
    "function" == typeof Symbol && (v.fn[Symbol.iterator] = n[Symbol.iterator]),
    v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var E = function(e) {
        var t, n, i, o, r, s, a, l, c, u, d, f, p, h, g, m, v, y, b, w = "sizzle" + 1 * new Date, _ = e.document, x = 0, E = 0, C = se(), T = se(), A = se(), k = function(e, t) {
            return e === t && (d = !0),
            0
        }, O = {}.hasOwnProperty, S = [], D = S.pop, N = S.push, j = S.push, I = S.slice, L = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", R = "\\[" + P + "*(" + M + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + P + "*\\]", q = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)", H = new RegExp(P + "+","g"), F = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$","g"), B = new RegExp("^" + P + "*," + P + "*"), U = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), W = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]","g"), z = new RegExp(q), Y = new RegExp("^" + M + "$"), K = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + R),
            PSEUDO: new RegExp("^" + q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)","i"),
            bool: new RegExp("^(?:" + $ + ")$","i"),
            needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)","i")
        }, V = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/, X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)","ig"), ee = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ie = function() {
            f()
        }, oe = ye(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            j.apply(S = I.call(_.childNodes), _.childNodes),
            S[_.childNodes.length].nodeType
        } catch (e) {
            j = {
                apply: S.length ? function(e, t) {
                    N.apply(e, I.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function re(e, t, i, o) {
            var r, a, c, u, d, h, v, y = t && t.ownerDocument, x = t ? t.nodeType : 9;
            if (i = i || [],
            "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x)
                return i;
            if (!o && ((t ? t.ownerDocument || t : _) !== p && f(t),
            t = t || p,
            g)) {
                if (11 !== x && (d = X.exec(e)))
                    if (r = d[1]) {
                        if (9 === x) {
                            if (!(c = t.getElementById(r)))
                                return i;
                            if (c.id === r)
                                return i.push(c),
                                i
                        } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r)
                            return i.push(c),
                            i
                    } else {
                        if (d[2])
                            return j.apply(i, t.getElementsByTagName(e)),
                            i;
                        if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return j.apply(i, t.getElementsByClassName(r)),
                            i
                    }
                if (n.qsa && !A[e + " "] && (!m || !m.test(e))) {
                    if (1 !== x)
                        y = t,
                        v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = w),
                        a = (h = s(e)).length; a--; )
                            h[a] = "#" + u + " " + ve(h[a]);
                        v = h.join(","),
                        y = J.test(e) && ge(t.parentNode) || t
                    }
                    if (v)
                        try {
                            return j.apply(i, y.querySelectorAll(v)),
                            i
                        } catch (e) {} finally {
                            u === w && t.removeAttribute("id")
                        }
                }
            }
            return l(e.replace(F, "$1"), t, i, o)
        }
        function se() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                t[n + " "] = o
            }
        }
        function ae(e) {
            return e[w] = !0,
            e
        }
        function le(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ce(e, t) {
            for (var n = e.split("|"), o = n.length; o--; )
                i.attrHandle[n[o]] = t
        }
        function ue(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function fe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function pe(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function he(e) {
            return ae(function(t) {
                return t = +t,
                ae(function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--; )
                        n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = re.support = {},
        r = re.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        f = re.setDocument = function(e) {
            var t, o, s = e ? e.ownerDocument || e : _;
            return s !== p && 9 === s.nodeType && s.documentElement ? (h = (p = s).documentElement,
            g = !r(p),
            _ !== p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)),
            n.attributes = le(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = le(function(e) {
                return e.appendChild(p.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = G.test(p.getElementsByClassName),
            n.getById = le(function(e) {
                return h.appendChild(e).id = w,
                !p.getElementsByName || !p.getElementsByName(w).length
            }),
            n.getById ? (i.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (i.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                        for (o = t.getElementsByName(e),
                        i = 0; r = o[i++]; )
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                                return [r]
                    }
                    return []
                }
            }
            ),
            i.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }
            ,
            i.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            v = [],
            m = [],
            (n.qsa = G.test(p.querySelectorAll)) && (le(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + $ + ")"),
                e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                e.querySelectorAll(":checked").length || m.push(":checked"),
                e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
            }),
            le(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = p.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                m.push(",.*:")
            })),
            (n.matchesSelector = G.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le(function(e) {
                n.disconnectedMatch = y.call(e, "*"),
                y.call(e, "[s!='']:x"),
                v.push("!=", q)
            }),
            m = m.length && new RegExp(m.join("|")),
            v = v.length && new RegExp(v.join("|")),
            t = G.test(h.compareDocumentPosition),
            b = t || G.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            k = t ? function(e, t) {
                if (e === t)
                    return d = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === p || e.ownerDocument === _ && b(_, e) ? -1 : t === p || t.ownerDocument === _ && b(_, t) ? 1 : u ? L(u, e) - L(u, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return d = !0,
                    0;
                var n, i = 0, o = e.parentNode, r = t.parentNode, s = [e], a = [t];
                if (!o || !r)
                    return e === p ? -1 : t === p ? 1 : o ? -1 : r ? 1 : u ? L(u, e) - L(u, t) : 0;
                if (o === r)
                    return ue(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (; s[i] === a[i]; )
                    i++;
                return i ? ue(s[i], a[i]) : s[i] === _ ? -1 : a[i] === _ ? 1 : 0
            }
            ,
            p) : p
        }
        ,
        re.matches = function(e, t) {
            return re(e, null, null, t)
        }
        ,
        re.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== p && f(e),
            t = t.replace(W, "='$1']"),
            n.matchesSelector && g && !A[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
                try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {}
            return re(t, p, null, [e]).length > 0
        }
        ,
        re.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && f(e),
            b(e, t)
        }
        ,
        re.attr = function(e, t) {
            (e.ownerDocument || e) !== p && f(e);
            var o = i.attrHandle[t.toLowerCase()]
              , r = o && O.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
            return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        re.escape = function(e) {
            return (e + "").replace(te, ne)
        }
        ,
        re.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        re.uniqueSort = function(e) {
            var t, i = [], o = 0, r = 0;
            if (d = !n.detectDuplicates,
            u = !n.sortStable && e.slice(0),
            e.sort(k),
            d) {
                for (; t = e[r++]; )
                    t === e[r] && (o = i.push(r));
                for (; o--; )
                    e.splice(i[o], 1)
            }
            return u = null,
            e
        }
        ,
        o = re.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += o(t);
            return n
        }
        ,
        (i = re.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: K,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = C[e + " "];
                    return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && C(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var o = re.attr(i, e);
                        return null == o ? "!=" === t : !t || (o += "",
                        "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(H, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var c, u, d, f, p, h, g = r !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (m) {
                            if (r) {
                                for (; g; ) {
                                    for (f = t; f = f[g]; )
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild],
                            s && y) {
                                for (b = (p = (c = (u = (d = (f = m)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2],
                                f = p && m.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop(); )
                                    if (1 === f.nodeType && ++b && f === t) {
                                        u[e] = [x, p, b];
                                        break
                                    }
                            } else if (y && (b = p = (c = (u = (d = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]),
                            !1 === b)
                                for (; (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((u = (d = f[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [x, b]),
                                f !== t)); )
                                    ;
                            return (b -= o) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                    return o[w] ? o(t) : o.length > 1 ? (n = [e, e, "", t],
                    i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                        for (var i, r = o(e, t), s = r.length; s--; )
                            e[i = L(e, r[s])] = !(n[i] = r[s])
                    }) : function(e) {
                        return o(e, 0, n)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: ae(function(e) {
                    var t = []
                      , n = []
                      , i = a(e.replace(F, "$1"));
                    return i[w] ? ae(function(e, t, n, o) {
                        for (var r, s = i(e, null, o, []), a = e.length; a--; )
                            (r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function(e, o, r) {
                        return t[0] = e,
                        i(t, null, r, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: ae(function(e) {
                    return function(t) {
                        return re(e, t).length > 0
                    }
                }),
                contains: ae(function(e) {
                    return e = e.replace(Z, ee),
                    function(t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    }
                }),
                lang: ae(function(e) {
                    return Y.test(e || "") || re.error("unsupported lang: " + e),
                    e = e.replace(Z, ee).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: pe(!1),
                disabled: pe(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                header: function(e) {
                    return Q.test(e.nodeName)
                },
                input: function(e) {
                    return V.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = i.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            i.pseudos[t] = de(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            i.pseudos[t] = fe(t);
        function me() {}
        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function ye(e, t, n) {
            var i = t.dir
              , o = t.next
              , r = o || i
              , s = n && "parentNode" === r
              , a = E++;
            return t.first ? function(t, n, o) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || s)
                        return e(t, n, o);
                return !1
            }
            : function(t, n, l) {
                var c, u, d, f = [x, a];
                if (l) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || s) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || s)
                            if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}),
                            o && o === t.nodeName.toLowerCase())
                                t = t[i] || t;
                            else {
                                if ((c = u[r]) && c[0] === x && c[1] === a)
                                    return f[2] = c[2];
                                if (u[r] = f,
                                f[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function be(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--; )
                    if (!e[o](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function we(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (r = e[a]) && (n && !n(r, i, o) || (s.push(r),
                c && t.push(a)));
            return s
        }
        function _e(e, t, n, i, o, r) {
            return i && !i[w] && (i = _e(i)),
            o && !o[w] && (o = _e(o, r)),
            ae(function(r, s, a, l) {
                var c, u, d, f = [], p = [], h = s.length, g = r || function(e, t, n) {
                    for (var i = 0, o = t.length; i < o; i++)
                        re(e, t[i], n);
                    return n
                }(t || "*", a.nodeType ? [a] : a, []), m = !e || !r && t ? g : we(g, f, e, a, l), v = n ? o || (r ? e : h || i) ? [] : s : m;
                if (n && n(m, v, a, l),
                i)
                    for (c = we(v, p),
                    i(c, [], a, l),
                    u = c.length; u--; )
                        (d = c[u]) && (v[p[u]] = !(m[p[u]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [],
                            u = v.length; u--; )
                                (d = v[u]) && c.push(m[u] = d);
                            o(null, v = [], c, l)
                        }
                        for (u = v.length; u--; )
                            (d = v[u]) && (c = o ? L(r, d) : f[u]) > -1 && (r[c] = !(s[c] = d))
                    }
                } else
                    v = we(v === s ? v.splice(h, v.length) : v),
                    o ? o(null, s, v, l) : j.apply(s, v)
            })
        }
        function xe(e) {
            for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ye(function(e) {
                return e === t
            }, a, !0), d = ye(function(e) {
                return L(t, e) > -1
            }, a, !0), f = [function(e, n, i) {
                var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                return t = null,
                o
            }
            ]; l < r; l++)
                if (n = i.relative[e[l].type])
                    f = [ye(be(f), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (o = ++l; o < r && !i.relative[e[o].type]; o++)
                            ;
                        return _e(l > 1 && be(f), l > 1 && ve(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(F, "$1"), n, l < o && xe(e.slice(l, o)), o < r && xe(e = e.slice(o)), o < r && ve(e))
                    }
                    f.push(n)
                }
            return be(f)
        }
        function Ee(e, t) {
            var n = t.length > 0
              , o = e.length > 0
              , r = function(r, s, a, l, u) {
                var d, h, m, v = 0, y = "0", b = r && [], w = [], _ = c, E = r || o && i.find.TAG("*", u), C = x += null == _ ? 1 : Math.random() || .1, T = E.length;
                for (u && (c = s === p || s || u); y !== T && null != (d = E[y]); y++) {
                    if (o && d) {
                        for (h = 0,
                        s || d.ownerDocument === p || (f(d),
                        a = !g); m = e[h++]; )
                            if (m(d, s || p, a)) {
                                l.push(d);
                                break
                            }
                        u && (x = C)
                    }
                    n && ((d = !m && d) && v--,
                    r && b.push(d))
                }
                if (v += y,
                n && y !== v) {
                    for (h = 0; m = t[h++]; )
                        m(b, w, s, a);
                    if (r) {
                        if (v > 0)
                            for (; y--; )
                                b[y] || w[y] || (w[y] = D.call(l));
                        w = we(w)
                    }
                    j.apply(l, w),
                    u && !r && w.length > 0 && v + t.length > 1 && re.uniqueSort(l)
                }
                return u && (x = C,
                c = _),
                b
            };
            return n ? ae(r) : r
        }
        return me.prototype = i.filters = i.pseudos,
        i.setFilters = new me,
        s = re.tokenize = function(e, t) {
            var n, o, r, s, a, l, c, u = T[e + " "];
            if (u)
                return t ? 0 : u.slice(0);
            for (a = e,
            l = [],
            c = i.preFilter; a; ) {
                for (s in n && !(o = B.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                l.push(r = [])),
                n = !1,
                (o = U.exec(a)) && (n = o.shift(),
                r.push({
                    value: n,
                    type: o[0].replace(F, " ")
                }),
                a = a.slice(n.length)),
                i.filter)
                    !(o = K[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(),
                    r.push({
                        value: n,
                        type: s,
                        matches: o
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? re.error(e) : T(e, l).slice(0)
        }
        ,
        a = re.compile = function(e, t) {
            var n, i = [], o = [], r = A[e + " "];
            if (!r) {
                for (t || (t = s(e)),
                n = t.length; n--; )
                    (r = xe(t[n]))[w] ? i.push(r) : o.push(r);
                (r = A(e, Ee(o, i))).selector = e
            }
            return r
        }
        ,
        l = re.select = function(e, t, n, o) {
            var r, l, c, u, d, f = "function" == typeof e && e, p = !o && s(e = f.selector || e);
            if (n = n || [],
            1 === p.length) {
                if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(Z, ee), t) || [])[0]))
                        return n;
                    f && (t = t.parentNode),
                    e = e.slice(l.shift().value.length)
                }
                for (r = K.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r],
                !i.relative[u = c.type]); )
                    if ((d = i.find[u]) && (o = d(c.matches[0].replace(Z, ee), J.test(l[0].type) && ge(t.parentNode) || t))) {
                        if (l.splice(r, 1),
                        !(e = o.length && ve(l)))
                            return j.apply(n, o),
                            n;
                        break
                    }
            }
            return (f || a(e, p))(o, t, !g, n, !t || J.test(e) && ge(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = w.split("").sort(k).join("") === w,
        n.detectDuplicates = !!d,
        f(),
        n.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }),
        le(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && le(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce($, function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        re
    }(e);
    v.find = E,
    v.expr = E.selectors,
    v.expr[":"] = v.expr.pseudos,
    v.uniqueSort = v.unique = E.uniqueSort,
    v.text = E.getText,
    v.isXMLDoc = E.isXML,
    v.contains = E.contains,
    v.escapeSelector = E.escape;
    var C = function(e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && v(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , T = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , A = v.expr.match.needsContext;
    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      , S = /^.[^:#\[\.,]*$/;
    function D(e, t, n) {
        return v.isFunction(t) ? v.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? v.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? v.grep(e, function(e) {
            return l.call(t, e) > -1 !== n
        }) : S.test(t) ? v.filter(t, e, n) : (t = v.filter(t, e),
        v.grep(e, function(e) {
            return l.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }
    v.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? v.find.matchesSelector(i, e) ? [i] : [] : v.find.matches(e, v.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    v.fn.extend({
        find: function(e) {
            var t, n, i = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(v(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (v.contains(o[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                v.find(e, o[t], n);
            return i > 1 ? v.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && A.test(e) ? v(e) : e || [], !1).length
        }
    });
    var N, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (v.fn.init = function(e, t, n) {
        var o, r;
        if (!e)
            return this;
        if (n = n || N,
        "string" == typeof e) {
            if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || !o[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (t = t instanceof v ? t[0] : t,
                v.merge(this, v.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)),
                O.test(o[1]) && v.isPlainObject(t))
                    for (o in t)
                        v.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this
            }
            return (r = i.getElementById(o[2])) && (this[0] = r,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : v.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(v) : v.makeArray(e, this)
    }
    ).prototype = v.fn,
    N = v(i);
    var I = /^(?:parents|prev(?:Until|All))/
      , L = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function $(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    v.fn.extend({
        has: function(e) {
            var t = v(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (v.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, o = this.length, r = [], s = "string" != typeof e && v(e);
            if (!A.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && v.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(r.length > 1 ? v.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(v(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(v.uniqueSort(v.merge(this.get(), v(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    v.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return C(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return C(e, "parentNode", n)
        },
        next: function(e) {
            return $(e, "nextSibling")
        },
        prev: function(e) {
            return $(e, "previousSibling")
        },
        nextAll: function(e) {
            return C(e, "nextSibling")
        },
        prevAll: function(e) {
            return C(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return C(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return C(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return k(e, "iframe") ? e.contentDocument : (k(e, "template") && (e = e.content || e),
            v.merge([], e.childNodes))
        }
    }, function(e, t) {
        v.fn[e] = function(n, i) {
            var o = v.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (o = v.filter(i, o)),
            this.length > 1 && (L[e] || v.uniqueSort(o),
            I.test(e) && o.reverse()),
            this.pushStack(o)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function M(e) {
        return e
    }
    function R(e) {
        throw e
    }
    function q(e, t, n, i) {
        var o;
        try {
            e && v.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && v.isFunction(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    v.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return v.each(e.match(P) || [], function(e, n) {
                t[n] = !0
            }),
            t
        }(e) : v.extend({}, e);
        var t, n, i, o, r = [], s = [], a = -1, l = function() {
            for (o = o || e.once,
            i = t = !0; s.length; a = -1)
                for (n = s.shift(); ++a < r.length; )
                    !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            o && (r = n ? [] : "")
        }, c = {
            add: function() {
                return r && (n && !t && (a = r.length - 1,
                s.push(n)),
                function t(n) {
                    v.each(n, function(n, i) {
                        v.isFunction(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== v.type(i) && t(i)
                    })
                }(arguments),
                n && !t && l()),
                this
            },
            remove: function() {
                return v.each(arguments, function(e, t) {
                    for (var n; (n = v.inArray(t, r, n)) > -1; )
                        r.splice(n, 1),
                        n <= a && a--
                }),
                this
            },
            has: function(e) {
                return e ? v.inArray(e, r) > -1 : r.length > 0
            },
            empty: function() {
                return r && (r = []),
                this
            },
            disable: function() {
                return o = s = [],
                r = n = "",
                this
            },
            disabled: function() {
                return !r
            },
            lock: function() {
                return o = s = [],
                n || t || (r = n = ""),
                this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(e, n) {
                return o || (n = [e, (n = n || []).slice ? n.slice() : n],
                s.push(n),
                t || l()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return c
    }
    ,
    v.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2], ["resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , o = {
                state: function() {
                    return i
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return o.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return v.Deferred(function(t) {
                        v.each(n, function(n, i) {
                            var o = v.isFunction(e[i[4]]) && e[i[4]];
                            r[i[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && v.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, i, o) {
                    var r = 0;
                    function s(t, n, i, o) {
                        return function() {
                            var a = this
                              , l = arguments
                              , c = function() {
                                var e, c;
                                if (!(t < r)) {
                                    if ((e = i.apply(a, l)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    c = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    v.isFunction(c) ? o ? c.call(e, s(r, n, M, o), s(r, n, R, o)) : (r++,
                                    c.call(e, s(r, n, M, o), s(r, n, R, o), s(r, n, M, n.notifyWith))) : (i !== M && (a = void 0,
                                    l = [e]),
                                    (o || n.resolveWith)(a, l))
                                }
                            }
                              , u = o ? c : function() {
                                try {
                                    c()
                                } catch (e) {
                                    v.Deferred.exceptionHook && v.Deferred.exceptionHook(e, u.stackTrace),
                                    t + 1 >= r && (i !== R && (a = void 0,
                                    l = [e]),
                                    n.rejectWith(a, l))
                                }
                            }
                            ;
                            t ? u() : (v.Deferred.getStackHook && (u.stackTrace = v.Deferred.getStackHook()),
                            e.setTimeout(u))
                        }
                    }
                    return v.Deferred(function(e) {
                        n[0][3].add(s(0, e, v.isFunction(o) ? o : M, e.notifyWith)),
                        n[1][3].add(s(0, e, v.isFunction(t) ? t : M)),
                        n[2][3].add(s(0, e, v.isFunction(i) ? i : R))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? v.extend(e, o) : o
                }
            }
              , r = {};
            return v.each(n, function(e, t) {
                var s = t[2]
                  , a = t[5];
                o[t[1]] = s.add,
                a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[0][2].lock),
                s.add(t[3].fire),
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments),
                    this
                }
                ,
                r[t[0] + "With"] = s.fireWith
            }),
            o.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , i = Array(n)
              , o = r.call(arguments)
              , s = v.Deferred()
              , a = function(e) {
                return function(n) {
                    i[e] = this,
                    o[e] = arguments.length > 1 ? r.call(arguments) : n,
                    --t || s.resolveWith(i, o)
                }
            };
            if (t <= 1 && (q(e, s.done(a(n)).resolve, s.reject, !t),
            "pending" === s.state() || v.isFunction(o[n] && o[n].then)))
                return s.then();
            for (; n--; )
                q(o[n], a(n), s.reject);
            return s.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    v.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && H.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    v.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var F = v.Deferred();
    function B() {
        i.removeEventListener("DOMContentLoaded", B),
        e.removeEventListener("load", B),
        v.ready()
    }
    v.fn.ready = function(e) {
        return F.then(e).catch(function(e) {
            v.readyException(e)
        }),
        this
    }
    ,
    v.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --v.readyWait : v.isReady) || (v.isReady = !0,
            !0 !== e && --v.readyWait > 0 || F.resolveWith(i, [v]))
        }
    }),
    v.ready.then = F.then,
    "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(v.ready) : (i.addEventListener("DOMContentLoaded", B),
    e.addEventListener("load", B));
    var U = function(e, t, n, i, o, r, s) {
        var a = 0
          , l = e.length
          , c = null == n;
        if ("object" === v.type(n))
            for (a in o = !0,
            n)
                U(e, t, a, n[a], !0, r, s);
        else if (void 0 !== i && (o = !0,
        v.isFunction(i) || (s = !0),
        c && (s ? (t.call(e, i),
        t = null) : (c = t,
        t = function(e, t, n) {
            return c.call(v(e), n)
        }
        )),
        t))
            for (; a < l; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    }
      , W = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function z() {
        this.expando = v.expando + z.uid++
    }
    z.uid = 1,
    z.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            W(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t)
                o[v.camelCase(t)] = n;
            else
                for (i in t)
                    o[v.camelCase(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][v.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(v.camelCase) : t = (t = v.camelCase(t))in i ? [t] : t.match(P) || [],
                    n = t.length;
                    for (; n--; )
                        delete i[t[n]]
                }
                (void 0 === t || v.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !v.isEmptyObject(t)
        }
    };
    var Y = new z
      , K = new z
      , V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Q = /[A-Z]/g;
    function G(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Q, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : V.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                K.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    v.extend({
        hasData: function(e) {
            return K.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    v.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = K.get(r),
                1 === r.nodeType && !Y.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && (0 === (i = s[n].name).indexOf("data-") && (i = v.camelCase(i.slice(5)),
                        G(r, i, o[i])));
                    Y.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                K.set(this, e)
            }) : U(this, function(t) {
                var n;
                if (r && void 0 === t) {
                    if (void 0 !== (n = K.get(r, e)))
                        return n;
                    if (void 0 !== (n = G(r, e)))
                        return n
                } else
                    this.each(function() {
                        K.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }),
    v.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = Y.get(e, t),
                n && (!i || Array.isArray(n) ? i = Y.access(e, t, v.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = v.queue(e, t)
              , i = n.length
              , o = n.shift()
              , r = v._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(e, function() {
                v.dequeue(e, t)
            }, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: v.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    v.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? v.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = v.queue(this, e, t);
                v._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && v.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                v.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, o = v.Deferred(), r = this, s = this.length, a = function() {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (n = Y.get(r[s], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            o.promise(t)
        }
    });
    var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , J = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$","i")
      , Z = ["Top", "Right", "Bottom", "Left"]
      , ee = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && v.contains(e.ownerDocument, e) && "none" === v.css(e, "display")
    }
      , te = function(e, t, n, i) {
        var o, r, s = {};
        for (r in t)
            s[r] = e.style[r],
            e.style[r] = t[r];
        for (r in o = n.apply(e, i || []),
        t)
            e.style[r] = s[r];
        return o
    };
    function ne(e, t, n, i) {
        var o, r = 1, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return v.css(e, t, "")
        }
        , l = a(), c = n && n[3] || (v.cssNumber[t] ? "" : "px"), u = (v.cssNumber[t] || "px" !== c && +l) && J.exec(v.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3],
            n = n || [],
            u = +l || 1;
            do {
                u /= r = r || ".5",
                v.style(e, t, u + c)
            } while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return n && (u = +u || +l || 0,
        o = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = c,
        i.start = u,
        i.end = o)),
        o
    }
    var ie = {};
    function oe(e) {
        var t, n = e.ownerDocument, i = e.nodeName, o = ie[i];
        return o || (t = n.body.appendChild(n.createElement(i)),
        o = v.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === o && (o = "block"),
        ie[i] = o,
        o)
    }
    function re(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
            (i = e[r]).style && (n = i.style.display,
            t ? ("none" === n && (o[r] = Y.get(i, "display") || null,
            o[r] || (i.style.display = "")),
            "" === i.style.display && ee(i) && (o[r] = oe(i))) : "none" !== n && (o[r] = "none",
            Y.set(i, "display", n)));
        for (r = 0; r < s; r++)
            null != o[r] && (e[r].style.display = o[r]);
        return e
    }
    v.fn.extend({
        show: function() {
            return re(this, !0)
        },
        hide: function() {
            return re(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ee(this) ? v(this).show() : v(this).hide()
            })
        }
    });
    var se = /^(?:checkbox|radio)$/i
      , ae = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , le = /^$|\/(?:java|ecma)script/i
      , ce = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ue(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && k(e, t) ? v.merge([e], n) : n
    }
    function de(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ce.optgroup = ce.option,
    ce.tbody = ce.tfoot = ce.colgroup = ce.caption = ce.thead,
    ce.th = ce.td;
    var fe = /<|&#?\w+;/;
    function pe(e, t, n, i, o) {
        for (var r, s, a, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
            if ((r = e[p]) || 0 === r)
                if ("object" === v.type(r))
                    v.merge(f, r.nodeType ? [r] : r);
                else if (fe.test(r)) {
                    for (s = s || d.appendChild(t.createElement("div")),
                    a = (ae.exec(r) || ["", ""])[1].toLowerCase(),
                    l = ce[a] || ce._default,
                    s.innerHTML = l[1] + v.htmlPrefilter(r) + l[2],
                    u = l[0]; u--; )
                        s = s.lastChild;
                    v.merge(f, s.childNodes),
                    (s = d.firstChild).textContent = ""
                } else
                    f.push(t.createTextNode(r));
        for (d.textContent = "",
        p = 0; r = f[p++]; )
            if (i && v.inArray(r, i) > -1)
                o && o.push(r);
            else if (c = v.contains(r.ownerDocument, r),
            s = ue(d.appendChild(r), "script"),
            c && de(s),
            n)
                for (u = 0; r = s[u++]; )
                    le.test(r.type || "") && n.push(r);
        return d
    }
    !function() {
        var e = i.createDocumentFragment().appendChild(i.createElement("div"))
          , t = i.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var he = i.documentElement
      , ge = /^key/
      , me = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , ve = /^([^.]*)(?:\.(.+)|)/;
    function ye() {
        return !0
    }
    function be() {
        return !1
    }
    function we() {
        try {
            return i.activeElement
        } catch (e) {}
    }
    function _e(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                _e(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n,
        i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
        i = void 0) : (o = i,
        i = n,
        n = void 0)),
        !1 === o)
            o = be;
        else if (!o)
            return e;
        return 1 === r && (s = o,
        (o = function(e) {
            return v().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = v.guid++)),
        e.each(function() {
            v.event.add(this, t, o, i, n)
        })
    }
    v.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, f, p, h, g, m = Y.get(e);
            if (m)
                for (n.handler && (n = (r = n).handler,
                o = r.selector),
                o && v.find.matchesSelector(he, o),
                n.guid || (n.guid = v.guid++),
                (l = m.events) || (l = m.events = {}),
                (s = m.handle) || (s = m.handle = function(t) {
                    return void 0 !== v && v.event.triggered !== t.type ? v.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                c = (t = (t || "").match(P) || [""]).length; c--; )
                    p = g = (a = ve.exec(t[c]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    p && (d = v.event.special[p] || {},
                    p = (o ? d.delegateType : d.bindType) || p,
                    d = v.event.special[p] || {},
                    u = v.extend({
                        type: p,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && v.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r),
                    (f = l[p]) || ((f = l[p] = []).delegateCount = 0,
                    d.setup && !1 !== d.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(p, s)),
                    d.add && (d.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                    v.event.global[p] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, f, p, h, g, m = Y.hasData(e) && Y.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(P) || [""]).length; c--; )
                    if (p = g = (a = ve.exec(t[c]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    p) {
                        for (d = v.event.special[p] || {},
                        f = l[p = (i ? d.delegateType : d.bindType) || p] || [],
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = r = f.length; r--; )
                            u = f[r],
                            !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1),
                            u.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, u));
                        s && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || v.removeEvent(e, p, m.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            v.event.remove(e, p + t[c], n, i, !0);
                v.isEmptyObject(l) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, s, a = v.event.fix(e), l = new Array(arguments.length), c = (Y.get(this, "events") || {})[a.type] || [], u = v.event.special[a.type] || {};
            for (l[0] = a,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (a.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = v.event.handlers.call(this, a, c),
                t = 0; (o = s[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = o.elem,
                    n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r,
                        a.data = r.data,
                        void 0 !== (i = ((v.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(),
                        a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? v(o, this).index(c) > -1 : v.find(o, this, null, [c]).length),
                            s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this,
            l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(e, t) {
            Object.defineProperty(v.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v.isFunction(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[v.expando] ? e : new v.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== we() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === we() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && k(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return k(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    v.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    v.Event = function(e, t) {
        return this instanceof v.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ye : be,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && v.extend(this, t),
        this.timeStamp = e && e.timeStamp || v.now(),
        void (this[v.expando] = !0)) : new v.Event(e,t)
    }
    ,
    v.Event.prototype = {
        constructor: v.Event,
        isDefaultPrevented: be,
        isPropagationStopped: be,
        isImmediatePropagationStopped: be,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ye,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ye,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ye,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    v.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && me.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, v.event.addProp),
    v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        v.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget, o = e.handleObj;
                return i && (i === this || v.contains(this, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    v.fn.extend({
        on: function(e, t, n, i) {
            return _e(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return _e(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = be),
            this.each(function() {
                v.event.remove(this, e, n, t)
            })
        }
    });
    var xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Ee = /<script|<style|<link/i
      , Ce = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Te = /^true\/(.*)/
      , Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function ke(e, t) {
        return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && v(">tbody", e)[0] || e
    }
    function Oe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Se(e) {
        var t = Te.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function De(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (r = Y.access(e),
            s = Y.set(t, r),
            c = r.events))
                for (o in delete s.handle,
                s.events = {},
                c)
                    for (n = 0,
                    i = c[o].length; n < i; n++)
                        v.event.add(t, o, c[o][n]);
            K.hasData(e) && (a = K.access(e),
            l = v.extend({}, a),
            K.set(t, l))
        }
    }
    function Ne(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && se.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function je(e, t, n, i) {
        t = s.apply([], t);
        var o, r, a, l, c, u, d = 0, f = e.length, p = f - 1, m = t[0], y = v.isFunction(m);
        if (y || f > 1 && "string" == typeof m && !h.checkClone && Ce.test(m))
            return e.each(function(o) {
                var r = e.eq(o);
                y && (t[0] = m.call(this, o, r.html())),
                je(r, t, n, i)
            });
        if (f && (r = (o = pe(t, e[0].ownerDocument, !1, e, i)).firstChild,
        1 === o.childNodes.length && (o = r),
        r || i)) {
            for (l = (a = v.map(ue(o, "script"), Oe)).length; d < f; d++)
                c = o,
                d !== p && (c = v.clone(c, !0, !0),
                l && v.merge(a, ue(c, "script"))),
                n.call(e[d], c, d);
            if (l)
                for (u = a[a.length - 1].ownerDocument,
                v.map(a, Se),
                d = 0; d < l; d++)
                    c = a[d],
                    le.test(c.type || "") && !Y.access(c, "globalEval") && v.contains(u, c) && (c.src ? v._evalUrl && v._evalUrl(c.src) : g(c.textContent.replace(Ae, ""), u))
        }
        return e
    }
    function Ie(e, t, n) {
        for (var i, o = t ? v.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || v.cleanData(ue(i)),
            i.parentNode && (n && v.contains(i.ownerDocument, i) && de(ue(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    v.extend({
        htmlPrefilter: function(e) {
            return e.replace(xe, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0), l = v.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || v.isXMLDoc(e)))
                for (s = ue(a),
                i = 0,
                o = (r = ue(e)).length; i < o; i++)
                    Ne(r[i], s[i]);
            if (t)
                if (n)
                    for (r = r || ue(e),
                    s = s || ue(a),
                    i = 0,
                    o = r.length; i < o; i++)
                        De(r[i], s[i]);
                else
                    De(e, a);
            return (s = ue(a, "script")).length > 0 && de(s, !l && ue(e, "script")),
            a
        },
        cleanData: function(e) {
            for (var t, n, i, o = v.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (W(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (i in t.events)
                                o[i] ? v.event.remove(n, i) : v.removeEvent(n, i, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }),
    v.fn.extend({
        detach: function(e) {
            return Ie(this, e, !0)
        },
        remove: function(e) {
            return Ie(this, e)
        },
        text: function(e) {
            return U(this, function(e) {
                return void 0 === e ? v.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return je(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return je(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ke(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return je(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return je(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (v.cleanData(ue(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return v.clone(this, e, t)
            })
        },
        html: function(e) {
            return U(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ee.test(e) && !ce[(ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = v.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (v.cleanData(ue(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return je(this, arguments, function(t) {
                var n = this.parentNode;
                v.inArray(this, e) < 0 && (v.cleanData(ue(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        v.fn[e] = function(e) {
            for (var n, i = [], o = v(e), r = o.length - 1, s = 0; s <= r; s++)
                n = s === r ? this : this.clone(!0),
                v(o[s])[t](n),
                a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Le = /^margin/
      , $e = new RegExp("^(" + X + ")(?!px)[a-z%]+$","i")
      , Pe = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    };
    function Me(e, t, n) {
        var i, o, r, s, a = e.style;
        return (n = n || Pe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || v.contains(e.ownerDocument, e) || (s = v.style(e, t)),
        !h.pixelMarginRight() && $e.test(s) && Le.test(t) && (i = a.width,
        o = a.minWidth,
        r = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = o,
        a.maxWidth = r)),
        void 0 !== s ? s + "" : s
    }
    function Re(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    !function() {
        function t() {
            if (l) {
                l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                l.innerHTML = "",
                he.appendChild(a);
                var t = e.getComputedStyle(l);
                n = "1%" !== t.top,
                s = "2px" === t.marginLeft,
                o = "4px" === t.width,
                l.style.marginRight = "50%",
                r = "4px" === t.marginRight,
                he.removeChild(a),
                l = null
            }
        }
        var n, o, r, s, a = i.createElement("div"), l = i.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        h.clearCloneStyle = "content-box" === l.style.backgroundClip,
        a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        a.appendChild(l),
        v.extend(h, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelMarginRight: function() {
                return t(),
                r
            },
            reliableMarginLeft: function() {
                return t(),
                s
            }
        }))
    }();
    var qe = /^(none|table(?!-c[ea]).+)/
      , He = /^--/
      , Fe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Be = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ue = ["Webkit", "Moz", "ms"]
      , We = i.createElement("div").style;
    function ze(e) {
        var t = v.cssProps[e];
        return t || (t = v.cssProps[e] = function(e) {
            if (e in We)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--; )
                if ((e = Ue[n] + t)in We)
                    return e
        }(e) || e),
        t
    }
    function Ye(e, t, n) {
        var i = J.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function Ke(e, t, n, i, o) {
        var r, s = 0;
        for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2)
            "margin" === n && (s += v.css(e, n + Z[r], !0, o)),
            i ? ("content" === n && (s -= v.css(e, "padding" + Z[r], !0, o)),
            "margin" !== n && (s -= v.css(e, "border" + Z[r] + "Width", !0, o))) : (s += v.css(e, "padding" + Z[r], !0, o),
            "padding" !== n && (s += v.css(e, "border" + Z[r] + "Width", !0, o)));
        return s
    }
    function Ve(e, t, n) {
        var i, o = Pe(e), r = Me(e, t, o), s = "border-box" === v.css(e, "boxSizing", !1, o);
        return $e.test(r) ? r : (i = s && (h.boxSizingReliable() || r === e.style[t]),
        "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]),
        (r = parseFloat(r) || 0) + Ke(e, t, n || (s ? "border" : "content"), i, o) + "px")
    }
    function Qe(e, t, n, i, o) {
        return new Qe.prototype.init(e,t,n,i,o)
    }
    v.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Me(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = v.camelCase(t), l = He.test(t), c = e.style;
                return l || (t = ze(a)),
                s = v.cssHooks[t] || v.cssHooks[a],
                void 0 === n ? s && "get"in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t] : ("string" === (r = typeof n) && (o = J.exec(n)) && o[1] && (n = ne(e, t, o),
                r = "number"),
                void (null != n && n == n && ("number" === r && (n += o && o[3] || (v.cssNumber[a] ? "" : "px")),
                h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = v.camelCase(t);
            return He.test(t) || (t = ze(a)),
            (s = v.cssHooks[t] || v.cssHooks[a]) && "get"in s && (o = s.get(e, !0, n)),
            void 0 === o && (o = Me(e, t, i)),
            "normal" === o && t in Be && (o = Be[t]),
            "" === n || n ? (r = parseFloat(o),
            !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }),
    v.each(["height", "width"], function(e, t) {
        v.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return !qe.test(v.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ve(e, t, i) : te(e, Fe, function() {
                        return Ve(e, t, i)
                    })
            },
            set: function(e, n, i) {
                var o, r = i && Pe(e), s = i && Ke(e, t, i, "border-box" === v.css(e, "boxSizing", !1, r), r);
                return s && (o = J.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                n = v.css(e, t)),
                Ye(0, n, s)
            }
        }
    }),
    v.cssHooks.marginLeft = Re(h.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Me(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        v.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    o[e + Z[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        },
        Le.test(e) || (v.cssHooks[e + t].set = Ye)
    }),
    v.fn.extend({
        css: function(e, t) {
            return U(this, function(e, t, n) {
                var i, o, r = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = Pe(e),
                    o = t.length; s < o; s++)
                        r[t[s]] = v.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? v.style(e, t, n) : v.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }),
    v.Tween = Qe,
    Qe.prototype = {
        constructor: Qe,
        init: function(e, t, n, i, o, r) {
            this.elem = e,
            this.prop = n,
            this.easing = o || v.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (v.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Qe.propHooks[this.prop];
            return e && e.get ? e.get(this) : Qe.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Qe.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Qe.propHooks._default.set(this),
            this
        }
    },
    Qe.prototype.init.prototype = Qe.prototype,
    Qe.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = v.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[v.cssProps[e.prop]] && !v.cssHooks[e.prop] ? e.elem[e.prop] = e.now : v.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    Qe.propHooks.scrollTop = Qe.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    v.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    v.fx = Qe.prototype.init,
    v.fx.step = {};
    var Ge, Xe, Je = /^(?:toggle|show|hide)$/, Ze = /queueHooks$/;
    function et() {
        Xe && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(et) : e.setTimeout(et, v.fx.interval),
        v.fx.tick())
    }
    function tt() {
        return e.setTimeout(function() {
            Ge = void 0
        }),
        Ge = v.now()
    }
    function nt(e, t) {
        var n, i = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            o["margin" + (n = Z[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function it(e, t, n) {
        for (var i, o = (ot.tweeners[t] || []).concat(ot.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e))
                return i
    }
    function ot(e, t, n) {
        var i, o, r = 0, s = ot.prefilters.length, a = v.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var t = Ge || tt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++)
                c.tweens[r].run(i);
            return a.notifyWith(e, [c, i, n]),
            i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]),
            a.resolveWith(e, [c]),
            !1)
        }, c = a.promise({
            elem: e,
            props: v.extend({}, t),
            opts: v.extend(!0, {
                specialEasing: {},
                easing: v.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ge || tt(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = v.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? c.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; n < i; n++)
                    c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]),
                a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                this
            }
        }), u = c.props;
        for (function(e, t) {
            var n, i, o, r, s;
            for (n in e)
                if (o = t[i = v.camelCase(n)],
                r = e[n],
                Array.isArray(r) && (o = r[1],
                r = e[n] = r[0]),
                n !== i && (e[i] = r,
                delete e[n]),
                (s = v.cssHooks[i]) && "expand"in s)
                    for (n in r = s.expand(r),
                    delete e[i],
                    r)
                        n in e || (e[n] = r[n],
                        t[n] = o);
                else
                    t[i] = o
        }(u, c.opts.specialEasing); r < s; r++)
            if (i = ot.prefilters[r].call(c, e, u, c.opts))
                return v.isFunction(i.stop) && (v._queueHooks(c.elem, c.opts.queue).stop = v.proxy(i.stop, i)),
                i;
        return v.map(u, it, c),
        v.isFunction(c.opts.start) && c.opts.start.call(e, c),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
        v.fx.timer(v.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c
    }
    v.Animation = v.extend(ot, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ne(n.elem, e, J.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            v.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, i = 0, o = e.length; i < o; i++)
                n = e[i],
                ot.tweeners[n] = ot.tweeners[n] || [],
                ot.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, o, r, s, a, l, c, u, d = "width"in t || "height"in t, f = this, p = {}, h = e.style, g = e.nodeType && ee(e), m = Y.get(e, "fxshow");
            for (i in n.queue || (null == (s = v._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            f.always(function() {
                f.always(function() {
                    s.unqueued--,
                    v.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (o = t[i],
                Je.test(o)) {
                    if (delete t[i],
                    r = r || "toggle" === o,
                    o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i])
                            continue;
                        g = !0
                    }
                    p[i] = m && m[i] || v.style(e, i)
                }
            if ((l = !v.isEmptyObject(t)) || !v.isEmptyObject(p))
                for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (c = m && m.display) && (c = Y.get(e, "display")),
                "none" === (u = v.css(e, "display")) && (c ? u = c : (re([e], !0),
                c = e.style.display || c,
                u = v.css(e, "display"),
                re([e]))),
                ("inline" === u || "inline-block" === u && null != c) && "none" === v.css(e, "float") && (l || (f.done(function() {
                    h.display = c
                }),
                null == c && (u = h.display,
                c = "none" === u ? "" : u)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                f.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                l = !1,
                p)
                    l || (m ? "hidden"in m && (g = m.hidden) : m = Y.access(e, "fxshow", {
                        display: c
                    }),
                    r && (m.hidden = !g),
                    g && re([e], !0),
                    f.done(function() {
                        for (i in g || re([e]),
                        Y.remove(e, "fxshow"),
                        p)
                            v.style(e, i, p[i])
                    })),
                    l = it(g ? m[i] : 0, i, f),
                    i in m || (m[i] = l.start,
                    g && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ot.prefilters.unshift(e) : ot.prefilters.push(e)
        }
    }),
    v.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        return v.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in v.fx.speeds ? i.duration = v.fx.speeds[i.duration] : i.duration = v.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            v.isFunction(i.old) && i.old.call(this),
            i.queue && v.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    v.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = v.isEmptyObject(e)
              , r = v.speed(t, n, i)
              , s = function() {
                var t = ot(this, v.extend({}, e), r);
                (o || Y.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , o = null != e && e + "queueHooks"
                  , r = v.timers
                  , s = Y.get(this);
                if (o)
                    s[o] && s[o].stop && i(s[o]);
                else
                    for (o in s)
                        s[o] && s[o].stop && Ze.test(o) && i(s[o]);
                for (o = r.length; o--; )
                    r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n),
                    t = !1,
                    r.splice(o, 1));
                !t && n || v.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = Y.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = v.timers, s = i ? i.length : 0;
                for (n.finish = !0,
                v.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length; t--; )
                    r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                    r.splice(t, 1));
                for (t = 0; t < s; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    v.each(["toggle", "show", "hide"], function(e, t) {
        var n = v.fn[t];
        v.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(nt(t, !0), e, i, o)
        }
    }),
    v.each({
        slideDown: nt("show"),
        slideUp: nt("hide"),
        slideToggle: nt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        v.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    v.timers = [],
    v.fx.tick = function() {
        var e, t = 0, n = v.timers;
        for (Ge = v.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || v.fx.stop(),
        Ge = void 0
    }
    ,
    v.fx.timer = function(e) {
        v.timers.push(e),
        v.fx.start()
    }
    ,
    v.fx.interval = 13,
    v.fx.start = function() {
        Xe || (Xe = !0,
        et())
    }
    ,
    v.fx.stop = function() {
        Xe = null
    }
    ,
    v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    v.fn.delay = function(t, n) {
        return t = v.fx && v.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(o)
            }
        })
    }
    ,
    function() {
        var e = i.createElement("input")
          , t = i.createElement("select").appendChild(i.createElement("option"));
        e.type = "checkbox",
        h.checkOn = "" !== e.value,
        h.optSelected = t.selected,
        (e = i.createElement("input")).value = "t",
        e.type = "radio",
        h.radioValue = "t" === e.value
    }();
    var rt, st = v.expr.attrHandle;
    v.fn.extend({
        attr: function(e, t) {
            return U(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                v.removeAttr(this, e)
            })
        }
    }),
    v.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === e.getAttribute ? v.prop(e, t, n) : (1 === r && v.isXMLDoc(e) || (o = v.attrHooks[t.toLowerCase()] || (v.expr.match.bool.test(t) ? rt : void 0)),
                void 0 !== n ? null === n ? void v.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : o && "get"in o && null !== (i = o.get(e, t)) ? i : null == (i = v.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && k(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, o = t && t.match(P);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    e.removeAttribute(n)
        }
    }),
    rt = {
        set: function(e, t, n) {
            return !1 === t ? v.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    v.each(v.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = st[t] || v.find.attr;
        st[t] = function(e, t, i) {
            var o, r, s = t.toLowerCase();
            return i || (r = st[s],
            st[s] = o,
            o = null != n(e, t, i) ? s : null,
            st[s] = r),
            o
        }
    });
    var at = /^(?:input|select|textarea|button)$/i
      , lt = /^(?:a|area)$/i;
    function ct(e) {
        return (e.match(P) || []).join(" ")
    }
    function ut(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    v.fn.extend({
        prop: function(e, t) {
            return U(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[v.propFix[e] || e]
            })
        }
    }),
    v.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && v.isXMLDoc(e) || (t = v.propFix[t] || t,
                o = v.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = v.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : at.test(e.nodeName) || lt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    h.optSelected || (v.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        v.propFix[this.toLowerCase()] = this
    }),
    v.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (v.isFunction(e))
                return this.each(function(t) {
                    v(this).addClass(e.call(this, t, ut(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(P) || []; n = this[l++]; )
                    if (o = ut(n),
                    i = 1 === n.nodeType && " " + ct(o) + " ") {
                        for (s = 0; r = t[s++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (a = ct(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (v.isFunction(e))
                return this.each(function(t) {
                    v(this).removeClass(e.call(this, t, ut(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(P) || []; n = this[l++]; )
                    if (o = ut(n),
                    i = 1 === n.nodeType && " " + ct(o) + " ") {
                        for (s = 0; r = t[s++]; )
                            for (; i.indexOf(" " + r + " ") > -1; )
                                i = i.replace(" " + r + " ", " ");
                        o !== (a = ct(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : v.isFunction(e) ? this.each(function(n) {
                v(this).toggleClass(e.call(this, n, ut(this), t), t)
            }) : this.each(function() {
                var t, i, o, r;
                if ("string" === n)
                    for (i = 0,
                    o = v(this),
                    r = e.match(P) || []; t = r[i++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = ut(this)) && Y.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + ct(ut(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var dt = /\r/g;
    v.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = v.isFunction(e),
            this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, v(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = v.map(o, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = v.valHooks[o.type] || v.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(dt, "") : null == n ? "" : n : void 0
        }
    }),
    v.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = v.find.attr(e, "value");
                    return null != t ? t : ct(v.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options, r = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? r + 1 : o.length;
                    for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                            if (t = v(n).val(),
                            s)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = v.makeArray(t), s = o.length; s--; )
                        ((i = o[s]).selected = v.inArray(v.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = v.inArray(v(e).val(), t) > -1
            }
        },
        h.checkOn || (v.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var ft = /^(?:focusinfocus|focusoutblur)$/;
    v.extend(v.event, {
        trigger: function(t, n, o, r) {
            var s, a, l, c, u, f, p, h = [o || i], g = d.call(t, "type") ? t.type : t, m = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = l = o = o || i,
            3 !== o.nodeType && 8 !== o.nodeType && !ft.test(g + v.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."),
            g = m.shift(),
            m.sort()),
            u = g.indexOf(":") < 0 && "on" + g,
            (t = t[v.expando] ? t : new v.Event(g,"object" == typeof t && t)).isTrigger = r ? 2 : 3,
            t.namespace = m.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = o),
            n = null == n ? [t] : v.makeArray(n, [t]),
            p = v.event.special[g] || {},
            r || !p.trigger || !1 !== p.trigger.apply(o, n))) {
                if (!r && !p.noBubble && !v.isWindow(o)) {
                    for (c = p.delegateType || g,
                    ft.test(c + g) || (a = a.parentNode); a; a = a.parentNode)
                        h.push(a),
                        l = a;
                    l === (o.ownerDocument || i) && h.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0; (a = h[s++]) && !t.isPropagationStopped(); )
                    t.type = s > 1 ? c : p.bindType || g,
                    (f = (Y.get(a, "events") || {})[t.type] && Y.get(a, "handle")) && f.apply(a, n),
                    (f = u && a[u]) && f.apply && W(a) && (t.result = f.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = g,
                r || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), n) || !W(o) || u && v.isFunction(o[g]) && !v.isWindow(o) && ((l = o[u]) && (o[u] = null),
                v.event.triggered = g,
                o[g](),
                v.event.triggered = void 0,
                l && (o[u] = l)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var i = v.extend(new v.Event, n, {
                type: e,
                isSimulated: !0
            });
            v.event.trigger(i, null, t)
        }
    }),
    v.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                v.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return v.event.trigger(e, t, n, !0)
        }
    }),
    v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        v.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    v.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    h.focusin = "onfocusin"in e,
    h.focusin || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            v.event.simulate(t, e.target, v.event.fix(e))
        };
        v.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , o = Y.access(i, t);
                o || i.addEventListener(e, n, !0),
                Y.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , o = Y.access(i, t) - 1;
                o ? Y.access(i, t, o) : (i.removeEventListener(e, n, !0),
                Y.remove(i, t))
            }
        }
    });
    var pt = e.location
      , ht = v.now()
      , gt = /\?/;
    v.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + t),
        n
    }
    ;
    var mt = /\[\]$/
      , vt = /\r?\n/g
      , yt = /^(?:submit|button|image|reset|file)$/i
      , bt = /^(?:input|select|textarea|keygen)/i;
    function wt(e, t, n, i) {
        var o;
        if (Array.isArray(t))
            v.each(t, function(t, o) {
                n || mt.test(e) ? i(e, o) : wt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            });
        else if (n || "object" !== v.type(t))
            i(e, t);
        else
            for (o in t)
                wt(e + "[" + o + "]", t[o], n, i)
    }
    v.param = function(e, t) {
        var n, i = [], o = function(e, t) {
            var n = v.isFunction(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !v.isPlainObject(e))
            v.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (n in e)
                wt(n, e[n], t, o);
        return i.join("&")
    }
    ,
    v.fn.extend({
        serialize: function() {
            return v.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = v.prop(this, "elements");
                return e ? v.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !v(this).is(":disabled") && bt.test(this.nodeName) && !yt.test(e) && (this.checked || !se.test(e))
            }).map(function(e, t) {
                var n = v(this).val();
                return null == n ? null : Array.isArray(n) ? v.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(vt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(vt, "\r\n")
                }
            }).get()
        }
    });
    var _t = /%20/g
      , xt = /#.*$/
      , Et = /([?&])_=[^&]*/
      , Ct = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Tt = /^(?:GET|HEAD)$/
      , At = /^\/\//
      , kt = {}
      , Ot = {}
      , St = "*/".concat("*")
      , Dt = i.createElement("a");
    function Nt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, o = 0, r = t.toLowerCase().match(P) || [];
            if (v.isFunction(n))
                for (; i = r[o++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function jt(e, t, n, i) {
        var o = {}
          , r = e === Ot;
        function s(a) {
            var l;
            return o[a] = !0,
            v.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                s(c),
                !1)
            }),
            l
        }
        return s(t.dataTypes[0]) || !o["*"] && s("*")
    }
    function It(e, t) {
        var n, i, o = v.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && v.extend(!0, e, i),
        e
    }
    Dt.href = pt.href,
    v.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: pt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": St,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": v.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? It(It(e, v.ajaxSettings), t) : It(v.ajaxSettings, e)
        },
        ajaxPrefilter: Nt(kt),
        ajaxTransport: Nt(Ot),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var o, r, s, a, l, c, u, d, f, p, h = v.ajaxSetup({}, n), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? v(g) : v.event, y = v.Deferred(), b = v.Callbacks("once memory"), w = h.statusCode || {}, _ = {}, x = {}, E = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (u) {
                        if (!a)
                            for (a = {}; t = Ct.exec(s); )
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return u ? s : null
                },
                setRequestHeader: function(e, t) {
                    return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e,
                    _[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == u && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (u)
                            C.always(e[C.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || E;
                    return o && o.abort(t),
                    T(0, t),
                    this
                }
            };
            if (y.promise(C),
            h.url = ((t || h.url || pt.href) + "").replace(At, pt.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""],
            null == h.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = h.url,
                    c.href = c.href,
                    h.crossDomain = Dt.protocol + "//" + Dt.host != c.protocol + "//" + c.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = v.param(h.data, h.traditional)),
            jt(kt, h, n, C),
            u)
                return C;
            for (f in (d = v.event && h.global) && 0 == v.active++ && v.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Tt.test(h.type),
            r = h.url.replace(xt, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(_t, "+")) : (p = h.url.slice(r.length),
            h.data && (r += (gt.test(r) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (r = r.replace(Et, "$1"),
            p = (gt.test(r) ? "&" : "?") + "_=" + ht++ + p),
            h.url = r + p),
            h.ifModified && (v.lastModified[r] && C.setRequestHeader("If-Modified-Since", v.lastModified[r]),
            v.etag[r] && C.setRequestHeader("If-None-Match", v.etag[r])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType),
            C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + St + "; q=0.01" : "") : h.accepts["*"]),
            h.headers)
                C.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || u))
                return C.abort();
            if (E = "abort",
            b.add(h.complete),
            C.done(h.success),
            C.fail(h.error),
            o = jt(Ot, h, n, C)) {
                if (C.readyState = 1,
                d && m.trigger("ajaxSend", [C, h]),
                u)
                    return C;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    u = !1,
                    o.send(_, T)
                } catch (e) {
                    if (u)
                        throw e;
                    T(-1, e)
                }
            } else
                T(-1, "No Transport");
            function T(t, n, i, a) {
                var c, f, p, _, x, E = n;
                u || (u = !0,
                l && e.clearTimeout(l),
                o = void 0,
                s = a || "",
                C.readyState = t > 0 ? 4 : 0,
                c = t >= 200 && t < 300 || 304 === t,
                i && (_ = function(e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0]in n)
                        r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    if (r)
                        return r !== l[0] && l.unshift(r),
                        n[r]
                }(h, C, i)),
                _ = function(e, t, n, i) {
                    var o, r, s, a, l, c = {}, u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters)
                            c[s.toLowerCase()] = e.converters[s];
                    for (r = u.shift(); r; )
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = r,
                        r = u.shift())
                            if ("*" === r)
                                r = l;
                            else if ("*" !== l && l !== r) {
                                if (!(s = c[l + " " + r] || c["* " + r]))
                                    for (o in c)
                                        if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0],
                                            u.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + l + " to " + r
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, _, C, c),
                c ? (h.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (v.lastModified[r] = x),
                (x = C.getResponseHeader("etag")) && (v.etag[r] = x)),
                204 === t || "HEAD" === h.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = _.state,
                f = _.data,
                c = !(p = _.error))) : (p = E,
                !t && E || (E = "error",
                t < 0 && (t = 0))),
                C.status = t,
                C.statusText = (n || E) + "",
                c ? y.resolveWith(g, [f, E, C]) : y.rejectWith(g, [C, E, p]),
                C.statusCode(w),
                w = void 0,
                d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? f : p]),
                b.fireWith(g, [C, E]),
                d && (m.trigger("ajaxComplete", [C, h]),
                --v.active || v.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return v.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return v.get(e, void 0, t, "script")
        }
    }),
    v.each(["get", "post"], function(e, t) {
        v[t] = function(e, n, i, o) {
            return v.isFunction(n) && (o = o || i,
            i = n,
            n = void 0),
            v.ajax(v.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, v.isPlainObject(e) && e))
        }
    }),
    v._evalUrl = function(e) {
        return v.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    v.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (v.isFunction(e) && (e = e.call(this[0])),
            t = v(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return v.isFunction(e) ? this.each(function(t) {
                v(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = v(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = v.isFunction(e);
            return this.each(function(n) {
                v(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                v(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    v.expr.pseudos.hidden = function(e) {
        return !v.expr.pseudos.visible(e)
    }
    ,
    v.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    v.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Lt = {
        0: 200,
        1223: 204
    }
      , $t = v.ajaxSettings.xhr();
    h.cors = !!$t && "withCredentials"in $t,
    h.ajax = $t = !!$t,
    v.ajaxTransport(function(t) {
        var n, i;
        if (h.cors || $t && !t.crossDomain)
            return {
                send: function(o, r) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (s in t.xhrFields)
                            a[s] = t.xhrFields[s];
                    for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                    o)
                        a.setRequestHeader(s, o[s]);
                    n = function(e) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                            "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Lt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = n(),
                    i = a.onerror = n("error"),
                    void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    v.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return v.globalEval(e),
                e
            }
        }
    }),
    v.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    v.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain)
            return {
                send: function(o, r) {
                    t = v("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && r("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    i.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var Pt = []
      , Mt = /(=)\?(?=&|$)|\?\?/;
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Pt.pop() || v.expando + "_" + ht++;
            return this[e] = !0,
            e
        }
    }),
    v.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, s, a = !1 !== t.jsonp && (Mt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Mt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return o = t.jsonpCallback = v.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(Mt, "$1" + o) : !1 !== t.jsonp && (t.url += (gt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            t.converters["script json"] = function() {
                return s || v.error(o + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            r = e[o],
            e[o] = function() {
                s = arguments
            }
            ,
            i.always(function() {
                void 0 === r ? v(e).removeProp(o) : e[o] = r,
                t[o] && (t.jsonpCallback = n.jsonpCallback,
                Pt.push(o)),
                s && v.isFunction(r) && r(s[0]),
                s = r = void 0
            }),
            "script"
    }),
    h.createHTMLDocument = function() {
        var e = i.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    v.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (h.createHTMLDocument ? ((o = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href,
        t.head.appendChild(o)) : t = i),
        s = !n && [],
        (r = O.exec(e)) ? [t.createElement(r[1])] : (r = pe([e], t, s),
        s && s.length && v(s).remove(),
        v.merge([], r.childNodes)));
        var o, r, s
    }
    ,
    v.fn.load = function(e, t, n) {
        var i, o, r, s = this, a = e.indexOf(" ");
        return a > -1 && (i = ct(e.slice(a)),
        e = e.slice(0, a)),
        v.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        s.length > 0 && v.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
            s.html(i ? v("<div>").append(v.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        v.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    v.expr.pseudos.animated = function(e) {
        return v.grep(v.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    v.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, c = v.css(e, "position"), u = v(e), d = {};
            "static" === c && (e.style.position = "relative"),
            a = u.offset(),
            r = v.css(e, "top"),
            l = v.css(e, "left"),
            ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top,
            o = i.left) : (s = parseFloat(r) || 0,
            o = parseFloat(l) || 0),
            v.isFunction(t) && (t = t.call(e, n, v.extend({}, a))),
            null != t.top && (d.top = t.top - a.top + s),
            null != t.left && (d.left = t.left - a.left + o),
            "using"in t ? t.using.call(e, d) : u.css(d)
        }
    },
    v.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    v.offset.setOffset(this, e, t)
                });
            var t, n, i, o, r = this[0];
            return r ? r.getClientRects().length ? (i = r.getBoundingClientRect(),
            n = (t = r.ownerDocument).documentElement,
            o = t.defaultView,
            {
                top: i.top + o.pageYOffset - n.clientTop,
                left: i.left + o.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === v.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                k(e[0], "html") || (i = e.offset()),
                i = {
                    top: i.top + v.css(e[0], "borderTopWidth", !0),
                    left: i.left + v.css(e[0], "borderLeftWidth", !0)
                }),
                {
                    top: t.top - i.top - v.css(n, "marginTop", !0),
                    left: t.left - i.left - v.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === v.css(e, "position"); )
                    e = e.offsetParent;
                return e || he
            })
        }
    }),
    v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        v.fn[e] = function(i) {
            return U(this, function(e, i, o) {
                var r;
                return v.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === o ? r ? r[t] : e[i] : void (r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
            }, e, i, arguments.length)
        }
    }),
    v.each(["top", "left"], function(e, t) {
        v.cssHooks[t] = Re(h.pixelPosition, function(e, n) {
            if (n)
                return n = Me(e, t),
                $e.test(n) ? v(e).position()[t] + "px" : n
        })
    }),
    v.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        v.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            v.fn[i] = function(o, r) {
                var s = arguments.length && (n || "boolean" != typeof o)
                  , a = n || (!0 === o || !0 === r ? "margin" : "border");
                return U(this, function(t, n, o) {
                    var r;
                    return v.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? v.css(t, n, a) : v.style(t, n, o, a)
                }, t, s ? o : void 0, s)
            }
        })
    }),
    v.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    v.holdReady = function(e) {
        e ? v.readyWait++ : v.ready(!0)
    }
    ,
    v.isArray = Array.isArray,
    v.parseJSON = JSON.parse,
    v.nodeName = k,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return v
    });
    var Rt = e.jQuery
      , qt = e.$;
    return v.noConflict = function(t) {
        return e.$ === v && (e.$ = qt),
        t && e.jQuery === v && (e.jQuery = Rt),
        v
    }
    ,
    t || (e.jQuery = e.$ = v),
    v
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = "animsition"
      , n = {
        init: function(i) {
            i = e.extend({
                inClass: "fade-in",
                outClass: "fade-out",
                inDuration: 1500,
                outDuration: 800,
                linkElement: ".animsition-link",
                loading: !0,
                loadingParentElement: "body",
                loadingClass: "animsition-loading",
                loadingInner: "",
                timeout: !1,
                timeoutCountdown: 5e3,
                onLoadEvent: !0,
                browser: ["animation-duration", "-webkit-animation-duration"],
                overlay: !1,
                overlayClass: "animsition-overlay-slide",
                overlayParentElement: "body",
                transition: function(e) {
                    window.location.href = e
                }
            }, i),
            n.settings = {
                timer: !1,
                data: {
                    inClass: "animsition-in-class",
                    inDuration: "animsition-in-duration",
                    outClass: "animsition-out-class",
                    outDuration: "animsition-out-duration",
                    overlay: "animsition-overlay"
                },
                events: {
                    inStart: "animsition.inStart",
                    inEnd: "animsition.inEnd",
                    outStart: "animsition.outStart",
                    outEnd: "animsition.outEnd"
                }
            };
            var o = n.supportCheck.call(this, i);
            return o || !(i.browser.length > 0) || o && this.length ? (n.optionCheck.call(this, i) && e("." + i.overlayClass).length <= 0 && n.addOverlay.call(this, i),
            i.loading && e("." + i.loadingClass).length <= 0 && n.addLoading.call(this, i),
            this.each(function() {
                var o = this
                  , r = e(this)
                  , s = e(window)
                  , a = e(document);
                r.data(t) || (i = e.extend({}, i),
                r.data(t, {
                    options: i
                }),
                i.timeout && n.addTimer.call(o),
                i.onLoadEvent && s.on("load." + t, function() {
                    n.settings.timer && clearTimeout(n.settings.timer),
                    n.in.call(o)
                }),
                s.on("pageshow." + t, function(e) {
                    e.originalEvent.persisted && n.in.call(o)
                }),
                s.on("unload." + t, function() {}),
                a.on("click." + t, i.linkElement, function(t) {
                    t.preventDefault();
                    var i = e(this)
                      , r = i.attr("href");
                    2 === t.which || t.metaKey || t.shiftKey || -1 !== navigator.platform.toUpperCase().indexOf("WIN") && t.ctrlKey ? window.open(r, "_blank") : n.out.call(o, i, r)
                }))
            })) : ("console"in window || (window.console = {},
            window.console.log = function(e) {
                return e
            }
            ),
            this.length || console.log("Animsition: Element does not exist on page."),
            o || console.log("Animsition: Does not support this browser."),
            n.destroy.call(this))
        },
        addOverlay: function(t) {
            e(t.overlayParentElement).prepend('<div class="' + t.overlayClass + '"></div>')
        },
        addLoading: function(t) {
            e(t.loadingParentElement).append('<div class="' + t.loadingClass + '">' + t.loadingInner + "</div>")
        },
        removeLoading: function() {
            var n = e(this).data(t).options;
            e(n.loadingParentElement).children("." + n.loadingClass).fadeOut().remove()
        },
        addTimer: function() {
            var i = this
              , o = e(this).data(t).options;
            n.settings.timer = setTimeout(function() {
                n.in.call(i),
                e(window).off("load." + t)
            }, o.timeoutCountdown)
        },
        supportCheck: function(t) {
            var n = e(this)
              , i = t.browser
              , o = i.length
              , r = !1;
            0 === o && (r = !0);
            for (var s = 0; o > s; s++)
                if ("string" == typeof n.css(i[s])) {
                    r = !0;
                    break
                }
            return r
        },
        optionCheck: function(t) {
            var i = e(this);
            return !(!t.overlay && !i.data(n.settings.data.overlay))
        },
        animationCheck: function(n, i, o) {
            var r = e(this).data(t).options
              , s = typeof n
              , a = !i && "number" === s
              , l = i && "string" === s && n.length > 0;
            return a || l ? n = n : i && o ? n = r.inClass : !i && o ? n = r.inDuration : i && !o ? n = r.outClass : i || o || (n = r.outDuration),
            n
        },
        in: function() {
            var i = this
              , o = e(this)
              , r = o.data(t).options
              , s = o.data(n.settings.data.inDuration)
              , a = o.data(n.settings.data.inClass)
              , l = n.animationCheck.call(i, s, !1, !0)
              , c = n.animationCheck.call(i, a, !0, !0)
              , u = n.optionCheck.call(i, r)
              , d = o.data(t).outClass;
            r.loading && n.removeLoading.call(i),
            d && o.removeClass(d),
            u ? n.inOverlay.call(i, c, l) : n.inDefault.call(i, c, l)
        },
        inDefault: function(t, i) {
            var o = e(this);
            o.css({
                "animation-duration": i + "ms"
            }).addClass(t).trigger(n.settings.events.inStart).animateCallback(function() {
                o.removeClass(t).css({
                    opacity: 1
                }).trigger(n.settings.events.inEnd)
            })
        },
        inOverlay: function(i, o) {
            var r = e(this)
              , s = r.data(t).options;
            r.css({
                opacity: 1
            }).trigger(n.settings.events.inStart),
            e(s.overlayParentElement).children("." + s.overlayClass).css({
                "animation-duration": o + "ms"
            }).addClass(i).animateCallback(function() {
                r.trigger(n.settings.events.inEnd)
            })
        },
        out: function(i, o) {
            var r = this
              , s = e(this)
              , a = s.data(t).options
              , l = i.data(n.settings.data.outClass)
              , c = s.data(n.settings.data.outClass)
              , u = i.data(n.settings.data.outDuration)
              , d = s.data(n.settings.data.outDuration)
              , f = l || c
              , p = u || d
              , h = n.animationCheck.call(r, f, !0, !1)
              , g = n.animationCheck.call(r, p, !1, !1)
              , m = n.optionCheck.call(r, a);
            s.data(t).outClass = h,
            m ? n.outOverlay.call(r, h, g, o) : n.outDefault.call(r, h, g, o)
        },
        outDefault: function(i, o, r) {
            var s = e(this)
              , a = s.data(t).options;
            s.css({
                "animation-duration": o + 1 + "ms"
            }).addClass(i).trigger(n.settings.events.outStart).animateCallback(function() {
                s.trigger(n.settings.events.outEnd),
                a.transition(r)
            })
        },
        outOverlay: function(i, o, r) {
            var s = e(this)
              , a = s.data(t).options
              , l = s.data(n.settings.data.inClass)
              , c = n.animationCheck.call(this, l, !0, !0);
            e(a.overlayParentElement).children("." + a.overlayClass).css({
                "animation-duration": o + 1 + "ms"
            }).removeClass(c).addClass(i).trigger(n.settings.events.outStart).animateCallback(function() {
                s.trigger(n.settings.events.outEnd),
                a.transition(r)
            })
        },
        destroy: function() {
            return this.each(function() {
                var n = e(this);
                e(window).off("." + t),
                n.css({
                    opacity: 1
                }).removeData(t)
            })
        }
    };
    e.fn.animateCallback = function(t) {
        var n = "animationend webkitAnimationEnd";
        return this.each(function() {
            var i = e(this);
            i.on(n, function() {
                return i.off(n),
                t.call(this)
            })
        })
    }
    ,
    e.fn.animsition = function(i) {
        return n[i] ? n[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery." + t) : n.init.apply(this, arguments)
    }
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";
    for (var e = ["native code", "[object MutationObserverConstructor]"], t = "undefined" != typeof window, n = ["Edge", "Trident", "Firefox"], i = 0, o = 0; o < n.length; o += 1)
        if (t && navigator.userAgent.indexOf(n[o]) >= 0) {
            i = 1;
            break
        }
    var r, s = t && (r = window.MutationObserver,
    e.some(function(e) {
        return (r || "").toString().indexOf(e) > -1
    })) ? function(e) {
        var t = !1
          , n = 0
          , i = document.createElement("span");
        return new MutationObserver(function() {
            e(),
            t = !1
        }
        ).observe(i, {
            attributes: !0
        }),
        function() {
            t || (t = !0,
            i.setAttribute("x-index", n),
            n += 1)
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, i))
        }
    }
    ;
    function a(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function l(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = window.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function c(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function u(e) {
        if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName))
            return window.document.body;
        var t = l(e)
          , n = t.overflow
          , i = t.overflowX
          , o = t.overflowY;
        return /(auto|scroll)/.test(n + o + i) ? e : u(c(e))
    }
    function d(e) {
        var t = e && e.offsetParent
          , n = t && t.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === l(t, "position") ? d(t) : t : window.document.documentElement
    }
    function f(e) {
        return null !== e.parentNode ? f(e.parentNode) : e
    }
    function p(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return window.document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? e : t
          , o = n ? t : e
          , r = document.createRange();
        r.setStart(i, 0),
        r.setEnd(o, 0);
        var s, a, l = r.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(o))
            return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && d(s.firstElementChild) !== s ? d(l) : l;
        var c = f(e);
        return c.host ? p(c.host, t) : p(e, f(t).host)
    }
    function h(e) {
        var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
          , n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = window.document.documentElement;
            return (window.document.scrollingElement || i)[t]
        }
        return e[t]
    }
    function g(e, t) {
        var n = "x" === t ? "Left" : "Top"
          , i = "Left" === n ? "Right" : "Bottom";
        return +e["border" + n + "Width"].split("px")[0] + +e["border" + i + "Width"].split("px")[0]
    }
    var m = void 0
      , v = function() {
        return void 0 === m && (m = -1 !== navigator.appVersion.indexOf("MSIE 10")),
        m
    };
    function y(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], v() ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }
    function b() {
        var e = window.document.body
          , t = window.document.documentElement
          , n = v() && window.getComputedStyle(t);
        return {
            height: y("Height", e, t, n),
            width: y("Width", e, t, n)
        }
    }
    var w = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , _ = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , x = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
      , E = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ;
    function C(e) {
        return E({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function T(e) {
        var t = {};
        if (v())
            try {
                t = e.getBoundingClientRect();
                var n = h(e, "top")
                  , i = h(e, "left");
                t.top += n,
                t.left += i,
                t.bottom += n,
                t.right += i
            } catch (e) {}
        else
            t = e.getBoundingClientRect();
        var o = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        }
          , r = "HTML" === e.nodeName ? b() : {}
          , s = r.width || e.clientWidth || o.right - o.left
          , a = r.height || e.clientHeight || o.bottom - o.top
          , c = e.offsetWidth - s
          , u = e.offsetHeight - a;
        if (c || u) {
            var d = l(e);
            c -= g(d, "x"),
            u -= g(d, "y"),
            o.width -= c,
            o.height -= u
        }
        return C(o)
    }
    function A(e, t) {
        var n = v()
          , i = "HTML" === t.nodeName
          , o = T(e)
          , r = T(t)
          , s = u(e)
          , a = l(t)
          , c = +a.borderTopWidth.split("px")[0]
          , d = +a.borderLeftWidth.split("px")[0]
          , f = C({
            top: o.top - r.top - c,
            left: o.left - r.left - d,
            width: o.width,
            height: o.height
        });
        if (f.marginTop = 0,
        f.marginLeft = 0,
        !n && i) {
            var p = +a.marginTop.split("px")[0]
              , g = +a.marginLeft.split("px")[0];
            f.top -= c - p,
            f.bottom -= c - p,
            f.left -= d - g,
            f.right -= d - g,
            f.marginTop = p,
            f.marginLeft = g
        }
        return (n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (f = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , i = h(t, "top")
              , o = h(t, "left")
              , r = n ? -1 : 1;
            return e.top += i * r,
            e.bottom += i * r,
            e.left += o * r,
            e.right += o * r,
            e
        }(f, t)),
        f
    }
    function k(e, t, n, i) {
        var o = {
            top: 0,
            left: 0
        }
          , r = p(e, t);
        if ("viewport" === i)
            o = function(e) {
                var t = window.document.documentElement
                  , n = A(e, t)
                  , i = Math.max(t.clientWidth, window.innerWidth || 0)
                  , o = Math.max(t.clientHeight, window.innerHeight || 0)
                  , r = h(t)
                  , s = h(t, "left");
                return C({
                    top: r - n.top + n.marginTop,
                    left: s - n.left + n.marginLeft,
                    width: i,
                    height: o
                })
            }(r);
        else {
            var s = void 0;
            "scrollParent" === i ? "BODY" === (s = u(c(e))).nodeName && (s = window.document.documentElement) : s = "window" === i ? window.document.documentElement : i;
            var a = A(s, r);
            if ("HTML" !== s.nodeName || function e(t) {
                var n = t.nodeName;
                return "BODY" !== n && "HTML" !== n && ("fixed" === l(t, "position") || e(c(t)))
            }(r))
                o = a;
            else {
                var d = b()
                  , f = d.height
                  , g = d.width;
                o.top += a.top - a.marginTop,
                o.bottom = f + a.top,
                o.left += a.left - a.marginLeft,
                o.right = g + a.left
            }
        }
        return o.left += n,
        o.top += n,
        o.right -= n,
        o.bottom -= n,
        o
    }
    function O(e, t, n, i, o) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var s = k(n, i, r, o)
          , a = {
            top: {
                width: s.width,
                height: t.top - s.top
            },
            right: {
                width: s.right - t.right,
                height: s.height
            },
            bottom: {
                width: s.width,
                height: s.bottom - t.bottom
            },
            left: {
                width: t.left - s.left,
                height: s.height
            }
        }
          , l = Object.keys(a).map(function(e) {
            return E({
                key: e
            }, a[e], {
                area: (t = a[e],
                t.width * t.height)
            });
            var t
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , c = l.filter(function(e) {
            var t = e.width
              , i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight
        })
          , u = c.length > 0 ? c[0].key : l[0].key
          , d = e.split("-")[1];
        return u + (d ? "-" + d : "")
    }
    function S(e, t, n) {
        return A(n, p(t, n))
    }
    function D(e) {
        var t = window.getComputedStyle(e)
          , n = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
          , i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }
    function N(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function j(e, t, n) {
        n = n.split("-")[0];
        var i = D(e)
          , o = {
            width: i.width,
            height: i.height
        }
          , r = -1 !== ["right", "left"].indexOf(n)
          , s = r ? "top" : "left"
          , a = r ? "left" : "top"
          , l = r ? "height" : "width"
          , c = r ? "width" : "height";
        return o[s] = t[s] + t[l] / 2 - i[l] / 2,
        o[a] = n === a ? t[a] - i[c] : t[N(a)],
        o
    }
    function I(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function L(e, t, n) {
        return (void 0 === n ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function(e) {
                    return e[t] === n
                });
            var i = I(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", n))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && a(n) && (t.offsets.popper = C(t.offsets.popper),
            t.offsets.reference = C(t.offsets.reference),
            t = n(t, e))
        }),
        t
    }
    function $(e, t) {
        return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }
    function P(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length - 1; i++) {
            var o = t[i]
              , r = o ? "" + o + n : e;
            if (void 0 !== window.document.body.style[r])
                return r
        }
        return null
    }
    function M(e, t, n, i) {
        n.updateBound = i,
        window.addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = u(e);
        return function e(t, n, i, o) {
            var r = "BODY" === t.nodeName
              , s = r ? window : t;
            s.addEventListener(n, i, {
                passive: !0
            }),
            r || e(u(s.parentNode), n, i, o),
            o.push(s)
        }(o, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = o,
        n.eventsEnabled = !0,
        n
    }
    function R() {
        var e;
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate),
        this.state = (this.reference,
        e = this.state,
        window.removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function(t) {
            t.removeEventListener("scroll", e.updateBound)
        }),
        e.updateBound = null,
        e.scrollParents = [],
        e.scrollElement = null,
        e.eventsEnabled = !1,
        e))
    }
    function q(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function H(e, t) {
        Object.keys(t).forEach(function(n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && q(t[n]) && (i = "px"),
            e.style[n] = t[n] + i
        })
    }
    function F(e, t, n) {
        var i = I(e, function(e) {
            return e.name === t
        })
          , o = !!i && e.some(function(e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!o) {
            var r = "`" + t + "`"
              , s = "`" + n + "`";
            console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }
    var B = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , U = B.slice(3);
    function W(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , n = U.indexOf(e)
          , i = U.slice(n + 1).concat(U.slice(0, n));
        return t ? i.reverse() : i
    }
    var z = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    };
    function Y(e, t, n, i) {
        var o = [0, 0]
          , r = -1 !== ["right", "left"].indexOf(i)
          , s = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , a = s.indexOf(I(s, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/
          , c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
        return (c = c.map(function(e, i) {
            var o = (1 === i ? !r : r) ? "height" : "width"
              , s = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                s = !0,
                e) : s ? (e[e.length - 1] += t,
                s = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                      , r = +o[1]
                      , s = o[2];
                    if (!r)
                        return e;
                    if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                        case "%p":
                            a = n;
                            break;
                        case "%":
                        case "%r":
                        default:
                            a = i
                        }
                        return C(a)[t] / 100 * r
                    }
                    if ("vh" === s || "vw" === s)
                        return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
                    return r
                }(e, o, t, n)
            })
        })).forEach(function(e, t) {
            e.forEach(function(n, i) {
                q(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1))
            })
        }),
        o
    }
    var K = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = t.split("-")[1];
                    if (i) {
                        var o = e.offsets
                          , r = o.reference
                          , s = o.popper
                          , a = -1 !== ["bottom", "top"].indexOf(n)
                          , l = a ? "left" : "top"
                          , c = a ? "width" : "height"
                          , u = {
                            start: x({}, l, r[l]),
                            end: x({}, l, r[l] + r[c] - s[c])
                        };
                        e.offsets.popper = E({}, s, u[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.offset
                      , i = e.placement
                      , o = e.offsets
                      , r = o.popper
                      , s = o.reference
                      , a = i.split("-")[0]
                      , l = void 0;
                    return l = q(+n) ? [+n, 0] : Y(n, r, s, a),
                    "left" === a ? (r.top += l[0],
                    r.left -= l[1]) : "right" === a ? (r.top += l[0],
                    r.left += l[1]) : "top" === a ? (r.left += l[0],
                    r.top -= l[1]) : "bottom" === a && (r.left += l[0],
                    r.top += l[1]),
                    e.popper = r,
                    e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.boundariesElement || d(e.instance.popper);
                    e.instance.reference === n && (n = d(n));
                    var i = k(e.instance.popper, e.instance.reference, t.padding, n);
                    t.boundaries = i;
                    var o = t.priority
                      , r = e.offsets.popper
                      , s = {
                        primary: function(e) {
                            var n = r[e];
                            return r[e] < i[e] && !t.escapeWithReference && (n = Math.max(r[e], i[e])),
                            x({}, e, n)
                        },
                        secondary: function(e) {
                            var n = "right" === e ? "left" : "top"
                              , o = r[n];
                            return r[e] > i[e] && !t.escapeWithReference && (o = Math.min(r[n], i[e] - ("right" === e ? r.width : r.height))),
                            x({}, n, o)
                        }
                    };
                    return o.forEach(function(e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        r = E({}, r, s[t](e))
                    }),
                    e.offsets.popper = r,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , n = t.popper
                      , i = t.reference
                      , o = e.placement.split("-")[0]
                      , r = Math.floor
                      , s = -1 !== ["top", "bottom"].indexOf(o)
                      , a = s ? "right" : "bottom"
                      , l = s ? "left" : "top"
                      , c = s ? "width" : "height";
                    return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]),
                    n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    if (!F(e.instance.modifiers, "arrow", "keepTogether"))
                        return e;
                    var n = t.element;
                    if ("string" == typeof n) {
                        if (!(n = e.instance.popper.querySelector(n)))
                            return e
                    } else if (!e.instance.popper.contains(n))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        e;
                    var i = e.placement.split("-")[0]
                      , o = e.offsets
                      , r = o.popper
                      , s = o.reference
                      , a = -1 !== ["left", "right"].indexOf(i)
                      , c = a ? "height" : "width"
                      , u = a ? "Top" : "Left"
                      , d = u.toLowerCase()
                      , f = a ? "left" : "top"
                      , p = a ? "bottom" : "right"
                      , h = D(n)[c];
                    s[p] - h < r[d] && (e.offsets.popper[d] -= r[d] - (s[p] - h)),
                    s[d] + h > r[p] && (e.offsets.popper[d] += s[d] + h - r[p]);
                    var g = s[d] + s[c] / 2 - h / 2
                      , m = l(e.instance.popper, "margin" + u).replace("px", "")
                      , v = g - C(e.offsets.popper)[d] - m;
                    return v = Math.max(Math.min(r[c] - h, v), 0),
                    e.arrowElement = n,
                    e.offsets.arrow = {},
                    e.offsets.arrow[d] = Math.round(v),
                    e.offsets.arrow[f] = "",
                    e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if ($(e.instance.modifiers, "inner"))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var n = k(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement)
                      , i = e.placement.split("-")[0]
                      , o = N(i)
                      , r = e.placement.split("-")[1] || ""
                      , s = [];
                    switch (t.behavior) {
                    case z.FLIP:
                        s = [i, o];
                        break;
                    case z.CLOCKWISE:
                        s = W(i);
                        break;
                    case z.COUNTERCLOCKWISE:
                        s = W(i, !0);
                        break;
                    default:
                        s = t.behavior
                    }
                    return s.forEach(function(a, l) {
                        if (i !== a || s.length === l + 1)
                            return e;
                        i = e.placement.split("-")[0],
                        o = N(i);
                        var c = e.offsets.popper
                          , u = e.offsets.reference
                          , d = Math.floor
                          , f = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom)
                          , p = d(c.left) < d(n.left)
                          , h = d(c.right) > d(n.right)
                          , g = d(c.top) < d(n.top)
                          , m = d(c.bottom) > d(n.bottom)
                          , v = "left" === i && p || "right" === i && h || "top" === i && g || "bottom" === i && m
                          , y = -1 !== ["top", "bottom"].indexOf(i)
                          , b = !!t.flipVariations && (y && "start" === r && p || y && "end" === r && h || !y && "start" === r && g || !y && "end" === r && m);
                        (f || v || b) && (e.flipped = !0,
                        (f || v) && (i = s[l + 1]),
                        b && (r = function(e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(r)),
                        e.placement = i + (r ? "-" + r : ""),
                        e.offsets.popper = E({}, e.offsets.popper, j(e.instance.popper, e.offsets.reference, e.placement)),
                        e = L(e.instance.modifiers, e, "flip"))
                    }),
                    e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = e.offsets
                      , o = i.popper
                      , r = i.reference
                      , s = -1 !== ["left", "right"].indexOf(n)
                      , a = -1 === ["top", "left"].indexOf(n);
                    return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0),
                    e.placement = N(t),
                    e.offsets.popper = C(o),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!F(e.instance.modifiers, "hide", "preventOverflow"))
                        return e;
                    var t = e.offsets.reference
                      , n = I(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x
                      , i = t.y
                      , o = e.offsets.popper
                      , r = I(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s = void 0 !== r ? r : t.gpuAcceleration
                      , a = T(d(e.instance.popper))
                      , l = {
                        position: o.position
                    }
                      , c = {
                        left: Math.floor(o.left),
                        top: Math.floor(o.top),
                        bottom: Math.floor(o.bottom),
                        right: Math.floor(o.right)
                    }
                      , u = "bottom" === n ? "top" : "bottom"
                      , f = "right" === i ? "left" : "right"
                      , p = P("transform")
                      , h = void 0
                      , g = void 0;
                    if (g = "bottom" === u ? -a.height + c.bottom : c.top,
                    h = "right" === f ? -a.width + c.right : c.left,
                    s && p)
                        l[p] = "translate3d(" + h + "px, " + g + "px, 0)",
                        l[u] = 0,
                        l[f] = 0,
                        l.willChange = "transform";
                    else {
                        var m = "bottom" === u ? -1 : 1
                          , v = "right" === f ? -1 : 1;
                        l[u] = g * m,
                        l[f] = h * v,
                        l.willChange = u + ", " + f
                    }
                    var y = {
                        "x-placement": e.placement
                    };
                    return e.attributes = E({}, y, e.attributes),
                    e.styles = E({}, l, e.styles),
                    e.arrowStyles = E({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    var t, n;
                    return H(e.instance.popper, e.styles),
                    t = e.instance.popper,
                    n = e.attributes,
                    Object.keys(n).forEach(function(e) {
                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                    }),
                    e.arrowElement && Object.keys(e.arrowStyles).length && H(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, n, i, o) {
                    var r = S(0, t, e)
                      , s = O(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s),
                    H(t, {
                        position: "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    }
      , V = function() {
        function e(t, n) {
            var i = this
              , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            w(this, e),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(i.update)
            }
            ,
            this.update = s(this.update.bind(this)),
            this.options = E({}, e.Defaults, o),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = t.jquery ? t[0] : t,
            this.popper = n.jquery ? n[0] : n,
            this.options.modifiers = {},
            Object.keys(E({}, e.Defaults.modifiers, o.modifiers)).forEach(function(t) {
                i.options.modifiers[t] = E({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return E({
                    name: e
                }, i.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(e) {
                e.enabled && a(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
            }),
            this.update();
            var r = this.options.eventsEnabled;
            r && this.enableEventListeners(),
            this.state.eventsEnabled = r
        }
        return _(e, [{
            key: "update",
            value: function() {
                return function() {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = S(this.state, this.popper, this.reference),
                        e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                        e.originalPlacement = e.placement,
                        e.offsets.popper = j(this.popper, e.offsets.reference, e.placement),
                        e.offsets.popper.position = "absolute",
                        e = L(this.modifiers, e),
                        this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                        this.options.onCreate(e))
                    }
                }
                .call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0,
                    $(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                    this.popper.style.left = "",
                    this.popper.style.position = "",
                    this.popper.style.top = "",
                    this.popper.style[P("transform")] = ""),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                    this
                }
                .call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = M(this.reference, this.options, this.state, this.scheduleUpdate))
                }
                .call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return R.call(this)
            }
        }]),
        e
    }();
    return V.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    V.placements = B,
    V.Defaults = K,
    V
}),
"undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
!function(e) {
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] >= 4)
        throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(),
function() {
    function e(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , n = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , i = function(e) {
        function t(e) {
            return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }
        function n(e) {
            return (e[0] || e).nodeType
        }
        var i = !1
          , o = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }
          , r = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(e) {
                do {
                    e += ~~(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            },
            getSelectorFromElement: function(t) {
                var n = t.getAttribute("data-target");
                n && "#" !== n || (n = t.getAttribute("href") || "");
                try {
                    return e(n).length > 0 ? n : null
                } catch (e) {
                    return null
                }
            },
            reflow: function(e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function(t) {
                e(t).trigger(i.end)
            },
            supportsTransitionEnd: function() {
                return Boolean(i)
            },
            typeCheckConfig: function(e, i, o) {
                for (var r in o)
                    if (o.hasOwnProperty(r)) {
                        var s = o[r]
                          , a = i[r]
                          , l = a && n(a) ? "element" : t(a);
                        if (!new RegExp(s).test(l))
                            throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + s + '".')
                    }
            }
        };
        return i = function() {
            if (window.QUnit)
                return !1;
            var e = document.createElement("bootstrap");
            for (var t in o)
                if (void 0 !== e.style[t])
                    return {
                        end: o[t]
                    };
            return !1
        }(),
        e.fn.emulateTransitionEnd = function(t) {
            var n = this
              , i = !1;
            return e(this).one(r.TRANSITION_END, function() {
                i = !0
            }),
            setTimeout(function() {
                i || r.triggerTransitionEnd(n)
            }, t),
            this
        }
        ,
        r.supportsTransitionEnd() && (e.event.special[r.TRANSITION_END] = {
            bindType: i.end,
            delegateType: i.end,
            handle: function(t) {
                if (e(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        }),
        r
    }(jQuery)
      , o = (function(t) {
        var o = "alert"
          , r = t.fn[o]
          , s = "close.bs.alert"
          , a = "closed.bs.alert"
          , l = "click.bs.alert.data-api"
          , c = "alert"
          , u = "fade"
          , d = "show"
          , f = function() {
            function o(t) {
                e(this, o),
                this._element = t
            }
            return o.prototype.close = function(e) {
                e = e || this._element;
                var t = this._getRootElement(e);
                this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }
            ,
            o.prototype.dispose = function() {
                t.removeData(this._element, "bs.alert"),
                this._element = null
            }
            ,
            o.prototype._getRootElement = function(e) {
                var n = i.getSelectorFromElement(e)
                  , o = !1;
                return n && (o = t(n)[0]),
                o || (o = t(e).closest("." + c)[0]),
                o
            }
            ,
            o.prototype._triggerCloseEvent = function(e) {
                var n = t.Event(s);
                return t(e).trigger(n),
                n
            }
            ,
            o.prototype._removeElement = function(e) {
                var n = this;
                t(e).removeClass(d),
                i.supportsTransitionEnd() && t(e).hasClass(u) ? t(e).one(i.TRANSITION_END, function(t) {
                    return n._destroyElement(e, t)
                }).emulateTransitionEnd(150) : this._destroyElement(e)
            }
            ,
            o.prototype._destroyElement = function(e) {
                t(e).detach().trigger(a).remove()
            }
            ,
            o._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this)
                      , i = n.data("bs.alert");
                    i || (i = new o(this),
                    n.data("bs.alert", i)),
                    "close" === e && i[e](this)
                })
            }
            ,
            o._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(),
                    e.close(this)
                }
            }
            ,
            n(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta"
                }
            }]),
            o
        }();
        t(document).on(l, '[data-dismiss="alert"]', f._handleDismiss(new f)),
        t.fn[o] = f._jQueryInterface,
        t.fn[o].Constructor = f,
        t.fn[o].noConflict = function() {
            return t.fn[o] = r,
            f._jQueryInterface
        }
    }(jQuery),
    function(t) {
        var i = "button"
          , o = t.fn[i]
          , r = "active"
          , s = "btn"
          , a = "focus"
          , l = '[data-toggle^="button"]'
          , c = '[data-toggle="buttons"]'
          , u = "input"
          , d = ".active"
          , f = ".btn"
          , p = "click.bs.button.data-api"
          , h = "focus.bs.button.data-api blur.bs.button.data-api"
          , g = function() {
            function i(t) {
                e(this, i),
                this._element = t
            }
            return i.prototype.toggle = function() {
                var e = !0
                  , n = !0
                  , i = t(this._element).closest(c)[0];
                if (i) {
                    var o = t(this._element).find(u)[0];
                    if (o) {
                        if ("radio" === o.type)
                            if (o.checked && t(this._element).hasClass(r))
                                e = !1;
                            else {
                                var s = t(i).find(d)[0];
                                s && t(s).removeClass(r)
                            }
                        if (e) {
                            if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled"))
                                return;
                            o.checked = !t(this._element).hasClass(r),
                            t(o).trigger("change")
                        }
                        o.focus(),
                        n = !1
                    }
                }
                n && this._element.setAttribute("aria-pressed", !t(this._element).hasClass(r)),
                e && t(this._element).toggleClass(r)
            }
            ,
            i.prototype.dispose = function() {
                t.removeData(this._element, "bs.button"),
                this._element = null
            }
            ,
            i._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this).data("bs.button");
                    n || (n = new i(this),
                    t(this).data("bs.button", n)),
                    "toggle" === e && n[e]()
                })
            }
            ,
            n(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta"
                }
            }]),
            i
        }();
        t(document).on(p, l, function(e) {
            e.preventDefault();
            var n = e.target;
            t(n).hasClass(s) || (n = t(n).closest(f)),
            g._jQueryInterface.call(t(n), "toggle")
        }).on(h, l, function(e) {
            var n = t(e.target).closest(f)[0];
            t(n).toggleClass(a, /^focus(in)?$/.test(e.type))
        }),
        t.fn[i] = g._jQueryInterface,
        t.fn[i].Constructor = g,
        t.fn[i].noConflict = function() {
            return t.fn[i] = o,
            g._jQueryInterface
        }
    }(jQuery),
    function(o) {
        var r = "carousel"
          , s = "bs.carousel"
          , a = "." + s
          , l = o.fn[r]
          , c = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }
          , u = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }
          , d = "next"
          , f = "prev"
          , p = "left"
          , h = "right"
          , g = {
            SLIDE: "slide" + a,
            SLID: "slid" + a,
            KEYDOWN: "keydown" + a,
            MOUSEENTER: "mouseenter" + a,
            MOUSELEAVE: "mouseleave" + a,
            TOUCHEND: "touchend" + a,
            LOAD_DATA_API: "load.bs.carousel.data-api",
            CLICK_DATA_API: "click.bs.carousel.data-api"
        }
          , m = "carousel"
          , v = "active"
          , y = "slide"
          , b = "carousel-item-right"
          , w = "carousel-item-left"
          , _ = "carousel-item-next"
          , x = "carousel-item-prev"
          , E = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }
          , C = function() {
            function l(t, n) {
                e(this, l),
                this._items = null,
                this._interval = null,
                this._activeElement = null,
                this._isPaused = !1,
                this._isSliding = !1,
                this.touchTimeout = null,
                this._config = this._getConfig(n),
                this._element = o(t)[0],
                this._indicatorsElement = o(this._element).find(E.INDICATORS)[0],
                this._addEventListeners()
            }
            return l.prototype.next = function() {
                this._isSliding || this._slide(d)
            }
            ,
            l.prototype.nextWhenVisible = function() {
                document.hidden || this.next()
            }
            ,
            l.prototype.prev = function() {
                this._isSliding || this._slide(f)
            }
            ,
            l.prototype.pause = function(e) {
                e || (this._isPaused = !0),
                o(this._element).find(E.NEXT_PREV)[0] && i.supportsTransitionEnd() && (i.triggerTransitionEnd(this._element),
                this.cycle(!0)),
                clearInterval(this._interval),
                this._interval = null
            }
            ,
            l.prototype.cycle = function(e) {
                e || (this._isPaused = !1),
                this._interval && (clearInterval(this._interval),
                this._interval = null),
                this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }
            ,
            l.prototype.to = function(e) {
                var t = this;
                this._activeElement = o(this._element).find(E.ACTIVE_ITEM)[0];
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding)
                        o(this._element).one(g.SLID, function() {
                            return t.to(e)
                        });
                    else {
                        if (n === e)
                            return this.pause(),
                            void this.cycle();
                        var i = e > n ? d : f;
                        this._slide(i, this._items[e])
                    }
            }
            ,
            l.prototype.dispose = function() {
                o(this._element).off(a),
                o.removeData(this._element, s),
                this._items = null,
                this._config = null,
                this._element = null,
                this._interval = null,
                this._isPaused = null,
                this._isSliding = null,
                this._activeElement = null,
                this._indicatorsElement = null
            }
            ,
            l.prototype._getConfig = function(e) {
                return e = o.extend({}, c, e),
                i.typeCheckConfig(r, e, u),
                e
            }
            ,
            l.prototype._addEventListeners = function() {
                var e = this;
                this._config.keyboard && o(this._element).on(g.KEYDOWN, function(t) {
                    return e._keydown(t)
                }),
                "hover" === this._config.pause && (o(this._element).on(g.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(g.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }),
                "ontouchstart"in document.documentElement && o(this._element).on(g.TOUCHEND, function() {
                    e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval)
                }))
            }
            ,
            l.prototype._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName))
                    switch (e.which) {
                    case 37:
                        e.preventDefault(),
                        this.prev();
                        break;
                    case 39:
                        e.preventDefault(),
                        this.next();
                        break;
                    default:
                        return
                    }
            }
            ,
            l.prototype._getItemIndex = function(e) {
                return this._items = o.makeArray(o(e).parent().find(E.ITEM)),
                this._items.indexOf(e)
            }
            ,
            l.prototype._getItemByDirection = function(e, t) {
                var n = e === d
                  , i = e === f
                  , o = this._getItemIndex(t)
                  , r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap)
                    return t;
                var s = (o + (e === f ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }
            ,
            l.prototype._triggerSlideEvent = function(e, t) {
                var n = this._getItemIndex(e)
                  , i = this._getItemIndex(o(this._element).find(E.ACTIVE_ITEM)[0])
                  , r = o.Event(g.SLIDE, {
                    relatedTarget: e,
                    direction: t,
                    from: i,
                    to: n
                });
                return o(this._element).trigger(r),
                r
            }
            ,
            l.prototype._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    o(this._indicatorsElement).find(E.ACTIVE).removeClass(v);
                    var t = this._indicatorsElement.children[this._getItemIndex(e)];
                    t && o(t).addClass(v)
                }
            }
            ,
            l.prototype._slide = function(e, t) {
                var n = this
                  , r = o(this._element).find(E.ACTIVE_ITEM)[0]
                  , s = this._getItemIndex(r)
                  , a = t || r && this._getItemByDirection(e, r)
                  , l = this._getItemIndex(a)
                  , c = Boolean(this._interval)
                  , u = void 0
                  , f = void 0
                  , m = void 0;
                if (e === d ? (u = w,
                f = _,
                m = p) : (u = b,
                f = x,
                m = h),
                a && o(a).hasClass(v))
                    this._isSliding = !1;
                else if (!this._triggerSlideEvent(a, m).isDefaultPrevented() && r && a) {
                    this._isSliding = !0,
                    c && this.pause(),
                    this._setActiveIndicatorElement(a);
                    var C = o.Event(g.SLID, {
                        relatedTarget: a,
                        direction: m,
                        from: s,
                        to: l
                    });
                    i.supportsTransitionEnd() && o(this._element).hasClass(y) ? (o(a).addClass(f),
                    i.reflow(a),
                    o(r).addClass(u),
                    o(a).addClass(u),
                    o(r).one(i.TRANSITION_END, function() {
                        o(a).removeClass(u + " " + f).addClass(v),
                        o(r).removeClass(v + " " + f + " " + u),
                        n._isSliding = !1,
                        setTimeout(function() {
                            return o(n._element).trigger(C)
                        }, 0)
                    }).emulateTransitionEnd(600)) : (o(r).removeClass(v),
                    o(a).addClass(v),
                    this._isSliding = !1,
                    o(this._element).trigger(C)),
                    c && this.cycle()
                }
            }
            ,
            l._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = o(this).data(s)
                      , i = o.extend({}, c, o(this).data());
                    "object" === (void 0 === e ? "undefined" : t(e)) && o.extend(i, e);
                    var r = "string" == typeof e ? e : i.slide;
                    if (n || (n = new l(this,i),
                    o(this).data(s, n)),
                    "number" == typeof e)
                        n.to(e);
                    else if ("string" == typeof r) {
                        if (void 0 === n[r])
                            throw new Error('No method named "' + r + '"');
                        n[r]()
                    } else
                        i.interval && (n.pause(),
                        n.cycle())
                })
            }
            ,
            l._dataApiClickHandler = function(e) {
                var t = i.getSelectorFromElement(this);
                if (t) {
                    var n = o(t)[0];
                    if (n && o(n).hasClass(m)) {
                        var r = o.extend({}, o(n).data(), o(this).data())
                          , a = this.getAttribute("data-slide-to");
                        a && (r.interval = !1),
                        l._jQueryInterface.call(o(n), r),
                        a && o(n).data(s).to(a),
                        e.preventDefault()
                    }
                }
            }
            ,
            n(l, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta"
                }
            }, {
                key: "Default",
                get: function() {
                    return c
                }
            }]),
            l
        }();
        o(document).on(g.CLICK_DATA_API, E.DATA_SLIDE, C._dataApiClickHandler),
        o(window).on(g.LOAD_DATA_API, function() {
            o(E.DATA_RIDE).each(function() {
                var e = o(this);
                C._jQueryInterface.call(e, e.data())
            })
        }),
        o.fn[r] = C._jQueryInterface,
        o.fn[r].Constructor = C,
        o.fn[r].noConflict = function() {
            return o.fn[r] = l,
            C._jQueryInterface
        }
    }(jQuery),
    function(o) {
        var r = "collapse"
          , s = "bs.collapse"
          , a = o.fn[r]
          , l = {
            toggle: !0,
            parent: ""
        }
          , c = {
            toggle: "boolean",
            parent: "string"
        }
          , u = "show.bs.collapse"
          , d = "shown.bs.collapse"
          , f = "hide.bs.collapse"
          , p = "hidden.bs.collapse"
          , h = "click.bs.collapse.data-api"
          , g = "show"
          , m = "collapse"
          , v = "collapsing"
          , y = "collapsed"
          , b = "width"
          , w = "height"
          , _ = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }
          , x = function() {
            function a(t, n) {
                e(this, a),
                this._isTransitioning = !1,
                this._element = t,
                this._config = this._getConfig(n),
                this._triggerArray = o.makeArray(o('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var r = o(_.DATA_TOGGLE), s = 0; s < r.length; s++) {
                    var l = r[s]
                      , c = i.getSelectorFromElement(l);
                    null !== c && o(c).filter(t).length > 0 && this._triggerArray.push(l)
                }
                this._parent = this._config.parent ? this._getParent() : null,
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                this._config.toggle && this.toggle()
            }
            return a.prototype.toggle = function() {
                o(this._element).hasClass(g) ? this.hide() : this.show()
            }
            ,
            a.prototype.show = function() {
                var e = this;
                if (!this._isTransitioning && !o(this._element).hasClass(g)) {
                    var t = void 0
                      , n = void 0;
                    if (this._parent && ((t = o.makeArray(o(this._parent).children().children(_.ACTIVES))).length || (t = null)),
                    !(t && (n = o(t).data(s)) && n._isTransitioning)) {
                        var r = o.Event(u);
                        if (o(this._element).trigger(r),
                        !r.isDefaultPrevented()) {
                            t && (a._jQueryInterface.call(o(t), "hide"),
                            n || o(t).data(s, null));
                            var l = this._getDimension();
                            o(this._element).removeClass(m).addClass(v),
                            this._element.style[l] = 0,
                            this._triggerArray.length && o(this._triggerArray).removeClass(y).attr("aria-expanded", !0),
                            this.setTransitioning(!0);
                            var c = function() {
                                o(e._element).removeClass(v).addClass(m).addClass(g),
                                e._element.style[l] = "",
                                e.setTransitioning(!1),
                                o(e._element).trigger(d)
                            };
                            if (i.supportsTransitionEnd()) {
                                var f = "scroll" + (l[0].toUpperCase() + l.slice(1));
                                o(this._element).one(i.TRANSITION_END, c).emulateTransitionEnd(600),
                                this._element.style[l] = this._element[f] + "px"
                            } else
                                c()
                        }
                    }
                }
            }
            ,
            a.prototype.hide = function() {
                var e = this;
                if (!this._isTransitioning && o(this._element).hasClass(g)) {
                    var t = o.Event(f);
                    if (o(this._element).trigger(t),
                    !t.isDefaultPrevented()) {
                        var n = this._getDimension();
                        if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                        i.reflow(this._element),
                        o(this._element).addClass(v).removeClass(m).removeClass(g),
                        this._triggerArray.length)
                            for (var r = 0; r < this._triggerArray.length; r++) {
                                var s = this._triggerArray[r]
                                  , a = i.getSelectorFromElement(s);
                                null !== a && (o(a).hasClass(g) || o(s).addClass(y).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0);
                        var l = function() {
                            e.setTransitioning(!1),
                            o(e._element).removeClass(v).addClass(m).trigger(p)
                        };
                        this._element.style[n] = "",
                        i.supportsTransitionEnd() ? o(this._element).one(i.TRANSITION_END, l).emulateTransitionEnd(600) : l()
                    }
                }
            }
            ,
            a.prototype.setTransitioning = function(e) {
                this._isTransitioning = e
            }
            ,
            a.prototype.dispose = function() {
                o.removeData(this._element, s),
                this._config = null,
                this._parent = null,
                this._element = null,
                this._triggerArray = null,
                this._isTransitioning = null
            }
            ,
            a.prototype._getConfig = function(e) {
                return (e = o.extend({}, l, e)).toggle = Boolean(e.toggle),
                i.typeCheckConfig(r, e, c),
                e
            }
            ,
            a.prototype._getDimension = function() {
                return o(this._element).hasClass(b) ? b : w
            }
            ,
            a.prototype._getParent = function() {
                var e = this
                  , t = o(this._config.parent)[0]
                  , n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return o(t).find(n).each(function(t, n) {
                    e._addAriaAndCollapsedClass(a._getTargetFromElement(n), [n])
                }),
                t
            }
            ,
            a.prototype._addAriaAndCollapsedClass = function(e, t) {
                if (e) {
                    var n = o(e).hasClass(g);
                    t.length && o(t).toggleClass(y, !n).attr("aria-expanded", n)
                }
            }
            ,
            a._getTargetFromElement = function(e) {
                var t = i.getSelectorFromElement(e);
                return t ? o(t)[0] : null
            }
            ,
            a._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = o(this)
                      , i = n.data(s)
                      , r = o.extend({}, l, n.data(), "object" === (void 0 === e ? "undefined" : t(e)) && e);
                    if (!i && r.toggle && /show|hide/.test(e) && (r.toggle = !1),
                    i || (i = new a(this,r),
                    n.data(s, i)),
                    "string" == typeof e) {
                        if (void 0 === i[e])
                            throw new Error('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }
            ,
            n(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta"
                }
            }, {
                key: "Default",
                get: function() {
                    return l
                }
            }]),
            a
        }();
        o(document).on(h, _.DATA_TOGGLE, function(e) {
            /input|textarea/i.test(e.target.tagName) || e.preventDefault();
            var t = o(this)
              , n = i.getSelectorFromElement(this);
            o(n).each(function() {
                var e = o(this)
                  , n = e.data(s) ? "toggle" : t.data();
                x._jQueryInterface.call(e, n)
            })
        }),
        o.fn[r] = x._jQueryInterface,
        o.fn[r].Constructor = x,
        o.fn[r].noConflict = function() {
            return o.fn[r] = a,
            x._jQueryInterface
        }
    }(jQuery),
    function(o) {
        if ("undefined" == typeof Popper)
            throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
        var r = "dropdown"
          , s = "bs.dropdown"
          , a = "." + s
          , l = o.fn[r]
          , c = new RegExp("38|40|27")
          , u = {
            HIDE: "hide" + a,
            HIDDEN: "hidden" + a,
            SHOW: "show" + a,
            SHOWN: "shown" + a,
            CLICK: "click" + a,
            CLICK_DATA_API: "click.bs.dropdown.data-api",
            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
            KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
        }
          , d = "disabled"
          , f = "show"
          , p = "dropup"
          , h = "dropdown-menu-right"
          , g = "dropdown-menu-left"
          , m = '[data-toggle="dropdown"]'
          , v = ".dropdown form"
          , y = ".dropdown-menu"
          , b = ".navbar-nav"
          , w = ".dropdown-menu .dropdown-item:not(.disabled)"
          , _ = {
            TOP: "top-start",
            TOPEND: "top-end",
            BOTTOM: "bottom-start",
            BOTTOMEND: "bottom-end"
        }
          , x = {
            placement: _.BOTTOM,
            offset: 0,
            flip: !0
        }
          , E = {
            placement: "string",
            offset: "(number|string)",
            flip: "boolean"
        }
          , C = function() {
            function l(t, n) {
                e(this, l),
                this._element = t,
                this._popper = null,
                this._config = this._getConfig(n),
                this._menu = this._getMenuElement(),
                this._inNavbar = this._detectNavbar(),
                this._addEventListeners()
            }
            return l.prototype.toggle = function() {
                if (!this._element.disabled && !o(this._element).hasClass(d)) {
                    var e = l._getParentFromElement(this._element)
                      , t = o(this._menu).hasClass(f);
                    if (l._clearMenus(),
                    !t) {
                        var n = {
                            relatedTarget: this._element
                        }
                          , i = o.Event(u.SHOW, n);
                        if (o(e).trigger(i),
                        !i.isDefaultPrevented()) {
                            var r = this._element;
                            o(e).hasClass(p) && (o(this._menu).hasClass(g) || o(this._menu).hasClass(h)) && (r = e),
                            this._popper = new Popper(r,this._menu,this._getPopperConfig()),
                            "ontouchstart"in document.documentElement && !o(e).closest(b).length && o("body").children().on("mouseover", null, o.noop),
                            this._element.focus(),
                            this._element.setAttribute("aria-expanded", !0),
                            o(this._menu).toggleClass(f),
                            o(e).toggleClass(f).trigger(o.Event(u.SHOWN, n))
                        }
                    }
                }
            }
            ,
            l.prototype.dispose = function() {
                o.removeData(this._element, s),
                o(this._element).off(a),
                this._element = null,
                this._menu = null,
                null !== this._popper && this._popper.destroy(),
                this._popper = null
            }
            ,
            l.prototype.update = function() {
                this._inNavbar = this._detectNavbar(),
                null !== this._popper && this._popper.scheduleUpdate()
            }
            ,
            l.prototype._addEventListeners = function() {
                var e = this;
                o(this._element).on(u.CLICK, function(t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    e.toggle()
                })
            }
            ,
            l.prototype._getConfig = function(e) {
                var t = o(this._element).data();
                return void 0 !== t.placement && (t.placement = _[t.placement.toUpperCase()]),
                e = o.extend({}, this.constructor.Default, o(this._element).data(), e),
                i.typeCheckConfig(r, e, this.constructor.DefaultType),
                e
            }
            ,
            l.prototype._getMenuElement = function() {
                if (!this._menu) {
                    var e = l._getParentFromElement(this._element);
                    this._menu = o(e).find(y)[0]
                }
                return this._menu
            }
            ,
            l.prototype._getPlacement = function() {
                var e = o(this._element).parent()
                  , t = this._config.placement;
                return e.hasClass(p) || this._config.placement === _.TOP ? (t = _.TOP,
                o(this._menu).hasClass(h) && (t = _.TOPEND)) : o(this._menu).hasClass(h) && (t = _.BOTTOMEND),
                t
            }
            ,
            l.prototype._detectNavbar = function() {
                return o(this._element).closest(".navbar").length > 0
            }
            ,
            l.prototype._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: {
                            offset: this._config.offset
                        },
                        flip: {
                            enabled: this._config.flip
                        }
                    }
                };
                return this._inNavbar && (e.modifiers.applyStyle = {
                    enabled: !this._inNavbar
                }),
                e
            }
            ,
            l._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = o(this).data(s)
                      , i = "object" === (void 0 === e ? "undefined" : t(e)) ? e : null;
                    if (n || (n = new l(this,i),
                    o(this).data(s, n)),
                    "string" == typeof e) {
                        if (void 0 === n[e])
                            throw new Error('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }
            ,
            l._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var t = o.makeArray(o(m)), n = 0; n < t.length; n++) {
                        var i = l._getParentFromElement(t[n])
                          , r = o(t[n]).data(s)
                          , a = {
                            relatedTarget: t[n]
                        };
                        if (r) {
                            var c = r._menu;
                            if (o(i).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && o.contains(i, e.target))) {
                                var d = o.Event(u.HIDE, a);
                                o(i).trigger(d),
                                d.isDefaultPrevented() || ("ontouchstart"in document.documentElement && o("body").children().off("mouseover", null, o.noop),
                                t[n].setAttribute("aria-expanded", "false"),
                                o(c).removeClass(f),
                                o(i).removeClass(f).trigger(o.Event(u.HIDDEN, a)))
                            }
                        }
                    }
            }
            ,
            l._getParentFromElement = function(e) {
                var t = void 0
                  , n = i.getSelectorFromElement(e);
                return n && (t = o(n)[0]),
                t || e.parentNode
            }
            ,
            l._dataApiKeydownHandler = function(e) {
                if (!(!c.test(e.which) || /button/i.test(e.target.tagName) && 32 === e.which || /input|textarea/i.test(e.target.tagName) || (e.preventDefault(),
                e.stopPropagation(),
                this.disabled || o(this).hasClass(d)))) {
                    var t = l._getParentFromElement(this)
                      , n = o(t).hasClass(f);
                    if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
                        var i = o(t).find(w).get();
                        if (i.length) {
                            var r = i.indexOf(e.target);
                            38 === e.which && r > 0 && r--,
                            40 === e.which && r < i.length - 1 && r++,
                            r < 0 && (r = 0),
                            i[r].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var s = o(t).find(m)[0];
                            o(s).trigger("focus")
                        }
                        o(this).trigger("click")
                    }
                }
            }
            ,
            n(l, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta"
                }
            }, {
                key: "Default",
                get: function() {
                    return x
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return E
                }
            }]),
            l
        }();
        o(document).on(u.KEYDOWN_DATA_API, m, C._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, y, C._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, C._clearMenus).on(u.CLICK_DATA_API, m, function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            C._jQueryInterface.call(o(this), "toggle")
        }).on(u.CLICK_DATA_API, v, function(e) {
            e.stopPropagation()
        }),
        o.fn[r] = C._jQueryInterface,
        o.fn[r].Constructor = C,
        o.fn[r].noConflict = function() {
            return o.fn[r] = l,
            C._jQueryInterface
        }
    }(jQuery),
    function(o) {
        var r = "modal"
          , s = o.fn[r]
          , a = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }
          , l = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }
          , c = "hide.bs.modal"
          , u = "hidden.bs.modal"
          , d = "show.bs.modal"
          , f = "shown.bs.modal"
          , p = "focusin.bs.modal"
          , h = "resize.bs.modal"
          , g = "click.dismiss.bs.modal"
          , m = "keydown.dismiss.bs.modal"
          , v = "mouseup.dismiss.bs.modal"
          , y = "mousedown.dismiss.bs.modal"
          , b = "click.bs.modal.data-api"
          , w = "modal-scrollbar-measure"
          , _ = "modal-backdrop"
          , x = "modal-open"
          , E = "fade"
          , C = "show"
          , T = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }
          , A = function() {
            function s(t, n) {
                e(this, s),
                this._config = this._getConfig(n),
                this._element = t,
                this._dialog = o(t).find(T.DIALOG)[0],
                this._backdrop = null,
                this._isShown = !1,
                this._isBodyOverflowing = !1,
                this._ignoreBackdropClick = !1,
                this._originalBodyPadding = 0,
                this._scrollbarWidth = 0
            }
            return s.prototype.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }
            ,
            s.prototype.show = function(e) {
                var t = this;
                if (!this._isTransitioning) {
                    i.supportsTransitionEnd() && o(this._element).hasClass(E) && (this._isTransitioning = !0);
                    var n = o.Event(d, {
                        relatedTarget: e
                    });
                    o(this._element).trigger(n),
                    this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    o(document.body).addClass(x),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    o(this._element).on(g, T.DATA_DISMISS, function(e) {
                        return t.hide(e)
                    }),
                    o(this._dialog).on(y, function() {
                        o(t._element).one(v, function(e) {
                            o(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }),
                    this._showBackdrop(function() {
                        return t._showElement(e)
                    }))
                }
            }
            ,
            s.prototype.hide = function(e) {
                var t = this;
                if (e && e.preventDefault(),
                !this._isTransitioning && this._isShown) {
                    var n = i.supportsTransitionEnd() && o(this._element).hasClass(E);
                    n && (this._isTransitioning = !0);
                    var r = o.Event(c);
                    o(this._element).trigger(r),
                    this._isShown && !r.isDefaultPrevented() && (this._isShown = !1,
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    o(document).off(p),
                    o(this._element).removeClass(C),
                    o(this._element).off(g),
                    o(this._dialog).off(y),
                    n ? o(this._element).one(i.TRANSITION_END, function(e) {
                        return t._hideModal(e)
                    }).emulateTransitionEnd(300) : this._hideModal())
                }
            }
            ,
            s.prototype.dispose = function() {
                o.removeData(this._element, "bs.modal"),
                o(window, document, this._element, this._backdrop).off(".bs.modal"),
                this._config = null,
                this._element = null,
                this._dialog = null,
                this._backdrop = null,
                this._isShown = null,
                this._isBodyOverflowing = null,
                this._ignoreBackdropClick = null,
                this._scrollbarWidth = null
            }
            ,
            s.prototype.handleUpdate = function() {
                this._adjustDialog()
            }
            ,
            s.prototype._getConfig = function(e) {
                return e = o.extend({}, a, e),
                i.typeCheckConfig(r, e, l),
                e
            }
            ,
            s.prototype._showElement = function(e) {
                var t = this
                  , n = i.supportsTransitionEnd() && o(this._element).hasClass(E);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                this._element.style.display = "block",
                this._element.removeAttribute("aria-hidden"),
                this._element.scrollTop = 0,
                n && i.reflow(this._element),
                o(this._element).addClass(C),
                this._config.focus && this._enforceFocus();
                var r = o.Event(f, {
                    relatedTarget: e
                })
                  , s = function() {
                    t._config.focus && t._element.focus(),
                    t._isTransitioning = !1,
                    o(t._element).trigger(r)
                };
                n ? o(this._dialog).one(i.TRANSITION_END, s).emulateTransitionEnd(300) : s()
            }
            ,
            s.prototype._enforceFocus = function() {
                var e = this;
                o(document).off(p).on(p, function(t) {
                    document === t.target || e._element === t.target || o(e._element).has(t.target).length || e._element.focus()
                })
            }
            ,
            s.prototype._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? o(this._element).on(m, function(t) {
                    27 === t.which && (t.preventDefault(),
                    e.hide())
                }) : this._isShown || o(this._element).off(m)
            }
            ,
            s.prototype._setResizeEvent = function() {
                var e = this;
                this._isShown ? o(window).on(h, function(t) {
                    return e.handleUpdate(t)
                }) : o(window).off(h)
            }
            ,
            s.prototype._hideModal = function() {
                var e = this;
                this._element.style.display = "none",
                this._element.setAttribute("aria-hidden", !0),
                this._isTransitioning = !1,
                this._showBackdrop(function() {
                    o(document.body).removeClass(x),
                    e._resetAdjustments(),
                    e._resetScrollbar(),
                    o(e._element).trigger(u)
                })
            }
            ,
            s.prototype._removeBackdrop = function() {
                this._backdrop && (o(this._backdrop).remove(),
                this._backdrop = null)
            }
            ,
            s.prototype._showBackdrop = function(e) {
                var t = this
                  , n = o(this._element).hasClass(E) ? E : "";
                if (this._isShown && this._config.backdrop) {
                    var r = i.supportsTransitionEnd() && n;
                    if (this._backdrop = document.createElement("div"),
                    this._backdrop.className = _,
                    n && o(this._backdrop).addClass(n),
                    o(this._backdrop).appendTo(document.body),
                    o(this._element).on(g, function(e) {
                        t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                    }),
                    r && i.reflow(this._backdrop),
                    o(this._backdrop).addClass(C),
                    !e)
                        return;
                    if (!r)
                        return void e();
                    o(this._backdrop).one(i.TRANSITION_END, e).emulateTransitionEnd(150)
                } else if (!this._isShown && this._backdrop) {
                    o(this._backdrop).removeClass(C);
                    var s = function() {
                        t._removeBackdrop(),
                        e && e()
                    };
                    i.supportsTransitionEnd() && o(this._element).hasClass(E) ? o(this._backdrop).one(i.TRANSITION_END, s).emulateTransitionEnd(150) : s()
                } else
                    e && e()
            }
            ,
            s.prototype._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }
            ,
            s.prototype._resetAdjustments = function() {
                this._element.style.paddingLeft = "",
                this._element.style.paddingRight = ""
            }
            ,
            s.prototype._checkScrollbar = function() {
                this._isBodyOverflowing = document.body.clientWidth < window.innerWidth,
                this._scrollbarWidth = this._getScrollbarWidth()
            }
            ,
            s.prototype._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    o(T.FIXED_CONTENT).each(function(t, n) {
                        var i = o(n)[0].style.paddingRight
                          , r = o(n).css("padding-right");
                        o(n).data("padding-right", i).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                    }),
                    o(T.NAVBAR_TOGGLER).each(function(t, n) {
                        var i = o(n)[0].style.marginRight
                          , r = o(n).css("margin-right");
                        o(n).data("margin-right", i).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
                    });
                    var t = document.body.style.paddingRight
                      , n = o("body").css("padding-right");
                    o("body").data("padding-right", t).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
                }
            }
            ,
            s.prototype._resetScrollbar = function() {
                o(T.FIXED_CONTENT).each(function(e, t) {
                    var n = o(t).data("padding-right");
                    void 0 !== n && o(t).css("padding-right", n).removeData("padding-right")
                }),
                o(T.NAVBAR_TOGGLER).each(function(e, t) {
                    var n = o(t).data("margin-right");
                    void 0 !== n && o(t).css("margin-right", n).removeData("margin-right")
                });
                var e = o("body").data("padding-right");
                void 0 !== e && o("body").css("padding-right", e).removeData("padding-right")
            }
            ,
            s.prototype._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = w,
                document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e),
                t
            }
            ,
            s._jQueryInterface = function(e, n) {
                return this.each(function() {
                    var i = o(this).data("bs.modal")
                      , r = o.extend({}, s.Default, o(this).data(), "object" === (void 0 === e ? "undefined" : t(e)) && e);
                    if (i || (i = new s(this,r),
                    o(this).data("bs.modal", i)),
                    "string" == typeof e) {
                        if (void 0 === i[e])
                            throw new Error('No method named "' + e + '"');
                        i[e](n)
                    } else
                        r.show && i.show(n)
                })
            }
            ,
            n(s, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta"
                }
            }, {
                key: "Default",
                get: function() {
                    return a
                }
            }]),
            s
        }();
        o(document).on(b, T.DATA_TOGGLE, function(e) {
            var t = this
              , n = void 0
              , r = i.getSelectorFromElement(this);
            r && (n = o(r)[0]);
            var s = o(n).data("bs.modal") ? "toggle" : o.extend({}, o(n).data(), o(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var a = o(n).one(d, function(e) {
                e.isDefaultPrevented() || a.one(u, function() {
                    o(t).is(":visible") && t.focus()
                })
            });
            A._jQueryInterface.call(o(n), s, this)
        }),
        o.fn[r] = A._jQueryInterface,
        o.fn[r].Constructor = A,
        o.fn[r].noConflict = function() {
            return o.fn[r] = s,
            A._jQueryInterface
        }
    }(jQuery),
    function(o) {
        var r = "scrollspy"
          , s = o.fn[r]
          , a = {
            offset: 10,
            method: "auto",
            target: ""
        }
          , l = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }
          , c = {
            ACTIVATE: "activate.bs.scrollspy",
            SCROLL: "scroll.bs.scrollspy",
            LOAD_DATA_API: "load.bs.scrollspy.data-api"
        }
          , u = "dropdown-item"
          , d = "active"
          , f = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }
          , p = "offset"
          , h = "position"
          , g = function() {
            function s(t, n) {
                var i = this;
                e(this, s),
                this._element = t,
                this._scrollElement = "BODY" === t.tagName ? window : t,
                this._config = this._getConfig(n),
                this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS,
                this._offsets = [],
                this._targets = [],
                this._activeTarget = null,
                this._scrollHeight = 0,
                o(this._scrollElement).on(c.SCROLL, function(e) {
                    return i._process(e)
                }),
                this.refresh(),
                this._process()
            }
            return s.prototype.refresh = function() {
                var e = this
                  , t = this._scrollElement !== this._scrollElement.window ? h : p
                  , n = "auto" === this._config.method ? t : this._config.method
                  , r = n === h ? this._getScrollTop() : 0;
                this._offsets = [],
                this._targets = [],
                this._scrollHeight = this._getScrollHeight(),
                o.makeArray(o(this._selector)).map(function(e) {
                    var t = void 0
                      , s = i.getSelectorFromElement(e);
                    if (s && (t = o(s)[0]),
                    t) {
                        var a = t.getBoundingClientRect();
                        if (a.width || a.height)
                            return [o(t)[n]().top + r, s]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]),
                    e._targets.push(t[1])
                })
            }
            ,
            s.prototype.dispose = function() {
                o.removeData(this._element, "bs.scrollspy"),
                o(this._scrollElement).off(".bs.scrollspy"),
                this._element = null,
                this._scrollElement = null,
                this._config = null,
                this._selector = null,
                this._offsets = null,
                this._targets = null,
                this._activeTarget = null,
                this._scrollHeight = null
            }
            ,
            s.prototype._getConfig = function(e) {
                if ("string" != typeof (e = o.extend({}, a, e)).target) {
                    var t = o(e.target).attr("id");
                    t || (t = i.getUID(r),
                    o(e.target).attr("id", t)),
                    e.target = "#" + t
                }
                return i.typeCheckConfig(r, e, l),
                e
            }
            ,
            s.prototype._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }
            ,
            s.prototype._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
            ,
            s.prototype._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }
            ,
            s.prototype._process = function() {
                var e = this._getScrollTop() + this._config.offset
                  , t = this._getScrollHeight()
                  , n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(),
                e >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0)
                        return this._activeTarget = null,
                        void this._clear();
                    for (var o = this._offsets.length; o--; )
                        this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }
            ,
            s.prototype._activate = function(e) {
                this._activeTarget = e,
                this._clear();
                var t = this._selector.split(",");
                t = t.map(function(t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var n = o(t.join(","));
                n.hasClass(u) ? (n.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(d),
                n.addClass(d)) : (n.addClass(d),
                n.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(d)),
                o(this._scrollElement).trigger(c.ACTIVATE, {
                    relatedTarget: e
                })
            }
            ,
            s.prototype._clear = function() {
                o(this._selector).filter(f.ACTIVE).removeClass(d)
            }
            ,
            s._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = o(this).data("bs.scrollspy")
                      , i = "object" === (void 0 === e ? "undefined" : t(e)) && e;
                    if (n || (n = new s(this,i),
                    o(this).data("bs.scrollspy", n)),
                    "string" == typeof e) {
                        if (void 0 === n[e])
                            throw new Error('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }
            ,
            n(s, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta"
                }
            }, {
                key: "Default",
                get: function() {
                    return a
                }
            }]),
            s
        }();
        o(window).on(c.LOAD_DATA_API, function() {
            for (var e = o.makeArray(o(f.DATA_SPY)), t = e.length; t--; ) {
                var n = o(e[t]);
                g._jQueryInterface.call(n, n.data())
            }
        }),
        o.fn[r] = g._jQueryInterface,
        o.fn[r].Constructor = g,
        o.fn[r].noConflict = function() {
            return o.fn[r] = s,
            g._jQueryInterface
        }
    }(jQuery),
    function(t) {
        var o = t.fn.tab
          , r = "hide.bs.tab"
          , s = "hidden.bs.tab"
          , a = "show.bs.tab"
          , l = "shown.bs.tab"
          , c = "click.bs.tab.data-api"
          , u = "dropdown-menu"
          , d = "active"
          , f = "disabled"
          , p = "fade"
          , h = "show"
          , g = ".dropdown"
          , m = ".nav, .list-group"
          , v = ".active"
          , y = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
          , b = ".dropdown-toggle"
          , w = "> .dropdown-menu .active"
          , _ = function() {
            function o(t) {
                e(this, o),
                this._element = t
            }
            return o.prototype.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(d) || t(this._element).hasClass(f))) {
                    var n = void 0
                      , o = void 0
                      , c = t(this._element).closest(m)[0]
                      , u = i.getSelectorFromElement(this._element);
                    c && (o = (o = t.makeArray(t(c).find(v)))[o.length - 1]);
                    var p = t.Event(r, {
                        relatedTarget: this._element
                    })
                      , h = t.Event(a, {
                        relatedTarget: o
                    });
                    if (o && t(o).trigger(p),
                    t(this._element).trigger(h),
                    !h.isDefaultPrevented() && !p.isDefaultPrevented()) {
                        u && (n = t(u)[0]),
                        this._activate(this._element, c);
                        var g = function() {
                            var n = t.Event(s, {
                                relatedTarget: e._element
                            })
                              , i = t.Event(l, {
                                relatedTarget: o
                            });
                            t(o).trigger(n),
                            t(e._element).trigger(i)
                        };
                        n ? this._activate(n, n.parentNode, g) : g()
                    }
                }
            }
            ,
            o.prototype.dispose = function() {
                t.removeData(this._element, "bs.tab"),
                this._element = null
            }
            ,
            o.prototype._activate = function(e, n, o) {
                var r = this
                  , s = t(n).find(v)[0]
                  , a = o && i.supportsTransitionEnd() && s && t(s).hasClass(p)
                  , l = function() {
                    return r._transitionComplete(e, s, a, o)
                };
                s && a ? t(s).one(i.TRANSITION_END, l).emulateTransitionEnd(150) : l(),
                s && t(s).removeClass(h)
            }
            ,
            o.prototype._transitionComplete = function(e, n, o, r) {
                if (n) {
                    t(n).removeClass(d);
                    var s = t(n.parentNode).find(w)[0];
                    s && t(s).removeClass(d),
                    n.setAttribute("aria-expanded", !1)
                }
                if (t(e).addClass(d),
                e.setAttribute("aria-expanded", !0),
                o ? (i.reflow(e),
                t(e).addClass(h)) : t(e).removeClass(p),
                e.parentNode && t(e.parentNode).hasClass(u)) {
                    var a = t(e).closest(g)[0];
                    a && t(a).find(b).addClass(d),
                    e.setAttribute("aria-expanded", !0)
                }
                r && r()
            }
            ,
            o._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this)
                      , i = n.data("bs.tab");
                    if (i || (i = new o(this),
                    n.data("bs.tab", i)),
                    "string" == typeof e) {
                        if (void 0 === i[e])
                            throw new Error('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }
            ,
            n(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta"
                }
            }]),
            o
        }();
        t(document).on(c, y, function(e) {
            e.preventDefault(),
            _._jQueryInterface.call(t(this), "show")
        }),
        t.fn.tab = _._jQueryInterface,
        t.fn.tab.Constructor = _,
        t.fn.tab.noConflict = function() {
            return t.fn.tab = o,
            _._jQueryInterface
        }
    }(jQuery),
    function(o) {
        if ("undefined" == typeof Popper)
            throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
        var r = "tooltip"
          , s = ".bs.tooltip"
          , a = o.fn[r]
          , l = new RegExp("(^|\\s)bs-tooltip\\S+","g")
          , c = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)"
        }
          , u = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }
          , d = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip"
        }
          , f = "show"
          , p = "out"
          , h = {
            HIDE: "hide" + s,
            HIDDEN: "hidden" + s,
            SHOW: "show" + s,
            SHOWN: "shown" + s,
            INSERTED: "inserted" + s,
            CLICK: "click" + s,
            FOCUSIN: "focusin" + s,
            FOCUSOUT: "focusout" + s,
            MOUSEENTER: "mouseenter" + s,
            MOUSELEAVE: "mouseleave" + s
        }
          , g = "fade"
          , m = "show"
          , v = ".tooltip-inner"
          , y = ".arrow"
          , b = "hover"
          , w = "focus"
          , _ = "click"
          , x = "manual"
          , E = function() {
            function a(t, n) {
                e(this, a),
                this._isEnabled = !0,
                this._timeout = 0,
                this._hoverState = "",
                this._activeTrigger = {},
                this._popper = null,
                this.element = t,
                this.config = this._getConfig(n),
                this.tip = null,
                this._setListeners()
            }
            return a.prototype.enable = function() {
                this._isEnabled = !0
            }
            ,
            a.prototype.disable = function() {
                this._isEnabled = !1
            }
            ,
            a.prototype.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }
            ,
            a.prototype.toggle = function(e) {
                if (e) {
                    var t = this.constructor.DATA_KEY
                      , n = o(e.currentTarget).data(t);
                    n || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                    o(e.currentTarget).data(t, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (o(this.getTipElement()).hasClass(m))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
            }
            ,
            a.prototype.dispose = function() {
                clearTimeout(this._timeout),
                o.removeData(this.element, this.constructor.DATA_KEY),
                o(this.element).off(this.constructor.EVENT_KEY),
                o(this.element).closest(".modal").off("hide.bs.modal"),
                this.tip && o(this.tip).remove(),
                this._isEnabled = null,
                this._timeout = null,
                this._hoverState = null,
                this._activeTrigger = null,
                null !== this._popper && this._popper.destroy(),
                this._popper = null,
                this.element = null,
                this.config = null,
                this.tip = null
            }
            ,
            a.prototype.show = function() {
                var e = this;
                if ("none" === o(this.element).css("display"))
                    throw new Error("Please use show on visible elements");
                var t = o.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    o(this.element).trigger(t);
                    var n = o.contains(this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !n)
                        return;
                    var r = this.getTipElement()
                      , s = i.getUID(this.constructor.NAME);
                    r.setAttribute("id", s),
                    this.element.setAttribute("aria-describedby", s),
                    this.setContent(),
                    this.config.animation && o(r).addClass(g);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
                      , c = this._getAttachment(l);
                    this.addAttachmentClass(c);
                    var u = !1 === this.config.container ? document.body : o(this.config.container);
                    o(r).data(this.constructor.DATA_KEY, this),
                    o.contains(this.element.ownerDocument.documentElement, this.tip) || o(r).appendTo(u),
                    o(this.element).trigger(this.constructor.Event.INSERTED),
                    this._popper = new Popper(this.element,r,{
                        placement: c,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: y
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            e._handlePopperPlacementChange(t)
                        }
                    }),
                    o(r).addClass(m),
                    "ontouchstart"in document.documentElement && o("body").children().on("mouseover", null, o.noop);
                    var d = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null,
                        o(e.element).trigger(e.constructor.Event.SHOWN),
                        t === p && e._leave(null, e)
                    };
                    i.supportsTransitionEnd() && o(this.tip).hasClass(g) ? o(this.tip).one(i.TRANSITION_END, d).emulateTransitionEnd(a._TRANSITION_DURATION) : d()
                }
            }
            ,
            a.prototype.hide = function(e) {
                var t = this
                  , n = this.getTipElement()
                  , r = o.Event(this.constructor.Event.HIDE)
                  , s = function() {
                    t._hoverState !== f && n.parentNode && n.parentNode.removeChild(n),
                    t._cleanTipClass(),
                    t.element.removeAttribute("aria-describedby"),
                    o(t.element).trigger(t.constructor.Event.HIDDEN),
                    null !== t._popper && t._popper.destroy(),
                    e && e()
                };
                o(this.element).trigger(r),
                r.isDefaultPrevented() || (o(n).removeClass(m),
                "ontouchstart"in document.documentElement && o("body").children().off("mouseover", null, o.noop),
                this._activeTrigger[_] = !1,
                this._activeTrigger[w] = !1,
                this._activeTrigger[b] = !1,
                i.supportsTransitionEnd() && o(this.tip).hasClass(g) ? o(n).one(i.TRANSITION_END, s).emulateTransitionEnd(150) : s(),
                this._hoverState = "")
            }
            ,
            a.prototype.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }
            ,
            a.prototype.isWithContent = function() {
                return Boolean(this.getTitle())
            }
            ,
            a.prototype.addAttachmentClass = function(e) {
                o(this.getTipElement()).addClass("bs-tooltip-" + e)
            }
            ,
            a.prototype.getTipElement = function() {
                return this.tip = this.tip || o(this.config.template)[0]
            }
            ,
            a.prototype.setContent = function() {
                var e = o(this.getTipElement());
                this.setElementContent(e.find(v), this.getTitle()),
                e.removeClass(g + " " + m)
            }
            ,
            a.prototype.setElementContent = function(e, n) {
                var i = this.config.html;
                "object" === (void 0 === n ? "undefined" : t(n)) && (n.nodeType || n.jquery) ? i ? o(n).parent().is(e) || e.empty().append(n) : e.text(o(n).text()) : e[i ? "html" : "text"](n)
            }
            ,
            a.prototype.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                e
            }
            ,
            a.prototype._getAttachment = function(e) {
                return u[e.toUpperCase()]
            }
            ,
            a.prototype._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t)
                        o(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                            return e.toggle(t)
                        });
                    else if (t !== x) {
                        var n = t === b ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                          , i = t === b ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        o(e.element).on(n, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(i, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                    o(e.element).closest(".modal").on("hide.bs.modal", function() {
                        return e.hide()
                    })
                }),
                this.config.selector ? this.config = o.extend({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }
            ,
            a.prototype._fixTitle = function() {
                var e = t(this.element.getAttribute("data-original-title"));
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                this.element.setAttribute("title", ""))
            }
            ,
            a.prototype._enter = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || o(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                o(e.currentTarget).data(n, t)),
                e && (t._activeTrigger["focusin" === e.type ? w : b] = !0),
                o(t.getTipElement()).hasClass(m) || t._hoverState === f ? t._hoverState = f : (clearTimeout(t._timeout),
                t._hoverState = f,
                t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                    t._hoverState === f && t.show()
                }, t.config.delay.show) : t.show())
            }
            ,
            a.prototype._leave = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || o(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                o(e.currentTarget).data(n, t)),
                e && (t._activeTrigger["focusout" === e.type ? w : b] = !1),
                t._isWithActiveTrigger() || (clearTimeout(t._timeout),
                t._hoverState = p,
                t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                    t._hoverState === p && t.hide()
                }, t.config.delay.hide) : t.hide())
            }
            ,
            a.prototype._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e])
                        return !0;
                return !1
            }
            ,
            a.prototype._getConfig = function(e) {
                return (e = o.extend({}, this.constructor.Default, o(this.element).data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }),
                e.title && "number" == typeof e.title && (e.title = e.title.toString()),
                e.content && "number" == typeof e.content && (e.content = e.content.toString()),
                i.typeCheckConfig(r, e, this.constructor.DefaultType),
                e
            }
            ,
            a.prototype._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config)
                        this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }
            ,
            a.prototype._cleanTipClass = function() {
                var e = o(this.getTipElement())
                  , t = e.attr("class").match(l);
                null !== t && t.length > 0 && e.removeClass(t.join(""))
            }
            ,
            a.prototype._handlePopperPlacementChange = function(e) {
                this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(e.placement))
            }
            ,
            a.prototype._fixTransition = function() {
                var e = this.getTipElement()
                  , t = this.config.animation;
                null === e.getAttribute("x-placement") && (o(e).removeClass(g),
                this.config.animation = !1,
                this.hide(),
                this.show(),
                this.config.animation = t)
            }
            ,
            a._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = o(this).data("bs.tooltip")
                      , i = "object" === (void 0 === e ? "undefined" : t(e)) && e;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this,i),
                    o(this).data("bs.tooltip", n)),
                    "string" == typeof e)) {
                        if (void 0 === n[e])
                            throw new Error('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }
            ,
            n(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta"
                }
            }, {
                key: "Default",
                get: function() {
                    return d
                }
            }, {
                key: "NAME",
                get: function() {
                    return r
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return h
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return s
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return c
                }
            }]),
            a
        }();
        return o.fn[r] = E._jQueryInterface,
        o.fn[r].Constructor = E,
        o.fn[r].noConflict = function() {
            return o.fn[r] = a,
            E._jQueryInterface
        }
        ,
        E
    }(jQuery));
    !function(i) {
        var r = "popover"
          , s = ".bs.popover"
          , a = i.fn[r]
          , l = new RegExp("(^|\\s)bs-popover\\S+","g")
          , c = i.extend({}, o.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
          , u = i.extend({}, o.DefaultType, {
            content: "(string|element|function)"
        })
          , d = "fade"
          , f = "show"
          , p = ".popover-header"
          , h = ".popover-body"
          , g = {
            HIDE: "hide" + s,
            HIDDEN: "hidden" + s,
            SHOW: "show" + s,
            SHOWN: "shown" + s,
            INSERTED: "inserted" + s,
            CLICK: "click" + s,
            FOCUSIN: "focusin" + s,
            FOCUSOUT: "focusout" + s,
            MOUSEENTER: "mouseenter" + s,
            MOUSELEAVE: "mouseleave" + s
        }
          , m = function(o) {
            function a() {
                return e(this, a),
                function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, o.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(a, o),
            a.prototype.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }
            ,
            a.prototype.addAttachmentClass = function(e) {
                i(this.getTipElement()).addClass("bs-popover-" + e)
            }
            ,
            a.prototype.getTipElement = function() {
                return this.tip = this.tip || i(this.config.template)[0]
            }
            ,
            a.prototype.setContent = function() {
                var e = i(this.getTipElement());
                this.setElementContent(e.find(p), this.getTitle()),
                this.setElementContent(e.find(h), this._getContent()),
                e.removeClass(d + " " + f)
            }
            ,
            a.prototype._getContent = function() {
                return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
            }
            ,
            a.prototype._cleanTipClass = function() {
                var e = i(this.getTipElement())
                  , t = e.attr("class").match(l);
                null !== t && t.length > 0 && e.removeClass(t.join(""))
            }
            ,
            a._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = i(this).data("bs.popover")
                      , o = "object" === (void 0 === e ? "undefined" : t(e)) ? e : null;
                    if ((n || !/destroy|hide/.test(e)) && (n || (n = new a(this,o),
                    i(this).data("bs.popover", n)),
                    "string" == typeof e)) {
                        if (void 0 === n[e])
                            throw new Error('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }
            ,
            n(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0-beta"
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
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function() {
                    return g
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return s
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return u
                }
            }]),
            a
        }(o);
        i.fn[r] = m._jQueryInterface,
        i.fn[r].Constructor = m,
        i.fn[r].noConflict = function() {
            return i.fn[r] = a,
            m._jQueryInterface
        }
    }(jQuery)
}(),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    var t = function() {
        if (e && e.fn && e.fn.select2 && e.fn.select2.amd)
            var t = e.fn.select2.amd;
        return function() {
            var e, n, i;
            t && t.requirejs || (t ? n = t : t = {},
            function(t) {
                function o(e, t) {
                    return b.call(e, t)
                }
                function r(e, t) {
                    var n, i, o, r, s, a, l, c, u, d, f, p = t && t.split("/"), h = v.map, g = h && h["*"] || {};
                    if (e && "." === e.charAt(0))
                        if (t) {
                            for (s = (e = e.split("/")).length - 1,
                            v.nodeIdCompat && _.test(e[s]) && (e[s] = e[s].replace(_, "")),
                            e = p.slice(0, p.length - 1).concat(e),
                            u = 0; u < e.length; u += 1)
                                if ("." === (f = e[u]))
                                    e.splice(u, 1),
                                    u -= 1;
                                else if (".." === f) {
                                    if (1 === u && (".." === e[2] || ".." === e[0]))
                                        break;
                                    u > 0 && (e.splice(u - 1, 2),
                                    u -= 2)
                                }
                            e = e.join("/")
                        } else
                            0 === e.indexOf("./") && (e = e.substring(2));
                    if ((p || g) && h) {
                        for (u = (n = e.split("/")).length; u > 0; u -= 1) {
                            if (i = n.slice(0, u).join("/"),
                            p)
                                for (d = p.length; d > 0; d -= 1)
                                    if ((o = h[p.slice(0, d).join("/")]) && (o = o[i])) {
                                        r = o,
                                        a = u;
                                        break
                                    }
                            if (r)
                                break;
                            !l && g && g[i] && (l = g[i],
                            c = u)
                        }
                        !r && l && (r = l,
                        a = c),
                        r && (n.splice(0, a, r),
                        e = n.join("/"))
                    }
                    return e
                }
                function s(e, n) {
                    return function() {
                        var i = w.call(arguments, 0);
                        return "string" != typeof i[0] && 1 === i.length && i.push(null),
                        f.apply(t, i.concat([e, n]))
                    }
                }
                function a(e) {
                    return function(t) {
                        g[e] = t
                    }
                }
                function l(e) {
                    if (o(m, e)) {
                        var n = m[e];
                        delete m[e],
                        y[e] = !0,
                        d.apply(t, n)
                    }
                    if (!o(g, e) && !o(y, e))
                        throw new Error("No " + e);
                    return g[e]
                }
                function c(e) {
                    var t, n = e ? e.indexOf("!") : -1;
                    return n > -1 && (t = e.substring(0, n),
                    e = e.substring(n + 1, e.length)),
                    [t, e]
                }
                function u(e) {
                    return function() {
                        return v && v.config && v.config[e] || {}
                    }
                }
                var d, f, p, h, g = {}, m = {}, v = {}, y = {}, b = Object.prototype.hasOwnProperty, w = [].slice, _ = /\.js$/;
                p = function(e, t) {
                    var n, i = c(e), o = i[0];
                    return e = i[1],
                    o && (n = l(o = r(o, t))),
                    o ? e = n && n.normalize ? n.normalize(e, function(e) {
                        return function(t) {
                            return r(t, e)
                        }
                    }(t)) : r(e, t) : (o = (i = c(e = r(e, t)))[0],
                    e = i[1],
                    o && (n = l(o))),
                    {
                        f: o ? o + "!" + e : e,
                        n: e,
                        pr: o,
                        p: n
                    }
                }
                ,
                h = {
                    require: function(e) {
                        return s(e)
                    },
                    exports: function(e) {
                        var t = g[e];
                        return void 0 !== t ? t : g[e] = {}
                    },
                    module: function(e) {
                        return {
                            id: e,
                            uri: "",
                            exports: g[e],
                            config: u(e)
                        }
                    }
                },
                d = function(e, n, i, r) {
                    var c, u, d, f, v, b, w = [], _ = typeof i;
                    if (r = r || e,
                    "undefined" === _ || "function" === _) {
                        for (n = !n.length && i.length ? ["require", "exports", "module"] : n,
                        v = 0; v < n.length; v += 1)
                            if ("require" === (u = (f = p(n[v], r)).f))
                                w[v] = h.require(e);
                            else if ("exports" === u)
                                w[v] = h.exports(e),
                                b = !0;
                            else if ("module" === u)
                                c = w[v] = h.module(e);
                            else if (o(g, u) || o(m, u) || o(y, u))
                                w[v] = l(u);
                            else {
                                if (!f.p)
                                    throw new Error(e + " missing " + u);
                                f.p.load(f.n, s(r, !0), a(u), {}),
                                w[v] = g[u]
                            }
                        d = i ? i.apply(g[e], w) : void 0,
                        e && (c && c.exports !== t && c.exports !== g[e] ? g[e] = c.exports : d === t && b || (g[e] = d))
                    } else
                        e && (g[e] = i)
                }
                ,
                e = n = f = function(e, n, i, o, r) {
                    if ("string" == typeof e)
                        return h[e] ? h[e](n) : l(p(e, n).f);
                    if (!e.splice) {
                        if ((v = e).deps && f(v.deps, v.callback),
                        !n)
                            return;
                        n.splice ? (e = n,
                        n = i,
                        i = null) : e = t
                    }
                    return n = n || function() {}
                    ,
                    "function" == typeof i && (i = o,
                    o = r),
                    o ? d(t, e, n, i) : setTimeout(function() {
                        d(t, e, n, i)
                    }, 4),
                    f
                }
                ,
                f.config = function(e) {
                    return f(e)
                }
                ,
                e._defined = g,
                (i = function(e, t, n) {
                    if ("string" != typeof e)
                        throw new Error("See almond README: incorrect module build, no module name");
                    t.splice || (n = t,
                    t = []),
                    o(g, e) || o(m, e) || (m[e] = [e, t, n])
                }
                ).amd = {
                    jQuery: !0
                }
            }(),
            t.requirejs = e,
            t.require = n,
            t.define = i)
        }(),
        t.define("almond", function() {}),
        t.define("jquery", [], function() {
            var t = e || $;
            return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
            t
        }),
        t.define("select2/utils", ["jquery"], function(e) {
            function t(e) {
                var t = e.prototype
                  , n = [];
                for (var i in t) {
                    "function" == typeof t[i] && "constructor" !== i && n.push(i)
                }
                return n
            }
            var n = {
                Extend: function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    var i = {}.hasOwnProperty;
                    for (var o in t)
                        i.call(t, o) && (e[o] = t[o]);
                    return n.prototype = t.prototype,
                    e.prototype = new n,
                    e.__super__ = t.prototype,
                    e
                },
                Decorate: function(e, n) {
                    function i() {
                        var t = Array.prototype.unshift
                          , i = n.prototype.constructor.length
                          , o = e.prototype.constructor;
                        i > 0 && (t.call(arguments, e.prototype.constructor),
                        o = n.prototype.constructor),
                        o.apply(this, arguments)
                    }
                    var o = t(n)
                      , r = t(e);
                    n.displayName = e.displayName,
                    i.prototype = new function() {
                        this.constructor = i
                    }
                    ;
                    for (var s = 0; s < r.length; s++) {
                        var a = r[s];
                        i.prototype[a] = e.prototype[a]
                    }
                    for (var l = function(e) {
                        var t = function() {};
                        e in i.prototype && (t = i.prototype[e]);
                        var o = n.prototype[e];
                        return function() {
                            return Array.prototype.unshift.call(arguments, t),
                            o.apply(this, arguments)
                        }
                    }, c = 0; c < o.length; c++) {
                        var u = o[c];
                        i.prototype[u] = l(u)
                    }
                    return i
                }
            }
              , i = function() {
                this.listeners = {}
            };
            return i.prototype.on = function(e, t) {
                this.listeners = this.listeners || {},
                e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
            }
            ,
            i.prototype.trigger = function(e) {
                var t = Array.prototype.slice
                  , n = t.call(arguments, 1);
                this.listeners = this.listeners || {},
                null == n && (n = []),
                0 === n.length && n.push({}),
                n[0]._type = e,
                e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)),
                "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
            }
            ,
            i.prototype.invoke = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    e[n].apply(this, t)
            }
            ,
            n.Observable = i,
            n.generateChars = function(e) {
                for (var t = "", n = 0; e > n; n++) {
                    t += Math.floor(36 * Math.random()).toString(36)
                }
                return t
            }
            ,
            n.bind = function(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }
            ,
            n._convertData = function(e) {
                for (var t in e) {
                    var n = t.split("-")
                      , i = e;
                    if (1 !== n.length) {
                        for (var o = 0; o < n.length; o++) {
                            var r = n[o];
                            (r = r.substring(0, 1).toLowerCase() + r.substring(1))in i || (i[r] = {}),
                            o == n.length - 1 && (i[r] = e[t]),
                            i = i[r]
                        }
                        delete e[t]
                    }
                }
                return e
            }
            ,
            n.hasScroll = function(t, n) {
                var i = e(n)
                  , o = n.style.overflowX
                  , r = n.style.overflowY;
                return (o !== r || "hidden" !== r && "visible" !== r) && ("scroll" === o || "scroll" === r || (i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth))
            }
            ,
            n.escapeMarkup = function(e) {
                var t = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                    return t[e]
                })
            }
            ,
            n.appendMany = function(t, n) {
                if ("1.7" === e.fn.jquery.substr(0, 3)) {
                    var i = e();
                    e.map(n, function(e) {
                        i = i.add(e)
                    }),
                    n = i
                }
                t.append(n)
            }
            ,
            n
        }),
        t.define("select2/results", ["jquery", "./utils"], function(e, t) {
            function n(e, t, i) {
                this.$element = e,
                this.data = i,
                this.options = t,
                n.__super__.constructor.call(this)
            }
            return t.Extend(n, t.Observable),
            n.prototype.render = function() {
                var t = e('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && t.attr("aria-multiselectable", "true"),
                this.$results = t,
                t
            }
            ,
            n.prototype.clear = function() {
                this.$results.empty()
            }
            ,
            n.prototype.displayMessage = function(t) {
                var n = this.options.get("escapeMarkup");
                this.clear(),
                this.hideLoading();
                var i = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>')
                  , o = this.options.get("translations").get(t.message);
                i.append(n(o(t.args))),
                i[0].className += " select2-results__message",
                this.$results.append(i)
            }
            ,
            n.prototype.hideMessages = function() {
                this.$results.find(".select2-results__message").remove()
            }
            ,
            n.prototype.append = function(e) {
                this.hideLoading();
                var t = [];
                if (null != e.results && 0 !== e.results.length) {
                    e.results = this.sort(e.results);
                    for (var n = 0; n < e.results.length; n++) {
                        var i = e.results[n]
                          , o = this.option(i);
                        t.push(o)
                    }
                    this.$results.append(t)
                } else
                    0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    })
            }
            ,
            n.prototype.position = function(e, t) {
                t.find(".select2-results").append(e)
            }
            ,
            n.prototype.sort = function(e) {
                return this.options.get("sorter")(e)
            }
            ,
            n.prototype.highlightFirstItem = function() {
                var e = this.$results.find(".select2-results__option[aria-selected]")
                  , t = e.filter("[aria-selected=true]");
                t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"),
                this.ensureHighlightVisible()
            }
            ,
            n.prototype.setClasses = function() {
                var t = this;
                this.data.current(function(n) {
                    var i = e.map(n, function(e) {
                        return e.id.toString()
                    });
                    t.$results.find(".select2-results__option[aria-selected]").each(function() {
                        var t = e(this)
                          , n = e.data(this, "data")
                          , o = "" + n.id;
                        null != n.element && n.element.selected || null == n.element && e.inArray(o, i) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                    })
                })
            }
            ,
            n.prototype.showLoading = function(e) {
                this.hideLoading();
                var t = {
                    disabled: !0,
                    loading: !0,
                    text: this.options.get("translations").get("searching")(e)
                }
                  , n = this.option(t);
                n.className += " loading-results",
                this.$results.prepend(n)
            }
            ,
            n.prototype.hideLoading = function() {
                this.$results.find(".loading-results").remove()
            }
            ,
            n.prototype.option = function(t) {
                var n = document.createElement("li");
                n.className = "select2-results__option";
                var i = {
                    role: "treeitem",
                    "aria-selected": "false"
                };
                for (var o in t.disabled && (delete i["aria-selected"],
                i["aria-disabled"] = "true"),
                null == t.id && delete i["aria-selected"],
                null != t._resultId && (n.id = t._resultId),
                t.title && (n.title = t.title),
                t.children && (i.role = "group",
                i["aria-label"] = t.text,
                delete i["aria-selected"]),
                i) {
                    var r = i[o];
                    n.setAttribute(o, r)
                }
                if (t.children) {
                    var s = e(n)
                      , a = document.createElement("strong");
                    a.className = "select2-results__group",
                    e(a),
                    this.template(t, a);
                    for (var l = [], c = 0; c < t.children.length; c++) {
                        var u = t.children[c]
                          , d = this.option(u);
                        l.push(d)
                    }
                    var f = e("<ul></ul>", {
                        class: "select2-results__options select2-results__options--nested"
                    });
                    f.append(l),
                    s.append(a),
                    s.append(f)
                } else
                    this.template(t, n);
                return e.data(n, "data", t),
                n
            }
            ,
            n.prototype.bind = function(t, n) {
                var i = this
                  , o = t.id + "-results";
                this.$results.attr("id", o),
                t.on("results:all", function(e) {
                    i.clear(),
                    i.append(e.data),
                    t.isOpen() && (i.setClasses(),
                    i.highlightFirstItem())
                }),
                t.on("results:append", function(e) {
                    i.append(e.data),
                    t.isOpen() && i.setClasses()
                }),
                t.on("query", function(e) {
                    i.hideMessages(),
                    i.showLoading(e)
                }),
                t.on("select", function() {
                    t.isOpen() && (i.setClasses(),
                    i.highlightFirstItem())
                }),
                t.on("unselect", function() {
                    t.isOpen() && (i.setClasses(),
                    i.highlightFirstItem())
                }),
                t.on("open", function() {
                    i.$results.attr("aria-expanded", "true"),
                    i.$results.attr("aria-hidden", "false"),
                    i.setClasses(),
                    i.ensureHighlightVisible()
                }),
                t.on("close", function() {
                    i.$results.attr("aria-expanded", "false"),
                    i.$results.attr("aria-hidden", "true"),
                    i.$results.removeAttr("aria-activedescendant")
                }),
                t.on("results:toggle", function() {
                    var e = i.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup")
                }),
                t.on("results:select", function() {
                    var e = i.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = e.data("data");
                        "true" == e.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", {
                            data: t
                        })
                    }
                }),
                t.on("results:previous", function() {
                    var e = i.getHighlightedResults()
                      , t = i.$results.find("[aria-selected]")
                      , n = t.index(e);
                    if (0 !== n) {
                        var o = n - 1;
                        0 === e.length && (o = 0);
                        var r = t.eq(o);
                        r.trigger("mouseenter");
                        var s = i.$results.offset().top
                          , a = r.offset().top
                          , l = i.$results.scrollTop() + (a - s);
                        0 === o ? i.$results.scrollTop(0) : 0 > a - s && i.$results.scrollTop(l)
                    }
                }),
                t.on("results:next", function() {
                    var e = i.getHighlightedResults()
                      , t = i.$results.find("[aria-selected]")
                      , n = t.index(e) + 1;
                    if (!(n >= t.length)) {
                        var o = t.eq(n);
                        o.trigger("mouseenter");
                        var r = i.$results.offset().top + i.$results.outerHeight(!1)
                          , s = o.offset().top + o.outerHeight(!1)
                          , a = i.$results.scrollTop() + s - r;
                        0 === n ? i.$results.scrollTop(0) : s > r && i.$results.scrollTop(a)
                    }
                }),
                t.on("results:focus", function(e) {
                    e.element.addClass("select2-results__option--highlighted")
                }),
                t.on("results:message", function(e) {
                    i.displayMessage(e)
                }),
                e.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                    var t = i.$results.scrollTop()
                      , n = i.$results.get(0).scrollHeight - t + e.deltaY
                      , o = e.deltaY > 0 && t - e.deltaY <= 0
                      , r = e.deltaY < 0 && n <= i.$results.height();
                    o ? (i.$results.scrollTop(0),
                    e.preventDefault(),
                    e.stopPropagation()) : r && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()),
                    e.preventDefault(),
                    e.stopPropagation())
                }),
                this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(t) {
                    var n = e(this)
                      , o = n.data("data");
                    return "true" === n.attr("aria-selected") ? void (i.options.get("multiple") ? i.trigger("unselect", {
                        originalEvent: t,
                        data: o
                    }) : i.trigger("close", {})) : void i.trigger("select", {
                        originalEvent: t,
                        data: o
                    })
                }),
                this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(t) {
                    var n = e(this).data("data");
                    i.getHighlightedResults().removeClass("select2-results__option--highlighted"),
                    i.trigger("results:focus", {
                        data: n,
                        element: e(this)
                    })
                })
            }
            ,
            n.prototype.getHighlightedResults = function() {
                return this.$results.find(".select2-results__option--highlighted")
            }
            ,
            n.prototype.destroy = function() {
                this.$results.remove()
            }
            ,
            n.prototype.ensureHighlightVisible = function() {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                    var t = this.$results.find("[aria-selected]").index(e)
                      , n = this.$results.offset().top
                      , i = e.offset().top
                      , o = this.$results.scrollTop() + (i - n)
                      , r = i - n;
                    o -= 2 * e.outerHeight(!1),
                    2 >= t ? this.$results.scrollTop(0) : (r > this.$results.outerHeight() || 0 > r) && this.$results.scrollTop(o)
                }
            }
            ,
            n.prototype.template = function(t, n) {
                var i = this.options.get("templateResult")
                  , o = this.options.get("escapeMarkup")
                  , r = i(t, n);
                null == r ? n.style.display = "none" : "string" == typeof r ? n.innerHTML = o(r) : e(n).append(r)
            }
            ,
            n
        }),
        t.define("select2/keys", [], function() {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            }
        }),
        t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(e, t, n) {
            function i(e, t) {
                this.$element = e,
                this.options = t,
                i.__super__.constructor.call(this)
            }
            return t.Extend(i, t.Observable),
            i.prototype.render = function() {
                var t = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0,
                null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                t.attr("title", this.$element.attr("title")),
                t.attr("tabindex", this._tabindex),
                this.$selection = t,
                t
            }
            ,
            i.prototype.bind = function(e, t) {
                var i = this
                  , o = (e.id,
                e.id + "-results");
                this.container = e,
                this.$selection.on("focus", function(e) {
                    i.trigger("focus", e)
                }),
                this.$selection.on("blur", function(e) {
                    i._handleBlur(e)
                }),
                this.$selection.on("keydown", function(e) {
                    i.trigger("keypress", e),
                    e.which === n.SPACE && e.preventDefault()
                }),
                e.on("results:focus", function(e) {
                    i.$selection.attr("aria-activedescendant", e.data._resultId)
                }),
                e.on("selection:update", function(e) {
                    i.update(e.data)
                }),
                e.on("open", function() {
                    i.$selection.attr("aria-expanded", "true"),
                    i.$selection.attr("aria-owns", o),
                    i._attachCloseHandler(e)
                }),
                e.on("close", function() {
                    i.$selection.attr("aria-expanded", "false"),
                    i.$selection.removeAttr("aria-activedescendant"),
                    i.$selection.removeAttr("aria-owns"),
                    i.$selection.focus(),
                    i._detachCloseHandler(e)
                }),
                e.on("enable", function() {
                    i.$selection.attr("tabindex", i._tabindex)
                }),
                e.on("disable", function() {
                    i.$selection.attr("tabindex", "-1")
                })
            }
            ,
            i.prototype._handleBlur = function(t) {
                var n = this;
                window.setTimeout(function() {
                    document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                }, 1)
            }
            ,
            i.prototype._attachCloseHandler = function(t) {
                e(document.body).on("mousedown.select2." + t.id, function(t) {
                    var n = e(t.target).closest(".select2");
                    e(".select2.select2-container--open").each(function() {
                        var t = e(this);
                        this != n[0] && t.data("element").select2("close")
                    })
                })
            }
            ,
            i.prototype._detachCloseHandler = function(t) {
                e(document.body).off("mousedown.select2." + t.id)
            }
            ,
            i.prototype.position = function(e, t) {
                t.find(".selection").append(e)
            }
            ,
            i.prototype.destroy = function() {
                this._detachCloseHandler(this.container)
            }
            ,
            i.prototype.update = function(e) {
                throw new Error("The `update` method must be defined in child classes.")
            }
            ,
            i
        }),
        t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n, i) {
            function o() {
                o.__super__.constructor.apply(this, arguments)
            }
            return n.Extend(o, t),
            o.prototype.render = function() {
                var e = o.__super__.render.call(this);
                return e.addClass("select2-selection--single"),
                e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),
                e
            }
            ,
            o.prototype.bind = function(e, t) {
                var n = this;
                o.__super__.bind.apply(this, arguments);
                var i = e.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", i),
                this.$selection.attr("aria-labelledby", i),
                this.$selection.on("mousedown", function(e) {
                    1 === e.which && n.trigger("toggle", {
                        originalEvent: e
                    })
                }),
                this.$selection.on("focus", function(e) {}),
                this.$selection.on("blur", function(e) {}),
                e.on("focus", function(t) {
                    e.isOpen() || n.$selection.focus()
                }),
                e.on("selection:update", function(e) {
                    n.update(e.data)
                })
            }
            ,
            o.prototype.clear = function() {
                this.$selection.find(".select2-selection__rendered").empty()
            }
            ,
            o.prototype.display = function(e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t))
            }
            ,
            o.prototype.selectionContainer = function() {
                return e("<span></span>")
            }
            ,
            o.prototype.update = function(e) {
                if (0 !== e.length) {
                    var t = e[0]
                      , n = this.$selection.find(".select2-selection__rendered")
                      , i = this.display(t, n);
                    n.empty().append(i),
                    n.prop("title", t.title || t.text)
                } else
                    this.clear()
            }
            ,
            o
        }),
        t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(e, t, n) {
            function i(e, t) {
                i.__super__.constructor.apply(this, arguments)
            }
            return n.Extend(i, t),
            i.prototype.render = function() {
                var e = i.__super__.render.call(this);
                return e.addClass("select2-selection--multiple"),
                e.html('<ul class="select2-selection__rendered"></ul>'),
                e
            }
            ,
            i.prototype.bind = function(t, n) {
                var o = this;
                i.__super__.bind.apply(this, arguments),
                this.$selection.on("click", function(e) {
                    o.trigger("toggle", {
                        originalEvent: e
                    })
                }),
                this.$selection.on("click", ".select2-selection__choice__remove", function(t) {
                    if (!o.options.get("disabled")) {
                        var n = e(this).parent().data("data");
                        o.trigger("unselect", {
                            originalEvent: t,
                            data: n
                        })
                    }
                })
            }
            ,
            i.prototype.clear = function() {
                this.$selection.find(".select2-selection__rendered").empty()
            }
            ,
            i.prototype.display = function(e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t))
            }
            ,
            i.prototype.selectionContainer = function() {
                return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
            }
            ,
            i.prototype.update = function(e) {
                if (this.clear(),
                0 !== e.length) {
                    for (var t = [], i = 0; i < e.length; i++) {
                        var o = e[i]
                          , r = this.selectionContainer()
                          , s = this.display(o, r);
                        r.append(s),
                        r.prop("title", o.title || o.text),
                        r.data("data", o),
                        t.push(r)
                    }
                    var a = this.$selection.find(".select2-selection__rendered");
                    n.appendMany(a, t)
                }
            }
            ,
            i
        }),
        t.define("select2/selection/placeholder", ["../utils"], function(e) {
            function t(e, t, n) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                e.call(this, t, n)
            }
            return t.prototype.normalizePlaceholder = function(e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }),
                t
            }
            ,
            t.prototype.createPlaceholder = function(e, t) {
                var n = this.selectionContainer();
                return n.html(this.display(t)),
                n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),
                n
            }
            ,
            t.prototype.update = function(e, t) {
                var n = 1 == t.length && t[0].id != this.placeholder.id;
                if (t.length > 1 || n)
                    return e.call(this, t);
                this.clear();
                var i = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(i)
            }
            ,
            t
        }),
        t.define("select2/selection/allowClear", ["jquery", "../keys"], function(e, t) {
            function n() {}
            return n.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n),
                null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
                this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                    i._handleClear(e)
                }),
                t.on("keypress", function(e) {
                    i._handleKeyboardClear(e, t)
                })
            }
            ,
            n.prototype._handleClear = function(e, t) {
                if (!this.options.get("disabled")) {
                    var n = this.$selection.find(".select2-selection__clear");
                    if (0 !== n.length) {
                        t.stopPropagation();
                        for (var i = n.data("data"), o = 0; o < i.length; o++) {
                            var r = {
                                data: i[o]
                            };
                            if (this.trigger("unselect", r),
                            r.prevented)
                                return
                        }
                        this.$element.val(this.placeholder.id).trigger("change"),
                        this.trigger("toggle", {})
                    }
                }
            }
            ,
            n.prototype._handleKeyboardClear = function(e, n, i) {
                i.isOpen() || (n.which == t.DELETE || n.which == t.BACKSPACE) && this._handleClear(n)
            }
            ,
            n.prototype.update = function(t, n) {
                if (t.call(this, n),
                !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                    var i = e('<span class="select2-selection__clear">&times;</span>');
                    i.data("data", n),
                    this.$selection.find(".select2-selection__rendered").prepend(i)
                }
            }
            ,
            n
        }),
        t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(e, t, n) {
            function i(e, t, n) {
                e.call(this, t, n)
            }
            return i.prototype.render = function(t) {
                var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = n,
                this.$search = n.find("input");
                var i = t.call(this);
                return this._transferTabIndex(),
                i
            }
            ,
            i.prototype.bind = function(e, t, i) {
                var o = this;
                e.call(this, t, i),
                t.on("open", function() {
                    o.$search.trigger("focus")
                }),
                t.on("close", function() {
                    o.$search.val(""),
                    o.$search.removeAttr("aria-activedescendant"),
                    o.$search.trigger("focus")
                }),
                t.on("enable", function() {
                    o.$search.prop("disabled", !1),
                    o._transferTabIndex()
                }),
                t.on("disable", function() {
                    o.$search.prop("disabled", !0)
                }),
                t.on("focus", function(e) {
                    o.$search.trigger("focus")
                }),
                t.on("results:focus", function(e) {
                    o.$search.attr("aria-activedescendant", e.id)
                }),
                this.$selection.on("focusin", ".select2-search--inline", function(e) {
                    o.trigger("focus", e)
                }),
                this.$selection.on("focusout", ".select2-search--inline", function(e) {
                    o._handleBlur(e)
                }),
                this.$selection.on("keydown", ".select2-search--inline", function(e) {
                    if (e.stopPropagation(),
                    o.trigger("keypress", e),
                    o._keyUpPrevented = e.isDefaultPrevented(),
                    e.which === n.BACKSPACE && "" === o.$search.val()) {
                        var t = o.$searchContainer.prev(".select2-selection__choice");
                        if (t.length > 0) {
                            var i = t.data("data");
                            o.searchRemoveChoice(i),
                            e.preventDefault()
                        }
                    }
                });
                var r = document.documentMode
                  , s = r && 11 >= r;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function(e) {
                    return s ? void o.$selection.off("input.search input.searchcheck") : void o.$selection.off("keyup.search")
                }),
                this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                    if (s && "input" === e.type)
                        o.$selection.off("input.search input.searchcheck");
                    else {
                        var t = e.which;
                        t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && o.handleSearch(e)
                    }
                })
            }
            ,
            i.prototype._transferTabIndex = function(e) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                this.$selection.attr("tabindex", "-1")
            }
            ,
            i.prototype.createPlaceholder = function(e, t) {
                this.$search.attr("placeholder", t.text)
            }
            ,
            i.prototype.update = function(e, t) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""),
                e.call(this, t),
                this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),
                this.resizeSearch(),
                n && this.$search.focus()
            }
            ,
            i.prototype.handleSearch = function() {
                if (this.resizeSearch(),
                !this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {
                        term: e
                    })
                }
                this._keyUpPrevented = !1
            }
            ,
            i.prototype.searchRemoveChoice = function(e, t) {
                this.trigger("unselect", {
                    data: t
                }),
                this.$search.val(t.text),
                this.handleSearch()
            }
            ,
            i.prototype.resizeSearch = function() {
                this.$search.css("width", "25px");
                var e = "";
                "" !== this.$search.attr("placeholder") ? e = this.$selection.find(".select2-selection__rendered").innerWidth() : e = .75 * (this.$search.val().length + 1) + "em";
                this.$search.css("width", e)
            }
            ,
            i
        }),
        t.define("select2/selection/eventRelay", ["jquery"], function(e) {
            function t() {}
            return t.prototype.bind = function(t, n, i) {
                var o = this
                  , r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"]
                  , s = ["opening", "closing", "selecting", "unselecting"];
                t.call(this, n, i),
                n.on("*", function(t, n) {
                    if (-1 !== e.inArray(t, r)) {
                        n = n || {};
                        var i = e.Event("select2:" + t, {
                            params: n
                        });
                        o.$element.trigger(i),
                        -1 !== e.inArray(t, s) && (n.prevented = i.isDefaultPrevented())
                    }
                })
            }
            ,
            t
        }),
        t.define("select2/translation", ["jquery", "require"], function(e, t) {
            function n(e) {
                this.dict = e || {}
            }
            return n.prototype.all = function() {
                return this.dict
            }
            ,
            n.prototype.get = function(e) {
                return this.dict[e]
            }
            ,
            n.prototype.extend = function(t) {
                this.dict = e.extend({}, t.all(), this.dict)
            }
            ,
            n._cache = {},
            n.loadPath = function(e) {
                if (!(e in n._cache)) {
                    var i = t(e);
                    n._cache[e] = i
                }
                return new n(n._cache[e])
            }
            ,
            n
        }),
        t.define("select2/diacritics", [], function() {
            return {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ω": "ω",
                "ς": "σ"
            }
        }),
        t.define("select2/data/base", ["../utils"], function(e) {
            function t(e, n) {
                t.__super__.constructor.call(this)
            }
            return e.Extend(t, e.Observable),
            t.prototype.current = function(e) {
                throw new Error("The `current` method must be defined in child classes.")
            }
            ,
            t.prototype.query = function(e, t) {
                throw new Error("The `query` method must be defined in child classes.")
            }
            ,
            t.prototype.bind = function(e, t) {}
            ,
            t.prototype.destroy = function() {}
            ,
            t.prototype.generateResultId = function(t, n) {
                var i = t.id + "-result-";
                return (i += e.generateChars(4)) + (null != n.id ? "-" + n.id.toString() : "-" + e.generateChars(4))
            }
            ,
            t
        }),
        t.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, n) {
            function i(e, t) {
                this.$element = e,
                this.options = t,
                i.__super__.constructor.call(this)
            }
            return t.Extend(i, e),
            i.prototype.current = function(e) {
                var t = []
                  , i = this;
                this.$element.find(":selected").each(function() {
                    var e = n(this)
                      , o = i.item(e);
                    t.push(o)
                }),
                e(t)
            }
            ,
            i.prototype.select = function(e) {
                var t = this;
                if (e.selected = !0,
                n(e.element).is("option"))
                    return e.element.selected = !0,
                    void this.$element.trigger("change");
                if (this.$element.prop("multiple"))
                    this.current(function(i) {
                        var o = [];
                        (e = [e]).push.apply(e, i);
                        for (var r = 0; r < e.length; r++) {
                            var s = e[r].id;
                            -1 === n.inArray(s, o) && o.push(s)
                        }
                        t.$element.val(o),
                        t.$element.trigger("change")
                    });
                else {
                    var i = e.id;
                    this.$element.val(i),
                    this.$element.trigger("change")
                }
            }
            ,
            i.prototype.unselect = function(e) {
                var t = this;
                if (this.$element.prop("multiple"))
                    return e.selected = !1,
                    n(e.element).is("option") ? (e.element.selected = !1,
                    void this.$element.trigger("change")) : void this.current(function(i) {
                        for (var o = [], r = 0; r < i.length; r++) {
                            var s = i[r].id;
                            s !== e.id && -1 === n.inArray(s, o) && o.push(s)
                        }
                        t.$element.val(o),
                        t.$element.trigger("change")
                    })
            }
            ,
            i.prototype.bind = function(e, t) {
                var n = this;
                this.container = e,
                e.on("select", function(e) {
                    n.select(e.data)
                }),
                e.on("unselect", function(e) {
                    n.unselect(e.data)
                })
            }
            ,
            i.prototype.destroy = function() {
                this.$element.find("*").each(function() {
                    n.removeData(this, "data")
                })
            }
            ,
            i.prototype.query = function(e, t) {
                var i = []
                  , o = this;
                this.$element.children().each(function() {
                    var t = n(this);
                    if (t.is("option") || t.is("optgroup")) {
                        var r = o.item(t)
                          , s = o.matches(e, r);
                        null !== s && i.push(s)
                    }
                }),
                t({
                    results: i
                })
            }
            ,
            i.prototype.addOptions = function(e) {
                t.appendMany(this.$element, e)
            }
            ,
            i.prototype.option = function(e) {
                var t;
                e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text,
                e.id && (t.value = e.id),
                e.disabled && (t.disabled = !0),
                e.selected && (t.selected = !0),
                e.title && (t.title = e.title);
                var i = n(t)
                  , o = this._normalizeItem(e);
                return o.element = t,
                n.data(t, "data", o),
                i
            }
            ,
            i.prototype.item = function(e) {
                var t = {};
                if (null != (t = n.data(e[0], "data")))
                    return t;
                if (e.is("option"))
                    t = {
                        id: e.val(),
                        text: e.text(),
                        disabled: e.prop("disabled"),
                        selected: e.prop("selected"),
                        title: e.prop("title")
                    };
                else if (e.is("optgroup")) {
                    t = {
                        text: e.prop("label"),
                        children: [],
                        title: e.prop("title")
                    };
                    for (var i = e.children("option"), o = [], r = 0; r < i.length; r++) {
                        var s = n(i[r])
                          , a = this.item(s);
                        o.push(a)
                    }
                    t.children = o
                }
                return (t = this._normalizeItem(t)).element = e[0],
                n.data(e[0], "data", t),
                t
            }
            ,
            i.prototype._normalizeItem = function(e) {
                n.isPlainObject(e) || (e = {
                    id: e,
                    text: e
                });
                return null != (e = n.extend({}, {
                    text: ""
                }, e)).id && (e.id = e.id.toString()),
                null != e.text && (e.text = e.text.toString()),
                null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)),
                n.extend({}, {
                    selected: !1,
                    disabled: !1
                }, e)
            }
            ,
            i.prototype.matches = function(e, t) {
                return this.options.get("matcher")(e, t)
            }
            ,
            i
        }),
        t.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, t, n) {
            function i(e, t) {
                var n = t.get("data") || [];
                i.__super__.constructor.call(this, e, t),
                this.addOptions(this.convertToOptions(n))
            }
            return t.Extend(i, e),
            i.prototype.select = function(e) {
                var t = this.$element.find("option").filter(function(t, n) {
                    return n.value == e.id.toString()
                });
                0 === t.length && (t = this.option(e),
                this.addOptions(t)),
                i.__super__.select.call(this, e)
            }
            ,
            i.prototype.convertToOptions = function(e) {
                function i(e) {
                    return function() {
                        return n(this).val() == e.id
                    }
                }
                for (var o = this, r = this.$element.find("option"), s = r.map(function() {
                    return o.item(n(this)).id
                }).get(), a = [], l = 0; l < e.length; l++) {
                    var c = this._normalizeItem(e[l]);
                    if (n.inArray(c.id, s) >= 0) {
                        var u = r.filter(i(c))
                          , d = this.item(u)
                          , f = n.extend(!0, {}, c, d)
                          , p = this.option(f);
                        u.replaceWith(p)
                    } else {
                        var h = this.option(c);
                        if (c.children) {
                            var g = this.convertToOptions(c.children);
                            t.appendMany(h, g)
                        }
                        a.push(h)
                    }
                }
                return a
            }
            ,
            i
        }),
        t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, n) {
            function i(e, t) {
                this.ajaxOptions = this._applyDefaults(t.get("ajax")),
                null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
                i.__super__.constructor.call(this, e, t)
            }
            return t.Extend(i, e),
            i.prototype._applyDefaults = function(e) {
                var t = {
                    data: function(e) {
                        return n.extend({}, e, {
                            q: e.term
                        })
                    },
                    transport: function(e, t, i) {
                        var o = n.ajax(e);
                        return o.then(t),
                        o.fail(i),
                        o
                    }
                };
                return n.extend({}, t, e, !0)
            }
            ,
            i.prototype.processResults = function(e) {
                return e
            }
            ,
            i.prototype.query = function(e, t) {
                function i() {
                    var i = r.transport(r, function(i) {
                        var r = o.processResults(i, e);
                        o.options.get("debug") && window.console && console.error && (r && r.results && n.isArray(r.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),
                        t(r)
                    }, function() {
                        i.status && "0" === i.status || o.trigger("results:message", {
                            message: "errorLoading"
                        })
                    });
                    o._request = i
                }
                var o = this;
                null != this._request && (n.isFunction(this._request.abort) && this._request.abort(),
                this._request = null);
                var r = n.extend({
                    type: "GET"
                }, this.ajaxOptions);
                "function" == typeof r.url && (r.url = r.url.call(this.$element, e)),
                "function" == typeof r.data && (r.data = r.data.call(this.$element, e)),
                this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
                this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
            }
            ,
            i
        }),
        t.define("select2/data/tags", ["jquery"], function(e) {
            function t(t, n, i) {
                var o = i.get("tags")
                  , r = i.get("createTag");
                void 0 !== r && (this.createTag = r);
                var s = i.get("insertTag");
                if (void 0 !== s && (this.insertTag = s),
                t.call(this, n, i),
                e.isArray(o))
                    for (var a = 0; a < o.length; a++) {
                        var l = o[a]
                          , c = this._normalizeItem(l)
                          , u = this.option(c);
                        this.$element.append(u)
                    }
            }
            return t.prototype.query = function(e, t, n) {
                var i = this;
                return this._removeOldTags(),
                null == t.term || null != t.page ? void e.call(this, t, n) : void e.call(this, t, function e(o, r) {
                    for (var s = o.results, a = 0; a < s.length; a++) {
                        var l = s[a]
                          , c = null != l.children && !e({
                            results: l.children
                        }, !0);
                        if (l.text === t.term || c)
                            return !r && (o.data = s,
                            void n(o))
                    }
                    if (r)
                        return !0;
                    var u = i.createTag(t);
                    if (null != u) {
                        var d = i.option(u);
                        d.attr("data-select2-tag", !0),
                        i.addOptions([d]),
                        i.insertTag(s, u)
                    }
                    o.results = s,
                    n(o)
                })
            }
            ,
            t.prototype.createTag = function(t, n) {
                var i = e.trim(n.term);
                return "" === i ? null : {
                    id: i,
                    text: i
                }
            }
            ,
            t.prototype.insertTag = function(e, t, n) {
                t.unshift(n)
            }
            ,
            t.prototype._removeOldTags = function(t) {
                (this._lastTag,
                this.$element.find("option[data-select2-tag]")).each(function() {
                    this.selected || e(this).remove()
                })
            }
            ,
            t
        }),
        t.define("select2/data/tokenizer", ["jquery"], function(e) {
            function t(e, t, n) {
                var i = n.get("tokenizer");
                void 0 !== i && (this.tokenizer = i),
                e.call(this, t, n)
            }
            return t.prototype.bind = function(e, t, n) {
                e.call(this, t, n),
                this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
            }
            ,
            t.prototype.query = function(t, n, i) {
                var o = this;
                n.term = n.term || "";
                var r = this.tokenizer(n, this.options, function(t) {
                    var n = o._normalizeItem(t);
                    if (!o.$element.find("option").filter(function() {
                        return e(this).val() === n.id
                    }).length) {
                        var i = o.option(n);
                        i.attr("data-select2-tag", !0),
                        o._removeOldTags(),
                        o.addOptions([i])
                    }
                    !function(e) {
                        o.trigger("select", {
                            data: e
                        })
                    }(n)
                });
                r.term !== n.term && (this.$search.length && (this.$search.val(r.term),
                this.$search.focus()),
                n.term = r.term),
                t.call(this, n, i)
            }
            ,
            t.prototype.tokenizer = function(t, n, i, o) {
                for (var r = i.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function(e) {
                    return {
                        id: e.term,
                        text: e.term
                    }
                }
                ; a < s.length; ) {
                    var c = s[a];
                    if (-1 !== e.inArray(c, r)) {
                        var u = s.substr(0, a)
                          , d = l(e.extend({}, n, {
                            term: u
                        }));
                        null != d ? (o(d),
                        s = s.substr(a + 1) || "",
                        a = 0) : a++
                    } else
                        a++
                }
                return {
                    term: s
                }
            }
            ,
            t
        }),
        t.define("select2/data/minimumInputLength", [], function() {
            function e(e, t, n) {
                this.minimumInputLength = n.get("minimumInputLength"),
                e.call(this, t, n)
            }
            return e.prototype.query = function(e, t, n) {
                return t.term = t.term || "",
                t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                        minimum: this.minimumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : void e.call(this, t, n)
            }
            ,
            e
        }),
        t.define("select2/data/maximumInputLength", [], function() {
            function e(e, t, n) {
                this.maximumInputLength = n.get("maximumInputLength"),
                e.call(this, t, n)
            }
            return e.prototype.query = function(e, t, n) {
                return t.term = t.term || "",
                this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                        maximum: this.maximumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : void e.call(this, t, n)
            }
            ,
            e
        }),
        t.define("select2/data/maximumSelectionLength", [], function() {
            function e(e, t, n) {
                this.maximumSelectionLength = n.get("maximumSelectionLength"),
                e.call(this, t, n)
            }
            return e.prototype.query = function(e, t, n) {
                var i = this;
                this.current(function(o) {
                    var r = null != o ? o.length : 0;
                    return i.maximumSelectionLength > 0 && r >= i.maximumSelectionLength ? void i.trigger("results:message", {
                        message: "maximumSelected",
                        args: {
                            maximum: i.maximumSelectionLength
                        }
                    }) : void e.call(i, t, n)
                })
            }
            ,
            e
        }),
        t.define("select2/dropdown", ["jquery", "./utils"], function(e, t) {
            function n(e, t) {
                this.$element = e,
                this.options = t,
                n.__super__.constructor.call(this)
            }
            return t.Extend(n, t.Observable),
            n.prototype.render = function() {
                var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return t.attr("dir", this.options.get("dir")),
                this.$dropdown = t,
                t
            }
            ,
            n.prototype.bind = function() {}
            ,
            n.prototype.position = function(e, t) {}
            ,
            n.prototype.destroy = function() {
                this.$dropdown.remove()
            }
            ,
            n
        }),
        t.define("select2/dropdown/search", ["jquery", "../utils"], function(e, t) {
            function n() {}
            return n.prototype.render = function(t) {
                var n = t.call(this)
                  , i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = i,
                this.$search = i.find("input"),
                n.prepend(i),
                n
            }
            ,
            n.prototype.bind = function(t, n, i) {
                var o = this;
                t.call(this, n, i),
                this.$search.on("keydown", function(e) {
                    o.trigger("keypress", e),
                    o._keyUpPrevented = e.isDefaultPrevented()
                }),
                this.$search.on("input", function(t) {
                    e(this).off("keyup")
                }),
                this.$search.on("keyup input", function(e) {
                    o.handleSearch(e)
                }),
                n.on("open", function() {
                    o.$search.attr("tabindex", 0),
                    o.$search.focus(),
                    window.setTimeout(function() {
                        o.$search.focus()
                    }, 0)
                }),
                n.on("close", function() {
                    o.$search.attr("tabindex", -1),
                    o.$search.val("")
                }),
                n.on("focus", function() {
                    n.isOpen() && o.$search.focus()
                }),
                n.on("results:all", function(e) {
                    null != e.query.term && "" !== e.query.term || (o.showSearch(e) ? o.$searchContainer.removeClass("select2-search--hide") : o.$searchContainer.addClass("select2-search--hide"))
                })
            }
            ,
            n.prototype.handleSearch = function(e) {
                if (!this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {
                        term: t
                    })
                }
                this._keyUpPrevented = !1
            }
            ,
            n.prototype.showSearch = function(e, t) {
                return !0
            }
            ,
            n
        }),
        t.define("select2/dropdown/hidePlaceholder", [], function() {
            function e(e, t, n, i) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                e.call(this, t, n, i)
            }
            return e.prototype.append = function(e, t) {
                t.results = this.removePlaceholder(t.results),
                e.call(this, t)
            }
            ,
            e.prototype.normalizePlaceholder = function(e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }),
                t
            }
            ,
            e.prototype.removePlaceholder = function(e, t) {
                for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                    var o = t[i];
                    this.placeholder.id === o.id && n.splice(i, 1)
                }
                return n
            }
            ,
            e
        }),
        t.define("select2/dropdown/infiniteScroll", ["jquery"], function(e) {
            function t(e, t, n, i) {
                this.lastParams = {},
                e.call(this, t, n, i),
                this.$loadingMore = this.createLoadingMore(),
                this.loading = !1
            }
            return t.prototype.append = function(e, t) {
                this.$loadingMore.remove(),
                this.loading = !1,
                e.call(this, t),
                this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
            }
            ,
            t.prototype.bind = function(t, n, i) {
                var o = this;
                t.call(this, n, i),
                n.on("query", function(e) {
                    o.lastParams = e,
                    o.loading = !0
                }),
                n.on("query:append", function(e) {
                    o.lastParams = e,
                    o.loading = !0
                }),
                this.$results.on("scroll", function() {
                    var t = e.contains(document.documentElement, o.$loadingMore[0]);
                    !o.loading && t && (o.$results.offset().top + o.$results.outerHeight(!1) + 50 >= o.$loadingMore.offset().top + o.$loadingMore.outerHeight(!1) && o.loadMore())
                })
            }
            ,
            t.prototype.loadMore = function() {
                this.loading = !0;
                var t = e.extend({}, {
                    page: 1
                }, this.lastParams);
                t.page++,
                this.trigger("query:append", t)
            }
            ,
            t.prototype.showLoadingMore = function(e, t) {
                return t.pagination && t.pagination.more
            }
            ,
            t.prototype.createLoadingMore = function() {
                var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>')
                  , n = this.options.get("translations").get("loadingMore");
                return t.html(n(this.lastParams)),
                t
            }
            ,
            t
        }),
        t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(e, t) {
            function n(t, n, i) {
                this.$dropdownParent = i.get("dropdownParent") || e(document.body),
                t.call(this, n, i)
            }
            return n.prototype.bind = function(e, t, n) {
                var i = this
                  , o = !1;
                e.call(this, t, n),
                t.on("open", function() {
                    i._showDropdown(),
                    i._attachPositioningHandler(t),
                    o || (o = !0,
                    t.on("results:all", function() {
                        i._positionDropdown(),
                        i._resizeDropdown()
                    }),
                    t.on("results:append", function() {
                        i._positionDropdown(),
                        i._resizeDropdown()
                    }))
                }),
                t.on("close", function() {
                    i._hideDropdown(),
                    i._detachPositioningHandler(t)
                }),
                this.$dropdownContainer.on("mousedown", function(e) {
                    e.stopPropagation()
                })
            }
            ,
            n.prototype.destroy = function(e) {
                e.call(this),
                this.$dropdownContainer.remove()
            }
            ,
            n.prototype.position = function(e, t, n) {
                t.attr("class", n.attr("class")),
                t.removeClass("select2"),
                t.addClass("select2-container--open"),
                t.css({
                    position: "absolute",
                    top: -999999
                }),
                this.$container = n
            }
            ,
            n.prototype.render = function(t) {
                var n = e("<span></span>")
                  , i = t.call(this);
                return n.append(i),
                this.$dropdownContainer = n,
                n
            }
            ,
            n.prototype._hideDropdown = function(e) {
                this.$dropdownContainer.detach()
            }
            ,
            n.prototype._attachPositioningHandler = function(n, i) {
                var o = this
                  , r = "scroll.select2." + i.id
                  , s = "resize.select2." + i.id
                  , a = "orientationchange.select2." + i.id
                  , l = this.$container.parents().filter(t.hasScroll);
                l.each(function() {
                    e(this).data("select2-scroll-position", {
                        x: e(this).scrollLeft(),
                        y: e(this).scrollTop()
                    })
                }),
                l.on(r, function(t) {
                    var n = e(this).data("select2-scroll-position");
                    e(this).scrollTop(n.y)
                }),
                e(window).on(r + " " + s + " " + a, function(e) {
                    o._positionDropdown(),
                    o._resizeDropdown()
                })
            }
            ,
            n.prototype._detachPositioningHandler = function(n, i) {
                var o = "scroll.select2." + i.id
                  , r = "resize.select2." + i.id
                  , s = "orientationchange.select2." + i.id;
                this.$container.parents().filter(t.hasScroll).off(o),
                e(window).off(o + " " + r + " " + s)
            }
            ,
            n.prototype._positionDropdown = function() {
                var t = e(window)
                  , n = this.$dropdown.hasClass("select2-dropdown--above")
                  , i = this.$dropdown.hasClass("select2-dropdown--below")
                  , o = null
                  , r = this.$container.offset();
                r.bottom = r.top + this.$container.outerHeight(!1);
                var s = {
                    height: this.$container.outerHeight(!1)
                };
                s.top = r.top,
                s.bottom = r.top + s.height;
                var a = this.$dropdown.outerHeight(!1)
                  , l = t.scrollTop()
                  , c = t.scrollTop() + t.height()
                  , u = l < r.top - a
                  , d = c > r.bottom + a
                  , f = {
                    left: r.left,
                    top: s.bottom
                }
                  , p = this.$dropdownParent;
                "static" === p.css("position") && (p = p.offsetParent());
                var h = p.offset();
                f.top -= h.top,
                f.left -= h.left,
                n || i || (o = "below"),
                d || !u || n ? !u && d && n && (o = "below") : o = "above",
                ("above" == o || n && "below" !== o) && (f.top = s.top - h.top - a),
                null != o && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + o),
                this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + o)),
                this.$dropdownContainer.css(f)
            }
            ,
            n.prototype._resizeDropdown = function() {
                var e = {
                    width: this.$container.outerWidth(!1) + "px"
                };
                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width,
                e.position = "relative",
                e.width = "auto"),
                this.$dropdown.css(e)
            }
            ,
            n.prototype._showDropdown = function(e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent),
                this._positionDropdown(),
                this._resizeDropdown()
            }
            ,
            n
        }),
        t.define("select2/dropdown/minimumResultsForSearch", [], function() {
            function e(e, t, n, i) {
                this.minimumResultsForSearch = n.get("minimumResultsForSearch"),
                this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0),
                e.call(this, t, n, i)
            }
            return e.prototype.showSearch = function(e, t) {
                return !(function e(t) {
                    for (var n = 0, i = 0; i < t.length; i++) {
                        var o = t[i];
                        o.children ? n += e(o.children) : n++
                    }
                    return n
                }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
            }
            ,
            e
        }),
        t.define("select2/dropdown/selectOnClose", [], function() {
            function e() {}
            return e.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n),
                t.on("close", function(e) {
                    i._handleSelectOnClose(e)
                })
            }
            ,
            e.prototype._handleSelectOnClose = function(e, t) {
                if (t && null != t.originalSelect2Event) {
                    var n = t.originalSelect2Event;
                    if ("select" === n._type || "unselect" === n._type)
                        return
                }
                var i = this.getHighlightedResults();
                if (!(i.length < 1)) {
                    var o = i.data("data");
                    null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {
                        data: o
                    })
                }
            }
            ,
            e
        }),
        t.define("select2/dropdown/closeOnSelect", [], function() {
            function e() {}
            return e.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n),
                t.on("select", function(e) {
                    i._selectTriggered(e)
                }),
                t.on("unselect", function(e) {
                    i._selectTriggered(e)
                })
            }
            ,
            e.prototype._selectTriggered = function(e, t) {
                var n = t.originalEvent;
                n && n.ctrlKey || this.trigger("close", {
                    originalEvent: n,
                    originalSelect2Event: t
                })
            }
            ,
            e
        }),
        t.define("select2/i18n/en", [], function() {
            return {
                errorLoading: function() {
                    return "The results could not be loaded."
                },
                inputTooLong: function(e) {
                    var t = e.input.length - e.maximum
                      , n = "Please delete " + t + " character";
                    return 1 != t && (n += "s"),
                    n
                },
                inputTooShort: function(e) {
                    return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                },
                loadingMore: function() {
                    return "Loading more results…"
                },
                maximumSelected: function(e) {
                    var t = "You can only select " + e.maximum + " item";
                    return 1 != e.maximum && (t += "s"),
                    t
                },
                noResults: function() {
                    return "No results found"
                },
                searching: function() {
                    return "Searching…"
                }
            }
        }),
        t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(e, t, n, i, o, r, s, a, l, c, u, d, f, p, h, g, m, v, y, b, w, _, x, E, C, T, A, k, O) {
            function S() {
                this.reset()
            }
            return S.prototype.apply = function(d) {
                if (null == (d = e.extend(!0, {}, this.defaults, d)).dataAdapter) {
                    if (null != d.ajax ? d.dataAdapter = h : null != d.data ? d.dataAdapter = p : d.dataAdapter = f,
                    d.minimumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, v)),
                    d.maximumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, y)),
                    d.maximumSelectionLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, b)),
                    d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, g)),
                    (null != d.tokenSeparators || null != d.tokenizer) && (d.dataAdapter = c.Decorate(d.dataAdapter, m)),
                    null != d.query) {
                        var O = t(d.amdBase + "compat/query");
                        d.dataAdapter = c.Decorate(d.dataAdapter, O)
                    }
                    if (null != d.initSelection) {
                        var S = t(d.amdBase + "compat/initSelection");
                        d.dataAdapter = c.Decorate(d.dataAdapter, S)
                    }
                }
                if (null == d.resultsAdapter && (d.resultsAdapter = n,
                null != d.ajax && (d.resultsAdapter = c.Decorate(d.resultsAdapter, E)),
                null != d.placeholder && (d.resultsAdapter = c.Decorate(d.resultsAdapter, x)),
                d.selectOnClose && (d.resultsAdapter = c.Decorate(d.resultsAdapter, A))),
                null == d.dropdownAdapter) {
                    if (d.multiple)
                        d.dropdownAdapter = w;
                    else {
                        var D = c.Decorate(w, _);
                        d.dropdownAdapter = D
                    }
                    if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, T)),
                    d.closeOnSelect && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, k)),
                    null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                        var N = t(d.amdBase + "compat/dropdownCss");
                        d.dropdownAdapter = c.Decorate(d.dropdownAdapter, N)
                    }
                    d.dropdownAdapter = c.Decorate(d.dropdownAdapter, C)
                }
                if (null == d.selectionAdapter) {
                    if (d.multiple ? d.selectionAdapter = o : d.selectionAdapter = i,
                    null != d.placeholder && (d.selectionAdapter = c.Decorate(d.selectionAdapter, r)),
                    d.allowClear && (d.selectionAdapter = c.Decorate(d.selectionAdapter, s)),
                    d.multiple && (d.selectionAdapter = c.Decorate(d.selectionAdapter, a)),
                    null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                        var j = t(d.amdBase + "compat/containerCss");
                        d.selectionAdapter = c.Decorate(d.selectionAdapter, j)
                    }
                    d.selectionAdapter = c.Decorate(d.selectionAdapter, l)
                }
                if ("string" == typeof d.language)
                    if (d.language.indexOf("-") > 0) {
                        var I = d.language.split("-")[0];
                        d.language = [d.language, I]
                    } else
                        d.language = [d.language];
                if (e.isArray(d.language)) {
                    var L = new u;
                    d.language.push("en");
                    for (var $ = d.language, P = 0; P < $.length; P++) {
                        var M = $[P]
                          , R = {};
                        try {
                            R = u.loadPath(M)
                        } catch (e) {
                            try {
                                M = this.defaults.amdLanguageBase + M,
                                R = u.loadPath(M)
                            } catch (e) {
                                d.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        L.extend(R)
                    }
                    d.translations = L
                } else {
                    var q = u.loadPath(this.defaults.amdLanguageBase + "en")
                      , H = new u(d.language);
                    H.extend(q),
                    d.translations = H
                }
                return d
            }
            ,
            S.prototype.reset = function() {
                function t(e) {
                    return e.replace(/[^\u0000-\u007E]/g, function(e) {
                        return d[e] || e
                    })
                }
                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: O,
                    matcher: function n(i, o) {
                        if ("" === e.trim(i.term))
                            return o;
                        if (o.children && o.children.length > 0) {
                            for (var r = e.extend(!0, {}, o), s = o.children.length - 1; s >= 0; s--)
                                null == n(i, o.children[s]) && r.children.splice(s, 1);
                            return r.children.length > 0 ? r : n(i, r)
                        }
                        var a = t(o.text).toUpperCase()
                          , l = t(i.term).toUpperCase();
                        return a.indexOf(l) > -1 ? o : null
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function(e) {
                        return e
                    },
                    templateResult: function(e) {
                        return e.text
                    },
                    templateSelection: function(e) {
                        return e.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }
            ,
            S.prototype.set = function(t, n) {
                var i = {};
                i[e.camelCase(t)] = n;
                var o = c._convertData(i);
                e.extend(this.defaults, o)
            }
            ,
            new S
        }),
        t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(e, t, n, i) {
            function o(t, o) {
                if (this.options = t,
                null != o && this.fromElement(o),
                this.options = n.apply(this.options),
                o && o.is("input")) {
                    var r = e(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = i.Decorate(this.options.dataAdapter, r)
                }
            }
            return o.prototype.fromElement = function(e) {
                var n = ["select2"];
                null == this.options.multiple && (this.options.multiple = e.prop("multiple")),
                null == this.options.disabled && (this.options.disabled = e.prop("disabled")),
                null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))),
                null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"),
                e.prop("disabled", this.options.disabled),
                e.prop("multiple", this.options.multiple),
                e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
                e.data("data", e.data("select2Tags")),
                e.data("tags", !0)),
                e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                e.attr("ajax--url", e.data("ajaxUrl")),
                e.data("ajax--url", e.data("ajaxUrl")));
                var o;
                o = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                var r = t.extend(!0, {}, o);
                for (var s in r = i._convertData(r))
                    t.inArray(s, n) > -1 || (t.isPlainObject(this.options[s]) ? t.extend(this.options[s], r[s]) : this.options[s] = r[s]);
                return this
            }
            ,
            o.prototype.get = function(e) {
                return this.options[e]
            }
            ,
            o.prototype.set = function(e, t) {
                this.options[e] = t
            }
            ,
            o
        }),
        t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(e, t, n, i) {
            var o = function(e, n) {
                null != e.data("select2") && e.data("select2").destroy(),
                this.$element = e,
                this.id = this._generateId(e),
                n = n || {},
                this.options = new t(n,e),
                o.__super__.constructor.call(this);
                var i = e.attr("tabindex") || 0;
                e.data("old-tabindex", i),
                e.attr("tabindex", "-1");
                var r = this.options.get("dataAdapter");
                this.dataAdapter = new r(e,this.options);
                var s = this.render();
                this._placeContainer(s);
                var a = this.options.get("selectionAdapter");
                this.selection = new a(e,this.options),
                this.$selection = this.selection.render(),
                this.selection.position(this.$selection, s);
                var l = this.options.get("dropdownAdapter");
                this.dropdown = new l(e,this.options),
                this.$dropdown = this.dropdown.render(),
                this.dropdown.position(this.$dropdown, s);
                var c = this.options.get("resultsAdapter");
                this.results = new c(e,this.options,this.dataAdapter),
                this.$results = this.results.render(),
                this.results.position(this.$results, this.$dropdown);
                var u = this;
                this._bindAdapters(),
                this._registerDomEvents(),
                this._registerDataEvents(),
                this._registerSelectionEvents(),
                this._registerDropdownEvents(),
                this._registerResultsEvents(),
                this._registerEvents(),
                this.dataAdapter.current(function(e) {
                    u.trigger("selection:update", {
                        data: e
                    })
                }),
                e.addClass("select2-hidden-accessible"),
                e.attr("aria-hidden", "true"),
                this._syncAttributes(),
                e.data("select2", this)
            };
            return n.Extend(o, n.Observable),
            o.prototype._generateId = function(e) {
                return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
            }
            ,
            o.prototype._placeContainer = function(e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                null != t && e.css("width", t)
            }
            ,
            o.prototype._resolveWidth = function(e, t) {
                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                    var i = this._resolveWidth(e, "style");
                    return null != i ? i : this._resolveWidth(e, "element")
                }
                if ("element" == t) {
                    var o = e.outerWidth(!1);
                    return 0 >= o ? "auto" : o + "px"
                }
                if ("style" == t) {
                    var r = e.attr("style");
                    if ("string" != typeof r)
                        return null;
                    for (var s = r.split(";"), a = 0, l = s.length; l > a; a += 1) {
                        var c = s[a].replace(/\s/g, "").match(n);
                        if (null !== c && c.length >= 1)
                            return c[1]
                    }
                    return null
                }
                return t
            }
            ,
            o.prototype._bindAdapters = function() {
                this.dataAdapter.bind(this, this.$container),
                this.selection.bind(this, this.$container),
                this.dropdown.bind(this, this.$container),
                this.results.bind(this, this.$container)
            }
            ,
            o.prototype._registerDomEvents = function() {
                var t = this;
                this.$element.on("change.select2", function() {
                    t.dataAdapter.current(function(e) {
                        t.trigger("selection:update", {
                            data: e
                        })
                    })
                }),
                this.$element.on("focus.select2", function(e) {
                    t.trigger("focus", e)
                }),
                this._syncA = n.bind(this._syncAttributes, this),
                this._syncS = n.bind(this._syncSubtree, this),
                this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != i ? (this._observer = new i(function(n) {
                    e.each(n, t._syncA),
                    e.each(n, t._syncS)
                }
                ),
                this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1),
                this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1),
                this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
            }
            ,
            o.prototype._registerDataEvents = function() {
                var e = this;
                this.dataAdapter.on("*", function(t, n) {
                    e.trigger(t, n)
                })
            }
            ,
            o.prototype._registerSelectionEvents = function() {
                var t = this
                  , n = ["toggle", "focus"];
                this.selection.on("toggle", function() {
                    t.toggleDropdown()
                }),
                this.selection.on("focus", function(e) {
                    t.focus(e)
                }),
                this.selection.on("*", function(i, o) {
                    -1 === e.inArray(i, n) && t.trigger(i, o)
                })
            }
            ,
            o.prototype._registerDropdownEvents = function() {
                var e = this;
                this.dropdown.on("*", function(t, n) {
                    e.trigger(t, n)
                })
            }
            ,
            o.prototype._registerResultsEvents = function() {
                var e = this;
                this.results.on("*", function(t, n) {
                    e.trigger(t, n)
                })
            }
            ,
            o.prototype._registerEvents = function() {
                var e = this;
                this.on("open", function() {
                    e.$container.addClass("select2-container--open")
                }),
                this.on("close", function() {
                    e.$container.removeClass("select2-container--open")
                }),
                this.on("enable", function() {
                    e.$container.removeClass("select2-container--disabled")
                }),
                this.on("disable", function() {
                    e.$container.addClass("select2-container--disabled")
                }),
                this.on("blur", function() {
                    e.$container.removeClass("select2-container--focus")
                }),
                this.on("query", function(t) {
                    e.isOpen() || e.trigger("open", {}),
                    this.dataAdapter.query(t, function(n) {
                        e.trigger("results:all", {
                            data: n,
                            query: t
                        })
                    })
                }),
                this.on("query:append", function(t) {
                    this.dataAdapter.query(t, function(n) {
                        e.trigger("results:append", {
                            data: n,
                            query: t
                        })
                    })
                }),
                this.on("keypress", function(t) {
                    var n = t.which;
                    e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(),
                    t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}),
                    t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}),
                    t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}),
                    t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}),
                    t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(),
                    t.preventDefault())
                })
            }
            ,
            o.prototype._syncAttributes = function() {
                this.options.set("disabled", this.$element.prop("disabled")),
                this.options.get("disabled") ? (this.isOpen() && this.close(),
                this.trigger("disable", {})) : this.trigger("enable", {})
            }
            ,
            o.prototype._syncSubtree = function(e, t) {
                var n = !1
                  , i = this;
                if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                    if (t)
                        if (t.addedNodes && t.addedNodes.length > 0)
                            for (var o = 0; o < t.addedNodes.length; o++) {
                                t.addedNodes[o].selected && (n = !0)
                            }
                        else
                            t.removedNodes && t.removedNodes.length > 0 && (n = !0);
                    else
                        n = !0;
                    n && this.dataAdapter.current(function(e) {
                        i.trigger("selection:update", {
                            data: e
                        })
                    })
                }
            }
            ,
            o.prototype.trigger = function(e, t) {
                var n = o.__super__.trigger
                  , i = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting"
                };
                if (void 0 === t && (t = {}),
                e in i) {
                    var r = i[e]
                      , s = {
                        prevented: !1,
                        name: e,
                        args: t
                    };
                    if (n.call(this, r, s),
                    s.prevented)
                        return void (t.prevented = !0)
                }
                n.call(this, e, t)
            }
            ,
            o.prototype.toggleDropdown = function() {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }
            ,
            o.prototype.open = function() {
                this.isOpen() || this.trigger("query", {})
            }
            ,
            o.prototype.close = function() {
                this.isOpen() && this.trigger("close", {})
            }
            ,
            o.prototype.isOpen = function() {
                return this.$container.hasClass("select2-container--open")
            }
            ,
            o.prototype.hasFocus = function() {
                return this.$container.hasClass("select2-container--focus")
            }
            ,
            o.prototype.focus = function(e) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"),
                this.trigger("focus", {}))
            }
            ,
            o.prototype.enable = function(e) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),
                (null == e || 0 === e.length) && (e = [!0]);
                var t = !e[0];
                this.$element.prop("disabled", t)
            }
            ,
            o.prototype.data = function() {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var e = [];
                return this.dataAdapter.current(function(t) {
                    e = t
                }),
                e
            }
            ,
            o.prototype.val = function(t) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                null == t || 0 === t.length)
                    return this.$element.val();
                var n = t[0];
                e.isArray(n) && (n = e.map(n, function(e) {
                    return e.toString()
                })),
                this.$element.val(n).trigger("change")
            }
            ,
            o.prototype.destroy = function() {
                this.$container.remove(),
                this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA),
                null != this._observer ? (this._observer.disconnect(),
                this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1),
                this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1),
                this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)),
                this._syncA = null,
                this._syncS = null,
                this.$element.off(".select2"),
                this.$element.attr("tabindex", this.$element.data("old-tabindex")),
                this.$element.removeClass("select2-hidden-accessible"),
                this.$element.attr("aria-hidden", "false"),
                this.$element.removeData("select2"),
                this.dataAdapter.destroy(),
                this.selection.destroy(),
                this.dropdown.destroy(),
                this.results.destroy(),
                this.dataAdapter = null,
                this.selection = null,
                this.dropdown = null,
                this.results = null
            }
            ,
            o.prototype.render = function() {
                var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return t.attr("dir", this.options.get("dir")),
                this.$container = t,
                this.$container.addClass("select2-container--" + this.options.get("theme")),
                t.data("element", this.$element),
                t
            }
            ,
            o
        }),
        t.define("jquery-mousewheel", ["jquery"], function(e) {
            return e
        }),
        t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(e, t, n, i) {
            if (null == e.fn.select2) {
                var o = ["open", "close", "destroy"];
                e.fn.select2 = function(t) {
                    if ("object" == typeof (t = t || {}))
                        return this.each(function() {
                            var i = e.extend(!0, {}, t);
                            new n(e(this),i)
                        }),
                        this;
                    if ("string" == typeof t) {
                        var i, r = Array.prototype.slice.call(arguments, 1);
                        return this.each(function() {
                            var n = e(this).data("select2");
                            null == n && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."),
                            i = n[t].apply(n, r)
                        }),
                        e.inArray(t, o) > -1 ? this : i
                    }
                    throw new Error("Invalid arguments for Select2: " + t)
                }
            }
            return null == e.fn.select2.defaults && (e.fn.select2.defaults = i),
            n
        }),
        {
            define: t.define,
            require: t.require
        }
    }()
      , n = t.require("jquery.select2");
    return e.fn.select2.amd = t,
    n
});
var shoppingCart = function() {
    function e(e, t, n, i) {
        this.id = i,
        this.name = e,
        this.price = t,
        this.count = n
    }
    function t() {
        sessionStorage.setItem("shoppingCart", JSON.stringify(cart))
    }
    cart = [],
    null != sessionStorage.getItem("shoppingCart") && (cart = JSON.parse(sessionStorage.getItem("shoppingCart")));
    var n = {
        Increment: function(e) {
            for (var n in cart)
                if (cart[n].id === e)
                    return cart[n].count++,
                    void t()
        },
        addItemToCart: function(n, i, o, r) {
            for (var s in cart)
                if (cart[s].id === r)
                    return cart[s].count++,
                    void t();
            s = new e(n,i,o,r);
            cart.push(s),
            t()
        },
        setCountForItem: function(e, t) {
            for (var n in cart)
                if (parseInt(cart[n].id) === t) {
                    cart[n].count = e;
                    break
                }
        },
        removeItemFromCart: function(e) {
            for (var n in cart)
                if (parseInt(cart[n].id) === e) {
                    cart[n].count--,
                    0 === cart[n].count && cart.splice(n, 1);
                    break
                }
            t()
        },
        removeItemFromCartAll: function(e) {
            for (var n in cart)
                if (parseInt(cart[n].id) === e) {
                    cart.splice(n, 1);
                    break
                }
            t()
        },
        clearCart: function() {
            cart = [],
            t()
        },
        totalCount: function() {
            var e = 0;
            for (var t in cart)
                e += cart[t].count;
            return e
        },
        totalCart: function() {
            var e = 0;
            for (var t in cart)
                e += cart[t].price * cart[t].count;
            return Number(e.toFixed(2))
        },
        listCart: function() {
            var e = [];
            for (i in cart) {
                for (p in item = cart[i],
                itemCopy = {},
                item)
                    itemCopy[p] = item[p];
                itemCopy.total = Number(item.price * item.count).toFixed(2),
                e.push(itemCopy)
            }
            return e
        }
    };
    return n
}();
$(".add-to-cart").click(function(e) {
    e.preventDefault();
    let t = $(this).data("index")
      , n = obj_products[t];
    var i = n.name[locale]
      , o = n.price
      , r = n.id;
    shoppingCart.addItemToCart(i, o, 1, r),
    displayCart()
});

let sureQ = {
    ar: "هل أنت متأكد؟",
    en: "Are You Sure?",
    tr: "Are You Sure?"
}
  , yes = {
    ar: "نعم",
    en: "Yes",
    tr: "Yes"
}
  , no = {
    ar: "الغاء",
    en: "Cancel",
    tr: "Cancel"
};
$(document).on("click", ".clear-cart", ()=>{
    haveProducts() && swal({
        title: sureQ[locale],
        type: "warning",
        buttons: [no[locale], yes[locale]]
    }).then(function(e) {
        e && (shoppingCart.clearCart(),
        displayCart())
    })
}
);
let name = {
    ar: "الاسم",
    en: "Name",
    tr: "Name"
}
  , price = {
    ar: "السعر",
    en: "Price",
    tr: "Price"
}
  , qty = {
    ar: "الكمية",
    en: "Quantity",
    tr: "Quantity"
}
  , total = {
    ar: "الإجمالي",
    en: "Total",
    tr: "Total"
}
  , notes = {
    ar: "الملاحظات",
    en: "Notes",
    tr: "Notes"
}
  , del = {
    ar: "حذف",
    en: "Delete",
    tr: "Delete"
};
function displayCart() {
    var e = shoppingCart.listCart()
      , t = "";
    for (var n in t += `<tr>\n        <th style="text-align: start">${name[locale]}</th>\n        <th style="text-align: start">${price[locale]}</th>\n        <th style="text-align: start">${qty[locale]}</th>\n        <th style="text-align: start">${del[locale]}</th>\n    </tr>`,
    e)
        t += `<tr>\n    <td>${e[n].name}</td>\n    <td>${e[n].price.toFixed(2)}</td>\n\n     <td>\n     <div class="text-center">\n     <div style="width: 45px">\n          <div>\n     <button style="height: 15px;\n    padding: 0;\n    font-size: 10px;" class="plus-item btn btn-sm btn-secondary btn-block" data-id="${e[n].id}">+</button>\n</div>\n<div>\n     <input style="height: 15px;padding: 0;\n    font-weight: bold;"  type='number' readonly class='item-count form-control text-center' data-name='${e[n].name}'\n                   data-id='${e[n].id}' value='${e[n].count}'>\n</div>\n<div>\n\n     <button style="height: 15px;\n    padding: 0;\n    font-size: 10px;" class="minus-item btn btn-sm btn-secondary btn-block" data-id="${e[n].id}">-</button>\n</div>\n</div>\n</div>\n\n                   </td>\n\n\n          <td> <button onclick="deleteItem(${e[n].id})" class='delete-item btn btn-danger' data-id='${e[n].id}'>X</button>\n    </td>\n\n\n</tr>`;
    $(".show-cart").html(t),
    $(".total-cart").html(shoppingCart.totalCart()),
    $(".total-count").html(shoppingCart.totalCount())
}
function deleteItem(e) {
    shoppingCart.removeItemFromCartAll(e),
    displayCart()
}
function sendMenu(e) {
    var t = shoppingCart.listCart();
    if (t && t.length > 0) {
        var n = "";
        for (var i in t) {
            n += "\r\n",
            n += `${t[i].name} : ` + t[i].count.toString() + ` * ${t[i].price}  `
        }
        n += "\r\n",
        n += "-----------------",
        n += "\r\n",
        n += `${total[locale]} : ` + shoppingCart.totalCart(),
        n += "\r\n",
        n += `${qty[locale]} : ` + shoppingCart.totalCount(),
        n += "\r\n",
        n += `${notes[locale]} : ` + $("#notes").val();
        var o = encodeURI("https://wa.me/" + e + "/?text=" + n);
        window.open(o)
    }
}
function haveProducts() {
    return shoppingCart.listCart().length > 0
}

$(window).on("load", function() {
    displayCart()
}),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.swal = t() : e.swal = t()
}(this, function() {
    return function(e) {
        function t(i) {
            if (n[i])
                return n[i].exports;
            var o = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(o.exports, o, o.exports, t),
            o.l = !0,
            o.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }
        ,
        t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return t.d(n, "a", n),
            n
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 8)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = "swal-button";
        t.CLASS_NAMES = {
            MODAL: "swal-modal",
            OVERLAY: "swal-overlay",
            SHOW_MODAL: "swal-overlay--show-modal",
            MODAL_TITLE: "swal-title",
            MODAL_TEXT: "swal-text",
            ICON: "swal-icon",
            ICON_CUSTOM: "swal-icon--custom",
            CONTENT: "swal-content",
            FOOTER: "swal-footer",
            BUTTON_CONTAINER: "swal-button-container",
            BUTTON: i,
            CONFIRM_BUTTON: i + "--confirm",
            CANCEL_BUTTON: i + "--cancel",
            DANGER_BUTTON: i + "--danger",
            BUTTON_LOADING: i + "--loading",
            BUTTON_LOADER: i + "__loader"
        },
        t.default = t.CLASS_NAMES
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getNode = function(e) {
            var t = "." + e;
            return document.querySelector(t)
        }
        ,
        t.stringToNode = function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e.trim(),
            t.firstChild
        }
        ,
        t.insertAfter = function(e, t) {
            var n = t.nextSibling;
            t.parentNode.insertBefore(e, n)
        }
        ,
        t.removeNode = function(e) {
            e.parentElement.removeChild(e)
        }
        ,
        t.throwErr = function(e) {
            throw "SweetAlert: " + (e = e.replace(/ +(?= )/g, "")).trim()
        }
        ,
        t.isPlainObject = function(e) {
            if ("[object Object]" !== Object.prototype.toString.call(e))
                return !1;
            var t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype
        }
        ,
        t.ordinalSuffixOf = function(e) {
            var t = e % 10
              , n = e % 100;
            return 1 === t && 11 !== n ? e + "st" : 2 === t && 12 !== n ? e + "nd" : 3 === t && 13 !== n ? e + "rd" : e + "th"
        }
    }
    , function(e, t, n) {
        "use strict";
        function i(e) {
            for (var n in e)
                t.hasOwnProperty(n) || (t[n] = e[n])
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        i(n(25));
        var o = n(26);
        t.overlayMarkup = o.default,
        i(n(27)),
        i(n(28)),
        i(n(29));
        var r = n(0)
          , s = r.default.MODAL_TITLE
          , a = r.default.MODAL_TEXT
          , l = r.default.ICON
          , c = r.default.FOOTER;
        t.iconMarkup = '\n  <div class="' + l + '"></div>',
        t.titleMarkup = '\n  <div class="' + s + '"></div>\n',
        t.textMarkup = '\n  <div class="' + a + '"></div>',
        t.footerMarkup = '\n  <div class="' + c + '"></div>\n'
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1);
        t.CONFIRM_KEY = "confirm",
        t.CANCEL_KEY = "cancel";
        var o = {
            visible: !0,
            text: null,
            value: null,
            className: "",
            closeModal: !0
        }
          , r = Object.assign({}, o, {
            visible: !1,
            text: "Cancel",
            value: null
        })
          , s = Object.assign({}, o, {
            text: "OK",
            value: !0
        });
        t.defaultButtonList = {
            cancel: r,
            confirm: s
        };
        var a = function(e) {
            switch (e) {
            case t.CONFIRM_KEY:
                return s;
            case t.CANCEL_KEY:
                return r;
            default:
                var n = e.charAt(0).toUpperCase() + e.slice(1);
                return Object.assign({}, o, {
                    text: n,
                    value: e
                })
            }
        }
          , l = function(e, t) {
            var n = a(e);
            return !0 === t ? Object.assign({}, n, {
                visible: !0
            }) : "string" == typeof t ? Object.assign({}, n, {
                visible: !0,
                text: t
            }) : i.isPlainObject(t) ? Object.assign({
                visible: !0
            }, n, t) : Object.assign({}, n, {
                visible: !1
            })
        }
          , c = function(e) {
            var n = {};
            switch (e.length) {
            case 1:
                n[t.CANCEL_KEY] = Object.assign({}, r, {
                    visible: !1
                });
                break;
            case 2:
                n[t.CANCEL_KEY] = l(t.CANCEL_KEY, e[0]),
                n[t.CONFIRM_KEY] = l(t.CONFIRM_KEY, e[1]);
                break;
            default:
                i.throwErr("Invalid number of 'buttons' in array (" + e.length + ").\n      If you want more than 2 buttons, you need to use an object!")
            }
            return n
        };
        t.getButtonListOpts = function(e) {
            var n = t.defaultButtonList;
            return "string" == typeof e ? n[t.CONFIRM_KEY] = l(t.CONFIRM_KEY, e) : Array.isArray(e) ? n = c(e) : i.isPlainObject(e) ? n = function(e) {
                for (var t = {}, n = 0, i = Object.keys(e); n < i.length; n++) {
                    var o = i[n]
                      , s = e[o]
                      , a = l(o, s);
                    t[o] = a
                }
                return t.cancel || (t.cancel = r),
                t
            }(e) : !0 === e ? n = c([!0, !0]) : !1 === e ? n = c([!1, !1]) : void 0 === e && (n = t.defaultButtonList),
            n
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1)
          , o = n(2)
          , r = n(0)
          , s = r.default.MODAL
          , a = r.default.OVERLAY
          , l = n(30)
          , c = n(31)
          , u = n(32)
          , d = n(33);
        t.injectElIntoModal = function(e) {
            var t = i.getNode(s)
              , n = i.stringToNode(e);
            return t.appendChild(n),
            n
        }
        ;
        var f = function(e, t) {
            !function(e) {
                e.className = s,
                e.textContent = ""
            }(e);
            var n = t.className;
            n && e.classList.add(n)
        };
        t.initModalContent = function(e) {
            var t = i.getNode(s);
            f(t, e),
            l.default(e.icon),
            c.initTitle(e.title),
            c.initText(e.text),
            d.default(e.content),
            u.default(e.buttons, e.dangerMode)
        }
        ;
        t.default = function() {
            var e = i.getNode(a)
              , t = i.stringToNode(o.modalMarkup);
            e.appendChild(t)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(3)
          , o = {
            isOpen: !1,
            promise: null,
            actions: {},
            timer: null
        }
          , r = Object.assign({}, o);
        t.resetState = function() {
            r = Object.assign({}, o)
        }
        ,
        t.setActionValue = function(e) {
            if ("string" == typeof e)
                return s(i.CONFIRM_KEY, e);
            for (var t in e)
                s(t, e[t])
        }
        ;
        var s = function(e, t) {
            r.actions[e] || (r.actions[e] = {}),
            Object.assign(r.actions[e], {
                value: t
            })
        };
        t.setActionOptionsFor = function(e, t) {
            var n = (void 0 === t ? {} : t).closeModal
              , i = void 0 === n || n;
            Object.assign(r.actions[e], {
                closeModal: i
            })
        }
        ,
        t.default = r
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1)
          , o = n(3)
          , r = n(0)
          , s = r.default.OVERLAY
          , a = r.default.SHOW_MODAL
          , l = r.default.BUTTON
          , c = r.default.BUTTON_LOADING
          , u = n(5);
        t.openModal = function() {
            i.getNode(s).classList.add(a),
            u.default.isOpen = !0
        }
        ;
        t.onAction = function(e) {
            void 0 === e && (e = o.CANCEL_KEY);
            var t = u.default.actions[e]
              , n = t.value;
            if (!1 === t.closeModal) {
                var r = l + "--" + e;
                i.getNode(r).classList.add(c)
            } else
                i.getNode(s).classList.remove(a),
                u.default.isOpen = !1;
            u.default.promise.resolve(n)
        }
        ,
        t.getState = function() {
            var e = Object.assign({}, u.default);
            return delete e.promise,
            delete e.timer,
            e
        }
        ,
        t.stopLoading = function() {
            for (var e = document.querySelectorAll("." + l), t = 0; t < e.length; t++)
                e[t].classList.remove(c)
        }
    }
    , function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0,
            eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }
    , function(e, t, n) {
        (function(t) {
            e.exports = t.sweetAlert = n(9)
        }
        ).call(t, n(7))
    }
    , function(e, t, n) {
        (function(t) {
            e.exports = t.swal = n(10)
        }
        ).call(t, n(7))
    }
    , function(e, t, n) {
        "undefined" != typeof window && n(11),
        n(16);
        var i = n(23).default;
        e.exports = i
    }
    , function(e, t, n) {
        var i = n(12);
        "string" == typeof i && (i = [[e.i, i, ""]]);
        var o = {
            insertAt: "top",
            transform: void 0
        };
        n(14)(i, o),
        i.locals && (e.exports = i.locals)
    }
    , function(e, t, n) {
        (e.exports = n(13)(void 0)).push([e.i, '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button[not:disabled]:hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel[not:disabled]:hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger[not:disabled]:hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:scroll;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}', ""])
    }
    , function(e, t) {
        function n(e, t) {
            var n = e[1] || ""
              , i = e[3];
            if (!i)
                return n;
            if (t && "function" == typeof btoa) {
                var o = function(e) {
                    return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                }(i);
                return [n].concat(i.sources.map(function(e) {
                    return "/*# sourceURL=" + i.sourceRoot + e + " */"
                })).concat([o]).join("\n")
            }
            return [n].join("\n")
        }
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var i = n(t, e);
                    return t[2] ? "@media " + t[2] + "{" + i + "}" : i
                }).join("")
            }
            ,
            t.i = function(e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var i = {}, o = 0; o < this.length; o++) {
                    var r = this[o][0];
                    "number" == typeof r && (i[r] = !0)
                }
                for (o = 0; o < e.length; o++) {
                    var s = e[o];
                    "number" == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"),
                    t.push(s))
                }
            }
            ,
            t
        }
    }
    , function(e, t, n) {
        function i(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n]
                  , o = f[i.id];
                if (o) {
                    o.refs++;
                    for (var r = 0; r < o.parts.length; r++)
                        o.parts[r](i.parts[r]);
                    for (; r < i.parts.length; r++)
                        o.parts.push(u(i.parts[r], t))
                } else {
                    var s = [];
                    for (r = 0; r < i.parts.length; r++)
                        s.push(u(i.parts[r], t));
                    f[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }
        function o(e, t) {
            for (var n = [], i = {}, o = 0; o < e.length; o++) {
                var r = e[o]
                  , s = t.base ? r[0] + t.base : r[0]
                  , a = {
                    css: r[1],
                    media: r[2],
                    sourceMap: r[3]
                };
                i[s] ? i[s].parts.push(a) : n.push(i[s] = {
                    id: s,
                    parts: [a]
                })
            }
            return n
        }
        function r(e, t) {
            var n = h(e.insertInto);
            if (!n)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var i = v[v.length - 1];
            if ("top" === e.insertAt)
                i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
                v.push(t);
            else {
                if ("bottom" !== e.insertAt)
                    throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }
        function s(e) {
            if (null === e.parentNode)
                return !1;
            e.parentNode.removeChild(e);
            var t = v.indexOf(e);
            t >= 0 && v.splice(t, 1)
        }
        function a(e) {
            var t = document.createElement("style");
            return e.attrs.type = "text/css",
            c(t, e.attrs),
            r(e, t),
            t
        }
        function l(e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css",
            e.attrs.rel = "stylesheet",
            c(t, e.attrs),
            r(e, t),
            t
        }
        function c(e, t) {
            Object.keys(t).forEach(function(n) {
                e.setAttribute(n, t[n])
            })
        }
        function u(e, t) {
            var n, i, o, r;
            if (t.transform && e.css) {
                if (!(r = t.transform(e.css)))
                    return function() {}
                    ;
                e.css = r
            }
            if (t.singleton) {
                var c = m++;
                n = g || (g = a(t)),
                i = d.bind(null, n, c, !1),
                o = d.bind(null, n, c, !0)
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t),
                i = function(e, t, n) {
                    var i = n.css
                      , o = n.sourceMap
                      , r = void 0 === t.convertToAbsoluteUrls && o;
                    (t.convertToAbsoluteUrls || r) && (i = y(i)),
                    o && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                    var s = new Blob([i],{
                        type: "text/css"
                    })
                      , a = e.href;
                    e.href = URL.createObjectURL(s),
                    a && URL.revokeObjectURL(a)
                }
                .bind(null, n, t),
                o = function() {
                    s(n),
                    n.href && URL.revokeObjectURL(n.href)
                }
                ) : (n = a(t),
                i = function(e, t) {
                    var n = t.css
                      , i = t.media;
                    if (i && e.setAttribute("media", i),
                    e.styleSheet)
                        e.styleSheet.cssText = n;
                    else {
                        for (; e.firstChild; )
                            e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(n))
                    }
                }
                .bind(null, n),
                o = function() {
                    s(n)
                }
                );
            return i(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                        return;
                    i(e = t)
                } else
                    o()
            }
        }
        function d(e, t, n, i) {
            var o = n ? "" : i.css;
            if (e.styleSheet)
                e.styleSheet.cssText = b(t, o);
            else {
                var r = document.createTextNode(o)
                  , s = e.childNodes;
                s[t] && e.removeChild(s[t]),
                s.length ? e.insertBefore(r, s[t]) : e.appendChild(r)
            }
        }
        var f = {}
          , p = function(e) {
            var t;
            return function() {
                return void 0 === t && (t = function() {
                    return window && document && document.all && !window.atob
                }
                .apply(this, arguments)),
                t
            }
        }()
          , h = function(e) {
            var t = {};
            return function(e) {
                return void 0 === t[e] && (t[e] = function(e) {
                    return document.querySelector(e)
                }
                .call(this, e)),
                t[e]
            }
        }()
          , g = null
          , m = 0
          , v = []
          , y = n(15);
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {},
            t.singleton || (t.singleton = p()),
            t.insertInto || (t.insertInto = "head"),
            t.insertAt || (t.insertAt = "bottom");
            var n = o(e, t);
            return i(n, t),
            function(e) {
                for (var r = [], s = 0; s < n.length; s++) {
                    var a = n[s];
                    (l = f[a.id]).refs--,
                    r.push(l)
                }
                e && i(o(e, t), t);
                for (s = 0; s < r.length; s++) {
                    var l;
                    if (0 === (l = r[s]).refs) {
                        for (var c = 0; c < l.parts.length; c++)
                            l.parts[c]();
                        delete f[l.id]
                    }
                }
            }
        }
        ;
        var b = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n,
                e.filter(Boolean).join("\n")
            }
        }()
    }
    , function(e, t) {
        e.exports = function(e) {
            var t = "undefined" != typeof window && window.location;
            if (!t)
                throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e)
                return e;
            var n = t.protocol + "//" + t.host
              , i = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                var o, r = t.trim().replace(/^"(.*)"$/, function(e, t) {
                    return t
                }).replace(/^'(.*)'$/, function(e, t) {
                    return t
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r) ? e : (o = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : i + r.replace(/^\.\//, ""),
                "url(" + JSON.stringify(o) + ")")
            })
        }
    }
    , function(e, t, n) {
        var i = n(17);
        "undefined" == typeof window || window.Promise || (window.Promise = i),
        n(21),
        String.prototype.includes || (String.prototype.includes = function(e, t) {
            "use strict";
            return "number" != typeof t && (t = 0),
            !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
        }
        ),
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(e, t) {
                if (null == this)
                    throw new TypeError('"this" is null or not defined');
                var n = Object(this)
                  , i = n.length >>> 0;
                if (0 === i)
                    return !1;
                for (var o = 0 | t, r = Math.max(o >= 0 ? o : i - Math.abs(o), 0); r < i; ) {
                    if (function(e, t) {
                        return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
                    }(n[r], e))
                        return !0;
                    r++
                }
                return !1
            }
        }),
        "undefined" != typeof window && [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function(e) {
            e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function() {
                    this.parentNode.removeChild(this)
                }
            })
        })
    }
    , function(e, t, n) {
        (function(t) {
            !function(n) {
                function i() {}
                function o(e) {
                    if ("object" != typeof this)
                        throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e)
                        throw new TypeError("not a function");
                    this._state = 0,
                    this._handled = !1,
                    this._value = void 0,
                    this._deferreds = [],
                    u(e, this)
                }
                function r(e, t) {
                    for (; 3 === e._state; )
                        e = e._value;
                    0 !== e._state ? (e._handled = !0,
                    o._immediateFn(function() {
                        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                        if (null !== n) {
                            var i;
                            try {
                                i = n(e._value)
                            } catch (e) {
                                return void a(t.promise, e)
                            }
                            s(t.promise, i)
                        } else
                            (1 === e._state ? s : a)(t.promise, e._value)
                    })) : e._deferreds.push(t)
                }
                function s(e, t) {
                    try {
                        if (t === e)
                            throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var n = t.then;
                            if (t instanceof o)
                                return e._state = 3,
                                e._value = t,
                                void l(e);
                            if ("function" == typeof n)
                                return void u(function(e, t) {
                                    return function() {
                                        e.apply(t, arguments)
                                    }
                                }(n, t), e)
                        }
                        e._state = 1,
                        e._value = t,
                        l(e)
                    } catch (t) {
                        a(e, t)
                    }
                }
                function a(e, t) {
                    e._state = 2,
                    e._value = t,
                    l(e)
                }
                function l(e) {
                    2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
                        e._handled || o._unhandledRejectionFn(e._value)
                    });
                    for (var t = 0, n = e._deferreds.length; t < n; t++)
                        r(e, e._deferreds[t]);
                    e._deferreds = null
                }
                function c(e, t, n) {
                    this.onFulfilled = "function" == typeof e ? e : null,
                    this.onRejected = "function" == typeof t ? t : null,
                    this.promise = n
                }
                function u(e, t) {
                    var n = !1;
                    try {
                        e(function(e) {
                            n || (n = !0,
                            s(t, e))
                        }, function(e) {
                            n || (n = !0,
                            a(t, e))
                        })
                    } catch (e) {
                        if (n)
                            return;
                        n = !0,
                        a(t, e)
                    }
                }
                var d = setTimeout;
                o.prototype.catch = function(e) {
                    return this.then(null, e)
                }
                ,
                o.prototype.then = function(e, t) {
                    var n = new this.constructor(i);
                    return r(this, new c(e,t,n)),
                    n
                }
                ,
                o.all = function(e) {
                    var t = Array.prototype.slice.call(e);
                    return new o(function(e, n) {
                        function i(r, s) {
                            try {
                                if (s && ("object" == typeof s || "function" == typeof s)) {
                                    var a = s.then;
                                    if ("function" == typeof a)
                                        return void a.call(s, function(e) {
                                            i(r, e)
                                        }, n)
                                }
                                t[r] = s,
                                0 == --o && e(t)
                            } catch (e) {
                                n(e)
                            }
                        }
                        if (0 === t.length)
                            return e([]);
                        for (var o = t.length, r = 0; r < t.length; r++)
                            i(r, t[r])
                    }
                    )
                }
                ,
                o.resolve = function(e) {
                    return e && "object" == typeof e && e.constructor === o ? e : new o(function(t) {
                        t(e)
                    }
                    )
                }
                ,
                o.reject = function(e) {
                    return new o(function(t, n) {
                        n(e)
                    }
                    )
                }
                ,
                o.race = function(e) {
                    return new o(function(t, n) {
                        for (var i = 0, o = e.length; i < o; i++)
                            e[i].then(t, n)
                    }
                    )
                }
                ,
                o._immediateFn = "function" == typeof t && function(e) {
                    t(e)
                }
                || function(e) {
                    d(e, 0)
                }
                ,
                o._unhandledRejectionFn = function(e) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                }
                ,
                o._setImmediateFn = function(e) {
                    o._immediateFn = e
                }
                ,
                o._setUnhandledRejectionFn = function(e) {
                    o._unhandledRejectionFn = e
                }
                ,
                void 0 !== e && e.exports ? e.exports = o : n.Promise || (n.Promise = o)
            }(this)
        }
        ).call(t, n(18).setImmediate)
    }
    , function(e, t, n) {
        function i(e, t) {
            this._id = e,
            this._clearFn = t
        }
        var o = Function.prototype.apply;
        t.setTimeout = function() {
            return new i(o.call(setTimeout, window, arguments),clearTimeout)
        }
        ,
        t.setInterval = function() {
            return new i(o.call(setInterval, window, arguments),clearInterval)
        }
        ,
        t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }
        ,
        i.prototype.unref = i.prototype.ref = function() {}
        ,
        i.prototype.close = function() {
            this._clearFn.call(window, this._id)
        }
        ,
        t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = t
        }
        ,
        t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = -1
        }
        ,
        t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
            }, t))
        }
        ,
        n(19),
        t.setImmediate = setImmediate,
        t.clearImmediate = clearImmediate
    }
    , function(e, t, n) {
        (function(e, t) {
            !function(e, n) {
                "use strict";
                function i(e) {
                    delete a[e]
                }
                function o(e) {
                    if (l)
                        setTimeout(o, 0, e);
                    else {
                        var t = a[e];
                        if (t) {
                            l = !0;
                            try {
                                !function(e) {
                                    var t = e.callback
                                      , i = e.args;
                                    switch (i.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(i[0]);
                                        break;
                                    case 2:
                                        t(i[0], i[1]);
                                        break;
                                    case 3:
                                        t(i[0], i[1], i[2]);
                                        break;
                                    default:
                                        t.apply(n, i)
                                    }
                                }(t)
                            } finally {
                                i(e),
                                l = !1
                            }
                        }
                    }
                }
                if (!e.setImmediate) {
                    var r, s = 1, a = {}, l = !1, c = e.document, u = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    u = u && u.setTimeout ? u : e,
                    "[object process]" === {}.toString.call(e.process) ? r = function(e) {
                        t.nextTick(function() {
                            o(e)
                        })
                    }
                    : function() {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0
                              , n = e.onmessage;
                            return e.onmessage = function() {
                                t = !1
                            }
                            ,
                            e.postMessage("", "*"),
                            e.onmessage = n,
                            t
                        }
                    }() ? function() {
                        var t = "setImmediate$" + Math.random() + "$"
                          , n = function(n) {
                            n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && o(+n.data.slice(t.length))
                        };
                        e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n),
                        r = function(n) {
                            e.postMessage(t + n, "*")
                        }
                    }() : e.MessageChannel ? function() {
                        var e = new MessageChannel;
                        e.port1.onmessage = function(e) {
                            o(e.data)
                        }
                        ,
                        r = function(t) {
                            e.port2.postMessage(t)
                        }
                    }() : c && "onreadystatechange"in c.createElement("script") ? function() {
                        var e = c.documentElement;
                        r = function(t) {
                            var n = c.createElement("script");
                            n.onreadystatechange = function() {
                                o(t),
                                n.onreadystatechange = null,
                                e.removeChild(n),
                                n = null
                            }
                            ,
                            e.appendChild(n)
                        }
                    }() : r = function(e) {
                        setTimeout(o, 0, e)
                    }
                    ,
                    u.setImmediate = function(e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                            t[n] = arguments[n + 1];
                        var i = {
                            callback: e,
                            args: t
                        };
                        return a[s] = i,
                        r(s),
                        s++
                    }
                    ,
                    u.clearImmediate = i
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }
        ).call(t, n(7), n(20))
    }
    , function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }
        function i() {
            throw new Error("clearTimeout has not been defined")
        }
        function o(e) {
            if (c === setTimeout)
                return setTimeout(e, 0);
            if ((c === n || !c) && setTimeout)
                return c = setTimeout,
                setTimeout(e, 0);
            try {
                return c(e, 0)
            } catch (t) {
                try {
                    return c.call(null, e, 0)
                } catch (t) {
                    return c.call(this, e, 0)
                }
            }
        }
        function r() {
            h && f && (h = !1,
            f.length ? p = f.concat(p) : g = -1,
            p.length && s())
        }
        function s() {
            if (!h) {
                var e = o(r);
                h = !0;
                for (var t = p.length; t; ) {
                    for (f = p,
                    p = []; ++g < t; )
                        f && f[g].run();
                    g = -1,
                    t = p.length
                }
                f = null,
                h = !1,
                function(e) {
                    if (u === clearTimeout)
                        return clearTimeout(e);
                    if ((u === i || !u) && clearTimeout)
                        return u = clearTimeout,
                        clearTimeout(e);
                    try {
                        u(e)
                    } catch (t) {
                        try {
                            return u.call(null, e)
                        } catch (t) {
                            return u.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function a(e, t) {
            this.fun = e,
            this.array = t
        }
        function l() {}
        var c, u, d = e.exports = {};
        !function() {
            try {
                c = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                c = n
            }
            try {
                u = "function" == typeof clearTimeout ? clearTimeout : i
            } catch (e) {
                u = i
            }
        }();
        var f, p = [], h = !1, g = -1;
        d.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            p.push(new a(e,t)),
            1 !== p.length || h || o(s)
        }
        ,
        a.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        d.title = "browser",
        d.browser = !0,
        d.env = {},
        d.argv = [],
        d.version = "",
        d.versions = {},
        d.on = l,
        d.addListener = l,
        d.once = l,
        d.off = l,
        d.removeListener = l,
        d.removeAllListeners = l,
        d.emit = l,
        d.prependListener = l,
        d.prependOnceListener = l,
        d.listeners = function(e) {
            return []
        }
        ,
        d.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        d.cwd = function() {
            return "/"
        }
        ,
        d.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        d.umask = function() {
            return 0
        }
    }
    , function(e, t, n) {
        "use strict";
        n(22).polyfill()
    }
    , function(e, t, n) {
        "use strict";
        function i(e, t) {
            if (null == e)
                throw new TypeError("Cannot convert first argument to object");
            for (var n = Object(e), i = 1; i < arguments.length; i++) {
                var o = arguments[i];
                if (null != o)
                    for (var r = Object.keys(Object(o)), s = 0, a = r.length; s < a; s++) {
                        var l = r[s]
                          , c = Object.getOwnPropertyDescriptor(o, l);
                        void 0 !== c && c.enumerable && (n[l] = o[l])
                    }
            }
            return n
        }
        e.exports = {
            assign: i,
            polyfill: function() {
                Object.assign || Object.defineProperty(Object, "assign", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: i
                })
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(24)
          , o = n(6)
          , r = n(5)
          , s = n(36)
          , a = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            if ("undefined" != typeof window) {
                var n = s.getOpts.apply(void 0, e);
                return new Promise(function(e, t) {
                    r.default.promise = {
                        resolve: e,
                        reject: t
                    },
                    i.default(n),
                    setTimeout(function() {
                        o.openModal()
                    })
                }
                )
            }
        };
        a.close = o.onAction,
        a.getState = o.getState,
        a.setActionValue = r.setActionValue,
        a.stopLoading = o.stopLoading,
        a.setDefaults = s.setDefaults,
        t.default = a
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1)
          , o = n(0).default.MODAL
          , r = n(4)
          , s = n(34)
          , a = n(35)
          , l = n(1);
        t.init = function(e) {
            i.getNode(o) || (document.body || l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),
            s.default(),
            r.default()),
            r.initModalContent(e),
            a.default(e)
        }
        ,
        t.default = t.init
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0).default.MODAL;
        t.modalMarkup = '\n  <div class="' + i + '"></div>',
        t.default = t.modalMarkup
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = '<div \n    class="' + n(0).default.OVERLAY + '"\n    tabIndex="-1">\n  </div>';
        t.default = i
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0).default.ICON;
        t.errorIconMarkup = function() {
            var e = i + "--error"
              , t = e + "__line";
            return '\n    <div class="' + e + '__x-mark">\n      <span class="' + t + " " + t + '--left"></span>\n      <span class="' + t + " " + t + '--right"></span>\n    </div>\n  '
        }
        ,
        t.warningIconMarkup = function() {
            var e = i + "--warning";
            return '\n    <span class="' + e + '__body">\n      <span class="' + e + '__dot"></span>\n    </span>\n  '
        }
        ,
        t.successIconMarkup = function() {
            var e = i + "--success";
            return '\n    <span class="' + e + "__line " + e + '__line--long"></span>\n    <span class="' + e + "__line " + e + '__line--tip"></span>\n\n    <div class="' + e + '__ring"></div>\n    <div class="' + e + '__hide-corners"></div>\n  '
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0).default.CONTENT;
        t.contentMarkup = '\n  <div class="' + i + '">\n\n  </div>\n'
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0)
          , o = i.default.BUTTON_CONTAINER
          , r = i.default.BUTTON
          , s = i.default.BUTTON_LOADER;
        t.buttonMarkup = '\n  <div class="' + o + '">\n\n    <button\n      class="' + r + '"\n    ></button>\n\n    <div class="' + s + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(4)
          , o = n(2)
          , r = n(0)
          , s = r.default.ICON
          , a = r.default.ICON_CUSTOM
          , l = ["error", "warning", "success", "info"]
          , c = {
            error: o.errorIconMarkup(),
            warning: o.warningIconMarkup(),
            success: o.successIconMarkup()
        };
        t.default = function(e) {
            if (e) {
                var t = i.injectElIntoModal(o.iconMarkup);
                l.includes(e) ? function(e, t) {
                    var n = s + "--" + e;
                    t.classList.add(n);
                    var i = c[e];
                    i && (t.innerHTML = i)
                }(e, t) : function(e, t) {
                    t.classList.add(a);
                    var n = document.createElement("img");
                    n.src = e,
                    t.appendChild(n)
                }(e, t)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(2)
          , o = n(4)
          , r = function(e) {
            navigator.userAgent.includes("AppleWebKit") && (e.style.display = "none",
            e.offsetHeight,
            e.style.display = "")
        };
        t.initTitle = function(e) {
            if (e) {
                var t = o.injectElIntoModal(i.titleMarkup);
                t.textContent = e,
                r(t)
            }
        }
        ,
        t.initText = function(e) {
            if (e) {
                var t = o.injectElIntoModal(i.textMarkup);
                t.textContent = e,
                r(t)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1)
          , o = n(4)
          , r = n(0)
          , s = r.default.BUTTON
          , a = r.default.DANGER_BUTTON
          , l = n(3)
          , c = n(2)
          , u = n(6)
          , d = n(5)
          , f = function(e, t, n) {
            var o = t.text
              , r = t.value
              , f = t.className
              , p = t.closeModal
              , h = i.stringToNode(c.buttonMarkup)
              , g = h.querySelector("." + s)
              , m = s + "--" + e;
            g.classList.add(m),
            f && g.classList.add(f),
            n && e === l.CONFIRM_KEY && g.classList.add(a),
            g.textContent = o;
            var v = {};
            return v[e] = r,
            d.setActionValue(v),
            d.setActionOptionsFor(e, {
                closeModal: p
            }),
            g.addEventListener("click", function() {
                return u.onAction(e)
            }),
            h
        };
        t.default = function(e, t) {
            var n = o.injectElIntoModal(c.footerMarkup);
            for (var i in e) {
                var r = e[i]
                  , s = f(i, r, t);
                r.visible && n.appendChild(s)
            }
            0 === n.children.length && n.remove()
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(3)
          , o = n(4)
          , r = n(2)
          , s = n(5)
          , a = n(6)
          , l = n(0).default.CONTENT
          , c = function(e) {
            e.addEventListener("input", function(e) {
                var t = e.target.value;
                s.setActionValue(t)
            }),
            e.addEventListener("keyup", function(e) {
                if ("Enter" === e.key)
                    return a.onAction(i.CONFIRM_KEY)
            }),
            setTimeout(function() {
                e.focus(),
                s.setActionValue("")
            }, 0)
        };
        t.default = function(e) {
            if (e) {
                var t = o.injectElIntoModal(r.contentMarkup)
                  , n = e.element
                  , i = e.attributes;
                "string" == typeof n ? function(e, t, n) {
                    var i = document.createElement(t)
                      , o = l + "__" + t;
                    for (var r in i.classList.add(o),
                    n) {
                        var s = n[r];
                        i[r] = s
                    }
                    "input" === t && c(i),
                    e.appendChild(i)
                }(t, n, i) : t.appendChild(n)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1)
          , o = n(2);
        t.default = function() {
            var e = i.stringToNode(o.overlayMarkup);
            document.body.appendChild(e)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(5)
          , o = n(6)
          , r = n(1)
          , s = n(3)
          , a = n(0)
          , l = a.default.MODAL
          , c = a.default.BUTTON
          , u = a.default.OVERLAY
          , d = function(e) {
            if (i.default.isOpen)
                switch (e.key) {
                case "Escape":
                    return o.onAction(s.CANCEL_KEY)
                }
        }
          , f = function(e) {
            if (i.default.isOpen)
                switch (e.key) {
                case "Tab":
                    return function(e) {
                        e.preventDefault(),
                        h()
                    }(e)
                }
        }
          , p = function(e) {
            if (i.default.isOpen)
                return "Tab" === e.key && e.shiftKey ? function(e) {
                    e.preventDefault(),
                    g()
                }(e) : void 0
        }
          , h = function() {
            var e = r.getNode(c);
            e && (e.tabIndex = 0,
            e.focus())
        }
          , g = function() {
            var e = r.getNode(l).querySelectorAll("." + c)
              , t = e[e.length - 1];
            t && t.focus()
        }
          , m = function() {
            var e = r.getNode(l).querySelectorAll("." + c);
            e.length && (function(e) {
                e[e.length - 1].addEventListener("keydown", f)
            }(e),
            function(e) {
                e[0].addEventListener("keydown", p)
            }(e))
        }
          , v = function(e) {
            if (r.getNode(u) === e.target)
                return o.onAction(s.CANCEL_KEY)
        };
        t.default = function(e) {
            e.closeOnEsc ? document.addEventListener("keyup", d) : document.removeEventListener("keyup", d),
            e.dangerMode ? h() : g(),
            m(),
            function(e) {
                var t = r.getNode(u);
                t.removeEventListener("click", v),
                e && t.addEventListener("click", v)
            }(e.closeOnClickOutside),
            function(e) {
                i.default.timer && clearTimeout(i.default.timer),
                e && (i.default.timer = window.setTimeout(function() {
                    return o.onAction(s.CANCEL_KEY)
                }, e))
            }(e.timer)
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1)
          , o = n(3)
          , r = n(37)
          , s = n(38)
          , a = {
            title: null,
            text: null,
            icon: null,
            buttons: o.defaultButtonList,
            content: null,
            className: null,
            closeOnClickOutside: !0,
            closeOnEsc: !0,
            dangerMode: !1,
            timer: null
        }
          , l = Object.assign({}, a);
        t.setDefaults = function(e) {
            l = Object.assign({}, a, e)
        }
        ;
        var c = function(e) {
            var t = e && e.button
              , n = e && e.buttons;
            return void 0 !== t && void 0 !== n && i.throwErr("Cannot set both 'button' and 'buttons' options!"),
            void 0 !== t ? {
                confirm: t
            } : n
        }
          , u = function(e) {
            return i.ordinalSuffixOf(e + 1)
        }
          , d = function(e, t) {
            i.throwErr(u(t) + " argument ('" + e + "') is invalid")
        }
          , f = function(e, t) {
            var n = e + 1
              , o = t[n];
            i.isPlainObject(o) || void 0 === o || i.throwErr("Expected " + u(n) + " argument ('" + o + "') to be a plain object")
        }
          , p = function(e, t, n, o) {
            var r = t instanceof Element;
            if ("string" === typeof t) {
                if (0 === n)
                    return {
                        text: t
                    };
                if (1 === n)
                    return {
                        text: t,
                        title: o[0]
                    };
                if (2 === n)
                    return f(n, o),
                    {
                        icon: t
                    };
                d(t, n)
            } else {
                if (r && 0 === n)
                    return f(n, o),
                    {
                        content: t
                    };
                if (i.isPlainObject(t))
                    return function(e, t) {
                        var n = e + 1
                          , o = t[n];
                        void 0 !== o && i.throwErr("Unexpected " + u(n) + " argument (" + o + ")")
                    }(n, o),
                    t;
                d(t, n)
            }
        };
        t.getOpts = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var n = {};
            e.forEach(function(t, i) {
                var o = p(0, t, i, e);
                Object.assign(n, o)
            });
            var i = c(n);
            n.buttons = o.getButtonListOpts(i),
            delete n.button,
            n.content = r.getContentOpts(n.content);
            var u = Object.assign({}, a, l, n);
            return Object.keys(u).forEach(function(e) {
                s.DEPRECATED_OPTS[e] && s.logDeprecation(e)
            }),
            u
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1)
          , o = {
            element: "input",
            attributes: {
                placeholder: ""
            }
        };
        t.getContentOpts = function(e) {
            return i.isPlainObject(e) ? Object.assign({}, e) : e instanceof Element ? {
                element: e
            } : "input" === e ? o : null
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.logDeprecation = function(e) {
            var n = t.DEPRECATED_OPTS[e]
              , i = n.onlyRename
              , o = n.replacement
              , r = n.subOption
              , s = n.link
              , a = 'SweetAlert warning: "' + e + '" option has been ' + (i ? "renamed" : "deprecated") + ".";
            o && (a += " Please use" + (r ? ' "' + r + '" in ' : " ") + '"' + o + '" instead.');
            var l = "https://sweetalert.js.org";
            a += s ? " More details: " + l + s : " More details: " + l + "/guides/#upgrading-from-1x",
            console.warn(a)
        }
        ,
        t.DEPRECATED_OPTS = {
            type: {
                replacement: "icon",
                link: "/docs/#icon"
            },
            imageUrl: {
                replacement: "icon",
                link: "/docs/#icon"
            },
            customClass: {
                replacement: "className",
                onlyRename: !0,
                link: "/docs/#classname"
            },
            imageSize: {},
            showCancelButton: {
                replacement: "buttons",
                link: "/docs/#buttons"
            },
            showConfirmButton: {
                replacement: "button",
                link: "/docs/#button"
            },
            confirmButtonText: {
                replacement: "button",
                link: "/docs/#button"
            },
            confirmButtonColor: {},
            cancelButtonText: {
                replacement: "buttons",
                link: "/docs/#buttons"
            },
            closeOnConfirm: {
                replacement: "button",
                subOption: "closeModal",
                link: "/docs/#button"
            },
            closeOnCancel: {
                replacement: "buttons",
                subOption: "closeModal",
                link: "/docs/#buttons"
            },
            showLoaderOnConfirm: {
                replacement: "buttons"
            },
            animation: {},
            inputType: {
                replacement: "content",
                link: "/docs/#content"
            },
            inputValue: {
                replacement: "content",
                link: "/docs/#content"
            },
            inputPlaceholder: {
                replacement: "content",
                link: "/docs/#content"
            },
            html: {
                replacement: "content",
                link: "/docs/#content"
            },
            allowEscapeKey: {
                replacement: "closeOnEsc",
                onlyRename: !0,
                link: "/docs/#closeonesc"
            },
            allowClickOutside: {
                replacement: "closeOnClickOutside",
                onlyRename: !0,
                link: "/docs/#closeonclickoutside"
            }
        }
    }
    ])
}),
function(e) {
    "use strict";
    e(".animsition").animsition({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 1500,
        outDuration: 800,
        linkElement: ".animsition-link",
        loading: !0,
        loadingParentElement: "html",
        loadingClass: "animsition-loading-1",
        loadingInner: '<div data-loader="ball-scale"></div>',
        timeout: !1,
        timeoutCountdown: 5e3,
        onLoadEvent: !0,
        browser: ["animation-duration", "-webkit-animation-duration"],
        overlay: !1,
        overlayClass: "animsition-overlay-slide",
        overlayParentElement: "html",
        transition: function(e) {
            window.location.href = e
        }
    });
    var t = e(window).height() / 2;
    e(window).on("scroll", function() {
        e(this).scrollTop() > t ? e("#myBtn").css("display", "flex") : e("#myBtn").css("display", "none")
    }),
    e("#myBtn").on("click", function() {
        e("html, body").animate({
            scrollTop: 0
        }, 300)
    }),
    e(".js-show-header-dropdown").on("click", function() {
        e(this).parent().find(".header-dropdown")
    });
    for (var n = e(".js-show-header-dropdown"), i = -1, o = 0; o < n.length; o++)
        e(n[o]).on("click", function() {
            if (jQuery.inArray(this, n) == i)
                e(this).parent().find(".header-dropdown").toggleClass("show-header-dropdown"),
                i = -1;
            else {
                for (var t = 0; t < n.length; t++)
                    e(n[t]).parent().find(".header-dropdown").removeClass("show-header-dropdown");
                e(this).parent().find(".header-dropdown").toggleClass("show-header-dropdown"),
                i = jQuery.inArray(this, n)
            }
        });
    e(".js-show-header-dropdown, .header-dropdown").click(function(e) {
        e.stopPropagation()
    }),
    e(window).on("click", function() {
        for (var t = 0; t < n.length; t++)
            e(n[t]).parent().find(".header-dropdown").removeClass("show-header-dropdown");
        i = -1
    });
    e(".container-menu-header");
    e(window).on("scroll", function() {}),
    e(".btn-show-menu-mobile").on("click", function() {
        e(this).toggleClass("is-active"),
        e(".wrap-side-menu").slideToggle()
    });
    var r = e(".arrow-main-menu");
    for (o = 0; o < r.length; o++)
        e(r[o]).on("click", function() {
            e(this).parent().find(".sub-menu").slideToggle(),
            e(this).toggleClass("turn-arrow")
        });
    e(window).resize(function() {
        e(window).width() >= 992 && ("block" == e(".wrap-side-menu").css("display") && (e(".wrap-side-menu").css("display", "none"),
        e(".btn-show-menu-mobile").toggleClass("is-active")),
        "block" == e(".sub-menu").css("display") && (e(".sub-menu").css("display", "none"),
        e(".arrow-main-menu").removeClass("turn-arrow")))
    }),
    e(".btn-romove-top-noti").on("click", function() {
        e(this).parent().remove()
    }),
    e(".block2-btn-addwishlist").on("click", function(t) {
        t.preventDefault(),
        e(this).addClass("block2-btn-towishlist"),
        e(this).removeClass("block2-btn-addwishlist"),
        e(this).off("click")
    }),
    e(".btn-num-product-down").on("click", function(t) {
        t.preventDefault();
        var n = Number(e(this).next().val());
        n > 1 && e(this).next().val(n - 1)
    }),
    e(".btn-num-product-up").on("click", function(t) {
        t.preventDefault();
        var n = Number(e(this).prev().val());
        e(this).prev().val(n + 1)
    }),
    e(".active-dropdown-content .js-toggle-dropdown-content").toggleClass("show-dropdown-content"),
    e(".active-dropdown-content .dropdown-content").slideToggle("fast"),
    e(".js-toggle-dropdown-content").on("click", function() {
        e(this).toggleClass("show-dropdown-content"),
        e(this).parent().find(".dropdown-content").slideToggle("fast")
    });
    var s = e(".video-mo-01").children("iframe").attr("src");
    e('[data-target="#modal-video-01"]').on("click", function() {
        e(".video-mo-01").children("iframe")[0].src += "&autoplay=1",
        setTimeout(function() {
            e(".video-mo-01").css("opacity", "1")
        }, 300)
    }),
    e('[data-dismiss="modal"]').on("click", function() {
        e(".video-mo-01").children("iframe")[0].src = s,
        e(".video-mo-01").css("opacity", "0")
    })
}(jQuery);
