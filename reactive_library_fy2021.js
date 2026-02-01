(function(sttc) {
    'use strict';
    var r, aa = Object.defineProperty, ba = globalThis, ca = typeof Symbol === "function" && typeof Symbol("x") === "symbol", da = {}, ea = {};
    function fa(a, b, c) {
        if (!c || a != null) {
            c = ea[b];
            if (c == null)
                return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }
    function ha(a, b, c) {
        if (b)
            a: {
                var d = a.split(".");
                a = d.length === 1;
                var e = d[0], f;
                !a && e in da ? f = da : f = ba;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f))
                        break a;
                    f = f[g]
                }
                d = d[d.length - 1];
                c = ca && c === "es6" ? f[d] : null;
                b = b(c);
                b != null && (a ? aa(da, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (ea[d] === void 0 && (a = Math.random() * 1E9 >>> 0,
                ea[d] = ca ? ba.Symbol(d) : "$jscp$" + a + "$" + d),
                aa(f, ea[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
    }
    ha("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
    var w = this || self;
    function ia(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = w, e = 0; e < c.length; e++)
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
    function ja(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }
    function ka(a) {
        var b = ja(a);
        return b == "array" || b == "object" && typeof a.length == "number"
    }
    function la(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }
    function z(a) {
        return Object.prototype.hasOwnProperty.call(a, ma) && a[ma] || (a[ma] = ++na)
    }
    var ma = "closure_uid_" + (Math.random() * 1E9 >>> 0)
      , na = 0;
    function oa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function pa(a, b, c) {
        if (!a)
            throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function qa(a, b, c) {
        qa = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? oa : pa;
        return qa.apply(null, arguments)
    }
    function ra(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    ;var sa;
    function ta(a) {
        w.setTimeout( () => {
            throw a;
        }
        , 0)
    }
    ;var ua = ia(610401301, !1)
      , va = ia(748402147, !0)
      , wa = ia(824656860, ia(1, !0));
    function xa() {
        var a = w.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var ya;
    const za = w.navigator;
    ya = za ? za.userAgentData || null : null;
    function Aa() {
        if (!ua || !ya)
            return !1;
        for (let a = 0; a < ya.brands.length; a++) {
            const {brand: b} = ya.brands[a];
            if (b && b.indexOf("Chromium") != -1)
                return !0
        }
        return !1
    }
    function A(a) {
        return xa().indexOf(a) != -1
    }
    ;function Ba() {
        return ua ? !!ya && ya.brands.length > 0 : !1
    }
    function Ca() {
        return Ba() ? Aa() : (A("Chrome") || A("CriOS")) && !(Ba() ? 0 : A("Edge")) || A("Silk")
    }
    ;function Da(a, b) {
        if (typeof a === "string")
            return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    function Ea(a, b) {
        const c = a.length
          , d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            e in d && b.call(void 0, d[e], e, a)
    }
    function Fa(a, b) {
        const c = a.length
          , d = [];
        let e = 0;
        const f = typeof a === "string" ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
    function Ga(a, b) {
        const c = a.length
          , d = Array(c)
          , e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
    function Ha(a, b) {
        const c = a.length
          , d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    function Ia(a, b) {
        return Da(a, b) >= 0
    }
    function Ja(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function Ka(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (ka(d)) {
                const e = a.length || 0
                  , f = d.length || 0;
                a.length = e + f;
                for (let g = 0; g < f; g++)
                    a[e + g] = d[g]
            } else
                a.push(d)
        }
    }
    function La(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; c > 0; c--) {
            const d = Math.floor(b() * (c + 1))
              , e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    }
    ;function Ma(a) {
        Ma[" "](a);
        return a
    }
    Ma[" "] = function() {}
    ;
    var Na = A("Gecko") && !(xa().toLowerCase().indexOf("webkit") != -1 && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge")
      , Oa = xa().toLowerCase().indexOf("webkit") != -1 && !A("Edge");
    function Pa(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    }
    ;let Qa = void 0, Ra;
    function Sa(a) {
        if (Ra)
            throw Error("");
        Ra = b => {
            w.setTimeout( () => {
                a(b)
            }
            , 0)
        }
    }
    function Ta(a) {
        if (Ra)
            try {
                Ra(a)
            } catch (b) {
                throw b.cause = a,
                b;
            }
    }
    function Ua(a) {
        a = Error(a);
        Pa(a, "warning");
        Ta(a);
        return a
    }
    ;function Va(a, b=!1) {
        return b && Symbol.for && a ? Symbol.for(a) : a != null ? Symbol(a) : Symbol()
    }
    var Wa = Va()
      , Xa = Va()
      , Ya = Va()
      , Za = Va("m_m", !0);
    const B = Va("jas", !0);
    var $a;
    const ab = [];
    ab[B] = 7;
    $a = Object.freeze(ab);
    function bb(a) {
        if (4 & a)
            return 512 & a ? 512 : 1024 & a ? 1024 : 0
    }
    ;var cb = {};
    function db(a, b) {
        return b === void 0 ? a.g !== eb && !!(2 & (a.Y[B] | 0)) : !!(2 & b) && a.g !== eb
    }
    const eb = {};
    var fb = Object.freeze({})
      , gb = Object.freeze({});
    function hb(a) {
        var b = ib;
        if (!jb(a))
            throw b = (typeof b === "function" ? b() : b)?.concat("\n") ?? "",
            Error(b + String(a));
        return a
    }
    function kb(a) {
        a.Ve = !0;
        return a
    }
    let ib = void 0;
    var lb = kb(a => typeof a === "number")
      , mb = kb(a => typeof a === "string")
      , jb = kb(a => typeof a === "function")
      , nb = kb(a => Array.isArray(a));
    function ob() {
        return kb(a => nb(a) ? a.every(b => lb(b)) : !1)
    }
    ;function pb(a) {
        if (mb(a)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a))
                throw Error(String(a));
        } else if (lb(a) && !Number.isSafeInteger(a))
            throw Error(String(a));
        return BigInt(a)
    }
    var sb = kb(a => a >= qb && a <= rb);
    const qb = BigInt(Number.MIN_SAFE_INTEGER)
      , rb = BigInt(Number.MAX_SAFE_INTEGER);
    let tb = 0
      , ub = 0;
    function vb(a) {
        const b = a >>> 0;
        tb = b;
        ub = (a - b) / 4294967296 >>> 0
    }
    function wb(a) {
        if (a < 0) {
            vb(-a);
            a = tb;
            var b = ub;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c,d] = [a, b];
            tb = c >>> 0;
            ub = d >>> 0
        } else
            vb(a)
    }
    function xb(a, b) {
        b >>>= 0;
        a >>>= 0;
        var c;
        b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }
    function yb() {
        var a = tb, b = ub, c;
        b & 2147483648 ? c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : c = xb(a, b);
        return c
    }
    ;function zb(a, b=`unexpected value ${a}!`) {
        throw Error(b);
    }
    ;const Ab = typeof BigInt === "function" ? BigInt.asIntN : void 0
      , Bb = Number.isSafeInteger
      , Cb = Number.isFinite
      , Db = Math.trunc
      , Eb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    function Fb(a) {
        switch (typeof a) {
        case "bigint":
            return !0;
        case "number":
            return Cb(a);
        case "string":
            return Eb.test(a);
        default:
            return !1
        }
    }
    function Gb(a) {
        if (!Cb(a))
            throw Ua("enum");
        return a | 0
    }
    function Hb(a) {
        return a == null ? a : Gb(a)
    }
    function Ib(a) {
        return a == null ? a : Cb(a) ? a | 0 : void 0
    }
    function Jb(a) {
        if (typeof a !== "number")
            throw Ua("int32");
        if (!Cb(a))
            throw Ua("int32");
        return a | 0
    }
    function Kb(a) {
        return a == null ? a : Jb(a)
    }
    function Lb(a) {
        if (a == null)
            return a;
        if (typeof a === "string" && a)
            a = +a;
        else if (typeof a !== "number")
            return;
        return Cb(a) ? a | 0 : void 0
    }
    function Mb(a) {
        var b = wa ? 1024 : 0;
        if (!Fb(a))
            throw Ua("int64");
        const c = typeof a;
        switch (b) {
        case 512:
            switch (c) {
            case "string":
                return Ob(a);
            case "bigint":
                return String(Ab(64, a));
            default:
                return Pb(a)
            }
        case 1024:
            switch (c) {
            case "string":
                return Qb(a);
            case "bigint":
                return pb(Ab(64, a));
            default:
                return Rb(a)
            }
        case 0:
            switch (c) {
            case "string":
                return Ob(a);
            case "bigint":
                return pb(Ab(64, a));
            default:
                return Sb(a)
            }
        default:
            return zb(b, "Unknown format requested type for int64")
        }
    }
    function Sb(a) {
        a = Db(a);
        if (!Bb(a)) {
            wb(a);
            var b = tb
              , c = ub;
            if (a = c & 2147483648)
                b = ~b + 1 >>> 0,
                c = ~c >>> 0,
                b == 0 && (c = c + 1 >>> 0);
            const d = c * 4294967296 + (b >>> 0);
            b = Number.isSafeInteger(d) ? d : xb(b, c);
            a = typeof b === "number" ? a ? -b : b : a ? "-" + b : b
        }
        return a
    }
    function Pb(a) {
        a = Db(a);
        Bb(a) ? a = String(a) : (wb(a),
        a = yb());
        return a
    }
    function Ob(a) {
        var b = Db(Number(a));
        if (Bb(b))
            return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        b = a.length;
        (a[0] === "-" ? b < 20 || b === 20 && a <= "-9223372036854775808" : b < 19 || b === 19 && a <= "9223372036854775807") || (a.length < 16 ? wb(Number(a)) : (a = BigInt(a),
        tb = Number(a & BigInt(4294967295)) >>> 0,
        ub = Number(a >> BigInt(32) & BigInt(4294967295))),
        a = yb());
        return a
    }
    function Qb(a) {
        var b = Db(Number(a));
        if (Bb(b))
            return pb(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return pb(Ab(64, BigInt(a)))
    }
    function Rb(a) {
        return Bb(a) ? pb(Sb(a)) : pb(Pb(a))
    }
    function Tb(a) {
        const b = typeof a;
        if (a == null)
            return a;
        if (b === "bigint")
            return pb(Ab(64, a));
        if (Fb(a))
            return b === "string" ? Qb(a) : Rb(a)
    }
    function Ub(a) {
        if (typeof a !== "string")
            throw Error();
        return a
    }
    function Vb(a) {
        if (a != null && typeof a !== "string")
            throw Error();
        return a
    }
    function Wb(a) {
        return a == null || typeof a === "string" ? a : void 0
    }
    function Xb(a, b, c, d) {
        if (a != null && a[Za] === cb)
            return a;
        if (!Array.isArray(a))
            return c ? d & 2 ? b[Wa] || (b[Wa] = Yb(b)) : new b : void 0;
        c = a[B] | 0;
        d = c | d & 32 | d & 2;
        d !== c && (a[B] = d);
        return new b(a)
    }
    function Yb(a) {
        a = new a;
        var b = a.Y;
        b[B] |= 34;
        return a
    }
    ;function Zb(a) {
        return a
    }
    ;function $b(a, b, c, d) {
        var e = d !== void 0;
        d = !!d;
        const f = [];
        var g = a.length;
        let h, k = 4294967295, m = !1;
        const l = !!(b & 64)
          , n = l ? b & 128 ? 0 : -1 : void 0;
        b & 1 || (h = g && a[g - 1],
        h != null && typeof h === "object" && h.constructor === Object ? (g--,
        k = g) : h = void 0,
        !l || b & 128 || e || (m = !0,
        k = (ac ?? Zb)(k - n, n, a, h, void 0) + n));
        b = void 0;
        for (e = 0; e < g; e++) {
            let p = a[e];
            if (p != null && (p = c(p, d)) != null)
                if (l && e >= k) {
                    const t = e - n;
                    (b ?? (b = {}))[t] = p
                } else
                    f[e] = p
        }
        if (h)
            for (let p in h) {
                if (!Object.prototype.hasOwnProperty.call(h, p))
                    continue;
                a = h[p];
                if (a == null || (a = c(a, d)) == null)
                    continue;
                g = +p;
                let t;
                l && !Number.isNaN(g) && (t = g + n) < k ? f[t] = a : (b ?? (b = {}))[p] = a
            }
        b && (m ? f.push(b) : f[k] = b);
        return f
    }
    function bc(a) {
        switch (typeof a) {
        case "number":
            return Number.isFinite(a) ? a : "" + a;
        case "bigint":
            return sb(a) ? Number(a) : "" + a;
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (Array.isArray(a)) {
                const b = a[B] | 0;
                return a.length === 0 && b & 1 ? void 0 : $b(a, b, bc)
            }
            if (a != null && a[Za] === cb)
                return cc(a);
            return
        }
        return a
    }
    let ac;
    function cc(a) {
        a = a.Y;
        return $b(a, a[B] | 0, bc)
    }
    ;function dc(a, b, c, d=0) {
        if (a == null) {
            var e = 32;
            c ? (a = [c],
            e |= 128) : a = [];
            b && (e = e & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a))
                throw Error("narr");
            e = a[B] | 0;
            if (va && 1 & e)
                throw Error("rfarr");
            2048 & e && !(2 & e) && ec();
            if (e & 256)
                throw Error("farr");
            if (e & 64)
                return (e | d) !== e && (a[B] = e | d),
                a;
            if (c && (e |= 128,
            c !== a[0]))
                throw Error("mid");
            a: {
                c = a;
                e |= 64;
                var f = c.length;
                if (f) {
                    var g = f - 1;
                    const k = c[g];
                    if (k != null && typeof k === "object" && k.constructor === Object) {
                        b = e & 128 ? 0 : -1;
                        g -= b;
                        if (g >= 1024)
                            throw Error("pvtlmt");
                        for (var h in k) {
                            if (!Object.prototype.hasOwnProperty.call(k, h))
                                continue;
                            f = +h;
                            if (f < g)
                                c[f + b] = k[h],
                                delete k[h];
                            else
                                break
                        }
                        e = e & -16760833 | (g & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    h = Math.max(b, f - (e & 128 ? 0 : -1));
                    if (h > 1024)
                        throw Error("spvt");
                    e = e & -16760833 | (h & 1023) << 14
                }
            }
        }
        a[B] = e | 64 | d;
        return a
    }
    function ec() {
        if (va)
            throw Error("carr");
        if (Ya != null) {
            var a = Qa ?? (Qa = {});
            var b = a[Ya] || 0;
            b >= 5 || (a[Ya] = b + 1,
            a = Error(),
            Pa(a, "incident"),
            Ra ? Ta(a) : ta(a))
        }
    }
    ;function fc(a, b) {
        if (typeof a !== "object")
            return a;
        if (Array.isArray(a)) {
            var c = a[B] | 0;
            a.length === 0 && c & 1 ? a = void 0 : c & 2 || (!b || 4096 & c || 16 & c ? a = hc(a, c, !1, b && !(c & 16)) : (a[B] |= 34,
            c & 4 && Object.freeze(a)));
            return a
        }
        if (a != null && a[Za] === cb)
            return b = a.Y,
            c = b[B] | 0,
            db(a, c) ? a : ic(a, b, c) ? jc(a, b) : hc(b, c)
    }
    function jc(a, b, c) {
        a = new a.constructor(b);
        c && (a.g = eb);
        a.j = eb;
        return a
    }
    function hc(a, b, c, d) {
        d ?? (d = !!(34 & b));
        a = $b(a, b, fc, d);
        d = 32;
        c && (d |= 2);
        b = b & 16769217 | d;
        a[B] = b;
        return a
    }
    function kc(a) {
        const b = a.Y
          , c = b[B] | 0;
        return db(a, c) ? ic(a, b, c) ? jc(a, b, !0) : new a.constructor(hc(b, c, !1)) : a
    }
    function lc(a) {
        const b = a.Y
          , c = b[B] | 0;
        return db(a, c) ? a : ic(a, b, c) ? jc(a, b) : new a.constructor(hc(b, c, !0))
    }
    function mc(a) {
        if (a.g !== eb)
            return !1;
        var b = a.Y;
        b = hc(b, b[B] | 0);
        b[B] |= 2048;
        a.Y = b;
        a.g = void 0;
        a.j = void 0;
        return !0
    }
    function nc(a) {
        if (!mc(a) && db(a, a.Y[B] | 0))
            throw Error();
    }
    function oc(a, b) {
        b === void 0 && (b = a[B] | 0);
        b & 32 && !(b & 4096) && (a[B] = b | 4096)
    }
    function ic(a, b, c) {
        return c & 2 ? !0 : c & 32 && !(c & 4096) ? (b[B] = c | 2,
        a.g = eb,
        !0) : !1
    }
    ;const pc = pb(0)
      , C = {};
    function D(a, b, c, d) {
        b = qc(a.Y, b, void 0, d);
        if (b !== null || c && a.j !== eb)
            return b
    }
    function qc(a, b, c, d) {
        if (b === -1)
            return null;
        const e = b + (c ? 0 : -1)
          , f = a.length - 1;
        let g, h;
        if (!(f < 1 + (c ? 0 : -1))) {
            if (e >= f)
                if (g = a[f],
                g != null && typeof g === "object" && g.constructor === Object)
                    c = g[b],
                    h = !0;
                else if (e === f)
                    c = g;
                else
                    return;
            else
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
    function rc(a, b, c) {
        nc(a);
        const d = a.Y;
        sc(d, d[B] | 0, b, c);
        return a
    }
    function sc(a, b, c, d) {
        const e = c + -1;
        var f = a.length - 1;
        if (f >= 0 && e >= f) {
            const g = a[f];
            if (g != null && typeof g === "object" && g.constructor === Object)
                return g[c] = d,
                b
        }
        if (e <= f)
            return a[e] = d,
            b;
        d !== void 0 && (f = (b ?? (b = a[B] | 0)) >> 14 & 1023 || 536870912,
        c >= f ? d != null && (a[f + -1] = {
            [c]: d
        }) : a[e] = d);
        return b
    }
    function tc() {
        return void 0 === fb ? 2 : 4
    }
    function uc(a, b, c, d, e) {
        let f = a.Y
          , g = f[B] | 0;
        d = db(a, g) ? 1 : d;
        e = !!e || d === 3;
        d === 2 && mc(a) && (f = a.Y,
        g = f[B] | 0);
        a = vc(f, b);
        let h = a === $a ? 7 : a[B] | 0
          , k = wc(h, g);
        var m = 4 & k ? !1 : !0;
        if (m) {
            4 & k && (a = [...a],
            h = 0,
            k = xc(k, g),
            g = sc(f, g, b, a));
            let l = 0
              , n = 0;
            for (; l < a.length; l++) {
                const p = c(a[l]);
                p != null && (a[n++] = p)
            }
            n < l && (a.length = n);
            c = (k | 4) & -513;
            k = c &= -1025;
            k &= -4097
        }
        k !== h && (a[B] = k,
        2 & k && Object.freeze(a));
        return a = yc(a, k, f, g, b, d, m, e)
    }
    function yc(a, b, c, d, e, f, g, h) {
        let k = b;
        f === 1 || (f !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d) ? zc(b) || (b |= !a.length || g && !(4096 & b) || 32 & d && !(4096 & b || 16 & b) ? 2 : 256,
        b !== k && (a[B] = b),
        Object.freeze(a)) : (f === 2 && zc(b) && (a = [...a],
        k = 0,
        b = xc(b, d),
        d = sc(c, d, e, a)),
        zc(b) || (h || (b |= 16),
        b !== k && (a[B] = b)));
        2 & b || !(4096 & b || 16 & b) || oc(c, d);
        return a
    }
    function vc(a, b) {
        a = qc(a, b);
        return Array.isArray(a) ? a : $a
    }
    function wc(a, b) {
        2 & b && (a |= 2);
        return a | 1
    }
    function zc(a) {
        return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }
    function Ac(a, b, c, d) {
        nc(a);
        const e = a.Y;
        let f = e[B] | 0;
        if (c == null)
            return sc(e, f, b),
            a;
        let g = c === $a ? 7 : c[B] | 0
          , h = g;
        var k = zc(g);
        let m = k || Object.isFrozen(c);
        k || (g = 0);
        m || (c = [...c],
        h = 0,
        g = xc(g, f),
        m = !1);
        g |= 5;
        k = bb(g) ?? (wa ? 1024 : 0);
        g |= k;
        for (let l = 0; l < c.length; l++) {
            const n = c[l]
              , p = d(n, k);
            Object.is(n, p) || (m && (c = [...c],
            h = 0,
            g = xc(g, f),
            m = !1),
            c[l] = p)
        }
        g !== h && (m && (c = [...c],
        g = xc(g, f)),
        c[B] = g);
        sc(e, f, b, c);
        return a
    }
    function Bc(a, b, c, d) {
        nc(a);
        const e = a.Y;
        sc(e, e[B] | 0, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }
    function Cc(a, b, c, d) {
        nc(a);
        const e = a.Y;
        let f = e[B] | 0;
        if (d == null) {
            const g = Dc(e);
            if (Ec(g, e, f, c) === b)
                g.set(c, 0);
            else
                return a
        } else
            f = Fc(e, f, c, b);
        sc(e, f, b, d);
        return a
    }
    function Gc(a, b, c) {
        a = a.Y;
        return Ec(Dc(a), a, void 0, b) === c ? c : -1
    }
    function Dc(a) {
        return a[Xa] ?? (a[Xa] = new Map)
    }
    function Fc(a, b, c, d) {
        const e = Dc(a)
          , f = Ec(e, a, b, c);
        f !== d && (f && (b = sc(a, b, f)),
        e.set(c, d));
        return b
    }
    function Ec(a, b, c, d) {
        let e = a.get(d);
        if (e != null)
            return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const g = d[f];
            qc(b, g) != null && (e !== 0 && (c = sc(b, c, e)),
            e = g)
        }
        a.set(d, e);
        return e
    }
    function Hc(a, b, c) {
        nc(a);
        a = a.Y;
        let d = a[B] | 0;
        const e = qc(a, c)
          , f = void 0 === gb;
        b = Xb(e, b, !f, d);
        if (!f || b)
            return b = kc(b),
            e !== b && (d = sc(a, d, c, b),
            oc(a, d)),
            b
    }
    function Ic(a, b, c, d) {
        let e = !1;
        d = qc(a, d, void 0, f => {
            const g = Xb(f, c, !1, b);
            e = g !== f && g != null;
            return g
        }
        );
        if (d != null)
            return e && !db(d) && oc(a, b),
            d
    }
    function Jc(a, b, c) {
        let d = a.Y
          , e = d[B] | 0;
        b = Ic(d, e, b, c);
        if (b == null)
            return b;
        e = d[B] | 0;
        if (!db(a, e)) {
            const f = kc(b);
            f !== b && (mc(a) && (d = a.Y,
            e = d[B] | 0),
            b = f,
            e = sc(d, e, c, b),
            oc(d, e))
        }
        return b
    }
    function Kc(a, b, c) {
        var d = tc()
          , e = a.Y
          , f = e;
        e = e[B] | 0;
        var g = db(a, e);
        const h = g ? 1 : d;
        d = h === 3;
        var k = !g;
        (h === 2 || k) && mc(a) && (f = a.Y,
        e = f[B] | 0);
        a = vc(f, c);
        var m = a === $a ? 7 : a[B] | 0
          , l = wc(m, e);
        if (g = !(4 & l)) {
            var n = a
              , p = e;
            const t = !!(2 & l);
            t && (p |= 2);
            let q = !t
              , u = !0
              , y = 0
              , T = 0;
            for (; y < n.length; y++) {
                const H = Xb(n[y], b, !1, p);
                if (H instanceof b) {
                    if (!t) {
                        const v = db(H);
                        q && (q = !v);
                        u && (u = v)
                    }
                    n[T++] = H
                }
            }
            T < y && (n.length = T);
            l |= 4;
            l = u ? l & -4097 : l | 4096;
            l = q ? l | 8 : l & -9
        }
        l !== m && (a[B] = l,
        2 & l && Object.freeze(a));
        if (k && !(8 & l || !a.length && (h === 1 || (h !== 4 ? 0 : 2 & l || !(16 & l) && 32 & e)))) {
            zc(l) && (a = [...a],
            l = xc(l, e),
            e = sc(f, e, c, a));
            b = a;
            k = l;
            for (m = 0; m < b.length; m++)
                n = b[m],
                l = kc(n),
                n !== l && (b[m] = l);
            k |= 8;
            l = k = b.length ? k | 4096 : k & -4097;
            a[B] = l
        }
        return a = yc(a, l, f, e, c, h, g, d)
    }
    function Lc(a) {
        a == null && (a = void 0);
        return a
    }
    function Mc(a, b, c) {
        c = Lc(c);
        rc(a, b, c);
        c && !db(c) && oc(a.Y);
        return a
    }
    function Nc(a, b, c, d) {
        d = Lc(d);
        Cc(a, b, c, d);
        d && !db(d) && oc(a.Y);
        return a
    }
    function xc(a, b) {
        return a = (2 & b ? a | 2 : a & -3) & -273
    }
    function Oc(a, b, c) {
        a = D(a, b, c);
        return a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0
    }
    function Pc(a, b, c) {
        return Wb(D(a, b, c))
    }
    function Qc(a, b) {
        return (wa ? D(a, b, void 0, Tb) : Tb(D(a, b))) ?? pc
    }
    function Rc(a, b, c) {
        a = uc(a, b, Lb, 3, !0);
        if (typeof c !== "number" || c < 0 || c >= a.length)
            throw Error();
        return a[c]
    }
    function Sc(a, b, c) {
        return Bc(a, b, c == null ? c : Mb(c), "0")
    }
    function Tc(a, b, c) {
        return Bc(a, b, Vb(c), "")
    }
    ;function Uc(a) {
        return lc(a)
    }
    var E = class {
        constructor(a) {
            this.Y = dc(a, void 0, void 0, 2048)
        }
        toJSON() {
            return cc(this)
        }
    }
    ;
    E.prototype[Za] = cb;
    function Vc(a) {
        return () => a[Wa] || (a[Wa] = Yb(a))
    }
    function Wc(a) {
        return b => {
            if (b == null || b == "")
                b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error("dnarr");
                b[B] |= 32;
                b = new a(b)
            }
            return b
        }
    }
    ;function Xc(a, b) {
        if (a)
            for (const c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    function Yc(a) {
        const b = [];
        Xc(a, c => {
            b.push(c)
        }
        );
        return b
    }
    ;function Zc(a) {
        try {
            var b;
            if (b = !!a && a.location.href != null)
                a: {
                    try {
                        Ma(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch {
            return !1
        }
    }
    function $c(a) {
        return Zc(a.top) ? a.top : null
    }
    ;function ad() {
        return !1
    }
    function bd() {
        return !0
    }
    function cd(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }
    function dd(a) {
        let b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    function ed(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }
    function fd(a) {
        function b() {
            d = w.setTimeout(c, 100);
            let g = f;
            f = [];
            a.apply(void 0, g)
        }
        function c() {
            d = 0;
            e && (e = !1,
            b())
        }
        let d = 0
          , e = !1
          , f = [];
        return function(g) {
            f = arguments;
            d ? e = !0 : b()
        }
    }
    ;function gd() {
        return ua && ya ? ya.mobile : !hd() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))
    }
    function hd() {
        return ua && ya ? !ya.mobile && (A("iPad") || A("Android") || A("Silk")) : A("iPad") || A("Android") && !A("Mobile") || A("Silk")
    }
    ;/* 
 
 Copyright Google LLC 
 SPDX-License-Identifier: Apache-2.0 
*/
    let id = globalThis.trustedTypes, jd;
    function kd() {
        let a = null;
        if (!id)
            return a;
        try {
            const b = c => c;
            a = id.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (b) {}
        return a
    }
    function ld() {
        jd === void 0 && (jd = kd());
        return jd
    }
    ;var md = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    }
    ;
    function nd(a) {
        const b = ld();
        a = b ? b.createScriptURL(a) : a;
        return new md(a)
    }
    ;var od = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    var pd = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    }
    ;
    function qd(a=document) {
        a = a.querySelector?.("script[nonce]");
        return a == null ? "" : a.nonce || a.getAttribute("nonce") || ""
    }
    ;var rd = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    }
    ;
    function sd(a) {
        const b = qd(a.ownerDocument);
        b && a.setAttribute("nonce", b)
    }
    ;var td = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    }
    ;
    function ud(a) {
        var b = vd`* { pointer-events: none; }`;
        if (b instanceof td)
            b = b.g;
        else
            throw Error("");
        a.textContent = b
    }
    ;function wd(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : w.document.createElement("div");
        return a.replace(xd, function(e, f) {
            var g = c[e];
            if (g)
                return g;
            f.charAt(0) == "#" && (f = Number("0" + f.slice(1)),
            isNaN(f) || (g = String.fromCharCode(f)));
            if (!g) {
                g = e + " ";
                g = (f = ld()) ? f.createHTML(g) : g;
                g = new pd(g);
                if (d.nodeType === 1 && /^(script|style)$/i.test(d.tagName))
                    throw Error("");
                if (g instanceof pd)
                    g = g.g;
                else
                    throw Error("");
                d.innerHTML = g;
                g = d.firstChild.nodeValue.slice(0, -1)
            }
            return c[e] = g
        })
    }
    var xd = /&([^;\s<&]+);?/g;
    function yd(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c)
            b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }
    function zd(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    function Ad(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
    ;function Bd(a) {
        if (Ca() && gd()) {
            var b = $c(a);
            if (b) {
                a = Cd() === 0;
                var c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]')
                  , d = b.innerWidth;
                b = b.outerWidth;
                if (d === 0)
                    a = 1;
                else {
                    var e = Math.round((b / d + Number.EPSILON) * 100) / 100;
                    a = e === 1 ? 1 : a || c ? e : Math.round((b / d / .4 + Number.EPSILON) * 100) / 100
                }
            } else
                a = 1
        } else
            a = 1;
        return a
    }
    var Cd = dd( () => gd() ? 2 : hd() ? 1 : 0);
    function Dd() {
        if (!globalThis.crypto)
            return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (a) {
            return Math.random()
        }
    }
    ;let Ed, Fd = 64;
    function Gd() {
        try {
            return Ed ?? (Ed = new Uint32Array(64)),
            Fd >= 64 && (crypto.getRandomValues(Ed),
            Fd = 0),
            Ed[Fd++]
        } catch (a) {
            return Math.floor(Math.random() * 2 ** 32)
        }
    }
    ;function Hd(a) {
        if (!lb(a.goog_pvsid))
            try {
                const b = Gd() + (Gd() & 2 ** 21 - 1) * 2 ** 32;
                Object.defineProperty(a, "goog_pvsid", {
                    value: b,
                    configurable: !1
                })
            } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }
    ;function vd(a) {
        return new td(a[0])
    }
    ;function Id(a, ...b) {
        if (b.length === 0)
            return nd(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return nd(c)
    }
    ;function Jd(a, b) {
        const c = Kd("SCRIPT", a);
        if (b instanceof md)
            b = b.g;
        else
            throw Error("");
        c.src = b;
        sd(c);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }
    function Ld(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }
    var Md = /^([0-9.]+)px$/
      , Nd = /^(-?[0-9.]{1,30})$/;
    function Od(a) {
        if (!Nd.test(a))
            return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }
    function Pd(a) {
        return (a = Md.exec(a)) ? +a[1] : null
    }
    var F = (a, b) => {
        Xc(b, (c, d) => {
            a.style.setProperty(d, c, "important")
        }
        )
    }
      , Qd = (a, b) => {
        for (a = [a]; a.length; ) {
            var c = a.shift();
            b(c) !== !1 && (c = Fa(c.children || c.childNodes || [], d => d.nodeType === 1),
            c.length && a.unshift(...c))
        }
    }
      , Sd = (a, b) => {
        if ("length"in a.style) {
            a = a.style;
            const c = a.length;
            for (let d = 0; d < c; d++) {
                const e = a[d];
                b(a[e], e, a)
            }
        } else
            a = Rd(a.style.cssText),
            Xc(a, b)
    }
      , Rd = a => {
        const b = {};
        if (a) {
            const c = /\s*:\s*/;
            Ea((a || "").split(/\s*;\s*/), d => {
                if (d) {
                    var e = d.split(c);
                    d = e[0];
                    e = e[1];
                    d && e && (b[d.toLowerCase()] = e)
                }
            }
            )
        }
        return b
    }
      , Td = (a, b= () => !0) => {
        const c = /!\s*important/i;
        Sd(a, (d, e) => {
            !c.test(d) && b(e, d) ? a.style.setProperty(e, d, "important") : c.test(d) && !b(e, d) && a.style.setProperty(e, d, "")
        }
        )
    }
    ;
    const Ud = {
        ["http://googleads.g.doubleclick.net"]: !0,
        ["http://pagead2.googlesyndication.com"]: !0,
        ["https://googleads.g.doubleclick.net"]: !0,
        ["https://pagead2.googlesyndication.com"]: !0
    }
      , Vd = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/
      , Wd = /.*domain\.test$/
      , Xd = /\.prod\.google\.com(:\d+)?$/;
    function Kd(a, b=document) {
        return b.createElement(String(a).toLowerCase())
    }
    ;function Yd(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }
    function Zd(a) {
        return Yd.apply(null, arguments) / arguments.length
    }
    ;function $d(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }
    r = $d.prototype;
    r.equals = function(a) {
        return a instanceof $d && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    }
    ;
    function be(a, b) {
        return new $d(a.x - b.x,a.y - b.y)
    }
    r.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    r.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    r.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    r.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    }
    ;
    function ce(a, b) {
        this.width = a;
        this.height = b
    }
    r = ce.prototype;
    r.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    r.isEmpty = function() {
        return !(this.width * this.height)
    }
    ;
    r.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    r.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    r.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    r.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    }
    ;
    function de(a) {
        a = a.document;
        a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
        return new ce(a.clientWidth,a.clientHeight)
    }
    function ee(a) {
        var b = a.document
          , c = 0;
        if (b) {
            c = b.body;
            const d = b.documentElement;
            if (!d || !c)
                return 0;
            a = de(a).height;
            if (b.compatMode == "CSS1Compat" && d.scrollHeight)
                c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
            else {
                b = d.scrollHeight;
                let e = d.offsetHeight;
                d.clientHeight != e && (b = c.scrollHeight,
                e = c.offsetHeight);
                c = b > a ? b > e ? b : e : b < e ? b : e
            }
        }
        return c
    }
    function fe(a) {
        return a ? a.defaultView : window
    }
    function ge(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }
    function he(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
    function ie(a, b) {
        return a && b ? a == b || a.contains(b) : !1
    }
    function je(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    function ke(a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (d == null || c <= d); ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
    function le(a) {
        this.g = a || w.document || document
    }
    function me(a, b) {
        return ge(a.g, b)
    }
    le.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    function ne(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    r = ne.prototype;
    r.getWidth = function() {
        return this.right - this.left
    }
    ;
    r.getHeight = function() {
        return this.bottom - this.top
    }
    ;
    function oe(a) {
        return new ne(a.top,a.right,a.bottom,a.left)
    }
    r.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    r.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    r.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    r.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    }
    ;
    function G(a, b, c) {
        if (typeof b === "string")
            (b = pe(a, b)) && (a.style[b] = c);
        else
            for (const e in b) {
                c = a;
                var d = b[e];
                const f = pe(c, e);
                f && (c.style[f] = d)
            }
    }
    var qe = {};
    function pe(a, b) {
        let c = qe[b];
        if (!c) {
            var d = zd(b);
            c = d;
            a.style[d] === void 0 && (d = (Oa ? "Webkit" : Na ? "Moz" : null) + Ad(d),
            a.style[d] !== void 0 && (c = d));
            qe[b] = c
        }
        return c
    }
    function re(a, b) {
        const c = je(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
    function se(a, b) {
        return re(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
    function te(a) {
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
    function ue(a) {
        var b = je(a);
        const c = new $d(0,0);
        if (a == (b ? je(b) : document).documentElement)
            return c;
        a = te(a);
        var d = (b ? new le(je(b)) : sa || (sa = new le)).g;
        b = d.scrollingElement ? d.scrollingElement : Oa || d.compatMode != "CSS1Compat" ? d.body || d.documentElement : d.documentElement;
        d = d.defaultView;
        b = new $d(d?.pageXOffset || b.scrollLeft,d?.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    function ve(a) {
        if (a.nodeType == 1)
            return a = te(a),
            new $d(a.left,a.top);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new $d(a.clientX,a.clientY)
    }
    function we(a, b) {
        let c;
        if (b instanceof ce)
            c = b.height,
            b = b.width;
        else
            throw Error("missing height argument");
        a.style.width = xe(b, !0);
        a.style.height = xe(c, !0)
    }
    function xe(a, b) {
        typeof a == "number" && (a = (b ? Math.round(a) : a) + "px");
        return a
    }
    function ye(a) {
        var b = ze;
        if (se(a, "display") != "none")
            return b(a);
        const c = a.style
          , d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }
    function ze(a) {
        const b = a.offsetWidth
          , c = a.offsetHeight
          , d = Oa && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = te(a),
        new ce(a.right - a.left,a.bottom - a.top)) : new ce(b,c)
    }
    function Ae(a, b) {
        const c = re(a, b + "Left")
          , d = re(a, b + "Right")
          , e = re(a, b + "Top");
        a = re(a, b + "Bottom");
        return new ne(parseFloat(e),parseFloat(d),parseFloat(a),parseFloat(c))
    }
    ;var Be = {
        capture: !0
    }
      , Ce = {
        passive: !0
    }
      , De = dd( () => {
        let a = !1;
        try {
            const b = Object.defineProperty({}, "passive", {
                get() {
                    a = !0
                }
            });
            w.addEventListener("test", null, b)
        } catch (b) {}
        return a
    }
    );
    function Ee(a) {
        return a ? a.passive && De() ? a : a.capture || !1 : !1
    }
    function I(a, b, c, d) {
        return typeof a.addEventListener === "function" ? (a.addEventListener(b, c, Ee(d)),
        !0) : !1
    }
    function K(a, b, c, d) {
        return typeof a.removeEventListener === "function" ? (a.removeEventListener(b, c, Ee(d)),
        !0) : !1
    }
    function Fe(a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    ;function Ge(a, b, c=null, d=!1, e=!1) {
        He(a, b, c, d, e)
    }
    function He(a, b, c, d, e=!1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Kd("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const k = Da(h, f);
                    k >= 0 && Array.prototype.splice.call(h, k, 1)
                }
                K(f, "load", g);
                K(f, "error", g)
            }
            ;
            I(f, "load", g);
            I(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    function Ie(a) {
        let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal";
        Xc(a, (c, d) => {
            if (c || c === 0)
                b += `&${d}=${encodeURIComponent(String(c))}`
        }
        );
        Je(b)
    }
    function Je(a) {
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : Ge(b, a, void 0, !1, !1)
    }
    ;var Ke = class {
        constructor(a, b) {
            this.error = a;
            this.meta = {};
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror"
        }
    }
    ;
    function Le(a) {
        return new Ke(a,{
            message: Me(a)
        })
    }
    function Me(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack)
            a: {
                a = a.stack;
                var c = b;
                try {
                    a.indexOf(c) == -1 && (a = c + "\n" + a);
                    let d;
                    for (; a != d; )
                        d = a,
                        a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                    b = a.replace(RegExp("\n *", "g"), "\n");
                    break a
                } catch (d) {
                    b = c;
                    break a
                }
                b = void 0
            }
        return b
    }
    ;const Ne = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Oe = class {
        constructor(a, b) {
            this.g = a;
            this.j = b
        }
    }
      , Pe = class {
        constructor(a, b) {
            this.url = a;
            this.g = !!b;
            this.depth = null
        }
    }
    ;
    let Qe = null;
    function Re() {
        const a = w.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }
    function Se(a=w) {
        return (a = a.performance) && a.now ? a.now() : null
    }
    function Te(a, b=w) {
        return b.performance?.timing?.[a] || 0
    }
    function Ue(a=w) {
        const b = Math.min(Te("domLoading", a) || Infinity, Te("domInteractive", a) || Infinity);
        return b === Infinity ? Math.max(Te("responseEnd", a), Te("navigationStart", a)) : b
    }
    ;var Ve = class {
        constructor(a, b) {
            var c = Se() || Re();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    }
    ;
    const We = w.performance
      , Xe = !!(We && We.mark && We.measure && We.clearMarks)
      , Ye = dd( () => {
        var a;
        if (a = Xe) {
            var b;
            a = window;
            if (Qe === null) {
                Qe = "";
                try {
                    let c = "";
                    try {
                        c = a.top.location.hash
                    } catch (d) {
                        c = a.location.hash
                    }
                    c && (Qe = (b = c.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                } catch (c) {}
            }
            b = Qe;
            a = !!b.indexOf && b.indexOf("1337") >= 0
        }
        return a
    }
    );
    function Ze(a) {
        a && We && Ye() && (We.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
        We.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    function $e(a) {
        a.g = !1;
        a.j !== a.l.google_js_reporting_queue && (Ye() && Ea(a.j, Ze),
        a.j.length = 0)
    }
    var af = class {
        constructor(a) {
            this.j = [];
            this.l = a || w;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [],
            this.j = a.google_js_reporting_queue,
            b = a.google_measure_js_timing);
            this.g = Ye() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g)
                return null;
            a = new Ve(a,b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            We && Ye() && We.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (Se() || Re()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                We && Ye() && We.mark(b);
                !this.g || this.j.length > 2048 || this.j.push(a)
            }
        }
    }
    ;
    function bf(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }
    function cf(a, b, c, d, e) {
        const f = [];
        Xc(a, (g, h) => {
            (g = df(g, b, c, d, e)) && f.push(`${h}=${g}`)
        }
        );
        return f.join(b)
    }
    function df(a, b, c, d, e) {
        if (a == null)
            return "";
        b = b || "&";
        c = c || ",$";
        typeof c === "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d || (d = 0),
            d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++)
                    f.push(df(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a === "object")
            return e || (e = 0),
            e < 2 ? encodeURIComponent(cf(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
    function ef(a) {
        let b = 1;
        for (const c in a.j)
            c.length > b && (b = c.length);
        return 3997 - b - a.l.length - 1
    }
    function ff(a, b, c) {
        b = "https://" + b + c;
        let d = ef(a) - c.length;
        if (d < 0)
            return "";
        a.g.sort( (f, g) => f - g);
        c = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f]
              , h = a.j[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    c = c == null ? g : c;
                    break
                }
                let m = cf(h[k], a.l, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        b += m;
                        e = a.l;
                        break
                    }
                    c = c == null ? g : c
                }
            }
        }
        a = "";
        c != null && (a = `${e}${"trn"}=${c}`);
        return b + a
    }
    var gf = class {
        constructor() {
            this.l = "&";
            this.j = {};
            this.A = 0;
            this.g = []
        }
    }
    ;
    const hf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    var lf = class {
        constructor(a=null) {
            this.ca = jf;
            this.g = a;
            this.j = null;
            this.A = !1;
            this.C = this.Ja
        }
        l(a) {
            this.j = a
        }
        B(a) {
            this.A = a
        }
        za(a, b, c) {
            let d, e;
            try {
                this.g && this.g.g ? (e = this.g.start(a.toString(), 3),
                d = b(),
                this.g.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    Ze(e),
                    b = this.C(a, Le(f), void 0, c)
                } catch (g) {
                    this.Ja(217, g)
                }
                if (b)
                    window.console?.error?.(f);
                else
                    throw f;
            }
            return d
        }
        aa(a, b) {
            return (...c) => this.za(a, () => b.apply(void 0, c))
        }
        Ja(a, b, c, d, e) {
            e = e || "jserror";
            let f = void 0;
            try {
                const x = new gf;
                var g = x;
                g.g.push(1);
                g.j[1] = bf("context", a);
                b.error && b.meta && b.id || (b = Le(b));
                g = b;
                if (g.msg) {
                    b = x;
                    var h = g.msg.substring(0, 512);
                    b.g.push(2);
                    b.j[2] = bf("msg", h)
                }
                var k = g.meta || {};
                h = k;
                if (this.j)
                    try {
                        this.j(h)
                    } catch (M) {}
                if (d)
                    try {
                        d(h)
                    } catch (M) {}
                d = x;
                k = [k];
                d.g.push(3);
                d.j[3] = k;
                var m;
                if (!(m = p)) {
                    d = w;
                    k = [];
                    h = null;
                    do {
                        var l = d;
                        if (Zc(l)) {
                            var n = l.location.href;
                            h = l.document && l.document.referrer || null
                        } else
                            n = h,
                            h = null;
                        k.push(new Pe(n || ""));
                        try {
                            d = l.parent
                        } catch (M) {
                            d = null
                        }
                    } while (d && l !== d);
                    for (let M = 0, Nb = k.length - 1; M <= Nb; ++M)
                        k[M].depth = Nb - M;
                    l = w;
                    if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length === k.length - 1)
                        for (n = 1; n < k.length; ++n) {
                            const M = k[n];
                            M.url || (M.url = l.location.ancestorOrigins[n - 1] || "",
                            M.g = !0)
                        }
                    m = k
                }
                var p = m;
                let O = new Pe(w.location.href,!1);
                m = null;
                const J = p.length - 1;
                for (l = J; l >= 0; --l) {
                    var t = p[l];
                    !m && Ne.test(t.url) && (m = t);
                    if (t.url && !t.g) {
                        O = t;
                        break
                    }
                }
                t = null;
                const S = p.length && p[J].url;
                O.depth !== 0 && S && (t = p[J]);
                f = new Oe(O,t);
                if (f.j) {
                    p = x;
                    var q = f.j.url || "";
                    p.g.push(4);
                    p.j[4] = bf("top", q)
                }
                var u = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    const M = f.g.url.match(hf);
                    var y = M[1]
                      , T = M[3]
                      , H = M[4];
                    q = "";
                    y && (q += y + ":");
                    T && (q += "//",
                    q += T,
                    H && (q += ":" + H));
                    var v = q
                } else
                    v = "";
                y = x;
                u = [u, {
                    url: v
                }];
                y.g.push(5);
                y.j[5] = u;
                kf(this.ca, e, x, this.A, c)
            } catch (x) {
                try {
                    kf(this.ca, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Me(x),
                        url: f?.g.url ?? ""
                    }, this.A, c)
                } catch (O) {}
            }
            return !0
        }
    }
    ;
    var mf = class extends E {
    }
    ;
    function nf(a, b) {
        try {
            const c = d => [{
                [d.kc]: d.ac
            }];
            return JSON.stringify([a.filter(d => d.Fb).map(c), cc(b), a.filter(d => !d.Fb).map(c)])
        } catch (c) {
            return of(c, b),
            ""
        }
    }
    function of(a, b) {
        try {
            Ie({
                m: Me(a instanceof Error ? a : Error(String(a))),
                b: (Ib(D(b, 1)) ?? 0) || null,
                v: (Pc(b, 2) ?? "") || null
            })
        } catch (c) {}
    }
    function pf(a) {
        if (a.A) {
            var b = a.l
              , c = Set;
            var d = uc(a.l, 3, Lb, tc());
            c = [...(new c([...d, ...a.A()]))];
            Ac(b, 3, c, Jb)
        }
        return lc(a.l)
    }
    var qf = class {
        constructor(a, b, c) {
            this.A = c;
            c = new mf;
            a = Bc(c, 1, Hb(a), 0);
            this.l = Tc(a, 2, b)
        }
    }
    ;
    function rf(a) {
        var b = new sf;
        return Ac(b, 1, a, Gb)
    }
    var sf = class extends E {
    }
    ;
    var tf = class extends E {
        getTagSessionCorrelator() {
            return Qc(this, 13)
        }
    }
      , uf = [12];
    var vf = class extends E {
        getTagSessionCorrelator() {
            return Qc(this, 1)
        }
        nb(a) {
            return Rc(this, 5, a)
        }
    }
      , wf = [3, 4, 6, 7, 8];
    var xf = class extends E {
    }
    ;
    var yf = class extends E {
    }
    ;
    function zf(a) {
        var b = Math
          , c = b.trunc;
        a: {
            if (globalThis.performance) {
                var d = performance.timeOrigin + performance.now();
                if (Number.isFinite(d) && d > 0)
                    break a
            }
            d = Date.now();
            d = Number.isFinite(d) && d > 0 ? d : 0
        }
        return Sc(a, 7, c.call(b, d))
    }
    function Af(a) {
        var b = new Bf;
        return Bc(b, 10, Kb(a), 0)
    }
    var Bf = class extends E {
        getTagSessionCorrelator() {
            return Qc(this, 8)
        }
        nb(a) {
            return Rc(this, 12, a)
        }
        getNoShowReasons() {
            return Qc(this, Gc(this, Cf, 4))
        }
    }
      , Cf = [3, 4, 6];
    var Df = class extends E {
    }
    ;
    function Ef() {
        var a = Ff();
        a = kc(a);
        return Tc(a, 1, Gf())
    }
    var Hf = class extends E {
    }
    ;
    var If = class extends E {
    }
    ;
    var Jf = class extends E {
        getTagSessionCorrelator() {
            return Qc(this, 1)
        }
        nb(a) {
            return Rc(this, 2, a)
        }
    }
    ;
    var Kf = class extends E {
    }
      , Lf = [1, 7]
      , Mf = [4, 6, 8];
    class Nf extends qf {
        constructor() {
            super(...arguments)
        }
    }
    function Of(a, ...b) {
        Pf(a, ...b.map(c => ({
            Fb: !0,
            kc: 3,
            ac: cc(c)
        })))
    }
    function Qf(a, ...b) {
        Pf(a, ...b.map(c => ({
            Fb: !0,
            kc: 19,
            ac: cc(c)
        })))
    }
    function Rf(a, ...b) {
        Pf(a, ...b.map(c => ({
            Fb: !0,
            kc: 28,
            ac: cc(c)
        })))
    }
    var Sf = class extends Nf {
    }
    ;
    function Tf(a, b) {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: b.length < 65536,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch( () => {}
        )
    }
    ;function Pf(a, ...b) {
        try {
            a.g.push(...b),
            a.g.length >= 100 && Uf(a),
            a.g.length && a.j === null && (a.j = setTimeout( () => {
                Uf(a)
            }
            , a.C))
        } catch (c) {
            of(c, pf(a))
        }
    }
    function Uf(a) {
        a.j !== null && (clearTimeout(a.j),
        a.j = null);
        if (a.g.length) {
            var b = nf(a.g, pf(a));
            a.B("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var Xf = class extends Sf {
        constructor(a, b) {
            super(2, a, Vf);
            this.B = Tf;
            this.C = b;
            this.g = [];
            this.j = null
        }
    }
      , Yf = class extends Xf {
        constructor(a, b=1E3) {
            super(a, b)
        }
    }
    ;
    var Zf = a => {
        var b = "Wb";
        if (a.Wb && a.hasOwnProperty(b))
            return a.Wb;
        b = new a;
        return a.Wb = b
    }
    ;
    function $f(a, b, c) {
        return b[a] || c
    }
    ;function ag(a, b) {
        a.g = c => $f(3, b, () => [])(c ?? 1)
    }
    class bg {
        g() {
            return []
        }
    }
    function Vf(a) {
        return Zf(bg).g(a)
    }
    ;function kf(a, b, c, d=!1, e) {
        if ((d ? a.g : Math.random()) < (e || .01))
            try {
                let f;
                c instanceof gf ? f = c : (f = new gf,
                Xc(c, (h, k) => {
                    var m = f;
                    const l = m.A++;
                    h = bf(k, h);
                    m.g.push(l);
                    m.j[l] = h
                }
                ));
                const g = ff(f, a.domain, a.path + b + "&");
                g && Ge(w, g)
            } catch (f) {}
    }
    function cg(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    var dg = class {
        constructor() {
            this.domain = "pagead2.googlesyndication.com";
            this.path = "/pagead/gen_204?id=";
            this.g = Math.random()
        }
    }
    ;
    let jf, eg;
    const fg = new af(window);
    (function(a) {
        jf = a ?? new dg;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        cg(jf, window.google_srt);
        eg = new lf(fg);
        eg.l( () => {}
        );
        eg.B(!0);
        window.document.readyState === "complete" ? window.google_measure_js_timing || $e(fg) : fg.g && I(window, "load", () => {
            window.google_measure_js_timing || $e(fg)
        }
        )
    }
    )();
    function gg(a, b) {
        return a.g[hg(b)] !== void 0
    }
    function ig(a) {
        const b = [];
        for (const c in a.g)
            a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    var jg = class {
        constructor() {
            this.g = {};
            this.j = {}
        }
        set(a, b) {
            const c = hg(a);
            this.g[c] = b;
            this.j[c] = a
        }
        get(a, b) {
            a = hg(a);
            return this.g[a] !== void 0 ? this.g[a] : b
        }
        Db() {
            return ig(this).length
        }
        clear() {
            this.g = {};
            this.j = {}
        }
    }
    ;
    function hg(a) {
        return a instanceof Object ? String(z(a)) : a + ""
    }
    ;var kg = class {
        constructor(a) {
            this.C = a.g != null ? a.g : !0;
            this.B = a.L != null ? a.L : 0;
            this.A = a.B != null ? a.B : .9;
            this.j = a.j != null ? a.j : 1.05;
            this.minWidth = a.G != null ? a.G : 0;
            this.G = a.A != null ? a.A : 25;
            this.l = a.l != null ? a.l : 0;
            this.H = a.C != null ? a.C : !1;
            this.L = a.H || null;
            this.g = a.J || null
        }
    }
      , lg = class {
        build() {
            return new kg(this)
        }
    }
    ;
    function mg(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }
    ;var ng = 728 * 1.38;
    function og(a) {
        return a.innerHeight >= a.innerWidth
    }
    function pg(a) {
        a = a.document;
        let b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }
    function L(a) {
        return pg(a).clientWidth ?? void 0
    }
    function qg(a, b) {
        const c = pg(a);
        return b ? c.scrollHeight === pg(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
    }
    function rg(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }
    function sg(a) {
        return a.pageYOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }
    function tg(a) {
        return a.pageXOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }
    function ug(a) {
        const b = {};
        let c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                const d = c[a];
                if ("key"in d && "value"in d) {
                    const e = d.value;
                    b[d.key] = e == null ? null : String(e)
                }
            }
        return b
    }
    function vg(a) {
        const b = {
            bottom: "auto",
            clear: "none",
            display: "inline",
            "float": "none",
            height: "auto",
            left: "auto",
            margin: 0,
            "margin-bottom": 0,
            "margin-left": 0,
            "margin-right": "0",
            "margin-top": 0,
            "max-height": "none",
            "max-width": "none",
            opacity: 1,
            overflow: "visible",
            padding: 0,
            "padding-bottom": 0,
            "padding-left": 0,
            "padding-right": 0,
            "padding-top": 0,
            position: "static",
            right: "auto",
            top: "auto",
            "vertical-align": "baseline",
            visibility: "visible",
            width: "auto",
            "z-index": "auto"
        };
        Ea(Object.keys(b), c => {
            const d = a.style[zd(c)];
            (typeof d !== "undefined" ? d : a.style[pe(a, c)]) || G(a, c, b[c])
        }
        );
        Td(a)
    }
    ;function wg(a, b) {
        var c = L(a);
        var d = pg(a).clientHeight;
        if (typeof c !== "number" || typeof d !== "number")
            throw Error("No VP width and/or height.");
        c = new ce(c,d);
        d = tg(a);
        a = sg(a);
        a = xg(a, c.width + d, c.height + a, d);
        return (mg(b, a) ? new ne(Math.max(b.top, a.top),Math.min(b.right, a.right),Math.min(b.bottom, a.bottom),Math.max(b.left, a.left)) : null) || xg(0, 0, 0, 0)
    }
    function yg(a, b) {
        const c = tg(b)
          , d = sg(b);
        if (a.getBoundingClientRect)
            return a = a.getBoundingClientRect(),
            zg(a) ? xg(a.top + d, a.right + c, a.bottom + d, a.left + c) : xg(0, 0, 0, 0);
        b = b.document.createRange();
        b.selectNodeContents(a);
        return b.collapsed ? xg(0, 0, 0, 0) : b.getBoundingClientRect ? (a = b.getBoundingClientRect(),
        zg(a) ? xg(a.top + d, a.right + c, a.bottom + d, a.left + c) : xg(0, 0, 0, 0)) : xg(0, 0, 0, 0)
    }
    function zg(a) {
        return !!a && typeof a.top === "number" && !isNaN(a.top) && typeof a.right === "number" && !isNaN(a.right) && typeof a.bottom === "number" && !isNaN(a.bottom) && typeof a.left === "number" && !isNaN(a.left)
    }
    const xg = (a, b, c, d) => new ne(Math.ceil(a),Math.floor(b),Math.floor(c),Math.ceil(d));
    function Ag(a, b) {
        Bg(a).forEach(b, void 0)
    }
    function Bg(a) {
        const b = []
          , c = a.length;
        for (let d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    ;function Cg(a, b) {
        return gg(a.g, b)
    }
    var Dg = class {
        constructor(a) {
            this.g = new jg;
            if (a)
                for (let b = 0; b < a.length; ++b)
                    this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
    }
    ;
    class Eg {
        constructor(a, b) {
            this.g = a[w.Symbol.iterator]();
            this.j = b
        }
        [Symbol.iterator]() {
            return this
        }
        next() {
            const a = this.g.next();
            return {
                value: a.done ? void 0 : this.j.call(void 0, a.value),
                done: a.done
            }
        }
    }
    function Fg(a, b) {
        return new Eg(a,b)
    }
    ;function Gg() {}
    Gg.prototype.next = function() {
        return Hg
    }
    ;
    const Hg = {
        done: !0,
        value: void 0
    };
    Gg.prototype.Ma = function() {
        return this
    }
    ;
    function Ig(a) {
        if (a instanceof Gg)
            return a;
        if (typeof a.Ma == "function")
            return a.Ma(!1);
        if (ka(a)) {
            let b = 0;
            const c = new Gg;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        return Hg;
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
    function Jg(a) {
        a = Ig(a);
        const {done: b, value: c} = a.next();
        return b ? null : c
    }
    ;function Kg(a) {
        if (a instanceof Lg || a instanceof Mg || a instanceof Ng)
            return a;
        if (typeof a.next == "function")
            return new Lg( () => a);
        if (typeof a[Symbol.iterator] == "function")
            return new Lg( () => a[Symbol.iterator]());
        if (typeof a.Ma == "function")
            return new Lg( () => a.Ma());
        throw Error("Not an iterator or iterable.");
    }
    class Lg {
        constructor(a) {
            this.g = a
        }
        Ma() {
            return new Mg(this.g())
        }
        [Symbol.iterator]() {
            return new Ng(this.g())
        }
        j() {
            return new Ng(this.g())
        }
    }
    class Mg extends Gg {
        constructor(a) {
            super();
            this.g = a
        }
        next() {
            return this.g.next()
        }
        [Symbol.iterator]() {
            return new Ng(this.g)
        }
        j() {
            return new Ng(this.g)
        }
    }
    class Ng extends Lg {
        constructor(a) {
            super( () => a);
            this.l = a
        }
        next() {
            return this.l.next()
        }
    }
    ;function Og(a, b) {
        this.j = {};
        this.g = [];
        this.l = this.size = 0;
        var c = arguments.length;
        if (c > 1) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Og)
                for (c = Pg(a),
                d = 0; d < c.length; d++)
                    this.set(c[d], a.get(c[d]));
            else
                for (d in a)
                    this.set(d, a[d])
    }
    r = Og.prototype;
    r.Db = function() {
        return this.size
    }
    ;
    function Pg(a) {
        Qg(a);
        return a.g.concat()
    }
    r.has = function(a) {
        return Rg(this.j, a)
    }
    ;
    r.equals = function(a, b) {
        if (this === a)
            return !0;
        if (this.size != a.Db())
            return !1;
        b = b || Sg;
        Qg(this);
        let c;
        for (let d = 0; c = this.g[d]; d++)
            if (!b(this.get(c), a.get(c)))
                return !1;
        return !0
    }
    ;
    function Sg(a, b) {
        return a === b
    }
    r.isEmpty = function() {
        return this.size == 0
    }
    ;
    r.clear = function() {
        this.j = {};
        this.l = this.size = this.g.length = 0
    }
    ;
    r.delete = function(a) {
        return Rg(this.j, a) ? (delete this.j[a],
        --this.size,
        this.l++,
        this.g.length > 2 * this.size && Qg(this),
        !0) : !1
    }
    ;
    function Qg(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length; ) {
                var d = a.g[b];
                Rg(a.j, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            b = {};
            for (d = c = 0; c < a.g.length; ) {
                const e = a.g[c];
                Rg(b, e) || (a.g[d++] = e,
                b[e] = 1);
                c++
            }
            a.g.length = d
        }
    }
    r.get = function(a, b) {
        return Rg(this.j, a) ? this.j[a] : b
    }
    ;
    r.set = function(a, b) {
        Rg(this.j, a) || (this.size += 1,
        this.g.push(a),
        this.l++);
        this.j[a] = b
    }
    ;
    r.forEach = function(a, b) {
        const c = Pg(this);
        for (let d = 0; d < c.length; d++) {
            const e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    r.keys = function() {
        return Kg(this.Ma(!0)).j()
    }
    ;
    r.values = function() {
        return Kg(this.Ma(!1)).j()
    }
    ;
    r.entries = function() {
        const a = this;
        return Fg(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    }
    ;
    r.Ma = function(a) {
        Qg(this);
        let b = 0;
        const c = this.l
          , d = this
          , e = new Gg;
        e.next = function() {
            if (c != d.l)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length)
                return Hg;
            const f = d.g[b++];
            return {
                value: a ? f : d.j[f],
                done: !1
            }
        }
        ;
        return e
    }
    ;
    function Rg(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;function Tg(a) {
        return a == "transparent" || a.substring(0, 4) == "rgba" && (a = a.split(","),
        a.length == 4 && parseFloat(a[3]) < .5) ? !0 : !1
    }
    function Ug() {
        Ea(Vg, a => {
            a.J = null;
            a.G = null
        }
        )
    }
    function Wg(a) {
        if (!a.I.ownerDocument)
            throw Error("Wrapped node should have an owner document.");
        return a.I.ownerDocument
    }
    function Xg(a) {
        a = Wg(a);
        return a.defaultView || a.parentWindow
    }
    function Yg(a) {
        const b = a.l.g(a.l.j);
        return b == a || b != a && ie(b.I, a.I)
    }
    function Zg(a) {
        return Bg(a.I.childNodes).map(b => a.l.g(b)).filter(cd(b => b === null))
    }
    function $g(a) {
        if (!a.g())
            return null;
        const b = Zg(a.g());
        a = Da(b, a);
        if (a == -1)
            return null;
        for (a += 1; a < b.length; ++a)
            if (b[a].A() || b[a].sa())
                return b[a];
        return null
    }
    function ah(a) {
        const b = $g(a);
        return b ? b : a.g() ? ah(a.g()) : null
    }
    function bh(a, b) {
        b.push(a);
        a = Zg(a);
        for (let c = 0; c < a.length; ++c)
            bh(a[c], b)
    }
    function ch(a) {
        var b = a.j();
        if (b.top != 0 || b.right != 0 || b.bottom != 0 || b.left != 0) {
            var c = tg(Xg(a));
            a = sg(Xg(a));
            c = -c;
            a = -a;
            c instanceof $d ? (b.left += c.x,
            b.right += c.x,
            b.top += c.y,
            b.bottom += c.y) : (b.left += c,
            b.right += c,
            typeof a === "number" && (b.top += a,
            b.bottom += a))
        }
        return b
    }
    function N(a, b) {
        if (a.I.nodeType != 1)
            return null;
        a.B = a.B || Xg(a).getComputedStyle(a.I);
        return a.B ? a.B[b] || a.B.getPropertyValue(b) || "" : ""
    }
    function dh(a, b, c) {
        if (a.L[b] !== void 0)
            return a.L[b];
        a.L[b] = eh(a, b, c);
        return a.L[b]
    }
    function fh(a) {
        if (a.M !== void 0)
            return a.M;
        var b = N(a, "position");
        if (b == "fixed" || b == "sticky")
            b = a;
        else {
            var c = a.g();
            b = c && a.I.tagName != "BODY" ? (c = fh(c)) || b != "absolute" && b != "relative" ? c : a : null
        }
        a.M = b;
        return a.M
    }
    function gh(a, b) {
        const c = fh(a);
        if (c && N(c, "position") != "relative")
            if (b != null)
                a: {
                    do {
                        const d = a.j();
                        if ((d.right - d.left) * (d.bottom - d.top) > b) {
                            b = !1;
                            break a
                        }
                        if (a == c)
                            break;
                        a = a.g()
                    } while (a !== null);
                    b = !0
                }
            else
                b = !0;
        else
            b = !1;
        return b
    }
    function eh(a, b, c) {
        const d = N(a, "position");
        a: switch (b) {
        case 0:
            var e = N(a, "overflow") == "hidden" || N(a, "overflow") == "scroll" || N(a, "overflow-x") == "hidden" || N(a, "overflow-x") == "scroll";
            break a;
        case 1:
            e = N(a, "overflow") == "hidden" || N(a, "overflow") == "scroll" || N(a, "overflow-y") == "hidden" || N(a, "overflow-y") == "scroll";
            break a;
        default:
            throw Error("Unknown pageAxis: " + b);
        }
        switch (d) {
        case "fixed":
            if (e)
                return a;
            break;
        case "static":
        case "":
        case null:
            if (e && !c)
                return a;
            if (a.g())
                return dh(a.g(), b, c);
            break;
        case "absolute":
        case "relative":
            if (e)
                return a;
            if (a.g())
                return dh(a.g(), b, d == "absolute");
            break;
        default:
            w.console.error("Unknown position value: " + d)
        }
        return null
    }
    function hh(a) {
        var b = a.I.scrollHeight;
        const c = a.I.clientHeight
          , d = Wg(a).createElement("div");
        d.style.width = "100%";
        d.style.height = Math.max(b, c) + 100 + "px";
        d.style.clear = "both";
        a.I.appendChild(d);
        b = a.I.scrollHeight > a.I.clientHeight && a.I.scrollHeight - b > a.I.clientHeight - c;
        a.I.removeChild(d);
        return b
    }
    function ih(a) {
        return a.H !== null ? a.H : N(a, "opacity") != "1" || a.g() && !ih(a.g()) ? a.H = !1 : a.H = !0
    }
    function jh(a) {
        a = a.j();
        a = new ne(Math.max(a.top, 0),Math.max(a.right, 0),Math.max(a.bottom, 0),Math.max(a.left, 0));
        return a.left < a.right && a.top < a.bottom
    }
    function kh(a) {
        return a.C !== null ? a.C : a.g() && kh(a.g()) || N(a, "opacity") == "0" || N(a, "display") == "none" || N(a, "visibility") == "hidden" || a.I.tagName && a.I.tagName.toLowerCase() == "input" && a.I.type && a.I.type == "hidden" ? a.C = !0 : a.C = !1
    }
    function lh(a, b) {
        return b(a) ? !0 : a.g() ? lh(a.g(), b) : !1
    }
    function mh(a) {
        return !lh(a, b => N(b, "overflow-y") == "hidden")
    }
    function nh(a) {
        a = N(a, "position");
        return a == "absolute" || a == "relative"
    }
    function oh(a) {
        return a.A() && (a = parseInt(N(a, "z-index"), 10),
        !isNaN(a)) ? a : 0
    }
    function ph(a, b) {
        return lh(a, c => !!c.I.tagName && c.I.tagName == b)
    }
    function qh(a, b) {
        return lh(a, c => {
            c = c.I;
            return !!c.id && !!c.id.match && !!c.id.match(b)
        }
        )
    }
    function rh(a, b) {
        return lh(a, c => {
            a: {
                c = sh(c);
                for (let d = 0; d < c.length; ++d)
                    if (c[d].match(b)) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            return c
        }
        )
    }
    function sh(a) {
        return (a = a.I.className) && typeof a.split === "function" ? /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1].split(/\s+/) : []
    }
    function th(a) {
        return a.I.tagName == "A" ? a.I.getAttribute("href") : (a = a.g()) ? th(a) : null
    }
    function uh(a) {
        if (a.I.nodeType != 1) {
            var b = a.g();
            return b ? uh(b) : 0
        }
        const c = Wg(a).createTextNode("A");
        a.I.appendChild(c);
        b = a.l.g(c);
        if (!b)
            throw a.I.removeChild(c),
            Error("Unable to insert textnode");
        a = b.j();
        b.I.parentNode && b.I.parentNode.removeChild(b.I);
        return a.bottom - a.top
    }
    function vh(a, b) {
        if (b || a.K == null) {
            if (b && !b(a))
                return 0;
            let c = 0;
            if (a.sa())
                c = a.I.textContent.trim().length;
            else {
                const d = Zg(a);
                for (let e = 0; e < d.length; e++)
                    c += vh(d[e], b)
            }
            b || (a.K = c);
            return c
        }
        return a.K
    }
    var wh = class {
        constructor(a, b) {
            this.I = a;
            this.l = b;
            this.C = this.H = this.R = this.W = null;
            this.L = {};
            this.B = this.G = this.K = null;
            new Og
        }
        g() {
            return this.I != this.l.j && this.I.parentNode ? this.l.g(this.I.parentNode) : null
        }
        A() {
            return this.I.nodeType == 1
        }
        sa() {
            return this.I.nodeType == 3
        }
        j() {
            if (!this.J) {
                this.G || (this.G = yg(this.I, Xg(this)));
                var a = oe(this.G);
                var b = N(this, "position");
                if (b == "fixed")
                    b = wg(Xg(this), a);
                else if (this.g()) {
                    var c = dh(this.g(), 0, b == "absolute");
                    if (c) {
                        var d = c.j();
                        c = d.left;
                        d = d.right;
                        a = a.left >= d || a.right <= c ? null : xg(a.top, Math.min(a.right, d), a.bottom, Math.max(a.left, c))
                    }
                    a && (b = dh(this.g(), 1, b == "absolute")) && (c = b.j(),
                    b = a,
                    a = c.top,
                    c = c.bottom,
                    a = b.top >= c || b.bottom <= a ? null : xg(Math.max(b.top, a), b.right, Math.min(b.bottom, c), b.left));
                    b = a && fh(this) && N(fh(this), "position") == "fixed" ? wg(Xg(this), a) : a || new ne(0,0,0,0)
                } else
                    b = a;
                this.J = b
            }
            return oe(this.J)
        }
        Wa() {
            return !jh(this) || kh(this)
        }
        Xb() {
            var a = N(this, "background-color");
            if (a = a ? Tg(a) : !0)
                a = N(this, "background-image"),
                a = !(a && a != "none");
            return a
        }
        toString() {
            switch (this.I.nodeType) {
            case 1:
                const a = this.I;
                let b = a.tagName;
                a.id && (b += "#" + a.id);
                a.className && typeof a.className.split === "function" && (b += "." + a.className.split(/\s+/).join("."));
                return b;
            case 3:
                return "TEXT#" + this.I.textContent.substr(0, 10);
            default:
                return "HtmlNode"
            }
        }
    }
    ;
    function xh(a, b) {
        const c = z(b);
        var d = a.A.get(c);
        if (typeof d === "boolean")
            return d;
        d = a.B && b.nodeType == 3 ? !/\S/.test(b.data) : b.nodeType != 1 && b.nodeType != 3 && b.nodeType != 9 || b.tagName && (b.tagName == "SCRIPT" || b.tagName == "STYLE") ? !0 : !1;
        !d && b.parentNode && b != a.j && (d = xh(a, b.parentNode));
        a.A.set(c, d);
        return d
    }
    var yh = class {
        constructor(a, b) {
            this.j = a;
            this.B = b;
            this.A = new jg;
            this.l = new jg
        }
        g(a) {
            const b = z(a)
              , c = this.l.get(b);
            if (c)
                return c;
            if (xh(this, a))
                return null;
            a = new wh(a,this);
            this.l.set(b, a);
            return a
        }
    }
      , Vg = [];
    var Ah = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g(a) {
            return Cg(zh(this.l, a), this.j)
        }
    }
    ;
    function zh(a, b) {
        const c = z(b)
          , d = a.j.get(c);
        if (d)
            return d;
        b = a.g(b);
        a.j.set(c, b);
        return b
    }
    var Bh = class {
        constructor() {
            this.j = new jg
        }
    }
    ;
    function Ch(a, b) {
        let c = th(b);
        if (a.l.g(b) && c !== null)
            return c;
        b = Zg(b);
        if (b.length < 1)
            return null;
        c = Ch(a, b[0]);
        for (let d = 1; d < b.length; ++d)
            if (Ch(a, b[d]) != c)
                return null;
        return c
    }
    var Dh = class extends Bh {
        constructor(a) {
            super();
            this.l = a
        }
        g(a) {
            return new Dg(Ch(this, a) !== null ? [1] : [])
        }
    }
    ;
    var Eh = class extends Bh {
        constructor(a) {
            super();
            this.l = a
        }
        g(a) {
            a: if (a.I.nodeType == 3)
                var b = this.l.g(a);
            else {
                b = !1;
                a = Zg(a);
                for (let c of a) {
                    if ((a = N(c, "display")) && a != "inline") {
                        b = !1;
                        break a
                    }
                    Cg(zh(this, c), 0) && (b = !0)
                }
            }
            return new Dg(b ? [0] : [])
        }
    }
    ;
    function Fh(a, b) {
        return vh(b, c => !a.l.g(c))
    }
    var Gh = class extends Bh {
        constructor(a, b, c) {
            super();
            this.A = a;
            this.l = b;
            this.B = c
        }
        g(a) {
            if (this.A.g(a) && !this.l.g(a) && !this.B.g(a) && Fh(this, a) >= 50) {
                var b = uh(a);
                a = a.j();
                b = a.bottom - a.top >= 2 * b || !1
            } else
                b = !1;
            return new Dg(b ? [3] : [])
        }
    }
    ;
    function Hh(a) {
        return a.classList ? a.classList.contains("adsbygoogle") : Ia(a.classList ? a.classList : (typeof a.className == "string" ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle")
    }
    ;function Ih(a, b) {
        return a.l.g(b) ? lh(b, function(c) {
            switch (c.I.tagName) {
            case "H1":
            case "H2":
            case "H3":
            case "H4":
            case "H5":
            case "H6":
                return !0
            }
            return !1
        }) || Jh(b) && vh(b) >= 5 ? !0 : (b = b.g()) ? Cg(zh(a, b), 2) : !1 : !1
    }
    function Jh(a) {
        a = sh(a);
        for (let b of a)
            if (b.match(/title|titulo|hdg|heading|header|^h[1-6]$/) && !b.match(/subtitle/))
                return !0;
        return !1
    }
    var Kh = class extends Bh {
        constructor(a) {
            super();
            this.l = a
        }
        g(a) {
            return new Dg(Ih(this, a) ? [2] : [])
        }
    }
    ;
    function Lh(a) {
        const b = [];
        Ea(a, c => {
            c.I.nodeType == 1 && (Mh(c, ":before", b),
            Mh(c, ":after", b))
        }
        );
        return b
    }
    function Nh(a) {
        a = N(a, "content");
        if (!a || "none" == a || /\(.*\)/.test(a))
            return !1;
        /^['"].*['"]$/.test(a) && (a = a.substring(1, a.length - 1));
        return a.trim().length > 0
    }
    var Oh = class extends wh {
        constructor(a, b) {
            super(a.I, a.l);
            this.U = a;
            this.X = b;
            this.B = Xg(a).getComputedStyle(a.I, this.X)
        }
        A() {
            return !1
        }
        sa() {
            return !1
        }
        Wa() {
            if (!Nh(this) && this.Xb())
                var a = !0;
            else if (!(a = this.g().Wa() || kh(this) || !jh(this))) {
                a = Nh(this);
                const c = N(this, "width");
                var b = N(this, "height");
                b = a && b == "auto" || parseFloat(b) > 0;
                a = !((a && c == "auto" || parseFloat(c) > 0) && b)
            }
            return a
        }
        g() {
            return this.U
        }
        Xb() {
            var a = this.g().I;
            a = se(a, "backgroundColor");
            const b = N(this, "background-color");
            return b == null || b == a || Tg(b) || N(this, "position") != "fixed"
        }
        j() {
            switch (N(this, "position")) {
            case "absolute":
                var a = this.g().j();
                const b = a.top + parseInt(N(this, "top"), 10);
                a = a.left + parseInt(N(this, "left"), 10);
                let c = parseInt(N(this, "width"), 10)
                  , d = parseInt(N(this, "height"), 10);
                return new ne(b,a + c,b + d,a);
            case "fixed":
                return new ne(0,parseInt(N(this, "width"), 10),parseInt(N(this, "height"), 10),0);
            default:
                return this.g().j()
            }
        }
    }
    ;
    const Mh = (a, b, c) => {
        if (b == ":before" || b == ":after") {
            var d = new Oh(a,b);
            if (!d.Wa())
                switch (c.push(d),
                b) {
                case ":before":
                    a.W = d;
                    break;
                case ":after":
                    a.R = d;
                    break;
                default:
                    throw Error("Unsupported pseudo type " + b);
                }
        }
    }
    ;
    const Ph = new Dg("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    var Qh = class extends Bh {
        g(a) {
            var b = a.I
              , c = Wg(a);
            if (b.nodeType == 3) {
                var d = b.data;
                c = d.indexOf("&") != -1 ? wd(d, c) : d;
                c = /\S/.test(c)
            } else
                c = !1;
            (c = c || (a instanceof Oh ? Nh(a) : !1)) || (b = b.tagName,
            c = !!b && Cg(Ph, b.toUpperCase()));
            a = c && !a.Wa();
            return new Dg(a ? [6] : [])
        }
    }
    ;
    function Rh(a) {
        a.B || (a.B = new Qh);
        return a.B
    }
    function Sh(a) {
        a.j || (a.j = new Eh(new Ah(Rh(a),6)));
        return a.j
    }
    function Th(a) {
        a.l || (a.l = new Kh(new Ah(Sh(a),0)));
        return a.l
    }
    var Uh = class {
        constructor() {
            this.A = this.l = this.g = this.j = this.B = null
        }
    }
    ;
    var Vh = class {
        constructor() {
            this.g = new Uh
        }
    }
    ;
    function Wh(a) {
        const b = [];
        for (const c of a.g)
            b.push(c);
        return b
    }
    var Xh = class {
        constructor() {
            this.g = [];
            this.l = new Dg
        }
    }
    ;
    var Yh = class {
        constructor(a, b, c) {
            this.g = a;
            this.j = b;
            this.l = c
        }
        pa() {
            return this.l
        }
    }
    ;
    const $h = (a, b, c) => {
        b = Zh(a.W, b, c);
        const d = new Yh(a,0,b++);
        c.Aa.push(d);
        for (var e of Zg(a))
            b = $h(e, b, c);
        e = new Yh(a,1,b++);
        c.Aa.push(e);
        c.map.set(z(a), {
            start: d,
            end: e
        });
        return b = Zh(a.R, b, c)
    }
      , Zh = (a, b, c) => {
        if (!a)
            return b;
        const d = new Yh(a,0,b++)
          , e = new Yh(a,1,b++);
        c.Aa.push(d);
        c.Aa.push(e);
        c.map.set(z(a), {
            start: d,
            end: e
        });
        return b
    }
    ;
    function ai(a) {
        if (a instanceof Oh)
            return !0;
        if (!a.A())
            return !1;
        const b = a.I
          , c = N(a, "position");
        if (b.tagName == "HTML" || c == "fixed" || N(a, "z-index") != "auto" && (c == "absolute" || c == "relative"))
            return !0;
        a = N(a, "opacity");
        return a != "1" && a != "" ? !0 : !1
    }
    function bi(a) {
        const b = a.g.g();
        return b ? ci(a.j, b) : null
    }
    var di = class {
        constructor(a, b) {
            this.g = a;
            this.j = b
        }
    }
      , gi = class {
        constructor() {
            this.g = new ei
        }
        compare(a, b) {
            var c = ci(this.g, a);
            const d = ci(this.g, b);
            c = fi(c, d);
            if (!c)
                return 0;
            switch (c.Ob) {
            case 0:
                return oh(a) - oh(c.Mb.g);
            case 1:
                return oh(c.Lb.g) - oh(b);
            case 2:
                return oh(c.Lb.g) - oh(c.Mb.g);
            default:
                throw Error("Unhandled adjacency.");
            }
        }
    }
    ;
    function ci(a, b) {
        const c = z(b);
        var d = a.g.get(c);
        if (d)
            return d;
        d = b.g();
        b = !d || ai(b) ? new di(b,a) : ci(a, d);
        a.g.set(c, b);
        return b
    }
    var ei = class {
        constructor() {
            this.g = new jg
        }
    }
    ;
    function fi(a, b) {
        if (a == b)
            return null;
        const c = new jg;
        var d = b;
        let e;
        for (; e = bi(d); ) {
            if (a == e)
                return {
                    Lb: a,
                    Ob: 0,
                    Mb: d
                };
            c.set(z(e), d);
            d = e
        }
        for (; e = bi(a); ) {
            if (e == b)
                return {
                    Lb: a,
                    Ob: 1,
                    Mb: b
                };
            if (d = c.get(z(e)))
                return {
                    Lb: a,
                    Ob: 2,
                    Mb: d
                };
            a = e
        }
        throw Error("Contexts not in same DOM.");
    }
    ;function hi(a, b, c, d=[]) {
        a = [].concat(a, d);
        b = new ii(b,c);
        for (let e of a)
            e.Xb() || e.Wa() || (c = b,
            a = e,
            c.g.push(a),
            c.l.add(z(a)));
        return b
    }
    var ii = class extends Xh {
        constructor(a, b) {
            super();
            this.j = a;
            this.B = b
        }
        A(a, b=!1) {
            const c = a.j();
            b = b ? Wh(this) : this.g.slice(0);
            for (let f = 0; f < b.length; ++f) {
                var d = b[f];
                if (!Yg(d))
                    continue;
                var e = d.j();
                if (!mg(e, c))
                    continue;
                const g = this.B.compare(d, a);
                if (!(e = g > 0) && (e = g == 0 && !(d != a && ie(d.I, a.I))))
                    a: {
                        e = a;
                        if (nh(d) && !nh(e)) {
                            e = !0;
                            break a
                        }
                        if (!nh(d) && nh(e)) {
                            e = !1;
                            break a
                        }
                        e = this.j.map.get(z(e));
                        d = this.j.map.get(z(d));
                        e = e && d && e.end.pa() < d.start.pa() ? !0 : !1
                    }
                if (e)
                    return !0
            }
            return !1
        }
    }
    ;
    var ji = class {
        constructor(a, b) {
            this.Ld = a;
            this.Qd = b
        }
    }
    ;
    function ki(a, b) {
        let c = 0
          , d = null;
        const e = a.g.slice(0);
        for (let f = 0; f < e.length; ++f) {
            const g = a.j.map.get(z(e[f]));
            g.end.pa() < b && g.end.pa() > c && (d = g,
            c = g.end.pa())
        }
        return d
    }
    var li = class extends Xh {
        constructor(a) {
            super();
            this.j = a
        }
    }
    ;
    var mi = class extends li {
        constructor(a, b) {
            super(a);
            this.B = b
        }
        A(a, b=!1) {
            const c = a.j()
              , d = gh(a);
            b = b ? Wh(this) : this.g.slice(0);
            for (let e = 0; e < b.length; ++e) {
                const f = b[e];
                if (Yg(f) && (d || !(this.B.compare(a, f) > 0)) && mg(b[e].j(), c))
                    return !0
            }
            return !1
        }
    }
    ;
    var ni = class {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.g = c
        }
    }
    ;
    var oi = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.j = a;
            this.B = b;
            this.T = c;
            this.O = d;
            this.A = e;
            this.l = f;
            this.g = g;
            this.C = h
        }
    }
    ;
    var pi = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.g = d
        }
    }
    ;
    var qi = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            if (!a)
                return [9];
            a = a.j();
            a = a.right - a.left;
            return this.j <= a && a <= this.l ? [] : [4]
        }
    }
    ;
    var ri = class {
        constructor(a, b) {
            this.g = a;
            this.j = b || null
        }
    }
    ;
    function si(a) {
        if (a.j != 0)
            throw Error("Already resolved/rejected.");
    }
    var vi = class {
        constructor() {
            this.g = new ti(this);
            this.j = 0
        }
        resolve(a) {
            si(this);
            this.j = 1;
            this.A = a;
            ui(this.g)
        }
        reject(a) {
            si(this);
            this.j = 2;
            this.l = a;
            ui(this.g)
        }
    }
    ;
    function ui(a) {
        switch (a.g.j) {
        case 0:
            break;
        case 1:
            a.j && a.j(a.g.A);
            break;
        case 2:
            a.l && a.l(a.g.l);
            break;
        default:
            throw Error("Unhandled deferred state.");
        }
    }
    var ti = class {
        constructor(a) {
            this.g = a
        }
        then(a, b) {
            if (this.j)
                throw Error("Then functions already set.");
            this.j = a;
            this.l = b;
            ui(this)
        }
    }
    ;
    function wi(a, b, c) {
        const d = new vi;
        a.g(new ri(function() {
            d.resolve(b())
        }
        ,c));
        return d.g
    }
    function xi(a, b, c, d) {
        a.g(new ri(function() {
            b.resolve(c)
        }
        ,d))
    }
    function yi(a, b) {
        a.g(new ri(function() {
            b.reject("n")
        }
        ,"rrej"))
    }
    var zi = class {
    }
    ;
    var Ai = class {
        constructor(a) {
            this.g = a
        }
    }
    ;
    function Bi(a, b) {
        const c = new vi;
        a.g.g(new ri(function() {
            Ci(a, b, c)
        }
        ,"idom"));
        return c.g
    }
    function Di(a) {
        return wi(a.g, function() {
            return new Vh
        }, "icla")
    }
    function Ei(a, b, c) {
        const d = new vi;
        Fi(a, b, new Ai(c.g)).then(function(e) {
            Gi(a, b).then(function(f) {
                Hi(a, b, e).then(function(g) {
                    d.resolve(new ni(f,g,e))
                })
            })
        });
        return d.g
    }
    function Ii(a, b, c) {
        const d = new vi;
        Bi(a, b).then(function(e) {
            Di(a).then(function(f) {
                Ei(a, e, f).then(function(g) {
                    xi(a.g, d, new pi(e,g,f,c))
                }, d.reject.bind(d))
            }, d.reject.bind(d))
        }, d.reject.bind(d));
        return d.g
    }
    function Ci(a, b, c) {
        const d = b.document.body;
        if (d) {
            var e = b.document.body.getBoundingClientRect().width;
            if (e == null)
                c.reject("bw");
            else {
                var f = L(b)
                  , g = pg(b).clientHeight;
                if (f == null || g == null)
                    c.reject("vp");
                else {
                    var h = (new yh(d,!0)).g(d);
                    if (h) {
                        var k = new gi;
                        Ji(a, h).then(m => {
                            Vg = m;
                            Ki(a, h).then(l => {
                                c.resolve(new oi(b,e,f,g,h,m,l,k))
                            }
                            )
                        }
                        )
                    } else
                        c.reject("nt")
                }
            }
        } else
            c.reject("b")
    }
    function Ji(a, b) {
        return wi(a.g, function() {
            const c = [];
            bh(b, c);
            return c
        }, "iflt")
    }
    function Ki(a, b) {
        return wi(a.g, function() {
            const c = {
                map: new jg,
                Aa: []
            };
            $h(b, 0, c);
            return c
        }, "intm")
    }
    function Fi(a, b, c) {
        return wi(a.g, function() {
            var d = b.l;
            const e = new mi(b.g,b.C)
              , f = new Ah(Rh(c.g),6);
            for (let h of d)
                if (f.g(h)) {
                    d = e;
                    var g = h;
                    d.g.push(g);
                    d.l.add(z(g))
                }
            return e
        }, "ivis")
    }
    function Gi(a, b) {
        return wi(a.g, function() {
            const c = Lh(b.l);
            return hi(b.l, b.g, b.C, c)
        }, "ibck")
    }
    function Hi(a, b, c) {
        return wi(a.g, function() {
            var d = b.g;
            const e = new jg;
            var f = 0;
            for (var g = 0; g < d.Aa.length; ++g) {
                var h = d.Aa[g], k = h.g, m;
                if (m = h.j == 1)
                    m = N(k, "float"),
                    m = m == "left" || m == "right";
                m && (k = k.j().bottom,
                k > f && (f = k));
                e.set(z(h), f)
            }
            f = new jg;
            g = Number.MAX_VALUE;
            for (h = d.Aa.length - 1; h >= 0; --h)
                k = d.Aa[h],
                m = k.g,
                k.j == 0 && Cg(c.l, z(m)) && (m = m.j().top,
                m < g && (g = m)),
                f.set(z(k), g);
            d = new jg;
            g = ig(e);
            for (h = 0; h < g.length; ++h) {
                k = e.get(g[h]);
                m = f.get(g[h]);
                if (typeof m !== "number")
                    throw Error("No entry in minSubsequentTopBounds for terminal UID!");
                d.set(g[h], new ji(k,m))
            }
            return d
        }, "irel")
    }
    var Li = class {
        constructor(a) {
            this.g = a
        }
    }
    ;
    function Mi(a) {
        const b = [];
        Ag(a.getElementsByTagName("p"), function(c) {
            Ni(c) >= 100 && b.push(c)
        });
        return b
    }
    function Ni(a) {
        if (a.nodeType == 3)
            return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT")
            return 0;
        let b = 0;
        Ag(a.childNodes, function(c) {
            b += Ni(c)
        });
        return b
    }
    function Oi(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }
    function Pi(a, b) {
        if (a.g == null)
            return b;
        switch (a.g) {
        case 1:
            return b.slice(1);
        case 2:
            return b.slice(0, b.length - 1);
        case 3:
            return b.slice(1, b.length - 1);
        case 0:
            return b;
        default:
            throw Error("Unknown ignore mode: " + a.g);
        }
    }
    var Qi = class {
        constructor(a, b, c, d) {
            this.A = a;
            this.j = b;
            this.l = c;
            this.g = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.A,
                occurrenceIndex: this.j,
                paragraphIndex: this.l,
                ignoreMode: this.g
            })
        }
    }
    ;
    function Ri(a) {
        if (a.nodeType != 1)
            var b = !1;
        else if (b = a.tagName == "INS")
            a: {
                b = ["adsbygoogle-placeholder"];
                var c = a.className ? a.className.split(/\s+/) : [];
                a = {};
                for (let d = 0; d < c.length; ++d)
                    a[c[d]] = !0;
                for (c = 0; c < b.length; ++c)
                    if (!a[b[c]]) {
                        b = !1;
                        break a
                    }
                b = !0
            }
        return b
    }
    ;var Si = class {
        constructor(a=1) {
            this.g = a
        }
        next() {
            const a = 48271 * this.g % 2147483647;
            this.g = a * 2147483647 < 0 ? a + 2147483647 : a;
            return this.g / 2147483647
        }
    }
    ;
    function Ti(a, b, c) {
        const d = [];
        for (const e of a.g)
            b(e) ? d.push(e) : c(e);
        return new Ui(d)
    }
    function Vi(a, b=1) {
        a = a.g.slice(0);
        const c = new Si(b);
        La(a, () => c.next());
        return new Ui(a)
    }
    var Ui = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach( (b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Ui(Fa(this.g, a))
        }
        apply(a) {
            return new Ui(a(this.g.slice(0)))
        }
        sort(a) {
            return new Ui(this.g.slice(0).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = this.g.slice(0);
            b.push(a);
            return new Ui(b)
        }
    }
    ;
    var Wi = class extends E {
        getId() {
            return Pc(this, 3, C)
        }
    }
    ;
    var Xi = class {
        constructor(a, {ld: b, Ge: c, Ue: d, ae: e}) {
            this.B = a;
            this.j = c;
            this.A = new Ui(b || []);
            this.g = e;
            this.l = d
        }
    }
    ;
    var Yi = a => {
        var b = a.split("~").filter(c => c.length > 0);
        a = new jg;
        for (const c of b)
            b = c.indexOf("."),
            b == -1 ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
        return a
    }
      , $i = a => {
        var b = Zi(a);
        a = [];
        for (let c of b)
            b = String(c.jb),
            a.push(c.Ya + "." + (b.length <= 20 ? b : b.slice(0, 19) + "_"));
        return a.join("~")
    }
    ;
    const Zi = a => {
        const b = []
          , c = a.A;
        c && c.g.length && b.push({
            Ya: "a",
            jb: aj(c)
        });
        a.j != null && b.push({
            Ya: "as",
            jb: a.j
        });
        a.l != null && b.push({
            Ya: "i",
            jb: String(a.l)
        });
        a.g != null && b.push({
            Ya: "rp",
            jb: String(a.g)
        });
        b.sort(function(d, e) {
            return d.Ya.localeCompare(e.Ya)
        });
        b.unshift({
            Ya: "t",
            jb: bj(a.B)
        });
        return b
    }
      , bj = a => {
        switch (a) {
        case 0:
            return "aa";
        case 1:
            return "ma";
        default:
            throw Error("Invalid slot type" + a);
        }
    }
      , aj = a => {
        a = a.g.slice(0).map(cj);
        a = JSON.stringify(a);
        {
            const c = a.length;
            if (c === 0)
                a = 0;
            else {
                var b = 305419896;
                for (let d = 0; d < c; d++)
                    b ^= (b << 5) + (b >> 2) + a.charCodeAt(d) & 4294967295;
                a = b > 0 ? b : 4294967296 + b
            }
        }
        return a
    }
      , cj = a => {
        const b = {};
        Pc(a, 7) != null && (b.q = Pc(a, 7, C));
        Lb(D(a, 2)) != null && (b.o = Lb(D(a, 2, C)));
        Lb(D(a, 5)) != null && (b.p = Lb(D(a, 5, C)));
        return b
    }
    ;
    var dj = class extends E {
        setLocation(a) {
            return rc(this, 1, Hb(a))
        }
    }
    ;
    function ej(a, b, c) {
        switch (c) {
        case 0:
            b.parentNode && b.parentNode.insertBefore(a, b);
            break;
        case 3:
            if (c = b.parentNode) {
                let d = b.nextSibling;
                if (d && d.parentNode != c)
                    for (; d && d.nodeType == 8; )
                        d = d.nextSibling;
                c.insertBefore(a, d)
            }
            break;
        case 1:
            b.insertBefore(a, b.firstChild);
            break;
        case 2:
            b.appendChild(a)
        }
        Ri(b) && (b.setAttribute("data-init-display", b.style.display),
        b.style.display = "block")
    }
    function fj(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Ri(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    }
    ;var P = class {
        constructor(a, b=!1) {
            this.g = a;
            this.defaultValue = b
        }
    }
      , gj = class {
        constructor(a, b=0) {
            this.g = a;
            this.defaultValue = b
        }
    }
    ;
    var hj = new P(698926295,!0)
      , ij = new P(1397)
      , jj = new gj(1359)
      , kj = new gj(1358)
      , lj = new P(1360)
      , mj = new gj(1357)
      , nj = new gj(1340,.2)
      , oj = new gj(1339,.3)
      , pj = new P(1337)
      , qj = new gj(728201648,100)
      , rj = new P(1342)
      , sj = new gj(1343,300)
      , tj = new P(313)
      , uj = new P(752401956,!0)
      , vj = new P(834317942,!0)
      , wj = new P(45719801)
      , xj = new P(45736444)
      , yj = new P(789511913,!0)
      , zj = new P(823552246)
      , Aj = new P(730909245)
      , Bj = new P(730909244)
      , Cj = new P(755437760)
      , Dj = new P(730909246)
      , Ej = new P(730909247)
      , Fj = new P(838458490,!0)
      , Gj = new P(45712481)
      , Hj = new P(732272249)
      , Ij = new P(797429201,!0)
      , Jj = new P(775698923)
      , Kj = new P(732217385)
      , Lj = new P(733329085)
      , Mj = new P(736623794)
      , Nj = new gj(732217386,1E4)
      , Oj = new gj(794150639,5E3)
      , Pj = new gj(732217387,500)
      , Qj = new P(791377772)
      , Rj = new gj(811376351,.5)
      , Sj = new gj(733329086,3E4)
      , Tj = new gj(629808663,100)
      , Uj = new gj(736623795,250)
      , Vj = new gj(745376892,1)
      , Wj = new gj(745376893,2)
      , Xj = new gj(550718588,250)
      , Yj = new P(45459826)
      , Zj = new P(531007060)
      , ak = new P(45545724)
      , bk = new P(45430975)
      , ck = new P(531582260)
      , dk = new P(821645500,!0)
      , ek = new P(811376352,!0);
    var fk = class {
        constructor() {
            const a = {};
            this.j = (b, c) => a[b] != null ? a[b] : c;
            this.l = (b, c) => a[b] != null ? a[b] : c;
            this.B = (b, c) => a[b] != null ? a[b] : c;
            this.C = (b, c) => a[b] != null ? a[b] : c;
            this.A = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.g = () => {}
        }
    }
    ;
    function Q(a) {
        return Zf(fk).j(a.g, a.defaultValue)
    }
    function ik(a) {
        return Zf(fk).l(a.g, a.defaultValue)
    }
    ;var kk = (a, b, c) => {
        var d = jk(b, c);
        if (d.init) {
            for (c = b = d.init; c = d.ka(c); )
                b = c;
            d = {
                anchor: b,
                position: d.Ib
            }
        } else
            d = {
                anchor: b,
                position: c
            };
        a["google-ama-order-assurance"] = 0;
        ej(a, d.anchor, d.position)
    }
    ;
    function jk(a, b) {
        const c = e => {
            e = lk(e);
            return e == null ? !1 : 0 < e
        }
          , d = e => {
            e = lk(e);
            return e == null ? !1 : 0 > e
        }
        ;
        switch (b) {
        case 0:
            return {
                init: mk(a.previousSibling, c),
                ka: e => mk(e.previousSibling, c),
                Ib: 0
            };
        case 2:
            return {
                init: mk(a.lastChild, c),
                ka: e => mk(e.previousSibling, c),
                Ib: 0
            };
        case 3:
            return {
                init: mk(a.nextSibling, d),
                ka: e => mk(e.nextSibling, d),
                Ib: 3
            };
        case 1:
            return {
                init: mk(a.firstChild, d),
                ka: e => mk(e.nextSibling, d),
                Ib: 3
            }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }
    function lk(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }
    function mk(a, b) {
        return a && b(a) ? a : null
    }
    ;const nk = {
        0: 0,
        1: 1,
        2: 2,
        3: 3
    };
    const ok = {
        BODY: {
            Z: [1, 2],
            ea: !1,
            fa: 2,
            da: 4
        },
        HEADER: {
            Z: [0, 3, 1, 2],
            ea: !1,
            fa: 1,
            da: 3
        },
        NAV: {
            Z: [0, 3],
            ea: !1,
            fa: 1,
            da: 3
        },
        H1: {
            Z: [0],
            ea: !1,
            fa: 1,
            da: 2
        },
        IMG: {
            Z: [0, 3],
            ea: !0,
            fa: 0,
            da: 1
        },
        DIV: {
            Z: [0, 3, 1, 2],
            ea: !0,
            fa: 0,
            da: 1
        },
        TABLE: {
            Z: [0, 3],
            ea: !0,
            fa: 0,
            da: 1
        },
        TD: {
            Z: [1, 2],
            ea: !0,
            fa: 0,
            da: 1
        },
        ASIDE: {
            Z: [0, 3, 1, 2],
            ea: !0,
            fa: 0,
            da: 1
        },
        LI: {
            Z: [1, 2],
            ea: !0,
            fa: 0,
            da: 1
        },
        SECTION: {
            Z: [0, 3, 1, 2],
            ea: !0,
            fa: 0,
            da: 1
        },
        H2: {
            Z: [0],
            ea: !1,
            fa: 0,
            da: 2
        },
        H3: {
            Z: [0],
            ea: !1,
            fa: 0,
            da: 2
        },
        H4: {
            Z: [0],
            ea: !1,
            fa: 0,
            da: 2
        },
        H5: {
            Z: [0],
            ea: !1,
            fa: 0,
            da: 2
        },
        H6: {
            Z: [0],
            ea: !1,
            fa: 0,
            da: 2
        },
        P: {
            Z: [0],
            ea: !0,
            fa: 0,
            da: 1
        },
        BLOCKQUOTE: {
            Z: [0, 3],
            ea: !0,
            fa: 0,
            da: 1
        },
        HR: {
            Z: [0, 3],
            ea: !1,
            fa: 0,
            da: 1
        },
        VIDEO: {
            Z: [0, 3],
            ea: !0,
            fa: 0,
            da: 1
        }
    };
    var pk = a => ({
        Z: a.Z.slice(0),
        ea: a.ea,
        fa: a.fa,
        da: a.da
    })
      , qk = (a, b) => {
        const c = pk(a);
        c.Z = Fa(a.Z, d => b[d]);
        return c
    }
    ;
    function rk(a) {
        let b = a.length - 1;
        const c = new Gg;
        c.next = function() {
            return b < 0 ? Hg : {
                value: a[b--],
                done: !1
            }
        }
        ;
        return c
    }
    ;const sk = {
        0: !0,
        1: !0
    }
      , tk = {
        2: !0,
        3: !0
    }
      , uk = {
        3: !0
    };
    var vk = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.g = c
        }
        ka() {
            for (var a = Jg(this.j); a !== null; a = Jg(this.j)) {
                a: {
                    var b = a.g;
                    if (b.I.nodeType != 1) {
                        b = null;
                        break a
                    }
                    var c = ok[b.I.tagName];
                    if (!c) {
                        b = null;
                        break a
                    }
                    a = qk(c, a.j == 0 ? sk : Zg(a.g).length > 0 ? tk : uk);
                    b = {
                        node: b,
                        Pb: a,
                        identifier: {}
                    }
                }
                if (b && (a = b.node.j().getWidth(),
                c = this.l,
                a == null || c == null ? 0 : a >= c * this.g.A && a <= c * this.g.j))
                    return a = new vi,
                    a.resolve(b),
                    a.g
            }
            b = new vi;
            b.reject("na");
            return b.g
        }
    }
    ;
    var wk = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    function xk(a, b) {
        do {
            const c = Ld(a, b);
            if (c && c.position === "fixed")
                return !1
        } while (a = a.parentElement);
        return !0
    }
    ;function yk(a, b) {
        try {
            const c = b.document.documentElement.getBoundingClientRect()
              , d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }
    function zk(a, b, c, d, e) {
        if (a !== a.top)
            return $c(a) ? 3 : 16;
        if (!(L(a) < 488))
            return 4;
        if (!og(a))
            return 5;
        const f = L(a);
        if (!f || (f - c) / f > d)
            a = 6;
        else {
            if (c = e.google_full_width_responsive !== "true")
                a: {
                    c = b.parentElement;
                    for (b = L(a); c; c = c.parentElement) {
                        d = Ld(c, a);
                        if (!d)
                            continue;
                        if ((e = Pd(d.width)) && !(e >= b) && d.overflow !== "visible") {
                            c = !0;
                            break a
                        }
                    }
                    c = !1
                }
            a = c ? 7 : !0
        }
        return a
    }
    function Ak(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }
    function Bk(a, b) {
        if (b.nodeType === 3)
            return /\S/.test(b.data);
        if (b.nodeType === 1) {
            if (/^(script|style)$/i.test(b.nodeName))
                return !1;
            let c;
            try {
                c = Ld(b, a)
            } catch (d) {}
            return !c || c.display !== "none" && !(c.position === "absolute" && (c.visibility === "hidden" || c.visibility === "collapse"))
        }
        return !1
    }
    function Ck(a, b, c) {
        a = yk(b, a);
        return c === "rtl" ? -a.x : a.x
    }
    function Dk(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = Ld(c, a)) ? c.direction : "" : "";
        if (c) {
            var d = b.style;
            d.border = d.borderStyle = d.outline = d.outlineStyle = d.transition = "none";
            d.borderSpacing = d.padding = "0";
            Ak(b, c, "0px");
            d.width = `${L(a)}px`;
            if (Ck(a, b, c) !== 0) {
                Ak(b, c, "0px");
                var e = Ck(a, b, c);
                Ak(b, c, `${-1 * e}px`);
                a = Ck(a, b, c);
                a !== 0 && a !== e && Ak(b, c, `${e / (a - e) * e}px`)
            }
            d.zIndex = "30"
        }
    }
    ;function Ek(a, b, c) {
        let d;
        return a.style && !!a.style[c] && Pd(a.style[c]) || (d = Ld(a, b)) && !!d[c] && Pd(d[c]) || null
    }
    function Fk(a, b) {
        const c = a.google_unique_id;
        return b && (typeof c === "number" ? c : 0) === 0 ? Math.max(250, 2 * pg(a).clientHeight / 3) : 250
    }
    function Gk(a, b) {
        let c;
        return a.style && a.style.zIndex || (c = Ld(a, b)) && c.zIndex || null
    }
    function Hk(a) {
        return b => b.g <= a
    }
    function Ik(a, b, c, d) {
        const e = a && Jk(c, b)
          , f = Fk(b, d);
        return g => !(e && g.height() >= f)
    }
    function Kk(a) {
        return b => b.height() <= a
    }
    function Jk(a, b) {
        a = yk(a, b);
        return (a ? a.y : 0) < pg(b).clientHeight - 100
    }
    function Lk(a, b) {
        var c = Ek(b, a, "height");
        if (c)
            return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Ek(b, a, "height");
        b.style.height = d;
        if (c)
            return c;
        c = Infinity;
        do
            (d = b.style && Pd(b.style.height)) && (c = Math.min(c, d)),
            (d = Ek(b, a, "maxHeight")) && (c = Math.min(c, d));
        while (b.parentElement && (b = b.parentElement) && b.tagName !== "HTML");
        return c
    }
    ;function Mk(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c]
              , e = zd(d.property);
            a[e] = d.value
        }
    }
    function Nk(a, b, c) {
        var d = [];
        if (c = c && c.g())
            a.lb.className = c.join(" ");
        a = a.Qa;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        d.length && a.setAttribute("data-ad-channel", d.join("+"))
    }
    function Ok(a, b) {
        var c = b.Sb || !1;
        const d = me(new le(a), "DIV")
          , e = d.style;
        e.width = "100%";
        e.height = "auto";
        e.clear = c ? "both" : "none";
        c = d.style;
        c.textAlign = "center";
        b.Hb && Mk(c, b.Hb);
        a = me(new le(a), "INS");
        c = a.style;
        c.display = "block";
        c.margin = "auto";
        c.backgroundColor = "transparent";
        b.jc && (c.marginTop = b.jc);
        b.Qb && (c.marginBottom = b.Qb);
        b.zb && Mk(c, b.zb);
        d.appendChild(a);
        return {
            lb: d,
            Qa: a
        }
    }
    ;function Pk(a, b=!1) {
        if (a.g)
            return a.g;
        if (b = a.L(b))
            Ug(),
            !a.j && b && (a.j = b.j());
        return b
    }
    function Qk(a) {
        return a.J.node || null
    }
    function Rk(a) {
        return (a = Qk(a)) && a.A() ? Ri(a.I) : !1
    }
    function Sk(a) {
        return ig(a.K.g).map(b => {
            switch (b) {
            case 1:
                return "IN ARTICLE";
            case 2:
                return "ABOVE FOOTER";
            case 3:
                return "ABOVE COMMENT";
            case 4:
                return "PEDESTAL";
            case 5:
                return "BELOW CONTENT";
            default:
                return null
            }
        }
        ).filter(b => b != null).join(", ")
    }
    var Tk = class {
        constructor(a) {
            this.J = a.j;
            this.l = a.A;
            this.j = this.g = null;
            this.B = !1;
            this.K = new Dg(ig(a.g.g))
        }
        G() {}
        L() {}
        H() {}
        A() {}
    }
      , Uk = class {
        constructor(a, b) {
            this.j = a;
            this.A = b;
            this.g = new Dg;
            this.l = []
        }
        build() {}
    }
    ;
    var Vk = class {
        constructor(a, b) {
            this.g = a;
            this.A = b
        }
        height() {
            return this.A
        }
        j(a) {
            return a > ik(sj) && this.A > 300 ? this.g : Math.min(1200, Math.round(a))
        }
        l() {}
    }
    ;
    function Wk(a) {
        return b => !!(b.Pa() & a)
    }
    var R = class extends Vk {
        constructor(a, b, c, d=!1) {
            super(a, b);
            this.C = c;
            this.B = d
        }
        Pa() {
            return this.C
        }
        l(a, b, c) {
            c.style.height = `${this.height()}px`;
            b.rpe = !0
        }
    }
    ;
    const Xk = {
        image_stacked: 1 / 1.91,
        image_sidebyside: 1 / 3.82,
        mobile_banner_image_sidebyside: 1 / 3.82,
        pub_control_image_stacked: 1 / 1.91,
        pub_control_image_sidebyside: 1 / 3.82,
        pub_control_image_card_stacked: 1 / 1.91,
        pub_control_image_card_sidebyside: 1 / 3.74,
        pub_control_text: 0,
        pub_control_text_card: 0
    }
      , Yk = {
        image_stacked: 80,
        image_sidebyside: 0,
        mobile_banner_image_sidebyside: 0,
        pub_control_image_stacked: 80,
        pub_control_image_sidebyside: 0,
        pub_control_image_card_stacked: 85,
        pub_control_image_card_sidebyside: 0,
        pub_control_text: 80,
        pub_control_text_card: 80
    }
      , Zk = {
        pub_control_image_stacked: 100,
        pub_control_image_sidebyside: 200,
        pub_control_image_card_stacked: 150,
        pub_control_image_card_sidebyside: 250,
        pub_control_text: 100,
        pub_control_text_card: 150
    };
    function $k(a) {
        var b = 0;
        a.ya && b++;
        a.wa && b++;
        a.xa && b++;
        if (b < 3)
            return {
                La: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
            };
        b = a.ya.split(",");
        const c = a.xa.split(",");
        a = a.wa.split(",");
        if (b.length !== c.length || b.length !== a.length)
            return {
                La: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
            };
        if (b.length > 2)
            return {
                La: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
            };
        const d = []
          , e = [];
        for (let g = 0; g < b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || f === 0)
                return {
                    La: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
                };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || f === 0)
                return {
                    La: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
                };
            e.push(f)
        }
        return {
            xa: d,
            wa: e,
            Hc: b
        }
    }
    function al(a) {
        return a >= 1200 ? {
            width: 1200,
            height: 600
        } : a >= 850 ? {
            width: a,
            height: Math.floor(a * .5)
        } : a >= 550 ? {
            width: a,
            height: Math.floor(a * .6)
        } : a >= 468 ? {
            width: a,
            height: Math.floor(a * .7)
        } : {
            width: a,
            height: Math.floor(a * 3.44)
        }
    }
    function bl(a, b) {
        return a * Xk[b] + Yk[b]
    }
    function cl(a, b, c, d) {
        b = Math.floor(bl((a - 8 * b - 8) / b, d) * c + 8 * c + 8);
        return a > 1500 ? {
            width: 0,
            height: 0,
            ge: `Calculated slot width is too large: ${a}`
        } : b > 1500 ? {
            width: 0,
            height: 0,
            ge: `Calculated slot height is too large: ${b}`
        } : {
            width: a,
            height: b
        }
    }
    function dl(a, b) {
        const c = a - 8 - 8;
        --b;
        return {
            width: a,
            height: Math.floor(c / 1.91 + 70) + Math.floor(bl(c, "mobile_banner_image_sidebyside") * b + 8 * b + 8)
        }
    }
    ;function el(a, b) {
        if (!a)
            return !1;
        a = a.hash;
        if (!a || !a.indexOf)
            return !1;
        if (a.indexOf(b) != -1)
            return !0;
        let c = "";
        for (const d of b.split("_"))
            c += d.substring(0, 2);
        b = c;
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }
    ;const fl = Ma("script");
    var gl = class {
        constructor(a, b, c=null, d=null, e=null, f=null, g=null, h=null, k=null, m=null, l=null, n=null) {
            this.G = a;
            this.Ka = b;
            this.Pa = c;
            this.g = d;
            this.L = e;
            this.ha = f;
            this.Ca = g;
            this.A = h;
            this.B = k;
            this.j = m;
            this.l = l;
            this.C = n
        }
        size() {
            return this.Ka
        }
    }
    ;
    var hl = class extends Error {
        constructor(a="") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, hl) : this.stack = Error().stack || ""
        }
    }
    ;
    var il = class extends Vk {
        j(a) {
            return Math.min(1200, Math.max(this.g, Math.round(a)))
        }
    }
    ;
    function jl(a, b) {
        kl(a, b);
        if (b.google_content_recommendation_ui_type === "pedestal" && !Q(ij))
            return new gl(9,new il(a,Math.floor(a * 2.189)));
        if (Q(lj)) {
            var c = gd()
              , d = ik(mj)
              , e = ik(kj)
              , f = ik(jj);
            a < 468 ? c ? (a = dl(a, d),
            a = {
                Ga: a.width,
                Fa: a.height,
                wa: 1,
                xa: d,
                ya: "mobile_banner_image_sidebyside"
            }) : (a = cl(a, 1, d, "image_sidebyside"),
            a = {
                Ga: a.width,
                Fa: a.height,
                wa: 1,
                xa: d,
                ya: "image_sidebyside"
            }) : (a = al(a),
            e === 1 && (a.height = Math.floor(a.height * .5)),
            a = {
                Ga: a.width,
                Fa: a.height,
                wa: f,
                xa: e,
                ya: "image_stacked"
            })
        } else
            Q(ij) ? (d = al(a),
            e = 4,
            f = 2,
            a < 468 && (e = 1,
            f = 6,
            d = {
                width: a,
                height: Math.floor(bl(a, "image_stacked") * f + 8 * f + 8)
            }),
            a = {
                Ga: d.width,
                Fa: d.height,
                wa: e,
                xa: f,
                ya: "image_stacked"
            }) : (d = gd(),
            a < 468 ? d ? (a = dl(a, 12),
            a = {
                Ga: a.width,
                Fa: a.height,
                wa: 1,
                xa: 12,
                ya: "mobile_banner_image_sidebyside"
            }) : (a = al(a),
            a = {
                Ga: a.width,
                Fa: a.height,
                wa: 1,
                xa: 13,
                ya: "image_sidebyside"
            }) : (a = al(a),
            a = {
                Ga: a.width,
                Fa: a.height,
                wa: 4,
                xa: 2,
                ya: "image_stacked"
            }));
        ll(b, a);
        return new gl(9,new il(a.Ga,a.Fa))
    }
    function ml(a, b) {
        kl(a, b);
        {
            const f = $k({
                xa: b.google_content_recommendation_rows_num,
                wa: b.google_content_recommendation_columns_num,
                ya: b.google_content_recommendation_ui_type
            });
            if (f.La)
                a = {
                    Ga: 0,
                    Fa: 0,
                    wa: 0,
                    xa: 0,
                    ya: "image_stacked",
                    La: f.La
                };
            else {
                var c = f.Hc.length === 2 && a >= 468 ? 1 : 0;
                var d = f.Hc[c];
                d = d.indexOf("pub_control_") === 0 ? d : "pub_control_" + d;
                var e = Zk[d];
                let g = f.wa[c];
                for (; a / g < e && g > 1; )
                    g--;
                e = g;
                c = f.xa[c];
                a = cl(a, e, c, d);
                a = {
                    Ga: a.width,
                    Fa: a.height,
                    wa: e,
                    xa: c,
                    ya: d
                }
            }
        }
        if (a.La)
            throw new hl(a.La);
        ll(b, a);
        return new gl(9,new il(a.Ga,a.Fa))
    }
    function kl(a, b) {
        if (a <= 0)
            throw new hl(`Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`);
    }
    function ll(a, b) {
        a.google_content_recommendation_ui_type = b.ya;
        a.google_content_recommendation_columns_num = b.wa;
        a.google_content_recommendation_rows_num = b.xa
    }
    ;var nl = class extends Vk {
        j() {
            return this.g
        }
        l(a, b, c) {
            Dk(a, c);
            c.style.height = `${this.height()}px`;
            b.rpe = !0
        }
    }
    ;
    const ol = {
        "image-top": a => a <= 600 ? 284 + (a - 250) * .414 : 429,
        "image-middle": a => a <= 500 ? 196 - (a - 250) * .13 : 164 + (a - 500) * .2,
        "image-side": a => a <= 500 ? 205 - (a - 250) * .28 : 134 + (a - 500) * .21,
        "text-only": a => a <= 500 ? 187 - .228 * (a - 250) : 130,
        "in-article": a => a <= 420 ? a / 1.2 : a <= 460 ? a / 1.91 + 130 : a <= 800 ? a / 4 : 200
    };
    var pl = class extends Vk {
        j() {
            return Math.min(1200, this.g)
        }
    }
    ;
    function ql(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if (f === "in-article") {
            var g = a;
            if (e.google_full_width_responsive === "false")
                a = g;
            else if (a = zk(b, c, g, ik(nj), e),
            a !== !0)
                e.gfwrnwer = a,
                a = g;
            else if (a = L(b))
                if (e.google_full_width_responsive_allowed = !0,
                c.parentElement) {
                    b: {
                        g = c;
                        for (let h = 0; h < 100 && g.parentElement; ++h) {
                            const k = g.parentElement.childNodes;
                            for (let m = 0; m < k.length; ++m) {
                                const l = k[m];
                                if (l !== g && Bk(b, l))
                                    break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    Dk(b, c)
                } else
                    a = g;
            else
                a = g
        }
        if (a < 250)
            throw new hl("Fluid responsive ads must be at least 250px wide: " + `availableWidth=${a}`);
        a = Math.min(1200, Math.floor(a));
        if (d && f !== "in-article") {
            f = Math.ceil(d);
            if (f < 50)
                throw new hl("Fluid responsive ads must be at least 50px tall: " + `height=${f}`);
            return new gl(11,new Vk(a,f))
        }
        if (f !== "in-article" && (d = e.google_ad_layout_key)) {
            f = `${d}`;
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length)
                for (b = [],
                e = 0; e < d; e++)
                    b.push(parseInt(c[e], 36) / 1E3);
            else
                b = null;
            if (!b)
                throw new hl(`Invalid data-ad-layout-key value: ${f}`);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++)
                c += b[g] * d,
                d *= f;
            f = Math.ceil(c * 1E3 - -725 + 10);
            if (isNaN(f))
                throw new hl(`Invalid height: height=${f}`);
            if (f < 50)
                throw new hl("Fluid responsive ads must be at least 50px tall: " + `height=${f}`);
            if (f > 1200)
                throw new hl("Fluid responsive ads must be at most 1200px tall: " + `height=${f}`);
            return new gl(11,new Vk(a,f))
        }
        d = ol[f];
        if (!d)
            throw new hl("Invalid data-ad-layout value: " + f);
        c = Jk(c, b);
        b = L(b);
        b = f !== "in-article" || c || a !== b ? Math.ceil(d(a)) : Math.ceil(d(a) * 1.25);
        return new gl(11,f === "in-article" ? new pl(a,b) : new Vk(a,b))
    }
    ;function rl(a) {
        return b => {
            for (let c = a.length - 1; c >= 0; --c)
                if (!a[c](b))
                    return !1;
            return !0
        }
    }
    function sl(a, b) {
        var c = tl.slice(0);
        const d = c.length;
        let e = null;
        for (let f = 0; f < d; ++f) {
            const g = c[f];
            if (a(g)) {
                if (b == null || b(g))
                    return g;
                e === null && (e = g)
            }
        }
        return e
    }
    ;var ul = [new R(970,90,2), new R(728,90,2), new R(468,60,2), new R(336,280,1), new R(320,100,2), new R(320,50,2), new R(300,600,4), new R(300,250,1), new R(250,250,1), new R(234,60,2), new R(200,200,1), new R(180,150,1), new R(160,600,4), new R(125,125,1), new R(120,600,4), new R(120,240,4), new R(120,120,1,!0)]
      , tl = [ul[6], ul[12], ul[3], ul[0], ul[7], ul[14], ul[1], ul[8], ul[10], ul[4], ul[15], ul[2], ul[11], ul[5], ul[13], ul[9], ul[16]];
    function Gf() {
        return "m202601270101"
    }
    ;var vl = Vc(Df);
    var Ff = Vc(Hf);
    function wl(a, b) {
        return b(a) ? a : void 0
    }
    function xl(a, b, c, d, e) {
        c = c instanceof Ke ? c.error : c;
        var f = new Kf;
        const g = new Jf;
        try {
            var h = Hd(window);
            Sc(g, 1, h)
        } catch (p) {}
        try {
            var k = Vf();
            Ac(g, 2, k, Jb)
        } catch (p) {}
        try {
            Tc(g, 3, window.document.URL)
        } catch (p) {}
        h = Mc(f, 2, g);
        k = new If;
        b = Bc(k, 1, Hb(b), 0);
        try {
            var m = mb(c?.name) ? c.name : "Unknown error";
            Tc(b, 2, m)
        } catch (p) {}
        try {
            var l = mb(c?.message) ? c.message : `Caught ${c}`;
            Tc(b, 3, l)
        } catch (p) {}
        try {
            var n = mb(c?.stack) ? c.stack : Error().stack;
            n && Ac(b, 4, n.split(/\n\s*/), Ub)
        } catch (p) {}
        m = Nc(h, 1, Lf, b);
        if (e) {
            l = 0;
            switch (e.errSrc) {
            case "LCC":
                l = 1;
                break;
            case "PVC":
                l = 2
            }
            n = Ef();
            b = wl(e.shv, mb);
            n = Tc(n, 2, b);
            l = Bc(n, 6, Hb(l), 0);
            n = vl();
            n = kc(n);
            b = wl(e.es, ob());
            n = Ac(n, 1, b, Jb);
            n = lc(n);
            l = Mc(l, 4, n);
            n = wl(e.client, mb);
            l = rc(l, 3, Vb(n));
            n = wl(e.slotname, mb);
            l = Tc(l, 7, n);
            e = wl(e.tag_origin, mb);
            e = Tc(l, 8, e);
            e = lc(e)
        } else
            e = Uc(Ef());
        e = Nc(m, 6, Mf, e);
        d = Sc(e, 5, d ?? 1);
        Of(a, d)
    }
    ;var Al = class {
        constructor() {
            this.g = yl
        }
        kb(a) {
            return zl(this.g(), a)
        }
    }
      , Bl = class {
        constructor() {
            this.g = yl()
        }
        kb(a) {
            return zl(this.g, a)
        }
    }
    ;
    function yl() {
        return {
            Rd: Gd() + (Gd() & 2 ** 21 - 1) * 2 ** 32,
            rd: Number.MAX_SAFE_INTEGER
        }
    }
    function zl(a, b) {
        return b > 0 && a.Rd * b <= a.rd
    }
    ;var El = class {
        constructor(a=!1) {
            var b = Cl;
            this.ca = Dl;
            this.j = a;
            this.C = b;
            this.g = null;
            this.A = this.Ja
        }
        l(a) {
            this.g = a
        }
        B() {}
        za(a, b, c) {
            let d;
            try {
                d = b()
            } catch (e) {
                b = this.j;
                try {
                    b = this.A(a, Le(e), void 0, c)
                } catch (f) {
                    this.Ja(217, f)
                }
                if (b)
                    window.console?.error?.(e);
                else
                    throw e;
            }
            return d
        }
        aa(a, b) {
            return (...c) => this.za(a, () => b.apply(void 0, c))
        }
        Ja(a, b, c, d) {
            try {
                const f = c === void 0 ? 1 / this.C : c === 0 ? 0 : 1 / c;
                if ((new Al).kb(f)) {
                    var e = this.ca;
                    c = {};
                    if (this.g)
                        try {
                            this.g(c)
                        } catch (g) {}
                    if (d)
                        try {
                            d(c)
                        } catch (g) {}
                    xl(e, a, b, f, c)
                }
            } catch (f) {}
            return this.j
        }
    }
    ;
    let Dl, Fl, Gl, Hl, Cl;
    const Il = new af(w);
    (function(a, b, c=!0) {
        ({Yd: Cl, Fd: Gl} = Jl());
        Fl = a || new dg;
        cg(Fl, Gl);
        Dl = b || new Yf(Gf(),1E3);
        Hl = new El(c);
        w.document.readyState === "complete" ? w.google_measure_js_timing || $e(Il) : Il.g && I(w, "load", () => {
            w.google_measure_js_timing || $e(Il)
        }
        )
    }
    )();
    function Kl(a, b, c) {
        return Hl.za(a, b, c)
    }
    function Ll(a, b) {
        return Hl.aa(a, b)
    }
    function Ml(a, b, c=.01) {
        const d = Vf();
        !b.eid && d.length && (b.eid = d.toString());
        kf(Fl, a, b, !0, c)
    }
    function Jl() {
        let a, b;
        typeof w.google_srt === "number" ? (b = w.google_srt,
        a = w.google_srt === 0 ? 1 : .01) : (b = Math.random(),
        a = .01);
        return {
            Yd: a,
            Fd: b
        }
    }
    ;function Nl(a, b, c, d, e) {
        e.google_full_width_responsive === "false" ? c = {
            va: a,
            ha: 1
        } : b === "autorelaxed" && e.google_full_width_responsive || b === "auto" || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(b) || e.google_ad_resize ? (b = zk(c, d, a, ik(oj), e),
        b !== !0 ? e = b : e.google_full_width_responsive === "true" || xk(d, c) ? (e = L(c),
        b = e - a,
        e = e && b >= 0 ? !0 : e ? b < -10 ? 11 : b < 0 ? 14 : 12 : 10) : e = 9,
        c = e !== !0 ? {
            va: a,
            ha: e
        } : {
            va: L(c) || a,
            ha: !0
        }) : c = {
            va: a,
            ha: 2
        };
        const {va: f, ha: g} = c;
        return g !== !0 ? {
            va: a,
            ha: g
        } : d.parentElement ? {
            va: f,
            ha: g
        } : {
            va: a,
            ha: g
        }
    }
    function Ol(a, b, c, d, e) {
        const {va: f, ha: g} = Kl(247, () => Nl(a, b, c, d, e));
        var h = g === !0;
        const k = Pd(d.style.width)
          , m = Pd(d.style.height)
          , {Ka: l, Ca: n, Pa: p, Gc: t} = Pl(f, b, c, d, e, h);
        h = Ql(b, p);
        var q;
        const u = (q = Ek(d, c, "marginLeft")) ? `${q}px` : ""
          , y = (q = Ek(d, c, "marginRight")) ? `${q}px` : "";
        q = Gk(d, c) || "";
        return new gl(h,l,p,null,t,g,n,u,y,m,k,q)
    }
    function Pl(a, b, c, d, e, f) {
        b = Rl(c, a, b);
        let g;
        var h = !1;
        let k = !1;
        var m = L(c) < 488;
        if (m) {
            g = xk(d, c);
            var l = Jk(d, c);
            h = !l && g;
            k = l && g
        }
        l = [Hk(a), Wk(b)];
        Q(rj) || l.push(Ik(m, c, d, k));
        e.google_max_responsive_height != null && l.push(Kk(e.google_max_responsive_height));
        m = [q => !q.B];
        if (h || k)
            h = Lk(c, d),
            m.push(Kk(h));
        const n = sl(rl(l), rl(m));
        if (!n)
            throw new hl(`No slot size for availableWidth=${a}`);
        const {Ka: p, Ca: t} = Kl(248, () => {
            var q;
            a: if (f) {
                if (e.gfwrnh && (q = Pd(e.gfwrnh))) {
                    q = {
                        Ka: new nl(a,q),
                        Ca: !0
                    };
                    break a
                }
                if (e.google_resizing_allowed || e.google_full_width_responsive === "true")
                    q = Infinity;
                else {
                    q = d;
                    let y = Infinity;
                    do {
                        var u = Ek(q, c, "height");
                        u && (y = Math.min(y, u));
                        (u = Ek(q, c, "maxHeight")) && (y = Math.min(y, u))
                    } while (q.parentElement && (q = q.parentElement) && q.tagName !== "HTML");
                    q = y
                }
                !(Q(pj) && q <= a * 2) && (q = Math.min(a, q),
                q < a * .5 || q < 100) && (q = a);
                q = {
                    Ka: new nl(a,Math.floor(q)),
                    Ca: q < a ? 102 : !0
                }
            } else
                q = {
                    Ka: n,
                    Ca: 100
                };
            return q
        }
        );
        return e.google_ad_layout === "in-article" ? {
            Ka: Sl(a, c, d, p, e),
            Ca: !1,
            Pa: b,
            Gc: g
        } : {
            Ka: p,
            Ca: t,
            Pa: b,
            Gc: g
        }
    }
    function Ql(a, b) {
        if (a === "auto")
            return 1;
        switch (b) {
        case 2:
            return 2;
        case 1:
            return 3;
        case 4:
            return 4;
        case 3:
            return 5;
        case 6:
            return 6;
        case 5:
            return 7;
        case 7:
            return 8;
        default:
            throw Error("bad mask");
        }
    }
    function Rl(a, b, c) {
        if (c === "auto")
            c = Math.min(1200, L(a)),
            b = b / c <= .25 ? 4 : 3;
        else {
            b = 0;
            for (const d in wk)
                c.indexOf(d) !== -1 && (b |= wk[d])
        }
        return b
    }
    function Sl(a, b, c, d, e) {
        const f = e.google_ad_height || Ek(c, b, "height");
        b = ql(a, b, c, f, e).size();
        return b.g * b.height() > a * d.height() ? new R(b.g,b.height(),1) : d
    }
    ;function Tl(a, b, c, d, e) {
        var f;
        (f = L(b)) ? L(b) < 488 ? og(b) ? (e.google_full_width_responsive_allowed = !0,
        Dk(b, c),
        f = {
            va: f,
            ha: !0
        }) : f = {
            va: a,
            ha: 5
        } : f = {
            va: a,
            ha: 4
        } : f = {
            va: a,
            ha: 10
        };
        const {va: g, ha: h} = f;
        if (h !== !0 || a === g)
            return new gl(12,new Vk(a,d),null,null,!0,h,100);
        const {Ka: k, Ca: m, Pa: l} = Pl(g, "auto", b, c, e, !0);
        return new gl(1,k,l,2,!0,h,m)
    }
    ;function Ul(a, b, c, d, e) {
        const f = d.google_ad_height || Ek(c, e, "height") || 0;
        switch (a) {
        case 5:
            const {va: g, ha: h} = Kl(247, () => Nl(b, d.google_ad_format, e, c, d));
            h === !0 && b !== g && Dk(e, c);
            h === !0 ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1,
            d.gfwrnwer = h);
            return jl(g, d);
        case 9:
            return Q(ij) ? jl(b, d) : ml(b, d);
        case 8:
            return ql(b, e, c, f, d);
        case 10:
            return Tl(b, e, c, f, d)
        }
    }
    ;var Vl = class extends Tk {
        constructor(a) {
            super(a);
            this.C = ""
        }
        G() {
            return 1
        }
        L(a=!1) {
            const b = Qk(this);
            if (!b)
                return null;
            Rk(this) && (this.C = b.I.style.display);
            var c = Sk(this)
              , d = Wg(b)
              , e = Ok(d, {
                jc: "10px",
                Qb: "10px",
                Sb: this.B
            });
            e.lb.className = "google-auto-placed";
            var f = e.Qa
              , g = f.style;
            g.display = "inline-block";
            g.boxSizing = "border-box";
            g.width = "100%";
            g.height = a ? "auto" : "100px";
            g.backgroundColor = "#f60";
            g.border = "#000 solid 1px";
            c && (g = d.createElement("span"),
            g.style.fontSize = "small",
            g.appendChild(d.createTextNode(c)),
            f.appendChild(g));
            c = e.lb;
            e = e.Qa;
            d = b.I;
            f = nk[this.l];
            Q(tj) ? kk(c, d, f) : ej(c, d, f);
            if (a)
                try {
                    this.H(e, fe())
                } catch (h) {
                    e.style.height = "100px"
                }
            this.g = b.l.g(c);
            this.g || (c.parentNode.removeChild(c),
            Rk(this) && (b.I.style.display = this.C));
            return this.g
        }
        H(a, b) {
            var c = 1
              , d = {
                google_ad_format: "auto"
            }
              , e = a.offsetWidth || (d.google_ad_resize || !1) && Ek(a, b, "width") || d.google_ad_width || 0;
            c === 4 && (d.google_ad_format = "auto",
            c = 1);
            var f = (f = Ul(c, e, a, d, b)) ? f : Ol(e, d.google_ad_format, b, a, d);
            f.size().l(b, d, a);
            f.Pa != null && (d.google_responsive_formats = f.Pa);
            f.L != null && (d.google_safe_for_responsive_override = f.L);
            f.ha != null && (f.ha === !0 ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1,
            d.gfwrnwer = f.ha));
            f.Ca != null && f.Ca !== !0 && (d.gfwrnher = f.Ca);
            b = f.l || d.google_ad_width;
            b != null && (d.google_resizing_width = b);
            b = f.j || d.google_ad_height;
            b != null && (d.google_resizing_height = b);
            b = f.size().j(e);
            const g = f.size().height();
            d.google_ad_width = b;
            d.google_ad_height = g;
            var h = f.size();
            e = `${h.j(e)}x${h.height()}`;
            d.google_ad_format = e;
            d.google_responsive_auto_format = f.G;
            f.g != null && (d.armr = f.g);
            d.google_ad_resizable = !0;
            d.google_override_format = 1;
            d.google_loader_features_used = 128;
            f.ha === !0 && (d.gfwrnh = `${f.size().height()}px`);
            f.A != null && (d.gfwroml = f.A);
            f.B != null && (d.gfwromr = f.B);
            f.j != null && (d.gfwroh = f.j);
            f.l != null && (d.gfwrow = f.l);
            f.C != null && (d.gfwroz = f.C);
            e = $c(window) || window;
            el(e.location, "google_responsive_dummy_ad") && (Ia([1, 2, 3, 4, 5, 6, 7, 8], f.G) || f.g === 1) && f.g !== 2 && (e = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }),
            d.dash = `<${fl}>window.top.postMessage('${e}', '*'); 
          </${fl}> 
          <div id="dummyAd" style="width:${b}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${b}x${g}</p> 
            <p>Rendered size:${b}x${g}</p> 
          </div>`);
            c !== 1 && (c = f.size().height(),
            a.style.height = `${c}px`)
        }
        A() {
            if (this.g) {
                var a = this.g;
                a.I.parentNode && a.I.parentNode.removeChild(a.I);
                this.g = null;
                Rk(this) && (Qk(this).I.style.display = this.C);
                Ug()
            }
        }
    }
      , Wl = class extends Uk {
        build() {
            return new Vl(this)
        }
    }
    ;
    new Dg(["comments"]);
    new Dg(["allcomments"]);
    new Dg(["post-container", "post", "type-post"]);
    var Yl = (a, b, c) => {
        const d = [];
        a.map(e => Xl(e, b, c)).forEach(e => Ka(d, e));
        return d
    }
      , Xl = (a, b, c) => {
        const d = a.Pb.Z
          , e = a.node;
        if (!e)
            return [];
        const f = [];
        e.g() && Ia(d, 0) && f.push(0);
        Ia(d, 1) && f.push(1);
        Ia(d, 2) && (!Ia(d, 1) || Zg(e).length > 0) && f.push(2);
        e.g() && Ia(d, 3) && f.push(3);
        return f.map(g => {
            g = new Wl(a,g);
            b.forEach(g.g.add, g.g);
            g.l.push(...c);
            return g.build()
        }
        )
    }
      , Zl = (a, b) => {
        a = Qk(b) ? a.map.get(z(Qk(b))) : void 0;
        if (!a)
            return -1;
        switch (b.l) {
        case 0:
            return a.start.pa();
        case 1:
            return a.start.pa() + 1;
        case 2:
            return a.end.pa();
        case 3:
            return a.end.pa() + 1
        }
        return -1
    }
      , $l = (a, b) => {
        a = Qk(b) ? a.map.get(z(Qk(b))) : void 0;
        if (!a)
            return -1;
        switch (b.l) {
        case 0:
            return a.start.pa() - .1;
        case 3:
            return a.end.pa() + .1;
        case 1:
            return a.start.pa() + .1;
        case 2:
            return a.end.pa() - .1
        }
        return -1
    }
    ;
    function am(a, b) {
        b && a.g.push(b);
        return a
    }
    function bm(a, b) {
        a.j.push(b);
        return a
    }
    function cm(a, b) {
        return wi(a.A, () => {
            const c = [];
            for (let d = 0; d < a.j.length; ++d) {
                const e = a.j[d].g(b);
                Ka(c, e);
                if (e.length > 0)
                    break
            }
            return c
        }
        , "flap")
    }
    function dm(a, b) {
        return wi(a.A, () => {
            if (a.g.length == 0)
                var c = [];
            else {
                var d = Math.floor($l(a.B, b));
                if ((d = d != -1 ? d + b.G() + "|" + b.B + "|10px|10px" : null) && gg(a.l, d))
                    c = a.l.get(d);
                else {
                    var e = []
                      , f = Pk(b);
                    try {
                        for (let g = 0; g < a.g.length; ++g)
                            if (c = a.g[g].g(f),
                            Ka(e, c),
                            c.length > 0) {
                                b.A();
                                break
                            }
                    } finally {
                        b.A()
                    }
                    d != null && a.l.set(d, e);
                    c = e
                }
            }
            return c
        }
        , "flfa")
    }
    function em(a, b) {
        const c = new vi;
        cm(a, b).then(d => {
            d.length > 0 ? c.resolve(d) : dm(a, b).then(e => {
                c.resolve(d.concat(e))
            }
            )
        }
        );
        return c.g
    }
    var fm = class {
        constructor(a, b) {
            this.A = a;
            this.g = [];
            this.j = [];
            this.B = b;
            this.l = new jg
        }
    }
    ;
    var gm = class {
        constructor(a) {
            this.j = a
        }
        g(a) {
            if (!a)
                return [];
            for (let b = 0; b < this.j.length; ++b)
                if (this.j[b].A(a, !1))
                    return [2];
            return []
        }
    }
    ;
    function hm(a, b) {
        Ka(a.l, b);
        return a
    }
    var im = class {
        constructor() {
            this.j = [];
            this.l = [];
            this.A = []
        }
        g(a) {
            if (a = Qk(a)) {
                for (var b = 0; b < this.A.length; ++b)
                    if (ph(a, this.A[b]))
                        return [6];
                for (b = 0; b < this.j.length; ++b)
                    if (qh(a, this.j[b]))
                        return [6];
                for (b = 0; b < this.l.length; ++b)
                    if (rh(a, this.l[b]))
                        return [6]
            }
            return []
        }
    }
      , jm = [/cookie/, /(^|(-|_))sticky((-|_)|$)/]
      , km = [/(^|(-|_))tab((-|_)|$)/, /(^|(-|_))tabs((-|_)|$)/]
      , lm = [/(^|(-|_))slider((-|_)|$)/, /(^|(-|_))swiper((-|_)|$)/]
      , mm = [/(^|(-|_))taboola((-|_)|$)/, /(^|(-|_))OUTBRAIN((-|_)|$)/, /(^|(-|_))revcontent((-|_)|$)/]
      , nm = ["A", "FORM", "BUTTON"];
    var om = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            if (!a)
                return [9];
            const b = qg(this.j, !0);
            return b == null ? [16] : b - a.j().bottom < this.l ? [17] : []
        }
    }
    ;
    var pm = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            for (a = Math.floor($l(this.j, a)); a > 0; a--) {
                const b = this.j.Aa[a];
                if (!b.g.Wa()) {
                    if ((b.j == 0 ? ch(b.g).top : ch(b.g).bottom) <= this.l)
                        break;
                    return []
                }
            }
            return [10]
        }
    }
    ;
    var qm = class {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.l = c
        }
    }
    ;
    var rm = class {
        constructor(a) {
            const b = [];
            a = a.g.slice(0);
            for (let c = 0; c < a.length; ++c)
                b.push(a[c].j());
            this.l = b;
            this.j = new jg
        }
        g(a) {
            const b = z(a);
            if (gg(this.j, b))
                return this.j.get(b);
            a: {
                var c = a.j();
                c = new qm(c.left,c.top + a.I.scrollHeight,a.I.scrollWidth);
                for (e of this.l) {
                    b: {
                        if (c.g >= Math.floor(e.bottom)) {
                            var d = !1;
                            break b
                        }
                        d = Math.ceil(e.left);
                        const f = c.j + c.l;
                        d = !(Math.floor(e.right) <= c.j || f <= d)
                    }
                    if (d) {
                        var e = !0;
                        break a
                    }
                }
                e = !1
            }
            e = !e && a.I.scrollHeight > a.I.clientHeight && mh(a);
            c = a.g();
            c = !c || this.g(c);
            a = e && c ? !0 : e ? hh(a) : c && !hh(a);
            this.j.set(b, a);
            return a
        }
    }
    ;
    var sm = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g(a) {
            const b = Qk(a);
            if (!b)
                return [];
            switch (a.l) {
            case 0:
            case 3:
                return a = b.g(),
                b != this.l && a && this.j.g(a) ? [] : [14];
            case 1:
            case 2:
                return this.j.g(b) ? [] : [14];
            default:
                throw Error("Unhandled position.");
            }
        }
    }
    ;
    var tm = class {
        constructor(a) {
            this.j = a
        }
        g(a) {
            return (a = Qk(a)) && gh(a, this.j) ? [11] : []
        }
    }
    ;
    var um = class {
    }
    ;
    function vm(a=null) {
        ({googletag: a} = a ?? window);
        return a?.apiReady ? a : void 0
    }
    ;function wm(a, b) {
        const c = xm(b, ".google-auto-placed")
          , d = xm(b, "ins.adsbygoogle[data-anchor-status]")
          , e = xm(b, "ins.adsbygoogle[data-ad-format=autorelaxed]");
        var f = (ym(b) || xm(b, "div[id^=div-gpt-ad]")).concat(xm(b, "iframe[id^=google_ads_iframe]"));
        const g = xm(b, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")
          , h = xm(b, "ins.adsbygoogle-ablated-ad-slot")
          , k = xm(b, "div.googlepublisherpluginad")
          , m = xm(b, "html > ins.adsbygoogle");
        var l = [].concat(...xm(b, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), ...xm(b, "body ins.adsbygoogle"))
          , n = [];
        a.Me && (n = n.concat(xm(b, "ins.adsbygoogle[data-ad-hi]")));
        for (const [p,t] of [[a.Oe, c], [a.Ec, d], [a.Re, e], [a.Pe, f], [a.Se, g], [a.Ne, h], [a.Qe, k], [a.Te, m]])
            b = t,
            p === !1 ? n = n.concat(b) : l = l.concat(b);
        l = zm(l);
        n = zm(n);
        l = l.slice(0);
        for (const p of n)
            for (n = 0; n < l.length; n++)
                (p.contains(l[n]) || l[n].contains(p)) && l.splice(n, 1);
        return a.Ed ? Am(l) : l
    }
    function Bm(a) {
        return !!a.className && a.className.indexOf("google-auto-placed") != -1
    }
    function Cm(a) {
        const b = ym(fe(je(a))) || [];
        return !!ke(a, c => {
            if (!la(c) || c.nodeType != 1)
                return !1;
            const d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector;
            return !d || Ia(b, c) || Ha(Object.values(Dm), e => d.call(c, e))
        }
        , !1, 20)
    }
    function ym(a) {
        const b = vm(a);
        return b ? Fa(Ga(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
    }
    const Dm = {
        se: "ins.adsbygoogle-ablated-ad-slot",
        ue: "body ins.adsbygoogle",
        te: "iframe[id^=aswift_],iframe[id^=google_ads_frame]",
        ve: ".google-auto-placed",
        we: "ins.adsbygoogle[data-anchor-status]",
        ye: "iframe[id^=google_ads_iframe]",
        Be: "div[id^=div-gpt-ad]",
        De: "ins.adsbygoogle[data-ad-format=autorelaxed]",
        Ee: "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]",
        Ae: "div.googlepublisherpluginad",
        Fe: "html > ins.adsbygoogle",
        xe: "div.autors-widget",
        Ce: "ins.adsbygoogle[data-ad-hi]"
    };
    function xm(a, b) {
        return Ja(a.document.querySelectorAll(b))
    }
    function Am(a) {
        return a.filter(b => !b.querySelector('[data-google-ad-efd="true"]'))
    }
    function zm(a) {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    }
    ;var Em = Ll(453, wm);
    function Fm(a) {
        a = Gm(a);
        Hm(a);
        return new Im(a)
    }
    function Jm(a) {
        return a.g.map(b => b.box)
    }
    var Im = class {
        constructor(a) {
            this.g = a.slice(0)
        }
    }
    ;
    function Gm(a) {
        const b = Em({
            Ec: !1,
            Ed: !1
        }, a)
          , c = tg(a)
          , d = sg(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = Bm(e)) || (f.bottom - f.top) * (f.right - f.left) > 1 ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                He: e ? 1 : 0
            } : null
        }
        ).filter(cd(e => e === null))
    }
    function Hm(a) {
        Ga(a, () => new um)
    }
    ;var Km = class {
        constructor(a, b, c) {
            this.j = Em({}, c).map(qa(a.g, a)).filter(cd(d => d === null));
            this.l = b
        }
        g(a) {
            if (!a)
                return [9];
            a = a.j();
            for (let d = 0; d < this.j.length; d++) {
                const e = this.j[d].j();
                var b;
                if (b = (e.bottom - e.top) * (e.right - e.left) > 1) {
                    b = a.top;
                    var c = this.l;
                    (b = e.top - c < b && b < e.bottom + c) || (b = a.bottom,
                    c = this.l,
                    b = e.top - c < b && b < e.bottom + c)
                }
                if (b)
                    return [8]
            }
            return []
        }
    }
    ;
    var Lm = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            if (Rk(a))
                return [];
            a = $l(this.j.j, a);
            var b = ki(this.j, a);
            if (!b)
                return [];
            const c = this.l.g(b.start.g);
            b = b.end.pa();
            return c && a - b <= 10 ? [5] : []
        }
    }
    ;
    const Mm = "ASIDE DIV IMG LI SECTION TABLE TD".split(" ");
    var Nm = class {
        g(a) {
            a = Qk(a);
            if (!a)
                return [12];
            if (!Mm.includes(a.I.tagName) || a.I.id)
                return [];
            const b = sh(a)
              , c = Wg(a);
            for (const d of b)
                if (c.getElementsByClassName(d).length == 1)
                    return [];
            return a.j().getHeight() <= 150 ? [13] : []
        }
    }
    ;
    var Om = class {
        g(a) {
            return a && !a.Wa() && ih(a) ? [] : [3]
        }
    }
    ;
    function Pm(a, b) {
        return a.g.length > 0 ? (b.resolve(a.g.shift()),
        !0) : !1
    }
    var Qm = class {
        constructor(a, b) {
            this.j = a;
            this.B = b;
            this.G = [];
            this.A = [];
            this.g = []
        }
        ka() {
            const a = new vi;
            this.j.g(new ri(qa(this.l, this, a),"p"));
            return a.g
        }
        l(a) {
            Pm(this, a) || this.B.ka().then(qa(this.C, this, a), a.reject.bind(a))
        }
        C(a, b) {
            b = Yl([b], this.G, this.A);
            Ka(this.g, b);
            Pm(this, a) || this.j.g(new ri(qa(this.l, this, a),"p"))
        }
    }
    ;
    var Rm = class {
        constructor(a) {
            this.g = a.filter(b => Rk(b));
            this.j = a.filter(b => !Rk(b))
        }
        ka() {
            return this.g.shift() || this.j.shift() || null
        }
    }
    ;
    var Sm = class {
    }
    ;
    function Tm(a, b) {
        a.j.g(new ri( () => {
            const c = a.g ? a.g.ka() : null;
            c ? Um(a, b, c) : a.B.ka().then(qa(a.C, a, b), qa(a.L, a, b))
        }
        ,"r"))
    }
    function Um(a, b, c) {
        a.A && a.A.apply(c);
        a.l ? em(a.l, c).then(function(d) {
            d.length == 0 ? (a.g.g.length > 0 || (a.g = null),
            xi(a.j, b, c, "rres")) : (a.G.push(new Sm),
            Tm(a, b))
        }) : xi(a.j, b, c, "rres")
    }
    var Vm = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.B = b;
            this.A = c;
            this.l = d;
            this.g = null;
            this.G = []
        }
        ka() {
            const a = new vi;
            Tm(this, a);
            return a.g
        }
        C(a, b) {
            this.g = b;
            Tm(this, a)
        }
        L(a) {
            yi(this.j, a)
        }
    }
    ;
    var Wm = class {
        constructor(a) {
            this.g = a
        }
        ka() {
            const a = new vi;
            this.g.ka().then(b => {
                a.resolve(new Rm([b]))
            }
            , a.reject.bind(a));
            return a.g
        }
    }
    ;
    var Xm = class {
        constructor(a, b) {
            this.g = a;
            this.j = b
        }
        apply(a) {
            var b = Zl(this.g, a);
            b = this.j.get(z(this.g.Aa[b]));
            a.B = b.Ld <= b.Qd
        }
    }
    ;
    var Ym = class {
        constructor(a) {
            this.j = a
        }
        g(a) {
            a: {
                const b = Qk(a);
                if (b) {
                    switch (a.l) {
                    case 0:
                    case 3:
                        if (a = b.g())
                            break a;
                        throw Error("An ad placement with BEFORE or AFTER position cannot have an anchor with no parent.");
                    case 1:
                    case 2:
                        a = b;
                        break a
                    }
                    throw Error("Un-handled ad placement position.");
                }
                a = null
            }
            return a && Ia(this.j, a.I) ? [18] : []
        }
    }
    ;
    var Zm = [{
        hostname: /^([a-z]+.)?m.wikihow.com$/,
        xd: "mw-mf-viewport"
    }];
    const $m = a => {
        if (!a.location || !a.location.hostname)
            return [];
        const b = a.location.hostname
          , c = [];
        Ea(Zm, function(d) {
            b.match(d.hostname) && (d = a.document.getElementById(d.xd)) && c.push(d)
        });
        return c
    }
    ;
    function an(a, b) {
        a.j.g(new ri(function() {
            if (a.g)
                if (a.l.g(a.g)) {
                    var c = a.g;
                    a.g = ah(a.g);
                    b.resolve(c)
                } else {
                    a: {
                        c = a.g;
                        const d = Zg(c);
                        for (let e = 0; e < d.length; ++e)
                            if (d[e].A()) {
                                c = d[e];
                                break a
                            }
                        c = ah(c)
                    }
                    a.g = c;
                    an(a, b)
                }
            else
                b.reject(null)
        }
        ,"fpar"))
    }
    var bn = class {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.l = c
        }
        ka() {
            const a = new vi;
            an(this, a);
            return a.g
        }
    }
    ;
    var cn = class {
        constructor(a) {
            this.j = a;
            this.g = []
        }
        reset() {
            const a = this.g;
            this.g = [];
            return a
        }
    }
    ;
    const dn = {
        Z: [3],
        ea: !1,
        fa: 0,
        da: 1
    }
      , en = new Dg(["LI", "TR", "TD", "TH"]);
    function fn(a, b) {
        a.j.g(new ri(function() {
            a.B.ka().then(qa(a.A, a, b), qa(a.l, a, b))
        }
        ,"para"))
    }
    var gn = class {
        constructor(a, b, c) {
            this.j = a;
            this.B = b;
            this.g = new cn(c)
        }
        ka() {
            const a = new vi;
            fn(this, a);
            return a.g
        }
        A(a, b) {
            var c = this.g;
            if (c.g.length) {
                var d = c.g[c.g.length - 1];
                var e = c.j;
                const f = e.j.map.get(z(b));
                (e = f ? ki(e, f.start.pa()) : null) ? (e = e.start.g,
                d = d == e || d != e && ie(d.I, e.I)) : d = !0
            } else
                d = !0;
            d ? c.g.push(b) : c.g = [b];
            b = this.g;
            (b = b.g.length >= 3 ? b.g[b.g.length - 3 + 1] : null) && !Cg(en, b.I.tagName) ? a.resolve({
                node: b,
                Pb: pk(dn),
                identifier: {}
            }) : fn(this, a)
        }
        l(a) {
            a.reject("na")
        }
    }
    ;
    var hn = class extends zi {
        constructor() {
            super();
            this.j = [];
            this.l = !1
        }
        g(a) {
            this.j.push(a);
            if (!this.l) {
                this.l = !0;
                try {
                    for (; this.j.length > 0; )
                        this.j.shift().g()
                } finally {
                    this.l = !1
                }
            }
        }
    }
    ;
    var jn = class {
        constructor() {
            this.g = Date.now();
            this.j = Date.now()
        }
    }
    ;
    class kn {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.j = 0;
            this.g = null
        }
        get() {
            let a;
            this.j > 0 ? (this.j--,
            a = this.g,
            this.g = a.next,
            a.next = null) : a = this.l();
            return a
        }
    }
    ;function ln() {
        var a = mn;
        let b = null;
        a.g && (b = a.g,
        a.g = a.g.next,
        a.g || (a.j = null),
        b.next = null);
        return b
    }
    class nn {
        constructor() {
            this.j = this.g = null
        }
        add(a, b) {
            const c = on.get();
            c.set(a, b);
            this.j ? this.j.next = c : this.g = c;
            this.j = c
        }
    }
    var on = new kn( () => new pn,a => a.reset());
    class pn {
        constructor() {
            this.next = this.g = this.j = null
        }
        set(a, b) {
            this.j = a;
            this.g = b;
            this.next = null
        }
        reset() {
            this.next = this.g = this.j = null
        }
    }
    ;let qn, rn = !1, mn = new nn, tn = (a, b) => {
        qn || sn();
        rn || (qn(),
        rn = !0);
        mn.add(a, b)
    }
    , sn = () => {
        const a = Promise.resolve(void 0);
        qn = () => {
            a.then(un)
        }
    }
    ;
    function un() {
        for (var a; a = ln(); ) {
            try {
                a.j.call(a.g)
            } catch (c) {
                ta(c)
            }
            var b = on;
            b.A(a);
            b.j < 100 && (b.j++,
            a.next = b.g,
            b.g = a)
        }
        rn = !1
    }
    ;var vn = class extends zi {
        constructor(a, b, c) {
            var d = new jn;
            super();
            this.H = a;
            this.j = d;
            this.C = b || null;
            this.A = c || null;
            this.l = [];
            this.B = !1;
            this.J = tn
        }
        g(a) {
            this.l.push(a);
            this.B || this.J(this.L, this)
        }
        L() {
            this.C ? this.C(qa(this.G, this)) : this.G()
        }
        G() {
            if (!this.B) {
                this.B = !0;
                try {
                    for (this.j.g = Date.now(); this.l.length > 0; ) {
                        const a = this.l.shift();
                        this.j.j = Date.now();
                        a.g();
                        this.A && this.A.j(Date.now() - this.j.j, a.j);
                        if (Date.now() - this.j.g + 10 > 50)
                            break
                    }
                    this.l.length > 0 && this.H.setTimeout(qa(this.L, this), 0)
                } finally {
                    this.B = !1,
                    this.A && this.A.g(Date.now() - this.j.g)
                }
            }
        }
    }
    ;
    function wn(a, b) {
        const c = new vi
          , d = b.H ? new vn(a,ra(Kl, b.g ? "lr:apf:" + b.g : "lr:apf"),b.L) : new hn;
        d.g(new ri(function() {
            Ii(new Li(d), a, b).then(function(e) {
                const f = e.j
                  , g = e.A;
                var h = e.l;
                a: {
                    var k = e.j
                      , m = e.g.B;
                    switch (m) {
                    case 2:
                        var l = k.A;
                        k = e.l.g;
                        k.A || (m = new Ah(Sh(k),0),
                        k.g || (k.g = new Dh(new Ah(Sh(k),0))),
                        k.A = new Gh(m,new Ah(k.g,1),new Ah(Th(k),2)));
                        l = new gn(d,new bn(d,l,new Ah(k.A,3)),e.A.g);
                        break a;
                    default:
                        l = k.B;
                        var n = k.g.Aa;
                        k = e.g;
                        m = m == 1 ? rk(n) : Ig(n);
                        l = new vk(l,m,k)
                    }
                }
                l = new Wm(new Qm(d,l));
                k = new Xm(f.g,g.l);
                m = new fm(d,f.g);
                e.g.C && bm(m, new pm(f.g,f.O));
                n = $m(f.j);
                h = bm(bm(bm(bm(m, new Ym(n)), new Lm(g.g,new Ah(Th(h.g),2))), new Nm), new sm(f.A,new rm(g.g)));
                n = new im;
                Ka(n.j, jm);
                n = hm(hm(n, km), lm);
                Ka(n.A, nm);
                Ka(n.j, mm);
                h = am(bm(bm(h, hm(n, mm)), new tm(f.T * f.O)), new Om);
                var p = e.g
                  , t = e.j.B;
                n = Math.max(t * p.A, p.minWidth);
                p = t * p.j;
                n = n !== void 0 ? n : 0;
                p = p !== void 0 ? p : Infinity;
                if (n < 0 || p < 0)
                    throw Error("apf::wf");
                am(am(am(h, n <= 0 && p === Infinity ? null : new qi(n,p)), new Km(f.A.l,e.g.G,f.j)), new gm([g.g, g.j]));
                e.g.l > 0 && am(m, new om(f.j,e.g.l));
                xi(d, c, new Vm(d,l,k,m), "itres")
            }, c.reject.bind(c))
        }
        ,"i"));
        return c.g
    }
    ;var xn = class {
        constructor(a) {
            this.g = new Dg(a)
        }
    }
    ;
    var yn = class {
        constructor(a) {
            this.g = a
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return this.g != null ? (a = a(this.getValue()),
            a instanceof yn ? a : new yn({
                value: a
            })) : this
        }
    }
    ;
    function zn(a) {
        return b => {
            for (const c of a)
                c(b)
        }
    }
    ;var An = class extends E {
        getValue() {
            return Pc(this, 2, C)
        }
    }
    ;
    var Bn = class extends E {
    }
    ;
    var Cn = class extends E {
    }
    ;
    var Dn = class extends E {
    }
    ;
    var En = class extends E {
    }
      , Fn = Wc(En);
    $i(new Xi(0,{}));
    $i(new Xi(1,{}));
    var Gn = class {
        constructor() {
            this.g = Id`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`
        }
        Ja(a, b, c=.01, d="jserror") {
            if (Math.random() > c)
                return !1;
            b.error && b.meta && b.id || (b = new Ke(b,{
                context: a,
                id: d
            }));
            w.google_js_errors = w.google_js_errors || [];
            w.google_js_errors.push(b);
            w.error_rep_loaded || (Jd(w.document, this.g),
            w.error_rep_loaded = !0);
            return !1
        }
        za(a, b) {
            try {
                return b()
            } catch (c) {
                if (!this.Ja(a, c, .01, "jserror"))
                    throw c;
            }
        }
        aa(a, b) {
            return (...c) => this.za(a, () => b.apply(void 0, c))
        }
    }
    ;
    function Hn(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    }
    function In(a, b, c) {
        const d = c || window
          , e = typeof queueMicrotask !== "undefined";
        return function(...f) {
            e && queueMicrotask( () => {
                d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1;
                d.google_rum_task_id_counter += 1
            }
            );
            const g = Se();
            let h, k = 3;
            try {
                h = a.apply(this, f)
            } catch (m) {
                k = 13;
                if (!b)
                    throw m;
                b(754, m)
            } finally {
                d.google_measure_js_timing && g && Hn({
                    label: (754).toString(),
                    value: g,
                    duration: (Se() || 0) - g,
                    type: k,
                    ...(e && {
                        taskId: d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1
                    })
                }, d)
            }
            return h
        }
    }
    function Jn(a, b) {
        return In(a, (c, d) => {
            (new Gn).Ja(c, d)
        }
        , b)
    }
    ;function Kn(a, b) {
        return Jn(a, b).apply()
    }
    const Ln = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };
    function Mn(a) {
        return a == null ? a : Ln[a]
    }
    function Nn(a) {
        const b = [];
        for (let c = 0; c < a.length; c++) {
            const d = Pc(a[c], 1, C)
              , e = a[c].getValue();
            d && e != null && b.push({
                property: d,
                value: e
            })
        }
        return b
    }
    function On(a, b) {
        const c = {};
        a && (c.jc = Pc(a, 1, C),
        c.Qb = Pc(a, 2, C),
        c.Sb = !!Oc(a, 3, C));
        b && (c.Hb = Nn(Kc(b, An, 3).map(d => kc(d))),
        c.zb = Nn(Kc(b, An, 4).map(d => kc(d))));
        return c
    }
    const Pn = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };
    var Qn = class {
        constructor(a) {
            this.g = a
        }
        j(a, b, c, d) {
            c = Ok(d.document, this.g);
            c.Qa.setAttribute("data-ad-format", "auto");
            Nk(c, a, b);
            return c
        }
    }
    ;
    var Rn = class {
        constructor(a) {
            this.g = a
        }
        j(a, b, c, d) {
            var e = Kc(this.g, Bn, 9).length > 0 ? Kc(this.g, Bn, 9)[0] : null
              , f = this.g.Y;
            (f = Ic(f, f[B] | 0, Cn, 3)) || (f = Cn[Wa] || (Cn[Wa] = Yb(Cn)));
            f = On(f, e);
            if (!e)
                return null;
            if (e = Pc(e, 1, C)) {
                d = d.document;
                var g = c.tagName;
                c = me(new le(d), g);
                c.style.clear = f.Sb ? "both" : "none";
                g == "A" && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Hb && Mk(c.style, f.Hb);
                d = me(new le(d), "INS");
                f.zb && Mk(d.style, f.zb);
                c.appendChild(d);
                f = {
                    lb: c,
                    Qa: d
                };
                f.Qa.setAttribute("data-ad-type", "text");
                f.Qa.setAttribute("data-native-settings-key", e);
                Nk(f, a, b);
                a = f
            } else
                a = null;
            return a
        }
    }
    ;
    var Sn = class {
        constructor(a, b) {
            this.j = a;
            this.g = b
        }
    }
    ;
    function Tn(a) {
        return a.A
    }
    function Un(a, b) {
        gg(a.j, 0) || a.j.set(0, []);
        a.j.get(0).push(b)
    }
    var Vn = class {
        constructor(a, b, c, d, e, f, g, h=null, k=null) {
            this.g = a;
            this.L = b;
            this.H = c;
            this.Jc = d;
            e || new dj;
            this.l = f;
            this.C = g;
            this.B = h;
            (this.G = k) && Jc(k, Wi, 1) && (a = Jc(k, Wi, 1),
            Lb(D(a, 5)));
            this.J = [];
            this.A = !1;
            this.j = new jg
        }
        pa() {
            return this.C
        }
    }
    ;
    var Wn = a => {
        switch (a.Jc) {
        case 0:
        case 1:
            var b = a.G;
            b == null ? a = null : (a = Jc(b, Wi, 1),
            a == null ? a = null : (b = Ib(D(b, 2, C)),
            a = b == null ? null : new Xi(0,{
                ld: [a],
                ae: b
            })));
            return a != null ? new yn({
                value: a
            }) : new yn(null);
        case 2:
            return new yn(null);
        default:
            return new yn(null)
        }
    }
    ;
    function Xn(a, b=window) {
        if (Oc(a, 5) ?? !1)
            try {
                return b.localStorage
            } catch {}
        return null
    }
    ;var Yn = Wc(class extends E {
    }
    );
    function Zn(a) {
        a && typeof a.dispose == "function" && a.dispose()
    }
    ;function U() {
        this.L = this.L;
        this.sa = this.sa
    }
    U.prototype.L = !1;
    U.prototype.dispose = function() {
        this.L || (this.L = !0,
        this.ib())
    }
    ;
    U.prototype[fa(Symbol, "dispose")] = function() {
        this.dispose()
    }
    ;
    function V(a, b) {
        W(a, ra(Zn, b))
    }
    function W(a, b) {
        a.L ? b() : (a.sa || (a.sa = []),
        a.sa.push(b))
    }
    U.prototype.ib = function() {
        if (this.sa)
            for (; this.sa.length; )
                this.sa.shift()()
    }
    ;
    function $n(a) {
        return Wn(a.Da).map(b => $i(b))
    }
    function ao(a) {
        a.j = a.j || $n(a);
        return a.j
    }
    const bo = class {
        constructor(a, b, c) {
            this.Da = a;
            this.g = b;
            this.Xa = c;
            this.j = null
        }
        fill(a, b) {
            var c = this.Da;
            if (a = c.L.j(a, b, this.g, c.l)) {
                b = a.lb;
                if (this.Da.A)
                    throw Error("AMA:AP:AP");
                c = this.g;
                var d = this.Da.g.g;
                Q(tj) ? kk(b, c, d) : ej(b, c, d);
                c = this.Da;
                c.A = !0;
                b != null && c.J.push(b)
            }
            return a
        }
    }
    ;
    function co(a) {
        switch (a) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        default:
            return null
        }
    }
    ;function eo(a, b) {
        return Kn( () => {
            const c = []
              , d = [];
            try {
                var e = [];
                for (var f = 0; f < a.length; f++) {
                    var g = a[f];
                    a: {
                        var h = g.g.j
                          , k = [];
                        try {
                            k = g.l.document.querySelectorAll(h.A)
                        } catch (x) {}
                        if (!k.length) {
                            var m = [];
                            break a
                        }
                        let v = Ja(k);
                        v = Pi(h, v);
                        b: {
                            if (typeof h.j !== "number")
                                break b;
                            let x = h.j;
                            x < 0 && (x += v.length);
                            v = x >= 0 && x < v.length ? [v[x]] : []
                        }
                        b: {
                            k = h;
                            var l = v;
                            if (typeof k.l !== "number") {
                                v = l;
                                break b
                            }
                            const x = [];
                            for (let O = 0; O < l.length; O++) {
                                const J = Mi(l[O]);
                                let S = k.l;
                                S < 0 && (S += J.length);
                                S >= 0 && S < J.length && x.push(J[S])
                            }
                            v = x
                        }
                        m = v
                    }
                    k = m;
                    var n = k.length > 0 ? k[0] : null;
                    n && e.push({
                        Jb: g,
                        qc: n
                    })
                }
                for (g = 0; g < e.length; g++) {
                    m = d;
                    var p = m.push;
                    {
                        var t = e[g];
                        const v = t.qc
                          , x = t.Jb;
                        var q = x.H;
                        const O = x.l.document.createElement("div");
                        O.className = "google-auto-placed";
                        const J = O.style;
                        J.textAlign = "center";
                        J.width = "100%";
                        J.height = "0px";
                        J.clear = q ? "both" : "none";
                        n = O;
                        try {
                            h = n;
                            f = v;
                            var u = x.g.g;
                            Q(tj) ? kk(h, f, u) : ej(h, f, u);
                            var y = n
                        } catch (S) {
                            throw fj(n),
                            S;
                        }
                    }
                    p.call(m, y)
                }
                const T = sg(b)
                  , H = tg(b);
                for (p = 0; p < d.length; p++) {
                    const v = d[p].getBoundingClientRect()
                      , x = e[p];
                    c.push(new bo(x.Jb,x.qc,new qm(v.left + H,v.top + T,v.right - v.left)))
                }
            } finally {
                for (e = 0; e < d.length; e++)
                    fj(d[e])
            }
            return c
        }
        , b)
    }
    ;function fo(a, b) {
        const c = {
            top: b.g - 25,
            right: b.j + b.l,
            bottom: b.g + 25,
            left: b.j
        };
        return !Ha(a, d => mg(d, c))
    }
    ;function go(a) {
        return function(b) {
            return eo(b, a)
        }
    }
    function ho(a) {
        const b = Jm(Fm(a));
        return c => fo(b, c.Xa)
    }
    function io(a) {
        if (!a.length)
            return ad;
        const b = new xn(a);
        return c => Cg(b.g, c.Jc)
    }
    function jo(a, b) {
        if (a <= 0)
            return bd;
        const c = pg(b).scrollHeight - a;
        return function(d) {
            return d.Xa.g <= c
        }
    }
    const ko = (a, b) => b.Xa.g >= a
      , lo = (a, b, c) => {
        c = c.Xa.l;
        return a <= c && c <= b
    }
    ;
    var mo = class {
        Ua(a) {
            return ho(a)
        }
        Va() {
            return 9
        }
    }
    ;
    var no = class {
        constructor(a) {
            this.g = a
        }
        Ua(a) {
            return jo(this.g, a)
        }
        Va() {
            return 13
        }
    }
    ;
    var oo = class {
        Ua(a) {
            const b = pg(a).clientHeight;
            return b ? ra(ko, b + sg(a)) : ad
        }
        Va() {
            return 12
        }
    }
    ;
    var po = class {
        constructor(a) {
            this.g = a
        }
        Ua() {
            return io(this.g)
        }
        Va() {
            return 1
        }
    }
    ;
    var qo = class {
        Ua() {
            return cd(Tn)
        }
        Va() {
            return 7
        }
    }
    ;
    var ro = class {
        constructor(a, b) {
            this.minWidth = a;
            this.g = b
        }
        Ua() {
            return ra(lo, this.minWidth, this.g)
        }
        Va() {
            return 10
        }
    }
    ;
    var so = class {
        constructor(a) {
            this.A = a.j.slice(0);
            this.j = a.g.slice(0);
            this.l = a.l;
            this.B = a.B;
            this.g = a.A
        }
    }
    ;
    function to(a=0, b=Infinity) {
        var c = new uo
          , d = [0];
        c.A = d;
        c.j.push(new po(d));
        c.j.push(new qo);
        c.g.push(new mo);
        c.g.push(new ro(a,b));
        return c
    }
    function vo(a, b=0) {
        a.g.push(new no(b));
        return a
    }
    var uo = class {
        constructor() {
            this.l = 0;
            this.B = !1;
            this.j = [].slice(0);
            this.g = [].slice(0)
        }
        build() {
            return new so(this)
        }
    }
    ;
    function wo(a, b, c) {
        gg(a.g, b) || a.g.set(b, []);
        a.g.get(b).push(c)
    }
    var xo = class {
        constructor() {
            this.g = new jg
        }
    }
    ;
    function yo(a, b, c) {
        const d = b.Da;
        if (!gg(a.g, d)) {
            var e = a.g
              , f = e.set;
            b = ao(b);
            b.g != null && b.getValue();
            f.call(e, d, new zo)
        }
        c(a.g.get(d))
    }
    function Ao(a, b) {
        yo(a, b, c => {
            c.g = !0
        }
        )
    }
    function Bo(a, b) {
        yo(a, b, c => {
            c.j = !0
        }
        )
    }
    var Co = class {
        constructor() {
            this.g = new jg
        }
    }
    ;
    class zo {
        constructor() {
            this.j = this.g = !1
        }
    }
    ;var Do = class {
        constructor(a) {
            this.j = a;
            this.g = -1
        }
    }
    ;
    function Eo(a) {
        let b = 0;
        for (; a; )
            (!b || a.previousElementSibling || a.nextElementSibling) && b++,
            a = a.parentElement;
        return b
    }
    ;function Fo(a) {
        const b = null.ze.filter(c => ig(c.Ub).every(d => c.Ub.get(d) === a.get(d)));
        return b.length === 0 ? (null.jd.push(19),
        null) : b.reduce( (c, d) => c.Ub.Db() > d.Ub.Db() ? c : d, b[0])
    }
    function Go(a) {
        a = ao(a);
        if (a.g == null)
            return null.jd.push(18),
            null;
        a = a.getValue();
        if (gg(null.Sc, a))
            return null.Sc.get(a);
        var b = Yi(a);
        b = Fo(b);
        null.Sc.set(a, b);
        return b
    }
    ;function Ho(a) {
        return a.g.length == 0 ? a : a.sort( (b, c) => (Go(b)?.Xd ?? Number.MAX_VALUE) - (Go(c)?.Xd ?? Number.MAX_VALUE))
    }
    function Io(a, b) {
        var c = b.g;
        const d = b.Da.g.g;
        c = b.Xa.g + 200 * Math.min(20, d == 0 || d == 3 ? Eo(c.parentElement) : Eo(c));
        a = a.g;
        a.g < 0 && (a.g = pg(a.j).scrollHeight || 0);
        b = a.g - b.Xa.g;
        return c + (b > 1E3 ? 0 : 2 * (1E3 - b))
    }
    function Jo(a, b) {
        return b.g.length == 0 ? b : b.sort( (c, d) => Io(a, c) - Io(a, d))
    }
    function Ko(a, b) {
        return b.sort( (c, d) => {
            const e = c.Da.B
              , f = d.Da.B;
            var g;
            e == null || f == null ? g = e == null && f == null ? Io(a, c) - Io(a, d) : e == null ? 1 : -1 : g = e - f;
            return g
        }
        )
    }
    var Lo = class {
        constructor(a) {
            this.g = new Do(a)
        }
    }
    ;
    function Mo(a, b) {
        var c = a.l;
        for (var d of b.A)
            c = Ti(c, d.Ua(a.g), No(d.Va()));
        d = c = c.apply(go(a.g));
        for (const e of b.j)
            d = Ti(d, e.Ua(a.g), zn([Oo(e.Va()), () => {}
            ]));
        switch (b.l) {
        case 1:
            d = Jo(a.j, d);
            break;
        case 2:
            d = Ko(a.j, d);
            break;
        case 3:
            const e = Zf(Co);
            d = Ho(d);
            c.forEach(f => {
                Ao(e, f)
            }
            );
            d.forEach(f => Bo(e, f))
        }
        b.B && (d = Vi(d, yd(a.g.location.href + a.g.localStorage.google_experiment_mod)));
        b.g?.length === 1 && wo(a.A, b.g[0], {
            Ie: c.g.length,
            bf: d.g.length
        });
        return d.g.slice(0)
    }
    var Po = class {
        constructor(a, b) {
            this.l = new Ui(a);
            this.j = new Lo(b);
            this.g = b;
            this.A = new xo
        }
    }
    ;
    const No = a => b => Un(b, a)
      , Oo = a => b => Un(b.Da, a);
    function Qo(a, b, c, d=null) {
        const e = g => {
            let h;
            try {
                h = JSON.parse(g.data)
            } catch (k) {
                return
            }
            !h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
        }
        ;
        I(a, "message", e);
        let f = !1;
        return () => {
            let g = !1;
            f || (f = !0,
            g = K(a, "message", e));
            return g
        }
    }
    function Ro(a, b, c, d, e) {
        if (!(e <= 0) && (c.googMsgType = b,
        a.postMessage(JSON.stringify(c), d),
        a = a.frames))
            for (let f = 0; f < a.length; ++f)
                e > 1 && Ro(a[f], b, c, d, --e)
    }
    ;function So(a, b, c, d) {
        return Qo(a, "fullscreen", d.aa(952, (e, f) => {
            if (f.source === b) {
                if (!("eventType"in e))
                    throw Error(`bad message ${JSON.stringify(e)}`);
                delete e.googMsgType;
                c(e)
            }
        }
        ))
    }
    function To(a, b) {
        b.googMsgType = "fullscreen";
        a.postMessage(JSON.stringify(b), "*")
    }
    ;class Uo {
        constructor() {
            this.promise = new Promise( (a, b) => {
                this.resolve = a;
                this.reject = b
            }
            )
        }
    }
    ;async function Vo(a) {
        return a.l.promise
    }
    async function Wo(a) {
        return a.g.promise
    }
    async function Xo(a) {
        return a.j.promise
    }
    function Yo(a, b) {
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = .25;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.Nb.ie;
        b.version = a.Nb.version;
        kf(a.ca, "fullscreen_tag", b, !1, .25)
    }
    class Zo extends U {
        constructor(a, b, c, d, e) {
            super();
            this.slotType = 1;
            this.pubWin = a;
            this.Tb = b;
            this.N = c;
            this.ca = d;
            this.Nb = e;
            this.state = 1;
            this.qem = null;
            this.l = new Uo;
            this.g = new Uo;
            this.j = new Uo
        }
        init() {
            const a = So(this.pubWin, this.Tb, b => {
                if (b.eventType === "adError")
                    this.j.resolve(),
                    this.state = 4;
                else if (b.eventType === "adReady" && this.state === 1)
                    this.qem = b.qem,
                    b.slotType !== this.slotType && (Yo(this, {
                        cur_st: this.state,
                        evt: b.eventType,
                        adp_tp: b.slotType
                    }),
                    this.state = 4),
                    this.l.resolve(),
                    this.state = 2;
                else if (b.eventType === "adClosed" && this.state === 2)
                    this.g.resolve(b.result),
                    this.state = 3;
                else if (b.eventType !== "adClosed" || this.state !== 3)
                    b.eventType === "adClosed" && b.closeAfterError && (this.g.resolve(b.result),
                    this.state = 3),
                    Yo(this, {
                        cur_st: this.state,
                        evt: b.eventType
                    }),
                    this.state = 4
            }
            , this.N);
            W(this, a)
        }
    }
    function $o(a, b, c, d, e) {
        a = new Zo(a,b,c,d,e);
        a.init();
        return a
    }
    ;function ap(a) {
        return kb(b => {
            if (b instanceof a)
                return !0;
            const c = b?.ownerDocument?.defaultView?.[a.name];
            return jb(c) && b instanceof c
        }
        )
    }
    ap(Node);
    ap(Element);
    var bp = ap(HTMLElement);
    ap(SVGElement);
    function cp(a) {
        return kb(b => bp(b) && b.tagName.toLowerCase() === a)
    }
    ;var dp = class {
        constructor() {
            this.j = this.l = 1;
            this.g = new Map
        }
        takeNextPageEventIndex() {
            return this.l++
        }
        takeNextAnnotationEntryId() {
            return this.j++
        }
        getTermUsageCount(a) {
            return this.g.get(a) ?? 0
        }
        incrementTermUsageCount(a) {
            const b = this.g.get(a) ?? 0;
            this.g.set(a, b + 1)
        }
    }
    ;
    function X(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set),
        a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map),
        a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map),
        a.google_reactive_ads_global_state.sideRailMutationCallbacks == null && (a.google_reactive_ads_global_state.sideRailMutationCallbacks = []),
        a.google_reactive_ads_global_state.adIntentsPageState == null && (a.google_reactive_ads_global_state.adIntentsPageState = new dp)) : a.google_reactive_ads_global_state = new ep;
        return a.google_reactive_ads_global_state
    }
    var ep = class {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new fp;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.sideRailMutationCallbacks = [];
            this.g = null;
            this.clickTriggeredInterstitialMayBeDisplayed = !1;
            this.adIntentsPageState = new dp
        }
    }
      , fp = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    }
    ;
    function gp(a, b) {
        a = X(a)?.tagSpecificState[1];
        return a == null ? null : a.debugCard?.getAdType() === b ? a.debugCard : null
    }
    ;function hp(a, b) {
        var c = b.adClient;
        if (typeof c === "string" && c) {
            a.A = c;
            a.B = !!b.adTest;
            c = b.pubVars;
            la(c) && (a.C = c);
            if (Array.isArray(b.fillMessage) && b.fillMessage.length > 0) {
                a.g = {};
                for (d of b.fillMessage)
                    a.g[d.key] = d.value
            }
            a.l = b.adWidth;
            a.j = b.adHeight;
            a.J = !!b.delayVisibleUntilCreativeReadyMessage;
            typeof a.l === "number" && a.l > 0 && typeof a.j === "number" && a.j > 0 || Ml("rctnosize", b);
            var d = !0
        } else
            d = !1;
        return d && a.G(b)
    }
    var ip = class {
        constructor() {
            this.bb = this.H = this.g = this.C = this.B = this.A = null;
            this.j = this.l = 0;
            this.J = !1
        }
        G() {
            return !0
        }
    }
    ;
    var jp = class extends ip {
        constructor() {
            super();
            this.g = null;
            this.L = !1
        }
        G(a) {
            a.hasFillMessage || (this.g = null);
            this.L = !!a.blockLocationFallback;
            a.anchorPlusConfig && (a = a.anchorPlusConfig,
            isFinite(Number(a.maxHeight)) && (this.H = Number(a.maxHeight)),
            isFinite(Number(a.animationSpeedPxPerMillis)) && (this.bb = Number(a.animationSpeedPxPerMillis)));
            return !0
        }
    }
    ;
    function kp(a, b, c, d) {
        a.dataset.adsbygoogleStatus = "reserved";
        a.className += " adsbygoogle-noablate";
        c.adsbygoogle || (c.adsbygoogle = [],
        Jd(c.document, Id`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
        c.adsbygoogle.push({
            element: a,
            params: b,
            ...(d ? {
                ofxVI: d
            } : null)
        })
    }
    ;const lp = [1, 2];
    function mp(a, b, c) {
        const d = ge(document, "INS");
        d.className = "adsbygoogle";
        b.document.body.appendChild(d);
        const e = c.C || {};
        e.google_ad_client = c.A;
        e.google_ad_width = c.l;
        e.google_ad_height = c.j;
        e.google_reactive_ad_format = a.g;
        c.g && (e.google_reactive_fill_message = c.g);
        c.L && (e.google_reactive_block_location_fallback = !0);
        c.H && (e.google_reactive_anchor_plus_max_height = c.H);
        c.bb && (e.google_reactive_anchor_plus_animation_speed_px_per_millis = c.bb);
        c.B && (e.google_adtest = "on");
        c.J && (e.gdvucrm = c.J);
        kp(d, e, b)
    }
    var np = class {
        constructor(a) {
            this.g = a
        }
        verifyAndProcessConfig(a, b) {
            const c = X(a);
            if (c.wasReactiveAdConfigReceived[this.g])
                return !1;
            const d = new jp;
            if (!hp(d, b))
                return !1;
            lp.forEach(e => {
                c.wasReactiveAdConfigReceived[e] = !0
            }
            );
            mp(this, a, d);
            return !0
        }
    }
    ;
    var pp = dd(op);
    function op() {
        let a = "";
        for (const b of qp())
            b <= 15 && (a += "0"),
            a += b.toString(16);
        return a
    }
    function qp() {
        if (typeof window.crypto?.getRandomValues === "function") {
            var a = new Uint8Array(16);
            window.crypto.getRandomValues(a);
            return a
        }
        a = window;
        if (typeof a.msCrypto?.getRandomValues === "function") {
            var b = new Uint8Array(16);
            a.msCrypto.getRandomValues(b);
            return b
        }
        a = Array(16);
        for (b = 0; b < a.length; b++)
            a[b] = Math.floor(Math.random() * 255);
        return a
    }
    ;function rp(a, b, c) {
        try {
            if (!sp(a, c.origin) || !rg(c, a.H.contentWindow))
                return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e = null;
        typeof d === "string" && (e = a.la[d]) && a.N.za(168, () => {
            e.call(a, b, c)
        }
        )
    }
    function sp(a, b) {
        (a = a.pb.includes(b)) || (a = Ud[b] || Vd.test(b) || Wd.test(b) || Xd.test(b));
        return a
    }
    var tp = class extends U {
        constructor(a, b, c, d, e={}, f=[]) {
            super();
            this.j = a;
            this.H = b;
            this.N = c;
            this.ca = d;
            this.pb = f;
            this.la = {};
            this.ia = [];
            this.ub = this.N.aa(168, (g, h) => void rp(this, g, h));
            this.wb = this.N.aa(169, (g, h) => {
                kf(this.ca, "ras::xsf", {
                    c: h.data.substring(0, 500),
                    u: this.j.location.href.substring(0, 500)
                }, !0, .1);
                return !0
            }
            );
            this.init(e)
        }
        init(a) {
            this.W(this.la, a);
            this.ia.push(Qo(this.j, "sth", this.ub, this.wb))
        }
        ib() {
            for (const a of this.ia)
                a();
            this.ia.length = 0;
            super.ib()
        }
    }
    ;
    var up = class extends tp {
        constructor(a, b) {
            var c = Hl
              , d = Fl;
            var e = Q(Hj) ? [`https:${`//${pp()}${".safeframe.googlesyndication.com"}`}`] : [];
            super(a, b, c, d, {}, e)
        }
    }
    ;
    function vp(a) {
        const b = c => {
            try {
                const e = JSON.parse(c.data);
                if (e.type === "floating" && e.message === "loaded") {
                    var d = a.g;
                    d.ub = !0;
                    const f = d.g;
                    d.Ia && d.ub && f?.setAttribute("data-anchor-status", "ready-to-display");
                    wp(a.g, !0);
                    a.j.removeEventListener("message", b)
                }
            } catch {}
        }
        ;
        a.j.addEventListener("message", b);
        W(a, () => {
            a.j.removeEventListener("message", b)
        }
        )
    }
    var Ep = class extends up {
        constructor(a, b, c, d=!1) {
            super(a, b.l);
            a = this.g = b;
            if ((b = a.g) && !a.A) {
                for (var e in xp)
                    !xp.hasOwnProperty(e) || e in c || (c[e] = xp[e]);
                a.nc = c.use_manual_view === "true" || a.B === "top" || !!X(a.j).wasReactiveAdConfigReceived[2];
                a.mc = c.use_important === "true";
                if (e = c.af_l)
                    a.ta = e === "true";
                a.X = c.wait_for_scroll === "true" || a.B === "top";
                a.Vc = a.X && (c.tsec === "true" || a.B === "top");
                a.wb = parseInt(c.lims, 10);
                yp(a, c);
                a.A = zp(a, c);
                c = a.G.height + 5;
                a.B === "bottom" && Ap(a.j) && (c += 20);
                a.Ba = new ce(a.G.width,c);
                a.sb = a.O >= a.Yc;
                c = a.g;
                e = a.A && Bp(a.A);
                c && e && (a.B === "top" ? c.appendChild(e) : c.insertBefore(e, c.firstChild));
                Cp(a);
                a.ga = !0;
                b.setAttribute("data-anchor-status", "ready-to-display")
            }
            d ? (d = this.g,
            d.Ia = !0,
            d.g?.removeAttribute("data-anchor-status"),
            vp(this)) : wp(this.g, !0)
        }
        W(a) {
            a.dismiss = ed( () => {
                var b = this.g;
                b.A && Dp(b.A, !0)
            }
            )
        }
    }
    ;
    function Fp({Wc: a, xc: b, Mc: c, Xc: d, yc: e, Nc: f}) {
        const g = [];
        for (let n = 0; n < f; n++)
            for (let p = 0; p < c; p++) {
                var h = p
                  , k = c - 1
                  , m = n
                  , l = f - 1;
                g.push({
                    x: a + (k === 0 ? 0 : h / k) * (b - a),
                    y: d + (l === 0 ? 0 : m / l) * (e - d)
                })
            }
        return g
    }
    function Gp(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    }
    ;function Hp(a, b) {
        a: {
            for (const e of b) {
                var c;
                b = a;
                var d = Gp(b.V.document, e);
                if (d) {
                    if (!(c = Ip(b, d, e))) {
                        c: {
                            c = b.V.document;
                            for (d = d.offsetParent; d && d !== c.body; d = d.offsetParent) {
                                const f = Ip(b, d, e);
                                if (f) {
                                    b = f;
                                    break c
                                }
                            }
                            b = null
                        }
                        c = b
                    }
                    b = c || null
                } else
                    b = null;
                b = !b || b.hasAttribute("google-allow-overlap") ? null : b;
                if (b) {
                    a = b;
                    break a
                }
            }
            a = null
        }
        return a != null
    }
    function Ip(a, b, c) {
        if (se(b, "position") !== "fixed")
            return null;
        var d = b.getAttribute("class") === "GoogleActiveViewInnerContainer" || ye(b).width <= 1 && ye(b).height <= 1 || a.g.wc && !a.g.wc(b) ? !0 : !1;
        a.g.Ac && a.g.Ac(b, c, d);
        return d ? null : b
    }
    var Jp = class {
        constructor(a, b={}) {
            this.V = a;
            this.g = b
        }
    }
    ;
    function Kp(a, b) {
        return Hp(Lp(a, c => c.getAttribute("google-anchor-overlappable") !== "true"), b)
    }
    function Lp(a, b) {
        return new Jp(a,{
            Ac: void 0,
            wc: b
        })
    }
    function Ap(a) {
        const b = a.screen.height === 812 && a.screen.width === 375 || a.screen.width === 812 && a.screen.height === 375 || a.screen.width === 414 && a.screen.height === 896 || a.screen.width === 896 && a.screen.height === 414;
        return (a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) != null && b
    }
    const Mp = 90 * 1.38;
    var Np = {
        oc: !1,
        Lc: !1,
        Bc: !1,
        Yb: void 0,
        Cb: !1
    };
    var Qp = class {
        constructor(a, b) {
            this.l = a;
            this.j = !1;
            this.g = b.aa(264, c => {
                this.j && (Op || (c = Date.now()),
                this.l(c),
                Op ? Pp.call(w, this.g) : w.setTimeout(this.g, 17))
            }
            )
        }
        start() {
            this.j || (this.j = !0,
            Op ? Pp.call(w, this.g) : this.g(0))
        }
        stop() {
            this.j = !1
        }
    }
      , Pp = w.requestAnimationFrame || w.webkitRequestAnimationFrame
      , Op = !!Pp && !/'iPhone'/.test(w.navigator.userAgent);
    function Rp(a) {
        return a * a * a
    }
    function Sp(a) {
        a = 1 - a;
        return 1 - a * a * a
    }
    function Tp(a) {
        a.j = !1;
        a.A.start()
    }
    var Up = class {
        constructor(a, b, c, d) {
            this.start = a;
            this.end = b;
            this.time = c;
            this.progress = 0;
            this.startTime = null;
            this.j = !1;
            this.g = [];
            this.l = null;
            this.A = new Qp(e => {
                if (this.j)
                    this.A.stop();
                else {
                    this.startTime === null && (this.startTime = e);
                    this.progress = (e - this.startTime) / this.time;
                    this.progress >= 1 && (this.progress = 1);
                    e = this.l ? this.l(this.progress) : this.progress;
                    this.g = [];
                    for (let f = 0; f < this.start.length; f++)
                        this.g.push((this.end[f] - this.start[f]) * e + this.start[f]);
                    this.L();
                    this.progress === 1 && (this.A.stop(),
                    this.C())
                }
            }
            ,d)
        }
        C() {}
        L() {}
        stop() {
            this.j = !0
        }
        reset(a, b, c) {
            this.startTime = null;
            this.start = a;
            this.end = b;
            this.time = c;
            this.progress = 0
        }
    }
    ;
    function Y(a) {
        return `${a}px`
    }
    ;var Vp = class extends Up {
        constructor(a, b, c, d, e, f, g=null, h=null, k=!1) {
            super([b], [c], d, f);
            this.element = a;
            this.H = e;
            this.G = g;
            this.l = h;
            this.B = k && d === 0
        }
        L() {
            this.B && G(this.element, "display", "none");
            const a = {};
            a[this.H] = Y(this.g[0]);
            G(this.element, a)
        }
        C() {
            this.B && G(this.element, "display", "block");
            this.G && this.G()
        }
    }
    ;
    function Wp(a) {
        a.element && K(a.element, a.event, a.handler, Be)
    }
    class Xp extends U {
        constructor(a, b, c) {
            super();
            this.element = a;
            this.event = b;
            this.handler = this.handler = c;
            I(this.element, this.event, this.handler, Be);
            W(this, () => void Wp(this))
        }
    }
    class Yp {
        constructor(a) {
            this.g = a;
            this.history = [];
            this.index = 0;
            this.reset()
        }
        add(a) {
            const b = Date.now();
            this.history.push({
                time: b,
                coords: a
            });
            for (a = this.index; a < this.history.length; ++a)
                if (b - this.history[a].time >= this.g)
                    delete this.history[a];
                else
                    break;
            this.index = a;
            a >= this.history.length && this.reset()
        }
        reset() {
            this.history = [];
            this.index = 0
        }
    }
    function Zp(a, b) {
        a.B && a.stop();
        a.B = !0;
        a.l = a.M();
        a.j = $p(b);
        a.g = a.j;
        a.A = new Yp(a.ma);
        a.A.add(a.j);
        a.H = new Xp(a.document,"mousemove",c => {
            aq(a, c)
        }
        );
        V(a, a.H);
        a.K = new Xp(a.document,"touchmove",c => {
            aq(a, c)
        }
        );
        V(a, a.K);
        a.G = new Xp(a.document,"mouseup",c => {
            bq(a, c)
        }
        );
        V(a, a.G);
        a.J = new Xp(a.document,"touchend",c => {
            bq(a, c)
        }
        );
        V(a, a.J)
    }
    function $p(a) {
        a = a.touches && a.touches[0] || a;
        return new $d(a.clientX,a.clientY)
    }
    function aq(a, b) {
        if (a.B)
            if (b.preventDefault(),
            a.g = $p(b),
            a.A.add(a.g),
            a.C)
                a.U();
            else {
                var c = a.j
                  , d = a.g;
                b = c.x - d.x;
                c = c.y - d.y;
                Math.sqrt(b * b + c * c) >= 10 && (a.U(),
                a.C = !0)
            }
    }
    function bq(a, b) {
        a.C ? (b.preventDefault(),
        a.g = $p(b),
        a.X()) : a.R = !0;
        a.stop()
    }
    var cq = class extends U {
        constructor(a, b, c=b, d=100) {
            super();
            this.document = a;
            this.target = b;
            this.handle = c;
            this.ma = d;
            this.C = this.B = this.R = !1;
            this.A = this.g = this.j = this.l = this.J = this.G = this.K = this.H = null;
            this.ta = new Xp(this.handle,"mousedown",e => {
                e.button === 0 && Zp(this, e)
            }
            );
            V(this, this.ta);
            this.ua = new Xp(this.handle,"touchstart",e => {
                Zp(this, e)
            }
            );
            V(this, this.ua);
            this.qa = new Xp(this.handle,"click",e => {
                this.R ? (this.onClick(),
                this.R = !1) : e.stopPropagation()
            }
            );
            V(this, this.qa)
        }
        U() {
            if (this.l && this.j && this.g) {
                var a = this.l
                  , b = be(this.g, this.j);
                var c = new $d(a.x + b.x,a.y + b.y);
                a = this.target;
                c instanceof $d ? (b = c.x,
                c = c.y) : (b = c,
                c = void 0);
                a.style.left = xe(b, !1);
                a.style.top = xe(c, !1)
            }
        }
        X() {}
        onClick() {}
        M() {
            var a = this.target
              , b = a.parentElement || null;
            var c = ve(a);
            b = ve(b);
            c = new $d(c.x - b.x,c.y - b.y);
            a = Ae(a, "margin");
            return be(c, new $d(a.left,a.top))
        }
        stop() {
            this.C = this.B = !1;
            this.A = this.g = this.j = this.l = null;
            this.H && Wp(this.H);
            this.K && Wp(this.K);
            this.G && Wp(this.G);
            this.J && Wp(this.J)
        }
    }
    ;
    function dq(a) {
        const b = eq(a);
        Ea(a.floatingAdsStacking.maxZIndexListeners, c => c(b))
    }
    function eq(a) {
        a = Yc(a.floatingAdsStacking.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    function fq(a, b) {
        a.floatingAdsStacking.maxZIndexListeners.push(b);
        b(eq(a))
    }
    var gq = class {
        constructor(a) {
            this.floatingAdsStacking = X(a).floatingAdsStacking
        }
    }
      , hq = class {
        constructor(a) {
            this.controller = a;
            this.g = null
        }
    }
    ;
    function iq(a, b) {
        var c = a.ownerDocument;
        const d = c.createElementNS("http://www.w3.org/2000/svg", "line");
        d.setAttribute("x1", b ? "32" : "22");
        d.setAttribute("y1", "18");
        d.setAttribute("x2", b ? "38" : "28");
        d.setAttribute("y2", "12");
        a.appendChild(d);
        c = c.createElementNS("http://www.w3.org/2000/svg", "line");
        c.setAttribute("x1", b ? "38" : "28");
        c.setAttribute("y1", "12");
        c.setAttribute("x2", b ? "44" : "34");
        c.setAttribute("y2", "18");
        a.appendChild(c)
    }
    function jq(a, b) {
        var c = a.ownerDocument;
        const d = c.createElementNS("http://www.w3.org/2000/svg", "line");
        d.setAttribute("x1", b ? "32" : "22");
        d.setAttribute("y1", "12");
        d.setAttribute("x2", b ? "38" : "28");
        d.setAttribute("y2", "18");
        a.appendChild(d);
        c = c.createElementNS("http://www.w3.org/2000/svg", "line");
        c.setAttribute("x1", b ? "38" : "28");
        c.setAttribute("y1", "18");
        c.setAttribute("x2", b ? "44" : "34");
        c.setAttribute("y2", "12");
        a.appendChild(c)
    }
    function Dp(a, b) {
        if (!a.B && a.j) {
            var c = parseInt(a.j.style[a.g], 10)
              , d = -(a.A === 4 ? a.l.maxHeight + 5 : a.G.height) - (b ? 30 : 0)
              , e = (c - d) / kq(a);
            a.g === "bottom" && Ap(a.V) && a.N.za(405, () => {
                lq(a, "21px", e, "ease-in")
            }
            );
            b || mq(a, !0);
            c === d ? b || (a.A = 0) : a.ua() ? (a.B = !0,
            Tp(new Vp(a.j,c,d,e,a.g,a.N, () => {
                a.B = !1;
                b ? a.Ba() : (a.A = 0,
                mq(a, !0));
                a.j.setAttribute("data-anchor-status", "dismissed")
            }
            ,Rp,a.K.Cb))) : mq(a, !1)
        }
    }
    function nq(a, b) {
        vg(b);
        const c = {
            "background-color": "#FAFAFA",
            display: "block",
            position: "relative",
            "z-index": "1",
            height: Y(5),
            "box-shadow": oq(a)
        };
        pq(a) && Object.assign(c, a.g === "bottom" ? {
            "border-top-left-radius": Y(5),
            "border-top-right-radius": Y(5)
        } : {
            "border-bottom-left-radius": Y(5),
            "border-bottom-right-radius": Y(5)
        });
        F(b, c);
        a.g === "top" && F(a.C ?? b, {
            position: "absolute",
            top: Y(a.l ? a.l.maxHeight + 5 : a.G.height),
            width: "100%"
        });
        if (a.R) {
            const d = Kd("SPAN", a.V.document);
            d.appendChild(qq(a));
            const e = f => {
                f.target === d && (f.preventDefault && f.preventDefault(),
                f.stopImmediatePropagation && f.stopImmediatePropagation(),
                f.stopPropagation && f.stopPropagation())
            }
            ;
            I(d, "click", e);
            W(a, () => {
                K(d, "click", e)
            }
            );
            rq(a, d);
            b.className = "ee";
            b.appendChild(d)
        }
    }
    function pq(a) {
        return a.K.Yb ?? (!gd() && !hd())
    }
    function oq(a) {
        return a.g === "top" ? pq(a) ? "rgba(0, 0, 0, 0.5) 0px 4px 12px -4px, rgba(0, 0, 0, 0.3) 0px -4px 8px -3px" : "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : pq(a) ? "rgba(0, 0, 0, 0.5) 0px -4px 12px -4px, rgba(0, 0, 0, 0.3) 0px 4px 8px -3px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
    }
    function sq(a, b) {
        a.g === "top" && F(a.C ?? a.J, {
            top: Y(b)
        })
    }
    function qq(a) {
        var b = "";
        let c = "";
        var d = "";
        let e = ""
          , f = () => {}
        ;
        switch (a.g) {
        case "top":
            b = "dropShadowBottom";
            c = pq(a) ? "M10,4 L10,22 A6,6 0 0,0 16,28 L60,28 A6,6 0 0,0 66,22 L66,10 66,4 Z" : "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";
            d = "0";
            e = "up";
            f = p => {
                iq(p, pq(a))
            }
            ;
            break;
        case "bottom":
            b = "dropShadowTop",
            c = pq(a) ? "M10,26 L10,6 A6,6 0 0,1 16,1 L60,1 A6,6 0 0,1 66,6 L66,20 66,26 Z" : "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z",
            d = "25",
            e = "down",
            f = p => {
                jq(p, pq(a))
            }
        }
        const g = a.V.document
          , h = g.createElementNS("http://www.w3.org/2000/svg", "svg");
        h.style.setProperty("margin", "0 0 0 0px", "important");
        h.style.setProperty("position", "absolute", "important");
        h.style.setProperty(a.g, "0", "important");
        h.style.setProperty("left", "0%", "important");
        h.style.setProperty("display", "block", "important");
        h.style.setProperty("width", "80px", "important");
        h.style.setProperty("height", "30px", "important");
        h.style.setProperty("transform", "none", "important");
        h.style.setProperty("pointer-events", "initial", "important");
        var k = g.createElementNS("http://www.w3.org/2000/svg", "defs");
        const m = g.createElementNS("http://www.w3.org/2000/svg", "filter");
        m.setAttribute("id", b);
        m.setAttribute("filterUnits", "userSpaceOnUse");
        m.setAttribute("color-interpolation-filters", "sRGB");
        var l = g.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
        l.setAttribute("in", "SourceAlpha");
        l.setAttribute("result", "TransferredAlpha");
        var n = g.createElementNS("http://www.w3.org/2000/svg", "feFuncR");
        n.setAttribute("type", "discrete");
        n.setAttribute("tableValues", "0.5");
        l.appendChild(n);
        n = g.createElementNS("http://www.w3.org/2000/svg", "feFuncG");
        n.setAttribute("type", "discrete");
        n.setAttribute("tableValues", "0.5");
        l.appendChild(n);
        n = g.createElementNS("http://www.w3.org/2000/svg", "feFuncB");
        n.setAttribute("type", "discrete");
        n.setAttribute("tableValues", "0.5");
        l.appendChild(n);
        m.appendChild(l);
        l = g.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        l.setAttribute("in", "TransferredAlpha");
        l.setAttribute("stdDeviation", "2");
        m.appendChild(l);
        l = g.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        l.setAttribute("dx", "0");
        l.setAttribute("dy", "0");
        l.setAttribute("result", "offsetblur");
        m.appendChild(l);
        l = g.createElementNS("http://www.w3.org/2000/svg", "feMerge");
        l.appendChild(g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"));
        n = g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
        n.setAttribute("in", "SourceGraphic");
        l.appendChild(n);
        m.appendChild(l);
        k.appendChild(m);
        h.appendChild(k);
        k = g.createElementNS("http://www.w3.org/2000/svg", "path");
        k.setAttribute("d", c);
        k.setAttribute("stroke", "#FAFAFA");
        k.setAttribute("stroke-width", "1");
        k.setAttribute("fill", "#FAFAFA");
        k.style.setProperty("filter", `url(#${b})`);
        h.appendChild(k);
        b = g.createElementNS("http://www.w3.org/2000/svg", "rect");
        b.setAttribute("x", "0");
        b.setAttribute("y", d);
        b.setAttribute("width", "80");
        b.setAttribute("height", "5");
        b.style.setProperty("fill", "#FAFAFA");
        h.appendChild(b);
        d = g.createElementNS("http://www.w3.org/2000/svg", "g");
        d.setAttribute("class", e);
        d.setAttribute("stroke", "#616161");
        d.setAttribute("stroke-width", "2px");
        d.setAttribute("stroke-linecap", "square");
        f(d, pq(a));
        h.appendChild(d);
        return h
    }
    function rq(a, b) {
        const c = {
            display: "block",
            width: "80px",
            height: "45px",
            [a.g]: "0",
            left: "0%",
            marginLeft: "0px",
            "pointer-events": "none"
        };
        pq(a) && (c.position = "absolute",
        c.left = "50%",
        c.transform = "translateX(-50%)");
        a = b.getElementsByTagName("svg")[0];
        F(b, c);
        Td(a)
    }
    function tq(a, b=a.X) {
        switch (a.A) {
        case 1:
            a.M();
            break;
        case 2:
            uq(a);
            break;
        case 0:
            a.l ? uq(a) : a.M();
            break;
        case 3:
            Dp(a, b);
            break;
        case 4:
            a.M()
        }
    }
    function Bp(a) {
        return a.C ?? a.J
    }
    function mq(a, b) {
        if (a.R) {
            var c = a.J.getElementsByTagName("svg")[0].getElementsByTagName("g")[0];
            let d;
            for (; d = c.firstChild; )
                c.removeChild(d);
            switch (a.g) {
            case "top":
                (b ? jq : iq)(c, pq(a));
                break;
            case "bottom":
                (b ? iq : jq)(c, pq(a))
            }
        } else
            (a = a.J.firstElementChild) && he(a)
    }
    function vq(a, b, c, d) {
        b = {
            i: b,
            dc: a.A === 0 ? "1" : "0",
            fdc: c ? "1" : "0",
            ds: a.X ? "1" : "0",
            expId: a.Ia,
            sc: a.ma ? "1" : "0",
            off: d,
            vw: L(a.V),
            req: a.H.src,
            tp: a.g,
            h: a.G.height,
            w: a.G.width,
            qemId: a.Ha
        };
        kf(a.ca, "flgr", b, !0, 1)
    }
    function uq(a) {
        if (!a.B) {
            wq(a);
            var b = parseInt(a.j.style[a.g], 10)
              , c = () => {
                a.B = !1;
                a.A = 4;
                xq(a);
                a.j.setAttribute("data-anchor-status", "displayed");
                a.j.setAttribute("data-anchor-shown", "true");
                mq(a, !1)
            }
            ;
            if (b) {
                a.B = !0;
                const d = -b / kq(a);
                yq(a, d);
                mq(a, !1);
                b = new Vp(a.j,b,0,d,a.g,a.N,c,Sp,!0);
                a.ia();
                Tp(b)
            } else
                c()
        }
    }
    function wq(a) {
        const b = a.l.maxHeight
          , c = a.l.maxHeight + 5;
        a.A !== 4 && (a.j.style[a.g] = `-${b - (parseInt(a.j.style.height, 10) + parseInt(a.j.style[a.g], 10))}px`);
        a.j.style.height = `${c}px`;
        a.H.parentElement.style.height = `${b}px`;
        a.H.style.height = `${b}px`;
        a.H.style.maxHeight = "none";
        a.H.height = "100%";
        sq(a, c);
        a.U?.la(c)
    }
    function lq(a, b, c, d) {
        G(a.H, {
            transition: `${c / 1E3}s`,
            "transition-timing-function": d,
            "margin-top": b
        })
    }
    function yq(a, b) {
        a.g === "bottom" && Ap(a.V) && a.N.za(404, () => {
            lq(a, "0px", b, "ease-out")
        }
        )
    }
    function xq(a) {
        a.na();
        a.na = () => {}
    }
    function kq(a) {
        return a.G.height >= Math.floor(a.V.document.documentElement.clientHeight * .3) ? Infinity : a.l ? a.l.bb ? a.l.bb : Infinity : .1
    }
    function zq(a, b) {
        if (a.g !== "bottom" && a.g !== "top")
            throw Error("unsupported reactive type");
        const c = f => {
            a.onClick(f)
        }
        ;
        I(a.J, "click", c);
        W(a, () => {
            K(a.J, "click", c)
        }
        );
        a.C && (I(a.C, "click", c),
        W(a, () => {
            a.C && K(a.C, "click", c)
        }
        ));
        G(b, {
            opacity: 1
        });
        var d = a.V.document;
        if (d) {
            a.j = b;
            var e = a.l ? a.l.maxHeight + 5 : a.G.height;
            a.Ra && (a.U = new (a.g === "top" ? Aq : Bq)(a,d,e,b,a.J),
            V(a, a.U));
            d = {
                position: "fixed",
                left: Y(0)
            };
            pq(a) && (d.left = "50%",
            d.transform = "translateX(-50%)",
            d["box-shadow"] = oq(a),
            d["border-radius"] = "5px");
            d[a.g] = Y(-e - 30);
            G(b, d);
            F(b, {
                overflow: "visible",
                background: "#FAFAFA"
            });
            fq(a.ta, f => {
                const g = a.qa === null ? 2147483647 : a.qa;
                G(b, {
                    zIndex: f === null ? g : Math.min(f, g)
                })
            }
            );
            tq(a)
        }
    }
    var Cq = class extends U {
        constructor(a, b, c, d, e, f= () => {}
        , g= () => {}
        , h, k, m, l, n, p=Np, t=!1) {
            super();
            this.config = a;
            this.V = b;
            this.H = c;
            this.G = d;
            this.g = e;
            this.Ba = f;
            this.na = g;
            this.N = h;
            this.ca = k;
            this.ua = m;
            this.ia = l;
            this.l = n;
            this.K = p;
            this.la = t;
            this.C = null;
            this.B = !1;
            this.W = 0;
            this.ga = !1;
            this.j = this.U = null;
            this.A = n ? 2 : 1;
            W(this, () => {
                Dp(this, !0)
            }
            );
            this.J = Kd("INS", b.document);
            typeof HTMLElement.prototype.attachShadow !== "function" || this.N.za(1013, () => {
                this.C = Kd("DIV", b.document);
                this.C.className = "grippy-host";
                this.C.attachShadow({
                    mode: "closed"
                }).appendChild(this.J);
                W(this, () => {
                    this.C = null
                }
                );
                return !0
            }
            ) || (this.C = null);
            this.O = b.innerHeight;
            this.ma = this.config.scroll_detached === "true";
            this.X = this.config.dismissable === "true";
            this.Ra = (this.R = !(this.K.Lc || this.la) || !!this.l) && (this.config.draggable === "true" || this.g !== "top");
            this.Ia = this.config.expId || "";
            this.Ha = this.config.qemId || "";
            a = parseInt(this.config.z_index_override, 10);
            this.qa = isNaN(a) ? null : a;
            this.ta = new gq(b);
            !this.X && w.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval( () => {
                const q = this.V.innerHeight;
                if (Math.abs(q - 460) < 2 || Math.abs(q - 529) < 2)
                    q < this.O && Math.abs(sg(this.V) - this.W - 68) < 2 && (this.ga = !0,
                    this.A === 0 && tq(this)),
                    this.O = q
            }
            , 300);
            nq(this, this.J)
        }
        onClick(a) {
            this.R && (a.preventDefault(),
            this.B || (this.ga = !0,
            tq(this),
            vq(this, "c", this.A !== 0, 0)))
        }
        M() {
            if (!this.B) {
                var a = this.l && parseInt(this.j.style.height, 10) > this.G.height;
                (this.K.Lc || this.la) && a && (this.R = !1);
                var b = parseInt(this.j.style[this.g], 10);
                if (b || a) {
                    var c = () => {
                        this.A = 3;
                        if (a) {
                            const f = this.G.height;
                            this.j.style[this.g] = "0";
                            this.j.style.height = `${f}px`;
                            this.H.parentElement.style.height = `${f}px`;
                            this.H.height = `${f}`;
                            this.H.style.height = `${f}px`;
                            this.H.style.maxHeight = "30vh";
                            sq(this, f);
                            this.U?.la(f)
                        }
                        this.B = !1;
                        xq(this);
                        this.j.setAttribute("data-anchor-status", "displayed");
                        this.j.setAttribute("data-anchor-shown", "true");
                        mq(this, !1)
                    }
                    ;
                    this.B = !0;
                    if (b && !a) {
                        var d = -b / kq(this);
                        yq(this, d);
                        mq(this, !1);
                        b = new Vp(this.j,b,0,d,this.g,this.N,c,Sp,this.K.Cb);
                        this.ia();
                        Tp(b)
                    } else if (a) {
                        var e = this.l.maxHeight + 5;
                        d = this.G.height - e;
                        e = (e + b > this.G.height ? -1 : 1) * (d - b) / kq(this);
                        yq(this, e);
                        b === d ? c() : (b = new Vp(this.j,b,d,e,this.g,this.N,c,Sp,this.K.Cb),
                        this.ia(),
                        Tp(b))
                    }
                }
            }
        }
        Ta() {
            return this.A === 4
        }
    }
    ;
    class Dq extends cq {
        constructor(a, b, c, d, e) {
            super(b, d, e);
            this.na = a;
            this.W = c
        }
        la(a) {
            this.W = a
        }
        X() {
            var a = this.na;
            if (!a.B) {
                const b = parseInt(a.j.style[a.g], 10)
                  , c = b + parseInt(a.j.style.height, 10)
                  , d = a.G.height / 2;
                c >= (a.l ? (a.l.maxHeight + 5) / 2 : Number.MAX_SAFE_INTEGER) ? (uq(a),
                vq(a, "d", !1, b)) : c >= d ? (a.M(),
                vq(a, "d", !1, b)) : (Dp(a, a.X),
                vq(a, "d", !0, b))
            }
        }
        U() {
            if (this.l !== null && this.j !== null && this.g !== null) {
                var a = this.ga(this.l.y, be(this.g, this.j).y);
                a > 0 && (a = 0);
                a < -this.W && (a = -this.W);
                var b = {};
                b[this.ia()] = Y(a);
                G(this.target, b)
            }
        }
    }
    class Aq extends Dq {
        M() {
            return new $d(0,parseInt(this.target.style.top, 10))
        }
        ga(a, b) {
            return b - a
        }
        ia() {
            return "top"
        }
    }
    class Bq extends Dq {
        M() {
            return new $d(0,parseInt(this.target.style.bottom, 10))
        }
        ga(a, b) {
            return a - b
        }
        ia() {
            return "bottom"
        }
    }
    ;function Eq(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            const b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return b === "__storage_test__"
        } catch (b) {
            return !1
        }
    }
    function Fq(a, b=[]) {
        const c = Date.now();
        return Fa(b, d => c - d < a * 1E3)
    }
    function Gq(a, b, c) {
        try {
            const d = a.getItem(c);
            if (!d)
                return [];
            let e;
            try {
                e = JSON.parse(d)
            } catch (f) {}
            if (!Array.isArray(e) || Ha(e, f => !Number.isInteger(f)))
                return a.removeItem(c),
                [];
            e = Fq(b, e);
            e.length || a?.removeItem(c);
            return e
        } catch (d) {
            return null
        }
    }
    function Hq(a, b, c) {
        return b <= 0 || a == null || !Eq(a) ? null : Gq(a, b, c)
    }
    ;function Iq(a, b, c, d=!1) {
        if (!a.la) {
            a.la = [];
            for (var e = a.l.parentElement; e; ) {
                a.la.push(e);
                if (a.Ha(e))
                    break;
                e = e.parentNode && e.parentNode.nodeType === 1 ? e.parentNode : null
            }
        }
        e = a.la.slice();
        !c && a.Ha(e[e.length - 1]) && e.pop();
        let f;
        if (d)
            for (c = e.length - 1; c >= 0; --c)
                (f = e[c]) && b.call(a, f, c, e);
        else
            for (c = 0; c < e.length; ++c)
                (f = e[c]) && b.call(a, f, c, e)
    }
    var Jq = class extends U {
        constructor(a, b, c) {
            super();
            this.l = a;
            this.j = b;
            this.g = c;
            this.la = null;
            W(this, () => this.la = null)
        }
        Ha(a) {
            return this.g === a
        }
    }
    ;
    function Kq(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5,
            "": 0
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] ?? 0
    }
    ;function Lq(a, b, c) {
        b !== null && Od(a.getAttribute("width")) !== null && a.setAttribute("width", String(b));
        c !== null && Od(a.getAttribute("height")) !== null && a.setAttribute("height", String(c));
        b !== null && (a.style.width = Y(b));
        c !== null && (a.style.height = Y(c))
    }
    ;function wp(a, b=!1) {
        a.qb || Z(a, b, 9);
        a.qb = !0;
        if (a.K || !Mq(a, b) || !a.qa && a.ta)
            !a.qa && a.ta && Z(a, b, 12);
        else {
            var c = a.g;
            c ? (Nq(a),
            Iq(a, d => {
                vg(d)
            }
            , !0),
            zq(a.A, c),
            Oq(a),
            Z(a, !0, 14),
            a.K = !0,
            (b = a.l.contentWindow) && Ro(b, "ig", {
                rr: "vis-aa"
            }, "*", 2),
            Pq(a),
            Qq(a, a.ia.oc),
            Rq(a),
            Sq(a)) : Z(a, b, 13)
        }
    }
    function Tq(a) {
        Uq(a);
        const b = a.j.innerWidth;
        a = ye(a.l).height || +a.l.height || 0;
        return new ce(b,a)
    }
    function Vq(a) {
        if (a.ma) {
            var b = a.g;
            b && (b.style.display = "none");
            Wq(a, a.na, !0, !0);
            a.ma = !1
        }
    }
    function Xq(a) {
        a.U = "touchcancel";
        w.setTimeout(a.N.aa(274, () => {
            a.U === "touchcancel" && (a.M = 0,
            a.W = !1,
            Yq(a))
        }
        ), 1E3)
    }
    function Zq(a, b) {
        if (b && b.touches) {
            a.U = "touchend";
            var c = b.touches.length;
            c < 2 ? w.setTimeout(a.N.aa(256, () => {
                a.U === "touchend" && (a.M = c,
                a.W = !1,
                Yq(a))
            }
            ), 1E3) : (a.M = c,
            Yq(a))
        }
    }
    function $q(a) {
        const b = a.j;
        K(b, "orientationchange", a.Pc);
        K(b, "resize", a.Rc);
        K(b, "scroll", a.cd);
        K(b, "touchcancel", a.dd);
        K(b, "touchend", a.ed);
        K(b, "touchmove", a.fd);
        K(b, "touchstart", a.gd)
    }
    function Cp(a) {
        const b = a.j;
        I(b, "orientationchange", a.Pc);
        I(b, "resize", a.Rc);
        I(b, "scroll", a.cd);
        I(b, "touchcancel", a.dd);
        I(b, "touchend", a.ed);
        I(b, "touchmove", a.fd);
        I(b, "touchstart", a.gd);
        W(a, () => {
            $q(a)
        }
        )
    }
    function yp(a, b) {
        const c = parseInt(b.ht, 10)
          , d = c > 0 ? c : null;
        b = parseInt(b.wd, 10);
        const e = b > 0 ? b : null;
        d !== null && (a.G.height = d);
        e !== null && (a.G.width = e);
        Iq(a, f => {
            Lq(f, e, d)
        }
        , !1, !0);
        Lq(a.l, e, d)
    }
    function zp(a, b) {
        b = new Cq(b,a.j,a.l,a.G,a.B, () => {
            if (!a.ua) {
                a.ua = !0;
                $q(a);
                var c = a.g;
                he(c);
                Wq(a, a.na, !0, !0);
                c && (c.style.display = "none")
            }
        }
        , () => void ar(a),a.N,a.ca, () => {
            a.R || (a.R = !0,
            br(a, null));
            return !0
        }
        , () => {
            a.R && (a.R = !1,
            br(a, null));
            return !0
        }
        ,a.C,a.ia,!1);
        V(a, b);
        return b
    }
    function ar(a) {
        a.nc && !a.bd && (a.bd = !0,
        a.N.za(257, () => {
            const b = {
                msg_type: "manual-send-view"
            }
              , c = a.l.contentWindow;
            c && c.postMessage(JSON.stringify(b), "*")
        }
        ))
    }
    function Z(a, b, c) {
        b && !a.K && a.Ra && a.Ra.Zb({
            D: c
        })
    }
    function Mq(a, b=!1) {
        Z(a, b, 20);
        if (!a.pb())
            return Z(a, b, 21),
            !1;
        if (a.Ia && !a.ub)
            return Z(a, b, 22),
            !1;
        if (!a.K && a.X) {
            a.wb && setTimeout( () => {
                if (!a.K) {
                    a.X = !1;
                    Z(a, b, 24);
                    wp(a, !0);
                    const d = oe(a.H);
                    d.top = cr(a, a.R);
                    Wq(a, d, !0)
                }
            }
            , a.wb);
            a.Vc && (a.J += Math.max(sg(a.j) - a.Ta, 0));
            let c = !1;
            switch (a.B) {
            case "bottom":
                return (c = a.J >= a.hd || a.sb) || Z(a, b, 27),
                c;
            case "top":
                return (c = a.J > cr(a)) || Z(a, b, 29),
                c;
            default:
                return !0
            }
        }
        Z(a, b, 31);
        return !0
    }
    function Nq(a) {
        const b = a.g;
        if (b && a.l.parentElement) {
            we(b, a.Ba);
            var c = pg(a.j).scrollWidth
              , d = a.j.innerWidth;
            b.style.width = a.ia.Yb ?? (!gd() && !hd()) ? "auto" : c > d ? Y(d) : "100%";
            dr(a);
            a.C && F(a.l.parentElement, {
                height: `${a.C.maxHeight}px`,
                display: "inline-block"
            })
        }
    }
    function Oq(a) {
        const b = a.g;
        if (b) {
            var c = a.A
              , d = c.V
              , e = sg(d);
            if (!(Math.abs(e - c.W) < 10)) {
                var f = e < 10;
                d = e + 10 + pg(d).clientHeight > qg(d);
                f = f || d;
                c.ma || c.ga || c.B || (c.A === 0 || f ? c.A === 0 && f && tq(c) : tq(c, !1));
                c.W = e
            }
            a.ma || (c = Wq,
            Uq(a),
            e = Ae(a.j.document.body, "padding"),
            a.B === "bottom" && (e.bottom += a.Ba.height + 25),
            c(a, e),
            b.style.display = "block",
            a.ma = !0)
        }
    }
    function Pq(a) {
        var b = a.G.height >= Math.floor(a.j.document.documentElement.clientHeight * .5);
        const c = a.ia.Bc && a.G.height >= Math.floor(a.j.document.documentElement.clientHeight * .3);
        if (a.C || b || c)
            if (b = Hq(a.mb, 604800, "__lsa__"))
                b.push(Date.now()),
                a.mb?.setItem("__lsa__", JSON.stringify(b))
    }
    function Qq(a, b) {
        a.C && (a.l.onload = () => {
            if (a.C) {
                var c = a.l
                  , d = c.parentElement
                  , e = d.style.display;
                F(d, {
                    height: `${a.C.maxHeight + 1}px`,
                    display: "inline-block"
                });
                b && F(c, {
                    height: `${a.C.maxHeight + 1}px`
                });
                setTimeout( () => {
                    a.C && (F(d, {
                        height: `${a.C.maxHeight}px`,
                        display: e
                    }),
                    b && F(c, {
                        height: `${a.C.maxHeight}px`
                    }))
                }
                , 100)
            }
        }
        )
    }
    function Rq(a) {
        if (a.C) {
            var b = Kd("div");
            b.id = "click-protector";
            b.style.position = "relative";
            b.style.width = "65px";
            b.style.height = "25px";
            b.style.left = "0";
            b.style.top = a.B === "bottom" ? "-100%" : "-25px";
            a.g.appendChild(b);
            b.addEventListener("click", c => {
                c.stopPropagation();
                c.preventDefault()
            }
            )
        }
    }
    function Sq(a) {
        if (a.C)
            var b = 100
              , c = setInterval( () => {
                a.j.document.getElementsByClassName("fc-message-root").length ? (a.A?.Ta() && (a.A?.M(),
                a.mb?.removeItem("__lsa__")),
                a.Ra?.Zb({
                    D: 32
                }),
                clearInterval(c)) : --b <= 0 && clearInterval(c)
            }
            , 100)
    }
    function Wq(a, b, c=!0, d=!1) {
        const e = a.H.top - b.top
          , f = sg(a.j);
        f < e && !d || (d = a.j.document.body,
        d.style.paddingTop = Y(b.top),
        d.style.paddingRight = Y(b.right),
        d.style.paddingBottom = Y(b.bottom),
        d.style.paddingLeft = Y(b.left),
        a.H = b,
        c && a.j.scrollTo(0, f - e))
    }
    function dr(a) {
        Iq(a, b => {
            a.ia.Yb ?? (!gd() && !hd()) ? b.style.height = xe(a.G.height, !0) : (we(b, a.G),
            b.style.width = "100%")
        }
        , !1, !0);
        a.l.style.display = "block";
        a.l.style.margin = "0 auto";
        if (a.mc) {
            const b = a.g;
            Qd(b, c => {
                Td(c, d => c === b && /display|bottom/i.test(d) ? !1 : !0);
                if (c.nodeName === "svg")
                    return !1
            }
            )
        }
    }
    function Uq(a) {
        if (a.B !== "bottom" && a.B !== "top")
            throw Error(`Unexpected position: ${a.B}`);
    }
    function Yq(a, b=!1) {
        Z(a, b, 15);
        a.ga ? a.ua ? Z(a, b, 17) : a.M >= 2 && a.W && Z(a, b, 18) : Z(a, b, 16);
        !a.ga || a.ua || a.M >= 2 && a.W || !Mq(a, b) ? Vq(a) : (Z(a, b, 19),
        wp(a, b),
        Oq(a))
    }
    function br(a, b) {
        const c = a.ma ? cr(a, a.R) : a.na.top;
        if (a.B === "top" && a.j.document.body && a.ga && a.A && a.K && a.H.top !== c && b !== 0) {
            var d = oe(a.H);
            b === null ? (d.top = c,
            Wq(a, d)) : (b > 0 && a.H.top > c && (d.top = Math.max(c, a.H.top - b),
            Wq(a, d, !1)),
            b < 0 && a.H.top < c && (d.top = Math.min(c, a.H.top - b),
            Wq(a, d, !1)))
        }
    }
    function cr(a, b=!1) {
        return b ? a.na.top + 30 : a.na.top + 30 + a.Ba.height - 5
    }
    var er = class extends Jq {
        constructor(a, b, c, d, e, f, g, h=null, k=Np, m=null) {
            super(a, b, f);
            this.N = d;
            this.ca = e;
            this.mb = g;
            this.C = h;
            this.ia = k;
            this.Ra = m;
            this.J = this.rb = this.Ta = 0;
            this.ua = this.lc = !1;
            this.A = null;
            this.W = this.ga = !1;
            this.U = null;
            this.M = 0;
            this.qb = this.K = !1;
            this.ma = !0;
            this.Ba = null;
            this.X = this.ta = this.qa = this.bd = this.mc = this.nc = !1;
            this.wb = 0;
            this.Vc = this.R = this.sb = this.ub = this.Ia = !1;
            this.na = Ae(b.document.body, "padding");
            this.H = Ae(b.document.body, "padding");
            this.B = c;
            this.G = Tq(this);
            this.hd = de(b || window).height / 2;
            this.O = de(b || window).height;
            this.Yc = ee(b);
            Vq(this);
            this.Pc = this.N.aa(266, () => {
                Z(this, !0, 33);
                Yq(this, !0)
            }
            );
            this.Rc = this.N.aa(267, () => {
                Z(this, !0, 34);
                Yq(this, !0)
            }
            );
            this.cd = this.N.aa(268, () => {
                if (this.K && this.g && this.A) {
                    var l = this.A;
                    l.W = sg(l.V)
                }
                l = sg(this.j);
                const n = l - this.Ta;
                br(this, n);
                this.X && (n > 0 && (this.J += n),
                this.sb = this.Yc - l <= this.O,
                this.Ta = l);
                Yq(this)
            }
            );
            this.dd = this.N.aa(269, () => {
                Xq(this)
            }
            );
            this.ed = this.N.aa(270, l => {
                Zq(this, l)
            }
            );
            this.fd = this.N.aa(271, l => {
                if (l && l.touches) {
                    this.U = "touchmove";
                    this.M = l.touches.length;
                    this.W = !0;
                    Yq(this);
                    if (!this.lc && l.touches && l.touches.length !== 0 && l.touches[0]) {
                        l = l.touches[0].pageY;
                        var n = l - this.rb;
                        this.rb = l;
                        l = n
                    } else
                        l = 0;
                    l > 0 && (this.J += l);
                    br(this, l)
                }
            }
            );
            this.gd = this.N.aa(272, l => {
                l && l.touches && l.touches[0] && (this.U = "touchstart",
                this.M = l.touches.length,
                this.W = !1,
                Yq(this),
                this.rb = l.touches[0].pageY,
                this.lc = (l = l.target) && this.B === "top" && this.ga && this.A && Bp(this.A) && l.nodeType === 1 ? ie(Bp(this.A), l) : !1)
            }
            );
            this.tb = this.N.aa(273, () => {
                this.ob()
            }
            );
            I(a, "load", this.tb);
            W(this, () => {
                K(a, "load", this.tb)
            }
            )
        }
        ob() {
            if (this.qa)
                return !1;
            this.qa = !0;
            K(this.l, "load", this.tb);
            if (this.ta && !this.qb)
                return !1;
            Yq(this, !0);
            return !0
        }
        pb() {
            return og(this.j)
        }
    }
      , xp = {
        ui: "gr",
        gvar: "ar",
        scroll_detached: "true",
        dismissable: "false"
    };
    var fr = class extends er {
        constructor(a, b, c, d, e, f, g, h=null) {
            var k = Hl
              , m = Fl
              , l = {
                oc: Q(hj),
                Bc: Q(Gj),
                Cb: Q(Fj)
            };
            c = Xn(f, c);
            super(a, b, d, k, m, e, c, g, l, h)
        }
        Ha(a) {
            return Hh(a)
        }
        ob() {
            if (!super.ob())
                return !1;
            const a = gp(this.j, this.B === "top" ? 3 : 2);
            a && a.displayAdLoadedContent(!this.X && !this.Ia);
            return !0
        }
        pb() {
            if (this.G.width > ng) {
                var a = this.j;
                var b = this.G.width;
                const c = Bd(a);
                a = a.innerWidth * c >= b && a.innerHeight * c >= (b > ng ? 450 : 0)
            } else
                a = super.pb();
            return a
        }
    }
    ;
    var gr = class extends E {
    }
      , hr = Wc(gr);
    function ir(a) {
        jr(a, !1);
        const b = a.g;
        Iq(a, c => {
            F(c, kr);
            vg(c)
        }
        , !0);
        a.l.setAttribute("width", "");
        a.l.setAttribute("height", "");
        G(a.l, kr);
        G(a.l, lr);
        G(b, mr);
        vg(b);
        vg(a.l)
    }
    function jr(a, b) {
        const c = a.g;
        b ? nr(a, c) : (F(c, {
            display: "none"
        }),
        a.A && F(a.A, {
            display: "none"
        }),
        a.C && (w.clearInterval(a.C),
        a.C = 0),
        or(a))
    }
    function pr(a, b) {
        const c = a.g;
        if (!b)
            return !1;
        var d = Qk(b);
        if (!d || !d.A())
            return !1;
        d = d.I;
        if (!d)
            return !1;
        a.A = a.j.document.createElement("ins");
        F(a.A, {
            display: "inline-block",
            width: "100%"
        });
        var e = a.A;
        b = nk[b.l];
        Q(tj) ? kk(e, d, b) : ej(e, d, b);
        a.G();
        F(c, {
            position: "absolute"
        });
        jr(a, !0);
        return !0
    }
    function nr(a, b) {
        F(b, {
            display: "block"
        });
        a.C = w.setInterval( () => a.G, 250)
    }
    function or(a) {
        a.H != null && (a.B.body.style.overflow = a.H);
        a.J != null && (a.B.documentElement.style.overflow = a.J)
    }
    function qr(a) {
        const b = a.g
          , c = a.j.innerHeight;
        F(b, {
            height: `${c}px`
        });
        a.j.scrollTo(0, ue(a.A).y);
        b && (F(b, {
            top: "0"
        }),
        a.A && F(a.A, {
            height: `${c}px`
        }),
        F(b, {
            position: "fixed"
        }),
        a.B.body && a.B.body.style.overflow !== "hidden" && (a.H = a.B.body.style.overflow,
        a.J = a.B.documentElement.style.overflow,
        a.B.body.style.overflow = "hidden",
        a.B.documentElement.style.overflow = "hidden"))
    }
    var rr = class extends Jq {
        constructor(a, b, c) {
            super(a, b, c);
            this.H = null;
            this.C = 0;
            this.J = null;
            this.K = 0;
            this.A = null;
            this.M = 0;
            this.B = b.document;
            ir(this)
        }
        G() {
            if (this.B.body.style.overflow !== "hidden" && this.B.body.style.position !== "fixed") {
                var a = this.g;
                const b = this.j.innerHeight;
                if (this.M < b) {
                    const c = {
                        height: `${b}px`
                    };
                    F(a, c);
                    this.A && F(this.A, c);
                    this.M = b
                }
                (a = this.g) && this.A && (this.K = ue(this.A).y,
                a.style.top !== `${this.K}px` && F(a, {
                    top: `${this.K}px`
                }))
            }
        }
    }
      , mr = {
        backgroundColor: "white",
        opacity: "1",
        position: "fixed",
        left: "0px",
        top: "0px",
        display: "none !important",
        zIndex: "2147483646"
    }
      , kr = {
        width: "100%",
        height: "100%",
        zIndex: "2147483646"
    }
      , lr = {
        left: "0",
        position: "absolute",
        top: "0"
    };
    function sr(a, b) {
        var c = a.document.body;
        if (!c || !b)
            return Ml("sci_evt", {
                amacerr: 1
            }, .1),
            null;
        b = Kc(b, Dn, 1);
        var d = [];
        for (let q = 0; q < b.length; q++) {
            a: {
                var e = b[q];
                var f = q
                  , g = a
                  , h = Jc(e, Wi, 1);
                if (!h) {
                    e = null;
                    break a
                }
                b: {
                    var k = h;
                    if (!k) {
                        var m = null;
                        break b
                    }
                    m = Pc(k, 7, C);
                    if (Pc(k, 1, C) || k.getId() || uc(k, 4, Wb, tc()).length > 0) {
                        var l = k.getId()
                          , n = Pc(k, 1, C)
                          , p = uc(k, 4, Wb, tc());
                        m = Lb(D(k, 2, C));
                        var t = Lb(D(k, 5, C));
                        k = Mn(Ib(D(k, 6, C)));
                        let u = "";
                        n && (u += n);
                        l && (u += "#" + Oi(l));
                        if (p)
                            for (l = 0; l < p.length; l++)
                                u += "." + Oi(p[l]);
                        m = (p = u) ? new Qi(p,m,t,k) : null
                    } else
                        m = m ? new Qi(m,Lb(D(k, 2, C)),Lb(D(k, 5, C)),Mn(Ib(D(k, 6, C)))) : null
                }
                t = m;
                if (!t) {
                    e = null;
                    break a
                }
                m = Ib(D(e, 2, C));
                m = Pn[m];
                p = m === void 0 ? null : m;
                if (p === null) {
                    e = null;
                    break a
                }
                m = (m = Jc(e, Cn, 3)) ? Oc(m, 3, C) : null;
                t = new Sn(t,p);
                p = uc(e, 10, Ib, tc()).slice(0);
                Lb(D(h, 5)) != null && p.push(1);
                h = Lb(D(e, 12, C));
                p = e.Y;
                p = Ic(p, p[B] | 0, dj, 4) !== void 0 ? Jc(e, dj, 4) : null;
                e = Ib(D(e, 8)) == 1 ? new Vn(t,new Qn(On(Jc(e, Cn, 3), null)),m,0,p,g,f,h,e) : Ib(D(e, 8)) == 2 ? new Vn(t,new Rn(e),m,1,p,g,f,h,e) : null
            }
            e !== null && d.push(e)
        }
        b = new Po(d,a);
        d = a.innerHeight;
        a = a.innerWidth;
        a = vo(to(.85 * a, a), d);
        a.g.push(new oo);
        a.l = 1;
        a = a.build();
        a = Mo(b, a)[0] || null;
        if (!a)
            return null;
        c = {
            node: (new yh(c,!1)).g(a.g) || void 0,
            Pb: void 0,
            identifier: {}
        };
        if (!c.node)
            throw Error("amac:n");
        b = co(a.Da.g.g);
        if (b === null)
            throw Error("amac:p");
        return (c = (new Wl(c,b)).build()) ? {
            Jb: c,
            re: a.Xa.g
        } : null
    }
    function tr(a) {
        var b = new lg;
        b.g = !0;
        b.B = .85;
        b.j = 1;
        b.A = 25;
        b.l = a.innerHeight;
        b.C = !0;
        b = b.build();
        return wn(a, b)
    }
    ;function ur(a) {
        const b = qg(a, !0)
          , c = pg(a).scrollWidth
          , d = pg(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = sg(a);
        const g = [];
        var h = [];
        const k = []
          , m = [];
        var l = []
          , n = []
          , p = [];
        let t = 0
          , q = 0
          , u = Infinity
          , y = Infinity
          , T = null;
        var H = wm({
            Ec: !1
        }, a);
        for (const J of H) {
            H = J.getBoundingClientRect();
            const S = b - (H.bottom + f);
            var v = void 0
              , x = void 0;
            if (J.className && J.className.indexOf("adsbygoogle-ablated-ad-slot") != -1) {
                v = J.getAttribute("google_element_uid");
                let M;
                if (x = a.fqjyf) {
                    if (v && x[v] && (M = x[v].LmpfC),
                    !M)
                        continue
                } else
                    continue;
                a: {
                    v = Number(M.google_ad_width);
                    x = Number(M.google_ad_height);
                    if (!(v > 0 && x > 0)) {
                        b: {
                            try {
                                const ae = String(M.google_ad_format);
                                if (ae && ae.match) {
                                    const Wf = ae.match(/(\d+)x(\d+)/i);
                                    if (Wf) {
                                        const gk = parseInt(Wf[1], 10)
                                          , hk = parseInt(Wf[2], 10);
                                        if (gk > 0 && hk > 0) {
                                            var O = {
                                                width: gk,
                                                height: hk
                                            };
                                            break b
                                        }
                                    }
                                }
                            } catch (ae) {}
                            O = null
                        }
                        const Nb = O;
                        if (!Nb) {
                            v = null;
                            break a
                        }
                        v = v > 0 ? v : Nb.width;
                        x = x > 0 ? x : Nb.height
                    }
                    v = {
                        width: v,
                        height: x
                    }
                }
                v = (x = v) ? x.height : 0;
                x = x ? x.width : 0
            } else if (v = H.bottom - H.top,
            x = H.right - H.left,
            v <= 1 || x <= 1)
                continue;
            g.push(v);
            k.push(x);
            m.push(v * x);
            Bm(J) ? (q += 1,
            J.className && J.className.indexOf("pedestal_container") != -1 && (T = v)) : (u = Math.min(u, S),
            n.push(H),
            t += 1,
            h.push(v),
            l.push(v * x));
            y = Math.min(y, S);
            p.push(H)
        }
        u = u === Infinity ? null : u;
        y = y === Infinity ? null : y;
        f = vr(n);
        p = vr(p);
        h = wr(b, h);
        n = wr(b, g);
        l = wr(b * c, l);
        O = wr(b * c, m);
        return new xr(a,{
            vd: e,
            Qc: b,
            Ud: c,
            Td: d,
            Kc: t,
            rc: q,
            tc: yr(g),
            pd: yr(k),
            od: yr(m),
            Pd: f,
            Od: p,
            Nd: u,
            Md: y,
            ud: h,
            td: n,
            nd: l,
            md: O,
            Vd: T
        })
    }
    function zr(a, b=0) {
        a = ur(a);
        return ((a.g.tc || 0) * (a.g.Kc + a.g.rc) + b) / (a.g.Qc + b)
    }
    function Ar(a, b) {
        var c = gd() && !(L(a.j) >= 900);
        const d = Fa([], e => Ia(a.l, e)).join(",");
        b = {
            wpc: "",
            su: b,
            eid: d,
            doc: a.g.vd ?? null,
            pg_h: Br(a.g.Qc),
            pg_w: Br(a.g.Ud),
            pg_hs: Br(a.g.Td),
            c: Br(a.g.Kc),
            aa_c: Br(a.g.rc),
            av_h: Br(a.g.tc),
            av_w: Br(a.g.pd),
            av_a: Br(a.g.od),
            s: Br(a.g.Pd),
            all_s: Br(a.g.Od),
            b: Br(a.g.Nd),
            all_b: Br(a.g.Md),
            d: Br(a.g.ud),
            all_d: Br(a.g.td),
            ard: Br(a.g.nd),
            all_ard: Br(a.g.md),
            pd_h: Br(a.g.Vd),
            dt: c ? "m" : "d"
        };
        c = {};
        for (const e of Object.keys(b))
            b[e] !== null && (c[e] = b[e]);
        return c
    }
    var xr = class {
        constructor(a, b) {
            this.l = [];
            this.j = a;
            this.g = b
        }
    }
    ;
    function yr(a) {
        return Zd.apply(null, Fa(a, b => b > 0)) || null
    }
    function wr(a, b) {
        return a <= 0 ? null : Yd.apply(null, b) / a
    }
    function vr(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e]
                  , d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                c > 0 && (b = Math.min(c, b))
            }
        return b !== Infinity ? b : null
    }
    function Br(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    }
    ;function Cr(a, b, c) {
        a.g = Hq(b, c, a.j);
        return !!a.g && a.g?.length === 0
    }
    function Dr(a, b, c) {
        try {
            if (!b || !Cr(a, b, c))
                return !1;
            a.g.push(Date.now());
            const d = JSON.stringify(a.g);
            b.setItem(a.j, d);
            return b.getItem(a.j) === d
        } catch (d) {
            return !1
        }
    }
    var Er = class {
        constructor(a) {
            this.j = a;
            this.g = null
        }
    }
    ;
    function Fr() {
        Gr || (Gr = new Hr);
        return Gr
    }
    var Hr = class extends Er {
        constructor() {
            super("__lsv__")
        }
    }
      , Gr = null;
    function Ir(a, b) {
        if (a.na)
            Promise.resolve(!1);
        else {
            a.na = !0;
            b = ug(b);
            a.X = b["i-fvs"] === "true";
            var c = b.i_expid;
            c && (a.K = c);
            b.qid && (a.Oa = b.qid);
            a.C = parseFloat(b.den_lim) || 0;
            b = parseInt(b.sti_lt, 10);
            isNaN(b) || (a.R = b);
            a.G = !0;
            if (Jr(a))
                Promise.resolve(!1);
            else {
                var d = new Uo
                  , e = () => {
                    const g = qg(a.j, !0);
                    Kr(a, {
                        nip: 1,
                        ph: g,
                        vh: a.j.innerHeight,
                        iplt: Date.now() - a.M,
                        ama: a.J.toString(),
                        url: a.j.location ? a.j.location.href : ""
                    }, .1);
                    d.resolve(!1)
                }
                  , f = (g, h) => {
                    Kr(a, {
                        iplt: Date.now() - a.M,
                        ama: a.J.toString(),
                        y: h
                    }, .01);
                    d.resolve(Lr(a, g))
                }
                ;
                a.M = Date.now();
                a.J ? (b = sr(a.j, a.Ba)) && a.G && !Jr(a) ? f(b.Jb, b.re) : (Kr(a, {
                    amacerr: 1
                }, .1),
                e()) : tr(a.j).then(g => {
                    a.G && !Jr(a) && g.ka().then(h => {
                        if (h.j)
                            var k = h.j;
                        else
                            h.g || (Pk(h, !1),
                            h.A()),
                            k = h.g,
                            !h.j && k && (h.j = k.j()),
                            k = h.j;
                        f(h, k ? k.top : -1)
                    }
                    , e);
                    d.resolve(!1)
                }
                )
            }
        }
    }
    function Jr(a) {
        return a.X ? !1 : X(a.j).wasReactiveAdVisible[8] ? (Kr(a, {
            vigs: 1
        }, .1),
        !0) : !1
    }
    function Kr(a, b, c) {
        b = b || {};
        a.Oa && (b.qid = a.Oa);
        a.K && (b.eid = a.K);
        a.ra && (b.tsl = Date.now() - a.ra);
        a.U && (b.tslo = Date.now() - a.U,
        b.tl = a.ta);
        a.H.src && (b.req = a.H.src);
        Ml("sci_evt", b, c)
    }
    function Lr(a, b) {
        Mr(a) && Nr(a) && pr(a.g, b) && (a.ra = Date.now(),
        Or(a),
        a.X ? Pr(a) : a.requestAnimationFrame.call(a.j, () => {
            Qr(a)
        }
        ));
        return !!a.ra
    }
    function Rr(a) {
        a.ab = !0;
        a.l = !1;
        jr(a.g, !1);
        a.A && (K(a.j, "orientationchange", a.A),
        a.A = null);
        a.B && (K(a.j, "resize", a.B),
        a.B = null)
    }
    function Mr(a) {
        var b = a.j.innerHeight;
        if (!b)
            return !1;
        const c = !og(a.j);
        var d = a.j;
        const e = L(d);
        d = pg(d).scrollWidth <= e;
        let f;
        if (c)
            return Kr(a, {
                lnd: 1
            }, .1),
            !1;
        if (a.C && (f = zr(a.j, b)) > a.C)
            return b = Ar(ur(a.j), a.j.location.hostname),
            Kr(a, {
                den: f,
                lim: a.C,
                ...b
            }, 1),
            !1;
        d || Kr(a, {
            pwev: 1
        }, .1);
        return !0
    }
    function Nr(a) {
        if (a.ga)
            return !0;
        a = Xn(a.ma, a.pubWin);
        return Cr(Fr(), a, 3600)
    }
    function Or(a) {
        a.A = Ll(519, () => {
            !a.ab && a.l && Kr(a, {
                tto: Date.now() - a.ra,
                por: og(a.j) ? 1 : 0
            }, .1)
        }
        );
        I(a.j, "orientationchange", a.A);
        a.B = Ll(520, () => {
            a.ab || (a.g.G(),
            a.l && Kr(a, {
                ttre: Date.now() - a.ra
            }, .1))
        }
        );
        I(a.j, "resize", a.B)
    }
    function Pr(a) {
        a.qa || (a.H.contentWindow.postMessage(JSON.stringify({
            msg_type: "i-view"
        }), "https://googleads.g.doubleclick.net"),
        a.qa = !0)
    }
    function Qr(a) {
        if (!a.ab)
            if (Jr(a))
                Rr(a);
            else {
                var b = a.g.g.getBoundingClientRect().top
                  , c = a.j.innerHeight;
                a.g.G();
                (c - b) / c >= .5 && Pr(a);
                if (b < c) {
                    X(a.j).wasReactiveAdVisible[9] = !0;
                    if (!a.ga) {
                        const d = Xn(a.ma, a.pubWin);
                        Dr(Fr(), d, 3600)
                    }
                    a.ua = !0
                }
                b <= 0 ? (a.R >= 0 && Sr(a),
                Kr(a, {
                    sice: "true",
                    vh: c,
                    gvto: b
                }, .1)) : a.requestAnimationFrame && a.requestAnimationFrame.call(a.j, () => {
                    Qr(a)
                }
                )
            }
    }
    function Sr(a) {
        a.U = Date.now();
        a.l = !0;
        a.ta++;
        qr(a.g);
        w.setTimeout( () => {
            if (a.l) {
                a.l = !1;
                var b = a.g;
                const c = b.g;
                F(c, {
                    top: `${ue(b.A).y}px`
                });
                F(c, {
                    position: "absolute"
                });
                or(b)
            }
        }
        , Math.max(0, a.R))
    }
    var Tr = class extends up {
        constructor(a, b, c, d, e, f, g) {
            super(a, c);
            this.pubWin = b;
            this.ga = e;
            this.ma = g;
            this.ab = !1;
            this.K = null;
            this.l = this.X = this.G = this.na = !1;
            this.ta = this.U = this.ra = 0;
            this.B = this.A = this.Oa = null;
            this.ua = this.qa = !1;
            this.C = this.M = this.R = 0;
            this.requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || w.oRequestAnimationFrame || w.msRequestAnimationFrame;
            this.g = new rr(c,a,f);
            this.J = Oc(d, 1) ?? !1;
            this.Ba = Jc(d, En, 2) ?? null
        }
        W(a) {
            a["sti-fill"] = b => {
                Ir(this, b)
            }
            ;
            a["i-no"] = () => {
                this.G = !1;
                !this.ua && this.ra && Rr(this)
            }
        }
    }
    ;
    var Ur = class extends ip {
        constructor() {
            super(...arguments);
            this.K = !1;
            this.L = null
        }
        G(a) {
            this.K = !!a.enableAma;
            if (a = a.amaConfig)
                try {
                    var b = Fn(a)
                } catch (c) {
                    b = null
                }
            else
                b = null;
            this.L = b;
            return !0
        }
    }
    ;
    var Vr = class {
        verifyAndProcessConfig(a, b, c) {
            var d = X(a);
            if (d.wasReactiveAdConfigReceived[9])
                return !1;
            const e = new Ur;
            if (!hp(e, b))
                return !1;
            d.wasReactiveAdConfigReceived[9] = !0;
            if (!e.B && !Cr(Fr(), c, 3600))
                return !1;
            b = ge(document, "INS");
            b.className = "adsbygoogle";
            F(b, {
                display: "none"
            });
            a.document.documentElement.appendChild(b);
            c = e.C || {};
            c.google_ad_client = e.A;
            c.google_ad_height = pg(a).clientHeight || 0;
            c.google_ad_width = L(a) || 0;
            c.google_reactive_ad_format = 9;
            d = new gr;
            var f = e.K;
            if (f != null && typeof f !== "boolean")
                throw Error(`Expected boolean but got ${ja(f)}: ${f}`);
            d = rc(d, 1, f);
            e.L && Mc(d, 2, e.L);
            d = JSON.stringify(cc(d));
            c.google_rasc = d;
            e.B && (c.google_adtest = "on");
            kp(b, c, a);
            return !0
        }
    }
    ;
    var Wr = class {
        constructor(a) {
            this.g = a;
            this.j = 0;
            this.ca = new Yf(Gf());
            this.gb = new Bl
        }
        Zb(a) {
            var b = ik(qj);
            if (this.gb.kb(b)) {
                var c = this.g.Wd
                  , d = this.g.Bb
                  , e = this.g.yb;
                a = a.D;
                var f = new tf;
                a = Cc(f, 12, uf, Hb(a));
                e = rc(a, 9, Vb(e));
                e = rc(e, 10, Kb(b));
                d = rc(e, 11, Vb(d));
                e = c == null ? c : Mb(c);
                rc(d, 13, e);
                d = Hc(a, sf, 5);
                nc(d);
                d = uc(d, 1, Ib, 2, !0);
                d.push(Gb(9, bb(d === $a ? 7 : d[B] | 0) ?? (wa ? 1024 : 0)));
                d = new vf;
                c = Sc(d, 1, c);
                b = Sc(c, 2, b);
                b = Nc(b, 6, wf, a);
                a: {
                    nc(b);
                    if (void 0 === gb) {
                        if (Gc(b, wf, 6) !== 6) {
                            c = void 0;
                            break a
                        }
                    } else
                        Fc(b.Y, void 0, wf, 6);
                    c = Hc(b, tf, 6)
                }
                a = this.j++;
                rc(c, 1, Kb(a));
                Rf(this.ca, b)
            }
        }
    }
    ;
    function Xr(a, b) {
        var {Kd: c} = a.g();
        if (a.gb.kb(c)) {
            var d = a.params.Zc
              , e = a.params.Bb
              , f = a.params.xb
              , g = a.params.yb
              , h = a.params.nb
              , k = b.Oa
              , m = b.ke;
            b = a.ca;
            c = Af(c);
            a = a.j++;
            a = Bc(c, 1, Kb(a), 0);
            a = zf(a);
            e = Tc(a, 11, e);
            d = Sc(e, 8, d);
            f = Uc(rf([f]));
            f = Mc(d, 5, f);
            g = Tc(f, 9, g);
            h = h();
            h = Ac(g, 12, h, Jb);
            g = new yf;
            k = Tc(g, 2, k);
            g = new xf;
            m = rc(g, 1, Hb(m));
            m = lc(m);
            m = Mc(k, 1, m);
            m = lc(m);
            m = Nc(h, 6, Cf, m);
            Qf(b, lc(m))
        }
    }
    var Zr = class {
        constructor(a, b, c) {
            var d = Yr;
            this.ca = a;
            this.gb = b;
            this.params = c;
            this.g = d;
            this.j = 0
        }
        F(a) {
            var {ce: b} = this.g();
            if (this.gb.kb(b)) {
                var c = this.params.Zc
                  , d = this.params.Bb
                  , e = this.params.xb
                  , f = this.params.yb
                  , g = this.params.nb
                  , h = a.D;
                a = this.ca;
                b = Af(b);
                var k = this.j++;
                b = Bc(b, 1, Kb(k), 0);
                b = zf(b);
                h = Cc(b, 3, Cf, Hb(h));
                d = Tc(h, 11, d);
                c = Sc(d, 8, c);
                e = Uc(rf([e]));
                e = Mc(c, 5, e);
                f = Tc(e, 9, f);
                g = g();
                g = Ac(f, 12, g, Jb);
                Qf(a, lc(g))
            }
        }
    }
    ;
    var $r = class extends Zr {
        constructor(a) {
            if (b == null) {
                var b = new Bl;
                b = {
                    ca: new Yf(a.yb),
                    gb: b
                }
            }
            super(b.ca, b.gb, a)
        }
    }
    ;
    function Yr() {
        return {
            ce: ik(Tj),
            Kd: 0
        }
    }
    ;var cs = class extends up {
        constructor(a, b) {
            super(a, b.l);
            this.g = b
        }
        W(a) {
            a.dismiss = () => {
                var b = this.g;
                as(b, -30);
                bs(b, "dismissed")
            }
        }
    }
    ;
    function ds(a, b) {
        const c = Kd("STYLE", a);
        ud(c);
        a?.head.appendChild(c);
        setTimeout( () => {
            a?.head.removeChild(c)
        }
        , b)
    }
    function es(a, b, c) {
        if (!a.body)
            return null;
        const d = new fs;
        d.apply(a, b);
        return () => {
            var e = c || 0;
            e > 0 && ds(b.document, e);
            G(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.l,
                position: d.A,
                top: d.B
            });
            b.scrollTo(0, d.j)
        }
    }
    class fs {
        constructor() {
            this.g = this.B = this.A = this.l = null;
            this.j = 0
        }
        apply(a, b) {
            this.l = a.body.style.overflow;
            this.A = a.body.style.position;
            this.B = a.body.style.top;
            this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.j = sg(b);
            G(a.body, "top", `${-this.j}px`)
        }
    }
    ;function gs(a, b) {
        const c = a.g;
        if (c)
            if (b) {
                b = a.G;
                if (b.g == null) {
                    var d = b.controller;
                    const e = d.floatingAdsStacking.nextRestrictionId++;
                    d.floatingAdsStacking.maxZIndexRestrictions[e] = 2147483646;
                    dq(d);
                    b.g = e
                }
                F(c, {
                    display: "block"
                });
                a.B.body && !a.A && (a.A = es(a.B, a.j, a.H));
                c.setAttribute("tabindex", "0");
                c.setAttribute("aria-hidden", "false");
                a.B.body.setAttribute("aria-hidden", "true")
            } else
                b = a.G,
                b.g != null && (d = b.controller,
                delete d.floatingAdsStacking.maxZIndexRestrictions[b.g],
                dq(d),
                b.g = null),
                F(c, {
                    display: "none"
                }),
                a.A && (a.A(),
                a.A = null),
                a.B.body.setAttribute("aria-hidden", "false"),
                c.setAttribute("aria-hidden", "true")
    }
    function hs(a) {
        gs(a, !1);
        const b = a.g;
        if (b) {
            var c = is(a.C);
            Iq(a, d => {
                F(d, c);
                vg(d)
            }
            , !0);
            a.l.setAttribute("width", "");
            a.l.setAttribute("height", "");
            G(a.l, c);
            G(a.l, js);
            G(b, ks);
            G(b, {
                background: "transparent"
            });
            F(b, {
                display: "none",
                position: "fixed"
            });
            vg(b);
            vg(a.l);
            Bd(a.C) <= 1 || (G(b, {
                overflow: "scroll",
                "max-width": "100vw"
            }),
            Td(b))
        }
    }
    var ls = class extends Jq {
        constructor(a, b, c) {
            var d = ik(Xj);
            super(a, b, c);
            this.C = b;
            this.H = d;
            this.A = null;
            this.B = b.document;
            a = new gq(b);
            this.G = new hq(a)
        }
    }
      , ks = {
        backgroundColor: "white",
        opacity: "1",
        position: "fixed",
        left: "0px",
        top: "0px",
        margin: "0px",
        padding: "0px",
        display: "none",
        zIndex: "2147483647"
    }
      , js = {
        left: "0",
        position: "absolute",
        top: "0"
    };
    function is(a) {
        a = Bd(a);
        a = 100 * (a < 1 ? 1 : a);
        return {
            width: `${a}vw`,
            height: `${a}vh`
        }
    }
    ;var ms = class extends ls {
        constructor(a, b, c) {
            super(b, a, c);
            hs(this)
        }
        Ha(a) {
            return Hh(a)
        }
    }
    ;
    function ns() {
        const {promise: a, resolve: b} = new Uo;
        return {
            fe: (c, d) => {
                d?.ports.length && b(new os(d.ports[0]))
            }
            ,
            ee: a
        }
    }
    var os = class extends U {
        constructor(a) {
            super();
            const {promise: b, resolve: c} = new Uo;
            this.promise = b;
            a.onmessage = () => c();
            W(this, () => {
                a.close()
            }
            )
        }
    }
    ;
    const ps = "youtube.com youtube-nocookie.com vimeo.com dailymotion.com twitch.tv kick.com rumble.com".split(" ");
    function qs(a, b) {
        a = a.getComputedStyle(b);
        return b.offsetWidth > 0 && b.offsetHeight > 0 && a.display !== "none" && a.visibility !== "hidden" && a.opacity !== "0"
    }
    function rs(a) {
        return Array.from(a.document.querySelectorAll("video")).some(b => qs(a, b) && !(!b.currentSrc && !b.src)) || Array.from(a.document.querySelectorAll("iframe")).some(b => ss(a, b))
    }
    function ss(a, b) {
        return qs(a, b) && ps.some(c => b.src?.includes(c))
    }
    ;const ts = ["mousemove", "mousedown", "scroll", "keydown"];
    function us(a, b=3E4) {
        return new vs(a,b)
    }
    function ws(a) {
        let b = null
          , c = null;
        const d = f => {
            if (b && f.timeStamp - b > a.Vb) {
                if (rs(a.g)) {
                    a.dispose();
                    return
                }
                var g = {
                    hb: f.timeStamp,
                    Id: f.timeStamp - b,
                    qe: c
                };
                for (const h of a.j)
                    try {
                        h(g)
                    } catch (k) {}
            }
            b = f.timeStamp
        }
        ;
        for (const f of ts)
            a.g.addEventListener(f, d);
        let e = null;
        a.g.navigator?.userActivation && a.g.performance?.now && (e = a.g.setInterval( () => {
            a.g.navigator.userActivation.isActive && (c = a.g.performance.now())
        }
        , 1E3));
        W(a, () => {
            for (const f of ts)
                a.g.removeEventListener(f, d);
            e && a.g.clearInterval(e)
        }
        )
    }
    var vs = class extends U {
        constructor(a, b) {
            super();
            this.g = a;
            this.Vb = b;
            this.j = [];
            this.l = ed( () => {
                ws(this)
            }
            )
        }
        listen(a) {
            this.l();
            this.j.push(a)
        }
    }
    ;
    const xs = Array.from({
        length: 11
    }, (a, b) => b / 10);
    function ys(a) {
        const b = d => {
            d.isTrusted && (a.C = !0,
            a.j(d.timeStamp))
        }
          , c = d => {
            d.isTrusted && (a.C = !1,
            a.j(d.timeStamp))
        }
        ;
        I(a.g, "focus", b);
        I(a.g, "blur", c);
        W(a, () => void a.g.removeEventListener("focus", b));
        W(a, () => void a.g.removeEventListener("blur", c));
        a.C = a.g.document.hasFocus()
    }
    function zs(a) {
        const b = c => {
            c.isTrusted && (a.B = Kq(a.g.document) === 1 ? !0 : !1,
            a.j(c.timeStamp))
        }
        ;
        I(a.g.document, "visibilitychange", b);
        W(a, () => void a.g.document.removeEventListener("visibilitychange", b));
        a.B = Kq(a.g.document) === 1
    }
    function As(a) {
        const b = a.g.document.body.getBoundingClientRect().top + 10
          , c = d => {
            d.isTrusted && (a.G = d.clientY < b ? !0 : !1,
            a.j(d.timeStamp))
        }
        ;
        I(a.g.document.body, "mouseleave", c);
        I(a.g.document.body, "mouseenter", c);
        W(a, () => void a.g.document.body.removeEventListener("mouseleave", c));
        W(a, () => void a.g.document.body.removeEventListener("mouseenter", c));
        a.G = !1
    }
    function Bs(a) {
        const b = a.g.document.querySelectorAll("article");
        if (b.length) {
            var c = new IntersectionObserver(d => {
                for (const e of d)
                    e.boundingClientRect.bottom <= a.g.innerHeight && (a.j(e.time),
                    c.unobserve(e.target))
            }
            ,{
                root: null,
                threshold: xs
            });
            for (const d of b)
                c.observe(d);
            W(a, () => void c.disconnect())
        }
    }
    function Cs(a) {
        let b = a.g.scrollY;
        const c = d => {
            d.isTrusted && (a.U = a.g.scrollY - b,
            b = a.g.scrollY,
            a.j(d.timeStamp, {
                event: d
            }))
        }
        ;
        I(a.g, "scroll", c);
        W(a, () => void a.g.removeEventListener("scroll", c))
    }
    function Ds(a) {
        const b = a.g.navigation;
        if (b && (Ca() || (Ba() ? 0 : A("Edge")) || (Ba() ? 0 : A("Opera"))) && !b.canGoForward) {
            var c = d => {
                d.navigationType === "traverse" ? d.intercept({
                    async handler() {
                        a.R = !0;
                        a.j(d.timeStamp, {
                            event: d
                        })
                    }
                }) : a.Rb && d.navigationType !== "push" || d.destination.url !== a.g.location.href || d.intercept({
                    async handler() {}
                })
            }
            ;
            I(b, "navigate", c);
            W(a, () => void b.removeEventListener("navigate", c));
            history.pushState({}, "", a.g.location.href);
            a.K = !0
        }
    }
    function Es(a) {
        const b = a.g.navigation;
        if (b && (Ca() || (Ba() ? 0 : A("Edge")) || (Ba() ? 0 : A("Opera")))) {
            var c = d => {
                d.formData || d.sourceElement && d.sourceElement.tagName === "A" || d.destination.url === a.g.location.href || d.destination.url.includes("#google_vignette") || !d.canIntercept || (a.J = a.g.location.href,
                d.intercept({
                    handler: async () => {
                        a.j(d.timeStamp, {
                            event: d
                        });
                        b.removeEventListener("navigate", c)
                    }
                }))
            }
            ;
            I(b, "navigate", c);
            W(a, () => void b.removeEventListener("navigate", c))
        }
    }
    var Fs = class extends U {
        constructor(a, b, c=!1) {
            super();
            this.g = a;
            this.Rb = c;
            this.K = this.R = this.G = this.C = this.B = !1;
            this.U = 0;
            this.J = null;
            if (Se(a))
                for (const d of b)
                    switch (d) {
                    case 0:
                        ys(this);
                        break;
                    case 1:
                        zs(this);
                        break;
                    case 2:
                        As(this);
                        break;
                    case 3:
                        Bs(this);
                        break;
                    case 4:
                        Cs(this);
                        break;
                    case 5:
                        Ds(this);
                        break;
                    case 6:
                        Es(this)
                    }
            else
                this.dispose()
        }
        init() {
            this.L || this.j(Se(this.g))
        }
        ia() {
            return this.J
        }
    }
    ;
    function Gs(a, b) {
        a.ja ? a.ga(b) : (a.W.resolve(b),
        a.dispose())
    }
    var Hs = class extends Fs {
        constructor(a, b, c, d=!1, e=!1) {
            super(a, c, e);
            this.ga = b;
            this.ja = d;
            this.Rb = e;
            this.W = new Uo;
            this.l = this.W.promise
        }
    }
    ;
    var Is = class extends Hs {
        constructor(a, b, c=!1) {
            super(a, b, [0, 1, 2], c);
            this.A = 0;
            this.init()
        }
        j(a) {
            switch (this.A) {
            case 0:
                this.C && !this.G && (this.A = 1);
                break;
            case 1:
                if (!this.C && this.B && this.G) {
                    this.A = 2;
                    const b = setTimeout( () => {
                        this.j(a)
                    }
                    , 200);
                    W(this, () => void clearTimeout(b))
                }
                break;
            case 2:
                !this.C && this.B && this.G ? Gs(this, a) : this.A = 1
            }
        }
    }
    ;
    function Js(a) {
        let b = !1;
        const c = ({isTrusted: e}) => {
            e && (b = !0)
        }
          , d = ({timeStamp: e, isTrusted: f}) => {
            if (f = f && !b)
                f = (f = a.g.document.referrer) && typeof URL === "function" ? (new URL(f)).origin === a.g.location.origin : !1;
            if (f) {
                e = {
                    hb: e
                };
                for (const g of a.j)
                    try {
                        g(e)
                    } catch (h) {}
            }
        }
        ;
        a.g.addEventListener("focus", d);
        a.g.addEventListener("blur", c);
        W(a, () => {
            a.g.removeEventListener("focus", d);
            a.g.removeEventListener("blur", c)
        }
        )
    }
    var Ks = class extends U {
        constructor(a) {
            super();
            this.g = a;
            this.j = [];
            this.l = ed( () => {
                Js(this)
            }
            )
        }
        listen(a) {
            this.l();
            this.j.push(a)
        }
    }
    ;
    function Ls(a) {
        let b = null;
        const c = ({timeStamp: e, isTrusted: f}) => {
            f && (b = e)
        }
          , d = ({timeStamp: e, isTrusted: f}) => {
            if (f) {
                e = {
                    hb: e,
                    ...(b ? {
                        je: e - b
                    } : null)
                };
                for (const g of a.j)
                    try {
                        g(e)
                    } catch (h) {}
            }
        }
        ;
        a.g.addEventListener("focus", d);
        a.g.addEventListener("blur", c);
        W(a, () => {
            a.g.removeEventListener("focus", d);
            a.g.removeEventListener("blur", c)
        }
        )
    }
    var Ms = class extends U {
        constructor(a) {
            super();
            this.g = a;
            this.j = [];
            this.l = ed( () => {
                Ls(this)
            }
            )
        }
        listen(a) {
            this.l();
            this.j.push(a)
        }
    }
    ;
    var Ns = class extends Hs {
        constructor(a, b, c=!1) {
            super(a, b, [1], c);
            this.init()
        }
        j(a) {
            this.A ?? (this.A = 0);
            switch (this.A) {
            case 0:
                this.B && (this.A = 1);
                break;
            case 1:
                this.B || (this.A = 2,
                this.M = a);
                break;
            case 2:
                this.B && (this.H = a - this.M,
                Gs(this, a))
            }
        }
    }
    ;
    var Os = class extends U {
        constructor(a, b, c, d, e, f=!1) {
            super();
            this.ca = c;
            this.l = d;
            this.xb = 9;
            this.j = Math.floor(Dd() * 2147483647);
            this.g = (g, h, k={}) => {
                g = Object.assign({
                    etc: this.j,
                    e: g,
                    t: Math.round(h),
                    qqid: this.l,
                    ptt: this.xb
                }, k);
                kf(this.ca, "eit", g, !0, 1)
            }
            ;
            this.g(1, b);
            for (const g of e)
                switch (g) {
                case 101:
                    b = k => void this.g(g, k);
                    c = new Is(a,b,f);
                    f || c.l.then(b);
                    V(this, c);
                    break;
                case 102:
                    b = k => void this.g(g, k, {
                        tbd: Math.round(h.H || -1)
                    });
                    const h = new Ns(a,b,f);
                    f || h.l.then(b);
                    V(this, h);
                    break;
                case 103:
                    b = new Ms(a);
                    b.listen(k => {
                        this.g(g, k.hb, {
                            tsb: k.je ?? -1
                        })
                    }
                    );
                    V(this, b);
                    break;
                case 104:
                    b = us(a);
                    b.listen(k => {
                        this.g(g, k.hb, {
                            it: k.Id,
                            ualta: k.qe ?? -1
                        })
                    }
                    );
                    V(this, b);
                    break;
                case 105:
                    b = new Ks(a),
                    b.listen(k => {
                        this.g(g, k.hb)
                    }
                    ),
                    V(this, b)
                }
        }
    }
    ;
    var Ps = class extends Hs {
        constructor(a, b, c=!1, d=!1) {
            super(a, b, [5], c, d);
            this.init()
        }
        j(a) {
            this.R && Gs(this, a)
        }
    }
    ;
    function Qs(a, b, c, d, e) {
        const f = a.document.createElement("div");
        f.id = "goog-continue-reading-wrapper";
        b = {
            position: "absolute",
            top: `${b}px`,
            left: `${c}px`,
            transform: "translateX(-50%)",
            "z-index": "2147483647",
            width: `${d}px`,
            height: `${e}px`
        };
        Object.assign(b, {});
        F(f, b);
        b = f.attachShadow({
            mode: "open"
        });
        c = a.document.createElement("button");
        c.textContent = "Continue reading";
        c.id = "goog-continue-reading-btn";
        a = a.document.createElement("style");
        a.textContent = "\n    :host {\n      display: block;\n      width: 100%;\n      height: 100%;\n    }\n    button {\n      background-color: #1a73e8; /* Google blue 600 */\n      color: white;\n      border: none;\n      padding: 10px 16px;\n      text-align: center;\n      font-family: 'Google Sans';\n      text-decoration: none;\n      display: flex; /* Use flex to center content */\n      align-items: center;\n      justify-content: center;\n      font-size: 14px;\n      line-height: normal; /* Adjust line-height */\n      cursor: pointer;\n      border-radius: 20px;\n      height: 100%; /* Fill wrapper */\n      width: 100%; /* Fill wrapper */\n      box-sizing: border-box;\n      overflow: visible;\n    }\n  ";
        b.appendChild(a);
        b.appendChild(c);
        return f
    }
    function Rs(a, b, c, d={}) {
        a = a.document.createElement("div");
        b = {
            position: "absolute",
            top: `${b}px`,
            left: "0px",
            width: "100%",
            height: `${c}px`,
            "-webkit-backdrop-filter": "blur(16px)",
            "backdrop-filter": "blur(16px)",
            filter: "blur(8px)",
            "z-index": "2147483646"
        };
        Object.assign(b, d);
        a.id = "goog-content-pause-scrim";
        F(a, b);
        return a
    }
    ;var Ss = class {
        constructor(a) {
            this.g = a;
            this.j = this.g.document.body.style.overflowY;
            this.U = this.g.document.documentElement.style.scrollbarGutter;
            this.A = 0;
            this.R = b => {
                this.J(b)
            }
            ;
            this.W = b => {
                this.M(b)
            }
            ;
            this.sa = b => {
                this.H(b)
            }
            ;
            this.L = b => {
                this.A = b.touches[0].clientY
            }
            ;
            this.G = b => {
                this.K(b)
            }
            ;
            this.C = () => {
                this.A = 0
            }
            ;
            this.B = () => {}
        }
        start() {
            this.g.document.documentElement.style.scrollbarGutter = "stable";
            this.g.addEventListener("scroll", this.R, {
                passive: !1
            });
            this.g.addEventListener("wheel", this.W, {
                passive: !1
            });
            this.g.addEventListener("keydown", this.sa, {
                passive: !1
            });
            this.g.addEventListener("touchstart", this.L, {
                passive: !1
            });
            this.g.addEventListener("touchmove", this.G, {
                passive: !1
            });
            this.g.addEventListener("touchend", this.C, {
                passive: !1
            });
            this.g.addEventListener("resize", this.B, {
                passive: !1
            })
        }
        stop() {
            this.g.document.documentElement.style.scrollbarGutter = this.U;
            this.g.document.body.style.overflowY = this.j;
            this.g.removeEventListener("scroll", this.R);
            this.g.removeEventListener("wheel", this.W);
            this.g.removeEventListener("keydown", this.sa);
            this.g.removeEventListener("touchstart", this.L);
            this.g.removeEventListener("touchmove", this.G);
            this.g.removeEventListener("touchend", this.C);
            this.g.removeEventListener("resize", this.B)
        }
        J() {}
        M() {}
        H() {}
        K() {}
    }
    ;
    function Ts(a, b, c, d) {
        b.preventDefault();
        b.stopImmediatePropagation();
        a.g.scrollTo(c, d);
        a.g.document.body.style.overflowY = d >= a.l ? "hidden" : a.j
    }
    var Us = class extends Ss {
        constructor(a, b) {
            super(a);
            this.l = b
        }
        J(a) {
            Ts(this, a, this.g.scrollX, Math.min(this.g.scrollY, this.l))
        }
        M(a) {
            Ts(this, a, this.g.scrollX + a.deltaX, Math.min(this.g.scrollY + a.deltaY, this.l))
        }
        H(a) {
            if (a.key === "ArrowUp" || a.key === "PageUp")
                this.g.document.body.style.overflowY = this.j
        }
        K(a) {
            const b = a.touches[0].clientY - this.A;
            b <= 0 && this.g.scrollY >= this.l ? (this.g.document.body.style.overflowY = "hidden",
            a.cancelable && (a.preventDefault(),
            a.stopImmediatePropagation())) : b > 0 && (this.g.document.body.style.overflowY = this.j)
        }
    }
    ;
    function Vs() {
        Ws || (Ws = new Xs);
        return Ws
    }
    var Xs = class extends Er {
        constructor() {
            super("__lscp__")
        }
    }
      , Ws = null;
    function Ys(a, b, c=null) {
        return new Zs(a,b,c)
    }
    function $s(a) {
        if (at(a)) {
            var b = a.j.scrollY + a.j.innerHeight
              , c = a.j.document.documentElement.scrollHeight - b;
            a.button = Qs(a.j, b + a.g.hc, a.j.innerWidth / 2, a.g.Ke, a.g.qd);
            a.l = Rs(a.j, b, c, {
                "webkit-mask-image": `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 5px, rgba(0, 0, 0, 1) ${a.g.hc}px, rgba(0, 0, 0, 1) 100%)`,
                "webkit-mask-repeat": "no-repeat",
                "webkit-mask-size": "cover",
                "mask-image": `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 5px, rgba(0, 0, 0, 1) ${a.g.hc}px, rgba(0, 0, 0, 1) 100%)`,
                "mask-repeat": "no-repeat",
                "mask-size": "cover"
            });
            a.A = new Us(a.j,a.j.scrollY + a.g.qd + a.g.hc + a.g.Ye);
            a.j.document.body.appendChild(a.button);
            a.j.document.body.appendChild(a.l);
            a.A.start();
            if (a.g.he) {
                const e = new IntersectionObserver(f => {
                    for (const g of f)
                        g.isIntersecting && (Dr(Vs(), a.localStorage, a.g.uc),
                        e.disconnect())
                }
                ,{
                    root: null,
                    threshold: 0
                });
                e.observe(a.button)
            }
            var d = () => {
                bt(a);
                var e = {
                    hb: a.j.performance.now()
                };
                for (const f of a.B)
                    try {
                        f(e)
                    } catch (g) {}
            }
            ;
            a.button.addEventListener("click", d);
            W(a, () => {
                bt(a);
                a.button?.removeEventListener("click", d)
            }
            )
        }
    }
    function at(a) {
        return a.j.scrollY + a.j.innerHeight >= a.j.document.documentElement.scrollHeight || !a.localStorage ? !1 : a.g.he ? Cr(Vs(), a.localStorage, a.g.uc) && Cr(Fr(), a.localStorage, a.g.cf) : Cr(Fr(), a.localStorage, a.g.uc)
    }
    function bt(a) {
        a.button?.remove();
        a.l?.remove();
        a.A?.stop()
    }
    var Zs = class extends U {
        constructor(a, b, c=null) {
            super();
            this.j = a;
            this.g = b;
            this.localStorage = c;
            this.B = [];
            this.A = this.l = this.button = null
        }
        listen(a) {
            $s(this);
            this.B.push(a)
        }
    }
    ;
    var ct = class extends Hs {
        constructor(a, b, c, d, e, f, g=!1) {
            super(a, b, [4], g);
            this.X = c;
            this.la = d;
            this.H = 0;
            this.M = null;
            this.A = [];
            const h = a.document.body.scrollHeight;
            h < a.innerHeight ? this.dispose() : (b = a.document.querySelectorAll("article"),
            e && b.length !== 1 ? this.dispose() : (this.A = [...b].filter(k => {
                const {height: m, top: l, bottom: n} = k.getBoundingClientRect();
                return n > 0 && n < a.innerHeight && l > 0 ? !1 : m / h >= f
            }
            ),
            this.A.length === 0 ? this.dispose() : this.init()))
        }
        j(a) {
            switch (this.H) {
            case 0:
                for (const b of this.A) {
                    const {bottom: c} = b.getBoundingClientRect();
                    c > 0 && c < this.g.innerHeight && (this.M = setTimeout( () => {
                        Gs(this, a + this.X)
                    }
                    , this.X),
                    this.H = 1)
                }
                break;
            case 1:
                this.U > -this.la || (clearTimeout(this.M),
                Gs(this, a))
            }
        }
    }
    ;
    var dt = class extends Hs {
        constructor(a, b, c=!1) {
            super(a, b, [6], c);
            this.init()
        }
        j(a) {
            this.J !== null && Gs(this, a)
        }
    }
    ;
    var et = class extends Hs {
        constructor(a, b, c) {
            super(a, b, [], !1);
            this.A = c;
            this.init()
        }
        j(a) {
            this.A(a) && Gs(this, a)
        }
    }
    ;
    var ft = class extends Hs {
        constructor(a, b, c=250, d=1, e=2, f=!1) {
            super(a, b, [4], f);
            this.fc = c;
            this.Tc = d;
            this.Uc = e;
            this.H = null;
            this.A = [];
            Cd() === 0 ? this.M = d * this.g.innerHeight : this.M = e * this.g.innerHeight;
            this.A.push({
                scrollY: this.g.scrollY,
                time: Se(this.g)
            });
            this.init()
        }
        j(a, b) {
            if (b?.event && (this.A.push({
                scrollY: this.g.scrollY,
                time: a
            }),
            !(this.A.length < 2))) {
                b = this.A.length - 2;
                var c = this.A[b]
                  , d = this.A[this.A.length - 1];
                for (this.H && clearTimeout(this.H); d.time - c.time <= 1E3; ) {
                    if (Math.abs(d.scrollY - c.scrollY) > this.M) {
                        this.H = setTimeout( () => {
                            Gs(this, a)
                        }
                        , this.fc);
                        break
                    }
                    if (--b < 0)
                        break;
                    c = this.A[b]
                }
            }
        }
    }
    ;
    var gt = class extends U {
        constructor(a, b, c, d, e, f=null) {
            super();
            this.j = !1;
            this.g = void 0;
            c.promise.then( () => void this.dispose());
            const g = h => {
                d(h) && this.dispose()
            }
            ;
            for (const h of b)
                switch (h) {
                case 2:
                    b = new Ns(a, () => void g(h),e.ja);
                    V(this, b);
                    e.ja || b.l.then( () => void c.resolve(h));
                    break;
                case 3:
                    if (Cd() !== 0)
                        break;
                    b = new Is(a, () => void g(h),e.ja);
                    V(this, b);
                    e.ja || b.l.then( () => void c.resolve(h));
                    break;
                case 4:
                    b = new Ks(a);
                    V(this, b);
                    b.listen(e.ja ? () => void g(h) : () => void c.resolve(h));
                    break;
                case 5:
                    b = us(a, e.Vb);
                    V(this, b);
                    b.listen(e.ja ? () => void g(h) : () => void c.resolve(h));
                    break;
                case 6:
                    b = new ct(a, () => void g(h),e.Dd,e.Bd,e.Cd,e.zd ?? -1,e.ja);
                    V(this, b);
                    e.ja || b.l.then( () => void c.resolve(h));
                    break;
                case 7:
                    b = new ft(a, () => void g(h),e.fc,e.Tc,e.Uc,e.ja);
                    V(this, b);
                    e.ja || b.l.then( () => void c.resolve(h));
                    break;
                case 8:
                    b = new et(a, () => void g(h),e.We);
                    V(this, b);
                    b.l.then( () => void c.resolve(h));
                    break;
                case 9:
                    b = new Ps(a, () => void g(h),e.ja,e.Rb ?? !1);
                    V(this, b);
                    e.ja || b.l.then( () => void c.resolve(h));
                    this.j = b.K;
                    break;
                case 10:
                    this.g = new dt(a, () => void g(h),e.ja);
                    V(this, this.g);
                    e.ja || this.g.l.then( () => void c.resolve(h));
                    break;
                case 11:
                    b = Ys(a, e.Je, f),
                    V(this, b),
                    b.listen(e.ja ? () => void g(h) : () => void c.resolve(h))
                }
        }
        A() {
            return this.j
        }
        l() {
            return this.g?.ia()
        }
    }
    ;
    const ht = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1,
        NOSCRIPT: 1
    }
      , it = {
        IMG: " ",
        BR: "\n"
    };
    function jt(a, b, c, d) {
        if (!(a.nodeName in ht))
            if (a.nodeType === 3)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in it)
                d && a.nodeName === "IMG" && a.hasAttribute("alt") && b.push(" " + a.getAttribute("alt")),
                b.push(it[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    jt(a, b, c, d),
                    a = a.nextSibling
    }
    var kt = / \xAD /g
      , lt = /\xAD/g
      , mt = /\u200B/g
      , nt = / +/g
      , ot = /^\s*/;
    function pt(a) {
        const b = new Set;
        a.forEach(c => {
            switch (c) {
            case 1:
                b.add(1);
                break;
            case 2:
                b.add(2);
                break;
            case 3:
                b.add(3);
                break;
            case 5:
                b.add(5);
                break;
            case 6:
                b.add(6);
                break;
            case 7:
                b.add(7);
                break;
            case 8:
                b.add(8);
                break;
            case 9:
                b.add(9);
                break;
            case 10:
                b.add(10);
                break;
            case 11:
                b.add(11);
                break;
            case 12:
                b.add(4);
                break;
            case 13:
                b.add(12);
                break;
            case 14:
                b.add(13)
            }
        }
        );
        return b
    }
    function qt(a) {
        switch (a) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        case 5:
            return 5;
        case 6:
            return 6;
        case 7:
            return 7;
        case 8:
            return 8;
        case 9:
            return 9;
        case 10:
            return 10;
        case 11:
            return 11;
        case 4:
            return 12;
        case 12:
            return 13;
        case 13:
            return 14;
        default:
            return 0
        }
    }
    ;function rt(a) {
        a = a.match(hf);
        const b = a[6];
        return (a[5] || "") + (b ? "?" + b : "") || "/"
    }
    function st(a, b) {
        b ? a.j = new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b","ig") : a.j = null
    }
    function tt(a, b, c, d, e) {
        if (!c)
            return a.g?.F({
                D: 83
            }),
            !1;
        switch (b.target) {
        case "_top":
        case "_parent":
            break;
        case "":
        case "_self":
            if (e)
                return a.g?.F({
                    D: 84
                }),
                !1;
            break;
        default:
            return a.g?.F({
                D: 85
            }),
            !1
        }
        return d ? !a.A && ut(a, d) && rt(c) === a.B ? (a.g?.F({
            D: 70
        }),
        !1) : !0 : (a.g?.F({
            D: 86
        }),
        !1)
    }
    function ut(a, b) {
        return b.replace(vt, "") === a.hostname.replace(vt, "")
    }
    function wt(a, b, c) {
        if (Ha(["data-google-vignette", "data-google-interstitial"], f => b.getAttribute(f) === "false" || !1))
            return a.g?.F({
                D: 82
            }),
            !1;
        const d = b.href
          , e = d && (d.match(hf)[3] || null);
        if (!tt(a, b, d, e, c))
            return !1;
        a.l = !!e && ut(a, e);
        c = !c && !Cm(b) && /^https?:\/\//i.test(d) && !/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d);
        a.l || c || a.g?.F({
            D: 87
        });
        return a.l || c
    }
    function xt(a, b) {
        if (!b || !a.j)
            return [];
        var c = [];
        jt(b, c, !0, !0);
        b = c.join("");
        b = b.replace(kt, " ").replace(lt, "");
        b = b.replace(mt, "");
        b = b.replace(nt, " ");
        b !== " " && (b = b.replace(ot, ""));
        if (!b)
            return [];
        a = b.match(a.j);
        b = [];
        for (c = 0; a && c < a.length; c++) {
            const d = a[c].toLowerCase();
            Da(b, d) >= 0 || b.push(d)
        }
        return b
    }
    var yt = class {
        constructor(a, b, c) {
            this.g = b;
            this.A = c;
            this.j = null;
            this.l = !1;
            this.hostname = a.match(hf)[3] || "";
            this.B = rt(a)
        }
    }
      , vt = /^(www\.|m\.|mobile\.)*/i;
    function zt(a) {
        a.J && a.J.dispose();
        const b = $o(a.j, a.H.contentWindow, a.N, a.ca, a.B.Nb);
        V(a, b);
        Vo(b).then( () => {
            a.ga.g?.setAttribute("data-vignette-loaded", "true");
            a.G.Ic || (a.G.Ic = Re())
        }
        );
        Wo(b).then( () => void At(a));
        Xo(b).then( () => {
            a.g.F({
                D: 23
            });
            a.G.Fc = !0
        }
        );
        return b
    }
    function Bt(a) {
        a.g.F({
            D: 41
        });
        if (a.l.Ea)
            a.g.F({
                D: 42
            });
        else {
            a.l.Ea = a.N.aa(527, c => {
                if (a.B.Za)
                    if (a.g.F({
                        D: 44
                    }),
                    c)
                        if (c.isTrusted)
                            if (a.A.ra)
                                a.g.F({
                                    D: 50
                                });
                            else if (a.L)
                                a.g.F({
                                    D: 47
                                });
                            else if (a.l.ba)
                                a.g.F({
                                    D: 74
                                });
                            else {
                                var d = Ct(a, c);
                                d ? Dt(a, d) ? (a.l.ba = d,
                                c.stopImmediatePropagation(),
                                c.preventDefault(),
                                a.B.de && (X(a.j).clickTriggeredInterstitialMayBeDisplayed = !0),
                                Et(a, 1),
                                a.g.F({
                                    D: 53
                                })) : a.g.F({
                                    D: 49
                                }) : a.g.F({
                                    D: 48
                                })
                            }
                        else
                            a.g.F({
                                D: 73
                            });
                    else
                        a.g.F({
                            D: 45
                        });
                else
                    Ft(a, c)
            }
            );
            if (a.l.Ea !== null) {
                const c = a.l.Ea;
                I(a.j.document, "click", d => {
                    c(d)
                }
                , Be)
            }
            var b = a.j.frames;
            for (let c = 0; c < b.length; c++)
                try {
                    a.Ha(b[c].frameElement) || I(b[c].document, "click", a.l.Ea, Be)
                } catch (d) {}
            a.g.F({
                D: 43
            })
        }
    }
    function Et(a, b) {
        a.g.F({
            D: 28
        });
        switch (b) {
        case 1:
            a.g.F({
                D: 66
            });
            break;
        case 2:
            a.g.F({
                D: 67
            });
            break;
        case 3:
            a.g.F({
                D: 68
            });
            break;
        case 4:
            a.g.F({
                D: 69
            });
            break;
        case 5:
            a.g.F({
                D: 71
            });
            break;
        case 6:
            a.g.F({
                D: 72
            });
            break;
        case 7:
            a.g.F({
                D: 81
            });
            break;
        case 8:
            a.g.F({
                D: 89
            });
            break;
        case 9:
            a.g.F({
                D: 103
            });
            break;
        case 10:
            a.g.F({
                D: 106
            });
            break;
        case 11:
            a.g.F({
                D: 109
            });
            break;
        case 12:
            a.g.F({
                D: 112
            });
            break;
        case 13:
            a.g.F({
                D: 113
            })
        }
        if (!Dt(a))
            return a.g.F({
                D: 29
            }),
            !1;
        const c = a.B.Za ? b === 1 && cp("a")(a.l.ba) : b === 1;
        a.M = b === 9;
        a.R = b === 10;
        let d;
        (d = a.A).Ab || (d.Ab = !(c || a.M || a.R));
        if (!a.Ia())
            return a.g.F({
                D: 30
            }),
            c && a.l.oa ? (a.g.F({
                D: 31
            }),
            Gt(a, a.l.oa.href)) : c && a.l.ba && (a.g.F({
                D: 75
            }),
            a.l.ba.click(),
            a.l.ba = void 0),
            !1;
        a.A.ra = Date.now();
        X(a.j).wasReactiveAdVisible[8] = !0;
        a.R && (a.A.Gb = a.j.location.href);
        c && a.l.oa && (a.A.Gb = a.l.oa.href);
        a.B.Xe && To(a.J.Tb, {
            eventType: "triggerType",
            payload: {
                triggerType: qt(b)
            }
        });
        a.rb || w.IntersectionObserver || To(a.J.Tb, {
            eventType: "visible"
        });
        a.l.oa ? Ht(a, a.l.oa.href) : a.l.ba && cp("a")(a.l.ba) && (Ht(a, a.l.ba.href),
        a.g.F({
            D: 76
        }));
        It(a);
        I(a.j, "pagehide", a.N.aa(528, () => {
            Jt(a)
        }
        ));
        c && a.tb?.(a.A.ra);
        gs(a.ga, !0);
        Xr(a.g, {
            ke: qt(b),
            Oa: a.Oa
        });
        a.U?.dispose();
        a.g.F({
            D: 32
        });
        return !0
    }
    function At(a) {
        a.g.F({
            D: 33
        });
        a.A.Ab ? (Kt(a) ? (a.g.F({
            D: 34
        }),
        Lt(a)) : (a.g.F({
            D: 35
        }),
        Jt(a)),
        a.B.Za && a.l.ba && (a.l.ba.click(),
        cp("input")(a.l.ba) && a.l.ba.focus(),
        a.l.ba = void 0),
        a.g.F({
            D: 36
        })) : (w.setTimeout( () => {
            Jt(a)
        }
        , 1E3),
        a.M && (a.j.history.back(),
        a.j.history.back()),
        a.B.Za && a.l.ba ? (a.A.Kb && (a.A.Eb = !1),
        a.B.ne && Kt(a) && a.j.history.back(),
        a.l.ba.click(),
        a.l.ba = void 0) : a.A.Gb ? (a.A.Kb && (a.A.Eb = !1),
        Gt(a, a.A.Gb)) : a.g.F({
            D: 37
        }))
    }
    function Kt(a) {
        return a.j.location.hash.indexOf("google_vignette") !== -1
    }
    function Lt(a) {
        const b = a.j.location.href;
        b.includes("about:blank#google_vignette") ? a.g.F({
            D: 79
        }) : (a.g.F({
            D: 77
        }),
        a.j.history.replaceState(a.j.history.state, "", b.replace("#google_vignette", "")));
        Jt(a)
    }
    function Jt(a) {
        a.g.F({
            D: 38
        });
        if (!a.A.ra)
            if (a.g.F({
                D: 39
            }),
            a.B.kd)
                a.J = zt(a);
            else
                return;
        a.A.ab = !0;
        a.l.Ea && (K(a.j.document, "click", a.l.Ea),
        a.l.Ea = void 0);
        a.A.fb && a.A.fb.parentNode && (a.A.fb.parentNode.removeChild(a.A.fb),
        a.A.fb = void 0);
        a.A.eb && a.A.eb.parentNode && (a.A.eb.parentNode.removeChild(a.A.eb),
        a.A.eb = void 0);
        gs(a.ga, !1);
        a.Ba();
        a.g.F({
            D: 40
        })
    }
    function Gt(a, b) {
        a = a.j.location;
        b = od.test(b) ? b : void 0;
        b !== void 0 && a.replace(b)
    }
    function It(a) {
        if (!Kt(a)) {
            const b = new URL(a.j.location.href);
            b.hash = "google_vignette";
            !a.U?.A() || a.M || a.j.location.href.includes("about:blank") ? a.B.pe && !a.j.location.href.includes("about:blank") ? history.pushState(a.j.history.state, "", b) : a.j.location.hash = "google_vignette" : history.replaceState(a.j.history.state, "", b)
        }
        a.A.Kb = a.N.aa(526, () => {
            a.g.F({
                D: 62
            });
            if (a.A.Eb) {
                if (Kt(a))
                    a.g.F({
                        D: 64
                    }),
                    a.B.Za ? a.l.ba && (a.l.ba.click(),
                    a.l.ba = void 0) : Gt(a, a.l.oa.href);
                else {
                    const b = a.U?.l();
                    !a.ta && a.R && b && (Gt(a, b),
                    a.ta = !0);
                    a.A.Cc || a.g.F({
                        D: 80
                    });
                    a.A.Cc = !1;
                    Jt(a)
                }
                a.g.F({
                    D: 65
                })
            } else
                a.g.F({
                    D: 63
                })
        }
        );
        w.setTimeout(ra(I, a.j, "hashchange", a.A.Kb), 0)
    }
    function Dt(a, b) {
        a.g.F({
            D: 10
        });
        var c = Re();
        const d = X(a.j).wasReactiveAdVisible[9];
        b = b ? xt(a.C, b) : [];
        var e;
        if (!(e = a.B.Hd)) {
            var f = a.j;
            e = L(f);
            f = f.innerWidth;
            e = Math.abs((e && f ? e / f : 0) - 1) < .05
        }
        f = a.requestedSize.width < a.requestedSize.height === og(a.j);
        if (c - a.ob >= a.vc * 60 * 1E3)
            return a.g.F({
                D: 11
            }),
            !1;
        a: switch (a.na.tag) {
        case 0:
            c = !0;
            break a;
        case 1:
            c = !1;
            break a;
        default:
            c = !1
        }
        if (!c)
            return a.g.F({
                D: 12
            }),
            !1;
        if (a.G.Fc)
            return a.g.F({
                D: 13
            }),
            !1;
        if (Kt(a))
            return a.g.F({
                D: 14
            }),
            !1;
        if (!a.G.Ic)
            return a.g.F({
                D: 15
            }),
            !1;
        if (!a.qa && d)
            return a.g.F({
                D: 16
            }),
            !1;
        a.qa && a.g.F({
            D: 17
        });
        d && a.g.F({
            D: 18
        });
        if (b.length)
            return a.g.F({
                D: 19
            }),
            !1;
        if (!e)
            return a.g.F({
                D: 20
            }),
            !1;
        if (!f)
            return a.g.F({
                D: 21
            }),
            !1;
        a.g.F({
            D: 22
        });
        return !0
    }
    function Mt(a, b, c) {
        a = Kd("LINK", a.j.document);
        a.setAttribute("rel", c);
        a.setAttribute("href", b);
        return a
    }
    function Ht(a, b) {
        var c;
        if (!(c = !a.B.Le)) {
            a: {
                try {
                    if (!HTMLScriptElement.supports?.("speculationrules") || (new URL(b)).origin !== a.j.origin) {
                        var d = !1;
                        break a
                    }
                    const h = a.j.document.createElement("script");
                    h.type = "speculationrules";
                    c = h;
                    const k = JSON.stringify({
                        prerender: [{
                            urls: [b]
                        }]
                    }).replace(/</g, "\\u003C")
                      , m = ld();
                    var e = m ? m.createScript(k) : k;
                    var f = new rd(e);
                    if (f instanceof rd)
                        var g = f.g;
                    else
                        throw Error("");
                    c.textContent = g;
                    sd(c);
                    a.j.document.body.append(h);
                    d = !0;
                    break a
                } catch (h) {
                    a.N.Ja(1334, h);
                    d = !1;
                    break a
                }
                d = void 0
            }
            c = !d
        }
        c && (a.A.fb = Mt(a, b, "prerender"),
        a.A.eb = Mt(a, b, "prefetch"),
        a.j.document.body.appendChild(a.A.fb),
        a.j.document.body.appendChild(a.A.eb))
    }
    function Ct(a, b) {
        for (b = b.target; b; ) {
            if ("nodeName"in b && b.nodeName === "A") {
                if (wt(a.C, b, b.ownerDocument !== a.j.document))
                    return b;
                break
            } else {
                if (a.B.me && cp("button")(b))
                    return b;
                if (a.B.oe && cp("input")(b))
                    return b
            }
            b = "parentElement"in b ? b.parentElement : null
        }
        return null
    }
    function Ft(a, b) {
        a.g.F({
            D: 44
        });
        if (b)
            if (a.B.yd && !b.isTrusted)
                a.g.F({
                    D: 73
                });
            else if (b.defaultPrevented)
                a.g.F({
                    D: 46
                });
            else if (a.A.ra)
                a.g.F({
                    D: 50
                });
            else if (a.A.Gb)
                a.g.F({
                    D: 51
                });
            else if (a.L)
                a.g.F({
                    D: 47
                });
            else if (a.l.oa)
                a.g.F({
                    D: 52
                });
            else {
                var c = Ct(a, b);
                c ? Dt(a, c) ? (a.l.oa = c,
                Fe(b),
                b.preventDefault = () => b && (b.preventDefaultTriggered = !0),
                w.setTimeout(qa(a.sb, a, b), 0),
                a.B.de && (X(a.j).clickTriggeredInterstitialMayBeDisplayed = !0),
                a.g.F({
                    D: 53
                })) : a.g.F({
                    D: 49
                }) : a.g.F({
                    D: 48
                })
            }
        else
            a.g.F({
                D: 45
            })
    }
    var Nt = class extends tp {
        constructor(a, b, c, d, e, f, g, h, k, m) {
            super(a, b, c, e, {
                heavyAdInterventionResponse: h.Gd
            });
            this.ga = d;
            this.requestedSize = f;
            this.B = h;
            this.g = m;
            this.localStorage = null;
            this.ob = Re();
            this.qa = g["i-fvs"] === "true";
            this.Oa = g.qid;
            this.C = new yt(a.location.href,this.g,this.B.Za);
            this.vc = h.vc || 1440;
            this.rb = g.iobs === "true" && "IntersectionObserver"in this.j;
            st(this.C, g.stop_word?.split(";") ?? null);
            this.G = {
                Fc: !1
            };
            this.l = {};
            this.na = {
                tag: 0
            };
            this.A = {
                Ze: !0,
                ab: !1,
                Ab: !1,
                Eb: !0,
                Cc: !1
            };
            this.ta = this.R = this.M = !1;
            this.J = zt(this);
            Bt(this);
            if (k.size) {
                b = new Uo;
                b.promise.then(l => {
                    this.A.ra || this.L || Et(this, l)
                }
                );
                this.U = new gt(a,k,b,l => this.A.ra || this.L ? !1 : Et(this, l),h,this.localStorage);
                V(this, this.U);
                for (const l of k)
                    switch (l) {
                    case 1:
                        this.g.F({
                            D: 91
                        });
                        break;
                    case 2:
                        this.g.F({
                            D: 92
                        });
                        break;
                    case 3:
                        this.g.F({
                            D: 93
                        });
                        break;
                    case 4:
                        this.g.F({
                            D: 94
                        });
                        break;
                    case 5:
                        this.g.F({
                            D: 95
                        });
                        break;
                    case 6:
                        this.g.F({
                            D: 96
                        });
                        break;
                    case 7:
                        this.g.F({
                            D: 97
                        });
                        break;
                    case 8:
                        this.g.F({
                            D: 98
                        });
                        break;
                    case 9:
                        this.g.F({
                            D: 104
                        });
                        break;
                    case 10:
                        this.g.F({
                            D: 105
                        });
                        break;
                    case 11:
                        this.g.F({
                            D: 108
                        });
                        break;
                    case 12:
                        this.g.F({
                            D: 110
                        });
                        break;
                    case 13:
                        this.g.F({
                            D: 111
                        })
                    }
            }
            if (h.zc?.length && (k = Se(a))) {
                const l = new Os(a,k,e,this.Oa,h.zc,h.ja);
                V(this, l);
                this.tb = n => {
                    l.g(2, n - Ue(a))
                }
            }
        }
        W(a, b) {
            a["i-blur"] = () => {
                this.g.F({
                    D: 27
                });
                this.A.Ab = !0;
                this.A.Kb && (this.A.Eb = !0)
            }
            ;
            a["i-no"] = c => {
                this.g.F({
                    D: 26
                });
                this.na = {
                    tag: 1,
                    af: c.i_tslv ? c.i_tslv : void 0
                }
            }
            ;
            if (b.heavyAdInterventionResponse) {
                const c = hb(b.heavyAdInterventionResponse);
                if (c) {
                    const {fe: d, ee: e} = ns();
                    a["i-hai-aux"] = d;
                    e.then(f => {
                        V(this, f);
                        f.promise.then( () => c())
                    }
                    )
                }
            }
        }
        ib() {
            this.g.F({
                D: 24
            });
            super.ib();
            Kt(this) && (this.B.Za ? this.l.ba && (this.l.ba.click(),
            this.l.ba = void 0) : this.l.oa && Gt(this, this.l.oa.href),
            Jt(this));
            this.l.Ea && (K(this.j.document, "click", this.l.Ea),
            this.l.Ea = void 0);
            this.g.F({
                D: 25
            })
        }
        Ba() {}
        Ha() {
            return !1
        }
        sb(a) {
            this.g.F({
                D: 54
            });
            this.A.ra ? this.g.F({
                D: 56
            }) : this.L ? this.g.F({
                D: 57
            }) : this.l.oa ? a.preventDefaultTriggered ? (this.g.F({
                D: 59
            }),
            this.l.oa = void 0) : wt(this.C, this.l.oa, this.l.oa.ownerDocument !== this.j.document) ? Dt(this) ? (Et(this, 1),
            this.g.F({
                D: 61
            })) : (this.g.F({
                D: 60
            }),
            Gt(this, this.l.oa.href)) : (this.g.F({
                D: 55
            }),
            Gt(this, this.l.oa.href)) : this.g.F({
                D: 58
            })
        }
        Ia() {
            return !0
        }
    }
    ;
    function Ot(a, b) {
        b = b || a.j.document;
        if (!b.getElementById("vignette-style-id")) {
            var c = me(b ? new le(je(b)) : sa || (sa = new le), "STYLE");
            c.id = "vignette-style-id";
            c.textContent = "a.google_vignette_inst {border:1px solid #000;color:#6c12b9}";
            b.head.appendChild(c);
            a.K.push(c)
        }
    }
    function Pt(a, b, c) {
        let d = 0;
        for (let e = b.links.length; e >= 0; e--) {
            const f = b.links[e];
            f && (f.classList.remove("google_vignette_inst"),
            wt(a.C, f, c) && !xt(a.C, f).length && (d++,
            f.classList.add("google_vignette_inst")))
        }
        return d
    }
    var Qt = class extends Nt {
        constructor(a, b, c, d, e, f, g, h, k, m, l, n) {
            const p = [];
            Q(Zj) && Cd() === 0 && p.push(101);
            Q(ck) && p.push(102);
            Q(bk) && p.push(103);
            Q(Yj) && p.push(104);
            Q(ak) && p.push(105);
            const t = new Set([2]);
            t.add(3);
            t.add(4);
            Q(Kj) && t.add(6);
            Q(Lj) && t.add(5);
            Q(Mj) && t.add(7);
            Q(Jj) && t.add(9);
            super(a, c, f, new ms(a,c,g), Fl, e, m, {
                zc: p,
                Nb: {
                    ie: 1,
                    version: Gf()
                },
                Hd: !0,
                Gd: null,
                Za: Q(Bj),
                yd: Q(uj),
                ne: Q(Cj),
                me: Q(Aj),
                oe: Q(Dj),
                pe: Q(Ej),
                Dd: Cd() !== 0 ? ik(Oj) : ik(Nj),
                Bd: ik(Pj),
                Cd: Q(Qj),
                zd: ik(Rj),
                Vb: ik(Sj),
                fc: ik(Uj),
                Tc: ik(Vj),
                Uc: ik(Wj),
                kd: Q(Ij)
            }, Q(ek) ? n : t, l);
            this.mb = b;
            this.Ra = d;
            this.Ta = h;
            this.qb = k;
            this.K = [];
            this.X = 0;
            l.F({
                D: 88
            });
            if (this.ua = el(this.j.location, "google_ia_debug"))
                this.ma(),
                this.X = w.setInterval(qa(this.ma, this), 5E3)
        }
        Ba() {
            if (this.ua) {
                for (let b = 0; b < this.K.length; ++b) {
                    var a = this.K[b];
                    he(a.ownerNode || a.owningElement || a)
                }
                this.K = [];
                this.X && w.clearInterval(this.X)
            }
        }
        ma() {
            let a = Pt(this, this.j.document, !1);
            Ot(this);
            var b = this.j.frames;
            for (let c = 0; c < b.length; c++)
                try {
                    a += Pt(this, b[c].document, !0),
                    Ot(this, b[c].document)
                } catch (d) {}
            b = gp(this.j, 1);
            b != null && b.setLinksInstrumented(a)
        }
        Ia() {
            const a = Xn(this.Ta, this.mb)
              , b = !!a && Eq(a);
            return this.Ra || !b || Dr(Fr(), a, this.qb)
        }
        Ha(a) {
            return /aswift_[0-9]+/.test(a.id)
        }
    }
    ;
    function Rt(a) {
        const b = a.j.document.createElement("span")
          , c = Math.round((St(a) - 50) / 2);
        F(b, {
            background: "#FAFAFA",
            position: "absolute",
            left: Y(c),
            right: Y(c),
            top: Y(Tt(a) + 5),
            "box-shadow": "rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px"
        });
        b.className = `${a.l}-side-rail-dismiss-btn`;
        b.appendChild(Ut(a));
        const d = () => {
            a.G()
        }
        ;
        I(b, "click", d);
        W(a, () => K(b, "click", d));
        return b
    }
    function Tt(a) {
        return Number(ye(a.g).height || a.g.height)
    }
    function St(a) {
        return Number(ye(a.g).width || a.g.width)
    }
    function Ut(a) {
        var b = a.j.document;
        const c = b.createElementNS("http://www.w3.org/2000/svg", "svg");
        F(c, {
            position: "absolute",
            top: "0px",
            display: "block",
            width: Y(50),
            height: Y(30),
            "margin-top": "-5px",
            transform: "none",
            "pointer-events": "initial"
        });
        var d = b.createElementNS("http://www.w3.org/2000/svg", "defs")
          , e = b.createElementNS("http://www.w3.org/2000/svg", "filter");
        a = `${a.l}-side-rail-drop-shadow`;
        e.setAttribute("id", a);
        e.setAttribute("filterUnits", "userSpaceOnUse");
        e.setAttribute("color-interpolation-filters", "sRGB");
        var f = b.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
        f.setAttribute("in", "SourceAlpha");
        f.setAttribute("result", "TransferredAlpha");
        var g = b.createElementNS("http://www.w3.org/2000/svg", "feFuncR");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        g = b.createElementNS("http://www.w3.org/2000/svg", "feFuncG");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        g = b.createElementNS("http://www.w3.org/2000/svg", "feFuncB");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        f.setAttribute("in", "TransferredAlpha");
        f.setAttribute("stdDeviation", "2");
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        f.setAttribute("dx", "0");
        f.setAttribute("dy", "0");
        f.setAttribute("result", "offsetblur");
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feMerge");
        f.appendChild(b.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"));
        g = b.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
        g.setAttribute("in", "SourceGraphic");
        f.appendChild(g);
        e.appendChild(f);
        d.appendChild(e);
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg", "path");
        d.setAttribute("d", "M5,5 L5,17 A8,8 0 0,0 13,25 L37,25 A8,8 0 0,0 45,17 L45,5 Z");
        d.setAttribute("stroke", "#FAFAFA");
        d.setAttribute("stroke-width", "1");
        d.setAttribute("fill", "#FAFAFA");
        d.style.setProperty("filter", `url(#${a})`);
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg", "rect");
        d.setAttribute("x", "0");
        d.setAttribute("y", "0");
        d.setAttribute("width", "50");
        d.setAttribute("height", "5");
        d.style.setProperty("fill", "#FAFAFA");
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg", "g");
        d.setAttribute("stroke", "#616161");
        d.setAttribute("stroke-width", "2px");
        d.setAttribute("stroke-linecap", "square");
        e = b.createElementNS("http://www.w3.org/2000/svg", "line");
        e.setAttribute("x1", "18");
        e.setAttribute("y1", "18");
        e.setAttribute("x2", "25");
        e.setAttribute("y2", "12");
        d.appendChild(e);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "25");
        b.setAttribute("y1", "12");
        b.setAttribute("x2", "32");
        b.setAttribute("y2", "18");
        d.appendChild(b);
        c.appendChild(d);
        return c
    }
    var Vt = class extends U {
        constructor(a, b, c, d, e) {
            super();
            this.g = a;
            this.j = b;
            this.A = c;
            this.l = d;
            this.G = e;
            a = this.j.document.createElement("span");
            a.className = `${this.l}-side-rail-edge`;
            F(a, {
                background: "#FAFAFA",
                position: "absolute",
                left: "0px",
                top: Y(Tt(this)),
                width: Y(St(this)),
                height: Y(5),
                "box-shadow": "rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px"
            });
            this.B = a;
            this.C = Rt(this);
            this.A.appendChild(this.B);
            this.A.appendChild(this.C)
        }
    }
    ;
    const Wt = ["body", "html"];
    function Xt(a, b) {
        return ke(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c), !0) !== null
    }
    function Yt(a) {
        return ke(a, b => b.nodeType === Node.ELEMENT_NODE && b.hasAttribute("google-side-rail-overlap"), !0)?.getAttribute("google-side-rail-overlap") || null
    }
    function Zt(a, b) {
        return ke(a, c => c.nodeType === Node.ELEMENT_NODE && b.getComputedStyle(c, null).position === "fixed", !0)
    }
    function $t(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            d.position === "fixed" && d.display !== "none" && d.visibility !== "hidden" && b.push(c)
        }
        return b
    }
    function au(a, b) {
        const {top: c, left: d, bottom: e, right: f} = b.getBoundingClientRect();
        return c >= 0 && d >= 0 && e <= a.innerHeight && f <= a.innerWidth
    }
    function bu(a, b, c=!1) {
        if (b.flags.Jd) {
            var d = Yt(a);
            if (d === "true")
                return !0;
            if (d === "false")
                return !1
        } else {
            if (a.getAttribute("google-side-rail-overlap") === "true")
                return !0;
            if (a.getAttribute("google-side-rail-overlap") === "false")
                return !1
        }
        if (b.flags.ec && c)
            return !1;
        if (b.flags.Sd && Wt.includes(a.tagName.toLowerCase()))
            return !0;
        if (b.flags.Zd) {
            const {width: e, height: f, top: g} = a.getBoundingClientRect();
            a = f >= b.O * .25;
            d = e >= b.T * .9;
            return c ? d && a : d ? a ? !0 : g + (b.V.scrollY || b.V.pageYOffset) > b.O * .15 : !1
        }
        c = a.offsetHeight >= b.O * .25;
        return a.offsetWidth >= b.T * .9 && c
    }
    function cu(a) {
        return Math.round(Math.round(a / 10) * 10)
    }
    function du(a) {
        return `${a.position}-${cu(a.T)}x${cu(a.O)}-${cu(a.scrollY + a.Na)}Y`
    }
    function eu(a) {
        return `f-${du({
            position: a.position,
            Na: a.Na,
            scrollY: 0,
            T: a.T,
            O: a.O
        })}`
    }
    function fu(a, b) {
        a = Math.min(a ?? Infinity, b ?? Infinity);
        return a !== Infinity ? a : 0
    }
    function gu(a, b, c) {
        const d = X(c.V).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0)
                  , g = Math.min(e.bottom + 10, c.O)
                  , h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.T);
                for (var k = c.T * .3; f <= g; f += 10) {
                    if (e > 0 && h < k) {
                        var m = eu({
                            position: "left",
                            Na: f,
                            T: c.T,
                            O: c.O
                        });
                        b.set(m, fu(b.get(m), h))
                    }
                    if (h < c.T && e > c.T - k) {
                        m = eu({
                            position: "right",
                            Na: f,
                            T: c.T,
                            O: c.O
                        });
                        const l = c.T - e;
                        b.set(m, fu(b.get(m), l))
                    }
                }
                d.add(a)
            }
        }
    }
    function hu(a, b) {
        const c = b.V
          , d = b.flags;
        var e = `f-${cu(b.T)}x${cu(b.O)}`;
        a.has(e) || (a.set(e, 0),
        e = $t(c),
        d.Dc || d.bc ? (iu(a, b, e.filter(f => au(c, f))),
        ju(c, e.filter(f => !au(c, f)).concat(d.bc ? Array.from(c.document.querySelectorAll("[google-side-rail-overlap=false]")) : []))) : iu(a, b, e))
    }
    function iu(a, b, c) {
        var d = b.Sa;
        const e = b.V;
        X(e).sideRailProcessedFixedElements.clear();
        d = new Set([...Array.from(e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...d]);
        for (const f of c)
            Xt(f, d) || (b.flags.Oc || b.flags.ec) && bu(f, b, !0) || gu(f, a, b)
    }
    function ku(a) {
        if (a.T < 1200 || a.O < 650)
            return null;
        var b = X(a.V).sideRailAvailableSpace;
        hu(b, {
            V: a.V,
            T: a.T,
            O: a.O,
            Sa: a.Sa,
            flags: a.flags
        });
        const c = [];
        var d = a.O * .9
          , e = sg(a.V)
          , f = (a.O - d) / 2
          , g = f
          , h = d / 7;
        for (var k = 0; k < 8; k++) {
            var m = c
              , l = m.push
              , n = g
              , p = e
              , t = a.position
              , q = b
              , u = {
                V: a.V,
                T: a.T,
                O: a.O,
                Sa: a.Sa,
                flags: a.flags
            };
            if (u.flags.Oc || u.flags.ec)
                a: {
                    var y = t;
                    t = eu({
                        position: y,
                        Na: n,
                        T: u.T,
                        O: u.O
                    });
                    p = du({
                        position: y,
                        Na: n,
                        scrollY: p,
                        T: u.T,
                        O: u.O
                    });
                    if (q.has(p)) {
                        n = fu(q.get(t), q.get(p));
                        break a
                    }
                    var T = y === "left" ? 20 : u.T - 20
                      , H = T;
                    y = u.T * .3 / 5 * (y === "left" ? 1 : -1);
                    var v = 0
                      , x = !1;
                    for (var O = 0; O < 6; O++) {
                        var J = Gp(u.V.document, {
                            x: Math.round(H),
                            y: Math.round(n)
                        })
                          , S = Zt(J, u.V);
                        const M = Xt(J, u.Sa);
                        J = bu(J, u) || M;
                        if (S === null || M)
                            if (J)
                                v = Math.round(Math.abs(H - T) + 20);
                            else if (H !== T)
                                H -= y,
                                y /= 2;
                            else {
                                v = 0;
                                break
                            }
                        else {
                            q.delete(p);
                            x = !0;
                            if (!S || !bu(S, u, !0)) {
                                gu(S, q, u);
                                v = q.get(t);
                                break
                            }
                            v = Math.round(Math.abs(H - T) + 20)
                        }
                        H += y
                    }
                    x || q.set(p, v);
                    n = v
                }
            else
                a: {
                    y = t;
                    t = eu({
                        position: y,
                        Na: n,
                        T: u.T,
                        O: u.O
                    });
                    p = du({
                        position: y,
                        Na: n,
                        scrollY: p,
                        T: u.T,
                        O: u.O
                    });
                    if (q.has(p)) {
                        n = fu(q.get(t), q.get(p));
                        break a
                    }
                    H = T = y === "left" ? 20 : u.T - 20;
                    y = u.T * .3 / 5 * (y === "left" ? 1 : -1);
                    for (v = 0; v < 6; v++) {
                        x = Gp(u.V.document, {
                            x: Math.round(H),
                            y: Math.round(n)
                        });
                        O = Xt(x, u.Sa);
                        S = Zt(x, u.V);
                        if (!O && S !== null) {
                            gu(S, q, u);
                            q.delete(p);
                            break
                        }
                        if (O || bu(x, u))
                            q.set(p, Math.round(Math.abs(H - T) + 20));
                        else if (H !== T)
                            H -= y,
                            y /= 2;
                        else {
                            q.set(p, 0);
                            break
                        }
                        H += y
                    }
                    n = fu(q.get(t), q.get(p))
                }
            l.call(m, n);
            g += h
        }
        b = a.be;
        e = a.position;
        d = Math.round(d / 8);
        f = Math.round(f);
        g = a.minWidth;
        a = a.minHeight;
        l = [];
        h = Array(c.length).fill(0);
        for (m = 0; m < c.length; m++) {
            for (; l.length !== 0 && c[l[l.length - 1]] >= c[m]; )
                l.pop();
            h[m] = l.length === 0 ? 0 : l[l.length - 1] + 1;
            l.push(m)
        }
        l = [];
        k = c.length - 1;
        m = Array(c.length).fill(0);
        for (n = k; n >= 0; n--) {
            for (; l.length !== 0 && c[l[l.length - 1]] >= c[n]; )
                l.pop();
            m[n] = l.length === 0 ? k : l[l.length - 1] - 1;
            l.push(n)
        }
        l = null;
        for (k = 0; k < c.length; k++)
            if (n = {
                position: e,
                width: Math.round(c[k]),
                height: Math.round((m[k] - h[k] + 1) * d),
                offsetY: f + h[k] * d
            },
            q = n.width >= g && n.height >= a,
            b === 0 && q) {
                l = n;
                break
            } else
                b === 1 && q && (!l || n.width * n.height > l.width * l.height) && (l = n);
        return l
    }
    function ju(a, b) {
        const c = X(a);
        if (b.length && !c.g) {
            var d = new MutationObserver( () => {
                setTimeout( () => {
                    lu(a);
                    for (const e of c.sideRailMutationCallbacks)
                        e()
                }
                , 500)
            }
            );
            for (const e of b)
                d.observe(e, {
                    attributes: !0
                });
            c.g = d
        }
    }
    function mu(a, b) {
        X(a).sideRailMutationCallbacks.push(b)
    }
    function lu(a) {
        ({sideRailAvailableSpace: a} = X(a));
        const b = Array.from(a.keys()).filter(c => c.startsWith("f-"));
        for (const c of b)
            a.delete(c)
    }
    function nu(a) {
        if (a.N)
            return a.N.za(1228, () => ku(a)) || null;
        try {
            return ku(a)
        } catch {}
        return null
    }
    ;function bs(a, b) {
        a.state !== "dismissed" && (a.state = b,
        a.g.setAttribute("data-side-rail-status", a.state))
    }
    function ou(a, b) {
        if (a.state === "dismissed")
            var c = !1;
        else {
            c = a.g;
            var d = nu({
                V: a.j,
                be: 0,
                position: a.position,
                T: a.j.innerWidth,
                O: a.j.innerHeight,
                Sa: new Set([c]),
                minWidth: a.B.width + 15,
                minHeight: a.B.height + 5 + 30,
                N: a.N,
                flags: a.flags
            });
            if (d) {
                var e = Math.round(d.width - a.B.width - 15);
                a.A = Math.min(a.A ?? e, e);
                a.offsetY = Math.round(d.offsetY);
                F(c, {
                    margin: Y(0),
                    padding: Y(0),
                    position: "fixed",
                    [a.position]: Y(a.A),
                    top: Y(a.offsetY),
                    transition: "all 500ms ease-in",
                    overflow: "visible"
                });
                a.G || F(c, {
                    "z-index": "2147483647"
                });
                c = !0
            } else
                c = !1
        }
        c ? pu(a, b) : as(a, b)
    }
    function as(a, b=0) {
        a.state === "displayed" && (F(a.g, {
            transition: "all 500ms ease-in",
            opacity: "0",
            top: Y(a.offsetY + b)
        }),
        clearTimeout(a.C),
        a.C = setTimeout( () => {
            bs(a, "idle");
            F(a.g, {
                display: "none"
            })
        }
        , 500))
    }
    function pu(a, b=0) {
        a.state === "idle" && (F(a.g, {
            transition: "",
            display: "block",
            opacity: "0",
            top: Y(a.offsetY - b)
        }),
        clearTimeout(a.C),
        a.C = setTimeout( () => {
            bs(a, "displayed");
            F(a.g, {
                transition: "all 500ms ease-in",
                opacity: "1",
                top: Y(a.offsetY)
            })
        }
        , 10))
    }
    var qu = class extends Jq {
        constructor(a, b, c, d, e, f, g) {
            var h = {
                Dc: !0,
                bc: !0,
                Sd: Q(yj),
                Oc: Q(wj),
                Zd: Q(zj),
                ec: Q(xj),
                Jd: Q(vj)
            };
            super(a, b, c);
            this.B = e;
            this.N = f;
            this.G = g;
            this.flags = h;
            this.state = "idle";
            this.offsetY = this.C = 0;
            this.A = null;
            this.H = 0;
            this.position = d === 3 ? "left" : "right";
            this.J = new Vt(a,b,c,this.position, () => {
                as(this, -30);
                bs(this, "dismissed")
            }
            );
            V(this, this.J);
            bs(this, "idle");
            F(c, {
                display: "none"
            });
            const k = f.aa(273, () => {
                ou(this)
            }
            );
            I(a, "load", k);
            W(this, () => K(a, "load", k));
            const m = f.aa(267, () => {
                this.A = null;
                ou(this)
            }
            );
            I(b, "resize", m);
            W(this, () => K(b, "resize", m));
            const l = f.aa(268, fd( () => {
                const n = sg(this.j);
                ou(this, this.B.height / 3 * Math.sign(this.H - n));
                this.H = n
            }
            ));
            I(b, "scroll", l, Ce);
            W(this, () => K(b, "scroll", l));
            this.G && fq(this.G, n => {
                F(c, {
                    "z-index": String(n || 2147483647)
                })
            }
            );
            if (this.flags.Dc || this.flags.bc)
                mu(b, () => void ou(this)),
                W(this, () => {
                    const n = X(b);
                    n.g?.disconnect();
                    n.g = null;
                    n.sideRailMutationCallbacks.length = 0
                }
                )
        }
    }
    ;
    var ru = class {
        constructor(a) {
            this.g = a
        }
        verifyAndProcessConfig(a, b) {
            if (this.g !== 3 && this.g !== 4)
                return !1;
            const c = new ip;
            if (!hp(c, b))
                return !1;
            b = a.document.createElement("ins");
            b.className = "adsbygoogle";
            a.document.body.appendChild(b);
            const d = c.C || {};
            d.google_ad_client = c.A;
            d.google_ad_width = c.l;
            d.google_ad_height = c.j;
            d.google_reactive_ad_format = this.g;
            kp(b, d, a);
            return !0
        }
    }
    ;
    var su = class extends ip {
        constructor() {
            super(...arguments);
            this.K = 86400;
            this.L = new Set
        }
        G(a) {
            a.capIntervalMinutes && (this.K = a.capIntervalMinutes * 60);
            a = a.triggers;
            Array.isArray(a) && (a = new Set(a.map(b => b)),
            this.L = pt(a));
            return !0
        }
    }
    ;
    var tu = class {
        verifyAndProcessConfig(a, b) {
            var c = X(a);
            if (c.wasReactiveAdConfigReceived[8])
                return !1;
            var d = new su;
            if (!hp(d, b))
                return !1;
            c.wasReactiveAdConfigReceived[8] = !0;
            b = Kd("INS");
            b.className = "adsbygoogle";
            F(b, {
                display: "none"
            });
            a.document.documentElement.appendChild(b);
            c = d.C || {};
            c.google_ad_client = d.A;
            c.google_ad_width = d.l;
            c.google_ad_height = d.j;
            c.google_reactive_ad_format = 8;
            c.vfcs = d.K;
            d.g && (c.google_reactive_fill_message = d.g);
            d.B && (c.google_adtest = "on");
            Q(dk) ? (d = d.L,
            Q(Kj) && d.add(6),
            Q(Lj) && d.add(5),
            Q(Mj) && d.add(7),
            Q(Jj) && d.add(9),
            d = Array.from(d),
            kp(b, c, a, {
                bPXfr: {
                    hvlaW: d
                }
            })) : kp(b, c, a);
            return !0
        }
    }
    ;
    var uu = class {
        configProcessorForAdFormat(a) {
            switch (a) {
            case 1:
            case 2:
                return new np(a);
            case 3:
            case 4:
                return new ru(a);
            case 8:
                return Zf(tu);
            case 9:
                return Zf(Vr);
            default:
                return null
            }
        }
        createAdSlot(a, b, c, d, e, f, g) {
            a: {
                e = Yn(e);
                var h = b.google_reactive_ad_format;
                switch (h) {
                case 1:
                case 2:
                    var k = h;
                    g = b.google_reactive_block_location_fallback === !0;
                    h = a && el(a.location, "google_anchor_debug");
                    if (k === 2 || h)
                        k = Fp({
                            Wc: 0,
                            xc: a.innerWidth,
                            Mc: 3,
                            Xc: 0,
                            yc: Math.min(Math.round(a.innerWidth / 320 * 50), Mp) + 15,
                            Nc: 3
                        }),
                        g = Kp(a, k) && !g ? "bottom" : "top";
                    else {
                        k = a.innerWidth;
                        h = a.innerHeight;
                        var m = Math.min(Math.round(a.innerWidth / 320 * 50), Mp) + 15;
                        const l = Fp({
                            Wc: 0,
                            xc: k,
                            Mc: 3,
                            Xc: h - m,
                            yc: h,
                            Nc: 3
                        });
                        m > 25 && l.push({
                            x: k - 25,
                            y: h - 25
                        });
                        g = Kp(a, l) && !g ? "top" : "bottom"
                    }
                    k = b.google_reactive_anchor_plus_max_height;
                    h = b.google_reactive_anchor_plus_animation_speed_px_per_millis;
                    k !== void 0 && (c.style.height = "");
                    m = new Wr({
                        Bb: window.location.href,
                        xb: 9,
                        Wd: Hd(a),
                        yb: Gf()
                    });
                    m.Zb({
                        D: 8
                    });
                    c = new fr(c,a,f,g,d,e,k ? {
                        maxHeight: k,
                        bb: h
                    } : void 0,m);
                    new Ep(a,c,b.google_reactive_fill_message,b.gdvucrm);
                    break a;
                case 3:
                case 4:
                    new cs(a,new qu(c,a,d,h,new ce(b.google_ad_width,b.google_ad_height),Hl,new gq(a)));
                    break a;
                case 8:
                    k = new Set;
                    g.OSwJs === 1 && (g = g.mqAVR?.bPXfr?.hvlaW) && (k = new Set(g));
                    new Qt(a,f,c,b.google_adtest === "on",new ce(b.google_ad_width,b.google_ad_height),Hl,d,e,b.vfcs,b.google_reactive_fill_message,new $r({
                        Zc: Hd(a),
                        Bb: window.location.href,
                        xb: 9,
                        yb: Gf(),
                        nb: Vf
                    }),k);
                    break a;
                case 9:
                    g = b.google_rasc;
                    if (g === void 0 || g === null)
                        k = null;
                    else
                        try {
                            k = hr(g)
                        } catch (l) {
                            Ml("rasf_fsi_ama", {}, .1),
                            k = null
                        }
                    g = k || new gr;
                    new Tr(a,f,c,g,b.google_adtest === "on",d,e)
                }
            }
        }
    }
    ;
    function vu() {
        var a = window;
        return w.google_adtest === "on" || w.google_adbreak_test === "on" || a.location.host.endsWith("h5games.usercontent.goog") || a.location.host === "gamesnacks.com" ? a.document.querySelector('meta[name="h5-games-eids"]')?.getAttribute("content")?.split(",").map(b => Math.floor(Number(b))).filter(b => !isNaN(b) && b > 0) || [] : []
    }
    ;class wu {
    }
    ;function xu() {
        var a = w.ggeac || (w.ggeac = {});
        ag(Zf(bg), a);
        yu(a);
        Zf(wu);
        Zf(fk).g()
    }
    function yu(a) {
        const b = Zf(fk);
        b.j = (c, d) => $f(5, a, () => !1)(c, d, 1);
        b.l = (c, d) => $f(6, a, () => 0)(c, d, 1);
        b.B = (c, d) => $f(7, a, () => "")(c, d, 1);
        b.C = (c, d) => $f(8, a, () => [])(c, d, 1);
        b.A = (c, d) => $f(17, a, () => [])(c, d, 1);
        b.g = () => {
            $f(15, a, () => {}
            )(1)
        }
    }
    ;function zu() {
        var a = Au().jTCuI;
        Hl.l(b => {
            b.shv = String(a);
            b.mjsv = Gf();
            const c = Vf()
              , d = vu();
            b.eid = c.concat(d).join(",")
        }
        )
    }
    ;function Au() {
        var a = window;
        return a.adsbygoogle && "pageState"in a.adsbygoogle && a.adsbygoogle.pageState ? a.adsbygoogle.pageState : {
            stavq: 0,
            jTCuI: "",
            OmOVT: !1,
            xujKL: !1,
            AyxaY: void 0,
            SLqBY: "",
            xVQAt: "",
            OSCLM: {
                UWEfJ: !1,
                YguOd: !1,
                SVQEK: !1
            },
            jzoix: {
                PygXN: []
            },
            FJPve: !1,
            GLnKw: !1,
            tYcft: Promise.resolve(void 0),
            EGzMj: Promise.resolve(!0),
            uNjDc: !1
        }
    }
    ;function Bu() {
        var a = new uu;
        {
            w.google_llp || (w.google_llp = {});
            var b = w.google_llp;
            let c = b[1];
            if (!c) {
                const {promise: d, resolve: e} = new Uo;
                c = {
                    promise: d,
                    resolve: e
                };
                b[1] = c
            }
            b = c
        }
        b.resolve(a)
    }
    ;Kl(210, () => {
        const a = new Yf(Gf());
        try {
            Sa(b => {
                xl(a, 1195, b)
            }
            )
        } catch (b) {}
        zu();
        xu();
        Bu()
    }
    );
}
).call(this, "");
