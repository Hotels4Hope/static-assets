!(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = (t[r] = {i: r, l: !1, exports: {}});
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r});
        }),
        (n.r = function (e) {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}),
                Object.defineProperty(e, '__esModule', {value: !0});
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, 'default', {enumerable: !0, value: e}), 2 & t && 'string' != typeof e))
                for (var o in e)
                    n.d(
                        r,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return r;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, 'a', t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ''),
        n((n.s = 200));
})([
    function (e, t, n) {
        var r = n(26)('wks'),
            o = n(20),
            i = n(1).Symbol,
            a = 'function' == typeof i;
        (e.exports = function (e) {
            return r[e] || (r[e] = (a && i[e]) || (a ? i : o)('Symbol.' + e));
        }).store = r;
    },
    function (e, t) {
        var n = (e.exports = 'undefined' != typeof window && window.Math == Math ? window : 'undefined' != typeof self && self.Math == Math ? self : Function('return this')());
        'number' == typeof __g && (__g = n);
    },
    function (e, t, n) {
        var r = n(4);
        e.exports = function (e) {
            if (!r(e)) throw TypeError(e + ' is not an object!');
            return e;
        };
    },
    function (e, t, n) {
        e.exports = !n(7)(function () {
            return (
                7 !=
                Object.defineProperty({}, 'a', {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    function (e, t) {
        e.exports = function (e) {
            return 'object' == typeof e ? null !== e : 'function' == typeof e;
        };
    },
    function (e, t, n) {
        var r = n(1),
            o = n(11),
            i = n(8),
            a = n(9),
            c = n(24),
            s = function (e, t, n) {
                var u,
                    l,
                    d,
                    f,
                    p = e & s.F,
                    h = e & s.G,
                    m = e & s.S,
                    y = e & s.P,
                    g = e & s.B,
                    v = h ? r : m ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
                    b = h ? o : o[t] || (o[t] = {}),
                    S = b.prototype || (b.prototype = {});
                for (u in (h && (n = t), n))
                    (d = ((l = !p && v && void 0 !== v[u]) ? v : n)[u]),
                        (f = g && l ? c(d, r) : y && 'function' == typeof d ? c(Function.call, d) : d),
                        v && a(v, u, d, e & s.U),
                        b[u] != d && i(b, u, f),
                        y && S[u] != d && (S[u] = d);
            };
        (r.core = o), (s.F = 1), (s.G = 2), (s.S = 4), (s.P = 8), (s.B = 16), (s.W = 32), (s.U = 64), (s.R = 128), (e.exports = s);
    },
    function (e, t, n) {
        var r = n(2),
            o = n(53),
            i = n(41),
            a = Object.defineProperty;
        t.f = n(3)
            ? Object.defineProperty
            : function (e, t, n) {
                  if ((r(e), (t = i(t, !0)), r(n), o))
                      try {
                          return a(e, t, n);
                      } catch (e) {}
                  if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!');
                  return 'value' in n && (e[t] = n.value), e;
              };
    },
    function (e, t) {
        e.exports = function (e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    },
    function (e, t, n) {
        var r = n(6),
            o = n(30);
        e.exports = n(3)
            ? function (e, t, n) {
                  return r.f(e, t, o(1, n));
              }
            : function (e, t, n) {
                  return (e[t] = n), e;
              };
    },
    function (e, t, n) {
        var r = n(1),
            o = n(8),
            i = n(10),
            a = n(20)('src'),
            c = n(75),
            s = ('' + c).split('toString');
        (n(11).inspectSource = function (e) {
            return c.call(e);
        }),
            (e.exports = function (e, t, n, c) {
                var u = 'function' == typeof n;
                u && (i(n, 'name') || o(n, 'name', t)),
                    e[t] !== n &&
                        (u && (i(n, a) || o(n, a, e[t] ? '' + e[t] : s.join(String(t)))), e === r ? (e[t] = n) : c ? (e[t] ? (e[t] = n) : o(e, t, n)) : (delete e[t], o(e, t, n)));
            })(Function.prototype, 'toString', function () {
                return ('function' == typeof this && this[a]) || c.call(this);
            });
    },
    function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t);
        };
    },
    function (e, t) {
        var n = (e.exports = {version: '2.6.11'});
        'number' == typeof __e && (__e = n);
    },
    function (e, t, n) {
        var r = n(90),
            o = n(15);
        e.exports = function (e) {
            return r(o(e));
        };
    },
    function (e, t) {
        e.exports = function (e) {
            if ('function' != typeof e) throw TypeError(e + ' is not a function!');
            return e;
        };
    },
    function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e;
        };
    },
    function (e, t, n) {
        var r = n(56),
            o = n(38);
        e.exports =
            Object.keys ||
            function (e) {
                return r(e, o);
            };
    },
    function (e, t) {
        e.exports = {};
    },
    function (e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function (e) {
            return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
        };
    },
    function (e, t) {
        e.exports = !1;
    },
    function (e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function (e) {
            return 'Symbol('.concat(void 0 === e ? '' : e, ')_', (++n + r).toString(36));
        };
    },
    function (e, t, n) {
        e.exports = function () {
            return {path: 'https://static.hotelsforhope.com/ares'};
        };
    },
    function (e, t, n) {
        'use strict';
        var r = n(25),
            o = {};
        (o[n(0)('toStringTag')] = 'z'),
            o + '' != '[object z]' &&
                n(9)(
                    Object.prototype,
                    'toString',
                    function () {
                        return '[object ' + r(this) + ']';
                    },
                    !0
                );
    },
    function (e, t, n) {
        'use strict';
        var r = n(59),
            o = n(95),
            i = n(17),
            a = n(12);
        (e.exports = n(70)(
            Array,
            'Array',
            function (e, t) {
                (this._t = a(e)), (this._i = 0), (this._k = t);
            },
            function () {
                var e = this._t,
                    t = this._k,
                    n = this._i++;
                return !e || n >= e.length ? ((this._t = void 0), o(1)) : o(0, 'keys' == t ? n : 'values' == t ? e[n] : [n, e[n]]);
            },
            'values'
        )),
            (i.Arguments = i.Array),
            r('keys'),
            r('values'),
            r('entries');
    },
    function (e, t, n) {
        var r = n(13);
        e.exports = function (e, t, n) {
            if ((r(e), void 0 === t)) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n);
                    };
                case 2:
                    return function (n, r) {
                        return e.call(t, n, r);
                    };
                case 3:
                    return function (n, r, o) {
                        return e.call(t, n, r, o);
                    };
            }
            return function () {
                return e.apply(t, arguments);
            };
        };
    },
    function (e, t, n) {
        var r = n(14),
            o = n(0)('toStringTag'),
            i =
                'Arguments' ==
                r(
                    (function () {
                        return arguments;
                    })()
                );
        e.exports = function (e) {
            var t, n, a;
            return void 0 === e
                ? 'Undefined'
                : null === e
                ? 'Null'
                : 'string' ==
                  typeof (n = (function (e, t) {
                      try {
                          return e[t];
                      } catch (e) {}
                  })((t = Object(e)), o))
                ? n
                : i
                ? r(t)
                : 'Object' == (a = r(t)) && 'function' == typeof t.callee
                ? 'Arguments'
                : a;
        };
    },
    function (e, t, n) {
        var r = n(11),
            o = n(1),
            i = o['__core-js_shared__'] || (o['__core-js_shared__'] = {});
        (e.exports = function (e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {});
        })('versions', []).push({version: r.version, mode: n(19) ? 'pure' : 'global', copyright: '© 2019 Denis Pushkarev (zloirock.ru)'});
    },
    function (e, t, n) {
        var r = n(18),
            o = Math.min;
        e.exports = function (e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0;
        };
    },
    function (e, t, n) {
        var r = n(6).f,
            o = n(10),
            i = n(0)('toStringTag');
        e.exports = function (e, t, n) {
            e && !o((e = n ? e : e.prototype), i) && r(e, i, {configurable: !0, value: t});
        };
    },
    function (e, t, n) {
        var r = n(15);
        e.exports = function (e) {
            return Object(r(e));
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t};
        };
    },
    function (e, t) {
        t.f = {}.propertyIsEnumerable;
    },
    function (e, t, n) {
        'use strict';
        var r,
            o,
            i,
            a,
            c = n(19),
            s = n(1),
            u = n(24),
            l = n(25),
            d = n(5),
            f = n(4),
            p = n(13),
            h = n(76),
            m = n(77),
            y = n(54),
            g = n(48).set,
            v = n(81)(),
            b = n(50),
            S = n(82),
            w = n(83),
            x = n(84),
            _ = s.TypeError,
            A = s.process,
            k = A && A.versions,
            M = (k && k.v8) || '',
            L = s.Promise,
            q = 'process' == l(A),
            C = function () {},
            T = (o = b.f),
            E = !!(function () {
                try {
                    var e = L.resolve(1),
                        t = ((e.constructor = {})[n(0)('species')] = function (e) {
                            e(C, C);
                        });
                    return (q || 'function' == typeof PromiseRejectionEvent) && e.then(C) instanceof t && 0 !== M.indexOf('6.6') && -1 === w.indexOf('Chrome/66');
                } catch (e) {}
            })(),
            R = function (e) {
                var t;
                return !(!f(e) || 'function' != typeof (t = e.then)) && t;
            },
            P = function (e, t) {
                if (!e._n) {
                    e._n = !0;
                    var n = e._c;
                    v(function () {
                        for (
                            var r = e._v,
                                o = 1 == e._s,
                                i = 0,
                                a = function (t) {
                                    var n,
                                        i,
                                        a,
                                        c = o ? t.ok : t.fail,
                                        s = t.resolve,
                                        u = t.reject,
                                        l = t.domain;
                                    try {
                                        c
                                            ? (o || (2 == e._h && D(e), (e._h = 1)),
                                              !0 === c ? (n = r) : (l && l.enter(), (n = c(r)), l && (l.exit(), (a = !0))),
                                              n === t.promise ? u(_('Promise-chain cycle')) : (i = R(n)) ? i.call(n, s, u) : s(n))
                                            : u(r);
                                    } catch (e) {
                                        l && !a && l.exit(), u(e);
                                    }
                                };
                            n.length > i;

                        )
                            a(n[i++]);
                        (e._c = []), (e._n = !1), t && !e._h && j(e);
                    });
                }
            },
            j = function (e) {
                g.call(s, function () {
                    var t,
                        n,
                        r,
                        o = e._v,
                        i = O(e);
                    if (
                        (i &&
                            ((t = S(function () {
                                q
                                    ? A.emit('unhandledRejection', o, e)
                                    : (n = s.onunhandledrejection)
                                    ? n({promise: e, reason: o})
                                    : (r = s.console) && r.error && r.error('Unhandled promise rejection', o);
                            })),
                            (e._h = q || O(e) ? 2 : 1)),
                        (e._a = void 0),
                        i && t.e)
                    )
                        throw t.v;
                });
            },
            O = function (e) {
                return 1 !== e._h && 0 === (e._a || e._c).length;
            },
            D = function (e) {
                g.call(s, function () {
                    var t;
                    q ? A.emit('rejectionHandled', e) : (t = s.onrejectionhandled) && t({promise: e, reason: e._v});
                });
            },
            H = function (e) {
                var t = this;
                t._d || ((t._d = !0), ((t = t._w || t)._v = e), (t._s = 2), t._a || (t._a = t._c.slice()), P(t, !0));
            },
            F = function (e) {
                var t,
                    n = this;
                if (!n._d) {
                    (n._d = !0), (n = n._w || n);
                    try {
                        if (n === e) throw _("Promise can't be resolved itself");
                        (t = R(e))
                            ? v(function () {
                                  var r = {_w: n, _d: !1};
                                  try {
                                      t.call(e, u(F, r, 1), u(H, r, 1));
                                  } catch (e) {
                                      H.call(r, e);
                                  }
                              })
                            : ((n._v = e), (n._s = 1), P(n, !1));
                    } catch (e) {
                        H.call({_w: n, _d: !1}, e);
                    }
                }
            };
        E ||
            ((L = function (e) {
                h(this, L, 'Promise', '_h'), p(e), r.call(this);
                try {
                    e(u(F, this, 1), u(H, this, 1));
                } catch (e) {
                    H.call(this, e);
                }
            }),
            ((r = function (e) {
                (this._c = []), (this._a = void 0), (this._s = 0), (this._d = !1), (this._v = void 0), (this._h = 0), (this._n = !1);
            }).prototype = n(85)(L.prototype, {
                then: function (e, t) {
                    var n = T(y(this, L));
                    return (
                        (n.ok = 'function' != typeof e || e),
                        (n.fail = 'function' == typeof t && t),
                        (n.domain = q ? A.domain : void 0),
                        this._c.push(n),
                        this._a && this._a.push(n),
                        this._s && P(this, !1),
                        n.promise
                    );
                },
                catch: function (e) {
                    return this.then(void 0, e);
                },
            })),
            (i = function () {
                var e = new r();
                (this.promise = e), (this.resolve = u(F, e, 1)), (this.reject = u(H, e, 1));
            }),
            (b.f = T = function (e) {
                return e === L || e === a ? new i(e) : o(e);
            })),
            d(d.G + d.W + d.F * !E, {Promise: L}),
            n(28)(L, 'Promise'),
            n(86)('Promise'),
            (a = n(11).Promise),
            d(d.S + d.F * !E, 'Promise', {
                reject: function (e) {
                    var t = T(this);
                    return (0, t.reject)(e), t.promise;
                },
            }),
            d(d.S + d.F * (c || !E), 'Promise', {
                resolve: function (e) {
                    return x(c && this === a ? L : this, e);
                },
            }),
            d(
                d.S +
                    d.F *
                        !(
                            E &&
                            n(87)(function (e) {
                                L.all(e).catch(C);
                            })
                        ),
                'Promise',
                {
                    all: function (e) {
                        var t = this,
                            n = T(t),
                            r = n.resolve,
                            o = n.reject,
                            i = S(function () {
                                var n = [],
                                    i = 0,
                                    a = 1;
                                m(e, !1, function (e) {
                                    var c = i++,
                                        s = !1;
                                    n.push(void 0),
                                        a++,
                                        t.resolve(e).then(function (e) {
                                            s || ((s = !0), (n[c] = e), --a || r(n));
                                        }, o);
                                }),
                                    --a || r(n);
                            });
                        return i.e && o(i.v), n.promise;
                    },
                    race: function (e) {
                        var t = this,
                            n = T(t),
                            r = n.reject,
                            o = S(function () {
                                m(e, !1, function (e) {
                                    t.resolve(e).then(n.resolve, r);
                                });
                            });
                        return o.e && r(o.v), n.promise;
                    },
                }
            );
    },
    function (e, t, n) {
        var r = (function (e) {
            'use strict';
            var t = Object.prototype,
                n = t.hasOwnProperty,
                r = 'function' == typeof Symbol ? Symbol : {},
                o = r.iterator || '@@iterator',
                i = r.asyncIterator || '@@asyncIterator',
                a = r.toStringTag || '@@toStringTag';
            function c(e, t, n) {
                return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t];
            }
            try {
                c({}, '');
            } catch (e) {
                c = function (e, t, n) {
                    return (e[t] = n);
                };
            }
            function s(e, t, n, r) {
                var o = t && t.prototype instanceof d ? t : d,
                    i = Object.create(o.prototype),
                    a = new _(r || []);
                return (
                    (i._invoke = (function (e, t, n) {
                        var r = 'suspendedStart';
                        return function (o, i) {
                            if ('executing' === r) throw new Error('Generator is already running');
                            if ('completed' === r) {
                                if ('throw' === o) throw i;
                                return k();
                            }
                            for (n.method = o, n.arg = i; ; ) {
                                var a = n.delegate;
                                if (a) {
                                    var c = S(a, n);
                                    if (c) {
                                        if (c === l) continue;
                                        return c;
                                    }
                                }
                                if ('next' === n.method) n.sent = n._sent = n.arg;
                                else if ('throw' === n.method) {
                                    if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                                    n.dispatchException(n.arg);
                                } else 'return' === n.method && n.abrupt('return', n.arg);
                                r = 'executing';
                                var s = u(e, t, n);
                                if ('normal' === s.type) {
                                    if (((r = n.done ? 'completed' : 'suspendedYield'), s.arg === l)) continue;
                                    return {value: s.arg, done: n.done};
                                }
                                'throw' === s.type && ((r = 'completed'), (n.method = 'throw'), (n.arg = s.arg));
                            }
                        };
                    })(e, n, a)),
                    i
                );
            }
            function u(e, t, n) {
                try {
                    return {type: 'normal', arg: e.call(t, n)};
                } catch (e) {
                    return {type: 'throw', arg: e};
                }
            }
            e.wrap = s;
            var l = {};
            function d() {}
            function f() {}
            function p() {}
            var h = {};
            h[o] = function () {
                return this;
            };
            var m = Object.getPrototypeOf,
                y = m && m(m(A([])));
            y && y !== t && n.call(y, o) && (h = y);
            var g = (p.prototype = d.prototype = Object.create(h));
            function v(e) {
                ['next', 'throw', 'return'].forEach(function (t) {
                    c(e, t, function (e) {
                        return this._invoke(t, e);
                    });
                });
            }
            function b(e, t) {
                var r;
                this._invoke = function (o, i) {
                    function a() {
                        return new t(function (r, a) {
                            !(function r(o, i, a, c) {
                                var s = u(e[o], e, i);
                                if ('throw' !== s.type) {
                                    var l = s.arg,
                                        d = l.value;
                                    return d && 'object' == typeof d && n.call(d, '__await')
                                        ? t.resolve(d.__await).then(
                                              function (e) {
                                                  r('next', e, a, c);
                                              },
                                              function (e) {
                                                  r('throw', e, a, c);
                                              }
                                          )
                                        : t.resolve(d).then(
                                              function (e) {
                                                  (l.value = e), a(l);
                                              },
                                              function (e) {
                                                  return r('throw', e, a, c);
                                              }
                                          );
                                }
                                c(s.arg);
                            })(o, i, r, a);
                        });
                    }
                    return (r = r ? r.then(a, a) : a());
                };
            }
            function S(e, t) {
                var n = e.iterator[t.method];
                if (void 0 === n) {
                    if (((t.delegate = null), 'throw' === t.method)) {
                        if (e.iterator.return && ((t.method = 'return'), (t.arg = void 0), S(e, t), 'throw' === t.method)) return l;
                        (t.method = 'throw'), (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
                    }
                    return l;
                }
                var r = u(n, e.iterator, t.arg);
                if ('throw' === r.type) return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), l;
                var o = r.arg;
                return o
                    ? o.done
                        ? ((t[e.resultName] = o.value), (t.next = e.nextLoc), 'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)), (t.delegate = null), l)
                        : o
                    : ((t.method = 'throw'), (t.arg = new TypeError('iterator result is not an object')), (t.delegate = null), l);
            }
            function w(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
            }
            function x(e) {
                var t = e.completion || {};
                (t.type = 'normal'), delete t.arg, (e.completion = t);
            }
            function _(e) {
                (this.tryEntries = [{tryLoc: 'root'}]), e.forEach(w, this), this.reset(!0);
            }
            function A(e) {
                if (e) {
                    var t = e[o];
                    if (t) return t.call(e);
                    if ('function' == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1,
                            i = function t() {
                                for (; ++r < e.length; ) if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                                return (t.value = void 0), (t.done = !0), t;
                            };
                        return (i.next = i);
                    }
                }
                return {next: k};
            }
            function k() {
                return {value: void 0, done: !0};
            }
            return (
                (f.prototype = g.constructor = p),
                (p.constructor = f),
                (f.displayName = c(p, a, 'GeneratorFunction')),
                (e.isGeneratorFunction = function (e) {
                    var t = 'function' == typeof e && e.constructor;
                    return !!t && (t === f || 'GeneratorFunction' === (t.displayName || t.name));
                }),
                (e.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : ((e.__proto__ = p), c(e, a, 'GeneratorFunction')), (e.prototype = Object.create(g)), e;
                }),
                (e.awrap = function (e) {
                    return {__await: e};
                }),
                v(b.prototype),
                (b.prototype[i] = function () {
                    return this;
                }),
                (e.AsyncIterator = b),
                (e.async = function (t, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new b(s(t, n, r, o), i);
                    return e.isGeneratorFunction(n)
                        ? a
                        : a.next().then(function (e) {
                              return e.done ? e.value : a.next();
                          });
                }),
                v(g),
                c(g, a, 'Generator'),
                (g[o] = function () {
                    return this;
                }),
                (g.toString = function () {
                    return '[object Generator]';
                }),
                (e.keys = function (e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return (
                        t.reverse(),
                        function n() {
                            for (; t.length; ) {
                                var r = t.pop();
                                if (r in e) return (n.value = r), (n.done = !1), n;
                            }
                            return (n.done = !0), n;
                        }
                    );
                }),
                (e.values = A),
                (_.prototype = {
                    constructor: _,
                    reset: function (e) {
                        if (
                            ((this.prev = 0),
                            (this.next = 0),
                            (this.sent = this._sent = void 0),
                            (this.done = !1),
                            (this.delegate = null),
                            (this.method = 'next'),
                            (this.arg = void 0),
                            this.tryEntries.forEach(x),
                            !e)
                        )
                            for (var t in this) 't' === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ('throw' === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function (e) {
                        if (this.done) throw e;
                        var t = this;
                        function r(n, r) {
                            return (a.type = 'throw'), (a.arg = e), (t.next = n), r && ((t.method = 'next'), (t.arg = void 0)), !!r;
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ('root' === i.tryLoc) return r('end');
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, 'catchLoc'),
                                    s = n.call(i, 'finallyLoc');
                                if (c && s) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                } else {
                                    if (!s) throw new Error('try statement without catch or finally');
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                                var i = o;
                                break;
                            }
                        }
                        i && ('break' === e || 'continue' === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return (a.type = e), (a.arg = t), i ? ((this.method = 'next'), (this.next = i.finallyLoc), l) : this.complete(a);
                    },
                    complete: function (e, t) {
                        if ('throw' === e.type) throw e.arg;
                        return (
                            'break' === e.type || 'continue' === e.type
                                ? (this.next = e.arg)
                                : 'return' === e.type
                                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                                : 'normal' === e.type && t && (this.next = t),
                            l
                        );
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), l;
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ('throw' === r.type) {
                                    var o = r.arg;
                                    x(n);
                                }
                                return o;
                            }
                        }
                        throw new Error('illegal catch attempt');
                    },
                    delegateYield: function (e, t, n) {
                        return (this.delegate = {iterator: A(e), resultName: t, nextLoc: n}), 'next' === this.method && (this.arg = void 0), l;
                    },
                }),
                e
            );
        })(e.exports);
        try {
            regeneratorRuntime = r;
        } catch (e) {
            Function('r', 'regeneratorRuntime = r')(r);
        }
    },
    function (e, t, n) {
        for (
            var r = n(23),
                o = n(16),
                i = n(9),
                a = n(1),
                c = n(8),
                s = n(17),
                u = n(0),
                l = u('iterator'),
                d = u('toStringTag'),
                f = s.Array,
                p = {
                    CSSRuleList: !0,
                    CSSStyleDeclaration: !1,
                    CSSValueList: !1,
                    ClientRectList: !1,
                    DOMRectList: !1,
                    DOMStringList: !1,
                    DOMTokenList: !0,
                    DataTransferItemList: !1,
                    FileList: !1,
                    HTMLAllCollection: !1,
                    HTMLCollection: !1,
                    HTMLFormElement: !1,
                    HTMLSelectElement: !1,
                    MediaList: !0,
                    MimeTypeArray: !1,
                    NamedNodeMap: !1,
                    NodeList: !0,
                    PaintRequestList: !1,
                    Plugin: !1,
                    PluginArray: !1,
                    SVGLengthList: !1,
                    SVGNumberList: !1,
                    SVGPathSegList: !1,
                    SVGPointList: !1,
                    SVGStringList: !1,
                    SVGTransformList: !1,
                    SourceBufferList: !1,
                    StyleSheetList: !0,
                    TextTrackCueList: !1,
                    TextTrackList: !1,
                    TouchList: !1,
                },
                h = o(p),
                m = 0;
            m < h.length;
            m++
        ) {
            var y,
                g = h[m],
                v = p[g],
                b = a[g],
                S = b && b.prototype;
            if (S && (S[l] || c(S, l, f), S[d] || c(S, d, g), (s[g] = f), v)) for (y in r) S[y] || i(S, y, r[y], !0);
        }
    },
    function (e, t, n) {
        'use strict';
        n.d(t, 'a', function () {
            return c;
        });
        n(46), n(34), n(23), n(52), n(32), n(22), n(33);
        function r(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a),
                    s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function o(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (o, i) {
                    var a = e.apply(t, n);
                    function c(e) {
                        r(a, o, i, c, s, 'next', e);
                    }
                    function s(e) {
                        r(a, o, i, c, s, 'throw', e);
                    }
                    c(void 0);
                });
            };
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var a = n(40),
            c = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, e);
                }
                var t, n, r, c, s, u, l, d, f, p, h, m;
                return (
                    (t = e),
                    (n = [
                        {
                            key: 'ieForEachPolyfill',
                            value: function () {
                                window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);
                            },
                        },
                        {
                            key: 'createHTML',
                            value:
                                ((m = o(
                                    regeneratorRuntime.mark(function e(t, n, r) {
                                        return regeneratorRuntime.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return e.abrupt(
                                                            'return',
                                                            new Promise(function (e) {
                                                                var o = document.querySelector(n);
                                                                o && null != o && (o.insertAdjacentHTML(r, t), e());
                                                            })
                                                        );
                                                    case 1:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function (e, t, n) {
                                    return m.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'updateAttribute',
                            value: function (e, t, n) {
                                var r = document.querySelectorAll(e);
                                r &&
                                    r.forEach(function (e, r) {
                                        e.setAttribute(n, t);
                                    });
                            },
                        },
                        {
                            key: 'getAttribute',
                            value: function (e, t) {
                                if (document.querySelector(e)) return document.querySelector(e).getAttribute(t);
                            },
                        },
                        {
                            key: 'updateHTML',
                            value: function (e, t) {
                                var n = document.querySelectorAll(e);
                                n &&
                                    n.forEach(function (e, n) {
                                        e.innerHTML = t;
                                    });
                            },
                        },
                        {
                            key: 'appendToParent',
                            value: function (e, t) {
                                var n = document.querySelector(e),
                                    r = document.querySelector(t);
                                n && r && r.appendChild(n);
                            },
                        },
                        {
                            key: 'waitForSelectorInDOM',
                            value:
                                ((h = o(
                                    regeneratorRuntime.mark(function e(t) {
                                        return regeneratorRuntime.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return e.abrupt(
                                                            'return',
                                                            new Promise(function (e) {
                                                                var n = setInterval(function () {
                                                                    var r = document.querySelector(t);
                                                                    if (r) return e(r), clearInterval(n), r;
                                                                }, 500);
                                                            })
                                                        );
                                                    case 1:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function (e) {
                                    return h.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'waitForTextInDOM',
                            value:
                                ((p = o(
                                    regeneratorRuntime.mark(function e(t, n) {
                                        return regeneratorRuntime.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return e.abrupt(
                                                            'return',
                                                            new Promise(function (e) {
                                                                var r = setInterval(function () {
                                                                    var o = document.querySelector(t).textContent;
                                                                    if (o === n) return e(o), clearInterval(r), o;
                                                                }, 500);
                                                            })
                                                        );
                                                    case 1:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function (e, t) {
                                    return p.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'moveElementIntoExistingWrapper',
                            value: function (e, t, n) {
                                document.querySelector(t) && document.querySelector(e) && document.querySelector(t).insertAdjacentElement(n, document.querySelector(e));
                            },
                        },
                        {
                            key: 'moveOrphanedElementsIntoNewWrapper',
                            value:
                                ((f = o(
                                    regeneratorRuntime.mark(function e(t, n, r, o) {
                                        return regeneratorRuntime.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return e.abrupt(
                                                            'return',
                                                            new Promise(function (e) {
                                                                document.querySelector(r) &&
                                                                    (document.querySelector(r).insertAdjacentHTML(o, '<div class id="'.concat(n, '"></div>')),
                                                                    t.forEach(function (t) {
                                                                        document.getElementById(n).insertAdjacentElement('beforeEnd', t), e();
                                                                    }));
                                                            })
                                                        );
                                                    case 1:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function (e, t, n, r) {
                                    return f.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'createWrapper',
                            value:
                                ((d = o(
                                    regeneratorRuntime.mark(function e(t, n, r, o) {
                                        var i;
                                        return regeneratorRuntime.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if ((i = document.createElement('div'))) {
                                                            e.next = 3;
                                                            break;
                                                        }
                                                        return e.abrupt('return');
                                                    case 3:
                                                        i.setAttribute('class', r),
                                                            Array.prototype.forEach.call(document.querySelectorAll(t), function (e) {
                                                                i.appendChild(e);
                                                            }),
                                                            document.querySelector(n).insertAdjacentElement(o, i);
                                                    case 6:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function (e, t, n, r) {
                                    return d.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'createModal',
                            value: function (e, t, n, r, o) {
                                n &&
                                    (document.querySelector(r).insertAdjacentHTML(o, '<span class="open-modal">Show '.concat(t, '</span>')),
                                    document.body.insertAdjacentHTML(
                                        'beforeEnd',
                                        '<div class="modal-overlay"><div class="modal-container"><div class="modal-header"><h3>'.concat(
                                            t,
                                            '</h3><span class="close-modal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="modal-content"></div></div></div>'
                                        )
                                    ),
                                    e.forEach(function (e) {
                                        document.querySelector('.modal-content').insertAdjacentElement('beforeEnd', e);
                                    }),
                                    document.querySelector('.open-modal').addEventListener('click', function () {
                                        document.querySelector('.modal-overlay').classList.toggle('show-modal');
                                    }),
                                    document.querySelector('.close-modal').addEventListener('click', function () {
                                        document.querySelector('.modal-overlay').classList.toggle('show-modal');
                                    }));
                            },
                        },
                        {
                            key: 'addMultipleHeaderLogos',
                            value:
                                ((l = o(
                                    regeneratorRuntime.mark(function e(t) {
                                        var n, r, o, i;
                                        return regeneratorRuntime.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (o = function (e) {
                                                                    if (e.matches && !r)
                                                                        try {
                                                                            Object.keys(t).forEach(function (e) {
                                                                                n.insertAdjacentHTML(
                                                                                    t[e].insertPosition,
                                                                                    '<img class="'.concat(t[e].className, '" src="').concat(t[e].imageUrl, '">')
                                                                                ),
                                                                                    (r = !0);
                                                                            });
                                                                        } catch (e) {
                                                                            console.error(e);
                                                                        }
                                                                }),
                                                                (e.next = 3),
                                                                this.waitForSelectorInDOM('header')
                                                            );
                                                        case 3:
                                                            (n = document.querySelector('header')), (i = window.matchMedia('(min-width: 1200px)')), o(i), i.addListener(o);
                                                        case 7:
                                                        case 'end':
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    })
                                )),
                                function (e) {
                                    return l.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'emailVerificationSetup',
                            value: function () {
                                var e = document.createElement('script');
                                (e.text =
                                    "\n            const DeBounce_APIKEY = 'public_T0tSVklSNEZRTEtkc1c5MFZoUWhKZz09';\n            const DeBounce_BlockFreeEmails = 'false';\n        "),
                                    document.body.appendChild(e);
                                var t = document.createElement('script');
                                t.setAttribute('src', 'https://cdn.debounce.io/widget/DeBounce.js'), t.setAttribute('async', !0), document.body.appendChild(t);
                            },
                        },
                        {
                            key: 'createDropdownMenu',
                            value: function (e, t, n, r) {
                                var o = document.querySelector(e),
                                    i = document.querySelector(r);
                                if (o && i) {
                                    i.insertAdjacentHTML('beforeEnd', '<style>'.concat(n, '{display: none;}').concat(r, '{position: relative;}</style>').concat(t.outerHTML));
                                    var a = document.querySelector(n);
                                    document.addEventListener('click', function (e) {
                                        var t = e.target;
                                        t === o && a.classList.toggle('show-dropdown'),
                                            document.querySelector(''.concat(n, '.show-dropdown')) && t !== o && a.classList.toggle('show-dropdown');
                                    });
                                }
                            },
                        },
                        {
                            key: 'addPropThumbTag',
                            value: function (e, t) {
                                !document.querySelector('#theArnProperty'.concat(t, ' .ArnPropThumb > .propThumbTag')) &&
                                    document.querySelector('#theArnProperty'.concat(t)) &&
                                    document
                                        .querySelector('#theArnProperty'.concat(t, ' .ArnPropThumb'))
                                        .insertAdjacentHTML('afterbegin', '<div class="propThumbTag">'.concat(e, '</div>'));
                            },
                        },
                        {
                            key: 'ratesComingSoon',
                            value:
                                ((u = o(
                                    regeneratorRuntime.mark(function e(t) {
                                        return regeneratorRuntime.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (document.querySelector('.SearchHotels')) {
                                                                e.next = 2;
                                                                break;
                                                            }
                                                            return e.abrupt('return');
                                                        case 2:
                                                            return (e.next = 4), this.waitForSelectorInDOM('.pollingFinished');
                                                        case 4:
                                                            t.forEach(function (e) {
                                                                document.querySelector('#theArnProperty'.concat(e, ' .ArnLimitedAvail')) &&
                                                                    (document.querySelector('#theArnProperty'.concat(e, ' .ArnLimitedAvail')).textContent = 'Rates Coming Soon');
                                                            });
                                                        case 5:
                                                        case 'end':
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    })
                                )),
                                function (e) {
                                    return u.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'addClass',
                            value: function (e, t) {
                                document.querySelector('.'.concat(e)).classList.add(t);
                            },
                        },
                        {
                            key: 'getMetaTagContent',
                            value: function (e) {
                                if (document.querySelector('meta[name="'.concat(e, '"]'))) return document.querySelector('meta[name="'.concat(e, '"]')).content;
                            },
                        },
                        {
                            key: 'parseJSON',
                            value: function (e) {
                                if (e) return JSON.parse(e);
                            },
                        },
                        {
                            key: 'getPageName',
                            value: function () {
                                var e,
                                    t = document.body;
                                return (
                                    t.classList.contains('SearchHotels') && !t.classList.contains('HoldRoomsForm') && (e = 'search-results'),
                                    t.classList.contains('SinglePropDetail') && (e = 'property-detail'),
                                    t.classList.contains('CheckOutForm') && (e = 'checkout'),
                                    t.classList.contains('ConfirmationForm') && (e = 'confirmation'),
                                    t.classList.contains('RootBody') && (e = 'landing-page'),
                                    t.classList.contains('WBFaq') && (e = 'faq'),
                                    t.classList.contains('WBTermsAndConditions') && (e = 'terms-conditions'),
                                    t.classList.contains('WBPrivacyPolicy') && (e = 'privacy-policy'),
                                    t.classList.contains('WBRateGuaranteeForm2') && (e = 'lrg-page'),
                                    t.classList.contains('WBValidatedRegistrationForm') && (e = 'cug-registration'),
                                    t.classList.contains('HoldRoomsForm') && t.classList.contains('SearchHotels') && (e = 'hold-rooms'),
                                    e
                                );
                            },
                        },
                        {
                            key: 'getElementTextContent',
                            value: function (e) {
                                if (document.querySelector(e)) return document.querySelector(e).textContent;
                            },
                        },
                        {
                            key: 'fetchJSON',
                            value: function (e) {
                                return function () {
                                    fetch(e)
                                        .then(function (e) {
                                            if (!e.ok) throw e;
                                            return e.json();
                                        })
                                        .catch(function (t) {
                                            t.text().then(function (t) {
                                                console.error('Could not fetch json from '.concat(e), t);
                                            });
                                        });
                                };
                            },
                        },
                        {
                            key: 'fetchHTMLFromFile',
                            value:
                                ((s = o(
                                    regeneratorRuntime.mark(function e(t) {
                                        var n;
                                        return regeneratorRuntime.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (n = ''),
                                                            (e.next = 3),
                                                            fetch(t)
                                                                .then(function (e) {
                                                                    if (!e.ok) throw e;
                                                                    return e.text();
                                                                })
                                                                .then(function (e) {
                                                                    n = e;
                                                                })
                                                                .catch(function (e) {
                                                                    e.text().then(function (e) {
                                                                        console.error('Could not fetch text from '.concat(t), e);
                                                                    });
                                                                })
                                                        );
                                                    case 3:
                                                        return e.abrupt('return', n);
                                                    case 4:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function (e) {
                                    return s.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'removeMaskedElementFromTabIndex',
                            value: function (e) {
                                var t = document.querySelector(e);
                                t && t.setAttribute('tabindex', -1);
                            },
                        },
                        {
                            key: 'calculateNights',
                            value: function () {
                                var e = a(document.querySelector('input#theCheckIn').value).format('MM/DD/YYYY'),
                                    t = a(document.querySelector('input#theCheckOut').value).format('MM/DD/YYYY');
                                return a(t).diff(a(e), 'days');
                            },
                        },
                        {
                            key: 'matchMediaQuery',
                            value: function (e) {
                                return window.matchMedia('('.concat(e, ')')).matches;
                            },
                        },
                        {
                            key: 'selectCheckboxOnLabelClick',
                            value: function (e) {
                                document.querySelectorAll(e).forEach(function (e) {
                                    if (e.querySelector('input[type="checkbox"]') && e) {
                                        var t = e.querySelector('span');
                                        t || (t = e.querySelector('label')),
                                            t.addEventListener('click', function (t) {
                                                e.querySelector('input[type="checkbox"]').click();
                                            });
                                    }
                                });
                            },
                        },
                        {
                            key: 'addAttributeToInput',
                            value:
                                ((c = o(
                                    regeneratorRuntime.mark(function e(t, n, r, o) {
                                        return regeneratorRuntime.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (document.querySelector(o)) {
                                                                e.next = 2;
                                                                break;
                                                            }
                                                            return e.abrupt('return');
                                                        case 2:
                                                            return (e.prev = 2), (e.next = 5), this.waitForSelectorInDOM(t);
                                                        case 5:
                                                            document.querySelector(t).setAttribute(r, n), (e.next = 11);
                                                            break;
                                                        case 8:
                                                            (e.prev = 8), (e.t0 = e.catch(2)), console.error(e.t0);
                                                        case 11:
                                                        case 'end':
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this,
                                            [[2, 8]]
                                        );
                                    })
                                )),
                                function (e, t, n, r) {
                                    return c.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'replaceSpecificText',
                            value: function (e, t, n) {
                                if (document.querySelector(e)) {
                                    var r = document.querySelector(e).textContent.replace(t, n);
                                    document.querySelector(e).textContent = r;
                                }
                            },
                        },
                        {
                            key: 'checkForPastDate',
                            value: function (e) {
                                e || console.error('No date passed into checkForPastDate()');
                                var t = a();
                                return a(e).diff(t, 'milliseconds') < 0;
                            },
                        },
                    ]) && i(t.prototype, n),
                    r && i(t, r),
                    e
                );
            })();
    },
    function (e, t, n) {
        var r = n(4),
            o = n(1).document,
            i = r(o) && r(o.createElement);
        e.exports = function (e) {
            return i ? o.createElement(e) : {};
        };
    },
    function (e, t, n) {
        var r = n(26)('keys'),
            o = n(20);
        e.exports = function (e) {
            return r[e] || (r[e] = o(e));
        };
    },
    function (e, t) {
        e.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
    },
    function (e, t, n) {
        'use strict';
        var r,
            o,
            i = n(43),
            a = RegExp.prototype.exec,
            c = String.prototype.replace,
            s = a,
            u = ((r = /a/), (o = /b*/g), a.call(r, 'a'), a.call(o, 'a'), 0 !== r.lastIndex || 0 !== o.lastIndex),
            l = void 0 !== /()??/.exec('')[1];
        (u || l) &&
            (s = function (e) {
                var t,
                    n,
                    r,
                    o,
                    s = this;
                return (
                    l && (n = new RegExp('^' + s.source + '$(?!\\s)', i.call(s))),
                    u && (t = s.lastIndex),
                    (r = a.call(s, e)),
                    u && r && (s.lastIndex = s.global ? r.index + r[0].length : t),
                    l &&
                        r &&
                        r.length > 1 &&
                        c.call(r[0], n, function () {
                            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0);
                        }),
                    r
                );
            }),
            (e.exports = s);
    },
    function (e, t, n) {
        e.exports = (function () {
            'use strict';
            var e = 'millisecond',
                t = 'second',
                n = 'minute',
                r = 'hour',
                o = 'day',
                i = 'week',
                a = 'month',
                c = 'quarter',
                s = 'year',
                u = 'date',
                l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,
                d = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                f = function (e, t, n) {
                    var r = String(e);
                    return !r || r.length >= t ? e : '' + Array(t + 1 - r.length).join(n) + e;
                },
                p = {
                    s: f,
                    z: function (e) {
                        var t = -e.utcOffset(),
                            n = Math.abs(t),
                            r = Math.floor(n / 60),
                            o = n % 60;
                        return (t <= 0 ? '+' : '-') + f(r, 2, '0') + ':' + f(o, 2, '0');
                    },
                    m: function e(t, n) {
                        if (t.date() < n.date()) return -e(n, t);
                        var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                            o = t.clone().add(r, a),
                            i = n - o < 0,
                            c = t.clone().add(r + (i ? -1 : 1), a);
                        return +(-(r + (n - o) / (i ? o - c : c - o)) || 0);
                    },
                    a: function (e) {
                        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
                    },
                    p: function (l) {
                        return (
                            {M: a, y: s, w: i, d: o, D: u, h: r, m: n, s: t, ms: e, Q: c}[l] ||
                            String(l || '')
                                .toLowerCase()
                                .replace(/s$/, '')
                        );
                    },
                    u: function (e) {
                        return void 0 === e;
                    },
                },
                h = {
                    name: 'en',
                    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
                },
                m = 'en',
                y = {};
            y[m] = h;
            var g = function (e) {
                    return e instanceof w;
                },
                v = function (e, t, n) {
                    var r;
                    if (!e) return m;
                    if ('string' == typeof e) y[e] && (r = e), t && ((y[e] = t), (r = e));
                    else {
                        var o = e.name;
                        (y[o] = e), (r = o);
                    }
                    return !n && r && (m = r), r || (!n && m);
                },
                b = function (e, t) {
                    if (g(e)) return e.clone();
                    var n = 'object' == typeof t ? t : {};
                    return (n.date = e), (n.args = arguments), new w(n);
                },
                S = p;
            (S.l = v),
                (S.i = g),
                (S.w = function (e, t) {
                    return b(e, {locale: t.$L, utc: t.$u, $offset: t.$offset});
                });
            var w = (function () {
                    function f(e) {
                        (this.$L = this.$L || v(e.locale, null, !0)), this.parse(e);
                    }
                    var p = f.prototype;
                    return (
                        (p.parse = function (e) {
                            (this.$d = (function (e) {
                                var t = e.date,
                                    n = e.utc;
                                if (null === t) return new Date(NaN);
                                if (S.u(t)) return new Date();
                                if (t instanceof Date) return new Date(t);
                                if ('string' == typeof t && !/Z$/i.test(t)) {
                                    var r = t.match(l);
                                    if (r) {
                                        var o = r[2] - 1 || 0,
                                            i = (r[7] || '0').substring(0, 3);
                                        return n
                                            ? new Date(Date.UTC(r[1], o, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i))
                                            : new Date(r[1], o, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
                                    }
                                }
                                return new Date(t);
                            })(e)),
                                this.init();
                        }),
                        (p.init = function () {
                            var e = this.$d;
                            (this.$y = e.getFullYear()),
                                (this.$M = e.getMonth()),
                                (this.$D = e.getDate()),
                                (this.$W = e.getDay()),
                                (this.$H = e.getHours()),
                                (this.$m = e.getMinutes()),
                                (this.$s = e.getSeconds()),
                                (this.$ms = e.getMilliseconds());
                        }),
                        (p.$utils = function () {
                            return S;
                        }),
                        (p.isValid = function () {
                            return !('Invalid Date' === this.$d.toString());
                        }),
                        (p.isSame = function (e, t) {
                            var n = b(e);
                            return this.startOf(t) <= n && n <= this.endOf(t);
                        }),
                        (p.isAfter = function (e, t) {
                            return b(e) < this.startOf(t);
                        }),
                        (p.isBefore = function (e, t) {
                            return this.endOf(t) < b(e);
                        }),
                        (p.$g = function (e, t, n) {
                            return S.u(e) ? this[t] : this.set(n, e);
                        }),
                        (p.unix = function () {
                            return Math.floor(this.valueOf() / 1e3);
                        }),
                        (p.valueOf = function () {
                            return this.$d.getTime();
                        }),
                        (p.startOf = function (e, c) {
                            var l = this,
                                d = !!S.u(c) || c,
                                f = S.p(e),
                                p = function (e, t) {
                                    var n = S.w(l.$u ? Date.UTC(l.$y, t, e) : new Date(l.$y, t, e), l);
                                    return d ? n : n.endOf(o);
                                },
                                h = function (e, t) {
                                    return S.w(l.toDate()[e].apply(l.toDate('s'), (d ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), l);
                                },
                                m = this.$W,
                                y = this.$M,
                                g = this.$D,
                                v = 'set' + (this.$u ? 'UTC' : '');
                            switch (f) {
                                case s:
                                    return d ? p(1, 0) : p(31, 11);
                                case a:
                                    return d ? p(1, y) : p(0, y + 1);
                                case i:
                                    var b = this.$locale().weekStart || 0,
                                        w = (m < b ? m + 7 : m) - b;
                                    return p(d ? g - w : g + (6 - w), y);
                                case o:
                                case u:
                                    return h(v + 'Hours', 0);
                                case r:
                                    return h(v + 'Minutes', 1);
                                case n:
                                    return h(v + 'Seconds', 2);
                                case t:
                                    return h(v + 'Milliseconds', 3);
                                default:
                                    return this.clone();
                            }
                        }),
                        (p.endOf = function (e) {
                            return this.startOf(e, !1);
                        }),
                        (p.$set = function (i, c) {
                            var l,
                                d = S.p(i),
                                f = 'set' + (this.$u ? 'UTC' : ''),
                                p = ((l = {}),
                                (l[o] = f + 'Date'),
                                (l[u] = f + 'Date'),
                                (l[a] = f + 'Month'),
                                (l[s] = f + 'FullYear'),
                                (l[r] = f + 'Hours'),
                                (l[n] = f + 'Minutes'),
                                (l[t] = f + 'Seconds'),
                                (l[e] = f + 'Milliseconds'),
                                l)[d],
                                h = d === o ? this.$D + (c - this.$W) : c;
                            if (d === a || d === s) {
                                var m = this.clone().set(u, 1);
                                m.$d[p](h), m.init(), (this.$d = m.set(u, Math.min(this.$D, m.daysInMonth())).$d);
                            } else p && this.$d[p](h);
                            return this.init(), this;
                        }),
                        (p.set = function (e, t) {
                            return this.clone().$set(e, t);
                        }),
                        (p.get = function (e) {
                            return this[S.p(e)]();
                        }),
                        (p.add = function (e, c) {
                            var u,
                                l = this;
                            e = Number(e);
                            var d = S.p(c),
                                f = function (t) {
                                    var n = b(l);
                                    return S.w(n.date(n.date() + Math.round(t * e)), l);
                                };
                            if (d === a) return this.set(a, this.$M + e);
                            if (d === s) return this.set(s, this.$y + e);
                            if (d === o) return f(1);
                            if (d === i) return f(7);
                            var p = ((u = {}), (u[n] = 6e4), (u[r] = 36e5), (u[t] = 1e3), u)[d] || 1,
                                h = this.$d.getTime() + e * p;
                            return S.w(h, this);
                        }),
                        (p.subtract = function (e, t) {
                            return this.add(-1 * e, t);
                        }),
                        (p.format = function (e) {
                            var t = this;
                            if (!this.isValid()) return 'Invalid Date';
                            var n = e || 'YYYY-MM-DDTHH:mm:ssZ',
                                r = S.z(this),
                                o = this.$locale(),
                                i = this.$H,
                                a = this.$m,
                                c = this.$M,
                                s = o.weekdays,
                                u = o.months,
                                l = function (e, r, o, i) {
                                    return (e && (e[r] || e(t, n))) || o[r].substr(0, i);
                                },
                                f = function (e) {
                                    return S.s(i % 12 || 12, e, '0');
                                },
                                p =
                                    o.meridiem ||
                                    function (e, t, n) {
                                        var r = e < 12 ? 'AM' : 'PM';
                                        return n ? r.toLowerCase() : r;
                                    },
                                h = {
                                    YY: String(this.$y).slice(-2),
                                    YYYY: this.$y,
                                    M: c + 1,
                                    MM: S.s(c + 1, 2, '0'),
                                    MMM: l(o.monthsShort, c, u, 3),
                                    MMMM: l(u, c),
                                    D: this.$D,
                                    DD: S.s(this.$D, 2, '0'),
                                    d: String(this.$W),
                                    dd: l(o.weekdaysMin, this.$W, s, 2),
                                    ddd: l(o.weekdaysShort, this.$W, s, 3),
                                    dddd: s[this.$W],
                                    H: String(i),
                                    HH: S.s(i, 2, '0'),
                                    h: f(1),
                                    hh: f(2),
                                    a: p(i, a, !0),
                                    A: p(i, a, !1),
                                    m: String(a),
                                    mm: S.s(a, 2, '0'),
                                    s: String(this.$s),
                                    ss: S.s(this.$s, 2, '0'),
                                    SSS: S.s(this.$ms, 3, '0'),
                                    Z: r,
                                };
                            return n.replace(d, function (e, t) {
                                return t || h[e] || r.replace(':', '');
                            });
                        }),
                        (p.utcOffset = function () {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                        }),
                        (p.diff = function (e, u, l) {
                            var d,
                                f = S.p(u),
                                p = b(e),
                                h = 6e4 * (p.utcOffset() - this.utcOffset()),
                                m = this - p,
                                y = S.m(this, p);
                            return (
                                (y =
                                    ((d = {}),
                                    (d[s] = y / 12),
                                    (d[a] = y),
                                    (d[c] = y / 3),
                                    (d[i] = (m - h) / 6048e5),
                                    (d[o] = (m - h) / 864e5),
                                    (d[r] = m / 36e5),
                                    (d[n] = m / 6e4),
                                    (d[t] = m / 1e3),
                                    d)[f] || m),
                                l ? y : S.a(y)
                            );
                        }),
                        (p.daysInMonth = function () {
                            return this.endOf(a).$D;
                        }),
                        (p.$locale = function () {
                            return y[this.$L];
                        }),
                        (p.locale = function (e, t) {
                            if (!e) return this.$L;
                            var n = this.clone(),
                                r = v(e, t, !0);
                            return r && (n.$L = r), n;
                        }),
                        (p.clone = function () {
                            return S.w(this.$d, this);
                        }),
                        (p.toDate = function () {
                            return new Date(this.valueOf());
                        }),
                        (p.toJSON = function () {
                            return this.isValid() ? this.toISOString() : null;
                        }),
                        (p.toISOString = function () {
                            return this.$d.toISOString();
                        }),
                        (p.toString = function () {
                            return this.$d.toUTCString();
                        }),
                        f
                    );
                })(),
                x = w.prototype;
            return (
                (b.prototype = x),
                [
                    ['$ms', e],
                    ['$s', t],
                    ['$m', n],
                    ['$H', r],
                    ['$W', o],
                    ['$M', a],
                    ['$y', s],
                    ['$D', u],
                ].forEach(function (e) {
                    x[e[1]] = function (t) {
                        return this.$g(t, e[0], e[1]);
                    };
                }),
                (b.extend = function (e, t) {
                    return e(t, w, b), b;
                }),
                (b.locale = v),
                (b.isDayjs = g),
                (b.unix = function (e) {
                    return b(1e3 * e);
                }),
                (b.en = y[m]),
                (b.Ls = y),
                b
            );
        })();
    },
    function (e, t, n) {
        var r = n(4);
        e.exports = function (e, t) {
            if (!r(e)) return e;
            var n, o;
            if (t && 'function' == typeof (n = e.toString) && !r((o = n.call(e)))) return o;
            if ('function' == typeof (n = e.valueOf) && !r((o = n.call(e)))) return o;
            if (!t && 'function' == typeof (n = e.toString) && !r((o = n.call(e)))) return o;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (e, t, n) {
        var r = n(2),
            o = n(92),
            i = n(38),
            a = n(37)('IE_PROTO'),
            c = function () {},
            s = function () {
                var e,
                    t = n(36)('iframe'),
                    r = i.length;
                for (
                    t.style.display = 'none',
                        n(49).appendChild(t),
                        t.src = 'javascript:',
                        (e = t.contentWindow.document).open(),
                        e.write('<script>document.F=Object</script>'),
                        e.close(),
                        s = e.F;
                    r--;

                )
                    delete s.prototype[i[r]];
                return s();
            };
        e.exports =
            Object.create ||
            function (e, t) {
                var n;
                return null !== e ? ((c.prototype = r(e)), (n = new c()), (c.prototype = null), (n[a] = e)) : (n = s()), void 0 === t ? n : o(n, t);
            };
    },
    function (e, t, n) {
        'use strict';
        var r = n(2);
        e.exports = function () {
            var e = r(this),
                t = '';
            return e.global && (t += 'g'), e.ignoreCase && (t += 'i'), e.multiline && (t += 'm'), e.unicode && (t += 'u'), e.sticky && (t += 'y'), t;
        };
    },
    function (e, t, n) {
        'use strict';
        var r = n(25),
            o = RegExp.prototype.exec;
        e.exports = function (e, t) {
            var n = e.exec;
            if ('function' == typeof n) {
                var i = n.call(e, t);
                if ('object' != typeof i) throw new TypeError('RegExp exec method returned something other than an Object or null');
                return i;
            }
            if ('RegExp' !== r(e)) throw new TypeError('RegExp#exec called on incompatible receiver');
            return o.call(e, t);
        };
    },
    function (e, t, n) {
        'use strict';
        n(97);
        var r = n(9),
            o = n(8),
            i = n(7),
            a = n(15),
            c = n(0),
            s = n(39),
            u = c('species'),
            l = !i(function () {
                var e = /./;
                return (
                    (e.exec = function () {
                        var e = [];
                        return (e.groups = {a: '7'}), e;
                    }),
                    '7' !== ''.replace(e, '$<a>')
                );
            }),
            d = (function () {
                var e = /(?:)/,
                    t = e.exec;
                e.exec = function () {
                    return t.apply(this, arguments);
                };
                var n = 'ab'.split(e);
                return 2 === n.length && 'a' === n[0] && 'b' === n[1];
            })();
        e.exports = function (e, t, n) {
            var f = c(e),
                p = !i(function () {
                    var t = {};
                    return (
                        (t[f] = function () {
                            return 7;
                        }),
                        7 != ''[e](t)
                    );
                }),
                h = p
                    ? !i(function () {
                          var t = !1,
                              n = /a/;
                          return (
                              (n.exec = function () {
                                  return (t = !0), null;
                              }),
                              'split' === e &&
                                  ((n.constructor = {}),
                                  (n.constructor[u] = function () {
                                      return n;
                                  })),
                              n[f](''),
                              !t
                          );
                      })
                    : void 0;
            if (!p || !h || ('replace' === e && !l) || ('split' === e && !d)) {
                var m = /./[f],
                    y = n(a, f, ''[e], function (e, t, n, r, o) {
                        return t.exec === s ? (p && !o ? {done: !0, value: m.call(t, n, r)} : {done: !0, value: e.call(n, t, r)}) : {done: !1};
                    }),
                    g = y[0],
                    v = y[1];
                r(String.prototype, e, g),
                    o(
                        RegExp.prototype,
                        f,
                        2 == t
                            ? function (e, t) {
                                  return v.call(e, this, t);
                              }
                            : function (e) {
                                  return v.call(e, this);
                              }
                    );
            }
        };
    },
    function (e, t, n) {
        'use strict';
        var r = n(2),
            o = n(29),
            i = n(27),
            a = n(18),
            c = n(60),
            s = n(44),
            u = Math.max,
            l = Math.min,
            d = Math.floor,
            f = /\$([$&`']|\d\d?|<[^>]*>)/g,
            p = /\$([$&`']|\d\d?)/g;
        n(45)('replace', 2, function (e, t, n, h) {
            return [
                function (r, o) {
                    var i = e(this),
                        a = null == r ? void 0 : r[t];
                    return void 0 !== a ? a.call(r, i, o) : n.call(String(i), r, o);
                },
                function (e, t) {
                    var o = h(n, e, this, t);
                    if (o.done) return o.value;
                    var d = r(e),
                        f = String(this),
                        p = 'function' == typeof t;
                    p || (t = String(t));
                    var y = d.global;
                    if (y) {
                        var g = d.unicode;
                        d.lastIndex = 0;
                    }
                    for (var v = []; ; ) {
                        var b = s(d, f);
                        if (null === b) break;
                        if ((v.push(b), !y)) break;
                        '' === String(b[0]) && (d.lastIndex = c(f, i(d.lastIndex), g));
                    }
                    for (var S, w = '', x = 0, _ = 0; _ < v.length; _++) {
                        b = v[_];
                        for (var A = String(b[0]), k = u(l(a(b.index), f.length), 0), M = [], L = 1; L < b.length; L++) M.push(void 0 === (S = b[L]) ? S : String(S));
                        var q = b.groups;
                        if (p) {
                            var C = [A].concat(M, k, f);
                            void 0 !== q && C.push(q);
                            var T = String(t.apply(void 0, C));
                        } else T = m(A, f, k, M, q, t);
                        k >= x && ((w += f.slice(x, k) + T), (x = k + A.length));
                    }
                    return w + f.slice(x);
                },
            ];
            function m(e, t, r, i, a, c) {
                var s = r + e.length,
                    u = i.length,
                    l = p;
                return (
                    void 0 !== a && ((a = o(a)), (l = f)),
                    n.call(c, l, function (n, o) {
                        var c;
                        switch (o.charAt(0)) {
                            case '$':
                                return '$';
                            case '&':
                                return e;
                            case '`':
                                return t.slice(0, r);
                            case "'":
                                return t.slice(s);
                            case '<':
                                c = a[o.slice(1, -1)];
                                break;
                            default:
                                var l = +o;
                                if (0 === l) return n;
                                if (l > u) {
                                    var f = d(l / 10);
                                    return 0 === f ? n : f <= u ? (void 0 === i[f - 1] ? o.charAt(1) : i[f - 1] + o.charAt(1)) : n;
                                }
                                c = i[l - 1];
                        }
                        return void 0 === c ? '' : c;
                    })
                );
            }
        });
    },
    function (e, t, n) {
        'use strict';
        n(104);
        var r = n(2),
            o = n(43),
            i = n(3),
            a = /./.toString,
            c = function (e) {
                n(9)(RegExp.prototype, 'toString', e, !0);
            };
        n(7)(function () {
            return '/a/b' != a.call({source: 'a', flags: 'b'});
        })
            ? c(function () {
                  var e = r(this);
                  return '/'.concat(e.source, '/', 'flags' in e ? e.flags : !i && e instanceof RegExp ? o.call(e) : void 0);
              })
            : 'toString' != a.name &&
              c(function () {
                  return a.call(this);
              });
    },
    function (e, t, n) {
        var r,
            o,
            i,
            a = n(24),
            c = n(55),
            s = n(49),
            u = n(36),
            l = n(1),
            d = l.process,
            f = l.setImmediate,
            p = l.clearImmediate,
            h = l.MessageChannel,
            m = l.Dispatch,
            y = 0,
            g = {},
            v = function () {
                var e = +this;
                if (g.hasOwnProperty(e)) {
                    var t = g[e];
                    delete g[e], t();
                }
            },
            b = function (e) {
                v.call(e.data);
            };
        (f && p) ||
            ((f = function (e) {
                for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
                return (
                    (g[++y] = function () {
                        c('function' == typeof e ? e : Function(e), t);
                    }),
                    r(y),
                    y
                );
            }),
            (p = function (e) {
                delete g[e];
            }),
            'process' == n(14)(d)
                ? (r = function (e) {
                      d.nextTick(a(v, e, 1));
                  })
                : m && m.now
                ? (r = function (e) {
                      m.now(a(v, e, 1));
                  })
                : h
                ? ((i = (o = new h()).port2), (o.port1.onmessage = b), (r = a(i.postMessage, i, 1)))
                : l.addEventListener && 'function' == typeof postMessage && !l.importScripts
                ? ((r = function (e) {
                      l.postMessage(e + '', '*');
                  }),
                  l.addEventListener('message', b, !1))
                : (r =
                      'onreadystatechange' in u('script')
                          ? function (e) {
                                s.appendChild(u('script')).onreadystatechange = function () {
                                    s.removeChild(this), v.call(e);
                                };
                            }
                          : function (e) {
                                setTimeout(a(v, e, 1), 0);
                            })),
            (e.exports = {set: f, clear: p});
    },
    function (e, t, n) {
        var r = n(1).document;
        e.exports = r && r.documentElement;
    },
    function (e, t, n) {
        'use strict';
        var r = n(13);
        function o(e) {
            var t, n;
            (this.promise = new e(function (e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError('Bad Promise constructor');
                (t = e), (n = r);
            })),
                (this.resolve = r(t)),
                (this.reject = r(n));
        }
        e.exports.f = function (e) {
            return new o(e);
        };
    },
    function (e, t, n) {
        'use strict';
        var r = n(2),
            o = n(107),
            i = n(44);
        n(45)('search', 1, function (e, t, n, a) {
            return [
                function (n) {
                    var r = e(this),
                        o = null == n ? void 0 : n[t];
                    return void 0 !== o ? o.call(n, r) : new RegExp(n)[t](String(r));
                },
                function (e) {
                    var t = a(n, e, this);
                    if (t.done) return t.value;
                    var c = r(e),
                        s = String(this),
                        u = c.lastIndex;
                    o(u, 0) || (c.lastIndex = 0);
                    var l = i(c, s);
                    return o(c.lastIndex, u) || (c.lastIndex = u), null === l ? -1 : l.index;
                },
            ];
        });
    },
    function (e, t, n) {
        var r = n(29),
            o = n(16);
        n(98)('keys', function () {
            return function (e) {
                return o(r(e));
            };
        });
    },
    function (e, t, n) {
        e.exports =
            !n(3) &&
            !n(7)(function () {
                return (
                    7 !=
                    Object.defineProperty(n(36)('div'), 'a', {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (e, t, n) {
        var r = n(2),
            o = n(13),
            i = n(0)('species');
        e.exports = function (e, t) {
            var n,
                a = r(e).constructor;
            return void 0 === a || null == (n = r(a)[i]) ? t : o(n);
        };
    },
    function (e, t) {
        e.exports = function (e, t, n) {
            var r = void 0 === n;
            switch (t.length) {
                case 0:
                    return r ? e() : e.call(n);
                case 1:
                    return r ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
            }
            return e.apply(n, t);
        };
    },
    function (e, t, n) {
        var r = n(10),
            o = n(12),
            i = n(57)(!1),
            a = n(37)('IE_PROTO');
        e.exports = function (e, t) {
            var n,
                c = o(e),
                s = 0,
                u = [];
            for (n in c) n != a && r(c, n) && u.push(n);
            for (; t.length > s; ) r(c, (n = t[s++])) && (~i(u, n) || u.push(n));
            return u;
        };
    },
    function (e, t, n) {
        var r = n(12),
            o = n(27),
            i = n(91);
        e.exports = function (e) {
            return function (t, n, a) {
                var c,
                    s = r(t),
                    u = o(s.length),
                    l = i(a, u);
                if (e && n != n) {
                    for (; u > l; ) if ((c = s[l++]) != c) return !0;
                } else for (; u > l; l++) if ((e || l in s) && s[l] === n) return e || l || 0;
                return !e && -1;
            };
        };
    },
    function (e, t, n) {
        var r = n(10),
            o = n(29),
            i = n(37)('IE_PROTO'),
            a = Object.prototype;
        e.exports =
            Object.getPrototypeOf ||
            function (e) {
                return (e = o(e)), r(e, i) ? e[i] : 'function' == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null;
            };
    },
    function (e, t, n) {
        var r = n(0)('unscopables'),
            o = Array.prototype;
        null == o[r] && n(8)(o, r, {}),
            (e.exports = function (e) {
                o[r][e] = !0;
            });
    },
    function (e, t, n) {
        'use strict';
        var r = n(71)(!0);
        e.exports = function (e, t, n) {
            return t + (n ? r(e, t).length : 1);
        };
    },
    function (e, t, n) {
        var r = n(1),
            o = n(11),
            i = n(19),
            a = n(62),
            c = n(6).f;
        e.exports = function (e) {
            var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            '_' == e.charAt(0) || e in t || c(t, e, {value: a.f(e)});
        };
    },
    function (e, t, n) {
        t.f = n(0);
    },
    function (e, t) {
        t.f = Object.getOwnPropertySymbols;
    },
    function (e, t, n) {
        var r = n(56),
            o = n(38).concat('length', 'prototype');
        t.f =
            Object.getOwnPropertyNames ||
            function (e) {
                return r(e, o);
            };
    },
    function (e, t, n) {
        var r = n(31),
            o = n(30),
            i = n(12),
            a = n(41),
            c = n(10),
            s = n(53),
            u = Object.getOwnPropertyDescriptor;
        t.f = n(3)
            ? u
            : function (e, t) {
                  if (((e = i(e)), (t = a(t, !0)), s))
                      try {
                          return u(e, t);
                      } catch (e) {}
                  if (c(e, t)) return o(!r.f.call(e, t), e[t]);
              };
    },
    function (e, t, n) {
        var r = n(4),
            o = n(14),
            i = n(0)('match');
        e.exports = function (e) {
            var t;
            return r(e) && (void 0 !== (t = e[i]) ? !!t : 'RegExp' == o(e));
        };
    },
    function (e, t, n) {
        e.exports = (function () {
            'use strict';
            var e,
                t = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
                n = /\d\d/,
                r = /\d\d?/,
                o = /\d*[^\s\d-:/()]+/,
                i = function (e) {
                    return function (t) {
                        this[e] = +t;
                    };
                },
                a = [
                    /[+-]\d\d:?\d\d/,
                    function (e) {
                        var t, n;
                        (this.zone || (this.zone = {})).offset = 0 == (n = 60 * (t = e.match(/([+-]|\d\d)/g))[1] + +t[2]) ? 0 : '+' === t[0] ? -n : n;
                    },
                ],
                c = function (t) {
                    var n = e[t];
                    return n && (n.indexOf ? n : n.s.concat(n.f));
                },
                s = {
                    A: [
                        /[AP]M/,
                        function (e) {
                            this.afternoon = 'PM' === e;
                        },
                    ],
                    a: [
                        /[ap]m/,
                        function (e) {
                            this.afternoon = 'pm' === e;
                        },
                    ],
                    S: [
                        /\d/,
                        function (e) {
                            this.milliseconds = 100 * +e;
                        },
                    ],
                    SS: [
                        n,
                        function (e) {
                            this.milliseconds = 10 * +e;
                        },
                    ],
                    SSS: [
                        /\d{3}/,
                        function (e) {
                            this.milliseconds = +e;
                        },
                    ],
                    s: [r, i('seconds')],
                    ss: [r, i('seconds')],
                    m: [r, i('minutes')],
                    mm: [r, i('minutes')],
                    H: [r, i('hours')],
                    h: [r, i('hours')],
                    HH: [r, i('hours')],
                    hh: [r, i('hours')],
                    D: [r, i('day')],
                    DD: [n, i('day')],
                    Do: [
                        o,
                        function (t) {
                            var n = e.ordinal,
                                r = t.match(/\d+/);
                            if (((this.day = r[0]), n)) for (var o = 1; o <= 31; o += 1) n(o).replace(/\[|\]/g, '') === t && (this.day = o);
                        },
                    ],
                    M: [r, i('month')],
                    MM: [n, i('month')],
                    MMM: [
                        o,
                        function (e) {
                            var t = c('months'),
                                n =
                                    (
                                        c('monthsShort') ||
                                        t.map(function (e) {
                                            return e.substr(0, 3);
                                        })
                                    ).indexOf(e) + 1;
                            if (n < 1) throw new Error();
                            this.month = n % 12 || n;
                        },
                    ],
                    MMMM: [
                        o,
                        function (e) {
                            var t = c('months').indexOf(e) + 1;
                            if (t < 1) throw new Error();
                            this.month = t % 12 || t;
                        },
                    ],
                    Y: [/[+-]?\d+/, i('year')],
                    YY: [
                        n,
                        function (e) {
                            (e = +e), (this.year = e + (e > 68 ? 1900 : 2e3));
                        },
                    ],
                    YYYY: [/\d{4}/, i('year')],
                    Z: a,
                    ZZ: a,
                },
                u = function (e, n, r) {
                    try {
                        var o = (function (e) {
                                for (var n = e.match(t), r = n.length, o = 0; o < r; o += 1) {
                                    var i = n[o],
                                        a = s[i],
                                        c = a && a[0],
                                        u = a && a[1];
                                    n[o] = u ? {regex: c, parser: u} : i.replace(/^\[|\]$/g, '');
                                }
                                return function (e) {
                                    for (var t = {}, o = 0, i = 0; o < r; o += 1) {
                                        var a = n[o];
                                        if ('string' == typeof a) i += a.length;
                                        else {
                                            var c = a.regex,
                                                s = a.parser,
                                                u = e.substr(i),
                                                l = c.exec(u)[0];
                                            s.call(t, l), (e = e.replace(l, ''));
                                        }
                                    }
                                    return (
                                        (function (e) {
                                            var t = e.afternoon;
                                            if (void 0 !== t) {
                                                var n = e.hours;
                                                t ? n < 12 && (e.hours += 12) : 12 === n && (e.hours = 0), delete e.afternoon;
                                            }
                                        })(t),
                                        t
                                    );
                                };
                            })(n)(e),
                            i = o.year,
                            a = o.month,
                            c = o.day,
                            u = o.hours,
                            l = o.minutes,
                            d = o.seconds,
                            f = o.milliseconds,
                            p = o.zone,
                            h = new Date(),
                            m = c || (i || a ? 1 : h.getDate()),
                            y = i || h.getFullYear(),
                            g = 0;
                        (i && !a) || (g = a > 0 ? a - 1 : h.getMonth());
                        var v = u || 0,
                            b = l || 0,
                            S = d || 0,
                            w = f || 0;
                        return p ? new Date(Date.UTC(y, g, m, v, b, S, w + 60 * p.offset * 1e3)) : r ? new Date(Date.UTC(y, g, m, v, b, S, w)) : new Date(y, g, m, v, b, S, w);
                    } catch (e) {
                        return new Date('');
                    }
                };
            return function (t, n, r) {
                var o = n.prototype,
                    i = o.parse;
                o.parse = function (t) {
                    var n = t.date,
                        o = t.utc,
                        a = t.args;
                    this.$u = o;
                    var c = a[1];
                    if ('string' == typeof c) {
                        var s = !0 === a[2],
                            l = !0 === a[3],
                            d = s || l,
                            f = a[2];
                        l && (f = a[2]),
                            s || (e = f ? r.Ls[f] : this.$locale()),
                            (this.$d = u(n, c, o)),
                            this.init(),
                            f && !0 !== f && (this.$L = this.locale(f).$L),
                            d && n !== this.format(c) && (this.$d = new Date(''));
                    } else if (c instanceof Array)
                        for (var p = c.length, h = 1; h <= p; h += 1) {
                            a[1] = c[h - 1];
                            var m = r.apply(this, a);
                            if (m.isValid()) {
                                (this.$d = m.$d), (this.$L = m.$L), this.init();
                                break;
                            }
                            h === p && (this.$d = new Date(''));
                        }
                    else i.call(this, t);
                };
            };
        })();
    },
    function (e, t, n) {
        'use strict';
        n.d(t, 'a', function () {
            return $;
        });
        n(32), n(74), n(34), n(23), n(99), n(47), n(22), n(51), n(108), n(46), n(72), n(73), n(69), n(33);
        var r = ('undefined' != typeof globalThis && globalThis) || ('undefined' != typeof self && self) || (void 0 !== r && r),
            o = 'URLSearchParams' in r,
            i = 'Symbol' in r && 'iterator' in Symbol,
            a =
                'FileReader' in r &&
                'Blob' in r &&
                (function () {
                    try {
                        return new Blob(), !0;
                    } catch (e) {
                        return !1;
                    }
                })(),
            c = 'FormData' in r,
            s = 'ArrayBuffer' in r;
        if (s)
            var u = [
                    '[object Int8Array]',
                    '[object Uint8Array]',
                    '[object Uint8ClampedArray]',
                    '[object Int16Array]',
                    '[object Uint16Array]',
                    '[object Int32Array]',
                    '[object Uint32Array]',
                    '[object Float32Array]',
                    '[object Float64Array]',
                ],
                l =
                    ArrayBuffer.isView ||
                    function (e) {
                        return e && u.indexOf(Object.prototype.toString.call(e)) > -1;
                    };
        function d(e) {
            if (('string' != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || '' === e)) throw new TypeError('Invalid character in header field name');
            return e.toLowerCase();
        }
        function f(e) {
            return 'string' != typeof e && (e = String(e)), e;
        }
        function p(e) {
            var t = {
                next: function () {
                    var t = e.shift();
                    return {done: void 0 === t, value: t};
                },
            };
            return (
                i &&
                    (t[Symbol.iterator] = function () {
                        return t;
                    }),
                t
            );
        }
        function h(e) {
            (this.map = {}),
                e instanceof h
                    ? e.forEach(function (e, t) {
                          this.append(t, e);
                      }, this)
                    : Array.isArray(e)
                    ? e.forEach(function (e) {
                          this.append(e[0], e[1]);
                      }, this)
                    : e &&
                      Object.getOwnPropertyNames(e).forEach(function (t) {
                          this.append(t, e[t]);
                      }, this);
        }
        function m(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError('Already read'));
            e.bodyUsed = !0;
        }
        function y(e) {
            return new Promise(function (t, n) {
                (e.onload = function () {
                    t(e.result);
                }),
                    (e.onerror = function () {
                        n(e.error);
                    });
            });
        }
        function g(e) {
            var t = new FileReader(),
                n = y(t);
            return t.readAsArrayBuffer(e), n;
        }
        function v(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer;
        }
        function b() {
            return (
                (this.bodyUsed = !1),
                (this._initBody = function (e) {
                    var t;
                    (this.bodyUsed = this.bodyUsed),
                        (this._bodyInit = e),
                        e
                            ? 'string' == typeof e
                                ? (this._bodyText = e)
                                : a && Blob.prototype.isPrototypeOf(e)
                                ? (this._bodyBlob = e)
                                : c && FormData.prototype.isPrototypeOf(e)
                                ? (this._bodyFormData = e)
                                : o && URLSearchParams.prototype.isPrototypeOf(e)
                                ? (this._bodyText = e.toString())
                                : s && a && (t = e) && DataView.prototype.isPrototypeOf(t)
                                ? ((this._bodyArrayBuffer = v(e.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                                : s && (ArrayBuffer.prototype.isPrototypeOf(e) || l(e))
                                ? (this._bodyArrayBuffer = v(e))
                                : (this._bodyText = e = Object.prototype.toString.call(e))
                            : (this._bodyText = ''),
                        this.headers.get('content-type') ||
                            ('string' == typeof e
                                ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                                : this._bodyBlob && this._bodyBlob.type
                                ? this.headers.set('content-type', this._bodyBlob.type)
                                : o && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'));
                }),
                a &&
                    ((this.blob = function () {
                        var e = m(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error('could not read FormData body as blob');
                        return Promise.resolve(new Blob([this._bodyText]));
                    }),
                    (this.arrayBuffer = function () {
                        if (this._bodyArrayBuffer) {
                            var e = m(this);
                            return (
                                e ||
                                (ArrayBuffer.isView(this._bodyArrayBuffer)
                                    ? Promise.resolve(
                                          this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)
                                      )
                                    : Promise.resolve(this._bodyArrayBuffer))
                            );
                        }
                        return this.blob().then(g);
                    })),
                (this.text = function () {
                    var e,
                        t,
                        n,
                        r = m(this);
                    if (r) return r;
                    if (this._bodyBlob) return (e = this._bodyBlob), (t = new FileReader()), (n = y(t)), t.readAsText(e), n;
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(
                            (function (e) {
                                for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                                return n.join('');
                            })(this._bodyArrayBuffer)
                        );
                    if (this._bodyFormData) throw new Error('could not read FormData body as text');
                    return Promise.resolve(this._bodyText);
                }),
                c &&
                    (this.formData = function () {
                        return this.text().then(x);
                    }),
                (this.json = function () {
                    return this.text().then(JSON.parse);
                }),
                this
            );
        }
        (h.prototype.append = function (e, t) {
            (e = d(e)), (t = f(t));
            var n = this.map[e];
            this.map[e] = n ? n + ', ' + t : t;
        }),
            (h.prototype.delete = function (e) {
                delete this.map[d(e)];
            }),
            (h.prototype.get = function (e) {
                return (e = d(e)), this.has(e) ? this.map[e] : null;
            }),
            (h.prototype.has = function (e) {
                return this.map.hasOwnProperty(d(e));
            }),
            (h.prototype.set = function (e, t) {
                this.map[d(e)] = f(t);
            }),
            (h.prototype.forEach = function (e, t) {
                for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
            }),
            (h.prototype.keys = function () {
                var e = [];
                return (
                    this.forEach(function (t, n) {
                        e.push(n);
                    }),
                    p(e)
                );
            }),
            (h.prototype.values = function () {
                var e = [];
                return (
                    this.forEach(function (t) {
                        e.push(t);
                    }),
                    p(e)
                );
            }),
            (h.prototype.entries = function () {
                var e = [];
                return (
                    this.forEach(function (t, n) {
                        e.push([n, t]);
                    }),
                    p(e)
                );
            }),
            i && (h.prototype[Symbol.iterator] = h.prototype.entries);
        var S = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
        function w(e, t) {
            if (!(this instanceof w)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            var n,
                r,
                o = (t = t || {}).body;
            if (e instanceof w) {
                if (e.bodyUsed) throw new TypeError('Already read');
                (this.url = e.url),
                    (this.credentials = e.credentials),
                    t.headers || (this.headers = new h(e.headers)),
                    (this.method = e.method),
                    (this.mode = e.mode),
                    (this.signal = e.signal),
                    o || null == e._bodyInit || ((o = e._bodyInit), (e.bodyUsed = !0));
            } else this.url = String(e);
            if (
                ((this.credentials = t.credentials || this.credentials || 'same-origin'),
                (!t.headers && this.headers) || (this.headers = new h(t.headers)),
                (this.method = ((n = t.method || this.method || 'GET'), (r = n.toUpperCase()), S.indexOf(r) > -1 ? r : n)),
                (this.mode = t.mode || this.mode || null),
                (this.signal = t.signal || this.signal),
                (this.referrer = null),
                ('GET' === this.method || 'HEAD' === this.method) && o)
            )
                throw new TypeError('Body not allowed for GET or HEAD requests');
            if ((this._initBody(o), !(('GET' !== this.method && 'HEAD' !== this.method) || ('no-store' !== t.cache && 'no-cache' !== t.cache)))) {
                var i = /([?&])_=[^&]*/;
                if (i.test(this.url)) this.url = this.url.replace(i, '$1_=' + new Date().getTime());
                else {
                    this.url += (/\?/.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
                }
            }
        }
        function x(e) {
            var t = new FormData();
            return (
                e
                    .trim()
                    .split('&')
                    .forEach(function (e) {
                        if (e) {
                            var n = e.split('='),
                                r = n.shift().replace(/\+/g, ' '),
                                o = n.join('=').replace(/\+/g, ' ');
                            t.append(decodeURIComponent(r), decodeURIComponent(o));
                        }
                    }),
                t
            );
        }
        function _(e, t) {
            if (!(this instanceof _)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            t || (t = {}),
                (this.type = 'default'),
                (this.status = void 0 === t.status ? 200 : t.status),
                (this.ok = this.status >= 200 && this.status < 300),
                (this.statusText = 'statusText' in t ? t.statusText : ''),
                (this.headers = new h(t.headers)),
                (this.url = t.url || ''),
                this._initBody(e);
        }
        (w.prototype.clone = function () {
            return new w(this, {body: this._bodyInit});
        }),
            b.call(w.prototype),
            b.call(_.prototype),
            (_.prototype.clone = function () {
                return new _(this._bodyInit, {status: this.status, statusText: this.statusText, headers: new h(this.headers), url: this.url});
            }),
            (_.error = function () {
                var e = new _(null, {status: 0, statusText: ''});
                return (e.type = 'error'), e;
            });
        var A = [301, 302, 303, 307, 308];
        _.redirect = function (e, t) {
            if (-1 === A.indexOf(t)) throw new RangeError('Invalid status code');
            return new _(null, {status: t, headers: {location: e}});
        };
        var k = r.DOMException;
        try {
            new k();
        } catch (e) {
            ((k = function (e, t) {
                (this.message = e), (this.name = t);
                var n = Error(e);
                this.stack = n.stack;
            }).prototype = Object.create(Error.prototype)),
                (k.prototype.constructor = k);
        }
        function M(e, t) {
            return new Promise(function (n, o) {
                var i = new w(e, t);
                if (i.signal && i.signal.aborted) return o(new k('Aborted', 'AbortError'));
                var c = new XMLHttpRequest();
                function u() {
                    c.abort();
                }
                (c.onload = function () {
                    var e,
                        t,
                        r = {
                            status: c.status,
                            statusText: c.statusText,
                            headers:
                                ((e = c.getAllResponseHeaders() || ''),
                                (t = new h()),
                                e
                                    .replace(/\r?\n[\t ]+/g, ' ')
                                    .split(/\r?\n/)
                                    .forEach(function (e) {
                                        var n = e.split(':'),
                                            r = n.shift().trim();
                                        if (r) {
                                            var o = n.join(':').trim();
                                            t.append(r, o);
                                        }
                                    }),
                                t),
                        };
                    r.url = 'responseURL' in c ? c.responseURL : r.headers.get('X-Request-URL');
                    var o = 'response' in c ? c.response : c.responseText;
                    setTimeout(function () {
                        n(new _(o, r));
                    }, 0);
                }),
                    (c.onerror = function () {
                        setTimeout(function () {
                            o(new TypeError('Network request failed'));
                        }, 0);
                    }),
                    (c.ontimeout = function () {
                        setTimeout(function () {
                            o(new TypeError('Network request failed'));
                        }, 0);
                    }),
                    (c.onabort = function () {
                        setTimeout(function () {
                            o(new k('Aborted', 'AbortError'));
                        }, 0);
                    }),
                    c.open(
                        i.method,
                        (function (e) {
                            try {
                                return '' === e && r.location.href ? r.location.href : e;
                            } catch (t) {
                                return e;
                            }
                        })(i.url),
                        !0
                    ),
                    'include' === i.credentials ? (c.withCredentials = !0) : 'omit' === i.credentials && (c.withCredentials = !1),
                    'responseType' in c &&
                        (a
                            ? (c.responseType = 'blob')
                            : s && i.headers.get('Content-Type') && -1 !== i.headers.get('Content-Type').indexOf('application/octet-stream') && (c.responseType = 'arraybuffer')),
                    !t || 'object' != typeof t.headers || t.headers instanceof h
                        ? i.headers.forEach(function (e, t) {
                              c.setRequestHeader(t, e);
                          })
                        : Object.getOwnPropertyNames(t.headers).forEach(function (e) {
                              c.setRequestHeader(e, f(t.headers[e]));
                          }),
                    i.signal &&
                        (i.signal.addEventListener('abort', u),
                        (c.onreadystatechange = function () {
                            4 === c.readyState && i.signal.removeEventListener('abort', u);
                        })),
                    c.send(void 0 === i._bodyInit ? null : i._bodyInit);
            });
        }
        (M.polyfill = !0), r.fetch || ((r.fetch = M), (r.Headers = h), (r.Request = w), (r.Response = _));
        n(112);
        var q = n(35);
        n(52);
        function C(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a),
                    s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function T(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                        C(i, r, o, a, c, 'next', e);
                    }
                    function c(e) {
                        C(i, r, o, a, c, 'throw', e);
                    }
                    a(void 0);
                });
            };
        }
        function E(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var R = n(40),
            P = n(67);
        R.extend(P);
        var j = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, e);
                }
                var t, n, r;
                return (
                    (t = e),
                    (n = [
                        {
                            key: 'init',
                            value: function (e, t, n) {
                                var r,
                                    o,
                                    i,
                                    a,
                                    c = this,
                                    s = new URL(window.location.href),
                                    u = new URLSearchParams(s.search),
                                    l = new URLSearchParams(document.querySelector('meta[name="originalParams"]').content);
                                function d(e) {
                                    document.querySelector('.SearchHotels') &&
                                        document.querySelectorAll(e).forEach(function (e) {
                                            e.style.display = 'none';
                                        });
                                }
                                function f() {
                                    return (f = T(
                                        regeneratorRuntime.mark(function e(t) {
                                            return regeneratorRuntime.wrap(function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (document.querySelector(t)) {
                                                                e.next = 2;
                                                                break;
                                                            }
                                                            return e.abrupt('return');
                                                        case 2:
                                                            return (
                                                                (document.querySelector(t).style.position = 'absolute'),
                                                                (document.querySelector(t).style.left = '-10000px'),
                                                                (e.next = 6),
                                                                n.waitForSelectorInDOM('#city')
                                                            );
                                                        case 6:
                                                            document.querySelector(t).removeAttribute('required');
                                                        case 7:
                                                        case 'end':
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    )).apply(this, arguments);
                                }
                                function p(e, t, n, r) {
                                    document.querySelector(e) && document.querySelector(t).insertAdjacentHTML(n, r);
                                }
                                function h(e) {
                                    var t = document.querySelector(e),
                                        n = t.querySelector('option[value="'.concat(t.value, '"]')).textContent;
                                    return (
                                        t.addEventListener('change', function () {
                                            for (var e = 0; e < t.length; e += 1)
                                                if (t[e].selected) {
                                                    (t.selectedIndex = e), (n = t[e].textContent);
                                                    break;
                                                }
                                            return n;
                                        }),
                                        n
                                    );
                                }
                                function m() {
                                    if ('search-results' === t && '' !== document.querySelector('input#hotelName').value) return document.querySelector('input#hotelName').value;
                                }
                                function y(e, t) {
                                    var n = '';
                                    return (
                                        document.querySelectorAll(e).forEach(function (e) {
                                            if (!e.classList.contains(t)) {
                                                if (e.querySelector('input').checked) {
                                                    var r = e.querySelector('span').textContent;
                                                    n += ''.concat(r, ',');
                                                }
                                                return n;
                                            }
                                        }),
                                        n.slice(0, -1)
                                    );
                                }
                                function g(e) {
                                    if (l.has(e)) return l.get(e);
                                }
                                document.querySelector('form#searchForm').addEventListener('submit', function (i) {
                                    i.preventDefault();
                                    var a,
                                        s,
                                        u,
                                        d,
                                        f,
                                        p,
                                        v = window.location.origin,
                                        b = ''
                                            .concat(v, '/v6/?type=geo&siteid=')
                                            .concat(document.querySelector('meta[name="siteId"]').content, '&pagesize=10&')
                                            .concat(e.distance_unit),
                                        S = new URL(b);
                                    function w(e) {
                                        Object.keys(e).forEach(function (t) {
                                            '' !== e[t].value && null !== e[t].value && void 0 !== e[t].value && void 0 !== e[t].key && S.searchParams.append(e[t].key, e[t].value);
                                        });
                                    }
                                    'standard' === n.getMetaTagContent('theme') && 16980 !== e.affiliate_id
                                        ? ((u = R(document.querySelector('input#theCheckIn').value, 'D/M/YYYY').format('D/M/YYYY')),
                                          (d = R(document.querySelector('input#theCheckOut').value, 'D/M/YYYY').format('D/M/YYYY')),
                                          (f = R(d).diff(R(u), 'days')))
                                        : 'mandarin' === n.getMetaTagContent('theme') || 'tw_mandarin' === n.getMetaTagContent('theme')
                                        ? ((u = R(document.querySelector('input#theCheckIn').value, 'YYYY/M/D').format('D/M/YYYY')),
                                          (d = R(document.querySelector('input#theCheckOut').value, 'YYYY/M/D').format('D/M/YYYY')),
                                          (f = R(d).diff(R(u), 'days')),
                                          (u = R(document.querySelector('input#theCheckIn').value, 'YYYY/M/D').format('YYYY/M/D')),
                                          (d = R(document.querySelector('input#theCheckOut').value, 'YYYY/M/D').format('YYYY/M/D')))
                                        : 16980 === e.affiliate_id || 60278 === e.site_id
                                        ? ((u = R(document.querySelector('input#theCheckIn').value, 'D/M/YYYY').format('M/D/YYYY')),
                                          (d = R(document.querySelector('input#theCheckOut').value, 'D/M/YYYY').format('M/D/YYYY')),
                                          (f = R(d).diff(R(u), 'days')),
                                          (u = R(document.querySelector('input#theCheckIn').value, 'D/M/YYYY').format('D/M/YYYY')),
                                          (d = R(document.querySelector('input#theCheckOut').value, 'D/M/YYYY').format('D/M/YYYY')))
                                        : ((u = R(document.querySelector('input#theCheckIn').value, 'D/M/YYYY').format('D/M/YYYY')),
                                          (d = R(document.querySelector('input#theCheckOut').value, 'D/M/YYYY').format('D/M/YYYY')),
                                          (f = R(d).diff(R(u), 'days')),
                                          (u = R(document.querySelector('input#theCheckIn').value, 'D/M/YYYY').format('D/M/YYYY')),
                                          (d = R(document.querySelector('input#theCheckOut').value, 'D/M/YYYY').format('D/M/YYYY'))),
                                        'standard' !== n.getMetaTagContent('theme') &&
                                            ((c.check_in_value = document.querySelector('input#theCheckIn').value),
                                            (c.check_out_value = document.querySelector('input#theCheckOut').value)),
                                        r
                                            ? ((a = r.lat), (s = r.lng))
                                            : o
                                            ? ((a = o.lat), (s = o.lng))
                                            : r || o || 'search-results' !== t || ((a = l.get('latitude')), (s = l.get('longitude'))),
                                        w({
                                            longitude: {key: 'longitude', value: s},
                                            latitude: {key: 'latitude', value: a},
                                            destination: {
                                                key: 'destination',
                                                value:
                                                    ((p = 'input#address-input'),
                                                    null !== document.querySelector(p).value
                                                        ? document.querySelector(p).value
                                                        : l.has('destination')
                                                        ? l.get('destination')
                                                        : void 0),
                                            },
                                            checkin: {key: 'checkin', value: u},
                                            nights: {key: 'nights', value: f},
                                            rooms: {key: 'rooms', value: h('select#rooms')},
                                            adults: {key: 'adults', value: h('select#adults')},
                                            currency: {key: 'currency', value: n.getMetaTagContent('currency') ? n.getMetaTagContent('currency') : 'USD'},
                                            amenities: {key: 'amenities', value: y('#AmentitiesContainer .ArnSearchField div', 'lblAmenities')},
                                            stars: {key: 'propertyclasses', value: y('#PropertyClassesContainer .ArnSearchField div', 'lblRating')},
                                            propertyType: {key: 'propertytypes', value: y('#PropertyTypesContainer .ArnSearchField div', 'lblPropertyType')},
                                            optionalHotel: {key: 'hotelname', value: m()},
                                        }),
                                        'search-results' === t &&
                                            'lodging' === e.site_type.toLowerCase() &&
                                            w({
                                                properties: {key: 'properties', value: g('properties')},
                                                utm_source: {key: 'utm_source', value: g('utm_source')},
                                                locationLabel: {key: 'locationlabel', value: g('locationlabel')},
                                                radius: {key: 'radius', value: g('radius')},
                                                groupId: {key: 'groupid', value: g('groupid')},
                                                cid: {key: 'cid', value: g('cid')},
                                                points: {key: 'points', value: g('points')},
                                            }),
                                        'cug' === e.site_type.toLowerCase() && w({memberToken: {key: 'memberToken', value: n.getMetaTagContent('memberToken')}}),
                                        (window.location.href = decodeURIComponent(S));
                                }),
                                    (function (e) {
                                        f.apply(this, arguments);
                                    })('input#city'),
                                    'landing-page' === t &&
                                        p(
                                            '.RootBody',
                                            'div#CitySearchContainer span',
                                            'beforeEnd',
                                            '<input type="search" id="address-input" placeholder="Destination" required="true" />'
                                        ),
                                    'search-results' === t &&
                                        (p(
                                            '.SearchHotels',
                                            'div#theSearchBox',
                                            'afterBegin',
                                            '<span>City Search:</span><input type="search" id="address-input" placeholder="Destination" required="true"  />'
                                        ),
                                        (function () {
                                            if (document.querySelector('.SearchHotels')) {
                                                var e;
                                                null !== u.get('destination') && (e = u.get('destination')),
                                                    (e =
                                                        null !== l.get('destination')
                                                            ? l.get('destination')
                                                            : ''
                                                                  .concat(document.querySelector('span[itemprop="addressLocality"]').textContent, ', ')
                                                                  .concat(document.querySelector('span[itemprop="addressRegion"]').textContent));
                                                var t = document.querySelector('input#address-input');
                                                (t.value = e),
                                                    t.addEventListener('click', function () {
                                                        t.value = '';
                                                    });
                                            }
                                        })()),
                                    document.querySelector('input#theSubmitButton').setAttribute('onClick', ''),
                                    d('.ArnGoCitySearch, div.ArnSearchHotelsImg+br, .ArnGoLandmarkSearch, .ArnGoAirportSearch'),
                                    'search-results' === t &&
                                        'cug' !== e.site_type.toLowerCase() &&
                                        'retail' !== e.site_type.toLowerCase() &&
                                        n.waitForSelectorInDOM('.algolia-places').then(function () {
                                            (document.querySelector('.algolia-places').style.display = 'none'),
                                                (document.querySelector('#theSearchBox').firstChild.style.display = 'none');
                                        }),
                                    h('select#rooms'),
                                    h('select#adults'),
                                    (i = 'input#theCheckIn'),
                                    document.querySelector(i) && (document.querySelector(i).required = !0),
                                    jQuery('#theBody').on('arnMapLoadedEvent', function () {
                                        u.has('locationlabel') || u.has('points') || d('img.arn-green-marker-icon');
                                    }),
                                    (a = places({appId: e.algolia_app_id, apiKey: e.algolia_api_key, container: document.querySelector('input#address-input')}).configure({
                                        aroundLatLngViaIP: 'false',
                                        type: 'city',
                                    })).on('change', function (e) {
                                        (document.querySelector('input#address-input').value = e.suggestion.value || ''), (r = e.suggestion.latlng);
                                    }),
                                    a.on('suggestions', function (e) {
                                        o = e.rawAnswer.hits[0]._geoloc;
                                    });
                            },
                        },
                    ]) && E(t.prototype, n),
                    r && E(t, r),
                    e
                );
            })(),
            O = n(21);
        function D(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a),
                    s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function H(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                        D(i, r, o, a, c, 'next', e);
                    }
                    function c(e) {
                        D(i, r, o, a, c, 'throw', e);
                    }
                    a(void 0);
                });
            };
        }
        function F(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var B = new (n.n(O).a)(),
            I = n(40),
            Y = n(67);
        I.extend(Y);
        var N = new q.a(),
            U = new j(),
            $ = (function () {
                function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, e),
                        console.log('Output: BasePortal -> constructor -> config', t),
                        (this.site_id = ''),
                        (this.page_name = N.getPageName()),
                        (this.site_config = t),
                        (this.currency = ''),
                        (this.svg_arrow =
                            '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>'),
                        (this.map_loaded = !1),
                        (this.selected_currency = N.getMetaTagContent('currency') ? N.getMetaTagContent('currency') : 'USD');
                }
                var t, n, r, o, i, a, c, s, u, l, d, f;
                return (
                    (t = e),
                    (n = [
                        {
                            key: 'init',
                            value: function () {
                                var e = this;
                                this.site_config || console.error('No site config found.'),
                                    this.initializeARNRatesReadyEvent(),
                                    N.ieForEachPolyfill(),
                                    this.getSiteID().then(
                                        (function () {
                                            var t = H(
                                                regeneratorRuntime.mark(function t(n) {
                                                    return regeneratorRuntime.wrap(function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return (
                                                                        N.getPageName(),
                                                                        e.applyConfigStyles(),
                                                                        e.setupDatePrompt(),
                                                                        e.showLanguageFromCongif(),
                                                                        e.showFilters(),
                                                                        e.buildMobileMenu(),
                                                                        N.createHTML(
                                                                            '<link id="favicon" rel="shortcut icon" href="'.concat(e.site_config.fav_icon_url, '">'),
                                                                            'head',
                                                                            'beforeEnd'
                                                                        ),
                                                                        (t.next = 9),
                                                                        N.createHTML(
                                                                            '<header><a class="logo" href="'
                                                                                .concat(e.site_config.header.logo_outbound_url, '" target="_blank"><img src="')
                                                                                .concat(e.site_config.header.logo_file_location, '" alt="Logo"></a></header>'),
                                                                            '.config-container',
                                                                            'afterEnd'
                                                                        )
                                                                    );
                                                                case 9:
                                                                    'cug' === e.site_config.site_type &&
                                                                        N.waitForSelectorInDOM('#AdminControlsContainer').then(
                                                                            H(
                                                                                regeneratorRuntime.mark(function e() {
                                                                                    return regeneratorRuntime.wrap(function (e) {
                                                                                        for (;;)
                                                                                            switch ((e.prev = e.next)) {
                                                                                                case 0:
                                                                                                    N.appendToParent('#commands', 'header');
                                                                                                case 1:
                                                                                                case 'end':
                                                                                                    return e.stop();
                                                                                            }
                                                                                    }, e);
                                                                                })
                                                                            )
                                                                        ),
                                                                        N.updateAttribute('.ArnSupportLinks a', '_blank', 'target'),
                                                                        'property-detail' === e.page_name &&
                                                                            (e.addImageSlideshow(),
                                                                            e.updateAmenitiesLegendTag(),
                                                                            N.updateHTML('.SinglePropDetail .Map a', 'Map'),
                                                                            N.updateHTML('.SinglePropDetail .Reviews a', 'Reviews'),
                                                                            N.updateHTML('.SinglePropDetail .OptionsPricing a', 'Rooms'),
                                                                            N.updateHTML('.SinglePropDetail .Details a', 'General Info'),
                                                                            e.isPropByGateway(
                                                                                e.site_config.exclusive_rate_text,
                                                                                e.site_config.host_hotel_text,
                                                                                e.site_config.partner_hotel_text,
                                                                                e.site_config.lodging.event_name
                                                                            ),
                                                                            e.updatePropReviewsURLToUseAnchor(),
                                                                            e.getTotalNights().then(function (t) {
                                                                                e.getCurrency().then(function (n) {
                                                                                    e.showFullStayAndNightlyRates(t, n);
                                                                                });
                                                                            }),
                                                                            N.moveElementIntoExistingWrapper(
                                                                                '.SinglePropDetail .ArnTripAdvisorDetails.HasReviews',
                                                                                '.SinglePropDetail .ArnPropAddress',
                                                                                'afterEnd'
                                                                            ),
                                                                            N.moveElementIntoExistingWrapper(
                                                                                'div.subHeaderContainer > div > a > span.translateMe',
                                                                                '.SinglePropDetail .ArnLeftListContainer',
                                                                                'afterBegin'
                                                                            )),
                                                                        'checkout' === e.page_name &&
                                                                            (N.createModal(
                                                                                [document.querySelector('#theStayPolicies')],
                                                                                'Policies & Fees',
                                                                                'checkout',
                                                                                '#theConfirmationContainer',
                                                                                'afterBegin'
                                                                            ),
                                                                            N.updateAttribute('#theEmailAddressAjax input', 'email', 'type'),
                                                                            N.updateAttribute('.CheckOutForm #theCountryCode', 'numeric', 'inputmode'),
                                                                            N.updateAttribute('.CheckOutForm #theAreaCode', 'numeric', 'inputmode'),
                                                                            N.updateAttribute('.CheckOutForm #thePhoneNumber', 'numeric', 'inputmode'),
                                                                            N.updateAttribute('.CheckOutForm #theCreditCardNumber', 'numeric', 'inputmode'),
                                                                            N.updateAttribute('.CheckOutForm #theCvvCode', 'numeric', 'inputmode'),
                                                                            N.appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax'),
                                                                            N.updateHTML('#theCharges legend', 'Rate Info'),
                                                                            N.updateHTML('.taxFeeRow th', '<span>Taxes:</span>'),
                                                                            N.updateHTML('#theHotel legend', 'Reservation Summary'),
                                                                            e.formatCheckoutForm(),
                                                                            e.setupReservationSummaryContainer(),
                                                                            N.moveElementIntoExistingWrapper('#theBookingPage #theRateDescription', '#theHotel', 'beforeEnd'),
                                                                            N.emailVerificationSetup(),
                                                                            e.fixCheckoutInputTabOrder(),
                                                                            N.selectCheckboxOnLabelClick('.confirmationWarning, .confirmationAgreement, #theMarketingOptInAjax')),
                                                                        'confirmation' === e.page_name && (e.implementAds(), e.addMessagingToConfirmationPage()),
                                                                        document.querySelector('.RootBody') &&
                                                                            (U.init(e.site_config, e.page_name, N),
                                                                            e.buildCurrencyDropdown(),
                                                                            N.updateHTML('.RootBody .ArnSearchHeader', 'Start Your Search'),
                                                                            N.createHTML(
                                                                                '<h1>Start Your Search</h1><h3>From cozy budget hotels to upscale resorts, we have what you are looking for</h3>',
                                                                                '.RootBody .ArnPrimarySearchContainer',
                                                                                'beforeBegin'
                                                                            ),
                                                                            N.moveOrphanedElementsIntoNewWrapper(
                                                                                [document.querySelector('.RootBody .ArnLeftSearchContainer form')],
                                                                                'root-search-container',
                                                                                '.RootBody .ArnSearchContainerMainDiv',
                                                                                'afterBegin'
                                                                            ),
                                                                            N.moveElementIntoExistingWrapper(
                                                                                '.ArnSecondarySearchOuterContainer',
                                                                                '.ArnPrimarySearchContainer',
                                                                                'beforeEnd'
                                                                            ),
                                                                            N.selectCheckboxOnLabelClick('.ArnSearchField div')),
                                                                        N.updateHTML('#thePassCodeAjax label', 'Promocode'),
                                                                        N.updateHTML('#theUserNameAjax label', 'Username/Email'),
                                                                        N.createHTML('<h1>Login</h1>', '#theWBLoginFormBody form', 'beforeBegin'),
                                                                        N.createHTML('<h1>Register</h1>', '#theWBValidatedRegistrationFormBody form', 'beforeBegin'),
                                                                        N.createHTML('<h1>Forgot Password?</h1>', '#theWBForgotPasswordFormBody form', 'beforeBegin'),
                                                                        N.createHTML(
                                                                            '<div class="redeem-promocode-container"><h2>Have a promocode?</h2></div>',
                                                                            '#theWBLoginFormBody .ForgotPasswordAction',
                                                                            'afterEnd'
                                                                        ),
                                                                        'lrg-page' === e.page_name && e.replaceLRGForm(),
                                                                        'search-results' === e.page_name && U.init(e.site_config, e.page_name, N),
                                                                        jQuery('#theBody').on(
                                                                            'arnMapLoadedEvent',
                                                                            H(
                                                                                regeneratorRuntime.mark(function t() {
                                                                                    return regeneratorRuntime.wrap(function (t) {
                                                                                        for (;;)
                                                                                            switch ((t.prev = t.next)) {
                                                                                                case 0:
                                                                                                    return (
                                                                                                        (e.map_loaded = !0),
                                                                                                        (t.next = 3),
                                                                                                        N.waitForSelectorInDOM('.pollingFinished')
                                                                                                    );
                                                                                                case 3:
                                                                                                    document.querySelector('.leaflet-control-scale-line') ||
                                                                                                        L.control.scale().addTo(window.ArnMap),
                                                                                                        e.useLogoForVenueMapMarker(),
                                                                                                        e.highlightMapMarkersOnPropertyHover(),
                                                                                                        e.changeContractedPropertyPinColor();
                                                                                                case 7:
                                                                                                case 'end':
                                                                                                    return t.stop();
                                                                                            }
                                                                                    }, t);
                                                                                })
                                                                            )
                                                                        ),
                                                                        jQuery(document).on(
                                                                            'ratesReadyEvent',
                                                                            H(
                                                                                regeneratorRuntime.mark(function t() {
                                                                                    return regeneratorRuntime.wrap(function (t) {
                                                                                        for (;;)
                                                                                            switch ((t.prev = t.next)) {
                                                                                                case 0:
                                                                                                    setTimeout(function () {
                                                                                                        e.isPropByGateway(
                                                                                                            e.site_config.exclusive_rate_text,
                                                                                                            e.site_config.host_hotel_text,
                                                                                                            e.site_config.partner_hotel_text,
                                                                                                            e.site_config.lodging.event_name
                                                                                                        ),
                                                                                                            'property-detail' === e.page_name &&
                                                                                                                'cug' === e.site_config.site_type.toLowerCase() &&
                                                                                                                e.cugConfigs();
                                                                                                    }, 1);
                                                                                                case 1:
                                                                                                case 'end':
                                                                                                    return t.stop();
                                                                                            }
                                                                                    }, t);
                                                                                })
                                                                            )
                                                                        ),
                                                                        N.waitForSelectorInDOM('.pollingFinished').then(
                                                                            (function () {
                                                                                var t = H(
                                                                                    regeneratorRuntime.mark(function t(n) {
                                                                                        return regeneratorRuntime.wrap(function (t) {
                                                                                            for (;;)
                                                                                                switch ((t.prev = t.next)) {
                                                                                                    case 0:
                                                                                                        if (
                                                                                                            ('hold-rooms' === e.page_name &&
                                                                                                                (e.moveReviewsIntoPropNameContainer(),
                                                                                                                N.addClass('ArnSearchContainerMainDiv', 'ArnSubPage')),
                                                                                                            'search-results' === e.page_name && 'hold-rooms' !== e.page_name)
                                                                                                        ) {
                                                                                                            t.next = 3;
                                                                                                            break;
                                                                                                        }
                                                                                                        return t.abrupt('return');
                                                                                                    case 3:
                                                                                                        return (
                                                                                                            e.buildCurrencyDropdown(),
                                                                                                            e.cugConfigs(),
                                                                                                            e.implementAds(),
                                                                                                            e.toggleMap(),
                                                                                                            e.addLRGDetails(),
                                                                                                            e.getTotalNights().then(function (t) {
                                                                                                                e.getCurrency().then(function (n) {
                                                                                                                    e.showFullStayAndNightlyRates(t, n);
                                                                                                                });
                                                                                                            }),
                                                                                                            e.createStarIcons(),
                                                                                                            e.addHRToProperties(),
                                                                                                            e.showLoaderOnResultsUpdate(),
                                                                                                            e.showSearchContainerOnMobile(),
                                                                                                            e.moveFooterOutOfSearchContainer(),
                                                                                                            e.moveReviewsIntoPropNameContainer(),
                                                                                                            N.updateAttribute('.ArnShowRatesLink', '_blank', 'target'),
                                                                                                            e.movePropClassBelowPropName(),
                                                                                                            N.selectCheckboxOnLabelClick('.ArnSearchField div'),
                                                                                                            N.updateHTML('#ShowHotelOnMap', 'Open Map'),
                                                                                                            N.updateHTML('.ArnShowRatesLink', 'Book Rooms'),
                                                                                                            N.updateHTML('.lblRating', 'Stars'),
                                                                                                            N.updateHTML('.lblCurrency', 'Currency'),
                                                                                                            N.updateHTML('.lblAmenities', 'Amenities'),
                                                                                                            N.updateHTML('.lblNearbyCities', 'Nearby Cities'),
                                                                                                            N.updateHTML('.lblPropertyType', 'Property Type'),
                                                                                                            N.updateHTML('.ArnSortBy', '<div class="sort">Sort</div>'),
                                                                                                            N.updateHTML('.ArnSearchHeader', 'Update Search'),
                                                                                                            N.moveElementIntoExistingWrapper(
                                                                                                                '.ArnPropClass',
                                                                                                                '.ArnPropName',
                                                                                                                'beforeEnd'
                                                                                                            ),
                                                                                                            N.moveElementIntoExistingWrapper(
                                                                                                                '#theOtherSubmitButton',
                                                                                                                '.ArnSecondarySearchOuterContainer',
                                                                                                                'beforeEnd'
                                                                                                            ),
                                                                                                            (t.next = 31),
                                                                                                            N.waitForSelectorInDOM('#pagerBottomAjax').then(function () {
                                                                                                                N.appendToParent('#pagerBottomAjax', '#currentPropertyPage');
                                                                                                            })
                                                                                                        );
                                                                                                    case 31:
                                                                                                        return (
                                                                                                            (t.next = 33),
                                                                                                            N.waitForSelectorInDOM('.ArnSortContainer').then(function () {
                                                                                                                N.createWrapper(
                                                                                                                    '.ArnSortByDealPercent, .ArnSortByDistance, .ArnSortByDealAmount, .ArnSortByAvailability, .ArnSortByPrice, .ArnSortByClass, .ArnSortByType',
                                                                                                                    '.ArnSecondarySearchOuterContainer',
                                                                                                                    'sort-wrapper',
                                                                                                                    'afterBegin'
                                                                                                                ).then(function () {
                                                                                                                    e.createMobileSortAndFilter(),
                                                                                                                        N.createHTML(
                                                                                                                            '<h4>Sort</h4>',
                                                                                                                            '.sort-wrapper',
                                                                                                                            'afterBegin'
                                                                                                                        ),
                                                                                                                        N.matchMediaQuery('min-width: 1105px') &&
                                                                                                                            document.body.insertAdjacentHTML(
                                                                                                                                'afterBegin',
                                                                                                                                '<style>.ArnSortContainer, .sort-wrapper{display: block !important}</style>'
                                                                                                                            ),
                                                                                                                        N.matchMediaQuery('max-width: 800px') &&
                                                                                                                            document.body.insertAdjacentHTML(
                                                                                                                                'afterBegin',
                                                                                                                                '<style>.ArnSortContainer{display: flex !important; visibility: unset !important;}</style>'
                                                                                                                            );
                                                                                                                });
                                                                                                            })
                                                                                                        );
                                                                                                    case 33:
                                                                                                        if (!window.matchMedia('(min-width: 1105px)')) {
                                                                                                            t.next = 41;
                                                                                                            break;
                                                                                                        }
                                                                                                        return (t.next = 37), N.waitForSelectorInDOM('#ArnPropertyMap');
                                                                                                    case 37:
                                                                                                        document.querySelector('.leaflet-control-scale-line') ||
                                                                                                            L.control.scale().addTo(window.ArnMap),
                                                                                                            e.useLogoForVenueMapMarker(),
                                                                                                            e.highlightMapMarkersOnPropertyHover(),
                                                                                                            e.changeContractedPropertyPinColor();
                                                                                                    case 41:
                                                                                                    case 'end':
                                                                                                        return t.stop();
                                                                                                }
                                                                                        }, t);
                                                                                    })
                                                                                );
                                                                                return function (e) {
                                                                                    return t.apply(this, arguments);
                                                                                };
                                                                            })()
                                                                        ),
                                                                        e.applyDarkTheme(),
                                                                        e.setInputToRequired('input#city'),
                                                                        e.setInputToRequired('input#theCheckIn'),
                                                                        e.resizeViewportForMapMobile(),
                                                                        e.showCoronavirusInfoBanner(),
                                                                        e.showCurrencySelect(),
                                                                        e.positionPropReviews(),
                                                                        e.insertPoweredByFooterLogo(),
                                                                        e.updateConfirmationCheckBoxes(),
                                                                        e.showMoreAmenities(),
                                                                        e.appendMemberTokenForCug(),
                                                                        e.hideRemainingRooms(),
                                                                        e.replaceHTMLWithFile(
                                                                            'https://static.hotelsforhope.com/ares/html/terms.html',
                                                                            '.ArnSubPage.ArnTermsConditions'
                                                                        ),
                                                                        e.addLinkToLoginFromRegisterPage(),
                                                                        e.setCheckDatesToReadOnlyOnMobile(),
                                                                        e.updateSupportPageText(),
                                                                        e.removeLrgFooterLink(),
                                                                        document.querySelector('.WBConfirmedBooking') && e.cancelConfirmUpdate();
                                                                case 44:
                                                                case 'end':
                                                                    return t.stop();
                                                            }
                                                    }, t);
                                                })
                                            );
                                            return function (e) {
                                                return t.apply(this, arguments);
                                            };
                                        })()
                                    );
                            },
                        },
                        {
                            key: 'initializeARNRatesReadyEvent',
                            value: function () {
                                function e() {
                                    try {
                                        setTimeout(function () {
                                            jQuery(document).trigger('ratesReadyEvent');
                                        }, 1);
                                    } catch (e) {
                                        console.log(e);
                                    }
                                }
                                Ajax.Responders.register({onComplete: e}), e();
                            },
                        },
                        {
                            key: 'getSiteID',
                            value:
                                ((f = H(
                                    regeneratorRuntime.mark(function e() {
                                        return regeneratorRuntime.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (((this.site_id = document.querySelector('meta[name="siteId"]').getAttribute('content')), this.site_id)) {
                                                                e.next = 3;
                                                                break;
                                                            }
                                                            return e.abrupt('return');
                                                        case 3:
                                                            return e.abrupt('return', this.site_id);
                                                        case 4:
                                                        case 'end':
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    })
                                )),
                                function () {
                                    return f.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'getCurrency',
                            value:
                                ((d = H(
                                    regeneratorRuntime.mark(function e() {
                                        var t;
                                        return regeneratorRuntime.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if ((t = document.querySelector('meta[name="currency"]'))) {
                                                                e.next = 3;
                                                                break;
                                                            }
                                                            return e.abrupt('return');
                                                        case 3:
                                                            return (this.currency = t.getAttribute('content')), e.abrupt('return', this.currency);
                                                        case 5:
                                                        case 'end':
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    })
                                )),
                                function () {
                                    return d.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'donationAmount',
                            value: function () {
                                if (document.querySelector('.ConfirmationForm')) {
                                    var e = document.querySelector('.numberOfNights th').textContent.split(' ')[0];
                                    document.querySelector('.topRoomFunding') &&
                                        null !== e &&
                                        (document.querySelector('.topRoomFunding').innerHTML = '<p>Your reservation just generated an <span>$ '.concat(
                                            2 * e,
                                            ' donation</span> to <span>RoomFunding</span>.  And s at no cost to you.</p>'
                                        ));
                                }
                            },
                        },
                        {
                            key: 'addPerNightToPrice',
                            value: function (e, t) {
                                document.querySelector(e) &&
                                    document.querySelectorAll(t).forEach(function (e) {
                                        e.parentNode.querySelector('.perNight') || e.insertAdjacentHTML('afterEnd', '<span class="perNight translateMe">per night</span>');
                                    });
                            },
                        },
                        {
                            key: 'updateBookingFeeLanguage',
                            value: function () {
                                if (document.querySelector('.CheckOutForm')) {
                                    var e = document.querySelector('p.confirmedDueNowCharge span.confirmationAgreement');
                                    e &&
                                        (e.textContent.includes('4.95') || e.textContent.includes('5.00')) &&
                                        e.textContent.includes('Hotels For Hope') &&
                                        e.insertAdjacentHTML(
                                            'beforeEnd',
                                            ' <i>This fee is in addition to any immediate charges for prepayment as required in the above deposit and booking terms.</i>'
                                        );
                                }
                            },
                        },
                        {
                            key: 'hidePropertyThumbnailArrowIfNoPropertyThumbnails',
                            value: function () {
                                'search-results' !== !this.page_name &&
                                    document.querySelectorAll('.ArnImageLink img').forEach(function (e) {
                                        if (e && e.getAttribute('src').includes('no_image_300.gif')) {
                                            var t = e.parentNode;
                                            if (t) {
                                                t.classList.add('no-images');
                                                var n = t.previousSibling;
                                                n && n.classList.contains('ArnPropImageButtons') && (n.style.display = 'none');
                                            }
                                        }
                                    });
                            },
                        },
                        {
                            key: 'createStarIcons',
                            value: function () {
                                document.querySelectorAll('.ArnPropClass').forEach(function (e) {
                                    var t = e.textContent.replace(/\D/g, ''),
                                        n =
                                            '<svg height="21" width="20" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill: #faaf18"/></svg>';
                                    '1' === t && (e.innerHTML = n),
                                        '2' === t && (e.innerHTML = n.repeat(2)),
                                        '3' === t && (e.innerHTML = n.repeat(3)),
                                        '4' === t && (e.innerHTML = n.repeat(4)),
                                        '5' === t && (e.innerHTML = n.repeat(5));
                                });
                            },
                        },
                        {
                            key: 'createMobileSortAndFilter',
                            value: function () {
                                if (window.matchMedia('(max-width:800px)').matches && document.querySelector('.SearchHotels')) {
                                    N.updateHTML(
                                        '.sort',
                                        '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" class=""></path></svg> Sort &amp; Filter'
                                    ),
                                        N.createHTML(
                                            '<div class="sort-filter-overlay"><div class="sort-filter-container"><div class="sort-filter-header"><h3>Sort &amp; Filter</h3><span class="sort-filter-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="mobile-sort-container"></div><div class="mobile-filter-container"><h4>Filter</h4></div></div></div>',
                                            '#searchForm',
                                            'beforeEnd'
                                        );
                                    var e = document.querySelector('.ArnSortBy'),
                                        t = document.querySelector('.sort-wrapper'),
                                        n = document.querySelector('.ArnSecondarySearchOuterContainer'),
                                        r = document.querySelector('.sort-filter-overlay');
                                    e.removeEventListener('click', function () {}),
                                        e.addEventListener('click', function () {
                                            r.classList.toggle('show-sort-filter'),
                                                document.querySelector('.mobile-sort-container').insertAdjacentElement('beforeEnd', t),
                                                document.querySelector('.mobile-filter-container').insertAdjacentElement('beforeEnd', n),
                                                (n.style.display = 'block'),
                                                (t.style.display = 'block'),
                                                document.body.classList.toggle('fixed');
                                        }),
                                        document.querySelector('.sort-filter-close').addEventListener('click', function () {
                                            r.classList.toggle('show-sort-filter'), document.body.classList.toggle('fixed');
                                        }),
                                        document.querySelector('.sort-wrapper a').addEventListener('click', function (e) {
                                            e.toElement.classList.toggle('active-filter');
                                        }),
                                        n.querySelectorAll('.ArnSearchField').forEach(function (e) {
                                            e.classList.add('panel');
                                        });
                                }
                            },
                        },
                        {
                            key: 'showSearchContainerOnMobile',
                            value: function () {
                                var e,
                                    t,
                                    n,
                                    r = new URL(window.location.href),
                                    o = new URLSearchParams(r.search),
                                    i = '',
                                    a = '',
                                    c = '',
                                    s = document.querySelector('meta[name="checkIn"]'),
                                    u = document.querySelector('meta[name="checkOut"]'),
                                    l = document.querySelector('meta[name="numberOfAdults"]'),
                                    d = document.querySelector('meta[name="SearchLocation"]'),
                                    f = document.querySelector('.SearchHotels .ArnPrimarySearchContainer');
                                s &&
                                    u &&
                                    d &&
                                    l &&
                                    ((e = l.getAttribute('content')),
                                    (i = d.getAttribute('content')),
                                    (t = s.getAttribute('content')),
                                    (n = u.getAttribute('content')),
                                    (a = I(t)),
                                    (c = I(n)),
                                    ('cug' === this.site_config.site_type.toLowerCase() ||
                                        ('retail' === this.site_config.site_type.toLowerCase() && null !== o.get('destination'))) &&
                                        (i = o.get('destination')),
                                    N.createHTML(
                                        '\n            <div class="show-search-container">\n                <span class="search-close">\n                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">\n                        <polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"></polyline>\n                        <polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"></polyline>\n                    </svg>\n                </span>\n                <svg class="icon icon-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n                </svg>\n                <div class="search-info">\n                    <h3>'
                                            .concat(i, '</h3>\n                    <span>\n                        <span class="search-dates">')
                                            .concat(a.format('MMMM D'), ' - ')
                                            .concat(c.format('MMMM D'), '</span>\n                        <span class="adults-count">')
                                            .concat(e, ' guests</span>\n                    </span>\n                </div>\n            </div>'),
                                        '.SearchHotels .ArnPrimarySearchOuterContainer',
                                        'beforeBegin'
                                    ),
                                    document.querySelector('.show-search-container').addEventListener('click', function () {
                                        f.classList.toggle('show-search'), document.querySelector('.search-close').classList.toggle('show-search-close');
                                    }));
                            },
                        },
                        {
                            key: 'buildMobileMenu',
                            value:
                                ((l = H(
                                    regeneratorRuntime.mark(function e() {
                                        var t, n, r;
                                        return regeneratorRuntime.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (((t = document.querySelector('#commands')), (n = document.querySelector('#AdminControlsContainer')), t || n)) {
                                                            e.next = 4;
                                                            break;
                                                        }
                                                        return e.abrupt('return');
                                                    case 4:
                                                        if (
                                                            (n.insertAdjacentHTML(
                                                                'beforeEnd',
                                                                '<div class="hamburger" id="hamburger"><span class="line"></span><span class="line"></span><span class="line"></span></div>'
                                                            ),
                                                            (r = document.querySelector('#hamburger')))
                                                        ) {
                                                            e.next = 8;
                                                            break;
                                                        }
                                                        return e.abrupt('return');
                                                    case 8:
                                                        return (
                                                            r.addEventListener('click', function () {
                                                                r.classList.toggle('is-active'), t.classList.toggle('active');
                                                            }),
                                                            (e.next = 11),
                                                            N.waitForSelectorInDOM('header')
                                                        );
                                                    case 11:
                                                        document.querySelector('header').insertAdjacentElement('beforeend', n);
                                                    case 12:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function () {
                                    return l.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'showAdditionalPolicies',
                            value: function () {
                                var e = document.querySelector('#theStayPolicies'),
                                    t = e.querySelector('legend'),
                                    n = e.offsetHeight,
                                    r = document.querySelector('#theConfirmationPoliciesAjax');
                                window.matchMedia('(max-width:800px)').matches &&
                                    document.querySelector('#theBookingPage') &&
                                    (r.insertAdjacentElement('afterEnd', e),
                                    N.moveOrphanedElementsIntoNewWrapper(document.querySelectorAll('#theStayPolicies *'), 'policies-container', '#theStayPolicies', 'beforeEnd'),
                                    e.insertAdjacentElement('beforeBegin', t),
                                    e.insertAdjacentHTML(
                                        'beforeEnd',
                                        '\n        <style>\n            #theStayPolicies {\n                height: 0;\n                display: none;\n            }\n            .show-policies{\n                height: '.concat(
                                            n,
                                            'px !important;\n                display: block !important;\n            }\n        </style>\n    '
                                        )
                                    ),
                                    t.addEventListener('click', function () {
                                        e.classList.toggle('show-policies');
                                    }));
                            },
                        },
                        {
                            key: 'updatePropReviewsURLToUseAnchor',
                            value: function () {
                                var e = document.querySelector('.reviewCount a');
                                'property-detail' === this.page_name && e && e.setAttribute('href', '#thePropertyReviews');
                            },
                        },
                        {
                            key: 'moveFooterOutOfSearchContainer',
                            value: function () {
                                document.querySelector('.SearchHotels') &&
                                    document.querySelector('.ArnSupportBottom') &&
                                    document.body.insertAdjacentElement('beforeEnd', document.querySelector('.ArnSupportBottom'));
                            },
                        },
                        {
                            key: 'moveReviewsIntoPropNameContainer',
                            value: function () {
                                var e = document.querySelectorAll('.SearchHotels .ArnPropName');
                                document.querySelector('.SearchHotels') &&
                                    document.querySelector('.ArnContainer') &&
                                    e.forEach(function (e) {
                                        e.insertAdjacentElement('beforeEnd', e.parentElement.querySelector('.ArnTripAdvisorDetails'));
                                    });
                            },
                        },
                        {
                            key: 'toggleMap',
                            value: function () {
                                var e = document.querySelector('#ArnPropertyMap'),
                                    t = document.querySelector('#arnCloseAnchorId'),
                                    n = document.querySelector('header'),
                                    r = document.querySelector('.config-container'),
                                    o = document.querySelector('.ArnToggleMap + .ArnToggleMap');
                                o && o.click(),
                                    t &&
                                        e &&
                                        ((t.innerHTML =
                                            '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-map fa-w-18 fa-2x"><path fill="currentColor" d="M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" class=""></path></svg><span> Open Map</span>'),
                                        t.addEventListener('click', function () {
                                            if (
                                                (t.classList.toggle('closeMap'),
                                                e.classList.toggle('showMap'),
                                                document.body.classList.toggle('fixed'),
                                                n.classList.toggle('hideElement'),
                                                r.classList.toggle('hideElement'),
                                                t.classList.contains('closeMap'))
                                            ) {
                                                t.querySelector('span').textContent = ' Close Map';
                                                var o = document.querySelector('.leaflet-control-container .leaflet-top.leaflet-right');
                                                if (!o) return;
                                                o.appendChild(t);
                                            } else {
                                                var i = document.querySelector('#arnToggleMapDiv');
                                                if (!i) return;
                                                i.appendChild(t), (t.querySelector('span').innerHTML = ' Open Map');
                                            }
                                        }));
                            },
                        },
                        {
                            key: 'accordion',
                            value: function (e, t, n) {
                                if (document.querySelector(e)) {
                                    var r = document.querySelector(e),
                                        o = r.querySelector(n),
                                        i = r.querySelector(t),
                                        a = i.offsetHeight;
                                    document
                                        .querySelector(e)
                                        .insertAdjacentHTML(
                                            'beforeEnd',
                                            '<style>\n            '
                                                .concat(t, '{\n                transform: translateY(-')
                                                .concat(
                                                    a,
                                                    'px);\n                pointer-events: none;\n                transition: all .75s ease;\n                height: 0;\n                position: relative;\n            }\n            .show-content{\n                transform: translateY(0) !important;\n                opacity: 1 !important;\n                pointer-events: initial !important;\n                height: '
                                                )
                                                .concat(a, 'px !important;\n            }\n        </style>\n        ')
                                        ),
                                        o.insertAdjacentHTML(
                                            'beforeEnd',
                                            '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>'
                                        ),
                                        o.addEventListener('click', function () {
                                            i.classList.toggle('show-content'), o.querySelector('svg').classList.toggle('flip-svg');
                                        });
                                }
                            },
                        },
                        {
                            key: 'movePropClassBelowPropName',
                            value: function () {
                                var e = document.querySelectorAll('.ArnContainer');
                                document.querySelector('.SearchHotels') &&
                                    e.forEach(function (e) {
                                        var t = e.querySelector('.ArnPropClass'),
                                            n = e.querySelector('.ArnPropName');
                                        e && t && n && n.insertAdjacentElement('beforeEnd', t);
                                    });
                            },
                        },
                        {
                            key: 'setupReservationSummaryContainer',
                            value: function () {
                                var e,
                                    t,
                                    n,
                                    r,
                                    o = document.querySelector('.checkInRow td'),
                                    i = document.querySelector('.checkOutRow td'),
                                    a = document.querySelector('meta[name="currency"]');
                                o &&
                                    i &&
                                    a &&
                                    ((t = o.textContent),
                                    (r = i.textContent),
                                    (e = I(t).format(this.site_config.dayjs_date_format)),
                                    (n = I(r).format(this.site_config.dayjs_date_format)),
                                    N.createHTML('<span class="date-container">'.concat(e, ' - ').concat(n), '#theHotelAddress', 'beforeBegin'),
                                    N.moveElementIntoExistingWrapper('.totalRow .discount', '.theHotelName', 'afterEnd'));
                            },
                        },
                        {
                            key: 'formatCheckoutForm',
                            value: function () {
                                var e = document.querySelectorAll('.WBGuestFormFields'),
                                    t = 0;
                                e.forEach(function (e) {
                                    (t += 1),
                                        N.moveElementIntoExistingWrapper(
                                            '#theBookingPage td.GuestForms > fieldset:nth-child('.concat(t, ') #theCreditCardBillingNameAjax').concat(t - 1),
                                            '#theBookingPage td.GuestForms > fieldset:nth-child('.concat(t, ') #theCreditCardNumberAjax'),
                                            'afterEnd'
                                        ),
                                        N.createWrapper(
                                            '.RoomNumber-'
                                                .concat(t, ' .guestCityZip > table > tbody > tr > td > div, .RoomNumber-')
                                                .concat(t, ' .guestCityZip > table > tbody > tr >td:nth-child(2) > div, #theStateAjax')
                                                .concat(t, ', #theCountryAjax')
                                                .concat(t),
                                            '#theBillingAddressAjax'.concat(t),
                                            'billing-details-container',
                                            'afterEnd'
                                        ),
                                        N.createWrapper(
                                            '.RoomNumber-'
                                                .concat(t, ' #theCreditCardBillingNameAjax')
                                                .concat(t, ',\n                .RoomNumber-')
                                                .concat(t, ' #theCardExpirationFieldsAjax,\n                .RoomNumber-')
                                                .concat(t, ' #theCardVerificationAjax'),
                                            '.RoomNumber-'.concat(t, ' #theCreditCardNumberAjax'),
                                            'credit-card-details',
                                            'afterEnd'
                                        ),
                                        N.updateHTML('#theCreditCardBillingNameAjax'.concat(t - 1, ' label'), "Cardholder's Name"),
                                        N.updateHTML('#theBillingAddressAjax'.concat(t - 1, ' label'), 'Billing Address'),
                                        N.updateHTML('.RoomNumber-'.concat(t, ' > legend'), 'Billing Info'),
                                        t > 1 && N.updateHTML('.RoomNumber-'.concat(t, ' > legend'), 'Billing Info - Room '.concat(t)),
                                        N.createHTML('<legend>Credit Card Info</legend>', '.RoomNumber-'.concat(t, ' .guestBillingAddress'), 'beforeBegin'),
                                        N.updateHTML(
                                            '.cardNumber label',
                                            '<div class="creditcards"><img src="https://static.hotelsforhope.com/ares/images/credit_cards/credit_cards.png" alt="Credit Cards"></div><label>Credit Card Number</label>'
                                        );
                                }),
                                    this.keepHeaderConsistentWhenSameAsLastGuestClicked(t);
                            },
                        },
                        {
                            key: 'keepHeaderConsistentWhenSameAsLastGuestClicked',
                            value: function (e) {
                                document.querySelector('#theCopyInfoAjax input') &&
                                    document.querySelector('#theCopyInfoAjax input').addEventListener('click', function () {
                                        setTimeout(function () {
                                            N.updateHTML('.RoomNumber-'.concat(e, ' > legend'), 'Billing Info'),
                                                e > 1 && N.updateHTML('.RoomNumber-'.concat(e, ' > legend'), 'Billing Info - Room '.concat(e));
                                        }, 750);
                                    });
                            },
                        },
                        {
                            key: 'applyConfigStyles',
                            value: function () {
                                var e = document.querySelector('#h4h-styles');
                                this.site_config &&
                                    e &&
                                    (N.createHTML('<link href="'.concat(this.site_config.google_font_url, '" rel="stylesheet">'), 'head', 'beforeEnd'),
                                    e.insertAdjacentHTML(
                                        'beforeend',
                                        '<link href="'
                                            .concat(B.path, '/site_configs/')
                                            .concat(this.site_config.directory_name, '/styles/')
                                            .concat(this.site_config.site_id, '.css" rel="stylesheet">')
                                    ));
                            },
                        },
                        {
                            key: 'applyDarkTheme',
                            value: function () {
                                'light' !== this.site_config.theme.toLowerCase() &&
                                    document.querySelector('#h4h-styles').insertAdjacentHTML('beforeend', '<link href="'.concat(B.path, '/styles/dark.css" rel="stylesheet">'));
                            },
                        },
                        {
                            key: 'showLanguageFromCongif',
                            value: function () {
                                var e,
                                    t,
                                    n,
                                    r = this,
                                    o = '',
                                    i = '',
                                    a = document.querySelector('#language'),
                                    c = document.querySelector('.config-container'),
                                    s = document.querySelector('meta[name="theme"]'),
                                    u = document.querySelector('input#theCheckIn'),
                                    l = document.querySelector('input#theCheckOut'),
                                    d = new URLSearchParams(window.location.search);
                                function f(r, o) {
                                    (e = I(u.value, r).format('M/D/YYYY')),
                                        (t = I(l.value, r).format('M/D/YYYY')),
                                        (n = I(t).diff(I(e), 'days')),
                                        (e = I(u.value, r).format(o)),
                                        (t = I(l.value, r).format(o));
                                }
                                this.site_config &&
                                    c &&
                                    s &&
                                    a &&
                                    (this.site_config.show_language_select
                                        ? (document.querySelector('div#language-label').classList.add('config-label'),
                                          (i = s.getAttribute('content')),
                                          document.querySelector(".language-container div[value='".concat(i, "']")).classList.add('active-language'),
                                          document.body.insertAdjacentElement('afterBegin', c),
                                          c.insertAdjacentElement('afterBegin', a),
                                          ((o = a.querySelector('#language-label')).querySelector('span').innerHTML = document.querySelector('.active-language').innerHTML),
                                          o.addEventListener('click', function () {
                                              a.querySelector('.language-container').classList.toggle('show-language-container'),
                                                  window.document.documentMode || o.querySelector('svg').classList.toggle('flip-svg');
                                          }),
                                          a.querySelector('.language-container').addEventListener('click', function (t) {
                                              var o = document.getElementById(t.target.id).getAttribute('value');
                                              ('search-results' !== r.page_name && 'landing-page' !== r.page_name) ||
                                                  o === i ||
                                                  (d.set('theme', o),
                                                  'standard' === o || o.includes('mandarin') || 'standard' !== i || 16980 === r.site_config.affilaite_id
                                                      ? 'standard' !== o || 'standard' === i || i.includes('mandarin')
                                                          ? 'standard' === o || o.includes('mandarin') || 'standard' === i || i.includes('mandarin')
                                                              ? o.includes('mandarin') && 'standard' !== i
                                                                  ? f('D/M/YYYY', 'YYYY/M/D')
                                                                  : o.includes('mandarin') && i.includes('mandarin')
                                                                  ? f('YYYY/M/D', 'YYYY/M/D')
                                                                  : o.includes('mandarin') && 'standard' === i
                                                                  ? f('M/D/YYYY', 'YYYY/M/D')
                                                                  : 'standard' === o && i.includes('mandarin')
                                                                  ? f('YYYY/M/D', 'M/D/YYYY')
                                                                  : 'standard' !== o && i.includes('mandarin')
                                                                  ? f('YYYY/M/D', 'D/M/YYYY')
                                                                  : 16980 === r.site_config.affilaite_id && f('D/M/YYYY', 'D/M/YYYY')
                                                              : f('D/M/YYYY', 'D/M/YYYY')
                                                          : f('D/M/YYYY', 'M/D/YYYY')
                                                      : f('M/D/YYYY', 'D/M/YYYY'),
                                                  'search-results' === r.page_name && (d.set('nights', n), d.set('checkin', e)),
                                                  (window.location.search = d.toString()));
                                          }),
                                          window.addEventListener('click', function (e) {
                                              if (document.querySelector('.show-language-container')) {
                                                  if (
                                                      e.target === document.querySelector('#language-label') ||
                                                      e.target.parentNode === document.querySelector('.language-container')
                                                  )
                                                      return;
                                                  if ((document.querySelector('.language-container').classList.toggle('show-language-container'), window.document.documentMode))
                                                      return;
                                                  o.querySelector('svg').classList.toggle('flip-svg');
                                              }
                                          }))
                                        : (a.style.display = 'none'));
                            },
                        },
                        {
                            key: 'buildCurrencyDropdown',
                            value:
                                ((u = H(
                                    regeneratorRuntime.mark(function e() {
                                        var t,
                                            n,
                                            r,
                                            o,
                                            i = this;
                                        return regeneratorRuntime.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (t = function () {
                                                                fetch(''.concat(B.path, '/js/json/currencies.json'))
                                                                    .then(function (e) {
                                                                        if (!e.ok) throw e;
                                                                        return e.json();
                                                                    })
                                                                    .then(function (e) {
                                                                        n(e), r(), o();
                                                                    })
                                                                    .catch(function (e) {
                                                                        e.text().then(function (e) {
                                                                            console.error('Could not fetch currencies.json', e);
                                                                        });
                                                                    });
                                                            }),
                                                            (n = function (e) {
                                                                Object.entries(e);
                                                                var t = document.createElement('div'),
                                                                    n = document.createElement('div'),
                                                                    r = '\n            <h4>Top Currencies</h4>\n            <div class="top-currencies">\n                <span id="AUD"><strong>'
                                                                        .concat(e.AUD.code, '</strong> - ')
                                                                        .concat(e.AUD.name, '</span>\n                <span id="CAD"><strong>')
                                                                        .concat(e.CAD.code, '</strong> - ')
                                                                        .concat(e.CAD.name, '</span>\n                <span id="EUR"><strong>')
                                                                        .concat(e.EUR.code, '</strong> - ')
                                                                        .concat(e.EUR.name, '</span>\n                <span id="MXN"><strong>')
                                                                        .concat(e.MXN.code, '</strong> - ')
                                                                        .concat(e.MXN.name, '</span>\n                <span id="GBP"><strong>')
                                                                        .concat(e.GBP.code, '</strong> - ')
                                                                        .concat(e.GBP.name, '</span>\n                <span id="USD"><strong>')
                                                                        .concat(e.USD.code, '</strong> - ')
                                                                        .concat(e.USD.name, '</span>\n            </div>\n            <h4>All Currencies</h4>\n            ');
                                                                for (var o in (t.insertAdjacentHTML('afterBegin', r),
                                                                t.classList.add('currency-content'),
                                                                n.classList.add('all-currencies'),
                                                                e))
                                                                    n.insertAdjacentHTML(
                                                                        'beforeEnd',
                                                                        '<span id="'.concat(o, '"><strong>').concat(o, '</strong> - ').concat(e[o].name, '</span>')
                                                                    );
                                                                t.insertAdjacentElement('beforeEnd', n),
                                                                    N.createDropdownMenu('#currency-label', t, '.currency-content', '.dropdown');
                                                            }),
                                                            (r = function () {
                                                                var e = new URLSearchParams(window.location.search),
                                                                    t = document.querySelector('.dropdown');
                                                                t &&
                                                                    t.addEventListener('click', function (t) {
                                                                        (i.selected_currency = t.target.id),
                                                                            i.selected_currency &&
                                                                                (document.querySelector('.active-currency').classList.remove('active-currency'),
                                                                                document.querySelector('#'.concat(t.target.id)).classList.add('active-currency'),
                                                                                (document.querySelector('#currency-label span').textContent = document.querySelector(
                                                                                    '.active-currency'
                                                                                ).textContent),
                                                                                'search-results' === i.page_name &&
                                                                                    (e.set('currency', i.selected_currency), (window.location.search = e.toString())));
                                                                    });
                                                            }),
                                                            (o = function () {
                                                                var e = document.querySelector('meta[name="currency"]');
                                                                if (e) {
                                                                    var t = e.content;
                                                                    (i.selected_currency = t),
                                                                        document.querySelector('#'.concat(t)).classList.add('active-currency'),
                                                                        (document.querySelector('#currency-label span').textContent = document.querySelector(
                                                                            '.active-currency'
                                                                        ).textContent);
                                                                }
                                                            }),
                                                            (e.next = 6),
                                                            t()
                                                        );
                                                    case 6:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function () {
                                    return u.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'setupDatePrompt',
                            value: function () {
                                var e = document.querySelector('#theDatePrompt');
                                e &&
                                    e
                                        .querySelector('#datePromptContainer')
                                        .insertAdjacentHTML('afterBegin', '<img src="'.concat(this.site_config.header.logo_file_location, '" alt="Logo">'));
                            },
                        },
                        {
                            key: 'highlightMapMarkersOnPropertyHover',
                            value: function () {
                                var e,
                                    t,
                                    n = document.querySelectorAll('.ArnContainer');
                                document.querySelector('#currentPropertyPage') &&
                                    n.forEach(function (n) {
                                        n.addEventListener('mouseenter', function (r) {
                                            (t = n.parentElement.querySelector('.propId')) &&
                                                ((e = t.textContent), window.ArnMapDispatcher && ArnMapDispatcher.eventPropertyHighlightOn(e));
                                        }),
                                            n.addEventListener('mouseleave', function (t) {
                                                window.ArnMapDispatcher && ArnMapDispatcher.eventPropertyHighlightOff(e);
                                            });
                                    });
                            },
                        },
                        {
                            key: 'showFullStayAndNightlyRates',
                            value: function (e, t) {
                                var n,
                                    r,
                                    o,
                                    i,
                                    a = N.getMetaTagContent('showFullTotals');
                                a ||
                                    (document.querySelector('.SearchHotels') &&
                                        (document.querySelectorAll('.ArnContainer').forEach(function (t) {
                                            (n = t.querySelector('.arnPrice')),
                                                (r = t.querySelector('.arnPrice .arnUnit')) &&
                                                    n &&
                                                    ((o = parseFloat(r.textContent) * e),
                                                    (i = o.toFixed(2)),
                                                    r &&
                                                        (n.insertAdjacentHTML(
                                                            'beforeEnd',
                                                            '<div>per night</div><div class="full-stay">'.concat(i, ' for ').concat(e, ' nights </div>')
                                                        ),
                                                        1 === e && (t.querySelector('.full-stay').style.display = 'none')));
                                        }),
                                        document.body.insertAdjacentHTML(
                                            'beforeEnd',
                                            '<style>.arnCurrency,.arnUnit{font-size: 17px;}.arnCurrency + div{font-weight:500;}</style>'
                                        )),
                                    document.querySelector('.SinglePropDetail') &&
                                        (document.querySelectorAll('.ArnNightlyRate').forEach(function (t) {
                                            (r = t.querySelector('strong')),
                                                (o = parseFloat(r.textContent.replace(/[^0-9.]/g, '').replace(/[\r\n]+/gm, '')) * e),
                                                r &&
                                                    o &&
                                                    (i = o.toFixed(2)) &&
                                                    (r.insertAdjacentHTML(
                                                        'beforeEnd',
                                                        '<div>per night</div><div class="full-stay">'.concat(i, ' for ').concat(e, ' nights </div>')
                                                    ),
                                                    1 === e && (t.querySelector('.full-stay').style.display = 'none'));
                                        }),
                                        document.body.insertAdjacentHTML(
                                            'beforeEnd',
                                            '<style>.ArnNightlyRate strong{font-size: 17px !important;}.ArnNightlyRate strong div:first-child{font-weight:500;margin-bottom:4px;}.ArnNightlyRate strong div{font-size:13px;}</style>'
                                        ))),
                                    a &&
                                        (document.querySelector('.SearchHotels') &&
                                            document.querySelectorAll('.ArnContainer').forEach(function (t) {
                                                (r = t.querySelector('.ArnRateCell .ArnPriceCell .averageNightly')),
                                                    (o = t.querySelector('.arnPrice .arnUnit')),
                                                    r &&
                                                        o &&
                                                        ((r.style.display = 'block'),
                                                        (o.style.fontSize = '13px'),
                                                        (t.querySelector('.arnCurrency').style.display = 'none'),
                                                        r.insertAdjacentHTML('afterEnd', '<div>per night</div>'),
                                                        o.insertAdjacentHTML('beforeEnd', '<span> for '.concat(e, ' nights </span>')),
                                                        1 === e && (t.querySelector('.arnPrice').style.display = 'none'));
                                            }),
                                        document.querySelector('.SinglePropDetail') &&
                                            document.querySelectorAll('.ArnNightlyRate').forEach(function (t) {
                                                (r = t.querySelector('.averageNightly')),
                                                    (o = t.querySelector('strong')),
                                                    r &&
                                                        o &&
                                                        ((r.style.display = 'block'),
                                                        r.insertAdjacentHTML('afterEnd', '<div>per night</div>'),
                                                        (o.textContent = o.textContent.replace(/[^\d.-]/g, '')),
                                                        o.insertAdjacentHTML('beforeEnd', '<span> for '.concat(e, ' nights </span>')),
                                                        1 === e && (t.querySelector('strong').style.display = 'none'));
                                            }));
                            },
                        },
                        {
                            key: 'getTotalNights',
                            value:
                                ((s = H(
                                    regeneratorRuntime.mark(function e() {
                                        var t, n, r, o, i;
                                        return regeneratorRuntime.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (((t = document.querySelector('meta[name="checkIn"]')), (n = document.querySelector('meta[name="checkOut"]')), t && n)) {
                                                            e.next = 4;
                                                            break;
                                                        }
                                                        return e.abrupt('return');
                                                    case 4:
                                                        return (
                                                            (r = new Date(t.getAttribute('content'))),
                                                            (o = new Date(n.getAttribute('content'))),
                                                            (i = (o.getTime() - r.getTime()) / 864e5),
                                                            e.abrupt('return', i)
                                                        );
                                                    case 8:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function () {
                                    return s.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'getNightlyRateForMapMarkers',
                            value: function (e, t) {
                                var n, r;
                                document.querySelectorAll('.arnMapMarkerSpan').forEach(function (o) {
                                    (n = o.textContent.replace(/[^0-9.]/g, '').replace(/[\r\n]+/gm, '')),
                                        (r = parseFloat(n / e).toFixed(0)),
                                        (o.textContent = 'USD' === t ? '$'.concat(r) : ''.concat(r, ' ').concat(t));
                                });
                            },
                        },
                        {
                            key: 'addTitleToProperties',
                            value: function () {
                                var e,
                                    t,
                                    n = document.querySelectorAll('.ArnContainer');
                                document.querySelector('.SearchHotels') &&
                                    n.forEach(function (n) {
                                        (t = n.querySelector('.ArnPropNameLink')), (e = t.querySelector('span').textContent), t.setAttribute('title', e);
                                    });
                            },
                        },
                        {
                            key: 'showLoaderOnResultsUpdate',
                            value: function () {
                                var e = this,
                                    t = document.querySelector('#searching'),
                                    n = document.querySelectorAll('#theSubmitButton', '#theOtherSubmitButton');
                                document.querySelector('.SearchHotels') &&
                                    n.forEach(function (n) {
                                        n.addEventListener('click', function () {
                                            'cug' !== e.site_config.site_type.toLowerCase() || '' !== document.querySelector('input#address-input').value
                                                ? '' !== document.querySelector('input#theCheckIn').value
                                                    ? (t.style.display = 'block')
                                                    : e.style_validation_fields('input#theCheckIn')
                                                : e.style_validation_fields('input#address-input');
                                        });
                                    });
                            },
                        },
                        {
                            key: 'changeContractedPropertyPinColor',
                            value: function () {
                                var e = document.querySelectorAll('.ArnProperty'),
                                    t = document.querySelectorAll('.arnMapMarker');
                                if (e) {
                                    var n = [],
                                        r = [];
                                    e.forEach(function (e) {
                                        e.classList.contains('S16') || e.classList.contains('S20') || e.classList.contains('S33') ? n.push(!0) : n.push(!1);
                                    }),
                                        n.forEach(function (e, t) {
                                            e && r.push(t);
                                        }),
                                        r.forEach(function (e) {
                                            t[e].classList.add('contracted-pin');
                                        });
                                }
                            },
                        },
                        {
                            key: 'setMapMarkerSize',
                            value: function () {
                                var e = document.querySelector('meta[name="currency"]'),
                                    t = document.querySelectorAll('.arnMapMarker');
                                e &&
                                    t &&
                                    'USD' !== e.getAttribute('content') &&
                                    t.forEach(function (e) {
                                        e.style.width = '85px';
                                    });
                            },
                        },
                        {
                            key: 'useLogoForVenueMapMarker',
                            value: function () {
                                var e = this,
                                    t = document.querySelectorAll('.arn-green-marker-icon');
                                this.site_config &&
                                    t.forEach(function (t) {
                                        t.setAttribute('src', ''.concat(e.site_config.map_marker_image_url));
                                    });
                            },
                        },
                        {
                            key: 'addHRToProperties',
                            value: function () {
                                var e = document.querySelectorAll('.ArnProperty');
                                e &&
                                    e.forEach(function (e) {
                                        e.insertAdjacentHTML('beforeEnd', '<hr class="prop-hr">');
                                    });
                            },
                        },
                        {
                            key: 'isPropByGateway',
                            value: function (e, t, n, r) {
                                var o = this;
                                function i(e, t) {
                                    t.querySelector('div.ArnPropThumb').insertAdjacentHTML('beforeend', '<div class="custom-tag">'.concat(e, ' </div>'));
                                }
                                document.querySelector('.exclusive-rate') ||
                                    ('search-results' === this.page_name &&
                                        document.querySelectorAll('div.ArnProperty').forEach(function (r) {
                                            var a, c;
                                            r.classList.contains('ArnPropertyTierTwo') && '' !== n && i(n, r),
                                                r.classList.contains('ArnPropertyTierThree') && '' !== t && i(t, r),
                                                (r.classList.contains('S16') || r.classList.contains('S20') || (r.classList.contains('S33') && '' !== e)) &&
                                                    ((a = e),
                                                    (c = r),
                                                    '' !== o.site_config.exclusive_rate_text &&
                                                        c.querySelector('div.ArnPropThumb').insertAdjacentHTML('afterbegin', '<span class="exclusive-rate">'.concat(a, '</span>')));
                                        }),
                                    'property-detail' === this.page_name &&
                                        document.querySelectorAll('div.rateRow').forEach(function (t) {
                                            (t.querySelector('table.SB16') || (t.querySelector('table.SB20') && '' !== o.site_config.exclusive_rate_text)) &&
                                                (function (e, t, n) {
                                                    if (document.querySelector('.SinglePropDetail')) {
                                                        var r = e.querySelector('.RoomDescription');
                                                        r.innerHTML = r.innerHTML.replace(
                                                            'Special Event Rate',
                                                            '<span id="exclusive-event-rate">'.concat(t, ' ').concat(n, '</span>')
                                                        );
                                                    }
                                                })(t, r, e);
                                        }));
                            },
                        },
                        {
                            key: 'addLRGDetails',
                            value: function () {
                                var e = this;
                                if ('lodging' === this.site_config.site_type && this.site_config.lodging.is_lrg) {
                                    var t = document.querySelectorAll('.S16, .S20');
                                    t &&
                                        t.forEach(function (t) {
                                            t.querySelector('.arnPrice') &&
                                                t
                                                    .querySelector('.arnPrice')
                                                    .insertAdjacentHTML(
                                                        'afterEnd',
                                                        '\n                <a href="https://events.hotelsforhope.com/v6/low-rate-guarantee?siteid='.concat(
                                                            e.site_id,
                                                            '&amp;theme=standard" target="_blank" class="lowest-rate-link">Lowest Rate. <span>Guaranteed.</span></a>\n            '
                                                        )
                                                    );
                                        });
                                }
                            },
                        },
                        {
                            key: 'replaceLRGForm',
                            value:
                                ((c = H(
                                    regeneratorRuntime.mark(function e() {
                                        var t;
                                        return regeneratorRuntime.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if ('lodging' === this.site_config.site_type || this.site_config.is_lrg) {
                                                                e.next = 2;
                                                                break;
                                                            }
                                                            return e.abrupt('return');
                                                        case 2:
                                                            return (
                                                                (e.prev = 2),
                                                                (e.next = 5),
                                                                fetch('https://static.hotelsforhope.com/components/lrg-form/lrg-form.html').then(function (e) {
                                                                    return e.text();
                                                                })
                                                            );
                                                        case 5:
                                                            (t = e.sent), (document.querySelector('#theWBRateGuaranteeForm2Body').innerHTML = t), (e.next = 12);
                                                            break;
                                                        case 9:
                                                            (e.prev = 9), (e.t0 = e.catch(2)), console.error(e.t0);
                                                        case 12:
                                                        case 'end':
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this,
                                            [[2, 9]]
                                        );
                                    })
                                )),
                                function () {
                                    return c.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'addImageSlideshow',
                            value: function () {
                                document.querySelector('#thePropertyImages').style.display = 'none';
                                var e,
                                    t,
                                    n = document.querySelector('meta[name="aPropertyId"]').content,
                                    r = 0;
                                function o() {
                                    return i.apply(this, arguments);
                                }
                                function i() {
                                    return (i = H(
                                        regeneratorRuntime.mark(function e() {
                                            var t;
                                            return regeneratorRuntime.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (e.prev = 0),
                                                                    (e.next = 3),
                                                                    fetch('https://api.hotelsforhope.com/arn/properties/'.concat(n), {method: 'GET'}).then(function (e) {
                                                                        return e.json();
                                                                    })
                                                                );
                                                            case 3:
                                                                return (
                                                                    (t = e.sent),
                                                                    e.abrupt(
                                                                        'return',
                                                                        t.Images.map(function (e) {
                                                                            return e.ImagePath.replace(/_300/, '_804480');
                                                                        })
                                                                    )
                                                                );
                                                            case 7:
                                                                (e.prev = 7), (e.t0 = e.catch(0)), console.log(e.t0);
                                                            case 10:
                                                            case 'end':
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                null,
                                                [[0, 7]]
                                            );
                                        })
                                    )).apply(this, arguments);
                                }
                                function a() {
                                    t = document.querySelectorAll('.carousel-slide img');
                                    for (var n = 0 === r ? r : r + 2; n < r + 5; n += 1) {
                                        if (n === e.length) return;
                                        document.querySelector('.carousel-slide').insertAdjacentHTML(
                                            'beforeend',
                                            '<div class="image-wrapper">\n                        <div class ="image-number">'
                                                .concat(n + 1, '/')
                                                .concat(e.length, '</div>\n                        <img src=')
                                                .concat(e[n], '>\n                    </div>')
                                        );
                                    }
                                }
                                function c() {
                                    return s.apply(this, arguments);
                                }
                                function s() {
                                    return (s = H(
                                        regeneratorRuntime.mark(function t() {
                                            return regeneratorRuntime.wrap(function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (t.next = 2), o();
                                                        case 2:
                                                            (e = t.sent),
                                                                document
                                                                    .querySelector('.ArnPropName')
                                                                    .insertAdjacentHTML(
                                                                        'afterend',
                                                                        '<div class="carousel-container">\n                    <div class="carousel-slide">\n                    </div>\n                    <a id="previousBtn">&#10094;</a>\n                    <a id="nextBtn">&#10095;</a>\n                </div>'
                                                                    ),
                                                                a();
                                                        case 5:
                                                        case 'end':
                                                            return t.stop();
                                                    }
                                            }, t);
                                        })
                                    )).apply(this, arguments);
                                }
                                function u(t, n) {
                                    (r > 1 && r < e.length - 2) ||
                                        ((t.style.display = 'block'),
                                        (n.style.display = 'block'),
                                        0 === r && (n.style.display = 'none'),
                                        r + 1 === e.length && (t.style.display = 'none'));
                                }
                                function l() {
                                    return (l = H(
                                        regeneratorRuntime.mark(function e() {
                                            var n, o, i;
                                            return regeneratorRuntime.wrap(function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (e.next = 2), c();
                                                        case 2:
                                                            (n = document.querySelector('.carousel-slide')),
                                                                (o = document.querySelector('#previousBtn')),
                                                                u((i = document.querySelector('#nextBtn')), o),
                                                                i.addEventListener('click', function () {
                                                                    if (((t = document.querySelectorAll('.carousel-slide img')), r !== t.length - 1)) {
                                                                        (r += 1), u(i, o);
                                                                        var e = t[r].clientWidth;
                                                                        (n.style.transform = 'translateX(-'.concat(e * r, 'px)')), r === t.length - 2 && a();
                                                                    }
                                                                }),
                                                                o.addEventListener('click', function () {
                                                                    if (!(r <= 0)) {
                                                                        (r -= 1), u(i, o);
                                                                        var e = t[r].clientWidth;
                                                                        n.style.transform = 'translateX(-'.concat(e * r, 'px)');
                                                                    }
                                                                });
                                                        case 8:
                                                        case 'end':
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    )).apply(this, arguments);
                                }
                                !(function () {
                                    l.apply(this, arguments);
                                })();
                            },
                        },
                        {
                            key: 'addSocialMetaTags',
                            value: function (e, t) {
                                'cug' !== this.site_config.site_type &&
                                    'confirmation' === this.page_name &&
                                    this.site_config.has_social_sharing &&
                                    document.head.insertAdjacentHTML(
                                        'beforeend',
                                        '<meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html">\n            <meta property="og:type" content="website" >\n            <meta property="og:title" content="'
                                            .concat(e, '" >\n            <meta property="og:description" content="I just booked my room for ')
                                            .concat(
                                                e,
                                                ' through Hotels4Hope and donated to charity!" >\n            <meta property="og:image" content="https://events.hotelsforhope.com/group-event?id='
                                            )
                                            .concat(t, '">')
                                    );
                            },
                        },
                        {
                            key: 'addSocialMediaShareButtons',
                            value: function (e, t) {
                                if ('cug' !== this.site_config.site_type && 'confirmation' === this.page_name && this.site_config.has_social_sharing) {
                                    var n = document.querySelector('#theReservationFormContainer tbody'),
                                        r = document.createElement('script');
                                    r.setAttribute('src', 'https://platform.twitter.com/widgets.js'),
                                        r.setAttribute('async', !0),
                                        document.head.appendChild(r),
                                        n.insertAdjacentHTML(
                                            'afterbegin',
                                            '<div class="social-share-buttons-container">\n                <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fevents.hotelsforhope.com%2Fgroup-event%3Fid%3D'
                                                .concat(
                                                    t,
                                                    '&layout=button&size=large&width=77&height=28&appId" width="77" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>\n\n                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="I just booked my room for '
                                                )
                                                .concat(e, ' through Hotels4Hope and donated to charity!" data-url="https://events.hotelsforhope.com/group-event?id=')
                                                .concat(t, '" data-via="Hotels4Hope" data-show-count="false">Tweet</a>\n                </div>')
                                        );
                                }
                            },
                        },
                        {
                            key: 'style_validation_fields',
                            value: function (e) {
                                var t = document.querySelector(e);
                                '' === t.value && t.classList.add('invalidated');
                            },
                        },
                        {
                            key: 'setInputToRequired',
                            value: function (e) {
                                document.querySelector(e) && (document.querySelector(e).required = !0);
                            },
                        },
                        {
                            key: 'resizeViewportForMapMobile',
                            value: function () {
                                if ('search-results' === this.page_name || window.matchMedia('(max-width:800px)').matches) {
                                    var e = 0.01 * window.innerHeight;
                                    document.documentElement.style.setProperty('--vh', ''.concat(e, 'px')),
                                        window.addEventListener('resize', function () {
                                            (e = 0.01 * window.innerHeight), document.documentElement.style.setProperty('--vh', ''.concat(e, 'px'));
                                        });
                                }
                            },
                        },
                        {
                            key: 'implementAds',
                            value: function () {
                                if (this.site_config.ads && !window.matchMedia('(max-width:800px)').matches) {
                                    var e = this.site_config.ads;
                                    if (
                                        ('search-results' === this.page_name &&
                                            (document.querySelector('.ArnSecondarySearchOuterContainer') &&
                                                e.sidebar_ad.is_active &&
                                                document
                                                    .querySelector('.ArnSecondarySearchOuterContainer')
                                                    .insertAdjacentHTML(
                                                        'afterEnd',
                                                        '\n                <a class="sidebar-ad" href="'
                                                            .concat(e.sidebar_ad.outbound_url, '" target="_blank">\n                    <img src="')
                                                            .concat(e.sidebar_ad.image_url, '" alt="Advertisement">\n                </a>\n            ')
                                                    ),
                                            document.querySelector('#currentPropertyPage .ArnProperty:nth-child(2)') &&
                                                e.between_property_ad.is_active &&
                                                document
                                                    .querySelector('#currentPropertyPage .ArnProperty:nth-child(2)')
                                                    .insertAdjacentHTML(
                                                        'afterEnd',
                                                        '\n                <a class="between-property-ad" href="'
                                                            .concat(e.between_property_ad.outbound_url, '" target="_blank">\n                    <img src="')
                                                            .concat(
                                                                e.between_property_ad.image_url,
                                                                '" alt="Advertisement">\n                </a>\n                <hr class="prop-hr">\n            '
                                                            )
                                                    )),
                                        'confirmation' === this.page_name)
                                    ) {
                                        if (!document.querySelector('.GuestForms') || !e.confirmation_page_bottom.is_active) return;
                                        document
                                            .querySelector('.GuestForms')
                                            .insertAdjacentHTML(
                                                'beforeEnd',
                                                '\n                <a class="confirmation-bottom-ad" href="'
                                                    .concat(e.confirmation_page_bottom.outbound_url, '" target="_blank">\n                    <img src="')
                                                    .concat(e.confirmation_page_bottom.image_url, '" alt="Advertisement">\n                </a>\n            ')
                                            );
                                    }
                                }
                            },
                        },
                        {
                            key: 'cugConfigs',
                            value: function () {
                                var e,
                                    t = this.site_config;
                                'cug' === t.site_type.toLowerCase() &&
                                    ((e = document.querySelectorAll('.percentSavings')) &&
                                        !t.cug.show_percent_savings &&
                                        e.forEach(function (e) {
                                            e.insertAdjacentHTML('beforeEnd', ' Today');
                                        }),
                                    (function () {
                                        if (t.cug.show_percent_savings) {
                                            var e = document.querySelector('.ArnSortByDealPercent');
                                            e && (e.style.display = 'block');
                                        }
                                    })(),
                                    (function () {
                                        if (!t.cug.show_percent_savings) {
                                            var e = '';
                                            document.querySelector('.SearchHotels') && (e = document.querySelectorAll('.ArnProperty')),
                                                document.querySelector('.SinglePropDetail') && (e = document.querySelectorAll('.ArnNightlyRate')),
                                                e &&
                                                    e.forEach(function (e) {
                                                        var t = e.querySelector('div.percentSavings');
                                                        if (t && ((t.style.display = 'block'), document.querySelector('.SearchHotels'))) {
                                                            var n = e.querySelector('.ArnRateCell'),
                                                                r = e.querySelector('.ArnRateButton');
                                                            window.matchMedia('(min-width: 600px)').matches
                                                                ? n.insertAdjacentElement('afterBegin', t)
                                                                : r.insertAdjacentElement('afterBegin', t);
                                                        }
                                                    });
                                        }
                                    })());
                            },
                        },
                        {
                            key: 'showFilters',
                            value: function () {
                                this.site_config.show_stars &&
                                    document.body.insertAdjacentHTML('beforeEnd', '<style>.ArnPropClass, #PropertyClassesContainer{display:block !important;}</style>'),
                                    this.site_config.show_property_type &&
                                        document.body.insertAdjacentHTML('beforeEnd', '<style> #PropertyTypesContainer{display:block !important;}</style>');
                            },
                        },
                        {
                            key: 'showCoronavirusInfoBanner',
                            value: function () {
                                '52342' !== this.site_id &&
                                    'closed' !== localStorage.getItem('covidAlertBanner') &&
                                    (document.body.insertAdjacentHTML(
                                        'afterBegin',
                                        '\n            <div class="info-banner">\n                <div class="message-content">\n                    <h1>Book with Confidence:</h1>\n                    <a class="details-link" href="https://www.hotelsforhope.com/covid19/" target="_blank">\n                        <h1>COVID-19 Update</h1>\n                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clone fa-w-16 fa-3x" width="18px">\n                            <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z" class="">\n                            </path>\n                        </svg>\n                    </a>\n                    <a style="margin-left: 12px;" class="details-link" href="https://www.hotelsforhope.com/covid-19-hotel-cleaning-policies/" target="_blank">\n                        <h1>Cleaning Policies</h1>\n                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clone fa-w-16 fa-3x" width="18px">\n                            <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z" class="">\n                            </path>\n                        </svg>\n                    </a>\n                </div>\n                <button class="close-banner-button close-alert">X</button>\n            </div>\n        '
                                    ),
                                    document.querySelector('.close-banner-button').addEventListener('click', function (e) {
                                        (document.querySelector('.info-banner').style.display = 'none'), window.localStorage.setItem('covidAlertBanner', 'closed');
                                    }));
                            },
                        },
                        {
                            key: 'showCurrencySelect',
                            value: function () {
                                if (!this.site_config.show_currency_select) {
                                    var e = document.querySelector('.config-container'),
                                        t = document.querySelector('.currencies-container');
                                    this.site_config.show_currency_select || this.site_config.show_language_select
                                        ? this.site_config.show_currency_select || (t.style.display = 'none')
                                        : (e.style.display = 'none');
                                }
                            },
                        },
                        {
                            key: 'positionPropReviews',
                            value: function () {
                                if ('property-detail' === this.page_name && this.site_config.reviews_before_info && null !== document.querySelector('.PropertyReviews')) {
                                    var e = document.querySelector('.PropertyReviews');
                                    document.querySelector('.GeneralInfo').insertAdjacentElement('beforebegin', e);
                                }
                            },
                        },
                        {
                            key: 'insertPoweredByFooterLogo',
                            value: function () {
                                document
                                    .querySelector('.ArnSupportBottom')
                                    .insertAdjacentHTML(
                                        'beforeend',
                                        '<div class="pb-container">\n            <a href="https://www.hotelsforhope.com/" target="_blank"><img src="https://static.hotelsforhope.com/ares/images/h4h/pb-h4h.png" alt="Powered by Hotels for Hope logo"></a>\n            </div>'
                                    );
                            },
                        },
                        {
                            key: 'updateConfirmationCheckBoxes',
                            value: function () {
                                'checkout' === this.page_name &&
                                    ((document.querySelector('.open-modal').textContent = 'Policies & Fees'),
                                    (document.querySelector(
                                        'span.confirmationAgreement'
                                    ).innerHTML = 'By checking this box I agree to the <span id="policies-fees">Policies & Fees</span> above and the <a id="t-and-cs" target="_blank" href="https://events.hotelsforhope.com/v6/terms-and-conditions?&siteId='.concat(
                                        this.site_id,
                                        '&theme=standard">Terms & Conditions</a> found on this website.'
                                    )),
                                    N.replaceSpecificText('.confirmedDueNowCharge .confirmationAgreement', /(^|)You(?=\s|$)/gi, 'I'),
                                    N.replaceSpecificText('.confirmedDueNowCharge .confirmationAgreement', /(^|)your(?=|$)/gi, 'my'),
                                    document.querySelector('#policies-fees').addEventListener('click', function () {
                                        document.querySelector('div.modal-overlay').classList.toggle('show-modal'), document.body.classList.toggle('hide');
                                    }),
                                    document.querySelector('span.open-modal').addEventListener('click', function () {
                                        document.body.classList.toggle('hide');
                                    }),
                                    document.querySelector('span.close-modal').addEventListener('click', function () {
                                        document.body.classList.toggle('hide');
                                    }));
                            },
                        },
                        {
                            key: 'addMessagingToConfirmationPage',
                            value: function () {
                                if ('confirmation' === this.page_name && null !== this.site_config.confirmation_email_from && '' !== this.site_config.confirmation_email_from) {
                                    var e = window.arnCustomerEmailAddress,
                                        t = this.site_config.confirmation_email_from;
                                    (null != t && '' !== t) || (t = 'reservations@hotelsforhope.com');
                                    var n = document.querySelector('.supportInfo');
                                    e &&
                                        n &&
                                        n.insertAdjacentHTML(
                                            'afterEnd',
                                            '<div class="confirmation-messaging">\n                <p>You will receive a confirmation email from <a href="mailto:reservations@hotelsforhope.com"><strong>'
                                                .concat(t, '</strong></a> at <strong>')
                                                .concat(e, '</strong> shortly.</p>\n            </div>\n            ')
                                        );
                                }
                            },
                        },
                        {
                            key: 'fixCheckoutInputTabOrder',
                            value: function () {
                                var e = document.querySelector('#theReservationForm'),
                                    t = document.querySelector('meta[name="numberOfRooms"]');
                                if (e && t) {
                                    var n = t.content;
                                    e.querySelectorAll('input, select, textarea').forEach(function (e, t) {
                                        e && (0 === t ? e.setAttribute('tabindex', 1) : e.setAttribute('tabIndex', t));
                                    });
                                    for (var r = 1; r <= n; r += 1) {
                                        var o = document.querySelector('#theCity'.concat(r)),
                                            i = document.querySelector('#theZipCode'.concat(r)),
                                            a = document.querySelector('#theStateAjax'.concat(r, ' select')),
                                            c = document.querySelector('#theCountryAjax'.concat(r, ' select')),
                                            s = document.querySelector('#theCreditCardBillingNameAjax'.concat(r, ' input')),
                                            u = document.querySelector('.RoomNumber-'.concat(r, ' #theCvvCode')),
                                            l = document.querySelector('.RoomNumber-'.concat(r, ' .cardMonth')),
                                            d = document.querySelector('.RoomNumber-'.concat(r, ' .cardYear'));
                                        if (!(o && i && a && c && s && u && l && d)) return;
                                        var f = o.tabIndex,
                                            p = a.tabIndex,
                                            h = i.tabIndex,
                                            m = c.tabIndex,
                                            y = s.tabIndex,
                                            g = u.tabIndex,
                                            v = l.tabIndex,
                                            b = d.tabIndex;
                                        o.setAttribute('tabIndex', h),
                                            a.setAttribute('tabIndex', f),
                                            i.setAttribute('tabIndex', m),
                                            c.setAttribute('tabIndex', p),
                                            s.setAttribute('tabIndex', g),
                                            u.setAttribute('tabIndex', v),
                                            l.setAttribute('tabIndex', b),
                                            d.setAttribute('tabIndex', y);
                                    }
                                }
                            },
                        },
                        {
                            key: 'showMoreAmenities',
                            value: function () {
                                if ('property-detail' === this.page_name) {
                                    var e,
                                        t = document.querySelector('.ArnAmenityContainer');
                                    !document.querySelector('#show-more-or-less') &&
                                        document.querySelector('.PropertyAmenities li') &&
                                        (t.insertAdjacentHTML('beforeend', '<span id="show-more-or-less" class="show-more">Show More Amenities</span>'),
                                        (e = document.querySelector('span#show-more-or-less')),
                                        document.querySelector('.ArnAmenityContainer td').classList.add('show-amenities'),
                                        e.addEventListener('click', function () {
                                            document.querySelector('span.show-more')
                                                ? (document.querySelectorAll('.ArnAmenityContainer td:not(.show-amenities)').forEach(function (e) {
                                                      e.classList.toggle('show-amenities');
                                                  }),
                                                  (e.textContent = 'Show Less Amenities'),
                                                  e.classList.toggle('show-more'),
                                                  e.classList.toggle('show-less'))
                                                : document.querySelector('span.show-less') &&
                                                  (document.querySelectorAll('.ArnAmenityContainer td:not(:first-child)').forEach(function (e) {
                                                      e.classList.toggle('show-amenities');
                                                  }),
                                                  (e.textContent = 'Show More Amenities'),
                                                  e.classList.toggle('show-less'),
                                                  e.classList.toggle('show-more'));
                                        }));
                                }
                            },
                        },
                        {
                            key: 'hideRemainingRooms',
                            value: function () {
                                if ('property-detail' === this.page_name && document.querySelector('div.roomCount')) {
                                    var e = document.querySelectorAll('table.ArnRateList'),
                                        t = window.matchMedia('(max-width: 560px)');
                                    e.forEach(function (e) {
                                        if (e.querySelector('.roomCount strong') || e.classList.contains('SB16') || e.classList.contains('SB20')) {
                                            var n = parseFloat(e.querySelector('.roomCount strong').textContent);
                                            n < 6 && (e.querySelector('.roomCount').style.display = 'block'),
                                                e.classList.contains('SB16') &&
                                                    (e.classList.contains('SB20') || t.matches) &&
                                                    ((n < 6 && e.classList.contains('SB16')) || e.classList.contains('SB20')) &&
                                                    (e.querySelector('.bookRoomCell').style.gridTemplateRows = '3fr .5fr .25fr');
                                        }
                                    });
                                }
                            },
                        },
                        {
                            key: 'replaceHTMLWithFile',
                            value:
                                ((a = H(
                                    regeneratorRuntime.mark(function e(t, n) {
                                        var r, o;
                                        return regeneratorRuntime.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (document.querySelector(n)) {
                                                            e.next = 2;
                                                            break;
                                                        }
                                                        return e.abrupt('return');
                                                    case 2:
                                                        return (r = document.querySelector(n)), (e.next = 5), N.fetchHTMLFromFile(t);
                                                    case 5:
                                                        (o = e.sent), (r.innerHTML = o);
                                                    case 7:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function (e, t) {
                                    return a.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'appendMemberTokenForCug',
                            value:
                                ((i = H(
                                    regeneratorRuntime.mark(function e() {
                                        var t, n, r, o;
                                        return regeneratorRuntime.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if ('cug' === this.site_config.site_type.toLowerCase() && '52342' !== this.site_id) {
                                                                e.next = 2;
                                                                break;
                                                            }
                                                            return e.abrupt('return');
                                                        case 2:
                                                            return (t = this.site_config.header.logo_outbound_url), (e.next = 5), N.waitForSelectorInDOM('.logo');
                                                        case 5:
                                                            if (document.querySelector('meta[name="memberToken"]')) {
                                                                e.next = 7;
                                                                break;
                                                            }
                                                            return e.abrupt('return');
                                                        case 7:
                                                            (n = document.querySelector('meta[name="memberToken"]').content),
                                                                (r = document.querySelector('.logo')),
                                                                (o = ''),
                                                                (o =
                                                                    '/' === t.slice(-1)
                                                                        ? ''.concat(t, 'v6?siteId=').concat(this.site_id, '&_s=').concat(n)
                                                                        : '.com' === t.slice(-4)
                                                                        ? ''.concat(t, '/v6?siteId=').concat(this.site_id, '&_s=').concat(n)
                                                                        : ''.concat(t, '&_s=').concat(n)),
                                                                r.setAttribute('href', o);
                                                        case 12:
                                                        case 'end':
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    })
                                )),
                                function () {
                                    return i.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'addLinkToLoginFromRegisterPage',
                            value: function () {
                                if ('cug' === this.site_config.site_type.toLowerCase() && 'cug-registration' === this.page_name) {
                                    var e = document.querySelector('.WBValidatedRegistrationFormActions'),
                                        t = window.location.href.replace('register', 'login');
                                    e && e.insertAdjacentHTML('afterEnd', '\n            <a class="return-to-login" href="'.concat(t, '">Return to Login</a>\n        '));
                                }
                            },
                        },
                        {
                            key: 'setCheckDatesToReadOnlyOnMobile',
                            value:
                                ((o = H(
                                    regeneratorRuntime.mark(function e() {
                                        var t, n;
                                        return regeneratorRuntime.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (N.matchMediaQuery('max-width: 800px')) {
                                                                e.next = 2;
                                                                break;
                                                            }
                                                            return e.abrupt('return');
                                                        case 2:
                                                            return (e.next = 4), N.waitForSelectorInDOM('#theCheckIn');
                                                        case 4:
                                                            if ('search-results' !== this.page_name && 'landing-page' !== this.page_name) {
                                                                e.next = 11;
                                                                break;
                                                            }
                                                            if (((t = document.querySelector('#theCheckIn')), (n = document.querySelector('#theCheckOut')), t && n)) {
                                                                e.next = 9;
                                                                break;
                                                            }
                                                            return e.abrupt('return');
                                                        case 9:
                                                            t.setAttribute('readonly', !0), n.setAttribute('readonly', !0);
                                                        case 11:
                                                        case 'end':
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    })
                                )),
                                function () {
                                    return o.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'updateAmenitiesLegendTag',
                            value: function () {
                                'property-detail' === this.page_name && (document.querySelector('#thePropertyAmenities legend').outerHTML = '<span>Property Amenities</span>');
                            },
                        },
                        {
                            key: 'cancelConfirmUpdate',
                            value: function () {
                                document.querySelector('.WBConfirmedBooking') && (document.querySelector('.dialog-button-cancel a').textContent = 'Go Back');
                            },
                        },
                        {
                            key: 'moveOriginalPrice',
                            value: function (e, t) {
                                document.querySelectorAll(e).forEach(function (e) {
                                    if (e.querySelector('div.originalPrice')) {
                                        e.querySelector(t).insertAdjacentElement('afterbegin', e.querySelector('div.originalPrice'));
                                        var n,
                                            r,
                                            o = parseFloat(e.querySelector('.originalPrice').textContent),
                                            i = parseFloat(
                                                document.querySelector('.SearchHotels')
                                                    ? e.querySelector('.arnUnit').textContent
                                                    : e.querySelector('.ArnNightlyRate strong').textContent
                                            );
                                        (r = ((o - (n = i)) / n) * 100), Math.floor(r) >= 5 || (e.querySelector('.originalPrice').style.display = 'none');
                                    }
                                });
                            },
                        },
                        {
                            key: 'updateSupportPageText',
                            value: function () {
                                this.site_config.is_resbeat_client ||
                                    (document.querySelector('.WBSupportForm') &&
                                        (document.querySelector('.ArnSupportChatTable p').textContent =
                                            'If you would like to speak with a representative, please call + 1 512-691-9555'));
                            },
                        },
                        {
                            key: 'removeLrgFooterLink',
                            value: function () {
                                this.site_config.lodging.is_lrg ||
                                    this.site_config.is_resbeat_client ||
                                    ((document.querySelector('.ArnSupportBottom .lowRateLink').style.display = 'none'),
                                    (document.querySelector('.ArnSupportBottom .dvd').style.display = 'none'));
                            },
                        },
                    ]) && F(t.prototype, n),
                    r && F(t, r),
                    e
                );
            })();
    },
    function (e, t, n) {
        'use strict';
        var r = n(66),
            o = n(2),
            i = n(54),
            a = n(60),
            c = n(27),
            s = n(44),
            u = n(39),
            l = n(7),
            d = Math.min,
            f = [].push,
            p = 'length',
            h = !l(function () {
                RegExp(4294967295, 'y');
            });
        n(45)('split', 2, function (e, t, n, l) {
            var m;
            return (
                (m =
                    'c' == 'abbc'.split(/(b)*/)[1] ||
                    4 != 'test'.split(/(?:)/, -1)[p] ||
                    2 != 'ab'.split(/(?:ab)*/)[p] ||
                    4 != '.'.split(/(.?)(.?)/)[p] ||
                    '.'.split(/()()/)[p] > 1 ||
                    ''.split(/.?/)[p]
                        ? function (e, t) {
                              var o = String(this);
                              if (void 0 === e && 0 === t) return [];
                              if (!r(e)) return n.call(o, e, t);
                              for (
                                  var i,
                                      a,
                                      c,
                                      s = [],
                                      l = (e.ignoreCase ? 'i' : '') + (e.multiline ? 'm' : '') + (e.unicode ? 'u' : '') + (e.sticky ? 'y' : ''),
                                      d = 0,
                                      h = void 0 === t ? 4294967295 : t >>> 0,
                                      m = new RegExp(e.source, l + 'g');
                                  (i = u.call(m, o)) &&
                                  !(
                                      (a = m.lastIndex) > d &&
                                      (s.push(o.slice(d, i.index)), i[p] > 1 && i.index < o[p] && f.apply(s, i.slice(1)), (c = i[0][p]), (d = a), s[p] >= h)
                                  );

                              )
                                  m.lastIndex === i.index && m.lastIndex++;
                              return d === o[p] ? (!c && m.test('')) || s.push('') : s.push(o.slice(d)), s[p] > h ? s.slice(0, h) : s;
                          }
                        : '0'.split(void 0, 0)[p]
                        ? function (e, t) {
                              return void 0 === e && 0 === t ? [] : n.call(this, e, t);
                          }
                        : n),
                [
                    function (n, r) {
                        var o = e(this),
                            i = null == n ? void 0 : n[t];
                        return void 0 !== i ? i.call(n, o, r) : m.call(String(o), n, r);
                    },
                    function (e, t) {
                        var r = l(m, e, this, t, m !== n);
                        if (r.done) return r.value;
                        var u = o(e),
                            f = String(this),
                            p = i(u, RegExp),
                            y = u.unicode,
                            g = (u.ignoreCase ? 'i' : '') + (u.multiline ? 'm' : '') + (u.unicode ? 'u' : '') + (h ? 'y' : 'g'),
                            v = new p(h ? u : '^(?:' + u.source + ')', g),
                            b = void 0 === t ? 4294967295 : t >>> 0;
                        if (0 === b) return [];
                        if (0 === f.length) return null === s(v, f) ? [f] : [];
                        for (var S = 0, w = 0, x = []; w < f.length; ) {
                            v.lastIndex = h ? w : 0;
                            var _,
                                A = s(v, h ? f : f.slice(w));
                            if (null === A || (_ = d(c(v.lastIndex + (h ? 0 : w)), f.length)) === S) w = a(f, w, y);
                            else {
                                if ((x.push(f.slice(S, w)), x.length === b)) return x;
                                for (var k = 1; k <= A.length - 1; k++) if ((x.push(A[k]), x.length === b)) return x;
                                w = S = _;
                            }
                        }
                        return x.push(f.slice(S)), x;
                    },
                ]
            );
        });
    },
    function (e, t, n) {
        'use strict';
        var r = n(19),
            o = n(5),
            i = n(9),
            a = n(8),
            c = n(17),
            s = n(96),
            u = n(28),
            l = n(58),
            d = n(0)('iterator'),
            f = !([].keys && 'next' in [].keys()),
            p = function () {
                return this;
            };
        e.exports = function (e, t, n, h, m, y, g) {
            s(n, t, h);
            var v,
                b,
                S,
                w = function (e) {
                    if (!f && e in k) return k[e];
                    switch (e) {
                        case 'keys':
                        case 'values':
                            return function () {
                                return new n(this, e);
                            };
                    }
                    return function () {
                        return new n(this, e);
                    };
                },
                x = t + ' Iterator',
                _ = 'values' == m,
                A = !1,
                k = e.prototype,
                M = k[d] || k['@@iterator'] || (m && k[m]),
                L = M || w(m),
                q = m ? (_ ? w('entries') : L) : void 0,
                C = ('Array' == t && k.entries) || M;
            if (
                (C && (S = l(C.call(new e()))) !== Object.prototype && S.next && (u(S, x, !0), r || 'function' == typeof S[d] || a(S, d, p)),
                _ &&
                    M &&
                    'values' !== M.name &&
                    ((A = !0),
                    (L = function () {
                        return M.call(this);
                    })),
                (r && !g) || (!f && !A && k[d]) || a(k, d, L),
                (c[t] = L),
                (c[x] = p),
                m)
            )
                if (((v = {values: _ ? L : w('values'), keys: y ? L : w('keys'), entries: q}), g)) for (b in v) b in k || i(k, b, v[b]);
                else o(o.P + o.F * (f || A), t, v);
            return v;
        };
    },
    function (e, t, n) {
        var r = n(18),
            o = n(15);
        e.exports = function (e) {
            return function (t, n) {
                var i,
                    a,
                    c = String(o(t)),
                    s = r(n),
                    u = c.length;
                return s < 0 || s >= u
                    ? e
                        ? ''
                        : void 0
                    : (i = c.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === u || (a = c.charCodeAt(s + 1)) < 56320 || a > 57343
                    ? e
                        ? c.charAt(s)
                        : i
                    : e
                    ? c.slice(s, s + 2)
                    : a - 56320 + ((i - 55296) << 10) + 65536;
            };
        };
    },
    function (e, t, n) {
        'use strict';
        var r = n(5),
            o = n(57)(!0);
        r(r.P, 'Array', {
            includes: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
        }),
            n(59)('includes');
    },
    function (e, t, n) {
        'use strict';
        var r = n(5),
            o = n(110);
        r(r.P + r.F * n(111)('includes'), 'String', {
            includes: function (e) {
                return !!~o(this, e, 'includes').indexOf(e, arguments.length > 1 ? arguments[1] : void 0);
            },
        });
    },
    function (e, t, n) {
        var r = n(6).f,
            o = Function.prototype,
            i = /^\s*function ([^ (]*)/;
        'name' in o ||
            (n(3) &&
                r(o, 'name', {
                    configurable: !0,
                    get: function () {
                        try {
                            return ('' + this).match(i)[1];
                        } catch (e) {
                            return '';
                        }
                    },
                }));
    },
    function (e, t, n) {
        e.exports = n(26)('native-function-to-string', Function.toString);
    },
    function (e, t) {
        e.exports = function (e, t, n, r) {
            if (!(e instanceof t) || (void 0 !== r && r in e)) throw TypeError(n + ': incorrect invocation!');
            return e;
        };
    },
    function (e, t, n) {
        var r = n(24),
            o = n(78),
            i = n(79),
            a = n(2),
            c = n(27),
            s = n(80),
            u = {},
            l = {};
        ((t = e.exports = function (e, t, n, d, f) {
            var p,
                h,
                m,
                y,
                g = f
                    ? function () {
                          return e;
                      }
                    : s(e),
                v = r(n, d, t ? 2 : 1),
                b = 0;
            if ('function' != typeof g) throw TypeError(e + ' is not iterable!');
            if (i(g)) {
                for (p = c(e.length); p > b; b++) if ((y = t ? v(a((h = e[b]))[0], h[1]) : v(e[b])) === u || y === l) return y;
            } else for (m = g.call(e); !(h = m.next()).done; ) if ((y = o(m, v, h.value, t)) === u || y === l) return y;
        }).BREAK = u),
            (t.RETURN = l);
    },
    function (e, t, n) {
        var r = n(2);
        e.exports = function (e, t, n, o) {
            try {
                return o ? t(r(n)[0], n[1]) : t(n);
            } catch (t) {
                var i = e.return;
                throw (void 0 !== i && r(i.call(e)), t);
            }
        };
    },
    function (e, t, n) {
        var r = n(17),
            o = n(0)('iterator'),
            i = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (r.Array === e || i[o] === e);
        };
    },
    function (e, t, n) {
        var r = n(25),
            o = n(0)('iterator'),
            i = n(17);
        e.exports = n(11).getIteratorMethod = function (e) {
            if (null != e) return e[o] || e['@@iterator'] || i[r(e)];
        };
    },
    function (e, t, n) {
        var r = n(1),
            o = n(48).set,
            i = r.MutationObserver || r.WebKitMutationObserver,
            a = r.process,
            c = r.Promise,
            s = 'process' == n(14)(a);
        e.exports = function () {
            var e,
                t,
                n,
                u = function () {
                    var r, o;
                    for (s && (r = a.domain) && r.exit(); e; ) {
                        (o = e.fn), (e = e.next);
                        try {
                            o();
                        } catch (r) {
                            throw (e ? n() : (t = void 0), r);
                        }
                    }
                    (t = void 0), r && r.enter();
                };
            if (s)
                n = function () {
                    a.nextTick(u);
                };
            else if (!i || (r.navigator && r.navigator.standalone))
                if (c && c.resolve) {
                    var l = c.resolve(void 0);
                    n = function () {
                        l.then(u);
                    };
                } else
                    n = function () {
                        o.call(r, u);
                    };
            else {
                var d = !0,
                    f = document.createTextNode('');
                new i(u).observe(f, {characterData: !0}),
                    (n = function () {
                        f.data = d = !d;
                    });
            }
            return function (r) {
                var o = {fn: r, next: void 0};
                t && (t.next = o), e || ((e = o), n()), (t = o);
            };
        };
    },
    function (e, t) {
        e.exports = function (e) {
            try {
                return {e: !1, v: e()};
            } catch (e) {
                return {e: !0, v: e};
            }
        };
    },
    function (e, t, n) {
        var r = n(1).navigator;
        e.exports = (r && r.userAgent) || '';
    },
    function (e, t, n) {
        var r = n(2),
            o = n(4),
            i = n(50);
        e.exports = function (e, t) {
            if ((r(e), o(t) && t.constructor === e)) return t;
            var n = i.f(e);
            return (0, n.resolve)(t), n.promise;
        };
    },
    function (e, t, n) {
        var r = n(9);
        e.exports = function (e, t, n) {
            for (var o in t) r(e, o, t[o], n);
            return e;
        };
    },
    function (e, t, n) {
        'use strict';
        var r = n(1),
            o = n(6),
            i = n(3),
            a = n(0)('species');
        e.exports = function (e) {
            var t = r[e];
            i &&
                t &&
                !t[a] &&
                o.f(t, a, {
                    configurable: !0,
                    get: function () {
                        return this;
                    },
                });
        };
    },
    function (e, t, n) {
        var r = n(0)('iterator'),
            o = !1;
        try {
            var i = [7][r]();
            (i.return = function () {
                o = !0;
            }),
                Array.from(i, function () {
                    throw 2;
                });
        } catch (e) {}
        e.exports = function (e, t) {
            if (!t && !o) return !1;
            var n = !1;
            try {
                var i = [7],
                    a = i[r]();
                (a.next = function () {
                    return {done: (n = !0)};
                }),
                    (i[r] = function () {
                        return a;
                    }),
                    e(i);
            } catch (e) {}
            return n;
        };
    },
    function (e, t, n) {
        n(61)('asyncIterator');
    },
    function (e, t, n) {
        'use strict';
        var r = n(1),
            o = n(10),
            i = n(3),
            a = n(5),
            c = n(9),
            s = n(100).KEY,
            u = n(7),
            l = n(26),
            d = n(28),
            f = n(20),
            p = n(0),
            h = n(62),
            m = n(61),
            y = n(101),
            g = n(102),
            v = n(2),
            b = n(4),
            S = n(29),
            w = n(12),
            x = n(41),
            _ = n(30),
            A = n(42),
            k = n(103),
            M = n(65),
            L = n(63),
            q = n(6),
            C = n(16),
            T = M.f,
            E = q.f,
            R = k.f,
            P = r.Symbol,
            j = r.JSON,
            O = j && j.stringify,
            D = p('_hidden'),
            H = p('toPrimitive'),
            F = {}.propertyIsEnumerable,
            B = l('symbol-registry'),
            I = l('symbols'),
            Y = l('op-symbols'),
            N = Object.prototype,
            U = 'function' == typeof P && !!L.f,
            $ = r.QObject,
            W = !$ || !$.prototype || !$.prototype.findChild,
            G =
                i &&
                u(function () {
                    return (
                        7 !=
                        A(
                            E({}, 'a', {
                                get: function () {
                                    return E(this, 'a', {value: 7}).a;
                                },
                            })
                        ).a
                    );
                })
                    ? function (e, t, n) {
                          var r = T(N, t);
                          r && delete N[t], E(e, t, n), r && e !== N && E(N, t, r);
                      }
                    : E,
            V = function (e) {
                var t = (I[e] = A(P.prototype));
                return (t._k = e), t;
            },
            z =
                U && 'symbol' == typeof P.iterator
                    ? function (e) {
                          return 'symbol' == typeof e;
                      }
                    : function (e) {
                          return e instanceof P;
                      },
            Z = function (e, t, n) {
                return (
                    e === N && Z(Y, t, n),
                    v(e),
                    (t = x(t, !0)),
                    v(n),
                    o(I, t)
                        ? (n.enumerable ? (o(e, D) && e[D][t] && (e[D][t] = !1), (n = A(n, {enumerable: _(0, !1)}))) : (o(e, D) || E(e, D, _(1, {})), (e[D][t] = !0)), G(e, t, n))
                        : E(e, t, n)
                );
            },
            J = function (e, t) {
                v(e);
                for (var n, r = y((t = w(t))), o = 0, i = r.length; i > o; ) Z(e, (n = r[o++]), t[n]);
                return e;
            },
            Q = function (e) {
                var t = F.call(this, (e = x(e, !0)));
                return !(this === N && o(I, e) && !o(Y, e)) && (!(t || !o(this, e) || !o(I, e) || (o(this, D) && this[D][e])) || t);
            },
            K = function (e, t) {
                if (((e = w(e)), (t = x(t, !0)), e !== N || !o(I, t) || o(Y, t))) {
                    var n = T(e, t);
                    return !n || !o(I, t) || (o(e, D) && e[D][t]) || (n.enumerable = !0), n;
                }
            },
            X = function (e) {
                for (var t, n = R(w(e)), r = [], i = 0; n.length > i; ) o(I, (t = n[i++])) || t == D || t == s || r.push(t);
                return r;
            },
            ee = function (e) {
                for (var t, n = e === N, r = R(n ? Y : w(e)), i = [], a = 0; r.length > a; ) !o(I, (t = r[a++])) || (n && !o(N, t)) || i.push(I[t]);
                return i;
            };
        U ||
            (c(
                (P = function () {
                    if (this instanceof P) throw TypeError('Symbol is not a constructor!');
                    var e = f(arguments.length > 0 ? arguments[0] : void 0),
                        t = function (n) {
                            this === N && t.call(Y, n), o(this, D) && o(this[D], e) && (this[D][e] = !1), G(this, e, _(1, n));
                        };
                    return i && W && G(N, e, {configurable: !0, set: t}), V(e);
                }).prototype,
                'toString',
                function () {
                    return this._k;
                }
            ),
            (M.f = K),
            (q.f = Z),
            (n(64).f = k.f = X),
            (n(31).f = Q),
            (L.f = ee),
            i && !n(19) && c(N, 'propertyIsEnumerable', Q, !0),
            (h.f = function (e) {
                return V(p(e));
            })),
            a(a.G + a.W + a.F * !U, {Symbol: P});
        for (var te = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), ne = 0; te.length > ne; )
            p(te[ne++]);
        for (var re = C(p.store), oe = 0; re.length > oe; ) m(re[oe++]);
        a(a.S + a.F * !U, 'Symbol', {
            for: function (e) {
                return o(B, (e += '')) ? B[e] : (B[e] = P(e));
            },
            keyFor: function (e) {
                if (!z(e)) throw TypeError(e + ' is not a symbol!');
                for (var t in B) if (B[t] === e) return t;
            },
            useSetter: function () {
                W = !0;
            },
            useSimple: function () {
                W = !1;
            },
        }),
            a(a.S + a.F * !U, 'Object', {
                create: function (e, t) {
                    return void 0 === t ? A(e) : J(A(e), t);
                },
                defineProperty: Z,
                defineProperties: J,
                getOwnPropertyDescriptor: K,
                getOwnPropertyNames: X,
                getOwnPropertySymbols: ee,
            });
        var ie = u(function () {
            L.f(1);
        });
        a(a.S + a.F * ie, 'Object', {
            getOwnPropertySymbols: function (e) {
                return L.f(S(e));
            },
        }),
            j &&
                a(
                    a.S +
                        a.F *
                            (!U ||
                                u(function () {
                                    var e = P();
                                    return '[null]' != O([e]) || '{}' != O({a: e}) || '{}' != O(Object(e));
                                })),
                    'JSON',
                    {
                        stringify: function (e) {
                            for (var t, n, r = [e], o = 1; arguments.length > o; ) r.push(arguments[o++]);
                            if (((n = t = r[1]), (b(t) || void 0 !== e) && !z(e)))
                                return (
                                    g(t) ||
                                        (t = function (e, t) {
                                            if (('function' == typeof n && (t = n.call(this, e, t)), !z(t))) return t;
                                        }),
                                    (r[1] = t),
                                    O.apply(j, r)
                                );
                        },
                    }
                ),
            P.prototype[H] || n(8)(P.prototype, H, P.prototype.valueOf),
            d(P, 'Symbol'),
            d(Math, 'Math', !0),
            d(r.JSON, 'JSON', !0);
    },
    function (e, t, n) {
        var r = n(14);
        e.exports = Object('z').propertyIsEnumerable(0)
            ? Object
            : function (e) {
                  return 'String' == r(e) ? e.split('') : Object(e);
              };
    },
    function (e, t, n) {
        var r = n(18),
            o = Math.max,
            i = Math.min;
        e.exports = function (e, t) {
            return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t);
        };
    },
    function (e, t, n) {
        var r = n(6),
            o = n(2),
            i = n(16);
        e.exports = n(3)
            ? Object.defineProperties
            : function (e, t) {
                  o(e);
                  for (var n, a = i(t), c = a.length, s = 0; c > s; ) r.f(e, (n = a[s++]), t[n]);
                  return e;
              };
    },
    function (e, t, n) {
        var r = n(5),
            o = n(42),
            i = n(13),
            a = n(2),
            c = n(4),
            s = n(7),
            u = n(105),
            l = (n(1).Reflect || {}).construct,
            d = s(function () {
                function e() {}
                return !(l(function () {}, [], e) instanceof e);
            }),
            f = !s(function () {
                l(function () {});
            });
        r(r.S + r.F * (d || f), 'Reflect', {
            construct: function (e, t) {
                i(e), a(t);
                var n = arguments.length < 3 ? e : i(arguments[2]);
                if (f && !d) return l(e, t, n);
                if (e == n) {
                    switch (t.length) {
                        case 0:
                            return new e();
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0], t[1]);
                        case 3:
                            return new e(t[0], t[1], t[2]);
                        case 4:
                            return new e(t[0], t[1], t[2], t[3]);
                    }
                    var r = [null];
                    return r.push.apply(r, t), new (u.apply(e, r))();
                }
                var s = n.prototype,
                    p = o(c(s) ? s : Object.prototype),
                    h = Function.apply.call(e, p, t);
                return c(h) ? h : p;
            },
        });
    },
    function (e, t, n) {
        var r = n(65),
            o = n(58),
            i = n(10),
            a = n(5),
            c = n(4),
            s = n(2);
        a(a.S, 'Reflect', {
            get: function e(t, n) {
                var a,
                    u,
                    l = arguments.length < 3 ? t : arguments[2];
                return s(t) === l ? t[n] : (a = r.f(t, n)) ? (i(a, 'value') ? a.value : void 0 !== a.get ? a.get.call(l) : void 0) : c((u = o(t))) ? e(u, n, l) : void 0;
            },
        });
    },
    function (e, t) {
        e.exports = function (e, t) {
            return {value: t, done: !!e};
        };
    },
    function (e, t, n) {
        'use strict';
        var r = n(42),
            o = n(30),
            i = n(28),
            a = {};
        n(8)(a, n(0)('iterator'), function () {
            return this;
        }),
            (e.exports = function (e, t, n) {
                (e.prototype = r(a, {next: o(1, n)})), i(e, t + ' Iterator');
            });
    },
    function (e, t, n) {
        'use strict';
        var r = n(39);
        n(5)({target: 'RegExp', proto: !0, forced: r !== /./.exec}, {exec: r});
    },
    function (e, t, n) {
        var r = n(5),
            o = n(11),
            i = n(7);
        e.exports = function (e, t) {
            var n = (o.Object || {})[e] || Object[e],
                a = {};
            (a[e] = t(n)),
                r(
                    r.S +
                        r.F *
                            i(function () {
                                n(1);
                            }),
                    'Object',
                    a
                );
        };
    },
    function (e, t, n) {
        var r = n(5),
            o = n(106)(!0);
        r(r.S, 'Object', {
            entries: function (e) {
                return o(e);
            },
        });
    },
    function (e, t, n) {
        var r = n(20)('meta'),
            o = n(4),
            i = n(10),
            a = n(6).f,
            c = 0,
            s =
                Object.isExtensible ||
                function () {
                    return !0;
                },
            u = !n(7)(function () {
                return s(Object.preventExtensions({}));
            }),
            l = function (e) {
                a(e, r, {value: {i: 'O' + ++c, w: {}}});
            },
            d = (e.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function (e, t) {
                    if (!o(e)) return 'symbol' == typeof e ? e : ('string' == typeof e ? 'S' : 'P') + e;
                    if (!i(e, r)) {
                        if (!s(e)) return 'F';
                        if (!t) return 'E';
                        l(e);
                    }
                    return e[r].i;
                },
                getWeak: function (e, t) {
                    if (!i(e, r)) {
                        if (!s(e)) return !0;
                        if (!t) return !1;
                        l(e);
                    }
                    return e[r].w;
                },
                onFreeze: function (e) {
                    return u && d.NEED && s(e) && !i(e, r) && l(e), e;
                },
            });
    },
    function (e, t, n) {
        var r = n(16),
            o = n(63),
            i = n(31);
        e.exports = function (e) {
            var t = r(e),
                n = o.f;
            if (n) for (var a, c = n(e), s = i.f, u = 0; c.length > u; ) s.call(e, (a = c[u++])) && t.push(a);
            return t;
        };
    },
    function (e, t, n) {
        var r = n(14);
        e.exports =
            Array.isArray ||
            function (e) {
                return 'Array' == r(e);
            };
    },
    function (e, t, n) {
        var r = n(12),
            o = n(64).f,
            i = {}.toString,
            a = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function (e) {
            return a && '[object Window]' == i.call(e)
                ? (function (e) {
                      try {
                          return o(e);
                      } catch (e) {
                          return a.slice();
                      }
                  })(e)
                : o(r(e));
        };
    },
    function (e, t, n) {
        n(3) && 'g' != /./g.flags && n(6).f(RegExp.prototype, 'flags', {configurable: !0, get: n(43)});
    },
    function (e, t, n) {
        'use strict';
        var r = n(13),
            o = n(4),
            i = n(55),
            a = [].slice,
            c = {},
            s = function (e, t, n) {
                if (!(t in c)) {
                    for (var r = [], o = 0; o < t; o++) r[o] = 'a[' + o + ']';
                    c[t] = Function('F,a', 'return new F(' + r.join(',') + ')');
                }
                return c[t](e, n);
            };
        e.exports =
            Function.bind ||
            function (e) {
                var t = r(this),
                    n = a.call(arguments, 1),
                    c = function () {
                        var r = n.concat(a.call(arguments));
                        return this instanceof c ? s(t, r.length, r) : i(t, r, e);
                    };
                return o(t.prototype) && (c.prototype = t.prototype), c;
            };
    },
    function (e, t, n) {
        var r = n(3),
            o = n(16),
            i = n(12),
            a = n(31).f;
        e.exports = function (e) {
            return function (t) {
                for (var n, c = i(t), s = o(c), u = s.length, l = 0, d = []; u > l; ) (n = s[l++]), (r && !a.call(c, n)) || d.push(e ? [n, c[n]] : c[n]);
                return d;
            };
        };
    },
    function (e, t) {
        e.exports =
            Object.is ||
            function (e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
            };
    },
    function (e, t, n) {
        var r = n(5);
        r(r.P, 'String', {repeat: n(109)});
    },
    function (e, t, n) {
        'use strict';
        var r = n(18),
            o = n(15);
        e.exports = function (e) {
            var t = String(o(this)),
                n = '',
                i = r(e);
            if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
            for (; i > 0; (i >>>= 1) && (t += t)) 1 & i && (n += t);
            return n;
        };
    },
    function (e, t, n) {
        var r = n(66),
            o = n(15);
        e.exports = function (e, t, n) {
            if (r(t)) throw TypeError('String#' + n + " doesn't accept regex!");
            return String(o(e));
        };
    },
    function (e, t, n) {
        var r = n(0)('match');
        e.exports = function (e) {
            var t = /./;
            try {
                '/./'[e](t);
            } catch (n) {
                try {
                    return (t[r] = !1), !'/./'[e](t);
                } catch (e) {}
            }
            return !0;
        };
    },
    function (e, t, n) {
        (function (e) {
            !(function (e) {
                var t = (function () {
                        try {
                            return !!Symbol.iterator;
                        } catch (e) {
                            return !1;
                        }
                    })(),
                    n = function (e) {
                        var n = {
                            next: function () {
                                var t = e.shift();
                                return {done: void 0 === t, value: t};
                            },
                        };
                        return (
                            t &&
                                (n[Symbol.iterator] = function () {
                                    return n;
                                }),
                            n
                        );
                    },
                    r = function (e) {
                        return encodeURIComponent(e).replace(/%20/g, '+');
                    },
                    o = function (e) {
                        return decodeURIComponent(String(e).replace(/\+/g, ' '));
                    };
                (function () {
                    try {
                        var t = e.URLSearchParams;
                        return 'a=1' === new t('?a=1').toString() && 'function' == typeof t.prototype.set && 'function' == typeof t.prototype.entries;
                    } catch (e) {
                        return !1;
                    }
                })() ||
                    (function () {
                        var o = function (e) {
                                Object.defineProperty(this, '_entries', {writable: !0, value: {}});
                                var t = typeof e;
                                if ('undefined' === t);
                                else if ('string' === t) '' !== e && this._fromString(e);
                                else if (e instanceof o) {
                                    var n = this;
                                    e.forEach(function (e, t) {
                                        n.append(t, e);
                                    });
                                } else {
                                    if (null === e || 'object' !== t) throw new TypeError("Unsupported input's type for URLSearchParams");
                                    if ('[object Array]' === Object.prototype.toString.call(e))
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            if ('[object Array]' !== Object.prototype.toString.call(i) && 2 === i.length)
                                                throw new TypeError('Expected [string, any] as entry at index ' + r + " of URLSearchParams's input");
                                            this.append(i[0], i[1]);
                                        }
                                    else for (var a in e) e.hasOwnProperty(a) && this.append(a, e[a]);
                                }
                            },
                            i = o.prototype;
                        (i.append = function (e, t) {
                            e in this._entries ? this._entries[e].push(String(t)) : (this._entries[e] = [String(t)]);
                        }),
                            (i.delete = function (e) {
                                delete this._entries[e];
                            }),
                            (i.get = function (e) {
                                return e in this._entries ? this._entries[e][0] : null;
                            }),
                            (i.getAll = function (e) {
                                return e in this._entries ? this._entries[e].slice(0) : [];
                            }),
                            (i.has = function (e) {
                                return e in this._entries;
                            }),
                            (i.set = function (e, t) {
                                this._entries[e] = [String(t)];
                            }),
                            (i.forEach = function (e, t) {
                                var n;
                                for (var r in this._entries)
                                    if (this._entries.hasOwnProperty(r)) {
                                        n = this._entries[r];
                                        for (var o = 0; o < n.length; o++) e.call(t, n[o], r, this);
                                    }
                            }),
                            (i.keys = function () {
                                var e = [];
                                return (
                                    this.forEach(function (t, n) {
                                        e.push(n);
                                    }),
                                    n(e)
                                );
                            }),
                            (i.values = function () {
                                var e = [];
                                return (
                                    this.forEach(function (t) {
                                        e.push(t);
                                    }),
                                    n(e)
                                );
                            }),
                            (i.entries = function () {
                                var e = [];
                                return (
                                    this.forEach(function (t, n) {
                                        e.push([n, t]);
                                    }),
                                    n(e)
                                );
                            }),
                            t && (i[Symbol.iterator] = i.entries),
                            (i.toString = function () {
                                var e = [];
                                return (
                                    this.forEach(function (t, n) {
                                        e.push(r(n) + '=' + r(t));
                                    }),
                                    e.join('&')
                                );
                            }),
                            (e.URLSearchParams = o);
                    })();
                var i = e.URLSearchParams.prototype;
                'function' != typeof i.sort &&
                    (i.sort = function () {
                        var e = this,
                            t = [];
                        this.forEach(function (n, r) {
                            t.push([r, n]), e._entries || e.delete(r);
                        }),
                            t.sort(function (e, t) {
                                return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0;
                            }),
                            e._entries && (e._entries = {});
                        for (var n = 0; n < t.length; n++) this.append(t[n][0], t[n][1]);
                    }),
                    'function' != typeof i._fromString &&
                        Object.defineProperty(i, '_fromString', {
                            enumerable: !1,
                            configurable: !1,
                            writable: !1,
                            value: function (e) {
                                if (this._entries) this._entries = {};
                                else {
                                    var t = [];
                                    this.forEach(function (e, n) {
                                        t.push(n);
                                    });
                                    for (var n = 0; n < t.length; n++) this.delete(t[n]);
                                }
                                var r,
                                    i = (e = e.replace(/^\?/, '')).split('&');
                                for (n = 0; n < i.length; n++) (r = i[n].split('=')), this.append(o(r[0]), r.length > 1 ? o(r[1]) : '');
                            },
                        });
            })(void 0 !== e ? e : 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : this),
                (function (e) {
                    if (
                        ((function () {
                            try {
                                var t = new e.URL('b', 'http://a');
                                return (t.pathname = 'c d'), 'http://a/c%20d' === t.href && t.searchParams;
                            } catch (e) {
                                return !1;
                            }
                        })() ||
                            (function () {
                                var t = e.URL,
                                    n = function (t, n) {
                                        'string' != typeof t && (t = String(t));
                                        var r,
                                            o = document;
                                        if (n && (void 0 === e.location || n !== e.location.href)) {
                                            ((r = (o = document.implementation.createHTMLDocument('')).createElement('base')).href = n), o.head.appendChild(r);
                                            try {
                                                if (0 !== r.href.indexOf(n)) throw new Error(r.href);
                                            } catch (e) {
                                                throw new Error('URL unable to set base ' + n + ' due to ' + e);
                                            }
                                        }
                                        var i = o.createElement('a');
                                        (i.href = t), r && (o.body.appendChild(i), (i.href = i.href));
                                        var a = o.createElement('input');
                                        if (((a.type = 'url'), (a.value = t), ':' === i.protocol || !/:/.test(i.href) || (!a.checkValidity() && !n)))
                                            throw new TypeError('Invalid URL');
                                        Object.defineProperty(this, '_anchorElement', {value: i});
                                        var c = new e.URLSearchParams(this.search),
                                            s = !0,
                                            u = !0,
                                            l = this;
                                        ['append', 'delete', 'set'].forEach(function (e) {
                                            var t = c[e];
                                            c[e] = function () {
                                                t.apply(c, arguments), s && ((u = !1), (l.search = c.toString()), (u = !0));
                                            };
                                        }),
                                            Object.defineProperty(this, 'searchParams', {value: c, enumerable: !0});
                                        var d = void 0;
                                        Object.defineProperty(this, '_updateSearchParams', {
                                            enumerable: !1,
                                            configurable: !1,
                                            writable: !1,
                                            value: function () {
                                                this.search !== d && ((d = this.search), u && ((s = !1), this.searchParams._fromString(this.search), (s = !0)));
                                            },
                                        });
                                    },
                                    r = n.prototype;
                                ['hash', 'host', 'hostname', 'port', 'protocol'].forEach(function (e) {
                                    !(function (e) {
                                        Object.defineProperty(r, e, {
                                            get: function () {
                                                return this._anchorElement[e];
                                            },
                                            set: function (t) {
                                                this._anchorElement[e] = t;
                                            },
                                            enumerable: !0,
                                        });
                                    })(e);
                                }),
                                    Object.defineProperty(r, 'search', {
                                        get: function () {
                                            return this._anchorElement.search;
                                        },
                                        set: function (e) {
                                            (this._anchorElement.search = e), this._updateSearchParams();
                                        },
                                        enumerable: !0,
                                    }),
                                    Object.defineProperties(r, {
                                        toString: {
                                            get: function () {
                                                var e = this;
                                                return function () {
                                                    return e.href;
                                                };
                                            },
                                        },
                                        href: {
                                            get: function () {
                                                return this._anchorElement.href.replace(/\?$/, '');
                                            },
                                            set: function (e) {
                                                (this._anchorElement.href = e), this._updateSearchParams();
                                            },
                                            enumerable: !0,
                                        },
                                        pathname: {
                                            get: function () {
                                                return this._anchorElement.pathname.replace(/(^\/?)/, '/');
                                            },
                                            set: function (e) {
                                                this._anchorElement.pathname = e;
                                            },
                                            enumerable: !0,
                                        },
                                        origin: {
                                            get: function () {
                                                var e = {'http:': 80, 'https:': 443, 'ftp:': 21}[this._anchorElement.protocol],
                                                    t = this._anchorElement.port != e && '' !== this._anchorElement.port;
                                                return this._anchorElement.protocol + '//' + this._anchorElement.hostname + (t ? ':' + this._anchorElement.port : '');
                                            },
                                            enumerable: !0,
                                        },
                                        password: {
                                            get: function () {
                                                return '';
                                            },
                                            set: function (e) {},
                                            enumerable: !0,
                                        },
                                        username: {
                                            get: function () {
                                                return '';
                                            },
                                            set: function (e) {},
                                            enumerable: !0,
                                        },
                                    }),
                                    (n.createObjectURL = function (e) {
                                        return t.createObjectURL.apply(t, arguments);
                                    }),
                                    (n.revokeObjectURL = function (e) {
                                        return t.revokeObjectURL.apply(t, arguments);
                                    }),
                                    (e.URL = n);
                            })(),
                        void 0 !== e.location && !('origin' in e.location))
                    ) {
                        var t = function () {
                            return e.location.protocol + '//' + e.location.hostname + (e.location.port ? ':' + e.location.port : '');
                        };
                        try {
                            Object.defineProperty(e.location, 'origin', {get: t, enumerable: !0});
                        } catch (n) {
                            setInterval(function () {
                                e.location.origin = t();
                            }, 100);
                        }
                    }
                })(void 0 !== e ? e : 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : this);
        }.call(this, n(113)));
    },
    function (e, t) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function('return this')();
        } catch (e) {
            'object' == typeof window && (n = window);
        }
        e.exports = n;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
        'use strict';
        n.d(t, 'a', function () {
            return v;
        });
        n(88), n(89), n(32), n(47), n(22), n(93), n(94), n(72), n(73), n(46), n(33);
        var r = n(68),
            o = n(35),
            i = n(21);
        function a(e) {
            return (a =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                      })(e);
        }
        function c(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a),
                    s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function s(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                        c(i, r, o, a, s, 'next', e);
                    }
                    function s(e) {
                        c(i, r, o, a, s, 'throw', e);
                    }
                    a(void 0);
                });
            };
        }
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        function l(e, t) {
            return (l =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function d(e) {
            var t = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })();
            return function () {
                var n,
                    r = m(e);
                if (t) {
                    var o = m(this).constructor;
                    n = Reflect.construct(r, arguments, o);
                } else n = r.apply(this, arguments);
                return f(this, n);
            };
        }
        function f(e, t) {
            return !t || ('object' !== a(t) && 'function' != typeof t) ? p(e) : t;
        }
        function p(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function h(e, t, n) {
            return (h =
                'undefined' != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (e, t, n) {
                          var r = (function (e, t) {
                              for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = m(e)); );
                              return e;
                          })(e, t);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, t);
                              return o.get ? o.get.call(n) : o.value;
                          }
                      })(e, t, n || e);
        }
        function m(e) {
            return (m = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        var y = new (n.n(i).a)(),
            g = new o.a(),
            v = (function (e) {
                !(function (e, t) {
                    if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
                    (e.prototype = Object.create(t && t.prototype, {constructor: {value: e, writable: !0, configurable: !0}})), t && l(e, t);
                })(v, e);
                var t,
                    n,
                    r,
                    o,
                    i,
                    a,
                    c,
                    f = d(v);
                function v(e) {
                    var t, n;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                        })(this, v),
                        h(((t = p((n = f.call(this, e)))), m(v.prototype)), 'init', t).call(t),
                        (n.site_config = e),
                        n
                    );
                }
                return (
                    (t = v),
                    (n = [
                        {
                            key: 'init',
                            value: function () {
                                var e = this;
                                this.addLinkToRewardsPlatform(),
                                    this.applyResbeatStyles(),
                                    this.updateLogin(),
                                    this.styleRegisterContainer(),
                                    this.displayCheckoutRewardPoints(),
                                    this.displayRewardPoints('table.ArnRateList'),
                                    this.confirmationPointsEarned(),
                                    this.updateHeaderLinks(),
                                    this.rerunFunctionsOnMoreRoomsClick(),
                                    this.moveConfigContainer(),
                                    this.removeAnchorTag(),
                                    this.confPageSavings(),
                                    document.querySelector('.RootBody') && this.updateSearchTitle(),
                                    document.querySelector('.WBLoginForm') && g.selectCheckboxOnLabelClick('#theRememberMeAjax'),
                                    document.querySelector('.SearchHotels') &&
                                        (g.waitForSelectorInDOM('.sort-wrapper').then(function () {
                                            e.insertHR('.sort-wrapper', 'beforebegin');
                                        }),
                                        this.insertHR('#AmentitiesContainer', 'beforebegin'),
                                        this.insertHR('#PropertyClassesContainer', 'beforebegin'),
                                        this.insertHR('#PropertyTypesContainer', 'beforebegin'),
                                        jQuery(document).on('ratesReadyEvent', function () {
                                            setTimeout(function () {
                                                e.insertPercentageOffText('.SearchHotels .ArnContainer');
                                            }, 1);
                                        })),
                                    document.querySelector('.SinglePropDetail') && this.insertPercentageOffText('.SinglePropDetail .rateRow'),
                                    document.querySelector('.WBValidatedRegistrationForm') &&
                                        (this.createInputMaskToBypassArnValidation('#theUserNameAjax', 'email-mask', 'email', 'Email', '#theUserNameAjax input'),
                                        g.removeMaskedElementFromTabIndex('#theUserNameAjax input')),
                                    document.querySelector('.WBSupportFormContainer') &&
                                        (this.createInputMaskToBypassArnValidation(
                                            '#theReservationConfirmationNumberAjax',
                                            'booking-number-mask',
                                            'text',
                                            'Booking Number',
                                            '#theReservationConfirmationNumberAjax input'
                                        ),
                                        g.removeMaskedElementFromTabIndex('#theReservationConfirmationNumberAjax input')),
                                    this.replaceHTMLWithFile('https://static.hotelsforhope.com/ares/html/booking-guide.html', '#booking-guide').then(
                                        s(
                                            regeneratorRuntime.mark(function e() {
                                                return regeneratorRuntime.wrap(function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (!document.querySelector('#booking-guide')) {
                                                                    e.next = 5;
                                                                    break;
                                                                }
                                                                return (e.next = 3), g.waitForSelectorInDOM('#faq-link');
                                                            case 3:
                                                                g.updateAttribute('#faq-link', g.getAttribute('.faqLink', 'href'), 'href'),
                                                                    g.updateAttribute('#customer-support-link', g.getAttribute('.supportLink', 'href'), 'href');
                                                            case 5:
                                                            case 'end':
                                                                return e.stop();
                                                        }
                                                }, e);
                                            })
                                        )
                                    ),
                                    this.replaceHTMLWithFile('https://static.hotelsforhope.com/ares/html/resbeat-faq.html', '.ArnSubPage.WBFaq'),
                                    g.updateHTML(
                                        '.ArnSupportChatTable',
                                        '\n            <div class="support-details">\n                <h3>Customer Support</h3>\n                <p>Hours: M-F 8:00am - 5:30pm CST</p>\n                <p>Call Us: <a href="tel:1.866.584.0204">1.866.584.0204</a></p>\n                <p>Email Us: <a href="mailto:reservations@resbeat.com">reservations@resbeat.com</a></p>\n                <p>If you require assistance outside our standard hours, please leave us a voicemail and a member of the team will respond promptly.</p>\n            </div>'
                                    ),
                                    g.addAttributeToInput('#theFirstNameAjax input', 'First Name', 'placeholder', '.WBValidatedRegistrationForm'),
                                    g.addAttributeToInput('#theLastNameAjax input', 'Last Name', 'placeholder', '.WBValidatedRegistrationForm'),
                                    g.addAttributeToInput('#theEditablePasswordAjax input', 'Create a Password', 'placeholder', '.WBValidatedRegistrationForm'),
                                    g.addAttributeToInput('#theEditableConfirmPasswordAjax input', 'Confirm Password', 'placeholder', '.WBValidatedRegistrationForm'),
                                    g.addAttributeToInput('.WBForgotPasswordFormFields #theUserNameAjax input', 'Email', 'placeholder', '.WBForgotPasswordForm'),
                                    g.addAttributeToInput('.WBForgotPasswordFormFields #theUserNameAjax input', !0, 'required', '.WBForgotPasswordForm'),
                                    g.addAttributeToInput('#theFirstNameAjax input', !0, 'required', '.WBValidatedRegistrationForm'),
                                    g.addAttributeToInput('#theLastNameAjax input', !0, 'required', '.WBValidatedRegistrationForm'),
                                    g.addAttributeToInput('#theEditablePasswordAjax input', !0, 'required', '.WBValidatedRegistrationForm'),
                                    g.addAttributeToInput('#theEditableConfirmPasswordAjax input', !0, 'required', '.WBValidatedRegistrationForm'),
                                    g.addAttributeToInput('#commands .supportLink', '_blank', 'target', '.MemberAuthenticated'),
                                    g.addAttributeToInput('#commands .profileCommand', '_blank', 'target', '.MemberAuthenticated'),
                                    g.addAttributeToInput('#theNameAjax input', 'Name', 'placeholder', '.WBSupportFormContainer'),
                                    g.addAttributeToInput('#theDaytimePhoneNumberAjax input', 'Phone Number', 'placeholder', '.WBSupportFormContainer'),
                                    g.addAttributeToInput('#theEmailAjax input', 'Email', 'placeholder', '.WBSupportFormContainer'),
                                    g.addAttributeToInput('#theNameAjax input', !0, 'required', '.WBSupportFormContainer'),
                                    g.addAttributeToInput('#theDaytimePhoneNumberAjax input', !0, 'required', '.WBSupportFormContainer'),
                                    g.addAttributeToInput('#theEmailAjax input', !0, 'required', '.WBSupportFormContainer'),
                                    g.addAttributeToInput('#theEmailAjax input', 'email', 'type', '.WBSupportFormContainer'),
                                    g.addAttributeToInput('#theReservationConfirmationNumberAjax input', 'Booking Number', 'placeholder', '.WBSupportFormContainer'),
                                    g.addAttributeToInput('#theDateOfArrivalAjax input', 'Check In Date', 'placeholder', '.WBSupportFormContainer'),
                                    g.addAttributeToInput('#theHotelNameAjax input', 'Hotel', 'placeholder', '.WBSupportFormContainer'),
                                    g.addAttributeToInput('#theCommentsAjax textarea', 'Comments', 'placeholder', '.WBSupportFormContainer'),
                                    g.addAttributeToInput('#theEmailAddressAjax input', 'Email Address', 'placeholder', '.WBResendOrCancelForm'),
                                    g.addAttributeToInput('#theConfirmationNumberAjax input', 'Confirmation or Reference Number', 'placeholder', '.WBResendOrCancelForm'),
                                    g.updateHTML('#theReasonForInquiryAjax select > option:first-child', 'Reason for Inquiry'),
                                    g.updateHTML('.static-bookingLink', 'Booking Guide'),
                                    g.updateHTML('.static-rewardsLink', 'Rewards Guide');
                            },
                        },
                        {
                            key: 'updateLogin',
                            value:
                                ((c = s(
                                    regeneratorRuntime.mark(function e() {
                                        return regeneratorRuntime.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (document.querySelector('.MemberNotAuthenticated')) {
                                                            e.next = 2;
                                                            break;
                                                        }
                                                        return e.abrupt('return');
                                                    case 2:
                                                        return (e.next = 4), g.waitForSelectorInDOM('#theWBLoginFormBody h1');
                                                    case 4:
                                                        document.querySelector('#theWBLoginFormBody h1').innerHTML = 'LOG<strong>IN</strong>';
                                                    case 6:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function () {
                                    return c.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'styleRegisterContainer',
                            value: function () {
                                if (document.querySelector('#theWBLoginFormBody')) {
                                    document.querySelector('#theUserNameAjax input').setAttribute('placeholder', 'Email'),
                                        document.querySelector('#thePasswordAjax input').setAttribute('placeholder', 'Password'),
                                        document.querySelector('#theUserNameAjax input').setAttribute('required', !0),
                                        document.querySelector('#thePasswordAjax input').setAttribute('required', !0),
                                        document
                                            .querySelector('#theWBLoginFormBody')
                                            .insertAdjacentHTML(
                                                'beforeend',
                                                '\n            <div id="register-container">\n                <h2 id="new-user-text">NEW <strong>USER</strong>?</h2>\n                <div id="register-btn">\n                </div>\n            </div>\n        '
                                            );
                                    var e = document.querySelector('.CreateAnAccountAction');
                                    document.querySelector('#register-btn').insertAdjacentElement('afterbegin', e), (e.textContent = 'REGISTER');
                                }
                            },
                        },
                        {
                            key: 'displayCheckoutRewardPoints',
                            value: function () {
                                if (document.querySelector('.CheckOutForm') && '62725' !== g.getMetaTagContent('siteId') && '63711' !== g.getMetaTagContent('siteId')) {
                                    var e = document.querySelector('.dueNowRow td'),
                                        t = document.querySelector('.taxFeeRow td');
                                    if (
                                        e ||
                                        ((e = document.querySelector('.balanceDueRow td')),
                                        (document.querySelector('#theRateTotals > tbody > .discountRow').style.display = 'table-row'),
                                        e)
                                    ) {
                                        var n = e.textContent,
                                            r = t.textContent,
                                            o = (n = parseFloat(n.replace(/[^\d.-]/g, ''))) - (r = parseFloat(r.replace(/[^\d.-]/g, ''))),
                                            i = Math.floor(o);
                                        document
                                            .querySelector('.totalsTable tbody')
                                            .insertAdjacentHTML(
                                                'beforeend',
                                                '\n            <tr class="total-points-earned">\n                <th>Rewards Earned:</th>\n                <td>'.concat(
                                                    i,
                                                    '</td>\n            </tr>\n            '
                                                )
                                            );
                                        var a = document.querySelector('tr .discount th');
                                        (a || (a = document.querySelector('tr .discountRow th'))) && (a.textContent = "BEAT 'EM BY:");
                                    }
                                }
                            },
                        },
                        {
                            key: 'displayRewardPoints',
                            value:
                                ((a = s(
                                    regeneratorRuntime.mark(function e(t) {
                                        var n, r, o;
                                        return regeneratorRuntime.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                document.querySelector('.SinglePropDetail') &&
                                                                '62725' !== g.getMetaTagContent('siteId') &&
                                                                '63711' !== g.getMetaTagContent('siteId')
                                                            ) {
                                                                e.next = 2;
                                                                break;
                                                            }
                                                            return e.abrupt('return');
                                                        case 2:
                                                            return (e.next = 4), g.waitForSelectorInDOM('.ArnNightlyRate');
                                                        case 4:
                                                            (n = document.querySelectorAll(t)),
                                                                (r = window.matchMedia('(max-width: 800px)')),
                                                                (o = '\n            <style>\n                .points{\n                    color: '.concat(
                                                                    this.site_config.secondary_color,
                                                                    ";\n                }\n\n                div.points-earned span {\n                    font-family: 'Avenir';\n                    letter-spacing: 1px;\n                }\n            </style>\n            "
                                                                )),
                                                                n.forEach(function (e, t) {
                                                                    if (!e.querySelector('.points-earned')) {
                                                                        var n = e.querySelector('.originalPrice');
                                                                        if (n) {
                                                                            var i = n.getAttribute('amount'),
                                                                                a = n.textContent.replace(/[^0-9.]/g, ''),
                                                                                c = i.replace(/[^0-9.]/g, ''),
                                                                                s = g.calculateNights(),
                                                                                u = parseInt(s * (a - c));
                                                                            0 === t && document.body.insertAdjacentHTML('beforeend', o),
                                                                                r.matches
                                                                                    ? e
                                                                                          .querySelector('tbody .bookRoomCell')
                                                                                          .insertAdjacentHTML(
                                                                                              'afterbegin',
                                                                                              '\n                <div class="points-earned">\n                <span>RE<b>WARDS</b>: '.concat(
                                                                                                  u,
                                                                                                  '</span>\n                </div>\n                '
                                                                                              )
                                                                                          )
                                                                                    : e
                                                                                          .querySelector('tbody tr')
                                                                                          .insertAdjacentHTML(
                                                                                              'afterend',
                                                                                              '\n                <div class="points-earned">\n                Earn <b class="points">'.concat(
                                                                                                  u,
                                                                                                  '</b> <span>RES<b>BEAT</b> Rewards</span>\n                </div>\n                '
                                                                                              )
                                                                                          );
                                                                        }
                                                                    }
                                                                });
                                                        case 8:
                                                        case 'end':
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    })
                                )),
                                function (e) {
                                    return a.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'confirmationPointsEarned',
                            value: function () {
                                if (document.querySelector('.ConfirmationForm')) {
                                    var e = document.querySelector('.discountRow td').textContent;
                                    (e = parseInt(e.replace(/[^0-9.]/g, ''))),
                                        (document.querySelector('.confirmNum').textContent = 'Booking Number:'),
                                        document
                                            .querySelector('.GuestForms')
                                            .insertAdjacentHTML(
                                                'beforeEnd',
                                                '\n            <div class="points-earned">\n                <div class="rewards-span">\n                    <span>RES<b>BEAT</b> Rewards Earned</span>\n                    <span>'.concat(
                                                    e,
                                                    '</span>\n                </div>\n                <p class="awarded-after-checkout">Your RES<b>BEAT</b> Rewards will be redeemable 48 hours after hotel checkout.\n                We\'ll send you an email once they have been added to your Rewards account.</p>\n            </div>\n            '
                                                )
                                            );
                                }
                            },
                        },
                        {
                            key: 'updateHeaderLinks',
                            value: function () {
                                if (document.querySelector('#commands')) {
                                    var e = document.querySelector('.supportLink'),
                                        t = document.querySelector('#commands');
                                    t.insertAdjacentElement('afterbegin', e);
                                    var n = document.querySelector('.static-bookingLink'),
                                        r = document.querySelector('.static-rewardsLink');
                                    n &&
                                        r &&
                                        t.insertAdjacentHTML(
                                            'afterbegin',
                                            '\n        <a class="rewards" target="_blank" href="'
                                                .concat(r.href, '">Rewards Guide</a>\n        <a class="booking-guide" target="_blank" href="')
                                                .concat(n.href, '">Booking Guide</a>\n        ')
                                        );
                                }
                            },
                        },
                        {
                            key: 'rerunFunctionsOnMoreRoomsClick',
                            value: function () {
                                var e = this;
                                if (document.querySelector('.SinglePropDetail')) {
                                    var t = document.querySelector('#moreRatesLink');
                                    t &&
                                        t.addEventListener(
                                            'click',
                                            s(
                                                regeneratorRuntime.mark(function t() {
                                                    return regeneratorRuntime.wrap(function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return (t.next = 2), g.waitForSelectorInDOM('#moreRates');
                                                                case 2:
                                                                    h(m(v.prototype), 'insertPercentageOffText', e).call(e, '.SinglePropDetail .rateRow'),
                                                                        e.displayRewardPoints('table.ArnRateList');
                                                                case 4:
                                                                case 'end':
                                                                    return t.stop();
                                                            }
                                                    }, t);
                                                })
                                            )
                                        );
                                }
                            },
                        },
                        {
                            key: 'createInputMaskToBypassArnValidation',
                            value: function (e, t, n, r, o) {
                                var i = document.querySelector(e);
                                if (i) {
                                    var a = i.querySelector('input');
                                    i.insertAdjacentHTML(
                                        'beforeBegin',
                                        '<input type="'
                                            .concat(n, '" placeholder="')
                                            .concat(r, '" class="')
                                            .concat(t, '" required><style>')
                                            .concat(e, ' input, ')
                                            .concat(e, ' label {position:absolute;left:-100000px;}</style>')
                                    );
                                    var c = document.querySelector('.'.concat(t));
                                    c.addEventListener('blur', function () {
                                        a.value = c.value;
                                        var e = setInterval(function () {
                                            document.querySelector('#'.concat(a.id)) || ((a = document.querySelector(o)), g.removeMaskedElementFromTabIndex(o), clearInterval(e));
                                        }, 500);
                                        a.focus(), a.blur();
                                    });
                                }
                            },
                        },
                        {
                            key: 'moveConfigContainer',
                            value: function () {
                                if (document.querySelector('.config-container')) {
                                    var e = window.matchMedia('(max-width: 800px)'),
                                        t = document.querySelector('.currencies-container');
                                    e.matches &&
                                        document.querySelector('.SearchHotels') &&
                                        (document.querySelector('#theSearchBox').insertAdjacentElement('afterend', t),
                                        t.insertAdjacentHTML('beforebegin', '\n                <span class="currency-label">Currency:</span>\n                ')),
                                        e.matches &&
                                            document.querySelector('.RootBody') &&
                                            (document
                                                .querySelector('.ArnAdults')
                                                .insertAdjacentHTML(
                                                    'afterend',
                                                    '\n                <td class="currency">\n                    <span class="currency-label">Currency:</span>\n                </td>\n                '
                                                ),
                                            document.querySelector('.currency').insertAdjacentElement('beforeend', t));
                                }
                            },
                        },
                        {
                            key: 'insertHR',
                            value: function (e, t) {
                                document.querySelector(e) && document.querySelector(e).insertAdjacentHTML(t, '<hr class="hr">');
                            },
                        },
                        {
                            key: 'insertPercentageOffText',
                            value: function (e) {
                                var t = this;
                                if (
                                    !1 !== this.site_config.is_resbeat_client &&
                                    '62725' !== g.getMetaTagContent('siteId') &&
                                    '63711' !== g.getMetaTagContent('siteId') &&
                                    (!document.querySelector('.beat-em') || 'search-results' !== g.page_name) &&
                                    (document.querySelector('.SearchHotels') || document.querySelector('.SinglePropDetail'))
                                ) {
                                    var n = window.matchMedia('(max-width: 600px)');
                                    if (!document.querySelector(e)) return;
                                    document.querySelectorAll(e).forEach(function (e) {
                                        if (!e.querySelector('.beat-em') && e.querySelector('.originalPrice')) {
                                            var r = e.querySelector('.originalPrice').getAttribute('percent'),
                                                o = '.ArnRateCell';
                                            n.matches && document.querySelector('.SearchHotels')
                                                ? (o = '.ArnPropThumb')
                                                : document.querySelector('.SinglePropDetail') && (o = '.bookRoomCell'),
                                                '62011' === t.site_id || '60831' === t.site_id
                                                    ? e
                                                          .querySelector(o)
                                                          .insertAdjacentHTML(
                                                              'afterbegin',
                                                              '<div class="beat-em">\n                            '
                                                                  .concat(t.site_config.cug.percent_off_text, ' ')
                                                                  .concat(r, '%\n                            </div>')
                                                          )
                                                    : e
                                                          .querySelector(o)
                                                          .insertAdjacentHTML(
                                                              'afterbegin',
                                                              '<div class="beat-em">\n                            '
                                                                  .concat(r, '% ')
                                                                  .concat(t.site_config.cug.percent_off_text, '\n                            </div>')
                                                          );
                                        }
                                    });
                                }
                            },
                        },
                        {
                            key: 'updateSearchTitle',
                            value: function () {
                                if (document.querySelector('.RootBody')) {
                                    var e = document.querySelector('meta[name="firstName"]').content;
                                    document.querySelector(
                                        '.RootBody .ArnSearchHotelsImg'
                                    ).innerHTML = '\n            <span class="search-messaging">\n                    <h1 id="user-name">'
                                        .concat(e.toUpperCase(), ', ')
                                        .concat(this.site_config.root_page_header_text, '</h1>\n                    <h4>')
                                        .concat(this.site_config.root_page_subheader_text, '</h4>\n            </span>\n            ');
                                }
                            },
                        },
                        {
                            key: 'applyResbeatStyles',
                            value: function () {
                                var e = document.querySelector('#h4h-styles');
                                e && e.insertAdjacentHTML('beforeend', '<link href="'.concat(y.path, '/styles/resbeat.css" rel="stylesheet">'));
                            },
                        },
                        {
                            key: 'removeAnchorTag',
                            value:
                                ((i = s(
                                    regeneratorRuntime.mark(function e() {
                                        var t, n;
                                        return regeneratorRuntime.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (document.querySelector('.ConfirmationForm')) {
                                                            e.next = 2;
                                                            break;
                                                        }
                                                        return e.abrupt('return');
                                                    case 2:
                                                        return (e.next = 4), g.waitForSelectorInDOM('.confirmation-messaging a');
                                                    case 4:
                                                        (t = document.querySelector('.confirmation-messaging a strong')),
                                                            (n = document.querySelector('.confirmation-messaging a')).insertAdjacentElement('afterend', t),
                                                            n.remove();
                                                    case 8:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )),
                                function () {
                                    return i.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'confPageSavings',
                            value: function () {
                                if (document.querySelector('.ConfirmationForm')) {
                                    var e = document.querySelector('#theRateTotals .discount td').textContent;
                                    document
                                        .querySelector('.ConfirmationForm .GuestForms')
                                        .insertAdjacentHTML(
                                            'beforeend',
                                            '\n            <div class="beat-em-value">\n                <span>WE BEAT \'EM BY</span>\n                <span>'.concat(
                                                e,
                                                '</span>\n            </div>\n        '
                                            )
                                        );
                                }
                            },
                        },
                        {
                            key: 'getMemberUsername',
                            value: function () {
                                var e,
                                    t = g.getMetaTagContent('memberMetaTag');
                                if (t && (e = JSON.parse(t)).MemberUsername) return e.MemberUsername;
                            },
                        },
                        {
                            key: 'setLoginRedirectUrl',
                            value: function () {
                                var e = window.location.host;
                                return e.includes('events.hotelsforhope')
                                    ? 'https://'.concat(e, '/v6/login?siteId=').concat(this.site_config.site_id)
                                    : 'https://'.concat(e, '/v6/login');
                            },
                        },
                        {
                            key: 'getLoginRedirectUrl',
                            value: function () {
                                return this.setLoginRedirectUrl();
                            },
                        },
                        {
                            key: 'addLinkToRewardsPlatform',
                            value:
                                ((o = s(
                                    regeneratorRuntime.mark(function e() {
                                        var t, n, r, o, i, a;
                                        return regeneratorRuntime.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (e.next = 2), g.waitForSelectorInDOM('header #commands');
                                                        case 2:
                                                            if (
                                                                ((t = this.getLoginRedirectUrl()),
                                                                (n = encodeURIComponent(t)),
                                                                (r = g.getMetaTagContent('memberToken')),
                                                                (o = this.getMemberUsername()),
                                                                (i = btoa(
                                                                    'member_token='
                                                                        .concat(r, '&member_username=')
                                                                        .concat(o, '&site_id=')
                                                                        .concat(this.site_config.site_id, '&redirect_url=')
                                                                        .concat(n)
                                                                )),
                                                                (a = document.querySelector('header #commands')),
                                                                document.querySelector('.MemberAuthenticated') && a)
                                                            ) {
                                                                e.next = 10;
                                                                break;
                                                            }
                                                            return e.abrupt('return');
                                                        case 10:
                                                            if (!document.referrer.includes('register')) {
                                                                e.next = 13;
                                                                break;
                                                            }
                                                            return (
                                                                setTimeout(function () {
                                                                    a.insertAdjacentHTML(
                                                                        'afterBegin',
                                                                        '<a id="rewards-link" href="https://rb-redirect.hotelsforhope.com/users/redirect/'.concat(
                                                                            i,
                                                                            '" target="_blank">RES<b>BEAT</b> Rewards</a>'
                                                                        )
                                                                    );
                                                                }, 1e4),
                                                                e.abrupt('return')
                                                            );
                                                        case 13:
                                                            return (
                                                                (e.next = 15),
                                                                a.insertAdjacentHTML(
                                                                    'afterBegin',
                                                                    '<a id="rewards-link" href="https://rb-redirect.hotelsforhope.com/users/redirect/'.concat(
                                                                        i,
                                                                        '" target="_blank">RES<b>BEAT</b> Rewards</a>'
                                                                    )
                                                                )
                                                            );
                                                        case 15:
                                                        case 'end':
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    })
                                )),
                                function () {
                                    return o.apply(this, arguments);
                                }),
                        },
                    ]) && u(t.prototype, n),
                    r && u(t, r),
                    v
                );
            })(r.a);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {},
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
        'use strict';
        n.r(t);
        n(88), n(89), n(32), n(47), n(93), n(94), n(46), n(34), n(23), n(22), n(99), n(33), n(69);
        var r = n(21),
            o = n.n(r),
            i = new o.a(),
            a = 'resbeat_squad_test-'.concat(62686);
        var c = n(136),
            s = n(35);
        function u(e) {
            return (u =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                      })(e);
        }
        function l(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a),
                    s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function d(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                        l(i, r, o, a, c, 'next', e);
                    }
                    function c(e) {
                        l(i, r, o, a, c, 'throw', e);
                    }
                    a(void 0);
                });
            };
        }
        function f(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        function p(e, t) {
            return (p =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function h(e) {
            var t = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })();
            return function () {
                var n,
                    r = v(e);
                if (t) {
                    var o = v(this).constructor;
                    n = Reflect.construct(r, arguments, o);
                } else n = r.apply(this, arguments);
                return m(this, n);
            };
        }
        function m(e, t) {
            return !t || ('object' !== u(t) && 'function' != typeof t) ? y(e) : t;
        }
        function y(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function g(e, t, n) {
            return (g =
                'undefined' != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (e, t, n) {
                          var r = (function (e, t) {
                              for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = v(e)); );
                              return e;
                          })(e, t);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, t);
                              return o.get ? o.get.call(n) : o.value;
                          }
                      })(e, t, n || e);
        }
        function v(e) {
            return (v = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        var b = n(40),
            S = new o.a(),
            w = new s.a(),
            x = new (function () {
                return {
                    site_id: 62686,
                    directory_name: a,
                    affiliate_id: 16827,
                    master_id: 2143,
                    site_type: 'cug',
                    algolia_app_id: 'pl58QCMXHS4C',
                    algolia_api_key: '1514caaca583b1ed25dad3b0c6addf0a',
                    currency: 'USD',
                    distance_unit: 'useMiles',
                    map_size: '12',
                    radius: '50',
                    lodging: {event_id: '', event_name: '', event_dates: '', is_lrg: ''},
                    cug: {is_cug: !0, show_points: !1, allow_registration: !1, percent_off_text: "BEAT 'EM BY", show_percent_savings: !0},
                    exclusive_rate_text: '',
                    host_hotel_text: '',
                    partner_hotel_text: '',
                    show_tax_inclusive_rates: !1,
                    dayjs_date_format: 'M/D/YYYY',
                    reviews_before_info: !0,
                    show_stars: !0,
                    show_property_type: !0,
                    show_language_select: !1,
                    show_currency_select: !0,
                    show_date_prompt: !1,
                    has_social_sharing: !0,
                    fav_icon_url: ''.concat(i.path, '/site_configs/').concat(a, '/img/favicon.png'),
                    header: {logo_file_location: ''.concat(i.path, '/site_configs/').concat(a, '/img/logo.svg'), logo_outbound_url: 'https://hotels.resbeat.com'},
                    map_marker_image_url: ''.concat(i.path, '/site_configs/').concat(a, '/img/favicon.png'),
                    theme: 'light',
                    google_font_url: '',
                    ads: {
                        sidebar_ad: {is_active: !1, image_url: '', outbound_url: ''},
                        between_property_ad: {is_active: !1, image_url: '', outbound_url: ''},
                        confirmation_page_top: {is_active: !1, image_url: '', outbound_url: ''},
                        confirmation_page_bottom: {is_active: !1, image_url: '', outbound_url: ''},
                    },
                    root_page_header_text: 'START YOUR <b>SEARCH</b>',
                    root_page_subheader_text: 'RESERVATIONS AT 600K+ HOTELS AT UNBEATABLE RATES',
                    is_resbeat_client: !0,
                    confirmation_email_from: 'RESBEAT',
                };
            })();
        new ((function (e) {
            !(function (e, t) {
                if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {constructor: {value: e, writable: !0, configurable: !0}})), t && p(e, t);
            })(a, e);
            var t,
                n,
                r,
                o,
                i = h(a);
            function a() {
                var e, t;
                return (
                    (function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, a),
                    g(((e = y((t = i.call(this, x)))), v(a.prototype)), 'init', e).call(e),
                    t.init(),
                    t
                );
            }
            return (
                (t = a),
                (n = [
                    {
                        key: 'init',
                        value: function () {
                            var e = this;
                            this.addDemoSiteTextToHeader(),
                                this.showGatewaySupplier(),
                                this.showGDSRatesButton(),
                                document.querySelector('.SearchHotels') &&
                                    w.waitForTextInDOM('.ArnSearchHeader', 'Update Search').then(function () {
                                        e.boldLastWord(['.ArnPrimarySearchOuterContainer div.ArnSearchHeader']);
                                    }),
                                document.querySelector('.SinglePropDetail') &&
                                    (this.boldLastWord(['#standardAvail legend', '#thePropertyReviews legend', '#theGeneralInfo legend']),
                                    w.waitForTextInDOM('.ArnLeftListContainer .translateMe', 'Update Search').then(function () {
                                        e.boldLastWord(['.ArnLeftListContainer .translateMe']);
                                    })),
                                document.querySelector('.CheckOutForm') &&
                                    setTimeout(function () {
                                        e.boldLastWord(['#theConfirmationContainer legend', '#theHotel legend']);
                                    }, 1);
                        },
                    },
                    {
                        key: 'boldLastWord',
                        value: function (e) {
                            document.querySelectorAll(e).forEach(function (e) {
                                if (e) {
                                    var t = e.textContent,
                                        n = t.lastIndexOf(' '),
                                        r = t.split(' ').pop();
                                    e.innerHTML = ''.concat(t.substring(0, n), ' <b>').concat(r, '</b>');
                                }
                            });
                        },
                    },
                    {
                        key: 'addDemoSiteTextToHeader',
                        value:
                            ((o = d(
                                regeneratorRuntime.mark(function e() {
                                    var t;
                                    return regeneratorRuntime.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.next = 2), w.waitForSelectorInDOM('header');
                                                case 2:
                                                    if ((t = document.querySelector('header'))) {
                                                        e.next = 5;
                                                        break;
                                                    }
                                                    return e.abrupt('return');
                                                case 5:
                                                    t.insertAdjacentHTML('afterEnd', '<h1 id="demo-messaging">DEMO</h1>');
                                                case 6:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            function () {
                                return o.apply(this, arguments);
                            }),
                    },
                    {
                        key: 'showGatewaySupplier',
                        value: function () {
                            function e() {
                                return t.apply(this, arguments);
                            }
                            function t() {
                                return (t = d(
                                    regeneratorRuntime.mark(function e() {
                                        var t, n;
                                        return regeneratorRuntime.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.next = 2), fetch(''.concat(S.path, '/site_configs/resbeat_squad_test-62686/js/gateways.json'));
                                                    case 2:
                                                        return (t = e.sent), (e.next = 5), t.json();
                                                    case 5:
                                                        return (n = e.sent), e.abrupt('return', n);
                                                    case 7:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )).apply(this, arguments);
                            }
                            function n(e) {
                                return r.apply(this, arguments);
                            }
                            function r() {
                                return (r = d(
                                    regeneratorRuntime.mark(function t(n) {
                                        var r, o, i;
                                        return regeneratorRuntime.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (t.next = 2), e();
                                                    case 2:
                                                        return (
                                                            (i = t.sent),
                                                            Object.entries(i).forEach(function (e) {
                                                                e[0] === n && ((r = e[1]), (o = e[0]));
                                                            }),
                                                            t.abrupt('return', [o, r])
                                                        );
                                                    case 5:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )).apply(this, arguments);
                            }
                            function o(e, t, n) {
                                return i.apply(this, arguments);
                            }
                            function i() {
                                return (i = d(
                                    regeneratorRuntime.mark(function e(t, n, r) {
                                        return regeneratorRuntime.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        t.querySelector('td').insertAdjacentHTML(
                                                            'beforeend',
                                                            '\n                <div id="gatewayData">\n                    <div class="supplierName">Supplier Name: '
                                                                .concat(n, '</div>\n                    <div class="gateway">Gateway: ')
                                                                .concat(
                                                                    r,
                                                                    '</div>\n                </div>\n            <style>\n                #gatewayData {\n                    padding: 20px 0;\n                    font-weight: 800;\n                }\n            </style>\n            '
                                                                )
                                                        );
                                                    case 1:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )).apply(this, arguments);
                            }
                            function a() {
                                return (a = d(
                                    regeneratorRuntime.mark(function e() {
                                        return regeneratorRuntime.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        document.querySelectorAll('table .ArnRateList').forEach(function (e) {
                                                            for (var t = 0; t < e.classList.length; t += 1)
                                                                /\S[B][1-9]|[1-9][0-9]$/.test(e.classList[t]) &&
                                                                    n(e.classList[t].replace(/\D/g, '')).then(function (t) {
                                                                        o(e, t[1], t[0]);
                                                                    });
                                                        });
                                                    case 2:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )).apply(this, arguments);
                            }
                            document.querySelector('.SinglePropDetail') &&
                                (function () {
                                    a.apply(this, arguments);
                                })();
                        },
                    },
                    {
                        key: 'showGDSRatesButton',
                        value: function () {
                            var e, t, n, r;
                            document.querySelector('.SinglePropDetail') &&
                                document
                                    .querySelector('#standardAvail legend')
                                    .insertAdjacentHTML(
                                        'afterend',
                                        '\n            <span id="check-gds-rates">\n                <a href="'.concat(
                                            ((e = document.querySelector('meta[name="aPropertyId"]').content),
                                            (t = b(document.querySelector('meta[name="checkIn"]').content).format('M/D/YYYY')),
                                            (n = b(document.querySelector('meta[name="checkOut"]').content).format('M/D/YYYY')),
                                            (r = b(n).diff(b(t), 'days')),
                                            'https://events.hotelsforhope.com/v6/?&type=property&property='
                                                .concat(e, '&checkIn=')
                                                .concat(t, '&nights=')
                                                .concat(r, '&siteid=39560')),
                                            '" target="_blank">Check GDS Rates</a>\n            </span>\n            <style>\n                #check-gds-rates {\n                    float: right;\n                    border: 1px solid #ccc;\n                    margin: 10px 33px 10px 10px;\n                }\n\n                #check-gds-rates a {\n                    padding: 10px;\n                    color: #666;\n                    text-decoration: none;\n                }\n\n                #check-gds-rates:hover {\n                    background: #ccc;\n                }\n\n                #check-gds-rates:hover a {\n                    color:#fff;\n                }\n            </style>\n        '
                                        )
                                    );
                        },
                    },
                ]) && f(t.prototype, n),
                r && f(t, r),
                a
            );
        })(c.a))();
        n(163);
    },
]);
