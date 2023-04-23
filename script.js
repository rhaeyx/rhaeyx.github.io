document.documentElement.className = document.documentElement.className.replace(
	'no-js',
	'js'
);
document.documentElement.className +=
	'ontouchstart' in document.documentElement ? ' touch' : ' no-touch';
var theme = {
	apps: {
		details: 'Details',
		buyNow: 'Buy now',
	},
	strings: {},
	settings: {
		afterAddition: 'minicart',
		rtl: false,
		animation: false,
		customerIsLoggedIn: false,
	},
};
var roar_api = {
	main_info: {},
};

(function () {
	if (window.BOOMR && (window.BOOMR.version || window.BOOMR.snippetExecuted)) {
		return;
	}
	window.BOOMR = window.BOOMR || {};
	window.BOOMR.snippetStart = new Date().getTime();
	window.BOOMR.snippetExecuted = true;
	window.BOOMR.snippetVersion = 12;
	window.BOOMR.application = 'storefront-renderer';
	window.BOOMR.themeName = 'Barberry';
	window.BOOMR.themeVersion = '2.1';
	window.BOOMR.shopId = 58751713461;
	window.BOOMR.themeId = 128335052981;
	window.BOOMR.renderRegion = 'gcp-us-central1';
	var where =
		document.currentScript || document.getElementsByTagName('script')[0];
	var parentNode = where.parentNode;
	var promoted = false;
	var LOADER_TIMEOUT = 3000;
	function promote() {
		if (promoted) {
			return;
		}
		var script = document.createElement('script');
		script.id = 'boomr-scr-as';
		script.src = window.BOOMR.url;
		script.async = true;
		parentNode.appendChild(script);
		promoted = true;
	}
	function iframeLoader(wasFallback) {
		promoted = true;
		var dom, bootstrap, iframe, iframeStyle;
		var doc = document;
		var win = window;
		window.BOOMR.snippetMethod = wasFallback ? 'if' : 'i';
		bootstrap = function (parent, scriptId) {
			var script = doc.createElement('script');
			script.id = scriptId || 'boomr-if-as';
			script.src = window.BOOMR.url;
			BOOMR_lstart = new Date().getTime();
			parent = parent || doc.body;
			parent.appendChild(script);
		};
		if (
			!window.addEventListener &&
			window.attachEvent &&
			navigator.userAgent.match(/MSIE [67]./)
		) {
			window.BOOMR.snippetMethod = 's';
			bootstrap(parentNode, 'boomr-async');
			return;
		}
		iframe = document.createElement('IFRAME');
		iframe.src = 'about:blank';
		iframe.title = '';
		iframe.role = 'presentation';
		iframe.loading = 'eager';
		iframeStyle = (iframe.frameElement || iframe).style;
		iframeStyle.width = 0;
		iframeStyle.height = 0;
		iframeStyle.border = 0;
		iframeStyle.display = 'none';
		parentNode.appendChild(iframe);
		try {
			win = iframe.contentWindow;
			doc = win.document.open();
		} catch (e) {
			dom = document.domain;
			iframe.src =
				"javascript:var d=document.open();d.domain='" + dom + "';void(0);";
			win = iframe.contentWindow;
			doc = win.document.open();
		}
		if (dom) {
			doc._boomrl = function () {
				this.domain = dom;
				bootstrap();
			};
			doc.write("<body onload='document._boomrl();'>");
		} else {
			win._boomrl = function () {
				bootstrap();
			};
			if (win.addEventListener) {
				win.addEventListener('load', win._boomrl, false);
			} else if (win.attachEvent) {
				win.attachEvent('onload', win._boomrl);
			}
		}
		doc.close();
	}
	// var link = document.createElement("link");
	// if (link.relList &&
	//     typeof link.relList.supports === "function" &&
	//     link.relList.supports("preload") &&
	//     ("as" in link)) {
	//     window.BOOMR.snippetMethod = "p";
	//     link.href = window.BOOMR.url;
	//     link.rel = "preload";
	//     link.as = "script";
	//     link.addEventListener("load", promote);
	//     link.addEventListener("error", function () {
	//         iframeLoader(true);
	//     });
	//     setTimeout(function () {
	//         if (!promoted) {
	//             iframeLoader(true);
	//         }
	//     }, LOADER_TIMEOUT);
	//     BOOMR_lstart = new Date().getTime();
	//     parentNode.appendChild(link);
	// } else {
	//     iframeLoader(false);
	// }
	function boomerangSaveLoadTime(e) {
		window.BOOMR_onload = (e && e.timeStamp) || new Date().getTime();
	}
	if (window.addEventListener) {
		window.addEventListener('load', boomerangSaveLoadTime, false);
	} else if (window.attachEvent) {
		window.attachEvent('onload', boomerangSaveLoadTime);
	}
	if (document.addEventListener) {
		document.addEventListener('onBoomerangLoaded', function (e) {
			e.detail.BOOMR.init({
				ResourceTiming: {
					enabled: true,
					trackedResourceTypes: ['script', 'img', 'css'],
				},
			});
			e.detail.BOOMR.t_end = new Date().getTime();
		});
	} else if (document.attachEvent) {
		document.attachEvent('onpropertychange', function (e) {
			if (!e) e = event;
			if (e.propertyName === 'onBoomerangLoaded') {
				e.detail.BOOMR.init({
					ResourceTiming: {
						enabled: true,
						trackedResourceTypes: ['script', 'img', 'css'],
					},
				});
				e.detail.BOOMR.t_end = new Date().getTime();
			}
		});
	}
})();
document.documentElement.className = document.documentElement.className.replace(
	'no-js',
	'js'
);
document.documentElement.className +=
	'ontouchstart' in document.documentElement ? ' touch' : ' no-touch';
var theme = {
	apps: {
		details: 'Details',
		buyNow: 'Buy now',
	},
	strings: {},
	settings: {
		afterAddition: 'minicart',
		rtl: false,
		animation: false,
		customerIsLoggedIn: false,
	},
};
var roar_api = {
	main_info: {},
};

(function () {
	if (window.BOOMR && (window.BOOMR.version || window.BOOMR.snippetExecuted)) {
		return;
	}
	window.BOOMR = window.BOOMR || {};
	window.BOOMR.snippetStart = new Date().getTime();
	window.BOOMR.snippetExecuted = true;
	window.BOOMR.snippetVersion = 12;
	window.BOOMR.application = 'storefront-renderer';
	window.BOOMR.themeName = 'Barberry';
	window.BOOMR.themeVersion = '2.1';
	window.BOOMR.shopId = 58751713461;
	window.BOOMR.themeId = 128335052981;
	window.BOOMR.renderRegion = 'gcp-us-central1';
	var where =
		document.currentScript || document.getElementsByTagName('script')[0];
	var parentNode = where.parentNode;
	var promoted = false;
	var LOADER_TIMEOUT = 3000;
	function promote() {
		if (promoted) {
			return;
		}
		var script = document.createElement('script');
		script.id = 'boomr-scr-as';
		script.src = window.BOOMR.url;
		script.async = true;
		parentNode.appendChild(script);
		promoted = true;
	}
	function iframeLoader(wasFallback) {
		promoted = true;
		var dom, bootstrap, iframe, iframeStyle;
		var doc = document;
		var win = window;
		window.BOOMR.snippetMethod = wasFallback ? 'if' : 'i';
		bootstrap = function (parent, scriptId) {
			var script = doc.createElement('script');
			script.id = scriptId || 'boomr-if-as';
			script.src = window.BOOMR.url;
			BOOMR_lstart = new Date().getTime();
			parent = parent || doc.body;
			parent.appendChild(script);
		};
		if (
			!window.addEventListener &&
			window.attachEvent &&
			navigator.userAgent.match(/MSIE [67]./)
		) {
			window.BOOMR.snippetMethod = 's';
			bootstrap(parentNode, 'boomr-async');
			return;
		}
		iframe = document.createElement('IFRAME');
		iframe.src = 'about:blank';
		iframe.title = '';
		iframe.role = 'presentation';
		iframe.loading = 'eager';
		iframeStyle = (iframe.frameElement || iframe).style;
		iframeStyle.width = 0;
		iframeStyle.height = 0;
		iframeStyle.border = 0;
		iframeStyle.display = 'none';
		parentNode.appendChild(iframe);
		try {
			win = iframe.contentWindow;
			doc = win.document.open();
		} catch (e) {
			dom = document.domain;
			iframe.src =
				"javascript:var d=document.open();d.domain='" + dom + "';void(0);";
			win = iframe.contentWindow;
			doc = win.document.open();
		}
		if (dom) {
			doc._boomrl = function () {
				this.domain = dom;
				bootstrap();
			};
			doc.write("<body onload='document._boomrl();'>");
		} else {
			win._boomrl = function () {
				bootstrap();
			};
			if (win.addEventListener) {
				win.addEventListener('load', win._boomrl, false);
			} else if (win.attachEvent) {
				win.attachEvent('onload', win._boomrl);
			}
		}
		doc.close();
	}
	var link = document.createElement('link');
	if (
		link.relList &&
		typeof link.relList.supports === 'function' &&
		link.relList.supports('preload') &&
		'as' in link
	) {
		window.BOOMR.snippetMethod = 'p';
		link.href = window.BOOMR.url;
		link.rel = 'preload';
		link.as = 'script';
		link.addEventListener('load', promote);
		link.addEventListener('error', function () {
			iframeLoader(true);
		});
		setTimeout(function () {
			if (!promoted) {
				iframeLoader(true);
			}
		}, LOADER_TIMEOUT);
		BOOMR_lstart = new Date().getTime();
		parentNode.appendChild(link);
	} else {
		iframeLoader(false);
	}
	function boomerangSaveLoadTime(e) {
		window.BOOMR_onload = (e && e.timeStamp) || new Date().getTime();
	}
	if (window.addEventListener) {
		window.addEventListener('load', boomerangSaveLoadTime, false);
	} else if (window.attachEvent) {
		window.attachEvent('onload', boomerangSaveLoadTime);
	}
	if (document.addEventListener) {
		document.addEventListener('onBoomerangLoaded', function (e) {
			e.detail.BOOMR.init({
				ResourceTiming: {
					enabled: true,
					trackedResourceTypes: ['script', 'img', 'css'],
				},
			});
			e.detail.BOOMR.t_end = new Date().getTime();
		});
	} else if (document.attachEvent) {
		document.attachEvent('onpropertychange', function (e) {
			if (!e) e = event;
			if (e.propertyName === 'onBoomerangLoaded') {
				e.detail.BOOMR.init({
					ResourceTiming: {
						enabled: true,
						trackedResourceTypes: ['script', 'img', 'css'],
					},
				});
				e.detail.BOOMR.t_end = new Date().getTime();
			}
		});
	}
})();

