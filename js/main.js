!function (e, t) {
    'use strict';
    'object' == typeof module && 'object' == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error('jQuery requires a window with a document');
        return t(e);
    } : t(e);
}('undefined' != typeof window ? window : this, function (e, t) {
    'use strict';

    function n(e, t) {
        var n = (t = t || ne).createElement('script');
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
    }

    function i(e) {
        var t = !!e && 'length' in e && e.length, n = me.type(e);
        return 'function' !== n && !me.isWindow(e) && ('array' === n || 0 === t || 'number' == typeof t && t > 0 && t - 1 in e);
    }

    function o(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }

    function r(e, t, n) {
        return me.isFunction(t) ? me.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n;
        }) : t.nodeType ? me.grep(e, function (e) {
            return e === t !== n;
        }) : 'string' != typeof t ? me.grep(e, function (e) {
            return ae.call(t, e) > -1 !== n;
        }) : Se.test(t) ? me.filter(t, e, n) : (t = me.filter(t, e), me.grep(e, function (e) {
            return ae.call(t, e) > -1 !== n && 1 === e.nodeType;
        }));
    }

    function s(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e;
    }

    function a(e) {
        var t = {};
        return me.each(e.match(Oe) || [], function (e, n) {
            t[n] = !0;
        }), t;
    }

    function l(e) {
        return e;
    }

    function c(e) {
        throw e;
    }

    function d(e, t, n, i) {
        var o;
        try {
            e && me.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && me.isFunction(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }

    function u() {
        ne.removeEventListener('DOMContentLoaded', u), e.removeEventListener('load', u), me.ready();
    }

    function p() {
        this.expando = me.expando + p.uid++;
    }

    function f(e) {
        return 'true' === e || 'false' !== e && ('null' === e ? null : e === +e + '' ? +e : Me.test(e) ? JSON.parse(e) : e);
    }

    function h(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = 'data-' + t.replace(qe, '-$&').toLowerCase(), 'string' == typeof (n = e.getAttribute(i))) {
            try {
                n = f(n);
            } catch (e) {
            }
            Le.set(e, t, n);
        } else n = void 0;
        return n;
    }

    function m(e, t, n, i) {
        var o, r = 1, s = 20, a = i ? function () {
                return i.cur();
            } : function () {
                return me.css(e, t, '');
            }, l = a(), c = n && n[3] || (me.cssNumber[t] ? '' : 'px'),
            d = (me.cssNumber[t] || 'px' !== c && +l) && Fe.exec(me.css(e, t));
        if (d && d[3] !== c) {
            c = c || d[3], n = n || [], d = +l || 1;
            do {
                r = r || '.5', d /= r, me.style(e, t, d + c);
            } while (r !== (r = a() / l) && 1 !== r && --s);
        }
        return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o;
    }

    function g(e) {
        var t, n = e.ownerDocument, i = e.nodeName, o = Be[i];
        return o || (t = n.body.appendChild(n.createElement(i)), o = me.css(t, 'display'), t.parentNode.removeChild(t), 'none' === o && (o = 'block'), Be[i] = o, o);
    }

    function v(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++) (i = e[r]).style && (n = i.style.display, t ? ('none' === n && (o[r] = De.get(i, 'display') || null, o[r] || (i.style.display = '')), '' === i.style.display && Re(i) && (o[r] = g(i))) : 'none' !== n && (o[r] = 'none', De.set(i, 'display', n)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e;
    }

    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || '*') : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || '*') : [], void 0 === t || t && o(e, t) ? me.merge([e], n) : n;
    }

    function w(e, t) {
        for (var n = 0, i = e.length; n < i; n++) De.set(e[n], 'globalEval', !t || De.get(t[n], 'globalEval'));
    }

    function b(e, t, n, i, o) {
        for (var r, s, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++) if ((r = e[f]) || 0 === r) if ('object' === me.type(r)) me.merge(p, r.nodeType ? [r] : r); else if (Ge.test(r)) {
            for (s = s || u.appendChild(t.createElement('div')), a = (Ue.exec(r) || ['', ''])[1].toLowerCase(), l = Ye[a] || Ye._default, s.innerHTML = l[1] + me.htmlPrefilter(r) + l[2], d = l[0]; d--;) s = s.lastChild;
            me.merge(p, s.childNodes), (s = u.firstChild).textContent = '';
        } else p.push(t.createTextNode(r));
        for (u.textContent = '', f = 0; r = p[f++];) if (i && me.inArray(r, i) > -1) o && o.push(r); else if (c = me.contains(r.ownerDocument, r), s = y(u.appendChild(r), 'script'), c && w(s), n) for (d = 0; r = s[d++];) Xe.test(r.type || '') && n.push(r);
        return u;
    }

    function x() {
        return !0;
    }

    function k() {
        return !1;
    }

    function T() {
        try {
            return ne.activeElement;
        } catch (e) {
        }
    }

    function C(e, t, n, i, o, r) {
        var s, a;
        if ('object' == typeof t) {
            'string' != typeof n && (i = i || n, n = void 0);
            for (a in t) C(e, a, n, i, t[a], r);
            return e;
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ('string' == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = k; else if (!o) return e;
        return 1 === r && (s = o, o = function (e) {
            return me().off(e), s.apply(this, arguments);
        }, o.guid = s.guid || (s.guid = me.guid++)), e.each(function () {
            me.event.add(this, t, o, i, n);
        });
    }

    function S(e, t) {
        return o(e, 'table') && o(11 !== t.nodeType ? t : t.firstChild, 'tr') ? me('>tbody', e)[0] || e : e;
    }

    function $(e) {
        return e.type = (null !== e.getAttribute('type')) + '/' + e.type, e;
    }

    function E(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute('type'), e;
    }

    function A(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (De.hasData(e) && (r = De.access(e), s = De.set(t, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c) for (n = 0, i = c[o].length; n < i; n++) me.event.add(t, o, c[o][n]);
            }
            Le.hasData(e) && (a = Le.access(e), l = me.extend({}, a), Le.set(t, l));
        }
    }

    function j(e, t) {
        var n = t.nodeName.toLowerCase();
        'input' === n && Qe.test(e.type) ? t.checked = e.checked : 'input' !== n && 'textarea' !== n || (t.defaultValue = e.defaultValue);
    }

    function O(e, t, i, o) {
        t = re.apply([], t);
        var r, s, a, l, c, d, u = 0, p = e.length, f = p - 1, h = t[0], m = me.isFunction(h);
        if (m || p > 1 && 'string' == typeof h && !fe.checkClone && nt.test(h)) return e.each(function (n) {
            var r = e.eq(n);
            m && (t[0] = h.call(this, n, r.html())), O(r, t, i, o);
        });
        if (p && (r = b(t, e[0].ownerDocument, !1, e, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
            for (l = (a = me.map(y(r, 'script'), $)).length; u < p; u++) c = r, u !== f && (c = me.clone(c, !0, !0), l && me.merge(a, y(c, 'script'))), i.call(e[u], c, u);
            if (l) for (d = a[a.length - 1].ownerDocument, me.map(a, E), u = 0; u < l; u++) c = a[u], Xe.test(c.type || '') && !De.access(c, 'globalEval') && me.contains(d, c) && (c.src ? me._evalUrl && me._evalUrl(c.src) : n(c.textContent.replace(ot, ''), d));
        }
        return e;
    }

    function P(e, t, n) {
        for (var i, o = t ? me.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || me.cleanData(y(i)), i.parentNode && (n && me.contains(i.ownerDocument, i) && w(y(i, 'script')), i.parentNode.removeChild(i));
        return e;
    }

    function H(e, t, n) {
        var i, o, r, s, a = e.style;
        return (n = n || at(e)) && ('' !== (s = n.getPropertyValue(t) || n[t]) || me.contains(e.ownerDocument, e) || (s = me.style(e, t)), !fe.pixelMarginRight() && st.test(s) && rt.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + '' : s;
    }

    function I(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments);
            }
        };
    }

    function N(e) {
        if (e in ft) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = pt.length; n--;) if ((e = pt[n] + t) in ft) return e;
    }

    function D(e) {
        var t = me.cssProps[e];
        return t || (t = me.cssProps[e] = N(e) || e), t;
    }

    function L(e, t, n) {
        var i = Fe.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t;
    }

    function M(e, t, n, i, o) {
        var r, s = 0;
        for (r = n === (i ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0; r < 4; r += 2) 'margin' === n && (s += me.css(e, n + _e[r], !0, o)), i ? ('content' === n && (s -= me.css(e, 'padding' + _e[r], !0, o)), 'margin' !== n && (s -= me.css(e, 'border' + _e[r] + 'Width', !0, o))) : (s += me.css(e, 'padding' + _e[r], !0, o), 'padding' !== n && (s += me.css(e, 'border' + _e[r] + 'Width', !0, o)));
        return s;
    }

    function q(e, t, n) {
        var i, o = at(e), r = H(e, t, o), s = 'border-box' === me.css(e, 'boxSizing', !1, o);
        return st.test(r) ? r : (i = s && (fe.boxSizingReliable() || r === e.style[t]), 'auto' === r && (r = e['offset' + t[0].toUpperCase() + t.slice(1)]), (r = parseFloat(r) || 0) + M(e, t, n || (s ? 'border' : 'content'), i, o) + 'px');
    }

    function z(e, t, n, i, o) {
        return new z.prototype.init(e, t, n, i, o);
    }

    function F() {
        mt && (!1 === ne.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(F) : e.setTimeout(F, me.fx.interval), me.fx.tick());
    }

    function _() {
        return e.setTimeout(function () {
            ht = void 0;
        }), ht = me.now();
    }

    function R(e, t) {
        var n, i = 0, o = {height: e};
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = _e[i], o['margin' + n] = o['padding' + n] = e;
        return t && (o.opacity = o.width = e), o;
    }

    function W(e, t, n) {
        for (var i, o = (U.tweeners[t] || []).concat(U.tweeners['*']), r = 0, s = o.length; r < s; r++) if (i = o[r].call(n, t, e)) return i;
    }

    function B(e, t, n) {
        var i, o, r, s, a, l, c, d, u = 'width' in t || 'height' in t, p = this, f = {}, h = e.style,
            m = e.nodeType && Re(e), g = De.get(e, 'fxshow');
        n.queue || (null == (s = me._queueHooks(e, 'fx')).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
            s.unqueued || a();
        }), s.unqueued++, p.always(function () {
            p.always(function () {
                s.unqueued--, me.queue(e, 'fx').length || s.empty.fire();
            });
        }));
        for (i in t) if (o = t[i], gt.test(o)) {
            if (delete t[i], r = r || 'toggle' === o, o === (m ? 'hide' : 'show')) {
                if ('show' !== o || !g || void 0 === g[i]) continue;
                m = !0;
            }
            f[i] = g && g[i] || me.style(e, i);
        }
        if ((l = !me.isEmptyObject(t)) || !me.isEmptyObject(f)) {
            u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = De.get(e, 'display')), 'none' === (d = me.css(e, 'display')) && (c ? d = c : (v([e], !0), c = e.style.display || c, d = me.css(e, 'display'), v([e]))), ('inline' === d || 'inline-block' === d && null != c) && 'none' === me.css(e, 'float') && (l || (p.done(function () {
                h.display = c;
            }), null == c && (d = h.display, c = 'none' === d ? '' : d)), h.display = 'inline-block')), n.overflow && (h.overflow = 'hidden', p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), l = !1;
            for (i in f) l || (g ? 'hidden' in g && (m = g.hidden) : g = De.access(e, 'fxshow', {display: c}), r && (g.hidden = !m), m && v([e], !0), p.done(function () {
                m || v([e]), De.remove(e, 'fxshow');
                for (i in f) me.style(e, i, f[i]);
            })), l = W(m ? g[i] : 0, i, p), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0));
        }
    }

    function Q(e, t) {
        var n, i, o, r, s;
        for (n in e) if (i = me.camelCase(n), o = t[i], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = me.cssHooks[i]) && 'expand' in s) {
            r = s.expand(r), delete e[i];
            for (n in r) n in e || (e[n] = r[n], t[n] = o);
        } else t[i] = o;
    }

    function U(e, t, n) {
        var i, o, r = 0, s = U.prefilters.length, a = me.Deferred().always(function () {
            delete l.elem;
        }), l = function () {
            if (o) return !1;
            for (var t = ht || _(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
            return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
        }, c = a.promise({
            elem: e,
            props: me.extend({}, t),
            opts: me.extend(!0, {specialEasing: {}, easing: me.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ht || _(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = me.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i), i;
            },
            stop: function (t) {
                var n = 0, i = t ? c.tweens.length : 0;
                if (o) return this;
                for (o = !0; n < i; n++) c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
            }
        }), d = c.props;
        for (Q(d, c.opts.specialEasing); r < s; r++) if (i = U.prefilters[r].call(c, e, d, c.opts)) return me.isFunction(i.stop) && (me._queueHooks(c.elem, c.opts.queue).stop = me.proxy(i.stop, i)), i;
        return me.map(d, W, c), me.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), me.fx.timer(me.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c;
    }

    function X(e) {
        return (e.match(Oe) || []).join(' ');
    }

    function Y(e) {
        return e.getAttribute && e.getAttribute('class') || '';
    }

    function G(e, t, n, i) {
        var o;
        if (Array.isArray(t)) me.each(t, function (t, o) {
            n || Et.test(e) ? i(e, o) : G(e + '[' + ('object' == typeof o && null != o ? t : '') + ']', o, n, i);
        }); else if (n || 'object' !== me.type(t)) i(e, t); else for (o in t) G(e + '[' + o + ']', t[o], n, i);
    }

    function V(e) {
        return function (t, n) {
            'string' != typeof t && (n = t, t = '*');
            var i, o = 0, r = t.toLowerCase().match(Oe) || [];
            if (me.isFunction(n)) for (; i = r[o++];) '+' === i[0] ? (i = i.slice(1) || '*', (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
        };
    }

    function J(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, me.each(e[a] || [], function (e, a) {
                var c = a(t, n, i);
                return 'string' != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1);
            }), l;
        }

        var r = {}, s = e === zt;
        return o(t.dataTypes[0]) || !r['*'] && o('*');
    }

    function K(e, t) {
        var n, i, o = me.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && me.extend(!0, e, i), e;
    }

    function Z(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader('Content-Type'));
        if (i) for (o in a) if (a[o] && a[o].test(i)) {
            l.unshift(o);
            break;
        }
        if (l[0] in n) r = l[0]; else {
            for (o in n) {
                if (!l[0] || e.converters[o + ' ' + l[0]]) {
                    r = o;
                    break;
                }
                s || (s = o);
            }
            r = r || s;
        }
        if (r) return r !== l[0] && l.unshift(r), n[r];
    }

    function ee(e, t, n, i) {
        var o, r, s, a, l, c = {}, d = e.dataTypes.slice();
        if (d[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (r = d.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift()) if ('*' === r) r = l; else if ('*' !== l && l !== r) {
            if (!(s = c[l + ' ' + r] || c['* ' + r])) for (o in c) if ((a = o.split(' '))[1] === r && (s = c[l + ' ' + a[0]] || c['* ' + a[0]])) {
                !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1]));
                break;
            }
            if (!0 !== s) if (s && e.throws) t = s(t); else try {
                t = s(t);
            } catch (e) {
                return {state: 'parsererror', error: s ? e : 'No conversion from ' + l + ' to ' + r};
            }
        }
        return {state: 'success', data: t};
    }

    var te = [], ne = e.document, ie = Object.getPrototypeOf, oe = te.slice, re = te.concat, se = te.push,
        ae = te.indexOf, le = {}, ce = le.toString, de = le.hasOwnProperty, ue = de.toString, pe = ue.call(Object),
        fe = {}, he = '3.2.1', me = function (e, t) {
            return new me.fn.init(e, t);
        }, ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ve = /^-ms-/, ye = /-([a-z])/g, we = function (e, t) {
            return t.toUpperCase();
        };
    me.fn = me.prototype = {
        jquery: he, constructor: me, length: 0, toArray: function () {
            return oe.call(this);
        }, get: function (e) {
            return null == e ? oe.call(this) : e < 0 ? this[e + this.length] : this[e];
        }, pushStack: function (e) {
            var t = me.merge(this.constructor(), e);
            return t.prevObject = this, t;
        }, each: function (e) {
            return me.each(this, e);
        }, map: function (e) {
            return this.pushStack(me.map(this, function (t, n) {
                return e.call(t, n, t);
            }));
        }, slice: function () {
            return this.pushStack(oe.apply(this, arguments));
        }, first: function () {
            return this.eq(0);
        }, last: function () {
            return this.eq(-1);
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        }, end: function () {
            return this.prevObject || this.constructor();
        }, push: se, sort: te.sort, splice: te.splice
    }, me.extend = me.fn.extend = function () {
        var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ('boolean' == typeof s && (c = s, s = arguments[a] || {}, a++), 'object' == typeof s || me.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], i = e[t], s !== i && (c && i && (me.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && me.isPlainObject(n) ? n : {}, s[t] = me.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s;
    }, me.extend({
        expando: 'jQuery' + (he + Math.random()).replace(/\D/g, ''), isReady: !0, error: function (e) {
            throw new Error(e);
        }, noop: function () {
        }, isFunction: function (e) {
            return 'function' === me.type(e);
        }, isWindow: function (e) {
            return null != e && e === e.window;
        }, isNumeric: function (e) {
            var t = me.type(e);
            return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || '[object Object]' !== ce.call(e) || (t = ie(e)) && ('function' != typeof (n = de.call(t, 'constructor') && t.constructor) || ue.call(n) !== pe));
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
        }, type: function (e) {
            return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? le[ce.call(e)] || 'object' : typeof e;
        }, globalEval: function (e) {
            n(e);
        }, camelCase: function (e) {
            return e.replace(ve, 'ms-').replace(ye, we);
        }, each: function (e, t) {
            var n, o = 0;
            if (i(e)) for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++) ; else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
            return e;
        }, trim: function (e) {
            return null == e ? '' : (e + '').replace(ge, '');
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? me.merge(n, 'string' == typeof e ? [e] : e) : se.call(n, e)), n;
        }, inArray: function (e, t, n) {
            return null == t ? -1 : ae.call(t, e, n);
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e;
        }, grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i;
        }, map: function (e, t, n) {
            var o, r, s = 0, a = [];
            if (i(e)) for (o = e.length; s < o; s++) null != (r = t(e[s], s, n)) && a.push(r); else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
            return re.apply([], a);
        }, guid: 1, proxy: function (e, t) {
            var n, i, o;
            if ('string' == typeof t && (n = e[t], t = e, e = n), me.isFunction(e)) return i = oe.call(arguments, 2), o = function () {
                return e.apply(t || this, i.concat(oe.call(arguments)));
            }, o.guid = e.guid = e.guid || me.guid++, o;
        }, now: Date.now, support: fe
    }), 'function' == typeof Symbol && (me.fn[Symbol.iterator] = te[Symbol.iterator]), me.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
        le['[object ' + t + ']'] = t.toLowerCase();
    });
    var be = function (e) {
        function t(e, t, n, i) {
            var o, r, s, a, l, d, p, f = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [], 'string' != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : z) !== P && O(t), t = t || P, I)) {
                if (11 !== h && (l = me.exec(e))) if (o = l[1]) {
                    if (9 === h) {
                        if (!(s = t.getElementById(o))) return n;
                        if (s.id === o) return n.push(s), n;
                    } else if (f && (s = f.getElementById(o)) && M(t, s) && s.id === o) return n.push(s), n;
                } else {
                    if (l[2]) return V.apply(n, t.getElementsByTagName(e)), n;
                    if ((o = l[3]) && b.getElementsByClassName && t.getElementsByClassName) return V.apply(n, t.getElementsByClassName(o)), n;
                }
                if (b.qsa && !B[e + ' '] && (!N || !N.test(e))) {
                    if (1 !== h) f = t, p = e; else if ('object' !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute('id')) ? a = a.replace(we, be) : t.setAttribute('id', a = q), r = (d = C(e)).length; r--;) d[r] = '#' + a + ' ' + u(d[r]);
                        p = d.join(','), f = ge.test(e) && c(t.parentNode) || t;
                    }
                    if (p) try {
                        return V.apply(n, f.querySelectorAll(p)), n;
                    } catch (e) {
                    } finally {
                        a === q && t.removeAttribute('id');
                    }
                }
            }
            return $(e.replace(re, '$1'), t, n, i);
        }

        function n() {
            function e(n, i) {
                return t.push(n + ' ') > x.cacheLength && delete e[t.shift()], e[n + ' '] = i;
            }

            var t = [];
            return e;
        }

        function i(e) {
            return e[q] = !0, e;
        }

        function o(e) {
            var t = P.createElement('fieldset');
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }

        function r(e, t) {
            for (var n = e.split('|'), i = n.length; i--;) x.attrHandle[n[i]] = t;
        }

        function s(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1;
        }

        function a(e) {
            return function (t) {
                return 'form' in t ? t.parentNode && !1 === t.disabled ? 'label' in t ? 'label' in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ke(t) === e : t.disabled === e : 'label' in t && t.disabled === e;
            };
        }

        function l(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]));
                });
            });
        }

        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }

        function d() {
        }

        function u(e) {
            for (var t = 0, n = e.length, i = ''; t < n; t++) i += e[t].value;
            return i;
        }

        function p(e, t, n) {
            var i = t.dir, o = t.next, r = o || i, s = n && 'parentNode' === r, a = _++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];) if (1 === t.nodeType || s) return e(t, n, o);
                return !1;
            } : function (t, n, l) {
                var c, d, u, p = [F, a];
                if (l) {
                    for (; t = t[i];) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                } else for (; t = t[i];) if (1 === t.nodeType || s) if (u = t[q] || (t[q] = {}), d = u[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t; else {
                    if ((c = d[r]) && c[0] === F && c[1] === a) return p[2] = c[2];
                    if (d[r] = p, p[2] = e(t, n, l)) return !0;
                }
                return !1;
            };
        }

        function f(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
                return !0;
            } : e[0];
        }

        function h(e, n, i) {
            for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
            return i;
        }

        function m(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            return s;
        }

        function g(e, t, n, o, r, s) {
            return o && !o[q] && (o = g(o)), r && !r[q] && (r = g(r, s)), i(function (i, s, a, l) {
                var c, d, u, p = [], f = [], g = s.length, v = i || h(t || '*', a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? v : m(v, p, e, a, l), w = n ? r || (i ? e : g || o) ? [] : s : y;
                if (n && n(y, w, a, l), o) for (c = m(w, f), o(c, [], a, l), d = c.length; d--;) (u = c[d]) && (w[f[d]] = !(y[f[d]] = u));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], d = w.length; d--;) (u = w[d]) && c.push(y[d] = u);
                            r(null, w = [], c, l);
                        }
                        for (d = w.length; d--;) (u = w[d]) && (c = r ? K(i, u) : p[d]) > -1 && (i[c] = !(s[c] = u));
                    }
                } else w = m(w === s ? w.splice(g, w.length) : w), r ? r(null, s, w, l) : V.apply(s, w);
            });
        }

        function v(e) {
            for (var t, n, i, o = e.length, r = x.relative[e[0].type], s = r || x.relative[' '], a = r ? 1 : 0, l = p(function (e) {
                return e === t;
            }, s, !0), c = p(function (e) {
                return K(t, e) > -1;
            }, s, !0), d = [function (e, n, i) {
                var o = !r && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null, o;
            }]; a < o; a++) if (n = x.relative[e[a].type]) d = [p(f(d), n)]; else {
                if ((n = x.filter[e[a].type].apply(null, e[a].matches))[q]) {
                    for (i = ++a; i < o && !x.relative[e[i].type]; i++) ;
                    return g(a > 1 && f(d), a > 1 && u(e.slice(0, a - 1).concat({value: ' ' === e[a - 2].type ? '*' : ''})).replace(re, '$1'), n, a < i && v(e.slice(a, i)), i < o && v(e = e.slice(i)), i < o && u(e));
                }
                d.push(n);
            }
            return f(d);
        }

        function y(e, n) {
            var o = n.length > 0, r = e.length > 0, s = function (i, s, a, l, c) {
                var d, u, p, f = 0, h = '0', g = i && [], v = [], y = E, w = i || r && x.find.TAG('*', c),
                    b = F += null == y ? 1 : Math.random() || .1, k = w.length;
                for (c && (E = s === P || s || c); h !== k && null != (d = w[h]); h++) {
                    if (r && d) {
                        for (u = 0, s || d.ownerDocument === P || (O(d), a = !I); p = e[u++];) if (p(d, s || P, a)) {
                            l.push(d);
                            break;
                        }
                        c && (F = b);
                    }
                    o && ((d = !p && d) && f--, i && g.push(d));
                }
                if (f += h, o && h !== f) {
                    for (u = 0; p = n[u++];) p(g, v, s, a);
                    if (i) {
                        if (f > 0) for (; h--;) g[h] || v[h] || (v[h] = Y.call(l));
                        v = m(v);
                    }
                    V.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l);
                }
                return c && (F = b, E = y), g;
            };
            return o ? i(s) : s;
        }

        var w, b, x, k, T, C, S, $, E, A, j, O, P, H, I, N, D, L, M, q = 'sizzle' + 1 * new Date, z = e.document, F = 0,
            _ = 0, R = n(), W = n(), B = n(), Q = function (e, t) {
                return e === t && (j = !0), 0;
            }, U = {}.hasOwnProperty, X = [], Y = X.pop, G = X.push, V = X.push, J = X.slice, K = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1;
            },
            Z = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
            ee = '[\\x20\\t\\r\\n\\f]', te = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
            ne = '\\[' + ee + '*(' + te + ')(?:' + ee + '*([*^$|!~]?=)' + ee + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + te + '))|)' + ee + '*\\]',
            ie = ':(' + te + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + ne + ')*)|.*)\\)|)',
            oe = new RegExp(ee + '+', 'g'), re = new RegExp('^' + ee + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ee + '+$', 'g'),
            se = new RegExp('^' + ee + '*,' + ee + '*'), ae = new RegExp('^' + ee + '*([>+~]|' + ee + ')' + ee + '*'),
            le = new RegExp('=' + ee + '*([^\\]\'"]*?)' + ee + '*\\]', 'g'), ce = new RegExp(ie),
            de = new RegExp('^' + te + '$'), ue = {
                ID: new RegExp('^#(' + te + ')'),
                CLASS: new RegExp('^\\.(' + te + ')'),
                TAG: new RegExp('^(' + te + '|[*])'),
                ATTR: new RegExp('^' + ne),
                PSEUDO: new RegExp('^' + ie),
                CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + ee + '*(even|odd|(([+-]|)(\\d*)n|)' + ee + '*(?:([+-]|)' + ee + '*(\\d+)|))' + ee + '*\\)|)', 'i'),
                bool: new RegExp('^(?:' + Z + ')$', 'i'),
                needsContext: new RegExp('^' + ee + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + ee + '*((?:-\\d)?\\d*)' + ee + '*\\)|)(?=[^-]|$)', 'i')
            }, pe = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/,
            ve = new RegExp('\\\\([\\da-f]{1,6}' + ee + '?|(' + ee + ')|.)', 'ig'), ye = function (e, t, n) {
                var i = '0x' + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
            }, we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, be = function (e, t) {
                return t ? '\0' === e ? '�' : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ' : '\\' + e;
            }, xe = function () {
                O();
            }, ke = p(function (e) {
                return !0 === e.disabled && ('form' in e || 'label' in e);
            }, {dir: 'parentNode', next: 'legend'});
        try {
            V.apply(X = J.call(z.childNodes), z.childNodes), X[z.childNodes.length].nodeType;
        } catch (e) {
            V = {
                apply: X.length ? function (e, t) {
                    G.apply(e, J.call(t));
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1;
                }
            };
        }
        b = t.support = {}, T = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && 'HTML' !== t.nodeName;
        }, O = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : z;
            return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, H = P.documentElement, I = !T(P), z !== P && (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener('unload', xe, !1) : n.attachEvent && n.attachEvent('onunload', xe)), b.attributes = o(function (e) {
                return e.className = 'i', !e.getAttribute('className');
            }), b.getElementsByTagName = o(function (e) {
                return e.appendChild(P.createComment('')), !e.getElementsByTagName('*').length;
            }), b.getElementsByClassName = he.test(P.getElementsByClassName), b.getById = o(function (e) {
                return H.appendChild(e).id = q, !P.getElementsByName || !P.getElementsByName(q).length;
            }), b.getById ? (x.filter.ID = function (e) {
                var t = e.replace(ve, ye);
                return function (e) {
                    return e.getAttribute('id') === t;
                };
            }, x.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                }
            }) : (x.filter.ID = function (e) {
                var t = e.replace(ve, ye);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                    return n && n.value === t;
                };
            }, x.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && I) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode('id')) && n.value === e) return [r];
                        for (o = t.getElementsByName(e), i = 0; r = o[i++];) if ((n = r.getAttributeNode('id')) && n.value === e) return [r];
                    }
                    return [];
                }
            }), x.find.TAG = b.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0;
            } : function (e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ('*' === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return r;
            }, x.find.CLASS = b.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && I) return t.getElementsByClassName(e);
            }, D = [], N = [], (b.qsa = he.test(P.querySelectorAll)) && (o(function (e) {
                H.appendChild(e).innerHTML = '<a id=\'' + q + '\'></a><select id=\'' + q + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>', e.querySelectorAll('[msallowcapture^=\'\']').length && N.push('[*^$]=' + ee + '*(?:\'\'|"")'), e.querySelectorAll('[selected]').length || N.push('\\[' + ee + '*(?:value|' + Z + ')'), e.querySelectorAll('[id~=' + q + '-]').length || N.push('~='), e.querySelectorAll(':checked').length || N.push(':checked'), e.querySelectorAll('a#' + q + '+*').length || N.push('.#.+[+~]');
            }), o(function (e) {
                e.innerHTML = '<a href=\'\' disabled=\'disabled\'></a><select disabled=\'disabled\'><option/></select>';
                var t = P.createElement('input');
                t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && N.push('name' + ee + '*[*^$|!~]?='), 2 !== e.querySelectorAll(':enabled').length && N.push(':enabled', ':disabled'), H.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(':disabled').length && N.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), N.push(',.*:');
            })), (b.matchesSelector = he.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function (e) {
                b.disconnectedMatch = L.call(e, '*'), L.call(e, '[s!=\'\']:x'), D.push('!=', ie);
            }), N = N.length && new RegExp(N.join('|')), D = D.length && new RegExp(D.join('|')), t = he.test(H.compareDocumentPosition), M = t || he.test(H.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1;
            }, Q = t ? function (e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === P || e.ownerDocument === z && M(z, e) ? -1 : t === P || t.ownerDocument === z && M(z, t) ? 1 : A ? K(A, e) - K(A, t) : 0 : 4 & n ? -1 : 1);
            } : function (e, t) {
                if (e === t) return j = !0, 0;
                var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], l = [t];
                if (!o || !r) return e === P ? -1 : t === P ? 1 : o ? -1 : r ? 1 : A ? K(A, e) - K(A, t) : 0;
                if (o === r) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === z ? -1 : l[i] === z ? 1 : 0;
            }, P) : P;
        }, t.matches = function (e, n) {
            return t(e, null, null, n);
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== P && O(e), n = n.replace(le, '=\'$1\']'), b.matchesSelector && I && !B[n + ' '] && (!D || !D.test(n)) && (!N || !N.test(n))) try {
                var i = L.call(e, n);
                if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
            } catch (e) {
            }
            return t(n, P, null, [e]).length > 0;
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== P && O(e), M(e, t);
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== P && O(e);
            var n = x.attrHandle[t.toLowerCase()],
                i = n && U.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
            return void 0 !== i ? i : b.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }, t.escape = function (e) {
            return (e + '').replace(we, be);
        }, t.error = function (e) {
            throw new Error('Syntax error, unrecognized expression: ' + e);
        }, t.uniqueSort = function (e) {
            var t, n = [], i = 0, o = 0;
            if (j = !b.detectDuplicates, A = !b.sortStable && e.slice(0), e.sort(Q), j) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1);
            }
            return A = null, e;
        }, k = t.getText = function (e) {
            var t, n = '', i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ('string' == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += k(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; t = e[i++];) n += k(t);
            return n;
        }, (x = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ue,
            attrHandle: {},
            find: {},
            relative: {
                '>': {dir: 'parentNode', first: !0},
                ' ': {dir: 'parentNode'},
                '+': {dir: 'previousSibling', first: !0},
                '~': {dir: 'previousSibling'}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || '').replace(ve, ye), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && t.error(e[0]), e;
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && ce.test(n) && (t = C(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return '*' === e ? function () {
                        return !0;
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                }, CLASS: function (e) {
                    var t = R[e + ' '];
                    return t || (t = new RegExp('(^|' + ee + ')' + e + '(' + ee + '|$)')) && R(e, function (e) {
                        return t.test('string' == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute('class') || '');
                    });
                }, ATTR: function (e, n, i) {
                    return function (o) {
                        var r = t.attr(o, e);
                        return null == r ? '!=' === n : !n || (r += '', '=' === n ? r === i : '!=' === n ? r !== i : '^=' === n ? i && 0 === r.indexOf(i) : '*=' === n ? i && r.indexOf(i) > -1 : '$=' === n ? i && r.slice(-i.length) === i : '~=' === n ? (' ' + r.replace(oe, ' ') + ' ').indexOf(i) > -1 : '|=' === n && (r === i || r.slice(0, i.length + 1) === i + '-'));
                    };
                }, CHILD: function (e, t, n, i, o) {
                    var r = 'nth' !== e.slice(0, 3), s = 'last' !== e.slice(-4), a = 'of-type' === t;
                    return 1 === i && 0 === o ? function (e) {
                        return !!e.parentNode;
                    } : function (t, n, l) {
                        var c, d, u, p, f, h, m = r !== s ? 'nextSibling' : 'previousSibling', g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(), y = !l && !a, w = !1;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (p = t; p = p[m];) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = m = 'only' === e && !h && 'nextSibling';
                                }
                                return !0;
                            }
                            if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                for (w = (f = (c = (d = (u = (p = g)[q] || (p[q] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === F && c[1]) && c[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (w = f = 0) || h.pop();) if (1 === p.nodeType && ++w && p === t) {
                                    d[e] = [F, f, w];
                                    break;
                                }
                            } else if (y && (p = t, u = p[q] || (p[q] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[e] || [], f = c[0] === F && c[1], w = f), !1 === w) for (; (p = ++f && p && p[m] || (w = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++w || (y && (u = p[q] || (p[q] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), d[e] = [F, w]), p !== t));) ;
                            return (w -= o) === i || w % i == 0 && w / i >= 0;
                        }
                    };
                }, PSEUDO: function (e, n) {
                    var o, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error('unsupported pseudo: ' + e);
                    return r[q] ? r(n) : r.length > 1 ? (o = [e, e, '', n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, o = r(e, n), s = o.length; s--;) i = K(e, o[s]), e[i] = !(t[i] = o[s]);
                    }) : function (e) {
                        return r(e, 0, o);
                    }) : r;
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], o = S(e.replace(re, '$1'));
                    return o[q] ? i(function (e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--;) (r = s[a]) && (e[a] = !(t[a] = r));
                    }) : function (e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop();
                    };
                }), has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0;
                    };
                }), contains: i(function (e) {
                    return e = e.replace(ve, ye), function (t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1;
                    };
                }), lang: i(function (e) {
                    return de.test(e || '') || t.error('unsupported lang: ' + e), e = e.replace(ve, ye).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = I ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                }, root: function (e) {
                    return e === H;
                }, focus: function (e) {
                    return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                }, enabled: a(!1), disabled: a(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return 'input' === t && !!e.checked || 'option' === t && !!e.selected;
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                }, parent: function (e) {
                    return !x.pseudos.empty(e);
                }, header: function (e) {
                    return fe.test(e.nodeName);
                }, input: function (e) {
                    return pe.test(e.nodeName);
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return 'input' === t && 'button' === e.type || 'button' === t;
                }, text: function (e) {
                    var t;
                    return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase());
                }, first: l(function () {
                    return [0];
                }), last: l(function (e, t) {
                    return [t - 1];
                }), eq: l(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }), even: l(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }), odd: l(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }), lt: l(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e;
                }), gt: l(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e;
                })
            }
        }).pseudos.nth = x.pseudos.eq;
        for (w in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) x.pseudos[w] = function (e) {
            return function (t) {
                return 'input' === t.nodeName.toLowerCase() && t.type === e;
            };
        }(w);
        for (w in {submit: !0, reset: !0}) x.pseudos[w] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ('input' === n || 'button' === n) && t.type === e;
            };
        }(w);
        return d.prototype = x.filters = x.pseudos, x.setFilters = new d, C = t.tokenize = function (e, n) {
            var i, o, r, s, a, l, c, d = W[e + ' '];
            if (d) return n ? 0 : d.slice(0);
            for (a = e, l = [], c = x.preFilter; a;) {
                i && !(o = se.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ae.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(re, ' ')
                }), a = a.slice(i.length));
                for (s in x.filter) !(o = ue[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break;
            }
            return n ? a.length : a ? t.error(e) : W(e, l).slice(0);
        }, S = t.compile = function (e, t) {
            var n, i = [], o = [], r = B[e + ' '];
            if (!r) {
                for (t || (t = C(e)), n = t.length; n--;) r = v(t[n]), r[q] ? i.push(r) : o.push(r);
                (r = B(e, y(o, i))).selector = e;
            }
            return r;
        }, $ = t.select = function (e, t, n, i) {
            var o, r, s, a, l, d = 'function' == typeof e && e, p = !i && C(e = d.selector || e);
            if (n = n || [], 1 === p.length) {
                if ((r = p[0] = p[0].slice(0)).length > 2 && 'ID' === (s = r[0]).type && 9 === t.nodeType && I && x.relative[r[1].type]) {
                    if (!(t = (x.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(r.shift().value.length);
                }
                for (o = ue.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !x.relative[a = s.type]);) if ((l = x.find[a]) && (i = l(s.matches[0].replace(ve, ye), ge.test(r[0].type) && c(t.parentNode) || t))) {
                    if (r.splice(o, 1), !(e = i.length && u(r))) return V.apply(n, i), n;
                    break;
                }
            }
            return (d || S(e, p))(i, t, !I, n, !t || ge.test(e) && c(t.parentNode) || t), n;
        }, b.sortStable = q.split('').sort(Q).join('') === q, b.detectDuplicates = !!j, O(), b.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(P.createElement('fieldset'));
        }), o(function (e) {
            return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href');
        }) || r('type|href|height|width', function (e, t, n) {
            if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }), b.attributes && o(function (e) {
            return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
        }) || r('value', function (e, t, n) {
            if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }), o(function (e) {
            return null == e.getAttribute('disabled');
        }) || r(Z, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }), t;
    }(e);
    me.find = be, me.expr = be.selectors, me.expr[':'] = me.expr.pseudos, me.uniqueSort = me.unique = be.uniqueSort, me.text = be.getText, me.isXMLDoc = be.isXML, me.contains = be.contains, me.escapeSelector = be.escape;
    var xe = function (e, t, n) {
            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (o && me(e).is(n)) break;
                i.push(e);
            }
            return i;
        }, ke = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }, Te = me.expr.match.needsContext, Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Se = /^.[^:#\[\.,]*$/;
    me.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === i.nodeType ? me.find.matchesSelector(i, e) ? [i] : [] : me.find.matches(e, me.grep(t, function (e) {
            return 1 === e.nodeType;
        }));
    }, me.fn.extend({
        find: function (e) {
            var t, n, i = this.length, o = this;
            if ('string' != typeof e) return this.pushStack(me(e).filter(function () {
                for (t = 0; t < i; t++) if (me.contains(o[t], this)) return !0;
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) me.find(e, o[t], n);
            return i > 1 ? me.uniqueSort(n) : n;
        }, filter: function (e) {
            return this.pushStack(r(this, e || [], !1));
        }, not: function (e) {
            return this.pushStack(r(this, e || [], !0));
        }, is: function (e) {
            return !!r(this, 'string' == typeof e && Te.test(e) ? me(e) : e || [], !1).length;
        }
    });
    var $e, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (me.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || $e, 'string' == typeof e) {
            if (!(i = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ee.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof me ? t[0] : t, me.merge(this, me.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), Ce.test(i[1]) && me.isPlainObject(t)) for (i in t) me.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (o = ne.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : me.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(me) : me.makeArray(e, this);
    }).prototype = me.fn, $e = me(ne);
    var Ae = /^(?:parents|prev(?:Until|All))/, je = {children: !0, contents: !0, next: !0, prev: !0};
    me.fn.extend({
        has: function (e) {
            var t = me(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (me.contains(this, t[e])) return !0;
            });
        }, closest: function (e, t) {
            var n, i = 0, o = this.length, r = [], s = 'string' != typeof e && me(e);
            if (!Te.test(e)) for (; i < o; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && me.find.matchesSelector(n, e))) {
                r.push(n);
                break;
            }
            return this.pushStack(r.length > 1 ? me.uniqueSort(r) : r);
        }, index: function (e) {
            return e ? 'string' == typeof e ? ae.call(me(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function (e, t) {
            return this.pushStack(me.uniqueSort(me.merge(this.get(), me(e, t))));
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), me.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        }, parents: function (e) {
            return xe(e, 'parentNode');
        }, parentsUntil: function (e, t, n) {
            return xe(e, 'parentNode', n);
        }, next: function (e) {
            return s(e, 'nextSibling');
        }, prev: function (e) {
            return s(e, 'previousSibling');
        }, nextAll: function (e) {
            return xe(e, 'nextSibling');
        }, prevAll: function (e) {
            return xe(e, 'previousSibling');
        }, nextUntil: function (e, t, n) {
            return xe(e, 'nextSibling', n);
        }, prevUntil: function (e, t, n) {
            return xe(e, 'previousSibling', n);
        }, siblings: function (e) {
            return ke((e.parentNode || {}).firstChild, e);
        }, children: function (e) {
            return ke(e.firstChild);
        }, contents: function (e) {
            return o(e, 'iframe') ? e.contentDocument : (o(e, 'template') && (e = e.content || e), me.merge([], e.childNodes));
        }
    }, function (e, t) {
        me.fn[e] = function (n, i) {
            var o = me.map(this, t, n);
            return 'Until' !== e.slice(-5) && (i = n), i && 'string' == typeof i && (o = me.filter(i, o)), this.length > 1 && (je[e] || me.uniqueSort(o), Ae.test(e) && o.reverse()), this.pushStack(o);
        };
    });
    var Oe = /[^\x20\t\r\n\f]+/g;
    me.Callbacks = function (e) {
        e = 'string' == typeof e ? a(e) : me.extend({}, e);
        var t, n, i, o, r = [], s = [], l = -1, c = function () {
            for (o = o || e.once, i = t = !0; s.length; l = -1) for (n = s.shift(); ++l < r.length;) !1 === r[l].apply(n[0], n[1]) && e.stopOnFalse && (l = r.length, n = !1);
            e.memory || (n = !1), t = !1, o && (r = n ? [] : '');
        }, d = {
            add: function () {
                return r && (n && !t && (l = r.length - 1, s.push(n)), function t(n) {
                    me.each(n, function (n, i) {
                        me.isFunction(i) ? e.unique && d.has(i) || r.push(i) : i && i.length && 'string' !== me.type(i) && t(i);
                    });
                }(arguments), n && !t && c()), this;
            }, remove: function () {
                return me.each(arguments, function (e, t) {
                    for (var n; (n = me.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= l && l--;
                }), this;
            }, has: function (e) {
                return e ? me.inArray(e, r) > -1 : r.length > 0;
            }, empty: function () {
                return r && (r = []), this;
            }, disable: function () {
                return o = s = [], r = n = '', this;
            }, disabled: function () {
                return !r;
            }, lock: function () {
                return o = s = [], n || t || (r = n = ''), this;
            }, locked: function () {
                return !!o;
            }, fireWith: function (e, n) {
                return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this;
            }, fire: function () {
                return d.fireWith(this, arguments), this;
            }, fired: function () {
                return !!i;
            }
        };
        return d;
    }, me.extend({
        Deferred: function (t) {
            var n = [['notify', 'progress', me.Callbacks('memory'), me.Callbacks('memory'), 2], ['resolve', 'done', me.Callbacks('once memory'), me.Callbacks('once memory'), 0, 'resolved'], ['reject', 'fail', me.Callbacks('once memory'), me.Callbacks('once memory'), 1, 'rejected']],
                i = 'pending', o = {
                    state: function () {
                        return i;
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this;
                    }, catch: function (e) {
                        return o.then(null, e);
                    }, pipe: function () {
                        var e = arguments;
                        return me.Deferred(function (t) {
                            me.each(n, function (n, i) {
                                var o = me.isFunction(e[i[4]]) && e[i[4]];
                                r[i[1]](function () {
                                    var e = o && o.apply(this, arguments);
                                    e && me.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + 'With'](this, o ? [e] : arguments);
                                });
                            }), e = null;
                        }).promise();
                    }, then: function (t, i, o) {
                        function r(t, n, i, o) {
                            return function () {
                                var a = this, d = arguments, u = function () {
                                    var e, u;
                                    if (!(t < s)) {
                                        if ((e = i.apply(a, d)) === n.promise()) throw new TypeError('Thenable self-resolution');
                                        u = e && ('object' == typeof e || 'function' == typeof e) && e.then, me.isFunction(u) ? o ? u.call(e, r(s, n, l, o), r(s, n, c, o)) : (s++, u.call(e, r(s, n, l, o), r(s, n, c, o), r(s, n, l, n.notifyWith))) : (i !== l && (a = void 0, d = [e]), (o || n.resolveWith)(a, d));
                                    }
                                }, p = o ? u : function () {
                                    try {
                                        u();
                                    } catch (e) {
                                        me.Deferred.exceptionHook && me.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (i !== c && (a = void 0, d = [e]), n.rejectWith(a, d));
                                    }
                                };
                                t ? p() : (me.Deferred.getStackHook && (p.stackTrace = me.Deferred.getStackHook()), e.setTimeout(p));
                            };
                        }

                        var s = 0;
                        return me.Deferred(function (e) {
                            n[0][3].add(r(0, e, me.isFunction(o) ? o : l, e.notifyWith)), n[1][3].add(r(0, e, me.isFunction(t) ? t : l)), n[2][3].add(r(0, e, me.isFunction(i) ? i : c));
                        }).promise();
                    }, promise: function (e) {
                        return null != e ? me.extend(e, o) : o;
                    }
                }, r = {};
            return me.each(n, function (e, t) {
                var s = t[2], a = t[5];
                o[t[1]] = s.add, a && s.add(function () {
                    i = a;
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), r[t[0]] = function () {
                    return r[t[0] + 'With'](this === r ? void 0 : this, arguments), this;
                }, r[t[0] + 'With'] = s.fireWith;
            }), o.promise(r), t && t.call(r, r), r;
        }, when: function (e) {
            var t = arguments.length, n = t, i = Array(n), o = oe.call(arguments), r = me.Deferred(), s = function (e) {
                return function (n) {
                    i[e] = this, o[e] = arguments.length > 1 ? oe.call(arguments) : n, --t || r.resolveWith(i, o);
                };
            };
            if (t <= 1 && (d(e, r.done(s(n)).resolve, r.reject, !t), 'pending' === r.state() || me.isFunction(o[n] && o[n].then))) return r.then();
            for (; n--;) d(o[n], s(n), r.reject);
            return r.promise();
        }
    });
    var Pe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    me.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && Pe.test(t.name) && e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
    }, me.readyException = function (t) {
        e.setTimeout(function () {
            throw t;
        });
    };
    var He = me.Deferred();
    me.fn.ready = function (e) {
        return He.then(e).catch(function (e) {
            me.readyException(e);
        }), this;
    }, me.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --me.readyWait : me.isReady) || (me.isReady = !0, !0 !== e && --me.readyWait > 0 || He.resolveWith(ne, [me]));
        }
    }), me.ready.then = He.then, 'complete' === ne.readyState || 'loading' !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(me.ready) : (ne.addEventListener('DOMContentLoaded', u), e.addEventListener('load', u));
    var Ie = function (e, t, n, i, o, r, s) {
        var a = 0, l = e.length, c = null == n;
        if ('object' === me.type(n)) {
            o = !0;
            for (a in n) Ie(e, t, a, n[a], !0, r, s);
        } else if (void 0 !== i && (o = !0, me.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
            return c.call(me(e), n);
        })), t)) for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
    }, Ne = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    p.uid = 1, p.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Ne(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        }, set: function (e, t, n) {
            var i, o = this.cache(e);
            if ('string' == typeof t) o[me.camelCase(t)] = n; else for (i in t) o[me.camelCase(i)] = t[i];
            return o;
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][me.camelCase(t)];
        }, access: function (e, t, n) {
            return void 0 === t || t && 'string' == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        }, remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(me.camelCase) : (t = me.camelCase(t), t = t in i ? [t] : t.match(Oe) || []), n = t.length;
                    for (; n--;) delete i[t[n]];
                }
                (void 0 === t || me.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !me.isEmptyObject(t);
        }
    };
    var De = new p, Le = new p, Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, qe = /[A-Z]/g;
    me.extend({
        hasData: function (e) {
            return Le.hasData(e) || De.hasData(e);
        }, data: function (e, t, n) {
            return Le.access(e, t, n);
        }, removeData: function (e, t) {
            Le.remove(e, t);
        }, _data: function (e, t, n) {
            return De.access(e, t, n);
        }, _removeData: function (e, t) {
            De.remove(e, t);
        }
    }), me.fn.extend({
        data: function (e, t) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = Le.get(r), 1 === r.nodeType && !De.get(r, 'hasDataAttrs'))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf('data-') && (i = me.camelCase(i.slice(5)), h(r, i, o[i]));
                    De.set(r, 'hasDataAttrs', !0);
                }
                return o;
            }
            return 'object' == typeof e ? this.each(function () {
                Le.set(this, e);
            }) : Ie(this, function (t) {
                var n;
                if (r && void 0 === t) {
                    if (void 0 !== (n = Le.get(r, e))) return n;
                    if (void 0 !== (n = h(r, e))) return n;
                } else this.each(function () {
                    Le.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        }, removeData: function (e) {
            return this.each(function () {
                Le.remove(this, e);
            });
        }
    }), me.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || 'fx') + 'queue', i = De.get(e, t), n && (!i || Array.isArray(n) ? i = De.access(e, t, me.makeArray(n)) : i.push(n)), i || [];
        }, dequeue: function (e, t) {
            t = t || 'fx';
            var n = me.queue(e, t), i = n.length, o = n.shift(), r = me._queueHooks(e, t), s = function () {
                me.dequeue(e, t);
            };
            'inprogress' === o && (o = n.shift(), i--), o && ('fx' === t && n.unshift('inprogress'), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire();
        }, _queueHooks: function (e, t) {
            var n = t + 'queueHooks';
            return De.get(e, n) || De.access(e, n, {
                empty: me.Callbacks('once memory').add(function () {
                    De.remove(e, [t + 'queue', n]);
                })
            });
        }
    }), me.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return 'string' != typeof e && (t = e, e = 'fx', n--), arguments.length < n ? me.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = me.queue(this, e, t);
                me._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && me.dequeue(this, e);
            });
        }, dequeue: function (e) {
            return this.each(function () {
                me.dequeue(this, e);
            });
        }, clearQueue: function (e) {
            return this.queue(e || 'fx', []);
        }, promise: function (e, t) {
            var n, i = 1, o = me.Deferred(), r = this, s = this.length, a = function () {
                --i || o.resolveWith(r, [r]);
            };
            for ('string' != typeof e && (t = e, e = void 0), e = e || 'fx'; s--;) (n = De.get(r[s], e + 'queueHooks')) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t);
        }
    });
    var ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Fe = new RegExp('^(?:([+-])=|)(' + ze + ')([a-z%]*)$', 'i'),
        _e = ['Top', 'Right', 'Bottom', 'Left'], Re = function (e, t) {
            return 'none' === (e = t || e).style.display || '' === e.style.display && me.contains(e.ownerDocument, e) && 'none' === me.css(e, 'display');
        }, We = function (e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = s[r];
            return o;
        }, Be = {};
    me.fn.extend({
        show: function () {
            return v(this, !0);
        }, hide: function () {
            return v(this);
        }, toggle: function (e) {
            return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Re(this) ? me(this).show() : me(this).hide();
            });
        }
    });
    var Qe = /^(?:checkbox|radio)$/i, Ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Xe = /^$|\/(?:java|ecma)script/i, Ye = {
        option: [1, '<select multiple=\'multiple\'>', '</select>'],
        thead: [1, '<table>', '</table>'],
        col: [2, '<table><colgroup>', '</colgroup></table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: [0, '', '']
    };
    Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td;
    var Ge = /<|&#?\w+;/;
    !function () {
        var e = ne.createDocumentFragment().appendChild(ne.createElement('div')), t = ne.createElement('input');
        t.setAttribute('type', 'radio'), t.setAttribute('checked', 'checked'), t.setAttribute('name', 't'), e.appendChild(t), fe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = '<textarea>x</textarea>', fe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();
    var Ve = ne.documentElement, Je = /^key/, Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ze = /^([^.]*)(?:\.(.+)|)/;
    me.event = {
        global: {}, add: function (e, t, n, i, o) {
            var r, s, a, l, c, d, u, p, f, h, m, g = De.get(e);
            if (g) for (n.handler && (r = n, n = r.handler, o = r.selector), o && me.find.matchesSelector(Ve, o), n.guid || (n.guid = me.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
                return void 0 !== me && me.event.triggered !== t.type ? me.event.dispatch.apply(e, arguments) : void 0;
            }), c = (t = (t || '').match(Oe) || ['']).length; c--;) a = Ze.exec(t[c]) || [], f = m = a[1], h = (a[2] || '').split('.').sort(), f && (u = me.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = me.event.special[f] || {}, d = me.extend({
                type: f,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && me.expr.match.needsContext.test(o),
                namespace: h.join('.')
            }, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), me.event.global[f] = !0);
        }, remove: function (e, t, n, i, o) {
            var r, s, a, l, c, d, u, p, f, h, m, g = De.hasData(e) && De.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || '').match(Oe) || ['']).length; c--;) if (a = Ze.exec(t[c]) || [], f = m = a[1], h = (a[2] || '').split('.').sort(), f) {
                    for (u = me.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), s = r = p.length; r--;) d = p[r], !o && m !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ('**' !== i || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                    s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, g.handle) || me.removeEvent(e, f, g.handle), delete l[f]);
                } else for (f in l) me.event.remove(e, f + t[c], n, i, !0);
                me.isEmptyObject(l) && De.remove(e, 'handle events');
            }
        }, dispatch: function (e) {
            var t, n, i, o, r, s, a = me.event.fix(e), l = new Array(arguments.length),
                c = (De.get(this, 'events') || {})[a.type] || [], d = me.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, a)) {
                for (s = me.event.handlers.call(this, a, c), t = 0; (o = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((me.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, a), a.result;
            }
        }, handlers: function (e, t) {
            var n, i, o, r, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !('click' === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ('click' !== e.type || !0 !== c.disabled)) {
                for (r = [], s = {}, n = 0; n < l; n++) i = t[n], o = i.selector + ' ', void 0 === s[o] && (s[o] = i.needsContext ? me(o, this).index(c) > -1 : me.find(o, this, null, [c]).length), s[o] && r.push(i);
                r.length && a.push({elem: c, handlers: r});
            }
            return c = this, l < t.length && a.push({elem: c, handlers: t.slice(l)}), a;
        }, addProp: function (e, t) {
            Object.defineProperty(me.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: me.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                },
                set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t});
                }
            });
        }, fix: function (e) {
            return e[me.expando] ? e : new me.Event(e);
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== T() && this.focus) return this.focus(), !1;
                }, delegateType: 'focusin'
            }, blur: {
                trigger: function () {
                    if (this === T() && this.blur) return this.blur(), !1;
                }, delegateType: 'focusout'
            }, click: {
                trigger: function () {
                    if ('checkbox' === this.type && this.click && o(this, 'input')) return this.click(), !1;
                }, _default: function (e) {
                    return o(e.target, 'a');
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, me.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, me.Event = function (e, t) {
        return this instanceof me.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? x : k, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && me.extend(this, t), this.timeStamp = e && e.timeStamp || me.now(), void (this[me.expando] = !0)) : new me.Event(e, t);
    }, me.Event.prototype = {
        constructor: me.Event,
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        }
    }, me.each({
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
        which: function (e) {
            var t = e.button;
            return null == e.which && Je.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, me.event.addProp), me.each({
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
    }, function (e, t) {
        me.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = this, o = e.relatedTarget, r = e.handleObj;
                return o && (o === i || me.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n;
            }
        };
    }), me.fn.extend({
        on: function (e, t, n, i) {
            return C(this, e, t, n, i);
        }, one: function (e, t, n, i) {
            return C(this, e, t, n, i, 1);
        }, off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, me(e.delegateTarget).off(i.namespace ? i.origType + '.' + i.namespace : i.origType, i.selector, i.handler), this;
            if ('object' == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this;
            }
            return !1 !== t && 'function' != typeof t || (n = t, t = void 0), !1 === n && (n = k), this.each(function () {
                me.event.remove(this, e, n, t);
            });
        }
    });
    var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        tt = /<script|<style|<link/i, nt = /checked\s*(?:[^=]|=\s*.checked.)/i, it = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    me.extend({
        htmlPrefilter: function (e) {
            return e.replace(et, '<$1></$2>');
        }, clone: function (e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0), l = me.contains(e.ownerDocument, e);
            if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || me.isXMLDoc(e))) for (s = y(a), r = y(e), i = 0, o = r.length; i < o; i++) j(r[i], s[i]);
            if (t) if (n) for (r = r || y(e), s = s || y(a), i = 0, o = r.length; i < o; i++) A(r[i], s[i]); else A(e, a);
            return (s = y(a, 'script')).length > 0 && w(s, !l && y(e, 'script')), a;
        }, cleanData: function (e) {
            for (var t, n, i, o = me.event.special, r = 0; void 0 !== (n = e[r]); r++) if (Ne(n)) {
                if (t = n[De.expando]) {
                    if (t.events) for (i in t.events) o[i] ? me.event.remove(n, i) : me.removeEvent(n, i, t.handle);
                    n[De.expando] = void 0;
                }
                n[Le.expando] && (n[Le.expando] = void 0);
            }
        }
    }), me.fn.extend({
        detach: function (e) {
            return P(this, e, !0);
        }, remove: function (e) {
            return P(this, e);
        }, text: function (e) {
            return Ie(this, function (e) {
                return void 0 === e ? me.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        }, append: function () {
            return O(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || S(this, e).appendChild(e);
            });
        }, prepend: function () {
            return O(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = S(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        }, before: function () {
            return O(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        }, after: function () {
            return O(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (me.cleanData(y(e, !1)), e.textContent = '');
            return this;
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return me.clone(this, e, t);
            });
        }, html: function (e) {
            return Ie(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ('string' == typeof e && !tt.test(e) && !Ye[(Ue.exec(e) || ['', ''])[1].toLowerCase()]) {
                    e = me.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (me.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0;
                    } catch (e) {
                    }
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        }, replaceWith: function () {
            var e = [];
            return O(this, arguments, function (t) {
                var n = this.parentNode;
                me.inArray(this, e) < 0 && (me.cleanData(y(this)), n && n.replaceChild(t, this));
            }, e);
        }
    }), me.each({
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
    }, function (e, t) {
        me.fn[e] = function (e) {
            for (var n, i = [], o = me(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), me(o[s])[t](n), se.apply(i, n.get());
            return this.pushStack(i);
        };
    });
    var rt = /^margin/, st = new RegExp('^(' + ze + ')(?!px)[a-z%]+$', 'i'), at = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t);
    };
    !function () {
        function t() {
            if (a) {
                a.style.cssText = 'box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%', a.innerHTML = '', Ve.appendChild(s);
                var t = e.getComputedStyle(a);
                n = '1%' !== t.top, r = '2px' === t.marginLeft, i = '4px' === t.width, a.style.marginRight = '50%', o = '4px' === t.marginRight, Ve.removeChild(s), a = null;
            }
        }

        var n, i, o, r, s = ne.createElement('div'), a = ne.createElement('div');
        a.style && (a.style.backgroundClip = 'content-box', a.cloneNode(!0).style.backgroundClip = '', fe.clearCloneStyle = 'content-box' === a.style.backgroundClip, s.style.cssText = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', s.appendChild(a), me.extend(fe, {
            pixelPosition: function () {
                return t(), n;
            }, boxSizingReliable: function () {
                return t(), i;
            }, pixelMarginRight: function () {
                return t(), o;
            }, reliableMarginLeft: function () {
                return t(), r;
            }
        }));
    }();
    var lt = /^(none|table(?!-c[ea]).+)/, ct = /^--/,
        dt = {position: 'absolute', visibility: 'hidden', display: 'block'},
        ut = {letterSpacing: '0', fontWeight: '400'}, pt = ['Webkit', 'Moz', 'ms'], ft = ne.createElement('div').style;
    me.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = H(e, 'opacity');
                        return '' === n ? '1' : n;
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
        cssProps: {float: 'cssFloat'},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = me.camelCase(t), l = ct.test(t), c = e.style;
                return l || (t = D(a)), s = me.cssHooks[t] || me.cssHooks[a], void 0 === n ? s && 'get' in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t] : ('string' === (r = typeof n) && (o = Fe.exec(n)) && o[1] && (n = m(e, t, o), r = 'number'), void (null != n && n === n && ('number' === r && (n += o && o[3] || (me.cssNumber[a] ? '' : 'px')), fe.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (c[t] = 'inherit'), s && 'set' in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))));
            }
        },
        css: function (e, t, n, i) {
            var o, r, s, a = me.camelCase(t);
            return ct.test(t) || (t = D(a)), (s = me.cssHooks[t] || me.cssHooks[a]) && 'get' in s && (o = s.get(e, !0, n)), void 0 === o && (o = H(e, t, i)), 'normal' === o && t in ut && (o = ut[t]), '' === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
        }
    }), me.each(['height', 'width'], function (e, t) {
        me.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !lt.test(me.css(e, 'display')) || e.getClientRects().length && e.getBoundingClientRect().width ? q(e, t, i) : We(e, dt, function () {
                    return q(e, t, i);
                });
            }, set: function (e, n, i) {
                var o, r = i && at(e), s = i && M(e, t, i, 'border-box' === me.css(e, 'boxSizing', !1, r), r);
                return s && (o = Fe.exec(n)) && 'px' !== (o[3] || 'px') && (e.style[t] = n, n = me.css(e, t)), L(e, n, s);
            }
        };
    }), me.cssHooks.marginLeft = I(fe.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(H(e, 'marginLeft')) || e.getBoundingClientRect().left - We(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left;
        })) + 'px';
    }), me.each({margin: '', padding: '', border: 'Width'}, function (e, t) {
        me.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = 'string' == typeof n ? n.split(' ') : [n]; i < 4; i++) o[e + _e[i] + t] = r[i] || r[i - 2] || r[0];
                return o;
            }
        }, rt.test(e) || (me.cssHooks[e + t].set = L);
    }), me.fn.extend({
        css: function (e, t) {
            return Ie(this, function (e, t, n) {
                var i, o, r = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = at(e), o = t.length; s < o; s++) r[t[s]] = me.css(e, t[s], !1, i);
                    return r;
                }
                return void 0 !== n ? me.style(e, t, n) : me.css(e, t);
            }, e, t, arguments.length > 1);
        }
    }), me.Tween = z, z.prototype = {
        constructor: z, init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || me.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (me.cssNumber[n] ? '' : 'px');
        }, cur: function () {
            var e = z.propHooks[this.prop];
            return e && e.get ? e.get(this) : z.propHooks._default.get(this);
        }, run: function (e) {
            var t, n = z.propHooks[this.prop];
            return this.options.duration ? this.pos = t = me.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : z.propHooks._default.set(this), this;
        }
    }, z.prototype.init.prototype = z.prototype, z.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = me.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0);
            }, set: function (e) {
                me.fx.step[e.prop] ? me.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[me.cssProps[e.prop]] && !me.cssHooks[e.prop] ? e.elem[e.prop] = e.now : me.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, me.easing = {
        linear: function (e) {
            return e;
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }, _default: 'swing'
    }, me.fx = z.prototype.init, me.fx.step = {};
    var ht, mt, gt = /^(?:toggle|show|hide)$/, vt = /queueHooks$/;
    me.Animation = me.extend(U, {
        tweeners: {
            '*': [function (e, t) {
                var n = this.createTween(e, t);
                return m(n.elem, e, Fe.exec(t), n), n;
            }]
        }, tweener: function (e, t) {
            me.isFunction(e) ? (t = e, e = ['*']) : e = e.match(Oe);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t);
        }, prefilters: [B], prefilter: function (e, t) {
            t ? U.prefilters.unshift(e) : U.prefilters.push(e);
        }
    }), me.speed = function (e, t, n) {
        var i = e && 'object' == typeof e ? me.extend({}, e) : {
            complete: n || !n && t || me.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !me.isFunction(t) && t
        };
        return me.fx.off ? i.duration = 0 : 'number' != typeof i.duration && (i.duration in me.fx.speeds ? i.duration = me.fx.speeds[i.duration] : i.duration = me.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = 'fx'), i.old = i.complete, i.complete = function () {
            me.isFunction(i.old) && i.old.call(this), i.queue && me.dequeue(this, i.queue);
        }, i;
    }, me.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(Re).css('opacity', 0).show().end().animate({opacity: t}, e, n, i);
        }, animate: function (e, t, n, i) {
            var o = me.isEmptyObject(e), r = me.speed(t, n, i), s = function () {
                var t = U(this, me.extend({}, e), r);
                (o || De.get(this, 'finish')) && t.stop(!0);
            };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return 'string' != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || 'fx', []), this.each(function () {
                var t = !0, o = null != e && e + 'queueHooks', r = me.timers, s = De.get(this);
                if (o) s[o] && s[o].stop && i(s[o]); else for (o in s) s[o] && s[o].stop && vt.test(o) && i(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                !t && n || me.dequeue(this, e);
            });
        }, finish: function (e) {
            return !1 !== e && (e = e || 'fx'), this.each(function () {
                var t, n = De.get(this), i = n[e + 'queue'], o = n[e + 'queueHooks'], r = me.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, me.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
            });
        }
    }), me.each(['toggle', 'show', 'hide'], function (e, t) {
        var n = me.fn[t];
        me.fn[t] = function (e, i, o) {
            return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, o);
        };
    }), me.each({
        slideDown: R('show'),
        slideUp: R('hide'),
        slideToggle: R('toggle'),
        fadeIn: {opacity: 'show'},
        fadeOut: {opacity: 'hide'},
        fadeToggle: {opacity: 'toggle'}
    }, function (e, t) {
        me.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i);
        };
    }), me.timers = [], me.fx.tick = function () {
        var e, t = 0, n = me.timers;
        for (ht = me.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || me.fx.stop(), ht = void 0;
    }, me.fx.timer = function (e) {
        me.timers.push(e), me.fx.start();
    }, me.fx.interval = 13, me.fx.start = function () {
        mt || (mt = !0, F());
    }, me.fx.stop = function () {
        mt = null;
    }, me.fx.speeds = {slow: 600, fast: 200, _default: 400}, me.fn.delay = function (t, n) {
        return t = me.fx ? me.fx.speeds[t] || t : t, n = n || 'fx', this.queue(n, function (n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(o);
            };
        });
    }, function () {
        var e = ne.createElement('input'), t = ne.createElement('select').appendChild(ne.createElement('option'));
        e.type = 'checkbox', fe.checkOn = '' !== e.value, fe.optSelected = t.selected, (e = ne.createElement('input')).value = 't', e.type = 'radio', fe.radioValue = 't' === e.value;
    }();
    var yt, wt = me.expr.attrHandle;
    me.fn.extend({
        attr: function (e, t) {
            return Ie(this, me.attr, e, t, arguments.length > 1);
        }, removeAttr: function (e) {
            return this.each(function () {
                me.removeAttr(this, e);
            });
        }
    }), me.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? me.prop(e, t, n) : (1 === r && me.isXMLDoc(e) || (o = me.attrHooks[t.toLowerCase()] || (me.expr.match.bool.test(t) ? yt : void 0)), void 0 !== n ? null === n ? void me.removeAttr(e, t) : o && 'set' in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ''), n) : o && 'get' in o && null !== (i = o.get(e, t)) ? i : (i = me.find.attr(e, t), null == i ? void 0 : i));
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!fe.radioValue && 'radio' === t && o(e, 'input')) {
                        var n = e.value;
                        return e.setAttribute('type', t), n && (e.value = n), t;
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i = 0, o = t && t.match(Oe);
            if (o && 1 === e.nodeType) for (; n = o[i++];) e.removeAttribute(n);
        }
    }), yt = {
        set: function (e, t, n) {
            return !1 === t ? me.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, me.each(me.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = wt[t] || me.find.attr;
        wt[t] = function (e, t, i) {
            var o, r, s = t.toLowerCase();
            return i || (r = wt[s], wt[s] = o, o = null != n(e, t, i) ? s : null, wt[s] = r), o;
        };
    });
    var bt = /^(?:input|select|textarea|button)$/i, xt = /^(?:a|area)$/i;
    me.fn.extend({
        prop: function (e, t) {
            return Ie(this, me.prop, e, t, arguments.length > 1);
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[me.propFix[e] || e];
            });
        }
    }), me.extend({
        prop: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && me.isXMLDoc(e) || (t = me.propFix[t] || t, o = me.propHooks[t]), void 0 !== n ? o && 'set' in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && 'get' in o && null !== (i = o.get(e, t)) ? i : e[t];
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = me.find.attr(e, 'tabindex');
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        }, propFix: {for: 'htmlFor', class: 'className'}
    }), fe.optSelected || (me.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), me.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () {
        me.propFix[this.toLowerCase()] = this;
    }), me.fn.extend({
        addClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (me.isFunction(e)) return this.each(function (t) {
                me(this).addClass(e.call(this, t, Y(this)));
            });
            if ('string' == typeof e && e) for (t = e.match(Oe) || []; n = this[l++];) if (o = Y(n), i = 1 === n.nodeType && ' ' + X(o) + ' ') {
                for (s = 0; r = t[s++];) i.indexOf(' ' + r + ' ') < 0 && (i += r + ' ');
                o !== (a = X(i)) && n.setAttribute('class', a);
            }
            return this;
        }, removeClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (me.isFunction(e)) return this.each(function (t) {
                me(this).removeClass(e.call(this, t, Y(this)));
            });
            if (!arguments.length) return this.attr('class', '');
            if ('string' == typeof e && e) for (t = e.match(Oe) || []; n = this[l++];) if (o = Y(n), i = 1 === n.nodeType && ' ' + X(o) + ' ') {
                for (s = 0; r = t[s++];) for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(' ' + r + ' ', ' ');
                o !== (a = X(i)) && n.setAttribute('class', a);
            }
            return this;
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return 'boolean' == typeof t && 'string' === n ? t ? this.addClass(e) : this.removeClass(e) : me.isFunction(e) ? this.each(function (n) {
                me(this).toggleClass(e.call(this, n, Y(this), t), t);
            }) : this.each(function () {
                var t, i, o, r;
                if ('string' === n) for (i = 0, o = me(this), r = e.match(Oe) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && 'boolean' !== n || ((t = Y(this)) && De.set(this, '__className__', t), this.setAttribute && this.setAttribute('class', t || !1 === e ? '' : De.get(this, '__className__') || ''));
            });
        }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = ' ' + e + ' '; n = this[i++];) if (1 === n.nodeType && (' ' + X(Y(n)) + ' ').indexOf(t) > -1) return !0;
            return !1;
        }
    });
    var kt = /\r/g;
    me.fn.extend({
        val: function (e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = me.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, me(this).val()) : e, null == o ? o = '' : 'number' == typeof o ? o += '' : Array.isArray(o) && (o = me.map(o, function (e) {
                    return null == e ? '' : e + '';
                })), (t = me.valHooks[this.type] || me.valHooks[this.nodeName.toLowerCase()]) && 'set' in t && void 0 !== t.set(this, o, 'value') || (this.value = o));
            })) : o ? (t = me.valHooks[o.type] || me.valHooks[o.nodeName.toLowerCase()], t && 'get' in t && void 0 !== (n = t.get(o, 'value')) ? n : (n = o.value, 'string' == typeof n ? n.replace(kt, '') : null == n ? '' : n)) : void 0;
        }
    }), me.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = me.find.attr(e, 'value');
                    return null != t ? t : X(me.text(e));
                }
            }, select: {
                get: function (e) {
                    var t, n, i, r = e.options, s = e.selectedIndex, a = 'select-one' === e.type, l = a ? null : [],
                        c = a ? s + 1 : r.length;
                    for (i = s < 0 ? c : a ? s : 0; i < c; i++) if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, 'optgroup'))) {
                        if (t = me(n).val(), a) return t;
                        l.push(t);
                    }
                    return l;
                }, set: function (e, t) {
                    for (var n, i, o = e.options, r = me.makeArray(t), s = o.length; s--;) i = o[s], (i.selected = me.inArray(me.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r;
                }
            }
        }
    }), me.each(['radio', 'checkbox'], function () {
        me.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = me.inArray(me(e).val(), t) > -1;
            }
        }, fe.checkOn || (me.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
        });
    });
    var Tt = /^(?:focusinfocus|focusoutblur)$/;
    me.extend(me.event, {
        trigger: function (t, n, i, o) {
            var r, s, a, l, c, d, u, p = [i || ne], f = de.call(t, 'type') ? t.type : t,
                h = de.call(t, 'namespace') ? t.namespace.split('.') : [];
            if (s = a = i = i || ne, 3 !== i.nodeType && 8 !== i.nodeType && !Tt.test(f + me.event.triggered) && (f.indexOf('.') > -1 && (h = f.split('.'), f = h.shift(), h.sort()), c = f.indexOf(':') < 0 && 'on' + f, t = t[me.expando] ? t : new me.Event(f, 'object' == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join('.'), t.rnamespace = t.namespace ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : me.makeArray(n, [t]), u = me.event.special[f] || {}, o || !u.trigger || !1 !== u.trigger.apply(i, n))) {
                if (!o && !u.noBubble && !me.isWindow(i)) {
                    for (l = u.delegateType || f, Tt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (i.ownerDocument || ne) && p.push(a.defaultView || a.parentWindow || e);
                }
                for (r = 0; (s = p[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : u.bindType || f, (d = (De.get(s, 'events') || {})[t.type] && De.get(s, 'handle')) && d.apply(s, n), (d = c && s[c]) && d.apply && Ne(s) && (t.result = d.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), n) || !Ne(i) || c && me.isFunction(i[f]) && !me.isWindow(i) && ((a = i[c]) && (i[c] = null), me.event.triggered = f, i[f](), me.event.triggered = void 0, a && (i[c] = a)), t.result;
            }
        }, simulate: function (e, t, n) {
            var i = me.extend(new me.Event, n, {type: e, isSimulated: !0});
            me.event.trigger(i, null, t);
        }
    }), me.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                me.event.trigger(e, t, this);
            });
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return me.event.trigger(e, t, n, !0);
        }
    }), me.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '), function (e, t) {
        me.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), me.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), fe.focusin = 'onfocusin' in e, fe.focusin || me.each({focus: 'focusin', blur: 'focusout'}, function (e, t) {
        var n = function (e) {
            me.event.simulate(t, e.target, me.event.fix(e));
        };
        me.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, o = De.access(i, t);
                o || i.addEventListener(e, n, !0), De.access(i, t, (o || 0) + 1);
            }, teardown: function () {
                var i = this.ownerDocument || this, o = De.access(i, t) - 1;
                o ? De.access(i, t, o) : (i.removeEventListener(e, n, !0), De.remove(i, t));
            }
        };
    });
    var Ct = e.location, St = me.now(), $t = /\?/;
    me.parseXML = function (t) {
        var n;
        if (!t || 'string' != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, 'text/xml');
        } catch (e) {
            n = void 0;
        }
        return n && !n.getElementsByTagName('parsererror').length || me.error('Invalid XML: ' + t), n;
    };
    var Et = /\[\]$/, At = /\r?\n/g, jt = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;
    me.param = function (e, t) {
        var n, i = [], o = function (e, t) {
            var n = me.isFunction(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
        };
        if (Array.isArray(e) || e.jquery && !me.isPlainObject(e)) me.each(e, function () {
            o(this.name, this.value);
        }); else for (n in e) G(n, e[n], t, o);
        return i.join('&');
    }, me.fn.extend({
        serialize: function () {
            return me.param(this.serializeArray());
        }, serializeArray: function () {
            return this.map(function () {
                var e = me.prop(this, 'elements');
                return e ? me.makeArray(e) : this;
            }).filter(function () {
                var e = this.type;
                return this.name && !me(this).is(':disabled') && Ot.test(this.nodeName) && !jt.test(e) && (this.checked || !Qe.test(e));
            }).map(function (e, t) {
                var n = me(this).val();
                return null == n ? null : Array.isArray(n) ? me.map(n, function (e) {
                    return {name: t.name, value: e.replace(At, '\r\n')};
                }) : {name: t.name, value: n.replace(At, '\r\n')};
            }).get();
        }
    });
    var Pt = /%20/g, Ht = /#.*$/, It = /([?&])_=[^&]*/, Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Dt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Lt = /^(?:GET|HEAD)$/, Mt = /^\/\//, qt = {},
        zt = {}, Ft = '*/'.concat('*'), _t = ne.createElement('a');
    _t.href = Ct.href, me.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: 'GET',
            isLocal: Dt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
                '*': Ft,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript'
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: 'responseXML', text: 'responseText', json: 'responseJSON'},
            converters: {'* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': me.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? K(K(e, me.ajaxSettings), t) : K(me.ajaxSettings, e);
        },
        ajaxPrefilter: V(qt),
        ajaxTransport: V(zt),
        ajax: function (t, n) {
            function i(t, n, i, a) {
                var c, p, f, b, x, k = n;
                d || (d = !0, l && e.clearTimeout(l), o = void 0, s = a || '', T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (b = Z(h, T, i)), b = ee(h, b, T, c), c ? (h.ifModified && ((x = T.getResponseHeader('Last-Modified')) && (me.lastModified[r] = x), (x = T.getResponseHeader('etag')) && (me.etag[r] = x)), 204 === t || 'HEAD' === h.type ? k = 'nocontent' : 304 === t ? k = 'notmodified' : (k = b.state, p = b.data, f = b.error, c = !f)) : (f = k, !t && k || (k = 'error', t < 0 && (t = 0))), T.status = t, T.statusText = (n || k) + '', c ? v.resolveWith(m, [p, k, T]) : v.rejectWith(m, [T, k, f]), T.statusCode(w), w = void 0, u && g.trigger(c ? 'ajaxSuccess' : 'ajaxError', [T, h, c ? p : f]), y.fireWith(m, [T, k]), u && (g.trigger('ajaxComplete', [T, h]), --me.active || me.event.trigger('ajaxStop')));
            }

            'object' == typeof t && (n = t, t = void 0), n = n || {};
            var o, r, s, a, l, c, d, u, p, f, h = me.ajaxSetup({}, n), m = h.context || h,
                g = h.context && (m.nodeType || m.jquery) ? me(m) : me.event, v = me.Deferred(),
                y = me.Callbacks('once memory'), w = h.statusCode || {}, b = {}, x = {}, k = 'canceled', T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (d) {
                            if (!a) for (a = {}; t = Nt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()];
                        }
                        return null == t ? null : t;
                    }, getAllResponseHeaders: function () {
                        return d ? s : null;
                    }, setRequestHeader: function (e, t) {
                        return null == d && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, b[e] = t), this;
                    }, overrideMimeType: function (e) {
                        return null == d && (h.mimeType = e), this;
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (d) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]];
                        return this;
                    }, abort: function (e) {
                        var t = e || k;
                        return o && o.abort(t), i(0, t), this;
                    }
                };
            if (v.promise(T), h.url = ((t || h.url || Ct.href) + '').replace(Mt, Ct.protocol + '//'), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || '*').toLowerCase().match(Oe) || [''], null == h.crossDomain) {
                c = ne.createElement('a');
                try {
                    c.href = h.url, c.href = c.href, h.crossDomain = _t.protocol + '//' + _t.host != c.protocol + '//' + c.host;
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if (h.data && h.processData && 'string' != typeof h.data && (h.data = me.param(h.data, h.traditional)), J(qt, h, n, T), d) return T;
            (u = me.event && h.global) && 0 == me.active++ && me.event.trigger('ajaxStart'), h.type = h.type.toUpperCase(), h.hasContent = !Lt.test(h.type), r = h.url.replace(Ht, ''), h.hasContent ? h.data && h.processData && 0 === (h.contentType || '').indexOf('application/x-www-form-urlencoded') && (h.data = h.data.replace(Pt, '+')) : (f = h.url.slice(r.length), h.data && (r += ($t.test(r) ? '&' : '?') + h.data, delete h.data), !1 === h.cache && (r = r.replace(It, '$1'), f = ($t.test(r) ? '&' : '?') + '_=' + St++ + f), h.url = r + f), h.ifModified && (me.lastModified[r] && T.setRequestHeader('If-Modified-Since', me.lastModified[r]), me.etag[r] && T.setRequestHeader('If-None-Match', me.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && T.setRequestHeader('Content-Type', h.contentType), T.setRequestHeader('Accept', h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ('*' !== h.dataTypes[0] ? ', ' + Ft + '; q=0.01' : '') : h.accepts['*']);
            for (p in h.headers) T.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, T, h) || d)) return T.abort();
            if (k = 'abort', y.add(h.complete), T.done(h.success), T.fail(h.error), o = J(zt, h, n, T)) {
                if (T.readyState = 1, u && g.trigger('ajaxSend', [T, h]), d) return T;
                h.async && h.timeout > 0 && (l = e.setTimeout(function () {
                    T.abort('timeout');
                }, h.timeout));
                try {
                    d = !1, o.send(b, i);
                } catch (e) {
                    if (d) throw e;
                    i(-1, e);
                }
            } else i(-1, 'No Transport');
            return T;
        },
        getJSON: function (e, t, n) {
            return me.get(e, t, n, 'json');
        },
        getScript: function (e, t) {
            return me.get(e, void 0, t, 'script');
        }
    }), me.each(['get', 'post'], function (e, t) {
        me[t] = function (e, n, i, o) {
            return me.isFunction(n) && (o = o || i, i = n, n = void 0), me.ajax(me.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, me.isPlainObject(e) && e));
        };
    }), me._evalUrl = function (e) {
        return me.ajax({url: e, type: 'GET', dataType: 'script', cache: !0, async: !1, global: !1, throws: !0});
    }, me.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (me.isFunction(e) && (e = e.call(this[0])), t = me(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e;
            }).append(this)), this;
        }, wrapInner: function (e) {
            return me.isFunction(e) ? this.each(function (t) {
                me(this).wrapInner(e.call(this, t));
            }) : this.each(function () {
                var t = me(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        }, wrap: function (e) {
            var t = me.isFunction(e);
            return this.each(function (n) {
                me(this).wrapAll(t ? e.call(this, n) : e);
            });
        }, unwrap: function (e) {
            return this.parent(e).not('body').each(function () {
                me(this).replaceWith(this.childNodes);
            }), this;
        }
    }), me.expr.pseudos.hidden = function (e) {
        return !me.expr.pseudos.visible(e);
    }, me.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, me.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest;
        } catch (e) {
        }
    };
    var Rt = {0: 200, 1223: 204}, Wt = me.ajaxSettings.xhr();
    fe.cors = !!Wt && 'withCredentials' in Wt, fe.ajax = Wt = !!Wt, me.ajaxTransport(function (t) {
        var n, i;
        if (fe.cors || Wt && !t.crossDomain) return {
            send: function (o, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o['X-Requested-With'] || (o['X-Requested-With'] = 'XMLHttpRequest');
                for (s in o) a.setRequestHeader(s, o[s]);
                n = function (e) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, 'abort' === e ? a.abort() : 'error' === e ? 'number' != typeof a.status ? r(0, 'error') : r(a.status, a.statusText) : r(Rt[a.status] || a.status, a.statusText, 'text' !== (a.responseType || 'text') || 'string' != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()));
                    };
                }, a.onload = n(), i = a.onerror = n('error'), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && i();
                    });
                }, n = n('abort');
                try {
                    a.send(t.hasContent && t.data || null);
                } catch (e) {
                    if (n) throw e;
                }
            }, abort: function () {
                n && n();
            }
        };
    }), me.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
    }), me.ajaxSetup({
        accepts: {script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            'text script': function (e) {
                return me.globalEval(e), e;
            }
        }
    }), me.ajaxPrefilter('script', function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }), me.ajaxTransport('script', function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = me('<script>').prop({charset: e.scriptCharset, src: e.url}).on('load error', n = function (e) {
                        t.remove(), n = null, e && o('error' === e.type ? 404 : 200, e.type);
                    }), ne.head.appendChild(t[0]);
                }, abort: function () {
                    n && n();
                }
            };
        }
    });
    var Bt = [], Qt = /(=)\?(?=&|$)|\?\?/;
    me.ajaxSetup({
        jsonp: 'callback', jsonpCallback: function () {
            var e = Bt.pop() || me.expando + '_' + St++;
            return this[e] = !0, e;
        }
    }), me.ajaxPrefilter('json jsonp', function (t, n, i) {
        var o, r, s,
            a = !1 !== t.jsonp && (Qt.test(t.url) ? 'url' : 'string' == typeof t.data && 0 === (t.contentType || '').indexOf('application/x-www-form-urlencoded') && Qt.test(t.data) && 'data');
        if (a || 'jsonp' === t.dataTypes[0]) return o = t.jsonpCallback = me.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Qt, '$1' + o) : !1 !== t.jsonp && (t.url += ($t.test(t.url) ? '&' : '?') + t.jsonp + '=' + o), t.converters['script json'] = function () {
            return s || me.error(o + ' was not called'), s[0];
        }, t.dataTypes[0] = 'json', r = e[o], e[o] = function () {
            s = arguments;
        }, i.always(function () {
            void 0 === r ? me(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Bt.push(o)), s && me.isFunction(r) && r(s[0]), s = r = void 0;
        }), 'script';
    }), fe.createHTMLDocument = function () {
        var e = ne.implementation.createHTMLDocument('').body;
        return e.innerHTML = '<form></form><form></form>', 2 === e.childNodes.length;
    }(), me.parseHTML = function (e, t, n) {
        if ('string' != typeof e) return [];
        'boolean' == typeof t && (n = t, t = !1);
        var i, o, r;
        return t || (fe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(''), i = t.createElement('base'), i.href = ne.location.href, t.head.appendChild(i)) : t = ne), o = Ce.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = b([e], t, r), r && r.length && me(r).remove(), me.merge([], o.childNodes));
    }, me.fn.load = function (e, t, n) {
        var i, o, r, s = this, a = e.indexOf(' ');
        return a > -1 && (i = X(e.slice(a)), e = e.slice(0, a)), me.isFunction(t) ? (n = t, t = void 0) : t && 'object' == typeof t && (o = 'POST'), s.length > 0 && me.ajax({
            url: e,
            type: o || 'GET',
            dataType: 'html',
            data: t
        }).done(function (e) {
            r = arguments, s.html(i ? me('<div>').append(me.parseHTML(e)).find(i) : e);
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, r || [e.responseText, t, e]);
            });
        }), this;
    }, me.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
        me.fn[t] = function (e) {
            return this.on(t, e);
        };
    }), me.expr.pseudos.animated = function (e) {
        return me.grep(me.timers, function (t) {
            return e === t.elem;
        }).length;
    }, me.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, s, a, l, c = me.css(e, 'position'), d = me(e), u = {};
            'static' === c && (e.style.position = 'relative'), a = d.offset(), r = me.css(e, 'top'), l = me.css(e, 'left'), ('absolute' === c || 'fixed' === c) && (r + l).indexOf('auto') > -1 ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), me.isFunction(t) && (t = t.call(e, n, me.extend({}, a))), null != t.top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + o), 'using' in t ? t.using.call(e, u) : d.css(u);
        }
    }, me.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                me.offset.setOffset(this, e, t);
            });
            var t, n, i, o, r = this[0];
            return r ? r.getClientRects().length ? (i = r.getBoundingClientRect(), t = r.ownerDocument, n = t.documentElement, o = t.defaultView, {
                top: i.top + o.pageYOffset - n.clientTop,
                left: i.left + o.pageXOffset - n.clientLeft
            }) : {top: 0, left: 0} : void 0;
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], i = {top: 0, left: 0};
                return 'fixed' === me.css(n, 'position') ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), o(e[0], 'html') || (i = e.offset()), i = {
                    top: i.top + me.css(e[0], 'borderTopWidth', !0),
                    left: i.left + me.css(e[0], 'borderLeftWidth', !0)
                }), {
                    top: t.top - i.top - me.css(n, 'marginTop', !0),
                    left: t.left - i.left - me.css(n, 'marginLeft', !0)
                };
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === me.css(e, "position");) e = e.offsetParent;
                return e || Ve;
            });
        }
    }), me.each({scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset'}, function (e, t) {
        var n = 'pageYOffset' === t;
        me.fn[e] = function (i) {
            return Ie(this, function (e, i, o) {
                var r;
                return me.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o ? r ? r[t] : e[i] : void (r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o);
            }, e, i, arguments.length);
        };
    }), me.each(['top', 'left'], function (e, t) {
        me.cssHooks[t] = I(fe.pixelPosition, function (e, n) {
            if (n) return n = H(e, t), st.test(n) ? me(e).position()[t] + 'px' : n;
        });
    }), me.each({Height: 'height', Width: 'width'}, function (e, t) {
        me.each({padding: 'inner' + e, content: t, '': 'outer' + e}, function (n, i) {
            me.fn[i] = function (o, r) {
                var s = arguments.length && (n || 'boolean' != typeof o),
                    a = n || (!0 === o || !0 === r ? 'margin' : 'border');
                return Ie(this, function (t, n, o) {
                    var r;
                    return me.isWindow(t) ? 0 === i.indexOf('outer') ? t['inner' + e] : t.document.documentElement['client' + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body['scroll' + e], r['scroll' + e], t.body['offset' + e], r['offset' + e], r['client' + e])) : void 0 === o ? me.css(t, n, a) : me.style(t, n, o, a);
                }, t, s ? o : void 0, s);
            };
        });
    }), me.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n);
        }, unbind: function (e, t) {
            return this.off(e, null, t);
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i);
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
        }
    }), me.holdReady = function (e) {
        e ? me.readyWait++ : me.ready(!0);
    }, me.isArray = Array.isArray, me.parseJSON = JSON.parse, me.nodeName = o, 'function' == typeof define && define.amd && define('jquery', [], function () {
        return me;
    });
    var Ut = e.jQuery, Xt = e.$;
    return me.noConflict = function (t) {
        return e.$ === me && (e.$ = Xt), t && e.jQuery === me && (e.jQuery = Ut), me;
    }, t || (e.jQuery = e.$ = me), me;
}), void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0), function (e, t) {
    'use strict';

    function n(n) {
        var i = t.console;
        o[n] || (o[n] = !0, e.migrateWarnings.push(n), i && i.warn && !e.migrateMute && (i.warn('JQMIGRATE: ' + n), e.migrateTrace && i.trace && i.trace()));
    }

    function i(e, t, i, o) {
        Object.defineProperty(e, t, {
            configurable: !0, enumerable: !0, get: function () {
                return n(o), i;
            }
        });
    }

    e.migrateVersion = '3.0.0', function () {
        var n = t.console && t.console.log && function () {
            t.console.log.apply(t.console, arguments);
        }, i = /^[12]\./;
        n && (e && !i.test(e.fn.jquery) || n('JQMIGRATE: jQuery 3.0.0+ REQUIRED'), e.migrateWarnings && n('JQMIGRATE: Migrate plugin loaded multiple times'), n('JQMIGRATE: Migrate is installed' + (e.migrateMute ? '' : ' with logging active') + ', version ' + e.migrateVersion));
    }();
    var o = {};
    e.migrateWarnings = [], void 0 === e.migrateTrace && (e.migrateTrace = !0), e.migrateReset = function () {
        o = {}, e.migrateWarnings.length = 0;
    }, 'BackCompat' === document.compatMode && n('jQuery is not compatible with Quirks Mode');
    var r = e.fn.init, s = e.isNumeric, a = e.find, l = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        c = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
    e.fn.init = function (e) {
        var t = Array.prototype.slice.call(arguments);
        return 'string' == typeof e && '#' === e && (n('jQuery( \'#\' ) is not a valid selector'), t[0] = []), r.apply(this, t);
    }, e.fn.init.prototype = e.fn, e.find = function (e) {
        var t = Array.prototype.slice.call(arguments);
        if ('string' == typeof e && l.test(e)) try {
            document.querySelector(e);
        } catch (i) {
            e = e.replace(c, function (e, t, n, i) {
                return '[' + t + n + '"' + i + '"]';
            });
            try {
                document.querySelector(e), n('Attribute selector with \'#\' must be quoted: ' + t[0]), t[0] = e;
            } catch (e) {
                n('Attribute selector with \'#\' was not fixed: ' + t[0]);
            }
        }
        return a.apply(this, t);
    };
    var d;
    for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (e.find[d] = a[d]);
    e.fn.size = function () {
        return n('jQuery.fn.size() is deprecated; use the .length property'), this.length;
    }, e.parseJSON = function () {
        return n('jQuery.parseJSON is deprecated; use JSON.parse'), JSON.parse.apply(null, arguments);
    }, e.isNumeric = function (t) {
        var i = s(t), o = function (t) {
            var n = t && t.toString();
            return !e.isArray(t) && n - parseFloat(n) + 1 >= 0;
        }(t);
        return i !== o && n('jQuery.isNumeric() should not be called on constructed objects'), o;
    }, i(e, 'unique', e.uniqueSort, 'jQuery.unique is deprecated, use jQuery.uniqueSort'), i(e.expr, 'filters', e.expr.pseudos, 'jQuery.expr.filters is now jQuery.expr.pseudos'), i(e.expr, ':', e.expr.pseudos, 'jQuery.expr[":"] is now jQuery.expr.pseudos');
    var u = e.ajax;
    e.ajax = function () {
        var e = u.apply(this, arguments);
        return e.promise && (i(e, 'success', e.done, 'jQXHR.success is deprecated and removed'), i(e, 'error', e.fail, 'jQXHR.error is deprecated and removed'), i(e, 'complete', e.always, 'jQXHR.complete is deprecated and removed')), e;
    };
    var p = e.fn.removeAttr, f = e.fn.toggleClass, h = /\S+/g;
    e.fn.removeAttr = function (t) {
        var i = this;
        return e.each(t.match(h), function (t, o) {
            e.expr.match.bool.test(o) && (n('jQuery.fn.removeAttr no longer sets boolean properties: ' + o), i.prop(o, !1));
        }), p.apply(this, arguments);
    }, e.fn.toggleClass = function (t) {
        return void 0 !== t && 'boolean' != typeof t ? f.apply(this, arguments) : (n('jQuery.fn.toggleClass( boolean ) is deprecated'), this.each(function () {
            var n = this.getAttribute && this.getAttribute('class') || '';
            n && e.data(this, '__className__', n), this.setAttribute && this.setAttribute('class', n || !1 === t ? '' : e.data(this, '__className__') || '');
        }));
    };
    var m = !1;
    e.swap && e.each(['height', 'width', 'reliableMarginRight'], function (t, n) {
        var i = e.cssHooks[n] && e.cssHooks[n].get;
        i && (e.cssHooks[n].get = function () {
            var e;
            return m = !0, e = i.apply(this, arguments), m = !1, e;
        });
    }), e.swap = function (e, t, i, o) {
        var r, s, a = {};
        m || n('jQuery.swap() is undocumented and deprecated');
        for (s in t) a[s] = e.style[s], e.style[s] = t[s];
        r = i.apply(e, o || []);
        for (s in t) e.style[s] = a[s];
        return r;
    };
    var g = e.data;
    e.data = function (t, i, o) {
        var r;
        return i && i !== e.camelCase(i) && (r = e.hasData(t) && g.call(this, t)) && i in r ? (n('jQuery.data() always sets/gets camelCased names: ' + i), arguments.length > 2 && (r[i] = o), r[i]) : g.apply(this, arguments);
    };
    var v = e.Tween.prototype.run;
    e.Tween.prototype.run = function (t) {
        e.easing[this.easing].length > 1 && (n('easing function "jQuery.easing.' + this.easing.toString() + '" should use only first argument'), e.easing[this.easing] = e.easing[this.easing].bind(e.easing, t, this.options.duration * t, 0, 1, this.options.duration)), v.apply(this, arguments);
    };
    var y = e.fn.load, w = e.event.fix;
    e.event.props = [], e.event.fixHooks = {}, e.event.fix = function (t) {
        var i, o = t.type, r = this.fixHooks[o], s = e.event.props;
        if (s.length) for (n('jQuery.event.props are deprecated and removed: ' + s.join()); s.length;) e.event.addProp(s.pop());
        if (r && !r._migrated_ && (r._migrated_ = !0, n('jQuery.event.fixHooks are deprecated and removed: ' + o), (s = r.props) && s.length)) for (; s.length;) e.event.addProp(s.pop());
        return i = w.call(this, t), r && r.filter ? r.filter(i, t) : i;
    }, e.each(['load', 'unload', 'error'], function (t, i) {
        e.fn[i] = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return 'load' === i && 'string' == typeof e[0] ? y.apply(this, e) : (n('jQuery.fn.' + i + '() is deprecated'), e.splice(0, 0, i), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this));
        };
    }), e(function () {
        e(document).triggerHandler('ready');
    }), e.event.special.ready = {
        setup: function () {
            this === document && n('\'ready\' event is deprecated');
        }
    }, e.fn.extend({
        bind: function (e, t, i) {
            return n('jQuery.fn.bind() is deprecated'), this.on(e, null, t, i);
        }, unbind: function (e, t) {
            return n('jQuery.fn.unbind() is deprecated'), this.off(e, null, t);
        }, delegate: function (e, t, i, o) {
            return n('jQuery.fn.delegate() is deprecated'), this.on(t, e, i, o);
        }, undelegate: function (e, t, i) {
            return n('jQuery.fn.undelegate() is deprecated'), 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', i);
        }
    });
    var b = e.fn.offset;
    e.fn.offset = function () {
        var t, i = this[0], o = {top: 0, left: 0};
        return i && i.nodeType ? (t = (i.ownerDocument || document).documentElement, e.contains(t, i) ? b.apply(this, arguments) : (n('jQuery.fn.offset() requires an element connected to a document'), o)) : (n('jQuery.fn.offset() requires a valid DOM element'), o);
    };
    var x = e.param;
    e.param = function (t, i) {
        var o = e.ajaxSettings && e.ajaxSettings.traditional;
        return void 0 === i && o && (n('jQuery.param() no longer uses jQuery.ajaxSettings.traditional'), i = o), x.call(this, t, i);
    };
    var k = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function () {
        return n('jQuery.fn.andSelf() replaced by jQuery.fn.addBack()'), k.apply(this, arguments);
    };
    var T = e.Deferred,
        C = [['resolve', 'done', e.Callbacks('once memory'), e.Callbacks('once memory'), 'resolved'], ['reject', 'fail', e.Callbacks('once memory'), e.Callbacks('once memory'), 'rejected'], ['notify', 'progress', e.Callbacks('memory'), e.Callbacks('memory')]];
    e.Deferred = function (t) {
        var i = T(), o = i.promise();
        return i.pipe = o.pipe = function () {
            var t = arguments;
            return n('deferred.pipe() is deprecated'), e.Deferred(function (n) {
                e.each(C, function (r, s) {
                    var a = e.isFunction(t[r]) && t[r];
                    i[s[1]](function () {
                        var t = a && a.apply(this, arguments);
                        t && e.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + 'With'](this === o ? n.promise() : this, a ? [t] : arguments);
                    });
                }), t = null;
            }).promise();
        }, t && t.call(i, i), i;
    };
}(jQuery, window), function (e) {
    'use strict';
    'function' == typeof define && define.amd ? define(['jquery'], e) : 'undefined' != typeof exports ? module.exports = e(require('jquery')) : e(jQuery);
}(function (e) {
    'use strict';
    var t = window.Slick || {};
    (t = function () {
        function t(t, i) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(t),
                appendDots: e(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function (t, n) {
                    return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(n + 1);
                },
                dots: !1,
                dotsClass: 'slick-dots',
                draggable: !0,
                easing: 'linear',
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = 'hidden', r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(t), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = 'visibilitychange', r.windowWidth = 0, r.windowTimer = null, o = e(t).data('slick') || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = 'mozHidden', r.visibilityChange = 'mozvisibilitychange') : void 0 !== document.webkitHidden && (r.hidden = 'webkitHidden', r.visibilityChange = 'webkitvisibilitychange'), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = n++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0);
        }

        var n = 0;
        return t;
    }()).prototype.activateADA = function () {
        this.$slideTrack.find('.slick-active').attr({'aria-hidden': 'false'}).find('a, input, button, select').attr({tabindex: '0'});
    }, t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
        var o = this;
        if ('boolean' == typeof n) i = n, n = null; else if (0 > n || n >= o.slideCount) return !1;
        o.unload(), 'number' == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, n) {
            e(n).attr('data-slick-index', t);
        }), o.$slidesCache = o.$slides, o.reinit();
    }, t.prototype.animateHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({height: t}, e.options.speed);
        }
    }, t.prototype.animateSlide = function (t, n) {
        var i = {}, o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({left: t}, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({top: t}, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({animStart: o.currentLeft}).animate({animStart: t}, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function (e) {
                e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = 'translate(' + e + 'px, 0px)', o.$slideTrack.css(i)) : (i[o.animType] = 'translate(0px,' + e + 'px)', o.$slideTrack.css(i));
            },
            complete: function () {
                n && n.call();
            }
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = 'translate3d(' + t + 'px, 0px, 0px)' : i[o.animType] = 'translate3d(0px,' + t + 'px, 0px)', o.$slideTrack.css(i), n && setTimeout(function () {
            o.disableTransition(), n.call();
        }, o.options.speed));
    }, t.prototype.getNavTarget = function () {
        var t = this, n = t.options.asNavFor;
        return n && null !== n && (n = e(n).not(t.$slider)), n;
    }, t.prototype.asNavFor = function (t) {
        var n = this.getNavTarget();
        null !== n && 'object' == typeof n && n.each(function () {
            var n = e(this).slick('getSlick');
            n.unslicked || n.slideHandler(t, !0);
        });
    }, t.prototype.applyTransition = function (e) {
        var t = this, n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + ' ' + t.options.speed + 'ms ' + t.options.cssEase : n[t.transitionType] = 'opacity ' + t.options.speed + 'ms ' + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
    }, t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
    }, t.prototype.autoPlayClear = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer);
    }, t.prototype.autoPlayIterator = function () {
        var e = this, t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t));
    }, t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass('slick-arrow'), t.$nextArrow = e(t.options.nextArrow).addClass('slick-arrow'), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'), t.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true')) : t.$prevArrow.add(t.$nextArrow).addClass('slick-hidden').attr({
            'aria-disabled': 'true',
            tabindex: '-1'
        }));
    }, t.prototype.buildDots = function () {
        var t, n, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass('slick-dotted'), n = e('<ul />').addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e('<li />').append(i.options.customPaging.call(this, i, t)));
            i.$dots = n.appendTo(i.options.appendDots), i.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
        }
    }, t.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ':not(.slick-cloned)').addClass('slick-slide'), t.slideCount = t.$slides.length, t.$slides.each(function (t, n) {
            e(n).attr('data-slick-index', t).data('originalStyling', e(n).attr('style') || '');
        }), t.$slider.addClass('slick-slider'), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css('opacity', 0), (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1), e('img[data-lazy]', t.$slider).not('[src]').addClass('slick-loading'), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses('number' == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass('draggable');
    }, t.prototype.buildRows = function () {
        var e, t, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; o > e; e++) {
                var l = document.createElement('div');
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement('div');
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var d = e * s + (t * a.options.slidesPerRow + n);
                        r.get(d) && c.appendChild(r.get(d));
                    }
                    l.appendChild(c);
                }
                i.appendChild(l);
            }
            a.$slider.empty().append(i), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + '%',
                display: 'inline-block'
            });
        }
    }, t.prototype.checkResponsive = function (t, n) {
        var i, o, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || e(window).width();
        if ('window' === s.respondTo ? r = c : 'slider' === s.respondTo ? r = l : 'min' === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            o = null;
            for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, 'unslick' === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, 'unslick' === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger('breakpoint', [s, a]);
        }
    }, t.prototype.changeSlide = function (t, n) {
        var i, o, r, s = this, a = e(t.currentTarget);
        switch (a.is('a') && t.preventDefault(), a.is('li') || (a = a.closest('li')), r = s.slideCount % s.options.slidesToScroll != 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
            case'previous':
                o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
                break;
            case'next':
                o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
                break;
            case'index':
                var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger('focus');
                break;
            default:
                return;
        }
    }, t.prototype.checkNavigable = function (e) {
        var t, n;
        if (t = this.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1]; else for (var i in t) {
            if (e < t[i]) {
                e = n;
                break;
            }
            n = t[i];
        }
        return e;
    }, t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && null !== t.$dots && e('li', t.$dots).off('click.slick', t.changeSlide).off('mouseenter.slick', e.proxy(t.interrupt, t, !0)).off('mouseleave.slick', e.proxy(t.interrupt, t, !1)), t.$slider.off('focus.slick blur.slick'), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off('click.slick', t.changeSlide), t.$nextArrow && t.$nextArrow.off('click.slick', t.changeSlide)), t.$list.off('touchstart.slick mousedown.slick', t.swipeHandler), t.$list.off('touchmove.slick mousemove.slick', t.swipeHandler), t.$list.off('touchend.slick mouseup.slick', t.swipeHandler), t.$list.off('touchcancel.slick mouseleave.slick', t.swipeHandler), t.$list.off('click.slick', t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off('keydown.slick', t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off('click.slick', t.selectHandler), e(window).off('orientationchange.slick.slick-' + t.instanceUid, t.orientationChange), e(window).off('resize.slick.slick-' + t.instanceUid, t.resize), e('[draggable!=true]', t.$slideTrack).off('dragstart', t.preventDefault), e(window).off('load.slick.slick-' + t.instanceUid, t.setPosition), e(document).off('ready.slick.slick-' + t.instanceUid, t.setPosition);
    }, t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off('mouseenter.slick', e.proxy(t.interrupt, t, !0)), t.$list.off('mouseleave.slick', e.proxy(t.interrupt, t, !1));
    }, t.prototype.cleanUpRows = function () {
        var e, t = this;
        t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr('style'), t.$slider.empty().append(e));
    }, t.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
    }, t.prototype.destroy = function (t) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e('.slick-cloned', n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', ''), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', ''), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
            e(this).attr('style', e(this).data('originalStyling'));
        }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass('slick-slider'), n.$slider.removeClass('slick-initialized'), n.$slider.removeClass('slick-dotted'), n.unslicked = !0, t || n.$slider.trigger('destroy', [n]);
    }, t.prototype.disableTransition = function (e) {
        var t = this, n = {};
        n[t.transitionType] = '', !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
    }, t.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({zIndex: n.options.zIndex}), n.$slides.eq(e).animate({opacity: 1}, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function () {
            n.disableTransition(e), t.call();
        }, n.options.speed));
    }, t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }));
    }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
    }, t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*:not(.slick-arrow)', function (n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function () {
                t.options.pauseOnFocus && (t.focussed = i.is(':focus'), t.autoPlay());
            }, 0);
        });
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        return this.currentSlide;
    }, t.prototype.getDotCount = function () {
        var e = this, t = 0, n = 0, i = 0;
        if (!0 === e.options.infinite) for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (!0 === e.options.centerMode) i = e.slideCount; else if (e.options.asNavFor) for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1;
    }, t.prototype.getLeft = function (e) {
        var t, n, i, o = this, r = 0;
        return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = n * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + r, !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children('.slick-slide').eq(e) : o.$slideTrack.children('.slick-slide').eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children('.slick-slide').eq(e) : o.$slideTrack.children('.slick-slide').eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)), t;
    }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
        return this.options[e];
    }, t.prototype.getNavigableIndexes = function () {
        var e, t = this, n = 0, i = 0, o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > n;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o;
    }, t.prototype.getSlick = function () {
        return this;
    }, t.prototype.getSlideCount = function () {
        var t, n, i = this;
        return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find('.slick-slide').each(function (o, r) {
            return r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft ? (t = r, !1) : void 0;
        }), Math.abs(e(t).attr('data-slick-index') - i.currentSlide) || 1) : i.options.slidesToScroll;
    }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
        this.changeSlide({data: {message: 'index', index: parseInt(e)}}, t);
    }, t.prototype.init = function (t) {
        var n = this;
        e(n.$slider).hasClass('slick-initialized') || (e(n.$slider).addClass('slick-initialized'), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger('init', [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay());
    }, t.prototype.initADA = function () {
        var t = this;
        t.$slides.add(t.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            tabindex: '-1'
        }).find('a, input, button, select').attr({tabindex: '-1'}), t.$slideTrack.attr('role', 'listbox'), t.$slides.not(t.$slideTrack.find('.slick-cloned')).each(function (n) {
            e(this).attr({role: 'option', 'aria-describedby': 'slick-slide' + t.instanceUid + n});
        }), null !== t.$dots && t.$dots.attr('role', 'tablist').find('li').each(function (n) {
            e(this).attr({
                role: 'presentation',
                'aria-selected': 'false',
                'aria-controls': 'navigation' + t.instanceUid + n,
                id: 'slick-slide' + t.instanceUid + n
            });
        }).first().attr('aria-selected', 'true').end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar'), t.activateADA();
    }, t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off('click.slick').on('click.slick', {message: 'previous'}, e.changeSlide), e.$nextArrow.off('click.slick').on('click.slick', {message: 'next'}, e.changeSlide));
    }, t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e('li', t.$dots).on('click.slick', {message: 'index'}, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e('li', t.$dots).on('mouseenter.slick', e.proxy(t.interrupt, t, !0)).on('mouseleave.slick', e.proxy(t.interrupt, t, !1));
    }, t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover && (t.$list.on('mouseenter.slick', e.proxy(t.interrupt, t, !0)), t.$list.on('mouseleave.slick', e.proxy(t.interrupt, t, !1)));
    }, t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on('touchstart.slick mousedown.slick', {action: 'start'}, t.swipeHandler), t.$list.on('touchmove.slick mousemove.slick', {action: 'move'}, t.swipeHandler), t.$list.on('touchend.slick mouseup.slick', {action: 'end'}, t.swipeHandler), t.$list.on('touchcancel.slick mouseleave.slick', {action: 'end'}, t.swipeHandler), t.$list.on('click.slick', t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on('keydown.slick', t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on('click.slick', t.selectHandler), e(window).on('orientationchange.slick.slick-' + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on('resize.slick.slick-' + t.instanceUid, e.proxy(t.resize, t)), e('[draggable!=true]', t.$slideTrack).on('dragstart', t.preventDefault), e(window).on('load.slick.slick-' + t.instanceUid, t.setPosition), e(document).on('ready.slick.slick-' + t.instanceUid, t.setPosition);
    }, t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
    }, t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match('TEXTAREA|INPUT|SELECT') || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({data: {message: !0 === t.options.rtl ? 'next' : 'previous'}}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({data: {message: !0 === t.options.rtl ? 'previous' : 'next'}}));
    }, t.prototype.lazyLoad = function () {
        function t(t) {
            e('img[data-lazy]', t).each(function () {
                var t = e(this), n = e(this).attr('data-lazy'), i = document.createElement('img');
                i.onload = function () {
                    t.animate({opacity: 0}, 100, function () {
                        t.attr('src', n).animate({opacity: 1}, 200, function () {
                            t.removeAttr('data-lazy').removeClass('slick-loading');
                        }), r.$slider.trigger('lazyLoaded', [r, t, n]);
                    });
                }, i.onerror = function () {
                    t.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error'), r.$slider.trigger('lazyLoadError', [r, t, n]);
                }, i.src = n;
            });
        }

        var n, i, o, r = this;
        !0 === r.options.centerMode ? !0 === r.options.infinite ? (i = r.currentSlide + (r.options.slidesToShow / 2 + 1), o = i + r.options.slidesToShow + 2) : (i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, o = Math.ceil(i + r.options.slidesToShow), !0 === r.options.fade && (i > 0 && i--, o <= r.slideCount && o++)), t(r.$slider.find('.slick-slide').slice(i, o)), r.slideCount <= r.options.slidesToShow ? (n = r.$slider.find('.slick-slide'), t(n)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (n = r.$slider.find('.slick-cloned').slice(0, r.options.slidesToShow), t(n)) : 0 === r.currentSlide && (n = r.$slider.find('.slick-cloned').slice(-1 * r.options.slidesToShow), t(n));
    }, t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass('slick-loading'), e.initUI(), 'progressive' === e.options.lazyLoad && e.progressiveLazyLoad();
    }, t.prototype.next = t.prototype.slickNext = function () {
        this.changeSlide({data: {message: 'next'}});
    }, t.prototype.orientationChange = function () {
        var e = this;
        e.checkResponsive(), e.setPosition();
    }, t.prototype.pause = t.prototype.slickPause = function () {
        var e = this;
        e.autoPlayClear(), e.paused = !0;
    }, t.prototype.play = t.prototype.slickPlay = function () {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1;
    }, t.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger('afterChange', [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA());
    }, t.prototype.prev = t.prototype.slickPrev = function () {
        this.changeSlide({data: {message: 'previous'}});
    }, t.prototype.preventDefault = function (e) {
        e.preventDefault();
    }, t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var n, i, o, r = this, s = e('img[data-lazy]', r.$slider);
        s.length ? (n = s.first(), i = n.attr('data-lazy'), o = document.createElement('img'), o.onload = function () {
            n.attr('src', i).removeAttr('data-lazy').removeClass('slick-loading'), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger('lazyLoaded', [r, n, i]), r.progressiveLazyLoad();
        }, o.onerror = function () {
            3 > t ? setTimeout(function () {
                r.progressiveLazyLoad(t + 1);
            }, 500) : (n.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error'), r.$slider.trigger('lazyLoadError', [r, n, i]), r.progressiveLazyLoad());
        }, o.src = i) : r.$slider.trigger('allImagesLoaded', [r]);
    }, t.prototype.refresh = function (t) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {currentSlide: n}), o.init(), t || o.changeSlide({
            data: {
                message: 'index',
                index: n
            }
        }, !1);
    }, t.prototype.registerBreakpoints = function () {
        var t, n, i, o = this, r = o.options.responsive || null;
        if ('array' === e.type(r) && r.length) {
            o.respondTo = o.options.respondTo || 'window';
            for (t in r) if (i = o.breakpoints.length - 1, n = r[t].breakpoint, r.hasOwnProperty(t)) {
                for (; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings;
            }
            o.breakpoints.sort(function (e, t) {
                return o.options.mobileFirst ? e - t : t - e;
            });
        }
    }, t.prototype.reinit = function () {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass('slick-slide'), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on('click.slick', t.selectHandler), t.setSlideClasses('number' == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger('reInit', [t]);
    }, t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition();
        }, 50));
    }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
        var i = this;
        return 'boolean' == typeof e ? (t = e, e = !0 === t ? 0 : i.slideCount - 1) : e = !0 === t ? --e : e, !(i.slideCount < 1 || 0 > e || e > i.slideCount - 1) && (i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit());
    }, t.prototype.setCSS = function (e) {
        var t, n, i = this, o = {};
        !0 === i.options.rtl && (e = -e), t = 'left' == i.positionProp ? Math.ceil(e) + 'px' : '0px', n = 'top' == i.positionProp ? Math.ceil(e) + 'px' : '0px', o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = 'translate(' + t + ', ' + n + ')', i.$slideTrack.css(o)) : (o[i.animType] = 'translate3d(' + t + ', ' + n + ', 0px)', i.$slideTrack.css(o)));
    }, t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({padding: '0px ' + e.options.centerPadding}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({padding: e.options.centerPadding + ' 0px'})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children('.slick-slide').length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children('.slick-slide').length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children('.slick-slide').width(e.slideWidth - t);
    }, t.prototype.setFade = function () {
        var t, n = this;
        n.$slides.each(function (i, o) {
            t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                position: 'relative',
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({position: 'relative', left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0});
        }), n.$slides.eq(n.currentSlide).css({zIndex: n.options.zIndex - 1, opacity: 1});
    }, t.prototype.setHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css('height', t);
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function () {
        var t, n, i, o, r, s = this, a = !1;
        if ('object' === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = 'multiple') : 'string' === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], 'responsive' === arguments[0] && 'array' === e.type(arguments[1]) ? r = 'responsive' : void 0 !== arguments[1] && (r = 'single')), 'single' === r) s.options[i] = o; else if ('multiple' === r) e.each(i, function (e, t) {
            s.options[e] = t;
        }); else if ('responsive' === r) for (n in o) if ('array' !== e.type(s.options.responsive)) s.options.responsive = [o[n]]; else {
            for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
            s.options.responsive.push(o[n]);
        }
        a && (s.unload(), s.reinit());
    }, t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger('setPosition', [e]);
    }, t.prototype.setProps = function () {
        var e = this, t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? 'top' : 'left', 'top' === e.positionProp ? e.$slider.addClass('slick-vertical') : e.$slider.removeClass('slick-vertical'), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ('number' == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = 'OTransform', e.transformType = '-o-transform', e.transitionType = 'OTransition', void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = 'MozTransform', e.transformType = '-moz-transform', e.transitionType = 'MozTransition', void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = 'webkitTransform', e.transformType = '-webkit-transform', e.transitionType = 'webkitTransition', void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = 'msTransform', e.transformType = '-ms-transform', e.transitionType = 'msTransition', void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = 'transform', e.transformType = 'transform', e.transitionType = 'transition'), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType;
    }, t.prototype.setSlideClasses = function (e) {
        var t, n, i, o, r = this;
        n = r.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true'), r.$slides.eq(e).addClass('slick-current'), !0 === r.options.centerMode ? (t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass('slick-active').attr('aria-hidden', 'false') : (i = r.options.slidesToShow + e, n.slice(i - t + 1, i + t + 2).addClass('slick-active').attr('aria-hidden', 'false')), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass('slick-center') : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass('slick-center')), r.$slides.eq(e).addClass('slick-center')) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false') : n.length <= r.options.slidesToShow ? n.addClass('slick-active').attr('aria-hidden', 'false') : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass('slick-active').attr('aria-hidden', 'false') : n.slice(i, i + r.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false')), 'ondemand' === r.options.lazyLoad && r.lazyLoad();
    }, t.prototype.setupInfinite = function () {
        var t, n, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr('id', '').attr('data-slick-index', n - o.slideCount).prependTo(o.$slideTrack).addClass('slick-cloned');
            for (t = 0; i > t; t += 1) n = t, e(o.$slides[n]).clone(!0).attr('id', '').attr('data-slick-index', n + o.slideCount).appendTo(o.$slideTrack).addClass('slick-cloned');
            o.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                e(this).attr('id', '');
            });
        }
    }, t.prototype.interrupt = function (e) {
        var t = this;
        e || t.autoPlay(), t.interrupted = e;
    }, t.prototype.selectHandler = function (t) {
        var n = this, i = e(t.target).is('.slick-slide') ? e(t.target) : e(t.target).parents('.slick-slide'),
            o = parseInt(i.attr('data-slick-index'));
        return o || (o = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(o), void n.asNavFor(o)) : void n.slideHandler(o);
    }, t.prototype.slideHandler = function (e, t, n) {
        var i, o, r, s, a, l = null, c = this;
        return t = t || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (0 > e || e > c.getDotCount() * c.options.slidesToScroll) ? void (!1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function () {
            c.postSlide(i);
        }) : c.postSlide(i))) : !1 === c.options.infinite && !0 === c.options.centerMode && (0 > e || e > c.slideCount - c.options.slidesToScroll) ? void (!1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function () {
            c.postSlide(i);
        }) : c.postSlide(i))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = 0 > i ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger('beforeChange', [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), (a = a.slick('getSlick')).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, function () {
            c.postSlide(o);
        })) : c.postSlide(o), void c.animateHeight()) : void (!0 !== n ? c.animateSlide(l, function () {
            c.postSlide(o);
        }) : c.postSlide(o))));
    }, t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass('slick-loading');
    }, t.prototype.swipeDirection = function () {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), 0 > (i = Math.round(180 * n / Math.PI)) && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? !1 === o.options.rtl ? 'left' : 'right' : 360 >= i && i >= 315 ? !1 === o.options.rtl ? 'left' : 'right' : i >= 135 && 225 >= i ? !1 === o.options.rtl ? 'right' : 'left' : !0 === o.options.verticalSwiping ? i >= 35 && 135 >= i ? 'down' : 'up' : 'vertical';
    }, t.prototype.swipeEnd = function (e) {
        var t, n, i = this;
        if (i.dragging = !1, i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger('edge', [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
                case'left':
                case'down':
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                    break;
                case'right':
                case'up':
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1;
            }
            'vertical' != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger('swipe', [i, n]));
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {});
    }, t.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || 'ontouchend' in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf('mouse'))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case'start':
                t.swipeStart(e);
                break;
            case'move':
                t.swipeMove(e);
                break;
            case'end':
                t.swipeEnd(e);
        }
    }, t.prototype.swipeMove = function (e) {
        var t, n, i, o, r, s = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), n = s.swipeDirection(), 'vertical' !== n ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(), o = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, !1 === s.options.infinite && (0 === s.currentSlide && 'right' === n || s.currentSlide >= s.getDotCount() && 'left' === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = t + i * o : s.swipeLeft = t + i * (s.$list.height() / s.listWidth) * o, !0 === s.options.verticalSwiping && (s.swipeLeft = t + i * o), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0);
    }, t.prototype.swipeStart = function (e) {
        var t, n = this;
        return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void (n.dragging = !0));
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
    }, t.prototype.unload = function () {
        var t = this;
        e('.slick-cloned', t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
    }, t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger('unslick', [t, e]), t.destroy();
    }, t.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'), e.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'), 0 === e.currentSlide ? (e.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true'), e.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true'), e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true'), e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')));
    }, t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots && (e.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true'), e.$dots.find('li').eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false'));
    }, t.prototype.visibility = function () {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1);
    }, e.fn.slick = function () {
        var e, n, i = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = i.length;
        for (e = 0; s > e; e++) if ('object' == typeof o || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), void 0 !== n) return n;
        return i;
    };
}), function (e) {
    'function' == typeof define && define.amd ? define(['jquery'], e) : e('object' == typeof exports ? require('jquery') : window.jQuery || window.Zepto);
}(function (e) {
    var t, n, i, o, r, s, a = 'Close', l = 'BeforeClose', c = 'MarkupParse', d = 'Open', u = 'Change', p = 'mfp',
        f = '.' + p, h = 'mfp-ready', m = 'mfp-removing', g = 'mfp-prevent-close', v = function () {
        }, y = !!window.jQuery, w = e(window), b = function (e, n) {
            t.ev.on(p + e + f, n);
        }, x = function (t, n, i, o) {
            var r = document.createElement('div');
            return r.className = 'mfp-' + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r;
        }, k = function (n, i) {
            t.ev.triggerHandler(p + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
        }, T = function (n) {
            return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace('%title%', t.st.tClose)), s = n), t.currTemplate.closeBtn;
        }, C = function () {
            e.magnificPopup.instance || ((t = new v).init(), e.magnificPopup.instance = t);
        }, S = function () {
            var e = document.createElement('p').style, t = ['ms', 'O', 'Moz', 'Webkit'];
            if (void 0 !== e.transition) return !0;
            for (; t.length;) if (t.pop() + 'Transition' in e) return !0;
            return !1;
        };
    v.prototype = {
        constructor: v, init: function () {
            var n = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {};
        }, open: function (n) {
            var o;
            if (!1 === n.isObj) {
                t.items = n.items.toArray(), t.index = 0;
                var s, a = n.items;
                for (o = 0; o < a.length; o++) if ((s = a[o]).parsed && (s = s.el[0]), s === n.el[0]) {
                    t.index = o;
                    break;
                }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            {
                if (!t.isOpen) {
                    t.types = [], r = '', n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = 'auto' === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = x('bg').on('click' + f, function () {
                        t.close();
                    }), t.wrap = x('wrap').attr('tabindex', -1).on('click' + f, function (e) {
                        t._checkIfClose(e.target) && t.close();
                    }), t.container = x('container', t.wrap)), t.contentContainer = x('content'), t.st.preloader && (t.preloader = x('preloader', t.container, t.st.tLoading));
                    var l = e.magnificPopup.modules;
                    for (o = 0; o < l.length; o++) {
                        var u = l[o];
                        u = u.charAt(0).toUpperCase() + u.slice(1), t['init' + u].call(t);
                    }
                    k('BeforeOpen'), t.st.showCloseBtn && (t.st.closeBtnInside ? (b(c, function (e, t, n, i) {
                        n.close_replaceWith = T(i.type);
                    }), r += ' mfp-close-btn-in') : t.wrap.append(T())), t.st.alignTop && (r += ' mfp-align-top'), t.fixedContentPos ? t.wrap.css({
                        overflow: t.st.overflowY,
                        overflowX: 'hidden',
                        overflowY: t.st.overflowY
                    }) : t.wrap.css({
                        top: w.scrollTop(),
                        position: 'absolute'
                    }), (!1 === t.st.fixedBgPos || 'auto' === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                        height: i.height(),
                        position: 'absolute'
                    }), t.st.enableEscapeKey && i.on('keyup' + f, function (e) {
                        27 === e.keyCode && t.close();
                    }), w.on('resize' + f, function () {
                        t.updateSize();
                    }), t.st.closeOnContentClick || (r += ' mfp-auto-cursor'), r && t.wrap.addClass(r);
                    var p = t.wH = w.height(), m = {};
                    if (t.fixedContentPos && t._hasScrollBar(p)) {
                        var g = t._getScrollbarSize();
                        g && (m.marginRight = g);
                    }
                    t.fixedContentPos && (t.isIE7 ? e('body, html').css('overflow', 'hidden') : m.overflow = 'hidden');
                    var v = t.st.mainClass;
                    return t.isIE7 && (v += ' mfp-ie7'), v && t._addClassToMFP(v), t.updateItemHTML(), k('BuildControls'), e('html').css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
                        t.content ? (t._addClassToMFP(h), t._setFocus()) : t.bgOverlay.addClass(h), i.on('focusin' + f, t._onFocusIn);
                    }, 16), t.isOpen = !0, t.updateSize(p), k(d), n;
                }
                t.updateItemHTML();
            }
        }, close: function () {
            t.isOpen && (k(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(m), setTimeout(function () {
                t._close();
            }, t.st.removalDelay)) : t._close());
        }, _close: function () {
            k(a);
            var n = m + ' ' + h + ' ';
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + ' '), t._removeClassFromMFP(n), t.fixedContentPos) {
                var o = {marginRight: ''};
                t.isIE7 ? e('body, html').css('overflow', '') : o.overflow = '', e('html').css(o);
            }
            i.off('keyup.mfp focusin' + f), t.ev.off(f), t.wrap.attr('class', 'mfp-wrap').removeAttr('style'), t.bgOverlay.attr('class', 'mfp-bg'), t.container.attr('class', 'mfp-container'), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, k('AfterClose');
        }, updateSize: function (e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth, i = window.innerHeight * n;
                t.wrap.css('height', i), t.wH = i;
            } else t.wH = e || w.height();
            t.fixedContentPos || t.wrap.css('height', t.wH), k('Resize');
        }, updateItemHTML: function () {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (k('BeforeChange', [t.currItem ? t.currItem.type : '', i]), t.currItem = n, !t.currTemplate[i]) {
                var r = !!t.st[i] && t.st[i].markup;
                k('FirstMarkupParse', r), t.currTemplate[i] = !r || e(r);
            }
            o && o !== n.type && t.container.removeClass('mfp-' + o + '-holder');
            var s = t['get' + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(s, i), n.preloaded = !0, k(u, n), o = n.type, t.container.prepend(t.contentContainer), k('AfterChange');
        }, appendContent: function (e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find('.mfp-close').length || t.content.append(T()) : t.content = e : t.content = '', k('BeforeAppend'), t.container.addClass('mfp-' + n + '-holder'), t.contentContainer.append(t.content);
        }, parseEl: function (n) {
            var i, o = t.items[n];
            if (o.tagName ? o = {el: e(o)} : (i = o.type, o = {data: o, src: o.src}), o.el) {
                for (var r = t.types, s = 0; s < r.length; s++) if (o.el.hasClass('mfp-' + r[s])) {
                    i = r[s];
                    break;
                }
                o.src = o.el.attr('data-mfp-src'), o.src || (o.src = o.el.attr('href'));
            }
            return o.type = i || t.st.type || 'inline', o.index = n, o.parsed = !0, t.items[n] = o, k('ElementParse', o), t.items[n];
        }, addGroup: function (e, n) {
            var i = function (i) {
                i.mfpEl = this, t._openClick(i, e, n);
            };
            n || (n = {});
            var o = 'click.magnificPopup';
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)));
        }, _openClick: function (n, i, o) {
            if ((void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                var r = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (r) if (e.isFunction(r)) {
                    if (!r.call(t)) return !0;
                } else if (w.width() < r) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o);
            }
        }, updateStatus: function (e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass('mfp-s-' + n), i || 'loading' !== e || (i = t.st.tLoading);
                var o = {status: e, text: i};
                k('UpdateStatus', o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find('a').on('click', function (e) {
                    e.stopImmediatePropagation();
                }), t.container.addClass('mfp-s-' + e), n = e;
            }
        }, _checkIfClose: function (n) {
            if (!e(n).hasClass(g)) {
                var i = t.st.closeOnContentClick, o = t.st.closeOnBgClick;
                if (i && o) return !0;
                if (!t.content || e(n).hasClass('mfp-close') || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0;
                } else if (o && e.contains(document, n)) return !0;
                return !1;
            }
        }, _addClassToMFP: function (e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e);
        }, _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
        }, _hasScrollBar: function (e) {
            return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || w.height());
        }, _setFocus: function () {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
        }, _onFocusIn: function (n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1);
        }, _parseMarkup: function (t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)), k(c, [t, n, i]), e.each(n, function (n, i) {
                if (void 0 === i || !1 === i) return !0;
                if ((o = n.split('_')).length > 1) {
                    var r = t.find(f + '-' + o[0]);
                    if (r.length > 0) {
                        var s = o[1];
                        'replaceWith' === s ? r[0] !== i[0] && r.replaceWith(i) : 'img' === s ? r.is('img') ? r.attr('src', i) : r.replaceWith(e('<img>').attr('src', i).attr('class', r.attr('class'))) : r.attr(o[1], i);
                    }
                } else t.find(f + '-' + n).html(i);
            });
        }, _getScrollbarSize: function () {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement('div');
                e.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;', document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
            }
            return t.scrollbarSize;
        }
    }, e.magnificPopup = {
        instance: null,
        proto: v.prototype,
        modules: [],
        open: function (t, n) {
            return C(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t);
        },
        close: function () {
            return e.magnificPopup.instance && e.magnificPopup.instance.close();
        },
        registerModule: function (t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t);
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: '',
            preloader: !0,
            focus: '',
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: 'auto',
            fixedBgPos: 'auto',
            overflowY: 'auto',
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: 'Close (Esc)',
            tLoading: 'Loading...',
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function (n) {
        C();
        var i = e(this);
        if ('string' == typeof n) if ('open' === n) {
            var o, r = y ? i.data('magnificPopup') : i[0].magnificPopup, s = parseInt(arguments[1], 10) || 0;
            r.items ? o = r.items[s] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), t._openClick({mfpEl: o}, i, r);
        } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1)); else n = e.extend(!0, {}, n), y ? i.data('magnificPopup', n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i;
    };
    var $, E, A, j = 'inline', O = function () {
        A && (E.after(A.addClass($)).detach(), A = null);
    };
    e.magnificPopup.registerModule(j, {
        options: {hiddenClass: 'hide', markup: '', tNotFound: 'Content not found'},
        proto: {
            initInline: function () {
                t.types.push(j), b(a + '.' + j, function () {
                    O();
                });
            }, getInline: function (n, i) {
                if (O(), n.src) {
                    var o = t.st.inline, r = e(n.src);
                    if (r.length) {
                        var s = r[0].parentNode;
                        s && s.tagName && (E || ($ = o.hiddenClass, E = x($), $ = 'mfp-' + $), A = r.after(E).detach().removeClass($)), t.updateStatus('ready');
                    } else t.updateStatus('error', o.tNotFound), r = e('<div>');
                    return n.inlineElement = r, r;
                }
                return t.updateStatus('ready'), t._parseMarkup(i, {}, n), i;
            }
        }
    });
    var P, H = 'ajax', I = function () {
        P && e(document.body).removeClass(P);
    }, N = function () {
        I(), t.req && t.req.abort();
    };
    e.magnificPopup.registerModule(H, {
        options: {
            settings: null,
            cursor: 'mfp-ajax-cur',
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                t.types.push(H), P = t.st.ajax.cursor, b(a + '.' + H, N), b('BeforeChange.' + H, N);
            }, getAjax: function (n) {
                P && e(document.body).addClass(P), t.updateStatus('loading');
                var i = e.extend({
                    url: n.src, success: function (i, o, r) {
                        var s = {data: i, xhr: r};
                        k('ParseAjax', s), t.appendContent(e(s.data), H), n.finished = !0, I(), t._setFocus(), setTimeout(function () {
                            t.wrap.addClass(h);
                        }, 16), t.updateStatus('ready'), k('AjaxContentAdded');
                    }, error: function () {
                        I(), n.finished = n.loadError = !0, t.updateStatus('error', t.st.ajax.tError.replace('%url%', n.src));
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(i), '';
            }
        }
    });
    var D, L = function (n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i)) return i.call(t, n);
            if (n.el) return n.el.attr(i) || '';
        }
        return '';
    };
    e.magnificPopup.registerModule('image', {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: 'mfp-zoom-out-cur',
            titleSrc: 'title',
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var n = t.st.image, i = '.image';
                t.types.push('image'), b(d + i, function () {
                    'image' === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor);
                }), b(a + i, function () {
                    n.cursor && e(document.body).removeClass(n.cursor), w.off('resize' + f);
                }), b('Resize' + i, t.resizeImage), t.isLowIE && b('AfterChange', t.resizeImage);
            }, resizeImage: function () {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css('padding-top'), 10) + parseInt(e.img.css('padding-bottom'), 10)), e.img.css('max-height', t.wH - n);
                }
            }, _onImageHasSize: function (e) {
                e.img && (e.hasSize = !0, D && clearInterval(D), e.isCheckingImgSize = !1, k('ImageHasSize', e), e.imgHidden && (t.content && t.content.removeClass('mfp-loading'), e.imgHidden = !1));
            }, findImageSize: function (e) {
                var n = 0, i = e.img[0], o = function (r) {
                    D && clearInterval(D), D = setInterval(function () {
                        return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(D), n++, void (3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)));
                    }, r);
                };
                o(1);
            }, getImage: function (n, i) {
                var o = 0, r = function () {
                    n && (n.img[0].complete ? (n.img.off('.mfploader'), n === t.currItem && (t._onImageHasSize(n), t.updateStatus('ready')), n.hasSize = !0, n.loaded = !0, k('ImageLoadComplete')) : (o++, 200 > o ? setTimeout(r, 100) : s()));
                }, s = function () {
                    n && (n.img.off('.mfploader'), n === t.currItem && (t._onImageHasSize(n), t.updateStatus('error', a.tError.replace('%url%', n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0);
                }, a = t.st.image, l = i.find('.mfp-img');
                if (l.length) {
                    var c = document.createElement('img');
                    c.className = 'mfp-img', n.el && n.el.find('img').length && (c.alt = n.el.find('img').attr('alt')), n.img = e(c).on('load.mfploader', r).on('error.mfploader', s), c.src = n.src, l.is('img') && (n.img = n.img.clone()), (c = n.img[0]).naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1);
                }
                return t._parseMarkup(i, {
                    title: L(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (D && clearInterval(D), n.loadError ? (i.addClass('mfp-loading'), t.updateStatus('error', a.tError.replace('%url%', n.src))) : (i.removeClass('mfp-loading'), t.updateStatus('ready')), i) : (t.updateStatus('loading'), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass('mfp-loading'), t.findImageSize(n)), i);
            }
        }
    });
    var M, q = function () {
        return void 0 === M && (M = void 0 !== document.createElement('p').style.MozTransform), M;
    };
    e.magnificPopup.registerModule('zoom', {
        options: {
            enabled: !1, easing: 'ease-in-out', duration: 300, opener: function (e) {
                return e.is('img') ? e : e.find('img');
            }
        }, proto: {
            initZoom: function () {
                var e, n = t.st.zoom, i = '.zoom';
                if (n.enabled && t.supportsTransition) {
                    var o, r, s = n.duration, c = function (e) {
                        var t = e.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
                            i = 'all ' + n.duration / 1e3 + 's ' + n.easing, o = {
                                position: 'fixed',
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                '-webkit-backface-visibility': 'hidden'
                            }, r = 'transition';
                        return o['-webkit-' + r] = o['-moz-' + r] = o['-o-' + r] = o[r] = i, t.css(o), t;
                    }, d = function () {
                        t.content.css('visibility', 'visible');
                    };
                    b('BuildControls' + i, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css('visibility', 'hidden'), !(e = t._getItemToZoom())) return void d();
                            (r = c(e)).css(t._getOffset()), t.wrap.append(r), o = setTimeout(function () {
                                r.css(t._getOffset(!0)), o = setTimeout(function () {
                                    d(), setTimeout(function () {
                                        r.remove(), e = r = null, k('ZoomAnimationEnded');
                                    }, 16);
                                }, s);
                            }, 16);
                        }
                    }), b(l + i, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = s, !e) {
                                if (!(e = t._getItemToZoom())) return;
                                r = c(e);
                            }
                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css('visibility', 'hidden'), setTimeout(function () {
                                r.css(t._getOffset());
                            }, 16);
                        }
                    }), b(a + i, function () {
                        t._allowZoom() && (d(), r && r.remove(), e = null);
                    });
                }
            }, _allowZoom: function () {
                return 'image' === t.currItem.type;
            }, _getItemToZoom: function () {
                return !!t.currItem.hasSize && t.currItem.img;
            }, _getOffset: function (n) {
                var i, o = (i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
                    r = parseInt(i.css('padding-top'), 10), s = parseInt(i.css('padding-bottom'), 10);
                o.top -= e(window).scrollTop() - r;
                var a = {width: i.width(), height: (y ? i.innerHeight() : i[0].offsetHeight) - s - r};
                return q() ? a['-moz-transform'] = a.transform = 'translate(' + o.left + 'px,' + o.top + 'px)' : (a.left = o.left, a.top = o.top), a;
            }
        }
    });
    var z = 'iframe', F = function (e) {
        if (t.currTemplate[z]) {
            var n = t.currTemplate[z].find('iframe');
            n.length && (e || (n[0].src = '//about:blank'), t.isIE8 && n.css('display', e ? 'block' : 'none'));
        }
    };
    e.magnificPopup.registerModule(z, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: 'iframe_src',
            patterns: {
                youtube: {index: 'youtube.com', id: 'v=', src: '//www.youtube.com/embed/%id%?autoplay=1'},
                vimeo: {index: 'vimeo.com/', id: '/', src: '//player.vimeo.com/video/%id%?autoplay=1'},
                gmaps: {index: '//maps.google.', src: '%id%&output=embed'}
            }
        }, proto: {
            initIframe: function () {
                t.types.push(z), b('BeforeChange', function (e, t, n) {
                    t !== n && (t === z ? F() : n === z && F(!0));
                }), b(a + '.' + z, function () {
                    F();
                });
            }, getIframe: function (n, i) {
                var o = n.src, r = t.st.iframe;
                e.each(r.patterns, function () {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = 'string' == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace('%id%', o), !1) : void 0;
                });
                var s = {};
                return r.srcAction && (s[r.srcAction] = o), t._parseMarkup(i, s, n), t.updateStatus('ready'), i;
            }
        }
    });
    var _ = function (e) {
        var n = t.items.length;
        return e > n - 1 ? e - n : 0 > e ? n + e : e;
    }, R = function (e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
    };
    e.magnificPopup.registerModule('gallery', {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '%curr% of %total%'
        }, proto: {
            initGallery: function () {
                var n = t.st.gallery, o = '.mfp-gallery';
                return t.direction = !0, !(!n || !n.enabled) && (r += ' mfp-gallery', b(d + o, function () {
                    n.navigateByImgClick && t.wrap.on('click' + o, '.mfp-img', function () {
                        return t.items.length > 1 ? (t.next(), !1) : void 0;
                    }), i.on('keydown' + o, function (e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                    });
                }), b('UpdateStatus' + o, function (e, n) {
                    n.text && (n.text = R(n.text, t.currItem.index, t.items.length));
                }), b(c + o, function (e, i, o, r) {
                    var s = t.items.length;
                    o.counter = s > 1 ? R(n.tCounter, r.index, s) : '';
                }), b('BuildControls' + o, function () {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                            o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, 'left')).addClass(g),
                            r = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, 'right')).addClass(g);
                        o.click(function () {
                            t.prev();
                        }), r.click(function () {
                            t.next();
                        }), t.container.append(o.add(r));
                    }
                }), b(u + o, function () {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
                        t.preloadNearbyImages(), t._preloadTimeout = null;
                    }, 16);
                }), void b(a + o, function () {
                    i.off(o), t.wrap.off('click' + o), t.arrowRight = t.arrowLeft = null;
                }));
            }, next: function () {
                t.direction = !0, t.index = _(t.index + 1), t.updateItemHTML();
            }, prev: function () {
                t.direction = !1, t.index = _(t.index - 1), t.updateItemHTML();
            }, goTo: function (e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML();
            }, preloadNearbyImages: function () {
                var e, n = t.st.gallery.preload, i = Math.min(n[0], t.items.length), o = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : i); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? i : o); e++) t._preloadItem(t.index - e);
            }, _preloadItem: function (n) {
                if (n = _(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), k('LazyLoad', i), 'image' === i.type && (i.img = e('<img class="mfp-img" />').on('load.mfploader', function () {
                        i.hasSize = !0;
                    }).on('error.mfploader', function () {
                        i.hasSize = !0, i.loadError = !0, k('LazyLoadError', i);
                    }).attr('src', i.src)), i.preloaded = !0;
                }
            }
        }
    });
    var W = 'retina';
    e.magnificPopup.registerModule(W, {
        options: {
            replaceSrc: function (e) {
                return e.src.replace(/\.\w+$/, function (e) {
                    return '@2x' + e;
                });
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina, n = e.ratio;
                    (n = isNaN(n) ? n() : n) > 1 && (b('ImageHasSize.' + W, function (e, t) {
                        t.img.css({'max-width': t.img[0].naturalWidth / n, width: '100%'});
                    }), b('ElementParse.' + W, function (t, i) {
                        i.src = e.replaceSrc(i, n);
                    }));
                }
            }
        }
    }), C();
}), function (e) {
    e(function () {
        e('div.share42init').each(function (t) {
            var n = e(this), i = n.attr('data-url'), o = n.attr('data-title'), r = n.attr('data-image'),
                s = n.attr('data-description'), a = n.attr('data-path'), l = n.attr('data-icons-file'),
                c = n.attr('data-zero-counter');
            if (i || (i = location.href), l || (l = 'icons.png'), c || (c = 0), a || (a = function (e) {
                for (var t = document.getElementsByTagName('script'), n = new RegExp('^(.*/|)(' + e + ')([#?]|$)'), i = 0, o = t.length; i < o; i++) {
                    var r = String(t[i].src).match(n);
                    if (r) return r[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/) ? r[1] : 0 == r[1].indexOf('/') ? r[1] : (b = document.getElementsByTagName('base'), b[0] && b[0].href ? b[0].href + r[1] : document.location.pathname.match(/(.*[\/\\])/)[0] + r[1]);
                }
                return null;
            }('share42.js')), o || (o = document.title), !s) {
                var d = e('meta[name="description"]').attr('content');
                s = void 0 !== d ? d : '';
            }
            i = encodeURIComponent(i), o = (o = encodeURIComponent(o)).replace(/\'/g, '%27'), r = encodeURIComponent(r), s = (s = encodeURIComponent(s)).replace(/\'/g, '%27');
            var u = '';
            'null' != r && '' != r && (u = '&image=' + r);
            var p = new Array('"#" data-count="vk" onclick="window.open(\'//vk.com/share.php?url=' + i + '&title=' + o + u + '&description=' + s + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться В Контакте"', '"#" data-count="odkl" onclick="window.open(\'//ok.ru/dk?st.cmd=addShare&st._surl=' + i + '&title=' + o + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Одноклассники"', '"#" data-count="fb" onclick="window.open(\'//www.facebook.com/sharer/sharer.php?u=' + i + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Facebook"', '"#" data-count="twi" onclick="window.open(\'//twitter.com/intent/tweet?text=' + o + '&url=' + i + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Twitter"', '"#" data-count="mail" onclick="window.open(\'//connect.mail.ru/share?url=' + i + '&title=' + o + '&description=' + s + '&imageurl=' + r + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Моем Мире@Mail.Ru"', '"#" onclick="print();return false" title="Распечатать"'),
                f = '';
            for (j = 0; j < p.length; j++) f += '<span class="share42-item" style="display:inline-block;margin:0 6px 6px 0;height:16px;"><a rel="nofollow" style="display:inline-block;width:16px;height:16px;margin:0;padding:0;outline:none;background:url(' + a + l + ') -' + 16 * j + 'px 0 no-repeat" href=' + p[j] + ' target="_blank"></a></span>';
            n.html('<span id="share42">' + f + '</span>');
        });
    });
}(jQuery), function (e, t, n) {
    (t[n] = t[n] || []).push(function () {
        try {
            t.yaCounter44994709 = new Ya.Metrika({id: 44994709, clickmap: !0, trackLinks: !0, accurateTrackBounce: !0});
        } catch (e) {
        }
    });
    var i = e.getElementsByTagName('script')[0], o = e.createElement('script'), r = function () {
        i.parentNode.insertBefore(o, i);
    };
    o.type = 'text/javascript', o.async = !0, o.src = 'https://mc.yandex.ru/metrika/watch.js', '[object Opera]' == t.opera ? e.addEventListener('DOMContentLoaded', r, !1) : r();
}(document, window, 'yandex_metrika_callbacks'), function (e, t) {
    'use strict';
    if (!t.createElementNS || !t.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return !0;
    var n, i, o = 'localStorage' in e && null !== e.localStorage, r = function () {
        t.body.insertAdjacentHTML('afterbegin', i);
    }, s = function () {
        t.body ? r() : t.addEventListener('DOMContentLoaded', r);
    };
    if (o && 1 == localStorage.getItem('inlineSVGrev') && (i = localStorage.getItem('inlineSVGdata'))) return s(), !0;
    try {
        (n = new XMLHttpRequest).open('GET', 'img/sprite.symbol.svg', !0), n.onload = function () {
            n.status >= 200 && n.status < 400 && (i = n.responseText, s(), o && (localStorage.setItem('inlineSVGdata', i), localStorage.setItem('inlineSVGrev', 1)));
        }, n.send();
    } catch (e) {
    }
}(window, document),
    $(document).ready(function () {
        var sinceYear = $('.js-since-year');

        sinceYear.html(sinceYear.html() + '–' + (new Date).getFullYear());

        $('.slider-main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-bg',
            dots: !0,
            focusOnSelect: !0,
            autoplay: !0,
            speed: 600,
            autoplaySpeed: 1e4
        }),
        $('.slider-bg').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            fade: !0,
            asNavFor: '.slider-main'
        }),
        $('.slider-works').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: !0,
            dots: !0,
            infinite: !0,
            speed: 600,
            responsive: [
                {breakpoint: 1200, settings: {slidesToShow: 2, slidesToScroll: 2}},
                {breakpoint: 992, settings: {slidesToShow: 1, slidesToScroll: 1, dots: !1}}
            ]
        }),
        $('.slider-partner').slick({
            arrows: !0,
            initialSlide: 2,
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: !1,
            infinite: !0,
            // variableWidth: !0,
            // centerMode: !0,
            speed: 300,
            responsive: [
                {breakpoint: 1200, settings: {slidesToShow: 5}},
                {breakpoint: 992, settings: {slidesToShow: 4}},
                {breakpoint: 768, settings: {slidesToShow: 3}},
                {breakpoint: 544, settings: {slidesToShow: 1}}
            ]
        }),
        $('.slider-reviews-main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: !0,
            asNavFor: '.slider-reviews-nav'
        }),
        $('.slider-reviews-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: !1,
            asNavFor: '.slider-reviews-main',
            focusOnSelect: !0,
            responsive: [
                {breakpoint: 768, settings: {slidesToShow: 3, slidesToScroll: 1}},
                {breakpoint: 544, settings: {slidesToShow: 2, slidesToScroll: 1}}
            ]
        }),
        $('.slider-works').magnificPopup({
            tClose: 'Закрыть (Esc)',
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            gallery: {
                enabled: !1,
                preload: [0, 3],
                navigateByImgClick: !0,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                tPrev: 'Предыдущая работа',
                tNext: 'Следующая работа',
                tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
            },
            image: {
                cursor: null,
                tError: '<a href="%url%">Изображение #%curr%</a> недоступно.',
                titleSrc: function (e) {
                    return e.el.find('img').attr('alt');
                }
            },
            zoom: {
                enabled: !0, duration: 300, opener: function (e) {
                    return e.find('img');
                }
            }
        }),
        $('.works').magnificPopup({
            tClose: 'Закрыть (Esc)',
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                tPrev: 'Предыдущая работа',
                tNext: 'Следующая работа',
                tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
            },
            image: {
                cursor: null,
                tError: '<a href="%url%">Изображение #%curr%</a> недоступно.',
                titleSrc: function (e) {
                    return e.el.find('img').attr('alt');
                }
            },
            zoom: {
                enabled: !0, duration: 300, opener: function (e) {
                    return e.find('img');
                }
            }
        }),
        $('.footer-map').magnificPopup({
            tClose: 'Закрыть (Esc)',
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: !0,
            index: '//maps.google.',
            src: '%id%&output=embed',
            fixedContentPos: !0
        });

        $('[data-toggle="modal"]').magnificPopup({
            type: 'inline',
            preloader: false,
            modal: true,
            removalDelay: 500,
            mainClass: 'mfp-move-from-top'
        });

        $(document).on('click', '[data-dismiss="modal"]', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });

        $('input[type="tel"]').each(function() {
            Inputmask("+7 (999) 999-99-99").mask($(this));
        });
    }),
    $(function () {
        $('#send').click(function () {
            var e = !0;
            $('input, textarea').each(function () {
                var t = $(this);
                this.checkValidity() ? t.removeClass('form__input_error') : (t.addClass('form__input_error'), e = !1);
            }), e && ($('form').val(function () {
                var e = $(this).serialize();
                $.ajax({
                    url: '/send.php', type: 'POST',
                    data: e,
                    success: function (e) {
                        $('.js-preloader').addClass('hidden-xs-up');
                        $('.contacts-feedback__success').removeClass('hidden-xs-up');
                        $('#send').attr('disabled', 'disabled');
                    }
                });
            }), $('.js-preloader').removeClass('hidden-xs-up'));
        });
    });
