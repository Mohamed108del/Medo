(function(window, document) {
    var n, aa = typeof Object.create == "function" ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    }
    , ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    ;
    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }
    var da = ca(this)
      , ea = "Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64".split(" ");
    da.BigInt64Array && (ea.push("BigInt64"),
    ea.push("BigUint64"));
    function ha(a, b) {
        if (b)
            for (var c = 0; c < ea.length; c++)
                ia(ea[c] + "Array.prototype." + a, b)
    }
    function p(a, b) {
        b && ia(a, b)
    }
    function ia(a, b) {
        var c = da;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c))
                return;
            c = c[e]
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && b != null && ba(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
    var ja;
    if (typeof Object.setPrototypeOf == "function")
        ja = Object.setPrototypeOf;
    else {
        var ka;
        a: {
            var la = {
                a: !0
            }
              , ma = {};
            try {
                ma.__proto__ = la;
                ka = ma.a;
                break a
            } catch (a) {}
            ka = !1
        }
        ja = ka ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var na = ja;
    function x(a, b) {
        a.prototype = aa(b.prototype);
        a.prototype.constructor = a;
        if (na)
            na(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Lg = b.prototype
    }
    function oa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    function y(a) {
        var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
        if (b)
            return b.call(a);
        if (typeof a.length == "number")
            return {
                next: oa(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }
    function z(a) {
        if (!(a instanceof Array)) {
            a = y(a);
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            a = c
        }
        return a
    }
    function pa(a) {
        return qa(a, a)
    }
    function qa(a, b) {
        a.raw = b;
        Object.freeze && (Object.freeze(a),
        Object.freeze(b));
        return a
    }
    function ra(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var sa = typeof Object.assign == "function" ? Object.assign : function(a, b) {
        if (a == null)
            throw new TypeError("No nullish arg");
        a = Object(a);
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    ra(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    p("Object.assign", function(a) {
        return a || sa
    });
    function ta(a) {
        if (!(a instanceof Object))
            throw new TypeError("Iterator result " + a + " is not an object");
    }
    function B() {
        this.P = !1;
        this.u = null;
        this.l = void 0;
        this.g = 1;
        this.o = this.B = 0;
        this.qa = this.m = null
    }
    function ua(a) {
        if (a.P)
            throw new TypeError("Generator is already running");
        a.P = !0
    }
    B.prototype.ba = function(a) {
        this.l = a
    }
    ;
    function va(a, b) {
        a.m = {
            Je: b,
            Ue: !0
        };
        a.g = a.B || a.o
    }
    B.prototype.Ga = function() {
        return this.g
    }
    ;
    B.prototype.getNextAddress = B.prototype.Ga;
    B.prototype.Ha = function() {
        return this.l
    }
    ;
    B.prototype.getYieldResult = B.prototype.Ha;
    B.prototype.return = function(a) {
        this.m = {
            return: a
        };
        this.g = this.o
    }
    ;
    B.prototype["return"] = B.prototype.return;
    B.prototype.Ia = function(a) {
        this.m = {
            Da: a
        };
        this.g = this.o
    }
    ;
    B.prototype.jumpThroughFinallyBlocks = B.prototype.Ia;
    B.prototype.i = function(a, b) {
        this.g = b;
        return {
            value: a
        }
    }
    ;
    B.prototype.yield = B.prototype.i;
    B.prototype.Ja = function(a, b) {
        a = y(a);
        var c = a.next();
        ta(c);
        if (c.done)
            this.l = c.value,
            this.g = b;
        else
            return this.u = a,
            this.i(c.value, b)
    }
    ;
    B.prototype.yieldAll = B.prototype.Ja;
    B.prototype.Da = function(a) {
        this.g = a
    }
    ;
    B.prototype.jumpTo = B.prototype.Da;
    B.prototype.R = function() {
        this.g = 0
    }
    ;
    B.prototype.jumpToEnd = B.prototype.R;
    B.prototype.H = function(a, b) {
        this.B = a;
        b != void 0 && (this.o = b)
    }
    ;
    B.prototype.setCatchFinallyBlocks = B.prototype.H;
    B.prototype.sa = function(a) {
        this.B = 0;
        this.o = a || 0
    }
    ;
    B.prototype.setFinallyBlock = B.prototype.sa;
    B.prototype.Z = function(a, b) {
        this.g = a;
        this.B = b || 0
    }
    ;
    B.prototype.leaveTryBlock = B.prototype.Z;
    B.prototype.D = function(a) {
        this.B = a || 0;
        a = this.m.Je;
        this.m = null;
        return a
    }
    ;
    B.prototype.enterCatchBlock = B.prototype.D;
    B.prototype.X = function(a, b, c) {
        c ? this.qa[c] = this.m : this.qa = [this.m];
        this.B = a || 0;
        this.o = b || 0
    }
    ;
    B.prototype.enterFinallyBlock = B.prototype.X;
    B.prototype.Y = function(a, b) {
        b = this.qa.splice(b || 0)[0];
        (b = this.m = this.m || b) ? b.Ue ? this.g = this.B || this.o : b.Da != void 0 && this.o < b.Da ? (this.g = b.Da,
        this.m = null) : this.g = this.o : this.g = a
    }
    ;
    B.prototype.leaveFinallyBlock = B.prototype.Y;
    B.prototype.forIn = function(a) {
        return new wa(a)
    }
    ;
    B.prototype.forIn = B.prototype.forIn;
    function wa(a) {
        this.l = a;
        this.g = [];
        for (var b in a)
            this.g.push(b);
        this.g.reverse()
    }
    wa.prototype.i = function() {
        for (; this.g.length > 0; ) {
            var a = this.g.pop();
            if (a in this.l)
                return a
        }
        return null
    }
    ;
    wa.prototype.getNext = wa.prototype.i;
    function xa(a) {
        this.g = new B;
        this.i = a
    }
    function ya(a, b) {
        ua(a.g);
        var c = a.g.u;
        if (c)
            return za(a, "return"in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }
            , b, a.g.return);
        a.g.return(b);
        return Aa(a)
    }
    function za(a, b, c, d) {
        try {
            var e = b.call(a.g.u, c);
            ta(e);
            if (!e.done)
                return a.g.P = !1,
                e;
            var f = e.value
        } catch (g) {
            return a.g.u = null,
            va(a.g, g),
            Aa(a)
        }
        a.g.u = null;
        d.call(a.g, f);
        return Aa(a)
    }
    function Aa(a) {
        for (; a.g.g; )
            try {
                var b = a.i(a.g);
                if (b)
                    return a.g.P = !1,
                    {
                        value: b.value,
                        done: !1
                    }
            } catch (c) {
                a.g.l = void 0,
                va(a.g, c)
            }
        a.g.P = !1;
        if (a.g.m) {
            b = a.g.m;
            a.g.m = null;
            if (b.Ue)
                throw b.Je;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }
    function Ba(a) {
        this.next = function(b) {
            ua(a.g);
            a.g.u ? b = za(a, a.g.u.next, b, a.g.ba) : (a.g.ba(b),
            b = Aa(a));
            return b
        }
        ;
        this.throw = function(b) {
            ua(a.g);
            a.g.u ? b = za(a, a.g.u["throw"], b, a.g.ba) : (va(a.g, b),
            b = Aa(a));
            return b
        }
        ;
        this.return = function(b) {
            return ya(a, b)
        }
        ;
        this[Symbol.iterator] = function() {
            return this
        }
    }
    function Ca(a) {
        function b(d) {
            return a.next(d)
        }
        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        }
        )
    }
    function Da(a) {
        return Ca(new Ba(new xa(a)))
    }
    p("Symbol", function(a) {
        function b(f) {
            if (this instanceof b)
                throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++,f)
        }
        function c(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a)
            return a;
        c.prototype.toString = function() {
            return this.g
        }
        ;
        var d = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_"
          , e = 0;
        return b
    });
    p("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = Symbol("Symbol.iterator");
        ba(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return Ea(oa(this))
            }
        });
        return a
    });
    p("Symbol.asyncIterator", function(a) {
        return a ? a : Symbol("Symbol.asyncIterator")
    });
    function Ea(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        }
        ;
        return a
    }
    function Fa(a) {
        this[Symbol.asyncIterator] = function() {
            return this
        }
        ;
        this[Symbol.iterator] = function() {
            return a
        }
        ;
        this.next = function(b) {
            return Promise.resolve(a.next(b))
        }
        ;
        this["throw"] = function(b) {
            return new Promise(function(c, d) {
                var e = a["throw"];
                e !== void 0 ? c(e.call(a, b)) : (c = a["return"],
                c !== void 0 && c.call(a),
                d(new TypeError("no `throw` method")))
            }
            )
        }
        ;
        a["return"] !== void 0 && (this["return"] = function(b) {
            return Promise.resolve(a["return"](b))
        }
        )
    }
    function D() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    }
    p("globalThis", function(a) {
        return a || da
    });
    p("Reflect.setPrototypeOf", function(a) {
        return a ? a : na ? function(b, c) {
            try {
                return na(b, c),
                !0
            } catch (d) {
                return !1
            }
        }
        : null
    });
    p("Promise", function(a) {
        function b(g) {
            this.i = 0;
            this.l = void 0;
            this.g = [];
            this.B = !1;
            var h = this.m();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }
        function c() {
            this.g = null
        }
        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            }
            )
        }
        if (a)
            return a;
        c.prototype.i = function(g) {
            if (this.g == null) {
                this.g = [];
                var h = this;
                this.l(function() {
                    h.o()
                })
            }
            this.g.push(g)
        }
        ;
        var e = da.setTimeout;
        c.prototype.l = function(g) {
            e(g, 0)
        }
        ;
        c.prototype.o = function() {
            for (; this.g && this.g.length; ) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.m(l)
                    }
                }
            }
            this.g = null
        }
        ;
        c.prototype.m = function(g) {
            this.l(function() {
                throw g;
            })
        }
        ;
        b.prototype.m = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0,
                    l.call(h, m))
                }
            }
            var h = this
              , k = !1;
            return {
                resolve: g(this.X),
                reject: g(this.o)
            }
        }
        ;
        b.prototype.X = function(g) {
            if (g === this)
                this.o(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b)
                this.Z(g);
            else {
                a: switch (typeof g) {
                case "object":
                    var h = g != null;
                    break a;
                case "function":
                    h = !0;
                    break a;
                default:
                    h = !1
                }
                h ? this.R(g) : this.u(g)
            }
        }
        ;
        b.prototype.R = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.o(k);
                return
            }
            typeof h == "function" ? this.ba(h, g) : this.u(g)
        }
        ;
        b.prototype.o = function(g) {
            this.D(2, g)
        }
        ;
        b.prototype.u = function(g) {
            this.D(1, g)
        }
        ;
        b.prototype.D = function(g, h) {
            if (this.i != 0)
                throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.i);
            this.i = g;
            this.l = h;
            this.i === 2 && this.Y();
            this.H()
        }
        ;
        b.prototype.Y = function() {
            var g = this;
            e(function() {
                if (g.P()) {
                    var h = da.console;
                    typeof h !== "undefined" && h.error(g.l)
                }
            }, 1)
        }
        ;
        b.prototype.P = function() {
            if (this.B)
                return !1;
            var g = da.CustomEvent
              , h = da.Event
              , k = da.dispatchEvent;
            if (typeof k === "undefined")
                return !0;
            typeof g === "function" ? g = new g("unhandledrejection",{
                cancelable: !0
            }) : typeof h === "function" ? g = new h("unhandledrejection",{
                cancelable: !0
            }) : (g = da.document.createEvent("CustomEvent"),
            g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.l;
            return k(g)
        }
        ;
        b.prototype.H = function() {
            if (this.g != null) {
                for (var g = 0; g < this.g.length; ++g)
                    f.i(this.g[g]);
                this.g = null
            }
        }
        ;
        var f = new c;
        b.prototype.Z = function(g) {
            var h = this.m();
            g.Pc(h.resolve, h.reject)
        }
        ;
        b.prototype.ba = function(g, h) {
            var k = this.m();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        }
        ;
        b.prototype.then = function(g, h) {
            function k(r, v) {
                return typeof r == "function" ? function(t) {
                    try {
                        l(r(t))
                    } catch (w) {
                        m(w)
                    }
                }
                : v
            }
            var l, m, q = new b(function(r, v) {
                l = r;
                m = v
            }
            );
            this.Pc(k(g, l), k(h, m));
            return q
        }
        ;
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        }
        ;
        b.prototype.Pc = function(g, h) {
            function k() {
                switch (l.i) {
                case 1:
                    g(l.l);
                    break;
                case 2:
                    h(l.l);
                    break;
                default:
                    throw Error("Unexpected state: " + l.i);
                }
            }
            var l = this;
            this.g == null ? f.i(k) : this.g.push(k);
            this.B = !0
        }
        ;
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            }
            )
        }
        ;
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = y(g), m = l.next(); !m.done; m = l.next())
                    d(m.value).Pc(h, k)
            }
            )
        }
        ;
        b.all = function(g) {
            var h = y(g)
              , k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function q(t) {
                    return function(w) {
                        r[t] = w;
                        v--;
                        v == 0 && l(r)
                    }
                }
                var r = []
                  , v = 0;
                do
                    r.push(void 0),
                    v++,
                    d(k.value).Pc(q(r.length - 1), m),
                    k = h.next();
                while (!k.done)
            }
            )
        }
        ;
        return b
    });
    p("Object.setPrototypeOf", function(a) {
        return a || na
    });
    p("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    });
    p("WeakMap", function(a) {
        function b(k) {
            this.g = (h += Math.random() + 1).toString();
            if (k) {
                k = y(k);
                for (var l; !(l = k.next()).done; )
                    l = l.value,
                    this.set(l[0], l[1])
            }
        }
        function c() {}
        function d(k) {
            var l = typeof k;
            return l === "object" && k !== null || l === "function"
        }
        function e(k) {
            if (!ra(k, g)) {
                var l = new c;
                ba(k, g, {
                    value: l
                })
            }
        }
        function f(k) {
            var l = Object[k];
            l && (Object[k] = function(m) {
                if (m instanceof c)
                    return m;
                Object.isExtensible(m) && e(m);
                return l(m)
            }
            )
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var k = Object.seal({})
                  , l = Object.seal({})
                  , m = new a([[k, 2], [l, 3]]);
                if (m.get(k) != 2 || m.get(l) != 3)
                    return !1;
                m.delete(k);
                m.set(l, 4);
                return !m.has(k) && m.get(l) == 4
            } catch (q) {
                return !1
            }
        }())
            return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var h = 0;
        b.prototype.set = function(k, l) {
            if (!d(k))
                throw Error("Invalid WeakMap key");
            e(k);
            if (!ra(k, g))
                throw Error("WeakMap key fail: " + k);
            k[g][this.g] = l;
            return this
        }
        ;
        b.prototype.get = function(k) {
            return d(k) && ra(k, g) ? k[g][this.g] : void 0
        }
        ;
        b.prototype.has = function(k) {
            return d(k) && ra(k, g) && ra(k[g], this.g)
        }
        ;
        b.prototype.delete = function(k) {
            return d(k) && ra(k, g) && ra(k[g], this.g) ? delete k[g][this.g] : !1
        }
        ;
        return b
    });
    p("Map", function(a) {
        function b() {
            var h = {};
            return h.Ta = h.next = h.head = h
        }
        function c(h, k) {
            var l = h[1];
            return Ea(function() {
                if (l) {
                    for (; l.head != h[1]; )
                        l = l.Ta;
                    for (; l.next != l.head; )
                        return l = l.next,
                        {
                            done: !1,
                            value: k(l)
                        };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }
        function d(h, k) {
            var l = k && typeof k;
            l == "object" || l == "function" ? f.has(k) ? l = f.get(k) : (l = "" + ++g,
            f.set(k, l)) : l = "p_" + k;
            var m = h[0][l];
            if (m && ra(h[0], l))
                for (h = 0; h < m.length; h++) {
                    var q = m[h];
                    if (k !== k && q.key !== q.key || k === q.key)
                        return {
                            id: l,
                            list: m,
                            index: h,
                            entry: q
                        }
                }
            return {
                id: l,
                list: m,
                index: -1,
                entry: void 0
            }
        }
        function e(h) {
            this[0] = {};
            this[1] = b();
            this.size = 0;
            if (h) {
                h = y(h);
                for (var k; !(k = h.next()).done; )
                    k = k.value,
                    this.set(k[0], k[1])
            }
        }
        if (function() {
            if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function")
                return !1;
            try {
                var h = Object.seal({
                    x: 4
                })
                  , k = new a(y([[h, "s"]]));
                if (k.get(h) != "s" || k.size != 1 || k.get({
                    x: 4
                }) || k.set({
                    x: 4
                }, "t") != k || k.size != 2)
                    return !1;
                var l = k.entries()
                  , m = l.next();
                if (m.done || m.value[0] != h || m.value[1] != "s")
                    return !1;
                m = l.next();
                return m.done || m.value[0].x != 4 || m.value[1] != "t" || !l.next().done ? !1 : !0
            } catch (q) {
                return !1
            }
        }())
            return a;
        var f = new WeakMap;
        e.prototype.set = function(h, k) {
            h = h === 0 ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.entry ? l.entry.value = k : (l.entry = {
                next: this[1],
                Ta: this[1].Ta,
                head: this[1],
                key: h,
                value: k
            },
            l.list.push(l.entry),
            this[1].Ta.next = l.entry,
            this[1].Ta = l.entry,
            this.size++);
            return this
        }
        ;
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.entry && h.list ? (h.list.splice(h.index, 1),
            h.list.length || delete this[0][h.id],
            h.entry.Ta.next = h.entry.next,
            h.entry.next.Ta = h.entry.Ta,
            h.entry.head = null,
            this.size--,
            !0) : !1
        }
        ;
        e.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].Ta = b();
            this.size = 0
        }
        ;
        e.prototype.has = function(h) {
            return !!d(this, h).entry
        }
        ;
        e.prototype.get = function(h) {
            return (h = d(this, h).entry) && h.value
        }
        ;
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        }
        ;
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        }
        ;
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        }
        ;
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done; )
                m = m.value,
                h.call(k, m[1], m[0], this)
        }
        ;
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });
    p("Set", function(a) {
        function b(c) {
            this.g = new Map;
            if (c) {
                c = y(c);
                for (var d; !(d = c.next()).done; )
                    this.add(d.value)
            }
            this.size = this.g.size
        }
        if (function() {
            if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function")
                return !1;
            try {
                var c = Object.seal({
                    x: 4
                })
                  , d = new a(y([c]));
                if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                    x: 4
                }) != d || d.size != 2)
                    return !1;
                var e = d.entries()
                  , f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c)
                    return !1;
                f = e.next();
                return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (g) {
                return !1
            }
        }())
            return a;
        b.prototype.add = function(c) {
            c = c === 0 ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        }
        ;
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        }
        ;
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        }
        ;
        b.prototype.has = function(c) {
            return this.g.has(c)
        }
        ;
        b.prototype.entries = function() {
            return this.g.entries()
        }
        ;
        b.prototype.values = function() {
            return this.g.values()
        }
        ;
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        }
        ;
        return b
    });
    function Ga(a, b, c) {
        if (a == null)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    p("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;
                d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    function Ha(a, b) {
        a instanceof String && (a += "");
        var c = 0
          , d = !1
          , e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
        e[Symbol.iterator] = function() {
            return e
        }
        ;
        return e
    }
    p("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ha(this, function(b, c) {
                return [b, c]
            })
        }
    });
    p("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ha(this, function(b) {
                return b
            })
        }
    });
    p("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Ga(this, b, "startsWith")
              , e = d.length
              , f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; )
                if (d[c++] != b[g++])
                    return !1;
            return g >= f
        }
    });
    p("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return typeof b !== "number" ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
        }
    });
    p("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Ga(this, null, "repeat");
            if (b < 0 || b > 1342177279)
                throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b; )
                if (b & 1 && (d += c),
                b >>>= 1)
                    c += c;
            return d
        }
    });
    p("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                ra(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    p("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    p("Number.MIN_SAFE_INTEGER", function() {
        return -9007199254740991
    });
    p("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = c != null ? c : function(h) {
                return h
            }
            ;
            var e = []
              , f = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
            if (typeof f == "function") {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done; )
                    e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length,
                g = 0; g < f; g++)
                    e.push(c.call(d, b[g], g));
            return e
        }
    });
    p("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    p("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    });
    p("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    p("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b))
                    return !0
            }
            return !1
        }
    });
    p("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return Ga(this, b, "includes").indexOf(b, c || 0) !== -1
        }
    });
    p("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                ra(b, d) && c.push(b[d]);
            return c
        }
    });
    p("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || b === Infinity || b === -Infinity || b === 0)
                return b;
            var c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c
        }
    });
    p("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return typeof b === "number" && isNaN(b)
        }
    });
    p("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ha(this, function(b, c) {
                return c
            })
        }
    });
    p("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            c < 0 && (c = Math.max(0, e + c));
            if (d == null || d > e)
                d = e;
            d = Number(d);
            d < 0 && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++)
                this[c] = b;
            return this
        }
    });
    ha("fill", function(a) {
        return a ? a : Array.prototype.fill
    });
    p("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Ga(this, null, "padStart");
            b -= d.length;
            c = c !== void 0 ? String(c) : " ";
            return (b > 0 && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    });
    p("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = b === void 0 ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && b > 0 ? (d = Array.prototype.flat.call(d, b - 1),
                c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    });
    /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
    var Ia = this || self;
    function Ja(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = Ia, e = 0; e < c.length; e++)
                if (d = d[c[e]],
                d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }
    function Ka(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }
    function La(a) {
        var b = Ka(a);
        return b == "array" || b == "object" && typeof a.length == "number"
    }
    function Ma(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }
    function Na(a) {
        return a
    }
    function Oa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Lg = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.yh = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }
    ;var Pa;
    function Qa(a, b) {
        if (typeof a === "string")
            return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    function Ra(a, b) {
        for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
            e in d && b.call(void 0, d[e], e, a)
    }
    function Sa(a, b) {
        for (var c = a.length, d = [], e = 0, f = typeof a === "string" ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
    function Va(a, b, c) {
        for (var d = a.length, e = Array(d), f = typeof a === "string" ? a.split("") : a, g = 0; g < d; g++)
            g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    }
    function Wa(a, b) {
        var c = "";
        Ra(a, function(d, e) {
            c = b.call(void 0, c, d, e, a)
        });
        return c
    }
    function Xa(a, b) {
        for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    function Ya(a) {
        for (var b = ["x", "y", "width", "height"], c = b.length, d = typeof b === "string" ? b.split("") : b, e = 0; e < c; e++)
            if (e in d && !a.call(void 0, d[e], e, b))
                return !1;
        return !0
    }
    function Za(a, b) {
        a: {
            for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    }
    function ab(a, b) {
        b = Qa(a, b);
        b >= 0 && Array.prototype.splice.call(a, b, 1)
    }
    function bb(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function cb(a) {
        var b = a.length;
        if (b > 0) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function db(a, b, c) {
        return arguments.length <= 2 ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }
    function eb(a, b) {
        a.sort(b || gb)
    }
    function hb(a, b, c) {
        if (!La(a) || !La(b) || a.length != b.length)
            return !1;
        var d = a.length;
        c = c || ib;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e]))
                return !1;
        return !0
    }
    function gb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    function ib(a, b) {
        return a === b
    }
    function jb(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192) {
                    var f = db(d, e, e + 8192);
                    f = jb.apply(null, f);
                    for (var g = 0; g < f.length; g++)
                        b.push(f[g])
                }
            else
                b.push(d)
        }
        return b
    }
    function kb(a, b, c) {
        return bb.apply([], Va(a, b, c))
    }
    ;var lb = {
        NONE: 0,
        hh: 1
    }
      , mb = {
        bh: 0,
        ph: 1,
        oh: 2,
        qh: 3
    }
      , nb = {
        Zg: "a",
        fh: "d",
        sh: "v"
    };
    function ob() {
        this.aa = 0;
        this.i = !1;
        this.g = -1;
        this.ia = !1;
        this.l = 0
    }
    ob.prototype.isVisible = function() {
        return this.ia ? this.aa >= .3 : this.aa >= .5
    }
    ;
    var pb = {
        ah: 0,
        ih: 1
    }
      , qb = {
        668123728: 0,
        668123729: 1
    }
      , sb = {
        44731964: 0,
        44731965: 1
    }
      , tb = {
        NONE: 0,
        kh: 1,
        jh: 2
    }
      , ub = {
        480596784: 0,
        480596785: 1,
        21063355: 2
    };
    function vb(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    function wb(a, b) {
        var c = {}, d;
        for (d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    function xb(a) {
        var b = yb, c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b))
                return !1;
        return !0
    }
    function zb(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    function Ab(a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b
    }
    var Bb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function Cb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < Bb.length; f++)
                c = Bb[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;function Db() {
        this.g = null;
        this.m = !1;
        this.i = null
    }
    function Eb(a) {
        a.m = !0;
        return a
    }
    function Fb(a, b) {
        a.i && Ra(b, function(c) {
            c = a.i[c];
            c !== void 0 && a.l(c)
        })
    }
    function Gb(a) {
        Db.call(this);
        this.o = a
    }
    x(Gb, Db);
    Gb.prototype.l = function(a) {
        var b;
        if (!(b = this.g !== null)) {
            a: {
                b = this.o;
                for (c in b)
                    if (b[c] == a) {
                        var c = !0;
                        break a
                    }
                c = !1
            }
            b = !c
        }
        b || (this.g = a)
    }
    ;
    function Ib() {
        Db.call(this)
    }
    x(Ib, Db);
    Ib.prototype.l = function(a) {
        this.g === null && typeof a === "number" && (this.g = a)
    }
    ;
    function Jb() {
        this.g = {};
        this.l = !0;
        this.i = {}
    }
    Jb.prototype.reset = function() {
        this.g = {};
        this.l = !0;
        this.i = {}
    }
    ;
    function Kb(a, b, c) {
        a.g[b] || (a.g[b] = new Gb(c));
        return a.g[b]
    }
    function Lb(a, b) {
        (a = a.g.od) && a.l(b)
    }
    function Mb(a, b) {
        var c = a.i;
        if (c !== null && b in c)
            return a.i[b];
        if (a = a.g[b])
            return a.g
    }
    function Nb(a) {
        var b = {}
          , c = wb(a.g, function(d) {
            return d.m
        });
        vb(c, function(d, e) {
            d = a.i[e] !== void 0 ? String(a.i[e]) : d.m && d.g !== null ? String(d.g) : "";
            d.length > 0 && (b[e] = d)
        }, a);
        return b
    }
    function Ob(a, b) {
        if (!a.l)
            return b;
        b = b.split("&");
        for (var c = b.length - 1; c >= 0; c--) {
            var d = b[c].split("=")
              , e = decodeURIComponent(d[0]);
            d.length > 1 ? (d = decodeURIComponent(d[1]),
            d = /^[0-9]+$/g.exec(d) ? parseInt(d, 10) : d) : d = 1;
            (e = a.g[e]) && e.l(d)
        }
        return b.join("&")
    }
    function Pb(a, b) {
        a.l && Ra(zb(a.g), function(c) {
            return Fb(c, b)
        })
    }
    function Qb(a, b) {
        a.l && b && typeof b === "string" && (b = b.match(/[&;?]eid=([^&;]+)/)) && b.length === 2 && (b = decodeURIComponent(b[1]).split(","),
        b = Va(b, function(c) {
            return Number(c)
        }),
        Pb(a, b))
    }
    ;function Rb(a) {
        Kb(a, "od", lb);
        Eb(Kb(a, "opac", pb));
        Eb(Kb(a, "sbeos", pb));
        Eb(Kb(a, "prf", pb));
        Eb(Kb(a, "mwt", pb));
        Kb(a, "iogeo", pb)
    }
    ;var Sb = document
      , G = window;
    var Tb = Ja(610401301, !1)
      , Ub = Ja(748402147, !0)
      , Vb = Ja(824648567, !0)
      , Wb = Ja(824656860, Ja(1, !0));
    function Xb(a, b) {
        return a.toLowerCase().indexOf(b.toLowerCase()) != -1
    }
    ;function Yb() {
        var a = Ia.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Zb, $b = Ia.navigator;
    Zb = $b ? $b.userAgentData || null : null;
    function ac(a) {
        if (!Tb || !Zb)
            return !1;
        for (var b = 0; b < Zb.brands.length; b++) {
            var c = Zb.brands[b].brand;
            if (c && c.indexOf(a) != -1)
                return !0
        }
        return !1
    }
    function H(a) {
        return Yb().indexOf(a) != -1
    }
    ;function bc() {
        return Tb ? !!Zb && Zb.brands.length > 0 : !1
    }
    function cc() {
        return bc() ? !1 : H("Opera")
    }
    function dc() {
        return H("Firefox") || H("FxiOS")
    }
    function ec() {
        return H("Safari") && !(fc() || (bc() ? 0 : H("Coast")) || cc() || (bc() ? 0 : H("Edge")) || (bc() ? ac("Microsoft Edge") : H("Edg/")) || (bc() ? ac("Opera") : H("OPR")) || dc() || H("Silk") || H("Android"))
    }
    function fc() {
        return bc() ? ac("Chromium") : (H("Chrome") || H("CriOS")) && !(bc() ? 0 : H("Edge")) || H("Silk")
    }
    function hc() {
        return H("Android") && !(fc() || dc() || cc() || H("Silk"))
    }
    ;/* 
 
 Copyright Google LLC 
 SPDX-License-Identifier: Apache-2.0 
*/
    var ic = globalThis.trustedTypes, jc;
    function kc() {
        var a = null;
        if (!ic)
            return a;
        try {
            var b = function(c) {
                return c
            };
            a = ic.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {}
        return a
    }
    ;function lc(a) {
        this.g = a
    }
    lc.prototype.toString = function() {
        return this.g + ""
    }
    ;
    function mc(a) {
        var b;
        jc === void 0 && (jc = kc());
        a = (b = jc) ? b.createScriptURL(a) : a;
        return new lc(a)
    }
    ;var nc = pa([""])
      , oc = qa(["\x00"], ["\\0"])
      , qc = qa(["\n"], ["\\n"])
      , rc = qa(["\x00"], ["\\u0000"]);
    function sc(a) {
        return a.toString().indexOf("`") === -1
    }
    sc(function(a) {
        return a(nc)
    }) || sc(function(a) {
        return a(oc)
    }) || sc(function(a) {
        return a(qc)
    }) || sc(function(a) {
        return a(rc)
    });
    function tc(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    }
    ;function uc() {
        return "opacity".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }
    function vc(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }
    function wc(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
    ;function xc() {
        return Tb ? !!Zb && !!Zb.platform : !1
    }
    function yc() {
        return H("iPhone") && !H("iPod") && !H("iPad")
    }
    function zc() {
        yc() || H("iPad") || H("iPod")
    }
    ;function Ac(a) {
        Ac[" "](a);
        return a
    }
    Ac[" "] = function() {}
    ;
    function Bc(a, b) {
        try {
            return Ac(a[b]),
            !0
        } catch (c) {}
        return !1
    }
    ;cc();
    var Cc = bc() ? !1 : H("Trident") || H("MSIE");
    H("Edge");
    var Dc = H("Gecko") && !(Xb(Yb(), "WebKit") && !H("Edge")) && !(H("Trident") || H("MSIE")) && !H("Edge")
      , Ec = Xb(Yb(), "WebKit") && !H("Edge")
      , Fc = Ec && H("Mobile");
    xc() || H("Macintosh");
    xc() || H("Windows");
    (xc() ? Zb.platform === "Linux" : H("Linux")) || xc() || H("CrOS");
    xc() || H("Android");
    yc();
    H("iPad");
    H("iPod");
    zc();
    Xb(Yb(), "KaiOS");
    dc();
    yc() || H("iPod");
    H("iPad");
    hc();
    fc();
    ec() && zc();
    var Gc = !Cc && !ec();
    function Hc(a, b) {
        if (/-[a-z]/.test(b))
            return null;
        if (Gc && a.dataset) {
            if (hc() && !(b in a.dataset))
                return null;
            a = a.dataset[b];
            return a === void 0 ? null : a
        }
        return a.getAttribute("data-" + vc(b))
    }
    function Ic(a, b) {
        return /-[a-z]/.test(b) ? !1 : Gc && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + vc(b)) : !!a.getAttribute("data-" + vc(b))
    }
    ;function Jc(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }
    n = Jc.prototype;
    n.clone = function() {
        return new Jc(this.x,this.y)
    }
    ;
    n.equals = function(a) {
        return a instanceof Jc && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    }
    ;
    n.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    n.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    n.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    function Kc(a, b) {
        this.width = a;
        this.height = b
    }
    n = Kc.prototype;
    n.clone = function() {
        return new Kc(this.width,this.height)
    }
    ;
    n.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    n.isEmpty = function() {
        return !(this.width * this.height)
    }
    ;
    n.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    n.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    n.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON", "INPUT"]);
    function Lc(a) {
        var b = D.apply(1, arguments);
        if (b.length === 0)
            return mc(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return mc(c)
    }
    ;function Mc(a) {
        return a ? new Nc(Oc(a)) : Pa || (Pa = new Nc)
    }
    function Pc(a) {
        var b = a.scrollingElement ? a.scrollingElement : Ec || a.compatMode != "CSS1Compat" ? a.body || a.documentElement : a.documentElement;
        a = a.defaultView;
        return new Jc((a == null ? void 0 : a.pageXOffset) || b.scrollLeft,(a == null ? void 0 : a.pageYOffset) || b.scrollTop)
    }
    function Qc(a, b, c) {
        function d(h) {
            h && b.appendChild(typeof h === "string" ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!La(f) || Ma(f) && f.nodeType > 0)
                d(f);
            else {
                a: {
                    if (f && typeof f.length == "number") {
                        if (Ma(f)) {
                            var g = typeof f.item == "function" || typeof f.item == "string";
                            break a
                        }
                        if (typeof f === "function") {
                            g = typeof f.item == "function";
                            break a
                        }
                    }
                    g = !1
                }
                Ra(g ? cb(f) : f, d)
            }
        }
    }
    function Oc(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    function Rc(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a; ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
    function Nc(a) {
        this.g = a || Ia.document || document
    }
    n = Nc.prototype;
    n.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    }
    ;
    n.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    n.append = function(a, b) {
        Qc(Oc(a), a, arguments)
    }
    ;
    n.canHaveChildren = function(a) {
        if (a.nodeType != 1)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }
    ;
    n.isElement = function(a) {
        return Ma(a) && a.nodeType == 1
    }
    ;
    n.contains = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && b.nodeType == 1)
            return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined")
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    ;
    function Sc() {
        this.g = this.U = null;
        this.i = "no"
    }
    function Xc(a) {
        if (!a)
            return !1;
        try {
            var b = a.getBoundingClientRect();
            return b && b.height >= 30 && b.width >= 30
        } catch (c) {
            return !1
        }
    }
    function Yc(a) {
        return Sa(a, function(b) {
            return Xc(b)
        })
    }
    function Zc(a, b) {
        b = b === void 0 ? !0 : b;
        return Sa(a, function(c) {
            return c.nodeName != "SCRIPT" && (!b || c.nodeName != "FONT")
        })
    }
    function $c(a, b) {
        b = b === void 0 ? !0 : b;
        if (!a)
            return null;
        if (!a.children)
            return a;
        for (var c = Zc(cb(a.children), b); c.length; ) {
            var d = Yc(c);
            if (d.length == 1)
                return d[0];
            if (d.length > 1)
                break;
            c = kb(c, function(e) {
                return e.children ? Zc(cb(e.children)) : []
            }, b)
        }
        return a
    }
    function ad() {
        var a = G.document.body;
        return jb(Va(["GoogleActiveViewInnerContainer"], function(b) {
            return cb((a || document).querySelectorAll("." + b))
        }))
    }
    ;function bd() {}
    bd.prototype.now = function() {
        return 0
    }
    ;
    bd.prototype.i = function() {
        return 0
    }
    ;
    bd.prototype.l = function() {
        return 0
    }
    ;
    bd.prototype.g = function() {
        return 0
    }
    ;
    function cd() {
        if (!dd())
            throw Error();
    }
    x(cd, bd);
    function dd() {
        return !(!G || !G.performance)
    }
    cd.prototype.now = function() {
        return dd() && G.performance.now ? G.performance.now() : bd.prototype.now.call(this)
    }
    ;
    cd.prototype.i = function() {
        return dd() && G.performance.memory ? G.performance.memory.totalJSHeapSize || 0 : bd.prototype.i.call(this)
    }
    ;
    cd.prototype.l = function() {
        return dd() && G.performance.memory ? G.performance.memory.usedJSHeapSize || 0 : bd.prototype.l.call(this)
    }
    ;
    cd.prototype.g = function() {
        return dd() && G.performance.memory ? G.performance.memory.jsHeapSizeLimit || 0 : bd.prototype.g.call(this)
    }
    ;
    function ed() {}
    function fd(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    ;function J(a, b, c, d) {
        this.top = a;
        this.i = b;
        this.g = c;
        this.left = d
    }
    n = J.prototype;
    n.bb = function() {
        return this.i - this.left
    }
    ;
    n.Za = function() {
        return this.g - this.top
    }
    ;
    n.clone = function() {
        return new J(this.top,this.i,this.g,this.left)
    }
    ;
    n.contains = function(a) {
        return this && a ? a instanceof J ? a.left >= this.left && a.i <= this.i && a.top >= this.top && a.g <= this.g : a.x >= this.left && a.x <= this.i && a.y >= this.top && a.y <= this.g : !1
    }
    ;
    function gd(a, b) {
        return a == b ? !0 : a && b ? a.top == b.top && a.i == b.i && a.g == b.g && a.left == b.left : !1
    }
    n.ceil = function() {
        this.top = Math.ceil(this.top);
        this.i = Math.ceil(this.i);
        this.g = Math.ceil(this.g);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    n.floor = function() {
        this.top = Math.floor(this.top);
        this.i = Math.floor(this.i);
        this.g = Math.floor(this.g);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    n.round = function() {
        this.top = Math.round(this.top);
        this.i = Math.round(this.i);
        this.g = Math.round(this.g);
        this.left = Math.round(this.left);
        return this
    }
    ;
    function hd(a, b, c) {
        b instanceof Jc ? (a.left += b.x,
        a.i += b.x,
        a.top += b.y,
        a.g += b.y) : (a.left += b,
        a.i += b,
        typeof c === "number" && (a.top += c,
        a.g += c));
        return a
    }
    ;var id = {};
    function jd(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }
    function kd(a, b) {
        var c = new Jc(0,0);
        var d = (d = Oc(a)) ? d.defaultView : window;
        if (!Bc(d, "parent"))
            return c;
        do {
            if (d == b) {
                var e = Oc(a);
                var f = new Jc(0,0);
                if (a != (e ? Oc(e) : document).documentElement) {
                    var g = jd(a);
                    e = Mc(e);
                    e = Pc(e.g);
                    f.x = g.left + e.x;
                    f.y = g.top + e.y
                }
            } else
                f = jd(a),
                f = new Jc(f.left,f.top);
            c.x += f.x;
            c.y += f.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    }
    ;var ld = fd(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            Ia.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    function md(a) {
        return a ? a.passive && ld() ? a : a.capture || !1 : !1
    }
    function nd(a, b, c, d) {
        return typeof a.addEventListener === "function" ? (a.addEventListener(b, c, md(d)),
        !0) : !1
    }
    function od(a, b, c) {
        typeof a.removeEventListener === "function" && a.removeEventListener(b, c, md())
    }
    ;function pd(a) {
        if (a.prerendering)
            return 3;
        var b;
        return (b = {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5,
            "": 0
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""]) != null ? b : 0
    }
    function qd(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }
    ;function rd() {}
    rd.prototype.isVisible = function() {
        return pd(Sb) === 1
    }
    ;
    rd.prototype.g = function() {
        return pd(Sb) === 0
    }
    ;
    rd.prototype.m = function(a) {
        var b = qd(Sb);
        return b ? nd(Sb, b, a, {
            capture: !1
        }) : !1
    }
    ;
    rd.prototype.o = function(a) {
        var b = qd(Sb);
        b && od(Sb, b, a)
    }
    ;
    function sd(a) {
        try {
            return !!a && a.location.href != null && Bc(a, "foo")
        } catch (b) {
            return !1
        }
    }
    function td(a) {
        for (var b = a; a && a != a.parent; )
            a = a.parent,
            sd(a) && (b = a);
        return b
    }
    ;function ud() {
        return Tb && Zb ? Zb.mobile : !vd() && (H("iPod") || H("iPhone") || H("Android") || H("IEMobile"))
    }
    function vd() {
        return Tb && Zb ? !Zb.mobile && (H("iPad") || H("Android") || H("Silk")) : H("iPad") || H("Android") && !H("Mobile") || H("Silk")
    }
    ;var wd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    function xd() {
        var a = Ia
          , b = []
          , c = null;
        do {
            var d = a;
            if (sd(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else
                e = c,
                c = null;
            b.push(new yd(e || ""));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d !== a);
        d = 0;
        for (a = b.length - 1; d <= a; ++d)
            b[d].depth = a - d;
        d = Ia;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length === b.length - 1)
            for (a = 1; a < b.length; ++a)
                e = b[a],
                e.url || (e.url = d.location.ancestorOrigins[a - 1] || "",
                e.g = !0);
        return b
    }
    function zd(a, b) {
        this.g = a;
        this.i = b
    }
    function yd(a, b) {
        this.url = a;
        this.g = !!b;
        this.depth = null
    }
    ;function Ad(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    ;function Bd() {
        this.l = "&";
        this.i = {};
        this.m = 0;
        this.g = []
    }
    function Cd(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }
    function Dd(a, b, c, d, e) {
        var f = [];
        Ad(a, function(g, h) {
            (g = Ed(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }
    function Ed(a, b, c, d, e) {
        if (a == null)
            return "";
        b = b || "&";
        c = c || ",$";
        typeof c === "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d || (d = 0),
            d < c.length) {
                for (var f = [], g = 0; g < a.length; g++)
                    f.push(Ed(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a === "object")
            return e || (e = 0),
            e < 2 ? encodeURIComponent(Dd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
    function Fd(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Gd(a) - c.length;
        if (d < 0)
            return "";
        a.g.sort(function(m, q) {
            return m - q
        });
        c = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.i[g], k = 0; k < h.length; k++) {
                if (!d) {
                    c = c == null ? g : c;
                    break
                }
                var l = Dd(h[k], a.l, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
                        e = a.l;
                        break
                    }
                    c = c == null ? g : c
                }
            }
        a = "";
        c != null && (a = e + "trn=" + c);
        return b + a
    }
    function Gd(a) {
        var b = 1, c;
        for (c in a.i)
            c.length > b && (b = c.length);
        return 3997 - b - a.l.length - 1
    }
    ;function Hd(a) {
        a.Ah = !0;
        return a
    }
    ;var Id = Hd(function(a) {
        return typeof a === "number"
    })
      , Jd = Hd(function(a) {
        return typeof a === "string"
    })
      , Kd = Hd(function(a) {
        return typeof a === "boolean"
    });
    function Md(a, b) {
        b = b === void 0 ? document : b;
        return b.createElement(String(a).toLowerCase())
    }
    ;function Nd(a, b, c, d, e) {
        e = e === void 0 ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = Md("IMG", a.document);
        if (d) {
            var g = function() {
                d && ab(a.google_image_requests, f);
                od(f, "load", g);
                od(f, "error", g)
            };
            nd(f, "load", g);
            nd(f, "error", g)
        }
        c && (f.referrerPolicy = "no-referrer");
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    function Od(a) {
        var b = b === void 0 ? !1 : b;
        var c = c === void 0 ? !1 : c;
        if (Pd())
            Nd(window, a, !0, b, c);
        else {
            var d = Ia.document;
            if (d.body) {
                var e = d.getElementById("goog-srcless-iframe");
                e || (e = Md("IFRAME"),
                e.style.display = "none",
                e.id = "goog-srcless-iframe",
                d.body.appendChild(e));
                d = e
            } else
                d = null;
            d && d.contentWindow && Nd(d.contentWindow, a, !0, b, c)
        }
    }
    var Pd = fd(function() {
        return "referrerPolicy"in Md("IMG")
    });
    function Qd(a) {
        var b = "yb";
        if (a.yb && a.hasOwnProperty(b))
            return a.yb;
        b = new a;
        return a.yb = b
    }
    ;function Rd() {
        this.g = new rd;
        this.i = dd() ? new cd : new bd
    }
    Rd.prototype.setInterval = function(a, b) {
        return G.setInterval(a, b)
    }
    ;
    Rd.prototype.clearInterval = function(a) {
        G.clearInterval(a)
    }
    ;
    Rd.prototype.setTimeout = function(a, b) {
        return G.setTimeout(a, b)
    }
    ;
    Rd.prototype.clearTimeout = function(a) {
        G.clearTimeout(a)
    }
    ;
    function Sd(a) {
        Td();
        Nd(G, a, !1, !1, !1)
    }
    ;function Ud() {}
    function Td() {
        var a = Qd(Ud);
        if (!a.g) {
            if (!G)
                throw Error("Context has not been set and window is undefined.");
            a.g = Qd(Rd)
        }
        return a.g
    }
    ;function Vd() {
        throw Error("Invalid UTF8");
    }
    function Wd(a, b) {
        b = String.fromCharCode.apply(null, b);
        return a == null ? b : a + b
    }
    var Xd = void 0, Yd, Zd = typeof TextDecoder !== "undefined", $d, ae = typeof String.prototype.isWellFormed === "function", be = typeof TextEncoder !== "undefined";
    function ce(a) {
        Ia.setTimeout(function() {
            throw a;
        }, 0)
    }
    ;var de = {}
      , ee = null
      , fe = Dc || Ec || typeof Ia.btoa == "function";
    function ge(a) {
        var b;
        b === void 0 && (b = 0);
        he();
        b = de[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var g = a[e]
              , h = a[e + 1]
              , k = a[e + 2]
              , l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
        case 2:
            l = a[e + 1],
            k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e],
            c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }
    function ie(a) {
        var b = a.length
          , c = b * 3 / 4;
        c % 3 ? c = Math.floor(c) : "=.".indexOf(a[b - 1]) != -1 && (c = "=.".indexOf(a[b - 2]) != -1 ? c - 2 : c - 1);
        var d = new Uint8Array(c)
          , e = 0;
        je(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    }
    function je(a, b) {
        function c(k) {
            for (; d < a.length; ) {
                var l = a.charAt(d++)
                  , m = ee[l];
                if (m != null)
                    return m;
                if (!/^[\s\xa0]*$/.test(l))
                    throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        he();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , g = c(64)
              , h = c(64);
            if (h === 64 && e === -1)
                break;
            b(e << 2 | f >> 4);
            g != 64 && (b(f << 4 & 240 | g >> 2),
            h != 64 && b(g << 6 & 192 | h))
        }
    }
    function he() {
        if (!ee) {
            ee = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                var d = a.concat(b[c].split(""));
                de[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    ee[f] === void 0 && (ee[f] = e)
                }
            }
        }
    }
    ;var ke = typeof Uint8Array !== "undefined"
      , le = !Cc && typeof btoa === "function"
      , me = /[-_.]/g
      , ne = {
        "-": "+",
        _: "/",
        ".": "="
    };
    function oe(a) {
        return ne[a] || ""
    }
    function pe(a) {
        if (!le)
            return ie(a);
        a = me.test(a) ? a.replace(me, oe) : a;
        a = atob(a);
        for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++)
            b[c] = a.charCodeAt(c);
        return b
    }
    var qe = {};
    function re(a, b) {
        se(b);
        this.g = a;
        if (a != null && a.length === 0)
            throw Error("ByteString should be constructed with non-empty values");
    }
    re.prototype.isEmpty = function() {
        return this.g == null
    }
    ;
    function te(a) {
        se(qe);
        var b = a.g;
        b == null || ke && b != null && b instanceof Uint8Array || (typeof b === "string" ? b = pe(b) : (Ka(b),
        b = null));
        return b == null ? b : a.g = b
    }
    var ue;
    function se(a) {
        if (a !== qe)
            throw Error("illegal external caller");
    }
    ;var ve = void 0;
    function we(a) {
        a = Error(a);
        tc(a, "warning");
        return a
    }
    function xe(a, b) {
        if (a != null) {
            var c;
            var d = (c = ve) != null ? c : ve = {};
            c = d[a] || 0;
            c >= b || (d[a] = c + 1,
            a = Error(),
            tc(a, "incident"),
            ce(a))
        }
    }
    ;function ye() {
        return typeof BigInt === "function"
    }
    ;var ze = typeof Symbol === "function" && typeof Symbol() === "symbol";
    function Ae(a, b, c) {
        return typeof Symbol === "function" && typeof Symbol() === "symbol" ? (c === void 0 ? 0 : c) && Symbol.for && a ? Symbol.for(a) : a != null ? Symbol(a) : Symbol() : b
    }
    var Be = Ae("jas", void 0, !0)
      , Ce = Ae(void 0, "0di")
      , De = Ae(void 0, Symbol())
      , Ee = Ae(void 0, "0ubs")
      , Fe = Ae(void 0, "0ubsb")
      , Ge = Ae(void 0, "0actk")
      , He = Ae("m_m", "Ch", !0);
    var Ie = {
        fg: {
            value: 0,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    }, Je = Object.defineProperties, K = ze ? Be : "fg", Ke, Le = [];
    Me(Le, 7);
    Ke = Object.freeze(Le);
    function Ne(a, b) {
        ze || K in a || Je(a, Ie);
        a[K] |= b
    }
    function Me(a, b) {
        ze || K in a || Je(a, Ie);
        a[K] = b
    }
    ;var Oe = {};
    function Pe(a, b) {
        return b === void 0 ? a.i !== Qe && !!(2 & (a.F[K] | 0)) : !!(2 & b) && a.i !== Qe
    }
    var Qe = {}
      , Re = Object.freeze({});
    function Se(a, b, c) {
        var d = b & 128 ? 0 : -1, e = a.length, f;
        if (f = !!e)
            f = a[e - 1],
            f = f != null && typeof f === "object" && f.constructor === Object;
        var g = e + (f ? -1 : 0);
        for (b = b & 128 ? 1 : 0; b < g; b++)
            c(b - d, a[b]);
        if (f) {
            a = a[e - 1];
            for (var h in a)
                Object.prototype.hasOwnProperty.call(a, h) && !isNaN(h) && c(+h, a[h])
        }
    }
    var Te = {};
    var Ue = typeof Ia.BigInt === "function" && typeof Ia.BigInt(0) === "bigint";
    function Ve(a) {
        var b = a;
        if (Jd(b)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))
                throw Error(String(b));
        } else if (Id(b) && !Number.isSafeInteger(b))
            throw Error(String(b));
        return Ue ? BigInt(a) : a = Kd(a) ? a ? "1" : "0" : Jd(a) ? a.trim() || "0" : String(a)
    }
    var cf = Hd(function(a) {
        return Ue ? a >= We && a <= Ze : a[0] === "-" ? $e(a, af) : $e(a, bf)
    })
      , af = Number.MIN_SAFE_INTEGER.toString()
      , We = Ue ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
      , bf = Number.MAX_SAFE_INTEGER.toString()
      , Ze = Ue ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
    function $e(a, b) {
        if (a.length > b.length)
            return !1;
        if (a.length < b.length || a === b)
            return !0;
        for (var c = 0; c < a.length; c++) {
            var d = a[c]
              , e = b[c];
            if (d > e)
                return !1;
            if (d < e)
                return !0
        }
    }
    ;var df = typeof Uint8Array.prototype.slice === "function", ef = 0, ff = 0, gf;
    function hf(a) {
        var b = a >>> 0;
        ef = b;
        ff = (a - b) / 4294967296 >>> 0
    }
    function jf(a) {
        if (a < 0) {
            hf(-a);
            var b = y(kf(ef, ff));
            a = b.next().value;
            b = b.next().value;
            ef = a >>> 0;
            ff = b >>> 0
        } else
            hf(a)
    }
    function lf(a, b) {
        var c = b * 4294967296 + (a >>> 0);
        return Number.isSafeInteger(c) ? c : mf(a, b)
    }
    function nf(a, b) {
        return Ve(ye() ? BigInt.asUintN(64, (BigInt(b >>> 0) << BigInt(32)) + BigInt(a >>> 0)) : mf(a, b))
    }
    function of(a, b) {
        var c = b & 2147483648;
        c && (a = ~a + 1 >>> 0,
        b = ~b >>> 0,
        a == 0 && (b = b + 1 >>> 0));
        a = lf(a, b);
        return typeof a === "number" ? c ? -a : a : c ? "-" + a : a
    }
    function pf(a, b) {
        return ye() ? Ve(BigInt.asIntN(64, (BigInt.asUintN(32, BigInt(b)) << BigInt(32)) + BigInt.asUintN(32, BigInt(a)))) : Ve(qf(a, b))
    }
    function mf(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (b <= 2097151)
            var c = "" + (4294967296 * b + a);
        else
            ye() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215,
            b = b >> 16 & 65535,
            a = (a & 16777215) + c * 6777216 + b * 6710656,
            c += b * 8147497,
            b *= 2,
            a >= 1E7 && (c += a / 1E7 >>> 0,
            a %= 1E7),
            c >= 1E7 && (b += c / 1E7 >>> 0,
            c %= 1E7),
            c = b + rf(c) + rf(a));
        return c
    }
    function rf(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }
    function qf(a, b) {
        b & 2147483648 ? ye() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = y(kf(a, b)),
        a = b.next().value,
        b = b.next().value,
        a = "-" + mf(a, b)) : a = mf(a, b);
        return a
    }
    function sf(a) {
        if (a.length < 16)
            jf(Number(a));
        else if (ye())
            a = BigInt(a),
            ef = Number(a & BigInt(4294967295)) >>> 0,
            ff = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +(a[0] === "-");
            ff = ef = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e,
            e += 6)
                d = Number(a.slice(d, e)),
                ff *= 1E6,
                ef = ef * 1E6 + d,
                ef >= 4294967296 && (ff += Math.trunc(ef / 4294967296),
                ff >>>= 0,
                ef >>>= 0);
            b && (b = y(kf(ef, ff)),
            a = b.next().value,
            b = b.next().value,
            ef = a,
            ff = b)
        }
    }
    function kf(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    }
    ;function tf(a) {
        return Array.prototype.slice.call(a)
    }
    ;var uf = typeof BigInt === "function" ? BigInt.asIntN : void 0
      , vf = typeof BigInt === "function" ? BigInt.asUintN : void 0
      , wf = Number.isSafeInteger
      , xf = Number.isFinite
      , yf = Math.trunc;
    function zf(a) {
        if (a == null || typeof a === "number")
            return a;
        if (a === "NaN" || a === "Infinity" || a === "-Infinity")
            return Number(a)
    }
    function Af(a) {
        if (a == null || typeof a === "boolean")
            return a;
        if (typeof a === "number")
            return !!a
    }
    var Bf = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    function Cf(a) {
        switch (typeof a) {
        case "bigint":
            return !0;
        case "number":
            return xf(a);
        case "string":
            return Bf.test(a);
        default:
            return !1
        }
    }
    function Df(a) {
        if (!xf(a))
            throw we("enum");
        return a | 0
    }
    function Ef(a) {
        return a == null ? a : xf(a) ? a | 0 : void 0
    }
    function Ff(a) {
        if (a != null) {
            if (typeof a !== "number")
                throw we("int32");
            if (!xf(a))
                throw we("int32");
            a |= 0
        }
        return a
    }
    function Gf(a) {
        if (a == null)
            return a;
        if (typeof a === "string" && a)
            a = +a;
        else if (typeof a !== "number")
            return;
        return xf(a) ? a | 0 : void 0
    }
    function Hf(a) {
        if (a == null)
            return a;
        if (typeof a === "string" && a)
            a = +a;
        else if (typeof a !== "number")
            return;
        return xf(a) ? a >>> 0 : void 0
    }
    function If(a) {
        var b = void 0;
        b != null || (b = Wb ? 1024 : 0);
        if (!Cf(a))
            throw we("int64");
        var c = typeof a;
        switch (b) {
        case 512:
            switch (c) {
            case "string":
                return Jf(a);
            case "bigint":
                return String(uf(64, a));
            default:
                return Kf(a)
            }
        case 1024:
            switch (c) {
            case "string":
                return b = yf(Number(a)),
                wf(b) ? a = Ve(b) : (b = a.indexOf("."),
                b !== -1 && (a = a.substring(0, b)),
                a = ye() ? Ve(uf(64, BigInt(a))) : Ve(Lf(a))),
                a;
            case "bigint":
                return Ve(uf(64, a));
            default:
                return wf(a) ? Ve(Mf(a)) : Ve(Kf(a))
            }
        case 0:
            switch (c) {
            case "string":
                return Jf(a);
            case "bigint":
                return Ve(uf(64, a));
            default:
                return Mf(a)
            }
        default:
            throw Error("Unknown format requested type for int64");
        }
    }
    function Lf(a) {
        var b = a.length;
        if (a[0] === "-" ? b < 20 || b === 20 && a <= "-9223372036854775808" : b < 19 || b === 19 && a <= "9223372036854775807")
            return a;
        sf(a);
        return qf(ef, ff)
    }
    function Mf(a) {
        a = yf(a);
        wf(a) || (jf(a),
        a = of(ef, ff));
        return a
    }
    function Kf(a) {
        a = yf(a);
        wf(a) ? a = String(a) : (jf(a),
        a = qf(ef, ff));
        return a
    }
    function Jf(a) {
        var b = yf(Number(a));
        if (wf(b))
            return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return Lf(a)
    }
    function Nf(a) {
        if (a == null)
            return a;
        var b = typeof a;
        if (b === "bigint")
            return String(uf(64, a));
        if (Cf(a)) {
            if (b === "string")
                return Jf(a);
            if (b === "number")
                return Mf(a)
        }
    }
    function Of(a) {
        if (a == null)
            return a;
        var b = typeof a;
        if (b === "bigint")
            return String(vf(64, a));
        if (Cf(a)) {
            if (b === "string")
                return b = yf(Number(a)),
                wf(b) && b >= 0 ? a = String(b) : (b = a.indexOf("."),
                b !== -1 && (a = a.substring(0, b)),
                a[0] === "-" ? b = !1 : (b = a.length,
                b = b < 20 ? !0 : b === 20 && a <= "18446744073709551615"),
                b || (sf(a),
                a = mf(ef, ff))),
                a;
            if (b === "number")
                return a = yf(a),
                a >= 0 && wf(a) || (jf(a),
                a = lf(ef, ff)),
                a
        }
    }
    function Pf(a) {
        return a == null || typeof a === "string" ? a : void 0
    }
    function Qf(a, b, c) {
        if (a != null && a[He] === Oe)
            return a;
        if (Array.isArray(a)) {
            var d = a[K] | 0;
            c = d | c & 32 | c & 2;
            c !== d && Me(a, c);
            return new b(a)
        }
    }
    ;function Rf(a) {
        return a
    }
    ;function Sf(a) {
        var b = Na(De);
        return b ? a[b] : void 0
    }
    function Tf() {}
    function Uf(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && !isNaN(c) && b(a, +c, a[c])
    }
    function Vf(a) {
        var b = new Tf;
        Uf(a, function(c, d, e) {
            b[d] = tf(e)
        });
        b.g = a.g;
        return b
    }
    function Wf(a, b) {
        b < 100 || xe(Ee, 1)
    }
    ;function Xf(a, b, c, d) {
        var e = d !== void 0;
        d = !!d;
        var f = Na(De), g;
        !e && ze && f && (g = a[f]) && Uf(g, Wf);
        f = [];
        var h = a.length;
        g = 4294967295;
        var k = !1
          , l = !!(b & 64)
          , m = l ? b & 128 ? 0 : -1 : void 0;
        if (!(b & 1)) {
            var q = h && a[h - 1];
            q != null && typeof q === "object" && q.constructor === Object ? (h--,
            g = h) : q = void 0;
            if (l && !(b & 128) && !e) {
                k = !0;
                var r;
                g = ((r = Yf) != null ? r : Rf)(g - m, m, a, q, void 0) + m
            }
        }
        b = void 0;
        for (r = 0; r < h; r++) {
            var v = a[r];
            if (v != null && (v = c(v, d)) != null)
                if (l && r >= g) {
                    var t = r - m
                      , w = void 0;
                    ((w = b) != null ? w : b = {})[t] = v
                } else
                    f[r] = v
        }
        if (q)
            for (var u in q)
                Object.prototype.hasOwnProperty.call(q, u) && (h = q[u],
                h != null && (h = c(h, d)) != null && (r = +u,
                v = void 0,
                l && !Number.isNaN(r) && (v = r + m) < g ? f[v] = h : (r = void 0,
                ((r = b) != null ? r : b = {})[u] = h)));
        b && (k ? f.push(b) : f[g] = b);
        e && Na(De) && (a = Sf(a)) && a instanceof Tf && (f[De] = Vf(a));
        return f
    }
    function Zf(a) {
        switch (typeof a) {
        case "number":
            return Number.isFinite(a) ? a : "" + a;
        case "bigint":
            return cf(a) ? Number(a) : "" + a;
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (Array.isArray(a)) {
                var b = a[K] | 0;
                return a.length === 0 && b & 1 ? void 0 : Xf(a, b, Zf)
            }
            if (a != null && a[He] === Oe)
                return $f(a);
            if (a instanceof re) {
                b = a.g;
                if (b == null)
                    a = "";
                else if (typeof b === "string")
                    a = b;
                else {
                    if (le) {
                        for (var c = "", d = 0, e = b.length - 10240; d < e; )
                            c += String.fromCharCode.apply(null, b.subarray(d, d += 10240));
                        c += String.fromCharCode.apply(null, d ? b.subarray(d) : b);
                        b = btoa(c)
                    } else
                        b = ge(b);
                    a = a.g = b
                }
                return a
            }
            return
        }
        return a
    }
    var Yf;
    function $f(a) {
        a = a.F;
        return Xf(a, a[K] | 0, Zf)
    }
    ;var ag, bg;
    function cg(a) {
        switch (typeof a) {
        case "boolean":
            return ag || (ag = [0, void 0, !0]);
        case "number":
            return a > 0 ? void 0 : a === 0 ? bg || (bg = [0, void 0]) : [-a, void 0];
        case "string":
            return [0, a];
        case "object":
            return a
        }
    }
    function dg(a, b) {
        return eg(a, b[0], b[1])
    }
    function eg(a, b, c, d) {
        d = d === void 0 ? 0 : d;
        if (a == null) {
            var e = 32;
            c ? (a = [c],
            e |= 128) : a = [];
            b && (e = e & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a))
                throw Error("narr");
            e = a[K] | 0;
            if (Ub && 1 & e)
                throw Error("rfarr");
            2048 & e && !(2 & e) && fg();
            if (e & 256)
                throw Error("farr");
            if (e & 64)
                return (e | d) !== e && Me(a, e | d),
                a;
            if (c && (e |= 128,
            c !== a[0]))
                throw Error("mid");
            a: {
                c = a;
                e |= 64;
                var f = c.length;
                if (f) {
                    var g = f - 1
                      , h = c[g];
                    if (h != null && typeof h === "object" && h.constructor === Object) {
                        b = e & 128 ? 0 : -1;
                        g -= b;
                        if (g >= 1024)
                            throw Error("pvtlmt");
                        for (var k in h)
                            Object.prototype.hasOwnProperty.call(h, k) && (f = +k,
                            f < g && (c[f + b] = h[k],
                            delete h[k]));
                        e = e & -16760833 | (g & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    k = Math.max(b, f - (e & 128 ? 0 : -1));
                    if (k > 1024)
                        throw Error("spvt");
                    e = e & -16760833 | (k & 1023) << 14
                }
            }
        }
        Me(a, e | 64 | d);
        return a
    }
    function fg() {
        if (Ub)
            throw Error("carr");
        xe(Ge, 5)
    }
    ;function gg(a, b) {
        if (typeof a !== "object")
            return a;
        if (Array.isArray(a)) {
            var c = a[K] | 0;
            a.length === 0 && c & 1 ? a = void 0 : c & 2 || (!b || 4096 & c || 16 & c ? a = hg(a, c, !1, b && !(c & 16)) : (Ne(a, 34),
            c & 4 && Object.freeze(a)));
            return a
        }
        if (a != null && a[He] === Oe)
            return b = a.F,
            c = b[K] | 0,
            Pe(a, c) ? a : ig(a, b, c) ? jg(a, b) : hg(b, c);
        if (a instanceof re)
            return a
    }
    function jg(a, b, c) {
        a = new a.constructor(b);
        c && (a.i = Qe);
        a.l = Qe;
        return a
    }
    function hg(a, b, c, d) {
        d != null || (d = !!(34 & b));
        a = Xf(a, b, gg, d);
        d = 32;
        c && (d |= 2);
        b = b & 16769217 | d;
        Me(a, b);
        return a
    }
    function kg(a) {
        if (a.i !== Qe)
            return !1;
        var b = a.F;
        b = hg(b, b[K] | 0);
        Ne(b, 2048);
        a.F = b;
        a.i = void 0;
        a.l = void 0;
        return !0
    }
    function lg(a) {
        if (!kg(a) && Pe(a, a.F[K] | 0))
            throw Error();
    }
    function mg(a, b) {
        b === void 0 && (b = a[K] | 0);
        b & 32 && !(b & 4096) && Me(a, b | 4096)
    }
    function ig(a, b, c) {
        return c & 2 ? !0 : c & 32 && !(c & 4096) ? (Me(b, c | 2),
        a.i = Qe,
        !0) : !1
    }
    ;function ng(a, b) {
        a = og(a.F, b);
        if (a !== null)
            return a
    }
    function og(a, b, c, d) {
        if (b === -1)
            return null;
        var e = b + (c ? 0 : -1)
          , f = a.length - 1;
        if (!(f < 1 + (c ? 0 : -1))) {
            if (e >= f) {
                var g = a[f];
                if (g != null && typeof g === "object" && g.constructor === Object) {
                    c = g[b];
                    var h = !0
                } else if (e === f)
                    c = g;
                else
                    return
            } else
                c = a[e];
            if (d && c != null) {
                d = d(c);
                if (d == null)
                    return d;
                if (!Object.is(d, c))
                    return h ? g[b] = d : a[e] = d,
                    d
            }
            return c
        }
    }
    function pg(a, b, c) {
        lg(a);
        var d = a.F;
        qg(d, d[K] | 0, b, c);
        return a
    }
    function qg(a, b, c, d, e) {
        var f = c + (e ? 0 : -1)
          , g = a.length - 1;
        if (g >= 1 + (e ? 0 : -1) && f >= g) {
            var h = a[g];
            if (h != null && typeof h === "object" && h.constructor === Object)
                return h[c] = d,
                b
        }
        if (f <= g)
            return a[f] = d,
            b;
        if (d !== void 0) {
            var k;
            g = ((k = b) != null ? k : b = a[K] | 0) >> 14 & 1023 || 536870912;
            c >= g ? d != null && (f = {},
            a[g + (e ? 0 : -1)] = (f[c] = d,
            f)) : a[f] = d
        }
        return b
    }
    function rg(a, b, c) {
        a = a.F;
        return sg(a, a[K] | 0, b, c) !== void 0
    }
    function tg(a, b, c, d, e) {
        var f = a.F
          , g = f[K] | 0;
        d = Pe(a, g) ? 1 : d;
        e = !!e || d === 3;
        d === 2 && kg(a) && (f = a.F,
        g = f[K] | 0);
        a = ug(f, b);
        var h = a === Ke ? 7 : a[K] | 0
          , k = vg(h, g);
        var l = 4 & k ? !1 : !0;
        if (l) {
            4 & k && (a = tf(a),
            h = 0,
            k = wg(k, g),
            g = qg(f, g, b, a));
            for (var m = 0, q = 0; m < a.length; m++) {
                var r = c(a[m]);
                r != null && (a[q++] = r)
            }
            q < m && (a.length = q);
            c = (k | 4) & -513;
            k = c &= -1025;
            k &= -4097
        }
        k !== h && (Me(a, k),
        2 & k && Object.freeze(a));
        return a = xg(a, k, f, g, b, d, l, e)
    }
    function xg(a, b, c, d, e, f, g, h) {
        var k = b;
        f === 1 || (f !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d) ? yg(b) || (b |= !a.length || g && !(4096 & b) || 32 & d && !(4096 & b || 16 & b) ? 2 : 256,
        b !== k && Me(a, b),
        Object.freeze(a)) : (f === 2 && yg(b) && (a = tf(a),
        k = 0,
        b = wg(b, d),
        d = qg(c, d, e, a)),
        yg(b) || (h || (b |= 16),
        b !== k && Me(a, b)));
        2 & b || !(4096 & b || 16 & b) || mg(c, d);
        return a
    }
    function ug(a, b, c) {
        a = og(a, b, c);
        return Array.isArray(a) ? a : Ke
    }
    function vg(a, b) {
        2 & b && (a |= 2);
        return a | 1
    }
    function yg(a) {
        return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }
    function zg(a, b, c, d) {
        lg(a);
        var e = a.F;
        qg(e, e[K] | 0, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }
    function Ag(a, b, c) {
        if (b & 2)
            throw Error();
        var d = b & 128 ? Te : void 0
          , e = ug(a, c, d)
          , f = e === Ke ? 7 : e[K] | 0
          , g = vg(f, b);
        if (2 & g || yg(g) || 16 & g)
            g === f || yg(g) || Me(e, g),
            e = tf(e),
            f = 0,
            g = wg(g, b),
            qg(a, b, c, e, d);
        g &= -13;
        g !== f && Me(e, g);
        return e
    }
    function Bg(a, b, c) {
        var d = a[K] | 0
          , e = d & 128 ? Te : void 0
          , f = og(a, c, e);
        if (f != null && f[He] === Oe) {
            if (!Pe(f))
                return kg(f),
                f.F;
            var g = f.F
        } else
            Array.isArray(f) && (g = f);
        if (g) {
            var h = g[K] | 0;
            h & 2 && (g = hg(g, h))
        }
        g = dg(g, b);
        g !== f && qg(a, d, c, g, e);
        return g
    }
    function sg(a, b, c, d) {
        var e = !1;
        d = og(a, d, void 0, function(f) {
            var g = Qf(f, c, b);
            e = g !== f && g != null;
            return g
        });
        if (d != null)
            return e && !Pe(d) && mg(a, b),
            d
    }
    function Cg(a) {
        var b = Dg;
        a = a.F;
        (a = sg(a, a[K] | 0, b, 2)) || (a = b[Ce]) || (a = new b,
        Ne(a.F, 34),
        a = b[Ce] = a);
        return a
    }
    function Eg(a, b, c) {
        var d = a.F
          , e = d[K] | 0;
        b = sg(d, e, b, c);
        if (b == null)
            return b;
        e = d[K] | 0;
        if (!Pe(a, e)) {
            var f = b;
            var g = f.F
              , h = g[K] | 0;
            f = Pe(f, h) ? ig(f, g, h) ? jg(f, g, !0) : new f.constructor(hg(g, h, !1)) : f;
            f !== b && (kg(a) && (d = a.F,
            e = d[K] | 0),
            b = f,
            e = qg(d, e, c, b),
            mg(d, e))
        }
        return b
    }
    function Fg(a) {
        a = a.F;
        var b = a[K] | 0
          , c = Gg;
        var d = !!d || !1;
        var e = ug(a, 10)
          , f = e === Ke ? 7 : e[K] | 0
          , g = vg(f, b)
          , h = !(4 & g);
        if (h) {
            var k = e, l = b, m;
            (m = !!(2 & g)) && (l |= 2);
            for (var q = !m, r = !0, v = 0, t = 0; v < k.length; v++) {
                var w = Qf(k[v], c, l);
                if (w instanceof c) {
                    if (!m) {
                        var u = Pe(w);
                        q && (q = !u);
                        r && (r = u)
                    }
                    k[t++] = w
                }
            }
            t < v && (k.length = t);
            g |= 4;
            g = r ? g & -4097 : g | 4096;
            g = q ? g | 8 : g & -9
        }
        g !== f && (Me(e, g),
        2 & g && Object.freeze(e));
        return e = xg(e, g, a, b, 10, 1, h, d)
    }
    function Hg(a, b, c) {
        c == null && (c = void 0);
        pg(a, b, c);
        c && !Pe(c) && mg(a.F);
        return a
    }
    function wg(a, b) {
        return a = (2 & b ? a | 2 : a & -3) & -273
    }
    function Ig(a, b, c) {
        lg(a);
        b = tg(a, b, Ef, 2, !0);
        if (Array.isArray(c))
            for (var d = c.length, e = 0; e < d; e++)
                b.push(Df(c[e]));
        else
            for (c = y(c),
            d = c.next(); !d.done; d = c.next())
                b.push(Df(d.value));
        return a
    }
    function Jg(a, b, c) {
        c = c === void 0 ? !1 : c;
        var d;
        return (d = Af(ng(a, b))) != null ? d : c
    }
    function Kg(a, b) {
        var c = c === void 0 ? 0 : c;
        var d;
        return (d = Gf(ng(a, b))) != null ? d : c
    }
    function Lg(a) {
        var b = b === void 0 ? "" : b;
        a = Pf(ng(a, 2));
        return a != null ? a : b
    }
    function Mg(a, b, c) {
        if (c != null && typeof c !== "boolean")
            throw Error("Expected boolean but got " + Ka(c) + ": " + c);
        return pg(a, b, c)
    }
    function Ng(a, b, c) {
        if (c != null) {
            if (typeof c !== "number")
                throw we("uint32");
            if (!xf(c))
                throw we("uint32");
            c >>>= 0
        }
        return pg(a, b, c)
    }
    function Og(a, b, c) {
        return zg(a, b, c == null ? c : If(c), "0")
    }
    function Pg(a, b, c) {
        if (c != null && typeof c !== "string")
            throw Error();
        return pg(a, b, c)
    }
    function Qg(a, b, c) {
        return pg(a, b, c == null ? c : Df(c))
    }
    ;function Rg(a, b, c) {
        this.buffer = a;
        if (c && !b)
            throw Error();
        this.g = b
    }
    function Sg(a, b) {
        if (typeof a === "string")
            return new Rg(pe(a),b);
        if (Array.isArray(a))
            return new Rg(new Uint8Array(a),b);
        if (a.constructor === Uint8Array)
            return new Rg(a,!1);
        if (a.constructor === ArrayBuffer)
            return a = new Uint8Array(a),
            new Rg(a,!1);
        if (a.constructor === re)
            return b = te(a) || new Uint8Array(0),
            new Rg(b,!0,a);
        if (a instanceof Uint8Array)
            return a = a.constructor === Uint8Array ? a : new Uint8Array(a.buffer,a.byteOffset,a.byteLength),
            new Rg(a,!1);
        throw Error();
    }
    ;function Tg(a, b, c, d) {
        this.i = null;
        this.o = !1;
        this.g = this.l = this.m = 0;
        this.init(a, b, c, d)
    }
    Tg.prototype.init = function(a, b, c, d) {
        var e = d === void 0 ? {} : d;
        d = e.Oc === void 0 ? !1 : e.Oc;
        e = e.hd === void 0 ? !1 : e.hd;
        this.Oc = d;
        this.hd = e;
        a && (a = Sg(a, this.hd),
        this.i = a.buffer,
        this.o = a.g,
        this.m = b || 0,
        this.l = c !== void 0 ? this.m + c : this.i.length,
        this.g = this.m)
    }
    ;
    Tg.prototype.clear = function() {
        this.i = null;
        this.o = !1;
        this.g = this.l = this.m = 0;
        this.Oc = !1
    }
    ;
    Tg.prototype.reset = function() {
        this.g = this.m
    }
    ;
    function Ug(a, b) {
        var c = 0
          , d = 0
          , e = 0
          , f = a.i
          , g = a.g;
        do {
            var h = f[g++];
            c |= (h & 127) << e;
            e += 7
        } while (e < 32 && h & 128);
        if (e > 32)
            for (d |= (h & 127) >> 4,
            e = 3; e < 32 && h & 128; e += 7)
                h = f[g++],
                d |= (h & 127) << e;
        Vg(a, g);
        if (!(h & 128))
            return b(c >>> 0, d >>> 0);
        throw Error();
    }
    function Vg(a, b) {
        a.g = b;
        if (b > a.l)
            throw Error();
    }
    function Wg(a) {
        var b = a.i
          , c = a.g
          , d = b[c++]
          , e = d & 127;
        if (d & 128 && (d = b[c++],
        e |= (d & 127) << 7,
        d & 128 && (d = b[c++],
        e |= (d & 127) << 14,
        d & 128 && (d = b[c++],
        e |= (d & 127) << 21,
        d & 128 && (d = b[c++],
        e |= d << 28,
        d & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128)))))
            throw Error();
        Vg(a, c);
        return e
    }
    function Xg(a) {
        return Wg(a) >>> 0
    }
    function Yg(a) {
        return Ug(a, lf)
    }
    function Zg(a) {
        return Ug(a, nf)
    }
    function $g(a) {
        var b = a.i
          , c = a.g
          , d = b[c]
          , e = b[c + 1]
          , f = b[c + 2];
        b = b[c + 3];
        Vg(a, a.g + 4);
        return (d << 0 | e << 8 | f << 16 | b << 24) >>> 0
    }
    function ch(a) {
        var b = $g(a)
          , c = $g(a);
        a = (c >> 31) * 2 + 1;
        var d = c >>> 20 & 2047;
        b = 4294967296 * (c & 1048575) + b;
        return d == 2047 ? b ? NaN : a * Infinity : d == 0 ? a * 4.9E-324 * b : a * Math.pow(2, d - 1075) * (b + 4503599627370496)
    }
    function dh(a) {
        for (var b = 0, c = a.g, d = c + 10, e = a.i; c < d; ) {
            var f = e[c++];
            b |= f;
            if ((f & 128) === 0)
                return Vg(a, c),
                !!(b & 127)
        }
        throw Error();
    }
    function eh(a) {
        return Wg(a)
    }
    function fh(a, b) {
        if (b < 0)
            throw Error();
        var c = a.g;
        b = c + b;
        if (b > a.l)
            throw Error();
        a.g = b;
        return c
    }
    var gh = [];
    function hh(a, b, c, d) {
        if (gh.length) {
            var e = gh.pop();
            e.init(a, b, c, d);
            a = e
        } else
            a = new Tg(a,b,c,d);
        this.g = a;
        this.m = this.g.g;
        this.i = this.l = -1;
        ih(this, d)
    }
    function ih(a, b) {
        b = b === void 0 ? {} : b;
        a.Ed = b.Ed === void 0 ? !1 : b.Ed
    }
    function jh(a, b, c, d) {
        if (kh.length) {
            var e = kh.pop();
            ih(e, d);
            e.g.init(a, b, c, d);
            return e
        }
        return new hh(a,b,c,d)
    }
    function lh(a) {
        a.g.clear();
        a.l = -1;
        a.i = -1;
        kh.length < 100 && kh.push(a)
    }
    hh.prototype.reset = function() {
        this.g.reset();
        this.m = this.g.g;
        this.i = this.l = -1
    }
    ;
    function mh(a) {
        var b = a.g;
        if (b.g == b.l)
            return !1;
        a.m = a.g.g;
        var c = Xg(a.g);
        b = c >>> 3;
        c &= 7;
        if (!(c >= 0 && c <= 5))
            throw Error();
        if (b < 1)
            throw Error();
        a.l = b;
        a.i = c;
        return !0
    }
    function nh(a) {
        switch (a.i) {
        case 0:
            a.i != 0 ? nh(a) : dh(a.g);
            break;
        case 1:
            a = a.g;
            Vg(a, a.g + 8);
            break;
        case 2:
            if (a.i != 2)
                nh(a);
            else {
                var b = Xg(a.g);
                a = a.g;
                Vg(a, a.g + b)
            }
            break;
        case 5:
            a = a.g;
            Vg(a, a.g + 4);
            break;
        case 3:
            b = a.l;
            do {
                if (!mh(a))
                    throw Error();
                if (a.i == 4) {
                    if (a.l != b)
                        throw Error();
                    break
                }
                nh(a)
            } while (1);
            break;
        default:
            throw Error();
        }
    }
    function oh(a, b, c) {
        var d = a.g.l
          , e = Xg(a.g);
        e = a.g.g + e;
        var f = e - d;
        f <= 0 && (a.g.l = e,
        c(b, a, void 0, void 0, void 0),
        f = e - a.g.g);
        if (f)
            throw Error();
        a.g.g = e;
        a.g.l = d
    }
    function ph(a, b, c) {
        var d = Xg(a.g);
        for (d = a.g.g + d; a.g.g < d; )
            c.push(b(a.g))
    }
    var kh = [];
    function qh(a, b) {
        this.i = a >>> 0;
        this.g = b >>> 0
    }
    function rh(a) {
        if (!a)
            return sh || (sh = new qh(0,0));
        if (!/^\d+$/.test(a))
            return null;
        sf(a);
        return new qh(ef,ff)
    }
    var sh;
    function th(a, b) {
        this.i = a >>> 0;
        this.g = b >>> 0
    }
    function uh(a) {
        if (!a)
            return vh || (vh = new th(0,0));
        if (!/^-?\d+$/.test(a))
            return null;
        sf(a);
        return new th(ef,ff)
    }
    var vh;
    function wh() {
        this.g = []
    }
    wh.prototype.length = function() {
        return this.g.length
    }
    ;
    wh.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    }
    ;
    function xh(a, b, c) {
        for (; c > 0 || b > 127; )
            a.g.push(b & 127 | 128),
            b = (b >>> 7 | c << 25) >>> 0,
            c >>>= 7;
        a.g.push(b)
    }
    function yh(a, b) {
        for (; b > 127; )
            a.g.push(b & 127 | 128),
            b >>>= 7;
        a.g.push(b)
    }
    function zh(a, b) {
        if (b >= 0)
            yh(a, b);
        else {
            for (var c = 0; c < 9; c++)
                a.g.push(b & 127 | 128),
                b >>= 7;
            a.g.push(1)
        }
    }
    function Ah(a, b) {
        a.g.push(b >>> 0 & 255);
        a.g.push(b >>> 8 & 255);
        a.g.push(b >>> 16 & 255);
        a.g.push(b >>> 24 & 255)
    }
    ;function Bh() {
        this.l = [];
        this.i = 0;
        this.g = new wh
    }
    function Ch(a, b) {
        b.length !== 0 && (a.l.push(b),
        a.i += b.length)
    }
    function Dh(a, b) {
        Eh(a, b, 2);
        b = a.g.end();
        Ch(a, b);
        b.push(a.i);
        return b
    }
    function Fh(a, b) {
        var c = b.pop();
        for (c = a.i + a.g.length() - c; c > 127; )
            b.push(c & 127 | 128),
            c >>>= 7,
            a.i++;
        b.push(c);
        a.i++
    }
    function Eh(a, b, c) {
        yh(a.g, b * 8 + c)
    }
    function Gh(a, b, c) {
        if (c != null)
            switch (Eh(a, b, 0),
            typeof c) {
            case "number":
                a = a.g;
                jf(c);
                xh(a, ef, ff);
                break;
            case "bigint":
                c = BigInt.asUintN(64, c);
                c = new qh(Number(c & BigInt(4294967295)),Number(c >> BigInt(32)));
                xh(a.g, c.i, c.g);
                break;
            default:
                c = rh(c),
                xh(a.g, c.i, c.g)
            }
    }
    function Hh(a, b, c) {
        c != null && (c = parseInt(c, 10),
        Eh(a, b, 0),
        zh(a.g, c))
    }
    ;function Ih() {
        function a() {
            throw Error();
        }
        Object.setPrototypeOf(a, a.prototype);
        return a
    }
    var Jh = Ih()
      , Kh = Ih()
      , Lh = Ih()
      , Mh = Ih()
      , Nh = Ih()
      , Oh = Ih()
      , Ph = Ih()
      , Qh = Ih()
      , Rh = Ih()
      , Sh = Ih()
      , Th = Ih();
    function Uh(a, b, c) {
        this.F = eg(a, b, c, 2048)
    }
    Uh.prototype.toJSON = function() {
        return $f(this)
    }
    ;
    function Vh(a) {
        return JSON.stringify($f(a))
    }
    Uh.prototype.clone = function() {
        var a = this.F
          , b = a[K] | 0;
        return ig(this, a, b) ? jg(this, a, !0) : new this.constructor(hg(a, b, !1))
    }
    ;
    Uh.prototype[He] = Oe;
    Uh.prototype.toString = function() {
        return this.F.toString()
    }
    ;
    function Wh(a, b, c) {
        this.g = a;
        this.i = b;
        a = Na(Jh);
        this.l = !!a && c === a || !1
    }
    function Xh(a) {
        var b = Yh;
        var c = c === void 0 ? Jh : c;
        return new Wh(a,b,c)
    }
    function Yh(a, b, c, d, e) {
        b = b instanceof Uh ? b.F : Array.isArray(b) ? dg(b, d) : void 0;
        b != null && (c = Dh(a, c),
        e(b, a),
        Fh(a, c))
    }
    var Zh = Xh(function(a, b, c, d, e) {
        if (a.i !== 2)
            return !1;
        oh(a, Bg(b, d, c), e);
        return !0
    }), $h = Xh(function(a, b, c, d, e) {
        if (a.i !== 2)
            return !1;
        oh(a, Bg(b, d, c), e);
        return !0
    }), ai = Symbol(), bi = Symbol(), ci = Symbol(), di = Symbol(), ei = Symbol(), fi, gi;
    function hi(a, b, c, d) {
        var e = d[a];
        if (e)
            return e;
        e = {};
        e.Df = d;
        e.Ac = cg(d[0]);
        var f = d[1]
          , g = 1;
        f && f.constructor === Object && (e.Hd = f,
        f = d[++g],
        typeof f === "function" && (e.Ve = !0,
        fi != null || (fi = f),
        gi != null || (gi = d[g + 1]),
        f = d[g += 2]));
        for (var h = {}; f && ii(f); ) {
            for (var k = 0; k < f.length; k++)
                h[f[k]] = f;
            f = d[++g]
        }
        for (k = 1; f !== void 0; ) {
            typeof f === "number" && (k += f,
            f = d[++g]);
            var l = void 0;
            if (f instanceof Wh)
                var m = f;
            else
                m = Zh,
                g--;
            f = void 0;
            if ((f = m) == null ? 0 : f.l) {
                f = d[++g];
                l = d;
                var q = g;
                typeof f === "function" && (f = f(),
                l[q] = f);
                l = f
            }
            f = d[++g];
            q = k + 1;
            typeof f === "number" && f < 0 && (q -= f,
            f = d[++g]);
            for (; k < q; k++) {
                var r = h[k];
                l ? c(e, k, m, l, r) : b(e, k, m, r)
            }
        }
        return d[a] = e
    }
    function ii(a) {
        return Array.isArray(a) && !!a.length && typeof a[0] === "number" && a[0] > 0
    }
    function ji(a) {
        return Array.isArray(a) ? a[0]instanceof Wh ? a : [$h, a] : [a, void 0]
    }
    ;function ki(a, b, c, d) {
        var e = c.g;
        a[b] = d ? function(f, g, h) {
            return e(f, g, h, d)
        }
        : e
    }
    function li(a, b, c, d, e) {
        var f = c.g, g, h;
        a[b] = function(k, l, m) {
            return f(k, l, m, h || (h = hi(bi, ki, li, d).Ac), g || (g = mi(d)), e)
        }
    }
    function mi(a) {
        var b = a[ci];
        if (b != null)
            return b;
        var c = hi(bi, ki, li, a);
        b = c.Ve ? function(d, e) {
            return fi(d, e, c)
        }
        : function(d, e) {
            for (; mh(e) && e.i != 4; ) {
                var f = e.l
                  , g = c[f];
                if (g == null) {
                    var h = c.Hd;
                    h && (h = h[f]) && (h = ni(h),
                    h != null && (g = c[f] = h))
                }
                if (g == null || !g(e, d, f)) {
                    g = e;
                    h = g.m;
                    nh(g);
                    var k = g;
                    if (k.Ed)
                        var l = void 0;
                    else
                        g = k.g.g - h,
                        k.g.g = h,
                        k = k.g,
                        g == 0 ? g = ue || (ue = new re(null,qe)) : (h = fh(k, g),
                        k.Oc && k.o ? g = k.i.subarray(h, h + g) : (k = k.i,
                        g = h + g,
                        g = h === g ? new Uint8Array(0) : df ? k.slice(h, g) : new Uint8Array(k.subarray(h, g))),
                        g = g.length == 0 ? ue || (ue = new re(null,qe)) : new re(g,qe)),
                        l = g;
                    k = h = g = void 0;
                    var m = d;
                    l && ((g = (h = (k = m[De]) != null ? k : m[De] = new Tf)[f]) != null ? g : h[f] = []).push(l)
                }
            }
            if (d = Sf(d))
                d.g = c.Df[ei];
            return !0
        }
        ;
        a[ci] = b;
        a[ei] = oi.bind(a);
        return b
    }
    function oi(a, b, c, d) {
        var e = this[bi]
          , f = this[ci]
          , g = dg(void 0, e.Ac)
          , h = Sf(a);
        if (h) {
            var k = !1
              , l = e.Hd;
            if (l) {
                e = function(t, w, u) {
                    if (u.length !== 0)
                        if (l[w])
                            for (t = y(u),
                            w = t.next(); !w.done; w = t.next()) {
                                w = jh(w.value);
                                try {
                                    k = !0,
                                    f(g, w)
                                } finally {
                                    lh(w)
                                }
                            }
                        else
                            d == null || d(a, w, u)
                }
                ;
                if (b == null)
                    Uf(h, e);
                else if (h != null) {
                    var m = h[b];
                    m && e(h, b, m)
                }
                if (k) {
                    var q = a[K] | 0;
                    if (q & 2 && q & 2048 && (c == null || !c.Wh))
                        throw Error();
                    var r = q & 128 ? Te : void 0
                      , v = function(t, w) {
                        if (og(a, t, r) != null)
                            switch (c == null ? void 0 : c.Vh) {
                            case 1:
                                return;
                            default:
                                throw Error();
                            }
                        w != null && (q = qg(a, q, t, w, r));
                        delete h[t]
                    };
                    b == null ? Se(g, g[K] | 0, function(t, w) {
                        v(t, w)
                    }) : v(b, og(g, b, r))
                }
            }
        }
    }
    function ni(a) {
        a = ji(a);
        var b = a[0].g;
        if (a = a[1]) {
            var c = mi(a)
              , d = hi(bi, ki, li, a).Ac;
            return function(e, f, g) {
                return b(e, f, g, d, c)
            }
        }
        return b
    }
    ;function pi(a, b, c) {
        a[b] = c.i
    }
    function qi(a, b, c, d) {
        var e, f, g = c.i;
        a[b] = function(h, k, l) {
            return g(h, k, l, f || (f = hi(ai, pi, qi, d).Ac), e || (e = ri(d)))
        }
    }
    function ri(a) {
        var b = a[di];
        if (!b) {
            var c = hi(ai, pi, qi, a);
            b = function(d, e) {
                return si(d, e, c)
            }
            ;
            a[di] = b
        }
        return b
    }
    function si(a, b, c) {
        Se(a, a[K] | 0, function(d, e) {
            if (e != null) {
                var f = ti(c, d);
                f ? f(b, e, d) : d < 500 || xe(Fe, 3)
            }
        });
        (a = Sf(a)) && Uf(a, function(d, e, f) {
            Ch(b, b.g.end());
            for (d = 0; d < f.length; d++)
                Ch(b, te(f[d]) || new Uint8Array(0))
        })
    }
    function ti(a, b) {
        var c = a[b];
        if (c)
            return c;
        if (c = a.Hd)
            if (c = c[b]) {
                c = ji(c);
                var d = c[0].i;
                if (c = c[1]) {
                    var e = ri(c)
                      , f = hi(ai, pi, qi, c).Ac;
                    c = a.Ve ? gi(f, e) : function(g, h, k) {
                        return d(g, h, k, f, e)
                    }
                } else
                    c = d;
                return a[b] = c
            }
    }
    ;var ui = Ve(0);
    function vi(a, b, c) {
        if (Array.isArray(b)) {
            var d = b[K] | 0;
            if (d & 4)
                return b;
            for (var e = 0, f = 0; e < b.length; e++) {
                var g = a(b[e]);
                g != null && (b[f++] = g)
            }
            f < e && (b.length = f);
            a = d | 1;
            c && (a = (a | 4) & -1537);
            a !== d && Me(b, a);
            c && a & 2 && Object.freeze(b);
            return b
        }
    }
    function wi(a, b) {
        var c = new Bh;
        si(a.F, c, hi(ai, pi, qi, b));
        Ch(c, c.g.end());
        a = new Uint8Array(c.i);
        b = c.l;
        for (var d = b.length, e = 0, f = 0; f < d; f++) {
            var g = b[f];
            a.set(g, e);
            e += g.length
        }
        c.l = [a];
        return a
    }
    function xi(a, b, c) {
        return new Wh(a,b,c)
    }
    function yi(a, b, c) {
        return new Wh(a,b,c)
    }
    function zi(a, b, c) {
        qg(a, a[K] | 0, b, c, (a[K] | 0) & 128 ? Te : void 0)
    }
    function Ai(a, b, c) {
        b = zf(b);
        b != null && (Eh(a, c, 1),
        a = a.g,
        c = gf || (gf = new DataView(new ArrayBuffer(8))),
        c.setFloat64(0, +b, !0),
        ef = c.getUint32(0, !0),
        ff = c.getUint32(4, !0),
        Ah(a, ef),
        Ah(a, ff))
    }
    function Bi(a, b, c) {
        b = Nf(b);
        if (b != null) {
            switch (typeof b) {
            case "string":
                uh(b)
            }
            if (b != null)
                switch (Eh(a, c, 0),
                typeof b) {
                case "number":
                    a = a.g;
                    jf(b);
                    xh(a, ef, ff);
                    break;
                case "bigint":
                    c = BigInt.asUintN(64, b);
                    c = new th(Number(c & BigInt(4294967295)),Number(c >> BigInt(32)));
                    xh(a.g, c.i, c.g);
                    break;
                default:
                    c = uh(b),
                    xh(a.g, c.i, c.g)
                }
        }
    }
    function Ci(a, b, c) {
        b = Gf(b);
        b != null && b != null && (Eh(a, c, 0),
        zh(a.g, b))
    }
    function Di(a, b, c) {
        if (a.i !== 0 && a.i !== 2)
            return !1;
        b = Ag(b, b[K] | 0, c);
        a.i == 2 ? ph(a, eh, b) : b.push(Wg(a.g));
        return !0
    }
    var Ei = xi(function(a, b, c) {
        if (a.i !== 1)
            return !1;
        zi(b, c, ch(a.g));
        return !0
    }, Ai, Sh)
      , Fi = xi(function(a, b, c) {
        if (a.i !== 1)
            return !1;
        a = ch(a.g);
        zi(b, c, a === 0 ? void 0 : a);
        return !0
    }, Ai, Sh)
      , Gi = xi(function(a, b, c) {
        if (a.i !== 5)
            return !1;
        var d = $g(a.g);
        a = (d >> 31) * 2 + 1;
        var e = d >>> 23 & 255;
        d &= 8388607;
        zi(b, c, e == 255 ? d ? NaN : a * Infinity : e == 0 ? a * 1.401298464324817E-45 * d : a * Math.pow(2, e - 150) * (d + 8388608));
        return !0
    }, function(a, b, c) {
        b = zf(b);
        b != null && (Eh(a, c, 5),
        a = a.g,
        c = gf || (gf = new DataView(new ArrayBuffer(8))),
        c.setFloat32(0, +b, !0),
        ff = 0,
        ef = c.getUint32(0, !0),
        Ah(a, ef))
    }, Rh)
      , Hi = xi(function(a, b, c) {
        if (Vb)
            return a.i !== 0 ? a = !1 : (zi(b, c, Ug(a.g, pf)),
            a = !0),
            a;
        if (a.i !== 0)
            return !1;
        zi(b, c, Ug(a.g, of));
        return !0
    }, Bi, Ph)
      , Ii = xi(function(a, b, c) {
        if (Vb)
            return a.i !== 0 ? b = !1 : (a = Ug(a.g, pf),
            zi(b, c, a === ui ? void 0 : a),
            b = !0),
            b;
        if (a.i !== 0)
            return !1;
        a = Ug(a.g, of);
        zi(b, c, a === 0 ? void 0 : a);
        return !0
    }, Bi, Ph)
      , Ji = xi(function(a, b, c) {
        if (Vb)
            return a.i !== 0 ? a = !1 : (zi(b, c, Zg(a.g)),
            a = !0),
            a;
        if (a.i !== 0)
            return !1;
        zi(b, c, Yg(a.g));
        return !0
    }, function(a, b, c) {
        b = Of(b);
        if (b != null) {
            switch (typeof b) {
            case "string":
                rh(b)
            }
            Gh(a, c, b)
        }
    }, Qh)
      , Ki = yi(function(a, b, c) {
        if (Vb)
            return a.i !== 0 && a.i !== 2 ? a = !1 : (b = Ag(b, b[K] | 0, c),
            a.i == 2 ? ph(a, Zg, b) : b.push(Zg(a.g)),
            a = !0),
            a;
        if (a.i !== 0 && a.i !== 2)
            return !1;
        b = Ag(b, b[K] | 0, c);
        a.i == 2 ? ph(a, Yg, b) : b.push(Yg(a.g));
        return !0
    }, function(a, b, c) {
        b = vi(Of, b, !1);
        if (b != null)
            for (var d = 0; d < b.length; d++)
                Gh(a, c, b[d])
    }, Qh)
      , Li = xi(function(a, b, c) {
        if (a.i !== 0)
            return !1;
        zi(b, c, Wg(a.g));
        return !0
    }, Ci, Mh)
      , Mi = yi(function(a, b, c) {
        if (a.i !== 0 && a.i !== 2)
            return !1;
        b = Ag(b, b[K] | 0, c);
        a.i == 2 ? ph(a, Wg, b) : b.push(Wg(a.g));
        return !0
    }, function(a, b, c) {
        b = vi(Gf, b, !0);
        if (b != null)
            for (var d = 0; d < b.length; d++) {
                var e = a
                  , f = c
                  , g = b[d];
                g != null && (Eh(e, f, 0),
                zh(e.g, g))
            }
    }, Mh)
      , Ni = xi(function(a, b, c) {
        if (a.i !== 0)
            return !1;
        a = Wg(a.g);
        zi(b, c, a === 0 ? void 0 : a);
        return !0
    }, Ci, Mh)
      , Oi = xi(function(a, b, c) {
        if (a.i !== 5)
            return !1;
        zi(b, c, $g(a.g));
        return !0
    }, function(a, b, c) {
        b = Hf(b);
        b != null && (Eh(a, c, 5),
        Ah(a.g, b))
    }, Oh)
      , Pi = xi(function(a, b, c) {
        if (a.i !== 0)
            return !1;
        zi(b, c, dh(a.g));
        return !0
    }, function(a, b, c) {
        b = Af(b);
        b != null && (Eh(a, c, 0),
        a.g.g.push(b ? 1 : 0))
    }, Kh)
      , Qi = xi(function(a, b, c) {
        if (a.i !== 2)
            return !1;
        var d = Xg(a.g);
        a = a.g;
        var e = fh(a, d);
        a = a.i;
        if (Zd) {
            var f = a, g;
            (g = Yd) || (g = Yd = new TextDecoder("utf-8",{
                fatal: !0
            }));
            d = e + d;
            f = e === 0 && d === f.length ? f : f.subarray(e, d);
            try {
                var h = g.decode(f)
            } catch (q) {
                if (Xd === void 0) {
                    try {
                        g.decode(new Uint8Array([128]))
                    } catch (r) {}
                    try {
                        g.decode(new Uint8Array([97])),
                        Xd = !0
                    } catch (r) {
                        Xd = !1
                    }
                }
                !Xd && (Yd = void 0);
                throw q;
            }
        } else {
            h = e;
            d = h + d;
            e = [];
            for (var k = null, l, m; h < d; )
                l = a[h++],
                l < 128 ? e.push(l) : l < 224 ? h >= d ? Vd() : (m = a[h++],
                l < 194 || (m & 192) !== 128 ? (h--,
                Vd()) : e.push((l & 31) << 6 | m & 63)) : l < 240 ? h >= d - 1 ? Vd() : (m = a[h++],
                (m & 192) !== 128 || l === 224 && m < 160 || l === 237 && m >= 160 || ((g = a[h++]) & 192) !== 128 ? (h--,
                Vd()) : e.push((l & 15) << 12 | (m & 63) << 6 | g & 63)) : l <= 244 ? h >= d - 2 ? Vd() : (m = a[h++],
                (m & 192) !== 128 || (l << 28) + (m - 144) >> 30 !== 0 || ((g = a[h++]) & 192) !== 128 || ((f = a[h++]) & 192) !== 128 ? (h--,
                Vd()) : (l = (l & 7) << 18 | (m & 63) << 12 | (g & 63) << 6 | f & 63,
                l -= 65536,
                e.push((l >> 10 & 1023) + 55296, (l & 1023) + 56320))) : Vd(),
                e.length >= 8192 && (k = Wd(k, e),
                e.length = 0);
            h = Wd(k, e)
        }
        zi(b, c, h);
        return !0
    }, function(a, b, c) {
        b = Pf(b);
        if (b != null) {
            var d = !1;
            d = d === void 0 ? !1 : d;
            if (be) {
                if (d && (ae ? !b.isWellFormed() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b)))
                    throw Error("Found an unpaired surrogate");
                b = ($d || ($d = new TextEncoder)).encode(b)
            } else {
                for (var e = 0, f = new Uint8Array(3 * b.length), g = 0; g < b.length; g++) {
                    var h = b.charCodeAt(g);
                    if (h < 128)
                        f[e++] = h;
                    else {
                        if (h < 2048)
                            f[e++] = h >> 6 | 192;
                        else {
                            if (h >= 55296 && h <= 57343) {
                                if (h <= 56319 && g < b.length) {
                                    var k = b.charCodeAt(++g);
                                    if (k >= 56320 && k <= 57343) {
                                        h = (h - 55296) * 1024 + k - 56320 + 65536;
                                        f[e++] = h >> 18 | 240;
                                        f[e++] = h >> 12 & 63 | 128;
                                        f[e++] = h >> 6 & 63 | 128;
                                        f[e++] = h & 63 | 128;
                                        continue
                                    } else
                                        g--
                                }
                                if (d)
                                    throw Error("Found an unpaired surrogate");
                                h = 65533
                            }
                            f[e++] = h >> 12 | 224;
                            f[e++] = h >> 6 & 63 | 128
                        }
                        f[e++] = h & 63 | 128
                    }
                }
                b = e === f.length ? f : f.subarray(0, e)
            }
            Eh(a, c, 2);
            yh(a.g, b.length);
            Ch(a, a.g.end());
            Ch(a, b)
        }
    }, Lh)
      , Ri = xi(function(a, b, c) {
        if (a.i !== 0)
            return !1;
        zi(b, c, Xg(a.g));
        return !0
    }, function(a, b, c) {
        b = Hf(b);
        b != null && b != null && (Eh(a, c, 0),
        yh(a.g, b))
    }, Nh)
      , Si = yi(function(a, b, c) {
        if (a.i !== 0 && a.i !== 2)
            return !1;
        b = Ag(b, b[K] | 0, c);
        a.i == 2 ? ph(a, Xg, b) : b.push(Xg(a.g));
        return !0
    }, function(a, b, c) {
        b = vi(Hf, b, !0);
        if (b != null && b.length) {
            c = Dh(a, c);
            for (var d = 0; d < b.length; d++)
                yh(a.g, b[d]);
            Fh(a, c)
        }
    }, Nh)
      , Ti = xi(function(a, b, c) {
        if (a.i !== 0)
            return !1;
        zi(b, c, Wg(a.g));
        return !0
    }, function(a, b, c) {
        Hh(a, c, Gf(b))
    }, Th)
      , Ui = yi(Di, function(a, b, c) {
        b = vi(Gf, b, !0);
        if (b != null)
            for (var d = 0; d < b.length; d++)
                Hh(a, c, b[d])
    }, Th)
      , Vi = yi(Di, function(a, b, c) {
        b = vi(Gf, b, !0);
        if (b != null && b.length) {
            c = Dh(a, c);
            for (var d = 0; d < b.length; d++)
                zh(a.g, b[d]);
            Fh(a, c)
        }
    }, Th);
    function Wi(a, b) {
        return function(c, d) {
            var e = {
                hd: !0
            };
            d && Object.assign(e, d);
            c = jh(c, void 0, void 0, e);
            try {
                var f = new a
                  , g = f.F;
                mi(b)(g, c);
                var h = f
            } finally {
                lh(c)
            }
            return h
        }
    }
    function Xi(a) {
        return function() {
            return wi(this, a)
        }
    }
    function Yi(a) {
        return function(b) {
            if (b == null || b == "")
                b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error("dnarr");
                Ne(b, 32);
                b = new a(b)
            }
            return b
        }
    }
    ;function Zi(a) {
        this.F = eg(a, void 0, void 0, 2048)
    }
    x(Zi, Uh);
    Zi.prototype.g = Xi([0, Fi, Ii, -2, Ni]);
    function $i(a) {
        this.l = a;
        this.g = -1;
        this.i = this.m = 0
    }
    function aj(a, b) {
        return function() {
            var c = D.apply(0, arguments);
            if (a.g > -1)
                return b.apply(null, z(c));
            try {
                return a.g = a.l.i.now(),
                b.apply(null, z(c))
            } finally {
                a.m += a.l.i.now() - a.g,
                a.g = -1,
                a.i += 1
            }
        }
    }
    ;function bj(a, b) {
        this.i = a;
        this.l = b;
        this.g = new $i(a)
    }
    ;function cj() {
        this.g = {}
    }
    function dj(a, b) {
        a = a.g[b.key];
        if (b.valueType === "proto") {
            try {
                var c = JSON.parse(a);
                if (Array.isArray(c))
                    return c
            } catch (d) {}
            return b.defaultValue
        }
        return typeof a === typeof b.defaultValue ? a : b.defaultValue
    }
    function ej(a, b) {
        try {
            var c = JSON.parse(b)[0];
            b = "";
            for (var d = 0; d < c.length; d++)
                b += String.fromCharCode(c.charCodeAt(d) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(d % 10));
            a.g = JSON.parse(b)
        } catch (e) {}
    }
    ;var fj = {
        nh: 1,
        th: 2,
        mh: 3,
        1: "POSITION",
        2: "VISIBILITY",
        3: "MONITOR_VISIBILITY"
    };
    function gj() {
        this.B = void 0;
        this.Ka = this.H = 0;
        this.D = -1;
        this.g = new Jb;
        Eb(Kb(this.g, "mv", tb)).i = ub === void 0 ? null : ub;
        Kb(this.g, "omid", pb);
        Eb(Kb(this.g, "epoh", pb));
        Eb(Kb(this.g, "epph", pb));
        Eb(Kb(this.g, "umt", pb)).i = qb === void 0 ? null : qb;
        Eb(Kb(this.g, "phel", pb));
        Eb(Kb(this.g, "phell", pb));
        Eb(Kb(this.g, "oseid", fj));
        var a = this.g;
        a.g.sloi || (a.g.sloi = new Ib);
        Eb(a.g.sloi);
        Kb(this.g, "mm", nb);
        Eb(Kb(this.g, "ovms", mb));
        Eb(Kb(this.g, "xdi", pb));
        Eb(Kb(this.g, "amp", pb));
        Eb(Kb(this.g, "prf", pb));
        Eb(Kb(this.g, "gtx", pb));
        Eb(Kb(this.g, "mvp_lv", pb));
        Eb(Kb(this.g, "ssmol", pb)).i = sb === void 0 ? null : sb;
        Eb(Kb(this.g, "fmd", pb));
        Kb(this.g, "gen204simple", pb);
        this.i = new bj(Td(),this.g);
        this.o = null;
        this.l = this.m = this.u = !1;
        this.flags = new cj
    }
    function L() {
        return Qd(gj)
    }
    ;function hj(a, b, c, d) {
        if (Math.random() < (d || a.g))
            try {
                if (c instanceof Bd)
                    var e = c;
                else
                    e = new Bd,
                    Ad(c, function(g, h) {
                        var k = e
                          , l = k.m++;
                        g = Cd(h, g);
                        k.g.push(l);
                        k.i[l] = g
                    });
                var f = Fd(e, a.i, "/pagead/gen_204?id=" + b + "&");
                f && Sd(f)
            } catch (g) {}
    }
    ;function ij(a, b, c) {
        c = c === void 0 ? {} : c;
        this.error = a;
        this.meta = c;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror"
    }
    ;var jj = null;
    function kj() {
        var a = a === void 0 ? Ia : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }
    function lj() {
        var a = a === void 0 ? Ia : a;
        return (a = a.performance) && a.now ? a.now() : null
    }
    ;function mj(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.taskId = this.slotId = void 0;
        this.uniqueId = Math.random()
    }
    ;var nj = Ia.performance
      , oj = !!(nj && nj.mark && nj.measure && nj.clearMarks)
      , pj = fd(function() {
        var a;
        if (a = oj) {
            var b = b === void 0 ? window : b;
            if (jj === null) {
                jj = "";
                try {
                    a = "";
                    try {
                        a = b.top.location.hash
                    } catch (d) {
                        a = b.location.hash
                    }
                    if (a) {
                        var c = a.match(/\bdeid=([\d,]+)/);
                        jj = c ? c[1] : ""
                    }
                } catch (d) {}
            }
            b = jj;
            a = !!b.indexOf && b.indexOf("1337") >= 0
        }
        return a
    });
    function qj() {
        var a = window;
        this.events = [];
        this.i = a || Ia;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [],
        this.events = a.google_js_reporting_queue,
        b = a.google_measure_js_timing);
        this.g = pj() || (b != null ? b : Math.random() < 1)
    }
    function rj(a) {
        a && nj && pj() && (nj.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
        nj.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    qj.prototype.start = function(a, b) {
        if (!this.g)
            return null;
        var c = lj() || kj();
        a = new mj(a,b,c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        nj && pj() && nj.mark(b);
        return a
    }
    ;
    qj.prototype.end = function(a) {
        if (this.g && typeof a.value === "number") {
            var b = lj() || kj();
            a.duration = b - a.value;
            b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            nj && pj() && nj.mark(b);
            !this.g || this.events.length > 2048 || this.events.push(a)
        }
    }
    ;
    var sj = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    function tj(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("=")
                  , e = null;
                if (d >= 0) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else
                    f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    }
    ;function uj() {
        var a = vj;
        this.i = wj;
        this.He = "jserror";
        this.de = !0;
        this.xd = null;
        this.l = this.Td;
        this.g = a === void 0 ? null : a
    }
    function xj(a, b) {
        var c = yj;
        return aj(L().i.g, function() {
            try {
                if (c.g && c.g.g) {
                    var d = c.g.start(a.toString(), 3);
                    var e = b();
                    c.g.end(d)
                } else
                    e = b()
            } catch (g) {
                var f = c.de;
                try {
                    rj(d),
                    f = c.l(a, new zj(Aj(g)), void 0, void 0)
                } catch (h) {
                    c.Td(217, h)
                }
                if (!f)
                    throw g;
            }
            return e
        })()
    }
    function Bj(a, b) {
        return aj(L().i.g, function() {
            var c = D.apply(0, arguments);
            return xj(a, function() {
                return b.apply(void 0, c)
            })
        })
    }
    uj.prototype.Td = function(a, b, c, d, e) {
        e = e || this.He;
        try {
            var f = new Bd;
            f.g.push(1);
            f.i[1] = Cd("context", a);
            b.error && b.meta && b.id || (b = new zj(Aj(b)));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.g.push(2);
                f.i[2] = Cd("msg", g)
            }
            var h = b.meta || {};
            if (this.xd)
                try {
                    this.xd(h)
                } catch (F) {}
            if (d)
                try {
                    d(h)
                } catch (F) {}
            d = [h];
            f.g.push(3);
            f.i[3] = d;
            var k = k || xd();
            var l = new yd(Ia.location.href,!1);
            d = null;
            var m = k.length - 1;
            for (g = m; g >= 0; --g) {
                var q = k[g];
                !d && wd.test(q.url) && (d = q);
                if (q.url && !q.g) {
                    l = q;
                    break
                }
            }
            q = null;
            var r = k.length && k[m].url;
            l.depth !== 0 && r && (q = k[m]);
            var v = new zd(l,q);
            if (v.i) {
                var t = v.i.url || "";
                f.g.push(4);
                f.i[4] = Cd("top", t)
            }
            var w = {
                url: v.g.url || ""
            };
            if (v.g.url) {
                var u = v.g.url.match(sj)
                  , C = u[1]
                  , R = u[3]
                  , I = u[4];
                k = "";
                C && (k += C + ":");
                R && (k += "//",
                k += R,
                I && (k += ":" + I));
                var fa = k
            } else
                fa = "";
            w = [w, {
                url: fa
            }];
            f.g.push(5);
            f.i[5] = w;
            hj(this.i, e, f, c)
        } catch (F) {
            try {
                hj(this.i, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Aj(F),
                    url: v && v.g.url
                }, c)
            } catch (A) {}
        }
        return this.de
    }
    ;
    function Aj(a) {
        var b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack)
            a: {
                a = a.stack;
                var c = b;
                try {
                    a.indexOf(c) == -1 && (a = c + "\n" + a);
                    for (var d; a != d; )
                        d = a,
                        a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n");
                    break a
                } catch (e) {
                    b = c;
                    break a
                }
                b = void 0
            }
        return b
    }
    function zj(a) {
        ij.call(this, Error(a), {
            message: a
        })
    }
    x(zj, ij);
    var wj, yj, vj = new qj;
    function Cj() {
        if (G && typeof G.google_measure_js_timing != "undefined" && !G.google_measure_js_timing) {
            var a = vj;
            a.g = !1;
            a.events !== a.i.google_js_reporting_queue && (pj() && Ra(a.events, rj),
            a.events.length = 0)
        }
    }
    wj = new function() {
        var a = "https:";
        G && G.location && G.location.protocol === "http:" && (a = "http:");
        this.i = a;
        this.g = .01
    }
    ;
    yj = new uj;
    G && G.document && (G.document.readyState == "complete" ? Cj() : vj.g && nd(G, "load", function() {
        Cj()
    }));
    function Dj(a) {
        yj.xd = function(b) {
            Ra(a, function(c) {
                c(b)
            })
        }
    }
    function Ej(a, b) {
        return xj(a, b)
    }
    function Fj(a, b) {
        return Bj(a, b)
    }
    function Gj(a, b, c, d) {
        yj.Td(a, b, c, d)
    }
    ;var Hj = Date.now()
      , Ij = -1
      , Jj = -1
      , Kj = !1;
    function Lj() {
        return Date.now() - Hj
    }
    function Mj() {
        var a = L().B
          , b = Jj >= 0 ? Lj() - Jj : -1
          , c = Kj ? Lj() - Ij : -1;
        if (a == 947190542)
            return 100;
        if (a == 79463069)
            return 200;
        a = [2E3, 4E3];
        var d = [250, 500, 1E3];
        Gj(637, Error(), .001);
        var e = b;
        c != -1 && c < b && (e = c);
        for (b = 0; b < a.length; ++b)
            if (e < a[b]) {
                var f = d[b];
                break
            }
        f === void 0 && (f = d[a.length]);
        return f
    }
    ;function Nj(a, b, c) {
        var d = new J(0,0,0,0);
        this.time = a;
        this.volume = null;
        this.l = b;
        this.g = d;
        this.i = null;
        this.m = c
    }
    Nj.prototype.equals = function(a, b) {
        return !!a && (!(b === void 0 ? 0 : b) || this.volume == a.volume) && this.l == a.l && gd(this.g, a.g) && this.i == a.i
    }
    ;
    function Oj(a, b, c, d, e, f, g, h) {
        this.m = a;
        this.D = b;
        this.l = c;
        this.u = d;
        this.i = e;
        this.o = f;
        this.g = g;
        this.B = h
    }
    Oj.prototype.equals = function(a, b) {
        return this.m.equals(a.m, b === void 0 ? !1 : b) && this.D == a.D && gd(this.l, a.l) && gd(this.u, a.u) && this.i == a.i && this.o == a.o && this.g == a.g && this.B == a.B
    }
    ;
    var Pj = ["GoogleActiveViewElement", "GoogleActiveViewClass", "DfaVisibilityIdentifier"];
    var yb = {
        nf: "addEventListener",
        qf: "getMaxSize",
        rf: "getScreenSize",
        sf: "getState",
        tf: "getVersion",
        vf: "removeEventListener",
        uf: "isViewable"
    };
    function Qj(a) {
        var b = a !== a.top
          , c = a.top === td(a)
          , d = -1
          , e = 0;
        if (b && c && a.top.mraid) {
            d = 3;
            var f = a.top.mraid
        } else
            d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
        f && (f.IS_GMA_SDK || (e = 2),
        xb(function(g) {
            return typeof f[g] === "function"
        }) || (e = 1));
        return {
            Ea: f,
            Pa: e,
            Ua: d
        }
    }
    ;function Rj() {
        var a = window.document;
        return a && typeof a.elementFromPoint === "function"
    }
    ;function Sj(a, b, c) {
        try {
            if (a) {
                if (!b.top)
                    return new J(-12245933,-12245933,-12245933,-12245933);
                b = b.top
            }
            a: {
                var d = b;
                if (a && d !== null && d != d.top) {
                    if (!d.top) {
                        var e = new Kc(-12245933,-12245933);
                        break a
                    }
                    d = d.top
                }
                try {
                    if (c === void 0 ? 0 : c)
                        var f = (new Kc(d.innerWidth,d.innerHeight)).round();
                    else {
                        var g = (d || window).document
                          , h = g.compatMode == "CSS1Compat" ? g.documentElement : g.body;
                        f = (new Kc(h.clientWidth,h.clientHeight)).round()
                    }
                    e = f
                } catch (t) {
                    e = new Kc(-12245933,-12245933)
                }
            }
            a = e;
            var k = a.height
              , l = a.width;
            if (l === -12245933)
                return new J(l,l,l,l);
            var m = Mc(b.document);
            var q = Pc(m.g);
            var r = q.x
              , v = q.y;
            return new J(v,r + l,v + k,r)
        } catch (t) {
            return new J(-12245933,-12245933,-12245933,-12245933)
        }
    }
    ;function Tj() {
        var a = Td().g;
        return a.g() ? -1 : a.isVisible() ? 0 : 1
    }
    ;function Uj() {
        var a = Yb();
        return a ? Xa("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;Version/8.0 Safari/601.1 WPE;WebOS".split(";"), function(b) {
            return Xb(a, b)
        }) || Xb(a, "OMI/") && !Xb(a, "XiaoMi/") ? !0 : Xb(a, "Presto") && Xb(a, "Linux") && !Xb(a, "X11") && !Xb(a, "Android") && !Xb(a, "Mobi") : !1
    }
    function Vj() {
        var a;
        (a = Xb(Yb(), "CrKey") && !(Xb(Yb(), "CrKey") && Xb(Yb(), "SmartSpeaker")) || Xb(Yb(), "PlayStation") || Xb(Yb(), "Roku") || Uj() || Xb(Yb(), "Xbox")) || (a = Yb(),
        a = Xb(a, "AppleTV") || Xb(a, "Apple TV") || Xb(a, "CFNetwork") || Xb(a, "tvOS"));
        a || (a = Yb(),
        a = Xb(a, "sdk_google_atv_x86") || Xb(a, "Android TV"));
        return a
    }
    ;function Wj() {
        this.B = !sd(G.top);
        this.o = vd() || ud();
        var a = xd();
        a = a.length > 0 && a[a.length - 1] != null && a[a.length - 1].url != null ? ((a = a[a.length - 1].url.match(sj)[3] || null) ? decodeURI(a) : a) || "" : "";
        this.domain = a;
        this.g = new J(0,0,0,0);
        this.l = new Kc(0,0);
        this.u = new Kc(0,0);
        this.i = new J(0,0,0,0);
        this.frameOffset = new Jc(0,0);
        this.D = !1;
        this.m = !(!G || !Qj(G).Ea);
        this.update(G)
    }
    function Xj(a, b) {
        b && b.screen && (a.l = new Kc(b.screen.width,b.screen.height))
    }
    function Yj(a, b) {
        a: {
            var c = a.g ? new Kc(a.g.bb(),a.g.Za()) : new Kc(0,0);
            b = b === void 0 ? G : b;
            b !== null && b != b.top && (b = b.top);
            var d = 0
              , e = 0;
            try {
                var f = b.document
                  , g = f.body
                  , h = f.documentElement;
                if (f.compatMode == "CSS1Compat" && h.scrollHeight)
                    d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight,
                    e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
                else {
                    var k = h.scrollHeight
                      , l = h.scrollWidth
                      , m = h.offsetHeight
                      , q = h.offsetWidth;
                    h.clientHeight != m && (k = g.scrollHeight,
                    l = g.scrollWidth,
                    m = g.offsetHeight,
                    q = g.offsetWidth);
                    k > c.height ? k > m ? (d = k,
                    e = l) : (d = m,
                    e = q) : k < m ? (d = k,
                    e = l) : (d = m,
                    e = q)
                }
                var r = new Kc(e,d);
                break a
            } catch (v) {
                r = new Kc(-12245933,-12245933);
                break a
            }
            r = void 0
        }
        a.u = r
    }
    Wj.prototype.update = function(a) {
        a && a.document && (this.i = Sj(!1, a, this.o),
        this.g = Sj(!0, a, this.o),
        Yj(this, a),
        Xj(this, a))
    }
    ;
    function Zj() {
        if (ak().D)
            return !0;
        var a = Td().g
          , b = a.isVisible();
        a = a.g();
        return b || a
    }
    function ak() {
        return Qd(Wj)
    }
    ;function bk(a) {
        this.l = a;
        this.i = 0;
        this.g = null
    }
    bk.prototype.cancel = function() {
        Td().clearTimeout(this.g);
        this.g = null
    }
    ;
    bk.prototype.J = function() {
        var a = this
          , b = Td()
          , c = L().i.g;
        this.g = b.setTimeout(aj(c, Fj(143, function() {
            a.i++;
            a.l.sample()
        })), Mj())
    }
    ;
    function ck(a, b, c) {
        this.m = a;
        this.Ic = c === void 0 ? "na" : c;
        this.u = [];
        this.Y = !1;
        this.i = new Nj(-1,!0,this);
        this.g = this;
        this.Ha = b;
        this.Wa = this.Z = !1;
        this.Ib = "uk";
        this.mb = !1;
        this.o = !0
    }
    n = ck.prototype;
    n.Hc = function() {
        return this.Va()
    }
    ;
    n.Va = function() {
        return !1
    }
    ;
    n.dc = function() {
        return this.Y = !0
    }
    ;
    n.Nb = function() {
        return this.g.Ib
    }
    ;
    n.Pb = function() {
        return this.g.Wa
    }
    ;
    n.fail = function(a, b) {
        if (!this.Wa || (b === void 0 ? 0 : b))
            this.Wa = !0,
            this.Ib = a,
            this.Ha = 0,
            this.g != this || dk(this)
    }
    ;
    n.ra = function() {
        return this.g.Ic
    }
    ;
    n.tb = function() {
        return this.g.Id()
    }
    ;
    n.Id = function() {
        return {}
    }
    ;
    n.ab = function() {
        return this.g.Ha
    }
    ;
    function ek(a, b) {
        Qa(a.u, b) >= 0 || (a.u.push(b),
        b.Yc(a.g),
        b.Sa(a.i),
        b.fc() && (a.Z = !0))
    }
    n.nd = function() {
        var a = ak();
        a.g = Sj(!0, this.m, a.o)
    }
    ;
    n.pd = function() {
        Xj(ak(), this.m)
    }
    ;
    n.me = function() {
        Yj(ak(), this.m)
    }
    ;
    n.ne = function() {
        var a = ak();
        a.i = Sj(!1, this.m, a.o)
    }
    ;
    function fk(a) {
        a = a.g;
        a.pd();
        a.nd();
        a.ne();
        a.me();
        a.i.g = a.i.g
    }
    function gk(a) {
        var b = Lj()
          , c = Zj();
        return new Nj(b,c,a)
    }
    n.sample = function() {}
    ;
    n.isActive = function() {
        return this.g.o
    }
    ;
    function hk(a) {
        a.Z = a.u.length ? Xa(a.u, function(b) {
            return b.fc()
        }) : !1
    }
    function ik(a) {
        var b = cb(a.u);
        Ra(b, function(c) {
            c.Sa(a.i)
        })
    }
    function dk(a) {
        var b = cb(a.u);
        Ra(b, function(c) {
            c.Yc(a.g)
        });
        a.g != a || ik(a)
    }
    n.Yc = function(a) {
        var b = this.g;
        this.g = a.ab() >= this.Ha ? a : this;
        b !== this.g ? (this.o = this.g.o,
        dk(this)) : this.o !== this.g.o && (this.o = this.g.o,
        dk(this))
    }
    ;
    n.Sa = function(a) {
        if (a.m === this.g) {
            var b = !this.i.equals(a, this.Z);
            this.i = a;
            b && ik(this)
        }
    }
    ;
    n.fc = function() {
        return this.Z
    }
    ;
    n.dispose = function() {
        this.mb = !0
    }
    ;
    n.Ub = function() {
        return this.mb
    }
    ;
    function jk(a, b, c, d) {
        this.element = a;
        this.G = new J(0,0,0,0);
        this.containerGeometry = null;
        this.u = new J(0,0,0,0);
        this.g = b;
        this.D = c;
        this.H = d;
        this.B = !1;
        this.timestamp = -1;
        this.o = new Oj(b.i,this.element,this.G,new J(0,0,0,0),0,0,Lj(),0);
        this.i = void 0
    }
    n = jk.prototype;
    n.observe = function() {
        return !0
    }
    ;
    n.unobserve = function() {}
    ;
    n.dispose = function() {
        if (!this.Ub()) {
            var a = this.g;
            ab(a.u, this);
            a.Z && this.fc() && hk(a);
            this.unobserve();
            this.B = !0
        }
    }
    ;
    n.Ub = function() {
        return this.B
    }
    ;
    n.tb = function() {
        return this.g.tb()
    }
    ;
    n.ab = function() {
        return this.g.ab()
    }
    ;
    n.Nb = function() {
        return this.g.Nb()
    }
    ;
    n.Pb = function() {
        return this.g.Pb()
    }
    ;
    n.Yc = function() {}
    ;
    n.Sa = function() {
        kk(this)
    }
    ;
    n.fc = function() {
        return this.H
    }
    ;
    function lk(a) {
        this.o = !1;
        this.g = a;
        this.m = function() {}
    }
    n = lk.prototype;
    n.ab = function() {
        return this.g.ab()
    }
    ;
    n.Nb = function() {
        return this.g.Nb()
    }
    ;
    n.Pb = function() {
        return this.g.Pb()
    }
    ;
    n.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.ze(a, b, c),
        ek(this.g, d));
        return d
    }
    ;
    n.rd = function() {
        return this.qd()
    }
    ;
    n.qd = function() {
        return !1
    }
    ;
    n.init = function(a) {
        return this.g.dc() ? (ek(this.g, this),
        this.m = a,
        !0) : !1
    }
    ;
    n.Yc = function(a) {
        a.ab() == 0 && this.m(a.Nb(), this)
    }
    ;
    n.Sa = function() {}
    ;
    n.fc = function() {
        return !1
    }
    ;
    n.dispose = function() {
        this.o = !0
    }
    ;
    n.Ub = function() {
        return this.o
    }
    ;
    n.tb = function() {
        return {}
    }
    ;
    function mk(a, b, c) {
        this.l = c === void 0 ? 0 : c;
        this.i = a;
        this.g = b == null ? "" : b
    }
    function nk(a) {
        switch (Math.trunc(a.l)) {
        case -16:
            return -16;
        case -8:
            return -8;
        case 0:
            return 0;
        case 8:
            return 8;
        case 16:
            return 16;
        default:
            return 16
        }
    }
    function ok(a, b) {
        return a.l < b.l ? !0 : a.l > b.l ? !1 : a.i < b.i ? !0 : a.i > b.i ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
    }
    ;function pk() {
        this.l = 0;
        this.g = [];
        this.i = !1
    }
    pk.prototype.add = function(a, b, c) {
        ++this.l;
        a = new mk(a,b,c);
        this.g.push(new mk(a.i,a.g,a.l + this.l / 4096));
        this.i = !0;
        return this
    }
    ;
    function qk(a, b) {
        Ra(b.g, function(c) {
            a.add(c.i, c.g, nk(c))
        })
    }
    function rk(a, b) {
        var c = c === void 0 ? 0 : c;
        var d = d === void 0 ? !0 : d;
        Ad(b, function(e, f) {
            d && e === void 0 || a.add(f, e, c)
        });
        return a
    }
    function sk(a) {
        var b = tk;
        a.i && (eb(a.g, function(c, d) {
            return ok(d, c) ? 1 : ok(c, d) ? -1 : 0
        }),
        a.i = !1);
        return Wa(a.g, function(c, d) {
            d = b(d);
            return "" + c + (c != "" && d != "" ? "&" : "") + d
        })
    }
    ;function tk(a) {
        var b = a.i;
        a = a.g;
        if (a !== "")
            if (typeof a === "boolean")
                b = a ? b : "";
            else if (Array.isArray(a))
                b = a.length === 0 ? b : b + "=" + a.join();
            else {
                var c = Qa(["mtos", "tos", "p"], b) >= 0;
                b = b + "=" + (c ? a : encodeURIComponent(a))
            }
        return b
    }
    ;function vk(a) {
        var b = b === void 0 ? !0 : b;
        this.g = new pk;
        a !== void 0 && qk(this.g, a);
        b && this.g.add("v", "unreleased", -16)
    }
    vk.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204"
          , b = sk(this.g);
        b.length > 0 && (a += "?" + b);
        return a
    }
    ;
    function wk(a, b, c, d, e) {
        var f = [];
        if (b.length)
            return f = Va(b, function(g) {
                return g + "&id=" + a
            });
        b = "//" + (e || "pagead2.googlesyndication.com") + "/activeview";
        e = [];
        c && e.push("avi=" + c);
        d && e.push("cid=" + d);
        e.push("id=" + a);
        f.push(b + "?" + e.join("&"));
        return f
    }
    function xk(a) {
        if (!G.navigator || !G.navigator.sendBeacon)
            return !1;
        a = a.toString().split("?");
        return G.navigator.sendBeacon(a[0], a[1])
    }
    ;function yk() {
        this.g = 0
    }
    ;function zk() {
        this.P = this.P;
        this.Xa = this.Xa
    }
    zk.prototype.P = !1;
    zk.prototype.Ub = function() {
        return this.P
    }
    ;
    zk.prototype.dispose = function() {
        this.P || (this.P = !0,
        this.uc())
    }
    ;
    zk.prototype[Symbol.dispose] = function() {
        this.dispose()
    }
    ;
    zk.prototype.uc = function() {
        if (this.Xa)
            for (; this.Xa.length; )
                this.Xa.shift()()
    }
    ;
    function Ak(a, b, c) {
        Ra(a.l, function(d) {
            var e = a.g;
            if (!d.g && (d.l(b, c),
            d.m())) {
                d.g = !0;
                var f = d.i()
                  , g = new pk;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.o);
                d = Qd(yk);
                g.add("i", d.g++);
                g.add("adk", e);
                rk(g, f);
                e = new vk(g);
                Sd(e.toString())
            }
        })
    }
    ;function Bk(a) {
        this.F = eg(a, void 0, void 0, 2048)
    }
    x(Bk, Uh);
    var Ck = [0, Hi, Oi, -1];
    function Dk() {
        this.g = this.i = this.l = 0
    }
    Dk.prototype.update = function(a, b, c) {
        a && (this.l += b,
        this.i += b,
        this.g = Math.max(this.g, this.i));
        if (c === void 0 ? !a : c)
            this.i = 0
    }
    ;
    var Ek = [1, .75, .5, .3, 0];
    function Fk(a) {
        this.g = a = a === void 0 ? Ek : a;
        this.i = Va(this.g, function() {
            return new Dk
        })
    }
    function Gk(a) {
        return Hk(a, function(b) {
            return b.l
        }, !1)
    }
    function Ik(a) {
        return Hk(a, function(b) {
            return b.g
        }, !0)
    }
    Fk.prototype.update = function(a, b, c, d, e, f) {
        f = f === void 0 ? !0 : f;
        b = e ? Math.min(a, b) : b;
        for (e = 0; e < this.g.length; e++) {
            var g = this.g[e]
              , h = b > 0 && b >= g;
            g = !(a > 0 && a >= g) || c;
            this.i[e].update(f && h, d, !f || g)
        }
    }
    ;
    function Hk(a, b, c) {
        a = Va(a.i, function(d) {
            return b(d)
        });
        return c ? a : Jk(a)
    }
    function Jk(a) {
        return Va(a, function(b, c, d) {
            return c > 0 ? d[c] - d[c - 1] : d[c]
        })
    }
    ;function Kk() {
        this.oa = new Fk;
        this.kb = this.jb = 0;
        this.g = new Dk;
        this.i = -1;
        this.l = new Fk([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0])
    }
    Kk.prototype.update = function(a, b, c, d) {
        this.i = Math.max(this.i, b.aa);
        this.l.update(b.l, c.l, b.i, a, d);
        this.jb += a;
        b.aa === 0 && (this.kb += a);
        this.oa.update(b.aa, c.aa, b.i, a, d);
        c = d || c.ia != b.ia ? c.isVisible() && b.isVisible() : c.isVisible();
        b = !b.isVisible() || b.i;
        this.g.update(c, a, b)
    }
    ;
    function Lk(a) {
        return a.g.g >= 1E3
    }
    ;if (Sb && Sb.URL) {
        var Mk = Sb.URL, Nk;
        a: {
            if (Mk) {
                var Ok = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
                try {
                    var Pk = Ok.exec(decodeURIComponent(Mk));
                    if (Pk) {
                        Nk = Pk[1] && Pk[1].length > 1 ? Pk[1].substring(1) : "true";
                        break a
                    }
                } catch (a) {}
            }
            Nk = ""
        }
        yj.de = !(Nk.length > 0)
    }
    function Qk(a, b, c, d) {
        var e = e === void 0 ? !1 : e;
        c = Bj(d, c);
        nd(a, b, c, {
            capture: e
        })
    }
    ;var Rk = new J(0,0,0,0);
    function Sk(a, b) {
        b = Tk(b);
        return b === 0 ? 0 : Tk(a) / b
    }
    function Tk(a) {
        return Math.max(a.g - a.top, 0) * Math.max(a.i - a.left, 0)
    }
    function Uk(a, b) {
        if (!a || !b)
            return !1;
        for (var c = 0; a !== null && c++ < 100; ) {
            if (a === b)
                return !0;
            try {
                if (a = a.parentElement || a) {
                    var d = Oc(a)
                      , e = d && (d ? d.defaultView : window)
                      , f = e && e.frameElement;
                    f && (a = f)
                }
            } catch (g) {
                break
            }
        }
        return !1
    }
    function Vk(a, b, c) {
        if (!a || !b)
            return !1;
        b = hd(a.clone(), -b.left, -b.top);
        a = (b.left + b.i) / 2;
        b = (b.top + b.g) / 2;
        sd(window.top) && window.top && window.top.document && (window = window.top);
        if (!Rj())
            return !1;
        a = window.document.elementFromPoint(a, b);
        if (!a)
            return !1;
        b = (b = (b = Oc(c)) && b.defaultView && b.defaultView.frameElement) && Uk(b, a);
        var d = a === c;
        a = !d && a && Rc(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }
    function Wk(a, b, c, d) {
        return ak().B ? !1 : a.bb() <= 0 || a.Za() <= 0 ? !0 : c && d ? Ej(208, function() {
            return Vk(a, b, c)
        }) : !1
    }
    ;var Xk = new J(0,0,0,0);
    function Yk(a, b, c) {
        zk.call(this);
        this.position = Xk.clone();
        this.g = new Kk;
        this.Vb = -2;
        Date.now();
        this.Le = -1;
        this.Be = b;
        this.Ia = null;
        this.R = !1;
        this.cd = null;
        this.hc = -1;
        this.W = c;
        this.Jb = !1;
        this.Ib = function() {}
        ;
        this.Pe = function() {}
        ;
        this.I = new Sc;
        this.I.U = a;
        this.I.g = a;
        this.o = !1;
        this.B = {
            Vd: null,
            Ud: null
        };
        this.Zb = !0;
        this.X = null;
        L().H++;
        this.i = new ob;
        this.Ke = this.mb = -1;
        this.mg = 0;
        this.S = null;
        this.Ic = this.ye = !1;
        this.l = new Jb;
        Rb(this.l);
        Zk(this);
        this.W == 1 ? Lb(this.l, 1) : Lb(this.l, 0)
    }
    x(Yk, zk);
    n = Yk.prototype;
    n.uc = function() {
        $k(this);
        this.X && this.X.dispose();
        this.S && this.S.dispose();
        delete this.g;
        delete this.Ib;
        delete this.Pe;
        delete this.I.U;
        delete this.I.g;
        delete this.B;
        delete this.X;
        delete this.S;
        delete this.l;
        zk.prototype.uc.call(this)
    }
    ;
    function al(a) {
        return a.S ? a.S.G : a.position
    }
    n.sd = function(a) {
        var b = L();
        typeof a === "string" && a.length != 0 && Ob(b.g, a)
    }
    ;
    function Zk(a) {
        (a = a.I.U) && a.getAttribute && Ic(a, "googleAvInapp") && (ak().m = !0)
    }
    n.be = function() {
        this.R = !0
    }
    ;
    n.wc = function() {
        return this.R
    }
    ;
    n.Zd = function() {
        this.i.aa = 0
    }
    ;
    function bl(a, b) {
        if (a.S) {
            if (b.ra() === a.S.ra())
                return;
            a.S.dispose();
            a.S = null
        }
        b = b.create(a.I.g, a.l, !1);
        if (b = b != null && b.observe() ? b : null)
            a.S = b
    }
    function cl(a, b, c) {
        if (a.S) {
            kk(a.S);
            var d = a.S.o
              , e = d.m
              , f = e.g;
            if (d.u != null) {
                var g = d.l;
                a.cd = new Jc(g.left - f.left,g.top - f.top)
            }
            f = a.fd() ? Math.max(d.i, d.o) : d.i;
            g = {};
            e.volume !== null && (g.volume = e.volume);
            a.Ia && a.Be != -1 && d.g !== -1 && a.Ia.g !== -1 ? (e = d.g - a.Ia.g,
            e = e > 1E4 ? 0 : e) : e = 0;
            a.Ia = d;
            a.je(f, b, c, !1, g, e, d.B)
        }
    }
    function dl(a) {
        if (a.wc() && a.X) {
            var b = Mb(a.l, "od") == 1
              , c = ak().g
              , d = a.X
              , e = a.S ? a.S.ra() : "ns"
              , f = a.cd
              , g = new Kc(c.bb(),c.Za());
            c = a.fd();
            a = {
                Kg: e,
                cd: f,
                Tg: g,
                fd: c,
                aa: a.i.aa,
                Pg: b
            };
            if (b = d.i) {
                kk(b);
                e = b.o;
                f = e.m.g;
                var h = g = null;
                e.u != null && f && (g = e.l,
                g = new Jc(g.left - f.left,g.top - f.top),
                h = new Kc(f.i - f.left,f.g - f.top));
                c = {
                    Kg: b.ra(),
                    cd: g,
                    Tg: h,
                    fd: c,
                    Pg: !1,
                    aa: c ? Math.max(e.i, e.o) : e.i
                }
            } else
                c = null;
            c && Ak(d, a, c)
        }
    }
    n.je = function(a, b, c, d, e, f, g) {
        this.o || (this.wc() && (e = new ob,
        e.i = c,
        e.g = Tj(),
        e.aa = this.hc === 0 && Mb(this.l, "opac") === 1 ? 0 : a,
        e.ia = this.ia(),
        e.l = g,
        a = d && this.i.aa >= (this.ia() ? .3 : .5),
        this.g.update(f, e, this.i, a),
        this.Be = b,
        e.aa > 0 && (-1 === this.mb && (this.mb = b),
        this.Ke = b),
        this.Le == -1 && Lk(this.g) && (this.Le = b),
        this.Vb == -2 && (this.Vb = Tk(al(this)) ? e.aa : -1),
        this.i = e),
        this.Ib(this))
    }
    ;
    n.ia = function() {
        return !1
    }
    ;
    n.fd = function() {
        return this.ye || !1
    }
    ;
    function el(a) {
        var b = a.R;
        b = (a.Ic || a.Ub()) && !b;
        var c = L().Ka !== 2 || a.Jb;
        return a.o || c && b ? 2 : Lk(a.g) ? 4 : 3
    }
    function $k(a) {
        a.I.g && (a.B.Vd && (od(a.I.g, "mouseover", a.B.Vd),
        a.B.Vd = null),
        a.B.Ud && (od(a.I.g, "mouseout", a.B.Ud),
        a.B.Ud = null))
    }
    function fl(a, b, c) {
        b && (a.Ib = b);
        c && (a.Pe = c)
    }
    ;function gl() {
        this.l = !0;
        this.i = []
    }
    gl.prototype.isVisible = function() {
        return this.l
    }
    ;
    gl.prototype.g = function() {
        return !1
    }
    ;
    gl.prototype.m = function(a) {
        this.i.push(a);
        return !0
    }
    ;
    gl.prototype.o = function(a) {
        this.i = Sa(this.i, function(b) {
            return a !== b
        })
    }
    ;
    function hl(a) {
        return ec() ? (a = (a = Oc(a)) && (a ? a.defaultView : window),
        !!(a && a.location && a.location.ancestorOrigins && a.location.ancestorOrigins.length > 0 && a.location.origin == a.location.ancestorOrigins[0])) : !0
    }
    ;function il() {}
    il.prototype.next = function() {
        return jl
    }
    ;
    var jl = {
        done: !0,
        value: void 0
    };
    il.prototype.pe = function() {
        return this
    }
    ;
    function kl(a) {
        if (a instanceof il)
            return a;
        if (typeof a.pe == "function")
            return a.pe(!1);
        if (La(a)) {
            var b = 0
              , c = new il;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        return jl;
                    if (b in a)
                        return {
                            value: a[b++],
                            done: !1
                        };
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
    function ll(a, b) {
        if (La(a))
            Ra(a, b);
        else
            for (a = kl(a); ; ) {
                var c = a.next();
                if (c.done)
                    break;
                b.call(void 0, c.value, void 0, a)
            }
    }
    function ml(a, b) {
        var c = 1;
        ll(a, function(d) {
            c = b.call(void 0, c, d)
        });
        return c
    }
    function nl(a, b) {
        var c = kl(a);
        a = new il;
        a.next = function() {
            var d = c.next()
              , e = d.value;
            return d.done ? jl : b.call(void 0, e, void 0, c) ? {
                value: e,
                done: !1
            } : jl
        }
        ;
        return a
    }
    function ol(a) {
        var b = kl(a);
        a = new il;
        var c = 100;
        a.next = function() {
            return c-- > 0 ? b.next() : jl
        }
        ;
        return a
    }
    ;function pl(a, b) {
        this.l = b;
        this.i = a == null;
        this.g = a
    }
    x(pl, il);
    pl.prototype.next = function() {
        if (this.i)
            return jl;
        var a = this.g || null;
        this.i = a == null;
        var b;
        if (b = a) {
            b = this.l;
            if (Bc(a, "parentElement") && a.parentElement != null && a != a.parentElement)
                var c = a.parentElement;
            else if (b) {
                var d = d === void 0 ? hl : d;
                if (d(a))
                    try {
                        var e = Oc(a)
                          , f = e && (e ? e.defaultView : window)
                          , g = f && f.frameElement;
                        c = g == null ? null : g
                    } catch (h) {
                        c = null
                    }
                else
                    c = null
            } else
                c = null;
            b = c
        }
        this.g = b;
        return {
            value: a,
            done: !1
        }
    }
    ;
    function ql(a) {
        var b = 1;
        a = ol(new pl(a,!0));
        a = nl(a, function() {
            return b > 0
        });
        return ml(a, function(c, d) {
            var e = 1;
            if (Bc(d, "style") && d.style) {
                var f = parseFloat;
                a: {
                    var g = Oc(d);
                    if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                        g = g.opacity || g.getPropertyValue("opacity") || "";
                        break a
                    }
                    g = ""
                }
                if (!g) {
                    g = d.style[uc()];
                    if (typeof g !== "undefined")
                        d = g;
                    else {
                        g = d.style;
                        var h = id.opacity;
                        if (!h) {
                            var k = uc();
                            h = k;
                            d.style[k] === void 0 && (k = (Ec ? "Webkit" : Dc ? "Moz" : null) + wc(k),
                            d.style[k] !== void 0 && (h = k));
                            id.opacity = h
                        }
                        d = g[h] || ""
                    }
                    g = d
                }
                f = f(g);
                typeof f !== "number" || isNaN(f) || (e = f)
            }
            return b = c * e
        })
    }
    ;function rl() {
        this.i = !1
    }
    rl.prototype.g = function(a, b) {
        b = b === void 0 ? {} : b;
        this.i || (this.i = this.l(a, b))
    }
    ;
    rl.prototype.l = function() {
        return !1
    }
    ;
    function sl(a, b, c, d, e, f, g, h, k) {
        h = h === void 0 ? [] : h;
        k = k === void 0 ? "" : k;
        Yk.call(this, c, d, e);
        this.Hb = b;
        this.Lb = 0;
        this.Cf = null;
        this.sa = this.ba = "";
        this.D = [];
        this.qa = [];
        this.Z = this.jc = "";
        this.ve = !1;
        this.ng = [];
        this.H = this.u = "";
        this.Ga = !1;
        this.lb = [];
        this.m = this.Qe = !1;
        this.Ha = 0;
        this.Y = this.kc = Tj();
        this.Ja = 0;
        this.Wa = f;
        this.Lc = this.De = !1;
        this.xg = k;
        this.qg = h;
        if (a = this.I.U)
            this.Lb == 0 ? this.I.U ? (b = this.I.U._adk_,
            b || (b = (b = Hc(this.I.U, "googleAvAdk")) && !/[^0-9]/.test(b) ? parseInt(b, 10) : 0)) : b = 0 : b = this.Lb,
            this.Lb = b,
            this.ba == "" && (this.ba = String(a._avi_ || "")),
            this.sa == "" && (this.sa = a._avihost_ ? String(a._avihost_) : "pagead2.googlesyndication.com"),
            this.D.length || (this.D = tl(a, "_avicxn_", "googleAvCxn")),
            this.qa.length || (this.qa = tl(a, "_avieoscxn_", "googleEOSAvCxn")),
            this.jc == "" && (this.jc = String(a._aviextcxn_ || Hc(a, "googleAvExtCxn") || "")),
            this.Z == "" && (this.Z = String(a._cid_ || "")),
            this.ve || (this.ve = !!a._imm_ || Ic(a, "googleAvImmediate")),
            this.H == "" && (this.H = String(a._cvu_ || Hc(a, "googleAvCpmav") || "")),
            this.u == "" && (this.u = String(Hc(a, "googleAvBtr") || "")),
            this.lb.length || (this.lb = tl(a, "", "googleAvVrus")),
            this.sd(String(a._avm_ || Hc(a, "googleAvMetadata") || "")),
            a = String(Hc(a, "googleAvFlags") || ""),
            b = L(),
            typeof a === "string" && a.length != 0 && ej(b.flags, a);
        Qb(L().g, this.Hb)
    }
    x(sl, Yk);
    function tl(a, b, c) {
        return (a = String(a[b] || Hc(a, c) || "")) ? a.split("|") : []
    }
    n = sl.prototype;
    n.uc = function() {
        delete this.ng;
        Yk.prototype.uc.call(this)
    }
    ;
    function ul(a) {
        var b = {}
          , c = L();
        (Mb(c.g, "omid") !== 1 || c.l) && Ra(a.qg, function(d) {
            return d.g(a, b)
        })
    }
    n.wc = function() {
        return this.R && !(this.Ja == 1 || this.Ja == 3)
    }
    ;
    n.Zd = function() {
        Yk.prototype.Zd.call(this)
    }
    ;
    n.be = function() {
        this.R || (kj(),
        this.Wa !== void 0 && this.Wa(!1, this.Vb),
        this.u != null && this.u != "" && (Od(this.u),
        this.u = ""));
        Yk.prototype.be.call(this)
    }
    ;
    n.sd = function(a) {
        if (typeof a === "string" && a.length != 0) {
            var b = new Jb
              , c = L();
            Kb(b, "omid", pb);
            Ob(b, a);
            b = Mb(b, "omid");
            b !== null && (c.g.i.omid = b);
            a = Ob(this.l, a);
            c = a.split("&");
            for (b = 0; b < c.length; b++) {
                var d = c[b];
                d == "ts=0" ? this.Zb = !1 : d.lastIndexOf("la=", 0) == 0 ? (d = d.split("=")[1],
                d == "0" ? this.Ha = 2 : d == "1" && (this.Ha = 1)) : d.lastIndexOf("cr=", 0) == 0 && d.split("=")[1] == "1" && (this.ye = !0)
            }
            this.i.ia = this.ia();
            Yk.prototype.sd.call(this, a)
        }
    }
    ;
    n.je = function(a, b, c, d, e, f, g) {
        var h = Lk(this.g)
          , k = Math.floor(this.i.aa * 100);
        this.Ha = Tk(al(this)) >= 242500 ? 1 : 2;
        Yk.prototype.je.call(this, a, b, c, d, e, f, g);
        this.Y == -1 && this.i.g != -1 ? this.Y = this.i.g : this.Y == 0 && this.i.g == 1 && (this.Y = 1);
        a = Lk(this.g);
        b = Math.floor(this.i.aa * 100);
        Mb(L().g, "gen204simple") && !a && !this.Lc && k >= 50 && b < 50 && (Sd("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-yt&bin=simple&type=nonVisible&mcvt=" + (this.g.g.g + "&uuid=" + this.xg)),
        this.Lc = !0);
        (!h && a || b != k) && this.Wa !== void 0 && this.Wa(a, b);
        try {
            this.hc = ql(this.I.g)
        } catch (l) {}
    }
    ;
    n.ia = function() {
        return Fc ? !1 : this.Ha == 1
    }
    ;
    function vl(a, b) {
        switch (b) {
        case 1:
            if (a.D.length)
                return a.D;
            break;
        case 2:
            if (a.qa.length)
                return a.qa;
            if (a.D.length)
                return a.D
        }
        return []
    }
    function wl(a) {
        var b = ak()
          , c = Nb(a.l)
          , d = b.frameOffset
          , e = al(a);
        c.p = [e.top + d.y, e.left + d.x, e.g + d.y, e.i + d.x];
        d = a.g;
        c.tos = Gk(d.oa);
        e = Ik(d.oa);
        c.mtos = e;
        c.mcvt = d.g.g;
        c.rs = a.W;
        (e = a.W == 5) || (c.ht = a.mg);
        a.mb >= 0 && (c.tfs = a.mb,
        c.tls = a.Ke);
        c.mc = Math.floor(d.i * 100) / 100;
        c.lte = Math.floor(a.Vb * 100) / 100;
        c.bas = a.kc;
        c.bac = a.Y;
        b.B && (c["if"] = a.o ? 0 : 1);
        c.met = a.I.i;
        e && a.Hb && (c.req = encodeURIComponent(a.Hb).substring(0, 100));
        a.ia() && (c.la = "1");
        c.avms = a.S ? a.S.ra() : "ns";
        a.S && Cb(c, a.S.tb());
        a.De && (c.radf = "1");
        a.Ja != 0 && (c.md = a.Ja);
        c.btr = a.u != null && a.u != "" ? 1 : 0;
        c.cpmav = xl(a) ? 1 : 0;
        Td().g.isVisible() || (c.pv = 0);
        c.abdbg = [a.o ? 0 : 1, a.wc() ? 1 : 0].join(";");
        c.tm = a.g.jb;
        c.tu = a.g.kb;
        return c
    }
    function xl(a) {
        return a.H != null && a.H.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i) != null
    }
    ;function yl(a) {
        var b = [0, 2, 4]
          , c = !1
          , d = zl;
        c = c === void 0 ? !0 : c;
        d = d === void 0 ? function() {
            return !0
        }
        : d;
        return function(e) {
            var f = e[a];
            if (Array.isArray(f) && d(e))
                return Al(f, b, c)
        }
    }
    function Bl(a, b) {
        return function(c) {
            return b(c) ? c[a] : void 0
        }
    }
    function Cl(a) {
        return function(b) {
            for (var c = 0; c < a.length; c++)
                if (a[c] === b.e || a[c] === void 0 && !b.hasOwnProperty("e"))
                    return !0;
            return !1
        }
    }
    function Al(a, b, c) {
        return c === void 0 || c ? Sa(a, function(d, e) {
            return Qa(b, e) >= 0
        }) : Va(b, function(d, e, f) {
            return a.slice(e > 0 ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
                return g + h
            }, 0)
        })
    }
    ;var Dl = Cl([void 0, 1, 2, 3, 4, 8, 16])
      , zl = Cl([void 0, 4, 8, 16]);
    Object.assign({}, {
        sv: "sv",
        v: "v",
        cb: "cb",
        e: "e",
        nas: "nas",
        msg: "msg",
        "if": "if",
        sdk: "sdk",
        p: "p",
        p0: Bl("p0", zl),
        p1: Bl("p1", zl),
        p2: Bl("p2", zl),
        p3: Bl("p3", zl),
        cp: "cp",
        tos: "tos",
        mtos: "mtos",
        amtos: "amtos",
        mtos1: yl("mtos1"),
        mtos2: yl("mtos2"),
        mtos3: yl("mtos3"),
        mcvt: "mcvt",
        ps: "ps",
        scs: "scs",
        bs: "bs",
        vht: "vht",
        mut: "mut",
        a: "a",
        a0: Bl("a0", zl),
        a1: Bl("a1", zl),
        a2: Bl("a2", zl),
        a3: Bl("a3", zl),
        ft: "ft",
        dft: "dft",
        at: "at",
        dat: "dat",
        as: "as",
        vpt: "vpt",
        gmm: "gmm",
        std: "std",
        efpf: "efpf",
        swf: "swf",
        nio: "nio",
        px: "px",
        nnut: "nnut",
        vmer: "vmer",
        vmmk: "vmmk",
        vmiec: "vmiec",
        nmt: "nmt",
        tcm: "tcm",
        bt: "bt",
        pst: "pst",
        vpaid: "vpaid",
        dur: "dur",
        vmtime: "vmtime",
        dtos: "dtos",
        dtoss: "dtoss",
        dvs: "dvs",
        dfvs: "dfvs",
        dvpt: "dvpt",
        fmf: "fmf",
        vds: "vds",
        is: "is",
        i0: "i0",
        i1: "i1",
        i2: "i2",
        i3: "i3",
        ic: "ic",
        cs: "cs",
        c: "c",
        c0: Bl("c0", zl),
        c1: Bl("c1", zl),
        c2: Bl("c2", zl),
        c3: Bl("c3", zl),
        mc: "mc",
        nc: "nc",
        mv: "mv",
        nv: "nv",
        qmt: Bl("qmtos", Dl),
        qnc: Bl("qnc", Dl),
        qmv: Bl("qmv", Dl),
        qnv: Bl("qnv", Dl),
        raf: "raf",
        rafc: "rafc",
        lte: "lte",
        ces: "ces",
        tth: "tth",
        femt: "femt",
        femvt: "femvt",
        emc: "emc",
        emuc: "emuc",
        emb: "emb",
        avms: "avms",
        nvat: "nvat",
        qi: "qi",
        psm: "psm",
        psv: "psv",
        psfv: "psfv",
        psa: "psa",
        pnk: "pnk",
        pnc: "pnc",
        pnmm: "pnmm",
        pns: "pns",
        ptlt: "ptlt",
        pngs: "pings",
        veid: "veid",
        ssb: "ssb",
        ss0: Bl("ss0", zl),
        ss1: Bl("ss1", zl),
        ss2: Bl("ss2", zl),
        ss3: Bl("ss3", zl),
        dc_rfl: "urlsigs",
        obd: "obd",
        omidp: "omidp",
        omidr: "omidr",
        omidv: "omidv",
        omida: "omida",
        omids: "omids",
        omidpv: "omidpv",
        omidam: "omidam",
        omidct: "omidct",
        omidia: "omidia",
        omiddc: "omiddc",
        omidlat: "omidlat",
        omiddit: "omiddit",
        nopd: "nopd",
        co: "co",
        tm: "tm",
        tu: "tu"
    }, {
        avid: function(a) {
            return function() {
                return a
            }
        }("audio"),
        avas: "avas",
        vs: "vs"
    });
    function El(a, b, c, d) {
        jk.call(this, a, b, c, d)
    }
    x(El, jk);
    El.prototype.Ad = function(a) {
        var b;
        return Sk(a, (b = this.i) != null ? b : this.G)
    }
    ;
    El.prototype.zd = function(a) {
        return Sk(a, ak().g)
    }
    ;
    El.prototype.yd = function(a, b) {
        return Sk(a, b)
    }
    ;
    function kk(a) {
        a.timestamp = Lj();
        if (a.element) {
            var b = a.element
              , c = a.g.g.m;
            try {
                try {
                    var d = b.getBoundingClientRect();
                    var e = new J(d.top,d.right,d.bottom,d.left)
                } catch (q) {
                    e = new J(0,0,0,0)
                }
                var f = e.i - e.left
                  , g = e.g - e.top
                  , h = kd(b, c)
                  , k = h.x
                  , l = h.y;
                var m = new J(Math.round(l),Math.round(k + f),Math.round(l + g),Math.round(k))
            } catch (q) {
                m = Rk.clone()
            }
            a.containerGeometry = m;
            m = a.containerGeometry;
            m = a.i ? new J(Math.max(m.top + a.i.top, m.top),Math.min(m.left + a.i.i, m.i),Math.min(m.top + a.i.g, m.g),Math.max(m.left + a.i.left, m.left)) : m.clone();
            a.G = m
        }
        a.element && typeof a.element.videoWidth === "number" && typeof a.element.videoHeight === "number" && (m = a.element,
        g = new Kc(m.videoWidth,m.videoHeight),
        m = a.G,
        b = m.bb(),
        c = m.Za(),
        f = g.width,
        g = g.height,
        f <= 0 || g <= 0 || b <= 0 || c <= 0 || (f /= g,
        g = b / c,
        m = m.clone(),
        f > g ? (b /= f,
        c = (c - b) / 2,
        c > 0 && (c = m.top + c,
        m.top = Math.round(c),
        m.g = Math.round(c + b))) : (c *= f,
        b = Math.round((b - c) / 2),
        b > 0 && (b = m.left + b,
        m.left = Math.round(b),
        m.i = Math.round(b + c)))),
        a.G = m);
        a.u = a.g.i.g;
        m = a.G;
        b = a.u;
        m = m.left <= b.i && b.left <= m.i && m.top <= b.g && b.top <= m.g ? new J(Math.max(m.top, b.top),Math.min(m.i, b.i),Math.min(m.g, b.g),Math.max(m.left, b.left)) : new J(0,0,0,0);
        b = m.top >= m.g || m.left >= m.i ? new J(0,0,0,0) : m;
        m = a.g.i;
        g = f = c = 0;
        (a.G.g - a.G.top) * (a.G.i - a.G.left) > 0 && (Wk(b, a.u, a.element, Mb(a.D, "od") == 1) ? b = new J(0,0,0,0) : (c = ak().l,
        g = new J(0,c.height,c.width,0),
        c = a.Ad(b),
        f = a.zd(b),
        g = a.yd(b, g)));
        b = b.top >= b.g || b.left >= b.i ? new J(0,0,0,0) : hd(b, -a.G.left, -a.G.top);
        Zj() || (f = c = 0);
        a.o = new Oj(m,a.element,a.G,b,c,f,a.timestamp,g)
    }
    El.prototype.ra = function() {
        return this.g.ra()
    }
    ;
    function Fl() {
        this.i = [];
        this.g = []
    }
    function Gl(a) {
        var b = Hl;
        return a ? Za(b.g, function(c) {
            return c.I.U == a
        }) : null
    }
    function Il() {
        var a = Hl;
        return a.i.length == 0 ? a.g : a.g.length == 0 ? a.i : bb(a.g, a.i)
    }
    Fl.prototype.reset = function() {
        this.i = [];
        this.g = []
    }
    ;
    function Jl(a) {
        var b = [];
        Ra(a, function(c) {
            c.I.U && Gl(c.I.U) == null && (Hl.g.push(c),
            b.push(c))
        })
    }
    var Hl = Qd(Fl);
    function Kl() {
        this.g = this.i = null
    }
    function Ll(a, b) {
        function c(d, e) {
            b(d, e)
        }
        if (a.i == null)
            return !1;
        a.g = Za(a.i, function(d) {
            return d != null && d.rd()
        });
        a.g && (a.g.init(c) ? fk(a.g.g) : b(a.g.g.Nb(), a.g));
        return a.g != null
    }
    ;function Ml(a) {
        a = Nl(a);
        lk.call(this, a.length ? a[a.length - 1] : new ck(G,0));
        this.l = a;
        this.i = null
    }
    x(Ml, lk);
    n = Ml.prototype;
    n.ra = function() {
        return (this.i ? this.i : this.g).ra()
    }
    ;
    n.tb = function() {
        return (this.i ? this.i : this.g).tb()
    }
    ;
    n.ab = function() {
        return (this.i ? this.i : this.g).ab()
    }
    ;
    n.init = function(a) {
        var b = !1;
        Ra(this.l, function(c) {
            c.dc() && (b = !0)
        });
        b && (this.m = a,
        ek(this.g, this));
        return b
    }
    ;
    n.dispose = function() {
        Ra(this.l, function(a) {
            a.dispose()
        });
        lk.prototype.dispose.call(this)
    }
    ;
    n.rd = function() {
        return Xa(this.l, function(a) {
            return a.Hc()
        })
    }
    ;
    n.qd = function() {
        return Xa(this.l, function(a) {
            return a.Va()
        })
    }
    ;
    n.ze = function(a, b, c) {
        return new El(a,this.g,b,c)
    }
    ;
    n.Sa = function(a) {
        this.i = a.m
    }
    ;
    function Nl(a) {
        if (!a.length)
            return [];
        a = Sa(a, function(c) {
            return c != null && c.Hc()
        });
        for (var b = 1; b < a.length; b++)
            ek(a[b - 1], a[b]);
        return a
    }
    ;function Ol() {}
    ;function Pl() {
        this.done = !1;
        this.g = {
            wd: 0,
            vd: 0,
            Yh: 0,
            Ce: 0,
            Md: -1,
            Lf: 0,
            Kf: 0,
            Mf: 0,
            df: 0
        };
        this.i = null;
        this.u = !1;
        this.m = null;
        this.D = 0;
        this.l = new bk(this);
        this.o = null
    }
    function Ql() {
        var a = Rl;
        a.u || (a.u = !0,
        Sl(a, function() {
            return a.B.apply(a, z(D.apply(0, arguments)))
        }),
        a.B())
    }
    Pl.prototype.sample = function() {
        Tl(this, Il(), !1)
    }
    ;
    function Ul() {
        Qd(Ol);
        var a = Qd(Kl);
        a.g != null && a.g.g ? fk(a.g.g) : ak().update(G)
    }
    function Tl(a, b, c) {
        if (!a.done && (a.l.cancel(),
        b.length != 0)) {
            a.m = null;
            try {
                Ul();
                var d = Lj();
                L().D = d;
                if (Qd(Kl).g != null)
                    for (var e = 0; e < b.length; e++)
                        cl(b[e], d, c);
                for (d = 0; d < b.length; d++)
                    dl(b[d]);
                ++a.g.Ce
            } finally {
                c ? Ra(b, function(f) {
                    return f.Zd()
                }) : a.l.J()
            }
        }
    }
    function Sl(a, b) {
        a.i || (b = Bj(142, b),
        Td().g.m(b) && (a.i = b))
    }
    Pl.prototype.B = function() {
        var a = Zj()
          , b = Lj();
        a ? (Kj || (Ij = b,
        Ra(Hl.i, function(c) {
            return c.g.o(b, !c.m())
        })),
        Kj = !0) : (this.D = Vl(this, b),
        Kj = !1,
        Ra(Hl.i, function(c) {
            c.wc() && c.g.m(b)
        }));
        Tl(this, Il(), !a)
    }
    ;
    function Wl(a) {
        var b = Rl;
        if (!b.m || a) {
            var c = G.document
              , d = Jj >= 0 ? Lj() - Jj : -1;
            a = Lj();
            b.g.Md == -1 && (d = a);
            var e = ak()
              , f = L()
              , g = Nb(f.g)
              , h = Il();
            try {
                if (h.length > 0) {
                    var k = e.g;
                    k && (g.bs = [k.bb(), k.Za()]);
                    var l = e.u;
                    l && (g.ps = [l.width, l.height]);
                    G.screen && (g.scs = [G.screen.width, G.screen.height])
                } else
                    g.url = encodeURIComponent(G.location.href.substring(0, 512)),
                    c.referrer && (g.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
                g.tt = d;
                g.pt = Jj;
                g.bin = f.Ka;
                G.google_osd_load_pub_page_exp !== void 0 && (g.olpp = G.google_osd_load_pub_page_exp);
                k = -1;
                b.o !== null && (k = b.o() ? 1 : 0);
                var m = [1, b.g.wd, b.g.vd, b.g.Ce, b.g.Md, 0, b.l.i, b.g.Lf, b.g.Kf, b.g.Mf, b.g.df, k].join(";");
                g.deb = m;
                g.tvt = Vl(b, a);
                e.m && (g.inapp = 1);
                if (G !== null && G != G.top) {
                    h.length > 0 && (g.iframe_loc = encodeURIComponent(G.location.href.substring(0, 512)));
                    var q = e.i;
                    g.is = [q.bb(), q.Za()]
                }
            } catch (r) {
                g.error = 1
            }
            b.m = g
        }
        b = Ab(b.m);
        m = L().i;
        if (Mb(m.l, "prf") == 1) {
            q = new Zi;
            a = m.g;
            e = 0;
            a.g > -1 && (e = a.l.i.now() - a.g);
            a = a.m + e;
            if (a != null && typeof a !== "number")
                throw Error("Value of float/double field must be a number, found " + typeof a + ": " + a);
            q = zg(q, 1, a, 0);
            a = m.g;
            q = zg(q, 5, Ff(a.g > -1 ? a.i + 1 : a.i), 0);
            q = Og(q, 2, m.i.i.l());
            q = Og(q, 3, m.i.i.i());
            m = Og(q, 4, m.i.i.g());
            q = {};
            m = (q.pf = ge(m.g()),
            q)
        } else
            m = {};
        Cb(b, m);
        return b
    }
    function Xl() {
        Ra(Il(), function(a) {
            a.I.U && Qd(Ol)
        })
    }
    function Yl() {
        var a = Qd(Kl);
        if (a.g != null) {
            var b = Il()
              , c = a.g;
            Ra(b, function(d) {
                return bl(d, c)
            })
        }
    }
    function Vl(a, b) {
        a = a.D;
        Kj && (a += b - Ij);
        return a
    }
    function Zl() {
        var a = a === void 0 ? function() {
            return {}
        }
        : a;
        yj.He = "av-js";
        wj.g = .01;
        Dj([function(b) {
            var c = L()
              , d = {};
            Cb(b, (d.bin = c.Ka,
            d.type = "error",
            d), Nb(c.g), Wl(), a())
        }
        ])
    }
    var Rl = Qd(Pl);
    var $l = null;
    function am(a) {
        var b = $l || G;
        if (!b)
            return "";
        var c = [];
        if (a === void 0 || !a) {
            if (!b.location || !b.location.href)
                return "";
            c.push("url=" + encodeURIComponent(b.location.href.substring(0, 512)))
        }
        b.document && b.document.referrer && c.push("referrer=" + encodeURIComponent(b.document.referrer.substring(0, 512)));
        return c.join("&")
    }
    ;function bm(a) {
        var b = {};
        b.adk = a.Lb || 1;
        Cb(b, wl(a));
        Rl.g.wd = G.__google_lidar_;
        var c = Wl();
        Cb(b, c);
        c = am(c.url !== void 0);
        tj(c, function(d, e) {
            return b[d] = e
        });
        b.itpl = Number(Hc(a.I.U, "googleAvItpl")) || 0;
        return b
    }
    ;var cm = /(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g;
    function dm(a, b) {
        return a.replace(cm, function(c, d) {
            try {
                var e = b !== null && d in b ? b[d] : void 0;
                if (e == null || e.toString() == null)
                    return c;
                e = e.toString();
                if (e == "" || !/^[\s\xa0]*$/.test(e == null ? "" : String(e)))
                    return encodeURIComponent(e).replace(/%2C/g, ",")
            } catch (f) {}
            return c
        })
    }
    ;function em(a) {
        this.i = a
    }
    function fm(a, b, c) {
        return c.W === 14 || c.W === 16 || c.W === 17 ? (c = {},
        c.VIEWABILITY = b,
        dm(a, c)) : a + "&" + b
    }
    em.prototype.g = function(a, b, c) {
        var d = this.i(a);
        Cb(d, wb(c, function(e, f) {
            return f != "id"
        }));
        d = d !== void 0 ? sk(rk(new pk, d)) : "";
        b = wk(c.id, vl(a, b), a.ba, a.Z, a.sa);
        b = y(b);
        for (c = b.next(); !c.done; c = b.next())
            if (c = c.value)
                c = fm(c, d, a),
                Mb(a.l, "sbeos") == 1 ? xk(c) || Sd((c.toString() + "&sberr=1").toString()) : Sd(c.toString());
        return !0
    }
    ;
    function gm() {}
    function hm(a, b, c) {
        return c.W === 14 || c.W === 16 || c.W === 17 ? (c = {},
        c.VIEWABILITY = b,
        dm(a, c)) : a + "&" + b
    }
    gm.prototype.g = function(a, b, c) {
        var d = bm(a);
        Cb(d, wb(c, function(e, f) {
            return f != "id"
        }));
        d = d !== void 0 ? sk(rk(new pk, d)) : "";
        b = wk(c.id, vl(a, b), a.ba, a.Z, a.sa);
        b = y(b);
        for (c = b.next(); !c.done; c = b.next())
            if (c = c.value)
                c = hm(c, d, a),
                Sd(c.toString());
        return !0
    }
    ;
    function im(a, b) {
        this.i = !1;
        this.u = a;
        this.o = b
    }
    x(im, rl);
    im.prototype.l = function(a, b) {
        b.id = this.o;
        b.vs = el(a);
        var c = this.o === "lidar2" ? 1 : 2;
        return this.m(a) ? this.u.g(a, c, b) : !1
    }
    ;
    im.prototype.m = function() {
        return !0
    }
    ;
    function jm(a) {
        im.call(this, a, "lidartos")
    }
    x(jm, im);
    jm.prototype.l = function(a, b) {
        var c = "";
        a.m && (c += "a");
        a.Ga && (c += "c");
        b.sent = c;
        return im.prototype.l.call(this, a, b)
    }
    ;
    jm.prototype.m = function(a) {
        return a.Zb && !a.o && Lk(a.g)
    }
    ;
    function km(a) {
        im.call(this, a, "lidar2")
    }
    x(km, im);
    km.prototype.m = function(a) {
        return a.o
    }
    ;
    function lm(a, b, c) {
        var d = am(b.url !== void 0);
        tj(d, function(e, f) {
            return b[e] = f
        });
        Ra(a, function(e, f) {
            var g = el(e);
            if (g != 3 || e.W != 5)
                b.adk = e.Lb || f + 1,
                Cb(b, wl(e)),
                c && (b.avms = c.ra()),
                b.vs = g,
                b.itpl = Number(Hc(e.I.U, "googleAvItpl")) || 0,
                f = new em(function() {
                    return Ab(b)
                }
                ),
                e.Zb && !e.o && Lk(e.g) ? (g = {},
                f.g(e, 2, (g.id = "lidar2",
                g.tsf = 1,
                g)),
                e.Zb = !1) : (g = {},
                f.g(e, 1, (g.id = "lidar2",
                g)),
                e.m = !0)
        })
    }
    function mm(a, b) {
        Ra(a, function(c, d) {
            (new jm(new em(function() {
                b.adk = c.Lb || d + 1;
                Cb(b, wl(c));
                b.vs = el(c);
                b.itpl = Number(Hc(c.I.U, "googleAvItpl")) || 0;
                return b
            }
            ))).g(c);
            c.Zb = !1
        })
    }
    ;function nm(a) {
        im.call(this, a, "lidar2")
    }
    x(nm, im);
    nm.prototype.g = function(a, b) {
        b = b === void 0 ? {} : b;
        b.r = "v";
        im.prototype.g.call(this, a, b);
        a.m = a.m || this.i
    }
    ;
    nm.prototype.m = function(a) {
        return Lk(a.g) && !a.m
    }
    ;
    var om = ["FRAME", "IMG", "IFRAME"]
      , pm = /^[01](px)?$/;
    function qm() {
        this.i = this.g = !1
    }
    function rm() {
        var a = new qm;
        a.g = !0;
        return a
    }
    function sm() {
        var a = rm();
        a.i = !0;
        return a
    }
    function tm(a) {
        return typeof a === "string" ? document.getElementById(a) : a
    }
    function um(a) {
        var b = !1;
        b = b === void 0 ? !1 : b;
        if (a.tagName === "IMG") {
            if (a.complete && (!a.naturalWidth || !a.naturalHeight))
                return !0;
            var c;
            if (b && ((c = a.style) == null ? void 0 : c.display) === "none")
                return !0
        }
        var d, e;
        return pm.test((d = a.getAttribute("width")) != null ? d : "") && pm.test((e = a.getAttribute("height")) != null ? e : "")
    }
    function vm(a, b) {
        if (a.tagName === "IMG")
            return a.naturalWidth && a.naturalHeight ? !0 : !1;
        try {
            if (a.readyState)
                var c = a.readyState;
            else {
                var d, e;
                c = (d = a.contentWindow) == null ? void 0 : (e = d.document) == null ? void 0 : e.readyState
            }
            return c === "complete"
        } catch (f) {
            return b === void 0 ? !1 : b
        }
    }
    function wm(a) {
        a || (a = function(b, c, d) {
            b.addEventListener(c, d)
        }
        );
        return a
    }
    function xm(a, b, c, d) {
        c = c === void 0 ? new qm : c;
        if (a = tm(a)) {
            d = wm(d);
            for (var e = !1, f = function(u) {
                e || (e = !0,
                b(u))
            }, g, h = 2, k = 0; k < om.length; ++k)
                if (om[k] === a.tagName) {
                    h = 3;
                    g = [a];
                    break
                }
            g || (g = a.querySelectorAll(om.join(",")));
            var l = 0
              , m = 0
              , q = !0
              , r = a = !1;
            k = {};
            for (var v = 0; v < g.length; k = {
                ad: void 0
            },
            v++) {
                var t = g[v];
                if (!um(t))
                    if (k.ad = t.tagName === "IMG",
                    vm(t, c.g))
                        a = !0,
                        k.ad && (q = !0);
                    else {
                        l++;
                        var w = function(u) {
                            return function(C) {
                                l--;
                                !l && q && f(h);
                                u.ad && (C = C && C.type === "error",
                                m--,
                                C || (q = !0),
                                !m && r && q && f(h))
                            }
                        }(k);
                        d(t, "load", w);
                        k.ad && (m++,
                        d(t, "error", w))
                    }
            }
            m === 0 && (q = !0);
            g = null;
            g = Ia.document.readyState === "complete";
            if (l === 0 && !a && g)
                h = 5;
            else if (l || !a) {
                d(Ia, "load", function() {
                    !c.i || !m && q ? f(4) : r = !0
                });
                return
            }
            f(h)
        }
    }
    ;function ym() {
        var a = this;
        this.g = this.l = !1;
        Zl();
        Rl.o = function() {
            return zm(a)
        }
    }
    function Am(a) {
        a.l || (a.l = !0,
        Qk(G, "unload", function() {
            Bm("u")
        }, 171),
        Mb(L().g, "phell") == 1 && Qk(G, "pagehide", function() {
            Bm("ph")
        }, 498))
    }
    function Cm() {
        return Xa(Hl.g, function(a) {
            return !a.m || a.Zb || (Tk(al(a)) <= 0 ? !1 : xl(a) && !a.Ga)
        })
    }
    function Dm() {
        if (!Cm()) {
            Rl.done = !0;
            Hl.reset();
            var a = Rl;
            a.u = !1;
            a.g.df++;
            a.i && (Td().g.o(a.i),
            a.i = null);
            a = Il();
            for (var b, c = 0; c < a.length; ++c)
                b = a[c],
                b.I.g && $k(b);
            a = Qd(Kl);
            a.g != null && (a.g.dispose(),
            a.g = null)
        }
    }
    function Em(a, b) {
        if (L().o) {
            var c = L().o;
            a.i(b, c)
        } else
            b.be()
    }
    function Fm(a) {
        var b = b === void 0 ? !0 : b;
        try {
            if (zm(a)) {
                a.g = !0;
                var c = ak()
                  , d = Lj();
                Jj = d;
                var e = L();
                e.B = 947190542;
                $l = td(G);
                var f = Rl.g;
                f.Md = Lj() - d;
                f.vd = 0;
                b && Gm(a, d, a.Xc());
                var g = Hl.g;
                f.vd = g.length;
                G.__google_lidar_adblocks_count_ = g.length;
                if (g.length < 1)
                    Bm("n");
                else {
                    Xl();
                    var h = Qd(Kl);
                    if (h.i == null) {
                        var k = Hm(e.g);
                        h.i = k
                    }
                    Ll(h, function(l, m) {
                        Im(l);
                        Bm(l, m)
                    }) ? Rl.done || (Jm(),
                    Yl(),
                    Ql()) : c.m ? (Im("w"),
                    Bm("w")) : (Im("i"),
                    Bm("i"))
                }
            }
        } catch (l) {
            throw Hl.reset(),
            Bm("x"),
            l;
        }
    }
    function Im(a) {
        var b = Hl.g;
        L().o = a;
        Ra(b, function(c) {
            return c.o = !0
        })
    }
    function Jm() {
        Td().setTimeout(Fj(176, function() {
            return Bm("t")
        }), 36E5)
    }
    function zm(a) {
        if (a.g || Rl.done)
            return !1;
        Td();
        a = G.document;
        return a && a.body && a.body.getBoundingClientRect && typeof G.setInterval === "function" && typeof G.clearInterval === "function" && typeof G.setTimeout === "function" && typeof G.clearTimeout === "function" ? !0 : (Bm("c"),
        !1)
    }
    function Bm(a, b) {
        var c = Hl.g;
        Ra(c, function(f) {
            f.Ic = !0
        });
        var d = L();
        if (Mb(d.g, "omid") === 1) {
            if (a !== "w" && a !== "i" && !d.l)
                return
        } else if (d.u && !d.m)
            return;
        Rl.l.cancel();
        if (!Rl.done && (Tl(Rl, c, !0),
        !Rl.done)) {
            d = Sa(c, function(f) {
                return !f.m
            });
            var e = {};
            a = (e.r = a,
            e);
            b && Cb(a, b.tb());
            Rl.g.wd = G.__google_lidar_;
            e = Wl(!1);
            Cb(a, e);
            d.length == 0 || lm(d, a, b);
            mm(c, a);
            Rl.done = !0
        }
    }
    function Km(a, b, c, d, e) {
        var f = L()
          , g = new sl(G,"",b,d,c,ed,[],[new nm(new gm)],e);
        d = f.i.g;
        fl(g, aj(d, function() {
            return a.m.apply(a, z(D.apply(0, arguments)))
        }), aj(d, function() {
            return a.i.apply(a, z(D.apply(0, arguments)))
        }));
        Jl([g]);
        xm(b, aj(d, function() {
            if (g && !g.Ub()) {
                Em(a, g);
                if (g.I.U) {
                    var h = g.I
                      , k = !0
                      , l = !0;
                    k = k === void 0 ? !1 : k;
                    l = l === void 0 ? !1 : l;
                    h.g = h.U;
                    h.i = "mue";
                    if (!Xc(h.U)) {
                        var m = $c(h.U)
                          , q = $c(h.U, !1);
                        Xc(q);
                        Xc(m) ? (h.g = m,
                        h.i = "ie") : k && (l || G !== G.top) && (k = ad(),
                        k.length == 1 && (h.g = k[0],
                        h.i = "ce"))
                    }
                }
                ak().m || Vj() || !Td().g.g() || c == 17 ? a.g ? (h = Qd(Kl),
                h.g != null && bl(g, h.g),
                g.I.U && Qd(Ol),
                Tl(Rl, Il(), !1)) : Fm(a) : (Im("pv"),
                Bm("pv"))
            }
        }), rm(), function(h, k, l) {
            Qk(h, k, l, 177)
        });
        return g
    }
    ym.prototype.Xc = function() {
        return []
    }
    ;
    function Gm(a, b, c) {
        var d = [];
        Ra(c, function(e) {
            var f = b
              , g = "";
            g = g === void 0 ? "" : g;
            f = f === void 0 ? Lj() : f;
            Am(a);
            var h = Lm(e);
            h == 0 || Gl(e) != null ? e = null : (Mb(L().g, "gen204simple") && Sd("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-yt&bin=simple&type=registerAd&uuid=" + g),
            e = Km(a, e, h, f, g));
            e && d.push(e)
        });
        return d
    }
    function Lm(a) {
        if (!a)
            return 0;
        var b = Hc(a, "googleAvRs");
        if (b != null)
            switch (Number(b)) {
            case 6:
                return 5;
            case 9:
                return L().u = !0,
                8;
            case 15:
                return 14;
            case 16:
                return 15;
            case 17:
                return 16;
            case 18:
                return 17;
            default:
                return 0
            }
        if (!a.id)
            return 0;
        a = a.id;
        return a.lastIndexOf("DfaVisibilityIdentifier", 0) == 0 ? 5 : a.lastIndexOf("YtKevlarVisibilityIdentifier", 0) == 0 ? 14 : a.lastIndexOf("YtSparklesVisibilityIdentifier", 0) == 0 ? 16 : a.lastIndexOf("YtKabukiVisibilityIdentifier", 0) == 0 ? 17 : 0
    }
    ym.prototype.i = function(a, b) {
        if (a && !Rl.done && (a.o = !0,
        !a.m)) {
            var c = new km(new gm)
              , d = el(a)
              , e = {};
            c.g(a, (e.vs = d,
            e.r = b,
            e));
            a.m = c.i
        }
        Dm()
    }
    ;
    ym.prototype.m = function(a) {
        if (a) {
            if (!Rl.done && a instanceof sl && (ul(a),
            !Rl.done && Lk(a.g) && (Tk(al(a)) <= 0 ? 0 : xl(a) && !a.Ga) && a.H && (Od(a.H),
            a.Ga = !0),
            !Rl.done && Lk(a.g) && a.lb.length && !a.Qe)) {
                for (var b = y(a.lb), c = b.next(); !c.done; c = b.next())
                    (c = c.value) && Od(c);
                a.Qe = !0
            }
            Dm()
        }
    }
    ;
    function Mm(a, b) {
        this.key = a;
        this.defaultValue = b === void 0 ? !1 : b;
        this.valueType = "boolean"
    }
    function Nm(a, b) {
        this.key = a;
        this.defaultValue = b === void 0 ? 0 : b;
        this.valueType = "number"
    }
    ;var Om = new Mm("45653435")
      , Pm = new Mm("100006")
      , Qm = new Nm("45362137")
      , Rm = new Mm("45377435")
      , Sm = new Mm("45618478")
      , Tm = new Mm("45377430")
      , Um = new Nm("45738539",1)
      , Vm = new Mm("45661569")
      , Wm = new Mm("45642405")
      , Xm = new Mm("45372163")
      , Ym = new Mm("45407241")
      , Zm = new Mm("45722991",!0)
      , $m = new Mm("45382077")
      , an = new Mm("45658589")
      , bn = new Nm("45706257",36E5)
      , cn = new Mm("45407239")
      , dn = new Mm("45407240",!0)
      , en = new Mm("45430682");
    function fn(a, b, c) {
        jk.call(this, null, a, b, c);
        this.l = this.m = null
    }
    x(fn, El);
    n = fn.prototype;
    n.ra = function() {
        return "omid"
    }
    ;
    n.Sa = function(a) {
        this.G = ak().i || new J(0,0,0,0);
        dj(L().flags, Pm) && (this.m = a.i,
        this.m !== null && (this.l = this.m * Tk(this.G)));
        El.prototype.Sa.call(this, a)
    }
    ;
    n.Ad = function(a) {
        return this.m !== null ? this.m : El.prototype.Ad.call(this, a)
    }
    ;
    n.zd = function(a) {
        return this.l !== null ? (a = Tk(ak().g),
        a === 0 ? 0 : this.l / a) : El.prototype.zd.call(this, a)
    }
    ;
    n.yd = function(a, b) {
        return this.l !== null ? (a = Tk(b),
        a === 0 ? 0 : this.l / a) : El.prototype.yd.call(this, a, b)
    }
    ;
    function gn(a, b) {
        if (!b)
            throw Error("Value for " + a + " is undefined, null or blank.");
        if (typeof b !== "string" && !(b instanceof String))
            throw Error("Value for " + a + " is not a string.");
        if (b.trim() === "")
            throw Error("Value for " + a + " is empty string.");
    }
    function hn(a) {
        if (!a)
            throw Error("functionToExecute must not be truthy.");
    }
    function jn(a, b) {
        if (b == null)
            throw Error(a + " must not be null or undefined.");
        if (typeof b !== "number" || isNaN(b))
            throw Error("Value for " + a + " is not a number");
        if (b < 0)
            throw Error(a + " must be a positive number.");
    }
    ;function kn() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.6.1-google_20251208")
    }
    function ln() {
        for (var a = ["1", "6", "1"], b = ["1", "0", "3"], c = 0; c < 3; c++) {
            var d = parseInt(a[c], 10)
              , e = parseInt(b[c], 10);
            if (d > e)
                break;
            else if (d < e)
                return !1
        }
        return !0
    }
    ;var mn = {
        Yg: "app",
        uh: "web"
    };
    function nn(a, b, c, d) {
        this.g = a;
        this.method = b;
        this.version = c;
        this.args = d
    }
    function on(a) {
        return !!a && a.omid_message_guid !== void 0 && a.omid_message_method !== void 0 && a.omid_message_version !== void 0 && typeof a.omid_message_guid === "string" && typeof a.omid_message_method === "string" && typeof a.omid_message_version === "string" && (a.omid_message_args === void 0 || a.omid_message_args !== void 0)
    }
    function pn(a) {
        return new nn(a.omid_message_guid,a.omid_message_method,a.omid_message_version,a.omid_message_args)
    }
    function qn(a) {
        var b = {};
        b = (b.omid_message_guid = a.g,
        b.omid_message_method = a.method,
        b.omid_message_version = a.version,
        b);
        a.args !== void 0 && (b.omid_message_args = a.args);
        return b
    }
    ;function rn(a) {
        this.g = a
    }
    ;function sn(a, b) {
        try {
            return a.frames && !!a.frames[b]
        } catch (c) {
            return !1
        }
    }
    function tn(a) {
        return ["omid_v1_present", "omid_v1_present_web", "omid_v1_present_app"].some(function(b) {
            return sn(a, b)
        })
    }
    function un(a) {
        for (var b = y(Object.values(mn)), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = {};
            d = (d.app = "omid_v1_present_app",
            d.web = "omid_v1_present_web",
            d)[c];
            if (sn(a, d))
                return c
        }
        return null
    }
    ;function vn(a, b) {
        return a && (a[b] || (a[b] = {}))
    }
    ;function wn() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = Math.random() * 16 | 0;
            return a === "y" ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    }
    ;function xn() {
        var a = D.apply(0, arguments);
        yn(function() {
            throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(z(a))));
        }, function() {
            return console.error.apply(console, z(a))
        })
    }
    function yn(a, b) {
        typeof jasmine !== "undefined" && jasmine ? a() : typeof console !== "undefined" && console && console.error && b()
    }
    ;var zn = function() {
        if (typeof omidGlobal !== "undefined" && omidGlobal)
            return omidGlobal;
        if (typeof global !== "undefined" && global)
            return global;
        if (typeof window !== "undefined" && window)
            return window;
        if (typeof globalThis !== "undefined" && globalThis)
            return globalThis;
        var a = Function("return this")();
        if (a)
            return a;
        throw Error("Could not determine global object context.");
    }();
    function An(a) {
        this.g = a;
        this.handleExportedMessage = An.prototype.i.bind(this)
    }
    x(An, rn);
    An.prototype.sendMessage = function(a, b) {
        b = b === void 0 ? this.g : b;
        if (!b)
            throw Error("Message destination must be defined at construction time or when sending the message.");
        b.handleExportedMessage(qn(a), this)
    }
    ;
    An.prototype.i = function(a, b) {
        if (on(a) && this.onMessage)
            this.onMessage(pn(a), b)
    }
    ;
    function Bn(a) {
        return a != null && typeof a.top !== "undefined" && a.top != null
    }
    function Cn(a) {
        if (a === zn)
            return !1;
        try {
            if (typeof a.location.hostname === "undefined")
                return !0
        } catch (b) {
            return !0
        }
        return !1
    }
    function Dn() {
        var a;
        typeof a === "undefined" && typeof window !== "undefined" && window && (a = window);
        return Bn(a) ? a : zn
    }
    ;function En(a, b) {
        this.g = b = b === void 0 ? zn : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if (typeof d.data === "object") {
                var e = d.data;
                if (on(e) && d.source && c.onMessage)
                    c.onMessage(pn(e), d.source)
            }
        })
    }
    x(En, rn);
    En.prototype.sendMessage = function(a, b) {
        b = b === void 0 ? this.g : b;
        if (!b)
            throw Error("Message destination must be defined at construction time or when sending the message.");
        b.postMessage(qn(a), "*")
    }
    ;
    var Fn = ["omid", "v1_VerificationServiceCommunication"]
      , Gn = ["omidVerificationProperties", "serviceWindow"];
    function Hn(a, b) {
        return b.reduce(function(c, d) {
            return c && c[d]
        }, a)
    }
    ;function In(a) {
        if (!a) {
            a = Dn();
            var b = b === void 0 ? tn : b;
            var c = []
              , d = Hn(a, Gn);
            d && c.push(d);
            c.push(Bn(a) ? a.top : zn);
            a: {
                c = y(c);
                for (var e = c.next(); !e.done; e = c.next()) {
                    b: {
                        d = a;
                        e = e.value;
                        var f = b;
                        if (!Cn(e))
                            try {
                                var g = Hn(e, Fn);
                                if (g) {
                                    var h = new An(g);
                                    break b
                                }
                            } catch (k) {}
                        h = f(e) ? new En(d,e) : null
                    }
                    if (d = h) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
        }
        if (this.i = a)
            this.i.onMessage = this.Yf.bind(this);
        else if (b = (b = zn.omid3p) && typeof b.registerSessionObserver === "function" && typeof b.addEventListener === "function" ? b : null)
            this.l = b;
        this.u = this.B = 0;
        this.m = {};
        this.o = [];
        (this.g = (b = zn.omidVerificationProperties) ? b.injectionId : void 0) || wn()
    }
    n = In.prototype;
    n.T = function() {
        var a = Dn();
        var b = (b = zn.omidVerificationProperties) && b.injectionSource ? b.injectionSource : void 0;
        return (b || un(a) || un(Bn(a) ? a.top : zn)) !== "web" || this.g ? !(!this.i && !this.l) : !1
    }
    ;
    function Jn(a, b, c) {
        hn(b);
        a.l ? a.l.registerSessionObserver(b, c, a.g) : a.Yb("addSessionListener", b, c, a.g)
    }
    n.addEventListener = function(a, b) {
        gn("eventType", a);
        hn(b);
        this.l ? this.l.addEventListener(a, b, this.g) : this.Yb("addEventListener", b, a, this.g)
    }
    ;
    function Kn(a, b, c, d) {
        gn("url", b);
        zn.document && zn.document.createElement ? Ln(a, b, c, d) : a.Yb("sendUrl", function(e) {
            e && c ? c() : !e && d && d()
        }, b)
    }
    function Ln(a, b, c, d) {
        function e(g) {
            var h = a.o.indexOf(f);
            h >= 0 && a.o.splice(h, 1);
            g && g()
        }
        var f = zn.document.createElement("img");
        a.o.push(f);
        f.addEventListener("load", e.bind(a, c));
        f.addEventListener("error", e.bind(a, d));
        f.src = b
    }
    n.setTimeout = function(a, b) {
        hn(a);
        jn("timeInMillis", b);
        if (Mn())
            return zn.setTimeout(a, b);
        var c = this.B++;
        this.Yb("setTimeout", a, c, b);
        return c
    }
    ;
    n.clearTimeout = function(a) {
        jn("timeoutId", a);
        Mn() ? zn.clearTimeout(a) : this.bf("clearTimeout", a)
    }
    ;
    n.setInterval = function(a, b) {
        hn(a);
        jn("timeInMillis", b);
        if (Nn())
            return zn.setInterval(a, b);
        var c = this.u++;
        this.Yb("setInterval", a, c, b);
        return c
    }
    ;
    n.clearInterval = function(a) {
        jn("intervalId", a);
        Nn() ? zn.clearInterval(a) : this.bf("clearInterval", a)
    }
    ;
    function Mn() {
        return typeof zn.setTimeout === "function" && typeof zn.clearTimeout === "function"
    }
    function Nn() {
        return typeof zn.setInterval === "function" && typeof zn.clearInterval === "function"
    }
    n.Yf = function(a) {
        var b = a.method
          , c = a.g;
        a = a.args;
        if (b === "response" && this.m[c]) {
            var d = kn() && ln() ? a ? a : [] : a && typeof a === "string" ? JSON.parse(a) : [];
            this.m[c].apply(this, d)
        }
        b === "error" && window.console && xn(a)
    }
    ;
    n.bf = function(a) {
        this.Yb.apply(this, [a, null].concat(z(D.apply(1, arguments))))
    }
    ;
    n.Yb = function(a, b) {
        var c = D.apply(2, arguments);
        if (this.i) {
            var d = wn();
            b && (this.m[d] = b);
            var e = "VerificationService." + a;
            c = kn() && ln() ? c : JSON.stringify(c);
            this.i.sendMessage(new nn(d,e,"1.6.1-google_20251208",c))
        }
    }
    ;
    var On = void 0;
    if (On = On === void 0 ? typeof omidExports === "undefined" ? null : omidExports : On) {
        var Pn = ["OmidVerificationClient"];
        Pn.slice(0, Pn.length - 1).reduce(vn, On)[Pn[Pn.length - 1]] = In
    }
    ;In.yb = void 0;
    In.g = function() {
        return In.yb ? In.yb : In.yb = new In
    }
    ;
    var Qn = {}
      , Rn = (Qn.notFound = !0,
    Qn.hidden = !0,
    Qn.backgrounded = !0,
    Qn.noOutputDevice = !0,
    Qn);
    function Sn() {
        ck.call(this, G, 2, "omid");
        this.Xa = In.g();
        this.hc = In.g().T();
        this.D = [];
        this.H = this.ba = this.X = this.B = this.R = this.P = this.qa = this.l = this.Lc = this.Ga = void 0;
        this.jc = "normal";
        this.kc = this.Jb = !1;
        this.sa = void 0;
        this.Ja = !1;
        this.Hb = this.Ia = void 0
    }
    x(Sn, ck);
    function Tn(a) {
        a.Xa.addEventListener("geometryChange", function(b) {
            Un(397, function() {
                return Vn(a, b)
            })
        })
    }
    function Wn(a) {
        function b(c) {
            Un(399, function() {
                return Xn(a, c)
            })
        }
        Ra("loaded start firstQuartile midpoint thirdQuartile complete pause resume bufferStart bufferFinish skipped volumeChange playerStateChange adUserInteraction impression".split(" "), function(c) {
            a.Xa.addEventListener(c, b)
        })
    }
    function Yn(a) {
        Jn(a.Xa, function(b) {
            Un(398, function() {
                return Zn(a, b)
            })
        }, "doubleclickbygoogle.com")
    }
    function Vn(a, b) {
        $n(b, function(c, d, e, f) {
            a.H !== c && (c = Error("Received geometry event from a different session. Expected session id: " + (a.H + ", Received session id: ") + (c + ". Creative type: ") + (a.P + ", Omid partner: ") + (a.B + ", App info: ") + JSON.stringify(a.l)),
            Gj(1071, c));
            e = f.viewport;
            c = ak().l;
            d = ak().g;
            e != null && e.width != null && e.height != null && (c = (new Kc(e.width,e.height)).floor(),
            d = (new J(0,e.width,e.height,0)).floor());
            var g = f.adView
              , h = g.geometry
              , k = g.onScreenGeometry;
            f = new J(0,0,0,0);
            e = new J(0,0,0,0);
            var l = null;
            ao(k) && ao(h) && (f = (new J(k.y,k.x + k.width,k.y + k.height,k.x)).floor(),
            e = (new J(h.y,h.x + h.width,h.y + h.height,h.x)).floor(),
            dj(L().flags, Pm) ? l = g.percentageInView / 100 : h.width > 0 && h.height > 0 && (l = k.width * k.height / (h.width * h.height)));
            a.D = g.reasons || [];
            (g = !Xa(a.D, function(m) {
                return Rn[m]
            })) && l !== null && l > 0 && (a.kc = !0,
            a.Jb && (L().l = !0));
            h = a.D.includes("noOutputDevice");
            a.Ja = a.Ja || h;
            bo(a, c, d, e, f, l, g, a.i.volume, h)
        })
    }
    function Xn(a, b) {
        $n(b, function(c, d, e, f) {
            if (e === "impression")
                a.Jb = !0,
                a.kc && (L().l = !0);
            else {
                d = a.i.volume;
                c = !1;
                if (Qa(["start", "volumeChange"], e) >= 0) {
                    d = typeof (f == null ? void 0 : f.deviceVolume) === "number" ? f == null ? void 0 : f.deviceVolume : a.R && a.R == "web" ? 1 : null;
                    var g = typeof (f == null ? void 0 : f.mediaPlayerVolume) === "number" ? f == null ? void 0 : f.mediaPlayerVolume : typeof f.videoPlayerVolume === "number" ? f == null ? void 0 : f.videoPlayerVolume : null;
                    d = typeof d === "number" && typeof g === "number" ? d * g : null;
                    d != null && (a.i.volume = d,
                    c = !0)
                }
                e == "playerStateChange" && f.state != null && (a.jc = f.state,
                c = !0);
                g = ak();
                c && bo(a, g.l, g.g, g.i, a.i.g, a.i.i, a.i.l, d, null)
            }
            if (e == "impression" || e == "loaded")
                f.creativeType ? a.P = f.creativeType : f.mediaType && (a.P = f.mediaType == "video" ? "video" : a.ba == "native" ? "nativeDisplay" : "htmlDisplay")
        })
    }
    function Zn(a, b) {
        $n(b, function(c, d, e, f) {
            e == "sessionStart" && f.context && (a.Lc = f.verificationParameters,
            a.l = f.context.app,
            a.ba = f.context.adSessionType,
            a.qa = f.context.accessMode,
            a.R = f.context.environment,
            a.sa = f.context.deviceCategory,
            f.context.omidNativeInfo && f.context.omidNativeInfo.partnerName ? a.B = f.context.omidNativeInfo.partnerName : f.context.omidJsInfo && f.context.omidJsInfo.partnerName && (a.B = f.context.omidJsInfo.partnerName),
            f.context.omidNativeInfo && f.context.omidNativeInfo.partnerVersion ? a.X = f.context.omidNativeInfo.partnerVersion : f.context.omidJsInfo && f.context.omidJsInfo.partnerVersion && (a.X = f.context.omidJsInfo.partnerVersion));
            ["sessionStart", "sessionError"].includes(e);
            e == "sessionFinish" && typeof a.Ga === "function" && a.Ga();
            a.H === void 0 ? a.H = c : a.H !== c && Gj(1072, Error("Received session event from a different session. Expected session id: " + (a.H + ", Received session id: ") + (c + ".  partner: ") + a.B + (" partner version: " + a.X)));
            e == "sessionStart" && f.lastActivity && f.lastActivity.timestamp && typeof f.lastActivity.timestamp === "number" && (a.Ia = f.lastActivity.timestamp,
            a.Hb = Math.round((d - a.Ia) / 1E3))
        })
    }
    function ao(a) {
        return a != null && Ya(function(b) {
            return a.hasOwnProperty(b)
        })
    }
    function $n(a, b) {
        a != null && a.adSessionId != null && a.timestamp != null && a.type != null ? b(a.adSessionId, a.timestamp, a.type, a.data || {}) : (a = Error("OMSDK event missing some data: " + JSON.stringify(a)),
        Gj(543, a))
    }
    function Un(a, b) {
        try {
            b.apply()
        } catch (c) {
            Gj(a, c)
        }
    }
    function bo(a, b, c, d, e, f, g, h, k) {
        var l = Qd(gl);
        if (l.l !== g) {
            l.l = g;
            l = y(l.i);
            for (var m = l.next(); !m.done; m = l.next())
                m = m.value,
                m(null)
        }
        k !== null && Qd(gl);
        a.jc != "minimized" && g || (e = new J(0,0,0,0));
        k = ak();
        e = e || new J(0,0,0,0);
        l = gk(a);
        k.l = b;
        k.g = c;
        k.i = d;
        l.g = e;
        l.i = f;
        l.l = g;
        l.volume = h;
        a.Sa(l)
    }
    n = Sn.prototype;
    n.nd = function() {}
    ;
    n.pd = function() {}
    ;
    n.me = function() {}
    ;
    n.ne = function() {}
    ;
    n.Hc = function() {
        var a = L();
        return a.Ka === 6 || a.Ka === 5 ? this.Va() : Mb(a.g, "omid") == 1 && this.Va()
    }
    ;
    n.Va = function() {
        return this.hc
    }
    ;
    n.Id = function() {
        var a = {}
          , b = L();
        this.Va() && Mb(b.g, "sloi") && (La(this.D) && this.D.length > 0 && (a.omidr = Va(db(this.D, 0, 5), function(c) {
            return String(c).slice(0, 2)
        }).join(",")),
        this.l && (this.l.libraryVersion && (a.omidv = this.l.libraryVersion),
        this.l.appId && (a.omida = this.l.appId)),
        this.B && (a.omidp = this.B),
        this.ba && (a.omids = this.ba.charAt(0)),
        this.X && (a.omidpv = this.X.substring(0, 30)),
        this.qa && (a.omidam = this.qa.charAt(0)),
        this.P && (a.omidct = this.P.charAt(0)),
        this.R && (a.omidia = this.R == "app" ? 1 : 0),
        this.sa && (a.omiddc = this.sa),
        this.Ja && (a.nopd = 1),
        this.Ia && (a.omiddit = this.Hb));
        return a
    }
    ;
    n.dc = function() {
        var a = this;
        if (this.Y || !this.hc)
            return !this.Pb();
        this.Y = !0;
        Un(391, function() {
            return Yn(a)
        });
        Un(390, function() {
            return Tn(a)
        });
        Un(392, function() {
            return Wn(a)
        });
        return !0
    }
    ;
    function co(a) {
        lk.call(this, Qd(Sn));
        Qd(Sn).Ga = a
    }
    x(co, lk);
    n = co.prototype;
    n.ra = function() {
        return "omid"
    }
    ;
    n.ze = function(a, b, c) {
        return new fn(this.g,b,c)
    }
    ;
    n.qd = function() {
        return this.g.Va()
    }
    ;
    n.rd = function() {
        return this.g.Hc()
    }
    ;
    n.init = function() {
        this.g.dc();
        return !0
    }
    ;
    n.dispose = function() {
        this.g.dispose();
        lk.prototype.dispose.call(this)
    }
    ;
    function eo() {
        ck.call(this, G, 2, "mraid");
        this.P = 0;
        this.D = this.H = !1;
        this.B = null;
        this.l = Qj(this.m);
        this.i.g = new J(0,0,0,0);
        this.R = !1
    }
    x(eo, ck);
    n = eo.prototype;
    n.Va = function() {
        return this.l.Ea != null
    }
    ;
    n.Id = function() {
        var a = {};
        this.P && (a.mraid = this.P);
        this.H && (a.mlc = 1);
        a.mtop = this.l.Ua;
        this.B && (a.mse = this.B);
        this.R && (a.msc = 1);
        a.mcp = this.l.Pa;
        return a
    }
    ;
    n.hb = function(a) {
        var b = D.apply(1, arguments);
        try {
            return this.l.Ea[a].apply(this.l.Ea, b)
        } catch (c) {
            Gj(538, c, .01, function(d) {
                d.method = a
            })
        }
    }
    ;
    function fo(a, b, c) {
        a.hb("addEventListener", b, c)
    }
    n.dc = function() {
        var a = this;
        if (this.Y)
            return !this.Pb();
        this.Y = !0;
        if (this.l.Pa === 2)
            return this.B = "ng",
            this.fail("w"),
            !1;
        if (this.l.Pa === 1)
            return this.B = "mm",
            this.fail("w"),
            !1;
        ak().D = !0;
        this.m.document.readyState && this.m.document.readyState == "complete" ? go(this) : Qk(this.m, "load", function() {
            Td().setTimeout(Fj(292, function() {
                return go(a)
            }), 100)
        }, 292);
        return !0
    }
    ;
    function go(a) {
        L().m = !!a.hb("isViewable");
        fo(a, "viewableChange", ho);
        a.hb("getState") === "loading" ? fo(a, "ready", io) : jo(a)
    }
    function jo(a) {
        typeof a.l.Ea.AFMA_LIDAR === "string" ? (a.H = !0,
        ko(a)) : (a.l.Pa = 3,
        a.B = "nc",
        a.fail("w"))
    }
    function ko(a) {
        a.D = !1;
        var b = Mb(L().g, "rmmt") == 1
          , c = !!a.hb("isViewable");
        (b ? !c : 1) && Td().setTimeout(Fj(524, function() {
            a.D || (lo(a),
            Gj(540, Error()),
            a.B = "mt",
            a.fail("w"))
        }), 500);
        mo(a);
        fo(a, a.l.Ea.AFMA_LIDAR, no)
    }
    function mo(a) {
        var b = Mb(L().g, "sneio") == 1
          , c = a.l.Ea.AFMA_LIDAR_EXP_1 !== void 0
          , d = a.l.Ea.AFMA_LIDAR_EXP_2 !== void 0;
        (b = b && d) && (a.l.Ea.AFMA_LIDAR_EXP_2 = !0);
        c && (a.l.Ea.AFMA_LIDAR_EXP_1 = !b)
    }
    function lo(a) {
        a.hb("removeEventListener", a.l.Ea.AFMA_LIDAR, no);
        a.H = !1
    }
    n.nd = function() {
        var a = ak()
          , b = oo(this, "getMaxSize");
        a.g = new J(0,b.width,b.height,0)
    }
    ;
    n.pd = function() {
        ak().l = oo(this, "getScreenSize")
    }
    ;
    function oo(a, b) {
        if (a.hb("getState") === "loading")
            return new Kc(-1,-1);
        b = a.hb(b);
        if (!b)
            return new Kc(-1,-1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new Kc(-1,-1) : new Kc(a,b)
    }
    n.dispose = function() {
        lo(this);
        ck.prototype.dispose.call(this)
    }
    ;
    function io() {
        try {
            var a = Qd(eo);
            a.hb("removeEventListener", "ready", io);
            jo(a)
        } catch (b) {
            Gj(541, b)
        }
    }
    function no(a, b) {
        try {
            var c = Qd(eo);
            c.D = !0;
            var d = a ? new J(a.y,a.x + a.width,a.y + a.height,a.x) : new J(0,0,0,0);
            var e = gk(c);
            e.g = d;
            e.volume = b;
            c.Sa(e)
        } catch (f) {
            Gj(542, f)
        }
    }
    function ho(a) {
        var b = L()
          , c = Qd(eo);
        a && !b.m && (b.m = !0,
        c.R = !0,
        c.B && c.fail("w", !0))
    }
    ;function po() {
        ym.call(this)
    }
    x(po, ym);
    n = po.prototype;
    n.og = function() {
        var a = this;
        if (G.__google_lidar_) {
            if (G.__google_lidar_ += 1,
            G.__google_lidar_adblocks_count_) {
                var b = G.__google_lidar_radf_;
                b && typeof b === "function" && b()
            }
        } else {
            G.__google_lidar_ = 1;
            Am(this);
            b = L();
            b.Ka = 2;
            b = b.i.g;
            G.__google_lidar_radf_ = aj(b, function() {
                return a.Cg.apply(a, z(D.apply(0, arguments)))
            });
            var c = G.document.readyState;
            c && c === "complete" ? this.Sd() : (nd(G, "load", aj(b, function() {
                Td().setTimeout(Fj(172, function() {
                    return a.Zf.apply(a, z(D.apply(0, arguments)))
                }), 100)
            })),
            Qk(G, "DOMContentLoaded", function() {
                return a.Sd.apply(a, z(D.apply(0, arguments)))
            }, 173))
        }
    }
    ;
    n.Zf = function() {
        var a = this;
        Ra(Hl.g, function(b) {
            return Em(a, b)
        });
        this.Sd()
    }
    ;
    n.Sd = function() {
        var a = Lj()
          , b = this.Xc();
        if (b.length)
            if (this.g)
                try {
                    Gm(this, a, b).forEach(function(c) {
                        dj(L().flags, Tm) && (c.Jb = !0)
                    })
                } catch (c) {}
            else
                Fm(this)
    }
    ;
    function Hm(a) {
        return Mb(a, "omid") == 1 ? [new co(function() {
            return Bm("u")
        }
        )] : [new Ml([Qd(eo)])]
    }
    n.Cg = function() {
        var a = this.Xc();
        if (a.length)
            try {
                var b = Lj()
                  , c = Gm(this, b, a);
                Ra(c, function(d) {
                    dj(L().flags, Tm) && (d.Jb = !0);
                    d.De = !0
                })
            } catch (d) {}
    }
    ;
    n.Xc = function() {
        return jb(Va(Pj, function(a) {
            a = document.querySelectorAll("." + a);
            return cb(a)
        }))
    }
    ;
    function qo() {
        this.ge = 0
    }
    qo.prototype.bc = function(a, b) {
        var c = this;
        return function() {
            var d = D.apply(0, arguments);
            c.ge = a;
            return b.apply(null, z(d))
        }
    }
    ;
    function ro() {
        var a = {};
        this.Na = (a[3] = [],
        a[2] = [],
        a[1] = [],
        a);
        this.Pd = !1
    }
    function so(a, b, c) {
        var d = to(a, c);
        a.Na[c].push(b);
        d && a.Na[c].length === 1 && a.flush()
    }
    function to(a, b) {
        return Object.keys(a.Na).map(function(c) {
            return Number(c)
        }).filter(function(c) {
            return !isNaN(c) && c > b
        }).every(function(c) {
            return a.Na[c].length === 0
        })
    }
    ro.prototype.flush = function() {
        if (!this.Pd) {
            this.Pd = !0;
            try {
                for (; Object.values(this.Na).some(function(a) {
                    return a.length > 0
                }); )
                    uo(this, 3),
                    uo(this, 2),
                    uo(this, 1)
            } catch (a) {
                throw Object.values(this.Na).forEach(function(b) {
                    return void b.splice(0, b.length)
                }),
                a;
            } finally {
                this.Pd = !1
            }
        }
    }
    ;
    function uo(a, b) {
        for (; to(a, b) && a.Na[b].length > 0; )
            a.Na[b][0](),
            a.Na[b].shift()
    }
    da.Object.defineProperties(ro.prototype, {
        Hg: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Object.values(this.Na).some(function(a) {
                    return a.length > 0
                })
            }
        }
    });
    function vo() {
        this.g = new Map
    }
    function wo(a, b) {
        var c = a.g.get(b);
        if (c)
            return c;
        var d;
        c = (d = b.description) != null ? d : Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36);
        a.g.set(b, c);
        return c
    }
    ;/* 
 
 
 Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors 
 Licensed under the Apache License, Version 2.0 (the "License"); 
 you may not use this file except in compliance with the License. 
 You may obtain a copy of the License at 
     http://www.apache.org/licenses/LICENSE-2.0 
 Unless required by applicable law or agreed to in writing, software 
 distributed under the License is distributed on an "AS IS" BASIS, 
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 See the License for the specific language governing permissions and 
 limitations under the License. 
*/
    function xo(a) {
        var b = Error.call(this, a ? a.length + " errors occurred during unsubscription:\n" + a.map(function(c, d) {
            return d + 1 + ") " + c.toString()
        }).join("\n  ") : "");
        this.message = b.message;
        "stack"in b && (this.stack = b.stack);
        this.errors = a;
        Object.setPrototypeOf(this, this.constructor.prototype);
        this.name = "UnsubscriptionError"
    }
    x(xo, Error);
    function yo(a, b) {
        a && (b = a.indexOf(b),
        0 <= b && a.splice(b, 1))
    }
    ;function M(a) {
        return typeof a === "function"
    }
    ;function zo(a) {
        this.o = a;
        this.closed = !1;
        this.l = this.i = null
    }
    n = zo.prototype;
    n.unsubscribe = function() {
        if (!this.closed) {
            this.closed = !0;
            var a = this.i;
            if (Array.isArray(a))
                for (var b = y(a), c = b.next(); !c.done; c = b.next())
                    c.value.remove(this);
            else
                a == null || a.remove(this);
            b = this.o;
            if (M(b))
                try {
                    b()
                } catch (f) {
                    var d = f instanceof xo ? f.errors : [f]
                }
            var e = this.l;
            if (e)
                for (this.l = null,
                b = y(e),
                c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    try {
                        M(c) ? c() : c.unsubscribe()
                    } catch (f) {
                        c = void 0,
                        d = (c = d) != null ? c : [],
                        f instanceof xo ? d = [].concat(z(d), z(f.errors)) : d.push(f)
                    }
                }
            if (d)
                throw new xo(d);
        }
    }
    ;
    n.add = function(a) {
        if (a && a !== this)
            if (this.closed)
                M(a) ? a() : a.unsubscribe();
            else {
                if (a instanceof zo) {
                    if (a.closed || a.xf(this))
                        return;
                    a.wf(this)
                }
                var b;
                (this.l = (b = this.l) != null ? b : []).push(a)
            }
    }
    ;
    n.xf = function(a) {
        var b = this.i;
        return b === a || Array.isArray(b) && b.includes(a)
    }
    ;
    n.wf = function(a) {
        var b = this.i;
        this.i = Array.isArray(b) ? (b.push(a),
        b) : b ? [b, a] : a
    }
    ;
    n.yf = function(a) {
        var b = this.i;
        b === a ? this.i = null : Array.isArray(b) && yo(b, a)
    }
    ;
    n.remove = function(a) {
        var b = this.l;
        b && yo(b, a);
        a instanceof zo && a.yf(this)
    }
    ;
    var Ao = new zo;
    Ao.closed = !0;
    zo.g = Ao;
    function Bo(a) {
        return a instanceof zo || a && "closed"in a && M(a.remove) && M(a.add) && M(a.unsubscribe)
    }
    ;function Co() {
        setTimeout.apply(null, z(D.apply(0, arguments)))
    }
    ;function Do() {}
    ;function Eo(a) {
        Co(function() {
            throw a;
        })
    }
    ;function Fo(a) {
        zo.call(this);
        this.g = !1;
        this.destination = a instanceof Fo ? a : new Go(!a || M(a) ? {
            next: a != null ? a : void 0
        } : a);
        Bo(a) && a.add(this)
    }
    x(Fo, zo);
    Fo.g = zo.g;
    Fo.create = function(a, b, c) {
        return new Ho(a,b,c)
    }
    ;
    n = Fo.prototype;
    n.next = function(a) {
        this.g || this.td(a)
    }
    ;
    n.error = function(a) {
        this.g || (this.g = !0,
        this.re(a))
    }
    ;
    n.complete = function() {
        this.g || (this.g = !0,
        this.Jc())
    }
    ;
    n.unsubscribe = function() {
        this.closed || (this.g = !0,
        zo.prototype.unsubscribe.call(this))
    }
    ;
    n.td = function(a) {
        this.destination.next(a)
    }
    ;
    n.re = function(a) {
        this.destination.error(a);
        this.unsubscribe()
    }
    ;
    n.Jc = function() {
        this.destination.complete();
        this.unsubscribe()
    }
    ;
    function Go(a) {
        this.g = a
    }
    Go.prototype.next = function(a) {
        var b = this.g;
        if (b.next)
            try {
                b.next(a)
            } catch (c) {
                Eo(c)
            }
    }
    ;
    Go.prototype.error = function(a) {
        var b = this.g;
        if (b.error)
            try {
                b.error(a)
            } catch (c) {
                Eo(c)
            }
        else
            Eo(a)
    }
    ;
    Go.prototype.complete = function() {
        var a = this.g;
        if (a.complete)
            try {
                a.complete()
            } catch (b) {
                Eo(b)
            }
    }
    ;
    function Ho(a, b, c) {
        Fo.call(this);
        var d;
        M(a) || !a ? d = {
            next: a != null ? a : void 0,
            error: b != null ? b : void 0,
            complete: c != null ? c : void 0
        } : d = a;
        this.destination = new Go(d)
    }
    x(Ho, Fo);
    Ho.g = Fo.g;
    Ho.create = Fo.create;
    var Io = typeof Symbol === "function" && Symbol.observable || "@@observable";
    function Jo(a) {
        return a
    }
    ;function N() {
        return Ko(D.apply(0, arguments))
    }
    function Ko(a) {
        return a.length === 0 ? Jo : a.length === 1 ? a[0] : function(b) {
            return a.reduce(function(c, d) {
                return d(c)
            }, b)
        }
    }
    ;function O(a) {
        a && (this.Oa = a)
    }
    n = O.prototype;
    n.Bb = function(a) {
        var b = new O;
        b.source = this;
        b.u = a;
        return b
    }
    ;
    n.subscribe = function(a, b, c) {
        a = a && a instanceof Fo || a && M(a.next) && M(a.error) && M(a.complete) && Bo(a) ? a : new Ho(a,b,c);
        b = this.u;
        c = this.source;
        a.add(b ? b.call(a, c) : c ? this.Oa(a) : this.ud(a));
        return a
    }
    ;
    n.ud = function(a) {
        try {
            return this.Oa(a)
        } catch (b) {
            a.error(b)
        }
    }
    ;
    n.forEach = function(a, b) {
        var c = this;
        b = Lo(b);
        return new b(function(d, e) {
            var f = c.subscribe(function(g) {
                try {
                    a(g)
                } catch (h) {
                    e(h),
                    f == null || f.unsubscribe()
                }
            }, e, d)
        }
        )
    }
    ;
    n.Oa = function(a) {
        var b;
        return (b = this.source) == null ? void 0 : b.subscribe(a)
    }
    ;
    O.prototype[Io] = function() {
        return this
    }
    ;
    O.prototype.j = function() {
        var a = D.apply(0, arguments);
        return a.length ? Ko(a)(this) : this
    }
    ;
    O.create = function(a) {
        return new O(a)
    }
    ;
    function Lo(a) {
        var b;
        return (b = a != null ? a : void 0) != null ? b : Promise
    }
    ;function Mo() {
        var a = Error.call(this, "object unsubscribed");
        this.message = a.message;
        "stack"in a && (this.stack = a.stack);
        Object.setPrototypeOf(this, this.constructor.prototype);
        this.name = "ObjectUnsubscribedError"
    }
    x(Mo, Error);
    function P() {
        this.i = [];
        this.l = this.g = this.closed = !1;
        this.o = null
    }
    x(P, O);
    n = P.prototype;
    n.Bb = function(a) {
        var b = new No(this,this);
        b.u = a;
        return b
    }
    ;
    n.nb = function() {
        if (this.closed)
            throw new Mo;
    }
    ;
    n.next = function(a) {
        this.nb();
        if (!this.g) {
            var b = this.i.slice();
            b = y(b);
            for (var c = b.next(); !c.done; c = b.next())
                c.value.next(a)
        }
    }
    ;
    n.error = function(a) {
        this.nb();
        if (!this.g) {
            this.l = this.g = !0;
            this.o = a;
            for (var b = this.i; b.length; )
                b.shift().error(a)
        }
    }
    ;
    n.complete = function() {
        this.nb();
        if (!this.g) {
            this.g = !0;
            for (var a = this.i; a.length; )
                a.shift().complete()
        }
    }
    ;
    n.unsubscribe = function() {
        this.g = this.closed = !0;
        this.i = null
    }
    ;
    n.ud = function(a) {
        this.nb();
        return O.prototype.ud.call(this, a)
    }
    ;
    n.Oa = function(a) {
        this.nb();
        this.qe(a);
        return this.te(a)
    }
    ;
    n.te = function(a) {
        var b = this
          , c = this.g
          , d = this.i;
        return this.l || c ? zo.g : (d.push(a),
        new zo(function() {
            return yo(b.i, a)
        }
        ))
    }
    ;
    n.qe = function(a) {
        var b = this.o
          , c = this.g;
        this.l ? a.error(b) : c && a.complete()
    }
    ;
    P.create = function(a, b) {
        return new No(a,b)
    }
    ;
    function No(a, b) {
        P.call(this);
        this.destination = a;
        this.source = b
    }
    x(No, P);
    No.create = P.create;
    No.prototype.next = function(a) {
        var b, c;
        (b = this.destination) == null || (c = b.next) == null || c.call(b, a)
    }
    ;
    No.prototype.error = function(a) {
        var b, c;
        (b = this.destination) == null || (c = b.error) == null || c.call(b, a)
    }
    ;
    No.prototype.complete = function() {
        var a, b;
        (a = this.destination) == null || (b = a.complete) == null || b.call(a)
    }
    ;
    No.prototype.Oa = function(a) {
        var b, c;
        return (c = (b = this.source) == null ? void 0 : b.subscribe(a)) != null ? c : zo.g
    }
    ;
    function Oo(a) {
        P.call(this);
        this.m = a
    }
    x(Oo, P);
    Oo.create = P.create;
    Oo.prototype.Oa = function(a) {
        var b = P.prototype.Oa.call(this, a);
        !b.closed && a.next(this.m);
        return b
    }
    ;
    Oo.prototype.next = function(a) {
        P.prototype.next.call(this, this.m = a)
    }
    ;
    da.Object.defineProperties(Oo.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a = this.o
                  , b = this.m;
                if (this.l)
                    throw a;
                this.nb();
                return b
            }
        }
    });
    var Po = new O(function(a) {
        return a.complete()
    }
    );
    function Qo(a, b) {
        return new O(function(c) {
            var d = 0;
            return b.J(function() {
                d === a.length ? c.complete() : (c.next(a[d++]),
                c.closed || this.J())
            })
        }
        )
    }
    ;function Ro(a, b) {
        if (!a)
            throw Error("Iterable cannot be null");
        return new O(function(c) {
            var d = new zo;
            d.add(b.J(function() {
                var e = a[Symbol.asyncIterator]();
                d.add(b.J(function() {
                    var f = this;
                    e.next().then(function(g) {
                        g.done ? c.complete() : (c.next(g.value),
                        f.J())
                    })
                }))
            }));
            return d
        }
        )
    }
    ;var So = typeof Symbol === "function" && Symbol.iterator ? Symbol.iterator : "@@iterator";
    function To(a, b, c) {
        b = b.J(function() {
            try {
                c.call(this)
            } catch (d) {
                a.error(d)
            }
        }, 0);
        a.add(b)
    }
    ;function Uo(a, b) {
        return new O(function(c) {
            var d;
            c.add(b.J(function() {
                d = a[So]();
                To(c, b, function() {
                    var e = d.next()
                      , f = e.value;
                    e.done ? c.complete() : (c.next(f),
                    this.J())
                })
            }));
            return function() {
                var e;
                return M((e = d) == null ? void 0 : e.return) && d.return()
            }
        }
        )
    }
    ;function Vo(a, b) {
        return new O(function(c) {
            var d = new zo;
            d.add(b.J(function() {
                var e = a[Io]();
                d.add(e.subscribe({
                    next: function(f) {
                        d.add(b.J(function() {
                            return c.next(f)
                        }))
                    },
                    error: function(f) {
                        d.add(b.J(function() {
                            return c.error(f)
                        }))
                    },
                    complete: function() {
                        d.add(b.J(function() {
                            return c.complete()
                        }))
                    }
                }))
            }));
            return d
        }
        )
    }
    ;function Wo(a, b) {
        return new O(function(c) {
            return b.J(function() {
                return a.then(function(d) {
                    c.add(b.J(function() {
                        c.next(d);
                        c.add(b.J(function() {
                            return c.complete()
                        }))
                    }))
                }, function(d) {
                    c.add(b.J(function() {
                        return c.error(d)
                    }))
                })
            })
        }
        )
    }
    ;function Xo(a) {
        return a && typeof a.length === "number" && typeof a !== "function"
    }
    ;function Yo(a) {
        return new TypeError("You provided " + (a !== null && typeof a === "object" ? "an invalid object" : "'" + a + "'") + " where a stream was expected. You can provide an Observable, Promise, Array, AsyncIterable, or Iterable.")
    }
    ;function Zo(a, b) {
        if (a != null) {
            if (M(a[Io]))
                return Vo(a, b);
            if (Xo(a))
                return Qo(a, b);
            if (M(a == null ? void 0 : a.then))
                return Wo(a, b);
            if (Symbol.asyncIterator && M(a == null ? void 0 : a[Symbol.asyncIterator]))
                return Ro(a, b);
            if (M(a == null ? void 0 : a[So]))
                return Uo(a, b)
        }
        throw Yo(a);
    }
    ;function $o(a, b) {
        return b ? Zo(a, b) : ap(a)
    }
    function ap(a) {
        if (a instanceof O)
            return a;
        if (a != null) {
            if (M(a[Io]))
                return bp(a);
            if (Xo(a))
                return cp(a);
            if (M(a == null ? void 0 : a.then))
                return dp(a);
            if (Symbol.asyncIterator && M(a == null ? void 0 : a[Symbol.asyncIterator]))
                return ep(a);
            if (M(a == null ? void 0 : a[So]))
                return fp(a)
        }
        throw Yo(a);
    }
    function bp(a) {
        return new O(function(b) {
            var c = a[Io]();
            if (M(c.subscribe))
                return c.subscribe(b);
            throw new TypeError("Provided object does not correctly implement Symbol.observable");
        }
        )
    }
    function cp(a) {
        return new O(function(b) {
            for (var c = 0; c < a.length && !b.closed; c++)
                b.next(a[c]);
            b.complete()
        }
        )
    }
    function dp(a) {
        return new O(function(b) {
            a.then(function(c) {
                b.closed || (b.next(c),
                b.complete())
            }, function(c) {
                return b.error(c)
            }).then(null, Eo)
        }
        )
    }
    function fp(a) {
        return new O(function(b) {
            for (var c = a[So](); !b.closed; ) {
                var d = c.next()
                  , e = d.value;
                d.done ? b.complete() : b.next(e)
            }
            return function() {
                return M(c == null ? void 0 : c.return) && c.return()
            }
        }
        )
    }
    function ep(a) {
        return new O(function(b) {
            gp(a, b).catch(function(c) {
                return b.error(c)
            })
        }
        )
    }
    function gp(a, b) {
        var c, d, e, f, g, h;
        return Da(function(k) {
            switch (k.g) {
            case 1:
                k.H(2, 3);
                var l = a[Symbol.asyncIterator];
                f = l !== void 0 ? l.call(a) : new Fa(y(a));
            case 5:
                return k.i(f.next(), 8);
            case 8:
                d = k.l;
                if (d.done) {
                    k.Da(3);
                    break
                }
                g = d.value;
                b.next(g);
                k.Da(5);
                break;
            case 3:
                k.X();
                k.sa(9);
                if (!d || d.done || !(e = f.return)) {
                    k.Da(9);
                    break
                }
                return k.i(e.call(f), 9);
            case 9:
                k.X(0, 0, 1);
                if (c)
                    throw c.error;
                k.Y(10, 1);
                break;
            case 10:
                k.Y(4);
                break;
            case 2:
                h = k.D();
                c = {
                    error: h
                };
                k.Da(3);
                break;
            case 4:
                b.complete(),
                k.R()
            }
        })
    }
    ;function hp(a, b) {
        return b ? Qo(a, b) : cp(a)
    }
    ;function ip(a) {
        return M(a[a.length - 1]) ? a.pop() : void 0
    }
    function jp(a) {
        var b = a[a.length - 1];
        return b && M(b.J) ? a.pop() : void 0
    }
    ;function kp() {
        var a = D.apply(0, arguments)
          , b = jp(a);
        return b ? Qo(a, b) : hp(a)
    }
    ;function lp(a) {
        var b = M(a) ? a : function() {
            return a
        }
        ;
        return new O(function(c) {
            return c.error(b())
        }
        )
    }
    ;var mp = {
        now: function() {
            return (mp.Qf || Date).now()
        },
        Qf: void 0
    };
    function np(a, b, c) {
        a = a === void 0 ? Infinity : a;
        b = b === void 0 ? Infinity : b;
        c = c === void 0 ? mp : c;
        P.call(this);
        this.B = a;
        this.H = b;
        this.D = c;
        this.buffer = [];
        this.m = b === Infinity;
        this.B = Math.max(1, a);
        this.H = Math.max(1, b)
    }
    x(np, P);
    np.create = P.create;
    np.prototype.next = function(a) {
        var b = this.buffer
          , c = this.m
          , d = this.D
          , e = this.H;
        this.g || (b.push(a),
        !c && b.push(d.now() + e));
        op(this);
        P.prototype.next.call(this, a)
    }
    ;
    np.prototype.Oa = function(a) {
        this.nb();
        op(this);
        for (var b = this.te(a), c = this.m, d = this.buffer.slice(), e = 0; e < d.length && !a.closed; e += c ? 1 : 2)
            a.next(d[e]);
        this.qe(a);
        return b
    }
    ;
    function op(a) {
        var b = a.B
          , c = a.D
          , d = a.buffer;
        a = a.m;
        var e = (a ? 1 : 2) * b;
        b < Infinity && e < d.length && d.splice(0, d.length - e);
        if (!a) {
            b = c.now();
            c = 0;
            for (a = 1; a < d.length && d[a] <= b; a += 2)
                c = a;
            c && d.splice(0, c + 1)
        }
    }
    ;function pp(a, b) {
        b = b === void 0 ? qp : b;
        this.g = a;
        this.now = b
    }
    pp.prototype.J = function(a, b, c) {
        b = b === void 0 ? 0 : b;
        return (new this.g(this,a)).J(c, b)
    }
    ;
    var qp = mp.now;
    function rp() {
        var a = Error.call(this, "no elements in sequence");
        this.message = a.message;
        "stack"in a && (this.stack = a.stack);
        Object.setPrototypeOf(this, this.constructor.prototype);
        this.name = "EmptyError"
    }
    x(rp, Error);
    function sp(a) {
        return new Promise(function(b, c) {
            var d = new Ho({
                next: function(e) {
                    b(e);
                    d.unsubscribe()
                },
                error: c,
                complete: function() {
                    c(new rp)
                }
            });
            a.subscribe(d)
        }
        )
    }
    ;function S(a, b, c, d, e) {
        Fo.call(this, a);
        this.m = e;
        b && (this.td = function(f) {
            try {
                b(f)
            } catch (g) {
                this.destination.error(g)
            }
        }
        );
        c && (this.re = function(f) {
            try {
                c(f)
            } catch (g) {
                this.destination.error(g)
            }
            this.unsubscribe()
        }
        );
        d && (this.Jc = function() {
            try {
                d()
            } catch (f) {
                this.destination.error(f)
            }
            this.unsubscribe()
        }
        )
    }
    x(S, Fo);
    S.g = Fo.g;
    S.create = Fo.create;
    S.prototype.unsubscribe = function() {
        var a;
        this.closed || (a = this.m) != null && a.call(this);
        Fo.prototype.unsubscribe.call(this)
    }
    ;
    function tp(a) {
        return function(b) {
            if (M(b == null ? void 0 : b.Bb))
                return b.Bb(function(c) {
                    try {
                        return a(c, this)
                    } catch (d) {
                        this.error(d)
                    }
                });
            throw new TypeError("Unable to lift unknown Observable type");
        }
    }
    ;function up() {
        return tp(function(a, b) {
            var c = null;
            a.Kc++;
            var d = new S(b,void 0,void 0,void 0,function() {
                if (!a || a.Kc <= 0 || 0 < --a.Kc)
                    c = null;
                else {
                    var e = a.Kb
                      , f = c;
                    c = null;
                    !e || f && e !== f || e.unsubscribe();
                    b.unsubscribe()
                }
            }
            );
            a.subscribe(d);
            d.closed || (c = a.connect())
        })
    }
    ;function vp(a, b) {
        this.source = a;
        this.ef = b;
        this.g = null;
        this.Kc = 0;
        this.Kb = null
    }
    x(vp, O);
    vp.create = O.create;
    vp.prototype.Oa = function(a) {
        return wp(this).subscribe(a)
    }
    ;
    function wp(a) {
        var b = a.g;
        if (!b || b.g)
            a.g = a.ef();
        return a.g
    }
    vp.prototype.i = function() {
        this.Kc = 0;
        var a = this.Kb;
        this.g = this.Kb = null;
        a == null || a.unsubscribe()
    }
    ;
    vp.prototype.connect = function() {
        var a = this
          , b = this.Kb;
        if (!b) {
            b = this.Kb = new zo;
            var c = wp(this);
            b.add(this.source.subscribe(new S(c,void 0,function(d) {
                a.i();
                c.error(d)
            }
            ,function() {
                a.i();
                c.complete()
            }
            ,function() {
                return a.i()
            }
            )));
            b.closed && (this.Kb = null,
            b = zo.g)
        }
        return b
    }
    ;
    function xp() {
        var a = yp;
        var b = b === void 0 ? 0 : b;
        return tp(function(c, d) {
            d.add(a.J(function() {
                return c.subscribe(d)
            }, b))
        })
    }
    ;function T(a) {
        return tp(function(b, c) {
            var d = 0;
            b.subscribe(new S(c,function(e) {
                c.next(a.call(void 0, e, d++))
            }
            ))
        })
    }
    ;var zp = Array.isArray;
    function Ap(a) {
        return T(function(b) {
            return zp(b) ? a.apply(null, z(b)) : a(b)
        })
    }
    ;var Bp = Array.isArray
      , Cp = Object
      , Dp = Cp.getPrototypeOf
      , Ep = Cp.prototype
      , Fp = Cp.keys;
    function Gp(a) {
        if (a.length === 1) {
            var b = a[0];
            if (Bp(b))
                return {
                    args: b,
                    keys: null
                };
            if (b && typeof b === "object" && Dp(b) === Ep)
                return a = Fp(b),
                {
                    args: a.map(function(c) {
                        return b[c]
                    }),
                    keys: a
                }
        }
        return {
            args: a,
            keys: null
        }
    }
    ;function Hp() {
        var a = D.apply(0, arguments)
          , b = jp(a)
          , c = ip(a);
        a = Gp(a);
        var d = a.args
          , e = a.keys;
        if (d.length === 0)
            return $o([], b);
        b = new O(Ip(d, b, e ? function(f) {
            for (var g = {}, h = 0; h < f.length; h++)
                g[e[h]] = f[h];
            return g
        }
        : Jo));
        return c ? b.j(Ap(c)) : b
    }
    function Jp(a, b, c) {
        Fo.call(this, a);
        this.td = b;
        this.m = c
    }
    x(Jp, Fo);
    Jp.g = Fo.g;
    Jp.create = Fo.create;
    Jp.prototype.Jc = function() {
        this.m() ? Fo.prototype.Jc.call(this) : this.unsubscribe()
    }
    ;
    function Ip(a, b, c) {
        c = c === void 0 ? Jo : c;
        return function(d) {
            Kp(b, function() {
                for (var e = a.length, f = Array(e), g = e, h = a.map(function() {
                    return !1
                }), k = !0, l = {
                    ub: 0
                }; l.ub < e; l = {
                    ub: l.ub
                },
                l.ub++)
                    Kp(b, function(m) {
                        return function() {
                            $o(a[m.ub], b).subscribe(new Jp(d,function(q) {
                                f[m.ub] = q;
                                k && (h[m.ub] = !0,
                                k = !h.every(Jo));
                                k || d.next(c(f.slice()))
                            }
                            ,function() {
                                return --g === 0
                            }
                            ))
                        }
                    }(l), d)
            }, d)
        }
    }
    function Kp(a, b, c) {
        a ? c.add(a.J(b)) : b()
    }
    ;function Lp(a, b, c, d) {
        function e(l) {
            g++;
            ap(c(l, h++)).subscribe(new S(b,function(m) {
                b.next(m)
            }
            ,void 0,function() {
                g--;
                for (var m = {}; f.length && g < d; m = {
                    xe: void 0
                })
                    m.xe = f.shift(),
                    e(m.xe);
                !k || f.length || g || b.complete()
            }
            ))
        }
        var f = []
          , g = 0
          , h = 0
          , k = !1;
        a.subscribe(new S(b,function(l) {
            return g < d ? e(l) : f.push(l)
        }
        ,void 0,function() {
            k = !0;
            !k || f.length || g || b.complete()
        }
        ));
        return function() {
            f = null
        }
    }
    ;function Mp(a, b) {
        var c = c === void 0 ? Infinity : c;
        if (M(b))
            return Mp(function(d, e) {
                return T(function(f, g) {
                    return b(d, f, e, g)
                })(ap(a(d, e)))
            }, c);
        typeof b === "number" && (c = b);
        return tp(function(d, e) {
            return Lp(d, e, a, c)
        })
    }
    ;function Np(a) {
        a = a === void 0 ? Infinity : a;
        return Mp(Jo, a)
    }
    ;function Op() {
        var a = D.apply(0, arguments);
        return Np(1)(hp(a, jp(a)))
    }
    ;function Pp(a) {
        return new O(function(b) {
            ap(a()).subscribe(b)
        }
        )
    }
    ;var Qp = ["addListener", "removeListener"]
      , Rp = ["addEventListener", "removeEventListener"]
      , Sp = ["on", "off"];
    function Tp(a, b, c) {
        if (M(c)) {
            var d = c;
            c = void 0
        }
        if (d)
            return Tp(a, b, c).j(Ap(d));
        d = y(M(a.addEventListener) && M(a.removeEventListener) ? Rp.map(function(g) {
            return function(h) {
                return a[g](b, h, c)
            }
        }) : M(a.addListener) && M(a.removeListener) ? Qp.map(Up(a, b)) : M(a.Rh) && M(a.Eh) ? Sp.map(Up(a, b)) : []);
        var e = d.next().value
          , f = d.next().value;
        return !e && Xo(a) ? Mp(function(g) {
            return Tp(g, b, c)
        })(hp(a)) : new O(function(g) {
            function h() {
                var k = D.apply(0, arguments);
                return g.next(1 < k.length ? k : k[0])
            }
            if (!e)
                throw new TypeError("Invalid event target");
            e(h);
            return function() {
                return f(h)
            }
        }
        )
    }
    function Up(a, b) {
        return function(c) {
            return function(d) {
                return a[c](b, d)
            }
        }
    }
    ;function Vp() {
        zo.call(this)
    }
    x(Vp, zo);
    Vp.g = zo.g;
    Vp.prototype.J = function() {
        return this
    }
    ;
    function Wp(a, b) {
        return setInterval.apply(null, [a, b].concat(z(D.apply(2, arguments))))
    }
    ;function Xp(a, b) {
        zo.call(this);
        this.g = a;
        this.m = b;
        this.pending = !1
    }
    x(Xp, Vp);
    Xp.g = Vp.g;
    n = Xp.prototype;
    n.J = function(a, b) {
        b = b === void 0 ? 0 : b;
        if (this.closed)
            return this;
        this.state = a;
        a = this.id;
        var c = this.g;
        a != null && (this.id = dq(this, a, b));
        this.pending = !0;
        this.delay = b;
        this.id = this.id || this.Yd(c, this.id, b);
        return this
    }
    ;
    n.Yd = function(a, b, c) {
        c = c === void 0 ? 0 : c;
        return Wp(a.flush.bind(a, this), c)
    }
    ;
    function dq(a, b, c) {
        c = c === void 0 ? 0 : c;
        if (c != null && a.delay === c && a.pending === !1)
            return b;
        clearInterval(b)
    }
    n.execute = function(a, b) {
        if (this.closed)
            return Error("executing a cancelled action");
        this.pending = !1;
        if (a = this.se(a, b))
            return a;
        this.pending === !1 && this.id != null && (this.id = dq(this, this.id, null))
    }
    ;
    n.se = function(a) {
        var b = !1;
        try {
            this.m(a)
        } catch (d) {
            b = !0;
            var c = !!d && d || Error(d)
        }
        if (b)
            return this.unsubscribe(),
            c
    }
    ;
    n.unsubscribe = function() {
        if (!this.closed) {
            var a = this.id
              , b = this.g.actions;
            this.m = this.state = this.g = null;
            this.pending = !1;
            yo(b, this);
            a != null && (this.id = dq(this, a, null));
            this.delay = null;
            Vp.prototype.unsubscribe.call(this)
        }
    }
    ;
    function eq(a, b) {
        b = b === void 0 ? qp : b;
        pp.call(this, a, b);
        this.actions = [];
        this.active = !1
    }
    x(eq, pp);
    eq.prototype.flush = function(a) {
        var b = this.actions;
        if (this.active)
            b.push(a);
        else {
            var c;
            this.active = !0;
            do
                if (c = a.execute(a.state, a.delay))
                    break;
            while (a = b.shift());
            this.active = !1;
            if (c) {
                for (; a = b.shift(); )
                    a.unsubscribe();
                throw c;
            }
        }
    }
    ;
    function fq() {
        var a = D.apply(0, arguments)
          , b = jp(a);
        var c = typeof a[a.length - 1] === "number" ? a.pop() : Infinity;
        return a.length ? a.length === 1 ? ap(a[0]) : Np(c)(hp(a, b)) : Po
    }
    ;var gq = new O(Do);
    var hq = Array.isArray;
    function iq(a) {
        return a.length === 1 && hq(a[0]) ? a[0] : a
    }
    ;function jq() {
        var a = iq(D.apply(0, arguments));
        return tp(function(b, c) {
            function d() {
                if (!c.closed)
                    if (e.length > 0) {
                        try {
                            var f = ap(e.shift())
                        } catch (h) {
                            d();
                            return
                        }
                        var g = new S(c,void 0,Do,Do);
                        c.add(f.subscribe(g));
                        g.add(d)
                    } else
                        c.complete()
            }
            var e = [b].concat(z(a));
            d()
        })
    }
    ;function U(a) {
        return tp(function(b, c) {
            var d = 0;
            b.subscribe(new S(c,function(e) {
                return a.call(void 0, e, d++) && c.next(e)
            }
            ))
        })
    }
    ;function kq() {
        var a = D.apply(0, arguments);
        a = iq(a);
        return a.length === 1 ? ap(a[0]) : new O(lq(a))
    }
    function lq(a) {
        return function(b) {
            for (var c = [], d = {
                Qb: 0
            }; c && !b.closed && d.Qb < a.length; d = {
                Qb: d.Qb
            },
            d.Qb++)
                c.push(ap(a[d.Qb]).subscribe(new S(b,function(e) {
                    return function(f) {
                        if (c) {
                            for (var g = 0; g < c.length; g++)
                                g !== e.Qb && c[g].unsubscribe();
                            c = null
                        }
                        b.next(f)
                    }
                }(d))))
        }
    }
    ;function mq() {
        var a = D.apply(0, arguments)
          , b = ip(a)
          , c = iq(a);
        return c.length ? new O(function(d) {
            var e = c.map(function() {
                return []
            })
              , f = c.map(function() {
                return !1
            });
            d.add(function() {
                e = f = null
            });
            for (var g = {
                ib: 0
            }; !d.closed && g.ib < c.length; g = {
                ib: g.ib
            },
            g.ib++)
                ap(c[g.ib]).subscribe(new S(d,function(h) {
                    return function(k) {
                        e[h.ib].push(k);
                        e.every(function(l) {
                            return l.length
                        }) && (k = e.map(function(l) {
                            return l.shift()
                        }),
                        d.next(b ? b.apply(null, z(k)) : k),
                        e.some(function(l, m) {
                            return !l.length && f[m]
                        }) && d.complete())
                    }
                }(g),void 0,function(h) {
                    return function() {
                        f[h.ib] = !0;
                        !e[h.ib].length && d.complete()
                    }
                }(g)));
            return function() {
                e = f = null
            }
        }
        ) : Po
    }
    ;function nq(a, b) {
        Xp.call(this, a, b);
        this.g = a;
        this.m = b
    }
    x(nq, Xp);
    nq.g = Xp.g;
    nq.prototype.J = function(a, b) {
        b = b === void 0 ? 0 : b;
        if (b > 0)
            return Xp.prototype.J.call(this, a, b);
        this.delay = b;
        this.state = a;
        this.g.flush(this);
        return this
    }
    ;
    nq.prototype.execute = function(a, b) {
        return b > 0 || this.closed ? Xp.prototype.execute.call(this, a, b) : this.se(a, b)
    }
    ;
    nq.prototype.Yd = function(a, b, c) {
        c = c === void 0 ? 0 : c;
        return c != null && c > 0 || c == null && this.delay > 0 ? Xp.prototype.Yd.call(this, a, b, c) : a.flush(this)
    }
    ;
    function oq() {
        eq.apply(this, arguments)
    }
    x(oq, eq);
    var yp = new oq(nq);
    function pq() {
        this.M = new qo;
        this.A = new ro;
        this.g = Symbol();
        this.tc = new vo
    }
    pq.prototype.Jd = function() {
        return gq
    }
    ;
    function qq(a, b) {
        a.Ra !== null && a.Ra.next(b)
    }
    function rq(a) {
        if ((typeof a === "bigint" || typeof a === "number" || typeof a === "string") && typeof BigInt === "function")
            return BigInt(a)
    }
    da.Object.defineProperties(pq.prototype, {
        Fb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g
            }
        }
    });
    var sq = ["sessionStart", "sessionError", "sessionFinish"];
    function tq(a, b) {
        this.ma = a;
        this.kd = b;
        this.ready = !1;
        this.g = [];
        this.o = function() {}
        ;
        this.u = function() {}
        ;
        this.l = function() {}
        ;
        this.m = function() {}
        ;
        this.i = function() {}
    }
    function uq(a, b) {
        a.o = b
    }
    function vq(a, b) {
        a.u = b
    }
    function wq(a, b) {
        a.l = b
    }
    function xq(a, b) {
        a.m = b
    }
    function yq(a, b) {
        a.i = b;
        a.i(a.g.length)
    }
    function zq(a) {
        for (var b = y("geometryChange impression loaded start firstQuartile midpoint thirdQuartile complete pause resume bufferStart bufferFinish skipped volumeChange playerStateChange adUserInteraction".split(" ")), c = b.next(); !c.done; c = b.next())
            a.ma.addEventListener(c.value, function(d) {
                Aq(a, d)
            });
        Jn(a.ma, function(d) {
            d.type !== "sessionStart" && Aq(a, d)
        }, a.kd);
        Jn(a.ma, function(d) {
            d.type === "sessionStart" && (Aq(a, d),
            Bq(a),
            Cq(a))
        }, a.kd)
    }
    function Aq(a, b) {
        a.g.push(b);
        a.i(a.g.length);
        Cq(a)
    }
    function Cq(a) {
        if (a.ready)
            for (; a.g.length > 0; ) {
                var b = a.g.pop();
                b !== void 0 && (b.type === "geometryChange" ? a.l(b) : b.type === "impression" ? a.m(b) : sq.includes(b.type) ? a.o(b) : a.u(b));
                a.i(a.g.length)
            }
    }
    function Bq(a) {
        a.ready || (a.ready = !0,
        a.g.sort(function(b, c) {
            return c.timestamp - b.timestamp
        }))
    }
    ;function Dq(a) {
        return tp(function(b, c) {
            var d = null, e = !1, f;
            d = b.subscribe(new S(c,void 0,function(g) {
                f = ap(a(g, Dq(a)(b)));
                d ? (d.unsubscribe(),
                d = null,
                f.subscribe(c)) : e = !0
            }
            ));
            e && (d.unsubscribe(),
            d = null,
            f.subscribe(c))
        })
    }
    ;function Eq(a, b, c) {
        return function(d, e) {
            var f = c
              , g = b
              , h = 0;
            d.subscribe(new S(e,function(k) {
                var l = h++;
                g = f ? a(g, k, l) : (f = !0,
                k);
                e.next(g)
            }
            ,void 0,void 0))
        }
    }
    ;function Fq() {
        var a = D.apply(0, arguments)
          , b = ip(a);
        return b ? N(Fq.apply(null, z(a)), Ap(b)) : tp(function(c, d) {
            Ip([c].concat(z(iq(a))))(d)
        })
    }
    function Gq() {
        return Fq.apply(null, z(D.apply(0, arguments)))
    }
    ;function Hq(a) {
        a = a === void 0 ? null : a;
        return tp(function(b, c) {
            var d = !1;
            b.subscribe(new S(c,function(e) {
                d = !0;
                c.next(e)
            }
            ,void 0,function() {
                d || c.next(a);
                c.complete()
            }
            ))
        })
    }
    ;function Iq() {
        return tp(function(a, b) {
            a.subscribe(new S(b,Do))
        })
    }
    ;function Jq(a) {
        return tp(function(b, c) {
            b.subscribe(new S(c,function() {
                return c.next(a)
            }
            ))
        })
    }
    ;function Kq(a) {
        return a <= 0 ? function() {
            return Po
        }
        : tp(function(b, c) {
            var d = 0;
            b.subscribe(new S(c,function(e) {
                ++d <= a && (c.next(e),
                a <= d && c.complete())
            }
            ))
        })
    }
    ;function Lq(a) {
        return Mp(function(b, c) {
            return a(b, c).j(Kq(1), Jq(b))
        })
    }
    ;function Mq(a) {
        return tp(function(b, c) {
            var d = new Set;
            b.subscribe(new S(c,function(e) {
                var f = a ? a(e) : e;
                d.has(f) || (d.add(f),
                c.next(e))
            }
            ))
        })
    }
    ;function V(a) {
        var b = b === void 0 ? Jo : b;
        var c;
        a = (c = a) != null ? c : Nq;
        return tp(function(d, e) {
            var f, g = !0;
            d.subscribe(new S(e,function(h) {
                var k = b(h);
                if (g || !a(f, k))
                    g = !1,
                    f = k,
                    e.next(h)
            }
            ))
        })
    }
    function Nq(a, b) {
        return a === b
    }
    ;function Oq(a) {
        a = a === void 0 ? Pq : a;
        return tp(function(b, c) {
            var d = !1;
            b.subscribe(new S(c,function(e) {
                d = !0;
                c.next(e)
            }
            ,void 0,function() {
                return d ? c.complete() : c.error(a())
            }
            ))
        })
    }
    function Pq() {
        return new rp
    }
    ;function Qq() {
        var a = D.apply(0, arguments);
        return function(b) {
            return Op(b, kp.apply(null, z(a)))
        }
    }
    ;function Rq(a) {
        return tp(function(b, c) {
            var d = 0;
            b.subscribe(new S(c,function(e) {
                a.call(void 0, e, d++, b) || (c.next(!1),
                c.complete())
            }
            ,void 0,function() {
                c.next(!0);
                c.complete()
            }
            ))
        })
    }
    ;function Sq() {
        return tp(function(a, b) {
            var c = [];
            a.subscribe(new S(b,function(d) {
                c.push(d);
                1 < c.length && c.shift()
            }
            ,void 0,function() {
                for (var d = y(c), e = d.next(); !e.done; e = d.next())
                    b.next(e.value);
                b.complete()
            }
            ,function() {
                c = null
            }
            ))
        })
    }
    ;function Tq(a, b) {
        var c = arguments.length >= 2;
        return function(d) {
            return d.j(a ? U(function(e, f) {
                return a(e, f, d)
            }) : Jo, Sq(), c ? Hq(b) : Oq(function() {
                return new rp
            }))
        }
    }
    ;function Uq(a) {
        var b = M(a) ? a : function() {
            return a
        }
        ;
        return M() ? tp(function(c, d) {
            var e = b();
            (void 0)(e).subscribe(d).add(c.subscribe(e))
        }) : function(c) {
            var d = new vp(c,b);
            M(c == null ? void 0 : c.Bb) && (d.Bb = c.Bb);
            d.source = c;
            d.ef = b;
            return d
        }
    }
    ;function Vq() {
        return tp(function(a, b) {
            var c, d = !1;
            a.subscribe(new S(b,function(e) {
                var f = c;
                c = e;
                d && b.next([f, e]);
                d = !0
            }
            ))
        })
    }
    ;function Wq(a) {
        var b = new np(a,void 0,void 0);
        return function(c) {
            return Uq(function() {
                return b
            })(c)
        }
    }
    ;function Xq() {
        var a = a === void 0 ? Infinity : a;
        return a <= 0 ? function() {
            return Po
        }
        : tp(function(b, c) {
            function d() {
                var g = !1;
                f = b.subscribe(new S(c,void 0,void 0,function() {
                    ++e < a ? f ? (f.unsubscribe(),
                    f = null,
                    d()) : g = !0 : c.complete()
                }
                ));
                g && (f.unsubscribe(),
                f = null,
                d())
            }
            var e = 0, f;
            d()
        })
    }
    ;function Yq(a, b) {
        return tp(Eq(a, b, arguments.length >= 2))
    }
    ;function Zq() {
        var a = a || {};
        var b = a.Hf === void 0 ? function() {
            return new P
        }
        : a.Hf
          , c = a.Eg === void 0 ? !0 : a.Eg
          , d = a.Fg === void 0 ? !0 : a.Fg
          , e = a.Gg === void 0 ? !0 : a.Gg;
        return function(f) {
            function g() {
                h = k = null;
                m = q = !1
            }
            var h = null
              , k = null
              , l = 0
              , m = !1
              , q = !1;
            return tp(function(r, v) {
                l++;
                var t;
                k = (t = k) != null ? t : b();
                v.add(function() {
                    l--;
                    if (e && !l && !q && !m) {
                        var w = h;
                        g();
                        w == null || w.unsubscribe()
                    }
                });
                k.subscribe(v);
                !h && l > 0 && (h = new Ho({
                    next: function(w) {
                        return k.next(w)
                    },
                    error: function(w) {
                        q = !0;
                        var u = k;
                        d && g();
                        u.error(w)
                    },
                    complete: function() {
                        m = !0;
                        var w = k;
                        c && g();
                        w.complete()
                    }
                }),
                $o(r).subscribe(h))
            })(f)
        }
    }
    ;function $q(a) {
        return tp(function(b, c) {
            var d = !1
              , e = 0;
            b.subscribe(new S(c,function(f) {
                return (d || (d = !a(f, e++))) && c.next(f)
            }
            ))
        })
    }
    ;function W() {
        var a = D.apply(0, arguments)
          , b = jp(a);
        return tp(function(c, d) {
            (b ? Op(a, c, b) : Op(a, c)).subscribe(d)
        })
    }
    ;function X(a) {
        return tp(function(b, c) {
            var d = null
              , e = 0
              , f = !1;
            b.subscribe(new S(c,function(g) {
                var h;
                (h = d) == null || h.unsubscribe();
                h = e++;
                ap(a(g, h)).subscribe(d = new S(c,function(k) {
                    return c.next(k)
                }
                ,void 0,function() {
                    d = null;
                    f && !d && c.complete()
                }
                ))
            }
            ,void 0,function() {
                (f = !0,
                !d) && c.complete()
            }
            ))
        })
    }
    ;function ar(a, b) {
        b = b === void 0 ? !1 : b;
        return tp(function(c, d) {
            var e = 0;
            c.subscribe(new S(d,function(f) {
                var g = a(f, e++);
                (g || b) && d.next(f);
                !g && d.complete()
            }
            ))
        })
    }
    ;function br(a, b, c) {
        var d = M(a) || b || c ? {
            next: a,
            error: b,
            complete: c
        } : a;
        return d ? tp(function(e, f) {
            e.subscribe(new S(f,function(g) {
                var h;
                (h = d.next) == null || h.call(d, g);
                f.next(g)
            }
            ,function(g) {
                var h;
                (h = d.error) == null || h.call(d, g);
                f.error(g)
            }
            ,function() {
                var g;
                (g = d.complete) == null || g.call(d);
                f.complete()
            }
            ))
        }) : Jo
    }
    ;function cr() {
        var a = D.apply(0, arguments)
          , b = ip(a);
        return tp(function(c, d) {
            for (var e = a.length, f = Array(e), g = a.map(function() {
                return !1
            }), h = !1, k = {
                eb: 0
            }; k.eb < e; k = {
                eb: k.eb
            },
            k.eb++)
                ap(a[k.eb]).subscribe(new S(d,function(l) {
                    return function(m) {
                        f[l.eb] = m;
                        h || g[l.eb] || (g[l.eb] = !0,
                        (h = g.every(Jo)) && (g = null))
                    }
                }(k),void 0,Do));
            c.subscribe(new S(d,function(l) {
                h && (l = [l].concat(z(f)),
                d.next(b ? b.apply(null, z(l)) : l))
            }
            ))
        })
    }
    ;function dr(a) {
        this.ma = a
    }
    dr.prototype.T = function(a) {
        return (a == null ? 0 : a.lc) ? !0 : (a == null ? void 0 : a.ja) === "POST" || (a == null ? 0 : a.rb) || (a == null ? 0 : a.Sc) ? !1 : this.ma.T()
    }
    ;
    dr.prototype.ping = function() {
        var a = this
          , b = kp.apply(null, z(D.apply(0, arguments))).j(Mp(function(c) {
            return er(a, c)
        }), Rq(function(c) {
            return c
        }), Wq(1));
        b.connect();
        return b
    }
    ;
    function er(a, b) {
        var c = new np(1);
        Kn(a.ma, b, function() {
            c.next(!0);
            c.complete()
        }, function() {
            c.next(!1);
            c.complete()
        });
        return c
    }
    dr.prototype.dd = function(a, b, c) {
        this.ping.apply(this, z(D.apply(3, arguments)))
    }
    ;
    function fr(a, b) {
        var c = !1;
        return new O(function(d) {
            var e = a.setTimeout(function() {
                c = !0;
                d.next(!0);
                d.complete()
            }, b);
            return function() {
                c || a.clearTimeout(e)
            }
        }
        )
    }
    ;function gr(a, b) {
        b = Error.call(this, b ? a + ": " + b : String(a));
        this.message = b.message;
        "stack"in b && (this.stack = b.stack);
        this.code = a;
        this.__proto__ = gr.prototype;
        this.name = String(a)
    }
    x(gr, Error);
    function hr(a) {
        gr.call(this, 1E3, 'sfr:"' + a + '"');
        this.g = a;
        this.__proto__ = hr.prototype
    }
    x(hr, gr);
    function ir() {
        gr.call(this, 1003);
        this.__proto__ = ir.prototype
    }
    x(ir, gr);
    function jr() {
        gr.call(this, 1009);
        this.__proto__ = jr.prototype
    }
    x(jr, gr);
    function kr() {
        gr.call(this, 1011);
        this.__proto__ = kr.prototype
    }
    x(kr, gr);
    function lr() {
        gr.call(this, 1007);
        this.__proto__ = ir.prototype
    }
    x(lr, gr);
    function mr() {
        gr.call(this, 1008);
        this.__proto__ = ir.prototype
    }
    x(mr, gr);
    function nr() {
        gr.call(this, 1001);
        this.__proto__ = nr.prototype
    }
    x(nr, gr);
    function or(a) {
        gr.call(this, 1004, String(a));
        this.g = a;
        this.__proto__ = or.prototype
    }
    x(or, gr);
    function pr(a) {
        gr.call(this, 1010, a);
        this.__proto__ = qr.prototype
    }
    x(pr, gr);
    function qr(a) {
        gr.call(this, 1005, a);
        this.__proto__ = qr.prototype
    }
    x(qr, gr);
    var rr = Symbol("time-origin")
      , sr = Symbol("date");
    function tr(a, b) {
        this.value = a;
        this.timeline = b
    }
    function ur(a, b) {
        if (b.timeline !== a.timeline)
            throw new lr;
    }
    function vr(a, b) {
        ur(a, b);
        return a.value - b.value
    }
    n = tr.prototype;
    n.equals = function(a) {
        return vr(this, a) === 0
    }
    ;
    n.maximum = function(a) {
        ur(this, a);
        return this.value >= a.value ? this : a
    }
    ;
    n.round = function() {
        return new tr(Math.round(this.value),this.timeline)
    }
    ;
    n.add = function(a) {
        return new tr(this.value + a,this.timeline)
    }
    ;
    n.toString = function() {
        return String(this.value)
    }
    ;
    function wr(a) {
        this.ma = a;
        this.timeline = sr
    }
    n = wr.prototype;
    n.setTimeout = function(a, b) {
        return Number(this.ma.setTimeout(function() {
            return a()
        }, b))
    }
    ;
    n.clearTimeout = function(a) {
        this.ma.clearTimeout(a)
    }
    ;
    n.now = function() {
        return new tr(Date.now(),this.timeline)
    }
    ;
    n.interval = function(a, b) {
        var c = this.Ma(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    }
    ;
    n.Ma = function(a) {
        return fr(this, a).j(Xq(), Yq(function(b) {
            return b + 1
        }, -1))
    }
    ;
    n.ta = function() {
        return !0
    }
    ;
    function xr(a, b) {
        this.context = a;
        this.g = b
    }
    xr.prototype.T = function(a) {
        return this.g.T(a)
    }
    ;
    xr.prototype.O = function(a, b) {
        if (!this.T(b))
            throw new jr;
        return new yr(this.context,this.g,b != null ? b : void 0,a)
    }
    ;
    function yr(a, b, c, d) {
        var e = this;
        this.i = b;
        this.properties = c;
        this.url = d;
        this.g = !0;
        this.rb = new Map;
        this.body = void 0;
        var f;
        this.method = (f = c == null ? void 0 : c.ja) != null ? f : "GET";
        this.l = a.Jd().subscribe(function() {
            e.sendNow()
        })
    }
    yr.prototype.deactivate = function() {
        this.g = !1
    }
    ;
    yr.prototype.sendNow = function() {
        if (this.g)
            if (this.l.unsubscribe(),
            this.i.T(this.properties))
                try {
                    if (this.rb.size > 0 || this.body !== void 0) {
                        var a, b;
                        this.i.dd((a = this.properties) != null ? a : {}, this.rb, (b = this.body) != null ? b : "", this.url)
                    } else
                        this.i.ping(this.url);
                    this.g = !1
                } catch (c) {}
            else
                this.g = !1
    }
    ;
    function zr(a, b, c, d, e, f) {
        this.mode = a;
        this.C = b;
        this.l = c;
        this.g = d;
        this.o = e;
        this.m = f;
        this.i = !1;
        this.id = this.mode === 0 ? Ar(this) : 0
    }
    function Ar(a) {
        return a.C.setTimeout(function() {
            Br(a)
        }, a.g)
    }
    function Cr(a, b) {
        var c = vr(b, a.l);
        c >= a.g ? Br(a) : (a.l = b,
        a.g -= c)
    }
    function Br(a) {
        try {
            a.o(a.l.add(a.g))
        } finally {
            a.i = !0,
            a.m()
        }
    }
    zr.prototype.ke = function(a, b) {
        this.i || (this.mode === 1 && a === 1 ? Cr(this, b) : this.mode === 1 && a === 0 ? (this.mode = a,
        Cr(this, this.C.now()),
        this.i || (this.id = Ar(this))) : this.mode === 0 && a === 1 && (this.mode = a,
        this.clear(),
        Cr(this, b)))
    }
    ;
    zr.prototype.clear = function() {
        this.i || this.C.clearTimeout(this.id)
    }
    ;
    function Dr(a) {
        this.Tc = a;
        this.gg = this.mode = 0;
        this.Tb = {};
        this.timeline = a.timeline;
        this.Ab = a.now()
    }
    n = Dr.prototype;
    n.ke = function(a, b) {
        this.mode = a;
        ur(this.Ab, b);
        this.Ab = b;
        Object.values(this.Tb).forEach(function(c) {
            return void c.ke(a, b)
        })
    }
    ;
    n.now = function() {
        return this.mode === 1 ? this.Ab : this.Tc.now()
    }
    ;
    n.setTimeout = function(a, b) {
        var c = this
          , d = ++this.gg
          , e = this.mode === 1 ? this.Ab : this.Tc.now();
        this.Tb[d] = new zr(this.mode,this.Tc,e,b,function(f) {
            var g = c.Ab;
            c.mode === 1 && (c.Ab = f);
            a();
            c.Ab = g
        }
        ,function() {
            delete c.Tb[d]
        }
        );
        return d
    }
    ;
    n.clearTimeout = function(a) {
        this.Tb[a] && (this.Tb[a].clear(),
        delete this.Tb[a])
    }
    ;
    n.interval = function() {
        throw Error("'interval' is not supported for DualModeTimeProvider");
    }
    ;
    n.Ma = function() {
        throw Error("'intervalObservable' is not supported for DualModeTimeProvider");
    }
    ;
    n.ta = function() {
        return this.Tc.ta()
    }
    ;
    function Er(a, b) {
        var c = new Dr(a);
        a = b.subscribe(function(d) {
            c.ke(d.value ? 1 : 0, d.timestamp)
        });
        return {
            C: c,
            Dh: a
        }
    }
    ;function Fr(a) {
        var b = Object.assign({}, a);
        delete b.timestamp;
        return {
            timestamp: new tr(a.timestamp,sr),
            value: b
        }
    }
    ;function Gr(a) {
        return a !== void 0 && typeof a.x === "number" && typeof a.y === "number" && typeof a.width === "number" && typeof a.height === "number"
    }
    ;var Hr = pa(["https://www.googleadservices.com/pagead/managed/js/activeview/", "/reach_worklet.html"])
      , Ir = pa(["./reach_worklet.js"])
      , Jr = pa(["./reach_worklet.js"])
      , Kr = pa(["./reach_worklet.html"])
      , Lr = pa(["./reach_worklet.js"])
      , Mr = pa(["./reach_worklet.js"]);
    function Nr() {
        var a = {};
        return a[0] = Lc(Hr, "current"),
        a[1] = Lc(Ir),
        a[2] = Lc(Jr),
        a
    }
    Lc(Kr);
    Lc(Lr);
    Lc(Mr);
    function Or(a, b, c, d) {
        c = c === void 0 ? null : c;
        d = d === void 0 ? Nr() : d;
        pq.call(this);
        this.ma = a;
        this.kd = b;
        this.Ra = c;
        this.ee = d;
        this.gb = null;
        this.ae = new np(3);
        this.ae.j(U(function(e) {
            return e.value.type === "sessionStart"
        }));
        this.Ig = this.ae.j(U(function(e) {
            return e.value.type === "sessionFinish"
        }));
        this.Re = new np(1);
        this.Sg = new np;
        this.Me = new np(10);
        this.N = new xr(this,new dr(a));
        this.lg = this.ma.T();
        this.C = Pr(this, new wr(this.ma))
    }
    x(Or, pq);
    function Qr(a) {
        a.gb !== null && zq(a.gb)
    }
    Or.prototype.validate = function() {
        return this.lg
    }
    ;
    function Pr(a, b) {
        a.gb = new tq(a.ma,a.kd);
        var c = new np;
        uq(a.gb, function(f) {
            f = Fr(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.ae.next(f)
        });
        wq(a.gb, function(f) {
            if (f === void 0)
                var g = !1;
            else {
                g = f.data;
                var h;
                (h = g === void 0) || (h = g.viewport,
                h = h === void 0 || h !== void 0 && typeof h.width === "number" && typeof h.height === "number");
                h ? (g = g.adView,
                g = g !== void 0 && typeof g.percentageInView === "number" && (g.geometry === void 0 || Gr(g.geometry)) && (g.onScreenGeometry === void 0 || Gr(g.onScreenGeometry))) : g = !1
            }
            g ? (f = Fr(f),
            c.next({
                timestamp: f.timestamp,
                value: !0
            }),
            a.Me.next(f)) : .01 >= Math.random() && (f = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&name=invalid_geo&context=1092&msg=" + JSON.stringify(f),
            a.N.O(f).sendNow())
        });
        vq(a.gb, function(f) {
            f = Fr(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.Sg.next(f)
        });
        xq(a.gb, function(f) {
            f = Fr(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.Re.next(f)
        });
        var d = 0;
        yq(a.gb, function(f) {
            d += f;
            d > 0 && f === 0 && c.next({
                timestamp: a.C.now(),
                value: !1
            })
        });
        var e = c.j(ar(function(f) {
            return f.value
        }, !0));
        return Er(b, e).C
    }
    da.Object.defineProperties(Or.prototype, {
        global: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Rr
            }
        }
    });
    var Rr = {};
    function Sr(a) {
        try {
            var b = new In;
            return new Or(b,"doubleclickbygoogle.com-omid",void 0,a)
        } catch (c) {}
    }
    ;function Tr(a, b) {
        return function(c) {
            return new O(function(d) {
                return c.subscribe(function(e) {
                    a.bc(b, function() {
                        d.next(e)
                    })()
                }, function(e) {
                    a.bc(b, function() {
                        d.error(e)
                    })()
                }, function() {
                    a.bc(b, function() {
                        d.complete()
                    })()
                })
            }
            )
        }
    }
    ;function Ur() {
        for (var a = y(D.apply(0, arguments)), b = a.next(); !b.done; b = a.next())
            if (b = b.value,
            b.ta()) {
                this.C = b;
                return
            }
        this.C = new Vr
    }
    n = Ur.prototype;
    n.ta = function() {
        return this.C.ta()
    }
    ;
    n.now = function() {
        return this.C.now()
    }
    ;
    n.setTimeout = function(a, b) {
        return this.C.setTimeout(a, b)
    }
    ;
    n.clearTimeout = function(a) {
        this.C.clearTimeout(a)
    }
    ;
    n.interval = function(a, b) {
        var c = this.Ma(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    }
    ;
    n.Ma = function(a) {
        return this.C.Ma(a)
    }
    ;
    da.Object.defineProperties(Ur.prototype, {
        timeline: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.C.timeline
            }
        }
    });
    function Vr() {
        this.timeline = Symbol()
    }
    n = Vr.prototype;
    n.ta = function() {
        return !1
    }
    ;
    n.now = function() {
        return new tr(0,this.timeline)
    }
    ;
    n.setTimeout = function() {
        return 0
    }
    ;
    n.clearTimeout = function() {}
    ;
    n.interval = function() {
        return function() {}
    }
    ;
    n.Ma = function() {
        return gq
    }
    ;
    function Wr(a, b) {
        this.V = a;
        this.M = b
    }
    n = Wr.prototype;
    n.setTimeout = function(a, b) {
        return this.V.setTimeout(this.M.bc(734, a), b)
    }
    ;
    n.clearTimeout = function(a) {
        this.V.clearTimeout(a)
    }
    ;
    n.interval = function(a, b) {
        var c = this.Ma(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    }
    ;
    n.Ma = function(a) {
        var b = this;
        return new O(function(c) {
            var d = 0
              , e = b.V.setInterval(function() {
                c.next(d++)
            }, a);
            return function() {
                b.V.clearInterval(e)
            }
        }
        )
    }
    ;
    n.ta = function() {
        return !!this.V.clearTimeout && "setTimeout"in this.V && "setInterval"in this.V && !!this.V.clearInterval
    }
    ;
    function Xr(a, b) {
        Wr.call(this, a, b);
        this.timeline = sr
    }
    x(Xr, Wr);
    Xr.prototype.now = function() {
        return new tr(this.V.Date.now(),this.timeline)
    }
    ;
    Xr.prototype.ta = function() {
        return !!this.V.Date && !!this.V.Date.now && Wr.prototype.ta.call(this)
    }
    ;
    function Yr(a, b) {
        Wr.call(this, a, b);
        this.timeline = rr
    }
    x(Yr, Wr);
    Yr.prototype.now = function() {
        return new tr(this.V.performance.now(),this.timeline)
    }
    ;
    Yr.prototype.ta = function() {
        return !!this.V.performance && !!this.V.performance.now && Wr.prototype.ta.call(this)
    }
    ;
    function Zr(a) {
        var b = D.apply(1, arguments)
          , c = this;
        this.g = [];
        this.g.push(a);
        b.forEach(function(d) {
            c.g.push(d)
        })
    }
    Zr.prototype.T = function(a) {
        return this.g.some(function(b) {
            return b.T(a)
        })
    }
    ;
    Zr.prototype.O = function(a, b) {
        for (var c = 0; c < this.g.length; c++)
            if (this.g[c].T(b))
                return this.g[c].O(a, b);
        throw new jr;
    }
    ;
    function $r(a) {
        a = a.global;
        if (a.fetchLater)
            return a.fetchLater.bind(a)
    }
    function as(a) {
        this.context = a;
        if (bs === void 0)
            a: {
                var b, c, d = (b = a.global) == null ? void 0 : (c = b.document) == null ? void 0 : c.createElement("meta");
                if (d)
                    try {
                        d.httpEquiv = "origin-trial";
                        d.content = "AxjhRadLCARYRJawRjMjq4U8V8okQvSnrBIJWdMajuEkN3/DfVAcLcFhMVrUWnOXagwlI8dQD84FwJDGj9ohqAYAAABveyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJGZXRjaExhdGVyQVBJIiwiZXhwaXJ5IjoxNzI1NDA3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9";
                        a.global.document.head.append(d);
                        bs = d;
                        break a
                    } catch (e) {}
                bs = void 0
            }
    }
    var bs;
    as.prototype.T = function(a) {
        return $r(this.context) !== void 0 && !(a == null || !a.Fe) && !cs(this.context) && !(a == null ? 0 : a.lc) && !(a == null ? 0 : a.rb) && !(a == null ? 0 : a.Sc)
    }
    ;
    as.prototype.O = function(a, b) {
        if (!this.T(b))
            throw new jr;
        return new ds(this.context,a,b)
    }
    ;
    function ds(a, b, c) {
        this.context = a;
        this.properties = c;
        this.l = b;
        var d;
        this.ja = (d = c == null ? void 0 : c.ja) != null ? d : "GET";
        a = $r(this.context);
        if (a === void 0)
            throw Error();
        this.fetchLater = a;
        es(this, fs(this))
    }
    function es(a, b) {
        a.g && a.g.activated || (a.i = new AbortController,
        a.g = a.fetchLater(b, {
            method: a.ja,
            cache: "no-cache",
            mode: "no-cors",
            signal: a.i.signal,
            activateAfter: 96E4
        }))
    }
    function fs(a) {
        a = a.l;
        return (a.slice(-1)[0] === "&" ? a : a + "&") + "flapi=1"
    }
    ds.prototype.deactivate = function() {
        this.g && !this.g.activated && this.i && (this.i.abort(),
        this.g = void 0)
    }
    ;
    ds.prototype.sendNow = function() {}
    ;
    da.Object.defineProperties(ds.prototype, {
        url: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l
            },
            set: function(a) {
                this.l = a;
                a = fs(this);
                this.g && this.g.activated || !this.i || (this.i.abort(),
                this.g = void 0);
                es(this, a)
            }
        },
        method: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ja
            }
        }
    });
    function gs(a) {
        this.context = a
    }
    gs.prototype.T = function() {
        return !cs(this.context) && !!this.context.global.fetch
    }
    ;
    gs.prototype.ping = function() {
        var a = this;
        return fq.apply(null, z(D.apply(0, arguments).map(function(b) {
            return $o(a.context.global.fetch(b, {
                method: "GET",
                cache: "no-cache",
                keepalive: !0,
                mode: "no-cors"
            })).j(T(function(c) {
                return c.status === 200
            }))
        }))).j(Rq(function(b) {
            return b
        }), Tq())
    }
    ;
    gs.prototype.dd = function(a, b, c) {
        for (var d = D.apply(3, arguments), e = this, f = new Headers, g = y(b.entries()), h = g.next(); !h.done; h = g.next()) {
            var k = y(h.value);
            h = k.next().value;
            k = k.next().value;
            f.set(h, k)
        }
        var l, m = (l = a.keepAlive) != null ? l : !1;
        fq.apply(null, z(d.map(function(q) {
            return $o(e.context.global.fetch(q, Object.assign({}, {
                method: String(a.ja),
                cache: "no-cache"
            }, m ? {
                keepalive: !0
            } : {}, {
                mode: "no-cors",
                headers: f,
                body: c
            }))).j(T(function(r) {
                return r.status === 200
            }))
        }))).j(Rq(function(q) {
            return q
        }), Tq())
    }
    ;
    function hs(a) {
        this.context = a
    }
    hs.prototype.T = function(a) {
        return (a == null ? 0 : a.lc) || (a == null ? void 0 : a.ja) === "POST" || (a == null ? 0 : a.rb) || (a == null ? 0 : a.Sc) || (a == null ? 0 : a.keepAlive) ? !1 : !cs(this.context)
    }
    ;
    hs.prototype.ping = function() {
        var a = this;
        return kp(D.apply(0, arguments).map(function(b) {
            try {
                return Nd(a.context.global, b, !1, !1, !1),
                !0
            } catch (c) {
                return !1
            }
        }).every(function(b) {
            return b
        }))
    }
    ;
    hs.prototype.dd = function(a, b, c) {
        this.ping.apply(this, z(D.apply(3, arguments)))
    }
    ;
    function is(a) {
        a = a.global;
        if (a.PendingGetBeacon)
            return a.PendingGetBeacon
    }
    function js(a) {
        this.context = a
    }
    js.prototype.T = function(a) {
        return ks && !cs(this.context) && is(this.context) !== void 0 && !(a == null ? 0 : a.lc) && (a == null ? void 0 : a.ja) !== "POST" && !(a == null ? 0 : a.rb) && !(a == null ? 0 : a.Sc)
    }
    ;
    js.prototype.O = function(a, b) {
        if (!this.T(b))
            throw new jr;
        return new ls(this.context,a)
    }
    ;
    var ks = !1;
    function ls(a, b) {
        this.context = a;
        this.g = b;
        a = is(this.context);
        if (a === void 0)
            throw Error();
        this.i = new a(ms(this),{})
    }
    function ms(a) {
        a = a.g;
        return (a.slice(-1)[0] === "&" ? a : a + "&") + "pbapi=1"
    }
    ls.prototype.deactivate = function() {
        this.i.deactivate()
    }
    ;
    ls.prototype.sendNow = function() {
        this.i.sendNow()
    }
    ;
    da.Object.defineProperties(ls.prototype, {
        url: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g
            },
            set: function(a) {
                this.g = a;
                this.i.setURL(ms(this))
            }
        },
        method: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "GET"
            },
            set: function(a) {
                if (a !== "GET")
                    throw new jr;
            }
        }
    });
    function ns(a) {
        this.context = a
    }
    ns.prototype.T = function(a) {
        if ((a == null ? 0 : a.lc) || (a == null ? void 0 : a.ja) === "GET" || (a == null ? 0 : a.rb) || (a == null ? 0 : a.Sc) || (a == null ? 0 : a.keepAlive))
            return !1;
        var b;
        return !cs(this.context) && ((b = this.context.global.navigator) == null ? void 0 : b.sendBeacon) !== void 0
    }
    ;
    ns.prototype.ping = function() {
        var a = this;
        return kp(D.apply(0, arguments).map(function(b) {
            var c;
            return (c = a.context.global.navigator) == null ? void 0 : c.sendBeacon(b)
        }).every(function(b) {
            return b
        }))
    }
    ;
    ns.prototype.dd = function(a, b, c) {
        this.ping.apply(this, z(D.apply(3, arguments)))
    }
    ;
    function os(a) {
        var b = b === void 0 ? {} : b;
        if (typeof Event === "function")
            return new Event(a,b);
        if (typeof document !== "undefined") {
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent(a, b.bubbles || !1, b.cancelable || !1, b.detail);
            return c
        }
        throw Error();
    }
    ;function ps(a) {
        this.value = a;
        this.l = new P
    }
    function qs(a) {
        a.l.next();
        a.l.complete();
        a.value = void 0
    }
    da.Object.defineProperties(ps.prototype, {
        g: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.value
            }
        },
        i: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l
            }
        }
    });
    function rs(a, b, c) {
        if (a)
            for (var d = 0; a != null && d < 500 && !c(a); ++d)
                a = b(a)
    }
    function ss(a, b) {
        rs(a, function(c) {
            try {
                return c === c.parent ? null : c.parent
            } catch (d) {}
            return null
        }, b)
    }
    function ts(a, b) {
        if (a.tagName == "IFRAME")
            b(a);
        else {
            a = a.querySelectorAll("IFRAME");
            for (var c = 0; c < a.length && !b(a[c]); ++c)
                ;
        }
    }
    function us(a) {
        return (a = a.ownerDocument) && (a.parentWindow || a.defaultView) || null
    }
    function vs(a, b, c) {
        try {
            var d = JSON.parse(c.data)
        } catch (g) {}
        if (typeof d === "object" && d && d.type === "creativeLoad") {
            var e = us(a);
            if (c.source && e) {
                var f;
                ss(c.source, function(g) {
                    try {
                        if (g.parent === e)
                            return f = g,
                            !0
                    } catch (h) {}
                });
                f && ts(a, function(g) {
                    if (g.contentWindow === f)
                        return b(d),
                        !0
                })
            }
        }
    }
    function ws(a) {
        return typeof a === "string" ? document.getElementById(a) : a
    }
    function xs(a, b) {
        var c = ws(a);
        if (c)
            if (c.onCreativeLoad)
                c.onCreativeLoad(b);
            else {
                var d = b ? [b] : []
                  , e = function(f) {
                    for (var g = 0; g < d.length; ++g)
                        try {
                            d[g](1, f)
                        } catch (h) {}
                    d = {
                        push: function(h) {
                            h(1, f)
                        }
                    }
                };
                c.onCreativeLoad = function(f) {
                    d.push(f)
                }
                ;
                c.setAttribute("data-creative-load-listener", "");
                c.addEventListener("creativeLoad", function(f) {
                    e(f.detail)
                });
                Ia.addEventListener("message", function(f) {
                    vs(c, e, f)
                })
            }
    }
    ;function ys(a, b) {
        var c = this;
        this.global = a;
        this.g = b;
        this.l = this.document ? fq(kp(!0), Tp(this.document, "visibilitychange")).j(Tr(this.g.M, 748), T(function() {
            return c.document ? c.document.visibilityState : "visible"
        }), V()) : kp("visible");
        this.i = this.document ? Tp(this.document, "DOMContentLoaded").j(Tr(this.g.M, 739), Kq(1)) : kp(os("DOMContentLoaded"))
    }
    function zs(a) {
        return a.document ? a.document.readyState : "complete"
    }
    function As(a) {
        return a.document !== null && a.document.visibilityState !== void 0
    }
    ys.prototype.querySelector = function(a) {
        return this.document ? this.document.querySelector(a) : null
    }
    ;
    ys.prototype.querySelectorAll = function(a) {
        return this.document ? cb(this.document.querySelectorAll(a)) : []
    }
    ;
    function Bs(a, b, c) {
        function d() {
            e.next(b)
        }
        c = c === void 0 ? !1 : c;
        if (b.g === void 0 || !a.document)
            return kp(b).j(Tr(a.g.M, 749));
        var e = new np(1);
        c || xs(b.g, d);
        xm(b.g, d, sm());
        return e.j(Tr(a.g.M, 749), Kq(1))
    }
    function Cs(a, b) {
        a = a.document;
        if (!a)
            return kp(!1);
        var c = fq(kp(null), Tp(a, "DOMContentLoaded", {
            once: !0
        }), Tp(a, "load", {
            once: !0
        }))
          , d = new ps({
            document: a,
            element: b
        });
        return c.j(T(function() {
            if (!d.g)
                return !1;
            var e = d.g
              , f = e.document;
            e = e.element;
            var g, h, k = (h = (g = f.body) != null ? g : f.children[0]) != null ? h : f;
            try {
                k.appendChild(e),
                qs(d)
            } catch (l) {}
            return !d.g
        }), U(function(e) {
            return e
        }), Kq(1), Hq(!1), br({
            complete: function() {
                return void qs(d)
            }
        }))
    }
    function Ds(a, b, c) {
        var d, e, f;
        return Da(function(g) {
            if (g.g == 1) {
                d = a.global.document.createElement("iframe");
                e = new Promise(function(k) {
                    d.onload = k;
                    d.onerror = k
                }
                );
                if (b instanceof lc)
                    var h = b.g;
                else
                    throw Error("");
                d.src = h.toString();
                return g.i(sp(Cs(a, d)), 2)
            }
            if (g.g != 3) {
                if (!g.l)
                    return g.return();
                d.style.display = "none";
                return g.i(e, 3)
            }
            f = d.contentWindow;
            if (!f)
                return g.return();
            f.postMessage(c, "*");
            return g.return(d)
        })
    }
    da.Object.defineProperties(ys.prototype, {
        document: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Bc(this.global, "document") ? this.global.document || null : null
            }
        }
    });
    function Es(a) {
        return function(b) {
            return b.j(Fs(a, Uq(new P)))
        }
    }
    function Y(a, b) {
        return function(c) {
            return c.j(Fs(a, Wq(b)))
        }
    }
    function Fs(a, b) {
        function c(d) {
            return new O(function(e) {
                return d.subscribe(function(f) {
                    so(a, function() {
                        return void e.next(f)
                    }, 3)
                }, function(f) {
                    so(a, function() {
                        return void e.error(f)
                    }, 3)
                }, function() {
                    so(a, function() {
                        return void e.complete()
                    }, 3)
                })
            }
            )
        }
        return N(c, xp(), b, up(), c)
    }
    ;var Gs = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };
    function Hs(a, b) {
        return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height
    }
    function Is(a, b) {
        return {
            left: Math.max(a.left, b.left),
            top: Math.max(a.top, b.top),
            width: Math.max(0, Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left)),
            height: Math.max(0, Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top))
        }
    }
    function Js(a, b) {
        return {
            left: Math.round(a.left + b.x),
            top: Math.round(a.top + b.y),
            width: a.width,
            height: a.height
        }
    }
    ;function Gg(a) {
        this.F = eg(a, void 0, void 0, 2048)
    }
    x(Gg, Uh);
    Gg.prototype.Oe = function() {
        return Lg(this)
    }
    ;
    function Ks(a) {
        this.F = eg(a, void 0, void 0, 2048)
    }
    x(Ks, Uh);
    function Ls(a, b) {
        return Pg(a, 2, b)
    }
    function Ms(a, b) {
        return Pg(a, 3, b)
    }
    function Ns(a, b) {
        return Pg(a, 4, b)
    }
    function Os(a, b) {
        return Pg(a, 5, b)
    }
    function Ps(a, b) {
        return Pg(a, 9, b)
    }
    function Qs(a, b) {
        lg(a);
        var c = a.F
          , d = c[K] | 0;
        if (b == null)
            qg(c, d, 10);
        else {
            for (var e = b === Ke ? 7 : b[K] | 0, f = e, g = yg(e), h = g || Object.isFrozen(b), k = !0, l = !0, m = 0; m < b.length; m++) {
                var q = b[m];
                g || (q = Pe(q),
                k && (k = !q),
                l && (l = q))
            }
            g || (e = k ? 13 : 5,
            e = l ? e & -4097 : e | 4096);
            h && e === f || (b = tf(b),
            f = 0,
            e = wg(e, d));
            e !== f && Me(b, e);
            d = qg(c, d, 10, b);
            2 & e || !(4096 & e || 16 & e) || mg(c, d)
        }
        return a
    }
    function Rs(a, b) {
        return Mg(a, 11, b)
    }
    function Ss(a, b) {
        return Pg(a, 1, b)
    }
    function Ts(a, b) {
        return Mg(a, 7, b)
    }
    ;var Us = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function Vs(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }
    function Ws(a) {
        var b, c;
        return typeof ((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }
    function Xs(a) {
        if (!Ws(a))
            return null;
        var b = Vs(a);
        if (b.uach_promise)
            return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Us).then(function(c) {
            b.uach != null || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }
    function Ys(a) {
        var b;
        return Rs(Qs(Os(Ls(Ss(Ns(Ts(Ps(Ms(new Ks, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), ((b = a.fullVersionList) == null ? void 0 : b.map(function(c) {
            var d = new Gg;
            d = Pg(d, 1, c.brand);
            return Pg(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }
    function Zs(a) {
        var b, c;
        return (c = (b = Xs(a)) == null ? void 0 : b.then(function(d) {
            return Ys(d)
        })) != null ? c : null
    }
    ;function $s(a, b, c, d) {
        a = a === void 0 ? window : a;
        b = b === void 0 ? null : b;
        c = c === void 0 ? new qo : c;
        d = d === void 0 ? Nr() : d;
        pq.call(this);
        var e = this;
        this.global = a;
        this.Ra = b;
        this.M = c;
        this.ee = d;
        this.zg = Pp(function() {
            return Tp(e.global, "pagehide")
        }).j(Tr(this.M, 941));
        this.af = Pp(function() {
            return Tp(e.global, "load")
        }).j(Tr(this.M, 738), Kq(1));
        this.Ag = Pp(function() {
            return Tp(e.global, "resize")
        }).j(Tr(this.M, 741));
        this.onMessage = Pp(function() {
            return Tp(e.global, "message")
        }).j(Tr(this.M, 740));
        this.document = new ys(this.global,this);
        this.C = new Ur(new Yr(this.V,this.M),new Xr(this.V,this.M));
        this.N = new Zr(new as(this),new js(this),new xr(this,new gs(this)),new xr(this,new ns(this)),new xr(this,new hs(this)))
    }
    x($s, pq);
    function at(a) {
        try {
            return !!a.global.sharedStorage
        } catch (b) {
            return b
        }
    }
    function bt(a) {
        try {
            return !!a.global.localStorage
        } catch (b) {
            return !1
        }
    }
    function cs(a) {
        var b = a.global;
        return !!a.global.HTMLFencedFrameElement && !!b.fence && typeof b.fence.reportEvent === "function"
    }
    n = $s.prototype;
    n.Wb = function(a) {
        cs(this) && this.global.fence.reportEvent(a)
    }
    ;
    n.Jd = function() {
        return this.zg.j(Tr(this.M, 942), Y(this.A, 1), T(function() {}))
    }
    ;
    function ct(a) {
        var b = new $s(a.global.top,a.Ra);
        b.N = a.N;
        return b
    }
    function dt(a, b) {
        b.start();
        return Tp(b, "message").j(Tr(a.M, 740))
    }
    n.postMessage = function(a, b, c) {
        c = c === void 0 ? [] : c;
        this.global.postMessage(a, b, c)
    }
    ;
    n.bb = function() {
        return sd(this.global) ? this.global.width : 0
    }
    ;
    n.Za = function() {
        return sd(this.global) ? this.global.height : 0
    }
    ;
    function et(a, b) {
        try {
            var c = Sj(b, a.global, vd() || ud());
            return {
                left: c.left,
                top: c.top,
                width: c.bb(),
                height: c.Za()
            }
        } catch (d) {
            return Gs
        }
    }
    n.validate = function() {
        var a = this.N.T() || cs(this);
        return this.global && this.C.ta() && a
    }
    ;
    function ft(a) {
        return (a = Zs(a.global)) ? $o(a) : null
    }
    da.Object.defineProperties($s.prototype, {
        sharedStorage: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                try {
                    return this.global.sharedStorage
                } catch (a) {}
            }
        },
        localStorage: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                try {
                    return this.global.localStorage
                } catch (a) {}
            }
        },
        V: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return window
            }
        },
        Rb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !sd(this.global.top)
            }
        },
        Ld: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Rb || this.global.top !== this.global
            }
        },
        scrollY: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.global.scrollY
            }
        },
        MutationObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.V.MutationObserver
            }
        },
        ResizeObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.V.ResizeObserver
            }
        },
        Ff: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "vu"in this.global || "vv"in this.global
            }
        }
    });
    function gt(a) {
        this.children = a;
        this.o = !1;
        this.l = []
    }
    gt.prototype.complete = function() {
        var a = this;
        this.o = !0;
        this.l.forEach(function(b) {
            return void b(a)
        });
        this.l.splice(0)
    }
    ;
    function ht(a, b) {
        a.o ? b(a) : a.l.push(b)
    }
    gt.prototype.pb = function(a) {
        var b = this.children.map(function(c) {
            return c.pb(a)
        });
        return b.find(function(c) {
            return c !== 2
        }) === void 0 ? 2 : this.g ? 0 : b.some(function(c) {
            return c === 1
        }) ? 1 : 0
    }
    ;
    da.Object.defineProperties(gt.prototype, {
        g: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.o
            }
        }
    });
    function jt() {
        var a = D.apply(0, arguments);
        gt.call(this, a);
        var b = this;
        this.events = a;
        var c = this.events.length;
        this.events.forEach(function(d) {
            ht(d, function() {
                --c === 0 && b.complete()
            })
        })
    }
    x(jt, gt);
    jt.prototype.clone = function() {
        return new (Function.prototype.bind.apply(jt, [null].concat(z(this.events.map(function(a) {
            return a.clone()
        })))))
    }
    ;
    jt.prototype.u = function(a, b) {
        var c = this;
        if (!this.g) {
            var d = this.events.find(function(e) {
                return e.pb(a) === 1
            });
            d !== void 0 && d.u(a, function() {
                c.g || b()
            })
        }
    }
    ;
    function kt(a, b) {
        gt.call(this, []);
        this.m = a;
        this.i = Symbol(b);
        this.B = a
    }
    x(kt, gt);
    kt.prototype.clone = function() {
        var a = new kt(this.B,this.i.description);
        a.i = this.i;
        return a
    }
    ;
    kt.prototype.pb = function(a) {
        return a !== this.event ? 2 : this.g || this.m === 0 ? 0 : 1
    }
    ;
    kt.prototype.u = function(a, b) {
        this.pb(a) === 1 && (this.m--,
        b(),
        this.m === 0 && this.complete())
    }
    ;
    da.Object.defineProperties(kt.prototype, {
        event: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.i
            }
        }
    });
    function lt(a) {
        kt.call(this, 1, a)
    }
    x(lt, kt);
    function mt(a) {
        var b = this;
        this.g = !1;
        this.l = [];
        this.i = [];
        a(function(c) {
            b.g = !0;
            b.resolution = c;
            nt(b)
        }, function(c) {
            b.m = c;
            nt(b)
        })
    }
    function ot(a) {
        return new mt(function(b, c) {
            var d = []
              , e = 0;
            a.forEach(function(f, g) {
                pt(f.then(function(h) {
                    d[g] = h;
                    ++e === a.length && b(d)
                }), function(h) {
                    c(h)
                })
            })
        }
        )
    }
    function nt(a) {
        var b = a.resolution
          , c = a.m;
        if (c !== void 0 || a.g)
            a.g && a.l.forEach(function(d) {
                return void d(b)
            }),
            c !== void 0 && a.i.forEach(function(d) {
                return void d(c)
            }),
            a.l = [],
            a.i = []
    }
    mt.prototype.then = function(a) {
        this.l.push(a);
        nt(this);
        return this
    }
    ;
    function pt(a, b) {
        a.i.push(b);
        nt(a)
    }
    ;function qt(a, b, c) {
        var d = D.apply(3, arguments);
        this.g = a;
        this.o = b;
        this.m = c;
        this.l = new Set;
        this.i = d;
        if (this.g.L)
            this.context = this.g.L;
        else if (this.g.na)
            this.context = this.g.na;
        else
            throw Error("Mediator requires a Web or OMID context.");
        var e = d.reduce(function(h, k) {
            k.subscribedEvents.forEach(function(l) {
                return void h.add(l)
            });
            return h
        }, new Set);
        e = y(e.values());
        for (var f = e.next(), g = {}; !f.done; g = {
            Ie: void 0
        },
        f = e.next()) {
            g.Ie = f.value;
            f = d.filter(function(h) {
                return function(k) {
                    return k.controlledEvents.indexOf(h.Ie) >= 0
                }
            }(g));
            if (f.length === 0)
                throw Error("Event missing corresponding producing colleague.");
            if (f.length > 1)
                throw Error("Event has one too many producers.");
        }
    }
    qt.prototype.start = function() {
        var a = this;
        this.i.forEach(function(b) {
            return void b.start(a.g)
        });
        this.m.start(this.g, this.u.bind(this), this.Ob.bind(this), function() {})
    }
    ;
    qt.prototype.dispose = function() {
        var a = this;
        this.m.dispose();
        this.l.forEach(function(b) {
            return void a.Ob(b)
        });
        this.i.forEach(function(b) {
            return void b.dispose()
        })
    }
    ;
    function rt(a, b) {
        b = {
            measuringCreativeIds: [].concat(z(a.l.values())).map(function(c) {
                return wo(a.context.tc, c)
            }),
            hasCreativeSourceCompleted: !!a.m.ed,
            colleagues: a.i.map(function(c) {
                return {
                    name: c.name,
                    controlledEvents: c.controlledEvents.map(function(d) {
                        var e;
                        return (e = d.description) != null ? e : "n/a"
                    }),
                    subscribedEvents: c.subscribedEvents.map(function(d) {
                        var e;
                        return (e = d.description) != null ? e : "n/a"
                    })
                }
            }),
            ephemeralCreativeStateChanges: b
        };
        b = {
            specMajor: 2,
            specMinor: 0,
            specPatch: 0,
            instanceId: wo(a.context.tc, a.context.Fb),
            timestamp: vr(a.context.C.now(), new tr(0,a.context.C.timeline)),
            mediatorState: b
        };
        qq(a.context, b)
    }
    function st(a, b, c, d, e) {
        var f = {};
        rt(a, (f[b] = {
            events: [{
                timestamp: c,
                description: d,
                status: e
            }]
        },
        f))
    }
    qt.prototype.u = function(a, b, c) {
        var d = this;
        if (!this.l.has(a)) {
            var e = this.o.clone();
            this.l.add(a);
            rt(this, {});
            var f = !1
              , g = [];
            this.i.forEach(function(h) {
                function k(l, m, q) {
                    var r = wo(d.context.tc, a), v = vr(d.context.C.now(), new tr(0,d.context.C.timeline)), t, w = (t = l.description) != null ? t : "n/a";
                    if (h.controlledEvents.indexOf(l) < 0 || e.pb(l) !== 1)
                        return q(!1),
                        st(d, r, v, w, 1),
                        new mt(function(C) {
                            return void C()
                        }
                        );
                    var u = new mt(function(C) {
                        e.u(l, function() {
                            d.i.filter(function(R) {
                                return R.subscribedEvents.indexOf(l) >= 0
                            }).forEach(function(R) {
                                return void R.handleEvent(a, l, m)
                            });
                            C()
                        })
                    }
                    );
                    return new mt(function(C) {
                        u.then(function() {
                            q(!0);
                            st(d, r, v, w, 2);
                            C()
                        })
                    }
                    )
                }
                h.Kd(a, b, c, function(l, m, q) {
                    return f ? k(l, m, q) : new mt(function(r) {
                        g.push(function() {
                            k(l, m, q).then(function() {
                                r()
                            })
                        })
                    }
                    )
                }, function(l) {
                    try {
                        d.context.N.O("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=colleague-executed&name=" + l, {
                            ja: "GET"
                        }).sendNow()
                    } catch (m) {}
                })
            });
            f = !0;
            g.forEach(function(h) {
                return void h()
            })
        }
    }
    ;
    qt.prototype.Ob = function(a) {
        this.l.delete(a);
        this.i.forEach(function(b) {
            b.Ob(a)
        });
        rt(this, {})
    }
    ;
    var tt = {}
      , ut = (tt["data-google-av-cxn"] = "_avicxn_",
    tt["data-google-av-cpmav"] = "_cvu_",
    tt["data-google-av-metadata"] = "_avm_",
    tt["data-google-av-adk"] = "_adk_",
    tt["data-google-av-btr"] = void 0,
    tt["data-google-av-override"] = void 0,
    tt["data-google-av-dm"] = void 0,
    tt["data-google-av-immediate"] = void 0,
    tt["data-google-av-aid"] = void 0,
    tt["data-google-av-naid"] = void 0,
    tt["data-google-av-inapp"] = void 0,
    tt["data-google-av-slift"] = void 0,
    tt["data-google-av-itpl"] = void 0,
    tt["data-google-av-ext-cxn"] = void 0,
    tt["data-google-av-rs"] = void 0,
    tt["data-google-av-flags"] = void 0,
    tt["data-google-av-turtlex"] = void 0,
    tt["data-google-av-ufs-integrator-metadata"] = void 0,
    tt["data-google-av-vattr"] = void 0,
    tt["data-google-av-vrus"] = void 0,
    tt)
      , vt = {}
      , wt = (vt["data-google-av-adk"] = "googleAvAdk",
    vt["data-google-av-btr"] = "googleAvBtr",
    vt["data-google-av-cpmav"] = "googleAvCpmav",
    vt["data-google-av-dm"] = "googleAvDm",
    vt["data-google-av-ext-cxn"] = "googleAvExtCxn",
    vt["data-google-av-immediate"] = "googleAvImmediate",
    vt["data-google-av-inapp"] = "googleAvInapp",
    vt["data-google-av-itpl"] = "googleAvItpl",
    vt["data-google-av-metadata"] = "googleAvMetadata",
    vt["data-google-av-naid"] = "googleAvNaid",
    vt["data-google-av-override"] = "googleAvOverride",
    vt["data-google-av-rs"] = "googleAvRs",
    vt["data-google-av-slift"] = "googleAvSlift",
    vt["data-google-av-cxn"] = "googleAvCxn",
    vt["data-google-av-aid"] = void 0,
    vt["data-google-av-flags"] = "googleAvFlags",
    vt["data-google-av-turtlex"] = "googleAvTurtlex",
    vt["data-google-av-ufs-integrator-metadata"] = "googleAvUfsIntegratorMetadata",
    vt["data-google-av-vattr"] = "googleAvVattr",
    vt["data-google-av-vrus"] = "googleAvVurs",
    vt);
    function xt(a, b) {
        if (a.g === void 0)
            return null;
        try {
            var c;
            var d = (c = a.g.getAttribute(b)) != null ? c : null;
            if (d !== null)
                return d
        } catch (g) {}
        try {
            var e = ut[b];
            if (e && (d = a.g[e],
            d !== void 0))
                return d
        } catch (g) {}
        try {
            var f = wt[b];
            if (f)
                return Hc(a.g, f)
        } catch (g) {}
        return null
    }
    function yt(a) {
        return T(function(b) {
            return xt(b, a)
        })
    }
    ;var zt = N(function(a) {
        return T(function(b) {
            return a.map(function(c) {
                return xt(b, c)
            })
        })
    }(["data-google-av-cxn", "data-google-av-turtlex"]), T(function(a) {
        var b = y(a);
        a = b.next().value;
        b = b.next().value;
        if (!a) {
            if (b !== null)
                return [];
            throw new nr;
        }
        return a.split("|")
    }));
    function At() {
        return N(Mp(function(a) {
            return a.element.j(zt, Dq(function() {
                return kp([""])
            })).j(T(function(b) {
                return {
                    wa: b,
                    Qc: a
                }
            }))
        }), Mq(function(a) {
            return a.wa.sort().join(";")
        }), T(function(a) {
            return a.Qc
        }))
    }
    ;function Z(a) {
        this.value = a
    }
    function Bt(a, b) {
        return kp(a.value).j(Y(b, 1))
    }
    var Ct = new Z(!1);
    function Dt() {
        return Mp(function(a) {
            return $o(Et(a)).j(Es(a.A))
        })
    }
    function Et(a) {
        return a.document.querySelectorAll(".GoogleActiveViewElement,.GoogleActiveViewClass").map(function(b) {
            return new ps(b)
        })
    }
    ;function Ft(a) {
        var b = a.af
          , c = a.document.i;
        return fq(kp({}), c, b).j(T(function() {
            return a
        }))
    }
    ;function Gt() {
        return N(U(function(a) {
            return a !== void 0
        }), T(function(a) {
            return a
        }))
    }
    ;function Ht() {
        return function(a) {
            var b = [];
            return a.j(U(function(c) {
                if (c.g === void 0 || b.some(function(d) {
                    return d.g === c.g
                }))
                    return !1;
                b.push(c);
                return !0
            }))
        }
    }
    ;function It(a, b) {
        b = b === void 0 ? Po : b;
        return fq(Ft(a), b).j(Dt(), Ht(), Gt(), Y(a.A, 1))
    }
    ;function Jt(a) {
        a = a.global;
        if (typeof a.__google_lidar_ === "undefined")
            return a.__google_lidar_ = 1,
            !1;
        a.__google_lidar_ = Number(a.__google_lidar_) + 1;
        var b = a.__google_lidar_adblocks_count_;
        if (typeof b === "number" && b > 0 && (a = a.__google_lidar_radf_,
        typeof a === "function"))
            try {
                a()
            } catch (c) {}
        return !0
    }
    function Kt(a) {
        var b = a.global;
        b.osdlfm = function() {
            return b.__google_lidar_radf_
        }
        ;
        if (b.__google_lidar_radf_ !== void 0)
            return Po;
        b.__google_lidar_adblocks_count_ = 1;
        var c = new P;
        b.__google_lidar_radf_ = function() {
            return void c.next(a)
        }
        ;
        return c.j(Tr(a.M, 743))
    }
    ;var Lt = {
        considerOmidZOrderOcclusions: [Pm, !1],
        extraPings: [Qm, 0],
        extrapolators: [Rm, !1],
        rxlidarStatefulBeacons: [Xm, !1],
        shouldIgnoreAdChoicesIcon: [$m, !1],
        dedicatedViewableAttributionPing: [new Nm("45389692"), 0],
        useReachIntegrationPolyfill: [cn, !1],
        useReachIntegrationSharedStorage: [dn, !0],
        sendBrowserIdInsteadOfVPID: [Ym, !1],
        waitForImpressionColleague: [en, !1],
        fetchLaterBeacons: [Sm, !1],
        rxInNonrx: [Wm, !1],
        addQueryIdToErrorPing: [Om, !1],
        shouldSendExplicitDisplayMeasurablePing: [an, !1],
        reachUseCreateWorklet: [Vm, !1],
        tosCustomTimeoutMillis: [bn, 36E5],
        shouldCacheTimeMetricsInLocalStorage: [Zm, !0],
        omakaseAdStatsResetVersion: [Um, 1]
    };
    function Mt(a) {
        return Object.entries(Lt).reduce(function(b, c) {
            var d = y(c);
            c = d.next().value;
            var e = y(d.next().value);
            d = e.next().value;
            e = e.next().value;
            var f;
            b[c] = (f = a == null ? void 0 : dj(a, d)) != null ? f : e;
            return b
        }, {})
    }
    ;function Dg(a) {
        this.F = eg(a, void 0, void 0, 2048)
    }
    x(Dg, Uh);
    function Nt(a) {
        return Pf(ng(a, 3))
    }
    function Ot(a) {
        return Af(ng(a, 5))
    }
    function Pt(a) {
        return Jg(a, 7)
    }
    ;var Qt = [0, Qi, -2, Pi, -1, Li, Pi];
    function Rt(a) {
        this.F = eg(a, void 0, void 0, 2048)
    }
    x(Rt, Uh);
    var St = Yi(Rt);
    function Tt(a) {
        this.F = eg(a, void 0, void 0, 2048)
    }
    x(Tt, Uh);
    var Ut = [0, Ri, -4, Ti, Pi, Li, Gi, Ri, Gi, Ri, Li, Ri, -1, [0, Li, -3], Si, Ki, Ri, Ji, -1, Li, -1, Ji, Gi, [0, Ji, Li, -1, Ti, Gi, Ji], Ei, Ri, [0, Li, -1], Pi, Gi];
    var Vt = [0, Qi, -1, Pi, Ut, Mi, -1, Ui, Li, Pi, Li];
    function Wt(a) {
        this.F = eg(a, void 0, void 0, 2048)
    }
    x(Wt, Uh);
    var Xt = [0, Qi, Li];
    function Yt(a) {
        this.F = eg(a, void 0, void 0, 2048)
    }
    x(Yt, Uh);
    function Zt(a) {
        return Eg(a, Tt, 1)
    }
    ;var $t = Wi(Yt, [0, Vt, Qt, Xt]);
    function au(a) {
        this.i = a === void 0 ? !1 : a;
        this.Ae = new Map
    }
    au.prototype.start = function(a, b, c, d) {
        var e = this;
        if (this.ed === void 0 && a.L) {
            var f = a.L;
            this.g = d;
            c = !this.i && Jt(f);
            d = this.i ? Po : Kt(f);
            d = It(f, d);
            this.ed = (c ? Po : d.j(T(function(g) {
                var h = h === void 0 ? Symbol() : h;
                return Object.freeze({
                    Fb: h,
                    element: Bt(new Z(g), f.A)
                })
            }), At())).subscribe(function(g) {
                var h = g.Fb;
                e.Ae.set(h, g);
                g.element.j(Kq(1)).subscribe(function(k) {
                    var l = xt(k, "data-google-av-flags")
                      , m = new cj;
                    l !== null && ej(m, l);
                    l = Mt(m);
                    k = xt(k, "data-google-av-ufs-integrator-metadata");
                    a: {
                        if (k !== null)
                            try {
                                var q = $t(k);
                                break a
                            } catch (r) {}
                        q = new Yt
                    }
                    b(h, q, l)
                })
            });
            c && this.dispose();
            a.na && Qr(a.na)
        }
    }
    ;
    au.prototype.dispose = function() {
        var a, b;
        (a = this.ed) == null || (b = a.unsubscribe) == null || b.call(a);
        this.ed = void 0;
        var c;
        (c = this.g) == null || c.call(this);
        this.g = void 0
    }
    ;
    function bu(a) {
        var b = ft(a);
        return b === null ? new Z(null) : b.j(T(function(c) {
            c = Vh(c);
            if (fe)
                c = Ia.btoa(c);
            else {
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    g > 255 && (d[e++] = g & 255,
                    g >>= 8);
                    d[e++] = g
                }
                c = ge(d)
            }
            return c
        }), Kq(1), Y(a.A, 1))
    }
    ;function cu(a) {
        var b, c, d;
        return !!a && typeof a.active === "boolean" && typeof ((b = a.clock) == null ? void 0 : b.now) === "function" && ((c = a.clock) == null ? void 0 : c.timeline) !== void 0 && !((d = a.K) == null || !d.timestamp) && typeof a.ga === "function" && typeof a.ha === "function" && typeof a.Aa === "function" && typeof a.map === "function" && typeof a.Ca === "function"
    }
    ;function du(a) {
        function b(c) {
            return typeof c === "boolean" || typeof c === "string" || typeof c === "number" || c === void 0 || c === null
        }
        return b(a) ? !0 : Array.isArray(a) ? a.every(b) : typeof a === "object" ? Object.keys(a).every(function(c) {
            return typeof c === "string"
        }) && Object.values(a).every(function(c) {
            return Array.isArray(c) ? c.every(b) : b(c)
        }) : !1
    }
    function eu(a) {
        if (du(a))
            return a;
        if (cu(a))
            return {
                K: {
                    value: eu(a.K.value),
                    timestamp: vr(a.K.timestamp, new tr(0,a.K.timestamp.timeline))
                },
                active: a.active
            };
        try {
            return JSON.parse(JSON.stringify(a))
        } catch (b) {}
        return String(a)
    }
    ;function fu(a, b) {
        return new O(function(c) {
            function d(q) {
                l.add(q);
                so(a, function() {
                    l.size === b.length && c.complete()
                }, 1)
            }
            function e(q, r) {
                l.add(r);
                k.add(r);
                so(a, function() {
                    c.error(q)
                }, 1)
            }
            function f(q, r) {
                a.Hg ? (h[r] = q,
                k.add(r),
                g || (g = !0,
                so(a, function() {
                    g = !1;
                    c.next(cb(h))
                }, 1))) : c.error(new or(r))
            }
            var g = !1
              , h = Array(b.length);
            h.fill(void 0);
            var k = new Set
              , l = new Set
              , m = b.map(function(q, r) {
                return q.subscribe(function(v) {
                    return void f(v, r)
                }, function(v) {
                    return void e(v, r)
                }, function() {
                    return void d(r)
                })
            });
            return function() {
                m.forEach(function(q) {
                    return void q.unsubscribe()
                })
            }
        }
        )
    }
    ;function gu(a, b, c) {
        function d() {
            if (b.Ra) {
                var u = b.Ra
                  , C = u.next;
                var R = {
                    creativeId: wo(b.tc, c),
                    requiredSignals: e,
                    signals: Object.assign({}, f),
                    hasPrematurelyCompleted: g,
                    errorMessage: h,
                    erroredSignalKey: k
                };
                R = {
                    specMajor: 2,
                    specMinor: 0,
                    specPatch: 0,
                    timestamp: vr(b.C.now(), new tr(0,b.C.timeline)),
                    instanceId: wo(b.tc, b.Fb),
                    creativeState: R
                };
                C.call(u, R)
            }
        }
        for (var e = Object.keys(a), f = {}, g = !1, h = null, k = null, l = {}, m = new Set, q = [], r = [], v = y(e), t = v.next(), w = {}; !t.done; w = {
            va: void 0
        },
        t = v.next())
            w.va = t.value,
            t = a[w.va],
            t instanceof Z ? (l[w.va] = t.value,
            m.add(w.va),
            b.Ra && (f[String(w.va)] = eu(t.value))) : (t = t.j(V(function(u, C) {
                return cu(u) || cu(C) ? !1 : u === C
            }), T(function(u) {
                return function(C) {
                    b.Ra && (f[String(u.va)] = eu(C),
                    d());
                    var R = {};
                    return R[u.va] = C,
                    R
                }
            }(w)), Dq(function(u) {
                return function(C) {
                    if (C instanceof or)
                        throw new pr(String(u.va));
                    throw C;
                }
            }(w)), br(function(u) {
                return function() {
                    m.add(u.va)
                }
            }(w), function(u) {
                return function(C) {
                    k = String(u.va);
                    h = String(C);
                    d()
                }
            }(w), function(u) {
                return function() {
                    m.has(u.va) || (g = !0,
                    d())
                }
            }(w))),
            r.push(w.va),
            q.push(t));
        (a = Object.keys(f).length > 0) && d();
        v = fu(b.A, q).j(Dq(function(u) {
            if (u instanceof or)
                throw new qr(String(r[u.g]));
            throw u;
        }), T(function(u) {
            return Object.freeze(Object.assign.apply(Object, [{}, l].concat(z(u))))
        }));
        return (q = q.length > 0) && a ? fq(kp(Object.freeze(l)), v) : q ? v : kp(Object.freeze(l))
    }
    ;function hu(a, b, c, d, e) {
        return a.M.bc.bind(a.M)(733, function() {
            var f = {};
            try {
                return b.j(Dq(function(g) {
                    d(Object.assign({}, f, {
                        error: g
                    }));
                    return Po
                }), Mp(function(g) {
                    try {
                        var h = c(a, g)
                    } catch (l) {
                        return d(Object.assign({}, f, {
                            error: l instanceof Error ? l : String(l)
                        })),
                        Po
                    }
                    var k = {};
                    return gu(h, a, g.Fb).j(br(function(l) {
                        k = l
                    }), Wq(1), up()).j(e, Dq(function(l) {
                        d(Object.assign({}, k, {
                            error: l
                        }));
                        return Po
                    }), Qq(void 0), T(function() {
                        return !0
                    }))
                })).j(Yq(function(g) {
                    return g + 1
                }, 0), Dq(function(g) {
                    d(Object.assign({}, f, {
                        error: g
                    }));
                    return Po
                }))
            } catch (g) {
                return d(Object.assign({}, f, {
                    error: g
                })),
                Po
            }
        })()
    }
    ;function iu(a, b) {
        return N(X(function(c) {
            var d = a(c)
              , e = b(c)
              , f = {};
            return d && e && f ? new O(function(g) {
                e(d, f, function(h) {
                    g.next(Object.assign({}, c, {
                        pb: h
                    }));
                    g.complete()
                });
                return function() {}
            }
            ) : gq
        }), U(function(c) {
            return c.pb
        }))
    }
    ;var ju = N(U(function(a) {
        var b = a.N;
        var c = a.qc;
        var d = a.cc;
        var e = a.Wb;
        var f = a.zb;
        var g = a.Ya;
        a = a.oc;
        return g !== void 0 && a !== void 0 && b !== void 0 && c !== void 0 && d !== void 0 && (!f || e !== void 0)
    }), ar(function(a) {
        return !(a.Te === !1 && a.Fd !== void 0)
    }, !1), U(function(a) {
        var b = a.Te;
        var c = a.vc;
        var d = a.Ug;
        a = a.qc;
        return d ? !!c && a !== void 0 && (a == null ? void 0 : a.length) > 0 : !!b
    }), iu(function(a) {
        return a.oc
    }, function(a) {
        return a.Ya
    }), T(function(a) {
        a.zb || a.cc(a.qc, a).forEach(function(b) {
            a.N.O(b).sendNow()
        })
    }), Kq(1), Iq());
    function ku(a) {
        a = a.ha().value.slice(0, 3).reduce(function(b, c) {
            return b + c
        }, 0);
        return Math.min(a, 61500)
    }
    function lu(a) {
        return function(b) {
            var c = b.j(ar(function(f) {
                return f.Fd === void 0
            }), $q(function(f) {
                return f.cf === void 0
            }), ar(function(f) {
                return !!f.cf
            }), Wq(1), up());
            b = c.j(T(function(f) {
                return f.Dg
            }), U(function(f) {
                return f !== void 0
            }), Kq(1), br(function(f) {
                if (a.i.hasLocalStorageAccess()) {
                    var g = a.i.getItem("adStatsReset");
                    f > Number(g || "0") && (g !== null && (a.g.clear(),
                    mu(a)),
                    a.i.setItem("adStatsReset", f.toString()))
                }
            }));
            var d = c.j(U(function(f) {
                return !!f.vc
            }), Kq(1), br(function(f) {
                (f = f.ya) && nu(a, f, {
                    c: 1,
                    v: 0,
                    cTos: 0
                })
            }))
              , e = c.j(U(function(f) {
                f = f.ld;
                return !!f && f.ha().value
            }), Kq(1), br(function(f) {
                (f = f.ya) && nu(a, f, {
                    c: 0,
                    v: 1,
                    cTos: 0
                })
            }));
            c = c.j(T(function(f) {
                return f.ug
            }), V(), cr(c.j(T(function(f) {
                return {
                    oa: f.oa,
                    ya: f.ya
                }
            }))), U(function(f) {
                f = y(f);
                f.next();
                return !!f.next().value.oa
            }), T(function(f) {
                f = y(f);
                f.next();
                var g = f.next().value;
                f = g.oa;
                g = g.ya;
                return {
                    ac: ku(f),
                    ya: g
                }
            }), ar(function(f) {
                return f.ac < 61500
            }, !0), V(function(f, g) {
                return f.ac === g.ac
            }), W({
                ac: 0,
                ya: null
            }), Vq(), br(function(f) {
                var g = y(f);
                f = g.next().value.ac;
                var h = g.next().value;
                g = h.ac;
                (h = h.ya) && g && nu(a, h, {
                    c: 0,
                    v: 0,
                    cTos: g - f
                })
            }));
            return fq(b, d, e, c).j(Iq())
        }
    }
    ;function ou(a) {
        var b = new Map;
        if (typeof a !== "object" || a === null)
            return b;
        Object.values(a).forEach(function(c) {
            c && typeof c.ha === "function" && (b.has(c.clock.timeline) || b.set(c.clock.timeline, c.clock.now()))
        });
        return b
    }
    ;function pu(a, b, c) {
        var d = qu
          , e = ru;
        c = c === void 0 ? .01 : c;
        return function(f) {
            c > 0 && Math.random() <= c && (a.global.HTMLFencedFrameElement && a.global.fence && typeof a.global.fence.reportEvent === "function" && a.global.fence.reportEvent({
                eventType: "active-view-error",
                eventData: "",
                destination: ["buyer"]
            }),
            f = Object.assign({}, f, {
                errorMessage: f.error instanceof Error && f.error.message ? f.error.message : String(f.error),
                Ge: f.error instanceof Error && f.error.stack ? String(f.error.stack) : null,
                Tf: f.error instanceof Error && f.error.name ? String(f.error.name) : null,
                Rf: String(a.M.ge),
                Sf: f.escapedQueryId
            }),
            d(Object.assign({}, f, {
                ea: function() {
                    return function(g) {
                        try {
                            return e(Object.assign({}, g))
                        } catch (h) {
                            return {}
                        }
                    }
                }(),
                wa: [b]
            }), ou(f)).forEach(function(g) {
                a.N.O(g).sendNow()
            }))
        }
    }
    ;var su = N(T(function(a) {
        var b = a.N;
        var c = a.Vf;
        if (b === void 0 || c === void 0)
            return !1;
        if (a.Fd !== void 0)
            return !0;
        if (c === null)
            return !1;
        for (a = 0; a < c; a++)
            b.O("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=extra&rnd=" + Math.floor(Math.random() * 1E7)).sendNow();
        return !0
    }), ar(function(a) {
        return !a
    }), Iq());
    var tu = N(U(function(a) {
        return !!a.vc
    }), U(function(a) {
        var b = a.shouldSendExplicitDisplayMeasurablePing;
        a = a.wb;
        var c, d;
        return (d = b && ((c = a == null ? void 0 : a.length) != null ? c : 0) > 0) != null ? d : !1
    }), U(function(a) {
        return a.ea !== void 0 && a.wb !== void 0 && a.Gb !== void 0 && a.Sb !== void 0 && a.N !== void 0
    }), T(function(a) {
        return Object.assign({}, a, {
            gd: ou(a)
        })
    }), T(function(a) {
        a.Gb(Object.assign({}, a, {
            wa: a.wb,
            ea: a.ea,
            Bc: a.Sb,
            Gc: 3,
            Cc: "m"
        }), a.gd).forEach(function(b) {
            a.N.O(b).sendNow()
        });
        return !0
    }), ar(function(a) {
        return !a
    }), Iq());
    function ru(a) {
        return {
            id: a.Bc,
            mcvt: a.yc,
            p: a.Rc,
            asp: a.wh,
            tm: a.jb,
            tu: a.kb,
            mtos: a.zc,
            tos: a.oa,
            v: a.Ef,
            bin: a.Ka,
            avms: a.S,
            bs: a.we,
            mc: a.Xe,
            "if": a.Nf,
            vu: a.Pf,
            app: a.xb,
            mse: a.Wd,
            mtop: a.Xd,
            itpl: a.Nd,
            adk: a.ya,
            exk: a.Cf,
            rs: a.W,
            la: a.ia,
            cr: a.Od,
            uach: a.Fc,
            vs: a.Gc,
            r: a.Cc,
            pay: a.ag,
            co: a.Gf,
            rst: a.Af,
            rpt: a.zf,
            isd: a.eg,
            lsd: a.pg,
            context: a.Rf,
            msg: a.errorMessage,
            stack: a.Ge,
            name: a.Tf,
            ec: a.bg,
            sfr: a.fe,
            met: a.rc,
            wmsd: a.le,
            pv: a.Sh,
            epv: a.zh,
            pbe: a.Se,
            fle: a.cg,
            vae: a.dg,
            spb: a.gf,
            sfl: a.ff,
            ffslot: a.jg,
            reach: a.Jg,
            io2: a.jd,
            rxdbg: a.Xh,
            omida: a.Gh,
            omidp: a.Nh,
            omidpv: a.Oh,
            omidor: a.Mh,
            omidv: a.Qh,
            omids: a.Ph,
            omidam: a.Fh,
            omidct: a.Hh,
            omidia: a.Kh,
            omiddc: a.Ih,
            omidlat: a.Lh,
            omiddit: a.Jh,
            qid: a.Sf
        }
    }
    ;function uu() {
        var a = D.apply(0, arguments);
        return function(b) {
            var c = b.j(Wq(1), up());
            b = a.map(function(d) {
                return c.j(d, Qq(!0))
            });
            return Hp(b).j(Kq(1), Iq())
        }
    }
    ;function vu() {
        var a = D.apply(0, arguments);
        return function(b) {
            var c = b.j(Wq(1), up());
            b = a.map(function(d) {
                return c.j(d, Qq(!0))
            });
            return fq.apply(null, z(b)).j(Kq(1), Iq())
        }
    }
    ;function wu() {
        var a = uu(tu, xu)
          , b = yu;
        return function(c) {
            var d = c.j(Wq(1), up());
            c = d.j(a, Qq(!0));
            d = d.j(N(b, Wq(), up()), Qq(!0));
            c = Hp([c, d]);
            return kq(c, d).j(Kq(1), Iq())
        }
    }
    ;function yu(a) {
        var b = [];
        return a.j(T(function(c) {
            var d = c.N
              , e = c.Wf
              , f = c.oa
              , g = c.Ng
              , h = c.ea
              , k = c.Mg
              , l = c.hf
              , m = c.Gb
              , q = c.ld
              , r = c.vc
              , v = c.Se
              , t = c.gf
              , w = c.ff
              , u = c.ie;
            if (!c.Ne || !r || c.zc === void 0 || f === void 0 || g === void 0 || h === void 0 || k === void 0 || m === void 0 || d === void 0)
                return !1;
            if (c.zb) {
                if (l === void 0)
                    return !1;
                g = c.Wb;
                if (!g)
                    return !1;
                g({
                    eventType: "active-view-time-on-screen",
                    eventData: u != null ? u : "",
                    destination: ["buyer"]
                });
                return !0
            }
            if (!(v || w || l))
                return !1;
            u = ou(c);
            var C;
            q = (C = q == null ? void 0 : q.Ba(u).value) != null ? C : !1;
            C = m(Object.assign({}, c, {
                Bc: k,
                Gc: q ? 4 : 3,
                Cc: l != null ? l : "u",
                ea: h,
                wa: g
            }), u);
            if (v) {
                for (; b.length > g.length; )
                    c = void 0,
                    (c = b.shift()) == null || c.deactivate();
                C.forEach(function(I, fa) {
                    fa >= b.length ? b.push(d.O(I)) : b[fa].url = I
                });
                return t && e && l !== void 0 ? (C.forEach(function(I) {
                    e.O(I).sendNow()
                }),
                !0) : l !== void 0
            }
            if (t && e && l !== void 0)
                return C.forEach(function(I) {
                    e.O(I).sendNow()
                }),
                !0;
            if (w && e) {
                for (; b.length > g.length; )
                    t = void 0,
                    (t = b.shift()) == null || t.deactivate();
                var R = m(Object.assign({}, c, {
                    Bc: k,
                    Gc: q ? 4 : 3,
                    Cc: l != null ? l : "u",
                    ea: h,
                    wa: ["https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fetch&later&lidartos"]
                }), u)[0];
                C.forEach(function(I, fa) {
                    fa >= b.length ? b.push(d.O(R, {
                        Fe: !0
                    })) : b[fa].url = R
                });
                return l !== void 0 ? (C.forEach(function(I) {
                    e.O(I).sendNow()
                }),
                !0) : l !== void 0
            }
            return l !== void 0 ? (C.forEach(function(I) {
                d.O(I).sendNow()
            }),
            !0) : !1
        }), ar(function(c) {
            return !c
        }), Iq())
    }
    ;function zu() {
        return function(a) {
            return a.j(T(function(b) {
                return b
            }))
        }
    }
    ;function Au(a) {
        return function(b) {
            return new O(function(c) {
                var d = !1
                  , e = b.j(zu()).subscribe(function(f) {
                    d = !0;
                    c.next(f)
                }, c.error.bind(c), c.complete.bind(c));
                so(a, function() {
                    d || c.next(null)
                }, 3);
                return e
            }
            )
        }
    }
    ;function Bu(a, b) {
        return function(c) {
            return c.j(X(function(d) {
                return new O(function(e) {
                    function f() {
                        h.disconnect();
                        k.unsubscribe()
                    }
                    var g = a.MutationObserver;
                    if (g && d.g !== void 0) {
                        var h = new g(function(l) {
                            e.next(l)
                        }
                        );
                        h.observe(d.g, b);
                        var k = d.i.subscribe(f);
                        return f
                    }
                }
                )
            }))
        }
    }
    ;var Cu = {
        rh: 0,
        dh: 1,
        gh: 2,
        eh: 3,
        0: "UNKNOWN",
        1: "DEFER_MEASUREMENT",
        2: "DO_NOT_DEFER_MEASUREMENT",
        3: "DEFER_MEASUREMENT_AND_PING"
    };
    function Du(a, b) {
        var c = b.j(Bu(a, {
            attributes: !0
        }), Y(a.A, 1));
        return Hp([b, c.j(Y(a.A, 1), Au(a.A))]).j(T(function(d) {
            return y(d).next().value
        }), yt("data-google-av-dm"), T(Eu))
    }
    function Eu(a) {
        return a && a in Cu ? Number(a) : 2
    }
    ;function Fu(a) {
        if (a.sg === 3)
            return null;
        if (a.hf !== void 0) {
            var b = a.Jf === !1 ? "n" : null;
            if (b !== null)
                return b
        }
        return a.Vc instanceof hr ? "msf" : a.Cd instanceof ir ? "c" : a.If === !1 ? "pv" : a.Vc || a.Cd ? "x" : null
    }
    var Gu = N(U(function(a) {
        return a.wb !== void 0 && a.ea !== void 0 && a.Gb !== void 0 && a.Sb !== void 0 && a.N !== void 0
    }), U(function(a) {
        return Fu(a) !== null
    }), iu(function(a) {
        return a.Mc
    }, function(a) {
        return a.Ya
    }), T(function(a) {
        if (a.zb) {
            var b = a.Wb;
            if (b) {
                var c;
                b({
                    eventType: "active-view-unmeasurable",
                    eventData: (c = a.ie) != null ? c : "",
                    destination: ["buyer"]
                })
            }
        } else {
            c = void 0;
            var d = Fu(a);
            if (d === "x") {
                var e, f = (e = a.Vc) != null ? e : a.Cd;
                f && (b = f.stack,
                c = f.message)
            }
            a.Gb(Object.assign({}, a, {
                wa: a.wb,
                ea: a.ea,
                Bc: a.Sb,
                Gc: 2,
                Cc: d,
                errorMessage: c,
                Ge: b
            }), ou(a)).forEach(function(g) {
                a.N.O(g).sendNow()
            })
        }
    }), Kq(1), Iq());
    function Hu() {
        this.startTime = Math.floor(Date.now() / 1E3 - 1704067200);
        this.g = 0
    }
    function Iu(a) {
        var b = a.g.toString(10).padStart(2, "0");
        b = "" + a.startTime + b;
        a.g < 99 && a.g++;
        return b
    }
    ;function Ju(a, b) {
        return typeof a === "string" ? encodeURIComponent(a) : typeof a === "number" ? String(a) : Array.isArray(a) ? a.map(function(c) {
            return Ju(c, b)
        }).join(",") : a instanceof tr ? a.toString() : a && typeof a.ha === "function" ? Ju(a.Ba(b).value, b) : a === !0 ? "1" : a === !1 ? "0" : a === void 0 || a === null ? null : a instanceof Hu ? Iu(a) : [a.top, a.left, a.top + a.height, a.left + a.width].join()
    }
    function Ku(a, b) {
        a = Object.entries(a).map(function(c) {
            var d = y(c);
            c = d.next().value;
            d = d.next().value;
            d = Ju(d, b);
            return d === null ? "" : c + "=" + d
        }).filter(function(c) {
            return c !== ""
        });
        return a.length ? a.join("&") : ""
    }
    ;function Lu(a, b) {
        var c = Object.assign({}, a)
          , d = a.Fc;
        c = (delete c.Fc,
        c);
        c = a.ea(c);
        var e = Ku(c, b);
        return Va(a.wa, function(f) {
            var g = "";
            typeof d === "string" && (g = "&" + Ku({
                uach: d
            }, b));
            var h = {};
            return dm(f, (h.VIEWABILITY = e,
            h)) + g
        })
    }
    ;function qu(a, b) {
        var c = a.ea(a)
          , d = Ku(c, b);
        return d ? Va(a.wa, function(e) {
            e = e.indexOf("?") >= 0 ? e : e + "?";
            e = "?&".indexOf(e.slice(-1)) >= 0 ? e : e + "&";
            return e + d
        }) : a.wa
    }
    ;function Mu(a, b) {
        return Va(a, function(c) {
            if (typeof b.Fc === "string") {
                var d = "&" + Ku({
                    uach: b.Fc
                }, new Map);
                return c.substring(c.length - 7) == "&adurl=" ? c.substring(0, c.length - 7) + d + "&adurl=" : c + d
            }
            return c
        })
    }
    ;var xu = N(U(function(a) {
        return a.ea !== void 0 && a.wb !== void 0 && a.Gb !== void 0 && a.Sb !== void 0 && a.N !== void 0
    }), T(function(a) {
        return Object.assign({}, a, {
            gd: ou(a)
        })
    }), U(function(a) {
        var b = a.ld;
        var c = a.vc;
        a = a.gd;
        var d;
        return !!c && ((d = b == null ? void 0 : b.Ba(a).value) != null ? d : !1)
    }), iu(function(a) {
        return a.Nc
    }, function(a) {
        return a.Ya
    }), T(function(a) {
        var b = a.N
          , c = a.ie;
        if (a.zb) {
            var d = a.Wb;
            if (!d)
                return !1;
            d({
                eventType: "active-view-viewable",
                eventData: c != null ? c : "",
                destination: ["buyer"]
            });
            return !0
        }
        c = a.Gb(Object.assign({}, a, {
            wa: a.wb,
            ea: a.ea,
            Bc: a.Sb,
            Gc: 4,
            Cc: "v"
        }), a.gd);
        (d = a.Dd) && d.length > 0 && a.cc && a.cc(d, a).forEach(function(e) {
            b.O(e).sendNow()
        });
        (d = a.lb) && d.length > 0 && a.cc && a.cc(d, a).forEach(function(e) {
            b.O(e).sendNow()
        });
        c.forEach(function(e) {
            b.O(e, {
                lc: a.Qd
            }).sendNow()
        });
        return !0
    }), ar(function(a) {
        return !a
    }), Iq());
    function Nu(a, b, c, d) {
        var e = Object.keys(c).map(function(h) {
            return h
        })
          , f = e.filter(function(h) {
            var k = c[h];
            h = d[h];
            return k instanceof Z && h instanceof Z && k.value === h.value
        })
          , g = f.reduce(function(h, k) {
            var l = {};
            return Object.assign({}, h, (l[k] = c[k],
            l))
        }, {});
        return e.reduce(function(h, k) {
            if (f.indexOf(k) >= 0)
                return h;
            var l = {};
            return Object.assign({}, h, (l[k] = b.j(X(function(m) {
                return (m = m ? c[k] : d[k]) && (m instanceof O || M(m.Bb) && M(m.subscribe)) ? m : Bt(m, a)
            })),
            l))
        }, g)
    }
    ;function Ou(a) {
        return N(T(function() {
            return !0
        }), W(!1), Y(a, 1))
    }
    ;var Pu = {
        Wg: "asmreq",
        Xg: "asmres"
    };
    function Qu(a) {
        this.F = eg(a, void 0, void 0, 2048)
    }
    x(Qu, Uh);
    function Ru(a) {
        this.F = eg(a, void 0, void 0, 2048)
    }
    x(Ru, Uh);
    function Su(a) {
        this.F = eg(a, void 0, void 0, 2048)
    }
    x(Su, Uh);
    var Tu = Yi(Su);
    function Uu(a, b) {
        var c = c === void 0 ? ct(a) : c;
        var d = new MessageChannel;
        b = b.j(T(function(f) {
            return Number(f)
        }), U(function(f) {
            return !isNaN(f) && f !== 0
        }), br(function(f) {
            var g = new Qu;
            Ng(g, 1, f);
            f = {
                type: "asmreq",
                payload: Vh(g)
            };
            c.postMessage(f, "*", [d.port2])
        }), Kq(1));
        var e = dt(a, d.port1).j(U(function(f) {
            return typeof f.data === "object"
        }), T(function(f) {
            var g = f.data
              , h = Object.values(Pu).includes(g.type);
            g = typeof g.payload === "string";
            if (!h || !g || f.data.type !== "asmres")
                return null;
            try {
                return Tu(f.data.payload)
            } catch (k) {
                return null
            }
        }), U(function(f) {
            return f !== null
        }), T(function(f) {
            return f
        }));
        return b.j(X(function(f) {
            return kp(f).j(Gq(e))
        }), U(function(f) {
            var g = y(f);
            f = g.next().value;
            g = g.next().value;
            if (Hf(ng(g, 1)) != null) {
                var h = h === void 0 ? 0 : h;
                var k;
                g = ((k = Hf(ng(g, 1))) != null ? k : h) === f
            } else
                g = !1;
            return g
        }), T(function(f) {
            f = y(f);
            f.next();
            return f.next().value
        }), Es(a.A))
    }
    ;function Vu(a, b, c) {
        var d = b.xc.j(Kq(1), X(function() {
            return Uu(a, c)
        }), U(function(f) {
            return Jg(f, 2) && rg(f, Ru, 3) && Gf(ng(f, 4)) != null && Gf(ng(f, 5)) != null
        }), Kq(1), Es(a.A));
        b = d.j(T(function(f) {
            var g = Eg(f, Ru, 3);
            g = Kg(g, 2);
            f = Eg(f, Ru, 3);
            f = Kg(f, 1);
            return {
                x: g,
                y: f
            }
        }), V(function(f, g) {
            return f.x === g.x && f.y === g.y
        }), Y(a.A, 1));
        var e = d.j(T(function(f) {
            return Kg(f, 4)
        }), Y(a.A, 1));
        d = d.j(T(function(f) {
            return Kg(f, 5)
        }), Y(a.A, 1));
        return {
            eg: e,
            Bf: b,
            pg: d
        }
    }
    ;function Wu(a, b) {
        return b.xc.j(Kq(1), T(function() {
            return a.C.now().round()
        }))
    }
    ;function Xu(a, b) {
        var c = a.Jd().j(T(function() {
            return "b"
        }));
        return kq(b, c).j(Kq(1), Y(a.A, 1))
    }
    ;function Yu(a, b) {
        this.a = a;
        this.b = b;
        if (a.clock.timeline !== b.clock.timeline)
            throw Error();
    }
    Yu.prototype.ga = function(a) {
        return a instanceof Yu ? this.a.ga(a.a) && this.b.ga(a.b) : !1
    }
    ;
    Yu.prototype.Aa = function(a) {
        var b = this.a.Aa(a).value
          , c = this.b.Aa(a).value;
        return {
            timestamp: a,
            value: [b, c]
        }
    }
    ;
    da.Object.defineProperties(Yu.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.active || this.b.active
            }
        },
        clock: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.clock
            }
        },
        K: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a = this.a.K.timestamp.maximum(this.b.K.timestamp)
                  , b = this.a.K.timestamp.equals(a) ? this.a.K.value : this.a.Aa(a).value
                  , c = this.b.K.timestamp.equals(a) ? this.b.K.value : this.b.Aa(a).value;
                return {
                    timestamp: a,
                    value: [b, c]
                }
            }
        }
    });
    function Zu(a, b) {
        this.input = a;
        this.g = b;
        this.K = {
            timestamp: this.input.K.timestamp,
            value: this.g(this.input.K.value)
        }
    }
    Zu.prototype.ga = function(a) {
        return a instanceof Zu ? this.input.ga(a.input) && this.g === a.g : !1
    }
    ;
    Zu.prototype.Aa = function(a) {
        a = this.input.Aa(a);
        return {
            timestamp: a.timestamp,
            value: this.g(a.value)
        }
    }
    ;
    da.Object.defineProperties(Zu.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.input.active
            }
        },
        clock: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.input.clock
            }
        }
    });
    function $u(a, b, c) {
        c = c === void 0 ? function(d, e) {
            return d === e
        }
        : c;
        return a.timestamp.equals(b.timestamp) && c(a.value, b.value)
    }
    ;function av(a, b, c) {
        this.clock = a;
        this.K = b;
        this.active = c
    }
    av.prototype.ga = function(a) {
        return a instanceof av ? this.active === a.active && this.clock.timeline === a.clock.timeline && $u(this.K, a.K) : !1
    }
    ;
    av.prototype.Aa = function(a) {
        return {
            timestamp: a,
            value: this.K.value + (this.active ? Math.max(0, vr(a, this.K.timestamp)) : 0)
        }
    }
    ;
    function bv() {}
    bv.prototype.ha = function() {
        return this.Aa(this.clock.now())
    }
    ;
    bv.prototype.Ba = function(a) {
        var b = this.clock.timeline, c, d = (c = a.get(b)) != null ? c : this.clock.now();
        a.set(b, d);
        return this.Aa(d)
    }
    ;
    bv.prototype.map = function(a) {
        return new cv(this,a)
    }
    ;
    bv.prototype.Ca = function(a) {
        return new dv(this,a)
    }
    ;
    function dv() {
        Yu.apply(this, arguments);
        this.map = bv.prototype.map;
        this.Ca = bv.prototype.Ca;
        this.ha = bv.prototype.ha;
        this.Ba = bv.prototype.Ba
    }
    x(dv, Yu);
    function ev() {
        av.apply(this, arguments);
        this.map = bv.prototype.map;
        this.Ca = bv.prototype.Ca;
        this.ha = bv.prototype.ha;
        this.Ba = bv.prototype.Ba
    }
    x(ev, av);
    function cv() {
        Zu.apply(this, arguments);
        this.map = bv.prototype.map;
        this.Ca = bv.prototype.Ca;
        this.ha = bv.prototype.ha;
        this.Ba = bv.prototype.Ba
    }
    x(cv, Zu);
    function fv(a, b) {
        this.K = b;
        this.ha = bv.prototype.ha;
        this.Ba = bv.prototype.Ba;
        this.map = bv.prototype.map;
        this.Ca = bv.prototype.Ca;
        this.clock = a
    }
    fv.prototype.ga = function(a) {
        return a.active
    }
    ;
    fv.prototype.Aa = function() {
        return this.K
    }
    ;
    da.Object.defineProperties(fv.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !1
            }
        }
    });
    function gv(a, b) {
        return b.j(T(function(c) {
            return new fv(a.C,{
                timestamp: a.C.now(),
                value: c
            })
        }))
    }
    ;var hv = T(function(a) {
        return [a.value.fa.width, a.value.fa.height]
    });
    var iv = {
        pa: "ns",
        ua: Gs,
        fa: Gs,
        ka: new P,
        ca: "ns",
        G: Gs,
        da: Gs,
        xa: {
            x: 0,
            y: 0
        }
    };
    function jv(a, b) {
        return Hs(a.fa, b.fa) && Hs(a.G, b.G) && Hs(a.ua, b.ua) && Hs(a.da, b.da) && a.ca === b.ca && a.ka === b.ka && a.pa === b.pa && a.xa.x === b.xa.x && a.xa.y === b.xa.y
    }
    ;function kv(a) {
        return function(b) {
            var c;
            return b.j(br(function(d) {
                return void (c = d.timestamp)
            }), T(function(d) {
                return d.value
            }), a, T(function(d) {
                return {
                    timestamp: c,
                    value: d
                }
            }))
        }
    }
    ;function lv(a) {
        return a.da.width * a.da.height / (a.G.width * a.G.height)
    }
    var mv = kv(N(T(function(a) {
        var b;
        return (b = a.Uc) != null ? b : lv(a)
    }), T(function(a) {
        return isFinite(a) ? a : 0
    })))
      , nv = kv(N(T(function(a) {
        var b;
        return (b = a.Uc) != null ? b : lv(a)
    }), T(function(a) {
        return isFinite(a) ? a : -1
    })));
    function ov(a, b) {
        return a >= 1 ? !0 : a <= 0 ? !1 : a >= b
    }
    ;function pv(a) {
        return function(b) {
            return b.j(cr(a), T(function(c) {
                var d = y(c);
                c = d.next().value;
                d = d.next().value;
                return {
                    timestamp: c.timestamp,
                    value: ov(c.value, d)
                }
            }))
        }
    }
    ;var qv = T(function(a) {
        if (a.value.pa === "omid") {
            if (a.value.ca === "nio")
                return "omio";
            if (a.value.ca === "geo")
                return "omgeo"
        }
        return a.value.ca === "geo" || a.value.ca === "nio" ? a.value.pa : a.value.ca
    });
    function rv() {
        return N(U(function(a, b) {
            return b > 0
        }), sv, W(-1), V())
    }
    var sv = N(U(function(a) {
        return !isNaN(a)
    }), Yq(function(a, b) {
        return isNaN(a) ? b : Math.min(a, b)
    }, NaN), V());
    var tv = kv(N(T(function(a) {
        return a.da.width * a.da.height / (a.ua.width * a.ua.height)
    }), T(function(a) {
        return isFinite(a) ? Math.min(1, a) : 0
    })));
    function uv(a, b, c) {
        return a ? Hp([b, c]).j(U(function(d) {
            var e = y(d);
            d = e.next().value;
            e = e.next().value;
            return d.timestamp.equals(e.timestamp)
        }), T(function(d) {
            var e = y(d);
            d = e.next().value;
            e = e.next().value;
            return d.value > e.value ? d : e
        })) : b
    }
    function vv(a) {
        return function(b) {
            var c = b.j(mv)
              , d = b.j(tv);
            return a instanceof O ? a.j(X(function(e) {
                return uv(e, c, d)
            })) : uv(a.value, c, d)
        }
    }
    ;var wv = N(kv(T(function(a) {
        a = a.Uc ? a.G.width * a.G.height * a.Uc / (a.fa.width * a.fa.height) : a.da.width * a.da.height / (a.fa.width * a.fa.height);
        return isFinite(a) ? a : 0
    })));
    function xv(a, b, c, d) {
        var e = d.Wc
          , f = d.Gd
          , g = d.mf
          , h = d.ue
          , k = d.Rd
          , l = d.Ye
          , m = d.Zc;
        d = d.kf;
        b = yv(a, c, b);
        c = zv(a, c);
        d = Av(b, d);
        var q = Bv(a, e, l, b)
          , r = q.j(T(function(A) {
            return A.value
        }), V(), Y(a, 1), Yq(function(A, Q) {
            return Math.max(A, Q)
        }, 0))
          , v = q.j(T(function(A) {
            return A.value
        }), rv(), Y(a, 1))
          , t = b.j(nv, T(function(A) {
            return A.value
        }), Kq(2), V(), Y(a, 1));
        g = Cv(a, b, g, h);
        var w = g.j(W(!1), V(), T(function(A) {
            return A ? k : f
        }));
        h = q.j(pv(w), V(), Y(a, 1));
        var u = Hp([h, b]).j(U(function(A) {
            var Q = y(A);
            A = Q.next().value;
            Q = Q.next().value;
            return A.timestamp.equals(Q.timestamp)
        }), T(function(A) {
            var Q = y(A);
            A = Q.next().value;
            Q = Q.next().value;
            return {
                visible: A.value,
                geometry: Q.value.G
            }
        }), Yq(function(A, Q) {
            return !Q.visible && A.visible ? A : Q
        }, {
            visible: !1,
            geometry: Gs
        }), T(function(A) {
            return A.geometry
        }), W(Gs), Y(a, 1), V(Hs));
        l = l instanceof O ? l.j(V(), Jq()) : gq;
        w = Hp([l, w]).j(Jq());
        var C = b.j(U(function(A) {
            return A.value.pa !== "ns" && A.value.ca !== "ns"
        }), Yq(function(A) {
            return A + 1
        }, 0), W(0), Y(a, 1))
          , R = c.j(Jq(!0), W(!1), Y(a, 1));
        R = Hp([m, R]).j(T(function(A) {
            var Q = y(A);
            A = Q.next().value;
            Q = Q.next().value;
            return A && !Q
        }), Y(a, 1));
        var I = b.j(wv, V())
          , fa = I.j(T(function(A) {
            return A.value
        }), Yq(function(A, Q) {
            return Math.max(A, Q)
        }, 0), V(), Y(a, 1))
          , F = I.j(T(function(A) {
            return A.value
        }), rv(), Y(a, 1));
        return {
            ce: l,
            Ec: w,
            La: {
                Bg: b,
                S: b.j(qv),
                Rc: u.j(V(Hs)),
                visible: h.j(V($u)),
                he: q.j(V($u)),
                Xe: r,
                wg: v,
                we: b.j(hv, V(hb)),
                Og: I,
                rg: fa,
                vg: F,
                Vc: c,
                ka: Bt(new Z(new P), a),
                ia: g,
                Wc: e,
                Zc: m,
                Ne: R,
                Qg: C,
                Vb: t,
                jd: d
            }
        }
    }
    function zv(a, b) {
        return b.j(U(function() {
            return !1
        }), T(function(c) {
            return c
        }), Dq(function(c) {
            return Bt(new Z(c), a)
        }))
    }
    function Av(a, b) {
        a = Hp([a, b]).j(T(function(e) {
            var f = y(e);
            e = f.next().value;
            if (f.next().value && e.value.isIntersecting)
                return e.value.We
        }), V());
        var c = a.j(T(function(e) {
            return e === void 0 ? !0 : e
        }), Yq(function(e, f) {
            return e || !f
        }, !1))
          , d = a.j(Yq(function(e, f) {
            return f === void 0 ? e : f ? !1 : e != null ? e : !0
        }, void 0), T(function(e) {
            return !!e
        }));
        return Hp([b, mq(a, c, d)]).j(T(function(e) {
            var f = y(e);
            e = f.next().value;
            var g = y(f.next().value);
            f = g.next().value;
            var h = g.next().value;
            g = g.next().value;
            var k = 0;
            if (!e)
                return 0;
            if (f === void 0)
                return 16;
            f && (k |= 1);
            f || (k |= 2);
            h && (k |= 4);
            g && (k |= 8);
            return k
        }))
    }
    function yv(a, b, c) {
        return b.j(jq(gq), Y(a, 1)).j(V(function(d, e) {
            return $u(d, e, jv)
        }), W({
            timestamp: c.now(),
            value: iv
        }), Y(a, 1))
    }
    function Bv(a, b, c, d) {
        c = d.j(vv(c), kv(T(function(e) {
            return Math.round(e * 100) / 100
        })), Y(a, 1));
        return b instanceof Z ? c : Hp([c, b]).j(T(function(e) {
            var f = y(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), V($u), Y(a, 10))
    }
    function Cv(a, b, c, d) {
        b = [b.j(T(function(e) {
            return e.value.G.width * e.value.G.height >= 242500
        }))];
        c instanceof O && b.push(c.j(T(function(e) {
            return !!e
        })));
        c = Hp(b);
        return d ? c.j(T(function(e) {
            return e.some(function(f) {
                return f
            })
        }), W(!1), V(), Y(a, 1)) : Bt(new Z(!1), a)
    }
    ;function Dv(a) {
        return a.length <= 0 ? Po : Hp(a.map(function(b) {
            var c = 0;
            return b.j(T(function(d) {
                return {
                    index: c++,
                    value: d
                }
            }))
        })).j(U(function(b) {
            return b.every(function(c) {
                return c.index === b[0].index
            })
        }), T(function(b) {
            return b.map(function(c) {
                return c.value
            })
        }))
    }
    ;function Ev(a, b) {
        return function(c) {
            return Dv(b.map(function(d) {
                return c.j(a(d))
            }))
        }
    }
    ;function Fv(a, b) {
        a.Qa && (a.Db = a.Qa);
        a.Qa = b;
        a.Db && a.Db.value ? (b = Math.max(0, vr(b.timestamp, a.Db.timestamp)),
        a.totalTime += b,
        a.za += b) : a.za = 0;
        return a
    }
    function Gv(a) {
        return N(Yq(Fv, {
            totalTime: 0,
            za: 0
        }), T(function(b) {
            return new ev(a,{
                timestamp: b.Qa.timestamp,
                value: b.totalTime
            },b.Qa.value)
        }))
    }
    function Hv(a) {
        return N(Yq(Fv, {
            totalTime: 0,
            za: 0
        }), T(function(b) {
            return new ev(a,{
                timestamp: b.Qa.timestamp,
                value: b.za
            },b.Qa.value)
        }))
    }
    ;function Iv(a) {
        return N(Hv(a), T(function(b) {
            return b.map(function(c) {
                return Math.round(c)
            })
        }))
    }
    ;function Jv(a) {
        var b = new ev(a,{
            timestamp: a.now(),
            value: 0
        },!1);
        return N(Hv(a), Yq(function(c, d) {
            return c.K.value > d.K.value ? new ev(a,c.K,!1) : d
        }, b), T(function(c) {
            return c.map(function(d) {
                return Math.round(d)
            })
        }))
    }
    ;function Kv(a) {
        return function(b) {
            return N(pv(kp(b)), Jv(a))
        }
    }
    ;function Lv(a) {
        return function(b) {
            return N(kv(T(function(c) {
                return ov(c, b)
            })), Gv(a), T(function(c) {
                return c.map(function(d) {
                    return Math.round(d)
                })
            }))
        }
    }
    ;function Mv(a) {
        return a.map(function(b) {
            return b.map(function(c) {
                return [c]
            })
        }).reduce(function(b, c) {
            return b.Ca(c).map(function(d) {
                return d.flat()
            })
        })
    }
    function Nv(a, b) {
        return a.Ca(b).map(function(c) {
            var d = y(c);
            c = d.next().value;
            d = d.next().value;
            return c - d
        })
    }
    function Ov(a, b, c, d, e, f) {
        var g = Pv;
        if (g.length > 1)
            for (var h = 0; h < g.length - 1; h++)
                if (g[h] < g[h + 1])
                    throw Error();
        h = f.j(W(void 0), X(function() {
            return d.j(Iv(a))
        }), V(function(k, l) {
            return k.ga(l)
        }), Y(b, 1));
        f = f.j(W(void 0), X(function() {
            return d.j(Jv(a))
        }), V(function(k, l) {
            return k.ga(l)
        }), Y(b, 1));
        return {
            jb: e.j(W(void 0), X(function() {
                return c.j(T(function(k) {
                    return {
                        timestamp: k.timestamp,
                        value: !0
                    }
                }), Gv(a))
            }), V(function(k, l) {
                return k.ga(l)
            }), Y(b, 1)),
            kb: e.j(W(void 0), X(function() {
                return c.j(T(function(k) {
                    return {
                        timestamp: k.timestamp,
                        value: k.value === 0
                    }
                }), Gv(a))
            }), V(function(k, l) {
                return k.ga(l)
            }), Y(b, 1)),
            zc: e.j(W(void 0), X(function() {
                return c.j(Ev(Kv(a), g))
            }), T(Mv), V(function(k, l) {
                return k.ga(l)
            }), Y(b, 1)),
            oa: e.j(W(void 0), X(function() {
                return c.j(Ev(Lv(a), g), T(function(k) {
                    return k.map(function(l, m) {
                        return m > 0 ? Nv(l, k[m - 1]) : l
                    })
                }))
            }), T(Mv), V(function(k, l) {
                return k.ga(l)
            }), Y(b, 1)),
            yc: f,
            qb: h.j(V(function(k, l) {
                return k.ga(l)
            }), Y(b, 1))
        }
    }
    ;function Qv(a) {
        this.C = a;
        this.g = null;
        this.timeout = new P
    }
    function Rv(a, b) {
        Sv(a);
        a.g = a.C.setTimeout(function() {
            return void a.timeout.next()
        }, b)
    }
    function Sv(a) {
        a.g !== null && (a.C.clearTimeout(a.g),
        a.g = null)
    }
    ;function Tv(a, b, c, d) {
        var e = Uv.jf
          , f = new Qv(b);
        c = c.j(W(void 0), X(function() {
            Sv(f);
            return d
        })).j(T(function(g) {
            Sv(f);
            var h = g.K
              , k = g.active;
            h.value >= e || !k || (k = b.now(),
            k = Math.max(0, vr(k, h.timestamp)),
            Rv(f, Math.max(0, e - h.value - k)));
            return g.map(function(l) {
                return l >= e
            })
        }));
        return Hp([c, fq(f.timeout, kp(void 0))]).j(T(function(g) {
            return y(g).next().value
        }), ar(function(g) {
            return !g.ha().value
        }, !0), Y(a, 1))
    }
    ;function Vv(a, b, c, d) {
        var e = d.Wc
          , f = d.Gd
          , g = d.mf
          , h = d.ue
          , k = d.Rd
          , l = d.Ye
          , m = d.Zc;
        d = d.kf;
        b = Wv(a, c, b);
        c = Xv(a, c);
        d = Yv(b, d);
        var q = Zv(a, e, l, b)
          , r = q.j(T(function(F) {
            return F.value
        }), V(), Y(a, 1), Yq(function(F, A) {
            return Math.max(F, A)
        }, 0))
          , v = q.j(T(function(F) {
            return F.value
        }), rv(), Y(a, 1))
          , t = b.j(nv, T(function(F) {
            return F.value
        }), Kq(2), V(), Y(a, 1));
        g = $v(a, b, g, h);
        var w = g.j(W(!1), V(), T(function(F) {
            return F ? k : f
        }));
        h = q.j(pv(w), V(), Y(a, 1));
        var u = Hp([h, b]).j(U(function(F) {
            var A = y(F);
            F = A.next().value;
            A = A.next().value;
            return F.timestamp.equals(A.timestamp)
        }), T(function(F) {
            var A = y(F);
            F = A.next().value;
            A = A.next().value;
            return {
                visible: F.value,
                geometry: A.value.G
            }
        }), Yq(function(F, A) {
            return !A.visible && F.visible ? F : A
        }, {
            visible: !1,
            geometry: Gs
        }), T(function(F) {
            return F.geometry
        }), W(Gs), Y(a, 1), V(Hs));
        l = l instanceof O ? l.j(V(), Jq()) : gq;
        w = Hp([l, w]).j(Jq());
        var C = b.j(U(function(F) {
            return F.value.pa !== "ns" && F.value.ca !== "ns"
        }), Yq(function(F) {
            return F + 1
        }, 0), W(0), Y(a, 1))
          , R = c.j(Jq(!0), W(!1), Y(a, 1));
        R = Hp([m, R]).j(T(function(F) {
            var A = y(F);
            F = A.next().value;
            A = A.next().value;
            return F && !A
        }), Y(a, 1));
        var I = b.j(wv, V())
          , fa = I.j(T(function(F) {
            return F.value
        }), Yq(function(F, A) {
            return Math.max(F, A)
        }, 0), V(), Y(a, 1));
        a = I.j(T(function(F) {
            return F.value
        }), rv(), Y(a, 1));
        return {
            ce: l,
            Ec: w,
            La: {
                Bg: b,
                S: b.j(qv),
                Rc: u.j(V(Hs)),
                visible: h.j(V($u)),
                he: q.j(V($u)),
                Xe: r,
                wg: v,
                we: b.j(hv, V(hb)),
                Og: I,
                rg: fa,
                vg: a,
                Vc: c,
                ka: b.j(T(function(F) {
                    return F.value.ka
                })),
                ia: g,
                Wc: e,
                Zc: m,
                Ne: R,
                Qg: C,
                Vb: t,
                jd: d
            }
        }
    }
    function Xv(a, b) {
        return b.j(U(function() {
            return !1
        }), T(function(c) {
            return c
        }), Dq(function(c) {
            return Bt(new Z(c), a)
        }))
    }
    function Wv(a, b, c) {
        return b.j(jq(gq), Y(a, 1)).j(V(function(d, e) {
            return $u(d, e, jv)
        }), W({
            timestamp: c.now(),
            value: iv
        }), Y(a, 1))
    }
    function Zv(a, b, c, d) {
        c = d.j(vv(c), kv(T(function(e) {
            return Math.round(e * 100) / 100
        })), Y(a, 1));
        return b instanceof Z ? c : Hp([c, b]).j(T(function(e) {
            var f = y(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), V($u), Y(a, 1))
    }
    function $v(a, b, c, d) {
        b = [b.j(T(function(e) {
            return e.value.G.width * e.value.G.height >= 242500
        }))];
        c instanceof O && b.push(c.j(T(function(e) {
            return !!e
        })));
        c = Hp(b);
        return d ? c.j(T(function(e) {
            return e.some(function(f) {
                return f
            })
        }), W(!1), V(), Y(a, 1)) : Bt(new Z(!1), a)
    }
    function Yv(a, b) {
        a = Hp([a, b]).j(T(function(e) {
            var f = y(e);
            e = f.next().value;
            if (f.next().value && e.value.isIntersecting)
                return e.value.We
        }), V());
        var c = a.j(T(function(e) {
            return e === void 0 ? !0 : e
        }), Yq(function(e, f) {
            return e || !f
        }, !1))
          , d = a.j(Yq(function(e, f) {
            return f === void 0 ? e : f ? !1 : e != null ? e : !0
        }, void 0), T(function(e) {
            return !!e
        }));
        return Hp([b, mq(a, c, d)]).j(T(function(e) {
            var f = y(e);
            e = f.next().value;
            var g = y(f.next().value);
            f = g.next().value;
            var h = g.next().value;
            g = g.next().value;
            var k = 0;
            if (!e)
                return 0;
            if (f === void 0)
                return 16;
            f && (k |= 1);
            f || (k |= 2);
            h && (k |= 4);
            g && (k |= 8);
            return k
        }))
    }
    ;var aw = N(yt("data-google-av-itpl"), T(function(a) {
        return Number(a)
    }), T(function(a) {
        return isNaN(a) ? 1 : a
    }));
    var cw = T(bw);
    function bw(a) {
        var b = Number(xt(a, "data-google-av-rs"));
        if (!isNaN(b) && b !== 0)
            return b;
        var c;
        return (a = (c = a.g) == null ? void 0 : c.id) ? a.startsWith("DfaVisibilityIdentifier") ? 6 : a.startsWith("YtKevlarVisibilityIdentifier") ? 15 : a.startsWith("YtSparklesVisibilityIdentifier") ? 17 : a.startsWith("YtKabukiVisibilityIdentifier") ? 18 : 0 : 0
    }
    ;function dw(a, b) {
        return N(yt("data-google-av-metadata"), T(function(c) {
            if (c === null)
                return b(void 0);
            c = c.split("&").map(function(d) {
                return d.split("=")
            }).filter(function(d) {
                return d[0] === a
            });
            if (c.length === 0)
                return b(void 0);
            c = c[0].slice(1).join("=");
            return b(c)
        }))
    }
    ;var ew = {
        nf: "addEventListener",
        qf: "getMaxSize",
        rf: "getScreenSize",
        sf: "getState",
        tf: "getVersion",
        vf: "removeEventListener",
        uf: "isViewable"
    };
    function fw(a, b) {
        this.Fa = null;
        this.hg = new P;
        b = b || this.Rg;
        var c = a.Ld
          , d = !a.Rb;
        if (c && d) {
            var e = a.global.top.mraid;
            if (e) {
                this.Pa = b(e);
                this.Fa = e;
                this.Ua = 3;
                return
            }
        }
        (a = a.global.mraid) ? (this.Pa = b(a),
        this.Fa = a,
        this.Ua = c ? d ? 2 : 1 : 0) : (this.Ua = -1,
        this.Pa = 2)
    }
    n = fw.prototype;
    n.addEventListener = function(a, b) {
        return this.Xb("addEventListener", a, b)
    }
    ;
    n.removeEventListener = function(a, b) {
        return this.Xb("removeEventListener", a, b)
    }
    ;
    n.Oe = function() {
        var a = this.Xb("getVersion");
        return typeof a === "string" ? a : ""
    }
    ;
    n.getState = function() {
        var a = this.Xb("getState");
        return typeof a === "string" ? a : ""
    }
    ;
    function gw(a) {
        a = a.Xb("isViewable");
        return typeof a === "boolean" ? a : !1
    }
    function hw(a) {
        if (a.Fa)
            return a = a.Fa.AFMA_LIDAR,
            typeof a === "string" ? a : void 0
    }
    n.Rg = function(a) {
        return a ? a.IS_GMA_SDK ? Object.values(ew).every(function(b) {
            return typeof a[b] === "function"
        }) ? 0 : 1 : 2 : 1
    }
    ;
    n.Xb = function(a) {
        var b = D.apply(1, arguments);
        if (this.Fa)
            try {
                return this.Fa[a].apply(this.Fa, z(b))
            } catch (c) {
                this.hg.next(a)
            }
    }
    ;
    da.Object.defineProperties(fw.prototype, {
        Ee: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (this.Fa) {
                    var a = this.Fa.AFMA_LIDAR_EXP_1;
                    return a === void 0 ? void 0 : !!a
                }
            },
            set: function(a) {
                this.Fa && (this.Fa.AFMA_LIDAR_EXP_1 = a)
            }
        }
    });
    function iw(a, b) {
        return (new fw(a)).Ua !== -1 ? Bt(new Z(!0), a.A) : b.j(yt("data-google-av-inapp"), T(function(c) {
            return c !== null
        }), Y(a.A, 1))
    }
    ;function jw(a, b) {
        return {
            ya: b.j(yt("data-google-av-adk")),
            qc: b.j(yt("data-google-av-btr"), V(), T(function(c) {
                return c === null ? [] : c.split("|").filter(function(d) {
                    return d !== ""
                })
            })),
            Dd: b.j(yt("data-google-av-cpmav"), V(), T(function(c) {
                return c === null ? [] : c.split("|").filter(function(d) {
                    return d !== ""
                })
            })),
            lb: b.j(yt("data-google-av-vrus"), V(), T(function(c) {
                return c === null ? [] : c.split("|").filter(function(d) {
                    return d !== ""
                })
            })),
            Of: Du(a, b),
            flags: b.j(yt("data-google-av-flags"), V()),
            xb: iw(a, b),
            Od: b.j(dw("cr", function(c) {
                return c === "1"
            }), V()),
            kg: b.j(dw("omid", function(c) {
                return c === "1"
            }), V()),
            Nd: b.j(aw),
            metadata: b.j(yt("data-google-av-metadata")),
            W: b.j(cw),
            wa: b.j(zt),
            Vg: b.j(dw("la", function(c) {
                return c === "1"
            }), V()),
            zb: b.j(yt("data-google-av-turtlex"), T(function(c) {
                return c !== null
            }), V()),
            Qd: b.j(yt("data-google-av-vattr"), T(function(c) {
                return c !== null
            }), V())
        }
    }
    ;function kw(a, b, c, d, e) {
        c = c.j(T(function() {
            return !1
        }));
        d = Hp([e, d]).j(X(function(f) {
            f = y(f).next().value;
            return lw(b, f)
        }));
        return fq(kp(!1), c, d).j(V(), Y(a.A, 1))
    }
    function lw(a, b) {
        return a.j(T(function(c) {
            return b || c === 0 || c === 2
        }))
    }
    ;function mw(a) {
        var b;
        if (b = nw(a))
            b = !ow(a, "abgcp") && !ow(a, "abgc") && !(typeof a.id === "string" && a.id === "abgb") && !(typeof a.id === "string" && a.id === "mys-abgc") && !ow(a, "cbb");
        return b
    }
    function ow(a, b) {
        return a.classList ? a.classList.contains(b) : (" " + a.className + " ").indexOf(" " + b + " ") > -1
    }
    function nw(a) {
        try {
            var b = a.getBoundingClientRect();
            return b && b.height >= 30 && b.width >= 30
        } catch (c) {
            return !1
        }
    }
    function pw(a, b) {
        if (a.g === void 0 || !a.g.children)
            return a;
        for (var c = cb(a.g.children); c.length; ) {
            var d = b ? c.filter(mw) : c.filter(nw);
            if (d.length === 1)
                return new ps(d[0]);
            if (d.length > 1)
                break;
            c = kb(c, function(e) {
                return cb(e.children)
            })
        }
        return a
    }
    function qw(a, b, c, d, e) {
        if (c)
            return {
                Qc: b,
                Eb: kp(null)
            };
        c = b.element.j(T(function(f) {
            a: if (f.g === void 0 || nw(f.g))
                f = {
                    bd: f,
                    Eb: "mue"
                };
            else {
                var g = pw(f, e);
                if (g.g !== void 0 && nw(g.g))
                    f = {
                        bd: g,
                        Eb: "ie"
                    };
                else {
                    if (d || a.Ld)
                        if (g = a.document.querySelector(".GoogleActiveViewInnerContainer")) {
                            f = {
                                bd: new ps(g),
                                Eb: "ce"
                            };
                            break a
                        }
                    f = {
                        bd: f,
                        Eb: "mue"
                    }
                }
            }
            return f
        }), Zq());
        return {
            Qc: {
                Fb: b.Fb,
                element: c.j(T(function(f) {
                    return f.bd
                }))
            },
            Eb: c.j(T(function(f) {
                return f.Eb
            }))
        }
    }
    ;var rw = [33, 32]
      , sw = N(aw, T(function(a) {
        return rw.indexOf(a) >= 0
    }), V());
    function tw(a, b, c, d, e, f) {
        var g = c.j(T(function(k) {
            return k === 9
        }))
          , h = b.element.j(sw);
        c = e.j(U(function(k) {
            return k
        }), X(function() {
            return Hp([g, h])
        }), T(function(k) {
            var l = y(k);
            k = l.next().value;
            return !l.next().value || k
        }), V());
        f = Hp([c, d.j(V()), f]).j(T(function(k) {
            var l = y(k);
            k = l.next().value;
            var m = l.next().value;
            l = l.next().value;
            return qw(a, b, !k, m, l)
        }), Wq(1), up());
        d = f.j(T(function(k) {
            return k.Qc
        }));
        f = f.j(X(function(k) {
            return k.Eb
        }), W(null), V(), Y(a.A, 1));
        return {
            fb: d,
            rc: f
        }
    }
    ;function uw(a) {
        var b = b === void 0 ? !1 : b;
        return N(X(function(c) {
            return Bs(a.document, c, b)
        }), Y(a.A, 1))
    }
    ;function vw(a, b, c, d, e, f) {
        this.xc = b.element.j(uw(a), Y(a.A, 1));
        this.g = kw(a, c, b.element, this.xc, d);
        c = tw(a, b, e, d, this.g, f);
        d = c.rc;
        this.fb = c.fb;
        this.rc = d;
        this.le = fq(Bt(new Z(1), a.A), b.element.j(Kq(1), T(function() {
            return 2
        }), Y(a.A, 1)), this.xc.j(Kq(1), T(function() {
            return 3
        }), Y(a.A, 1)), this.g.j(U(Boolean), Kq(1), T(function() {
            return 0
        }), Y(a.A, 1))).j(ar(function(g) {
            return g !== 0
        }, !0), Y(a.A, 0))
    }
    ;function ww(a) {
        var b = new hr(13);
        if (a.length < 1)
            return {
                chain: Po,
                Bd: Po
            };
        var c = new P
          , d = a[0];
        return {
            chain: a.slice(1).reduce(function(e, f) {
                return e.j(Dq(function(g) {
                    c.next(g);
                    return f
                }))
            }, d).j(Dq(function(e) {
                c.next(e);
                return lp(b)
            }), Uq(new P), up()),
            Bd: c
        }
    }
    ;function xw() {}
    ;function yw(a, b) {
        this.context = a;
        this.i = b
    }
    x(yw, xw);
    yw.prototype.g = function(a, b) {
        var c = this.i.map(function(f) {
            return f.g(a, b)
        })
          , d = ww(c.map(function(f) {
            return f.sb
        }))
          , e = d.Bd.j(zw());
        return {
            sb: d.chain.j(Y(this.context.A, 1)),
            ob: Object.assign.apply(Object, [{
                fe: e,
                Zh: d.Bd
            }].concat(z(c.map(function(f) {
                return f.ob
            }))))
        }
    }
    ;
    function zw() {
        return Yq(function(a, b) {
            b instanceof hr ? a.push(b.g) : a.push(-1);
            return a
        }, [])
    }
    ;function Aw(a, b) {
        return function(c) {
            return function(d) {
                var e = d.j(Uq(new P), up());
                d = c.element.j(V());
                e = e.j(T(function(f) {
                    return f.value
                }));
                return Hp([d, e, b]).j(T(function(f) {
                    var g = y(f);
                    f = g.next().value;
                    var h = g.next().value;
                    g = g.next().value;
                    if (f.g === void 0)
                        var k = {
                            top: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        };
                    else {
                        k = f.g.getBoundingClientRect();
                        var l = kd(f.g, a.global);
                        k = {
                            top: l.y,
                            left: l.x,
                            width: k.width,
                            height: k.height
                        }
                    }
                    k = Js(k, h.xa);
                    l = Is(k, h.ua);
                    var m = a.C.now()
                      , q = Object
                      , r = q.assign;
                    a: if (g !== 2 || a.Rb || l.width <= 0 || l.height <= 0)
                        var v = !1;
                    else {
                        try {
                            var t = a.document;
                            if (t.document && t.document !== null && typeof t.document.elementFromPoint === "function") {
                                var w = t.document.elementFromPoint(l.left + l.width / 2, l.top + l.height / 2);
                                var u = w === null ? null : new ps(w)
                            } else
                                u = null;
                            v = u ? !Bw(u, f) : !1;
                            break a
                        } catch (C) {
                            v = !1;
                            break a
                        }
                        v = void 0
                    }
                    return {
                        timestamp: m,
                        value: r.call(q, {}, h, {
                            ca: "geo",
                            da: v ? iv.da : l,
                            G: k
                        })
                    }
                }), Es(a.A))
            }
        }
    }
    function Bw(a, b, c) {
        c = c === void 0 ? 0 : c;
        return a.g === void 0 || b.g === void 0 ? !1 : a.g === b.g || Rc(b.g, function(d) {
            return d === a.g
        }) ? !0 : b.g.ownerDocument && b.g.ownerDocument.defaultView && b.g.ownerDocument.defaultView === b.g.ownerDocument.defaultView.top ? !1 : c < 10 && b.g.ownerDocument && b.g.ownerDocument.defaultView && b.g.ownerDocument.defaultView.frameElement ? Bw(a, new ps(b.g.ownerDocument.defaultView.frameElement), c + 1) : !0
    }
    ;function Cw(a, b) {
        return a && b === 0 ? 15 : a || b !== 1 ? null : 14
    }
    function Dw(a, b, c) {
        return b instanceof O ? b.j(X(function(d) {
            return (d = Cw(d, c)) ? lp(new hr(d)) : a
        })) : (b = Cw(b.value, c)) ? lp(new hr(b)) : a
    }
    ;function Ew(a, b) {
        var c = a.j(Uq(new P), up());
        return X(function(d) {
            return c.j(b(d))
        })
    }
    ;function Fw(a, b) {
        if (a.Rb)
            return lp(new hr(6));
        var c = new P;
        return fq(kp({}), b, c).j(T(function() {
            return {
                timestamp: a.C.now(),
                value: {
                    pa: "geo",
                    ua: Gw(a),
                    fa: et(a, !0),
                    ka: c,
                    xa: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), Es(a.A))
    }
    function Gw(a) {
        var b = et(a, !1);
        if (!a.Ld || !sd(a.global.parent) || a.global.parent === a.global)
            return b;
        var c = new $s(a.global.parent,a.Ra);
        c.N = a.N;
        c = Gw(c);
        a = a.global.frameElement.getBoundingClientRect();
        return Is(Js(Is(c, a), {
            x: b.left - a.left,
            y: b.top - a.top
        }), b)
    }
    ;function Hw(a, b) {
        this.context = a;
        this.Cb = b
    }
    x(Hw, xw);
    Hw.prototype.g = function(a, b) {
        var c = Ew(Fw(this.context, this.Cb), Aw(this.context, b.W));
        return {
            sb: Dw(a.fb.j(c), b.xb, 0),
            ob: {}
        }
    }
    ;
    function Iw(a, b) {
        this.m = a;
        this.l = b;
        this.i = this.g = null
    }
    function Jw(a, b) {
        b ? a.i || (b = Object.assign({}, a.l, {
            delay: 100,
            trackVisibility: !0
        }),
        a.i = new IntersectionObserver(a.m,b)) : a.g || (a.g = new IntersectionObserver(a.m,a.l))
    }
    function Kw(a, b) {
        a = b ? a.i : a.g;
        if (!a)
            throw new kr;
        return a
    }
    Iw.prototype.observe = function(a, b) {
        Kw(this, a).observe(b)
    }
    ;
    Iw.prototype.unobserve = function(a, b) {
        Kw(this, a).unobserve(b)
    }
    ;
    Iw.prototype.disconnect = function(a) {
        Kw(this, a).disconnect()
    }
    ;
    function Lw(a) {
        return function(b) {
            return b.j(a.ResizeObserver ? Mw(a) : Nw(a), Wq(1), up())
        }
    }
    function Mw(a) {
        return function(b) {
            return b.j(X(function(c) {
                var d = a.ResizeObserver;
                if (!d || c.g === void 0)
                    return kp(iv.G);
                var e = (new O(function(f) {
                    function g() {
                        c.g !== void 0 && h.unobserve(c.g);
                        h.disconnect();
                        k.unsubscribe()
                    }
                    if (c.g === void 0)
                        return f.complete(),
                        function() {}
                        ;
                    var h = new d(function(l) {
                        l.forEach(function(m) {
                            f.next(m)
                        })
                    }
                    );
                    h.observe(c.g);
                    var k = c.i.subscribe(g);
                    return g
                }
                )).j(Tr(a.M, 736), T(function(f) {
                    return f.contentRect
                }));
                return fq(kp(c.g.getBoundingClientRect()), e)
            }), V(Hs))
        }
    }
    function Nw(a) {
        return function(b) {
            var c = b.j(Bu(a, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }))
              , d = a.Ag;
            c = fq(b.j(T(function() {
                return os("resize")
            })), c, d);
            return Hp(b, c).j(Tr(a.M, 737), T(function(e) {
                e = y(e).next().value;
                return e.g === void 0 ? void 0 : e.g.getBoundingClientRect()
            }), Gt(), V(Hs))
        }
    }
    ;function Ow(a, b) {
        var c = Pw(a, b).j(Wq(1), up());
        return function(d) {
            return function(e) {
                e = e.j(X(function(f) {
                    return f.element
                }), V());
                return Hp([c, e]).j(X(function(f) {
                    var g = y(f);
                    f = g.next().value;
                    g = g.next().value;
                    return Qw(a, f.ig, Lw(a), f.yg, d, f.Xf, g)
                }), Es(a.A))
            }
        }
    }
    function Rw(a, b, c) {
        var d = Ow(a, c)(b);
        return function(e) {
            var f = d(kp(e));
            return function(g) {
                return Hp([g, f]).j(T(function(h) {
                    var k = y(h);
                    h = k.next().value;
                    k = k.next().value;
                    var l = Js(k.value.G, h.value.xa)
                      , m = Is(Js(k.value.da, h.value.xa), h.value.ua);
                    return {
                        timestamp: h.timestamp.maximum(k.timestamp),
                        value: Object.assign({}, h.value, {
                            ca: "nio",
                            da: m,
                            G: l
                        })
                    }
                }))
            }
        }
    }
    function Sw(a) {
        return T(function(b) {
            return b.value.pa !== "nio" ? b : Object.assign({}, b, {
                value: Object.assign({}, b.value, {
                    ua: et(a, !0),
                    fa: et(a, !0)
                })
            })
        })
    }
    function Tw(a, b) {
        return kp(b).j(a, T(function() {
            return b
        }))
    }
    function Pw(a, b) {
        return a.C.timeline !== rr ? lp(new hr(2)) : a.MutationObserver ? typeof IntersectionObserver === "undefined" ? lp(new hr(0)) : (new O(function(c) {
            var d = new P
              , e = new Iw(d.next.bind(d),{
                threshold: [].concat(z(b))
            });
            c.next({
                yg: d.j(Tr(a.M, 735)),
                ig: e,
                Xf: function(f) {
                    f = Kw(e, f).takeRecords();
                    f.length > 0 && d.next(f)
                }
            })
        }
        )).j(Kq(1), Wq(1), up()) : lp(new hr(1))
    }
    function Uw(a) {
        return Zo(a.sort(function(b, c) {
            return b.time - c.time
        }), yp)
    }
    function Qw(a, b, c, d, e, f, g) {
        return new O(function(h) {
            function k() {
                t || (t = !0,
                g.g !== void 0 && b.unobserve(e, g.g),
                m.unsubscribe(),
                v.unsubscribe(),
                r.unsubscribe(),
                w.unsubscribe())
            }
            if (g.g !== void 0) {
                Jw(b, e);
                b.observe(e, g.g);
                var l = new Oo({
                    timestamp: a.C.now(),
                    value: Object.assign({}, iv, {
                        pa: "nio",
                        ca: "nio"
                    })
                })
                  , m = d.j(Mp(function(u) {
                    return Uw(u)
                }), U(function(u) {
                    return u.target === g.g
                }), T(function(u) {
                    return {
                        timestamp: new tr(u.time,rr),
                        value: {
                            pa: "nio",
                            ua: u.rootBounds || Gs,
                            fa: u.rootBounds || et(a, !0),
                            ka: q,
                            ca: "nio",
                            da: u.intersectionRect,
                            G: u.boundingClientRect,
                            xa: {
                                x: 0,
                                y: 0
                            },
                            isIntersecting: u.isIntersecting,
                            We: u.isVisible
                        }
                    }
                }), Uq(l), up()).subscribe(h)
                  , q = new P
                  , r = q.subscribe(function() {
                    f(e);
                    h.next({
                        timestamp: a.C.now(),
                        value: l.value.value
                    });
                    g.g !== void 0 && (b.unobserve(e, g.g),
                    b.observe(e, g.g))
                })
                  , v = Tw(c, g).subscribe(function() {
                    q.next()
                })
                  , t = !1
                  , w = g.i.subscribe(function() {
                    return k()
                });
                return k
            }
        }
        )
    }
    ;function Vw(a, b, c) {
        c = c === void 0 ? Ow(a, b) : c;
        this.context = a;
        this.i = c
    }
    x(Vw, xw);
    Vw.prototype.g = function(a, b) {
        var c = this.i(b.lf);
        return {
            sb: Dw(a.fb.j(c, Sw(this.context)), b.xb, 0),
            ob: {}
        }
    }
    ;
    function Ww(a, b, c, d, e) {
        var f = f === void 0 ? new fw(a) : f;
        var g = g === void 0 ? fr(a.C, 500) : g;
        var h = h === void 0 ? fr(a.C, 100) : h;
        e = kp(f).j(Xw(c), br(function(k) {
            d.next(k.Ua)
        }), Yw(a, h), Zw(a), $w(a, e), Wq(1), up());
        f = new P;
        b = fq(kp({}), b, f);
        return e.j(ax(a, f, b, g, c), Y(a.A, 1))
    }
    function $w(a, b) {
        return N(function(c) {
            return Hp([c, b])
        }, Lq(function(c) {
            var d = y(c);
            c = d.next().value;
            return d.next().value !== 9 || gw(c) ? kp(!0) : bx(a, c, "viewableChange").j(U(function(e) {
                return y(e).next().value
            }), Kq(1))
        }), T(function(c) {
            return y(c).next().value
        }))
    }
    function Xw(a) {
        return X(function(b) {
            if (b.Ua === -1)
                return a.next("if"),
                lp(new hr(7));
            if (b.Pa !== 0)
                switch (b.Pa) {
                case 1:
                    return a.next("mm"),
                    lp(new hr(18));
                case 2:
                    return a.next("ng"),
                    lp(new hr(17));
                default:
                    return a.next("i"),
                    lp(new hr(8))
                }
            return kp(b)
        })
    }
    function Yw(a, b) {
        return Lq(function() {
            var c = a.af;
            return zs(a.document) === "complete" ? kp(!0) : c.j(Lq(function() {
                return b
            }))
        })
    }
    function Zw(a) {
        return X(function(b) {
            return b.getState() !== "loading" ? kp(b) : bx(a, b, "ready").j(T(function() {
                return b
            }))
        })
    }
    function ax(a, b, c, d, e) {
        return X(function(f) {
            var g = hw(f);
            if (typeof g !== "string")
                return e.next("nc"),
                lp(new hr(9));
            f.Ee !== void 0 && (f.Ee = !0);
            g = bx(a, f, g, cx);
            var h = {
                version: f.Oe(),
                Ua: f.Ua
            };
            g = g.j(T(function(l) {
                return dx.apply(null, [a, b, f, h].concat(z(l)))
            }));
            var k = d.j(br(function() {
                e.next("mt")
            }), X(function() {
                return lp(new hr(10))
            }));
            g = kq(g, k);
            return Hp([g, c]).j(T(function(l) {
                l = y(l).next().value;
                return Object.assign({}, l, {
                    timestamp: a.C.now()
                })
            }))
        })
    }
    function cx(a, b) {
        return (b === null || typeof b === "number") && (a === null || !!a && typeof a.height === "number" && typeof a.width === "number" && typeof a.x === "number" && typeof a.y === "number")
    }
    function dx(a, b, c, d, e, f) {
        e = e ? {
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height
        } : Gs;
        c = c.Xb("getMaxSize");
        var g = c != null && typeof c.width === "number" && typeof c.height === "number" ? c : {
            width: 0,
            height: 0
        };
        c = {
            left: 0,
            top: 0,
            width: -1,
            height: -1
        };
        if (g) {
            var h = Number(String(g.width));
            g = Number(String(g.height));
            c = isNaN(h) || isNaN(g) ? c : {
                left: 0,
                top: 0,
                width: h,
                height: g
            }
        }
        a = {
            value: {
                ua: e,
                fa: c,
                pa: "mraid",
                ka: b,
                xa: {
                    x: 0,
                    y: 0
                }
            },
            timestamp: a.C.now()
        };
        return Object.assign({}, a, d, {
            xh: f
        })
    }
    function bx(a, b, c, d) {
        d = d === void 0 ? function() {
            return !0
        }
        : d;
        return (new O(function(e) {
            var f = a.M.bc(745, function() {
                e.next(D.apply(0, arguments))
            });
            b.addEventListener(c, f);
            return function() {
                b.removeEventListener(c, f)
            }
        }
        )).j(U(function(e) {
            return d.apply(null, z(e))
        }))
    }
    ;function ex(a, b) {
        this.context = a;
        this.Cb = b
    }
    x(ex, xw);
    ex.prototype.g = function(a, b) {
        var c = new np(1)
          , d = new np(1)
          , e = Ew(Ww(this.context, this.Cb, c, d, b.W), Aw(this.context, b.W));
        return {
            sb: Dw(a.fb.j(e), b.xb, 1),
            ob: {
                Wd: c.j(Y(this.context.A, 1)),
                Xd: d.j(Y(this.context.A, 1))
            }
        }
    }
    ;
    function fx(a) {
        return ["backgrounded", "notFound", "hidden", "noOutputDevice"].includes(a)
    }
    ;function gx(a, b) {
        var c = c === void 0 ? null : c;
        var d = new P
          , e = void 0
          , f = a.Me
          , g = d.j(T(function() {
            return e ? Object.assign({}, e, {
                timestamp: a.C.now()
            }) : null
        }), U(function(k) {
            return k !== null
        }), T(function(k) {
            return k
        }));
        b = Hp([fq(f, g), b]);
        var h = c;
        return b.j(U(function(k) {
            k = y(k).next().value;
            h === null && (h = k.value.adSessionId);
            return k.value.adSessionId === h
        }), br(function(k) {
            return void (e = y(k).next().value)
        }), T(function(k) {
            var l = y(k);
            k = l.next().value;
            l = l.next().value;
            try {
                var m = k.value.data, q = k.timestamp, r = m.viewport, v, t, w = Object.assign({}, r, {
                    width: (v = r == null ? void 0 : r.width) != null ? v : 0,
                    height: (t = r == null ? void 0 : r.height) != null ? t : 0,
                    x: 0,
                    y: 0,
                    Th: r ? r.width * r.height : 0
                }), u = hx(w), C = m.adView, R = C.measuringElement && C.containerGeometry ? hx(C.containerGeometry) : hx(C.geometry), I = hx(C.geometry), fa = C.reasons.some(fx), F = fa ? Gs : hx(C.onScreenGeometry), A;
                l && (A = C.percentageInView / 100);
                l && fa && (A = 0);
                return {
                    timestamp: q,
                    value: {
                        pa: "omid",
                        ua: R,
                        fa: u,
                        ka: d,
                        ca: "omid",
                        G: I,
                        xa: {
                            x: R.left,
                            y: R.top
                        },
                        da: F,
                        Uc: A
                    }
                }
            } catch (Ld) {
                var Q, Tc;
                m = (Tc = (Q = Ld) == null ? void 0 : Q.message) != null ? Tc : "An unknown error occurred";
                Q = "Error while processing geometryChange event: " + JSON.stringify(k.value) + "; " + m;
                throw Error(Q);
            }
        }), Wq(1), up())
    }
    function hx(a) {
        var b, c, d, e;
        return {
            left: Math.floor((b = a == null ? void 0 : a.x) != null ? b : 0),
            top: Math.floor((c = a == null ? void 0 : a.y) != null ? c : 0),
            width: Math.floor((d = a == null ? void 0 : a.width) != null ? d : 0),
            height: Math.floor((e = a == null ? void 0 : a.height) != null ? e : 0)
        }
    }
    ;function ix(a, b, c, d) {
        c = c === void 0 ? gq : c;
        var e = a.A;
        if (b === null)
            return lp(new hr(20));
        if (!b.validate())
            return lp(new hr(21));
        var f;
        d = jx(e, b, d).j(T(function(g) {
            var h = g.value;
            g = g.timestamp;
            var k = b.C
              , l = a.C;
            if (k.timeline !== g.timeline)
                throw new mr;
            g = new tr(g.value - k.now().value + l.now().value,l.timeline);
            return f = {
                value: h,
                timestamp: g
            }
        }));
        return fq(d, c.j(T(function() {
            return f
        }))).j(U(function(g) {
            return g !== void 0
        }), T(function(g) {
            return g
        }), Y(a.A, 1))
    }
    function jx(a, b, c) {
        return gx(b, c).j(Y(a, 1), T(function(d) {
            return {
                timestamp: d.timestamp,
                value: {
                    xa: {
                        x: d.value.G.left,
                        y: d.value.G.top
                    },
                    ua: d.value.da,
                    fa: d.value.fa,
                    pa: d.value.ca,
                    ka: d.value.ka
                }
            }
        }))
    }
    ;function kx(a, b, c) {
        this.na = a;
        this.L = b;
        this.Cb = c
    }
    x(kx, xw);
    kx.prototype.g = function(a, b) {
        var c = b.W;
        b = ix(this.L, this.na, this.Cb, b.Ze);
        c = Ew(b, Aw(this.L, c));
        return {
            sb: a.fb.j(c),
            ob: {}
        }
    }
    ;
    function lx(a, b, c) {
        this.na = a;
        this.L = b;
        this.i = c
    }
    x(lx, xw);
    lx.prototype.g = function(a, b) {
        var c = ix(this.L, this.na, void 0, b.Ze);
        b = Rw(this.L, b.lf, this.i);
        c = Ew(c, b);
        return {
            sb: a.fb.j(c),
            ob: {}
        }
    }
    ;
    function mx(a) {
        return a.document.l.j(T(function(b) {
            return b === "visible"
        }), V(), Y(a.A, 1))
    }
    ;function nx(a, b, c) {
        var d;
        return b.j(V(), X(function(e) {
            return c.j(T(function() {
                if (!d) {
                    d = !0;
                    try {
                        e.next()
                    } finally {
                        d = !1
                    }
                }
                return !0
            }))
        }), W(!1), Y(a.A, 1))
    }
    ;function ox(a, b) {
        a.Qa && (a.Db = a.Qa);
        a.Qa = b;
        a.Db && a.Db.value ? (b = Math.max(0, vr(b.timestamp, a.Db.timestamp)),
        a.totalTime += b,
        a.za += b) : a.za = 0;
        return a
    }
    function px() {
        return N(Yq(ox, {
            totalTime: 0,
            za: 0
        }), T(function(a) {
            return a.totalTime
        }))
    }
    function qx() {
        return N(Yq(ox, {
            totalTime: 0,
            za: 0
        }), T(function(a) {
            return a.za
        }))
    }
    ;function rx() {
        var a;
        return N(br(function(b) {
            return void (a = b.timestamp)
        }), qx(), T(function(b) {
            return {
                timestamp: a,
                value: Math.round(b)
            }
        }))
    }
    ;function sx() {
        return N(qx(), Yq(function(a, b) {
            return Math.max(a, b)
        }, 0), T(function(a) {
            return Math.round(a)
        }))
    }
    ;function tx(a) {
        return N(pv(kp(a)), sx())
    }
    ;function ux(a) {
        return N(kv(T(function(b) {
            return ov(b, a)
        })), px(), T(function(b) {
            return Math.round(b)
        }))
    }
    ;function vx(a, b, c, d, e) {
        var f = Pv;
        if (f.length > 1)
            for (var g = 0; g < f.length - 1; g++)
                if (f[g] < f[g + 1])
                    throw Error();
        g = e.j(W(void 0), X(function() {
            return c.j(rx())
        }), V(), Y(a, 1));
        e = e.j(W(void 0), X(function() {
            return c.j(sx())
        }), V(), Y(a, 1));
        return {
            jb: d.j(W(void 0), X(function() {
                return b.j(T(function(h) {
                    return {
                        timestamp: h.timestamp,
                        value: !0
                    }
                }), px())
            }), V(), Y(a, 1)),
            kb: d.j(W(void 0), X(function() {
                return b.j(T(function(h) {
                    return {
                        timestamp: h.timestamp,
                        value: h.value === 0
                    }
                }), px())
            }), V(), Y(a, 1)),
            zc: d.j(W(void 0), X(function() {
                return b.j(Ev(tx, f))
            }), V(hb), Y(a, 1)),
            oa: d.j(W(void 0), X(function() {
                return b.j(Ev(ux, f), T(function(h) {
                    return h.map(function(k, l) {
                        return l > 0 ? k - h[l - 1] : k
                    })
                }))
            }), V(hb), Y(a, 1)),
            yc: e,
            qb: g.j(V($u), Y(a, 1))
        }
    }
    ;function wx(a, b) {
        var c = this;
        this.C = a;
        this.i = this.g = null;
        this.l = b.j(V()).subscribe(function(d) {
            xx(c);
            c.i = d
        })
    }
    function yx(a, b) {
        xx(a);
        a.g = a.C.setTimeout(function() {
            var c;
            return void ((c = a.i) == null ? void 0 : c.next())
        }, b)
    }
    function xx(a) {
        a.g !== null && a.C.clearTimeout(a.g);
        a.g = null
    }
    wx.prototype.dispose = function() {
        xx(this);
        this.l.unsubscribe();
        this.i = null
    }
    ;
    function zx(a, b, c, d, e) {
        var f = Uv.jf;
        var g = g === void 0 ? new wx(b,d) : g;
        return (new O(function(h) {
            var k = c.j(W(void 0), X(function() {
                return Ax(e)
            })).j(T(function(l) {
                var m = l.value;
                l = l.timestamp;
                var q = m.visible;
                m = m.qb;
                var r = m >= f;
                r || !q ? xx(g) : (l = Math.max(0, vr(b.now(), l)),
                yx(g, Math.max(0, f - m - l)));
                return r
            }), Yq(function(l, m) {
                return m || l
            }, !1), V()).subscribe(h);
            return function() {
                g.dispose();
                k.unsubscribe()
            }
        }
        )).j(ar(function(h) {
            return !h
        }, !0), Y(a, 1))
    }
    function Ax(a) {
        return Dv([a, a.j(rx())]).j(T(function(b) {
            var c = y(b);
            b = c.next().value;
            c = c.next().value;
            return {
                timestamp: b.timestamp,
                value: {
                    visible: b.value,
                    qb: c.value
                }
            }
        }), V(function(b, c) {
            return $u(b, c, function(d, e) {
                return d.qb === e.qb && d.visible === e.visible
            })
        }))
    }
    ;function Bx(a, b, c) {
        var d = c.j(T(function(e) {
            return {
                value: e,
                timestamp: a.C.now()
            }
        }), V($u));
        return b instanceof O ? b.j(V(), X(function(e) {
            return e ? Bt(new Z({
                value: !1,
                timestamp: a.C.now()
            }), a.A) : d
        })) : b.value === !1 ? d : new Z(!1)
    }
    function Cx(a, b, c, d, e, f, g) {
        var h = Uv;
        b = b instanceof O ? b.j(W(!1), V()) : b;
        var k = !(vd() || ud());
        c = Bx(a, c, d);
        a = g.fb.j(Ou(a.A));
        return Object.assign({}, h, {
            Wc: c,
            mf: e,
            ue: k,
            Ye: b,
            Zc: a,
            kf: f
        })
    }
    ;function Dx(a) {
        var b = b === void 0 ? {} : b;
        this.i = a;
        this.config = {
            maxAdKeys: b.maxAdKeys || 50,
            maxHourlyEvents: b.maxHourlyEvents || 2,
            maxDailyEvents: b.maxDailyEvents || 2,
            maxWeeklyEvents: b.maxWeeklyEvents || 2
        };
        a: {
            if (a = this.i.getItem("adStatsCache"))
                try {
                    var c = new Map(JSON.parse(a));
                    break a
                } catch (d) {
                    this.i.reportError(d)
                }
            c = new Map
        }
        this.g = c
    }
    function mu(a) {
        try {
            var b = JSON.stringify(Array.from(a.g.entries()));
            a.i.setItem("adStatsCache", b)
        } catch (c) {
            a.i.reportError(c)
        }
    }
    function nu(a, b, c) {
        var d = a.g.get(b) || {
            h: {},
            d: {},
            w: {}
        }
          , e = d.h
          , f = new Date;
        f.setMinutes(0, 0, 0);
        Ex(e, Math.floor(f.getTime() / 1E3).toString(), c, a.config.maxHourlyEvents);
        e = d.d;
        f = new Date;
        f.setHours(0, 0, 0, 0);
        Ex(e, Math.floor(f.getTime() / 1E3).toString(), c, a.config.maxDailyEvents);
        e = d.w;
        f = new Date;
        f = new Date(f.setDate(f.getDate() - f.getDay()));
        f.setHours(0, 0, 0, 0);
        Ex(e, Math.floor(f.getTime() / 1E3).toString(), c, a.config.maxWeeklyEvents);
        a.g.has(b) ? a.g.delete(b) : a.g.size >= a.config.maxAdKeys && a.g.size >= a.config.maxAdKeys && (c = a.g.keys().next().value,
        a.g.delete(c));
        d.ts = Date.now();
        a.g.set(b, d);
        mu(a)
    }
    function Ex(a, b, c, d) {
        a[b] ? (a[b].c += c.c,
        a[b].cTos += c.cTos,
        a[b].v += c.v) : a[b] = {
            c: c.c,
            cTos: c.cTos,
            v: c.v
        };
        b = Object.keys(a);
        b.length > d && delete a[b[0]]
    }
    ;function Fx(a) {
        this.F = eg(a, void 0, void 0, 2048)
    }
    x(Fx, Uh);
    var Gx = function(a) {
        return function(b) {
            return wi(b, a)
        }
    }([0, Ti, -1, Qi, -3]);
    function Hx(a) {
        this.L = a
    }
    Hx.prototype.reportError = function(a) {
        var b = this.L;
        var c = new Fx;
        c = Pg(c, 3, a.name);
        c = Qg(c, 2, 1);
        c = Pg(c, 4, a.message);
        c = Pg(c, 5, a.stack);
        c = Pg(c, 6, String(b.M.ge));
        switch (a.name) {
        case "SecurityError":
            Qg(c, 1, 2);
            break;
        case "QuotaExceededError":
            Qg(c, 1, 1);
            break;
        case "SyntaxError":
            Qg(c, 1, 3);
            break;
        default:
            Qg(c, 1, 0)
        }
        a = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=omakase&proto=" + encodeURIComponent(ge(Gx(c))) + "&v=unreleased";
        b.N.O(a, {
            ja: "GET"
        }).sendNow()
    }
    ;
    Hx.prototype.setItem = function(a, b) {
        try {
            bt(this.L) && this.L.localStorage.setItem(a, b)
        } catch (c) {
            this.reportError(c)
        }
    }
    ;
    Hx.prototype.getItem = function(a) {
        try {
            if (bt(this.L))
                return this.L.localStorage.getItem(a)
        } catch (b) {
            this.reportError(b)
        }
        return null
    }
    ;
    Hx.prototype.hasLocalStorageAccess = function() {
        return bt(this.L)
    }
    ;
    function Ix(a) {
        this.F = eg(a, void 0, void 0, 2048)
    }
    x(Ix, Uh);
    function Jx(a, b) {
        return Pg(a, 1, b)
    }
    ;var Uv = Object.freeze({
        jf: 1E3,
        Gd: .5,
        Rd: .3
    })
      , Pv = Object.freeze([1, .75, Uv.Gd, Uv.Rd, 0]);
    function Kx(a, b, c, d, e) {
        this.B = a;
        this.g = void 0;
        this.o = b;
        this.oc = c;
        this.Mc = d;
        this.Nc = e;
        this.Ka = 2;
        this.name = "rxlidar";
        this.u = new np;
        this.controlledEvents = [];
        this.subscribedEvents = [];
        this.l = new np;
        this.i = new np;
        this.controlledEvents.push(this.oc, this.Mc, this.Nc);
        this.subscribedEvents.push(this.o)
    }
    n = Kx.prototype;
    n.start = function(a) {
        if (this.m === void 0 && a.L) {
            var b;
            if ((b = this.g) != null)
                var c = b;
            else {
                b = a.L;
                var d = (c = a.na) != null ? c : null;
                c = {
                    Uf: .01,
                    tg: fr(b.C, 36E5),
                    Cb: b.C.Ma(100).j(Y(b.A, 1)),
                    na: d
                }
            }
            this.g = c;
            a = a.L;
            this.m = Lx(a, this.l.j(Y(a.A, 1)), this.g.Uf, this.g.tg, this.g.Cb, this.g.na, this.i.j(W(!1), Y(a.A, 1)), this.oc, this.Mc, this.Nc, this.Ka).subscribe(this.u)
        }
    }
    ;
    n.dispose = function() {
        this.l.complete();
        this.i.complete();
        var a;
        (a = this.m) == null || a.unsubscribe();
        this.m = void 0
    }
    ;
    n.Kd = function(a, b, c, d, e) {
        var f;
        (f = !rg(b, Dg, 2)) || (f = Eg(b, Dg, 2),
        f = Jg(f, 4, !0));
        if (f) {
            this.l.next(Object.assign({}, this.B.Ae.get(a), {
                metadata: b,
                experimentState: c,
                ai: a,
                Ya: d
            }));
            var g, h;
            e((h = (g = Eg(b, Dg, 2)) == null ? void 0 : Kg(g, 6)) != null ? h : -1)
        }
    }
    ;
    n.Ob = function() {}
    ;
    n.handleEvent = function(a, b) {
        b === this.o && (this.i.next(!0),
        this.i.complete())
    }
    ;
    function Lx(a, b, c, d, e, f, g, h, k, l, m) {
        var q = mx(a).j(T(function(t) {
            return !t
        }))
          , r = new yw(a,[new Vw(a,Pv), new Hw(a,e), new lx(f,a,Pv), new kx(f,a,e), new ex(a,e)]);
        e = vu(wu(), Gu);
        var v = new Dx(new Hx(a));
        return hu(a, b, function(t, w) {
            var u = jw(t, w.element)
              , C = u.ya
              , R = u.qc
              , I = u.Dd
              , fa = u.lb
              , F = u.Of
              , A = u.xb
              , Q = u.kg
              , Tc = u.Nd
              , Ld = u.Od
              , Uc = u.W
              , pc = u.wa
              , Ta = u.Vg
              , Yp = u.zb;
            u = u.Qd;
            var ah, $a = (ah = Nt(Cg(w.metadata))) != null ? ah : "", uy = Pt(Cg(w.metadata));
            ah = Vh(Jx(new Ix, atob($a)));
            $a = Bt(new Z(w.experimentState), t.A);
            var Zp = new Z(new xr(t,new gs(t)))
              , $p = $a.j(T(function(E) {
                return E.fetchLaterBeacons
            }), W(!1), V(), Y(t.A, 1))
              , vy = $p.j(T(function(E) {
                return E && (new as(t)).T({
                    Fe: !0
                })
            }), br(function(E) {
                E && Zp.value.O("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fetch&later&start&control&fle=1&sfl=1").sendNow()
            }))
              , Xe = $a.j(T(function(E) {
                return E.shouldIgnoreAdChoicesIcon
            }))
              , Ua = A.j(Gq(Q), T(function(E) {
                var rb = y(E);
                E = rb.next().value;
                rb = rb.next().value;
                return E || rb || Vj()
            }));
            Q = new vw(t,w,F,A,Uc,Xe);
            Xe = $a.j(T(function(E) {
                return E.considerOmidZOrderOcclusions
            }));
            var Vc, Hb = (Vc = Ot(Cg(w.metadata))) != null ? Vc : !1;
            Vc = r.g(Q, {
                xb: A,
                lf: Hb,
                W: Uc,
                Ze: Xe
            });
            var fb = Vc.sb
              , Ye = Vc.ob;
            Vc = Ye.Wd;
            Xe = Ye.Xd;
            Ye = Ye.fe;
            Hb = Bt(new Z(Hb), t.A);
            var Wc = Cx(t, Ld, Ua, q, Ta, Hb, Q);
            Ta = Vv(t.A, t.C, fb, Wc);
            Ua = vx(t.A, Ta.La.he, Ta.La.visible, Ta.ce, Ta.Ec);
            Hb = zx(t.A, t.C, Ta.Ec, Ta.La.ka, Ta.La.visible);
            fb = xv(t.A, t.C, fb, Wc);
            Wc = Ov(t.C, t.A, fb.La.he, fb.La.visible, fb.ce, fb.Ec);
            var bh = {
                ld: Tv(t.A, t.C, fb.Ec, Wc.yc)
            }
              , uk = $a.j(T(function(E) {
                return E.extrapolators
            }), W(!1));
            fb = Nu(t.A, uk, Object.assign({}, fb.La, Wc, bh), Object.assign({}, Ta.La, {
                ld: gv(t, Hb),
                zc: gv(t, Ua.zc),
                oa: gv(t, Ua.oa),
                yc: gv(t, Ua.yc),
                qb: Ua.qb.j(T(function(E) {
                    return new fv(t.C,E)
                })),
                jb: gv(t, Ua.jb),
                kb: gv(t, Ua.kb)
            }));
            Ua = Xu(t, d.j(Jq("t")));
            Hb = (f !== null && f.validate() ? f.Ig : gq).j(Y(t.A, 1), Jq("u"));
            Ua = kq(Ua, Hb);
            var aq = Ua.j(U(function(E) {
                return E !== null
            }));
            Hb = $a.j(T(function(E) {
                return E.shouldCacheTimeMetricsInLocalStorage && uy
            }), V(), Y(t.A, 1)).j(T(function(E) {
                return E && bt(t) && !t.Rb
            }), Y(t.A, 1));
            Wc = $a.j(T(function(E) {
                return E.omakaseAdStatsResetVersion
            }), V(), Y(t.A, 1));
            var wy = t.C.Ma(4E3).j(Gq(q), U(function(E) {
                E = y(E);
                E.next();
                return !E.next().value
            }), T(function(E) {
                return y(E).next().value
            }), Y(t.A, 1));
            bh = Hb.j(X(function(E) {
                return E ? fq(aq, wy) : aq
            }), Y(t.A, 1));
            uk = nx(t, fb.ka, bh);
            var bq = Mx(t, Q, C)
              , zy = Nx(t, Ua, w.element)
              , Ay = bq.Bf.j(W({
                x: 0,
                y: 0
            }))
              , By = $a.j(T(function(E) {
                return E.rxlidarStatefulBeacons
            }), W(!1), V(), br(function(E) {
                ks = E
            }), Y(t.A, 1))
              , cq = Tc.j(T(function(E) {
                return E === 40 || E === 41 || E === 42
            }))
              , Cy = $a.j(T(function(E) {
                return E.waitForImpressionColleague
            }), W(!1), V(), Y(t.A, 1))
              , Dy = b.j(T(function(E) {
                var rb;
                return E.experimentState.addQueryIdToErrorPing ? (rb = Eg(E.metadata, Wt, 3)) == null ? void 0 : Pf(ng(rb, 1)) : void 0
            }));
            return Object.assign({}, {
                N: new Z(t.N),
                Sb: new Z("lidar2"),
                Mg: new Z("lidartos"),
                Ef: new Z("unreleased"),
                Ka: new Z(m),
                Cd: new Z(t.validate() ? null : new ir),
                If: new Z(As(t.document)),
                ea: new Z(ru),
                Fd: Ua,
                hf: Ua,
                Uh: uk,
                vc: g,
                Ug: Cy,
                ug: bh,
                cf: Hb,
                Dg: Wc,
                Ya: new Z(w.Ya),
                oc: new Z(h),
                Mc: new Z(k),
                Nc: new Z(l),
                Nf: new Z(t.Rb ? 1 : void 0),
                Pf: new Z(t.Ff ? 1 : void 0),
                xb: A,
                zb: Yp,
                ie: new Z(ah),
                Wb: Yp.j(U(function(E) {
                    return E
                }), T(function() {
                    return t.Wb.bind(t)
                })),
                Wd: Vc.j(Y(t.A, 1)),
                Xd: Xe.j(Y(t.A, 1)),
                Vf: $a.j(T(function(E) {
                    return E.extraPings
                })),
                Se: By,
                cg: $p,
                ff: vy,
                Qd: u,
                jg: cq,
                dg: $a.j(T(function(E) {
                    return E.dedicatedViewableAttributionPing
                })),
                Wf: Zp,
                gf: new Z(ks && (new js(t)).T({
                    ja: "GET"
                })),
                Jg: new Z(Number(w.experimentState.useReachIntegrationSharedStorage) << Number(w.experimentState.useReachIntegrationPolyfill) << 1 + Number(w.experimentState.sendBrowserIdInsteadOfVPID) << 2),
                Jf: w.element.j(T(function(E) {
                    return E !== null
                })),
                wb: pc,
                Ng: pc,
                Dd: I.j(W([])),
                lb: fa.j(W([])),
                ag: I.j(T(function(E) {
                    return E.length > 0 ? !0 : null
                }), W(null), V()),
                qc: R.j(W([]), Y(t.A, 1)),
                Bh: $a,
                shouldSendExplicitDisplayMeasurablePing: $a.j(T(function(E) {
                    return E.shouldSendExplicitDisplayMeasurablePing
                })),
                ya: C,
                rc: Q.rc,
                Nd: Tc.j(W(0), Y(t.A, 1)),
                sg: F,
                W: Uc.j(W(0), Y(t.A, 1)),
                Gb: cq.j(T(function(E) {
                    return E ? Lu : qu
                })),
                cc: new Z(Mu),
                Od: Ld,
                Te: Q.xc.j(Ou(t.A)),
                le: Q.le
            }, fb, {
                Rc: Hp([fb.Rc, Ay]).j(T(function(E) {
                    var rb = y(E);
                    E = rb.next().value;
                    rb = rb.next().value;
                    return Js(E, rb)
                }), V(Hs))
            }, bq, {
                Fc: bu(t),
                bg: zy,
                fe: Ye,
                jd: Ta.La.jd,
                Gf: new Z(new Hu),
                escapedQueryId: Dy
            })
        }, pu(a, "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&bin=" + m + "&v=unreleased", c), uu(e, ju, su, lu(v)))
    }
    function Mx(a, b, c) {
        var d = d === void 0 ? Ia : d;
        var e, f;
        d = ((e = d.performance) == null ? void 0 : (f = e.timing) == null ? void 0 : f.navigationStart) || 0;
        return Object.assign({}, {
            Af: new Z(d),
            zf: Wu(a, b)
        }, Vu(a, b, c))
    }
    function Nx(a, b, c) {
        return b.j(U(function(d) {
            return d !== null
        }), X(function() {
            return c
        }), T(function(d) {
            var e = Et(a);
            return e.length > 0 && e.indexOf(d) >= 0
        }), T(function(d) {
            return !d
        }))
    }
    ;function Ox(a) {
        var b = b === void 0 ? [] : b;
        var c = c === void 0 ? [a] : c;
        this.l = a;
        this.subscribedEvents = b;
        this.controlledEvents = c;
        this.name = "impression";
        this.g = new Map
    }
    n = Ox.prototype;
    n.start = function(a) {
        this.i = a
    }
    ;
    n.dispose = function() {
        this.g.clear()
    }
    ;
    n.Kd = function(a, b, c, d) {
        if (b = this.i)
            c = new Px(b,c,this.l,d),
            this.g.set(a, c)
    }
    ;
    n.Ob = function(a) {
        this.g.delete(a)
    }
    ;
    n.handleEvent = function() {}
    ;
    function Px(a, b, c, d) {
        var e = this;
        this.context = a;
        this.B = c;
        this.u = function() {}
        ;
        this.o = [];
        this.l = "&avradf=1";
        this.m = ot([]);
        this.i = new np;
        c = a.na;
        var f = c !== null && (c == null ? void 0 : c.validate()), g, h = (g = a.L) == null ? void 0 : g.A;
        this.i.j(W(!b.waitForImpressionColleague), Y(h, 1));
        this.D = f ? c == null ? void 0 : c.Re.j(Kq(1), Jq(!0), W(!1)) : Bt(new Z(!0), h);
        this.u = function(k, l) {
            e.i.next(!0);
            e.i.complete();
            Hp([e.i, e.D]).subscribe(function(m) {
                var q = y(m);
                m = q.next().value;
                q = q.next().value;
                if (!q)
                    return gq;
                m && q && d(e.B, k, l);
                return !0
            })
        }
        ;
        this.init(a.L)
    }
    Px.prototype.init = function(a) {
        var b = this;
        this.g = a.global.document;
        this.o.push(Qx(this));
        var c = {};
        this.m = ot(this.o);
        this.m.then(function() {
            b.l = "&vis=" + pd(b.g) + "&uach=0&ms=0";
            c.paramString = b.l;
            c.view_type = "DELAYED_IMPRESSION";
            b.u(c, function() {})
        })
    }
    ;
    function Qx(a) {
        return new mt(function(b) {
            var c = qd(a.g);
            if (c)
                if (pd(a.g) === 3) {
                    var d = function() {
                        od(a.g, c, d);
                        b(!0)
                    };
                    nd(a.g, c, d)
                } else
                    b(!0)
        }
        )
    }
    ;function Rx(a) {
        var b = ft(a);
        return b ? b.j(T(function(c) {
            var d;
            c = (d = Fg(c).find(function(f) {
                return Pf(ng(f, 1)) === "Google Chrome"
            })) == null ? void 0 : Pf(ng(d, 2));
            if (!c)
                return !1;
            var e;
            return ((e = y(c.split(".").map(function(f) {
                return Number(f)
            })).next().value) != null ? e : 0) >= 121
        })) : Bt(Ct, a.A)
    }
    ;function Sx(a, b) {
        b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=reach&proto=" + encodeURIComponent(ge(b.g()));
        a.N.O(b, {
            ja: "GET"
        }).sendNow()
    }
    ;function Tx(a) {
        return [{
            Mb: 2,
            Dc: !1,
            sc: !0,
            filterIds: Ux(a == null ? void 0 : a.productionFilterIds)
        }, {
            Mb: 2,
            Dc: !0,
            sc: !0,
            filterIds: Ux(a == null ? void 0 : a.testFilterIds)
        }, {
            Mb: 2,
            Dc: !1,
            sc: !1,
            filterIds: Ux(a == null ? void 0 : a.testFilterIds)
        }]
    }
    function Ux(a) {
        if (a !== void 0 && typeof BigInt === "function")
            return a.map(function(b) {
                return BigInt(b)
            })
    }
    ;function Vx(a) {
        this.F = eg(a, void 0, void 0, 2048)
    }
    x(Vx, Uh);
    function Wx(a, b) {
        return Qg(a, 1, b)
    }
    function Xx(a, b) {
        return Pg(a, 2, b)
    }
    function Yx(a, b) {
        return Pg(a, 3, b)
    }
    ;Vx.prototype.g = Xi([0, Ti, Qi, -1, Ti, -2, Qi, -1, Li, Qi, Ut, Ui, Li]);
    function Zx(a) {
        this.context = a;
        this.g = []
    }
    function $x(a, b) {
        Da(function(c) {
            if (c.g == 1)
                return c.sa(2),
                c.i(b(), 4);
            if (c.g != 2)
                return c.return(c.l);
            c.X();
            a.flush();
            return c.Y(0)
        })
    }
    Zx.prototype.flush = function() {
        if (!(this.g.length <= 0)) {
            var a = new Vx;
            Wx(a, 9);
            var b = Tx().length;
            pg(a, 13, Ff(b));
            Ig(a, 12, this.g);
            this.g.splice(0);
            Sx(this.context, a)
        }
    }
    ;
    function ay() {
        this.blockSize = -1
    }
    ;function by(a, b) {
        this.blockSize = -1;
        this.blockSize = 64;
        this.m = Ia.Uint8Array ? new Uint8Array(this.blockSize) : Array(this.blockSize);
        this.l = this.i = 0;
        this.g = [];
        this.u = a;
        this.o = b;
        this.B = Ia.Int32Array ? new Int32Array(64) : Array(64);
        cy === void 0 && (Ia.Int32Array ? cy = new Int32Array(dy) : cy = dy);
        this.reset()
    }
    Oa(by, ay);
    for (var ey = [], fy = 0; fy < 63; fy++)
        ey[fy] = 0;
    var gy = [].concat(128, ey);
    by.prototype.reset = function() {
        this.l = this.i = 0;
        this.g = Ia.Int32Array ? new Int32Array(this.o) : cb(this.o)
    }
    ;
    function hy(a) {
        for (var b = a.m, c = a.B, d = 0, e = 0; e < b.length; )
            c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3],
            e = d * 4;
        for (b = 16; b < 64; b++)
            d = c[b - 15] | 0,
            e = c[b - 2] | 0,
            c[b] = ((c[b - 16] | 0) + ((d >>> 7 | d << 25) ^ (d >>> 18 | d << 14) ^ d >>> 3) | 0) + ((c[b - 7] | 0) + ((e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10) | 0) | 0;
        b = a.g[0] | 0;
        d = a.g[1] | 0;
        e = a.g[2] | 0;
        for (var f = a.g[3] | 0, g = a.g[4] | 0, h = a.g[5] | 0, k = a.g[6] | 0, l = a.g[7] | 0, m = 0; m < 64; m++) {
            var q = ((b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10)) + (b & d ^ b & e ^ d & e) | 0
              , r = (l + ((g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7)) | 0) + (((g & h ^ ~g & k) + (cy[m] | 0) | 0) + (c[m] | 0) | 0) | 0;
            l = k;
            k = h;
            h = g;
            g = f + r | 0;
            f = e;
            e = d;
            d = b;
            b = r + q | 0
        }
        a.g[0] = a.g[0] + b | 0;
        a.g[1] = a.g[1] + d | 0;
        a.g[2] = a.g[2] + e | 0;
        a.g[3] = a.g[3] + f | 0;
        a.g[4] = a.g[4] + g | 0;
        a.g[5] = a.g[5] + h | 0;
        a.g[6] = a.g[6] + k | 0;
        a.g[7] = a.g[7] + l | 0
    }
    by.prototype.update = function(a, b) {
        b === void 0 && (b = a.length);
        var c = 0
          , d = this.i;
        if (typeof a === "string")
            for (; c < b; )
                this.m[d++] = a.charCodeAt(c++),
                d == this.blockSize && (hy(this),
                d = 0);
        else if (La(a))
            for (; c < b; ) {
                var e = a[c++];
                if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0)))
                    throw Error("message must be a byte array");
                this.m[d++] = e;
                d == this.blockSize && (hy(this),
                d = 0)
            }
        else
            throw Error("message must be string or array");
        this.i = d;
        this.l += b
    }
    ;
    var dy = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], cy;
    function iy() {
        by.call(this, 8, jy)
    }
    Oa(iy, by);
    var jy = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    function ky(a) {
        this.F = eg(a, void 0, void 0, 2048)
    }
    x(ky, Uh);
    ky.prototype.g = Xi([0, Ck, Pi, -1, Ri, -3, Vi, Pi]);
    var ly = Wi(Bk, Ck);
    function my() {
        var a;
        this.message = a = a === void 0 ? new ky : a
    }
    function ny(a, b) {
        var c = a.message;
        b = ly(ie(b));
        c = Hg(c, 1, b);
        a.message = c;
        return a
    }
    function oy(a, b) {
        var c = Mg(a.message, 2, b.Mb === 2);
        b = Mg(c, 3, !b.Dc);
        a.message = b;
        return a
    }
    function py(a, b) {
        a.message = Ng(a.message, 4, Math.max(1, b));
        return a
    }
    function qy(a, b) {
        a.message = Ig(a.message, 8, b);
        return a
    }
    function ry(a) {
        var b = "unreleased".match(/m\d{12}/g)
          , c = "unreleased".match(/\d{8}/g);
        if (b && b.length > 0) {
            b = b[0].slice(1);
            c = a.message;
            var d = Number(b.slice(0, 8));
            c = Ng(c, 5, d);
            d = Number(b.slice(8, 10));
            c = Ng(c, 6, d);
            b = Number(b.slice(10, 12));
            b = Ng(c, 7, b);
            a.message = b;
            return a
        }
        if (c && c.length > 0)
            return b = Ng(a.message, 5, Number(c[0])),
            b = pg(b, 6),
            b = pg(b, 7),
            a.message = b,
            a;
        b = pg(a.message, 5);
        b = Ng(b, 6, 0);
        b = pg(b, 7);
        a.message = b;
        return a
    }
    function sy(a) {
        a = a.message;
        var b = ge(a.g());
        b.length > 64 && (a = Ng(a, 4, 1),
        b = ge(a.g()));
        b.length > 64 && (a = pg(a, 6),
        b = ge(a.g()));
        b.length > 64 && (a = pg(a, 7),
        b = ge(a.g()));
        b.length > 64 && (a = pg(a, 5),
        b = ge(a.g()));
        return b
    }
    ;function ty(a, b) {
        if (b === void 0 || b.length === 0)
            return Sx(a, Wx(new Vx, 7)),
            [rq(0)].filter(function(d) {
                return d !== void 0
            });
        var c = rq(-2147483648);
        return c === void 0 ? [] : b.map(function(d) {
            var e = d % c;
            d !== e && Sx(a, Wx(new Vx, 6));
            return e
        })
    }
    ;function xy(a, b) {
        var c = c === void 0 ? BigInt(0) : c;
        return {
            bucket: a,
            value: b ? 1 : 16384,
            filteringId: c
        }
    }
    ;function yy(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e < 128 ? b[c++] = e : (e < 2048 ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023),
            b[c++] = e >> 18 | 240,
            b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224,
            b[c++] = e >> 6 & 63 | 128),
            b[c++] = e & 63 | 128)
        }
        if (b.length >= 24)
            throw Error("String too long for CBOR encoder.");
        return [96 | b.length].concat(z(b))
    }
    function Ey(a) {
        if (a.length >= 24)
            throw Error("Map too long for CBOR encoder.");
        return [160 | a.length].concat(z(a.sort(Fy).map(function(b) {
            return [].concat(z(b[0]), z(b[1]))
        }).flat()))
    }
    function Gy(a) {
        if (a.length >= 24)
            throw Error("Array too long for CBOR encoder.");
        return [128 | a.length].concat(z(a.flat()))
    }
    function Hy(a, b) {
        for (var c = []; a > 0; )
            c.push(Number(a % BigInt(255))),
            a /= BigInt(255);
        for (; c.length < b; )
            c.push(0);
        return c.reverse()
    }
    function Fy(a, b) {
        a = a[0];
        b = b[0];
        if (a.length !== b.length)
            return a.length - b.length;
        for (var c = 0; c < a.length; c++)
            if (a[c] !== b[c])
                return a[c] - b[c];
        return 0
    }
    ;function Iy(a, b, c, d) {
        var e = xy(BigInt(c), d);
        b = {
            shared_info: JSON.stringify({
                api: "shared-storage",
                report_id: "PRE_WORKLET_ERROR",
                reporting_origin: "https://www.googleadservices.com",
                scheduled_report_time: String((new Date).getUTCSeconds()),
                version: "polyfill"
            }),
            aggregation_service_payloads: [],
            context_id: b,
            aggregation_coordinator_origin: "https://publickeyservice.msmt.gcp.privacysandboxservices.com"
        };
        d ? (b.debug_key = "0",
        b.aggregation_service_payloads.push({
            payload: String(c),
            key_id: "0",
            debug_cleartext_payload: Jy([e])
        })) : b.aggregation_service_payloads.push({
            payload: String(c),
            key_id: "0"
        });
        try {
            var f, g;
            (f = a.global) == null || (g = f.fetch) == null || g.call(f, "https://www.googleadservices.com/.well-known/private-aggregation/report-shared-storage", {
                method: "POST",
                cache: "no-cache",
                keepalive: !0,
                mode: "no-cors",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(b)
            }).catch(function() {})
        } catch (h) {}
    }
    function Jy(a) {
        a = Ey([[yy("data"), Gy(a.map(function(b) {
            return Ey([[yy("value"), [68].concat(z(Hy(BigInt(b.value), 4)))], [yy("bucket"), [80].concat(z(Hy(b.bucket, 16)))], [yy("filteringId"), [68].concat(z(Hy(b.filteringId, 4)))]])
        }))], [yy("operation"), yy("histogram")]]);
        return btoa(String.fromCharCode.apply(String, z(new Uint8Array(a))))
    }
    ;var Ky = {}
      , Ly = (Ky[2] = "prod",
    Ky[1] = "canary",
    Ky);
    function My(a, b, c, d) {
        var e, f, g, h, k, l, m, q;
        return Da(function(r) {
            switch (r.g) {
            case 1:
                e = Tx(c);
                f = function(v) {
                    e.forEach(function(t) {
                        var w, u = sy(py(ry(oy(qy(ny(new my, c.escapedQueryId), (w = c.trafficTypes) != null ? w : [0]), t)), -1));
                        Iy(a, u, v, t.sc)
                    })
                }
                ;
                g = at(a);
                if (g instanceof Error)
                    return f(-16),
                    h = Yx(Xx(Wx(new Vx, 8), g.name), g.message),
                    Sx(a, h),
                    r.return();
                d.g.push(7);
                k = Ny(a, c, e);
                return r.i(c.experimentState.reachUseCreateWorklet ? Oy(a, b, f) : Py(a, b, f), 2);
            case 2:
                return l = r.l,
                r.i(k, 3);
            case 3:
                return m = r.l,
                d.g.push(8),
                q = e.map(function(v) {
                    var t, w, u;
                    return Qy(a, l, v, m, (t = c.deviceType) != null ? t : 1, c.escapedQueryId, (w = c.trafficTypes) != null ? w : [0], (u = c.isProductSplitVpidLogsExperiment) != null ? u : !1, function(C) {
                        var R, I = sy(ry(oy(py(qy(ny(new my, c.escapedQueryId), (R = c.trafficTypes) != null ? R : [0]), -1), v)));
                        Iy(a, I, C, v.sc)
                    })
                }),
                r.i(Promise.all(q), 4);
            case 4:
                d.g.push(9),
                r.R()
            }
        })
    }
    function Py(a, b, c) {
        var d, e, f;
        return Da(function(g) {
            switch (g.g) {
            case 1:
                d = a.sharedStorage;
                if (!d)
                    return g.return(Promise.reject(Error("no shared storage API")));
                g.H(2);
                return g.i(d.worklet.addModule(b), 4);
            case 4:
                g.Z(3);
                break;
            case 2:
                e = g.D(),
                c(-17),
                f = Yx(Xx(Wx(new Vx, 1), e.name), e.message),
                Sx(a, f);
            case 3:
                return g.return(d)
            }
        })
    }
    function Oy(a, b, c) {
        var d, e, f;
        return Da(function(g) {
            if (g.g == 1) {
                d = a.sharedStorage;
                if (!d)
                    return g.return(Promise.reject(Error("no shared storage API")));
                g.H(2);
                return g.i(d.createWorklet(b, {
                    dataOrigin: "script-origin"
                }), 4)
            }
            if (g.g != 2)
                return g.return(g.l);
            e = g.D();
            c(-17);
            f = Yx(Xx(Wx(new Vx, 1), e.name), e.message);
            Sx(a, f);
            return g.return(Promise.reject(e))
        })
    }
    function Ny(a, b, c) {
        var d, e, f;
        return Da(function(g) {
            if (g.g == 1)
                return d = [].concat(z(new Set(c.map(function(h) {
                    return h.Mb
                })))),
                e = d.map(function(h) {
                    return Ry(a, b, h)
                }),
                g.i(Promise.all(e), 2);
            f = g.l;
            return g.return(new Map(f.map(function(h, k) {
                return [d[k], h]
            })))
        })
    }
    function Ry(a, b, c) {
        var d, e, f, g, h, k, l, m, q;
        return Da(function(r) {
            switch (r.g) {
            case 1:
                e = (d = b.clientsideModelFilename) != null ? d : "model_person_country_code_XX_person_region_code_5858.json";
                f = void 0;
                g = 1;
                h = {
                    method: "GET"
                };
                k = 200;
                l = b.geoTargetMessage ? St(b.geoTargetMessage) : void 0;
                var v = new Vx;
                v = Pg(v, 10, b.escapedQueryId);
                m = Hg(v, 11, l);
                r.H(2);
                return r.i(a.global.fetch(Sy(c, e), h), 4);
            case 4:
                f = r.l;
                k = f.status;
                if (f.ok) {
                    r.Da(5);
                    break
                }
                return r.i(a.global.fetch(Sy(c, "model_person_country_code_XX_person_region_code_5858.json"), h), 6);
            case 6:
                f = r.l,
                g = 2;
            case 5:
                r.Z(3);
                break;
            case 2:
                q = r.D(),
                k = -1,
                q instanceof Error && Yx(Xx(m, q.name), q.message);
            case 3:
                v = Wx(m, 2);
                pg(v, 9, Ff(k));
                if (!f || !f.ok)
                    return v = Qg(m, 4, 4),
                    v = Pg(v, 8, e),
                    Pg(v, 7, ""),
                    Sx(a, m),
                    r.return();
                v = Qg(m, 4, g);
                Pg(v, 7, g === 1 ? e : "");
                Sx(a, m);
                return r.i(f.text(), 7);
            case 7:
                return r.return(r.l)
            }
        })
    }
    function Sy(a, b) {
        return "https://www.googletagservices.com/agrp/" + Ly[a] + "/" + b
    }
    function Qy(a, b, c, d, e, f, g, h, k) {
        var l, m, q, r, v, t, w;
        return Da(function(u) {
            switch (u.g) {
            case 1:
                l = d.get(c.Mb);
                if (l === void 0)
                    return u.return();
                var C = rq(-2147483648);
                if (C === void 0)
                    C = -1;
                else {
                    var R = Number
                      , I = new iy;
                    I.update(l);
                    var fa = []
                      , F = I.l * 8;
                    I.i < 56 ? I.update(gy, 56 - I.i) : I.update(gy, I.blockSize - (I.i - 56));
                    for (var A = 63; A >= 56; A--)
                        I.m[A] = F & 255,
                        F /= 256;
                    hy(I);
                    for (A = F = 0; A < I.u; A++)
                        for (var Q = 24; Q >= 0; Q -= 8)
                            fa[F++] = I.g[A] >> Q & 255;
                    I = BigInt(0);
                    fa = y(fa);
                    for (F = fa.next(); !F.done; F = fa.next())
                        I = (I * BigInt(256) + BigInt(F.value)) % C;
                    C = R(I)
                }
                m = C;
                C = ry(py(oy(qy(ny(new my, f), g), c), m));
                C.message = Mg(C.message, 9, h);
                q = sy(C);
                r = {
                    contextId: q,
                    aggregationCoordinatorOrigin: "https://publickeyservice.msmt.gcp.privacysandboxservices.com",
                    filteringIdMaxBytes: 4
                };
                v = {
                    modelJson: l,
                    modelHash: m,
                    deviceType: e,
                    enableDebugMode: c.sc,
                    reportBrowserIdInsteadOfVPID: c.Dc,
                    filterIds: ty(a, c.filterIds)
                };
                t = b.run("google_reach", {
                    privateAggregationConfig: r,
                    data: v,
                    keepAlive: !0
                });
                if (t === void 0) {
                    u.Da(2);
                    break
                }
                u.H(3);
                return u.i(t, 5);
            case 5:
                u.Z(2);
                break;
            case 3:
                w = u.D(),
                k(-18),
                C = w,
                I = Yx(Xx(Wx(new Vx, 3), (R = C == null ? void 0 : C.name) != null ? R : "unknown"), (fa = C == null ? void 0 : C.message) != null ? fa : ""),
                Sx(a, I);
            case 2:
                C = Wx(new Vx, 5),
                C = Qg(C, 5, c.Mb === 1 ? 1 : 2),
                C = Qg(C, 6, c.Dc ? 1 : 2),
                Sx(a, C),
                u.R()
            }
        })
    }
    ;function Ty(a) {
        var b = b === void 0 ? [] : b;
        var c = c === void 0 ? [a] : c;
        this.i = a;
        this.subscribedEvents = b;
        this.controlledEvents = c;
        this.name = "reach";
        this.g = new Map
    }
    n = Ty.prototype;
    n.start = function(a) {
        a.L && (this.context = a.L)
    }
    ;
    n.dispose = function() {
        this.g.forEach(function(a) {
            return void a.dispose()
        });
        this.g.clear()
    }
    ;
    n.Kd = function(a, b, c, d, e) {
        var f = this
          , g = this.context;
        if (g) {
            var h = new Zx(g);
            $x(h, function() {
                var k, l, m, q;
                return Da(function(r) {
                    if (r.g == 1) {
                        h.g.push(1);
                        var v;
                        if (v = rg(b, Tt, 1))
                            v = Zt(b),
                            v = !Jg(v, 3, !0);
                        if (v)
                            return r.return();
                        h.g.push(2);
                        return at(g) ? r.i(sp(Rx(g)), 2) : r.return()
                    }
                    if (r.g != 3) {
                        k = r.l;
                        if (!k)
                            return r.return();
                        h.g.push(3);
                        l = new Uy(g,b,f.i,c,d,h);
                        f.g.set(a, l);
                        return r.i(l.run(), 3)
                    }
                    e((q = (m = Zt(b)) == null ? void 0 : Kg(m, 10)) != null ? q : -1);
                    r.R()
                })
            })
        }
    }
    ;
    n.Ob = function(a) {
        var b;
        (b = this.g.get(a)) == null || b.dispose();
        this.g.delete(a)
    }
    ;
    n.handleEvent = function() {}
    ;
    function Uy(a, b, c, d, e, f) {
        this.context = a;
        this.metadata = b;
        this.i = c;
        this.experimentState = d;
        this.Ya = e;
        this.g = f
    }
    Uy.prototype.run = function() {
        var a = this, b, c;
        return Da(function(d) {
            if (d.g == 1)
                return b = {},
                d.i(new Promise(function(e) {
                    a.Ya(a.i, b, e)
                }
                ), 2);
            c = d.l;
            if (!c)
                return d.return();
            a.g.g.push(4);
            return d.i(Vy(a), 0)
        })
    }
    ;
    function Vy(a) {
        var b, c, d, e, f, g, h, k, l, m, q, r, v, t, w, u, C, R;
        return Da(function(I) {
            var fa = a.experimentState, F = (l = (b = Zt(a.metadata)) == null ? void 0 : Lg(b)) != null ? l : "", A;
            (c = Zt(a.metadata)) == null ? A = void 0 : A = tg(c, 7, Ef, void 0 === Re ? 2 : 4);
            A = (m = A) != null ? m : void 0;
            var Q = (d = Zt(a.metadata)) == null ? void 0 : Pf(ng(d, 1)), Tc = (q = (e = Zt(a.metadata)) == null ? void 0 : (f = Eg(e, Rt, 4)) == null ? void 0 : Vh(f)) != null ? q : void 0, Ld = (r = (g = Zt(a.metadata)) == null ? void 0 : Kg(g, 8)) != null ? r : void 0, Uc = Wy, pc;
            (h = Zt(a.metadata)) == null ? pc = void 0 : pc = tg(h, 5, Gf, Re === Re ? 2 : 4);
            pc = Uc(a, (v = pc) != null ? v : void 0);
            Uc = Wy;
            var Ta;
            (k = Zt(a.metadata)) == null ? Ta = void 0 : Ta = tg(k, 6, Gf, Re === Re ? 2 : 4);
            w = {
                experimentState: fa,
                escapedQueryId: F,
                trafficTypes: A,
                isProductSplitVpidLogsExperiment: !0,
                clientsideModelFilename: Q,
                geoTargetMessage: Tc,
                deviceType: Ld,
                productionFilterIds: pc,
                testFilterIds: Uc(a, (t = Ta) != null ? t : void 0)
            };
            if (a.experimentState.reachUseCreateWorklet)
                return R = a.context.ee[2],
                a.g.g.push(10),
                I.i(My(a.context, R, w, a.g), 0);
            u = a.context.ee[0];
            C = btoa(JSON.stringify(w));
            return I.i(Ds(a.context.document, u, C), 0)
        })
    }
    function Wy(a, b) {
        if (b !== void 0)
            return b.map(function(c) {
                var d;
                return String((d = rq(c)) != null ? d : 0)
            })
    }
    Uy.prototype.dispose = function() {}
    ;
    function Xy(a) {
        var b = new lt("impression")
          , c = new lt("begin to render")
          , d = new lt("unmeasurable")
          , e = new lt("viewable")
          , f = new lt("reach vpid")
          , g = new jt(b,f,c,e,d)
          , h = new au
          , k = new Ox(b.event);
        b = new Kx(h,b.event,c.event,d.event,e.event);
        (new qt(a,g,h,k,b,new Ty(f.event))).start()
    }
    ;var Yy = {
        rxInNonrx: !1,
        fetchLaterBeacons: !1,
        addQueryIdToErrorPing: !1,
        shouldSendExplicitDisplayMeasurablePing: !1,
        dedicatedViewableAttributionPing: 0,
        shouldIgnoreAdChoicesIcon: !1,
        considerOmidZOrderOcclusions: !1,
        extraPings: 0,
        extrapolators: !1,
        rxlidarStatefulBeacons: !1,
        tosCustomTimeoutMillis: 36E5,
        shouldCacheTimeMetricsInLocalStorage: !0,
        omakaseAdStatsResetVersion: 1,
        waitForImpressionColleague: !1,
        reachUseCreateWorklet: !1,
        useReachIntegrationPolyfill: !1,
        useReachIntegrationSharedStorage: !0,
        sendBrowserIdInsteadOfVPID: !1
    };
    function Zy(a) {
        return new mt(function(b) {
            function c() {
                return void b(Yy)
            }
            try {
                (new au(!0)).start(a, function(k, l, m) {
                    b(m)
                }, function() {}, c);
                var d, e, f, g, h = (g = (f = a == null ? void 0 : (d = a.na) == null ? void 0 : d.C) != null ? f : a == null ? void 0 : (e = a.L) == null ? void 0 : e.C) != null ? g : void 0;
                h !== void 0 ? h.setTimeout(c, 10) : c()
            } catch (k) {
                c()
            }
        }
        )
    }
    ;(function() {
        var a = Nr()
          , b = Sr(a)
          , c = {
            L: new $s(void 0,void 0,void 0,a),
            na: b
        };
        Zy(c).then(function(d) {
            d.rxInNonrx ? Xy(c) : Ej(378, function() {
                var e = D.apply(0, arguments), f;
                return (f = Qd(po)).og.apply(f, z(e))
            })
        })
    }
    )();
}
).call(this, this, this.document);
