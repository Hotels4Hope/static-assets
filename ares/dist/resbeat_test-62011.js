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
        n((n.s = 111));
})([
    function (e, t, n) {
        var r = n(21)('wks'),
            o = n(17),
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
        var r = n(6);
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
    function (e, t, n) {
        var r = n(1),
            o = n(11),
            i = n(9),
            a = n(10),
            c = n(23),
            s = function (e, t, n) {
                var u,
                    l,
                    d,
                    h,
                    f = e & s.F,
                    p = e & s.G,
                    m = e & s.S,
                    y = e & s.P,
                    g = e & s.B,
                    v = p ? r : m ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
                    b = p ? o : o[t] || (o[t] = {}),
                    S = b.prototype || (b.prototype = {});
                for (u in (p && (n = t), n))
                    (d = ((l = !f && v && void 0 !== v[u]) ? v : n)[u]),
                        (h = g && l ? c(d, r) : y && 'function' == typeof d ? c(Function.call, d) : d),
                        v && a(v, u, d, e & s.U),
                        b[u] != d && i(b, u, h),
                        y && S[u] != d && (S[u] = d);
            };
        (r.core = o), (s.F = 1), (s.G = 2), (s.S = 4), (s.P = 8), (s.B = 16), (s.W = 32), (s.U = 64), (s.R = 128), (e.exports = s);
    },
    function (e, t, n) {
        var r = n(2),
            o = n(48),
            i = n(34),
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
            return 'object' == typeof e ? null !== e : 'function' == typeof e;
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
    function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t);
        };
    },
    function (e, t, n) {
        var r = n(5),
            o = n(22);
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
            o = n(9),
            i = n(8),
            a = n(17)('src'),
            c = n(70),
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
        var n = (e.exports = {version: '2.6.11'});
        'number' == typeof __e && (__e = n);
    },
    function (e, t, n) {
        var r = n(73),
            o = n(15);
        e.exports = function (e) {
            return r(o(e));
        };
    },
    function (e, t, n) {
        var r = n(49),
            o = n(36);
        e.exports =
            Object.keys ||
            function (e) {
                return r(e, o);
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
    function (e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function (e) {
            return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
        };
    },
    function (e, t) {
        e.exports = {};
    },
    function (e, t, n) {
        'use strict';
        function r() {
            return {path: 'https://dev-static.hotelsforhope.com/ares'};
        }
        n.d(t, 'a', function () {
            return r;
        });
    },
    function (e, t, n) {
        var r = n(11),
            o = n(1),
            i = o['__core-js_shared__'] || (o['__core-js_shared__'] = {});
        (e.exports = function (e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {});
        })('versions', []).push({version: r.version, mode: n(16) ? 'pure' : 'global', copyright: '© 2019 Denis Pushkarev (zloirock.ru)'});
    },
    function (e, t) {
        e.exports = function (e, t) {
            return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t};
        };
    },
    function (e, t, n) {
        var r = n(24);
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
    function (e, t) {
        e.exports = function (e) {
            if ('function' != typeof e) throw TypeError(e + ' is not a function!');
            return e;
        };
    },
    function (e, t, n) {
        var r = n(5).f,
            o = n(8),
            i = n(0)('toStringTag');
        e.exports = function (e, t, n) {
            e && !o((e = n ? e : e.prototype), i) && r(e, i, {configurable: !0, value: t});
        };
    },
    function (e, t, n) {
        var r = n(18),
            o = Math.min;
        e.exports = function (e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0;
        };
    },
    function (e, t) {
        t.f = {}.propertyIsEnumerable;
    },
    function (e, t, n) {
        var r = n(15);
        e.exports = function (e) {
            return Object(r(e));
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
        'use strict';
        var r = n(29),
            o = {};
        (o[n(0)('toStringTag')] = 'z'),
            o + '' != '[object z]' &&
                n(10)(
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
        var r = n(62),
            o = n(96),
            i = n(19),
            a = n(12);
        (e.exports = n(97)(
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
        'use strict';
        n.d(t, 'a', function () {
            return c;
        });
        n(45), n(43), n(31), n(64), n(37), n(30), n(38);
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
        var a = n(44),
            c = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, e);
                }
                var t, n, r, c, s, u, l, d, h, f, p, m, y;
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
                                ((y = o(
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
                                    return y.apply(this, arguments);
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
                                ((m = o(
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
                                    return m.apply(this, arguments);
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
                                ((h = o(
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
                                    return h.apply(this, arguments);
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
                                ((d = o(
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
                                    return d.apply(this, arguments);
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
                                ((l = o(
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
                                    return l.apply(this, arguments);
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
                                ((u = o(
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
                                    return u.apply(this, arguments);
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
                                ((s = o(
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
                                    return s.apply(this, arguments);
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
                            key: 'addHeaderButtonLink',
                            value:
                                ((c = o(
                                    regeneratorRuntime.mark(function e(t, n) {
                                        return regeneratorRuntime.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (!document.querySelector('.RootBody') && !document.querySelector('.SearchHotels')) {
                                                                e.next = 4;
                                                                break;
                                                            }
                                                            return (e.next = 3), this.waitForSelectorInDOM('header');
                                                        case 3:
                                                            document
                                                                .querySelector('header')
                                                                .insertAdjacentHTML(
                                                                    'beforeend',
                                                                    '<div class="custom-button">\n                    <a id="custom-link" target="_blank" href="'
                                                                        .concat(t, '">')
                                                                        .concat(n, '</a>\n                </div>')
                                                                );
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
                                function (e, t) {
                                    return c.apply(this, arguments);
                                }),
                        },
                    ]) && i(t.prototype, n),
                    r && i(t, r),
                    e
                );
            })();
    },
    function (e, t, n) {
        var r = n(6),
            o = n(1).document,
            i = r(o) && r(o.createElement);
        e.exports = function (e) {
            return i ? o.createElement(e) : {};
        };
    },
    function (e, t, n) {
        var r = n(6);
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
        var r = n(21)('keys'),
            o = n(17);
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
            i,
            a,
            c = n(16),
            s = n(1),
            u = n(23),
            l = n(29),
            d = n(4),
            h = n(6),
            f = n(24),
            p = n(78),
            m = n(79),
            y = n(56),
            g = n(57).set,
            v = n(84)(),
            b = n(58),
            S = n(85),
            w = n(86),
            _ = n(87),
            A = s.TypeError,
            x = s.process,
            k = x && x.versions,
            C = (k && k.v8) || '',
            L = s.Promise,
            R = 'process' == l(x),
            M = function () {},
            q = (o = b.f),
            P = !!(function () {
                try {
                    var e = L.resolve(1),
                        t = ((e.constructor = {})[n(0)('species')] = function (e) {
                            e(M, M);
                        });
                    return (R || 'function' == typeof PromiseRejectionEvent) && e.then(M) instanceof t && 0 !== C.indexOf('6.6') && -1 === w.indexOf('Chrome/66');
                } catch (e) {}
            })(),
            E = function (e) {
                var t;
                return !(!h(e) || 'function' != typeof (t = e.then)) && t;
            },
            T = function (e, t) {
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
                                            ? (o || (2 == e._h && F(e), (e._h = 1)),
                                              !0 === c ? (n = r) : (l && l.enter(), (n = c(r)), l && (l.exit(), (a = !0))),
                                              n === t.promise ? u(A('Promise-chain cycle')) : (i = E(n)) ? i.call(n, s, u) : s(n))
                                            : u(r);
                                    } catch (e) {
                                        l && !a && l.exit(), u(e);
                                    }
                                };
                            n.length > i;

                        )
                            a(n[i++]);
                        (e._c = []), (e._n = !1), t && !e._h && B(e);
                    });
                }
            },
            B = function (e) {
                g.call(s, function () {
                    var t,
                        n,
                        r,
                        o = e._v,
                        i = O(e);
                    if (
                        (i &&
                            ((t = S(function () {
                                R
                                    ? x.emit('unhandledRejection', o, e)
                                    : (n = s.onunhandledrejection)
                                    ? n({promise: e, reason: o})
                                    : (r = s.console) && r.error && r.error('Unhandled promise rejection', o);
                            })),
                            (e._h = R || O(e) ? 2 : 1)),
                        (e._a = void 0),
                        i && t.e)
                    )
                        throw t.v;
                });
            },
            O = function (e) {
                return 1 !== e._h && 0 === (e._a || e._c).length;
            },
            F = function (e) {
                g.call(s, function () {
                    var t;
                    R ? x.emit('rejectionHandled', e) : (t = s.onrejectionhandled) && t({promise: e, reason: e._v});
                });
            },
            j = function (e) {
                var t = this;
                t._d || ((t._d = !0), ((t = t._w || t)._v = e), (t._s = 2), t._a || (t._a = t._c.slice()), T(t, !0));
            },
            H = function (e) {
                var t,
                    n = this;
                if (!n._d) {
                    (n._d = !0), (n = n._w || n);
                    try {
                        if (n === e) throw A("Promise can't be resolved itself");
                        (t = E(e))
                            ? v(function () {
                                  var r = {_w: n, _d: !1};
                                  try {
                                      t.call(e, u(H, r, 1), u(j, r, 1));
                                  } catch (e) {
                                      j.call(r, e);
                                  }
                              })
                            : ((n._v = e), (n._s = 1), T(n, !1));
                    } catch (e) {
                        j.call({_w: n, _d: !1}, e);
                    }
                }
            };
        P ||
            ((L = function (e) {
                p(this, L, 'Promise', '_h'), f(e), r.call(this);
                try {
                    e(u(H, this, 1), u(j, this, 1));
                } catch (e) {
                    j.call(this, e);
                }
            }),
            ((r = function (e) {
                (this._c = []), (this._a = void 0), (this._s = 0), (this._d = !1), (this._v = void 0), (this._h = 0), (this._n = !1);
            }).prototype = n(88)(L.prototype, {
                then: function (e, t) {
                    var n = q(y(this, L));
                    return (
                        (n.ok = 'function' != typeof e || e),
                        (n.fail = 'function' == typeof t && t),
                        (n.domain = R ? x.domain : void 0),
                        this._c.push(n),
                        this._a && this._a.push(n),
                        this._s && T(this, !1),
                        n.promise
                    );
                },
                catch: function (e) {
                    return this.then(void 0, e);
                },
            })),
            (i = function () {
                var e = new r();
                (this.promise = e), (this.resolve = u(H, e, 1)), (this.reject = u(j, e, 1));
            }),
            (b.f = q = function (e) {
                return e === L || e === a ? new i(e) : o(e);
            })),
            d(d.G + d.W + d.F * !P, {Promise: L}),
            n(25)(L, 'Promise'),
            n(89)('Promise'),
            (a = n(11).Promise),
            d(d.S + d.F * !P, 'Promise', {
                reject: function (e) {
                    var t = q(this);
                    return (0, t.reject)(e), t.promise;
                },
            }),
            d(d.S + d.F * (c || !P), 'Promise', {
                resolve: function (e) {
                    return _(c && this === a ? L : this, e);
                },
            }),
            d(
                d.S +
                    d.F *
                        !(
                            P &&
                            n(90)(function (e) {
                                L.all(e).catch(M);
                            })
                        ),
                'Promise',
                {
                    all: function (e) {
                        var t = this,
                            n = q(t),
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
                            n = q(t),
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
            function c(e, t, n, r) {
                var o = t && t.prototype instanceof l ? t : l,
                    i = Object.create(o.prototype),
                    a = new _(r || []);
                return (
                    (i._invoke = (function (e, t, n) {
                        var r = 'suspendedStart';
                        return function (o, i) {
                            if ('executing' === r) throw new Error('Generator is already running');
                            if ('completed' === r) {
                                if ('throw' === o) throw i;
                                return x();
                            }
                            for (n.method = o, n.arg = i; ; ) {
                                var a = n.delegate;
                                if (a) {
                                    var c = b(a, n);
                                    if (c) {
                                        if (c === u) continue;
                                        return c;
                                    }
                                }
                                if ('next' === n.method) n.sent = n._sent = n.arg;
                                else if ('throw' === n.method) {
                                    if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                                    n.dispatchException(n.arg);
                                } else 'return' === n.method && n.abrupt('return', n.arg);
                                r = 'executing';
                                var l = s(e, t, n);
                                if ('normal' === l.type) {
                                    if (((r = n.done ? 'completed' : 'suspendedYield'), l.arg === u)) continue;
                                    return {value: l.arg, done: n.done};
                                }
                                'throw' === l.type && ((r = 'completed'), (n.method = 'throw'), (n.arg = l.arg));
                            }
                        };
                    })(e, n, a)),
                    i
                );
            }
            function s(e, t, n) {
                try {
                    return {type: 'normal', arg: e.call(t, n)};
                } catch (e) {
                    return {type: 'throw', arg: e};
                }
            }
            e.wrap = c;
            var u = {};
            function l() {}
            function d() {}
            function h() {}
            var f = {};
            f[o] = function () {
                return this;
            };
            var p = Object.getPrototypeOf,
                m = p && p(p(A([])));
            m && m !== t && n.call(m, o) && (f = m);
            var y = (h.prototype = l.prototype = Object.create(f));
            function g(e) {
                ['next', 'throw', 'return'].forEach(function (t) {
                    e[t] = function (e) {
                        return this._invoke(t, e);
                    };
                });
            }
            function v(e, t) {
                var r;
                this._invoke = function (o, i) {
                    function a() {
                        return new t(function (r, a) {
                            !(function r(o, i, a, c) {
                                var u = s(e[o], e, i);
                                if ('throw' !== u.type) {
                                    var l = u.arg,
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
                                c(u.arg);
                            })(o, i, r, a);
                        });
                    }
                    return (r = r ? r.then(a, a) : a());
                };
            }
            function b(e, t) {
                var n = e.iterator[t.method];
                if (void 0 === n) {
                    if (((t.delegate = null), 'throw' === t.method)) {
                        if (e.iterator.return && ((t.method = 'return'), (t.arg = void 0), b(e, t), 'throw' === t.method)) return u;
                        (t.method = 'throw'), (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
                    }
                    return u;
                }
                var r = s(n, e.iterator, t.arg);
                if ('throw' === r.type) return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), u;
                var o = r.arg;
                return o
                    ? o.done
                        ? ((t[e.resultName] = o.value), (t.next = e.nextLoc), 'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)), (t.delegate = null), u)
                        : o
                    : ((t.method = 'throw'), (t.arg = new TypeError('iterator result is not an object')), (t.delegate = null), u);
            }
            function S(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
            }
            function w(e) {
                var t = e.completion || {};
                (t.type = 'normal'), delete t.arg, (e.completion = t);
            }
            function _(e) {
                (this.tryEntries = [{tryLoc: 'root'}]), e.forEach(S, this), this.reset(!0);
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
                return {next: x};
            }
            function x() {
                return {value: void 0, done: !0};
            }
            return (
                (d.prototype = y.constructor = h),
                (h.constructor = d),
                (h[a] = d.displayName = 'GeneratorFunction'),
                (e.isGeneratorFunction = function (e) {
                    var t = 'function' == typeof e && e.constructor;
                    return !!t && (t === d || 'GeneratorFunction' === (t.displayName || t.name));
                }),
                (e.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : ((e.__proto__ = h), a in e || (e[a] = 'GeneratorFunction')), (e.prototype = Object.create(y)), e;
                }),
                (e.awrap = function (e) {
                    return {__await: e};
                }),
                g(v.prototype),
                (v.prototype[i] = function () {
                    return this;
                }),
                (e.AsyncIterator = v),
                (e.async = function (t, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new v(c(t, n, r, o), i);
                    return e.isGeneratorFunction(n)
                        ? a
                        : a.next().then(function (e) {
                              return e.done ? e.value : a.next();
                          });
                }),
                g(y),
                (y[a] = 'Generator'),
                (y[o] = function () {
                    return this;
                }),
                (y.toString = function () {
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
                            this.tryEntries.forEach(w),
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
                        return (a.type = e), (a.arg = t), i ? ((this.method = 'next'), (this.next = i.finallyLoc), u) : this.complete(a);
                    },
                    complete: function (e, t) {
                        if ('throw' === e.type) throw e.arg;
                        return (
                            'break' === e.type || 'continue' === e.type
                                ? (this.next = e.arg)
                                : 'return' === e.type
                                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                                : 'normal' === e.type && t && (this.next = t),
                            u
                        );
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), w(n), u;
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ('throw' === r.type) {
                                    var o = r.arg;
                                    w(n);
                                }
                                return o;
                            }
                        }
                        throw new Error('illegal catch attempt');
                    },
                    delegateYield: function (e, t, n) {
                        return (this.delegate = {iterator: A(e), resultName: t, nextLoc: n}), 'next' === this.method && (this.arg = void 0), u;
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
        'use strict';
        var r = n(29),
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
        var r,
            o,
            i = n(41),
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
        n(92);
        var r = n(10),
            o = n(9),
            i = n(7),
            a = n(15),
            c = n(0),
            s = n(40),
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
            var h = c(e),
                f = !i(function () {
                    var t = {};
                    return (
                        (t[h] = function () {
                            return 7;
                        }),
                        7 != ''[e](t)
                    );
                }),
                p = f
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
                              n[h](''),
                              !t
                          );
                      })
                    : void 0;
            if (!f || !p || ('replace' === e && !l) || ('split' === e && !d)) {
                var m = /./[h],
                    y = n(a, h, ''[e], function (e, t, n, r, o) {
                        return t.exec === s ? (f && !o ? {done: !0, value: m.call(t, n, r)} : {done: !0, value: e.call(n, t, r)}) : {done: !1};
                    }),
                    g = y[0],
                    v = y[1];
                r(String.prototype, e, g),
                    o(
                        RegExp.prototype,
                        h,
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
        for (
            var r = n(31),
                o = n(13),
                i = n(10),
                a = n(1),
                c = n(9),
                s = n(19),
                u = n(0),
                l = u('iterator'),
                d = u('toStringTag'),
                h = s.Array,
                f = {
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
                p = o(f),
                m = 0;
            m < p.length;
            m++
        ) {
            var y,
                g = p[m],
                v = f[g],
                b = a[g],
                S = b && b.prototype;
            if (S && (S[l] || c(S, l, h), S[d] || c(S, d, g), (s[g] = h), v)) for (y in r) S[y] || i(S, y, r[y], !0);
        }
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
                u = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
                l = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                d = function (e, t, n) {
                    var r = String(e);
                    return !r || r.length >= t ? e : '' + Array(t + 1 - r.length).join(n) + e;
                },
                h = {
                    s: d,
                    z: function (e) {
                        var t = -e.utcOffset(),
                            n = Math.abs(t),
                            r = Math.floor(n / 60),
                            o = n % 60;
                        return (t <= 0 ? '+' : '-') + d(r, 2, '0') + ':' + d(o, 2, '0');
                    },
                    m: function (e, t) {
                        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                            r = e.clone().add(n, a),
                            o = t - r < 0,
                            i = e.clone().add(n + (o ? -1 : 1), a);
                        return Number(-(n + (t - r) / (o ? r - i : i - r)) || 0);
                    },
                    a: function (e) {
                        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
                    },
                    p: function (u) {
                        return (
                            {M: a, y: s, w: i, d: o, D: 'date', h: r, m: n, s: t, ms: e, Q: c}[u] ||
                            String(u || '')
                                .toLowerCase()
                                .replace(/s$/, '')
                        );
                    },
                    u: function (e) {
                        return void 0 === e;
                    },
                },
                f = {
                    name: 'en',
                    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
                },
                p = 'en',
                m = {};
            m[p] = f;
            var y = function (e) {
                    return e instanceof S;
                },
                g = function (e, t, n) {
                    var r;
                    if (!e) return p;
                    if ('string' == typeof e) m[e] && (r = e), t && ((m[e] = t), (r = e));
                    else {
                        var o = e.name;
                        (m[o] = e), (r = o);
                    }
                    return !n && r && (p = r), r || (!n && p);
                },
                v = function (e, t, n) {
                    if (y(e)) return e.clone();
                    var r = t ? ('string' == typeof t ? {format: t, pl: n} : t) : {};
                    return (r.date = e), new S(r);
                },
                b = h;
            (b.l = g),
                (b.i = y),
                (b.w = function (e, t) {
                    return v(e, {locale: t.$L, utc: t.$u, $offset: t.$offset});
                });
            var S = (function () {
                function d(e) {
                    (this.$L = this.$L || g(e.locale, null, !0)), this.parse(e);
                }
                var h = d.prototype;
                return (
                    (h.parse = function (e) {
                        (this.$d = (function (e) {
                            var t = e.date,
                                n = e.utc;
                            if (null === t) return new Date(NaN);
                            if (b.u(t)) return new Date();
                            if (t instanceof Date) return new Date(t);
                            if ('string' == typeof t && !/Z$/i.test(t)) {
                                var r = t.match(u);
                                if (r)
                                    return n
                                        ? new Date(Date.UTC(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0))
                                        : new Date(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0);
                            }
                            return new Date(t);
                        })(e)),
                            this.init();
                    }),
                    (h.init = function () {
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
                    (h.$utils = function () {
                        return b;
                    }),
                    (h.isValid = function () {
                        return !('Invalid Date' === this.$d.toString());
                    }),
                    (h.isSame = function (e, t) {
                        var n = v(e);
                        return this.startOf(t) <= n && n <= this.endOf(t);
                    }),
                    (h.isAfter = function (e, t) {
                        return v(e) < this.startOf(t);
                    }),
                    (h.isBefore = function (e, t) {
                        return this.endOf(t) < v(e);
                    }),
                    (h.$g = function (e, t, n) {
                        return b.u(e) ? this[t] : this.set(n, e);
                    }),
                    (h.year = function (e) {
                        return this.$g(e, '$y', s);
                    }),
                    (h.month = function (e) {
                        return this.$g(e, '$M', a);
                    }),
                    (h.day = function (e) {
                        return this.$g(e, '$W', o);
                    }),
                    (h.date = function (e) {
                        return this.$g(e, '$D', 'date');
                    }),
                    (h.hour = function (e) {
                        return this.$g(e, '$H', r);
                    }),
                    (h.minute = function (e) {
                        return this.$g(e, '$m', n);
                    }),
                    (h.second = function (e) {
                        return this.$g(e, '$s', t);
                    }),
                    (h.millisecond = function (t) {
                        return this.$g(t, '$ms', e);
                    }),
                    (h.unix = function () {
                        return Math.floor(this.valueOf() / 1e3);
                    }),
                    (h.valueOf = function () {
                        return this.$d.getTime();
                    }),
                    (h.startOf = function (e, c) {
                        var u = this,
                            l = !!b.u(c) || c,
                            d = b.p(e),
                            h = function (e, t) {
                                var n = b.w(u.$u ? Date.UTC(u.$y, t, e) : new Date(u.$y, t, e), u);
                                return l ? n : n.endOf(o);
                            },
                            f = function (e, t) {
                                return b.w(u.toDate()[e].apply(u.toDate('s'), (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), u);
                            },
                            p = this.$W,
                            m = this.$M,
                            y = this.$D,
                            g = 'set' + (this.$u ? 'UTC' : '');
                        switch (d) {
                            case s:
                                return l ? h(1, 0) : h(31, 11);
                            case a:
                                return l ? h(1, m) : h(0, m + 1);
                            case i:
                                var v = this.$locale().weekStart || 0,
                                    S = (p < v ? p + 7 : p) - v;
                                return h(l ? y - S : y + (6 - S), m);
                            case o:
                            case 'date':
                                return f(g + 'Hours', 0);
                            case r:
                                return f(g + 'Minutes', 1);
                            case n:
                                return f(g + 'Seconds', 2);
                            case t:
                                return f(g + 'Milliseconds', 3);
                            default:
                                return this.clone();
                        }
                    }),
                    (h.endOf = function (e) {
                        return this.startOf(e, !1);
                    }),
                    (h.$set = function (i, c) {
                        var u,
                            l = b.p(i),
                            d = 'set' + (this.$u ? 'UTC' : ''),
                            h = ((u = {}),
                            (u[o] = d + 'Date'),
                            (u.date = d + 'Date'),
                            (u[a] = d + 'Month'),
                            (u[s] = d + 'FullYear'),
                            (u[r] = d + 'Hours'),
                            (u[n] = d + 'Minutes'),
                            (u[t] = d + 'Seconds'),
                            (u[e] = d + 'Milliseconds'),
                            u)[l],
                            f = l === o ? this.$D + (c - this.$W) : c;
                        if (l === a || l === s) {
                            var p = this.clone().set('date', 1);
                            p.$d[h](f), p.init(), (this.$d = p.set('date', Math.min(this.$D, p.daysInMonth())).toDate());
                        } else h && this.$d[h](f);
                        return this.init(), this;
                    }),
                    (h.set = function (e, t) {
                        return this.clone().$set(e, t);
                    }),
                    (h.get = function (e) {
                        return this[b.p(e)]();
                    }),
                    (h.add = function (e, c) {
                        var u,
                            l = this;
                        e = Number(e);
                        var d = b.p(c),
                            h = function (t) {
                                var n = v(l);
                                return b.w(n.date(n.date() + Math.round(t * e)), l);
                            };
                        if (d === a) return this.set(a, this.$M + e);
                        if (d === s) return this.set(s, this.$y + e);
                        if (d === o) return h(1);
                        if (d === i) return h(7);
                        var f = ((u = {}), (u[n] = 6e4), (u[r] = 36e5), (u[t] = 1e3), u)[d] || 1,
                            p = this.$d.getTime() + e * f;
                        return b.w(p, this);
                    }),
                    (h.subtract = function (e, t) {
                        return this.add(-1 * e, t);
                    }),
                    (h.format = function (e) {
                        var t = this;
                        if (!this.isValid()) return 'Invalid Date';
                        var n = e || 'YYYY-MM-DDTHH:mm:ssZ',
                            r = b.z(this),
                            o = this.$locale(),
                            i = this.$H,
                            a = this.$m,
                            c = this.$M,
                            s = o.weekdays,
                            u = o.months,
                            d = function (e, r, o, i) {
                                return (e && (e[r] || e(t, n))) || o[r].substr(0, i);
                            },
                            h = function (e) {
                                return b.s(i % 12 || 12, e, '0');
                            },
                            f =
                                o.meridiem ||
                                function (e, t, n) {
                                    var r = e < 12 ? 'AM' : 'PM';
                                    return n ? r.toLowerCase() : r;
                                },
                            p = {
                                YY: String(this.$y).slice(-2),
                                YYYY: this.$y,
                                M: c + 1,
                                MM: b.s(c + 1, 2, '0'),
                                MMM: d(o.monthsShort, c, u, 3),
                                MMMM: u[c] || u(this, n),
                                D: this.$D,
                                DD: b.s(this.$D, 2, '0'),
                                d: String(this.$W),
                                dd: d(o.weekdaysMin, this.$W, s, 2),
                                ddd: d(o.weekdaysShort, this.$W, s, 3),
                                dddd: s[this.$W],
                                H: String(i),
                                HH: b.s(i, 2, '0'),
                                h: h(1),
                                hh: h(2),
                                a: f(i, a, !0),
                                A: f(i, a, !1),
                                m: String(a),
                                mm: b.s(a, 2, '0'),
                                s: String(this.$s),
                                ss: b.s(this.$s, 2, '0'),
                                SSS: b.s(this.$ms, 3, '0'),
                                Z: r,
                            };
                        return n.replace(l, function (e, t) {
                            return t || p[e] || r.replace(':', '');
                        });
                    }),
                    (h.utcOffset = function () {
                        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                    }),
                    (h.diff = function (e, u, l) {
                        var d,
                            h = b.p(u),
                            f = v(e),
                            p = 6e4 * (f.utcOffset() - this.utcOffset()),
                            m = this - f,
                            y = b.m(this, f);
                        return (
                            (y =
                                ((d = {}),
                                (d[s] = y / 12),
                                (d[a] = y),
                                (d[c] = y / 3),
                                (d[i] = (m - p) / 6048e5),
                                (d[o] = (m - p) / 864e5),
                                (d[r] = m / 36e5),
                                (d[n] = m / 6e4),
                                (d[t] = m / 1e3),
                                d)[h] || m),
                            l ? y : b.a(y)
                        );
                    }),
                    (h.daysInMonth = function () {
                        return this.endOf(a).$D;
                    }),
                    (h.$locale = function () {
                        return m[this.$L];
                    }),
                    (h.locale = function (e, t) {
                        if (!e) return this.$L;
                        var n = this.clone(),
                            r = g(e, t, !0);
                        return r && (n.$L = r), n;
                    }),
                    (h.clone = function () {
                        return b.w(this.$d, this);
                    }),
                    (h.toDate = function () {
                        return new Date(this.valueOf());
                    }),
                    (h.toJSON = function () {
                        return this.isValid() ? this.toISOString() : null;
                    }),
                    (h.toISOString = function () {
                        return this.$d.toISOString();
                    }),
                    (h.toString = function () {
                        return this.$d.toUTCString();
                    }),
                    d
                );
            })();
            return (
                (v.prototype = S.prototype),
                (v.extend = function (e, t) {
                    return e(t, S, v), v;
                }),
                (v.locale = g),
                (v.isDayjs = y),
                (v.unix = function (e) {
                    return v(1e3 * e);
                }),
                (v.en = m[p]),
                (v.Ls = m),
                v
            );
        })();
    },
    function (e, t, n) {
        'use strict';
        var r = n(2),
            o = n(28),
            i = n(26),
            a = n(18),
            c = n(61),
            s = n(39),
            u = Math.max,
            l = Math.min,
            d = Math.floor,
            h = /\$([$&`']|\d\d?|<[^>]*>)/g,
            f = /\$([$&`']|\d\d?)/g;
        n(42)('replace', 2, function (e, t, n, p) {
            return [
                function (r, o) {
                    var i = e(this),
                        a = null == r ? void 0 : r[t];
                    return void 0 !== a ? a.call(r, i, o) : n.call(String(i), r, o);
                },
                function (e, t) {
                    var o = p(n, e, this, t);
                    if (o.done) return o.value;
                    var d = r(e),
                        h = String(this),
                        f = 'function' == typeof t;
                    f || (t = String(t));
                    var y = d.global;
                    if (y) {
                        var g = d.unicode;
                        d.lastIndex = 0;
                    }
                    for (var v = []; ; ) {
                        var b = s(d, h);
                        if (null === b) break;
                        if ((v.push(b), !y)) break;
                        '' === String(b[0]) && (d.lastIndex = c(h, i(d.lastIndex), g));
                    }
                    for (var S, w = '', _ = 0, A = 0; A < v.length; A++) {
                        b = v[A];
                        for (var x = String(b[0]), k = u(l(a(b.index), h.length), 0), C = [], L = 1; L < b.length; L++) C.push(void 0 === (S = b[L]) ? S : String(S));
                        var R = b.groups;
                        if (f) {
                            var M = [x].concat(C, k, h);
                            void 0 !== R && M.push(R);
                            var q = String(t.apply(void 0, M));
                        } else q = m(x, h, k, C, R, t);
                        k >= _ && ((w += h.slice(_, k) + q), (_ = k + x.length));
                    }
                    return w + h.slice(_);
                },
            ];
            function m(e, t, r, i, a, c) {
                var s = r + e.length,
                    u = i.length,
                    l = f;
                return (
                    void 0 !== a && ((a = o(a)), (l = h)),
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
                                    var h = d(l / 10);
                                    return 0 === h ? n : h <= u ? (void 0 === i[h - 1] ? o.charAt(1) : i[h - 1] + o.charAt(1)) : n;
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
        var r = n(1),
            o = n(11),
            i = n(16),
            a = n(47),
            c = n(5).f;
        e.exports = function (e) {
            var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            '_' == e.charAt(0) || e in t || c(t, e, {value: a.f(e)});
        };
    },
    function (e, t, n) {
        t.f = n(0);
    },
    function (e, t, n) {
        e.exports =
            !n(3) &&
            !n(7)(function () {
                return (
                    7 !=
                    Object.defineProperty(n(33)('div'), 'a', {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (e, t, n) {
        var r = n(8),
            o = n(12),
            i = n(50)(!1),
            a = n(35)('IE_PROTO');
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
            o = n(26),
            i = n(74);
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
    function (e, t) {
        t.f = Object.getOwnPropertySymbols;
    },
    function (e, t, n) {
        var r = n(2),
            o = n(76),
            i = n(36),
            a = n(35)('IE_PROTO'),
            c = function () {},
            s = function () {
                var e,
                    t = n(33)('iframe'),
                    r = i.length;
                for (
                    t.style.display = 'none',
                        n(53).appendChild(t),
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
        var r = n(1).document;
        e.exports = r && r.documentElement;
    },
    function (e, t, n) {
        var r = n(49),
            o = n(36).concat('length', 'prototype');
        t.f =
            Object.getOwnPropertyNames ||
            function (e) {
                return r(e, o);
            };
    },
    function (e, t, n) {
        var r = n(27),
            o = n(22),
            i = n(12),
            a = n(34),
            c = n(8),
            s = n(48),
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
        var r = n(2),
            o = n(24),
            i = n(0)('species');
        e.exports = function (e, t) {
            var n,
                a = r(e).constructor;
            return void 0 === a || null == (n = r(a)[i]) ? t : o(n);
        };
    },
    function (e, t, n) {
        var r,
            o,
            i,
            a = n(23),
            c = n(83),
            s = n(53),
            u = n(33),
            l = n(1),
            d = l.process,
            h = l.setImmediate,
            f = l.clearImmediate,
            p = l.MessageChannel,
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
        (h && f) ||
            ((h = function (e) {
                for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
                return (
                    (g[++y] = function () {
                        c('function' == typeof e ? e : Function(e), t);
                    }),
                    r(y),
                    y
                );
            }),
            (f = function (e) {
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
                : p
                ? ((i = (o = new p()).port2), (o.port1.onmessage = b), (r = a(i.postMessage, i, 1)))
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
            (e.exports = {set: h, clear: f});
    },
    function (e, t, n) {
        'use strict';
        var r = n(24);
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
        var r = n(8),
            o = n(28),
            i = n(35)('IE_PROTO'),
            a = Object.prototype;
        e.exports =
            Object.getPrototypeOf ||
            function (e) {
                return (e = o(e)), r(e, i) ? e[i] : 'function' == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null;
            };
    },
    function (e, t, n) {
        var r = n(6),
            o = n(14),
            i = n(0)('match');
        e.exports = function (e) {
            var t;
            return r(e) && (void 0 !== (t = e[i]) ? !!t : 'RegExp' == o(e));
        };
    },
    function (e, t, n) {
        'use strict';
        var r = n(91)(!0);
        e.exports = function (e, t, n) {
            return t + (n ? r(e, t).length : 1);
        };
    },
    function (e, t, n) {
        var r = n(0)('unscopables'),
            o = Array.prototype;
        null == o[r] && n(9)(o, r, {}),
            (e.exports = function (e) {
                o[r][e] = !0;
            });
    },
    function (e, t, n) {
        'use strict';
        var r = n(2),
            o = n(101),
            i = n(39);
        n(42)('search', 1, function (e, t, n, a) {
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
        var r = n(28),
            o = n(13);
        n(110)('keys', function () {
            return function (e) {
                return o(r(e));
            };
        });
    },
    function (e, t, n) {
        'use strict';
        n(37), n(93), n(95), n(43), n(31), n(30), n(99), n(63), n(102), n(45), n(104), n(105), n(69), n(38);
        var r = 'URLSearchParams' in self,
            o = 'Symbol' in self && 'iterator' in Symbol,
            i =
                'FileReader' in self &&
                'Blob' in self &&
                (function () {
                    try {
                        return new Blob(), !0;
                    } catch (e) {
                        return !1;
                    }
                })(),
            a = 'FormData' in self,
            c = 'ArrayBuffer' in self;
        if (c)
            var s = [
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
                u =
                    ArrayBuffer.isView ||
                    function (e) {
                        return e && s.indexOf(Object.prototype.toString.call(e)) > -1;
                    };
        function l(e) {
            if (('string' != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))) throw new TypeError('Invalid character in header field name');
            return e.toLowerCase();
        }
        function d(e) {
            return 'string' != typeof e && (e = String(e)), e;
        }
        function h(e) {
            var t = {
                next: function () {
                    var t = e.shift();
                    return {done: void 0 === t, value: t};
                },
            };
            return (
                o &&
                    (t[Symbol.iterator] = function () {
                        return t;
                    }),
                t
            );
        }
        function f(e) {
            (this.map = {}),
                e instanceof f
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
        function p(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError('Already read'));
            e.bodyUsed = !0;
        }
        function m(e) {
            return new Promise(function (t, n) {
                (e.onload = function () {
                    t(e.result);
                }),
                    (e.onerror = function () {
                        n(e.error);
                    });
            });
        }
        function y(e) {
            var t = new FileReader(),
                n = m(t);
            return t.readAsArrayBuffer(e), n;
        }
        function g(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer;
        }
        function v() {
            return (
                (this.bodyUsed = !1),
                (this._initBody = function (e) {
                    var t;
                    (this._bodyInit = e),
                        e
                            ? 'string' == typeof e
                                ? (this._bodyText = e)
                                : i && Blob.prototype.isPrototypeOf(e)
                                ? (this._bodyBlob = e)
                                : a && FormData.prototype.isPrototypeOf(e)
                                ? (this._bodyFormData = e)
                                : r && URLSearchParams.prototype.isPrototypeOf(e)
                                ? (this._bodyText = e.toString())
                                : c && i && (t = e) && DataView.prototype.isPrototypeOf(t)
                                ? ((this._bodyArrayBuffer = g(e.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                                : c && (ArrayBuffer.prototype.isPrototypeOf(e) || u(e))
                                ? (this._bodyArrayBuffer = g(e))
                                : (this._bodyText = e = Object.prototype.toString.call(e))
                            : (this._bodyText = ''),
                        this.headers.get('content-type') ||
                            ('string' == typeof e
                                ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                                : this._bodyBlob && this._bodyBlob.type
                                ? this.headers.set('content-type', this._bodyBlob.type)
                                : r && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'));
                }),
                i &&
                    ((this.blob = function () {
                        var e = p(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error('could not read FormData body as blob');
                        return Promise.resolve(new Blob([this._bodyText]));
                    }),
                    (this.arrayBuffer = function () {
                        return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y);
                    })),
                (this.text = function () {
                    var e,
                        t,
                        n,
                        r = p(this);
                    if (r) return r;
                    if (this._bodyBlob) return (e = this._bodyBlob), (t = new FileReader()), (n = m(t)), t.readAsText(e), n;
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
                a &&
                    (this.formData = function () {
                        return this.text().then(w);
                    }),
                (this.json = function () {
                    return this.text().then(JSON.parse);
                }),
                this
            );
        }
        (f.prototype.append = function (e, t) {
            (e = l(e)), (t = d(t));
            var n = this.map[e];
            this.map[e] = n ? n + ', ' + t : t;
        }),
            (f.prototype.delete = function (e) {
                delete this.map[l(e)];
            }),
            (f.prototype.get = function (e) {
                return (e = l(e)), this.has(e) ? this.map[e] : null;
            }),
            (f.prototype.has = function (e) {
                return this.map.hasOwnProperty(l(e));
            }),
            (f.prototype.set = function (e, t) {
                this.map[l(e)] = d(t);
            }),
            (f.prototype.forEach = function (e, t) {
                for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
            }),
            (f.prototype.keys = function () {
                var e = [];
                return (
                    this.forEach(function (t, n) {
                        e.push(n);
                    }),
                    h(e)
                );
            }),
            (f.prototype.values = function () {
                var e = [];
                return (
                    this.forEach(function (t) {
                        e.push(t);
                    }),
                    h(e)
                );
            }),
            (f.prototype.entries = function () {
                var e = [];
                return (
                    this.forEach(function (t, n) {
                        e.push([n, t]);
                    }),
                    h(e)
                );
            }),
            o && (f.prototype[Symbol.iterator] = f.prototype.entries);
        var b = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
        function S(e, t) {
            var n,
                r,
                o = (t = t || {}).body;
            if (e instanceof S) {
                if (e.bodyUsed) throw new TypeError('Already read');
                (this.url = e.url),
                    (this.credentials = e.credentials),
                    t.headers || (this.headers = new f(e.headers)),
                    (this.method = e.method),
                    (this.mode = e.mode),
                    (this.signal = e.signal),
                    o || null == e._bodyInit || ((o = e._bodyInit), (e.bodyUsed = !0));
            } else this.url = String(e);
            if (
                ((this.credentials = t.credentials || this.credentials || 'same-origin'),
                (!t.headers && this.headers) || (this.headers = new f(t.headers)),
                (this.method = ((n = t.method || this.method || 'GET'), (r = n.toUpperCase()), b.indexOf(r) > -1 ? r : n)),
                (this.mode = t.mode || this.mode || null),
                (this.signal = t.signal || this.signal),
                (this.referrer = null),
                ('GET' === this.method || 'HEAD' === this.method) && o)
            )
                throw new TypeError('Body not allowed for GET or HEAD requests');
            this._initBody(o);
        }
        function w(e) {
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
            t || (t = {}),
                (this.type = 'default'),
                (this.status = void 0 === t.status ? 200 : t.status),
                (this.ok = this.status >= 200 && this.status < 300),
                (this.statusText = 'statusText' in t ? t.statusText : 'OK'),
                (this.headers = new f(t.headers)),
                (this.url = t.url || ''),
                this._initBody(e);
        }
        (S.prototype.clone = function () {
            return new S(this, {body: this._bodyInit});
        }),
            v.call(S.prototype),
            v.call(_.prototype),
            (_.prototype.clone = function () {
                return new _(this._bodyInit, {status: this.status, statusText: this.statusText, headers: new f(this.headers), url: this.url});
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
        var x = self.DOMException;
        try {
            new x();
        } catch (e) {
            ((x = function (e, t) {
                (this.message = e), (this.name = t);
                var n = Error(e);
                this.stack = n.stack;
            }).prototype = Object.create(Error.prototype)),
                (x.prototype.constructor = x);
        }
        function k(e, t) {
            return new Promise(function (n, r) {
                var o = new S(e, t);
                if (o.signal && o.signal.aborted) return r(new x('Aborted', 'AbortError'));
                var a = new XMLHttpRequest();
                function c() {
                    a.abort();
                }
                (a.onload = function () {
                    var e,
                        t,
                        r = {
                            status: a.status,
                            statusText: a.statusText,
                            headers:
                                ((e = a.getAllResponseHeaders() || ''),
                                (t = new f()),
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
                    r.url = 'responseURL' in a ? a.responseURL : r.headers.get('X-Request-URL');
                    var o = 'response' in a ? a.response : a.responseText;
                    n(new _(o, r));
                }),
                    (a.onerror = function () {
                        r(new TypeError('Network request failed'));
                    }),
                    (a.ontimeout = function () {
                        r(new TypeError('Network request failed'));
                    }),
                    (a.onabort = function () {
                        r(new x('Aborted', 'AbortError'));
                    }),
                    a.open(o.method, o.url, !0),
                    'include' === o.credentials ? (a.withCredentials = !0) : 'omit' === o.credentials && (a.withCredentials = !1),
                    'responseType' in a && i && (a.responseType = 'blob'),
                    o.headers.forEach(function (e, t) {
                        a.setRequestHeader(t, e);
                    }),
                    o.signal &&
                        (o.signal.addEventListener('abort', c),
                        (a.onreadystatechange = function () {
                            4 === a.readyState && o.signal.removeEventListener('abort', c);
                        })),
                    a.send(void 0 === o._bodyInit ? null : o._bodyInit);
            });
        }
        (k.polyfill = !0), self.fetch || ((self.fetch = k), (self.Headers = f), (self.Request = S), (self.Response = _));
        n(108);
        var C = n(32);
        n(64);
        function R(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        var M = n(44),
            q = (function () {
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
                                    c = new URL(window.location.href),
                                    s = new URLSearchParams(c.search),
                                    u = new URLSearchParams(document.querySelector('meta[name="originalParams"]').content);
                                function l(e) {
                                    document.querySelector('.SearchHotels') &&
                                        document.querySelectorAll(e).forEach(function (e) {
                                            e.style.display = 'none';
                                        });
                                }
                                function d(e, t, n, r) {
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
                                function f() {
                                    if ('search-results' === t && '' !== document.querySelector('input#hotelName').value) return document.querySelector('input#hotelName').value;
                                }
                                function p(e, t) {
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
                                function m(e) {
                                    if (u.has(e)) return u.get(e);
                                }
                                document.querySelector('form#searchForm').addEventListener('submit', function (i) {
                                    i.preventDefault();
                                    var a,
                                        c,
                                        s,
                                        l = window.location.origin,
                                        d = ''.concat(l, '/v6/?type=geo&siteid=').concat(e.site_id, '&pagesize=10&').concat(e.distance_unit),
                                        y = new URL(d),
                                        g = M(document.querySelector('input#theCheckIn').value).format('MM/DD/YYYY'),
                                        v = M(document.querySelector('input#theCheckOut').value).format('MM/DD/YYYY'),
                                        b = M(v).diff(M(g), 'days');
                                    function S(e) {
                                        Object.keys(e).forEach(function (t) {
                                            '' !== e[t].value && null !== e[t].value && void 0 !== e[t].value && void 0 !== e[t].key && y.searchParams.append(e[t].key, e[t].value);
                                        });
                                    }
                                    r
                                        ? ((a = r.lat), (c = r.lng))
                                        : o
                                        ? ((a = o.lat), (c = o.lng))
                                        : r || o || 'search-results' !== t || ((a = u.get('latitude')), (c = u.get('longitude'))),
                                        S({
                                            longitude: {key: 'longitude', value: c},
                                            latitude: {key: 'latitude', value: a},
                                            destination: {
                                                key: 'destination',
                                                value:
                                                    ((s = 'input#address-input'),
                                                    null !== document.querySelector(s).value
                                                        ? document.querySelector(s).value
                                                        : u.has('destination')
                                                        ? u.get('destination')
                                                        : void 0),
                                            },
                                            checkin: {key: 'checkin', value: g},
                                            nights: {key: 'nights', value: b},
                                            rooms: {key: 'rooms', value: h('select#rooms')},
                                            adults: {key: 'adults', value: h('select#adults')},
                                            currency: {key: 'currency', value: e.currency},
                                            amenities: {key: 'amenities', value: p('#AmentitiesContainer .ArnSearchField div', 'lblAmenities')},
                                            stars: {key: 'propertyclasses', value: p('#PropertyClassesContainer .ArnSearchField div', 'lblRating')},
                                            propertyType: {key: 'propertytypes', value: p('#PropertyTypesContainer .ArnSearchField div', 'lblPropertyType')},
                                            optionalHotel: {key: 'hotelname', value: f()},
                                        }),
                                        'search-results' === t &&
                                            'lodging' === e.site_type.toLowerCase() &&
                                            S({
                                                properties: {key: 'properties', value: m('properties')},
                                                utm_source: {key: 'utm_source', value: m('utm_source')},
                                                locationLabel: {key: 'locationlabel', value: m('locationlabel')},
                                                radius: {key: 'radius', value: m('radius')},
                                                groupId: {key: 'groupid', value: m('groupid')},
                                                cid: {key: 'cid', value: m('cid')},
                                                points: {key: 'points', value: m('points')},
                                            }),
                                        'cug' === e.site_type.toLowerCase() && S({memberToken: {key: 'memberToken', value: n.getMetaTagContent('memberToken')}}),
                                        (window.location.href = decodeURIComponent(y));
                                }),
                                    (i = 'input#city'),
                                    document.querySelector(i) && document.querySelector(i).remove(),
                                    'landing-page' === t &&
                                        d(
                                            '.RootBody',
                                            'div#CitySearchContainer span',
                                            'beforeEnd',
                                            '<input type="search" id="address-input" placeholder="Destination" required="true" />'
                                        ),
                                    'search-results' === t &&
                                        (d(
                                            '.SearchHotels',
                                            'div#theSearchBox',
                                            'afterBegin',
                                            '<span>City Search:</span><input type="search" id="address-input" placeholder="Destination" required="true"  />'
                                        ),
                                        (function () {
                                            if (document.querySelector('.SearchHotels')) {
                                                var e;
                                                null !== s.get('destination') && (e = s.get('destination')),
                                                    (e =
                                                        null !== u.get('destination')
                                                            ? u.get('destination')
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
                                    l('.ArnGoCitySearch, div.ArnSearchHotelsImg+br, .ArnGoLandmarkSearch, .ArnGoAirportSearch'),
                                    'search-results' === t &&
                                        'cug' !== e.site_type.toLowerCase() &&
                                        'retail' !== e.site_type.toLowerCase() &&
                                        n.waitForSelectorInDOM('.algolia-places').then(function () {
                                            (document.querySelector('.algolia-places').style.display = 'none'),
                                                (document.querySelector('#theSearchBox').firstChild.style.display = 'none');
                                        }),
                                    h('select#rooms'),
                                    h('select#adults'),
                                    (function (e) {
                                        document.querySelector(e) && (document.querySelector(e).required = !0);
                                    })('input#theCheckIn'),
                                    jQuery('#theBody').on('arnMapLoadedEvent', function () {
                                        s.has('locationlabel') || s.has('points') || l('img.arn-green-marker-icon');
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
                    ]) && R(t.prototype, n),
                    r && R(t, r),
                    e
                );
            })(),
            P = n(20);
        function E(e, t, n, r, o, i, a) {
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
                        E(i, r, o, a, c, 'next', e);
                    }
                    function c(e) {
                        E(i, r, o, a, c, 'throw', e);
                    }
                    a(void 0);
                });
            };
        }
        function B(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        n.d(t, 'a', function () {
            return I;
        });
        var O = new P.a(),
            F = n(44),
            j = new C.a(),
            H = new q(),
            I = (function () {
                function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, e),
                        console.log('Output: BasePortal -> constructor -> config', t),
                        (this.site_id = ''),
                        (this.page_name = j.getPageName()),
                        (this.site_config = t),
                        (this.currency = ''),
                        (this.svg_arrow =
                            '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline></svg>'),
                        (this.map_loaded = !1),
                        (this.selected_currency = 'USD');
                }
                var t, n, r, o, i, a, c, s, u, l, d, h;
                return (
                    (t = e),
                    (n = [
                        {
                            key: 'init',
                            value: function () {
                                var e = this;
                                this.site_config || console.error('No site config found.'),
                                    this.initializeARNRatesReadyEvent(),
                                    j.ieForEachPolyfill(),
                                    this.getSiteID().then(
                                        (function () {
                                            var t = T(
                                                regeneratorRuntime.mark(function t(n) {
                                                    return regeneratorRuntime.wrap(function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return (
                                                                        j.getPageName(),
                                                                        e.applyConfigStyles(),
                                                                        e.setupDatePrompt(),
                                                                        e.showLanguageFromCongif(),
                                                                        e.showFilters(),
                                                                        e.buildMobileMenu(),
                                                                        j.createHTML(
                                                                            '<link id="favicon" rel="shortcut icon" href="'.concat(e.site_config.fav_icon_url, '">'),
                                                                            'head',
                                                                            'beforeEnd'
                                                                        ),
                                                                        (t.next = 9),
                                                                        j.createHTML(
                                                                            '<header><a class="logo" href="'
                                                                                .concat(e.site_config.header.logo_outbound_url, '" target="_blank"><img src="')
                                                                                .concat(e.site_config.header.logo_file_location, '" alt="Logo"></a></header>'),
                                                                            '.config-container',
                                                                            'afterEnd'
                                                                        )
                                                                    );
                                                                case 9:
                                                                    'cug' === e.site_config.site_type &&
                                                                        j.waitForSelectorInDOM('#AdminControlsContainer').then(
                                                                            T(
                                                                                regeneratorRuntime.mark(function e() {
                                                                                    return regeneratorRuntime.wrap(function (e) {
                                                                                        for (;;)
                                                                                            switch ((e.prev = e.next)) {
                                                                                                case 0:
                                                                                                    j.appendToParent('#commands', 'header');
                                                                                                case 1:
                                                                                                case 'end':
                                                                                                    return e.stop();
                                                                                            }
                                                                                    }, e);
                                                                                })
                                                                            )
                                                                        ),
                                                                        j.updateAttribute('.ArnSupportLinks a', '_blank', 'target'),
                                                                        'property-detail' === e.page_name &&
                                                                            (e.addImageSlideshow(),
                                                                            e.updateAmenitiesLegendTag(),
                                                                            j.updateHTML('.SinglePropDetail .Map a', 'Map'),
                                                                            j.updateHTML('.SinglePropDetail .Reviews a', 'Reviews'),
                                                                            j.updateHTML('.SinglePropDetail .OptionsPricing a', 'Rooms'),
                                                                            j.updateHTML('.SinglePropDetail .Details a', 'General Info'),
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
                                                                            j.moveElementIntoExistingWrapper(
                                                                                '.SinglePropDetail .ArnTripAdvisorDetails.HasReviews',
                                                                                '.SinglePropDetail .ArnPropAddress',
                                                                                'afterEnd'
                                                                            ),
                                                                            j.moveElementIntoExistingWrapper(
                                                                                'div.subHeaderContainer > div > a > span.translateMe',
                                                                                '.SinglePropDetail .ArnLeftListContainer',
                                                                                'afterBegin'
                                                                            )),
                                                                        'checkout' === e.page_name &&
                                                                            (j.createModal(
                                                                                [document.querySelector('#theStayPolicies')],
                                                                                'Policies & Fees',
                                                                                'checkout',
                                                                                '#theConfirmationContainer',
                                                                                'afterBegin'
                                                                            ),
                                                                            j.updateAttribute('#theEmailAddressAjax input', 'email', 'type'),
                                                                            j.updateAttribute('.CheckOutForm #theCountryCode', 'numeric', 'inputmode'),
                                                                            j.updateAttribute('.CheckOutForm #theAreaCode', 'numeric', 'inputmode'),
                                                                            j.updateAttribute('.CheckOutForm #thePhoneNumber', 'numeric', 'inputmode'),
                                                                            j.updateAttribute('.CheckOutForm #theCreditCardNumber', 'numeric', 'inputmode'),
                                                                            j.updateAttribute('.CheckOutForm #theCvvCode', 'numeric', 'inputmode'),
                                                                            j.appendToParent('#theMarketingOptInAjax', '#theConfirmCheckboxesAjax'),
                                                                            j.updateHTML('#theCharges legend', 'Rate Info'),
                                                                            j.updateHTML('.taxFeeRow th', '<span>Taxes:</span>'),
                                                                            j.updateHTML('#theHotel legend', 'Reservation Summary'),
                                                                            e.formatCheckoutForm(),
                                                                            e.setupReservationSummaryContainer(),
                                                                            j.moveElementIntoExistingWrapper('#theBookingPage #theRateDescription', '#theHotel', 'beforeEnd'),
                                                                            j.emailVerificationSetup(),
                                                                            e.fixCheckoutInputTabOrder(),
                                                                            j.selectCheckboxOnLabelClick('.confirmationWarning, .confirmationAgreement, #theMarketingOptInAjax')),
                                                                        'confirmation' === e.page_name && (e.implementAds(), e.addMessagingToConfirmationPage()),
                                                                        document.querySelector('.RootBody') &&
                                                                            (H.init(e.site_config, e.page_name, j),
                                                                            j.updateHTML('.RootBody .ArnSearchHeader', 'Start Your Search'),
                                                                            j.createHTML(
                                                                                '<h1>Start Your Search</h1><h3>From cozy budget hotels to upscale resorts, we have what you are looking for</h3>',
                                                                                '.RootBody .ArnPrimarySearchContainer',
                                                                                'beforeBegin'
                                                                            ),
                                                                            j.moveOrphanedElementsIntoNewWrapper(
                                                                                [document.querySelector('.RootBody .ArnLeftSearchContainer form')],
                                                                                'root-search-container',
                                                                                '.RootBody .ArnSearchContainerMainDiv',
                                                                                'afterBegin'
                                                                            ),
                                                                            j.moveElementIntoExistingWrapper(
                                                                                '.ArnSecondarySearchOuterContainer',
                                                                                '.ArnPrimarySearchContainer',
                                                                                'beforeEnd'
                                                                            ),
                                                                            j.selectCheckboxOnLabelClick('.ArnSearchField div')),
                                                                        j.updateHTML('#thePassCodeAjax label', 'Promocode'),
                                                                        j.updateHTML('#theUserNameAjax label', 'Username/Email'),
                                                                        j.createHTML('<h1>Login</h1>', '#theWBLoginFormBody form', 'beforeBegin'),
                                                                        j.createHTML('<h1>Register</h1>', '#theWBValidatedRegistrationFormBody form', 'beforeBegin'),
                                                                        j.createHTML('<h1>Forgot Password?</h1>', '#theWBForgotPasswordFormBody form', 'beforeBegin'),
                                                                        j.createHTML(
                                                                            '<div class="redeem-promocode-container"><h2>Have a promocode?</h2></div>',
                                                                            '#theWBLoginFormBody .ForgotPasswordAction',
                                                                            'afterEnd'
                                                                        ),
                                                                        e.site_config.show_tax_inclusive_rates &&
                                                                            jQuery('#theBody').on('arnMapLoadedEvent', function () {
                                                                                e.getTotalNights().then(function (t) {
                                                                                    e.getCurrency().then(function (n) {
                                                                                        e.getNightlyRateForMapMarkers(t, n);
                                                                                    });
                                                                                });
                                                                            }),
                                                                        'lrg-page' === e.page_name && e.replaceLRGForm(),
                                                                        'search-results' === e.page_name && H.init(e.site_config, e.page_name, j),
                                                                        jQuery('#theBody').on(
                                                                            'arnMapLoadedEvent',
                                                                            T(
                                                                                regeneratorRuntime.mark(function t() {
                                                                                    return regeneratorRuntime.wrap(function (t) {
                                                                                        for (;;)
                                                                                            switch ((t.prev = t.next)) {
                                                                                                case 0:
                                                                                                    return (
                                                                                                        (e.map_loaded = !0),
                                                                                                        (t.next = 3),
                                                                                                        j.waitForSelectorInDOM('.pollingFinished')
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
                                                                            T(
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
                                                                        j.waitForSelectorInDOM('.pollingFinished').then(
                                                                            (function () {
                                                                                var t = T(
                                                                                    regeneratorRuntime.mark(function t(n) {
                                                                                        return regeneratorRuntime.wrap(function (t) {
                                                                                            for (;;)
                                                                                                switch ((t.prev = t.next)) {
                                                                                                    case 0:
                                                                                                        if (
                                                                                                            ('hold-rooms' === e.page_name &&
                                                                                                                (e.moveReviewsIntoPropNameContainer(),
                                                                                                                j.addClass('ArnSearchContainerMainDiv', 'ArnSubPage')),
                                                                                                            'search-results' === e.page_name && 'hold-rooms' !== e.page_name)
                                                                                                        ) {
                                                                                                            t.next = 3;
                                                                                                            break;
                                                                                                        }
                                                                                                        return t.abrupt('return');
                                                                                                    case 3:
                                                                                                        return (
                                                                                                            e.buildCurrencyDropdown(),
                                                                                                            e.styleCUGMapPins(),
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
                                                                                                            j.updateAttribute('.ArnShowRatesLink', '_blank', 'target'),
                                                                                                            e.movePropClassBelowPropName(),
                                                                                                            j.selectCheckboxOnLabelClick('.ArnSearchField div'),
                                                                                                            j.updateHTML('#ShowHotelOnMap', 'Open Map'),
                                                                                                            j.updateHTML('.ArnShowRatesLink', 'Book Rooms'),
                                                                                                            j.updateHTML('.lblRating', 'Stars'),
                                                                                                            j.updateHTML('.lblCurrency', 'Currency'),
                                                                                                            j.updateHTML('.lblAmenities', 'Amenities'),
                                                                                                            j.updateHTML('.lblNearbyCities', 'Nearby Cities'),
                                                                                                            j.updateHTML('.lblPropertyType', 'Property Type'),
                                                                                                            j.updateHTML('.ArnSortBy', '<div class="sort">Sort</div>'),
                                                                                                            j.updateHTML('.ArnSearchHeader', 'Update Search'),
                                                                                                            j.moveElementIntoExistingWrapper(
                                                                                                                '.ArnPropClass',
                                                                                                                '.ArnPropName',
                                                                                                                'beforeEnd'
                                                                                                            ),
                                                                                                            j.moveElementIntoExistingWrapper(
                                                                                                                '#theOtherSubmitButton',
                                                                                                                '.ArnSecondarySearchOuterContainer',
                                                                                                                'beforeEnd'
                                                                                                            ),
                                                                                                            (t.next = 32),
                                                                                                            j.waitForSelectorInDOM('#pagerBottomAjax').then(function () {
                                                                                                                j.appendToParent('#pagerBottomAjax', '#currentPropertyPage');
                                                                                                            })
                                                                                                        );
                                                                                                    case 32:
                                                                                                        return (
                                                                                                            (t.next = 34),
                                                                                                            j.waitForSelectorInDOM('.ArnSortContainer').then(function () {
                                                                                                                j.createWrapper(
                                                                                                                    '.ArnSortByDealPercent, .ArnSortByDistance, .ArnSortByDealAmount, .ArnSortByAvailability, .ArnSortByPrice, .ArnSortByClass, .ArnSortByType',
                                                                                                                    '.ArnSecondarySearchOuterContainer',
                                                                                                                    'sort-wrapper',
                                                                                                                    'afterBegin'
                                                                                                                ).then(function () {
                                                                                                                    e.createMobileSortAndFilter(),
                                                                                                                        j.createHTML(
                                                                                                                            '<h4>Sort</h4>',
                                                                                                                            '.sort-wrapper',
                                                                                                                            'afterBegin'
                                                                                                                        );
                                                                                                                });
                                                                                                            })
                                                                                                        );
                                                                                                    case 34:
                                                                                                        if (!window.matchMedia('(min-width: 1105px)')) {
                                                                                                            t.next = 42;
                                                                                                            break;
                                                                                                        }
                                                                                                        return (t.next = 38), j.waitForSelectorInDOM('#ArnPropertyMap');
                                                                                                    case 38:
                                                                                                        document.querySelector('.leaflet-control-scale-line') ||
                                                                                                            L.control.scale().addTo(window.ArnMap),
                                                                                                            e.useLogoForVenueMapMarker(),
                                                                                                            e.highlightMapMarkersOnPropertyHover(),
                                                                                                            e.changeContractedPropertyPinColor();
                                                                                                    case 42:
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
                                                                        e.applyCustomStyles(),
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
                                ((h = T(
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
                                    return h.apply(this, arguments);
                                }),
                        },
                        {
                            key: 'getCurrency',
                            value:
                                ((d = T(
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
                                    j.updateHTML(
                                        '.sort',
                                        '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" class=""></path></svg> Sort &amp; Filter'
                                    ),
                                        j.createHTML(
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
                                    h = document.querySelector('.SearchHotels .ArnPrimarySearchContainer');
                                s &&
                                    u &&
                                    d &&
                                    l &&
                                    ((e = l.getAttribute('content')),
                                    (i = d.getAttribute('content')),
                                    (t = s.getAttribute('content')),
                                    (n = u.getAttribute('content')),
                                    (a = F(t)),
                                    (c = F(n)),
                                    ('cug' === this.site_config.site_type.toLowerCase() ||
                                        ('retail' === this.site_config.site_type.toLowerCase() && null !== o.get('destination'))) &&
                                        (i = o.get('destination')),
                                    j.createHTML(
                                        '\n            <div class="show-search-container">\n                <span class="search-close">\n                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">\n                        <polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"></polyline>\n                        <polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"></polyline>\n                    </svg>\n                </span>\n                <svg class="icon icon-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n                </svg>\n                <div class="search-info">\n                    <h3>'
                                            .concat(i, '</h3>\n                    <span>\n                        <span class="search-dates">')
                                            .concat(a.format('MMMM D'), ' - ')
                                            .concat(c.format('MMMM D'), '</span>\n                        <span class="adults-count">')
                                            .concat(e, ' guests</span>\n                    </span>\n                </div>\n            </div>'),
                                        '.SearchHotels .ArnPrimarySearchOuterContainer',
                                        'beforeBegin'
                                    ),
                                    document.querySelector('.show-search-container').addEventListener('click', function () {
                                        h.classList.toggle('show-search'), document.querySelector('.search-close').classList.toggle('show-search-close');
                                    }));
                            },
                        },
                        {
                            key: 'buildMobileMenu',
                            value:
                                ((l = T(
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
                                                            j.waitForSelectorInDOM('header')
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
                                    j.moveOrphanedElementsIntoNewWrapper(document.querySelectorAll('#theStayPolicies *'), 'policies-container', '#theStayPolicies', 'beforeEnd'),
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
                                    (e = F(t).format(this.site_config.dayjs_date_format)),
                                    (n = F(r).format(this.site_config.dayjs_date_format)),
                                    j.createHTML('<span class="date-container">'.concat(e, ' - ').concat(n), '#theHotelAddress', 'beforeBegin'),
                                    j.moveElementIntoExistingWrapper('.totalRow .discount', '.theHotelName', 'afterEnd'));
                            },
                        },
                        {
                            key: 'formatCheckoutForm',
                            value: function () {
                                var e = document.querySelectorAll('.WBGuestFormFields'),
                                    t = 0;
                                e.forEach(function (e) {
                                    (t += 1),
                                        j.moveElementIntoExistingWrapper(
                                            '#theBookingPage td.GuestForms > fieldset:nth-child('.concat(t, ') #theCreditCardBillingNameAjax').concat(t - 1),
                                            '#theBookingPage td.GuestForms > fieldset:nth-child('.concat(t, ') #theCreditCardNumberAjax'),
                                            'afterEnd'
                                        ),
                                        j.createWrapper(
                                            '.RoomNumber-'
                                                .concat(t, ' .guestCityZip > table > tbody > tr > td > div, .RoomNumber-')
                                                .concat(t, ' .guestCityZip > table > tbody > tr >td:nth-child(2) > div, #theStateAjax')
                                                .concat(t, ', #theCountryAjax')
                                                .concat(t),
                                            '#theBillingAddressAjax'.concat(t),
                                            'billing-details-container',
                                            'afterEnd'
                                        ),
                                        j.createWrapper(
                                            '.RoomNumber-'
                                                .concat(t, ' #theCreditCardBillingNameAjax')
                                                .concat(t, ', \n                 .RoomNumber-')
                                                .concat(t, ' #theCardExpirationFieldsAjax, \n                 .RoomNumber-')
                                                .concat(t, ' #theCardVerificationAjax'),
                                            '.RoomNumber-'.concat(t, ' #theCreditCardNumberAjax'),
                                            'credit-card-details',
                                            'afterEnd'
                                        ),
                                        j.updateHTML('#theCreditCardBillingNameAjax'.concat(t - 1, ' label'), "Cardholder's Name"),
                                        j.updateHTML('#theBillingAddressAjax'.concat(t - 1, ' label'), 'Billing Address'),
                                        j.updateHTML('.RoomNumber-'.concat(t, ' > legend'), 'Billing Info'),
                                        t > 1 && j.updateHTML('.RoomNumber-'.concat(t, ' > legend'), 'Billing Info - Room '.concat(t)),
                                        j.createHTML('<legend>Credit Card Info</legend>', '.RoomNumber-'.concat(t, ' .guestBillingAddress'), 'beforeBegin'),
                                        j.updateHTML(
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
                                            j.updateHTML('.RoomNumber-'.concat(e, ' > legend'), 'Billing Info'),
                                                e > 1 && j.updateHTML('.RoomNumber-'.concat(e, ' > legend'), 'Billing Info - Room '.concat(e));
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
                                    (j.createHTML('<link href="'.concat(this.site_config.google_font_url, '" rel="stylesheet">'), 'head', 'beforeEnd'),
                                    e.insertAdjacentHTML(
                                        'afterBegin',
                                        '\n            /* Fonts */\n            *,\n            .taxFeeRow td,\n            .discount td,\n            .totalRow td,\n            .balanceDueRow td,\n            .dueNowRow td,\n            .guestNameFields td,\n            .total-points-earned td{\n                font-family: '
                                            .concat(
                                                this.site_config.google_font_name,
                                                ", 'Helvetica';\n            }\n\n            /* Root Body */\n            .RootBody{\n                background: "
                                            )
                                            .concat(
                                                this.site_config.banner_image_url,
                                                ';\n            }\n\n            /* Header */\n\n            header {\n                justify-content: '
                                            )
                                            .concat(this.site_config.header.logo_flex_position, ';\n                background: ')
                                            .concat(this.site_config.header.background, ';\n            }\n            \n            .logo img{\n                max-width: ')
                                            .concat(
                                                this.site_config.header.logo_max_width,
                                                ';\n            }\n            \n            body, #thePropertyAmenities span, .WBRateGuaranteeForm2 .zsFormClass, #lightbox .window, .WBConfirmedBooking .informMessage {\n                background-color: '
                                            )
                                            .concat(
                                                this.site_config.background_color,
                                                ';\n            }\n\n        /* Primary Background Color */\n            #searching h2:after,\n            #theConfirmationButton,\n            .ArnPrimarySearchContainer,\n            .ArnShowRatesLink,\n            .ArnTripAdvisorDetails.HasReviews .ratingCount,\n            .CreateAnAccountAction,\n            .RootBody #theOtherSubmitButton,\n            .SimpleSearch,\n            .WBForgotPasswordFormActions .submit,\n            .WBLoginFormActions .submit,\n            .WBValidatedRegistrationFormActions .submit,\n            .arn-leaflet-reset-button,\n            .bookRoom,\n            .HoldRoomsForm .submit,\n            #datePromptContainer+.SimpleSearch .CheckRates .submit,\n            .yui3-skin-sam .yui3-calendar-day:hover,\n            .sort-wrapper .active,\n            .sort-wrapper a:hover, #lightbox .WBChangePasswordFormActions .ChangePasswordAction:hover, .WBConfirmedBooking .submit, .GroupHoldForm .bookRoomButton, .custom-button a\n            {\n                background: '
                                            )
                                            .concat(
                                                this.site_config.primary_color,
                                                ';\n            }\n\n            @media screen and (max-width:1105px) {\n\n                #arnCloseAnchorId,\n                #arnCloseAnchorId:active,\n                #arnCloseAnchorId:focus,\n                #arnCloseAnchorId:hover {\n                    border: 1px solid '
                                            )
                                            .concat(this.site_config.primary_color, ';\n                }\n\n                .closeMap {\n                    border: 1px solid ')
                                            .concat(this.site_config.primary_text_color, '!important;\n                    background-color: ')
                                            .concat(this.site_config.primary_color, '!important;\n                    color: ')
                                            .concat(
                                                this.site_config.primary_text_color,
                                                '!important;\n                }\n            }\n\n            @media screen and (max-width:800px) {\n\n                #commands a:active,\n                #commands a:focus,\n                #commands a:hover,\n                #commands button:active,\n                #commands button:focus,\n                #commands button:hover,\n                .sort-wrapper a:before,\n                .sort-wrapper a.active-filter:before,\n                .sort {\n                    background: '
                                            )
                                            .concat(
                                                this.site_config.primary_color,
                                                ';\n                }\n            }\n\n            #searching,\n            #theConfirmationButton,\n            .HoldRoomsForm .submit,\n            .ArnPrimarySearchContainer,\n            .ArnShowRatesLink,\n            .ArnTripAdvisorDetails.HasReviews .ratingCount,\n            .SinglePropDetail .CheckRates .submit,\n            .CreateAnAccountAction,\n            .RootBody #theOtherSubmitButton,\n            .SearchHotels #theSubmitButton,\n            .SimpleSearch,\n            .WBForgotPasswordFormActions .submit,\n            .WBLoginFormActions .submit,\n            .WBValidatedRegistrationFormActions .submit,\n            .arnMapPopup .rate,\n            #datePromptContainer+.SimpleSearch .CheckRates .submit,\n            .bookRoom,\n            .sort-wrapper .active,\n            .sort-wrapper a:hover, #lightbox .WBChangePasswordFormActions .ChangePasswordAction:hover, .WBConfirmedBooking .submit, .GroupHoldForm .bookRoomButton, .custom-button a\n            {\n                color: '
                                            )
                                            .concat(this.site_config.primary_text_color, ';\n            }\n\n            .custom-button a:hover {\n                color: ')
                                            .concat(this.site_config.primary_color, '\n            }\n\n            span.exclusive-rate {\n                background: ')
                                            .concat(
                                                this.site_config.secondary_color,
                                                ';\n                color: #fff;\n            }\n\n\n            @media screen and (max-width:1105px) {\n\n                #arnCloseAnchorId,\n                #arnCloseAnchorId:active,\n                #arnCloseAnchorId:focus,\n                #arnCloseAnchorId:hover {\n                    color: '
                                            )
                                            .concat(
                                                this.site_config.secondary_text_color,
                                                ';\n                }\n            }\n\n            @media screen and (max-width: 800px) {\n                #commands a:active,\n                #commands a:focus,\n                #commands a:hover,\n                #commands button:active,\n                #commands button:focus,\n                #commands button:hover,\n                .sort {\n                    color: '
                                            )
                                            .concat(
                                                this.site_config.primary_text_color,
                                                ';\n                }\n\n                .SearchHotels .ArnSecondarySearchOuterContainer #theOtherSubmitButton {\n                    color: '
                                            )
                                            .concat(
                                                this.site_config.primary_color,
                                                ';\n                }\n            }\n            .holdRoom,\n            .reviewCount a,\n            #theAdditionalEmailsLink a,\n            #theOtherSubmitButton,\n            .SinglePropDetail .ArnRateCancelAnchor,\n            .open-modal,\n            .lowest-rate-link,\n            .SinglePropDetail .RateCalendarPopupAnchor,\n            .ArnContentContainer legend, #theRoomsOnHold h2,\n            .confirmation-messaging a,\n            .receiptLink,\n            .returnResultsInfo a,\n            .supportInfo a, .SinglePropDetail #show-more-or-less {\n                color: '
                                            )
                                            .concat(this.site_config.secondary_text_color, ';\n            }\n            \n            .percentSavings{\n                color: ')
                                            .concat(
                                                this.site_config.secondary_color,
                                                ';\n            }\n\n            input#theSubmitButton,\n            .RootBody #theOtherSubmitButton,\n            .bookRoom,\n            .arn-leaflet-reset-button,\n            input#theConfirmationButton,\n            a.ArnShowRatesLink, .WBConfirmedBooking .submit, .custom-button a {\n                background: '
                                            )
                                            .concat(this.site_config.primary_color, ';\n                color: ')
                                            .concat(this.site_config.primary_text_color, ';\n                border: 1px solid ')
                                            .concat(
                                                this.site_config.border_color,
                                                ';\n            }\n\n            .CheckRates input.submit,\n            .CheckRates input.submit,\n            .CheckRates input.submit,\n            #lightbox, #lightbox .dialog-button-ok input:hover  {\n                background: '
                                            )
                                            .concat(this.site_config.primary_color, ';\n                color: ')
                                            .concat(
                                                this.site_config.primary_text_color,
                                                ';\n            }\n\n            input#theSubmitButton:hover,\n            input#theSubmitButton:focus,\n            input#theSubmitButton:active,\n            #theOtherSubmitButton:hover,\n            #theOtherSubmitButton:focus,\n            #theOtherSubmitButton:active,\n            .RootBody #theOtherSubmitButton:hover,\n            .RootBody #theOtherSubmitButton:focus,\n            .RootBody #theOtherSubmitButton:active,\n            .bookRoom:hover,\n            .bookRoom:focus,\n            .bookRoom:active,\n            .arn-leaflet-reset-button:hover,\n            .arn-leaflet-reset-button:focus,\n            .arn-leaflet-reset-button:active,\n            input#theConfirmationButton:hover,\n            input#theConfirmationButton:focus,\n            input#theConfirmationButton:active,\n            a.ArnShowRatesLink:hover, .WBConfirmedBooking .submit:hover, .GroupHoldForm .bookRoomButton:hover, .custom-button a:hover {\n                background: '
                                            )
                                            .concat(this.site_config.button_hover_background_color, ';\n                color: ')
                                            .concat(this.site_config.button_hover_text_color, ';\n                border: 1px solid ')
                                            .concat(
                                                this.site_config.button_hover_border_color,
                                                ';\n            }\n\n            .CheckRates input.submit:hover,\n            .CheckRates input.submit:focus,\n            .CheckRates input.submit:active {\n                background: '
                                            )
                                            .concat(this.site_config.button_hover_background_color, ';\n                color: ')
                                            .concat(
                                                this.site_config.button_hover_text_color,
                                                ';\n            }\n\n            .SinglePropDetail #moreRatesLink, #lightbox .dialog-button-ok input {\n                color: '
                                            )
                                            .concat(this.site_config.primary_color, ';\n                border-color: ')
                                            .concat(
                                                this.site_config.primary_color,
                                                ';\n            }\n            \n            .SinglePropDetail #moreRatesLink:hover {\n                background-color: '
                                            )
                                            .concat(
                                                this.site_config.primary_color,
                                                '\n            }\n\n            @media screen and (max-width:800px) {\n                #theBookingPage legend#policies-legend {\n                    color: '
                                            )
                                            .concat(
                                                this.site_config.secondary_text_color,
                                                '\n                }\n            }\n\n            header {\n                border-bottom:3px solid '
                                            )
                                            .concat(
                                                this.site_config.border_color,
                                                ';\n            }\n\n            .arnMapMarker.contracted-pin,\n            .arnMapMarker.contracted-pin.highlight{\n                border: 1px solid '
                                            )
                                            .concat(this.site_config.primary_text_color, ';\n                background: ')
                                            .concat(this.site_config.secondary_color, ';\n                color: ')
                                            .concat(
                                                this.site_config.primary_text_color,
                                                ';\n            }\n\n            .arnMapMarker.contracted-pin:hover {\n                border: 1px solid '
                                            )
                                            .concat(this.site_config.secondary_color, ';\n                background: ')
                                            .concat(this.site_config.primary_text_color, ';\n                color: ')
                                            .concat(
                                                this.site_config.secondary_color,
                                                ';\n            }\n\n            .arnMapMarker.contracted-pin .arnMapMarkerTriangle {\n                border-top-color: '
                                            )
                                            .concat(
                                                this.site_config.secondary_color,
                                                ';\n            }\n\n            #theOtherSubmitButton,\n            .ArnSecondarySearchOuterContainer select,\n            .ArnShowRatesLink,\n            .RootBody #theOtherSubmitButton,\n            .bookRoom,\n            .sort,\n            .HoldRoomsForm .submit, #lightbox .WBChangePasswordFormActions .ChangePasswordAction, .custom-button a {\n                border:1px solid '
                                            )
                                            .concat(this.site_config.border_color, ';\n            }\n\n            .holdRoom {\n                border: 1px solid ')
                                            .concat(
                                                this.site_config.border_color,
                                                ';\n            }\n\n            @media screen and (max-width:1105px) {\n                #arnCloseAnchorId,\n                .sort {\n                    border:1px solid '
                                            )
                                            .concat(
                                                this.site_config.primary_color,
                                                ';\n                }\n            }\n\n            @media screen and (max-width:800px) {\n                .sort-wrapper a:before {\n                    border:2px solid '
                                            )
                                            .concat(
                                                this.site_config.primary_color,
                                                ';\n                }\n            }\n\n            .active-page{\n                background: '
                                            )
                                            .concat(this.site_config.primary_color, ' !important;\n                color: ')
                                            .concat(this.site_config.primary_text_color, ' !important;\n                border: 1px solid ')
                                            .concat(
                                                this.site_config.border_color,
                                                ' !important;\n            }\n\n            .yui3-skin-sam .yui3-calendar-day-selected {\n                background-color: '
                                            )
                                            .concat(this.site_config.primary_color, ' !important;\n                color: ')
                                            .concat(
                                                this.site_config.primary_text_color,
                                                ' !important;\n            }\n    \n            .yui3-skin-sam .yui3-calendar-day:hover{\n                background-color: '
                                            )
                                            .concat(
                                                this.site_config.primary_color,
                                                ' !important;\n            }\n    \n            .yui3-skin-sam .yui3-calendar-content{\n                border-color: '
                                            )
                                            .concat(this.site_config.border_color, ' !important;\n            }\n        </style>\n        ')
                                    ));
                            },
                        },
                        {
                            key: 'applyDarkTheme',
                            value: function () {
                                'light' !== this.site_config.theme.toLowerCase() &&
                                    document.body.insertAdjacentHTML('beforeend', '<link href="'.concat(O.path, '/styles/dark.css" rel="stylesheet">'));
                            },
                        },
                        {
                            key: 'applyCustomStyles',
                            value: function () {
                                this.site_config.has_custom_styles &&
                                    document.body.insertAdjacentHTML('beforeend', '<link href="'.concat(this.site_config.custom_styles_url, '" rel="stylesheet">'));
                            },
                        },
                        {
                            key: 'styleCUGMapPins',
                            value: function () {
                                document.querySelector('.SearchHotels') &&
                                    'false' !== this.site_config.cug.is_cug &&
                                    document.body.insertAdjacentHTML(
                                        'beforeend',
                                        '\n        <style>\n            .SearchHotels .arnMapMarker {\n                background: '
                                            .concat(this.site_config.primary_color, ';\n                border-color:  ')
                                            .concat(this.site_config.primary_text_color, ';\n                color: ')
                                            .concat(
                                                this.site_config.primary_text_color,
                                                ';\n            }\n            \n            .SearchHotels .arnMapMarkerTriangle {\n                border-top-color: '
                                            )
                                            .concat(
                                                this.site_config.primary_color,
                                                ';\n            }\n    \n            .arnMapMarker:hover .arnMapMarkerTriangle {\n                border-top-color: '
                                            )
                                            .concat(this.site_config.primary_color, ';\n            }\n        ')
                                    );
                            },
                        },
                        {
                            key: 'showLanguageFromCongif',
                            value: function () {
                                var e,
                                    t = '',
                                    n = document.querySelector('#language'),
                                    r = document.querySelector('.config-container'),
                                    o = document.querySelector('meta[name="theme"]');
                                this.site_config &&
                                    r &&
                                    o &&
                                    n &&
                                    (this.site_config.show_language_select
                                        ? (document.querySelector('div#language-label').classList.add('config-label'),
                                          (e = o.getAttribute('content')),
                                          document.querySelector(".language-container div[value='".concat(e, "']")).classList.add('active-language'),
                                          document.body.insertAdjacentElement('afterBegin', r),
                                          r.insertAdjacentElement('afterBegin', n),
                                          ((t = n.querySelector('#language-label')).querySelector('span').innerHTML = document.querySelector('.active-language').innerHTML),
                                          t.addEventListener('click', function () {
                                              n.querySelector('.language-container').classList.toggle('show-language-container'),
                                                  window.document.documentMode || t.querySelector('svg').classList.toggle('flip-svg');
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
                                                  t.querySelector('svg').classList.toggle('flip-svg');
                                              }
                                          }))
                                        : (n.style.display = 'none'));
                            },
                        },
                        {
                            key: 'buildCurrencyDropdown',
                            value:
                                ((u = T(
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
                                                                fetch(''.concat(O.path, '/js/json/currencies.json'))
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
                                                                    j.createDropdownMenu('#currency-label', t, '.currency-content', '.dropdown');
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
                                var n, r, o, i;
                                this.site_config.show_tax_inclusive_rates ||
                                    (document.querySelector('.SearchHotels') &&
                                        (document.querySelectorAll('.ArnContainer').forEach(function (a) {
                                            (n = a.querySelector('.arnPrice')),
                                                (r = a.querySelector('.arnPrice .arnUnit')) &&
                                                    n &&
                                                    ((o = parseFloat(r.textContent) * e),
                                                    (i = o.toFixed(2)),
                                                    r &&
                                                        ('USD' === t
                                                            ? n.insertAdjacentHTML(
                                                                  'beforeEnd',
                                                                  '<div>per night</div><div class="full-stay">$'.concat(i, ' for ').concat(e, ' nights </div>')
                                                              )
                                                            : n.insertAdjacentHTML(
                                                                  'beforeEnd',
                                                                  '<div>per night</div><div class="full-stay">'.concat(i, ' ').concat(t, ' for ').concat(e, ' nights </div>')
                                                              ),
                                                        1 === e && (a.querySelector('.full-stay').style.display = 'none')));
                                        }),
                                        document.body.insertAdjacentHTML(
                                            'beforeEnd',
                                            '<style>.arnCurrency,.arnUnit{font-size: 17px;}.arnCurrency + div{font-weight:500;}</style>'
                                        )),
                                    document.querySelector('.SinglePropDetail') &&
                                        (document.querySelectorAll('.ArnNightlyRate').forEach(function (n) {
                                            (r = n.querySelector('strong')),
                                                (o = parseFloat(r.textContent.replace(/[^0-9.]/g, '').replace(/[\r\n]+/gm, '')) * e),
                                                r &&
                                                    o &&
                                                    (i = o.toFixed(2)) &&
                                                    ('USD' === t
                                                        ? r.insertAdjacentHTML(
                                                              'beforeEnd',
                                                              '<div>per night</div><div class="full-stay">$'.concat(i, ' for ').concat(e, ' nights </div>')
                                                          )
                                                        : r.insertAdjacentHTML(
                                                              'beforeEnd',
                                                              '<div>per night</div><div class="full-stay">'.concat(i, ' ').concat(t, ' for ').concat(e, ' nights </div>')
                                                          ),
                                                    1 === e && (n.querySelector('.full-stay').style.display = 'none'));
                                        }),
                                        document.body.insertAdjacentHTML(
                                            'beforeEnd',
                                            '<style>.ArnNightlyRate strong{font-size: 17px !important;}.ArnNightlyRate strong div:first-child{font-weight:500;margin-bottom:4px;}.ArnNightlyRate strong div{font-size:13px;}</style>'
                                        )));
                            },
                        },
                        {
                            key: 'getTotalNights',
                            value:
                                ((s = T(
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
                                        e.classList.contains('S16') || e.classList.contains('S20') ? n.push(!0) : n.push(!1);
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
                                        e.insertAdjacentHTML('afterEnd', '<hr class="prop-hr">');
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
                                                (r.classList.contains('S16') || (r.classList.contains('S20') && '' !== e)) &&
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
                                ((c = T(
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
                                    return (i = T(
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
                                    return (s = T(
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
                                    return (l = T(
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
                                                    '&layout=button&size=large&width=77&height=28&appId" width="77" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>\n                \n                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="I just booked my room for '
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
                                    if ('search-results' === this.page_name) {
                                        if (!document.querySelector('.ArnSecondarySearchOuterContainer') || !e.sidebar_ad.is_active) return;
                                        if (
                                            (document
                                                .querySelector('.ArnSecondarySearchOuterContainer')
                                                .insertAdjacentHTML(
                                                    'afterEnd',
                                                    '\n                <a class="sidebar-ad" href="'
                                                        .concat(e.sidebar_ad.outbound_url, '" target="_blank">\n                    <img src="')
                                                        .concat(e.sidebar_ad.image_url, '" alt="Advertisement">\n                </a>\n            ')
                                                ),
                                            !document.querySelector('#currentPropertyPage .ArnProperty:nth-child(2)') || !e.between_property_ad.is_active)
                                        )
                                            return;
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
                                            );
                                    }
                                    if ('confirmation' === this.page_name) {
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
                                        '\n            <div class="info-banner">\n                <div class="message-content">\n                    <h1>Book with Confidence:</h1>\n                    <a class="details-link" href="https://www.hotelsforhope.com/covid19/" target="_blank">\n                        <h1>COVID-19 Update</h1> \n                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clone fa-w-16 fa-3x" width="18px">\n                            <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z" class="">\n                            </path>\n                        </svg>\n                    </a>\n                    <a style="margin-left: 12px;" class="details-link" href="https://www.hotelsforhope.com/covid-19-hotel-cleaning-policies/" target="_blank">\n                        <h1>Cleaning Policies</h1>                    \n                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clone fa-w-16 fa-3x" width="18px">\n                            <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z" class="">\n                            </path>\n                        </svg>\n                    </a>\n                </div>\n                <button class="close-banner-button close-alert">X</button>\n            </div>\n        '
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
                                    j.replaceSpecificText('.confirmedDueNowCharge .confirmationAgreement', /(^|)You(?=\s|$)/gi, 'I'),
                                    j.replaceSpecificText('.confirmedDueNowCharge .confirmationAgreement', /(^|)your(?=|$)/gi, 'my'),
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
                                        var h = o.tabIndex,
                                            f = a.tabIndex,
                                            p = i.tabIndex,
                                            m = c.tabIndex,
                                            y = s.tabIndex,
                                            g = u.tabIndex,
                                            v = l.tabIndex,
                                            b = d.tabIndex;
                                        o.setAttribute('tabIndex', p),
                                            a.setAttribute('tabIndex', h),
                                            i.setAttribute('tabIndex', m),
                                            c.setAttribute('tabIndex', f),
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
                                ((a = T(
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
                                                        return (r = document.querySelector(n)), (e.next = 5), j.fetchHTMLFromFile(t);
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
                                ((i = T(
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
                                                            return (t = this.site_config.header.logo_outbound_url), (e.next = 5), j.waitForSelectorInDOM('.logo');
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
                                ((o = T(
                                    regeneratorRuntime.mark(function e() {
                                        var t, n;
                                        return regeneratorRuntime.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (j.matchMediaQuery('max-width: 800px')) {
                                                                e.next = 2;
                                                                break;
                                                            }
                                                            return e.abrupt('return');
                                                        case 2:
                                                            return (e.next = 4), j.waitForSelectorInDOM('#theCheckIn');
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
                    ]) && B(t.prototype, n),
                    r && B(t, r),
                    e
                );
            })();
    },
    function (e, t, n) {
        n(46)('asyncIterator');
    },
    function (e, t, n) {
        'use strict';
        var r = n(1),
            o = n(8),
            i = n(3),
            a = n(4),
            c = n(10),
            s = n(71).KEY,
            u = n(7),
            l = n(21),
            d = n(25),
            h = n(17),
            f = n(0),
            p = n(47),
            m = n(46),
            y = n(72),
            g = n(75),
            v = n(2),
            b = n(6),
            S = n(28),
            w = n(12),
            _ = n(34),
            A = n(22),
            x = n(52),
            k = n(77),
            C = n(55),
            L = n(51),
            R = n(5),
            M = n(13),
            q = C.f,
            P = R.f,
            E = k.f,
            T = r.Symbol,
            B = r.JSON,
            O = B && B.stringify,
            F = f('_hidden'),
            j = f('toPrimitive'),
            H = {}.propertyIsEnumerable,
            I = l('symbol-registry'),
            D = l('symbols'),
            N = l('op-symbols'),
            W = Object.prototype,
            U = 'function' == typeof T && !!L.f,
            $ = r.QObject,
            V = !$ || !$.prototype || !$.prototype.findChild,
            G =
                i &&
                u(function () {
                    return (
                        7 !=
                        x(
                            P({}, 'a', {
                                get: function () {
                                    return P(this, 'a', {value: 7}).a;
                                },
                            })
                        ).a
                    );
                })
                    ? function (e, t, n) {
                          var r = q(W, t);
                          r && delete W[t], P(e, t, n), r && e !== W && P(W, t, r);
                      }
                    : P,
            Y = function (e) {
                var t = (D[e] = x(T.prototype));
                return (t._k = e), t;
            },
            z =
                U && 'symbol' == typeof T.iterator
                    ? function (e) {
                          return 'symbol' == typeof e;
                      }
                    : function (e) {
                          return e instanceof T;
                      },
            J = function (e, t, n) {
                return (
                    e === W && J(N, t, n),
                    v(e),
                    (t = _(t, !0)),
                    v(n),
                    o(D, t)
                        ? (n.enumerable ? (o(e, F) && e[F][t] && (e[F][t] = !1), (n = x(n, {enumerable: A(0, !1)}))) : (o(e, F) || P(e, F, A(1, {})), (e[F][t] = !0)), G(e, t, n))
                        : P(e, t, n)
                );
            },
            Q = function (e, t) {
                v(e);
                for (var n, r = y((t = w(t))), o = 0, i = r.length; i > o; ) J(e, (n = r[o++]), t[n]);
                return e;
            },
            K = function (e) {
                var t = H.call(this, (e = _(e, !0)));
                return !(this === W && o(D, e) && !o(N, e)) && (!(t || !o(this, e) || !o(D, e) || (o(this, F) && this[F][e])) || t);
            },
            Z = function (e, t) {
                if (((e = w(e)), (t = _(t, !0)), e !== W || !o(D, t) || o(N, t))) {
                    var n = q(e, t);
                    return !n || !o(D, t) || (o(e, F) && e[F][t]) || (n.enumerable = !0), n;
                }
            },
            X = function (e) {
                for (var t, n = E(w(e)), r = [], i = 0; n.length > i; ) o(D, (t = n[i++])) || t == F || t == s || r.push(t);
                return r;
            },
            ee = function (e) {
                for (var t, n = e === W, r = E(n ? N : w(e)), i = [], a = 0; r.length > a; ) !o(D, (t = r[a++])) || (n && !o(W, t)) || i.push(D[t]);
                return i;
            };
        U ||
            (c(
                (T = function () {
                    if (this instanceof T) throw TypeError('Symbol is not a constructor!');
                    var e = h(arguments.length > 0 ? arguments[0] : void 0),
                        t = function (n) {
                            this === W && t.call(N, n), o(this, F) && o(this[F], e) && (this[F][e] = !1), G(this, e, A(1, n));
                        };
                    return i && V && G(W, e, {configurable: !0, set: t}), Y(e);
                }).prototype,
                'toString',
                function () {
                    return this._k;
                }
            ),
            (C.f = Z),
            (R.f = J),
            (n(54).f = k.f = X),
            (n(27).f = K),
            (L.f = ee),
            i && !n(16) && c(W, 'propertyIsEnumerable', K, !0),
            (p.f = function (e) {
                return Y(f(e));
            })),
            a(a.G + a.W + a.F * !U, {Symbol: T});
        for (var te = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), ne = 0; te.length > ne; )
            f(te[ne++]);
        for (var re = M(f.store), oe = 0; re.length > oe; ) m(re[oe++]);
        a(a.S + a.F * !U, 'Symbol', {
            for: function (e) {
                return o(I, (e += '')) ? I[e] : (I[e] = T(e));
            },
            keyFor: function (e) {
                if (!z(e)) throw TypeError(e + ' is not a symbol!');
                for (var t in I) if (I[t] === e) return t;
            },
            useSetter: function () {
                V = !0;
            },
            useSimple: function () {
                V = !1;
            },
        }),
            a(a.S + a.F * !U, 'Object', {
                create: function (e, t) {
                    return void 0 === t ? x(e) : Q(x(e), t);
                },
                defineProperty: J,
                defineProperties: Q,
                getOwnPropertyDescriptor: Z,
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
            B &&
                a(
                    a.S +
                        a.F *
                            (!U ||
                                u(function () {
                                    var e = T();
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
                                    O.apply(B, r)
                                );
                        },
                    }
                ),
            T.prototype[j] || n(9)(T.prototype, j, T.prototype.valueOf),
            d(T, 'Symbol'),
            d(Math, 'Math', !0),
            d(r.JSON, 'JSON', !0);
    },
    function (e, t, n) {
        var r = n(55),
            o = n(59),
            i = n(8),
            a = n(4),
            c = n(6),
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
    function (e, t, n) {
        'use strict';
        var r = n(60),
            o = n(2),
            i = n(56),
            a = n(61),
            c = n(26),
            s = n(39),
            u = n(40),
            l = n(7),
            d = Math.min,
            h = [].push,
            f = !l(function () {
                RegExp(4294967295, 'y');
            });
        n(42)('split', 2, function (e, t, n, l) {
            var p;
            return (
                (p =
                    'c' == 'abbc'.split(/(b)*/)[1] ||
                    4 != 'test'.split(/(?:)/, -1).length ||
                    2 != 'ab'.split(/(?:ab)*/).length ||
                    4 != '.'.split(/(.?)(.?)/).length ||
                    '.'.split(/()()/).length > 1 ||
                    ''.split(/.?/).length
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
                                      f = void 0 === t ? 4294967295 : t >>> 0,
                                      p = new RegExp(e.source, l + 'g');
                                  (i = u.call(p, o)) &&
                                  !(
                                      (a = p.lastIndex) > d &&
                                      (s.push(o.slice(d, i.index)), i.length > 1 && i.index < o.length && h.apply(s, i.slice(1)), (c = i[0].length), (d = a), s.length >= f)
                                  );

                              )
                                  p.lastIndex === i.index && p.lastIndex++;
                              return d === o.length ? (!c && p.test('')) || s.push('') : s.push(o.slice(d)), s.length > f ? s.slice(0, f) : s;
                          }
                        : '0'.split(void 0, 0).length
                        ? function (e, t) {
                              return void 0 === e && 0 === t ? [] : n.call(this, e, t);
                          }
                        : n),
                [
                    function (n, r) {
                        var o = e(this),
                            i = null == n ? void 0 : n[t];
                        return void 0 !== i ? i.call(n, o, r) : p.call(String(o), n, r);
                    },
                    function (e, t) {
                        var r = l(p, e, this, t, p !== n);
                        if (r.done) return r.value;
                        var u = o(e),
                            h = String(this),
                            m = i(u, RegExp),
                            y = u.unicode,
                            g = (u.ignoreCase ? 'i' : '') + (u.multiline ? 'm' : '') + (u.unicode ? 'u' : '') + (f ? 'y' : 'g'),
                            v = new m(f ? u : '^(?:' + u.source + ')', g),
                            b = void 0 === t ? 4294967295 : t >>> 0;
                        if (0 === b) return [];
                        if (0 === h.length) return null === s(v, h) ? [h] : [];
                        for (var S = 0, w = 0, _ = []; w < h.length; ) {
                            v.lastIndex = f ? w : 0;
                            var A,
                                x = s(v, f ? h : h.slice(w));
                            if (null === x || (A = d(c(v.lastIndex + (f ? 0 : w)), h.length)) === S) w = a(h, w, y);
                            else {
                                if ((_.push(h.slice(S, w)), _.length === b)) return _;
                                for (var k = 1; k <= x.length - 1; k++) if ((_.push(x[k]), _.length === b)) return _;
                                w = S = A;
                            }
                        }
                        return _.push(h.slice(S)), _;
                    },
                ]
            );
        });
    },
    function (e, t, n) {
        e.exports = n(21)('native-function-to-string', Function.toString);
    },
    function (e, t, n) {
        var r = n(17)('meta'),
            o = n(6),
            i = n(8),
            a = n(5).f,
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
        var r = n(13),
            o = n(51),
            i = n(27);
        e.exports = function (e) {
            var t = r(e),
                n = o.f;
            if (n) for (var a, c = n(e), s = i.f, u = 0; c.length > u; ) s.call(e, (a = c[u++])) && t.push(a);
            return t;
        };
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
        var r = n(14);
        e.exports =
            Array.isArray ||
            function (e) {
                return 'Array' == r(e);
            };
    },
    function (e, t, n) {
        var r = n(5),
            o = n(2),
            i = n(13);
        e.exports = n(3)
            ? Object.defineProperties
            : function (e, t) {
                  o(e);
                  for (var n, a = i(t), c = a.length, s = 0; c > s; ) r.f(e, (n = a[s++]), t[n]);
                  return e;
              };
    },
    function (e, t, n) {
        var r = n(12),
            o = n(54).f,
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
    function (e, t) {
        e.exports = function (e, t, n, r) {
            if (!(e instanceof t) || (void 0 !== r && r in e)) throw TypeError(n + ': incorrect invocation!');
            return e;
        };
    },
    function (e, t, n) {
        var r = n(23),
            o = n(80),
            i = n(81),
            a = n(2),
            c = n(26),
            s = n(82),
            u = {},
            l = {};
        ((t = e.exports = function (e, t, n, d, h) {
            var f,
                p,
                m,
                y,
                g = h
                    ? function () {
                          return e;
                      }
                    : s(e),
                v = r(n, d, t ? 2 : 1),
                b = 0;
            if ('function' != typeof g) throw TypeError(e + ' is not iterable!');
            if (i(g)) {
                for (f = c(e.length); f > b; b++) if ((y = t ? v(a((p = e[b]))[0], p[1]) : v(e[b])) === u || y === l) return y;
            } else for (m = g.call(e); !(p = m.next()).done; ) if ((y = o(m, v, p.value, t)) === u || y === l) return y;
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
        var r = n(19),
            o = n(0)('iterator'),
            i = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (r.Array === e || i[o] === e);
        };
    },
    function (e, t, n) {
        var r = n(29),
            o = n(0)('iterator'),
            i = n(19);
        e.exports = n(11).getIteratorMethod = function (e) {
            if (null != e) return e[o] || e['@@iterator'] || i[r(e)];
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
        var r = n(1),
            o = n(57).set,
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
                    h = document.createTextNode('');
                new i(u).observe(h, {characterData: !0}),
                    (n = function () {
                        h.data = d = !d;
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
            o = n(6),
            i = n(58);
        e.exports = function (e, t) {
            if ((r(e), o(t) && t.constructor === e)) return t;
            var n = i.f(e);
            return (0, n.resolve)(t), n.promise;
        };
    },
    function (e, t, n) {
        var r = n(10);
        e.exports = function (e, t, n) {
            for (var o in t) r(e, o, t[o], n);
            return e;
        };
    },
    function (e, t, n) {
        'use strict';
        var r = n(1),
            o = n(5),
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
        var r = n(40);
        n(4)({target: 'RegExp', proto: !0, forced: r !== /./.exec}, {exec: r});
    },
    function (e, t, n) {
        'use strict';
        n(94);
        var r = n(2),
            o = n(41),
            i = n(3),
            a = /./.toString,
            c = function (e) {
                n(10)(RegExp.prototype, 'toString', e, !0);
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
        n(3) && 'g' != /./g.flags && n(5).f(RegExp.prototype, 'flags', {configurable: !0, get: n(41)});
    },
    function (e, t, n) {
        var r = n(5).f,
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
    function (e, t) {
        e.exports = function (e, t) {
            return {value: t, done: !!e};
        };
    },
    function (e, t, n) {
        'use strict';
        var r = n(16),
            o = n(4),
            i = n(10),
            a = n(9),
            c = n(19),
            s = n(98),
            u = n(25),
            l = n(59),
            d = n(0)('iterator'),
            h = !([].keys && 'next' in [].keys()),
            f = function () {
                return this;
            };
        e.exports = function (e, t, n, p, m, y, g) {
            s(n, t, p);
            var v,
                b,
                S,
                w = function (e) {
                    if (!h && e in k) return k[e];
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
                _ = t + ' Iterator',
                A = 'values' == m,
                x = !1,
                k = e.prototype,
                C = k[d] || k['@@iterator'] || (m && k[m]),
                L = C || w(m),
                R = m ? (A ? w('entries') : L) : void 0,
                M = ('Array' == t && k.entries) || C;
            if (
                (M && (S = l(M.call(new e()))) !== Object.prototype && S.next && (u(S, _, !0), r || 'function' == typeof S[d] || a(S, d, f)),
                A &&
                    C &&
                    'values' !== C.name &&
                    ((x = !0),
                    (L = function () {
                        return C.call(this);
                    })),
                (r && !g) || (!h && !x && k[d]) || a(k, d, L),
                (c[t] = L),
                (c[_] = f),
                m)
            )
                if (((v = {values: A ? L : w('values'), keys: y ? L : w('keys'), entries: R}), g)) for (b in v) b in k || i(k, b, v[b]);
                else o(o.P + o.F * (h || x), t, v);
            return v;
        };
    },
    function (e, t, n) {
        'use strict';
        var r = n(52),
            o = n(22),
            i = n(25),
            a = {};
        n(9)(a, n(0)('iterator'), function () {
            return this;
        }),
            (e.exports = function (e, t, n) {
                (e.prototype = r(a, {next: o(1, n)})), i(e, t + ' Iterator');
            });
    },
    function (e, t, n) {
        var r = n(4),
            o = n(100)(!0);
        r(r.S, 'Object', {
            entries: function (e) {
                return o(e);
            },
        });
    },
    function (e, t, n) {
        var r = n(3),
            o = n(13),
            i = n(12),
            a = n(27).f;
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
        var r = n(4);
        r(r.P, 'String', {repeat: n(103)});
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
        'use strict';
        var r = n(4),
            o = n(50)(!0);
        r(r.P, 'Array', {
            includes: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
        }),
            n(62)('includes');
    },
    function (e, t, n) {
        'use strict';
        var r = n(4),
            o = n(106);
        r(r.P + r.F * n(107)('includes'), 'String', {
            includes: function (e) {
                return !!~o(this, e, 'includes').indexOf(e, arguments.length > 1 ? arguments[1] : void 0);
            },
        });
    },
    function (e, t, n) {
        var r = n(60),
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
                        return 'a=1' === new t('?a=1').toString() && 'function' == typeof t.prototype.set;
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
                                        if (((i.href = t), r && (o.body.appendChild(i), (i.href = i.href)), ':' === i.protocol || !/:/.test(i.href)))
                                            throw new TypeError('Invalid URL');
                                        Object.defineProperty(this, '_anchorElement', {value: i});
                                        var a = new e.URLSearchParams(this.search),
                                            c = !0,
                                            s = !0,
                                            u = this;
                                        ['append', 'delete', 'set'].forEach(function (e) {
                                            var t = a[e];
                                            a[e] = function () {
                                                t.apply(a, arguments), c && ((s = !1), (u.search = a.toString()), (s = !0));
                                            };
                                        }),
                                            Object.defineProperty(this, 'searchParams', {value: a, enumerable: !0});
                                        var l = void 0;
                                        Object.defineProperty(this, '_updateSearchParams', {
                                            enumerable: !1,
                                            configurable: !1,
                                            writable: !1,
                                            value: function () {
                                                this.search !== l && ((l = this.search), s && ((c = !1), this.searchParams._fromString(this.search), (c = !0)));
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
        }.call(this, n(109)));
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
    function (e, t, n) {
        var r = n(4),
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
        'use strict';
        n.r(t);
        n(66), n(67), n(37), n(30), n(68), n(38), n(69);
        var r = n(20),
            o = new r.a(),
            i = 'resbeat_test-'.concat(62011);
        n(45);
        var a = n(65),
            c = n(32);
        function s(e) {
            return (s =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                      })(e);
        }
        function u(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a),
                    s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function l(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                        u(i, r, o, a, c, 'next', e);
                    }
                    function c(e) {
                        u(i, r, o, a, c, 'throw', e);
                    }
                    a(void 0);
                });
            };
        }
        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        function h(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function f(e, t) {
            return (f =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function p(e, t, n) {
            return (p =
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
        var y = new r.a(),
            g = new c.a(),
            v = (function (e) {
                function t(e) {
                    var n;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                        })(this, t),
                        (n = (function (e, t) {
                            return !t || ('object' !== s(t) && 'function' != typeof t) ? h(e) : t;
                        })(this, m(t).call(this, e))),
                        p(m(t.prototype), 'init', h(n)).call(h(n)),
                        (n.site_config = e),
                        n
                    );
                }
                var n, r, o, i, a, c;
                return (
                    (function (e, t) {
                        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
                        (e.prototype = Object.create(t && t.prototype, {constructor: {value: e, writable: !0, configurable: !0}})), t && f(e, t);
                    })(t, e),
                    (n = t),
                    (r = [
                        {
                            key: 'init',
                            value: function () {
                                var e = this;
                                this.applyResbeatStyles(),
                                    this.applyResbeatConfigColors(),
                                    this.updateLogin(),
                                    this.styleRegisterContainer(),
                                    this.displayCheckoutRewardPoints(),
                                    this.displayRewardPoints('table.ArnRateList'),
                                    this.confirmationPointsEarned(),
                                    this.updateHeaderLinks(),
                                    this.rerunFunctionsOnMoreRoomsClick(),
                                    this.moveConfigContainer(),
                                    this.removeAnchorTag(),
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
                                        l(
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
                                    g.updateHTML('#theReasonForInquiryAjax select > option:first-child', 'Reason for Inquiry'),
                                    g.updateHTML('.static-bookingLink', 'Booking Guide'),
                                    g.updateHTML('.static-rewardsLink', 'Rewards Guide');
                            },
                        },
                        {
                            key: 'updateLogin',
                            value:
                                ((c = l(
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
                                                '\n            <div id="register-container">\n                <h2 id="new-user-text">NEW <strong>USER</strong>?</h2>\n                <div id="register-btn">\n                </div>\n            </div>    \n        '
                                            );
                                    var e = document.querySelector('.CreateAnAccountAction');
                                    document.querySelector('#register-btn').insertAdjacentElement('afterbegin', e), (e.textContent = 'REGISTER');
                                }
                            },
                        },
                        {
                            key: 'displayCheckoutRewardPoints',
                            value: function () {
                                if (document.querySelector('.CheckOutForm')) {
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
                                ((a = l(
                                    regeneratorRuntime.mark(function e(t) {
                                        var n, r, o;
                                        return regeneratorRuntime.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (document.querySelector('.SinglePropDetail')) {
                                                                e.next = 2;
                                                                break;
                                                            }
                                                            return e.abrupt('return');
                                                        case 2:
                                                            return (e.next = 4), g.waitForSelectorInDOM('.ArnNightlyRate');
                                                        case 4:
                                                            (n = document.querySelectorAll(t)),
                                                                (r = window.matchMedia('(max-width: 800px)')),
                                                                (o = '  \n            <style>\n                .points{\n                    color: '.concat(
                                                                    this.site_config.secondary_color,
                                                                    ";\n                }\n    \n                div.points-earned span {\n                    font-family: 'Avenir';\n                    letter-spacing: 1px;\n                }\n            </style>\n            "
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
                                                                                                  '</span> \n                </div>\n                '
                                                                                              )
                                                                                          )
                                                                                    : e
                                                                                          .querySelector('tbody tr')
                                                                                          .insertAdjacentHTML(
                                                                                              'afterend',
                                                                                              '\n                <div class="points-earned">\n                Earn <b class="points">'.concat(
                                                                                                  u,
                                                                                                  '</b> <span>RES<b>BEAT</b> Rewards</span> \n                </div>\n                '
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
                                        document
                                            .querySelector('.GuestForms')
                                            .insertAdjacentHTML(
                                                'beforeEnd',
                                                '\n            <div class="points-earned">\n                <div class="rewards-span">\n                    <span>RES<b>BEAT</b> Rewards Earned</span>\n                 <span>'.concat(
                                                    e,
                                                    '</span>\n                </div>\n                <p class="awarded-after-checkout">Your RES<b>BEAT</b> Rewards will be added to your Rewards account 48 hours after checkout.</p>\n            </div>\n            '
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
                                    var n = document.querySelector('#moreRatesLink');
                                    n &&
                                        n.addEventListener(
                                            'click',
                                            l(
                                                regeneratorRuntime.mark(function n() {
                                                    return regeneratorRuntime.wrap(function (n) {
                                                        for (;;)
                                                            switch ((n.prev = n.next)) {
                                                                case 0:
                                                                    return (n.next = 2), g.waitForSelectorInDOM('#moreRates');
                                                                case 2:
                                                                    p(m(t.prototype), 'insertPercentageOffText', e).call(e, '.SinglePropDetail .rateRow'),
                                                                        e.displayRewardPoints('table.ArnRateList');
                                                                case 4:
                                                                case 'end':
                                                                    return n.stop();
                                                            }
                                                    }, n);
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
                                document.body.insertAdjacentHTML('beforeend', '<link href="'.concat(y.path, '/styles/resbeat.css" rel="stylesheet">'));
                            },
                        },
                        {
                            key: 'removeAnchorTag',
                            value:
                                ((i = l(
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
                            key: 'applyResbeatConfigColors',
                            value: function () {
                                var e = document.querySelector('#h4h-styles');
                                this.site_config &&
                                    e &&
                                    e.insertAdjacentHTML(
                                        'beforeEnd',
                                        "\n            <style>\n            .ArnPages a,\n            .ArnPages, .WBValidatedRegistrationForm #theUserNameAjax input,\n            .WBValidatedRegistrationForm #theFirstNameAjax input,\n            .WBValidatedRegistrationForm #theLastNameAjax input,\n            .WBValidatedRegistrationForm #theEditablePasswordAjax input,\n            .WBValidatedRegistrationForm #theEditableConfirmPasswordAjax input,\n            input[type='email'].email-mask,\n            .WBLoginFormFields input, .WBValidatedRegistrationForm .WBValidatedRegistrationFormActions input, .RootBody .search-messaging #user-name strong, .RootBody .search-messaging #user-name, .RootBody .search-messaging h4, .CheckOutForm .total-points-earned td, .MemberNotAuthenticated #theUserNameAjax input,\n            .MemberNotAuthenticated #thePasswordAjax input,\n            .MemberNotAuthenticated #new-user-text,\n            .MemberNotAuthenticated #theWBLoginFormBody h1,\n            .MemberNotAuthenticated .ForgotPasswordAction, .ArnSupportLinks, .MemberNotAuthenticated #new-user-text strong,\n            .MemberNotAuthenticated #theWBLoginFormBody strong, .MemberNotAuthenticated .LoginAction,\n            .SendMeNewPasswordAction.submit,\n            .ArnShowRatesLink,\n            .bookRoom,\n            .holdRoom,\n            #moreRatesLink,\n            .GuestForms legend,\n            .WBSupportFormActions .SendRequestAction, .ArnSearchHeader, .SinglePropDetail .ArnLeftListContainer > span.translateMe, .SearchHotels .lblAmenities,\n            .SearchHotels .lblRating,\n            .SearchHotels .sort-wrapper h4, #theRateTotals > tbody > .discountRow td, .WBResendOrCancelFormActions input {\n                font-family: '"
                                            .concat(
                                                this.site_config.google_font_name,
                                                "', 'Helvetica';\n            }\n            \n            .SearchHotels .arnPrice, .roomCount, .SinglePropDetail .ArnNightlyRate strong, .SinglePropDetail .points-earned, .CheckOutForm tr.discount th, .CheckOutForm tr.discount td  {\n                color: "
                                            )
                                            .concat(
                                                this.site_config.secondary_color,
                                                ' !important;\n            }\n            \n            .support-details a, #theSubmitButton:hover,\n            #theOtherSubmitButton:hover,\n            .CheckRates .submit:hover,\n            .CheckOutForm #theConfirmationButton:hover, .ArnRateButton a,\n            .bookRoom,\n            .holdRoom, .LoginAction.submit:hover,\n            #register-btn a:hover,\n            .RegisterAction.submit:hover,\n            .SendMeNewPasswordAction.submit:hover,\n            .WBSupportForm .SendRequestAction:hover, #lightbox .dialog-button-ok input, .SinglePropDetail .CheckRates .submit:hover, .CheckOutForm .total-points-earned th, .CheckOutForm .total-points-earned td, .WBResendOrCancelFormActions input {\n                color: '
                                            )
                                            .concat(
                                                this.site_config.primary_color,
                                                ' !important;\n            }\n            \n            #theSubmitButton,\n            #theOtherSubmitButton, .RootBody #theOtherSubmitButton\n            .SinglePropDetail .CheckRates .submit,\n            .CheckOutForm #theConfirmationButton, .SinglePropDetail .beat-em, .SearchHotels .beat-em, .LoginAction.submit,\n            #register-btn a,\n            .RegisterAction.submit,\n            .SendMeNewPasswordAction.submit,\n            #moreRatesLink,\n            .WBSupportForm .SendRequestAction, .ArnRateButton a:hover,\n            .bookRoom:hover,\n            .holdRoom:hover, .SearchHotels .sort-wrapper a.active, #lightbox .WBChangePasswordFormActions .ChangePasswordAction:hover, #lightbox .dialog-button-ok input:hover, .ConfirmationForm .points-earned, .SinglePropDetail .SimpleSearch input.submit, .WBResendOrCancelFormActions input:hover  {\n                color: '
                                            )
                                            .concat(
                                                this.site_config.primary_text_color,
                                                " !important;\n            }\n        \n            .WBValidatedRegistrationForm #theUserNameAjax input,\n            .WBValidatedRegistrationForm #theFirstNameAjax input,\n            .WBValidatedRegistrationForm #theLastNameAjax input,\n            .WBValidatedRegistrationForm #theEditablePasswordAjax input,\n            .WBValidatedRegistrationForm #theEditableConfirmPasswordAjax input,\n            input[type='email'].email-mask,\n            .WBLoginFormFields input, .SearchHotels #theSearchBox input,\n            .SearchHotels #theSearchBox select, #lightbox .WBChangePasswordFormFields input[type='password'], .MemberNotAuthenticated #theUserNameAjax input,\n            .MemberNotAuthenticated #thePasswordAjax input, .SearchHotels .ArnContainer, .WBSupportForm input,\n            .WBSupportForm select,\n            .WBSupportForm textarea, .RootBody .ArnPrimarySearchContainer, .ArnSupportLinks, .SinglePropDetail .SimpleSearch input,\n            .SinglePropDetail .SimpleSearch select, .totalsTable tr th,\n            .totalsTable tr td, #theBookingPage .PaymentPolicies, .support-details, .SearchHotels .currencies-container {\n                background: "
                                            )
                                            .concat(
                                                this.site_config.secondary_background_color,
                                                ' !important;\n            }\n            \n            \n            .SinglePropDetail .SimpleSearch, .config-container, #theSubmitButton:hover,\n            #theOtherSubmitButton:hover,\n            .CheckRates .submit:hover,\n            .CheckOutForm #theConfirmationButton:hover, .LoginAction.submit:hover,\n            #register-btn a:hover,\n            .RegisterAction.submit:hover,\n            .SendMeNewPasswordAction.submit:hover,\n            .WBSupportForm .SendRequestAction:hover, .SearchHotels .ArnPrimarySearchContainer, #lightbox .window, #lightbox, .SinglePropDetail .CheckRates .submit:hover, .WBResendOrCancelFormActions input  {\n                background: '
                                            )
                                            .concat(
                                                this.site_config.background_color,
                                                ' !important;\n            }\n            \n            #theSubmitButton,\n            #theOtherSubmitButton,\n            .SinglePropDetail .CheckRates .submit,\n            .CheckOutForm #theConfirmationButton, .LoginAction.submit,\n            #register-btn a,\n            .RegisterAction.submit,\n            .SendMeNewPasswordAction.submit,\n            #moreRatesLink,\n            .WBSupportForm .SendRequestAction, .ArnRateButton a:hover,\n            .bookRoom:hover,\n            .holdRoom:hover, #lightbox .WBChangePasswordFormActions .ChangePasswordAction:hover, #lightbox .dialog-button-ok input:hover, .ConfirmationForm .points-earned, .WBResendOrCancelFormActions input:hover   {\n                background: '
                                            )
                                            .concat(
                                                this.site_config.primary_color,
                                                ' !important;\n            }\n            \n            .WBLoginFormActions input,\n            #register-btn a,\n            .WBValidatedRegistrationFormActions input,\n            #theOtherSubmitButton,\n            #theSubmitButton,\n            .ArnShowRatesLink,\n            .SinglePropDetail .CheckRates .submit,\n            .SinglePropDetail .bookRoom,\n            .SinglePropDetail #moreRatesLink,\n            .CheckOutForm #theConfirmationButton,\n            .WBSupportFormActions input,\n            .WBForgotPasswordFormActions input, .WBLoginFormActions input:hover,\n            #register-btn a:hover,\n            .WBValidatedRegistrationFormActions input:hover,\n            #theOtherSubmitButton:hover,\n            #theSubmitButton:hover,\n            .ArnShowRatesLink:hover,\n            .SinglePropDetail .CheckRates .submit:hover,\n            .SinglePropDetail .bookRoom:hover,\n            .SinglePropDetail #moreRatesLink:hover,\n            .CheckOutForm #theConfirmationButton:hover,\n            .WBSupportFormActions input:hover,\n            .WBForgotPasswordFormActions input:hover, #theSubmitButton,\n            #theOtherSubmitButton,\n            .SinglePropDetail .CheckRates .submit,\n            .CheckOutForm #theConfirmationButton, .ArnRateButton a:hover,\n            .bookRoom:hover,\n            .holdRoom:hover, .ArnRateButton a,\n            .bookRoom,\n            .holdRoom, .LoginAction.submit:hover,\n            #register-btn a:hover,\n            .RegisterAction.submit:hover,\n            .SendMeNewPasswordAction.submit:hover,\n            .WBSupportForm .SendRequestAction:hover, .LoginAction.submit,\n            #register-btn a,\n            .RegisterAction.submit,\n            .SendMeNewPasswordAction.submit,\n            #moreRatesLink,\n            .WBSupportForm .SendRequestAction, #lightbox .WBChangePasswordFormActions .ChangePasswordAction, #lightbox .dialog-button-ok input, .WBConfirmedBooking .submit, .WBResendOrCancelFormActions input  {\n                border: 3px solid '
                                            )
                                            .concat(
                                                this.site_config.primary_color,
                                                ' !important;\n            }\n\n            .SearchHotels .beat-em, .SinglePropDetail .beat-em {\n                background-color: '
                                            )
                                            .concat(this.site_config.secondary_color, ';\n            }\n\n            header {\n                border-bottom: 1px solid ')
                                            .concat(
                                                this.site_config.secondary_background_color,
                                                ';\n            }\n\n            @media screen and (max-width: 800px) {\n                .currencies-container {\n                    background: '
                                            )
                                            .concat(this.site_config.background_color, ';\n                }\n            }\n            </style>\n            ')
                                    );
                            },
                        },
                    ]) && d(n.prototype, r),
                    o && d(n, o),
                    t
                );
            })(a.a);
        function b(e) {
            return (b =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                      })(e);
        }
        function S(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a),
                    s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function w(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        function _(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function A(e, t) {
            return (A =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function x(e, t, n) {
            return (x =
                'undefined' != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (e, t, n) {
                          var r = (function (e, t) {
                              for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = k(e)); );
                              return e;
                          })(e, t);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, t);
                              return o.get ? o.get.call(n) : o.value;
                          }
                      })(e, t, n || e);
        }
        function k(e) {
            return (k = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        var C = new c.a(),
            L = new (function () {
                return {
                    site_id: 62011,
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
                    fav_icon_url: ''.concat(o.path, '/site_configs/').concat(i, '/img/favicon.png'),
                    has_custom_styles: !0,
                    custom_styles_url: ''.concat(o.path, '/site_configs/').concat(i, '/').concat(62011, '.css'),
                    has_social_sharing: !0,
                    header: {
                        logo_file_location: ''.concat(o.path, '/site_configs/').concat(i, '/img/logo.svg'),
                        logo_outbound_url: 'https://hotels.resbeat.com',
                        background: '#fff',
                        logo_flex_position: 'space-between',
                        logo_max_width: '230px',
                    },
                    banner_image_url: '#fff',
                    map_marker_image_url: ''.concat(o.path, '/site_configs/').concat(i, '/img/favicon.png'),
                    theme: 'light',
                    background_color: '#fff',
                    secondary_background_color: '#f0f0f0',
                    primary_color: '#215853',
                    secondary_color: '#e2ad37',
                    primary_text_color: '#fff',
                    secondary_text_color: '#215853',
                    border_color: '#215853',
                    button_hover_background_color: '#fff',
                    button_hover_text_color: '#215853',
                    button_hover_border_color: '#215853',
                    google_font_url: '',
                    google_font_name: 'Avenir',
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
            function t() {
                var e;
                return (
                    (function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, t),
                    (e = (function (e, t) {
                        return !t || ('object' !== b(t) && 'function' != typeof t) ? _(e) : t;
                    })(this, k(t).call(this, L))),
                    x(k(t.prototype), 'init', _(e)).call(_(e)),
                    e.init(),
                    e
                );
            }
            var n, r, o, i, a;
            return (
                (function (e, t) {
                    if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
                    (e.prototype = Object.create(t && t.prototype, {constructor: {value: e, writable: !0, configurable: !0}})), t && A(e, t);
                })(t, e),
                (n = t),
                (r = [
                    {
                        key: 'init',
                        value: function () {
                            var e = this;
                            this.addLinkToRewardsPlatform(),
                                document.querySelector('.SearchHotels') &&
                                    C.waitForTextInDOM('.ArnSearchHeader', 'Update Search').then(function () {
                                        e.boldLastWord(['.ArnPrimarySearchOuterContainer div.ArnSearchHeader']);
                                    }),
                                document.querySelector('.SinglePropDetail') &&
                                    (this.boldLastWord(['#standardAvail legend', '#thePropertyReviews legend', '#theGeneralInfo legend']),
                                    C.waitForTextInDOM('.ArnLeftListContainer .translateMe', 'Update Search').then(function () {
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
                        key: 'getMemberToken',
                        value: function () {
                            var e = document.querySelector('meta[name="memberToken"]');
                            if (e) return e.content;
                        },
                    },
                    {
                        key: 'addLinkToRewardsPlatform',
                        value:
                            ((i = regeneratorRuntime.mark(function e() {
                                var t, n, r, o;
                                return regeneratorRuntime.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.next = 2), C.waitForSelectorInDOM('header #commands');
                                                case 2:
                                                    if (
                                                        ((t = this.getMemberToken()),
                                                        (n = 'member_token='.concat(t, '&login_url=').concat('https://hotels.resbeat.com/v6/login')),
                                                        (r = btoa(n)),
                                                        (o = document.querySelector('header #commands')),
                                                        document.querySelector('.MemberAuthenticated') && o)
                                                    ) {
                                                        e.next = 9;
                                                        break;
                                                    }
                                                    return e.abrupt('return');
                                                case 9:
                                                    o.insertAdjacentHTML(
                                                        'afterBegin',
                                                        '<a href="http://e2e-redirect.localhost/users/redirect/'.concat(r, '" target="_blank">RES<b>BEAT</b> Rewards</a>')
                                                    );
                                                case 10:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    this
                                );
                            })),
                            (a = function () {
                                var e = this,
                                    t = arguments;
                                return new Promise(function (n, r) {
                                    var o = i.apply(e, t);
                                    function a(e) {
                                        S(o, n, r, a, c, 'next', e);
                                    }
                                    function c(e) {
                                        S(o, n, r, a, c, 'throw', e);
                                    }
                                    a(void 0);
                                });
                            }),
                            function () {
                                return a.apply(this, arguments);
                            }),
                    },
                ]) && w(n.prototype, r),
                o && w(n, o),
                t
            );
        })(v))();
    },
]);
//# sourceMappingURL=resbeat_test-62011.map
