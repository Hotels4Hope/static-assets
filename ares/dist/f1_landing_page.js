!(function (t) {
    var e = {};
    function n(r) {
        if (e[r]) return e[r].exports;
        var o = (e[r] = {i: r, l: !1, exports: {}});
        return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r});
        }),
        (n.r = function (t) {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
                Object.defineProperty(t, '__esModule', {value: !0});
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, 'default', {enumerable: !0, value: t}), 2 & e && 'string' != typeof t))
                for (var o in t)
                    n.d(
                        r,
                        o,
                        function (e) {
                            return t[e];
                        }.bind(null, o)
                    );
            return r;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, 'a', e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ''),
        n((n.s = 44));
})([
    function (t, e, n) {
        var r = n(21)('wks'),
            o = n(23),
            a = n(1).Symbol,
            i = 'function' == typeof a;
        (t.exports = function (t) {
            return r[t] || (r[t] = (i && a[t]) || (i ? a : o)('Symbol.' + t));
        }).store = r;
    },
    function (t, e) {
        var n = (t.exports = 'undefined' != typeof window && window.Math == Math ? window : 'undefined' != typeof self && self.Math == Math ? self : Function('return this')());
        'number' == typeof __g && (__g = n);
    },
    function (t, e, n) {
        var r = n(8);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + ' is not an object!');
            return t;
        };
    },
    function (t, e, n) {
        t.exports = !n(9)(function () {
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
    function (t, e, n) {
        var r = n(6),
            o = n(33);
        t.exports = n(3)
            ? function (t, e, n) {
                  return r.f(t, e, o(1, n));
              }
            : function (t, e, n) {
                  return (t[e] = n), t;
              };
    },
    function (t, e, n) {
        var r = n(1),
            o = n(4),
            a = n(14),
            i = n(23)('src'),
            c = n(53),
            u = ('' + c).split('toString');
        (n(7).inspectSource = function (t) {
            return c.call(t);
        }),
            (t.exports = function (t, e, n, c) {
                var s = 'function' == typeof n;
                s && (a(n, 'name') || o(n, 'name', e)),
                    t[e] !== n &&
                        (s && (a(n, i) || o(n, i, t[e] ? '' + t[e] : u.join(String(e)))), t === r ? (t[e] = n) : c ? (t[e] ? (t[e] = n) : o(t, e, n)) : (delete t[e], o(t, e, n)));
            })(Function.prototype, 'toString', function () {
                return ('function' == typeof this && this[i]) || c.call(this);
            });
    },
    function (t, e, n) {
        var r = n(2),
            o = n(47),
            a = n(48),
            i = Object.defineProperty;
        e.f = n(3)
            ? Object.defineProperty
            : function (t, e, n) {
                  if ((r(t), (e = a(e, !0)), r(n), o))
                      try {
                          return i(t, e, n);
                      } catch (t) {}
                  if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!');
                  return 'value' in n && (t[e] = n.value), t;
              };
    },
    function (t, e) {
        var n = (t.exports = {version: '2.6.11'});
        'number' == typeof __e && (__e = n);
    },
    function (t, e) {
        t.exports = function (t) {
            return 'object' == typeof t ? null !== t : 'function' == typeof t;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t;
        };
    },
    function (t, e, n) {
        var r = n(1),
            o = n(7),
            a = n(4),
            i = n(5),
            c = n(15),
            u = function (t, e, n) {
                var s,
                    l,
                    f,
                    p,
                    d = t & u.F,
                    m = t & u.G,
                    h = t & u.S,
                    v = t & u.P,
                    g = t & u.B,
                    y = m ? r : h ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                    _ = m ? o : o[e] || (o[e] = {}),
                    x = _.prototype || (_.prototype = {});
                for (s in (m && (n = e), n))
                    (f = ((l = !d && y && void 0 !== y[s]) ? y : n)[s]),
                        (p = g && l ? c(f, r) : v && 'function' == typeof f ? c(Function.call, f) : f),
                        y && i(y, s, f, t & u.U),
                        _[s] != f && a(_, s, p),
                        v && x[s] != f && (x[s] = f);
            };
        (r.core = o), (u.F = 1), (u.G = 2), (u.S = 4), (u.P = 8), (u.B = 16), (u.W = 32), (u.U = 64), (u.R = 128), (t.exports = u);
    },
    function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e);
        };
    },
    function (t, e, n) {
        var r = n(16);
        t.exports = function (t, e, n) {
            if ((r(t), void 0 === e)) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n);
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r);
                    };
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o);
                    };
            }
            return function () {
                return t.apply(e, arguments);
            };
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if ('function' != typeof t) throw TypeError(t + ' is not a function!');
            return t;
        };
    },
    function (t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
        };
    },
    function (t, e, n) {
        var r = n(11),
            o = n(0)('toStringTag'),
            a =
                'Arguments' ==
                r(
                    (function () {
                        return arguments;
                    })()
                );
        t.exports = function (t) {
            var e, n, i;
            return void 0 === t
                ? 'Undefined'
                : null === t
                ? 'Null'
                : 'string' ==
                  typeof (n = (function (t, e) {
                      try {
                          return t[e];
                      } catch (t) {}
                  })((e = Object(t)), o))
                ? n
                : a
                ? r(e)
                : 'Object' == (i = r(e)) && 'function' == typeof e.callee
                ? 'Arguments'
                : i;
        };
    },
    function (t, e, n) {
        var r = n(8),
            o = n(1).document,
            a = r(o) && r(o.createElement);
        t.exports = function (t) {
            return a ? o.createElement(t) : {};
        };
    },
    function (t, e, n) {
        'use strict';
        var r = n(49),
            o = n(50),
            a = n(10),
            i = n(24);
        (t.exports = n(52)(
            Array,
            'Array',
            function (t, e) {
                (this._t = i(t)), (this._i = 0), (this._k = e);
            },
            function () {
                var t = this._t,
                    e = this._k,
                    n = this._i++;
                return !t || n >= t.length ? ((this._t = void 0), o(1)) : o(0, 'keys' == e ? n : 'values' == e ? t[n] : [n, t[n]]);
            },
            'values'
        )),
            (a.Arguments = a.Array),
            r('keys'),
            r('values'),
            r('entries');
    },
    function (t, e, n) {
        var r = n(7),
            o = n(1),
            a = o['__core-js_shared__'] || (o['__core-js_shared__'] = {});
        (t.exports = function (t, e) {
            return a[t] || (a[t] = void 0 !== e ? e : {});
        })('versions', []).push({version: r.version, mode: n(22) ? 'pure' : 'global', copyright: '© 2019 Denis Pushkarev (zloirock.ru)'});
    },
    function (t, e) {
        t.exports = !1;
    },
    function (t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function (t) {
            return 'Symbol('.concat(void 0 === t ? '' : t, ')_', (++n + r).toString(36));
        };
    },
    function (t, e, n) {
        var r = n(51),
            o = n(12);
        t.exports = function (t) {
            return r(o(t));
        };
    },
    function (t, e, n) {
        var r = n(57),
            o = n(34);
        t.exports =
            Object.keys ||
            function (t) {
                return r(t, o);
            };
    },
    function (t, e, n) {
        var r = n(17),
            o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0;
        };
    },
    function (t, e, n) {
        var r = n(21)('keys'),
            o = n(23);
        t.exports = function (t) {
            return r[t] || (r[t] = o(t));
        };
    },
    function (t, e, n) {
        var r = n(6).f,
            o = n(14),
            a = n(0)('toStringTag');
        t.exports = function (t, e, n) {
            t && !o((t = n ? t : t.prototype), a) && r(t, a, {configurable: !0, value: e});
        };
    },
    function (t, e, n) {
        var r = n(12);
        t.exports = function (t) {
            return Object(r(t));
        };
    },
    function (t, e, n) {
        'use strict';
        var r = n(18),
            o = {};
        (o[n(0)('toStringTag')] = 'z'),
            o + '' != '[object z]' &&
                n(5)(
                    Object.prototype,
                    'toString',
                    function () {
                        return '[object ' + r(this) + ']';
                    },
                    !0
                );
    },
    function (t, e, n) {
        'use strict';
        var r = n(2);
        t.exports = function () {
            var t = r(this),
                e = '';
            return t.global && (e += 'g'), t.ignoreCase && (e += 'i'), t.multiline && (e += 'm'), t.unicode && (e += 'u'), t.sticky && (e += 'y'), e;
        };
    },
    function (t, e, n) {
        for (
            var r = n(20),
                o = n(25),
                a = n(5),
                i = n(1),
                c = n(4),
                u = n(10),
                s = n(0),
                l = s('iterator'),
                f = s('toStringTag'),
                p = u.Array,
                d = {
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
                m = o(d),
                h = 0;
            h < m.length;
            h++
        ) {
            var v,
                g = m[h],
                y = d[g],
                _ = i[g],
                x = _ && _.prototype;
            if (x && (x[l] || c(x, l, p), x[f] || c(x, f, g), (u[g] = p), y)) for (v in r) x[v] || a(x, v, r[v], !0);
        }
    },
    function (t, e) {
        t.exports = function (t, e) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e};
        };
    },
    function (t, e) {
        t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
    },
    function (t, e, n) {
        var r = n(1).document;
        t.exports = r && r.documentElement;
    },
    function (t, e, n) {
        var r = n(29),
            o = n(25);
        n(61)('keys', function () {
            return function (t) {
                return o(r(t));
            };
        });
    },
    function (t, e, n) {
        'use strict';
        t.exports = function () {
            return {path: 'https://static.hotelsforhope.com/ares'};
        };
    },
    function (t, e, n) {
        'use strict';
        function r(t, e, n, r, o, a, i) {
            try {
                var c = t[a](i),
                    u = c.value;
            } catch (t) {
                return void n(t);
            }
            c.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        function o(t) {
            return function () {
                var e = this,
                    n = arguments;
                return new Promise(function (o, a) {
                    var i = t.apply(e, n);
                    function c(t) {
                        r(i, o, a, c, u, 'next', t);
                    }
                    function u(t) {
                        r(i, o, a, c, u, 'throw', t);
                    }
                    c(void 0);
                });
            };
        }
        function a(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
        }
        Object.defineProperty(e, '__esModule', {value: !0}), (e.default = void 0), n(63), n(69), n(32), n(20), n(36), n(40), n(30), n(43);
        var i = n(85),
            c = (function () {
                function t() {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
                    })(this, t);
                }
                var e, n, r, c, u, s, l, f, p, d, m, h, v;
                return (
                    (e = t),
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
                                ((v = o(
                                    regeneratorRuntime.mark(function t(e, n, r) {
                                        return regeneratorRuntime.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return t.abrupt(
                                                            'return',
                                                            new Promise(function (t) {
                                                                var o = document.querySelector(n);
                                                                o && null != o && (o.insertAdjacentHTML(r, e), t());
                                                            })
                                                        );
                                                    case 1:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )),
                                function (t, e, n) {
                                    return v.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'updateAttribute',
                            value: function (t, e, n) {
                                var r = document.querySelectorAll(t);
                                r &&
                                    r.forEach(function (t, r) {
                                        t.setAttribute(n, e);
                                    });
                            },
                        },
                        {
                            key: 'getAttribute',
                            value: function (t, e) {
                                if (document.querySelector(t)) return document.querySelector(t).getAttribute(e);
                            },
                        },
                        {
                            key: 'updateHTML',
                            value: function (t, e) {
                                var n = document.querySelectorAll(t);
                                n &&
                                    n.forEach(function (t, n) {
                                        t.innerHTML = e;
                                    });
                            },
                        },
                        {
                            key: 'appendToParent',
                            value: function (t, e) {
                                var n = document.querySelector(t),
                                    r = document.querySelector(e);
                                n && r && r.appendChild(n);
                            },
                        },
                        {
                            key: 'waitForSelectorInDOM',
                            value:
                                ((h = o(
                                    regeneratorRuntime.mark(function t(e) {
                                        return regeneratorRuntime.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return t.abrupt(
                                                            'return',
                                                            new Promise(function (t) {
                                                                var n = setInterval(function () {
                                                                    var r = document.querySelector(e);
                                                                    if (r) return t(r), clearInterval(n), r;
                                                                }, 500);
                                                            })
                                                        );
                                                    case 1:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )),
                                function (t) {
                                    return h.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'waitForTextInDOM',
                            value:
                                ((m = o(
                                    regeneratorRuntime.mark(function t(e, n) {
                                        return regeneratorRuntime.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return t.abrupt(
                                                            'return',
                                                            new Promise(function (t) {
                                                                var r = setInterval(function () {
                                                                    var o = document.querySelector(e).textContent;
                                                                    if (o === n) return t(o), clearInterval(r), o;
                                                                }, 500);
                                                            })
                                                        );
                                                    case 1:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )),
                                function (t, e) {
                                    return m.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'moveElementIntoExistingWrapper',
                            value: function (t, e, n) {
                                document.querySelector(e) && document.querySelector(t) && document.querySelector(e).insertAdjacentElement(n, document.querySelector(t));
                            },
                        },
                        {
                            key: 'moveOrphanedElementsIntoNewWrapper',
                            value:
                                ((d = o(
                                    regeneratorRuntime.mark(function t(e, n, r, o) {
                                        return regeneratorRuntime.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return t.abrupt(
                                                            'return',
                                                            new Promise(function (t) {
                                                                document.querySelector(r) &&
                                                                    (document.querySelector(r).insertAdjacentHTML(o, '<div class id="'.concat(n, '"></div>')),
                                                                    e.forEach(function (e) {
                                                                        document.getElementById(n).insertAdjacentElement('beforeEnd', e), t();
                                                                    }));
                                                            })
                                                        );
                                                    case 1:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )),
                                function (t, e, n, r) {
                                    return d.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'createWrapper',
                            value:
                                ((p = o(
                                    regeneratorRuntime.mark(function t(e, n, r, o) {
                                        var a;
                                        return regeneratorRuntime.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        if ((a = document.createElement('div'))) {
                                                            t.next = 3;
                                                            break;
                                                        }
                                                        return t.abrupt('return');
                                                    case 3:
                                                        a.setAttribute('class', r),
                                                            Array.prototype.forEach.call(document.querySelectorAll(e), function (t) {
                                                                a.appendChild(t);
                                                            }),
                                                            document.querySelector(n).insertAdjacentElement(o, a);
                                                    case 6:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )),
                                function (t, e, n, r) {
                                    return p.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'createModal',
                            value: function (t, e, n, r, o) {
                                n &&
                                    (document.querySelector(r).insertAdjacentHTML(o, '<span class="open-modal">Show '.concat(e, '</span>')),
                                    document.body.insertAdjacentHTML(
                                        'beforeEnd',
                                        '<div class="modal-overlay"><div class="modal-container"><div class="modal-header"><h3>'.concat(
                                            e,
                                            '</h3><span class="close-modal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="modal-content"></div></div></div>'
                                        )
                                    ),
                                    t.forEach(function (t) {
                                        document.querySelector('.modal-content').insertAdjacentElement('beforeEnd', t);
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
                                ((f = o(
                                    regeneratorRuntime.mark(function t(e) {
                                        var n, r, o, a;
                                        return regeneratorRuntime.wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (
                                                                (o = function (t) {
                                                                    if (t.matches && !r)
                                                                        try {
                                                                            Object.keys(e).forEach(function (t) {
                                                                                n.insertAdjacentHTML(
                                                                                    e[t].insertPosition,
                                                                                    '<img class="'.concat(e[t].className, '" src="').concat(e[t].imageUrl, '">')
                                                                                ),
                                                                                    (r = !0);
                                                                            });
                                                                        } catch (t) {
                                                                            console.error(t);
                                                                        }
                                                                }),
                                                                (t.next = 3),
                                                                this.waitForSelectorInDOM('header')
                                                            );
                                                        case 3:
                                                            (n = document.querySelector('header')), (a = window.matchMedia('(min-width: 1200px)')), o(a), a.addListener(o);
                                                        case 7:
                                                        case 'end':
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            this
                                        );
                                    })
                                )),
                                function (t) {
                                    return f.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'emailVerificationSetup',
                            value: function () {
                                var t = document.createElement('script');
                                (t.text =
                                    "\n            const DeBounce_APIKEY = 'public_T0tSVklSNEZRTEtkc1c5MFZoUWhKZz09';\n            const DeBounce_BlockFreeEmails = 'false';\n        "),
                                    document.body.appendChild(t);
                                var e = document.createElement('script');
                                e.setAttribute('src', 'https://cdn.debounce.io/widget/DeBounce.js'), e.setAttribute('async', !0), document.body.appendChild(e);
                            },
                        },
                        {
                            key: 'createDropdownMenu',
                            value: function (t, e, n, r) {
                                var o = document.querySelector(t),
                                    a = document.querySelector(r);
                                if (o && a) {
                                    a.insertAdjacentHTML('beforeEnd', '<style>'.concat(n, '{display: none;}').concat(r, '{position: relative;}</style>').concat(e.outerHTML));
                                    var i = document.querySelector(n);
                                    document.addEventListener('click', function (t) {
                                        var e = t.target;
                                        e === o && i.classList.toggle('show-dropdown'),
                                            document.querySelector(''.concat(n, '.show-dropdown')) && e !== o && i.classList.toggle('show-dropdown');
                                    });
                                }
                            },
                        },
                        {
                            key: 'addPropThumbTag',
                            value: function (t, e) {
                                !document.querySelector('#theArnProperty'.concat(e, ' .ArnPropThumb > .propThumbTag')) &&
                                    document.querySelector('#theArnProperty'.concat(e)) &&
                                    document
                                        .querySelector('#theArnProperty'.concat(e, ' .ArnPropThumb'))
                                        .insertAdjacentHTML('afterbegin', '<div class="propThumbTag">'.concat(t, '</div>'));
                            },
                        },
                        {
                            key: 'ratesComingSoon',
                            value:
                                ((l = o(
                                    regeneratorRuntime.mark(function t(e) {
                                        return regeneratorRuntime.wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            if (document.querySelector('.SearchHotels')) {
                                                                t.next = 2;
                                                                break;
                                                            }
                                                            return t.abrupt('return');
                                                        case 2:
                                                            return (t.next = 4), this.waitForSelectorInDOM('.pollingFinished');
                                                        case 4:
                                                            e.forEach(function (t) {
                                                                document.querySelector('#theArnProperty'.concat(t, ' .ArnLimitedAvail')) &&
                                                                    (document.querySelector('#theArnProperty'.concat(t, ' .ArnLimitedAvail')).textContent = 'Rates Coming Soon');
                                                            });
                                                        case 5:
                                                        case 'end':
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            this
                                        );
                                    })
                                )),
                                function (t) {
                                    return l.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'addClass',
                            value: function (t, e) {
                                document.querySelector('.'.concat(t)).classList.add(e);
                            },
                        },
                        {
                            key: 'getMetaTagContent',
                            value: function (t) {
                                if (document.querySelector('meta[name="'.concat(t, '"]'))) return document.querySelector('meta[name="'.concat(t, '"]')).content;
                            },
                        },
                        {
                            key: 'parseJSON',
                            value: function (t) {
                                if (t) return JSON.parse(t);
                            },
                        },
                        {
                            key: 'getPageName',
                            value: function () {
                                var t,
                                    e = document.body;
                                return (
                                    e.classList.contains('SearchHotels') && !e.classList.contains('HoldRoomsForm') && (t = 'search-results'),
                                    e.classList.contains('SinglePropDetail') && (t = 'property-detail'),
                                    e.classList.contains('CheckOutForm') && (t = 'checkout'),
                                    e.classList.contains('ConfirmationForm') && (t = 'confirmation'),
                                    e.classList.contains('RootBody') && (t = 'landing-page'),
                                    e.classList.contains('WBFaq') && (t = 'faq'),
                                    e.classList.contains('WBTermsAndConditions') && (t = 'terms-conditions'),
                                    e.classList.contains('WBPrivacyPolicy') && (t = 'privacy-policy'),
                                    e.classList.contains('WBRateGuaranteeForm2') && (t = 'lrg-page'),
                                    e.classList.contains('WBValidatedRegistrationForm') && (t = 'cug-registration'),
                                    e.classList.contains('HoldRoomsForm') && e.classList.contains('SearchHotels') && (t = 'hold-rooms'),
                                    t
                                );
                            },
                        },
                        {
                            key: 'getElementTextContent',
                            value: function (t) {
                                if (document.querySelector(t)) return document.querySelector(t).textContent;
                            },
                        },
                        {
                            key: 'fetchJSON',
                            value: function (t) {
                                return function () {
                                    fetch(t)
                                        .then(function (t) {
                                            if (!t.ok) throw t;
                                            return t.json();
                                        })
                                        .catch(function (e) {
                                            e.text().then(function (e) {
                                                console.error('Could not fetch json from '.concat(t), e);
                                            });
                                        });
                                };
                            },
                        },
                        {
                            key: 'fetchHTMLFromFile',
                            value:
                                ((s = o(
                                    regeneratorRuntime.mark(function t(e) {
                                        var n;
                                        return regeneratorRuntime.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            (n = ''),
                                                            (t.next = 3),
                                                            fetch(e)
                                                                .then(function (t) {
                                                                    if (!t.ok) throw new Error('Not 2xx response');
                                                                    n = t.text();
                                                                })
                                                                .catch(function (t) {
                                                                    (n = t.toString()), console.error('Could not fetch text from '.concat(e), t.toString());
                                                                })
                                                        );
                                                    case 3:
                                                        return t.abrupt('return', n);
                                                    case 4:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )),
                                function (t) {
                                    return s.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'removeMaskedElementFromTabIndex',
                            value: function (t) {
                                var e = document.querySelector(t);
                                e && e.setAttribute('tabindex', -1);
                            },
                        },
                        {
                            key: 'calculateNights',
                            value: function () {
                                var t = i(document.querySelector('input#theCheckIn').value).format('MM/DD/YYYY'),
                                    e = i(document.querySelector('input#theCheckOut').value).format('MM/DD/YYYY');
                                return i(e).diff(i(t), 'days');
                            },
                        },
                        {
                            key: 'matchMediaQuery',
                            value: function (t) {
                                return window.matchMedia('('.concat(t, ')')).matches;
                            },
                        },
                        {
                            key: 'selectCheckboxOnLabelClick',
                            value: function (t) {
                                document.querySelectorAll(t).forEach(function (t) {
                                    if (t.querySelector('input[type="checkbox"]') && t) {
                                        var e = t.querySelector('span');
                                        e || (e = t.querySelector('label')),
                                            e.addEventListener('click', function (e) {
                                                t.querySelector('input[type="checkbox"]').click();
                                            });
                                    }
                                });
                            },
                        },
                        {
                            key: 'addAttributeToInput',
                            value:
                                ((u = o(
                                    regeneratorRuntime.mark(function t(e, n, r, o) {
                                        return regeneratorRuntime.wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            if (document.querySelector(o)) {
                                                                t.next = 2;
                                                                break;
                                                            }
                                                            return t.abrupt('return');
                                                        case 2:
                                                            return (t.prev = 2), (t.next = 5), this.waitForSelectorInDOM(e);
                                                        case 5:
                                                            document.querySelector(e).setAttribute(r, n), (t.next = 11);
                                                            break;
                                                        case 8:
                                                            (t.prev = 8), (t.t0 = t.catch(2)), console.error(t.t0);
                                                        case 11:
                                                        case 'end':
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            this,
                                            [[2, 8]]
                                        );
                                    })
                                )),
                                function (t, e, n, r) {
                                    return u.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'replaceSpecificText',
                            value: function (t, e, n) {
                                if (document.querySelector(t)) {
                                    var r = document.querySelector(t).textContent.replace(e, n);
                                    document.querySelector(t).textContent = r;
                                }
                            },
                        },
                        {
                            key: 'checkForPastDate',
                            value: function (t) {
                                t || console.error('No date passed into checkForPastDate()');
                                var e = i();
                                return i(t).diff(e, 'milliseconds') < 0;
                            },
                        },
                        {
                            key: 'percentDiff',
                            value: function (t, e) {
                                return Math.round(((t - e) / t) * 100);
                            },
                        },
                        {
                            key: 'prepopulateDatePopupWithTodaysDate',
                            value:
                                ((c = o(
                                    regeneratorRuntime.mark(function t() {
                                        var e, n;
                                        return regeneratorRuntime.wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            if (document.querySelector('.SearchHotels')) {
                                                                t.next = 2;
                                                                break;
                                                            }
                                                            return t.abrupt('return');
                                                        case 2:
                                                            return (t.next = 4), this.waitForSelectorInDOM('#theQuickCheckIn');
                                                        case 4:
                                                            if (
                                                                ((e = document.querySelector('#theDatePrompt #theQuickCheckIn')),
                                                                (n = document.querySelector('#theDatePrompt #theQuickCheckOut')),
                                                                e && n)
                                                            ) {
                                                                t.next = 8;
                                                                break;
                                                            }
                                                            return t.abrupt('return');
                                                        case 8:
                                                            e.setAttribute('value', i().format('MM/DD/YYYY')), n.setAttribute('value', i().add(1, 'day').format('MM/DD/YYYY'));
                                                        case 10:
                                                        case 'end':
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            this
                                        );
                                    })
                                )),
                                function () {
                                    return c.apply(this, arguments);
                                }),
                        },
                    ]) && a(e.prototype, n),
                    r && a(e, r),
                    t
                );
            })();
        e.default = c;
    },
    function (t, e, n) {
        'use strict';
        var r,
            o,
            a = n(31),
            i = RegExp.prototype.exec,
            c = String.prototype.replace,
            u = i,
            s = ((r = /a/), (o = /b*/g), i.call(r, 'a'), i.call(o, 'a'), 0 !== r.lastIndex || 0 !== o.lastIndex),
            l = void 0 !== /()??/.exec('')[1];
        (s || l) &&
            (u = function (t) {
                var e,
                    n,
                    r,
                    o,
                    u = this;
                return (
                    l && (n = new RegExp('^' + u.source + '$(?!\\s)', a.call(u))),
                    s && (e = u.lastIndex),
                    (r = i.call(u, t)),
                    s && r && (u.lastIndex = u.global ? r.index + r[0].length : e),
                    l &&
                        r &&
                        r.length > 1 &&
                        c.call(r[0], n, function () {
                            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0);
                        }),
                    r
                );
            }),
            (t.exports = u);
    },
    function (t, e, n) {
        'use strict';
        var r,
            o,
            a,
            i,
            c = n(22),
            u = n(1),
            s = n(15),
            l = n(18),
            f = n(13),
            p = n(8),
            d = n(16),
            m = n(71),
            h = n(72),
            v = n(76),
            g = n(41).set,
            y = n(78)(),
            _ = n(42),
            x = n(79),
            b = n(80),
            S = n(81),
            w = u.TypeError,
            k = u.process,
            M = k && k.versions,
            P = (M && M.v8) || '',
            L = u.Promise,
            j = 'process' == l(k),
            E = function () {},
            O = (o = _.f),
            A = !!(function () {
                try {
                    var t = L.resolve(1),
                        e = ((t.constructor = {})[n(0)('species')] = function (t) {
                            t(E, E);
                        });
                    return (j || 'function' == typeof PromiseRejectionEvent) && t.then(E) instanceof e && 0 !== P.indexOf('6.6') && -1 === b.indexOf('Chrome/66');
                } catch (t) {}
            })(),
            T = function (t) {
                var e;
                return !(!p(t) || 'function' != typeof (e = t.then)) && e;
            },
            I = function (t, e) {
                if (!t._n) {
                    t._n = !0;
                    var n = t._c;
                    y(function () {
                        for (
                            var r = t._v,
                                o = 1 == t._s,
                                a = 0,
                                i = function (e) {
                                    var n,
                                        a,
                                        i,
                                        c = o ? e.ok : e.fail,
                                        u = e.resolve,
                                        s = e.reject,
                                        l = e.domain;
                                    try {
                                        c
                                            ? (o || (2 == t._h && q(t), (t._h = 1)),
                                              !0 === c ? (n = r) : (l && l.enter(), (n = c(r)), l && (l.exit(), (i = !0))),
                                              n === e.promise ? s(w('Promise-chain cycle')) : (a = T(n)) ? a.call(n, u, s) : u(n))
                                            : s(r);
                                    } catch (t) {
                                        l && !i && l.exit(), s(t);
                                    }
                                };
                            n.length > a;

                        )
                            i(n[a++]);
                        (t._c = []), (t._n = !1), e && !t._h && $(t);
                    });
                }
            },
            $ = function (t) {
                g.call(u, function () {
                    var e,
                        n,
                        r,
                        o = t._v,
                        a = D(t);
                    if (
                        (a &&
                            ((e = x(function () {
                                j
                                    ? k.emit('unhandledRejection', o, t)
                                    : (n = u.onunhandledrejection)
                                    ? n({promise: t, reason: o})
                                    : (r = u.console) && r.error && r.error('Unhandled promise rejection', o);
                            })),
                            (t._h = j || D(t) ? 2 : 1)),
                        (t._a = void 0),
                        a && e.e)
                    )
                        throw e.v;
                });
            },
            D = function (t) {
                return 1 !== t._h && 0 === (t._a || t._c).length;
            },
            q = function (t) {
                g.call(u, function () {
                    var e;
                    j ? k.emit('rejectionHandled', t) : (e = u.onrejectionhandled) && e({promise: t, reason: t._v});
                });
            },
            R = function (t) {
                var e = this;
                e._d || ((e._d = !0), ((e = e._w || e)._v = t), (e._s = 2), e._a || (e._a = e._c.slice()), I(e, !0));
            },
            C = function (t) {
                var e,
                    n = this;
                if (!n._d) {
                    (n._d = !0), (n = n._w || n);
                    try {
                        if (n === t) throw w("Promise can't be resolved itself");
                        (e = T(t))
                            ? y(function () {
                                  var r = {_w: n, _d: !1};
                                  try {
                                      e.call(t, s(C, r, 1), s(R, r, 1));
                                  } catch (t) {
                                      R.call(r, t);
                                  }
                              })
                            : ((n._v = t), (n._s = 1), I(n, !1));
                    } catch (t) {
                        R.call({_w: n, _d: !1}, t);
                    }
                }
            };
        A ||
            ((L = function (t) {
                m(this, L, 'Promise', '_h'), d(t), r.call(this);
                try {
                    t(s(C, this, 1), s(R, this, 1));
                } catch (t) {
                    R.call(this, t);
                }
            }),
            ((r = function (t) {
                (this._c = []), (this._a = void 0), (this._s = 0), (this._d = !1), (this._v = void 0), (this._h = 0), (this._n = !1);
            }).prototype = n(82)(L.prototype, {
                then: function (t, e) {
                    var n = O(v(this, L));
                    return (
                        (n.ok = 'function' != typeof t || t),
                        (n.fail = 'function' == typeof e && e),
                        (n.domain = j ? k.domain : void 0),
                        this._c.push(n),
                        this._a && this._a.push(n),
                        this._s && I(this, !1),
                        n.promise
                    );
                },
                catch: function (t) {
                    return this.then(void 0, t);
                },
            })),
            (a = function () {
                var t = new r();
                (this.promise = t), (this.resolve = s(C, t, 1)), (this.reject = s(R, t, 1));
            }),
            (_.f = O = function (t) {
                return t === L || t === i ? new a(t) : o(t);
            })),
            f(f.G + f.W + f.F * !A, {Promise: L}),
            n(28)(L, 'Promise'),
            n(83)('Promise'),
            (i = n(7).Promise),
            f(f.S + f.F * !A, 'Promise', {
                reject: function (t) {
                    var e = O(this);
                    return (0, e.reject)(t), e.promise;
                },
            }),
            f(f.S + f.F * (c || !A), 'Promise', {
                resolve: function (t) {
                    return S(c && this === i ? L : this, t);
                },
            }),
            f(
                f.S +
                    f.F *
                        !(
                            A &&
                            n(84)(function (t) {
                                L.all(t).catch(E);
                            })
                        ),
                'Promise',
                {
                    all: function (t) {
                        var e = this,
                            n = O(e),
                            r = n.resolve,
                            o = n.reject,
                            a = x(function () {
                                var n = [],
                                    a = 0,
                                    i = 1;
                                h(t, !1, function (t) {
                                    var c = a++,
                                        u = !1;
                                    n.push(void 0),
                                        i++,
                                        e.resolve(t).then(function (t) {
                                            u || ((u = !0), (n[c] = t), --i || r(n));
                                        }, o);
                                }),
                                    --i || r(n);
                            });
                        return a.e && o(a.v), n.promise;
                    },
                    race: function (t) {
                        var e = this,
                            n = O(e),
                            r = n.reject,
                            o = x(function () {
                                h(t, !1, function (t) {
                                    e.resolve(t).then(n.resolve, r);
                                });
                            });
                        return o.e && r(o.v), n.promise;
                    },
                }
            );
    },
    function (t, e, n) {
        var r,
            o,
            a,
            i = n(15),
            c = n(77),
            u = n(35),
            s = n(19),
            l = n(1),
            f = l.process,
            p = l.setImmediate,
            d = l.clearImmediate,
            m = l.MessageChannel,
            h = l.Dispatch,
            v = 0,
            g = {},
            y = function () {
                var t = +this;
                if (g.hasOwnProperty(t)) {
                    var e = g[t];
                    delete g[t], e();
                }
            },
            _ = function (t) {
                y.call(t.data);
            };
        (p && d) ||
            ((p = function (t) {
                for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
                return (
                    (g[++v] = function () {
                        c('function' == typeof t ? t : Function(t), e);
                    }),
                    r(v),
                    v
                );
            }),
            (d = function (t) {
                delete g[t];
            }),
            'process' == n(11)(f)
                ? (r = function (t) {
                      f.nextTick(i(y, t, 1));
                  })
                : h && h.now
                ? (r = function (t) {
                      h.now(i(y, t, 1));
                  })
                : m
                ? ((a = (o = new m()).port2), (o.port1.onmessage = _), (r = i(a.postMessage, a, 1)))
                : l.addEventListener && 'function' == typeof postMessage && !l.importScripts
                ? ((r = function (t) {
                      l.postMessage(t + '', '*');
                  }),
                  l.addEventListener('message', _, !1))
                : (r =
                      'onreadystatechange' in s('script')
                          ? function (t) {
                                u.appendChild(s('script')).onreadystatechange = function () {
                                    u.removeChild(this), y.call(t);
                                };
                            }
                          : function (t) {
                                setTimeout(i(y, t, 1), 0);
                            })),
            (t.exports = {set: p, clear: d});
    },
    function (t, e, n) {
        'use strict';
        var r = n(16);
        function o(t) {
            var e, n;
            (this.promise = new t(function (t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError('Bad Promise constructor');
                (e = t), (n = r);
            })),
                (this.resolve = r(e)),
                (this.reject = r(n));
        }
        t.exports.f = function (t) {
            return new o(t);
        };
    },
    function (t, e, n) {
        var r = (function (t) {
            'use strict';
            var e = Object.prototype,
                n = e.hasOwnProperty,
                r = 'function' == typeof Symbol ? Symbol : {},
                o = r.iterator || '@@iterator',
                a = r.asyncIterator || '@@asyncIterator',
                i = r.toStringTag || '@@toStringTag';
            function c(t, e, n) {
                return Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}), t[e];
            }
            try {
                c({}, '');
            } catch (t) {
                c = function (t, e, n) {
                    return (t[e] = n);
                };
            }
            function u(t, e, n, r) {
                var o = e && e.prototype instanceof f ? e : f,
                    a = Object.create(o.prototype),
                    i = new w(r || []);
                return (
                    (a._invoke = (function (t, e, n) {
                        var r = 'suspendedStart';
                        return function (o, a) {
                            if ('executing' === r) throw new Error('Generator is already running');
                            if ('completed' === r) {
                                if ('throw' === o) throw a;
                                return M();
                            }
                            for (n.method = o, n.arg = a; ; ) {
                                var i = n.delegate;
                                if (i) {
                                    var c = x(i, n);
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
                                var u = s(t, e, n);
                                if ('normal' === u.type) {
                                    if (((r = n.done ? 'completed' : 'suspendedYield'), u.arg === l)) continue;
                                    return {value: u.arg, done: n.done};
                                }
                                'throw' === u.type && ((r = 'completed'), (n.method = 'throw'), (n.arg = u.arg));
                            }
                        };
                    })(t, n, i)),
                    a
                );
            }
            function s(t, e, n) {
                try {
                    return {type: 'normal', arg: t.call(e, n)};
                } catch (t) {
                    return {type: 'throw', arg: t};
                }
            }
            t.wrap = u;
            var l = {};
            function f() {}
            function p() {}
            function d() {}
            var m = {};
            m[o] = function () {
                return this;
            };
            var h = Object.getPrototypeOf,
                v = h && h(h(k([])));
            v && v !== e && n.call(v, o) && (m = v);
            var g = (d.prototype = f.prototype = Object.create(m));
            function y(t) {
                ['next', 'throw', 'return'].forEach(function (e) {
                    c(t, e, function (t) {
                        return this._invoke(e, t);
                    });
                });
            }
            function _(t, e) {
                var r;
                this._invoke = function (o, a) {
                    function i() {
                        return new e(function (r, i) {
                            !(function r(o, a, i, c) {
                                var u = s(t[o], t, a);
                                if ('throw' !== u.type) {
                                    var l = u.arg,
                                        f = l.value;
                                    return f && 'object' == typeof f && n.call(f, '__await')
                                        ? e.resolve(f.__await).then(
                                              function (t) {
                                                  r('next', t, i, c);
                                              },
                                              function (t) {
                                                  r('throw', t, i, c);
                                              }
                                          )
                                        : e.resolve(f).then(
                                              function (t) {
                                                  (l.value = t), i(l);
                                              },
                                              function (t) {
                                                  return r('throw', t, i, c);
                                              }
                                          );
                                }
                                c(u.arg);
                            })(o, a, r, i);
                        });
                    }
                    return (r = r ? r.then(i, i) : i());
                };
            }
            function x(t, e) {
                var n = t.iterator[e.method];
                if (void 0 === n) {
                    if (((e.delegate = null), 'throw' === e.method)) {
                        if (t.iterator.return && ((e.method = 'return'), (e.arg = void 0), x(t, e), 'throw' === e.method)) return l;
                        (e.method = 'throw'), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
                    }
                    return l;
                }
                var r = s(n, t.iterator, e.arg);
                if ('throw' === r.type) return (e.method = 'throw'), (e.arg = r.arg), (e.delegate = null), l;
                var o = r.arg;
                return o
                    ? o.done
                        ? ((e[t.resultName] = o.value), (e.next = t.nextLoc), 'return' !== e.method && ((e.method = 'next'), (e.arg = void 0)), (e.delegate = null), l)
                        : o
                    : ((e.method = 'throw'), (e.arg = new TypeError('iterator result is not an object')), (e.delegate = null), l);
            }
            function b(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
            }
            function S(t) {
                var e = t.completion || {};
                (e.type = 'normal'), delete e.arg, (t.completion = e);
            }
            function w(t) {
                (this.tryEntries = [{tryLoc: 'root'}]), t.forEach(b, this), this.reset(!0);
            }
            function k(t) {
                if (t) {
                    var e = t[o];
                    if (e) return e.call(t);
                    if ('function' == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            a = function e() {
                                for (; ++r < t.length; ) if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                                return (e.value = void 0), (e.done = !0), e;
                            };
                        return (a.next = a);
                    }
                }
                return {next: M};
            }
            function M() {
                return {value: void 0, done: !0};
            }
            return (
                (p.prototype = g.constructor = d),
                (d.constructor = p),
                (p.displayName = c(d, i, 'GeneratorFunction')),
                (t.isGeneratorFunction = function (t) {
                    var e = 'function' == typeof t && t.constructor;
                    return !!e && (e === p || 'GeneratorFunction' === (e.displayName || e.name));
                }),
                (t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : ((t.__proto__ = d), c(t, i, 'GeneratorFunction')), (t.prototype = Object.create(g)), t;
                }),
                (t.awrap = function (t) {
                    return {__await: t};
                }),
                y(_.prototype),
                (_.prototype[a] = function () {
                    return this;
                }),
                (t.AsyncIterator = _),
                (t.async = function (e, n, r, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new _(u(e, n, r, o), a);
                    return t.isGeneratorFunction(n)
                        ? i
                        : i.next().then(function (t) {
                              return t.done ? t.value : i.next();
                          });
                }),
                y(g),
                c(g, i, 'Generator'),
                (g[o] = function () {
                    return this;
                }),
                (g.toString = function () {
                    return '[object Generator]';
                }),
                (t.keys = function (t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return (
                        e.reverse(),
                        function n() {
                            for (; e.length; ) {
                                var r = e.pop();
                                if (r in t) return (n.value = r), (n.done = !1), n;
                            }
                            return (n.done = !0), n;
                        }
                    );
                }),
                (t.values = k),
                (w.prototype = {
                    constructor: w,
                    reset: function (t) {
                        if (
                            ((this.prev = 0),
                            (this.next = 0),
                            (this.sent = this._sent = void 0),
                            (this.done = !1),
                            (this.delegate = null),
                            (this.method = 'next'),
                            (this.arg = void 0),
                            this.tryEntries.forEach(S),
                            !t)
                        )
                            for (var e in this) 't' === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ('throw' === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;
                        function r(n, r) {
                            return (i.type = 'throw'), (i.arg = t), (e.next = n), r && ((e.method = 'next'), (e.arg = void 0)), !!r;
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ('root' === a.tryLoc) return r('end');
                            if (a.tryLoc <= this.prev) {
                                var c = n.call(a, 'catchLoc'),
                                    u = n.call(a, 'finallyLoc');
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                } else {
                                    if (!u) throw new Error('try statement without catch or finally');
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                                var a = o;
                                break;
                            }
                        }
                        a && ('break' === t || 'continue' === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return (i.type = t), (i.arg = e), a ? ((this.method = 'next'), (this.next = a.finallyLoc), l) : this.complete(i);
                    },
                    complete: function (t, e) {
                        if ('throw' === t.type) throw t.arg;
                        return (
                            'break' === t.type || 'continue' === t.type
                                ? (this.next = t.arg)
                                : 'return' === t.type
                                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                                : 'normal' === t.type && e && (this.next = e),
                            l
                        );
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), S(n), l;
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ('throw' === r.type) {
                                    var o = r.arg;
                                    S(n);
                                }
                                return o;
                            }
                        }
                        throw new Error('illegal catch attempt');
                    },
                    delegateYield: function (t, e, n) {
                        return (this.delegate = {iterator: k(t), resultName: e, nextLoc: n}), 'next' === this.method && (this.arg = void 0), l;
                    },
                }),
                t
            );
        })(t.exports);
        try {
            regeneratorRuntime = r;
        } catch (t) {
            Function('r', 'regeneratorRuntime = r')(r);
        }
    },
    function (t, e, n) {
        'use strict';
        n(45);
    },
    function (t, e, n) {
        'use strict';
        n(46), n(32), n(20), n(30), n(36);
        var r = a(n(62)),
            o = a(n(38));
        function a(t) {
            return t && t.__esModule ? t : {default: t};
        }
        (0, a(n(86)).default)(document.querySelector('meta[name="siteId"]').content);
        var i,
            c = new o.default();
        Object.keys(r.default).forEach(function (t) {
            var e = t.slice(-4);
            document
                .querySelector('#lower-section')
                .insertAdjacentHTML(
                    'beforebegin',
                    '\n            <div class="container" id="races-container">\n                <section>\n                    <h1>'
                        .concat(
                            e,
                            ' FIA Formula One World Championship&trade; Races</h1>\n                    <p>Choose your race below to see all available hotel options.</p>\n                    <fieldset>\n                        <h3 class="season">'
                        )
                        .concat(e, ' Races</h3>\n                        <div class="races-')
                        .concat(e, ' races">\n                        </div>\n                    </fieldset>\n                </section>\n            </div>\n            ')
                ),
                (function (t, e) {
                    var n = document.querySelector('.races-'.concat(e));
                    Object.keys(t).forEach(function (r) {
                        c.checkForPastDate(t[r].race_expiry) ||
                            n.insertAdjacentHTML(
                                'beforeend',
                                '\n                <div class="race">\n                    <div class="race-info">\n                        <div class="date">\n                            <div class="days">'
                                    .concat(t[r].days, '</div>\n                            <div class="month">')
                                    .concat(
                                        t[r].month,
                                        '</div>\n                        </div>\n                        <div class="race-location">\n                            <img class="country-flag" src="'
                                    )
                                    .concat(t[r].country_flag_url, '" alt="')
                                    .concat(
                                        t[r].flag_alt_text,
                                        ' flag">\n                            <div class="race-details">\n                                <div class="name">\n                                <span id="F1-title">Formula 1</span>\n                                <span id="mobile-year">'
                                    )
                                    .concat(e, '</span>\n                                <span id="sponsor">')
                                    .concat(t[r].sponsor, '</span>\n                                ')
                                    .concat(t[r].name, '\n                                <span id="desktop-year">')
                                    .concat(e, '</span>\n                                </div>\n                                <div class="location">')
                                    .concat(
                                        t[r].location,
                                        '</div>\n                            </div>\n                        </div>\n                    </div>\n                <a class="book-btn" target="_blank" href="'
                                    )
                                    .concat(
                                        t[r].book_url,
                                        '">Book Rooms <svg class="chevron" fill="none" height="12" id="i-chevron-right" stroke="#C21E26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="M4.5 10 L9 6 4.5 .75"></path> </svg></a>\n                <a class="mobile-book-btn" target="_blank" href="'
                                    )
                                    .concat(
                                        t[r].book_url,
                                        '"><svg class="chevron" fill="none" height="12" id="i-chevron-right" stroke="#C21E26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="M4.5 10 L9 6 4.5 .75"></path> </svg></a>\n            </div>\n        '
                                    )
                            );
                    });
                })(r.default[t], e);
        }),
            (document.querySelector('.footer-nav ul li:last-child a').href = 'https://events.hotelsforhope.com/v6/support?siteId=46973'),
            document.querySelector('.more').addEventListener('click', function () {
                document.querySelector('.more').classList.toggle('open'), document.querySelector('.mobile-privacy-links').classList.toggle('show');
            }),
            (document.querySelector('.logo').outerHTML =
                '\n        <span class="logo">\n            <img src="https://static.hotelsforhope.com/ares/clients/formula_1/images/logo.png" alt="F1 Rooms Logo">\n        </span>\n        '),
            (i = 'F1® Rooms'),
            (document.querySelector('title').textContent = i);
    },
    function (t, e, n) {
        var r = n(6).f,
            o = Function.prototype,
            a = /^\s*function ([^ (]*)/;
        'name' in o ||
            (n(3) &&
                r(o, 'name', {
                    configurable: !0,
                    get: function () {
                        try {
                            return ('' + this).match(a)[1];
                        } catch (t) {
                            return '';
                        }
                    },
                }));
    },
    function (t, e, n) {
        t.exports =
            !n(3) &&
            !n(9)(function () {
                return (
                    7 !=
                    Object.defineProperty(n(19)('div'), 'a', {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (t, e, n) {
        var r = n(8);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && 'function' == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
            if ('function' == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o;
            if (!e && 'function' == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (t, e, n) {
        var r = n(0)('unscopables'),
            o = Array.prototype;
        null == o[r] && n(4)(o, r, {}),
            (t.exports = function (t) {
                o[r][t] = !0;
            });
    },
    function (t, e) {
        t.exports = function (t, e) {
            return {value: e, done: !!t};
        };
    },
    function (t, e, n) {
        var r = n(11);
        t.exports = Object('z').propertyIsEnumerable(0)
            ? Object
            : function (t) {
                  return 'String' == r(t) ? t.split('') : Object(t);
              };
    },
    function (t, e, n) {
        'use strict';
        var r = n(22),
            o = n(13),
            a = n(5),
            i = n(4),
            c = n(10),
            u = n(54),
            s = n(28),
            l = n(60),
            f = n(0)('iterator'),
            p = !([].keys && 'next' in [].keys()),
            d = function () {
                return this;
            };
        t.exports = function (t, e, n, m, h, v, g) {
            u(n, e, m);
            var y,
                _,
                x,
                b = function (t) {
                    if (!p && t in M) return M[t];
                    switch (t) {
                        case 'keys':
                        case 'values':
                            return function () {
                                return new n(this, t);
                            };
                    }
                    return function () {
                        return new n(this, t);
                    };
                },
                S = e + ' Iterator',
                w = 'values' == h,
                k = !1,
                M = t.prototype,
                P = M[f] || M['@@iterator'] || (h && M[h]),
                L = P || b(h),
                j = h ? (w ? b('entries') : L) : void 0,
                E = ('Array' == e && M.entries) || P;
            if (
                (E && (x = l(E.call(new t()))) !== Object.prototype && x.next && (s(x, S, !0), r || 'function' == typeof x[f] || i(x, f, d)),
                w &&
                    P &&
                    'values' !== P.name &&
                    ((k = !0),
                    (L = function () {
                        return P.call(this);
                    })),
                (r && !g) || (!p && !k && M[f]) || i(M, f, L),
                (c[e] = L),
                (c[S] = d),
                h)
            )
                if (((y = {values: w ? L : b('values'), keys: v ? L : b('keys'), entries: j}), g)) for (_ in y) _ in M || a(M, _, y[_]);
                else o(o.P + o.F * (p || k), e, y);
            return y;
        };
    },
    function (t, e, n) {
        t.exports = n(21)('native-function-to-string', Function.toString);
    },
    function (t, e, n) {
        'use strict';
        var r = n(55),
            o = n(33),
            a = n(28),
            i = {};
        n(4)(i, n(0)('iterator'), function () {
            return this;
        }),
            (t.exports = function (t, e, n) {
                (t.prototype = r(i, {next: o(1, n)})), a(t, e + ' Iterator');
            });
    },
    function (t, e, n) {
        var r = n(2),
            o = n(56),
            a = n(34),
            i = n(27)('IE_PROTO'),
            c = function () {},
            u = function () {
                var t,
                    e = n(19)('iframe'),
                    r = a.length;
                for (
                    e.style.display = 'none',
                        n(35).appendChild(e),
                        e.src = 'javascript:',
                        (t = e.contentWindow.document).open(),
                        t.write('<script>document.F=Object</script>'),
                        t.close(),
                        u = t.F;
                    r--;

                )
                    delete u.prototype[a[r]];
                return u();
            };
        t.exports =
            Object.create ||
            function (t, e) {
                var n;
                return null !== t ? ((c.prototype = r(t)), (n = new c()), (c.prototype = null), (n[i] = t)) : (n = u()), void 0 === e ? n : o(n, e);
            };
    },
    function (t, e, n) {
        var r = n(6),
            o = n(2),
            a = n(25);
        t.exports = n(3)
            ? Object.defineProperties
            : function (t, e) {
                  o(t);
                  for (var n, i = a(e), c = i.length, u = 0; c > u; ) r.f(t, (n = i[u++]), e[n]);
                  return t;
              };
    },
    function (t, e, n) {
        var r = n(14),
            o = n(24),
            a = n(58)(!1),
            i = n(27)('IE_PROTO');
        t.exports = function (t, e) {
            var n,
                c = o(t),
                u = 0,
                s = [];
            for (n in c) n != i && r(c, n) && s.push(n);
            for (; e.length > u; ) r(c, (n = e[u++])) && (~a(s, n) || s.push(n));
            return s;
        };
    },
    function (t, e, n) {
        var r = n(24),
            o = n(26),
            a = n(59);
        t.exports = function (t) {
            return function (e, n, i) {
                var c,
                    u = r(e),
                    s = o(u.length),
                    l = a(i, s);
                if (t && n != n) {
                    for (; s > l; ) if ((c = u[l++]) != c) return !0;
                } else for (; s > l; l++) if ((t || l in u) && u[l] === n) return t || l || 0;
                return !t && -1;
            };
        };
    },
    function (t, e, n) {
        var r = n(17),
            o = Math.max,
            a = Math.min;
        t.exports = function (t, e) {
            return (t = r(t)) < 0 ? o(t + e, 0) : a(t, e);
        };
    },
    function (t, e, n) {
        var r = n(14),
            o = n(29),
            a = n(27)('IE_PROTO'),
            i = Object.prototype;
        t.exports =
            Object.getPrototypeOf ||
            function (t) {
                return (t = o(t)), r(t, a) ? t[a] : 'function' == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? i : null;
            };
    },
    function (t, e, n) {
        var r = n(13),
            o = n(7),
            a = n(9);
        t.exports = function (t, e) {
            var n = (o.Object || {})[t] || Object[t],
                i = {};
            (i[t] = e(n)),
                r(
                    r.S +
                        r.F *
                            a(function () {
                                n(1);
                            }),
                    'Object',
                    i
                );
        };
    },
    function (t, e, n) {
        'use strict';
        var r;
        Object.defineProperty(e, '__esModule', {value: !0}), (e.default = void 0);
        var o = new ((r = n(37)) && r.__esModule ? r : {default: r}).default(),
            a = {
                races_2020: {
                    russia: {
                        days: '25-27',
                        month: 'Sep',
                        race_expiry: '2020-09-27',
                        sponsor: 'VTB',
                        name: 'Russian Grand Prix',
                        location: 'Sochi, Russia',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/russia.jpg'),
                        flag_alt_text: 'Russian',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=36972&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Russia%202020',
                    },
                    portugal: {
                        days: '23-25',
                        month: 'Oct',
                        race_expiry: '2020-10-25',
                        sponsor: 'Heineken',
                        name: 'Portuguese Grand Prix',
                        location: 'Algarve, Portugal',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/portugal.jpg'),
                        flag_alt_text: 'Portugese',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=44099&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Portugal%202020',
                    },
                    turkey: {
                        days: '13-15',
                        month: 'Nov',
                        race_expiry: '2020-11-15',
                        sponsor: 'DHL',
                        name: 'Turkish Grand Prix',
                        location: 'Istanbul, Turkey',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/turkey.jpg'),
                        flag_alt_text: 'Turkish',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=44089&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Turkey%202020',
                    },
                    bahrain: {
                        days: '27-29',
                        month: 'Nov',
                        race_expiry: '2020-11-29',
                        sponsor: 'Gulf Air',
                        name: 'Bahrain Grand Prix',
                        location: 'Sakhir, Bahrain',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/bahrain.jpg'),
                        flag_alt_text: 'Bahrain',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=44125&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Bahrain%202020',
                    },
                    sakhir: {
                        days: '4-6',
                        month: 'Dec',
                        race_expiry: '2020-12-06',
                        sponsor: 'Rolex',
                        name: 'Sakhir Grand Prix',
                        location: 'Sakhir, Bahrain',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/bahrain.jpg'),
                        flag_alt_text: 'Bahrain',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=44126&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Sakhir%202020',
                    },
                    abu_dhabi: {
                        days: '11-13',
                        month: 'Dec',
                        race_expiry: '2020-12-13',
                        sponsor: 'Etihad Airways',
                        name: 'Abu Dhabi Grand Prix',
                        location: 'Yas Island, Abu Dhabi',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/abu-dhabi.jpg'),
                        flag_alt_text: 'United Arab Emirates',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=36977&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Abu%20Dhabi%202020',
                    },
                },
                races_2021: {
                    australia: {
                        days: '19-21',
                        month: 'Mar',
                        race_expiry: '2021-03-22',
                        sponsor: '',
                        name: 'Australian Grand Prix',
                        location: 'Melbourne, Australia',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/australia.jpg'),
                        flag_alt_text: 'Australian',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45297&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Australia%202021',
                    },
                    bahrain: {
                        days: '26-28',
                        month: 'Mar',
                        race_expiry: '2021-03-29',
                        sponsor: '',
                        name: 'Bahrain Grand Prix',
                        location: 'Sakhir, Bahrain',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/bahrain.jpg'),
                        flag_alt_text: 'Bahrain',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45300&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Bahrain%202021',
                    },
                    china: {
                        days: '9-11',
                        month: 'Apr',
                        race_expiry: '2021-04-12',
                        sponsor: '',
                        name: 'Chinese Grand Prix',
                        location: 'Shanghai, China',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/china.gif'),
                        flag_alt_text: 'Chinese',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45301&utm_source=Website&utm_medium=Index%20Page&utm_campaign=China%202021',
                    },
                    spain: {
                        days: '7-9',
                        month: 'May',
                        race_expiry: '2021-05-10',
                        sponsor: '',
                        name: 'Spanish Grand Prix',
                        location: 'Catalunya, Spain',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/spain.gif'),
                        flag_alt_text: 'Spanish',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45302&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Spain%202021',
                    },
                    monaco: {
                        days: '21-23',
                        month: 'May',
                        race_expiry: '2021-05-24',
                        sponsor: '',
                        name: 'Monaco Grand Prix',
                        location: 'Monte Carlo, Monaco',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/monaco.jpg'),
                        flag_alt_text: 'Monaco',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45303&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Monaco%202021',
                    },
                    azerbaijan: {
                        days: '4-6',
                        month: 'Jun',
                        race_expiry: '2021-06-07',
                        sponsor: '',
                        name: 'Azerbaijan Grand Prix',
                        location: 'Baku, Azerbaijan',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/azerbaijan.jpg'),
                        flag_alt_text: 'Azerbaijan',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45326&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Azerbaijan%202021',
                    },
                    canada: {
                        days: '11-13',
                        month: 'Jun',
                        race_expiry: '2021-06-14',
                        sponsor: '',
                        name: 'Canadian Grand Prix',
                        location: 'Montreal, Canada',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/canada.jpg'),
                        flag_alt_text: 'Canadian',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45328&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Canada%202021',
                    },
                    france: {
                        days: '25-27',
                        month: 'Jun',
                        race_expiry: '2021-06-28',
                        sponsor: '',
                        name: 'French Grand Prix',
                        location: 'La Castellet, France ',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/france.png'),
                        flag_alt_text: 'French',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45333&utm_source=Website&utm_medium=Index%20Page&utm_campaign=France%202021',
                    },
                    austria: {
                        days: '2-4',
                        month: 'Jul',
                        race_expiry: '2021-07-05',
                        sponsor: '',
                        name: 'Austrian Grand Prix',
                        location: 'Styria, Austria ',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/austria.gif'),
                        flag_alt_text: 'Austrian',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45331&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Austria%202021',
                    },
                    britain: {
                        days: '16-18',
                        month: 'Jul',
                        race_expiry: '2021-07-19',
                        sponsor: '',
                        name: 'British Grand Prix',
                        location: 'Silverstone, England',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/britain.gif'),
                        flag_alt_text: 'British',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45334&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Great%20Britain%202021',
                    },
                    hungary: {
                        days: '30-1',
                        month: 'Aug',
                        race_expiry: '2021-08-02',
                        sponsor: '',
                        name: 'Hungarian Grand Prix',
                        location: 'Budapest, Hungary ',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/hungary.gif'),
                        flag_alt_text: 'Hungarian',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45335&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Hungary%202021',
                    },
                    belgium: {
                        days: '27-29',
                        month: 'Aug',
                        race_expiry: '2021-08-30',
                        sponsor: '',
                        name: 'Belgian Grand Prix',
                        location: 'Stavelot, Belgium ',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/belgium.jpg'),
                        flag_alt_text: 'Belgian',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45306&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Belgium%202021',
                    },
                    netherlands: {
                        days: '3-5',
                        month: 'Sep',
                        race_expiry: '2021-09-06',
                        sponsor: '',
                        name: 'Dutch Grand Prix',
                        location: 'Zandvoort, Netherlands',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/netherlands.jpg'),
                        flag_alt_text: 'Dutch',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45295&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Dutch%202021',
                    },
                    italy: {
                        days: '10-12',
                        month: 'Sep',
                        race_expiry: '2021-09-13',
                        sponsor: '',
                        name: 'Italian Grand Prix',
                        location: 'Monza, Italy ',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/italy.jpg'),
                        flag_alt_text: 'Italian',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45307&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Italy%202021',
                    },
                    russia: {
                        days: '24-26',
                        month: 'Sep',
                        race_expiry: '2021-09-27',
                        sponsor: '',
                        name: 'Russian Grand Prix',
                        location: 'Sochi, Russia ',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/russia.jpg'),
                        flag_alt_text: 'Russian',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45336&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Russia%202021',
                    },
                    singapore: {
                        days: '1-3',
                        month: 'Oct',
                        race_expiry: '2021-10-04',
                        sponsor: '',
                        name: 'Singapore Grand Prix',
                        location: 'Marina Bay, Singapore',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/singapore.svg'),
                        flag_alt_text: 'Singaporean',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45308&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Singapore%202021',
                    },
                    japan: {
                        days: '8-10',
                        month: 'Oct',
                        race_expiry: '2021-10-11',
                        sponsor: '',
                        name: 'Japanese Grand Prix',
                        location: 'Sazuka, Japan ',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/japan.jpg'),
                        flag_alt_text: 'Japanese',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45337&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Japan%202021',
                    },
                    usa: {
                        days: '22-24',
                        month: 'Oct',
                        race_expiry: '2021-10-25',
                        sponsor: '',
                        name: 'United States Grand Prix',
                        location: 'Austin, Texas, United States',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/us.jpg'),
                        flag_alt_text: 'United States',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45310&utm_source=Website&utm_medium=Index%20Page&utm_campaign=United%20States%202021',
                    },
                    mexico: {
                        days: '29-31',
                        month: 'Oct',
                        race_expiry: '2021-11-01',
                        sponsor: '',
                        name: 'Mexican Grand Prix',
                        location: 'Mexico City, Mexico',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/mexico.jpg'),
                        flag_alt_text: 'Mexican',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45313&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Mexico%202021',
                    },
                    brazil: {
                        days: '12-14',
                        month: 'Nov',
                        race_expiry: '2021-11-15',
                        sponsor: '',
                        name: 'Brazilian Grand Prix',
                        location: 'Brazil',
                        country_flag_url: ''.concat(o.path, '/clients/formula_1/images/brazil.png'),
                        flag_alt_text: 'Brazilian',
                        book_url: 'https://bookrooms.formula1.com/group-event?id=45315&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Brazil%202021',
                    },
                },
            };
        e.default = a;
    },
    function (t, e, n) {
        'use strict';
        var r = n(2),
            o = n(29),
            a = n(26),
            i = n(17),
            c = n(64),
            u = n(66),
            s = Math.max,
            l = Math.min,
            f = Math.floor,
            p = /\$([$&`']|\d\d?|<[^>]*>)/g,
            d = /\$([$&`']|\d\d?)/g;
        n(67)('replace', 2, function (t, e, n, m) {
            return [
                function (r, o) {
                    var a = t(this),
                        i = null == r ? void 0 : r[e];
                    return void 0 !== i ? i.call(r, a, o) : n.call(String(a), r, o);
                },
                function (t, e) {
                    var o = m(n, t, this, e);
                    if (o.done) return o.value;
                    var f = r(t),
                        p = String(this),
                        d = 'function' == typeof e;
                    d || (e = String(e));
                    var v = f.global;
                    if (v) {
                        var g = f.unicode;
                        f.lastIndex = 0;
                    }
                    for (var y = []; ; ) {
                        var _ = u(f, p);
                        if (null === _) break;
                        if ((y.push(_), !v)) break;
                        '' === String(_[0]) && (f.lastIndex = c(p, a(f.lastIndex), g));
                    }
                    for (var x, b = '', S = 0, w = 0; w < y.length; w++) {
                        _ = y[w];
                        for (var k = String(_[0]), M = s(l(i(_.index), p.length), 0), P = [], L = 1; L < _.length; L++) P.push(void 0 === (x = _[L]) ? x : String(x));
                        var j = _.groups;
                        if (d) {
                            var E = [k].concat(P, M, p);
                            void 0 !== j && E.push(j);
                            var O = String(e.apply(void 0, E));
                        } else O = h(k, p, M, P, j, e);
                        M >= S && ((b += p.slice(S, M) + O), (S = M + k.length));
                    }
                    return b + p.slice(S);
                },
            ];
            function h(t, e, r, a, i, c) {
                var u = r + t.length,
                    s = a.length,
                    l = d;
                return (
                    void 0 !== i && ((i = o(i)), (l = p)),
                    n.call(c, l, function (n, o) {
                        var c;
                        switch (o.charAt(0)) {
                            case '$':
                                return '$';
                            case '&':
                                return t;
                            case '`':
                                return e.slice(0, r);
                            case "'":
                                return e.slice(u);
                            case '<':
                                c = i[o.slice(1, -1)];
                                break;
                            default:
                                var l = +o;
                                if (0 === l) return n;
                                if (l > s) {
                                    var p = f(l / 10);
                                    return 0 === p ? n : p <= s ? (void 0 === a[p - 1] ? o.charAt(1) : a[p - 1] + o.charAt(1)) : n;
                                }
                                c = a[l - 1];
                        }
                        return void 0 === c ? '' : c;
                    })
                );
            }
        });
    },
    function (t, e, n) {
        'use strict';
        var r = n(65)(!0);
        t.exports = function (t, e, n) {
            return e + (n ? r(t, e).length : 1);
        };
    },
    function (t, e, n) {
        var r = n(17),
            o = n(12);
        t.exports = function (t) {
            return function (e, n) {
                var a,
                    i,
                    c = String(o(e)),
                    u = r(n),
                    s = c.length;
                return u < 0 || u >= s
                    ? t
                        ? ''
                        : void 0
                    : (a = c.charCodeAt(u)) < 55296 || a > 56319 || u + 1 === s || (i = c.charCodeAt(u + 1)) < 56320 || i > 57343
                    ? t
                        ? c.charAt(u)
                        : a
                    : t
                    ? c.slice(u, u + 2)
                    : i - 56320 + ((a - 55296) << 10) + 65536;
            };
        };
    },
    function (t, e, n) {
        'use strict';
        var r = n(18),
            o = RegExp.prototype.exec;
        t.exports = function (t, e) {
            var n = t.exec;
            if ('function' == typeof n) {
                var a = n.call(t, e);
                if ('object' != typeof a) throw new TypeError('RegExp exec method returned something other than an Object or null');
                return a;
            }
            if ('RegExp' !== r(t)) throw new TypeError('RegExp#exec called on incompatible receiver');
            return o.call(t, e);
        };
    },
    function (t, e, n) {
        'use strict';
        n(68);
        var r = n(5),
            o = n(4),
            a = n(9),
            i = n(12),
            c = n(0),
            u = n(39),
            s = c('species'),
            l = !a(function () {
                var t = /./;
                return (
                    (t.exec = function () {
                        var t = [];
                        return (t.groups = {a: '7'}), t;
                    }),
                    '7' !== ''.replace(t, '$<a>')
                );
            }),
            f = (function () {
                var t = /(?:)/,
                    e = t.exec;
                t.exec = function () {
                    return e.apply(this, arguments);
                };
                var n = 'ab'.split(t);
                return 2 === n.length && 'a' === n[0] && 'b' === n[1];
            })();
        t.exports = function (t, e, n) {
            var p = c(t),
                d = !a(function () {
                    var e = {};
                    return (
                        (e[p] = function () {
                            return 7;
                        }),
                        7 != ''[t](e)
                    );
                }),
                m = d
                    ? !a(function () {
                          var e = !1,
                              n = /a/;
                          return (
                              (n.exec = function () {
                                  return (e = !0), null;
                              }),
                              'split' === t &&
                                  ((n.constructor = {}),
                                  (n.constructor[s] = function () {
                                      return n;
                                  })),
                              n[p](''),
                              !e
                          );
                      })
                    : void 0;
            if (!d || !m || ('replace' === t && !l) || ('split' === t && !f)) {
                var h = /./[p],
                    v = n(i, p, ''[t], function (t, e, n, r, o) {
                        return e.exec === u ? (d && !o ? {done: !0, value: h.call(e, n, r)} : {done: !0, value: t.call(n, e, r)}) : {done: !1};
                    }),
                    g = v[0],
                    y = v[1];
                r(String.prototype, t, g),
                    o(
                        RegExp.prototype,
                        p,
                        2 == e
                            ? function (t, e) {
                                  return y.call(t, this, e);
                              }
                            : function (t) {
                                  return y.call(t, this);
                              }
                    );
            }
        };
    },
    function (t, e, n) {
        'use strict';
        var r = n(39);
        n(13)({target: 'RegExp', proto: !0, forced: r !== /./.exec}, {exec: r});
    },
    function (t, e, n) {
        'use strict';
        n(70);
        var r = n(2),
            o = n(31),
            a = n(3),
            i = /./.toString,
            c = function (t) {
                n(5)(RegExp.prototype, 'toString', t, !0);
            };
        n(9)(function () {
            return '/a/b' != i.call({source: 'a', flags: 'b'});
        })
            ? c(function () {
                  var t = r(this);
                  return '/'.concat(t.source, '/', 'flags' in t ? t.flags : !a && t instanceof RegExp ? o.call(t) : void 0);
              })
            : 'toString' != i.name &&
              c(function () {
                  return i.call(this);
              });
    },
    function (t, e, n) {
        n(3) && 'g' != /./g.flags && n(6).f(RegExp.prototype, 'flags', {configurable: !0, get: n(31)});
    },
    function (t, e) {
        t.exports = function (t, e, n, r) {
            if (!(t instanceof e) || (void 0 !== r && r in t)) throw TypeError(n + ': incorrect invocation!');
            return t;
        };
    },
    function (t, e, n) {
        var r = n(15),
            o = n(73),
            a = n(74),
            i = n(2),
            c = n(26),
            u = n(75),
            s = {},
            l = {};
        ((e = t.exports = function (t, e, n, f, p) {
            var d,
                m,
                h,
                v,
                g = p
                    ? function () {
                          return t;
                      }
                    : u(t),
                y = r(n, f, e ? 2 : 1),
                _ = 0;
            if ('function' != typeof g) throw TypeError(t + ' is not iterable!');
            if (a(g)) {
                for (d = c(t.length); d > _; _++) if ((v = e ? y(i((m = t[_]))[0], m[1]) : y(t[_])) === s || v === l) return v;
            } else for (h = g.call(t); !(m = h.next()).done; ) if ((v = o(h, y, m.value, e)) === s || v === l) return v;
        }).BREAK = s),
            (e.RETURN = l);
    },
    function (t, e, n) {
        var r = n(2);
        t.exports = function (t, e, n, o) {
            try {
                return o ? e(r(n)[0], n[1]) : e(n);
            } catch (e) {
                var a = t.return;
                throw (void 0 !== a && r(a.call(t)), e);
            }
        };
    },
    function (t, e, n) {
        var r = n(10),
            o = n(0)('iterator'),
            a = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || a[o] === t);
        };
    },
    function (t, e, n) {
        var r = n(18),
            o = n(0)('iterator'),
            a = n(10);
        t.exports = n(7).getIteratorMethod = function (t) {
            if (null != t) return t[o] || t['@@iterator'] || a[r(t)];
        };
    },
    function (t, e, n) {
        var r = n(2),
            o = n(16),
            a = n(0)('species');
        t.exports = function (t, e) {
            var n,
                i = r(t).constructor;
            return void 0 === i || null == (n = r(i)[a]) ? e : o(n);
        };
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
                case 0:
                    return r ? t() : t.call(n);
                case 1:
                    return r ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
            }
            return t.apply(n, e);
        };
    },
    function (t, e, n) {
        var r = n(1),
            o = n(41).set,
            a = r.MutationObserver || r.WebKitMutationObserver,
            i = r.process,
            c = r.Promise,
            u = 'process' == n(11)(i);
        t.exports = function () {
            var t,
                e,
                n,
                s = function () {
                    var r, o;
                    for (u && (r = i.domain) && r.exit(); t; ) {
                        (o = t.fn), (t = t.next);
                        try {
                            o();
                        } catch (r) {
                            throw (t ? n() : (e = void 0), r);
                        }
                    }
                    (e = void 0), r && r.enter();
                };
            if (u)
                n = function () {
                    i.nextTick(s);
                };
            else if (!a || (r.navigator && r.navigator.standalone))
                if (c && c.resolve) {
                    var l = c.resolve(void 0);
                    n = function () {
                        l.then(s);
                    };
                } else
                    n = function () {
                        o.call(r, s);
                    };
            else {
                var f = !0,
                    p = document.createTextNode('');
                new a(s).observe(p, {characterData: !0}),
                    (n = function () {
                        p.data = f = !f;
                    });
            }
            return function (r) {
                var o = {fn: r, next: void 0};
                e && (e.next = o), t || ((t = o), n()), (e = o);
            };
        };
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return {e: !1, v: t()};
            } catch (t) {
                return {e: !0, v: t};
            }
        };
    },
    function (t, e, n) {
        var r = n(1).navigator;
        t.exports = (r && r.userAgent) || '';
    },
    function (t, e, n) {
        var r = n(2),
            o = n(8),
            a = n(42);
        t.exports = function (t, e) {
            if ((r(t), o(e) && e.constructor === t)) return e;
            var n = a.f(t);
            return (0, n.resolve)(e), n.promise;
        };
    },
    function (t, e, n) {
        var r = n(5);
        t.exports = function (t, e, n) {
            for (var o in e) r(t, o, e[o], n);
            return t;
        };
    },
    function (t, e, n) {
        'use strict';
        var r = n(1),
            o = n(6),
            a = n(3),
            i = n(0)('species');
        t.exports = function (t) {
            var e = r[t];
            a &&
                e &&
                !e[i] &&
                o.f(e, i, {
                    configurable: !0,
                    get: function () {
                        return this;
                    },
                });
        };
    },
    function (t, e, n) {
        var r = n(0)('iterator'),
            o = !1;
        try {
            var a = [7][r]();
            (a.return = function () {
                o = !0;
            }),
                Array.from(a, function () {
                    throw 2;
                });
        } catch (t) {}
        t.exports = function (t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
                var a = [7],
                    i = a[r]();
                (i.next = function () {
                    return {done: (n = !0)};
                }),
                    (a[r] = function () {
                        return i;
                    }),
                    t(a);
            } catch (t) {}
            return n;
        };
    },
    function (t, e, n) {
        t.exports = (function () {
            'use strict';
            var t = 'millisecond',
                e = 'second',
                n = 'minute',
                r = 'hour',
                o = 'day',
                a = 'week',
                i = 'month',
                c = 'quarter',
                u = 'year',
                s = 'date',
                l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,
                f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                p = function (t, e, n) {
                    var r = String(t);
                    return !r || r.length >= e ? t : '' + Array(e + 1 - r.length).join(n) + t;
                },
                d = {
                    s: p,
                    z: function (t) {
                        var e = -t.utcOffset(),
                            n = Math.abs(e),
                            r = Math.floor(n / 60),
                            o = n % 60;
                        return (e <= 0 ? '+' : '-') + p(r, 2, '0') + ':' + p(o, 2, '0');
                    },
                    m: function t(e, n) {
                        if (e.date() < n.date()) return -t(n, e);
                        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                            o = e.clone().add(r, i),
                            a = n - o < 0,
                            c = e.clone().add(r + (a ? -1 : 1), i);
                        return +(-(r + (n - o) / (a ? o - c : c - o)) || 0);
                    },
                    a: function (t) {
                        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
                    },
                    p: function (l) {
                        return (
                            {M: i, y: u, w: a, d: o, D: s, h: r, m: n, s: e, ms: t, Q: c}[l] ||
                            String(l || '')
                                .toLowerCase()
                                .replace(/s$/, '')
                        );
                    },
                    u: function (t) {
                        return void 0 === t;
                    },
                },
                m = {
                    name: 'en',
                    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
                },
                h = 'en',
                v = {};
            v[h] = m;
            var g = function (t) {
                    return t instanceof b;
                },
                y = function (t, e, n) {
                    var r;
                    if (!t) return h;
                    if ('string' == typeof t) v[t] && (r = t), e && ((v[t] = e), (r = t));
                    else {
                        var o = t.name;
                        (v[o] = t), (r = o);
                    }
                    return !n && r && (h = r), r || (!n && h);
                },
                _ = function (t, e) {
                    if (g(t)) return t.clone();
                    var n = 'object' == typeof e ? e : {};
                    return (n.date = t), (n.args = arguments), new b(n);
                },
                x = d;
            (x.l = y),
                (x.i = g),
                (x.w = function (t, e) {
                    return _(t, {locale: e.$L, utc: e.$u, $offset: e.$offset});
                });
            var b = (function () {
                    function p(t) {
                        (this.$L = this.$L || y(t.locale, null, !0)), this.parse(t);
                    }
                    var d = p.prototype;
                    return (
                        (d.parse = function (t) {
                            (this.$d = (function (t) {
                                var e = t.date,
                                    n = t.utc;
                                if (null === e) return new Date(NaN);
                                if (x.u(e)) return new Date();
                                if (e instanceof Date) return new Date(e);
                                if ('string' == typeof e && !/Z$/i.test(e)) {
                                    var r = e.match(l);
                                    if (r) {
                                        var o = r[2] - 1 || 0,
                                            a = (r[7] || '0').substring(0, 3);
                                        return n
                                            ? new Date(Date.UTC(r[1], o, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a))
                                            : new Date(r[1], o, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a);
                                    }
                                }
                                return new Date(e);
                            })(t)),
                                this.init();
                        }),
                        (d.init = function () {
                            var t = this.$d;
                            (this.$y = t.getFullYear()),
                                (this.$M = t.getMonth()),
                                (this.$D = t.getDate()),
                                (this.$W = t.getDay()),
                                (this.$H = t.getHours()),
                                (this.$m = t.getMinutes()),
                                (this.$s = t.getSeconds()),
                                (this.$ms = t.getMilliseconds());
                        }),
                        (d.$utils = function () {
                            return x;
                        }),
                        (d.isValid = function () {
                            return !('Invalid Date' === this.$d.toString());
                        }),
                        (d.isSame = function (t, e) {
                            var n = _(t);
                            return this.startOf(e) <= n && n <= this.endOf(e);
                        }),
                        (d.isAfter = function (t, e) {
                            return _(t) < this.startOf(e);
                        }),
                        (d.isBefore = function (t, e) {
                            return this.endOf(e) < _(t);
                        }),
                        (d.$g = function (t, e, n) {
                            return x.u(t) ? this[e] : this.set(n, t);
                        }),
                        (d.unix = function () {
                            return Math.floor(this.valueOf() / 1e3);
                        }),
                        (d.valueOf = function () {
                            return this.$d.getTime();
                        }),
                        (d.startOf = function (t, c) {
                            var l = this,
                                f = !!x.u(c) || c,
                                p = x.p(t),
                                d = function (t, e) {
                                    var n = x.w(l.$u ? Date.UTC(l.$y, e, t) : new Date(l.$y, e, t), l);
                                    return f ? n : n.endOf(o);
                                },
                                m = function (t, e) {
                                    return x.w(l.toDate()[t].apply(l.toDate('s'), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), l);
                                },
                                h = this.$W,
                                v = this.$M,
                                g = this.$D,
                                y = 'set' + (this.$u ? 'UTC' : '');
                            switch (p) {
                                case u:
                                    return f ? d(1, 0) : d(31, 11);
                                case i:
                                    return f ? d(1, v) : d(0, v + 1);
                                case a:
                                    var _ = this.$locale().weekStart || 0,
                                        b = (h < _ ? h + 7 : h) - _;
                                    return d(f ? g - b : g + (6 - b), v);
                                case o:
                                case s:
                                    return m(y + 'Hours', 0);
                                case r:
                                    return m(y + 'Minutes', 1);
                                case n:
                                    return m(y + 'Seconds', 2);
                                case e:
                                    return m(y + 'Milliseconds', 3);
                                default:
                                    return this.clone();
                            }
                        }),
                        (d.endOf = function (t) {
                            return this.startOf(t, !1);
                        }),
                        (d.$set = function (a, c) {
                            var l,
                                f = x.p(a),
                                p = 'set' + (this.$u ? 'UTC' : ''),
                                d = ((l = {}),
                                (l[o] = p + 'Date'),
                                (l[s] = p + 'Date'),
                                (l[i] = p + 'Month'),
                                (l[u] = p + 'FullYear'),
                                (l[r] = p + 'Hours'),
                                (l[n] = p + 'Minutes'),
                                (l[e] = p + 'Seconds'),
                                (l[t] = p + 'Milliseconds'),
                                l)[f],
                                m = f === o ? this.$D + (c - this.$W) : c;
                            if (f === i || f === u) {
                                var h = this.clone().set(s, 1);
                                h.$d[d](m), h.init(), (this.$d = h.set(s, Math.min(this.$D, h.daysInMonth())).$d);
                            } else d && this.$d[d](m);
                            return this.init(), this;
                        }),
                        (d.set = function (t, e) {
                            return this.clone().$set(t, e);
                        }),
                        (d.get = function (t) {
                            return this[x.p(t)]();
                        }),
                        (d.add = function (t, c) {
                            var s,
                                l = this;
                            t = Number(t);
                            var f = x.p(c),
                                p = function (e) {
                                    var n = _(l);
                                    return x.w(n.date(n.date() + Math.round(e * t)), l);
                                };
                            if (f === i) return this.set(i, this.$M + t);
                            if (f === u) return this.set(u, this.$y + t);
                            if (f === o) return p(1);
                            if (f === a) return p(7);
                            var d = ((s = {}), (s[n] = 6e4), (s[r] = 36e5), (s[e] = 1e3), s)[f] || 1,
                                m = this.$d.getTime() + t * d;
                            return x.w(m, this);
                        }),
                        (d.subtract = function (t, e) {
                            return this.add(-1 * t, e);
                        }),
                        (d.format = function (t) {
                            var e = this;
                            if (!this.isValid()) return 'Invalid Date';
                            var n = t || 'YYYY-MM-DDTHH:mm:ssZ',
                                r = x.z(this),
                                o = this.$locale(),
                                a = this.$H,
                                i = this.$m,
                                c = this.$M,
                                u = o.weekdays,
                                s = o.months,
                                l = function (t, r, o, a) {
                                    return (t && (t[r] || t(e, n))) || o[r].substr(0, a);
                                },
                                p = function (t) {
                                    return x.s(a % 12 || 12, t, '0');
                                },
                                d =
                                    o.meridiem ||
                                    function (t, e, n) {
                                        var r = t < 12 ? 'AM' : 'PM';
                                        return n ? r.toLowerCase() : r;
                                    },
                                m = {
                                    YY: String(this.$y).slice(-2),
                                    YYYY: this.$y,
                                    M: c + 1,
                                    MM: x.s(c + 1, 2, '0'),
                                    MMM: l(o.monthsShort, c, s, 3),
                                    MMMM: l(s, c),
                                    D: this.$D,
                                    DD: x.s(this.$D, 2, '0'),
                                    d: String(this.$W),
                                    dd: l(o.weekdaysMin, this.$W, u, 2),
                                    ddd: l(o.weekdaysShort, this.$W, u, 3),
                                    dddd: u[this.$W],
                                    H: String(a),
                                    HH: x.s(a, 2, '0'),
                                    h: p(1),
                                    hh: p(2),
                                    a: d(a, i, !0),
                                    A: d(a, i, !1),
                                    m: String(i),
                                    mm: x.s(i, 2, '0'),
                                    s: String(this.$s),
                                    ss: x.s(this.$s, 2, '0'),
                                    SSS: x.s(this.$ms, 3, '0'),
                                    Z: r,
                                };
                            return n.replace(f, function (t, e) {
                                return e || m[t] || r.replace(':', '');
                            });
                        }),
                        (d.utcOffset = function () {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                        }),
                        (d.diff = function (t, s, l) {
                            var f,
                                p = x.p(s),
                                d = _(t),
                                m = 6e4 * (d.utcOffset() - this.utcOffset()),
                                h = this - d,
                                v = x.m(this, d);
                            return (
                                (v =
                                    ((f = {}),
                                    (f[u] = v / 12),
                                    (f[i] = v),
                                    (f[c] = v / 3),
                                    (f[a] = (h - m) / 6048e5),
                                    (f[o] = (h - m) / 864e5),
                                    (f[r] = h / 36e5),
                                    (f[n] = h / 6e4),
                                    (f[e] = h / 1e3),
                                    f)[p] || h),
                                l ? v : x.a(v)
                            );
                        }),
                        (d.daysInMonth = function () {
                            return this.endOf(i).$D;
                        }),
                        (d.$locale = function () {
                            return v[this.$L];
                        }),
                        (d.locale = function (t, e) {
                            if (!t) return this.$L;
                            var n = this.clone(),
                                r = y(t, e, !0);
                            return r && (n.$L = r), n;
                        }),
                        (d.clone = function () {
                            return x.w(this.$d, this);
                        }),
                        (d.toDate = function () {
                            return new Date(this.valueOf());
                        }),
                        (d.toJSON = function () {
                            return this.isValid() ? this.toISOString() : null;
                        }),
                        (d.toISOString = function () {
                            return this.$d.toISOString();
                        }),
                        (d.toString = function () {
                            return this.$d.toUTCString();
                        }),
                        p
                    );
                })(),
                S = b.prototype;
            return (
                (_.prototype = S),
                [
                    ['$ms', t],
                    ['$s', e],
                    ['$m', n],
                    ['$H', r],
                    ['$W', o],
                    ['$M', i],
                    ['$y', u],
                    ['$D', s],
                ].forEach(function (t) {
                    S[t[1]] = function (e) {
                        return this.$g(e, t[0], t[1]);
                    };
                }),
                (_.extend = function (t, e) {
                    return t(e, b, _), _;
                }),
                (_.locale = y),
                (_.isDayjs = g),
                (_.unix = function (t) {
                    return _(1e3 * t);
                }),
                (_.en = v[h]),
                (_.Ls = v),
                _
            );
        })();
    },
    function (t, e, n) {
        'use strict';
        Object.defineProperty(e, '__esModule', {value: !0}),
            (e.default = function (t) {
                return s.apply(this, arguments);
            }),
            n(43),
            n(40),
            n(30);
        var r = o(n(37));
        function o(t) {
            return t && t.__esModule ? t : {default: t};
        }
        function a(t, e, n, r, o, a, i) {
            try {
                var c = t[a](i),
                    u = c.value;
            } catch (t) {
                return void n(t);
            }
            c.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        function i(t) {
            return function () {
                var e = this,
                    n = arguments;
                return new Promise(function (r, o) {
                    var i = t.apply(e, n);
                    function c(t) {
                        a(i, r, o, c, u, 'next', t);
                    }
                    function u(t) {
                        a(i, r, o, c, u, 'throw', t);
                    }
                    c(void 0);
                });
            };
        }
        var c = new (o(n(38)).default)(),
            u = new r.default();
        function s() {
            return (s = i(
                regeneratorRuntime.mark(function t(e) {
                    var n, r, o, a, s, l, f, p, d;
                    return regeneratorRuntime.wrap(function (t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (
                                        (d = function () {
                                            return (d = i(
                                                regeneratorRuntime.mark(function t() {
                                                    var e;
                                                    return regeneratorRuntime.wrap(function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    if (null === document.querySelector('meta[name="landing-page"]')) {
                                                                        t.next = 2;
                                                                        break;
                                                                    }
                                                                    return t.abrupt('return');
                                                                case 2:
                                                                    return (t.next = 4), c.fetchHTMLFromFile(''.concat(u.path, '/clients/formula_1/html/footer.html'));
                                                                case 4:
                                                                    (e = t.sent), document.querySelector('.pb-container').insertAdjacentHTML('afterend', e);
                                                                case 6:
                                                                case 'end':
                                                                    return t.stop();
                                                            }
                                                    }, t);
                                                })
                                            )).apply(this, arguments);
                                        }),
                                        (p = function () {
                                            return d.apply(this, arguments);
                                        }),
                                        (f = function () {
                                            return (f = i(
                                                regeneratorRuntime.mark(function t(e) {
                                                    var a, i, s;
                                                    return regeneratorRuntime.wrap(function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return (
                                                                        (i = function (t) {
                                                                            null !== r &&
                                                                                (t.matches
                                                                                    ? (document
                                                                                          .querySelector('.mobile-nav-lower-ul .language-mobile-li')
                                                                                          .insertAdjacentElement('afterbegin', r),
                                                                                      document
                                                                                          .querySelector('.mobile-nav-lower-ul .currency-mobile-li')
                                                                                          .insertAdjacentElement('afterBegin', o))
                                                                                    : (document.querySelector('#tickets .language').insertAdjacentElement('afterbegin', r),
                                                                                      document.querySelector('.currency').insertAdjacentElement('afterBegin', o)));
                                                                        }),
                                                                        (t.next = 3),
                                                                        c.fetchHTMLFromFile(''.concat(u.path, '/clients/formula_1/html/mobile-hamburger-menu.html'))
                                                                    );
                                                                case 3:
                                                                    return (
                                                                        (a = t.sent),
                                                                        n.insertAdjacentHTML('beforeend', a),
                                                                        (document.querySelector('.mobile-nav-upper-ul #contactUs').href =
                                                                            '46451' === e || '45246' === e
                                                                                ? 'href="https://events.hotelsforhope.com/v6/support?siteId=46973"'
                                                                                : 'href="https://events.hotelsforhope.com/v6/support?siteId='.concat(e, '"')),
                                                                        (t.next = 9),
                                                                        c.waitForSelectorInDOM('.navbar-hamburger')
                                                                    );
                                                                case 9:
                                                                    document.querySelector('.navbar-hamburger').addEventListener('click', function () {
                                                                        document.querySelector('.mobile-nav-container').classList.toggle('show-mobile-nav');
                                                                    }),
                                                                        (s = window.matchMedia('(max-width: 1100px)')),
                                                                        i(s),
                                                                        s.addListener(i);
                                                                case 13:
                                                                case 'end':
                                                                    return t.stop();
                                                            }
                                                    }, t);
                                                })
                                            )).apply(this, arguments);
                                        }),
                                        (l = function (t) {
                                            return f.apply(this, arguments);
                                        }),
                                        (s = function () {
                                            return (s = i(
                                                regeneratorRuntime.mark(function t(a) {
                                                    var i, s;
                                                    return regeneratorRuntime.wrap(function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return (t.next = 2), c.fetchHTMLFromFile(''.concat(u.path, '/clients/formula_1/html/f1-header.html'));
                                                                case 2:
                                                                    if (
                                                                        ((i = t.sent),
                                                                        (s =
                                                                            '46451' === e || '45246' === e
                                                                                ? '\n        <ul id="races-contact">\n            <li>\n                <a href="#races-container" id="races">Races</a>\n            </li>\n            <li>\n                <a href="https://events.hotelsforhope.com/v6/support?siteId=46973" id="contactUs">Contact Us</a>\n            </li>\n        </ul>\n        <div class="navbar-hamburger">\n            <span class="toggle-bar top-bar"></span>\n            <span class="toggle-bar middle-bar"></span>\n            <span class="toggle-bar bottom-bar"></span>\n        </div>\n    '
                                                                                : '\n    <ul id="races-contact">\n        <li>\n            <a href="https://bookrooms.formula1.com/" id="races" target="_blank">Races</a>\n        </li>\n        <li>\n            <a href="https://events.hotelsforhope.com/v6/support?siteId='.concat(
                                                                                      a,
                                                                                      '" id="contactUs">Contact Us</a>\n        </li>\n    </ul>\n    <div class="navbar-hamburger">\n        <span class="toggle-bar top-bar"></span>\n        <span class="toggle-bar middle-bar"></span>\n        <span class="toggle-bar bottom-bar"></span>\n    </div>\n'
                                                                                  )),
                                                                        n.insertAdjacentHTML('beforebegin', i),
                                                                        n.insertAdjacentHTML('beforeend', s),
                                                                        null !== r && null !== o)
                                                                    ) {
                                                                        t.next = 8;
                                                                        break;
                                                                    }
                                                                    return t.abrupt('return');
                                                                case 8:
                                                                    document.querySelector('#tickets .language').insertAdjacentElement('afterbegin', r),
                                                                        document.querySelector('.currency').insertAdjacentElement('afterBegin', o);
                                                                case 10:
                                                                case 'end':
                                                                    return t.stop();
                                                            }
                                                    }, t);
                                                })
                                            )).apply(this, arguments);
                                        }),
                                        (a = function (t) {
                                            return s.apply(this, arguments);
                                        }),
                                        (t.next = 8),
                                        c.waitForSelectorInDOM('header')
                                    );
                                case 8:
                                    (n = document.querySelector('header')),
                                        (r = document.querySelector('#language')),
                                        (o = document.querySelector('.currencies-container')),
                                        a(e),
                                        l(e),
                                        p();
                                case 14:
                                case 'end':
                                    return t.stop();
                            }
                    }, t);
                })
            )).apply(this, arguments);
        }
    },
]);