(() => {
	var e,
		t,
		n,
		r = {
			935: (e, t, n) => {
				'use strict';
				n.r(t),
					n.d(t, {
						getCLS: () => B,
						getFCP: () => g,
						getFID: () => S,
						getLCP: () => T,
						getTTFB: () => C,
					});
				var r,
					i,
					o,
					a,
					s = function (e, t) {
						return {
							name: e,
							value: void 0 === t ? -1 : t,
							delta: 0,
							entries: [],
							id: 'v2-'
								.concat(Date.now(), '-')
								.concat(Math.floor(8999999999999 * Math.random()) + 1e12),
						};
					},
					c = function (e, t) {
						try {
							if (PerformanceObserver.supportedEntryTypes.includes(e)) {
								if ('first-input' === e && !('PerformanceEventTiming' in self))
									return;
								var n = new PerformanceObserver(function (e) {
									return e.getEntries().map(t);
								});
								return (
									n.observe({
										type: e,
										buffered: !0,
									}),
									n
								);
							}
						} catch (e) {}
					},
					u = function (e, t) {
						var n = function n(r) {
							('pagehide' !== r.type &&
								'hidden' !== document.visibilityState) ||
								(e(r),
								t &&
									(removeEventListener('visibilitychange', n, !0),
									removeEventListener('pagehide', n, !0)));
						};
						addEventListener('visibilitychange', n, !0),
							addEventListener('pagehide', n, !0);
					},
					d = function (e) {
						addEventListener(
							'pageshow',
							function (t) {
								t.persisted && e(t);
							},
							!0
						);
					},
					l = function (e, t, n) {
						var r;
						return function (i) {
							t.value >= 0 &&
								(i || n) &&
								((t.delta = t.value - (r || 0)),
								(t.delta || void 0 === r) && ((r = t.value), e(t)));
						};
					},
					f = -1,
					p = function () {
						return 'hidden' === document.visibilityState ? 0 : 1 / 0;
					},
					O = function () {
						u(function (e) {
							var t = e.timeStamp;
							f = t;
						}, !0);
					},
					m = function () {
						return (
							f < 0 &&
								((f = p()),
								O(),
								d(function () {
									setTimeout(function () {
										(f = p()), O();
									}, 0);
								})),
							{
								get firstHiddenTime() {
									return f;
								},
							}
						);
					},
					g = function (e, t) {
						var n,
							r = m(),
							i = s('FCP'),
							o = function (e) {
								'first-contentful-paint' === e.name &&
									(u && u.disconnect(),
									e.startTime < r.firstHiddenTime &&
										((i.value = e.startTime), i.entries.push(e), n(!0)));
							},
							a =
								window.performance &&
								performance.getEntriesByName &&
								performance.getEntriesByName('first-contentful-paint')[0],
							u = a ? null : c('paint', o);
						(a || u) &&
							((n = l(e, i, t)),
							a && o(a),
							d(function (r) {
								(i = s('FCP')),
									(n = l(e, i, t)),
									requestAnimationFrame(function () {
										requestAnimationFrame(function () {
											(i.value = performance.now() - r.timeStamp), n(!0);
										});
									});
							}));
					},
					v = !1,
					h = -1,
					B = function (e, t) {
						v ||
							(g(function (e) {
								h = e.value;
							}),
							(v = !0));
						var n,
							r = function (t) {
								h > -1 && e(t);
							},
							i = s('CLS', 0),
							o = 0,
							a = [],
							f = function (e) {
								if (!e.hadRecentInput) {
									var t = a[0],
										r = a[a.length - 1];
									o &&
									e.startTime - r.startTime < 1e3 &&
									e.startTime - t.startTime < 5e3
										? ((o += e.value), a.push(e))
										: ((o = e.value), (a = [e])),
										o > i.value && ((i.value = o), (i.entries = a), n());
								}
							},
							p = c('layout-shift', f);
						p &&
							((n = l(r, i, t)),
							u(function () {
								p.takeRecords().map(f), n(!0);
							}),
							d(function () {
								(o = 0), (h = -1), (i = s('CLS', 0)), (n = l(r, i, t));
							}));
					},
					_ = {
						passive: !0,
						capture: !0,
					},
					y = new Date(),
					R = function (e, t) {
						r ||
							((r = t), (i = e), (o = new Date()), w(removeEventListener), b());
					},
					b = function () {
						if (i >= 0 && i < o - y) {
							var e = {
								entryType: 'first-input',
								name: r.type,
								target: r.target,
								cancelable: r.cancelable,
								startTime: r.timeStamp,
								processingStart: r.timeStamp + i,
							};
							a.forEach(function (t) {
								t(e);
							}),
								(a = []);
						}
					},
					M = function (e) {
						if (e.cancelable) {
							var t =
								(e.timeStamp > 1e12 ? new Date() : performance.now()) -
								e.timeStamp;
							'pointerdown' == e.type
								? (function (e, t) {
										var n = function () {
												R(e, t), i();
											},
											r = function () {
												i();
											},
											i = function () {
												removeEventListener('pointerup', n, _),
													removeEventListener('pointercancel', r, _);
											};
										addEventListener('pointerup', n, _),
											addEventListener('pointercancel', r, _);
								  })(t, e)
								: R(t, e);
						}
					},
					w = function (e) {
						['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(
							function (t) {
								return e(t, M, _);
							}
						);
					},
					S = function (e, t) {
						var n,
							o = m(),
							f = s('FID'),
							p = function (e) {
								e.startTime < o.firstHiddenTime &&
									((f.value = e.processingStart - e.startTime),
									f.entries.push(e),
									n(!0));
							},
							O = c('first-input', p);
						(n = l(e, f, t)),
							O &&
								u(function () {
									O.takeRecords().map(p), O.disconnect();
								}, !0),
							O &&
								d(function () {
									var o;
									(f = s('FID')),
										(n = l(e, f, t)),
										(a = []),
										(i = -1),
										(r = null),
										w(addEventListener),
										(o = p),
										a.push(o),
										b();
								});
					},
					E = {},
					T = function (e, t) {
						var n,
							r = m(),
							i = s('LCP'),
							o = function (e) {
								var t = e.startTime;
								t < r.firstHiddenTime &&
									((i.value = t), i.entries.push(e), n());
							},
							a = c('largest-contentful-paint', o);
						if (a) {
							n = l(e, i, t);
							var f = function () {
								E[i.id] ||
									(a.takeRecords().map(o),
									a.disconnect(),
									(E[i.id] = !0),
									n(!0));
							};
							['keydown', 'click'].forEach(function (e) {
								addEventListener(e, f, {
									once: !0,
									capture: !0,
								});
							}),
								u(f, !0),
								d(function (r) {
									(i = s('LCP')),
										(n = l(e, i, t)),
										requestAnimationFrame(function () {
											requestAnimationFrame(function () {
												(i.value = performance.now() - r.timeStamp),
													(E[i.id] = !0),
													n(!0);
											});
										});
								});
						}
					},
					C = function (e) {
						var t,
							n = s('TTFB');
						(t = function () {
							try {
								var t =
									performance.getEntriesByType('navigation')[0] ||
									(function () {
										var e = performance.timing,
											t = {
												entryType: 'navigation',
												startTime: 0,
											};
										for (var n in e)
											'navigationStart' !== n &&
												'toJSON' !== n &&
												(t[n] = Math.max(e[n] - e.navigationStart, 0));
										return t;
									})();
								if (
									((n.value = n.delta = t.responseStart),
									n.value < 0 || n.value > performance.now())
								)
									return;
								(n.entries = [t]), e(n);
							} catch (e) {}
						}),
							'complete' === document.readyState
								? setTimeout(t, 0)
								: addEventListener('load', function () {
										return setTimeout(t, 0);
								  });
					};
			},
		},
		i = {};

	function o(e) {
		var t = i[e];
		if (void 0 !== t) return t.exports;
		var n = (i[e] = {
			exports: {},
		});
		return r[e](n, n.exports, o), n.exports;
	}
	(o.d = (e, t) => {
		for (var n in t)
			o.o(t, n) &&
				!o.o(e, n) &&
				Object.defineProperty(e, n, {
					enumerable: !0,
					get: t[n],
				});
	}),
		(o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(o.r = (e) => {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: 'Module',
				}),
				Object.defineProperty(e, '__esModule', {
					value: !0,
				});
		}),
		(() => {
			function e(t) {
				if (window) {
					if (!t) {
						if (
							window.parent === window ||
							!document.getElementById('boomr-if-as')
						)
							return;
						if (window.BOOMR && BOOMR.boomerang_frame && BOOMR.window)
							try {
								BOOMR.boomerang_frame.document.domain !==
									BOOMR.window.document.domain &&
									(BOOMR.boomerang_frame.document.domain =
										BOOMR.window.document.domain);
							} catch (e) {
								BOOMR.isCrossOriginError(e) ||
									BOOMR.addError(e, 'BOOMR_check_doc_domain.domainFix');
							}
						t = document.domain;
					}
					if (t && -1 !== t.indexOf('.') && window.parent) {
						try {
							return void window.parent.document;
						} catch (e) {
							try {
								document.domain = t;
							} catch (e) {
								return;
							}
						}
						try {
							return void window.parent.document;
						} catch (e) {
							t = t.replace(/^[\w\-]+\./, '');
						}
						e(t);
					}
				}
			}
			(BOOMR_start = new Date().getTime()),
				e(),
				(function (t) {
					var n,
						r,
						i,
						o,
						a,
						s,
						c,
						u = t;
					if (
						(t.parent !== t &&
							document.getElementById('boomr-if-as') &&
							'script' ===
								document.getElementById('boomr-if-as').nodeName.toLowerCase() &&
							(t = t.parent),
						(i = t.document),
						t.BOOMR || (t.BOOMR = {}),
						(BOOMR = t.BOOMR),
						!BOOMR.version)
					) {
						if (
							((BOOMR.version = '2.3.2'),
							(BOOMR.window = t),
							(BOOMR.boomerang_frame = u),
							BOOMR.plugins || (BOOMR.plugins = {}),
							(function () {
								try {
									void 0 !== new t.CustomEvent('CustomEvent') &&
										(o = function (e, n) {
											return new t.CustomEvent(e, n);
										});
								} catch (e) {}
								try {
									!o &&
										i.createEvent &&
										i.createEvent('CustomEvent') &&
										(o = function (e, t) {
											var n = i.createEvent('CustomEvent');
											return (
												(t = t || {
													cancelable: !1,
													bubbles: !1,
												}),
												n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
												n
											);
										});
								} catch (e) {}
								!o &&
									i.createEventObject &&
									(o = function (e, t) {
										var n = i.createEventObject();
										return (
											(n.type = n.propertyName = e), (n.detail = t.detail), n
										);
									}),
									o || (o = function () {});
							})(),
							(a = function (e, t, n) {
								var r = o(e, {
									detail: t,
								});

								function a() {
									try {
										i.dispatchEvent
											? i.dispatchEvent(r)
											: i.fireEvent && i.fireEvent('onpropertychange', r);
									} catch (e) {}
								}
								r && (n ? BOOMR.setImmediate(a) : a());
							}),
							void 0 !== i.hidden
								? ((s = 'visibilityState'), (c = 'visibilitychange'))
								: void 0 !== i.mozHidden
								? ((s = 'mozVisibilityState'), (c = 'mozvisibilitychange'))
								: void 0 !== i.msHidden
								? ((s = 'msVisibilityState'), (c = 'msvisibilitychange'))
								: void 0 !== i.webkitHidden &&
								  ((s = 'webkitVisibilityState'),
								  (c = 'webkitvisibilitychange')),
							(n = {
								beacon_url: '',
								beacon_url_force_https: !0,
								beacon_urls_allowed: [],
								beacon_type: 'AUTO',
								beacon_auth_key: 'Authorization',
								beacon_auth_token: void 0,
								beacon_with_credentials: !1,
								beacon_disable_sendbeacon: !1,
								site_domain: t.location.hostname
									.replace(/.*?([^.]+\.[^.]+)\.?$/, '$1')
									.toLowerCase(),
								user_ip: '',
								autorun: !0,
								hasSentPageLoadBeacon: !1,
								r: void 0,
								same_site_cookie: 'Lax',
								secure_cookie: !1,
								forced_same_site_cookie_none: !1,
								events: {
									page_ready: [],
									page_unload: [],
									before_unload: [],
									dom_loaded: [],
									visibility_changed: [],
									prerender_to_visible: [],
									before_beacon: [],
									beacon_no_url: [],
									beacon: [],
									page_load_beacon: [],
									xhr_load: [],
									click: [],
									form_submit: [],
									config: [],
									xhr_init: [],
									spa_init: [],
									spa_navigation: [],
									spa_cancel: [],
									xhr_send: [],
									xhr_error: [],
									error: [],
									netinfo: [],
									rage_click: [],
								},
								public_events: {
									before_beacon: 'onBeforeBoomerangBeacon',
									beacon: 'onBoomerangBeacon',
									onboomerangloaded: 'onBoomerangLoaded',
								},
								translate_events: {
									onbeacon: 'beacon',
									onconfig: 'config',
									onerror: 'error',
									onxhrerror: 'xhr_error',
								},
								unloadEventsCount: 0,
								unloadEventCalled: 0,
								listenerCallbacks: {},
								vars: {},
								singleBeaconVars: {},
								varPriority: {
									'-1': {},
									1: {},
								},
								errors: {},
								disabled_plugins: {},
								localStorageSupported: !1,
								LOCAL_STORAGE_PREFIX: '_boomr_',
								nativeOverwrites: [],
								xb_handler: function (e) {
									return function (r) {
										var i;
										r || (r = t.event),
											r.target
												? (i = r.target)
												: r.srcElement && (i = r.srcElement),
											3 === i.nodeType && (i = i.parentNode),
											(i &&
												i.nodeName &&
												'OBJECT' === i.nodeName.toUpperCase() &&
												'application/x-shockwave-flash' === i.type) ||
												n.fireEvent(e, i);
									};
								},
								clearEvents: function () {
									var e;
									for (e in this.events)
										this.events.hasOwnProperty(e) && (this.events[e] = []);
								},
								clearListeners: function () {
									var e;
									for (e in n.listenerCallbacks)
										if (n.listenerCallbacks.hasOwnProperty(e))
											for (; n.listenerCallbacks[e].length; )
												BOOMR.utils.removeListener(
													n.listenerCallbacks[e][0].el,
													e,
													n.listenerCallbacks[e][0].fn
												);
									n.listenerCallbacks = {};
								},
								fireEvent: function (e, t) {
									var n, r, i, o;
									if (
										((e = e.toLowerCase()),
										this.translate_events[e] && (e = this.translate_events[e]),
										this.events.hasOwnProperty(e))
									) {
										for (
											this.public_events.hasOwnProperty(e) &&
												a(this.public_events[e], t),
												i = this.events[e],
												'before_beacon' !== e &&
													'beacon' !== e &&
													BOOMR.real_sendBeacon(),
												o = i.length,
												n = 0;
											n < o;
											n++
										)
											try {
												(r = i[n]).fn.call(r.scope, t, r.cb_data);
											} catch (t) {
												BOOMR.addError(t, 'fireEvent.' + e + '<' + n + '>');
											}
										for (n = 0; n < o; n++)
											i[n].once && (i.splice(n, 1), o--, n--);
									}
								},
								spaNavigation: function () {
									n.onloadfired = !0;
								},
								beaconUrlAllowed: function (e) {
									if (
										!n.beacon_urls_allowed ||
										0 === n.beacon_urls_allowed.length
									)
										return !0;
									for (var t = 0; t < n.beacon_urls_allowed.length; t++)
										if (new RegExp(n.beacon_urls_allowed[t]).exec(e)) return !0;
									return !1;
								},
								checkLocalStorageSupport: function () {
									var e = n.LOCAL_STORAGE_PREFIX + 'clss';
									n.localStorageSupported = !1;
									try {
										if (!t.JSON || !t.localStorage) return;
										t.localStorage.setItem(e, e),
											(n.localStorageSupported =
												t.localStorage.getItem(e) === e),
											t.localStorage.removeItem(e);
									} catch (e) {
										n.localStorageSupported = !1;
									}
								},
								onFrameUnloaded: function () {
									var e, t;
									for (
										BOOMR.isUnloaded = !0, e = 0;
										e < n.nativeOverwrites.length;
										e++
									)
										(t = n.nativeOverwrites[e]).obj[t.functionName] = t.origFn;
									n.nativeOverwrites = [];
								},
							}),
							(r = {
								t_start: BOOMR_start,
								t_end: void 0,
								url: '',
								config_url: null,
								loadedLate: !1,
								beaconsSent: 0,
								isUnloaded: !1,
								beaconInQueue: !1,
								cookies: {},
								testedCookies: !1,
								constants: {
									BEACON_TYPE_SPAS: ['spa', 'spa_hard'],
									MAX_GET_LENGTH: 2e3,
								},
								session: {
									domain: n.site_domain,
									ID: void 0,
									start: void 0,
									length: 0,
									enabled: !0,
								},
								utils: {
									hasPostMessageSupport: function () {
										return !(
											!t.postMessage ||
											('function' != typeof t.postMessage &&
												'object' != typeof t.postMessage)
										);
									},
									objectToString: function (e, t, n) {
										var r,
											i = [];
										if (!e || 'object' != typeof e) return e;
										if (
											(void 0 === t && (t = '\n\t'),
											n || (n = 0),
											BOOMR.utils.isArray(e))
										) {
											for (r = 0; r < e.length; r++)
												n > 0 && null !== e[r] && 'object' == typeof e[r]
													? i.push(
															this.objectToString(
																e[r],
																t + ('\n\t' === t ? '\t' : ''),
																n - 1
															)
													  )
													: '&' === t
													? i.push(encodeURIComponent(e[r]))
													: i.push(e[r]);
											t = ',';
										} else
											for (r in e)
												Object.prototype.hasOwnProperty.call(e, r) &&
													(n > 0 && null !== e[r] && 'object' == typeof e[r]
														? i.push(
																encodeURIComponent(r) +
																	'=' +
																	this.objectToString(
																		e[r],
																		t + ('\n\t' === t ? '\t' : ''),
																		n - 1
																	)
														  )
														: '&' === t
														? i.push(
																encodeURIComponent(r) +
																	'=' +
																	encodeURIComponent(e[r])
														  )
														: i.push(r + '=' + e[r]));
										return i.join(t);
									},
									getCookie: function (e) {},
									getRawCookie: function (e) {},
									setCookie: function (e, t, n) {},
									getSubCookies: function (e) {},
									removeCookie: function (e) {},
									getSameSiteAttributeParts: function () {
										var e = n.same_site_cookie.toUpperCase();
										return (
											n.forced_same_site_cookie_none && (e = 'NONE'),
											'LAX' === e
												? ['SameSite=Lax']
												: 'NONE' === e
												? 'https:' === location.protocol &&
												  this.isCurrentUASameSiteNoneCompatible()
													? ['SameSite=None', 'Secure']
													: []
												: 'STRICT' === e
												? ['SameSite=Strict']
												: ['SameSite=Lax']
										);
									},
									getLocalStorage: function (e) {
										var r, i;
										if (!e || !n.localStorageSupported) return null;
										try {
											if (
												null ===
												(r = t.localStorage.getItem(n.LOCAL_STORAGE_PREFIX + e))
											)
												return;
											i = t.JSON.parse(r);
										} catch (e) {
											return BOOMR.warn(e), null;
										}
										return i && 'object' == typeof i.items
											? 'number' == typeof i.expires && BOOMR.now() >= i.expires
												? void this.removeLocalStorage(e)
												: i.items
											: (this.removeLocalStorage(e), null);
									},
									setLocalStorage: function (e, r, i) {
										var o, a, s;
										if (!e || !n.localStorageSupported || 'object' != typeof r)
											return !1;
										if (
											((o = {
												items: r,
											}),
											'number' == typeof i &&
												(o.expires = BOOMR.now() + 1e3 * i),
											(a = t.JSON.stringify(o)).length < 5e4)
										) {
											try {
												if (
													(t.localStorage.setItem(
														n.LOCAL_STORAGE_PREFIX + e,
														a
													),
													a ===
														(s = t.localStorage.getItem(
															n.LOCAL_STORAGE_PREFIX + e
														)))
												)
													return !0;
											} catch (e) {}
											BOOMR.warn(
												"Saved storage value doesn't match what we tried to set:\n" +
													a +
													'\n' +
													s
											);
										} else
											BOOMR.warn(
												'Storage items too large: ' + a.length + ' ' + a
											);
										return !1;
									},
									removeLocalStorage: function (e) {
										if (!e || !n.localStorageSupported) return !1;
										try {
											return (
												t.localStorage.removeItem(n.LOCAL_STORAGE_PREFIX + e),
												!0
											);
										} catch (e) {}
										return !1;
									},
									cleanupURL: function (e, t) {
										if (!e || BOOMR.utils.isArray(e)) return '';
										if (
											(n.strip_query_string &&
												(e = e.replace(/\?.*/, '?qs-redacted')),
											void 0 !== t && e && e.length > t)
										) {
											var r = e.indexOf('?');
											e =
												-1 !== r && r < t
													? e.substr(0, r) + '?...'
													: e.substr(0, t - 3) + '...';
										}
										return e;
									},
									hashQueryString: function (e, t) {
										return e
											? e.match
												? (e.match(/^\/\//) && (e = location.protocol + e),
												  e.match(/^(https?|file):/)
														? (t && (e = e.replace(/#.*/, '')),
														  e.replace(/\?([^#]*)/, function (e, t) {
																return (
																	'?' +
																	(t.length > 10
																		? BOOMR.utils.hashString(t)
																		: t)
																);
														  }))
														: (BOOMR.error('Passed in URL is invalid: ' + e),
														  ''))
												: (BOOMR.addError(
														'TypeError: Not a string',
														'hashQueryString',
														typeof e
												  ),
												  '')
											: e;
									},
									pluginConfig: function (e, t, n, r) {
										var i,
											o = 0;
										if (!t || !t[n]) return !1;
										for (i = 0; i < r.length; i++)
											void 0 !== t[n][r[i]] && ((e[r[i]] = t[n][r[i]]), o++);
										return o > 0;
									},
									arrayFilter: function (e, t) {
										var n = [];
										if (
											!(
												this.isArray(e) ||
												(e && 'number' == typeof e.length)
											) ||
											'function' != typeof t
										)
											return n;
										if ('function' == typeof e.filter) n = e.filter(t);
										else
											for (var r, i = -1, o = e.length; ++i < o; )
												t((r = e[i]), i, e) && (n[n.length] = r);
										return n;
									},
									arrayFind: function (e, t) {
										if (
											(this.isArray(e) || (e && 'number' == typeof e.length)) &&
											'function' == typeof t
										) {
											if ('function' == typeof e.find) return e.find(t);
											for (var n, r = -1, i = e.length; ++r < i; )
												if (t((n = e[r]), r, e)) return n;
										}
									},
									isMutationObserverSupported: function () {
										return (
											!(
												t &&
												t.navigator &&
												t.navigator.userAgent &&
												t.navigator.userAgent.match(/Trident.*rv[ :]*11\./)
											) &&
											t &&
											t.MutationObserver &&
											'function' == typeof t.MutationObserver
										);
									},
									addObserver: function (e, n, r, i, o, a) {
										var s,
											c,
											u = {
												observer: null,
												timer: null,
											};
										if (!this.isMutationObserverSupported() || !i || !e)
											return null;

										function d(e) {
											var t = !1;
											u.timer && (clearTimeout(u.timer), (u.timer = null)),
												i && ((t = i.call(a, e, o)) || (i = null)),
												!t &&
													u.observer &&
													(u.observer.disconnect(), (u.observer = null)),
												'number' == typeof t &&
													t > 0 &&
													(u.timer = setTimeout(d, t));
										}
										return (
											(s = t.MutationObserver),
											t.Zone &&
												'function' == typeof t.Zone.__symbol__ &&
												(c = t.Zone.__symbol__('MutationObserver')) &&
												'string' == typeof c &&
												t.hasOwnProperty(c) &&
												'function' == typeof t[c] &&
												(s = t[c]),
											(u.observer = new s(d)),
											r && (u.timer = setTimeout(d, u.timeout)),
											u.observer.observe(e, n),
											u
										);
									},
									addListener: function (e, t, r, i) {
										var o = !1;
										e.addEventListener
											? ('object' == typeof i
													? (o = i)
													: 'boolean' == typeof i &&
													  i &&
													  BOOMR.browser.supportsPassive() &&
													  (o = {
															capture: !1,
															passive: !0,
													  }),
											  e.addEventListener(t, r, o))
											: e.attachEvent && e.attachEvent('on' + t, r),
											(n.listenerCallbacks[t] = n.listenerCallbacks[t] || []),
											n.listenerCallbacks[t].push({
												el: e,
												fn: r,
											});
									},
									removeListener: function (e, t, r) {
										if (
											(e.removeEventListener
												? e.removeEventListener(t, r, !1)
												: e.detachEvent && e.detachEvent('on' + t, r),
											n.listenerCallbacks.hasOwnProperty(t))
										)
											for (var i = 0; i < n.listenerCallbacks[t].length; i++)
												if (
													r === n.listenerCallbacks[t][i].fn &&
													e === n.listenerCallbacks[t][i].el
												)
													return void n.listenerCallbacks[t].splice(i, 1);
									},
									isArray: function (e) {
										return (
											'[object Array]' === Object.prototype.toString.call(e)
										);
									},
									inArray: function (e, t) {
										var n;
										if (void 0 === e || void 0 === t || !t.length) return !1;
										for (n = 0; n < t.length; n++) if (t[n] === e) return !0;
										return !1;
									},
									getQueryParamValue: function (e, t) {
										var n, r, i, o;
										if (!e) return null;
										for (
											'string' == typeof t
												? ((n = BOOMR.window.document.createElement('a')).href =
														t)
												: (n =
														'object' == typeof t && 'string' == typeof t.search
															? t
															: BOOMR.window.location),
												r = n.search.slice(1).split(/&/),
												i = 0;
											i < r.length;
											i++
										)
											if (r[i] && (o = r[i].split('=')).length && o[0] === e)
												try {
													return o.length > 1
														? decodeURIComponent(
																o.splice(1).join('=').replace(/\+/g, ' ')
														  )
														: '';
												} catch (e) {
													if (
														!e ||
														'string' != typeof e.name ||
														-1 === e.name.indexOf('URIError')
													)
														throw e;
												}
										return null;
									},
									generateUUID: function () {
										return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
											/[xy]/g,
											function (e) {
												var t = (16 * Math.random()) | 0;
												return ('x' === e ? t : (3 & t) | 8).toString(16);
											}
										);
									},
									generateId: function (e) {
										return 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
											.substr(0, e || 40)
											.replace(/x/g, function (e) {
												return '0' ===
													(e = (Math.random() || 0.01).toString(36))
													? '0'
													: e.substr(2, 1);
											});
									},
									serializeForUrl: function (e) {
										return BOOMR.utils.Compression &&
											BOOMR.utils.Compression.jsUrl
											? BOOMR.utils.Compression.jsUrl(e)
											: window.JSON
											? JSON.stringify(e)
											: '';
									},
									getMyURL: function () {
										var e,
											t =
												document.currentScript ||
												document.getElementById('boomr-if-as') ||
												document.getElementById('boomr-scr-as');
										if (t) return t.src;
										var n,
											r = document.getElementsByTagName('script');
										for (n = r.length; n--; )
											if ('interactive' === r[n].readyState) return r[n].src;
										try {
											throw new Error();
										} catch (t) {
											if (
												'stack' in t &&
												(e = this.arrayFilter(
													t.stack.split(/\n/),
													function (e) {
														return e.match(/https?:\/\//);
													}
												)) &&
												e.length
											)
												return e[0].replace(
													/.*(https?:\/\/.+?)(:\d+)+\D*$/m,
													'$1'
												);
										}
										return '';
									},
									scroll: function () {
										var e = void 0 !== t.pageXOffset,
											n = 'CSS1Compat' === (t.document.compatMode || ''),
											r = {
												x: 0,
												y: 0,
											};
										return (
											e
												? 'function' == typeof t.pageXOffset
													? ((r.x = t.pageXOffset()), (r.y = t.pageYOffset()))
													: ((r.x = t.pageXOffset), (r.y = t.pageYOffset))
												: n
												? ((r.x = t.document.documentElement.scrollLeft),
												  (r.y = t.document.documentElement.scrollTop))
												: ((r.x = t.document.body.scrollLeft),
												  (r.y = t.document.body.scrollTop)),
											'number' == typeof r.sx && (r.sx = Math.round(r.sx)),
											'number' == typeof r.sy && (r.sy = Math.round(r.sy)),
											r
										);
									},
									windowHeight: function () {
										return (
											t.innerHeight ||
											t.document.documentElement.clientHeight ||
											t.document.body.clientHeight
										);
									},
									windowWidth: function () {
										return (
											t.innerWidth ||
											t.document.documentElement.clientWidth ||
											t.document.body.clientWidth
										);
									},
									isNative: function (e) {
										return (
											!!e &&
											e.toString &&
											!e.hasOwnProperty('toString') &&
											/\[native code\]/.test(String(e))
										);
									},
									overwriteNative: function (e, t, r) {
										e &&
											r &&
											(BOOMR.boomerang_frame !== BOOMR.window &&
												n.nativeOverwrites.push({
													obj: e,
													functionName: t,
													origFn: e[t],
												}),
											(e[t] = r));
									},
									isInteger: function (e) {
										return (
											Number.isInteger ||
											function (e) {
												return (
													'number' == typeof e &&
													isFinite(e) &&
													Math.floor(e) === e
												);
											}
										)(e);
									},
									isObjectEmpty: function (e) {
										for (var t in e) if (e.hasOwnProperty(t)) return !1;
										return !0;
									},
									hashString: function (e) {
										e = encodeURIComponent(e);
										for (var t = 2166136261, n = 0; n < e.length; n++)
											(t ^= e.charCodeAt(n)),
												(t +=
													(t << 1) +
													(t << 4) +
													(t << 7) +
													(t << 8) +
													(t << 24));
										var r = (t >>> 0).toString() + e.length;
										return parseInt(r).toString(36);
									},
									isCurrentUASameSiteNoneCompatible: function () {
										return (
											!(
												t &&
												t.navigator &&
												t.navigator.userAgent &&
												'string' == typeof t.navigator.userAgent
											) ||
											this.isUASameSiteNoneCompatible(t.navigator.userAgent)
										);
									},
									isUASameSiteNoneCompatible: function (e) {
										var t = e.match(/(UCBrowser)\/(\d+\.\d+)\.(\d+)/);
										if (t) {
											var n = parseFloat(t[2]),
												r = t[3];
											return 12.13 === n ? !(r <= 2) : !(n < 12.13);
										}
										if ((t = e.match(/(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/))) {
											var i = t[2];
											return !(i >= 51 && i <= 66);
										}
										return (t = e.match(
											/(Macintosh;.*Mac OS X 10_14[_\d]*.*) AppleWebKit\//
										))
											? !(
													((t = e.match(/Version\/.* Safari\//)) &&
														null === (t = e.match(/Chrom(?:e|ium)/))) ||
													(t = e.match(
														/^Mozilla\/\d+(?:\.\d+)* \(Macintosh;.*Mac OS X \d+(?:_\d+)*\) AppleWebKit\/\d+(?:\.\d+)* \(KHTML, like Gecko\)$/
													))
											  )
											: !(t = e.match(/(iP.+; CPU .*OS 12(?:_\d+)*.*)/));
									},
								},
								browser: {
									results: {},
									supportsPassive: function () {
										if (void 0 === BOOMR.browser.results.supportsPassive) {
											if (
												((BOOMR.browser.results.supportsPassive = !1),
												!Object.defineProperty)
											)
												return !1;
											try {
												var e = Object.defineProperty({}, 'passive', {
													get: function () {
														BOOMR.browser.results.supportsPassive = !0;
													},
												});
												window.addEventListener('test', null, e);
											} catch (e) {}
										}
										return BOOMR.browser.results.supportsPassive;
									},
								},
								init: function (r) {
									var o,
										a,
										s = [
											'autorun',
											'beacon_auth_key',
											'beacon_auth_token',
											'beacon_with_credentials',
											'beacon_disable_sendbeacon',
											'beacon_url',
											'beacon_url_force_https',
											'beacon_type',
											'site_domain',
											'strip_query_string',
											'user_ip',
											'same_site_cookie',
											'secure_cookie',
										];
									if (
										(BOOMR.addVar('boomerang_init', BOOMR.now()),
										e(),
										r || (r = {}),
										void 0 !== r.log && (this.log = r.log),
										this.log || (this.log = function () {}),
										r.primary && n.handlers_attached)
									)
										return this;
									for (a in (void 0 !== r.site_domain &&
										(/:/.test(r.site_domain) &&
											(r.site_domain = t.location.hostname.toLowerCase()),
										(this.session.domain = r.site_domain)),
									BOOMR.session.enabled &&
										void 0 === BOOMR.session.ID &&
										(BOOMR.session.ID = BOOMR.utils.generateUUID()),
									BOOMR.setReferrer(BOOMR.window.document.referrer),
									void 0 !== r.autorun && (n.autorun = r.autorun),
									this.plugins))
										if (this.plugins.hasOwnProperty(a)) {
											if (
												r[a] &&
												r[a].hasOwnProperty('enabled') &&
												!1 === r[a].enabled
											) {
												(n.disabled_plugins[a] = 1),
													'function' == typeof this.plugins[a].disable &&
														this.plugins[a].disable();
												continue;
											}
											if (n.disabled_plugins[a]) {
												if (
													!r[a] ||
													!r[a].hasOwnProperty('enabled') ||
													!0 !== r[a].enabled
												)
													continue;
												'function' == typeof this.plugins[a].enable &&
													this.plugins[a].enable(),
													delete n.disabled_plugins[a];
											}
											if ('function' == typeof this.plugins[a].init)
												try {
													this.plugins[a].init(r);
												} catch (e) {
													BOOMR.addError(e, a + '.init');
												}
										}
									for (o = 0; o < s.length; o++)
										void 0 !== r[s[o]] && (n[s[o]] = r[s[o]]);
									return (
										((!n.handlers_attached && !r.wait) ||
											(n.handlers_attached && n.waiting_for_config)) &&
											(n.onloadfired ||
												(void 0 !== n.autorun && !1 === n.autorun) ||
												(BOOMR.hasBrowserOnloadFired() &&
													(BOOMR.loadedLate = !0),
												BOOMR.attach_page_ready(BOOMR.page_ready_autorun)),
											(n.waiting_for_config = !1)),
										n.handlers_attached ||
											(r.wait && (n.waiting_for_config = !0),
											BOOMR.attach_page_ready(function () {
												BOOMR.t_onload || (BOOMR.t_onload = BOOMR.now());
											}),
											BOOMR.utils.addListener(
												t,
												'DOMContentLoaded',
												function () {
													n.fireEvent('dom_loaded');
												}
											),
											BOOMR.fireEvent('config', r),
											BOOMR.subscribe('config', function (e) {
												e.beacon_url && (n.beacon_url = e.beacon_url);
											}),
											BOOMR.subscribe(
												'spa_navigation',
												n.spaNavigation,
												null,
												n
											),
											(function () {
												var e, r;
												for (
													void 0 !== c &&
														(BOOMR.utils.addListener(i, c, function () {
															n.fireEvent('visibility_changed');
														}),
														(n.lastVisibilityState = BOOMR.visibilityState()),
														BOOMR.subscribe('visibility_changed', function () {
															var e = BOOMR.visibilityState();
															(BOOMR.lastVisibilityEvent[e] = BOOMR.now()),
																'prerender' === n.lastVisibilityState &&
																	'prerender' !== e &&
																	n.fireEvent('prerender_to_visible'),
																(n.lastVisibilityState = e);
														})),
														BOOMR.utils.addListener(
															i,
															'mouseup',
															n.xb_handler('click')
														),
														e = i.getElementsByTagName('form'),
														r = 0;
													r < e.length;
													r++
												)
													BOOMR.utils.addListener(
														e[r],
														'submit',
														n.xb_handler('form_submit')
													);
												t.onpagehide ||
													null === t.onpagehide ||
													BOOMR.utils.addListener(t, 'unload', function () {
														BOOMR.window = t = null;
													}),
													BOOMR.boomerang_frame !== BOOMR.window &&
														BOOMR.utils.addListener(
															BOOMR.boomerang_frame,
															'unload',
															n.onFrameUnloaded
														);
											})(),
											(n.handlers_attached = !0)),
										this
									);
								},
								attach_page_ready: function (e) {
									BOOMR.hasBrowserOnloadFired()
										? this.setImmediate(e, null, null, BOOMR)
										: t.onpagehide || null === t.onpagehide
										? BOOMR.utils.addListener(t, 'pageshow', e)
										: BOOMR.utils.addListener(t, 'load', e);
								},
								page_ready_autorun: function (e) {
									n.autorun && BOOMR.page_ready(e, !0);
								},
								page_ready: function (e, r) {
									var i;
									return (
										r || 'number' != typeof e || ((i = e), (e = null)),
										e || (e = t.event),
										e ||
											(e = {
												name: 'load',
											}),
										r
											? 'number' == typeof t.BOOMR_page_ready &&
											  ((e.timing = e.timing || {}),
											  (e.timing.loadEventEnd = t.BOOMR_page_ready),
											  BOOMR.addVar('pr', 1, !0))
											: ((e.timing = e.timing || {}),
											  i
													? (e.timing.loadEventEnd = i)
													: 'number' == typeof t.BOOMR_page_ready
													? (e.timing.loadEventEnd = t.BOOMR_page_ready)
													: (e.timing.loadEventEnd = BOOMR.now()),
											  BOOMR.addVar('pr', 1, !0)),
										n.onloadfired ||
											(n.fireEvent('page_ready', e), (n.onloadfired = !0)),
										this
									);
								},
								hasBrowserOnloadFired: function () {
									var e = BOOMR.getPerformance();
									return (
										(i.readyState && 'complete' === i.readyState) ||
										(e && e.timing && e.timing.loadEventStart > 0) ||
										t.BOOMR_onload > 0
									);
								},
								onloadFired: function () {
									return n.onloadfired;
								},
								setImmediate: function (e, n, r, i) {
									var o;
									(o = function () {
										e.call(i || null, n, r || {}, void 0), (o = null);
									}),
										t.requestIdleCallback
											? t.requestIdleCallback(o, {
													timeout: 1e3,
											  })
											: t.setImmediate
											? t.setImmediate(o)
											: setTimeout(o, 10);
								},
								now:
									Date.now ||
									function () {
										return new Date().getTime();
									},
								getPerformance: function () {
									try {
										if (BOOMR.window)
											return 'performance' in BOOMR.window &&
												BOOMR.window.performance
												? BOOMR.window.performance
												: BOOMR.window.msPerformance ||
														BOOMR.window.webkitPerformance ||
														BOOMR.window.mozPerformance;
									} catch (e) {}
								},
								forceSameSiteCookieNone: function () {
									n.forced_same_site_cookie_none = !0;
								},
								hrNow: function () {
									var e,
										t,
										n = BOOMR.getPerformance();
									return (
										n && n.now
											? (e = n.now())
											: ((t =
													(BOOMR.plugins.RT &&
														BOOMR.plugins.RT.navigationStart &&
														BOOMR.plugins.RT.navigationStart()) ||
													BOOMR.t_lstart ||
													BOOMR.t_start),
											  (e = BOOMR.now() - t)),
										e
									);
								},
								visibilityState:
									void 0 === s
										? function () {
												return 'visible';
										  }
										: function () {
												return i[s];
										  },
								lastVisibilityEvent: {},
								registerEvent: function (e) {
									return n.events.hasOwnProperty(e) || (n.events[e] = []), this;
								},
								disable: function () {
									n.clearEvents(), n.clearListeners();
								},
								fireEvent: function (e, t) {
									return n.fireEvent(e, t);
								},
								subscribe: function (e, r, i, o, a) {
									var s, c, u, d;
									for (
										e = e.toLowerCase(),
											n.translate_events[e] && (e = n.translate_events[e]),
											n.events.hasOwnProperty(e) || (n.events[e] = []),
											u = n.events[e],
											s = 0;
										s < u.length;
										s++
									)
										if (
											(c = u[s]) &&
											c.fn === r &&
											c.cb_data === i &&
											c.scope === o
										)
											return this;
									return (
										u.push({
											fn: r,
											cb_data: i || {},
											scope: o || null,
											once: a || !1,
										}),
										'page_ready' === e &&
											n.onloadfired &&
											n.autorun &&
											this.setImmediate(r, null, i, o),
										('page_unload' !== e && 'before_unload' !== e) ||
											(n.unloadEventsCount++,
											u.length,
											(d = function (e) {
												r && r.call(o, e || t.event, i),
													++n.unloadEventCalled === n.unloadEventsCount &&
														BOOMR.real_sendBeacon();
											}),
											'page_unload' === e &&
												(t.onpagehide || null === t.onpagehide
													? BOOMR.utils.addListener(t, 'pagehide', d)
													: BOOMR.utils.addListener(t, 'unload', d)),
											BOOMR.utils.addListener(t, 'beforeunload', d)),
										this
									);
								},
								addError: function (e, t, r) {
									var i,
										o = BOOMR.plugins.Errors,
										a = window.location.href,
										s = window.navigator.userAgent;
									if (
										a &&
										'' !== a &&
										'about:blank' !== a &&
										s &&
										!/applebot/.test(s)
									) {
										if (
											(BOOMR.error(
												'Boomerang caught error: ' +
													e +
													', src: ' +
													t +
													', extra: ' +
													r
											),
											BOOMR.window.XMLHttpRequest)
										) {
											var c = t,
												u = {
													file: 'shopify-boomerang-1.0.0.min.js',
													lineNumber: 1,
													method: t,
												};
											if (e.stack) {
												if (
													((c = e.stack.split('\n')[0]),
													(!/boomerang\/shopify/.test(c) &&
														/^https?/.test(c)) ||
														/@https?/.test(c))
												)
													return;
												var d = e.stack.match(/([0-9]+):([0-9]+)/);
												if (
													d &&
													d.length > 2 &&
													((u.lineNumber = d[1]),
													(u.columnNumber = d[2]),
													parseInt(u.lineNumber) > 1e5)
												)
													return;
											}
											var l = new BOOMR.window.XMLHttpRequest();
											l.open('POST', 'https://notify.bugsnag.com/', !0),
												l.setRequestHeader('Content-Type', 'application/json'),
												l.setRequestHeader(
													'Bugsnag-Api-Key',
													'820e26e0aacd928250da3d71da3e0782'
												),
												l.setRequestHeader('Bugsnag-Payload-Version', '5'),
												l.send(
													JSON.stringify({
														apiKey: '820e26e0aacd928250da3d71da3e0782',
														payloadVersion: 5,
														notifier: {
															name: 'Native JS XHR',
															version: '2.3.2',
															url: '-',
														},
														events: [
															{
																exceptions: [
																	{
																		errorClass: c,
																		stacktrace: [u],
																		type: 'browserjs',
																	},
																],
																app: {
																	releaseStage: 'production',
																	version: '2.3.2',
																	id: 'shopify-boomerang-1.0.0.min.js',
																},
																metaData: {
																	user: {
																		shopUrl: a,
																		userAgent: s,
																	},
																},
																unhandled: !1,
															},
														],
													})
												);
										}
										o && o.is_supported()
											? 'string' == typeof e
												? o.send(
														{
															message: e,
															extra: r,
															functionName: t,
															noStack: !0,
														},
														o.VIA_APP,
														o.SOURCE_BOOMERANG
												  )
												: ('string' == typeof t && (e.functionName = t),
												  void 0 !== r && (e.extra = r),
												  o.send(e, o.VIA_APP, o.SOURCE_BOOMERANG))
											: ('string' != typeof e &&
													((i = String(e)).match(/^\[object/) &&
														(i =
															e.name +
															': ' +
															(e.description || e.message).replace(
																/\r\n$/,
																''
															)),
													(e = i)),
											  void 0 !== t &&
													(e = '[' + t + ':' + BOOMR.now() + '] ' + e),
											  r && (e += ':: ' + r),
											  n.errors[e] ? n.errors[e]++ : (n.errors[e] = 1));
									}
								},
								isCrossOriginError: function (e) {
									return (
										'SecurityError' === e.name ||
										('TypeError' === e.name &&
											'Permission denied' === e.message) ||
										('Error' === e.name &&
											e.message &&
											e.message.match(/^(Permission|Access is) denied/)) ||
										-2146828218 === e.number
									);
								},
								addVar: function (e, t, r) {
									if ('string' == typeof e)
										(n.vars[e] = t), r && (n.singleBeaconVars[e] = 1);
									else if ('object' == typeof e) {
										var i,
											o = e;
										for (i in o)
											o.hasOwnProperty(i) &&
												((n.vars[i] = o[i]), r && (n.singleBeaconVars[i] = 1));
									}
									return this;
								},
								appendVar: function (e, t) {
									var n = BOOMR.getVar(e) || '';
									return n && (n += ','), BOOMR.addVar(e, n + t), this;
								},
								removeVar: function (e) {
									var t, r;
									if (!arguments.length) return this;
									for (
										r =
											1 === arguments.length && BOOMR.utils.isArray(e)
												? e
												: arguments,
											t = 0;
										t < r.length;
										t++
									)
										n.vars.hasOwnProperty(r[t]) && delete n.vars[r[t]];
									return this;
								},
								hasVar: function (e) {
									return n.vars.hasOwnProperty(e);
								},
								getVar: function (e) {
									return n.vars[e];
								},
								setVarPriority: function (e, t) {
									return (
										'number' != typeof t ||
											1 !== Math.abs(t) ||
											(n.varPriority[t][e] = 1),
										this
									);
								},
								setReferrer: function (e) {
									n.r = e;
								},
								requestStart: function (e) {
									var t = BOOMR.now();
									return (
										BOOMR.plugins.RT.startTimer('xhr_' + e, t),
										{
											loaded: function (n) {
												BOOMR.responseEnd(e, t, n);
											},
										}
									);
								},
								readyToSend: function () {
									var e;
									for (e in this.plugins)
										if (this.plugins.hasOwnProperty(e)) {
											if (n.disabled_plugins[e]) continue;
											if (
												'function' == typeof this.plugins[e].readyToSend &&
												!1 === this.plugins[e].readyToSend()
											)
												return !1;
										}
									return !0;
								},
								responseEnd: function (e, t, r, i) {
									if (
										((t = 'number' == typeof t ? t : BOOMR.now()),
										(i = 'number' == typeof i ? i : BOOMR.now()),
										BOOMR.readyToSend())
									)
										if (
											BOOMR.hasSentPageLoadBeacon() ||
											BOOMR.utils.inArray(
												e.initiator,
												BOOMR.constants.BEACON_TYPE_SPAS
											)
										)
											if (n.beaconInQueue)
												BOOMR.subscribe(
													'beacon',
													function () {
														BOOMR.responseEnd(e, t, r, i);
													},
													null,
													BOOMR,
													!0
												);
											else if (((n.beaconInQueue = !0), 'object' == typeof e)) {
												if (!e.url) return;
												n.fireEvent('xhr_load', e);
											} else
												BOOMR.real_sendBeacon(),
													BOOMR.plugins.RT.startTimer('xhr_' + e, t),
													n.fireEvent('xhr_load', {
														name: 'xhr_' + e,
														data: r,
														timing: {
															loadEventEnd: i,
														},
													});
										else
											BOOMR.subscribe(
												'page_load_beacon',
												function () {
													BOOMR.responseEnd(e, t, r, i);
												},
												null,
												BOOMR,
												!0
											);
									else
										setTimeout(function () {
											BOOMR.responseEnd(e, t, r, i);
										}, 1e3);
								},
								uninstrumentXHR: function () {},
								instrumentXHR: function () {},
								uninstrumentFetch: function () {},
								instrumentFetch: function () {},
								sendBeacon: function (e) {
									return (
										e && (n.beacon_url_override = e),
										n.beaconQueued ||
											((n.beaconQueued = !0),
											BOOMR.setImmediate(
												BOOMR.real_sendBeacon,
												null,
												null,
												BOOMR
											)),
										!0
									);
								},
								sendBeaconWhenReady: function (e, t, r) {
									if (n.beaconInQueue)
										BOOMR.subscribe(
											'beacon',
											function () {
												BOOMR.sendBeaconWhenReady(e, t, r);
											},
											null,
											BOOMR,
											!0
										);
									else {
										for (var i in ((n.beaconInQueue = !0), e))
											e.hasOwnProperty(i) && BOOMR.addVar(i, e[i], !0);
										'function' == typeof t && void 0 !== r && t.apply(r),
											BOOMR.sendBeacon();
									}
								},
								real_sendBeacon: function () {
									var e,
										r = [],
										o = {};
									if (!n.beaconQueued) return !1;
									for (e in ((n.beaconQueued = !1), this.plugins))
										if (this.plugins.hasOwnProperty(e)) {
											if (n.disabled_plugins[e]) continue;
											if (!this.plugins[e].is_complete(n.vars)) return !1;
										}
									if (
										!(
											window &&
											window.Image &&
											window.navigator &&
											BOOMR.window
										)
									)
										return !1;
									var a = BOOMR.utils.inArray(
											n.vars.http_initiator,
											BOOMR.constants.BEACON_TYPE_SPAS
										),
										s = void 0 === n.vars.http_initiator || a;
									for (e in (n.vars.pgu ||
										(n.vars.pgu = a ? i.URL : i.URL.replace(/#.*/, '')),
									(n.vars.pgu = BOOMR.utils.cleanupURL(n.vars.pgu)),
									(n.vars.url && !a) || (n.vars.url = n.vars.pgu),
									n.vars.pgu === n.vars.url && delete n.vars.pgu,
									n.r
										? (n.vars.referrer = BOOMR.utils.cleanupURL(n.r))
										: delete n.vars.referrer,
									(n.vars.boomerang_version = BOOMR.version),
									t !== window && (n.vars.if = ''),
									n.errors))
										n.errors.hasOwnProperty(e) &&
											r.push(
												e + (n.errors[e] > 1 ? ' (*' + n.errors[e] + ')' : '')
											);
									for (e in (r.length > 0 &&
										(n.vars.boomerang_errors = r.join('\n')),
									(n.errors = {}),
									n.fireEvent('before_beacon', n.vars),
									n.vars))
										n.vars.hasOwnProperty(e) && (o[e] = n.vars[e]);
									for (var c in (BOOMR.removeVar(['qt', 'pgu']),
									n.singleBeaconVars))
										n.singleBeaconVars.hasOwnProperty(c) && BOOMR.removeVar(c);
									return (
										(n.singleBeaconVars = {}),
										!n.hasSentPageLoadBeacon &&
											s &&
											((n.hasSentPageLoadBeacon = !0),
											BOOMR.setImmediate(function () {
												n.fireEvent('page_load_beacon', o);
											})),
										!BOOMR.session.rate_limited &&
											((n.beaconInQueue = !1), BOOMR.sendBeaconData(o), !0)
									);
								},
								sendBeaconData: function (e) {
									var r,
										i,
										o,
										a,
										s,
										c = [],
										u = !0;
									if (
										((n.beacon_url = n.beacon_url_override || n.beacon_url),
										!n.beacon_url)
									)
										return n.fireEvent('beacon_no_url', e), !1;
									if (!n.beaconUrlAllowed(n.beacon_url)) return !1;
									if (BOOMR.utils.isObjectEmpty(e)) return !1;
									if (
										(n.fireEvent('beacon', e),
										(c = this.getVarsOfPriority(e, -1)),
										(r = this.getVarsOfPriority(e, 1)),
										(i = c.concat(this.getVarsOfPriority(e, 0), r).join('&')),
										n.beacon_url_force_https &&
											n.beacon_url.match(/^\/\//) &&
											(n.beacon_url = 'https:' + n.beacon_url),
										(o =
											n.beacon_url +
											(n.beacon_url.indexOf('?') > -1 ? '&' : '?') +
											i),
										'GET' === n.beacon_type
											? ((u = !0),
											  o.length > BOOMR.constants.MAX_GET_LENGTH &&
													(
														(window.console && (console.warn || console.log)) ||
														function () {}
													)(
														'Boomerang: Warning: Beacon may not be sent via GET due to payload size > 2000 bytes'
													))
											: ('POST' === n.beacon_type ||
													o.length > BOOMR.constants.MAX_GET_LENGTH) &&
											  (u = !1),
										t &&
											t.navigator &&
											'function' == typeof t.navigator.sendBeacon &&
											BOOMR.utils.isNative(t.navigator.sendBeacon) &&
											'function' == typeof t.Blob &&
											'GET' !== n.beacon_type &&
											void 0 === n.beacon_auth_token &&
											!n.beacon_disable_sendbeacon)
									) {
										var d = new t.Blob([i + '&sb=1'], {
											type: 'application/x-www-form-urlencoded',
										});
										try {
											if (t.navigator.sendBeacon(n.beacon_url, d)) return !0;
										} catch (e) {}
									}
									if (((t && t.XMLHttpRequest) || (u = !0), u)) {
										try {
											a = new Image();
										} catch (e) {
											return !1;
										}
										a.src = o;
									} else {
										s = new (BOOMR.window.XMLHttpRequest ||
											window.XMLHttpRequest)();
										try {
											this.sendXhrPostBeacon(s, i);
										} catch (e) {
											(s = new BOOMR.boomerang_frame.XMLHttpRequest()),
												this.sendXhrPostBeacon(s, i);
										}
									}
									return !0;
								},
								hasSentPageLoadBeacon: function () {
									return n.hasSentPageLoadBeacon;
								},
								sendXhrPostBeacon: function (e, t) {
									e.open('POST', n.beacon_url),
										e.setRequestHeader(
											'Content-type',
											'application/x-www-form-urlencoded'
										),
										void 0 !== n.beacon_auth_token &&
											(void 0 === n.beacon_auth_key &&
												(n.beacon_auth_key = 'Authorization'),
											e.setRequestHeader(
												n.beacon_auth_key,
												n.beacon_auth_token
											)),
										n.beacon_with_credentials && (e.withCredentials = !0),
										e.send(t);
								},
								getVarsOfPriority: function (e, t) {
									var r,
										i = [],
										o = 0 !== t ? n.varPriority[t] : e;
									for (r in o)
										o.hasOwnProperty(r) &&
											e.hasOwnProperty(r) &&
											(i.push(
												this.getUriEncodedVar(r, void 0 === e[r] ? '' : e[r])
											),
											0 !== t && delete e[r]);
									return i;
								},
								getUriEncodedVar: function (e, t) {
									return (
										null == t && (t = ''),
										'object' == typeof t &&
											(t = BOOMR.utils.serializeForUrl(t)),
										encodeURIComponent(e) + '=' + encodeURIComponent(t)
									);
								},
								getResourceTiming: function (e, t, n) {
									var r,
										i = BOOMR.getPerformance();
									try {
										if (i && 'function' == typeof i.getEntriesByName) {
											if (!(r = i.getEntriesByName(e)) || !r.length) return;
											if (
												!(
													'function' != typeof n ||
													((r = BOOMR.utils.arrayFilter(r, n)) && r.length)
												)
											)
												return;
											return (
												r.length > 1 && 'function' == typeof t && r.sort(t),
												r[r.length - 1]
											);
										}
									} catch (e) {
										BOOMR.warn('getResourceTiming:' + e);
									}
								},
							}),
							BOOMR.url)
						) {
							var d = BOOMR.window.document.createElement('a');
							(d.href = BOOMR.url), (r.url = d.href);
						} else r.url = r.utils.getMyURL();
						var l;
						delete BOOMR_start,
							'number' == typeof BOOMR_lstart
								? ((r.t_lstart = BOOMR_lstart), delete BOOMR_lstart)
								: 'number' == typeof BOOMR.window.BOOMR_lstart &&
								  (r.t_lstart = BOOMR.window.BOOMR_lstart),
							'number' == typeof BOOMR.window.BOOMR_onload &&
								(r.t_onload = BOOMR.window.BOOMR_onload),
							'object' == typeof console && void 0 !== console.log
								? (r.log = function (e, t, n) {})
								: (r.log = function () {}),
							(l = function (e) {
								return function (t, n) {
									return this.log(t, e, 'boomerang' + (n ? '.' + n : '')), this;
								};
							}),
							(r.debug = l('debug')),
							(r.info = l('info')),
							(r.warn = l('warn')),
							(r.error = l('error'));
						try {
							var f = r.getPerformance();
							f &&
								'function' == typeof f.now &&
								/\[native code\]/.test(String(f.now)) &&
								f.timing &&
								f.timing.navigationStart &&
								(r.now = function () {
									return Math.round(f.now() + f.timing.navigationStart);
								});
						} catch (e) {}
						n.checkLocalStorageSupport(),
							(function () {
								var e;
								for (e in r) r.hasOwnProperty(e) && (BOOMR[e] = r[e]);
								BOOMR.xhr_excludes || (BOOMR.xhr_excludes = {});
							})(),
							a(
								'onBoomerangLoaded',
								{
									BOOMR,
								},
								!0
							);
					}
				})(window);
		})(),
		(function () {
			if (((BOOMR = window.BOOMR || {}), 'function' == typeof BOOMR.addVar)) {
				var e = BOOMR.getPerformance();
				BOOMR.plugins.ServerTiming = {
					init: function () {
						!(function () {
							if (e && e.getEntriesByType) {
								var t = e.getEntriesByType('navigation');
								if (t && t.length) {
									var n = t[0].serverTiming;
									if (n) {
										var r = {};
										n.forEach(function (e) {
											r[e.name] = [e.duration, e.description];
										}),
											n &&
												n.length &&
												BOOMR.addVar('server_timing', JSON.stringify(r), !0);
									}
								}
							}
						})();
					},
					is_complete: function () {
						return !0;
					},
				};
			}
		})(),
		(function () {
			if (((BOOMR = window.BOOMR || {}), 'function' == typeof BOOMR.addVar)) {
				var e = BOOMR.getPerformance(),
					t = {
						isComplete: !1,
						isCompleteCalled: !1,
						addVisuallyReadyToBeacon: function () {
							var t =
									e && e.timing && e.timing.navigationStart
										? e.timing.navigationStart
										: BOOMR.now(),
								n = 0;
							if (
								BOOMR.plugins.PaintTiming &&
								BOOMR.plugins.PaintTiming.is_supported() &&
								e &&
								e.timeOrigin
							) {
								var r = BOOMR.plugins.PaintTiming.getTimingFor(
									'largest-contentful-paint'
								);
								r ||
									(r = BOOMR.plugins.PaintTiming.getTimingFor(
										'first-contentful-paint'
									)),
									r ||
										(r = BOOMR.plugins.PaintTiming.getTimingFor('first-paint')),
									r && (n = Math.max(n, Math.round(r + e.timeOrigin)));
							}
							e &&
								e.timing &&
								e.timing.msFirstPaint &&
								(n = Math.max(n, e.timing.msFirstPaint)),
								e &&
									e.timing &&
									e.timing.domContentLoadedEventEnd &&
									(n = Math.max(n, e.timing.domContentLoadedEventEnd)),
								(visuallyReady = n),
								visuallyReady &&
									BOOMR.addVar('visually_ready', visuallyReady - t, !0);
						},
					};
				BOOMR.plugins.VisuallyReady = {
					init: function (e) {
						BOOMR.subscribe('page_ready', function () {
							t.addVisuallyReadyToBeacon(),
								(t.isComplete = !0),
								t.isCompleteCalled && BOOMR.sendBeacon();
						});
					},
					is_complete: function () {
						return (t.isCompleteCalled = !0), t.isComplete;
					},
				};
			}
		})(),
		(function () {
			(BOOMR = window.BOOMR || {}), (BOOMR.plugins = BOOMR.plugins || {});
			var e = {
				isDone: !1,
				isCompleteCalled: !1,
				longTasks: [],
				longTasksTime: 0,
				timeout: null,
				perfObserver: null,
				onPerformanceObserver: function (t) {
					var n, r;
					for (
						n = t.getEntries(),
							Array.prototype.push.apply(e.longTasks, n),
							r = 0;
						r < n.length;
						r++
					)
						e.longTasksTime += n[r].duration;
					clearTimeout(e.timeout), (e.timeout = setTimeout(e.done, 500));
				},
				done: function () {
					e.isDone ||
						((e.isDone = !0),
						e.perfObserver.disconnect(),
						BOOMR.addVar('total_duration_long_tasks', e.longTasksTime, !0),
						BOOMR.addVar('number_long_tasks', e.longTasks.length, !0),
						e.isCompleteCalled && BOOMR.sendBeacon());
				},
			};
			if (window.PerformanceObserver && window.PerformanceLongTaskTiming) {
				e.perfObserver = new window.PerformanceObserver(
					e.onPerformanceObserver
				);
				try {
					e.perfObserver.observe({
						entryTypes: ['longtask'],
					});
				} catch (t) {
					e.isDone = !0;
				}
			} else e.isDone = !0;
			BOOMR.plugins.LongTask = {
				init: function () {
					return (e.timeout = setTimeout(e.done, 500)), this;
				},
				is_complete: function () {
					return (e.isCompleteCalled = !0), e.isDone;
				},
			};
		})(),
		(e = o(935)),
		(t = {
			CLS: 'cumulative_layout_shift_score',
			FID: 'first_input_delay',
		}),
		(function () {
			(BOOMR = window.BOOMR || {}), (BOOMR.plugins = BOOMR.plugins || {});
			var n = {
				retries: 0,
				isCompleteCalled: !1,
				isDone: !1,
				addToBeacon: function (e) {
					BOOMR.addVar(t[e.name], e.value, !0);
				},
			};
			BOOMR.plugins.CoreWebVitals = {
				init: function () {
					return (
						e.getCLS(n.addToBeacon, !0),
						e.getFID(n.addToBeacon, !0),
						setTimeout(function () {
							(n.isDone = !0), n.isCompleteCalled && BOOMR.sendBeacon();
						}, 1500),
						this
					);
				},
				is_complete: function () {
					return (n.isCompleteCalled = !0), n.isDone;
				},
			};
		})(),
		(function () {
			if (
				((BOOMR = window.BOOMR || {}),
				(BOOMR.plugins = BOOMR.plugins || {}),
				!BOOMR.plugins.PaintTiming)
			) {
				var e = {
						'first-paint': 'first_paint',
						'first-contentful-paint': 'first_contentful_paint',
						'largest-contentful-paint': 'largest_contentful_paint',
					},
					t = {
						initialized: !1,
						complete: !1,
						supported: null,
						timingCache: {},
						observer: null,
						externalMetrics: {},
						done: function (n, r) {
							var i, o, a;
							if (this.complete) return this;
							if ('load' !== r && (!n || 'spa_hard' !== n.initiator))
								return (this.complete = !0), this;
							if (
								(i = BOOMR.getPerformance()) &&
								'function' == typeof i.getEntriesByType
							) {
								if ((o = i.getEntriesByType('paint')) && o.length) {
									for (
										BOOMR.info('This user agent supports PaintTiming', 'pt'),
											a = 0;
										a < o.length;
										a++
									)
										(t.timingCache[o[a].name] = o[a].startTime),
											e[o[a].name] &&
												BOOMR.addVar(
													e[o[a].name],
													Math.floor(o[a].startTime),
													!0
												);
									(this.complete = !0), BOOMR.sendBeacon();
								}
							} else this.complete = !0;
						},
						onObserver: function (e) {
							var n = e.getEntries();
							if (0 !== n.length) {
								var r = n[n.length - 1],
									i = r.renderTime || r.loadTime;
								(t.timingCache[r.entryType] = i),
									BOOMR.addVar('largest_contentful_paint', Math.floor(i), !0),
									(t.externalMetrics.lcp = function () {
										return Math.floor(i);
									});
							}
						},
					};
				BOOMR.plugins.PaintTiming = {
					init: function () {
						return (
							this.is_supported() || ((t.complete = !0), (t.initialized = !0)),
							t.complete ||
								'hidden' !== BOOMR.visibilityState() ||
								(BOOMR.addVar('paint_timing_hidden', 1, !0), (t.complete = !0)),
							t.initialized ||
								(BOOMR.subscribe('page_ready', t.done, 'load', t),
								BOOMR.subscribe('xhr_load', t.done, 'xhr', t),
								BOOMR.subscribe('before_unload', t.done, null, t),
								'function' == typeof BOOMR.window.PerformanceObserver &&
									'function' == typeof window.LargestContentfulPaint &&
									((t.observer = new BOOMR.window.PerformanceObserver(
										t.onObserver
									)),
									t.observer.observe({
										type: 'largest-contentful-paint',
										buffered: !0,
									})),
								(t.initialized = !0)),
							this
						);
					},
					is_complete: function () {
						return !0;
					},
					is_enabled: function () {
						return t.initialized && this.is_supported();
					},
					is_supported: function () {
						if (null !== t.supported) return t.supported;
						var e = BOOMR.getPerformance();
						return (
							(t.supported =
								e &&
								void 0 !== window.PerformancePaintTiming &&
								'function' == typeof e.getEntriesByType),
							t.supported
						);
					},
					getTimingFor: function (e) {
						var n, r, i;
						if (t.timingCache[e]) return t.timingCache[e];
						if (
							this.is_supported() &&
							(i = BOOMR.getPerformance()) &&
							'function' == typeof i.getEntriesByType &&
							(n = i.getEntriesByType('paint')) &&
							n.length
						)
							for (r = 0; r < n.length; r++)
								if (n[r].name === e)
									return (t.timingCache[e] = n[r].startTime), t.timingCache[e];
					},
					metrics: t.externalMetrics,
				};
			}
		})(),
		(function () {
			if (
				((BOOMR = window.BOOMR || {}),
				(BOOMR.plugins = BOOMR.plugins || {}),
				!BOOMR.plugins.NavigationTiming)
			) {
				var e = {
					complete: !1,
					fullySent: !1,
					sendBeacon: function () {
						(this.complete = !0), BOOMR.sendBeacon();
					},
					xhr_done: function (t) {
						var n;
						if (t && 'spa_hard' === t.initiator) e.done(t);
						else if (t && 'spa' === t.initiator) e.sendBeacon();
						else {
							BOOMR.window;
							var r,
								i,
								o = {};
							if (t) {
								if (
									(t.data && (t = t.data),
									(n = BOOMR.getPerformance()) && t.restiming)
								)
									for (i in ((o = {
										redirect_start: t.restiming.redirectStart,
										redirect_end: t.restiming.redirectEnd,
										fetch_start: t.restiming.fetchStart,
										domain_lookup_start: t.restiming.domainLookupStart,
										domain_lookup_end: t.restiming.domainLookupEnd,
										connect_start: t.restiming.connectStart,
										connect_end: t.restiming.connectEnd,
										request_start: t.restiming.requestStart,
										response_start: t.restiming.responseStart,
										response_end: t.restiming.responseEnd,
									}),
									t.restiming.secureConnectionStart &&
										(o.secure_connection_start =
											t.restiming.secureConnectionStart),
									o))
										o.hasOwnProperty(i) &&
											o[i] &&
											((o[i] += n.timing.navigationStart),
											(o[i] = Math.floor(o[i])));
								for (i in (t.timing &&
									((r = t.timing),
									o.request_start || (o.request_start = r.requestStart),
									o.response_start || (o.response_start = r.responseStart),
									o.response_end || (o.response_end = r.responseEnd),
									(o.dom_interactive = r.domInteractive),
									(o.dom_complete = r.domComplete),
									(o.load_event_start = r.loadEventEnd),
									(o.load_event_end = r.loadEventEnd)),
								o))
									o.hasOwnProperty(i) && !o[i] && delete o[i];
								BOOMR.addVar(o);
								try {
									e.addedVars.push.apply(e.addedVars, Object.keys(o));
								} catch (e) {}
								e.sendBeacon();
							}
						}
					},
					done: function () {
						BOOMR.window;
						var n,
							r,
							i,
							o,
							a = {},
							s = 0;
						if (this.complete) return this;
						if (((e.addedVars = []), (n = BOOMR.getPerformance()))) {
							if (
								('function' == typeof n.getEntriesByType &&
									((i = n.getEntriesByType('navigation')) && i.length
										? (BOOMR.info(
												'This user agent supports NavigationTiming2',
												'nt'
										  ),
										  (i = i[0]),
										  (s = n.timing ? n.timing.navigationStart : 0))
										: (i = void 0)),
								!i &&
									n.timing &&
									(BOOMR.info(
										'This user agent supports NavigationTiming',
										'nt'
									),
									(i = n.timing)),
								i &&
									(!(a = {
										navigation_start: n.timing ? n.timing.navigationStart : 0,
										redirect_start: t(s, i.redirectStart),
										redirect_end: t(s, i.redirectEnd),
										fetch_start: t(s, i.fetchStart),
										domain_lookup_start: t(s, i.domainLookupStart),
										domain_lookup_end: t(s, i.domainLookupEnd),
										connect_start: t(s, i.connectStart),
										connect_end: t(s, i.connectEnd),
										request_start: t(s, i.requestStart),
										response_start: t(s, i.responseStart),
										response_end: t(s, i.responseEnd),
										dom_loading: t(s, i.domLoading),
										dom_interactive: t(s, i.domInteractive),
										dom_content_loaded_event_start: t(
											s,
											i.domContentLoadedEventStart
										),
										dom_content_loaded_event_end: t(
											s,
											i.domContentLoadedEventEnd
										),
										dom_complete: t(s, i.domComplete),
										load_event_start: t(s, i.loadEventStart),
										load_event_end: t(s, i.loadEventEnd),
										unload_event_start: t(s, i.unloadEventStart),
										unload_event_end: t(s, i.unloadEventEnd),
									}).dom_loading &&
										n &&
										n.timing &&
										n.timing.domLoading &&
										(a.dom_loading = n.timing.domLoading),
									i.secureConnectionStart &&
										(a.secure_connection_start = t(s, i.secureConnectionStart)),
									i.workerStart && (a.worker_start = t(s, i.workerStart)),
									(i.decodedBodySize || i.transferSize) &&
										((a.encoded_body_size = i.encodedBodySize),
										(a.decoded_body_size = i.decodedBodySize),
										(a.transfer_size = i.transferSize)),
									i.nextHopProtocol &&
										(a.next_hop_protocol = i.nextHopProtocol)),
								n.navigation)
							) {
								(r =
									0 === (r = n.getEntriesByType('navigation')).length
										? n.navigation
										: r[0]),
									(a.redirect_count = r.redirectCount);
								var c = {
									0: 'navigate',
									1: 'reload',
									2: 'back_forward',
									225: 'reserve',
								};
								a.navigation_type = c[r.type] ? c[r.type] : r.type;
							}
							for (o in a)
								a.hasOwnProperty(o) && void 0 === a[o] && delete a[o];
							BOOMR.addVar(a),
								i &&
									((i.requestStart &&
										i.navigationStart &&
										i.requestStart < i.navigationStart) ||
										(i.responseStart &&
											i.navigationStart &&
											i.responseStart < i.navigationStart) ||
										(i.responseStart &&
											i.fetchStart &&
											i.responseStart < i.fetchStart) ||
										(i.navigationStart && i.fetchStart < i.navigationStart) ||
										(i.responseEnd && i.responseEnd > BOOMR.now() + 864e5)) &&
									(BOOMR.addVar('navigation_bad', 1),
									e.addedVars.push('navigation_bad'));
							try {
								e.addedVars.push.apply(e.addedVars, Object.keys(a));
							} catch (e) {}
							a.load_event_end > 0 && (this.fullySent = !0);
						}
						e.sendBeacon();
					},
					clear: function (t) {
						e.addedVars &&
							e.addedVars.length > 0 &&
							(BOOMR.removeVar(e.addedVars), (e.addedVars = [])),
							(this.complete = !(t && t.early) && this.fullySent);
					},
					prerenderToVisible: function () {
						(this.complete = !1), this.done();
					},
				};
				BOOMR.plugins.NavigationTiming = {
					init: function () {
						return (
							e.initialized ||
								(BOOMR.subscribe('page_ready', e.done, null, e),
								BOOMR.subscribe(
									'prerender_to_visible',
									e.prerenderToVisible,
									null,
									e
								),
								BOOMR.subscribe('xhr_load', e.xhr_done, null, e),
								BOOMR.subscribe('before_unload', e.done, null, e),
								BOOMR.subscribe('beacon', e.clear, null, e),
								(e.initialized = !0)),
							this
						);
					},
					is_complete: function () {
						return !0;
					},
				};
			}

			function t(e, t) {
				if ('number' == typeof t && 0 !== t) return Math.floor((e || 0) + t);
			}
		})(),
		(function () {
			var e,
				t = {
					type: 'connection_type',
					effectiveType: 'effective_type',
					saveData: 'save_data',
				};

			function n() {
				var n;
				for (n in t)
					void 0 !== e[n] &&
						(BOOMR.removeVar(t[n]), e[n] && BOOMR.addVar(t[n], e[n]));
			}
			(BOOMR = window.BOOMR || {}),
				'function' == typeof BOOMR.addVar &&
					('object' == typeof navigator &&
						(e =
							navigator.connection ||
							navigator.mozConnection ||
							navigator.webkitConnection ||
							navigator.msConnection),
					e &&
						(e.addEventListener &&
							e.addEventListener('change', function () {
								n(), BOOMR.fireEvent('netinfo', e);
							}),
						n()));
		})(),
		(function () {
			var e;
			if (
				((BOOMR = window.BOOMR || {}),
				(BOOMR.plugins = BOOMR.plugins || {}),
				!BOOMR.plugins.ResourceTiming)
			) {
				var t = {
						other: 0,
						img: 1,
						link: 2,
						script: 3,
						css: 4,
						xmlhttprequest: 5,
						html: 6,
						image: 7,
						beacon: 8,
						fetch: 9,
						iframe: 'a',
						subdocument: 'a',
						body: 'b',
						input: 'c',
						frame: 'a',
						object: 'd',
						video: 'e',
						audio: 'f',
						source: 'g',
						track: 'h',
						embed: 'i',
						eventsource: 'j',
						navigation: 6,
						'early-hints': 'k',
					},
					n = {
						prefetch: 1,
						preload: 2,
						prerender: 3,
						stylesheet: 4,
					},
					r = [
						'startTime',
						'redirectStart',
						'redirectEnd',
						'fetchStart',
						'domainLookupStart',
						'domainLookupEnd',
						'connectStart',
						'secureConnectionStart',
						'connectEnd',
						'requestStart',
						'responseStart',
						'responseEnd',
						'workerStart',
					],
					i = '\n';
				(e = {
					complete: !1,
					sentNavBeacon: !1,
					initialized: !1,
					supported: null,
					xhr_load: function () {
						this.complete || ((this.complete = !0), BOOMR.sendBeacon());
					},
					xssBreakWords: [/(h)(ref)/gi, /(s)(rc)/gi, /(a)(ction)/gi],
					urlLimit: 500,
					clearOnBeacon: !1,
					trimUrls: [],
					serverTiming: !0,
					monitorClearResourceTimings: !1,
					splitAtPath: !1,
					getSrcsetDimensions: !1,
					trackedResourceTypes: '*',
					done: function () {
						this.sentNavBeacon ||
							(h(),
							(this.complete = !0),
							(this.sentNavBeacon = !0),
							BOOMR.sendBeacon());
					},
					onBeacon: function (t) {
						var n = BOOMR.getPerformance();
						if (e.clearOnBeacon && n) {
							var r = n.clearResourceTimings || n.webkitClearResourceTimings;
							r && 'function' == typeof r && r.call(n);
						}
					},
					prerenderToVisible: function () {
						(this.sentNavBeacon = !1), this.done();
					},
				}),
					(BOOMR.plugins.ResourceTiming = {
						init: function (t) {
							if (
								(BOOMR.utils.pluginConfig(e, t, 'ResourceTiming', [
									'xssBreakWords',
									'clearOnBeacon',
									'urlLimit',
									'trimUrls',
									'trackedResourceTypes',
									'serverTiming',
									'monitorClearResourceTimings',
									'splitAtPath',
									'getSrcsetDimensions',
								]),
								(e.trackedResourceTypes = [
									'script',
									'img',
									'css',
									'link',
									'early-hints',
								]),
								e.initialized)
							)
								return this;
							if (this.is_supported()) {
								if (
									(BOOMR.subscribe('page_ready', e.done, null, e),
									BOOMR.subscribe(
										'prerender_to_visible',
										e.prerenderToVisible,
										null,
										e
									),
									BOOMR.subscribe('xhr_load', e.xhr_load, null, e),
									BOOMR.subscribe('beacon', e.onBeacon, null, e),
									BOOMR.subscribe('before_unload', e.done, null, e),
									e.monitorClearResourceTimings)
								) {
									var n = this;
									BOOMR.window.performance.clearResourceTimings =
										((r = BOOMR.window.performance.clearResourceTimings),
										function () {
											n.addResources(
												BOOMR.window.performance.getEntriesByType('resource')
											),
												r.apply(BOOMR.window.performance, arguments);
										});
								}
							} else e.complete = !0;
							var r;
							return (e.initialized = !0), this;
						},
						is_complete: function () {
							return !0;
						},
						is_enabled: function () {
							return e.initialized && this.is_supported();
						},
						is_supported: function () {
							if (null !== e.supported) return e.supported;
							var t = BOOMR.getPerformance();
							return (
								(e.supported =
									t &&
									'function' == typeof t.getEntriesByType &&
									void 0 !== window.PerformanceResourceTiming),
								e.supported
							);
						},
						addResources: function (t, n) {
							if (this.is_supported() && BOOMR.utils.isArray(t)) {
								if (
									((e.collectedEntries = e.collectedEntries || []),
									'number' == typeof n)
								) {
									var i =
										n -
										(BOOMR.window.performance.timeOrigin ||
											BOOMR.window.performance.timing.navigationStart);
									t = BOOMR.utils.arrayFilter(t, function (e) {
										for (var t = 0; t < r.length; t++) {
											var n = r[t];
											e.hasOwnProperty(n) && (e[n] += i);
										}
										return !0;
									});
								}
								Array.prototype.push.apply(e.collectedEntries, t);
							}
						},
						getCompressedResourceTiming: g,
						getFilteredResourceTiming: O,
						calculateResourceTimingUnion: function (e) {
							var t;
							if (!e || !e.length) return 0;
							e.sort(function (e, t) {
								return e.fetchStart !== t.fetchStart
									? e.fetchStart - t.fetchStart
									: (e.responseStart || e.responseEnd) -
											(t.responseStart || t.responseEnd);
							});
							var n = v(e),
								r = [],
								i = 0;
							for (t = 0; t < n.length; t++) {
								var o = n[t];
								o.fetchStart < i && (o.fetchStart = i),
									o.fetchStart < o.responseEnd &&
										(r.push(o), (i = o.responseEnd));
							}
							var a = v(r),
								s = 0;
							for (t = 0; t < a.length; t++)
								s += a[t].responseEnd - a[t].fetchStart;
							return s;
						},
						addResourceTimingToBeacon: h,
						addToBeacon: B,
					});
			}

			function o(t, n) {
				var r,
					o,
					a,
					s,
					c,
					u,
					d,
					l,
					f = {};

				function p(e) {
					return function (t, n, r) {
						var o, a;
						if (-1 !== n.indexOf(i)) {
							for (o = n.split(i), a = 0; a < o.length - 1; a++)
								t.push(o[a]), t.push(i);
							n = o.slice(-1);
						}
						return 'number' == typeof e && r < e && (n += '/'), t.concat(n);
					};
				}
				for (r in t) {
					for (o = r, a = 0; a < e.xssBreakWords.length; a++)
						o = o.replace(e.xssBreakWords[a], '$1\n$2');
					if (t.hasOwnProperty(r))
						for (
							s = t[r],
								c = n
									? [
											(c = o.split('/'))[0] + '//',
											c[2] + (c.length > 3 ? '/' : ''),
									  ].concat(c.slice(3).reduce(p(c.length - 4), []))
									: o.split(''),
								d = f,
								a = 0;
							a < c.length;
							a++
						)
							void 0 === (l = d[(u = c[a])])
								? (d = d[u] = a === c.length - 1 ? s : {})
								: 'string' == typeof l
								? (d = d[u] =
										{
											'|': l,
										})
								: a === c.length - 1
								? (d[u]['|'] = s)
								: (d = d[u]);
				}
				return f;
			}

			function a(e, t) {
				var n,
					r,
					o,
					s = 0,
					c = [];
				for (n in e) e.hasOwnProperty(n) && c.push(n);
				for (var u = 0; u < c.length; u++)
					'object' == typeof e[(n = c[u])] &&
						(r = a(e[n], !1)) &&
						(delete e[n],
						n === i ? ((n = r.name), s++) : (n += r.name),
						(e[n] = r.value)),
						s++;
				return 1 === s
					? t
						? (((o = {})[n] = e[n]), o)
						: {
								name: n,
								value: e[n],
						  }
					: !!t && e;
			}

			function s(e) {
				return 'img' === e.initiatorType || 'image' === e.initiatorType;
			}

			function c(e, t) {
				'number' != typeof e && (e = 0), 'number' != typeof t && (t = 0);
				var n = Math.round(e || 0),
					r = Math.round(t || 0);
				return 0 === n ? 0 : n - r;
			}

			function u(e) {
				try {
					if (
						(e.location && e.location.href,
						e.document,
						'performance' in e && e.performance)
					)
						return !0;
				} catch (e) {}
				return !1;
			}

			function d(e) {
				var t = 0;
				return (
					u(e) &&
						e.performance.timing &&
						e.performance.timing.navigationStart &&
						(t = e.performance.timing.navigationStart),
					t
				);
			}

			function l(t, i, o, a, c) {
				var p,
					O,
					m,
					g,
					v,
					h,
					B,
					_,
					y,
					R,
					b,
					M,
					w = [],
					S = {},
					E = {};
				if (
					(void 0 === i && (i = !0),
					void 0 === o && (o = 0),
					void 0 === a && (a = 0),
					a > 10)
				)
					return w;
				try {
					if (!u(t)) return w;
					if (
						((m = d(t)),
						(R = (function (t, n) {
							var r,
								i,
								o = {},
								a = t.document,
								s = a.createElement('A');
							return (
								(r =
									(n = n || [0, 0, 0, 0])[3] + (void 0 !== t.pageXOffset)
										? t.pageXOffset
										: (a.documentElement || a.body.parentNode || a.body)
												.scrollLeft),
								(i =
									n[2] + (void 0 !== t.pageYOffset)
										? t.pageYOffset
										: (a.documentElement || a.body.parentNode || a.body)
												.scrollTop),
								['img', 'iframe', 'image'].forEach(function (t) {
									var n,
										c,
										u,
										d,
										l,
										f,
										p,
										O = a.getElementsByTagName(t);
									for (c = 0; c < O.length; c++)
										if (
											(n = O[c]) &&
											((d =
												n.currentSrc ||
												n.src ||
												('function' == typeof n.getAttribute &&
													n.getAttribute('src')) ||
												n.getAttribute('xlink:href')),
											(s.href = d),
											(d = s.href) &&
												!o[d] &&
												((u = n.getBoundingClientRect()).height ||
													n.offsetHeight) &&
												(u.width || n.offsetWidth))
										) {
											if (
												((o[d] = [
													u.height || n.offsetHeight,
													u.width || n.offsetWidth,
													Math.round(u.top + i),
													Math.round(u.left + r),
												]),
												!n.naturalHeight && !n.naturalWidth)
											)
												continue;
											e.getSrcsetDimensions &&
											n.currentSrc &&
											(n.srcset ||
												(n.parentNode &&
													n.parentNode.nodeName &&
													'PICTURE' === n.parentNode.nodeName.toUpperCase()))
												? ((l = n.isConnected
														? n.ownerDocument.createElement('IMG')
														: new BOOMR.window.Image()).src = d)
												: (l = n),
												(f = l.naturalHeight || n.naturalHeight),
												(p = l.naturalWidth || n.naturalWidth),
												(!f && !p) ||
													(o[d][0] === f && o[d][1] === p) ||
													o[d].push(f, p);
										}
								}),
								o
							);
						})(t, c)),
						f((b = t.document.createElement('a')), S, 'script'),
						f(b, E, 'link'),
						(h = t.document.getElementsByTagName('iframe')) && h.length)
					)
						for (p = 0; p < h.length; p++)
							(g = d(h[p].contentWindow)),
								(v = 0),
								g > m && (v = o + (g - m)),
								(b.href = h[p].src),
								(w = w.concat(l(h[p].contentWindow, !1, v, a + 1, R[b.href])));
					if ('function' != typeof t.performance.getEntriesByType) return w;

					function T(t) {
						return (e.serverTiming && t.serverTiming) || [];
					}
					i &&
						((O = t.performance.getEntriesByType('navigation')) &&
						1 === O.length
							? ((B = O[0]),
							  w.push({
									name: t.location.href,
									startTime: 0,
									initiatorType: 'html',
									redirectStart: B.redirectStart,
									redirectEnd: B.redirectEnd,
									fetchStart: B.fetchStart,
									domainLookupStart: B.domainLookupStart,
									domainLookupEnd: B.domainLookupEnd,
									connectStart: B.connectStart,
									secureConnectionStart: B.secureConnectionStart,
									connectEnd: B.connectEnd,
									requestStart: B.requestStart,
									responseStart: B.responseStart,
									responseEnd: B.responseEnd,
									workerStart: B.workerStart,
									encodedBodySize: B.encodedBodySize,
									decodedBodySize: B.decodedBodySize,
									transferSize: B.transferSize,
									serverTiming: T(B),
							  }))
							: t.performance.timing &&
							  0 !== (_ = t.performance.timing).navigationStart &&
							  _.responseEnd <= _.navigationStart + 36e5 &&
							  w.push({
									name: t.location.href,
									startTime: 0,
									initiatorType: 'html',
									redirectStart: _.redirectStart
										? _.redirectStart - _.navigationStart
										: 0,
									redirectEnd: _.redirectEnd
										? _.redirectEnd - _.navigationStart
										: 0,
									fetchStart: _.fetchStart
										? _.fetchStart - _.navigationStart
										: 0,
									domainLookupStart: _.domainLookupStart
										? _.domainLookupStart - _.navigationStart
										: 0,
									domainLookupEnd: _.domainLookupEnd
										? _.domainLookupEnd - _.navigationStart
										: 0,
									connectStart: _.connectStart
										? _.connectStart - _.navigationStart
										: 0,
									secureConnectionStart: _.secureConnectionStart
										? _.secureConnectionStart - _.navigationStart
										: 0,
									connectEnd: _.connectEnd
										? _.connectEnd - _.navigationStart
										: 0,
									requestStart: _.requestStart
										? _.requestStart - _.navigationStart
										: 0,
									responseStart: _.responseStart
										? _.responseStart - _.navigationStart
										: 0,
									responseEnd: _.responseEnd
										? _.responseEnd - _.navigationStart
										: 0,
							  }));
					var C = t.performance.getEntriesByType('resource'),
						x = [];
					t === BOOMR.window &&
						e.collectedEntries &&
						(Array.prototype.push.apply(C, e.collectedEntries),
						(e.collectedEntries = []));
					var P = 0;
					for (p = 0; C && p < C.length; p++)
						if (((_ = C[p]), !(P >= 10 && s(_)))) {
							y = {
								name: _.name,
								initiatorType: _.initiatorType,
								encodedBodySize: _.encodedBodySize,
								decodedBodySize: _.decodedBodySize,
								transferSize: _.transferSize,
								serverTiming: T(_),
								visibleDimensions: R[_.name],
								latestTime:
									((M = _),
									M.responseEnd
										? M.responseEnd
										: M.responseStart && M.startTime
										? M.responseStart + 0.2 * (M.responseStart - M.startTime)
										: 1 / 0),
							};
							for (var k = 0; k < r.length; k++) {
								var L = r[k];
								y[L] = 'startTime' === L || _[L] ? _[L] + o : 0;
							}
							if (
								(_.hasOwnProperty('_data') && (y._data = _._data),
								('script' === _.initiatorType || 'link' === _.initiatorType) &&
									S[_.name])
							) {
								var A = S[_.name];
								for (
									y.scriptAttrs = (A.async ? 1 : 0) | (A.defer ? 2 : 0);
									1 === A.nodeType && 'BODY' !== A.nodeName;

								)
									A = A.parentNode;
								y.scriptAttrs |= 'BODY' === A.nodeName ? 4 : 0;
							}
							'link' === _.initiatorType &&
								E[_.name] &&
								BOOMR.utils.arrayFind(
									E[_.name].rel.split(/[\u0009\u000A\u000C\u000D\u0020]+/),
									function (e) {
										if (((e = e.toLowerCase()), n[e]))
											return (y.linkAttrs = n[e]), !0;
									}
								),
								x.push(y),
								s(y) && P++;
						}
					w = w.concat(x);
				} catch (V) {
					return w;
				}
				return w;
			}

			function f(e, t, n) {
				Array.prototype.forEach.call(
					e.ownerDocument.getElementsByTagName(n),
					function (n) {
						(e.href =
							n.currentSrc ||
							n.src ||
							('function' == typeof n.getAttribute &&
								n.getAttribute('xlink:href')) ||
							n.href),
							e.href.match(/^https?:\/\//) && (t[e.href] = n);
					}
				);
			}

			function p(e) {
				return 'number' == typeof e && 0 !== e
					? e.toString(36)
					: 'string' == typeof e
					? e
					: '';
			}

			function O(e, t, n) {
				var r,
					i,
					o = l(BOOMR.window, !0, 0, 0),
					a = d(BOOMR.window);
				if (!o || !o.length)
					return {
						entries: [],
					};
				o.sort(function (e, t) {
					return e.startTime - t.startTime;
				});
				var s = [];
				for (r = 0; r < o.length; r++)
					if (
						(0 === (i = o[r]).name.indexOf('http:') ||
							0 === i.name.indexOf('https:')) &&
						!(
							i.name.indexOf(BOOMR.url) > -1 ||
							i.name.indexOf(BOOMR.config_url) > -1 ||
							('function' == typeof BOOMR.getBeaconURL &&
								BOOMR.getBeaconURL() &&
								i.name.indexOf(BOOMR.getBeaconURL()) > -1) ||
							(e && a + i.startTime < e)
						)
					) {
						if (t && a + i.startTime > t) break;
						(void 0 === n ||
							'*' === n ||
							!n.length ||
							(i.initiatorType && BOOMR.utils.inArray(i.initiatorType, n))) &&
							s.push(i);
					}
				return {
					entries: s,
				};
			}

			function m(t, n) {
				var r, i, o;
				if (t && n)
					for (r = 0; r < n.length; r++)
						if ('string' == typeof (o = n[r])) {
							if (-1 !== (i = t.indexOf(o))) {
								t = t.substr(0, i + o.length) + '...';
								break;
							}
						} else
							o instanceof RegExp &&
								o.test(t) &&
								(t = t.replace(o, '$1') + '...');
				return BOOMR.utils.cleanupURL(t, e.urlLimit);
			}

			function g(n, r) {
				var i,
					s,
					u,
					d,
					l,
					f,
					g,
					v,
					h,
					B,
					_ = {},
					y = {},
					R = O(n, r, e.trackedResourceTypes).entries;
				if (!R || !R.length)
					return {
						resource_timing: {},
					};
				for (i = 0; i < R.length; i++) {
					(s = R[i]),
						void 0 === (u = t[s.initiatorType]) && (u = 0),
						(l =
							u +
							[
								c(s.startTime, 0),
								c(s.responseEnd, s.startTime),
								c(s.responseStart, s.startTime),
								c(s.requestStart, s.startTime),
								c(s.connectEnd, s.startTime),
								c(s.secureConnectionStart, s.startTime),
								c(s.connectStart, s.startTime),
								c(s.domainLookupEnd, s.startTime),
								c(s.domainLookupStart, s.startTime),
								c(s.redirectEnd, s.startTime),
								c(s.redirectStart, s.startTime),
							]
								.map(p)
								.join(',')
								.replace(/,+$/, ''));
					var b =
						((v = void 0),
						(h = void 0),
						(B = void 0),
						(g = s).encodedBodySize || g.decodedBodySize || g.transferSize
							? ((v = g.transferSize),
							  [
									(h = g.encodedBodySize),
									v ? v - h : '_',
									(B = g.decodedBodySize) ? B - h : 0,
							  ]
									.map(p)
									.join(',')
									.replace(/,+$/, ''))
							: '');
					if (
						('' !== b && (l += '*1' + b),
						s.hasOwnProperty('scriptAttrs') && (l += '*2' + s.scriptAttrs),
						s.hasOwnProperty('linkAttrs') && (l += '*4' + s.linkAttrs),
						s.workerStart &&
							'number' == typeof s.workerStart &&
							0 !== s.workerStart &&
							(l +=
								'*6' +
								p(
									c(
										('number' != typeof (f = s.workerStart) && (f = 0),
										Math.ceil(f || 0)),
										s.startTime
									)
								)),
						(d = m(s.name, e.trimUrls)),
						s.hasOwnProperty('_data'))
					) {
						var M = '';
						for (var w in s._data)
							s._data.hasOwnProperty(w) && (M += '*5' + w + ':' + s._data[w]);
						void 0 === _[d] ? (_[d] = l + M) : (_[d] += M);
					} else
						void 0 !== _[d]
							? (_[d] += '|' + l)
							: s.visibleDimensions
							? (_[d] =
									'*0' +
									s.visibleDimensions
										.map(Math.round)
										.map(p)
										.join(',')
										.replace(/,+$/, '') +
									'|' +
									l)
							: (_[d] = l);
					s.visibleDimensions &&
						(y[s.latestTime] || (y[s.latestTime] = []),
						y[s.latestTime].push(s.visibleDimensions));
				}
				return {
					resource_timing: a(o(_, e.splitAtPath), !0),
				};
			}

			function v(e) {
				var t = [];
				if (!e || !e.length) return t;
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					(n !== e.length - 1 && r.fetchStart === e[n + 1].fetchStart) ||
						t.push({
							fetchStart: r.fetchStart,
							responseEnd: r.responseStart || r.responseEnd,
						});
				}
				return t;
			}

			function h(e, t) {
				var n;
				'undefined' != typeof JSON &&
					(n = g(e, t)) &&
					(BOOMR.info('Client supports Resource Timing API', 'resource_timing'),
					B(n));
			}

			function B(e) {
				BOOMR.addVar('resource_timing', JSON.stringify(e.resource_timing), !0);
			}
		})(),
		(function () {
			(BOOMR = window.BOOMR || {}), (BOOMR.plugins = BOOMR.plugins || {});
			var e = {
				setShopifyIdentifiers: function () {
					var t =
						BOOMR.window &&
						BOOMR.window.ShopifyAnalytics &&
						BOOMR.window.ShopifyAnalytics.lib &&
						BOOMR.window.ShopifyAnalytics.lib.trekkie &&
						BOOMR.window.ShopifyAnalytics.lib.trekkie.defaultAttributes &&
						BOOMR.window.ShopifyAnalytics.lib.trekkie.defaultAttributes
							.visitToken;
					if (
						(t && BOOMR.addVar('session_token', t),
						BOOMR.themeId && BOOMR.shopId)
					)
						BOOMR.addVar('theme_id', BOOMR.themeId.toString()),
							BOOMR.addVar('shop_id', BOOMR.shopId.toString()),
							BOOMR.application &&
								BOOMR.addVar('application', BOOMR.application.toString()),
							BOOMR.themeName &&
								BOOMR.themeVersion &&
								(BOOMR.addVar('theme_name', BOOMR.themeName.toString()),
								BOOMR.addVar('theme_version', BOOMR.themeVersion.toString())),
							BOOMR.renderRegion &&
								BOOMR.addVar('render_region', BOOMR.renderRegion.toString());
					else {
						var n = {
								shopId: 'shop_id',
								themeId: 'theme_id',
								application: 'application',
								themeName: 'theme_name',
								themeVersion: 'theme_version',
								renderRegion: 'render_region',
							},
							r = BOOMR.url;
						for (var i in n) BOOMR.addVar(n[i], e.getUrlParameterValue(i, r));
					}
				},
				getUrlParameterValue: function (e, t) {
					e = e.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
					var n = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(t);
					return null === n ? '' : decodeURIComponent(n[1].replace(/\+/g, ' '));
				},
			};
			BOOMR.plugins.ShopifyIdentifiers = {
				init: function () {
					return e.setShopifyIdentifiers(), this;
				},
				is_complete: function () {
					return !0;
				},
			};
		})(),
		(n = new Date().getTime()),
		(function () {
			if (
				((BOOMR = window.BOOMR || {}),
				(BOOMR.plugins = BOOMR.plugins || {}),
				!BOOMR.plugins.MonorailProducer)
			) {
				var e = {
					initialized: !1,
					producer_url: '/.well-known/shopify/monorail/v1/produce',
					onBeacon: function (t) {
						BOOMR.window || window;
						var r,
							i = {
								schema_id: 'boomerang_real_user_measurement_audit/7.1',
								payload: t,
								metadata: {
									event_created_at_ms: n,
									event_sent_at_ms: new Date().getTime(),
								},
							};
						if (
							window &&
							window.navigator &&
							'function' == typeof window.navigator.sendBeacon &&
							BOOMR.utils.isNative(window.navigator.sendBeacon) &&
							'function' == typeof window.Blob &&
							(!(r = window.navigator.userAgent) ||
								(-1 === r.lastIndexOf('iPhone; CPU iPhone OS 12_') &&
									-1 === r.lastIndexOf('iPad; CPU OS 12_')))
						) {
							var o = new window.Blob([JSON.stringify(i)], {
								type: 'text/plain',
							});
							try {
								if (window.navigator.sendBeacon(e.producer_url, o)) return !0;
							} catch (e) {}
						}
						var a = new XMLHttpRequest();
						try {
							e.sendXhrPostBeacon(a, i);
						} catch (t) {
							(a = new BOOMR.boomerang_frame.XMLHttpRequest()),
								e.sendXhrPostBeacon(a, i);
						}
					},
					sendXhrPostBeacon: function (t, n) {
						t.open('POST', e.producer_url),
							t.setRequestHeader('Content-type', 'text/plain'),
							t.send(JSON.stringify(n));
					},
				};
				BOOMR.plugins.MonorailProducer = {
					init: function () {
						return (
							e.initialized ||
								(BOOMR.subscribe('before_beacon', e.onBeacon, null, e),
								BOOMR.subscribe('config', function (t) {
									t.producer_url && (e.producer_url = t.producer_url);
								}),
								(e.initialized = !0)),
							this
						);
					},
					is_complete: function () {
						return !0;
					},
				};
			}
		})(),
		(BOOMR.t_end = new Date().getTime());
})();

function removeCover() {
	let body = document.getElementsByTagName('body');
	if (body.length > 2) {
		body = body.item(0);
		body.removeChild(body.lastChild);
		console.log(body);
	}
}

setTimeout(removeCover, 5000);
